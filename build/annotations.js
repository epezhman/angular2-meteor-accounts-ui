(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var decorators_1 = __webpack_require__(1);
	var lifecycle_annotations_impl_1 = __webpack_require__(2);
	var InjectUserAnnotation = (function () {
	    function InjectUserAnnotation(propName) {
	        if (propName === void 0) { propName = 'user'; }
	        this.propName = propName;
	    }
	    return InjectUserAnnotation;
	}());
	function InjectUser(propName) {
	    var annInstance = new InjectUserAnnotation(propName);
	    var TypeDecorator = function TypeDecorator(cls) {
	        var propName = annInstance.propName;
	        var fieldName = "_" + propName;
	        var injected = fieldName + "Injected";
	        Object.defineProperty(cls.prototype, propName, {
	            get: function () {
	                var _this = this;
	                if (!this[injected]) {
	                    this[fieldName] = Meteor.user();
	                    if (this.autorun) {
	                        this.autorun(function () {
	                            _this[fieldName] = Meteor.user();
	                        }, true);
	                    }
	                    this[injected] = true;
	                }
	                return this[fieldName];
	            },
	            enumerable: true,
	            configurable: false
	        });
	        return cls;
	    };
	    return TypeDecorator;
	}
	exports.InjectUser = InjectUser;
	;
	/**
	 * Here CanActivate is an internal class (not present in the typings)
	 * defined at angular/modules/angular2/src/router/lifecycle_annotations_impl.ts.
	 * Each annotation designed to implement activation logic should extend it.
	 */
	var RequireUserAnnotation = (function (_super) {
	    __extends(RequireUserAnnotation, _super);
	    function RequireUserAnnotation() {
	        _super.call(this, this.canProceed.bind(this));
	    }
	    RequireUserAnnotation.prototype.canProceed = function (prev, next) {
	        return !!Meteor.user();
	    };
	    return RequireUserAnnotation;
	}(lifecycle_annotations_impl_1.CanActivate));
	exports.RequireUser = decorators_1.makeDecorator(RequireUserAnnotation);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2/src/core/util/decorators");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var lang_1 = __webpack_require__(3);
	var RouteLifecycleHook = (function () {
	    function RouteLifecycleHook(name) {
	        this.name = name;
	    }
	    RouteLifecycleHook = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [String])
	    ], RouteLifecycleHook);
	    return RouteLifecycleHook;
	})();
	exports.RouteLifecycleHook = RouteLifecycleHook;
	var CanActivate = (function () {
	    function CanActivate(fn) {
	        this.fn = fn;
	    }
	    CanActivate = __decorate([
	        lang_1.CONST(), 
	        __metadata('design:paramtypes', [Function])
	    ], CanActivate);
	    return CanActivate;
	})();
	exports.CanActivate = CanActivate;
	exports.routerCanReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanReuse"));
	exports.routerCanDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerCanDeactivate"));
	exports.routerOnActivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnActivate"));
	exports.routerOnReuse = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnReuse"));
	exports.routerOnDeactivate = lang_1.CONST_EXPR(new RouteLifecycleHook("routerOnDeactivate"));
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlmZWN5Y2xlX2Fubm90YXRpb25zX2ltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xpZmVjeWNsZS9saWZlY3ljbGVfYW5ub3RhdGlvbnNfaW1wbC50cyJdLCJuYW1lcyI6WyJSb3V0ZUxpZmVjeWNsZUhvb2siLCJSb3V0ZUxpZmVjeWNsZUhvb2suY29uc3RydWN0b3IiLCJDYW5BY3RpdmF0ZSIsIkNhbkFjdGl2YXRlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBZ0MsMEJBQTBCLENBQUMsQ0FBQTtBQUUzRDtJQUVFQSw0QkFBbUJBLElBQVlBO1FBQVpDLFNBQUlBLEdBQUpBLElBQUlBLENBQVFBO0lBQUdBLENBQUNBO0lBRnJDRDtRQUFDQSxZQUFLQSxFQUFFQTs7MkJBR1BBO0lBQURBLHlCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFGWSwwQkFBa0IscUJBRTlCLENBQUE7QUFFRDtJQUVFRSxxQkFBbUJBLEVBQVlBO1FBQVpDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVVBO0lBQUdBLENBQUNBO0lBRnJDRDtRQUFDQSxZQUFLQSxFQUFFQTs7b0JBR1BBO0lBQURBLGtCQUFDQTtBQUFEQSxDQUFDQSxBQUhELElBR0M7QUFGWSxtQkFBVyxjQUV2QixDQUFBO0FBRVksc0JBQWMsR0FDdkIsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztBQUM1QywyQkFBbUIsR0FDNUIsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztBQUNqRCx3QkFBZ0IsR0FDekIsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5QyxxQkFBYSxHQUN0QixpQkFBVSxDQUFDLElBQUksa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUMzQywwQkFBa0IsR0FDM0IsaUJBQVUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1QsIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbkBDT05TVCgpXG5leHBvcnQgY2xhc3MgUm91dGVMaWZlY3ljbGVIb29rIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykge31cbn1cblxuQENPTlNUKClcbmV4cG9ydCBjbGFzcyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmbjogRnVuY3Rpb24pIHt9XG59XG5cbmV4cG9ydCBjb25zdCByb3V0ZXJDYW5SZXVzZTogUm91dGVMaWZlY3ljbGVIb29rID1cbiAgICBDT05TVF9FWFBSKG5ldyBSb3V0ZUxpZmVjeWNsZUhvb2soXCJyb3V0ZXJDYW5SZXVzZVwiKSk7XG5leHBvcnQgY29uc3Qgcm91dGVyQ2FuRGVhY3RpdmF0ZTogUm91dGVMaWZlY3ljbGVIb29rID1cbiAgICBDT05TVF9FWFBSKG5ldyBSb3V0ZUxpZmVjeWNsZUhvb2soXCJyb3V0ZXJDYW5EZWFjdGl2YXRlXCIpKTtcbmV4cG9ydCBjb25zdCByb3V0ZXJPbkFjdGl2YXRlOiBSb3V0ZUxpZmVjeWNsZUhvb2sgPVxuICAgIENPTlNUX0VYUFIobmV3IFJvdXRlTGlmZWN5Y2xlSG9vayhcInJvdXRlck9uQWN0aXZhdGVcIikpO1xuZXhwb3J0IGNvbnN0IHJvdXRlck9uUmV1c2U6IFJvdXRlTGlmZWN5Y2xlSG9vayA9XG4gICAgQ09OU1RfRVhQUihuZXcgUm91dGVMaWZlY3ljbGVIb29rKFwicm91dGVyT25SZXVzZVwiKSk7XG5leHBvcnQgY29uc3Qgcm91dGVyT25EZWFjdGl2YXRlOiBSb3V0ZUxpZmVjeWNsZUhvb2sgPVxuICAgIENPTlNUX0VYUFIobmV3IFJvdXRlTGlmZWN5Y2xlSG9vayhcInJvdXRlck9uRGVhY3RpdmF0ZVwiKSk7XG4iXX0=

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    return type['name'];
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	var _devMode = true;
	var _modeLocked = false;
	function lockMode() {
	    _modeLocked = true;
	}
	exports.lockMode = lockMode;
	/**
	 * Disable Angular's development mode, which turns off assertions and other
	 * checks within the framework.
	 *
	 * One important assertion this disables verifies that a change detection pass
	 * does not result in additional changes to any bindings (also known as
	 * unidirectional data flow).
	 */
	function enableProdMode() {
	    if (_modeLocked) {
	        // Cannot use BaseException as that ends up importing from facade/lang.
	        throw 'Cannot enable prod mode after platform setup.';
	    }
	    _devMode = false;
	}
	exports.enableProdMode = enableProdMode;
	function assertionsEnabled() {
	    return _devMode;
	}
	exports.assertionsEnabled = assertionsEnabled;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	// This function is needed only to properly support Dart's const expressions
	// see https://github.com/angular/ts2dart/pull/151 for more info
	function CONST_EXPR(expr) {
	    return expr;
	}
	exports.CONST_EXPR = CONST_EXPR;
	function CONST() {
	    return function (target) { return target; };
	}
	exports.CONST = CONST;
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isString(obj) {
	    return typeof obj === "string";
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf("\n");
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	})();
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(""); };
	    return StringJoiner;
	})();
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	})(Error);
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError("Invalid integer literal when parsing " + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError("Invalid integer literal when parsing " + text + " in base " +
	            radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	})();
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    return RegExpWrapper;
	})();
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	})();
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    return FunctionWrapper;
	})();
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === "function" || typeof o === "object");
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	})();
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	})();
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function bitWiseOr(values) {
	    return values.reduce(function (a, b) { return a | b; });
	}
	exports.bitWiseOr = bitWiseOr;
	function bitWiseAnd(values) {
	    return values.reduce(function (a, b) { return a & b; });
	}
	exports.bitWiseAnd = bitWiseAnd;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZy50cyJdLCJuYW1lcyI6WyJzY2hlZHVsZU1pY3JvVGFzayIsImdldFR5cGVOYW1lRm9yRGVidWdnaW5nIiwibG9ja01vZGUiLCJlbmFibGVQcm9kTW9kZSIsImFzc2VydGlvbnNFbmFibGVkIiwiYXNzZXJ0IiwiQ09OU1RfRVhQUiIsIkNPTlNUIiwiaXNQcmVzZW50IiwiaXNCbGFuayIsImlzU3RyaW5nIiwiaXNGdW5jdGlvbiIsImlzVHlwZSIsImlzU3RyaW5nTWFwIiwiaXNQcm9taXNlIiwiaXNBcnJheSIsImlzTnVtYmVyIiwiaXNEYXRlIiwibm9vcCIsInN0cmluZ2lmeSIsInNlcmlhbGl6ZUVudW0iLCJkZXNlcmlhbGl6ZUVudW0iLCJyZXNvbHZlRW51bVRva2VuIiwiU3RyaW5nV3JhcHBlciIsIlN0cmluZ1dyYXBwZXIuY29uc3RydWN0b3IiLCJTdHJpbmdXcmFwcGVyLmZyb21DaGFyQ29kZSIsIlN0cmluZ1dyYXBwZXIuY2hhckNvZGVBdCIsIlN0cmluZ1dyYXBwZXIuc3BsaXQiLCJTdHJpbmdXcmFwcGVyLmVxdWFscyIsIlN0cmluZ1dyYXBwZXIuc3RyaXBMZWZ0IiwiU3RyaW5nV3JhcHBlci5zdHJpcFJpZ2h0IiwiU3RyaW5nV3JhcHBlci5yZXBsYWNlIiwiU3RyaW5nV3JhcHBlci5yZXBsYWNlQWxsIiwiU3RyaW5nV3JhcHBlci5zbGljZSIsIlN0cmluZ1dyYXBwZXIucmVwbGFjZUFsbE1hcHBlZCIsIlN0cmluZ1dyYXBwZXIuY29udGFpbnMiLCJTdHJpbmdXcmFwcGVyLmNvbXBhcmUiLCJTdHJpbmdKb2luZXIiLCJTdHJpbmdKb2luZXIuY29uc3RydWN0b3IiLCJTdHJpbmdKb2luZXIuYWRkIiwiU3RyaW5nSm9pbmVyLnRvU3RyaW5nIiwiTnVtYmVyUGFyc2VFcnJvciIsIk51bWJlclBhcnNlRXJyb3IuY29uc3RydWN0b3IiLCJOdW1iZXJQYXJzZUVycm9yLnRvU3RyaW5nIiwiTnVtYmVyV3JhcHBlciIsIk51bWJlcldyYXBwZXIuY29uc3RydWN0b3IiLCJOdW1iZXJXcmFwcGVyLnRvRml4ZWQiLCJOdW1iZXJXcmFwcGVyLmVxdWFsIiwiTnVtYmVyV3JhcHBlci5wYXJzZUludEF1dG9SYWRpeCIsIk51bWJlcldyYXBwZXIucGFyc2VJbnQiLCJOdW1iZXJXcmFwcGVyLnBhcnNlRmxvYXQiLCJOdW1iZXJXcmFwcGVyLk5hTiIsIk51bWJlcldyYXBwZXIuaXNOYU4iLCJOdW1iZXJXcmFwcGVyLmlzSW50ZWdlciIsIlJlZ0V4cFdyYXBwZXIiLCJSZWdFeHBXcmFwcGVyLmNvbnN0cnVjdG9yIiwiUmVnRXhwV3JhcHBlci5jcmVhdGUiLCJSZWdFeHBXcmFwcGVyLmZpcnN0TWF0Y2giLCJSZWdFeHBXcmFwcGVyLnRlc3QiLCJSZWdFeHBXcmFwcGVyLm1hdGNoZXIiLCJSZWdFeHBNYXRjaGVyV3JhcHBlciIsIlJlZ0V4cE1hdGNoZXJXcmFwcGVyLmNvbnN0cnVjdG9yIiwiUmVnRXhwTWF0Y2hlcldyYXBwZXIubmV4dCIsIkZ1bmN0aW9uV3JhcHBlciIsIkZ1bmN0aW9uV3JhcHBlci5jb25zdHJ1Y3RvciIsIkZ1bmN0aW9uV3JhcHBlci5hcHBseSIsImxvb3NlSWRlbnRpY2FsIiwiZ2V0TWFwS2V5Iiwibm9ybWFsaXplQmxhbmsiLCJub3JtYWxpemVCb29sIiwiaXNKc09iamVjdCIsInByaW50IiwiSnNvbiIsIkpzb24uY29uc3RydWN0b3IiLCJKc29uLnBhcnNlIiwiSnNvbi5zdHJpbmdpZnkiLCJEYXRlV3JhcHBlciIsIkRhdGVXcmFwcGVyLmNvbnN0cnVjdG9yIiwiRGF0ZVdyYXBwZXIuY3JlYXRlIiwiRGF0ZVdyYXBwZXIuZnJvbUlTT1N0cmluZyIsIkRhdGVXcmFwcGVyLmZyb21NaWxsaXMiLCJEYXRlV3JhcHBlci50b01pbGxpcyIsIkRhdGVXcmFwcGVyLm5vdyIsIkRhdGVXcmFwcGVyLnRvSnNvbiIsInNldFZhbHVlT25QYXRoIiwiZ2V0U3ltYm9sSXRlcmF0b3IiLCJldmFsRXhwcmVzc2lvbiIsImlzUHJpbWl0aXZlIiwiaGFzQ29uc3RydWN0b3IiLCJiaXRXaXNlT3IiLCJiaXRXaXNlQW5kIiwiZXNjYXBlIl0sIm1hcHBpbmdzIjoiOzs7OztBQXdCQSxJQUFJLFdBQThCLENBQUM7QUFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNsQyxFQUFFLENBQUMsQ0FBQyxPQUFPLGlCQUFpQixLQUFLLFdBQVcsSUFBSSxJQUFJLFlBQVksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLHlFQUF5RTtRQUN6RSxXQUFXLEdBQVEsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLFdBQVcsR0FBUSxNQUFNLENBQUM7SUFDNUIsQ0FBQztBQUNILENBQUM7QUFBQyxJQUFJLENBQUMsQ0FBQztJQUNOLFdBQVcsR0FBUSxNQUFNLENBQUM7QUFDNUIsQ0FBQztBQUVELDJCQUFrQyxFQUFZO0lBQzVDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxpQkFBaUJBLENBQUNBLG1CQUFtQkEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDMURBLENBQUNBO0FBRmUseUJBQWlCLG9CQUVoQyxDQUFBO0FBRVksZUFBTyxHQUFHLEtBQUssQ0FBQztBQUU3QixrRUFBa0U7QUFDbEUsNENBQTRDO0FBQzVDLElBQUksT0FBTyxHQUFzQixXQUFXO0FBRXpCLGNBQU0sV0FGb0I7QUFJbEMsWUFBSSxHQUFHLFFBQVEsQ0FBQztBQWUzQixpQ0FBd0MsSUFBVTtJQUNoREMsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7QUFDdEJBLENBQUNBO0FBRmUsK0JBQXVCLDBCQUV0QyxDQUFBO0FBR1UsWUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDcEIsWUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFFL0IsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFD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LEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLE1BQU1BLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUNsQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0E7b0JBQUNBLEtBQUtBLENBQUNBO2dCQUMzQkEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDUkEsQ0FBQ0E7WUFDREEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDdkJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0lBQ1hBLENBQUNBO0lBRU1OLHdCQUFVQSxHQUFqQkEsVUFBa0JBLENBQVNBLEVBQUVBLE9BQWVBO1FBQzFDTyxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDbkJBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLE1BQU1BLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBO2dCQUN2Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsT0FBT0EsQ0FBQ0E7b0JBQUNBLEtBQUtBLENBQUNBO2dCQUMzQkEsR0FBR0EsRUFBRUEsQ0FBQ0E7WUFDUkEsQ0FBQ0E7WUFDREEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDMUJBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBO0lBQ1hBLENBQUNBO0lBRU1QLHFCQUFP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LENBQUNBLENBQUNBLENBQUNBO0FBQ3BEQSxDQUFDQTtBQUZlLGlCQUFTLFlBRXhCLENBQUE7QUFFRCxvQkFBMkIsTUFBZ0I7SUFDekNDLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFVBQUNBLENBQUNBLEVBQUVBLENBQUNBLElBQU9BLE1BQU1BLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0FBQ3BEQSxDQUFDQTtBQUZlLGtCQUFVLGFBRXpCLENBQUE7QUFFRCxnQkFBdUIsQ0FBUztJQUM5QkMsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDOUJBLENBQUNBO0FBRmUsY0FBTSxTQUVyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBCcm93c2VyTm9kZUdsb2JhbCB7XG4gIE9iamVjdDogdHlwZW9mIE9iamVjdDtcbiAgQXJyYXk6IHR5cGVvZiBBcnJheTtcbiAgTWFwOiB0eXBlb2YgTWFwO1xuICBTZXQ6IHR5cGVvZiBTZXQ7XG4gIERhdGU6IERhdGVDb25zdHJ1Y3RvcjtcbiAgUmVnRXhwOiBSZWdFeHBDb25zdHJ1Y3RvcjtcbiAgSlNPTjogdHlwZW9mIEpTT047XG4gIE1hdGg6IGFueTsgIC8vIHR5cGVvZiBNYXRoO1xuICBhc3NlcnQoY29uZGl0aW9uOiBhbnkpOiB2b2lkO1xuICBSZWZsZWN0OiBhbnk7XG4gIGdldEFuZ3VsYXJUZXN0YWJpbGl0eTogRnVuY3Rpb247XG4gIGdldEFsbEFuZ3VsYXJUZXN0YWJpbGl0aWVzOiBGdW5jdGlvbjtcbiAgZ2V0QWxsQW5ndWxhclJvb3RFbGVtZW50czogRnVuY3Rpb247XG4gIGZyYW1ld29ya1N0YWJpbGl6ZXJzOiBBcnJheTxGdW5jdGlvbj47XG4gIHNldFRpbWVvdXQ6IEZ1bmN0aW9uO1xuICBjbGVhclRpbWVvdXQ6IEZ1bmN0aW9uO1xuICBzZXRJbnRlcnZhbDogRnVuY3Rpb247XG4gIGNsZWFySW50ZXJ2YWw6IEZ1bmN0aW9uO1xuICBlbmNvZGVVUkk6IEZ1bmN0aW9uO1xufVxuXG4vLyBUT0RPKGp0ZXBsaXR6NjAyKTogTG9hZCBXb3JrZXJHbG9iYWxTY29wZSBmcm9tIGxpYi53ZWJ3b3JrZXIuZC50cyBmaWxlICMzNDkyXG5kZWNsYXJlIHZhciBXb3JrZXJHbG9iYWxTY29wZTtcbnZhciBnbG9iYWxTY29wZTogQnJvd3Nlck5vZGVHbG9iYWw7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgLy8gVE9ETzogUmVwbGFjZSBhbnkgd2l0aCBXb3JrZXJHbG9iYWxTY29wZSBmcm9tIGxpYi53ZWJ3b3JrZXIuZC50cyAjMzQ5MlxuICAgIGdsb2JhbFNjb3BlID0gPGFueT5zZWxmO1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbFNjb3BlID0gPGFueT5nbG9iYWw7XG4gIH1cbn0gZWxzZSB7XG4gIGdsb2JhbFNjb3BlID0gPGFueT53aW5kb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU1pY3JvVGFzayhmbjogRnVuY3Rpb24pIHtcbiAgWm9uZS5jdXJyZW50LnNjaGVkdWxlTWljcm9UYXNrKCdzY2hlZHVsZU1pY3JvdGFzaycsIGZuKTtcbn1cblxuZXhwb3J0IGNvbnN0IElTX0RBUlQgPSBmYWxzZTtcblxuLy8gTmVlZCB0byBkZWNsYXJlIGEgbmV3IHZhcmlhYmxlIGZvciBnbG9iYWwgaGVyZSBzaW5jZSBUeXBlU2NyaXB0XG4vLyBleHBvcnRzIHRoZSBvcmlnaW5hbCB2YWx1ZSBvZiB0aGUgc3ltYm9sLlxudmFyIF9nbG9iYWw6IEJyb3dzZXJOb2RlR2xvYmFsID0gZ2xvYmFsU2NvcGU7XG5cbmV4cG9ydCB7X2dsb2JhbCBhcyBnbG9iYWx9O1xuXG5leHBvcnQgdmFyIFR5cGUgPSBGdW5jdGlvbjtcblxuLyoqXG4gKiBSdW50aW1lIHJlcHJlc2VudGF0aW9uIGEgdHlwZSB0aGF0IGEgQ29tcG9uZW50IG9yIG90aGVyIG9iamVjdCBpcyBpbnN0YW5jZXMgb2YuXG4gKlxuICogQW4gZXhhbXBsZSBvZiBhIGBUeXBlYCBpcyBgTXlDdXN0b21Db21wb25lbnRgIGNsYXNzLCB3aGljaCBpbiBKYXZhU2NyaXB0IGlzIGJlIHJlcHJlc2VudGVkIGJ5XG4gKiB0aGUgYE15Q3VzdG9tQ29tcG9uZW50YCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlIGV4dGVuZHMgRnVuY3Rpb24ge31cblxuLyoqXG4gKiBSdW50aW1lIHJlcHJlc2VudGF0aW9uIG9mIGEgdHlwZSB0aGF0IGlzIGNvbnN0cnVjdGFibGUgKG5vbi1hYnN0cmFjdCkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uY3JldGVUeXBlIGV4dGVuZHMgVHlwZSB7IG5ldyAoLi4uYXJncyk6IGFueTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZU5hbWVGb3JEZWJ1Z2dpbmcodHlwZTogVHlwZSk6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlWyduYW1lJ107XG59XG5cblxuZXhwb3J0IHZhciBNYXRoID0gX2dsb2JhbC5NYXRoO1xuZXhwb3J0IHZhciBEYXRlID0gX2dsb2JhbC5EYXRlO1xuXG52YXIgX2Rldk1vZGU6IGJvb2xlYW4gPSB0cnVlO1xudmFyIF9tb2RlTG9ja2VkOiBib29sZWFuID0gZmFsc2U7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NrTW9kZSgpIHtcbiAgX21vZGVMb2NrZWQgPSB0cnVlO1xufVxuXG4vKipcbiAqIERpc2FibGUgQW5ndWxhcidzIGRldmVsb3BtZW50IG1vZGUsIHdoaWNoIHR1cm5zIG9mZiBhc3NlcnRpb25zIGFuZCBvdGhlclxuICogY2hlY2tzIHdpdGhpbiB0aGUgZnJhbWV3b3JrLlxuICpcbiAqIE9uZSBpbXBvcnRhbnQgYXNzZXJ0aW9uIHRoaXMgZGlzYWJsZXMgdmVyaWZpZXMgdGhhdCBhIGNoYW5nZSBkZXRlY3Rpb24gcGFzc1xuICogZG9lcyBub3QgcmVzdWx0IGluIGFkZGl0aW9uYWwgY2hhbmdlcyB0byBhbnkgYmluZGluZ3MgKGFsc28ga25vd24gYXNcbiAqIHVuaWRpcmVjdGlvbmFsIGRhdGEgZmxvdykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVQcm9kTW9kZSgpIHtcbiAgaWYgKF9tb2RlTG9ja2VkKSB7XG4gICAgLy8gQ2Fubm90IHVzZSBCYXNlRXhjZXB0aW9uIGFzIHRoYXQgZW5kcyB1cCBpbXBvcnRpbmcgZnJvbSBmYWNhZGUvbGFuZy5cbiAgICB0aHJvdyAnQ2Fubm90IGVuYWJsZSBwcm9kIG1vZGUgYWZ0ZXIgcGxhdGZvcm0gc2V0dXAuJztcbiAgfVxuICBfZGV2TW9kZSA9IGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0aW9uc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gIHJldHVybiBfZGV2TW9kZTtcbn1cblxuLy8gVE9ETzogcmVtb3ZlIGNhbGxzIHRvIGFzc2VydCBpbiBwcm9kdWN0aW9uIGVudmlyb25tZW50XG4vLyBOb3RlOiBDYW4ndCBqdXN0IGV4cG9ydCB0aGlzIGFuZCBpbXBvcnQgaW4gaW4gb3RoZXIgZmlsZXNcbi8vIGFzIGBhc3NlcnRgIGlzIGEgcmVzZXJ2ZWQga2V5d29yZCBpbiBEYXJ0XG5fZ2xvYmFsLmFzc2VydCA9IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24pIHtcbiAgLy8gVE9ETzogdG8gYmUgZml4ZWQgcHJvcGVybHkgdmlhICMyODMwLCBub29wIGZvciBub3dcbn07XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgbmVlZGVkIG9ubHkgdG8gcHJvcGVybHkgc3VwcG9ydCBEYXJ0J3MgY29uc3QgZXhwcmVzc2lvbnNcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci90czJkYXJ0L3B1bGwvMTUxIGZvciBtb3JlIGluZm9cbmV4cG9ydCBmdW5jdGlvbiBDT05TVF9FWFBSPFQ+KGV4cHI6IFQpOiBUIHtcbiAgcmV0dXJuIGV4cHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDT05TVCgpOiBDbGFzc0RlY29yYXRvciAmIFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgcmV0dXJuICh0YXJnZXQpID0+IHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFuayhvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1R5cGUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24ob2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nTWFwKG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2Uob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mICg8YW55Pl9nbG9iYWwpLlByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KG9iajogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvYmopOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKG9iaik6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4ob2JqLnZhbHVlT2YoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh0b2tlbik6IHN0cmluZyB7XG4gIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaWYgKHRva2VuID09PSB1bmRlZmluZWQgfHwgdG9rZW4gPT09IG51bGwpIHtcbiAgICByZXR1cm4gJycgKyB0b2tlbjtcbiAgfVxuXG4gIGlmICh0b2tlbi5uYW1lKSB7XG4gICAgcmV0dXJuIHRva2VuLm5hbWU7XG4gIH1cbiAgaWYgKHRva2VuLm92ZXJyaWRkZW5OYW1lKSB7XG4gICAgcmV0dXJuIHRva2VuLm92ZXJyaWRkZW5OYW1lO1xuICB9XG5cbiAgdmFyIHJlcyA9IHRva2VuLnRvU3RyaW5nKCk7XG4gIHZhciBuZXdMaW5lSW5kZXggPSByZXMuaW5kZXhPZihcIlxcblwiKTtcbiAgcmV0dXJuIChuZXdMaW5lSW5kZXggPT09IC0xKSA/IHJlcyA6IHJlcy5zdWJzdHJpbmcoMCwgbmV3TGluZUluZGV4KTtcbn1cblxuLy8gc2VyaWFsaXplIC8gZGVzZXJpYWxpemUgZW51bSBleGlzdCBvbmx5IGZvciBjb25zaXN0ZW5jeSB3aXRoIGRhcnQgQVBJXG4vLyBlbnVtcyBpbiB0eXBlc2NyaXB0IGRvbid0IG5lZWQgdG8gYmUgc2VyaWFsaXplZFxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplRW51bSh2YWwpOiBudW1iZXIge1xuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVFbnVtKHZhbCwgdmFsdWVzOiBNYXA8bnVtYmVyLCBhbnk+KTogYW55IHtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFbnVtVG9rZW4oZW51bVZhbHVlLCB2YWwpOiBzdHJpbmcge1xuICByZXR1cm4gZW51bVZhbHVlW3ZhbF07XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdXcmFwcGVyIHtcbiAgc3RhdGljIGZyb21DaGFyQ29kZShjb2RlOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKTsgfVxuXG4gIHN0YXRpYyBjaGFyQ29kZUF0KHM6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IG51bWJlciB7IHJldHVybiBzLmNoYXJDb2RlQXQoaW5kZXgpOyB9XG5cbiAgc3RhdGljIHNwbGl0KHM6IHN0cmluZywgcmVnRXhwOiBSZWdFeHApOiBzdHJpbmdbXSB7IHJldHVybiBzLnNwbGl0KHJlZ0V4cCk7IH1cblxuICBzdGF0aWMgZXF1YWxzKHM6IHN0cmluZywgczI6IHN0cmluZyk6IGJvb2xlYW4geyByZXR1cm4gcyA9PT0gczI7IH1cblxuICBzdGF0aWMgc3RyaXBMZWZ0KHM6IHN0cmluZywgY2hhclZhbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocyAmJiBzLmxlbmd0aCkge1xuICAgICAgdmFyIHBvcyA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHNbaV0gIT0gY2hhclZhbCkgYnJlYWs7XG4gICAgICAgIHBvcysrO1xuICAgICAgfVxuICAgICAgcyA9IHMuc3Vic3RyaW5nKHBvcyk7XG4gICAgfVxuICAgIHJldHVybiBzO1xuICB9XG5cbiAgc3RhdGljIHN0cmlwUmlnaHQoczogc3RyaW5nLCBjaGFyVmFsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChzICYmIHMubGVuZ3RoKSB7XG4gICAgICB2YXIgcG9zID0gcy5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBpID0gcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAoc1tpXSAhPSBjaGFyVmFsKSBicmVhaztcbiAgICAgICAgcG9zLS07XG4gICAgICB9XG4gICAgICBzID0gcy5zdWJzdHJpbmcoMCwgcG9zKTtcbiAgICB9XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBzdGF0aWMgcmVwbGFjZShzOiBzdHJpbmcsIGZyb206IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5yZXBsYWNlKGZyb20sIHJlcGxhY2UpO1xuICB9XG5cbiAgc3RhdGljIHJlcGxhY2VBbGwoczogc3RyaW5nLCBmcm9tOiBSZWdFeHAsIHJlcGxhY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHMucmVwbGFjZShmcm9tLCByZXBsYWNlKTtcbiAgfVxuXG4gIHN0YXRpYyBzbGljZTxUPihzOiBzdHJpbmcsIGZyb206IG51bWJlciA9IDAsIHRvOiBudW1iZXIgPSBudWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcy5zbGljZShmcm9tLCB0byA9PT0gbnVsbCA/IHVuZGVmaW5lZCA6IHRvKTtcbiAgfVxuXG4gIHN0YXRpYyByZXBsYWNlQWxsTWFwcGVkKHM6IHN0cmluZywgZnJvbTogUmVnRXhwLCBjYjogRnVuY3Rpb24pOiBzdHJpbmcge1xuICAgIHJldHVybiBzLnJlcGxhY2UoZnJvbSwgZnVuY3Rpb24oLi4ubWF0Y2hlcykge1xuICAgICAgLy8gUmVtb3ZlIG9mZnNldCAmIHN0cmluZyBmcm9tIHRoZSByZXN1bHQgYXJyYXlcbiAgICAgIG1hdGNoZXMuc3BsaWNlKC0yLCAyKTtcbiAgICAgIC8vIFRoZSBjYWxsYmFjayByZWNlaXZlcyBtYXRjaCwgcDEsIC4uLiwgcG5cbiAgICAgIHJldHVybiBjYihtYXRjaGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjb250YWlucyhzOiBzdHJpbmcsIHN1YnN0cjogc3RyaW5nKTogYm9vbGVhbiB7IHJldHVybiBzLmluZGV4T2Yoc3Vic3RyKSAhPSAtMTsgfVxuXG4gIHN0YXRpYyBjb21wYXJlKGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAoYSA8IGIpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdKb2luZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFydHMgPSBbXSkge31cblxuICBhZGQocGFydDogc3RyaW5nKTogdm9pZCB7IHRoaXMucGFydHMucHVzaChwYXJ0KTsgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnBhcnRzLmpvaW4oXCJcIik7IH1cbn1cblxuZXhwb3J0IGNsYXNzIE51bWJlclBhcnNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbWVzc2FnZTogc3RyaW5nKSB7IHN1cGVyKCk7IH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5tZXNzYWdlOyB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE51bWJlcldyYXBwZXIge1xuICBzdGF0aWMgdG9GaXhlZChuOiBudW1iZXIsIGZyYWN0aW9uRGlnaXRzOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbi50b0ZpeGVkKGZyYWN0aW9uRGlnaXRzKTsgfVxuXG4gIHN0YXRpYyBlcXVhbChhOiBudW1iZXIsIGI6IG51bWJlcik6IGJvb2xlYW4geyByZXR1cm4gYSA9PT0gYjsgfVxuXG4gIHN0YXRpYyBwYXJzZUludEF1dG9SYWRpeCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHZhciByZXN1bHQ6IG51bWJlciA9IHBhcnNlSW50KHRleHQpO1xuICAgIGlmIChpc05hTihyZXN1bHQpKSB7XG4gICAgICB0aHJvdyBuZXcgTnVtYmVyUGFyc2VFcnJvcihcIkludmFsaWQgaW50ZWdlciBsaXRlcmFsIHdoZW4gcGFyc2luZyBcIiArIHRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIHBhcnNlSW50KHRleHQ6IHN0cmluZywgcmFkaXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHJhZGl4ID09IDEwKSB7XG4gICAgICBpZiAoL14oXFwtfFxcKyk/WzAtOV0rJC8udGVzdCh0ZXh0KSkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGV4dCwgcmFkaXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmFkaXggPT0gMTYpIHtcbiAgICAgIGlmICgvXihcXC18XFwrKT9bMC05QUJDREVGYWJjZGVmXSskLy50ZXN0KHRleHQpKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0ZXh0LCByYWRpeCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQ6IG51bWJlciA9IHBhcnNlSW50KHRleHQsIHJhZGl4KTtcbiAgICAgIGlmICghaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgTnVtYmVyUGFyc2VFcnJvcihcIkludmFsaWQgaW50ZWdlciBsaXRlcmFsIHdoZW4gcGFyc2luZyBcIiArIHRleHQgKyBcIiBpbiBiYXNlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpeCk7XG4gIH1cblxuICAvLyBUT0RPOiBOYU4gaXMgYSB2YWxpZCBsaXRlcmFsIGJ1dCBpcyByZXR1cm5lZCBieSBwYXJzZUZsb2F0IHRvIGluZGljYXRlIGFuIGVycm9yLlxuICBzdGF0aWMgcGFyc2VGbG9hdCh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgeyByZXR1cm4gcGFyc2VGbG9hdCh0ZXh0KTsgfVxuXG4gIHN0YXRpYyBnZXQgTmFOKCk6IG51bWJlciB7IHJldHVybiBOYU47IH1cblxuICBzdGF0aWMgaXNOYU4odmFsdWU6IGFueSk6IGJvb2xlYW4geyByZXR1cm4gaXNOYU4odmFsdWUpOyB9XG5cbiAgc3RhdGljIGlzSW50ZWdlcih2YWx1ZTogYW55KTogYm9vbGVhbiB7IHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKTsgfVxufVxuXG5leHBvcnQgdmFyIFJlZ0V4cCA9IF9nbG9iYWwuUmVnRXhwO1xuXG5leHBvcnQgY2xhc3MgUmVnRXhwV3JhcHBlciB7XG4gIHN0YXRpYyBjcmVhdGUocmVnRXhwU3RyOiBzdHJpbmcsIGZsYWdzOiBzdHJpbmcgPSAnJyk6IFJlZ0V4cCB7XG4gICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKC9nL2csICcnKTtcbiAgICByZXR1cm4gbmV3IF9nbG9iYWwuUmVnRXhwKHJlZ0V4cFN0ciwgZmxhZ3MgKyAnZycpO1xuICB9XG4gIHN0YXRpYyBmaXJzdE1hdGNoKHJlZ0V4cDogUmVnRXhwLCBpbnB1dDogc3RyaW5nKTogUmVnRXhwRXhlY0FycmF5IHtcbiAgICAvLyBSZXNldCBtdWx0aW1hdGNoIHJlZ2V4IHN0YXRlXG4gICAgcmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHJlZ0V4cC5leGVjKGlucHV0KTtcbiAgfVxuICBzdGF0aWMgdGVzdChyZWdFeHA6IFJlZ0V4cCwgaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJlZ0V4cC5sYXN0SW5kZXggPSAwO1xuICAgIHJldHVybiByZWdFeHAudGVzdChpbnB1dCk7XG4gIH1cbiAgc3RhdGljIG1hdGNoZXIocmVnRXhwOiBSZWdFeHAsIGlucHV0OiBzdHJpbmcpOiB7XG4gICAgcmU6IFJlZ0V4cDtcbiAgICBpbnB1dDogc3RyaW5nXG4gIH1cbiAge1xuICAgIC8vIFJlc2V0IHJlZ2V4IHN0YXRlIGZvciB0aGUgY2FzZVxuICAgIC8vIHNvbWVvbmUgZGlkIG5vdCBsb29wIG92ZXIgYWxsIG1hdGNoZXNcbiAgICAvLyBsYXN0IHRpbWUuXG4gICAgcmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHtyZTogcmVnRXhwLCBpbnB1dDogaW5wdXR9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdFeHBNYXRjaGVyV3JhcHBlciB7XG4gIHN0YXRpYyBuZXh0KG1hdGNoZXI6IHtcbiAgICByZTogUmVnRXhwO1xuICAgIGlucHV0OiBzdHJpbmdcbiAgfSk6IFJlZ0V4cEV4ZWNBcnJheSB7XG4gICAgcmV0dXJuIG1hdGNoZXIucmUuZXhlYyhtYXRjaGVyLmlucHV0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25XcmFwcGVyIHtcbiAgc3RhdGljIGFwcGx5KGZuOiBGdW5jdGlvbiwgcG9zQXJnczogYW55KTogYW55IHsgcmV0dXJuIGZuLmFwcGx5KG51bGwsIHBvc0FyZ3MpOyB9XG59XG5cbi8vIEpTIGhhcyBOYU4gIT09IE5hTlxuZXhwb3J0IGZ1bmN0aW9uIGxvb3NlSWRlbnRpY2FsKGEsIGIpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEgPT09IGIgfHwgdHlwZW9mIGEgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGIgPT09IFwibnVtYmVyXCIgJiYgaXNOYU4oYSkgJiYgaXNOYU4oYik7XG59XG5cbi8vIEpTIGNvbnNpZGVycyBOYU4gaXMgdGhlIHNhbWUgYXMgTmFOIGZvciBtYXAgS2V5ICh3aGlsZSBOYU4gIT09IE5hTiBvdGhlcndpc2UpXG4vLyBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwS2V5PFQ+KHZhbHVlOiBUKTogVCB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUJsYW5rKG9iajogT2JqZWN0KTogYW55IHtcbiAgcmV0dXJuIGlzQmxhbmsob2JqKSA/IG51bGwgOiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVCb29sKG9iajogYm9vbGVhbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNCbGFuayhvYmopID8gZmFsc2UgOiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0pzT2JqZWN0KG86IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbyAhPT0gbnVsbCAmJiAodHlwZW9mIG8gPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludChvYmo6IEVycm9yIHwgT2JqZWN0KSB7XG4gIGNvbnNvbGUubG9nKG9iaik7XG59XG5cbi8vIENhbid0IGJlIGFsbCB1cHBlcmNhc2UgYXMgb3VyIHRyYW5zcGlsZXIgd291bGQgdGhpbmsgaXQgaXMgYSBzcGVjaWFsIGRpcmVjdGl2ZS4uLlxuZXhwb3J0IGNsYXNzIEpzb24ge1xuICBzdGF0aWMgcGFyc2Uoczogc3RyaW5nKTogT2JqZWN0IHsgcmV0dXJuIF9nbG9iYWwuSlNPTi5wYXJzZShzKTsgfVxuICBzdGF0aWMgc3RyaW5naWZ5KGRhdGE6IE9iamVjdCk6IHN0cmluZyB7XG4gICAgLy8gRGFydCBkb2Vzbid0IHRha2UgMyBhcmd1bWVudHNcbiAgICByZXR1cm4gX2dsb2JhbC5KU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVdyYXBwZXIge1xuICBzdGF0aWMgY3JlYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciA9IDEsIGRheTogbnVtYmVyID0gMSwgaG91cjogbnVtYmVyID0gMCxcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBudW1iZXIgPSAwLCBzZWNvbmRzOiBudW1iZXIgPSAwLCBtaWxsaXNlY29uZHM6IG51bWJlciA9IDApOiBEYXRlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIGhvdXIsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcyk7XG4gIH1cbiAgc3RhdGljIGZyb21JU09TdHJpbmcoc3RyOiBzdHJpbmcpOiBEYXRlIHsgcmV0dXJuIG5ldyBEYXRlKHN0cik7IH1cbiAgc3RhdGljIGZyb21NaWxsaXMobXM6IG51bWJlcik6IERhdGUgeyByZXR1cm4gbmV3IERhdGUobXMpOyB9XG4gIHN0YXRpYyB0b01pbGxpcyhkYXRlOiBEYXRlKTogbnVtYmVyIHsgcmV0dXJuIGRhdGUuZ2V0VGltZSgpOyB9XG4gIHN0YXRpYyBub3coKTogRGF0ZSB7IHJldHVybiBuZXcgRGF0ZSgpOyB9XG4gIHN0YXRpYyB0b0pzb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7IHJldHVybiBkYXRlLnRvSlNPTigpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWYWx1ZU9uUGF0aChnbG9iYWw6IGFueSwgcGF0aDogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIG9iajogYW55ID0gZ2xvYmFsO1xuICB3aGlsZSAocGFydHMubGVuZ3RoID4gMSkge1xuICAgIHZhciBuYW1lID0gcGFydHMuc2hpZnQoKTtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzUHJlc2VudChvYmpbbmFtZV0pKSB7XG4gICAgICBvYmogPSBvYmpbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iaiA9IG9ialtuYW1lXSA9IHt9O1xuICAgIH1cbiAgfVxuICBpZiAob2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsKSB7XG4gICAgb2JqID0ge307XG4gIH1cbiAgb2JqW3BhcnRzLnNoaWZ0KCldID0gdmFsdWU7XG59XG5cbi8vIFdoZW4gU3ltYm9sLml0ZXJhdG9yIGRvZXNuJ3QgZXhpc3QsIHJldHJpZXZlcyB0aGUga2V5IHVzZWQgaW4gZXM2LXNoaW1cbmRlY2xhcmUgdmFyIFN5bWJvbDtcbnZhciBfc3ltYm9sSXRlcmF0b3IgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCk6IHN0cmluZyB8IHN5bWJvbCB7XG4gIGlmIChpc0JsYW5rKF9zeW1ib2xJdGVyYXRvcikpIHtcbiAgICBpZiAoaXNQcmVzZW50KFN5bWJvbCkgJiYgaXNQcmVzZW50KFN5bWJvbC5pdGVyYXRvcikpIHtcbiAgICAgIF9zeW1ib2xJdGVyYXRvciA9IFN5bWJvbC5pdGVyYXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXM2LXNoaW0gc3BlY2lmaWMgbG9naWNcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTWFwLnByb3RvdHlwZSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIGlmIChrZXkgIT09ICdlbnRyaWVzJyAmJiBrZXkgIT09ICdzaXplJyAmJlxuICAgICAgICAgICAgTWFwLnByb3RvdHlwZVtrZXldID09PSBNYXAucHJvdG90eXBlWydlbnRyaWVzJ10pIHtcbiAgICAgICAgICBfc3ltYm9sSXRlcmF0b3IgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9zeW1ib2xJdGVyYXRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWxFeHByZXNzaW9uKHNvdXJjZVVybDogc3RyaW5nLCBleHByOiBzdHJpbmcsIGRlY2xhcmF0aW9uczogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogYW55IHtcbiAgdmFyIGZuQm9keSA9IGAke2RlY2xhcmF0aW9uc31cXG5yZXR1cm4gJHtleHByfVxcbi8vIyBzb3VyY2VVUkw9JHtzb3VyY2VVcmx9YDtcbiAgdmFyIGZuQXJnTmFtZXMgPSBbXTtcbiAgdmFyIGZuQXJnVmFsdWVzID0gW107XG4gIGZvciAodmFyIGFyZ05hbWUgaW4gdmFycykge1xuICAgIGZuQXJnTmFtZXMucHVzaChhcmdOYW1lKTtcbiAgICBmbkFyZ1ZhbHVlcy5wdXNoKHZhcnNbYXJnTmFtZV0pO1xuICB9XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oLi4uZm5BcmdOYW1lcy5jb25jYXQoZm5Cb2R5KSkoLi4uZm5BcmdWYWx1ZXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuICFpc0pzT2JqZWN0KG9iaik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNDb25zdHJ1Y3Rvcih2YWx1ZTogT2JqZWN0LCB0eXBlOiBUeXBlKTogYm9vbGVhbiB7XG4gIHJldHVybiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpdFdpc2VPcih2YWx1ZXM6IG51bWJlcltdKTogbnVtYmVyIHtcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKGEsIGIpID0+IHsgcmV0dXJuIGEgfCBiOyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpdFdpc2VBbmQodmFsdWVzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIHJldHVybiB2YWx1ZXMucmVkdWNlKChhLCBiKSA9PiB7IHJldHVybiBhICYgYjsgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGUoczogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIF9nbG9iYWwuZW5jb2RlVVJJKHMpO1xufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])));