(()=>{var e,t={225:(e,t,n)=>{"use strict";n(85);var o=n(565),r=n(10),i=n(709);const c=n(764).Buffer,a=document.getElementById("signinBtn"),s=document.getElementById("signoutBtn"),l=new i.G(document.querySelector(".mdc-snackbar")),d=document.getElementById("redirectBtn");document.getElementById("msg");let u,g="";const p=window.location.search,f=new URLSearchParams(p).get("pubKey64");(async()=>{const e={};if(f&&""!==f){const t=new c(f,"base64").toString();e.identity=o.RM.fromJSON(t),console.log(t),console.log(e.identity.getPublicKey())}u=await r.L.create(e);const t=()=>{const e=u.getIdentity(),t=e.getPrincipal();if(e instanceof o.j){a.disabled=!0;const n=e.getDelegation().toJSON()?.delegations[0]?.delegation?.pubkey,o=new c(n).toString("base64");g="exp://192.168.68.117:19000/--/Photos?principal="+t+"&publicKey64="+o,l.open(),l.timeoutMs=-1,setTimeout((()=>{window.location=g}),20)}else s.disabled=!0};t(),d.onclick=async()=>{setTimeout((()=>{window.location=g}),10)},a.onclick=async()=>{u.login({identityProvider:"https://identity.ic0.app/",onSuccess:t})},s.onclick=async()=>{u.logout(),s.disabled=!0,a.disabled=!1,t()}})()},24:()=>{}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,o),i.exports}o.m=t,o.amdO={},e=[],o.O=(t,n,r,i)=>{if(!n){var c=1/0;for(d=0;d<e.length;d++){for(var[n,r,i]=e[d],a=!0,s=0;s<n.length;s++)(!1&i||c>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(a=!1,i<c&&(c=i));if(a){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,r,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={296:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[c,a,s]=n,l=0;for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var d=s(o);for(t&&t(n);l<c.length;l++)i=c[l],o.o(e,i)&&e[i]&&e[i][0](),e[c[l]]=0;return o.O(d)},n=self.webpackChunkWeb_Internet_Providers=self.webpackChunkWeb_Internet_Providers||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,[706],(()=>o(225)));r=o.O(r)})();
//# sourceMappingURL=bundle.js.map