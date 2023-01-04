(function() {
    'use strict';

    // is,to,get,set,gen,init,conv,culc,chk

    var mainObject = {

        getType: function(arg) {
            if (typeof(arg) === "object") {
                if (Object.prototype.toString.call(arg) === '[object Array]') {
                    return "array";
                } else if (arg === null) {
                    return "null";
                } else {
                    return "object";
                }
            } else {
                return typeof(arg);
            }
        },

        isBoolean: function(bool) {
            return (typeof(bool) === "boolean") || (typeof(bool) === "number" && (bool === 1 || bool === 0)) || (typeof(bool) === "string" && (bool === "true" || bool === "false" || bool === "1" || bool === "0"))
        },

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

        isNumeric: function(num) {
            return typeof(num) === "number" || (typeof(num) === "string" && !isNaN(parseFloat(num)) && isFinite(num));
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

        isString: function(str) {
            return typeof(str) === "string";
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

        isObject: function(obj) {
            return typeof(obj) === "object" && obj !== null && Object.prototype.toString.call(obj) !== '[object Array]';
        },

        isArray: function(arr) {
            return typeof(arr) === "object" && Object.prototype.toString.call(arr) === '[object Array]';
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
			return str.match(pattern);
		},

        isColor: function(str) {
            var pattern = new RegExp("^(?:#(?:[A-Fa-f0-9]{3}){1,2}|(?:rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}|hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*|(?:rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}|hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,)\s*0*(?:\.\d+|1(?:\.0*)?)\s*)[)])$");
            return str.match(pattern);
        },
        
        toCapital: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },

        toSafeUrl: function(str, char) {
            var pattern = /[\{\}\[\].,;:|\)*~`!^<>@\$%\\\(\'\"\s]/g; // allow ?/#+&=
            return str.replace(pattern, char || "_");
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

        getBrowser: function() {
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

        calcCoveredSize: function(sw, sh, dw, dh) {
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

        calcContainedSize: function(sw, sh, dw, dh) {
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

        calcOptimumSize: function(sw, sh, mxw, mxh, mnw, mnh) {
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

        toHumanizedFileSize: function(bytes, dot) {
            if (typeof(bytes) !== "number" || typeof(dot) !== "number") {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
            if (bytes === 0) {
                return "0 bytes";
            }
            var k = 1024;
            var dotPoint = dot < 0 ? 0 : dot;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dotPoint)) + ' ' + sizes[i];
        },

        convFileSize: function(bytes, format, dot) {
            if (typeof(bytes) !== "number" || typeof(format) !== "string" || typeof(dot) !== "number") {
                var err = new Error('Invalid argument type');
                err.name = "TypeError";
                throw err;
            }
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

        /* deep copy */
        copyObject: function(obj) {
            return JSON.parse(JSON.stringify(obj));
        },

        /* deep copy */
        copyArray: function(arr) {
            return JSON.parse(JSON.stringify(arr));
        },

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

        genCharset: function(charset, len) {
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

        getCookie: function(key) {
            var cookies = document.cookie.split(';');
            var cookie = cookies.find(function(e) {
                return e.split("=")[0] === key;
            });
            return cookie.split("=")[1];
        },

        setCookie: function(key, val) {
            document.cookie = key + '=' + val;
        },

        removeCookie: function(key) {
            document.cookie = key + '=; Max-Age=-99999999;';
        },

        openUrl: function(url, target) {
            window.open(url, target);
        },

        queryObject: function(dataObject, queryObject) {
            var isOperator = function(str) {
                return /^(\$and(\$[0-9]+)?|\$or(\$[0-9]+)?|\$nor(\$[0-9]+)?|\$not|\$eq|\$ne|\$in|\$nin|\$gt|\$gte|\$lt|\$lte|\$exists)$/i.test(str);
            }
            var isLogicalOperator = function(str) {
                return /^(\$and(\$[0-9]+)?|\$or(\$[0-9]+)?|\$nor(\$[0-9]+)?|\$not)$/i.test(str);
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
            var isNumberOperator = function(str) {
                return /^(\$gt|\$gte|\$lt|\$lte)$/i.test(str);
            }
            var isLoopOperator = function(str) {
                return /^(\$and(\$[0-9]+)?|\$or(\$[0-9]+)?|\$nor(\$[0-9]+)?)$/i.test(str);
            }
            var isIndexedLoopOperator = function(str) {
                return /^(\$and\$[0-9]+|\$or\$[0-9]+|\$nor\$[0-9]+)$/i.test(str);
            }
            var isUnindexedLoopOperator = function(str) {
                return /^(\$and|\$or|\$nor)$/i.test(str);
            }
            var getType = function(arg) {
                if (typeof(arg) === "object") {
                    if (Object.prototype.toString.call(arg) === '[object Array]') {
                        return "array";
                    } else if (arg === null) {
                        return "null";
                    } else {
                        return "object";
                    }
                } else {
                    return typeof(arg);
                }
            }
            var chkValueType = function(key, value) {
                var i;
                if (isUnindexedLoopOperator(key)) {
                    /* Object Array */
                    if (getType(value) !== "array") {
                        return false;
                    }
                    for (i = 0; i < value.length; i++) {
                        if (getType(value[i]) !== "object") {
                            return false;
                        }
                    }
                    return true;
                } if (isIndexedLoopOperator(key)) {
                    /* Array */
                    if (getType(value) !== "object") {
                        return false;
                    }
                    return true;
                } else if (isArrayOperator(key)) {
                    /* Array */
                    if (getType(value) !== "array") {
                        return false;
                    }
                    return true;
                } else if (isNumberOperator(key)) {
                    /* Number */
                    if (getType(value) !== "number") {
                        return false;
                    }
                    return true;
                } else if (isElementOperator(key)) {
                    /* Boolean */
                    if (getType(value) !== "boolean" && value !== 1 && value !== 0 && value !== "true" && value !== "false" && value !== "1" && value !== "0") {
                        return false;
                    }
                    return true;
                } else {
                    /* Is not operator */
                    return true;
                }
            }
            var parseQuery = function(__queryObject) {
                var results = [];
                var recursiveFunc = function(prev, curr) {
                    var i;
                    var keys;
                    var key;
                    var value;
                    var prevKey = prev.split("\.").pop();
                    if (!chkValueType(prevKey, curr)) {
                        var err = new Error('Invalid argument type');
                        err.name = "TypeError";
                        throw err;
                    } else if (isUnindexedLoopOperator(prevKey)) {
                        /* Array */
                        for (i = 0; i < curr.length; i++) {
                            value = curr[i];
                            recursiveFunc(prev+"\$"+i, value);
                        }
                    } else if (getType(curr) === "object") {
                        /* Object */
                        keys = Object.keys(curr);
                        for (i = 0; i < keys.length; i++) {
                            key = keys[i];
                            value = curr[key];
                            recursiveFunc(prev+"\."+key, value);
                        }
                    } else {
                        /* Save */
                        if (getType(curr) === "array") {
                            value = JSON.stringify(curr);
                        } else {
                            value = curr;
                        }
                        results.push(prev+"\.\$"+getType(curr)+"\$"+value);
                    }
                    return true;
                }
                recursiveFunc("", __queryObject);
                return results;
            }
            var matchQuery = function(__dataObject, __queryArray) {
                var isMatch = false;
                var i;
                var j;
                var data = __dataObject;
                var query;
                var value;
                var key;

                var getValue = function(__query, __value) {
                    var index = __query.length;
                    var count = 0;
                    if (index > count) {
                        if (/^\$.*\$.*$/i.test(__value)) {
                            return __value;
                        } else {
                            __value = __query.pop() + "." + __value;
                            return getValue(__query, __value);
                        }
                    } else {
                        var err = new Error('Invalid argument type');
                        err.name = "TypeError";
                        throw err;
                    }      
                }
                var calcOperator = function(key, value) {
                    if (isLoopOperator(key)) {

                    }
                }

                for (i = 0; i < __queryArray.length; i++) {
                    query = __queryArray[i].split("\.").splice(1);
                    value = getValue(query, query.pop());
                    console.log(query, value);

                    for (j = 0; j < query.length; j++) {
                        key = query[i];
                        
                        if (isOperator(key)) {

                        } else {

                        }
                    }
                }
            }
            
            var parsedQuery = parseQuery(queryObject);
            var res = matchQuery(dataObject, parsedQuery);
            // console.log(parsedQuery);
        },

    }

    

    if (typeof(window.utils) === "undefined") {
        window.utils = mainObject;
    }
})();