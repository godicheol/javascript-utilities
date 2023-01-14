(function() {
    'use strict';

    var mainObject = {
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
            return (typeof(regexp) === "object" && regexp instanceof RegExp) || (typeof(regexp) === "string" && /^\/.*\/[gi]{0,1}$/.test(regexp));
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
            /* /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(str); */
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
            /* arr = [[key, value], [key, value]] */
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
                return Object.entries(any); /* Object */
            } else if (typeof(obj) === "object" && obj !== null && Object.prototype.toString.call(obj) === '[object Array]') {
                return obj; /* Array */
            } else if (typeof(obj) === "string") {
                return obj.split(''); /* String */
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
            } else if (typeof(str) === "string" && /^\/.*\/[gi]{0,1}$/.test(str)) {
                return new RegExp(str);
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
                } else if (any === null) {
                    return "null";
                } else {
                    return "object";
                }
            } else {
                return typeof(any);
            }
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
         * @param {String} charset 
         * @param {Number} len 
         * @returns 
         */
        genRandomString: function(charset, len) {
            /* charset = "abcdefg" */
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
         * @param {String} pad 
         * @param {String} str 
         * @returns 
         */
        padLeft: function(pad, str) {
            /* pad = "0000" */
            if (!str) {
                return pad;
            }
            return (pad + str).slice(-pad.length);
        },
        /**
         * 
         * @param {String} pad 
         * @param {String} str 
         * @returns 
         */
        padRight: function(pad, str) {
            /* pad = "0000" */
            if (!str) {
                return pad;
            }
            return (str + pad).substring(0, pad.length);
        },
        /**
         * 
         * @param {Array} arr 
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
         * @param {Array} arr Array in Array
         * @returns 
         */
        joinArrayInArray: function(arr) {
            return arr.reduce(function(prev, curr) {
                return prev.concat(curr);
            }, []);
        },
        /**
         * 
         * @param {Array} regexpArray 
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
         * @param {Array} arr ObjectArray
         */
        joinObject: function(arr) {
            return arr.reduce(function(prev, curr) {
                for (var prop in curr) {
                    if (!prev.hasProperty(prop) || prev[prop] === undefined) {
                        prev[prop] = [curr[prop]];
                    } else {
                        prev[prop].push(curr[prop])
                    }
                }
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
         * @param {Object} object 
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

            /* constructor */
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
            /* alias */
            this.set = Schema.init;
            this.add = Schema.init;
            this.save = Schema.get;
            this.convert = Schema.get;
            this.confirm = Schema.test;
            this.validate = Schema.test;
            /* initialize this.types */
            if (__obj) {
                this.init(__obj);
            }
        },
        /**
         * 
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
                    var err = new Error('invalid argument type');
                    err.name = "TypeError";
                    throw err;
                }
                if (isLoopOperator(k)) {
                    /* Logical operators without $not */
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
         * @param {Number} w 
         * @param {Number} h 
         */
        MyRectangle: function(width, height) {
            var Rect = this;
            var getDiagonal = function(w, h) {
                return Math.sqrt(w*w+h*h);
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

            /* constructor */
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

            /* methods */
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
                
                /* calc */
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
                var nw = this.__state__.rectangleWidth < 0; /* is negative */
                var nh = this.__state__.rectangleHeight < 0; /* is negative */
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
            return Math.sqrt(w*w + h*h);
        },
        /**
         * 
         * @param {Array} dataArray 
         * @param {Function} promiseFunc 
         * @param {Any} initialValue 
         * @returns 
         */
        execPromises: function(dataArray, promiseFunc, initialValue) {
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
            /* constructor */
            this.function = null;
            this.isStarted = false;
            this.count = 0;

            /* methods */
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
            /* alias */
            this.go = this.start;
            this.pause = this.stop;
            this.end = this.stop;
            /* initialize */
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
            }
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
            }
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
            }
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
            }

            canvas.width = width;
            canvas.height = height;

            /* constructor */
            this.canvas = canvas;
            this.context = ctx;
            this.width = canvas.width;
            this.height = canvas.height;

            /* methods */
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
                ctx.moveTo(sx+0.5, sy+0.5); /* fix starting half pixel */
                ctx.lineTo(dx+0.5, dy+0.5); /* fix starting half pixel */
                ctx.stroke();
                ctx.closePath();
                unsetStyle();
                return this;
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
                    ctx.arc(cx+0.5, cy+0.5, rad+0.5, 0, 2*Math.PI); /* fix starting half pixel */
                    ctx.fill();
                } else {
                    ctx.arc(cx+0.5, cy+0.5, rad, 0, 2*Math.PI); /* fix starting half pixel */
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
            this.getImageData = function(x, y, w, h) {
                return ctx.getImageData(x || 0, y || 0, w || canvas.width, h || canvas.height);
            };
            this.putImageData = function(data) {
                return ctx.putImageData(data, 0, 0);
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
          
            /* initialize */
            ctx.strokeStyle = "#000000";
            ctx.fillStyle = "#000000";
            ctx.width = 1;
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
         * @param {File} src File or String
         * @param {Function} cb Callback
         * @returns 
         */
        loadImage: function(src, cb) {
            var img = new Image();
            img.onload = function() {
                return cb(null, img);
            };
            img.onerror = function(err) {
                return cb(err);
            };
            if (src instanceof Blob) {
                try {
                    img.src = URL.createObjectURL(src);
                } catch(err) {
                    return cb(err);
                }
            } else {
                img.src = src;
            }
        },
        /**
         * 
         * @param {File} src File or String
         * @returns Promise
         */
        loadImagePromise: function(src) {
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
                        img.src = URL.createObjectURL(src);
                    } catch(err) {
                        reject(err);
                        return;
                    }
                } else {
                    img.src = src;
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
            return str.split(/(?:\r\n|\r|\n|[.]+\s+|[?!]+\s*|[.]$)/).filter((s) => s !== "");
        },
        /**
         * 
         * @param {String} str 
         * @returns Array
         */
        getWords: function(str) {
            return str.split(/\s*(?:\s+|\r\n+|\r+|\n+|[.,·()!?]+)\s*/).filter((w) => w !== "");
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        parseKorean: function(str) {
            var koreanChar = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
            var koreanCharUnicode = /\u3131-\u314e\u314f-\u3136\uac00-\ud7a3/;
            var completedKoreanChar = /[가-힣]/;
            var sentences = str.split(/(?:\r\n|\r|\n|[.]+\s+|[?!]+\s*|[.]$)/).filter((s) => s !== "");
            var words = str.split(/\s*(?:\s+|\r\n+|\r+|\n+|[.,·()!?]+)\s*/).filter((w) => w !== "");
            var convAiReadable;
            return {
                sentences: sentences,
                words: words
            }
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
            var char;
            while(i < len) {
                char = str.charCodeAt(i++);
                res.push(char);
            }
            return res;
        },
        /**
         * 
         * @param {String} str 
         * @returns 
         */
        stringToHex: function(str) {
            var res = [];
            var i = 0;
            var len = str.length;
            var char;
            while(i < len) {
                char = str.charCodeAt(i++).toString(16);
                res.push(char);
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
            var char1, char2;
            while(i < len) {
                char1 = str.charCodeAt(i++);
                if (char1 < 0x0080) {
                    // code point range: U+0000 - U+007F
                    res.push(char1);
                } else if (char1 < 0x0800) {
                    // code point range: U+0080 - U+07FF
                    res.push(0xC0 | (char1 >> 6),
                        0x80 | (char1 & 0x3F));
                } else if (char1 < 0xD800 || char1 >= 0xE000 ) {
                    // code point range: U+0800 - U+FFFF
                    res.push(0xE0 | (char1 >> 12),
                        0x80 | ((char1 >> 6) & 0x3F),
                        0x80 | (char1 & 0x3F));
                } else {
                    // surrogate pair
                    // code point range: U+10000 - U+10FFFF
                    char2 = str.charCodeAt(i++);
                    char1 = 0x00010000 + ((char1 & 0x03FF) << 10) | (char2 & 0x03FF);
                    res.push(0xF0 | (char1 >> 18),
                        0x80 | ((char1 >> 12) & 0x3F),
                        0x80 | ((char1 >> 6) & 0x3F),
                        0x80 | (char1 & 0x3F));
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
            var char;
            while (i < len) {
                char = str.charCodeAt(i++);
                if (char <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(char, 0);
                } else if (char <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(char & 0xFF,
                        ((char >> 8) & 0xFF));
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
            var char;
            while (i < len) {
                char = str.charCodeAt(i++);
                if (char <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(0, char);
                } else if (char <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(char >> 8 & 0xFF,
                        char & 0xFF);
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        unicodeToString: function(arr) {
            var res = "";
            var i = 0;
            var len = arr.length;
            while(i < len) {
                res += String.fromCharCode(arr[i++]);
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        unicodeToHex: function(arr) {
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
        unicodeToUtf8: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var char1, char2;
            while(i < len) {
                char1 = arr[i++];
                if (char1 < 0x0080) {
                    // code point range: U+0000 - U+007F
                    res.push(char1);
                } else if (char1 < 0x0800) {
                    // code point range: U+0080 - U+07FF
                    res.push(0xC0 | (char1 >> 6),
                        0x80 | (char1 & 0x3F));
                } else if (char1 < 0xD800 || char1 >= 0xE000 ) {
                    // code point range: U+0800 - U+FFFF
                    res.push(0xE0 | (char1 >> 12),
                        0x80 | ((char1 >> 6) & 0x3F),
                        0x80 | (char1 & 0x3F));
                } else {
                    // surrogate pair
                    // code point range: U+10000 - U+10FFFF
                    char2 = arr[i++];
                    char1 = 0x00010000 + ((char1 & 0x03FF) << 10) | (char2 & 0x03FF);
                    res.push(0xF0 | (char1 >> 18),
                        0x80 | ((char1 >> 12) & 0x3F),
                        0x80 | ((char1 >> 6) & 0x3F),
                        0x80 | (char1 & 0x3F));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns
         */
        unicodeToUtf16le: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var char;
            while (i < len) {
                char = arr[i++];
                if (char <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(char, 0);
                } else if (char <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(char & 0xFF,
                        ((char >> 8) & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns
         */
        unicodeToUtf16be: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var char;
            while (i < len) {
                char = arr[i++];
                if (char <= 0xFF) {
                    // 0x00 - 0xFF
                    res.push(0, char);
                } else if (char <= 0xFFFF) {
                    // 0xFF - 0xFFFF
                    res.push(char >> 8 & 0xFF,
                        char & 0xFF);
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf8ToUnicode: function(arr) {
            var res = [];
            var i = 0;
            var len = arr.length;
            var char1, char2, char3;
            while (i < len) {
                char1 = arr[i++];
                switch(char1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res.push(char1);
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        char2 = arr[i++];
                        res.push(((char1 & 0x1F) << 6) | 
                            (char2 & 0x3F));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        char2 = arr[i++];
                        char3 = arr[i++];
                        res.push(((char1 & 0x0F) << 12) | 
                            ((char2 & 0x3F) << 6) | 
                            ((char3 & 0x3F) << 0));
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
            var char1, char2, char3;
            while (i < len) {
                char1 = arr[i++];
                switch(char1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res.push(char1.toString(16));
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        char2 = arr[i++];
                        res.push((((char1 & 0x1F) << 6) | 
                            (char2 & 0x3F)).toString(16));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        char2 = arr[i++];
                        char3 = arr[i++];
                        res.push((((char1 & 0x0F) << 12) | 
                            ((char2 & 0x3F) << 6) | 
                            ((char3 & 0x3F) << 0)).toString(16));
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
            var char1, char2, char3;
            while (i < len) {
                char1 = arr[i++];
                switch(char1 >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        // 0xxx xxxx
                        res += String.fromCharCode(char1);
                        break;
                    case 12:
                    case 13:
                        // 110x xxxx
                        // 10xx xxxx
                        char2 = arr[i++];
                        res += String.fromCharCode(((char1 & 0x1F) << 6) |
                            (char2 & 0x3F));
                        break;
                    case 14:
                        // 1110 xxxx
                        // 10xx xxxx
                        // 10xx xxxx
                        char2 = arr[i++];
                        char3 = arr[i++];
                        res += String.fromCharCode(((char1 & 0x0F) << 12) |
                            ((char2 & 0x3F) << 6) |
                            ((char3 & 0x3F) << 0));
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
        utf16leToUnicode: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var char1, char2;
            while (i < len) {
                char1 = arr[i++];
                char2 = arr[i++];
                if (char2 === 0) {
                    res.push(char1);
                } else {
                    res.push(((char2 & 0xFF) << 8) |
                        (char1 & 0xFF));
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
            var char1, char2;
            while (i < len) {
                char1 = arr[i++];
                char2 = arr[i++];
                if (char2 === 0) {
                    res.push(char1.toString(16));
                } else {
                    res.push((((char2 & 0xFF) << 8) |
                        (char1 & 0xFF)).toString(16));
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
            var char1, char2;
            while (i < len) {
                char1 = arr[i++];
                char2 = arr[i++];
                if (char2 === 0) {
                    res += String.fromCharCode(char1);
                } else {
                    res += String.fromCharCode(((char2 & 0xFF) << 8) |
                        (char1 & 0xFF));
                }
            }
            return res;
        },
        /**
         * 
         * @param {Array} arr 
         * @returns 
         */
        utf16beToUnicode: function(arr) {
            var res = [];
            var len = arr.length;
            var i = (len >= 2) && 
                ((arr[0] === 0xFE && arr[1] === 0xFF) || 
                (arr[0] === 0xFF && arr[1] === 0xFE)) ? 2 : 0;
            var char1, char2;
            while (i < len) {
                char1 = arr[i++];
                char2 = arr[i++];
                if (char1 === 0) {
                    res.push(char2);
                } else {
                    res.push(((char1 & 0xFF) << 8) |
                        (char2 & 0xFF));
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
            var char1, char2;
            while (i < len) {
                char1 = arr[i++];
                char2 = arr[i++];
                if (char1 === 0) {
                    res.push(char2.toString(16));
                } else {
                    res.push((((char1 & 0xFF) << 8) |
                        (char2 & 0xFF)).toString(16));
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
            var char1, char2;
            while (i < len) {
                char1 = arr[i++];
                char2 = arr[i++];
                if (char1 === 0) {
                    res += String.fromCharCode(char1);
                } else {
                    res += String.fromCharCode(((char1 & 0xFF) << 8) | 
                        (char2 & 0xFF));
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
                return ("000" + hex.toUpperCase()).slice(-4);
            });
        },


    }

    if (typeof(window.utils) === "undefined") {
        window.utils = mainObject;
    }
})();