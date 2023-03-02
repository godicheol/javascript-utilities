// universal module definition
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS
      module.exports = factory();
    } else {
      // browser window
      root.utils = factory();
    }
})(this, function() {
    'use strict';
    return {
        /**
         * 
         * @param {Number} n 
         * @param {Number} m 
         * @returns
         */
        modulo: function(n, m) {
            return ((n % m) + m) % m;
        },
        /**
         * 
         * @param {Number} n 
         * @param {Number} m 
         * @returns
         */
        square: function(n, m) {
            return Math.pow(n, m);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        trim: function(str) {
            return str.replace(/^\s*|\s*$/g, "");
        },
        /**
         * 
         * @param {Number} min 
         * @param {Number} max 
         * @param {Number} value 
         * @returns 
         */
        between: function(min, max, value) {
            return Math.min(max, Math.max(min, value));
        },
        /**
         * 
         * @param {Number} value 
         * @param {Number} minSrc 
         * @param {Number} maxSrc 
         * @param {Number} minDst 
         * @param {Number} maxDst 
         * @returns 
         */
        map: function(value, minSrc, maxSrc, minDst, maxDst) {
            if (value < minSrc) {
                value = minSrc;
            }
            if (value > maxSrc) {
                value = maxSrc;
            }
            return (value/(maxSrc-minSrc))*(maxDst-minDst)+minDst;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        escape: function(str) {
            return str.replace(/([\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-])/g, "\\$1");
        },
        /**
         * 
         * @param {Number} n 
         * @returns 1, 0, -1
         */
        compose: function(n) {
            return Math.sign(n);
        },
        /**
         * 
         * @param {Boolean} bool 
         * @returns 
         */
        isBoolean: function(bool) {
            return (typeof(bool) === "boolean") || (typeof(bool) === "number" && (bool === 1 || bool === 0)) || (typeof(bool) === "string" && (bool === "true" || bool === "false" || bool === "1" || bool === "0"))
        },
        /**
         * 
         * @param {Number} num 
         * @returns 
         */
        isNumeric: function(num) {
            return typeof(num) === "number" || (typeof(num) === "string" && !isNaN(parseFloat(num)) && isFinite(num));
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isString: function(str) {
            return typeof(str) === "string";
        },
        /**
         * 
         * @param {Object} obj 
         * @returns 
         */
        isObject: function(obj) {
            return typeof(obj) === "object" && obj !== null && Object.prototype.toString.call(obj) !== '[object Array]';
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        isArray: function(arr) {
            return typeof(arr) === "object" && Object.prototype.toString.call(arr) === '[object Array]';
        },
        /**
         * 
         * @param {Date} date 
         * @returns 
         */
        isDate: function(date) {
            return date instanceof Date && !isNaN(date.valueOf());
        },
        /**
         * 
         * @param {Node} node 
         * @returns 
         */
        isNode: function(node) {
            return (typeof(Node) === "object" ? node instanceof Node : node) && typeof(node) === "object" && typeof(node.nodeType) === "number" && typeof(node.nodeName) === "string";
        },
        /**
         * 
         * @param {NodeList} node 
         * @returns 
         */
        isNodeList: function(nodeList) {
            return typeof(nodeList) === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(nodeList)) && typeof(nodeList.length) === "number" && (nodeList.length === 0 || (typeof(nodeList[0]) === "object" && nodeList[0].nodeType > 0));
        },
        /**
         * 
         * @param {HTMLElement} elem 
         * @returns 
         */
        isDOMElement: function(elem) {
            return (typeof(HTMLElement) === "object" ? elem instanceof HTMLElement : elem) && typeof(elem) === "object" && elem !== null && elem.nodeType === 1 && typeof(elem.nodeName) === "string";
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isMimeType: function(str) {
			var pattern = new RegExp("(application|audio|font|example|image|message|model|multipart|text|video|x-(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+))/([0-9A-Za-z!#$%&'*+.^_`|~-]+)((?:[ \t]*;[ \t]*[0-9A-Za-z!#$%&'*+.^_`|~-]+=(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+|\"(?:[^\"\\\\]|\\.)*\"))*)");
			return pattern.test(str);
		},
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isColor: function(str) {
            var pattern = new RegExp("^(?:#(?:[A-Fa-f0-9]{3}){1,2}|(?:rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}|hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*|(?:rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}|hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,)\s*0*(?:\.\d+|1(?:\.0*)?)\s*)[)])$");
            return pattern.test(str);
        },
        /**
         * 
         * @param {Regexp} regexp 
         * @returns 
         */
        isRegexp: function(regexp) {
            return (typeof(regexp) === "object" && regexp instanceof RegExp) || (typeof(regexp) === "string" && /^\/.*\/[gi]{0,2}$/.test(regexp));
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isCapital: function(str) {
            return str.charAt(0) === str.charAt(0).toUpperCase();
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isEmail: function(str) {
            return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str); /* W3C */
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isUrl: function(str) {
            return /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)$/.test(str);
            // /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(str);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isIpAddress: function(str) {
            return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.test(str);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isPhoneNumber: function(str) {
            return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4,6}$/.test(str);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isHexColor: function(str) {
            return /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/.test(str);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isSafeUrl: function(str) {
            return /^[a-zA-Z0-9-._~()'!*:@,?\/#+&=]+$/.test(str);
        },
        /**
         * 
         * @param {Array} a 
         * @param {Any} b 
         * @returns 
         */
        isIncluded: function(a, b) {
            if (typeof(a) !== "object" || Object.prototype.toString.call(a) !== '[object Array]') {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
            b = (typeof(b) === "object" && Object.prototype.toString.call(b) === '[object Array]') ? b : [b];
            var al = a.length;
            var bl = b.length;
            var i;
            var j;
            var is;
            for (j = 0; j < bl; j++) {
                is = false;
                for (i = 0; i < al; i++) {
                    if (b[j] === a[i]) {
                        is = true;
                    }
                }
                if (!is) {
                    return false;
                }
            }
            return true;
        },
        /**
         * 
         * @param {Boolean} bool 
         * @returns 
         */
        toBoolean: function(bool) {
            this.toBoolean()
            if (typeof(bool) === "boolean") {
                return bool;
            } else if (typeof(bool) === "number" && (bool === 1 || bool === 0)) {
                return bool === 1;
            } else if (typeof(bool) === "string" && (bool === "true" || bool === "false")) {
                return bool === "true";
            } else if (typeof(bool) === "string" && (bool === "1" || bool === "0")) {
                return bool === "1";
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        toNumber: function(str) {
            if (typeof(str) === "number") {
                return str;
            } else if (typeof(str) === "string" && !isNaN(parseFloat(str)) && isFinite(str)) {
                return parseFloat(str);
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        /**
         * 
         * @param {Number} num 
         * @returns 
         */
        toString: function(num) {
            if (typeof(num) === "string") {
                return num;
            } else if (typeof(num) === "number") {
                return num.toString(10);
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        toObject: function(arr) {
            return arr.reduce(function(prev, curr) {
                prev[curr[0]] = curr[1];
                return prev;
            }, {});
        },
        /**
         * 
         * @param {Object} obj 
         * @returns 
         */
        toArray: function(obj) {
            if (typeof(obj) === "object" && obj !== null && Object.prototype.toString.call(obj) !== '[object Array]') {
                return Object.entries(any);
            } else if (typeof(obj) === "object" && obj !== null && Object.prototype.toString.call(obj) === '[object Array]') {
                return obj;
            } else if (typeof(obj) === "string") {
                return obj.split('');
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        /**
         * 
         * @param {Number} num 
         * @returns 
         */
        toDate: function(num) {
            if (typeof(num) === "object" && num instanceof Date && !isNaN(num.valueOf())) {
                return num;
            } else if (typeof(num) === "number") {
                return new Date(num);
            } else if (typeof(num) === "string") {
                return new Date(num);
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        toRegexp: function(str) {
            if (typeof(str) === "object" && str instanceof RegExp) {
                return str;
            } else if (typeof(str) === "string") {
                return new RegExp(str.replace(/^\/|\/[dgimsuy]{0,7}$/g, ""), str.replace(/.*\/([dgimsuy]{0,7})$/, "$1"));
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        toCapital: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        /**
         * 
         * @param {String} str 
         * @param {String} char 
         * @returns 
         */
        toSafeUrl: function(str, char) {
            return str.replace(/[\{\}\[\].,;:|\)*~`!^<>@\$%\\\(\'\"\s]/g, char || "_");
        },
        /**
         * 
         * @param {Any} any 
         * @returns 
         */
        getType: function(any) {
            if (typeof(any) === "object") {
                if (Object.prototype.toString.call(any) === '[object Array]') {
                    return "array";
                } else if (any instanceof Blob) {
                    return "blob";
                } else if (any instanceof RegExp) {
                    return "regexp";
                } else if (any === null) {
                    return "null";
                } else {
                    return "object";
                }
            } else if (typeof(any) === "number") {
                if (isNaN(any)) {
                    return "NaN";
                } else {
                    return "number";
                }
            } else {
                return typeof(any);
            }
        },
        /**
         * with setType()
         * @param {Any} any 
         * @param {String} type string, number, array, object, null, undefined, regexp
         * @returns 
         */
        chkType: function(any, type) {
            var arr = [];
            if (typeof(any) === "object") {
                if (Object.prototype.toString.call(any) === '[object Array]') {
                    arr.push("boolean"); // false, true
                    arr.push("number"); // any.length
                    arr.push("object"); // {}
                    arr.push("array"); // []
                } else if (any instanceof Blob) {
                    arr.push("blob");
                } else if (any instanceof RegExp) {
                    arr.push("regexp");
                } else if (any === null) {
                    arr.push("null"); // null
                    arr.push("boolean"); // false
                    arr.push("number"); // 0
                    arr.push("string"); // "null"
                    arr.push("array"); // [null]
                } else {
                    arr.push("boolean"); // false, true
                    arr.push("number"); // Object.keys({}).length
                    arr.push("string"); // key=value;key=value
                    arr.push("object"); // {}
                    arr.push("array"); // [[key, value]]
                }
            } else if (typeof(any) === "string") {
                arr.push("boolean"); // false, true
                arr.push("string"); // "str"
                arr.push("array"); // ["str"]
                arr.push("regexp"); // new RegExp("str")
                if (!isNaN(parseFloat(any)) && isFinite(any)) {
                    arr.push("number"); // 0
                }
            } else if (typeof(any) === "number") {
                if (!isNaN(any) && isFinite(any)) {
                    arr.push("boolean"); // false, true
                    arr.push("number"); // ?
                    arr.push("string"); // "?"
                    arr.push("array"); // []
                }
            } else if (typeof(any) === "boolean") {
                arr.push("boolean"); // false, true
                arr.push("number"); // 0, 1
                arr.push("string"); // "false", "true"
                arr.push("array"); // [true]
            } else if (typeof(any) === "undefined") {
                arr.push("null"); // null
                arr.push("boolean"); // false
                arr.push("number"); // 0
                arr.push("string"); // ""
                arr.push("object"); // {}
                arr.push("array"); // []
            } else {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }

            return arr.indexOf(type.toLowerCase()) > -1;
        },
        /**
         * with chkType
         * @param {Any} any 
         * @param {String} type string, number, array, object, null, undefined
         * @returns 
         */
        setType: function(any, type) {
            if (typeof(any) === "object") {
                if (Object.prototype.toString.call(any) === '[object Array]') {
                    switch(type) {
                        case "boolean": return any.length > 0;
                        case "number": return any.length;
                        case "object": return any.reduce(function(p, c, i) {
                                p[i] = c;
                                return p;
                            }, {});
                        case "array": return any;
                    }
                } else if (any instanceof Blob) {
                    switch(type) {
                        case "blob": return any;
                    }
                } else if (any instanceof RegExp) {
                    switch(type) {
                        case "string": return any.toString();
                        case "regexp": return any;
                    }
                } else if (any === null) {
                    switch(type) {
                        case "null": return null;
                        case "boolean": return false;
                        case "number": return 0;
                        case "string": return "null";
                        case "array": return [null];
                    }
                } else {
                    switch(type) {
                        case "boolean": return Object.keys(any).length !== 0;
                        case "number": return Object.keys(any).length;
                        case "string": return Object.entries(any).reduce(function(p, [k, v]) {
                                return p+k+"\="+v+"\;";
                            }, "");
                        case "object": return any;
                        case "array": return Object.entries(any);
                    }
                }
            } else if (typeof(any) === "string") {
                if (!isNaN(parseFloat(any)) && isFinite(any)) {
                    switch(type) {
                        case "boolean": return parseFloat(any) > 0;
                        case "number": return parseFloat(any);
                    }
                }
                switch(type) {
                    case "boolean": return (any === "true" || any === "false") ? any === "true" : any !== "";
                    case "string": return any;
                    case "array": return [any];
                    case "regexp": return new RegExp(any.replace(/^\/|\/[dgimsuy]{0,7}$/g, ""), any.replace(/.*\/([dgimsuy]{0,7})$/, "$1"));
                }
            } else if (typeof(any) === "number") {
                if (!isNaN(any) && isFinite(any)) {
                    switch(type) {
                        case "boolean": return any > 0;
                        case "number": return any;
                        case "string": return any.toString(10);
                        case "array": return [any];
                    }
                }
            } else if (typeof(any) === "boolean") {
                switch(type) {
                    case "boolean": return any;
                    case "number": return any ? 1 : 0;
                    case "string": return any ? "true" : "false";
                    case "array": return [any];
                }
            } else if (typeof(any) === "undefined") {
                switch(type) {
                    case "null": return null;
                    case "boolean": return false;
                    case "number": return 0;
                    case "string": return "";
                    case "object": return {};
                    case "array": return [];
                }
            }
            var err = new Error('invalid argument type');
            err.name = "TypeError";
            throw err;
        },
        /**
         * deprecated
         * @param {Any} src 
         * @returns 
         */
        getTypes: function(src) {
            var types = [];
            if (typeof(src) === "object") {
                if (Object.prototype.toString.call(src) === '[object Array]') {
                    types.push("array");
                    if (src.length === 0) {
                        types.push("empty");
                    }
                } else if (src === null) {
                    types.push("null");
                } else {
                    types.push("object");
                    if (Object.keys(src).length === 0) {
                        types.push("empty");
                    }
                }
            } else if (typeof(src) === "string") {
                types.push("string");
                if (!isNaN(parseFloat(src)) && isFinite(src)) {
                    types.push("number");
                    if (parseFloat(src) % 1 === 0) {
                        types.push("int");
                    } else {
                        types.push("float");
                    }
                } else if (src === "null") {
                    types.push("null");
                } else if (src === "undefined") {
                    types.push("undefined");
                }
            } else if (typeof(src) === "number") {
                types.push("number");
                if (isNaN(src)) {
                    types.push("NaN");
                } else if (src % 1 === 0) {
                    types.push("int");
                } else {
                    types.push("float");
                }
                if (src === 1 || src === 0 || src === -1) {
                    types.push("boolean");
                }
            } else if (typeof(src) === "undefined") {
                types.push("undefined");
                types.push("empty");
            } else {
                types.push(typeof(src));
            }
            return types;
        },
        /**
         * deprecated
         * @param {Any} src 
         * @param {String} dst string, number, object, array
         * @param {Object} options null, undefined
         * @returns 
         */
        setType2: function(src, dst, options) {
            var types = [];
            if (typeof(src) === "object") {
                if (Object.prototype.toString.call(src) === '[object Array]') {
                    types.push("array");
                    if (src.length === 0) {
                        types.push("empty");
                    }
                } else if (src === null) {
                    types.push("null");
                } else {
                    types.push("object");
                    if (Object.keys(src).length === 0) {
                        types.push("empty");
                    }
                }
            } else if (typeof(src) === "string") {
                types.push("string");
                if (!isNaN(parseFloat(src)) && isFinite(src)) {
                    types.push("number");
                    if (parseFloat(src) % 1 === 0) {
                        types.push("int");
                    } else {
                        types.push("float");
                    }
                }
                if (
                    src === "true" || 
                    src === "false" ||
                    src === "1" ||
                    src === "0"
                ) {
                    types.push("boolean");
                } else if (src === "null") {
                    types.push("null");
                } else if (src === "undefined") {
                    types.push("undefined");
                }
            } else if (typeof(src) === "number") {
                if (isNaN(src)) {
                    types.push("NaN");
                } else {
                    types.push("number");
                    if (src % 1 === 0) {
                        types.push("int");
                    } else {
                        types.push("float");
                    }
                    if (src === 1 || src === 0) {
                        types.push("boolean");
                    }
                }
            } else if (typeof(src) === "undefined") {
                types.push("undefined");
                types.push("empty");
            } else {
                types.push(typeof(src));
            }

            if (!options) {
                options = {
                    null: true,
                    undefined: true,
                }
            }

            var chk = function(b) {
                var a = types;
                b = (typeof(b) === "object" && Object.prototype.toString.call(b) === '[object Array]') ? b : [b];
                var al = a.length;
                var bl = b.length;
                var i;
                var j;
                var is;
                for (j = 0; j < bl; j++) {
                    is = false;
                    for (i = 0; i < al; i++) {
                        if (b[j] === a[i]) {
                            is = true;
                        }
                    }
                    if (!is) {
                        return false;
                    }
                }
                return true;
            }

            switch(dst) {
                case "boolean":
                    if (chk(["string", "boolean"])) {
                        return src === "true";
                    } else if (chk(["number", "boolean"])) {
                        return src === 1;
                    } else if (chk(["boolean"])) {
                        return src;
                    } else if (chk(["object", "null"])) {
                        if (options.null) {
                            return null;
                        }
                    } else if (chk(["undefined"])) {
                        if (options.undefined) {
                            return undefined;
                        }
                    }
                    break;
                case "string":
                    if (chk(["string"])) {
                        return src;
                    } else if (chk(["number"])) {
                        return src.toString(10);
                    } else if (chk(["boolean"])) {
                        return src ? "true" : "false";
                    } else if (chk(["object", "null"])) {
                        if (options.null) {
                            return null;
                        } else {
                            return "null";
                        }
                    } else if (chk(["undefined"])) {
                        if (options.undefined) {
                            return undefined;
                        } else {
                            return "undefined";
                        }
                    }
                    break;
                case "number":
                    if (chk(["string"])) {
                        if (chk(["number"])) {
                            return parseFloat(src);
                        }
                    } else if (chk(["number"])) {
                        return src;
                    } else if (chk(["boolean"])) {
                        return src ? 1 : 0;
                    } else if (chk(["object", "null"])) {
                        if (options.null) {
                            return null;
                        }
                    } else if (chk(["undefined"])) {
                        if (options.undefined) {
                            return undefined;
                        }
                    }
                    break;
                case "array":
                    if (chk(["string"])) {
                        return [src];
                    } else if (chk(["number"])) {
                        return [src];
                    } else if (chk(["array"])) {
                        return src;
                    } else if (chk(["object"])) {
                        if (chk(["null"])) {
                            if (options.null) {
                                return null;
                            }
                        } else {
                            return Object.entries(src);
                        }
                    } else if (chk(["undefined"])) {
                        if (options.undefined) {
                            return undefined;
                        }
                    }
                    break;
                case "object":
                    if (chk(["array"])) {
                        return src.reduce(function(prev, curr, i) {
                            prev[i] = curr;
                            return prev;
                        }, {});
                    } else if (chk(["object"])) {
                        if (chk(["null"])) {
                            if (options.null) {
                                return null;
                            }
                        } else {
                            return src;
                        }
                    } else if (chk(["undefined"])) {
                        if (options.undefined) {
                            return undefined;
                        }
                    }
                    break;
                case "null":
                    if (chk(["null"])) {
                        return null;
                    }
                    break;
                case "NaN":
                    if (chk(["NaN"])) {
                        return NaN;
                    }
                    break;
                case "undefined":
                    if (chk(["undefined"])) {
                        return undefined;
                    }
                    break;
            }
            var err = new Error('invalid argument type');
            err.name = "TypeError";
            throw err;
        },
        /**
         * 
         * @returns 
         */
        getOs: function() {
            var clients = [
                {system:'Windows 10', pattern:/(Windows 10.0|Windows NT 10.0)/},
                {system:'Windows 8.1', pattern:/(Windows 8.1|Windows NT 6.3)/},
                {system:'Windows 8', pattern:/(Windows 8|Windows NT 6.2)/},
                {system:'Windows 7', pattern:/(Windows 7|Windows NT 6.1)/},
                {system:'Windows Vista', pattern:/Windows NT 6.0/},
                {system:'Windows Server 2003', pattern:/Windows NT 5.2/},
                {system:'Windows XP', pattern:/(Windows NT 5.1|Windows XP)/},
                {system:'Windows 2000', pattern:/(Windows NT 5.0|Windows 2000)/},
                {system:'Windows ME', pattern:/(Win 9x 4.90|Windows ME)/},
                {system:'Windows 98', pattern:/(Windows 98|Win98)/},
                {system:'Windows 95', pattern:/(Windows 95|Win95|Windows_95)/},
                {system:'Windows NT 4.0', pattern:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                {system:'Windows CE', pattern:/Windows CE/},
                {system:'Windows 3.11', pattern:/Win16/},
                {system:'Android', pattern:/Android/},
                {system:'Open BSD', pattern:/OpenBSD/},
                {system:'Sun OS', pattern:/SunOS/},
                {system:'Chrome OS', pattern:/CrOS/},
                {system:'Linux', pattern:/(Linux|X11(?!.*CrOS))/},
                {system:'iOS', pattern:/(iPhone|iPad|iPod)/},
                {system:'Mac OS X', pattern:/Mac OS X/},
                {system:'Mac OS', pattern:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                {system:'QNX', pattern:/QNX/},
                {system:'UNIX', pattern:/UNIX/},
                {system:'BeOS', pattern:/BeOS/},
                {system:'OS/2', pattern:/OS\/2/},
                {system:'Search Bot', pattern:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
            ];
            for (var i = 0; i < clients.length; i++) {
                if (clients[i].pattern.test(navigator.userAgent)) {
                    return clients[i].system;
                }
            }
            return undefined;
        },
        /**
         * 
         * @returns 
         */
        getBrowserName: function() {
            var alias = {"Opera": "Opera","OPR": "Opera","Edge": "Microsoft Legacy Edge","Edg": "Microsoft Edge","MSIE": "Microsoft Internet Explorer","Chrome": "Chrome","Safari": "Safari","Firefox": "Firefox","Trident/": "Microsoft Internet Explorer"}
            var res = /Opera|OPR|Edge|Edg|MSIE|Chrome|Firefox|Trident\//.exec(navigator.userAgent);
            if (!res || !res[0]) {
                return undefined;
            }
            return alias[res[0]]
        },
        /**
         * 
         * @returns 
         */
        getBrowserVersion: function() {
            var alias = {"Opera": "Opera","OPR": "Opera","Edge": "Microsoft Legacy Edge","Edg": "Microsoft Edge","MSIE": "Microsoft Internet Explorer","Chrome": "Chrome","Safari": "Safari","Firefox": "Firefox","Trident/": "Microsoft Internet Explorer"}
            var res = /Opera|OPR|Edge|Edg|MSIE|Chrome|Firefox|Trident\//.exec(navigator.userAgent);
            if (!res || !res[0]) {
                return undefined;
            }
            var browser = alias[res[0]];
            var i;
            var offset = navigator.userAgent.indexOf(browser);
            var version = "";
            var char;
            for (i = offset + browser.length; i < navigator.userAgent.length; i++) {
                char = navigator.userAgent[i];
                if (char.match(/\s/i)) {
                    return version;
                } else if (!isNaN(parseFloat(char)) && isFinite(char)) {
                    version += navigator.userAgent[i];
                } else if (char.match(/[\.]/i)) {
                    version += navigator.userAgent[i];
                }
            }
            return version;
        },
        /**
         * 
         * @returns 
         */
        getScreenSize: function() {
            return {
                width: window.screen.width * window.devicePixelRatio,
                height: window.screen.height * window.devicePixelRatio
            }
        },
        /**
         * 
         * @returns 
         */
        getViewportSize: function() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            }
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getMimeType: function(str) {
            switch(str) {
                case "html":
                case "htm":
                case "shtml": return "text/html";
                case "css": return "text/css";
                case "xml": return "text/xml";
                case "gif": return "image/gif";
                case "jpeg":
                case "jpg": return "image/jpeg";
                case "js": return "application/x-javascript";
                case "atom": return "application/atom+xml";
                case "rss": return "application/rss+xml";
                case "mml": return "text/mathml";
                case "txt": return "text/plain";
                case "jad": return "text/vnd.sun.j2me.app-descriptor";
                case "wml": return "text/vnd.wap.wml";
                case "htc": return "text/x-component";
                case "png": return "image/png";
                case "tif": return "image/tiff";
                case "tiff": return "image/tiff";
                case "wbmp": return "image/vnd.wap.wbmp";                
                case "ico": return "image/x-icon";                
                case "jng": return "image/x-jng";                
                case "bmp": return "image/x-ms-bmp";                
                case "svg": return "image/svg+xml";                
                case "webp": return "image/webp";                
                case "jar": return "application/java-archive";                
                case "war": return "application/java-archive";                
                case "ear": return "application/java-archive";                
                case "hqx": return "application/mac-binhex40";                
                case "doc": return "application/msword";                
                case "pdf": return "application/pdf";                
                case "ps": return "application/postscript";                
                case "eps": return "application/postscript";                
                case "ai": return "application/postscript";                
                case "rtf": return "application/rtf";                
                case "xls": return "vnd.ms-excel";                
                case "ppt": return "application/vnd.ms-powerpoint";                
                case "wmlc": return "application/vnd.wap.wmlc";                
                case "kml": return "application/vnd.google-earth.kml+xml";                
                case "kmz": return "application/vnd.google-earth.kmz";                
                case "7z": return "application/x-7z-compressed";                
                case "cco": return "application/x-cocoa";                
                case "jardiff": return "application/x-java-archive-diff";                
                case "jnlp": return "application/x-java-jnlp-file";                
                case "run": return "application/x-makeself";                
                case "pl": return "application/x-perl";                
                case "pm": return "application/x-perl";                
                case "prc": return "application/x-pilot";                
                case "pdb": return "application/x-pilot";                
                case "rar": return "application/x-rar-compressed";                
                case "rpm": return "application/x-redhat-package-manager";                
                case "sea": return "application/x-sea";                
                case "swf": return "application/x-shockwave-flash";                
                case "sit": return "application/x-stuffit";                
                case "tcl": return "application/x-tcl";                
                case "tk": return "application/x-tcl";                
                case "der": return "application/x-x509-ca-cert";                
                case "pem": return "application/x-x509-ca-cert";                
                case "crt": return "application/x-x509-ca-cert";                
                case "xpi": return "application/x-xpinstall";                
                case "xhtml": return "application/xhtml+xml";                
                case "zip": return "application/zip";                
                case "bin": return "application/octet-stream";                
                case "exe": return "application/octet-stream";                
                case "dll": return "application/octet-stream";                
                case "deb": return "application/octet-stream";                
                case "dmg": return "application/octet-stream";                
                case "eot": return "application/octet-stream";                
                case "iso": return "application/octet-stream";                
                case "img": return "application/octet-stream";                
                case "msi": return "application/octet-stream";                
                case "msp": return "application/octet-stream";                
                case "msm": return "application/octet-stream";                
                case "mid": return "audio/midi";                
                case "midi": return "audio/midi";                
                case "kar": return "audio/midi";                
                case "audio/mpeg": return "audio/mpeg";                
                case "ogg": return "audio/ogg";                
                case "ra": return "audio/x-realaudio";                
                case "3gpp": return "video/3gpp";                
                case "3gp": return "video/3gpp";                
                case "mpeg": return "video/mpeg";                
                case "mpg": return "video/mpeg";                
                case "mov": return "video/quicktime";
                case "flv": return "video/x-flv";
                case "mng": return "video/x-mng";
                case "asx": return "video/x-ms-asf";
                case "asf": return "video/x-ms-asf";
                case "wmv": return "video/x-ms-wmv";
                case "avi": return "video/x-msvideo";
                case "m4v": return "video/mp4";
                case "mp4": return "video/mp4";
                default: return undefined;
            }
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getExtension: function(str) {
            return str.split('.').pop();
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getFileName: function(str) {
            return str.replace(/^.*[\\\/]/, '');
        },
        /**
         * 
         * @param {String} key 
         * @returns 
         */
        getCookie: function(key) {
            var cookies = document.cookie.split(';');
            var cookie = cookies.find(function(e) {
                return e.split("=")[0] === key;
            });
            return cookie.split("=")[1];
        },
        /**
         * 
         * @param {Object} obj 
         * @returns 
         */
        copyObject: function(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        copyArray: function(arr) {
            return JSON.parse(JSON.stringify(arr));
        },
        /**
         * 
         * @param {String} title 
         * @param {String} message 
         * @returns 
         */
        genError: function(title, message) {
            var err = new Error(message);
            err.name = title;
            return err;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        genHashCode: function(str) {
            var hash = 0;
            var i;
            var char;
            for (i = 0; i < str.length; i++) {
                char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash |= 0; // convert to 32bit integer
            }
            return hash;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        genHashString: function(str) {
            return str.split("").reduce(function(p, c) {
                p = (( p << 5 ) - p) + c.charCodeAt(0);
                return p & p;
            }, 0).toString(16);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        genMd5: function(str) {
            function M(d) {
                for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
                return f
            }
            function X(d) {
                for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
                for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
                return _
            }
            function V(d) {
                for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
                return _
            }
            function Y(d, _) {
                d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
                for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
                    var h = m,
                        t = f,
                        g = r,
                        e = i;
                    f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
                }
                return Array(m, f, r, i)
            }
            function md5_cmn(d, _, m, f, r, i) {
                return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
            }
            function md5_ff(d, _, m, f, r, i, n) {
                return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
            }
            function md5_gg(d, _, m, f, r, i, n) {
                return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
            }
            function md5_hh(d, _, m, f, r, i, n) {
                return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
            }
            function md5_ii(d, _, m, f, r, i, n) {
                return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
            }
            function safe_add(d, _) {
                var m = (65535 & d) + (65535 & _);
                return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
            }
            function bit_rol(d, _) {
                return d << _ | d >>> 32 - _
            }
            var r = M(V(Y(X(str), 8 * str.length)));
            return r.toLowerCase()
        },
        /**
         * 
         * @returns 
         */
        genUuid4: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        /**
         * 
         * @param {String} charset "ABCDEFG"
         * @param {Number} len 
         * @returns 
         */
        genRandomString: function(charset, len) {
            var res = "";
            var i;
            for (i = 0; i < len; i++) {
                res += charset[Math.floor(Math.random() * charset.length)];
            }
            return res;
        },
        /**
         * 
         * @returns 
         */
        genShortId: function() {
            var f = (Math.random() * 46656) | 0;
			var s = (Math.random() * 46656) | 0;
			f = ("000" + f.toString(36)).slice(-3);
			s = ("000" + s.toString(36)).slice(-3);
			return f + s;
        },
        /**
         * 
         * @param {Number} bytes 
         * @param {String} format 
         * @param {Number} dot 
         * @returns 
         */
        convFileSize: function(bytes, format, dot) {
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var alias = {"b": "Bytes","byte": "Bytes","bytes": "Bytes","kb": "KB","killobyte": "KB","killobytes": "KB",'mb': "MB",'megabyte': "MB",'megabytes': "MB",'gb': "GB",'gigabyte': "GB",'gigabytes': "GB",'tb': "TB",'terrabyte': "TB",'terrabytes': "TB",'pb': "PB",'petabyte': "PB",'petabytes': "PB",'eb': "EB",'exabyte': "EB",'exabytes': "EB",'zb': "ZB",'zettabyte': "ZB",'zettabytes': "ZB",'yb': "YB",'yottabyte': "YB",'yottabytes': "YB"}
            var f = (format && alias[format.toLowerCase()]) ? alias[format.toLowerCase()] : "Bytes";
            if (bytes === 0) {
                return '0 ' + f;
            }
            var k = 1024;
            var dp = dot < 0 ? 0 : dot;
            var i = sizes.indexOf(f);
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + ' ' + sizes[i];
        },
        /**
         * 
         * @param {Number} bytes 
         * @param {Number} dot 
         * @returns 
         */
        humanizeFileSize: function(bytes, dot) {
            if (bytes === 0) {
                return "0 bytes";
            }
            var k = 1024;
            var dp = dot < 0 ? 0 : dot;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + ' ' + sizes[i];
        },
        /**
         * 
         * @returns 
         */
        isCookieEnabled: function() {
            if (typeof(navigator.cookieEnabled) !== "undefined") {
                if (navigator.cookieEnabled) {
                    return true;
                } else {
                    return false;
                }
            } else {
                document.cookie = 'testCookieEndabled=;';
                if (document.cookie.indexOf('testCookieEndabled') > -1) {
                    document.cookie = 'testCookieEndabled=; Max-Age=-99999999;';
                    return true;
                } else {
                    return false;
                }
            }
        },
        /**
         * 
         * @param {String} key 
         * @param {String} val 
         */
        setCookie: function(key, val) {
            document.cookie = key + '=' + val;
        },
        /**
         * 
         * @param {String} key 
         */
        removeCookie: function(key) {
            document.cookie = key + '=; Max-Age=-99999999;';
        },
        /**
         * 
         * @param {String} url 
         * @param {String} target 
         */
        openUrl: function(url, target) {
            window.open(url, target);
        },
        /**
         * 
         * @param {String} pad "0000"
         * @param {String} str 
         * @returns 
         */
        padLeft: function(pad, str) {
            if (!str) {
                return pad;
            }
            return (pad + str).slice(-pad.length);
        },
        /**
         * 
         * @param {String} pad "0000"
         * @param {String} str 
         * @returns 
         */
        padRight: function(pad, str) {
            if (!str) {
                return pad;
            }
            return (str + pad).substring(0, pad.length);
        },
        /**
         * 
         * @param {Array} arr [String, String]
         * @param {String} header 
         * @param {String} footer 
         * @returns 
         */
        joinString: function(arr, header, footer) {
            return arr.map(function(e) {
                return (header ? header : "") + e + (footer ? footer : "");
            }).join("");
        },
        /**
         * 
         * @param {Array} arr [Array, Array]
         * @returns 
         */
        joinArray: function(arr) {
            return arr.reduce(function(prev, curr) {
                return prev.concat(curr);
            }, []);
        },
        /**
         * 
         * @param {Array} regexpArray array of regexp
         * @param {String} flags 
         * @returns 
         */
        joinRegexp: function(regexpArray, flags) {
            return new RegExp(regexpArray.map(function(e) {
                return e.source;
            }).join("\|"), flags);
        },
        /**
         * 
         * @param {Array} arr array of object
         */
        joinObject: function(arr) {
            var func = function(a, b) {
                for (var k in b) {
                    if (typeof(a[k]) !== "object" && typeof(b[k]) !== "object") {
                        a[k] = b[k];
                    } else {
                        func(a[k], b[k]);
                    }
                }
            }
            return arr.reduce(function(prev, curr) {
                func(prev, curr);
                return prev;
            }, {});
        },
        /**
         * 
         * @param {String} str 
         * @param {String} from 
         * @param {String} to 
         * @returns 
         */
        replaceString: function(str, from, to) {
            return str.split(from).join(to);
        },
        /** 
         * MySchema.set(object)   
         * MySchema.get(object)   
         * MySchema.test(object)   
         * MySchema.isValidType(constructor)   
         * MySchema.getValidType(constructor)   
         * MySchema.isValidValue(key, value)   
         * MySchema.getValidValue(key, value)    
         * @param {Object} __obj 
         */
        MySchema: function(__obj) {
            var Schema = this;
            var SchemaTypes = {
                Boolean: {
                    get: function(v) {
                        if (typeof(v) === "boolean") {
                            return true;
                        } else if (typeof(v) === "number" && (v === 1 || v === 0)) {
                            return true;
                        } else if (typeof(v) === "string" && (v === "true" || v === "false")) {
                            return true;
                        } else if (typeof(v) === "string" && (v === "1" || v === "0")) {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "boolean") {
                            return v;
                        } else if (typeof(v) === "number" && (v === 1 || v === 0)) {
                            return v === 1;
                        } else if (typeof(v) === "string" && (v === "true" || v === "false")) {
                            return v === "true";
                        } else if (typeof(v) === "string" && (v === "1" || v === "0")) {
                            return v === "1";
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                },
                Number: {
                    get: function(v) {
                        if (typeof(v) === "number") {
                            return true;
                        } else if (typeof(v) === "string" && !isNaN(parseFloat(v)) && isFinite(v)) {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "number") {
                            return v;
                        } else if (typeof(v) === "string" && !isNaN(parseFloat(v)) && isFinite(v)) {
                            return parseFloat(v);
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    },
                },
                String: {
                    get: function(v) {
                        if (typeof(v) === "string") {
                            return true;
                        } else if (typeof(v) === "number") {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "string") {
                            return v;
                        } else if (typeof(v) === "number") {
                            return v.toString(10);
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                },
                Array: {
                    get: function(v) {
                        if (typeof(v) === "object" && v !== null && Object.prototype.toString.call(v) === '[object Array]') {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "object" && v !== null && Object.prototype.toString.call(v) === '[object Array]') {
                            return v;
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                },
                Object: {
                    get: function(v) {
                        if (typeof(v) === "object" && v !== null && Object.prototype.toString.call(v) !== '[object Array]') {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "object" && v !== null && Object.prototype.toString.call(v) !== '[object Array]') {
                            return v;
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                },
                Date: {
                    get: function(v) {
                        if (typeof(v) === "object" && v instanceof Date && !isNaN(v.valueOf())) {
                            return true;
                        } else if (typeof(v) === "number") {
                            return true;
                        } else if (typeof(v) === "string") {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "object" && v instanceof Date && !isNaN(v.valueOf())) {
                            return v;
                        } else if (typeof(v) === "number") {
                            return new Date(v);
                        } else if (typeof(v) === "string") {
                            return new Date(v);
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                },
                RegExp: {
                    get: function(v) {
                        if (typeof(v) === "object" && v instanceof RegExp) {
                            return true;
                        } else if (typeof(v) === "string" && /^\/.*\/[gi]{0,1}$/.test(v)) {
                            return true;
                        } else if (v === null) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    set: function(v) {
                        if (typeof(v) === "object" && v instanceof RegExp) {
                            return v;
                        } else if (typeof(v) === "string" && /^\/.*\/[gi]{0,1}$/.test(v)) {
                            return new RegExp(v);
                        } else if (v === null) {
                            return null;
                        } else {
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                }
            };

            // constructor
            this.types = {};
            this.init = function(obj) {
                var keys = Object.keys(obj);
                var key;
                var val;
                var type;
                var i;
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    val = obj[key];
                    type = Schema.getValidType(val.type);
                    if (type) {
                        Schema.types[key] = {
                            get: type.get,
                            set: type.set,
                            default: val.default,
                            unique: val.unique,
                            capital: val.capital,
                        }
                    }
                }
            };
            this.get = function(obj) {
                var keys = Object.keys(obj);
                var key;
                var val;
                var i;
                var res = {};
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    val = obj[key];
                    res[key] = Schema.getValidValue(key, val);
                }
                return res;
            };
            this.test = function(obj) {
                var keys = Object.keys(obj);
                var key;
                var val;
                var i;
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    val = obj[key];
                    if (!Schema.isValidValue(key, val)) {
                        return false;
                    }
                }
                return true;
            };
            this.isValidType = function(__construtor) {
                try {
                    return typeof(SchemaTypes[__construtor.name]) === "object";
                } catch(err) {
                    return false;
                }
            };
            this.getValidType = function(__construtor) {
                try {
                    return SchemaTypes[__construtor.name];
                } catch(err) {
                    return undefined;
                }
            };
            this.isValidValue = function(key, val) {
                try {
                    return Schema.types[key].get(val);
                } catch(err) {
                    return false;
                }
            };
            this.getValidValue = function(key, val) {
                return Schema.types[key].set(val);
            };
            // alias
            this.set = Schema.init;
            this.add = Schema.init;
            this.save = Schema.get;
            this.convert = Schema.get;
            this.confirm = Schema.test;
            this.validate = Schema.test;
            // initialize this.types
            if (__obj) {
                this.init(__obj);
            }
        },
        /**
         * deprecated
         * @param {Object} dataObject 
         * @param {Object} queryObject 
         * @returns 
         */
        queryObject: function(dataObject, queryObject) {
            var isOperator = function(str) {
                return /^(\$and|\$or|\$nor|\$not|\$eq|\$ne|\$in|\$nin|\$gt|\$gte|\$lt|\$lte|\$exists)$/i.test(str);
            }
            var isLogicalOperator = function(str) {
                return /^(\$and|\$or|\$nor|\$not)$/i.test(str);
            }
            var isComparisonOperator = function(str) {
                return /^(\$eq|\$ne|\$in|\$nin|\$gt|\$gte|\$lt|\$lte)$/i.test(str);
            }
            var isElementOperator = function(str) {
                return /^(\$exists)$/i.test(str);
            }
            var isArrayOperator = function(str) {
                return /^(\$in|\$nin)$/i.test(str);
            }
            var isMatchOperator = function(str) {
                return /^(\$eq|\$ne)$/i.test(str);
            }
            var isNumberOperator = function(str) {
                return /^(\$gt|\$gte|\$lt|\$lte)$/i.test(str);
            }
            var isLoopOperator = function(str) {
                return /^(\$and|\$or|\$nor)$/i.test(str);
            }
            var isNotOperator = function(str) {
                return /^(\$not)$/i.test(str);
            }
            var isNorOperator = function(str) {
                return /^(\$nor)$/i.test(str);
            }
            var getType = function(any) {
                if (typeof(any) === "object") {
                    if (Object.prototype.toString.call(any) === '[object Array]') {
                        return "array";
                    } else if (any === null) {
                        return "null";
                    } else {
                        return "object";
                    }
                } else {
                    return typeof(any);
                }
            }
            var chkType = function(k, v) {
                var t = getType(v);
                var i;
                if (isLoopOperator(k)) {
                    // array of object
                    if (t === "array") {
                        for (i = 0; i < v.length; i++) {
                            if (getType(v[i]) !== "object") {
                                return false;
                            }
                        }
                    }
                } else if (isMatchOperator(k)) {
                    // not object, not array
                    if (t === "object" || t === "array") {
                        return false;
                    }
                } else if (isNumberOperator(k)) {
                    // number
                    if (t !== "number") {
                        return false;
                    }
                } else if (isArrayOperator(k)) {
                    // array
                    if (t !== "array") {
                        return false;
                    }
                } else if (isNotOperator(k)) {
                    // object
                    if (t !== "object") {
                        return false;
                    }
                } else if (isElementOperator(k)) {
                    // boolean
                    if (t !== "boolean" && v !== 1 && v !== 0 && v !== "true" && v !== "false" && v !== "1" && v !== "0") {
                        return false;
                    }
                }
                if (t === "function") {
                    return false;
                }
                return true;
            }
            var matchValue = function(o, dv, qv) {
                var qvt = getType(qv);
                var dvt = getType(dv);
                var i;
                switch(o) {
                    case "$eq":
                        return dvt === qvt && dv === qv;
                    case "$ne":
                        return dvt !== qvt || dv !== qv;
                    case "$in":
                        if (dvt === "array" || dvt === "object") {
                            return false;
                        }
                        return qv.indexOf(dv) > -1;
                    case "$nin":
                        if (dvt === "array" || dvt === "object") {
                            return false;
                        }
                        return qv.indexOf(dv) < 1;
                    case "$gt":
                        return dvt === qvt && dv > qv;
                    case "$gte":
                        return dvt === qvt && dv >= qv;
                    case "$lt":
                        return dvt === qvt && dv < qv;
                    case "$lte":
                        return dvt === qvt && dv <= qv;
                    case "$exists":
                        return dvt !== "undefined" || dvt !== "null";
                    default:
                        if (dvt === "array") {
                            if (qvt === "array") {
                                if (dv.length !== qv.length) {
                                    return false;
                                }
                                for (i = 0; i < dv.length; i++) {
                                    if (!matchValue(null, dv[i], qv[i])) {
                                        return false;
                                    }
                                }
                                return true;
                            } else {
                                for (i = 0; i < dv.length; i++) {
                                    if (matchValue(null, dv[i], qv)) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        }
                        if (dvt !== qvt) {
                            return false;
                        }
                        if (dvt === "object" && qvt === "object") {
                            return JSON.stringify(dv) === JSON.stringify(qv);
                        }
                        return dv === qv;
                }
            }
            var matchQuery = function(k, d, q) {
                var i;
                var qt = getType(q);
                var qv;
                var dv;
                var kv;
                var keys;
                var res = true;
                if (k && !chkType(k, q)) {
                    var err = new Error('invalid argument type');
                    err.name = "TypeError";
                    throw err;
                }
                if (isLoopOperator(k)) {
                    // logical operators without $not
                    kv = k;
                    dv = d;
                    keys = q;
                    res = (kv === "$and");
                    for (i = 0; i < keys.length; i++) {
                        qv = keys[i];
                        if (kv === "$and") {
                            res = res && matchQuery(null, dv, qv);
                        } else if (kv === "$or") {
                            res = res || matchQuery(null, dv, qv);
                        } else if (kv === "$nor") {
                            res = res || matchQuery(null, dv, qv);
                        }
                    }
                    if (isNorOperator(kv)) {
                        res = !res;
                    }
                } else if (qt === "object") {
                    // object, operators
                    keys = Object.keys(q);
                    for (i = 0; i < keys.length; i++) {
                        kv = keys[i];
                        dv = isOperator(kv) ? d : d[kv]; 
                        qv = q[kv];
                        if (isNotOperator(kv)) {
                            res = res && !matchQuery(kv, dv, qv);
                        } else {
                            res = res && matchQuery(kv, dv, qv);
                        }
                    }
                } else {
                    // match
                    kv = k;
                    dv = d;
                    qv = q;
                    res = res && matchValue(kv, dv, qv);
                }
                return res;
            }
            return matchQuery(null, dataObject, queryObject);
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        removeDuplicatesInArray: function(arr) {
            return arr.reduce(function(prev, curr) {
                if (prev.indexOf(curr) < 0) {
                    prev.push(curr);
                }
                return prev;
            }, []);
        },
        /**
         * 
         * @param {Number} deg 
         * @returns
         */
        getRadians: function(deg) {
            return deg * (Math.PI / 180);
        },
        /**
         * 
         * @param {Number} rad 
         * @returns 
         */
        getDegree: function(rad) {
            return rad * (180 / Math.PI);
        },
        /**
         * 
         * @param {Number} deg 
         * @returns
         */
        getScale: function(deg) {
            return Math.sin((deg + 90) * Math.PI / 180);
        },
        /**
         * MyRectangle.getState()   
         * MyRectangle.origin(x, y)   
         * MyRectangle.pivot(x, y)   
         * MyRectangle.translate(x, y)   
         * MyRectangle.resize(w, h)   
         * MyRectangle.scale(ratio)   
         * MyRectangle.rotate(degree)   
         * MyRectangle.rotateX(degree)   
         * MyRectangle.rotateY(degree)   
         * MyRectangle.fit(type, width, height)   
         * @param {Number} width 
         * @param {Number} height 
         */
        MyRectangle: function(width, height) {
            var Rect = this;
            var getDiagonal = function(w, h) {
                return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
            };
            var getScale = function(deg) {
                return Math.sin((deg+90)*Math.PI/180);
            };
            var getRadians = function(deg) {
                return deg*Math.PI/180;
            };
            var getVertex = function(px, py, x, y, d, dx, dy) {
                var radians = getRadians(d);
                var sinFraction = Math.sin(radians);
                var cosFraction = Math.cos(radians);
                var scaleX = getScale(dy);
                var scaleY = getScale(dx);
                return {
                    x: (x-px)*scaleX*cosFraction-(y-py)*scaleY*sinFraction+px,
                    y: (x-px)*scaleX*sinFraction+(y-py)*scaleY*cosFraction+py
                }
            };
            var getBoundingBox = function(a, b, c, d) {
                var x = Math.min(a.x, b.x, c.x, d.x);
                var y = Math.min(a.y, b.y, c.y, d.y);
                var w = Math.max(a.x, b.x, c.x, d.x)-Math.min(a.x, b.x, c.x, d.x);
                var h = Math.max(a.y, b.y, c.y, d.y)-Math.min(a.y, b.y, c.y, d.y);
                var px = x+w*0.5;
                var py = x+h*0.5;
                var vertexA = getVertex(px, py, x, y, 0, 0, 0);
                var vertexB = getVertex(px, py, x+w, y, 0, 0, 0);
                var vertexC = getVertex(px, py, x, y+h, 0, 0, 0);
                var vertexD = getVertex(px, py, x+w, y+h, 0, 0, 0);
                var diagonal = getDiagonal(w, h);
                return {
                    x: x,
                    y: y,
                    width: w,
                    height: h,
                    aspectRatio: w/h,
                    area: w*h,
                    degree: 0,
                    degreeX: 0,
                    degreeY: 0,
                    diagonal: diagonal,
                    vertexA: vertexA,
                    vertexB: vertexB,
                    vertexC: vertexC,
                    vertexD: vertexD,
                }
            };

            // constructor
            this.__state__ = {
                originX: 0,
                originY: 0,
                pivotX: null,
                pivotY: null,
                rectangleX: 0,
                rectangleY: 0,
                rectangleWidth: width,
                rectangleHeight: height,
                rectangleDegree: 0,
                rectangleDegreeX: 0,
                rectangleDegreeY: 0,
            };

            // methods
            this.getState = function() {
                var originX = this.__state__.originX;
                var originY = this.__state__.originY;
                var x1 = originX + this.__state__.rectangleX;
                var x2 = originX + this.__state__.rectangleX + this.__state__.rectangleWidth;
                var y1 = originY + this.__state__.rectangleY;
                var y2 = originY + this.__state__.rectangleY + this.__state__.rectangleHeight;
                var w = this.__state__.rectangleWidth;
                var h = this.__state__.rectangleHeight;
                var degree = this.__state__.rectangleDegree;
                var degreeX = this.__state__.rectangleDegreeX;
                var degreeY = this.__state__.rectangleDegreeY;
                var centerX = x1+w*0.5;
                var centerY = y1+h*0.5;
                var pivotX = typeof(this.__state__.pivotX) === "number" ? this.__state__.pivotX : centerX;
                var pivotY = typeof(this.__state__.pivotY) === "number" ? this.__state__.pivotY : centerY;
                
                // calc
                var area = w*h;
                var diagonal = getDiagonal(w, h);
                var vertexA = getVertex(pivotX, pivotY, x1, y1, degree, degreeX, degreeY);
                var vertexB = getVertex(pivotX, pivotY, x2, y1, degree, degreeX, degreeY);
                var vertexC = getVertex(pivotX, pivotY, x1, y2, degree, degreeX, degreeY);
                var vertexD = getVertex(pivotX, pivotY, x2, y2, degree, degreeX, degreeY);
                var boundingBox = getBoundingBox(vertexA, vertexB, vertexC, vertexD);
                return {
                    origin: {
                        x: originX,
                        y: originY
                    },
                    center: {
                        x: centerX,
                        y: centerY
                    },
                    pivot: {
                        x: pivotX,
                        y: pivotY
                    },
                    x: x1,
                    y: y1,
                    width: w,
                    height: h,
                    aspectRatio: w/h,
                    degree: degree,
                    area: area,
                    diagonal: diagonal,
                    vertexA: vertexA,
                    vertexB: vertexB,
                    vertexC: vertexC,
                    vertexD: vertexD,
                    boundingBox: boundingBox,
                }
            };
            this.origin = function(x, y) {
                this.__state__.originX = x;
                this.__state__.originY = y;
                return this;
            };
            this.pivot = function(x, y) {
                this.__state__.pivotX = x;
                this.__state__.pivotY = y;
                return this;
            };
            this.translate = function(x, y) {
                this.__state__.rectangleX = x;
                this.__state__.rectangleY = y;
                return this;
            };
            this.resize = function(w, h) {
                this.__state__.rectangleWidth = w;
                this.__state__.rectangleHeight = h;
                return this;
            };
            this.scale = function(n) {
                this.__state__.rectangleWidth = this.__state__.rectangleWidth * n;
                this.__state__.rectangleHeight = this.__state__.rectangleHeight * n;
                return this;
            };
            this.rotate = function(degree) {
                this.__state__.rectangleDegree = degree;
                return this;
            };
            this.rotateX = function(degree) {
                this.__state__.rectangleDegreeX = degree;
                return this;
            };
            this.rotateY = function(degree) {
                this.__state__.rectangleDegreeY = degree;
                return this;
            };
            this.fit = function(type, w, h) {
                var ar = this.__state__.rectangleWidth / this.__state__.rectangleHeight;
                var nw = this.__state__.rectangleWidth < 0; // is negative
                var nh = this.__state__.rectangleHeight < 0; // is negative
                var o = h * ar < w;
                if (type === "cover") {
                    this.__state__.rectangleWidth = Math.abs(o ? w : h*ar);
                    this.__state__.rectangleHeight = Math.abs(o ? w/ar : h);
                } else if (type === "contain") {
                    this.__state__.rectangleWidth = Math.abs(o ? h*ar : w);
                    this.__state__.rectangleHeight = Math.abs(o ? h : w/ar);
                } else {
                    var err = new Error('invalid argument type');
                    err.name = "TypeError";
                    throw err;
                }
                if (nw) {
                    this.__state__.rectangleWidth = -this.__state__.rectangleWidth;
                }
                if (nh) {
                    this.__state__.rectangleHeight = -this.__state__.rectangleHeight;
                }
                return this;
            };
        },
        /**
         * 
         * @param {Number} sw 
         * @param {Number} sh 
         * @param {Number} dw 
         * @param {Number} dh 
         * @returns 
         */
        getCoveredSize: function(sw, sh, dw, dh) {
            var aspectRatio = sw / sh;
            if (dh * aspectRatio < dw) {
                return {
                    width: dw,
                    height: dw / aspectRatio
                }
            } else {
                return {
                    width: dh * aspectRatio,
                    height: dh
                }
            }
        },
        /**
         *  
         * @param {Number} sw 
         * @param {Number} sh 
         * @param {Number} dw 
         * @param {Number} dh 
         * @returns 
         */
        getContainedSize: function(sw, sh, dw, dh) {
            var aspectRatio = sw / sh;
            if (dh * aspectRatio < dw) {
                return {
                    width: dh * aspectRatio,
                    height: dh
                }
            } else {
                return {
                    width: dw,
                    height: dw / aspectRatio
                }
            }
        },
        /**
         * 
         * @param {Number} sw source width 
         * @param {Number} sh source height
         * @param {Number} mxw max width
         * @param {Number} mxh max height
         * @param {Number} mnw min width
         * @param {Number} mnh min height
         * @returns 
         */
        getOptimumSize: function(sw, sh, mxw, mxh, mnw, mnh) {
            var aspectRatio = sw / sh;
            var maxWidth;
            var maxHeight;
            var minWidth;
            var minHeight;
            if (!mnw) {
                mnw = 0;
            }
            if (!mnh) {
                mnh = 0;
            }
            if (mxh * aspectRatio < mxw) {
                maxWidth = mxh * aspectRatio;
                maxHeight = mxh;
            } else {
                maxWidth = mxw;
                maxHeight = mxw / aspectRatio;
            }
            if (mnh * aspectRatio < mnw) {
                minWidth = mnw;
                minHeight = mnw / aspectRatio;
            } else {
                minWidth = mnh * aspectRatio;
                minHeight = mnh;
            }
            return {
                width: Math.min(maxWidth, Math.max(minWidth, sw)),
                height: Math.min(maxHeight, Math.max(minHeight, sh))
            }
        },
        /**
         * 
         * @param {Number} w width
         * @param {Number} h height
         * @param {Number} d degree
         * @returns 
         */
        getRotatedSize: function(w, h, d) {
            var radians = d * Math.PI / 180;
            var sinFraction = Math.sin(radians);
            var cosFraction = Math.cos(radians);
            if (sinFraction < 0) {
                sinFraction = -sinFraction;
            }
            if (cosFraction < 0) {
                cosFraction = -cosFraction;
            }
            return {
                width: (w * cosFraction) + (h * sinFraction),
                height: (w * sinFraction) + (h * cosFraction)
            }
        },
        /**
         * 
         * @param {Number} px PivotX
         * @param {Number} py PivotY
         * @param {Number} x RectangleX
         * @param {Number} y RectangleY
         * @param {Number} d RectangleDegree
         * @returns 
         */
        getVertex: function(px, py, x, y, d) {
            var radians = d * Math.PI / 180;
            var sinFraction = Math.sin(radians);
            var cosFraction = Math.cos(radians);
            return [
                (x-px)*cosFraction-(y-py)*sinFraction+px,
                (x-px)*sinFraction+(y-py)*cosFraction+py
            ];
        },
        /**
         * 
         * @param {Number} w 
         * @param {Number} h 
         * @returns 
         */
        getDiagonal: function(w, h) {
            return Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
        },
        /**
         * 
         * @param {Number} x1 
         * @param {Number} y1 
         * @param {Number} x2 
         * @param {Number} y2 
         */
        getDistance: function(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
        },
        /**
         * 
         * @param {Number} centerX 
         * @param {Number} centerY 
         * @param {Number} pointX 
         * @param {Number} pointY 
         * @returns 
         */
        getDegreeFromPoint: function(centerX, centerY, pointX, pointY) {
            return Math.atan2(pointX-centerX, pointY-centerY)*(180/Math.PI);
        },
        /**
         * 
         * @param {Array} dataArray 
         * @param {Function} promiseFunc 
         * @param {Any} initialValue 
         * @returns 
         */
        reducePromises: function(dataArray, promiseFunc, initialValue) {
            var promises = function() {
                return dataArray.reduce(function(prev, curr, index) {
                    return prev.then(function(res) {
                        return promiseFunc(res, curr, index);
                    });
                }, Promise.resolve(initialValue));
            }
            return promises();
        },
        /**
         * MyAnimation.start()   
         * MyAnimation.stop()   
         * MyAnimation.toggle()    
         * MyAnimation.reset()    
         * MyAnimation.clear()    
         * @param {Function} func 
         * @param {Number} delay 
         */
        MyAnimation: function(func, delay) {
            // constructor
            this.function = null;
            this.isStarted = false;
            this.count = 0;

            // methods
            this.init = function(f, d) {
                var self = this;
                this.function = setInterval(function() {
                    if (self.isStarted) {
                        self.count++;
                        f();
                    }
                }, d);
            };
            this.start = function() {
                this.isStarted = true;
                return this;
            };
            this.stop = function() {
                this.isStarted = false;
                return this;
            };
            this.toggle = function() {
                this.isStarted = this.isStarted === false;
                return this;
            };
            this.reset = function() {
                this.count = 0;
                return this;
            };
            this.clear = function() {
                if (this.function) {
                    clearInterval(this.function);
                }
                this.function = null;
                this.isStarted = false;
                return this;
            };
            this.callback = null;
            // alias
            this.go = this.start;
            this.pause = this.stop;
            this.end = this.stop;
            // initialize
            if (func && delay) {
                this.init(func, delay);
            }
        },
        /**
         * 
         * @param {Function} func 
         * @param {Number} delay 
         * @returns 
         */
        setTimeoutPromise: function(func, delay) {
            return new Promise(function(resolve, reject) {
                setTimeout(resolve, delay);
            }).then(func);
        },
        /**
         * 
         * @returns 
         */
        hasCanvas: function() {
            var element = document.createElement('canvas');
            return !!(element.getContext && element.getContext('2d'));
        },
        /**
         * 
         * @param {String} text 
         * @param {String} size 10px
         * @param {String} font serif
         * @returns 
         */
        getTextWidth: function(text, size, font) {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.font = size+" "+font;
            var metrics = ctx.measureText(text);
            return metrics.width;
        },
        /**
         * 
         * @param {Number} size 
         * @returns 
         */
        getTextHeight: function(size) {
            return size * 0.3; // incorrect
        },
        /**
         * 
         * @param {Blob} blob 
         * @param {Function} cb 
         */
        getImageData: function(blob, cb) {
            var canvas = document.createElement("canvas");
            var ctx = canvas && canvas.getContext("2d");
            var img = document.createElement("img");
            img.onload = function() {
                canvas.width = img.naturalWidth || img.width;
                canvas.height = img.naturalHeight || img.height;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
                return cb(null, {
                    img: img,
                    src: img.src,
                    canvas: canvas,
                    context: ctx,
                    imageData: data,
                });
            };
            img.onerror = function(err) {
                return cb(err);
            };
            img.src = URL.createObjectURL(blob);
        },
        /**
         * 
         * @param {Blob} blob 
         * @returns 
         */
        getImageDataPromise: function(blob) {
            return new Promise(function(resolve, reject) {
                var canvas = document.createElement("canvas");
                var ctx = canvas && canvas.getContext("2d");
                var img = document.createElement("img");
                img.onload = function() {
                    canvas.width = img.naturalWidth || img.width;
                    canvas.height = img.naturalHeight || img.height;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    resolve({
                        img: img,
                        src: img.src,
                        canvas: canvas,
                        context: ctx,
                        imageData: data,
                    });
                    return;
                };
                img.onload = function(err) {
                    reject(err);
                    return;
                };
                img.src = URL.createObjectURL(blob);
            });
        },
        /**
         * MyCanvas.getCanvas()     
         * MyCanvas.setCanvas(w, h)     
         * MyCanvas.drawDot(x, y, options)  
         * MyCanvas.drawLine(x1, y1, x2, y2 options)    
         * MyCanvas.drawRect(x, y, w, h, options)   
         * MyCanvas.drawCircle(x, y, radians, options)  
         * MyCanvas.drawText(x, y, text, options)   
         * MyCanvas.drawImage(x, y, w, h, img, options)     
         * MyCanvas.clear() 
         * @param {Number} width 
         * @param {Number} height 
         */
        MyCanvas: function MyCanvas(width, height) {
            var canvas = document.createElement('canvas');
            var ctx = canvas && canvas.getContext('2d');
            var getScale = function(deg) {
                return Math.sin((deg+90)*Math.PI/180);
            };
            var getRadians = function(deg) {
                return deg * Math.PI / 180;
            };
            var saveStyle = function() {
                ctx.save();
            };
            var unsetStyle = function() {
                ctx.restore();
            };
            var setStyle = function(options) {
                if (!options) {
                    return;
                }
                if (options.color) {
                    ctx.fillStyle = options.color;
                    ctx.strokeStyle = options.color;
                }
                if (options.width) {
                    ctx.lineWidth = options.width;
                }
                if (options.textAlign){
                    ctx.textAlign = options.textAlign;
                }
                if (options.textBaseline){
                    ctx.textBaseline = options.textBaseline;
                }
                if (options.font) {
                    ctx.font = options.font; // e.g. 10px serif
                }
                if (options.fontDirection) {
                    if (options.fontDirection > 0) {
                        ctx.direction = "ltr";
                    } else if (options.fontDirection < 0) {
                        ctx.direction = "rtl";
                    } else {
                        ctx.direction = "inherit";
                    }
                }
            };
            var setRotate = function(x, y, options) {
                if (!options || typeof(options.rotate) === "undefined") {
                    return;
                }
                var deg;
                var rad;
                var px;
                var py;
                if (typeof(options.rotate) === "object") {
                    deg = options.rotate.degree;
                    px = options.rotate.x;
                    py = options.rotate.y;
                }
                if (typeof(options.rotate) === "number") {
                    deg = options.rotate;
                    px = x;
                    py = y;
                }
                rad = getRadians(deg);
                ctx.translate(px, py);
                ctx.rotate(rad);
                ctx.translate(-px, -py); 
            };
            var setRotateX = function(x, y, options) {
                if (!options || typeof(options.rotateX) === "undefined") {
                    return;
                }
                var deg;
                var scale;
                var px;
                var py;
                if (typeof(options.rotateX) === "object") {
                    deg = options.rotateX.degree;
                    px = options.rotateX.x;
                    py = options.rotateX.y;
                }
                if (typeof(options.rotateX) === "number") {
                    deg = options.rotateX;
                    px = x;
                    py = y;
                }
                scale = getScale(deg);
                ctx.translate(px, py);
                ctx.scale(1, scale);
                ctx.translate(-px, -py);
            };
            var setRotateY = function(x, y, options) {
                if (!options || typeof(options.rotateY) === "undefined") {
                    return;
                }
                var deg;
                var scale;
                var px;
                var py;
                if (typeof(options.rotateY) === "object") {
                    deg = options.rotateY.degree;
                    px = options.rotateY.x;
                    py = options.rotateY.y;
                }
                if (typeof(options.rotateY) === "number") {
                    deg = options.rotateY;
                    px = x;
                    py = y;
                }
                scale = getScale(deg);
                ctx.translate(px, py);
                ctx.scale(scale, 1);
                ctx.translate(-px, -py);
            };

            canvas.width = width;
            canvas.height = height;

            // constructor
            this.canvas = canvas;
            this.context = ctx;
            this.width = canvas.width;
            this.height = canvas.height;

            // methods
            this.getCanvas = function() {
                return canvas;
            };
            this.setCanvas = function(w, h) {
                canvas.width = w;
                canvas.height = h;
                this.width = canvas.width;
                this.height = canvas.height;
                return this;
            };
            this.fit = function(type, w, h) {
                var ar = canvas.width / canvas.height;
                var nw = w < 0; // is negative
                var nh = h < 0; // is negative
                var o = h * ar < w;
                var rw, rh;
                if (type === "cover") {
                    rw = Math.abs(o ? w : h*ar);
                    rh = Math.abs(o ? w/ar : h);
                } else if (type === "contain") {
                    rw = Math.abs(o ? h*ar : w);
                    rh = Math.abs(o ? h : w/ar);
                } else {
                    var err = new Error('invalid argument type');
                    err.name = "TypeError";
                    throw err;
                }
                if (nw) {
                    rw = -rw;
                }
                if (nh) {
                    rh = -rh;
                }
                canvas.width = rw;
                canvas.height = rh;
                this.width = canvas.width;
                this.height = canvas.height;
                return this;
            };
            this.drawDot = function(x, y, options) {
                var cx = x;
                var cy = y;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.fillRect(cx, cy, 1, 1);
                unsetStyle();
                return this;
            };
            this.drawLine = function(sx, sy, dx, dy, options) {
                var cx = (sx+dx)*0.5;
                var cy = (sy+dy)*0.5;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.beginPath();
                ctx.moveTo(sx+0.5, sy+0.5); // fix starting half pixel
                ctx.lineTo(dx+0.5, dy+0.5); // fix starting half pixel
                ctx.stroke();
                ctx.closePath();
                unsetStyle();
                return this;
            };
            this.drawRectangle = function(x, y, w, h, options) {
                var cx = x+w*0.5;
                var cy = y+h*0.5;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                if (options && options.fill) {
                    ctx.fillRect(x, y, w+1, h+1); // fix starting half pixel
                } else {
                    ctx.strokeRect(x+0.5, y+0.5, w, h); // fix starting half pixel
                }
                unsetStyle();
                return this;
            };
            this.drawCircle = function(x, y, rad, options) {
                var cx = x+rad;
                var cy = y+rad;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.beginPath();
                if (options && options.fill) {
                    ctx.arc(cx+0.5, cy+0.5, rad+0.5, 0, 2*Math.PI); // fix starting half pixel
                    ctx.fill();
                } else {
                    ctx.arc(cx+0.5, cy+0.5, rad, 0, 2*Math.PI); // fix starting half pixel
                    ctx.stroke();
                }
                ctx.closePath();
                unsetStyle();
                return this;
            };
            this.drawEllipse = function(x, y, rx, ry, options) {
                var cx = x+rx;
                var cy = y+ry;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx, ry, 0, 0, 2*Math.PI);
                if (options && options.fill) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
                ctx.closePath();
                unsetStyle();
                return this;
            };
            this.drawText = function(x, y, text, options) {
                saveStyle();
                setStyle(options);
                var metrics = ctx.measureText(text);
                var size = /(\d+)px/.exec(ctx.font)[1];
                var height = parseInt(size) * 0.3; // incorrect
                var cx = x + metrics.width * 0.5;
                var cy = y - height;
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.fillText(text, x, y);
                unsetStyle();
                return this;
            };
            this.drawImage = function(x, y, w, h, img, options) {
                var cx = x+w*0.5;
                var cy = y+h*0.5;
                var dx = x;
                var dy = y;
                var dw = w || img.naturalWidth || img.width;
                var dh = h || img.naturalHeight || img.height;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.drawImage(img, dx, dy, dw, dh);
                unsetStyle();
                return this;
            };
            this.loadImage = function(blob, cb) {
                var img = new Image();
                img.onload = function() {
                    return cb(null, img);
                };
                img.onerror = function(err) {
                    return cb(err);
                };
                if (blob instanceof Blob) {
                    try {
                        img.src = URL.createObjectURL(blob);
                    } catch(err) {
                        return cb(err);
                    }
                } else {
                    img.src = src;
                };
            };
            this.getImageData = function(x, y, w, h) {
                return ctx.getImageData(x || 0, y || 0, w || canvas.width, h || canvas.height);
            };
            this.putImageData = function(x, y, imageData) {
                return ctx.putImageData(imageData, x || 0, y || 0);
            };
            this.slice = function(x, y, w, h) {
                var __canvas = document.createElement("canvas");
                var __ctx = __canvas.getContext("2d");
                var sx = x;
                var sy = y;
                var sw = w;
                var sh = h;
                var dx = 0;
                var dy = 0;
                var dw = w;
                var dh = h;
                __canvas.width = dw;
                __canvas.height = dh;
                __ctx.drawImage(canvas, sx, sy, sw, sh, dx, dy, dw, dh);
                return __canvas;
            };
            this.clear = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                return this;
            };
            // alias
            this.drawRect = this.drawRectangle;
            this.drawImg = this.drawImage;

            // initialize
            ctx.strokeStyle = "#000000";
            ctx.fillStyle = "#000000";
            ctx.lineWidth = 1;
            ctx.font = "10px serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "alphabetic";
            ctx.save();
        },
        /**
         * 
         * @returns 
         */
        getMaxCanvasSize: function() {
            var w = [8388607, 4194303, 65535, 32767, 16384, 8192, 4096, 1];
            var h = [8388607, 4194303, 65535, 32767, 16384, 8192, 4096, 1];
            var a = [65535, 32767, 16384, 14188, 11402, 11180, 10836, 8192, 4096, 1];
            var mxw;
            var mxh;
            var mxa;
            var i;
            var testCanvas = function(_w, _h) {
                var drawCanvas = document.createElement("canvas");
                var drawCtx = drawCanvas.getContext("2d");
                var testCanvas = document.createElement("canvas");
                var testCtx = testCanvas.getContext("2d");
                drawCanvas.width = _w;
                drawCanvas.height = _h;
                testCanvas.width = 1;
                testCanvas.height = 1;
                drawCtx.fillStyle = "#123123";
                drawCtx.fillRect(_w - 1, _h - 1, 1, 1);
                testCtx.drawImage(drawCanvas, _w - 1, _h - 1, 1, 1, 0, 0, 1, 1);
                return testCtx.getImageData(0, 0, 1, 1).data[3] !== 0;
            }
            for (i = 0; i < w.length; i++) {
                if (testCanvas(w[i], 1)) {
                    mxw = w[i];
                    break;
                }
            }
            for (i = 0; i < h.length; i++) {
                if (testCanvas(1, h[i])) {
                    mxh = h[i];
                    break;
                }
            }
            for (i = 0; i < a.length; i++) {
                if (testCanvas(a[i], a[i])) {
                    mxa = a[i];
                    break;
                }
            }
            return {
                width: mxw,
                height: mxw,
                area: {
                    width: mxa,
                    height: mxa
                }
            }
        },
        /**
         * 
         * @param {Blob} blob
         * @param {Function} cb Callback
         * @returns 
         */
        loadImage: function(blob, cb) {
            var img = new Image();
            img.onload = function() {
                return cb(null, img);
            };
            img.onerror = function(err) {
                return cb(err);
            };
            if (blob instanceof Blob) {
                try {
                    img.src = URL.createObjectURL(blob);
                } catch(err) {
                    return cb(err);
                }
            } else {
                img.src = blob;
            }
        },
        /**
         * 
         * @param {Blob} blob
         * @returns Promise
         */
        loadImagePromise: function(blob) {
            return new Promise(function(resolve, reject) {
                var img = new Image();
                img.onload = function() {
                    resolve(img);
                    return;
                }
                img.onerror = function(err) {
                    reject(err);
                    return;
                }
                if (src instanceof Blob) {
                    try {
                        img.src = URL.createObjectURL(blob);
                    } catch(err) {
                        reject(err);
                        return;
                    }
                } else {
                    img.src = blob;
                }
            });
        },
        /**
         * 
         * @param {Blob} file File, Blob or MediaSource
         * @returns 
         */
        getObjectURL: function(file) {
            return URL.createObjectURL(file);
        },
        /**
         * 
         * @param {String} url 
         * @returns 
         */
        removeObjectURL: function(url) {
            URL.revokeObjectURL(url);
            return true;
        },
        /**
         * 
         * @param {Stinrg} str 
         * @returns Array
         */
        getSentences: function(str) {
            return str.split(/(?:\r\n|\r|\n|[.]+\s+|[?!]+\s*|[.]$)/).filter(function(s) {
                return s.replace(/\s/g, "") !== "";
            });
        },
        /**
         * 
         * @param {String} str 
         * @returns Array
         */
        getWords: function(str) {
            return str.split(/\s*(?:\s+|\r\n+|\r+|\n+|[.,·()!?]+)\s*/).filter(function(w) {
                return w.replace(/\s/g, "") !== "";
            });
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        hasKorean: function(str) {
            var koreanChar = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
            var koreanCharUnicode = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
            var completedKoreanChar = /[가-힣]/;
            var completedKoreanCharUnicode = /\uac00-\ud7a3]/;
            var uncompletedKoreanChar = /[ㄱ-ㅎㅏ-ㅣ]/;
            var uncompletedKoreanCharUnicode = /[\u3131-\u314e\u314f-\u3163]/;
            var koreanConsonants = /[ㄱ-ㅎ]/;
            var koreanConsonantsUnicode = /[\u3131-\u314e]/;
            var koreanVowels = /[ㅏ-ㅣ]/;
            var koreanVowelsUnicode = /[\u314f-\u3163]/;
            var japanese = /[ぁ-ゔ]+|[ァ-ヴー]+[々〆〤]/;
            return koreanChar.test(str);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        stringToCode: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while(i < len) {
                c = str[i++].codePointAt(0);
                res.push(c);
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        stringToUnicode: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while(i < len) {
                c = "\\u"+("000"+str[i++].codePointAt(0).toString(16)).slice(-4);
                res.push(c);
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        stringToBinary: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while(i < len) {
                c = str[i++].codePointAt(0).toString(2);
                res.push(c);
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        stringToDecimal: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while(i < len) {
                c = str[i++].codePointAt(0);
                res.push(c);
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        stringToHex: function(str, pad) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while(i < len) {
                c = str[i++].codePointAt(0).toString(16);
                res.push(c);
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns
         */
        stringToUtf8: function(str) {
            var res = [];
            var len = str.length;
            var i = 0;
            var c;
            while(i < len) {
                c = str[i++].codePointAt(0);
                if (c < 0x0080) {
                    // code point range: U+0000 - U+007F
                    res.push(c);
                } else if (c < 0x0800) {
                    // code point range: U+0080 - U+07FF
                    res.push(0xC0 | (c >> 6),
                        0x80 | (c & 0x3F));
                } else if (c < 0xD800 || c >= 0xE000 ) {
                    // code point range: U+0800 - U+FFFF
                    res.push(0xE0 | (c >> 12),
                        0x80 | ((c >> 6) & 0x3F),
                        0x80 | (c & 0x3F));
                } else {
                    // surrogate pair
                    // code point range: U+10000 - U+10FFFF
                    c = 0x00010000 + ((c & 0x03FF) << 10) | (str[i++].codePointAt(0) & 0x03FF);
                    res.push(0xF0 | (c >> 18),
                        0x80 | ((c >> 12) & 0x3F),
                        0x80 | ((c >> 6) & 0x3F),
                        0x80 | (c & 0x3F));
                }
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns
         */
        stringToUtf16le: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while (i < len) {
                c = str[i++].codePointAt(0);
                if (c <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(c, 0);
                } else if (c <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(c & 0xFF,
                        ((c >> 8) & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns
         */
        stringToUtf16be: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var c;
            while (i < len) {
                c = str[i++].codePointAt(0);
                if (c <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(0, c);
                } else if (c <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(c >> 8 & 0xFF,
                        c & 0xFF);
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        codeToString: function(arr) {
            var res = "";
            var i = 0;
            var len = arr.length;
            while(i < len) {
                res += String.fromCodePoint(arr[i++]);
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        codeToBinary: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            while(i < len) {
                res.push(arr[i++].toString(2));
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        codeToHex: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            while(i < len) {
                res.push(arr[i++].toString(16));
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        codeToUtf8: function(arr) {
            var res = [];
            var len = arr.length;
            var i = 0;
            var c;
            while(i < len) {
                c = arr[i++];
                if (c < 0x0080) {
                    // code point range: U+0000 - U+007F
                    res.push(c);
                } else if (c < 0x0800) {
                    // code point range: U+0080 - U+07FF
                    res.push(0xC0 | (c >> 6),
                        0x80 | (c & 0x3F));
                } else if (c < 0xD800 || c >= 0xE000 ) {
                    // code point range: U+0800 - U+FFFF
                    res.push(0xE0 | (c >> 12),
                        0x80 | ((c >> 6) & 0x3F),
                        0x80 | (c & 0x3F));
                } else {
                    // surrogate pair
                    // code point range: U+10000 - U+10FFFF
                    c = 0x00010000 + ((c & 0x03FF) << 10) | (arr[i++] & 0x03FF);
                    res.push(0xF0 | (c >> 18),
                        0x80 | ((c >> 12) & 0x3F),
                        0x80 | ((c >> 6) & 0x3F),
                        0x80 | (c & 0x3F));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns
         */
        codeToUtf16le: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var c;
            while (i < len) {
                c = arr[i++];
                if (c <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(c, 0);
                } else if (c <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(c & 0xFF,
                        ((c >> 8) & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns
         */
        codeToUtf16be: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var c;
            while (i < len) {
                c = arr[i++];
                if (c <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(0, c);
                } else if (c <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(c >> 8 & 0xFF,
                        c & 0xFF);
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf8ToCode: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var c1, c2, c3;
            while (i < len) {
                c1 = arr[i++];
                switch(c1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res.push(c1);
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        res.push(((c1 & 0x1F) << 6) | 
                            (c2 & 0x3F));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        c3 = arr[i++];
                        res.push(((c1 & 0x0F) << 12) | 
                            ((c2 & 0x3F) << 6) | 
                            ((c3 & 0x3F) << 0));
                        break;
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf8ToBinary: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var c1, c2, c3;
            while (i < len) {
                c1 = arr[i++];
                switch(c1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res.push(c1.toString(2));
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        res.push((((c1 & 0x1F) << 6) | 
                            (c2 & 0x3F)).toString(2));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        c3 = arr[i++];
                        res.push((((c1 & 0x0F) << 12) | 
                            ((c2 & 0x3F) << 6) | 
                            ((c3 & 0x3F) << 0)).toString(2));
                        break;
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf8ToHex: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var c1, c2, c3;
            while (i < len) {
                c1 = arr[i++];
                switch(c1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res.push(c1.toString(16));
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        res.push((((c1 & 0x1F) << 6) | 
                            (c2 & 0x3F)).toString(16));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        c3 = arr[i++];
                        res.push((((c1 & 0x0F) << 12) | 
                            ((c2 & 0x3F) << 6) | 
                            ((c3 & 0x3F) << 0)).toString(16));
                        break;
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr Uint8Array
         * @returns String
         */
        utf8ToString: function(arr) {
            var res = "";
            var len = arr.length;
            var i = 0;
            var c1, c2, c3;
            while (i < len) {
                c1 = arr[i++];
                switch(c1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res += String.fromCodePoint(c1);
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        res += String.fromCodePoint(((c1 & 0x1F) << 6) |
                            (c2 & 0x3F));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        c2 = arr[i++];
                        c3 = arr[i++];
                        res += String.fromCodePoint(((c1 & 0x0F) << 12) |
                            ((c2 & 0x3F) << 6) |
                            ((c3 & 0x3F) << 0));
                        break;
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16leToCode: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c2 === 0) {
                    res.push(c1);
                } else {
                    res.push(((c2 & 0xFF) << 8) |
                        (c1 & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16leToBinary: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c2 === 0) {
                    res.push(c1.toString(2));
                } else {
                    res.push((((c2 & 0xFF) << 8) |
                        (c1 & 0xFF)).toString(2));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16leToHex: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c2 === 0) {
                    res.push(c1.toString(16));
                } else {
                    res.push((((c2 & 0xFF) << 8) |
                        (c1 & 0xFF)).toString(16));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16leToString: function(arr) {
            var res = "";
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c2 === 0) {
                    res += String.fromCodePoint(c1);
                } else {
                    res += String.fromCodePoint(((c2 & 0xFF) << 8) |
                        (c1 & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16beToCode: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c1 === 0) {
                    res.push(c2);
                } else {
                    res.push(((c1 & 0xFF) << 8) |
                        (c2 & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16beToBinary: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c1 === 0) {
                    res.push(c2.toString(2));
                } else {
                    res.push((((c1 & 0xFF) << 8) |
                        (c2 & 0xFF)).toString(2));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16beToHex: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c1 === 0) {
                    res.push(c2.toString(16));
                } else {
                    res.push((((c1 & 0xFF) << 8) |
                        (c2 & 0xFF)).toString(16));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16beToString: function(arr) {
            var res = "";
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var c1, c2;
            while (i < len) {
                c1 = arr[i++];
                c2 = arr[i++];
                if (c1 === 0) {
                    res += String.fromCodePoint(c1);
                } else {
                    res += String.fromCodePoint(((c1 & 0xFF) << 8) | 
                        (c2 & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        padToHex: function(arr) {
            return arr.map(function(hex) {
                return "0x" +("000" + hex.toUpperCase()).slice(-4);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        padToBinary: function(arr) {
            return arr.map(function(bin) {
                return "0b" + bin.toUpperCase();
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        padToUnicode: function(arr) {
            return arr.map(function(code) {
                return "\\u" + ("000" + code.toString(16)).slice(-4);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        decimalToBinary: function(arr) {
            return arr.map(function(code) {
                return code.toString(2);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        decimalToHex: function(arr) {
            return arr.map(function(code) {
                return code.toString(16);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        binaryToDecimal: function(arr) {
            return arr.map(function(bin) {
                return parseInt(bin, 2);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        binaryToHex: function(arr) {
            return arr.map(function(bin) {
                return parseInt(bin, 2).toString(16);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        hexToDecimal: function(arr) {
            return arr.map(function(hex) {
                return parseInt(hex, 16);
            });
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        hexToBinary: function(arr) {
            return arr.map(function(hex) {
                return parseInt(hex, 16).toString(2);
            });
        },
        /**
         * 
         * @param {ImageData} imageData 
         * @param {Number} x 
         * @param {Number} y 
         * @returns
         */
        getPixel: function(imageData, x, y) {
            var w = imageData.width;
            var h = imageData.height;
            var i = ((x-1+w)%w+w*((y-1+h)%h))*4;
            return [
                imageData.data[i],
                imageData.data[i+1],
                imageData.data[i+2],
                imageData.data[i+3],
            ];
        },
        /**
         * 
         * @param {Number} x 
         * @param {Number} y 
         * @param {Number} w 
         * @param {Number} h 
         * @returns 
         */
        getPixelIndex: function(x, y, w, h) {
            return ((x-1+w)%w+w*((y-1+h)%h))*4;
            // return (x+y*w)*4;
        },
        /**
         * 
         * @param {ImageData} imageData 
         * @returns ImageData
         */
        setGrayscaleFilter: function(imageData) {
            var data1 = imageData.data;
            var len = data1.length;
            var w = imageData.width;
            var h = imageData.height;
            var data2 = [];
            var i = 0;
            var r, g, b, a;
            var avg;

            while(i < len) {
                r = data1[i];
                g = data1[i+1];
                b = data1[i+2];
                a = data1[i+3];
                avg = r*0.3 + g*0.59 + b*0.11;
                data2[i] = avg;
                data2[i+1] = avg;
                data2[i+2] = avg;
                data2[i+3] = 255;
                i += 4;
            }

            return new ImageData(new Uint8ClampedArray(data2), w, h);
        },
        /**
         * 
         * @param {ImageData} imageData 
         * @returns ImageData
         */
        setMonochromeFilter: function(imageData) {
            var data1 = imageData.data;
            var len = data1.length;
            var w = imageData.width;
            var h = imageData.height;
            var data2 = [];
            var i = 0;
            var r, g, b, a;
            var avg;

            while(i < len) {
                r = data1[i];
                g = data1[i+1];
                b = data1[i+2];
                a = data1[i+3];
                avg = r+g+b > 383 ? 255 : 0;
                data2[i] = avg;
                data2[i+1] = avg;
                data2[i+2] = avg;
                data2[i+3] = 255;
                i += 4;
            }

            return new ImageData(new Uint8ClampedArray(data2), w, h);
        },
        /**
         * Not tested
         * @param {ImageData} _imageData 
         * @param {Number} _sigma 
         * @returns 
         */
        setGaussianFilter: function(_imageData, _sigma) {
            var getGaussKernel = function(sigma) {
                var GAUSSKERN = 6.0;
                var dim = parseInt(Math.max(3.0, GAUSSKERN * sigma));
                var sqrtSigmaPi2 = Math.sqrt(Math.PI*2.0)*sigma;
                var s2 = 2.0 * sigma * sigma;
                var sum = 0.0;
                
                var kernel = new Float32Array(dim - !(dim & 1)); // Make it odd number
                var half = parseInt(kernel.length / 2);
                for (var j = 0, i = -half; j < kernel.length; i++, j++) {
                    kernel[j] = Math.exp(-(i*i)/(s2)) / sqrtSigmaPi2;
                    sum += kernel[j];
                }
                // Normalize the gaussian kernel to prevent image darkening/brightening
                for (var i = 0; i < dim; i++) {
                    kernel[i] /= sum;
                }
                return kernel;
            }

            var setGaussKernel = function(imageData, kernel, ch, gray) {
                var data = imageData.data;
                var w = imageData.width;
                var h = imageData.height;
                var buff = new Uint8Array(w*h);
                var mk = Math.floor(kernel.length / 2);
                var kl = kernel.length;
    
                // First step process columns
                for (var j = 0, hw = 0; j < h; j++, hw += w) {
                    for (var i = 0; i < w; i++) {
                        var sum = 0;
                        for (var k = 0; k < kl; k++) {
                            var col = i + (k - mk);
                            col = (col < 0) ? 0 : ((col >= w) ? w - 1 : col);
                            sum += data[(hw + col)*4 + ch]*kernel[k];
                        }
                        buff[hw + i] = sum;
                    }
                }
                
                // Second step process rows
                for (var j = 0, offset = 0; j < h; j++, offset += w) {
                    for (var i = 0; i < w; i++) {
                        var sum = 0;
                        for (k = 0; k < kl; k++) {
                            var row = j + (k - mk);
                            row = (row < 0) ? 0 : ((row >= h) ? h - 1 : row);
                            sum += buff[(row*w + i)]*kernel[k];
                        }
                        var off = (j*w + i)*4;
                        if (!gray) {
                            data[off + ch] = sum;
                        } else {
                            data[off] = data[off + 1] = data[off + 2] = sum;
                        }
                    }
                }
            }

            var _kernel = getGaussKernel(_sigma);
            
            // Blur a cahnnel (RGB or Grayscale)
            for (var _ch = 0; _ch < 3; _ch++){
                setGaussKernel(_imageData, _kernel, _ch, false);
            }
            return _imageData;
        },
        /**
         * 
         * @param {ImageData} imageData from canvas.context('2d').getImageData()
         * @returns ImageData
         */
        setSobelFilter: function(imageData) {
            // x-direciton kernel
            var kx = [[-1, 0, 1],
                      [-2, 0, 2],
                      [-1, 0, 1]];
            // y-direction kernel
            var ky = [[-1,-2,-1],
                      [0, 0, 0],
                      [1, 2, 1]];

            var map = function(value, mn1, mx1, mn2, mx2) {
                if (value < mn1) {
                    value = mn1;
                }
                if (value > mx1) {
                    value = mx1;
                }
                return (value/(mx1-mn1))*(mx2-mn2)+mn2;
            }

            var data1 = imageData.data;
            var w = imageData.width;
            var h = imageData.height;
            var data2 = [];

            var len = data1.length;
            var i = 0;
            var r, g, b, a;
            var avg;

            // grayscale
            while(i < len) {
                r = data1[i];
                g = data1[i+1];
                b = data1[i+2];
                a = data1[i+3];
                avg = r*0.3 + g*0.59 + b*0.11;
                data1[i] = avg;
                data1[i+1] = avg;
                data1[i+2] = avg;
                data1[i+3] = 255;
                i += 4;
            }

            var x, y;
            var ul, um, ur, ml, mc, mr, ll, lm, lr;
            var p0, p1, p2, p3, p4, p5, p6, p7, p8;
            var res, r1, r2;
            for (x = 0; x < w; x++) {
                for (y = 0; y < h; y++) {
                    // index position in pixel list
                    ul = ((x-1+w)%w+w*((y-1+h)%h))*4; // location of the UPPER LEFT
                    um = ((x-0+w)%w+w*((y-1+h)%h))*4; // location of the UPPER MID
                    ur = ((x+1+w)%w+w*((y-1+h)%h))*4; // location of the UPPER RIGHT
                    ml = ((x-1+w)%w+w*((y+0+h)%h))*4; // location of the MIDDLE LEFT
                    mc = ((x-0+w)%w+w*((y+0+h)%h))*4; // location of the MIDDLE CENTER
                    mr = ((x+1+w)%w+w*((y+0+h)%h))*4; // location of the MIDDLE RIGHT
                    ll = ((x-1+w)%w+w*((y+1+h)%h))*4; // location of the LOWER LEFT
                    lm = ((x-0+w)%w+w*((y+1+h)%h))*4; // location of the LOWER MID
                    lr = ((x+1+w)%w+w*((y+1+h)%h))*4; // location of the LOWER RIGHT

                    // green channel only
                    p0 = data1[ul+1]*kx[0][0]; // upper left
                    p1 = data1[um+1]*kx[0][1]; // upper mid
                    p2 = data1[ur+1]*kx[0][2]; // upper right
                    p3 = data1[ml+1]*kx[1][0]; // middle left
                    p4 = data1[mc+1]*kx[1][1]; // middle center
                    p5 = data1[mr+1]*kx[1][2]; // middle right
                    p6 = data1[ll+1]*kx[2][0]; // lower left
                    p7 = data1[lm+1]*kx[2][1]; // lower mid
                    p8 = data1[lr+1]*kx[2][2]; // lower right
                    r1 = p0+p1+p2+p3+p4+p5+p6+p7+p8; 

                    p0 = data1[ul+1]*ky[0][0]; // upper left
                    p1 = data1[um+1]*ky[0][1]; // upper mid
                    p2 = data1[ur+1]*ky[0][2]; // upper right
                    p3 = data1[ml+1]*ky[1][0]; // middle left
                    p4 = data1[mc+1]*ky[1][1]; // middle center
                    p5 = data1[mr+1]*ky[1][2]; // middle right
                    p6 = data1[ll+1]*ky[2][0]; // lower left
                    p7 = data1[lm+1]*ky[2][1]; // lower mid
                    p8 = data1[lr+1]*ky[2][2]; // lower right
                    r2 = p0+p1+p2+p3+p4+p5+p6+p7+p8; 

                    // r1 = Gradient in x-direction
                    // r2 = Gradient in y-direction
                    // 0 = minumim possible result
                    // 1414 = maximum possible result
                    res = map(Math.sqrt(Math.pow(r1, 2)+Math.pow(r2, 2)), 0, 1414, 0, 255);

                    data2[mc] = res;     // r
                    data2[mc+1] = res;   // g
                    data2[mc+2] = res;   // b
                    data2[mc+3] = 255;   // a
                }
            }

            return new ImageData(new Uint8ClampedArray(data2), w, h);
        },
        /**
         * 
         * @param {Element} element 
         * @param {Function} cb 
         */
        setPinchGesture: function(element, cb) {
            var caches = [];
            var prevDiff = -1;
            var getCacheIndex = function(e) {
                return caches.findIndex(function(c) {
                    return c.pointerId === e.pointerId;
                });
            };
            var saveCache = function(c) {
                caches.push(c);
            };
            var updateCache = function(e) {
                var i = getCacheIndex(e);
                if (i > -1) {
                    caches[i] = e;
                }
            };
            var removeCache = function(e) {
                var i = getCacheIndex(e);
                if (i > -1) {
                    caches.splice(i, 1);
                }
                if (caches.length < 2) {
                    prevDiff = -1;
                }
            };
            var getDiff = function(a, b) {
                var w = Math.abs(a.clientX - b.clientX);
                var h = Math.abs(a.clientY - b.clientY);
                return Math.sqrt(Math.pow(w, 2)+Math.pow(h, 2));
            };
            element.addEventListener("pointerdown", saveCache);
            element.addEventListener("pointermove", function(e) {
                updateCache(e);
                var currDiff;
                if (caches.length === 2) {
                    currDiff = getDiff(caches[0], caches[1]);
                    if (prevDiff > 0) {
                        return cb(currDiff - prevDiff);
                    } else {
                        prevDiff = currDiff;
                    }
                }
            });
            element.addEventListener("pointerup", removeCache);
            element.addEventListener("pointercancel", removeCache);
            element.addEventListener("pointerout", removeCache);
            element.addEventListener("pointerleave", removeCache);
        },
        /**
         * 
         * @returns 
         */
        getHost: function() {
            return window.location;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        isHexString: function(str) {
            var i = 0;
            var len = str.length;
            var re = /^(?:0x)?[0-9A-Fa-f]{2}$/;
            var hex, ch1, ch2;
            while(i < len) {
                ch1 = str[i++];
                ch2 = str[i++];
                hex = ch1+ch2;
                if (!ch2 || !re.test(hex)) {
                    return false;
                }
            }
            return true;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        splitHexString: function(str) {
            var i = 0;
            var len = str.length;
            var re = /^(?:0x)?[0-9A-Fa-f]{2}$/;
            var hex, ch1, ch2;
            var res = [];
            while(i < len) {
                ch1 = str[i++];
                ch2 = str[i++];
                hex = ch1+ch2;
                if (!ch2 || !re.test(hex)) {
                    res.push(hex);
                }
                res.push(hex);
            }
            return res;
        },
        /**
         * 
         * @param {Event} prevEvt 
         * @param {Event} currEvt 
         * @returns 
         */
        getScrollVelocity: function(prevEvt, currEvt) {
            var delay = currEvt.timeStamp - prevEvt.timeStamp;
            var x = currEvt.scrollTop - prevEvt.scrollTop;
            var y = currEvt.scrollLeft - prevEvt.scrollLeft;
            return {
                x: Math.abs(x / delay),
                y: Math.abs(y / delay),
            }
        },
        /**
         * 
         * @param {Number} distance px
         * @param {Number} delay ms
         * @returns 
         */
        getVelocity: function(distance, delay) {
            return distance / delay;
        },
        /**
         * 
         * @param {Number} a 
         * @param {Number} b 
         * @returns 
         */
        getDistance: function(a, b) {
            return Math.abs(a - b);
        },
        /**
         * 
         * @returns 
         */
        isPassiveSupported: function() {
            var passiveSupported = false;
            try {
                var options = {
                    get passive() {
                        passiveSupported = true;
                        return false;
                    }
                };
                window.addEventListener("test", null, options);
                window.removeEventListener("test", null, options);
            } catch(err) {
                passiveSupported = false;
            }
            return passiveSupported;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        reverseArray: function(arr) {
            var res = [];
            for (var i = arr.length - 1; i >= 0; i--) {
                res.push(arr[i]);
            }
            return res;
        },
        /**
         * 
         * @param {String} a 
         * @param {String} b 
         * @returns 
         */
        compare: function(a, b) {
            var aa = (typeof(a) !== "string") ? [a] : a.split(/(\d+|[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]+)/).filter(Boolean);
            var bb = (typeof(b) !== "string") ? [b] : b.split(/(\d+|[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]+)/).filter(Boolean);
            var i = 0;
            var l = Math.max(aa.length, bb.length);
            var str1, str2, type1, type2;
            while(i < l) {
                str1 = (!isNaN(parseFloat(aa[i])) && isFinite(aa[i])) ? parseInt(aa[i]) : aa[i];
                str2 = (!isNaN(parseFloat(bb[i])) && isFinite(bb[i])) ? parseInt(bb[i]) : bb[i];
                type1 = typeof(str1);
                type2 = typeof(str2);
                if (type1 !== type2) {
                    if (type1 === "undefined") {
                        return 1;
                    } else if (type2 === "undefined") {
                        return -1;
                    } else if (type1 === "object") {
                        return 1;
                    } else if (type2 === "object") {
                        return -1;
                    } else if (type1 === "number") {
                        str1 = str1.toString(10);
                        type1 = typeof(str1);
                    } else if (type2 === "number") {
                        str2 = str2.toString(10);
                        type2 = typeof(str2);
                    }
                }
                if (type1 === "number") {
                    if (str1 > str2) {
                        return 1;
                    }
                    if (str1 < str2) {
                        return -1;
                    }
                } else if (type1 === "string") {
                    if (str1.localeCompare(str2, "en", {sensitivity: "base"}) > 0) {
                        return 1;
                    }
                    if (str2.localeCompare(str1, "en", {sensitivity: "base"}) > 0) {
                        return -1;
                    }
                }
                i++;
            }
            return 0;
        },
        /**
         * 
         * @param {Array} arr 
         * @param {Boolean} descending 
         * @param {Boolean} caseSensitive 
         * @returns 
         */
        sortArray: function(arr, descending, caseSensitive) {
            var ORDER = descending ? -1 : 1; // default Ascending
            var CASE_SENSITIVE = caseSensitive ? true : false;
            return arr.slice(0).sort(function(a, b) {
                var aa = typeof(a) === "number" ?
                    [a] : (CASE_SENSITIVE ? a.split(/(\d+)/) : a.toLowerCase().split(/(\d+)/));
                var bb = typeof(b) === "number" ?
                    [b] : (CASE_SENSITIVE ? b.split(/(\d+)/) : b.toLowerCase().split(/(\d+)/));
                var i = 0;
                var len = Math.max(aa.length, bb.length);
                var ch1, ch2;
                while(i < len) {
                    ch1 = !isNaN(parseFloat(aa[i])) && isFinite(aa[i]) ? parseInt(aa[i]) : aa[i];
                    ch2 = !isNaN(parseFloat(bb[i])) && isFinite(bb[i]) ? parseInt(bb[i]) : bb[i];
                    if (typeof(ch2) === "undefined") {
                        return 1 * ORDER;
                    }
                    if (typeof(ch1) === "undefined") {
                        return -1 * ORDER;
                    }
                    if (ch1 > ch2) {
                        return 1 * ORDER;
                    }
                    if (ch1 < ch2) {
                        return -1 * ORDER;
                    }
                    i++;
                }
                return 0;
            });
        },
        /**
         * 
         * @param {Function} func 
         * @returns 
         */
        getArgumentNames: function(func) {
            var str = func.toString();
            str = str.replace(/\/\*[\s\S]*?\*\//g, '') 
                    .replace(/\/\/(.)*/g, '')         
                    .replace(/{[\s\S]*}/, '')
                    .replace(/=>/g, '')
                    .trim();

            var start = str.indexOf("(") + 1;
            var end = str.indexOf(")");
            var result = str.substring(start, end).split(", ");
            
            return result.map(function(e) {
                return e.replace(/=[\s\S]*/g, '').trim();
            }).filter(function(e) {
                return e.length > 0;
            });
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        splitPath: function(str) {
            return str.replace(/\\+/g, "/").replace(/\/+$/, "/").split(/\//);
        },
        /**
         * @param {String} args
         * @returns 
         */
        joinPath: function(...args) {
            return args.reduce(function(prev, curr) {
                return curr.replace(/\\+/g, "\/")
                    .replace(/\/+/g, "\/")
                    .split(/\//)
                    .reduce(function(p, c) {
                        if (c === "\.") {
                            if (p.length > 0) {
                                return p;
                            } else {
                                p.push(c);
                            }
                        } else if (c === "\.\.") {
                            if (p.length > 0) {
                                p.pop();
                            } else {
                                p.push(c);
                            }
                        } else {
                            p.push(c);
                        }
                        return p;
                    }, prev);
            }, []).join("\/") || "\.";
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getPreviousPath: function(str) {
            var a = str.replace(/\\+/g, "/").replace(/\/+$/, "").split(/\//);
            return a.slice(0, a.length - Math.min(a.length, 1));
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getPreviousDir: function(str) {
            var a = str.split(/\//).replace(/\\+/g, "/").replace(/\/+$/, "");
            return a[a.length - Math.min(a.length, 1)];
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getCurrentDir: function(str) {
            var a = str.split(/\//).replace(/\\+/g, "/").replace(/\/+$/, "\/");
            var b = a[a.length];
            var i = a.length - ((b === "" || (b.indexOf("\.") > -1)) ? 1 : 0);
            return a[i];
        },
        /**
         * 
         * @param {String} str 
         * @param {String} linebreak CR, LF, CRLF
         * @returns 
         */
        replaceLinebreaks: function(str, linebreak) {
            var a = {
                "CR": "\\r", // Mac(1~9) 0x0D
                "LF": "\\n", // Unix/Linux, Mac(10~) 0x0A
                "CRLF": "\\r\\n" // windows 0x0D 0x0A
            }
            return str.replace(/(\\r\\n|\\r|\\n)/gm, (linebreak ? a[linebreak.toUpperCase()] : a["CRLF"]));
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        removeLinebreaks: function(str) {
            return str.replace(/(\\r\\n|\\r|\\n)/gm, "");
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        removeDoubleSpace: function(str) {
            return str.replace(/\\s+/g, " ");
        },
        /**
         * 
         * @param {Array} arr FileArray
         * @param {String} encoding utf-8...
         * @param {Function} cb 
         */
        readTextFiles: function(arr, encoding, cb) {
            var len = arr.length;
            var i = 0;
            var res = [];
            var recursiveFunc = function() {
                if (i < len) {
                    var file = arr[i];
                    if ((file instanceof File || file instanceof Blob) && /^text\//i.test(file.type)) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            res.push(e.target.result);
                            i++;
                            recursiveFunc();
                        };
                        reader.onerror = function(err) {
                            return cb(err);
                        };
                        reader.readAsText(elem, encoding || "UTF-8");
                    }
                } else {
                    return cb(null, res);
                }
            }
            recursiveFunc();
        },
        /**
         * 
         * @param {String} str 
         * @param {String} filename 
         * @param {String} type text/plain
         * @param {String} endings transparent, native
         */
        saveTextFile: function(str, filename, type, endings) {
            var blob = new Blob([str], {
                type: type || 'text/plain',
                endings: endings || "transparent"
            });
            var a = document.createElement('a');
            var url = URL.createObjectURL(blob);
            a.href = url;
            a.download = filename || "download";
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        getTextFileSize: function(str) {
            var blob = new Blob([str], { type: 'text/plain', endings: "transparent" });
            return blob.size;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        parseMarkdown: function(str) {
            var rules = [
                // header
                [/^###### (.*$)/gim, "<h6>$1</h6>"],
                [/^##### (.*$)/gim, "<h5>$1</h5>"],
                [/^#### (.*$)/gim, "<h4>$1</h4>"],
                [/^### (.*$)/gim, "<h3>$1</h3>"],
                [/^## (.*$)/gim, "<h2>$1</h2>"],
                [/^# (.*$)/gim, "<h1>$1</h1>"],
                // bold
                [/\*\*(.*)\*\*/gim, '<b>$1</b>'],
                [/\_\_(.*)\_\_/gim, "<b>$1</b>"],
                // italics
                [/\*(.*)\*/gim, "<i>$1</i>"],
                [/\_(.*)\_/gim, "<i>$1</i>"],
                // paragragh
                [/(^[^\n]+\n?$)/gim, "<p>$1</p>"],
                // code
                [/\`\`\`(.*)\`\`\`/g, '<pre>$1</pre>'],
                // link
                [/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>', {
                    "color": "#2A5DB0",
                    "text-decoration": "none"
                }],
                // highlights
                [/(`)(\s?[^\n,]+\s?)(`)/g, '<a>$2</a>', {
                    "background-color": "grey",
                    "color": "black",
                    "text-decoration": "none",
                    "border-radius": "3px",
                    "padding": "0 2px"
                }],
                // list 
                [/([^\n]+)(\+)([^\n]+)/g, "<ul><li>$3</li></ul>"],
                [/([^\n]+)(\*)([^\n]+)/g, "<ul><li>$3</li></ul>"],
                // image
                [/!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g, '<img src="$2" alt="$1" title="$3" />'],
            ];

            var setStyle = function(html, style) {
                if (typeof(style) !== "object") {
                    return html;
                }

                style = Object.entries(style).reduce(function(prev, [key, value]) {
                    return prev+key+"\:"+value+"\;";
                }, "");

                return html.replace(/^\<([^>]+)\>/, "\<$1 style=\""+style+"\"\>");
            }

            return rules.reduce(function(prev, [regexp, html, style]) {
                return prev.replace(regexp, setStyle(html, style));
            }, str).trim();
        },
        /**
         * 
         * @param {String} html "<span>abcd</span>"
         * @param {Object} style 
         * @returns 
         */
        setStyleToElement: function(html, style) {
            if (typeof(html) !== "string" || typeof(style) !== "object") {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }

            style = Object.entries(style).reduce(function(prev, [key, value]) {
                return prev+key+"\:"+value+"\;";
            }, "");

            return html.replace(/^\<([^>]+)\>/, "\<$1 style=\""+style+"\"\>");
        },
        /**
         * 
         * @param {String} str 
         * @param {String} from 
         * @param {String} to 
         * @returns 
         */
        replaceString: function(str, from, to) {
            from = from.replace(/([\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-])/g, "\\$1");
            return str.replace(new RegExp(from, "g"), to);
        },
        /**
         * 
         * @param {String} str 
         * @param {Object} data 
         * @returns 
         */
        replaceAllString: function(str, data) {
            if (typeof(data) !== "object") {
                data = {};
            }
            var rules = Object.entries(data).reduce(function(prev, [key, value]) {
                var k = key.replace(/([\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-])/g, "\\$1");
                prev.push([new RegExp(k, "g"), value]);
                return prev;
            }, []);
        
            return rules.reduce(function(prev, [regexp, value]) {
                return prev.replace(regexp, value);
            }, str);
        },
        /**
         * 
         * @param {String} str 
         * @param {String} data 
         * @returns 
         */
        searchString: function(str, data) {
            var res = [];
            var i = str.indexOf(data);
            var len = data.length;
            while(i > -1) {
                res.push(i);
                str = str.slice(i + len);
                i = str.indexOf(data);
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @param {Function} compareFunc 
         * @returns 
         */
        bubbleSort: function(arr, compareFunc) {
            var l = arr.length;
            var i;
            var j;
            var a;
            var b;
            var c;
            var s;
            for (i = 0; i < l; i++) {
                s = false;
                for (j = 0; j < l-i-1; j++) {
                    a = arr[j];
                    b = arr[j+1];
                    c = compareFunc(a, b);
                    if (c > 0) {
                        arr[j] = b;
                        arr[j+1] = a;
                        s = true;
                    }
                }
                if (!s) {
                    break;
                }
            }
            return arr;
        },
        /**
         * 
         * @param {Array} arr 
         * @param {Function} compareFunc 
         * @returns 
         */
        insertionSort: function(arr, compareFunc) {
            var len = arr.length;
            var i;
            var j;
            var a;
            var b;
            var c;
            for (i = 0; i < len; i++) {
                for (j = (i-1); j > -1; j--) {
                    a = arr[j];
                    b = arr[j+1];
                    c = compareFunc(a, b);
                    if (c > 0) {
                        arr[j] = b;
                        arr[j+1] = a;
                    }
                }
            }
            return arr;
        },
        /**
         * 
         * @param {Array} arr 
         * @param {Function} compareFunc left > right (a-b) ASC / right > left (b-a) DESC
         * @returns 
         */
        mergeSort: function(arr, compareFunc) {
            var sort = function(arr) {
                if (arr.length === 1) {
                    return arr;
                }

                var middle = Math.floor(arr.length / 2);
                var left = arr.slice(0, middle);
                var right = arr.slice(middle, arr.length);

                return merge(
                    sort(left),
                    sort(right),
                );
            }
            var merge = function(left, right) {
                var result = [];
                var i = 0;
                var j = 0;
                var l;
                var r;
                while(i < left.length && j < right.length) {
                    l = left[i];
                    r = right[j];
                    if (!compose(compareFunc(l, r))) {
                        result.push(l);
                        i++;
                    } else {
                        result.push(r);
                        j++;
                    }
                }
                return result.concat(left.slice(i, left.length)).concat(right.slice(j, right.length));
            }
            var compose = function(result) {
                var n = Math.sign(result);
                if (n == -1) {
                    return false;
                } else if (n == 1) {
                    return true;
                } else if (n == 0) {
                    return false;
                }
            }

            return sort(arr);
        },
        /**
         * 
         * @param {Blob} blob 
         * @param {Function} cb 
         */
        blobToBase64: function(blob, cb) {
            var reader = new FileReader();
            reader.onload = function() {
                var dataUrl = reader.result;
                var base64 = dataUrl.split(',')[1];
                return cb(base64);
            };
            reader.readAsDataURL(blob);
        },
        /**
         * 
         * @returns 
         */
        getArgumentsToArray: function() {
            return Array.prototype.slice.call(arguments);
        },
        /**
         * 
         * @param {String} base64 
         * @returns 
         */
        getBase64Size: function(base64) {
            var l = base64.length - base64.indexOf('\,') + 1;
            var p = (base64.charAt(base64.length - 2) === "\=") ? 2 : ((base64.charAt(base64.length - 1) === "\=") ? 1 : 0);
            return l * 0.75 - p;
        }, 
        /**
         * 
         * @param {Object} data 
         * @param {Object} query 
         * @returns 
         */
        execQuery: function(data, query) {
            var QUERY_RULES = {
                $and: [/^array$/, /^object$/],
                $or: [/^array$/, /^object$/],
                $nor: [/^array$/, /^object$/],
                $not: [/^object$/],
                $in: [/^array$/, /^(boolean|number|string|null|undefined)$/],
                $nin: [/^array$/, /^(boolean|number|string|null|undefined)$/],
                $gt: [/^number$/],
                $gte: [/^number$/],
                $lt: [/^number$/],
                $lte: [/^number$/],
                $eq: [/^.*$/],
                $ne: [/^.*$/],
                $exists: [/^(boolean|number|string|null|undefined)$/],
                $regexp: [/^regexp$/],
                boolean: [/^boolean*$/],
                number: [/^number*$/],
                string: [/^string*$/],
                object: [/^object*$/],
                array: [/^array*$/, /^(boolean|number|string|null|undefined)$/],
                null: [/^null*$/],
                regexp: [/^regexp$/],
                undefined: [/^undefined*$/],
            }
            var OPERATORS = {
                $and: function(a, b) {
                    var i = 0;
                    var l = b.length;
                    while(i < l) {
                        if (!exec(a, b[i++])) {
                            return false;
                        }
                    }
                    return true;
                },
                $or: function(a, b) {
                    var i = 0;
                    var l = b.length;
                    while(i < l) {
                        if (exec(a, b[i++])) {
                            return true;
                        }
                    }
                    return false;
                },
                $nor: function(a, b) {
                    var i = 0;
                    var l = b.length;
                    while(i < l) {
                        if (exec(a, b[i++])) {
                            return false;
                        }
                    }
                    return true;
                },
                $not: function(a, b) {
                    return !exec(a, b);
                },
                $eq: function(a, b) {
                    var aType = getType(a);
                    var bType = getType(b);
                    if (aType !== bType) {
                        return false;
                    }
                    switch(aType) {
                        case "undefined":
                        case "null":
                        case "boolean":
                        case "number":
                        case "string":
                            return a === b;
                        case "object":
                            return exec(a, b);
                        case "array":
                            if (a.length !== b.length) {
                                return false;
                            }
                            var i = 0;
                            var l = a.length;
                            while(i < l) {
                                if (a[i] !== b[i]) {
                                    return false;
                                }
                                i++;
                            }
                            return true;
                        default:
                            // not allowed types
                            return false;
                    }
                },
                $ne: function(a, b) {
                    var aType = getType(a);
                    var bType = getType(b);
                    if (aType !== bType) {
                        return true;
                    }
                    switch(aType) {
                        case "undefined":
                        case "null":
                        case "boolean":
                        case "number":
                        case "string":
                            return a !== b;
                        case "object":
                            return !exec(a, b);
                        case "array":
                            if (a.length !== b.length) {
                                return true;
                            }
                            var i = 0;
                            var l = a.length;
                            while(i < l) {
                                if (a[i] === b[i]) {
                                    return false;
                                }
                                i++;
                            }
                            return true;
                        default:
                            // not allowed types
                            return false;
                    }
                },
                $in: function(a, b) {
                    var aType = getType(a);
                    switch(aType) {
                        case "undefined":
                        case "null":
                            return false;
                        case "boolean":
                        case "number":
                        case "string":
                            return b.indexOf(a) > -1;
                        case "array":
                            var i = 0;
                            var l = b.length;
                            while(i < l) {
                                if (a.indexOf(b[i++]) < 0) {
                                    return false;
                                }
                            }
                            return true;
                        case "object":
                            var keys = Object.keys(a);
                            var i = 0;
                            var l = b.length;
                            while(i < l) {
                                if (keys.indexOf(b[i++]) < 0) {
                                    return false;
                                }
                            }
                            return true;
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $nin: function(a, b) {
                    var aType = getType(a);
                    switch(aType) {
                        case "undefined":
                        case "null":
                            return false;
                        case "boolean":
                        case "number":
                        case "string":
                            return b.indexOf(a) < 0;
                        case "array":
                            var i = 0;
                            var l = b.length;
                            while(i < l) {
                                if (a.indexOf(b[i++]) > -1) {
                                    return false;
                                }
                            }
                            return true;
                        case "object":
                            var keys = Object.keys(a);
                            var i = 0;
                            var l = b.length;
                            while(i < l) {
                                if (keys.indexOf(b[i++]) > -1) {
                                    return false;
                                }
                            }
                            return true;
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $gt: function(a, b) {
                    var aType = getType(a);
                    switch(aType) {
                        case "undefined":
                        case "null":
                            return false;
                        case "number":
                            return a > b;
                        case "string":
                            return a.length > b;
                        case "object":
                            return Object.keys(a).length > b;
                        case "array":
                            return a.length > b;
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $gte: function(a, b) {
                    var aType = getType(a);
                    switch(aType) {
                        case "undefined":
                        case "null":
                            return false;
                        case "number":
                            return a >= b;
                        case "string":
                            return a.length >= b;
                        case "object":
                            return Object.keys(a).length >= b;
                        case "array":
                            return a.length >= b;
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $lt: function(a, b) {
                    var aType = getType(a);
                    switch(aType) {
                        case "undefined":
                        case "null":
                            return false;
                        case "number":
                            return a < b;
                        case "string":
                            return a.length < b;
                        case "object":
                            return Object.keys(a).length < b;
                        case "array":
                            return a.length < b;
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $lte: function(a, b) {
                    var aType = getType(a);
                    switch(aType) {
                        case "undefined":
                        case "null":
                            return false;
                        case "number":
                            return a <= b;
                        case "string":
                            return a.length <= b;
                        case "object":
                            return Object.keys(a).length <= b;
                        case "array":
                            return a.length <= b;
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $exists: function(a, b) {
                    var aType = getType(a);
                    var bType = getType(b);
                    var isExists = (aType !== "null" && aType !== "undefined");
                    switch(bType) {
                        case "undefined":
                        case "null":
                            return isExists === false;
                        case "boolean":
                            return isExists === b;
                        case "number":
                            return isExists === (b > 0);
                        case "string":
                            return isExists === (b !== "0" && b !== "false" && b !== "");
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
                $regexp: function(a, b) {
                    var dataType = getType(a);
                    switch(dataType) {
                        case "undefined":
                        case "null":
                            return b.test(dataType);
                        case "string":
                        case "number":
                            return b.test(a);
                        default:
                            var err = new Error('invalid argument type');
                            err.name = "TypeError";
                            throw err;
                    }
                },
            }
            var isOperator = function(key) {
                return /^\$(and|or|nor|not|eq|ne|in|nin|gt|gte|lt|lte|exists|regexp)$/.test(key);
            }
            var getType = function(any) {
                if (typeof(any) === "object") {
                    if (Object.prototype.toString.call(any) === '[object Array]') {
                        return "array";
                    } else if (any instanceof Blob) {
                        return "blob";
                    } else if (any instanceof RegExp) {
                        return "regexp";
                    } else if (any === null) {
                        return "null";
                    } else {
                        return "object";
                    }
                } else if (typeof(any) === "number") {
                    if (isNaN(any)) {
                        return "NaN";
                    } else {
                        return "number";
                    }
                } else {
                    return typeof(any);
                }
            }
            var chkQuery = function(key, value) {
                var type = getType(value);
                var rule;
                if (isOperator(key)) {
                    rule = QUERY_RULES[key];
                } else if (QUERY_RULES[type]) {
                    rule = QUERY_RULES[type];
                } else {
                    return false;
                }
                if (!rule[0].test(type)) {
                    return false;
                }
                if (rule.length > 1) {
                    // array
                    var i = 0;
                    var l = value.length;
                    while(i < l) {
                        if (!rule[1].test(getType(value[i++]))) {
                            return false;
                        }
                    }
                }
                return true;
            }
            var setQuery = function(key, value) {
                var type = getType(value);
                if (!isOperator(key)) {
                    switch(type) {
                        case "object": return parse(value);
                        case "regexp": return {"$regexp": value};
                        default: return {"$eq": value};
                    }
                } else if (/^\$(and|or|nor)$/.test(key)) {
                    return value.map(function(elem) {
                        return parse(elem);
                    });
                } else {
                    return value;
                }
            }
            var setQeury2 = function(keys, value) {
                var i = keys.length-1;
                while(i > 0) {
                    value = {
                        [keys[i--]]: value
                    }
                }
                return value;
            }
            var calc = function(a, b, operator) {
                switch(operator) {
                    case "$and": return OPERATORS.$and(a, b);
                    case "$or": return OPERATORS.$or(a, b);
                    case "$nor": return OPERATORS.$nor(a, b);
                    case "$not": return OPERATORS.$not(a, b);
                    case "$eq": return OPERATORS.$eq(a, b); // equal
                    case "$ne": return OPERATORS.$ne(a, b); // not equal
                    case "$in": return OPERATORS.$in(a, b); // include
                    case "$nin": return OPERATORS.$nin(a, b); // exclude
                    case "$gt": return OPERATORS.$gt(a, b); // greater than
                    case "$gte": return OPERATORS.$gte(a, b); // greater than or equal
                    case "$lt": return OPERATORS.$lt(a, b); // less than or equal
                    case "$lte": return OPERATORS.$lte(a, b); // less than or equal
                    case "$exists": return OPERATORS.$exists(a, b);
                    case "$regexp": return OPERATORS.$regexp(a, b); // RegExp.test()
                    default: return false;
                }
            }
            var parse = function(obj) {
                return Object.entries(obj).reduce(function(prev, [key, value]) {
                    var keys = key.split("\.");
                    var lastKey = keys[keys.length-1];
                    var firstKey = keys[0];
                    if (!chkQuery(lastKey, value)) {
                        var err = new Error('invalid argument type');
                        err.name = "TypeError";
                        throw err;
                    }
                    value = setQuery(lastKey, value);
                    value = setQeury2(keys, value);
                    prev[firstKey] = value;
                    return prev;
                }, {});
            }
            var exec = function(a, b) {
                return Object.entries(b).reduce(function(prev, [key, value]) {
                    var res;
                    if (isOperator(key)) {
                        res = calc(a, value, key);
                    } else if (typeof(a[key]) !== "undefined") {
                        res = exec(a[key], value);
                    } else {
                        res = false;
                    }
                    return prev && res;
                }, true);
            }

            if (getType(data) !== "object" || getType(query) !== "object") {
                var err = new Error('invalid argument type');
                err.name = "TypeError";
                throw err;
            }

            return exec(data, parse(query));
        },
        

        getCorner: function(imageData) {
            // Harris Operator

        },
        convEnglishToKoreanKey: function(str) {
            var a = /r|s|e|f|a|q|t|d|w|c|z|x|v|g|R|E|Q|T|W/; // ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㄲㄸㅃㅆㅉ
            var b = /(hk|ho|hl|nj|np|nl|ml)|(k|o|i|O|j|p|u|P|h|y|n|b|m|l)/;
            var c = /(rt|sw|sg|fr|fa|fq|ft|fx|fv|fg|qt)|(r|s|e|f|a|q|t|d|w|c|z|x|v|g|R|T)/;
        },

    }
});