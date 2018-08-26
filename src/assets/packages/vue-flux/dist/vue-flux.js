/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "WnQP");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+rLv":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("dyZX").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "/e88":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "0/R4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "1TsA":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "2OiF":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "3CJ4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("UcBb");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("NdYU").default
module.exports.__inject__ = function (shadowRoot) {
  add("34a97ce8", content, shadowRoot)
};

/***/ }),

/***/ "4R4u":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "8PFZ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("L/w4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("NdYU").default
module.exports.__inject__ = function (shadowRoot) {
  add("0989a421", content, shadowRoot)
};

/***/ }),

/***/ "91GP":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("XKFU");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("czNK") });


/***/ }),

/***/ "Afnz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("LQAc");
var $export = __webpack_require__("XKFU");
var redefine = __webpack_require__("KroJ");
var hide = __webpack_require__("Mukb");
var Iterators = __webpack_require__("hPIQ");
var $iterCreate = __webpack_require__("QaDb");
var setToStringTag = __webpack_require__("fyDq");
var getPrototypeOf = __webpack_require__("OP3Y");
var ITERATOR = __webpack_require__("K0xU")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "DVgA":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("zhAb");
var enumBugKeys = __webpack_require__("4R4u");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "EemH":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("UqcF");
var createDesc = __webpack_require__("RjD/");
var toIObject = __webpack_require__("aCFj");
var toPrimitive = __webpack_require__("apmT");
var has = __webpack_require__("aagx");
var IE8_DOM_DEFINE = __webpack_require__("xpql");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("nh4g") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "FJW5":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa");
var anObject = __webpack_require__("y3w9");
var getKeys = __webpack_require__("DVgA");

module.exports = __webpack_require__("nh4g") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "GNH5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_id_400878d0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hj4y");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_id_400878d0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_id_400878d0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_id_400878d0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_id_400878d0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxPagination_vue_vue_type_style_index_0_id_400878d0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "HrLf":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  let i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "I1BE":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "Iw71":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var document = __webpack_require__("dyZX").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "JiEa":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "K0xU":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VTer")('wks');
var uid = __webpack_require__("ylqs");
var Symbol = __webpack_require__("dyZX").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "KroJ":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var hide = __webpack_require__("Mukb");
var has = __webpack_require__("aagx");
var SRC = __webpack_require__("ylqs")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("g3g5").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "Kuth":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("y3w9");
var dPs = __webpack_require__("FJW5");
var enumBugKeys = __webpack_require__("4R4u");
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("Iw71")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("+rLv").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "L/w4":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".controls[data-v-7dd4bdeb]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:100;opacity:0;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.controls[data-v-7dd4bdeb]:hover{opacity:1}.next[data-v-7dd4bdeb],.pause[data-v-7dd4bdeb],.play[data-v-7dd4bdeb],.previous[data-v-7dd4bdeb]{position:absolute;top:50%;margin-top:-25px;width:50px;height:50px;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.6);background-repeat:no-repeat;background-position:50%;background-size:16px 16px;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in}.previous[data-v-7dd4bdeb]{left:25px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAuUAAALlARv+XnsAAABUSURBVEjH7dYxCgAgEAPB8weX/39WFBtBbsFSY2sYyzXicDLq0wQDKQGQAKiJAZTEvC+IRgPBYAEyYOB1AAf4hAkTXxB5nySOGmaRw4pp5rhv34MOQwscJ7/MrxQAAAAASUVORK5CYII=)}.play[data-v-7dd4bdeb]{left:50%;margin-left:-25px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAs6AAALOgFkf1cNAAACy0lEQVR42uWbS2hUVxyHv78PLKKiFgXBiIgvBEVKwZWL4kJrF7oQCSpoAlYkuhCyq4hQ2goqSBFBsNBCoXShbgp15XsTQSGKqKj1QdTYFCVQiuDic5FcGkQhj0nm3vl/6+Ge+X3zO2fumTkXhoi6S51NVtQbapfallVAh//Toc7KLED1jbpPnZJVQMF99fPMAgqOqZ9mFqD6UP06s4CC8+r0MucZN8rX/wJ4pu5VP8nYgIHcU5dna8BAFgM31e8rvUiOoAHvt2FHZgEFf6iTs0yBD/EV0K3uVidkFAAwFTgB3FKXZBRQsBS4q+5XZ2YUUPAtcEVtzioAYBnwm/q7OimjgILNwAt1Z1YBADOAk+ptdUFGAQDRPy0equ213GBVRcBADgOX1Y1ZBQAsB86qP4/0BqqqAgq292+3W7IKAJgNnFI71XkZBRQ5VgBP1DZ1WjYBAzkOXFLXZhUAsBI4p55Qx2cUULAbeKxuyyoAYC7wi3pdnZNRQJHzs/5FslWdmk1AwUTgJ+Ciui6jAACBWcDfGQX0At8A8yPiBsCEROHPA80R0ZNtEXwKtETEmvfDZ2jAIeDHiHjxsRc0ogCBl8DGiOjIdiv8H3AQaBpM+EZrwFVgU0S8zLYd7gLaImL1UMM3QgOOAUcjomu4F6iqgH+AzRFxoRabhCrxlr6/zppqEb5qDbgGbIiI7lpvE8vOc6A9IlbVOnwVGnAS+CEinozWAGUV8BrYGhF/jvZAZZwCh4B5YxG+bA3oBNZHxPOxHLQMDegG9kfEyrEOX4YG/AociIhH9XoD9RLQC7RGxJl6168eU+Aofb/JnSnB9BvTBtwBvhzN7/SyNqAH+C4ilpUt/LAY4lnh0+pCGolBCuhVt9CIDPKhqco8WVrLRfAvYG1EPKjSB1qLRfAVcARYVLXwtZgC5+pxxL3eAq6p/47kaFrVBexRmxolzzsZ+iOF4pXTWQAAAABJRU5ErkJggg==)}.pause[data-v-7dd4bdeb]{left:50%;margin-left:-25px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI0OTk3MkUwNjY1NzExRThBMjA5QkQ5QTNFMUM4NDcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI0OTk3MkUxNjY1NzExRThBMjA5QkQ5QTNFMUM4NDcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjQ5OTcyREU2NjU3MTFFOEEyMDlCRDlBM0UxQzg0NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ5OTcyREY2NjU3MTFFOEEyMDlCRDlBM0UxQzg0NzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77QUaQAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlP//wDXyg1BAAAANElEQVR42uzMsQkAMAwEsY/3H9qViwS8QNC1B0pN56mu1hsAAAAAAAAAAAAAAAAAvwMtwAAbrRgBOJHO/gAAAABJRU5ErkJggg==)}.next[data-v-7dd4bdeb]{right:25px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAuUAAALlARv+XnsAAABYSURBVEjH7dYxDoAwDEPR5Ab1/S8LVEgsyL8SG3XWWK/dnKpnumA0/L4lAOSJE/DEtXfEBBxxBwYFBH8IEWJbggL4RIAAPwFWC+VDqXEtYrFyNWO5v58HB4q9HAkl7KTYAAAAAElFTkSuQmCC)}.next[data-v-7dd4bdeb]:hover,.pause[data-v-7dd4bdeb]:hover,.play[data-v-7dd4bdeb]:hover,.previous[data-v-7dd4bdeb]:hover{background-color:rgba(0,0,0,.9)}", ""]);

// exports


/***/ }),

/***/ "L8FI":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, "nav[data-v-400878d0]{position:absolute;left:0;right:0;bottom:20px;z-index:100}ul[data-v-400878d0]{display:block;margin:0;padding:0;list-style-type:none;text-align:center}li[data-v-400878d0]{display:inline-block;margin:0 8px;cursor:pointer}li span.pagination-item[data-v-400878d0]{display:inline-block;width:16px;height:16px;border:2px solid #fff;border-radius:50%;background-color:rgba(0,0,0,.7);-webkit-transition:background-color .2s ease-in,border .2s ease-in;transition:background-color .2s ease-in,border .2s ease-in}li span.pagination-item[data-v-400878d0]:hover{border:2px solid #000;background-color:#ffffa8}li.active span.pagination-item[data-v-400878d0]{background-color:#fff}", ""]);

// exports


/***/ }),

/***/ "LQAc":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "LZWt":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "Mukb":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("hswa");
var createDesc = __webpack_require__("RjD/");
module.exports = __webpack_require__("nh4g") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "NdYU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (style) {
      style.refs++
      for (var j = 0; j < style.parts.length; j++) {
        style.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        style.parts.push(addStyle(item.parts[j], shadowRoot))
      }
      if (style.parts.length > item.parts.length) {
        style.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], shadowRoot))
      }
      injectedStyles[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "OP3Y":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("aagx");
var toObject = __webpack_require__("S/j/");
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "OUCQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8PFZ");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FluxControls_vue_vue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "QaDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Kuth");
var descriptor = __webpack_require__("RjD/");
var setToStringTag = __webpack_require__("fyDq");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("Mukb")(IteratorPrototype, __webpack_require__("K0xU")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "RW0V":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("S/j/");
var $keys = __webpack_require__("DVgA");

__webpack_require__("Xtr8")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "RYi7":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "RjD/":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "S/j/":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("vhPU");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "UcBb":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("I1BE")(false);
// imports


// module
exports.push([module.i, ".vue-flux[data-v-207497b0]{position:relative}.vue-flux img[data-v-207497b0]{position:absolute;visibility:hidden}.spinner[data-v-207497b0]{position:absolute;left:50%;top:120px;margin-left:-60px;border:16px solid #f3f3f3;border-top:16px solid #3498db;border-bottom:16px solid #3498db;border-radius:50%;width:120px;height:120px;-webkit-animation:spin-data-v-207497b0 2s linear infinite;animation:spin-data-v-207497b0 2s linear infinite}@-webkit-keyframes spin-data-v-207497b0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-207497b0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.mask[data-v-207497b0]{position:relative;overflow:visible}.caption[data-v-207497b0]{position:absolute;top:0;left:0;right:0;padding:8px;color:#fff;text-align:center;background-color:rgba(0,0,0,.65);opacity:0;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;z-index:100}.caption.display[data-v-207497b0]{opacity:1}", ""]);

// exports


/***/ }),

/***/ "UqcF":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "VTer":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("g3g5");
var global = __webpack_require__("dyZX");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("LQAc") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "WnQP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("HrLf");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("i7/w");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("I1BE");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("NdYU");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxControls.vue?vue&type=template&id=7dd4bdeb&scoped=true
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"controls"},[_vm._t("controls",[_c('div',{staticClass:"previous",on:{"click":function($event){_vm.slider.showImage('previous')}}}),_c('div',{class:_vm.autoplayClass,on:{"click":function($event){_vm.slider.toggleAutoplay()}}}),_c('div',{staticClass:"next",on:{"click":function($event){_vm.slider.showImage('next')}}})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxControls.vue?vue&type=template&id=7dd4bdeb&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxControls.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FluxControlsvue_type_script_lang_js = ({
  props: {
    slider: {
      type: Object,
      required: true
    }
  },
  computed: {
    controls: function controls() {
      return this;
    },
    autoplayClass: function autoplayClass() {
      return this.slider.config.autoplay ? 'pause' : 'play';
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxControls.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxControlsvue_type_script_lang_js = (FluxControlsvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxControls.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("OUCQ")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_FluxControlsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7dd4bdeb",
  null
  ,true
)

/* harmony default export */ var FluxControlsshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxCube.vue?vue&type=template&id=ba521fd4
var FluxCubevue_type_template_id_ba521fd4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"cube",style:(_vm.style)},[_c('flux-image',{ref:"front",attrs:{"slider":_vm.slider,"index":_vm.index.front,"css":_vm.getFrontSideCss()}}),(_vm.sideSet('top'))?_c('flux-image',{ref:"top",attrs:{"slider":_vm.slider,"index":_vm.index.top,"css":_vm.getTopSideCss()}}):_vm._e(),(_vm.sideSet('back'))?_c('flux-image',{ref:"back",attrs:{"slider":_vm.slider,"index":_vm.index.back,"css":_vm.getBackSideCss()}}):_vm._e(),(_vm.sideSet('bottom'))?_c('flux-image',{ref:"bottom",attrs:{"slider":_vm.slider,"index":_vm.index.bottom,"css":_vm.getBottomSideCss()}}):_vm._e(),(_vm.sideSet('left'))?_c('flux-image',{ref:"left",attrs:{"slider":_vm.slider,"index":_vm.index.left,"css":_vm.getLeftSideCss()}}):_vm._e(),(_vm.sideSet('right'))?_c('flux-image',{ref:"right",attrs:{"slider":_vm.slider,"index":_vm.index.right,"css":_vm.getRightSideCss()}}):_vm._e()],1)}
var FluxCubevue_type_template_id_ba521fd4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxCube.vue?vue&type=template&id=ba521fd4

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("91GP");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxImage.vue?vue&type=template&id=9ccae48a
var FluxImagevue_type_template_id_9ccae48a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"image",style:(_vm.style)})}
var FluxImagevue_type_template_id_9ccae48a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxImage.vue?vue&type=template&id=9ccae48a

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("xfY5");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxImage.vue?vue&type=script&lang=js


//
//
//
//
/* harmony default export */ var FluxImagevue_type_script_lang_js = ({
  data: function data() {
    return {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 'auto'
      }
    };
  },
  props: {
    slider: {
      type: Object,
      required: true
    },
    index: {
      type: [Number, String],
      required: true
    },
    css: {
      type: Object,
      default: function _default() {
        return {
          top: 0,
          left: 0
        };
      }
    }
  },
  computed: {
    properties: function properties() {
      return this.slider.properties[this.index];
    }
  },
  watch: {
    index: function index(newIndex, oldIndex) {
      this.init();
    }
  },
  created: function created() {
    this.init();
  },
  methods: {
    init: function init() {
      this.setCss(this.css);
      if (typeof this.index === 'number') this.initImage();else if (/^#/.test(this.index)) this.initColor();
    },
    initColor: function initColor() {
      this.setCss({
        backgroundColor: this.index
      });
    },
    initImage: function initImage() {
      if (!this.properties) return;
      var image = {
        top: 0,
        left: 0,
        width: this.properties.width,
        height: this.properties.height,
        src: 'url("' + this.properties.src + '")'
      };

      if (image.height / image.width >= this.slider.size.height / this.slider.size.width) {
        image.height = Math.ceil(this.slider.size.width * image.height / image.width);
        image.width = this.slider.size.width;
        image.top = Math.floor((this.slider.size.height - image.height) / 2);
      } else {
        image.width = Math.ceil(this.slider.size.height * image.width / image.height);
        image.height = this.slider.size.height;
        image.left = Math.floor((this.slider.size.width - image.width) / 2);
      }

      image.top -= parseInt(this.css.top);
      image.left -= parseInt(this.css.left);
      this.setCss({
        top: 0,
        left: 0,
        backgroundImage: image.src,
        backgroundSize: image.width + 'px ' + image.height + 'px',
        backgroundPosition: image.left + 'px ' + image.top + 'px',
        backgroundRepeat: 'no-repeat'
      });
    },
    setCss: function setCss(css) {
      this.style = Object.assign({}, this.style, css);
    },
    transform: function transform(css) {
      var _this = this;

      this.$refs.image.clientHeight;
      this.$nextTick(function () {
        _this.setCss(css);
      });
    },
    show: function show() {
      this.setCss({
        visibility: 'visible'
      });
    },
    hide: function hide() {
      this.setCss({
        visibility: 'hidden'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxImage.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxImagevue_type_script_lang_js = (FluxImagevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxImage.vue





/* normalize component */

var FluxImage_component = normalizeComponent(
  components_FluxImagevue_type_script_lang_js,
  FluxImagevue_type_template_id_9ccae48a_render,
  FluxImagevue_type_template_id_9ccae48a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxImage = (FluxImage_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxCube.vue?vue&type=script&lang=js

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxCubevue_type_script_lang_js = ({
  name: 'FluxCube',
  components: {
    FluxImage: FluxImage
  },
  data: function data() {
    return {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        overflow: 'visible',
        transformStyle: 'preserve-3d'
      }
    };
  },
  props: {
    slider: {
      type: Object,
      required: true
    },
    index: {
      type: Object,
      required: true
    },
    css: {
      type: Object,
      default: function _default() {
        return {
          top: 0,
          left: 0
        };
      }
    }
  },
  computed: {
    front: function front() {
      return this.$refs.front;
    },
    top: function top() {
      return this.$refs.top;
    },
    back: function back() {
      return this.$refs.back;
    },
    bottom: function bottom() {
      return this.$refs.bottom;
    },
    left: function left() {
      return this.$refs.left;
    },
    right: function right() {
      return this.$refs.right;
    }
  },
  created: function created() {
    var css = this.css;
    if (!css.width) css.width = this.slider.size.width + 'px';
    if (!css.height) css.height = this.slider.size.height + 'px';
    this.setCss(css);
  },
  methods: {
    sideSet: function sideSet(side) {
      return this.index[side] !== undefined;
    },
    setCss: function setCss(css) {
      this.style = Object.assign({}, this.style, css);
    },
    getBasicSideCss: function getBasicSideCss(side) {
      var css = {};

      if (typeof this.index[side] === 'number') {
        css.top = this.css.top;
        css.left = this.css.left;
      }

      return css;
    },
    getFrontSideCss: function getFrontSideCss() {
      var css = this.getBasicSideCss('front');
      return css;
    },
    getTopSideCss: function getTopSideCss() {
      var css = this.getBasicSideCss('top');
      var t = {
        rx: '90',
        tx: '0',
        ty: '-' + Math.ceil(this.slider.size.height / 2),
        tz: Math.ceil(this.slider.size.height / 2)
      };
      css.transform = 'rotateX(' + t.rx + 'deg) translate3d(' + t.tx + 'px, ' + t.ty + 'px, ' + t.tz + 'px)';
      return css;
    },
    getBackSideCss: function getBackSideCss() {
      var css = this.getBasicSideCss('back');
      css.transform = 'rotateY(180deg)';
      css.backfaceVisibility = 'hidden';
      return css;
    },
    getBottomSideCss: function getBottomSideCss() {
      var css = this.getBasicSideCss('bottom');
      var t = {
        rx: '-90',
        tx: '0',
        ty: Math.ceil(this.slider.size.height / 2),
        tz: Math.ceil(this.slider.size.height / 2)
      };
      css.transform = 'rotateX(' + t.rx + 'deg) translate3d(' + t.tx + 'px, ' + t.ty + 'px, ' + t.tz + 'px)';
      return css;
    },
    getLeftSideCss: function getLeftSideCss() {
      var css = this.getBasicSideCss('left');
      var size = {
        width: parseInt(typeof this.index.left === 'number' ? this.style.width : this.style.height),
        height: parseInt(this.style.height)
      };
      css.width = size.width + 'px';
      css.height = size.height + 'px';
      var t = {
        ry: '-90',
        tx: -Math.ceil(size.width / 2),
        ty: '0',
        tz: Math.ceil(size.width / 2)
      };
      css.transform = 'rotateY(' + t.ry + 'deg) translate3d(' + t.tx + 'px, ' + t.ty + 'px, ' + t.tz + 'px)';
      return css;
    },
    getRightSideCss: function getRightSideCss() {
      var css = this.getBasicSideCss('right');
      var size = {
        width: parseInt(typeof this.index.right === 'number' ? this.style.width : this.style.height),
        height: parseInt(this.style.height)
      };
      css.width = size.width + 'px';
      css.height = size.height + 'px';
      var t = {
        ry: '90',
        tx: Math.ceil(size.width / 2),
        ty: '0',
        tz: Math.ceil(parseInt(this.style.width) - size.width / 2)
      };
      css.transform = 'rotateY(' + t.ry + 'deg) translate3d(' + t.tx + 'px, ' + t.ty + 'px, ' + t.tz + 'px)';
      return css;
    },
    transform: function transform(css) {
      var _this = this;

      this.$refs.cube.clientHeight;
      this.$nextTick(function () {
        _this.setCss(css);
      });
    },
    turn: function turn(direction, to) {
      if (direction === 'top') this.turnTop();else if (direction === 'back') this.turnBack(to);else if (direction === 'bottom') this.turnBottom();else if (direction === 'left') this.turnLeft();else if (direction === 'right') this.turnRight();
    },
    turnTop: function turnTop() {
      var height = parseInt(this.style.height);
      var t = {
        rx: 90,
        ty: -Math.ceil(height / 2),
        tz: Math.ceil(height / 2)
      };
      this.transform({
        transform: 'rotateX(' + t.rx + 'deg) translate3d(0, ' + t.ty + 'px, ' + t.tz + 'px)'
      });
    },
    turnBack: function turnBack(to) {
      var deg = 180;
      if (to === 'left') deg = -180;
      this.transform({
        transform: 'rotateY(' + deg + 'deg)'
      });
    },
    turnBottom: function turnBottom() {
      var height = parseInt(this.style.height);
      var t = {
        rx: -90,
        ty: Math.ceil(height / 2),
        tz: Math.ceil(height / 2)
      };
      this.transform({
        transform: 'rotateX(' + t.rx + 'deg) translate3d(0, ' + t.ty + 'px, ' + t.tz + 'px)'
      });
    },
    turnLeft: function turnLeft() {
      var width = parseInt(this.style.width);
      var t = {
        ry: 90,
        tx: Math.ceil(width / 2),
        tz: Math.ceil(width / 2)
      };
      this.transform({
        transform: 'rotateY(' + t.ry + 'deg) translate3d(' + t.tx + 'px, 0, ' + t.tz + 'px)'
      });
    },
    turnRight: function turnRight() {
      var width = parseInt(this.style.width);
      var t = {
        ry: -90,
        tx: -Math.ceil(width / 2),
        tz: Math.ceil(width / 2)
      };
      this.transform({
        transform: 'rotateY(' + t.ry + 'deg) translate3d(' + t.tx + 'px, 0, ' + t.tz + 'px)'
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxCube.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxCubevue_type_script_lang_js = (FluxCubevue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxCube.vue?shadow





/* normalize component */

var FluxCubeshadow_component = normalizeComponent(
  components_FluxCubevue_type_script_lang_js,
  FluxCubevue_type_template_id_ba521fd4_render,
  FluxCubevue_type_template_id_ba521fd4_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var FluxCubeshadow = (FluxCubeshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxGrid.vue?vue&type=template&id=2f3e3565
var FluxGridvue_type_template_id_2f3e3565_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.style)},_vm._l((_vm.numTiles),function(i){return _c('flux-cube',{key:i,ref:"tiles",refInFor:true,attrs:{"slider":_vm.slider,"index":_vm.index,"css":_vm.getTileCss(i)}})}))}
var FluxGridvue_type_template_id_2f3e3565_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxGrid.vue?vue&type=template&id=2f3e3565

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("rGqo");

// CONCATENATED MODULE: ./src/components/FluxCube.vue





/* normalize component */

var FluxCube_component = normalizeComponent(
  components_FluxCubevue_type_script_lang_js,
  FluxCubevue_type_template_id_ba521fd4_render,
  FluxCubevue_type_template_id_ba521fd4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FluxCube = (FluxCube_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxGrid.vue?vue&type=script&lang=js



//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxGridvue_type_script_lang_js = ({
  name: 'FluxGrid',
  components: {
    FluxCube: FluxCube
  },
  data: function data() {
    return {
      numTiles: 0,
      tile: {
        width: 1,
        height: 1,
        remainder: {
          width: 0,
          height: 0
        }
      },
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '12'
      }
    };
  },
  props: {
    slider: {
      type: Object,
      required: true
    },
    numRows: {
      type: Number,
      required: true
    },
    numCols: {
      type: Number,
      required: true
    },
    index: {
      type: Object,
      required: true
    },
    tileCss: {
      type: Object,
      default: function _default() {}
    }
  },
  computed: {
    tiles: function tiles() {
      return this.$refs.tiles;
    }
  },
  created: function created() {
    this.numTiles = this.numRows * this.numCols;
    this.tile.width = Math.floor(this.slider.size.width / this.numCols);
    this.tile.height = Math.floor(this.slider.size.height / this.numRows);
    this.tile.remainder.width = this.slider.size.width % this.numCols;
    this.tile.remainder.height = this.slider.size.height % this.numRows;
  },
  methods: {
    getRow: function getRow(i) {
      var row = Math.floor(i / this.numCols);
      return row;
    },
    getCol: function getCol(i) {
      var col = i % this.numCols;
      return col;
    },
    getTileCss: function getTileCss(i) {
      i--;
      var row = this.getRow(i);
      var col = this.getCol(i);
      var width = this.tile.width + (col < this.tile.remainder.width ? 1 : 0);
      var height = this.tile.height + (row < this.tile.remainder.height ? 1 : 0);
      var top = row * this.tile.height + (row < this.tile.remainder.height ? row : this.tile.remainder.height);
      var left = col * this.tile.width + (col < this.tile.remainder.width ? col : this.tile.remainder.width);
      var zIndex = i + 1 < this.numCols / 2 ? 13 + i : 13 + this.numCols - i;
      return Object.assign({}, this.tileCss, {
        width: width + 'px',
        height: height + 'px',
        top: top + 'px',
        left: left + 'px',
        zIndex: zIndex
      });
    },
    setCss: function setCss(css) {
      this.style = Object.assign({}, this.style, css);
    },
    transform: function transform(func) {
      var _this = this;

      this.$nextTick(function () {
        _this.tiles.forEach(function (tile, i) {
          return func(tile, i);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxGrid.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxGridvue_type_script_lang_js = (FluxGridvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxGrid.vue?shadow





/* normalize component */

var FluxGridshadow_component = normalizeComponent(
  components_FluxGridvue_type_script_lang_js,
  FluxGridvue_type_template_id_2f3e3565_render,
  FluxGridvue_type_template_id_2f3e3565_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var FluxGridshadow = (FluxGridshadow_component.exports);
// CONCATENATED MODULE: ./src/components/FluxImage.vue?shadow





/* normalize component */

var FluxImageshadow_component = normalizeComponent(
  components_FluxImagevue_type_script_lang_js,
  FluxImagevue_type_template_id_9ccae48a_render,
  FluxImagevue_type_template_id_9ccae48a_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var FluxImageshadow = (FluxImageshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxPagination.vue?vue&type=template&id=400878d0&scoped=true
var FluxPaginationvue_type_template_id_400878d0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('ul',_vm._l((_vm.slider.imagesLoaded),function(i){return _c('li',{key:i,class:_vm.getClass(i - 1),attrs:{"title":_vm.getTitle(i - 1)},on:{"click":function($event){_vm.slider.showImage(i - 1);}}},[_vm._t("paginationItem",[_c('span',{staticClass:"pagination-item"})],{paginationItem:"",index:i})],2)}))])}
var FluxPaginationvue_type_template_id_400878d0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxPagination.vue?vue&type=template&id=400878d0&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxPagination.vue?vue&type=script&lang=js
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FluxPaginationvue_type_script_lang_js = ({
  props: {
    slider: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentTransition: function currentTransition() {
      return this.slider.transition.current;
    },
    currentImageIndex: function currentImageIndex() {
      if (this.slider.currentImage === undefined) return undefined;
      return this.slider.currentImage.index;
    },
    nextImageIndex: function nextImageIndex() {
      return this.slider.nextImage.index;
    }
  },
  methods: {
    getClass: function getClass(i) {
      if (this.currentTransition !== undefined && this.nextImageIndex === i) return 'active';
      if (this.currentTransition === undefined && this.currentImageIndex === i) return 'active';
      return '';
    },
    getTitle: function getTitle(i) {
      return this.slider.captions[i] || '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxPagination.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxPaginationvue_type_script_lang_js = (FluxPaginationvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxPagination.vue?shadow



function FluxPaginationshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("GNH5")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var FluxPaginationshadow_component = normalizeComponent(
  components_FluxPaginationvue_type_script_lang_js,
  FluxPaginationvue_type_template_id_400878d0_scoped_true_render,
  FluxPaginationvue_type_template_id_400878d0_scoped_true_staticRenderFns,
  false,
  FluxPaginationshadow_injectStyles,
  "400878d0",
  null
  ,true
)

/* harmony default export */ var FluxPaginationshadow = (FluxPaginationshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxVortex.vue?vue&type=template&id=36a57580
var FluxVortexvue_type_template_id_36a57580_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.style)},_vm._l((_vm.numCircles),function(i){return _c('flux-image',{key:i,ref:"tiles",refInFor:true,attrs:{"slider":_vm.slider,"index":_vm.index,"css":_vm.getTileCss(i)}})}))}
var FluxVortexvue_type_template_id_36a57580_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxVortex.vue?vue&type=template&id=36a57580

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxVortex.vue?vue&type=script&lang=js



//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FluxVortexvue_type_script_lang_js = ({
  name: 'FluxVortex',
  components: {
    FluxImage: FluxImage
  },
  data: function data() {
    return {
      diag: undefined,
      radius: undefined,
      tile: {
        top: undefined,
        left: undefined
      },
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '12'
      }
    };
  },
  props: {
    slider: {
      type: Object,
      required: true
    },
    numCircles: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    size: function size() {
      return this.slider.size;
    },
    tiles: function tiles() {
      return this.$refs.tiles;
    }
  },
  created: function created() {
    var width = this.size.width;
    var height = this.size.height;
    this.diag = Math.ceil(Math.sqrt(width * width + height * height));
    this.radius = Math.ceil(this.diag / 2 / this.numCircles);
    this.tile.top = Math.ceil(height / 2 - this.radius * this.numCircles);
    this.tile.left = Math.ceil(width / 2 - this.radius * this.numCircles);
  },
  mounted: function mounted() {
    var _this = this;

    this.tiles.forEach(function (tile, i) {
      tile.setCss({
        top: _this.getTileTop(i) + 'px',
        left: _this.getTileLeft(i) + 'px',
        backgroundRepeat: 'repeat'
      });
    });
  },
  methods: {
    getTileTop: function getTileTop(i) {
      return this.tile.top + this.radius * i;
    },
    getTileLeft: function getTileLeft(i) {
      return this.tile.left + this.radius * i;
    },
    getTileCss: function getTileCss(i) {
      i--;
      var width = (this.numCircles - i) * this.radius * 2;
      var height = width;
      var zIndex = 13 + i;
      return Object.assign({}, this.tileCss, {
        top: this.getTileTop(i) + 'px',
        left: this.getTileLeft(i) + 'px',
        width: width + 'px',
        height: height + 'px',
        borderRadius: Math.ceil(width / 2) + 'px',
        zIndex: zIndex
      });
    },
    setCss: function setCss(css) {
      this.style = Object.assign({}, this.style, css);
    },
    transform: function transform(func) {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.tiles.forEach(function (tile, i) {
          return func(tile, i);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxVortex.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxVortexvue_type_script_lang_js = (FluxVortexvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxVortex.vue?shadow





/* normalize component */

var FluxVortexshadow_component = normalizeComponent(
  components_FluxVortexvue_type_script_lang_js,
  FluxVortexvue_type_template_id_36a57580_render,
  FluxVortexvue_type_template_id_36a57580_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var FluxVortexshadow = (FluxVortexshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxWrapper.vue?vue&type=template&id=709f227c
var FluxWrappervue_type_template_id_709f227c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper",style:(_vm.style)},[_vm._t("default")],2)}
var FluxWrappervue_type_template_id_709f227c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FluxWrapper.vue?vue&type=template&id=709f227c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FluxWrapper.vue?vue&type=script&lang=js

//
//
//
//
//
//
/* harmony default export */ var FluxWrappervue_type_script_lang_js = ({
  data: function data() {
    return {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 12
      }
    };
  },
  methods: {
    setCss: function setCss(css) {
      this.style = Object.assign({}, this.style, css);
    },
    transform: function transform(css) {
      var _this = this;

      this.$refs.wrapper.clientHeight;
      this.$nextTick(function () {
        _this.setCss(css);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/FluxWrapper.vue?vue&type=script&lang=js
 /* harmony default export */ var components_FluxWrappervue_type_script_lang_js = (FluxWrappervue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/FluxWrapper.vue?shadow





/* normalize component */

var FluxWrappershadow_component = normalizeComponent(
  components_FluxWrappervue_type_script_lang_js,
  FluxWrappervue_type_template_id_709f227c_render,
  FluxWrappervue_type_template_id_709f227c_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var FluxWrappershadow = (FluxWrappershadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"C://Users//ragnar//Proyectos//vue-flux//node_modules//.cache//vue-loader","cacheIdentifier":"061342f1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueFlux.vue?vue&type=template&id=207497b0&scoped=true
var VueFluxvue_type_template_id_207497b0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"vue-flux"},[_vm._l((_vm.preload),function(src,index){return _c('img',{key:src,ref:"images",refInFor:true,attrs:{"src":_vm.path + src,"alt":""},on:{"load":function($event){_vm.addImage(index)},"error":function($event){_vm.addImage(index)}}})}),_c('div',{ref:"mask",staticClass:"mask",style:(_vm.sizePx)},[(_vm.transition.current)?_c(_vm.transition.current,{ref:"transition",tag:"component",attrs:{"slider":_vm.slider,"direction":_vm.direction}}):_vm._e(),(!_vm.preload.length)?_c('flux-image',{ref:"image1",attrs:{"slider":_vm.slider,"index":_vm.image1Index}}):_vm._e(),(!_vm.preload.length)?_c('flux-image',{ref:"image2",attrs:{"slider":_vm.slider,"index":_vm.image2Index}}):_vm._e()],1),(!_vm.loaded)?_c('div',{staticClass:"spinner"}):_vm._e(),_c('div',{staticClass:"caption",class:_vm.currentCaption? 'display' : ''},[_vm._v(_vm._s(_vm.currentCaption))]),(_vm.config.showControls && _vm.loaded)?_c('flux-controls',{ref:"controls",attrs:{"slider":_vm.slider}},[(typeof _vm.$slots.controls !== 'undefined')?_c('template',{slot:"controls"},[_vm._t("controls")],2):_vm._e()],2):_vm._e(),(_vm.config.showPagination && _vm.loaded)?_c('flux-pagination',{ref:"pagination",attrs:{"slider":_vm.slider},scopedSlots:_vm._u([{key:"paginationItem",fn:function(paginationItem){return typeof _vm.$scopedSlots.paginationItem !== 'undefined'?[_vm._t("paginationItem",null,{index:paginationItem.index})]:undefined}}])}):_vm._e()],2)}
var VueFluxvue_type_template_id_207497b0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VueFlux.vue?vue&type=template&id=207497b0&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("yt8O");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("RW0V");

// EXTERNAL MODULE: ./src/components/FluxControls.vue?vue&type=style&index=0&id=7dd4bdeb&lang=scss&scoped=true
var FluxControlsvue_type_style_index_0_id_7dd4bdeb_lang_scss_scoped_true = __webpack_require__("OUCQ");

// CONCATENATED MODULE: ./src/components/FluxControls.vue






/* normalize component */

var FluxControls_component = normalizeComponent(
  components_FluxControlsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7dd4bdeb",
  null
  
)

/* harmony default export */ var FluxControls = (FluxControls_component.exports);
// EXTERNAL MODULE: ./src/components/FluxPagination.vue?vue&type=style&index=0&id=400878d0&lang=scss&scoped=true
var FluxPaginationvue_type_style_index_0_id_400878d0_lang_scss_scoped_true = __webpack_require__("GNH5");

// CONCATENATED MODULE: ./src/components/FluxPagination.vue






/* normalize component */

var FluxPagination_component = normalizeComponent(
  components_FluxPaginationvue_type_script_lang_js,
  FluxPaginationvue_type_template_id_400878d0_scoped_true_render,
  FluxPaginationvue_type_template_id_400878d0_scoped_true_staticRenderFns,
  false,
  null,
  "400878d0",
  null
  
)

/* harmony default export */ var FluxPagination = (FluxPagination_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VueFlux.vue?vue&type=script&lang=js




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var VueFluxvue_type_script_lang_js = ({
  name: 'VueFlux',
  components: {
    FluxImage: FluxImage,
    FluxControls: FluxControls,
    FluxPagination: FluxPagination
  },
  data: function data() {
    return {
      config: {
        autoplay: false,
        fullscreen: false,
        delay: 5000,
        showPagination: false,
        showControls: false,
        width: '100%',
        height: 'auto'
      },
      size: {
        width: undefined,
        height: undefined
      },
      timer: undefined,
      transitionNames: [],
      transition: {
        current: undefined,
        last: undefined
      },
      image1Index: 0,
      image2Index: 1,
      imagesLoaded: 0,
      loaded: false,
      preload: [],
      properties: []
    };
  },
  props: {
    options: {
      type: Object,
      default: function _default() {}
    },
    transitions: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    captions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    slider: function slider() {
      return this;
    },
    controls: function controls() {
      return this.$refs.controls;
    },
    pagination: function pagination() {
      return this.$refs.pagination;
    },
    mask: function mask() {
      return this.$refs.mask;
    },
    sizePx: function sizePx() {
      if (typeof this.size.width !== 'number' || typeof this.size.height !== 'number') return {};
      return {
        width: this.size.width + 'px',
        height: this.size.height + 'px'
      };
    },
    currentImage: function currentImage() {
      if (this.$refs.image1 === undefined) return undefined;
      return this.$refs.image1.style.zIndex === 11 ? this.$refs.image1 : this.$refs.image2;
    },
    nextImage: function nextImage() {
      return this.$refs.image1.style.zIndex === 10 ? this.$refs.image1 : this.$refs.image2;
    },
    currentCaption: function currentCaption() {
      if (!this.loaded) return '';
      if (this.transition.current !== undefined) return '';
      if (this.currentImage === undefined) return '';
      if (this.captions[this.currentImage.index] === undefined) return '';
      return this.captions[this.currentImage.index];
    },
    nextTransition: function nextTransition() {
      if (!this.transitionNames.length) return undefined;
      var nextIndex = this.transition.last + 1;
      if (nextIndex >= this.transitionNames.length) nextIndex = 0;
      return this.transitionNames[nextIndex];
    },
    direction: function direction() {
      return this.currentImage.index < this.nextImage.index ? 'right' : 'left';
    }
  },
  created: function created() {
    this.config = Object.assign({}, this.config, this.options);
    this.size.width = this.config.width;
    this.size.height = this.config.height;
    Object.assign(this.$options.components, this.transitions);
    this.transitionNames = Object.keys(this.transitions);
    if (this.transitionNames.length > 0) this.transition.last = this.transitionNames.length - 1;
  },
  mounted: function mounted() {
    if (this.images.length < 2 || this.transitionNames.length === 0) return;
    this.preloadImages(this.images);
    window.addEventListener('resize', this.resize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resize);
  },
  methods: {
    preloadImages: function preloadImages(images) {
      this.preload = images.slice(0);
    },
    addImage: function addImage(i) {
      this.imagesLoaded++;
      var img = this.$refs.images[i];

      if (img.naturalWidth || img.width) {
        this.properties[i] = {
          src: img.src,
          width: img.naturalWidth || img.width,
          height: img.naturalHeight || img.height
        };
      }

      if (this.imagesLoaded === this.preload.length) this.init();
    },
    resize: function resize() {
      var _this = this;

      this.size.width = undefined;
      this.size.height = undefined;
      if (this.config.width.indexOf('px') !== -1) this.size.width = parseInt(this.config.width);
      if (this.config.height.indexOf('px') !== -1) this.size.height = parseInt(this.config.height);
      if (this.size.width && this.size.height) return;
      this.$nextTick(function () {
        // Find width
        _this.size.width = _this.$refs.container.offsetWidth; // Find height

        if (_this.config.height === 'auto' && _this.$refs.container.offsetHeight) {
          _this.size.height = _this.$refs.container.offsetHeight;
        } else {
          _this.size.height = Math.floor(_this.size.width / 16 * 9);
        }

        _this.$refs.image1.initImage();

        _this.$refs.image2.initImage();
      });
    },
    init: function init() {
      var _this2 = this;

      this.properties = this.properties.filter(function (p) {
        return p;
      });
      this.preload = [];
      this.resize();
      this.$nextTick(function () {
        _this2.$refs.image1.setCss({
          zIndex: 11
        });

        _this2.$refs.image2.setCss({
          zIndex: 10
        });

        _this2.$refs.image1.reference = 'image1Index';
        _this2.$refs.image2.reference = 'image2Index';
        _this2.loaded = true;
        if (_this2.config.autoplay === true) _this2.play();
      });
    },
    play: function play(index) {
      var _this3 = this;

      this.config.autoplay = true;
      this.timer = setTimeout(function () {
        _this3.showImage(index);
      }, this.config.delay);
    },
    stop: function stop() {
      this.config.autoplay = false;
      clearTimeout(this.timer);
    },
    toggleAutoplay: function toggleAutoplay() {
      if (this.config.autoplay) this.stop();else this.play();
    },
    getIndex: function getIndex(index) {
      if (typeof index === 'number') return index;
      var currentIndex = this.currentImage.index;
      if (index === 'previous') return currentIndex > 0 ? currentIndex - 1 : this.images.length - 1;
      return currentIndex + 1 < this.images.length ? currentIndex + 1 : 0;
    },
    showImage: function showImage(index, transition) {
      var _this4 = this;

      if (!this.loaded || this.$refs.image1 === undefined) return; // If there is a transition running prevent showing new image

      if (this.transition.current !== undefined) return false;
      if (this.currentImage.index === index) return false;
      clearTimeout(this.timer); // Get image index if next or previous

      index = this.getIndex(index); // Prepare images

      var currentImage = this.currentImage;
      var nextImage = this.nextImage;
      this[nextImage.reference] = index;
      nextImage.show();
      this.$nextTick(function () {
        // Get transition
        if (transition === undefined) transition = _this4.nextTransition;

        if (transition) {
          _this4.transition.last = _this4.transitionNames.indexOf(transition);
          _this4.transition.current = transition;
        }

        _this4.$nextTick(function () {
          var timeout = transition !== undefined ? _this4.$refs.transition.totalDuration + 20 : 0;
          setTimeout(function () {
            currentImage.setCss({
              zIndex: 10
            });
            nextImage.setCss({
              zIndex: 11
            });
            _this4.transition.current = undefined; // Play next if autoplay is true

            if (_this4.config.autoplay === true) {
              _this4.timer = setTimeout(function () {
                _this4.showImage('next');
              }, _this4.config.delay);
            }
          }, timeout);
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/VueFlux.vue?vue&type=script&lang=js
 /* harmony default export */ var components_VueFluxvue_type_script_lang_js = (VueFluxvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/VueFlux.vue?shadow



function VueFluxshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("uTTb")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var VueFluxshadow_component = normalizeComponent(
  components_VueFluxvue_type_script_lang_js,
  VueFluxvue_type_template_id_207497b0_scoped_true_render,
  VueFluxvue_type_template_id_207497b0_scoped_true_staticRenderFns,
  false,
  VueFluxshadow_injectStyles,
  "207497b0",
  null
  ,true
)

/* harmony default export */ var VueFluxshadow = (VueFluxshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vue-flux-flux-controls', vue_wc_wrapper(external_Vue_default.a, FluxControlsshadow))


window.customElements.define('vue-flux-flux-cube', vue_wc_wrapper(external_Vue_default.a, FluxCubeshadow))


window.customElements.define('vue-flux-flux-grid', vue_wc_wrapper(external_Vue_default.a, FluxGridshadow))


window.customElements.define('vue-flux-flux-image', vue_wc_wrapper(external_Vue_default.a, FluxImageshadow))


window.customElements.define('vue-flux-flux-pagination', vue_wc_wrapper(external_Vue_default.a, FluxPaginationshadow))


window.customElements.define('vue-flux-flux-vortex', vue_wc_wrapper(external_Vue_default.a, FluxVortexshadow))


window.customElements.define('vue-flux-flux-wrapper', vue_wc_wrapper(external_Vue_default.a, FluxWrappershadow))


window.customElements.define('vue-flux-vue-flux', vue_wc_wrapper(external_Vue_default.a, VueFluxshadow))

/***/ }),

/***/ "XKFU":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("dyZX");
var core = __webpack_require__("g3g5");
var hide = __webpack_require__("Mukb");
var redefine = __webpack_require__("KroJ");
var ctx = __webpack_require__("m0Pp");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "Xbzi":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
var setPrototypeOf = __webpack_require__("i5dc").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "Xtr8":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("XKFU");
var core = __webpack_require__("g3g5");
var fails = __webpack_require__("eeVq");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "YTvA":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("VTer")('keys');
var uid = __webpack_require__("ylqs");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "Ymqv":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("LZWt");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "aCFj":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("Ymqv");
var defined = __webpack_require__("vhPU");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "aagx":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "apmT":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("0/R4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "czNK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("DVgA");
var gOPS = __webpack_require__("JiEa");
var pIE = __webpack_require__("UqcF");
var toObject = __webpack_require__("S/j/");
var IObject = __webpack_require__("Ymqv");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("eeVq")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "d/Gc":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("RYi7");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "dyZX":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "eeVq":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "fyDq":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("hswa").f;
var has = __webpack_require__("aagx");
var TAG = __webpack_require__("K0xU")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "g3g5":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "hPIQ":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "hj4y":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("L8FI");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("NdYU").default
module.exports.__inject__ = function (shadowRoot) {
  add("3a2ff716", content, shadowRoot)
};

/***/ }),

/***/ "hswa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("y3w9");
var IE8_DOM_DEFINE = __webpack_require__("xpql");
var toPrimitive = __webpack_require__("apmT");
var dP = Object.defineProperty;

exports.f = __webpack_require__("nh4g") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "i5dc":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("0/R4");
var anObject = __webpack_require__("y3w9");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("m0Pp")(Function.call, __webpack_require__("EemH").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "i7/w":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "kJMx":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("zhAb");
var hiddenKeys = __webpack_require__("4R4u").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "m0Pp":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("2OiF");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "nGyu":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("K0xU")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("Mukb")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "ne8i":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("RYi7");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "nh4g":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("eeVq")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "qncB":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("XKFU");
var defined = __webpack_require__("vhPU");
var fails = __webpack_require__("eeVq");
var spaces = __webpack_require__("/e88");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "rGqo":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("yt8O");
var getKeys = __webpack_require__("DVgA");
var redefine = __webpack_require__("KroJ");
var global = __webpack_require__("dyZX");
var hide = __webpack_require__("Mukb");
var Iterators = __webpack_require__("hPIQ");
var wks = __webpack_require__("K0xU");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "uTTb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_id_207497b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3CJ4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_id_207497b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_id_207497b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_id_207497b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_id_207497b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFlux_vue_vue_type_style_index_0_id_207497b0_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "vhPU":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "w2a5":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("aCFj");
var toLength = __webpack_require__("ne8i");
var toAbsoluteIndex = __webpack_require__("d/Gc");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "xfY5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("dyZX");
var has = __webpack_require__("aagx");
var cof = __webpack_require__("LZWt");
var inheritIfRequired = __webpack_require__("Xbzi");
var toPrimitive = __webpack_require__("apmT");
var fails = __webpack_require__("eeVq");
var gOPN = __webpack_require__("kJMx").f;
var gOPD = __webpack_require__("EemH").f;
var dP = __webpack_require__("hswa").f;
var $trim = __webpack_require__("qncB").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("Kuth")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("nh4g") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("KroJ")(global, NUMBER, $Number);
}


/***/ }),

/***/ "xpql":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("nh4g") && !__webpack_require__("eeVq")(function () {
  return Object.defineProperty(__webpack_require__("Iw71")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "y3w9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("0/R4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ylqs":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "yt8O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("nGyu");
var step = __webpack_require__("1TsA");
var Iterators = __webpack_require__("hPIQ");
var toIObject = __webpack_require__("aCFj");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("Afnz")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "zhAb":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("aagx");
var toIObject = __webpack_require__("aCFj");
var arrayIndexOf = __webpack_require__("w2a5")(false);
var IE_PROTO = __webpack_require__("YTvA")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ })

/******/ });
//# sourceMappingURL=vue-flux.js.map