window.Choices = function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    return i.m = e, i.c = t, i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/public/assets/scripts/", i(i.s = 4)
}([function(e, t, i) {
    "use strict";
    var s = function(e) {
            return function(e) {
                return !!e && "object" == typeof e
            }(e) && ! function(e) {
                var t = Object.prototype.toString.call(e);
                return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                    return e.$$typeof === n
                }(e)
            }(e)
        },
        n = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

    function a(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? l((i = e, Array.isArray(i) ? [] : {}), e, t) : e;
        var i
    }

    function r(e, t, i) {
        return e.concat(t).map((function(e) {
            return a(e, i)
        }))
    }

    function o(e) {
        return Object.keys(e).concat(function(e) {
            return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
                return e.propertyIsEnumerable(t)
            })) : []
        }(e))
    }

    function l(e, t, i) {
        (i = i || {}).arrayMerge = i.arrayMerge || r, i.isMergeableObject = i.isMergeableObject || s, i.cloneUnlessOtherwiseSpecified = a;
        var n = Array.isArray(t);
        return n === Array.isArray(e) ? n ? i.arrayMerge(e, t, i) : function(e, t, i) {
            var s = {};
            return i.isMergeableObject(e) && o(e).forEach((function(t) {
                s[t] = a(e[t], i)
            })), o(t).forEach((function(n) {
                (function(e, t) {
                    try {
                        return t in e && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    } catch (e) {
                        return !1
                    }
                })(e, n) || (i.isMergeableObject(t[n]) && e[n] ? s[n] = function(e, t) {
                    if (!t.customMerge) return l;
                    var i = t.customMerge(e);
                    return "function" == typeof i ? i : l
                }(n, i)(e[n], t[n], i) : s[n] = a(t[n], i))
            })), s
        }(e, t, i) : a(t, i)
    }
    l.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce((function(e, i) {
            return l(e, i, t)
        }), {})
    };
    var c = l;
    e.exports = c
}, function(e, t, i) {
    "use strict";
    (function(e, s) {
        var n, a = i(3);
        n = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : s;
        var r = Object(a.a)(n);
        t.a = r
    }).call(this, i(5), i(6)(e))
}, function(e, t, i) {
    e.exports = function(e) {
        var t = {};

        function i(s) {
            if (t[s]) return t[s].exports;
            var n = t[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        return i.m = e, i.c = t, i.d = function(e, t, s) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: s
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var s = Object.create(null);
            if (i.r(s), Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var n in e) i.d(s, n, function(t) {
                    return e[t]
                }.bind(null, n));
            return s
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "", i(i.s = 1)
    }([function(e, t) {
        e.exports = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        }
    }, function(e, t, i) {
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var n = i(2),
            a = i(8),
            r = i(0),
            o = function() {
                function e(t, i) {
                    var s = i.location,
                        n = void 0 === s ? 0 : s,
                        r = i.distance,
                        o = void 0 === r ? 100 : r,
                        l = i.threshold,
                        c = void 0 === l ? .6 : l,
                        d = i.maxPatternLength,
                        u = void 0 === d ? 32 : d,
                        p = i.caseSensitive,
                        h = void 0 !== p && p,
                        m = i.tokenSeparator,
                        f = void 0 === m ? / +/g : m,
                        v = i.findAllMatches,
                        g = void 0 !== v && v,
                        b = i.minMatchCharLength,
                        y = void 0 === b ? 1 : b,
                        w = i.id,
                        E = void 0 === w ? null : w,
                        x = i.keys,
                        S = void 0 === x ? [] : x,
                        C = i.shouldSort,
                        T = void 0 === C || C,
                        _ = i.getFn,
                        M = void 0 === _ ? a : _,
                        $ = i.sortFn,
                        I = void 0 === $ ? function(e, t) {
                            return e.score - t.score
                        } : $,
                        O = i.tokenize,
                        L = void 0 !== O && O,
                        P = i.matchAllTokens,
                        k = void 0 !== P && P,
                        A = i.includeMatches,
                        D = void 0 !== A && A,
                        z = i.includeScore,
                        N = void 0 !== z && z,
                        j = i.verbose,
                        F = void 0 !== j && j;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.options = {
                        location: n,
                        distance: o,
                        threshold: c,
                        maxPatternLength: u,
                        isCaseSensitive: h,
                        tokenSeparator: f,
                        findAllMatches: g,
                        minMatchCharLength: y,
                        id: E,
                        keys: S,
                        includeMatches: D,
                        includeScore: N,
                        shouldSort: T,
                        getFn: M,
                        sortFn: I,
                        verbose: F,
                        tokenize: L,
                        matchAllTokens: k
                    }, this.setCollection(t)
                }
                var t;
                return (t = [{
                    key: "setCollection",
                    value: function(e) {
                        return this.list = e, e
                    }
                }, {
                    key: "search",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            limit: !1
                        };
                        this._log('---------\nSearch pattern: "'.concat(e, '"'));
                        var i = this._prepareSearchers(e),
                            s = i.tokenSearchers,
                            n = i.fullSearcher,
                            a = this._search(s, n),
                            r = a.weights,
                            o = a.results;
                        return this._computeScore(r, o), this.options.shouldSort && this._sort(o), t.limit && "number" == typeof t.limit && (o = o.slice(0, t.limit)), this._format(o)
                    }
                }, {
                    key: "_prepareSearchers",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = [];
                        if (this.options.tokenize)
                            for (var i = e.split(this.options.tokenSeparator), s = 0, a = i.length; s < a; s += 1) t.push(new n(i[s], this.options));
                        return {
                            tokenSearchers: t,
                            fullSearcher: new n(e, this.options)
                        }
                    }
                }, {
                    key: "_search",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            i = this.list,
                            s = {},
                            n = [];
                        if ("string" == typeof i[0]) {
                            for (var a = 0, r = i.length; a < r; a += 1) this._analyze({
                                key: "",
                                value: i[a],
                                record: a,
                                index: a
                            }, {
                                resultMap: s,
                                results: n,
                                tokenSearchers: e,
                                fullSearcher: t
                            });
                            return {
                                weights: null,
                                results: n
                            }
                        }
                        for (var o = {}, l = 0, c = i.length; l < c; l += 1)
                            for (var d = i[l], u = 0, p = this.options.keys.length; u < p; u += 1) {
                                var h = this.options.keys[u];
                                if ("string" != typeof h) {
                                    if (o[h.name] = {
                                            weight: 1 - h.weight || 1
                                        }, h.weight <= 0 || h.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
                                    h = h.name
                                } else o[h] = {
                                    weight: 1
                                };
                                this._analyze({
                                    key: h,
                                    value: this.options.getFn(d, h),
                                    record: d,
                                    index: l
                                }, {
                                    resultMap: s,
                                    results: n,
                                    tokenSearchers: e,
                                    fullSearcher: t
                                })
                            }
                        return {
                            weights: o,
                            results: n
                        }
                    }
                }, {
                    key: "_analyze",
                    value: function(e, t) {
                        var i = e.key,
                            s = e.arrayIndex,
                            n = void 0 === s ? -1 : s,
                            a = e.value,
                            o = e.record,
                            l = e.index,
                            c = t.tokenSearchers,
                            d = void 0 === c ? [] : c,
                            u = t.fullSearcher,
                            p = void 0 === u ? [] : u,
                            h = t.resultMap,
                            m = void 0 === h ? {} : h,
                            f = t.results,
                            v = void 0 === f ? [] : f;
                        if (null != a) {
                            var g = !1,
                                b = -1,
                                y = 0;
                            if ("string" == typeof a) {
                                this._log("\nKey: ".concat("" === i ? "-" : i));
                                var w = p.search(a);
                                if (this._log('Full text: "'.concat(a, '", score: ').concat(w.score)), this.options.tokenize) {
                                    for (var E = a.split(this.options.tokenSeparator), x = [], S = 0; S < d.length; S += 1) {
                                        var C = d[S];
                                        this._log('\nPattern: "'.concat(C.pattern, '"'));
                                        for (var T = !1, _ = 0; _ < E.length; _ += 1) {
                                            var M = E[_],
                                                $ = C.search(M),
                                                I = {};
                                            $.isMatch ? (I[M] = $.score, g = !0, T = !0, x.push($.score)) : (I[M] = 1, this.options.matchAllTokens || x.push(1)), this._log('Token: "'.concat(M, '", score: ').concat(I[M]))
                                        }
                                        T && (y += 1)
                                    }
                                    b = x[0];
                                    for (var O = x.length, L = 1; L < O; L += 1) b += x[L];
                                    b /= O, this._log("Token score average:", b)
                                }
                                var P = w.score;
                                b > -1 && (P = (P + b) / 2), this._log("Score average:", P);
                                var k = !this.options.tokenize || !this.options.matchAllTokens || y >= d.length;
                                if (this._log("\nCheck Matches: ".concat(k)), (g || w.isMatch) && k) {
                                    var A = m[l];
                                    A ? A.output.push({
                                        key: i,
                                        arrayIndex: n,
                                        value: a,
                                        score: P,
                                        matchedIndices: w.matchedIndices
                                    }) : (m[l] = {
                                        item: o,
                                        output: [{
                                            key: i,
                                            arrayIndex: n,
                                            value: a,
                                            score: P,
                                            matchedIndices: w.matchedIndices
                                        }]
                                    }, v.push(m[l]))
                                }
                            } else if (r(a))
                                for (var D = 0, z = a.length; D < z; D += 1) this._analyze({
                                    key: i,
                                    arrayIndex: D,
                                    value: a[D],
                                    record: o,
                                    index: l
                                }, {
                                    resultMap: m,
                                    results: v,
                                    tokenSearchers: d,
                                    fullSearcher: p
                                })
                        }
                    }
                }, {
                    key: "_computeScore",
                    value: function(e, t) {
                        this._log("\n\nComputing score:\n");
                        for (var i = 0, s = t.length; i < s; i += 1) {
                            for (var n = t[i].output, a = n.length, r = 1, o = 1, l = 0; l < a; l += 1) {
                                var c = e ? e[n[l].key].weight : 1,
                                    d = (1 === c ? n[l].score : n[l].score || .001) * c;
                                1 !== c ? o = Math.min(o, d) : (n[l].nScore = d, r *= d)
                            }
                            t[i].score = 1 === o ? r : o, this._log(t[i])
                        }
                    }
                }, {
                    key: "_sort",
                    value: function(e) {
                        this._log("\n\nSorting...."), e.sort(this.options.sortFn)
                    }
                }, {
                    key: "_format",
                    value: function(e) {
                        var t = [];
                        if (this.options.verbose) {
                            var i = [];
                            this._log("\n\nOutput:\n\n", JSON.stringify(e, (function(e, t) {
                                if ("object" === s(t) && null !== t) {
                                    if (-1 !== i.indexOf(t)) return;
                                    i.push(t)
                                }
                                return t
                            }))), i = null
                        }
                        var n = [];
                        this.options.includeMatches && n.push((function(e, t) {
                            var i = e.output;
                            t.matches = [];
                            for (var s = 0, n = i.length; s < n; s += 1) {
                                var a = i[s];
                                if (0 !== a.matchedIndices.length) {
                                    var r = {
                                        indices: a.matchedIndices,
                                        value: a.value
                                    };
                                    a.key && (r.key = a.key), a.hasOwnProperty("arrayIndex") && a.arrayIndex > -1 && (r.arrayIndex = a.arrayIndex), t.matches.push(r)
                                }
                            }
                        })), this.options.includeScore && n.push((function(e, t) {
                            t.score = e.score
                        }));
                        for (var a = 0, r = e.length; a < r; a += 1) {
                            var o = e[a];
                            if (this.options.id && (o.item = this.options.getFn(o.item, this.options.id)[0]), n.length) {
                                for (var l = {
                                        item: o.item
                                    }, c = 0, d = n.length; c < d; c += 1) n[c](o, l);
                                t.push(l)
                            } else t.push(o.item)
                        }
                        return t
                    }
                }, {
                    key: "_log",
                    value: function() {
                        var e;
                        this.options.verbose && (e = console).log.apply(e, arguments)
                    }
                }]) && function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }(e.prototype, t), e
            }();
        e.exports = o
    }, function(e, t, i) {
        var s = i(3),
            n = i(4),
            a = i(7),
            r = function() {
                function e(t, i) {
                    var s = i.location,
                        n = void 0 === s ? 0 : s,
                        r = i.distance,
                        o = void 0 === r ? 100 : r,
                        l = i.threshold,
                        c = void 0 === l ? .6 : l,
                        d = i.maxPatternLength,
                        u = void 0 === d ? 32 : d,
                        p = i.isCaseSensitive,
                        h = void 0 !== p && p,
                        m = i.tokenSeparator,
                        f = void 0 === m ? / +/g : m,
                        v = i.findAllMatches,
                        g = void 0 !== v && v,
                        b = i.minMatchCharLength,
                        y = void 0 === b ? 1 : b;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.options = {
                        location: n,
                        distance: o,
                        threshold: c,
                        maxPatternLength: u,
                        isCaseSensitive: h,
                        tokenSeparator: f,
                        findAllMatches: g,
                        minMatchCharLength: y
                    }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern))
                }
                var t;
                return (t = [{
                    key: "search",
                    value: function(e) {
                        if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
                            isMatch: !0,
                            score: 0,
                            matchedIndices: [
                                [0, e.length - 1]
                            ]
                        };
                        var t = this.options,
                            i = t.maxPatternLength,
                            a = t.tokenSeparator;
                        if (this.pattern.length > i) return s(e, this.pattern, a);
                        var r = this.options,
                            o = r.location,
                            l = r.distance,
                            c = r.threshold,
                            d = r.findAllMatches,
                            u = r.minMatchCharLength;
                        return n(e, this.pattern, this.patternAlphabet, {
                            location: o,
                            distance: l,
                            threshold: c,
                            findAllMatches: d,
                            minMatchCharLength: u
                        })
                    }
                }]) && function(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var s = t[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                    }
                }(e.prototype, t), e
            }();
        e.exports = r
    }, function(e, t) {
        var i = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
        e.exports = function(e, t) {
            var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
                n = new RegExp(t.replace(i, "\\$&").replace(s, "|")),
                a = e.match(n),
                r = !!a,
                o = [];
            if (r)
                for (var l = 0, c = a.length; l < c; l += 1) {
                    var d = a[l];
                    o.push([e.indexOf(d), d.length - 1])
                }
            return {
                score: r ? .5 : 1,
                isMatch: r,
                matchedIndices: o
            }
        }
    }, function(e, t, i) {
        var s = i(5),
            n = i(6);
        e.exports = function(e, t, i, a) {
            for (var r = a.location, o = void 0 === r ? 0 : r, l = a.distance, c = void 0 === l ? 100 : l, d = a.threshold, u = void 0 === d ? .6 : d, p = a.findAllMatches, h = void 0 !== p && p, m = a.minMatchCharLength, f = void 0 === m ? 1 : m, v = o, g = e.length, b = u, y = e.indexOf(t, v), w = t.length, E = [], x = 0; x < g; x += 1) E[x] = 0;
            if (-1 !== y) {
                var S = s(t, {
                    errors: 0,
                    currentLocation: y,
                    expectedLocation: v,
                    distance: c
                });
                if (b = Math.min(S, b), -1 !== (y = e.lastIndexOf(t, v + w))) {
                    var C = s(t, {
                        errors: 0,
                        currentLocation: y,
                        expectedLocation: v,
                        distance: c
                    });
                    b = Math.min(C, b)
                }
            }
            y = -1;
            for (var T = [], _ = 1, M = w + g, $ = 1 << w - 1, I = 0; I < w; I += 1) {
                for (var O = 0, L = M; O < L;) s(t, {
                    errors: I,
                    currentLocation: v + L,
                    expectedLocation: v,
                    distance: c
                }) <= b ? O = L : M = L, L = Math.floor((M - O) / 2 + O);
                M = L;
                var P = Math.max(1, v - L + 1),
                    k = h ? g : Math.min(v + L, g) + w,
                    A = Array(k + 2);
                A[k + 1] = (1 << I) - 1;
                for (var D = k; D >= P; D -= 1) {
                    var z = D - 1,
                        N = i[e.charAt(z)];
                    if (N && (E[z] = 1), A[D] = (A[D + 1] << 1 | 1) & N, 0 !== I && (A[D] |= (T[D + 1] | T[D]) << 1 | 1 | T[D + 1]), A[D] & $ && (_ = s(t, {
                            errors: I,
                            currentLocation: z,
                            expectedLocation: v,
                            distance: c
                        })) <= b) {
                        if (b = _, (y = z) <= v) break;
                        P = Math.max(1, 2 * v - y)
                    }
                }
                if (s(t, {
                        errors: I + 1,
                        currentLocation: v,
                        expectedLocation: v,
                        distance: c
                    }) > b) break;
                T = A
            }
            return {
                isMatch: y >= 0,
                score: 0 === _ ? .001 : _,
                matchedIndices: n(E, f)
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            var i = t.errors,
                s = void 0 === i ? 0 : i,
                n = t.currentLocation,
                a = void 0 === n ? 0 : n,
                r = t.expectedLocation,
                o = void 0 === r ? 0 : r,
                l = t.distance,
                c = void 0 === l ? 100 : l,
                d = s / e.length,
                u = Math.abs(o - a);
            return c ? d + u / c : u ? 1 : d
        }
    }, function(e, t) {
        e.exports = function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], s = -1, n = -1, a = 0, r = e.length; a < r; a += 1) {
                var o = e[a];
                o && -1 === s ? s = a : o || -1 === s || ((n = a - 1) - s + 1 >= t && i.push([s, n]), s = -1)
            }
            return e[a - 1] && a - s >= t && i.push([s, a - 1]), i
        }
    }, function(e, t) {
        e.exports = function(e) {
            for (var t = {}, i = e.length, s = 0; s < i; s += 1) t[e.charAt(s)] = 0;
            for (var n = 0; n < i; n += 1) t[e.charAt(n)] |= 1 << i - n - 1;
            return t
        }
    }, function(e, t, i) {
        var s = i(0);
        e.exports = function(e, t) {
            return function e(t, i, n) {
                if (i) {
                    var a = i.indexOf("."),
                        r = i,
                        o = null; - 1 !== a && (r = i.slice(0, a), o = i.slice(a + 1));
                    var l = t[r];
                    if (null != l)
                        if (o || "string" != typeof l && "number" != typeof l)
                            if (s(l))
                                for (var c = 0, d = l.length; c < d; c += 1) e(l[c], o, n);
                            else o && e(l, o, n);
                    else n.push(l.toString())
                } else n.push(t);
                return n
            }(e, t, [])
        }
    }])
}, function(e, t, i) {
    "use strict";

    function s(e) {
        var t, i = e.Symbol;
        return "function" == typeof i ? i.observable ? t = i.observable : (t = i("observable"), i.observable = t) : t = "@@observable", t
    }
    i.d(t, "a", (function() {
        return s
    }))
}, function(e, t, i) {
    e.exports = i(7)
}, function(e, t) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (i = window)
    }
    e.exports = i
}, function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function(e, t, i) {
    "use strict";
    i.r(t);
    var s = i(2),
        n = i.n(s),
        a = i(0),
        r = i.n(a),
        o = i(1),
        l = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        c = {
            INIT: "@@redux/INIT" + l(),
            REPLACE: "@@redux/REPLACE" + l(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + l()
            }
        };

    function d(e) {
        if ("object" != typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
    }

    function u(e, t, i) {
        var s;
        if ("function" == typeof t && "function" == typeof i || "function" == typeof i && "function" == typeof arguments[3]) throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
        if ("function" == typeof t && void 0 === i && (i = t, t = void 0), void 0 !== i) {
            if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
            return i(u)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var n = e,
            a = t,
            r = [],
            l = r,
            p = !1;

        function h() {
            l === r && (l = r.slice())
        }

        function m() {
            if (p) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return a
        }

        function f(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (p) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return h(), l.push(e),
                function() {
                    if (t) {
                        if (p) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                        t = !1, h();
                        var i = l.indexOf(e);
                        l.splice(i, 1)
                    }
                }
        }

        function v(e) {
            if (!d(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (p) throw new Error("Reducers may not dispatch actions.");
            try {
                p = !0, a = n(a, e)
            } finally {
                p = !1
            }
            for (var t = r = l, i = 0; i < t.length; i++)(0, t[i])();
            return e
        }
        return v({
            type: c.INIT
        }), (s = {
            dispatch: v,
            subscribe: f,
            getState: m,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                n = e, v({
                    type: c.REPLACE
                })
            }
        })[o.a] = function() {
            var e, t = f;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e || null === e) throw new TypeError("Expected the observer to be an object.");

                    function i() {
                        e.next && e.next(m())
                    }
                    return i(), {
                        unsubscribe: t(i)
                    }
                }
            })[o.a] = function() {
                return this
            }, e
        }, s
    }

    function p(e, t) {
        var i = t && t.type;
        return "Given " + (i && 'action "' + String(i) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
    }
    var h, m = [],
        f = [],
        v = [],
        g = {
            loading: !1
        },
        b = function(e) {
            return Array.from({
                length: e
            }, (function() {
                return (0, 36, Math.floor(36 * Math.random() + 0)).toString(36)
            })).join("")
        },
        y = function(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        },
        w = function(e, t) {
            return null != t && y(t) === e
        },
        E = function(e) {
            return "string" != typeof e ? e : e.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
        },
        x = (h = document.createElement("div"), function(e) {
            var t = e.trim();
            h.innerHTML = t;
            for (var i = h.children[0]; h.firstChild;) h.removeChild(h.firstChild);
            return i
        }),
        S = function(e, t) {
            return e.score - t.score
        },
        C = function(e) {
            return JSON.parse(JSON.stringify(e))
        },
        T = function(e) {
            for (var t = Object.keys(e), i = {}, s = 0; s < t.length; s++) {
                var n = t[s];
                "function" == typeof e[n] && (i[n] = e[n])
            }
            var a, r = Object.keys(i);
            try {
                ! function(e) {
                    Object.keys(e).forEach((function(t) {
                        var i = e[t];
                        if (void 0 === i(void 0, {
                                type: c.INIT
                            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === i(void 0, {
                                type: c.PROBE_UNKNOWN_ACTION()
                            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + c.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    }))
                }(i)
            } catch (e) {
                a = e
            }
            return function(e, t) {
                if (void 0 === e && (e = {}), a) throw a;
                for (var s = !1, n = {}, o = 0; o < r.length; o++) {
                    var l = r[o],
                        c = i[l],
                        d = e[l],
                        u = c(d, t);
                    if (void 0 === u) {
                        var h = p(l, t);
                        throw new Error(h)
                    }
                    n[l] = u, s = s || u !== d
                }
                return s ? n : e
            }
        }({
            items: function(e, t) {
                switch (void 0 === e && (e = m), t.type) {
                    case "ADD_ITEM":
                        return [].concat(e, [{
                            id: t.id,
                            choiceId: t.choiceId,
                            groupId: t.groupId,
                            value: t.value,
                            label: t.label,
                            active: !0,
                            highlighted: !1,
                            customProperties: t.customProperties,
                            placeholder: t.placeholder || !1,
                            keyCode: null
                        }]).map((function(e) {
                            var t = e;
                            return t.highlighted = !1, t
                        }));
                    case "REMOVE_ITEM":
                        return e.map((function(e) {
                            var i = e;
                            return i.id === t.id && (i.active = !1), i
                        }));
                    case "HIGHLIGHT_ITEM":
                        return e.map((function(e) {
                            var i = e;
                            return i.id === t.id && (i.highlighted = t.highlighted), i
                        }));
                    default:
                        return e
                }
            },
            groups: function(e, t) {
                switch (void 0 === e && (e = f), t.type) {
                    case "ADD_GROUP":
                        return [].concat(e, [{
                            id: t.id,
                            value: t.value,
                            active: t.active,
                            disabled: t.disabled
                        }]);
                    case "CLEAR_CHOICES":
                        return [];
                    default:
                        return e
                }
            },
            choices: function(e, t) {
                switch (void 0 === e && (e = v), t.type) {
                    case "ADD_CHOICE":
                        return [].concat(e, [{
                            id: t.id,
                            elementId: t.elementId,
                            groupId: t.groupId,
                            value: t.value,
                            label: t.label || t.value,
                            disabled: t.disabled || !1,
                            selected: !1,
                            active: !0,
                            score: 9999,
                            customProperties: t.customProperties,
                            placeholder: t.placeholder || !1,
                            keyCode: null
                        }]);
                    case "ADD_ITEM":
                        return t.activateOptions ? e.map((function(e) {
                            var i = e;
                            return i.active = t.active, i
                        })) : t.choiceId > -1 ? e.map((function(e) {
                            var i = e;
                            return i.id === parseInt(t.choiceId, 10) && (i.selected = !0), i
                        })) : e;
                    case "REMOVE_ITEM":
                        return t.choiceId > -1 ? e.map((function(e) {
                            var i = e;
                            return i.id === parseInt(t.choiceId, 10) && (i.selected = !1), i
                        })) : e;
                    case "FILTER_CHOICES":
                        return e.map((function(e) {
                            var i = e;
                            return i.active = t.results.some((function(e) {
                                var t = e.item,
                                    s = e.score;
                                return t.id === i.id && (i.score = s, !0)
                            })), i
                        }));
                    case "ACTIVATE_CHOICES":
                        return e.map((function(e) {
                            var i = e;
                            return i.active = t.active, i
                        }));
                    case "CLEAR_CHOICES":
                        return v;
                    default:
                        return e
                }
            },
            general: function(e, t) {
                return "SET_IS_LOADING" === (void 0 === e && (e = g), t.type) ? {
                    loading: t.isLoading
                } : e
            }
        }),
        _ = function(e, t) {
            var i = e;
            if ("CLEAR_ALL" === t.type) i = void 0;
            else if ("RESET_TO" === t.type) return C(t.state);
            return T(i, t)
        };

    function M(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var $ = function() {
        function e() {
            this._store = u(_, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        }
        var t, i, s = e.prototype;
        return s.subscribe = function(e) {
            this._store.subscribe(e)
        }, s.dispatch = function(e) {
            this._store.dispatch(e)
        }, s.isLoading = function() {
            return this.state.general.loading
        }, s.getChoiceById = function(e) {
            return this.activeChoices.find((function(t) {
                return t.id === parseInt(e, 10)
            }))
        }, s.getGroupById = function(e) {
            return this.groups.find((function(t) {
                return t.id === e
            }))
        }, t = e, (i = [{
            key: "state",
            get: function() {
                return this._store.getState()
            }
        }, {
            key: "items",
            get: function() {
                return this.state.items
            }
        }, {
            key: "activeItems",
            get: function() {
                return this.items.filter((function(e) {
                    return !0 === e.active
                }))
            }
        }, {
            key: "highlightedActiveItems",
            get: function() {
                return this.items.filter((function(e) {
                    return e.active && e.highlighted
                }))
            }
        }, {
            key: "choices",
            get: function() {
                return this.state.choices
            }
        }, {
            key: "activeChoices",
            get: function() {
                return this.choices.filter((function(e) {
                    return !0 === e.active
                }))
            }
        }, {
            key: "selectableChoices",
            get: function() {
                return this.choices.filter((function(e) {
                    return !0 !== e.disabled
                }))
            }
        }, {
            key: "searchableChoices",
            get: function() {
                return this.selectableChoices.filter((function(e) {
                    return !0 !== e.placeholder
                }))
            }
        }, {
            key: "placeholderChoice",
            get: function() {
                return [].concat(this.choices).reverse().find((function(e) {
                    return !0 === e.placeholder
                }))
            }
        }, {
            key: "groups",
            get: function() {
                return this.state.groups
            }
        }, {
            key: "activeGroups",
            get: function() {
                var e = this.groups,
                    t = this.choices;
                return e.filter((function(e) {
                    var i = !0 === e.active && !1 === e.disabled,
                        s = t.some((function(e) {
                            return !0 === e.active && !1 === e.disabled
                        }));
                    return i && s
                }), [])
            }
        }]) && M(t.prototype, i), e
    }();

    function I(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var O = function() {
            function e(e) {
                var t = e.element,
                    i = e.type,
                    s = e.classNames;
                this.element = t, this.classNames = s, this.type = i, this.isActive = !1
            }
            var t, i, s = e.prototype;
            return s.getChild = function(e) {
                return this.element.querySelector(e)
            }, s.show = function() {
                return this.element.classList.add(this.classNames.activeState), this.element.setAttribute("aria-expanded", "true"), this.isActive = !0, this
            }, s.hide = function() {
                return this.element.classList.remove(this.classNames.activeState), this.element.setAttribute("aria-expanded", "false"), this.isActive = !1, this
            }, t = e, (i = [{
                key: "distanceFromTopWindow",
                get: function() {
                    return this.element.getBoundingClientRect().bottom
                }
            }]) && I(t.prototype, i), e
        }(),
        L = {
            items: [],
            choices: [],
            silent: !1,
            renderChoiceLimit: -1,
            maxItemCount: -1,
            addItems: !0,
            addItemFilter: null,
            removeItems: !0,
            removeItemButton: !1,
            editItems: !1,
            duplicateItemsAllowed: !0,
            delimiter: ",",
            paste: !0,
            searchEnabled: !0,
            searchChoices: !0,
            searchFloor: 1,
            searchResultLimit: 4,
            searchFields: ["label", "value"],
            position: "auto",
            resetScrollPosition: !0,
            shouldSort: !0,
            shouldSortItems: !1,
            sorter: function(e, t) {
                var i = e.value,
                    s = e.label,
                    n = void 0 === s ? i : s,
                    a = t.value,
                    r = t.label,
                    o = void 0 === r ? a : r;
                return n.localeCompare(o, [], {
                    sensitivity: "base",
                    ignorePunctuation: !0,
                    numeric: !0
                })
            },
            placeholder: !0,
            placeholderValue: null,
            searchPlaceholderValue: null,
            prependValue: null,
            appendValue: null,
            renderSelectedChoices: "auto",
            loadingText: "Loading...",
            noResultsText: "No results found",
            noChoicesText: "No choices to choose from",
            itemSelectText: "Press to select",
            uniqueItemText: "Only unique values can be added",
            customAddItemText: "Only values matching specific conditions can be added",
            addItemText: function(e) {
                return 'Press Enter to add <b>"' + E(e) + '"</b>'
            },
            maxItemText: function(e) {
                return "Only " + e + " values can be added"
            },
            valueComparer: function(e, t) {
                return e === t
            },
            fuseOptions: {
                includeScore: !0
            },
            callbackOnInit: null,
            callbackOnCreateTemplates: null,
            classNames: {
                containerOuter: "choices",
                containerInner: "choices__inner",
                input: "choices__input",
                inputCloned: "choices__input--cloned",
                list: "choices__list",
                listItems: "choices__list--multiple",
                listSingle: "choices__list--single",
                listDropdown: "choices__list--dropdown",
                item: "choices__item",
                itemSelectable: "choices__item--selectable",
                itemDisabled: "choices__item--disabled",
                itemChoice: "choices__item--choice",
                placeholder: "choices__placeholder",
                group: "choices__group",
                groupHeading: "choices__heading",
                button: "choices__button",
                activeState: "is-active",
                focusState: "is-focused",
                openState: "is-open",
                disabledState: "is-disabled",
                highlightedState: "is-highlighted",
                selectedState: "is-selected",
                flippedState: "is-flipped",
                loadingState: "is-loading",
                noResults: "has-no-results",
                noChoices: "has-no-choices"
            }
        },
        P = "removeItem",
        k = "highlightItem",
        A = "text",
        D = "select-one",
        z = "select-multiple",
        N = function() {
            function e(e) {
                var t = e.element,
                    i = e.type,
                    s = e.classNames,
                    n = e.position;
                this.element = t, this.classNames = s, this.type = i, this.position = n, this.isOpen = !1, this.isFlipped = !1, this.isFocussed = !1, this.isDisabled = !1, this.isLoading = !1, this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
            }
            var t = e.prototype;
            return t.addEventListeners = function() {
                this.element.addEventListener("focus", this._onFocus), this.element.addEventListener("blur", this._onBlur)
            }, t.removeEventListeners = function() {
                this.element.removeEventListener("focus", this._onFocus), this.element.removeEventListener("blur", this._onBlur)
            }, t.shouldFlip = function(e) {
                if ("number" != typeof e) return !1;
                var t = !1;
                return "auto" === this.position ? t = !window.matchMedia("(min-height: " + (e + 1) + "px)").matches : "top" === this.position && (t = !0), t
            }, t.setActiveDescendant = function(e) {
                this.element.setAttribute("aria-activedescendant", e)
            }, t.removeActiveDescendant = function() {
                this.element.removeAttribute("aria-activedescendant")
            }, t.open = function(e) {
                this.element.classList.add(this.classNames.openState), this.element.setAttribute("aria-expanded", "true"), this.isOpen = !0, this.shouldFlip(e) && (this.element.classList.add(this.classNames.flippedState), this.isFlipped = !0)
            }, t.close = function() {
                this.element.classList.remove(this.classNames.openState), this.element.setAttribute("aria-expanded", "false"), this.removeActiveDescendant(), this.isOpen = !1, this.isFlipped && (this.element.classList.remove(this.classNames.flippedState), this.isFlipped = !1)
            }, t.focus = function() {
                this.isFocussed || this.element.focus()
            }, t.addFocusState = function() {
                this.element.classList.add(this.classNames.focusState)
            }, t.removeFocusState = function() {
                this.element.classList.remove(this.classNames.focusState)
            }, t.enable = function() {
                this.element.classList.remove(this.classNames.disabledState), this.element.removeAttribute("aria-disabled"), this.type === D && this.element.setAttribute("tabindex", "0"), this.isDisabled = !1
            }, t.disable = function() {
                this.element.classList.add(this.classNames.disabledState), this.element.setAttribute("aria-disabled", "true"), this.type === D && this.element.setAttribute("tabindex", "-1"), this.isDisabled = !0
            }, t.wrap = function(e) {
                ! function(e, t) {
                    void 0 === t && (t = document.createElement("div")), e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t.appendChild(e)
                }(e, this.element)
            }, t.unwrap = function(e) {
                this.element.parentNode.insertBefore(e, this.element), this.element.parentNode.removeChild(this.element)
            }, t.addLoadingState = function() {
                this.element.classList.add(this.classNames.loadingState), this.element.setAttribute("aria-busy", "true"), this.isLoading = !0
            }, t.removeLoadingState = function() {
                this.element.classList.remove(this.classNames.loadingState), this.element.removeAttribute("aria-busy"), this.isLoading = !1
            }, t._onFocus = function() {
                this.isFocussed = !0
            }, t._onBlur = function() {
                this.isFocussed = !1
            }, e
        }();

    function j(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var F = function() {
            function e(e) {
                var t = e.element,
                    i = e.type,
                    s = e.classNames,
                    n = e.preventPaste;
                this.element = t, this.type = i, this.classNames = s, this.preventPaste = n, this.isFocussed = this.element === document.activeElement, this.isDisabled = t.disabled, this._onPaste = this._onPaste.bind(this), this._onInput = this._onInput.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this)
            }
            var t, i, s = e.prototype;
            return s.addEventListeners = function() {
                this.element.addEventListener("paste", this._onPaste), this.element.addEventListener("input", this._onInput, {
                    passive: !0
                }), this.element.addEventListener("focus", this._onFocus, {
                    passive: !0
                }), this.element.addEventListener("blur", this._onBlur, {
                    passive: !0
                })
            }, s.removeEventListeners = function() {
                this.element.removeEventListener("input", this._onInput, {
                    passive: !0
                }), this.element.removeEventListener("paste", this._onPaste), this.element.removeEventListener("focus", this._onFocus, {
                    passive: !0
                }), this.element.removeEventListener("blur", this._onBlur, {
                    passive: !0
                })
            }, s.enable = function() {
                this.element.removeAttribute("disabled"), this.isDisabled = !1
            }, s.disable = function() {
                this.element.setAttribute("disabled", ""), this.isDisabled = !0
            }, s.focus = function() {
                this.isFocussed || this.element.focus()
            }, s.blur = function() {
                this.isFocussed && this.element.blur()
            }, s.clear = function(e) {
                return void 0 === e && (e = !0), this.element.value && (this.element.value = ""), e && this.setWidth(), this
            }, s.setWidth = function() {
                var e = this.element,
                    t = e.style,
                    i = e.value,
                    s = e.placeholder;
                t.minWidth = s.length + 1 + "ch", t.width = i.length + 1 + "ch"
            }, s.setActiveDescendant = function(e) {
                this.element.setAttribute("aria-activedescendant", e)
            }, s.removeActiveDescendant = function() {
                this.element.removeAttribute("aria-activedescendant")
            }, s._onInput = function() {
                this.type !== D && this.setWidth()
            }, s._onPaste = function(e) {
                this.preventPaste && e.preventDefault()
            }, s._onFocus = function() {
                this.isFocussed = !0
            }, s._onBlur = function() {
                this.isFocussed = !1
            }, t = e, (i = [{
                key: "placeholder",
                set: function(e) {
                    this.element.placeholder = e
                }
            }, {
                key: "value",
                get: function() {
                    return E(this.element.value)
                },
                set: function(e) {
                    this.element.value = e
                }
            }]) && j(t.prototype, i), e
        }(),
        H = function() {
            function e(e) {
                var t = e.element;
                this.element = t, this.scrollPos = this.element.scrollTop, this.height = this.element.offsetHeight
            }
            var t = e.prototype;
            return t.clear = function() {
                this.element.innerHTML = ""
            }, t.append = function(e) {
                this.element.appendChild(e)
            }, t.getChild = function(e) {
                return this.element.querySelector(e)
            }, t.hasChildren = function() {
                return this.element.hasChildNodes()
            }, t.scrollToTop = function() {
                this.element.scrollTop = 0
            }, t.scrollToChildElement = function(e, t) {
                var i = this;
                if (e) {
                    var s = this.element.offsetHeight,
                        n = this.element.scrollTop + s,
                        a = e.offsetHeight,
                        r = e.offsetTop + a,
                        o = t > 0 ? this.element.scrollTop + r - n : e.offsetTop;
                    requestAnimationFrame((function() {
                        i._animateScroll(o, t)
                    }))
                }
            }, t._scrollDown = function(e, t, i) {
                var s = (i - e) / t,
                    n = s > 1 ? s : 1;
                this.element.scrollTop = e + n
            }, t._scrollUp = function(e, t, i) {
                var s = (e - i) / t,
                    n = s > 1 ? s : 1;
                this.element.scrollTop = e - n
            }, t._animateScroll = function(e, t) {
                var i = this,
                    s = this.element.scrollTop,
                    n = !1;
                t > 0 ? (this._scrollDown(s, 4, e), s < e && (n = !0)) : (this._scrollUp(s, 4, e), s > e && (n = !0)), n && requestAnimationFrame((function() {
                    i._animateScroll(e, t)
                }))
            }, e
        }();

    function B(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var G = function() {
        function e(e) {
            var t = e.element,
                i = e.classNames;
            if (this.element = t, this.classNames = i, !(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
            this.isDisabled = !1
        }
        var t, i, s = e.prototype;
        return s.conceal = function() {
            this.element.classList.add(this.classNames.input), this.element.hidden = !0, this.element.tabIndex = -1;
            var e = this.element.getAttribute("style");
            e && this.element.setAttribute("data-choice-orig-style", e), this.element.setAttribute("data-choice", "active")
        }, s.reveal = function() {
            this.element.classList.remove(this.classNames.input), this.element.hidden = !1, this.element.removeAttribute("tabindex");
            var e = this.element.getAttribute("data-choice-orig-style");
            e ? (this.element.removeAttribute("data-choice-orig-style"), this.element.setAttribute("style", e)) : this.element.removeAttribute("style"), this.element.removeAttribute("data-choice"), this.element.value = this.element.value
        }, s.enable = function() {
            this.element.removeAttribute("disabled"), this.element.disabled = !1, this.isDisabled = !1
        }, s.disable = function() {
            this.element.setAttribute("disabled", ""), this.element.disabled = !0, this.isDisabled = !0
        }, s.triggerEvent = function(e, t) {
            ! function(e, t, i) {
                void 0 === i && (i = null);
                var s = new CustomEvent(t, {
                    detail: i,
                    bubbles: !0,
                    cancelable: !0
                });
                e.dispatchEvent(s)
            }(this.element, e, t)
        }, t = e, (i = [{
            key: "isActive",
            get: function() {
                return "active" === this.element.dataset.choice
            }
        }, {
            key: "dir",
            get: function() {
                return this.element.dir
            }
        }, {
            key: "value",
            get: function() {
                return this.element.value
            },
            set: function(e) {
                this.element.value = e
            }
        }]) && B(t.prototype, i), e
    }();

    function R(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var q = function(e) {
        var t, i, s, n;

        function a(t) {
            var i, s = t.element,
                n = t.classNames,
                a = t.delimiter;
            return (i = e.call(this, {
                element: s,
                classNames: n
            }) || this).delimiter = a, i
        }
        return i = e, (t = a).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, s = a, (n = [{
            key: "value",
            get: function() {
                return this.element.value
            },
            set: function(e) {
                var t = e.map((function(e) {
                    return e.value
                })).join(this.delimiter);
                this.element.setAttribute("value", t), this.element.value = t
            }
        }]) && R(s.prototype, n), a
    }(G);

    function V(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var X = function(e) {
            var t, i, s, n;

            function a(t) {
                var i, s = t.element,
                    n = t.classNames,
                    a = t.template;
                return (i = e.call(this, {
                    element: s,
                    classNames: n
                }) || this).template = a, i
            }
            return i = e, (t = a).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i, a.prototype.appendDocFragment = function(e) {
                this.element.innerHTML = "", this.element.appendChild(e)
            }, s = a, (n = [{
                key: "placeholderOption",
                get: function() {
                    return this.element.querySelector('option[value=""]') || this.element.querySelector("option[placeholder]")
                }
            }, {
                key: "optionGroups",
                get: function() {
                    return Array.from(this.element.getElementsByTagName("OPTGROUP"))
                }
            }, {
                key: "options",
                get: function() {
                    return Array.from(this.element.options)
                },
                set: function(e) {
                    var t = this,
                        i = document.createDocumentFragment();
                    e.forEach((function(e) {
                        return s = e, n = t.template(s), void i.appendChild(n);
                        var s, n
                    })), this.appendDocFragment(i)
                }
            }]) && V(s.prototype, n), a
        }(G),
        Y = {
            containerOuter: function(e, t, i, s, n, a) {
                var r = e.containerOuter,
                    o = Object.assign(document.createElement("div"), {
                        className: r
                    });
                return o.dataset.type = a, t && (o.dir = t), s && (o.tabIndex = 0), i && (o.setAttribute("role", n ? "combobox" : "listbox"), n && o.setAttribute("aria-autocomplete", "list")), o.setAttribute("aria-haspopup", "true"), o.setAttribute("aria-expanded", "false"), o
            },
            containerInner: function(e) {
                var t = e.containerInner;
                return Object.assign(document.createElement("div"), {
                    className: t
                })
            },
            itemList: function(e, t) {
                var i = e.list,
                    s = e.listSingle,
                    n = e.listItems;
                return Object.assign(document.createElement("div"), {
                    className: i + " " + (t ? s : n)
                })
            },
            placeholder: function(e, t) {
                var i = e.placeholder;
                return Object.assign(document.createElement("div"), {
                    className: i,
                    innerHTML: t
                })
            },
            item: function(e, t, i) {
                var s = e.item,
                    n = e.button,
                    a = e.highlightedState,
                    r = e.itemSelectable,
                    o = e.placeholder,
                    l = t.id,
                    c = t.value,
                    d = t.label,
                    u = t.customProperties,
                    p = t.active,
                    h = t.disabled,
                    m = t.highlighted,
                    f = t.placeholder,
                    v = Object.assign(document.createElement("div"), {
                        className: s,
                        innerHTML: d
                    });
                if (Object.assign(v.dataset, {
                        item: "",
                        id: l,
                        value: c,
                        customProperties: u
                    }), p && v.setAttribute("aria-selected", "true"), h && v.setAttribute("aria-disabled", "true"), f && v.classList.add(o), v.classList.add(m ? a : r), i) {
                    h && v.classList.remove(r), v.dataset.deletable = "";
                    var g = Object.assign(document.createElement("button"), {
                        type: "button",
                        className: n,
                        innerHTML: "Remove item"
                    });
                    g.setAttribute("aria-label", "Remove item: '" + c + "'"), g.dataset.button = "", v.appendChild(g)
                }
                return v
            },
            choiceList: function(e, t) {
                var i = e.list,
                    s = Object.assign(document.createElement("div"), {
                        className: i
                    });
                return t || s.setAttribute("aria-multiselectable", "true"), s.setAttribute("role", "listbox"), s
            },
            choiceGroup: function(e, t) {
                var i = e.group,
                    s = e.groupHeading,
                    n = e.itemDisabled,
                    a = t.id,
                    r = t.value,
                    o = t.disabled,
                    l = Object.assign(document.createElement("div"), {
                        className: i + " " + (o ? n : "")
                    });
                return l.setAttribute("role", "group"), Object.assign(l.dataset, {
                    group: "",
                    id: a,
                    value: r
                }), o && l.setAttribute("aria-disabled", "true"), l.appendChild(Object.assign(document.createElement("div"), {
                    className: s,
                    innerHTML: r
                })), l
            },
            choice: function(e, t, i) {
                var s = e.item,
                    n = e.itemChoice,
                    a = e.itemSelectable,
                    r = e.selectedState,
                    o = e.itemDisabled,
                    l = e.placeholder,
                    c = t.id,
                    d = t.value,
                    u = t.label,
                    p = t.groupId,
                    h = t.elementId,
                    m = t.disabled,
                    f = t.selected,
                    v = t.placeholder,
                    g = Object.assign(document.createElement("div"), {
                        id: h,
                        innerHTML: u,
                        className: s + " " + n
                    });
                return f && g.classList.add(r), v && g.classList.add(l), g.setAttribute("role", p > 0 ? "treeitem" : "option"), Object.assign(g.dataset, {
                    choice: "",
                    id: c,
                    value: d,
                    selectText: i
                }), m ? (g.classList.add(o), g.dataset.choiceDisabled = "", g.setAttribute("aria-disabled", "true")) : (g.classList.add(a), g.dataset.choiceSelectable = ""), g
            },
            input: function(e, t) {
                var i = e.input,
                    s = e.inputCloned,
                    n = Object.assign(document.createElement("input"), {
                        type: "text",
                        className: i + " " + s,
                        autocomplete: "off",
                        autocapitalize: "off",
                        spellcheck: !1
                    });
                return n.setAttribute("role", "textbox"), n.setAttribute("aria-autocomplete", "list"), n.setAttribute("aria-label", t), n
            },
            dropdown: function(e) {
                var t = e.list,
                    i = e.listDropdown,
                    s = document.createElement("div");
                return s.classList.add(t, i), s.setAttribute("aria-expanded", "false"), s
            },
            notice: function(e, t, i) {
                var s = e.item,
                    n = e.itemChoice,
                    a = e.noResults,
                    r = e.noChoices;
                void 0 === i && (i = "");
                var o = [s, n];
                return "no-choices" === i ? o.push(r) : "no-results" === i && o.push(a), Object.assign(document.createElement("div"), {
                    innerHTML: t,
                    className: o.join(" ")
                })
            },
            option: function(e) {
                var t = e.label,
                    i = e.value,
                    s = e.customProperties,
                    n = e.active,
                    a = e.disabled,
                    r = new Option(t, i, !1, n);
                return s && (r.dataset.customProperties = s), r.disabled = a, r
            }
        },
        W = function(e) {
            return void 0 === e && (e = !0), {
                type: "ACTIVATE_CHOICES",
                active: e
            }
        },
        K = function(e, t) {
            return {
                type: "HIGHLIGHT_ITEM",
                id: e,
                highlighted: t
            }
        },
        U = function(e) {
            return {
                type: "ADD_GROUP",
                value: e.value,
                id: e.id,
                active: e.active,
                disabled: e.disabled
            }
        },
        Q = function(e) {
            return {
                type: "SET_IS_LOADING",
                isLoading: e
            }
        };

    function J(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var Z = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style,
        ee = {},
        te = function() {
            var e, t;

            function i(e, t) {
                var s = this;
                void 0 === e && (e = "[data-choice]"), void 0 === t && (t = {}), this.config = r.a.all([L, i.defaults.options, t], {
                    arrayMerge: function(e, t) {
                        return [].concat(t)
                    }
                });
                var n = function(e, t) {
                    var i = Object.keys(e).sort(),
                        s = Object.keys(t).sort();
                    return i.filter((function(e) {
                        return s.indexOf(e) < 0
                    }))
                }(this.config, L);
                n.length && console.warn("Unknown config option(s) passed", n.join(", "));
                var a = "string" == typeof e ? document.querySelector(e) : e;
                if (!(a instanceof HTMLInputElement || a instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                if (this._isTextElement = a.type === A, this._isSelectOneElement = a.type === D, this._isSelectMultipleElement = a.type === z, this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement, this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled, ["auto", "always"].includes(this.config.renderSelectedChoices) || (this.config.renderSelectedChoices = "auto"), t.addItemFilter && "function" != typeof t.addItemFilter) {
                    var o = t.addItemFilter instanceof RegExp ? t.addItemFilter : new RegExp(t.addItemFilter);
                    this.config.addItemFilter = o.test.bind(o)
                }
                if (this._isTextElement ? this.passedElement = new q({
                        element: a,
                        classNames: this.config.classNames,
                        delimiter: this.config.delimiter
                    }) : this.passedElement = new X({
                        element: a,
                        classNames: this.config.classNames,
                        template: function(e) {
                            return s._templates.option(e)
                        }
                    }), this.initialised = !1, this._store = new $, this._initialState = {}, this._currentState = {}, this._prevState = {}, this._currentValue = "", this._canSearch = this.config.searchEnabled, this._isScrollingOnIe = !1, this._highlightPosition = 0, this._wasTap = !0, this._placeholderValue = this._generatePlaceholderValue(), this._baseId = function(e, t) {
                        var i = e.id || e.name && e.name + "-" + b(2) || b(4);
                        return t + "-" + i.replace(/(:|\.|\[|\]|,)/g, "")
                    }(this.passedElement.element, "choices-"), this._direction = this.passedElement.dir, !this._direction) {
                    var l = window.getComputedStyle(this.passedElement.element).direction;
                    l !== window.getComputedStyle(document.documentElement).direction && (this._direction = l)
                }
                if (this._idNames = {
                        itemChoice: "item-choice"
                    }, this._presetGroups = this.passedElement.optionGroups, this._presetOptions = this.passedElement.options, this._presetChoices = this.config.choices, this._presetItems = this.config.items, this.passedElement.value && (this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter))), this.passedElement.options && this.passedElement.options.forEach((function(e) {
                        s._presetChoices.push({
                            value: e.value,
                            label: e.innerHTML,
                            selected: e.selected,
                            disabled: e.disabled || e.parentNode.disabled,
                            placeholder: "" === e.value || e.hasAttribute("placeholder"),
                            customProperties: e.getAttribute("data-custom-properties")
                        })
                    })), this._render = this._render.bind(this), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyUp = this._onKeyUp.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this), this._onTouchMove = this._onTouchMove.bind(this), this._onTouchEnd = this._onTouchEnd.bind(this), this._onMouseDown = this._onMouseDown.bind(this), this._onMouseOver = this._onMouseOver.bind(this), this._onFormReset = this._onFormReset.bind(this), this._onAKey = this._onAKey.bind(this), this._onEnterKey = this._onEnterKey.bind(this), this._onEscapeKey = this._onEscapeKey.bind(this), this._onDirectionKey = this._onDirectionKey.bind(this), this._onDeleteKey = this._onDeleteKey.bind(this), this.passedElement.isActive) return this.config.silent || console.warn("Trying to initialise Choices on element already initialised"), void(this.initialised = !0);
                this.init()
            }
            e = i, t = [{
                key: "defaults",
                get: function() {
                    return Object.preventExtensions({
                        get options() {
                            return ee
                        },
                        get templates() {
                            return Y
                        }
                    })
                }
            }], null && J(e.prototype, null), t && J(e, t);
            var s = i.prototype;
            return s.init = function() {
                if (!this.initialised) {
                    this._createTemplates(), this._createElements(), this._createStructure(), this._initialState = C(this._store.state), this._store.subscribe(this._render), this._render(), this._addEventListeners(), (!this.config.addItems || this.passedElement.element.hasAttribute("disabled")) && this.disable(), this.initialised = !0;
                    var e = this.config.callbackOnInit;
                    e && "function" == typeof e && e.call(this)
                }
            }, s.destroy = function() {
                this.initialised && (this._removeEventListeners(), this.passedElement.reveal(), this.containerOuter.unwrap(this.passedElement.element), this.clearStore(), this._isSelectElement && (this.passedElement.options = this._presetOptions), this._templates = null, this.initialised = !1)
            }, s.enable = function() {
                return this.passedElement.isDisabled && this.passedElement.enable(), this.containerOuter.isDisabled && (this._addEventListeners(), this.input.enable(), this.containerOuter.enable()), this
            }, s.disable = function() {
                return this.passedElement.isDisabled || this.passedElement.disable(), this.containerOuter.isDisabled || (this._removeEventListeners(), this.input.disable(), this.containerOuter.disable()), this
            }, s.highlightItem = function(e, t) {
                if (void 0 === t && (t = !0), !e) return this;
                var i = e.id,
                    s = e.groupId,
                    n = void 0 === s ? -1 : s,
                    a = e.value,
                    r = void 0 === a ? "" : a,
                    o = e.label,
                    l = void 0 === o ? "" : o,
                    c = n >= 0 ? this._store.getGroupById(n) : null;
                return this._store.dispatch(K(i, !0)), t && this.passedElement.triggerEvent(k, {
                    id: i,
                    value: r,
                    label: l,
                    groupValue: c && c.value ? c.value : null
                }), this
            }, s.unhighlightItem = function(e) {
                if (!e) return this;
                var t = e.id,
                    i = e.groupId,
                    s = void 0 === i ? -1 : i,
                    n = e.value,
                    a = void 0 === n ? "" : n,
                    r = e.label,
                    o = void 0 === r ? "" : r,
                    l = s >= 0 ? this._store.getGroupById(s) : null;
                return this._store.dispatch(K(t, !1)), this.passedElement.triggerEvent(k, {
                    id: t,
                    value: a,
                    label: o,
                    groupValue: l && l.value ? l.value : null
                }), this
            }, s.highlightAll = function() {
                var e = this;
                return this._store.items.forEach((function(t) {
                    return e.highlightItem(t)
                })), this
            }, s.unhighlightAll = function() {
                var e = this;
                return this._store.items.forEach((function(t) {
                    return e.unhighlightItem(t)
                })), this
            }, s.removeActiveItemsByValue = function(e) {
                var t = this;
                return this._store.activeItems.filter((function(t) {
                    return t.value === e
                })).forEach((function(e) {
                    return t._removeItem(e)
                })), this
            }, s.removeActiveItems = function(e) {
                var t = this;
                return this._store.activeItems.filter((function(t) {
                    return t.id !== e
                })).forEach((function(e) {
                    return t._removeItem(e)
                })), this
            }, s.removeHighlightedItems = function(e) {
                var t = this;
                return void 0 === e && (e = !1), this._store.highlightedActiveItems.forEach((function(i) {
                    t._removeItem(i), e && t._triggerChange(i.value)
                })), this
            }, s.showDropdown = function(e) {
                var t = this;
                return this.dropdown.isActive || requestAnimationFrame((function() {
                    t.dropdown.show(), t.containerOuter.open(t.dropdown.distanceFromTopWindow), !e && t._canSearch && t.input.focus(), t.passedElement.triggerEvent("showDropdown", {})
                })), this
            }, s.hideDropdown = function(e) {
                var t = this;
                return this.dropdown.isActive ? (requestAnimationFrame((function() {
                    t.dropdown.hide(), t.containerOuter.close(), !e && t._canSearch && (t.input.removeActiveDescendant(), t.input.blur()), t.passedElement.triggerEvent("hideDropdown", {})
                })), this) : this
            }, s.getValue = function(e) {
                void 0 === e && (e = !1);
                var t = this._store.activeItems.reduce((function(t, i) {
                    var s = e ? i.value : i;
                    return t.push(s), t
                }), []);
                return this._isSelectOneElement ? t[0] : t
            }, s.setValue = function(e) {
                var t = this;
                return this.initialised ? (e.forEach((function(e) {
                    return t._setChoiceOrItem(e)
                })), this) : this
            }, s.setChoiceByValue = function(e) {
                var t = this;
                return !this.initialised || this._isTextElement || (Array.isArray(e) ? e : [e]).forEach((function(e) {
                    return t._findAndSelectChoiceByValue(e)
                })), this
            }, s.setChoices = function(e, t, i, s) {
                var n = this;
                if (void 0 === e && (e = []), void 0 === t && (t = "value"), void 0 === i && (i = "label"), void 0 === s && (s = !1), !this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                if ("string" != typeof t || !t) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                if (s && this.clearChoices(), "function" == typeof e) {
                    var a = e(this);
                    if ("function" == typeof Promise && a instanceof Promise) return new Promise((function(e) {
                        return requestAnimationFrame(e)
                    })).then((function() {
                        return n._handleLoadingState(!0)
                    })).then((function() {
                        return a
                    })).then((function(e) {
                        return n.setChoices(e, t, i, s)
                    })).catch((function(e) {
                        n.config.silent || console.error(e)
                    })).then((function() {
                        return n._handleLoadingState(!1)
                    })).then((function() {
                        return n
                    }));
                    if (!Array.isArray(a)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof a);
                    return this.setChoices(a, t, i, !1)
                }
                if (!Array.isArray(e)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                return this.containerOuter.removeLoadingState(), this._startLoading(), e.forEach((function(e) {
                    e.choices ? n._addGroup({
                        id: parseInt(e.id, 10) || null,
                        group: e,
                        valueKey: t,
                        labelKey: i
                    }) : n._addChoice({
                        value: e[t],
                        label: e[i],
                        isSelected: e.selected,
                        isDisabled: e.disabled,
                        customProperties: e.customProperties,
                        placeholder: e.placeholder
                    })
                })), this._stopLoading(), this
            }, s.clearChoices = function() {
                return this._store.dispatch({
                    type: "CLEAR_CHOICES"
                }), this
            }, s.clearStore = function() {
                return this._store.dispatch({
                    type: "CLEAR_ALL"
                }), this
            }, s.clearInput = function() {
                var e = !this._isSelectOneElement;
                return this.input.clear(e), !this._isTextElement && this._canSearch && (this._isSearching = !1, this._store.dispatch(W(!0))), this
            }, s._render = function() {
                if (!this._store.isLoading()) {
                    this._currentState = this._store.state;
                    var e = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items,
                        t = this._isSelectElement,
                        i = this._currentState.items !== this._prevState.items;
                    e && (t && this._renderChoices(), i && this._renderItems(), this._prevState = this._currentState)
                }
            }, s._renderChoices = function() {
                var e = this,
                    t = this._store,
                    i = t.activeGroups,
                    s = t.activeChoices,
                    n = document.createDocumentFragment();
                if (this.choiceList.clear(), this.config.resetScrollPosition && requestAnimationFrame((function() {
                        return e.choiceList.scrollToTop()
                    })), i.length >= 1 && !this._isSearching) {
                    var a = s.filter((function(e) {
                        return !0 === e.placeholder && -1 === e.groupId
                    }));
                    a.length >= 1 && (n = this._createChoicesFragment(a, n)), n = this._createGroupsFragment(i, s, n)
                } else s.length >= 1 && (n = this._createChoicesFragment(s, n));
                if (n.childNodes && n.childNodes.length > 0) {
                    var r = this._store.activeItems,
                        o = this._canAddItem(r, this.input.value);
                    o.response ? (this.choiceList.append(n), this._highlightChoice()) : this.choiceList.append(this._getTemplate("notice", o.notice))
                } else {
                    var l, c;
                    this._isSearching ? (c = "function" == typeof this.config.noResultsText ? this.config.noResultsText() : this.config.noResultsText, l = this._getTemplate("notice", c, "no-results")) : (c = "function" == typeof this.config.noChoicesText ? this.config.noChoicesText() : this.config.noChoicesText, l = this._getTemplate("notice", c, "no-choices")), this.choiceList.append(l)
                }
            }, s._renderItems = function() {
                var e = this._store.activeItems || [];
                this.itemList.clear();
                var t = this._createItemsFragment(e);
                t.childNodes && this.itemList.append(t)
            }, s._createGroupsFragment = function(e, t, i) {
                var s = this;
                return void 0 === i && (i = document.createDocumentFragment()), this.config.shouldSort && e.sort(this.config.sorter), e.forEach((function(e) {
                    var n = function(e) {
                        return t.filter((function(t) {
                            return s._isSelectOneElement ? t.groupId === e.id : t.groupId === e.id && ("always" === s.config.renderSelectedChoices || !t.selected)
                        }))
                    }(e);
                    if (n.length >= 1) {
                        var a = s._getTemplate("choiceGroup", e);
                        i.appendChild(a), s._createChoicesFragment(n, i, !0)
                    }
                })), i
            }, s._createChoicesFragment = function(e, t, i) {
                var s = this;
                void 0 === t && (t = document.createDocumentFragment()), void 0 === i && (i = !1);
                var n = this.config,
                    a = n.renderSelectedChoices,
                    r = n.searchResultLimit,
                    o = n.renderChoiceLimit,
                    l = this._isSearching ? S : this.config.sorter,
                    c = function(e) {
                        if ("auto" !== a || s._isSelectOneElement || !e.selected) {
                            var i = s._getTemplate("choice", e, s.config.itemSelectText);
                            t.appendChild(i)
                        }
                    },
                    d = e;
                "auto" !== a || this._isSelectOneElement || (d = e.filter((function(e) {
                    return !e.selected
                })));
                var u = d.reduce((function(e, t) {
                        return t.placeholder ? e.placeholderChoices.push(t) : e.normalChoices.push(t), e
                    }), {
                        placeholderChoices: [],
                        normalChoices: []
                    }),
                    p = u.placeholderChoices,
                    h = u.normalChoices;
                (this.config.shouldSort || this._isSearching) && h.sort(l);
                var m = d.length,
                    f = this._isSelectOneElement ? [].concat(p, h) : h;
                this._isSearching ? m = r : o && o > 0 && !i && (m = o);
                for (var v = 0; v < m; v += 1) f[v] && c(f[v]);
                return t
            }, s._createItemsFragment = function(e, t) {
                var i = this;
                void 0 === t && (t = document.createDocumentFragment());
                var s = this.config,
                    n = s.shouldSortItems,
                    a = s.sorter,
                    r = s.removeItemButton;
                return n && !this._isSelectOneElement && e.sort(a), this._isTextElement ? this.passedElement.value = e : this.passedElement.options = e, e.forEach((function(e) {
                    var s = i._getTemplate("item", e, r);
                    t.appendChild(s)
                })), t
            }, s._triggerChange = function(e) {
                null != e && this.passedElement.triggerEvent("change", {
                    value: e
                })
            }, s._selectPlaceholderChoice = function() {
                var e = this._store.placeholderChoice;
                e && (this._addItem({
                    value: e.value,
                    label: e.label,
                    choiceId: e.id,
                    groupId: e.groupId,
                    placeholder: e.placeholder
                }), this._triggerChange(e.value))
            }, s._handleButtonAction = function(e, t) {
                if (e && t && this.config.removeItems && this.config.removeItemButton) {
                    var i = t.parentNode.getAttribute("data-id"),
                        s = e.find((function(e) {
                            return e.id === parseInt(i, 10)
                        }));
                    this._removeItem(s), this._triggerChange(s.value), this._isSelectOneElement && this._selectPlaceholderChoice()
                }
            }, s._handleItemAction = function(e, t, i) {
                var s = this;
                if (void 0 === i && (i = !1), e && t && this.config.removeItems && !this._isSelectOneElement) {
                    var n = t.getAttribute("data-id");
                    e.forEach((function(e) {
                        e.id !== parseInt(n, 10) || e.highlighted ? !i && e.highlighted && s.unhighlightItem(e) : s.highlightItem(e)
                    })), this.input.focus()
                }
            }, s._handleChoiceAction = function(e, t) {
                if (e && t) {
                    var i = t.dataset.id,
                        s = this._store.getChoiceById(i);
                    if (s) {
                        var n = e[0] && e[0].keyCode ? e[0].keyCode : null,
                            a = this.dropdown.isActive;
                        s.keyCode = n, this.passedElement.triggerEvent("choice", {
                            choice: s
                        }), s.selected || s.disabled || this._canAddItem(e, s.value).response && (this._addItem({
                            value: s.value,
                            label: s.label,
                            choiceId: s.id,
                            groupId: s.groupId,
                            customProperties: s.customProperties,
                            placeholder: s.placeholder,
                            keyCode: s.keyCode
                        }), this._triggerChange(s.value)), this.clearInput(), a && this._isSelectOneElement && (this.hideDropdown(!0), this.containerOuter.focus())
                    }
                }
            }, s._handleBackspace = function(e) {
                if (this.config.removeItems && e) {
                    var t = e[e.length - 1],
                        i = e.some((function(e) {
                            return e.highlighted
                        }));
                    this.config.editItems && !i && t ? (this.input.value = t.value, this.input.setWidth(), this._removeItem(t), this._triggerChange(t.value)) : (i || this.highlightItem(t, !1), this.removeHighlightedItems(!0))
                }
            }, s._startLoading = function() {
                this._store.dispatch(Q(!0))
            }, s._stopLoading = function() {
                this._store.dispatch(Q(!1))
            }, s._handleLoadingState = function(e) {
                void 0 === e && (e = !0);
                var t = this.itemList.getChild("." + this.config.classNames.placeholder);
                e ? (this.disable(), this.containerOuter.addLoadingState(), this._isSelectOneElement ? t ? t.innerHTML = this.config.loadingText : (t = this._getTemplate("placeholder", this.config.loadingText), this.itemList.append(t)) : this.input.placeholder = this.config.loadingText) : (this.enable(), this.containerOuter.removeLoadingState(), this._isSelectOneElement ? t.innerHTML = this._placeholderValue || "" : this.input.placeholder = this._placeholderValue || "")
            }, s._handleSearch = function(e) {
                if (e && this.input.isFocussed) {
                    var t = this._store.choices,
                        i = this.config,
                        s = i.searchFloor,
                        n = i.searchChoices,
                        a = t.some((function(e) {
                            return !e.active
                        }));
                    if (e && e.length >= s) {
                        var r = n ? this._searchChoices(e) : 0;
                        this.passedElement.triggerEvent("search", {
                            value: e,
                            resultCount: r
                        })
                    } else a && (this._isSearching = !1, this._store.dispatch(W(!0)))
                }
            }, s._canAddItem = function(e, t) {
                var i = !0,
                    s = "function" == typeof this.config.addItemText ? this.config.addItemText(t) : this.config.addItemText;
                if (!this._isSelectOneElement) {
                    var n = function(e, t, i) {
                        return void 0 === i && (i = "value"), e.some((function(e) {
                            return "string" == typeof t ? e[i] === t.trim() : e[i] === t
                        }))
                    }(e, t);
                    this.config.maxItemCount > 0 && this.config.maxItemCount <= e.length && (i = !1, s = "function" == typeof this.config.maxItemText ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText), !this.config.duplicateItemsAllowed && n && i && (i = !1, s = "function" == typeof this.config.uniqueItemText ? this.config.uniqueItemText(t) : this.config.uniqueItemText), this._isTextElement && this.config.addItems && i && "function" == typeof this.config.addItemFilter && !this.config.addItemFilter(t) && (i = !1, s = "function" == typeof this.config.customAddItemText ? this.config.customAddItemText(t) : this.config.customAddItemText)
                }
                return {
                    response: i,
                    notice: s
                }
            }, s._searchChoices = function(e) {
                var t = "string" == typeof e ? e.trim() : e,
                    i = "string" == typeof this._currentValue ? this._currentValue.trim() : this._currentValue;
                if (t.length < 1 && t === i + " ") return 0;
                var s = this._store.searchableChoices,
                    a = t,
                    r = [].concat(this.config.searchFields),
                    o = Object.assign(this.config.fuseOptions, {
                        keys: r
                    }),
                    l = new n.a(s, o).search(a);
                return this._currentValue = t, this._highlightPosition = 0, this._isSearching = !0, this._store.dispatch(function(e) {
                    return {
                        type: "FILTER_CHOICES",
                        results: e
                    }
                }(l)), l.length
            }, s._addEventListeners = function() {
                var e = document.documentElement;
                e.addEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.addEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, !0), e.addEventListener("click", this._onClick, {
                    passive: !0
                }), e.addEventListener("touchmove", this._onTouchMove, {
                    passive: !0
                }), this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                    passive: !0
                }), this._isSelectOneElement && (this.containerOuter.element.addEventListener("focus", this._onFocus, {
                    passive: !0
                }), this.containerOuter.element.addEventListener("blur", this._onBlur, {
                    passive: !0
                })), this.input.element.addEventListener("keyup", this._onKeyUp, {
                    passive: !0
                }), this.input.element.addEventListener("focus", this._onFocus, {
                    passive: !0
                }), this.input.element.addEventListener("blur", this._onBlur, {
                    passive: !0
                }), this.input.element.form && this.input.element.form.addEventListener("reset", this._onFormReset, {
                    passive: !0
                }), this.input.addEventListeners()
            }, s._removeEventListeners = function() {
                var e = document.documentElement;
                e.removeEventListener("touchend", this._onTouchEnd, !0), this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, !0), this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, !0), e.removeEventListener("click", this._onClick), e.removeEventListener("touchmove", this._onTouchMove), this.dropdown.element.removeEventListener("mouseover", this._onMouseOver), this._isSelectOneElement && (this.containerOuter.element.removeEventListener("focus", this._onFocus), this.containerOuter.element.removeEventListener("blur", this._onBlur)), this.input.element.removeEventListener("keyup", this._onKeyUp), this.input.element.removeEventListener("focus", this._onFocus), this.input.element.removeEventListener("blur", this._onBlur), this.input.element.form && this.input.element.form.removeEventListener("reset", this._onFormReset), this.input.removeEventListeners()
            }, s._onKeyDown = function(e) {
                var t, i = e.target,
                    s = e.keyCode,
                    n = e.ctrlKey,
                    a = e.metaKey,
                    r = this._store.activeItems,
                    o = this.input.isFocussed,
                    l = this.dropdown.isActive,
                    c = this.itemList.hasChildren(),
                    d = String.fromCharCode(s),
                    u = n || a;
                !this._isTextElement && /[a-zA-Z0-9-_ ]/.test(d) && this.showDropdown();
                var p = ((t = {})[65] = this._onAKey, t[13] = this._onEnterKey, t[27] = this._onEscapeKey, t[38] = this._onDirectionKey, t[33] = this._onDirectionKey, t[40] = this._onDirectionKey, t[34] = this._onDirectionKey, t[8] = this._onDeleteKey, t[46] = this._onDeleteKey, t);
                p[s] && p[s]({
                    event: e,
                    target: i,
                    keyCode: s,
                    metaKey: a,
                    activeItems: r,
                    hasFocusedInput: o,
                    hasActiveDropdown: l,
                    hasItems: c,
                    hasCtrlDownKeyPressed: u
                })
            }, s._onKeyUp = function(e) {
                var t = e.target,
                    i = e.keyCode,
                    s = this.input.value,
                    n = this._store.activeItems,
                    a = this._canAddItem(n, s);
                if (this._isTextElement)
                    if (a.notice && s) {
                        var r = this._getTemplate("notice", a.notice);
                        this.dropdown.element.innerHTML = r.outerHTML, this.showDropdown(!0)
                    } else this.hideDropdown(!0);
                else {
                    var o = (46 === i || 8 === i) && !t.value,
                        l = !this._isTextElement && this._isSearching,
                        c = this._canSearch && a.response;
                    o && l ? (this._isSearching = !1, this._store.dispatch(W(!0))) : c && this._handleSearch(this.input.value)
                }
                this._canSearch = this.config.searchEnabled
            }, s._onAKey = function(e) {
                var t = e.hasItems;
                e.hasCtrlDownKeyPressed && t && (this._canSearch = !1, this.config.removeItems && !this.input.value && this.input.element === document.activeElement && this.highlightAll())
            }, s._onEnterKey = function(e) {
                var t = e.event,
                    i = e.target,
                    s = e.activeItems,
                    n = e.hasActiveDropdown,
                    a = i.hasAttribute("data-button");
                if (this._isTextElement && i.value) {
                    var r = this.input.value;
                    this._canAddItem(s, r).response && (this.hideDropdown(!0), this._addItem({
                        value: r
                    }), this._triggerChange(r), this.clearInput())
                }
                if (a && (this._handleButtonAction(s, i), t.preventDefault()), n) {
                    var o = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                    o && (s[0] && (s[0].keyCode = 13), this._handleChoiceAction(s, o)), t.preventDefault()
                } else this._isSelectOneElement && (this.showDropdown(), t.preventDefault())
            }, s._onEscapeKey = function(e) {
                e.hasActiveDropdown && (this.hideDropdown(!0), this.containerOuter.focus())
            }, s._onDirectionKey = function(e) {
                var t, i, s, n = e.event,
                    a = e.hasActiveDropdown,
                    r = e.keyCode,
                    o = e.metaKey;
                if (a || this._isSelectOneElement) {
                    this.showDropdown(), this._canSearch = !1;
                    var l, c = 40 === r || 34 === r ? 1 : -1;
                    if (o || 34 === r || 33 === r) l = c > 0 ? this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type") : this.dropdown.element.querySelector("[data-choice-selectable]");
                    else {
                        var d = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                        l = d ? function(e, t, i) {
                            if (void 0 === i && (i = 1), e instanceof Element) {
                                for (var s = (i > 0 ? "next" : "previous") + "ElementSibling", n = e[s]; n;) {
                                    if (n.matches(t)) return n;
                                    n = n[s]
                                }
                                return n
                            }
                        }(d, "[data-choice-selectable]", c) : this.dropdown.element.querySelector("[data-choice-selectable]")
                    }
                    l && (t = l, i = this.choiceList.element, void 0 === (s = c) && (s = 1), t && (s > 0 ? i.scrollTop + i.offsetHeight >= t.offsetTop + t.offsetHeight : t.offsetTop >= i.scrollTop) || this.choiceList.scrollToChildElement(l, c), this._highlightChoice(l)), n.preventDefault()
                }
            }, s._onDeleteKey = function(e) {
                var t = e.event,
                    i = e.target,
                    s = e.hasFocusedInput,
                    n = e.activeItems;
                !s || i.value || this._isSelectOneElement || (this._handleBackspace(n), t.preventDefault())
            }, s._onTouchMove = function() {
                this._wasTap && (this._wasTap = !1)
            }, s._onTouchEnd = function(e) {
                var t = (e || e.touches[0]).target;
                this._wasTap && this.containerOuter.element.contains(t) && ((t === this.containerOuter.element || t === this.containerInner.element) && (this._isTextElement ? this.input.focus() : this._isSelectMultipleElement && this.showDropdown()), e.stopPropagation()), this._wasTap = !0
            }, s._onMouseDown = function(e) {
                var t = e.target;
                if (t instanceof HTMLElement) {
                    if (Z && this.choiceList.element.contains(t)) {
                        var i = this.choiceList.element.firstElementChild,
                            s = "ltr" === this._direction ? e.offsetX >= i.offsetWidth : e.offsetX < i.offsetLeft;
                        this._isScrollingOnIe = s
                    }
                    if (t !== this.input.element) {
                        var n = t.closest("[data-button],[data-item],[data-choice]");
                        if (n instanceof HTMLElement) {
                            var a = e.shiftKey,
                                r = this._store.activeItems,
                                o = n.dataset;
                            "button" in o ? this._handleButtonAction(r, n) : "item" in o ? this._handleItemAction(r, n, a) : "choice" in o && this._handleChoiceAction(r, n)
                        }
                        e.preventDefault()
                    }
                }
            }, s._onMouseOver = function(e) {
                var t = e.target;
                t instanceof HTMLElement && "choice" in t.dataset && this._highlightChoice(t)
            }, s._onClick = function(e) {
                var t = e.target;
                this.containerOuter.element.contains(t) ? this.dropdown.isActive || this.containerOuter.isDisabled ? this._isSelectOneElement && t !== this.input.element && !this.dropdown.element.contains(t) && this.hideDropdown() : this._isTextElement ? document.activeElement !== this.input.element && this.input.focus() : (this.showDropdown(), this.containerOuter.focus()) : (this._store.highlightedActiveItems.length > 0 && this.unhighlightAll(), this.containerOuter.removeFocusState(), this.hideDropdown(!0))
            }, s._onFocus = function(e) {
                var t, i = this,
                    s = e.target;
                this.containerOuter.element.contains(s) && ((t = {})[A] = function() {
                    s === i.input.element && i.containerOuter.addFocusState()
                }, t[D] = function() {
                    i.containerOuter.addFocusState(), s === i.input.element && i.showDropdown(!0)
                }, t[z] = function() {
                    s === i.input.element && (i.showDropdown(!0), i.containerOuter.addFocusState())
                }, t)[this.passedElement.element.type]()
            }, s._onBlur = function(e) {
                var t = this,
                    i = e.target;
                if (this.containerOuter.element.contains(i) && !this._isScrollingOnIe) {
                    var s, n = this._store.activeItems.some((function(e) {
                        return e.highlighted
                    }));
                    ((s = {})[A] = function() {
                        i === t.input.element && (t.containerOuter.removeFocusState(), n && t.unhighlightAll(), t.hideDropdown(!0))
                    }, s[D] = function() {
                        t.containerOuter.removeFocusState(), (i === t.input.element || i === t.containerOuter.element && !t._canSearch) && t.hideDropdown(!0)
                    }, s[z] = function() {
                        i === t.input.element && (t.containerOuter.removeFocusState(), t.hideDropdown(!0), n && t.unhighlightAll())
                    }, s)[this.passedElement.element.type]()
                } else this._isScrollingOnIe = !1, this.input.element.focus()
            }, s._onFormReset = function() {
                this._store.dispatch({
                    type: "RESET_TO",
                    state: this._initialState
                })
            }, s._highlightChoice = function(e) {
                var t = this;
                void 0 === e && (e = null);
                var i = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                if (i.length) {
                    var s = e;
                    Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)).forEach((function(e) {
                        e.classList.remove(t.config.classNames.highlightedState), e.setAttribute("aria-selected", "false")
                    })), s ? this._highlightPosition = i.indexOf(s) : (s = i.length > this._highlightPosition ? i[this._highlightPosition] : i[i.length - 1]) || (s = i[0]), s.classList.add(this.config.classNames.highlightedState), s.setAttribute("aria-selected", "true"), this.passedElement.triggerEvent("highlightChoice", {
                        el: s
                    }), this.dropdown.isActive && (this.input.setActiveDescendant(s.id), this.containerOuter.setActiveDescendant(s.id))
                }
            }, s._addItem = function(e) {
                var t = e.value,
                    i = e.label,
                    s = void 0 === i ? null : i,
                    n = e.choiceId,
                    a = void 0 === n ? -1 : n,
                    r = e.groupId,
                    o = void 0 === r ? -1 : r,
                    l = e.customProperties,
                    c = void 0 === l ? null : l,
                    d = e.placeholder,
                    u = void 0 !== d && d,
                    p = e.keyCode,
                    h = void 0 === p ? null : p,
                    m = "string" == typeof t ? t.trim() : t,
                    f = h,
                    v = c,
                    g = this._store.items,
                    b = s || m,
                    y = a || -1,
                    w = o >= 0 ? this._store.getGroupById(o) : null,
                    E = g ? g.length + 1 : 1;
                return this.config.prependValue && (m = this.config.prependValue + m.toString()), this.config.appendValue && (m += this.config.appendValue.toString()), this._store.dispatch(function(e) {
                    return {
                        type: "ADD_ITEM",
                        value: e.value,
                        label: e.label,
                        id: e.id,
                        choiceId: e.choiceId,
                        groupId: e.groupId,
                        customProperties: e.customProperties,
                        placeholder: e.placeholder,
                        keyCode: e.keyCode
                    }
                }({
                    value: m,
                    label: b,
                    id: E,
                    choiceId: y,
                    groupId: o,
                    customProperties: c,
                    placeholder: u,
                    keyCode: f
                })), this._isSelectOneElement && this.removeActiveItems(E), this.passedElement.triggerEvent("addItem", {
                    id: E,
                    value: m,
                    label: b,
                    customProperties: v,
                    groupValue: w && w.value ? w.value : void 0,
                    keyCode: f
                }), this
            }, s._removeItem = function(e) {
                if (!e || !w("Object", e)) return this;
                var t = e.id,
                    i = e.value,
                    s = e.label,
                    n = e.choiceId,
                    a = e.groupId,
                    r = a >= 0 ? this._store.getGroupById(a) : null;
                return this._store.dispatch(function(e, t) {
                    return {
                        type: "REMOVE_ITEM",
                        id: e,
                        choiceId: t
                    }
                }(t, n)), r && r.value ? this.passedElement.triggerEvent(P, {
                    id: t,
                    value: i,
                    label: s,
                    groupValue: r.value
                }) : this.passedElement.triggerEvent(P, {
                    id: t,
                    value: i,
                    label: s
                }), this
            }, s._addChoice = function(e) {
                var t = e.value,
                    i = e.label,
                    s = void 0 === i ? null : i,
                    n = e.isSelected,
                    a = void 0 !== n && n,
                    r = e.isDisabled,
                    o = void 0 !== r && r,
                    l = e.groupId,
                    c = void 0 === l ? -1 : l,
                    d = e.customProperties,
                    u = void 0 === d ? null : d,
                    p = e.placeholder,
                    h = void 0 !== p && p,
                    m = e.keyCode,
                    f = void 0 === m ? null : m;
                if (null != t) {
                    var v = this._store.choices,
                        g = s || t,
                        b = v ? v.length + 1 : 1,
                        y = this._baseId + "-" + this._idNames.itemChoice + "-" + b;
                    this._store.dispatch(function(e) {
                        return {
                            type: "ADD_CHOICE",
                            value: e.value,
                            label: e.label,
                            id: e.id,
                            groupId: e.groupId,
                            disabled: e.disabled,
                            elementId: e.elementId,
                            customProperties: e.customProperties,
                            placeholder: e.placeholder,
                            keyCode: e.keyCode
                        }
                    }({
                        id: b,
                        groupId: c,
                        elementId: y,
                        value: t,
                        label: g,
                        disabled: o,
                        customProperties: u,
                        placeholder: h,
                        keyCode: f
                    })), a && this._addItem({
                        value: t,
                        label: g,
                        choiceId: b,
                        customProperties: u,
                        placeholder: h,
                        keyCode: f
                    })
                }
            }, s._addGroup = function(e) {
                var t = this,
                    i = e.group,
                    s = e.id,
                    n = e.valueKey,
                    a = void 0 === n ? "value" : n,
                    r = e.labelKey,
                    o = void 0 === r ? "label" : r,
                    l = w("Object", i) ? i.choices : Array.from(i.getElementsByTagName("OPTION")),
                    c = s || Math.floor((new Date).valueOf() * Math.random()),
                    d = !!i.disabled && i.disabled;
                l ? (this._store.dispatch(U({
                    value: i.label,
                    id: c,
                    active: !0,
                    disabled: d
                })), l.forEach((function(e) {
                    var i = e.disabled || e.parentNode && e.parentNode.disabled;
                    t._addChoice({
                        value: e[a],
                        label: w("Object", e) ? e[o] : e.innerHTML,
                        isSelected: e.selected,
                        isDisabled: i,
                        groupId: c,
                        customProperties: e.customProperties,
                        placeholder: e.placeholder
                    })
                }))) : this._store.dispatch(U({
                    value: i.label,
                    id: i.id,
                    active: !1,
                    disabled: i.disabled
                }))
            }, s._getTemplate = function(e) {
                var t;
                if (!e) return null;
                for (var i = this.config.classNames, s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), a = 1; a < s; a++) n[a - 1] = arguments[a];
                return (t = this._templates[e]).call.apply(t, [this, i].concat(n))
            }, s._createTemplates = function() {
                var e = this.config.callbackOnCreateTemplates,
                    t = {};
                e && "function" == typeof e && (t = e.call(this, x)), this._templates = r()(Y, t)
            }, s._createElements = function() {
                this.containerOuter = new N({
                    element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                }), this.containerInner = new N({
                    element: this._getTemplate("containerInner"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                }), this.input = new F({
                    element: this._getTemplate("input", this._placeholderValue),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    preventPaste: !this.config.paste
                }), this.choiceList = new H({
                    element: this._getTemplate("choiceList", this._isSelectOneElement)
                }), this.itemList = new H({
                    element: this._getTemplate("itemList", this._isSelectOneElement)
                }), this.dropdown = new O({
                    element: this._getTemplate("dropdown"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type
                })
            }, s._createStructure = function() {
                this.passedElement.conceal(), this.containerInner.wrap(this.passedElement.element), this.containerOuter.wrap(this.containerInner.element), this._isSelectOneElement ? this.input.placeholder = this.config.searchPlaceholderValue || "" : this._placeholderValue && (this.input.placeholder = this._placeholderValue, this.input.setWidth()), this.containerOuter.element.appendChild(this.containerInner.element), this.containerOuter.element.appendChild(this.dropdown.element), this.containerInner.element.appendChild(this.itemList.element), this._isTextElement || this.dropdown.element.appendChild(this.choiceList.element), this._isSelectOneElement ? this.config.searchEnabled && this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild) : this.containerInner.element.appendChild(this.input.element), this._isSelectElement && (this._highlightPosition = 0, this._isSearching = !1, this._startLoading(), this._presetGroups.length ? this._addPredefinedGroups(this._presetGroups) : this._addPredefinedChoices(this._presetChoices), this._stopLoading()), this._isTextElement && this._addPredefinedItems(this._presetItems)
            }, s._addPredefinedGroups = function(e) {
                var t = this,
                    i = this.passedElement.placeholderOption;
                i && "SELECT" === i.parentNode.tagName && this._addChoice({
                    value: i.value,
                    label: i.innerHTML,
                    isSelected: i.selected,
                    isDisabled: i.disabled,
                    placeholder: !0
                }), e.forEach((function(e) {
                    return t._addGroup({
                        group: e,
                        id: e.id || null
                    })
                }))
            }, s._addPredefinedChoices = function(e) {
                var t = this;
                this.config.shouldSort && e.sort(this.config.sorter);
                var i = e.some((function(e) {
                        return e.selected
                    })),
                    s = e.findIndex((function(e) {
                        return void 0 === e.disabled || !e.disabled
                    }));
                e.forEach((function(e, n) {
                    var a = e.value,
                        r = e.label,
                        o = e.customProperties,
                        l = e.placeholder;
                    if (t._isSelectElement)
                        if (e.choices) t._addGroup({
                            group: e,
                            id: e.id || null
                        });
                        else {
                            var c = !(!t._isSelectOneElement || i || n !== s) || e.selected,
                                d = e.disabled;
                            t._addChoice({
                                value: a,
                                label: r,
                                isSelected: c,
                                isDisabled: d,
                                customProperties: o,
                                placeholder: l
                            })
                        }
                    else t._addChoice({
                        value: a,
                        label: r,
                        isSelected: e.selected,
                        isDisabled: e.disabled,
                        customProperties: o,
                        placeholder: l
                    })
                }))
            }, s._addPredefinedItems = function(e) {
                var t = this;
                e.forEach((function(e) {
                    "object" == typeof e && e.value && t._addItem({
                        value: e.value,
                        label: e.label,
                        choiceId: e.id,
                        customProperties: e.customProperties,
                        placeholder: e.placeholder
                    }), "string" == typeof e && t._addItem({
                        value: e
                    })
                }))
            }, s._setChoiceOrItem = function(e) {
                var t = this;
                ({
                    object: function() {
                        e.value && (t._isTextElement ? t._addItem({
                            value: e.value,
                            label: e.label,
                            choiceId: e.id,
                            customProperties: e.customProperties,
                            placeholder: e.placeholder
                        }) : t._addChoice({
                            value: e.value,
                            label: e.label,
                            isSelected: !0,
                            isDisabled: !1,
                            customProperties: e.customProperties,
                            placeholder: e.placeholder
                        }))
                    },
                    string: function() {
                        t._isTextElement ? t._addItem({
                            value: e
                        }) : t._addChoice({
                            value: e,
                            label: e,
                            isSelected: !0,
                            isDisabled: !1
                        })
                    }
                })[y(e).toLowerCase()]()
            }, s._findAndSelectChoiceByValue = function(e) {
                var t = this,
                    i = this._store.choices.find((function(i) {
                        return t.config.valueComparer(i.value, e)
                    }));
                i && !i.selected && this._addItem({
                    value: i.value,
                    label: i.label,
                    choiceId: i.id,
                    groupId: i.groupId,
                    customProperties: i.customProperties,
                    placeholder: i.placeholder,
                    keyCode: i.keyCode
                })
            }, s._generatePlaceholderValue = function() {
                if (this._isSelectElement) {
                    var e = this.passedElement.placeholderOption;
                    return !!e && e.text
                }
                var t = this.config,
                    i = t.placeholder,
                    s = t.placeholderValue,
                    n = this.passedElement.element.dataset;
                if (i) {
                    if (s) return s;
                    if (n.placeholder) return n.placeholder
                }
                return !1
            }, i
        }();
    t.default = te
}]).default,
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(t) : t()
}(0, (function() {
    "use strict";

    function e(e) {
        var t = !0,
            i = !1,
            s = null,
            n = {
                text: !0,
                search: !0,
                url: !0,
                tel: !0,
                email: !0,
                password: !0,
                number: !0,
                date: !0,
                month: !0,
                week: !0,
                time: !0,
                datetime: !0,
                "datetime-local": !0
            };

        function a(e) {
            return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
        }

        function r(e) {
            e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
        }

        function o(e) {
            t = !1
        }

        function l() {
            document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
        }

        function c(e) {
            e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
        }
        document.addEventListener("keydown", (function(i) {
            i.metaKey || i.altKey || i.ctrlKey || (a(e.activeElement) && r(e.activeElement), t = !0)
        }), !0), document.addEventListener("mousedown", o, !0), document.addEventListener("pointerdown", o, !0), document.addEventListener("touchstart", o, !0), document.addEventListener("visibilitychange", (function(e) {
            "hidden" === document.visibilityState && (i && (t = !0), l())
        }), !0), l(), e.addEventListener("focus", (function(e) {
            var i, s, o;
            a(e.target) && (t || (s = (i = e.target).type, "INPUT" === (o = i.tagName) && n[s] && !i.readOnly || "TEXTAREA" === o && !i.readOnly || i.isContentEditable)) && r(e.target)
        }), !0), e.addEventListener("blur", (function(e) {
            var t;
            a(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (i = !0, window.clearTimeout(s), s = window.setTimeout((function() {
                i = !1
            }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
        }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
    }
    if ("undefined" != typeof window && "undefined" != typeof document) {
        var t;
        window.applyFocusVisiblePolyfill = e;
        try {
            t = new CustomEvent("focus-visible-polyfill-ready")
        } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
        }
        window.dispatchEvent(t)
    }
    "undefined" != typeof document && e(document)
}));
class GraphAccordion {
constructor(e, t) {
    this.options = Object.assign({
        isOpen: () => {},
        isClose: () => {},
        speed: 300
    }, t), this.accordion = document.querySelector(e), this.control = this.accordion.querySelector(".accordion__control"), this.content = this.accordion.querySelector(".accordion__content"), this.event(), this.start()
}
start() {
    this.accordion && this.accordion.classList.contains("is-open") && this.open()
}
event() {
    console.log("event!"), this.accordion && this.accordion.addEventListener("click", (e => {
        this.accordion.classList.toggle("open"), this.accordion.classList.contains("open") ? this.open() : this.close()
    }))
}
open() {
    this.accordion.style.setProperty("--accordion-time", this.options.speed / 1e3 + "s"), this.accordion.classList.add("is-open"), this.control.setAttribute("aria-expanded", !0), this.content.setAttribute("aria-hidden", !1), this.content.style.maxHeight = this.content.scrollHeight + "px", this.options.isOpen(this)
}
close() {
    this.accordion.classList.remove("is-open"), this.control.setAttribute("aria-expanded", !1), this.content.setAttribute("aria-hidden", !0), this.content.style.maxHeight = null, this.options.isClose(this)
}
}
class GraphModal {
constructor(e) {
    this.options = Object.assign({
        isOpen: () => {},
        isClose: () => {}
    }, e), this.modal = document.querySelector(".modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events()
}
events() {
    this.modal && (document.addEventListener("click", function(e) {
        const t = e.target.closest("[data-graph-path]");
        if (t) {
            let e = t.dataset.graphPath,
                i = t.dataset.graphAnimation,
                s = t.dataset.graphSpeed;
            return this.animation = i || "fade", this.speed = s ? parseInt(s) : 300, this._nextContainer = document.querySelector(`[data-graph-target="${e}"]`), void this.open()
        }
        e.target.closest(".modal__close") && this.close()
    }.bind(this)), window.addEventListener("keydown", function(e) {
        27 == e.keyCode && this.isOpen && this.close(), 9 == e.which && this.isOpen && this.focusCatch(e)
    }.bind(this)), this.modal.addEventListener("click", function(e) {
        e.target.classList.contains("modal__container") || e.target.closest(".modal__container") || !this.isOpen || this.close()
    }.bind(this)))
}
open(e) {
    if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
    this.modalContainer = this._nextContainer, e && (this.modalContainer = document.querySelector(`[data-graph-target="${e}"]`)), this.modal.style.setProperty("--transition-time", this.speed / 1e3 + "s"), this.modal.classList.add("is-open"), this.disableScroll(), this.modalContainer.classList.add("modal-open"), this.modalContainer.classList.add(this.animation), setTimeout((() => {
        this.options.isOpen(this), this.modalContainer.classList.add("animate-open"), this.isOpen = !0, this.focusTrap()
    }), this.speed)
}
close() {
    this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("modal-open"), this.enableScroll(), this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()))
}
focusCatch(e) {
    const t = this.modalContainer.querySelectorAll(this._focusElements),
        i = Array.prototype.slice.call(t),
        s = i.indexOf(document.activeElement);
    e.shiftKey && 0 === s && (i[i.length - 1].focus(), e.preventDefault()), e.shiftKey || s !== i.length - 1 || (i[0].focus(), e.preventDefault())
}
focusTrap() {
    const e = this.modalContainer.querySelectorAll(this._focusElements);
    this.isOpen ? e.length && e[0].focus() : this.previousActiveElement.focus()
}
disableScroll() {
    let e = window.scrollY;
    this.lockPadding(), document.body.classList.add("disable-scroll"), document.body.dataset.position = e, document.body.style.top = -e + "px"
}
enableScroll() {
    let e = parseInt(document.body.dataset.position, 10);
    this.unlockPadding(), document.body.style.top = "auto", document.body.classList.remove("disable-scroll"), window.scrollTo({
        top: e,
        left: 0
    }), document.body.removeAttribute("data-position")
}
lockPadding() {
    let e = window.innerWidth - document.body.offsetWidth + "px";
    this._fixBlocks.forEach((t => {
        t.style.paddingRight = e
    })), document.body.style.paddingRight = e
}
unlockPadding() {
    this._fixBlocks.forEach((e => {
        e.style.paddingRight = "0px"
    })), document.body.style.paddingRight = "0px"
}
}
window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
    var t, i = (this.document || this.ownerDocument).querySelectorAll(e),
        s = this;
    do {
        for (t = i.length; --t >= 0 && i.item(t) !== s;);
    } while (t < 0 && (s = s.parentElement));
    return s
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
    }
    if ("function" == typeof window.CustomEvent) return !1;
    e.prototype = window.Event.prototype, window.CustomEvent = e
}(),
function() {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, i) {
        var s = (new Date).getTime(),
            n = Math.max(0, 16 - (s - e)),
            a = window.setTimeout((function() {
                t(s + n)
            }), n);
        return e = s + n, a
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
        clearTimeout(e)
    })
}(),
function(e, t) {
    "function" == typeof define && define.amd ? define([], (function() {
        return t(e)
    })) : "object" == typeof exports ? module.exports = t(e) : e.SmoothScroll = t(e)
}("undefined" != typeof global ? global : "undefined" != typeof window ? window : this, (function(e) {
    "use strict";
    var t = {
            ignore: "[data-scroll-ignore]",
            header: null,
            topOnEmptyHash: !0,
            speed: 500,
            speedAsDuration: !1,
            durationMax: null,
            durationMin: null,
            clip: !0,
            offset: 0,
            easing: "easeInOutCubic",
            customEasing: null,
            updateURL: !0,
            popstate: !0,
            emitEvents: !0
        },
        i = function() {
            var e = {};
            return Array.prototype.forEach.call(arguments, (function(t) {
                for (var i in t) {
                    if (!t.hasOwnProperty(i)) return;
                    e[i] = t[i]
                }
            })), e
        },
        s = function(t) {
            return parseInt(e.getComputedStyle(t).height, 10)
        },
        n = function(e) {
            var t;
            try {
                t = decodeURIComponent(e)
            } catch (i) {
                t = e
            }
            return t
        },
        a = function(e) {
            "#" === e.charAt(0) && (e = e.substr(1));
            for (var t, i = String(e), s = i.length, n = -1, a = "", r = i.charCodeAt(0); ++n < s;) {
                if (0 === (t = i.charCodeAt(n))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                a += t >= 1 && t <= 31 || 127 == t || 0 === n && t >= 48 && t <= 57 || 1 === n && t >= 48 && t <= 57 && 45 === r ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? i.charAt(n) : "\\" + i.charAt(n)
            }
            var o;
            try {
                o = decodeURIComponent("#" + a)
            } catch (e) {
                o = "#" + a
            }
            return o
        },
        r = function() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
        },
        o = function(e) {
            return e ? s(e) + e.offsetTop : 0
        },
        l = function(t, i, s, n) {
            if (i.emitEvents && "function" == typeof e.CustomEvent) {
                var a = new CustomEvent(t, {
                    bubbles: !0,
                    detail: {
                        anchor: s,
                        toggle: n
                    }
                });
                document.dispatchEvent(a)
            }
        };
    return function(s, c) {
        var d, u, p, h, m, f, v = {
            cancelScroll: function(e) {
                cancelAnimationFrame(f), f = null, e || l("scrollCancel", d)
            }
        };
        v.animateScroll = function(s, n, a) {
            var c = i(d || t, a || {}),
                u = "[object Number]" === Object.prototype.toString.call(s),
                m = u || !s.tagName ? null : s;
            if (u || m) {
                var g = e.pageYOffset;
                c.header && !p && (p = document.querySelector(c.header)), h || (h = o(p));
                var b, y, w, E = u ? s : function(t, i, s, n) {
                        var a = 0;
                        if (t.offsetParent)
                            do {
                                a += t.offsetTop, t = t.offsetParent
                            } while (t);
                        return a = Math.max(a - i - s, 0), n && (a = Math.min(a, r() - e.innerHeight)), a
                    }(m, h, parseInt("function" == typeof c.offset ? c.offset(s, n) : c.offset, 10), c.clip),
                    x = E - g,
                    S = r(),
                    C = 0,
                    T = function(e, t) {
                        var i = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);
                        return t.durationMax && i > t.durationMax ? t.durationMax : t.durationMin && i < t.durationMin ? t.durationMin : i
                    }(x, c),
                    _ = function(t, i) {
                        var a = e.pageYOffset;
                        if (t == i || a == i || (g < i && e.innerHeight + a) >= S) return v.cancelScroll(!0),
                            function(t, i, s) {
                                0 === t && document.body.focus(), s || (t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, i))
                            }(s, i, u), l("scrollStop", c, s, n), b = null, f = null, !0
                    },
                    M = function(t) {
                        b || (b = t), y = (C += t - b) / parseInt(T, 10), w = g + x * function(e, t) {
                            var i;
                            return "easeInQuad" === e.easing && (i = t * t), "easeOutQuad" === e.easing && (i = t * (2 - t)), "easeInOutQuad" === e.easing && (i = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (i = t * t * t), "easeOutCubic" === e.easing && (i = --t * t * t + 1), "easeInOutCubic" === e.easing && (i = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (i = t * t * t * t), "easeOutQuart" === e.easing && (i = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (i = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (i = t * t * t * t * t), "easeOutQuint" === e.easing && (i = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (i = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (i = e.customEasing(t)), i || t
                        }(c, y = y > 1 ? 1 : y), e.scrollTo(0, Math.floor(w)), _(w, E) || (f = e.requestAnimationFrame(M), b = t)
                    };
                0 === e.pageYOffset && e.scrollTo(0, 0),
                    function(e, t, i) {
                        t || history.pushState && i.updateURL && history.pushState({
                            smoothScroll: JSON.stringify(i),
                            anchor: e.id
                        }, document.title, e === document.documentElement ? "#top" : "#" + e.id)
                    }(s, u, c), l("scrollStart", c, s, n), v.cancelScroll(!0), e.requestAnimationFrame(M)
            }
        };
        var g = function(t) {
                if ((!("matchMedia" in e) || !e.matchMedia("(prefers-reduced-motion)").matches) && 0 === t.button && !t.metaKey && !t.ctrlKey && "closest" in t.target && (u = t.target.closest(s)) && "a" === u.tagName.toLowerCase() && !t.target.closest(d.ignore) && u.hostname === e.location.hostname && u.pathname === e.location.pathname && /#/.test(u.href)) {
                    var i = a(n(u.hash)),
                        r = d.topOnEmptyHash && "#" === i ? document.documentElement : document.querySelector(i);
                    (r = r || "#top" !== i ? r : document.documentElement) && (t.preventDefault(), function(t) {
                        if (history.replaceState && t.updateURL && !history.state) {
                            var i = e.location.hash;
                            i = i || e.pageYOffset, history.replaceState({
                                smoothScroll: JSON.stringify(t),
                                anchor: i || e.pageYOffset
                            }, document.title, i || e.location.href)
                        }
                    }(d), v.animateScroll(r, u))
                }
            },
            b = function(e) {
                if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(d)) {
                    var t = history.state.anchor;
                    t && 0 !== t && !(t = document.querySelector(a(n(history.state.anchor)))) || v.animateScroll(t, null, {
                        updateURL: !1
                    })
                }
            },
            y = function(e) {
                m || (m = setTimeout((function() {
                    m = null, h = o(p)
                }), 66))
            };
        return v.destroy = function() {
            d && (document.removeEventListener("click", g, !1), e.removeEventListener("resize", y, !1), e.removeEventListener("popstate", b, !1), v.cancelScroll(), d = null, null, u = null, p = null, h = null, m = null, f = null)
        }, v.init = function(s) {
            if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
            v.destroy(), d = i(t, s || {}), p = d.header ? document.querySelector(d.header) : null, h = o(p), document.addEventListener("click", g, !1), p && e.addEventListener("resize", y, !1), d.updateURL && d.popstate && e.addEventListener("popstate", b, !1)
        }, v.init(c), v
    }
})),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(i = {}, s = {}) {
        Object.keys(s).forEach((n => {
            void 0 === i[n] ? i[n] = s[n] : e(s[n]) && e(i[n]) && Object.keys(s[n]).length > 0 && t(i[n], s[n])
        }))
    }
    const i = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function s() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, i), e
    }
    const n = {
        document: i,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function a() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, n), e
    }
    class r extends Array {
        constructor(e) {
            super(...e || []),
                function(e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this)
        }
    }

    function o(e = []) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...o(e)) : t.push(e)
        })), t
    }

    function l(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function c(e, t) {
        const i = a(),
            n = s();
        let o = [];
        if (!t && e instanceof r) return e;
        if (!e) return new r(o);
        if ("string" == typeof e) {
            const i = e.trim();
            if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                let e = "div";
                0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
                const t = n.createElement(e);
                t.innerHTML = i;
                for (let e = 0; e < t.childNodes.length; e += 1) o.push(t.childNodes[e])
            } else o = function(e, t) {
                if ("string" != typeof e) return [e];
                const i = [],
                    s = t.querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                return i
            }(e.trim(), t || n)
        } else if (e.nodeType || e === i || e === n) o.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof r) return e;
            o = e
        }
        return new r(function(e) {
            const t = [];
            for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }(o))
    }
    c.fn = r.prototype;
    const d = {
        addClass: function(...e) {
            const t = o(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            })), this
        },
        removeClass: function(...e) {
            const t = o(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            })), this
        },
        hasClass: function(...e) {
            const t = o(e.map((e => e.split(" "))));
            return l(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function(...e) {
            const t = o(e.map((e => e.split(" "))));
            this.forEach((e => {
                t.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1)
                if (2 === arguments.length) this[i].setAttribute(e, t);
                else
                    for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function(...e) {
            let [t, i, s, n] = e;

            function a(e) {
                const t = e.target;
                if (!t) return;
                const n = e.target.dom7EventData || [];
                if (n.indexOf(e) < 0 && n.unshift(e), c(t).is(i)) s.apply(t, n);
                else {
                    const e = c(t).parents();
                    for (let t = 0; t < e.length; t += 1) c(e[t]).is(i) && s.apply(e[t], n)
                }
            }

            function r(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
            const o = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (l = 0; l < o.length; l += 1) {
                        const e = o[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: s,
                            proxyListener: a
                        }), t.addEventListener(e, a, n)
                    } else
                        for (l = 0; l < o.length; l += 1) {
                            const e = o[l];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: s,
                                proxyListener: r
                            }), t.addEventListener(e, r, n)
                        }
            }
            return this
        },
        off: function(...e) {
            let [t, i, s, n] = e;
            "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
            const a = t.split(" ");
            for (let e = 0; e < a.length; e += 1) {
                const t = a[e];
                for (let e = 0; e < this.length; e += 1) {
                    const a = this[e];
                    let r;
                    if (!i && a.dom7Listeners ? r = a.dom7Listeners[t] : i && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]), r && r.length)
                        for (let e = r.length - 1; e >= 0; e -= 1) {
                            const i = r[e];
                            s && i.listener === s || s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (a.removeEventListener(t, i.proxyListener, n), r.splice(e, 1)) : s || (a.removeEventListener(t, i.proxyListener, n), r.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = a(),
                i = e[0].split(" "),
                s = e[1];
            for (let n = 0; n < i.length; n += 1) {
                const a = i[n];
                for (let i = 0; i < this.length; i += 1) {
                    const n = this[i];
                    if (t.CustomEvent) {
                        const i = new t.CustomEvent(a, {
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        });
                        n.dom7EventData = e.filter(((e, t) => t > 0)), n.dispatchEvent(i), n.dom7EventData = [], delete n.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function i(s) {
                s.target === this && (e.call(this, s), t.off("transitionend", i))
            })), this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = a();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = a(),
                    t = s(),
                    i = this[0],
                    n = i.getBoundingClientRect(),
                    r = t.body,
                    o = i.clientTop || r.clientTop || 0,
                    l = i.clientLeft || r.clientLeft || 0,
                    c = i === e ? e.scrollY : i.scrollTop,
                    d = i === e ? e.scrollX : i.scrollLeft;
                return {
                    top: n.top + c - o,
                    left: n.left + d - l
                }
            }
            return null
        },
        css: function(e, t) {
            const i = a();
            let s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (const t in e) this[s].style[t] = e[t];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(((t, i) => {
                e.apply(t, [t, i])
            })), this) : this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = a(),
                i = s(),
                n = this[0];
            let o, l;
            if (!n || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (n.matches) return n.matches(e);
                if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                if (n.msMatchesSelector) return n.msMatchesSelector(e);
                for (o = c(e), l = 0; l < o.length; l += 1)
                    if (o[l] === n) return !0;
                return !1
            }
            if (e === i) return n === i;
            if (e === t) return n === t;
            if (e.nodeType || e instanceof r) {
                for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
                    if (o[l] === n) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return c([]);
            if (e < 0) {
                const i = t + e;
                return c(i < 0 ? [] : [this[i]])
            }
            return c([this[e]])
        },
        append: function(...e) {
            let t;
            const i = s();
            for (let s = 0; s < e.length; s += 1) {
                t = e[s];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const s = i.createElement("div");
                        for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                    } else if (t instanceof r)
                    for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
                else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = s();
            let i, n;
            for (i = 0; i < this.length; i += 1)
                if ("string" == typeof e) {
                    const s = t.createElement("div");
                    for (s.innerHTML = e, n = s.childNodes.length - 1; n >= 0; n -= 1) this[i].insertBefore(s.childNodes[n], this[i].childNodes[0])
                } else if (e instanceof r)
                for (n = 0; n < e.length; n += 1) this[i].insertBefore(e[n], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
        },
        nextAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.nextElementSibling;) {
                const s = i.nextElementSibling;
                e ? c(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return c(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]) : t.previousElementSibling ? c([t.previousElementSibling]) : c([])
            }
            return c([])
        },
        prevAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i) return c([]);
            for (; i.previousElementSibling;) {
                const s = i.previousElementSibling;
                e ? c(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return c(t)
        },
        parent: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? c(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return c(t)
        },
        parents: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let s = this[i].parentNode;
                for (; s;) e ? c(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
            }
            return c(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) t.push(s[e])
            }
            return c(t)
        },
        children: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].children;
                for (let i = 0; i < s.length; i += 1) e && !c(s[i]).is(e) || t.push(s[i])
            }
            return c(t)
        },
        filter: function(e) {
            return c(l(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function u(e, t = 0) {
        return setTimeout(e, t)
    }

    function p() {
        return Date.now()
    }

    function h(e, t = "x") {
        const i = a();
        let s, n, r;
        const o = function(e) {
            const t = a();
            let i;
            return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
        }(e);
        return i.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), "x" === t && (n = i.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (n = i.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), n || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(...e) {
        const t = Object(e[0]),
            i = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < e.length; n += 1) {
            const a = e[n];
            if (null != a && (s = a, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const e = Object.keys(Object(a)).filter((e => i.indexOf(e) < 0));
                for (let i = 0, s = e.length; i < s; i += 1) {
                    const s = e[i],
                        n = Object.getOwnPropertyDescriptor(a, s);
                    void 0 !== n && n.enumerable && (m(t[s]) && m(a[s]) ? a[s].__swiper__ ? t[s] = a[s] : f(t[s], a[s]) : !m(t[s]) && m(a[s]) ? (t[s] = {}, a[s].__swiper__ ? t[s] = a[s] : f(t[s], a[s])) : t[s] = a[s])
                }
            }
        }
        var s;
        return t
    }

    function v(e, t, i) {
        e.style.setProperty(t, i)
    }

    function g({
        swiper: e,
        targetPosition: t,
        side: i
    }) {
        const s = a(),
            n = -e.translate;
        let r, o = null;
        const l = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
        const c = t > n ? "next" : "prev",
            d = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
            u = () => {
                r = (new Date).getTime(), null === o && (o = r);
                const a = Math.max(Math.min((r - o) / l, 1), 0),
                    c = .5 - Math.cos(a * Math.PI) / 2;
                let p = n + c * (t - n);
                if (d(p, t) && (p = t), e.wrapperEl.scrollTo({
                        [i]: p
                    }), d(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [i]: p
                    })
                })), void s.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = s.requestAnimationFrame(u)
            };
        u()
    }
    let b, y, w;

    function E() {
        return b || (b = function() {
            const e = a(),
                t = s();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const i = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, i)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), b
    }

    function x(e = {}) {
        return y || (y = function({
            userAgent: e
        } = {}) {
            const t = E(),
                i = a(),
                s = i.navigator.platform,
                n = e || i.navigator.userAgent,
                r = {
                    ios: !1,
                    android: !1
                },
                o = i.screen.width,
                l = i.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === s;
            let m = "MacIntel" === s;
            return !d && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${l}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), m = !1), c && !h && (r.os = "android", r.android = !0), (d || p || u) && (r.os = "ios", r.ios = !0), r
        }(e)), y
    }

    function S() {
        return w || (w = function() {
            const e = a();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), w
    }
    Object.keys(d).forEach((e => {
        Object.defineProperty(c.fn, e, {
            value: d[e],
            writable: !0
        })
    }));
    var C = {
        on(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;
            const n = i ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
            })), s
        },
        once(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;

            function n(...i) {
                s.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(s, i)
            }
            return n.__emitterProxy = t, s.on(e, n, i)
        },
        onAny(e, t) {
            const i = this;
            if ("function" != typeof e) return i;
            const s = t ? "unshift" : "push";
            return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
        },
        offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const i = t.eventsAnyListeners.indexOf(e);
            return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
        },
        off(e, t) {
            const i = this;
            return i.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, n) => {
                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
                }))
            })), i) : i
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let i, s, n;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = t) : (i = e[0].events, s = e[0].data, n = e[0].context || t), s.unshift(n), (Array.isArray(i) ? i : i.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(n, [e, ...s])
                })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                    e.apply(n, s)
                }))
            })), t
        }
    };

    function T({
        swiper: e,
        runCallbacks: t,
        direction: i,
        step: s
    }) {
        const {
            activeIndex: n,
            previousIndex: a
        } = e;
        let r = i;
        if (r || (r = n > a ? "next" : n < a ? "prev" : "reset"), e.emit(`transition${s}`), t && n !== a) {
            if ("reset" === r) return void e.emit(`slideResetTransition${s}`);
            e.emit(`slideChangeTransition${s}`), "next" === r ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
        }
    }

    function _(e) {
        const t = this,
            i = s(),
            n = a(),
            r = t.touchEventsData,
            {
                params: o,
                touches: l,
                enabled: d
            } = t;
        if (!d) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let u = e;
        u.originalEvent && (u = u.originalEvent);
        let h = c(u.target);
        if ("wrapper" === o.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (r.isTouchEvent = "touchstart" === u.type, !r.isTouchEvent && "which" in u && 3 === u.which) return;
        if (!r.isTouchEvent && "button" in u && u.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        o.noSwipingClass && "" !== o.noSwipingClass && u.target && u.target.shadowRoot && e.path && e.path[0] && (h = c(e.path[0]));
        const m = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
            f = !(!u.target || !u.target.shadowRoot);
        if (o.noSwiping && (f ? function(e, t = this) {
                return function t(i) {
                    return i && i !== s() && i !== a() ? (i.assignedSlot && (i = i.assignedSlot), i.closest(e) || t(i.getRootNode().host)) : null
                }(t)
            }(m, u.target) : h.closest(m)[0])) return void(t.allowClick = !0);
        if (o.swipeHandler && !h.closest(o.swipeHandler)[0]) return;
        l.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX, l.currentY = "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY;
        const v = l.currentX,
            g = l.currentY,
            b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
            y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
        if (b && (v <= y || v >= n.innerWidth - y)) {
            if ("prevent" !== b) return;
            e.preventDefault()
        }
        if (Object.assign(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), l.startX = v, l.startY = g, r.touchStartTime = p(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== u.type) {
            let e = !0;
            h.is(r.focusableElements) && (e = !1), i.activeElement && c(i.activeElement).is(r.focusableElements) && i.activeElement !== h[0] && i.activeElement.blur();
            const s = e && t.allowTouchMove && o.touchStartPreventDefault;
            !o.touchStartForcePreventDefault && !s || h[0].isContentEditable || u.preventDefault()
        }
        t.emit("touchStart", u)
    }

    function M(e) {
        const t = s(),
            i = this,
            n = i.touchEventsData,
            {
                params: a,
                touches: r,
                rtlTranslate: o,
                enabled: l
            } = i;
        if (!l) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", d));
        if (n.isTouchEvent && "touchmove" !== d.type) return;
        const u = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
            h = "touchmove" === d.type ? u.pageX : d.pageX,
            m = "touchmove" === d.type ? u.pageY : d.pageY;
        if (d.preventedByNestedSwiper) return r.startX = h, void(r.startY = m);
        if (!i.allowTouchMove) return i.allowClick = !1, void(n.isTouched && (Object.assign(r, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), n.touchStartTime = p()));
        if (n.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
            if (i.isVertical()) {
                if (m < r.startY && i.translate <= i.maxTranslate() || m > r.startY && i.translate >= i.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
            } else if (h < r.startX && i.translate <= i.maxTranslate() || h > r.startX && i.translate >= i.minTranslate()) return;
        if (n.isTouchEvent && t.activeElement && d.target === t.activeElement && c(d.target).is(n.focusableElements)) return n.isMoved = !0, void(i.allowClick = !1);
        if (n.allowTouchCallbacks && i.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
        r.currentX = h, r.currentY = m;
        const f = r.currentX - r.startX,
            v = r.currentY - r.startY;
        if (i.params.threshold && Math.sqrt(f ** 2 + v ** 2) < i.params.threshold) return;
        if (void 0 === n.isScrolling) {
            let e;
            i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(f)) / Math.PI, n.isScrolling = i.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (n.isScrolling && i.emit("touchMoveOpposite", d), void 0 === n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        i.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation(), n.isMoved || (a.loop && !a.cssMode && i.loopFix(), n.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !a.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", d)), i.emit("sliderMove", d), n.isMoved = !0;
        let g = i.isHorizontal() ? f : v;
        r.diff = g, g *= a.touchRatio, o && (g = -g), i.swipeDirection = g > 0 ? "prev" : "next", n.currentTranslate = g + n.startTranslate;
        let b = !0,
            y = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (y = 0), g > 0 && n.currentTranslate > i.minTranslate() ? (b = !1, a.resistance && (n.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + g) ** y)) : g < 0 && n.currentTranslate < i.maxTranslate() && (b = !1, a.resistance && (n.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - g) ** y)), b && (d.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate), a.threshold > 0) {
            if (!(Math.abs(g) > a.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
            if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(n.currentTranslate), i.setTranslate(n.currentTranslate))
    }

    function $(e) {
        const t = this,
            i = t.touchEventsData,
            {
                params: s,
                touches: n,
                rtlTranslate: a,
                slidesGrid: r,
                enabled: o
            } = t;
        if (!o) return;
        let l = e;
        if (l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", l), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = p(),
            d = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(l), t.emit("tap click", l), d < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)), i.lastClickTime = p(), u((() => {
                t.destroyed || (t.allowClick = !0)
            })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        let h;
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, s.cssMode) return;
        if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < r.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
            const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            void 0 !== r[e + t] ? h >= r[e] && h < r[e + t] && (m = e, f = r[e + t] - r[e]) : h >= r[e] && (m = e, f = r[r.length - 1] - r[r.length - 2])
        }
        const v = (h - r[m]) / f,
            g = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (d > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (v >= s.longSwipesRatio ? t.slideTo(m + g) : t.slideTo(m)), "prev" === t.swipeDirection && (v > 1 - s.longSwipesRatio ? t.slideTo(m + g) : t.slideTo(m))
        } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(m + g), "prev" === t.swipeDirection && t.slideTo(m)) : l.target === t.navigation.nextEl ? t.slideTo(m + g) : t.slideTo(m)
        }
    }

    function I() {
        const e = this,
            {
                params: t,
                el: i
            } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: s,
            allowSlidePrev: n,
            snapGrid: a
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
    }

    function O(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function L() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: i,
                enabled: s
            } = e;
        if (!s) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, n !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let P = !1;

    function k() {}
    const A = (e, t) => {
            const i = s(),
                {
                    params: n,
                    touchEvents: a,
                    el: r,
                    wrapperEl: o,
                    device: l,
                    support: c
                } = e,
                d = !!n.nested,
                u = "on" === t ? "addEventListener" : "removeEventListener",
                p = t;
            if (c.touch) {
                const t = !("touchstart" !== a.start || !c.passiveListener || !n.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                r[u](a.start, e.onTouchStart, t), r[u](a.move, e.onTouchMove, c.passiveListener ? {
                    passive: !1,
                    capture: d
                } : d), r[u](a.end, e.onTouchEnd, t), a.cancel && r[u](a.cancel, e.onTouchEnd, t)
            } else r[u](a.start, e.onTouchStart, !1), i[u](a.move, e.onTouchMove, d), i[u](a.end, e.onTouchEnd, !1);
            (n.preventClicks || n.preventClicksPropagation) && r[u]("click", e.onClick, !0), n.cssMode && o[u]("scroll", e.onScroll), n.updateOnWindowResize ? e[p](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : e[p]("observerUpdate", I, !0)
        },
        D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var z = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
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
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function N(e, t) {
        return function(i = {}) {
            const s = Object.keys(i)[0],
                n = i[s];
            "object" == typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
                auto: !0
            }), s in e && "enabled" in n ? (!0 === e[s] && (e[s] = {
                enabled: !0
            }), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                enabled: !1
            }), f(t, i)) : f(t, i)) : f(t, i)
        }
    }
    const j = {
            eventsEmitter: C,
            update: {
                updateSize: function() {
                    const e = this;
                    let t, i;
                    const s = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                        width: t,
                        height: i,
                        size: e.isHorizontal() ? t : i
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        } [t]
                    }

                    function i(e, i) {
                        return parseFloat(e.getPropertyValue(t(i)) || 0)
                    }
                    const s = e.params,
                        {
                            $wrapperEl: n,
                            size: a,
                            rtlTranslate: r,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && s.virtual.enabled,
                        c = l ? e.virtual.slides.length : e.slides.length,
                        d = n.children(`.${e.params.slideClass}`),
                        u = l ? e.virtual.slides.length : d.length;
                    let p = [];
                    const h = [],
                        m = [];
                    let f = s.slidesOffsetBefore;
                    "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
                    let g = s.slidesOffsetAfter;
                    "function" == typeof g && (g = s.slidesOffsetAfter.call(e));
                    const b = e.snapGrid.length,
                        y = e.slidesGrid.length;
                    let w = s.spaceBetween,
                        E = -f,
                        x = 0,
                        S = 0;
                    if (void 0 === a) return;
                    "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * a), e.virtualSize = -w, r ? d.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), s.centeredSlides && s.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const C = s.grid && s.grid.rows > 1 && e.grid;
                    let T;
                    C && e.grid.initSlides(u);
                    const _ = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                    for (let n = 0; n < u; n += 1) {
                        T = 0;
                        const r = d.eq(n);
                        if (C && e.grid.updateSlide(n, r, u, t), "none" !== r.css("display")) {
                            if ("auto" === s.slidesPerView) {
                                _ && (d[n].style[t("width")] = "");
                                const a = getComputedStyle(r[0]),
                                    o = r[0].style.transform,
                                    l = r[0].style.webkitTransform;
                                if (o && (r[0].style.transform = "none"), l && (r[0].style.webkitTransform = "none"), s.roundLengths) T = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                                else {
                                    const e = i(a, "width"),
                                        t = i(a, "padding-left"),
                                        s = i(a, "padding-right"),
                                        n = i(a, "margin-left"),
                                        o = i(a, "margin-right"),
                                        l = a.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) T = e + n + o;
                                    else {
                                        const {
                                            clientWidth: i,
                                            offsetWidth: a
                                        } = r[0];
                                        T = e + t + s + n + o + (a - i)
                                    }
                                }
                                o && (r[0].style.transform = o), l && (r[0].style.webkitTransform = l), s.roundLengths && (T = Math.floor(T))
                            } else T = (a - (s.slidesPerView - 1) * w) / s.slidesPerView, s.roundLengths && (T = Math.floor(T)), d[n] && (d[n].style[t("width")] = `${T}px`);
                            d[n] && (d[n].swiperSlideSize = T), m.push(T), s.centeredSlides ? (E = E + T / 2 + x / 2 + w, 0 === x && 0 !== n && (E = E - a / 2 - w), 0 === n && (E = E - a / 2 - w), Math.abs(E) < .001 && (E = 0), s.roundLengths && (E = Math.floor(E)), S % s.slidesPerGroup == 0 && p.push(E), h.push(E)) : (s.roundLengths && (E = Math.floor(E)), (S - Math.min(e.params.slidesPerGroupSkip, S)) % e.params.slidesPerGroup == 0 && p.push(E), h.push(E), E = E + T + w), e.virtualSize += T + w, x = T, S += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, a) + g, r && o && ("slide" === s.effect || "coverflow" === s.effect) && n.css({
                            width: `${e.virtualSize+s.spaceBetween}px`
                        }), s.setWrapperSize && n.css({
                            [t("width")]: `${e.virtualSize+s.spaceBetween}px`
                        }), C && e.grid.updateWrapperSize(T, p, t), !s.centeredSlides) {
                        const t = [];
                        for (let i = 0; i < p.length; i += 1) {
                            let n = p[i];
                            s.roundLengths && (n = Math.floor(n)), p[i] <= e.virtualSize - a && t.push(n)
                        }
                        p = t, Math.floor(e.virtualSize - a) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - a)
                    }
                    if (0 === p.length && (p = [0]), 0 !== s.spaceBetween) {
                        const i = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                        d.filter(((e, t) => !s.cssMode || t !== d.length - 1)).css({
                            [i]: `${w}px`
                        })
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach((t => {
                            e += t + (s.spaceBetween ? s.spaceBetween : 0)
                        })), e -= s.spaceBetween;
                        const t = e - a;
                        p = p.map((e => e < 0 ? -f : e > t ? t + g : e))
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach((t => {
                                e += t + (s.spaceBetween ? s.spaceBetween : 0)
                            })), e -= s.spaceBetween, e < a) {
                            const t = (a - e) / 2;
                            p.forEach(((e, i) => {
                                p[i] = e - t
                            })), h.forEach(((e, i) => {
                                h[i] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: d,
                            snapGrid: p,
                            slidesGrid: h,
                            slidesSizesGrid: m
                        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        v(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            i = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i))
                    }
                    u !== c && e.emit("slidesLengthChange"), p.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== y && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        i = [],
                        s = t.virtual && t.params.virtual.enabled;
                    let n, a = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const r = e => s ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each((e => {
                            i.push(e)
                        }));
                        else
                            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                                const e = t.activeIndex + n;
                                if (e > t.slides.length && !s) break;
                                i.push(r(e))
                            } else i.push(r(t.activeIndex));
                    for (n = 0; n < i.length; n += 1)
                        if (void 0 !== i[n]) {
                            const e = i[n].offsetHeight;
                            a = e > a ? e : a
                        } a && t.$wrapperEl.css("height", `${a}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    const t = this,
                        i = t.params,
                        {
                            slides: s,
                            rtlTranslate: n
                        } = t;
                    if (0 === s.length) return;
                    void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    n && (a = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < s.length; e += 1) {
                        const r = s[e];
                        let o = r.swiperSlideOffset;
                        i.cssMode && i.centeredSlides && (o -= s[0].swiperSlideOffset);
                        const l = (a + (i.centeredSlides ? t.minTranslate() : 0) - o) / (r.swiperSlideSize + i.spaceBetween),
                            c = -(a - o),
                            d = c + t.slidesSizesGrid[e];
                        (c >= 0 && c < t.size - 1 || d > 1 && d <= t.size || c <= 0 && d >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(i.slideVisibleClass)), r.progress = n ? -l : l
                    }
                    t.visibleSlides = c(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const i = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * i || 0
                    }
                    const i = t.params,
                        s = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: n,
                        isBeginning: a,
                        isEnd: r
                    } = t;
                    const o = a,
                        l = r;
                    0 === s ? (n = 0, a = !0, r = !0) : (n = (e - t.minTranslate()) / s, a = n <= 0, r = n >= 1), Object.assign(t, {
                        progress: n,
                        isBeginning: a,
                        isEnd: r
                    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", n)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: i,
                            $wrapperEl: s,
                            activeIndex: n,
                            realIndex: a
                        } = e,
                        r = e.virtual && i.virtual.enabled;
                    let o;
                    t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), o = r ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), o.addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass));
                    let l = o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && (l = t.eq(0), l.addClass(i.slideNextClass));
                    let c = o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === c.length && (c = t.eq(-1), c.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        i = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: s,
                            snapGrid: n,
                            params: a,
                            activeIndex: r,
                            realIndex: o,
                            snapIndex: l
                        } = t;
                    let c, d = e;
                    if (void 0 === d) {
                        for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? d = e : i >= s[e] && i < s[e + 1] && (d = e + 1) : i >= s[e] && (d = e);
                        a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }
                    if (n.indexOf(i) >= 0) c = n.indexOf(i);
                    else {
                        const e = Math.min(a.slidesPerGroupSkip, d);
                        c = e + Math.floor((d - e) / a.slidesPerGroup)
                    }
                    if (c >= n.length && (c = n.length - 1), d === r) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
                    const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                    Object.assign(t, {
                        snapIndex: c,
                        realIndex: u,
                        previousIndex: r,
                        activeIndex: d
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        i = t.params,
                        s = c(e.target).closest(`.${i.slideClass}`)[0];
                    let n, a = !1;
                    if (s)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === s) {
                                a = !0, n = e;
                                break
                            } if (!s || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(c(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: i,
                        translate: s,
                        $wrapperEl: n
                    } = this;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    let a = h(n[0], e);
                    return i && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    const i = this,
                        {
                            rtlTranslate: s,
                            params: n,
                            $wrapperEl: a,
                            wrapperEl: r,
                            progress: o
                        } = i;
                    let l, c = 0,
                        d = 0;
                    i.isHorizontal() ? c = s ? -e : e : d = e, n.roundLengths && (c = Math.floor(c), d = Math.floor(d)), n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -c : -d : n.virtualTranslate || a.transform(`translate3d(${c}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? c : d;
                    const u = i.maxTranslate() - i.minTranslate();
                    l = 0 === u ? 0 : (e - i.minTranslate()) / u, l !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, n) {
                    const a = this,
                        {
                            params: r,
                            wrapperEl: o
                        } = a;
                    if (a.animating && r.preventInteractionOnTransition) return !1;
                    const l = a.minTranslate(),
                        c = a.maxTranslate();
                    let d;
                    if (d = s && e > l ? l : s && e < c ? c : e, a.updateProgress(d), r.cssMode) {
                        const e = a.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                        else {
                            if (!a.support.smoothScroll) return g({
                                swiper: a,
                                targetPosition: -d,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -d,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(d), i && (a.emit("beforeTransitionStart", t, n), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(d), i && (a.emit("beforeTransitionStart", t, n), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    const i = this;
                    i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    const i = this,
                        {
                            params: s
                        } = i;
                    s.cssMode || (s.autoHeight && i.updateAutoHeight(), T({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e = !0, t) {
                    const i = this,
                        {
                            params: s
                        } = i;
                    i.animating = !1, s.cssMode || (i.setTransition(0), T({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e = 0, t = this.params.speed, i = !0, s, n) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const a = this;
                    let r = e;
                    r < 0 && (r = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: c,
                        previousIndex: d,
                        activeIndex: u,
                        rtlTranslate: p,
                        wrapperEl: h,
                        enabled: m
                    } = a;
                    if (a.animating && o.preventInteractionOnTransition || !m && !s && !n) return !1;
                    const f = Math.min(a.params.slidesPerGroupSkip, r);
                    let v = f + Math.floor((r - f) / a.params.slidesPerGroup);
                    v >= l.length && (v = l.length - 1), (u || o.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
                    const b = -l[v];
                    if (a.updateProgress(b), o.normalizeSlideIndex)
                        for (let e = 0; e < c.length; e += 1) {
                            const t = -Math.floor(100 * b),
                                i = Math.floor(100 * c[e]),
                                s = Math.floor(100 * c[e + 1]);
                            void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? r = e : t >= i && t < s && (r = e + 1) : t >= i && (r = e)
                        }
                    if (a.initialized && r !== u) {
                        if (!a.allowSlideNext && b < a.translate && b < a.minTranslate()) return !1;
                        if (!a.allowSlidePrev && b > a.translate && b > a.maxTranslate() && (u || 0) !== r) return !1
                    }
                    let y;
                    if (y = r > u ? "next" : r < u ? "prev" : "reset", p && -b === a.translate || !p && b === a.translate) return a.updateActiveIndex(r), o.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== o.effect && a.setTranslate(b), "reset" !== y && (a.transitionStart(i, y), a.transitionEnd(i, y)), !1;
                    if (o.cssMode) {
                        const e = a.isHorizontal(),
                            i = p ? b : -b;
                        if (0 === t) {
                            const t = a.virtual && a.params.virtual.enabled;
                            t && (a.wrapperEl.style.scrollSnapType = "none"), h[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame((() => {
                                a.wrapperEl.style.scrollSnapType = ""
                            }))
                        } else {
                            if (!a.support.smoothScroll) return g({
                                swiper: a,
                                targetPosition: i,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: i,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(b), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, y), a.transitionEnd(i, y)) : (a.setTransition(t), a.setTranslate(b), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, y), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(i, y))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                    const n = this;
                    let a = e;
                    return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, i, s)
                },
                slideNext: function(e = this.params.speed, t = !0, i) {
                    const s = this,
                        {
                            animating: n,
                            enabled: a,
                            params: r
                        } = s;
                    if (!a) return s;
                    let o = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : o;
                    if (r.loop) {
                        if (n && r.loopPreventsSlide) return !1;
                        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    return s.slideTo(s.activeIndex + l, e, t, i)
                },
                slidePrev: function(e = this.params.speed, t = !0, i) {
                    const s = this,
                        {
                            params: n,
                            animating: a,
                            snapGrid: r,
                            slidesGrid: o,
                            rtlTranslate: l,
                            enabled: c
                        } = s;
                    if (!c) return s;
                    if (n.loop) {
                        if (a && n.loopPreventsSlide) return !1;
                        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const u = d(l ? s.translate : -s.translate),
                        p = r.map((e => d(e)));
                    let h = r[p.indexOf(u) - 1];
                    if (void 0 === h && n.cssMode) {
                        let e;
                        r.forEach(((t, i) => {
                            u >= t && (e = i)
                        })), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    return void 0 !== h && (m = o.indexOf(h), m < 0 && (m = s.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - s.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), s.slideTo(m, e, t, i)
                },
                slideReset: function(e = this.params.speed, t = !0, i) {
                    return this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                    const n = this;
                    let a = n.activeIndex;
                    const r = Math.min(n.params.slidesPerGroupSkip, a),
                        o = r + Math.floor((a - r) / n.params.slidesPerGroup),
                        l = n.rtlTranslate ? n.translate : -n.translate;
                    if (l >= n.snapGrid[o]) {
                        const e = n.snapGrid[o];
                        l - e > (n.snapGrid[o + 1] - e) * s && (a += n.params.slidesPerGroup)
                    } else {
                        const e = n.snapGrid[o - 1];
                        l - e <= (n.snapGrid[o] - e) * s && (a -= n.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, e, t, i)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: i
                        } = e,
                        s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let n, a = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        n = parseInt(c(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a) : a > e.slides.length - s ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), u((() => {
                            e.slideTo(a)
                        }))) : e.slideTo(a)
                    } else e.slideTo(a)
                }
            },
            loop: {
                loopCreate: function() {
                    const e = this,
                        t = s(),
                        {
                            params: i,
                            $wrapperEl: n
                        } = e;
                    n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                    let a = n.children(`.${i.slideClass}`);
                    if (i.loopFillGroupWithBlank) {
                        const e = i.slidesPerGroup - a.length % i.slidesPerGroup;
                        if (e !== i.slidesPerGroup) {
                            for (let s = 0; s < e; s += 1) {
                                const e = c(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                n.append(e)
                            }
                            a = n.children(`.${i.slideClass}`)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
                    const r = [],
                        o = [];
                    a.each(((t, i) => {
                        const s = c(t);
                        i < e.loopedSlides && o.push(t), i < a.length && i >= a.length - e.loopedSlides && r.push(t), s.attr("data-swiper-slide-index", i)
                    }));
                    for (let e = 0; e < o.length; e += 1) n.append(c(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (let e = r.length - 1; e >= 0; e -= 1) n.prepend(c(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: i,
                        loopedSlides: s,
                        allowSlidePrev: n,
                        allowSlideNext: a,
                        snapGrid: r,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const c = -r[t] - e.getTranslate();
                    t < s ? (l = i.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)) : t >= i.length - s && (l = -i.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 !== c && e.setTranslate((o ? -e.translate : e.translate) - c)), e.allowSlidePrev = n, e.allowSlideNext = a, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: i
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    const e = this,
                        t = s(),
                        {
                            params: i,
                            support: n
                        } = e;
                    e.onTouchStart = _.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = $.bind(e), i.cssMode && (e.onScroll = L.bind(e)), e.onClick = O.bind(e), n.touch && !P && (t.addEventListener("touchstart", k), P = !0), A(e, "on")
                },
                detachEvents: function() {
                    A(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: i,
                            loopedSlides: s = 0,
                            params: n,
                            $el: a
                        } = e,
                        r = n.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in r ? r[o] : void 0) || e.originalParams,
                        c = D(e, n),
                        d = D(e, l),
                        u = n.enabled;
                    c && !d ? (a.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && d && (a.addClass(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && a.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses());
                    const p = l.direction && l.direction !== n.direction,
                        h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
                    p && i && e.changeDirection(), f(e.params, l);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), u && !m ? e.disable() : !u && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), h && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t = "window", i) {
                    if (!e || "container" === t && !i) return;
                    let s = !1;
                    const n = a(),
                        r = "window" === t ? n.innerHeight : i.clientHeight,
                        o = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: r * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < o.length; e += 1) {
                        const {
                            point: a,
                            value: r
                        } = o[e];
                        "window" === t ? n.matchMedia(`(min-width: ${r}px)`).matches && (s = a) : r <= i.clientWidth && (s = a)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        {
                            isLocked: t,
                            params: i
                        } = e,
                        {
                            slidesOffsetBefore: s
                        } = i;
                    if (s) {
                        const t = e.slides.length - 1,
                            i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                        e.isLocked = e.size > i
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: i,
                            rtl: s,
                            $el: n,
                            device: a,
                            support: r
                        } = e,
                        o = function(e, t) {
                            const i = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((s => {
                                    e[s] && i.push(t + s)
                                })) : "string" == typeof e && i.push(t + e)
                            })), i
                        }(["initialized", i.direction, {
                            "pointer-events": !r.touch
                        }, {
                            "free-mode": e.params.freeMode && i.freeMode.enabled
                        }, {
                            autoheight: i.autoHeight
                        }, {
                            rtl: s
                        }, {
                            grid: i.grid && i.grid.rows > 1
                        }, {
                            "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                        }, {
                            android: a.android
                        }, {
                            ios: a.ios
                        }, {
                            "css-mode": i.cssMode
                        }, {
                            centered: i.cssMode && i.centeredSlides
                        }], i.containerModifierClass);
                    t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, i, s, n, r) {
                    const o = a();
                    let l;

                    function d() {
                        r && r()
                    }
                    c(e).parent("picture")[0] || e.complete && n ? d() : t ? (l = new o.Image, l.onload = d, l.onerror = d, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : d()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        const s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        F = {};
    class H {
        constructor(...e) {
            let t, i;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = f({}, i), t && !i.el && (i.el = t), i.el && c(i.el).length > 1) {
                const e = [];
                return c(i.el).each((t => {
                    const s = f({}, i, {
                        el: t
                    });
                    e.push(new H(s))
                })), e
            }
            const s = this;
            s.__swiper__ = !0, s.support = E(), s.device = x({
                userAgent: i.userAgent
            }), s.browser = S(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], i.modules && Array.isArray(i.modules) && s.modules.push(...i.modules);
            const n = {};
            s.modules.forEach((e => {
                e({
                    swiper: s,
                    extendParams: N(i, n),
                    on: s.on.bind(s),
                    once: s.once.bind(s),
                    off: s.off.bind(s),
                    emit: s.emit.bind(s)
                })
            }));
            const a = f({}, z, n);
            return s.params = f({}, a, F, i), s.originalParams = f({}, s.params), s.passedParams = f({}, i), s.params && s.params.on && Object.keys(s.params.on).forEach((e => {
                s.on(e, s.params.on[e])
            })), s.params && s.params.onAny && s.onAny(s.params.onAny), s.$ = c, Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: c(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return s.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, s.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, s.support.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: p(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.emit("_swiper"), s.params.init && s.init(), s
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const i = this;
            e = Math.min(Math.max(e, 0), 1);
            const s = i.minTranslate(),
                n = (i.maxTranslate() - s) * e + s;
            i.translateTo(n, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((i => {
                const s = e.getSlideClasses(i);
                t.push({
                    slideEl: i,
                    classNames: s
                }), e.emit("_slideClass", i, s)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
            const {
                params: i,
                slides: s,
                slidesGrid: n,
                slidesSizesGrid: a,
                size: r,
                activeIndex: o
            } = this;
            let l = 1;
            if (i.centeredSlides) {
                let e, t = s[o].swiperSlideSize;
                for (let i = o + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > r && (e = !0));
                for (let i = o - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > r && (e = !0))
            } else if ("current" === e)
                for (let e = o + 1; e < s.length; e += 1)(t ? n[e] + a[e] - n[o] < r : n[e] - n[o] < r) && (l += 1);
            else
                for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < r && (l += 1);
            return l
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: i
            } = e;

            function s() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let n;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || s()), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const i = this,
                s = i.params.direction;
            return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), i.emit("changeDirection"), t && i.update()), i
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const i = c(e || t.params.el);
            if (!(e = i[0])) return !1;
            e.swiper = t;
            const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let a = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = c(e.shadowRoot.querySelector(n()));
                    return t.children = e => i.children(e), t
                }
                return i.children(n())
            })();
            if (0 === a.length && t.params.createElements) {
                const e = s().createElement("div");
                a = c(e), e.className = t.params.wrapperClass, i.append(e), i.children(`.${t.params.slideClass}`).each((e => {
                    a.append(e)
                }))
            }
            return Object.assign(t, {
                $el: i,
                el: e,
                $wrapperEl: a,
                wrapperEl: a[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                wrongRTL: "-webkit-box" === a.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e = !0, t = !0) {
            const i = this,
                {
                    params: s,
                    $el: n,
                    $wrapperEl: a,
                    slides: r
                } = i;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
                i.off(e)
            })), !1 !== e && (i.$el[0].swiper = null, function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(i)), i.destroyed = !0), null
        }
        static extendDefaults(e) {
            f(F, e)
        }
        static get extendedDefaults() {
            return F
        }
        static get defaults() {
            return z
        }
        static installModule(e) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => H.installModule(e))), H) : (H.installModule(e), H)
        }
    }

    function B(e, t, i, n) {
        const a = s();
        return e.params.createElements && Object.keys(n).forEach((s => {
            if (!i[s] && !0 === i.auto) {
                let r = e.$el.children(`.${n[s]}`)[0];
                r || (r = a.createElement("div"), r.className = n[s], e.$el.append(r)), i[s] = r, t[s] = r
            }
        })), i
    }

    function G(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function R(e) {
        const t = this,
            {
                $wrapperEl: i,
                params: s
            } = t;
        if (s.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
        else i.append(e);
        s.loop && t.loopCreate(), s.observer || t.update()
    }

    function q(e) {
        const t = this,
            {
                params: i,
                $wrapperEl: s,
                activeIndex: n
            } = t;
        i.loop && t.loopDestroy();
        let a = n + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
            a = n + e.length
        } else s.prepend(e);
        i.loop && t.loopCreate(), i.observer || t.update(), t.slideTo(a, 0, !1)
    }

    function V(e, t) {
        const i = this,
            {
                $wrapperEl: s,
                params: n,
                activeIndex: a
            } = i;
        let r = a;
        n.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = s.children(`.${n.slideClass}`));
        const o = i.slides.length;
        if (e <= 0) return void i.prependSlide(t);
        if (e >= o) return void i.appendSlide(t);
        let l = r > e ? r + 1 : r;
        const c = [];
        for (let t = o - 1; t >= e; t -= 1) {
            const e = i.slides.eq(t);
            e.remove(), c.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
            l = r > e ? r + t.length : r
        } else s.append(t);
        for (let e = 0; e < c.length; e += 1) s.append(c[e]);
        n.loop && i.loopCreate(), n.observer || i.update(), n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
    }

    function X(e) {
        const t = this,
            {
                params: i,
                $wrapperEl: s,
                activeIndex: n
            } = t;
        let a = n;
        i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = s.children(`.${i.slideClass}`));
        let r, o = a;
        if ("object" == typeof e && "length" in e) {
            for (let i = 0; i < e.length; i += 1) r = e[i], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
            o = Math.max(o, 0)
        } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
        i.loop && t.loopCreate(), i.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
    }

    function Y() {
        const e = this,
            t = [];
        for (let i = 0; i < e.slides.length; i += 1) t.push(i);
        e.removeSlide(t)
    }

    function W(e) {
        const {
            effect: t,
            swiper: i,
            on: s,
            setTranslate: n,
            setTransition: a,
            overwriteParams: r,
            perspective: o
        } = e;
        s("beforeInit", (() => {
            if (i.params.effect !== t) return;
            i.classNames.push(`${i.params.containerModifierClass}${t}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
            const e = r ? r() : {};
            Object.assign(i.params, e), Object.assign(i.originalParams, e)
        })), s("setTranslate", (() => {
            i.params.effect === t && n()
        })), s("setTransition", ((e, s) => {
            i.params.effect === t && a(s)
        }))
    }

    function K(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function U({
        swiper: e,
        duration: t,
        transformEl: i,
        allSlides: s
    }) {
        const {
            slides: n,
            activeIndex: a,
            $wrapperEl: r
        } = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, o = !1;
            t = s ? i ? n.find(i) : n : i ? n.eq(a).find(i) : n.eq(a), t.transitionEnd((() => {
                if (o) return;
                if (!e || e.destroyed) return;
                o = !0, e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1) r.trigger(t[e])
            }))
        }
    }

    function Q(e, t, i) {
        const s = "swiper-slide-shadow" + (i ? `-${i}` : ""),
            n = e.transformEl ? t.find(e.transformEl) : t;
        let a = n.children(`.${s}`);
        return a.length || (a = c(`<div class="swiper-slide-shadow${i?`-${i}`:""}"></div>`), n.append(a)), a
    }
    Object.keys(j).forEach((e => {
        Object.keys(j[e]).forEach((t => {
            H.prototype[t] = j[e][t]
        }))
    })), H.use([function({
        swiper: e,
        on: t,
        emit: i
    }) {
        const s = a();
        let n = null;
        const r = () => {
                e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
            },
            o = () => {
                e && !e.destroyed && e.initialized && i("orientationchange")
            };
        t("init", (() => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver ? e && !e.destroyed && e.initialized && (n = new ResizeObserver((t => {
                const {
                    width: i,
                    height: s
                } = e;
                let n = i,
                    a = s;
                t.forEach((({
                    contentBoxSize: t,
                    contentRect: i,
                    target: s
                }) => {
                    s && s !== e.el || (n = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                })), n === i && a === s || r()
            })), n.observe(e.el)) : (s.addEventListener("resize", r), s.addEventListener("orientationchange", o))
        })), t("destroy", (() => {
            n && n.unobserve && e.el && (n.unobserve(e.el), n = null), s.removeEventListener("resize", r), s.removeEventListener("orientationchange", o)
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        const n = [],
            r = a(),
            o = (e, t = {}) => {
                const i = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    const t = function() {
                        s("observerUpdate", e[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                }));
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), n.push(i)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), i("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) o(t[e])
                }
                o(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), o(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), i("destroy", (() => {
            n.forEach((e => {
                e.disconnect()
            })), n.splice(0, n.length)
        }))
    }]);
    const J = [function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        function s(t, i) {
            const s = e.params.virtual;
            if (s.cache && e.virtual.cache[i]) return e.virtual.cache[i];
            const n = s.renderSlide ? c(s.renderSlide.call(e, t, i)) : c(`<div class="${e.params.slideClass}" data-swiper-slide-index="${i}">${t}</div>`);
            return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", i), s.cache && (e.virtual.cache[i] = n), n
        }

        function n(t) {
            const {
                slidesPerView: i,
                slidesPerGroup: n,
                centeredSlides: a
            } = e.params, {
                addSlidesBefore: r,
                addSlidesAfter: o
            } = e.params.virtual, {
                from: l,
                to: c,
                slides: d,
                slidesGrid: u,
                offset: p
            } = e.virtual;
            e.updateActiveIndex();
            const h = e.activeIndex || 0;
            let m, f, v;
            m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", a ? (f = Math.floor(i / 2) + n + o, v = Math.floor(i / 2) + n + r) : (f = i + (n - 1) + o, v = n + r);
            const g = Math.max((h || 0) - v, 0),
                b = Math.min((h || 0) + f, d.length - 1),
                y = (e.slidesGrid[g] || 0) - (e.slidesGrid[0] || 0);

            function w() {
                e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
            }
            if (Object.assign(e.virtual, {
                    from: g,
                    to: b,
                    offset: y,
                    slidesGrid: e.slidesGrid
                }), l === g && c === b && !t) return e.slidesGrid !== u && y !== p && e.slides.css(m, `${y}px`), void e.updateProgress();
            if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                offset: y,
                from: g,
                to: b,
                slides: function() {
                    const e = [];
                    for (let t = g; t <= b; t += 1) e.push(d[t]);
                    return e
                }()
            }), void(e.params.virtual.renderExternalUpdate && w());
            const E = [],
                x = [];
            if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
            else
                for (let t = l; t <= c; t += 1)(t < g || t > b) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < d.length; e += 1) e >= g && e <= b && (void 0 === c || t ? x.push(e) : (e > c && x.push(e), e < l && E.push(e)));
            x.forEach((t => {
                e.$wrapperEl.append(s(d[t], t))
            })), E.sort(((e, t) => t - e)).forEach((t => {
                e.$wrapperEl.prepend(s(d[t], t))
            })), e.$wrapperEl.children(".swiper-slide").css(m, `${y}px`), w()
        }
        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, i("beforeInit", (() => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || n())
        })), i("setTranslate", (() => {
            e.params.virtual.enabled && n()
        })), i("init update resize", (() => {
            e.params.virtual.enabled && e.params.cssMode && v(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        })), Object.assign(e.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length" in t)
                    for (let i = 0; i < t.length; i += 1) t[i] && e.virtual.slides.push(t[i]);
                else e.virtual.slides.push(t);
                n(!0)
            },
            prependSlide: function(t) {
                const i = e.activeIndex;
                let s = i + 1,
                    a = 1;
                if (Array.isArray(t)) {
                    for (let i = 0; i < t.length; i += 1) t[i] && e.virtual.slides.unshift(t[i]);
                    s = i + t.length, a = t.length
                } else e.virtual.slides.unshift(t);
                if (e.params.virtual.cache) {
                    const t = e.virtual.cache,
                        i = {};
                    Object.keys(t).forEach((e => {
                        const s = t[e],
                            n = s.attr("data-swiper-slide-index");
                        n && s.attr("data-swiper-slide-index", parseInt(n, 10) + 1), i[parseInt(e, 10) + a] = s
                    })), e.virtual.cache = i
                }
                n(!0), e.slideTo(s, 0)
            },
            removeSlide: function(t) {
                if (null == t) return;
                let i = e.activeIndex;
                if (Array.isArray(t))
                    for (let s = t.length - 1; s >= 0; s -= 1) e.virtual.slides.splice(t[s], 1), e.params.virtual.cache && delete e.virtual.cache[t[s]], t[s] < i && (i -= 1), i = Math.max(i, 0);
                else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < i && (i -= 1), i = Math.max(i, 0);
                n(!0), e.slideTo(i, 0)
            },
            removeAllSlides: function() {
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), n(!0), e.slideTo(0, 0)
            },
            update: n
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: n
    }) {
        const r = s(),
            o = a();

        function l(t) {
            if (!e.enabled) return;
            const {
                rtlTranslate: i
            } = e;
            let s = t;
            s.originalEvent && (s = s.originalEvent);
            const a = s.keyCode || s.charCode,
                l = e.params.keyboard.pageUpDown,
                c = l && 33 === a,
                d = l && 34 === a,
                u = 37 === a,
                p = 39 === a,
                h = 38 === a,
                m = 40 === a;
            if (!e.allowSlideNext && (e.isHorizontal() && p || e.isVertical() && m || d)) return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && u || e.isVertical() && h || c)) return !1;
            if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (c || d || u || p || h || m)) {
                    let t = !1;
                    if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                    const s = e.$el,
                        n = s[0].clientWidth,
                        a = s[0].clientHeight,
                        r = o.innerWidth,
                        l = o.innerHeight,
                        c = e.$el.offset();
                    i && (c.left -= e.$el[0].scrollLeft);
                    const d = [
                        [c.left, c.top],
                        [c.left + n, c.top],
                        [c.left, c.top + a],
                        [c.left + n, c.top + a]
                    ];
                    for (let e = 0; e < d.length; e += 1) {
                        const i = d[e];
                        if (i[0] >= 0 && i[0] <= r && i[1] >= 0 && i[1] <= l) {
                            if (0 === i[0] && 0 === i[1]) continue;
                            t = !0
                        }
                    }
                    if (!t) return
                }
                e.isHorizontal() ? ((c || d || u || p) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((d || p) && !i || (c || u) && i) && e.slideNext(), ((c || u) && !i || (d || p) && i) && e.slidePrev()) : ((c || d || h || m) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (d || m) && e.slideNext(), (c || h) && e.slidePrev()), n("keyPress", a)
            }
        }

        function d() {
            e.keyboard.enabled || (c(r).on("keydown", l), e.keyboard.enabled = !0)
        }

        function u() {
            e.keyboard.enabled && (c(r).off("keydown", l), e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        }, t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), i("init", (() => {
            e.params.keyboard.enabled && d()
        })), i("destroy", (() => {
            e.keyboard.enabled && u()
        })), Object.assign(e.keyboard, {
            enable: d,
            disable: u
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        const n = a();
        let r;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), e.mousewheel = {
            enabled: !1
        };
        let o, l = p();
        const d = [];

        function h() {
            e.enabled && (e.mouseEntered = !0)
        }

        function m() {
            e.enabled && (e.mouseEntered = !1)
        }

        function f(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && p() - l < e.params.mousewheel.thresholdTime || !(t.delta >= 6 && p() - l < 60) && (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), s("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), s("scroll", t.raw)), l = (new n.Date).getTime(), 1))
        }

        function v(t) {
            let i = t,
                n = !0;
            if (!e.enabled) return;
            const a = e.params.mousewheel;
            e.params.cssMode && i.preventDefault();
            let l = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (l = c(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !l[0].contains(i.target) && !a.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            let h = 0;
            const m = e.rtlTranslate ? -1 : 1,
                v = function(e) {
                    let t = 0,
                        i = 0,
                        s = 0,
                        n = 0;
                    return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: i,
                        pixelX: s,
                        pixelY: n
                    }
                }(i);
            if (a.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(v.pixelX) > Math.abs(v.pixelY))) return !0;
                    h = -v.pixelX * m
                } else {
                    if (!(Math.abs(v.pixelY) > Math.abs(v.pixelX))) return !0;
                    h = -v.pixelY
                }
            else h = Math.abs(v.pixelX) > Math.abs(v.pixelY) ? -v.pixelX * m : -v.pixelY;
            if (0 === h) return !0;
            a.invert && (h = -h);
            let g = e.getTranslate() + h * a.sensitivity;
            if (g >= e.minTranslate() && (g = e.minTranslate()), g <= e.maxTranslate() && (g = e.maxTranslate()), n = !!e.params.loop || !(g === e.minTranslate() || g === e.maxTranslate()), n && e.params.nested && i.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {
                        time: p(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    },
                    n = o && t.time < o.time + 500 && t.delta <= o.delta && t.direction === o.direction;
                if (!n) {
                    o = void 0, e.params.loop && e.loopFix();
                    let l = e.getTranslate() + h * a.sensitivity;
                    const c = e.isBeginning,
                        p = e.isEnd;
                    if (l >= e.minTranslate() && (l = e.minTranslate()), l <= e.maxTranslate() && (l = e.maxTranslate()), e.setTransition(0), e.setTranslate(l), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!c && e.isBeginning || !p && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                        clearTimeout(r), r = void 0, d.length >= 15 && d.shift();
                        const i = d.length ? d[d.length - 1] : void 0,
                            s = d[0];
                        if (d.push(t), i && (t.delta > i.delta || t.direction !== i.direction)) d.splice(0);
                        else if (d.length >= 15 && t.time - s.time < 500 && s.delta - t.delta >= 1 && t.delta <= 6) {
                            const i = h > 0 ? .8 : .2;
                            o = t, d.splice(0), r = u((() => {
                                e.slideToClosest(e.params.speed, !0, void 0, i)
                            }), 0)
                        }
                        r || (r = u((() => {
                            o = t, d.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (n || s("scroll", i), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), l === e.minTranslate() || l === e.maxTranslate()) return !0
                }
            } else {
                const i = {
                    time: p(),
                    delta: Math.abs(h),
                    direction: Math.sign(h),
                    raw: t
                };
                d.length >= 2 && d.shift();
                const s = d.length ? d[d.length - 1] : void 0;
                if (d.push(i), s ? (i.direction !== s.direction || i.delta > s.delta || i.time > s.time + 150) && f(i) : f(i), function(t) {
                        const i = e.params.mousewheel;
                        if (t.direction < 0) {
                            if (e.isEnd && !e.params.loop && i.releaseOnEdges) return !0
                        } else if (e.isBeginning && !e.params.loop && i.releaseOnEdges) return !0;
                        return !1
                    }(i)) return !0
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
        }

        function g(t) {
            let i = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (i = c(e.params.mousewheel.eventsTarget)), i[t]("mouseenter", h), i[t]("mouseleave", m), i[t]("wheel", v)
        }

        function b() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", v), !0) : !e.mousewheel.enabled && (g("on"), e.mousewheel.enabled = !0, !0)
        }

        function y() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, v), !0) : !!e.mousewheel.enabled && (g("off"), e.mousewheel.enabled = !1, !0)
        }
        i("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && y(), e.params.mousewheel.enabled && b()
        })), i("destroy", (() => {
            e.params.cssMode && b(), e.mousewheel.enabled && y()
        })), Object.assign(e.mousewheel, {
            enable: b,
            disable: y
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        function n(t) {
            let i;
            return t && (i = c(t), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))), i
        }

        function a(t, i) {
            const s = e.params.navigation;
            t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
        }

        function r() {
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: i
            } = e.navigation;
            a(i, e.isBeginning), a(t, e.isEnd)
        }

        function o(t) {
            t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
        }

        function l(t) {
            t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
        }

        function d() {
            const t = e.params.navigation;
            if (e.params.navigation = B(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
            const i = n(t.nextEl),
                s = n(t.prevEl);
            i && i.length > 0 && i.on("click", l), s && s.length > 0 && s.on("click", o), Object.assign(e.navigation, {
                $nextEl: i,
                nextEl: i && i[0],
                $prevEl: s,
                prevEl: s && s[0]
            }), e.enabled || (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass))
        }

        function u() {
            const {
                $nextEl: t,
                $prevEl: i
            } = e.navigation;
            t && t.length && (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", o), i.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }), e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, i("init", (() => {
            d(), r()
        })), i("toEdge fromEdge lock unlock", (() => {
            r()
        })), i("destroy", (() => {
            u()
        })), i("enable disable", (() => {
            const {
                $nextEl: t,
                $prevEl: i
            } = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })), i("click", ((t, i) => {
            const {
                $nextEl: n,
                $prevEl: a
            } = e.navigation, r = i.target;
            if (e.params.navigation.hideOnClick && !c(r).is(a) && !c(r).is(n)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
                let t;
                n ? t = n.hasClass(e.params.navigation.hiddenClass) : a && (t = a.hasClass(e.params.navigation.hiddenClass)), s(!0 === t ? "navigationShow" : "navigationHide"), n && n.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
            }
        })), Object.assign(e.navigation, {
            update: r,
            init: d,
            destroy: u
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        const n = "swiper-pagination";
        let a;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${n}-bullet`,
                bulletActiveClass: `${n}-bullet-active`,
                modifierClass: `${n}-`,
                currentClass: `${n}-current`,
                totalClass: `${n}-total`,
                hiddenClass: `${n}-hidden`,
                progressbarFillClass: `${n}-progressbar-fill`,
                progressbarOppositeClass: `${n}-progressbar-opposite`,
                clickableClass: `${n}-clickable`,
                lockClass: `${n}-lock`,
                horizontalClass: `${n}-horizontal`,
                verticalClass: `${n}-vertical`
            }
        }), e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let r = 0;

        function o() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function l(t, i) {
            const {
                bulletActiveClass: s
            } = e.params.pagination;
            t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
        }

        function d() {
            const t = e.rtl,
                i = e.params.pagination;
            if (o()) return;
            const n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                d = e.pagination.$el;
            let u;
            const p = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (u = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), u > n - 1 - 2 * e.loopedSlides && (u -= n - 2 * e.loopedSlides), u > p - 1 && (u -= p), u < 0 && "bullets" !== e.params.paginationType && (u = p + u)) : u = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const s = e.pagination.bullets;
                let n, o, p;
                if (i.dynamicBullets && (a = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), d.css(e.isHorizontal() ? "width" : "height", a * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (r += u - e.previousIndex, r > i.dynamicMainBullets - 1 ? r = i.dynamicMainBullets - 1 : r < 0 && (r = 0)), n = u - r, o = n + (Math.min(s.length, i.dynamicMainBullets) - 1), p = (o + n) / 2), s.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${i.bulletActiveClass}${e}`)).join(" ")), d.length > 1) s.each((e => {
                    const t = c(e),
                        s = t.index();
                    s === u && t.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= n && s <= o && t.addClass(`${i.bulletActiveClass}-main`), s === n && l(t, "prev"), s === o && l(t, "next"))
                }));
                else {
                    const t = s.eq(u),
                        a = t.index();
                    if (t.addClass(i.bulletActiveClass), i.dynamicBullets) {
                        const t = s.eq(n),
                            r = s.eq(o);
                        for (let e = n; e <= o; e += 1) s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (a >= s.length - i.dynamicMainBullets) {
                                for (let e = i.dynamicMainBullets; e >= 0; e -= 1) s.eq(s.length - e).addClass(`${i.bulletActiveClass}-main`);
                                s.eq(s.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                            } else l(t, "prev"), l(r, "next");
                        else l(t, "prev"), l(r, "next")
                    }
                }
                if (i.dynamicBullets) {
                    const n = Math.min(s.length, i.dynamicMainBullets + 4),
                        r = (a * n - a) / 2 - p * a,
                        o = t ? "right" : "left";
                    s.css(e.isHorizontal() ? o : "top", `${r}px`)
                }
            }
            if ("fraction" === i.type && (d.find(G(i.currentClass)).text(i.formatFractionCurrent(u + 1)), d.find(G(i.totalClass)).text(i.formatFractionTotal(p))), "progressbar" === i.type) {
                let t;
                t = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const s = (u + 1) / p;
                let n = 1,
                    a = 1;
                "horizontal" === t ? n = s : a = s, d.find(G(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`).transition(e.params.speed)
            }
            "custom" === i.type && i.renderCustom ? (d.html(i.renderCustom(e, u + 1, p)), s("paginationRender", d[0])) : s("paginationUpdate", d[0]), e.params.watchOverflow && e.enabled && d[e.isLocked ? "addClass" : "removeClass"](i.lockClass)
        }

        function u() {
            const t = e.params.pagination;
            if (o()) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                n = e.pagination.$el;
            let a = "";
            if ("bullets" === t.type) {
                let s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && s > i && (s = i);
                for (let i = 0; i < s; i += 1) t.renderBullet ? a += t.renderBullet.call(e, i, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                n.html(a), e.pagination.bullets = n.find(G(t.bulletClass))
            }
            "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, n.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, n.html(a)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
        }

        function p() {
            e.params.pagination = B(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el) return;
            let i = c(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el), i.length > 1 && (i = i.filter((t => c(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), i.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), r = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", G(t.bulletClass), (function(t) {
                t.preventDefault();
                let i = c(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i)
            })), Object.assign(e.pagination, {
                $el: i,
                el: i[0]
            }), e.enabled || i.addClass(t.lockClass))
        }

        function h() {
            const t = e.params.pagination;
            if (o()) return;
            const i = e.pagination.$el;
            i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), i.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", G(t.bulletClass))
        }
        i("init", (() => {
            p(), u(), d()
        })), i("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && d()
        })), i("snapIndexChange", (() => {
            e.params.loop || d()
        })), i("slidesLengthChange", (() => {
            e.params.loop && (u(), d())
        })), i("snapGridLengthChange", (() => {
            e.params.loop || (u(), d())
        })), i("destroy", (() => {
            h()
        })), i("enable disable", (() => {
            const {
                $el: t
            } = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })), i("lock unlock", (() => {
            d()
        })), i("click", ((t, i) => {
            const n = i.target,
                {
                    $el: a
                } = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && a.length > 0 && !c(n).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && n === e.navigation.nextEl || e.navigation.prevEl && n === e.navigation.prevEl)) return;
                const t = a.hasClass(e.params.pagination.hiddenClass);
                s(!0 === t ? "paginationShow" : "paginationHide"), a.toggleClass(e.params.pagination.hiddenClass)
            }
        })), Object.assign(e.pagination, {
            render: u,
            update: d,
            init: p,
            destroy: h
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: n
    }) {
        const a = s();
        let r, o, l, d, p = !1,
            h = null,
            m = null;

        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t,
                rtlTranslate: i,
                progress: s
            } = e, {
                $dragEl: n,
                $el: a
            } = t, r = e.params.scrollbar;
            let c = o,
                d = (l - o) * s;
            i ? (d = -d, d > 0 ? (c = o - d, d = 0) : -d + o > l && (c = l + d)) : d < 0 ? (c = o + d, d = 0) : d + o > l && (c = l - d), e.isHorizontal() ? (n.transform(`translate3d(${d}px, 0, 0)`), n[0].style.width = `${c}px`) : (n.transform(`translate3d(0px, ${d}px, 0)`), n[0].style.height = `${c}px`), r.hide && (clearTimeout(h), a[0].style.opacity = 1, h = setTimeout((() => {
                a[0].style.opacity = 0, a.transition(400)
            }), 1e3))
        }

        function v() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t
            } = e, {
                $dragEl: i,
                $el: s
            } = t;
            i[0].style.width = "", i[0].style.height = "", l = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight, d = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), o = "auto" === e.params.scrollbar.dragSize ? l * d : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = `${o}px` : i[0].style.height = `${o}px`, s[0].style.display = d >= 1 ? "none" : "", e.params.scrollbar.hide && (s[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }

        function g(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }

        function b(t) {
            const {
                scrollbar: i,
                rtlTranslate: s
            } = e, {
                $el: n
            } = i;
            let a;
            a = (g(t) - n.offset()[e.isHorizontal() ? "left" : "top"] - (null !== r ? r : o / 2)) / (l - o), a = Math.max(Math.min(a, 1), 0), s && (a = 1 - a);
            const c = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * a;
            e.updateProgress(c), e.setTranslate(c), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function y(t) {
            const i = e.params.scrollbar,
                {
                    scrollbar: s,
                    $wrapperEl: a
                } = e,
                {
                    $el: o,
                    $dragEl: l
                } = s;
            p = !0, r = t.target === l[0] || t.target === l ? g(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), a.transition(100), l.transition(100), b(t), clearTimeout(m), o.transition(0), i.hide && o.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), n("scrollbarDragStart", t)
        }

        function w(t) {
            const {
                scrollbar: i,
                $wrapperEl: s
            } = e, {
                $el: a,
                $dragEl: r
            } = i;
            p && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, b(t), s.transition(0), a.transition(0), r.transition(0), n("scrollbarDragMove", t))
        }

        function E(t) {
            const i = e.params.scrollbar,
                {
                    scrollbar: s,
                    $wrapperEl: a
                } = e,
                {
                    $el: r
                } = s;
            p && (p = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), a.transition("")), i.hide && (clearTimeout(m), m = u((() => {
                r.css("opacity", 0), r.transition(400)
            }), 1e3)), n("scrollbarDragEnd", t), i.snapOnRelease && e.slideToClosest())
        }

        function x(t) {
            const {
                scrollbar: i,
                touchEventsTouch: s,
                touchEventsDesktop: n,
                params: r,
                support: o
            } = e, l = i.$el[0], c = !(!o.passiveListener || !r.passiveListeners) && {
                passive: !1,
                capture: !1
            }, d = !(!o.passiveListener || !r.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!l) return;
            const u = "on" === t ? "addEventListener" : "removeEventListener";
            o.touch ? (l[u](s.start, y, c), l[u](s.move, w, c), l[u](s.end, E, d)) : (l[u](n.start, y, c), a[u](n.move, w, c), a[u](n.end, E, d))
        }

        function S() {
            const {
                scrollbar: t,
                $el: i
            } = e;
            e.params.scrollbar = B(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const s = e.params.scrollbar;
            if (!s.el) return;
            let n = c(s.el);
            e.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el));
            let a = n.find(`.${e.params.scrollbar.dragClass}`);
            0 === a.length && (a = c(`<div class="${e.params.scrollbar.dragClass}"></div>`), n.append(a)), Object.assign(t, {
                $el: n,
                el: n[0],
                $dragEl: a,
                dragEl: a[0]
            }), s.draggable && e.params.scrollbar.el && x("on"), n && n[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }

        function C() {
            e.params.scrollbar.el && x("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }), e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, i("init", (() => {
            S(), v(), f()
        })), i("update resize observerUpdate lock unlock", (() => {
            v()
        })), i("setTranslate", (() => {
            f()
        })), i("setTransition", ((t, i) => {
            ! function(t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(i)
        })), i("enable disable", (() => {
            const {
                $el: t
            } = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        })), i("destroy", (() => {
            C()
        })), Object.assign(e.scrollbar, {
            updateSize: v,
            setTranslate: f,
            init: S,
            destroy: C
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            parallax: {
                enabled: !1
            }
        });
        const s = (t, i) => {
                const {
                    rtl: s
                } = e, n = c(t), a = s ? -1 : 1, r = n.attr("data-swiper-parallax") || "0";
                let o = n.attr("data-swiper-parallax-x"),
                    l = n.attr("data-swiper-parallax-y");
                const d = n.attr("data-swiper-parallax-scale"),
                    u = n.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : e.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * a + "%" : o * i * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", null != u) {
                    const e = u - (u - 1) * (1 - Math.abs(i));
                    n[0].style.opacity = e
                }
                if (null == d) n.transform(`translate3d(${o}, ${l}, 0px)`);
                else {
                    const e = d - (d - 1) * (1 - Math.abs(i));
                    n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`)
                }
            },
            n = () => {
                const {
                    $el: t,
                    slides: i,
                    progress: n,
                    snapGrid: a
                } = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    s(e, n)
                })), i.each(((t, i) => {
                    let r = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(i / 2) - n * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), c(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        s(e, r)
                    }))
                }))
            };
        i("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })), i("init", (() => {
            e.params.parallax.enabled && n()
        })), i("setTranslate", (() => {
            e.params.parallax.enabled && n()
        })), i("setTransition", ((t, i) => {
            e.params.parallax.enabled && ((t = e.params.speed) => {
                const {
                    $el: i
                } = e;
                i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    const i = c(e);
                    let s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (s = 0), i.transition(s)
                }))
            })(i)
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        const n = a();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {
            enabled: !1
        };
        let r, o, l, d = 1,
            u = !1;
        const p = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            f = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let v = 1;

        function g(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                s = e.targetTouches[1].pageX,
                n = e.targetTouches[1].pageY;
            return Math.sqrt((s - t) ** 2 + (n - i) ** 2)
        }

        function b(t) {
            const i = e.support,
                s = e.params.zoom;
            if (o = !1, l = !1, !i.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                o = !0, p.scaleStart = g(t)
            }
            p.$slideEl && p.$slideEl.length || (p.$slideEl = c(t.target).closest(`.${e.params.slideClass}`), 0 === p.$slideEl.length && (p.$slideEl = e.slides.eq(e.activeIndex)), p.$imageEl = p.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), p.$imageWrapEl = p.$imageEl.parent(`.${s.containerClass}`), p.maxRatio = p.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, 0 !== p.$imageWrapEl.length) ? (p.$imageEl && p.$imageEl.transition(0), u = !0) : p.$imageEl = void 0
        }

        function y(t) {
            const i = e.support,
                s = e.params.zoom,
                n = e.zoom;
            if (!i.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                l = !0, p.scaleMove = g(t)
            }
            p.$imageEl && 0 !== p.$imageEl.length ? (i.gestures ? n.scale = t.scale * d : n.scale = p.scaleMove / p.scaleStart * d, n.scale > p.maxRatio && (n.scale = p.maxRatio - 1 + (n.scale - p.maxRatio + 1) ** .5), n.scale < s.minRatio && (n.scale = s.minRatio + 1 - (s.minRatio - n.scale + 1) ** .5), p.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`)) : "gesturechange" === t.type && b(t)
        }

        function w(t) {
            const i = e.device,
                s = e.support,
                n = e.params.zoom,
                a = e.zoom;
            if (!s.gestures) {
                if (!o || !l) return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !i.android) return;
                o = !1, l = !1
            }
            p.$imageEl && 0 !== p.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, p.maxRatio), n.minRatio), p.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`), d = a.scale, u = !1, 1 === a.scale && (p.$slideEl = void 0))
        }

        function E(t) {
            const i = e.zoom;
            if (!p.$imageEl || 0 === p.$imageEl.length) return;
            if (e.allowClick = !1, !m.isTouched || !p.$slideEl) return;
            m.isMoved || (m.width = p.$imageEl[0].offsetWidth, m.height = p.$imageEl[0].offsetHeight, m.startX = h(p.$imageWrapEl[0], "x") || 0, m.startY = h(p.$imageWrapEl[0], "y") || 0, p.slideWidth = p.$slideEl[0].offsetWidth, p.slideHeight = p.$slideEl[0].offsetHeight, p.$imageWrapEl.transition(0));
            const s = m.width * i.scale,
                n = m.height * i.scale;
            if (!(s < p.slideWidth && n < p.slideHeight)) {
                if (m.minX = Math.min(p.slideWidth / 2 - s / 2, 0), m.maxX = -m.minX, m.minY = Math.min(p.slideHeight / 2 - n / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !u) {
                    if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void(m.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void(m.isTouched = !1)
                }
                t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = m.touchesCurrent.x, f.prevPositionY = m.touchesCurrent.y, f.prevTime = Date.now(), p.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }
        }

        function x() {
            const t = e.zoom;
            p.$slideEl && e.previousIndex !== e.activeIndex && (p.$imageEl && p.$imageEl.transform("translate3d(0,0,0) scale(1)"), p.$imageWrapEl && p.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, d = 1, p.$slideEl = void 0, p.$imageEl = void 0, p.$imageWrapEl = void 0)
        }

        function S(t) {
            const i = e.zoom,
                s = e.params.zoom;
            if (p.$slideEl || (t && t.target && (p.$slideEl = c(t.target).closest(`.${e.params.slideClass}`)), p.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? p.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : p.$slideEl = e.slides.eq(e.activeIndex)), p.$imageEl = p.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), p.$imageWrapEl = p.$imageEl.parent(`.${s.containerClass}`)), !p.$imageEl || 0 === p.$imageEl.length || !p.$imageWrapEl || 0 === p.$imageWrapEl.length) return;
            let a, r, o, l, u, h, f, v, g, b, y, w, E, x, S, C, T, _;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), p.$slideEl.addClass(`${s.zoomedSlideClass}`), void 0 === m.touchesStart.x && t ? (a = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (a = m.touchesStart.x, r = m.touchesStart.y), i.scale = p.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, d = p.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, t ? (T = p.$slideEl[0].offsetWidth, _ = p.$slideEl[0].offsetHeight, o = p.$slideEl.offset().left + n.scrollX, l = p.$slideEl.offset().top + n.scrollY, u = o + T / 2 - a, h = l + _ / 2 - r, g = p.$imageEl[0].offsetWidth, b = p.$imageEl[0].offsetHeight, y = g * i.scale, w = b * i.scale, E = Math.min(T / 2 - y / 2, 0), x = Math.min(_ / 2 - w / 2, 0), S = -E, C = -x, f = u * i.scale, v = h * i.scale, f < E && (f = E), f > S && (f = S), v < x && (v = x), v > C && (v = C)) : (f = 0, v = 0), p.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${v}px,0)`), p.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
        }

        function C() {
            const t = e.zoom,
                i = e.params.zoom;
            p.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? p.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : p.$slideEl = e.slides.eq(e.activeIndex), p.$imageEl = p.$slideEl.find(`.${i.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), p.$imageWrapEl = p.$imageEl.parent(`.${i.containerClass}`)), p.$imageEl && 0 !== p.$imageEl.length && p.$imageWrapEl && 0 !== p.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, d = 1, p.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), p.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), p.$slideEl.removeClass(`${i.zoomedSlideClass}`), p.$slideEl = void 0)
        }

        function T(t) {
            const i = e.zoom;
            i.scale && 1 !== i.scale ? C() : S(t)
        }

        function _() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function M() {
            return `.${e.params.slideClass}`
        }

        function $(t) {
            const {
                passiveListener: i
            } = _(), s = M();
            e.$wrapperEl[t]("gesturestart", s, b, i), e.$wrapperEl[t]("gesturechange", s, y, i), e.$wrapperEl[t]("gestureend", s, w, i)
        }

        function I() {
            r || (r = !0, $("on"))
        }

        function O() {
            r && (r = !1, $("off"))
        }

        function L() {
            const t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const i = e.support,
                {
                    passiveListener: s,
                    activeListenerWithCapture: n
                } = _(),
                a = M();
            i.gestures ? (e.$wrapperEl.on(e.touchEvents.start, I, s), e.$wrapperEl.on(e.touchEvents.end, O, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, a, b, s), e.$wrapperEl.on(e.touchEvents.move, a, y, n), e.$wrapperEl.on(e.touchEvents.end, a, w, s), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, a, w, s)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, E, n)
        }

        function P() {
            const t = e.zoom;
            if (!t.enabled) return;
            const i = e.support;
            t.enabled = !1;
            const {
                passiveListener: s,
                activeListenerWithCapture: n
            } = _(), a = M();
            i.gestures ? (e.$wrapperEl.off(e.touchEvents.start, I, s), e.$wrapperEl.off(e.touchEvents.end, O, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, a, b, s), e.$wrapperEl.off(e.touchEvents.move, a, y, n), e.$wrapperEl.off(e.touchEvents.end, a, w, s), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, a, w, s)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, E, n)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: () => v,
            set(e) {
                if (v !== e) {
                    const t = p.$imageEl ? p.$imageEl[0] : void 0,
                        i = p.$slideEl ? p.$slideEl[0] : void 0;
                    s("zoomChange", e, t, i)
                }
                v = e
            }
        }), i("init", (() => {
            e.params.zoom.enabled && L()
        })), i("destroy", (() => {
            P()
        })), i("touchStart", ((t, i) => {
            e.zoom.enabled && function(t) {
                const i = e.device;
                p.$imageEl && 0 !== p.$imageEl.length && (m.isTouched || (i.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(i)
        })), i("touchEnd", ((t, i) => {
            e.zoom.enabled && function() {
                const t = e.zoom;
                if (!p.$imageEl || 0 === p.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void(m.isMoved = !1);
                m.isTouched = !1, m.isMoved = !1;
                let i = 300,
                    s = 300;
                const n = f.x * i,
                    a = m.currentX + n,
                    r = f.y * s,
                    o = m.currentY + r;
                0 !== f.x && (i = Math.abs((a - m.currentX) / f.x)), 0 !== f.y && (s = Math.abs((o - m.currentY) / f.y));
                const l = Math.max(i, s);
                m.currentX = a, m.currentY = o;
                const c = m.width * t.scale,
                    d = m.height * t.scale;
                m.minX = Math.min(p.slideWidth / 2 - c / 2, 0), m.maxX = -m.minX, m.minY = Math.min(p.slideHeight / 2 - d / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), p.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }()
        })), i("doubleTap", ((t, i) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && T(i)
        })), i("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && x()
        })), i("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && x()
        })), Object.assign(e.zoom, {
            enable: L,
            disable: P,
            in: S,
            out: C,
            toggle: T
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), e.lazy = {};
        let n = !1,
            r = !1;

        function o(t, i = !0) {
            const n = e.params.lazy;
            if (void 0 === t) return;
            if (0 === e.slides.length) return;
            const a = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                r = a.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
            !a.hasClass(n.elementClass) || a.hasClass(n.loadedClass) || a.hasClass(n.loadingClass) || r.push(a[0]), 0 !== r.length && r.each((t => {
                const r = c(t);
                r.addClass(n.loadingClass);
                const l = r.attr("data-background"),
                    d = r.attr("data-src"),
                    u = r.attr("data-srcset"),
                    p = r.attr("data-sizes"),
                    h = r.parent("picture");
                e.loadImage(r[0], d || l, u, p, !1, (() => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (l ? (r.css("background-image", `url("${l}")`), r.removeAttr("data-background")) : (u && (r.attr("srcset", u), r.removeAttr("data-srcset")), p && (r.attr("sizes", p), r.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = c(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), d && (r.attr("src", d), r.removeAttr("data-src"))), r.addClass(n.loadedClass).removeClass(n.loadingClass), a.find(`.${n.preloaderClass}`).remove(), e.params.loop && i) {
                            const t = a.attr("data-swiper-slide-index");
                            a.hasClass(e.params.slideDuplicateClass) ? o(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1) : o(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                        }
                        s("lazyImageReady", a[0], r[0]), e.params.autoHeight && e.updateAutoHeight()
                    }
                })), s("lazyImageLoad", a[0], r[0])
            }))
        }

        function l() {
            const {
                $wrapperEl: t,
                params: i,
                slides: s,
                activeIndex: n
            } = e, a = e.virtual && i.virtual.enabled, l = i.lazy;
            let d = i.slidesPerView;

            function u(e) {
                if (a) {
                    if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (s[e]) return !0;
                return !1
            }

            function p(e) {
                return a ? c(e).attr("data-swiper-slide-index") : c(e).index()
            }
            if ("auto" === d && (d = 0), r || (r = !0), e.params.watchSlidesProgress) t.children(`.${i.slideVisibleClass}`).each((e => {
                o(a ? c(e).attr("data-swiper-slide-index") : c(e).index())
            }));
            else if (d > 1)
                for (let e = n; e < n + d; e += 1) u(e) && o(e);
            else o(n);
            if (l.loadPrevNext)
                if (d > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                    const e = l.loadPrevNextAmount,
                        t = d,
                        i = Math.min(n + t + Math.max(e, t), s.length),
                        a = Math.max(n - Math.max(t, e), 0);
                    for (let e = n + d; e < i; e += 1) u(e) && o(e);
                    for (let e = a; e < n; e += 1) u(e) && o(e)
                } else {
                    const e = t.children(`.${i.slideNextClass}`);
                    e.length > 0 && o(p(e));
                    const s = t.children(`.${i.slidePrevClass}`);
                    s.length > 0 && o(p(s))
                }
        }

        function d() {
            const t = a();
            if (!e || e.destroyed) return;
            const i = e.params.lazy.scrollingElement ? c(e.params.lazy.scrollingElement) : c(t),
                s = i[0] === t,
                r = s ? t.innerWidth : i[0].offsetWidth,
                o = s ? t.innerHeight : i[0].offsetHeight,
                u = e.$el.offset(),
                {
                    rtlTranslate: p
                } = e;
            let h = !1;
            p && (u.left -= e.$el[0].scrollLeft);
            const m = [
                [u.left, u.top],
                [u.left + e.width, u.top],
                [u.left, u.top + e.height],
                [u.left + e.width, u.top + e.height]
            ];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (l(), i.off("scroll", d, f)) : n || (n = !0, i.on("scroll", d, f))
        }
        i("beforeInit", (() => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        })), i("init", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? d() : l())
        })), i("scroll", (() => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && l()
        })), i("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? d() : l())
        })), i("transitionStart", (() => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !r) && (e.params.lazy.checkInView ? d() : l())
        })), i("transitionEnd", (() => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? d() : l())
        })), i("slideChange", (() => {
            const {
                lazy: t,
                cssMode: i,
                watchSlidesProgress: s,
                touchReleaseOnEdges: n,
                resistanceRatio: a
            } = e.params;
            t.enabled && (i || s && (n || 0 === a)) && l()
        })), Object.assign(e.lazy, {
            load: l,
            loadInSlide: o
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        function s(e, t) {
            const i = function() {
                let e, t, i;
                return (s, n) => {
                    for (t = -1, e = s.length; e - t > 1;) i = e + t >> 1, s[i] <= n ? t = i : e = i;
                    return e
                }
            }();
            let s, n;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = i(this.x, e), s = n - 1, (e - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
            }, this
        }

        function n() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {
            control: void 0
        }, i("beforeInit", (() => {
            e.controller.control = e.params.controller.control
        })), i("update", (() => {
            n()
        })), i("resize", (() => {
            n()
        })), i("observerUpdate", (() => {
            n()
        })), i("setTranslate", ((t, i, s) => {
            e.controller.control && e.controller.setTranslate(i, s)
        })), i("setTransition", ((t, i, s) => {
            e.controller.control && e.controller.setTransition(i, s)
        })), Object.assign(e.controller, {
            setTranslate: function(t, i) {
                const n = e.controller.control;
                let a, r;
                const o = e.constructor;

                function l(t) {
                    const i = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (function(t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new s(e.slidesGrid, t.slidesGrid) : new s(e.snapGrid, t.snapGrid))
                    }(t), r = -e.controller.spline.interpolate(-i)), r && "container" !== e.params.controller.by || (a = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), r = (i - e.minTranslate()) * a + t.minTranslate()), e.params.controller.inverse && (r = t.maxTranslate() - r), t.updateProgress(r), t.setTranslate(r, e), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                if (Array.isArray(n))
                    for (let e = 0; e < n.length; e += 1) n[e] !== i && n[e] instanceof o && l(n[e]);
                else n instanceof o && i !== n && l(n)
            },
            setTransition: function(t, i) {
                const s = e.constructor,
                    n = e.controller.control;
                let a;

                function r(i) {
                    i.setTransition(t, e), 0 !== t && (i.transitionStart(), i.params.autoHeight && u((() => {
                        i.updateAutoHeight()
                    })), i.$wrapperEl.transitionEnd((() => {
                        n && (i.params.loop && "slide" === e.params.controller.by && i.loopFix(), i.transitionEnd())
                    })))
                }
                if (Array.isArray(n))
                    for (a = 0; a < n.length; a += 1) n[a] !== i && n[a] instanceof s && r(n[a]);
                else n instanceof s && i !== n && r(n)
            }
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let s = null;

        function n(e) {
            const t = s;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function a(e) {
            e.attr("tabIndex", "0")
        }

        function r(e) {
            e.attr("tabIndex", "-1")
        }

        function o(e, t) {
            e.attr("role", t)
        }

        function l(e, t) {
            e.attr("aria-roledescription", t)
        }

        function d(e, t) {
            e.attr("aria-label", t)
        }

        function u(e) {
            e.attr("aria-disabled", !0)
        }

        function p(e) {
            e.attr("aria-disabled", !1)
        }

        function h(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            const i = e.params.a11y,
                s = c(t.target);
            e.navigation && e.navigation.$nextEl && s.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? n(i.lastSlideMessage) : n(i.nextSlideMessage)), e.navigation && e.navigation.$prevEl && s.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? n(i.firstSlideMessage) : n(i.prevSlideMessage)), e.pagination && s.is(G(e.params.pagination.bulletClass)) && s[0].click()
        }

        function m() {
            if (e.params.loop || !e.navigation) return;
            const {
                $nextEl: t,
                $prevEl: i
            } = e.navigation;
            i && i.length > 0 && (e.isBeginning ? (u(i), r(i)) : (p(i), a(i))), t && t.length > 0 && (e.isEnd ? (u(t), r(t)) : (p(t), a(t)))
        }

        function f() {
            return e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length
        }
        const v = (e, t, i) => {
            a(e), "BUTTON" !== e[0].tagName && (o(e, "button"), e.on("keydown", h)), d(e, i),
                function(e, t) {
                    e.attr("aria-controls", t)
                }(e, t)
        };
        i("beforeInit", (() => {
            s = c(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), i("afterInit", (() => {
            e.params.a11y.enabled && (function() {
                const t = e.params.a11y;
                e.$el.append(s);
                const i = e.$el;
                t.containerRoleDescriptionMessage && l(i, t.containerRoleDescriptionMessage), t.containerMessage && d(i, t.containerMessage);
                const n = e.$wrapperEl,
                    a = n.attr("id") || `swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,
                    r = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
                var u;
                u = a, n.attr("id", u),
                    function(e, t) {
                        e.attr("aria-live", t)
                    }(n, r), t.itemRoleDescriptionMessage && l(c(e.slides), t.itemRoleDescriptionMessage), o(c(e.slides), t.slideRole);
                const p = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
                let m, g;
                e.slides.each(((i, s) => {
                    const n = c(i),
                        a = e.params.loop ? parseInt(n.attr("data-swiper-slide-index"), 10) : s;
                    d(n, t.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, p))
                })), e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (g = e.navigation.$prevEl), m && m.length && v(m, a, t.nextSlideMessage), g && g.length && v(g, a, t.prevSlideMessage), f() && e.pagination.$el.on("keydown", G(e.params.pagination.bulletClass), h)
            }(), m())
        })), i("toEdge", (() => {
            e.params.a11y.enabled && m()
        })), i("fromEdge", (() => {
            e.params.a11y.enabled && m()
        })), i("paginationUpdate", (() => {
            e.params.a11y.enabled && function() {
                const t = e.params.a11y;
                f() && e.pagination.bullets.each((i => {
                    const s = c(i);
                    a(s), e.params.pagination.renderBullet || (o(s, "button"), d(s, t.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))
                }))
            }()
        })), i("destroy", (() => {
            e.params.a11y.enabled && function() {
                let t, i;
                s && s.length > 0 && s.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && t.off("keydown", h), i && i.off("keydown", h), f() && e.pagination.$el.off("keydown", G(e.params.pagination.bulletClass), h)
            }()
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let s = !1,
            n = {};
        const r = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            o = e => {
                const t = a();
                let i;
                i = e ? new URL(e) : t.location;
                const s = i.pathname.slice(1).split("/").filter((e => "" !== e)),
                    n = s.length;
                return {
                    key: s[n - 2],
                    value: s[n - 1]
                }
            },
            l = (t, i) => {
                const n = a();
                if (!s || !e.params.history.enabled) return;
                let o;
                o = e.params.url ? new URL(e.params.url) : n.location;
                const l = e.slides.eq(i);
                let c = r(l.attr("data-history"));
                if (e.params.history.root.length > 0) {
                    let i = e.params.history.root;
                    "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), c = `${i}/${t}/${c}`
                } else o.pathname.includes(t) || (c = `${t}/${c}`);
                const d = n.history.state;
                d && d.value === c || (e.params.history.replaceState ? n.history.replaceState({
                    value: c
                }, null, c) : n.history.pushState({
                    value: c
                }, null, c))
            },
            c = (t, i, s) => {
                if (i)
                    for (let n = 0, a = e.slides.length; n < a; n += 1) {
                        const a = e.slides.eq(n);
                        if (r(a.attr("data-history")) === i && !a.hasClass(e.params.slideDuplicateClass)) {
                            const i = a.index();
                            e.slideTo(i, t, s)
                        }
                    } else e.slideTo(0, t, s)
            },
            d = () => {
                n = o(e.params.url), c(e.params.speed, e.paths.value, !1)
            };
        i("init", (() => {
            e.params.history.enabled && (() => {
                const t = a();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    s = !0, n = o(e.params.url), (n.key || n.value) && (c(0, n.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", d))
                }
            })()
        })), i("destroy", (() => {
            e.params.history.enabled && (() => {
                const t = a();
                e.params.history.replaceState || t.removeEventListener("popstate", d)
            })()
        })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
            s && l(e.params.history.key, e.activeIndex)
        })), i("slideChange", (() => {
            s && e.params.cssMode && l(e.params.history.key, e.activeIndex)
        }))
    }, function({
        swiper: e,
        extendParams: t,
        emit: i,
        on: n
    }) {
        let r = !1;
        const o = s(),
            l = a();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const d = () => {
                i("hashChange");
                const t = o.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === i) return;
                    e.slideTo(i)
                }
            },
            u = () => {
                if (r && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && l.history && l.history.replaceState) l.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), i("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex),
                            s = t.attr("data-hash") || t.attr("data-history");
                        o.location.hash = s || "", i("hashSet")
                    }
            };
        n("init", (() => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                r = !0;
                const t = o.location.hash.replace("#", "");
                if (t) {
                    const i = 0;
                    for (let s = 0, n = e.slides.length; s < n; s += 1) {
                        const n = e.slides.eq(s);
                        if ((n.attr("data-hash") || n.attr("data-history")) === t && !n.hasClass(e.params.slideDuplicateClass)) {
                            const t = n.index();
                            e.slideTo(t, i, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && c(l).on("hashchange", d)
            })()
        })), n("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && c(l).off("hashchange", d)
        })), n("transitionEnd _freeModeNoMomentumRelease", (() => {
            r && u()
        })), n("slideChange", (() => {
            r && e.params.cssMode && u()
        }))
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: n
    }) {
        let a;

        function r() {
            const t = e.slides.eq(e.activeIndex);
            let i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(a), a = u((() => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), n("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), n("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), n("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), n("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0), n("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), n("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && r()
            }), i)
        }

        function o() {
            return void 0 === a && !e.autoplay.running && (e.autoplay.running = !0, n("autoplayStart"), r(), !0)
        }

        function l() {
            return !!e.autoplay.running && void 0 !== a && (a && (clearTimeout(a), a = void 0), e.autoplay.running = !1, n("autoplayStop"), !0)
        }

        function c(t) {
            e.autoplay.running && (e.autoplay.paused || (a && clearTimeout(a), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].addEventListener(t, p)
            })) : (e.autoplay.paused = !1, r())))
        }

        function d() {
            const t = s();
            "hidden" === t.visibilityState && e.autoplay.running && c(), "visible" === t.visibilityState && e.autoplay.paused && (r(), e.autoplay.paused = !1)
        }

        function p(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, p)
            })), e.autoplay.paused = !1, e.autoplay.running ? r() : l())
        }

        function h() {
            e.params.autoplay.disableOnInteraction ? l() : c(), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, p)
            }))
        }

        function m() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, r())
        }
        e.autoplay = {
            running: !1,
            paused: !1
        }, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), i("init", (() => {
            e.params.autoplay.enabled && (o(), s().addEventListener("visibilitychange", d), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m)))
        })), i("beforeTransitionStart", ((t, i, s) => {
            e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(i) : l())
        })), i("sliderFirstMove", (() => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : c())
        })), i("touchEnd", (() => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && r()
        })), i("destroy", (() => {
            e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && l(), s().removeEventListener("visibilitychange", d)
        })), Object.assign(e.autoplay, {
            pause: c,
            run: r,
            start: o,
            stop: l
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let s = !1,
            n = !1;

        function a() {
            const t = e.thumbs.swiper;
            if (!t) return;
            const i = t.clickedIndex,
                s = t.clickedSlide;
            if (s && c(s).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let n;
            if (n = t.params.loop ? parseInt(c(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const i = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),
                    s = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();
                n = void 0 === i ? s : void 0 === s ? i : s - t < t - i ? s : i
            }
            e.slideTo(n)
        }

        function r() {
            const {
                thumbs: t
            } = e.params;
            if (s) return !1;
            s = !0;
            const i = e.constructor;
            if (t.swiper instanceof i) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (m(t.swiper)) {
                const s = Object.assign({}, t.swiper);
                Object.assign(s, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), e.thumbs.swiper = new i(s), n = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0
        }

        function o(t) {
            const i = e.thumbs.swiper;
            if (!i) return;
            const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                n = e.params.thumbs.autoScrollOffset,
                a = n && !i.params.loop;
            if (e.realIndex !== i.realIndex || a) {
                let r, o, l = i.activeIndex;
                if (i.params.loop) {
                    i.slides.eq(l).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, l = i.activeIndex);
                    const t = i.slides.eq(l).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                        s = i.slides.eq(l).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    r = void 0 === t ? s : void 0 === s ? t : s - l == l - t ? i.params.slidesPerGroup > 1 ? s : l : s - l < l - t ? s : t, o = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else r = e.realIndex, o = r > e.previousIndex ? "next" : "prev";
                a && (r += "next" === o ? n : -1 * n), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(r) < 0 && (i.params.centeredSlides ? r = r > l ? r - Math.floor(s / 2) + 1 : r + Math.floor(s / 2) - 1 : r > l && i.params.slidesPerGroup, i.slideTo(r, t ? 0 : void 0))
            }
            let r = 1;
            const o = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (r = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.removeClass(o), i.params.loop || i.params.virtual && i.params.virtual.enabled)
                for (let t = 0; t < r; t += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(o);
            else
                for (let t = 0; t < r; t += 1) i.slides.eq(e.realIndex + t).addClass(o)
        }
        e.thumbs = {
            swiper: null
        }, i("beforeInit", (() => {
            const {
                thumbs: t
            } = e.params;
            t && t.swiper && (r(), o(!0))
        })), i("slideChange update resize observerUpdate", (() => {
            e.thumbs.swiper && o()
        })), i("setTransition", ((t, i) => {
            const s = e.thumbs.swiper;
            s && s.setTransition(i)
        })), i("beforeDestroy", (() => {
            const t = e.thumbs.swiper;
            t && n && t && t.destroy()
        })), Object.assign(e.thumbs, {
            init: r,
            update: o
        })
    }, function({
        swiper: e,
        extendParams: t,
        emit: i,
        once: s
    }) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchMove: function() {
                    const {
                        touchEventsData: t,
                        touches: i
                    } = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: i[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }), t.velocities.push({
                        position: i[e.isHorizontal() ? "currentX" : "currentY"],
                        time: p()
                    })
                },
                onTouchEnd: function({
                    currentPos: t
                }) {
                    const {
                        params: n,
                        $wrapperEl: a,
                        rtlTranslate: r,
                        snapGrid: o,
                        touchEventsData: l
                    } = e, c = p() - l.touchStartTime;
                    if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
                    else if (t > -e.maxTranslate()) e.slides.length < o.length ? e.slideTo(o.length - 1) : e.slideTo(e.slides.length - 1);
                    else {
                        if (n.freeMode.momentum) {
                            if (l.velocities.length > 1) {
                                const t = l.velocities.pop(),
                                    i = l.velocities.pop(),
                                    s = t.position - i.position,
                                    a = t.time - i.time;
                                e.velocity = s / a, e.velocity /= 2, Math.abs(e.velocity) < n.freeMode.minimumVelocity && (e.velocity = 0), (a > 150 || p() - t.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= n.freeMode.momentumVelocityRatio, l.velocities.length = 0;
                            let t = 1e3 * n.freeMode.momentumRatio;
                            const c = e.velocity * t;
                            let d = e.translate + c;
                            r && (d = -d);
                            let u, h = !1;
                            const m = 20 * Math.abs(e.velocity) * n.freeMode.momentumBounceRatio;
                            let f;
                            if (d < e.maxTranslate()) n.freeMode.momentumBounce ? (d + e.maxTranslate() < -m && (d = e.maxTranslate() - m), u = e.maxTranslate(), h = !0, l.allowMomentumBounce = !0) : d = e.maxTranslate(), n.loop && n.centeredSlides && (f = !0);
                            else if (d > e.minTranslate()) n.freeMode.momentumBounce ? (d - e.minTranslate() > m && (d = e.minTranslate() + m), u = e.minTranslate(), h = !0, l.allowMomentumBounce = !0) : d = e.minTranslate(), n.loop && n.centeredSlides && (f = !0);
                            else if (n.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < o.length; e += 1)
                                    if (o[e] > -d) {
                                        t = e;
                                        break
                                    } d = Math.abs(o[t] - d) < Math.abs(o[t - 1] - d) || "next" === e.swipeDirection ? o[t] : o[t - 1], d = -d
                            }
                            if (f && s("transitionEnd", (() => {
                                    e.loopFix()
                                })), 0 !== e.velocity) {
                                if (t = r ? Math.abs((-d - e.translate) / e.velocity) : Math.abs((d - e.translate) / e.velocity), n.freeMode.sticky) {
                                    const i = Math.abs((r ? -d : d) - e.translate),
                                        s = e.slidesSizesGrid[e.activeIndex];
                                    t = i < s ? n.speed : i < 2 * s ? 1.5 * n.speed : 2.5 * n.speed
                                }
                            } else if (n.freeMode.sticky) return void e.slideToClosest();
                            n.freeMode.momentumBounce && h ? (e.updateProgress(u), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd((() => {
                                e && !e.destroyed && l.allowMomentumBounce && (i("momentumBounce"), e.setTransition(n.speed), setTimeout((() => {
                                    e.setTranslate(u), a.transitionEnd((() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }))
                                }), 0))
                            }))) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(d), e.setTransition(t), e.setTranslate(d), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd((() => {
                                e && !e.destroyed && e.transitionEnd()
                            })))) : e.updateProgress(d), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else {
                            if (n.freeMode.sticky) return void e.slideToClosest();
                            n.freeMode && i("_freeModeNoMomentumRelease")
                        }(!n.freeMode.momentum || c >= n.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }, function({
        swiper: e,
        extendParams: t
    }) {
        let i, s, n;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), e.grid = {
            initSlides: t => {
                const {
                    slidesPerView: a
                } = e.params, {
                    rows: r,
                    fill: o
                } = e.params.grid;
                s = i / r, n = Math.floor(t / r), i = Math.floor(t / r) === t / r ? t : Math.ceil(t / r) * r, "auto" !== a && "row" === o && (i = Math.max(i, a * r))
            },
            updateSlide: (t, a, r, o) => {
                const {
                    slidesPerGroup: l,
                    spaceBetween: c
                } = e.params, {
                    rows: d,
                    fill: u
                } = e.params.grid;
                let p, h, m;
                if ("row" === u && l > 1) {
                    const e = Math.floor(t / (l * d)),
                        s = t - d * l * e,
                        n = 0 === e ? l : Math.min(Math.ceil((r - e * d * l) / d), l);
                    m = Math.floor(s / n), h = s - m * n + e * l, p = h + m * i / d, a.css({
                        "-webkit-order": p,
                        order: p
                    })
                } else "column" === u ? (h = Math.floor(t / d), m = t - h * d, (h > n || h === n && m === d - 1) && (m += 1, m >= d && (m = 0, h += 1))) : (m = Math.floor(t / s), h = t - m * s);
                a.css(o("margin-top"), 0 !== m ? c && `${c}px` : "")
            },
            updateWrapperSize: (t, s, n) => {
                const {
                    spaceBetween: a,
                    centeredSlides: r,
                    roundLengths: o
                } = e.params, {
                    rows: l
                } = e.params.grid;
                if (e.virtualSize = (t + a) * i, e.virtualSize = Math.ceil(e.virtualSize / l) - a, e.$wrapperEl.css({
                        [n("width")]: `${e.virtualSize+a}px`
                    }), r) {
                    s.splice(0, s.length);
                    const t = [];
                    for (let i = 0; i < s.length; i += 1) {
                        let n = s[i];
                        o && (n = Math.floor(n)), s[i] < e.virtualSize + s[0] && t.push(n)
                    }
                    s.push(...t)
                }
            }
        }
    }, function({
        swiper: e
    }) {
        Object.assign(e, {
            appendSlide: R.bind(e),
            prependSlide: q.bind(e),
            addSlide: V.bind(e),
            removeSlide: X.bind(e),
            removeAllSlides: Y.bind(e)
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), W({
            effect: "fade",
            swiper: e,
            on: i,
            setTranslate: () => {
                const {
                    slides: t
                } = e, i = e.params.fadeEffect;
                for (let s = 0; s < t.length; s += 1) {
                    const t = e.slides.eq(s);
                    let n = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (n -= e.translate);
                    let a = 0;
                    e.isHorizontal() || (a = n, n = 0);
                    const r = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    K(i, t).css({
                        opacity: r
                    }).transform(`translate3d(${n}px, ${a}px, 0px)`)
                }
            },
            setTransition: t => {
                const {
                    transformEl: i
                } = e.params.fadeEffect;
                (i ? e.slides.find(i) : e.slides).transition(t), U({
                    swiper: e,
                    duration: t,
                    transformEl: i,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }), W({
            effect: "cube",
            swiper: e,
            on: i,
            setTranslate: () => {
                const {
                    $el: t,
                    $wrapperEl: i,
                    slides: s,
                    width: n,
                    height: a,
                    rtlTranslate: r,
                    size: o,
                    browser: l
                } = e, d = e.params.cubeEffect, u = e.isHorizontal(), p = e.virtual && e.params.virtual.enabled;
                let h, m = 0;
                d.shadow && (u ? (h = i.find(".swiper-cube-shadow"), 0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'), i.append(h)), h.css({
                    height: `${n}px`
                })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = c('<div class="swiper-cube-shadow"></div>'), t.append(h))));
                for (let e = 0; e < s.length; e += 1) {
                    const t = s.eq(e);
                    let i = e;
                    p && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let n = 90 * i,
                        a = Math.floor(n / 360);
                    r && (n = -n, a = Math.floor(-n / 360));
                    const l = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0,
                        f = 0,
                        v = 0;
                    i % 4 == 0 ? (h = 4 * -a * o, v = 0) : (i - 1) % 4 == 0 ? (h = 0, v = 4 * -a * o) : (i - 2) % 4 == 0 ? (h = o + 4 * a * o, v = o) : (i - 3) % 4 == 0 && (h = -o, v = 3 * o + 4 * o * a), r && (h = -h), u || (f = h, h = 0);
                    const g = `rotateX(${u?0:-n}deg) rotateY(${u?n:0}deg) translate3d(${h}px, ${f}px, ${v}px)`;
                    if (l <= 1 && l > -1 && (m = 90 * i + 90 * l, r && (m = 90 * -i - 90 * l)), t.transform(g), d.slideShadows) {
                        let e = u ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            i = u ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = c(`<div class="swiper-slide-shadow-${u?"left":"top"}"></div>`), t.append(e)), 0 === i.length && (i = c(`<div class="swiper-slide-shadow-${u?"right":"bottom"}"></div>`), t.append(i)), e.length && (e[0].style.opacity = Math.max(-l, 0)), i.length && (i[0].style.opacity = Math.max(l, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": `50% 50% -${o/2}px`,
                        "transform-origin": `50% 50% -${o/2}px`
                    }), d.shadow)
                    if (u) h.transform(`translate3d(0px, ${n/2+d.shadowOffset}px, ${-n/2}px) rotateX(90deg) rotateZ(0deg) scale(${d.shadowScale})`);
                    else {
                        const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            i = d.shadowScale,
                            s = d.shadowScale / t,
                            n = d.shadowOffset;
                        h.transform(`scale3d(${i}, 1, ${s}) translate3d(0px, ${a/2+n}px, ${-a/2/s}px) rotateX(-90deg)`)
                    } const f = l.isSafari || l.isWebView ? -o / 2 : 0;
                i.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal()?0:m}deg) rotateY(${e.isHorizontal()?-m:0}deg)`)
            },
            setTransition: t => {
                const {
                    $el: i,
                    slides: s
                } = e;
                s.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && i.find(".swiper-cube-shadow").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }), W({
            effect: "flip",
            swiper: e,
            on: i,
            setTranslate: () => {
                const {
                    slides: t,
                    rtlTranslate: i
                } = e, s = e.params.flipEffect;
                for (let n = 0; n < t.length; n += 1) {
                    const a = t.eq(n);
                    let r = a[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    const o = a[0].swiperSlideOffset;
                    let l = -180 * r,
                        c = 0,
                        d = e.params.cssMode ? -o - e.translate : -o,
                        u = 0;
                    if (e.isHorizontal() ? i && (l = -l) : (u = d, d = 0, c = -l, l = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, s.slideShadows) {
                        let t = e.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            i = e.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = Q(s, a, e.isHorizontal() ? "left" : "top")), 0 === i.length && (i = Q(s, a, e.isHorizontal() ? "right" : "bottom")), t.length && (t[0].style.opacity = Math.max(-r, 0)), i.length && (i[0].style.opacity = Math.max(r, 0))
                    }
                    const p = `translate3d(${d}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${l}deg)`;
                    K(s, a).transform(p)
                }
            },
            setTransition: t => {
                const {
                    transformEl: i
                } = e.params.flipEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), U({
                    swiper: e,
                    duration: t,
                    transformEl: i
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), W({
            effect: "coverflow",
            swiper: e,
            on: i,
            setTranslate: () => {
                const {
                    width: t,
                    height: i,
                    slides: s,
                    slidesSizesGrid: n
                } = e, a = e.params.coverflowEffect, r = e.isHorizontal(), o = e.translate, l = r ? t / 2 - o : i / 2 - o, c = r ? a.rotate : -a.rotate, d = a.depth;
                for (let e = 0, t = s.length; e < t; e += 1) {
                    const t = s.eq(e),
                        i = n[e],
                        o = (l - t[0].swiperSlideOffset - i / 2) / i * a.modifier;
                    let u = r ? c * o : 0,
                        p = r ? 0 : c * o,
                        h = -d * Math.abs(o),
                        m = a.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(a.stretch) / 100 * i);
                    let f = r ? 0 : m * o,
                        v = r ? m * o : 0,
                        g = 1 - (1 - a.scale) * Math.abs(o);
                    Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(g) < .001 && (g = 0);
                    const b = `translate3d(${v}px,${f}px,${h}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${g})`;
                    if (K(a, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(o)), a.slideShadows) {
                        let e = r ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            i = r ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = Q(a, t, r ? "left" : "top")), 0 === i.length && (i = Q(a, t, r ? "right" : "bottom")), e.length && (e[0].style.opacity = o > 0 ? o : 0), i.length && (i[0].style.opacity = -o > 0 ? -o : 0)
                    }
                }
            },
            setTransition: t => {
                const {
                    transformEl: i
                } = e.params.coverflowEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const s = e => "string" == typeof e ? e : `${e}px`;
        W({
            effect: "creative",
            swiper: e,
            on: i,
            setTranslate: () => {
                const {
                    slides: t
                } = e, i = e.params.creativeEffect, {
                    progressMultiplier: n
                } = i;
                for (let a = 0; a < t.length; a += 1) {
                    const r = t.eq(a),
                        o = r[0].progress,
                        l = Math.min(Math.max(r[0].progress, -i.limitProgress), i.limitProgress),
                        c = r[0].swiperSlideOffset,
                        d = [e.params.cssMode ? -c - e.translate : -c, 0, 0],
                        u = [0, 0, 0];
                    let p = !1;
                    e.isHorizontal() || (d[1] = d[0], d[0] = 0);
                    let h = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    l < 0 ? (h = i.next, p = !0) : l > 0 && (h = i.prev, p = !0), d.forEach(((e, t) => {
                        d[t] = `calc(${e}px + (${s(h.translate[t])} * ${Math.abs(l*n)}))`
                    })), u.forEach(((e, t) => {
                        u[t] = h.rotate[t] * Math.abs(l * n)
                    })), r[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
                    const m = d.join(", "),
                        f = `rotateX(${u[0]}deg) rotateY(${u[1]}deg) rotateZ(${u[2]}deg)`,
                        v = l < 0 ? `scale(${1+(1-h.scale)*l*n})` : `scale(${1-(1-h.scale)*l*n})`,
                        g = l < 0 ? 1 + (1 - h.opacity) * l * n : 1 - (1 - h.opacity) * l * n,
                        b = `translate3d(${m}) ${f} ${v}`;
                    if (p && h.shadow || !p) {
                        let e = r.children(".swiper-slide-shadow");
                        if (0 === e.length && h.shadow && (e = Q(i, r)), e.length) {
                            const t = i.shadowPerProgress ? l * (1 / i.limitProgress) : l;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = K(i, r);
                    y.transform(b).css({
                        opacity: g
                    }), h.origin && y.css("transform-origin", h.origin)
                }
            },
            setTransition: t => {
                const {
                    transformEl: i
                } = e.params.creativeEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), U({
                    swiper: e,
                    duration: t,
                    transformEl: i,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }), W({
            effect: "cards",
            swiper: e,
            on: i,
            setTranslate: () => {
                const {
                    slides: t,
                    activeIndex: i
                } = e, s = e.params.cardsEffect, {
                    startTranslate: n,
                    isTouched: a
                } = e.touchEventsData, r = e.translate;
                for (let o = 0; o < t.length; o += 1) {
                    const l = t.eq(o),
                        c = l[0].progress,
                        d = Math.min(Math.max(c, -4), 4);
                    let u = l[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (u -= t[0].swiperSlideOffset);
                    let p = e.params.cssMode ? -u - e.translate : -u,
                        h = 0;
                    const m = -100 * Math.abs(d);
                    let f = 1,
                        v = -2 * d,
                        g = 8 - .75 * Math.abs(d);
                    const b = (o === i || o === i - 1) && d > 0 && d < 1 && (a || e.params.cssMode) && r < n,
                        y = (o === i || o === i + 1) && d < 0 && d > -1 && (a || e.params.cssMode) && r > n;
                    if (b || y) {
                        const e = (1 - Math.abs((Math.abs(d) - .5) / .5)) ** .5;
                        v += -28 * d * e, f += -.5 * e, g += 96 * e, h = -25 * e * Math.abs(d) + "%"
                    }
                    if (p = d < 0 ? `calc(${p}px + (${g*Math.abs(d)}%))` : d > 0 ? `calc(${p}px + (-${g*Math.abs(d)}%))` : `${p}px`, !e.isHorizontal()) {
                        const e = h;
                        h = p, p = e
                    }
                    const w = `\n        translate3d(${p}, ${h}, ${m}px)\n        rotateZ(${v}deg)\n        scale(${d<0?""+(1+(1-f)*d):""+(1-(1-f)*d)})\n      `;
                    if (s.slideShadows) {
                        let e = l.find(".swiper-slide-shadow");
                        0 === e.length && (e = Q(s, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(d) - .5) / .5, 0), 1))
                    }
                    l[0].style.zIndex = -Math.abs(Math.round(c)) + t.length, K(s, l).transform(w)
                }
            },
            setTransition: t => {
                const {
                    transformEl: i
                } = e.params.cardsEffect;
                (i ? e.slides.find(i) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), U({
                    swiper: e,
                    duration: t,
                    transformEl: i
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }];
    return H.use(J), H
}));