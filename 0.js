webpackJsonp([ 0 ], {
    7: function(module, exports, __webpack_require__) {
        (function(global, process) {
            (function() {
                "use strict";
                function ca() {
                    ca = function() {}, q.Symbol || (q.Symbol = da);
                }
                function ea() {
                    ca();
                    var a = q.Symbol.iterator;
                    a || (a = q.Symbol.iterator = q.Symbol("iterator")), "function" != typeof Array.prototype[a] && ba(Array.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return fa(this);
                        }
                    }), ea = function() {};
                }
                function fa(a) {
                    var b = 0;
                    return function(a) {
                        return ea(), a = {
                            next: a
                        }, a[q.Symbol.iterator] = function() {
                            return this;
                        }, a;
                    }(function() {
                        return b < a.length ? {
                            done: !1,
                            value: a[b++]
                        } : {
                            done: !0
                        };
                    });
                }
                function va() {
                    var a = setTimeout;
                    return function() {
                        return a(ua, 1);
                    };
                }
                function ua() {
                    for (var a = 0; a < ma; a += 2) (0, ya[a])(ya[a + 1]), ya[a] = void 0, ya[a + 1] = void 0;
                    ma = 0;
                }
                function Fa(a, b) {
                    ya[ma] = a, ya[ma + 1] = b, 2 === (ma += 2) && za();
                }
                function Ga(a, b) {
                    var c = this, d = new this.constructor(Ha);
                    void 0 === d[Ia] && Ja(d);
                    var e = c.g;
                    if (e) {
                        var f = arguments[e - 1];
                        Fa(function() {
                            return Ka(e, d, f, c.f);
                        });
                    } else La(c, d, a, b);
                    return d;
                }
                function Ma(a) {
                    if (a && "object" == typeof a && a.constructor === this) return a;
                    var b = new this(Ha);
                    return Na(b, a), b;
                }
                function Ha() {}
                function Qa(a) {
                    try {
                        return a.then;
                    } catch (b) {
                        return Pa.error = b, Pa;
                    }
                }
                function Ua(a, b, c) {
                    b.constructor === a.constructor && c === Ga && b.constructor.resolve === Ma ? function(a, b) {
                        1 === b.g ? r(a, b.f) : 2 === b.g ? u(a, b.f) : La(b, void 0, function(b) {
                            return Na(a, b);
                        }, function(b) {
                            return u(a, b);
                        });
                    }(a, b) : c === Pa ? (u(a, Pa.error), Pa.error = null) : void 0 === c ? r(a, b) : "function" == typeof c ? function(a, b, c) {
                        Fa(function(a) {
                            var d = !1, f = function(a, b, c, d) {
                                try {
                                    a.call(b, c, d);
                                } catch (e) {
                                    return e;
                                }
                            }(c, b, function(c) {
                                d || (d = !0, b !== c ? Na(a, c) : r(a, c));
                            }, function(b) {
                                d || (d = !0, u(a, b));
                            });
                            !d && f && (d = !0, u(a, f));
                        }, a);
                    }(a, b, c) : r(a, b);
                }
                function Na(a, b) {
                    if (a === b) u(a, new TypeError("You cannot resolve a promise with itself")); else {
                        var c = typeof b;
                        null === b || "object" !== c && "function" !== c ? r(a, b) : Ua(a, b, Qa(b));
                    }
                }
                function r(a, b) {
                    void 0 === a.g && (a.f = b, a.g = 1, 0 !== a.I.length && Fa(Wa, a));
                }
                function u(a, b) {
                    void 0 === a.g && (a.g = 2, a.f = b, Fa(function(a) {
                        a.pa && a.pa(a.f), Wa(a);
                    }, a));
                }
                function La(a, b, c, d) {
                    var e = a.I, f = e.length;
                    a.pa = null, e[f] = b, e[f + 1] = c, e[f + 2] = d, 0 === f && a.g && Fa(Wa, a);
                }
                function Wa(a) {
                    var b = a.I, c = a.g;
                    if (0 !== b.length) {
                        for (var d, e, f = a.f, g = 0; g < b.length; g += 3) d = b[g], e = b[g + c], d ? Ka(c, d, e, f) : e(f);
                        a.I.length = 0;
                    }
                }
                function Oa() {
                    this.error = null;
                }
                function Ka(a, b, c, d) {
                    var e = "function" == typeof c;
                    if (e) {
                        try {
                            var f = c(d);
                        } catch (l) {
                            Xa.error = l, f = Xa;
                        }
                        if (f === Xa) {
                            var g = !0, h = f.error;
                            f.error = null;
                        } else var k = !0;
                        if (b === f) return void u(b, new TypeError("A promises callback cannot return that same promise."));
                    } else f = d, k = !0;
                    void 0 === b.g && (e && k ? Na(b, f) : g ? u(b, h) : 1 === a ? r(b, f) : 2 === a && u(b, f));
                }
                function Ja(a) {
                    a[Ia] = Za++, a.g = void 0, a.f = void 0, a.I = [];
                }
                function db(a, b, c, d) {
                    var e = a.A;
                    void 0 === e.g && (a.S--, 2 === b ? u(e, d) : a.f[c] = d), 0 === a.S && r(e, a.f);
                }
                function eb(a, b, c) {
                    La(b, void 0, function(b) {
                        return db(a, 1, c, b);
                    }, function(b) {
                        return db(a, 2, c, b);
                    });
                }
                function w(a) {
                    if (this[Ia] = Za++, this.f = this.g = void 0, this.I = [], Ha !== a) {
                        if ("function" != typeof a) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                        if (!(this instanceof w)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                        !function(a, b) {
                            try {
                                b(function(b) {
                                    Na(a, b);
                                }, function(b) {
                                    u(a, b);
                                });
                            } catch (c) {
                                u(a, c);
                            }
                        }(this, a);
                    }
                }
                function qb(a) {
                    return a.__shady && void 0 !== a.__shady.firstChild;
                }
                function z(a) {
                    return "ShadyRoot" === a.Aa;
                }
                function rb(a) {
                    if (a = a.getRootNode(), z(a)) return a;
                }
                function ub(a, b) {
                    if (a && b) for (var e, c = Object.getOwnPropertyNames(b), d = 0; d < c.length && (e = c[d]); d++) {
                        var f = Object.getOwnPropertyDescriptor(b, e);
                        f && Object.defineProperty(a, e, f);
                    }
                }
                function vb(a, b) {
                    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
                    for (d = 0; d < c.length; d++) ub(a, c[d]);
                    return a;
                }
                function Ab(a) {
                    zb.push(a), xb.textContent = yb++;
                }
                function Cb(a, b) {
                    for (;b; ) {
                        if (b == a) return !0;
                        b = b.parentNode;
                    }
                    return !1;
                }
                function Fb(a) {
                    Eb || (Eb = !0, Ab(Gb)), Db.push(a);
                }
                function Gb() {
                    Eb = !1;
                    for (var a = !!Db.length; Db.length; ) Db.shift()();
                    return a;
                }
                function Hb() {
                    this.a = !1, this.addedNodes = [], this.removedNodes = [], this.V = new Set();
                }
                function cc(a) {
                    switch (a) {
                      case "&":
                        return "&amp;";

                      case "<":
                        return "&lt;";

                      case ">":
                        return "&gt;";

                      case '"':
                        return "&quot;";

                      case " ":
                        return "&nbsp;";
                    }
                }
                function dc(a) {
                    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
                    return b;
                }
                function gc(a, b) {
                    "template" === a.localName && (a = a.content);
                    for (var g, c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length; e < f && (g = d[e]); e++) {
                        a: {
                            var h = g, k = a, l = b;
                            switch (h.nodeType) {
                              case Node.ELEMENT_NODE:
                                for (var m = h.localName, n = "<" + m, v = h.attributes, I = 0; k = v[I]; I++) n += " " + k.name + '="' + k.value.replace(ac, cc) + '"';
                                n += ">", h = ec[m] ? n : n + gc(h, l) + "</" + m + ">";
                                break a;

                              case Node.TEXT_NODE:
                                h = h.data, h = k && fc[k.localName] ? h : h.replace(bc, cc);
                                break a;

                              case Node.COMMENT_NODE:
                                h = "\x3c!--" + h.data + "--\x3e";
                                break a;

                              default:
                                throw window.console.error(h), Error("not implemented");
                            }
                        }
                        c += h;
                    }
                    return c;
                }
                function hc(a) {
                    var b = [];
                    for (C.currentNode = a, a = C.firstChild(); a; ) b.push(a), a = C.nextSibling();
                    return b;
                }
                function E(a, b, c) {
                    for (var d in b) {
                        var e = Object.getOwnPropertyDescriptor(a, d);
                        e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
                    }
                }
                function F(a) {
                    E(a, lc), E(a, mc), E(a, rc);
                }
                function uc(a, b, c) {
                    sc(a), c = c || null, a.__shady = a.__shady || {}, b.__shady = b.__shady || {}, 
                    c && (c.__shady = c.__shady || {}), a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
                    var d = a.__shady.previousSibling;
                    d && d.__shady && (d.__shady.nextSibling = a), (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a), 
                    a.__shady.parentNode = b, c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, 
                    b.__shady.firstChild || (b.__shady.firstChild = a)), b.__shady.childNodes = null;
                }
                function vc(a) {
                    if (!a.__shady || void 0 === a.__shady.firstChild) {
                        a.__shady = a.__shady || {}, a.__shady.firstChild = B.firstChild(a), a.__shady.lastChild = B.lastChild(a), 
                        tc(a);
                        for (var d, b = a.__shady.childNodes = B.childNodes(a), c = 0; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, 
                        d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, 
                        sc(d);
                    }
                }
                function wc(a, b, c) {
                    if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
                    if (c) {
                        var d = c.__shady && c.__shady.parentNode;
                        if (void 0 !== d && d !== a || void 0 === d && B.parentNode(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
                    }
                    if (c === b) return b;
                    b.parentNode && xc(b.parentNode, b);
                    var e;
                    if (e = d = rb(a)) a: {
                        if (!b.__noInsertionPoint) {
                            var f;
                            if ("slot" === b.localName ? f = [ b ] : b.querySelectorAll && (f = b.querySelectorAll("slot")), 
                            f && f.length) {
                                e = f;
                                break a;
                            }
                        }
                        e = void 0;
                    }
                    if ((f = e) && d.H.push.apply(d.H, [].concat(f instanceof Array ? f : function(a) {
                        for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
                        return c;
                    }(function(a) {
                        ea();
                        var b = a[Symbol.iterator];
                        return b ? b.call(a) : fa(a);
                    }(f)))), d && ("slot" === a.localName || f) && yc(d), qb(a)) {
                        if (d = c, tc(a), a.__shady = a.__shady || {}, void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null), 
                        b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                            for (f = b.childNodes, e = 0; e < f.length; e++) uc(f[e], a, d);
                            b.__shady = b.__shady || {}, d = void 0 !== b.__shady.firstChild ? null : void 0, 
                            b.__shady.firstChild = b.__shady.lastChild = d, b.__shady.childNodes = d;
                        } else uc(b, a, d);
                        if (zc(a)) {
                            yc(a.__shady.root);
                            var g = !0;
                        } else a.__shady.root && (g = !0);
                    }
                    return g || (g = z(a) ? a.host : a, c ? (c = Ac(c), A.insertBefore.call(g, b, c)) : A.appendChild.call(g, b)), 
                    Bc(a, b), b;
                }
                function xc(a, b) {
                    if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);
                    var c = rb(b);
                    if (qb(a)) {
                        b.__shady = b.__shady || {}, a.__shady = a.__shady || {}, b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling), 
                        b === a.__shady.lastChild && (a.__shady.lastChild = b.__shady.previousSibling);
                        var d = b.__shady.previousSibling, e = b.__shady.nextSibling;
                        if (d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e), e && (e.__shady = e.__shady || {}, 
                        e.__shady.previousSibling = d), b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0, 
                        void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null), zc(a)) {
                            yc(a.__shady.root);
                            var f = !0;
                        }
                    }
                    if (Cc(b), c) {
                        (d = a && "slot" === a.localName) && (f = !0), Dc(c), e = c.l;
                        for (var g in e) for (var h = e[g], k = 0; k < h.length; k++) {
                            var l = h[k];
                            if (Cb(b, l)) {
                                h.splice(k, 1);
                                var m = c.s.indexOf(l);
                                if (0 <= m && c.s.splice(m, 1), k--, m = l.__shady.K) for (l = 0; l < m.length; l++) {
                                    var n = m[l], v = B.parentNode(n);
                                    v && A.removeChild.call(v, n);
                                }
                                m = !0;
                            }
                        }
                        (m || d) && yc(c);
                    }
                    return f || (f = z(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName || f === B.parentNode(b)) && A.removeChild.call(f, b)), 
                    Bc(a, null, b), b;
                }
                function Cc(a) {
                    if (a.__shady && void 0 !== a.__shady.ja) for (var e, b = a.childNodes, c = 0, d = b.length; c < d && (e = b[c]); c++) Cc(e);
                    a.__shady && (a.__shady.ja = void 0);
                }
                function Ac(a) {
                    var b = a;
                    return a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.K) && b.length ? b[0] : Ac(a.nextSibling)), 
                    b;
                }
                function zc(a) {
                    return (a = a && a.__shady && a.__shady.root) && Ec(a);
                }
                function Fc(a, b) {
                    if ("slot" === b) a = a.parentNode, zc(a) && yc(a.__shady.root); else if ("slot" === a.localName && "name" === b && (b = rb(a))) {
                        var c = a.Ca, d = Gc(a);
                        if (d !== c) {
                            var e = (c = b.l[c]).indexOf(a);
                            0 <= e && c.splice(e, 1), (c = b.l[d] || (b.l[d] = [])).push(a), 1 < c.length && (b.l[d] = Hc(c));
                        }
                        yc(b);
                    }
                }
                function Bc(a, b, c) {
                    (a = a.__shady && a.__shady.N) && (b && a.addedNodes.push(b), c && a.removedNodes.push(c), 
                    function(a) {
                        a.a || (a.a = !0, Ab(function() {
                            !function(a) {
                                if (a.a) {
                                    a.a = !1;
                                    var b = a.takeRecords();
                                    b.length && a.V.forEach(function(a) {
                                        a(b);
                                    });
                                }
                            }(a);
                        }));
                    }(a));
                }
                function Ic(a) {
                    if (a && a.nodeType) {
                        a.__shady = a.__shady || {};
                        var b = a.__shady.ja;
                        return void 0 === b && (b = z(a) ? a : (b = a.parentNode) ? Ic(b) : a, A.contains.call(document.documentElement, a) && (a.__shady.ja = b)), 
                        b;
                    }
                }
                function Jc(a, b, c) {
                    var d = [];
                    return Kc(a.childNodes, b, c, d), d;
                }
                function Kc(a, b, c, d) {
                    for (var g, e = 0, f = a.length; e < f && (g = a[e]); e++) {
                        var h;
                        if (h = g.nodeType === Node.ELEMENT_NODE) {
                            var k = b, l = c, m = d, n = k(h = g);
                            n && m.push(h), l && l(n) ? h = n : (Kc(h.childNodes, k, l, m), h = void 0);
                        }
                        if (h) break;
                    }
                }
                function Mc(a, b, c) {
                    Lc || (Lc = window.ShadyCSS && window.ShadyCSS.ScopingShim), Lc && "class" === b ? Lc.setElementClass(a, c) : (A.setAttribute.call(a, b, c), 
                    Fc(a, b));
                }
                function Nc(a, b) {
                    if (a.ownerDocument !== document) return A.importNode.call(document, a, b);
                    var c = A.importNode.call(document, a, !1);
                    if (b) {
                        a = a.childNodes, b = 0;
                        for (var d; b < a.length; b++) d = Nc(a[b], !0), c.appendChild(d);
                    }
                    return c;
                }
                function Qc(a, b) {
                    var c = [], d = a;
                    for (a = a === window ? window : a.getRootNode(); d; ) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
                    return c[c.length - 1] === document && c.push(window), c;
                }
                function Rc(a, b) {
                    if (!z) return a;
                    a = Qc(a, !0);
                    for (var d, e, f, g, c = 0; c < b.length; c++) if (d = b[c], (f = d === window ? window : d.getRootNode()) !== e && (g = a.indexOf(f), 
                    e = f), !z(f) || -1 < g) return d;
                }
                function Tc(a) {
                    function b(b, d) {
                        return b = new a(b, d), b.Z = d && !!d.composed, b;
                    }
                    return function(a, b) {
                        for (var c in b) a[c] = b[c];
                    }(b, a), b.prototype = a.prototype, b;
                }
                function Vc(a, b, c) {
                    if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var e, d = 0; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), 
                    !a.ya); d++) ;
                }
                function Xc(a, b, c, d, e, f) {
                    for (var g = 0; g < a.length; g++) {
                        var h = a[g], k = h.type, l = h.capture, m = h.once, n = h.passive;
                        if (b === h.node && c === k && d === l && e === m && f === n) return g;
                    }
                    return -1;
                }
                function Yc(a, b, c) {
                    if (b) {
                        if ("object" == typeof c) var d = !!c.capture, e = !!c.once, f = !!c.passive; else d = !!c, 
                        f = e = !1;
                        var g = c && c.aa || this, h = b[Oc];
                        if (h) {
                            if (-1 < Xc(h, g, a, d, e, f)) return;
                        } else b[Oc] = [];
                        h = function(d) {
                            if (e && this.removeEventListener(a, b, c), d.__target || Zc(d), g !== this) {
                                var f = Object.getOwnPropertyDescriptor(d, "currentTarget");
                                Object.defineProperty(d, "currentTarget", {
                                    get: function() {
                                        return g;
                                    },
                                    configurable: !0
                                });
                            }
                            if (d.composed || -1 < d.composedPath().indexOf(g)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) {
                                var h = "object" == typeof b && b.handleEvent ? b.handleEvent(d) : b.call(g, d);
                                return g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget), 
                                h;
                            }
                        }, b[Oc].push({
                            node: this,
                            type: a,
                            capture: d,
                            once: e,
                            passive: f,
                            cb: h
                        }), Uc[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || {
                            capture: [],
                            bubble: []
                        }, this.__handlers[a][d ? "capture" : "bubble"].push(h)) : (this instanceof Window ? A.ab : A.addEventListener).call(this, a, h, c);
                    }
                }
                function $c(a, b, c) {
                    if (b) {
                        if ("object" == typeof c) var d = !!c.capture, e = !!c.once, f = !!c.passive; else d = !!c, 
                        f = e = !1;
                        var g = c && c.aa || this, h = void 0, k = null;
                        try {
                            k = b[Oc];
                        } catch (l) {}
                        k && -1 < (e = Xc(k, g, a, d, e, f)) && (h = k.splice(e, 1)[0].cb, k.length || (b[Oc] = void 0)), 
                        (this instanceof Window ? A.bb : A.removeEventListener).call(this, a, h || b, c), 
                        h && Uc[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], 
                        -1 < (h = a.indexOf(h)) && a.splice(h, 1));
                    }
                }
                function Zc(a) {
                    if (a.__target = a.target, a.na = a.relatedTarget, y.M) {
                        var b = Object.getPrototypeOf(a);
                        if (!b.hasOwnProperty("__patchProto")) {
                            var c = Object.create(b);
                            c.fb = b, ub(c, Sc), b.__patchProto = c;
                        }
                        a.__proto__ = b.__patchProto;
                    } else ub(a, Sc);
                }
                function ed(a, b) {
                    return {
                        index: a,
                        O: [],
                        U: b
                    };
                }
                function G(a, b, c) {
                    if (a !== hd) throw new TypeError("Illegal constructor");
                    (a = document.createDocumentFragment()).__proto__ = G.prototype, a.Aa = "ShadyRoot", 
                    vc(b), vc(a), a.host = b, a.a = c && c.mode, b.__shady = b.__shady || {}, b.__shady.root = a, 
                    b.__shady.Ua = "closed" !== a.a ? a : null, a.T = !1, a.s = [], a.l = {}, a.H = [];
                    for (var d = 0, e = (c = B.childNodes(b)).length; d < e; d++) A.removeChild.call(b, c[d]);
                    return a;
                }
                function yc(a) {
                    a.T || (a.T = !0, Fb(function() {
                        return id(a);
                    }));
                }
                function id(a) {
                    for (var b; a; ) {
                        a.T && (b = a);
                        a: {
                            var c = a;
                            if (a = c.host.getRootNode(), z(a)) for (var d = c.host.childNodes, e = 0; e < d.length; e++) if ("slot" == (c = d[e]).localName) break a;
                            a = void 0;
                        }
                    }
                    b && b._renderRoot();
                }
                function jd(a, b, c) {
                    b.__shady = b.__shady || {};
                    var d = b.__shady.fa;
                    b.__shady.fa = null, c || (c = (a = a.l[b.slot || "__catchall"]) && a[0]), c ? (c.__shady.assignedNodes.push(b), 
                    b.__shady.assignedSlot = c) : b.__shady.assignedSlot = void 0, d !== b.__shady.assignedSlot && b.__shady.assignedSlot && (b.__shady.assignedSlot.__shady.ha = !0);
                }
                function kd(a, b, c) {
                    for (var e, d = 0; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
                        var f = e.__shady.assignedNodes;
                        f && f.length && kd(a, b, f);
                    } else b.push(c[d]);
                }
                function ld(a, b) {
                    A.dispatchEvent.call(b, new Event("slotchange")), b.__shady.assignedSlot && ld(a, b.__shady.assignedSlot);
                }
                function Dc(a) {
                    if (a.H.length) {
                        for (var c, b = a.H, d = 0; d < b.length; d++) {
                            var e = b[d];
                            e.__shady = e.__shady || {}, vc(e), vc(e.parentNode);
                            var f = Gc(e);
                            a.l[f] ? (c = c || {}, c[f] = !0, a.l[f].push(e)) : a.l[f] = [ e ], a.s.push(e);
                        }
                        if (c) for (var g in c) a.l[g] = Hc(a.l[g]);
                        a.H = [];
                    }
                }
                function Gc(a) {
                    var b = a.name || a.getAttribute("name") || "__catchall";
                    return a.Ca = b;
                }
                function Hc(a) {
                    return a.sort(function(a, c) {
                        a = md(a);
                        for (var b = md(c), e = 0; e < a.length; e++) {
                            c = a[e];
                            var f = b[e];
                            if (c !== f) return (a = Array.from(c.parentNode.childNodes)).indexOf(c) - a.indexOf(f);
                        }
                    });
                }
                function md(a) {
                    var b = [];
                    do {
                        b.unshift(a);
                    } while (a = a.parentNode);
                    return b;
                }
                function Ec(a) {
                    return Dc(a), !!a.s.length;
                }
                function od(a) {
                    var b = a.getRootNode();
                    return z(b) && id(b), a.__shady && a.__shady.assignedSlot || null;
                }
                function H(a, b) {
                    for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
                        var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
                        f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
                    }
                }
                function Ad(a) {
                    var b = zd.has(a);
                    return a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a), !b && a;
                }
                function J(a) {
                    var b = a.isConnected;
                    if (void 0 !== b) return b;
                    for (;a && !(a.__CE_isImportDocument || a instanceof Document); ) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
                    return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
                }
                function Bd(a, b) {
                    for (;b && b !== a && !b.nextSibling; ) b = b.parentNode;
                    return b && b !== a ? b.nextSibling : null;
                }
                function K(a, b, c) {
                    c = void 0 === c ? new Set() : c;
                    for (var d = a; d; ) {
                        if (d.nodeType === Node.ELEMENT_NODE) {
                            var e = d;
                            b(e);
                            var f = e.localName;
                            if ("link" === f && "import" === e.getAttribute("rel")) {
                                if ((d = e.import) instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) K(d, b, c);
                                d = Bd(a, e);
                                continue;
                            }
                            if ("template" === f) {
                                d = Bd(a, e);
                                continue;
                            }
                            if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) K(e, b, c);
                        }
                        d = d.firstChild ? d.firstChild : Bd(a, d);
                    }
                }
                function L(a, b, c) {
                    a[b] = c;
                }
                function Cd() {
                    this.a = new Map(), this.o = new Map(), this.h = [], this.c = !1;
                }
                function Ed(a, b) {
                    a.c = !0, a.h.push(b);
                }
                function Fd(a, b) {
                    a.c && K(b, function(b) {
                        return a.b(b);
                    });
                }
                function M(a, b) {
                    var c = [];
                    for (K(b, function(a) {
                        return c.push(a);
                    }), b = 0; b < c.length; b++) {
                        var d = c[b];
                        1 === d.__CE_state ? a.connectedCallback(d) : Gd(a, d);
                    }
                }
                function N(a, b) {
                    var c = [];
                    for (K(b, function(a) {
                        return c.push(a);
                    }), b = 0; b < c.length; b++) {
                        var d = c[b];
                        1 === d.__CE_state && a.disconnectedCallback(d);
                    }
                }
                function O(a, b, c) {
                    var d = (c = void 0 === c ? {} : c).$a || new Set(), e = c.wa || function(b) {
                        return Gd(a, b);
                    }, f = [];
                    if (K(b, function(b) {
                        if ("link" === b.localName && "import" === b.getAttribute("rel")) {
                            var c = b.import;
                            c instanceof Node && "complete" === c.readyState ? (c.__CE_isImportDocument = !0, 
                            c.__CE_hasRegistry = !0) : b.addEventListener("load", function() {
                                var c = b.import;
                                if (!c.__CE_documentLoadHandled) {
                                    c.__CE_documentLoadHandled = !0, c.__CE_isImportDocument = !0, c.__CE_hasRegistry = !0;
                                    var f = new Set(d);
                                    f.delete(c), O(a, c, {
                                        $a: f,
                                        wa: e
                                    });
                                }
                            });
                        } else f.push(b);
                    }, d), a.c) for (b = 0; b < f.length; b++) a.b(f[b]);
                    for (b = 0; b < f.length; b++) e(f[b]);
                }
                function Gd(a, b) {
                    if (void 0 === b.__CE_state) {
                        var c = a.a.get(b.localName);
                        if (c) {
                            c.constructionStack.push(b);
                            var d = c.constructor;
                            try {
                                try {
                                    if (new d() !== b) throw Error("The custom element constructor did not produce the element being upgraded.");
                                } finally {
                                    c.constructionStack.pop();
                                }
                            } catch (g) {
                                throw b.__CE_state = 2, g;
                            }
                            if (b.__CE_state = 1, b.__CE_definition = c, c.attributeChangedCallback) for (c = c.observedAttributes, 
                            d = 0; d < c.length; d++) {
                                var e = c[d], f = b.getAttribute(e);
                                null !== f && a.attributeChangedCallback(b, e, null, f, null);
                            }
                            J(b) && a.connectedCallback(b);
                        }
                    }
                }
                function Hd(a, b) {
                    this.j = a, this.a = b, this.C = void 0, O(this.j, this.a), "loading" === this.a.readyState && (this.C = new MutationObserver(this.b.bind(this)), 
                    this.C.observe(this.a, {
                        childList: !0,
                        subtree: !0
                    }));
                }
                function Id(a) {
                    a.C && a.C.disconnect();
                }
                function Jd() {
                    var a = this;
                    this.b = this.a = void 0, this.c = new Promise(function(b) {
                        a.b = b, a.a && b(a.a);
                    });
                }
                function P(a) {
                    this.ca = !1, this.j = a, this.ga = new Map(), this.da = function(a) {
                        return a();
                    }, this.R = !1, this.ea = [], this.Fa = new Hd(a, document);
                }
                function se(a, b, c) {
                    function d(b) {
                        return function(c) {
                            for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                            e = [];
                            for (var f = [], l = 0; l < d.length; l++) {
                                var m = d[l];
                                if (m instanceof Element && J(m) && f.push(m), m instanceof DocumentFragment) for (m = m.firstChild; m; m = m.nextSibling) e.push(m); else e.push(m);
                            }
                            for (b.apply(this, d), d = 0; d < f.length; d++) N(a, f[d]);
                            if (J(this)) for (d = 0; d < e.length; d++) (f = e[d]) instanceof Element && M(a, f);
                        };
                    }
                    void 0 !== c.X && (b.prepend = d(c.X)), void 0 !== c.append && (b.append = d(c.append));
                }
                function ye() {
                    this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", 
                    this.atRule = !1, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = "";
                }
                function ze(a) {
                    var b = Ce, c = a = a.replace(Ae, "").replace(Be, ""), d = new ye();
                    d.start = 0, d.end = c.length;
                    for (var e = d, f = 0, g = c.length; f < g; f++) if ("{" === c[f]) {
                        e.rules || (e.rules = []);
                        var h = e, k = h.rules[h.rules.length - 1] || null;
                        (e = new ye()).start = f + 1, e.parent = h, e.previous = k, h.rules.push(e);
                    } else "}" === c[f] && (e.end = f + 1, e = e.parent || d);
                    return b(d, a);
                }
                function Ce(a, b) {
                    var c = b.substring(a.start, a.end - 1);
                    if (a.parsedCssText = a.cssText = c.trim(), a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), 
                    c = c.replace(/\\([0-9a-f]{1,6})\s/gi, function(a, c) {
                        for (c = 6 - (a = c).length; c--; ) a = "0" + a;
                        return "\\" + a;
                    }), c = c.replace(Ee, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), 
                    a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = Ie : c.match(Je) && (a.type = Ke, 
                    a.keyframesName = a.selector.split(Ee).pop()) : a.type = 0 === c.indexOf("--") ? Le : Me), 
                    c = a.rules) for (var f, d = 0, e = c.length; d < e && (f = c[d]); d++) Ce(f, b);
                    return a;
                }
                function Ne(a, b, c) {
                    c = void 0 === c ? "" : c;
                    var d = "";
                    if (a.cssText || a.rules) {
                        var f, e = a.rules;
                        if ((f = e) && (f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"))), 
                        f) {
                            f = 0;
                            for (var h, g = e.length; f < g && (h = e[f]); f++) d = Ne(h, b, d);
                        } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Oe, "").replace(Pe, ""), 
                        b = b.replace(Qe, "").replace(Re, "")), (d = b.trim()) && (d = "  " + d + "\n");
                    }
                    return d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n")), 
                    c;
                }
                function Te(a) {
                    Se = (!a || !a.shimcssproperties) && (Q || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")));
                }
                function $e(a, b) {
                    return a ? ("string" == typeof a && (a = ze(a)), b && af(a, b), Ne(a, R)) : "";
                }
                function bf(a) {
                    return !a.__cssRules && a.textContent && (a.__cssRules = ze(a.textContent)), a.__cssRules || null;
                }
                function cf(a) {
                    return !!a.parent && a.parent.type === Ke;
                }
                function af(a, b, c, d) {
                    if (a) {
                        var e = !1, f = a.type;
                        if (d && f === Ie) {
                            var g = a.selector.match(Ye);
                            g && (window.matchMedia(g[1]).matches || (e = !0));
                        }
                        if (f === Me ? b(a) : c && f === Ke ? c(a) : f === Le && (e = !0), (a = a.rules) && !e) {
                            e = 0, f = a.length;
                            for (var h; e < f && (h = a[e]); e++) af(h, b, c, d);
                        }
                    }
                }
                function df(a, b, c, d) {
                    var e = document.createElement("style");
                    return b && e.setAttribute("scope", b), e.textContent = a, ef(e, c, d), e;
                }
                function ef(a, b, c) {
                    (b = b || document.head).insertBefore(a, c && c.nextSibling || b.firstChild), S ? a.compareDocumentPosition(S) === Node.DOCUMENT_POSITION_PRECEDING && (S = a) : S = a;
                }
                function ff(a, b) {
                    var c = a.indexOf("var(");
                    if (-1 === c) return b(a, "", "", "");
                    a: {
                        for (var d = 0, e = c + 3, f = a.length; e < f; e++) if ("(" === a[e]) d++; else if (")" === a[e] && 0 == --d) break a;
                        e = -1;
                    }
                    return d = a.substring(c + 4, e), c = a.substring(0, c), a = ff(a.substring(e + 1), b), 
                    -1 === (e = d.indexOf(",")) ? b(c, d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
                }
                function gf(a, b) {
                    Q ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
                }
                function V(a) {
                    var b = a.localName, c = "";
                    return b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, 
                    c = a.extends), {
                        is: b,
                        P: c
                    };
                }
                function hf() {}
                function jf(a, b, c) {
                    var d = W;
                    a.__styleScoped ? a.__styleScoped = null : kf(d, a, b || "", c);
                }
                function kf(a, b, c, d) {
                    if (b.nodeType === Node.ELEMENT_NODE && lf(b, c, d), b = "template" === b.localName ? (b.content || b.gb).childNodes : b.children || b.childNodes) for (var e = 0; e < b.length; e++) kf(a, b[e], c, d);
                }
                function lf(a, b, c) {
                    if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), 
                    a.classList.add(b)); else if (a.getAttribute) {
                        var d = a.getAttribute(mf);
                        c ? d && (b = d.replace("style-scope", "").replace(b, ""), gf(a, b)) : gf(a, (d ? d + " " : "") + "style-scope " + b);
                    }
                }
                function nf(a, b, c) {
                    var d = W, e = a.__cssBuild;
                    return Q || "shady" === e ? b = $e(b, c) : (a = V(a), b = function(a, b, c, d, e) {
                        var f = pf(c, d);
                        return c = c ? qf + c : "", $e(b, function(b) {
                            b.c || (b.selector = b.m = rf(a, b, a.b, c, f), b.c = !0), e && e(b, c, f);
                        });
                    }(d, b, a.is, a.P, c) + "\n\n"), b.trim();
                }
                function pf(a, b) {
                    return b ? "[is=" + a + "]" : a;
                }
                function rf(a, b, c, d, e) {
                    var f = b.selector.split(sf);
                    if (!cf(b)) {
                        b = 0;
                        for (var h, g = f.length; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e);
                    }
                    return f.join(sf);
                }
                function tf(a) {
                    return a.replace(uf, function(a, c, d) {
                        return -1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+")), 
                        ":" + c + "(" + d + ")";
                    });
                }
                function Bf(a, b) {
                    return a = a.split(Ef), a[0] += b, a.join(Ef);
                }
                function If(a) {
                    a.selector === Jf && (a.selector = "html");
                }
                function Lf(a, b, c, d, e) {
                    this.w = a || null, this.b = b || null, this.ia = c || [], this.G = null, this.P = e || "", 
                    this.a = this.u = this.B = null;
                }
                function X(a) {
                    return a ? a.__styleInfo : null;
                }
                function Mf(a, b) {
                    return a.__styleInfo = b;
                }
                function Qf() {}
                function Sf(a) {
                    if (!a.i) {
                        var b = {}, c = {};
                        Tf(a, c) && (b.v = c, a.rules = null), b.cssText = a.parsedCssText.replace(Ze, "").replace(Ue, ""), 
                        a.i = b;
                    }
                }
                function Tf(a, b) {
                    var c = a.i;
                    if (!c) {
                        c = a.parsedCssText;
                        for (var d; a = Ue.exec(c); ) "inherit" === (d = (a[2] || a[3]).trim()) && "unset" === d || (b[a[1].trim()] = d), 
                        d = !0;
                        return d;
                    }
                    if (c.v) return Object.assign(b, c.v), !0;
                }
                function Uf(a, b, c) {
                    return b && (b = 0 <= b.indexOf(";") ? Vf(a, b, c) : ff(b, function(b, e, f, g) {
                        return e ? ((e = Uf(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = Uf(a, c[f] || f, c) || f, 
                        b + (e || "") + g) : b + g;
                    })), b && b.trim() || "";
                }
                function Vf(a, b, c) {
                    b = b.split(";");
                    for (var e, f, d = 0; d < b.length; d++) if (e = b[d]) {
                        if (Ve.lastIndex = 0, f = Ve.exec(e)) e = Uf(a, c[f[1]], c); else if (-1 !== (f = e.indexOf(":"))) {
                            var g = e.substring(f);
                            g = Uf(a, g = g.trim(), c) || g, e = e.substring(0, f) + g;
                        }
                        b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || "";
                    }
                    return b.join(";");
                }
                function gg(a) {
                    this.cache = {}, this.a = void 0 === a ? 100 : a;
                }
                function hg() {}
                function ig(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
                            var e = c.addedNodes[d];
                            if (e.nodeType === Node.ELEMENT_NODE) {
                                var f = e.getRootNode(), g = e, h = [];
                                if (g.classList ? h = Array.from(g.classList) : g instanceof window.SVGElement && g.hasAttribute("class") && (h = g.getAttribute("class").split(/\s+/)), 
                                g = h, h = g.indexOf(W.a), (g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument) jf(e, g, !0); else if (f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host)) if (f = V(f).is, 
                                g === f) for (e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + W.a + ")"), 
                                f = 0; f < e.length; f++) lf(e[f], g); else g && jf(e, g, !0), jf(e, f);
                            }
                        }
                    }
                }
                function qg(a) {
                    return a._applyShimCurrentVersion === a._applyShimNextVersion;
                }
                function Y() {
                    var a = this;
                    this.L = {}, this.c = document.documentElement;
                    var b = new ye();
                    b.rules = [], this.h = Mf(this.c, new Lf(b)), this.o = !1, this.b = this.a = null, 
                    function(a) {
                        requestAnimationFrame(function() {
                            tg ? tg(a) : (sg || (sg = new Promise(function(a) {
                                ug = a;
                            }), "complete" === document.readyState ? ug() : document.addEventListener("readystatechange", function() {
                                "complete" === document.readyState && ug();
                            })), sg.then(function() {
                                a && a();
                            }));
                        });
                    }(function() {
                        xg(a);
                    });
                }
                function xg(a) {
                    !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, 
                    a.a.invalidCallback = function(a) {
                        (a = ng[a]) && (a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, 
                        a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1);
                    }), function(a) {
                        !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, 
                        a.b.transformCallback = function(b) {
                            a.va(b);
                        }, a.b.validateCallback = function() {
                            requestAnimationFrame(function() {
                                (a.b.enqueued || a.o) && a.F();
                            });
                        });
                    }(a);
                }
                function Ag(a, b) {
                    return (b = b.getRootNode().host) ? X(b) ? b : Ag(a, b) : a.c;
                }
                function zg(a, b, c) {
                    var d = X(a = Ag(a, b));
                    a = Object.create(d.B || null);
                    var e = function(a, b) {
                        var c = {}, d = {}, e = Zf, f = b && b.__cssBuild;
                        return af(b, function(b) {
                            !function(a, b, c, d, e) {
                                if (c.i || Sf(c), c.i.v) {
                                    a = (b = V(b)).is, b = b.P, b = a ? pf(a, b) : "html";
                                    var f = c.parsedSelector, g = ":host > *" === f || "html" === f, h = 0 === f.indexOf(":host") && !g;
                                    "shady" === d && (g = f === b + " > *." + b || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(b)), 
                                    "shadow" === d && (g = ":host > *" === f || "html" === f, h = h && !g), (g || h) && (d = b, 
                                    h && (Q && !c.m && (c.m = rf(W, c, W.b, a ? qf + a : "", b)), d = c.m || b), e({
                                        Xa: d,
                                        Oa: h,
                                        ib: g
                                    }));
                                }
                            }(e, a, b, f, function(e) {
                                Nf.call(a.hb || a, e.Xa) && (e.Oa ? Tf(b, c) : Tf(b, d));
                            });
                        }, null, !0), {
                            Va: d,
                            Na: c
                        };
                    }(b, c.w);
                    b = function(a, b) {
                        var c = {}, d = [];
                        return af(a, function(a) {
                            a.i || Sf(a);
                            var e = a.m || a.parsedSelector;
                            b && a.i.v && e && Nf.call(b, e) && (Tf(a, c), a = a.index, e = parseInt(a / 32, 10), 
                            d[e] = (d[e] || 0) | 1 << a % 32);
                        }, null, !0), {
                            v: c,
                            key: d
                        };
                    }(d.w, b).v, Object.assign(a, e.Na, b, e.Va), b = c.G;
                    for (var f in b) ((e = b[f]) || 0 === e) && (a[f] = e);
                    for (f = Zf, b = Object.getOwnPropertyNames(a), e = 0; e < b.length; e++) d = b[e], 
                    a[d] = Uf(f, a[d], a);
                    c.B = a;
                }
                var p, q = "undefined" != typeof window && window === this ? this : void 0 !== global && null != global ? global : this, ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
                }, da = function() {
                    var a = 0;
                    return function(b) {
                        return "jscomp_symbol_" + (b || "") + a++;
                    };
                }();
                !function() {
                    if (!function() {
                        var a = document.createEvent("Event");
                        return a.initEvent("foo", !0, !0), a.preventDefault(), a.defaultPrevented;
                    }()) {
                        var a = Event.prototype.preventDefault;
                        Event.prototype.preventDefault = function() {
                            this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0;
                                },
                                configurable: !0
                            }));
                        };
                    }
                    var b = /Trident/.test(navigator.userAgent);
                    if ((!window.CustomEvent || b && "function" != typeof window.CustomEvent) && (window.CustomEvent = function(a, b) {
                        b = b || {};
                        var c = document.createEvent("CustomEvent");
                        return c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail), c;
                    }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || b && "function" != typeof window.Event) {
                        var c = window.Event;
                        if (window.Event = function(a, b) {
                            b = b || {};
                            var c = document.createEvent("Event");
                            return c.initEvent(a, !!b.bubbles, !!b.cancelable), c;
                        }, c) for (var d in c) window.Event[d] = c[d];
                        window.Event.prototype = c.prototype;
                    }
                    if (!window.MouseEvent || b && "function" != typeof window.MouseEvent) {
                        if (b = window.MouseEvent, window.MouseEvent = function(a, b) {
                            b = b || {};
                            var c = document.createEvent("MouseEvent");
                            return c.initMouseEvent(a, !!b.bubbles, !!b.cancelable, b.view || window, b.detail, b.screenX, b.screenY, b.clientX, b.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, b.relatedTarget), 
                            c;
                        }, b) for (d in b) window.MouseEvent[d] = b[d];
                        window.MouseEvent.prototype = b.prototype;
                    }
                    Array.from || (Array.from = function(a) {
                        return [].slice.call(a);
                    }), Object.assign || (Object.assign = function(a, b) {
                        for (var e, c = [].slice.call(arguments, 1), d = 0; d < c.length; d++) if (e = c[d]) for (var f = a, m = e, n = Object.getOwnPropertyNames(m), v = 0; v < n.length; v++) e = n[v], 
                        f[e] = m[e];
                        return a;
                    });
                }(window.WebComponents), function() {
                    function a() {}
                    function b(a) {
                        switch (a.nodeType) {
                          case Node.DOCUMENT_NODE:
                            return v.call(a, "template");

                          case Node.DOCUMENT_FRAGMENT_NODE:
                            return I.call(a, "template");

                          default:
                            return n.call(a, "template");
                        }
                    }
                    var c = "undefined" == typeof HTMLTemplateElement, d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment), e = !1;
                    /Trident/.test(navigator.userAgent) && function() {
                        function a(a, b) {
                            if (a instanceof DocumentFragment) for (var d; d = a.firstChild; ) c.call(this, d, b); else c.call(this, a, b);
                            return a;
                        }
                        e = !0;
                        var b = Node.prototype.cloneNode;
                        Node.prototype.cloneNode = function(a) {
                            return a = b.call(this, a), this instanceof DocumentFragment && (a.__proto__ = DocumentFragment.prototype), 
                            a;
                        }, DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll, 
                        DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector, 
                        Object.defineProperties(DocumentFragment.prototype, {
                            nodeType: {
                                get: function() {
                                    return Node.DOCUMENT_FRAGMENT_NODE;
                                },
                                configurable: !0
                            },
                            localName: {
                                get: function() {},
                                configurable: !0
                            },
                            nodeName: {
                                get: function() {
                                    return "#document-fragment";
                                },
                                configurable: !0
                            }
                        });
                        var c = Node.prototype.insertBefore;
                        Node.prototype.insertBefore = a;
                        var d = Node.prototype.appendChild;
                        Node.prototype.appendChild = function(b) {
                            return b instanceof DocumentFragment ? a.call(this, b, null) : d.call(this, b), 
                            b;
                        };
                        var f = Node.prototype.removeChild, g = Node.prototype.replaceChild;
                        Node.prototype.replaceChild = function(b, c) {
                            return b instanceof DocumentFragment ? (a.call(this, b, c), f.call(this, c)) : g.call(this, b, c), 
                            c;
                        }, Document.prototype.createDocumentFragment = function() {
                            var a = this.createElement("df");
                            return a.__proto__ = DocumentFragment.prototype, a;
                        };
                        var h = Document.prototype.importNode;
                        Document.prototype.importNode = function(a, b) {
                            return b = h.call(this, a, b || !1), a instanceof DocumentFragment && (b.__proto__ = DocumentFragment.prototype), 
                            b;
                        };
                    }();
                    var f = Node.prototype.cloneNode, g = Document.prototype.createElement, h = Document.prototype.importNode, k = Node.prototype.removeChild, l = Node.prototype.appendChild, m = Node.prototype.replaceChild, n = Element.prototype.querySelectorAll, v = Document.prototype.querySelectorAll, I = DocumentFragment.prototype.querySelectorAll, $a = function() {
                        if (!c) {
                            var a = document.createElement("template"), b = document.createElement("template");
                            return b.content.appendChild(document.createElement("div")), a.content.appendChild(b), 
                            0 === (a = a.cloneNode(!0)).content.childNodes.length || 0 === a.content.firstChild.content.childNodes.length || d;
                        }
                    }();
                    if (c) {
                        var t = document.implementation.createHTMLDocument("template"), na = !0, aa = document.createElement("style");
                        aa.textContent = "template{display:none;}";
                        var T = document.head;
                        T.insertBefore(aa, T.firstElementChild), a.prototype = Object.create(HTMLElement.prototype);
                        var U = !document.createElement("div").hasOwnProperty("innerHTML");
                        a.D = function(b) {
                            if (!b.content) {
                                b.content = t.createDocumentFragment();
                                for (var c; c = b.firstChild; ) l.call(b.content, c);
                                if (U) b.__proto__ = a.prototype; else if (b.cloneNode = function(b) {
                                    return a.a(this, b);
                                }, na) try {
                                    oc(b), pc(b);
                                } catch (Lg) {
                                    na = !1;
                                }
                                a.J(b.content);
                            }
                        };
                        var oc = function(b) {
                            Object.defineProperty(b, "innerHTML", {
                                get: function() {
                                    for (var a = "", b = this.content.firstChild; b; b = b.nextSibling) a += b.outerHTML || b.data.replace(Fe, qc);
                                    return a;
                                },
                                set: function(b) {
                                    for (t.body.innerHTML = b, a.J(t); this.content.firstChild; ) k.call(this.content, this.content.firstChild);
                                    for (;t.body.firstChild; ) l.call(this.content, t.body.firstChild);
                                },
                                configurable: !0
                            });
                        }, pc = function(a) {
                            Object.defineProperty(a, "outerHTML", {
                                get: function() {
                                    return "<template>" + this.innerHTML + "</template>";
                                },
                                set: function(a) {
                                    if (!this.parentNode) throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                                    for (t.body.innerHTML = a, a = this.ownerDocument.createDocumentFragment(); t.body.firstChild; ) l.call(a, t.body.firstChild);
                                    m.call(this.parentNode, a, this);
                                },
                                configurable: !0
                            });
                        };
                        oc(a.prototype), pc(a.prototype), a.J = function(c) {
                            for (var f, d = 0, e = (c = b(c)).length; d < e && (f = c[d]); d++) a.D(f);
                        }, document.addEventListener("DOMContentLoaded", function() {
                            a.J(document);
                        }), Document.prototype.createElement = function() {
                            var b = g.apply(this, arguments);
                            return "template" === b.localName && a.D(b), b;
                        };
                        var Fe = /[&\u00A0<>]/g, qc = function(a) {
                            switch (a) {
                              case "&":
                                return "&amp;";

                              case "<":
                                return "&lt;";

                              case ">":
                                return "&gt;";

                              case " ":
                                return "&nbsp;";
                            }
                        };
                    }
                    if (c || $a) {
                        a.a = function(a, b) {
                            var c = f.call(a, !1);
                            return this.D && this.D(c), b && (l.call(c.content, f.call(a.content, !0)), ab(c.content, a.content)), 
                            c;
                        };
                        var ab = function(c, d) {
                            if (d.querySelectorAll && 0 !== (d = b(d)).length) for (var g, h, e = 0, f = (c = b(c)).length; e < f; e++) h = d[e], 
                            g = c[e], a && a.D && a.D(h), m.call(g.parentNode, Ge.call(h, !0), g);
                        }, Ge = Node.prototype.cloneNode = function(b) {
                            if (!e && d && this instanceof DocumentFragment) {
                                if (!b) return this.ownerDocument.createDocumentFragment();
                                var c = He.call(this.ownerDocument, this, !0);
                            } else c = this.nodeType === Node.ELEMENT_NODE && "template" === this.localName ? a.a(this, b) : f.call(this, b);
                            return b && ab(c, this), c;
                        }, He = Document.prototype.importNode = function(b, c) {
                            if (c = c || !1, "template" === b.localName) return a.a(b, c);
                            var d = h.call(this, b, c);
                            return c && ab(d, b), d;
                        };
                    }
                    c && (window.HTMLTemplateElement = a);
                }();
                var ka, oa, za, Aa, la = ka = Array.isArray ? Array.isArray : function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a);
                }, ma = 0, pa = "undefined" != typeof window ? window : void 0, qa = pa || {}, ra = qa.MutationObserver || qa.WebKitMutationObserver, sa = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, ya = Array(1e3);
                if ("undefined" == typeof self && void 0 !== process && "[object process]" === {}.toString.call(process)) Aa = function() {
                    return process.jb(ua);
                }; else {
                    var Ba;
                    if (ra) Ba = function() {
                        var a = 0, b = new ra(ua), c = document.createTextNode("");
                        return b.observe(c, {
                            characterData: !0
                        }), function() {
                            c.data = a = ++a % 2;
                        };
                    }(); else {
                        var Ca;
                        if (sa) Ca = function() {
                            var a = new MessageChannel();
                            return a.port1.onmessage = ua, function() {
                                return a.port2.postMessage(0);
                            };
                        }(); else {
                            var Da;
                            if (void 0 === pa) try {
                                var Ea = __webpack_require__(!function() {
                                    var e = new Error('Cannot find module "vertx"');
                                    throw e.code = "MODULE_NOT_FOUND", e;
                                }());
                                Da = void 0 !== (oa = Ea.lb || Ea.kb) ? function() {
                                    oa(ua);
                                } : va();
                            } catch (a) {
                                Da = va();
                            } else Da = va();
                            Ca = Da;
                        }
                        Ba = Ca;
                    }
                    Aa = Ba;
                }
                za = Aa;
                var Ia = Math.random().toString(36).substring(16), Pa = new Oa(), Xa = new Oa(), Za = 0;
                w.prototype = {
                    constructor: w,
                    then: Ga,
                    a: function(a) {
                        return this.then(null, a);
                    }
                }, window.Promise || (window.Promise = w, w.prototype.catch = w.prototype.a, w.prototype.then = w.prototype.then, 
                w.all = function(a) {
                    return new function(a, b) {
                        if (this.Ga = a, this.A = new a(Ha), this.A[Ia] || Ja(this.A), la(b)) if (this.S = this.length = b.length, 
                        this.f = Array(this.length), 0 === this.length) r(this.A, this.f); else {
                            for (this.length = this.length || 0, a = 0; void 0 === this.g && a < b.length; a++) !function(a, b, c) {
                                var d = a.Ga, e = d.resolve;
                                e === Ma ? (e = Qa(b)) === Ga && void 0 !== b.g ? db(a, b.g, c, b.f) : "function" != typeof e ? (a.S--, 
                                a.f[c] = b) : d === w ? (d = new d(Ha), Ua(d, b, e), eb(a, d, c)) : eb(a, new d(function(a) {
                                    return a(b);
                                }), c) : eb(a, e(b), c);
                            }(this, b[a], a);
                            0 === this.S && r(this.A, this.f);
                        } else u(this.A, Error("Array Methods must be provided an Array"));
                    }(this, a).A;
                }, w.race = function(a) {
                    var b = this;
                    return new b(la(a) ? function(c, d) {
                        for (var e = a.length, f = 0; f < e; f++) b.resolve(a[f]).then(c, d);
                    } : function(a, b) {
                        return b(new TypeError("You must pass an array to race."));
                    });
                }, w.resolve = Ma, w.reject = function(a) {
                    var b = new this(Ha);
                    return u(b, a), b;
                }), function(a) {
                    function b(a, b) {
                        if ("function" == typeof window.CustomEvent) return new CustomEvent(a, b);
                        var c = document.createEvent("CustomEvent");
                        return c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail), c;
                    }
                    function c(a) {
                        if (m) return a.ownerDocument !== document ? a.ownerDocument : null;
                        var b = a.__importDoc;
                        if (!b && a.parentNode) {
                            if ("function" == typeof (b = a.parentNode).closest) b = b.closest("link[rel=import]"); else for (;!h(b) && (b = b.parentNode); ) ;
                            a.__importDoc = b;
                        }
                        return b;
                    }
                    function e(a) {
                        function b() {
                            "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), 
                            a());
                        }
                        document.addEventListener("readystatechange", b), b();
                    }
                    function f(a) {
                        e(function() {
                            return function(a) {
                                var b = document.querySelectorAll("link[rel=import]:not([import-dependency])"), c = b.length;
                                c ? l(b, function(b) {
                                    return g(b, function() {
                                        0 == --c && a();
                                    });
                                }) : a();
                            }(function() {
                                return a && a();
                            });
                        });
                    }
                    function g(a, b) {
                        if (a.__loaded) b && b(); else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, 
                        b && b(); else {
                            var c = function(d) {
                                a.removeEventListener(d.type, c), a.__loaded = !0, b && b();
                            };
                            a.addEventListener("load", c), aa && "style" === a.localName || a.addEventListener("error", c);
                        }
                    }
                    function h(a) {
                        return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel;
                    }
                    function k() {
                        var a = this;
                        this.a = {}, this.b = 0, this.h = new MutationObserver(function(b) {
                            return a.Qa(b);
                        }), this.h.observe(document.head, {
                            childList: !0,
                            subtree: !0
                        }), this.c(document);
                    }
                    function l(a, b, c) {
                        var d = a ? a.length : 0, e = c ? -1 : 1;
                        for (c = c ? d - 1 : 0; c < d && 0 <= c; c += e) b(a[c], c);
                    }
                    var m = "import" in document.createElement("link"), n = null;
                    0 == "currentScript" in document && Object.defineProperty(document, "currentScript", {
                        get: function() {
                            return n || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
                        },
                        configurable: !0
                    });
                    var v = /(url\()([^)]*)(\))/g, I = /(@import[\s]+(?!url\())([^;]*)(;)/g, $a = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g, t = {
                        Ka: function(a, b) {
                            if (a.href && a.setAttribute("href", t.Y(a.getAttribute("href"), b)), a.src && a.setAttribute("src", t.Y(a.getAttribute("src"), b)), 
                            "style" === a.localName) {
                                var c = t.ua(a.textContent, b, v);
                                a.textContent = t.ua(c, b, I);
                            }
                        },
                        ua: function(a, b, c) {
                            return a.replace(c, function(a, c, d, e) {
                                return a = d.replace(/["']/g, ""), b && (a = t.Y(a, b)), c + "'" + a + "'" + e;
                            });
                        },
                        Y: function(a, b) {
                            if (void 0 === t.ba) {
                                t.ba = !1;
                                try {
                                    var c = new URL("b", "http://a");
                                    c.pathname = "c%20d", t.ba = "http://a/c%20d" === c.href;
                                } catch (qc) {}
                            }
                            return t.ba ? new URL(a, b).href : ((c = t.Da) || (c = document.implementation.createHTMLDocument("temp"), 
                            t.Da = c, c.la = c.createElement("base"), c.head.appendChild(c.la), c.ka = c.createElement("a")), 
                            c.la.href = b, c.ka.href = a, c.ka.href || a);
                        }
                    }, na = {
                        async: !0,
                        load: function(a, b, c) {
                            if (a) if (a.match(/^data:/)) {
                                var d = (a = a.split(","))[1];
                                d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d), b(d);
                            } else {
                                var e = new XMLHttpRequest();
                                e.open("GET", a, na.async), e.onload = function() {
                                    var a = e.responseURL || e.getResponseHeader("Location");
                                    a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
                                    var d = e.response || e.responseText;
                                    304 === e.status || 0 === e.status || 200 <= e.status && 300 > e.status ? b(d, a) : c(d);
                                }, e.send();
                            } else c("error: href must be specified");
                        }
                    }, aa = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);
                    if (k.prototype.c = function(a) {
                        var b = this;
                        l(a = a.querySelectorAll("link[rel=import]"), function(a) {
                            return b.L(a);
                        });
                    }, k.prototype.L = function(a) {
                        var b = this, c = a.href;
                        if (void 0 !== this.a[c]) {
                            var d = this.a[c];
                            d && d.__loaded && (a.import = d, this.o(a));
                        } else this.b++, this.a[c] = "pending", na.load(c, function(a, d) {
                            a = b.Ra(a, d || c), b.a[c] = a, b.b--, b.c(a), b.sa();
                        }, function() {
                            b.a[c] = null, b.b--, b.sa();
                        });
                    }, k.prototype.Ra = function(a, b) {
                        if (!a) return document.createDocumentFragment();
                        aa && (a = a.replace($a, function(a, b, c) {
                            return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a;
                        }));
                        var c = document.createElement("template");
                        if (c.innerHTML = a, c.content) a = c.content; else for (a = document.createDocumentFragment(); c.firstChild; ) a.appendChild(c.firstChild);
                        (c = a.querySelector("base")) && (b = t.Y(c.getAttribute("href"), b), c.removeAttribute("href"));
                        var d = 0;
                        return l(c = a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]'), function(a) {
                            g(a), t.Ka(a, b), a.setAttribute("import-dependency", ""), "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + "\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n")), 
                            a.textContent = "", d++);
                        }), a;
                    }, k.prototype.sa = function() {
                        var a = this;
                        if (!this.b) {
                            this.h.disconnect(), this.flatten(document);
                            var b = !1, c = !1, d = function() {
                                c && b && (a.c(document), a.b || (a.h.observe(document.head, {
                                    childList: !0,
                                    subtree: !0
                                }), a.Pa()));
                            };
                            this.Wa(function() {
                                c = !0, d();
                            }), this.Sa(function() {
                                b = !0, d();
                            });
                        }
                    }, k.prototype.flatten = function(a) {
                        var b = this;
                        l(a = a.querySelectorAll("link[rel=import]"), function(a) {
                            var c = b.a[a.href];
                            (a.import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, 
                            a.readyState = "loading", a.import = a, b.flatten(c), a.appendChild(c));
                        });
                    }, k.prototype.Sa = function(a) {
                        function b(e) {
                            if (e < d) {
                                var f = c[e], h = document.createElement("script");
                                f.removeAttribute("import-dependency"), l(f.attributes, function(a) {
                                    return h.setAttribute(a.name, a.value);
                                }), n = h, f.parentNode.replaceChild(h, f), g(h, function() {
                                    n = null, b(e + 1);
                                });
                            } else a();
                        }
                        var c = document.querySelectorAll("script[import-dependency]"), d = c.length;
                        b(0);
                    }, k.prototype.Wa = function(a) {
                        var b = document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"), d = b.length;
                        if (d) {
                            var e = aa && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
                            l(b, function(b) {
                                if (g(b, function() {
                                    b.removeAttribute("import-dependency"), 0 == --d && a();
                                }), e && b.parentNode !== document.head) {
                                    var f = document.createElement(b.localName);
                                    for (f.__appliedElement = b, f.setAttribute("type", "import-placeholder"), b.parentNode.insertBefore(f, b.nextSibling), 
                                    f = c(b); f && c(f); ) f = c(f);
                                    f.parentNode !== document.head && (f = null), document.head.insertBefore(b, f), 
                                    b.removeAttribute("type");
                                }
                            });
                        } else a();
                    }, k.prototype.Pa = function() {
                        var a = this;
                        l(document.querySelectorAll("link[rel=import]"), function(b) {
                            return a.o(b);
                        }, !0);
                    }, k.prototype.o = function(a) {
                        a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = "complete"), 
                        a.dispatchEvent(b(a.import ? "load" : "error", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        })));
                    }, k.prototype.Qa = function(a) {
                        var b = this;
                        l(a, function(a) {
                            return l(a.addedNodes, function(a) {
                                a && a.nodeType === Node.ELEMENT_NODE && (h(a) ? b.L(a) : b.c(a));
                            });
                        });
                    }, m) {
                        var T = document.querySelectorAll("link[rel=import]");
                        l(T, function(a) {
                            a.import && "loading" === a.import.readyState || (a.__loaded = !0);
                        }), T = function(a) {
                            h(a = a.target) && (a.__loaded = !0);
                        }, document.addEventListener("load", T, !0), document.addEventListener("error", T, !0);
                    } else {
                        var U = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
                        Object.defineProperty((!U || U.configurable ? Node : Element).prototype, "baseURI", {
                            get: function() {
                                var a = h(this) ? this : c(this);
                                return a ? a.href : U && U.get ? U.get.call(this) : (document.querySelector("base") || window.location).href;
                            },
                            configurable: !0,
                            enumerable: !0
                        }), e(function() {
                            return new k();
                        });
                    }
                    f(function() {
                        return document.dispatchEvent(b("HTMLImportsLoaded", {
                            cancelable: !0,
                            bubbles: !0,
                            detail: void 0
                        }));
                    }), a.useNative = m, a.whenReady = f, a.importForElement = c;
                }(window.HTMLImports = window.HTMLImports || {}), window.WebComponents = window.WebComponents || {
                    flags: {}
                };
                var ib = document.querySelector('script[src*="webcomponents-lite.js"]'), jb = /wc-(.+)/, x = {};
                if (!x.noOpts) {
                    if (location.search.slice(1).split("&").forEach(function(a) {
                        var b;
                        (a = a.split("="))[0] && (b = a[0].match(jb)) && (x[b[1]] = a[1] || !0);
                    }), ib) for (var lb, kb = 0; lb = ib.attributes[kb]; kb++) "src" !== lb.name && (x[lb.name] = lb.value || !0);
                    if (x.log && x.log.split) {
                        var mb = x.log.split(",");
                        x.log = {}, mb.forEach(function(a) {
                            x.log[a] = !0;
                        });
                    } else x.log = {};
                }
                window.WebComponents.flags = x;
                var nb = x.shadydom;
                nb && (window.ShadyDOM = window.ShadyDOM || {}, window.ShadyDOM.force = nb);
                var ob = x.register || x.ce;
                ob && window.customElements && (window.customElements.forcePolyfill = ob);
                var y = window.ShadyDOM || {};
                y.Ma = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
                var pb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
                y.M = !!(pb && pb.configurable && pb.get), y.ta = y.force || !y.Ma;
                var sb = Element.prototype, tb = sb.matches || sb.matchesSelector || sb.mozMatchesSelector || sb.msMatchesSelector || sb.oMatchesSelector || sb.webkitMatchesSelector, xb = document.createTextNode(""), yb = 0, zb = [];
                new MutationObserver(function() {
                    for (;zb.length; ) try {
                        zb.shift()();
                    } catch (a) {
                        throw xb.textContent = yb++, a;
                    }
                }).observe(xb, {
                    characterData: !0
                });
                var Eb, Bb = !!document.contains, Db = [];
                Gb.list = Db, Hb.prototype.takeRecords = function() {
                    if (this.addedNodes.length || this.removedNodes.length) {
                        var a = [ {
                            addedNodes: this.addedNodes,
                            removedNodes: this.removedNodes
                        } ];
                        return this.addedNodes = [], this.removedNodes = [], a;
                    }
                    return [];
                };
                var A = {}, Nb = Element.prototype.insertBefore, Ob = Element.prototype.removeChild, Pb = Element.prototype.setAttribute, Qb = Element.prototype.removeAttribute, Rb = Element.prototype.cloneNode, Sb = Document.prototype.importNode, Tb = Element.prototype.addEventListener, Ub = Element.prototype.removeEventListener, Vb = Window.prototype.addEventListener, Wb = Window.prototype.removeEventListener, Xb = Element.prototype.dispatchEvent, Yb = Element.prototype.querySelector, Zb = Element.prototype.querySelectorAll, $b = Node.prototype.contains || HTMLElement.prototype.contains;
                A.appendChild = Element.prototype.appendChild, A.insertBefore = Nb, A.removeChild = Ob, 
                A.setAttribute = Pb, A.removeAttribute = Qb, A.cloneNode = Rb, A.importNode = Sb, 
                A.addEventListener = Tb, A.removeEventListener = Ub, A.ab = Vb, A.bb = Wb, A.dispatchEvent = Xb, 
                A.querySelector = Yb, A.querySelectorAll = Zb, A.contains = $b;
                var ac = /[&\u00A0"]/g, bc = /[&\u00A0<>]/g, ec = dc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), fc = dc("style script xmp iframe noembed noframes plaintext noscript".split(" ")), B = {}, C = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1), D = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);
                B.parentNode = function(a) {
                    return C.currentNode = a, C.parentNode();
                }, B.firstChild = function(a) {
                    return C.currentNode = a, C.firstChild();
                }, B.lastChild = function(a) {
                    return C.currentNode = a, C.lastChild();
                }, B.previousSibling = function(a) {
                    return C.currentNode = a, C.previousSibling();
                }, B.nextSibling = function(a) {
                    return C.currentNode = a, C.nextSibling();
                }, B.childNodes = hc, B.parentElement = function(a) {
                    return D.currentNode = a, D.parentNode();
                }, B.firstElementChild = function(a) {
                    return D.currentNode = a, D.firstChild();
                }, B.lastElementChild = function(a) {
                    return D.currentNode = a, D.lastChild();
                }, B.previousElementSibling = function(a) {
                    return D.currentNode = a, D.previousSibling();
                }, B.nextElementSibling = function(a) {
                    return D.currentNode = a, D.nextSibling();
                }, B.children = function(a) {
                    var b = [];
                    for (D.currentNode = a, a = D.firstChild(); a; ) b.push(a), a = D.nextSibling();
                    return b;
                }, B.innerHTML = function(a) {
                    return gc(a, function(a) {
                        return hc(a);
                    });
                }, B.textContent = function(a) {
                    switch (a.nodeType) {
                      case Node.ELEMENT_NODE:
                      case Node.DOCUMENT_FRAGMENT_NODE:
                        a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
                        for (var c, b = ""; c = a.nextNode(); ) b += c.nodeValue;
                        return b;

                      default:
                        return a.nodeValue;
                    }
                };
                var ic = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"), jc = document.implementation.createHTMLDocument("inert").createElement("div"), kc = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"), lc = {
                    parentElement: {
                        get: function() {
                            var a = this.__shady && this.__shady.parentNode;
                            return a && a.nodeType !== Node.ELEMENT_NODE && (a = null), void 0 !== a ? a : B.parentElement(this);
                        },
                        configurable: !0
                    },
                    parentNode: {
                        get: function() {
                            var a = this.__shady && this.__shady.parentNode;
                            return void 0 !== a ? a : B.parentNode(this);
                        },
                        configurable: !0
                    },
                    nextSibling: {
                        get: function() {
                            var a = this.__shady && this.__shady.nextSibling;
                            return void 0 !== a ? a : B.nextSibling(this);
                        },
                        configurable: !0
                    },
                    previousSibling: {
                        get: function() {
                            var a = this.__shady && this.__shady.previousSibling;
                            return void 0 !== a ? a : B.previousSibling(this);
                        },
                        configurable: !0
                    },
                    className: {
                        get: function() {
                            return this.getAttribute("class") || "";
                        },
                        set: function(a) {
                            this.setAttribute("class", a);
                        },
                        configurable: !0
                    },
                    nextElementSibling: {
                        get: function() {
                            if (this.__shady && void 0 !== this.__shady.nextSibling) {
                                for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.nextSibling;
                                return a;
                            }
                            return B.nextElementSibling(this);
                        },
                        configurable: !0
                    },
                    previousElementSibling: {
                        get: function() {
                            if (this.__shady && void 0 !== this.__shady.previousSibling) {
                                for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.previousSibling;
                                return a;
                            }
                            return B.previousElementSibling(this);
                        },
                        configurable: !0
                    }
                }, mc = {
                    childNodes: {
                        get: function() {
                            if (qb(this)) {
                                if (!this.__shady.childNodes) {
                                    this.__shady.childNodes = [];
                                    for (var a = this.firstChild; a; a = a.nextSibling) this.__shady.childNodes.push(a);
                                }
                                var b = this.__shady.childNodes;
                            } else b = B.childNodes(this);
                            return b.item = function(a) {
                                return b[a];
                            }, b;
                        },
                        configurable: !0
                    },
                    childElementCount: {
                        get: function() {
                            return this.children.length;
                        },
                        configurable: !0
                    },
                    firstChild: {
                        get: function() {
                            var a = this.__shady && this.__shady.firstChild;
                            return void 0 !== a ? a : B.firstChild(this);
                        },
                        configurable: !0
                    },
                    lastChild: {
                        get: function() {
                            var a = this.__shady && this.__shady.lastChild;
                            return void 0 !== a ? a : B.lastChild(this);
                        },
                        configurable: !0
                    },
                    textContent: {
                        get: function() {
                            if (qb(this)) {
                                for (var d, a = [], b = 0, c = this.childNodes; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
                                return a.join("");
                            }
                            return B.textContent(this);
                        },
                        set: function(a) {
                            switch (this.nodeType) {
                              case Node.ELEMENT_NODE:
                              case Node.DOCUMENT_FRAGMENT_NODE:
                                for (;this.firstChild; ) this.removeChild(this.firstChild);
                                (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));
                                break;

                              default:
                                this.nodeValue = a;
                            }
                        },
                        configurable: !0
                    },
                    firstElementChild: {
                        get: function() {
                            if (this.__shady && void 0 !== this.__shady.firstChild) {
                                for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.nextSibling;
                                return a;
                            }
                            return B.firstElementChild(this);
                        },
                        configurable: !0
                    },
                    lastElementChild: {
                        get: function() {
                            if (this.__shady && void 0 !== this.__shady.lastChild) {
                                for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE; ) a = a.previousSibling;
                                return a;
                            }
                            return B.lastElementChild(this);
                        },
                        configurable: !0
                    },
                    children: {
                        get: function() {
                            var a;
                            return a = qb(this) ? Array.prototype.filter.call(this.childNodes, function(a) {
                                return a.nodeType === Node.ELEMENT_NODE;
                            }) : B.children(this), a.item = function(b) {
                                return a[b];
                            }, a;
                        },
                        configurable: !0
                    },
                    innerHTML: {
                        get: function() {
                            var a = "template" === this.localName ? this.content : this;
                            return qb(this) ? gc(a) : B.innerHTML(a);
                        },
                        set: function(a) {
                            for (var b = "template" === this.localName ? this.content : this; b.firstChild; ) b.removeChild(b.firstChild);
                            for (ic && ic.set ? ic.set.call(jc, a) : jc.innerHTML = a; jc.firstChild; ) b.appendChild(jc.firstChild);
                        },
                        configurable: !0
                    }
                }, nc = {
                    shadowRoot: {
                        get: function() {
                            return this.__shady && this.__shady.Ua || null;
                        },
                        configurable: !0
                    }
                }, rc = {
                    activeElement: {
                        get: function() {
                            var a = kc && kc.get ? kc.get.call(document) : y.M ? void 0 : document.activeElement;
                            if (a && a.nodeType) {
                                var b = !!z(this);
                                if (this === document || b && this.host !== a && A.contains.call(this.host, a)) {
                                    for (b = rb(a); b && b !== this; ) a = b.host, b = rb(a);
                                    a = this === document ? b ? null : a : b === this ? a : null;
                                } else a = null;
                            } else a = null;
                            return a;
                        },
                        set: function() {},
                        configurable: !0
                    }
                }, sc = y.M ? function() {} : function(a) {
                    a.__shady && a.__shady.Ba || (a.__shady = a.__shady || {}, a.__shady.Ba = !0, E(a, lc, !0));
                }, tc = y.M ? function() {} : function(a) {
                    a.__shady && a.__shady.za || (a.__shady = a.__shady || {}, a.__shady.za = !0, E(a, mc, !0), 
                    E(a, nc, !0));
                }, Lc = null, Oc = "__eventWrappers" + Date.now(), Pc = {
                    blur: !0,
                    focus: !0,
                    focusin: !0,
                    focusout: !0,
                    click: !0,
                    dblclick: !0,
                    mousedown: !0,
                    mouseenter: !0,
                    mouseleave: !0,
                    mousemove: !0,
                    mouseout: !0,
                    mouseover: !0,
                    mouseup: !0,
                    wheel: !0,
                    beforeinput: !0,
                    input: !0,
                    keydown: !0,
                    keyup: !0,
                    compositionstart: !0,
                    compositionupdate: !0,
                    compositionend: !0,
                    touchstart: !0,
                    touchend: !0,
                    touchmove: !0,
                    touchcancel: !0,
                    pointerover: !0,
                    pointerenter: !0,
                    pointerdown: !0,
                    pointermove: !0,
                    pointerup: !0,
                    pointercancel: !0,
                    pointerout: !0,
                    pointerleave: !0,
                    gotpointercapture: !0,
                    lostpointercapture: !0,
                    dragstart: !0,
                    drag: !0,
                    dragenter: !0,
                    dragleave: !0,
                    dragover: !0,
                    drop: !0,
                    dragend: !0,
                    DOMActivate: !0,
                    DOMFocusIn: !0,
                    DOMFocusOut: !0,
                    keypress: !0
                }, Sc = {
                    get composed() {
                        return !1 !== this.isTrusted && void 0 === this.Z && (this.Z = Pc[this.type]), this.Z || !1;
                    },
                    composedPath: function() {
                        return this.ma || (this.ma = Qc(this.__target, this.composed)), this.ma;
                    },
                    get target() {
                        return Rc(this.currentTarget, this.composedPath());
                    },
                    get relatedTarget() {
                        return this.na ? (this.oa || (this.oa = Qc(this.na, !0)), Rc(this.currentTarget, this.oa)) : null;
                    },
                    stopPropagation: function() {
                        Event.prototype.stopPropagation.call(this), this.$ = !0;
                    },
                    stopImmediatePropagation: function() {
                        Event.prototype.stopImmediatePropagation.call(this), this.$ = this.ya = !0;
                    }
                }, Uc = {
                    focus: !0,
                    blur: !0
                }, bd = Tc(window.Event), cd = Tc(window.CustomEvent), dd = Tc(window.MouseEvent), hd = {};
                (G.prototype = Object.create(DocumentFragment.prototype))._renderRoot = function() {
                    this.T = !1, Dc(this);
                    for (var b, a = 0; a < this.s.length; a++) {
                        var c = (b = this.s[a]).__shady.assignedNodes;
                        if (b.__shady.assignedNodes = [], b.__shady.K = [], b.__shady.qa = c) for (var d = 0; d < c.length; d++) {
                            var e = c[d];
                            e.__shady.fa = e.__shady.assignedSlot, e.__shady.assignedSlot === b && (e.__shady.assignedSlot = null);
                        }
                    }
                    for (b = this.host.firstChild; b; b = b.nextSibling) jd(this, b);
                    for (a = 0; a < this.s.length; a++) {
                        if (!(b = this.s[a]).__shady.assignedNodes.length) for (c = b.firstChild; c; c = c.nextSibling) jd(this, c, b);
                        if (c = b.parentNode, (c = c.__shady && c.__shady.root) && Ec(c) && c._renderRoot(), 
                        kd(this, b.__shady.K, b.__shady.assignedNodes), c = b.__shady.qa) {
                            for (d = 0; d < c.length; d++) c[d].__shady.fa = null;
                            b.__shady.qa = null, c.length > b.__shady.assignedNodes.length && (b.__shady.ha = !0);
                        }
                        b.__shady.ha && (b.__shady.ha = !1, ld(this, b));
                    }
                    for (a = this.s, b = [], c = 0; c < a.length; c++) (d = a[c].parentNode).__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d);
                    for (a = 0; a < b.length; a++) {
                        d = (c = b[a]) === this ? this.host : c, e = [], c = c.childNodes;
                        for (var f = 0; f < c.length; f++) {
                            var g = c[f];
                            if ("slot" == g.localName) {
                                g = g.__shady.K;
                                for (var h = 0; h < g.length; h++) e.push(g[h]);
                            } else e.push(g);
                        }
                        c = void 0, f = B.childNodes(d), g = function(a, b, c, d) {
                            var e = 0, f = 0, g = 0, h = 0, k = Math.min(b - e, d - f);
                            if (0 == e && 0 == f) a: {
                                for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
                                g = k;
                            }
                            if (b == a.length && d == c.length) {
                                h = a.length;
                                for (var l = c.length, m = 0; m < k - g && function(a, b) {
                                    return a === c[--l];
                                }(a[--h]); ) m++;
                                h = m;
                            }
                            if (e += g, f += g, b -= h, d -= h, 0 == b - e && 0 == d - f) return [];
                            if (e == b) {
                                for (b = ed(e, 0); f < d; ) b.O.push(c[f++]);
                                return [ b ];
                            }
                            if (f == d) return [ ed(e, b - e) ];
                            for (d = d - (g = f) + 1, h = b - (k = e) + 1, b = Array(d), l = 0; l < d; l++) b[l] = Array(h), 
                            b[l][0] = l;
                            for (l = 0; l < h; l++) b[0][l] = l;
                            for (l = 1; l < d; l++) for (m = 1; m < h; m++) if (a[k + m - 1] === c[g + l - 1]) b[l][m] = b[l - 1][m - 1]; else {
                                var n = b[l - 1][m] + 1, v = b[l][m - 1] + 1;
                                b[l][m] = n < v ? n : v;
                            }
                            for (k = b.length - 1, g = b[0].length - 1, d = b[k][g], a = []; 0 < k || 0 < g; ) 0 == k ? (a.push(2), 
                            g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], 
                            (n = l < m ? l < h ? l : h : m < h ? m : h) == h ? (h == d ? a.push(0) : (a.push(1), 
                            d = h), k--, g--) : n == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));
                            for (a.reverse(), b = void 0, k = [], g = 0; g < a.length; g++) switch (a[g]) {
                              case 0:
                                b && (k.push(b), b = void 0), e++, f++;
                                break;

                              case 1:
                                b || (b = ed(e, 0)), b.U++, e++, b.O.push(c[f]), f++;
                                break;

                              case 2:
                                b || (b = ed(e, 0)), b.U++, e++;
                                break;

                              case 3:
                                b || (b = ed(e, 0)), b.O.push(c[f]), f++;
                            }
                            return b && k.push(b), k;
                        }(e, e.length, f, f.length);
                        for (var k = h = 0; h < g.length && (c = g[h]); h++) {
                            for (var m, l = 0; l < c.O.length && (m = c.O[l]); l++) B.parentNode(m) === d && A.removeChild.call(d, m), 
                            f.splice(c.index + k, 1);
                            k -= c.U;
                        }
                        for (k = 0; k < g.length && (c = g[k]); k++) for (h = f[c.index], l = c.index; l < c.index + c.U; l++) m = e[l], 
                        A.insertBefore.call(d, m, h), f.splice(l, 0, m);
                    }
                }, G.prototype.addEventListener = function(a, b, c) {
                    "object" != typeof c && (c = {
                        capture: !!c
                    }), c.aa = this, this.host.addEventListener(a, b, c);
                }, G.prototype.removeEventListener = function(a, b, c) {
                    "object" != typeof c && (c = {
                        capture: !!c
                    }), c.aa = this, this.host.removeEventListener(a, b, c);
                }, G.prototype.getElementById = function(a) {
                    return Jc(this, function(b) {
                        return b.id == a;
                    }, function(a) {
                        return !!a;
                    })[0] || null;
                };
                var nd = G.prototype;
                E(nd, mc, !0), E(nd, rc, !0);
                var pd = {
                    addEventListener: Yc.bind(window),
                    removeEventListener: $c.bind(window)
                }, qd = {
                    addEventListener: Yc,
                    removeEventListener: $c,
                    appendChild: function(a) {
                        return wc(this, a);
                    },
                    insertBefore: function(a, b) {
                        return wc(this, a, b);
                    },
                    removeChild: function(a) {
                        return xc(this, a);
                    },
                    replaceChild: function(a, b) {
                        return wc(this, a, b), xc(this, b), a;
                    },
                    cloneNode: function(a) {
                        if ("template" == this.localName) var b = A.cloneNode.call(this, a); else if (b = A.cloneNode.call(this, !1), 
                        a) {
                            a = this.childNodes;
                            for (var d, c = 0; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d);
                        }
                        return b;
                    },
                    getRootNode: function() {
                        return Ic(this);
                    },
                    contains: function(a) {
                        return Cb(this, a);
                    },
                    get isConnected() {
                        var a = this.ownerDocument;
                        if (Bb && A.contains.call(a, this) || a.documentElement && A.contains.call(a.documentElement, this)) return !0;
                        for (a = this; a && !(a instanceof Document); ) a = a.parentNode || (a instanceof G ? a.host : void 0);
                        return !!(a && a instanceof Document);
                    },
                    dispatchEvent: function(a) {
                        return Gb(), A.dispatchEvent.call(this, a);
                    }
                }, rd = {
                    get assignedSlot() {
                        return od(this);
                    }
                }, sd = {
                    querySelector: function(a) {
                        return Jc(this, function(b) {
                            return tb.call(b, a);
                        }, function(a) {
                            return !!a;
                        })[0] || null;
                    },
                    querySelectorAll: function(a) {
                        return Jc(this, function(b) {
                            return tb.call(b, a);
                        });
                    }
                }, td = {
                    assignedNodes: function(a) {
                        if ("slot" === this.localName) {
                            var b = this.getRootNode();
                            return z(b) && id(b), this.__shady ? (a && a.flatten ? this.__shady.K : this.__shady.assignedNodes) || [] : [];
                        }
                    }
                }, ud = vb({
                    setAttribute: function(a, b) {
                        Mc(this, a, b);
                    },
                    removeAttribute: function(a) {
                        A.removeAttribute.call(this, a), Fc(this, a);
                    },
                    attachShadow: function(a) {
                        if (!this) throw "Must provide a host.";
                        if (!a) throw "Not enough arguments.";
                        return new G(hd, this, a);
                    },
                    get slot() {
                        return this.getAttribute("slot");
                    },
                    set slot(a) {
                        Mc(this, "slot", a);
                    },
                    get assignedSlot() {
                        return od(this);
                    }
                }, sd, td);
                Object.defineProperties(ud, nc);
                var vd = vb({
                    importNode: function(a, b) {
                        return Nc(a, b);
                    },
                    getElementById: function(a) {
                        return Jc(this, function(b) {
                            return b.id == a;
                        }, function(a) {
                            return !!a;
                        })[0] || null;
                    }
                }, sd);
                Object.defineProperties(vd, {
                    _activeElement: rc.activeElement
                });
                var wd = HTMLElement.prototype.blur, xd = vb({
                    blur: function() {
                        var a = this.__shady && this.__shady.root;
                        (a = a && a.activeElement) ? a.blur() : wd.call(this);
                    }
                });
                if (y.ta) {
                    var ShadyDOM = {
                        inUse: y.ta,
                        patch: function(a) {
                            return a;
                        },
                        isShadyRoot: z,
                        enqueue: Fb,
                        flush: Gb,
                        settings: y,
                        filterMutations: function(a, b) {
                            var c = b.getRootNode();
                            return a.map(function(a) {
                                var b = c === a.target.getRootNode();
                                if (b && a.addedNodes) {
                                    if ((b = Array.from(a.addedNodes).filter(function(a) {
                                        return c === a.getRootNode();
                                    })).length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", {
                                        value: b,
                                        configurable: !0
                                    }), a;
                                } else if (b) return a;
                            }).filter(function(a) {
                                return a;
                            });
                        },
                        observeChildren: function(a, b) {
                            a.__shady = a.__shady || {}, a.__shady.N || (a.__shady.N = new Hb()), a.__shady.N.V.add(b);
                            var c = a.__shady.N;
                            return {
                                Ea: b,
                                C: c,
                                Ha: a,
                                takeRecords: function() {
                                    return c.takeRecords();
                                }
                            };
                        },
                        unobserveChildren: function(a) {
                            var b = a && a.C;
                            b && (b.V.delete(a.Ea), b.V.size || (a.Ha.__shady.N = null));
                        },
                        nativeMethods: A,
                        nativeTree: B
                    };
                    window.ShadyDOM = ShadyDOM, window.Event = bd, window.CustomEvent = cd, window.MouseEvent = dd, 
                    function() {
                        for (var a in Uc) window.addEventListener(a, function(a) {
                            a.__target || (Zc(a), function(a) {
                                var b = a.composedPath();
                                Object.defineProperty(a, "currentTarget", {
                                    get: function() {
                                        return d;
                                    },
                                    configurable: !0
                                });
                                for (var c = b.length - 1; 0 <= c; c--) {
                                    var d = b[c];
                                    if (Vc(a, d, "capture"), a.$) return;
                                }
                                Object.defineProperty(a, "eventPhase", {
                                    get: function() {
                                        return Event.AT_TARGET;
                                    }
                                });
                                var e;
                                for (c = 0; c < b.length; c++) {
                                    var f = (d = b[c]).__shady && d.__shady.root;
                                    if ((0 === c || f && f === e) && (Vc(a, d, "bubble"), d !== window && (e = d.getRootNode()), 
                                    a.$)) break;
                                }
                            }(a));
                        }, !0);
                    }();
                    var yd = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
                    H(window.Node.prototype, qd), H(window.Window.prototype, pd), H(window.Text.prototype, rd), 
                    H(window.DocumentFragment.prototype, sd), H(window.Element.prototype, ud), H(window.Document.prototype, vd), 
                    window.HTMLSlotElement && H(window.HTMLSlotElement.prototype, td), H(yd.prototype, xd), 
                    y.M && (F(window.Node.prototype), F(window.Text.prototype), F(window.DocumentFragment.prototype), 
                    F(window.Element.prototype), F(yd.prototype), F(window.Document.prototype), window.HTMLSlotElement && F(window.HTMLSlotElement.prototype)), 
                    window.ShadowRoot = G;
                }
                var zd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
                Cd.prototype.b = function(a) {
                    if (this.c && !a.__CE_patched) {
                        a.__CE_patched = !0;
                        for (var b = 0; b < this.h.length; b++) this.h[b](a);
                    }
                }, Cd.prototype.connectedCallback = function(a) {
                    var b = a.__CE_definition;
                    b.connectedCallback && b.connectedCallback.call(a);
                }, Cd.prototype.disconnectedCallback = function(a) {
                    var b = a.__CE_definition;
                    b.disconnectedCallback && b.disconnectedCallback.call(a);
                }, Cd.prototype.attributeChangedCallback = function(a, b, c, d, e) {
                    var f = a.__CE_definition;
                    f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e);
                }, Hd.prototype.b = function(a) {
                    var b = this.a.readyState;
                    for ("interactive" !== b && "complete" !== b || Id(this), b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) O(this.j, c[d]);
                }, Jd.prototype.resolve = function(a) {
                    if (this.a) throw Error("Already resolved.");
                    this.a = a, this.b && this.b(a);
                }, P.prototype.define = function(a, b) {
                    var c = this;
                    if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
                    if (!Ad(a)) throw new SyntaxError("The element name '" + a + "' is not valid.");
                    if (this.j.a.get(a)) throw Error("A custom element with name '" + a + "' has already been defined.");
                    if (this.ca) throw Error("A custom element is already being defined.");
                    this.ca = !0;
                    try {
                        var d = function(a) {
                            var b = e[a];
                            if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function.");
                            return b;
                        }, e = b.prototype;
                        if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                        var f = d("connectedCallback"), g = d("disconnectedCallback"), h = d("adoptedCallback"), k = d("attributeChangedCallback"), l = b.observedAttributes || [];
                    } catch (m) {
                        return;
                    } finally {
                        this.ca = !1;
                    }
                    b = {
                        localName: a,
                        constructor: b,
                        connectedCallback: f,
                        disconnectedCallback: g,
                        adoptedCallback: h,
                        attributeChangedCallback: k,
                        observedAttributes: l,
                        constructionStack: []
                    }, function(a, b, c) {
                        a.a.set(b, c), a.o.set(c.constructor, c);
                    }(this.j, a, b), this.ea.push(b), this.R || (this.R = !0, this.da(function() {
                        return function(a) {
                            if (!1 !== a.R) {
                                a.R = !1;
                                for (var b = a.ea, c = [], d = new Map(), e = 0; e < b.length; e++) d.set(b[e].localName, []);
                                for (O(a.j, document, {
                                    wa: function(b) {
                                        if (void 0 === b.__CE_state) {
                                            var e = b.localName, f = d.get(e);
                                            f ? f.push(b) : a.j.a.get(e) && c.push(b);
                                        }
                                    }
                                }), e = 0; e < c.length; e++) Gd(a.j, c[e]);
                                for (;0 < b.length; ) {
                                    var f = b.shift();
                                    e = f.localName, f = d.get(f.localName);
                                    for (var g = 0; g < f.length; g++) Gd(a.j, f[g]);
                                    (e = a.ga.get(e)) && e.resolve(void 0);
                                }
                            }
                        }(c);
                    }));
                }, P.prototype.get = function(a) {
                    if (a = this.j.a.get(a)) return a.constructor;
                }, P.prototype.whenDefined = function(a) {
                    if (!Ad(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
                    var b = this.ga.get(a);
                    return b ? b.c : (b = new Jd(), this.ga.set(a, b), this.j.a.get(a) && !this.ea.some(function(b) {
                        return b.localName === a;
                    }) && b.resolve(void 0), b.c);
                }, P.prototype.Ta = function(a) {
                    Id(this.Fa);
                    var b = this.da;
                    this.da = function(c) {
                        return a(function() {
                            return b(c);
                        });
                    };
                }, window.CustomElementRegistry = P, P.prototype.define = P.prototype.define, P.prototype.get = P.prototype.get, 
                P.prototype.whenDefined = P.prototype.whenDefined, P.prototype.polyfillWrapFlushCallback = P.prototype.Ta;
                var Ld = window.Document.prototype.createElement, Md = window.Document.prototype.createElementNS, Nd = window.Document.prototype.importNode, Od = window.Document.prototype.prepend, Pd = window.Document.prototype.append, Qd = window.DocumentFragment.prototype.prepend, Rd = window.DocumentFragment.prototype.append, Sd = window.Node.prototype.cloneNode, Td = window.Node.prototype.appendChild, Ud = window.Node.prototype.insertBefore, Vd = window.Node.prototype.removeChild, Wd = window.Node.prototype.replaceChild, Xd = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), Yd = window.Element.prototype.attachShadow, Zd = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), $d = window.Element.prototype.getAttribute, ae = window.Element.prototype.setAttribute, be = window.Element.prototype.removeAttribute, ce = window.Element.prototype.getAttributeNS, de = window.Element.prototype.setAttributeNS, ee = window.Element.prototype.removeAttributeNS, fe = window.Element.prototype.insertAdjacentElement, ge = window.Element.prototype.prepend, he = window.Element.prototype.append, ie = window.Element.prototype.before, je = window.Element.prototype.after, ke = window.Element.prototype.replaceWith, le = window.Element.prototype.remove, me = window.HTMLElement, ne = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), oe = window.HTMLElement.prototype.insertAdjacentElement, pe = new function() {}(), xe = window.customElements;
                if (!xe || xe.forcePolyfill || "function" != typeof xe.define || "function" != typeof xe.get) {
                    var re = new Cd();
                    !function() {
                        var a = re;
                        window.HTMLElement = function() {
                            function b() {
                                var b = this.constructor, d = a.o.get(b);
                                if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
                                var e = d.constructionStack;
                                if (0 === e.length) return e = Ld.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), 
                                e.__CE_state = 1, e.__CE_definition = d, a.b(e), e;
                                var f = e[d = e.length - 1];
                                if (f === pe) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                                return e[d] = pe, Object.setPrototypeOf(f, b.prototype), a.b(f), f;
                            }
                            return b.prototype = me.prototype, b;
                        }();
                    }(), function() {
                        var a = re;
                        L(Document.prototype, "createElement", function(b) {
                            if (this.__CE_hasRegistry) {
                                var c = a.a.get(b);
                                if (c) return new c.constructor();
                            }
                            return b = Ld.call(this, b), a.b(b), b;
                        }), L(Document.prototype, "importNode", function(b, c) {
                            return b = Nd.call(this, b, c), this.__CE_hasRegistry ? O(a, b) : Fd(a, b), b;
                        }), L(Document.prototype, "createElementNS", function(b, c) {
                            if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) {
                                var d = a.a.get(c);
                                if (d) return new d.constructor();
                            }
                            return b = Md.call(this, b, c), a.b(b), b;
                        }), se(a, Document.prototype, {
                            X: Od,
                            append: Pd
                        });
                    }(), se(re, DocumentFragment.prototype, {
                        X: Qd,
                        append: Rd
                    }), function() {
                        function b(b, d) {
                            Object.defineProperty(b, "textContent", {
                                enumerable: d.enumerable,
                                configurable: !0,
                                get: d.get,
                                set: function(b) {
                                    if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else {
                                        var c = void 0;
                                        if (this.firstChild) {
                                            var e = this.childNodes, h = e.length;
                                            if (0 < h && J(this)) {
                                                c = Array(h);
                                                for (var k = 0; k < h; k++) c[k] = e[k];
                                            }
                                        }
                                        if (d.set.call(this, b), c) for (b = 0; b < c.length; b++) N(a, c[b]);
                                    }
                                }
                            });
                        }
                        var a = re;
                        L(Node.prototype, "insertBefore", function(b, d) {
                            if (b instanceof DocumentFragment) {
                                var c = Array.prototype.slice.apply(b.childNodes);
                                if (b = Ud.call(this, b, d), J(this)) for (d = 0; d < c.length; d++) M(a, c[d]);
                                return b;
                            }
                            return c = J(b), d = Ud.call(this, b, d), c && N(a, b), J(this) && M(a, b), d;
                        }), L(Node.prototype, "appendChild", function(b) {
                            if (b instanceof DocumentFragment) {
                                var c = Array.prototype.slice.apply(b.childNodes);
                                if (b = Td.call(this, b), J(this)) for (var e = 0; e < c.length; e++) M(a, c[e]);
                                return b;
                            }
                            return c = J(b), e = Td.call(this, b), c && N(a, b), J(this) && M(a, b), e;
                        }), L(Node.prototype, "cloneNode", function(b) {
                            return b = Sd.call(this, b), this.ownerDocument.__CE_hasRegistry ? O(a, b) : Fd(a, b), 
                            b;
                        }), L(Node.prototype, "removeChild", function(b) {
                            var c = J(b), e = Vd.call(this, b);
                            return c && N(a, b), e;
                        }), L(Node.prototype, "replaceChild", function(b, d) {
                            if (b instanceof DocumentFragment) {
                                var c = Array.prototype.slice.apply(b.childNodes);
                                if (b = Wd.call(this, b, d), J(this)) for (N(a, d), d = 0; d < c.length; d++) M(a, c[d]);
                                return b;
                            }
                            c = J(b);
                            var f = Wd.call(this, b, d), g = J(this);
                            return g && N(a, d), c && N(a, b), g && M(a, b), f;
                        }), Xd && Xd.get ? b(Node.prototype, Xd) : Ed(a, function(a) {
                            b(a, {
                                enumerable: !0,
                                configurable: !0,
                                get: function() {
                                    for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
                                    return a.join("");
                                },
                                set: function(a) {
                                    for (;this.firstChild; ) Vd.call(this, this.firstChild);
                                    Td.call(this, document.createTextNode(a));
                                }
                            });
                        });
                    }(), function() {
                        function b(b, c) {
                            Object.defineProperty(b, "innerHTML", {
                                enumerable: c.enumerable,
                                configurable: !0,
                                get: c.get,
                                set: function(b) {
                                    var d = this, e = void 0;
                                    if (J(this) && (e = [], K(this, function(a) {
                                        a !== d && e.push(a);
                                    })), c.set.call(this, b), e) for (var f = 0; f < e.length; f++) {
                                        var g = e[f];
                                        1 === g.__CE_state && a.disconnectedCallback(g);
                                    }
                                    return this.ownerDocument.__CE_hasRegistry ? O(a, this) : Fd(a, this), b;
                                }
                            });
                        }
                        function c(b, c) {
                            L(b, "insertAdjacentElement", function(b, d) {
                                var e = J(d);
                                return b = c.call(this, b, d), e && N(a, d), J(b) && M(a, d), b;
                            });
                        }
                        var a = re;
                        if (Yd && L(Element.prototype, "attachShadow", function(a) {
                            return this.__CE_shadowRoot = a = Yd.call(this, a);
                        }), Zd && Zd.get) b(Element.prototype, Zd); else if (ne && ne.get) b(HTMLElement.prototype, ne); else {
                            var d = Ld.call(document, "div");
                            Ed(a, function(a) {
                                b(a, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: function() {
                                        return Sd.call(this, !0).innerHTML;
                                    },
                                    set: function(a) {
                                        var b = "template" === this.localName ? this.content : this;
                                        for (d.innerHTML = a; 0 < b.childNodes.length; ) Vd.call(b, b.childNodes[0]);
                                        for (;0 < d.childNodes.length; ) Td.call(b, d.childNodes[0]);
                                    }
                                });
                            });
                        }
                        L(Element.prototype, "setAttribute", function(b, c) {
                            if (1 !== this.__CE_state) return ae.call(this, b, c);
                            var d = $d.call(this, b);
                            ae.call(this, b, c), c = $d.call(this, b), a.attributeChangedCallback(this, b, d, c, null);
                        }), L(Element.prototype, "setAttributeNS", function(b, c, d) {
                            if (1 !== this.__CE_state) return de.call(this, b, c, d);
                            var e = ce.call(this, b, c);
                            de.call(this, b, c, d), d = ce.call(this, b, c), a.attributeChangedCallback(this, c, e, d, b);
                        }), L(Element.prototype, "removeAttribute", function(b) {
                            if (1 !== this.__CE_state) return be.call(this, b);
                            var c = $d.call(this, b);
                            be.call(this, b), null !== c && a.attributeChangedCallback(this, b, c, null, null);
                        }), L(Element.prototype, "removeAttributeNS", function(b, c) {
                            if (1 !== this.__CE_state) return ee.call(this, b, c);
                            var d = ce.call(this, b, c);
                            ee.call(this, b, c);
                            var e = ce.call(this, b, c);
                            d !== e && a.attributeChangedCallback(this, c, d, e, b);
                        }), oe ? c(HTMLElement.prototype, oe) : fe ? c(Element.prototype, fe) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), 
                        se(a, Element.prototype, {
                            X: ge,
                            append: he
                        }), function(a) {
                            function c(b) {
                                return function(c) {
                                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                                    e = [];
                                    for (var h = [], k = 0; k < d.length; k++) {
                                        var l = d[k];
                                        if (l instanceof Element && J(l) && h.push(l), l instanceof DocumentFragment) for (l = l.firstChild; l; l = l.nextSibling) e.push(l); else e.push(l);
                                    }
                                    for (b.apply(this, d), d = 0; d < h.length; d++) N(a, h[d]);
                                    if (J(this)) for (d = 0; d < e.length; d++) (h = e[d]) instanceof Element && M(a, h);
                                };
                            }
                            var b = Element.prototype;
                            void 0 !== ie && (b.before = c(ie)), void 0 !== ie && (b.after = c(je)), void 0 !== ke && L(b, "replaceWith", function(b) {
                                for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                                d = [];
                                for (var g = [], h = 0; h < c.length; h++) {
                                    var k = c[h];
                                    if (k instanceof Element && J(k) && g.push(k), k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) d.push(k); else d.push(k);
                                }
                                for (h = J(this), ke.apply(this, c), c = 0; c < g.length; c++) N(a, g[c]);
                                if (h) for (N(a, this), c = 0; c < d.length; c++) (g = d[c]) instanceof Element && M(a, g);
                            }), void 0 !== le && L(b, "remove", function() {
                                var b = J(this);
                                le.call(this), b && N(a, this);
                            });
                        }(a);
                    }(), document.__CE_hasRegistry = !0;
                    var customElements = new P(re);
                    Object.defineProperty(window, "customElements", {
                        configurable: !0,
                        enumerable: !0,
                        value: customElements
                    });
                }
                var Se, Me = 1, Ke = 7, Ie = 4, Le = 1e3, Ae = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, Be = /@import[^;]*;/gim, Oe = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, Pe = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, Qe = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, Re = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, Je = /^@[^\s]*keyframes/, Ee = /\s+/g, Q = !(window.ShadyDOM && window.ShadyDOM.inUse);
                window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Se = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Te(window.ShadyCSS), 
                window.ShadyCSS = void 0) : Te(window.WebComponents && window.WebComponents.flags);
                var R = Se, Ue = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, Ve = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, We = /(--[\w-]+)\s*([:,;)]|$)/gi, Xe = /(animation\s*:)|(animation-name\s*:)/, Ye = /@media\s(.*)/, Ze = /\{[^}]*\}/g, S = null;
                hf.prototype.b = function(a, b, c) {
                    var d = !1;
                    a = a.trim();
                    var e = uf.test(a);
                    return e && (a = a.replace(uf, function(a, b, c) {
                        return ":" + b + "(" + c.replace(/\s/g, "") + ")";
                    }), a = tf(a)), a = a.replace(vf, wf + " $1"), a = a.replace(xf, function(a, e, h) {
                        return d || (a = function(a, b, c, d) {
                            var e = a.indexOf(zf);
                            if (0 <= a.indexOf(wf) ? a = function(a, b) {
                                var c = a.match(Ff);
                                return (c = c && c[2].trim() || "") ? c[0].match(Gf) ? a.replace(Ff, function(a, c, f) {
                                    return b + f;
                                }) : c.split(Gf)[0] === b ? c : Hf : a.replace(wf, b);
                            }(a, d) : 0 !== e && (a = c ? Bf(a, c) : a), c = !1, 0 <= e && (b = "", c = !0), 
                            c) {
                                var f = !0;
                                c && (a = a.replace(Cf, function(a, b) {
                                    return " > " + b;
                                }));
                            }
                            return a = a.replace(Df, function(a, b, c) {
                                return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
                            }), {
                                value: a,
                                Ja: b,
                                stop: f
                            };
                        }(h, e, b, c), d = d || a.stop, e = a.Ja, h = a.value), e + h;
                    }), e && (a = tf(a)), a;
                }, hf.prototype.c = function(a) {
                    return a.match(zf) ? this.b(a, Kf) : Bf(a.trim(), Kf);
                }, q.Object.defineProperties(hf.prototype, {
                    a: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return "style-scope";
                        }
                    }
                });
                var uf = /:(nth[-\w]+)\(([^)]+)\)/, Kf = ":not(.style-scope)", sf = ",", xf = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Gf = /[[.:#*]/, wf = ":host", Jf = ":root", zf = "::slotted", vf = new RegExp("^(" + zf + ")"), Ff = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Cf = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Df = /(.*):dir\((?:(ltr|rtl))\)/, qf = ".", Ef = ":", mf = "class", Hf = "should_not_match", W = new hf();
                Lf.prototype.c = function() {
                    return this.w;
                }, Lf.prototype._getStyleRules = Lf.prototype.c;
                var Nf, Of = window.Element.prototype;
                Nf = Of.matches || Of.matchesSelector || Of.mozMatchesSelector || Of.msMatchesSelector || Of.oMatchesSelector || Of.webkitMatchesSelector;
                var Pf = navigator.userAgent.match("Trident");
                q.Object.defineProperties(Qf.prototype, {
                    a: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return "x-scope";
                        }
                    }
                });
                var Zf = new Qf(), dg = {}, eg = window.customElements;
                if (eg && !Q) {
                    var fg = eg.define;
                    eg.define = function(a, b, c) {
                        var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head;
                        return e.insertBefore(d, (S ? S.nextSibling : null) || e.firstChild), S = d, dg[a] = d, 
                        fg.call(eg, a, b, c);
                    };
                }
                if (gg.prototype.store = function(a, b, c, d) {
                    var e = this.cache[a] || [];
                    e.push({
                        v: b,
                        styleElement: c,
                        u: d
                    }), e.length > this.a && e.shift(), this.cache[a] = e;
                }, gg.prototype.fetch = function(a, b, c) {
                    if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
                        var f, e = a[d];
                        a: {
                            for (f = 0; f < c.length; f++) {
                                var g = c[f];
                                if (e.v[g] !== b[g]) {
                                    f = !1;
                                    break a;
                                }
                            }
                            f = !0;
                        }
                        if (f) return e;
                    }
                }, !Q) {
                    var jg = new MutationObserver(ig), kg = function(a) {
                        jg.observe(a, {
                            childList: !0,
                            subtree: !0
                        });
                    };
                    if (window.customElements && !window.customElements.polyfillWrapFlushCallback) kg(document); else {
                        var lg = function() {
                            kg(document.body);
                        };
                        window.HTMLImports ? window.HTMLImports.whenReady(lg) : requestAnimationFrame(function() {
                            if ("loading" === document.readyState) {
                                var a = function() {
                                    lg(), document.removeEventListener("readystatechange", a);
                                };
                                document.addEventListener("readystatechange", a);
                            } else lg();
                        });
                    }
                    hg = function() {
                        ig(jg.takeRecords());
                    };
                }
                var ug, mg = hg, ng = {}, og = Promise.resolve(), sg = null, tg = window.HTMLImports && window.HTMLImports.whenReady || null, wg = new gg();
                (p = Y.prototype).xa = function() {
                    mg();
                }, p.La = function(a) {
                    return bf(a);
                }, p.Za = function(a) {
                    return $e(a);
                }, p.prepareTemplate = function(a, b, c) {
                    if (!a.h) {
                        a.h = !0, a.name = b, a.extends = c, ng[b] = a;
                        for (var d = (d = a.content.querySelector("style")) ? d.getAttribute("css-build") || "" : "", e = a.content.querySelectorAll("style"), f = [], g = 0; g < e.length; g++) {
                            var h = e[g];
                            f.push(h.textContent), h.parentNode.removeChild(h);
                        }
                        e = f.join("").trim(), c = {
                            is: b,
                            extends: c,
                            eb: d
                        }, Q || jf(a.content, b), xg(this), f = Ve.test(e) || Ue.test(e), Ve.lastIndex = 0, 
                        Ue.lastIndex = 0, e = ze(e), f && R && this.a && this.a.transformRules(e, b), a._styleAst = e, 
                        a.o = d, d = [], R || (d = function(a) {
                            var b = {}, c = [], d = 0;
                            af(a, function(a) {
                                Sf(a), a.index = d++, a = a.i.cssText;
                                for (var c; c = We.exec(a); ) {
                                    var e = c[1];
                                    ":" !== c[2] && (b[e] = !0);
                                }
                            }, function(a) {
                                c.push(a);
                            }), a.b = c, a = [];
                            for (var e in b) a.push(e);
                            return a;
                        }(a._styleAst)), d.length && !R || (e = Q ? a.content : null, b = dg[b], f = nf(c, a._styleAst), 
                        b = f.length ? df(f, c.is, e, b) : void 0, a.a = b), a.c = d;
                    }
                }, p.F = function() {
                    if (xg(this), this.b) {
                        var a = this.b.processStyles();
                        if (this.b.enqueued) {
                            if (R) for (var b = 0; b < a.length; b++) {
                                var c = this.b.getStyleForCustomStyle(a[b]);
                                if (c && R && this.a) {
                                    var d = bf(c);
                                    xg(this), this.a.transformRules(d), c.textContent = $e(d);
                                }
                            } else for (zg(this, this.c, this.h), b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && function(a, b) {
                                var c = Zf, d = bf(a);
                                a.textContent = $e(d, function(a) {
                                    var d = a.cssText = a.parsedCssText;
                                    a.i && a.i.cssText && (d = d.replace(Oe, "").replace(Pe, ""), a.cssText = Vf(c, d, b));
                                });
                            }(c, this.h.B);
                            this.b.enqueued = !1, this.o && !R && this.styleDocument();
                        }
                    }
                }, p.styleElement = function(a, b) {
                    var c = V(a).is, d = X(a);
                    if (!d) {
                        var e = V(a);
                        d = e.is, e = e.P;
                        var f = dg[d];
                        if (d = ng[d]) var g = d._styleAst, h = d.c;
                        d = Mf(a, new Lf(g, f, h, 0, e));
                    }
                    if (a !== this.c && (this.o = !0), b && (d.G = d.G || {}, Object.assign(d.G, b)), 
                    R) {
                        if (d.G) {
                            b = d.G;
                            for (var k in b) null === k ? a.style.removeProperty(k) : a.style.setProperty(k, b[k]);
                        }
                        ((k = ng[c]) || a === this.c) && k && k.a && !qg(k) && ((qg(k) || k._applyShimValidatingVersion !== k._applyShimNextVersion) && (xg(this), 
                        this.a && this.a.transformRules(k._styleAst, c), k.a.textContent = nf(a, d.w), function(a) {
                            a._applyShimValidatingVersion = a._applyShimNextVersion, a.b || (a.b = !0, og.then(function() {
                                a._applyShimCurrentVersion = a._applyShimNextVersion, a.b = !1;
                            }));
                        }(k)), Q && (c = a.shadowRoot) && (c.querySelector("style").textContent = nf(a, d.w)), 
                        d.w = k._styleAst);
                    } else if (zg(this, a, d), d.ia && d.ia.length) {
                        c = d, k = V(a).is, d = (b = wg.fetch(k, c.B, c.ia)) ? b.styleElement : null, g = c.u, 
                        (h = b && b.u) || (h = this.L[k] = (this.L[k] || 0) + 1, h = k + "-" + h), c.u = h, 
                        h = c.u, e = Zf, e = d ? d.textContent || "" : function(a, b, c, d) {
                            var e = V(b), f = pf(e.is, e.P), g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"), h = function(a, b) {
                                a = a.b;
                                var c = {};
                                if (!Q && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
                                    var f = e, g = b;
                                    f.h = new RegExp(f.keyframesName, "g"), f.a = f.keyframesName + "-" + g, f.m = f.m || f.selector, 
                                    f.selector = f.m.replace(f.keyframesName, f.a), c[e.keyframesName] = function(a) {
                                        return function(b) {
                                            return b.replace(a.h, a.a);
                                        };
                                    }(e);
                                }
                                return c;
                            }(e = X(b).w, d);
                            return nf(b, e, function(b) {
                                var e = "";
                                if (b.i || Sf(b), b.i.cssText && (e = Vf(a, b.i.cssText, c)), b.cssText = e, !Q && !cf(b) && b.cssText) {
                                    var k = e = b.cssText;
                                    if (null == b.ra && (b.ra = Xe.test(e)), b.ra) if (null == b.W) {
                                        b.W = [];
                                        for (var n in h) k = h[n], k = k(e), e !== k && (e = k, b.W.push(n));
                                    } else {
                                        for (n = 0; n < b.W.length; ++n) k = h[b.W[n]], e = k(e);
                                        k = e;
                                    }
                                    b.cssText = k, b.m = b.m || b.selector, e = "." + d, k = 0;
                                    for (var I, v = (n = b.m.split(",")).length; k < v && (I = n[k]); k++) n[k] = I.match(g) ? I.replace(f, e) : e + " " + I;
                                    b.selector = n.join(",");
                                }
                            });
                        }(e, a, c.B, h);
                        var l = (f = X(a)).a;
                        l && !Q && l !== d && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l)), 
                        Q ? f.a ? (f.a.textContent = e, d = f.a) : e && (d = df(e, h, a.shadowRoot, f.b)) : d ? d.parentNode || (Pf && -1 < e.indexOf("@media") && (d.textContent = e), 
                        ef(d, null, f.b)) : e && (d = df(e, h, null, f.b)), d && (d._useCount = d._useCount || 0, 
                        f.a != d && d._useCount++, f.a = d), h = d, Q || (d = c.u, f = e = a.getAttribute("class") || "", 
                        g && (f = e.replace(new RegExp("\\s*x-scope\\s*" + g + "\\s*", "g"), " ")), f += (f ? " " : "") + "x-scope " + d, 
                        e !== f && gf(a, f)), b || wg.store(k, c.B, h, c.u);
                    }
                }, p.styleDocument = function(a) {
                    this.styleSubtree(this.c, a);
                }, p.styleSubtree = function(a, b) {
                    var c = a.shadowRoot;
                    if ((c || a === this.c) && this.styleElement(a, b), b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]); else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
                }, p.va = function(a) {
                    var b = this, c = bf(a);
                    af(c, function(a) {
                        if (Q) If(a); else {
                            var c = W;
                            a.selector = a.parsedSelector, If(a), a.selector = a.m = rf(c, a, c.c, void 0, void 0);
                        }
                        R && (xg(b), b.a && b.a.transformRule(a));
                    }), R ? a.textContent = $e(c) : this.h.w.rules.push(c);
                }, p.getComputedStyleValue = function(a, b) {
                    var c;
                    return R || (c = (X(a) || X(Ag(this, a))).B[b]), (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
                }, p.Ya = function(a, b) {
                    var c = a.getRootNode();
                    if (b = b ? b.split(/\s/) : [], !(c = c.host && c.host.localName)) {
                        var d = a.getAttribute("class");
                        if (d) {
                            d = d.split(/\s/);
                            for (var e = 0; e < d.length; e++) if (d[e] === W.a) {
                                c = d[e + 1];
                                break;
                            }
                        }
                    }
                    c && b.push(W.a, c), R || (c = X(a)) && c.u && b.push(Zf.a, c.u), gf(a, b.join(" "));
                }, p.Ia = function(a) {
                    return X(a);
                }, Y.prototype.flush = Y.prototype.xa, Y.prototype.prepareTemplate = Y.prototype.prepareTemplate, 
                Y.prototype.styleElement = Y.prototype.styleElement, Y.prototype.styleDocument = Y.prototype.styleDocument, 
                Y.prototype.styleSubtree = Y.prototype.styleSubtree, Y.prototype.getComputedStyleValue = Y.prototype.getComputedStyleValue, 
                Y.prototype.setElementClass = Y.prototype.Ya, Y.prototype._styleInfoForNode = Y.prototype.Ia, 
                Y.prototype.transformCustomStyleForDocument = Y.prototype.va, Y.prototype.getStyleAst = Y.prototype.La, 
                Y.prototype.styleAstToString = Y.prototype.Za, Y.prototype.flushCustomStyles = Y.prototype.F, 
                Object.defineProperties(Y.prototype, {
                    nativeShadow: {
                        get: function() {
                            return Q;
                        }
                    },
                    nativeCss: {
                        get: function() {
                            return R;
                        }
                    }
                });
                var Bg, Cg, Z = new Y();
                window.ShadyCSS && (Bg = window.ShadyCSS.ApplyShim, Cg = window.ShadyCSS.CustomStyleInterface), 
                window.ShadyCSS = {
                    ScopingShim: Z,
                    prepareTemplate: function(a, b, c) {
                        Z.F(), Z.prepareTemplate(a, b, c);
                    },
                    styleSubtree: function(a, b) {
                        Z.F(), Z.styleSubtree(a, b);
                    },
                    styleElement: function(a) {
                        Z.F(), Z.styleElement(a);
                    },
                    styleDocument: function(a) {
                        Z.F(), Z.styleDocument(a);
                    },
                    getComputedStyleValue: function(a, b) {
                        return Z.getComputedStyleValue(a, b);
                    },
                    nativeCss: R,
                    nativeShadow: Q
                }, Bg && (window.ShadyCSS.ApplyShim = Bg), Cg && (window.ShadyCSS.CustomStyleInterface = Cg);
                var Dg = window.customElements, Eg = window.HTMLImports, Fg = window.HTMLTemplateElement;
                if (window.WebComponents = window.WebComponents || {}, Dg && Dg.polyfillWrapFlushCallback) {
                    var Gg, Hg = function() {
                        if (Gg) {
                            Fg.J && Fg.J(window.document);
                            var a = Gg;
                            return Gg = null, a(), !0;
                        }
                    }, Ig = Eg.whenReady;
                    Dg.polyfillWrapFlushCallback(function(a) {
                        Gg = a, Ig(Hg);
                    }), Eg.whenReady = function(a) {
                        Ig(function() {
                            Hg() ? Eg.whenReady(a) : a();
                        });
                    };
                }
                Eg.whenReady(function() {
                    requestAnimationFrame(function() {
                        window.WebComponents.ready = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {
                            bubbles: !0
                        }));
                    });
                });
                var Jg = document.createElement("style");
                Jg.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
                var Kg = document.querySelector("head");
                Kg.insertBefore(Jg, Kg.firstChild);
            }).call(this);
        }).call(exports, __webpack_require__(8), __webpack_require__(9));
    },
    8: function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (g = window);
        }
        module.exports = g;
    },
    9: function(module, exports) {
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(function() {
                    draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
                    queue.length && drainQueue());
                });
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, function(marker) {
                    if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
                    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
                    clearTimeout(marker);
                    try {
                        cachedClearTimeout(marker);
                    } catch (e) {
                        try {
                            return cachedClearTimeout.call(null, marker);
                        } catch (e) {
                            return cachedClearTimeout.call(this, marker);
                        }
                    }
                }(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
        process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
        process.listeners = function(name) {
            return [];
        }, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }
});
//# sourceMappingURL=0.js.map