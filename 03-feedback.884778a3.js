!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function O(e){return c=e,f=setTimeout(w,t),d?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=p();if(h(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function S(e){return f=void 0,v&&i?y(e):(i=o=void 0,a)}function T(){var e=p(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(w,t),y(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:S(p())},T}function b(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=a.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector("form"),h="feedback-form-state";O.addEventListener("input",n((function(e){S[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(S))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(S),localStorage.removeItem(h),O.reset()}));var w,S={};(w=JSON.parse(localStorage.getItem(h)))&&(O.email.value=w.email,O.message.value=w.message)}();
//# sourceMappingURL=03-feedback.884778a3.js.map
