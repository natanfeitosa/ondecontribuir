(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function x6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}function b6(c){if(F(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=i1(s)?Qn(s):b6(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(i1(c))return c;if(K(c))return c}}const Yn=/;(?![^(]*\))/g,Xn=/:([^]+)/,Jn=/\/\*.*?\*\//gs;function Qn(c){const a={};return c.replace(Jn,"").split(Yn).forEach(e=>{if(e){const s=e.split(Xn);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function f4(c){let a="";if(i1(c))a=c;else if(F(c))for(let e=0;e<c.length;e++){const s=f4(c[e]);s&&(a+=s+" ")}else if(K(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const cf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",af=x6(cf);function v0(c){return!!c||c===""}function ef(c,a){if(c.length!==a.length)return!1;let e=!0;for(let s=0;e&&s<c.length;s++)e=l4(c[s],a[s]);return e}function l4(c,a){if(c===a)return!0;let e=f5(c),s=f5(a);if(e||s)return e&&s?c.getTime()===a.getTime():!1;if(e=Q2(c),s=Q2(a),e||s)return c===a;if(e=F(c),s=F(a),e||s)return e&&s?ef(c,a):!1;if(e=K(c),s=K(a),e||s){if(!e||!s)return!1;const r=Object.keys(c).length,i=Object.keys(a).length;if(r!==i)return!1;for(const n in c){const f=c.hasOwnProperty(n),l=a.hasOwnProperty(n);if(f&&!l||!f&&l||!l4(c[n],a[n]))return!1}}return String(c)===String(a)}function sf(c,a){return c.findIndex(e=>l4(e,a))}const O4=c=>i1(c)?c:c==null?"":F(c)||K(c)&&(c.toString===H0||!_(c.toString))?JSON.stringify(c,h0,2):String(c),h0=(c,a)=>a&&a.__v_isRef?h0(c,a.value):k2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:t4(a)?{[`Set(${a.size})`]:[...a.values()]}:K(a)&&!F(a)&&!u0(a)?String(a):a,Y={},y2=[],A1=()=>{},rf=()=>!1,nf=/^on[^a-z]/,o4=c=>nf.test(c),N6=c=>c.startsWith("onUpdate:"),h1=Object.assign,S6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},ff=Object.prototype.hasOwnProperty,U=(c,a)=>ff.call(c,a),F=Array.isArray,k2=c=>v3(c)==="[object Map]",t4=c=>v3(c)==="[object Set]",f5=c=>v3(c)==="[object Date]",_=c=>typeof c=="function",i1=c=>typeof c=="string",Q2=c=>typeof c=="symbol",K=c=>c!==null&&typeof c=="object",w6=c=>K(c)&&_(c.then)&&_(c.catch),H0=Object.prototype.toString,v3=c=>H0.call(c),lf=c=>v3(c).slice(8,-1),u0=c=>v3(c)==="[object Object]",y6=c=>i1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,q3=x6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),m4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},of=/-(\w)/g,E1=m4(c=>c.replace(of,(a,e)=>e?e.toUpperCase():"")),tf=/\B([A-Z])/g,q2=m4(c=>c.replace(tf,"-$1").toLowerCase()),z4=m4(c=>c.charAt(0).toUpperCase()+c.slice(1)),U4=m4(c=>c?`on${z4(c)}`:""),c3=(c,a)=>!Object.is(c,a),O3=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},K3=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},F2=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let l5;const mf=()=>l5||(l5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let R1;class zf{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=R1,!a&&R1&&(this.index=(R1.scopes||(R1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=R1;try{return R1=this,a()}finally{R1=e}}}on(){R1=this}off(){R1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function vf(c,a=R1){a&&a.active&&a.effects.push(c)}const k6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},p0=c=>(c.w&e2)>0,V0=c=>(c.n&e2)>0,hf=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=e2},Hf=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];p0(r)&&!V0(r)?r.delete(c):a[e++]=r,r.w&=~e2,r.n&=~e2}a.length=e}},X4=new WeakMap;let G2=0,e2=1;const J4=30;let w1;const d2=Symbol(""),Q4=Symbol("");class A6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,vf(this,s)}run(){if(!this.active)return this.fn();let a=w1,e=Q1;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=w1,w1=this,Q1=!0,e2=1<<++G2,G2<=J4?hf(this):o5(this),this.fn()}finally{G2<=J4&&Hf(this),e2=1<<--G2,w1=this.parent,Q1=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w1===this?this.deferStop=!0:this.active&&(o5(this),this.onStop&&this.onStop(),this.active=!1)}}function o5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let Q1=!0;const M0=[];function O2(){M0.push(Q1),Q1=!1}function U2(){const c=M0.pop();Q1=c===void 0?!0:c}function d1(c,a,e){if(Q1&&w1){let s=X4.get(c);s||X4.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=k6()),C0(r)}}function C0(c,a){let e=!1;G2<=J4?V0(c)||(c.n|=e2,e=!p0(c)):e=!c.has(w1),e&&(c.add(w1),w1.deps.push(c))}function U1(c,a,e,s,r,i){const n=X4.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&F(c)){const l=F2(s);n.forEach((t,m)=>{(m==="length"||m>=l)&&f.push(t)})}else switch(e!==void 0&&f.push(n.get(e)),a){case"add":F(c)?y6(e)&&f.push(n.get("length")):(f.push(n.get(d2)),k2(c)&&f.push(n.get(Q4)));break;case"delete":F(c)||(f.push(n.get(d2)),k2(c)&&f.push(n.get(Q4)));break;case"set":k2(c)&&f.push(n.get(d2));break}if(f.length===1)f[0]&&c6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);c6(k6(l))}}function c6(c,a){const e=F(c)?c:[...c];for(const s of e)s.computed&&t5(s);for(const s of e)s.computed||t5(s)}function t5(c,a){(c!==w1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const uf=x6("__proto__,__v_isRef,__isVue"),d0=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(Q2)),pf=P6(),Vf=P6(!1,!0),Mf=P6(!0),m5=Cf();function Cf(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=I(this);for(let i=0,n=this.length;i<n;i++)d1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(I)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){O2();const s=I(this)[a].apply(this,e);return U2(),s}}),c}function P6(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?Rf:N0:a?b0:x0).get(s))return s;const n=F(s);if(!c&&n&&U(m5,r))return Reflect.get(m5,r,i);const f=Reflect.get(s,r,i);return(Q2(r)?d0.has(r):uf(r))||(c||d1(s,"get",r),a)?f:t1(f)?n&&y6(r)?f:f.value:K(f)?c?S0(f):F6(f):f}}const df=L0(),Lf=L0(!0);function L0(c=!1){return function(e,s,r,i){let n=e[s];if(R2(n)&&t1(n)&&!t1(r))return!1;if(!c&&(!Y3(r)&&!R2(r)&&(n=I(n),r=I(r)),!F(e)&&t1(n)&&!t1(r)))return n.value=r,!0;const f=F(e)&&y6(s)?Number(s)<e.length:U(e,s),l=Reflect.set(e,s,r,i);return e===I(i)&&(f?c3(r,n)&&U1(e,"set",s,r):U1(e,"add",s,r)),l}}function gf(c,a){const e=U(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&U1(c,"delete",a,void 0),s}function xf(c,a){const e=Reflect.has(c,a);return(!Q2(a)||!d0.has(a))&&d1(c,"has",a),e}function bf(c){return d1(c,"iterate",F(c)?"length":d2),Reflect.ownKeys(c)}const g0={get:pf,set:df,deleteProperty:gf,has:xf,ownKeys:bf},Nf={get:Mf,set(c,a){return!0},deleteProperty(c,a){return!0}},Sf=h1({},g0,{get:Vf,set:Lf}),T6=c=>c,v4=c=>Reflect.getPrototypeOf(c);function b3(c,a,e=!1,s=!1){c=c.__v_raw;const r=I(c),i=I(a);e||(a!==i&&d1(r,"get",a),d1(r,"get",i));const{has:n}=v4(r),f=s?T6:e?D6:a3;if(n.call(r,a))return f(c.get(a));if(n.call(r,i))return f(c.get(i));c!==r&&c.get(a)}function N3(c,a=!1){const e=this.__v_raw,s=I(e),r=I(c);return a||(c!==r&&d1(s,"has",c),d1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function S3(c,a=!1){return c=c.__v_raw,!a&&d1(I(c),"iterate",d2),Reflect.get(c,"size",c)}function z5(c){c=I(c);const a=I(this);return v4(a).has.call(a,c)||(a.add(c),U1(a,"add",c,c)),this}function v5(c,a){a=I(a);const e=I(this),{has:s,get:r}=v4(e);let i=s.call(e,c);i||(c=I(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?c3(a,n)&&U1(e,"set",c,a):U1(e,"add",c,a),this}function h5(c){const a=I(this),{has:e,get:s}=v4(a);let r=e.call(a,c);r||(c=I(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&U1(a,"delete",c,void 0),i}function H5(){const c=I(this),a=c.size!==0,e=c.clear();return a&&U1(c,"clear",void 0,void 0),e}function w3(c,a){return function(s,r){const i=this,n=i.__v_raw,f=I(n),l=a?T6:c?D6:a3;return!c&&d1(f,"iterate",d2),n.forEach((t,m)=>s.call(r,l(t),l(m),i))}}function y3(c,a,e){return function(...s){const r=this.__v_raw,i=I(r),n=k2(i),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=r[c](...s),m=e?T6:a?D6:a3;return!a&&d1(i,"iterate",l?Q4:d2),{next(){const{value:v,done:h}=t.next();return h?{value:v,done:h}:{value:f?[m(v[0]),m(v[1])]:m(v),done:h}},[Symbol.iterator](){return this}}}}function K1(c){return function(...a){return c==="delete"?!1:this}}function wf(){const c={get(i){return b3(this,i)},get size(){return S3(this)},has:N3,add:z5,set:v5,delete:h5,clear:H5,forEach:w3(!1,!1)},a={get(i){return b3(this,i,!1,!0)},get size(){return S3(this)},has:N3,add:z5,set:v5,delete:h5,clear:H5,forEach:w3(!1,!0)},e={get(i){return b3(this,i,!0)},get size(){return S3(this,!0)},has(i){return N3.call(this,i,!0)},add:K1("add"),set:K1("set"),delete:K1("delete"),clear:K1("clear"),forEach:w3(!0,!1)},s={get(i){return b3(this,i,!0,!0)},get size(){return S3(this,!0)},has(i){return N3.call(this,i,!0)},add:K1("add"),set:K1("set"),delete:K1("delete"),clear:K1("clear"),forEach:w3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=y3(i,!1,!1),e[i]=y3(i,!0,!1),a[i]=y3(i,!1,!0),s[i]=y3(i,!0,!0)}),[c,e,a,s]}const[yf,kf,Af,Pf]=wf();function B6(c,a){const e=a?c?Pf:Af:c?kf:yf;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(U(e,r)&&r in s?e:s,r,i)}const Tf={get:B6(!1,!1)},Bf={get:B6(!1,!0)},Ff={get:B6(!0,!1)},x0=new WeakMap,b0=new WeakMap,N0=new WeakMap,Rf=new WeakMap;function Df(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _f(c){return c.__v_skip||!Object.isExtensible(c)?0:Df(lf(c))}function F6(c){return R2(c)?c:R6(c,!1,g0,Tf,x0)}function Ef(c){return R6(c,!1,Sf,Bf,b0)}function S0(c){return R6(c,!0,Nf,Ff,N0)}function R6(c,a,e,s,r){if(!K(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=_f(c);if(n===0)return c;const f=new Proxy(c,n===2?s:e);return r.set(c,f),f}function A2(c){return R2(c)?A2(c.__v_raw):!!(c&&c.__v_isReactive)}function R2(c){return!!(c&&c.__v_isReadonly)}function Y3(c){return!!(c&&c.__v_isShallow)}function w0(c){return A2(c)||R2(c)}function I(c){const a=c&&c.__v_raw;return a?I(a):c}function y0(c){return K3(c,"__v_skip",!0),c}const a3=c=>K(c)?F6(c):c,D6=c=>K(c)?S0(c):c;function k0(c){Q1&&w1&&(c=I(c),C0(c.dep||(c.dep=k6())))}function A0(c,a){c=I(c),c.dep&&c6(c.dep)}function t1(c){return!!(c&&c.__v_isRef===!0)}function Z2(c){return qf(c,!1)}function qf(c,a){return t1(c)?c:new Of(c,a)}class Of{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:I(a),this._value=e?a:a3(a)}get value(){return k0(this),this._value}set value(a){const e=this.__v_isShallow||Y3(a)||R2(a);a=e?a:I(a),c3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:a3(a),A0(this))}}function a6(c){return t1(c)?c.value:c}const Uf={get:(c,a,e)=>a6(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return t1(r)&&!t1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function P0(c){return A2(c)?c:new Proxy(c,Uf)}var T0;class If{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[T0]=!1,this._dirty=!0,this.effect=new A6(a,()=>{this._dirty||(this._dirty=!0,A0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=I(this);return k0(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}T0="__v_isReadonly";function Wf(c,a,e=!1){let s,r;const i=_(c);return i?(s=c,r=A1):(s=c.get,r=c.set),new If(s,r,i||!r,e)}function c2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){h3(i,a,e)}return r}function P1(c,a,e,s){if(_(c)){const i=c2(c,a,e,s);return i&&w6(i)&&i.catch(n=>{h3(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(P1(c[i],a,e,s));return r}function h3(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=e;for(;i;){const t=i.ec;if(t){for(let m=0;m<t.length;m++)if(t[m](c,n,f)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){c2(l,null,10,[c,n,f]);return}}Gf(c,e,r,s)}function Gf(c,a,e,s=!0){console.error(c)}let e3=!1,e6=!1;const l1=[];let D1=0;const P2=[];let O1=null,H2=0;const B0=Promise.resolve();let _6=null;function jf(c){const a=_6||B0;return c?a.then(this?c.bind(this):c):a}function Zf(c){let a=D1+1,e=l1.length;for(;a<e;){const s=a+e>>>1;s3(l1[s])<c?a=s+1:e=s}return a}function E6(c){(!l1.length||!l1.includes(c,e3&&c.allowRecurse?D1+1:D1))&&(c.id==null?l1.push(c):l1.splice(Zf(c.id),0,c),F0())}function F0(){!e3&&!e6&&(e6=!0,_6=B0.then(_0))}function $f(c){const a=l1.indexOf(c);a>D1&&l1.splice(a,1)}function R0(c){F(c)?P2.push(...c):(!O1||!O1.includes(c,c.allowRecurse?H2+1:H2))&&P2.push(c),F0()}function u5(c,a=e3?D1+1:0){for(;a<l1.length;a++){const e=l1[a];e&&e.pre&&(l1.splice(a,1),a--,e())}}function D0(c){if(P2.length){const a=[...new Set(P2)];if(P2.length=0,O1){O1.push(...a);return}for(O1=a,O1.sort((e,s)=>s3(e)-s3(s)),H2=0;H2<O1.length;H2++)O1[H2]();O1=null,H2=0}}const s3=c=>c.id==null?1/0:c.id,Kf=(c,a)=>{const e=s3(c)-s3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function _0(c){e6=!1,e3=!0,l1.sort(Kf);const a=A1;try{for(D1=0;D1<l1.length;D1++){const e=l1[D1];e&&e.active!==!1&&c2(e,null,14)}}finally{D1=0,l1.length=0,D0(),e3=!1,_6=null,(l1.length||P2.length)&&_0()}}function Yf(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||Y;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const m=`${n==="modelValue"?"model":n}Modifiers`,{number:v,trim:h}=s[m]||Y;h&&(r=e.map(d=>i1(d)?d.trim():d)),v&&(r=e.map(F2))}let f,l=s[f=U4(a)]||s[f=U4(E1(a))];!l&&i&&(l=s[f=U4(q2(a))]),l&&P1(l,c,6,r);const t=s[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,P1(t,c,6,r)}}function E0(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},f=!1;if(!_(c)){const l=t=>{const m=E0(t,a,!0);m&&(f=!0,h1(n,m))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!f?(K(c)&&s.set(c,null),null):(F(i)?i.forEach(l=>n[l]=null):h1(n,i),K(c)&&s.set(c,n),n)}function h4(c,a){return!c||!o4(a)?!1:(a=a.slice(2).replace(/Once$/,""),U(c,a[0].toLowerCase()+a.slice(1))||U(c,q2(a))||U(c,a))}let C1=null,q0=null;function X3(c){const a=C1;return C1=c,q0=c&&c.type.__scopeId||null,a}function s6(c,a=C1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&N5(-1);const i=X3(a);let n;try{n=c(...r)}finally{X3(i),s._d&&N5(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function I4(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:f,attrs:l,emit:t,render:m,renderCache:v,data:h,setupState:d,ctx:A,inheritAttrs:k}=c;let O,g;const p=X3(c);try{if(e.shapeFlag&4){const B=r||s;O=S1(m.call(B,B,v,i,d,h,A)),g=l}else{const B=a;O=S1(B.length>1?B(i,{attrs:l,slots:f,emit:t}):B(i,null)),g=a.props?l:Jf(l)}}catch(B){K2.length=0,h3(B,c,1),O=$(I1)}let C=O;if(g&&k!==!1){const B=Object.keys(g),{shapeFlag:D}=C;B.length&&D&7&&(n&&B.some(N6)&&(g=Qf(g,n)),C=_2(C,g))}return e.dirs&&(C=_2(C),C.dirs=C.dirs?C.dirs.concat(e.dirs):e.dirs),e.transition&&(C.transition=e.transition),O=C,X3(p),O}function Xf(c){let a;for(let e=0;e<c.length;e++){const s=c[e];if(Q3(s)){if(s.type!==I1||s.children==="v-if"){if(a)return;a=s}}else return}return a}const Jf=c=>{let a;for(const e in c)(e==="class"||e==="style"||o4(e))&&((a||(a={}))[e]=c[e]);return a},Qf=(c,a)=>{const e={};for(const s in c)(!N6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function cl(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:f,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?p5(s,n,t):!!n;if(l&8){const m=a.dynamicProps;for(let v=0;v<m.length;v++){const h=m[v];if(n[h]!==s[h]&&!h4(t,h))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===n?!1:s?n?p5(s,n,t):!0:!!n;return!1}function p5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!h4(e,i))return!0}return!1}function q6({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const al=c=>c.__isSuspense,el={name:"Suspense",__isSuspense:!0,process(c,a,e,s,r,i,n,f,l,t){c==null?rl(a,e,s,r,i,n,f,l,t):il(c,a,e,s,r,n,f,l,t)},hydrate:nl,create:O6,normalize:fl},sl=el;function r3(c,a){const e=c.props&&c.props[a];_(e)&&e()}function rl(c,a,e,s,r,i,n,f,l){const{p:t,o:{createElement:m}}=l,v=m("div"),h=c.suspense=O6(c,r,s,a,v,e,i,n,f,l);t(null,h.pendingBranch=c.ssContent,v,null,s,h,i,n),h.deps>0?(r3(c,"onPending"),r3(c,"onFallback"),t(null,c.ssFallback,a,e,s,null,i,n),T2(h,c.ssFallback)):h.resolve()}function il(c,a,e,s,r,i,n,f,{p:l,um:t,o:{createElement:m}}){const v=a.suspense=c.suspense;v.vnode=a,a.el=c.el;const h=a.ssContent,d=a.ssFallback,{activeBranch:A,pendingBranch:k,isInFallback:O,isHydrating:g}=v;if(k)v.pendingBranch=h,J1(h,k)?(l(k,h,v.hiddenContainer,null,r,v,i,n,f),v.deps<=0?v.resolve():O&&(l(A,d,e,s,r,null,i,n,f),T2(v,d))):(v.pendingId++,g?(v.isHydrating=!1,v.activeBranch=k):t(k,r,v),v.deps=0,v.effects.length=0,v.hiddenContainer=m("div"),O?(l(null,h,v.hiddenContainer,null,r,v,i,n,f),v.deps<=0?v.resolve():(l(A,d,e,s,r,null,i,n,f),T2(v,d))):A&&J1(h,A)?(l(A,h,e,s,r,v,i,n,f),v.resolve(!0)):(l(null,h,v.hiddenContainer,null,r,v,i,n,f),v.deps<=0&&v.resolve()));else if(A&&J1(h,A))l(A,h,e,s,r,v,i,n,f),T2(v,h);else if(r3(a,"onPending"),v.pendingBranch=h,v.pendingId++,l(null,h,v.hiddenContainer,null,r,v,i,n,f),v.deps<=0)v.resolve();else{const{timeout:p,pendingId:C}=v;p>0?setTimeout(()=>{v.pendingId===C&&v.fallback(d)},p):p===0&&v.fallback(d)}}function O6(c,a,e,s,r,i,n,f,l,t,m=!1){const{p:v,m:h,um:d,n:A,o:{parentNode:k,remove:O}}=t,g=F2(c.props&&c.props.timeout),p={vnode:c,parent:a,parentComponent:e,isSVG:n,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:m,isUnmounted:!1,effects:[],resolve(C=!1){const{vnode:B,activeBranch:D,pendingBranch:W,pendingId:Q,effects:e1,parentComponent:r1,container:m1}=p;if(p.isHydrating)p.isHydrating=!1;else if(!C){const l2=D&&W.transition&&W.transition.mode==="out-in";l2&&(D.transition.afterLeave=()=>{Q===p.pendingId&&h(W,m1,o2,0)});let{anchor:o2}=p;D&&(o2=A(D),d(D,r1,p,!0)),l2||h(W,m1,o2,0)}T2(p,W),p.pendingBranch=null,p.isInFallback=!1;let H1=p.parent,f2=!1;for(;H1;){if(H1.pendingBranch){H1.effects.push(...e1),f2=!0;break}H1=H1.parent}f2||R0(e1),p.effects=[],r3(B,"onResolve")},fallback(C){if(!p.pendingBranch)return;const{vnode:B,activeBranch:D,parentComponent:W,container:Q,isSVG:e1}=p;r3(B,"onFallback");const r1=A(D),m1=()=>{p.isInFallback&&(v(null,C,Q,r1,W,null,e1,f,l),T2(p,C))},H1=C.transition&&C.transition.mode==="out-in";H1&&(D.transition.afterLeave=m1),p.isInFallback=!0,d(D,W,null,!0),H1||m1()},move(C,B,D){p.activeBranch&&h(p.activeBranch,C,B,D),p.container=C},next(){return p.activeBranch&&A(p.activeBranch)},registerDep(C,B){const D=!!p.pendingBranch;D&&p.deps++;const W=C.vnode.el;C.asyncDep.catch(Q=>{h3(Q,C,0)}).then(Q=>{if(C.isUnmounted||p.isUnmounted||p.pendingId!==C.suspenseId)return;C.asyncResolved=!0;const{vnode:e1}=C;o6(C,Q,!1),W&&(e1.el=W);const r1=!W&&C.subTree.el;B(C,e1,k(W||C.subTree.el),W?null:A(C.subTree),p,n,l),r1&&O(r1),q6(C,e1.el),D&&--p.deps===0&&p.resolve()})},unmount(C,B){p.isUnmounted=!0,p.activeBranch&&d(p.activeBranch,e,C,B),p.pendingBranch&&d(p.pendingBranch,e,C,B)}};return p}function nl(c,a,e,s,r,i,n,f,l){const t=a.suspense=O6(a,s,e,c.parentNode,document.createElement("div"),null,r,i,n,f,!0),m=l(c,t.pendingBranch=a.ssContent,e,t,i,n);return t.deps===0&&t.resolve(),m}function fl(c){const{shapeFlag:a,children:e}=c,s=a&32;c.ssContent=V5(s?e.default:e),c.ssFallback=s?V5(e.fallback):$(I1)}function V5(c){let a;if(_(c)){const e=D2&&c._c;e&&(c._d=!1,o1()),c=c(),e&&(c._d=!0,a=x1,s7())}return F(c)&&(c=Xf(c)),c=S1(c),a&&!c.dynamicChildren&&(c.dynamicChildren=a.filter(e=>e!==c)),c}function ll(c,a){a&&a.pendingBranch?F(c)?a.effects.push(...c):a.effects.push(c):R0(c)}function T2(c,a){c.activeBranch=a;const{vnode:e,parentComponent:s}=c,r=e.el=a.el;s&&s.subTree===e&&(s.vnode.el=r,q6(s,r))}function ol(c,a){if(f1){let e=f1.provides;const s=f1.parent&&f1.parent.provides;s===e&&(e=f1.provides=Object.create(s)),e[c]=a}}function U3(c,a,e=!1){const s=f1||C1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&_(a)?a.call(s.proxy):a}}const k3={};function I3(c,a,e){return O0(c,a,e)}function O0(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=Y){const f=f1;let l,t=!1,m=!1;if(t1(c)?(l=()=>c.value,t=Y3(c)):A2(c)?(l=()=>c,s=!0):F(c)?(m=!0,t=c.some(C=>A2(C)||Y3(C)),l=()=>c.map(C=>{if(t1(C))return C.value;if(A2(C))return V2(C);if(_(C))return c2(C,f,2)})):_(c)?a?l=()=>c2(c,f,2):l=()=>{if(!(f&&f.isUnmounted))return v&&v(),P1(c,f,3,[h])}:l=A1,a&&s){const C=l;l=()=>V2(C())}let v,h=C=>{v=g.onStop=()=>{c2(C,f,4)}},d;if(n3)if(h=A1,a?e&&P1(a,f,3,[l(),m?[]:void 0,h]):l(),r==="sync"){const C=so();d=C.__watcherHandles||(C.__watcherHandles=[])}else return A1;let A=m?new Array(c.length).fill(k3):k3;const k=()=>{if(g.active)if(a){const C=g.run();(s||t||(m?C.some((B,D)=>c3(B,A[D])):c3(C,A)))&&(v&&v(),P1(a,f,3,[C,A===k3?void 0:m&&A[0]===k3?[]:A,h]),A=C)}else g.run()};k.allowRecurse=!!a;let O;r==="sync"?O=k:r==="post"?O=()=>p1(k,f&&f.suspense):(k.pre=!0,f&&(k.id=f.uid),O=()=>E6(k));const g=new A6(l,O);a?e?k():A=g.run():r==="post"?p1(g.run.bind(g),f&&f.suspense):g.run();const p=()=>{g.stop(),f&&f.scope&&S6(f.scope.effects,g)};return d&&d.push(p),p}function tl(c,a,e){const s=this.proxy,r=i1(c)?c.includes(".")?U0(s,c):()=>s[c]:c.bind(s,s);let i;_(a)?i=a:(i=a.handler,e=a);const n=f1;s2(this);const f=O0(r,i.bind(s),e);return n?s2(n):a2(),f}function U0(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function V2(c,a){if(!K(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),t1(c))V2(c.value,a);else if(F(c))for(let e=0;e<c.length;e++)V2(c[e],a);else if(t4(c)||k2(c))c.forEach(e=>{V2(e,a)});else if(u0(c))for(const e in c)V2(c[e],a);return c}function x2(c){return _(c)?{setup:c,name:c.name}:c}const W3=c=>!!c.type.__asyncLoader,I0=c=>c.type.__isKeepAlive;function ml(c,a){W0(c,"a",a)}function zl(c,a){W0(c,"da",a)}function W0(c,a,e=f1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(H4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)I0(r.parent.vnode)&&vl(s,a,e,r),r=r.parent}}function vl(c,a,e,s){const r=H4(a,c,s,!0);U6(()=>{S6(s[a],r)},e)}function H4(c,a,e=f1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;O2(),s2(e);const f=P1(a,e,c,n);return a2(),U2(),f});return s?r.unshift(i):r.push(i),i}}const Z1=c=>(a,e=f1)=>(!n3||c==="sp")&&H4(c,(...s)=>a(...s),e),hl=Z1("bm"),G0=Z1("m"),Hl=Z1("bu"),ul=Z1("u"),pl=Z1("bum"),U6=Z1("um"),Vl=Z1("sp"),Ml=Z1("rtg"),Cl=Z1("rtc");function dl(c,a=f1){H4("ec",c,a)}function j0(c,a){const e=C1;if(e===null)return c;const s=V4(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,f,l,t=Y]=a[i];n&&(_(n)&&(n={mounted:n,updated:n}),n.deep&&V2(f),r.push({dir:n,instance:s,value:f,oldValue:void 0,arg:l,modifiers:t}))}return c}function z2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const f=r[n];i&&(f.oldValue=i[n].value);let l=f.dir[s];l&&(O2(),P1(l,e,8,[c.el,f,c,a]),U2())}}const Z0="components";function I6(c,a){return gl(Z0,c,!0,a)||c}const Ll=Symbol();function gl(c,a,e=!0,s=!1){const r=C1||f1;if(r){const i=r.type;if(c===Z0){const f=Ql(i,!1);if(f&&(f===a||f===E1(a)||f===z4(E1(a))))return i}const n=M5(r[c]||i[c],a)||M5(r.appContext[c],a);return!n&&s?i:n}}function M5(c,a){return c&&(c[a]||c[E1(a)]||c[z4(E1(a))])}function $0(c,a,e,s){let r;const i=e&&e[s];if(F(c)||i1(c)){r=new Array(c.length);for(let n=0,f=c.length;n<f;n++)r[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){r=new Array(c);for(let n=0;n<c;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(K(c))if(c[Symbol.iterator])r=Array.from(c,(n,f)=>a(n,f,void 0,i&&i[f]));else{const n=Object.keys(c);r=new Array(n.length);for(let f=0,l=n.length;f<l;f++){const t=n[f];r[f]=a(c[t],t,f,i&&i[f])}}else r=[];return e&&(e[s]=r),r}const r6=c=>c?f7(c)?V4(c)||c.proxy:r6(c.parent):null,$2=h1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>r6(c.parent),$root:c=>r6(c.root),$emit:c=>c.emit,$options:c=>W6(c),$forceUpdate:c=>c.f||(c.f=()=>E6(c.update)),$nextTick:c=>c.n||(c.n=jf.bind(c.proxy)),$watch:c=>tl.bind(c)}),W4=(c,a)=>c!==Y&&!c.__isScriptSetup&&U(c,a),xl={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const d=n[a];if(d!==void 0)switch(d){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(W4(s,a))return n[a]=1,s[a];if(r!==Y&&U(r,a))return n[a]=2,r[a];if((t=c.propsOptions[0])&&U(t,a))return n[a]=3,i[a];if(e!==Y&&U(e,a))return n[a]=4,e[a];i6&&(n[a]=0)}}const m=$2[a];let v,h;if(m)return a==="$attrs"&&d1(c,"get",a),m(c);if((v=f.__cssModules)&&(v=v[a]))return v;if(e!==Y&&U(e,a))return n[a]=4,e[a];if(h=l.config.globalProperties,U(h,a))return h[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return W4(r,a)?(r[a]=e,!0):s!==Y&&U(s,a)?(s[a]=e,!0):U(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let f;return!!e[n]||c!==Y&&U(c,n)||W4(a,n)||(f=i[0])&&U(f,n)||U(s,n)||U($2,n)||U(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:U(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let i6=!0;function bl(c){const a=W6(c),e=c.proxy,s=c.ctx;i6=!1,a.beforeCreate&&C5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:f,provide:l,inject:t,created:m,beforeMount:v,mounted:h,beforeUpdate:d,updated:A,activated:k,deactivated:O,beforeDestroy:g,beforeUnmount:p,destroyed:C,unmounted:B,render:D,renderTracked:W,renderTriggered:Q,errorCaptured:e1,serverPrefetch:r1,expose:m1,inheritAttrs:H1,components:f2,directives:l2,filters:o2}=a;if(t&&Nl(t,s,null,c.appContext.config.unwrapInjectedRef),n)for(const c1 in n){const j=n[c1];_(j)&&(s[c1]=j.bind(e))}if(r){const c1=r.call(e,e);K(c1)&&(c.data=F6(c1))}if(i6=!0,i)for(const c1 in i){const j=i[c1],t2=_(j)?j.bind(e,e):_(j.get)?j.get.bind(e,e):A1,g3=!_(j)&&_(j.set)?j.set.bind(e):A1,m2=M1({get:t2,set:g3});Object.defineProperty(s,c1,{enumerable:!0,configurable:!0,get:()=>m2.value,set:T1=>m2.value=T1})}if(f)for(const c1 in f)K0(f[c1],s,e,c1);if(l){const c1=_(l)?l.call(e):l;Reflect.ownKeys(c1).forEach(j=>{ol(j,c1[j])})}m&&C5(m,c,"c");function z1(c1,j){F(j)?j.forEach(t2=>c1(t2.bind(e))):j&&c1(j.bind(e))}if(z1(hl,v),z1(G0,h),z1(Hl,d),z1(ul,A),z1(ml,k),z1(zl,O),z1(dl,e1),z1(Cl,W),z1(Ml,Q),z1(pl,p),z1(U6,B),z1(Vl,r1),F(m1))if(m1.length){const c1=c.exposed||(c.exposed={});m1.forEach(j=>{Object.defineProperty(c1,j,{get:()=>e[j],set:t2=>e[j]=t2})})}else c.exposed||(c.exposed={});D&&c.render===A1&&(c.render=D),H1!=null&&(c.inheritAttrs=H1),f2&&(c.components=f2),l2&&(c.directives=l2)}function Nl(c,a,e=A1,s=!1){F(c)&&(c=n6(c));for(const r in c){const i=c[r];let n;K(i)?"default"in i?n=U3(i.from||r,i.default,!0):n=U3(i.from||r):n=U3(i),t1(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:f=>n.value=f}):a[r]=n}}function C5(c,a,e){P1(F(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function K0(c,a,e,s){const r=s.includes(".")?U0(e,s):()=>e[s];if(i1(c)){const i=a[c];_(i)&&I3(r,i)}else if(_(c))I3(r,c.bind(e));else if(K(c))if(F(c))c.forEach(i=>K0(i,a,e,s));else{const i=_(c.handler)?c.handler.bind(e):a[c.handler];_(i)&&I3(r,i,c)}}function W6(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,f=i.get(a);let l;return f?l=f:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>J3(l,t,n,!0)),J3(l,a,n)),K(a)&&i.set(a,l),l}function J3(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&J3(c,i,e,!0),r&&r.forEach(n=>J3(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const f=Sl[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Sl={data:d5,props:h2,emits:h2,methods:h2,computed:h2,beforeCreate:v1,created:v1,beforeMount:v1,mounted:v1,beforeUpdate:v1,updated:v1,beforeDestroy:v1,beforeUnmount:v1,destroyed:v1,unmounted:v1,activated:v1,deactivated:v1,errorCaptured:v1,serverPrefetch:v1,components:h2,directives:h2,watch:yl,provide:d5,inject:wl};function d5(c,a){return a?c?function(){return h1(_(c)?c.call(this,this):c,_(a)?a.call(this,this):a)}:a:c}function wl(c,a){return h2(n6(c),n6(a))}function n6(c){if(F(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function v1(c,a){return c?[...new Set([].concat(c,a))]:a}function h2(c,a){return c?h1(h1(Object.create(null),c),a):a}function yl(c,a){if(!c)return a;if(!a)return c;const e=h1(Object.create(null),c);for(const s in a)e[s]=v1(c[s],a[s]);return e}function kl(c,a,e,s=!1){const r={},i={};K3(i,p4,1),c.propsDefaults=Object.create(null),Y0(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:Ef(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function Al(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,f=I(r),[l]=c.propsOptions;let t=!1;if((s||n>0)&&!(n&16)){if(n&8){const m=c.vnode.dynamicProps;for(let v=0;v<m.length;v++){let h=m[v];if(h4(c.emitsOptions,h))continue;const d=a[h];if(l)if(U(i,h))d!==i[h]&&(i[h]=d,t=!0);else{const A=E1(h);r[A]=f6(l,f,A,d,c,!1)}else d!==i[h]&&(i[h]=d,t=!0)}}}else{Y0(c,a,r,i)&&(t=!0);let m;for(const v in f)(!a||!U(a,v)&&((m=q2(v))===v||!U(a,m)))&&(l?e&&(e[v]!==void 0||e[m]!==void 0)&&(r[v]=f6(l,f,v,void 0,c,!0)):delete r[v]);if(i!==f)for(const v in i)(!a||!U(a,v))&&(delete i[v],t=!0)}t&&U1(c,"set","$attrs")}function Y0(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(q3(l))continue;const t=a[l];let m;r&&U(r,m=E1(l))?!i||!i.includes(m)?e[m]=t:(f||(f={}))[m]=t:h4(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,n=!0)}if(i){const l=I(e),t=f||Y;for(let m=0;m<i.length;m++){const v=i[m];e[v]=f6(r,l,v,t[v],c,!U(t,v))}}return n}function f6(c,a,e,s,r,i){const n=c[e];if(n!=null){const f=U(n,"default");if(f&&s===void 0){const l=n.default;if(n.type!==Function&&_(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(s2(r),s=t[e]=l.call(null,a),a2())}else s=l}n[0]&&(i&&!f?s=!1:n[1]&&(s===""||s===q2(e))&&(s=!0))}return s}function X0(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},f=[];let l=!1;if(!_(c)){const m=v=>{l=!0;const[h,d]=X0(v,a,!0);h1(n,h),d&&f.push(...d)};!e&&a.mixins.length&&a.mixins.forEach(m),c.extends&&m(c.extends),c.mixins&&c.mixins.forEach(m)}if(!i&&!l)return K(c)&&s.set(c,y2),y2;if(F(i))for(let m=0;m<i.length;m++){const v=E1(i[m]);L5(v)&&(n[v]=Y)}else if(i)for(const m in i){const v=E1(m);if(L5(v)){const h=i[m],d=n[v]=F(h)||_(h)?{type:h}:Object.assign({},h);if(d){const A=b5(Boolean,d.type),k=b5(String,d.type);d[0]=A>-1,d[1]=k<0||A<k,(A>-1||U(d,"default"))&&f.push(v)}}}const t=[n,f];return K(c)&&s.set(c,t),t}function L5(c){return c[0]!=="$"}function g5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function x5(c,a){return g5(c)===g5(a)}function b5(c,a){return F(a)?a.findIndex(e=>x5(e,c)):_(a)&&x5(a,c)?0:-1}const J0=c=>c[0]==="_"||c==="$stable",G6=c=>F(c)?c.map(S1):[S1(c)],Pl=(c,a,e)=>{if(a._n)return a;const s=s6((...r)=>G6(a(...r)),e);return s._c=!1,s},Q0=(c,a,e)=>{const s=c._ctx;for(const r in c){if(J0(r))continue;const i=c[r];if(_(i))a[r]=Pl(r,i,s);else if(i!=null){const n=G6(i);a[r]=()=>n}}},c7=(c,a)=>{const e=G6(a);c.slots.default=()=>e},Tl=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=I(a),K3(a,"_",e)):Q0(a,c.slots={})}else c.slots={},a&&c7(c,a);K3(c.slots,p4,1)},Bl=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=Y;if(s.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(h1(r,a),!e&&f===1&&delete r._):(i=!a.$stable,Q0(a,r)),n=a}else a&&(c7(c,a),n={default:1});if(i)for(const f in r)!J0(f)&&!(f in n)&&delete r[f]};function a7(){return{app:null,config:{isNativeTag:rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fl=0;function Rl(c,a){return function(s,r=null){_(s)||(s=Object.assign({},s)),r!=null&&!K(r)&&(r=null);const i=a7(),n=new Set;let f=!1;const l=i.app={_uid:Fl++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ro,get config(){return i.config},set config(t){},use(t,...m){return n.has(t)||(t&&_(t.install)?(n.add(t),t.install(l,...m)):_(t)&&(n.add(t),t(l,...m))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,m){return m?(i.components[t]=m,l):i.components[t]},directive(t,m){return m?(i.directives[t]=m,l):i.directives[t]},mount(t,m,v){if(!f){const h=$(s,r);return h.appContext=i,m&&a?a(h,t):c(h,t,v),f=!0,l._container=t,t.__vue_app__=l,V4(h.component)||h.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,m){return i.provides[t]=m,l}};return l}}function l6(c,a,e,s,r=!1){if(F(c)){c.forEach((h,d)=>l6(h,a&&(F(a)?a[d]:a),e,s,r));return}if(W3(s)&&!r)return;const i=s.shapeFlag&4?V4(s.component)||s.component.proxy:s.el,n=r?null:i,{i:f,r:l}=c,t=a&&a.r,m=f.refs===Y?f.refs={}:f.refs,v=f.setupState;if(t!=null&&t!==l&&(i1(t)?(m[t]=null,U(v,t)&&(v[t]=null)):t1(t)&&(t.value=null)),_(l))c2(l,f,12,[n,m]);else{const h=i1(l),d=t1(l);if(h||d){const A=()=>{if(c.f){const k=h?U(v,l)?v[l]:m[l]:l.value;r?F(k)&&S6(k,i):F(k)?k.includes(i)||k.push(i):h?(m[l]=[i],U(v,l)&&(v[l]=m[l])):(l.value=[i],c.k&&(m[c.k]=l.value))}else h?(m[l]=n,U(v,l)&&(v[l]=n)):d&&(l.value=n,c.k&&(m[c.k]=n))};n?(A.id=-1,p1(A,e)):A()}}}const p1=ll;function Dl(c){return _l(c)}function _l(c,a){const e=mf();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:f,createComment:l,setText:t,setElementText:m,parentNode:v,nextSibling:h,setScopeId:d=A1,insertStaticContent:A}=c,k=(o,z,H,V=null,u=null,x=null,N=!1,L=null,b=!!z.dynamicChildren)=>{if(o===z)return;o&&!J1(o,z)&&(V=x3(o),T1(o,u,x,!0),o=null),z.patchFlag===-2&&(b=!1,z.dynamicChildren=null);const{type:M,ref:P,shapeFlag:w}=z;switch(M){case u4:O(o,z,H,V);break;case I1:g(o,z,H,V);break;case G3:o==null&&p(z,H,V,N);break;case g1:f2(o,z,H,V,u,x,N,L,b);break;default:w&1?D(o,z,H,V,u,x,N,L,b):w&6?l2(o,z,H,V,u,x,N,L,b):(w&64||w&128)&&M.process(o,z,H,V,u,x,N,L,b,b2)}P!=null&&u&&l6(P,o&&o.ref,x,z||o,!z)},O=(o,z,H,V)=>{if(o==null)s(z.el=f(z.children),H,V);else{const u=z.el=o.el;z.children!==o.children&&t(u,z.children)}},g=(o,z,H,V)=>{o==null?s(z.el=l(z.children||""),H,V):z.el=o.el},p=(o,z,H,V)=>{[o.el,o.anchor]=A(o.children,z,H,V,o.el,o.anchor)},C=({el:o,anchor:z},H,V)=>{let u;for(;o&&o!==z;)u=h(o),s(o,H,V),o=u;s(z,H,V)},B=({el:o,anchor:z})=>{let H;for(;o&&o!==z;)H=h(o),r(o),o=H;r(z)},D=(o,z,H,V,u,x,N,L,b)=>{N=N||z.type==="svg",o==null?W(z,H,V,u,x,N,L,b):r1(o,z,u,x,N,L,b)},W=(o,z,H,V,u,x,N,L)=>{let b,M;const{type:P,props:w,shapeFlag:T,transition:R,dirs:q}=o;if(b=o.el=n(o.type,x,w&&w.is,w),T&8?m(b,o.children):T&16&&e1(o.children,b,null,V,u,x&&P!=="foreignObject",N,L),q&&z2(o,null,V,"created"),w){for(const G in w)G!=="value"&&!q3(G)&&i(b,G,null,w[G],x,o.children,V,u,q1);"value"in w&&i(b,"value",null,w.value),(M=w.onVnodeBeforeMount)&&F1(M,V,o)}Q(b,o,o.scopeId,N,V),q&&z2(o,null,V,"beforeMount");const Z=(!u||u&&!u.pendingBranch)&&R&&!R.persisted;Z&&R.beforeEnter(b),s(b,z,H),((M=w&&w.onVnodeMounted)||Z||q)&&p1(()=>{M&&F1(M,V,o),Z&&R.enter(b),q&&z2(o,null,V,"mounted")},u)},Q=(o,z,H,V,u)=>{if(H&&d(o,H),V)for(let x=0;x<V.length;x++)d(o,V[x]);if(u){let x=u.subTree;if(z===x){const N=u.vnode;Q(o,N,N.scopeId,N.slotScopeIds,u.parent)}}},e1=(o,z,H,V,u,x,N,L,b=0)=>{for(let M=b;M<o.length;M++){const P=o[M]=L?X1(o[M]):S1(o[M]);k(null,P,z,H,V,u,x,N,L)}},r1=(o,z,H,V,u,x,N)=>{const L=z.el=o.el;let{patchFlag:b,dynamicChildren:M,dirs:P}=z;b|=o.patchFlag&16;const w=o.props||Y,T=z.props||Y;let R;H&&v2(H,!1),(R=T.onVnodeBeforeUpdate)&&F1(R,H,z,o),P&&z2(z,o,H,"beforeUpdate"),H&&v2(H,!0);const q=u&&z.type!=="foreignObject";if(M?m1(o.dynamicChildren,M,L,H,V,q,x):N||j(o,z,L,null,H,V,q,x,!1),b>0){if(b&16)H1(L,z,w,T,H,V,u);else if(b&2&&w.class!==T.class&&i(L,"class",null,T.class,u),b&4&&i(L,"style",w.style,T.style,u),b&8){const Z=z.dynamicProps;for(let G=0;G<Z.length;G++){const s1=Z[G],N1=w[s1],N2=T[s1];(N2!==N1||s1==="value")&&i(L,s1,N1,N2,u,o.children,H,V,q1)}}b&1&&o.children!==z.children&&m(L,z.children)}else!N&&M==null&&H1(L,z,w,T,H,V,u);((R=T.onVnodeUpdated)||P)&&p1(()=>{R&&F1(R,H,z,o),P&&z2(z,o,H,"updated")},V)},m1=(o,z,H,V,u,x,N)=>{for(let L=0;L<z.length;L++){const b=o[L],M=z[L],P=b.el&&(b.type===g1||!J1(b,M)||b.shapeFlag&70)?v(b.el):H;k(b,M,P,null,V,u,x,N,!0)}},H1=(o,z,H,V,u,x,N)=>{if(H!==V){if(H!==Y)for(const L in H)!q3(L)&&!(L in V)&&i(o,L,H[L],null,N,z.children,u,x,q1);for(const L in V){if(q3(L))continue;const b=V[L],M=H[L];b!==M&&L!=="value"&&i(o,L,M,b,N,z.children,u,x,q1)}"value"in V&&i(o,"value",H.value,V.value)}},f2=(o,z,H,V,u,x,N,L,b)=>{const M=z.el=o?o.el:f(""),P=z.anchor=o?o.anchor:f("");let{patchFlag:w,dynamicChildren:T,slotScopeIds:R}=z;R&&(L=L?L.concat(R):R),o==null?(s(M,H,V),s(P,H,V),e1(z.children,H,P,u,x,N,L,b)):w>0&&w&64&&T&&o.dynamicChildren?(m1(o.dynamicChildren,T,H,u,x,N,L),(z.key!=null||u&&z===u.subTree)&&e7(o,z,!0)):j(o,z,H,P,u,x,N,L,b)},l2=(o,z,H,V,u,x,N,L,b)=>{z.slotScopeIds=L,o==null?z.shapeFlag&512?u.ctx.activate(z,H,V,N,b):o2(z,H,V,u,x,N,b):a5(o,z,b)},o2=(o,z,H,V,u,x,N)=>{const L=o.component=Zl(o,V,u);if(I0(o)&&(L.ctx.renderer=b2),Kl(L),L.asyncDep){if(u&&u.registerDep(L,z1),!o.el){const b=L.subTree=$(I1);g(null,b,z,H)}return}z1(L,o,z,H,u,x,N)},a5=(o,z,H)=>{const V=z.component=o.component;if(cl(o,z,H))if(V.asyncDep&&!V.asyncResolved){c1(V,z,H);return}else V.next=z,$f(V.update),V.update();else z.el=o.el,V.vnode=z},z1=(o,z,H,V,u,x,N)=>{const L=()=>{if(o.isMounted){let{next:P,bu:w,u:T,parent:R,vnode:q}=o,Z=P,G;v2(o,!1),P?(P.el=q.el,c1(o,P,N)):P=q,w&&O3(w),(G=P.props&&P.props.onVnodeBeforeUpdate)&&F1(G,R,P,q),v2(o,!0);const s1=I4(o),N1=o.subTree;o.subTree=s1,k(N1,s1,v(N1.el),x3(N1),o,u,x),P.el=s1.el,Z===null&&q6(o,s1.el),T&&p1(T,u),(G=P.props&&P.props.onVnodeUpdated)&&p1(()=>F1(G,R,P,q),u)}else{let P;const{el:w,props:T}=z,{bm:R,m:q,parent:Z}=o,G=W3(z);if(v2(o,!1),R&&O3(R),!G&&(P=T&&T.onVnodeBeforeMount)&&F1(P,Z,z),v2(o,!0),w&&q4){const s1=()=>{o.subTree=I4(o),q4(w,o.subTree,o,u,null)};G?z.type.__asyncLoader().then(()=>!o.isUnmounted&&s1()):s1()}else{const s1=o.subTree=I4(o);k(null,s1,H,V,o,u,x),z.el=s1.el}if(q&&p1(q,u),!G&&(P=T&&T.onVnodeMounted)){const s1=z;p1(()=>F1(P,Z,s1),u)}(z.shapeFlag&256||Z&&W3(Z.vnode)&&Z.vnode.shapeFlag&256)&&o.a&&p1(o.a,u),o.isMounted=!0,z=H=V=null}},b=o.effect=new A6(L,()=>E6(M),o.scope),M=o.update=()=>b.run();M.id=o.uid,v2(o,!0),M()},c1=(o,z,H)=>{z.component=o;const V=o.vnode.props;o.vnode=z,o.next=null,Al(o,z.props,V,H),Bl(o,z.children,H),O2(),u5(),U2()},j=(o,z,H,V,u,x,N,L,b=!1)=>{const M=o&&o.children,P=o?o.shapeFlag:0,w=z.children,{patchFlag:T,shapeFlag:R}=z;if(T>0){if(T&128){g3(M,w,H,V,u,x,N,L,b);return}else if(T&256){t2(M,w,H,V,u,x,N,L,b);return}}R&8?(P&16&&q1(M,u,x),w!==M&&m(H,w)):P&16?R&16?g3(M,w,H,V,u,x,N,L,b):q1(M,u,x,!0):(P&8&&m(H,""),R&16&&e1(w,H,V,u,x,N,L,b))},t2=(o,z,H,V,u,x,N,L,b)=>{o=o||y2,z=z||y2;const M=o.length,P=z.length,w=Math.min(M,P);let T;for(T=0;T<w;T++){const R=z[T]=b?X1(z[T]):S1(z[T]);k(o[T],R,H,null,u,x,N,L,b)}M>P?q1(o,u,x,!0,!1,w):e1(z,H,V,u,x,N,L,b,w)},g3=(o,z,H,V,u,x,N,L,b)=>{let M=0;const P=z.length;let w=o.length-1,T=P-1;for(;M<=w&&M<=T;){const R=o[M],q=z[M]=b?X1(z[M]):S1(z[M]);if(J1(R,q))k(R,q,H,null,u,x,N,L,b);else break;M++}for(;M<=w&&M<=T;){const R=o[w],q=z[T]=b?X1(z[T]):S1(z[T]);if(J1(R,q))k(R,q,H,null,u,x,N,L,b);else break;w--,T--}if(M>w){if(M<=T){const R=T+1,q=R<P?z[R].el:V;for(;M<=T;)k(null,z[M]=b?X1(z[M]):S1(z[M]),H,q,u,x,N,L,b),M++}}else if(M>T)for(;M<=w;)T1(o[M],u,x,!0),M++;else{const R=M,q=M,Z=new Map;for(M=q;M<=T;M++){const V1=z[M]=b?X1(z[M]):S1(z[M]);V1.key!=null&&Z.set(V1.key,M)}let G,s1=0;const N1=T-q+1;let N2=!1,r5=0;const W2=new Array(N1);for(M=0;M<N1;M++)W2[M]=0;for(M=R;M<=w;M++){const V1=o[M];if(s1>=N1){T1(V1,u,x,!0);continue}let B1;if(V1.key!=null)B1=Z.get(V1.key);else for(G=q;G<=T;G++)if(W2[G-q]===0&&J1(V1,z[G])){B1=G;break}B1===void 0?T1(V1,u,x,!0):(W2[B1-q]=M+1,B1>=r5?r5=B1:N2=!0,k(V1,z[B1],H,null,u,x,N,L,b),s1++)}const i5=N2?El(W2):y2;for(G=i5.length-1,M=N1-1;M>=0;M--){const V1=q+M,B1=z[V1],n5=V1+1<P?z[V1+1].el:V;W2[M]===0?k(null,B1,H,n5,u,x,N,L,b):N2&&(G<0||M!==i5[G]?m2(B1,H,n5,2):G--)}}},m2=(o,z,H,V,u=null)=>{const{el:x,type:N,transition:L,children:b,shapeFlag:M}=o;if(M&6){m2(o.component.subTree,z,H,V);return}if(M&128){o.suspense.move(z,H,V);return}if(M&64){N.move(o,z,H,b2);return}if(N===g1){s(x,z,H);for(let w=0;w<b.length;w++)m2(b[w],z,H,V);s(o.anchor,z,H);return}if(N===G3){C(o,z,H);return}if(V!==2&&M&1&&L)if(V===0)L.beforeEnter(x),s(x,z,H),p1(()=>L.enter(x),u);else{const{leave:w,delayLeave:T,afterLeave:R}=L,q=()=>s(x,z,H),Z=()=>{w(x,()=>{q(),R&&R()})};T?T(x,q,Z):Z()}else s(x,z,H)},T1=(o,z,H,V=!1,u=!1)=>{const{type:x,props:N,ref:L,children:b,dynamicChildren:M,shapeFlag:P,patchFlag:w,dirs:T}=o;if(L!=null&&l6(L,null,H,o,!0),P&256){z.ctx.deactivate(o);return}const R=P&1&&T,q=!W3(o);let Z;if(q&&(Z=N&&N.onVnodeBeforeUnmount)&&F1(Z,z,o),P&6)Kn(o.component,H,V);else{if(P&128){o.suspense.unmount(H,V);return}R&&z2(o,null,z,"beforeUnmount"),P&64?o.type.remove(o,z,H,u,b2,V):M&&(x!==g1||w>0&&w&64)?q1(M,z,H,!1,!0):(x===g1&&w&384||!u&&P&16)&&q1(b,z,H),V&&e5(o)}(q&&(Z=N&&N.onVnodeUnmounted)||R)&&p1(()=>{Z&&F1(Z,z,o),R&&z2(o,null,z,"unmounted")},H)},e5=o=>{const{type:z,el:H,anchor:V,transition:u}=o;if(z===g1){$n(H,V);return}if(z===G3){B(o);return}const x=()=>{r(H),u&&!u.persisted&&u.afterLeave&&u.afterLeave()};if(o.shapeFlag&1&&u&&!u.persisted){const{leave:N,delayLeave:L}=u,b=()=>N(H,x);L?L(o.el,x,b):b()}else x()},$n=(o,z)=>{let H;for(;o!==z;)H=h(o),r(o),o=H;r(z)},Kn=(o,z,H)=>{const{bum:V,scope:u,update:x,subTree:N,um:L}=o;V&&O3(V),u.stop(),x&&(x.active=!1,T1(N,o,z,H)),L&&p1(L,z),p1(()=>{o.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},q1=(o,z,H,V=!1,u=!1,x=0)=>{for(let N=x;N<o.length;N++)T1(o[N],z,H,V,u)},x3=o=>o.shapeFlag&6?x3(o.component.subTree):o.shapeFlag&128?o.suspense.next():h(o.anchor||o.el),s5=(o,z,H)=>{o==null?z._vnode&&T1(z._vnode,null,null,!0):k(z._vnode||null,o,z,null,null,null,H),u5(),D0(),z._vnode=o},b2={p:k,um:T1,m:m2,r:e5,mt:o2,mc:e1,pc:j,pbc:m1,n:x3,o:c};let E4,q4;return a&&([E4,q4]=a(b2)),{render:s5,hydrate:E4,createApp:Rl(s5,E4)}}function v2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function e7(c,a,e=!1){const s=c.children,r=a.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const n=s[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=X1(r[i]),f.el=n.el),e||e7(n,f)),f.type===u4&&(f.el=n.el)}}function El(c){const a=c.slice(),e=[0];let s,r,i,n,f;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,c[e[f]]<t?i=f+1:n=f;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const ql=c=>c.__isTeleport,g1=Symbol(void 0),u4=Symbol(void 0),I1=Symbol(void 0),G3=Symbol(void 0),K2=[];let x1=null;function o1(c=!1){K2.push(x1=c?null:[])}function s7(){K2.pop(),x1=K2[K2.length-1]||null}let D2=1;function N5(c){D2+=c}function r7(c){return c.dynamicChildren=D2>0?x1||y2:null,s7(),D2>0&&x1&&x1.push(c),c}function b1(c,a,e,s,r,i){return r7(E(c,a,e,s,r,i,!0))}function j6(c,a,e,s,r){return r7($(c,a,e,s,r,!0))}function Q3(c){return c?c.__v_isVNode===!0:!1}function J1(c,a){return c.type===a.type&&c.key===a.key}const p4="__vInternal",i7=({key:c})=>c??null,j3=({ref:c,ref_key:a,ref_for:e})=>c!=null?i1(c)||t1(c)||_(c)?{i:C1,r:c,k:a,f:!!e}:c:null;function E(c,a=null,e=null,s=0,r=null,i=c===g1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&i7(a),ref:a&&j3(a),scopeId:q0,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:C1};return f?(Z6(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=i1(e)?8:16),D2>0&&!n&&x1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&x1.push(l),l}const $=Ol;function Ol(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===Ll)&&(c=I1),Q3(c)){const f=_2(c,a,!0);return e&&Z6(f,e),D2>0&&!i&&x1&&(f.shapeFlag&6?x1[x1.indexOf(c)]=f:x1.push(f)),f.patchFlag|=-2,f}if(co(c)&&(c=c.__vccOpts),a){a=Ul(a);let{class:f,style:l}=a;f&&!i1(f)&&(a.class=f4(f)),K(l)&&(w0(l)&&!F(l)&&(l=h1({},l)),a.style=b6(l))}const n=i1(c)?1:al(c)?128:ql(c)?64:K(c)?4:_(c)?2:0;return E(c,a,e,s,r,n,i,!0)}function Ul(c){return c?w0(c)||p4 in c?h1({},c):c:null}function _2(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,f=a?Wl(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&i7(f),ref:a&&a.ref?e&&r?F(r)?r.concat(j3(a)):[r,j3(a)]:j3(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==g1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&_2(c.ssContent),ssFallback:c.ssFallback&&_2(c.ssFallback),el:c.el,anchor:c.anchor,ctx:c.ctx}}function i3(c=" ",a=0){return $(u4,null,c,a)}function n7(c,a){const e=$(G3,null,c);return e.staticCount=a,e}function Il(c="",a=!1){return a?(o1(),j6(I1,null,c)):$(I1,null,c)}function S1(c){return c==null||typeof c=="boolean"?$(I1):F(c)?$(g1,null,c.slice()):typeof c=="object"?X1(c):$(u4,null,String(c))}function X1(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:_2(c)}function Z6(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(F(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),Z6(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(p4 in a)?a._ctx=C1:r===3&&C1&&(C1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else _(a)?(a={default:a,_ctx:C1},e=32):(a=String(a),s&64?(e=16,a=[i3(a)]):e=8);c.children=a,c.shapeFlag|=e}function Wl(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=f4([a.class,s.class]));else if(r==="style")a.style=b6([a.style,s.style]);else if(o4(r)){const i=a[r],n=s[r];n&&i!==n&&!(F(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function F1(c,a,e,s=null){P1(c,a,7,[e,s])}const Gl=a7();let jl=0;function Zl(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||Gl,i={uid:jl++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:X0(s,r),emitsOptions:E0(s,r),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:s.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=Yf.bind(null,i),c.ce&&c.ce(i),i}let f1=null;const $l=()=>f1||C1,s2=c=>{f1=c,c.scope.on()},a2=()=>{f1&&f1.scope.off(),f1=null};function f7(c){return c.vnode.shapeFlag&4}let n3=!1;function Kl(c,a=!1){n3=a;const{props:e,children:s}=c.vnode,r=f7(c);kl(c,e,r,a),Tl(c,s);const i=r?Yl(c,a):void 0;return n3=!1,i}function Yl(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=y0(new Proxy(c.ctx,xl));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?Jl(c):null;s2(c),O2();const i=c2(s,c,0,[c.props,r]);if(U2(),a2(),w6(i)){if(i.then(a2,a2),a)return i.then(n=>{o6(c,n,a)}).catch(n=>{h3(n,c,0)});c.asyncDep=i}else o6(c,i,a)}else l7(c,a)}function o6(c,a,e){_(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:K(a)&&(c.setupState=P0(a)),l7(c,e)}let S5;function l7(c,a,e){const s=c.type;if(!c.render){if(!a&&S5&&!s.render){const r=s.template||W6(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=s,t=h1(h1({isCustomElement:i,delimiters:f},n),l);s.render=S5(r,t)}}c.render=s.render||A1}s2(c),O2(),bl(c),U2(),a2()}function Xl(c){return new Proxy(c.attrs,{get(a,e){return d1(c,"get","$attrs"),a[e]}})}function Jl(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=Xl(c))},slots:c.slots,emit:c.emit,expose:a}}function V4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(P0(y0(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in $2)return $2[e](c)},has(a,e){return e in a||e in $2}}))}function Ql(c,a=!0){return _(c)?c.displayName||c.name:c.name||a&&c.__name}function co(c){return _(c)&&"__vccOpts"in c}const M1=(c,a)=>Wf(c,a,n3);function ao(c){const a=$l();let e=c();return a2(),w6(e)&&(e=e.catch(s=>{throw s2(a),s})),[e,()=>s2(a)]}function o7(c,a,e){const s=arguments.length;return s===2?K(a)&&!F(a)?Q3(a)?$(c,null,[a]):$(c,a):$(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&Q3(e)&&(e=[e]),$(c,a,e))}const eo=Symbol(""),so=()=>U3(eo),ro="3.2.45",io="http://www.w3.org/2000/svg",u2=typeof document<"u"?document:null,w5=u2&&u2.createElement("template"),no={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?u2.createElementNS(io,c):u2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>u2.createTextNode(c),createComment:c=>u2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>u2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{w5.innerHTML=s?`<svg>${c}</svg>`:c;const f=w5.content;if(s){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function fo(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function lo(c,a,e){const s=c.style,r=i1(e);if(e&&!r){for(const i in e)t6(s,i,e[i]);if(a&&!i1(a))for(const i in a)e[i]==null&&t6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const y5=/\s*!important$/;function t6(c,a,e){if(F(e))e.forEach(s=>t6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=oo(c,a);y5.test(e)?c.setProperty(q2(s),e.replace(y5,""),"important"):c[s]=e}}const k5=["Webkit","Moz","ms"],G4={};function oo(c,a){const e=G4[a];if(e)return e;let s=E1(a);if(s!=="filter"&&s in c)return G4[a]=s;s=z4(s);for(let r=0;r<k5.length;r++){const i=k5[r]+s;if(i in c)return G4[a]=i}return a}const A5="http://www.w3.org/1999/xlink";function to(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(A5,a.slice(6,a.length)):c.setAttributeNS(A5,a,e);else{const i=af(a);e==null||i&&!v0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function mo(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e??"";return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e??"";(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=v0(e):e==null&&l==="string"?(e="",f=!0):l==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function p2(c,a,e,s){c.addEventListener(a,e,s)}function zo(c,a,e,s){c.removeEventListener(a,e,s)}function vo(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[f,l]=ho(a);if(s){const t=i[a]=po(s,r);p2(c,f,t,l)}else n&&(zo(c,f,n,l),i[a]=void 0)}}const P5=/(?:Once|Passive|Capture)$/;function ho(c){let a;if(P5.test(c)){a={};let s;for(;s=c.match(P5);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):q2(c.slice(2)),a]}let j4=0;const Ho=Promise.resolve(),uo=()=>j4||(Ho.then(()=>j4=0),j4=Date.now());function po(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;P1(Vo(s,e.value),a,5,[s])};return e.value=c,e.attached=uo(),e}function Vo(c,a){if(F(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const T5=/^on[a-z]/,Mo=(c,a,e,s,r=!1,i,n,f,l)=>{a==="class"?fo(c,s,r):a==="style"?lo(c,e,s):o4(a)?N6(a)||vo(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Co(c,a,s,r))?mo(c,a,s,i,n,f,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),to(c,a,s,r))};function Co(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&T5.test(a)&&_(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||T5.test(a)&&i1(e)?!1:a in c}const c4=c=>{const a=c.props["onUpdate:modelValue"]||!1;return F(a)?e=>O3(a,e):a};function Lo(c){c.target.composing=!0}function B5(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const go={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=c4(r);const i=s||r.props&&r.props.type==="number";p2(c,a?"change":"input",n=>{if(n.target.composing)return;let f=c.value;e&&(f=f.trim()),i&&(f=F2(f)),c._assign(f)}),e&&p2(c,"change",()=>{c.value=c.value.trim()}),a||(p2(c,"compositionstart",Lo),p2(c,"compositionend",B5),p2(c,"change",B5))},mounted(c,{value:a}){c.value=a??""},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},i){if(c._assign=c4(i),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&F2(c.value)===a))return;const n=a??"";c.value!==n&&(c.value=n)}},xo={deep:!0,created(c,{value:a,modifiers:{number:e}},s){const r=t4(a);p2(c,"change",()=>{const i=Array.prototype.filter.call(c.options,n=>n.selected).map(n=>e?F2(a4(n)):a4(n));c._assign(c.multiple?r?new Set(i):i:i[0])}),c._assign=c4(s)},mounted(c,{value:a}){F5(c,a)},beforeUpdate(c,a,e){c._assign=c4(e)},updated(c,{value:a}){F5(c,a)}};function F5(c,a){const e=c.multiple;if(!(e&&!F(a)&&!t4(a))){for(let s=0,r=c.options.length;s<r;s++){const i=c.options[s],n=a4(i);if(e)F(a)?i.selected=sf(a,n)>-1:i.selected=a.has(n);else if(l4(a4(i),a)){c.selectedIndex!==s&&(c.selectedIndex=s);return}}!e&&c.selectedIndex!==-1&&(c.selectedIndex=-1)}}function a4(c){return"_value"in c?c._value:c.value}const bo=["ctrl","shift","alt","meta"],No={stop:c=>c.stopPropagation(),prevent:c=>c.preventDefault(),self:c=>c.target!==c.currentTarget,ctrl:c=>!c.ctrlKey,shift:c=>!c.shiftKey,alt:c=>!c.altKey,meta:c=>!c.metaKey,left:c=>"button"in c&&c.button!==0,middle:c=>"button"in c&&c.button!==1,right:c=>"button"in c&&c.button!==2,exact:(c,a)=>bo.some(e=>c[`${e}Key`]&&!a.includes(e))},So=(c,a)=>(e,...s)=>{for(let r=0;r<a.length;r++){const i=No[a[r]];if(i&&i(e,a))return}return c(e,...s)},wo=h1({patchProp:Mo},no);let R5;function yo(){return R5||(R5=Dl(wo))}const ko=(...c)=>{const a=yo().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Ao(s);if(!r)return;const i=a._component;!_(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function Ao(c){return i1(c)?document.querySelector(c):c}const Po="/assets/logo-3901481e.png",To=n7('<div class="flex justify-between items-center max-w-screen-xl xl:mx-auto"><a href="/"><img src="'+Po+'" alt="Logo de Onde Contribuir?" class="h-20"></a><div class="px-1.5"><a href="#contribuir" class="px-3.5 py-3 bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-bold rounded-xl"> Adicionar projeto </a></div></div>',1),Bo=[To],Fo=x2({__name:"Header",props:{blur:{type:Boolean}},setup(c){return(a,e)=>(o1(),b1("header",{class:f4([c.blur&&"backdrop-blur-sm border-b-[1px] border-solid border-slate-300","px-1 sticky top-0 z-10 transition-all"])},Bo,2))}}),t7=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},Ro={},Do={class:"mt-2"},_o={class:"w-full px-2 py-4 w-full bg-slate-300 border-b border-solid border-slate-400 -shadow"},Eo={class:"flex justify-center max-w-screen-xl xl:mx-auto"},qo={href:"#",class:"w-[46px] h-[46px] mx-6 bg-slate-500 rounded-full flex justify-center items-center text-slate-100 transition-all hover:text-slate-200 hover:drop-shadow-xl",title:"Repositorio GitHub",target:"_blank",rel:"noopener"},Oo={href:"#",class:"w-[46px] h-[46px] mx-6 bg-slate-500 rounded-full flex justify-center items-center text-slate-100 transition-all hover:text-slate-200 hover:drop-shadow-xl",title:"Twitter",target:"_blank",rel:"noopener"},Uo={href:"#",class:"w-[46px] h-[46px] mx-6 bg-slate-500 rounded-full flex justify-center items-center text-slate-100 transition-all hover:text-slate-200 hover:drop-shadow-xl",title:"Linkedin",target:"_blank",rel:"noopener"},Io={class:"p-2 text-center text-sm bg-slate-500 border-t border-solid border-slate-600 text-slate-200 font-bold"},Wo={class:"flex justify-around flex-wrap max-w-screen-xl xl:mx-auto w-full px-2"},Go=E("span",{class:"p-2"},"Os projetos são atualizados a cada 30min*",-1),jo={class:"p-2"},Zo=E("a",{href:"https://www.instagram.com/santos_natanoficial/",target:"_blank",rel:"noopener",class:"hover:underline hover:text-green-400"},"Natan Santos",-1);function $o(c,a){const e=I6("FaIcon");return o1(),b1("footer",Do,[E("div",_o,[E("div",Eo,[E("a",qo,[$(e,{icon:["fab","github"],size:"xl"})]),E("a",Oo,[$(e,{icon:["fab","twitter"],size:"xl"})]),E("a",Uo,[$(e,{icon:["fab","linkedin-in"],size:"xl"})])])]),E("div",Io,[E("div",Wo,[Go,E("span",jo,[i3(" Com "),$(e,{icon:"heart",class:"text-red-500"}),i3(" por "),Zo])])])])}const Ko=t7(Ro,[["render",$o]]),Yo="/img/Sad-Face.png",Xo=["href"],Jo={class:"mx-auto mb-3 p-1 w-[74px] h-[74px] rounded-full"},Qo=["src"],ct={class:"text-center"},at={class:"text-2xl font-bold text-slate-800 opacity-90 leading-4"},et={class:"opacity-60 text-slate-600 text-xs font-bold"},st={class:"text-base pt-2 text-slate-700"},rt={key:0,class:"mt-2 pt-2 flex flex-wrap"},it=["alt","src"],nt=x2({__name:"Project",props:{project:null},setup(c){return(a,e)=>(o1(),b1("a",{class:"card h-fit max-w-sm m-3 cursor-pointer border border-solid border-transparent transition-all [&:not(:hover)]:shadow-none hover:border-slate-300",href:c.project.url,target:"_blank",rel:"noopener"},[E("div",Jo,[E("img",{src:c.project.image??"/img/github-mark.svg",class:"max-w-full max-h-full text-slate-800 rounded-[inherit]",alt:"Capa do projeto"},null,8,Qo)]),E("div",ct,[E("h2",at,O4(c.project.name),1),E("small",et," @"+O4(c.project.owner.username),1),E("p",st,O4(c.project.description),1)]),c.project.badges?(o1(),b1("div",rt,[(o1(!0),b1(g1,null,$0(c.project.badges,(s,r)=>(o1(),b1("img",{key:r,alt:s.alt,src:s.url,class:"m-1"},null,8,it))),128))])):Il("",!0)],8,Xo))}});function ft(c,a,e){return Object.keys(c).includes(a)?c[a]:e}function D5(c,a){c||(c=1),a||(a=1);const e=new Date;return e.setSeconds(e.getSeconds()+(c*60+a))}const _5={c:{alt:"Linguagem C",url:"https://img.shields.io/badge/c-%2300599C.svg?logo=c&logoColor=white"},"c#":{alt:"Linguagem C#",url:"https://img.shields.io/badge/c%23-%23239120.svg?logo=c-sharp&logoColor=white"},"c++":{alt:"Linguagem C++",url:"https://img.shields.io/badge/c++-%2300599C.svg?logo=c%2B%2B&logoColor=white"},css:{alt:"Linguagem CSS",url:"https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white"},html:{alt:"Linguagem HTML",url:"https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white"},javascript:{alt:"Linguagem Javascript",url:"https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E"},markdown:{alt:"Linguagem Markdown",url:"https://img.shields.io/badge/markdown-%23000000.svg?logo=markdown&logoColor=white"},php:{alt:"Linguagem PHP",url:"https://img.shields.io/badge/php-%23777BB4.svg?logo=php&logoColor=white"},python:{alt:"Linguagem Python",url:"https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54"},typescript:{alt:"Linguagem Typescript",url:"https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white"}},lt={githubForks:{alt:"Github Forks",url:"https://img.shields.io/github/forks/{{owner}}/{{repo}}"},githubIssues:{alt:"GitHub Issues",url:"https://img.shields.io/github/issues/{{owner}}/{{repo}}"},githubLicense:{alt:"License",url:"https://img.shields.io/github/license/{{owner}}/{{repo}}"},githubRepoStars:{alt:"GitHub Repo Stars",url:"https://img.shields.io/github/stars/{{owner}}/{{repo}}"}};function f3(...c){if(c.length<1)throw new TypeError("args empty");const[a,e,s]=c;if(c.length==1)return c[0].toString()!="[object Object]"?void 0:f3(a.type,a.args,!1);if(Object.keys(_5).includes(a)||!e)return s?{type:a}:_5[a];const r=ft(lt,a,null);if(r)return s?{type:a,args:e}:Object.keys(e).reduce((i,n)=>{const f=i.url.replace(`{{${n}}}`,e[n]);return{...i,url:f}},r)}function m7({owner:c,repo:a}){return`https://api.github.com/repos/${c}/${a}`}function ot(c){const a="(?<VARIABLE>[A-Z_]+)(s+)?=(s+)?(?<VALUE>.+)";return c.match(new RegExp(`(${a})`,"mig")).map(s=>s.match(new RegExp(a)).groups)}async function tt(){const c=m7({owner:"natanfeitosa",repo:"ondecontribuir"});let a=(await fetch(c+"/issues").then(e=>e.json())).map(e=>e.body);if(a=a.map(e=>{const s=ot(e);if(s)return s.reduce((r,i)=>{switch(i.VARIABLE){case"REPOSITORIO_URL":return{...r,url:i.VALUE};case"LOGO_PROJETO":return{...r,logo:i.VALUE};default:return r}},{})}).filter(Boolean),a)return a}async function mt(){const c=[],a=await tt();if(!(!a||a.length<1)){for(const e of a){const{owner:s,repo:r}=e.url.match(/https\:\/\/github\.com\/(?<owner>[^/]+)\/(?<repo>[^/]+)\/?/).groups,i=m7({owner:s,repo:r}),n=await fetch(i).then(f=>f.json());c.push({name:n.name,description:n.description,url:n.html_url,stars:n.stargazers_count,forks:n.forks_count,open_issues:n.open_issues_count,topics:n.topics,owner:{username:n.owner.login},language:n.language})}return c}}async function zt(){var e;const c=await mt(),a=[];for(const s of c){let r=[];if(s.language){const i=f3(s.language.toLowerCase(),{},!0);i&&r.push(i),delete s.language}a.push({...s,badges:[...r,...["githubRepoStars","githubForks","githubIssues","githubLicense"].map(i=>f3(i,{owner:s.owner.username,repo:s.name},!0))].filter(Boolean),description:((e=s==null?void 0:s.description)==null?void 0:e.slice(0,180))??""})}return a}const E5="ondecontribuir_data";async function vt(){try{let{data:c,validity:a}=JSON.parse(localStorage.getItem(E5));if(D5()>=a)throw new Error;return c.map(e=>({...e,badges:e.badges.map(s=>f3(s))??[]}))}catch(c){console.log(c);let a=await zt();return!a||a.length<1?void 0:(localStorage.setItem(E5,JSON.stringify({data:a,validity:D5(30)})),a.map(e=>{const s=e.badges.map(r=>f3(r))??[];return{...e,badges:s}}))}}const ht={class:"p-0.5"},Ht={key:0,class:"text-slate-500 my-4 mx-auto max-w-sm"},ut=E("img",{alt:"Sad face",src:Yo,class:"w-[74px] mx-auto"},null,-1),pt=E("h3",{class:"pt-3.5 text-lg font-bold text-center"},[i3(" Oops, parece que ainda não temos nenhum resultado para isso. Que tal você "),E("a",{href:"#contribuir",class:"[&:not(:hover)]:underline text-slate-900"},"contribuir"),i3(" com o projeto? ")],-1),Vt=[ut,pt],Mt={class:"my-2 flex justify-center items-center"},Ct=E("option",{value:"A"},"Aleatório",-1),dt=E("option",{value:"E"},"Número de estrelas",-1),Lt=E("option",{value:"F"},"Número de forks",-1),gt=E("option",{value:"I"},"Issues abertas",-1),xt=[Ct,dt,Lt,gt],bt=["title"],Nt={class:"flex justify-center flex-wrap"},St=x2({__name:"ListProjects",props:{search:null},async setup(c){let a,e;const s=c,r=Z2();r.value=([a,e]=ao(()=>vt()),a=await a,e(),a);const i=Z2("A"),n=Z2(!1),f=M1(()=>{let l=r.value;return s.search?l.filter(t=>t.name.includes(s.search)||t.topics.some(m=>m.includes(s.search))):(l=i.value=="A"?l:l.sort((t,m)=>{switch(i.value){case"E":return t.stars-m.stars;case"F":return t.forks-m.forks;case"I":return t.open_issues-m.open_issues}}),n.value?l.reverse():l)});return(l,t)=>{var v;const m=I6("FaIcon");return o1(),b1("div",ht,[((v=a6(f))==null?void 0:v.length)<1&&c.search?(o1(),b1("div",Ht,Vt)):(o1(),b1(g1,{key:1},[E("div",Mt,[j0(E("select",{class:"ml-2 p-1 text-slate-600 rounded border border-solid border-slate-300 drop-shadow outline-none","onUpdate:modelValue":t[0]||(t[0]=h=>i.value=h)},xt,512),[[xo,i.value]]),E("button",{class:"px-3 py-0.5 mx-1 rounded transition-all duration-300 hover:bg-[rgb(239,239,239)] hover:shadow hover:opacity-90",title:n.value?"Descendente":"Ascendente",onClick:t[1]||(t[1]=h=>n.value=!n.value)},[$(m,{icon:"sort",class:"fill-current"})],8,bt)]),E("div",Nt,[(o1(!0),b1(g1,null,$0(a6(f),(h,d)=>(o1(),j6(nt,{key:d,project:h},null,8,["project"]))),128))])],64))])}}}),wt={},yt={class:"card max-w-xl my-10 mx-auto"},kt=n7('<div class="text-3xl text-slate-600 pb-6"><h2 class="text-center font-medium pb-5">Adicionar meu projeto</h2><div class="h-1 w-[28%] mx-auto bg-slate-300 rounded"></div></div><h4 class="text-lg leading-5 text-slate-600 font-medium py-5"> Procurando pessoas para contribuirem com seu novo projeto? </h4><p class="text-base text-slate-500 pb-4"> Envie uma issue link para seu repositório e ajudaremos você a configurá-lo. Quando a experiência for ótima, ficaremos felizes em adicionar seu projeto à lista. </p><a href="https://github.com/natanfeitosa/ondecontribuir/issues/new?assignees=&amp;labels=ondecontribuir&amp;template=adicionar-projeto.md&amp;title=Adicionar%20[nome%20do%20projeto]" target="_blank" rel="noopener" class="px-3.5 py-3 mt-8 mx-auto block w-fit bg-emerald-500 text-white hover:bg-emerald-600 transition-all font-bold rounded-xl"> Abrir issue </a>',4),At=[kt];function Pt(c,a){return o1(),b1("div",yt,At)}const Tt=t7(wt,[["render",Pt]]);function Bt(...c){const[a,e,s]=c.length==3?c:[window,...c];G0(()=>a.addEventListener(e,s)),U6(()=>a.removeEventListener(e,s))}const Ft={class:"bg-slate-200 text-slate-700 min-h-screen flex flex-col"},Rt={class:"grow p-4 pt-6 mt-4 w-full max-w-screen-lg lg:mx-auto"},Dt={class:"flex flex-col items-center max-w-xl mx-auto"},_t=E("h1",{class:"font-bold text-2xl mt-6 opacity-90 text-center"},"Procurando projetos open source para contribuir?",-1),Et=E("p",{class:"text-center text-base opacity-90 my-4"}," Encontre e contribua com projetos diversos, filtrando por linguagens, ordenando por número de estrelas ou pesquisando palavras específicas. ",-1),qt={class:"card mx-1 my-6"},Ot={type:"submit",class:"pl-1 pr-2"},Ut={class:"p-1.5 w-full"},It={class:"py-4 my-2 w-fit mx-auto flex flex-col justify-center"},Wt=E("p",{class:"text-lg text-slate-600 pt-2"},"Carregando...",-1),Gt=x2({__name:"App",setup(c){const a=Z2(),e=Z2(0);return Bt("scroll",s=>{e.value=window.scrollY}),(s,r)=>{const i=I6("FaIcon");return o1(),b1("div",Ft,[$(Fo,{blur:e.value>10},null,8,["blur"]),E("main",Rt,[E("div",Dt,[_t,Et,E("div",qt,[E("form",{class:"px-1.5 py-1 bg-white border-b border-solid border-blue-700 flex",onSubmit:r[1]||(r[1]=So(()=>{},["prevent"]))},[E("button",Ot,[$(i,{icon:"magnifying-glass"})]),j0(E("input",{type:"text",placeholder:"Procurando um repo?",class:"bg-transparent outline-none","onUpdate:modelValue":r[0]||(r[0]=n=>a.value=n)},null,512),[[go,a.value,void 0,{trim:!0}]])],32)])]),E("div",Ut,[(o1(),j6(sl,null,{fallback:s6(()=>[E("div",It,[$(i,{class:"mx-auto",icon:"spinner",size:"3x",spin:""}),Wt])]),default:s6(()=>[$(St,{search:a.value},null,8,["search"])]),_:1}))]),$(Tt,{id:"contribuir"})]),$(Ko)])}}});function q5(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function S(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?q5(Object(e),!0).forEach(function(s){n1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):q5(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function e4(c){return e4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},e4(c)}function jt(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function O5(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Zt(c,a,e){return a&&O5(c.prototype,a),e&&O5(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function n1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function $6(c,a){return Kt(c)||Xt(c,a)||z7(c,a)||Qt()}function H3(c){return $t(c)||Yt(c)||z7(c)||Jt()}function $t(c){if(Array.isArray(c))return m6(c)}function Kt(c){if(Array.isArray(c))return c}function Yt(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Xt(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function z7(c,a){if(c){if(typeof c=="string")return m6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m6(c,a)}}function m6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var U5=function(){},K6={},v7={},h7=null,H7={mark:U5,measure:U5};try{typeof window<"u"&&(K6=window),typeof document<"u"&&(v7=document),typeof MutationObserver<"u"&&(h7=MutationObserver),typeof performance<"u"&&(H7=performance)}catch{}var cm=K6.navigator||{},I5=cm.userAgent,W5=I5===void 0?"":I5,r2=K6,J=v7,G5=h7,A3=H7;r2.document;var $1=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",u7=~W5.indexOf("MSIE")||~W5.indexOf("Trident/"),P3,T3,B3,F3,R3,W1="___FONT_AWESOME___",z6=16,p7="fa",V7="svg-inline--fa",L2="data-fa-i2svg",v6="data-fa-pseudo-element",am="data-fa-pseudo-element-pending",Y6="data-prefix",X6="data-icon",j5="fontawesome-i2svg",em="async",sm=["HTML","HEAD","STYLE","SCRIPT"],M7=function(){try{return!0}catch{return!1}}(),X="classic",a1="sharp",J6=[X,a1];function u3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[X]}})}var l3=u3((P3={},n1(P3,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),n1(P3,a1,{fa:"solid",fass:"solid","fa-solid":"solid"}),P3)),o3=u3((T3={},n1(T3,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),n1(T3,a1,{solid:"fass"}),T3)),t3=u3((B3={},n1(B3,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),n1(B3,a1,{fass:"fa-solid"}),B3)),rm=u3((F3={},n1(F3,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),n1(F3,a1,{"fa-solid":"fass"}),F3)),im=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,C7="fa-layers-text",nm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fm=u3((R3={},n1(R3,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),n1(R3,a1,{900:"fass"}),R3)),d7=[1,2,3,4,5,6,7,8,9,10],lm=d7.concat([11,12,13,14,15,16,17,18,19,20]),om=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m3=new Set;Object.keys(o3[X]).map(m3.add.bind(m3));Object.keys(o3[a1]).map(m3.add.bind(m3));var tm=[].concat(J6,H3(m3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M2.GROUP,M2.SWAP_OPACITY,M2.PRIMARY,M2.SECONDARY]).concat(d7.map(function(c){return"".concat(c,"x")})).concat(lm.map(function(c){return"w-".concat(c)})),Y2=r2.FontAwesomeConfig||{};function mm(c){var a=J.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function zm(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(J&&typeof J.querySelector=="function"){var vm=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];vm.forEach(function(c){var a=$6(c,2),e=a[0],s=a[1],r=zm(mm(e));r!=null&&(Y2[s]=r)})}var L7={styleDefault:"solid",familyDefault:"classic",cssPrefix:p7,replacementClass:V7,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y2.familyPrefix&&(Y2.cssPrefix=Y2.familyPrefix);var E2=S(S({},L7),Y2);E2.autoReplaceSvg||(E2.observeMutations=!1);var y={};Object.keys(L7).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(e){E2[c]=e,X2.forEach(function(s){return s(y)})},get:function(){return E2[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){E2.cssPrefix=a,X2.forEach(function(e){return e(y)})},get:function(){return E2.cssPrefix}});r2.FontAwesomeConfig=y;var X2=[];function hm(c){return X2.push(c),function(){X2.splice(X2.indexOf(c),1)}}var Y1=z6,_1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hm(c){if(!(!c||!$1)){var a=J.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=J.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return J.head.insertBefore(a,s),c}}var um="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z3(){for(var c=12,a="";c-- >0;)a+=um[Math.random()*62|0];return a}function I2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function Q6(c){return c.classList?I2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function g7(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pm(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(g7(c[e]),'" ')},"").trim()}function M4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function c8(c){return c.size!==_1.size||c.x!==_1.x||c.y!==_1.y||c.rotate!==_1.rotate||c.flipX||c.flipY}function Vm(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function Mm(c){var a=c.transform,e=c.width,s=e===void 0?z6:e,r=c.height,i=r===void 0?z6:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&u7?l+="translate(".concat(a.x/Y1-s/2,"em, ").concat(a.y/Y1-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/Y1,"em), calc(-50% + ").concat(a.y/Y1,"em)) "):l+="translate(".concat(a.x/Y1,"em, ").concat(a.y/Y1,"em) "),l+="scale(".concat(a.size/Y1*(a.flipX?-1:1),", ").concat(a.size/Y1*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Cm=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function x7(){var c=p7,a=V7,e=y.cssPrefix,s=y.replacementClass,r=Cm;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var Z5=!1;function Z4(){y.autoAddCss&&!Z5&&(Hm(x7()),Z5=!0)}var dm={mixout:function(){return{dom:{css:x7,insertCss:Z4}}},hooks:function(){return{beforeDOMElementCreation:function(){Z4()},beforeI2svg:function(){Z4()}}}},G1=r2||{};G1[W1]||(G1[W1]={});G1[W1].styles||(G1[W1].styles={});G1[W1].hooks||(G1[W1].hooks={});G1[W1].shims||(G1[W1].shims=[]);var k1=G1[W1],b7=[],Lm=function c(){J.removeEventListener("DOMContentLoaded",c),s4=1,b7.map(function(a){return a()})},s4=!1;$1&&(s4=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),s4||J.addEventListener("DOMContentLoaded",Lm));function gm(c){$1&&(s4?setTimeout(c,0):b7.push(c))}function p3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?g7(c):"<".concat(a," ").concat(pm(s),">").concat(i.map(p3).join(""),"</").concat(a,">")}function $5(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var xm=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},$4=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?xm(e,r):e,l,t,m;for(s===void 0?(l=1,m=a[i[0]]):(l=0,m=s);l<n;l++)t=i[l],m=f(m,a[t],t,a);return m};function bm(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function h6(c){var a=bm(c);return a.length===1?a[0].toString(16):null}function Nm(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function K5(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function H6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=K5(a);typeof k1.hooks.addPack=="function"&&!r?k1.hooks.addPack(c,K5(a)):k1.styles[c]=S(S({},k1.styles[c]||{}),i),c==="fas"&&H6("fa",a)}var D3,_3,E3,S2=k1.styles,Sm=k1.shims,wm=(D3={},n1(D3,X,Object.values(t3[X])),n1(D3,a1,Object.values(t3[a1])),D3),a8=null,N7={},S7={},w7={},y7={},k7={},ym=(_3={},n1(_3,X,Object.keys(l3[X])),n1(_3,a1,Object.keys(l3[a1])),_3);function km(c){return~tm.indexOf(c)}function Am(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!km(r)?r:null}var A7=function(){var a=function(i){return $4(S2,function(n,f,l){return n[l]=$4(f,i,{}),n},{})};N7=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),S7=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),k7=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in S2||y.autoFetchSvg,s=$4(Sm,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});w7=s.names,y7=s.unicodes,a8=C4(y.styleDefault,{family:y.familyDefault})};hm(function(c){a8=C4(c.styleDefault,{family:y.familyDefault})});A7();function e8(c,a){return(N7[c]||{})[a]}function Pm(c,a){return(S7[c]||{})[a]}function C2(c,a){return(k7[c]||{})[a]}function P7(c){return w7[c]||{prefix:null,iconName:null}}function Tm(c){var a=y7[c],e=e8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function i2(){return a8}var s8=function(){return{prefix:null,iconName:null,rest:[]}};function C4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?X:e,r=l3[s][c],i=o3[s][c]||o3[s][r],n=c in k1.styles?c:null;return i||n||null}var Y5=(E3={},n1(E3,X,Object.keys(t3[X])),n1(E3,a1,Object.keys(t3[a1])),E3);function d4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},n1(a,X,"".concat(y.cssPrefix,"-").concat(X)),n1(a,a1,"".concat(y.cssPrefix,"-").concat(a1)),a),n=null,f=X;(c.includes(i[X])||c.some(function(t){return Y5[X].includes(t)}))&&(f=X),(c.includes(i[a1])||c.some(function(t){return Y5[a1].includes(t)}))&&(f=a1);var l=c.reduce(function(t,m){var v=Am(y.cssPrefix,m);if(S2[m]?(m=wm[f].includes(m)?rm[f][m]:m,n=m,t.prefix=m):ym[f].indexOf(m)>-1?(n=m,t.prefix=C4(m,{family:f})):v?t.iconName=v:m!==y.replacementClass&&m!==i[X]&&m!==i[a1]&&t.rest.push(m),!r&&t.prefix&&t.iconName){var h=n==="fa"?P7(t.iconName):{},d=C2(t.prefix,t.iconName);h.prefix&&(n=null),t.iconName=h.iconName||d||t.iconName,t.prefix=h.prefix||t.prefix,t.prefix==="far"&&!S2.far&&S2.fas&&!y.autoFetchSvg&&(t.prefix="fas")}return t},s8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===a1&&(S2.fass||y.autoFetchSvg)&&(l.prefix="fass",l.iconName=C2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=i2()||"fas"),l}var Bm=function(){function c(){jt(this,c),this.definitions={}}return Zt(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=S(S({},e.definitions[f]||{}),n[f]),H6(f,n[f]);var l=t3[X][f];l&&H6(l,n[f]),A7()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,m=t[2];e[f]||(e[f]={}),m.length>0&&m.forEach(function(v){typeof v=="string"&&(e[f][v]=t)}),e[f][l]=t}),e}}]),c}(),X5=[],w2={},B2={},Fm=Object.keys(B2);function Rm(c,a){var e=a.mixoutsTo;return X5=c,w2={},Object.keys(B2).forEach(function(s){Fm.indexOf(s)===-1&&delete B2[s]}),X5.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),e4(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){w2[n]||(w2[n]=[]),w2[n].push(i[n])})}s.provides&&s.provides(B2)}),e}function u6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=w2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function g2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=w2[c]||[];r.forEach(function(i){i.apply(null,e)})}function j1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return B2[c]?B2[c].apply(null,a):void 0}function p6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||i2();if(a)return a=C2(e,a)||a,$5(T7.definitions,e,a)||$5(k1.styles,e,a)}var T7=new Bm,Dm=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,g2("noAuto")},_m={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $1?(g2("beforeI2svg",a),j1("pseudoElements2svg",a),j1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,gm(function(){qm({autoReplaceSvgRoot:e}),g2("watch",a)})}},Em={icon:function(a){if(a===null)return null;if(e4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:C2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=C4(a[0]);return{prefix:s,iconName:C2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(im))){var r=d4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||i2(),iconName:C2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=i2();return{prefix:i,iconName:C2(i,a)||a}}}},L1={noAuto:Dm,config:y,dom:_m,parse:Em,library:T7,findIconDefinition:p6,toHtml:p3},qm=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?J:e;(Object.keys(k1.styles).length>0||y.autoFetchSvg)&&$1&&y.autoReplaceSvg&&L1.dom.i2svg({node:s})};function L4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return p3(s)})}}),Object.defineProperty(c,"node",{get:function(){if($1){var s=J.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Om(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(c8(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=M4(S(S({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function Um(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},r),{},{id:n}),children:s}]}]}function r8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,m=c.titleId,v=c.extra,h=c.watchable,d=h===void 0?!1:h,A=s.found?s:e,k=A.width,O=A.height,g=r==="fak",p=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(r1){return v.classes.indexOf(r1)===-1}).filter(function(r1){return r1!==""||!!r1}).concat(v.classes).join(" "),C={children:[],attributes:S(S({},v.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(k," ").concat(O)})},B=g&&!~v.classes.indexOf("fa-fw")?{width:"".concat(k/O*16*.0625,"em")}:{};d&&(C.attributes[L2]=""),l&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(m||z3())},children:[l]}),delete C.attributes.title);var D=S(S({},C),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:S(S({},B),v.styles)}),W=s.found&&e.found?j1("generateAbstractMask",D)||{children:[],attributes:{}}:j1("generateAbstractIcon",D)||{children:[],attributes:{}},Q=W.children,e1=W.attributes;return D.children=Q,D.attributes=e1,f?Um(D):Om(D)}function J5(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=S(S(S({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[L2]="");var m=S({},n.styles);c8(r)&&(m.transform=Mm({transform:r,startCentered:!0,width:e,height:s}),m["-webkit-transform"]=m.transform);var v=M4(m);v.length>0&&(t.style=v);var h=[];return h.push({tag:"span",attributes:t,children:[a]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Im(c){var a=c.content,e=c.title,s=c.extra,r=S(S(S({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=M4(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var K4=k1.styles;function V6(c){var a=c[0],e=c[1],s=c.slice(4),r=$6(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(M2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(M2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(M2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Wm={found:!1,width:512,height:512};function Gm(c,a){!M7&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function M6(c,a){var e=a;return a==="fa"&&y.styleDefault!==null&&(a=i2()),new Promise(function(s,r){if(j1("missingIconAbstract"),e==="fa"){var i=P7(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&K4[a]&&K4[a][c]){var n=K4[a][c];return s(V6(n))}Gm(c,a),s(S(S({},Wm),{},{icon:y.showMissingIcons&&c?j1("missingIconAbstract")||{}:{}}))})}var Q5=function(){},C6=y.measurePerformance&&A3&&A3.mark&&A3.measure?A3:{mark:Q5,measure:Q5},j2='FA "6.2.1"',jm=function(a){return C6.mark("".concat(j2," ").concat(a," begins")),function(){return B7(a)}},B7=function(a){C6.mark("".concat(j2," ").concat(a," ends")),C6.measure("".concat(j2," ").concat(a),"".concat(j2," ").concat(a," begins"),"".concat(j2," ").concat(a," ends"))},i8={begin:jm,end:B7},Z3=function(){};function c0(c){var a=c.getAttribute?c.getAttribute(L2):null;return typeof a=="string"}function Zm(c){var a=c.getAttribute?c.getAttribute(Y6):null,e=c.getAttribute?c.getAttribute(X6):null;return a&&e}function $m(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function Km(){if(y.autoReplaceSvg===!0)return $3.replace;var c=$3[y.autoReplaceSvg];return c||$3.replace}function Ym(c){return J.createElementNS("http://www.w3.org/2000/svg",c)}function Xm(c){return J.createElement(c)}function F7(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?Ym:Xm:e;if(typeof c=="string")return J.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(F7(n,{ceFn:s}))}),r}function Jm(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var $3={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(F7(r),e)}),e.getAttribute(L2)===null&&y.keepOriginalSource){var s=J.createComment(Jm(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~Q6(e).indexOf(y.replacementClass))return $3.replace(a);var r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===y.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return p3(f)}).join(`
`);e.setAttribute(L2,""),e.innerHTML=n}};function a0(c){c()}function R7(c,a){var e=typeof a=="function"?a:Z3;if(c.length===0)e();else{var s=a0;y.mutateApproach===em&&(s=r2.requestAnimationFrame||a0),s(function(){var r=Km(),i=i8.begin("mutate");c.map(r),i(),e()})}}var n8=!1;function D7(){n8=!0}function d6(){n8=!1}var r4=null;function e0(c){if(G5&&y.observeMutations){var a=c.treeCallback,e=a===void 0?Z3:a,s=c.nodeCallback,r=s===void 0?Z3:s,i=c.pseudoElementsCallback,n=i===void 0?Z3:i,f=c.observeMutationsRoot,l=f===void 0?J:f;r4=new G5(function(t){if(!n8){var m=i2();I2(t).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!c0(v.addedNodes[0])&&(y.searchPseudoElements&&n(v.target),e(v.target)),v.type==="attributes"&&v.target.parentNode&&y.searchPseudoElements&&n(v.target.parentNode),v.type==="attributes"&&c0(v.target)&&~om.indexOf(v.attributeName))if(v.attributeName==="class"&&Zm(v.target)){var h=d4(Q6(v.target)),d=h.prefix,A=h.iconName;v.target.setAttribute(Y6,d||m),A&&v.target.setAttribute(X6,A)}else $m(v.target)&&r(v.target)})}}),$1&&r4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qm(){r4&&r4.disconnect()}function cz(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function az(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=d4(Q6(c));return r.prefix||(r.prefix=i2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=Pm(r.prefix,c.innerText)||e8(r.prefix,h6(c.innerText))),!r.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function ez(c){var a=I2(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return y.autoA11y&&(e?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(s||z3()):(a["aria-hidden"]="true",a.focusable="false")),a}function sz(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=az(c),s=e.iconName,r=e.prefix,i=e.rest,n=ez(c),f=u6("parseNodeAttributes",{},c),l=a.styleParser?cz(c):[];return S({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:_1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var rz=k1.styles;function _7(c){var a=y.autoReplaceSvg==="nest"?s0(c,{styleParser:!1}):s0(c);return~a.extra.classes.indexOf(C7)?j1("generateLayersText",c,a):j1("generateSvgReplacementMutation",c,a)}var n2=new Set;J6.map(function(c){n2.add("fa-".concat(c))});Object.keys(l3[X]).map(n2.add.bind(n2));Object.keys(l3[a1]).map(n2.add.bind(n2));n2=H3(n2);function r0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$1)return Promise.resolve();var e=J.documentElement.classList,s=function(v){return e.add("".concat(j5,"-").concat(v))},r=function(v){return e.remove("".concat(j5,"-").concat(v))},i=y.autoFetchSvg?n2:J6.map(function(m){return"fa-".concat(m)}).concat(Object.keys(rz));i.includes("fa")||i.push("fa");var n=[".".concat(C7,":not([").concat(L2,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(L2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=I2(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=i8.begin("onTree"),t=f.reduce(function(m,v){try{var h=_7(v);h&&m.push(h)}catch(d){M7||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise(function(m,v){Promise.all(t).then(function(h){R7(h,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),m()})}).catch(function(h){l(),v(h)})})}function iz(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_7(c).then(function(e){e&&R7([e],a)})}function nz(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:p6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:p6(r||{})),c(s,S(S({},e),{},{mask:r}))}}var fz=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?_1:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,m=t===void 0?null:t,v=e.title,h=v===void 0?null:v,d=e.titleId,A=d===void 0?null:d,k=e.classes,O=k===void 0?[]:k,g=e.attributes,p=g===void 0?{}:g,C=e.styles,B=C===void 0?{}:C;if(a){var D=a.prefix,W=a.iconName,Q=a.icon;return L4(S({type:"icon"},a),function(){return g2("beforeDOMElementCreation",{iconDefinition:a,params:e}),y.autoA11y&&(h?p["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(A||z3()):(p["aria-hidden"]="true",p.focusable="false")),r8({icons:{main:V6(Q),mask:l?V6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:W,transform:S(S({},_1),r),symbol:n,title:h,maskId:m,titleId:A,extra:{attributes:p,styles:B,classes:O}})})}},lz={mixout:function(){return{icon:nz(fz)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=r0,e.nodeCallback=iz,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?J:s,i=e.callback,n=i===void 0?function(){}:i;return r0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,m=s.mask,v=s.maskId,h=s.extra;return new Promise(function(d,A){Promise.all([M6(r,f),m.iconName?M6(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(k){var O=$6(k,2),g=O[0],p=O[1];d([e,r8({icons:{main:g,mask:p},prefix:f,iconName:r,transform:l,symbol:t,maskId:v,title:i,titleId:n,extra:h,watchable:!0})])}).catch(A)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=M4(f);l.length>0&&(r.style=l);var t;return c8(n)&&(t=j1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},oz={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return L4({type:"layer"},function(){g2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(H3(i)).join(" ")},children:n}]})}}}},tz={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,m=s.styles,v=m===void 0?{}:m;return L4({type:"counter",content:e},function(){return g2("beforeDOMElementCreation",{content:e,params:s}),Im({content:e.toString(),title:i,extra:{attributes:t,styles:v,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(H3(f))}})})}}}},mz={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?_1:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,m=s.attributes,v=m===void 0?{}:m,h=s.styles,d=h===void 0?{}:h;return L4({type:"text",content:e},function(){return g2("beforeDOMElementCreation",{content:e,params:s}),J5({content:e,transform:S(S({},_1),i),title:f,extra:{attributes:v,styles:d,classes:["".concat(y.cssPrefix,"-layers-text")].concat(H3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(u7){var t=parseInt(getComputedStyle(e).fontSize,10),m=e.getBoundingClientRect();f=m.width/t,l=m.height/t}return y.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,J5({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},zz=new RegExp('"',"ug"),i0=[1105920,1112319];function vz(c){var a=c.replace(zz,""),e=Nm(a,0),s=e>=i0[0]&&e<=i0[1],r=a.length===2?a[0]===a[1]:!1;return{value:h6(r?a[0]:a),isSecondary:s||r}}function n0(c,a){var e="".concat(am).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=I2(c.children),n=i.filter(function(Q){return Q.getAttribute(v6)===a})[0],f=r2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(nm),t=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&m!=="none"&&m!==""){var v=f.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?a1:X,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?o3[h][l[2].toLowerCase()]:fm[h][t],A=vz(v),k=A.value,O=A.isSecondary,g=l[0].startsWith("FontAwesome"),p=e8(d,k),C=p;if(g){var B=Tm(k);B.iconName&&B.prefix&&(p=B.iconName,d=B.prefix)}if(p&&!O&&(!n||n.getAttribute(Y6)!==d||n.getAttribute(X6)!==C)){c.setAttribute(e,C),n&&c.removeChild(n);var D=sz(),W=D.extra;W.attributes[v6]=a,M6(p,d).then(function(Q){var e1=r8(S(S({},D),{},{icons:{main:Q,mask:s8()},prefix:d,iconName:C,extra:W,watchable:!0})),r1=J.createElement("svg");a==="::before"?c.insertBefore(r1,c.firstChild):c.appendChild(r1),r1.outerHTML=e1.map(function(m1){return p3(m1)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function hz(c){return Promise.all([n0(c,"::before"),n0(c,"::after")])}function Hz(c){return c.parentNode!==document.head&&!~sm.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(v6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function f0(c){if($1)return new Promise(function(a,e){var s=I2(c.querySelectorAll("*")).filter(Hz).map(hz),r=i8.begin("searchPseudoElements");D7(),Promise.all(s).then(function(){r(),d6(),a()}).catch(function(){r(),d6(),e()})})}var uz={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=f0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?J:s;y.searchPseudoElements&&f0(r)}}},l0=!1,pz={mixout:function(){return{dom:{unwatch:function(){D7(),l0=!0}}}},hooks:function(){return{bootstrap:function(){e0(u6("mutationObserverCallbacks",{}))},noAuto:function(){Qm()},watch:function(e){var s=e.observeMutationsRoot;l0?d6():e0(u6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},o0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return s.flipX=!0,s;if(n&&f==="v")return s.flipY=!0,s;if(f=parseFloat(f),isNaN(f))return s;switch(n){case"grow":s.size=s.size+f;break;case"shrink":s.size=s.size-f;break;case"left":s.x=s.x-f;break;case"right":s.x=s.x+f;break;case"up":s.y=s.y-f;break;case"down":s.y=s.y+f;break;case"rotate":s.rotate=s.rotate+f;break}return s},e)},Vz={mixout:function(){return{parse:{transform:function(e){return o0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=o0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),v={transform:"".concat(l," ").concat(t," ").concat(m)},h={transform:"translate(".concat(n/2*-1," -256)")},d={outer:f,inner:v,path:h};return{tag:"g",attributes:S({},d.outer),children:[{tag:"g",attributes:S({},d.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:S(S({},s.icon.attributes),d.path)}]}]}}}},Y4={x:0,y:0,width:"100%",height:"100%"};function t0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function Mz(c){return c.tag==="g"?c.children:[c]}var Cz={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?d4(r.split(" ").map(function(n){return n.trim()})):s8();return i.prefix||(i.prefix=i2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,t=i.width,m=i.icon,v=n.width,h=n.icon,d=Vm({transform:l,containerWidth:v,iconWidth:t}),A={tag:"rect",attributes:S(S({},Y4),{},{fill:"white"})},k=m.children?{children:m.children.map(t0)}:{},O={tag:"g",attributes:S({},d.inner),children:[t0(S({tag:m.tag,attributes:S(S({},m.attributes),d.path)},k))]},g={tag:"g",attributes:S({},d.outer),children:[O]},p="mask-".concat(f||z3()),C="clip-".concat(f||z3()),B={tag:"mask",attributes:S(S({},Y4),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,g]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Mz(h)},B]};return s.push(D,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(p,")")},Y4)}),{children:s,attributes:r}}}},dz={provides:function(a){var e=!1;r2.matchMedia&&(e=r2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:S(S({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=S(S({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:S(S({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:S(S({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(f),s.push({tag:"path",attributes:S(S({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:S(S({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:S(S({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Lz={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},gz=[dm,lz,oz,tz,mz,uz,pz,Vz,Cz,dz,Lz];Rm(gz,{mixoutsTo:L1});L1.noAuto;var E7=L1.config,xz=L1.library;L1.dom;var i4=L1.parse;L1.findIconDefinition;L1.toHtml;var bz=L1.icon;L1.layer;var Nz=L1.text;L1.counter;function m0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function y1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?m0(Object(e),!0).forEach(function(s){u1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):m0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function n4(c){return n4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n4(c)}function u1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function Sz(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function wz(c,a){if(c==null)return{};var e=Sz(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(c,s)&&(e[s]=c[s])}return e}function L6(c){return yz(c)||kz(c)||Az(c)||Pz()}function yz(c){if(Array.isArray(c))return g6(c)}function kz(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Az(c,a){if(c){if(typeof c=="string")return g6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g6(c,a)}}function g6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Pz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.