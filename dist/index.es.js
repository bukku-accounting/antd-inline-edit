import*as e from"react";import n,{createContext as r,useContext as t,useEffect as a,useState as o,useRef as i}from"react";import{Typography as c,Tooltip as l,Input as f}from"antd";import u,{css as s}from"styled-components";function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){b(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function b(e,n,r){return(n=function(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},m.apply(this,arguments)}function g(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o,i,c=[],l=!0,f=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=o.call(r)).done)&&(c.push(t.value),c.length!==n);l=!0);}catch(e){f=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(f)throw a}}return c}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var v=r({});function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function x(e){var n=function(e,n){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,n||"default");if("object"!==w(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===w(n)?n:String(n)}function C(e,n,r){return(n=x(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function O(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function k(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?O(Object(r),!0).forEach((function(n){C(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,a,o,i,c=[],l=!0,f=!1;try{if(o=(r=r.call(e)).next,0===n){if(Object(r)!==r)return;l=!1}else for(;!(l=(t=o.call(r)).done)&&(c.push(t.value),c.length!==n);l=!0);}catch(e){f=!0,a=e}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(f)throw a}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var S,N={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/S=N,function(){var e={}.hasOwnProperty;function n(){for(var r=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)r.push(a);else if(Array.isArray(a)){if(a.length){var i=n.apply(null,a);i&&r.push(i)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){r.push(a.toString());continue}for(var c in a)e.call(a,c)&&a[c]&&r.push(c)}}}return r.join(" ")}S.exports?(n.default=n,S.exports=n):window.classNames=n}();var T=_(N.exports);function F(e,n){(function(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===n?e:Math.min(n,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*n),10)/100),Math.abs(e-n)<1e-6?1:e=360===n?(e<0?e%n+n:e%n)/parseFloat(String(n)):e%n/parseFloat(String(n))}function P(e){return e<=1?"".concat(100*Number(e),"%"):e}function L(e){return 1===e.length?"0"+e:String(e)}function M(e,n,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*r*(n-e):r<.5?n:r<2/3?e+(n-e)*(2/3-r)*6:e}function D(e){return U(e)/255}function U(e){return parseInt(e,16)}var I={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function R(e){var n,r,t,a={r:0,g:0,b:0},o=1,i=null,c=null,l=null,f=!1,u=!1;return"string"==typeof e&&(e=function(e){if(e=e.trim().toLowerCase(),0===e.length)return!1;var n=!1;if(I[e])e=I[e],n=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var r=H.rgb.exec(e);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=H.rgba.exec(e),r)return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=H.hsl.exec(e),r)return{h:r[1],s:r[2],l:r[3]};if(r=H.hsla.exec(e),r)return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=H.hsv.exec(e),r)return{h:r[1],s:r[2],v:r[3]};if(r=H.hsva.exec(e),r)return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=H.hex8.exec(e),r)return{r:U(r[1]),g:U(r[2]),b:U(r[3]),a:D(r[4]),format:n?"name":"hex8"};if(r=H.hex6.exec(e),r)return{r:U(r[1]),g:U(r[2]),b:U(r[3]),format:n?"name":"hex"};if(r=H.hex4.exec(e),r)return{r:U(r[1]+r[1]),g:U(r[2]+r[2]),b:U(r[3]+r[3]),a:D(r[4]+r[4]),format:n?"name":"hex8"};if(r=H.hex3.exec(e),r)return{r:U(r[1]+r[1]),g:U(r[2]+r[2]),b:U(r[3]+r[3]),format:n?"name":"hex"};return!1}(e)),"object"==typeof e&&(V(e.r)&&V(e.g)&&V(e.b)?(n=e.r,r=e.g,t=e.b,a={r:255*F(n,255),g:255*F(r,255),b:255*F(t,255)},f=!0,u="%"===String(e.r).substr(-1)?"prgb":"rgb"):V(e.h)&&V(e.s)&&V(e.v)?(i=P(e.s),c=P(e.v),a=function(e,n,r){e=6*F(e,360),n=F(n,100),r=F(r,100);var t=Math.floor(e),a=e-t,o=r*(1-n),i=r*(1-a*n),c=r*(1-(1-a)*n),l=t%6;return{r:255*[r,i,o,o,c,r][l],g:255*[c,r,r,i,o,o][l],b:255*[o,o,c,r,r,i][l]}}(e.h,i,c),f=!0,u="hsv"):V(e.h)&&V(e.s)&&V(e.l)&&(i=P(e.s),l=P(e.l),a=function(e,n,r){var t,a,o;if(e=F(e,360),n=F(n,100),r=F(r,100),0===n)a=r,o=r,t=r;else{var i=r<.5?r*(1+n):r+n-r*n,c=2*r-i;t=M(c,i,e+1/3),a=M(c,i,e),o=M(c,i,e-1/3)}return{r:255*t,g:255*a,b:255*o}}(e.h,i,l),f=!0,u="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(o=e.a)),o=function(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}(o),{ok:f,format:e.format||u,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:o}}var q="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),z="[\\s|\\(]+(".concat(q,")[,|\\s]+(").concat(q,")[,|\\s]+(").concat(q,")\\s*\\)?"),B="[\\s|\\(]+(".concat(q,")[,|\\s]+(").concat(q,")[,|\\s]+(").concat(q,")[,|\\s]+(").concat(q,")\\s*\\)?"),H={CSS_UNIT:new RegExp(q),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+B),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+B),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+B),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function V(e){return Boolean(H.CSS_UNIT.exec(String(e)))}var W=2,$=.16,X=.05,G=.05,Q=.15,Y=5,J=4,K=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function Z(e){var n=function(e,n,r){e=F(e,255),n=F(n,255),r=F(r,255);var t=Math.max(e,n,r),a=Math.min(e,n,r),o=0,i=t,c=t-a,l=0===t?0:c/t;if(t===a)o=0;else{switch(t){case e:o=(n-r)/c+(n<r?6:0);break;case n:o=(r-e)/c+2;break;case r:o=(e-n)/c+4}o/=6}return{h:o,s:l,v:i}}(e.r,e.g,e.b);return{h:360*n.h,s:n.s,v:n.v}}function ee(e){var n=e.r,r=e.g,t=e.b;return"#".concat(function(e,n,r,t){var a=[L(Math.round(e).toString(16)),L(Math.round(n).toString(16)),L(Math.round(r).toString(16))];return t&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}(n,r,t,!1))}function ne(e,n,r){var t;return(t=Math.round(e.h)>=60&&Math.round(e.h)<=240?r?Math.round(e.h)-W*n:Math.round(e.h)+W*n:r?Math.round(e.h)+W*n:Math.round(e.h)-W*n)<0?t+=360:t>=360&&(t-=360),t}function re(e,n,r){return 0===e.h&&0===e.s?e.s:((t=r?e.s-$*n:n===J?e.s+$:e.s+X*n)>1&&(t=1),r&&n===Y&&t>.1&&(t=.1),t<.06&&(t=.06),Number(t.toFixed(2)));var t}function te(e,n,r){var t;return(t=r?e.v+G*n:e.v-Q*n)>1&&(t=1),Number(t.toFixed(2))}function ae(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],t=R(e),a=Y;a>0;a-=1){var o=Z(t),i=ee(R({h:ne(o,a,!0),s:re(o,a,!0),v:te(o,a,!0)}));r.push(i)}r.push(ee(t));for(var c=1;c<=J;c+=1){var l=Z(t),f=ee(R({h:ne(l,c),s:re(l,c),v:te(l,c)}));r.push(f)}return"dark"===n.theme?K.map((function(e){var t,a,o,i=e.index,c=e.opacity;return ee((t=R(n.backgroundColor||"#141414"),a=R(r[i]),o=100*c/100,{r:(a.r-t.r)*o+t.r,g:(a.g-t.g)*o+t.g,b:(a.b-t.b)*o+t.b}))})):r}var oe={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1677FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},ie={},ce={};Object.keys(oe).forEach((function(e){ie[e]=ae(oe[e]),ie[e].primary=ie[e][5],ce[e]=ae(oe[e],{theme:"dark",backgroundColor:"#141414"}),ce[e].primary=ce[e][5]}));var le={},fe=[];function ue(e,n){if("production"!==process.env.NODE_ENV&&!e&&void 0!==console){var r=fe.reduce((function(e,n){return n(null!=e?e:"","warning")}),n);r&&console.error("Warning: ".concat(r))}}function se(e,n){if("production"!==process.env.NODE_ENV&&!e&&void 0!==console){var r=fe.reduce((function(e,n){return n(null!=e?e:"","note")}),n);r&&console.warn("Note: ".concat(r))}}function de(e,n,r){n||le[r]||(e(!1,r),le[r]=!0)}function pe(e,n){de(ue,e,n)}pe.preMessage=function(e){fe.push(e)},pe.resetWarned=function(){le={}},pe.noteOnce=function(e,n){de(se,e,n)};var be="data-rc-order",me="rc-util-key",ge=new Map;function he(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mark;return e?e.startsWith("data-")?e:"data-".concat(e):me}function ye(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function ve(e){return Array.from((ge.get(e)||e).children).filter((function(e){return"STYLE"===e.tagName}))}function we(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"==typeof window||!window.document||!window.document.createElement)return null;var r=n.csp,t=n.prepend,a=document.createElement("style");a.setAttribute(be,function(e){return"queue"===e?"prependQueue":e?"prepend":"append"}(t)),null!=r&&r.nonce&&(a.nonce=null==r?void 0:r.nonce),a.innerHTML=e;var o=ye(n),i=o.firstChild;if(t){if("queue"===t){var c=ve(o).filter((function(e){return["prepend","prependQueue"].includes(e.getAttribute(be))}));if(c.length)return o.insertBefore(a,c[c.length-1].nextSibling),a}o.insertBefore(a,i)}else o.appendChild(a);return a}function xe(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(e,n){var r=ge.get(e);if(!r||!function(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}(document,r)){var t=we("",n),a=t.parentNode;ge.set(e,a),e.removeChild(t)}}(ye(r),r);var t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return ve(ye(n)).find((function(r){return r.getAttribute(he(n))===e}))}(n,r);if(t){var a,o,i;if(null!==(a=r.csp)&&void 0!==a&&a.nonce&&t.nonce!==(null===(o=r.csp)||void 0===o?void 0:o.nonce))t.nonce=null===(i=r.csp)||void 0===i?void 0:i.nonce;return t.innerHTML!==e&&(t.innerHTML=e),t}var c=we(e,r);return c.setAttribute(he(r),n),c}function Ce(e){return"object"===w(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===w(e.icon)||"function"==typeof e.icon)}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,r){var t=e[r];if("class"===r)n.className=t,delete n.class;else n[r]=t;return n}),{})}function ke(e,r,t){return t?n.createElement(e.tag,k(k({key:r},Oe(e.attrs)),t),(e.children||[]).map((function(n,t){return ke(n,"".concat(r,"-").concat(e.tag,"-").concat(t))}))):n.createElement(e.tag,k({key:r},Oe(e.attrs)),(e.children||[]).map((function(n,t){return ke(n,"".concat(r,"-").concat(e.tag,"-").concat(t))})))}function Ee(e){return ae(e)[0]}function Ae(e){return e?Array.isArray(e)?e:[e]:[]}var je=["icon","className","onClick","style","primaryColor","secondaryColor"],_e={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var Se=function(e){var n,r,o=e.icon,i=e.className,c=e.onClick,l=e.style,f=e.primaryColor,u=e.secondaryColor,s=j(e,je),d=_e;if(f&&(d={primaryColor:f,secondaryColor:u||Ee(f)}),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",n=t(v),r=n.csp,o=n.prefixCls,i=e;o&&(i=i.replace(/anticon/g,o)),a((function(){xe(i,"@ant-design-icons",{prepend:!0,csp:r})}),[])}(),n=Ce(o),r="icon should be icon definiton, but got ".concat(o),pe(n,"[@ant-design/icons] ".concat(r)),!Ce(o))return null;var p=o;return p&&"function"==typeof p.icon&&(p=k(k({},p),{},{icon:p.icon(d.primaryColor,d.secondaryColor)})),ke(p.icon,"svg-".concat(p.name),k({className:i,onClick:c,style:l,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},s))};Se.displayName="IconReact",Se.getTwoToneColors=function(){return k({},_e)},Se.setTwoToneColors=function(e){var n=e.primaryColor,r=e.secondaryColor;_e.primaryColor=n,_e.secondaryColor=r||Ee(n),_e.calculated=!!r};var Ne=Se;function Te(e){var n=A(Ae(e),2),r=n[0],t=n[1];return Ne.setTwoToneColors({primaryColor:r,secondaryColor:t})}var Fe=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];Te("#1890ff");var Pe=e.forwardRef((function(n,r){var t,a=n.className,o=n.icon,i=n.spin,c=n.rotate,l=n.tabIndex,f=n.onClick,u=n.twoToneColor,s=j(n,Fe),d=e.useContext(v),p=d.prefixCls,b=void 0===p?"anticon":p,m=d.rootClassName,g=T(m,b,(C(t={},"".concat(b,"-").concat(o.name),!!o.name),C(t,"".concat(b,"-spin"),!!i||"loading"===o.name),t),a),h=l;void 0===h&&f&&(h=-1);var y=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,w=A(Ae(u),2),x=w[0],O=w[1];return e.createElement("span",k(k({role:"img","aria-label":o.name},s),{},{ref:r,tabIndex:h,onClick:f,className:g}),e.createElement(Ne,{icon:o,primaryColor:x,secondaryColor:O,style:y}))}));Pe.displayName="AntdIcon",Pe.getTwoToneColor=function(){var e=Ne.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},Pe.setTwoToneColor=Te;var Le=Pe,Me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 00-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 00-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"}}]},name:"undo",theme:"outlined"},De=function(n,r){return e.createElement(Le,k(k({},n),{},{ref:r,icon:Me}))};De.displayName="UndoOutlined";var Ue,Ie=e.forwardRef(De),Re={DEFAULT_PLACEHOLDER:"Click to edit",DEFAULT_UNDO_TOOLTIP_TEXT:"Undo",DEFAULT_UNDO_ICON:n.createElement(Ie,null),DEFAULT_INPUT_MAX_LENGTH:155},qe=Object.freeze(Re),ze=c.Text;function Be(e){var r=e.onClick,t=e.label,a=e.placeholder,o=void 0===a?qe.DEFAULT_PLACEHOLDER:a,i=e.displayRenderer;if(i){var c,l=i(t||o);if("string"==typeof l)return n.createElement("div",{onClick:r,className:"inline-edit__display",role:"textbox","aria-hidden":!0},l);if(n.isValidElement(l))return n.cloneElement(l,{className:"".concat((null==l||null===(c=l.props)||void 0===c?void 0:c.className)||""," inline-edit__display"),onClick:r})}return t?n.createElement("div",{onClick:r,className:"inline-edit__display label",role:"textbox","aria-hidden":!0},t):n.createElement(He,{onClick:r,placeholder:o})}function He(e){var r=e.onClick,t=e.placeholder;return n.createElement(ze,{onClick:r,type:"secondary",className:"inline-edit__display placeholder"},t)}function Ve(e){var r=e.icon,t=e.isChanged,a=e.onUndoClick,o=e.component,i=void 0===o?"input":o;if(r&&!n.isValidElement(r))throw new Error("Invalid icon prop: icon must be a valid React element.");var c={id:"inline-edit__undo-button",className:"inline-edit input-suffix--".concat(i," ").concat(t?"":"display-none"),onClick:a};return function(){if(r){var e=r.props.className;return n.cloneElement(r,p(p({},c),{},{className:"".concat(e," ").concat(c.className)}))}return n.createElement(l,{title:qe.DEFAULT_UNDO_TOOLTIP_TEXT},n.createElement(Ie,m({id:"inline-edit__undo-button"},c)))}()}function We(e){var r=e.component,t=void 0===r?"input":r,a=e.label,o=void 0===a?"":a,i=e.defaultLabel,c=e.onSave,l=void 0===c?function(){}:c,u=e.setLabel,s=void 0===u?function(){}:u,d=e.onUndoClick,p=void 0===d?function(){}:d,b=e.inputRef,g=e.maxLength,h=function(e){var n=e.target.value;l(n||i)},y=o!==i,v={ref:b,value:o,onPressEnter:h,onBlur:function(e){var n;"inline-edit__undo-button"!==(null===(n=e.relatedTarget)||void 0===n?void 0:n.id)&&h(e)},onChange:function(e){s(e.target.value)},placeholder:i,maxLength:g},w={className:"inline-edit__input input-component ".concat(y?"has-suffix":""),suffix:n.createElement(Ve,{isChanged:y,onUndoClick:p})},x={className:"inline-edit__input textarea-component ".concat(y?"has-suffix":""),autoSize:{minRows:1,maxRows:120}};return"textarea"===t?n.createElement("div",{className:"inline-edit__wrapper inline-edit__textarea-wrapper ".concat(y?"has-suffix":"")},n.createElement(f.TextArea,m({},v,x)),n.createElement(Ve,{component:"textarea",isChanged:y,onUndoClick:p})):n.createElement(f,m({},v,w))}var $e,Xe,Ge=s(Ue||(Ue=g(["\n   /* .has-suffix { */\n    .inline-edit__input {\n        padding-right: 20px;\n    }\n   /* } */\n"]))),Qe=s($e||($e=g(["\n    .display-none {\n        display: none;\n    }\n    .textarea-component {\n        white-space: pre-wrap;\n    }\n    .inline-edit__textarea-wrapper {\n        position: relative;\n    }\n    #inline-edit__undo-button {\n        position: absolute;\n        right: 8px;\n        top: 8px;\n        font-size: 14px;\n    }\n"]))),Ye=u.div(Xe||(Xe=g(["\n  ","\n  ","\n"])),Qe,Ge);function Je(e){var r=e.children;return n.createElement(Ye,{className:"style-wrapper"},r)}function Ke(e){var r=e.onSave,t=void 0===r?function(){}:r,c=e.displayRenderer,l=void 0===c?function(){}:c,f=e.initialValue,u=void 0===f?null:f,s=e.defaultValue,d=void 0===s?null:s,p=e.maxLength,b=void 0===p?qe.DEFAULT_INPUT_MAX_LENGTH:p,m=e.inputComponent,g=void 0===m?"input":m,y=e.startWithEditViewOpen,v=void 0!==y&&y,w=e.displayPlaceholder,x=void 0===w?qe.DEFAULT_PLACEHOLDER:w,C=h(o(v),2),O=C[0],k=C[1],E=h(o(u),2),A=E[0],j=E[1],_=i();a((function(){return j(u),function(){}}),[u]),a((function(){return O&&_.current&&_.current.focus({cursor:"all"}),function(){}}),[O,_]);var S=function(e){t(e),j(e),k(!1)},N=n.createElement("div",{className:"inline-edit__input-wrapper"},n.createElement(We,{label:A,initialLabel:u,defaultLabel:d,onSave:S,setLabel:j,inputRef:_,onUndoClick:function(e){e.preventDefault(),S(d)},maxLength:b,component:g})),T=n.createElement(Be,{onClick:function(){k(!0)},label:A,placeholder:x,displayRenderer:l});return n.createElement(Je,null,O?N:T)}export{Ke as InlineEdit};
