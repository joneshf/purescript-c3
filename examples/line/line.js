var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    var Unit = function (value0) {
        return {
            ctor: "Prelude.Unit", 
            values: [ value0 ]
        };
    };
    var LT = {
        ctor: "Prelude.LT", 
        values: [  ]
    };
    var GT = {
        ctor: "Prelude.GT", 
        values: [  ]
    };
    var EQ = {
        ctor: "Prelude.EQ", 
        values: [  ]
    };
    function cons(e) {  return function (l) {    return [e].concat(l);  };};
    function showStringImpl(s) {  return JSON.stringify(s);};
    function showNumberImpl(n) {  return n.toString();};
    function showArrayImpl (f) {  return function (xs) {    var ss = [];    for (var i = 0, l = xs.length; i < l; i++) {      ss[i] = f(xs[i]);    }    return '[' + ss.join(',') + ']';  };};
    function numAdd(n1) {  return function(n2) {    return n1 + n2;  };};
    function numSub(n1) {  return function(n2) {    return n1 - n2;  };};
    function numMul(n1) {  return function(n2) {    return n1 * n2;  };};
    function numDiv(n1) {  return function(n2) {    return n1 / n2;  };};
    function numMod(n1) {  return function(n2) {    return n1 % n2;  };};
    function numNegate(n) {  return -n;};
    function refEq(r1) {  return function(r2) {    return r1 === r2;  };};
    function refIneq(r1) {  return function(r2) {    return r1 !== r2;  };};
    function unsafeCompare(n1) {  return function(n2) {    return n1 < n2 ? LT : n1 > n2 ? GT : EQ;  };};
    function numShl(n1) {  return function(n2) {    return n1 << n2;  };};
    function numShr(n1) {  return function(n2) {    return n1 >> n2;  };};
    function numZshr(n1) {  return function(n2) {    return n1 >>> n2;  };};
    function numAnd(n1) {  return function(n2) {    return n1 & n2;  };};
    function numOr(n1) {  return function(n2) {    return n1 | n2;  };};
    function numXor(n1) {  return function(n2) {    return n1 ^ n2;  };};
    function numComplement(n) {  return ~n;};
    function boolAnd(b1) {  return function(b2) {    return b1 && b2;  };};
    function boolOr(b1) {  return function(b2) {    return b1 || b2;  };};
    function boolNot(b) {  return !b;};
    function concatString(s1) {  return function(s2) {    return s1 + s2;  };};
    var $bar$bar = function (dict) {
        return dict["||"];
    };
    var $bar = function (dict) {
        return dict["|"];
    };
    var $up = function (dict) {
        return dict["^"];
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$bar$greater = function (dict) {
        return dict["<|>"];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    var $colon = cons;
    var $div$eq = function (dict) {
        return dict["/="];
    };
    var $div = function (dict) {
        return dict["/"];
    };
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_1) {
        return $less$greater(__dict_Semigroup_1);
    };
    var $plus = function (dict) {
        return dict["+"];
    };
    var $times = function (dict) {
        return dict["*"];
    };
    var $amp$amp = function (dict) {
        return dict["&&"];
    };
    var $amp = function (dict) {
        return dict["&"];
    };
    var $percent = function (dict) {
        return dict["%"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var $hash = function (x) {
        return function (f) {
            return f(x);
        };
    };
    var zshr = function (dict) {
        return dict.zshr;
    };
    var unit = Unit({});
    var shr = function (dict) {
        return dict.shr;
    };
    var showUnit = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_7) {
                return "Unit {}";
            }
        };
    };
    var showString = function (_) {
        return {
            "__superclasses": {}, 
            show: showStringImpl
        };
    };
    var showOrdering = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_17) {
                if (_17.ctor === "Prelude.LT") {
                    return "LT";
                };
                if (_17.ctor === "Prelude.GT") {
                    return "GT";
                };
                if (_17.ctor === "Prelude.EQ") {
                    return "EQ";
                };
                throw "Failed pattern match";
            }
        };
    };
    var showNumber = function (_) {
        return {
            "__superclasses": {}, 
            show: showNumberImpl
        };
    };
    var showBoolean = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_8) {
                if (_8) {
                    return "true";
                };
                if (!_8) {
                    return "false";
                };
                throw "Failed pattern match";
            }
        };
    };
    var show = function (dict) {
        return dict.show;
    };
    var showArray = function (__dict_Show_2) {
        return {
            "__superclasses": {}, 
            show: showArrayImpl(show(__dict_Show_2))
        };
    };
    var shl = function (dict) {
        return dict.shl;
    };
    var semigroupoidArr = function (_) {
        return {
            "__superclasses": {}, 
            "<<<": function (f) {
                return function (g) {
                    return function (x) {
                        return f(g(x));
                    };
                };
            }
        };
    };
    var semigroupUnit = function (_) {
        return {
            "__superclasses": {}, 
            "<>": function (_24) {
                return function (_25) {
                    return Unit({});
                };
            }
        };
    };
    var semigroupString = function (_) {
        return {
            "__superclasses": {}, 
            "<>": concatString
        };
    };
    var semigroupArr = function (__dict_Semigroup_3) {
        return {
            "__superclasses": {}, 
            "<>": function (f) {
                return function (g) {
                    return function (x) {
                        return $less$greater(__dict_Semigroup_3)(f(x))(g(x));
                    };
                };
            }
        };
    };
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_4) {
        return pure(__dict_Monad_4["__superclasses"]["Prelude.Applicative_0"]({}));
    };
    var numNumber = function (_) {
        return {
            "__superclasses": {}, 
            "+": numAdd, 
            "-": numSub, 
            "*": numMul, 
            "/": numDiv, 
            "%": numMod, 
            negate: numNegate
        };
    };
    var not = function (dict) {
        return dict.not;
    };
    var negate = function (dict) {
        return dict.negate;
    };
    var liftM1 = function (__dict_Monad_5) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_5["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_0) {
                    return $$return(__dict_Monad_5)(f(_0));
                });
            };
        };
    };
    var liftA1 = function (__dict_Applicative_6) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_6["__superclasses"]["Prelude.Apply_0"]({}))(pure(__dict_Applicative_6)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var functorArr = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": $less$less$less(semigroupoidArr({}))
        };
    };
    var flip = function (f) {
        return function (b) {
            return function (a) {
                return f(a)(b);
            };
        };
    };
    var eqUnit = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_9) {
                return function (_10) {
                    return true;
                };
            }, 
            "/=": function (_11) {
                return function (_12) {
                    return false;
                };
            }
        };
    };
    var ordUnit = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqUnit({});
                }
            }, 
            compare: function (_18) {
                return function (_19) {
                    return EQ;
                };
            }
        };
    };
    var eqString = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordString = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqString({});
                }
            }, 
            compare: unsafeCompare
        };
    };
    var eqNumber = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordNumber = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqNumber({});
                }
            }, 
            compare: unsafeCompare
        };
    };
    var eqBoolean = function (_) {
        return {
            "__superclasses": {}, 
            "==": refEq, 
            "/=": refIneq
        };
    };
    var ordBoolean = function (_) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqBoolean({});
                }
            }, 
            compare: function (_20) {
                return function (_21) {
                    if (!_20) {
                        if (!_21) {
                            return EQ;
                        };
                    };
                    if (!_20) {
                        if (_21) {
                            return LT;
                        };
                    };
                    if (_20) {
                        if (_21) {
                            return EQ;
                        };
                    };
                    if (_20) {
                        if (!_21) {
                            return GT;
                        };
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var empty = function (dict) {
        return dict.empty;
    };
    var $$const = function (_3) {
        return function (_4) {
            return _3;
        };
    };
    var complement = function (dict) {
        return dict.complement;
    };
    var compare = function (dict) {
        return dict.compare;
    };
    var $less = function (__dict_Ord_9) {
        return function (a1) {
            return function (a2) {
                return (function (_55) {
                    if (_55.ctor === "Prelude.LT") {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_9)(a1)(a2));
            };
        };
    };
    var $less$eq = function (__dict_Ord_10) {
        return function (a1) {
            return function (a2) {
                return (function (_56) {
                    if (_56.ctor === "Prelude.GT") {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_10)(a1)(a2));
            };
        };
    };
    var $greater = function (__dict_Ord_11) {
        return function (a1) {
            return function (a2) {
                return (function (_57) {
                    if (_57.ctor === "Prelude.GT") {
                        return true;
                    };
                    return false;
                })(compare(__dict_Ord_11)(a1)(a2));
            };
        };
    };
    var $greater$eq = function (__dict_Ord_12) {
        return function (a1) {
            return function (a2) {
                return (function (_58) {
                    if (_58.ctor === "Prelude.LT") {
                        return false;
                    };
                    return true;
                })(compare(__dict_Ord_12)(a1)(a2));
            };
        };
    };
    var categoryArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Semigroupoid_0": function (_) {
                    return semigroupoidArr({});
                }
            }, 
            id: function (x) {
                return x;
            }
        };
    };
    var boolLikeBoolean = function (_) {
        return {
            "__superclasses": {}, 
            "&&": boolAnd, 
            "||": boolOr, 
            not: boolNot
        };
    };
    var eqArray = function (__dict_Eq_7) {
        return {
            "__superclasses": {}, 
            "==": function (_13) {
                return function (_14) {
                    if (_13.length === 0) {
                        if (_14.length === 0) {
                            return true;
                        };
                    };
                    if (_13.length > 0) {
                        var _64 = _13.slice(1);
                        if (_14.length > 0) {
                            var _62 = _14.slice(1);
                            return $amp$amp(boolLikeBoolean({}))($eq$eq(__dict_Eq_7)(_13[0])(_14[0]))($eq$eq(eqArray(__dict_Eq_7))(_64)(_62));
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (xs) {
                return function (ys) {
                    return not(boolLikeBoolean({}))($eq$eq(eqArray(__dict_Eq_7))(xs)(ys));
                };
            }
        };
    };
    var ordArray = function (__dict_Ord_8) {
        return {
            "__superclasses": {
                "Prelude.Eq_0": function (_) {
                    return eqArray(__dict_Ord_8["__superclasses"]["Prelude.Eq_0"]({}));
                }
            }, 
            compare: function (_22) {
                return function (_23) {
                    if (_22.length === 0) {
                        if (_23.length === 0) {
                            return EQ;
                        };
                    };
                    if (_22.length === 0) {
                        return LT;
                    };
                    if (_23.length === 0) {
                        return GT;
                    };
                    if (_22.length > 0) {
                        var _71 = _22.slice(1);
                        if (_23.length > 0) {
                            var _69 = _23.slice(1);
                            return (function (_67) {
                                if (_67.ctor === "Prelude.EQ") {
                                    return compare(ordArray(__dict_Ord_8))(_71)(_69);
                                };
                                return _67;
                            })(compare(__dict_Ord_8)(_22[0])(_23[0]));
                        };
                    };
                    throw "Failed pattern match";
                };
            }
        };
    };
    var eqOrdering = function (_) {
        return {
            "__superclasses": {}, 
            "==": function (_15) {
                return function (_16) {
                    if (_15.ctor === "Prelude.LT") {
                        if (_16.ctor === "Prelude.LT") {
                            return true;
                        };
                    };
                    if (_15.ctor === "Prelude.GT") {
                        if (_16.ctor === "Prelude.GT") {
                            return true;
                        };
                    };
                    if (_15.ctor === "Prelude.EQ") {
                        if (_16.ctor === "Prelude.EQ") {
                            return true;
                        };
                    };
                    return false;
                };
            }, 
            "/=": function (x) {
                return function (y) {
                    return not(boolLikeBoolean({}))($eq$eq(eqOrdering({}))(x)(y));
                };
            }
        };
    };
    var bitsNumber = function (_) {
        return {
            "__superclasses": {}, 
            "&": numAnd, 
            "|": numOr, 
            "^": numXor, 
            shl: numShl, 
            shr: numShr, 
            zshr: numZshr, 
            complement: numComplement
        };
    };
    var asTypeOf = function (_5) {
        return function (_6) {
            return _5;
        };
    };
    var applyArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorArr({});
                }
            }, 
            "<*>": function (f) {
                return function (g) {
                    return function (x) {
                        return f(x)(g(x));
                    };
                };
            }
        };
    };
    var bindArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArr({});
                }
            }, 
            ">>=": function (m) {
                return function (f) {
                    return function (x) {
                        return f(m(x))(x);
                    };
                };
            }
        };
    };
    var applicativeArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyArr({});
                }
            }, 
            pure: $$const
        };
    };
    var monadArr = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeArr({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindArr({});
                }
            }
        };
    };
    var ap = function (__dict_Monad_13) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_13["__superclasses"]["Prelude.Bind_1"]({}))(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_13["__superclasses"]["Prelude.Bind_1"]({}))(a)(function (_1) {
                        return $$return(__dict_Monad_13)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        LT: LT, 
        GT: GT, 
        EQ: EQ, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        not: not, 
        "||": $bar$bar, 
        "&&": $amp$amp, 
        complement: complement, 
        zshr: zshr, 
        shr: shr, 
        shl: shl, 
        "^": $up, 
        "|": $bar, 
        "&": $amp, 
        ">=": $greater$eq, 
        "<=": $less$eq, 
        ">": $greater, 
        "<": $less, 
        compare: compare, 
        refIneq: refIneq, 
        refEq: refEq, 
        "/=": $div$eq, 
        "==": $eq$eq, 
        negate: negate, 
        "%": $percent, 
        "/": $div, 
        "*": $times, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        liftM1: liftM1, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        "<|>": $less$bar$greater, 
        empty: empty, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "<$>": $less$dollar$greater, 
        show: show, 
        cons: cons, 
        ":": $colon, 
        "#": $hash, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        asTypeOf: asTypeOf, 
        "const": $$const, 
        flip: flip, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showUnit: showUnit, 
        showString: showString, 
        showBoolean: showBoolean, 
        showNumber: showNumber, 
        showArray: showArray, 
        functorArr: functorArr, 
        applyArr: applyArr, 
        applicativeArr: applicativeArr, 
        bindArr: bindArr, 
        monadArr: monadArr, 
        numNumber: numNumber, 
        eqUnit: eqUnit, 
        eqString: eqString, 
        eqNumber: eqNumber, 
        eqBoolean: eqBoolean, 
        eqArray: eqArray, 
        eqOrdering: eqOrdering, 
        showOrdering: showOrdering, 
        ordUnit: ordUnit, 
        ordBoolean: ordBoolean, 
        ordNumber: ordNumber, 
        ordString: ordString, 
        ordArray: ordArray, 
        bitsNumber: bitsNumber, 
        boolLikeBoolean: boolLikeBoolean, 
        semigroupUnit: semigroupUnit, 
        semigroupString: semigroupString, 
        semigroupArr: semigroupArr
    };
})();
var PS = PS || {};
PS.Prelude_Unsafe = (function () {
    "use strict";
    function unsafeIndex(xs) {  return function(n) {    return xs[n];  };};
    return {
        unsafeIndex: unsafeIndex
    };
})();
var PS = PS || {};
PS.Data_Function = (function () {
    "use strict";
    function mkFn0(f) {  return function() {    return f({});  };};
    function mkFn1(f) {  return function(a) {    return f(a);  };};
    function mkFn2(f) {  return function(a, b) {    return f(a)(b);  };};
    function mkFn3(f) {  return function(a, b, c) {    return f(a)(b)(c);  };};
    function mkFn4(f) {  return function(a, b, c, d) {    return f(a)(b)(c)(d);  };};
    function mkFn5(f) {  return function(a, b, c, d, e) {    return f(a)(b)(c)(d)(e);  };};
    function runFn0(f) {  return f();};
    function runFn1(f) {  return function(a) {    return f(a);  };};
    function runFn2(f) {  return function(a) {    return function(b) {      return f(a, b);    };  };};
    function runFn3(f) {  return function(a) {    return function(b) {      return function(c) {        return f(a, b, c);      };    };  };};
    function runFn4(f) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return f(a, b, c, d);        };      };    };  };};
    function runFn5(f) {  return function(a) {    return function(b) {      return function(c) {        return function(d) {          return function(e) {            return f(a, b, c, d, e);          };        };      };    };  };};
    var on = function (f) {
        return function (g) {
            return function (x) {
                return function (y) {
                    return f(g(x))(g(y));
                };
            };
        };
    };
    return {
        runFn5: runFn5, 
        runFn4: runFn4, 
        runFn3: runFn3, 
        runFn2: runFn2, 
        runFn1: runFn1, 
        runFn0: runFn0, 
        mkFn5: mkFn5, 
        mkFn4: mkFn4, 
        mkFn3: mkFn3, 
        mkFn2: mkFn2, 
        mkFn1: mkFn1, 
        mkFn0: mkFn0, 
        on: on
    };
})();
var PS = PS || {};
PS.Data_Eq = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Ref = function (value0) {
        return {
            ctor: "Data.Eq.Ref", 
            values: [ value0 ]
        };
    };
    var liftRef = function (_26) {
        return function (_27) {
            return function (_28) {
                return _26(_27.values[0])(_28.values[0]);
            };
        };
    };
    var eqRef = function (_) {
        return {
            "__superclasses": {}, 
            "==": liftRef(Prelude.refEq), 
            "/=": liftRef(Prelude.refIneq)
        };
    };
    return {
        Ref: Ref, 
        liftRef: liftRef, 
        eqRef: eqRef
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function returnE(a) {  return function() {    return a;  };};
    function bindE(a) {  return function(f) {    return function() {      return f(a())();    };  };};
    function runPure(f) {  return f();};
    function untilE(f) {  return function() {    while (!f()) { }    return {};  };};
    function whileE(f) {  return function(a) {    return function() {      while (f()) {        a();      }      return {};    };  };};
    function forE(lo) {  return function(hi) {    return function(f) {      return function() {        for (var i = lo; i < hi; i++) {          f(i)();        }      };    };  };};
    function foreachE(as) {  return function(f) {    for (var i = 0; i < as.length; i++) {      f(as[i])();    }  };};
    var applicativeEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            pure: returnE
        };
    };
    var applyEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Functor_0": function (_) {
                    return functorEff({});
                }
            }, 
            "<*>": Prelude.ap(monadEff({}))
        };
    };
    var functorEff = function (_) {
        return {
            "__superclasses": {}, 
            "<$>": Prelude.liftA1(applicativeEff({}))
        };
    };
    var monadEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Applicative_0": function (_) {
                    return applicativeEff({});
                }, 
                "Prelude.Bind_1": function (_) {
                    return bindEff({});
                }
            }
        };
    };
    var bindEff = function (_) {
        return {
            "__superclasses": {
                "Prelude.Apply_0": function (_) {
                    return applyEff({});
                }
            }, 
            ">>=": bindE
        };
    };
    return {
        foreachE: foreachE, 
        forE: forE, 
        whileE: whileE, 
        untilE: untilE, 
        runPure: runPure, 
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    function unsafeInterleaveEff(f) {  return f;};
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Control_Monad_ST = (function () {
    "use strict";
    function newSTRef(val) {  return function () {    return { value: val };  };};
    function readSTRef(ref) {  return function() {    return ref.value;  };};
    function modifySTRef(ref) {  return function(f) {    return function() {      return ref.value = f(ref.value);    };  };};
    function writeSTRef(ref) {  return function(a) {    return function() {      return ref.value = a;    };  };};
    function newSTArray(len) {  return function(a) {    return function() {      var arr = [];      for (var i = 0; i < len; i++) {        arr[i] = a;      };      return arr;    };  };};
    function peekSTArray(arr) {  return function(i) {    return function() {      return arr[i];    };  };};
    function pokeSTArray(arr) {  return function(i) {    return function(a) {      return function() {        return arr[i] = a;      };    };  };};
    function runST(f) {  return f;};
    function runSTArray(f) {  return f;};
    return {
        runSTArray: runSTArray, 
        runST: runST, 
        pokeSTArray: pokeSTArray, 
        peekSTArray: peekSTArray, 
        newSTArray: newSTArray, 
        writeSTRef: writeSTRef, 
        modifySTRef: modifySTRef, 
        readSTRef: readSTRef, 
        newSTRef: newSTRef
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    function trace(s) {  return function() {    console.log(s);    return {};  };};
    var print = function (__dict_Show_14) {
        return function (o) {
            return trace(Prelude.show(__dict_Show_14)(o));
        };
    };
    return {
        print: print, 
        trace: trace
    };
})();
var PS = PS || {};
PS.Graphics_C3 = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Bar = {
        ctor: "Graphics.C3.Bar", 
        values: [  ]
    };
    var Line = {
        ctor: "Graphics.C3.Line", 
        values: [  ]
    };
    var Pie = {
        ctor: "Graphics.C3.Pie", 
        values: [  ]
    };
    function generate(opts) {  return function() {    return c3.generate(actualOptions(opts));  }};
    function actualOptions(opts) {  var obj = {};  obj.bindto = opts.bindto;  obj.data = {    columns: opts.c3Data.map(function(d) {      return [d.name].concat(d.values);    }),    types: c3Types(opts)  };  return obj;};
    function c3Types(opts) {  var obj = {};  opts.c3Data.forEach(function(d) {    obj[d.name] = showC3Type_(d.c3Type);  });  return obj;};
    var showC3Type = function (_) {
        return {
            "__superclasses": {}, 
            show: function (_29) {
                if (_29.ctor === "Graphics.C3.Bar") {
                    return "bar";
                };
                if (_29.ctor === "Graphics.C3.Line") {
                    return "line";
                };
                if (_29.ctor === "Graphics.C3.Pie") {
                    return "pie";
                };
                throw "Failed pattern match";
            }
        };
    };
    var showC3Type_ = Prelude.show(showC3Type({}));
    var options = {
        bindto: "", 
        c3Data: [  ]
    };
    return {
        Bar: Bar, 
        Line: Line, 
        Pie: Pie, 
        options: options, 
        generate: generate, 
        showC3Type: showC3Type
    };
})();
var PS = PS || {};
PS.Examples_Graphics_C3_Line = (function () {
    "use strict";
    var Graphics_C3 = PS.Graphics_C3;
    var lineData2 = {
        values: [ 50, 20, 10, 40, 15, 25 ], 
        name: "data2", 
        c3Type: Graphics_C3.Pie
    };
    var lineData1 = {
        values: [ 30, 200, 100, 400, 150, 250 ], 
        name: "data1", 
        c3Type: Graphics_C3.Pie
    };
    var lineData = [ lineData1, lineData2 ];
    var opts = (function () {
        var _84 = {};
        for (var _85 in Graphics_C3.options) {
            if (Graphics_C3.options.hasOwnProperty(_85)) {
                _84[_85] = Graphics_C3.options[_85];
            };
        };
        _84.bindto = "#chart";
        _84.c3Data = lineData;
        return _84;
    })();
    var main = Graphics_C3.generate(opts);
    return {
        main: main, 
        opts: opts, 
        lineData: lineData, 
        lineData2: lineData2, 
        lineData1: lineData1
    };
})();
PS.Examples_Graphics_C3_Line.main();
