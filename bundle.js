(()=>{var e,t={225:(e,t,n)=>{"use strict";n(85);var r=n(565),i=n(10);const o=document.getElementById("signinBtn"),a=document.getElementById("signoutBtn"),c=document.getElementById("msg");let l;(async()=>{l=await i.L.create();const e=()=>{const e=l.getIdentity(),t=e.getPrincipal();if(e instanceof r.j){e.getDelegation().toJSON().publicKey.toString();const n="exp://192.168.68.117:19000/--/Photos?principal="+t+"&publicKey=";c.innerHTML="Redirecting to application now. Click <a href='"+n+"'>HERE</a> if not redirected automatically",setTimeout((()=>{window.location=n}),20)}else c.innerHTML=""};e(),o.onclick=async()=>{l.login({identityProvider:"https://identity.ic0.app/",onSuccess:e})},a.onclick=async()=>{l.logout(),e()}})()},24:()=>{}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,r.amdO={},e=[],r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(s=0;s<e.length;s++){for(var[n,i,o]=e[s],c=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,o<a&&(a=o));c&&(e.splice(s--,1),t=i())}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={296:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,c,l]=n,s=0;for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(l)var p=l(r);for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0;return r.O(p)},n=self.webpackChunkic_agent_sample_javascript_app=self.webpackChunkic_agent_sample_javascript_app||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=r.O(void 0,[10],(()=>r(225)));i=r.O(i)})();
//# sourceMappingURL=bundle.js.map