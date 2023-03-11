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
    /**
     * 
     * @param {number} n 
     * @param {number} m 
     * @returns 
     */
    var calcMod = function(n, m) {
        return ((n % m) + m) % m;
    }
    /**
     * 
     * @param {number} n 
     * @param {number} m 
     * @returns 
     */
    var calcSquare = function(n, m) {
        return Math.pow(n, m);
    }
    /**
     * 
     * @param {number} w width
     * @param {number} h height
     * @returns 
     */
    var calcDiagonal = function(w, h) {
        return Math.sqrt(w*w+h*h);
    }
    /**
     * 
     * @param {number} deg degree
     * @returns 
     */
    var calcRadians = function(deg) {
        return deg * (Math.PI / 180);
    }
    /**
     * 
     * @param {number} rad radians
     * @returns 
     */
    var calcDegree = function(rad) {
        return rad * (180 / Math.PI);
    }
    /**
     * 
     * @param {number} pivotX 
     * @param {number} pivotY 
     * @param {number} x 
     * @param {number} y 
     * @param {number} deg 
     * @returns 
     */
    var calcVertex = function(pivotX, pivotY, x, y, deg) {
        var rad = deg * Math.PI / 180;
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        return {
            x: (x - pivotX) * cos - (y - pivotY) * sin + pivotX,
            y: (x - pivotX) * sin + (y - pivotY) * cos + pivotY
        }
    }
    /**
     * 
     * @param {number} sw 
     * @param {number} sh 
     * @param {number} dw 
     * @param {number} dh 
     * @returns 
     */
    var calcCover = function(sw, sh, dw, dh) {
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
    }
    /**
     * 
     * @param {number} sw 
     * @param {number} sh 
     * @param {number} dw 
     * @param {number} dh 
     * @returns 
     */
    var calcContain = function(sw, sh, dw, dh) {
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
    }
    /**
     * 
     * @param {number} sw 
     * @param {number} sh 
     * @param {number} mxw 
     * @param {number} mxh 
     * @param {number} mnw 
     * @param {number} mnh 
     * @returns 
     */
    var calcOptimum = function(sw, sh, mxw, mxh, mnw, mnh) {
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
    }
    /**
     * 
     * @param {number} w 
     * @param {number} h 
     * @param {number} deg 
     * @returns 
     */
    var calcRotate = function(w, h, deg) {
        var rad = deg * Math.PI / 180;
        var sin = Math.sin(rad);
        var cos = Math.cos(rad);
        if (sin < 0) {
            sin = -sin;
        }
        if (cos < 0) {
            cos = -cos;
        }
        return {
            width: (w * cos) + (h * sin),
            height: (w * sin) + (h * cos)
        }
    }
    /**
     * 
     * @param {String} base64 
     * @returns 
     */
    var calcBase64Size = function(base64) {
        var l = base64.length - base64.indexOf('\,') + 1;
        var p = (base64.charAt(base64.length - 2) === "\=") ? 2 : ((base64.charAt(base64.length - 1) === "\=") ? 1 : 0);
        return l * 0.75 - p;
    }
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    var trimString = function(str) {
        return str.replace(/^\s+|\s+$/, "");
    }
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    var escapeString = function(str) {
        return str.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    var generateHashCode = function(str) {
        var hash = 0, i, len = str.length, char;
        while(i < len) {
            char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0; // convert to 32bit integer
        }
        return hash;
    }
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    var generateHashString = function(str) {
        return hashCode.toString(16);
    }
    /**
     * 
     * @param {string} str 
     * @returns 
     */
    var generateMD5 = function(str) {
        function M(d) {
            for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
            return f;
        }
        function X(d) {
            for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
            for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
            return _;
        }
        function V(d) {
            for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
            return _;
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
            return Array(m, f, r, i);
        }

        function md5_cmn(d, _, m, f, r, i) {
            return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m);
        }

        function md5_ff(d, _, m, f, r, i, n) {
            return md5_cmn(_ & m | ~_ & f, d, _, r, i, n);
        }

        function md5_gg(d, _, m, f, r, i, n) {
            return md5_cmn(_ & f | m & ~f, d, _, r, i, n);
        }

        function md5_hh(d, _, m, f, r, i, n) {
            return md5_cmn(_ ^ m ^ f, d, _, r, i, n);
        }

        function md5_ii(d, _, m, f, r, i, n) {
            return md5_cmn(m ^ (_ | ~f), d, _, r, i, n);
        }

        function safe_add(d, _) {
            var m = (65535 & d) + (65535 & _);
            return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m;
        }

        function bit_rol(d, _) {
            return d << _ | d >>> 32 - _;
        }
        var r = M(V(Y(X(str), 8 * str.length)));
        return r.toLowerCase();
    }
    /**
     * 
     * @returns 
     */
    var generateUUIDv4 = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    /**
     * 
     * @returns 
     */
    var generateGUID = function() {
        var lut = [];
        for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
        function e7() {
            var d0 = Math.random()*0xffffffff|0;
            var d1 = Math.random()*0xffffffff|0;
            var d2 = Math.random()*0xffffffff|0;
            var d3 = Math.random()*0xffffffff|0;
            return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
            lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
            lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
            lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
        }
        return e7();
    }
    /**
     * 
     * @param {number} bytes 
     * @param {number} dot 
     * @param {string|undefined} format 
     * @returns 
     */
    var convertBytesFormat = function(bytes, dot, format) {
        if (bytes <= 0) {
            return '0 Bytes';
        }
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var k = 1024;
        var dp = dot < 0 ? 0 : dot;
        var i = (format && sizes.indexOf(format) > -1) ? sizes.indexOf(format) : Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + ' ' + sizes[i];
    }
    /**
     * 
     * @param {string} pad 
     * @param {string} str 
     * @param {boolean} right 
     * @returns 
     */
    var padString = function(pad, str, right) {
        if (!pad) {
            pad = "0000";
        }
        if (!str) {
            return pad;
        }
        if (right) {
            return (str + pad).substring(0, pad.length);
        } else {
            return (pad + str).slice(-pad.length);
        }
    }
    /**
     * 
     * @param {array} ...args 
     * @returns 
     */
    var getDuplicatedItems = function(...args) {
        if (args.length < 1) {
            return [];
        }
        var res = args[0];
        var i, j, item;
        for (i = res.length-1; i >= 0; i--) {
            item = res[i];
            for (j = 1; j < args.length; j++) {
                if (args[j].indexOf(item) < 0) {
                    res.splice(i, 1);
                    break;
                }
            }
        }
        return res;
    }
    /**
     * 
     * @param {array} ...args 
     * @returns 
     */
    var getUniqueItems = function(...args) {
        if (args.length < 1) {
            return [];
        }
        var res = args[0];
        var i, j, item;
        for (i = res.length-1; i >= 0; i--) {
            item = res[i];
            for (j = 1; j < args.length; j++) {
                if (args[j].indexOf(item) > -1) {
                    res.splice(i, 1);
                    break;
                }
            }
        }
        return res;
    }
    /**
     * 
     * @param {Array} arr 
     * @returns 
     */
    var reverseArray = function(arr) {
        var res = [];
        var i = arr.length-1;
        while(i >= 0) {
            res.push(arr[i]);
            i--;
        }
        return res;
    }
    /**
     * 
     * @param {any} a 
     * @param {any} b 
     * @returns 
     */
    var compare = function(a, b) {
        var isNumber = function(str) {
            return !isNaN(parseFloat(str)) && isFinite(str);
        }
        var toNumber = function(str) {
            return parseFloat(str);
        }
        var localeCompareLanguage = "en";
        var localeCompareOptions = {};
        var aType = typeof(a);
        var bType = typeof(b);
        var i, len;
        if (aType !== typeof(b)) {
            if (aType === "undefined") {
                return 1;
            }
            if (bType === "undefined") {
                return -1;
            }
            if (aType === "object" && a === null) {
                return 1;
            }
            if (bType === "object" && b === null) {
                return -1;
            }
            if (aType === "string") {
                return 1;
            }
            if (bType === "string") {
                return -1;
            }
            if (aType === "number") {
                return 1;
            }
            if (bType === "number") {
                return -1;
            }
            if (aType === "boolean") {
                return 1;
            }
            if (bType === "boolean") {
                return -1;
            }
            return 0;
        }
        if (aType === "undefined") {
            return 0;
        } else if (aType === "object") {
            // null
            return 0;
        } else if (aType === "string") {
            a = a.split(/([0-9]+)/).filter(Boolean); // remove 0, "", null, NaN, undefined
            b = b.split(/([0-9]+)/).filter(Boolean); // remove 0, "", null, NaN, undefined
            len = Math.max(a.length, b.length);
            i = 0;
            while(i < len) {
                if (a[i] !== b[i]) {
                    if (isNumber(a[i]) && isNumber(b[i])) {
                        return  toNumber(a[i]) - toNumber(b[i]);
                    }
                    if (isNumber(a[i])) {
                        return -1;
                    }
                    if (isNumber(b[i])) {
                        return 1;
                    }
                    return a[i].localeCompare(b[i], localeCompareLanguage, localeCompareOptions);
                }
                i++;
            }
            return 0;
        } else if (aType === "number") {
            return a - b;
        } else if (aType === "boolean") {
            return a ? 1 : -1;
        } else {
            return 0;
        }
    }
    /**
     * 
     * @param  {...any} args 
     * @returns 
     */
    var sortInAscendingOrder = function(...args) {
        return args.slice(0).sort(compare);
    }
    /**
     * 
     * @param  {...any} args 
     * @returns 
     */
    var sortInDescendingOrder = function(...args) {
        return args.slice(0).sort(function(a, b) {
            return -compare(a, b);
        });
    }
    /**
     * 
     * @param {object} obj 
     * @returns 
     */
    var copyObject = function(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /**
     * 
     * @param {any} any 
     * @returns 
     */
    var getType = function(any) {
        var SCHEME = {
            "boolean": {},
            "number": {
                "NaN": function(arg) {
                    return isNaN(arg);
                }
            },
            "string": {},
            "object": {
                "array": function(arg) {
                    return Object.prototype.toString.call(arg) === '[object Array]';
                },
                "regexp": function(arg) {
                    return arg instanceof RegExp;
                },
                "date": function(arg) {
                    return arg instanceof Date && !isNaN(arg.valueOf());
                },
                "null": function(arg) {
                    return arg === null;
                }
            },
            "undefined": {}
        }
        var type = typeof(any);
        var keys = Object.keys(SCHEME[type]);
        var key;
        var len = keys.length;
        var i = 0;
        var func;
        for (i; i < len; i++) {
            key = keys[i];
            func = SCHEME[type][key];
            if (func(any)) {
                return key;
            }
        }
        return type;
    };
    /**
     * 
     * @param {any} any 
     * @param {string} type 
     * @returns 
     */
    var setType = function(any, type) {
        var SCHEME = {
            "boolean": {
                "number": function(arg) {
                    return arg === true ? 1 : 0;
                },
                "string": function(arg) {
                    return arg === true ? "true" : "false";
                },
                "rgb": function(arg) {
                    return arg === true ? "#FFFFFF" : "#000000";
                },
            },
            "number": {
                "boolean": function(arg) {
                    if (arg !== 1 && arg !== 0) {
                        throw new Error("Invalid argument type");
                    }
                    return arg === 1;
                },
                "string": function(arg) {
                    return arg.toString(10);
                },
                "date": function(arg) {
                    if (isNaN(new Date(arg).valueOf())) {
                        throw new Error("Invalid argument type");
                    }
                    return new Date(arg);
                },
                "rgb": function(arg) {
                    if (arg < 0 || arg > 16777215) {
                        throw new Error("Invalid argument type");
                    }
                    return "#"+Math.round(arg).toString(16);
                },
            },
            "string": {
                "boolean": function(arg) {
                    if (arg !== "true" && arg !== "false") {
                        throw new Error("Invalid argument type");
                    }
                    return arg === "true";
                },
                "number": function(arg) {
                    if (isNaN(parseInt(arg)) || !isFinite(arg)) {
                        throw new Error("Invalid argument type");
                    }
                    return parseFloat(arg);
                },
                "date": function(arg) {
                    if (isNaN(new Date(arg).valueOf())) {
                        throw new Error("Invalid argument type");
                    }
                    return new Date(arg);
                },
                "regexp": function(arg) {
                    var regexp;
                    var flags;
                    if (/^\/.*\/[dgimsuy]{0,7}$/.test(arg)) {
                        // "/string/g"
                        regexp = arg.replace(/^\/(.*)\/[dgimsuy]{0,7}$/, "$1");
                        flags = arg.replace(/^\/.*\/([dgimsuy]{0,7})$/, "$1");
                    } else {
                        // "string"
                        regexp = arg;
                    }
                    regexp = regexp.replace(/((?<!\/)[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-\/\\])/g, "\\$1");
                    try {
                        return new RegExp(regexp, flags);
                    } catch(err) {
                        throw new Error("Invalid argument type");
                    }
                },
                "rgb": function(arg) {
                    if (!(/^\#{0,1}[0-9A-Fa-f]{6,6}$/.test(arg))) {
                        throw new Error("Invalid argument type");
                    }
                    return arg.charAt(0) === "#" ? arg : "#"+arg;
                }
            },
            "object": {},
            "array": {},
            "date": {
                "number": function(arg) {
                    return arg.valueOf();
                },
                "string": function(arg) {
                    return arg.toString();
                },
            },
            "regexp": {
                "string": function(arg) {
                    return arg.toString();
                }
            },
            "NaN": {
                "any": function(arg) {
                    return arg;
                }
            },
            "null": {
                "any": function(arg) {
                    return arg;
                }
            },
            "undefined": {
                "any": function(arg) {
                    return arg;
                }
            },            
        }

        var srcType = getType(any);
        var func;
        if (srcType === type) {
            return any;
        } else if (!SCHEME[srcType]) {
            throw new Error("Invalid argument value");
        } else if (typeof(SCHEME[srcType][type]) === "function") {
            func = SCHEME[srcType][type];
        } else if (typeof(SCHEME[srcType]["any"]) === "function") {
            func = SCHEME[srcType]["any"];
        } else {
            throw new Error("Invalid argument type");
        }
        return func(any);
    }
    /**
     * 
     * @param {function} func 
     * @param {number} delay 
     * @returns 
     */
    var setInterval = function(func, delay) {
        var obj = {
            id: null,
            status: true
        }
        var res = {
            start: function() {
                obj.status = true;
            },
            pause: function() {
                obj.status = false;
            },
            toggle: function() {
                obj.status = !obj.status;
            },
            stop: function() {
                clearInterval(obj.id);
                obj.id = null;
            }
        }
        obj.id = setInterval(function() {
            if (obj.status) {
                func();
            }
        }, delay);
        return res;
    }
    /**
     * 
     * @param {function} func 
     * @param {number} delay 
     * @returns 
     */
    var setTimeout = function(func, delay) {
        var obj = {
            id: null,
        }
        var res = {
            cancel: function() {
                clearTimeout(obj.id);
                obj.id = null;
            }
        }
        obj.id = setTimeout(func, delay);
        return res;
    }
    /**
     * 
     * @param {number} delay 
     * @returns
     */
    var setDelay = function(delay) {
        return new Promise(function(resolve) {
            setTimeout(resolve, delay);
        });
    }
    /**
     * 
     * @param {string} str path
     * @returns 
     */
    var getBaseName = function(str) {
        return str.replace(/^.*\/|\.[0-9A-Za-z]{1,}$/g, "");
    }
    /**
     * 
     * @param {string} str path
     * @returns 
     */
    var getFileName = function(str) {
        return str.split("\/").pop();
    }
    /**
     * 
     * @param {string} str path
     * @returns 
     */
    var getExtension = function(str) {
        return /\.[0-9A-Za-z]{1,}$/.test(str) ? str.split("\.").pop() : undefined;
    }
    /**
     * 
     * @param {string} str extension
     */
    var getMimeType = function(str) {
        var MIMETYPES = {
            'abs': 'audio/x-mpeg',
            'ai': 'application/postscript',
            'aif': 'audio/x-aiff',
            'aifc': 'audio/x-aiff',
            'aiff': 'audio/x-aiff',
            'aim': 'application/x-aim',
            'art': 'image/x-jg',
            'asf': 'video/x-ms-asf',
            'asx': 'video/x-ms-asf',
            'au': 'audio/basic',
            'avi': 'video/x-msvideo',
            'avx': 'video/x-rad-screenplay',
            'bcpio': 'application/x-bcpio',
            'bin': 'application/octet-stream',
            'bmp': 'image/bmp',
            'body': 'text/html',
            'cdf': 'application/x-cdf',
            'cer': 'application/pkix-cert',
            'class': 'application/java',
            'cpio': 'application/x-cpio',
            'csh': 'application/x-csh',
            'css': 'text/css',
            'dib': 'image/bmp',
            'doc': 'application/msword',
            'dtd': 'application/xml-dtd',
            'dv': 'video/x-dv',
            'dvi': 'application/x-dvi',
            'eot': 'application/vnd.ms-fontobject',
            'eps': 'application/postscript',
            'etx': 'text/x-setext',
            'exe': 'application/octet-stream',
            'gif': 'image/gif',
            'gtar': 'application/x-gtar',
            'gz': 'application/x-gzip',
            'hdf': 'application/x-hdf',
            'hqx': 'application/mac-binhex40',
            'htc': 'text/x-component',
            'htm': 'text/html',
            'html': 'text/html',
            'ief': 'image/ief',
            'jad': 'text/vnd.sun.j2me.app-descriptor',
            'jar': 'application/java-archive',
            'java': 'text/x-java-source',
            'jnlp': 'application/x-java-jnlp-file',
            'jpe': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'jpg': 'image/jpeg',
            'js': 'application/javascript',
            'jsf': 'text/plain',
            'json': 'application/json',
            'jspf': 'text/plain',
            'kar': 'audio/midi',
            'latex': 'application/x-latex',
            'm3u': 'audio/x-mpegurl',
            'mac': 'image/x-macpaint',
            'man': 'text/troff',
            'mathml': 'application/mathml+xml',
            'me': 'text/troff',
            'mid': 'audio/midi',
            'midi': 'audio/midi',
            'mif': 'application/x-mif',
            'mov': 'video/quicktime',
            'movie': 'video/x-sgi-movie',
            'mp1': 'audio/mpeg',
            'mp2': 'audio/mpeg',
            'mp3': 'audio/mpeg',
            'mp4': 'video/mp4',
            'mpa': 'audio/mpeg',
            'mpe': 'video/mpeg',
            'mpeg': 'video/mpeg',
            'mpega': 'audio/x-mpeg',
            'mpg': 'video/mpeg',
            'mpv2': 'video/mpeg2',
            'ms': 'application/x-wais-source',
            'nc': 'application/x-netcdf',
            'oda': 'application/oda',
            'odb': 'application/vnd.oasis.opendocument.database',
            'odc': 'application/vnd.oasis.opendocument.chart',
            'odf': 'application/vnd.oasis.opendocument.formula',
            'odg': 'application/vnd.oasis.opendocument.graphics',
            'odi': 'application/vnd.oasis.opendocument.image',
            'odm': 'application/vnd.oasis.opendocument.text-master',
            'odp': 'application/vnd.oasis.opendocument.presentation',
            'ods': 'application/vnd.oasis.opendocument.spreadsheet',
            'odt': 'application/vnd.oasis.opendocument.text',
            'otg': 'application/vnd.oasis.opendocument.graphics-template',
            'oth': 'application/vnd.oasis.opendocument.text-web',
            'otp': 'application/vnd.oasis.opendocument.presentation-template',
            'ots': 'application/vnd.oasis.opendocument.spreadsheet-template',
            'ott': 'application/vnd.oasis.opendocument.text-template',
            'ogx': 'application/ogg',
            'ogv': 'video/ogg',
            'oga': 'audio/ogg',
            'ogg': 'audio/ogg',
            'otf': 'application/x-font-opentype',
            'spx': 'audio/ogg',
            'flac': 'audio/flac',
            'anx': 'application/annodex',
            'axa': 'audio/annodex',
            'axv': 'video/annodex',
            'xspf': 'application/xspf+xml',
            'pbm': 'image/x-portable-bitmap',
            'pct': 'image/pict',
            'pdf': 'application/pdf',
            'pgm': 'image/x-portable-graymap',
            'pic': 'image/pict',
            'pict': 'image/pict',
            'pls': 'audio/x-scpls',
            'png': 'image/png',
            'pnm': 'image/x-portable-anymap',
            'pnt': 'image/x-macpaint',
            'ppm': 'image/x-portable-pixmap',
            'ppt': 'application/vnd.ms-powerpoint',
            'pps': 'application/vnd.ms-powerpoint',
            'ps': 'application/postscript',
            'psd': 'image/vnd.adobe.photoshop',
            'qt': 'video/quicktime',
            'qti': 'image/x-quicktime',
            'qtif': 'image/x-quicktime',
            'ras': 'image/x-cmu-raster',
            'rdf': 'application/rdf+xml',
            'rgb': 'image/x-rgb',
            'rm': 'application/vnd.rn-realmedia',
            'roff': 'text/troff',
            'rtf': 'application/rtf',
            'rtx': 'text/richtext',
            'sfnt': 'application/font-sfnt',
            'sh': 'application/x-sh',
            'shar': 'application/x-shar',
            'sit': 'application/x-stuffit',
            'snd': 'audio/basic',
            'src': 'application/x-wais-source',
            'sv4cpio': 'application/x-sv4cpio',
            'sv4crc': 'application/x-sv4crc',
            'svg': 'image/svg+xml',
            'svgz': 'image/svg+xml',
            'swf': 'application/x-shockwave-flash',
            't': 'text/troff',
            'tar': 'application/x-tar',
            'tcl': 'application/x-tcl',
            'tex': 'application/x-tex',
            'texi': 'application/x-texinfo',
            'texinfo': 'application/x-texinfo',
            'tif': 'image/tiff',
            'tiff': 'image/tiff',
            'tr': 'text/troff',
            'tsv': 'text/tab-separated-values',
            'ttf': 'application/x-font-ttf',
            'txt': 'text/plain',
            'ulw': 'audio/basic',
            'ustar': 'application/x-ustar',
            'vxml': 'application/voicexml+xml',
            'xbm': 'image/x-xbitmap',
            'xht': 'application/xhtml+xml',
            'xhtml': 'application/xhtml+xml',
            'xls': 'application/vnd.ms-excel',
            'xml': 'application/xml',
            'xpm': 'image/x-xpixmap',
            'xsl': 'application/xml',
            'xslt': 'application/xslt+xml',
            'xul': 'application/vnd.mozilla.xul+xml',
            'xwd': 'image/x-xwindowdump',
            'vsd': 'application/vnd.visio',
            'wav': 'audio/x-wav',
            'wbmp': 'image/vnd.wap.wbmp',
            'wml': 'text/vnd.wap.wml',
            'wmlc': 'application/vnd.wap.wmlc',
            'wmls': 'text/vnd.wap.wmlsc',
            'wmlscriptc': 'application/vnd.wap.wmlscriptc',
            'wmv': 'video/x-ms-wmv',
            'woff': 'application/font-woff',
            'woff2': 'application/font-woff2',
            'wrl': 'model/vrml',
            'wspolicy': 'application/wspolicy+xml',
            'z': 'application/x-compress',
            'zip': 'application/zip'
        };
        return /\.[0-9A-Za-z]{1,}$/.test(str) ? MIMETYPES[str.split("\.").pop().toLowerCase()] : (
            /^[0-9A-Za-z]{1,}$/.test(str) ? MIMETYPES[str.toLowerCase()] : undefined
        );
    }
    /**
     * 
     * @param  {...string} args 
     * @returns 
     */
    var parsePath = function(...args) {
        var str = args.join("\/").replace(/(?<!\:)(?<!\:\/)\/+|\\+/g, "\/").replace(/\/$/, "");
        var arr = str.split("\/");
        var l = arr.length;
        var i = 0;
        var a = [];
        var c;
        for(i;i<l;i++) {
            c = arr[i];
            if (a.length > 0) {
                if (c === "\.") {
                    continue;
                } else if (c === "\.\.") {
                    a.pop();
                    continue;
                }
            }
            a.push(c);
        }
        var s = a.join("\/");

        var target = a[a.length-1];
        var full = target ? getFileName(target) : undefined;
        var base = target ? getBaseName(target) : undefined;
        var ext = target ? getExtension(target) : undefined;
        var mime = ext ? getMimeType(ext) : undefined;
        var array = target ? a : ["\."];
        var string = target ? s : "\.";
        return {
            array: array,
            string: string,
            name: full,
            base: base,
            extension: ext,
            mimetype: mime,
        }
    }

    return {
        mode: calcMod,
        sqaure: calcSquare,
        diagonal: calcDiagonal,
        radians: calcRadians,
        degree: calcDegree,
        vertex: calcVertex,
        cover: calcCover,
        contain: calcContain,
        optimum: calcOptimum,
        rotate: calcRotate,
        getBase64Size: calcBase64Size,
        trim: trimString,
        escape: escapeString,
        hashCode: generateHashCode,
        hashString: generateHashString,
        md5: generateMD5,
        uuidv4: generateUUIDv4,
        guid: generateGUID,
        bytes: convertBytesFormat,
        pad: padString,
        getDupe: getDuplicatedItems,
        getUniq: getUniqueItems,
        reverse: reverseArray,
        compare: compare,
        asc: sortInAscendingOrder,
        desc: sortInDescendingOrder,
        copy: copyObject,
        typeof: getType,
        typeto: setType,
        setInterval: setInterval,
        setTimeout: setTimeout,
        setDelay: setDelay,
        baseName: getBaseName,
        fileName: getFileName,
        extension: getExtension,
        mimeType: getMimeType,
        path: parsePath,
    }
});