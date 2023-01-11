(function() {
    'use strict';

    var mainObject = {

        /* Math */

        getModulo: function(n, m) {
            return ((n % m) + m) % m;
        },
        getRadians: function(deg) {
            return deg * (Math.PI / 180);
        },
        getDegree: function(rad) {
            return rad * (180 / Math.PI);
        },

        /* Type */

        isBoolean: function(bool) {
            return (typeof(bool) === "boolean") || (typeof(bool) === "number" && (bool === 1 || bool === 0)) || (typeof(bool) === "string" && (bool === "true" || bool === "false" || bool === "1" || bool === "0"))
        },
        isNumeric: function(num) {
            return typeof(num) === "number" || (typeof(num) === "string" && !isNaN(parseFloat(num)) && isFinite(num));
        },
        isString: function(str) {
            return typeof(str) === "string";
        },
        isObject: function(obj) {
            return typeof(obj) === "object" && obj !== null && Object.prototype.toString.call(obj) !== '[object Array]';
        },
        isArray: function(arr) {
            return typeof(arr) === "object" && Object.prototype.toString.call(arr) === '[object Array]';
        },
        isDate: function(date) {
            return date instanceof Date && !isNaN(date.valueOf());
        },
        isNode: function(node) {
            return (typeof(Node) === "object" ? node instanceof Node : node) && typeof(node) === "object" && typeof(node.nodeType) === "number" && typeof(node.nodeName) === "string";
        },
        isNodeList: function(node) {
            return typeof(node) === "object" && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(node)) && typeof(node.length) === "number" && (node.length === 0 || (typeof(node[0]) === "object" && node[0].nodeType > 0));
        },
        isDOMElement: function(elem) {
            return (typeof(HTMLElement) === "object" ? elem instanceof HTMLElement : elem) && typeof(elem) === "object" && elem !== null && elem.nodeType === 1 && typeof(elem.nodeName) === "string";
        },
        isMimeType: function(str) {
			var pattern = new RegExp("(application|audio|font|example|image|message|model|multipart|text|video|x-(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+))/([0-9A-Za-z!#$%&'*+.^_`|~-]+)((?:[ \t]*;[ \t]*[0-9A-Za-z!#$%&'*+.^_`|~-]+=(?:[0-9A-Za-z!#$%&'*+.^_`|~-]+|\"(?:[^\"\\\\]|\\.)*\"))*)");
			return pattern.test(str);
		},
        isColor: function(str) {
            var pattern = new RegExp("^(?:#(?:[A-Fa-f0-9]{3}){1,2}|(?:rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}|hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*|(?:rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}|hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,)\s*0*(?:\.\d+|1(?:\.0*)?)\s*)[)])$");
            return pattern.test(str);
        },
        isRegexp: function(regexp) {
            return (typeof(regexp) === "object" && regexp instanceof RegExp) || (typeof(regexp) === "string" && /^\/.*\/[gi]{0,1}$/.test(regexp));
        },
        isCapital: function(str) {
            return str.charAt(0) === str.charAt(0).toUpperCase();
        },
        isUrl: function(str) {
            return /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(str);
        },
        isSafeUrl: function(str) {
            return /^[a-zA-Z0-9-._~()'!*:@,?\/#+&=]+$/.test(str);
        },

        /* Change type */

        toBoolean: function(bool) {
            if (typeof(bool) === "boolean") {
                return bool;
            } else if (typeof(bool) === "number" && (bool === 1 || bool === 0)) {
                return bool === 1;
            } else if (typeof(bool) === "string" && (bool === "true" || bool === "false")) {
                return bool === "true";
            } else if (typeof(bool) === "string" && (bool === "1" || bool === "0")) {
                return bool === "1";
            } else {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        toNumber: function(num) {
            if (typeof(num) === "number") {
                return num;
            } else if (typeof(num) === "string" && !isNaN(parseFloat(num)) && isFinite(num)) {
                return parseFloat(num);
            } else {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        toString: function(str) {
            if (typeof(str) === "string") {
                return str;
            } else if (typeof(str) === "number") {
                return str.toString(10);
            } else {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        toObject: function(arr) {
            /* arr = [[key, value], [key, value]] */
            return arr.reduce(function(prev, curr) {
                prev[curr[0]] = curr[1];
                return prev;
            }, {});
        },
        toArray: function(any) {
            if (typeof(any) === "object" && any !== null && Object.prototype.toString.call(any) !== '[object Array]') {
                return Object.entries(any); /* Object */
            } else if (typeof(any) === "object" && any !== null && Object.prototype.toString.call(any) === '[object Array]') {
                return any; /* Array */
            } else if (typeof(any) === "string") {
                return any.split(''); /* String */
            } else {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        toDate: function(date) {
            if (typeof(date) === "object" && date instanceof Date && !isNaN(date.valueOf())) {
                return date;
            } else if (typeof(date) === "number") {
                return new Date(date);
            } else if (typeof(date) === "string") {
                return new Date(date);
            } else {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        toRegexp: function(regexp) {
            if (typeof(regexp) === "object" && regexp instanceof RegExp) {
                return regexp;
            } else if (typeof(regexp) === "string" && /^\/.*\/[gi]{0,1}$/.test(regexp)) {
                return new RegExp(regexp);
            } else {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
        },
        toCapital: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        toSafeUrl: function(str, char) {
            return str.replace(/[\{\}\[\].,;:|\)*~`!^<>@\$%\\\(\'\"\s]/g, char || "_");
        },

        /* Get */

        getType: function(any) {
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
        },
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
        getBrowserName: function() {
            var alias = {"Opera": "Opera","OPR": "Opera","Edge": "Microsoft Legacy Edge","Edg": "Microsoft Edge","MSIE": "Microsoft Internet Explorer","Chrome": "Chrome","Safari": "Safari","Firefox": "Firefox","Trident/": "Microsoft Internet Explorer"}
            var res = /Opera|OPR|Edge|Edg|MSIE|Chrome|Firefox|Trident\//.exec(navigator.userAgent);
            if (!res || !res[0]) {
                return undefined;
            }
            return alias[res[0]]
        },
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
        getScreenSize: function() {
            return {
                width: window.screen.width * window.devicePixelRatio,
                height: window.screen.height * window.devicePixelRatio
            }
        },
        getViewportSize: function() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            }
        },
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
        getExtension: function(str) {
            return str.split('.').pop();
        },
        getFileName: function(str) {
            return str.replace(/^.*[\\\/]/, '');
        },
        getCookie: function(key) {
            var cookies = document.cookie.split(';');
            var cookie = cookies.find(function(e) {
                return e.split("=")[0] === key;
            });
            return cookie.split("=")[1];
        },

        /* Deep copy */

        copyObject: function(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        copyArray: function(arr) {
            return JSON.parse(JSON.stringify(arr));
        },

        /* Generate */

        genError: function(title, message) {
            var err = new Error(message);
            err.name = title;
            return err;
        },
        genHash: function(str) {
            var hash = 0;
            var i;
            var char;
            for (i = 0; i < str.length; i++) {
                char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        },
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
        genUuid4: function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },
        genRandomString: function(charset, len) {
            /* charset = "abcdefg" */
            var res = "";
            var i;
            for (i = 0; i < len; i++) {
                res += charset[Math.floor(Math.random() * charset.length)];
            }
            return res;
        },
        genShortId: function() {
            var f = (Math.random() * 46656) | 0;
			var s = (Math.random() * 46656) | 0;
			f = ("000" + f.toString(36)).slice(-3);
			s = ("000" + s.toString(36)).slice(-3);
			return f + s;
        },

         /* File Size */
        
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
        humanlizeFileSize: function(bytes, dot) {
            if (bytes === 0) {
                return "0 bytes";
            }
            var k = 1024;
            var dp = dot < 0 ? 0 : dot;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dp)) + ' ' + sizes[i];
        },
        
        /* Cookie */

        isCookieEndabled: function() {
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
        setCookie: function(key, val) {
            document.cookie = key + '=' + val;
        },
        removeCookie: function(key) {
            document.cookie = key + '=; Max-Age=-99999999;';
        },

        /* Browser */

        openUrl: function(url, target) {
            window.open(url, target);
        },

        /* String */

        padLeft: function(pad, str) {
            /* pad = "0000" */
            if (!str) {
                return pad;
            }
            return (pad + str).slice(-pad.length);
        },
        padRight: function(pad, str) {
            /* pad = "0000" */
            if (!str) {
                return pad;
            }
            return (str + pad).substring(0, pad.length);
        },
        joinString: function(arr, header, footer) {
            return arr.map(function(e) {
                return (header ? header : "") + e + (footer ? footer : "");
            }).join("");
        },
        getCommonString: function(stringArray) {
             
        },
        parseString: function(str, locale) {
        },
        replaceString: function(str, from, to) {
            return str.split(from).join(to);
        },

        /* Object */

        /* 
            var schema = new MySchema({
                name: String,
                weight: Number,
            })
            var human = {
                name: "James",
                weight: "5"
            }
            var isMatch = schema.test(human);

            console.log(isMatch); // true

            var newHuman = schema.get(human);

            console.log(newHuman); // { name: "James", weight: 5 }
        */
        MySchema: function(object) {
            var Schema = this;
            /* Constructor */
            this.Types = {
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
                            var err = new Error('Invalid argument type');
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
                            var err = new Error('Invalid argument type');
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
                            var err = new Error('Invalid argument type');
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
                            var err = new Error('Invalid argument type');
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
                            var err = new Error('Invalid argument type');
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
                            var err = new Error('Invalid argument type');
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
                            var err = new Error('Invalid argument type');
                            err.name = "TypeError";
                            throw err;
                        }
                    }
                }
            };
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
                    return typeof(Schema.Types[__construtor.name]) === "object";
                } catch(err) {
                    return false;
                }
            };
            this.getValidType = function(__construtor) {
                try {
                    return Schema.Types[__construtor.name];
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
            /* Alias */
            this.set = Schema.init;
            this.add = Schema.init;
            this.save = Schema.get;
            this.convert = Schema.get;
            this.confirm = Schema.test;
            this.validate = Schema.test;
            /* Initialize this.types */
            this.init(object);
        },
        /* 
            var data = {id:1,attr:{width:5,height:6}}
            queryObject(data, {
                $and: [{
                    id:1
                }, {
                    attr: {
                        width: {
                            $gt: 1,
                            $lt: 6
                        }
                    }
                }]
            })
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
                    /* Object array */
                    if (t === "array") {
                        for (i = 0; i < v.length; i++) {
                            if (getType(v[i]) !== "object") {
                                return false;
                            }
                        }
                    }
                } else if (isMatchOperator(k)) {
                    /* Not object, Not array */
                    if (t === "object" || t === "array") {
                        return false;
                    }
                } else if (isNumberOperator(k)) {
                    /* Number */
                    if (t !== "number") {
                        return false;
                    }
                } else if (isArrayOperator(k)) {
                    /* Array */
                    if (t !== "array") {
                        return false;
                    }
                } else if (isNotOperator(k)) {
                    /* Object */
                    if (t !== "object") {
                        return false;
                    }
                } else if (isElementOperator(k)) {
                    /* Boolean */
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
                        if (dvt !== qvt) {
                            return false;
                        }
                        if (dvt === "array") {
                            if (dv.length !== qv.length) {
                                return false;
                            }
                            for (i = 0; i < dv.length; i++) {
                                if (!matchValue(null, dv[i], qv[i])) {
                                    return false;
                                }
                            }
                            return true;
                        }
                        if (dvt === "object") {
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
                    var err = new Error('Invalid argument type');
                    err.name = "TypeError";
                    throw err;
                }
                if (isLoopOperator(k)) {
                    /* Logical operators */
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
                    /* Object, Operators */
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
                    /* String, Number, Array, Comparison operators */
                    kv = k;
                    dv = d;
                    qv = q;
                    res = res && matchValue(kv, dv, qv);
                }
                return res;
            }
            return matchQuery(null, dataObject, queryObject);
        },

        /* Array */

        concatInArray: function(arr) {
            return arr.reduce(function(prev, curr) {
                return prev.concat(curr);
            }, []);
        },
        removeDuplicatesInArray: function(arr) {
            return arr.reduce(function(prev, curr) {
                if (prev.indexOf(curr) < 0) {
                    prev.push(curr);
                }
                return prev;
            }, []);
        },

        /* Regular expression */

        combineRegexp: function(regexpArray, flags) {
            return new RegExp(regexpArray.map(function(e) {
                return e.source;
            }).join("\|"), flags);
        },

        /* Rectangle */

        MyRectangle: function(w, h) {
            var Rect = this;
            var getVertex = function(px, py, x, y, d) {
                var radians = d * Math.PI / 180;
                var sinFraction = Math.sin(radians);
                var cosFraction = Math.cos(radians);
                return {
                    x: (x-px)*cosFraction-(y-py)*sinFraction+px,
                    y: (x-px)*sinFraction+(y-py)*cosFraction+py
                }
            };
            var getBoundingBox = function(a, b, c, d) {
                return {
                    x: Math.min(a.x, b.x, c.x, d.x),
                    y: Math.min(a.y, b.y, c.y, d.y),
                    width: Math.max(a.x, b.x, c.x, d.x) - Math.min(a.x, b.x, c.x, d.x),
                    height: Math.max(a.y, b.y, c.y, d.y) - Math.min(a.y, b.y, c.y, d.y)
                }
            };
            var getDiagonal = function(w, h) {
                return Math.sqrt(w*w + h*h);
            };

            /* constructor */
            this.__state__ = {
                originX: 0,
                originY: 0,
                pivotX: null,
                pivotY: null,
                rectangleX: 0,
                rectangleY: 0,
                rectangleWidth: w,
                rectangleHeight: h,
                rectangleDegree: 0,
            };

            /* methods */
            this.getState = function() {
                var originX = this.__state__.originX;
                var originY = this.__state__.originY;
                var x1 = this.__state__.rectangleX;
                var x2 = this.__state__.rectangleX + this.__state__.rectangleWidth;
                var y1 = this.__state__.rectangleY;
                var y2 = this.__state__.rectangleY + this.__state__.rectangleHeight;
                var width = this.__state__.rectangleWidth;
                var height = this.__state__.rectangleHeight;
                var degree = this.__state__.rectangleDegree;
                var px = this.__state__.pivotX;
                var py = this.__state__.pivotY;

                /* set origin */
                x1 += originX;
                x2 += originX;
                y1 += originY;
                y2 += originY;

                /* calc */
                var area = width * height;
                var centerX = x1+width*0.5;
                var centerY = y1+height*0.5;
                var pivotX = typeof(px) === "number" ? px : centerX;
                var pivotY = typeof(py) === "number" ? py : centerY;
                var diagonal = getDiagonal(width, height);
                var vertexA = getVertex(pivotX, pivotY, x1, y1, degree);
                var vertexB = getVertex(pivotX, pivotY, x2, y1, degree);
                var vertexC = getVertex(pivotX, pivotY, x1, y2, degree);
                var vertexD = getVertex(pivotX, pivotY, x2, y2, degree);
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
                    width: width,
                    height: height,
                    aspectRatio: width/height,
                    degree: degree,
                    area: area,
                    diagonal: diagonal,
                    boundingBox: boundingBox,
                    vertexA: vertexA,
                    vertexB: vertexB,
                    vertexC: vertexC,
                    vertexD: vertexD,
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
            this.fit = function(type, width, height) {
                var ar = this.__state__.rectangleWidth / this.__state__.rectangleHeight;
                var nw = this.__state__.rectangleWidth < 0; /* is negative */
                var nh = this.__state__.rectangleHeight < 0; /* is negative */
                var o = height * ar < width;
                if (type === "cover") {
                    this.__state__.rectangleWidth = Math.abs(o ? width : height*ar);
                    this.__state__.rectangleHeight = Math.abs(o ? width/ar : height);
                } else if (type === "contain") {
                    this.__state__.rectangleWidth = Math.abs(o ? height*ar : width);
                    this.__state__.rectangleHeight = Math.abs(o ? height : width/ar);
                } else {
                    var err = new Error('Invalid argument type');
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
        getVertex: function(px, py, x, y, d) {
            var radians = d * Math.PI / 180;
            var sinFraction = Math.sin(radians);
            var cosFraction = Math.cos(radians);
            return [
                (x-px)*cosFraction-(y-py)*sinFraction+px,
                (x-px)*sinFraction+(y-py)*cosFraction+py
            ];
        },
        getDiagonal: function(w, h) {
            return Math.sqrt(w*w + h*h);
        },

        /* Function */

        /* 
            var res = await utils.execPromises(arr, function(prev, curr, index) {
                return new Promise(function(resolve, reject) {
                    resolve(prev ? prev + curr : curr);
                })
            })
        */
        execPromises: function(dataArray, promiseFunc) {
            var promises = function() {
                return dataArray.reduce(function(prev, curr, index) {
                    return prev.then(function(res) {
                        return promiseFunc(res, curr, index);
                    });
                }, Promise.resolve());
            }
            return promises();
        },
        /* 
            var a = new MyAnimation(function() {
                // Code
            }, 1000);

            a.start();
            a.pause();
            a.stop();
        */
        MyAnimation: function(func, delay) {
            this.function = null;
            this.isStarted = false;
            this.count = 0;
            this.startedAt = null;
            this.set = function(f, d) {
                this.count = 0;
                this.isStarted = false;
                this.function = setInterval(function() {
                    if (this.isStarted) {
                        this.count++;
                        f();
                    }
                }.bind(this), d);
            };
            this.start = function() {
                this.isStarted = true;
                this.startedAt = new Date();
            };
            this.pause = function() {
                this.isStarted = false;
            };
            this.stop = function() {
                if (this.function) {
                    clearInterval(this.function);
                }
                this.function = null;
                this.isStarted = false;
                this.count = 0;
                this.startedAt = null;
            };
            /* Alias */
            this.go = this.start;
            this.end = this.stop;
            this.clear = this.stop;
            /* Initialize */
            if (func && delay) {
                this.set(func, delay);
            }
        },

        /* Canvas api */

        hasCanvas: function() {
            var element = document.createElement('canvas');
            return !!(element.getContext && element.getContext('2d'));
        },
        getTextWidth: function(text, size, font) {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.font = size+" "+font;
            var metrics = ctx.measureText(text);
            return metrics.width;
        },
        /**
         * 
         * @param {Number} width 
         * @param {Number} height 
         */
        MyCanvas: function MyCanvas(width, height) {
            var canvas = document.createElement('canvas');
            var ctx = canvas && canvas.getContext('2d');
            var setRotate = function(x, y, deg) {
                ctx.translate(x, y);
                ctx.rotate(deg * Math.PI / 180);
                ctx.translate(-x, -y);
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
            }
            var setRotate = function(x, y, options) {
                if (!options || typeof(options.rotate) === "undefined") {
                    return;
                }
                if (typeof(options.rotate) === "object") {
                    ctx.translate(options.rotate.x || x, options.rotate.y || y);
                    ctx.rotate(options.rotate.value * Math.PI / 180);
                    ctx.translate(-(options.rotate.x || x), -(options.rotate.y || y)); 
                }
                if (typeof(options.rotate) === "number") {
                    ctx.translate(x, y);
                    ctx.rotate(options.rotate * Math.PI / 180);
                    ctx.translate(-x, -y); 
                }
            }
            var setRotateX = function(x, y, options) {
                if (!options || typeof(options.rotateX) === "undefined") {
                    return;
                }
                var deg;
                var val;
                var cx;
                var cy;
                if (typeof(options.rotateX) === "object") {
                    deg = options.rotateX.value || options.rotateX;
                    val = Math.sin((deg+90)*Math.PI/180);
                    cx = options.rotateX.x || x;
                    cy = options.rotateX.y || y;
                }
                if (typeof(options.rotateX) === "number") {
                    deg = options.rotateX;
                    val = Math.sin((deg+90)*Math.PI/180);
                    cx = x;
                    cy = y;
                }
                ctx.translate(cx, cy);
                ctx.scale(val, 1);
                ctx.translate(-cx, -cy); 
            }
            var setRotateY = function(x, y, options) {
                if (!options || typeof(options.rotateY) === "undefined") {
                    return;
                }
                var deg;
                var val;
                var cx;
                var cy;
                if (typeof(options.rotateY) === "object") {
                    deg = options.rotateY.value || options.rotateY;
                    val = Math.sin((deg+90)*Math.PI/180);
                    cx = options.rotateY.x || x;
                    cy = options.rotateY.y || y;
                }
                if (typeof(options.rotateY) === "number") {
                    deg = options.rotateY;
                    val = Math.sin((deg+90)*Math.PI/180);
                    cx = x;
                    cy = y;
                }
                ctx.translate(cx, cy);
                ctx.scale(1, val);
                ctx.translate(-cx, -cy); 
            }

            canvas.width = width;
            canvas.height = height;

            /* Constructor */
            this.canvas = canvas;
            this.context = ctx;
            this.width = canvas.width;
            this.height = canvas.height;
            this.promise = {};

            /* Methods */
            this.getCanvas = function() {
                return canvas;
            };
            this.setCanvas = function(w, h) {
                canvas.width = w;
                canvas.height = h;
                this.width = canvas.width;
                this.height = canvas.height;
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
                ctx.moveTo(sx+0.5, sy+0.5); /* fix starting half pixel */
                ctx.lineTo(dx+0.5, dy+0.5); /* fix starting half pixel */
                ctx.stroke();
                ctx.closePath();
                unsetStyle();
            };
            this.drawRect = function(x, y, w, h, options) {
                var cx = x+w*0.5;
                var cy = y+h*0.5;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                if (options && options.fill) {
                    ctx.fillRect(x, y, w+1, h+1); /* fix starting half pixel */
                } else {
                    ctx.strokeRect(x+0.5, y+0.5, w, h); /* fix starting half pixel */
                }
                unsetStyle();
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
                    ctx.arc(cx+0.5, cy+0.5, rad+0.5, 0, 2*Math.PI); /* fix starting half pixel */
                    ctx.fill();
                } else {
                    ctx.arc(cx+0.5, cy+0.5, rad, 0, 2*Math.PI); /* fix starting half pixel */
                    ctx.stroke();
                }
                ctx.closePath();
                unsetStyle();
            };
            this.drawText = function(text, x, y, options) {
                var cx = x;
                var cy = y;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.fillText(text, cx, cy);
                unsetStyle();
            };
            this.drawImage = function(img, x, y, w, h, options) {
                var cx = x+w*0.5;
                var cy = y+h*0.5;
                var dx = x;
                var dy = y;
                var dw = w || img.naturalWidth || img.width;
                var dh = h || img.naturalHeihgt || img.height;
                saveStyle();
                setStyle(options);
                setRotate(cx, cy, options);
                setRotateX(cx, cy, options);
                setRotateY(cx, cy, options);
                ctx.drawImage(img, dx, dy, dw, dh);
                unsetStyle();
            };
            this.loadImage = function(src, cb) {
                var img = new Image();
                img.onload = function() {
                    return cb(null, img);
                }
                img.onerror = function(err) {
                    return cb(err);
                }
                img.src = src;
            };
            this.promise.loadImage = function(src) {
                return new Promise(function(resolve, reject) {
                    var img = new Image();
                    img.onload = function() {
                        resolve(img);
                    }
                    img.onerror = function(err) {
                        reject(err);
                    }
                    img.src = src;
                });
            };
            this.clear = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            };
          
            /* Initialize */
            ctx.strokeStyle = "#000000";
            ctx.fillStyle = "#000000";
            ctx.width = 1;
            ctx.font = "10px serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "alphabetic";
            ctx.save();
        },
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

    }

    if (typeof(window.utils) === "undefined") {
        window.utils = mainObject;
    }
})();