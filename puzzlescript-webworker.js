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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index-webworker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! core-js/shim */ "./node_modules/core-js/shim.js");__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");__webpack_require__(/*! core-js/fn/regexp/escape */ "./node_modules/core-js/fn/regexp/escape.js");if(global._babelPolyfill){throw new Error("only one instance of babel-polyfill is allowed");}global._babelPolyfill=true;var DEFINE_PROPERTY="defineProperty";function define(O,key,value){O[key]||Object[DEFINE_PROPERTY](O,key,{writable:true,configurable:true,value:value});}define(String.prototype,"padLeft","".padStart);define(String.prototype,"padRight","".padEnd);"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key){[][key]&&define(Array,key,Function.call.bind([][key]));});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/bitset/bitset.js":
/*!***************************************!*\
  !*** ./node_modules/bitset/bitset.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * @license BitSet.js v5.0.4 4/3/2018
 * http://www.xarg.org/2014/03/javascript-bit-array/
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(root){'use strict';/**
   * The number of bits of a word
   * @const
   * @type number
   */var WORD_LENGTH=32;/**
   * The log base 2 of WORD_LENGTH
   * @const
   * @type number
   */var WORD_LOG=5;/**
   * Calculates the number of set bits
   *
   * @param {number} v
   * @returns {number}
   */function popCount(v){// Warren, H. (2009). Hacker`s Delight. New York, NY: Addison-Wesley
v-=v>>>1&0x55555555;v=(v&0x33333333)+(v>>>2&0x33333333);return(v+(v>>>4)&0xF0F0F0F)*0x1010101>>>24;}/**
   * Divide a number in base two by B
   *
   * @param {Array} arr
   * @param {number} B
   * @returns {number}
   */function divide(arr,B){var r=0;for(var i=0;i<arr.length;i++){r*=2;var d=(arr[i]+r)/B|0;r=(arr[i]+r)%B;arr[i]=d;}return r;}/**
   * Parses the parameters and set variable P
   *
   * @param {Object} P
   * @param {string|BitSet|Array|Uint8Array|number=} val
   */function parse(P,val){if(val==null){P['data']=[0,0,0,0,0,0,0,0,0,0];P['_']=0;return;}if(val instanceof BitSet){P['data']=val['data'];P['_']=val['_'];return;}switch(_typeof(val)){case'number':P['data']=[val|0];P['_']=0;break;case'string':var base=2;var len=WORD_LENGTH;if(val.indexOf('0b')===0){val=val.substr(2);}else if(val.indexOf('0x')===0){val=val.substr(2);base=16;len=8;}P['data']=[];P['_']=0;var a=val.length-len;var b=val.length;do{var num=parseInt(val.slice(a>0?a:0,b),base);if(isNaN(num)){throw SyntaxError('Invalid param');}P['data'].push(num|0);if(a<=0)break;a-=len;b-=len;}while(1);break;default:P['data']=[0];var data=P['data'];if(val instanceof Array){for(var i=val.length-1;i>=0;i--){var ndx=val[i];if(ndx===Infinity){P['_']=-1;}else{scale(P,ndx);data[ndx>>>WORD_LOG]|=1<<ndx;}}break;}if(Uint8Array&&val instanceof Uint8Array){var bits=8;scale(P,val.length*bits);for(var i=0;i<val.length;i++){var n=val[i];for(var j=0;j<bits;j++){var k=i*bits+j;data[k>>>WORD_LOG]|=(n>>j&1)<<k;}}break;}throw SyntaxError('Invalid param');}}/**
   * Module entry point
   *
   * @constructor
   * @param {string|BitSet|number=} param
   * @returns {BitSet}
   */function BitSet(param){if(!(this instanceof BitSet)){return new BitSet(param);}parse(this,param);this['data']=this['data'].slice();}function scale(dst,ndx){var l=ndx>>>WORD_LOG;var d=dst['data'];var v=dst['_'];for(var i=d.length;l>=i;l--){d.push(v);}}var P={'data':[],// Holds the actual bits in form of a 32bit integer array.
'_':0// Holds the MSB flag information to make indefinitely large bitsets inversion-proof
};BitSet.prototype={'data':[],'_':0,/**
     * Set a single bit flag
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * bs1.set(3, 1);
     *
     * @param {number} ndx The index of the bit to be set
     * @param {number=} value Optional value that should be set on the index (0 or 1)
     * @returns {BitSet} this
     */'set':function set(ndx,value){ndx|=0;scale(this,ndx);if(value===undefined||value){this['data'][ndx>>>WORD_LOG]|=1<<ndx;}else{this['data'][ndx>>>WORD_LOG]&=~(1<<ndx);}return this;},/**
     * Get a single bit flag of a certain bit position
     *
     * Ex:
     * bs1 = new BitSet();
     * var isValid = bs1.get(12);
     *
     * @param {number} ndx the index to be fetched
     * @returns {number} The binary flag
     */'get':function get(ndx){ndx|=0;var d=this['data'];var n=ndx>>>WORD_LOG;if(n>d.length){return this['_']&1;}return d[n]>>>ndx&1;},/**
     * Creates the bitwise NOT of a set.
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * res = bs1.not();
     *
     * @returns {BitSet} A new BitSet object, containing the bitwise NOT of this
     */'not':function not(){// invert()
var t=this['clone']();var d=t['data'];for(var i=0;i<d.length;i++){d[i]=~d[i];}t['_']=~t['_'];return t;},/**
     * Creates the bitwise AND of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.and(bs2);
     *
     * @param {BitSet} value A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise AND of this and value
     */'and':function and(value){// intersection
parse(P,value);var T=this['clone']();var t=T['data'];var p=P['data'];var pl=p.length;var p_=P['_'];var t_=T['_'];// If this is infinite, we need all bits from P
if(t_!==0){scale(T,pl*WORD_LENGTH-1);}var tl=t.length;var l=Math.min(pl,tl);var i=0;for(;i<l;i++){t[i]&=p[i];}for(;i<tl;i++){t[i]&=p_;}T['_']&=p_;return T;},/**
     * Creates the bitwise OR of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.or(bs2);
     *
     * @param {BitSet} val A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise OR of this and val
     */'or':function or(val){// union
parse(P,val);var t=this['clone']();var d=t['data'];var p=P['data'];var pl=p.length-1;var tl=d.length-1;var minLength=Math.min(tl,pl);// Append backwards, extend array only once
for(var i=pl;i>minLength;i--){d[i]=p[i];}for(;i>=0;i--){d[i]|=p[i];}t['_']|=P['_'];return t;},/**
     * Creates the bitwise XOR of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.xor(bs2);
     *
     * @param {BitSet} val A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise XOR of this and val
     */'xor':function xor(val){// symmetric difference
parse(P,val);var t=this['clone']();var d=t['data'];var p=P['data'];var t_=t['_'];var p_=P['_'];var i=0;var tl=d.length-1;var pl=p.length-1;// Cut if tl > pl
for(i=tl;i>pl;i--){d[i]^=p_;}// Cut if pl > tl
for(i=pl;i>tl;i--){d[i]=t_^p[i];}// XOR the rest
for(;i>=0;i--){d[i]^=p[i];}// XOR infinity
t['_']^=p_;return t;},/**
     * Creates the bitwise AND NOT (not confuse with NAND!) of two sets.
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * res = bs1.notAnd(bs2);
     *
     * @param {BitSet} val A bitset object
     * @returns {BitSet} A new BitSet object, containing the bitwise AND NOT of this and other
     */'andNot':function andNot(val){// difference
return this['and'](new BitSet(val)['flip']());},/**
     * Flip/Invert a range of bits by setting
     *
     * Ex:
     * bs1 = new BitSet();
     * bs1.flip(); // Flip entire set
     * bs1.flip(5); // Flip single bit
     * bs1.flip(3,10); // Flip a bit range
     *
     * @param {number=} from The start index of the range to be flipped
     * @param {number=} to The end index of the range to be flipped
     * @returns {BitSet} this
     */'flip':function flip(from,to){if(from===undefined){var d=this['data'];for(var i=0;i<d.length;i++){d[i]=~d[i];}this['_']=~this['_'];}else if(to===undefined){scale(this,from);this['data'][from>>>WORD_LOG]^=1<<from;}else if(0<=from&&from<=to){scale(this,to);for(var i=from;i<=to;i++){this['data'][i>>>WORD_LOG]^=1<<i;}}return this;},/**
     * Clear a range of bits by setting it to 0
     *
     * Ex:
     * bs1 = new BitSet();
     * bs1.clear(); // Clear entire set
     * bs1.clear(5); // Clear single bit
     * bs1.clear(3,10); // Clear a bit range
     *
     * @param {number=} from The start index of the range to be cleared
     * @param {number=} to The end index of the range to be cleared
     * @returns {BitSet} this
     */'clear':function clear(from,to){var data=this['data'];if(from===undefined){for(var i=data.length-1;i>=0;i--){data[i]=0;}this['_']=0;}else if(to===undefined){from|=0;scale(this,from);data[from>>>WORD_LOG]&=~(1<<from);}else if(from<=to){scale(this,to);for(var i=from;i<=to;i++){data[i>>>WORD_LOG]&=~(1<<i);}}return this;},/**
     * Gets an entire range as a new bitset object
     *
     * Ex:
     * bs1 = new BitSet();
     * bs1.slice(4, 8);
     *
     * @param {number=} from The start index of the range to be get
     * @param {number=} to The end index of the range to be get
     * @returns {BitSet} A new smaller bitset object, containing the extracted range
     */'slice':function slice(from,to){if(from===undefined){return this['clone']();}else if(to===undefined){to=this['data'].length*WORD_LENGTH;var im=Object.create(BitSet.prototype);im['_']=this['_'];im['data']=[0];for(var i=from;i<=to;i++){im['set'](i-from,this['get'](i));}return im;}else if(from<=to&&0<=from){var im=Object.create(BitSet.prototype);im['data']=[0];for(var i=from;i<=to;i++){im['set'](i-from,this['get'](i));}return im;}return null;},/**
     * Set a range of bits
     *
     * Ex:
     * bs1 = new BitSet();
     *
     * bs1.setRange(10, 15, 1);
     *
     * @param {number} from The start index of the range to be set
     * @param {number} to The end index of the range to be set
     * @param {number} value Optional value that should be set on the index (0 or 1)
     * @returns {BitSet} this
     */'setRange':function setRange(from,to,value){for(var i=from;i<=to;i++){this['set'](i,value);}return this;},/**
     * Clones the actual object
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = bs1.clone();
     *
     * @returns {BitSet|Object} A new BitSet object, containing a copy of the actual object
     */'clone':function clone(){var im=Object.create(BitSet.prototype);im['data']=this['data'].slice();im['_']=this['_'];return im;},/**
     * Gets a list of set bits
     *
     * @returns {Array}
     */'toArray':Math['clz32']?function(){var ret=[];var data=this['data'];for(var i=data.length-1;i>=0;i--){var num=data[i];while(num!==0){var t=31-Math['clz32'](num);num^=1<<t;ret.unshift(i*WORD_LENGTH+t);}}if(this['_']!==0)ret.push(Infinity);return ret;}:function(){var ret=[];var data=this['data'];for(var i=0;i<data.length;i++){var num=data[i];while(num!==0){var t=num&-num;num^=t;ret.push(i*WORD_LENGTH+popCount(t-1));}}if(this['_']!==0)ret.push(Infinity);return ret;},/**
     * Overrides the toString method to get a binary representation of the BitSet
     *
     * @param {number=} base
     * @returns string A binary string
     */'toString':function toString(base){var data=this['data'];if(!base)base=2;// If base is power of two
if((base&base-1)===0&&base<36){var ret='';var len=2+Math.log(4294967295/*Math.pow(2, WORD_LENGTH)-1*/)/Math.log(base)|0;for(var i=data.length-1;i>=0;i--){var cur=data[i];// Make the number unsigned
if(cur<0)cur+=4294967296/*Math.pow(2, WORD_LENGTH)*/;var tmp=cur.toString(base);if(ret!==''){// Fill small positive numbers with leading zeros. The +1 for array creation is added outside already
ret+='0'.repeat(len-tmp.length-1);}ret+=tmp;}if(this['_']===0){ret=ret.replace(/^0+/,'');if(ret==='')ret='0';return ret;}else{// Pad the string with ones
ret='1111'+ret;return ret.replace(/^1+/,'...1111');}}else{if(2>base||base>36)throw SyntaxError('Invalid base');var ret=[];var arr=[];// Copy every single bit to a new array
for(var i=data.length;i--;){for(var j=WORD_LENGTH;j--;){arr.push(data[i]>>>j&1);}}do{ret.unshift(divide(arr,base).toString(base));}while(!arr.every(function(x){return x===0;}));return ret.join('');}},/**
     * Check if the BitSet is empty, means all bits are unset
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * bs1.isEmpty() ? 'yes' : 'no'
     *
     * @returns {boolean} Whether the bitset is empty
     */'isEmpty':function isEmpty(){if(this['_']!==0)return false;var d=this['data'];for(var i=d.length-1;i>=0;i--){if(d[i]!==0)return false;}return true;},/**
     * Calculates the number of bits set
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * var num = bs1.cardinality();
     *
     * @returns {number} The number of bits set
     */'cardinality':function cardinality(){if(this['_']!==0){return Infinity;}var s=0;var d=this['data'];for(var i=0;i<d.length;i++){var n=d[i];if(n!==0)s+=popCount(n);}return s;},/**
     * Calculates the Most Significant Bit / log base two
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * var logbase2 = bs1.msb();
     *
     * var truncatedTwo = Math.pow(2, logbase2); // May overflow!
     *
     * @returns {number} The index of the highest bit set
     */'msb':Math['clz32']?function(){if(this['_']!==0){return Infinity;}var data=this['data'];for(var i=data.length;i-->0;){var c=Math['clz32'](data[i]);if(c!==WORD_LENGTH){return i*WORD_LENGTH+WORD_LENGTH-1-c;}}return Infinity;}:function(){if(this['_']!==0){return Infinity;}var data=this['data'];for(var i=data.length;i-->0;){var v=data[i];var c=0;if(v){for(;(v>>>=1)>0;c++){}return i*WORD_LENGTH+c;}}return Infinity;},/**
     * Calculates the number of trailing zeros
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * var ntz = bs1.ntz();
     *
     * @returns {number} The index of the lowest bit set
     */'ntz':function ntz(){var data=this['data'];for(var j=0;j<data.length;j++){var v=data[j];if(v!==0){v=(v^v-1)>>>1;// Set v's trailing 0s to 1s and zero rest
return j*WORD_LENGTH+popCount(v);}}return Infinity;},/**
     * Calculates the Least Significant Bit
     *
     * Ex:
     * bs1 = new BitSet(10);
     *
     * var lsb = bs1.lsb();
     *
     * @returns {number} The index of the lowest bit set
     */'lsb':function lsb(){var data=this['data'];for(var i=0;i<data.length;i++){var v=data[i];var c=0;if(v){var bit=v&-v;for(;bit>>>=1;c++){}return WORD_LENGTH*i+c;}}return this['_']&1;},/**
     * Compares two BitSet objects
     *
     * Ex:
     * bs1 = new BitSet(10);
     * bs2 = new BitSet(10);
     *
     * bs1.equals(bs2) ? 'yes' : 'no'
     *
     * @param {BitSet} val A bitset object
     * @returns {boolean} Whether the two BitSets have the same bits set (valid for indefinite sets as well)
     */'equals':function equals(val){parse(P,val);var t=this['data'];var p=P['data'];var t_=this['_'];var p_=P['_'];var tl=t.length-1;var pl=p.length-1;if(p_!==t_){return false;}var minLength=tl<pl?tl:pl;var i=0;for(;i<=minLength;i++){if(t[i]!==p[i])return false;}for(i=tl;i>pl;i--){if(t[i]!==p_)return false;}for(i=pl;i>tl;i--){if(p[i]!==t_)return false;}return true;}};BitSet['fromBinaryString']=function(str){return new BitSet('0b'+str);};BitSet['fromHexString']=function(str){return new BitSet('0x'+str);};BitSet['Random']=function(n){if(n===undefined||n<0){n=WORD_LENGTH;}var m=n%WORD_LENGTH;// Create an array, large enough to hold the random bits
var t=[];var len=Math.ceil(n/WORD_LENGTH);// Create an bitset instance
var s=Object.create(BitSet.prototype);// Fill the vector with random data, uniformally distributed
for(var i=0;i<len;i++){t.push(Math.random()*4294967296|0);}// Mask out unwanted bits
if(m>0){t[len-1]&=(1<<m)-1;}s['data']=t;s['_']=0;return s;};if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return BitSet;}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}})(this);

/***/ }),

/***/ "./node_modules/core-js/fn/regexp/escape.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/fn/regexp/escape.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/core.regexp.escape */ "./node_modules/core-js/modules/core.regexp.escape.js");module.exports=__webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/modules/_core.js").RegExp.escape;

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(it){if(typeof it!='function')throw TypeError(it+' is not a function!');return it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_a-number-value.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_a-number-value.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");module.exports=function(it,msg){if(typeof it!='number'&&cof(it)!='Number')throw TypeError(msg);return+it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');var ArrayProto=Array.prototype;if(ArrayProto[UNSCOPABLES]==undefined)__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto,UNSCOPABLES,{});module.exports=function(key){ArrayProto[UNSCOPABLES][key]=true;};

/***/ }),

/***/ "./node_modules/core-js/modules/_advance-string-index.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_advance-string-index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var at=__webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports=function(S,index,unicode){return index+(unicode?at(S,index).length:1);};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(it,Constructor,name,forbiddenField){if(!(it instanceof Constructor)||forbiddenField!==undefined&&forbiddenField in it){throw TypeError(name+': incorrect invocation!');}return it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");module.exports=function(it){if(!isObject(it))throw TypeError(it+' is not an object!');return it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-copy-within.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-copy-within.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");module.exports=[].copyWithin||function copyWithin(target/* = 0 */,start/* = 0, end = @length */){var O=toObject(this);var len=toLength(O.length);var to=toAbsoluteIndex(target,len);var from=toAbsoluteIndex(start,len);var end=arguments.length>2?arguments[2]:undefined;var count=Math.min((end===undefined?len:toAbsoluteIndex(end,len))-from,len-to);var inc=1;if(from<to&&to<from+count){inc=-1;from+=count-1;to+=count-1;}while(count-->0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc;}return O;};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-fill.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_array-fill.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");module.exports=function fill(value/* , start = 0, end = @length */){var O=toObject(this);var length=toLength(O.length);var aLen=arguments.length;var index=toAbsoluteIndex(aLen>1?arguments[1]:undefined,length);var end=aLen>2?arguments[2]:undefined;var endPos=end===undefined?length:toAbsoluteIndex(end,length);while(endPos>index){O[index++]=value;}return O;};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-from-iterable.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-from-iterable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");module.exports=function(iter,ITERATOR){var result=[];forOf(iter,false,result.push,result,ITERATOR);return result;};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");module.exports=function(IS_INCLUDES){return function($this,el,fromIndex){var O=toIObject($this);var length=toLength(O.length);var index=toAbsoluteIndex(fromIndex,length);var value;// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(IS_INCLUDES&&el!=el)while(length>index){value=O[index++];// eslint-disable-next-line no-self-compare
if(value!=value)return true;// Array#indexOf ignores holes, Array#includes - not
}else for(;length>index;index++){if(IS_INCLUDES||index in O){if(O[index]===el)return IS_INCLUDES||index||0;}}return!IS_INCLUDES&&-1;};};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var IObject=__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var asc=__webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");module.exports=function(TYPE,$create){var IS_MAP=TYPE==1;var IS_FILTER=TYPE==2;var IS_SOME=TYPE==3;var IS_EVERY=TYPE==4;var IS_FIND_INDEX=TYPE==6;var NO_HOLES=TYPE==5||IS_FIND_INDEX;var create=$create||asc;return function($this,callbackfn,that){var O=toObject($this);var self=IObject(O);var f=ctx(callbackfn,that,3);var length=toLength(self.length);var index=0;var result=IS_MAP?create($this,length):IS_FILTER?create($this,0):undefined;var val,res;for(;length>index;index++){if(NO_HOLES||index in self){val=self[index];res=f(val,index,O);if(TYPE){if(IS_MAP)result[index]=res;// map
else if(res)switch(TYPE){case 3:return true;// some
case 5:return val;// find
case 6:return index;// findIndex
case 2:result.push(val);// filter
}else if(IS_EVERY)return false;// every
}}}return IS_FIND_INDEX?-1:IS_SOME||IS_EVERY?IS_EVERY:result;};};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-reduce.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_array-reduce.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var IObject=__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");module.exports=function(that,callbackfn,aLen,memo,isRight){aFunction(callbackfn);var O=toObject(that);var self=IObject(O);var length=toLength(O.length);var index=isRight?length-1:0;var i=isRight?-1:1;if(aLen<2)for(;;){if(index in self){memo=self[index];index+=i;break;}index+=i;if(isRight?index<0:length<=index){throw TypeError('Reduce of empty array with no initial value');}}for(;isRight?index>=0:length>index;index+=i){if(index in self){memo=callbackfn(memo,self[index],index,O);}}return memo;};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var isArray=__webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");var SPECIES=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');module.exports=function(original){var C;if(isArray(original)){C=original.constructor;// cross-realm fallback
if(typeof C=='function'&&(C===Array||isArray(C.prototype)))C=undefined;if(isObject(C)){C=C[SPECIES];if(C===null)C=undefined;}}return C===undefined?Array:C;};

/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor=__webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");module.exports=function(original,length){return new(speciesConstructor(original))(length);};

/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var invoke=__webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");var arraySlice=[].slice;var factories={};var construct=function construct(F,len,args){if(!(len in factories)){for(var n=[],i=0;i<len;i++){n[i]='a['+i+']';}// eslint-disable-next-line no-new-func
factories[len]=Function('F,a','return new F('+n.join(',')+')');}return factories[len](F,args);};module.exports=Function.bind||function bind(that/* , ...args */){var fn=aFunction(this);var partArgs=arraySlice.call(arguments,1);var bound=function bound()/* args... */{var args=partArgs.concat(arraySlice.call(arguments));return this instanceof bound?construct(fn,args.length,args):invoke(fn,args,that);};if(isObject(fn.prototype))bound.prototype=fn.prototype;return bound;};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");var TAG=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');// ES3 wrong here
var ARG=cof(function(){return arguments;}())=='Arguments';// fallback for IE11 Script Access Denied error
var tryGet=function tryGet(it,key){try{return it[key];}catch(e){/* empty */}};module.exports=function(it){var O,T,B;return it===undefined?'Undefined':it===null?'Null'// @@toStringTag case
:typeof(T=tryGet(O=Object(it),TAG))=='string'?T// builtinTag case
:ARG?cof(O)// ES3 arguments fallback
:(B=cof(O))=='Object'&&typeof O.callee=='function'?'Arguments':B;};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString={}.toString;module.exports=function(it){return toString.call(it).slice(8,-1);};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var create=__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");var redefineAll=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");var $iterDefine=__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");var step=__webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");var setSpecies=__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");var DESCRIPTORS=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");var fastKey=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;var validate=__webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");var SIZE=DESCRIPTORS?'_s':'size';var getEntry=function getEntry(that,key){// fast case
var index=fastKey(key);var entry;if(index!=='F')return that._i[index];// frozen object case
for(entry=that._f;entry;entry=entry.n){if(entry.k==key)return entry;}};module.exports={getConstructor:function getConstructor(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,'_i');that._t=NAME;// collection type
that._i=create(null);// index
that._f=undefined;// first entry
that._l=undefined;// last entry
that[SIZE]=0;// size
if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);});redefineAll(C.prototype,{// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function clear(){for(var that=validate(this,NAME),data=that._i,entry=that._f;entry;entry=entry.n){entry.r=true;if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i];}that._f=that._l=undefined;that[SIZE]=0;},// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
'delete':function _delete(key){var that=validate(this,NAME);var entry=getEntry(that,key);if(entry){var next=entry.n;var prev=entry.p;delete that._i[entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that._f==entry)that._f=next;if(that._l==entry)that._l=prev;that[SIZE]--;}return!!entry;},// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function forEach(callbackfn/* , that = undefined */){validate(this,NAME);var f=ctx(callbackfn,arguments.length>1?arguments[1]:undefined,3);var entry;while(entry=entry?entry.n:this._f){f(entry.v,entry.k,this);// revert to the last existing entry
while(entry&&entry.r){entry=entry.p;}}},// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function has(key){return!!getEntry(validate(this,NAME),key);}});if(DESCRIPTORS)dP(C.prototype,'size',{get:function get(){return validate(this,NAME)[SIZE];}});return C;},def:function def(that,key,value){var entry=getEntry(that,key);var prev,index;// change existing entry
if(entry){entry.v=value;// create new entry
}else{that._l=entry={i:index=fastKey(key,true),// <- index
k:key,// <- key
v:value,// <- value
p:prev=that._l,// <- previous entry
n:undefined,// <- next entry
r:false// <- removed
};if(!that._f)that._f=entry;if(prev)prev.n=entry;that[SIZE]++;// add to index
if(index!=='F')that._i[index]=entry;}return that;},getEntry:getEntry,setStrong:function setStrong(C,NAME,IS_MAP){// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
$iterDefine(C,NAME,function(iterated,kind){this._t=validate(iterated,NAME);// target
this._k=kind;// kind
this._l=undefined;// previous
},function(){var that=this;var kind=that._k;var entry=that._l;// revert to the last existing entry
while(entry&&entry.r){entry=entry.p;}// get next entry
if(!that._t||!(that._l=entry=entry?entry.n:that._t._f)){// or finish the iteration
that._t=undefined;return step(1);}// return step by kind
if(kind=='keys')return step(0,entry.k);if(kind=='values')return step(0,entry.v);return step(0,[entry.k,entry.v]);},IS_MAP?'entries':'values',!IS_MAP,true);// add [@@species], 23.1.2.2, 23.2.2.2
setSpecies(NAME);}};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-to-json.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-to-json.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof=__webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");var from=__webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");module.exports=function(NAME){return function toJSON(){if(classof(this)!=NAME)throw TypeError(NAME+"#toJSON isn't generic");return from(this);};};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-weak.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-weak.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var redefineAll=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");var getWeak=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").getWeak;var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");var createArrayMethod=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");var $has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var validate=__webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");var arrayFind=createArrayMethod(5);var arrayFindIndex=createArrayMethod(6);var id=0;// fallback for uncaught frozen keys
var uncaughtFrozenStore=function uncaughtFrozenStore(that){return that._l||(that._l=new UncaughtFrozenStore());};var UncaughtFrozenStore=function UncaughtFrozenStore(){this.a=[];};var findUncaughtFrozen=function findUncaughtFrozen(store,key){return arrayFind(store.a,function(it){return it[0]===key;});};UncaughtFrozenStore.prototype={get:function get(key){var entry=findUncaughtFrozen(this,key);if(entry)return entry[1];},has:function has(key){return!!findUncaughtFrozen(this,key);},set:function set(key,value){var entry=findUncaughtFrozen(this,key);if(entry)entry[1]=value;else this.a.push([key,value]);},'delete':function _delete(key){var index=arrayFindIndex(this.a,function(it){return it[0]===key;});if(~index)this.a.splice(index,1);return!!~index;}};module.exports={getConstructor:function getConstructor(wrapper,NAME,IS_MAP,ADDER){var C=wrapper(function(that,iterable){anInstance(that,C,NAME,'_i');that._t=NAME;// collection type
that._i=id++;// collection id
that._l=undefined;// leak store for uncaught frozen objects
if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);});redefineAll(C.prototype,{// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
'delete':function _delete(key){if(!isObject(key))return false;var data=getWeak(key);if(data===true)return uncaughtFrozenStore(validate(this,NAME))['delete'](key);return data&&$has(data,this._i)&&delete data[this._i];},// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function has(key){if(!isObject(key))return false;var data=getWeak(key);if(data===true)return uncaughtFrozenStore(validate(this,NAME)).has(key);return data&&$has(data,this._i);}});return C;},def:function def(that,key,value){var data=getWeak(anObject(key),true);if(data===true)uncaughtFrozenStore(that).set(key,value);else data[that._i]=value;return that;},ufstore:uncaughtFrozenStore};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var redefineAll=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");var meta=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var $iterDetect=__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");var setToStringTag=__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");var inheritIfRequired=__webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");module.exports=function(NAME,wrapper,methods,common,IS_MAP,IS_WEAK){var Base=global[NAME];var C=Base;var ADDER=IS_MAP?'set':'add';var proto=C&&C.prototype;var O={};var fixMethod=function fixMethod(KEY){var fn=proto[KEY];redefine(proto,KEY,KEY=='delete'?function(a){return IS_WEAK&&!isObject(a)?false:fn.call(this,a===0?0:a);}:KEY=='has'?function has(a){return IS_WEAK&&!isObject(a)?false:fn.call(this,a===0?0:a);}:KEY=='get'?function get(a){return IS_WEAK&&!isObject(a)?undefined:fn.call(this,a===0?0:a);}:KEY=='add'?function add(a){fn.call(this,a===0?0:a);return this;}:function set(a,b){fn.call(this,a===0?0:a,b);return this;});};if(typeof C!='function'||!(IS_WEAK||proto.forEach&&!fails(function(){new C().entries().next();}))){// create collection constructor
C=common.getConstructor(wrapper,NAME,IS_MAP,ADDER);redefineAll(C.prototype,methods);meta.NEED=true;}else{var instance=new C();// early implementations not supports chaining
var HASNT_CHAINING=instance[ADDER](IS_WEAK?{}:-0,1)!=instance;// V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
var THROWS_ON_PRIMITIVES=fails(function(){instance.has(1);});// most early implementations doesn't supports iterables, most modern - not close it correctly
var ACCEPT_ITERABLES=$iterDetect(function(iter){new C(iter);});// eslint-disable-line no-new
// for early implementations -0 and +0 not the same
var BUGGY_ZERO=!IS_WEAK&&fails(function(){// V8 ~ Chromium 42- fails only with 5+ elements
var $instance=new C();var index=5;while(index--){$instance[ADDER](index,index);}return!$instance.has(-0);});if(!ACCEPT_ITERABLES){C=wrapper(function(target,iterable){anInstance(target,C,NAME);var that=inheritIfRequired(new Base(),target,C);if(iterable!=undefined)forOf(iterable,IS_MAP,that[ADDER],that);return that;});C.prototype=proto;proto.constructor=C;}if(THROWS_ON_PRIMITIVES||BUGGY_ZERO){fixMethod('delete');fixMethod('has');IS_MAP&&fixMethod('get');}if(BUGGY_ZERO||HASNT_CHAINING)fixMethod(ADDER);// weak collections should not contains .clear method
if(IS_WEAK&&proto.clear)delete proto.clear;}setToStringTag(C,NAME);O[NAME]=C;$export($export.G+$export.W+$export.F*(C!=Base),O);if(!IS_WEAK)common.setStrong(C,NAME,IS_MAP);return C;};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core=module.exports={version:'2.6.0'};if(typeof __e=='number')__e=core;// eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $defineProperty=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var createDesc=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");module.exports=function(object,index,value){if(index in object)$defineProperty.f(object,index,createDesc(0,value));else object[index]=value;};

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");module.exports=function(fn,that,length){aFunction(fn);if(that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a);};case 2:return function(a,b){return fn.call(that,a,b);};case 3:return function(a,b,c){return fn.call(that,a,b,c);};}return function()/* ...args */{return fn.apply(that,arguments);};};

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-iso-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-iso-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var getTime=Date.prototype.getTime;var $toISOString=Date.prototype.toISOString;var lz=function lz(num){return num>9?num:'0'+num;};// PhantomJS / old WebKit has a broken implementations
module.exports=fails(function(){return $toISOString.call(new Date(-5e13-1))!='0385-07-25T07:06:39.999Z';})||!fails(function(){$toISOString.call(new Date(NaN));})?function toISOString(){if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');var d=this;var y=d.getUTCFullYear();var m=d.getUTCMilliseconds();var s=y<0?'-':y>9999?'+':'';return s+('00000'+Math.abs(y)).slice(s?-6:-4)+'-'+lz(d.getUTCMonth()+1)+'-'+lz(d.getUTCDate())+'T'+lz(d.getUTCHours())+':'+lz(d.getUTCMinutes())+':'+lz(d.getUTCSeconds())+'.'+(m>99?m:'0'+lz(m))+'Z';}:$toISOString;

/***/ }),

/***/ "./node_modules/core-js/modules/_date-to-primitive.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_date-to-primitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var NUMBER='number';module.exports=function(hint){if(hint!=='string'&&hint!==NUMBER&&hint!=='default')throw TypeError('Incorrect hint');return toPrimitive(anObject(this),hint!=NUMBER);};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports=function(it){if(it==undefined)throw TypeError("Can't call method on  "+it);return it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports=!__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return Object.defineProperty({},'a',{get:function get(){return 7;}}).a!=7;});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var document=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;// typeof document.createElement is 'object' in old IE
var is=isObject(document)&&isObject(document.createElement);module.exports=function(it){return is?document.createElement(it):{};};

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");var gOPS=__webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");var pIE=__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");module.exports=function(it){var result=getKeys(it);var getSymbols=gOPS.f;if(getSymbols){var symbols=getSymbols(it);var isEnum=pIE.f;var i=0;var key;while(symbols.length>i){if(isEnum.call(it,key=symbols[i++]))result.push(key);}}return result;};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var core=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var PROTOTYPE='prototype';var $export=function $export(type,name,source){var IS_FORCED=type&$export.F;var IS_GLOBAL=type&$export.G;var IS_STATIC=type&$export.S;var IS_PROTO=type&$export.P;var IS_BIND=type&$export.B;var target=IS_GLOBAL?global:IS_STATIC?global[name]||(global[name]={}):(global[name]||{})[PROTOTYPE];var exports=IS_GLOBAL?core:core[name]||(core[name]={});var expProto=exports[PROTOTYPE]||(exports[PROTOTYPE]={});var key,own,out,exp;if(IS_GLOBAL)source=name;for(key in source){// contains in native
own=!IS_FORCED&&target&&target[key]!==undefined;// export native or passed
out=(own?target:source)[key];// bind timers to global for call from export context
exp=IS_BIND&&own?ctx(out,global):IS_PROTO&&typeof out=='function'?ctx(Function.call,out):out;// extend global
if(target)redefine(target,key,out,type&$export.U);// export
if(exports[key]!=out)hide(exports,key,exp);if(IS_PROTO&&expProto[key]!=out)expProto[key]=out;}};global.core=core;// type bitmap
$export.F=1;// forced
$export.G=2;// global
$export.S=4;// static
$export.P=8;// proto
$export.B=16;// bind
$export.W=32;// wrap
$export.U=64;// safe
$export.R=128;// real proto method for `library`
module.exports=$export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');module.exports=function(KEY){var re=/./;try{'/./'[KEY](re);}catch(e){try{re[MATCH]=false;return!'/./'[KEY](re);}catch(f){/* empty */}}return true;};

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(exec){try{return!!exec();}catch(e){return true;}};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! ./es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");var wks=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");var regexpExec=__webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");var SPECIES=wks('species');var REPLACE_SUPPORTS_NAMED_GROUPS=!fails(function(){// #replace needs built-in support for named groups.
// #match works fine because it just return the exec results, even if it has
// a "grops" property.
var re=/./;re.exec=function(){var result=[];result.groups={a:'7'};return result;};return''.replace(re,'$<a>')!=='7';});var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC=function(){// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
var re=/(?:)/;var originalExec=re.exec;re.exec=function(){return originalExec.apply(this,arguments);};var result='ab'.split(re);return result.length===2&&result[0]==='a'&&result[1]==='b';}();module.exports=function(KEY,length,exec){var SYMBOL=wks(KEY);var DELEGATES_TO_SYMBOL=!fails(function(){// String methods call symbol-named RegEp methods
var O={};O[SYMBOL]=function(){return 7;};return''[KEY](O)!=7;});var DELEGATES_TO_EXEC=DELEGATES_TO_SYMBOL?!fails(function(){// Symbol-named RegExp methods call .exec
var execCalled=false;var re=/a/;re.exec=function(){execCalled=true;return null;};if(KEY==='split'){// RegExp[@@split] doesn't call the regex's exec method, but first creates
// a new one. We need to return the patched regex when creating the new one.
re.constructor={};re.constructor[SPECIES]=function(){return re;};}re[SYMBOL]('');return!execCalled;}):undefined;if(!DELEGATES_TO_SYMBOL||!DELEGATES_TO_EXEC||KEY==='replace'&&!REPLACE_SUPPORTS_NAMED_GROUPS||KEY==='split'&&!SPLIT_WORKS_WITH_OVERWRITTEN_EXEC){var nativeRegExpMethod=/./[SYMBOL];var fns=exec(defined,SYMBOL,''[KEY],function maybeCallNative(nativeMethod,regexp,str,arg2,forceStringMethod){if(regexp.exec===regexpExec){if(DELEGATES_TO_SYMBOL&&!forceStringMethod){// The native String method already delegates to @@method (this
// polyfilled function), leasing to infinite recursion.
// We avoid it by directly calling the native @@method method.
return{done:true,value:nativeRegExpMethod.call(regexp,str,arg2)};}return{done:true,value:nativeMethod.call(str,regexp,arg2)};}return{done:false};});var strfn=fns[0];var rxfn=fns[1];redefine(String.prototype,KEY,strfn);hide(RegExp.prototype,SYMBOL,length==2// 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
// 21.2.5.11 RegExp.prototype[@@split](string, limit)
?function(string,arg){return rxfn.call(string,this,arg);}// 21.2.5.6 RegExp.prototype[@@match](string)
// 21.2.5.9 RegExp.prototype[@@search](string)
:function(string){return rxfn.call(string,this);});}};

/***/ }),

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");module.exports=function(){var that=anObject(this);var result='';if(that.global)result+='g';if(that.ignoreCase)result+='i';if(that.multiline)result+='m';if(that.unicode)result+='u';if(that.sticky)result+='y';return result;};

/***/ }),

/***/ "./node_modules/core-js/modules/_flatten-into-array.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_flatten-into-array.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray=__webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var IS_CONCAT_SPREADABLE=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('isConcatSpreadable');function flattenIntoArray(target,original,source,sourceLen,start,depth,mapper,thisArg){var targetIndex=start;var sourceIndex=0;var mapFn=mapper?ctx(mapper,thisArg,3):false;var element,spreadable;while(sourceIndex<sourceLen){if(sourceIndex in source){element=mapFn?mapFn(source[sourceIndex],sourceIndex,original):source[sourceIndex];spreadable=false;if(isObject(element)){spreadable=element[IS_CONCAT_SPREADABLE];spreadable=spreadable!==undefined?!!spreadable:isArray(element);}if(spreadable&&depth>0){targetIndex=flattenIntoArray(target,original,element,toLength(element.length),targetIndex,depth-1)-1;}else{if(targetIndex>=0x1fffffffffffff)throw TypeError();target[targetIndex]=element;}targetIndex++;}sourceIndex++;}return targetIndex;}module.exports=flattenIntoArray;

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var call=__webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");var isArrayIter=__webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var getIterFn=__webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");var BREAK={};var RETURN={};var exports=module.exports=function(iterable,entries,fn,that,ITERATOR){var iterFn=ITERATOR?function(){return iterable;}:getIterFn(iterable);var f=ctx(fn,that,entries?2:1);var index=0;var length,step,iterator,result;if(typeof iterFn!='function')throw TypeError(iterable+' is not iterable!');// fast case for arrays with default iterator
if(isArrayIter(iterFn))for(length=toLength(iterable.length);length>index;index++){result=entries?f(anObject(step=iterable[index])[0],step[1]):f(iterable[index]);if(result===BREAK||result===RETURN)return result;}else for(iterator=iterFn.call(iterable);!(step=iterator.next()).done;){result=call(iterator,f,step.value,entries);if(result===BREAK||result===RETURN)return result;}};exports.BREAK=BREAK;exports.RETURN=RETURN;

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global=module.exports=typeof window!='undefined'&&window.Math==Math?window:typeof self!='undefined'&&self.Math==Math?self// eslint-disable-next-line no-new-func
:Function('return this')();if(typeof __g=='number')__g=global;// eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty={}.hasOwnProperty;module.exports=function(it,key){return hasOwnProperty.call(it,key);};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var createDesc=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");module.exports=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")?function(object,key,value){return dP.f(object,key,createDesc(1,value));}:function(object,key,value){object[key]=value;return object;};

/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;module.exports=document&&document.documentElement;

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=!__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&!__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'),'a',{get:function get(){return 7;}}).a!=7;});

/***/ }),

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var setPrototypeOf=__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;module.exports=function(that,target,C){var S=target.constructor;var P;if(S!==C&&typeof S=='function'&&(P=S.prototype)!==C.prototype&&isObject(P)&&setPrototypeOf){setPrototypeOf(that,P);}return that;};

/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports=function(fn,args,that){var un=that===undefined;switch(args.length){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);}return fn.apply(that,args);};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");// eslint-disable-next-line no-prototype-builtins
module.exports=Object('z').propertyIsEnumerable(0)?Object:function(it){return cof(it)=='String'?it.split(''):Object(it);};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators=__webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");var ITERATOR=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');var ArrayProto=Array.prototype;module.exports=function(it){return it!==undefined&&(Iterators.Array===it||ArrayProto[ITERATOR]===it);};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");module.exports=Array.isArray||function isArray(arg){return cof(arg)=='Array';};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var floor=Math.floor;module.exports=function isInteger(it){return!isObject(it)&&isFinite(it)&&floor(it)===it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}module.exports=function(it){return _typeof(it)==='object'?it!==null:typeof it==='function';};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");var MATCH=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');module.exports=function(it){var isRegExp;return isObject(it)&&((isRegExp=it[MATCH])!==undefined?!!isRegExp:cof(it)=='RegExp');};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");module.exports=function(iterator,fn,value,entries){try{return entries?fn(anObject(value)[0],value[1]):fn(value);// 7.4.6 IteratorClose(iterator, completion)
}catch(e){var ret=iterator['return'];if(ret!==undefined)anObject(ret.call(iterator));throw e;}};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var create=__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");var descriptor=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");var setToStringTag=__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");var IteratorPrototype={};// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype,__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'),function(){return this;});module.exports=function(Constructor,NAME,next){Constructor.prototype=create(IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+' Iterator');};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var LIBRARY=__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var Iterators=__webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");var $iterCreate=__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");var setToStringTag=__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var ITERATOR=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');var BUGGY=!([].keys&&'next'in[].keys());// Safari has buggy iterators w/o `next`
var FF_ITERATOR='@@iterator';var KEYS='keys';var VALUES='values';var returnThis=function returnThis(){return this;};module.exports=function(Base,NAME,Constructor,next,DEFAULT,IS_SET,FORCED){$iterCreate(Constructor,NAME,next);var getMethod=function getMethod(kind){if(!BUGGY&&kind in proto)return proto[kind];switch(kind){case KEYS:return function keys(){return new Constructor(this,kind);};case VALUES:return function values(){return new Constructor(this,kind);};}return function entries(){return new Constructor(this,kind);};};var TAG=NAME+' Iterator';var DEF_VALUES=DEFAULT==VALUES;var VALUES_BUG=false;var proto=Base.prototype;var $native=proto[ITERATOR]||proto[FF_ITERATOR]||DEFAULT&&proto[DEFAULT];var $default=$native||getMethod(DEFAULT);var $entries=DEFAULT?!DEF_VALUES?$default:getMethod('entries'):undefined;var $anyNative=NAME=='Array'?proto.entries||$native:$native;var methods,key,IteratorPrototype;// Fix native
if($anyNative){IteratorPrototype=getPrototypeOf($anyNative.call(new Base()));if(IteratorPrototype!==Object.prototype&&IteratorPrototype.next){// Set @@toStringTag to native iterators
setToStringTag(IteratorPrototype,TAG,true);// fix for some old engines
if(!LIBRARY&&typeof IteratorPrototype[ITERATOR]!='function')hide(IteratorPrototype,ITERATOR,returnThis);}}// fix Array#{values, @@iterator}.name in V8 / FF
if(DEF_VALUES&&$native&&$native.name!==VALUES){VALUES_BUG=true;$default=function values(){return $native.call(this);};}// Define iterator
if((!LIBRARY||FORCED)&&(BUGGY||VALUES_BUG||!proto[ITERATOR])){hide(proto,ITERATOR,$default);}// Plug for library
Iterators[NAME]=$default;Iterators[TAG]=returnThis;if(DEFAULT){methods={values:DEF_VALUES?$default:getMethod(VALUES),keys:IS_SET?$default:getMethod(KEYS),entries:$entries};if(FORCED)for(key in methods){if(!(key in proto))redefine(proto,key,methods[key]);}else $export($export.P+$export.F*(BUGGY||VALUES_BUG),NAME,methods);}return methods;};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');var SAFE_CLOSING=false;try{var riter=[7][ITERATOR]();riter['return']=function(){SAFE_CLOSING=true;};// eslint-disable-next-line no-throw-literal
Array.from(riter,function(){throw 2;});}catch(e){/* empty */}module.exports=function(exec,skipClosing){if(!skipClosing&&!SAFE_CLOSING)return false;var safe=false;try{var arr=[7];var iter=arr[ITERATOR]();iter.next=function(){return{done:safe=true};};arr[ITERATOR]=function(){return iter;};exec(arr);}catch(e){/* empty */}return safe;};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(done,value){return{value:value,done:!!done};};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=false;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-expm1.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-expm1.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1=Math.expm1;module.exports=!$expm1// Old FF bug
||$expm1(10)>22025.465794806719||$expm1(10)<22025.4657948067165168// Tor Browser bug
||$expm1(-2e-17)!=-2e-17?function expm1(x){return(x=+x)==0?x:x>-1e-6&&x<1e-6?x+x*x/2:Math.exp(x)-1;}:$expm1;

/***/ }),

/***/ "./node_modules/core-js/modules/_math-fround.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_math-fround.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign=__webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");var pow=Math.pow;var EPSILON=pow(2,-52);var EPSILON32=pow(2,-23);var MAX32=pow(2,127)*(2-EPSILON32);var MIN32=pow(2,-126);var roundTiesToEven=function roundTiesToEven(n){return n+1/EPSILON-1/EPSILON;};module.exports=Math.fround||function fround(x){var $abs=Math.abs(x);var $sign=sign(x);var a,result;if($abs<MIN32)return $sign*roundTiesToEven($abs/MIN32/EPSILON32)*MIN32*EPSILON32;a=(1+EPSILON32/EPSILON)*$abs;result=a-(a-$abs);// eslint-disable-next-line no-self-compare
if(result>MAX32||result!=result)return $sign*Infinity;return $sign*result;};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-log1p.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-log1p.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports=Math.log1p||function log1p(x){return(x=+x)>-1e-8&&x<1e-8?x-x*x/2:Math.log(1+x);};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-scale.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-scale.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports=Math.scale||function scale(x,inLow,inHigh,outLow,outHigh){if(arguments.length===0// eslint-disable-next-line no-self-compare
||x!=x// eslint-disable-next-line no-self-compare
||inLow!=inLow// eslint-disable-next-line no-self-compare
||inHigh!=inHigh// eslint-disable-next-line no-self-compare
||outLow!=outLow// eslint-disable-next-line no-self-compare
||outHigh!=outHigh)return NaN;if(x===Infinity||x===-Infinity)return x;return(x-inLow)*(outHigh-outLow)/(inHigh-inLow)+outLow;};

/***/ }),

/***/ "./node_modules/core-js/modules/_math-sign.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_math-sign.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports=Math.sign||function sign(x){// eslint-disable-next-line no-self-compare
return(x=+x)==0||x!=x?x:x<0?-1:1;};

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var META=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var setDesc=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var id=0;var isExtensible=Object.isExtensible||function(){return true;};var FREEZE=!__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return isExtensible(Object.preventExtensions({}));});var setMeta=function setMeta(it){setDesc(it,META,{value:{i:'O'+ ++id,// object ID
w:{}// weak collections IDs
}});};var fastKey=function fastKey(it,create){// return primitive with prefix
if(!isObject(it))return _typeof(it)=='symbol'?it:(typeof it=='string'?'S':'P')+it;if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return'F';// not necessary to add metadata
if(!create)return'E';// add missing metadata
setMeta(it);// return object ID
}return it[META].i;};var getWeak=function getWeak(it,create){if(!has(it,META)){// can't set metadata to uncaught frozen object
if(!isExtensible(it))return true;// not necessary to add metadata
if(!create)return false;// add missing metadata
setMeta(it);// return hash weak collections IDs
}return it[META].w;};// add metadata on freeze-family methods calling
var onFreeze=function onFreeze(it){if(FREEZE&&meta.NEED&&isExtensible(it)&&!has(it,META))setMeta(it);return it;};var meta=module.exports={KEY:META,NEED:false,fastKey:fastKey,getWeak:getWeak,onFreeze:onFreeze};

/***/ }),

/***/ "./node_modules/core-js/modules/_metadata.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_metadata.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var Map=__webpack_require__(/*! ./es6.map */ "./node_modules/core-js/modules/es6.map.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var shared=__webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('metadata');var store=shared.store||(shared.store=new(__webpack_require__(/*! ./es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js"))());var getOrCreateMetadataMap=function getOrCreateMetadataMap(target,targetKey,create){var targetMetadata=store.get(target);if(!targetMetadata){if(!create)return undefined;store.set(target,targetMetadata=new Map());}var keyMetadata=targetMetadata.get(targetKey);if(!keyMetadata){if(!create)return undefined;targetMetadata.set(targetKey,keyMetadata=new Map());}return keyMetadata;};var ordinaryHasOwnMetadata=function ordinaryHasOwnMetadata(MetadataKey,O,P){var metadataMap=getOrCreateMetadataMap(O,P,false);return metadataMap===undefined?false:metadataMap.has(MetadataKey);};var ordinaryGetOwnMetadata=function ordinaryGetOwnMetadata(MetadataKey,O,P){var metadataMap=getOrCreateMetadataMap(O,P,false);return metadataMap===undefined?undefined:metadataMap.get(MetadataKey);};var ordinaryDefineOwnMetadata=function ordinaryDefineOwnMetadata(MetadataKey,MetadataValue,O,P){getOrCreateMetadataMap(O,P,true).set(MetadataKey,MetadataValue);};var ordinaryOwnMetadataKeys=function ordinaryOwnMetadataKeys(target,targetKey){var metadataMap=getOrCreateMetadataMap(target,targetKey,false);var keys=[];if(metadataMap)metadataMap.forEach(function(_,key){keys.push(key);});return keys;};var toMetaKey=function toMetaKey(it){return it===undefined||_typeof(it)=='symbol'?it:String(it);};var exp=function exp(O){$export($export.S,'Reflect',O);};module.exports={store:store,map:getOrCreateMetadataMap,has:ordinaryHasOwnMetadata,get:ordinaryGetOwnMetadata,set:ordinaryDefineOwnMetadata,keys:ordinaryOwnMetadataKeys,key:toMetaKey,exp:exp};

/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var macrotask=__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;var Observer=global.MutationObserver||global.WebKitMutationObserver;var process=global.process;var Promise=global.Promise;var isNode=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process)=='process';module.exports=function(){var head,last,notify;var flush=function flush(){var parent,fn;if(isNode&&(parent=process.domain))parent.exit();while(head){fn=head.fn;head=head.next;try{fn();}catch(e){if(head)notify();else last=undefined;throw e;}}last=undefined;if(parent)parent.enter();};// Node.js
if(isNode){notify=function notify(){process.nextTick(flush);};// browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
}else if(Observer&&!(global.navigator&&global.navigator.standalone)){var toggle=true;var node=document.createTextNode('');new Observer(flush).observe(node,{characterData:true});// eslint-disable-line no-new
notify=function notify(){node.data=toggle=!toggle;};// environments with maybe non-completely correct, but existent Promise
}else if(Promise&&Promise.resolve){// Promise.resolve without an argument throws an error in LG WebOS 2
var promise=Promise.resolve(undefined);notify=function notify(){promise.then(flush);};// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
}else{notify=function notify(){// strange IE + webpack dev server bug - use .call(global)
macrotask.call(global,flush);};}return function(fn){var task={fn:fn,next:undefined};if(last)last.next=task;if(!head){head=task;notify();}last=task;};};

/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 25.4.1.5 NewPromiseCapability(C)
var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");function PromiseCapability(C){var resolve,reject;this.promise=new C(function($$resolve,$$reject){if(resolve!==undefined||reject!==undefined)throw TypeError('Bad Promise constructor');resolve=$$resolve;reject=$$reject;});this.resolve=aFunction(resolve);this.reject=aFunction(reject);}module.exports.f=function(C){return new PromiseCapability(C);};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");var gOPS=__webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");var pIE=__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var IObject=__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");var $assign=Object.assign;// should work with symbols and should have deterministic property order (V8 bug)
module.exports=!$assign||__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){var A={};var B={};// eslint-disable-next-line no-undef
var S=Symbol();var K='abcdefghijklmnopqrst';A[S]=7;K.split('').forEach(function(k){B[k]=k;});return $assign({},A)[S]!=7||Object.keys($assign({},B)).join('')!=K;})?function assign(target,source){// eslint-disable-line no-unused-vars
var T=toObject(target);var aLen=arguments.length;var index=1;var getSymbols=gOPS.f;var isEnum=pIE.f;while(aLen>index){var S=IObject(arguments[index++]);var keys=getSymbols?getKeys(S).concat(getSymbols(S)):getKeys(S);var length=keys.length;var j=0;var key;while(length>j){if(isEnum.call(S,key=keys[j++]))T[key]=S[key];}}return T;}:$assign;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var dPs=__webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");var enumBugKeys=__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");var IE_PROTO=__webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');var Empty=function Empty(){/* empty */};var PROTOTYPE='prototype';// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict=function createDict(){// Thrash, waste and sodomy: IE GC bug
var iframe=__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');var i=enumBugKeys.length;var lt='<';var gt='>';var iframeDocument;iframe.style.display='none';__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);iframe.src='javascript:';// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
iframeDocument=iframe.contentWindow.document;iframeDocument.open();iframeDocument.write(lt+'script'+gt+'document.F=Object'+lt+'/script'+gt);iframeDocument.close();_createDict=iframeDocument.F;while(i--){delete _createDict[PROTOTYPE][enumBugKeys[i]];}return _createDict();};module.exports=Object.create||function create(O,Properties){var result;if(O!==null){Empty[PROTOTYPE]=anObject(O);result=new Empty();Empty[PROTOTYPE]=null;// add "__proto__" for Object.getPrototypeOf polyfill
result[IE_PROTO]=O;}else result=_createDict();return Properties===undefined?result:dPs(result,Properties);};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var IE8_DOM_DEFINE=__webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var dP=Object.defineProperty;exports.f=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")?Object.defineProperty:function defineProperty(O,P,Attributes){anObject(O);P=toPrimitive(P,true);anObject(Attributes);if(IE8_DOM_DEFINE)try{return dP(O,P,Attributes);}catch(e){/* empty */}if('get'in Attributes||'set'in Attributes)throw TypeError('Accessors not supported!');if('value'in Attributes)O[P]=Attributes.value;return O;};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var getKeys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");module.exports=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")?Object.defineProperties:function defineProperties(O,Properties){anObject(O);var keys=getKeys(Properties);var length=keys.length;var i=0;var P;while(length>i){dP.f(O,P=keys[i++],Properties[P]);}return O;};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-forced-pam.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-forced-pam.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Forced replacement prototype accessors methods
module.exports=__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")||!__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){var K=Math.random();// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,K,function(){/* empty */});delete __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js")[K];});

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE=__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");var createDesc=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var IE8_DOM_DEFINE=__webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");var gOPD=Object.getOwnPropertyDescriptor;exports.f=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")?gOPD:function getOwnPropertyDescriptor(O,P){O=toIObject(O);P=toPrimitive(P,true);if(IE8_DOM_DEFINE)try{return gOPD(O,P);}catch(e){/* empty */}if(has(O,P))return createDesc(!pIE.f.call(O,P),O[P]);};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var gOPN=__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;var toString={}.toString;var windowNames=(typeof window==="undefined"?"undefined":_typeof(window))=='object'&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];var getWindowNames=function getWindowNames(it){try{return gOPN(it);}catch(e){return windowNames.slice();}};module.exports.f=function getOwnPropertyNames(it){return windowNames&&toString.call(it)=='[object Window]'?getWindowNames(it):gOPN(toIObject(it));};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys=__webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");var hiddenKeys=__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length','prototype');exports.f=Object.getOwnPropertyNames||function getOwnPropertyNames(O){return $keys(O,hiddenKeys);};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f=Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var IE_PROTO=__webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');var ObjectProto=Object.prototype;module.exports=Object.getPrototypeOf||function(O){O=toObject(O);if(has(O,IE_PROTO))return O[IE_PROTO];if(typeof O.constructor=='function'&&O instanceof O.constructor){return O.constructor.prototype;}return O instanceof Object?ObjectProto:null;};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var arrayIndexOf=__webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);var IE_PROTO=__webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');module.exports=function(object,names){var O=toIObject(object);var i=0;var result=[];var key;for(key in O){if(key!=IE_PROTO)has(O,key)&&result.push(key);}// Don't enum bug & hidden keys
while(names.length>i){if(has(O,key=names[i++])){~arrayIndexOf(result,key)||result.push(key);}}return result;};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys=__webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");var enumBugKeys=__webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");module.exports=Object.keys||function keys(O){return $keys(O,enumBugKeys);};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f={}.propertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-sap.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var core=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");module.exports=function(KEY,exec){var fn=(core.Object||{})[KEY]||Object[KEY];var exp={};exp[KEY]=exec(fn);$export($export.S+$export.F*fails(function(){fn(1);}),'Object',exp);};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var isEnum=__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;module.exports=function(isEntries){return function(it){var O=toIObject(it);var keys=getKeys(O);var length=keys.length;var i=0;var result=[];var key;while(length>i){if(isEnum.call(O,key=keys[i++])){result.push(isEntries?[key,O[key]]:O[key]);}}return result;};};

/***/ }),

/***/ "./node_modules/core-js/modules/_own-keys.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_own-keys.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN=__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js");var gOPS=__webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var Reflect=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect;module.exports=Reflect&&Reflect.ownKeys||function ownKeys(it){var keys=gOPN.f(anObject(it));var getSymbols=gOPS.f;return getSymbols?keys.concat(getSymbols(it)):keys;};

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-float.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-float.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseFloat;var $trim=__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;module.exports=1/$parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js")+'-0')!==-Infinity?function parseFloat(str){var string=$trim(String(str),3);var result=$parseFloat(string);return result===0&&string.charAt(0)=='-'?-0:result;}:$parseFloat;

/***/ }),

/***/ "./node_modules/core-js/modules/_parse-int.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_parse-int.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").parseInt;var $trim=__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;var ws=__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");var hex=/^[-+]?0[xX]/;module.exports=$parseInt(ws+'08')!==8||$parseInt(ws+'0x16')!==22?function parseInt(str,radix){var string=$trim(String(str),3);return $parseInt(string,radix>>>0||(hex.test(string)?16:10));}:$parseInt;

/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(exec){try{return{e:false,v:exec()};}catch(e){return{e:true,v:e};}};

/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var newPromiseCapability=__webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");module.exports=function(C,x){anObject(C);if(isObject(x)&&x.constructor===C)return x;var promiseCapability=newPromiseCapability.f(C);var resolve=promiseCapability.resolve;resolve(x);return promiseCapability.promise;};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value};};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");module.exports=function(target,src,safe){for(var key in src){redefine(target,key,src[key],safe);}return target;};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var SRC=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');var TO_STRING='toString';var $toString=Function[TO_STRING];var TPL=(''+$toString).split(TO_STRING);__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource=function(it){return $toString.call(it);};(module.exports=function(O,key,val,safe){var isFunction=typeof val=='function';if(isFunction)has(val,'name')||hide(val,'name',key);if(O[key]===val)return;if(isFunction)has(val,SRC)||hide(val,SRC,O[key]?''+O[key]:TPL.join(String(key)));if(O===global){O[key]=val;}else if(!safe){delete O[key];hide(O,key,val);}else if(O[key]){O[key]=val;}else{hide(O,key,val);}// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype,TO_STRING,function toString(){return typeof this=='function'&&this[SRC]||$toString.call(this);});

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec-abstract.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec-abstract.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var classof=__webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");var builtinExec=RegExp.prototype.exec;// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports=function(R,S){var exec=R.exec;if(typeof exec==='function'){var result=exec.call(R,S);if(_typeof(result)!=='object'){throw new TypeError('RegExp exec method returned something other than an Object or null');}return result;}if(classof(R)!=='RegExp'){throw new TypeError('RegExp#exec called on incompatible receiver');}return builtinExec.call(R,S);};

/***/ }),

/***/ "./node_modules/core-js/modules/_regexp-exec.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_regexp-exec.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var regexpFlags=__webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");var nativeExec=RegExp.prototype.exec;// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace=String.prototype.replace;var patchedExec=nativeExec;var LAST_INDEX='lastIndex';var UPDATES_LAST_INDEX_WRONG=function(){var re1=/a/,re2=/b*/g;nativeExec.call(re1,'a');nativeExec.call(re2,'a');return re1[LAST_INDEX]!==0||re2[LAST_INDEX]!==0;}();// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED=/()??/.exec('')[1]!==undefined;var PATCH=UPDATES_LAST_INDEX_WRONG||NPCG_INCLUDED;if(PATCH){patchedExec=function exec(str){var re=this;var lastIndex,reCopy,match,i;if(NPCG_INCLUDED){reCopy=new RegExp('^'+re.source+'$(?!\\s)',regexpFlags.call(re));}if(UPDATES_LAST_INDEX_WRONG)lastIndex=re[LAST_INDEX];match=nativeExec.call(re,str);if(UPDATES_LAST_INDEX_WRONG&&match){re[LAST_INDEX]=re.global?match.index+match[0].length:lastIndex;}if(NPCG_INCLUDED&&match&&match.length>1){// Fix browsers whose `exec` methods don't consistently return `undefined`
// for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
// eslint-disable-next-line no-loop-func
nativeReplace.call(match[0],reCopy,function(){for(i=1;i<arguments.length-2;i++){if(arguments[i]===undefined)match[i]=undefined;}});}return match;};}module.exports=patchedExec;

/***/ }),

/***/ "./node_modules/core-js/modules/_replacer.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_replacer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(regExp,replace){var replacer=replace===Object(replace)?function(part){return replace[part];}:replace;return function(it){return String(it).replace(regExp,replacer);};};

/***/ }),

/***/ "./node_modules/core-js/modules/_same-value.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_same-value.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports=Object.is||function is(x,y){// eslint-disable-next-line no-self-compare
return x===y?x!==0||1/x===1/y:x!=x&&y!=y;};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");module.exports=function(COLLECTION){$export($export.S,COLLECTION,{from:function from(source/* , mapFn, thisArg */){var mapFn=arguments[1];var mapping,A,n,cb;aFunction(this);mapping=mapFn!==undefined;if(mapping)aFunction(mapFn);if(source==undefined)return new this();A=[];if(mapping){n=0;cb=ctx(mapFn,arguments[2],2);forOf(source,false,function(nextItem){A.push(cb(nextItem,n++));});}else{forOf(source,false,A.push,A);}return new this(A);}});};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-collection-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-collection-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");module.exports=function(COLLECTION){$export($export.S,COLLECTION,{of:function of(){var length=arguments.length;var A=new Array(length);while(length--){A[length]=arguments[length];}return new this(A);}});};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var check=function check(O,proto){anObject(O);if(!isObject(proto)&&proto!==null)throw TypeError(proto+": can't set as prototype!");};module.exports={set:Object.setPrototypeOf||('__proto__'in{}?// eslint-disable-line
function(test,buggy,set){try{set=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call,__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype,'__proto__').set,2);set(test,[]);buggy=!(test instanceof Array);}catch(e){buggy=true;}return function setPrototypeOf(O,proto){check(O,proto);if(buggy)O.__proto__=proto;else set(O,proto);return O;};}({},false):undefined),check:check};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var DESCRIPTORS=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");var SPECIES=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');module.exports=function(KEY){var C=global[KEY];if(DESCRIPTORS&&C&&!C[SPECIES])dP.f(C,SPECIES,{configurable:true,get:function get(){return this;}});};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var TAG=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');module.exports=function(it,tag,stat){if(it&&!has(it=stat?it:it.prototype,TAG))def(it,TAG,{configurable:true,value:tag});};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared=__webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');var uid=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");module.exports=function(key){return shared[key]||(shared[key]=uid(key));};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var SHARED='__core-js_shared__';var store=global[SHARED]||(global[SHARED]={});(module.exports=function(key,value){return store[key]||(store[key]=value!==undefined?value:{});})('versions',[]).push({version:core.version,mode:__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")?'pure':'global',copyright:'© 2018 Denis Pushkarev (zloirock.ru)'});

/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var SPECIES=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');module.exports=function(O,D){var C=anObject(O).constructor;var S;return C===undefined||(S=anObject(C)[SPECIES])==undefined?D:aFunction(S);};

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");module.exports=function(method,arg){return!!method&&fails(function(){// eslint-disable-next-line no-useless-call
arg?method.call(null,function(){/* empty */},1):method.call(null);});};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");// true  -> String#at
// false -> String#codePointAt
module.exports=function(TO_STRING){return function(that,pos){var s=String(defined(that));var i=toInteger(pos);var l=s.length;var a,b;if(i<0||i>=l)return TO_STRING?'':undefined;a=s.charCodeAt(i);return a<0xd800||a>0xdbff||i+1===l||(b=s.charCodeAt(i+1))<0xdc00||b>0xdfff?TO_STRING?s.charAt(i):a:TO_STRING?s.slice(i,i+2):(a-0xd800<<10)+(b-0xdc00)+0x10000;};};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp=__webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");module.exports=function(that,searchString,NAME){if(isRegExp(searchString))throw TypeError('String#'+NAME+" doesn't accept regex!");return String(defined(that));};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-html.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");var quot=/"/g;// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML=function createHTML(string,tag,attribute,value){var S=String(defined(string));var p1='<'+tag;if(attribute!=='')p1+=' '+attribute+'="'+String(value).replace(quot,'&quot;')+'"';return p1+'>'+S+'</'+tag+'>';};module.exports=function(NAME,exec){var O={};O[NAME]=exec(createHTML);$export($export.P+$export.F*fails(function(){var test=''[NAME]('"');return test!==test.toLowerCase()||test.split('"').length>3;}),'String',O);};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-pad.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var repeat=__webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");module.exports=function(that,maxLength,fillString,left){var S=String(defined(that));var stringLength=S.length;var fillStr=fillString===undefined?' ':String(fillString);var intMaxLength=toLength(maxLength);if(intMaxLength<=stringLength||fillStr=='')return S;var fillLen=intMaxLength-stringLength;var stringFiller=repeat.call(fillStr,Math.ceil(fillLen/fillStr.length));if(stringFiller.length>fillLen)stringFiller=stringFiller.slice(0,fillLen);return left?stringFiller+S:S+stringFiller;};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-repeat.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-repeat.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");module.exports=function repeat(count){var str=String(defined(this));var res='';var n=toInteger(count);if(n<0||n==Infinity)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(str+=str)){if(n&1)res+=str;}return res;};

/***/ }),

/***/ "./node_modules/core-js/modules/_string-trim.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var spaces=__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/modules/_string-ws.js");var space='['+spaces+']';var non="\u200B\x85";var ltrim=RegExp('^'+space+space+'*');var rtrim=RegExp(space+space+'*$');var exporter=function exporter(KEY,exec,ALIAS){var exp={};var FORCE=fails(function(){return!!spaces[KEY]()||non[KEY]()!=non;});var fn=exp[KEY]=FORCE?exec(trim):spaces[KEY];if(ALIAS)exp[ALIAS]=fn;$export($export.P+$export.F*FORCE,'String',exp);};// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim=exporter.trim=function(string,TYPE){string=String(defined(string));if(TYPE&1)string=string.replace(ltrim,'');if(TYPE&2)string=string.replace(rtrim,'');return string;};module.exports=exporter;

/***/ }),

/***/ "./node_modules/core-js/modules/_string-ws.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports="\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var invoke=__webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");var html=__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");var cel=__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var process=global.process;var setTask=global.setImmediate;var clearTask=global.clearImmediate;var MessageChannel=global.MessageChannel;var Dispatch=global.Dispatch;var counter=0;var queue={};var ONREADYSTATECHANGE='onreadystatechange';var defer,channel,port;var run=function run(){var id=+this;// eslint-disable-next-line no-prototype-builtins
if(queue.hasOwnProperty(id)){var fn=queue[id];delete queue[id];fn();}};var listener=function listener(event){run.call(event.data);};// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask||!clearTask){setTask=function setImmediate(fn){var args=[];var i=1;while(arguments.length>i){args.push(arguments[i++]);}queue[++counter]=function(){// eslint-disable-next-line no-new-func
invoke(typeof fn=='function'?fn:Function(fn),args);};defer(counter);return counter;};clearTask=function clearImmediate(id){delete queue[id];};// Node.js 0.8-
if(__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process)=='process'){defer=function defer(id){process.nextTick(ctx(run,id,1));};// Sphere (JS game engine) Dispatch API
}else if(Dispatch&&Dispatch.now){defer=function defer(id){Dispatch.now(ctx(run,id,1));};// Browsers with MessageChannel, includes WebWorkers
}else if(MessageChannel){channel=new MessageChannel();port=channel.port2;channel.port1.onmessage=listener;defer=ctx(port.postMessage,port,1);// Browsers with postMessage, skip WebWorkers
// IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
}else if(global.addEventListener&&typeof postMessage=='function'&&!global.importScripts){defer=function defer(id){global.postMessage(id+'','*');};global.addEventListener('message',listener,false);// IE8-
}else if(ONREADYSTATECHANGE in cel('script')){defer=function defer(id){html.appendChild(cel('script'))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run.call(id);};};// Rest old browsers
}else{defer=function defer(id){setTimeout(ctx(run,id,1),0);};}}module.exports={set:setTask,clear:clearTask};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var max=Math.max;var min=Math.min;module.exports=function(index,length){index=toInteger(index);return index<0?max(index+length,0):min(index,length);};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-index.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_to-index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");module.exports=function(it){if(it===undefined)return 0;var number=toInteger(it);var length=toLength(number);if(number!==length)throw RangeError('Wrong length!');return length;};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil=Math.ceil;var floor=Math.floor;module.exports=function(it){return isNaN(it=+it)?0:(it>0?floor:ceil)(it);};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject=__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");module.exports=function(it){return IObject(defined(it));};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var min=Math.min;module.exports=function(it){return it>0?min(toInteger(it),0x1fffffffffffff):0;// pow(2, 53) - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");module.exports=function(it){return Object(defined(it));};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports=function(it,S){if(!isObject(it))return it;var fn,val;if(S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;if(typeof(fn=it.valueOf)=='function'&&!isObject(val=fn.call(it)))return val;if(!S&&typeof(fn=it.toString)=='function'&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to primitive value");};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-array.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}if(__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")){var LIBRARY=__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $typed=__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");var $buffer=__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var propertyDesc=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var redefineAll=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var toIndex=__webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var classof=__webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var isArrayIter=__webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");var create=__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var gOPN=__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;var getIterFn=__webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");var uid=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");var wks=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");var createArrayMethod=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js");var createArrayIncludes=__webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js");var speciesConstructor=__webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");var ArrayIterators=__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");var Iterators=__webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");var $iterDetect=__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");var setSpecies=__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");var arrayFill=__webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");var arrayCopyWithin=__webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js");var $DP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var $GOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");var dP=$DP.f;var gOPD=$GOPD.f;var RangeError=global.RangeError;var TypeError=global.TypeError;var Uint8Array=global.Uint8Array;var ARRAY_BUFFER='ArrayBuffer';var SHARED_BUFFER='Shared'+ARRAY_BUFFER;var BYTES_PER_ELEMENT='BYTES_PER_ELEMENT';var PROTOTYPE='prototype';var ArrayProto=Array[PROTOTYPE];var $ArrayBuffer=$buffer.ArrayBuffer;var $DataView=$buffer.DataView;var arrayForEach=createArrayMethod(0);var arrayFilter=createArrayMethod(2);var arraySome=createArrayMethod(3);var arrayEvery=createArrayMethod(4);var arrayFind=createArrayMethod(5);var arrayFindIndex=createArrayMethod(6);var arrayIncludes=createArrayIncludes(true);var arrayIndexOf=createArrayIncludes(false);var arrayValues=ArrayIterators.values;var arrayKeys=ArrayIterators.keys;var arrayEntries=ArrayIterators.entries;var arrayLastIndexOf=ArrayProto.lastIndexOf;var arrayReduce=ArrayProto.reduce;var arrayReduceRight=ArrayProto.reduceRight;var arrayJoin=ArrayProto.join;var arraySort=ArrayProto.sort;var arraySlice=ArrayProto.slice;var arrayToString=ArrayProto.toString;var arrayToLocaleString=ArrayProto.toLocaleString;var ITERATOR=wks('iterator');var TAG=wks('toStringTag');var TYPED_CONSTRUCTOR=uid('typed_constructor');var DEF_CONSTRUCTOR=uid('def_constructor');var ALL_CONSTRUCTORS=$typed.CONSTR;var TYPED_ARRAY=$typed.TYPED;var VIEW=$typed.VIEW;var WRONG_LENGTH='Wrong length!';var $map=createArrayMethod(1,function(O,length){return allocate(speciesConstructor(O,O[DEF_CONSTRUCTOR]),length);});var LITTLE_ENDIAN=fails(function(){// eslint-disable-next-line no-undef
return new Uint8Array(new Uint16Array([1]).buffer)[0]===1;});var FORCED_SET=!!Uint8Array&&!!Uint8Array[PROTOTYPE].set&&fails(function(){new Uint8Array(1).set({});});var toOffset=function toOffset(it,BYTES){var offset=toInteger(it);if(offset<0||offset%BYTES)throw RangeError('Wrong offset!');return offset;};var validate=function validate(it){if(isObject(it)&&TYPED_ARRAY in it)return it;throw TypeError(it+' is not a typed array!');};var allocate=function allocate(C,length){if(!(isObject(C)&&TYPED_CONSTRUCTOR in C)){throw TypeError('It is not a typed array constructor!');}return new C(length);};var speciesFromList=function speciesFromList(O,list){return fromList(speciesConstructor(O,O[DEF_CONSTRUCTOR]),list);};var fromList=function fromList(C,list){var index=0;var length=list.length;var result=allocate(C,length);while(length>index){result[index]=list[index++];}return result;};var addGetter=function addGetter(it,key,internal){dP(it,key,{get:function get(){return this._d[internal];}});};var $from=function from(source/* , mapfn, thisArg */){var O=toObject(source);var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var iterFn=getIterFn(O);var i,length,values,result,step,iterator;if(iterFn!=undefined&&!isArrayIter(iterFn)){for(iterator=iterFn.call(O),values=[],i=0;!(step=iterator.next()).done;i++){values.push(step.value);}O=values;}if(mapping&&aLen>2)mapfn=ctx(mapfn,arguments[2],2);for(i=0,length=toLength(O.length),result=allocate(this,length);length>i;i++){result[i]=mapping?mapfn(O[i],i):O[i];}return result;};var $of=function of()/* ...items */{var index=0;var length=arguments.length;var result=allocate(this,length);while(length>index){result[index]=arguments[index++];}return result;};// iOS Safari 6.x fails here
var TO_LOCALE_BUG=!!Uint8Array&&fails(function(){arrayToLocaleString.call(new Uint8Array(1));});var $toLocaleString=function toLocaleString(){return arrayToLocaleString.apply(TO_LOCALE_BUG?arraySlice.call(validate(this)):validate(this),arguments);};var proto={copyWithin:function copyWithin(target,start/* , end */){return arrayCopyWithin.call(validate(this),target,start,arguments.length>2?arguments[2]:undefined);},every:function every(callbackfn/* , thisArg */){return arrayEvery(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined);},fill:function fill(value/* , start, end */){// eslint-disable-line no-unused-vars
return arrayFill.apply(validate(this),arguments);},filter:function filter(callbackfn/* , thisArg */){return speciesFromList(this,arrayFilter(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined));},find:function find(predicate/* , thisArg */){return arrayFind(validate(this),predicate,arguments.length>1?arguments[1]:undefined);},findIndex:function findIndex(predicate/* , thisArg */){return arrayFindIndex(validate(this),predicate,arguments.length>1?arguments[1]:undefined);},forEach:function forEach(callbackfn/* , thisArg */){arrayForEach(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined);},indexOf:function indexOf(searchElement/* , fromIndex */){return arrayIndexOf(validate(this),searchElement,arguments.length>1?arguments[1]:undefined);},includes:function includes(searchElement/* , fromIndex */){return arrayIncludes(validate(this),searchElement,arguments.length>1?arguments[1]:undefined);},join:function join(separator){// eslint-disable-line no-unused-vars
return arrayJoin.apply(validate(this),arguments);},lastIndexOf:function lastIndexOf(searchElement/* , fromIndex */){// eslint-disable-line no-unused-vars
return arrayLastIndexOf.apply(validate(this),arguments);},map:function map(mapfn/* , thisArg */){return $map(validate(this),mapfn,arguments.length>1?arguments[1]:undefined);},reduce:function reduce(callbackfn/* , initialValue */){// eslint-disable-line no-unused-vars
return arrayReduce.apply(validate(this),arguments);},reduceRight:function reduceRight(callbackfn/* , initialValue */){// eslint-disable-line no-unused-vars
return arrayReduceRight.apply(validate(this),arguments);},reverse:function reverse(){var that=this;var length=validate(that).length;var middle=Math.floor(length/2);var index=0;var value;while(index<middle){value=that[index];that[index++]=that[--length];that[length]=value;}return that;},some:function some(callbackfn/* , thisArg */){return arraySome(validate(this),callbackfn,arguments.length>1?arguments[1]:undefined);},sort:function sort(comparefn){return arraySort.call(validate(this),comparefn);},subarray:function subarray(begin,end){var O=validate(this);var length=O.length;var $begin=toAbsoluteIndex(begin,length);return new(speciesConstructor(O,O[DEF_CONSTRUCTOR]))(O.buffer,O.byteOffset+$begin*O.BYTES_PER_ELEMENT,toLength((end===undefined?length:toAbsoluteIndex(end,length))-$begin));}};var $slice=function slice(start,end){return speciesFromList(this,arraySlice.call(validate(this),start,end));};var $set=function set(arrayLike/* , offset */){validate(this);var offset=toOffset(arguments[1],1);var length=this.length;var src=toObject(arrayLike);var len=toLength(src.length);var index=0;if(len+offset>length)throw RangeError(WRONG_LENGTH);while(index<len){this[offset+index]=src[index++];}};var $iterators={entries:function entries(){return arrayEntries.call(validate(this));},keys:function keys(){return arrayKeys.call(validate(this));},values:function values(){return arrayValues.call(validate(this));}};var isTAIndex=function isTAIndex(target,key){return isObject(target)&&target[TYPED_ARRAY]&&_typeof(key)!='symbol'&&key in target&&String(+key)==String(key);};var $getDesc=function getOwnPropertyDescriptor(target,key){return isTAIndex(target,key=toPrimitive(key,true))?propertyDesc(2,target[key]):gOPD(target,key);};var $setDesc=function defineProperty(target,key,desc){if(isTAIndex(target,key=toPrimitive(key,true))&&isObject(desc)&&has(desc,'value')&&!has(desc,'get')&&!has(desc,'set')// TODO: add validation descriptor w/o calling accessors
&&!desc.configurable&&(!has(desc,'writable')||desc.writable)&&(!has(desc,'enumerable')||desc.enumerable)){target[key]=desc.value;return target;}return dP(target,key,desc);};if(!ALL_CONSTRUCTORS){$GOPD.f=$getDesc;$DP.f=$setDesc;}$export($export.S+$export.F*!ALL_CONSTRUCTORS,'Object',{getOwnPropertyDescriptor:$getDesc,defineProperty:$setDesc});if(fails(function(){arrayToString.call({});})){arrayToString=arrayToLocaleString=function toString(){return arrayJoin.call(this);};}var $TypedArrayPrototype$=redefineAll({},proto);redefineAll($TypedArrayPrototype$,$iterators);hide($TypedArrayPrototype$,ITERATOR,$iterators.values);redefineAll($TypedArrayPrototype$,{slice:$slice,set:$set,constructor:function constructor(){/* noop */},toString:arrayToString,toLocaleString:$toLocaleString});addGetter($TypedArrayPrototype$,'buffer','b');addGetter($TypedArrayPrototype$,'byteOffset','o');addGetter($TypedArrayPrototype$,'byteLength','l');addGetter($TypedArrayPrototype$,'length','e');dP($TypedArrayPrototype$,TAG,{get:function get(){return this[TYPED_ARRAY];}});// eslint-disable-next-line max-statements
module.exports=function(KEY,BYTES,wrapper,CLAMPED){CLAMPED=!!CLAMPED;var NAME=KEY+(CLAMPED?'Clamped':'')+'Array';var GETTER='get'+KEY;var SETTER='set'+KEY;var TypedArray=global[NAME];var Base=TypedArray||{};var TAC=TypedArray&&getPrototypeOf(TypedArray);var FORCED=!TypedArray||!$typed.ABV;var O={};var TypedArrayPrototype=TypedArray&&TypedArray[PROTOTYPE];var getter=function getter(that,index){var data=that._d;return data.v[GETTER](index*BYTES+data.o,LITTLE_ENDIAN);};var setter=function setter(that,index,value){var data=that._d;if(CLAMPED)value=(value=Math.round(value))<0?0:value>0xff?0xff:value&0xff;data.v[SETTER](index*BYTES+data.o,value,LITTLE_ENDIAN);};var addElement=function addElement(that,index){dP(that,index,{get:function get(){return getter(this,index);},set:function set(value){return setter(this,index,value);},enumerable:true});};if(FORCED){TypedArray=wrapper(function(that,data,$offset,$length){anInstance(that,TypedArray,NAME,'_d');var index=0;var offset=0;var buffer,byteLength,length,klass;if(!isObject(data)){length=toIndex(data);byteLength=length*BYTES;buffer=new $ArrayBuffer(byteLength);}else if(data instanceof $ArrayBuffer||(klass=classof(data))==ARRAY_BUFFER||klass==SHARED_BUFFER){buffer=data;offset=toOffset($offset,BYTES);var $len=data.byteLength;if($length===undefined){if($len%BYTES)throw RangeError(WRONG_LENGTH);byteLength=$len-offset;if(byteLength<0)throw RangeError(WRONG_LENGTH);}else{byteLength=toLength($length)*BYTES;if(byteLength+offset>$len)throw RangeError(WRONG_LENGTH);}length=byteLength/BYTES;}else if(TYPED_ARRAY in data){return fromList(TypedArray,data);}else{return $from.call(TypedArray,data);}hide(that,'_d',{b:buffer,o:offset,l:byteLength,e:length,v:new $DataView(buffer)});while(index<length){addElement(that,index++);}});TypedArrayPrototype=TypedArray[PROTOTYPE]=create($TypedArrayPrototype$);hide(TypedArrayPrototype,'constructor',TypedArray);}else if(!fails(function(){TypedArray(1);})||!fails(function(){new TypedArray(-1);// eslint-disable-line no-new
})||!$iterDetect(function(iter){new TypedArray();// eslint-disable-line no-new
new TypedArray(null);// eslint-disable-line no-new
new TypedArray(1.5);// eslint-disable-line no-new
new TypedArray(iter);// eslint-disable-line no-new
},true)){TypedArray=wrapper(function(that,data,$offset,$length){anInstance(that,TypedArray,NAME);var klass;// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
if(!isObject(data))return new Base(toIndex(data));if(data instanceof $ArrayBuffer||(klass=classof(data))==ARRAY_BUFFER||klass==SHARED_BUFFER){return $length!==undefined?new Base(data,toOffset($offset,BYTES),$length):$offset!==undefined?new Base(data,toOffset($offset,BYTES)):new Base(data);}if(TYPED_ARRAY in data)return fromList(TypedArray,data);return $from.call(TypedArray,data);});arrayForEach(TAC!==Function.prototype?gOPN(Base).concat(gOPN(TAC)):gOPN(Base),function(key){if(!(key in TypedArray))hide(TypedArray,key,Base[key]);});TypedArray[PROTOTYPE]=TypedArrayPrototype;if(!LIBRARY)TypedArrayPrototype.constructor=TypedArray;}var $nativeIterator=TypedArrayPrototype[ITERATOR];var CORRECT_ITER_NAME=!!$nativeIterator&&($nativeIterator.name=='values'||$nativeIterator.name==undefined);var $iterator=$iterators.values;hide(TypedArray,TYPED_CONSTRUCTOR,true);hide(TypedArrayPrototype,TYPED_ARRAY,NAME);hide(TypedArrayPrototype,VIEW,true);hide(TypedArrayPrototype,DEF_CONSTRUCTOR,TypedArray);if(CLAMPED?new TypedArray(1)[TAG]!=NAME:!(TAG in TypedArrayPrototype)){dP(TypedArrayPrototype,TAG,{get:function get(){return NAME;}});}O[NAME]=TypedArray;$export($export.G+$export.W+$export.F*(TypedArray!=Base),O);$export($export.S,NAME,{BYTES_PER_ELEMENT:BYTES});$export($export.S+$export.F*fails(function(){Base.of.call(TypedArray,1);}),NAME,{from:$from,of:$of});if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype,BYTES_PER_ELEMENT,BYTES);$export($export.P,NAME,proto);setSpecies(NAME);$export($export.P+$export.F*FORCED_SET,NAME,{set:$set});$export($export.P+$export.F*!CORRECT_ITER_NAME,NAME,$iterators);if(!LIBRARY&&TypedArrayPrototype.toString!=arrayToString)TypedArrayPrototype.toString=arrayToString;$export($export.P+$export.F*fails(function(){new TypedArray(1).slice();}),NAME,{slice:$slice});$export($export.P+$export.F*(fails(function(){return[1,2].toLocaleString()!=new TypedArray([1,2]).toLocaleString();})||!fails(function(){TypedArrayPrototype.toLocaleString.call([1,2]);})),NAME,{toLocaleString:$toLocaleString});Iterators[NAME]=CORRECT_ITER_NAME?$nativeIterator:$iterator;if(!LIBRARY&&!CORRECT_ITER_NAME)hide(TypedArrayPrototype,ITERATOR,$iterator);};}else module.exports=function(){/* empty */};

/***/ }),

/***/ "./node_modules/core-js/modules/_typed-buffer.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_typed-buffer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var DESCRIPTORS=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");var LIBRARY=__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");var $typed=__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var redefineAll=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var toIndex=__webpack_require__(/*! ./_to-index */ "./node_modules/core-js/modules/_to-index.js");var gOPN=__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var arrayFill=__webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js");var setToStringTag=__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");var ARRAY_BUFFER='ArrayBuffer';var DATA_VIEW='DataView';var PROTOTYPE='prototype';var WRONG_LENGTH='Wrong length!';var WRONG_INDEX='Wrong index!';var $ArrayBuffer=global[ARRAY_BUFFER];var $DataView=global[DATA_VIEW];var Math=global.Math;var RangeError=global.RangeError;// eslint-disable-next-line no-shadow-restricted-names
var Infinity=global.Infinity;var BaseBuffer=$ArrayBuffer;var abs=Math.abs;var pow=Math.pow;var floor=Math.floor;var log=Math.log;var LN2=Math.LN2;var BUFFER='buffer';var BYTE_LENGTH='byteLength';var BYTE_OFFSET='byteOffset';var $BUFFER=DESCRIPTORS?'_b':BUFFER;var $LENGTH=DESCRIPTORS?'_l':BYTE_LENGTH;var $OFFSET=DESCRIPTORS?'_o':BYTE_OFFSET;// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value,mLen,nBytes){var buffer=new Array(nBytes);var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var rt=mLen===23?pow(2,-24)-pow(2,-77):0;var i=0;var s=value<0||value===0&&1/value<0?1:0;var e,m,c;value=abs(value);// eslint-disable-next-line no-self-compare
if(value!=value||value===Infinity){// eslint-disable-next-line no-self-compare
m=value!=value?1:0;e=eMax;}else{e=floor(log(value)/LN2);if(value*(c=pow(2,-e))<1){e--;c*=2;}if(e+eBias>=1){value+=rt/c;}else{value+=rt*pow(2,1-eBias);}if(value*c>=2){e++;c/=2;}if(e+eBias>=eMax){m=0;e=eMax;}else if(e+eBias>=1){m=(value*c-1)*pow(2,mLen);e=e+eBias;}else{m=value*pow(2,eBias-1)*pow(2,mLen);e=0;}}for(;mLen>=8;buffer[i++]=m&255,m/=256,mLen-=8){;}e=e<<mLen|m;eLen+=mLen;for(;eLen>0;buffer[i++]=e&255,e/=256,eLen-=8){;}buffer[--i]|=s*128;return buffer;}function unpackIEEE754(buffer,mLen,nBytes){var eLen=nBytes*8-mLen-1;var eMax=(1<<eLen)-1;var eBias=eMax>>1;var nBits=eLen-7;var i=nBytes-1;var s=buffer[i--];var e=s&127;var m;s>>=7;for(;nBits>0;e=e*256+buffer[i],i--,nBits-=8){;}m=e&(1<<-nBits)-1;e>>=-nBits;nBits+=mLen;for(;nBits>0;m=m*256+buffer[i],i--,nBits-=8){;}if(e===0){e=1-eBias;}else if(e===eMax){return m?NaN:s?-Infinity:Infinity;}else{m=m+pow(2,mLen);e=e-eBias;}return(s?-1:1)*m*pow(2,e-mLen);}function unpackI32(bytes){return bytes[3]<<24|bytes[2]<<16|bytes[1]<<8|bytes[0];}function packI8(it){return[it&0xff];}function packI16(it){return[it&0xff,it>>8&0xff];}function packI32(it){return[it&0xff,it>>8&0xff,it>>16&0xff,it>>24&0xff];}function packF64(it){return packIEEE754(it,52,8);}function packF32(it){return packIEEE754(it,23,4);}function addGetter(C,key,internal){dP(C[PROTOTYPE],key,{get:function get(){return this[internal];}});}function get(view,bytes,index,isLittleEndian){var numIndex=+index;var intIndex=toIndex(numIndex);if(intIndex+bytes>view[$LENGTH])throw RangeError(WRONG_INDEX);var store=view[$BUFFER]._b;var start=intIndex+view[$OFFSET];var pack=store.slice(start,start+bytes);return isLittleEndian?pack:pack.reverse();}function set(view,bytes,index,conversion,value,isLittleEndian){var numIndex=+index;var intIndex=toIndex(numIndex);if(intIndex+bytes>view[$LENGTH])throw RangeError(WRONG_INDEX);var store=view[$BUFFER]._b;var start=intIndex+view[$OFFSET];var pack=conversion(+value);for(var i=0;i<bytes;i++){store[start+i]=pack[isLittleEndian?i:bytes-i-1];}}if(!$typed.ABV){$ArrayBuffer=function ArrayBuffer(length){anInstance(this,$ArrayBuffer,ARRAY_BUFFER);var byteLength=toIndex(length);this._b=arrayFill.call(new Array(byteLength),0);this[$LENGTH]=byteLength;};$DataView=function DataView(buffer,byteOffset,byteLength){anInstance(this,$DataView,DATA_VIEW);anInstance(buffer,$ArrayBuffer,DATA_VIEW);var bufferLength=buffer[$LENGTH];var offset=toInteger(byteOffset);if(offset<0||offset>bufferLength)throw RangeError('Wrong offset!');byteLength=byteLength===undefined?bufferLength-offset:toLength(byteLength);if(offset+byteLength>bufferLength)throw RangeError(WRONG_LENGTH);this[$BUFFER]=buffer;this[$OFFSET]=offset;this[$LENGTH]=byteLength;};if(DESCRIPTORS){addGetter($ArrayBuffer,BYTE_LENGTH,'_l');addGetter($DataView,BUFFER,'_b');addGetter($DataView,BYTE_LENGTH,'_l');addGetter($DataView,BYTE_OFFSET,'_o');}redefineAll($DataView[PROTOTYPE],{getInt8:function getInt8(byteOffset){return get(this,1,byteOffset)[0]<<24>>24;},getUint8:function getUint8(byteOffset){return get(this,1,byteOffset)[0];},getInt16:function getInt16(byteOffset/* , littleEndian */){var bytes=get(this,2,byteOffset,arguments[1]);return(bytes[1]<<8|bytes[0])<<16>>16;},getUint16:function getUint16(byteOffset/* , littleEndian */){var bytes=get(this,2,byteOffset,arguments[1]);return bytes[1]<<8|bytes[0];},getInt32:function getInt32(byteOffset/* , littleEndian */){return unpackI32(get(this,4,byteOffset,arguments[1]));},getUint32:function getUint32(byteOffset/* , littleEndian */){return unpackI32(get(this,4,byteOffset,arguments[1]))>>>0;},getFloat32:function getFloat32(byteOffset/* , littleEndian */){return unpackIEEE754(get(this,4,byteOffset,arguments[1]),23,4);},getFloat64:function getFloat64(byteOffset/* , littleEndian */){return unpackIEEE754(get(this,8,byteOffset,arguments[1]),52,8);},setInt8:function setInt8(byteOffset,value){set(this,1,byteOffset,packI8,value);},setUint8:function setUint8(byteOffset,value){set(this,1,byteOffset,packI8,value);},setInt16:function setInt16(byteOffset,value/* , littleEndian */){set(this,2,byteOffset,packI16,value,arguments[2]);},setUint16:function setUint16(byteOffset,value/* , littleEndian */){set(this,2,byteOffset,packI16,value,arguments[2]);},setInt32:function setInt32(byteOffset,value/* , littleEndian */){set(this,4,byteOffset,packI32,value,arguments[2]);},setUint32:function setUint32(byteOffset,value/* , littleEndian */){set(this,4,byteOffset,packI32,value,arguments[2]);},setFloat32:function setFloat32(byteOffset,value/* , littleEndian */){set(this,4,byteOffset,packF32,value,arguments[2]);},setFloat64:function setFloat64(byteOffset,value/* , littleEndian */){set(this,8,byteOffset,packF64,value,arguments[2]);}});}else{if(!fails(function(){$ArrayBuffer(1);})||!fails(function(){new $ArrayBuffer(-1);// eslint-disable-line no-new
})||fails(function(){new $ArrayBuffer();// eslint-disable-line no-new
new $ArrayBuffer(1.5);// eslint-disable-line no-new
new $ArrayBuffer(NaN);// eslint-disable-line no-new
return $ArrayBuffer.name!=ARRAY_BUFFER;})){$ArrayBuffer=function ArrayBuffer(length){anInstance(this,$ArrayBuffer);return new BaseBuffer(toIndex(length));};var ArrayBufferProto=$ArrayBuffer[PROTOTYPE]=BaseBuffer[PROTOTYPE];for(var keys=gOPN(BaseBuffer),j=0,key;keys.length>j;){if(!((key=keys[j++])in $ArrayBuffer))hide($ArrayBuffer,key,BaseBuffer[key]);}if(!LIBRARY)ArrayBufferProto.constructor=$ArrayBuffer;}// iOS Safari 7.x bug
var view=new $DataView(new $ArrayBuffer(2));var $setInt8=$DataView[PROTOTYPE].setInt8;view.setInt8(0,2147483648);view.setInt8(1,2147483649);if(view.getInt8(0)||!view.getInt8(1))redefineAll($DataView[PROTOTYPE],{setInt8:function setInt8(byteOffset,value){$setInt8.call(this,byteOffset,value<<24>>24);},setUint8:function setUint8(byteOffset,value){$setInt8.call(this,byteOffset,value<<24>>24);}},true);}setToStringTag($ArrayBuffer,ARRAY_BUFFER);setToStringTag($DataView,DATA_VIEW);hide($DataView[PROTOTYPE],$typed.VIEW,true);exports[ARRAY_BUFFER]=$ArrayBuffer;exports[DATA_VIEW]=$DataView;

/***/ }),

/***/ "./node_modules/core-js/modules/_typed.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_typed.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var uid=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");var TYPED=uid('typed_array');var VIEW=uid('view');var ABV=!!(global.ArrayBuffer&&global.DataView);var CONSTR=ABV;var i=0;var l=9;var Typed;var TypedArrayConstructors='Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');while(i<l){if(Typed=global[TypedArrayConstructors[i++]]){hide(Typed.prototype,TYPED,true);hide(Typed.prototype,VIEW,true);}else CONSTR=false;}module.exports={ABV:ABV,CONSTR:CONSTR,TYPED:TYPED,VIEW:VIEW};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id=0;var px=Math.random();module.exports=function(key){return'Symbol('.concat(key===undefined?'':key,')_',(++id+px).toString(36));};

/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var navigator=global.navigator;module.exports=navigator&&navigator.userAgent||'';

/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");module.exports=function(it,TYPE){if(!isObject(it)||it._t!==TYPE)throw TypeError('Incompatible receiver, '+TYPE+' required!');return it;};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var core=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");var LIBRARY=__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");var wksExt=__webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");var defineProperty=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;module.exports=function(name){var $Symbol=core.Symbol||(core.Symbol=LIBRARY?{}:global.Symbol||{});if(name.charAt(0)!='_'&&!(name in $Symbol))defineProperty($Symbol,name,{value:wksExt.f(name)});};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store=__webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');var uid=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");var _Symbol=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;var USE_SYMBOL=typeof _Symbol=='function';var $exports=module.exports=function(name){return store[name]||(store[name]=USE_SYMBOL&&_Symbol[name]||(USE_SYMBOL?_Symbol:uid)('Symbol.'+name));};$exports.store=store;

/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof=__webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");var ITERATOR=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');var Iterators=__webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");module.exports=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod=function(it){if(it!=undefined)return it[ITERATOR]||it['@@iterator']||Iterators[classof(it)];};

/***/ }),

/***/ "./node_modules/core-js/modules/core.regexp.escape.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/core.regexp.escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $re=__webpack_require__(/*! ./_replacer */ "./node_modules/core-js/modules/_replacer.js")(/[\\^$*+?.()|[\]{}]/g,'\\$&');$export($export.S,'RegExp',{escape:function escape(it){return $re(it);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.copy-within.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.copy-within.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.P,'Array',{copyWithin:__webpack_require__(/*! ./_array-copy-within */ "./node_modules/core-js/modules/_array-copy-within.js")});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('copyWithin');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.every.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.every.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $every=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(4);$export($export.P+$export.F*!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].every,true),'Array',{// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function every(callbackfn/* , thisArg */){return $every(this,callbackfn,arguments[1]);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.fill.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.fill.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.P,'Array',{fill:__webpack_require__(/*! ./_array-fill */ "./node_modules/core-js/modules/_array-fill.js")});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('fill');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.filter.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $filter=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(2);$export($export.P+$export.F*!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].filter,true),'Array',{// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function filter(callbackfn/* , thisArg */){return $filter(this,callbackfn,arguments[1]);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find-index.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $find=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(6);var KEY='findIndex';var forced=true;// Shouldn't skip holes
if(KEY in[])Array(1)[KEY](function(){forced=false;});$export($export.P+$export.F*forced,'Array',{findIndex:function findIndex(callbackfn/* , that = undefined */){return $find(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.find.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.find.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $find=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(5);var KEY='find';var forced=true;// Shouldn't skip holes
if(KEY in[])Array(1)[KEY](function(){forced=false;});$export($export.P+$export.F*forced,'Array',{find:function find(callbackfn/* , that = undefined */){return $find(this,callbackfn,arguments.length>1?arguments[1]:undefined);}});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")(KEY);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $forEach=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);var STRICT=__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach,true);$export($export.P+$export.F*!STRICT,'Array',{// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function forEach(callbackfn/* , thisArg */){return $forEach(this,callbackfn,arguments[1]);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var call=__webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");var isArrayIter=__webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var createProperty=__webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");var getIterFn=__webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");$export($export.S+$export.F*!__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function(iter){Array.from(iter);}),'Array',{// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function from(arrayLike/* , mapfn = undefined, thisArg = undefined */){var O=toObject(arrayLike);var C=typeof this=='function'?this:Array;var aLen=arguments.length;var mapfn=aLen>1?arguments[1]:undefined;var mapping=mapfn!==undefined;var index=0;var iterFn=getIterFn(O);var length,result,step,iterator;if(mapping)mapfn=ctx(mapfn,aLen>2?arguments[2]:undefined,2);// if object isn't iterable or it's array with default iterator - use simple case
if(iterFn!=undefined&&!(C==Array&&isArrayIter(iterFn))){for(iterator=iterFn.call(O),result=new C();!(step=iterator.next()).done;index++){createProperty(result,index,mapping?call(iterator,mapfn,[step.value,index],true):step.value);}}else{length=toLength(O.length);for(result=new C(length);length>index;index++){createProperty(result,index,mapping?mapfn(O[index],index):O[index]);}}result.length=index;return result;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $indexOf=__webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);var $native=[].indexOf;var NEGATIVE_ZERO=!!$native&&1/[1].indexOf(1,-0)<0;$export($export.P+$export.F*(NEGATIVE_ZERO||!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)),'Array',{// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function indexOf(searchElement/* , fromIndex = 0 */){return NEGATIVE_ZERO// convert -0 to +0
?$native.apply(this,arguments)||0:$indexOf(this,searchElement,arguments[1]);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Array',{isArray:__webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var addToUnscopables=__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");var step=__webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");var Iterators=__webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports=__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array,'Array',function(iterated,kind){this._t=toIObject(iterated);// target
this._i=0;// next index
this._k=kind;// kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
},function(){var O=this._t;var kind=this._k;var index=this._i++;if(!O||index>=O.length){this._t=undefined;return step(1);}if(kind=='keys')return step(0,index);if(kind=='values')return step(0,O[index]);return step(0,[index,O[index]]);},'values');// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments=Iterators.Array;addToUnscopables('keys');addToUnscopables('values');addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.join.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var arrayJoin=[].join;// fallback for not array-like strings
$export($export.P+$export.F*(__webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js")!=Object||!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")(arrayJoin)),'Array',{join:function join(separator){return arrayJoin.call(toIObject(this),separator===undefined?',':separator);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.last-index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.last-index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var $native=[].lastIndexOf;var NEGATIVE_ZERO=!!$native&&1/[1].lastIndexOf(1,-0)<0;$export($export.P+$export.F*(NEGATIVE_ZERO||!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)),'Array',{// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function lastIndexOf(searchElement/* , fromIndex = @[*-1] */){// convert -0 to +0
if(NEGATIVE_ZERO)return $native.apply(this,arguments)||0;var O=toIObject(this);var length=toLength(O.length);var index=length-1;if(arguments.length>1)index=Math.min(index,toInteger(arguments[1]));if(index<0)index=length+index;for(;index>=0;index--){if(index in O)if(O[index]===searchElement)return index||0;}return-1;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.map.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $map=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(1);$export($export.P+$export.F*!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].map,true),'Array',{// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function map(callbackfn/* , thisArg */){return $map(this,callbackfn,arguments[1]);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.of.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.of.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var createProperty=__webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");// WebKit Array.of isn't generic
$export($export.S+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){function F(){/* empty */}return!(Array.of.call(F)instanceof F);}),'Array',{// 22.1.2.3 Array.of( ...items)
of:function of()/* ...args */{var index=0;var aLen=arguments.length;var result=new(typeof this=='function'?this:Array)(aLen);while(aLen>index){createProperty(result,index,arguments[index++]);}result.length=aLen;return result;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce-right.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce-right.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $reduce=__webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");$export($export.P+$export.F*!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduceRight,true),'Array',{// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function reduceRight(callbackfn/* , initialValue */){return $reduce(this,callbackfn,arguments.length,arguments[1],true);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.reduce.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.reduce.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $reduce=__webpack_require__(/*! ./_array-reduce */ "./node_modules/core-js/modules/_array-reduce.js");$export($export.P+$export.F*!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].reduce,true),'Array',{// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function reduce(callbackfn/* , initialValue */){return $reduce(this,callbackfn,arguments.length,arguments[1],false);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.slice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var html=__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var arraySlice=[].slice;// fallback for not array-like ES3 strings and DOM objects
$export($export.P+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){if(html)arraySlice.call(html);}),'Array',{slice:function slice(begin,end){var len=toLength(this.length);var klass=cof(this);end=end===undefined?len:end;if(klass=='Array')return arraySlice.call(this,begin,end);var start=toAbsoluteIndex(begin,len);var upTo=toAbsoluteIndex(end,len);var size=toLength(upTo-start);var cloned=new Array(size);var i=0;for(;i<size;i++){cloned[i]=klass=='String'?this.charAt(start+i):this[start+i];}return cloned;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.some.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $some=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(3);$export($export.P+$export.F*!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].some,true),'Array',{// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function some(callbackfn/* , thisArg */){return $some(this,callbackfn,arguments[1]);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var $sort=[].sort;var test=[1,2,3];$export($export.P+$export.F*(fails(function(){// IE8-
test.sort(undefined);})||!fails(function(){// V8 bug
test.sort(null);// Old WebKit
})||!__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)),'Array',{// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function sort(comparefn){return comparefn===undefined?$sort.call(toObject(this)):$sort.call(toObject(this),aFunction(comparefn));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.species.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.species.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Array');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.now.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Date',{now:function now(){return new Date().getTime();}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-iso-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-iso-string.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toISOString=__webpack_require__(/*! ./_date-to-iso-string */ "./node_modules/core-js/modules/_date-to-iso-string.js");// PhantomJS / old WebKit has a broken implementations
$export($export.P+$export.F*(Date.prototype.toISOString!==toISOString),'Date',{toISOString:toISOString});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-json.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");$export($export.P+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return new Date(NaN).toJSON()!==null||Date.prototype.toJSON.call({toISOString:function toISOString(){return 1;}})!==1;}),'Date',{// eslint-disable-next-line no-unused-vars
toJSON:function toJSON(key){var O=toObject(this);var pv=toPrimitive(O);return typeof pv=='number'&&!isFinite(pv)?null:O.toISOString();}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toPrimitive');var proto=Date.prototype;if(!(TO_PRIMITIVE in proto))__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(proto,TO_PRIMITIVE,__webpack_require__(/*! ./_date-to-primitive */ "./node_modules/core-js/modules/_date-to-primitive.js"));

/***/ }),

/***/ "./node_modules/core-js/modules/es6.date.to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DateProto=Date.prototype;var INVALID_DATE='Invalid Date';var TO_STRING='toString';var $toString=DateProto[TO_STRING];var getTime=DateProto.getTime;if(new Date(NaN)+''!=INVALID_DATE){__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(DateProto,TO_STRING,function toString(){var value=getTime.call(this);// eslint-disable-next-line no-self-compare
return value===value?$toString.call(this):INVALID_DATE;});}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.P,'Function',{bind:__webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.has-instance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.has-instance.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var HAS_INSTANCE=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('hasInstance');var FunctionProto=Function.prototype;// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(FunctionProto,HAS_INSTANCE,{value:function value(O){if(typeof this!='function'||!isObject(O))return false;if(!isObject(this.prototype))return O instanceof this;// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
while(O=getPrototypeOf(O)){if(this.prototype===O)return true;}return false;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var FProto=Function.prototype;var nameRE=/^\s*function ([^ (]*)/;var NAME='name';// 19.2.4.2 name
NAME in FProto||__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&dP(FProto,NAME,{configurable:true,get:function get(){try{return(''+this).match(nameRE)[1];}catch(e){return'';}}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.map.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var strong=__webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");var validate=__webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");var MAP='Map';// 23.1 Map Objects
module.exports=__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(MAP,function(get){return function Map(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.1.3.6 Map.prototype.get(key)
get:function get(key){var entry=strong.getEntry(validate(this,MAP),key);return entry&&entry.v;},// 23.1.3.9 Map.prototype.set(key, value)
set:function set(key,value){return strong.def(validate(this,MAP),key===0?0:key,value);}},strong,true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.acosh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.acosh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var log1p=__webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js");var sqrt=Math.sqrt;var $acosh=Math.acosh;$export($export.S+$export.F*!($acosh// V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&&Math.floor($acosh(Number.MAX_VALUE))==710// Tor Browser bug: Math.acosh(Infinity) -> NaN
&&$acosh(Infinity)==Infinity),'Math',{acosh:function acosh(x){return(x=+x)<1?NaN:x>94906265.62425156?Math.log(x)+Math.LN2:log1p(x-1+sqrt(x-1)*sqrt(x+1));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.asinh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.asinh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $asinh=Math.asinh;function asinh(x){return!isFinite(x=+x)||x==0?x:x<0?-asinh(-x):Math.log(x+Math.sqrt(x*x+1));}// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S+$export.F*!($asinh&&1/$asinh(0)>0),'Math',{asinh:asinh});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.atanh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.atanh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $atanh=Math.atanh;// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S+$export.F*!($atanh&&1/$atanh(-0)<0),'Math',{atanh:function atanh(x){return(x=+x)==0?x:Math.log((1+x)/(1-x))/2;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cbrt.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cbrt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var sign=__webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js");$export($export.S,'Math',{cbrt:function cbrt(x){return sign(x=+x)*Math.pow(Math.abs(x),1/3);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.clz32.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.clz32.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{clz32:function clz32(x){return(x>>>=0)?31-Math.floor(Math.log(x+0.5)*Math.LOG2E):32;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.cosh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.cosh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var exp=Math.exp;$export($export.S,'Math',{cosh:function cosh(x){return(exp(x=+x)+exp(-x))/2;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.expm1.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.expm1.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $expm1=__webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");$export($export.S+$export.F*($expm1!=Math.expm1),'Math',{expm1:$expm1});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.fround.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.fround.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{fround:__webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.hypot.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.hypot.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var abs=Math.abs;$export($export.S,'Math',{hypot:function hypot(value1,value2){// eslint-disable-line no-unused-vars
var sum=0;var i=0;var aLen=arguments.length;var larg=0;var arg,div;while(i<aLen){arg=abs(arguments[i++]);if(larg<arg){div=larg/arg;sum=sum*div*div+1;larg=arg;}else if(arg>0){div=arg/larg;sum+=div*div;}else sum+=arg;}return larg===Infinity?Infinity:larg*Math.sqrt(sum);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.imul.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.imul.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $imul=Math.imul;// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return $imul(0xffffffff,5)!=-5||$imul.length!=2;}),'Math',{imul:function imul(x,y){var UINT16=0xffff;var xn=+x;var yn=+y;var xl=UINT16&xn;var yl=UINT16&yn;return 0|xl*yl+((UINT16&xn>>>16)*yl+xl*(UINT16&yn>>>16)<<16>>>0);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log10.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log10.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{log10:function log10(x){return Math.log(x)*Math.LOG10E;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log1p.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log1p.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{log1p:__webpack_require__(/*! ./_math-log1p */ "./node_modules/core-js/modules/_math-log1p.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.log2.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.log2.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{log2:function log2(x){return Math.log(x)/Math.LN2;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{sign:__webpack_require__(/*! ./_math-sign */ "./node_modules/core-js/modules/_math-sign.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.sinh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.sinh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var expm1=__webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");var exp=Math.exp;// V8 near Chromium 38 has a problem with very small numbers
$export($export.S+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return!Math.sinh(-2e-17)!=-2e-17;}),'Math',{sinh:function sinh(x){return Math.abs(x=+x)<1?(expm1(x)-expm1(-x))/2:(exp(x-1)-exp(-x-1))*(Math.E/2);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.tanh.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.tanh.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var expm1=__webpack_require__(/*! ./_math-expm1 */ "./node_modules/core-js/modules/_math-expm1.js");var exp=Math.exp;$export($export.S,'Math',{tanh:function tanh(x){var a=expm1(x=+x);var b=expm1(-x);return a==Infinity?1:b==Infinity?-1:(a-b)/(exp(x)+exp(-x));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.math.trunc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.math.trunc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{trunc:function trunc(it){return(it>0?Math.floor:Math.ceil)(it);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");var inheritIfRequired=__webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var gOPN=__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;var gOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var $trim=__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js").trim;var NUMBER='Number';var $Number=global[NUMBER];var Base=$Number;var proto=$Number.prototype;// Opera ~12 has broken Object#toString
var BROKEN_COF=cof(__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")(proto))==NUMBER;var TRIM='trim'in String.prototype;// 7.1.3 ToNumber(argument)
var toNumber=function toNumber(argument){var it=toPrimitive(argument,false);if(typeof it=='string'&&it.length>2){it=TRIM?it.trim():$trim(it,3);var first=it.charCodeAt(0);var third,radix,maxCode;if(first===43||first===45){third=it.charCodeAt(2);if(third===88||third===120)return NaN;// Number('+0x1') should be NaN, old V8 fix
}else if(first===48){switch(it.charCodeAt(1)){case 66:case 98:radix=2;maxCode=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:radix=8;maxCode=55;break;// fast equal /^0o[0-7]+$/i
default:return+it;}for(var digits=it.slice(2),i=0,l=digits.length,code;i<l;i++){code=digits.charCodeAt(i);// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if(code<48||code>maxCode)return NaN;}return parseInt(digits,radix);}}return+it;};if(!$Number(' 0o1')||!$Number('0b1')||$Number('+0x1')){$Number=function Number(value){var it=arguments.length<1?0:value;var that=this;return that instanceof $Number// check on 1..constructor(foo) case
&&(BROKEN_COF?fails(function(){proto.valueOf.call(that);}):cof(that)!=NUMBER)?inheritIfRequired(new Base(toNumber(it)),that,$Number):toNumber(it);};for(var keys=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")?gOPN(Base):(// ES3:
'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,'+// ES6 (in case, if modules with ES6 Number statics required before):
'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,'+'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','),j=0,key;keys.length>j;j++){if(has(Base,key=keys[j])&&!has($Number,key)){dP($Number,key,gOPD(Base,key));}}$Number.prototype=proto;proto.constructor=$Number;__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global,NUMBER,$Number);}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.epsilon.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.epsilon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Number',{EPSILON:Math.pow(2,-52)});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-finite.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-finite.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var _isFinite=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").isFinite;$export($export.S,'Number',{isFinite:function isFinite(it){return typeof it=='number'&&_isFinite(it);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Number',{isInteger:__webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Number',{isNaN:function isNaN(number){// eslint-disable-next-line no-self-compare
return number!=number;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-safe-integer.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-safe-integer.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var isInteger=__webpack_require__(/*! ./_is-integer */ "./node_modules/core-js/modules/_is-integer.js");var abs=Math.abs;$export($export.S,'Number',{isSafeInteger:function isSafeInteger(number){return isInteger(number)&&abs(number)<=0x1fffffffffffff;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.max-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.max-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Number',{MAX_SAFE_INTEGER:0x1fffffffffffff});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.min-safe-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.min-safe-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Number',{MIN_SAFE_INTEGER:-0x1fffffffffffff});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-float.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-float.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $parseFloat=__webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");// 20.1.2.12 Number.parseFloat(string)
$export($export.S+$export.F*(Number.parseFloat!=$parseFloat),'Number',{parseFloat:$parseFloat});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.parse-int.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.parse-int.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $parseInt=__webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S+$export.F*(Number.parseInt!=$parseInt),'Number',{parseInt:$parseInt});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-fixed.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-fixed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var aNumberValue=__webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");var repeat=__webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js");var $toFixed=1.0.toFixed;var floor=Math.floor;var data=[0,0,0,0,0,0];var ERROR='Number.toFixed: incorrect invocation!';var ZERO='0';var multiply=function multiply(n,c){var i=-1;var c2=c;while(++i<6){c2+=n*data[i];data[i]=c2%1e7;c2=floor(c2/1e7);}};var divide=function divide(n){var i=6;var c=0;while(--i>=0){c+=data[i];data[i]=floor(c/n);c=c%n*1e7;}};var numToString=function numToString(){var i=6;var s='';while(--i>=0){if(s!==''||i===0||data[i]!==0){var t=String(data[i]);s=s===''?t:s+repeat.call(ZERO,7-t.length)+t;}}return s;};var pow=function pow(x,n,acc){return n===0?acc:n%2===1?pow(x,n-1,acc*x):pow(x*x,n/2,acc);};var log=function log(x){var n=0;var x2=x;while(x2>=4096){n+=12;x2/=4096;}while(x2>=2){n+=1;x2/=2;}return n;};$export($export.P+$export.F*(!!$toFixed&&(0.00008.toFixed(3)!=='0.000'||0.9.toFixed(0)!=='1'||1.255.toFixed(2)!=='1.25'||1000000000000000128.0.toFixed(0)!=='1000000000000000128')||!__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){// V8 ~ Android 4.3-
$toFixed.call({});})),'Number',{toFixed:function toFixed(fractionDigits){var x=aNumberValue(this,ERROR);var f=toInteger(fractionDigits);var s='';var m=ZERO;var e,z,j,k;if(f<0||f>20)throw RangeError(ERROR);// eslint-disable-next-line no-self-compare
if(x!=x)return'NaN';if(x<=-1e21||x>=1e21)return String(x);if(x<0){s='-';x=-x;}if(x>1e-21){e=log(x*pow(2,69,1))-69;z=e<0?x*pow(2,-e,1):x/pow(2,e,1);z*=0x10000000000000;e=52-e;if(e>0){multiply(0,z);j=f;while(j>=7){multiply(1e7,0);j-=7;}multiply(pow(10,j,1),0);j=e-1;while(j>=23){divide(1<<23);j-=23;}divide(1<<j);multiply(1,1);divide(2);m=numToString();}else{multiply(0,z);multiply(1<<-e,0);m=numToString()+repeat.call(ZERO,f);}}if(f>0){k=m.length;m=s+(k<=f?'0.'+repeat.call(ZERO,f-k)+m:m.slice(0,k-f)+'.'+m.slice(k-f));}else{m=s+m;}return m;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.to-precision.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.to-precision.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var aNumberValue=__webpack_require__(/*! ./_a-number-value */ "./node_modules/core-js/modules/_a-number-value.js");var $toPrecision=1.0.toPrecision;$export($export.P+$export.F*($fails(function(){// IE7-
return $toPrecision.call(1,undefined)!=='1';})||!$fails(function(){// V8 ~ Android 4.3-
$toPrecision.call({});})),'Number',{toPrecision:function toPrecision(precision){var that=aNumberValue(this,'Number#toPrecision: incorrect invocation!');return precision===undefined?$toPrecision.call(that):$toPrecision.call(that,precision);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.assign.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S+$export.F,'Object',{assign:__webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.create.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S,'Object',{create:__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S+$export.F*!__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"),'Object',{defineProperties:__webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S+$export.F*!__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js"),'Object',{defineProperty:__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.freeze.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.freeze.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var meta=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('freeze',function($freeze){return function freeze(it){return $freeze&&isObject(it)?$freeze(meta(it)):it;};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var $getOwnPropertyDescriptor=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyDescriptor',function(){return function getOwnPropertyDescriptor(it,key){return $getOwnPropertyDescriptor(toIObject(it),key);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-own-property-names.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-own-property-names.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getOwnPropertyNames',function(){return __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js").f;});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var $getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('getPrototypeOf',function(){return function getPrototypeOf(it){return $getPrototypeOf(toObject(it));};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-extensible.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-extensible.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isExtensible',function($isExtensible){return function isExtensible(it){return isObject(it)?$isExtensible?$isExtensible(it):true:false;};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-frozen.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-frozen.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isFrozen',function($isFrozen){return function isFrozen(it){return isObject(it)?$isFrozen?$isFrozen(it):false:true;};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is-sealed.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is-sealed.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('isSealed',function($isSealed){return function isSealed(it){return isObject(it)?$isSealed?$isSealed(it):false:true;};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.is.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.is.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Object',{is:__webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var $keys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('keys',function(){return function keys(it){return $keys(toObject(it));};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.prevent-extensions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.prevent-extensions.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var meta=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('preventExtensions',function($preventExtensions){return function preventExtensions(it){return $preventExtensions&&isObject(it)?$preventExtensions(meta(it)):it;};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.seal.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.seal.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var meta=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").onFreeze;__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/modules/_object-sap.js")('seal',function($seal){return function seal(it){return $seal&&isObject(it)?$seal(meta(it)):it;};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Object',{setPrototypeOf:__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 19.1.3.6 Object.prototype.toString()
var classof=__webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");var test={};test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')]='z';if(test+''!='[object z]'){__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype,'toString',function toString(){return'[object '+classof(this)+']';},true);}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-float.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-float.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $parseFloat=__webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/modules/_parse-float.js");// 18.2.4 parseFloat(string)
$export($export.G+$export.F*(parseFloat!=$parseFloat),{parseFloat:$parseFloat});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.parse-int.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $parseInt=__webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/modules/_parse-int.js");// 18.2.5 parseInt(string, radix)
$export($export.G+$export.F*(parseInt!=$parseInt),{parseInt:$parseInt});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var LIBRARY=__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var ctx=__webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");var classof=__webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");var speciesConstructor=__webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");var task=__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;var microtask=__webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();var newPromiseCapabilityModule=__webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");var perform=__webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");var userAgent=__webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");var promiseResolve=__webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");var PROMISE='Promise';var TypeError=global.TypeError;var process=global.process;var versions=process&&process.versions;var v8=versions&&versions.v8||'';var $Promise=global[PROMISE];var isNode=classof(process)=='process';var empty=function empty(){/* empty */};var Internal,newGenericPromiseCapability,OwnPromiseCapability,Wrapper;var newPromiseCapability=newGenericPromiseCapability=newPromiseCapabilityModule.f;var USE_NATIVE=!!function(){try{// correct subclassing with @@species support
var promise=$Promise.resolve(1);var FakePromise=(promise.constructor={})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')]=function(exec){exec(empty,empty);};// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(isNode||typeof PromiseRejectionEvent=='function')&&promise.then(empty)instanceof FakePromise// v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
// https://bugs.chromium.org/p/chromium/issues/detail?id=830565
// we can't detect it synchronously, so just check versions
&&v8.indexOf('6.6')!==0&&userAgent.indexOf('Chrome/66')===-1;}catch(e){/* empty */}}();// helpers
var isThenable=function isThenable(it){var then;return isObject(it)&&typeof(then=it.then)=='function'?then:false;};var notify=function notify(promise,isReject){if(promise._n)return;promise._n=true;var chain=promise._c;microtask(function(){var value=promise._v;var ok=promise._s==1;var i=0;var run=function run(reaction){var handler=ok?reaction.ok:reaction.fail;var resolve=reaction.resolve;var reject=reaction.reject;var domain=reaction.domain;var result,then,exited;try{if(handler){if(!ok){if(promise._h==2)onHandleUnhandled(promise);promise._h=1;}if(handler===true)result=value;else{if(domain)domain.enter();result=handler(value);// may throw
if(domain){domain.exit();exited=true;}}if(result===reaction.promise){reject(TypeError('Promise-chain cycle'));}else if(then=isThenable(result)){then.call(result,resolve,reject);}else resolve(result);}else reject(value);}catch(e){if(domain&&!exited)domain.exit();reject(e);}};while(chain.length>i){run(chain[i++]);}// variable length - can't use forEach
promise._c=[];promise._n=false;if(isReject&&!promise._h)onUnhandled(promise);});};var onUnhandled=function onUnhandled(promise){task.call(global,function(){var value=promise._v;var unhandled=isUnhandled(promise);var result,handler,console;if(unhandled){result=perform(function(){if(isNode){process.emit('unhandledRejection',value,promise);}else if(handler=global.onunhandledrejection){handler({promise:promise,reason:value});}else if((console=global.console)&&console.error){console.error('Unhandled promise rejection',value);}});// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
promise._h=isNode||isUnhandled(promise)?2:1;}promise._a=undefined;if(unhandled&&result.e)throw result.v;});};var isUnhandled=function isUnhandled(promise){return promise._h!==1&&(promise._a||promise._c).length===0;};var onHandleUnhandled=function onHandleUnhandled(promise){task.call(global,function(){var handler;if(isNode){process.emit('rejectionHandled',promise);}else if(handler=global.onrejectionhandled){handler({promise:promise,reason:promise._v});}});};var $reject=function $reject(value){var promise=this;if(promise._d)return;promise._d=true;promise=promise._w||promise;// unwrap
promise._v=value;promise._s=2;if(!promise._a)promise._a=promise._c.slice();notify(promise,true);};var $resolve=function $resolve(value){var promise=this;var then;if(promise._d)return;promise._d=true;promise=promise._w||promise;// unwrap
try{if(promise===value)throw TypeError("Promise can't be resolved itself");if(then=isThenable(value)){microtask(function(){var wrapper={_w:promise,_d:false};// wrap
try{then.call(value,ctx($resolve,wrapper,1),ctx($reject,wrapper,1));}catch(e){$reject.call(wrapper,e);}});}else{promise._v=value;promise._s=1;notify(promise,false);}}catch(e){$reject.call({_w:promise,_d:false},e);// wrap
}};// constructor polyfill
if(!USE_NATIVE){// 25.4.3.1 Promise(executor)
$Promise=function Promise(executor){anInstance(this,$Promise,PROMISE,'_h');aFunction(executor);Internal.call(this);try{executor(ctx($resolve,this,1),ctx($reject,this,1));}catch(err){$reject.call(this,err);}};// eslint-disable-next-line no-unused-vars
Internal=function Promise(executor){this._c=[];// <- awaiting reactions
this._a=undefined;// <- checked in isUnhandled reactions
this._s=0;// <- state
this._d=false;// <- done
this._v=undefined;// <- value
this._h=0;// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=false;// <- notify
};Internal.prototype=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype,{// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function then(onFulfilled,onRejected){var reaction=newPromiseCapability(speciesConstructor(this,$Promise));reaction.ok=typeof onFulfilled=='function'?onFulfilled:true;reaction.fail=typeof onRejected=='function'&&onRejected;reaction.domain=isNode?process.domain:undefined;this._c.push(reaction);if(this._a)this._a.push(reaction);if(this._s)notify(this,false);return reaction.promise;},// 25.4.5.1 Promise.prototype.catch(onRejected)
'catch':function _catch(onRejected){return this.then(undefined,onRejected);}});OwnPromiseCapability=function OwnPromiseCapability(){var promise=new Internal();this.promise=promise;this.resolve=ctx($resolve,promise,1);this.reject=ctx($reject,promise,1);};newPromiseCapabilityModule.f=newPromiseCapability=function newPromiseCapability(C){return C===$Promise||C===Wrapper?new OwnPromiseCapability(C):newGenericPromiseCapability(C);};}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Promise:$Promise});__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise,PROMISE);__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);Wrapper=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];// statics
$export($export.S+$export.F*!USE_NATIVE,PROMISE,{// 25.4.4.5 Promise.reject(r)
reject:function reject(r){var capability=newPromiseCapability(this);var $$reject=capability.reject;$$reject(r);return capability.promise;}});$export($export.S+$export.F*(LIBRARY||!USE_NATIVE),PROMISE,{// 25.4.4.6 Promise.resolve(x)
resolve:function resolve(x){return promiseResolve(LIBRARY&&this===Wrapper?$Promise:this,x);}});$export($export.S+$export.F*!(USE_NATIVE&&__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function(iter){$Promise.all(iter)['catch'](empty);})),PROMISE,{// 25.4.4.1 Promise.all(iterable)
all:function all(iterable){var C=this;var capability=newPromiseCapability(C);var resolve=capability.resolve;var reject=capability.reject;var result=perform(function(){var values=[];var index=0;var remaining=1;forOf(iterable,false,function(promise){var $index=index++;var alreadyCalled=false;values.push(undefined);remaining++;C.resolve(promise).then(function(value){if(alreadyCalled)return;alreadyCalled=true;values[$index]=value;--remaining||resolve(values);},reject);});--remaining||resolve(values);});if(result.e)reject(result.v);return capability.promise;},// 25.4.4.4 Promise.race(iterable)
race:function race(iterable){var C=this;var capability=newPromiseCapability(C);var reject=capability.reject;var result=perform(function(){forOf(iterable,false,function(promise){C.resolve(promise).then(capability.resolve,reject);});});if(result.e)reject(result.v);return capability.promise;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.apply.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.apply.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var rApply=(__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect||{}).apply;var fApply=Function.apply;// MS Edge argumentsList argument is optional
$export($export.S+$export.F*!__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){rApply(function(){/* empty */});}),'Reflect',{apply:function apply(target,thisArgument,argumentsList){var T=aFunction(target);var L=anObject(argumentsList);return rApply?rApply(T,thisArgument,L):fApply.call(T,thisArgument,L);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.construct.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.construct.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var create=__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var bind=__webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js");var rConstruct=(__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Reflect||{}).construct;// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG=fails(function(){function F(){/* empty */}return!(rConstruct(function(){/* empty */},[],F)instanceof F);});var ARGS_BUG=!fails(function(){rConstruct(function(){/* empty */});});$export($export.S+$export.F*(NEW_TARGET_BUG||ARGS_BUG),'Reflect',{construct:function construct(Target,args/* , newTarget */){aFunction(Target);anObject(args);var newTarget=arguments.length<3?Target:aFunction(arguments[2]);if(ARGS_BUG&&!NEW_TARGET_BUG)return rConstruct(Target,args,newTarget);if(Target==newTarget){// w/o altered newTarget, optimization for 0-4 arguments
switch(args.length){case 0:return new Target();case 1:return new Target(args[0]);case 2:return new Target(args[0],args[1]);case 3:return new Target(args[0],args[1],args[2]);case 4:return new Target(args[0],args[1],args[2],args[3]);}// w/o altered newTarget, lot of arguments case
var $args=[null];$args.push.apply($args,args);return new(bind.apply(Target,$args))();}// with altered newTarget, not support built-in constructors
var proto=newTarget.prototype;var instance=create(isObject(proto)?proto:Object.prototype);var result=Function.apply.call(Target,instance,args);return isObject(result)?result:instance;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.define-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.define-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){// eslint-disable-next-line no-undef
Reflect.defineProperty(dP.f({},1,{value:1}),1,{value:2});}),'Reflect',{defineProperty:function defineProperty(target,propertyKey,attributes){anObject(target);propertyKey=toPrimitive(propertyKey,true);anObject(attributes);try{dP.f(target,propertyKey,attributes);return true;}catch(e){return false;}}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.delete-property.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.delete-property.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var gOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");$export($export.S,'Reflect',{deleteProperty:function deleteProperty(target,propertyKey){var desc=gOPD(anObject(target),propertyKey);return desc&&!desc.configurable?false:delete target[propertyKey];}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.enumerate.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.enumerate.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 26.1.5 Reflect.enumerate(target)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var Enumerate=function Enumerate(iterated){this._t=anObject(iterated);// target
this._i=0;// next index
var keys=this._k=[];// keys
var key;for(key in iterated){keys.push(key);}};__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")(Enumerate,'Object',function(){var that=this;var keys=that._k;var key;do{if(that._i>=keys.length)return{value:undefined,done:true};}while(!((key=keys[that._i++])in that._t));return{value:key,done:false};});$export($export.S,'Reflect',{enumerate:function enumerate(target){return new Enumerate(target);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");$export($export.S,'Reflect',{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(target,propertyKey){return gOPD.f(anObject(target),propertyKey);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var getProto=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");$export($export.S,'Reflect',{getPrototypeOf:function getPrototypeOf(target){return getProto(anObject(target));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.get.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.get.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");function get(target,propertyKey/* , receiver */){var receiver=arguments.length<3?target:arguments[2];var desc,proto;if(anObject(target)===receiver)return target[propertyKey];if(desc=gOPD.f(target,propertyKey))return has(desc,'value')?desc.value:desc.get!==undefined?desc.get.call(receiver):undefined;if(isObject(proto=getPrototypeOf(target)))return get(proto,propertyKey,receiver);}$export($export.S,'Reflect',{get:get});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.has.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.has.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Reflect',{has:function has(target,propertyKey){return propertyKey in target;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.is-extensible.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.is-extensible.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var $isExtensible=Object.isExtensible;$export($export.S,'Reflect',{isExtensible:function isExtensible(target){anObject(target);return $isExtensible?$isExtensible(target):true;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.own-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.own-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Reflect',{ownKeys:__webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.prevent-extensions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var $preventExtensions=Object.preventExtensions;$export($export.S,'Reflect',{preventExtensions:function preventExtensions(target){anObject(target);try{if($preventExtensions)$preventExtensions(target);return true;}catch(e){return false;}}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set-prototype-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var setProto=__webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js");if(setProto)$export($export.S,'Reflect',{setPrototypeOf:function setPrototypeOf(target,proto){setProto.check(target,proto);try{setProto.set(target,proto);return true;}catch(e){return false;}}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.reflect.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.reflect.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var gOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var createDesc=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");function set(target,propertyKey,V/* , receiver */){var receiver=arguments.length<4?target:arguments[3];var ownDesc=gOPD.f(anObject(target),propertyKey);var existingDescriptor,proto;if(!ownDesc){if(isObject(proto=getPrototypeOf(target))){return set(proto,propertyKey,V,receiver);}ownDesc=createDesc(0);}if(has(ownDesc,'value')){if(ownDesc.writable===false||!isObject(receiver))return false;if(existingDescriptor=gOPD.f(receiver,propertyKey)){if(existingDescriptor.get||existingDescriptor.set||existingDescriptor.writable===false)return false;existingDescriptor.value=V;dP.f(receiver,propertyKey,existingDescriptor);}else dP.f(receiver,propertyKey,createDesc(0,V));return true;}return ownDesc.set===undefined?false:(ownDesc.set.call(receiver,V),true);}$export($export.S,'Reflect',{set:set});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var inheritIfRequired=__webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");var dP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;var gOPN=__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;var isRegExp=__webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");var $flags=__webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");var $RegExp=global.RegExp;var Base=$RegExp;var proto=$RegExp.prototype;var re1=/a/g;var re2=/a/g;// "new" creates a new object, old webkit buggy here
var CORRECT_NEW=new $RegExp(re1)!==re1;if(__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&(!CORRECT_NEW||__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){re2[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match')]=false;// RegExp constructor can alter flags and IsRegExp works correct with @@match
return $RegExp(re1)!=re1||$RegExp(re2)==re2||$RegExp(re1,'i')!='/a/i';}))){$RegExp=function RegExp(p,f){var tiRE=this instanceof $RegExp;var piRE=isRegExp(p);var fiU=f===undefined;return!tiRE&&piRE&&p.constructor===$RegExp&&fiU?p:inheritIfRequired(CORRECT_NEW?new Base(piRE&&!fiU?p.source:p,f):Base((piRE=p instanceof $RegExp)?p.source:p,piRE&&fiU?$flags.call(p):f),tiRE?this:proto,$RegExp);};var proxy=function proxy(key){key in $RegExp||dP($RegExp,key,{configurable:true,get:function get(){return Base[key];},set:function set(it){Base[key]=it;}});};for(var keys=gOPN(Base),i=0;keys.length>i;){proxy(keys[i++]);}proto.constructor=$RegExp;$RegExp.prototype=proto;__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(global,'RegExp',$RegExp);}__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('RegExp');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.exec.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var regexpExec=__webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js")({target:'RegExp',proto:true,forced:regexpExec!==/./.exec},{exec:regexpExec});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if(__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&/./g.flags!='g')__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype,'flags',{configurable:true,get:__webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.match.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var advanceStringIndex=__webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");var regExpExec=__webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");// @@match logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('match',1,function(defined,MATCH,$match,maybeCallNative){return[// `String.prototype.match` method
// https://tc39.github.io/ecma262/#sec-string.prototype.match
function match(regexp){var O=defined(this);var fn=regexp==undefined?undefined:regexp[MATCH];return fn!==undefined?fn.call(regexp,O):new RegExp(regexp)[MATCH](String(O));},// `RegExp.prototype[@@match]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
function(regexp){var res=maybeCallNative($match,regexp,this);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);if(!rx.global)return regExpExec(rx,S);var fullUnicode=rx.unicode;rx.lastIndex=0;var A=[];var n=0;var result;while((result=regExpExec(rx,S))!==null){var matchStr=String(result[0]);A[n]=matchStr;if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength(rx.lastIndex),fullUnicode);n++;}return n===0?null:A;}];});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var advanceStringIndex=__webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");var regExpExec=__webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");var max=Math.max;var min=Math.min;var floor=Math.floor;var SUBSTITUTION_SYMBOLS=/\$([$&`']|\d\d?|<[^>]*>)/g;var SUBSTITUTION_SYMBOLS_NO_NAMED=/\$([$&`']|\d\d?)/g;var maybeToString=function maybeToString(it){return it===undefined?it:String(it);};// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace',2,function(defined,REPLACE,$replace,maybeCallNative){return[// `String.prototype.replace` method
// https://tc39.github.io/ecma262/#sec-string.prototype.replace
function replace(searchValue,replaceValue){var O=defined(this);var fn=searchValue==undefined?undefined:searchValue[REPLACE];return fn!==undefined?fn.call(searchValue,O,replaceValue):$replace.call(String(O),searchValue,replaceValue);},// `RegExp.prototype[@@replace]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
function(regexp,replaceValue){var res=maybeCallNative($replace,regexp,this,replaceValue);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);var functionalReplace=typeof replaceValue==='function';if(!functionalReplace)replaceValue=String(replaceValue);var global=rx.global;if(global){var fullUnicode=rx.unicode;rx.lastIndex=0;}var results=[];while(true){var result=regExpExec(rx,S);if(result===null)break;results.push(result);if(!global)break;var matchStr=String(result[0]);if(matchStr==='')rx.lastIndex=advanceStringIndex(S,toLength(rx.lastIndex),fullUnicode);}var accumulatedResult='';var nextSourcePosition=0;for(var i=0;i<results.length;i++){result=results[i];var matched=String(result[0]);var position=max(min(toInteger(result.index),S.length),0);var captures=[];// NOTE: This is equivalent to
//   captures = result.slice(1).map(maybeToString)
// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
for(var j=1;j<result.length;j++){captures.push(maybeToString(result[j]));}var namedCaptures=result.groups;if(functionalReplace){var replacerArgs=[matched].concat(captures,position,S);if(namedCaptures!==undefined)replacerArgs.push(namedCaptures);var replacement=String(replaceValue.apply(undefined,replacerArgs));}else{replacement=getSubstitution(matched,S,position,captures,namedCaptures,replaceValue);}if(position>=nextSourcePosition){accumulatedResult+=S.slice(nextSourcePosition,position)+replacement;nextSourcePosition=position+matched.length;}}return accumulatedResult+S.slice(nextSourcePosition);}];// https://tc39.github.io/ecma262/#sec-getsubstitution
function getSubstitution(matched,str,position,captures,namedCaptures,replacement){var tailPos=position+matched.length;var m=captures.length;var symbols=SUBSTITUTION_SYMBOLS_NO_NAMED;if(namedCaptures!==undefined){namedCaptures=toObject(namedCaptures);symbols=SUBSTITUTION_SYMBOLS;}return $replace.call(replacement,symbols,function(match,ch){var capture;switch(ch.charAt(0)){case'$':return'$';case'&':return matched;case'`':return str.slice(0,position);case"'":return str.slice(tailPos);case'<':capture=namedCaptures[ch.slice(1,-1)];break;default:// \d\d?
var n=+ch;if(n===0)return ch;if(n>m){var f=floor(n/10);if(f===0)return ch;if(f<=m)return captures[f-1]===undefined?ch.charAt(1):captures[f-1]+ch.charAt(1);return ch;}capture=captures[n-1];}return capture===undefined?'':capture;});}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.search.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.search.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var sameValue=__webpack_require__(/*! ./_same-value */ "./node_modules/core-js/modules/_same-value.js");var regExpExec=__webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");// @@search logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('search',1,function(defined,SEARCH,$search,maybeCallNative){return[// `String.prototype.search` method
// https://tc39.github.io/ecma262/#sec-string.prototype.search
function search(regexp){var O=defined(this);var fn=regexp==undefined?undefined:regexp[SEARCH];return fn!==undefined?fn.call(regexp,O):new RegExp(regexp)[SEARCH](String(O));},// `RegExp.prototype[@@search]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
function(regexp){var res=maybeCallNative($search,regexp,this);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);var previousLastIndex=rx.lastIndex;if(!sameValue(previousLastIndex,0))rx.lastIndex=0;var result=regExpExec(rx,S);if(!sameValue(rx.lastIndex,previousLastIndex))rx.lastIndex=previousLastIndex;return result===null?-1:result.index;}];});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var isRegExp=__webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var speciesConstructor=__webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");var advanceStringIndex=__webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var callRegExpExec=__webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");var regexpExec=__webpack_require__(/*! ./_regexp-exec */ "./node_modules/core-js/modules/_regexp-exec.js");var $min=Math.min;var $push=[].push;var $SPLIT='split';var LENGTH='length';var LAST_INDEX='lastIndex';// eslint-disable-next-line no-empty
var SUPPORTS_Y=!!function(){try{return new RegExp('x','y');}catch(e){}}();// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split',2,function(defined,SPLIT,$split,maybeCallNative){var internalSplit=$split;if('abbc'[$SPLIT](/(b)*/)[1]=='c'||'test'[$SPLIT](/(?:)/,-1)[LENGTH]!=4||'ab'[$SPLIT](/(?:ab)*/)[LENGTH]!=2||'.'[$SPLIT](/(.?)(.?)/)[LENGTH]!=4||'.'[$SPLIT](/()()/)[LENGTH]>1||''[$SPLIT](/.?/)[LENGTH]){// based on es5-shim implementation, need to rework it
internalSplit=function internalSplit(separator,limit){var string=String(this);if(separator===undefined&&limit===0)return[];// If `separator` is not a regex, use native split
if(!isRegExp(separator))return $split.call(string,separator,limit);var output=[];var flags=(separator.ignoreCase?'i':'')+(separator.multiline?'m':'')+(separator.unicode?'u':'')+(separator.sticky?'y':'');var lastLastIndex=0;var splitLimit=limit===undefined?4294967295:limit>>>0;// Make `global` and avoid `lastIndex` issues by working with a copy
var separatorCopy=new RegExp(separator.source,flags+'g');var match,lastIndex,lastLength;while(match=regexpExec.call(separatorCopy,string)){lastIndex=separatorCopy[LAST_INDEX];if(lastIndex>lastLastIndex){output.push(string.slice(lastLastIndex,match.index));if(match[LENGTH]>1&&match.index<string[LENGTH])$push.apply(output,match.slice(1));lastLength=match[0][LENGTH];lastLastIndex=lastIndex;if(output[LENGTH]>=splitLimit)break;}if(separatorCopy[LAST_INDEX]===match.index)separatorCopy[LAST_INDEX]++;// Avoid an infinite loop
}if(lastLastIndex===string[LENGTH]){if(lastLength||!separatorCopy.test(''))output.push('');}else output.push(string.slice(lastLastIndex));return output[LENGTH]>splitLimit?output.slice(0,splitLimit):output;};// Chakra, V8
}else if('0'[$SPLIT](undefined,0)[LENGTH]){internalSplit=function internalSplit(separator,limit){return separator===undefined&&limit===0?[]:$split.call(this,separator,limit);};}return[// `String.prototype.split` method
// https://tc39.github.io/ecma262/#sec-string.prototype.split
function split(separator,limit){var O=defined(this);var splitter=separator==undefined?undefined:separator[SPLIT];return splitter!==undefined?splitter.call(separator,O,limit):internalSplit.call(String(O),separator,limit);},// `RegExp.prototype[@@split]` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
//
// NOTE: This cannot be properly polyfilled in engines that don't support
// the 'y' flag.
function(regexp,limit){var res=maybeCallNative(internalSplit,regexp,this,limit,internalSplit!==$split);if(res.done)return res.value;var rx=anObject(regexp);var S=String(this);var C=speciesConstructor(rx,RegExp);var unicodeMatching=rx.unicode;var flags=(rx.ignoreCase?'i':'')+(rx.multiline?'m':'')+(rx.unicode?'u':'')+(SUPPORTS_Y?'y':'g');// ^(? + rx + ) is needed, in combination with some S slicing, to
// simulate the 'y' flag.
var splitter=new C(SUPPORTS_Y?rx:'^(?:'+rx.source+')',flags);var lim=limit===undefined?0xffffffff:limit>>>0;if(lim===0)return[];if(S.length===0)return callRegExpExec(splitter,S)===null?[S]:[];var p=0;var q=0;var A=[];while(q<S.length){splitter.lastIndex=SUPPORTS_Y?q:0;var z=callRegExpExec(splitter,SUPPORTS_Y?S:S.slice(q));var e;if(z===null||(e=$min(toLength(splitter.lastIndex+(SUPPORTS_Y?0:q)),S.length))===p){q=advanceStringIndex(S,q,unicodeMatching);}else{A.push(S.slice(p,q));if(A.length===lim)return A;for(var i=1;i<=z.length-1;i++){A.push(z[i]);if(A.length===lim)return A;}q=p=e;}}A.push(S.slice(p));return A;}];});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var $flags=__webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");var DESCRIPTORS=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");var TO_STRING='toString';var $toString=/./[TO_STRING];var define=function define(fn){__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype,TO_STRING,fn,true);};// 21.2.5.14 RegExp.prototype.toString()
if(__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return $toString.call({source:'a',flags:'b'})!='/a/b';})){define(function toString(){var R=anObject(this);return'/'.concat(R.source,'/','flags'in R?R.flags:!DESCRIPTORS&&R instanceof RegExp?$flags.call(R):undefined);});// FF44- RegExp#toString has a wrong name
}else if($toString.name!=TO_STRING){define(function toString(){return $toString.call(this);});}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var strong=__webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");var validate=__webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");var SET='Set';// 23.2 Set Objects
module.exports=__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET,function(get){return function Set(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.2.3.1 Set.prototype.add(value)
add:function add(value){return strong.def(validate(this,SET),value=value===0?0:value,value);}},strong);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.anchor.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('anchor',function(createHTML){return function anchor(name){return createHTML(this,'a','name',name);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.big.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.big.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.3 String.prototype.big()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('big',function(createHTML){return function big(){return createHTML(this,'big','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.blink.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.blink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.4 String.prototype.blink()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('blink',function(createHTML){return function blink(){return createHTML(this,'blink','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.bold.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.bold.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.5 String.prototype.bold()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('bold',function(createHTML){return function bold(){return createHTML(this,'b','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.code-point-at.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.code-point-at.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $at=__webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(false);$export($export.P,'String',{// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function codePointAt(pos){return $at(this,pos);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.ends-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.ends-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var context=__webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");var ENDS_WITH='endsWith';var $endsWith=''[ENDS_WITH];$export($export.P+$export.F*__webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(ENDS_WITH),'String',{endsWith:function endsWith(searchString/* , endPosition = @length */){var that=context(this,searchString,ENDS_WITH);var endPosition=arguments.length>1?arguments[1]:undefined;var len=toLength(that.length);var end=endPosition===undefined?len:Math.min(toLength(endPosition),len);var search=String(searchString);return $endsWith?$endsWith.call(that,search,end):that.slice(end-search.length,end)===search;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fixed.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fixed.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.6 String.prototype.fixed()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fixed',function(createHTML){return function fixed(){return createHTML(this,'tt','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontcolor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontcolor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontcolor',function(createHTML){return function fontcolor(color){return createHTML(this,'font','color',color);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.fontsize.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.fontsize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('fontsize',function(createHTML){return function fontsize(size){return createHTML(this,'font','size',size);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.from-code-point.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.from-code-point.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");var fromCharCode=String.fromCharCode;var $fromCodePoint=String.fromCodePoint;// length should be 1, old FF problem
$export($export.S+$export.F*(!!$fromCodePoint&&$fromCodePoint.length!=1),'String',{// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function fromCodePoint(x){// eslint-disable-line no-unused-vars
var res=[];var aLen=arguments.length;var i=0;var code;while(aLen>i){code=+arguments[i++];if(toAbsoluteIndex(code,0x10ffff)!==code)throw RangeError(code+' is not a valid code point');res.push(code<0x10000?fromCharCode(code):fromCharCode(((code-=0x10000)>>10)+0xd800,code%0x400+0xdc00));}return res.join('');}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var context=__webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");var INCLUDES='includes';$export($export.P+$export.F*__webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES),'String',{includes:function includes(searchString/* , position = 0 */){return!!~context(this,searchString,INCLUDES).indexOf(searchString,arguments.length>1?arguments[1]:undefined);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.italics.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.italics.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.9 String.prototype.italics()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('italics',function(createHTML){return function italics(){return createHTML(this,'i','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $at=__webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String,'String',function(iterated){this._t=String(iterated);// target
this._i=0;// next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
},function(){var O=this._t;var index=this._i;var point;if(index>=O.length)return{value:undefined,done:true};point=$at(O,index);this._i+=point.length;return{value:point,done:false};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.link.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.10 String.prototype.link(url)
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('link',function(createHTML){return function link(url){return createHTML(this,'a','href',url);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");$export($export.S,'String',{// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function raw(callSite){var tpl=toIObject(callSite.raw);var len=toLength(tpl.length);var aLen=arguments.length;var res=[];var i=0;while(len>i){res.push(String(tpl[i++]));if(i<aLen)res.push(String(arguments[i]));}return res.join('');}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.repeat.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.repeat.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.P,'String',{// 21.1.3.13 String.prototype.repeat(count)
repeat:__webpack_require__(/*! ./_string-repeat */ "./node_modules/core-js/modules/_string-repeat.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.small.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.small.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.11 String.prototype.small()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('small',function(createHTML){return function small(){return createHTML(this,'small','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.starts-with.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.starts-with.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var context=__webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");var STARTS_WITH='startsWith';var $startsWith=''[STARTS_WITH];$export($export.P+$export.F*__webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(STARTS_WITH),'String',{startsWith:function startsWith(searchString/* , position = 0 */){var that=context(this,searchString,STARTS_WITH);var index=toLength(Math.min(arguments.length>1?arguments[1]:undefined,that.length));var search=String(searchString);return $startsWith?$startsWith.call(that,search,index):that.slice(index,index+search.length)===search;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.strike.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.strike.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.12 String.prototype.strike()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('strike',function(createHTML){return function strike(){return createHTML(this,'strike','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sub.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sub.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.13 String.prototype.sub()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sub',function(createHTML){return function sub(){return createHTML(this,'sub','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.sup.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.sup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// B.2.3.14 String.prototype.sup()
__webpack_require__(/*! ./_string-html */ "./node_modules/core-js/modules/_string-html.js")('sup',function(createHTML){return function sup(){return createHTML(this,'sup','','');};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.trim.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.25 String.prototype.trim()
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trim',function($trim){return function trim(){return $trim(this,3);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ECMAScript 6 symbols shim
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var has=__webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");var DESCRIPTORS=__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var META=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;var $fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var shared=__webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");var setToStringTag=__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");var uid=__webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");var wks=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");var wksExt=__webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");var wksDefine=__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");var enumKeys=__webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");var isArray=__webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var createDesc=__webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");var _create=__webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");var gOPNExt=__webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");var $GOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");var $DP=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");var $keys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");var gOPD=$GOPD.f;var dP=$DP.f;var gOPN=gOPNExt.f;var $Symbol=global.Symbol;var $JSON=global.JSON;var _stringify=$JSON&&$JSON.stringify;var PROTOTYPE='prototype';var HIDDEN=wks('_hidden');var TO_PRIMITIVE=wks('toPrimitive');var isEnum={}.propertyIsEnumerable;var SymbolRegistry=shared('symbol-registry');var AllSymbols=shared('symbols');var OPSymbols=shared('op-symbols');var ObjectProto=Object[PROTOTYPE];var USE_NATIVE=typeof $Symbol=='function';var QObject=global.QObject;// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter=!QObject||!QObject[PROTOTYPE]||!QObject[PROTOTYPE].findChild;// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc=DESCRIPTORS&&$fails(function(){return _create(dP({},'a',{get:function get(){return dP(this,'a',{value:7}).a;}})).a!=7;})?function(it,key,D){var protoDesc=gOPD(ObjectProto,key);if(protoDesc)delete ObjectProto[key];dP(it,key,D);if(protoDesc&&it!==ObjectProto)dP(ObjectProto,key,protoDesc);}:dP;var wrap=function wrap(tag){var sym=AllSymbols[tag]=_create($Symbol[PROTOTYPE]);sym._k=tag;return sym;};var isSymbol=USE_NATIVE&&_typeof($Symbol.iterator)=='symbol'?function(it){return _typeof(it)=='symbol';}:function(it){return it instanceof $Symbol;};var $defineProperty=function defineProperty(it,key,D){if(it===ObjectProto)$defineProperty(OPSymbols,key,D);anObject(it);key=toPrimitive(key,true);anObject(D);if(has(AllSymbols,key)){if(!D.enumerable){if(!has(it,HIDDEN))dP(it,HIDDEN,createDesc(1,{}));it[HIDDEN][key]=true;}else{if(has(it,HIDDEN)&&it[HIDDEN][key])it[HIDDEN][key]=false;D=_create(D,{enumerable:createDesc(0,false)});}return setSymbolDesc(it,key,D);}return dP(it,key,D);};var $defineProperties=function defineProperties(it,P){anObject(it);var keys=enumKeys(P=toIObject(P));var i=0;var l=keys.length;var key;while(l>i){$defineProperty(it,key=keys[i++],P[key]);}return it;};var $create=function create(it,P){return P===undefined?_create(it):$defineProperties(_create(it),P);};var $propertyIsEnumerable=function propertyIsEnumerable(key){var E=isEnum.call(this,key=toPrimitive(key,true));if(this===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return false;return E||!has(this,key)||!has(AllSymbols,key)||has(this,HIDDEN)&&this[HIDDEN][key]?E:true;};var $getOwnPropertyDescriptor=function getOwnPropertyDescriptor(it,key){it=toIObject(it);key=toPrimitive(key,true);if(it===ObjectProto&&has(AllSymbols,key)&&!has(OPSymbols,key))return;var D=gOPD(it,key);if(D&&has(AllSymbols,key)&&!(has(it,HIDDEN)&&it[HIDDEN][key]))D.enumerable=true;return D;};var $getOwnPropertyNames=function getOwnPropertyNames(it){var names=gOPN(toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(!has(AllSymbols,key=names[i++])&&key!=HIDDEN&&key!=META)result.push(key);}return result;};var $getOwnPropertySymbols=function getOwnPropertySymbols(it){var IS_OP=it===ObjectProto;var names=gOPN(IS_OP?OPSymbols:toIObject(it));var result=[];var i=0;var key;while(names.length>i){if(has(AllSymbols,key=names[i++])&&(IS_OP?has(ObjectProto,key):true))result.push(AllSymbols[key]);}return result;};// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){$Symbol=function _Symbol(){if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');var tag=uid(arguments.length>0?arguments[0]:undefined);var $set=function $set(value){if(this===ObjectProto)$set.call(OPSymbols,value);if(has(this,HIDDEN)&&has(this[HIDDEN],tag))this[HIDDEN][tag]=false;setSymbolDesc(this,tag,createDesc(1,value));};if(DESCRIPTORS&&setter)setSymbolDesc(ObjectProto,tag,{configurable:true,set:$set});return wrap(tag);};redefine($Symbol[PROTOTYPE],'toString',function toString(){return this._k;});$GOPD.f=$getOwnPropertyDescriptor;$DP.f=$defineProperty;__webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f=gOPNExt.f=$getOwnPropertyNames;__webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f=$propertyIsEnumerable;__webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f=$getOwnPropertySymbols;if(DESCRIPTORS&&!__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")){redefine(ObjectProto,'propertyIsEnumerable',$propertyIsEnumerable,true);}wksExt.f=function(name){return wrap(wks(name));};}$export($export.G+$export.W+$export.F*!USE_NATIVE,{Symbol:$Symbol});for(var es6Symbols=// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),j=0;es6Symbols.length>j;){wks(es6Symbols[j++]);}for(var wellKnownSymbols=$keys(wks.store),k=0;wellKnownSymbols.length>k;){wksDefine(wellKnownSymbols[k++]);}$export($export.S+$export.F*!USE_NATIVE,'Symbol',{// 19.4.2.1 Symbol.for(key)
'for':function _for(key){return has(SymbolRegistry,key+='')?SymbolRegistry[key]:SymbolRegistry[key]=$Symbol(key);},// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function keyFor(sym){if(!isSymbol(sym))throw TypeError(sym+' is not a symbol!');for(var key in SymbolRegistry){if(SymbolRegistry[key]===sym)return key;}},useSetter:function useSetter(){setter=true;},useSimple:function useSimple(){setter=false;}});$export($export.S+$export.F*!USE_NATIVE,'Object',{// 19.1.2.2 Object.create(O [, Properties])
create:$create,// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:$defineProperty,// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:$defineProperties,// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$getOwnPropertyDescriptor,// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:$getOwnPropertyNames,// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:$getOwnPropertySymbols});// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON&&$export($export.S+$export.F*(!USE_NATIVE||$fails(function(){var S=$Symbol();// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return _stringify([S])!='[null]'||_stringify({a:S})!='{}'||_stringify(Object(S))!='{}';})),'JSON',{stringify:function stringify(it){var args=[it];var i=1;var replacer,$replacer;while(arguments.length>i){args.push(arguments[i++]);}$replacer=replacer=args[1];if(!isObject(replacer)&&it===undefined||isSymbol(it))return;// IE8 returns string on undefined
if(!isArray(replacer))replacer=function replacer(key,value){if(typeof $replacer=='function')value=$replacer.call(this,key,value);if(!isSymbol(value))return value;};args[1]=replacer;return _stringify.apply($JSON,args);}});// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE]||__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE],TO_PRIMITIVE,$Symbol[PROTOTYPE].valueOf);// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol,'Symbol');// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math,'Math',true);// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON,'JSON',true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.array-buffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.array-buffer.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $typed=__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js");var buffer=__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toAbsoluteIndex=__webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var ArrayBuffer=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").ArrayBuffer;var speciesConstructor=__webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");var $ArrayBuffer=buffer.ArrayBuffer;var $DataView=buffer.DataView;var $isView=$typed.ABV&&ArrayBuffer.isView;var $slice=$ArrayBuffer.prototype.slice;var VIEW=$typed.VIEW;var ARRAY_BUFFER='ArrayBuffer';$export($export.G+$export.W+$export.F*(ArrayBuffer!==$ArrayBuffer),{ArrayBuffer:$ArrayBuffer});$export($export.S+$export.F*!$typed.CONSTR,ARRAY_BUFFER,{// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function isView(it){return $isView&&$isView(it)||isObject(it)&&VIEW in it;}});$export($export.P+$export.U+$export.F*__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function(){return!new $ArrayBuffer(2).slice(1,undefined).byteLength;}),ARRAY_BUFFER,{// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function slice(start,end){if($slice!==undefined&&end===undefined)return $slice.call(anObject(this),start);// FF fix
var len=anObject(this).byteLength;var first=toAbsoluteIndex(start,len);var fin=toAbsoluteIndex(end===undefined?len:end,len);var result=new(speciesConstructor(this,$ArrayBuffer))(toLength(fin-first));var viewS=new $DataView(this);var viewT=new $DataView(result);var index=0;while(first<fin){viewT.setUint8(index++,viewS.getUint8(first++));}return result;}});__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(ARRAY_BUFFER);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.data-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.data-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.G+$export.W+$export.F*!__webpack_require__(/*! ./_typed */ "./node_modules/core-js/modules/_typed.js").ABV,{DataView:__webpack_require__(/*! ./_typed-buffer */ "./node_modules/core-js/modules/_typed-buffer.js").DataView});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float32-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float32-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float32',4,function(init){return function Float32Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.float64-array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.float64-array.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Float64',8,function(init){return function Float64Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int16-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int16-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int16',2,function(init){return function Int16Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int32-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int32-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int32',4,function(init){return function Int32Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.int8-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.int8-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Int8',1,function(init){return function Int8Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint16-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint16-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint16',2,function(init){return function Uint16Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint32-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint32-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint32',4,function(init){return function Uint32Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-array.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-array.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8',1,function(init){return function Uint8Array(data,byteOffset,length){return init(this,data,byteOffset,length);};});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_typed-array */ "./node_modules/core-js/modules/_typed-array.js")('Uint8',1,function(init){return function Uint8ClampedArray(data,byteOffset,length){return init(this,data,byteOffset,length);};},true);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var each=__webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var meta=__webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");var assign=__webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/modules/_object-assign.js");var weak=__webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");var isObject=__webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");var fails=__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");var validate=__webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");var WEAK_MAP='WeakMap';var getWeak=meta.getWeak;var isExtensible=Object.isExtensible;var uncaughtFrozenStore=weak.ufstore;var tmp={};var InternalMap;var wrapper=function wrapper(get){return function WeakMap(){return get(this,arguments.length>0?arguments[0]:undefined);};};var methods={// 23.3.3.3 WeakMap.prototype.get(key)
get:function get(key){if(isObject(key)){var data=getWeak(key);if(data===true)return uncaughtFrozenStore(validate(this,WEAK_MAP)).get(key);return data?data[this._i]:undefined;}},// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function set(key,value){return weak.def(validate(this,WEAK_MAP),key,value);}};// 23.3 WeakMap Objects
var $WeakMap=module.exports=__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_MAP,wrapper,methods,weak,true,true);// IE11 WeakMap frozen keys fix
if(fails(function(){return new $WeakMap().set((Object.freeze||Object)(tmp),7).get(tmp)!=7;})){InternalMap=weak.getConstructor(wrapper,WEAK_MAP);assign(InternalMap.prototype,methods);meta.NEED=true;each(['delete','has','get','set'],function(key){var proto=$WeakMap.prototype;var method=proto[key];redefine(proto,key,function(a,b){// store frozen objects on internal weakmap shim
if(isObject(a)&&!isExtensible(a)){if(!this._f)this._f=new InternalMap();var result=this._f[key](a,b);return key=='set'?this:result;// store all the rest on native weakmap
}return method.call(this,a,b);});});}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.weak-set.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.weak-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var weak=__webpack_require__(/*! ./_collection-weak */ "./node_modules/core-js/modules/_collection-weak.js");var validate=__webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");var WEAK_SET='WeakSet';// 23.4 WeakSet Objects
__webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(WEAK_SET,function(get){return function WeakSet(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.4.3.1 WeakSet.prototype.add(value)
add:function add(value){return weak.def(validate(this,WEAK_SET),value,true);}},weak,false,true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flat-map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flat-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var flattenIntoArray=__webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var arraySpeciesCreate=__webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");$export($export.P,'Array',{flatMap:function flatMap(callbackfn/* , thisArg */){var O=toObject(this);var sourceLen,A;aFunction(callbackfn);sourceLen=toLength(O.length);A=arraySpeciesCreate(O,0);flattenIntoArray(A,O,O,sourceLen,0,1,callbackfn,arguments[1]);return A;}});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatMap');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.flatten.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.flatten.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var flattenIntoArray=__webpack_require__(/*! ./_flatten-into-array */ "./node_modules/core-js/modules/_flatten-into-array.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var toInteger=__webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");var arraySpeciesCreate=__webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");$export($export.P,'Array',{flatten:function flatten()/* depthArg = 1 */{var depthArg=arguments[0];var O=toObject(this);var sourceLen=toLength(O.length);var A=arraySpeciesCreate(O,0);flattenIntoArray(A,O,O,sourceLen,0,depthArg===undefined?1:toInteger(depthArg));return A;}});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('flatten');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/Array.prototype.includes
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $includes=__webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);$export($export.P,'Array',{includes:function includes(el/* , fromIndex = 0 */){return $includes(this,el,arguments.length>1?arguments[1]:undefined);}});__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.asap.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/es7.asap.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var microtask=__webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();var process=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").process;var isNode=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process)=='process';$export($export.G,{asap:function asap(fn){var domain=isNode&&process.domain;microtask(domain?domain.bind(fn):fn);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.error.is-error.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.error.is-error.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var cof=__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");$export($export.S,'Error',{isError:function isError(it){return cof(it)==='Error';}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.global.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.global.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.G,{global:__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Map');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Map');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.map.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.map.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.P+$export.R,'Map',{toJSON:__webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Map')});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.clamp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.clamp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{clamp:function clamp(x,lower,upper){return Math.min(upper,Math.max(lower,x));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.deg-per-rad.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.deg-per-rad.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{DEG_PER_RAD:Math.PI/180});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.degrees.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.degrees.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var RAD_PER_DEG=180/Math.PI;$export($export.S,'Math',{degrees:function degrees(radians){return radians*RAD_PER_DEG;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.fscale.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.fscale.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var scale=__webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js");var fround=__webpack_require__(/*! ./_math-fround */ "./node_modules/core-js/modules/_math-fround.js");$export($export.S,'Math',{fscale:function fscale(x,inLow,inHigh,outLow,outHigh){return fround(scale(x,inLow,inHigh,outLow,outHigh));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.iaddh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.iaddh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{iaddh:function iaddh(x0,x1,y0,y1){var $x0=x0>>>0;var $x1=x1>>>0;var $y0=y0>>>0;return $x1+(y1>>>0)+(($x0&$y0|($x0|$y0)&~($x0+$y0>>>0))>>>31)|0;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.imulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.imulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{imulh:function imulh(u,v){var UINT16=0xffff;var $u=+u;var $v=+v;var u0=$u&UINT16;var v0=$v&UINT16;var u1=$u>>16;var v1=$v>>16;var t=(u1*v0>>>0)+(u0*v0>>>16);return u1*v1+(t>>16)+((u0*v1>>>0)+(t&UINT16)>>16);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.isubh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.isubh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{isubh:function isubh(x0,x1,y0,y1){var $x0=x0>>>0;var $x1=x1>>>0;var $y0=y0>>>0;return $x1-(y1>>>0)-((~$x0&$y0|~($x0^$y0)&$x0-$y0>>>0)>>>31)|0;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.rad-per-deg.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.rad-per-deg.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{RAD_PER_DEG:180/Math.PI});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.radians.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.radians.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var DEG_PER_RAD=Math.PI/180;$export($export.S,'Math',{radians:function radians(degrees){return degrees*DEG_PER_RAD;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.scale.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.scale.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{scale:__webpack_require__(/*! ./_math-scale */ "./node_modules/core-js/modules/_math-scale.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.signbit.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.signbit.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{signbit:function signbit(x){// eslint-disable-next-line no-self-compare
return(x=+x)!=x?x:x==0?1/x==Infinity:x>0;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.math.umulh.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.math.umulh.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'Math',{umulh:function umulh(u,v){var UINT16=0xffff;var $u=+u;var $v=+v;var u0=$u&UINT16;var v0=$v&UINT16;var u1=$u>>>16;var v1=$v>>>16;var t=(u1*v0>>>0)+(u0*v0>>>16);return u1*v1+(t>>>16)+((u0*v1>>>0)+(t&UINT16)>>>16);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var $defineProperty=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&$export($export.P+__webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"),'Object',{__defineGetter__:function __defineGetter__(P,getter){$defineProperty.f(toObject(this),P,{get:aFunction(getter),enumerable:true,configurable:true});}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.define-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.define-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var $defineProperty=__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&$export($export.P+__webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"),'Object',{__defineSetter__:function __defineSetter__(P,setter){$defineProperty.f(toObject(this),P,{set:aFunction(setter),enumerable:true,configurable:true});}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.entries.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.entries.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $entries=__webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(true);$export($export.S,'Object',{entries:function entries(it){return $entries(it);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var ownKeys=__webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/modules/_own-keys.js");var toIObject=__webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");var gOPD=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");var createProperty=__webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");$export($export.S,'Object',{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){var O=toIObject(object);var getDesc=gOPD.f;var keys=ownKeys(O);var result={};var i=0;var key,desc;while(keys.length>i){desc=getDesc(O,key=keys[i++]);if(desc!==undefined)createProperty(result,key,desc);}return result;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-getter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-getter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var getOwnPropertyDescriptor=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&$export($export.P+__webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"),'Object',{__lookupGetter__:function __lookupGetter__(P){var O=toObject(this);var K=toPrimitive(P,true);var D;do{if(D=getOwnPropertyDescriptor(O,K))return D.get;}while(O=getPrototypeOf(O));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.lookup-setter.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.lookup-setter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var toObject=__webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");var toPrimitive=__webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var getOwnPropertyDescriptor=__webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f;// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js")&&$export($export.P+__webpack_require__(/*! ./_object-forced-pam */ "./node_modules/core-js/modules/_object-forced-pam.js"),'Object',{__lookupSetter__:function __lookupSetter__(P){var O=toObject(this);var K=toPrimitive(P,true);var D;do{if(D=getOwnPropertyDescriptor(O,K))return D.set;}while(O=getPrototypeOf(O));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $values=__webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);$export($export.S,'Object',{values:function values(it){return $values(it);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.observable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.observable.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/zenparsing/es-observable
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var core=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");var microtask=__webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();var OBSERVABLE=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('observable');var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var anInstance=__webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");var redefineAll=__webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var forOf=__webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");var RETURN=forOf.RETURN;var getMethod=function getMethod(fn){return fn==null?undefined:aFunction(fn);};var cleanupSubscription=function cleanupSubscription(subscription){var cleanup=subscription._c;if(cleanup){subscription._c=undefined;cleanup();}};var subscriptionClosed=function subscriptionClosed(subscription){return subscription._o===undefined;};var closeSubscription=function closeSubscription(subscription){if(!subscriptionClosed(subscription)){subscription._o=undefined;cleanupSubscription(subscription);}};var Subscription=function Subscription(observer,subscriber){anObject(observer);this._c=undefined;this._o=observer;observer=new SubscriptionObserver(this);try{var cleanup=subscriber(observer);var subscription=cleanup;if(cleanup!=null){if(typeof cleanup.unsubscribe==='function')cleanup=function cleanup(){subscription.unsubscribe();};else aFunction(cleanup);this._c=cleanup;}}catch(e){observer.error(e);return;}if(subscriptionClosed(this))cleanupSubscription(this);};Subscription.prototype=redefineAll({},{unsubscribe:function unsubscribe(){closeSubscription(this);}});var SubscriptionObserver=function SubscriptionObserver(subscription){this._s=subscription;};SubscriptionObserver.prototype=redefineAll({},{next:function next(value){var subscription=this._s;if(!subscriptionClosed(subscription)){var observer=subscription._o;try{var m=getMethod(observer.next);if(m)return m.call(observer,value);}catch(e){try{closeSubscription(subscription);}finally{throw e;}}}},error:function error(value){var subscription=this._s;if(subscriptionClosed(subscription))throw value;var observer=subscription._o;subscription._o=undefined;try{var m=getMethod(observer.error);if(!m)throw value;value=m.call(observer,value);}catch(e){try{cleanupSubscription(subscription);}finally{throw e;}}cleanupSubscription(subscription);return value;},complete:function complete(value){var subscription=this._s;if(!subscriptionClosed(subscription)){var observer=subscription._o;subscription._o=undefined;try{var m=getMethod(observer.complete);value=m?m.call(observer,value):undefined;}catch(e){try{cleanupSubscription(subscription);}finally{throw e;}}cleanupSubscription(subscription);return value;}}});var $Observable=function Observable(subscriber){anInstance(this,$Observable,'Observable','_f')._f=aFunction(subscriber);};redefineAll($Observable.prototype,{subscribe:function subscribe(observer){return new Subscription(observer,this._f);},forEach:function forEach(fn){var that=this;return new(core.Promise||global.Promise)(function(resolve,reject){aFunction(fn);var subscription=that.subscribe({next:function next(value){try{return fn(value);}catch(e){reject(e);subscription.unsubscribe();}},error:reject,complete:resolve});});}});redefineAll($Observable,{from:function from(x){var C=typeof this==='function'?this:$Observable;var method=getMethod(anObject(x)[OBSERVABLE]);if(method){var observable=anObject(method.call(x));return observable.constructor===C?observable:new C(function(observer){return observable.subscribe(observer);});}return new C(function(observer){var done=false;microtask(function(){if(!done){try{if(forOf(x,false,function(it){observer.next(it);if(done)return RETURN;})===RETURN)return;}catch(e){if(done)throw e;observer.error(e);return;}observer.complete();}});return function(){done=true;};});},of:function of(){for(var i=0,l=arguments.length,items=new Array(l);i<l;){items[i]=arguments[i++];}return new(typeof this==='function'?this:$Observable)(function(observer){var done=false;microtask(function(){if(!done){for(var j=0;j<items.length;++j){observer.next(items[j]);if(done)return;}observer.complete();}});return function(){done=true;};});}});hide($Observable.prototype,OBSERVABLE,function(){return this;});$export($export.G,{Observable:$Observable});__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")('Observable');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var core=__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var speciesConstructor=__webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");var promiseResolve=__webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");$export($export.P+$export.R,'Promise',{'finally':function _finally(onFinally){var C=speciesConstructor(this,core.Promise||global.Promise);var isFunction=typeof onFinally=='function';return this.then(isFunction?function(x){return promiseResolve(C,onFinally()).then(function(){return x;});}:onFinally,isFunction?function(e){return promiseResolve(C,onFinally()).then(function(){throw e;});}:onFinally);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-try
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var newPromiseCapability=__webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");var perform=__webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");$export($export.S,'Promise',{'try':function _try(callbackfn){var promiseCapability=newPromiseCapability.f(this);var result=perform(callbackfn);(result.e?promiseCapability.reject:promiseCapability.resolve)(result.v);return promiseCapability.promise;}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.define-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.define-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toMetaKey=metadata.key;var ordinaryDefineOwnMetadata=metadata.set;metadata.exp({defineMetadata:function defineMetadata(metadataKey,metadataValue,target,targetKey){ordinaryDefineOwnMetadata(metadataKey,metadataValue,anObject(target),toMetaKey(targetKey));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.delete-metadata.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var toMetaKey=metadata.key;var getOrCreateMetadataMap=metadata.map;var store=metadata.store;metadata.exp({deleteMetadata:function deleteMetadata(metadataKey,target/* , targetKey */){var targetKey=arguments.length<3?undefined:toMetaKey(arguments[2]);var metadataMap=getOrCreateMetadataMap(anObject(target),targetKey,false);if(metadataMap===undefined||!metadataMap['delete'](metadataKey))return false;if(metadataMap.size)return true;var targetMetadata=store.get(target);targetMetadata['delete'](targetKey);return!!targetMetadata.size||store['delete'](target);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set=__webpack_require__(/*! ./es6.set */ "./node_modules/core-js/modules/es6.set.js");var from=__webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/modules/_array-from-iterable.js");var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var ordinaryOwnMetadataKeys=metadata.keys;var toMetaKey=metadata.key;var ordinaryMetadataKeys=function ordinaryMetadataKeys(O,P){var oKeys=ordinaryOwnMetadataKeys(O,P);var parent=getPrototypeOf(O);if(parent===null)return oKeys;var pKeys=ordinaryMetadataKeys(parent,P);return pKeys.length?oKeys.length?from(new Set(oKeys.concat(pKeys))):pKeys:oKeys;};metadata.exp({getMetadataKeys:function getMetadataKeys(target/* , targetKey */){return ordinaryMetadataKeys(anObject(target),arguments.length<2?undefined:toMetaKey(arguments[1]));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var ordinaryHasOwnMetadata=metadata.has;var ordinaryGetOwnMetadata=metadata.get;var toMetaKey=metadata.key;var ordinaryGetMetadata=function ordinaryGetMetadata(MetadataKey,O,P){var hasOwn=ordinaryHasOwnMetadata(MetadataKey,O,P);if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey,O,P);var parent=getPrototypeOf(O);return parent!==null?ordinaryGetMetadata(MetadataKey,parent,P):undefined;};metadata.exp({getMetadata:function getMetadata(metadataKey,target/* , targetKey */){return ordinaryGetMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var ordinaryOwnMetadataKeys=metadata.keys;var toMetaKey=metadata.key;metadata.exp({getOwnMetadataKeys:function getOwnMetadataKeys(target/* , targetKey */){return ordinaryOwnMetadataKeys(anObject(target),arguments.length<2?undefined:toMetaKey(arguments[1]));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.get-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var ordinaryGetOwnMetadata=metadata.get;var toMetaKey=metadata.key;metadata.exp({getOwnMetadata:function getOwnMetadata(metadataKey,target/* , targetKey */){return ordinaryGetOwnMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-metadata.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-metadata.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var getPrototypeOf=__webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");var ordinaryHasOwnMetadata=metadata.has;var toMetaKey=metadata.key;var ordinaryHasMetadata=function ordinaryHasMetadata(MetadataKey,O,P){var hasOwn=ordinaryHasOwnMetadata(MetadataKey,O,P);if(hasOwn)return true;var parent=getPrototypeOf(O);return parent!==null?ordinaryHasMetadata(MetadataKey,parent,P):false;};metadata.exp({hasMetadata:function hasMetadata(metadataKey,target/* , targetKey */){return ordinaryHasMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.has-own-metadata.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var ordinaryHasOwnMetadata=metadata.has;var toMetaKey=metadata.key;metadata.exp({hasOwnMetadata:function hasOwnMetadata(metadataKey,target/* , targetKey */){return ordinaryHasOwnMetadata(metadataKey,anObject(target),arguments.length<3?undefined:toMetaKey(arguments[2]));}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.reflect.metadata.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.reflect.metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $metadata=__webpack_require__(/*! ./_metadata */ "./node_modules/core-js/modules/_metadata.js");var anObject=__webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");var aFunction=__webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");var toMetaKey=$metadata.key;var ordinaryDefineOwnMetadata=$metadata.set;$metadata.exp({metadata:function metadata(metadataKey,metadataValue){return function decorator(target,targetKey){ordinaryDefineOwnMetadata(metadataKey,metadataValue,(targetKey!==undefined?anObject:aFunction)(target),toMetaKey(targetKey));};}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('Set');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.of.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('Set');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.set.to-json.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.set.to-json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.P+$export.R,'Set',{toJSON:__webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/modules/_collection-to-json.js")('Set')});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.at.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.at.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $at=__webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);$export($export.P,'String',{at:function at(pos){return $at(this,pos);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.match-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.match-all.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var defined=__webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");var toLength=__webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");var isRegExp=__webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");var getFlags=__webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");var RegExpProto=RegExp.prototype;var $RegExpStringIterator=function $RegExpStringIterator(regexp,string){this._r=regexp;this._s=string;};__webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js")($RegExpStringIterator,'RegExp String',function next(){var match=this._r.exec(this._s);return{value:match,done:match===null};});$export($export.P,'String',{matchAll:function matchAll(regexp){defined(this);if(!isRegExp(regexp))throw TypeError(regexp+' is not a regexp!');var S=String(this);var flags='flags'in RegExpProto?String(regexp.flags):getFlags.call(regexp);var rx=new RegExp(regexp.source,~flags.indexOf('g')?flags:'g'+flags);rx.lastIndex=toLength(regexp.lastIndex);return new $RegExpStringIterator(rx,S);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-end.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-end.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $pad=__webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");var userAgent=__webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");// https://github.com/zloirock/core-js/issues/280
$export($export.P+$export.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent),'String',{padEnd:function padEnd(maxLength/* , fillString = ' ' */){return $pad(this,maxLength,arguments.length>1?arguments[1]:undefined,false);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.pad-start.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.pad-start.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $pad=__webpack_require__(/*! ./_string-pad */ "./node_modules/core-js/modules/_string-pad.js");var userAgent=__webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");// https://github.com/zloirock/core-js/issues/280
$export($export.P+$export.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(userAgent),'String',{padStart:function padStart(maxLength/* , fillString = ' ' */){return $pad(this,maxLength,arguments.length>1?arguments[1]:undefined,true);}});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-left.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-left.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimLeft',function($trim){return function trimLeft(){return $trim(this,1);};},'trimStart');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.string.trim-right.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.string.trim-right.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/modules/_string-trim.js")('trimRight',function($trim){return function trimRight(){return $trim(this,2);};},'trimEnd');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.observable.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.observable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('observable');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.system.global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.system.global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");$export($export.S,'System',{global:__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js")});

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakMap');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-map.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-map.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakMap');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/modules/_set-collection-from.js")('WeakSet');

/***/ }),

/***/ "./node_modules/core-js/modules/es7.weak-set.of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.weak-set.of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/modules/_set-collection-of.js")('WeakSet');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators=__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");var getKeys=__webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");var redefine=__webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var hide=__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");var Iterators=__webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");var wks=__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");var ITERATOR=wks('iterator');var TO_STRING_TAG=wks('toStringTag');var ArrayValues=Iterators.Array;var DOMIterables={CSSRuleList:true,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:false,CSSValueList:false,ClientRectList:false,DOMRectList:false,DOMStringList:false,DOMTokenList:true,DataTransferItemList:false,FileList:false,HTMLAllCollection:false,HTMLCollection:false,HTMLFormElement:false,HTMLSelectElement:false,MediaList:true,// TODO: Not spec compliant, should be false.
MimeTypeArray:false,NamedNodeMap:false,NodeList:true,PaintRequestList:false,Plugin:false,PluginArray:false,SVGLengthList:false,SVGNumberList:false,SVGPathSegList:false,SVGPointList:false,SVGStringList:false,SVGTransformList:false,SourceBufferList:false,StyleSheetList:true,// TODO: Not spec compliant, should be false.
TextTrackCueList:false,TextTrackList:false,TouchList:false};for(var collections=getKeys(DOMIterables),i=0;i<collections.length;i++){var NAME=collections[i];var explicit=DOMIterables[NAME];var Collection=global[NAME];var proto=Collection&&Collection.prototype;var key;if(proto){if(!proto[ITERATOR])hide(proto,ITERATOR,ArrayValues);if(!proto[TO_STRING_TAG])hide(proto,TO_STRING_TAG,NAME);Iterators[NAME]=ArrayValues;if(explicit)for(key in $iterators){if(!proto[key])redefine(proto,key,$iterators[key],true);}}}

/***/ }),

/***/ "./node_modules/core-js/modules/web.immediate.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/web.immediate.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var $task=__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js");$export($export.G+$export.B,{setImmediate:$task.set,clearImmediate:$task.clear});

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global=__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");var $export=__webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");var userAgent=__webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");var slice=[].slice;var MSIE=/MSIE .\./.test(userAgent);// <- dirty ie9- check
var wrap=function wrap(set){return function(fn,time/* , ...args */){var boundArgs=arguments.length>2;var args=boundArgs?slice.call(arguments,2):false;return set(boundArgs?function(){// eslint-disable-next-line no-new-func
(typeof fn=='function'?fn:Function(fn)).apply(this,args);}:fn,time);};};$export($export.G+$export.B+$export.F*MSIE,{setTimeout:wrap(global.setTimeout),setInterval:wrap(global.setInterval)});

/***/ }),

/***/ "./node_modules/core-js/shim.js":
/*!**************************************!*\
  !*** ./node_modules/core-js/shim.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");__webpack_require__(/*! ./modules/es6.object.create */ "./node_modules/core-js/modules/es6.object.create.js");__webpack_require__(/*! ./modules/es6.object.define-property */ "./node_modules/core-js/modules/es6.object.define-property.js");__webpack_require__(/*! ./modules/es6.object.define-properties */ "./node_modules/core-js/modules/es6.object.define-properties.js");__webpack_require__(/*! ./modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.object.get-own-property-descriptor.js");__webpack_require__(/*! ./modules/es6.object.get-prototype-of */ "./node_modules/core-js/modules/es6.object.get-prototype-of.js");__webpack_require__(/*! ./modules/es6.object.keys */ "./node_modules/core-js/modules/es6.object.keys.js");__webpack_require__(/*! ./modules/es6.object.get-own-property-names */ "./node_modules/core-js/modules/es6.object.get-own-property-names.js");__webpack_require__(/*! ./modules/es6.object.freeze */ "./node_modules/core-js/modules/es6.object.freeze.js");__webpack_require__(/*! ./modules/es6.object.seal */ "./node_modules/core-js/modules/es6.object.seal.js");__webpack_require__(/*! ./modules/es6.object.prevent-extensions */ "./node_modules/core-js/modules/es6.object.prevent-extensions.js");__webpack_require__(/*! ./modules/es6.object.is-frozen */ "./node_modules/core-js/modules/es6.object.is-frozen.js");__webpack_require__(/*! ./modules/es6.object.is-sealed */ "./node_modules/core-js/modules/es6.object.is-sealed.js");__webpack_require__(/*! ./modules/es6.object.is-extensible */ "./node_modules/core-js/modules/es6.object.is-extensible.js");__webpack_require__(/*! ./modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");__webpack_require__(/*! ./modules/es6.object.is */ "./node_modules/core-js/modules/es6.object.is.js");__webpack_require__(/*! ./modules/es6.object.set-prototype-of */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");__webpack_require__(/*! ./modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");__webpack_require__(/*! ./modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");__webpack_require__(/*! ./modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");__webpack_require__(/*! ./modules/es6.function.has-instance */ "./node_modules/core-js/modules/es6.function.has-instance.js");__webpack_require__(/*! ./modules/es6.parse-int */ "./node_modules/core-js/modules/es6.parse-int.js");__webpack_require__(/*! ./modules/es6.parse-float */ "./node_modules/core-js/modules/es6.parse-float.js");__webpack_require__(/*! ./modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");__webpack_require__(/*! ./modules/es6.number.to-fixed */ "./node_modules/core-js/modules/es6.number.to-fixed.js");__webpack_require__(/*! ./modules/es6.number.to-precision */ "./node_modules/core-js/modules/es6.number.to-precision.js");__webpack_require__(/*! ./modules/es6.number.epsilon */ "./node_modules/core-js/modules/es6.number.epsilon.js");__webpack_require__(/*! ./modules/es6.number.is-finite */ "./node_modules/core-js/modules/es6.number.is-finite.js");__webpack_require__(/*! ./modules/es6.number.is-integer */ "./node_modules/core-js/modules/es6.number.is-integer.js");__webpack_require__(/*! ./modules/es6.number.is-nan */ "./node_modules/core-js/modules/es6.number.is-nan.js");__webpack_require__(/*! ./modules/es6.number.is-safe-integer */ "./node_modules/core-js/modules/es6.number.is-safe-integer.js");__webpack_require__(/*! ./modules/es6.number.max-safe-integer */ "./node_modules/core-js/modules/es6.number.max-safe-integer.js");__webpack_require__(/*! ./modules/es6.number.min-safe-integer */ "./node_modules/core-js/modules/es6.number.min-safe-integer.js");__webpack_require__(/*! ./modules/es6.number.parse-float */ "./node_modules/core-js/modules/es6.number.parse-float.js");__webpack_require__(/*! ./modules/es6.number.parse-int */ "./node_modules/core-js/modules/es6.number.parse-int.js");__webpack_require__(/*! ./modules/es6.math.acosh */ "./node_modules/core-js/modules/es6.math.acosh.js");__webpack_require__(/*! ./modules/es6.math.asinh */ "./node_modules/core-js/modules/es6.math.asinh.js");__webpack_require__(/*! ./modules/es6.math.atanh */ "./node_modules/core-js/modules/es6.math.atanh.js");__webpack_require__(/*! ./modules/es6.math.cbrt */ "./node_modules/core-js/modules/es6.math.cbrt.js");__webpack_require__(/*! ./modules/es6.math.clz32 */ "./node_modules/core-js/modules/es6.math.clz32.js");__webpack_require__(/*! ./modules/es6.math.cosh */ "./node_modules/core-js/modules/es6.math.cosh.js");__webpack_require__(/*! ./modules/es6.math.expm1 */ "./node_modules/core-js/modules/es6.math.expm1.js");__webpack_require__(/*! ./modules/es6.math.fround */ "./node_modules/core-js/modules/es6.math.fround.js");__webpack_require__(/*! ./modules/es6.math.hypot */ "./node_modules/core-js/modules/es6.math.hypot.js");__webpack_require__(/*! ./modules/es6.math.imul */ "./node_modules/core-js/modules/es6.math.imul.js");__webpack_require__(/*! ./modules/es6.math.log10 */ "./node_modules/core-js/modules/es6.math.log10.js");__webpack_require__(/*! ./modules/es6.math.log1p */ "./node_modules/core-js/modules/es6.math.log1p.js");__webpack_require__(/*! ./modules/es6.math.log2 */ "./node_modules/core-js/modules/es6.math.log2.js");__webpack_require__(/*! ./modules/es6.math.sign */ "./node_modules/core-js/modules/es6.math.sign.js");__webpack_require__(/*! ./modules/es6.math.sinh */ "./node_modules/core-js/modules/es6.math.sinh.js");__webpack_require__(/*! ./modules/es6.math.tanh */ "./node_modules/core-js/modules/es6.math.tanh.js");__webpack_require__(/*! ./modules/es6.math.trunc */ "./node_modules/core-js/modules/es6.math.trunc.js");__webpack_require__(/*! ./modules/es6.string.from-code-point */ "./node_modules/core-js/modules/es6.string.from-code-point.js");__webpack_require__(/*! ./modules/es6.string.raw */ "./node_modules/core-js/modules/es6.string.raw.js");__webpack_require__(/*! ./modules/es6.string.trim */ "./node_modules/core-js/modules/es6.string.trim.js");__webpack_require__(/*! ./modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");__webpack_require__(/*! ./modules/es6.string.code-point-at */ "./node_modules/core-js/modules/es6.string.code-point-at.js");__webpack_require__(/*! ./modules/es6.string.ends-with */ "./node_modules/core-js/modules/es6.string.ends-with.js");__webpack_require__(/*! ./modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");__webpack_require__(/*! ./modules/es6.string.repeat */ "./node_modules/core-js/modules/es6.string.repeat.js");__webpack_require__(/*! ./modules/es6.string.starts-with */ "./node_modules/core-js/modules/es6.string.starts-with.js");__webpack_require__(/*! ./modules/es6.string.anchor */ "./node_modules/core-js/modules/es6.string.anchor.js");__webpack_require__(/*! ./modules/es6.string.big */ "./node_modules/core-js/modules/es6.string.big.js");__webpack_require__(/*! ./modules/es6.string.blink */ "./node_modules/core-js/modules/es6.string.blink.js");__webpack_require__(/*! ./modules/es6.string.bold */ "./node_modules/core-js/modules/es6.string.bold.js");__webpack_require__(/*! ./modules/es6.string.fixed */ "./node_modules/core-js/modules/es6.string.fixed.js");__webpack_require__(/*! ./modules/es6.string.fontcolor */ "./node_modules/core-js/modules/es6.string.fontcolor.js");__webpack_require__(/*! ./modules/es6.string.fontsize */ "./node_modules/core-js/modules/es6.string.fontsize.js");__webpack_require__(/*! ./modules/es6.string.italics */ "./node_modules/core-js/modules/es6.string.italics.js");__webpack_require__(/*! ./modules/es6.string.link */ "./node_modules/core-js/modules/es6.string.link.js");__webpack_require__(/*! ./modules/es6.string.small */ "./node_modules/core-js/modules/es6.string.small.js");__webpack_require__(/*! ./modules/es6.string.strike */ "./node_modules/core-js/modules/es6.string.strike.js");__webpack_require__(/*! ./modules/es6.string.sub */ "./node_modules/core-js/modules/es6.string.sub.js");__webpack_require__(/*! ./modules/es6.string.sup */ "./node_modules/core-js/modules/es6.string.sup.js");__webpack_require__(/*! ./modules/es6.date.now */ "./node_modules/core-js/modules/es6.date.now.js");__webpack_require__(/*! ./modules/es6.date.to-json */ "./node_modules/core-js/modules/es6.date.to-json.js");__webpack_require__(/*! ./modules/es6.date.to-iso-string */ "./node_modules/core-js/modules/es6.date.to-iso-string.js");__webpack_require__(/*! ./modules/es6.date.to-string */ "./node_modules/core-js/modules/es6.date.to-string.js");__webpack_require__(/*! ./modules/es6.date.to-primitive */ "./node_modules/core-js/modules/es6.date.to-primitive.js");__webpack_require__(/*! ./modules/es6.array.is-array */ "./node_modules/core-js/modules/es6.array.is-array.js");__webpack_require__(/*! ./modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");__webpack_require__(/*! ./modules/es6.array.of */ "./node_modules/core-js/modules/es6.array.of.js");__webpack_require__(/*! ./modules/es6.array.join */ "./node_modules/core-js/modules/es6.array.join.js");__webpack_require__(/*! ./modules/es6.array.slice */ "./node_modules/core-js/modules/es6.array.slice.js");__webpack_require__(/*! ./modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");__webpack_require__(/*! ./modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");__webpack_require__(/*! ./modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");__webpack_require__(/*! ./modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");__webpack_require__(/*! ./modules/es6.array.some */ "./node_modules/core-js/modules/es6.array.some.js");__webpack_require__(/*! ./modules/es6.array.every */ "./node_modules/core-js/modules/es6.array.every.js");__webpack_require__(/*! ./modules/es6.array.reduce */ "./node_modules/core-js/modules/es6.array.reduce.js");__webpack_require__(/*! ./modules/es6.array.reduce-right */ "./node_modules/core-js/modules/es6.array.reduce-right.js");__webpack_require__(/*! ./modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");__webpack_require__(/*! ./modules/es6.array.last-index-of */ "./node_modules/core-js/modules/es6.array.last-index-of.js");__webpack_require__(/*! ./modules/es6.array.copy-within */ "./node_modules/core-js/modules/es6.array.copy-within.js");__webpack_require__(/*! ./modules/es6.array.fill */ "./node_modules/core-js/modules/es6.array.fill.js");__webpack_require__(/*! ./modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");__webpack_require__(/*! ./modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");__webpack_require__(/*! ./modules/es6.array.species */ "./node_modules/core-js/modules/es6.array.species.js");__webpack_require__(/*! ./modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");__webpack_require__(/*! ./modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");__webpack_require__(/*! ./modules/es6.regexp.exec */ "./node_modules/core-js/modules/es6.regexp.exec.js");__webpack_require__(/*! ./modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");__webpack_require__(/*! ./modules/es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");__webpack_require__(/*! ./modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");__webpack_require__(/*! ./modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");__webpack_require__(/*! ./modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");__webpack_require__(/*! ./modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");__webpack_require__(/*! ./modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");__webpack_require__(/*! ./modules/es6.map */ "./node_modules/core-js/modules/es6.map.js");__webpack_require__(/*! ./modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");__webpack_require__(/*! ./modules/es6.weak-map */ "./node_modules/core-js/modules/es6.weak-map.js");__webpack_require__(/*! ./modules/es6.weak-set */ "./node_modules/core-js/modules/es6.weak-set.js");__webpack_require__(/*! ./modules/es6.typed.array-buffer */ "./node_modules/core-js/modules/es6.typed.array-buffer.js");__webpack_require__(/*! ./modules/es6.typed.data-view */ "./node_modules/core-js/modules/es6.typed.data-view.js");__webpack_require__(/*! ./modules/es6.typed.int8-array */ "./node_modules/core-js/modules/es6.typed.int8-array.js");__webpack_require__(/*! ./modules/es6.typed.uint8-array */ "./node_modules/core-js/modules/es6.typed.uint8-array.js");__webpack_require__(/*! ./modules/es6.typed.uint8-clamped-array */ "./node_modules/core-js/modules/es6.typed.uint8-clamped-array.js");__webpack_require__(/*! ./modules/es6.typed.int16-array */ "./node_modules/core-js/modules/es6.typed.int16-array.js");__webpack_require__(/*! ./modules/es6.typed.uint16-array */ "./node_modules/core-js/modules/es6.typed.uint16-array.js");__webpack_require__(/*! ./modules/es6.typed.int32-array */ "./node_modules/core-js/modules/es6.typed.int32-array.js");__webpack_require__(/*! ./modules/es6.typed.uint32-array */ "./node_modules/core-js/modules/es6.typed.uint32-array.js");__webpack_require__(/*! ./modules/es6.typed.float32-array */ "./node_modules/core-js/modules/es6.typed.float32-array.js");__webpack_require__(/*! ./modules/es6.typed.float64-array */ "./node_modules/core-js/modules/es6.typed.float64-array.js");__webpack_require__(/*! ./modules/es6.reflect.apply */ "./node_modules/core-js/modules/es6.reflect.apply.js");__webpack_require__(/*! ./modules/es6.reflect.construct */ "./node_modules/core-js/modules/es6.reflect.construct.js");__webpack_require__(/*! ./modules/es6.reflect.define-property */ "./node_modules/core-js/modules/es6.reflect.define-property.js");__webpack_require__(/*! ./modules/es6.reflect.delete-property */ "./node_modules/core-js/modules/es6.reflect.delete-property.js");__webpack_require__(/*! ./modules/es6.reflect.enumerate */ "./node_modules/core-js/modules/es6.reflect.enumerate.js");__webpack_require__(/*! ./modules/es6.reflect.get */ "./node_modules/core-js/modules/es6.reflect.get.js");__webpack_require__(/*! ./modules/es6.reflect.get-own-property-descriptor */ "./node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js");__webpack_require__(/*! ./modules/es6.reflect.get-prototype-of */ "./node_modules/core-js/modules/es6.reflect.get-prototype-of.js");__webpack_require__(/*! ./modules/es6.reflect.has */ "./node_modules/core-js/modules/es6.reflect.has.js");__webpack_require__(/*! ./modules/es6.reflect.is-extensible */ "./node_modules/core-js/modules/es6.reflect.is-extensible.js");__webpack_require__(/*! ./modules/es6.reflect.own-keys */ "./node_modules/core-js/modules/es6.reflect.own-keys.js");__webpack_require__(/*! ./modules/es6.reflect.prevent-extensions */ "./node_modules/core-js/modules/es6.reflect.prevent-extensions.js");__webpack_require__(/*! ./modules/es6.reflect.set */ "./node_modules/core-js/modules/es6.reflect.set.js");__webpack_require__(/*! ./modules/es6.reflect.set-prototype-of */ "./node_modules/core-js/modules/es6.reflect.set-prototype-of.js");__webpack_require__(/*! ./modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");__webpack_require__(/*! ./modules/es7.array.flat-map */ "./node_modules/core-js/modules/es7.array.flat-map.js");__webpack_require__(/*! ./modules/es7.array.flatten */ "./node_modules/core-js/modules/es7.array.flatten.js");__webpack_require__(/*! ./modules/es7.string.at */ "./node_modules/core-js/modules/es7.string.at.js");__webpack_require__(/*! ./modules/es7.string.pad-start */ "./node_modules/core-js/modules/es7.string.pad-start.js");__webpack_require__(/*! ./modules/es7.string.pad-end */ "./node_modules/core-js/modules/es7.string.pad-end.js");__webpack_require__(/*! ./modules/es7.string.trim-left */ "./node_modules/core-js/modules/es7.string.trim-left.js");__webpack_require__(/*! ./modules/es7.string.trim-right */ "./node_modules/core-js/modules/es7.string.trim-right.js");__webpack_require__(/*! ./modules/es7.string.match-all */ "./node_modules/core-js/modules/es7.string.match-all.js");__webpack_require__(/*! ./modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");__webpack_require__(/*! ./modules/es7.symbol.observable */ "./node_modules/core-js/modules/es7.symbol.observable.js");__webpack_require__(/*! ./modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js");__webpack_require__(/*! ./modules/es7.object.values */ "./node_modules/core-js/modules/es7.object.values.js");__webpack_require__(/*! ./modules/es7.object.entries */ "./node_modules/core-js/modules/es7.object.entries.js");__webpack_require__(/*! ./modules/es7.object.define-getter */ "./node_modules/core-js/modules/es7.object.define-getter.js");__webpack_require__(/*! ./modules/es7.object.define-setter */ "./node_modules/core-js/modules/es7.object.define-setter.js");__webpack_require__(/*! ./modules/es7.object.lookup-getter */ "./node_modules/core-js/modules/es7.object.lookup-getter.js");__webpack_require__(/*! ./modules/es7.object.lookup-setter */ "./node_modules/core-js/modules/es7.object.lookup-setter.js");__webpack_require__(/*! ./modules/es7.map.to-json */ "./node_modules/core-js/modules/es7.map.to-json.js");__webpack_require__(/*! ./modules/es7.set.to-json */ "./node_modules/core-js/modules/es7.set.to-json.js");__webpack_require__(/*! ./modules/es7.map.of */ "./node_modules/core-js/modules/es7.map.of.js");__webpack_require__(/*! ./modules/es7.set.of */ "./node_modules/core-js/modules/es7.set.of.js");__webpack_require__(/*! ./modules/es7.weak-map.of */ "./node_modules/core-js/modules/es7.weak-map.of.js");__webpack_require__(/*! ./modules/es7.weak-set.of */ "./node_modules/core-js/modules/es7.weak-set.of.js");__webpack_require__(/*! ./modules/es7.map.from */ "./node_modules/core-js/modules/es7.map.from.js");__webpack_require__(/*! ./modules/es7.set.from */ "./node_modules/core-js/modules/es7.set.from.js");__webpack_require__(/*! ./modules/es7.weak-map.from */ "./node_modules/core-js/modules/es7.weak-map.from.js");__webpack_require__(/*! ./modules/es7.weak-set.from */ "./node_modules/core-js/modules/es7.weak-set.from.js");__webpack_require__(/*! ./modules/es7.global */ "./node_modules/core-js/modules/es7.global.js");__webpack_require__(/*! ./modules/es7.system.global */ "./node_modules/core-js/modules/es7.system.global.js");__webpack_require__(/*! ./modules/es7.error.is-error */ "./node_modules/core-js/modules/es7.error.is-error.js");__webpack_require__(/*! ./modules/es7.math.clamp */ "./node_modules/core-js/modules/es7.math.clamp.js");__webpack_require__(/*! ./modules/es7.math.deg-per-rad */ "./node_modules/core-js/modules/es7.math.deg-per-rad.js");__webpack_require__(/*! ./modules/es7.math.degrees */ "./node_modules/core-js/modules/es7.math.degrees.js");__webpack_require__(/*! ./modules/es7.math.fscale */ "./node_modules/core-js/modules/es7.math.fscale.js");__webpack_require__(/*! ./modules/es7.math.iaddh */ "./node_modules/core-js/modules/es7.math.iaddh.js");__webpack_require__(/*! ./modules/es7.math.isubh */ "./node_modules/core-js/modules/es7.math.isubh.js");__webpack_require__(/*! ./modules/es7.math.imulh */ "./node_modules/core-js/modules/es7.math.imulh.js");__webpack_require__(/*! ./modules/es7.math.rad-per-deg */ "./node_modules/core-js/modules/es7.math.rad-per-deg.js");__webpack_require__(/*! ./modules/es7.math.radians */ "./node_modules/core-js/modules/es7.math.radians.js");__webpack_require__(/*! ./modules/es7.math.scale */ "./node_modules/core-js/modules/es7.math.scale.js");__webpack_require__(/*! ./modules/es7.math.umulh */ "./node_modules/core-js/modules/es7.math.umulh.js");__webpack_require__(/*! ./modules/es7.math.signbit */ "./node_modules/core-js/modules/es7.math.signbit.js");__webpack_require__(/*! ./modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");__webpack_require__(/*! ./modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");__webpack_require__(/*! ./modules/es7.reflect.define-metadata */ "./node_modules/core-js/modules/es7.reflect.define-metadata.js");__webpack_require__(/*! ./modules/es7.reflect.delete-metadata */ "./node_modules/core-js/modules/es7.reflect.delete-metadata.js");__webpack_require__(/*! ./modules/es7.reflect.get-metadata */ "./node_modules/core-js/modules/es7.reflect.get-metadata.js");__webpack_require__(/*! ./modules/es7.reflect.get-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-metadata-keys.js");__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata.js");__webpack_require__(/*! ./modules/es7.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js");__webpack_require__(/*! ./modules/es7.reflect.has-metadata */ "./node_modules/core-js/modules/es7.reflect.has-metadata.js");__webpack_require__(/*! ./modules/es7.reflect.has-own-metadata */ "./node_modules/core-js/modules/es7.reflect.has-own-metadata.js");__webpack_require__(/*! ./modules/es7.reflect.metadata */ "./node_modules/core-js/modules/es7.reflect.metadata.js");__webpack_require__(/*! ./modules/es7.asap */ "./node_modules/core-js/modules/es7.asap.js");__webpack_require__(/*! ./modules/es7.observable */ "./node_modules/core-js/modules/es7.observable.js");__webpack_require__(/*! ./modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");__webpack_require__(/*! ./modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");__webpack_require__(/*! ./modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");module.exports=__webpack_require__(/*! ./modules/_core */ "./node_modules/core-js/modules/_core.js");

/***/ }),

/***/ "./node_modules/eventemitter2/lib/eventemitter2.js":
/*!*********************************************************!*\
  !*** ./node_modules/eventemitter2/lib/eventemitter2.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */;!function(undefined){var isArray=Array.isArray?Array.isArray:function _isArray(obj){return Object.prototype.toString.call(obj)==="[object Array]";};var defaultMaxListeners=10;function init(){this._events={};if(this._conf){configure.call(this,this._conf);}}function configure(conf){if(conf){this._conf=conf;conf.delimiter&&(this.delimiter=conf.delimiter);this._maxListeners=conf.maxListeners!==undefined?conf.maxListeners:defaultMaxListeners;conf.wildcard&&(this.wildcard=conf.wildcard);conf.newListener&&(this._newListener=conf.newListener);conf.removeListener&&(this._removeListener=conf.removeListener);conf.verboseMemoryLeak&&(this.verboseMemoryLeak=conf.verboseMemoryLeak);if(this.wildcard){this.listenerTree={};}}else{this._maxListeners=defaultMaxListeners;}}function logPossibleMemoryLeak(count,eventName){var errorMsg='(node) warning: possible EventEmitter memory '+'leak detected. '+count+' listeners added. '+'Use emitter.setMaxListeners() to increase limit.';if(this.verboseMemoryLeak){errorMsg+=' Event name: '+eventName+'.';}if(typeof process!=='undefined'&&process.emitWarning){var e=new Error(errorMsg);e.name='MaxListenersExceededWarning';e.emitter=this;e.count=count;process.emitWarning(e);}else{console.error(errorMsg);if(console.trace){console.trace();}}}function EventEmitter(conf){this._events={};this._newListener=false;this._removeListener=false;this.verboseMemoryLeak=false;configure.call(this,conf);}EventEmitter.EventEmitter2=EventEmitter;// backwards compatibility for exporting EventEmitter property
//
// Attention, function return type now is array, always !
// It has zero elements if no any matches found and one or more
// elements (leafs) if there are matches
//
function searchListenerTree(handlers,type,tree,i){if(!tree){return[];}var listeners=[],leaf,len,branch,xTree,xxTree,isolatedBranch,endReached,typeLength=type.length,currentType=type[i],nextType=type[i+1];if(i===typeLength&&tree._listeners){//
// If at the end of the event(s) list and the tree has listeners
// invoke those listeners.
//
if(typeof tree._listeners==='function'){handlers&&handlers.push(tree._listeners);return[tree];}else{for(leaf=0,len=tree._listeners.length;leaf<len;leaf++){handlers&&handlers.push(tree._listeners[leaf]);}return[tree];}}if(currentType==='*'||currentType==='**'||tree[currentType]){//
// If the event emitted is '*' at this part
// or there is a concrete match at this patch
//
if(currentType==='*'){for(branch in tree){if(branch!=='_listeners'&&tree.hasOwnProperty(branch)){listeners=listeners.concat(searchListenerTree(handlers,type,tree[branch],i+1));}}return listeners;}else if(currentType==='**'){endReached=i+1===typeLength||i+2===typeLength&&nextType==='*';if(endReached&&tree._listeners){// The next element has a _listeners, add it to the handlers.
listeners=listeners.concat(searchListenerTree(handlers,type,tree,typeLength));}for(branch in tree){if(branch!=='_listeners'&&tree.hasOwnProperty(branch)){if(branch==='*'||branch==='**'){if(tree[branch]._listeners&&!endReached){listeners=listeners.concat(searchListenerTree(handlers,type,tree[branch],typeLength));}listeners=listeners.concat(searchListenerTree(handlers,type,tree[branch],i));}else if(branch===nextType){listeners=listeners.concat(searchListenerTree(handlers,type,tree[branch],i+2));}else{// No match on this one, shift into the tree but not in the type array.
listeners=listeners.concat(searchListenerTree(handlers,type,tree[branch],i));}}}return listeners;}listeners=listeners.concat(searchListenerTree(handlers,type,tree[currentType],i+1));}xTree=tree['*'];if(xTree){//
// If the listener tree will allow any match for this part,
// then recursively explore all branches of the tree
//
searchListenerTree(handlers,type,xTree,i+1);}xxTree=tree['**'];if(xxTree){if(i<typeLength){if(xxTree._listeners){// If we have a listener on a '**', it will catch all, so add its handler.
searchListenerTree(handlers,type,xxTree,typeLength);}// Build arrays of matching next branches and others.
for(branch in xxTree){if(branch!=='_listeners'&&xxTree.hasOwnProperty(branch)){if(branch===nextType){// We know the next element will match, so jump twice.
searchListenerTree(handlers,type,xxTree[branch],i+2);}else if(branch===currentType){// Current node matches, move into the tree.
searchListenerTree(handlers,type,xxTree[branch],i+1);}else{isolatedBranch={};isolatedBranch[branch]=xxTree[branch];searchListenerTree(handlers,type,{'**':isolatedBranch},i+1);}}}}else if(xxTree._listeners){// We have reached the end and still on a '**'
searchListenerTree(handlers,type,xxTree,typeLength);}else if(xxTree['*']&&xxTree['*']._listeners){searchListenerTree(handlers,type,xxTree['*'],typeLength);}}return listeners;}function growListenerTree(type,listener){type=typeof type==='string'?type.split(this.delimiter):type.slice();//
// Looks for two consecutive '**', if so, don't add the event at all.
//
for(var i=0,len=type.length;i+1<len;i++){if(type[i]==='**'&&type[i+1]==='**'){return;}}var tree=this.listenerTree;var name=type.shift();while(name!==undefined){if(!tree[name]){tree[name]={};}tree=tree[name];if(type.length===0){if(!tree._listeners){tree._listeners=listener;}else{if(typeof tree._listeners==='function'){tree._listeners=[tree._listeners];}tree._listeners.push(listener);if(!tree._listeners.warned&&this._maxListeners>0&&tree._listeners.length>this._maxListeners){tree._listeners.warned=true;logPossibleMemoryLeak.call(this,tree._listeners.length,name);}}return true;}name=type.shift();}return true;}// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.delimiter='.';EventEmitter.prototype.setMaxListeners=function(n){if(n!==undefined){this._maxListeners=n;if(!this._conf)this._conf={};this._conf.maxListeners=n;}};EventEmitter.prototype.event='';EventEmitter.prototype.once=function(event,fn){return this._once(event,fn,false);};EventEmitter.prototype.prependOnceListener=function(event,fn){return this._once(event,fn,true);};EventEmitter.prototype._once=function(event,fn,prepend){this._many(event,1,fn,prepend);return this;};EventEmitter.prototype.many=function(event,ttl,fn){return this._many(event,ttl,fn,false);};EventEmitter.prototype.prependMany=function(event,ttl,fn){return this._many(event,ttl,fn,true);};EventEmitter.prototype._many=function(event,ttl,fn,prepend){var self=this;if(typeof fn!=='function'){throw new Error('many only accepts instances of Function');}function listener(){if(--ttl===0){self.off(event,listener);}return fn.apply(this,arguments);}listener._origin=fn;this._on(event,listener,prepend);return self;};EventEmitter.prototype.emit=function(){this._events||init.call(this);var type=arguments[0];if(type==='newListener'&&!this._newListener){if(!this._events.newListener){return false;}}var al=arguments.length;var args,l,i,j;var handler;if(this._all&&this._all.length){handler=this._all.slice();if(al>3){args=new Array(al);for(j=0;j<al;j++){args[j]=arguments[j];}}for(i=0,l=handler.length;i<l;i++){this.event=type;switch(al){case 1:handler[i].call(this,type);break;case 2:handler[i].call(this,type,arguments[1]);break;case 3:handler[i].call(this,type,arguments[1],arguments[2]);break;default:handler[i].apply(this,args);}}}if(this.wildcard){handler=[];var ns=typeof type==='string'?type.split(this.delimiter):type.slice();searchListenerTree.call(this,handler,ns,this.listenerTree,0);}else{handler=this._events[type];if(typeof handler==='function'){this.event=type;switch(al){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:args=new Array(al-1);for(j=1;j<al;j++){args[j-1]=arguments[j];}handler.apply(this,args);}return true;}else if(handler){// need to make copy of handlers because list can change in the middle
// of emit call
handler=handler.slice();}}if(handler&&handler.length){if(al>3){args=new Array(al-1);for(j=1;j<al;j++){args[j-1]=arguments[j];}}for(i=0,l=handler.length;i<l;i++){this.event=type;switch(al){case 1:handler[i].call(this);break;case 2:handler[i].call(this,arguments[1]);break;case 3:handler[i].call(this,arguments[1],arguments[2]);break;default:handler[i].apply(this,args);}}return true;}else if(!this._all&&type==='error'){if(arguments[1]instanceof Error){throw arguments[1];// Unhandled 'error' event
}else{throw new Error("Uncaught, unspecified 'error' event.");}return false;}return!!this._all;};EventEmitter.prototype.emitAsync=function(){this._events||init.call(this);var type=arguments[0];if(type==='newListener'&&!this._newListener){if(!this._events.newListener){return Promise.resolve([false]);}}var promises=[];var al=arguments.length;var args,l,i,j;var handler;if(this._all){if(al>3){args=new Array(al);for(j=1;j<al;j++){args[j]=arguments[j];}}for(i=0,l=this._all.length;i<l;i++){this.event=type;switch(al){case 1:promises.push(this._all[i].call(this,type));break;case 2:promises.push(this._all[i].call(this,type,arguments[1]));break;case 3:promises.push(this._all[i].call(this,type,arguments[1],arguments[2]));break;default:promises.push(this._all[i].apply(this,args));}}}if(this.wildcard){handler=[];var ns=typeof type==='string'?type.split(this.delimiter):type.slice();searchListenerTree.call(this,handler,ns,this.listenerTree,0);}else{handler=this._events[type];}if(typeof handler==='function'){this.event=type;switch(al){case 1:promises.push(handler.call(this));break;case 2:promises.push(handler.call(this,arguments[1]));break;case 3:promises.push(handler.call(this,arguments[1],arguments[2]));break;default:args=new Array(al-1);for(j=1;j<al;j++){args[j-1]=arguments[j];}promises.push(handler.apply(this,args));}}else if(handler&&handler.length){handler=handler.slice();if(al>3){args=new Array(al-1);for(j=1;j<al;j++){args[j-1]=arguments[j];}}for(i=0,l=handler.length;i<l;i++){this.event=type;switch(al){case 1:promises.push(handler[i].call(this));break;case 2:promises.push(handler[i].call(this,arguments[1]));break;case 3:promises.push(handler[i].call(this,arguments[1],arguments[2]));break;default:promises.push(handler[i].apply(this,args));}}}else if(!this._all&&type==='error'){if(arguments[1]instanceof Error){return Promise.reject(arguments[1]);// Unhandled 'error' event
}else{return Promise.reject("Uncaught, unspecified 'error' event.");}}return Promise.all(promises);};EventEmitter.prototype.on=function(type,listener){return this._on(type,listener,false);};EventEmitter.prototype.prependListener=function(type,listener){return this._on(type,listener,true);};EventEmitter.prototype.onAny=function(fn){return this._onAny(fn,false);};EventEmitter.prototype.prependAny=function(fn){return this._onAny(fn,true);};EventEmitter.prototype.addListener=EventEmitter.prototype.on;EventEmitter.prototype._onAny=function(fn,prepend){if(typeof fn!=='function'){throw new Error('onAny only accepts instances of Function');}if(!this._all){this._all=[];}// Add the function to the event listener collection.
if(prepend){this._all.unshift(fn);}else{this._all.push(fn);}return this;};EventEmitter.prototype._on=function(type,listener,prepend){if(typeof type==='function'){this._onAny(type,listener);return this;}if(typeof listener!=='function'){throw new Error('on only accepts instances of Function');}this._events||init.call(this);// To avoid recursion in the case that type == "newListeners"! Before
// adding it to the listeners, first emit "newListeners".
if(this._newListener)this.emit('newListener',type,listener);if(this.wildcard){growListenerTree.call(this,type,listener);return this;}if(!this._events[type]){// Optimize the case of one listener. Don't need the extra array object.
this._events[type]=listener;}else{if(typeof this._events[type]==='function'){// Change to array.
this._events[type]=[this._events[type]];}// If we've already got an array, just add
if(prepend){this._events[type].unshift(listener);}else{this._events[type].push(listener);}// Check for listener leak
if(!this._events[type].warned&&this._maxListeners>0&&this._events[type].length>this._maxListeners){this._events[type].warned=true;logPossibleMemoryLeak.call(this,this._events[type].length,type);}}return this;};EventEmitter.prototype.off=function(type,listener){if(typeof listener!=='function'){throw new Error('removeListener only takes instances of Function');}var handlers,leafs=[];if(this.wildcard){var ns=typeof type==='string'?type.split(this.delimiter):type.slice();leafs=searchListenerTree.call(this,null,ns,this.listenerTree,0);}else{// does not use listeners(), so no side effect of creating _events[type]
if(!this._events[type])return this;handlers=this._events[type];leafs.push({_listeners:handlers});}for(var iLeaf=0;iLeaf<leafs.length;iLeaf++){var leaf=leafs[iLeaf];handlers=leaf._listeners;if(isArray(handlers)){var position=-1;for(var i=0,length=handlers.length;i<length;i++){if(handlers[i]===listener||handlers[i].listener&&handlers[i].listener===listener||handlers[i]._origin&&handlers[i]._origin===listener){position=i;break;}}if(position<0){continue;}if(this.wildcard){leaf._listeners.splice(position,1);}else{this._events[type].splice(position,1);}if(handlers.length===0){if(this.wildcard){delete leaf._listeners;}else{delete this._events[type];}}if(this._removeListener)this.emit("removeListener",type,listener);return this;}else if(handlers===listener||handlers.listener&&handlers.listener===listener||handlers._origin&&handlers._origin===listener){if(this.wildcard){delete leaf._listeners;}else{delete this._events[type];}if(this._removeListener)this.emit("removeListener",type,listener);}}function recursivelyGarbageCollect(root){if(root===undefined){return;}var keys=Object.keys(root);for(var i in keys){var key=keys[i];var obj=root[key];if(obj instanceof Function||_typeof(obj)!=="object"||obj===null)continue;if(Object.keys(obj).length>0){recursivelyGarbageCollect(root[key]);}if(Object.keys(obj).length===0){delete root[key];}}}recursivelyGarbageCollect(this.listenerTree);return this;};EventEmitter.prototype.offAny=function(fn){var i=0,l=0,fns;if(fn&&this._all&&this._all.length>0){fns=this._all;for(i=0,l=fns.length;i<l;i++){if(fn===fns[i]){fns.splice(i,1);if(this._removeListener)this.emit("removeListenerAny",fn);return this;}}}else{fns=this._all;if(this._removeListener){for(i=0,l=fns.length;i<l;i++){this.emit("removeListenerAny",fns[i]);}}this._all=[];}return this;};EventEmitter.prototype.removeListener=EventEmitter.prototype.off;EventEmitter.prototype.removeAllListeners=function(type){if(type===undefined){!this._events||init.call(this);return this;}if(this.wildcard){var ns=typeof type==='string'?type.split(this.delimiter):type.slice();var leafs=searchListenerTree.call(this,null,ns,this.listenerTree,0);for(var iLeaf=0;iLeaf<leafs.length;iLeaf++){var leaf=leafs[iLeaf];leaf._listeners=null;}}else if(this._events){this._events[type]=null;}return this;};EventEmitter.prototype.listeners=function(type){if(this.wildcard){var handlers=[];var ns=typeof type==='string'?type.split(this.delimiter):type.slice();searchListenerTree.call(this,handlers,ns,this.listenerTree,0);return handlers;}this._events||init.call(this);if(!this._events[type])this._events[type]=[];if(!isArray(this._events[type])){this._events[type]=[this._events[type]];}return this._events[type];};EventEmitter.prototype.eventNames=function(){return Object.keys(this._events);};EventEmitter.prototype.listenerCount=function(type){return this.listeners(type).length;};EventEmitter.prototype.listenersAny=function(){if(this._all){return this._all;}else{return[];}};if(true){// AMD. Register as an anonymous module.
!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return EventEmitter;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/nearley/lib/nearley.js":
/*!*********************************************!*\
  !*** ./node_modules/nearley/lib/nearley.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}(function(root,factory){if(( false?undefined:_typeof(module))==='object'&&module.exports){module.exports=factory();}else{root.nearley=factory();}})(this,function(){function Rule(name,symbols,postprocess){this.id=++Rule.highestId;this.name=name;this.symbols=symbols;// a list of literal | regex class | nonterminal
this.postprocess=postprocess;return this;}Rule.highestId=0;Rule.prototype.toString=function(withCursorAt){function stringifySymbolSequence(e){return e.literal?JSON.stringify(e.literal):e.type?'%'+e.type:e.toString();}var symbolSequence=typeof withCursorAt==="undefined"?this.symbols.map(stringifySymbolSequence).join(' '):this.symbols.slice(0,withCursorAt).map(stringifySymbolSequence).join(' ')+" ● "+this.symbols.slice(withCursorAt).map(stringifySymbolSequence).join(' ');return this.name+" → "+symbolSequence;};// a State is a rule at a position from a given starting point in the input stream (reference)
function State(rule,dot,reference,wantedBy){this.rule=rule;this.dot=dot;this.reference=reference;this.data=[];this.wantedBy=wantedBy;this.isComplete=this.dot===rule.symbols.length;}State.prototype.toString=function(){return"{"+this.rule.toString(this.dot)+"}, from: "+(this.reference||0);};State.prototype.nextState=function(child){var state=new State(this.rule,this.dot+1,this.reference,this.wantedBy);state.left=this;state.right=child;if(state.isComplete){state.data=state.build();}return state;};State.prototype.build=function(){var children=[];var node=this;do{children.push(node.right.data);node=node.left;}while(node.left);children.reverse();return children;};State.prototype.finish=function(){if(this.rule.postprocess){this.data=this.rule.postprocess(this.data,this.reference,Parser.fail);}};function Column(grammar,index){this.grammar=grammar;this.index=index;this.states=[];this.wants={};// states indexed by the non-terminal they expect
this.scannable=[];// list of states that expect a token
this.completed={};// states that are nullable
}Column.prototype.process=function(nextColumn){var states=this.states;var wants=this.wants;var completed=this.completed;for(var w=0;w<states.length;w++){// nb. we push() during iteration
var state=states[w];if(state.isComplete){state.finish();if(state.data!==Parser.fail){// complete
var wantedBy=state.wantedBy;for(var i=wantedBy.length;i--;){// this line is hot
var left=wantedBy[i];this.complete(left,state);}// special-case nullables
if(state.reference===this.index){// make sure future predictors of this rule get completed.
var exp=state.rule.name;(this.completed[exp]=this.completed[exp]||[]).push(state);}}}else{// queue scannable states
var exp=state.rule.symbols[state.dot];if(typeof exp!=='string'){this.scannable.push(state);continue;}// predict
if(wants[exp]){wants[exp].push(state);if(completed.hasOwnProperty(exp)){var nulls=completed[exp];for(var i=0;i<nulls.length;i++){var right=nulls[i];this.complete(state,right);}}}else{wants[exp]=[state];this.predict(exp);}}}};Column.prototype.predict=function(exp){var rules=this.grammar.byName[exp]||[];for(var i=0;i<rules.length;i++){var r=rules[i];var wantedBy=this.wants[exp];var s=new State(r,0,this.index,wantedBy);this.states.push(s);}};Column.prototype.complete=function(left,right){var copy=left.nextState(right);this.states.push(copy);};function Grammar(rules,start){this.rules=rules;this.start=start||this.rules[0].name;var byName=this.byName={};this.rules.forEach(function(rule){if(!byName.hasOwnProperty(rule.name)){byName[rule.name]=[];}byName[rule.name].push(rule);});}// So we can allow passing (rules, start) directly to Parser for backwards compatibility
Grammar.fromCompiled=function(rules,start){var lexer=rules.Lexer;if(rules.ParserStart){start=rules.ParserStart;rules=rules.ParserRules;}var rules=rules.map(function(r){return new Rule(r.name,r.symbols,r.postprocess);});var g=new Grammar(rules,start);g.lexer=lexer;// nb. storing lexer on Grammar is iffy, but unavoidable
return g;};function StreamLexer(){this.reset("");}StreamLexer.prototype.reset=function(data,state){this.buffer=data;this.index=0;this.line=state?state.line:1;this.lastLineBreak=state?-state.col:0;};StreamLexer.prototype.next=function(){if(this.index<this.buffer.length){var ch=this.buffer[this.index++];if(ch==='\n'){this.line+=1;this.lastLineBreak=this.index;}return{value:ch};}};StreamLexer.prototype.save=function(){return{line:this.line,col:this.index-this.lastLineBreak};};StreamLexer.prototype.formatError=function(token,message){// nb. this gets called after consuming the offending token,
// so the culprit is index-1
var buffer=this.buffer;if(typeof buffer==='string'){var nextLineBreak=buffer.indexOf('\n',this.index);if(nextLineBreak===-1)nextLineBreak=buffer.length;var line=buffer.substring(this.lastLineBreak,nextLineBreak);var col=this.index-this.lastLineBreak;message+=" at line "+this.line+" col "+col+":\n\n";message+="  "+line+"\n";message+="  "+Array(col).join(" ")+"^";return message;}else{return message+" at index "+(this.index-1);}};function Parser(rules,start,options){if(rules instanceof Grammar){var grammar=rules;var options=start;}else{var grammar=Grammar.fromCompiled(rules,start);}this.grammar=grammar;// Read options
this.options={keepHistory:false,lexer:grammar.lexer||new StreamLexer()};for(var key in options||{}){this.options[key]=options[key];}// Setup lexer
this.lexer=this.options.lexer;this.lexerState=undefined;// Setup a table
var column=new Column(grammar,0);var table=this.table=[column];// I could be expecting anything.
column.wants[grammar.start]=[];column.predict(grammar.start);// TODO what if start rule is nullable?
column.process();this.current=0;// token index
}// create a reserved token for indicating a parse fail
Parser.fail={};Parser.prototype.feed=function(chunk){var lexer=this.lexer;lexer.reset(chunk,this.lexerState);var token;while(token=lexer.next()){// We add new states to table[current+1]
var column=this.table[this.current];// GC unused states
if(!this.options.keepHistory){delete this.table[this.current-1];}var n=this.current+1;var nextColumn=new Column(this.grammar,n);this.table.push(nextColumn);// Advance all tokens that expect the symbol
var literal=token.text!==undefined?token.text:token.value;var value=lexer.constructor===StreamLexer?token.value:token;var scannable=column.scannable;for(var w=scannable.length;w--;){var state=scannable[w];var expect=state.rule.symbols[state.dot];// Try to consume the token
// either regex or literal
if(expect.test?expect.test(value):expect.type?expect.type===token.type:expect.literal===literal){// Add it
var next=state.nextState({data:value,token:token,isToken:true,reference:n-1});nextColumn.states.push(next);}}// Next, for each of the rules, we either
// (a) complete it, and try to see if the reference row expected that
//     rule
// (b) predict the next nonterminal it expects by adding that
//     nonterminal's start state
// To prevent duplication, we also keep track of rules we have already
// added
nextColumn.process();// If needed, throw an error:
if(nextColumn.states.length===0){// No states at all! This is not good.
var message=this.lexer.formatError(token,"invalid syntax")+"\n";message+="Unexpected "+(token.type?token.type+" token: ":"");message+=JSON.stringify(token.value!==undefined?token.value:token)+"\n";var err=new Error(message);err.offset=this.current;err.token=token;throw err;}// maybe save lexer state
if(this.options.keepHistory){column.lexerState=lexer.save();}this.current++;}if(column){this.lexerState=lexer.save();}// Incrementally keep track of results
this.results=this.finish();// Allow chaining, for whatever it's worth
return this;};Parser.prototype.save=function(){var column=this.table[this.current];column.lexerState=this.lexerState;return column;};Parser.prototype.restore=function(column){var index=column.index;this.current=index;this.table[index]=column;this.table.splice(index+1);this.lexerState=column.lexerState;// Incrementally keep track of results
this.results=this.finish();};// nb. deprecated: use save/restore instead!
Parser.prototype.rewind=function(index){if(!this.options.keepHistory){throw new Error('set option `keepHistory` to enable rewinding');}// nb. recall column (table) indicies fall between token indicies.
//        col 0   --   token 0   --   col 1
this.restore(this.table[index]);};Parser.prototype.finish=function(){// Return the possible parsings
var considerations=[];var start=this.grammar.start;var column=this.table[this.table.length-1];column.states.forEach(function(t){if(t.rule.name===start&&t.dot===t.rule.symbols.length&&t.reference===0&&t.data!==Parser.fail){considerations.push(t);}});return considerations.map(function(c){return c.data;});};return{Parser:Parser,Grammar:Grammar,Rule:Rule};});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};

/***/ }),

/***/ "./node_modules/quick-lru/index.js":
/*!*****************************************!*\
  !*** ./node_modules/quick-lru/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var QuickLRU=/*#__PURE__*/function(){function QuickLRU(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};_classCallCheck(this,QuickLRU);if(!(options.maxSize&&options.maxSize>0)){throw new TypeError('`maxSize` must be a number greater than 0');}this.maxSize=options.maxSize;this.cache=new Map();this.oldCache=new Map();this._size=0;}_createClass(QuickLRU,[{key:"_set",value:function _set(key,value){this.cache.set(key,value);this._size++;if(this._size>=this.maxSize){this._size=0;this.oldCache=this.cache;this.cache=new Map();}}},{key:"get",value:function get(key){if(this.cache.has(key)){return this.cache.get(key);}if(this.oldCache.has(key)){var value=this.oldCache.get(key);this._set(key,value);return value;}}},{key:"set",value:function set(key,value){if(this.cache.has(key)){this.cache.set(key,value);}else{this._set(key,value);}return this;}},{key:"has",value:function has(key){return this.cache.has(key)||this.oldCache.has(key);}},{key:"peek",value:function peek(key){if(this.cache.has(key)){return this.cache.get(key);}if(this.oldCache.has(key)){return this.oldCache.get(key);}}},{key:"delete",value:function _delete(key){var deleted=this.cache.delete(key);if(deleted){this._size--;}return this.oldCache.delete(key)||deleted;}},{key:"clear",value:function clear(){this.cache.clear();this.oldCache.clear();this._size=0;}},{key:"keys",value:/*#__PURE__*/regeneratorRuntime.mark(function keys(){var _iteratorNormalCompletion,_didIteratorError,_iteratorError,_iterator,_step,_step$value,key;return regeneratorRuntime.wrap(function keys$(_context){while(1){switch(_context.prev=_context.next){case 0:_iteratorNormalCompletion=true;_didIteratorError=false;_iteratorError=undefined;_context.prev=3;_iterator=this[Symbol.iterator]();case 5:if(_iteratorNormalCompletion=(_step=_iterator.next()).done){_context.next=12;break;}_step$value=_slicedToArray(_step.value,1),key=_step$value[0];_context.next=9;return key;case 9:_iteratorNormalCompletion=true;_context.next=5;break;case 12:_context.next=18;break;case 14:_context.prev=14;_context.t0=_context["catch"](3);_didIteratorError=true;_iteratorError=_context.t0;case 18:_context.prev=18;_context.prev=19;if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}case 21:_context.prev=21;if(!_didIteratorError){_context.next=24;break;}throw _iteratorError;case 24:return _context.finish(21);case 25:return _context.finish(18);case 26:case"end":return _context.stop();}}},keys,this,[[3,14,18,26],[19,,21,25]]);})},{key:"values",value:/*#__PURE__*/regeneratorRuntime.mark(function values(){var _iteratorNormalCompletion2,_didIteratorError2,_iteratorError2,_iterator2,_step2,_step2$value,value;return regeneratorRuntime.wrap(function values$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_iteratorNormalCompletion2=true;_didIteratorError2=false;_iteratorError2=undefined;_context2.prev=3;_iterator2=this[Symbol.iterator]();case 5:if(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done){_context2.next=12;break;}_step2$value=_slicedToArray(_step2.value,2),value=_step2$value[1];_context2.next=9;return value;case 9:_iteratorNormalCompletion2=true;_context2.next=5;break;case 12:_context2.next=18;break;case 14:_context2.prev=14;_context2.t0=_context2["catch"](3);_didIteratorError2=true;_iteratorError2=_context2.t0;case 18:_context2.prev=18;_context2.prev=19;if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}case 21:_context2.prev=21;if(!_didIteratorError2){_context2.next=24;break;}throw _iteratorError2;case 24:return _context2.finish(21);case 25:return _context2.finish(18);case 26:case"end":return _context2.stop();}}},values,this,[[3,14,18,26],[19,,21,25]]);})},{key:Symbol.iterator,value:/*#__PURE__*/regeneratorRuntime.mark(function value(){var _iteratorNormalCompletion3,_didIteratorError3,_iteratorError3,_iterator3,_step3,item,_iteratorNormalCompletion4,_didIteratorError4,_iteratorError4,_iterator4,_step4,_item,_item2,key;return regeneratorRuntime.wrap(function value$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_iteratorNormalCompletion3=true;_didIteratorError3=false;_iteratorError3=undefined;_context3.prev=3;_iterator3=this.cache[Symbol.iterator]();case 5:if(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done){_context3.next=12;break;}item=_step3.value;_context3.next=9;return item;case 9:_iteratorNormalCompletion3=true;_context3.next=5;break;case 12:_context3.next=18;break;case 14:_context3.prev=14;_context3.t0=_context3["catch"](3);_didIteratorError3=true;_iteratorError3=_context3.t0;case 18:_context3.prev=18;_context3.prev=19;if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}case 21:_context3.prev=21;if(!_didIteratorError3){_context3.next=24;break;}throw _iteratorError3;case 24:return _context3.finish(21);case 25:return _context3.finish(18);case 26:_iteratorNormalCompletion4=true;_didIteratorError4=false;_iteratorError4=undefined;_context3.prev=29;_iterator4=this.oldCache[Symbol.iterator]();case 31:if(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done){_context3.next=40;break;}_item=_step4.value;_item2=_slicedToArray(_item,1),key=_item2[0];if(this.cache.has(key)){_context3.next=37;break;}_context3.next=37;return _item;case 37:_iteratorNormalCompletion4=true;_context3.next=31;break;case 40:_context3.next=46;break;case 42:_context3.prev=42;_context3.t1=_context3["catch"](29);_didIteratorError4=true;_iteratorError4=_context3.t1;case 46:_context3.prev=46;_context3.prev=47;if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}case 49:_context3.prev=49;if(!_didIteratorError4){_context3.next=52;break;}throw _iteratorError4;case 52:return _context3.finish(49);case 53:return _context3.finish(46);case 54:case"end":return _context3.stop();}}},value,this,[[3,14,18,26],[19,,21,25],[29,42,46,54],[47,,49,53]]);})},{key:"size",get:function get(){var oldCacheSize=0;var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=this.oldCache.keys()[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var key=_step5.value;if(!this.cache.has(key)){oldCacheSize++;}}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}return this._size+oldCacheSize;}}]);return QuickLRU;}();module.exports=QuickLRU;

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */!function(global){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;// More compressible than void 0.
var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=( false?undefined:_typeof(module))==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
module.exports=runtime;}// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
return;}// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}runtime.wrap=wrap;// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";// Returning this object from the innerFn has the same effect as
// breaking out of the dispatch switch statement.
var ContinueSentinel={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg);};});}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(ctor.displayName||ctor.name)==="GeneratorFunction":false;};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction";}}genFun.prototype=Object.create(Gp);return genFun;};// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
runtime.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&_typeof(value)==="object"&&hasOwn.call(value,"__await")){return Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return Promise.resolve(value).then(function(unwrapped){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
result.value=unwrapped;resolve(result);},reject);}}if(_typeof(global.process)==="object"&&global.process.domain){invoke=global.process.domain.bind(invoke);}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
previousPromise?previousPromise.then(callInvokeWithMethodAndArg,// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};runtime.AsyncIterator=AsyncIterator;// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter// If outerFn is a generator, return the full iterator.
:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){// Setting context._sent for legacy support of Babel's
// function.sent implementation.
context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
context.method="throw";context.arg=record.arg;}}};}// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
context.delegate=null;if(context.method==="throw"){if(delegate.iterator.return){// If the delegate iterator has a return method, give it a
// chance to clean up.
context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
context[delegate.resultName]=info.value;// Resume execution at the desired location (see delegateYield).
context.next=delegate.nextLoc;// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{// Re-yield the result returned by the delegate method.
return info;}// The delegate iterator is finished, so forget it and continue with
// the outer generator.
context.delegate=null;return ContinueSentinel;}// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return"[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}// Return an iterator with no values.
return{next:doneResult};}runtime.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){// Not sure about the optimal order of these conditions:
if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
context.method="next";context.arg=undefined;}return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
this.arg=undefined;}return ContinueSentinel;}};}(// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
(typeof global==="undefined"?"undefined":_typeof(global))==="object"?global:(typeof window==="undefined"?"undefined":_typeof(window))==="object"?window:(typeof self==="undefined"?"undefined":_typeof(self))==="object"?self:this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||new Function("return this")();}catch(e){// This works if the window reference is available
if((typeof window==="undefined"?"undefined":_typeof(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};

/***/ }),

/***/ "./src/colors.ts":
/*!***********************!*\
  !*** ./src/colors.ts ***!
  \***********************/
/*! exports provided: lookupColorPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookupColorPalette", function() { return lookupColorPalette; });
var ALIASES=['arnecolors',// the default color palette
'mastersystem','gameboycolour','amiga','arnecolors','famicom','atari','pastel','ega','amstrad','proteus_mellow','proteus_rich','proteus_night','c64','whitingjp'];var COLOR_PALETTES=new Map();COLOR_PALETTES.set('mastersystem',{black:'#000000',white:'#FFFFFF',grey:'#555555',darkgrey:'#555500',lightgrey:'#AAAAAA',gray:'#555555',darkgray:'#555500',lightgray:'#AAAAAA',red:'#FF0000',darkred:'#AA0000',lightred:'#FF5555',brown:'#AA5500',darkbrown:'#550000',lightbrown:'#FFAA00',orange:'#FF5500',yellow:'#FFFF55',green:'#55AA00',darkgreen:'#005500',lightgreen:'#AAFF00',blue:'#5555AA',lightblue:'#AAFFFF',darkblue:'#000055',purple:'#550055',pink:'#FFAAFF'});COLOR_PALETTES.set('gameboycolour',{black:'#000000',white:'#FFFFFF',grey:'#7F7F7C',darkgrey:'#3E3E44',lightgrey:'#BAA7A7',gray:'#7F7F7C',darkgray:'#3E3E44',lightgray:'#BAA7A7',red:'#A7120C',darkred:'#880606',lightred:'#BA381F',brown:'#57381F',darkbrown:'#3E2519',lightbrown:'#8E634B',orange:'#BA4B32',yellow:'#C0BA6F',green:'#517525',darkgreen:'#385D12',lightgreen:'#6F8E44',blue:'#5D6FA7',lightblue:'#8EA7A7',darkblue:'#4B575D',purple:'#3E3E44',pink:'#BA381F'});COLOR_PALETTES.set('amiga',{black:'#000000',white:'#FFFFFF',grey:'#BBBBBB',darkgrey:'#333333',lightgrey:'#FFEEDD',gray:'#BBBBBB',darkgray:'#333333',lightgray:'#FFEEDD',red:'#DD1111',darkred:'#990000',lightred:'#FF4422',brown:'#663311',darkbrown:'#331100',lightbrown:'#AA6644',orange:'#FF6644',yellow:'#FFDD66',green:'#448811',darkgreen:'#335500',lightgreen:'#88BB77',blue:'#8899DD',lightblue:'#BBDDEE',darkblue:'#666688',purple:'#665555',pink:'#997788'});COLOR_PALETTES.set('arnecolors',{black:'#000000',white:'#FFFFFF',grey:'#9d9d9d',darkgrey:'#697175',lightgrey:'#cccccc',gray:'#9d9d9d',darkgray:'#697175',lightgray:'#cccccc',red:'#be2633',darkred:'#732930',lightred:'#e06f8b',brown:'#a46422',darkbrown:'#493c2b',lightbrown:'#eeb62f',orange:'#eb8931',yellow:'#f7e26b',green:'#44891a',darkgreen:'#2f484e',lightgreen:'#a3ce27',blue:'#1d57f7',lightblue:'#B2DCEF',darkblue:'#1B2632',purple:'#342a97',pink:'#de65e2'});COLOR_PALETTES.set('famicom',{black:'#000000',white:'#ffffff',grey:'#7c7c7c',darkgrey:'#080808',lightgrey:'#bcbcbc',gray:'#7c7c7c',darkgray:'#080808',lightgray:'#bcbcbc',red:'#f83800',darkred:'#881400',lightred:'#f87858',brown:'#AC7C00',darkbrown:'#503000',lightbrown:'#FCE0A8',orange:'#FCA044',yellow:'#F8B800',green:'#00B800',darkgreen:'#005800',lightgreen:'#B8F8B8',blue:'#0058F8',lightblue:'#3CBCFC',darkblue:'#0000BC',purple:'#6644FC',pink:'#F878F8'});COLOR_PALETTES.set('atari',{black:'#000000',white:'#FFFFFF',grey:'#909090',darkgrey:'#404040',lightgrey:'#b0b0b0',gray:'#909090',darkgray:'#404040',lightgray:'#b0b0b0',red:'#A03C50',darkred:'#700014',lightred:'#DC849C',brown:'#805020',darkbrown:'#703400',lightbrown:'#CB9870',orange:'#CCAC70',yellow:'#ECD09C',green:'#58B06C',darkgreen:'#006414',lightgreen:'#70C484',blue:'#1C3C88',lightblue:'#6888C8',darkblue:'#000088',purple:'#3C0080',pink:'#B484DC'});COLOR_PALETTES.set('pastel',{black:'#000000',white:'#FFFFFF',grey:'#3e3e3e',darkgrey:'#313131',lightgrey:'#9cbcbc',gray:'#3e3e3e',darkgray:'#313131',lightgray:'#9cbcbc',red:'#f56ca2',darkred:'#a63577',lightred:'#ffa9cf',brown:'#b58c53',darkbrown:'#787562',lightbrown:'#B58C53',orange:'#EB792D',yellow:'#FFe15F',green:'#00FF4F',darkgreen:'#2b732c',lightgreen:'#97c04f',blue:'#0f88d3',lightblue:'#00fffe',darkblue:'#293a7b',purple:'#ff6554',pink:'#eb792d'});COLOR_PALETTES.set('ega',{black:'#000000',white:'#ffffff',grey:'#555555',darkgrey:'#555555',lightgrey:'#aaaaaa',gray:'#555555',darkgray:'#555555',lightgray:'#aaaaaa',red:'#ff5555',darkred:'#aa0000',lightred:'#ff55ff',brown:'#aa5500',darkbrown:'#aa5500',lightbrown:'#ffff55',orange:'#ff5555',yellow:'#ffff55',green:'#00aa00',darkgreen:'#00aaaa',lightgreen:'#55ff55',blue:'#5555ff',lightblue:'#55ffff',darkblue:'#0000aa',purple:'#aa00aa',pink:'#ff55ff'});COLOR_PALETTES.set('proteus_mellow',{black:'#3d2d2e',white:'#ddf1fc',grey:'#9fb2d4',darkgrey:'#7b8272',lightgrey:'#a4bfda',gray:'#9fb2d4',darkgray:'#7b8272',lightgray:'#a4bfda',red:'#9d5443',darkred:'#8c5b4a',lightred:'#94614c',brown:'#89a78d',darkbrown:'#829e88',lightbrown:'#aaae97',orange:'#d1ba86',yellow:'#d6cda2',green:'#75ac8d',darkgreen:'#8fa67f',lightgreen:'#8eb682',blue:'#88a3ce',lightblue:'#a5adb0',darkblue:'#5c6b8c',purple:'#d39fac',pink:'#c8ac9e'});COLOR_PALETTES.set('proteus_night',{black:'#010912',white:'#fdeeec',grey:'#051d40',darkgrey:'#091842',lightgrey:'#062151',gray:'#051d40',darkgray:'#091842',lightgray:'#062151',red:'#ad4576',darkred:'#934765',lightred:'#ab6290',brown:'#61646b',darkbrown:'#3d2d2d',lightbrown:'#8393a0',orange:'#0a2227',yellow:'#0a2541',green:'#75ac8d',darkgreen:'#0a2434',lightgreen:'#061f2e',blue:'#0b2c79',lightblue:'#809ccb',darkblue:'#08153b',purple:'#666a87',pink:'#754b4d'});COLOR_PALETTES.set('proteus_rich',{black:'#6f686f',white:'#d1b1e2',grey:'#b9aac1',darkgrey:'#8e8b84',lightgrey:'#c7b5cd',gray:'#b9aac1',darkgray:'#8e8b84',lightgray:'#c7b5cd',red:'#a11f4f',darkred:'#934765',lightred:'#c998ad',brown:'#89867d',darkbrown:'#797f75',lightbrown:'#ab9997',orange:'#ce8c5c',yellow:'#f0d959',green:'#75bc54',darkgreen:'#599d79',lightgreen:'#90cf5c',blue:'#8fd0ec',lightblue:'#bcdce7',darkblue:'#0b2c70',purple:'#9b377f',pink:'#cd88e5'});COLOR_PALETTES.set('amstrad',{black:'#000000',white:'#ffffff',grey:'#7f7f7f',darkgrey:'#636363',lightgrey:'#afafaf',gray:'#7f7f7f',darkgray:'#636363',lightgray:'#afafaf',red:'#ff0000',darkred:'#7f0000',lightred:'#ff7f7f',brown:'#ff7f00',darkbrown:'#7f7f00',lightbrown:'#ffff00',orange:'#ff007f',yellow:'#ffff7f',green:'#01ff00',darkgreen:'#007f00',lightgreen:'#7fff7f',blue:'#0000ff',lightblue:'#7f7fff',darkblue:'#00007f',purple:'#7f007f',pink:'#ff7fff'});COLOR_PALETTES.set('c64',{black:'#000000',white:'#ffffff',grey:'#6C6C6C',darkgrey:'#444444',lightgrey:'#959595',gray:'#6C6C6C',darkgray:'#444444',lightgray:'#959595',red:'#68372B',darkred:'#3f1e17',lightred:'#9A6759',brown:'#433900',darkbrown:'#221c02',lightbrown:'#6d5c0d',orange:'#6F4F25',yellow:'#B8C76F',green:'#588D43',darkgreen:'#345129',lightgreen:'#9AD284',blue:'#6C5EB5',lightblue:'#70A4B2',darkblue:'#352879',purple:'#6F3D86',pink:'#b044ac'});COLOR_PALETTES.set('whitingjp',{black:'#202527',white:'#eff8fd',grey:'#7b7680',darkgrey:'#3c3b44',lightgrey:'#bed0d7',gray:'#7b7680',darkgray:'#3c3b44',lightgray:'#bed0d7',red:'#bd194b',darkred:'#6b1334',lightred:'#ef2358',brown:'#b52e1c',darkbrown:'#681c12',lightbrown:'#e87b45',orange:'#ff8c10',yellow:'#fbd524',green:'#36bc3c',darkgreen:'#317610',lightgreen:'#8ce062',blue:'#3f62c6',lightblue:'#57bbe0',darkblue:'#2c2fa0',purple:'#7037d9',pink:'#ec2b8f'});function lookupColorPalette(alias,colorName){var aliasStr;if(Number.parseInt(alias,10)>=1){aliasStr=ALIASES[Number.parseInt(alias,10)];}else{aliasStr=alias;}var map=COLOR_PALETTES.get(aliasStr);if(!map){throw new Error("BUG: Invalid color palette name or number: \"".concat(alias,"\" \"").concat(aliasStr,"\""));}var colorValue=map[colorName.toLowerCase()];return colorValue;}

/***/ }),

/***/ "./src/engine.ts":
/*!***********************!*\
  !*** ./src/engine.ts ***!
  \***********************/
/*! exports provided: Cell, Level, LevelEngine, GameEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelEngine", function() { return LevelEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameEngine", function() { return GameEngine; });
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter2 */ "./node_modules/eventemitter2/lib/eventemitter2.js");
/* harmony import */ var eventemitter2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/logger.ts");
/* harmony import */ var _models_rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/rule */ "./src/models/rule.ts");
/* harmony import */ var _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser/astTypes */ "./src/parser/astTypes.ts");
/* harmony import */ var _spriteBitSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spriteBitSet */ "./src/spriteBitSet.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.ts");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}/**
 * The state of sprites in one position of the current level being played.
 *
 * This stores all the sprites and which direction those sprites want to move.
 *
 * The [[TerminalUI]] uses this object to render and the [[GameEngine]] uses this to maintain the state
 * of one position of the current level.
 */var Cell=/*#__PURE__*/function(){function Cell(level,sprites,rowIndex,colIndex){_classCallCheck(this,Cell);this.level=level;this.rowIndex=rowIndex;this.colIndex=colIndex;this.state=new Map();this.cacheCollisionLayers=[];this.spriteBitSet=new _spriteBitSet__WEBPACK_IMPORTED_MODULE_4__["SpriteBitSet"](sprites);this.cachedKeyValue=null;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=sprites[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _sprite=_step.value;this._setWantsToMove(_sprite,_util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}_createClass(Cell,[{key:"_setWantsToMove",value:function _setWantsToMove(sprite,wantsToMove){var collisionLayer=sprite.getCollisionLayer();var _this$getStateForColl=this.getStateForCollisionLayer(collisionLayer),cellWantsToMove=_this$getStateForColl.wantsToMove,cellSprite=_this$getStateForColl.sprite;var didActuallyChangeDir=cellWantsToMove!==wantsToMove;var didActuallyChangeSprite=cellSprite!==sprite;// replace the sprite in the bitSet
if(cellSprite!==sprite){if(cellSprite){throw new Error("BUG: Should have already been removed?");// this.spriteBitSet.remove(cellSprite)
}this.spriteBitSet.add(sprite);}this._setState(collisionLayer,sprite,wantsToMove);// call replaceSprite only **after** we updated the Cell
if(cellSprite!==sprite){this.replaceSpriteInLevel(cellSprite,sprite);}return didActuallyChangeSprite||didActuallyChangeDir;}},{key:"_deleteWantsToMove",value:function _deleteWantsToMove(sprite){// There may be other sprites in the same ... oh wait, no that's not possible.
var collisionLayer=sprite.getCollisionLayer();var cellSprite=this.getSpriteByCollisionLayer(collisionLayer);var didActuallyChange=!!cellSprite;if(cellSprite){this.spriteBitSet.remove(cellSprite);}this._setState(collisionLayer,null,null);// delete the entry
return didActuallyChange;}},{key:"setWantsToMoveCollisionLayer",value:function setWantsToMoveCollisionLayer(collisionLayer,wantsToMove){// Check that there is a sprite for this collision layer
var _this$getStateForColl2=this.getStateForCollisionLayer(collisionLayer),sprite=_this$getStateForColl2.sprite,cellWantsToMove=_this$getStateForColl2.wantsToMove;if(!sprite){throw new Error("BUG: No sprite for collision layer. Cannot set direction.\n".concat(collisionLayer.toString()));}var didActuallyChange=cellWantsToMove!==wantsToMove;this._setState(collisionLayer,sprite,wantsToMove);sprite.updateCell(this,wantsToMove);return didActuallyChange;}},{key:"getSpriteByCollisionLayer",value:function getSpriteByCollisionLayer(collisionLayer){var _this$getStateForColl3=this.getStateForCollisionLayer(collisionLayer),sprite=_this$getStateForColl3.sprite;return sprite||null;}},{key:"getCollisionLayers",value:function getCollisionLayers(){// return [...this._state.keys()]
//     .sort((c1, c2) => c1.id - c2.id)
return this.cacheCollisionLayers;}},{key:"getSprites",value:function getSprites(){// Just pull out the sprite, not the wantsToMoveDir
var sprites=[];var collisionLayers=this.getCollisionLayers();var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=collisionLayers[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var collisionLayer=_step2.value;var _sprite2=this.getSpriteByCollisionLayer(collisionLayer);if(_sprite2){sprites.push(_sprite2);}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return sprites.reverse();// reversed so we render sprites properly
}},{key:"getSpritesAsSet",value:function getSpritesAsSet(){// Just pull out the sprite, not the wantsToMoveDir
var sprites=new Set();var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this.state.values()[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var _sprite3=_step3.value.sprite;sprites.add(_sprite3);}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return sprites;}},{key:"getSpriteAndWantsToMoves",value:function getSpriteAndWantsToMoves(){// Just pull out the sprite, not the wantsToMoveDir
// Retur na new set so we can mutate it later
var map=new Map();var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=this.getCollisionLayers()[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var collisionLayer=_step4.value;var _this$getStateForColl4=this.getStateForCollisionLayer(collisionLayer),_sprite4=_this$getStateForColl4.sprite,_wantsToMove=_this$getStateForColl4.wantsToMove;map.set(_sprite4,_wantsToMove);}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}return map;}},{key:"getCollisionLayerWantsToMove",value:function getCollisionLayerWantsToMove(collisionLayer){var _this$getStateForColl5=this.getStateForCollisionLayer(collisionLayer),wantsToMove=_this$getStateForColl5.wantsToMove;return wantsToMove||null;}},{key:"hasSprite",value:function hasSprite(sprite){var cellSprite=this.getSpriteByCollisionLayer(sprite.getCollisionLayer());return sprite===cellSprite;}},{key:"getNeighbor",value:function getNeighbor(direction){switch(direction){case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].UP:return this.getRelativeNeighbor(-1,0);case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].DOWN:return this.getRelativeNeighbor(1,0);case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].LEFT:return this.getRelativeNeighbor(0,-1);case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].RIGHT:return this.getRelativeNeighbor(0,1);default:throw new Error("BUG: Unsupported direction \"".concat(direction,"\""));}}},{key:"getWantsToMove",value:function getWantsToMove(sprite){return this.getCollisionLayerWantsToMove(sprite.getCollisionLayer());}},{key:"hasCollisionWithSprite",value:function hasCollisionWithSprite(otherSprite){return!!this.getCollisionLayerWantsToMove(otherSprite.getCollisionLayer());}},{key:"clearWantsToMove",value:function clearWantsToMove(sprite){this._setWantsToMove(sprite,_util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY);sprite.updateCell(this,_util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY);}},{key:"addSprite",value:function addSprite(sprite,wantsToMove){var didActuallyChange=false;// If we already have a sprite in that collision layer then we need to remove it
var prevSprite=this.getSpriteByCollisionLayer(sprite.getCollisionLayer());var prevWantsToMove=this.getCollisionLayerWantsToMove(sprite.getCollisionLayer());if(prevSprite&&prevSprite!==sprite){this.removeSprite(prevSprite);}if(wantsToMove){didActuallyChange=this._setWantsToMove(sprite,wantsToMove);}else if(!this.hasSprite(sprite)){wantsToMove=prevWantsToMove||_util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY;// try to preserve the wantsToMove
didActuallyChange=this._setWantsToMove(sprite,wantsToMove);}sprite.addCell(this,wantsToMove);return didActuallyChange;}},{key:"updateSprite",value:function updateSprite(sprite,wantsToMove){// Copy/pasta from addSprite except it calls updateCell
var didActuallyChange=false;// If we already have a sprite in that collision layer then we need to remove it
var prevSprite=this.getSpriteByCollisionLayer(sprite.getCollisionLayer());if(prevSprite!==sprite){throw new Error("BUG: Should not be trying to update the direction of a sprite that is not in the cell");}if(wantsToMove){didActuallyChange=this._setWantsToMove(sprite,wantsToMove);}else if(!this.hasSprite(sprite)){throw new Error("BUG: sprite should already be in the cell since we are updating it");}sprite.updateCell(this,wantsToMove);return didActuallyChange;}},{key:"removeSprite",value:function removeSprite(sprite){var didActuallyChange=this._deleteWantsToMove(sprite);sprite.removeCell(this);return didActuallyChange;}},{key:"toString",value:function toString(){return"Cell [".concat(this.rowIndex,"][").concat(this.colIndex,"] ").concat(_toConsumableArray(this.getSpriteAndWantsToMoves().entries()).map(function(_ref){var _ref2=_slicedToArray(_ref,2),sprite=_ref2[0],wantsToMove=_ref2[1];return"".concat(wantsToMove," ").concat(sprite.getName());}).join(' '));}},{key:"toKey",value:function toKey(){if(!this.cachedKeyValue){this.cachedKeyValue=_toConsumableArray(this.state.values()).map(function(_ref3){var sprite=_ref3.sprite,wantsToMove=_ref3.wantsToMove;return"".concat(wantsToMove," ").concat(sprite.getName());}).join(' ');// this.cachedKeyValue = [...this.getSpriteAndWantsToMoves().entries()].map(([sprite, wantsToMove]) => `${wantsToMove} ${sprite.getName()}`).join(' ')
}return this.cachedKeyValue;}},{key:"toSnapshot",value:function toSnapshot(){return this.getSpritesAsSet();}},{key:"fromSnapshot",value:function fromSnapshot(newSprites){var currentSprites=this.getSpritesAsSet();var spritesToRemove=Object(_util__WEBPACK_IMPORTED_MODULE_5__["setDifference"])(currentSprites,newSprites);var spritesToAdd=Object(_util__WEBPACK_IMPORTED_MODULE_5__["setDifference"])(newSprites,currentSprites);// Remove Sprites
this.removeSprites(spritesToRemove);// Add Sprites
this.addSprites(spritesToAdd);}// This method is replaced by LetterCells (because they are not boud to a level)
},{key:"replaceSpriteInLevel",value:function replaceSpriteInLevel(cellSprite,newSprite){this.getLevel().replaceSprite(this,cellSprite,newSprite);}},{key:"_setState",value:function _setState(collisionLayer,sprite,wantsToMove){var needsToUpdateCache;if(sprite){needsToUpdateCache=this.cacheCollisionLayers.indexOf(collisionLayer)<0;this.state.set(collisionLayer,{wantsToMove:wantsToMove,sprite:sprite});}else{this.state.delete(collisionLayer);needsToUpdateCache=true;}if(needsToUpdateCache){// Update the collisionLayer Cache
this.cacheCollisionLayers=_toConsumableArray(this.state.keys()).sort(function(c1,c2){return c1.id-c2.id;});}this.invalidateKey();}},{key:"getLevel",value:function getLevel(){if(!this.level){throw new Error("BUG: we need an engine Level in order to find neighbors. It is optional for letters in messages");}return this.level;}},{key:"getStateForCollisionLayer",value:function getStateForCollisionLayer(collisionLayer){var state=this.state.get(collisionLayer);if(!state){return{wantsToMove:null,sprite:null};}return state;}},{key:"getRelativeNeighbor",value:function getRelativeNeighbor(y,x){return this.getLevel().getCellOrNull(this.rowIndex+y,this.colIndex+x);}},{key:"removeSprites",value:function removeSprites(sprites){var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=sprites[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var _sprite5=_step5.value;this.removeSprite(_sprite5);}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}},{key:"addSprites",value:function addSprites(sprites){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=sprites[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var _sprite6=_step6.value;this.addSprite(_sprite6,null);}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return!=null){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}}},{key:"invalidateKey",value:function invalidateKey(){this.cachedKeyValue=null;}}]);return Cell;}();var Level=/*#__PURE__*/function(){function Level(){_classCallCheck(this,Level);this.rowCache=[];this.colCache=[];this.cells=null;}_createClass(Level,[{key:"setCells",value:function setCells(cells){this.cells=cells;}},{key:"getCells",value:function getCells(){if(!this.cells){throw new Error("BUG: Should have called setCells() first");}return this.cells;}},{key:"getCellOrNull",value:function getCellOrNull(rowIndex,colIndex){var row=this.getCells()[rowIndex];if(row){return row[colIndex];}return null;}},{key:"getCell",value:function getCell(rowIndex,colIndex){// Skip error checks for performance
return this.getCells()[rowIndex][colIndex];}},{key:"replaceSprite",value:function replaceSprite(cell,oldSprite,newSprite){// When a new Cell is instantiated it will call this method but `this.cells` is not defined yet
if(this.cells){// Invalidate the row/column cache. It will be rebuilt when requested
this.rowCache[cell.rowIndex]=null;this.colCache[cell.colIndex]=null;}}},{key:"rowContainsSprites",value:function rowContainsSprites(rowIndex,spritesPresent,anySpritesPresent){var cache=this.rowCache[rowIndex];if(!cache){cache=this.computeRowCache(rowIndex);this.rowCache[rowIndex]=cache;}return cache.containsAll(spritesPresent)&&anySpritesPresent.isEmpty()?true:cache.containsAny(anySpritesPresent);}},{key:"colContainsSprites",value:function colContainsSprites(colIndex,sprites,anySpritesPresent){var cache=this.colCache[colIndex];if(!cache){cache=this.computeColCache(colIndex);this.colCache[colIndex]=cache;}return cache.containsAll(sprites)&&anySpritesPresent.isEmpty()?true:cache.containsAny(anySpritesPresent);}},{key:"computeRowCache",value:function computeRowCache(rowIndex){var cols=this.getCells()[0].length;var bitSets=[];for(var index=0;index<cols;index++){bitSets.push(this.getCell(rowIndex,index).spriteBitSet);}return new _spriteBitSet__WEBPACK_IMPORTED_MODULE_4__["SpriteBitSet"]().union(bitSets);}},{key:"computeColCache",value:function computeColCache(colIndex){var rows=this.getCells().length;var bitSets=[];for(var index=0;index<rows;index++){bitSets.push(this.getCell(index,colIndex).spriteBitSet);}return new _spriteBitSet__WEBPACK_IMPORTED_MODULE_4__["SpriteBitSet"]().union(bitSets);}}]);return Level;}();/**
 * Internal class that ise used to maintain the state of a level.
 *
 * This should not be called directly. Instead, use [[GameEngine]] .
 */var LevelEngine=/*#__PURE__*/function(_EventEmitter){_inherits(LevelEngine,_EventEmitter);function LevelEngine(gameData){var _this;_classCallCheck(this,LevelEngine);_this=_possibleConstructorReturn(this,_getPrototypeOf(LevelEngine).call(this));_this.gameData=gameData;_this.hasAgainThatNeedsToRun=false;_this.undoStack=[];_this.pendingPlayerWantsToMove=null;_this.currentLevel=null;_this.tempOldLevel=null;return _this;}_createClass(LevelEngine,[{key:"setLevel",value:function setLevel(levelNum){var _this2=this;this.undoStack=[];this.gameData.clearCaches();var levelData=this.gameData.levels[levelNum];if(!levelData){throw new Error("Invalid levelNum: ".concat(levelNum));}if(levelData.type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["LEVEL_TYPE"].MAP){Object(_util__WEBPACK_IMPORTED_MODULE_5__["resetRandomSeed"])();var levelSprites=levelData.cells.map(function(row){return row.map(function(col){var sprites=new Set(col.getSprites());var backgroundSprite=_this2.gameData.getMagicBackgroundSprite();if(backgroundSprite){sprites.add(backgroundSprite);}return sprites;});});// Clone the board because we will be modifying it
this._setLevel(levelSprites);if(this.gameData.metadata.runRulesOnLevelStart){var _this$tick=this.tick(),messageToShow=_this$tick.messageToShow,isWinning=_this$tick.isWinning,hasRestart=_this$tick.hasRestart;if(messageToShow||isWinning||hasRestart){console.log("Error: Game should not cause a sound/message/win/restart during the initial tick. \"".concat(messageToShow,"\" \"").concat(isWinning,"\" \"").concat(hasRestart,"\""));// tslint:disable-line:no-console
}}this.takeSnapshot(this.createSnapshot());// Return the cells so the UI can listen to when they change
return this.getCells();}else{throw new Error("BUG: LEVEL_MESSAGE should not reach this point");}}},{key:"setMessageLevel",value:function setMessageLevel(sprites){this.tempOldLevel=this.currentLevel;this._setLevel(sprites);}},{key:"restoreFromMessageLevel",value:function restoreFromMessageLevel(){this.currentLevel=this.tempOldLevel;this.tempOldLevel=null;// this.setLevel(this.tempOldLevel)
}},{key:"getCurrentLevel",value:function getCurrentLevel(){if(this.currentLevel){return this.currentLevel;}else{throw new Error("BUG: There is no current level. Maybe it is a message level or maybe setLevel was never called");}}},{key:"toSnapshot",value:function toSnapshot(){return this.getCurrentLevel().getCells().map(function(row){return row.map(function(cell){var ret=[];cell.getSpriteAndWantsToMoves().forEach(function(wantsToMove,sprite){ret.push("".concat(wantsToMove," ").concat(sprite.getName()));});return ret;});});}},{key:"tick",value:function tick(){_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(function(){return"";});if(this.hasAgainThatNeedsToRun){// run the AGAIN rules
this.hasAgainThatNeedsToRun=false;// let the .tick() make it true
}switch(this.pendingPlayerWantsToMove){case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].UNDO:this.doUndo();this.pendingPlayerWantsToMove=null;return{changedCells:new Set(this.getCells()),soundToPlay:null,messageToShow:null,hasCheckpoint:false,hasRestart:false,isWinning:false,mutations:[],a11yMessages:[]};case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].RESTART:this.doRestart();this.pendingPlayerWantsToMove=null;return{changedCells:new Set(this.getCells()),soundToPlay:null,messageToShow:null,hasCheckpoint:false,hasRestart:true,isWinning:false,mutations:[],a11yMessages:[]};default:// no-op
}var ret=this.tickNormal();// TODO: Handle the commands like RESTART, CANCEL, WIN at this point
var soundToPlay=null;var messageToShow=null;var hasCheckpoint=false;var hasWinCommand=false;var hasRestart=false;var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=ret.commands[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var command=_step7.value;switch(command.type){case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].RESTART:hasRestart=true;break;case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].SFX:soundToPlay=command.sound;break;case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].MESSAGE:this.hasAgainThatNeedsToRun=false;// make sure we won't be waiting on another tick
messageToShow=command.message;break;case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].WIN:hasWinCommand=true;break;case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].CHECKPOINT:hasCheckpoint=true;break;case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].AGAIN:case _parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].CANCEL:break;default:throw new Error("BUG: Unsupported command \"".concat(command,"\""));}}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return!=null){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(function(){return"checking win condition.";});if(this.hasAgainThatNeedsToRun){_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(function(){return"AGAIN command executed, with changes detected - will execute another turn.";});}return{changedCells:new Set(ret.changedCells.keys()),hasCheckpoint:hasCheckpoint,soundToPlay:soundToPlay,messageToShow:messageToShow,hasRestart:hasRestart,isWinning:hasWinCommand||this.isWinning(),mutations:ret.mutations,a11yMessages:ret.a11yMessages};}},{key:"hasAgain",value:function hasAgain(){return this.hasAgainThatNeedsToRun;}},{key:"canUndo",value:function canUndo(){return this.undoStack.length>1;}},{key:"press",value:function press(button){return this.pressDir(button);}},{key:"tickUpdateCells",value:function tickUpdateCells(){_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(function(){return"applying rules";});return this._tickUpdateCells(this.gameData.rules.filter(function(r){return!r.isLate();}));}},{key:"tickMoveSprites",value:function tickMoveSprites(changedCells){var movedCells=new Set();var a11yMessages=[];// Loop over all the cells, see if a Rule matches, apply the transition, and notify that cells changed
var somethingChanged;do{somethingChanged=false;var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=changedCells[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var cell=_step8.value;var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=cell.getSpriteAndWantsToMoves()[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var _step9$value=_slicedToArray(_step9.value,2),_sprite7=_step9$value[0],_wantsToMove2=_step9$value[1];switch(_wantsToMove2){case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY:// nothing to do
break;case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].ACTION:// just clear the wantsToMove flag
somethingChanged=true;cell.clearWantsToMove(_sprite7);break;case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].UP:case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].DOWN:case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].LEFT:case _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].RIGHT:var neighbor=cell.getNeighbor(_wantsToMove2);// Make sure
if(neighbor&&!neighbor.hasCollisionWithSprite(_sprite7)){cell.removeSprite(_sprite7);neighbor.addSprite(_sprite7,_util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY);movedCells.add(neighbor);movedCells.add(cell);somethingChanged=true;a11yMessages.push({type:_models_rule__WEBPACK_IMPORTED_MODULE_2__["A11Y_MESSAGE_TYPE"].MOVE,oldCell:cell,newCell:neighbor,sprite:_sprite7,direction:_wantsToMove2});// Don't delete until we are sure none of the sprites want to move
// changedCells.delete(cell)
}else{// Clear the wantsToMove flag LATER if we hit a wall (a sprite in the same collisionLayer) or are at the end of the map
// We do this later because we are looping as long as something changed
// cell.clearWantsToMove(sprite)
}break;default:throw new Error("BUG: wantsToMove should have been handled earlier: ".concat(_wantsToMove2));}}}catch(err){_didIteratorError9=true;_iteratorError9=err;}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return!=null){_iterator9.return();}}finally{if(_didIteratorError9){throw _iteratorError9;}}}}}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return!=null){_iterator8.return();}}finally{if(_didIteratorError8){throw _iteratorError8;}}}}while(somethingChanged);// Clear the wantsToMove from all remaining cells
var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{for(var _iterator10=changedCells[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10=(_step10=_iterator10.next()).done);_iteratorNormalCompletion10=true){var _cell=_step10.value;var _iteratorNormalCompletion11=true;var _didIteratorError11=false;var _iteratorError11=undefined;try{for(var _iterator11=_cell.getSpriteAndWantsToMoves()[Symbol.iterator](),_step11;!(_iteratorNormalCompletion11=(_step11=_iterator11.next()).done);_iteratorNormalCompletion11=true){var _step11$value=_slicedToArray(_step11.value,1),_sprite8=_step11$value[0];_cell.clearWantsToMove(_sprite8);}}catch(err){_didIteratorError11=true;_iteratorError11=err;}finally{try{if(!_iteratorNormalCompletion11&&_iterator11.return!=null){_iterator11.return();}}finally{if(_didIteratorError11){throw _iteratorError11;}}}}}catch(err){_didIteratorError10=true;_iteratorError10=err;}finally{try{if(!_iteratorNormalCompletion10&&_iterator10.return!=null){_iterator10.return();}}finally{if(_didIteratorError10){throw _iteratorError10;}}}return{movedCells:movedCells,a11yMessages:a11yMessages};}// Used for UNDO and RESTART
},{key:"createSnapshot",value:function createSnapshot(){return this.getCurrentLevel().getCells().map(function(row){return row.map(function(cell){return cell.toSnapshot();});});}},{key:"pressDir",value:function pressDir(direction){// Should disable keypresses if `AGAIN` is running.
// It is commented because the didSpritesChange logic is not correct.
// a rule might add a sprite, and then another rule might remove a sprite.
// We need to compare the set of sprites before and after ALL rules ran.
// This will likely be implemented as part of UNDO or CHECKPOINT.
// if (!this.hasAgain()) {
this.pendingPlayerWantsToMove=direction;// }
}},{key:"doRestart",value:function doRestart(){// Add the initial checkpoint to the top (rather than clearing the stack)
// so the player can still "UNDO" after pressing "RESTART"
var snapshot=this.undoStack[0];this.undoStack.push(snapshot);this.applySnapshot(snapshot);}},{key:"doUndo",value:function doUndo(){var snapshot=this.undoStack.pop();if(snapshot&&this.undoStack.length>0){// the 0th entry is the initial load of the level
this.applySnapshot(snapshot);}else if(snapshot){// oops, put the snapshot back on the stack
this.undoStack.push(snapshot);}}},{key:"_setLevel",value:function _setLevel(levelSprites){var _this3=this;var level=new Level();this.currentLevel=level;var spriteCells=levelSprites.map(function(row,rowIndex){return row.map(function(sprites,colIndex){var backgroundSprite=_this3.gameData.getMagicBackgroundSprite();if(backgroundSprite){sprites.add(backgroundSprite);}return new Cell(level,sprites,rowIndex,colIndex);});});level.setCells(spriteCells);// link up all the cells. Loop over all the sprites
// in case they are NO tiles (so the cell is included)
var batchCells=new Map();function spriteSetToKey(sprites){var key=[];var _iteratorNormalCompletion12=true;var _didIteratorError12=false;var _iteratorError12=undefined;try{for(var _iterator12=_toConsumableArray(sprites).map(function(sprite){return sprite.getName();}).sort()[Symbol.iterator](),_step12;!(_iteratorNormalCompletion12=(_step12=_iterator12.next()).done);_iteratorNormalCompletion12=true){var spriteName=_step12.value;key.push(spriteName);}}catch(err){_didIteratorError12=true;_iteratorError12=err;}finally{try{if(!_iteratorNormalCompletion12&&_iterator12.return!=null){_iterator12.return();}}finally{if(_didIteratorError12){throw _iteratorError12;}}}return key.join(' ');}var allCells=this.getCells();// But first, fill up any empty condition brackets with ALL THE CELLS
var _iteratorNormalCompletion13=true;var _didIteratorError13=false;var _iteratorError13=undefined;try{for(var _iterator13=this.gameData.rules[Symbol.iterator](),_step13;!(_iteratorNormalCompletion13=(_step13=_iterator13.next()).done);_iteratorNormalCompletion13=true){var rule=_step13.value;rule.addCellsToEmptyRules(allCells);}}catch(err){_didIteratorError13=true;_iteratorError13=err;}finally{try{if(!_iteratorNormalCompletion13&&_iterator13.return!=null){_iterator13.return();}}finally{if(_didIteratorError13){throw _iteratorError13;}}}var _iteratorNormalCompletion14=true;var _didIteratorError14=false;var _iteratorError14=undefined;try{for(var _iterator14=allCells[Symbol.iterator](),_step14;!(_iteratorNormalCompletion14=(_step14=_iterator14.next()).done);_iteratorNormalCompletion14=true){var cell=_step14.value;var _key=spriteSetToKey(cell.getSpritesAsSet());var batch=batchCells.get(_key);if(!batch){batch=[];batchCells.set(_key,batch);}batch.push(cell);}// Print progress while loading up the Cells
}catch(err){_didIteratorError14=true;_iteratorError14=err;}finally{try{if(!_iteratorNormalCompletion14&&_iterator14.return!=null){_iterator14.return();}}finally{if(_didIteratorError14){throw _iteratorError14;}}}var i=0;var _iteratorNormalCompletion15=true;var _didIteratorError15=false;var _iteratorError15=undefined;try{for(var _iterator15=batchCells[Symbol.iterator](),_step15;!(_iteratorNormalCompletion15=(_step15=_iterator15.next()).done);_iteratorNormalCompletion15=true){var _step15$value=_slicedToArray(_step15.value,2),_key2=_step15$value[0],cells=_step15$value[1];if(batchCells.size>100&&i%10===0||cells.length>100){this.emit('loading-cells',{cellStart:i,cellEnd:i+cells.length,cellTotal:allCells.length,key:_key2});}// All Cells contain the same set of sprites so just pull out the 1st one
var _iteratorNormalCompletion16=true;var _didIteratorError16=false;var _iteratorError16=undefined;try{for(var _iterator16=this.gameData.objects[Symbol.iterator](),_step16;!(_iteratorNormalCompletion16=(_step16=_iterator16.next()).done);_iteratorNormalCompletion16=true){var _sprite9=_step16.value;var cellSprites=cells[0].getSpritesAsSet();var hasSprite=cellSprites.has(_sprite9);if(hasSprite||_sprite9.hasNegationTileWithModifier()){if(hasSprite){_sprite9.addCells(_sprite9,cells,_util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].STATIONARY);}else{_sprite9.removeCells(_sprite9,cells);}}}}catch(err){_didIteratorError16=true;_iteratorError16=err;}finally{try{if(!_iteratorNormalCompletion16&&_iterator16.return!=null){_iterator16.return();}}finally{if(_didIteratorError16){throw _iteratorError16;}}}i+=cells.length;}}catch(err){_didIteratorError15=true;_iteratorError15=err;}finally{try{if(!_iteratorNormalCompletion15&&_iterator15.return!=null){_iterator15.return();}}finally{if(_didIteratorError15){throw _iteratorError15;}}}return level;}},{key:"getCells",value:function getCells(){return Object(_util__WEBPACK_IMPORTED_MODULE_5__["_flatten"])(this.getCurrentLevel().getCells());}},{key:"tickUpdateCellsLate",value:function tickUpdateCellsLate(){_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(function(){return"applying late rules";});return this._tickUpdateCells(this.gameData.rules.filter(function(r){return r.isLate();}));}},{key:"_tickUpdateCells",value:function _tickUpdateCells(rules){var changedMutations=new Set();var a11yMessages=[];var evaluatedRules=[];if(!this.currentLevel){throw new Error("BUG: Level Cells do not exist yet");}var _iteratorNormalCompletion17=true;var _didIteratorError17=false;var _iteratorError17=undefined;try{for(var _iterator17=rules[Symbol.iterator](),_step17;!(_iteratorNormalCompletion17=(_step17=_iterator17.next()).done);_iteratorNormalCompletion17=true){var rule=_step17.value;var cellMutations=rule.evaluate(this.currentLevel,false/*evaluate all rules*/);if(cellMutations.length>0){evaluatedRules.push(rule);}var _iteratorNormalCompletion19=true;var _didIteratorError19=false;var _iteratorError19=undefined;try{for(var _iterator19=cellMutations[Symbol.iterator](),_step19;!(_iteratorNormalCompletion19=(_step19=_iterator19.next()).done);_iteratorNormalCompletion19=true){var mutation=_step19.value;changedMutations.add(mutation);var _iteratorNormalCompletion20=true;var _didIteratorError20=false;var _iteratorError20=undefined;try{for(var _iterator20=mutation.messages[Symbol.iterator](),_step20;!(_iteratorNormalCompletion20=(_step20=_iterator20.next()).done);_iteratorNormalCompletion20=true){var message=_step20.value;a11yMessages.push(message);}}catch(err){_didIteratorError20=true;_iteratorError20=err;}finally{try{if(!_iteratorNormalCompletion20&&_iterator20.return!=null){_iterator20.return();}}finally{if(_didIteratorError20){throw _iteratorError20;}}}}}catch(err){_didIteratorError19=true;_iteratorError19=err;}finally{try{if(!_iteratorNormalCompletion19&&_iterator19.return!=null){_iterator19.return();}}finally{if(_didIteratorError19){throw _iteratorError19;}}}}// We may have mutated the same cell 4 times (e.g. [Player]->[>Player]) so consolidate
}catch(err){_didIteratorError17=true;_iteratorError17=err;}finally{try{if(!_iteratorNormalCompletion17&&_iterator17.return!=null){_iterator17.return();}}finally{if(_didIteratorError17){throw _iteratorError17;}}}var changedCells=new Set();var commands=new Set();var _iteratorNormalCompletion18=true;var _didIteratorError18=false;var _iteratorError18=undefined;try{for(var _iterator18=changedMutations[Symbol.iterator](),_step18;!(_iteratorNormalCompletion18=(_step18=_iterator18.next()).done);_iteratorNormalCompletion18=true){var _mutation=_step18.value;if(_mutation.hasCell()){changedCells.add(_mutation.getCell());}else{commands.add(_mutation.getCommand());}}}catch(err){_didIteratorError18=true;_iteratorError18=err;}finally{try{if(!_iteratorNormalCompletion18&&_iterator18.return!=null){_iterator18.return();}}finally{if(_didIteratorError18){throw _iteratorError18;}}}return{evaluatedRules:evaluatedRules,changedCells:changedCells,commands:commands,mutations:changedMutations,a11yMessages:a11yMessages};}},{key:"tickNormal",value:function tickNormal(){var changedCellMutations=new Set();var initialSnapshot=this.createSnapshot();if(this.pendingPlayerWantsToMove){this.takeSnapshot(initialSnapshot);_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug("=======================\nTurn starts with input of ".concat(this.pendingPlayerWantsToMove.toLowerCase(),"."));var t=this.gameData.getPlayer();var _iteratorNormalCompletion21=true;var _didIteratorError21=false;var _iteratorError21=undefined;try{for(var _iterator21=t.getCellsThatMatch(Object(_util__WEBPACK_IMPORTED_MODULE_5__["_flatten"])(this.getCurrentLevel().getCells()))[Symbol.iterator](),_step21;!(_iteratorNormalCompletion21=(_step21=_iterator21.next()).done);_iteratorNormalCompletion21=true){var cell=_step21.value;var _iteratorNormalCompletion22=true;var _didIteratorError22=false;var _iteratorError22=undefined;try{for(var _iterator22=t.getSpritesThatMatch(cell)[Symbol.iterator](),_step22;!(_iteratorNormalCompletion22=(_step22=_iterator22.next()).done);_iteratorNormalCompletion22=true){var _sprite10=_step22.value;cell.updateSprite(_sprite10,inputButtonToRuleDirection(this.pendingPlayerWantsToMove));changedCellMutations.add(cell);}}catch(err){_didIteratorError22=true;_iteratorError22=err;}finally{try{if(!_iteratorNormalCompletion22&&_iterator22.return!=null){_iterator22.return();}}finally{if(_didIteratorError22){throw _iteratorError22;}}}}}catch(err){_didIteratorError21=true;_iteratorError21=err;}finally{try{if(!_iteratorNormalCompletion21&&_iterator21.return!=null){_iterator21.return();}}finally{if(_didIteratorError21){throw _iteratorError21;}}}this.pendingPlayerWantsToMove=null;}else{_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(function(){return"Turn starts with no input.";});}var _this$tickUpdateCells=this.tickUpdateCells(),changedCellMutations2=_this$tickUpdateCells.changedCells,evaluatedRules=_this$tickUpdateCells.evaluatedRules,commands=_this$tickUpdateCells.commands,mutations=_this$tickUpdateCells.mutations,a11yMessages1=_this$tickUpdateCells.a11yMessages;changedCellMutations=Object(_util__WEBPACK_IMPORTED_MODULE_5__["setAddAll"])(changedCellMutations,changedCellMutations2);// Continue evaluating again rules only when some sprites have changed
// The didSpritesChange logic is not correct.
// a rule might add a sprite, and then another rule might remove a sprite.
// We need to compare the set of sprites before and after ALL rules ran.
// This will likely be implemented as part of UNDO or CHECKPOINT.
var _this$tickMoveSprites=this.tickMoveSprites(new Set(changedCellMutations.keys())),movedCells=_this$tickMoveSprites.movedCells,a11yMessages2=_this$tickMoveSprites.a11yMessages;var _this$tickUpdateCells2=this.tickUpdateCellsLate(),changedCellsLate=_this$tickUpdateCells2.changedCells,evaluatedRulesLate=_this$tickUpdateCells2.evaluatedRules,commandsLate=_this$tickUpdateCells2.commands,mutationsLate=_this$tickUpdateCells2.mutations,a11yMessages3=_this$tickUpdateCells2.a11yMessages;var allCommands=[].concat(_toConsumableArray(commands),_toConsumableArray(commandsLate));var didCancel=!!allCommands.filter(function(c){return c.type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].CANCEL;})[0];if(didCancel){this.hasAgainThatNeedsToRun=false;if(this.undoStack.length>0){this.applySnapshot(this.undoStack[this.undoStack.length-1]);}return{changedCells:new Set(),checkpoint:null,commands:new Set(),evaluatedRules:evaluatedRules,mutations:new Set(),a11yMessages:[]};}var checkpoint=null;var didCheckpoint=!!allCommands.find(function(c){return c.type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].CHECKPOINT;});if(didCheckpoint){this.undoStack=[];checkpoint=this.createSnapshot();this.takeSnapshot(checkpoint);}// set this only if we did not CANCEL and if some cell changed
var changedCells=Object(_util__WEBPACK_IMPORTED_MODULE_5__["setAddAll"])(Object(_util__WEBPACK_IMPORTED_MODULE_5__["setAddAll"])(changedCellMutations,changedCellsLate),movedCells);if(allCommands.find(function(c){return c.type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["COMMAND_TYPE"].AGAIN;})){// Compare all the cells to the top of the undo stack. If it does not differ
this.hasAgainThatNeedsToRun=this.doSnapshotsDiffer(initialSnapshot,this.createSnapshot());}return{changedCells:changedCells,evaluatedRules:evaluatedRules.concat(evaluatedRulesLate),commands:allCommands,mutations:new Set([].concat(_toConsumableArray(mutations),_toConsumableArray(mutationsLate))),a11yMessages:[].concat(_toConsumableArray(a11yMessages1),_toConsumableArray(a11yMessages2),_toConsumableArray(a11yMessages3))};}},{key:"isWinning",value:function isWinning(){var _this4=this;var conditionsSatisfied=this.gameData.winConditions.length>0;this.gameData.winConditions.forEach(function(winCondition){if(!winCondition.isSatisfied(_this4.getCells())){conditionsSatisfied=false;}});return conditionsSatisfied;}},{key:"takeSnapshot",value:function takeSnapshot(snapshot){this.undoStack.push(snapshot);}},{key:"applySnapshot",value:function applySnapshot(snpashot){var cells=this.getCurrentLevel().getCells();for(var rowIndex=0;rowIndex<cells.length;rowIndex++){var row=cells[rowIndex];var snapshotRow=snpashot[rowIndex];for(var colIndex=0;colIndex<row.length;colIndex++){var cell=row[colIndex];var state=snapshotRow[colIndex];cell.fromSnapshot(state);}}}},{key:"doSnapshotsDiffer",value:function doSnapshotsDiffer(snapshot1,snapshot2){for(var rowIndex=0;rowIndex<snapshot1.length;rowIndex++){for(var colIndex=0;colIndex<snapshot1[0].length;colIndex++){var sprites1=snapshot1[rowIndex][colIndex];var sprites2=snapshot2[rowIndex][colIndex];if(!Object(_util__WEBPACK_IMPORTED_MODULE_5__["setEquals"])(sprites1,sprites2)){return true;}}}return false;}}]);return LevelEngine;}(eventemitter2__WEBPACK_IMPORTED_MODULE_0__["EventEmitter2"]);/**
 * Maintains the state of the game. Here is an example flow:
 *
 * ```js
 * const engine = new GameEngine(gameData)
 * engine.setLevel(0)
 * engine.pressRight()
 * engine.tick()
 * engine.tick()
 * engine.pressUp()
 * engine.tick()
 * engine.pressUndo()
 * engine.tick()
 * ```
 */var GameEngine=/*#__PURE__*/function(){function GameEngine(gameData,handler){_classCallCheck(this,GameEngine);this.currentLevelNum=-1234567;this.handler=handler;this.levelEngine=new LevelEngine(gameData);}_createClass(GameEngine,[{key:"on",value:function on(eventName,handler){this.levelEngine.on(eventName,handler);}},{key:"getGameData",value:function getGameData(){return this.levelEngine.gameData;}},{key:"getCurrentLevelCells",value:function getCurrentLevelCells(){return this.levelEngine.getCurrentLevel().getCells();}},{key:"getCurrentLevel",value:function getCurrentLevel(){return this.getGameData().levels[this.getCurrentLevelNum()];}},{key:"getCurrentLevelNum",value:function getCurrentLevelNum(){return this.currentLevelNum;}},{key:"hasAgain",value:function hasAgain(){return this.levelEngine.hasAgain();}},{key:"setLevel",value:function setLevel(levelNum,checkpoint){this.levelEngine.hasAgainThatNeedsToRun=false;this.currentLevelNum=levelNum;var level=this.getGameData().levels[levelNum];if(level.type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["LEVEL_TYPE"].MAP){this.levelEngine.setLevel(levelNum);if(checkpoint){this.loadSnapshotFromJSON(checkpoint);}this.handler.onLevelChange(this.currentLevelNum,this.levelEngine.getCurrentLevel().getCells(),null);}else{this.handler.onLevelChange(this.currentLevelNum,null,level.message);}}},{key:"tick",value:function(){var _tick=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var currentLevel,didWinGameInMessage,hasAgain,previousPending,_this$levelEngine$tic,changedCells,hasCheckpoint,soundToPlay,messageToShow,isWinning,hasRestart,a11yMessages,checkpoint,didWinGame;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:// When the current level is a Message, wait until the user presses ACTION
currentLevel=this.getCurrentLevel();if(!(currentLevel.type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["LEVEL_TYPE"].MESSAGE)){_context.next=8;break;}_context.next=4;return this.handler.onMessage(currentLevel.message);case 4:didWinGameInMessage=false;if(this.currentLevelNum===this.levelEngine.gameData.levels.length-1){this.handler.onWin();didWinGameInMessage=true;}else{this.setLevel(this.currentLevelNum+1,null/*no checkpoint*/);}// clear any keys that were pressed
this.levelEngine.pendingPlayerWantsToMove=null;return _context.abrupt("return",{changedCells:new Set(),didWinGame:didWinGameInMessage,didLevelChange:true,wasAgainTick:false});case 8:hasAgain=this.levelEngine.hasAgain();if(!(!hasAgain&&!(this.levelEngine.gameData.metadata.realtimeInterval||this.levelEngine.pendingPlayerWantsToMove))){_context.next=11;break;}return _context.abrupt("return",{changedCells:new Set(),didWinGame:false,didLevelChange:false,wasAgainTick:false});case 11:previousPending=this.levelEngine.pendingPlayerWantsToMove;_this$levelEngine$tic=this.levelEngine.tick(),changedCells=_this$levelEngine$tic.changedCells,hasCheckpoint=_this$levelEngine$tic.hasCheckpoint,soundToPlay=_this$levelEngine$tic.soundToPlay,messageToShow=_this$levelEngine$tic.messageToShow,isWinning=_this$levelEngine$tic.isWinning,hasRestart=_this$levelEngine$tic.hasRestart,a11yMessages=_this$levelEngine$tic.a11yMessages;if(previousPending&&!this.levelEngine.pendingPlayerWantsToMove){this.handler.onPress(previousPending);}checkpoint=hasCheckpoint?this.saveSnapshotToJSON():null;if(!hasRestart){_context.next=18;break;}this.handler.onTick(changedCells,checkpoint,hasAgain,a11yMessages);return _context.abrupt("return",{changedCells:changedCells,didWinGame:false,didLevelChange:false,wasAgainTick:false});case 18:hasAgain=this.levelEngine.hasAgain();this.handler.onTick(changedCells,checkpoint,hasAgain,a11yMessages);didWinGame=false;if(isWinning){if(this.currentLevelNum===this.levelEngine.gameData.levels.length-1){didWinGame=true;this.handler.onWin();}else{this.setLevel(this.currentLevelNum+1,null/*no checkpoint*/);}}if(!soundToPlay){_context.next=25;break;}_context.next=25;return this.handler.onSound(soundToPlay);case 25:if(!messageToShow){_context.next=28;break;}_context.next=28;return this.handler.onMessage(messageToShow);case 28:return _context.abrupt("return",{changedCells:changedCells,didWinGame:didWinGame,didLevelChange:isWinning,wasAgainTick:hasAgain});case 29:case"end":return _context.stop();}}},_callee,this);}));function tick(){return _tick.apply(this,arguments);}return tick;}()},{key:"press",value:function press(direction){this.levelEngine.press(direction);}},{key:"saveSnapshotToJSON",value:function saveSnapshotToJSON(){return this.getCurrentLevelCells().map(function(row){return row.map(function(cell){return _toConsumableArray(cell.toSnapshot()).map(function(s){return s.getName();});});});}},{key:"loadSnapshotFromJSON",value:function loadSnapshotFromJSON(json){var _this5=this;json.forEach(function(rowSave,rowIndex){rowSave.forEach(function(cellSave,colIndex){var cell=_this5.levelEngine.getCurrentLevel().getCell(rowIndex,colIndex);var spritesToHave=cellSave.map(function(spriteName){var sprite=_this5.getGameData()._getSpriteByName(spriteName);if(sprite){return sprite;}else{throw new Error("BUG: Could not find sprite to add named ".concat(spriteName));}});cell.fromSnapshot(new Set(spritesToHave));});});}},{key:"isCurrentLevelAMessage",value:function isCurrentLevelAMessage(){return this.getCurrentLevel().type===_parser_astTypes__WEBPACK_IMPORTED_MODULE_3__["LEVEL_TYPE"].MESSAGE;}}]);return GameEngine;}();function inputButtonToRuleDirection(button){switch(button){case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].UP:return _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].UP;case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].DOWN:return _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].DOWN;case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].LEFT:return _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].LEFT;case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].RIGHT:return _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].RIGHT;case _util__WEBPACK_IMPORTED_MODULE_5__["INPUT_BUTTON"].ACTION:return _util__WEBPACK_IMPORTED_MODULE_5__["RULE_DIRECTION"].ACTION;default:throw new Error("BUG: Invalid input button at this point. Only up/down/left/right/action are allowed. \"".concat(button,"\""));}}

/***/ }),

/***/ "./src/index-webworker.ts":
/*!********************************!*\
  !*** ./src/index-webworker.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine */ "./src/engine.ts");
/* harmony import */ var _models_rule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/rule */ "./src/models/rule.ts");
/* harmony import */ var _parser_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser/parser */ "./src/parser/parser.ts");
/* harmony import */ var _parser_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parser/serializer */ "./src/parser/serializer.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.ts");
function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}// tslint:disable-line:no-implicit-dependencies
var currentEngine=null;var gameLoop=null;var awaitingMessage=false;var receivedMessage=false;var lastTick=0;var textEncoder=new TextEncoder();var textDecoder=new TextDecoder();onmessage=function onmessage(event){var msg=event.data;switch(msg.type){case _util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_GAME_CHANGE:loadGame(textDecoder.decode(msg.code),msg.level,msg.checkpoint);break;case _util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].PAUSE:postMessage({type:msg.type,payload:pauseGame()});break;case _util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].RESUME:postMessage({type:msg.type,payload:resumeGame()});break;case _util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].PRESS:postMessage({type:msg.type,payload:press(msg.button)});break;case _util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].CLOSE:postMessage({type:msg.type,payload:closeGame()});break;case _util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_MESSAGE_DONE:receivedMessage=true;break;default:throw new Error("ERROR: Unsupported webworker message type \"".concat(JSON.stringify(event.data),"\""));}};var getEngine=function getEngine(){if(!currentEngine){throw new Error("Game has not been loaded yet");}return currentEngine;};// This uses setTimeout because when a MESSAGE_DONE is received, we need to resume the game
var runPlayLoop=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(gameLoop){clearTimeout(gameLoop);gameLoop=null;}if(!awaitingMessage){_context.next=3;break;}return _context.abrupt("return");case 3:if(!Object(_util__WEBPACK_IMPORTED_MODULE_5__["shouldTick"])(getEngine().getGameData().metadata,lastTick)){_context.next=7;break;}lastTick=Date.now();_context.next=7;return tick();case 7:gameLoop=setTimeout(runPlayLoop,20);case 8:case"end":return _context.stop();}}},_callee,this);}));return function runPlayLoop(){return _ref.apply(this,arguments);};}();var previousMessage='';// a dev-invariant checker that ensures we do not show the same message twice
var Handler=/*#__PURE__*/function(){function Handler(){_classCallCheck(this,Handler);}_createClass(Handler,[{key:"onGameChange",value:function onGameChange(gameData){var jsonStr=JSON.stringify(new _parser_serializer__WEBPACK_IMPORTED_MODULE_4__["default"](gameData).toJson());var encoder=new TextEncoder();var transferableArray=encoder.encode(jsonStr).buffer;postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_GAME_CHANGE,payload:transferableArray},[transferableArray]);}},{key:"onPress",value:function onPress(dir){if(!dir){throw new Error("BUG: No direction provided to onPress");}postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_PRESS,direction:dir});}},{key:"onMessage",value:function(){var _onMessage=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(msg){return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:if(!(previousMessage===msg)){_context2.next=2;break;}throw new Error("BUG: Should not show the same message twice. \"".concat(msg,"\""));case 2:previousMessage=msg;// Wait until the user dismissed the message
if(!awaitingMessage){_context2.next=5;break;}throw new Error("BUG: should not already be awaiting a message");case 5:awaitingMessage=true;receivedMessage=false;pauseGame();postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_MESSAGE,message:msg});_context2.next=11;return Object(_util__WEBPACK_IMPORTED_MODULE_5__["pollingPromise"])(50,function(){return receivedMessage;});case 11:awaitingMessage=false;// resumeGame() No need to resume since we are inside a `await tick()` and at the end of it it will start back up (via a call to setTimeout)
case 12:case"end":return _context2.stop();}}},_callee2,this);}));function onMessage(_x){return _onMessage.apply(this,arguments);}return onMessage;}()},{key:"onLevelChange",value:function onLevelChange(level,cells,message){var newCells=null;if(cells){newCells=cells.map(function(row){return toCellsJson(row);});}postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_LEVEL_CHANGE,level:level,cells:newCells,message:message});}},{key:"onWin",value:function onWin(){postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_WIN});}},{key:"onSound",value:function(){var _onSound=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee3(sound){return regeneratorRuntime.wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_SOUND,soundCode:sound.soundCode});case 1:case"end":return _context3.stop();}}},_callee3,this);}));function onSound(_x2){return _onSound.apply(this,arguments);}return onSound;}()},{key:"onTick",value:function onTick(changedCells,checkpoint,hasAgain,a11yMessages){postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_TICK,changedCells:toCellsJson(changedCells),checkpoint:checkpoint,hasAgain:hasAgain,a11yMessages:a11yMessages.map(toA11yMessageJson)});}},{key:"onPause",value:function onPause(){postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_PAUSE});}},{key:"onResume",value:function onResume(){postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_RESUME});}}]);return Handler;}();var loadGame=function loadGame(code,level,checkpoint){pauseGame();previousMessage='';// clear this dev-invariant-tester field since it is a new game
var _Parser$parse=_parser_parser__WEBPACK_IMPORTED_MODULE_3__["default"].parse(code),data=_Parser$parse.data;var jsonStr=JSON.stringify(new _parser_serializer__WEBPACK_IMPORTED_MODULE_4__["default"](data).toJson());postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_GAME_CHANGE,payload:textEncoder.encode(jsonStr).buffer});currentEngine=new _engine__WEBPACK_IMPORTED_MODULE_1__["GameEngine"](data,new Handler());currentEngine.setLevel(level,checkpoint);runPlayLoop();// tslint:disable-line:no-floating-promises
};var pauseGame=function pauseGame(){if(gameLoop!==null){clearTimeout(gameLoop);gameLoop=null;postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_PAUSE});}};var resumeGame=function resumeGame(){postMessage({type:_util__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_TYPE"].ON_RESUME});runPlayLoop();// tslint:disable-line:no-floating-promises
};var tick=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee4(){var engine,_ref3,changedCells,didWinGame,didLevelChange,wasAgainTick;return regeneratorRuntime.wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:engine=getEngine();_context4.next=3;return engine.tick();case 3:_ref3=_context4.sent;changedCells=_ref3.changedCells;didWinGame=_ref3.didWinGame;didLevelChange=_ref3.didLevelChange;wasAgainTick=_ref3.wasAgainTick;return _context4.abrupt("return",{changedCells:toCellsJson(changedCells),didWinGame:didWinGame,didLevelChange:didLevelChange,wasAgainTick:wasAgainTick});case 9:case"end":return _context4.stop();}}},_callee4,this);}));return function tick(){return _ref2.apply(this,arguments);};}();var toCellsJson=function toCellsJson(cells){return _toConsumableArray(cells).map(toCellJson);};var toCellJson=function toCellJson(cell){var colIndex=cell.colIndex,rowIndex=cell.rowIndex;return{colIndex:colIndex,rowIndex:rowIndex,spriteNames:cell.getSprites().map(function(sprite){return sprite.getName();})};};var toA11yMessageJson=function toA11yMessageJson(message){switch(message.type){case _models_rule__WEBPACK_IMPORTED_MODULE_2__["A11Y_MESSAGE_TYPE"].ADD:return _objectSpread({},message,{cell:toCellJson(message.cell),sprites:_toConsumableArray(message.sprites).map(toSpriteName)});case _models_rule__WEBPACK_IMPORTED_MODULE_2__["A11Y_MESSAGE_TYPE"].MOVE:return _objectSpread({},message,{oldCell:toCellJson(message.oldCell),newCell:toCellJson(message.newCell),sprite:toSpriteName(message.sprite)});case _models_rule__WEBPACK_IMPORTED_MODULE_2__["A11Y_MESSAGE_TYPE"].REMOVE:return _objectSpread({},message,{cell:toCellJson(message.cell),sprites:_toConsumableArray(message.sprites).map(toSpriteName)});case _models_rule__WEBPACK_IMPORTED_MODULE_2__["A11Y_MESSAGE_TYPE"].REPLACE:return _objectSpread({},message,{cell:toCellJson(message.cell),replacements:_toConsumableArray(message.replacements).map(function(_ref4){var oldSprite=_ref4.oldSprite,newSprite=_ref4.newSprite;return{oldSprite:toSpriteName(oldSprite),newSprite:toSpriteName(newSprite)};})});}};var toSpriteName=function toSpriteName(sprite){return sprite.getName();};var press=function press(button){return getEngine().press(button);};var closeGame=function closeGame(){pauseGame();currentEngine=null;};

/***/ }),

/***/ "./src/letters.ts":
/*!************************!*\
  !*** ./src/letters.ts ***!
  \************************/
/*! exports provided: getLetterSprites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLetterSprites", function() { return getLetterSprites; });
/* harmony import */ var _models_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/colors */ "./src/models/colors.ts");
/* harmony import */ var _models_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/tile */ "./src/models/tile.ts");
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var letters=new Map();function toSprite(source,char,pixels){var white=new _models_colors__WEBPACK_IMPORTED_MODULE_0__["HexColor"](source,'#ffffff');var black=new _models_colors__WEBPACK_IMPORTED_MODULE_0__["HexColor"](source,'#000000');var pixels2=pixels.map(function(row){return row.map(function(index){if(index===0){return black;}else{return white;}});});return new _models_tile__WEBPACK_IMPORTED_MODULE_1__["GameSpritePixels"](source,"letterchar=\"".concat(char,"\""),'',pixels2);}function makeLetter(char,pixels){letters.set(char,pixels);}function getLetterSprites(source){var sprites=new Map();var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=letters.entries()[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _step$value=_slicedToArray(_step.value,2),char=_step$value[0],pixels=_step$value[1];var sprite=toSprite(source,char,pixels);sprites.set(char,sprite);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return sprites;}makeLetter('a',[[0,0,0,0,0],[0,1,1,1,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,1,0]]);makeLetter('b',[[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[0,1,1,0,0]]);makeLetter('c',[[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[0,1,1,1,0]]);makeLetter('d',[[0,0,0,1,0],[0,0,0,1,0],[0,1,1,1,0],[1,0,0,1,0],[0,1,1,0,0]]);makeLetter('e',[[0,1,1,0,0],[1,0,0,1,0],[1,1,1,0,0],[1,0,0,0,0],[0,1,1,0,0]]);makeLetter('f',[[0,0,0,0,0],[0,0,1,1,0],[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0]]);makeLetter('g',[[0,1,1,0,0],[1,0,0,1,0],[0,1,1,1,0],[0,0,0,1,0],[0,1,1,0,0]]);makeLetter('h',[[1,0,0,0,0],[1,0,0,0,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0]]);makeLetter('i',[[0,0,1,0,0],[0,0,0,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,1,1,1,0]]);makeLetter('j',[[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[1,0,1,0,0],[0,1,0,0,0]]);makeLetter('k',[[1,0,0,0,0],[1,0,0,1,0],[1,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0]]);makeLetter('l',[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,1,0],[0,1,1,0,0]]);makeLetter('m',[[0,0,0,0,0],[0,1,0,1,0],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1]]);makeLetter('n',[[0,0,0,0,0],[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0]]);makeLetter('o',[[0,0,0,0,0],[0,1,1,0,0],[1,0,0,1,0],[1,0,0,1,0],[0,1,1,0,0]]);makeLetter('p',[[0,0,0,0,0],[0,1,1,0,0],[1,0,0,1,0],[1,1,1,0,0],[1,0,0,0,0]]);makeLetter('q',[[0,0,0,0,0],[0,1,1,0,0],[1,0,0,1,0],[0,1,1,1,0],[0,0,0,1,0]]);makeLetter('r',[[0,0,0,0,0],[0,1,1,1,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0]]);makeLetter('s',[[0,1,1,1,0],[1,0,0,0,0],[0,1,1,0,0],[0,0,0,1,0],[1,1,1,0,0]]);makeLetter('t',[[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,1,0,0,1],[0,0,1,1,0]]);makeLetter('u',[[0,0,0,0,0],[1,0,0,1,0],[1,0,0,1,0],[1,0,0,1,0],[1,1,1,0,0]]);makeLetter('v',[[0,0,0,0,0],[1,0,0,1,0],[1,0,1,0,0],[1,1,0,0,0],[1,0,0,0,0]]);makeLetter('w',[[0,0,0,0,0],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]]);makeLetter('x',[[0,0,0,0,0],[1,0,0,1,0],[0,1,1,0,0],[0,1,1,0,0],[1,0,0,1,0]]);makeLetter('y',[[1,0,0,1,0],[1,0,0,1,0],[0,1,1,1,0],[0,0,0,1,0],[1,1,1,0,0]]);makeLetter('z',[[0,0,0,0,0],[1,1,1,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,0]]);makeLetter('A',[[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]]);makeLetter('B',[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0]]);makeLetter('C',[[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]]);makeLetter('D',[[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0]]);makeLetter('E',[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1]]);makeLetter('F',[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]]);makeLetter('G',[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,1,1],[1,0,0,0,1],[0,1,1,1,1]]);makeLetter('H',[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1]]);makeLetter('I',[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]]);makeLetter('J',[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,0,0]]);makeLetter('K',[[1,0,0,0,1],[1,0,1,1,0],[1,1,0,0,0],[1,0,1,1,0],[1,0,0,0,1]]);makeLetter('L',[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[1,1,1,1,1]]);makeLetter('M',[[1,1,1,1,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1]]);makeLetter('N',[[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,0,1]]);makeLetter('O',[[1,1,1,1,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]);makeLetter('P',[[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1],[1,0,0,0,0],[1,0,0,0,0]]);makeLetter('Q',[[1,1,1,1,1],[1,0,0,0,1],[1,1,1,1,1],[0,0,0,0,1],[0,0,0,0,1]]);makeLetter('R',[[1,1,1,1,0],[1,0,0,0,1],[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1]]);makeLetter('S',[[0,1,1,1,1],[1,0,0,0,0],[0,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]]);makeLetter('T',[[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]);makeLetter('U',[[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1]]);makeLetter('V',[[1,0,0,0,1],[0,1,0,1,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,1,0,0]]);makeLetter('W',[[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]]);makeLetter('X',[[1,0,0,0,1],[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[1,0,0,0,1]]);makeLetter('Y',[[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0]]);makeLetter('Z',[[1,1,1,1,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,1,1,1,1]]);makeLetter('0',[[1,1,1,1,1],[1,0,0,1,1],[1,0,1,0,1],[1,1,0,0,1],[1,1,1,1,1]]);makeLetter('1',[[1,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]]);makeLetter('2',[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,1]]);makeLetter('3',[[1,1,1,1,0],[0,0,0,0,1],[0,0,1,1,0],[0,0,0,0,1],[1,1,1,1,0]]);makeLetter('4',[[1,0,0,0,0],[1,0,0,0,0],[1,0,0,1,0],[1,1,1,1,1],[0,0,0,1,0]]);makeLetter('5',[[1,1,1,1,1],[1,0,0,0,0],[1,1,1,1,0],[0,0,0,0,1],[1,1,1,1,0]]);makeLetter('6',[[0,1,1,1,0],[1,0,0,0,0],[1,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]]);makeLetter('7',[[1,1,1,1,1],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0]]);makeLetter('8',[[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,0]]);makeLetter('9',[[0,1,1,1,0],[1,0,0,0,1],[0,1,1,1,1],[0,0,0,0,1],[0,1,1,1,0]]);makeLetter('.',[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0]]);makeLetter(',',[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,1,1,0,0]]);makeLetter(';',[[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,1,1,0,0]]);makeLetter(':',[[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0],[0,0,0,0,0]]);makeLetter('?',[[0,1,1,1,0],[1,0,0,0,1],[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0]]);makeLetter('!',[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,1,0,0]]);makeLetter('@',[[0,1,1,1,0],[1,0,0,0,1],[1,0,1,1,1],[1,0,0,0,0],[0,1,1,1,0]]);makeLetter('£',[[0,1,1,1,0],[0,1,0,0,1],[1,1,1,0,0],[0,1,0,0,0],[1,1,1,1,1]]);makeLetter('$',[[0,1,1,1,1],[1,0,1,0,0],[0,1,1,1,0],[0,0,1,0,1],[1,1,1,1,0]]);makeLetter('%',[[1,1,0,0,1],[1,1,0,1,0],[0,0,1,0,0],[0,1,0,1,1],[1,0,0,1,1]]);makeLetter('^',[[0,0,1,0,0],[0,1,0,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('&',[[0,1,1,0,0],[1,0,0,0,0],[0,1,0,1,1],[1,0,0,1,0],[0,1,1,0,0]]);makeLetter('*',[[0,1,0,1,0],[0,0,1,0,0],[0,1,0,1,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('(',[[0,0,0,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,1,0]]);makeLetter(')',[[0,1,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,0,0,0]]);makeLetter('+',[[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0]]);makeLetter('-',[[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('_',[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1]]);makeLetter('=',[[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0]]);makeLetter(' ',[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('{',[[0,0,1,1,0],[0,0,1,0,0],[0,1,1,0,0],[0,0,1,0,0],[0,0,1,1,0]]);makeLetter('}',[[0,1,1,0,0],[0,0,1,0,0],[0,0,1,1,0],[0,0,1,0,0],[0,1,1,0,0]]);makeLetter('[',[[0,0,1,1,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,1,0]]);makeLetter(']',[[0,1,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,1,1,0,0]]);makeLetter('\'',[[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('"',[[0,1,0,1,0],[0,1,0,1,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('/',[[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[1,0,0,0,0]]);makeLetter('\\',[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]);makeLetter('|',[[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0]]);makeLetter('<',[[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]]);makeLetter('>',[[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0],[0,0,1,0,0],[0,1,0,0,0]]);makeLetter('~',[[0,0,0,0,0],[0,1,0,0,0],[1,0,1,0,1],[0,0,0,1,0],[0,0,0,0,0]]);makeLetter('`',[[0,1,0,0,0],[0,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]);makeLetter('#',[[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0],[1,1,1,1,1],[0,1,0,1,0]]);

/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/*! exports provided: LOG_LEVEL, logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_LEVEL", function() { return LOG_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var LOG_LEVEL;(function(LOG_LEVEL){LOG_LEVEL["SEVERE"]="SEVERE";LOG_LEVEL["WARN"]="WARN";LOG_LEVEL["INFO"]="INFO";LOG_LEVEL["DEBUG"]="DEBUG";LOG_LEVEL["TRACE"]="TRACE";})(LOG_LEVEL||(LOG_LEVEL={}));var LEVELS=[LOG_LEVEL.SEVERE,LOG_LEVEL.WARN,LOG_LEVEL.INFO,LOG_LEVEL.DEBUG,LOG_LEVEL.TRACE];function toNum(level){return LEVELS.indexOf(level);}function toLevel(level){if(level){switch(level.toUpperCase()){case LOG_LEVEL.SEVERE:return LOG_LEVEL.SEVERE;case LOG_LEVEL.DEBUG:return LOG_LEVEL.DEBUG;case LOG_LEVEL.TRACE:return LOG_LEVEL.TRACE;default:throw new Error("ERROR: Invalid log level. valid levels are ".concat(JSON.stringify(LEVELS)));}}else{return LOG_LEVEL.SEVERE;}}var Logger=/*#__PURE__*/function(){function Logger(){_classCallCheck(this,Logger);this.currentLevelNum=toNum(toLevel(process.env.LOG_LEVEL));}_createClass(Logger,[{key:"isLevel",value:function isLevel(level){return toNum(level)<=this.currentLevelNum;}},{key:"warn",value:function warn(message){this.log(LOG_LEVEL.WARN,message);}},{key:"info",value:function info(message){this.log(LOG_LEVEL.INFO,message);}},{key:"debug",value:function debug(message){this.log(LOG_LEVEL.DEBUG,message);}},{key:"trace",value:function trace(message){this.log(LOG_LEVEL.TRACE,message);}},{key:"logFn",value:function logFn(level,fn){if(this.isLevel(level)){console.warn(fn());// tslint:disable-line:no-console
}}},{key:"log",value:function log(level,message){if(typeof message==='string'){this.logFn(level,function(){return message;});}else{this.logFn(level,message);}}}]);return Logger;}();var logger=new Logger();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/lruCache.ts":
/*!*************************!*\
  !*** ./src/lruCache.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LruCache; });
/* harmony import */ var quick_lru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quick-lru */ "./node_modules/quick-lru/index.js");
/* harmony import */ var quick_lru__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quick_lru__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var LruCache=/*#__PURE__*/function(){function LruCache(maxSize){_classCallCheck(this,LruCache);this.lru=new quick_lru__WEBPACK_IMPORTED_MODULE_0___default.a({maxSize:maxSize});}_createClass(LruCache,[{key:"get",value:function get(key,valueFn){var val=this.lru.get(key);// speed up by combining .has(key) and .get(key)
if(val!==undefined){return val;}var value=valueFn();this.lru.set(key,value);return value;}// has(key: Key) {
//     return key
// }
}]);return LruCache;}();

/***/ }),

/***/ "./src/models/BaseForLines.ts":
/*!************************************!*\
  !*** ./src/models/BaseForLines.ts ***!
  \************************************/
/*! exports provided: getLineAndColumn, BaseForLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineAndColumn", function() { return getLineAndColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseForLines", function() { return BaseForLines; });
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}// Return an object with the line and column information for the given
// offset in `str`.
// From https://github.com/harc/ohm/blob/b88336faf69e7bd89e309931b60445c3dfd495ab/src/util.js#L56
function getLineAndColumn(str,offset){var lineNum=1;var colNum=1;var currOffset=0;var lineStartOffset=0;var nextLine=null;var prevLine=null;var prevLineStartOffset=-1;while(currOffset<offset){var c=str.charAt(currOffset++);if(c==='\n'){lineNum++;colNum=1;prevLineStartOffset=lineStartOffset;lineStartOffset=currOffset;}else if(c!=='\r'){colNum++;}}// Find the end of the target line.
var lineEndOffset=str.indexOf('\n',lineStartOffset);if(lineEndOffset===-1){lineEndOffset=str.length;}else{// Get the next line.
var nextLineEndOffset=str.indexOf('\n',lineEndOffset+1);nextLine=nextLineEndOffset===-1?str.slice(lineEndOffset):str.slice(lineEndOffset,nextLineEndOffset);// Strip leading and trailing EOL char(s).
nextLine=nextLine.replace(/^\r?\n/,'').replace(/\r$/,'');}// Get the previous line.
if(prevLineStartOffset>=0){prevLine=str.slice(prevLineStartOffset,lineStartOffset).replace(/\r?\n$/,'');// Strip trailing EOL char(s).
}// Get the target line, stripping a trailing carriage return if necessary.
var line=str.slice(lineStartOffset,lineEndOffset).replace(/\r$/,'');return{lineNum:lineNum,colNum:colNum,line:line,prevLine:prevLine,nextLine:nextLine};}var BaseForLines=/*#__PURE__*/function(){// tslint:disable-line:variable-name
// tslint:disable-line:variable-name
function BaseForLines(source){_classCallCheck(this,BaseForLines);if(!source){throw new Error("BUG: failed to provide the source when constructing this object");}this.__source=source;this.__coverageCount=null;// This is only used for code coverage
if(true){this.__coverageCount=0;}}_createClass(BaseForLines,[{key:"__getSourceLineAndColumn",value:function __getSourceLineAndColumn(){var s=this.__source;return getLineAndColumn(s.code,s.sourceOffset);}},{key:"toString",value:function toString(){var s=this.__source;var _getLineAndColumn=getLineAndColumn(s.code,s.sourceOffset),lineNum=_getLineAndColumn.lineNum,colNum=_getLineAndColumn.colNum,line=_getLineAndColumn.line;return"".concat(line,"\nSource: ").concat(lineNum,":").concat(colNum);}},{key:"toSourceString",value:function toSourceString(){var s=this.__source;var _getLineAndColumn2=getLineAndColumn(s.code,s.sourceOffset),lineNum=_getLineAndColumn2.lineNum;return s.code.split('\n')[lineNum-1];}// This is mostly used for creating code coverage for the games. So we know which Rules (or objects) are not being matched
},{key:"__getLineAndColumnRange",value:function __getLineAndColumnRange(){var s=this.__source;var _getLineAndColumn3=getLineAndColumn(s.code,s.sourceOffset),lineNum=_getLineAndColumn3.lineNum,colNum=_getLineAndColumn3.colNum;return{start:{line:lineNum,col:colNum},end:{line:lineNum,col:colNum+1}};}},{key:"__incrementCoverage",value:function __incrementCoverage(){if(true){if(!this.__coverageCount){this.__coverageCount=0;}this.__coverageCount++;}}}]);return BaseForLines;}();

/***/ }),

/***/ "./src/models/collisionLayer.ts":
/*!**************************************!*\
  !*** ./src/models/collisionLayer.ts ***!
  \**************************************/
/*! exports provided: CollisionLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionLayer", function() { return CollisionLayer; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _BaseForLines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseForLines */ "./src/models/BaseForLines.ts");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}var collisionIdCounter=0;var CollisionLayer=/*#__PURE__*/function(_BaseForLines){_inherits(CollisionLayer,_BaseForLines);// Used for sorting collision layers for rendering
function CollisionLayer(source,tiles){var _this;_classCallCheck(this,CollisionLayer);_this=_possibleConstructorReturn(this,_getPrototypeOf(CollisionLayer).call(this,source));_this.id=collisionIdCounter++;// Map all the Objects to the layer
tiles.forEach(function(tile){tile.setCollisionLayer(_assertThisInitialized(_assertThisInitialized(_this)));tile._getDescendantTiles().forEach(function(subTile){subTile.setCollisionLayer(_assertThisInitialized(_assertThisInitialized(_this)));});});// build an array of Sprites so we can index to them in a BitSet
_this.sprites=_toConsumableArray(new Set(Object(_util__WEBPACK_IMPORTED_MODULE_0__["_flatten"])(tiles.map(function(t){return t.getSprites();}))));_this.sprites.forEach(function(sprite,index){return sprite.setCollisionLayerAndIndex(_assertThisInitialized(_assertThisInitialized(_this)),index);});return _this;}// isInvalid(): Optional<string> {
//     return null
// }
_createClass(CollisionLayer,[{key:"getBitSetIndexOf",value:function getBitSetIndexOf(sprite){var index=this.sprites.indexOf(sprite);if(index<0){throw new Error("BUG: Sprite is not in this CollisionLayer");}return index;}// bitSetToSprites(bitSet: BitSet) {
//     const ret = []
//     let index = 0
//     for (const sprite of this.sprites) {
//         if (bitSet.get(index)) {
//             ret.push(sprite)
//         }
//         index++
//     }
//     return ret
// }
}]);return CollisionLayer;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_1__["BaseForLines"]);

/***/ }),

/***/ "./src/models/colors.ts":
/*!******************************!*\
  !*** ./src/models/colors.ts ***!
  \******************************/
/*! exports provided: RGB, HexColor, TransparentColor, hexToRgb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGB", function() { return RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexColor", function() { return HexColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransparentColor", function() { return TransparentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony import */ var _BaseForLines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseForLines */ "./src/models/BaseForLines.ts");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var RGB=/*#__PURE__*/function(){function RGB(r,g,b,a){_classCallCheck(this,RGB);this.r=r;this.g=g;this.b=b;this.a=a;}_createClass(RGB,[{key:"isDark",value:function isDark(){return this.r+this.g+this.b<128*3;}}]);return RGB;}();var HexColor=/*#__PURE__*/function(_BaseForLines){_inherits(HexColor,_BaseForLines);function HexColor(source,hex){var _this;_classCallCheck(this,HexColor);_this=_possibleConstructorReturn(this,_getPrototypeOf(HexColor).call(this,source));_this.hex=hex;return _this;}_createClass(HexColor,[{key:"isTransparent",value:function isTransparent(){return false;}},{key:"hasAlpha",value:function hasAlpha(){return this.hex.length>7;/*#123456aa*/}},{key:"toRgb",value:function toRgb(){return hexToRgb(this.hex);}},{key:"toHex",value:function toHex(){return this.hex;}}]);return HexColor;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_0__["BaseForLines"]);var TransparentColor=/*#__PURE__*/function(_BaseForLines2){_inherits(TransparentColor,_BaseForLines2);function TransparentColor(source){_classCallCheck(this,TransparentColor);return _possibleConstructorReturn(this,_getPrototypeOf(TransparentColor).call(this,source));}_createClass(TransparentColor,[{key:"isTransparent",value:function isTransparent(){return true;}},{key:"hasAlpha",value:function hasAlpha(){return false;}},{key:"toRgb",value:function toRgb(){throw new Error('BUG: Transparent colors do not have RGB data');}},{key:"toHex",value:function toHex(){throw new Error('BUG: Transparent colors do not have a hex color value');}}]);return TransparentColor;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_0__["BaseForLines"]);function hexToRgb(hex){// https://stackoverflow.com/a/5624139
// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b;});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);if(result){return new RGB(parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16),result[4]?parseInt(result[4],16)/255:null);}else{throw new Error("BUG: Invalid hex color: '".concat(hex,"'"));}}

/***/ }),

/***/ "./src/models/game.ts":
/*!****************************!*\
  !*** ./src/models/game.ts ***!
  \****************************/
/*! exports provided: GameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameData", function() { return GameData; });
/* harmony import */ var _letters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../letters */ "./src/letters.ts");
/* harmony import */ var _collisionLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collisionLayer */ "./src/models/collisionLayer.ts");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var GameData=/*#__PURE__*/function(){function GameData(source,title,metadata,objects,legends,sounds,collisionLayers,rules,winConditions,levels){_classCallCheck(this,GameData);this.title=title;this.metadata=metadata;this.objects=objects;this.legends=legends;this.sounds=sounds;this.collisionLayers=collisionLayers;this.winConditions=winConditions;this.levels=levels;this.rules=rules;this.cachedBackgroundSprite=null;var firstSpriteWithPixels=this.objects.filter(function(sprite){return sprite.hasPixels();})[0];if(firstSpriteWithPixels){var firstSpritePixels=firstSpriteWithPixels.getPixels(1,1);// We don't care about these args
this.cacheSpriteSize={spriteHeight:firstSpritePixels.length,spriteWidth:firstSpritePixels[0].length};}else{// All the sprites are just a single color, so set the size to be 5x5
this.cacheSpriteSize={spriteHeight:1,spriteWidth:1};}// Create a collisionlayer for the letter sprites
var spriteIndexCounter=this.objects.length;// 1 more than all the game sprites
this.letterSprites=Object(_letters__WEBPACK_IMPORTED_MODULE_0__["getLetterSprites"])(source);var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.letterSprites.values()[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var letterSprite=_step.value;letterSprite.allSpritesBitSetIndex=spriteIndexCounter++;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}var letterCollisionLayer=new _collisionLayer__WEBPACK_IMPORTED_MODULE_1__["CollisionLayer"](source,_toConsumableArray(this.letterSprites.values()));this.collisionLayers.push(letterCollisionLayer);}_createClass(GameData,[{key:"_getSpriteByName",value:function _getSpriteByName(name){return this.objects.find(function(sprite){return sprite.getName().toLowerCase()===name.toLowerCase();})||null;}},{key:"_getTileByName",value:function _getTileByName(name){return this.legends.find(function(tile){return tile.getName().toLowerCase()===name.toLowerCase();});}},{key:"getSpriteByName",value:function getSpriteByName(name){var sprite=this._getSpriteByName(name);if(!sprite){throw new Error("BUG: Could not find sprite \"".concat(name,"\" but expected one to exist."));}return sprite;}},{key:"getTileByName",value:function getTileByName(name){var tile=this._getTileByName(name);if(!tile){throw new Error("BUG: Could not find tile \"".concat(name,"\" but expected one to exist."));}return tile;}},{key:"getMagicBackgroundSprite",value:function getMagicBackgroundSprite(){if(this.cachedBackgroundSprite){return this.cachedBackgroundSprite;}else{var background=this._getSpriteByName('background');if(!background){var legendBackground=this.legends.find(function(tile){return tile.getName().toLowerCase()==='background';});if(legendBackground){if(legendBackground.isOr()){return null;}else{return legendBackground.getSprites()[0];}}}if(!background){throw new Error("ERROR: Game does not have a Background Sprite or Tile");}this.cachedBackgroundSprite=background;return background;}}},{key:"getPlayer",value:function getPlayer(){var player=this._getSpriteByName('player')||this.legends.find(function(tile){return tile.getName().toLowerCase()==='player';});if(!player){throw new Error("BUG: Could not find the Player sprite or tile in the game");}return player;}},{key:"clearCaches",value:function clearCaches(){var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this.rules[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var rule=_step2.value;rule.clearCaches();}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this.objects[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var sprite=_step3.value;sprite.clearCaches();}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}}},{key:"getSpriteSize",value:function getSpriteSize(){return this.cacheSpriteSize;}},{key:"getLetterSprite",value:function getLetterSprite(char){var sprite=this.letterSprites.get(char);if(!sprite){throw new Error("BUG: Cannot find sprite for letter \"".concat(char,"\""));}return sprite;}}]);return GameData;}();

/***/ }),

/***/ "./src/models/metadata.ts":
/*!********************************!*\
  !*** ./src/models/metadata.ts ***!
  \********************************/
/*! exports provided: Dimension, GameMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimension", function() { return Dimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameMetadata", function() { return GameMetadata; });
function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Dimension=function Dimension(width,height){_classCallCheck(this,Dimension);this.width=width;this.height=height;};var GameMetadata=/*#__PURE__*/function(){function GameMetadata(){_classCallCheck(this,GameMetadata);this.noAction=false;this.noUndo=false;this.noRepeatAction=false;this.throttleMovement=false;this.noRestart=false;this.requirePlayerMovement=false;this.verboseLogging=false;this.author=null;this.homepage=null;this.youtube=null;this.zoomscreen=null;this.flickscreen=null;this.colorPalette=null;this.backgroundColor=null;this.textColor=null;this.realtimeInterval=null;this.keyRepeatInterval=null;this.againInterval=null;this.runRulesOnLevelStart=null;}_createClass(GameMetadata,[{key:"_setValue",value:function _setValue(key,value){switch(key.toLowerCase()){case'author':this.author=value;break;case'homepage':this.homepage=value;break;case'youtube':this.youtube=value;break;case'zoomscreen':this.zoomscreen=value;break;case'flickscreen':this.flickscreen=value;break;case'colorpalette':case'color_palette':this.colorPalette=value;break;case'backgroundcolor':case'background_color':this.backgroundColor=value;break;case'textcolor':case'text_color':this.textColor=value;break;case'realtimeinterval':case'realtime_interval':this.realtimeInterval=value;break;case'keyrepeatinterval':case'key_repeat_interval':this.keyRepeatInterval=value;break;case'againinterval':case'again_interval':this.againInterval=value;break;case'noaction':this.noAction=value;break;case'noundo':this.noUndo=value;break;case'runrulesonlevelstart':case'run_rules_on_level_start':this.runRulesOnLevelStart=value;break;case'norepeataction':case'norepeat_action':this.noRepeatAction=value;break;case'throttlemovement':case'throttle_movement':this.throttleMovement=value;break;case'norestart':this.noRestart=value;break;case'requireplayermovement':case'require_player_movement':this.requirePlayerMovement=value;break;case'verboselogging':case'verbose_logging':this.verboseLogging=value;break;default:throw new Error("BUG: Unsupported config field \"".concat(key,"\" with value \"").concat(value,"\""));}}}]);return GameMetadata;}();

/***/ }),

/***/ "./src/models/rule.ts":
/*!****************************!*\
  !*** ./src/models/rule.ts ***!
  \****************************/
/*! exports provided: SIMPLE_DIRECTION_DIRECTIONS, SimpleRuleGroup, SimpleRuleLoop, SimpleRule, SimpleTileWithModifier, ISimpleBracket, SimpleBracket, SimpleEllipsisBracket, A11Y_MESSAGE_TYPE, SimpleNeighbor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIMPLE_DIRECTION_DIRECTIONS", function() { return SIMPLE_DIRECTION_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRuleGroup", function() { return SimpleRuleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRuleLoop", function() { return SimpleRuleLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRule", function() { return SimpleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTileWithModifier", function() { return SimpleTileWithModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISimpleBracket", function() { return ISimpleBracket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleBracket", function() { return SimpleBracket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleEllipsisBracket", function() { return SimpleEllipsisBracket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11Y_MESSAGE_TYPE", function() { return A11Y_MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNeighbor", function() { return SimpleNeighbor; });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logger */ "./src/logger.ts");
/* harmony import */ var _lruCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lruCache */ "./src/lruCache.ts");
/* harmony import */ var _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/astTypes */ "./src/parser/astTypes.ts");
/* harmony import */ var _spriteBitSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spriteBitSet */ "./src/spriteBitSet.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _BaseForLines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseForLines */ "./src/models/BaseForLines.ts");
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// import TerminalUI from '../ui/terminal'
var BitSet2=__webpack_require__(/*! bitset */ "./node_modules/bitset/bitset.js");// tslint:disable-line:no-var-requires
var MAX_ITERATIONS_IN_LOOP=350;// Set by the Random World Generation game
var LRU_CACHE_SIZE=50;// 1000
var SIMPLE_DIRECTION_DIRECTIONS=[_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].RIGHT,_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].DOWN,_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].UP];var BracketPair=function BracketPair(condition,action){_classCallCheck(this,BracketPair);this.condition=condition;this.action=action;};var ExtraPair=/*#__PURE__*/function(_BracketPair){_inherits(ExtraPair,_BracketPair);function ExtraPair(condition,action,extra){var _this;_classCallCheck(this,ExtraPair);_this=_possibleConstructorReturn(this,_getPrototypeOf(ExtraPair).call(this,condition,action));_this.extra=extra;return _this;}return ExtraPair;}(BracketPair);var CellMutation=/*#__PURE__*/function(){function CellMutation(cell,messages){_classCallCheck(this,CellMutation);this.cell=cell;this.messages=messages;}_createClass(CellMutation,[{key:"hasCell",value:function hasCell(){return true;}},{key:"getCell",value:function getCell(){return this.cell;}},{key:"getCommand",value:function getCommand(){throw new Error("BUG: check hasCommand first");}}]);return CellMutation;}();var CommandMutation=/*#__PURE__*/function(){function CommandMutation(command){_classCallCheck(this,CommandMutation);this.command=command;this.messages=[];// TODO: Decide if something should be here
}_createClass(CommandMutation,[{key:"getCommand",value:function getCommand(){return this.command;}},{key:"hasCell",value:function hasCell(){return false;}},{key:"getCell",value:function getCell(){throw new Error("BUG: check hasCell first");}}]);return CommandMutation;}();// Converts `[ [1,2], [a,b] ]` to:
// `[ [1,a], [2,a], [1,b], [2,b] ]`
function buildPermutations(cells){var tuples=[[]];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=cells[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var row=_step.value;var newtuples=[];var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=row[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var valtoappend=_step2.value;for(var _i=0;_i<tuples.length;_i++){var tuple=tuples[_i];var newtuple=tuple.concat([valtoappend]);newtuples.push(newtuple);}}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}tuples=newtuples;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return tuples;}function commandToKey(c){switch(c.type){case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].AGAIN:case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].CANCEL:case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].CHECKPOINT:case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].RESTART:case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].WIN:return c.type;case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].MESSAGE:return"".concat(c.type,":").concat(c.message);case _parser_astTypes__WEBPACK_IMPORTED_MODULE_2__["COMMAND_TYPE"].SFX:return"".concat(c.type,":").concat(c.sound.type,":").concat(c.sound.soundCode);}}var SimpleRuleGroup=/*#__PURE__*/function(_BaseForLines){_inherits(SimpleRuleGroup,_BaseForLines);function SimpleRuleGroup(source,isRandom,rules){var _this2;_classCallCheck(this,SimpleRuleGroup);_this2=_possibleConstructorReturn(this,_getPrototypeOf(SimpleRuleGroup).call(this,source));_this2.rules=rules;_this2.isRandom=isRandom;return _this2;}_createClass(SimpleRuleGroup,[{key:"hasMatches",value:function hasMatches(level){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this.rules[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var rule=_step3.value;if(rule.hasMatches(level)){return true;}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return false;}},{key:"evaluate",value:function evaluate(level,onlyEvaluateFirstMatch){var start;if(_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].isLevel(_logger__WEBPACK_IMPORTED_MODULE_0__["LOG_LEVEL"].DEBUG)){start=Date.now();}// Keep looping as long as one of the rules evaluated something
var allMutations=[];var iteration;for(iteration=0;iteration<MAX_ITERATIONS_IN_LOOP;iteration++){if( true&&iteration===MAX_ITERATIONS_IN_LOOP-10){// Provide a breakpoint just before we run out of MAX_ITERATIONS_IN_LOOP
// so that we can step through the evaluations.
_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn(this.toString());_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn('BUG: Iterated too many times in startloop or + (rule group)');// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}if(iteration===MAX_ITERATIONS_IN_LOOP-1){throw new Error("BUG: Iterated too many times in startloop or + (rule group)\n".concat(this.toString()));}if(this.isRandom){// Randomly pick one of the rules. I wonder if it needs to be smart
// It is important that it only be evaluated once (hence the returns)
var evaluatableRules=this.rules.filter(function(r){return r.hasMatches(level);});if(evaluatableRules.length===0){return[];}else if(evaluatableRules.length===1){var ret=evaluatableRules[0].evaluate(level,true/*only evaluate the 1st match because we are RANDOM and in a loop*/);return ret;}else{var randomIndex=Object(_util__WEBPACK_IMPORTED_MODULE_4__["nextRandom"])(evaluatableRules.length);var rule=evaluatableRules[randomIndex];var _ret=rule.evaluate(level,true/*only evaluate the 1st match because we are RANDOM and in a loop*/);return _ret;}}else{var evaluatedSomething=false;var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=this.rules[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var _rule=_step4.value;// Keep evaluating the rule until nothing changes
var _ret2=_rule.evaluate(level,onlyEvaluateFirstMatch);if(_ret2.length>0){// filter because a Rule may have caused only command mutations
if(_ret2.filter(function(m){return m.hasCell();}).length>0){evaluatedSomething=true;}if(onlyEvaluateFirstMatch){return _ret2;}allMutations.push(_ret2);}}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}if(!evaluatedSomething){break;}}}if(_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].isLevel(_logger__WEBPACK_IMPORTED_MODULE_0__["LOG_LEVEL"].DEBUG)){if(allMutations.length>0){if(start&&Date.now()-start>30/*only show times for rules that took a long time*/){_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].debug("Rule ".concat(this.__getSourceLineAndColumn().lineNum," applied. ").concat(iteration===1?'':"(x".concat(iteration,")")," [[").concat(Date.now()-start,"ms]]"));}else{_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].debug("Rule ".concat(this.__getSourceLineAndColumn().lineNum," applied. ").concat(iteration===1?'':"(x".concat(iteration,")")));}}}return Object(_util__WEBPACK_IMPORTED_MODULE_4__["_flatten"])(allMutations);// let mutations = []
// for (const rule of this._rules) {
//     const ret = rule.evaluate()
//     if (ret.length > 0) {
//         mutations = mutations.concat(ret)
//     }
// }
// return mutations
}},{key:"clearCaches",value:function clearCaches(){var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=this.rules[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var rule=_step5.value;rule.clearCaches();}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}},{key:"getChildRules",value:function getChildRules(){return this.rules;}},{key:"isLate",value:function isLate(){// All rules in a group should be parked as late if any is marked as late
return this.rules[0].isLate();}},{key:"hasRigid",value:function hasRigid(){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=this.rules[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var rule=_step6.value;if(rule.hasRigid()){return true;}}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return!=null){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}return false;}},{key:"addCellsToEmptyRules",value:function addCellsToEmptyRules(cells){var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=this.rules[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var rule=_step7.value;rule.addCellsToEmptyRules(cells);}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return!=null){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}}},{key:"toKey",value:function toKey(){return this.rules.map(function(r){return r.toKey();}).join('\n');}},{key:"a11yGetConditionSprites",value:function a11yGetConditionSprites(){var sprites=[];var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=this.rules[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var rule=_step8.value;sprites=[].concat(_toConsumableArray(sprites),_toConsumableArray(rule.a11yGetConditionSprites()));}}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return!=null){_iterator8.return();}}finally{if(_didIteratorError8){throw _iteratorError8;}}}return sprites;}}]);return SimpleRuleGroup;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_5__["BaseForLines"]);var SimpleRuleLoop=/*#__PURE__*/function(_SimpleRuleGroup){_inherits(SimpleRuleLoop,_SimpleRuleGroup);function SimpleRuleLoop(){_classCallCheck(this,SimpleRuleLoop);return _possibleConstructorReturn(this,_getPrototypeOf(SimpleRuleLoop).apply(this,arguments));}return SimpleRuleLoop;}(SimpleRuleGroup);// This is a rule that has been expanded from `DOWN [ > player < cat RIGHT dog ] -> [ ^ crate ]` to:
// DOWN [ DOWN player UP cat RIGHT dog ] -> [ RIGHT crate ]
//
// And a more complicated example:
// DOWN [ > player LEFT cat HORIZONTAL dog < crate VERTICAL wall ] -> [ ^ crate  HORIZONTAL dog ]
//
// DOWN [ DOWN player LEFT cat LEFT dog UP crate UP wall ] -> [ right crate LEFT dog ]
// DOWN [ DOWN player LEFT cat LEFT dog UP crate DOWN wall ] -> [ right crate LEFT dog ]
// DOWN [ DOWN player LEFT cat RIGHT dog UP crate UP wall ] -> [ RIGHT crate RIGHT dog ]
// DOWN [ DOWN player LEFT cat RIGHT dog UP crate DOWN wall ] -> [ RIGHT crate RIGHT dog ]
var SimpleRule=/*#__PURE__*/function(_BaseForLines2){_inherits(SimpleRule,_BaseForLines2);// private evaluationDirection: RULE_DIRECTION
function SimpleRule(source,conditionBrackets,actionBrackets,commands,isLate,isRigid,debugFlag){var _this3;_classCallCheck(this,SimpleRule);_this3=_possibleConstructorReturn(this,_getPrototypeOf(SimpleRule).call(this,source));// this.evaluationDirection = evaluationDirection
_this3.conditionBrackets=conditionBrackets;_this3.actionBrackets=actionBrackets;_this3.commands=commands;_this3._isLate=isLate;_this3.isRigid=isRigid;_this3.debugFlag=debugFlag;_this3.isSubscribedToCellChanges=false;if(actionBrackets.length>0){for(var _index=0;_index<conditionBrackets.length;_index++){conditionBrackets[_index].prepareAction(actionBrackets[_index]);}}return _this3;}_createClass(SimpleRule,[{key:"toKey",value:function toKey(){// const dir = this.dependsOnDirection() ? this.evaluationDirection : ''
var conditions=this.conditionBrackets.map(function(x){return x.toKey();});var actions=this.actionBrackets.map(function(x){return x.toKey();});var commands=this.commands.map(function(c){return commandToKey(c);});return"{Late?".concat(this._isLate,"} {Rigid?").concat(this.isRigid,"} ").concat(conditions," -> ").concat(actions," ").concat(commands.join(' ')," {debugger?").concat(this.debugFlag,"}");}},{key:"getChildRules",value:function getChildRules(){return[];}},{key:"subscribeToCellChanges",value:function subscribeToCellChanges(){if(!this.isSubscribedToCellChanges){// Subscribe the bracket and neighbors to cell Changes (only the condition side)
var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=this.conditionBrackets[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var bracket=_step9.value;bracket.subscribeToNeighborChanges();}}catch(err){_didIteratorError9=true;_iteratorError9=err;}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return!=null){_iterator9.return();}}finally{if(_didIteratorError9){throw _iteratorError9;}}}this.isSubscribedToCellChanges=true;}}},{key:"clearCaches",value:function clearCaches(){var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{for(var _iterator10=this.conditionBrackets[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10=(_step10=_iterator10.next()).done);_iteratorNormalCompletion10=true){var bracket=_step10.value;bracket.clearCaches();}}catch(err){_didIteratorError10=true;_iteratorError10=err;}finally{try{if(!_iteratorNormalCompletion10&&_iterator10.return!=null){_iterator10.return();}}finally{if(_didIteratorError10){throw _iteratorError10;}}}}},{key:"getMatches",value:function getMatches(level){var allBracketsToProcess=[];for(var _index2=0;_index2<this.conditionBrackets.length;_index2++){var _condition=this.conditionBrackets[_index2];var _action=this.actionBrackets[_index2];var bracketMatches=_condition.getMatches(level,_action);if(bracketMatches.length===0){return[];}allBracketsToProcess.push(bracketMatches);}return allBracketsToProcess;}},{key:"evaluate",value:function evaluate(level,onlyEvaluateFirstMatch){// Verify that each condition bracket has matches
// for (const condition of this.conditionBrackets) {
//     if (!condition.hasFirstCells()) {
//         if (process.env['NODE_ENV'] === 'development' && this.debugFlag === DEBUG_FLAG.BREAKPOINT_REMOVE) {
//             // A "DEBUGGER_REMOVE" flag was set in the game so we are pausing here
//             // if (process.stdout) { TerminalUI.debugRenderScreen(); } debugger
//         }
//         return [] // Rule did not match, so nothing ran
//     }
// }
// If a Rule cannot impact itself then the evaluation order does not matter.
var ret=[];if(true){// A "DEBUGGER" flag was set in the game so we are pausing here
if(_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].isLevel(_logger__WEBPACK_IMPORTED_MODULE_0__["LOG_LEVEL"].TRACE)&&process.stdout||_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].isLevel(_logger__WEBPACK_IMPORTED_MODULE_0__["LOG_LEVEL"].DEBUG)&&this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){// TerminalUI.renderScreen(false)
}if(this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){debugger;// tslint:disable-line:no-debugger
}}var allBracketsToProcess=this.getMatches(level);if(allBracketsToProcess.length===0){return[];}// Some rules only contain commands.
// If there are actionBrackets then evaluate them.
// Get ready to Evaluate
if(this.actionBrackets.length>0){var cellPermutations=buildPermutations(allBracketsToProcess);var allMutations=[];var _iteratorNormalCompletion11=true;var _didIteratorError11=false;var _iteratorError11=undefined;try{for(var _iterator11=cellPermutations[Symbol.iterator](),_step11;!(_iteratorNormalCompletion11=(_step11=_iterator11.next()).done);_iteratorNormalCompletion11=true){var permutation=_step11.value;var didAllBracketsStillMatch=true;var magicOrTiles=new Map();// Populate the magicOrTiles. This needs to be done first because of things like:
// [ Player ] [ Color ] -> [ Player Color ] [ ]
// Check that all Cells still match
var _iteratorNormalCompletion12=true;var _didIteratorError12=false;var _iteratorError12=undefined;try{for(var _iterator12=permutation[Symbol.iterator](),_step12;!(_iteratorNormalCompletion12=(_step12=_iterator12.next()).done);_iteratorNormalCompletion12=true){var x=_step12.value;if(!x.doesStillMatch()){didAllBracketsStillMatch=false;break;}x.populateMagicOrTiles(magicOrTiles);}// break if the cells no longer match
}catch(err){_didIteratorError12=true;_iteratorError12=err;}finally{try{if(!_iteratorNormalCompletion12&&_iterator12.return!=null){_iterator12.return();}}finally{if(_didIteratorError12){throw _iteratorError12;}}}if(!didAllBracketsStillMatch){continue;}var _iteratorNormalCompletion13=true;var _didIteratorError13=false;var _iteratorError13=undefined;try{for(var _iterator13=permutation[Symbol.iterator](),_step13;!(_iteratorNormalCompletion13=(_step13=_iterator13.next()).done);_iteratorNormalCompletion13=true){var _x=_step13.value;if(!_x.doesStillMatch()){// part of the rule not longer matches so stop. (Test if that is the correct behavior)
// E.g. [ Player ] [ Player ] [ ] -> [ ] [ ] [ SeeIfThisIsExecuted ]
continue;}allMutations.push(_x.evaluate(magicOrTiles));if(true){this.__incrementCoverage();}}// Only evaluate once. This is a HACK since it always picks the 1st cell that matched rather than a RANDOM cell
}catch(err){_didIteratorError13=true;_iteratorError13=err;}finally{try{if(!_iteratorNormalCompletion13&&_iterator13.return!=null){_iterator13.return();}}finally{if(_didIteratorError13){throw _iteratorError13;}}}if(onlyEvaluateFirstMatch){break;// evaluate the subsequent brackets but do not continue evaluating cells
}}}catch(err){_didIteratorError11=true;_iteratorError11=err;}finally{try{if(!_iteratorNormalCompletion11&&_iterator11.return!=null){_iterator11.return();}}finally{if(_didIteratorError11){throw _iteratorError11;}}}ret=Object(_util__WEBPACK_IMPORTED_MODULE_4__["_flatten"])(allMutations);}// Append any Commands that need to be evaluated (only if the rule was evaluated at least once)
var _iteratorNormalCompletion14=true;var _didIteratorError14=false;var _iteratorError14=undefined;try{for(var _iterator14=this.commands[Symbol.iterator](),_step14;!(_iteratorNormalCompletion14=(_step14=_iterator14.next()).done);_iteratorNormalCompletion14=true){var command=_step14.value;ret.push(new CommandMutation(command));}}catch(err){_didIteratorError14=true;_iteratorError14=err;}finally{try{if(!_iteratorNormalCompletion14&&_iterator14.return!=null){_iterator14.return();}}finally{if(_didIteratorError14){throw _iteratorError14;}}}return ret;}},{key:"hasMatches",value:function hasMatches(level){for(var _index3=0;_index3<this.conditionBrackets.length;_index3++){var _condition2=this.conditionBrackets[_index3];var _action2=this.actionBrackets[_index3];if(!_condition2.hasMatches(level,_action2)){return false;}}return true;}},{key:"isLate",value:function isLate(){return this._isLate;}},{key:"hasRigid",value:function hasRigid(){return this.isRigid;}},{key:"canCollapseBecauseBracketsMatch",value:function canCollapseBecauseBracketsMatch(rule){for(var _index4=0;_index4<this.conditionBrackets.length;_index4++){if(this.conditionBrackets[_index4]!==rule.conditionBrackets[_index4]){return false;}// also ensure there is only one neighbor.
// that way we can de-duplicate the rule
if(this.conditionBrackets[_index4]._getAllNeighbors().length>1){return false;}}for(var _index5=0;_index5<this.actionBrackets.length;_index5++){if(this.actionBrackets[_index5]!==rule.actionBrackets[_index5]){return false;}}return true;}},{key:"addCellsToEmptyRules",value:function addCellsToEmptyRules(cells){var _iteratorNormalCompletion15=true;var _didIteratorError15=false;var _iteratorError15=undefined;try{for(var _iterator15=this.conditionBrackets[Symbol.iterator](),_step15;!(_iteratorNormalCompletion15=(_step15=_iterator15.next()).done);_iteratorNormalCompletion15=true){var bracket=_step15.value;bracket.addCellsToEmptyRules(cells);}}catch(err){_didIteratorError15=true;_iteratorError15=err;}finally{try{if(!_iteratorNormalCompletion15&&_iterator15.return!=null){_iterator15.return();}}finally{if(_didIteratorError15){throw _iteratorError15;}}}}},{key:"a11yGetConditionSprites",value:function a11yGetConditionSprites(){var sprites=[];var _iteratorNormalCompletion16=true;var _didIteratorError16=false;var _iteratorError16=undefined;try{for(var _iterator16=this.conditionBrackets[Symbol.iterator](),_step16;!(_iteratorNormalCompletion16=(_step16=_iterator16.next()).done);_iteratorNormalCompletion16=true){var b=_step16.value;sprites=[].concat(_toConsumableArray(sprites),_toConsumableArray(b.a11yGetSprites()));}}catch(err){_didIteratorError16=true;_iteratorError16=err;}finally{try{if(!_iteratorNormalCompletion16&&_iterator16.return!=null){_iterator16.return();}}finally{if(_didIteratorError16){throw _iteratorError16;}}}return sprites;}}]);return SimpleRule;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_5__["BaseForLines"]);var SimpleTileWithModifier=/*#__PURE__*/function(_BaseForLines3){_inherits(SimpleTileWithModifier,_BaseForLines3);function SimpleTileWithModifier(source,isNegated,isRandom,direction,tile,debugFlag){var _this4;_classCallCheck(this,SimpleTileWithModifier);_this4=_possibleConstructorReturn(this,_getPrototypeOf(SimpleTileWithModifier).call(this,source));_this4._isNegated=isNegated;_this4._isRandom=isRandom;_this4._direction=direction;_this4._tile=tile;_this4.neighbors=new Set();_this4._debugFlag=debugFlag;_this4.trickleCells=new Set();return _this4;}_createClass(SimpleTileWithModifier,[{key:"toKey",value:function toKey(ignoreDebugFlag){var sprites=this._tile.getSprites().map(function(sprite){return sprite.getName();}).sort();if(ignoreDebugFlag){return"{-?".concat(this._isNegated,"} {#?").concat(this._isRandom,"} dir=\"").concat(this._direction,"\" [").concat(sprites.join(' '),"]");}else{return"{-?".concat(this._isNegated,"} {#?").concat(this._isRandom,"} dir=\"").concat(this._direction,"\" [").concat(sprites.join(' '),"]{debugging?").concat(!!this._debugFlag,"}");}}},{key:"equals",value:function equals(t){return this._isNegated===t._isNegated&&this._tile.equals(t._tile)&&this._direction===t._direction&&this._isRandom===t._isRandom;}},{key:"clearCaches",value:function clearCaches(){// this._localCache.clear()
}},{key:"isNo",value:function isNo(){return this._isNegated;}},{key:"isRandom",value:function isRandom(){return this._isRandom;}},{key:"getCollisionLayers",value:function getCollisionLayers(){var collisionLayers=new Set();var _iteratorNormalCompletion17=true;var _didIteratorError17=false;var _iteratorError17=undefined;try{for(var _iterator17=this._tile.getSprites()[Symbol.iterator](),_step17;!(_iteratorNormalCompletion17=(_step17=_iterator17.next()).done);_iteratorNormalCompletion17=true){var _sprite=_step17.value;collisionLayers.add(_sprite.getCollisionLayer());}}catch(err){_didIteratorError17=true;_iteratorError17=err;}finally{try{if(!_iteratorNormalCompletion17&&_iterator17.return!=null){_iterator17.return();}}finally{if(_didIteratorError17){throw _iteratorError17;}}}return collisionLayers;}// This should only be called on Condition Brackets
},{key:"subscribeToCellChanges",value:function subscribeToCellChanges(neighbor){this.neighbors.add(neighbor);this._tile.subscribeToCellChanges(this);}},{key:"addCells",value:function addCells(tile,sprite,cells,wantsToMove){if( true&&this._debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){}// Pause here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
// Cells all have the same sprites, so if the 1st matches, they all do.
// Also, we only need to check that the direction matches (optimization),
// we do not need to re-check that the Tile matches
var shouldAdd=true;if(!this._direction||wantsToMove===this._direction){shouldAdd=!this.isNo();}else if(this._tile.isOr()&&this.matchesFirstCell(cells,wantsToMove)){// In OR tiles, one of the sprites may add/remove a direction but
// another sprite may still have the direction
// so we check by doing the long and expensive comparison above
shouldAdd=!this.isNo();}else{shouldAdd=this.isNo();}if(shouldAdd){var _iteratorNormalCompletion18=true;var _didIteratorError18=false;var _iteratorError18=undefined;try{for(var _iterator18=cells[Symbol.iterator](),_step18;!(_iteratorNormalCompletion18=(_step18=_iterator18.next()).done);_iteratorNormalCompletion18=true){var _cell=_step18.value;this.trickleCells.add(_cell);}// const cellsNotInCache = setDifference(new Set(cells), new Set(this._localCache.keys()))
}catch(err){_didIteratorError18=true;_iteratorError18=err;}finally{try{if(!_iteratorNormalCompletion18&&_iterator18.return!=null){_iterator18.return();}}finally{if(_didIteratorError18){throw _iteratorError18;}}}var _iteratorNormalCompletion19=true;var _didIteratorError19=false;var _iteratorError19=undefined;try{for(var _iterator19=this.neighbors[Symbol.iterator](),_step19;!(_iteratorNormalCompletion19=(_step19=_iterator19.next()).done);_iteratorNormalCompletion19=true){var _neighbor=_step19.value;// neighbor.addCells(this, sprite, cellsNotInCache, wantsToMove)
_neighbor.addCells(this,sprite,cells,wantsToMove);}}catch(err){_didIteratorError19=true;_iteratorError19=err;}finally{try{if(!_iteratorNormalCompletion19&&_iterator19.return!=null){_iterator19.return();}}finally{if(_didIteratorError19){throw _iteratorError19;}}}}else{var _iteratorNormalCompletion20=true;var _didIteratorError20=false;var _iteratorError20=undefined;try{for(var _iterator20=cells[Symbol.iterator](),_step20;!(_iteratorNormalCompletion20=(_step20=_iterator20.next()).done);_iteratorNormalCompletion20=true){var _cell2=_step20.value;this.trickleCells.delete(_cell2);}// const cellsInCache = setIntersection(new Set(cells), new Set(this._localCache.keys()))
}catch(err){_didIteratorError20=true;_iteratorError20=err;}finally{try{if(!_iteratorNormalCompletion20&&_iterator20.return!=null){_iterator20.return();}}finally{if(_didIteratorError20){throw _iteratorError20;}}}var _iteratorNormalCompletion21=true;var _didIteratorError21=false;var _iteratorError21=undefined;try{for(var _iterator21=this.neighbors[Symbol.iterator](),_step21;!(_iteratorNormalCompletion21=(_step21=_iterator21.next()).done);_iteratorNormalCompletion21=true){var _neighbor2=_step21.value;// neighbor.removeCells(this, sprite, cellsInCache)
_neighbor2.removeCells(this,sprite,cells);}}catch(err){_didIteratorError21=true;_iteratorError21=err;}finally{try{if(!_iteratorNormalCompletion21&&_iterator21.return!=null){_iterator21.return();}}finally{if(_didIteratorError21){throw _iteratorError21;}}}}}},{key:"updateCells",value:function updateCells(sprite,cells,wantsToMove){if( true&&this._debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){}// Pause here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
// Cells all have the same sprites, so if the 1st matches, they all do
if(this.matchesFirstCell(cells,wantsToMove)){var _iteratorNormalCompletion22=true;var _didIteratorError22=false;var _iteratorError22=undefined;try{for(var _iterator22=cells[Symbol.iterator](),_step22;!(_iteratorNormalCompletion22=(_step22=_iterator22.next()).done);_iteratorNormalCompletion22=true){var _cell3=_step22.value;this.trickleCells.add(_cell3);}}catch(err){_didIteratorError22=true;_iteratorError22=err;}finally{try{if(!_iteratorNormalCompletion22&&_iterator22.return!=null){_iterator22.return();}}finally{if(_didIteratorError22){throw _iteratorError22;}}}if(wantsToMove){var _iteratorNormalCompletion23=true;var _didIteratorError23=false;var _iteratorError23=undefined;try{for(var _iterator23=this.neighbors[Symbol.iterator](),_step23;!(_iteratorNormalCompletion23=(_step23=_iterator23.next()).done);_iteratorNormalCompletion23=true){var _neighbor3=_step23.value;_neighbor3.updateCells(this,sprite,cells,wantsToMove);}}catch(err){_didIteratorError23=true;_iteratorError23=err;}finally{try{if(!_iteratorNormalCompletion23&&_iterator23.return!=null){_iterator23.return();}}finally{if(_didIteratorError23){throw _iteratorError23;}}}}}else{var _iteratorNormalCompletion24=true;var _didIteratorError24=false;var _iteratorError24=undefined;try{for(var _iterator24=cells[Symbol.iterator](),_step24;!(_iteratorNormalCompletion24=(_step24=_iterator24.next()).done);_iteratorNormalCompletion24=true){var _cell4=_step24.value;this.trickleCells.delete(_cell4);}}catch(err){_didIteratorError24=true;_iteratorError24=err;}finally{try{if(!_iteratorNormalCompletion24&&_iterator24.return!=null){_iterator24.return();}}finally{if(_didIteratorError24){throw _iteratorError24;}}}var _iteratorNormalCompletion25=true;var _didIteratorError25=false;var _iteratorError25=undefined;try{for(var _iterator25=this.neighbors[Symbol.iterator](),_step25;!(_iteratorNormalCompletion25=(_step25=_iterator25.next()).done);_iteratorNormalCompletion25=true){var _neighbor4=_step25.value;_neighbor4.removeCells(this,sprite,cells);}}catch(err){_didIteratorError25=true;_iteratorError25=err;}finally{try{if(!_iteratorNormalCompletion25&&_iterator25.return!=null){_iterator25.return();}}finally{if(_didIteratorError25){throw _iteratorError25;}}}}}},{key:"removeCells",value:function removeCells(tile,sprite,cells){if( true&&this._debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT_REMOVE){}// Pause here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
// Cells all have the same sprites, so if the 1st matches, they all do
// OR Tiles need to be checked to see if the tile still matches.
// Non-OR tiles can be safely removed
var shouldAdd=false;if(this._tile.isOr()){shouldAdd=this.matchesFirstCell(cells,null);}else{shouldAdd=this.isNo();}if(shouldAdd){var _iteratorNormalCompletion26=true;var _didIteratorError26=false;var _iteratorError26=undefined;try{for(var _iterator26=cells[Symbol.iterator](),_step26;!(_iteratorNormalCompletion26=(_step26=_iterator26.next()).done);_iteratorNormalCompletion26=true){var _cell5=_step26.value;this.trickleCells.add(_cell5);}}catch(err){_didIteratorError26=true;_iteratorError26=err;}finally{try{if(!_iteratorNormalCompletion26&&_iterator26.return!=null){_iterator26.return();}}finally{if(_didIteratorError26){throw _iteratorError26;}}}var _iteratorNormalCompletion27=true;var _didIteratorError27=false;var _iteratorError27=undefined;try{for(var _iterator27=this.neighbors[Symbol.iterator](),_step27;!(_iteratorNormalCompletion27=(_step27=_iterator27.next()).done);_iteratorNormalCompletion27=true){var _neighbor5=_step27.value;_neighbor5.addCells(this,sprite,cells,_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].STATIONARY);}}catch(err){_didIteratorError27=true;_iteratorError27=err;}finally{try{if(!_iteratorNormalCompletion27&&_iterator27.return!=null){_iterator27.return();}}finally{if(_didIteratorError27){throw _iteratorError27;}}}}else{var _iteratorNormalCompletion28=true;var _didIteratorError28=false;var _iteratorError28=undefined;try{for(var _iterator28=cells[Symbol.iterator](),_step28;!(_iteratorNormalCompletion28=(_step28=_iterator28.next()).done);_iteratorNormalCompletion28=true){var _cell6=_step28.value;this.trickleCells.delete(_cell6);}}catch(err){_didIteratorError28=true;_iteratorError28=err;}finally{try{if(!_iteratorNormalCompletion28&&_iterator28.return!=null){_iterator28.return();}}finally{if(_didIteratorError28){throw _iteratorError28;}}}var _iteratorNormalCompletion29=true;var _didIteratorError29=false;var _iteratorError29=undefined;try{for(var _iterator29=this.neighbors[Symbol.iterator](),_step29;!(_iteratorNormalCompletion29=(_step29=_iterator29.next()).done);_iteratorNormalCompletion29=true){var _neighbor6=_step29.value;_neighbor6.removeCells(this,sprite,cells);}}catch(err){_didIteratorError29=true;_iteratorError29=err;}finally{try{if(!_iteratorNormalCompletion29&&_iterator29.return!=null){_iterator29.return();}}finally{if(_didIteratorError29){throw _iteratorError29;}}}}}},{key:"hasCell",value:function hasCell(cell){return this.trickleCells.has(cell);}},{key:"matchesCellWantsToMove",value:function matchesCellWantsToMove(cell,wantsToMove){var hasTile=this._tile.hasCell(cell);var didMatch=this._isNegated!==(hasTile&&(this._direction===wantsToMove||!this._direction));if(didMatch){return true;}else if(!this._direction){return false;}else{// do the more expensive match
var _iteratorNormalCompletion30=true;var _didIteratorError30=false;var _iteratorError30=undefined;try{for(var _iterator30=this._tile.getSpritesThatMatch(cell)[Symbol.iterator](),_step30;!(_iteratorNormalCompletion30=(_step30=_iterator30.next()).done);_iteratorNormalCompletion30=true){var _sprite2=_step30.value;if(this._direction===cell.getWantsToMove(_sprite2)){return true;}}}catch(err){_didIteratorError30=true;_iteratorError30=err;}finally{try{if(!_iteratorNormalCompletion30&&_iterator30.return!=null){_iterator30.return();}}finally{if(_didIteratorError30){throw _iteratorError30;}}}return false;}}},{key:"matchesFirstCell",value:function matchesFirstCell(cells,wantsToMove){return this.matchesCellWantsToMove(cells[0],wantsToMove);}}]);return SimpleTileWithModifier;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_5__["BaseForLines"]);var ISimpleBracket=/*#__PURE__*/function(_BaseForLines4){_inherits(ISimpleBracket,_BaseForLines4);function ISimpleBracket(source,direction,allNeighbors,debugFlag){var _this5;_classCallCheck(this,ISimpleBracket);_this5=_possibleConstructorReturn(this,_getPrototypeOf(ISimpleBracket).call(this,source));_this5.direction=direction;_this5.debugFlag=debugFlag;_this5.allNeighbors=allNeighbors;_this5.firstCells=new Set();return _this5;}_createClass(ISimpleBracket,[{key:"_getAllNeighbors",value:function _getAllNeighbors(){return this.allNeighbors;}},{key:"hasMatches",value:function hasMatches(level,actionBracket){return this.getMatches(level,actionBracket).length>0;}}]);return ISimpleBracket;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_5__["BaseForLines"]);var MatchedCellsForRule=/*#__PURE__*/function(){function MatchedCellsForRule(cellsAndNeighbors){_classCallCheck(this,MatchedCellsForRule);this.cellsAndNeighbors=cellsAndNeighbors;this.cellKeys=new Map();var _iteratorNormalCompletion31=true;var _didIteratorError31=false;var _iteratorError31=undefined;try{for(var _iterator31=this.cellsAndNeighbors[Symbol.iterator](),_step31;!(_iteratorNormalCompletion31=(_step31=_iterator31.next()).done);_iteratorNormalCompletion31=true){var _cell7=_step31.value.cell;this.cellKeys.set(_cell7,_cell7.toKey());}}catch(err){_didIteratorError31=true;_iteratorError31=err;}finally{try{if(!_iteratorNormalCompletion31&&_iterator31.return!=null){_iterator31.return();}}finally{if(_didIteratorError31){throw _iteratorError31;}}}}_createClass(MatchedCellsForRule,[{key:"firstCell",value:function firstCell(){var _iteratorNormalCompletion32=true;var _didIteratorError32=false;var _iteratorError32=undefined;try{for(var _iterator32=this.cellsAndNeighbors[Symbol.iterator](),_step32;!(_iteratorNormalCompletion32=(_step32=_iterator32.next()).done);_iteratorNormalCompletion32=true){var _cell8=_step32.value.cell;return _cell8;}}catch(err){_didIteratorError32=true;_iteratorError32=err;}finally{try{if(!_iteratorNormalCompletion32&&_iterator32.return!=null){_iterator32.return();}}finally{if(_didIteratorError32){throw _iteratorError32;}}}throw new Error("BUG: ? No cells were included in the match");}},{key:"lastCell",value:function lastCell(){var ret;var _iteratorNormalCompletion33=true;var _didIteratorError33=false;var _iteratorError33=undefined;try{for(var _iterator33=this.cellsAndNeighbors[Symbol.iterator](),_step33;!(_iteratorNormalCompletion33=(_step33=_iterator33.next()).done);_iteratorNormalCompletion33=true){var _cell9=_step33.value.cell;ret=_cell9;}}catch(err){_didIteratorError33=true;_iteratorError33=err;}finally{try{if(!_iteratorNormalCompletion33&&_iterator33.return!=null){_iterator33.return();}}finally{if(_didIteratorError33){throw _iteratorError33;}}}if(ret){return ret;}throw new Error("BUG: ? No cells were included in the match");}},{key:"doesStillMatch",value:function doesStillMatch(){var _iteratorNormalCompletion34=true;var _didIteratorError34=false;var _iteratorError34=undefined;try{for(var _iterator34=this.cellsAndNeighbors[Symbol.iterator](),_step34;!(_iteratorNormalCompletion34=(_step34=_iterator34.next()).done);_iteratorNormalCompletion34=true){var _step34$value=_step34.value,_cell10=_step34$value.cell,_condition3=_step34$value.condition;// Check the cell key (cheap) to see if the cell still matches
if(_cell10.toKey()===this.cellKeys.get(_cell10)){continue;}if(!_condition3.matchesCellSimple(_cell10)){return false;}// if the cell updated but still matches then update the cellKey
this.cellKeys.set(_cell10,_cell10.toKey());}}catch(err){_didIteratorError34=true;_iteratorError34=err;}finally{try{if(!_iteratorNormalCompletion34&&_iterator34.return!=null){_iterator34.return();}}finally{if(_didIteratorError34){throw _iteratorError34;}}}return true;}},{key:"populateMagicOrTiles",value:function populateMagicOrTiles(magicOrTiles){// populate the OR tiles in all neighbors first. Example:
// [ | Player ] -> [ Player | ]
var _iteratorNormalCompletion35=true;var _didIteratorError35=false;var _iteratorError35=undefined;try{for(var _iterator35=this.cellsAndNeighbors[Symbol.iterator](),_step35;!(_iteratorNormalCompletion35=(_step35=_iterator35.next()).done);_iteratorNormalCompletion35=true){var _step35$value=_step35.value,_cell11=_step35$value.cell,_condition4=_step35$value.condition;_condition4.populateMagicOrTiles(_cell11,magicOrTiles);}}catch(err){_didIteratorError35=true;_iteratorError35=err;}finally{try{if(!_iteratorNormalCompletion35&&_iterator35.return!=null){_iterator35.return();}}finally{if(_didIteratorError35){throw _iteratorError35;}}}}},{key:"evaluate",value:function evaluate(magicOrTiles){var mutations=[];var _iteratorNormalCompletion36=true;var _didIteratorError36=false;var _iteratorError36=undefined;try{for(var _iterator36=this.cellsAndNeighbors[Symbol.iterator](),_step36;!(_iteratorNormalCompletion36=(_step36=_iterator36.next()).done);_iteratorNormalCompletion36=true){var _step36$value=_step36.value,_cell12=_step36$value.cell,_condition5=_step36$value.condition,_action3=_step36$value.action;if(!_action3){throw new Error("BUG: Should not have tried to evaluate something when there is no action");}var mutation=_condition5.evaluate(_action3,_cell12,magicOrTiles);if(mutation){mutations.push(mutation);}}}catch(err){_didIteratorError36=true;_iteratorError36=err;}finally{try{if(!_iteratorNormalCompletion36&&_iterator36.return!=null){_iterator36.return();}}finally{if(_didIteratorError36){throw _iteratorError36;}}}return mutations;}}]);return MatchedCellsForRule;}();var SimpleBracket=/*#__PURE__*/function(_ISimpleBracket){_inherits(SimpleBracket,_ISimpleBracket);function SimpleBracket(source,direction,neighbors,debugFlag){var _this6;_classCallCheck(this,SimpleBracket);_this6=_possibleConstructorReturn(this,_getPrototypeOf(SimpleBracket).call(this,source,direction,neighbors,debugFlag));_this6.actionDebugFlag=null;_this6.neighbors=neighbors;_this6.ellipsisBracketListeners=new Map();// Compute which sprites need to be in the Row/Column to check cells in that row/column (optimization)
_this6.spritesPresentInRowOrColumn=_this6.neighbors[0].spritesPresent.union(_this6.neighbors.map(function(n){return n.spritesPresent;}));var anySprites=[];var _iteratorNormalCompletion37=true;var _didIteratorError37=false;var _iteratorError37=undefined;try{for(var _iterator37=_this6.neighbors[Symbol.iterator](),_step37;!(_iteratorNormalCompletion37=(_step37=_iterator37.next()).done);_iteratorNormalCompletion37=true){var _neighbor7=_step37.value;var _iteratorNormalCompletion38=true;var _didIteratorError38=false;var _iteratorError38=undefined;try{for(var _iterator38=_neighbor7.anySpritesPresent[Symbol.iterator](),_step38;!(_iteratorNormalCompletion38=(_step38=_iterator38.next()).done);_iteratorNormalCompletion38=true){var a=_step38.value;anySprites.push(a);}}catch(err){_didIteratorError38=true;_iteratorError38=err;}finally{try{if(!_iteratorNormalCompletion38&&_iterator38.return!=null){_iterator38.return();}}finally{if(_didIteratorError38){throw _iteratorError38;}}}}}catch(err){_didIteratorError37=true;_iteratorError37=err;}finally{try{if(!_iteratorNormalCompletion37&&_iterator37.return!=null){_iterator37.return();}}finally{if(_didIteratorError37){throw _iteratorError37;}}}_this6.anySpritesPresentInRowOrColumn=new _spriteBitSet__WEBPACK_IMPORTED_MODULE_3__["SpriteBitSet"]().union(anySprites);return _this6;}_createClass(SimpleBracket,[{key:"toKey",value:function toKey(){var dir=this.dependsOnDirection()?this.direction:'';return"{".concat(dir,"[").concat(this.neighbors.map(function(n){return n.toKey();}).join('|'),"]{debugging?").concat(!!this.debugFlag,"}}");}},{key:"dependsOnDirection",value:function dependsOnDirection(){return this.neighbors.length>1||!!this.neighbors.find(function(n){return n.dependsOnDirection();});}},{key:"subscribeToNeighborChanges",value:function subscribeToNeighborChanges(){var _this7=this;if(this.shouldUseOnDemandMethod()){return;}// Skip. Do not subscribe to changes because we will use .getMatches() to find the matches
this.neighbors.forEach(function(neighbor,index){neighbor.subscribeToTileChanges(_this7,index);});}},{key:"addEllipsisBracket",value:function addEllipsisBracket(bracket,token){this.ellipsisBracketListeners.set(bracket,token);}},{key:"clearCaches",value:function clearCaches(){this.firstCells.clear();var _iteratorNormalCompletion39=true;var _didIteratorError39=false;var _iteratorError39=undefined;try{for(var _iterator39=this.neighbors[Symbol.iterator](),_step39;!(_iteratorNormalCompletion39=(_step39=_iterator39.next()).done);_iteratorNormalCompletion39=true){var _neighbor8=_step39.value;_neighbor8.clearCaches();}}catch(err){_didIteratorError39=true;_iteratorError39=err;}finally{try{if(!_iteratorNormalCompletion39&&_iterator39.return!=null){_iterator39.return();}}finally{if(_didIteratorError39){throw _iteratorError39;}}}}},{key:"getNeighbors",value:function getNeighbors(){return this.neighbors;}},{key:"prepareAction",value:function prepareAction(actionBracket){var actionBracketSimple=actionBracket;// since we know the condition and action side need to match
this.actionDebugFlag=actionBracketSimple.debugFlag;for(var _index6=0;_index6<this.neighbors.length;_index6++){var _condition6=this.neighbors[_index6];var _action4=actionBracketSimple.neighbors[_index6];_condition6.prepareAction(_action4);}}},{key:"addCellsToEmptyRules",value:function addCellsToEmptyRules(cells){if(this.neighbors.length===1){if(this.neighbors[0]._tilesWithModifier.size===0){var _iteratorNormalCompletion40=true;var _didIteratorError40=false;var _iteratorError40=undefined;try{for(var _iterator40=cells[Symbol.iterator](),_step40;!(_iteratorNormalCompletion40=(_step40=_iterator40.next()).done);_iteratorNormalCompletion40=true){var _cell13=_step40.value;this._addFirstCell(_cell13);}}catch(err){_didIteratorError40=true;_iteratorError40=err;}finally{try{if(!_iteratorNormalCompletion40&&_iterator40.return!=null){_iterator40.return();}}finally{if(_didIteratorError40){throw _iteratorError40;}}}}}}},{key:"_addFirstCell",value:function _addFirstCell(firstCell){if( true&&this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){// Pausing here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}this.firstCells.add(firstCell);var _iteratorNormalCompletion41=true;var _didIteratorError41=false;var _iteratorError41=undefined;try{for(var _iterator41=this.ellipsisBracketListeners[Symbol.iterator](),_step41;!(_iteratorNormalCompletion41=(_step41=_iterator41.next()).done);_iteratorNormalCompletion41=true){var _step41$value=_slicedToArray(_step41.value,2),ellipsisBracket=_step41$value[0],token=_step41$value[1];ellipsisBracket.addFirstCell(this,firstCell,token);}}catch(err){_didIteratorError41=true;_iteratorError41=err;}finally{try{if(!_iteratorNormalCompletion41&&_iterator41.return!=null){_iterator41.return();}}finally{if(_didIteratorError41){throw _iteratorError41;}}}}},{key:"addCell",value:function addCell(index,neighbor,t,sprite,cell,wantsToMove){// check if downstream neighbors match
if(!this.matchesDownstream(cell,index)){// Try to remove the match if there is one
var firstCell=this.getUpstream(cell,index);if(firstCell){this._removeFirstCell(cell);}return;}// Loop Upstream
// check the neighbors upstream of curCell
var firstCellUp=this.matchesUpstream(cell,index);if(!firstCellUp){// Try to remove the match if there is one
var firstCellMatched=this.getUpstream(cell,index);if(firstCellMatched){this._removeFirstCell(firstCellMatched);}return;}// Add to the set of firstNeighbors
// We have a match. Add to the firstCells set.
this._addFirstCell(firstCellUp);}},{key:"removeCell",value:function removeCell(index,neighbor,t,sprite,cell){// cell was removed
// Loop Upstream
var firstCell=this.getFirstCellToRemove(cell,index);// Bracket might not match for all directions (likely not), so we might not find a firstCell to remove
// But that's OK.
if(firstCell&&this.firstCells.has(firstCell)){this._removeFirstCell(firstCell);}}},{key:"shouldUseOnDemandMethod",value:function shouldUseOnDemandMethod(){// return true
// return false
// return this.neighbors.length === 1
// return this.neighbors.length !== 1
return process.env.PUZZLESCRIPT_METHOD==='ondemand';}},{key:"getMatchesByTrickling",value:function getMatchesByTrickling(level,actionBracket){var matches=[];var _iteratorNormalCompletion42=true;var _didIteratorError42=false;var _iteratorError42=undefined;try{for(var _iterator42=this.firstCells[Symbol.iterator](),_step42;!(_iteratorNormalCompletion42=(_step42=_iterator42.next()).done);_iteratorNormalCompletion42=true){var firstCell=_step42.value;this.addToCellMatches(matches,firstCell,actionBracket);}}catch(err){_didIteratorError42=true;_iteratorError42=err;}finally{try{if(!_iteratorNormalCompletion42&&_iterator42.return!=null){_iterator42.return();}}finally{if(_didIteratorError42){throw _iteratorError42;}}}return matches;}},{key:"getMatchesByLooping",value:function getMatchesByLooping(level,actionBracket){var matches=[];// Naiive version:
// for (const row of level.getCells()) {
//     for (const cell of row) {
//         checkCell(cell)
//     }
// }
var cells=level.getCells();var rowCount=cells.length;var colCount=cells[0].length;switch(this.direction){case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].UP:case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].DOWN:for(var colIndex=0;colIndex<colCount;colIndex++){if(level.colContainsSprites(colIndex,this.spritesPresentInRowOrColumn,this.anySpritesPresentInRowOrColumn)){for(var rowIndex=0;rowIndex<rowCount;rowIndex++){this.addIfCellMatches(matches,level.getCell(rowIndex,colIndex),actionBracket);}}}break;case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].LEFT:case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].RIGHT:for(var _rowIndex=0;_rowIndex<rowCount;_rowIndex++){if(level.rowContainsSprites(_rowIndex,this.spritesPresentInRowOrColumn,this.anySpritesPresentInRowOrColumn)){for(var _colIndex=0;_colIndex<colCount;_colIndex++){this.addIfCellMatches(matches,level.getCell(_rowIndex,_colIndex),actionBracket);}}}break;default:throw new Error("BUG: Unsupported Direction \"".concat(this.direction,"\""));}return matches;}},{key:"getMatches",value:function getMatches(level,actionBracket){if( true&&this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){// A "DEBUGGER" flag was set in the game so we are pausing here
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}var matches;if(!this.shouldUseOnDemandMethod()){matches=this.getMatchesByTrickling(level,actionBracket);if(process.env.VERIFY_MATCHES){var loopingMatches=this.getMatchesByLooping(level,actionBracket);if(matches.length!==loopingMatches.length){debugger;// tslint:disable-line:no-debugger
this.getMatchesByTrickling(level,actionBracket);// run again so we can step through
this.getMatchesByLooping(level,actionBracket);// run again so we can step through
throw new Error("Match lengths differ. Expected ".concat(loopingMatches.length," but found ").concat(matches.length,". \n").concat(this.toString()));}}}else{matches=this.getMatchesByLooping(level,actionBracket);}return matches;}},{key:"a11yGetSprites",value:function a11yGetSprites(){var sprites=new Set();var _iteratorNormalCompletion43=true;var _didIteratorError43=false;var _iteratorError43=undefined;try{for(var _iterator43=this.neighbors[Symbol.iterator](),_step43;!(_iteratorNormalCompletion43=(_step43=_iterator43.next()).done);_iteratorNormalCompletion43=true){var n=_step43.value;var _iteratorNormalCompletion44=true;var _didIteratorError44=false;var _iteratorError44=undefined;try{for(var _iterator44=n._tilesWithModifier[Symbol.iterator](),_step44;!(_iteratorNormalCompletion44=(_step44=_iterator44.next()).done);_iteratorNormalCompletion44=true){var _t=_step44.value;var _iteratorNormalCompletion45=true;var _didIteratorError45=false;var _iteratorError45=undefined;try{for(var _iterator45=_t._tile.getSprites()[Symbol.iterator](),_step45;!(_iteratorNormalCompletion45=(_step45=_iterator45.next()).done);_iteratorNormalCompletion45=true){var s=_step45.value;sprites.add(s);}}catch(err){_didIteratorError45=true;_iteratorError45=err;}finally{try{if(!_iteratorNormalCompletion45&&_iterator45.return!=null){_iterator45.return();}}finally{if(_didIteratorError45){throw _iteratorError45;}}}}}catch(err){_didIteratorError44=true;_iteratorError44=err;}finally{try{if(!_iteratorNormalCompletion44&&_iterator44.return!=null){_iterator44.return();}}finally{if(_didIteratorError44){throw _iteratorError44;}}}}}catch(err){_didIteratorError43=true;_iteratorError43=err;}finally{try{if(!_iteratorNormalCompletion43&&_iterator43.return!=null){_iterator43.return();}}finally{if(_didIteratorError43){throw _iteratorError43;}}}return[sprites];}},{key:"_removeFirstCell",value:function _removeFirstCell(firstCell){if(this.firstCells.has(firstCell)){if( true&&this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT_REMOVE){// Pausing here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}this.firstCells.delete(firstCell);var _iteratorNormalCompletion46=true;var _didIteratorError46=false;var _iteratorError46=undefined;try{for(var _iterator46=this.ellipsisBracketListeners[Symbol.iterator](),_step46;!(_iteratorNormalCompletion46=(_step46=_iterator46.next()).done);_iteratorNormalCompletion46=true){var _step46$value=_slicedToArray(_step46.value,2),ellipsisBracket=_step46$value[0],token=_step46$value[1];ellipsisBracket.removeFirstCell(this,firstCell,token);}}catch(err){_didIteratorError46=true;_iteratorError46=err;}finally{try{if(!_iteratorNormalCompletion46&&_iterator46.return!=null){_iterator46.return();}}finally{if(_didIteratorError46){throw _iteratorError46;}}}}}},{key:"matchesDownstream",value:function matchesDownstream(cell,index){// Check all the neighbors and add the firstNeighbor to the set of matches for this direction
var matched=true;var curCell=cell;// Loop Downstream
// check the neighbors downstream of curCell
for(var x=index+1;x<this.neighbors.length;x++){curCell=curCell.getNeighbor(this.direction);// TODO: Convert the neighbor check into a method
if(curCell&&(this.neighbors[x]._tilesWithModifier.size===0||this.neighbors[x].matchesCellSimple(curCell))){// keep going
}else{matched=false;break;}}return matched;}},{key:"getUpstream",value:function getUpstream(cell,index){var curCell=cell;for(var x=index-1;x>=0;x--){curCell=curCell.getNeighbor(Object(_util__WEBPACK_IMPORTED_MODULE_4__["opposite"])(this.direction));if(curCell){// keep going
}else{return null;}}return curCell;}},{key:"matchesUpstream",value:function matchesUpstream(cell,index){var matched=true;var curCell=cell;// check the neighbors upstream of curCell
for(var x=index-1;x>=0;x--){curCell=curCell.getNeighbor(Object(_util__WEBPACK_IMPORTED_MODULE_4__["opposite"])(this.direction));if(curCell&&(this.neighbors[x]._tilesWithModifier.size===0||this.neighbors[x].matchesCellSimple(curCell))){// keep going
}else{matched=false;break;}}return matched?curCell:null;}},{key:"getFirstCellToRemove",value:function getFirstCellToRemove(cell,index){// Loop Upstream
// check the neighbors upstream of curCell
var matched=true;var curCell=cell;// check the neighbors upstream of curCell
for(var x=index-1;x>=0;x--){curCell=curCell.getNeighbor(Object(_util__WEBPACK_IMPORTED_MODULE_4__["opposite"])(this.direction));if(curCell){// keep going
}else{matched=false;break;}}return matched?curCell:null;}},{key:"addToCellMatches",value:function addToCellMatches(matches,cell,actionBracket){var cellMatches=[];var curCell=cell;var didAllNeighborsMatch=true;for(var _index7=0;_index7<this.neighbors.length;_index7++){if(!curCell){didAllNeighborsMatch=false;break;}var _condition7=this.neighbors[_index7];var _action5=null;// Some rules only contain a condition bracket and a command
if(actionBracket){_action5=actionBracket.neighbors[_index7]||null;}var x={cell:curCell,condition:_condition7,action:_action5};cellMatches.push(x);curCell=curCell.getNeighbor(this.direction);}if(didAllNeighborsMatch){matches.push(new MatchedCellsForRule(cellMatches));}}},{key:"addIfCellMatches",value:function addIfCellMatches(matches,cell,actionBracket){if(this.neighbors[0].matchesCellSimple(cell)&&this.matchesDownstream(cell,0)){this.addToCellMatches(matches,cell,actionBracket);}}}]);return SimpleBracket;}(ISimpleBracket);var BEFORE_OR_AFTER;(function(BEFORE_OR_AFTER){BEFORE_OR_AFTER[BEFORE_OR_AFTER["BEFORE"]=0]="BEFORE";BEFORE_OR_AFTER[BEFORE_OR_AFTER["AFTER"]=1]="AFTER";})(BEFORE_OR_AFTER||(BEFORE_OR_AFTER={}));var MultiMap=/*#__PURE__*/function(){function MultiMap(){_classCallCheck(this,MultiMap);this.map=new Map();}_createClass(MultiMap,[{key:"clear",value:function clear(){this.map.clear();}// public has(a: A, b: B) {
//     const set = this.map.get(a)
//     if (set) {
//         return set.has(b)
//     }
//     return false
// }
},{key:"getB",value:function getB(a){return this.map.get(a);}},{key:"add",value:function add(a,b){var set=this.map.get(a);if(!set){set=new Set();this.map.set(a,set);}if(!set.has(b)){set.add(b);return true;}return false;}},{key:"deleteAllA",value:function deleteAllA(a){this.map.delete(a);}},{key:"deleteAllB",value:function deleteAllB(b){var asRemoved=new Set();var _iteratorNormalCompletion47=true;var _didIteratorError47=false;var _iteratorError47=undefined;try{for(var _iterator47=this.map[Symbol.iterator](),_step47;!(_iteratorNormalCompletion47=(_step47=_iterator47.next()).done);_iteratorNormalCompletion47=true){var _step47$value=_slicedToArray(_step47.value,2),a=_step47$value[0],set=_step47$value[1];if(set.has(b)){set.delete(b);if(set.size===0){this.map.delete(a);asRemoved.add(a);}}}}catch(err){_didIteratorError47=true;_iteratorError47=err;}finally{try{if(!_iteratorNormalCompletion47&&_iterator47.return!=null){_iterator47.return();}}finally{if(_didIteratorError47){throw _iteratorError47;}}}return asRemoved;}},{key:"sizeA",value:function sizeA(){return this.map.size;}// public delete(a: A, b: B) {
//     const set = this.map.get(a)
//     if (set) {
//         if (!set.has(b)) {
//             throw new Error(`BUG: Invariant error. Link did not exist so nothing to remove`)
//         }
//         set.delete(b)
//     }
// }
// public hasA(a: A) {
//     return this.map.has(a)
// }
// public hasB(b: B) {
//     return !!this.getA(b)
// }
// public getA(b: B) {
//     const ret = new Set()
//     for (const [a, set] of this.map) {
//         if (set.has(b)) {
//             ret.add(a)
//         }
//     }
//     if (ret.size > 0) {
//         return ret
//     }
//     return undefined
// }
// public size() {
//     let size = 0
//     for (const set of this.map.values()) {
//         size += set.size
//     }
//     return size
// }
}]);return MultiMap;}();var SimpleEllipsisBracket=/*#__PURE__*/function(_ISimpleBracket2){_inherits(SimpleEllipsisBracket,_ISimpleBracket2);// 1 before may have many afters
function SimpleEllipsisBracket(source,direction,beforeEllipsisNeighbors,afterEllipsisNeighbors,debugFlag){var _this8;_classCallCheck(this,SimpleEllipsisBracket);_this8=_possibleConstructorReturn(this,_getPrototypeOf(SimpleEllipsisBracket).call(this,source,direction,[].concat(_toConsumableArray(beforeEllipsisNeighbors),_toConsumableArray(afterEllipsisNeighbors)),debugFlag));_this8.beforeEllipsisBracket=new SimpleBracket(source,direction,beforeEllipsisNeighbors,debugFlag);_this8.afterEllipsisBracket=new SimpleBracket(source,direction,afterEllipsisNeighbors,debugFlag);_this8.linkages=new MultiMap();return _this8;}_createClass(SimpleEllipsisBracket,[{key:"subscribeToNeighborChanges",value:function subscribeToNeighborChanges(){this.beforeEllipsisBracket.subscribeToNeighborChanges();this.afterEllipsisBracket.subscribeToNeighborChanges();this.beforeEllipsisBracket.addEllipsisBracket(this,BEFORE_OR_AFTER.BEFORE);this.afterEllipsisBracket.addEllipsisBracket(this,BEFORE_OR_AFTER.AFTER);}},{key:"toKey",value:function toKey(){return"[".concat(this.direction," ").concat(this.beforeEllipsisBracket.toKey()," ... ").concat(this.afterEllipsisBracket.toKey(),"]}");}},{key:"clearCaches",value:function clearCaches(){this.firstCells.clear();this.linkages.clear();this.beforeEllipsisBracket.clearCaches();this.afterEllipsisBracket.clearCaches();}},{key:"prepareAction",value:function prepareAction(action){var actionBracket=action;// since we know the condition and action side need to match
this.beforeEllipsisBracket.prepareAction(actionBracket.beforeEllipsisBracket);this.afterEllipsisBracket.prepareAction(actionBracket.afterEllipsisBracket);}},{key:"addCellsToEmptyRules",value:function addCellsToEmptyRules(cells){this.beforeEllipsisBracket.addCellsToEmptyRules(cells);this.afterEllipsisBracket.addCellsToEmptyRules(cells);}},{key:"addCell",value:function addCell(index,neighbor,t,sprite,cell,wantsToMove){throw new Error("BUG: We should not be subscribed to these events");}},{key:"removeCell",value:function removeCell(index,neighbor,t,sprite,cell){throw new Error("BUG: We should not be subscribed to these events");}},{key:"addFirstCell",value:function addFirstCell(bracket,firstCell,token){// // check to see if the new cell is in line with any firstCells in the other bracket. If so, we have a match!
// let firstBeforeCells
// let firstAfterCells
// if (bracket == this.beforeEllipsisBracket) {
//     firstBeforeCells = new Set([firstCell])
//     // search for a matching afterCell
//     firstAfterCells = this.findMatching(firstCell, this.direction, this.afterEllipsisBracket)
// } else if (bracket === this.afterEllipsisBracket) {
//     firstAfterCells = new Set([firstCell])
//     // search for a matching beforeCell
//     firstBeforeCells = this.findMatching(firstCell, opposite(this.direction), this.beforeEllipsisBracket)
// } else {
//     throw new Error(`BUG: Bracket should only ever be the before-ellipsis or after-ellipsis one`)
// }
// for (const firstBeforeCell of firstBeforeCells) {
//     for (const firstAfterCell of firstAfterCells) {
//         this.checkInvariants()
//         // Check if we need to actually change anything first. Becauase the !doesEvaluationOrderMatter case
//         // keeps iterating on the set of firstCells but if they keep flipping then it's a problem because it
//         // runs in an infinite loop
//         // Delete any mapping that may have existed before
//         if (this.linkages.has(firstBeforeCell, firstAfterCell)) {
//             // nothing to do. we already have those entries
//         } else {
//             this.linkages.add(firstBeforeCell, firstAfterCell)
//             this.firstCells.add(firstBeforeCell)
//         }
//         this.checkInvariants()
//     }
// }
}},{key:"removeFirstCell",value:function removeFirstCell(bracket,firstCell,token){// Figure out the 1st cell for us and remove it (by maybe looking at the matching bracket)
this.checkInvariants();if(bracket===this.beforeEllipsisBracket){this.linkages.deleteAllA(firstCell);if(this.firstCells.has(firstCell)){throw new Error("BUG: Unreachable code");}}else if(bracket===this.afterEllipsisBracket){var beforeCellsRemoved=this.linkages.deleteAllB(firstCell);if(beforeCellsRemoved.size>0){throw new Error("BUG: Unreachable code");}}else{throw new Error("BUG: Bracket should only ever be the before-ellipsis or after-ellipsis one");}this.checkInvariants();}// private findMatching(cell: Cell, direction: RULE_DIRECTION, inBracket: SimpleBracket) {
//     const matches = new Set()
//     for (const inBracketCell of inBracket.getFirstCells()) {
//         switch (direction) {
//             case RULE_DIRECTION.UP:
//                 if (cell.colIndex === inBracketCell.colIndex && cell.rowIndex > inBracketCell.rowIndex) {
//                     matches.add(inBracketCell)
//                 }
//                 break
//             case RULE_DIRECTION.DOWN:
//                 if (cell.colIndex === inBracketCell.colIndex && cell.rowIndex < inBracketCell.rowIndex) {
//                     matches.add(inBracketCell)
//                 }
//                 break
//             case RULE_DIRECTION.LEFT:
//                 if (cell.colIndex > inBracketCell.colIndex && cell.rowIndex === inBracketCell.rowIndex) {
//                     matches.add(inBracketCell)
//                 }
//                 break
//             case RULE_DIRECTION.RIGHT:
//                 if (cell.colIndex < inBracketCell.colIndex && cell.rowIndex === inBracketCell.rowIndex) {
//                     matches.add(inBracketCell)
//                 }
//                 break
//             default:
//                 throw new Error(`BUG: Invalid direction`)
//         }
//     }
//     return matches
// }
},{key:"getMatches",value:function getMatches(level,actionBracket){var ret=[];var beforeMatches;var afterMatches;if(actionBracket){beforeMatches=this.beforeEllipsisBracket.getMatches(level,actionBracket.beforeEllipsisBracket);afterMatches=this.afterEllipsisBracket.getMatches(level,actionBracket.afterEllipsisBracket);}else{beforeMatches=this.beforeEllipsisBracket.getMatches(level,null);afterMatches=this.afterEllipsisBracket.getMatches(level,null);}var beforeMatchesByIndex=new MultiMap();if(beforeMatches.length===0||afterMatches.length===0){return[];}switch(this.direction){case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].UP:case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].DOWN:var _iteratorNormalCompletion48=true;var _didIteratorError48=false;var _iteratorError48=undefined;try{for(var _iterator48=beforeMatches[Symbol.iterator](),_step48;!(_iteratorNormalCompletion48=(_step48=_iterator48.next()).done);_iteratorNormalCompletion48=true){var beforeMatch=_step48.value;beforeMatchesByIndex.add(beforeMatch.lastCell().colIndex,beforeMatch);}}catch(err){_didIteratorError48=true;_iteratorError48=err;}finally{try{if(!_iteratorNormalCompletion48&&_iterator48.return!=null){_iterator48.return();}}finally{if(_didIteratorError48){throw _iteratorError48;}}}var _iteratorNormalCompletion49=true;var _didIteratorError49=false;var _iteratorError49=undefined;try{for(var _iterator49=afterMatches[Symbol.iterator](),_step49;!(_iteratorNormalCompletion49=(_step49=_iterator49.next()).done);_iteratorNormalCompletion49=true){var afterMatch=_step49.value;var _afterMatch$firstCell=afterMatch.firstCell(),colIndex=_afterMatch$firstCell.colIndex,rowIndex=_afterMatch$firstCell.rowIndex;var _iteratorNormalCompletion50=true;var _didIteratorError50=false;var _iteratorError50=undefined;try{for(var _iterator50=(beforeMatchesByIndex.getB(colIndex)||[])[Symbol.iterator](),_step50;!(_iteratorNormalCompletion50=(_step50=_iterator50.next()).done);_iteratorNormalCompletion50=true){var _beforeMatch=_step50.value;// check if the afterMatch matches it.
// If so, remove the beforeMatch and include the whole match
var _beforeMatch$lastCell=_beforeMatch.lastCell(),beforeRowIndex=_beforeMatch$lastCell.rowIndex;var isAfter=this.direction===_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].DOWN?beforeRowIndex<rowIndex:rowIndex<beforeRowIndex;if(isAfter){ret.push(new MatchedCellsForRule(_toConsumableArray(_beforeMatch.cellsAndNeighbors).concat(_toConsumableArray(afterMatch.cellsAndNeighbors))));// beforeMatchesByIndex.delete(colIndex, beforeMatch)
}}}catch(err){_didIteratorError50=true;_iteratorError50=err;}finally{try{if(!_iteratorNormalCompletion50&&_iterator50.return!=null){_iterator50.return();}}finally{if(_didIteratorError50){throw _iteratorError50;}}}}}catch(err){_didIteratorError49=true;_iteratorError49=err;}finally{try{if(!_iteratorNormalCompletion49&&_iterator49.return!=null){_iterator49.return();}}finally{if(_didIteratorError49){throw _iteratorError49;}}}break;case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].LEFT:case _util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].RIGHT:var _iteratorNormalCompletion51=true;var _didIteratorError51=false;var _iteratorError51=undefined;try{for(var _iterator51=beforeMatches[Symbol.iterator](),_step51;!(_iteratorNormalCompletion51=(_step51=_iterator51.next()).done);_iteratorNormalCompletion51=true){var _beforeMatch2=_step51.value;beforeMatchesByIndex.add(_beforeMatch2.lastCell().rowIndex,_beforeMatch2);}}catch(err){_didIteratorError51=true;_iteratorError51=err;}finally{try{if(!_iteratorNormalCompletion51&&_iterator51.return!=null){_iterator51.return();}}finally{if(_didIteratorError51){throw _iteratorError51;}}}var _iteratorNormalCompletion52=true;var _didIteratorError52=false;var _iteratorError52=undefined;try{for(var _iterator52=afterMatches[Symbol.iterator](),_step52;!(_iteratorNormalCompletion52=(_step52=_iterator52.next()).done);_iteratorNormalCompletion52=true){var _afterMatch=_step52.value;var _afterMatch$firstCell2=_afterMatch.firstCell(),rowIndex=_afterMatch$firstCell2.rowIndex,colIndex=_afterMatch$firstCell2.colIndex;var _iteratorNormalCompletion53=true;var _didIteratorError53=false;var _iteratorError53=undefined;try{for(var _iterator53=(beforeMatchesByIndex.getB(rowIndex)||[])[Symbol.iterator](),_step53;!(_iteratorNormalCompletion53=(_step53=_iterator53.next()).done);_iteratorNormalCompletion53=true){var _beforeMatch3=_step53.value;// check if the afterMatch matches it.
// If so, remove the beforeMatch and include the whole match
var _beforeMatch3$lastCel=_beforeMatch3.lastCell(),beforeColIndex=_beforeMatch3$lastCel.colIndex;var _isAfter=this.direction===_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].RIGHT?beforeColIndex<colIndex:colIndex<beforeColIndex;if(_isAfter){ret.push(new MatchedCellsForRule(_toConsumableArray(_beforeMatch3.cellsAndNeighbors).concat(_toConsumableArray(_afterMatch.cellsAndNeighbors))));// beforeMatchesByIndex.delete(rowIndex, beforeMatch)
}}}catch(err){_didIteratorError53=true;_iteratorError53=err;}finally{try{if(!_iteratorNormalCompletion53&&_iterator53.return!=null){_iterator53.return();}}finally{if(_didIteratorError53){throw _iteratorError53;}}}}}catch(err){_didIteratorError52=true;_iteratorError52=err;}finally{try{if(!_iteratorNormalCompletion52&&_iterator52.return!=null){_iterator52.return();}}finally{if(_didIteratorError52){throw _iteratorError52;}}}break;default:throw new Error("BUG: Invalid direction ".concat(this.direction));}return ret;}},{key:"a11yGetSprites",value:function a11yGetSprites(){return[].concat(_toConsumableArray(this.beforeEllipsisBracket.a11yGetSprites()),_toConsumableArray(this.afterEllipsisBracket.a11yGetSprites()));}},{key:"checkInvariants",value:function checkInvariants(){if(this.firstCells.size!==this.linkages.sizeA()){throw new Error("BUG: Invariant violation");}}}]);return SimpleEllipsisBracket;}(ISimpleBracket);var A11Y_MESSAGE_TYPE;(function(A11Y_MESSAGE_TYPE){A11Y_MESSAGE_TYPE["ADD"]="ADD";A11Y_MESSAGE_TYPE["REPLACE"]="REPLACE";A11Y_MESSAGE_TYPE["REMOVE"]="REMOVE";A11Y_MESSAGE_TYPE["MOVE"]="MOVE";})(A11Y_MESSAGE_TYPE||(A11Y_MESSAGE_TYPE={}));var ReplaceTile=/*#__PURE__*/function(){function ReplaceTile(collisionLayer,actionTileWithModifier,mightNotFindConditionButThatIsOk,conditionSpritesToRemove,newDirection){_classCallCheck(this,ReplaceTile);if(!collisionLayer){throw new Error('BUG: collisionLayer is not set');}this.collisionLayer=collisionLayer;this.actionTileWithModifier=actionTileWithModifier;this.mightNotFindConditionButThatIsOk=mightNotFindConditionButThatIsOk;this.conditionSpritesToRemove=conditionSpritesToRemove;this.newDirection=newDirection;}_createClass(ReplaceTile,[{key:"replace",value:function replace(cell,magicOrTiles,orTilesRemoved){var didActuallyChange=false;var messages=[];// Check if we are adding or removing....
if(this.actionTileWithModifier){// adding
var _sprites;// if RANDOM is set then pick a random sprite to add
if(this.actionTileWithModifier.isRandom()){var spritesToChoose=this.actionTileWithModifier._tile.getSprites();var rnd=Object(_util__WEBPACK_IMPORTED_MODULE_4__["nextRandom"])(spritesToChoose.length);_sprites=[spritesToChoose[rnd]];}else if(this.actionTileWithModifier._tile.isOr()){// There is no sprite of this type already in the cell. It's in the magicOrTiles
var s=magicOrTiles.get(this.actionTileWithModifier._tile);if(!s){throw new Error("BUG: Magic OR tile not found\n".concat(this.actionTileWithModifier.toString()));}_sprites=s;}else{_sprites=this.actionTileWithModifier._tile.getSprites();}var addedSprites=[];var replacedSprites=[];var _iteratorNormalCompletion54=true;var _didIteratorError54=false;var _iteratorError54=undefined;try{for(var _iterator54=_sprites[Symbol.iterator](),_step54;!(_iteratorNormalCompletion54=(_step54=_iterator54.next()).done);_iteratorNormalCompletion54=true){var _sprite3=_step54.value;var c=_sprite3.getCollisionLayer();var _wantsToMove=this.newDirection||cell.getCollisionLayerWantsToMove(c);var added=void 0;if(cell.hasSprite(_sprite3)){if(!_wantsToMove){throw new Error("BUG: Invariant violation. if the sprite exists then wantsToMove must also exist (at least it would be STATIONARY)");}added=cell.updateSprite(_sprite3,_wantsToMove);}else{var _oldSprite=cell.getSpriteByCollisionLayer(c);if(_oldSprite){replacedSprites.push({oldSprite:_oldSprite,newSprite:_sprite3});}else{addedSprites.push(_sprite3);}// preserve the wantsToMove if the sprite is in the same collision layer
added=cell.addSprite(_sprite3,_wantsToMove);}didActuallyChange=didActuallyChange||added;}}catch(err){_didIteratorError54=true;_iteratorError54=err;}finally{try{if(!_iteratorNormalCompletion54&&_iterator54.return!=null){_iterator54.return();}}finally{if(_didIteratorError54){throw _iteratorError54;}}}messages.push({type:A11Y_MESSAGE_TYPE.ADD,cell:cell,sprites:addedSprites});messages.push({type:A11Y_MESSAGE_TYPE.REPLACE,cell:cell,replacements:replacedSprites});}else{// removing
var removedSprites=new Set();var tile=cell.getSpriteByCollisionLayer(this.collisionLayer);if(!tile&&this.mightNotFindConditionButThatIsOk){// this occurs when there is just a -> [ NO Color ] on the action side (remove color if it exists)
return{didActuallyChange:false,messages:[]};}if(!tile){throw new Error("BUG: No tile found");}if(this.conditionSpritesToRemove){// For OR tiles we need to only remove one of the sprites, not ALL of the sprites
if(this.conditionSpritesToRemove._tile.isOr()){if(!orTilesRemoved.has(this.conditionSpritesToRemove._tile)){// only remove the sprites in the cell that match the condition... not all the sprites in a collisionLayer
var cellSprites=tile.getSprites();var _iteratorNormalCompletion55=true;var _didIteratorError55=false;var _iteratorError55=undefined;try{for(var _iterator55=this.conditionSpritesToRemove._tile.getSprites()[Symbol.iterator](),_step55;!(_iteratorNormalCompletion55=(_step55=_iterator55.next()).done);_iteratorNormalCompletion55=true){var conditionSpriteToRemove=_step55.value;if(cellSprites.indexOf(conditionSpriteToRemove)>=0){var removed=cell.removeSprite(conditionSpriteToRemove);removedSprites.add(conditionSpriteToRemove);didActuallyChange=didActuallyChange||removed;if(removed){orTilesRemoved.add(this.conditionSpritesToRemove._tile);}break;}}}catch(err){_didIteratorError55=true;_iteratorError55=err;}finally{try{if(!_iteratorNormalCompletion55&&_iterator55.return!=null){_iterator55.return();}}finally{if(_didIteratorError55){throw _iteratorError55;}}}}}else{// only remove the sprites in the cell that match the condition... not all the sprites in a collisionLayer
var conditionSpritesToRemove=new Set(this.conditionSpritesToRemove._tile.getSprites());var _iteratorNormalCompletion56=true;var _didIteratorError56=false;var _iteratorError56=undefined;try{for(var _iterator56=tile.getSprites()[Symbol.iterator](),_step56;!(_iteratorNormalCompletion56=(_step56=_iterator56.next()).done);_iteratorNormalCompletion56=true){var _sprite4=_step56.value;if(conditionSpritesToRemove.has(_sprite4)){var _removed=cell.removeSprite(_sprite4);removedSprites.add(_sprite4);didActuallyChange=didActuallyChange||_removed;}}}catch(err){_didIteratorError56=true;_iteratorError56=err;}finally{try{if(!_iteratorNormalCompletion56&&_iterator56.return!=null){_iterator56.return();}}finally{if(_didIteratorError56){throw _iteratorError56;}}}}}else{throw new Error("BUG: Not implemented (just commented out)");// // remove all sprites
// for (const sprite of tile.getSprites()) {
//     const removed = cell.removeSprite(sprite)
//     didActuallyChange = didActuallyChange || removed
// }
}messages.push({type:A11Y_MESSAGE_TYPE.REMOVE,cell:cell,sprites:removedSprites});}// return the oldSprite for UNDO
return{didActuallyChange:didActuallyChange,messages:messages};}}]);return ReplaceTile;}();var ReplaceDirection=/*#__PURE__*/function(){function ReplaceDirection(collisionLayer,direction,mightNotFindConditionButThatIsOk){_classCallCheck(this,ReplaceDirection);if(!collisionLayer){throw new Error('BUG: collisionLayer is not set');}this.collisionLayer=collisionLayer;this.direction=direction;this.mightNotFindConditionButThatIsOk=mightNotFindConditionButThatIsOk;}_createClass(ReplaceDirection,[{key:"replace",value:function replace(cell){var direction=this.direction;// It's OK if this sprite is not in the condition. This happens when an OR action tile has sprites that are in multiple collision layers
if(this.mightNotFindConditionButThatIsOk&&!cell.getSpriteByCollisionLayer(this.collisionLayer)){return{didActuallyChange:false};}// Pick a random direction
if(this.direction===_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].RANDOMDIR){// only set the direction if one has not already been set
if(cell.getCollisionLayerWantsToMove(this.collisionLayer)===_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].STATIONARY){switch(Object(_util__WEBPACK_IMPORTED_MODULE_4__["nextRandom"])(4)){case 0:direction=_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].UP;break;case 1:direction=_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].DOWN;break;case 2:direction=_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].LEFT;break;case 3:direction=_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].RIGHT;break;default:throw new Error("BUG: invalid random number chosen");}}else{// a direction was already set
return{didActuallyChange:false};}}return{didActuallyChange:cell.setWantsToMoveCollisionLayer(this.collisionLayer,direction)};}}]);return ReplaceDirection;}();var SimpleNeighbor=/*#__PURE__*/function(_BaseForLines5){_inherits(SimpleNeighbor,_BaseForLines5);function SimpleNeighbor(source,tilesWithModifier,debugFlag){var _this9;_classCallCheck(this,SimpleNeighbor);_this9=_possibleConstructorReturn(this,_getPrototypeOf(SimpleNeighbor).call(this,source));// this.alreadyReportedMismatch = false
_this9._tilesWithModifier=tilesWithModifier;_this9.brackets=new Map();// this._localCellCache = new Map()
_this9.debugFlag=debugFlag;_this9.staticCache=new Map();_this9.spritesPresent=new _spriteBitSet__WEBPACK_IMPORTED_MODULE_3__["SpriteBitSet"]();_this9.spritesMissing=new _spriteBitSet__WEBPACK_IMPORTED_MODULE_3__["SpriteBitSet"]();_this9.anySpritesPresent=new Set();_this9.spriteMovementsPresent=new Map();_this9.orTileMovementsPresent=new Map();_this9.trickleCells=new Set();_this9.lruCache=new _lruCache__WEBPACK_IMPORTED_MODULE_1__["default"](LRU_CACHE_SIZE);// Build up the cache BitSet for each collisionLayer
_this9.cacheYesBitSets=new Map();_this9.cacheNoBitSets=new Map();_this9.cacheDirections=new Map();_this9.cacheMultiCollisionLayerTiles=new Set();var allTiles=_toConsumableArray(tilesWithModifier);var noTiles=allTiles.filter(function(t){return t.isNo();});var yesTiles=allTiles.filter(function(t){return!t.isNo();});var _iteratorNormalCompletion57=true;var _didIteratorError57=false;var _iteratorError57=undefined;try{for(var _iterator57=yesTiles[Symbol.iterator](),_step57;!(_iteratorNormalCompletion57=(_step57=_iterator57.next()).done);_iteratorNormalCompletion57=true){var _t2=_step57.value;if(_t2._tile.hasSingleCollisionLayer()){var _iteratorNormalCompletion59=true;var _didIteratorError59=false;var _iteratorError59=undefined;try{for(var _iterator59=_t2._tile.getSprites()[Symbol.iterator](),_step59;!(_iteratorNormalCompletion59=(_step59=_iterator59.next()).done);_iteratorNormalCompletion59=true){var _sprite5=_step59.value;var c=_sprite5.getCollisionLayer();if(_t2._direction){_this9.cacheDirections.set(c,_t2._direction);}var yesBitSet=_this9.cacheYesBitSets.get(c);if(!yesBitSet){yesBitSet=new BitSet2();_this9.cacheYesBitSets.set(c,yesBitSet);}yesBitSet.set(c.getBitSetIndexOf(_sprite5));}}catch(err){_didIteratorError59=true;_iteratorError59=err;}finally{try{if(!_iteratorNormalCompletion59&&_iterator59.return!=null){_iterator59.return();}}finally{if(_didIteratorError59){throw _iteratorError59;}}}}else{_this9.cacheMultiCollisionLayerTiles.add(_t2);}if(_t2._tile.isOr()){_this9.anySpritesPresent.add(new _spriteBitSet__WEBPACK_IMPORTED_MODULE_3__["SpriteBitSet"](_t2._tile.getSprites()));if(_t2._direction){_this9.orTileMovementsPresent.set(_t2._tile,_t2._direction);}}else{_this9.spritesPresent.addAll(_t2._tile.getSprites());var _iteratorNormalCompletion60=true;var _didIteratorError60=false;var _iteratorError60=undefined;try{for(var _iterator60=_t2._tile.getSprites()[Symbol.iterator](),_step60;!(_iteratorNormalCompletion60=(_step60=_iterator60.next()).done);_iteratorNormalCompletion60=true){var _sprite6=_step60.value;if(_t2._direction){var prevDir=_this9.spriteMovementsPresent.get(_sprite6.getCollisionLayer());if(prevDir&&prevDir!==_t2._direction){throw new Error("BUG??? prev=".concat(prevDir," ").concat(_t2._direction));}_this9.spriteMovementsPresent.set(_sprite6.getCollisionLayer(),_t2._direction);}}}catch(err){_didIteratorError60=true;_iteratorError60=err;}finally{try{if(!_iteratorNormalCompletion60&&_iterator60.return!=null){_iterator60.return();}}finally{if(_didIteratorError60){throw _iteratorError60;}}}}}}catch(err){_didIteratorError57=true;_iteratorError57=err;}finally{try{if(!_iteratorNormalCompletion57&&_iterator57.return!=null){_iterator57.return();}}finally{if(_didIteratorError57){throw _iteratorError57;}}}var _iteratorNormalCompletion58=true;var _didIteratorError58=false;var _iteratorError58=undefined;try{for(var _iterator58=noTiles[Symbol.iterator](),_step58;!(_iteratorNormalCompletion58=(_step58=_iterator58.next()).done);_iteratorNormalCompletion58=true){var _t3=_step58.value;if(_t3._tile.hasSingleCollisionLayer()){var _iteratorNormalCompletion61=true;var _didIteratorError61=false;var _iteratorError61=undefined;try{for(var _iterator61=_t3._tile.getSprites()[Symbol.iterator](),_step61;!(_iteratorNormalCompletion61=(_step61=_iterator61.next()).done);_iteratorNormalCompletion61=true){var _sprite7=_step61.value;var _c=_sprite7.getCollisionLayer();if(_t3._direction){throw new Error("BUG: Unreachable code");}var noBitSet=_this9.cacheNoBitSets.get(_c);if(!noBitSet){noBitSet=new BitSet2();_this9.cacheNoBitSets.set(_c,noBitSet);}noBitSet.set(_c.getBitSetIndexOf(_sprite7));}}catch(err){_didIteratorError61=true;_iteratorError61=err;}finally{try{if(!_iteratorNormalCompletion61&&_iterator61.return!=null){_iterator61.return();}}finally{if(_didIteratorError61){throw _iteratorError61;}}}}else{_this9.cacheMultiCollisionLayerTiles.add(_t3);}if(_t3._tile.isOr()){// NO Color === NO Red NO Green NO Blue
_this9.spritesMissing.addAll(_t3._tile.getSprites());}else{_this9.spritesMissing.addAll(_t3._tile.getSprites());}}}catch(err){_didIteratorError58=true;_iteratorError58=err;}finally{try{if(!_iteratorNormalCompletion58&&_iterator58.return!=null){_iterator58.return();}}finally{if(_didIteratorError58){throw _iteratorError58;}}}return _this9;}_createClass(SimpleNeighbor,[{key:"toKey",value:function toKey(){return"{".concat(_toConsumableArray(this._tilesWithModifier).map(function(t){return t.toKey();}).sort().join(' ')," debugging?").concat(!!this.debugFlag,"}");}},{key:"dependsOnDirection",value:function dependsOnDirection(){return!!_toConsumableArray(this._tilesWithModifier).find(function(t){return!!t._direction;});}},{key:"prepareAction",value:function prepareAction(actionNeighbor){if( true&&actionNeighbor.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){// Pausing here because this breakpoint was marked in the game code
debugger;// tslint:disable-line:no-debugger
}if(this.staticCache.has(actionNeighbor)){return;}// Compute the Mutators on-the-fly for now....
var pairsByCollisionLayer=new Map();var orTiles=new Map();var _iteratorNormalCompletion62=true;var _didIteratorError62=false;var _iteratorError62=undefined;try{for(var _iterator62=this._tilesWithModifier[Symbol.iterator](),_step62;!(_iteratorNormalCompletion62=(_step62=_iterator62.next()).done);_iteratorNormalCompletion62=true){var _t5=_step62.value;if(_t5._tile.isOr()&&!_t5._tile.hasSingleCollisionLayer()){if(!_t5.isNo()){orTiles.set(_t5._tile,_t5);}}else{// AND Tiles can have multiple collisionLayers too...
if(_t5._tile.hasSingleCollisionLayer()){var _c2=_t5._tile.getCollisionLayer();if(!_c2){throw new Error("BUG: Tile is not assigned to a collision layer\n".concat(_t5._tile.toString()));}// If we have something like `[Player NO PlayerHold] -> ...` then keep the Player, not the PlayerHold
if(pairsByCollisionLayer.has(_c2)){// Determine whether to keep the 1st match or the current one.
// If the current one is a NO tile then definitely do not replace it.
// Maybe the correct thing to do is to always keep the 1st thing put in
// if (!t.isNo()) {
//     pairsByCollisionLayer.set(c, new ExtraPair<SimpleTileWithModifier>(t, null/*filled in later if there is an action*/, false/*okToIgnoreNonMatches*/))
// }
}else{pairsByCollisionLayer.set(_c2,new ExtraPair(_t5,null/*filled in later if there is an action*/,false/*okToIgnoreNonMatches*/));}}else{// loop over each collisionLayer
var _iteratorNormalCompletion67=true;var _didIteratorError67=false;var _iteratorError67=undefined;try{for(var _iterator67=_t5._tile.getSprites()[Symbol.iterator](),_step67;!(_iteratorNormalCompletion67=(_step67=_iterator67.next()).done);_iteratorNormalCompletion67=true){var _sprite9=_step67.value;var _c3=_sprite9.getCollisionLayer();if(!pairsByCollisionLayer.has(_c3)){// TODO: Should we ues the whole tileWithModifier or create a new one out of the sprite?
pairsByCollisionLayer.set(_c3,new ExtraPair(_t5,null/*filled in later if there is an action*/,false/*okToIgnoreNonMatches*/));}}}catch(err){_didIteratorError67=true;_iteratorError67=err;}finally{try{if(!_iteratorNormalCompletion67&&_iterator67.return!=null){_iterator67.return();}}finally{if(_didIteratorError67){throw _iteratorError67;}}}}}}// First just pair up all the conditions and actions (keep the negations)
// Then, remove all negations
// Then, build the ReplaceTile and ReplaceDirections
}catch(err){_didIteratorError62=true;_iteratorError62=err;}finally{try{if(!_iteratorNormalCompletion62&&_iterator62.return!=null){_iterator62.return();}}finally{if(_didIteratorError62){throw _iteratorError62;}}}var unmatchedOrTiles=new Map(orTiles.entries());var _iteratorNormalCompletion63=true;var _didIteratorError63=false;var _iteratorError63=undefined;try{for(var _iterator63=actionNeighbor._tilesWithModifier[Symbol.iterator](),_step63;!(_iteratorNormalCompletion63=(_step63=_iterator63.next()).done);_iteratorNormalCompletion63=true){var _t6=_step63.value;if(_t6._tile.isOr()&&!_t6._tile.hasSingleCollisionLayer()){// OR tiles may belong to different collisionlayers so... it's complicated
var orTile=orTiles.get(_t6._tile);if(orTile){unmatchedOrTiles.delete(_t6._tile);// simple case. at most we just change direction
var conditionT=orTile;if(conditionT._direction!==_t6._direction){var _iteratorNormalCompletion68=true;var _didIteratorError68=false;var _iteratorError68=undefined;try{for(var _iterator68=_t6._tile.getSprites()[Symbol.iterator](),_step68;!(_iteratorNormalCompletion68=(_step68=_iterator68.next()).done);_iteratorNormalCompletion68=true){var _sprite10=_step68.value;var _c4=_sprite10.getCollisionLayer();if(!pairsByCollisionLayer.has(_c4)){pairsByCollisionLayer.set(_c4,new ExtraPair(new SimpleTileWithModifier(conditionT.__source,conditionT._isNegated/*since the action side is a NO */,conditionT._isRandom/*isRandom*/,conditionT._direction,_sprite10,conditionT._debugFlag),new SimpleTileWithModifier(_t6.__source,_t6._isNegated/*since the action side is a NO */,_t6._isRandom/*isRandom*/,_t6._direction,_sprite10,_t6._debugFlag),true/*okToIgnoreNonMatches*/));}}}catch(err){_didIteratorError68=true;_iteratorError68=err;}finally{try{if(!_iteratorNormalCompletion68&&_iterator68.return!=null){_iterator68.return();}}finally{if(_didIteratorError68){throw _iteratorError68;}}}}}else{if(_t6.isNo()){var _iteratorNormalCompletion69=true;var _didIteratorError69=false;var _iteratorError69=undefined;try{for(var _iterator69=_t6._tile.getSprites()[Symbol.iterator](),_step69;!(_iteratorNormalCompletion69=(_step69=_iterator69.next()).done);_iteratorNormalCompletion69=true){var _sprite11=_step69.value;var _c5=_sprite11.getCollisionLayer();if(!pairsByCollisionLayer.has(_c5)){var _t7=new SimpleTileWithModifier(_t6.__source,false/*since the action side is a NO */,_t6._isRandom/*isRandom*/,_t6._direction,_t6._tile,_t6._debugFlag);pairsByCollisionLayer.set(_c5,new ExtraPair(_t7,null,true/*okToIgnoreNonMatches*/));}}}catch(err){_didIteratorError69=true;_iteratorError69=err;}finally{try{if(!_iteratorNormalCompletion69&&_iterator69.return!=null){_iterator69.return();}}finally{if(_didIteratorError69){throw _iteratorError69;}}}}else{var _iteratorNormalCompletion70=true;var _didIteratorError70=false;var _iteratorError70=undefined;try{for(var _iterator70=_t6._tile.getSprites()[Symbol.iterator](),_step70;!(_iteratorNormalCompletion70=(_step70=_iterator70.next()).done);_iteratorNormalCompletion70=true){var _sprite12=_step70.value;var _c6=_sprite12.getCollisionLayer();if(!pairsByCollisionLayer.has(_c6)){var _t8=new SimpleTileWithModifier(_t6.__source,false/*since the action side is NOT? NO */,_t6._isRandom/*isRandom*/,_t6._direction,_t6._tile,_t6._debugFlag);pairsByCollisionLayer.set(_c6,new ExtraPair(null,_t8,true/*okToIgnoreNonMatches*/));}}}catch(err){_didIteratorError70=true;_iteratorError70=err;}finally{try{if(!_iteratorNormalCompletion70&&_iterator70.return!=null){_iterator70.return();}}finally{if(_didIteratorError70){throw _iteratorError70;}}}}}}else{var _iteratorNormalCompletion71=true;var _didIteratorError71=false;var _iteratorError71=undefined;try{for(var _iterator71=_t6.getCollisionLayers()[Symbol.iterator](),_step71;!(_iteratorNormalCompletion71=(_step71=_iterator71.next()).done);_iteratorNormalCompletion71=true){var _c7=_step71.value;if(!_c7){throw new Error("BUG: Tile is not assigned to a collision layer.\n".concat(_t6._tile.toString()));}// if the condition is the same as the action then it's a no-op and we can remove the code
var p=pairsByCollisionLayer.get(_c7);var conditionVersion=p&&p.condition||null;if(conditionVersion&&conditionVersion.equals(_t6)){// condition and action are the same. No need to add a Pair
pairsByCollisionLayer.delete(_c7);}else{if(_t6.isNo()){// set it to be null (removed)
if(p){// just leave the action side as null (so it's removed)
if(p.condition===_t6){throw new Error("BUG: Unreachable code");}}else{// we need to set the condition side to be the tile so that it is removed
// (it might not exist in the cell though but that's an optimization for later)
var _t9=new SimpleTileWithModifier(_t6.__source,false/*since the action side is a NO */,false/*isRandom*/,_t6._direction,_t6._tile,_t6._debugFlag);pairsByCollisionLayer.set(_c7,new ExtraPair(_t9,null,true/*okToIgnoreNonMatches*/));}}else{if(p){p.action=_t6;}else{pairsByCollisionLayer.set(_c7,new ExtraPair(null,_t6,false/*okToIgnoreNonMatches*/));}}}}}catch(err){_didIteratorError71=true;_iteratorError71=err;}finally{try{if(!_iteratorNormalCompletion71&&_iterator71.return!=null){_iterator71.return();}}finally{if(_didIteratorError71){throw _iteratorError71;}}}}}// Any unmatched OR tiles need to be removed from the Cell
}catch(err){_didIteratorError63=true;_iteratorError63=err;}finally{try{if(!_iteratorNormalCompletion63&&_iterator63.return!=null){_iterator63.return();}}finally{if(_didIteratorError63){throw _iteratorError63;}}}if(unmatchedOrTiles.size>0){var _iteratorNormalCompletion64=true;var _didIteratorError64=false;var _iteratorError64=undefined;try{for(var _iterator64=unmatchedOrTiles.values()[Symbol.iterator](),_step64;!(_iteratorNormalCompletion64=(_step64=_iterator64.next()).done);_iteratorNormalCompletion64=true){var _t4=_step64.value;var _iteratorNormalCompletion65=true;var _didIteratorError65=false;var _iteratorError65=undefined;try{for(var _iterator65=_t4._tile.getSprites()[Symbol.iterator](),_step65;!(_iteratorNormalCompletion65=(_step65=_iterator65.next()).done);_iteratorNormalCompletion65=true){var _sprite8=_step65.value;var c=_sprite8.getCollisionLayer();if(!pairsByCollisionLayer.has(c)){var t2=new SimpleTileWithModifier(_t4.__source,false/*since the action side is a NO */,false/*isRandom*/,_t4._direction,_t4._tile,_t4._debugFlag);pairsByCollisionLayer.set(c,new ExtraPair(t2,null,true/*okToIgnoreNonMatches*/));}}}catch(err){_didIteratorError65=true;_iteratorError65=err;}finally{try{if(!_iteratorNormalCompletion65&&_iterator65.return!=null){_iterator65.return();}}finally{if(_didIteratorError65){throw _iteratorError65;}}}}}catch(err){_didIteratorError64=true;_iteratorError64=err;}finally{try{if(!_iteratorNormalCompletion64&&_iterator64.return!=null){_iterator64.return();}}finally{if(_didIteratorError64){throw _iteratorError64;}}}}var replaceTiles=new Set();var replaceDirections=new Set();var _iteratorNormalCompletion66=true;var _didIteratorError66=false;var _iteratorError66=undefined;try{for(var _iterator66=pairsByCollisionLayer.entries()[Symbol.iterator](),_step66;!(_iteratorNormalCompletion66=(_step66=_iterator66.next()).done);_iteratorNormalCompletion66=true){var _step66$value=_slicedToArray(_step66.value,2),collisionLayer=_step66$value[0],_step66$value$=_step66$value[1],_condition8=_step66$value$.condition,_action6=_step66$value$.action,extra=_step66$value$.extra;if(_condition8&&_action6){if(_condition8!==_action6){// Could be `[ TrolleyFull no CleanDishes] -> [TrolleyEmpty no CleanDishes ]`
var newDirection=null;if(_condition8._direction!==_action6._direction||_condition8.isNo()){newDirection=_action6._direction||_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].STATIONARY;}if(!_condition8._tile.equals(_action6._tile)||_condition8.isNo()){replaceTiles.add(new ReplaceTile(collisionLayer,_action6,extra,null,newDirection));}else if(newDirection){replaceDirections.add(new ReplaceDirection(collisionLayer,newDirection,extra));}}}else if(_condition8){if(!_condition8.isNo()){replaceTiles.add(new ReplaceTile(collisionLayer,null,extra,_condition8,null));}}else if(_action6){if(!_action6.isNo()){replaceTiles.add(new ReplaceTile(collisionLayer,_action6,extra,null,_action6._direction||_util__WEBPACK_IMPORTED_MODULE_4__["RULE_DIRECTION"].STATIONARY));}}}}catch(err){_didIteratorError66=true;_iteratorError66=err;}finally{try{if(!_iteratorNormalCompletion66&&_iterator66.return!=null){_iterator66.return();}}finally{if(_didIteratorError66){throw _iteratorError66;}}}this.staticCache.set(actionNeighbor,{replaceTiles:replaceTiles,replaceDirections:replaceDirections});}},{key:"evaluate",value:function evaluate(actionNeighbor,cell,magicOrTiles){if( true&&actionNeighbor.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){// Pausing here because this breakpoint was marked in the game code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}var r=this.staticCache.get(actionNeighbor);if(!r){throw new Error('BUG: Missing actionNeighbor. Should have been prepared before');}var replaceTiles=r.replaceTiles,replaceDirections=r.replaceDirections;var didChangeSprites=false;var didChangeDirection=false;var orTilesRemoved=new Set();var allMessages=[];var _iteratorNormalCompletion72=true;var _didIteratorError72=false;var _iteratorError72=undefined;try{for(var _iterator72=replaceTiles[Symbol.iterator](),_step72;!(_iteratorNormalCompletion72=(_step72=_iterator72.next()).done);_iteratorNormalCompletion72=true){var replaceTile=_step72.value;var _replaceTile$replace=replaceTile.replace(cell,magicOrTiles,orTilesRemoved),didActuallyChange=_replaceTile$replace.didActuallyChange,_messages=_replaceTile$replace.messages;if(didActuallyChange){allMessages=[].concat(_toConsumableArray(allMessages),_toConsumableArray(_messages));}didChangeSprites=didChangeSprites||didActuallyChange||false;}}catch(err){_didIteratorError72=true;_iteratorError72=err;}finally{try{if(!_iteratorNormalCompletion72&&_iterator72.return!=null){_iterator72.return();}}finally{if(_didIteratorError72){throw _iteratorError72;}}}var _iteratorNormalCompletion73=true;var _didIteratorError73=false;var _iteratorError73=undefined;try{for(var _iterator73=replaceDirections[Symbol.iterator](),_step73;!(_iteratorNormalCompletion73=(_step73=_iterator73.next()).done);_iteratorNormalCompletion73=true){var replaceDirection=_step73.value;var _replaceDirection$rep=replaceDirection.replace(cell),didActuallyChange=_replaceDirection$rep.didActuallyChange;didChangeDirection=didChangeDirection||didActuallyChange;}// TODO: Be better about recording when the cell actually updated
}catch(err){_didIteratorError73=true;_iteratorError73=err;}finally{try{if(!_iteratorNormalCompletion73&&_iterator73.return!=null){_iterator73.return();}}finally{if(_didIteratorError73){throw _iteratorError73;}}}if(didChangeSprites||didChangeDirection){return new CellMutation(cell,allMessages);}else{return null;}}},{key:"clearCaches",value:function clearCaches(){// this._localCellCache.clear()
var _iteratorNormalCompletion74=true;var _didIteratorError74=false;var _iteratorError74=undefined;try{for(var _iterator74=this._tilesWithModifier[Symbol.iterator](),_step74;!(_iteratorNormalCompletion74=(_step74=_iterator74.next()).done);_iteratorNormalCompletion74=true){var _t10=_step74.value;_t10.clearCaches();}}catch(err){_didIteratorError74=true;_iteratorError74=err;}finally{try{if(!_iteratorNormalCompletion74&&_iterator74.return!=null){_iterator74.return();}}finally{if(_didIteratorError74){throw _iteratorError74;}}}}// set this ahead of time becuase order does not matter when populating the magicOrTiles `[ > Player | Pill ] -> [ Pill OldPos | Player ]`
},{key:"populateMagicOrTiles",value:function populateMagicOrTiles(cell,magicOrTiles){var _iteratorNormalCompletion75=true;var _didIteratorError75=false;var _iteratorError75=undefined;try{for(var _iterator75=this._tilesWithModifier[Symbol.iterator](),_step75;!(_iteratorNormalCompletion75=(_step75=_iterator75.next()).done);_iteratorNormalCompletion75=true){var _t11=_step75.value;if(!_t11.isNo()&&_t11._tile.isOr()){var _sprites2=Object(_util__WEBPACK_IMPORTED_MODULE_4__["setIntersection"])(new Set(_t11._tile.getSprites()),cell.getSpritesAsSet());magicOrTiles.set(_t11._tile,_sprites2);}}}catch(err){_didIteratorError75=true;_iteratorError75=err;}finally{try{if(!_iteratorNormalCompletion75&&_iterator75.return!=null){_iterator75.return();}}finally{if(_didIteratorError75){throw _iteratorError75;}}}}},{key:"subscribeToTileChanges",value:function subscribeToTileChanges(bracket,index){var _this10=this;// add the bracket and then subscribe the tiles
var b=this.brackets.get(bracket);if(!b){b=new Set();this.brackets.set(bracket,b);}b.add(index);this._tilesWithModifier.forEach(function(t){t.subscribeToCellChanges(_this10);});}},{key:"matchesCellSimple",value:function matchesCellSimple(cell){return this.matchesCell(cell,null,null);}},{key:"addCells",value:function addCells(t,sprite,cells,wantsToMove){if( true&&this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT){// Pausing here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}var _iteratorNormalCompletion76=true;var _didIteratorError76=false;var _iteratorError76=undefined;try{for(var _iterator76=cells[Symbol.iterator](),_step76;!(_iteratorNormalCompletion76=(_step76=_iterator76.next()).done);_iteratorNormalCompletion76=true){var _cell14=_step76.value;if(this.matchesTiles(_cell14)){this.trickleCells.add(_cell14);var _iteratorNormalCompletion77=true;var _didIteratorError77=false;var _iteratorError77=undefined;try{for(var _iterator77=this.brackets.entries()[Symbol.iterator](),_step77;!(_iteratorNormalCompletion77=(_step77=_iterator77.next()).done);_iteratorNormalCompletion77=true){var _step77$value=_slicedToArray(_step77.value,2),bracket=_step77$value[0],indexes=_step77$value[1];var _iteratorNormalCompletion78=true;var _didIteratorError78=false;var _iteratorError78=undefined;try{for(var _iterator78=indexes[Symbol.iterator](),_step78;!(_iteratorNormalCompletion78=(_step78=_iterator78.next()).done);_iteratorNormalCompletion78=true){var _index8=_step78.value;bracket.addCell(_index8,this,t,sprite,_cell14,wantsToMove);}}catch(err){_didIteratorError78=true;_iteratorError78=err;}finally{try{if(!_iteratorNormalCompletion78&&_iterator78.return!=null){_iterator78.return();}}finally{if(_didIteratorError78){throw _iteratorError78;}}}}}catch(err){_didIteratorError77=true;_iteratorError77=err;}finally{try{if(!_iteratorNormalCompletion77&&_iterator77.return!=null){_iterator77.return();}}finally{if(_didIteratorError77){throw _iteratorError77;}}}}else if(this.trickleCells.has(_cell14)){throw new Error("BUG: Should be unreachable");}}}catch(err){_didIteratorError76=true;_iteratorError76=err;}finally{try{if(!_iteratorNormalCompletion76&&_iterator76.return!=null){_iterator76.return();}}finally{if(_didIteratorError76){throw _iteratorError76;}}}}},{key:"updateCells",value:function updateCells(t,sprite,cells,wantsToMove){this.addCells(t,sprite,cells,wantsToMove);}},{key:"removeCells",value:function removeCells(t,sprite,cells){if( true&&this.debugFlag===_util__WEBPACK_IMPORTED_MODULE_4__["DEBUG_FLAG"].BREAKPOINT_REMOVE){// Pausing here because it was marked in the code
// if (process.stdout) { TerminalUI.debugRenderScreen() } debugger // tslint:disable-line:no-debugger
}var _iteratorNormalCompletion79=true;var _didIteratorError79=false;var _iteratorError79=undefined;try{for(var _iterator79=cells[Symbol.iterator](),_step79;!(_iteratorNormalCompletion79=(_step79=_iterator79.next()).done);_iteratorNormalCompletion79=true){var _cell15=_step79.value;// Check if the cell still matches. If not, remove it from upstream
// It's a little funky if we have a NO tile. I _think_ we need to negate the
// result of matchesCellWithout in that case but not completely sure
if(!this.matchesTiles(_cell15)){this.trickleCells.delete(_cell15);// remove it from upstream
var _iteratorNormalCompletion80=true;var _didIteratorError80=false;var _iteratorError80=undefined;try{for(var _iterator80=this.brackets.entries()[Symbol.iterator](),_step80;!(_iteratorNormalCompletion80=(_step80=_iterator80.next()).done);_iteratorNormalCompletion80=true){var _step80$value=_slicedToArray(_step80.value,2),bracket=_step80$value[0],indexes=_step80$value[1];var _iteratorNormalCompletion81=true;var _didIteratorError81=false;var _iteratorError81=undefined;try{for(var _iterator81=indexes[Symbol.iterator](),_step81;!(_iteratorNormalCompletion81=(_step81=_iterator81.next()).done);_iteratorNormalCompletion81=true){var _index9=_step81.value;bracket.removeCell(_index9,this,t,sprite,_cell15);}}catch(err){_didIteratorError81=true;_iteratorError81=err;}finally{try{if(!_iteratorNormalCompletion81&&_iterator81.return!=null){_iterator81.return();}}finally{if(_didIteratorError81){throw _iteratorError81;}}}}}catch(err){_didIteratorError80=true;_iteratorError80=err;}finally{try{if(!_iteratorNormalCompletion80&&_iterator80.return!=null){_iterator80.return();}}finally{if(_didIteratorError80){throw _iteratorError80;}}}}}}catch(err){_didIteratorError79=true;_iteratorError79=err;}finally{try{if(!_iteratorNormalCompletion79&&_iterator79.return!=null){_iterator79.return();}}finally{if(_didIteratorError79){throw _iteratorError79;}}}}},{key:"matchesCell",value:function matchesCell(cell,tileWithModifier,wantsToMove){var _this11=this;var valueFn=function valueFn(){var doesMatch=cell.spriteBitSet.containsAll(_this11.spritesPresent)&&cell.spriteBitSet.containsNone(_this11.spritesMissing);if(doesMatch){var _iteratorNormalCompletion82=true;var _didIteratorError82=false;var _iteratorError82=undefined;try{for(var _iterator82=_this11.anySpritesPresent[Symbol.iterator](),_step82;!(_iteratorNormalCompletion82=(_step82=_iterator82.next()).done);_iteratorNormalCompletion82=true){var anySpritesPresent=_step82.value;doesMatch=doesMatch&&cell.spriteBitSet.containsAny(anySpritesPresent);}}catch(err){_didIteratorError82=true;_iteratorError82=err;}finally{try{if(!_iteratorNormalCompletion82&&_iterator82.return!=null){_iterator82.return();}}finally{if(_didIteratorError82){throw _iteratorError82;}}}}// Check CollisionLayers
// TODO: Move this into the Cell definition
if(doesMatch){var _iteratorNormalCompletion83=true;var _didIteratorError83=false;var _iteratorError83=undefined;try{for(var _iterator83=_this11.spriteMovementsPresent[Symbol.iterator](),_step83;!(_iteratorNormalCompletion83=(_step83=_iterator83.next()).done);_iteratorNormalCompletion83=true){var _step83$value=_slicedToArray(_step83.value,2),collisionLayer=_step83$value[0],_direction=_step83$value[1];var cellDir=cell.getCollisionLayerWantsToMove(collisionLayer);if(_direction!==cellDir){doesMatch=false;}}}catch(err){_didIteratorError83=true;_iteratorError83=err;}finally{try{if(!_iteratorNormalCompletion83&&_iterator83.return!=null){_iterator83.return();}}finally{if(_didIteratorError83){throw _iteratorError83;}}}}if(doesMatch){var _iteratorNormalCompletion84=true;var _didIteratorError84=false;var _iteratorError84=undefined;try{for(var _iterator84=_this11.orTileMovementsPresent[Symbol.iterator](),_step84;!(_iteratorNormalCompletion84=(_step84=_iterator84.next()).done);_iteratorNormalCompletion84=true){var _step84$value=_slicedToArray(_step84.value,2),orTile=_step84$value[0],_direction2=_step84$value[1];if(orTile.hasSingleCollisionLayer()){var _cellDir=cell.getCollisionLayerWantsToMove(orTile.getCollisionLayer());if(_direction2!==_cellDir){doesMatch=false;}}else{// find which sprite in the OR tile matched and get its direction
var foundSprite=false;// the OR tile can match multiple sprites so make sure at least one matched (not all)
// e.g:
// Movable = Player OR Island
// Rule: [ LEFT Movable ]
// Cell: STATIONARY Player LEFT Island
var didMatch=false;var _iteratorNormalCompletion85=true;var _didIteratorError85=false;var _iteratorError85=undefined;try{for(var _iterator85=orTile.getSprites()[Symbol.iterator](),_step85;!(_iteratorNormalCompletion85=(_step85=_iterator85.next()).done);_iteratorNormalCompletion85=true){var _sprite13=_step85.value;if(cell.spriteBitSet.has(_sprite13)){foundSprite=true;var _cellDir2=cell.getCollisionLayerWantsToMove(_sprite13.getCollisionLayer());if(_direction2===_cellDir2){didMatch=true;}}}}catch(err){_didIteratorError85=true;_iteratorError85=err;}finally{try{if(!_iteratorNormalCompletion85&&_iterator85.return!=null){_iterator85.return();}}finally{if(_didIteratorError85){throw _iteratorError85;}}}doesMatch=doesMatch&&didMatch;if(!foundSprite){throw new Error("BUG: Could not find sprite. One should have already been matched before");}}}}catch(err){_didIteratorError84=true;_iteratorError84=err;}finally{try{if(!_iteratorNormalCompletion84&&_iterator84.return!=null){_iterator84.return();}}finally{if(_didIteratorError84){throw _iteratorError84;}}}}return doesMatch;};return this.lruCache.get("[".concat(cell.toKey(),"]"),valueFn);}},{key:"matchesTiles",value:function matchesTiles(cell){var _iteratorNormalCompletion86=true;var _didIteratorError86=false;var _iteratorError86=undefined;try{for(var _iterator86=this._tilesWithModifier[Symbol.iterator](),_step86;!(_iteratorNormalCompletion86=(_step86=_iterator86.next()).done);_iteratorNormalCompletion86=true){var _t12=_step86.value;if(!_t12.hasCell(cell)){return false;}}}catch(err){_didIteratorError86=true;_iteratorError86=err;}finally{try{if(!_iteratorNormalCompletion86&&_iterator86.return!=null){_iterator86.return();}}finally{if(_didIteratorError86){throw _iteratorError86;}}}return true;}}]);return SimpleNeighbor;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_5__["BaseForLines"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/models/tile.ts":
/*!****************************!*\
  !*** ./src/models/tile.ts ***!
  \****************************/
/*! exports provided: GameSprite, GameSpriteSingleColor, GameSpritePixels, GameLegendTile, GameLegendTileSimple, GameLegendTileAnd, GameLegendTileOr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSprite", function() { return GameSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSpriteSingleColor", function() { return GameSpriteSingleColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSpritePixels", function() { return GameSpritePixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLegendTile", function() { return GameLegendTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLegendTileSimple", function() { return GameLegendTileSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLegendTileAnd", function() { return GameLegendTileAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameLegendTileOr", function() { return GameLegendTileOr; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _BaseForLines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseForLines */ "./src/models/BaseForLines.ts");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}// BitSet does not export a default so import does not work in webpack-built file
var BitSet2=__webpack_require__(/*! bitset */ "./node_modules/bitset/bitset.js");// tslint:disable-line:no-var-requires
var GameSprite=/*#__PURE__*/function(_BaseForLines){_inherits(GameSprite,_BaseForLines);// set onde all the sprites have been determined
function GameSprite(source,name,optionalLegendChar){var _this;_classCallCheck(this,GameSprite);_this=_possibleConstructorReturn(this,_getPrototypeOf(GameSprite).call(this,source));_this.name=name;_this._optionalLegendChar=optionalLegendChar;_this.trickleCells=new Set();_this.trickleTiles=new Set();_this.trickleTilesWithModifier=new Set();_this.allSpritesBitSetIndex=-1;// will be changed once we have all the sprites
_this.collisionLayer=null;_this.bitSet=null;return _this;}_createClass(GameSprite,[{key:"isOr",value:function isOr(){return false;}},{key:"equals",value:function equals(t){return this===t;// sprites MUST be exact
}},{key:"getName",value:function getName(){return this.name;}},{key:"isBackground",value:function isBackground(){return this.name.toLowerCase()==='background';}},{key:"_getDescendantTiles",value:function _getDescendantTiles(){return[];}},{key:"getSprites",value:function getSprites(){// to match the signature of LegendTile
return[this];}},{key:"hasCollisionLayer",value:function hasCollisionLayer(){return!!this.collisionLayer;}},{key:"hasSingleCollisionLayer",value:function hasSingleCollisionLayer(){// always true. This is only ever false for OR tiles
return this.hasCollisionLayer();}},{key:"setCollisionLayer",value:function setCollisionLayer(collisionLayer){this.collisionLayer=collisionLayer;}},{key:"setCollisionLayerAndIndex",value:function setCollisionLayerAndIndex(collisionLayer,bitSetIndex){this.collisionLayer=collisionLayer;this.bitSet=new BitSet2();this.bitSet.set(bitSetIndex);}},{key:"getCollisionLayer",value:function getCollisionLayer(){if(!this.collisionLayer){throw new Error("ERROR: This sprite was not in a Collision Layer\n".concat(this.toString()));}return this.collisionLayer;}},{key:"clearCaches",value:function clearCaches(){this.trickleCells.clear();}},{key:"hasCell",value:function hasCell(cell){return this.trickleCells.has(cell);}},{key:"matchesCell",value:function matchesCell(cell){return cell.getSpritesAsSet().has(this);// because of Webworkers, we cannot perform equality tests (unless the sprites match exactly what comes out of gamedata... hmm, maybe that's the way to do it?)
}},{key:"getSpritesThatMatch",value:function getSpritesThatMatch(cell){if(cell.getSpritesAsSet().has(this)){return new Set([this]);}else{return new Set();}}},{key:"subscribeToCellChanges",value:function subscribeToCellChanges(t){this.trickleTilesWithModifier.add(t);}},{key:"subscribeToCellChangesTile",value:function subscribeToCellChangesTile(tile){this.trickleTiles.add(tile);}},{key:"addCell",value:function addCell(cell,wantsToMove){this.addCells(this,[cell],wantsToMove);}},{key:"removeCell",value:function removeCell(cell){this.removeCells(this,[cell]);}},{key:"updateCell",value:function updateCell(cell,wantsToMove){if(true){// check that the cell is already in the sprite cell set
if(!this.has(cell)){throw new Error("BUG: Expected cell to already be in the sprite set");}}// propagate up
var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.trickleTiles[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _t=_step.value;_t.updateCells(this,[cell],wantsToMove);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this.trickleTilesWithModifier[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _t2=_step2.value;_t2.updateCells(this,[cell],wantsToMove);}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}}},{key:"addCells",value:function addCells(sprite,cells,wantsToMove){var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=cells[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var _cell=_step3.value;if(this.trickleCells.has(_cell)){throw new Error("BUG: should not be trying to add a cell that has already been matched (right?)");}this.trickleCells.add(_cell);}// propagate up
}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=this.trickleTiles[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var _t3=_step4.value;_t3.addCells(this,cells,wantsToMove);}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=this.trickleTilesWithModifier[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var _t4=_step5.value;_t4.addCells(this,this,cells,wantsToMove);}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}},{key:"updateCells",value:function updateCells(sprite,cells,wantsToMove){throw new Error("BUG: Unreachable code");}},{key:"removeCells",value:function removeCells(sprite,cells){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=cells[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var _cell2=_step6.value;this.trickleCells.delete(_cell2);}// propagate up
}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return!=null){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=this.trickleTiles[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var _t5=_step7.value;_t5.removeCells(this,cells);}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return!=null){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=this.trickleTilesWithModifier[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var _t6=_step8.value;_t6.removeCells(this,this,cells);}}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return!=null){_iterator8.return();}}finally{if(_didIteratorError8){throw _iteratorError8;}}}}},{key:"has",value:function has(cell){return this.trickleCells.has(cell);}},{key:"hasNegationTileWithModifier",value:function hasNegationTileWithModifier(){var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=this.trickleTilesWithModifier[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var _t7=_step9.value;if(_t7.isNo()){return true;}}}catch(err){_didIteratorError9=true;_iteratorError9=err;}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return!=null){_iterator9.return();}}finally{if(_didIteratorError9){throw _iteratorError9;}}}var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{for(var _iterator10=this.trickleTiles[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10=(_step10=_iterator10.next()).done);_iteratorNormalCompletion10=true){var tile=_step10.value;if(tile.hasNegationTileWithModifier()){return true;}}}catch(err){_didIteratorError10=true;_iteratorError10=err;}finally{try{if(!_iteratorNormalCompletion10&&_iterator10.return!=null){_iterator10.return();}}finally{if(_didIteratorError10){throw _iteratorError10;}}}return false;}},{key:"getCellsThatMatch",value:function getCellsThatMatch(cells){var _this2=this;if(this.trickleCells.size>0){return this.trickleCells;}else if(cells){// The Tile might just be an empty object (because of webworkers)
// So check all the cells
return new Set(_toConsumableArray(cells).filter(function(cell){return _this2.matchesCell(cell);}));}else{return new Set();}}}]);return GameSprite;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_1__["BaseForLines"]);var GameSpriteSingleColor=/*#__PURE__*/function(_GameSprite){_inherits(GameSpriteSingleColor,_GameSprite);function GameSpriteSingleColor(source,name,optionalLegendChar,colors){var _this3;_classCallCheck(this,GameSpriteSingleColor);_this3=_possibleConstructorReturn(this,_getPrototypeOf(GameSpriteSingleColor).call(this,source,name,optionalLegendChar));_this3.color=colors[0];// Ignore if the user added multiple colors (like `transparent yellow`)
return _this3;}_createClass(GameSpriteSingleColor,[{key:"isTransparent",value:function isTransparent(){return this.color.isTransparent();}},{key:"hasAlpha",value:function hasAlpha(){return this.color.hasAlpha();}},{key:"hasPixels",value:function hasPixels(){return false;}},{key:"getPixels",value:function getPixels(spriteHeight,spriteWidth){// When there are no pixels then it means "color the whole thing in the same color"
var rows=[];for(var row=0;row<spriteHeight;row++){rows.push([]);for(var col=0;col<spriteWidth;col++){rows[row].push(this.color);}}return rows;}}]);return GameSpriteSingleColor;}(GameSprite);var GameSpritePixels=/*#__PURE__*/function(_GameSprite2){_inherits(GameSpritePixels,_GameSprite2);function GameSpritePixels(source,name,optionalLegendChar,pixels){var _this4;_classCallCheck(this,GameSpritePixels);_this4=_possibleConstructorReturn(this,_getPrototypeOf(GameSpritePixels).call(this,source,name,optionalLegendChar));_this4.pixels=pixels;// Store for a11y (so we do not report the sprite) and for faster rendering
_this4._isTransparent=true;_this4._hasAlpha=false;var _iteratorNormalCompletion11=true;var _didIteratorError11=false;var _iteratorError11=undefined;try{for(var _iterator11=pixels[Symbol.iterator](),_step11;!(_iteratorNormalCompletion11=(_step11=_iterator11.next()).done);_iteratorNormalCompletion11=true){var row=_step11.value;var _iteratorNormalCompletion12=true;var _didIteratorError12=false;var _iteratorError12=undefined;try{for(var _iterator12=row[Symbol.iterator](),_step12;!(_iteratorNormalCompletion12=(_step12=_iterator12.next()).done);_iteratorNormalCompletion12=true){var pixel=_step12.value;if(!pixel.isTransparent()){_this4._isTransparent=false;}if(pixel.hasAlpha()){_this4._hasAlpha=true;}}}catch(err){_didIteratorError12=true;_iteratorError12=err;}finally{try{if(!_iteratorNormalCompletion12&&_iterator12.return!=null){_iterator12.return();}}finally{if(_didIteratorError12){throw _iteratorError12;}}}}}catch(err){_didIteratorError11=true;_iteratorError11=err;}finally{try{if(!_iteratorNormalCompletion11&&_iterator11.return!=null){_iterator11.return();}}finally{if(_didIteratorError11){throw _iteratorError11;}}}return _this4;}_createClass(GameSpritePixels,[{key:"isTransparent",value:function isTransparent(){return this._isTransparent;}},{key:"hasAlpha",value:function hasAlpha(){return this._hasAlpha;}},{key:"getSprites",value:function getSprites(){// to match the signature of LegendTile
return[this];}},{key:"hasPixels",value:function hasPixels(){return true;}},{key:"getPixels",value:function getPixels(spriteHeight,spriteWidth){// Make a copy because others may edit it
return this.pixels.map(function(row){return row.map(function(col){return col;});});}}]);return GameSpritePixels;}(GameSprite);var GameLegendTile=/*#__PURE__*/function(_BaseForLines2){_inherits(GameLegendTile,_BaseForLines2);function GameLegendTile(source,spriteNameOrLevelChar,tiles){var _this5;_classCallCheck(this,GameLegendTile);_this5=_possibleConstructorReturn(this,_getPrototypeOf(GameLegendTile).call(this,source));_this5.spriteNameOrLevelChar=spriteNameOrLevelChar;_this5.tiles=tiles;_this5.trickleCells=new Set();_this5.trickleTilesWithModifier=new Set();_this5.collisionLayer=null;_this5.spritesCache=null;return _this5;}_createClass(GameLegendTile,[{key:"equals",value:function equals(t){if(this.isOr()!==t.isOr()){return false;}var difference=Object(_util__WEBPACK_IMPORTED_MODULE_0__["setDifference"])(new Set(this.getSprites()),t.getSprites());return difference.size===0;}},{key:"isOr",value:function isOr(){return false;}},{key:"getName",value:function getName(){return this.spriteNameOrLevelChar;}},{key:"_getDescendantTiles",value:function _getDescendantTiles(){// recursively pull all the tiles out
return this.tiles.concat(Object(_util__WEBPACK_IMPORTED_MODULE_0__["_flatten"])(this.tiles.map(function(tile){return tile._getDescendantTiles();})));}},{key:"getSprites",value:function getSprites(){// Use a cache because all the collision layers have not been loaded in time
if(!this.spritesCache){// 2 levels of indirection should be safe
// Sort by collisionLayer so that the most-important sprite is first
this.spritesCache=Object(_util__WEBPACK_IMPORTED_MODULE_0__["_flatten"])(this.tiles.map(function(tile){return tile.getSprites();})).sort(function(a,b){return a.getCollisionLayer().id-b.getCollisionLayer().id;}).reverse();}return this.spritesCache;}},{key:"setCollisionLayer",value:function setCollisionLayer(collisionLayer){this.collisionLayer=collisionLayer;}},{key:"getCollisionLayer",value:function getCollisionLayer(){// OR tiles and AND tiles don't necessarily have a collisionLayer set so pull it from the sprite (this might not work)
if(this.collisionLayer){return this.collisionLayer;}// check that all sprites are in the same collisionlayer... if not, thene our understanding is flawed
var firstCollisionLayer=this.getSprites()[0].getCollisionLayer();var _iteratorNormalCompletion13=true;var _didIteratorError13=false;var _iteratorError13=undefined;try{for(var _iterator13=this.getSprites()[Symbol.iterator](),_step13;!(_iteratorNormalCompletion13=(_step13=_iterator13.next()).done);_iteratorNormalCompletion13=true){var _sprite=_step13.value;if(_sprite.getCollisionLayer()!==firstCollisionLayer){throw new Error("ooh, sprites in a tile have different collision layers... that's a problem\n".concat(this.toString()));}}}catch(err){_didIteratorError13=true;_iteratorError13=err;}finally{try{if(!_iteratorNormalCompletion13&&_iterator13.return!=null){_iterator13.return();}}finally{if(_didIteratorError13){throw _iteratorError13;}}}return firstCollisionLayer;}},{key:"getCollisionLayers",value:function getCollisionLayers(){var layers=new Set();var _iteratorNormalCompletion14=true;var _didIteratorError14=false;var _iteratorError14=undefined;try{for(var _iterator14=this.getSprites()[Symbol.iterator](),_step14;!(_iteratorNormalCompletion14=(_step14=_iterator14.next()).done);_iteratorNormalCompletion14=true){var _sprite2=_step14.value;layers.add(_sprite2.getCollisionLayer());}}catch(err){_didIteratorError14=true;_iteratorError14=err;}finally{try{if(!_iteratorNormalCompletion14&&_iterator14.return!=null){_iterator14.return();}}finally{if(_didIteratorError14){throw _iteratorError14;}}}return _toConsumableArray(layers);}},{key:"getCellsThatMatch",value:function getCellsThatMatch(cells){var matches=new Set();var _iteratorNormalCompletion15=true;var _didIteratorError15=false;var _iteratorError15=undefined;try{for(var _iterator15=this.getSprites()[Symbol.iterator](),_step15;!(_iteratorNormalCompletion15=(_step15=_iterator15.next()).done);_iteratorNormalCompletion15=true){var _sprite3=_step15.value;var _iteratorNormalCompletion16=true;var _didIteratorError16=false;var _iteratorError16=undefined;try{for(var _iterator16=_sprite3.getCellsThatMatch(cells)[Symbol.iterator](),_step16;!(_iteratorNormalCompletion16=(_step16=_iterator16.next()).done);_iteratorNormalCompletion16=true){var _cell3=_step16.value;matches.add(_cell3);}}catch(err){_didIteratorError16=true;_iteratorError16=err;}finally{try{if(!_iteratorNormalCompletion16&&_iterator16.return!=null){_iterator16.return();}}finally{if(_didIteratorError16){throw _iteratorError16;}}}}}catch(err){_didIteratorError15=true;_iteratorError15=err;}finally{try{if(!_iteratorNormalCompletion15&&_iterator15.return!=null){_iterator15.return();}}finally{if(_didIteratorError15){throw _iteratorError15;}}}return matches;}},{key:"subscribeToCellChanges",value:function subscribeToCellChanges(t){this.trickleTilesWithModifier.add(t);// subscribe this to be notified of all Sprite changes of Cells
var _iteratorNormalCompletion17=true;var _didIteratorError17=false;var _iteratorError17=undefined;try{for(var _iterator17=this.getSprites()[Symbol.iterator](),_step17;!(_iteratorNormalCompletion17=(_step17=_iterator17.next()).done);_iteratorNormalCompletion17=true){var _sprite4=_step17.value;_sprite4.subscribeToCellChangesTile(this);}}catch(err){_didIteratorError17=true;_iteratorError17=err;}finally{try{if(!_iteratorNormalCompletion17&&_iterator17.return!=null){_iterator17.return();}}finally{if(_didIteratorError17){throw _iteratorError17;}}}}},{key:"hasNegationTileWithModifier",value:function hasNegationTileWithModifier(){var _iteratorNormalCompletion18=true;var _didIteratorError18=false;var _iteratorError18=undefined;try{for(var _iterator18=this.trickleTilesWithModifier[Symbol.iterator](),_step18;!(_iteratorNormalCompletion18=(_step18=_iterator18.next()).done);_iteratorNormalCompletion18=true){var _t8=_step18.value;if(_t8.isNo()){return true;}}}catch(err){_didIteratorError18=true;_iteratorError18=err;}finally{try{if(!_iteratorNormalCompletion18&&_iterator18.return!=null){_iterator18.return();}}finally{if(_didIteratorError18){throw _iteratorError18;}}}return false;}},{key:"addCells",value:function addCells(sprite,cells,wantsToMove){var _iteratorNormalCompletion19=true;var _didIteratorError19=false;var _iteratorError19=undefined;try{for(var _iterator19=cells[Symbol.iterator](),_step19;!(_iteratorNormalCompletion19=(_step19=_iterator19.next()).done);_iteratorNormalCompletion19=true){var _cell4=_step19.value;if(!this.trickleCells.has(_cell4)){if(this.matchesCell(_cell4)){this.trickleCells.add(_cell4);var _iteratorNormalCompletion20=true;var _didIteratorError20=false;var _iteratorError20=undefined;try{for(var _iterator20=this.trickleTilesWithModifier[Symbol.iterator](),_step20;!(_iteratorNormalCompletion20=(_step20=_iterator20.next()).done);_iteratorNormalCompletion20=true){var _t9=_step20.value;_t9.addCells(this,sprite,[_cell4],wantsToMove);}}catch(err){_didIteratorError20=true;_iteratorError20=err;}finally{try{if(!_iteratorNormalCompletion20&&_iterator20.return!=null){_iterator20.return();}}finally{if(_didIteratorError20){throw _iteratorError20;}}}}}}}catch(err){_didIteratorError19=true;_iteratorError19=err;}finally{try{if(!_iteratorNormalCompletion19&&_iterator19.return!=null){_iterator19.return();}}finally{if(_didIteratorError19){throw _iteratorError19;}}}}},{key:"updateCells",value:function updateCells(sprite,cells,wantsToMove){// verify that all the cells are in trickleCells
if(true){var _iteratorNormalCompletion21=true;var _didIteratorError21=false;var _iteratorError21=undefined;try{for(var _iterator21=cells[Symbol.iterator](),_step21;!(_iteratorNormalCompletion21=(_step21=_iterator21.next()).done);_iteratorNormalCompletion21=true){var _cell5=_step21.value;if(!this.trickleCells.has(_cell5)){throw new Error("Cell was not already added before");}}}catch(err){_didIteratorError21=true;_iteratorError21=err;}finally{try{if(!_iteratorNormalCompletion21&&_iterator21.return!=null){_iterator21.return();}}finally{if(_didIteratorError21){throw _iteratorError21;}}}}var _iteratorNormalCompletion22=true;var _didIteratorError22=false;var _iteratorError22=undefined;try{for(var _iterator22=this.trickleTilesWithModifier[Symbol.iterator](),_step22;!(_iteratorNormalCompletion22=(_step22=_iterator22.next()).done);_iteratorNormalCompletion22=true){var _t10=_step22.value;_t10.updateCells(sprite,cells,wantsToMove);}}catch(err){_didIteratorError22=true;_iteratorError22=err;}finally{try{if(!_iteratorNormalCompletion22&&_iterator22.return!=null){_iterator22.return();}}finally{if(_didIteratorError22){throw _iteratorError22;}}}}},{key:"removeCells",value:function removeCells(sprite,cells){var _iteratorNormalCompletion23=true;var _didIteratorError23=false;var _iteratorError23=undefined;try{for(var _iterator23=cells[Symbol.iterator](),_step23;!(_iteratorNormalCompletion23=(_step23=_iterator23.next()).done);_iteratorNormalCompletion23=true){var _cell6=_step23.value;if(this.matchesCell(_cell6)){if(!this.trickleCells.has(_cell6)){this.addCells(sprite,[_cell6],null);}else{// We need to propagate this is an OR tile
// because removing one of the OR tiles
// may (or may not) cause this cell to
// no longer match
this.updateCells(sprite,[_cell6],null);}}else{this.trickleCells.delete(_cell6);var _iteratorNormalCompletion24=true;var _didIteratorError24=false;var _iteratorError24=undefined;try{for(var _iterator24=this.trickleTilesWithModifier[Symbol.iterator](),_step24;!(_iteratorNormalCompletion24=(_step24=_iterator24.next()).done);_iteratorNormalCompletion24=true){var _t11=_step24.value;_t11.removeCells(this,sprite,[_cell6]);}}catch(err){_didIteratorError24=true;_iteratorError24=err;}finally{try{if(!_iteratorNormalCompletion24&&_iterator24.return!=null){_iterator24.return();}}finally{if(_didIteratorError24){throw _iteratorError24;}}}}}}catch(err){_didIteratorError23=true;_iteratorError23=err;}finally{try{if(!_iteratorNormalCompletion23&&_iterator23.return!=null){_iterator23.return();}}finally{if(_didIteratorError23){throw _iteratorError23;}}}}},{key:"hasCell",value:function hasCell(cell){return this.trickleCells.has(cell);}}]);return GameLegendTile;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_1__["BaseForLines"]);var GameLegendTileSimple=/*#__PURE__*/function(_GameLegendTile){_inherits(GameLegendTileSimple,_GameLegendTile);function GameLegendTileSimple(source,spriteNameOrLevelChar,tile){_classCallCheck(this,GameLegendTileSimple);return _possibleConstructorReturn(this,_getPrototypeOf(GameLegendTileSimple).call(this,source,spriteNameOrLevelChar,[tile]));}_createClass(GameLegendTileSimple,[{key:"matchesCell",value:function matchesCell(cell){// Update code coverage (Maybe only count the number of times it was true?)
if(true){this.__incrementCoverage();}// Check that the cell contains all of the tiles (ANDED)
// Since this is a Simple Tile it should only contain 1 tile so anding is the right way to go.
var _iteratorNormalCompletion25=true;var _didIteratorError25=false;var _iteratorError25=undefined;try{for(var _iterator25=this.tiles[Symbol.iterator](),_step25;!(_iteratorNormalCompletion25=(_step25=_iterator25.next()).done);_iteratorNormalCompletion25=true){var tile=_step25.value;if(!tile.matchesCell(cell)){return false;}}}catch(err){_didIteratorError25=true;_iteratorError25=err;}finally{try{if(!_iteratorNormalCompletion25&&_iterator25.return!=null){_iterator25.return();}}finally{if(_didIteratorError25){throw _iteratorError25;}}}return true;}},{key:"getSpritesThatMatch",value:function getSpritesThatMatch(cell){return Object(_util__WEBPACK_IMPORTED_MODULE_0__["setIntersection"])(new Set(this.getSprites()),cell.getSpritesAsSet());}},{key:"hasSingleCollisionLayer",value:function hasSingleCollisionLayer(){return!!this.collisionLayer;}}]);return GameLegendTileSimple;}(GameLegendTile);var GameLegendTileAnd=/*#__PURE__*/function(_GameLegendTile2){_inherits(GameLegendTileAnd,_GameLegendTile2);function GameLegendTileAnd(){_classCallCheck(this,GameLegendTileAnd);return _possibleConstructorReturn(this,_getPrototypeOf(GameLegendTileAnd).apply(this,arguments));}_createClass(GameLegendTileAnd,[{key:"matchesCell",value:function matchesCell(cell){throw new Error("BUG: Unreachable code");}},{key:"getSpritesThatMatch",value:function getSpritesThatMatch(cell){// return setIntersection(new Set(this.getSprites()), cell.getSpritesAsSet())
throw new Error("BUG: This method should only be called for OR tiles");}},{key:"hasSingleCollisionLayer",value:function hasSingleCollisionLayer(){return!!this.collisionLayer;}}]);return GameLegendTileAnd;}(GameLegendTile);var GameLegendTileOr=/*#__PURE__*/function(_GameLegendTile3){_inherits(GameLegendTileOr,_GameLegendTile3);function GameLegendTileOr(){_classCallCheck(this,GameLegendTileOr);return _possibleConstructorReturn(this,_getPrototypeOf(GameLegendTileOr).apply(this,arguments));}_createClass(GameLegendTileOr,[{key:"isOr",value:function isOr(){return true;}},{key:"matchesCell",value:function matchesCell(cell){// Update code coverage (Maybe only count the number of times it was true?)
if(true){this.__incrementCoverage();}// Check that the cell contains any of the tiles (OR)
var _iteratorNormalCompletion26=true;var _didIteratorError26=false;var _iteratorError26=undefined;try{for(var _iterator26=this.tiles[Symbol.iterator](),_step26;!(_iteratorNormalCompletion26=(_step26=_iterator26.next()).done);_iteratorNormalCompletion26=true){var tile=_step26.value;if(tile.matchesCell(cell)){return true;}}}catch(err){_didIteratorError26=true;_iteratorError26=err;}finally{try{if(!_iteratorNormalCompletion26&&_iterator26.return!=null){_iterator26.return();}}finally{if(_didIteratorError26){throw _iteratorError26;}}}return false;}},{key:"getSpritesThatMatch",value:function getSpritesThatMatch(cell){return Object(_util__WEBPACK_IMPORTED_MODULE_0__["setIntersection"])(new Set(this.getSprites()),cell.getSpritesAsSet());}},{key:"hasSingleCollisionLayer",value:function hasSingleCollisionLayer(){var sprites=this.getSprites();var _iteratorNormalCompletion27=true;var _didIteratorError27=false;var _iteratorError27=undefined;try{for(var _iterator27=sprites[Symbol.iterator](),_step27;!(_iteratorNormalCompletion27=(_step27=_iterator27.next()).done);_iteratorNormalCompletion27=true){var _sprite5=_step27.value;if(_sprite5.getCollisionLayer()!==sprites[0].getCollisionLayer()){return false;}}}catch(err){_didIteratorError27=true;_iteratorError27=err;}finally{try{if(!_iteratorNormalCompletion27&&_iterator27.return!=null){_iterator27.return();}}finally{if(_didIteratorError27){throw _iteratorError27;}}}return true;}}]);return GameLegendTileOr;}(GameLegendTile);

/***/ }),

/***/ "./src/models/winCondition.ts":
/*!************************************!*\
  !*** ./src/models/winCondition.ts ***!
  \************************************/
/*! exports provided: WIN_QUALIFIER, WinConditionSimple, WinConditionOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIN_QUALIFIER", function() { return WIN_QUALIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinConditionSimple", function() { return WinConditionSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinConditionOn", function() { return WinConditionOn; });
/* harmony import */ var _BaseForLines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseForLines */ "./src/models/BaseForLines.ts");
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var WIN_QUALIFIER;(function(WIN_QUALIFIER){WIN_QUALIFIER["NO"]="NO";WIN_QUALIFIER["ALL"]="ALL";WIN_QUALIFIER["ANY"]="ANY";WIN_QUALIFIER["SOME"]="SOME";})(WIN_QUALIFIER||(WIN_QUALIFIER={}));var WinConditionSimple=/*#__PURE__*/function(_BaseForLines){_inherits(WinConditionSimple,_BaseForLines);function WinConditionSimple(source,qualifierEnum,tile){var _this;_classCallCheck(this,WinConditionSimple);_this=_possibleConstructorReturn(this,_getPrototypeOf(WinConditionSimple).call(this,source));_this.qualifier=qualifierEnum;_this.tile=tile;if(!tile){throw new Error('BUG: Could not find win condition tile');}return _this;}_createClass(WinConditionSimple,[{key:"cellsThatMatchTile",value:function cellsThatMatchTile(cells,tile){return _toConsumableArray(cells).filter(function(cell){return tile.matchesCell(cell);});}},{key:"isSatisfied",value:function isSatisfied(cells){var ret=this._isSatisfied(cells);if(ret){if(true){this.__incrementCoverage();}}return ret;}},{key:"a11yGetTiles",value:function a11yGetTiles(){return[this.tile];}},{key:"_isSatisfied",value:function _isSatisfied(cells){var tileCells=this.cellsThatMatchTile(cells,this.tile);switch(this.qualifier){case WIN_QUALIFIER.NO:return tileCells.length===0;case WIN_QUALIFIER.ANY:case WIN_QUALIFIER.SOME:return tileCells.length>0;// case WIN_QUALIFIER.ALL:
//     return ![...cells].filter(cell => !this.matchesTile(cell, this._tile))[0]
default:throw new Error("BUG: Invalid qualifier: \"".concat(this.qualifier,"\""));}}}]);return WinConditionSimple;}(_BaseForLines__WEBPACK_IMPORTED_MODULE_0__["BaseForLines"]);var WinConditionOn=/*#__PURE__*/function(_WinConditionSimple){_inherits(WinConditionOn,_WinConditionSimple);function WinConditionOn(source,qualifierEnum,tile,onTile){var _this2;_classCallCheck(this,WinConditionOn);_this2=_possibleConstructorReturn(this,_getPrototypeOf(WinConditionOn).call(this,source,qualifierEnum,tile));_this2.onTile=onTile;return _this2;}_createClass(WinConditionOn,[{key:"a11yGetTiles",value:function a11yGetTiles(){return[this.tile,this.onTile];}},{key:"_isSatisfied",value:function _isSatisfied(cells){// ALL Target ON CleanDishes
var tileCells=this.cellsThatMatchTile(cells,this.tile);var onTileCells=this.cellsThatMatchTile(tileCells,this.onTile);switch(this.qualifier){case WIN_QUALIFIER.NO:return onTileCells.length===0;case WIN_QUALIFIER.ANY:case WIN_QUALIFIER.SOME:return onTileCells.length>0;case WIN_QUALIFIER.ALL:return onTileCells.length===tileCells.length;default:throw new Error("BUG: Invalid qualifier: \"".concat(this.qualifier,"\""));}}}]);return WinConditionOn;}(WinConditionSimple);

/***/ }),

/***/ "./src/parser/astBuilder.ts":
/*!**********************************!*\
  !*** ./src/parser/astBuilder.ts ***!
  \**********************************/
/*! exports provided: AstBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstBuilder", function() { return AstBuilder; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../colors */ "./src/colors.ts");
/* harmony import */ var _models_collisionLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/collisionLayer */ "./src/models/collisionLayer.ts");
/* harmony import */ var _models_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/colors */ "./src/models/colors.ts");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/game */ "./src/models/game.ts");
/* harmony import */ var _models_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/metadata */ "./src/models/metadata.ts");
/* harmony import */ var _models_rule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/rule */ "./src/models/rule.ts");
/* harmony import */ var _models_tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/tile */ "./src/models/tile.ts");
/* harmony import */ var _models_winCondition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/winCondition */ "./src/models/winCondition.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util */ "./src/util.ts");
/* harmony import */ var _astTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./astTypes */ "./src/parser/astTypes.ts");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}// Shorthand because the type signatures are long
var RULE_DIRECTION_LIST=[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT];var RULE_DIRECTION_SET=new Set(RULE_DIRECTION_LIST);function removeNulls(ary){// return ary.filter(a => !!a)
var ret=[];var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=ary[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var item=_step.value;if(item){ret.push(item);}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return ret;}function cacheSetAndGet(cache,obj){var key=obj.toKey();if(!cache.has(key)){cache.set(key,obj);}return cache.get(key);}function relativeDirectionToAbsolute(currentDirection,relativeModifier){var currentDir;switch(currentDirection){case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT:currentDir=0;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP:currentDir=1;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT:currentDir=2;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN:currentDir=3;break;default:throw new Error("BUG! Invalid rule direction \"".concat(currentDirection));}switch(relativeModifier){case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_RIGHT:currentDir+=0;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_UP:currentDir+=1;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_LEFT:currentDir+=2;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_DOWN:currentDir+=3;break;default:throw new Error("BUG! invalid relative direction \"".concat(relativeModifier,"\""));}switch(currentDir%4){case 0:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT;case 1:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP;case 2:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT;case 3:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN;default:throw new Error("BUG! Incorrectly computed rule direction \"".concat(currentDirection,"\" \"").concat(relativeModifier,"\""));}}var AstBuilder=/*#__PURE__*/function(){function AstBuilder(code){_classCallCheck(this,AstBuilder);this.code=code;this.tileCache=new Map();this.soundCache=new Map();}_createClass(AstBuilder,[{key:"build",value:function build(root){var _this=this;var source=this.toSource({_sourceOffset:0});var metadata=new _models_metadata__WEBPACK_IMPORTED_MODULE_4__["GameMetadata"]();root.metadata.forEach(function(pair){var value;if(_typeof(pair.value)==='object'&&pair.value.type){switch(pair.value.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COLOR_TYPE"].HEX8:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COLOR_TYPE"].HEX6:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COLOR_TYPE"].NAME:{var v=pair.value;value=_this.buildColor(v,metadata.colorPalette);}break;case'WIDTH_AND_HEIGHT':{var _v=pair.value;var v2=_v;value=new _models_metadata__WEBPACK_IMPORTED_MODULE_4__["Dimension"](v2.width,v2.height);}break;default:throw new Error("BUG: Invalid type at this point in time: ".concat(pair.value));}}else{value=pair.value;}metadata._setValue(pair.type,value);});var sprites=root.sprites.map(function(n){return _this.buildSprite(n,metadata.colorPalette);});// assign an index to each GameSprite
sprites.forEach(function(sprite,index){sprite.allSpritesBitSetIndex=index;});// Load the legend items up (used in Rules and Levels later on)
var legendItems=root.legendItems.map(function(n){return _this.buildLegendItem(n);});var sounds=root.sounds.map(function(n){return _this.buildSound(n);});var collisionLayers=root.collisionLayers.map(function(n){return _this.buildCollisionLayer(n);});var simpleRules=this.buildSimpleRules(root.rules);var winConditions=root.winConditions.map(function(n){return _this.buildWinConditon(n);});var levels=root.levels.map(function(n){return _this.buildLevel(n);});return new _models_game__WEBPACK_IMPORTED_MODULE_3__["GameData"](source,root.title,metadata,sprites,legendItems,sounds,collisionLayers,simpleRules,winConditions,levels);}},{key:"buildSprite",value:function buildSprite(node,colorPalette){var _this2=this;var ret;if(node.type===_astTypes__WEBPACK_IMPORTED_MODULE_9__["SPRITE_TYPE"].WITH_PIXELS){var source=this.toSource(node);var colors=node.colors.map(function(n){return _this2.buildColor(n,colorPalette);});var pixels=node.pixels.map(function(row){return row.map(function(col){if(col==='.'){return new _models_colors__WEBPACK_IMPORTED_MODULE_2__["TransparentColor"](source);}else{return colors[col]||new _models_colors__WEBPACK_IMPORTED_MODULE_2__["TransparentColor"](source);}});});// Pixel colors are 0-indexed.
ret=new _models_tile__WEBPACK_IMPORTED_MODULE_6__["GameSpritePixels"](source,node.name,node.mapChar,pixels);}else{ret=new _models_tile__WEBPACK_IMPORTED_MODULE_6__["GameSpriteSingleColor"](this.toSource(node),node.name,node.mapChar,node.colors.map(function(n){return _this2.buildColor(n,colorPalette);}));}this.cacheAdd(node.name,ret);if(node.mapChar){this.cacheAdd(node.mapChar,ret);}return ret;}},{key:"buildColor",value:function buildColor(node,colorPalette){var source=this.toSource(node);var currentColorPalette=colorPalette||'arnecolors';switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COLOR_TYPE"].HEX8:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COLOR_TYPE"].HEX6:return new _models_colors__WEBPACK_IMPORTED_MODULE_2__["HexColor"](source,node.value);case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COLOR_TYPE"].NAME:if(node.value.toUpperCase()==='TRANSPARENT'){return new _models_colors__WEBPACK_IMPORTED_MODULE_2__["TransparentColor"](source);}else{// Look up the color
var hex=Object(_colors__WEBPACK_IMPORTED_MODULE_0__["lookupColorPalette"])(currentColorPalette,node.value);if(hex){return new _models_colors__WEBPACK_IMPORTED_MODULE_2__["HexColor"](source,hex);}else{return new _models_colors__WEBPACK_IMPORTED_MODULE_2__["TransparentColor"](source);}}default:throw new Error("Unsupported type ".concat(node));}}},{key:"buildLegendItem",value:function buildLegendItem(node){var _this3=this;var source=this.toSource(node);switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["TILE_TYPE"].SIMPLE:if(!node.tile){throw new Error("BUG!!!!!!");}{var ret=new _models_tile__WEBPACK_IMPORTED_MODULE_6__["GameLegendTileSimple"](source,node.name,this.cacheGet(node.tile));this.cacheAdd(node.name,ret);return ret;}case _astTypes__WEBPACK_IMPORTED_MODULE_9__["TILE_TYPE"].AND:if(!node.tiles){throw new Error("BUG!!!!!!");}{var _ret=new _models_tile__WEBPACK_IMPORTED_MODULE_6__["GameLegendTileAnd"](source,node.name,node.tiles.map(function(n){return _this3.cacheGet(n);}));this.cacheAdd(node.name,_ret);return _ret;}case _astTypes__WEBPACK_IMPORTED_MODULE_9__["TILE_TYPE"].OR:if(!node.tiles){throw new Error("BUG!!!!!!");}{var _ret2=new _models_tile__WEBPACK_IMPORTED_MODULE_6__["GameLegendTileOr"](source,node.name,node.tiles.map(function(n){return _this3.cacheGet(n);}));this.cacheAdd(node.name,_ret2);return _ret2;}default:throw new Error("Unsupported type ".concat(node));}}},{key:"buildCollisionLayer",value:function buildCollisionLayer(node){var _this4=this;var source=this.toSource(node);return new _models_collisionLayer__WEBPACK_IMPORTED_MODULE_1__["CollisionLayer"](source,node.tiles.map(function(n){return _this4.cacheGet(n);}));}},{key:"buildSound",value:function buildSound(node){switch(node.type){case'SOUND_SFX':this.soundCacheAdd(node.soundEffect,node);return node;case'SOUND_WHEN':return node;case'SOUND_SPRITE_MOVE':case'SOUND_SPRITE_DIRECTION':case'SOUND_SPRITE_EVENT':return _objectSpread({},node,{sprite:this.cacheGet(node.sprite)});default:throw new Error("Unsupported type ".concat(node));}}},{key:"buildCommand",value:function buildCommand(node){switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].SFX:if(!this.soundCacheHas(node.sound)){return null;}var sound=this.soundCacheGet(node.sound);return _objectSpread({},node,{sound:sound});case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].AGAIN:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].CANCEL:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].MESSAGE:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].CHECKPOINT:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].RESTART:case _astTypes__WEBPACK_IMPORTED_MODULE_9__["COMMAND_TYPE"].WIN:return node;default:throw new Error("Unsupported type ".concat(node));}}},{key:"buildWinConditon",value:function buildWinConditon(node){var source=this.toSource(node);switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["WIN_CONDITION_TYPE"].ON:return new _models_winCondition__WEBPACK_IMPORTED_MODULE_7__["WinConditionOn"](source,node.qualifier,this.cacheGet(node.tile),this.cacheGet(node.onTile));case _astTypes__WEBPACK_IMPORTED_MODULE_9__["WIN_CONDITION_TYPE"].SIMPLE:return new _models_winCondition__WEBPACK_IMPORTED_MODULE_7__["WinConditionSimple"](source,node.qualifier,this.cacheGet(node.tile));default:throw new Error("Unsupported type ".concat(node));}}},{key:"buildLevel",value:function buildLevel(node){var _this5=this;switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["LEVEL_TYPE"].MESSAGE:return node;case _astTypes__WEBPACK_IMPORTED_MODULE_9__["LEVEL_TYPE"].MAP:return _objectSpread({},node,{cells:node.cells.map(function(row){return row.map(function(cell){return _this5.cacheGet(cell);});})});default:throw new Error("Unsupported type ".concat(node));}}},{key:"buildSimpleRules",value:function buildSimpleRules(rules){var _this6=this;// Simplify the rules by de-duplicating them
var ruleCache=new Map();var bracketCache=new Map();var neighborCache=new Map();var tileCache=new Map();var simpleRules=rules.map(function(n){return _this6.simplifyRule(n,ruleCache,bracketCache,neighborCache,tileCache);});return simpleRules;}},{key:"simplifyRule",value:function simplifyRule(node,ruleCache,bracketCache,neighborCache,tileCache){var _this7=this;var source=this.toSource(node);switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_TYPE"].LOOP:{var subRules=node.rules.map(function(n){return _this7.simplifyRule(n,ruleCache,bracketCache,neighborCache,tileCache);});return new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleRuleLoop"](source,false/*isRandom*/,subRules);}case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_TYPE"].GROUP:// Extra checks to make TypeScript happy
if(node.rules[0]){var firstRule=node.rules[0];var isRandom=!!firstRule.isRandom;var _subRules=node.rules.map(function(n){return _this7.simplifyRule(n,ruleCache,bracketCache,neighborCache,tileCache);});// if (rules.length === 1) {
//     return rules[0]
// }
return new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleRuleGroup"](source,isRandom,_subRules);}throw new Error("BUG!!!!!!");case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_TYPE"].SIMPLE:{/**
                     * Expands this Rule into multiple `SimpleRule` objects.
                     *
                     * For example, `HORIZONTAL [ > player ] -> [ < crate ]` gets expanded to the following `SimpleRule`s:
                     *
                     * -  `LEFT  [ LEFT  player ] -> [ RIGHT crate ]`
                     * -  `RIGHT [ RIGHT player ] -> [ LEFT  crate ]`
                     *
                     * The `SimpleRule`s only have absolute directions
                     * rather than the relative ones specified in the original game code.
                     */var _isRandom=!!node.isRandom;var conditions=node.conditions;var actions=node.actions;// Check if valid
if(conditions.length!==actions.length&&actions.length!==0){throw new Error("Left side has \"".concat(conditions.length,"\" conditions and right side has \"").concat(actions.length,"\" actions!"));}if(conditions.length===actions.length){// do nothing
}else if(actions.length!==0){throw new Error("Invalid Rule. The number of brackets on the right must match the structure of the left hand side or be 0");}var simpleRules=this.rule_convertToMultiple(node).map(function(r){return _this7.rule_toSimple(r,ruleCache,bracketCache,neighborCache,tileCache);});// If the brackets are all the same object then that means we can just output 1 rule
// (the brackets don't have any directions. Otherwise they would not have been
// deduplicated as part of the .toKey() and cacheGetAndSet)
var isDuplicate=simpleRules.length===1||!node.isRandom&&simpleRules[1]&&simpleRules[0].canCollapseBecauseBracketsMatch(simpleRules[1]);if(isDuplicate){simpleRules[0].subscribeToCellChanges();// we still need it to be in a RuleGroup
// so the Rule can be evaluated multiple times (not just once)
return new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleRuleGroup"](source,_isRandom,[simpleRules[0]]);}else{var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=simpleRules[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var rule=_step2.value;rule.subscribeToCellChanges();}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleRuleGroup"](source,_isRandom,simpleRules);}}default:throw new Error("Unsupported type ".concat(node));}}},{key:"rule_toSimple",value:function rule_toSimple(node,ruleCache,bracketCache,neighborCache,tileCache){var _this8=this;var source=this.toSource(node);var directions=this.rule_getDirectionModifiers(node);var commands=removeNulls(node.commands.map(function(n){return _this8.buildCommand(n);}));if(directions.length!==1){throw new Error("BUG: should have exactly 1 direction by now but found the following: \"".concat(directions,"\""));}// Check if the condition matches the action. If so, we can simplify evaluation.
var conditionBrackets=node.conditions.map(function(x){return _this8.bracket_toSimple(x,directions[0],ruleCache,bracketCache,neighborCache,tileCache);});var actionBrackets=node.actions.map(function(x){return _this8.bracket_toSimple(x,directions[0],ruleCache,bracketCache,neighborCache,tileCache);});for(var index=0;index<conditionBrackets.length;index++){var action=actionBrackets[index];// Skip rules with no action bracket `[ > Player ] -> CHECKPOINT`
if(!action){continue;}}return cacheSetAndGet(ruleCache,new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleRule"](source,conditionBrackets,actionBrackets,commands,node.isLate,node.isRigid,node.debugFlag));}},{key:"rule_convertToMultiple",value:function rule_convertToMultiple(node){var rulesToConvert=[];var convertedRules=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this.rule_getDirectionModifiers(node)[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var _direction=_step3.value;var expandedDirection=this.rule_clone(node,_direction,null,null);rulesToConvert.push(expandedDirection);}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}var expandModifiers=new Map();expandModifiers.set(_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].HORIZONTAL,[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT]);expandModifiers.set(_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].VERTICAL,[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN]);expandModifiers.set(_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].MOVING,[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].ACTION]);var didExpandRulesToConvert;do{didExpandRulesToConvert=false;for(var _i=0;_i<rulesToConvert.length;_i++){var rule=rulesToConvert[_i];var didExpand=false;var direction=this.rule_getDirectionModifiers(rule)[0];if(this.rule_getDirectionModifiers(rule).length!==1){throw new Error("BUG: should have already expanded the rule to only contian one direction");}var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=expandModifiers[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var _step4$value=_slicedToArray(_step4.value,2),nameToExpand=_step4$value[0],variations=_step4$value[1];if(this.rule_hasModifier(rule,nameToExpand)){var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=variations[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var _variation=_step6.value;convertedRules.push(this.rule_clone(rule,direction,nameToExpand,_variation));didExpand=true;didExpandRulesToConvert=true;}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return!=null){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}}}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}if(!didExpand){// Try expanding PARALLEL and ORTHOGONAL (since they depend on the rule direction)
var perpendiculars=void 0;var parallels=void 0;switch(direction){case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN:perpendiculars=[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT];parallels=[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN];break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT:perpendiculars=[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN];parallels=[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT];break;default:throw new Error("BUG: There must be some direction");}if(perpendiculars&&parallels){var orthoParallels=[{nameToExpand:_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].ORTHOGONAL,variations:perpendiculars},{nameToExpand:_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].PERPENDICULAR,variations:perpendiculars},{nameToExpand:_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].PARALLEL,variations:parallels}];for(var _i2=0;_i2<orthoParallels.length;_i2++){var _orthoParallels$_i=orthoParallels[_i2],nameToExpand=_orthoParallels$_i.nameToExpand,variations=_orthoParallels$_i.variations;if(this.rule_hasModifier(rule,nameToExpand)){var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=variations[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var variation=_step5.value;convertedRules.push(this.rule_clone(rule,direction,nameToExpand,variation));didExpand=true;didExpandRulesToConvert=true;}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}}}}}// If nothing was expanded and this is the current rule
// then just keep it
if(!didExpand){convertedRules.push(rule);}}rulesToConvert=convertedRules;convertedRules=[];}while(didExpandRulesToConvert);return rulesToConvert;}},{key:"rule_clone",value:function rule_clone(node,direction,nameToExpand,newName){var _this9=this;var conditions=node.conditions.map(function(bracket){return _this9.bracket_clone(bracket,direction,nameToExpand,newName);});var actions=node.actions.map(function(bracket){return _this9.bracket_clone(bracket,direction,nameToExpand,newName);});// retain LATE and RIGID but discard the rest of the modifiers
var directionModifier;switch(direction){case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP:directionModifier=_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].UP;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN:directionModifier=_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].DOWN;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT:directionModifier=_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].LEFT;break;case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT:directionModifier=_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].RIGHT;break;default:throw new Error("BUG: Invalid direction \"".concat(direction,"\""));}return _objectSpread({},node,{directions:[directionModifier],conditions:conditions,actions:actions});}},{key:"rule_getDirectionModifiers",value:function rule_getDirectionModifiers(node){// Convert HORIZONTAL and VERTICAL to 2:
if(node.directions.indexOf(_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].HORIZONTAL)>=0){return[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT];}if(node.directions.indexOf(_astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].VERTICAL)>=0){return[_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP,_util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN];}var directions=node.directions.filter(function(m){return RULE_DIRECTION_SET.has(m);}).map(function(d){switch(d){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].UP:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP;case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].DOWN:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN;case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].LEFT:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT;case _astTypes__WEBPACK_IMPORTED_MODULE_9__["RULE_MODIFIER"].RIGHT:return _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT;default:throw new Error("BUG: Invalid rule direction \"".concat(d,"\""));}});if(directions.length===0){return RULE_DIRECTION_LIST;}else{return directions;}}},{key:"rule_hasModifier",value:function rule_hasModifier(node,modifier){var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=node.conditions[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var bracket=_step7.value;var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=this.rule_getAllBracketNeighbors(bracket)[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var neighbor=_step8.value;var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=neighbor.tileWithModifiers[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var t=_step9.value;if(t.direction===modifier){// HACK: cast to string
return true;}}}catch(err){_didIteratorError9=true;_iteratorError9=err;}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return!=null){_iterator9.return();}}finally{if(_didIteratorError9){throw _iteratorError9;}}}}}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return!=null){_iterator8.return();}}finally{if(_didIteratorError8){throw _iteratorError8;}}}}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return!=null){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}return false;}},{key:"rule_getAllBracketNeighbors",value:function rule_getAllBracketNeighbors(node){switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["BRACKET_TYPE"].SIMPLE:return node.neighbors;case _astTypes__WEBPACK_IMPORTED_MODULE_9__["BRACKET_TYPE"].ELLIPSIS:return[].concat(_toConsumableArray(node.beforeNeighbors),_toConsumableArray(node.afterNeighbors));default:throw new Error("Unsupported type ".concat(node));}}},{key:"bracket_clone",value:function bracket_clone(node,direction,nameToExpand,newName){var _this10=this;switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["BRACKET_TYPE"].SIMPLE:var neighbors=node.neighbors.map(function(n){return _this10.neighbor_clone(n,direction,nameToExpand,newName);});return _objectSpread({},node,{neighbors:neighbors});case _astTypes__WEBPACK_IMPORTED_MODULE_9__["BRACKET_TYPE"].ELLIPSIS:var beforeNeighbors=node.beforeNeighbors.map(function(n){return _this10.neighbor_clone(n,direction,nameToExpand,newName);});var afterNeighbors=node.afterNeighbors.map(function(n){return _this10.neighbor_clone(n,direction,nameToExpand,newName);});return _objectSpread({},node,{beforeNeighbors:beforeNeighbors,afterNeighbors:afterNeighbors});default:throw new Error("Unsupported type ".concat(node));}}},{key:"neighbor_clone",value:function neighbor_clone(node,direction,nameToExpand,newName){var _this11=this;return _objectSpread({},node,{tileWithModifiers:node.tileWithModifiers.map(function(t){return _this11.tile_clone(t,direction,nameToExpand,newName);})});}},{key:"tile_clone",value:function tile_clone(node,direction,nameToExpand,newName){switch(node.direction){case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_UP:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_DOWN:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_LEFT:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_RIGHT:var modifier=relativeDirectionToAbsolute(direction,node.direction);return _objectSpread({},node,{direction:modifier});case nameToExpand:return _objectSpread({},node,{direction:newName});case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].UP:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].DOWN:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].LEFT:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RIGHT:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].ACTION:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].STATIONARY:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION"].RANDOMDIR:case null:case undefined:return node;default:return node;// throw new Error(`BUG: Unsupported tile direction ${JSON.stringify(node)}`)
}}},{key:"bracket_toSimple",value:function bracket_toSimple(node,direction,ruleCache,bracketCache,neighborCache,tileCache){var _this12=this;var source=this.toSource(node);switch(node.type){case _astTypes__WEBPACK_IMPORTED_MODULE_9__["BRACKET_TYPE"].SIMPLE:var neighbors=node.neighbors.map(function(x){return _this12.neighbor_toSimple(x,neighborCache,tileCache);});return cacheSetAndGet(bracketCache,new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleBracket"](source,direction,neighbors,node.debugFlag));case _astTypes__WEBPACK_IMPORTED_MODULE_9__["BRACKET_TYPE"].ELLIPSIS:var beforeEllipsis=node.beforeNeighbors.map(function(x){return _this12.neighbor_toSimple(x,neighborCache,tileCache);});var afterEllipsis=node.afterNeighbors.map(function(x){return _this12.neighbor_toSimple(x,neighborCache,tileCache);});return cacheSetAndGet(bracketCache,new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleEllipsisBracket"](source,direction,beforeEllipsis,afterEllipsis,node.debugFlag));default:throw new Error("Unsupported type ".concat(node));}}},{key:"neighbor_toSimple",value:function neighbor_toSimple(node,neighborCache,tileCache){var _this13=this;var source=this.toSource(node);// Collapse duplicate tiles into one.
// e.g. Cyber-Lasso has the following rule:
// ... -> [ ElectricFloor Powered no ElectricFloor Claimed ]
//
// ElectricFloor occurs twice (one is negated)
// We keep the first and remove the rest
var tilesMap=new Map();var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{for(var _iterator10=node.tileWithModifiers[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10=(_step10=_iterator10.next()).done);_iteratorNormalCompletion10=true){var t=_step10.value;if(!tilesMap.has(t.tile)){tilesMap.set(t.tile,t);}}}catch(err){_didIteratorError10=true;_iteratorError10=err;}finally{try{if(!_iteratorNormalCompletion10&&_iterator10.return!=null){_iterator10.return();}}finally{if(_didIteratorError10){throw _iteratorError10;}}}var tileWithModifiers=_toConsumableArray(tilesMap.values());var simpleTilesWithModifier=new Set(removeNulls(tileWithModifiers.map(function(x){return _this13.tile_toSimple(x,tileCache);})));return cacheSetAndGet(neighborCache,new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleNeighbor"](source,simpleTilesWithModifier,node.debugFlag));}},{key:"tile_toSimple",value:function tile_toSimple(node,tileCache){var source=this.toSource(node);// Some games mistakenly use SFX# in a bracket when the SFX should be in the commands list after the brackets
if(!this.cacheHas(node.tile)){return null;}var tile=this.cacheGet(node.tile);var direction;switch(node.direction){case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_UP:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_DOWN:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_LEFT:case _util__WEBPACK_IMPORTED_MODULE_8__["RULE_DIRECTION_RELATIVE"].RELATIVE_RIGHT:throw new Error("BUG: Relative directions should have been resolved by now");default:direction=node.direction||null;// could be undefined (causes problems when evaluating)
}return cacheSetAndGet(tileCache,new _models_rule__WEBPACK_IMPORTED_MODULE_5__["SimpleTileWithModifier"](source,node.isNegated,node.isRandom,direction,tile,node.debugFlag));}},{key:"toSource",value:function toSource(node){return{code:this.code,sourceOffset:node._sourceOffset};}},{key:"cacheHas",value:function cacheHas(name){return this.tileCache.has(name.toLowerCase());}},{key:"cacheAdd",value:function cacheAdd(name,value){if(this.tileCache.has(name.toLowerCase())){throw new Error("BUG??? duplicate definition of ".concat(name));}this.tileCache.set(name.toLowerCase(),value);}},{key:"cacheGet",value:function cacheGet(name){var value=this.tileCache.get(name.toLowerCase());if(value){return value;}else{throw new Error("BUG: Could not find tile named ".concat(name));}}},{key:"soundCacheAdd",value:function soundCacheAdd(name,value){if(this.soundCache.has(name.toLowerCase())){throw new Error("BUG??? duplicate definition of ".concat(name));}this.soundCache.set(name.toLowerCase(),value);}},{key:"soundCacheGet",value:function soundCacheGet(name){var value=this.soundCache.get(name.toLowerCase());if(value){return value;}else{throw new Error("BUG: Could not find sound named ".concat(name));}}},{key:"soundCacheHas",value:function soundCacheHas(name){return this.soundCache.has(name.toLowerCase());}}]);return AstBuilder;}();

/***/ }),

/***/ "./src/parser/astTypes.ts":
/*!********************************!*\
  !*** ./src/parser/astTypes.ts ***!
  \********************************/
/*! exports provided: RULE_MODIFIER, TILE_MODIFIER, SOUND_WHEN, SOUND_SPRITE_DIRECTION, SOUND_SPRITE_EVENT, COLOR_TYPE, SPRITE_TYPE, TILE_TYPE, SOUND_TYPE, RULE_TYPE, BRACKET_TYPE, COMMAND_TYPE, WIN_CONDITION_TYPE, LEVEL_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE_MODIFIER", function() { return RULE_MODIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_MODIFIER", function() { return TILE_MODIFIER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUND_WHEN", function() { return SOUND_WHEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUND_SPRITE_DIRECTION", function() { return SOUND_SPRITE_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUND_SPRITE_EVENT", function() { return SOUND_SPRITE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_TYPE", function() { return COLOR_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_TYPE", function() { return SPRITE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_TYPE", function() { return TILE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOUND_TYPE", function() { return SOUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE_TYPE", function() { return RULE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BRACKET_TYPE", function() { return BRACKET_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_TYPE", function() { return COMMAND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIN_CONDITION_TYPE", function() { return WIN_CONDITION_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEVEL_TYPE", function() { return LEVEL_TYPE; });
var RULE_MODIFIER;(function(RULE_MODIFIER){RULE_MODIFIER["RANDOM"]="RANDOM";RULE_MODIFIER["UP"]="UP";RULE_MODIFIER["DOWN"]="DOWN";RULE_MODIFIER["LEFT"]="LEFT";RULE_MODIFIER["RIGHT"]="RIGHT";RULE_MODIFIER["VERTICAL"]="VERTICAL";RULE_MODIFIER["HORIZONTAL"]="HORIZONTAL";RULE_MODIFIER["ORTHOGONAL"]="ORTHOGONAL";RULE_MODIFIER["PERPENDICULAR"]="PERPENDICULAR";RULE_MODIFIER["PARALLEL"]="PARALLEL";RULE_MODIFIER["MOVING"]="MOVING";RULE_MODIFIER["LATE"]="LATE";RULE_MODIFIER["RIGID"]="RIGID";})(RULE_MODIFIER||(RULE_MODIFIER={}));var TILE_MODIFIER;(function(TILE_MODIFIER){TILE_MODIFIER["NO"]="NO";TILE_MODIFIER["LEFT"]="LEFT";TILE_MODIFIER["RIGHT"]="RIGHT";TILE_MODIFIER["UP"]="UP";TILE_MODIFIER["DOWN"]="DOWN";TILE_MODIFIER["RANDOMDIR"]="RANDOMDIR";TILE_MODIFIER["RANDOM"]="RANDOM";TILE_MODIFIER["STATIONARY"]="STATIONARY";TILE_MODIFIER["MOVING"]="MOVING";TILE_MODIFIER["ACTION"]="ACTION";TILE_MODIFIER["VERTICAL"]="VERTICAL";TILE_MODIFIER["HORIZONTAL"]="HORIZONTAL";TILE_MODIFIER["PERPENDICULAR"]="PERPENDICULAR";TILE_MODIFIER["PARALLEL"]="PARALLEL";TILE_MODIFIER["ORTHOGONAL"]="ORTHOGONAL";TILE_MODIFIER["ARROW_ANY"]="ARROW_ANY";})(TILE_MODIFIER||(TILE_MODIFIER={}));var SOUND_WHEN;(function(SOUND_WHEN){SOUND_WHEN["RESTART"]="RESTART";SOUND_WHEN["UNDO"]="UNDO";SOUND_WHEN["TITLESCREEN"]="TITLESCREEN";SOUND_WHEN["STARTGAME"]="STARTGAME";SOUND_WHEN["STARTLEVEL"]="STARTLEVEL";SOUND_WHEN["ENDLEVEL"]="ENDLEVEL";SOUND_WHEN["ENDGAME"]="ENDGAME";SOUND_WHEN["SHOWMESSAGE"]="SHOWMESSAGE";SOUND_WHEN["CLOSEMESSAGE"]="CLOSEMESSAGE";})(SOUND_WHEN||(SOUND_WHEN={}));var SOUND_SPRITE_DIRECTION;(function(SOUND_SPRITE_DIRECTION){SOUND_SPRITE_DIRECTION["UP"]="UP";SOUND_SPRITE_DIRECTION["DOWN"]="DOWN";SOUND_SPRITE_DIRECTION["LEFT"]="LEFT";SOUND_SPRITE_DIRECTION["RIGHT"]="RIGHT";SOUND_SPRITE_DIRECTION["HORIZONTAL"]="HORIZONTAL";SOUND_SPRITE_DIRECTION["VERTICAL"]="VERTICAL";})(SOUND_SPRITE_DIRECTION||(SOUND_SPRITE_DIRECTION={}));var SOUND_SPRITE_EVENT;(function(SOUND_SPRITE_EVENT){SOUND_SPRITE_EVENT["CREATE"]="CREATE";SOUND_SPRITE_EVENT["DESTROY"]="DESTROY";SOUND_SPRITE_EVENT["CANTMOVE"]="CANTMOVE";})(SOUND_SPRITE_EVENT||(SOUND_SPRITE_EVENT={}));var COLOR_TYPE;(function(COLOR_TYPE){COLOR_TYPE["HEX8"]="HEX8";COLOR_TYPE["HEX6"]="HEX6";COLOR_TYPE["NAME"]="NAME";})(COLOR_TYPE||(COLOR_TYPE={}));var SPRITE_TYPE;(function(SPRITE_TYPE){SPRITE_TYPE["NO_PIXELS"]="NO_PIXELS";SPRITE_TYPE["WITH_PIXELS"]="WITH_PIXELS";})(SPRITE_TYPE||(SPRITE_TYPE={}));var TILE_TYPE;(function(TILE_TYPE){TILE_TYPE["SIMPLE"]="LEGEND_ITEM_SIMPLE";TILE_TYPE["OR"]="LEGEND_ITEM_OR";TILE_TYPE["AND"]="LEGEND_ITEM_AND";})(TILE_TYPE||(TILE_TYPE={}));var SOUND_TYPE;(function(SOUND_TYPE){SOUND_TYPE["WHEN"]="SOUND_WHEN";SOUND_TYPE["SFX"]="SOUND_SFX";SOUND_TYPE["SPRITE_DIRECTION"]="SOUND_SPRITE_DIRECTION";SOUND_TYPE["SPRITE_MOVE"]="SOUND_SPRITE_MOVE";SOUND_TYPE["SPRITE_EVENT"]="SOUND_SPRITE_EVENT";})(SOUND_TYPE||(SOUND_TYPE={}));var RULE_TYPE;(function(RULE_TYPE){RULE_TYPE["GROUP"]="RULE_GROUP";RULE_TYPE["LOOP"]="RULE_LOOP";RULE_TYPE["SIMPLE"]="RULE_SIMPLE";})(RULE_TYPE||(RULE_TYPE={}));var BRACKET_TYPE;(function(BRACKET_TYPE){BRACKET_TYPE["SIMPLE"]="BRACKET_SIMPLE";BRACKET_TYPE["ELLIPSIS"]="BRACKET_ELLIPSIS";})(BRACKET_TYPE||(BRACKET_TYPE={}));var COMMAND_TYPE;(function(COMMAND_TYPE){COMMAND_TYPE["MESSAGE"]="COMMAND_MESSAGE";COMMAND_TYPE["AGAIN"]="COMMAND_AGAIN";COMMAND_TYPE["CANCEL"]="COMMAND_CANCEL";COMMAND_TYPE["CHECKPOINT"]="COMMAND_CHECKPOINT";COMMAND_TYPE["RESTART"]="COMMAND_RESTART";COMMAND_TYPE["WIN"]="COMMAND_WIN";COMMAND_TYPE["SFX"]="COMMAND_SFX";})(COMMAND_TYPE||(COMMAND_TYPE={}));var WIN_CONDITION_TYPE;(function(WIN_CONDITION_TYPE){WIN_CONDITION_TYPE["SIMPLE"]="WINCONDITION_SIMPLE";WIN_CONDITION_TYPE["ON"]="WINCONDITION_ON";})(WIN_CONDITION_TYPE||(WIN_CONDITION_TYPE={}));var LEVEL_TYPE;(function(LEVEL_TYPE){LEVEL_TYPE["MESSAGE"]="LEVEL_MESSAGE";LEVEL_TYPE["MAP"]="LEVEL_MAP";})(LEVEL_TYPE||(LEVEL_TYPE={}));

/***/ }),

/***/ "./src/parser/grammar.ts":
/*!*******************************!*\
  !*** ./src/parser/grammar.ts ***!
  \*******************************/
/*! exports provided: Lexer, ParserRules, ParserStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return Lexer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserRules", function() { return ParserRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserStart", function() { return ParserStart; });
/* harmony import */ var _astTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./astTypes */ "./src/parser/astTypes.ts");
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}// Generated automatically by nearley, version 2.15.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d){return d[0];}// tslint:disable
// Disable all linting because the file is autogenerated (& out of our control)
var debugBlackList=new Set([]);var debugWhiteList=new Set([]);var toDebug=function toDebug(name,fn){if( false||debugWhiteList.has(name)){// Skip debug mode for any items on the blacklist
if(debugBlackList.has(name)){return null;}// return either the custom function provided, or the default one for debugging
return fn||function(args){return{type:name,args:args};};}else{return null;// use the non-debug function
}};var nuller=function nuller(a){return null;};// const debugRule = (msg) => (a) => { debugger; console.log(msg, a); return a }
var concatChars=function concatChars(_ref){var _ref2=_slicedToArray(_ref,1),a=_ref2[0];return a.join('');};var extractFirst=function extractFirst(ary){return ary.map(function(subArray){if(subArray.length!==1){throw new Error("BUG: Expected items to only have one element (usually used in listOf[...])");}else{return subArray[0];}});};var extractSecond=function extractSecond(ary){return ary.map(function(subArray){if(subArray.length<2){throw new Error("BUG: Expected items to have at least 2 elements (usually used in listOf[...])");}else{return subArray[1];}});};var extractThird=function extractThird(ary){return ary.map(function(subArray){if(subArray.length<3){throw new Error("BUG: Expected items to have at least 3 elements (usually used in listOf[...])");}else{return subArray[2];}});};function nonemptyListOf(_ref3/*[T, T[][]]*/){var _ref4=_slicedToArray(_ref3,2),first=_ref4[0],rest=_ref4[1];var f=first;var r=rest;return[f].concat(r.map(function(_ref5){var _ref6=_slicedToArray(_ref5,2),_1=_ref6[0],child=_ref6[1];return child;}));}var upperId=function upperId(_ref7){var _ref8=_slicedToArray(_ref7,1),id=_ref8[0];return id.toUpperCase();};var TILE_MODIFIERS=new Set(['...',// This one isn't a modifier but we do not allow it so that we match ellipsis rules in a different rule
'AGAIN',// This is another hack. Some people write `[]->[AGAIN]` rather than `[]->[]AGAIN`
'DEBUGGER',// Another hack. Ensure that this is not accidentally used as a tile name
'NO','LEFT','RIGHT','UP','DOWN','RANDOMDIR','RANDOM','STATIONARY','MOVING','ACTION','VERTICAL','HORIZONTAL','PERPENDICULAR','PARALLEL','ORTHOGONAL','^','<','>','V']);;;;var Lexer=undefined;var ParserRules=[{"name":"main$ebnf$1","symbols":[]},{"name":"main$ebnf$1","symbols":["main$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$2","symbols":["lineTerminator"]},{"name":"main$ebnf$2","symbols":["main$ebnf$2","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$3$macrocall$2","symbols":["t_OBJECTS"]},{"name":"main$ebnf$3$macrocall$3","symbols":["Sprite"]},{"name":"main$ebnf$3$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$3$macrocall$1$ebnf$1","symbols":["main$ebnf$3$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$3$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$3$macrocall$1$ebnf$2","symbols":["main$ebnf$3$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$3$macrocall$1$ebnf$3","symbols":["lineTerminator"]},{"name":"main$ebnf$3$macrocall$1$ebnf$3","symbols":["main$ebnf$3$macrocall$1$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$3$macrocall$1$ebnf$4","symbols":[]},{"name":"main$ebnf$3$macrocall$1$ebnf$4$subexpression$1","symbols":["main$ebnf$3$macrocall$3"]},{"name":"main$ebnf$3$macrocall$1$ebnf$4","symbols":["main$ebnf$3$macrocall$1$ebnf$4","main$ebnf$3$macrocall$1$ebnf$4$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$3$macrocall$1","symbols":["_","main$ebnf$3$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$3$macrocall$2","lineTerminator","_","main$ebnf$3$macrocall$1$ebnf$2","main$ebnf$3$macrocall$1$ebnf$3","main$ebnf$3$macrocall$1$ebnf$4"],"postprocess":toDebug('Section',function(_ref9){var _ref10=_slicedToArray(_ref9,10),_0=_ref10[0],_1=_ref10[1],_2=_ref10[2],_3=_ref10[3],name=_ref10[4],_5=_ref10[5],_6=_ref10[6],_7=_ref10[7],_8=_ref10[8],items=_ref10[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref11){var _ref12=_slicedToArray(_ref11,10),_0=_ref12[0],_1=_ref12[1],_2=_ref12[2],_3=_ref12[3],name=_ref12[4],_5=_ref12[5],_6=_ref12[6],_7=_ref12[7],_8=_ref12[8],items=_ref12[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$3","symbols":["main$ebnf$3$macrocall$1"],"postprocess":id},{"name":"main$ebnf$3","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main$ebnf$4$macrocall$2","symbols":["t_LEGEND"]},{"name":"main$ebnf$4$macrocall$3","symbols":["LegendTile"]},{"name":"main$ebnf$4$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$4$macrocall$1$ebnf$1","symbols":["main$ebnf$4$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$4$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$4$macrocall$1$ebnf$2","symbols":["main$ebnf$4$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$4$macrocall$1$ebnf$3","symbols":["lineTerminator"]},{"name":"main$ebnf$4$macrocall$1$ebnf$3","symbols":["main$ebnf$4$macrocall$1$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$4$macrocall$1$ebnf$4","symbols":[]},{"name":"main$ebnf$4$macrocall$1$ebnf$4$subexpression$1","symbols":["main$ebnf$4$macrocall$3"]},{"name":"main$ebnf$4$macrocall$1$ebnf$4","symbols":["main$ebnf$4$macrocall$1$ebnf$4","main$ebnf$4$macrocall$1$ebnf$4$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$4$macrocall$1","symbols":["_","main$ebnf$4$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$4$macrocall$2","lineTerminator","_","main$ebnf$4$macrocall$1$ebnf$2","main$ebnf$4$macrocall$1$ebnf$3","main$ebnf$4$macrocall$1$ebnf$4"],"postprocess":toDebug('Section',function(_ref13){var _ref14=_slicedToArray(_ref13,10),_0=_ref14[0],_1=_ref14[1],_2=_ref14[2],_3=_ref14[3],name=_ref14[4],_5=_ref14[5],_6=_ref14[6],_7=_ref14[7],_8=_ref14[8],items=_ref14[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref15){var _ref16=_slicedToArray(_ref15,10),_0=_ref16[0],_1=_ref16[1],_2=_ref16[2],_3=_ref16[3],name=_ref16[4],_5=_ref16[5],_6=_ref16[6],_7=_ref16[7],_8=_ref16[8],items=_ref16[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$4","symbols":["main$ebnf$4$macrocall$1"],"postprocess":id},{"name":"main$ebnf$4","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main$ebnf$5$macrocall$2","symbols":["t_SOUNDS"]},{"name":"main$ebnf$5$macrocall$3","symbols":["SoundItem"]},{"name":"main$ebnf$5$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$5$macrocall$1$ebnf$1","symbols":["main$ebnf$5$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$5$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$5$macrocall$1$ebnf$2","symbols":["main$ebnf$5$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$5$macrocall$1$ebnf$3","symbols":["lineTerminator"]},{"name":"main$ebnf$5$macrocall$1$ebnf$3","symbols":["main$ebnf$5$macrocall$1$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$5$macrocall$1$ebnf$4","symbols":[]},{"name":"main$ebnf$5$macrocall$1$ebnf$4$subexpression$1","symbols":["main$ebnf$5$macrocall$3"]},{"name":"main$ebnf$5$macrocall$1$ebnf$4","symbols":["main$ebnf$5$macrocall$1$ebnf$4","main$ebnf$5$macrocall$1$ebnf$4$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$5$macrocall$1","symbols":["_","main$ebnf$5$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$5$macrocall$2","lineTerminator","_","main$ebnf$5$macrocall$1$ebnf$2","main$ebnf$5$macrocall$1$ebnf$3","main$ebnf$5$macrocall$1$ebnf$4"],"postprocess":toDebug('Section',function(_ref17){var _ref18=_slicedToArray(_ref17,10),_0=_ref18[0],_1=_ref18[1],_2=_ref18[2],_3=_ref18[3],name=_ref18[4],_5=_ref18[5],_6=_ref18[6],_7=_ref18[7],_8=_ref18[8],items=_ref18[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref19){var _ref20=_slicedToArray(_ref19,10),_0=_ref20[0],_1=_ref20[1],_2=_ref20[2],_3=_ref20[3],name=_ref20[4],_5=_ref20[5],_6=_ref20[6],_7=_ref20[7],_8=_ref20[8],items=_ref20[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$5","symbols":["main$ebnf$5$macrocall$1"],"postprocess":id},{"name":"main$ebnf$5","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main$ebnf$6$macrocall$2","symbols":["t_COLLISIONLAYERS"]},{"name":"main$ebnf$6$macrocall$3","symbols":["CollisionLayerItem"]},{"name":"main$ebnf$6$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$6$macrocall$1$ebnf$1","symbols":["main$ebnf$6$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$6$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$6$macrocall$1$ebnf$2","symbols":["main$ebnf$6$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$6$macrocall$1$ebnf$3","symbols":["lineTerminator"]},{"name":"main$ebnf$6$macrocall$1$ebnf$3","symbols":["main$ebnf$6$macrocall$1$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$6$macrocall$1$ebnf$4","symbols":[]},{"name":"main$ebnf$6$macrocall$1$ebnf$4$subexpression$1","symbols":["main$ebnf$6$macrocall$3"]},{"name":"main$ebnf$6$macrocall$1$ebnf$4","symbols":["main$ebnf$6$macrocall$1$ebnf$4","main$ebnf$6$macrocall$1$ebnf$4$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$6$macrocall$1","symbols":["_","main$ebnf$6$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$6$macrocall$2","lineTerminator","_","main$ebnf$6$macrocall$1$ebnf$2","main$ebnf$6$macrocall$1$ebnf$3","main$ebnf$6$macrocall$1$ebnf$4"],"postprocess":toDebug('Section',function(_ref21){var _ref22=_slicedToArray(_ref21,10),_0=_ref22[0],_1=_ref22[1],_2=_ref22[2],_3=_ref22[3],name=_ref22[4],_5=_ref22[5],_6=_ref22[6],_7=_ref22[7],_8=_ref22[8],items=_ref22[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref23){var _ref24=_slicedToArray(_ref23,10),_0=_ref24[0],_1=_ref24[1],_2=_ref24[2],_3=_ref24[3],name=_ref24[4],_5=_ref24[5],_6=_ref24[6],_7=_ref24[7],_8=_ref24[8],items=_ref24[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$6","symbols":["main$ebnf$6$macrocall$1"],"postprocess":id},{"name":"main$ebnf$6","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main$ebnf$7$macrocall$2","symbols":["t_RULES"]},{"name":"main$ebnf$7$macrocall$3","symbols":["RuleItem"]},{"name":"main$ebnf$7$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$7$macrocall$1$ebnf$1","symbols":["main$ebnf$7$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$7$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$7$macrocall$1$ebnf$2","symbols":["main$ebnf$7$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$7$macrocall$1$ebnf$3","symbols":["lineTerminator"]},{"name":"main$ebnf$7$macrocall$1$ebnf$3","symbols":["main$ebnf$7$macrocall$1$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$7$macrocall$1$ebnf$4","symbols":[]},{"name":"main$ebnf$7$macrocall$1$ebnf$4$subexpression$1","symbols":["main$ebnf$7$macrocall$3"]},{"name":"main$ebnf$7$macrocall$1$ebnf$4","symbols":["main$ebnf$7$macrocall$1$ebnf$4","main$ebnf$7$macrocall$1$ebnf$4$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$7$macrocall$1","symbols":["_","main$ebnf$7$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$7$macrocall$2","lineTerminator","_","main$ebnf$7$macrocall$1$ebnf$2","main$ebnf$7$macrocall$1$ebnf$3","main$ebnf$7$macrocall$1$ebnf$4"],"postprocess":toDebug('Section',function(_ref25){var _ref26=_slicedToArray(_ref25,10),_0=_ref26[0],_1=_ref26[1],_2=_ref26[2],_3=_ref26[3],name=_ref26[4],_5=_ref26[5],_6=_ref26[6],_7=_ref26[7],_8=_ref26[8],items=_ref26[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref27){var _ref28=_slicedToArray(_ref27,10),_0=_ref28[0],_1=_ref28[1],_2=_ref28[2],_3=_ref28[3],name=_ref28[4],_5=_ref28[5],_6=_ref28[6],_7=_ref28[7],_8=_ref28[8],items=_ref28[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$7","symbols":["main$ebnf$7$macrocall$1"],"postprocess":id},{"name":"main$ebnf$7","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main$ebnf$8$macrocall$2","symbols":["t_WINCONDITIONS"]},{"name":"main$ebnf$8$macrocall$3","symbols":["WinConditionItem"]},{"name":"main$ebnf$8$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$8$macrocall$1$ebnf$1","symbols":["main$ebnf$8$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$8$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$8$macrocall$1$ebnf$2","symbols":["main$ebnf$8$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$8$macrocall$1$ebnf$3","symbols":["lineTerminator"]},{"name":"main$ebnf$8$macrocall$1$ebnf$3","symbols":["main$ebnf$8$macrocall$1$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$8$macrocall$1$ebnf$4","symbols":[]},{"name":"main$ebnf$8$macrocall$1$ebnf$4$subexpression$1","symbols":["main$ebnf$8$macrocall$3"]},{"name":"main$ebnf$8$macrocall$1$ebnf$4","symbols":["main$ebnf$8$macrocall$1$ebnf$4","main$ebnf$8$macrocall$1$ebnf$4$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$8$macrocall$1","symbols":["_","main$ebnf$8$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$8$macrocall$2","lineTerminator","_","main$ebnf$8$macrocall$1$ebnf$2","main$ebnf$8$macrocall$1$ebnf$3","main$ebnf$8$macrocall$1$ebnf$4"],"postprocess":toDebug('Section',function(_ref29){var _ref30=_slicedToArray(_ref29,10),_0=_ref30[0],_1=_ref30[1],_2=_ref30[2],_3=_ref30[3],name=_ref30[4],_5=_ref30[5],_6=_ref30[6],_7=_ref30[7],_8=_ref30[8],items=_ref30[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref31){var _ref32=_slicedToArray(_ref31,10),_0=_ref32[0],_1=_ref32[1],_2=_ref32[2],_3=_ref32[3],name=_ref32[4],_5=_ref32[5],_6=_ref32[6],_7=_ref32[7],_8=_ref32[8],items=_ref32[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$8","symbols":["main$ebnf$8$macrocall$1"],"postprocess":id},{"name":"main$ebnf$8","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main$ebnf$9$macrocall$2","symbols":["t_LEVELS"]},{"name":"main$ebnf$9$macrocall$3","symbols":["LevelItem"]},{"name":"main$ebnf$9$macrocall$1$ebnf$1","symbols":[{"literal":"="}]},{"name":"main$ebnf$9$macrocall$1$ebnf$1","symbols":["main$ebnf$9$macrocall$1$ebnf$1",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$9$macrocall$1$ebnf$2","symbols":[{"literal":"="}]},{"name":"main$ebnf$9$macrocall$1$ebnf$2","symbols":["main$ebnf$9$macrocall$1$ebnf$2",{"literal":"="}],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$9$macrocall$1$ebnf$3","symbols":[]},{"name":"main$ebnf$9$macrocall$1$ebnf$3$subexpression$1","symbols":["main$ebnf$9$macrocall$3"]},{"name":"main$ebnf$9$macrocall$1$ebnf$3","symbols":["main$ebnf$9$macrocall$1$ebnf$3","main$ebnf$9$macrocall$1$ebnf$3$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"main$ebnf$9$macrocall$1","symbols":["_","main$ebnf$9$macrocall$1$ebnf$1","lineTerminator","_","main$ebnf$9$macrocall$2","lineTerminator","_","main$ebnf$9$macrocall$1$ebnf$2","lineTerminator","main$ebnf$9$macrocall$1$ebnf$3"],"postprocess":toDebug('Section',function(_ref33){var _ref34=_slicedToArray(_ref33,10),_0=_ref34[0],_1=_ref34[1],_2=_ref34[2],_3=_ref34[3],name=_ref34[4],_5=_ref34[5],_6=_ref34[6],_7=_ref34[7],_8=_ref34[8],items=_ref34[9];return{type:'SECTION',name:name,items:extractFirst(extractFirst(items))};})||function(_ref35){var _ref36=_slicedToArray(_ref35,10),_0=_ref36[0],_1=_ref36[1],_2=_ref36[2],_3=_ref36[3],name=_ref36[4],_5=_ref36[5],_6=_ref36[6],_7=_ref36[7],_8=_ref36[8],items=_ref36[9];return extractFirst(extractFirst(items));}},{"name":"main$ebnf$9","symbols":["main$ebnf$9$macrocall$1"],"postprocess":id},{"name":"main$ebnf$9","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"main","symbols":["main$ebnf$1","_","Title","main$ebnf$2","OptionalMetaData","main$ebnf$3","main$ebnf$4","main$ebnf$5","main$ebnf$6","main$ebnf$7","main$ebnf$8","main$ebnf$9"],"postprocess":toDebug('Section')||function(_ref37){var _ref38=_slicedToArray(_ref37,12),_0=_ref38[0],_1=_ref38[1],title=_ref38[2],_2=_ref38[3],metadata=_ref38[4],sprites=_ref38[5],legendItems=_ref38[6],sounds=_ref38[7],collisionLayers=_ref38[8],rules=_ref38[9],winConditions=_ref38[10],levelsAsSingleArray=_ref38[11];var levels=[];var currentMapLevel=null;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=(levelsAsSingleArray||[])[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var levelRowItem=_step.value;switch(levelRowItem.type){case'LEVEL_ROW':if(currentMapLevel){currentMapLevel.push(levelRowItem);}else{currentMapLevel=[levelRowItem];}break;case'LEVEL_MESSAGE':if(currentMapLevel){levels.push({type:'LEVEL_MAP',cells:currentMapLevel.map(function(row){return row.cells;}),_sourceOffset:currentMapLevel[0]._sourceOffset});currentMapLevel=null;}levels.push(levelRowItem);break;case'LEVEL_SEPARATOR':if(currentMapLevel){levels.push({type:'LEVEL_MAP',cells:currentMapLevel.map(function(row){return row.cells;}),_sourceOffset:currentMapLevel[0]._sourceOffset});currentMapLevel=null;}break;default:throw new Error("BUG: Unsupported level row type \"".concat(levelRowItem.type,"\""));}}// add the last level
}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}if(currentMapLevel){levels.push({type:'LEVEL_MAP',cells:currentMapLevel.map(function(row){return row.cells;}),_sourceOffset:currentMapLevel[0]._sourceOffset});currentMapLevel=null;}return{title:title.value,metadata:metadata.value,sprites:sprites||[],legendItems:legendItems||[],sounds:sounds||[],collisionLayers:collisionLayers||[],rules:rules||[],winConditions:winConditions||[],levels:levels};}},{"name":"_$ebnf$1","symbols":[]},{"name":"_$ebnf$1$subexpression$1","symbols":["whitespaceChar"]},{"name":"_$ebnf$1$subexpression$1","symbols":["multiLineComment"]},{"name":"_$ebnf$1","symbols":["_$ebnf$1","_$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"_","symbols":["_$ebnf$1"],"postprocess":toDebug('whitespace')||nuller},{"name":"__$ebnf$1$subexpression$1","symbols":["whitespaceChar"]},{"name":"__$ebnf$1$subexpression$1","symbols":["multiLineComment"]},{"name":"__$ebnf$1","symbols":["__$ebnf$1$subexpression$1"]},{"name":"__$ebnf$1$subexpression$2","symbols":["whitespaceChar"]},{"name":"__$ebnf$1$subexpression$2","symbols":["multiLineComment"]},{"name":"__$ebnf$1","symbols":["__$ebnf$1","__$ebnf$1$subexpression$2"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"__","symbols":["__$ebnf$1"],"postprocess":toDebug('whitespace')||nuller},{"name":"multiLineComment$ebnf$1","symbols":[]},{"name":"multiLineComment$ebnf$1","symbols":["multiLineComment$ebnf$1","textOrComment"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"multiLineComment","symbols":[{"literal":"("},"multiLineComment$ebnf$1",{"literal":")"}],"postprocess":toDebug('multiLineComment')||nuller},{"name":"textOrComment","symbols":["multiLineComment"],"postprocess":nuller},{"name":"textOrComment","symbols":[/[^\(\)]/],"postprocess":nuller},{"name":"whitespaceChar","symbols":[{"literal":" "}]},{"name":"whitespaceChar","symbols":[{"literal":"\t"}]},{"name":"newline","symbols":[{"literal":"\n"}]},{"name":"digit","symbols":[/[0-9]/],"postprocess":id},{"name":"hexDigit","symbols":[/[0-9a-fA-F]/],"postprocess":id},{"name":"letter","symbols":[/[^\n \(\)]/],"postprocess":id},{"name":"integer$ebnf$1","symbols":["digit"]},{"name":"integer$ebnf$1","symbols":["integer$ebnf$1","digit"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"integer","symbols":["integer$ebnf$1"],"postprocess":function postprocess(_ref39){var _ref40=_slicedToArray(_ref39,1),chars=_ref40[0];return parseInt(chars.join(''),10);}},{"name":"word$ebnf$1","symbols":[/[^\n \(]/]},{"name":"word$ebnf$1","symbols":["word$ebnf$1",/[^\n \(]/],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"word","symbols":["word$ebnf$1"],"postprocess":toDebug('WORD')||concatChars},{"name":"words$macrocall$2","symbols":["word"]},{"name":"words$macrocall$3$ebnf$1","symbols":["whitespaceChar"]},{"name":"words$macrocall$3$ebnf$1","symbols":["words$macrocall$3$ebnf$1","whitespaceChar"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"words$macrocall$3","symbols":["words$macrocall$3$ebnf$1"]},{"name":"words$macrocall$1$ebnf$1","symbols":[]},{"name":"words$macrocall$1$ebnf$1$subexpression$1","symbols":["words$macrocall$3","words$macrocall$2"]},{"name":"words$macrocall$1$ebnf$1","symbols":["words$macrocall$1$ebnf$1","words$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"words$macrocall$1","symbols":["words$macrocall$2","words$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"words","symbols":["words$macrocall$1"],"postprocess":toDebug('WORDS')||function(_ref41){var _ref42=_slicedToArray(_ref41,1),a=_ref42[0];return extractFirst(a).join(' ');}},{"name":"lineTerminator","symbols":["_","newline"],"postprocess":toDebug('lineTerminator')||nuller},{"name":"sourceCharacter","symbols":[/[^\n ]/]},{"name":"nonVarChar","symbols":["whitespaceChar"]},{"name":"nonVarChar","symbols":["newline"]},{"name":"nonVarChar","symbols":[{"literal":"["}]},{"name":"nonVarChar","symbols":[{"literal":"]"}]},{"name":"nonVarChar","symbols":[{"literal":"("}]},{"name":"nonVarChar","symbols":[{"literal":")"}]},{"name":"nonVarChar","symbols":[{"literal":"|"}]},{"name":"nonVarChar","symbols":[{"literal":"."}]},{"name":"decimal","symbols":["decimalWithLeadingNumber"]},{"name":"decimal","symbols":["decimalWithLeadingPeriod"]},{"name":"decimalWithLeadingNumber$ebnf$1","symbols":["digit"]},{"name":"decimalWithLeadingNumber$ebnf$1","symbols":["decimalWithLeadingNumber$ebnf$1","digit"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"decimalWithLeadingNumber$ebnf$2$subexpression$1$ebnf$1","symbols":["digit"]},{"name":"decimalWithLeadingNumber$ebnf$2$subexpression$1$ebnf$1","symbols":["decimalWithLeadingNumber$ebnf$2$subexpression$1$ebnf$1","digit"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"decimalWithLeadingNumber$ebnf$2$subexpression$1","symbols":[{"literal":"."},"decimalWithLeadingNumber$ebnf$2$subexpression$1$ebnf$1"]},{"name":"decimalWithLeadingNumber$ebnf$2","symbols":["decimalWithLeadingNumber$ebnf$2$subexpression$1"],"postprocess":id},{"name":"decimalWithLeadingNumber$ebnf$2","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"decimalWithLeadingNumber","symbols":["decimalWithLeadingNumber$ebnf$1","decimalWithLeadingNumber$ebnf$2"],"postprocess":function postprocess(_ref43){var _ref44=_slicedToArray(_ref43,2),firstDigit=_ref44[0],rest=_ref44[1];if(rest){return Number.parseFloat("".concat(firstDigit[0],".").concat(rest[1].join('')));}else{return Number.parseInt(firstDigit[0],10);}}},{"name":"decimalWithLeadingPeriod$ebnf$1","symbols":["digit"]},{"name":"decimalWithLeadingPeriod$ebnf$1","symbols":["decimalWithLeadingPeriod$ebnf$1","digit"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"decimalWithLeadingPeriod","symbols":[{"literal":"."},"decimalWithLeadingPeriod$ebnf$1"],"postprocess":function postprocess(_ref45){var _ref46=_slicedToArray(_ref45,2),_1=_ref46[0],digits=_ref46[1];return Number.parseInt(digits.join(''),10);}},{"name":"colorHex8","symbols":[{"literal":"#"},"hexDigit","hexDigit","hexDigit","hexDigit","hexDigit","hexDigit","hexDigit","hexDigit"],"postprocess":function postprocess(a,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COLOR_TYPE"].HEX8,value:a.join(''),_sourceOffset:_sourceOffset};}},{"name":"colorHex6","symbols":[{"literal":"#"},"hexDigit","hexDigit","hexDigit","hexDigit","hexDigit","hexDigit"],"postprocess":function postprocess(a,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COLOR_TYPE"].HEX6,value:a.join(''),_sourceOffset:_sourceOffset};}},{"name":"colorHex4","symbols":[{"literal":"#"},"hexDigit","hexDigit","hexDigit","hexDigit"],"postprocess":function postprocess(_ref47,_sourceOffset){var _ref48=_slicedToArray(_ref47,5),hash=_ref48[0],c1=_ref48[1],c2=_ref48[2],c3=_ref48[3],c4=_ref48[4];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COLOR_TYPE"].HEX8,value:"#".concat(c1).concat(c1).concat(c2).concat(c2).concat(c3).concat(c3).concat(c4).concat(c4),_sourceOffset:_sourceOffset};}},{"name":"colorHex3","symbols":[{"literal":"#"},"hexDigit","hexDigit","hexDigit"],"postprocess":function postprocess(_ref49,_sourceOffset){var _ref50=_slicedToArray(_ref49,4),hash=_ref50[0],c1=_ref50[1],c2=_ref50[2],c3=_ref50[3];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COLOR_TYPE"].HEX6,value:"#".concat(c1).concat(c1).concat(c2).concat(c2).concat(c3).concat(c3),_sourceOffset:_sourceOffset};}},{"name":"colorNameOrHex","symbols":["colorHex8"],"postprocess":id},{"name":"colorNameOrHex","symbols":["colorHex6"],"postprocess":id},{"name":"colorNameOrHex","symbols":["colorHex4"],"postprocess":id},{"name":"colorNameOrHex","symbols":["colorHex3"],"postprocess":id},{"name":"colorNameOrHex","symbols":["colorName"],"postprocess":id},{"name":"colorName","symbols":[/[^\n #\(0-9\.]/,"word"],"postprocess":toDebug('COLOR_NAME')||function(_ref51,_sourceOffset){var _ref52=_slicedToArray(_ref51,2),first=_ref52[0],rest=_ref52[1];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COLOR_TYPE"].NAME,value:[first].concat(rest).join(''),_sourceOffset:_sourceOffset};}},{"name":"legendVariableChar","symbols":[/[^\n\ \=]/]},{"name":"ruleVariableChar","symbols":[/[^(?=\.\.\.)\n \=\[\]\|]/]},{"name":"ruleVariableName$ebnf$1","symbols":["ruleVariableChar"]},{"name":"ruleVariableName$ebnf$1","symbols":["ruleVariableName$ebnf$1","ruleVariableChar"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"ruleVariableName","symbols":["ruleVariableName$ebnf$1"],"postprocess":concatChars},{"name":"lookupRuleVariableName$ebnf$1","symbols":[/[^\n \=\[\]\|]/]},{"name":"lookupRuleVariableName$ebnf$1","symbols":["lookupRuleVariableName$ebnf$1",/[^\n \=\[\]\|]/],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"lookupRuleVariableName","symbols":["lookupRuleVariableName$ebnf$1"],"postprocess":function postprocess(_ref53,offset,reject){var _ref54=_slicedToArray(_ref53,1),a=_ref54[0];var str=a.join('');if(TILE_MODIFIERS.has(str.toUpperCase())){return reject;}else{return str;}}},{"name":"collisionVariableChar","symbols":[/[^(?=\.\.\.)\ \n\=\[\]\|\,]/]},{"name":"collisionVariableName$ebnf$1","symbols":["collisionVariableChar"]},{"name":"collisionVariableName$ebnf$1","symbols":["collisionVariableName$ebnf$1","collisionVariableChar"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"collisionVariableName","symbols":["collisionVariableName$ebnf$1"],"postprocess":concatChars},{"name":"lookupCollisionVariableName","symbols":["collisionVariableName"],"postprocess":id},{"name":"t_DEBUGGER","symbols":["t_DEBUGGER_ADD"],"postprocess":id},{"name":"t_DEBUGGER","symbols":["t_DEBUGGER_REMOVE"],"postprocess":id},{"name":"t_DEBUGGER","symbols":["t_DEBUGGER_DEFAULT"],"postprocess":id},{"name":"t_DEBUGGER_DEFAULT$subexpression$1","symbols":[/[dD]/,/[eE]/,/[bB]/,/[uU]/,/[gG]/,/[gG]/,/[eE]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_DEBUGGER_DEFAULT","symbols":["t_DEBUGGER_DEFAULT$subexpression$1"],"postprocess":upperId},{"name":"t_DEBUGGER_ADD$subexpression$1","symbols":[/[dD]/,/[eE]/,/[bB]/,/[uU]/,/[gG]/,/[gG]/,/[eE]/,/[rR]/,{"literal":"_"},/[aA]/,/[dD]/,/[dD]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_DEBUGGER_ADD","symbols":["t_DEBUGGER_ADD$subexpression$1"],"postprocess":upperId},{"name":"t_DEBUGGER_REMOVE$subexpression$1","symbols":[/[dD]/,/[eE]/,/[bB]/,/[uU]/,/[gG]/,/[gG]/,/[eE]/,/[rR]/,{"literal":"_"},/[rR]/,/[eE]/,/[mM]/,/[oO]/,/[vV]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_DEBUGGER_REMOVE","symbols":["t_DEBUGGER_REMOVE$subexpression$1"],"postprocess":upperId},{"name":"t_OBJECTS$subexpression$1","symbols":[/[oO]/,/[bB]/,/[jJ]/,/[eE]/,/[cC]/,/[tT]/,/[sS]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_OBJECTS","symbols":["t_OBJECTS$subexpression$1"],"postprocess":upperId},{"name":"t_LEGEND$subexpression$1","symbols":[/[lL]/,/[eE]/,/[gG]/,/[eE]/,/[nN]/,/[dD]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_LEGEND","symbols":["t_LEGEND$subexpression$1"],"postprocess":upperId},{"name":"t_SOUNDS$subexpression$1","symbols":[/[sS]/,/[oO]/,/[uU]/,/[nN]/,/[dD]/,/[sS]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SOUNDS","symbols":["t_SOUNDS$subexpression$1"],"postprocess":upperId},{"name":"t_COLLISIONLAYERS$subexpression$1","symbols":[/[cC]/,/[oO]/,/[lL]/,/[lL]/,/[iI]/,/[sS]/,/[iI]/,/[oO]/,/[nN]/,/[lL]/,/[aA]/,/[yY]/,/[eE]/,/[rR]/,/[sS]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_COLLISIONLAYERS","symbols":["t_COLLISIONLAYERS$subexpression$1"],"postprocess":upperId},{"name":"t_RULES$subexpression$1","symbols":[/[rR]/,/[uU]/,/[lL]/,/[eE]/,/[sS]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RULES","symbols":["t_RULES$subexpression$1"],"postprocess":upperId},{"name":"t_WINCONDITIONS$subexpression$1","symbols":[/[wW]/,/[iI]/,/[nN]/,/[cC]/,/[oO]/,/[nN]/,/[dD]/,/[iI]/,/[tT]/,/[iI]/,/[oO]/,/[nN]/,/[sS]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_WINCONDITIONS","symbols":["t_WINCONDITIONS$subexpression$1"],"postprocess":upperId},{"name":"t_LEVELS$subexpression$1","symbols":[/[lL]/,/[eE]/,/[vV]/,/[eE]/,/[lL]/,/[sS]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_LEVELS","symbols":["t_LEVELS$subexpression$1"],"postprocess":upperId},{"name":"t_RIGID$subexpression$1","symbols":[/[rR]/,/[iI]/,/[gG]/,/[iI]/,/[dD]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RIGID","symbols":["t_RIGID$subexpression$1"],"postprocess":upperId},{"name":"t_LATE$subexpression$1","symbols":[/[lL]/,/[aA]/,/[tT]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_LATE","symbols":["t_LATE$subexpression$1"],"postprocess":upperId},{"name":"t_RANDOM$subexpression$1","symbols":[/[rR]/,/[aA]/,/[nN]/,/[dD]/,/[oO]/,/[mM]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RANDOM","symbols":["t_RANDOM$subexpression$1"],"postprocess":upperId},{"name":"t_RANDOMDIR$subexpression$1","symbols":[/[rR]/,/[aA]/,/[nN]/,/[dD]/,/[oO]/,/[mM]/,/[dD]/,/[iI]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RANDOMDIR","symbols":["t_RANDOMDIR$subexpression$1"],"postprocess":upperId},{"name":"t_ACTION$subexpression$1","symbols":[/[aA]/,/[cC]/,/[tT]/,/[iI]/,/[oO]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ACTION","symbols":["t_ACTION$subexpression$1"],"postprocess":upperId},{"name":"t_STARTLOOP$subexpression$1","symbols":[/[sS]/,/[tT]/,/[aA]/,/[rR]/,/[tT]/,/[lL]/,/[oO]/,/[oO]/,/[pP]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_STARTLOOP","symbols":["t_STARTLOOP$subexpression$1"],"postprocess":upperId},{"name":"t_ENDLOOP$subexpression$1","symbols":[/[eE]/,/[nN]/,/[dD]/,/[lL]/,/[oO]/,/[oO]/,/[pP]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ENDLOOP","symbols":["t_ENDLOOP$subexpression$1"],"postprocess":upperId},{"name":"t_UP$subexpression$1","symbols":[/[uU]/,/[pP]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_UP","symbols":["t_UP$subexpression$1"],"postprocess":upperId},{"name":"t_DOWN$subexpression$1","symbols":[/[dD]/,/[oO]/,/[wW]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_DOWN","symbols":["t_DOWN$subexpression$1"],"postprocess":upperId},{"name":"t_LEFT$subexpression$1","symbols":[/[lL]/,/[eE]/,/[fF]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_LEFT","symbols":["t_LEFT$subexpression$1"],"postprocess":upperId},{"name":"t_RIGHT$subexpression$1","symbols":[/[rR]/,/[iI]/,/[gG]/,/[hH]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RIGHT","symbols":["t_RIGHT$subexpression$1"],"postprocess":upperId},{"name":"t_ARROW_UP$subexpression$1","symbols":[{"literal":"^"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ARROW_UP","symbols":["t_ARROW_UP$subexpression$1"],"postprocess":upperId},{"name":"t_ARROW_DOWN$subexpression$1","symbols":[/[vV]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ARROW_DOWN","symbols":["t_ARROW_DOWN$subexpression$1"],"postprocess":upperId},{"name":"t_ARROW_LEFT$subexpression$1","symbols":[{"literal":"<"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ARROW_LEFT","symbols":["t_ARROW_LEFT$subexpression$1"],"postprocess":upperId},{"name":"t_ARROW_RIGHT$subexpression$1","symbols":[{"literal":">"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ARROW_RIGHT","symbols":["t_ARROW_RIGHT$subexpression$1"],"postprocess":upperId},{"name":"t_MOVING$subexpression$1","symbols":[/[mM]/,/[oO]/,/[vV]/,/[iI]/,/[nN]/,/[gG]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_MOVING","symbols":["t_MOVING$subexpression$1"],"postprocess":upperId},{"name":"t_ORTHOGONAL$subexpression$1","symbols":[/[oO]/,/[rR]/,/[tT]/,/[hH]/,/[oO]/,/[gG]/,/[oO]/,/[nN]/,/[aA]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ORTHOGONAL","symbols":["t_ORTHOGONAL$subexpression$1"],"postprocess":upperId},{"name":"t_PERPENDICULAR$subexpression$1","symbols":[/[pP]/,/[eE]/,/[rR]/,/[pP]/,/[eE]/,/[nN]/,/[dD]/,/[iI]/,/[cC]/,/[uU]/,/[lL]/,/[aA]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_PERPENDICULAR","symbols":["t_PERPENDICULAR$subexpression$1"],"postprocess":upperId},{"name":"t_PARALLEL$subexpression$1","symbols":[/[pP]/,/[aA]/,/[rR]/,/[aA]/,/[lL]/,/[lL]/,/[eE]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_PARALLEL","symbols":["t_PARALLEL$subexpression$1"],"postprocess":upperId},{"name":"t_STATIONARY$subexpression$1","symbols":[/[sS]/,/[tT]/,/[aA]/,/[tT]/,/[iI]/,/[oO]/,/[nN]/,/[aA]/,/[rR]/,/[yY]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_STATIONARY","symbols":["t_STATIONARY$subexpression$1"],"postprocess":upperId},{"name":"t_HORIZONTAL$subexpression$1","symbols":[/[hH]/,/[oO]/,/[rR]/,/[iI]/,/[zZ]/,/[oO]/,/[nN]/,/[tT]/,/[aA]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_HORIZONTAL","symbols":["t_HORIZONTAL$subexpression$1"],"postprocess":upperId},{"name":"t_VERTICAL$subexpression$1","symbols":[/[vV]/,/[eE]/,/[rR]/,/[tT]/,/[iI]/,/[cC]/,/[aA]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_VERTICAL","symbols":["t_VERTICAL$subexpression$1"],"postprocess":upperId},{"name":"t_ARROW_ANY","symbols":["t_ARROW_UP"],"postprocess":upperId},{"name":"t_ARROW_ANY","symbols":["t_ARROW_DOWN"],"postprocess":upperId},{"name":"t_ARROW_ANY","symbols":["t_ARROW_LEFT"],"postprocess":upperId},{"name":"t_ARROW_ANY","symbols":["t_ARROW_RIGHT"],"postprocess":upperId},{"name":"t_AGAIN$subexpression$1","symbols":[/[aA]/,/[gG]/,/[aA]/,/[iI]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_AGAIN","symbols":["t_AGAIN$subexpression$1"],"postprocess":upperId},{"name":"t_CANCEL$subexpression$1","symbols":[/[cC]/,/[aA]/,/[nN]/,/[cC]/,/[eE]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_CANCEL","symbols":["t_CANCEL$subexpression$1"],"postprocess":upperId},{"name":"t_CHECKPOINT$subexpression$1","symbols":[/[cC]/,/[hH]/,/[eE]/,/[cC]/,/[kK]/,/[pP]/,/[oO]/,/[iI]/,/[nN]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_CHECKPOINT","symbols":["t_CHECKPOINT$subexpression$1"],"postprocess":upperId},{"name":"t_RESTART$subexpression$1","symbols":[/[rR]/,/[eE]/,/[sS]/,/[tT]/,/[aA]/,/[rR]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RESTART","symbols":["t_RESTART$subexpression$1"],"postprocess":upperId},{"name":"t_UNDO$subexpression$1","symbols":[/[uU]/,/[nN]/,/[dD]/,/[oO]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_UNDO","symbols":["t_UNDO$subexpression$1"],"postprocess":upperId},{"name":"t_WIN$subexpression$1","symbols":[/[wW]/,/[iI]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_WIN","symbols":["t_WIN$subexpression$1"],"postprocess":upperId},{"name":"t_MESSAGE$subexpression$1","symbols":[/[mM]/,/[eE]/,/[sS]/,/[sS]/,/[aA]/,/[gG]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_MESSAGE","symbols":["t_MESSAGE$subexpression$1"],"postprocess":upperId},{"name":"t_ELLIPSIS$subexpression$1","symbols":[{"literal":"."},{"literal":"."},{"literal":"."}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ELLIPSIS","symbols":["t_ELLIPSIS$subexpression$1"],"postprocess":upperId},{"name":"t_AND$subexpression$1","symbols":[/[aA]/,/[nN]/,/[dD]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_AND","symbols":["t_AND$subexpression$1"],"postprocess":upperId},{"name":"t_OR$subexpression$1","symbols":[/[oO]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_OR","symbols":["t_OR$subexpression$1"],"postprocess":upperId},{"name":"t_SFX0$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"0"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX0","symbols":["t_SFX0$subexpression$1"],"postprocess":upperId},{"name":"t_SFX1$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"1"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX1","symbols":["t_SFX1$subexpression$1"],"postprocess":upperId},{"name":"t_SFX2$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"2"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX2","symbols":["t_SFX2$subexpression$1"],"postprocess":upperId},{"name":"t_SFX3$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"3"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX3","symbols":["t_SFX3$subexpression$1"],"postprocess":upperId},{"name":"t_SFX4$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"4"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX4","symbols":["t_SFX4$subexpression$1"],"postprocess":upperId},{"name":"t_SFX5$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"5"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX5","symbols":["t_SFX5$subexpression$1"],"postprocess":upperId},{"name":"t_SFX6$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"6"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX6","symbols":["t_SFX6$subexpression$1"],"postprocess":upperId},{"name":"t_SFX7$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"7"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX7","symbols":["t_SFX7$subexpression$1"],"postprocess":upperId},{"name":"t_SFX8$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"8"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX8","symbols":["t_SFX8$subexpression$1"],"postprocess":upperId},{"name":"t_SFX9$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"9"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX9","symbols":["t_SFX9$subexpression$1"],"postprocess":upperId},{"name":"t_SFX10$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"1"},{"literal":"0"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX10","symbols":["t_SFX10$subexpression$1"],"postprocess":upperId},{"name":"t_SFX_LETTERS$subexpression$1","symbols":[/[sS]/,/[fF]/,/[xX]/,{"literal":"_"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SFX_LETTERS$ebnf$1","symbols":["letter"]},{"name":"t_SFX_LETTERS$ebnf$1","symbols":["t_SFX_LETTERS$ebnf$1","letter"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"t_SFX_LETTERS","symbols":["t_SFX_LETTERS$subexpression$1","t_SFX_LETTERS$ebnf$1"],"postprocess":function postprocess(a,_sourceOffset){return a.join('');}},{"name":"t_SFX","symbols":["t_SFX_LETTERS"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX10"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX0"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX1"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX2"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX3"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX4"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX5"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX6"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX7"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX8"],"postprocess":upperId},{"name":"t_SFX","symbols":["t_SFX9"],"postprocess":upperId},{"name":"t_TITLE$subexpression$1","symbols":[/[tT]/,/[iI]/,/[tT]/,/[lL]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_TITLE","symbols":["t_TITLE$subexpression$1"],"postprocess":upperId},{"name":"t_AUTHOR$subexpression$1","symbols":[/[aA]/,/[uU]/,/[tT]/,/[hH]/,/[oO]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_AUTHOR","symbols":["t_AUTHOR$subexpression$1"],"postprocess":upperId},{"name":"t_HOMEPAGE$subexpression$1","symbols":[/[hH]/,/[oO]/,/[mM]/,/[eE]/,/[pP]/,/[aA]/,/[gG]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_HOMEPAGE","symbols":["t_HOMEPAGE$subexpression$1"],"postprocess":upperId},{"name":"t_YOUTUBE$subexpression$1","symbols":[/[yY]/,/[oO]/,/[uU]/,/[tT]/,/[uU]/,/[bB]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_YOUTUBE","symbols":["t_YOUTUBE$subexpression$1"],"postprocess":upperId},{"name":"t_ZOOMSCREEN$subexpression$1","symbols":[/[zZ]/,/[oO]/,/[oO]/,/[mM]/,/[sS]/,/[cC]/,/[rR]/,/[eE]/,/[eE]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ZOOMSCREEN","symbols":["t_ZOOMSCREEN$subexpression$1"],"postprocess":upperId},{"name":"t_FLICKSCREEN$subexpression$1","symbols":[/[fF]/,/[lL]/,/[iI]/,/[cC]/,/[kK]/,/[sS]/,/[cC]/,/[rR]/,/[eE]/,/[eE]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_FLICKSCREEN","symbols":["t_FLICKSCREEN$subexpression$1"],"postprocess":upperId},{"name":"t_REQUIRE_PLAYER_MOVEMENT$subexpression$1","symbols":[/[rR]/,/[eE]/,/[qQ]/,/[uU]/,/[iI]/,/[rR]/,/[eE]/,{"literal":"_"},/[pP]/,/[lL]/,/[aA]/,/[yY]/,/[eE]/,/[rR]/,{"literal":"_"},/[mM]/,/[oO]/,/[vV]/,/[eE]/,/[mM]/,/[eE]/,/[nN]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_REQUIRE_PLAYER_MOVEMENT","symbols":["t_REQUIRE_PLAYER_MOVEMENT$subexpression$1"],"postprocess":upperId},{"name":"t_RUN_RULES_ON_LEVEL_START$subexpression$1","symbols":[/[rR]/,/[uU]/,/[nN]/,{"literal":"_"},/[rR]/,/[uU]/,/[lL]/,/[eE]/,/[sS]/,{"literal":"_"},/[oO]/,/[nN]/,{"literal":"_"},/[lL]/,/[eE]/,/[vV]/,/[eE]/,/[lL]/,{"literal":"_"},/[sS]/,/[tT]/,/[aA]/,/[rR]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_RUN_RULES_ON_LEVEL_START","symbols":["t_RUN_RULES_ON_LEVEL_START$subexpression$1"],"postprocess":upperId},{"name":"t_COLOR_PALETTE$subexpression$1","symbols":[/[cC]/,/[oO]/,/[lL]/,/[oO]/,/[rR]/,{"literal":"_"},/[pP]/,/[aA]/,/[lL]/,/[eE]/,/[tT]/,/[tT]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_COLOR_PALETTE","symbols":["t_COLOR_PALETTE$subexpression$1"],"postprocess":upperId},{"name":"t_BACKGROUND_COLOR$subexpression$1","symbols":[/[bB]/,/[aA]/,/[cC]/,/[kK]/,/[gG]/,/[rR]/,/[oO]/,/[uU]/,/[nN]/,/[dD]/,{"literal":"_"},/[cC]/,/[oO]/,/[lL]/,/[oO]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_BACKGROUND_COLOR","symbols":["t_BACKGROUND_COLOR$subexpression$1"],"postprocess":upperId},{"name":"t_TEXT_COLOR$subexpression$1","symbols":[/[tT]/,/[eE]/,/[xX]/,/[tT]/,{"literal":"_"},/[cC]/,/[oO]/,/[lL]/,/[oO]/,/[rR]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_TEXT_COLOR","symbols":["t_TEXT_COLOR$subexpression$1"],"postprocess":upperId},{"name":"t_REALTIME_INTERVAL$subexpression$1","symbols":[/[rR]/,/[eE]/,/[aA]/,/[lL]/,/[tT]/,/[iI]/,/[mM]/,/[eE]/,{"literal":"_"},/[iI]/,/[nN]/,/[tT]/,/[eE]/,/[rR]/,/[vV]/,/[aA]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_REALTIME_INTERVAL","symbols":["t_REALTIME_INTERVAL$subexpression$1"],"postprocess":upperId},{"name":"t_KEY_REPEAT_INTERVAL$subexpression$1","symbols":[/[kK]/,/[eE]/,/[yY]/,{"literal":"_"},/[rR]/,/[eE]/,/[pP]/,/[eE]/,/[aA]/,/[tT]/,{"literal":"_"},/[iI]/,/[nN]/,/[tT]/,/[eE]/,/[rR]/,/[vV]/,/[aA]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_KEY_REPEAT_INTERVAL","symbols":["t_KEY_REPEAT_INTERVAL$subexpression$1"],"postprocess":upperId},{"name":"t_AGAIN_INTERVAL$subexpression$1","symbols":[/[aA]/,/[gG]/,/[aA]/,/[iI]/,/[nN]/,{"literal":"_"},/[iI]/,/[nN]/,/[tT]/,/[eE]/,/[rR]/,/[vV]/,/[aA]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_AGAIN_INTERVAL","symbols":["t_AGAIN_INTERVAL$subexpression$1"],"postprocess":upperId},{"name":"t_NOACTION$subexpression$1","symbols":[/[nN]/,/[oO]/,/[aA]/,/[cC]/,/[tT]/,/[iI]/,/[oO]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_NOACTION","symbols":["t_NOACTION$subexpression$1"],"postprocess":upperId},{"name":"t_NOUNDO$subexpression$1","symbols":[/[nN]/,/[oO]/,/[uU]/,/[nN]/,/[dD]/,/[oO]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_NOUNDO","symbols":["t_NOUNDO$subexpression$1"],"postprocess":upperId},{"name":"t_NORESTART$subexpression$1","symbols":[/[nN]/,/[oO]/,/[rR]/,/[eE]/,/[sS]/,/[tT]/,/[aA]/,/[rR]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_NORESTART","symbols":["t_NORESTART$subexpression$1"],"postprocess":upperId},{"name":"t_THROTTLE_MOVEMENT$subexpression$1","symbols":[/[tT]/,/[hH]/,/[rR]/,/[oO]/,/[tT]/,/[tT]/,/[lL]/,/[eE]/,{"literal":"_"},/[mM]/,/[oO]/,/[vV]/,/[eE]/,/[mM]/,/[eE]/,/[nN]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_THROTTLE_MOVEMENT","symbols":["t_THROTTLE_MOVEMENT$subexpression$1"],"postprocess":upperId},{"name":"t_NOREPEAT_ACTION$subexpression$1","symbols":[/[nN]/,/[oO]/,/[rR]/,/[eE]/,/[pP]/,/[eE]/,/[aA]/,/[tT]/,{"literal":"_"},/[aA]/,/[cC]/,/[tT]/,/[iI]/,/[oO]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_NOREPEAT_ACTION","symbols":["t_NOREPEAT_ACTION$subexpression$1"],"postprocess":upperId},{"name":"t_VERBOSE_LOGGING$subexpression$1","symbols":[/[vV]/,/[eE]/,/[rR]/,/[bB]/,/[oO]/,/[sS]/,/[eE]/,{"literal":"_"},/[lL]/,/[oO]/,/[gG]/,/[gG]/,/[iI]/,/[nN]/,/[gG]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_VERBOSE_LOGGING","symbols":["t_VERBOSE_LOGGING$subexpression$1"],"postprocess":upperId},{"name":"t_TRANSPARENT$subexpression$1","symbols":[/[tT]/,/[rR]/,/[aA]/,/[nN]/,/[sS]/,/[pP]/,/[aA]/,/[rR]/,/[eE]/,/[nN]/,/[tT]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_TRANSPARENT","symbols":["t_TRANSPARENT$subexpression$1"],"postprocess":upperId},{"name":"t_MOVE$subexpression$1","symbols":[/[mM]/,/[oO]/,/[vV]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_MOVE","symbols":["t_MOVE$subexpression$1"],"postprocess":upperId},{"name":"t_DESTROY$subexpression$1","symbols":[/[dD]/,/[eE]/,/[sS]/,/[tT]/,/[rR]/,/[oO]/,/[yY]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_DESTROY","symbols":["t_DESTROY$subexpression$1"],"postprocess":upperId},{"name":"t_CREATE$subexpression$1","symbols":[/[cC]/,/[rR]/,/[eE]/,/[aA]/,/[tT]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_CREATE","symbols":["t_CREATE$subexpression$1"],"postprocess":upperId},{"name":"t_CANTMOVE$subexpression$1","symbols":[/[cC]/,/[aA]/,/[nN]/,/[tT]/,/[mM]/,/[oO]/,/[vV]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_CANTMOVE","symbols":["t_CANTMOVE$subexpression$1"],"postprocess":upperId},{"name":"t_TITLESCREEN$subexpression$1","symbols":[/[tT]/,/[iI]/,/[tT]/,/[lL]/,/[eE]/,/[sS]/,/[cC]/,/[rR]/,/[eE]/,/[eE]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_TITLESCREEN","symbols":["t_TITLESCREEN$subexpression$1"],"postprocess":upperId},{"name":"t_STARTGAME$subexpression$1","symbols":[/[sS]/,/[tT]/,/[aA]/,/[rR]/,/[tT]/,/[gG]/,/[aA]/,/[mM]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_STARTGAME","symbols":["t_STARTGAME$subexpression$1"],"postprocess":upperId},{"name":"t_STARTLEVEL$subexpression$1","symbols":[/[sS]/,/[tT]/,/[aA]/,/[rR]/,/[tT]/,/[lL]/,/[eE]/,/[vV]/,/[eE]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_STARTLEVEL","symbols":["t_STARTLEVEL$subexpression$1"],"postprocess":upperId},{"name":"t_ENDLEVEL$subexpression$1","symbols":[/[eE]/,/[nN]/,/[dD]/,/[lL]/,/[eE]/,/[vV]/,/[eE]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ENDLEVEL","symbols":["t_ENDLEVEL$subexpression$1"],"postprocess":upperId},{"name":"t_ENDGAME$subexpression$1","symbols":[/[eE]/,/[nN]/,/[dD]/,/[gG]/,/[aA]/,/[mM]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ENDGAME","symbols":["t_ENDGAME$subexpression$1"],"postprocess":upperId},{"name":"t_SHOWMESSAGE$subexpression$1","symbols":[/[sS]/,/[hH]/,/[oO]/,/[wW]/,/[mM]/,/[eE]/,/[sS]/,/[sS]/,/[aA]/,/[gG]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SHOWMESSAGE","symbols":["t_SHOWMESSAGE$subexpression$1"],"postprocess":upperId},{"name":"t_CLOSEMESSAGE$subexpression$1","symbols":[/[cC]/,/[lL]/,/[oO]/,/[sS]/,/[eE]/,/[mM]/,/[eE]/,/[sS]/,/[sS]/,/[aA]/,/[gG]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_CLOSEMESSAGE","symbols":["t_CLOSEMESSAGE$subexpression$1"],"postprocess":upperId},{"name":"t_GROUP_RULE_PLUS$subexpression$1","symbols":[{"literal":"+"}],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_GROUP_RULE_PLUS","symbols":["t_GROUP_RULE_PLUS$subexpression$1"],"postprocess":upperId},{"name":"t_ON$subexpression$1","symbols":[/[oO]/,/[nN]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ON","symbols":["t_ON$subexpression$1"],"postprocess":upperId},{"name":"t_NO$subexpression$1","symbols":[/[nN]/,/[oO]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_NO","symbols":["t_NO$subexpression$1"],"postprocess":upperId},{"name":"t_ALL$subexpression$1","symbols":[/[aA]/,/[lL]/,/[lL]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ALL","symbols":["t_ALL$subexpression$1"],"postprocess":upperId},{"name":"t_ANY$subexpression$1","symbols":[/[aA]/,/[nN]/,/[yY]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_ANY","symbols":["t_ANY$subexpression$1"],"postprocess":upperId},{"name":"t_SOME$subexpression$1","symbols":[/[sS]/,/[oO]/,/[mM]/,/[eE]/],"postprocess":function postprocess(d){return d.join("");}},{"name":"t_SOME","symbols":["t_SOME$subexpression$1"],"postprocess":upperId},{"name":"Title","symbols":["t_TITLE","__","words"],"postprocess":function postprocess(_ref55,_sourceOffset){var _ref56=_slicedToArray(_ref55,3),_1=_ref56[0],_2=_ref56[1],value=_ref56[2];return{type:'TITLE',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaData$ebnf$1","symbols":[]},{"name":"OptionalMetaData$ebnf$1$subexpression$1$ebnf$1","symbols":["lineTerminator"]},{"name":"OptionalMetaData$ebnf$1$subexpression$1$ebnf$1","symbols":["OptionalMetaData$ebnf$1$subexpression$1$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"OptionalMetaData$ebnf$1$subexpression$1","symbols":["_","OptionalMetaDataItem","OptionalMetaData$ebnf$1$subexpression$1$ebnf$1"]},{"name":"OptionalMetaData$ebnf$1","symbols":["OptionalMetaData$ebnf$1","OptionalMetaData$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"OptionalMetaData","symbols":["OptionalMetaData$ebnf$1"],"postprocess":function postprocess(_ref57){var _ref58=_slicedToArray(_ref57,1),vals=_ref58[0];return{type:'METADATA',value:extractSecond(vals)};}},{"name":"OptionalMetaDataItem","symbols":["t_AUTHOR","__","words"],"postprocess":function postprocess(_ref59,_sourceOffset){var _ref60=_slicedToArray(_ref59,3),_1=_ref60[0],_2=_ref60[1],value=_ref60[2];return{type:'AUTHOR',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_HOMEPAGE","__","word"],"postprocess":function postprocess(_ref61,_sourceOffset){var _ref62=_slicedToArray(_ref61,3),_1=_ref62[0],_2=_ref62[1],value=_ref62[2];return{type:'HOMEPAGE',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_YOUTUBE","__","word"],"postprocess":function postprocess(_ref63,_sourceOffset){var _ref64=_slicedToArray(_ref63,3),_1=_ref64[0],_2=_ref64[1],value=_ref64[2];return{type:'YOUTUBE',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_ZOOMSCREEN","__","widthAndHeight"],"postprocess":function postprocess(_ref65,_sourceOffset){var _ref66=_slicedToArray(_ref65,3),_1=_ref66[0],_2=_ref66[1],value=_ref66[2];return{type:'ZOOMSCREEN',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_FLICKSCREEN","__","widthAndHeight"],"postprocess":function postprocess(_ref67,_sourceOffset){var _ref68=_slicedToArray(_ref67,3),_1=_ref68[0],_2=_ref68[1],value=_ref68[2];return{type:'FLICKSCREEN',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem$ebnf$1$subexpression$1$string$1","symbols":[{"literal":"o"},{"literal":"f"},{"literal":"f"}],"postprocess":function postprocess(d){return d.join('');}},{"name":"OptionalMetaDataItem$ebnf$1$subexpression$1","symbols":["__","OptionalMetaDataItem$ebnf$1$subexpression$1$string$1"]},{"name":"OptionalMetaDataItem$ebnf$1","symbols":["OptionalMetaDataItem$ebnf$1$subexpression$1"],"postprocess":id},{"name":"OptionalMetaDataItem$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"OptionalMetaDataItem","symbols":["t_REQUIRE_PLAYER_MOVEMENT","OptionalMetaDataItem$ebnf$1"],"postprocess":function postprocess(_ref69,_sourceOffset){var _ref70=_slicedToArray(_ref69,3),_1=_ref70[0],_2=_ref70[1],value=_ref70[2];return{type:'REQUIRE_PLAYER_MOVEMENT',value:!!value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem$ebnf$2$subexpression$1$string$1","symbols":[{"literal":"t"},{"literal":"r"},{"literal":"u"},{"literal":"e"}],"postprocess":function postprocess(d){return d.join('');}},{"name":"OptionalMetaDataItem$ebnf$2$subexpression$1","symbols":["__","OptionalMetaDataItem$ebnf$2$subexpression$1$string$1"]},{"name":"OptionalMetaDataItem$ebnf$2","symbols":["OptionalMetaDataItem$ebnf$2$subexpression$1"],"postprocess":id},{"name":"OptionalMetaDataItem$ebnf$2","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"OptionalMetaDataItem","symbols":["t_RUN_RULES_ON_LEVEL_START","OptionalMetaDataItem$ebnf$2"],"postprocess":function postprocess(_ref71,_sourceOffset){var _ref72=_slicedToArray(_ref71,3),_1=_ref72[0],_2=_ref72[1],value=_ref72[2];return{type:'RUN_RULES_ON_LEVEL_START',value:true,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_COLOR_PALETTE","__","word"],"postprocess":function postprocess(_ref73,_sourceOffset){var _ref74=_slicedToArray(_ref73,3),_1=_ref74[0],_2=_ref74[1],value=_ref74[2];return{type:'COLOR_PALETTE',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_BACKGROUND_COLOR","__","colorNameOrHex"],"postprocess":function postprocess(_ref75,_sourceOffset){var _ref76=_slicedToArray(_ref75,3),_1=_ref76[0],_2=_ref76[1],value=_ref76[2];return{type:'BACKGROUND_COLOR',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_TEXT_COLOR","__","colorNameOrHex"],"postprocess":function postprocess(_ref77,_sourceOffset){var _ref78=_slicedToArray(_ref77,3),_1=_ref78[0],_2=_ref78[1],value=_ref78[2];return{type:'TEXT_COLOR',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_REALTIME_INTERVAL","__","decimal"],"postprocess":function postprocess(_ref79,_sourceOffset){var _ref80=_slicedToArray(_ref79,3),_1=_ref80[0],_2=_ref80[1],value=_ref80[2];return{type:'REALTIME_INTERVAL',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_KEY_REPEAT_INTERVAL","__","decimal"],"postprocess":function postprocess(_ref81,_sourceOffset){var _ref82=_slicedToArray(_ref81,3),_1=_ref82[0],_2=_ref82[1],value=_ref82[2];return{type:'KEY_REPEAT_INTERVAL',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_AGAIN_INTERVAL","__","decimal"],"postprocess":function postprocess(_ref83,_sourceOffset){var _ref84=_slicedToArray(_ref83,3),_1=_ref84[0],_2=_ref84[1],value=_ref84[2];return{type:'AGAIN_INTERVAL',value:value,_sourceOffset:_sourceOffset};}},{"name":"OptionalMetaDataItem","symbols":["t_NOACTION"],"postprocess":function postprocess(){return{type:'NOACTION',value:true};}},{"name":"OptionalMetaDataItem","symbols":["t_NOUNDO"],"postprocess":function postprocess(){return{type:'NOUNDO',value:true};}},{"name":"OptionalMetaDataItem","symbols":["t_NOREPEAT_ACTION"],"postprocess":function postprocess(){return{type:'NOREPEAT_ACTION',value:true};}},{"name":"OptionalMetaDataItem","symbols":["t_THROTTLE_MOVEMENT"],"postprocess":function postprocess(){return{type:'THROTTLE_MOVEMENT',value:true};}},{"name":"OptionalMetaDataItem","symbols":["t_NORESTART"],"postprocess":function postprocess(){return{type:'NORESTART',value:true};}},{"name":"OptionalMetaDataItem","symbols":["t_VERBOSE_LOGGING"],"postprocess":function postprocess(){return{type:'VERBOSE_LOGGING',value:true};}},{"name":"widthAndHeight","symbols":["integer",{"literal":"x"},"integer"],"postprocess":function postprocess(_ref85){var _ref86=_slicedToArray(_ref85,3),width=_ref86[0],_1=_ref86[1],height=_ref86[2];return{type:'WIDTH_AND_HEIGHT',width:width,height:height};}},{"name":"Sprite","symbols":["SpritePixels"],"postprocess":id},{"name":"Sprite","symbols":["SpriteNoPixels"],"postprocess":id},{"name":"SpriteNoPixels$ebnf$1$subexpression$1","symbols":["__","legendShortcutChar"]},{"name":"SpriteNoPixels$ebnf$1","symbols":["SpriteNoPixels$ebnf$1$subexpression$1"],"postprocess":id},{"name":"SpriteNoPixels$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"SpriteNoPixels$ebnf$2","symbols":["lineTerminator"]},{"name":"SpriteNoPixels$ebnf$2","symbols":["SpriteNoPixels$ebnf$2","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"SpriteNoPixels$ebnf$3","symbols":["lineTerminator"]},{"name":"SpriteNoPixels$ebnf$3","symbols":["SpriteNoPixels$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"SpriteNoPixels","symbols":["_","spriteName","SpriteNoPixels$ebnf$1","SpriteNoPixels$ebnf$2","_","colorDefinitions","SpriteNoPixels$ebnf$3"],"postprocess":toDebug('SpriteNoPixels')||function(_ref87,_sourceOffset){var _ref88=_slicedToArray(_ref87,7),_0=_ref88[0],name=_ref88[1],mapCharOpt=_ref88[2],_2=_ref88[3],_3=_ref88[4],colors=_ref88[5],_5=_ref88[6];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SPRITE_TYPE"].NO_PIXELS,name:name,mapChar:mapCharOpt?mapCharOpt[1]:null,colors:colors,_sourceOffset:_sourceOffset};}},{"name":"SpritePixels$ebnf$1$subexpression$1","symbols":["__","legendShortcutChar"]},{"name":"SpritePixels$ebnf$1","symbols":["SpritePixels$ebnf$1$subexpression$1"],"postprocess":id},{"name":"SpritePixels$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"SpritePixels$ebnf$2","symbols":["lineTerminator"]},{"name":"SpritePixels$ebnf$2","symbols":["SpritePixels$ebnf$2","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"SpritePixels$ebnf$3","symbols":["lineTerminator"]},{"name":"SpritePixels$ebnf$3","symbols":["SpritePixels$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"SpritePixels$ebnf$4","symbols":[]},{"name":"SpritePixels$ebnf$4","symbols":["SpritePixels$ebnf$4","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"SpritePixels","symbols":["_","spriteName","SpritePixels$ebnf$1","SpritePixels$ebnf$2","_","colorDefinitions","SpritePixels$ebnf$3","PixelRows","SpritePixels$ebnf$4"],"postprocess":toDebug('SpritePixels')||function(_ref89,_sourceOffset){var _ref90=_slicedToArray(_ref89,9),_0=_ref90[0],name=_ref90[1],mapCharOpt=_ref90[2],_2=_ref90[3],_3=_ref90[4],colors=_ref90[5],_5=_ref90[6],pixels=_ref90[7],_7=_ref90[8];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SPRITE_TYPE"].WITH_PIXELS,name:name,mapChar:mapCharOpt?mapCharOpt[1]:null,colors:colors,pixels:pixels,_sourceOffset:_sourceOffset};}},{"name":"colorDefinitions$macrocall$2","symbols":["colorNameOrHex"]},{"name":"colorDefinitions$macrocall$3","symbols":["__"]},{"name":"colorDefinitions$macrocall$1$ebnf$1","symbols":[]},{"name":"colorDefinitions$macrocall$1$ebnf$1$subexpression$1","symbols":["colorDefinitions$macrocall$3","colorDefinitions$macrocall$2"]},{"name":"colorDefinitions$macrocall$1$ebnf$1","symbols":["colorDefinitions$macrocall$1$ebnf$1","colorDefinitions$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"colorDefinitions$macrocall$1","symbols":["colorDefinitions$macrocall$2","colorDefinitions$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"colorDefinitions","symbols":["colorDefinitions$macrocall$1"],"postprocess":function postprocess(_ref91){var _ref92=_slicedToArray(_ref91,1),a=_ref92[0];return extractFirst(a);}},{"name":"colorDefinitions$macrocall$5","symbols":["colorHex6"]},{"name":"colorDefinitions$macrocall$6","symbols":["__"]},{"name":"colorDefinitions$macrocall$4$ebnf$1","symbols":[]},{"name":"colorDefinitions$macrocall$4$ebnf$1$subexpression$1","symbols":["colorDefinitions$macrocall$6","colorDefinitions$macrocall$5"]},{"name":"colorDefinitions$macrocall$4$ebnf$1","symbols":["colorDefinitions$macrocall$4$ebnf$1","colorDefinitions$macrocall$4$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"colorDefinitions$macrocall$4","symbols":["colorDefinitions$macrocall$5","colorDefinitions$macrocall$4$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"colorDefinitions$macrocall$8","symbols":["colorHex6"]},{"name":"colorDefinitions$macrocall$9","symbols":["__"]},{"name":"colorDefinitions$macrocall$7$ebnf$1","symbols":[]},{"name":"colorDefinitions$macrocall$7$ebnf$1$subexpression$1","symbols":["colorDefinitions$macrocall$9","colorDefinitions$macrocall$8"]},{"name":"colorDefinitions$macrocall$7$ebnf$1","symbols":["colorDefinitions$macrocall$7$ebnf$1","colorDefinitions$macrocall$7$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"colorDefinitions$macrocall$7","symbols":["colorDefinitions$macrocall$8","colorDefinitions$macrocall$7$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"colorDefinitions","symbols":["colorDefinitions$macrocall$4","colorDefinitions$macrocall$7"],"postprocess":function postprocess(_ref93){var _ref94=_slicedToArray(_ref93,2),a=_ref94[0],b=_ref94[1];return extractFirst(a.concat(b));}},{"name":"spriteName","symbols":["ruleVariableName"],"postprocess":id},{"name":"pixelRow$ebnf$1","symbols":["pixelDigit"]},{"name":"pixelRow$ebnf$1","symbols":["pixelRow$ebnf$1","pixelDigit"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"pixelRow","symbols":["_","pixelRow$ebnf$1","lineTerminator"],"postprocess":toDebug('pixelRow',function(_ref95){var _ref96=_slicedToArray(_ref95,3),_0=_ref96[0],entries=_ref96[1],_2=_ref96[2];return{type:'PIXEL_ROW',entries:entries};})||function(_ref97){var _ref98=_slicedToArray(_ref97,3),_0=_ref98[0],entries=_ref98[1],_2=_ref98[2];return entries;}},{"name":"pixelDigit","symbols":["digit"],"postprocess":id},{"name":"pixelDigit","symbols":[{"literal":"."}],"postprocess":id},{"name":"legendShortcutChar","symbols":[/[^\n ]/],"postprocess":id},{"name":"PixelRows$ebnf$1","symbols":["pixelRow"]},{"name":"PixelRows$ebnf$1","symbols":["PixelRows$ebnf$1","pixelRow"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"PixelRows","symbols":["pixelRow","pixelRow","pixelRow","pixelRow","PixelRows$ebnf$1"],"postprocess":function postprocess(_ref99){var _ref100=_slicedToArray(_ref99,5),r1=_ref100[0],r2=_ref100[1],r3=_ref100[2],r4=_ref100[3],rest=_ref100[4];return[r1,r2,r3,r4].concat(rest);}},{"name":"LegendTile","symbols":["LegendTileSimple"],"postprocess":id},{"name":"LegendTile","symbols":["LegendTileAnd"],"postprocess":id},{"name":"LegendTile","symbols":["LegendTileOr"],"postprocess":id},{"name":"LegendTileSimple$ebnf$1","symbols":["lineTerminator"]},{"name":"LegendTileSimple$ebnf$1","symbols":["LegendTileSimple$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"LegendTileSimple","symbols":["_","LegendVarNameDefn","_",{"literal":"="},"_","LookupLegendVarName","LegendTileSimple$ebnf$1"],"postprocess":toDebug('LegendTileSimple')||function(_ref101,_sourceOffset){var _ref102=_slicedToArray(_ref101,8),_0=_ref102[0],name=_ref102[1],_2=_ref102[2],_3=_ref102[3],_4=_ref102[4],tile=_ref102[5],_6=_ref102[6],_7=_ref102[7];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["TILE_TYPE"].SIMPLE,name:name,tile:tile,_sourceOffset:_sourceOffset};}},{"name":"LegendTileAnd$macrocall$2","symbols":["LookupLegendVarName"]},{"name":"LegendTileAnd$macrocall$3","symbols":["__","t_AND","__"]},{"name":"LegendTileAnd$macrocall$1$ebnf$1$subexpression$1","symbols":["LegendTileAnd$macrocall$3","LegendTileAnd$macrocall$2"]},{"name":"LegendTileAnd$macrocall$1$ebnf$1","symbols":["LegendTileAnd$macrocall$1$ebnf$1$subexpression$1"]},{"name":"LegendTileAnd$macrocall$1$ebnf$1$subexpression$2","symbols":["LegendTileAnd$macrocall$3","LegendTileAnd$macrocall$2"]},{"name":"LegendTileAnd$macrocall$1$ebnf$1","symbols":["LegendTileAnd$macrocall$1$ebnf$1","LegendTileAnd$macrocall$1$ebnf$1$subexpression$2"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"LegendTileAnd$macrocall$1","symbols":["LegendTileAnd$macrocall$2","LegendTileAnd$macrocall$1$ebnf$1"],"postprocess":toDebug('atLeast2ListOf')||nonemptyListOf},{"name":"LegendTileAnd$ebnf$1","symbols":["lineTerminator"]},{"name":"LegendTileAnd$ebnf$1","symbols":["LegendTileAnd$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"LegendTileAnd","symbols":["_","LegendVarNameDefn","_",{"literal":"="},"_","LegendTileAnd$macrocall$1","LegendTileAnd$ebnf$1"],"postprocess":toDebug('LegendTileAnd')||function(_ref103,_sourceOffset){var _ref104=_slicedToArray(_ref103,8),_0=_ref104[0],name=_ref104[1],_2=_ref104[2],_3=_ref104[3],_4=_ref104[4],tiles=_ref104[5],_6=_ref104[6],_7=_ref104[7];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["TILE_TYPE"].AND,name:name,tiles:extractFirst(tiles),_sourceOffset:_sourceOffset};}},{"name":"LegendTileOr$macrocall$2","symbols":["LookupLegendVarName"]},{"name":"LegendTileOr$macrocall$3","symbols":["__","t_OR","__"]},{"name":"LegendTileOr$macrocall$1$ebnf$1$subexpression$1","symbols":["LegendTileOr$macrocall$3","LegendTileOr$macrocall$2"]},{"name":"LegendTileOr$macrocall$1$ebnf$1","symbols":["LegendTileOr$macrocall$1$ebnf$1$subexpression$1"]},{"name":"LegendTileOr$macrocall$1$ebnf$1$subexpression$2","symbols":["LegendTileOr$macrocall$3","LegendTileOr$macrocall$2"]},{"name":"LegendTileOr$macrocall$1$ebnf$1","symbols":["LegendTileOr$macrocall$1$ebnf$1","LegendTileOr$macrocall$1$ebnf$1$subexpression$2"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"LegendTileOr$macrocall$1","symbols":["LegendTileOr$macrocall$2","LegendTileOr$macrocall$1$ebnf$1"],"postprocess":toDebug('atLeast2ListOf')||nonemptyListOf},{"name":"LegendTileOr$ebnf$1","symbols":["lineTerminator"]},{"name":"LegendTileOr$ebnf$1","symbols":["LegendTileOr$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"LegendTileOr","symbols":["_","LegendVarNameDefn","_",{"literal":"="},"_","LegendTileOr$macrocall$1","LegendTileOr$ebnf$1"],"postprocess":toDebug('LegendTileOr')||function(_ref105,_sourceOffset){var _ref106=_slicedToArray(_ref105,8),_0=_ref106[0],name=_ref106[1],_2=_ref106[2],_3=_ref106[3],_4=_ref106[4],tiles=_ref106[5],_6=_ref106[6],_7=_ref106[7];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["TILE_TYPE"].OR,name:name,tiles:extractFirst(tiles),_sourceOffset:_sourceOffset};}},{"name":"LegendVarNameDefn","symbols":["word"],"postprocess":toDebug('LegendVarNameDefn')||id},{"name":"LookupLegendVarName","symbols":["LegendVarNameDefn"],"postprocess":toDebug('LookupLegendVarName')||id},{"name":"SoundItem$ebnf$1","symbols":["lineTerminator"]},{"name":"SoundItem$ebnf$1","symbols":["SoundItem$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"SoundItem","symbols":["_","SoundItemInner","SoundItem$ebnf$1"],"postprocess":function postprocess(_ref107){var _ref108=_slicedToArray(_ref107,3),_0=_ref108[0],sound=_ref108[1],_2=_ref108[2];return sound;}},{"name":"SoundItemInner","symbols":["SoundItemEnum"],"postprocess":id},{"name":"SoundItemInner","symbols":["SoundItemSfx"],"postprocess":id},{"name":"SoundItemInner","symbols":["SoundItemMoveDirection"],"postprocess":id},{"name":"SoundItemInner","symbols":["SoundItemMoveSimple"],"postprocess":id},{"name":"SoundItemInner","symbols":["SoundItemNormal"],"postprocess":id},{"name":"soundItemSimpleOptions","symbols":["t_RESTART"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_UNDO"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_TITLESCREEN"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_STARTGAME"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_STARTLEVEL"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_ENDLEVEL"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_ENDGAME"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_SHOWMESSAGE"],"postprocess":upperId},{"name":"soundItemSimpleOptions","symbols":["t_CLOSEMESSAGE"],"postprocess":upperId},{"name":"SoundItemEnum","symbols":["soundItemSimpleOptions","__","integer"],"postprocess":function postprocess(_ref109,_sourceOffset){var _ref110=_slicedToArray(_ref109,3),when=_ref110[0],_1=_ref110[1],soundCode=_ref110[2];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SOUND_TYPE"].WHEN,when:when,soundCode:soundCode,_sourceOffset:_sourceOffset};}},{"name":"SoundItemSfx","symbols":["t_SFX","__","integer"],"postprocess":function postprocess(_ref111,_sourceOffset){var _ref112=_slicedToArray(_ref111,3),soundEffect=_ref112[0],_1=_ref112[1],soundCode=_ref112[2];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SOUND_TYPE"].SFX,soundEffect:soundEffect,soundCode:soundCode,_sourceOffset:_sourceOffset};}},{"name":"SoundItemMoveDirection","symbols":["lookupRuleVariableName","__","t_MOVE","__","soundItemActionMoveArg","__","integer"],"postprocess":function postprocess(_ref113,_sourceOffset){var _ref114=_slicedToArray(_ref113,7),sprite=_ref114[0],_1=_ref114[1],_2=_ref114[2],_3=_ref114[3],direction=_ref114[4],_5=_ref114[5],soundCode=_ref114[6];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SOUND_TYPE"].SPRITE_DIRECTION,sprite:sprite,direction:direction,soundCode:soundCode,_sourceOffset:_sourceOffset};}},{"name":"SoundItemMoveSimple","symbols":["lookupRuleVariableName","__","t_MOVE","__","integer"],"postprocess":function postprocess(_ref115,_sourceOffset){var _ref116=_slicedToArray(_ref115,5),sprite=_ref116[0],_1=_ref116[1],_2=_ref116[2],_3=_ref116[3],soundCode=_ref116[4];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SOUND_TYPE"].SPRITE_MOVE,sprite:sprite,soundCode:soundCode,_sourceOffset:_sourceOffset};}},{"name":"SoundItemNormal","symbols":["lookupRuleVariableName","__","SoundItemAction","__","integer"],"postprocess":function postprocess(_ref117,_sourceOffset){var _ref118=_slicedToArray(_ref117,5),sprite=_ref118[0],_1=_ref118[1],eventEnum=_ref118[2],_3=_ref118[3],soundCode=_ref118[4];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["SOUND_TYPE"].SPRITE_EVENT,sprite:sprite,eventEnum:eventEnum,soundCode:soundCode,_sourceOffset:_sourceOffset};}},{"name":"SoundItemAction","symbols":["t_CREATE"],"postprocess":upperId},{"name":"SoundItemAction","symbols":["t_DESTROY"],"postprocess":upperId},{"name":"SoundItemAction","symbols":["t_CANTMOVE"],"postprocess":upperId},{"name":"soundItemActionMoveArg","symbols":["t_UP"],"postprocess":upperId},{"name":"soundItemActionMoveArg","symbols":["t_DOWN"],"postprocess":upperId},{"name":"soundItemActionMoveArg","symbols":["t_LEFT"],"postprocess":upperId},{"name":"soundItemActionMoveArg","symbols":["t_RIGHT"],"postprocess":upperId},{"name":"soundItemActionMoveArg","symbols":["t_HORIZONTAL"],"postprocess":upperId},{"name":"soundItemActionMoveArg","symbols":["t_VERTICAL"],"postprocess":upperId},{"name":"CollisionLayerItem$macrocall$2","symbols":["lookupCollisionVariableName"]},{"name":"CollisionLayerItem$macrocall$3$subexpression$1","symbols":["_",{"literal":","},"_"]},{"name":"CollisionLayerItem$macrocall$3$subexpression$1","symbols":["__"]},{"name":"CollisionLayerItem$macrocall$3","symbols":["CollisionLayerItem$macrocall$3$subexpression$1"]},{"name":"CollisionLayerItem$macrocall$1$ebnf$1","symbols":[]},{"name":"CollisionLayerItem$macrocall$1$ebnf$1$subexpression$1","symbols":["CollisionLayerItem$macrocall$3","CollisionLayerItem$macrocall$2"]},{"name":"CollisionLayerItem$macrocall$1$ebnf$1","symbols":["CollisionLayerItem$macrocall$1$ebnf$1","CollisionLayerItem$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"CollisionLayerItem$macrocall$1","symbols":["CollisionLayerItem$macrocall$2","CollisionLayerItem$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"CollisionLayerItem$ebnf$1","symbols":[{"literal":","}],"postprocess":id},{"name":"CollisionLayerItem$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"CollisionLayerItem$ebnf$2","symbols":["lineTerminator"]},{"name":"CollisionLayerItem$ebnf$2","symbols":["CollisionLayerItem$ebnf$2","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"CollisionLayerItem","symbols":["_","CollisionLayerItem$macrocall$1","CollisionLayerItem$ebnf$1","CollisionLayerItem$ebnf$2"],"postprocess":toDebug('CollisionLayerItem')||function(_ref119,_sourceOffset){var _ref120=_slicedToArray(_ref119,3),_0=_ref120[0],spriteNames=_ref120[1],_2=_ref120[2];return{type:'COLLISION_LAYER',tiles:extractFirst(spriteNames),_sourceOffset:_sourceOffset};}},{"name":"RuleItem","symbols":["RuleLoop"],"postprocess":id},{"name":"RuleItem","symbols":["RuleGroup"],"postprocess":id},{"name":"RuleItem","symbols":["Rule"],"postprocess":id},{"name":"Rule","symbols":["RuleWithoutMessage"],"postprocess":id},{"name":"Rule","symbols":["RuleWithMessage"],"postprocess":id},{"name":"RuleWithoutMessage$macrocall$2","symbols":["ConditionBracket"]},{"name":"RuleWithoutMessage$macrocall$3$ebnf$1$subexpression$1","symbols":["RuleModifier","_"]},{"name":"RuleWithoutMessage$macrocall$3$ebnf$1","symbols":["RuleWithoutMessage$macrocall$3$ebnf$1$subexpression$1"],"postprocess":id},{"name":"RuleWithoutMessage$macrocall$3$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"RuleWithoutMessage$macrocall$3","symbols":["_","RuleWithoutMessage$macrocall$3$ebnf$1"]},{"name":"RuleWithoutMessage$macrocall$1$ebnf$1","symbols":[]},{"name":"RuleWithoutMessage$macrocall$1$ebnf$1$subexpression$1","symbols":["RuleWithoutMessage$macrocall$3","RuleWithoutMessage$macrocall$2"]},{"name":"RuleWithoutMessage$macrocall$1$ebnf$1","symbols":["RuleWithoutMessage$macrocall$1$ebnf$1","RuleWithoutMessage$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithoutMessage$macrocall$1","symbols":["RuleWithoutMessage$macrocall$2","RuleWithoutMessage$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"RuleWithoutMessage$string$1","symbols":[{"literal":"-"},{"literal":">"}],"postprocess":function postprocess(d){return d.join('');}},{"name":"RuleWithoutMessage$ebnf$1","symbols":[]},{"name":"RuleWithoutMessage$ebnf$1$subexpression$1","symbols":["ActionBracket"]},{"name":"RuleWithoutMessage$ebnf$1","symbols":["RuleWithoutMessage$ebnf$1","RuleWithoutMessage$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithoutMessage$ebnf$2","symbols":[]},{"name":"RuleWithoutMessage$ebnf$2$subexpression$1","symbols":["_","RuleCommand"]},{"name":"RuleWithoutMessage$ebnf$2","symbols":["RuleWithoutMessage$ebnf$2","RuleWithoutMessage$ebnf$2$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithoutMessage$ebnf$3","symbols":["lineTerminator"]},{"name":"RuleWithoutMessage$ebnf$3","symbols":["RuleWithoutMessage$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithoutMessage","symbols":["_","LeftModifiers","RuleWithoutMessage$macrocall$1","_","RuleWithoutMessage$string$1","RuleWithoutMessage$ebnf$1","RuleWithoutMessage$ebnf$2","RuleWithoutMessage$ebnf$3"],"postprocess":toDebug('RuleWithoutMessage')||function(_ref121,_sourceOffset){var _ref122=_slicedToArray(_ref121,8),_0=_ref122[0],modifiers=_ref122[1],conditionBrackets=_ref122[2],_2=_ref122[3],_3=_ref122[4],actionBrackets=_ref122[5],commands=_ref122[6],_6=_ref122[7];var directions=modifiers.filter(function(m){return['RANDOM','LATE','RIGID'].indexOf(m)<0;});var isRandom=modifiers.indexOf('RANDOM')>=0;var isLate=modifiers.indexOf('LATE')>=0;var isRigid=modifiers.indexOf('RIGID')>=0;return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["RULE_TYPE"].SIMPLE,directions:directions,isRandom:isRandom,isLate:isLate,isRigid:isRigid,conditions:extractFirst(conditionBrackets),actions:extractFirst(actionBrackets),commands:extractSecond(commands),_sourceOffset:_sourceOffset};}},{"name":"RuleWithMessage$macrocall$2","symbols":["ConditionBracket"]},{"name":"RuleWithMessage$macrocall$3$ebnf$1$subexpression$1","symbols":["RuleModifier","_"]},{"name":"RuleWithMessage$macrocall$3$ebnf$1","symbols":["RuleWithMessage$macrocall$3$ebnf$1$subexpression$1"],"postprocess":id},{"name":"RuleWithMessage$macrocall$3$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"RuleWithMessage$macrocall$3","symbols":["_","RuleWithMessage$macrocall$3$ebnf$1"]},{"name":"RuleWithMessage$macrocall$1$ebnf$1","symbols":[]},{"name":"RuleWithMessage$macrocall$1$ebnf$1$subexpression$1","symbols":["RuleWithMessage$macrocall$3","RuleWithMessage$macrocall$2"]},{"name":"RuleWithMessage$macrocall$1$ebnf$1","symbols":["RuleWithMessage$macrocall$1$ebnf$1","RuleWithMessage$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithMessage$macrocall$1","symbols":["RuleWithMessage$macrocall$2","RuleWithMessage$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"RuleWithMessage$string$1","symbols":[{"literal":"-"},{"literal":">"}],"postprocess":function postprocess(d){return d.join('');}},{"name":"RuleWithMessage$ebnf$1","symbols":[]},{"name":"RuleWithMessage$ebnf$1$subexpression$1","symbols":["ActionBracket"]},{"name":"RuleWithMessage$ebnf$1","symbols":["RuleWithMessage$ebnf$1","RuleWithMessage$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithMessage$ebnf$2","symbols":[]},{"name":"RuleWithMessage$ebnf$2$subexpression$1","symbols":["_","RuleCommand"]},{"name":"RuleWithMessage$ebnf$2","symbols":["RuleWithMessage$ebnf$2","RuleWithMessage$ebnf$2$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithMessage$ebnf$3","symbols":[]},{"name":"RuleWithMessage$ebnf$3","symbols":["RuleWithMessage$ebnf$3","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleWithMessage","symbols":["_","LeftModifiers","RuleWithMessage$macrocall$1","_","RuleWithMessage$string$1","RuleWithMessage$ebnf$1","RuleWithMessage$ebnf$2","_","MessageCommand","RuleWithMessage$ebnf$3"],"postprocess":toDebug('RuleWithoutMessage')||function(_ref123,_sourceOffset){var _ref124=_slicedToArray(_ref123,10),_0=_ref124[0],modifiers=_ref124[1],conditionBrackets=_ref124[2],_2=_ref124[3],_3=_ref124[4],actionBrackets=_ref124[5],commands=_ref124[6],_6=_ref124[7],message=_ref124[8],_7=_ref124[9];var directions=modifiers.filter(function(m){return['RANDOM','LATE','RIGID'].indexOf(m)<0;});var isRandom=modifiers.indexOf('RANDOM')>=0;var isLate=modifiers.indexOf('LATE')>=0;var isRigid=modifiers.indexOf('RIGID')>=0;var cmds=extractSecond(commands);if(message){cmds.push(message);}return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["RULE_TYPE"].SIMPLE,directions:directions,isRandom:isRandom,isLate:isLate,isRigid:isRigid,conditions:extractFirst(conditionBrackets),actions:extractFirst(actionBrackets),commands:cmds,_sourceOffset:_sourceOffset};}},{"name":"ConditionBracket","symbols":["NormalRuleBracket"],"postprocess":function postprocess(_ref125,_sourceOffset){var _ref126=_slicedToArray(_ref125,1),_ref126$=_ref126[0],neighbors=_ref126$.neighbors,againHack=_ref126$.againHack,debugFlag=_ref126$.debugFlag;return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["BRACKET_TYPE"].SIMPLE,neighbors:neighbors,againHack:againHack,debugFlag:debugFlag,_sourceOffset:_sourceOffset};}},{"name":"ConditionBracket","symbols":["EllipsisRuleBracket"],"postprocess":function postprocess(_ref127,_sourceOffset){var _ref128=_slicedToArray(_ref127,1),_ref128$=_ref128[0],beforeNeighbors=_ref128$.beforeNeighbors,afterNeighbors=_ref128$.afterNeighbors,debugFlag=_ref128$.debugFlag;return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["BRACKET_TYPE"].ELLIPSIS,beforeNeighbors:beforeNeighbors,afterNeighbors:afterNeighbors,debugFlag:debugFlag,_sourceOffset:_sourceOffset};}},{"name":"ActionBracket$ebnf$1","symbols":[]},{"name":"ActionBracket$ebnf$1$subexpression$1","symbols":["_","RuleModifier"]},{"name":"ActionBracket$ebnf$1","symbols":["ActionBracket$ebnf$1","ActionBracket$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"ActionBracket","symbols":["ActionBracket$ebnf$1","_","NormalRuleBracket"],"postprocess":function postprocess(_ref129,_sourceOffset){var _ref130=_slicedToArray(_ref129,3),modifiers=_ref130[0],_1=_ref130[1],_ref130$=_ref130[2],neighbors=_ref130$.neighbors,againHack=_ref130$.againHack,debugFlag=_ref130$.debugFlag;return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["BRACKET_TYPE"].SIMPLE,neighbors:neighbors,againHack:againHack,debugFlag:debugFlag,_sourceOffset:_sourceOffset};}},{"name":"ActionBracket$ebnf$2","symbols":[]},{"name":"ActionBracket$ebnf$2$subexpression$1","symbols":["_","RuleModifier"]},{"name":"ActionBracket$ebnf$2","symbols":["ActionBracket$ebnf$2","ActionBracket$ebnf$2$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"ActionBracket","symbols":["ActionBracket$ebnf$2","_","EllipsisRuleBracket"],"postprocess":function postprocess(_ref131,_sourceOffset){var _ref132=_slicedToArray(_ref131,3),modifiers=_ref132[0],_1=_ref132[1],_ref132$=_ref132[2],beforeNeighbors=_ref132$.beforeNeighbors,afterNeighbors=_ref132$.afterNeighbors,debugFlag=_ref132$.debugFlag;return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["BRACKET_TYPE"].ELLIPSIS,beforeNeighbors:beforeNeighbors,afterNeighbors:afterNeighbors,debugFlag:debugFlag,_sourceOffset:_sourceOffset};}},{"name":"LeftModifiers$macrocall$2","symbols":["RuleModifierLeft"]},{"name":"LeftModifiers$macrocall$3","symbols":["__"]},{"name":"LeftModifiers$macrocall$1$ebnf$1","symbols":[]},{"name":"LeftModifiers$macrocall$1$ebnf$1$subexpression$1","symbols":["LeftModifiers$macrocall$3","LeftModifiers$macrocall$2"]},{"name":"LeftModifiers$macrocall$1$ebnf$1","symbols":["LeftModifiers$macrocall$1$ebnf$1","LeftModifiers$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"LeftModifiers$macrocall$1","symbols":["LeftModifiers$macrocall$2","LeftModifiers$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"LeftModifiers","symbols":["LeftModifiers$macrocall$1","_"],"postprocess":function postprocess(_ref133){var _ref134=_slicedToArray(_ref133,1),a=_ref134[0];return extractFirst(a);}},{"name":"LeftModifiers","symbols":[],"postprocess":function postprocess(){return[];}/* No modifiers */},{"name":"RuleBracket","symbols":["EllipsisRuleBracket"],"postprocess":id},{"name":"RuleBracket","symbols":["NormalRuleBracket"],"postprocess":id},{"name":"NormalRuleBracket$macrocall$2","symbols":["RuleBracketNeighbor"]},{"name":"NormalRuleBracket$macrocall$3","symbols":[{"literal":"|"}]},{"name":"NormalRuleBracket$macrocall$1$ebnf$1","symbols":[]},{"name":"NormalRuleBracket$macrocall$1$ebnf$1$subexpression$1","symbols":["NormalRuleBracket$macrocall$3","NormalRuleBracket$macrocall$2"]},{"name":"NormalRuleBracket$macrocall$1$ebnf$1","symbols":["NormalRuleBracket$macrocall$1$ebnf$1","NormalRuleBracket$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"NormalRuleBracket$macrocall$1","symbols":["NormalRuleBracket$macrocall$2","NormalRuleBracket$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"NormalRuleBracket$ebnf$1$subexpression$1","symbols":["t_AGAIN","_"]},{"name":"NormalRuleBracket$ebnf$1","symbols":["NormalRuleBracket$ebnf$1$subexpression$1"],"postprocess":id},{"name":"NormalRuleBracket$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"NormalRuleBracket$ebnf$2$subexpression$1","symbols":["_","t_DEBUGGER"]},{"name":"NormalRuleBracket$ebnf$2","symbols":["NormalRuleBracket$ebnf$2$subexpression$1"],"postprocess":id},{"name":"NormalRuleBracket$ebnf$2","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"NormalRuleBracket","symbols":[{"literal":"["},"NormalRuleBracket$macrocall$1","NormalRuleBracket$ebnf$1",{"literal":"]"},"NormalRuleBracket$ebnf$2"],"postprocess":toDebug('NormalRuleBracket')||function(_ref135,_sourceOffset){var _ref136=_slicedToArray(_ref135,5),_0=_ref136[0],neighbors=_ref136[1],againHack=_ref136[2],_3=_ref136[3],debugFlag=_ref136[4];return{type:'_INNER_BRACKET',neighbors:extractFirst(neighbors),againHack:againHack?true:false,debugFlag:debugFlag?debugFlag[1]:null,_sourceOffset:_sourceOffset};}},{"name":"EllipsisRuleBracket$macrocall$2","symbols":["RuleBracketNeighbor"]},{"name":"EllipsisRuleBracket$macrocall$3","symbols":[{"literal":"|"}]},{"name":"EllipsisRuleBracket$macrocall$1$ebnf$1","symbols":[]},{"name":"EllipsisRuleBracket$macrocall$1$ebnf$1$subexpression$1","symbols":["EllipsisRuleBracket$macrocall$3","EllipsisRuleBracket$macrocall$2"]},{"name":"EllipsisRuleBracket$macrocall$1$ebnf$1","symbols":["EllipsisRuleBracket$macrocall$1$ebnf$1","EllipsisRuleBracket$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"EllipsisRuleBracket$macrocall$1","symbols":["EllipsisRuleBracket$macrocall$2","EllipsisRuleBracket$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"EllipsisRuleBracket$macrocall$5","symbols":["RuleBracketNeighbor"]},{"name":"EllipsisRuleBracket$macrocall$6","symbols":[{"literal":"|"}]},{"name":"EllipsisRuleBracket$macrocall$4$ebnf$1","symbols":[]},{"name":"EllipsisRuleBracket$macrocall$4$ebnf$1$subexpression$1","symbols":["EllipsisRuleBracket$macrocall$6","EllipsisRuleBracket$macrocall$5"]},{"name":"EllipsisRuleBracket$macrocall$4$ebnf$1","symbols":["EllipsisRuleBracket$macrocall$4$ebnf$1","EllipsisRuleBracket$macrocall$4$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"EllipsisRuleBracket$macrocall$4","symbols":["EllipsisRuleBracket$macrocall$5","EllipsisRuleBracket$macrocall$4$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"EllipsisRuleBracket$ebnf$1$subexpression$1","symbols":["_","t_DEBUGGER"]},{"name":"EllipsisRuleBracket$ebnf$1","symbols":["EllipsisRuleBracket$ebnf$1$subexpression$1"],"postprocess":id},{"name":"EllipsisRuleBracket$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"EllipsisRuleBracket","symbols":[{"literal":"["},"EllipsisRuleBracket$macrocall$1",{"literal":"|"},"_","t_ELLIPSIS","_",{"literal":"|"},"EllipsisRuleBracket$macrocall$4",{"literal":"]"},"EllipsisRuleBracket$ebnf$1"],"postprocess":toDebug('EllipsisRuleBracket')||function(_ref137,_sourceOffset){var _ref138=_slicedToArray(_ref137,10),_0=_ref138[0],beforeNeighbors=_ref138[1],_2=_ref138[2],_3=_ref138[3],_4=_ref138[4],_5=_ref138[5],_6=_ref138[6],afterNeighbors=_ref138[7],_8=_ref138[8],debugFlag=_ref138[9];return{type:'_INNER_ELLIPSIS_BRACKET',beforeNeighbors:extractFirst(beforeNeighbors),afterNeighbors:extractFirst(afterNeighbors),debugFlag:debugFlag?debugFlag[1]:null,_sourceOffset:_sourceOffset};}},{"name":"RuleBracketNeighbor","symbols":["RuleBracketNoEllipsisNeighbor"],"postprocess":id},{"name":"RuleBracketNeighbor","symbols":["RuleBracketEmptyNeighbor"],"postprocess":id},{"name":"RuleBracketNoEllipsisNeighbor$macrocall$2","symbols":["TileWithModifier"]},{"name":"RuleBracketNoEllipsisNeighbor$macrocall$3","symbols":["__"]},{"name":"RuleBracketNoEllipsisNeighbor$macrocall$1$ebnf$1","symbols":[]},{"name":"RuleBracketNoEllipsisNeighbor$macrocall$1$ebnf$1$subexpression$1","symbols":["RuleBracketNoEllipsisNeighbor$macrocall$3","RuleBracketNoEllipsisNeighbor$macrocall$2"]},{"name":"RuleBracketNoEllipsisNeighbor$macrocall$1$ebnf$1","symbols":["RuleBracketNoEllipsisNeighbor$macrocall$1$ebnf$1","RuleBracketNoEllipsisNeighbor$macrocall$1$ebnf$1$subexpression$1"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleBracketNoEllipsisNeighbor$macrocall$1","symbols":["RuleBracketNoEllipsisNeighbor$macrocall$2","RuleBracketNoEllipsisNeighbor$macrocall$1$ebnf$1"],"postprocess":toDebug('nonemptyListOf')||nonemptyListOf},{"name":"RuleBracketNoEllipsisNeighbor$ebnf$1$subexpression$1","symbols":["_","t_DEBUGGER"]},{"name":"RuleBracketNoEllipsisNeighbor$ebnf$1","symbols":["RuleBracketNoEllipsisNeighbor$ebnf$1$subexpression$1"],"postprocess":id},{"name":"RuleBracketNoEllipsisNeighbor$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"RuleBracketNoEllipsisNeighbor","symbols":["_","RuleBracketNoEllipsisNeighbor$macrocall$1","RuleBracketNoEllipsisNeighbor$ebnf$1","_"],"postprocess":toDebug('RuleBracketNoEllipsisNeighbor')||function(_ref139,_sourceOffset){var _ref140=_slicedToArray(_ref139,4),_0=_ref140[0],tileWithModifiers=_ref140[1],debugFlag=_ref140[2],_3=_ref140[3];return{type:'NEIGHBOR',tileWithModifiers:extractFirst(tileWithModifiers),debugFlag:debugFlag?debugFlag[1]:null,_sourceOffset:_sourceOffset};}},{"name":"RuleBracketEmptyNeighbor","symbols":["_"],"postprocess":toDebug('RuleBracketEmptyNeighbor')||function(_ref141,_sourceOffset){var _ref142=_slicedToArray(_ref141,1),_0=_ref142[0];return{type:'NEIGHBOR',tileWithModifiers:[],_sourceOffset:_sourceOffset};}},{"name":"TileWithModifier$ebnf$1$subexpression$1","symbols":["tileModifier","__"]},{"name":"TileWithModifier$ebnf$1","symbols":["TileWithModifier$ebnf$1$subexpression$1"],"postprocess":id},{"name":"TileWithModifier$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"TileWithModifier","symbols":["TileWithModifier$ebnf$1","lookupRuleVariableName"],"postprocess":toDebug('TileWithModifier')||function(_ref143,_sourceOffset){var _ref144=_slicedToArray(_ref143,2),modifier=_ref144[0],tile=_ref144[1];var mod=modifier?modifier[0]:null;var direction;var isNegated=false;var isRandom=false;switch(mod){case'NO':isNegated=true;break;case'RANDOM':isRandom=true;break;default:direction=mod;}return{type:'TILE_WITH_MODIFIER',direction:direction,isNegated:isNegated,isRandom:isRandom,tile:tile,_sourceOffset:_sourceOffset};}},{"name":"tileModifier","symbols":["t_NO"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_LEFT"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_RIGHT"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_UP"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_DOWN"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_RANDOMDIR"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_RANDOM"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_STATIONARY"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_MOVING"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_ACTION"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_VERTICAL"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_HORIZONTAL"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_PERPENDICULAR"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_PARALLEL"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_ORTHOGONAL"],"postprocess":upperId},{"name":"tileModifier","symbols":["t_ARROW_ANY"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_RANDOM"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_UP"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_DOWN"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_LEFT"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_RIGHT"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_VERTICAL"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_HORIZONTAL"],"postprocess":upperId},{"name":"RuleModifier","symbols":["t_ORTHOGONAL"],"postprocess":upperId},{"name":"RuleModifierLeft","symbols":["RuleModifier"],"postprocess":id},{"name":"RuleModifierLeft","symbols":["t_LATE"],"postprocess":upperId},{"name":"RuleModifierLeft","symbols":["t_RIGID"],"postprocess":upperId},{"name":"RuleCommand","symbols":["t_AGAIN"],"postprocess":function postprocess(_0,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].AGAIN,_sourceOffset:_sourceOffset};}},{"name":"RuleCommand","symbols":["t_CANCEL"],"postprocess":function postprocess(_0,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].CANCEL,_sourceOffset:_sourceOffset};}},{"name":"RuleCommand","symbols":["t_CHECKPOINT"],"postprocess":function postprocess(_0,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].CHECKPOINT,_sourceOffset:_sourceOffset};}},{"name":"RuleCommand","symbols":["t_RESTART"],"postprocess":function postprocess(_0,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].RESTART,_sourceOffset:_sourceOffset};}},{"name":"RuleCommand","symbols":["t_WIN"],"postprocess":function postprocess(_0,_sourceOffset){return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].WIN,_sourceOffset:_sourceOffset};}},{"name":"RuleCommand","symbols":["t_SFX"],"postprocess":function postprocess(_ref145,_sourceOffset){var _ref146=_slicedToArray(_ref145,1),sound=_ref146[0];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].SFX,sound:sound,_sourceOffset:_sourceOffset};}},{"name":"MessageCommand","symbols":["t_MESSAGE","messageLine"],"postprocess":function postprocess(_ref147,_sourceOffset){var _ref148=_slicedToArray(_ref147,2),_1=_ref148[0],message=_ref148[1];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["COMMAND_TYPE"].MESSAGE,message:message,_sourceOffset:_sourceOffset};}},{"name":"RuleLoop$ebnf$1$subexpression$1","symbols":["_","t_DEBUGGER"]},{"name":"RuleLoop$ebnf$1","symbols":["RuleLoop$ebnf$1$subexpression$1"],"postprocess":id},{"name":"RuleLoop$ebnf$1","symbols":[],"postprocess":function postprocess(){return null;}},{"name":"RuleLoop$ebnf$2","symbols":["lineTerminator"]},{"name":"RuleLoop$ebnf$2","symbols":["RuleLoop$ebnf$2","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleLoop$ebnf$3$subexpression$1","symbols":["RuleItem"]},{"name":"RuleLoop$ebnf$3","symbols":["RuleLoop$ebnf$3$subexpression$1"]},{"name":"RuleLoop$ebnf$3$subexpression$2","symbols":["RuleItem"]},{"name":"RuleLoop$ebnf$3","symbols":["RuleLoop$ebnf$3","RuleLoop$ebnf$3$subexpression$2"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleLoop$ebnf$4","symbols":["lineTerminator"]},{"name":"RuleLoop$ebnf$4","symbols":["RuleLoop$ebnf$4","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleLoop","symbols":["RuleLoop$ebnf$1","_","t_STARTLOOP","RuleLoop$ebnf$2","RuleLoop$ebnf$3","_","t_ENDLOOP","RuleLoop$ebnf$4"],"postprocess":function postprocess(_ref149){var _ref150=_slicedToArray(_ref149,8),_0=_ref150[0],_1=_ref150[1],_2=_ref150[2],_3=_ref150[3],rules=_ref150[4],_4=_ref150[5],_5=_ref150[6],_6=_ref150[7];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["RULE_TYPE"].LOOP,rules:extractFirst(rules)};}},{"name":"RuleGroup$ebnf$1$subexpression$1","symbols":["_","t_GROUP_RULE_PLUS","Rule"]},{"name":"RuleGroup$ebnf$1","symbols":["RuleGroup$ebnf$1$subexpression$1"]},{"name":"RuleGroup$ebnf$1$subexpression$2","symbols":["_","t_GROUP_RULE_PLUS","Rule"]},{"name":"RuleGroup$ebnf$1","symbols":["RuleGroup$ebnf$1","RuleGroup$ebnf$1$subexpression$2"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"RuleGroup","symbols":["Rule","RuleGroup$ebnf$1"],"postprocess":function postprocess(_ref151,_sourceOffset){var _ref152=_slicedToArray(_ref151,2),firstRule=_ref152[0],otherRules=_ref152[1];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["RULE_TYPE"].GROUP,rules:[firstRule].concat(extractThird(otherRules)),_sourceOffset:_sourceOffset};}},{"name":"WinConditionItem$ebnf$1","symbols":["lineTerminator"]},{"name":"WinConditionItem$ebnf$1","symbols":["WinConditionItem$ebnf$1","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"WinConditionItem","symbols":["_","winConditionItemPrefix","__","lookupRuleVariableName","WinConditionItem$ebnf$1"],"postprocess":toDebug('WinConditionItem')||function(_ref153,_sourceOffset){var _ref154=_slicedToArray(_ref153,5),_0=_ref154[0],qualifier=_ref154[1],_1=_ref154[2],tile=_ref154[3],_2=_ref154[4];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["WIN_CONDITION_TYPE"].SIMPLE,qualifier:qualifier,tile:tile,_sourceOffset:_sourceOffset};}},{"name":"WinConditionItem$ebnf$2","symbols":["lineTerminator"]},{"name":"WinConditionItem$ebnf$2","symbols":["WinConditionItem$ebnf$2","lineTerminator"],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"WinConditionItem","symbols":["_","winConditionItemPrefix","__","lookupRuleVariableName","__","t_ON","__","lookupRuleVariableName","WinConditionItem$ebnf$2"],"postprocess":toDebug('WinConditionItem')||function(_ref155,_sourceOffset){var _ref156=_slicedToArray(_ref155,9),_0=_ref156[0],qualifier=_ref156[1],_1=_ref156[2],tile=_ref156[3],_2=_ref156[4],_3=_ref156[5],_4=_ref156[6],onTile=_ref156[7],_5=_ref156[8];return{type:_astTypes__WEBPACK_IMPORTED_MODULE_0__["WIN_CONDITION_TYPE"].ON,qualifier:qualifier,tile:tile,onTile:onTile,_sourceOffset:_sourceOffset};}},{"name":"winConditionItemPrefix","symbols":["t_NO"],"postprocess":id},{"name":"winConditionItemPrefix","symbols":["t_ALL"],"postprocess":id},{"name":"winConditionItemPrefix","symbols":["t_ANY"],"postprocess":id},{"name":"winConditionItemPrefix","symbols":["t_SOME"],"postprocess":id},{"name":"LevelItem","symbols":["GameMessageLevel"],"postprocess":id},{"name":"LevelItem","symbols":["levelMapRow"],"postprocess":id},{"name":"LevelItem","symbols":["SeparatorLine"],"postprocess":id},{"name":"GameMessageLevel","symbols":["_","t_MESSAGE","messageLine"],"postprocess":function postprocess(_ref157,_sourceOffset){var _ref158=_slicedToArray(_ref157,3),_0=_ref158[0],_1=_ref158[1],message=_ref158[2];return{type:'LEVEL_MESSAGE',message:message,_sourceOffset:_sourceOffset};}},{"name":"messageLine$ebnf$1","symbols":[]},{"name":"messageLine$ebnf$1","symbols":["messageLine$ebnf$1",/[^\n]/],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"messageLine","symbols":["messageLine$ebnf$1",/[\n]/],"postprocess":toDebug('messageLine')||function(_ref159){var _ref160=_slicedToArray(_ref159,2),message=_ref160[0],_2=_ref160[1];return message.join('').trim();}},{"name":"levelMapRow$ebnf$1","symbols":[/[^\n \t\(]/]},{"name":"levelMapRow$ebnf$1","symbols":["levelMapRow$ebnf$1",/[^\n \t\(]/],"postprocess":function postprocess(d){return d[0].concat([d[1]]);}},{"name":"levelMapRow","symbols":["_","levelMapRow$ebnf$1","lineTerminator"],"postprocess":function postprocess(_ref161,_sourceOffset,reject){var _ref162=_slicedToArray(_ref161,2),_0=_ref162[0],cols=_ref162[1];var str=cols.join('');if(str.toUpperCase().startsWith('MESSAGE')){return reject;}else{return{type:'LEVEL_ROW',cells:cols.map(function(_ref163){var _ref164=_slicedToArray(_ref163,1),char=_ref164[0];return char[0];}),_sourceOffset:_sourceOffset};}}},{"name":"SeparatorLine","symbols":["lineTerminator"],"postprocess":function postprocess(_0,_sourceOffset){return{type:'LEVEL_SEPARATOR',_sourceOffset:_sourceOffset};}}];var ParserStart="main";

/***/ }),

/***/ "./src/parser/parser.ts":
/*!******************************!*\
  !*** ./src/parser/parser.ts ***!
  \******************************/
/*! exports provided: ValidationLevel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationLevel", function() { return ValidationLevel; });
/* harmony import */ var nearley__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nearley */ "./node_modules/nearley/lib/nearley.js");
/* harmony import */ var nearley__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nearley__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _astBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./astBuilder */ "./src/parser/astBuilder.ts");
/* harmony import */ var _grammar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grammar */ "./src/parser/grammar.ts");
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}var ValidationLevel;(function(ValidationLevel){ValidationLevel[ValidationLevel["ERROR"]=0]="ERROR";ValidationLevel[ValidationLevel["WARNING"]=1]="WARNING";ValidationLevel[ValidationLevel["INFO"]=2]="INFO";})(ValidationLevel||(ValidationLevel={}));var Parser=/*#__PURE__*/function(){function Parser(){_classCallCheck(this,Parser);this.grammar=nearley__WEBPACK_IMPORTED_MODULE_0__["Grammar"].fromCompiled(_grammar__WEBPACK_IMPORTED_MODULE_2__);}_createClass(Parser,[{key:"parseToAST",value:function parseToAST(code){var parser=new nearley__WEBPACK_IMPORTED_MODULE_0__["Parser"](this.grammar);parser.feed(code);parser.feed('\n');parser.finish();var results=parser.results;if(results.length===1){return results[0];}else if(results.length===0){throw new Error("ERROR: Could not parse");}else{throw new Error("AMBIGUOUS: has ".concat(results.length," results"));}}},{key:"parse",value:function parse(code){var node=this.parseToAST(code);var builder=new _astBuilder__WEBPACK_IMPORTED_MODULE_1__["AstBuilder"](code);var gameData=builder.build(node);return{data:gameData};}}]);return Parser;}();/* harmony default export */ __webpack_exports__["default"] = (new Parser());

/***/ }),

/***/ "./src/parser/serializer.ts":
/*!**********************************!*\
  !*** ./src/parser/serializer.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Serializer; });
/* harmony import */ var _models_collisionLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/collisionLayer */ "./src/models/collisionLayer.ts");
/* harmony import */ var _models_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/colors */ "./src/models/colors.ts");
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/game */ "./src/models/game.ts");
/* harmony import */ var _models_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/metadata */ "./src/models/metadata.ts");
/* harmony import */ var _models_rule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/rule */ "./src/models/rule.ts");
/* harmony import */ var _models_tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/tile */ "./src/models/tile.ts");
/* harmony import */ var _models_winCondition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/winCondition */ "./src/models/winCondition.ts");
/* harmony import */ var _astTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./astTypes */ "./src/parser/astTypes.ts");
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}// const EXAMPLE = {
//     metadata: { author: 'Phil' },
//     colors: {
//         123: '#cc99cc'
//     },
//     sounds: {
//         12: { /* ... */ }
//     },
//     collisionLayers: [
//         0, 1, 2
//     ],
//     commands: {
//         901: { type: 'MESSAGE', message: 'hello world'}
//     },
//     sprites: {
//         234: { name, pixels: [[123, 123]], collisionLayer: 0, sounds: {} }
//     },
//     tiles: {
//         345: { type: 'OR', sprites: [234, 234, 234], collisionLayer: 0}
//     },
//     tilesWithModifiers: {
//         456: { direction: 'UP', negation: false, tile: 345}
//     },
//     neighbors: {
//         567: { tilesWithModifiers: [456, 456]}
//     },
//     conditions: {
//         678: { type: 'NORMAL', direction: 'UP', neighbors: [567]}
// //        6789: { type: 'ELLIPSIS', direction: 'UP', beforeNeighbors: [567], afterNeighbors: [567]}
//     },
//     actionMutations: {
//         abc: {
//             bcd: {type: 'SET', wantsToMove: 'UP', tileOrSprite: 234 },
//             cde: {type: 'REMOVE', tileOrSprite: 345}
//         }
//     },
//     ellipsisBrackets: {
//         6789: { type: 'ELLIPSIS', direction: 'UP', beforeCondition: 678, afterCondition: 678}
//     },
//     bracketPairs: {
//         def: { condition: 678, actionMutations: ['abc']}
//     },
//     simpleRules: {
//         789: { type: 'SIMPLE', bracketPairs: [
//             {conditionBracket: 678, actionMutations: ['bcd']},
//             {conditionBracket: 6789, actionMutations: ['bcd', 'cde'], commands: [890]}
//         ]}
//     },
//     clusteredRules: { // maybe we should make groups and loops separate ()
//         890: { type: 'GROUP', rules: [789, 789, 789, 789]},
//         8901: { type: 'LOOP', rules: [7890, 7890, 7890]}
//     },
//     orderedRules: [
//         890, 8901
//     ],
//     levels: [
//         {type: 'MESSAGE', message: 'hello world'},
//         {type: 'MAP', mapTilesOrSprites: [[345, 234], [345, 345]]}
//     ]
// }
var TILE_TYPE;(function(TILE_TYPE){TILE_TYPE["OR"]="OR";TILE_TYPE["AND"]="AND";TILE_TYPE["SIMPLE"]="SIMPLE";TILE_TYPE["SPRITE"]="SPRITE";})(TILE_TYPE||(TILE_TYPE={}));function toRULE_DIRECTION(dir){return dir;}var MapWithId=/*#__PURE__*/function(){function MapWithId(prefix){_classCallCheck(this,MapWithId);this.counter=0;this.prefix=prefix;this.idMap=new Map();this.jsonMap=new Map();}_createClass(MapWithId,[{key:"set",value:function set(key,value,id){if(!this.idMap.has(key)){this.idMap.set(key,id||this.freshId());}this.jsonMap.set(key,value);return this.getId(key);}},{key:"get",value:function get(key){var value=this.jsonMap.get(key);if(!value){debugger;throw new Error("BUG: Element has not been added to the set");// tslint:disable-line:no-debugger
}return value;}},{key:"getId",value:function getId(key){var value=this.idMap.get(key);if(!value){debugger;throw new Error("BUG: Element has not been added to the set");// tslint:disable-line:no-debugger
}return value;}},{key:"toJson",value:function toJson(){var ret={};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=this.idMap[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var _step$value=_slicedToArray(_step.value,2),obj=_step$value[0],id=_step$value[1];var json=this.jsonMap.get(obj);if(!json){debugger;throw new Error("BUG: Could not find matching json representation for \"".concat(id,"\""));// tslint:disable-line:no-debugger
}ret[id]=json;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return ret;}},{key:"freshId",value:function freshId(){return"".concat(this.prefix,"-").concat(this.counter++);}}]);return MapWithId;}();var DefiniteMap=/*#__PURE__*/function(){function DefiniteMap(){_classCallCheck(this,DefiniteMap);this.map=new Map();}_createClass(DefiniteMap,[{key:"get",value:function get(key){var v=this.map.get(key);if(!v){throw new Error("ERROR: JSON is missing key \"".concat(key,"\". Should have already been added"));}return v;}},{key:"set",value:function set(k,v){this.map.set(k,v);}},{key:"values",value:function values(){return this.map.values();}}]);return DefiniteMap;}();var Serializer=/*#__PURE__*/function(){_createClass(Serializer,null,[{key:"fromJson",value:function fromJson(source,code){// First, build up all of the lookup maps
var colorMap=new DefiniteMap();var spritesMap=new DefiniteMap();var soundMap=new DefiniteMap();var collisionLayerMap=new DefiniteMap();var bracketMap=new DefiniteMap();var neighborsMap=new DefiniteMap();var tileWithModifierMap=new DefiniteMap();var tileMap=new DefiniteMap();var ruleMap=new DefiniteMap();var commandMap=new DefiniteMap();var _arr2=Object.entries(source.colors);for(var _i2=0;_i2<_arr2.length;_i2++){var _arr2$_i=_slicedToArray(_arr2[_i2],2),_key=_arr2$_i[0],val=_arr2$_i[1];colorMap.set(_key,new _models_colors__WEBPACK_IMPORTED_MODULE_1__["HexColor"]({code:code,sourceOffset:0},val));}var layers=new DefiniteMap();var _arr3=Object.entries(source.collisionLayers);for(var _i3=0;_i3<_arr3.length;_i3++){var _arr3$_i=_slicedToArray(_arr3[_i3],1),_key2=_arr3$_i[0];layers.set(_key2,[]);}var transparent=new _models_colors__WEBPACK_IMPORTED_MODULE_1__["TransparentColor"]({code:code,sourceOffset:0});var spriteIndex=0;var _arr4=Object.entries(source.sprites);for(var _i4=0;_i4<_arr4.length;_i4++){var _arr4$_i=_slicedToArray(_arr4[_i4],2),_key3=_arr4$_i[0],val=_arr4$_i[1];var sourceOffset=val._sourceOffset,_name=val.name,_pixels=val.pixels;var _sprite=new _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameSpritePixels"]({code:code,sourceOffset:sourceOffset},_name,null,_pixels.map(function(row){return row.map(function(color){if(color){return colorMap.get(color)||transparent;}else{return transparent;}});}));// assign an index to each GameSprite
_sprite.allSpritesBitSetIndex=spriteIndex;spriteIndex++;spritesMap.set(_key3,_sprite);layers.get(val.collisionLayer).push(_sprite);}var _arr5=Object.entries(source.tiles);for(var _i5=0;_i5<_arr5.length;_i5++){var _arr5$_i=_slicedToArray(_arr5[_i5],2),_key4=_arr5$_i[0],val=_arr5$_i[1];var sourceOffset=val._sourceOffset;var tile=void 0;switch(val.type){case'OR':tile=new _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileOr"]({code:code,sourceOffset:sourceOffset},val.name,val.sprites.map(function(item){return spritesMap.get(item);}));break;case'AND':tile=new _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileAnd"]({code:code,sourceOffset:sourceOffset},val.name,val.sprites.map(function(item){return spritesMap.get(item);}));break;case'SIMPLE':tile=new _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileSimple"]({code:code,sourceOffset:sourceOffset},val.name,spritesMap.get(val.sprite));break;case'SPRITE':tile=new _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileSimple"]({code:code,sourceOffset:sourceOffset},val.name,spritesMap.get(val.sprite));break;default:throw new Error("ERROR: Unsupported tile type");}tileMap.set(_key4,tile);// layers.get(val.collisionLayer).push(tile)
}var _arr6=Object.entries(source.sounds);for(var _i6=0;_i6<_arr6.length;_i6++){var _arr6$_i=_slicedToArray(_arr6[_i6],2),_key5=_arr6$_i[0],val=_arr6$_i[1];switch(val.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SFX:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].WHEN:soundMap.set(_key5,_objectSpread({},val));break;case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SPRITE_DIRECTION:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SPRITE_EVENT:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SPRITE_MOVE:soundMap.set(_key5,_objectSpread({},val,{sprite:tileMap.get(val.sprite)}));break;}}var _arr7=Object.entries(source.commands);for(var _i7=0;_i7<_arr7.length;_i7++){var _arr7$_i=_slicedToArray(_arr7[_i7],2),_key6=_arr7$_i[0],val=_arr7$_i[1];switch(val.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].MESSAGE:commandMap.set(_key6,val);break;case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].SFX:commandMap.set(_key6,_objectSpread({},val,{sound:soundMap.get(val.sound)}));break;case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].RESTART:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].AGAIN:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].CANCEL:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].CHECKPOINT:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].WIN:commandMap.set(_key6,val);break;default:throw new Error("ERROR: Unsupported command type");}}var _arr8=Object.entries(source.collisionLayers);for(var _i8=0;_i8<_arr8.length;_i8++){var _arr8$_i=_slicedToArray(_arr8[_i8],2),_key7=_arr8$_i[0],val=_arr8$_i[1];var sourceOffset=val._sourceOffset;collisionLayerMap.set(_key7,new _models_collisionLayer__WEBPACK_IMPORTED_MODULE_0__["CollisionLayer"]({code:code,sourceOffset:sourceOffset},layers.get(_key7)));}var _arr9=Object.entries(source.tilesWithModifiers);for(var _i9=0;_i9<_arr9.length;_i9++){var _arr9$_i=_slicedToArray(_arr9[_i9],2),_key8=_arr9$_i[0],val=_arr9$_i[1];var sourceOffset=val._sourceOffset;tileWithModifierMap.set(_key8,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleTileWithModifier"]({code:code,sourceOffset:sourceOffset},val.isNegated,val.isRandom,val.direction,tileMap.get(val.tile),val.debugFlag));}var _arr10=Object.entries(source.neighbors);for(var _i10=0;_i10<_arr10.length;_i10++){var _arr10$_i=_slicedToArray(_arr10[_i10],2),_key9=_arr10$_i[0],val=_arr10$_i[1];var sourceOffset=val._sourceOffset;neighborsMap.set(_key9,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleNeighbor"]({code:code,sourceOffset:sourceOffset},new Set(val.tileWithModifiers.map(function(item){return tileWithModifierMap.get(item);})),val.debugFlag));}var _arr11=Object.entries(source.brackets);for(var _i11=0;_i11<_arr11.length;_i11++){var _arr11$_i=_slicedToArray(_arr11[_i11],2),_key10=_arr11$_i[0],val=_arr11$_i[1];var sourceOffset=val._sourceOffset;switch(val.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["BRACKET_TYPE"].SIMPLE:bracketMap.set(_key10,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleBracket"]({code:code,sourceOffset:sourceOffset},val.direction,val.neighbors.map(function(item){return neighborsMap.get(item);}),val.debugFlag));break;case _astTypes__WEBPACK_IMPORTED_MODULE_7__["BRACKET_TYPE"].ELLIPSIS:bracketMap.set(_key10,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleEllipsisBracket"]({code:code,sourceOffset:sourceOffset},val.direction,val.beforeNeighbors.map(function(item){return neighborsMap.get(item);}),val.afterNeighbors.map(function(item){return neighborsMap.get(item);}),val.debugFlag));break;default:throw new Error("ERROR: Unsupported bracket type");}}var _arr12=Object.entries(source.ruleDefinitions);for(var _i12=0;_i12<_arr12.length;_i12++){var _arr12$_i=_slicedToArray(_arr12[_i12],2),_key11=_arr12$_i[0],val=_arr12$_i[1];var sourceOffset=val._sourceOffset;switch(val.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["RULE_TYPE"].SIMPLE:ruleMap.set(_key11,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleRule"]({code:code,sourceOffset:sourceOffset},val.conditions.map(function(item){return bracketMap.get(item);}),val.actions.map(function(item){return bracketMap.get(item);}),val.commands.map(function(item){return commandMap.get(item);}),val.isLate,val.isRigid,val.debugFlag));break;case _astTypes__WEBPACK_IMPORTED_MODULE_7__["RULE_TYPE"].GROUP:ruleMap.set(_key11,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleRuleGroup"]({code:code,sourceOffset:sourceOffset},val.isRandom,val.rules.map(function(item){return ruleMap.get(item);})));break;case _astTypes__WEBPACK_IMPORTED_MODULE_7__["RULE_TYPE"].LOOP:ruleMap.set(_key11,new _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleRuleLoop"]({code:code,sourceOffset:sourceOffset},false/*TODO: Figure out if loops need isRandom*/,val.rules.map(function(item){return ruleMap.get(item);})));break;default:throw new Error("ERROR: Unsupported rule type");}}var levels=source.levels.map(function(item){switch(item.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["LEVEL_TYPE"].MAP:return _objectSpread({},item,{cells:item.cells.map(function(row){return row.map(function(tile){return tileMap.get(tile);});})});case _astTypes__WEBPACK_IMPORTED_MODULE_7__["LEVEL_TYPE"].MESSAGE:return item;default:throw new Error("ERROR: Invalid level type");}});var winConditions=source.winConditions.map(function(item){var sourceOffset=item._sourceOffset;switch(item.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["WIN_CONDITION_TYPE"].SIMPLE:return new _models_winCondition__WEBPACK_IMPORTED_MODULE_6__["WinConditionSimple"]({code:code,sourceOffset:sourceOffset},item.qualifier,tileMap.get(item.tile));case _astTypes__WEBPACK_IMPORTED_MODULE_7__["WIN_CONDITION_TYPE"].ON:return new _models_winCondition__WEBPACK_IMPORTED_MODULE_6__["WinConditionOn"]({code:code,sourceOffset:sourceOffset},item.qualifier,tileMap.get(item.tile),tileMap.get(item.onTile));default:throw new Error("ERROR: Unsupported Win Condition type");}});var metadata=new _models_metadata__WEBPACK_IMPORTED_MODULE_3__["GameMetadata"]();var _arr13=Object.entries(source.metadata);for(var _i13=0;_i13<_arr13.length;_i13++){var _arr13$_i=_slicedToArray(_arr13[_i13],2),_key12=_arr13$_i[0],val=_arr13$_i[1];if(val){switch(_key12){case'backgroundColor':case'textColor':metadata._setValue(_key12,colorMap.get(val));break;case'zoomScreen':case'flickScreen':var width=val.width,height=val.height;metadata._setValue(_key12,new _models_metadata__WEBPACK_IMPORTED_MODULE_3__["Dimension"](width,height));break;default:metadata._setValue(_key12,val);}}}return new _models_game__WEBPACK_IMPORTED_MODULE_2__["GameData"]({code:code,sourceOffset:0},source.title,metadata,_toConsumableArray(spritesMap.values()),_toConsumableArray(tileMap.values()),_toConsumableArray(soundMap.values()),_toConsumableArray(collisionLayerMap.values()),source.rules.map(function(item){return ruleMap.get(item);}),winConditions,levels);}}]);function Serializer(game){var _this=this;_classCallCheck(this,Serializer);this.game=game;this.colorsMap=new Map();this.spritesMap=new MapWithId('sprite');this.soundMap=new MapWithId('sound');this.collisionLayerMap=new MapWithId('collision');this.conditionsMap=new MapWithId('bracket');this.neighborsMap=new MapWithId('neighbor');this.tileWithModifierMap=new MapWithId('twm');this.tileMap=new MapWithId('tile');this.ruleMap=new MapWithId('rule');this.commandMap=new MapWithId('command');if(this.game.metadata.backgroundColor){var hex=this.game.metadata.backgroundColor.toHex();this.colorsMap.set(hex,hex);}if(this.game.metadata.textColor){var _hex=this.game.metadata.textColor.toHex();this.colorsMap.set(_hex,_hex);}// Load up the colors and sprites
this.game.collisionLayers.forEach(function(item){return _this.buildCollisionLayer(item);});this.game.sounds.forEach(function(item){_this.buildSound(item);});this.game.objects.forEach(function(sprite){_this.buildSprite(sprite);});this.orderedRules=this.game.rules.map(function(item){return _this.recBuildRule(item);});this.game.legends.forEach(function(tile){_this.buildTile(tile);});this.levels=this.game.levels.map(function(item){return _this.buildLevel(item);});this.winConditions=this.game.winConditions.map(function(item){if(item instanceof _models_winCondition__WEBPACK_IMPORTED_MODULE_6__["WinConditionOn"]){var ret={_sourceOffset:item.__source.sourceOffset,type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["WIN_CONDITION_TYPE"].ON,qualifier:item.qualifier,tile:_this.buildTile(item.tile),onTile:_this.buildTile(item.onTile)};return ret;}else{var _ret={_sourceOffset:item.__source.sourceOffset,type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["WIN_CONDITION_TYPE"].SIMPLE,qualifier:item.qualifier,tile:_this.buildTile(item.tile)};return _ret;}});}_createClass(Serializer,[{key:"buildCollisionLayer",value:function buildCollisionLayer(item){return this.collisionLayerMap.set(item,{_sourceOffset:item.__source.sourceOffset});}},{key:"metadataToJson",value:function metadataToJson(){return{author:this.game.metadata.author,homepage:this.game.metadata.homepage,youtube:this.game.metadata.youtube,zoomscreen:this.game.metadata.zoomscreen,flickscreen:this.game.metadata.flickscreen,colorPalette:this.game.metadata.colorPalette,backgroundColor:this.game.metadata.backgroundColor?this.buildColor(this.game.metadata.backgroundColor):null,textColor:this.game.metadata.textColor?this.buildColor(this.game.metadata.textColor):null,realtimeInterval:this.game.metadata.realtimeInterval,keyRepeatInterval:this.game.metadata.keyRepeatInterval,againInterval:this.game.metadata.againInterval,noAction:this.game.metadata.noAction,noUndo:this.game.metadata.noUndo,runRulesOnLevelStart:this.game.metadata.runRulesOnLevelStart,noRepeatAction:this.game.metadata.noRepeatAction,throttleMovement:this.game.metadata.throttleMovement,noRestart:this.game.metadata.noRestart,requirePlayerMovement:this.game.metadata.requirePlayerMovement,verboseLogging:this.game.metadata.verboseLogging};}},{key:"toJson",value:function toJson(){var colors={};var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=this.colorsMap[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var _step2$value=_slicedToArray(_step2.value,2),_key13=_step2$value[0],value=_step2$value[1];colors[_key13]=value;}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return{version:1,title:this.game.title,metadata:this.metadataToJson(),colors:colors,sounds:this.soundMap.toJson(),collisionLayers:this.collisionLayerMap.toJson(),commands:this.commandMap.toJson(),sprites:this.spritesMap.toJson(),tiles:this.tileMap.toJson(),tilesWithModifiers:this.tileWithModifierMap.toJson(),neighbors:this.neighborsMap.toJson(),brackets:this.conditionsMap.toJson(),ruleDefinitions:this.ruleMap.toJson(),winConditions:this.winConditions,rules:this.orderedRules,levels:this.levels};}},{key:"buildLevel",value:function buildLevel(level){var _this2=this;switch(level.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["LEVEL_TYPE"].MAP:return _objectSpread({},level,{cells:level.cells.map(function(row){return row.map(function(cell){return _this2.buildTile(cell);});})});case _astTypes__WEBPACK_IMPORTED_MODULE_7__["LEVEL_TYPE"].MESSAGE:return level;default:debugger;throw new Error("BUG: Unsupported level subtype");// tslint:disable-line:no-debugger
}}},{key:"recBuildRule",value:function recBuildRule(rule){var _this3=this;if(rule instanceof _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleRule"]){return this.ruleMap.set(rule,{type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["RULE_TYPE"].SIMPLE,directions:[],// Simplified rules do not have directions
conditions:rule.conditionBrackets.map(function(item){return _this3.buildConditionBracket(item);}),actions:rule.actionBrackets.map(function(item){return _this3.buildConditionBracket(item);}),commands:rule.commands.map(function(item){return _this3.buildCommand(item);}),isRandom:null,isLate:rule.isLate(),isRigid:rule.hasRigid(),_sourceOffset:rule.__source.sourceOffset,debugFlag:rule.debugFlag});}else if(rule instanceof _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleRuleGroup"]){return this.ruleMap.set(rule,{type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["RULE_TYPE"].GROUP,isRandom:rule.isRandom,rules:rule.getChildRules().map(function(item){return _this3.recBuildRule(item);}),_sourceOffset:rule.__source.sourceOffset,debugFlag:null// TODO: Unhardcode me
});}else if(rule instanceof _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleRuleLoop"]){var x={type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["RULE_TYPE"].LOOP,// isRandom: rule.isRandom,
rules:rule.getChildRules().map(function(item){return _this3.recBuildRule(item);}),_sourceOffset:rule.__source.sourceOffset,debugFlag:null// TODO: unhardcode me
};return this.ruleMap.set(rule,x);}else{debugger;throw new Error("BUG: Unsupported rule type");// tslint:disable-line:no-debugger
}}},{key:"buildCommand",value:function buildCommand(command){switch(command.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].SFX:return this.commandMap.set(command,_objectSpread({},command,{sound:this.soundMap.getId(command.sound)}));case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].AGAIN:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].CANCEL:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].CHECKPOINT:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].MESSAGE:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].RESTART:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["COMMAND_TYPE"].WIN:return this.commandMap.set(command,command);default:debugger;throw new Error("BUG: Unsupoprted command type");// tslint:disable-line:no-debugger
}}},{key:"buildConditionBracket",value:function buildConditionBracket(bracket){var _this4=this;if(bracket instanceof _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleEllipsisBracket"]){var b=bracket;var before=b.beforeEllipsisBracket.getNeighbors().map(function(item){return _this4.buildNeighbor(item);});// this.buildConditionBracket(b.beforeEllipsisBracket)
var after=b.afterEllipsisBracket.getNeighbors().map(function(item){return _this4.buildNeighbor(item);});// this.buildConditionBracket(b.afterEllipsisBracket)
return this.conditionsMap.set(bracket,{type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["BRACKET_TYPE"].ELLIPSIS,direction:toRULE_DIRECTION(b.direction),beforeNeighbors:before,afterNeighbors:after,_sourceOffset:bracket.__source.sourceOffset,debugFlag:b.debugFlag});}else if(bracket instanceof _models_rule__WEBPACK_IMPORTED_MODULE_4__["SimpleBracket"]){return this.conditionsMap.set(bracket,{type:_astTypes__WEBPACK_IMPORTED_MODULE_7__["BRACKET_TYPE"].SIMPLE,direction:toRULE_DIRECTION(bracket.direction),neighbors:bracket.getNeighbors().map(function(item){return _this4.buildNeighbor(item);}),_sourceOffset:bracket.__source.sourceOffset,debugFlag:bracket.debugFlag});}else{debugger;throw new Error("BUG: Unsupported bracket type");// tslint:disable-line:no-debugger
}}},{key:"buildNeighbor",value:function buildNeighbor(neighbor){var _this5=this;return this.neighborsMap.set(neighbor,{tileWithModifiers:_toConsumableArray(neighbor._tilesWithModifier).map(function(item){return _this5.buildTileWithModifier(item);}),_sourceOffset:neighbor.__source.sourceOffset,debugFlag:null// TODO: Pull it out of the neighbor
});}},{key:"buildTileWithModifier",value:function buildTileWithModifier(t){return this.tileWithModifierMap.set(t,{direction:t._direction?toRULE_DIRECTION(t._direction):null,isNegated:t._isNegated,isRandom:t._isRandom,tile:this.buildTile(t._tile),_sourceOffset:t.__source.sourceOffset,debugFlag:t._debugFlag});}},{key:"buildTile",value:function buildTile(tile){var _this6=this;if(tile instanceof _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileOr"]){return this.tileMap.set(tile,{type:TILE_TYPE.OR,name:tile.getName(),sprites:tile.getSprites().map(function(item){return _this6.buildSprite(item);}),collisionLayers:tile.getCollisionLayers().map(function(item){return _this6.buildCollisionLayer(item);}),_sourceOffset:tile.__source.sourceOffset});}else if(tile instanceof _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileAnd"]){return this.tileMap.set(tile,{type:TILE_TYPE.AND,name:tile.getName(),sprites:tile.getSprites().map(function(item){return _this6.buildSprite(item);}),collisionLayers:tile.getCollisionLayers().map(function(item){return _this6.buildCollisionLayer(item);}),_sourceOffset:tile.__source.sourceOffset});}else if(tile instanceof _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameLegendTileSimple"]){return this.tileMap.set(tile,{type:TILE_TYPE.SIMPLE,name:tile.getName(),sprite:this.buildSprite(tile.getSprites()[0]),collisionLayers:tile.getCollisionLayers().map(function(item){return _this6.buildCollisionLayer(item);}),_sourceOffset:tile.__source.sourceOffset});}else if(tile instanceof _models_tile__WEBPACK_IMPORTED_MODULE_5__["GameSprite"]){return this.tileMap.set(tile,{type:TILE_TYPE.SPRITE,name:tile.getName(),sprite:this.buildSprite(tile),collisionLayer:this.buildCollisionLayer(tile.getCollisionLayer()),_sourceOffset:tile.__source.sourceOffset});}else{debugger;throw new Error("BUG: Invalid tile type");// tslint:disable-line:no-debugger
}}},{key:"buildSprite",value:function buildSprite(sprite){var _this7=this;var _this$game$getSpriteS=this.game.getSpriteSize(),spriteHeight=_this$game$getSpriteS.spriteHeight,spriteWidth=_this$game$getSpriteS.spriteWidth;return this.spritesMap.set(sprite,{name:sprite.getName(),collisionLayer:this.collisionLayerMap.getId(sprite.getCollisionLayer()),pixels:sprite.getPixels(spriteHeight,spriteWidth).map(function(row){return row.map(function(pixel){if(pixel.isTransparent()){return null;}else{return _this7.buildColor(pixel);}});}),_sourceOffset:sprite.__source.sourceOffset});}},{key:"buildColor",value:function buildColor(color){var hex=color.toHex();this.colorsMap.set(hex,hex);return hex;}},{key:"buildSound",value:function buildSound(sound){switch(sound.type){case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SFX:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].WHEN:return this.soundMap.set(sound,_objectSpread({},sound));case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SPRITE_DIRECTION:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SPRITE_EVENT:case _astTypes__WEBPACK_IMPORTED_MODULE_7__["SOUND_TYPE"].SPRITE_MOVE:return this.soundMap.set(sound,_objectSpread({},sound,{sprite:this.buildTile(sound.sprite)}));}}}]);return Serializer;}();

/***/ }),

/***/ "./src/spriteBitSet.ts":
/*!*****************************!*\
  !*** ./src/spriteBitSet.ts ***!
  \*****************************/
/*! exports provided: SpriteBitSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteBitSet", function() { return SpriteBitSet; });
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}// BitSet does not export a default so import does not work in webpack-built file
var BitSet2=__webpack_require__(/*! bitset */ "./node_modules/bitset/bitset.js");// tslint:disable-line:no-var-requires
var CustomBitSet=/*#__PURE__*/function(){function CustomBitSet(items,bitSet){_classCallCheck(this,CustomBitSet);if(bitSet){this.bitSet=bitSet;}else{this.bitSet=new BitSet2();}if(items){this.addAll(items);}}// Unused
// public clear() {
//     this.bitSet.clear()
// }
_createClass(CustomBitSet,[{key:"isEmpty",value:function isEmpty(){return this.bitSet.isEmpty();}},{key:"addAll",value:function addAll(items){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=items[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var sprite=_step.value;this.add(sprite);}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}}// Unused
// public removeAll(items: Iterable<T>) {
//     for (const sprite of items) {
//         this.remove(sprite)
//     }
// }
},{key:"add",value:function add(item){this.bitSet.set(this._indexOf(item));}},{key:"remove",value:function remove(item){this.bitSet.clear(this._indexOf(item));}},{key:"has",value:function has(item){return!!this.bitSet.get(this._indexOf(item));}},{key:"containsAll",value:function containsAll(other){return other.bitSet.cardinality()===this.bitSet.and(other.bitSet).cardinality();}},{key:"containsAny",value:function containsAny(other){return!this.bitSet.and(other.bitSet).isEmpty();}},{key:"containsNone",value:function containsNone(other){return other.bitSet.and(this.bitSet).isEmpty();}},{key:"_indexOf",value:function _indexOf(item){var index=this.indexOf(item);if(index<0){throw new Error("BUG: Expected the item index to be >= 0 but it was ".concat(index));}return index;}}]);return CustomBitSet;}();var SpriteBitSet=/*#__PURE__*/function(_CustomBitSet){_inherits(SpriteBitSet,_CustomBitSet);function SpriteBitSet(){_classCallCheck(this,SpriteBitSet);return _possibleConstructorReturn(this,_getPrototypeOf(SpriteBitSet).apply(this,arguments));}_createClass(SpriteBitSet,[{key:"indexOf",value:function indexOf(item){return item.allSpritesBitSetIndex;}},{key:"union",value:function union(bitSets){var ret=this;// tslint:disable-line:no-this-assignment
var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=bitSets[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var bitSet=_step2.value;ret=ret.or(bitSet);}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return ret;}},{key:"toString",value:function toString(gameData){var str=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this.getSprites(gameData)[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var sprite=_step3.value;str.push(sprite.getName());}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return str.join(' ');}},{key:"getSprites",value:function getSprites(gameData){var sprites=new Set();var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=gameData.objects[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var sprite=_step4.value;if(this.has(sprite)){sprites.add(sprite);}}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}return sprites;}},{key:"or",value:function or(bitSet){return new SpriteBitSet(undefined,this.bitSet.or(bitSet.bitSet));}}]);return SpriteBitSet;}(CustomBitSet);

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: RULE_DIRECTION, INPUT_BUTTON, RULE_DIRECTION_RELATIVE, _flatten, _debounce, opposite, setEquals, setAddAll, setIntersection, setDifference, nextRandom, resetRandomSeed, setRandomValuesForTesting, clearRandomValuesForTesting, getRandomSeed, DEBUG_FLAG, spritesThatInteractWithPlayer, pollingPromise, MESSAGE_TYPE, shouldTick, EmptyGameEngineHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE_DIRECTION", function() { return RULE_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_BUTTON", function() { return INPUT_BUTTON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RULE_DIRECTION_RELATIVE", function() { return RULE_DIRECTION_RELATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_flatten", function() { return _flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_debounce", function() { return _debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opposite", function() { return opposite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEquals", function() { return setEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAddAll", function() { return setAddAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIntersection", function() { return setIntersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDifference", function() { return setDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRandom", function() { return nextRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetRandomSeed", function() { return resetRandomSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRandomValuesForTesting", function() { return setRandomValuesForTesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearRandomValuesForTesting", function() { return clearRandomValuesForTesting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomSeed", function() { return getRandomSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_FLAG", function() { return DEBUG_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spritesThatInteractWithPlayer", function() { return spritesThatInteractWithPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollingPromise", function() { return pollingPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_TYPE", function() { return MESSAGE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldTick", function() { return shouldTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyGameEngineHandler", function() { return EmptyGameEngineHandler; });
function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_nonIterableSpread();}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter){if(Symbol.iterator in Object(iter)||Object.prototype.toString.call(iter)==="[object Arguments]")return Array.from(iter);}function _arrayWithoutHoles(arr){if(Array.isArray(arr)){for(var i=0,arr2=new Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}}var RULE_DIRECTION;(function(RULE_DIRECTION){RULE_DIRECTION["UP"]="UP";RULE_DIRECTION["DOWN"]="DOWN";RULE_DIRECTION["LEFT"]="LEFT";RULE_DIRECTION["RIGHT"]="RIGHT";RULE_DIRECTION["ACTION"]="ACTION";RULE_DIRECTION["STATIONARY"]="STATIONARY";RULE_DIRECTION["RANDOMDIR"]="RANDOMDIR";})(RULE_DIRECTION||(RULE_DIRECTION={}));var INPUT_BUTTON;(function(INPUT_BUTTON){INPUT_BUTTON["UP"]="UP";INPUT_BUTTON["DOWN"]="DOWN";INPUT_BUTTON["LEFT"]="LEFT";INPUT_BUTTON["RIGHT"]="RIGHT";INPUT_BUTTON["ACTION"]="ACTION";INPUT_BUTTON["UNDO"]="UNDO";INPUT_BUTTON["RESTART"]="RESTART";})(INPUT_BUTTON||(INPUT_BUTTON={}));var RULE_DIRECTION_RELATIVE;(function(RULE_DIRECTION_RELATIVE){RULE_DIRECTION_RELATIVE["RELATIVE_LEFT"]="<";RULE_DIRECTION_RELATIVE["RELATIVE_RIGHT"]=">";RULE_DIRECTION_RELATIVE["RELATIVE_UP"]="^";RULE_DIRECTION_RELATIVE["RELATIVE_DOWN"]="V";})(RULE_DIRECTION_RELATIVE||(RULE_DIRECTION_RELATIVE={}));// From https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays-in-javascript/39000004#39000004
function _flatten(arrays){// return [].concat.apply([], arrays) as T[]
var ret=[];arrays.forEach(function(ary){ary.forEach(function(item){ret.push(item);});});return ret;}// export function filterNulls<T>(items: Array<Optional<T>>) {
//     const ret: T[] = []
//     items.forEach((x) => {
//         if (x) { ret.push(x) }
//     })
//     return ret
// }
// export function _zip<T1, T2>(array1: T1[], array2: T2[]) {
//     if (array1.length < array2.length) {
//         throw new Error(`BUG: Zip array length mismatch ${array1.length} != ${array2.length}`)
//     }
//     return array1.map((v1, index) => {
//         return [v1, array2[index]]
//     })
// }
// export function _extend(dest: any, ...rest: any[]) {
//     for (const obj of rest) {
//         for (const key of Object.keys(obj)) {
//             dest[key] = obj[key]
//         }
//     }
//     return dest
// }
function _debounce(callback){var timeout;// NodeJS.Timer
return function(){if(timeout){clearTimeout(timeout);}timeout=setTimeout(function(){callback();},10);};}function opposite(dir){switch(dir){case RULE_DIRECTION.UP:return RULE_DIRECTION.DOWN;case RULE_DIRECTION.DOWN:return RULE_DIRECTION.UP;case RULE_DIRECTION.LEFT:return RULE_DIRECTION.RIGHT;case RULE_DIRECTION.RIGHT:return RULE_DIRECTION.LEFT;default:throw new Error("BUG: Invalid direction: \"".concat(dir,"\""));}}function setEquals(set1,set2){if(set1.size!==set2.size)return false;var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=set2[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var elem=_step.value;if(!set1.has(elem))return false;}}catch(err){_didIteratorError=true;_iteratorError=err;}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return();}}finally{if(_didIteratorError){throw _iteratorError;}}}return true;}function setAddAll(setA,iterable){var newSet=new Set(setA);var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=iterable[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var elem=_step2.value;newSet.add(elem);}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally{try{if(!_iteratorNormalCompletion2&&_iterator2.return!=null){_iterator2.return();}}finally{if(_didIteratorError2){throw _iteratorError2;}}}return newSet;}function setIntersection(setA,setB){var intersection=new Set();var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=setB[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var elem=_step3.value;if(setA.has(elem)){intersection.add(elem);}}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally{try{if(!_iteratorNormalCompletion3&&_iterator3.return!=null){_iterator3.return();}}finally{if(_didIteratorError3){throw _iteratorError3;}}}return intersection;}function setDifference(setA,setB){var difference=new Set(setA);var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=setB[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var elem=_step4.value;difference.delete(elem);}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally{try{if(!_iteratorNormalCompletion4&&_iterator4.return!=null){_iterator4.return();}}finally{if(_didIteratorError4){throw _iteratorError4;}}}return difference;}// From https://stackoverflow.com/a/19303725
var seed=1;var randomValuesForTesting=null;function nextRandom(maxNonInclusive){if(randomValuesForTesting){if(randomValuesForTesting.length<=seed-1){throw new Error("BUG: the list of random values for testing was too short.\n            See calls to setRandomValuesForTesting([...]).\n            The list was [".concat(randomValuesForTesting,"]. Index being requested is ").concat(seed-1));}var ret=randomValuesForTesting[seed-1];seed++;// console.log(`Sending "random" value of "${ret}"`);
return ret;}var x=Math.sin(seed++)*10000;return Math.round((x-Math.floor(x))*(maxNonInclusive-1));// return Math.round(Math.random() * (maxNonInclusive - 1))
}function resetRandomSeed(){seed=1;}function setRandomValuesForTesting(values){randomValuesForTesting=values;resetRandomSeed();}function clearRandomValuesForTesting(){randomValuesForTesting=null;resetRandomSeed();}function getRandomSeed(){return seed;}/**
 * A `DEBUGGER` flag in the game source that causes the evaluation to pause.
 * It works like the
 * [debugger](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
 * keyword in JavaScript.
 *
 * **Note:** the game needs to run in debug mode (`node --inspect-brk path/to/puzzlescript.js` or `npm run play-debug`)
 * for this flag to have any effect.
 *
 * This string can be added to:
 *
 * - A Rule. Example: `DEBUGGER [ > player | cat ] -> [ > player | > cat ]`
 * - A bracket when the condition is updated: `[ > player | cat ] DEBUGGER -> [ > player | > cat ]`
 * - A bracket when it is evaluated: `[ > player | cat ] -> [ > player | > cat ] DEBUGGER`
 * - A neighbor when the condition is updated: `[ > player DEBUGGER | cat ] -> [ > player | > cat ]`
 * - A neighbor when it is evaluated: `[ > player | cat ] -> [ > player | > cat DEBUGGER ]`
 * - A tile when the condition is updated: `[ > player | DEBUGGER cat ] -> [ > player | > cat ]`
 * - A tile when it is matched: `[ > player | cat ] -> [ > player | DEBUGGER > cat ]`
 */var DEBUG_FLAG;(function(DEBUG_FLAG){DEBUG_FLAG["BREAKPOINT"]="DEBUGGER";DEBUG_FLAG["BREAKPOINT_REMOVE"]="DEBUGGER_REMOVE";})(DEBUG_FLAG||(DEBUG_FLAG={}));function spritesThatInteractWithPlayer(game){var playerSprites=game.getPlayer().getSprites();var interactsWithPlayer=new Set(playerSprites);// Add all the sprites in the same collision layer as the Player
var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=interactsWithPlayer[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var playerSprite=_step5.value;var collisionLayer=playerSprite.getCollisionLayer();var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=game.objects[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var _sprite=_step8.value;if(_sprite.getCollisionLayer()===collisionLayer){interactsWithPlayer.add(_sprite);}}}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally{try{if(!_iteratorNormalCompletion8&&_iterator8.return!=null){_iterator8.return();}}finally{if(_didIteratorError8){throw _iteratorError8;}}}}// Add all the winCondition sprites
}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally{try{if(!_iteratorNormalCompletion5&&_iterator5.return!=null){_iterator5.return();}}finally{if(_didIteratorError5){throw _iteratorError5;}}}var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=game.winConditions[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var win=_step6.value;var _iteratorNormalCompletion9=true;var _didIteratorError9=false;var _iteratorError9=undefined;try{for(var _iterator9=win.a11yGetTiles()[Symbol.iterator](),_step9;!(_iteratorNormalCompletion9=(_step9=_iterator9.next()).done);_iteratorNormalCompletion9=true){var tile=_step9.value;var _iteratorNormalCompletion10=true;var _didIteratorError10=false;var _iteratorError10=undefined;try{for(var _iterator10=tile.getSprites()[Symbol.iterator](),_step10;!(_iteratorNormalCompletion10=(_step10=_iterator10.next()).done);_iteratorNormalCompletion10=true){var _sprite2=_step10.value;interactsWithPlayer.add(_sprite2);}}catch(err){_didIteratorError10=true;_iteratorError10=err;}finally{try{if(!_iteratorNormalCompletion10&&_iterator10.return!=null){_iterator10.return();}}finally{if(_didIteratorError10){throw _iteratorError10;}}}}}catch(err){_didIteratorError9=true;_iteratorError9=err;}finally{try{if(!_iteratorNormalCompletion9&&_iterator9.return!=null){_iterator9.return();}}finally{if(_didIteratorError9){throw _iteratorError9;}}}}// Add all the other sprites that interact with the player
}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally{try{if(!_iteratorNormalCompletion6&&_iterator6.return!=null){_iterator6.return();}}finally{if(_didIteratorError6){throw _iteratorError6;}}}var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=game.rules[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var rule=_step7.value;var _iteratorNormalCompletion11=true;var _didIteratorError11=false;var _iteratorError11=undefined;try{for(var _iterator11=rule.a11yGetConditionSprites()[Symbol.iterator](),_step11;!(_iteratorNormalCompletion11=(_step11=_iterator11.next()).done);_iteratorNormalCompletion11=true){var sprites=_step11.value;if(setIntersection(sprites,interactsWithPlayer).size>0){var _iteratorNormalCompletion12=true;var _didIteratorError12=false;var _iteratorError12=undefined;try{for(var _iterator12=sprites[Symbol.iterator](),_step12;!(_iteratorNormalCompletion12=(_step12=_iterator12.next()).done);_iteratorNormalCompletion12=true){var _sprite3=_step12.value;interactsWithPlayer.add(_sprite3);}}catch(err){_didIteratorError12=true;_iteratorError12=err;}finally{try{if(!_iteratorNormalCompletion12&&_iterator12.return!=null){_iterator12.return();}}finally{if(_didIteratorError12){throw _iteratorError12;}}}}}}catch(err){_didIteratorError11=true;_iteratorError11=err;}finally{try{if(!_iteratorNormalCompletion11&&_iterator11.return!=null){_iterator11.return();}}finally{if(_didIteratorError11){throw _iteratorError11;}}}}// remove the background sprite (even though it transitively interacts)
}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally{try{if(!_iteratorNormalCompletion7&&_iterator7.return!=null){_iterator7.return();}}finally{if(_didIteratorError7){throw _iteratorError7;}}}var background=game.getMagicBackgroundSprite();if(background){interactsWithPlayer.delete(background);}// remove transparent sprites once the dependecies are found
return new Set(_toConsumableArray(interactsWithPlayer).filter(function(s){return!s.isTransparent();}));}// Webworker message interfaces
// Polls until a condition is true
function pollingPromise(ms,fn){return new Promise(function(resolve){var timer=setInterval(function(){var value=fn();if(value){clearInterval(timer);resolve(value);}},ms);});}var MESSAGE_TYPE;(function(MESSAGE_TYPE){MESSAGE_TYPE["PAUSE"]="PAUSE";MESSAGE_TYPE["RESUME"]="RESUME";MESSAGE_TYPE["TICK"]="TICK";MESSAGE_TYPE["PRESS"]="PRESS";MESSAGE_TYPE["CLOSE"]="CLOSE";MESSAGE_TYPE["ON_GAME_CHANGE"]="ON_GAME_CHANGE";MESSAGE_TYPE["ON_PRESS"]="ON_PRESS";MESSAGE_TYPE["ON_MESSAGE"]="ON_MESSAGE";MESSAGE_TYPE["ON_MESSAGE_DONE"]="ON_MESSAGE_DONE";MESSAGE_TYPE["ON_LEVEL_CHANGE"]="ON_LEVEL_CHANGE";MESSAGE_TYPE["ON_WIN"]="ON_WIN";MESSAGE_TYPE["ON_SOUND"]="ON_SOUND";MESSAGE_TYPE["ON_TICK"]="ON_TICK";MESSAGE_TYPE["ON_PAUSE"]="ON_PAUSE";MESSAGE_TYPE["ON_RESUME"]="ON_RESUME";})(MESSAGE_TYPE||(MESSAGE_TYPE={}));var shouldTick=function shouldTick(metadata,lastTick){var now=Date.now();var minTime=Math.min(metadata.realtimeInterval||1000,metadata.keyRepeatInterval||1000,metadata.againInterval||1000);if(minTime>100||Number.isNaN(minTime)){minTime=.01;}return now-lastTick>=minTime*1000;};// This interface is so the WebWorker does not have to instantiate Cells just to render to the screen
var EmptyGameEngineHandler=/*#__PURE__*/function(){function EmptyGameEngineHandler(subHandlers){_classCallCheck(this,EmptyGameEngineHandler);this.subHandlers=subHandlers||[];}_createClass(EmptyGameEngineHandler,[{key:"onGameChange",value:function onGameChange(gameData){var _iteratorNormalCompletion13=true;var _didIteratorError13=false;var _iteratorError13=undefined;try{for(var _iterator13=this.subHandlers[Symbol.iterator](),_step13;!(_iteratorNormalCompletion13=(_step13=_iterator13.next()).done);_iteratorNormalCompletion13=true){var h=_step13.value;h.onGameChange&&h.onGameChange(gameData);}}catch(err){_didIteratorError13=true;_iteratorError13=err;}finally{try{if(!_iteratorNormalCompletion13&&_iterator13.return!=null){_iterator13.return();}}finally{if(_didIteratorError13){throw _iteratorError13;}}}}},{key:"onPress",value:function onPress(dir){var _iteratorNormalCompletion14=true;var _didIteratorError14=false;var _iteratorError14=undefined;try{for(var _iterator14=this.subHandlers[Symbol.iterator](),_step14;!(_iteratorNormalCompletion14=(_step14=_iterator14.next()).done);_iteratorNormalCompletion14=true){var h=_step14.value;h.onPress&&h.onPress(dir);}}catch(err){_didIteratorError14=true;_iteratorError14=err;}finally{try{if(!_iteratorNormalCompletion14&&_iterator14.return!=null){_iterator14.return();}}finally{if(_didIteratorError14){throw _iteratorError14;}}}}},{key:"onMessage",value:function(){var _onMessage=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(msg){var _iteratorNormalCompletion15,_didIteratorError15,_iteratorError15,_iterator15,_step15,h;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_iteratorNormalCompletion15=true;_didIteratorError15=false;_iteratorError15=undefined;_context.prev=3;_iterator15=this.subHandlers[Symbol.iterator]();case 5:if(_iteratorNormalCompletion15=(_step15=_iterator15.next()).done){_context.next=14;break;}h=_step15.value;_context.t0=h.onMessage;if(!_context.t0){_context.next=11;break;}_context.next=11;return h.onMessage(msg);case 11:_iteratorNormalCompletion15=true;_context.next=5;break;case 14:_context.next=20;break;case 16:_context.prev=16;_context.t1=_context["catch"](3);_didIteratorError15=true;_iteratorError15=_context.t1;case 20:_context.prev=20;_context.prev=21;if(!_iteratorNormalCompletion15&&_iterator15.return!=null){_iterator15.return();}case 23:_context.prev=23;if(!_didIteratorError15){_context.next=26;break;}throw _iteratorError15;case 26:return _context.finish(23);case 27:return _context.finish(20);case 28:case"end":return _context.stop();}}},_callee,this,[[3,16,20,28],[21,,23,27]]);}));function onMessage(_x){return _onMessage.apply(this,arguments);}return onMessage;}()},{key:"onLevelChange",value:function onLevelChange(level,cells,message){var _iteratorNormalCompletion16=true;var _didIteratorError16=false;var _iteratorError16=undefined;try{for(var _iterator16=this.subHandlers[Symbol.iterator](),_step16;!(_iteratorNormalCompletion16=(_step16=_iterator16.next()).done);_iteratorNormalCompletion16=true){var h=_step16.value;h.onLevelChange&&h.onLevelChange(level,cells,message);}}catch(err){_didIteratorError16=true;_iteratorError16=err;}finally{try{if(!_iteratorNormalCompletion16&&_iterator16.return!=null){_iterator16.return();}}finally{if(_didIteratorError16){throw _iteratorError16;}}}}},{key:"onWin",value:function onWin(){var _iteratorNormalCompletion17=true;var _didIteratorError17=false;var _iteratorError17=undefined;try{for(var _iterator17=this.subHandlers[Symbol.iterator](),_step17;!(_iteratorNormalCompletion17=(_step17=_iterator17.next()).done);_iteratorNormalCompletion17=true){var h=_step17.value;h.onWin&&h.onWin();}}catch(err){_didIteratorError17=true;_iteratorError17=err;}finally{try{if(!_iteratorNormalCompletion17&&_iterator17.return!=null){_iterator17.return();}}finally{if(_didIteratorError17){throw _iteratorError17;}}}}},{key:"onSound",value:function(){var _onSound=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(sound){var _iteratorNormalCompletion18,_didIteratorError18,_iteratorError18,_iterator18,_step18,h;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_iteratorNormalCompletion18=true;_didIteratorError18=false;_iteratorError18=undefined;_context2.prev=3;for(_iterator18=this.subHandlers[Symbol.iterator]();!(_iteratorNormalCompletion18=(_step18=_iterator18.next()).done);_iteratorNormalCompletion18=true){h=_step18.value;h.onSound&&h.onSound(sound);}_context2.next=11;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](3);_didIteratorError18=true;_iteratorError18=_context2.t0;case 11:_context2.prev=11;_context2.prev=12;if(!_iteratorNormalCompletion18&&_iterator18.return!=null){_iterator18.return();}case 14:_context2.prev=14;if(!_didIteratorError18){_context2.next=17;break;}throw _iteratorError18;case 17:return _context2.finish(14);case 18:return _context2.finish(11);case 19:case"end":return _context2.stop();}}},_callee2,this,[[3,7,11,19],[12,,14,18]]);}));function onSound(_x2){return _onSound.apply(this,arguments);}return onSound;}()},{key:"onTick",value:function onTick(changedCells,checkpoint,hasAgain,a11yMessages){var _iteratorNormalCompletion19=true;var _didIteratorError19=false;var _iteratorError19=undefined;try{for(var _iterator19=this.subHandlers[Symbol.iterator](),_step19;!(_iteratorNormalCompletion19=(_step19=_iterator19.next()).done);_iteratorNormalCompletion19=true){var h=_step19.value;h.onTick&&h.onTick(changedCells,checkpoint,hasAgain,a11yMessages);}}catch(err){_didIteratorError19=true;_iteratorError19=err;}finally{try{if(!_iteratorNormalCompletion19&&_iterator19.return!=null){_iterator19.return();}}finally{if(_didIteratorError19){throw _iteratorError19;}}}}},{key:"onPause",value:function onPause(){var _iteratorNormalCompletion20=true;var _didIteratorError20=false;var _iteratorError20=undefined;try{for(var _iterator20=this.subHandlers[Symbol.iterator](),_step20;!(_iteratorNormalCompletion20=(_step20=_iterator20.next()).done);_iteratorNormalCompletion20=true){var h=_step20.value;h.onPause&&h.onPause();}}catch(err){_didIteratorError20=true;_iteratorError20=err;}finally{try{if(!_iteratorNormalCompletion20&&_iterator20.return!=null){_iterator20.return();}}finally{if(_didIteratorError20){throw _iteratorError20;}}}}},{key:"onResume",value:function onResume(){var _iteratorNormalCompletion21=true;var _didIteratorError21=false;var _iteratorError21=undefined;try{for(var _iterator21=this.subHandlers[Symbol.iterator](),_step21;!(_iteratorNormalCompletion21=(_step21=_iterator21.next()).done);_iteratorNormalCompletion21=true){var h=_step21.value;h.onResume&&h.onResume();}}catch(err){_didIteratorError21=true;_iteratorError21=err;}finally{try{if(!_iteratorNormalCompletion21&&_iterator21.return!=null){_iterator21.return();}}finally{if(_didIteratorError21){throw _iteratorError21;}}}}// public onGameChange(data: GameData) { this.subHandlers.forEach(h => h.onGameChange && h.onGameChange(data)) }
}]);return EmptyGameEngineHandler;}();

/***/ })

/******/ });
//# sourceMappingURL=puzzlescript-webworker.js.map