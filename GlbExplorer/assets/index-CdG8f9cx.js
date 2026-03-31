(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const pt={},Ds=[],kn=()=>{},ph=()=>!1,na=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Zl=n=>n.startsWith("onUpdate:"),Wt=Object.assign,Jl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xp=Object.prototype.hasOwnProperty,ct=(n,e)=>Xp.call(n,e),Ve=Array.isArray,Ns=n=>zr(n)==="[object Map]",er=n=>zr(n)==="[object Set]",Lc=n=>zr(n)==="[object Date]",qe=n=>typeof n=="function",wt=n=>typeof n=="string",Hn=n=>typeof n=="symbol",ft=n=>n!==null&&typeof n=="object",mh=n=>(ft(n)||qe(n))&&qe(n.then)&&qe(n.catch),gh=Object.prototype.toString,zr=n=>gh.call(n),qp=n=>zr(n).slice(8,-1),_h=n=>zr(n)==="[object Object]",Ql=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,br=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Kp=/-\w/g,Gt=ia(n=>n.replace(Kp,e=>e.slice(1).toUpperCase())),Yp=/\B([A-Z])/g,Fi=ia(n=>n.replace(Yp,"-$1").toLowerCase()),Gr=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),No=ia(n=>n?`on${Gr(n)}`:""),On=(n,e)=>!Object.is(n,e),Uo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},vh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},sa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ic;const ra=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ui(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=wt(i)?em(i):ui(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(wt(n)||ft(n))return n}const Zp=/;(?![^(]*\))/g,Jp=/:([^]+)/,Qp=/\/\*[^]*?\*\//g;function em(n){const e={};return n.replace(Qp,"").split(Zp).forEach(t=>{if(t){const i=t.split(Jp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tt(n){let e="";if(wt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Tt(n[t]);i&&(e+=i+" ")}else if(ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const tm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nm=Yl(tm);function xh(n){return!!n||n===""}function im(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=tr(n[i],e[i]);return t}function tr(n,e){if(n===e)return!0;let t=Lc(n),i=Lc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Hn(n),i=Hn(e),t||i)return n===e;if(t=Ve(n),i=Ve(e),t||i)return t&&i?im(n,e):!1;if(t=ft(n),i=ft(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!tr(n[o],e[o]))return!1}}return String(n)===String(e)}function ec(n,e){return n.findIndex(t=>tr(t,e))}const yh=n=>!!(n&&n.__v_isRef===!0),Z=n=>wt(n)?n:n==null?"":Ve(n)||ft(n)&&(n.toString===gh||!qe(n.toString))?yh(n)?Z(n.value):JSON.stringify(n,Mh,2):String(n),Mh=(n,e)=>yh(e)?Mh(n,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ra(i,r)+" =>"]=s,t),{})}:er(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ra(t))}:Hn(e)?Ra(e):ft(e)&&!Ve(e)&&!_h(e)?String(e):e,Ra=(n,e="")=>{var t;return Hn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class Sh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bh(){return tn}let gt;const Ca=new WeakSet;class tc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dc(this),Ah(this);const e=gt,t=Tn;gt=this,Tn=!0;try{return this.fn()}finally{wh(this),gt=e,Tn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sc(e);this.deps=this.depsTail=void 0,Dc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Al(this)&&this.run()}get dirty(){return Al(this)}}let Eh=0,Er,Tr;function Th(n,e=!1){if(n.flags|=8,e){n.next=Tr,Tr=n;return}n.next=Er,Er=n}function nc(){Eh++}function ic(){if(--Eh>0)return;if(Tr){let e=Tr;for(Tr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Er;){let e=Er;for(Er=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ah(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wh(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),sc(i),sm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Al(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Rh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Dr)||(n.globalVersion=Dr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Al(n))))return;n.flags|=2;const e=n.dep,t=gt,i=Tn;gt=n,Tn=!0;try{Ah(n);const s=n.fn(n._value);(e.version===0||On(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{gt=t,Tn=i,wh(n),n.flags&=-3}}function sc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)sc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function sm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Tn=!0;const Ch=[];function di(){Ch.push(Tn),Tn=!1}function hi(){const n=Ch.pop();Tn=n===void 0?!0:n}function Dc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let Dr=0;class rm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!Tn||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new rm(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,Ph(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,Dr++,this.notify(e)}notify(e){nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ic()}}}function Ph(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ph(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wl=new WeakMap,ts=Symbol(""),Rl=Symbol(""),Nr=Symbol("");function Ht(n,e,t){if(Tn&&gt){let i=wl.get(n);i||wl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new rc),s.map=i,s.key=t),s.track()}}function ri(n,e,t,i,s,r){const o=wl.get(n);if(!o){Dr++;return}const a=l=>{l&&l.trigger()};if(nc(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Ql(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,h)=>{(h==="length"||h===Nr||!Hn(h)&&h>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Nr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ts)),Ns(n)&&a(o.get(Rl)));break;case"delete":l||(a(o.get(ts)),Ns(n)&&a(o.get(Rl)));break;case"set":Ns(n)&&a(o.get(ts));break}}ic()}function cs(n){const e=at(n);return e===n?e:(Ht(e,"iterate",Nr),hn(n)?e:e.map(wn))}function oa(n){return Ht(n=at(n),"iterate",Nr),n}function Dn(n,e){return zn(n)?Gs(Di(n)?wn(e):e):wn(e)}const om={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,n=>Dn(this,n))},concat(...n){return cs(this).concat(...n.map(e=>Ve(e)?cs(e):e))},entries(){return Pa(this,"entries",n=>(n[1]=Dn(this,n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(i=>Dn(this,i)),arguments)},find(n,e){return Kn(this,"find",n,e,t=>Dn(this,t),arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,t=>Dn(this,t),arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return La(this,"includes",n)},indexOf(...n){return La(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return La(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return lr(this,"pop")},push(...n){return lr(this,"push",n)},reduce(n,...e){return Nc(this,"reduce",n,e)},reduceRight(n,...e){return Nc(this,"reduceRight",n,e)},shift(){return lr(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return lr(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return lr(this,"unshift",n)},values(){return Pa(this,"values",n=>Dn(this,n))}};function Pa(n,e,t){const i=oa(n),s=i[e]();return i!==n&&!hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const am=Array.prototype;function Kn(n,e,t,i,s,r){const o=oa(n),a=o!==n&&!hn(n),l=o[e];if(l!==am[e]){const d=l.apply(n,r);return a?wn(d):d}let c=t;o!==n&&(a?c=function(d,h){return t.call(this,Dn(n,d),h,n)}:t.length>2&&(c=function(d,h){return t.call(this,d,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Nc(n,e,t,i){const s=oa(n),r=s!==n&&!hn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Dn(n,c)),t.call(this,c,Dn(n,u),d,n)}):t.length>3&&(o=function(c,u,d){return t.call(this,c,u,d,n)}));const l=s[e](o,...i);return a?Dn(n,l):l}function La(n,e,t){const i=at(n);Ht(i,"iterate",Nr);const s=i[e](...t);return(s===-1||s===!1)&&ua(t[0])?(t[0]=at(t[0]),i[e](...t)):s}function lr(n,e,t=[]){di(),nc();const i=at(n)[e].apply(n,t);return ic(),hi(),i}const lm=Yl("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Hn));function cm(n){Hn(n)||(n=String(n));const e=at(this);return Ht(e,"has",n),e.hasOwnProperty(n)}class Ih{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Bh:Fh:r?Oh:Uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!s){let l;if(o&&(l=om[t]))return l;if(t==="hasOwnProperty")return cm}const a=Reflect.get(e,t,Ut(e)?e:i);if((Hn(t)?Lh.has(t):lm(t))||(s||Ht(e,"get",t),r))return a;if(Ut(a)){const l=o&&Ql(t)?a:a.value;return s&&ft(l)?Ho(l):l}return ft(a)?s?Ho(a):la(a):a}}class Dh extends Ih{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Ve(e)&&Ql(t);if(!this._isShallow){const c=zn(r);if(!hn(i)&&!zn(i)&&(r=at(r),i=at(i)),!o&&Ut(r)&&!Ut(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:ct(e,t),l=Reflect.set(e,t,i,Ut(e)?e:s);return e===at(s)&&(a?On(i,r)&&ri(e,"set",t,i):ri(e,"add",t,i)),l}deleteProperty(e,t){const i=ct(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ri(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Hn(t)||!Lh.has(t))&&Ht(e,"has",t),i}ownKeys(e){return Ht(e,"iterate",Ve(e)?"length":ts),Reflect.ownKeys(e)}}class Nh extends Ih{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const um=new Dh,dm=new Nh,hm=new Dh(!0),fm=new Nh(!0),Cl=n=>n,Qr=n=>Reflect.getPrototypeOf(n);function pm(n,e,t){return function(...i){const s=this.__v_raw,r=at(s),o=Ns(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Cl:e?Gs:wn;return!e&&Ht(r,"iterate",l?Rl:ts),Wt(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function eo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function mm(n,e){const t={get(s){const r=this.__v_raw,o=at(r),a=at(s);n||(On(s,a)&&Ht(o,"get",s),Ht(o,"get",a));const{has:l}=Qr(o),c=e?Cl:n?Gs:wn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ht(at(s),"iterate",ts),s.size},has(s){const r=this.__v_raw,o=at(r),a=at(s);return n||(On(s,a)&&Ht(o,"has",s),Ht(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=at(a),c=e?Cl:n?Gs:wn;return!n&&Ht(l,"iterate",ts),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Wt(t,n?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(s){const r=at(this),o=Qr(r),a=at(s),l=!e&&!hn(s)&&!zn(s)?a:s;return o.has.call(r,l)||On(s,l)&&o.has.call(r,s)||On(a,l)&&o.has.call(r,a)||(r.add(l),ri(r,"add",l,l)),this},set(s,r){!e&&!hn(r)&&!zn(r)&&(r=at(r));const o=at(this),{has:a,get:l}=Qr(o);let c=a.call(o,s);c||(s=at(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?On(r,u)&&ri(o,"set",s,r):ri(o,"add",s,r),this},delete(s){const r=at(this),{has:o,get:a}=Qr(r);let l=o.call(r,s);l||(s=at(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ri(r,"delete",s,void 0),c},clear(){const s=at(this),r=s.size!==0,o=s.clear();return r&&ri(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=pm(s,n,e)}),t}function aa(n,e){const t=mm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ct(t,s)&&s in i?t:i,s,r)}const gm={get:aa(!1,!1)},_m={get:aa(!1,!0)},vm={get:aa(!0,!1)},xm={get:aa(!0,!0)},Uh=new WeakMap,Oh=new WeakMap,Fh=new WeakMap,Bh=new WeakMap;function ym(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mm(n){return n.__v_skip||!Object.isExtensible(n)?0:ym(qp(n))}function la(n){return zn(n)?n:ca(n,!1,um,gm,Uh)}function kh(n){return ca(n,!1,hm,_m,Oh)}function Ho(n){return ca(n,!0,dm,vm,Fh)}function Sm(n){return ca(n,!0,fm,xm,Bh)}function ca(n,e,t,i,s){if(!ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Mm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Di(n){return zn(n)?Di(n.__v_raw):!!(n&&n.__v_isReactive)}function zn(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function ua(n){return n?!!n.__v_raw:!1}function at(n){const e=n&&n.__v_raw;return e?at(e):n}function Vh(n){return!ct(n,"__v_skip")&&Object.isExtensible(n)&&vh(n,"__v_skip",!0),n}const wn=n=>ft(n)?la(n):n,Gs=n=>ft(n)?Ho(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function De(n){return bm(n,!1)}function bm(n,e){return Ut(n)?n:new Em(n,e)}class Em{constructor(e,t){this.dep=new rc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:at(e),this._value=t?e:wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||zn(e);e=i?e:at(e),On(e,t)&&(this._rawValue=e,this._value=i?e:wn(e),this.dep.trigger())}}function da(n){return Ut(n)?n.value:n}const Tm={get:(n,e,t)=>e==="__v_raw"?n:da(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Ut(s)&&!Ut(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function oc(n){return Di(n)?n:new Proxy(n,Tm)}class Am{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Th(this,!0),!0}get value(){const e=this.dep.track();return Rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wm(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new Am(i,s,t)}const to={},zo=new WeakMap;let Ki;function Hh(n,e=!1,t=Ki){if(t){let i=zo.get(t);i||zo.set(t,i=[]),i.push(n)}}function Rm(n,e,t=pt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:hn(M)||s===!1||s===0?oi(M,1):oi(M);let u,d,h,f,_=!1,v=!1;if(Ut(n)?(d=()=>n.value,_=hn(n)):Di(n)?(d=()=>c(n),_=!0):Ve(n)?(v=!0,_=n.some(M=>Di(M)||hn(M)),d=()=>n.map(M=>{if(Ut(M))return M.value;if(Di(M))return c(M);if(qe(M))return l?l(M,2):M()})):qe(n)?e?d=l?()=>l(n,2):n:d=()=>{if(h){di();try{h()}finally{hi()}}const M=Ki;Ki=u;try{return l?l(n,3,[f]):n(f)}finally{Ki=M}}:d=kn,e&&s){const M=d,I=s===!0?1/0:s;d=()=>oi(M(),I)}const p=bh(),m=()=>{u.stop(),p&&p.active&&Jl(p.effects,u)};if(r&&e){const M=e;e=(...I)=>{M(...I),m()}}let A=v?new Array(n.length).fill(to):to;const y=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const I=u.run();if(s||_||(v?I.some((R,T)=>On(R,A[T])):On(I,A))){h&&h();const R=Ki;Ki=u;try{const T=[I,A===to?void 0:v&&A[0]===to?[]:A,f];A=I,l?l(e,3,T):e(...T)}finally{Ki=R}}}else u.run()};return a&&a(y),u=new tc(d),u.scheduler=o?()=>o(y,!1):y,f=M=>Hh(M,!1,u),h=u.onStop=()=>{const M=zo.get(u);if(M){if(l)l(M,4);else for(const I of M)I();zo.delete(u)}},e?i?y(!0):A=u.run():o?o(y.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function oi(n,e=1/0,t){if(e<=0||!ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))oi(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)oi(n[i],e,t);else if(er(n)||Ns(n))n.forEach(i=>{oi(i,e,t)});else if(_h(n)){for(const i in n)oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&oi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nr(n,e,t,i){try{return i?n(...i):n()}catch(s){Wr(s,e,t)}}function Rn(n,e,t,i){if(qe(n)){const s=nr(n,e,t,i);return s&&mh(s)&&s.catch(r=>{Wr(r,e,t)}),s}if(Ve(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Rn(n[r],e,t,i));return s}}function Wr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){di(),nr(r,null,10,[n,l,c]),hi();return}}Cm(n,t,s,i,o)}function Cm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Yt=[];let Ln=-1;const Us=[];let Ai=null,Ps=0;const zh=Promise.resolve();let Go=null;function ha(n){const e=Go||zh;return n?e.then(this?n.bind(this):n):e}function Pm(n){let e=Ln+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=Ur(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function ac(n){if(!(n.flags&1)){const e=Ur(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=Ur(t)?Yt.push(n):Yt.splice(Pm(e),0,n),n.flags|=1,Gh()}}function Gh(){Go||(Go=zh.then($h))}function Wh(n){Ve(n)?Us.push(...n):Ai&&n.id===-1?Ai.splice(Ps+1,0,n):n.flags&1||(Us.push(n),n.flags|=1),Gh()}function Uc(n,e,t=Ln+1){for(;t<Yt.length;t++){const i=Yt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Yt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jh(n){if(Us.length){const e=[...new Set(Us)].sort((t,i)=>Ur(t)-Ur(i));if(Us.length=0,Ai){Ai.push(...e);return}for(Ai=e,Ps=0;Ps<Ai.length;Ps++){const t=Ai[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ai=null,Ps=0}}const Ur=n=>n.id==null?n.flags&2?-1:1/0:n.id;function $h(n){try{for(Ln=0;Ln<Yt.length;Ln++){const e=Yt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<Yt.length;Ln++){const e=Yt[Ln];e&&(e.flags&=-2)}Ln=-1,Yt.length=0,jh(),Go=null,(Yt.length||Us.length)&&$h()}}let cn=null,Xh=null;function Wo(n){const e=cn;return cn=n,Xh=n&&n.type.__scopeId||null,e}function qh(n,e=cn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Nl(-1);const r=Wo(e);let o;try{o=n(...s)}finally{Wo(r),i._d&&Nl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fn(n,e){if(cn===null)return n;const t=_a(cn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=pt]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&oi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Vi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(di(),Rn(l,t,8,[n.el,a,n,e]),hi())}}function Kh(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function Ar(n,e,t=!1){const i=Ff();if(i||Os){let s=Os?Os._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Yh=Symbol.for("v-scx"),Zh=()=>Ar(Yh);function ns(n,e,t){return Jh(n,e,t)}function Jh(n,e,t=pt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Wt({},t),l=e&&i||!e&&r!=="post";let c;if(Fr){if(r==="sync"){const f=Zh();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=kn,f.resume=kn,f.pause=kn,f}}const u=zt;a.call=(f,_,v)=>Rn(f,u,_,v);let d=!1;r==="post"?a.scheduler=f=>{en(f,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(f,_)=>{_?f():ac(f)}),a.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=Rm(n,e,a);return Fr&&(c?c.push(h):l&&h()),h}function Lm(n,e,t){const i=this.proxy,s=wt(n)?n.includes(".")?Qh(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=Xr(this),a=Jh(s,r.bind(i),t);return o(),a}function Qh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Im=Symbol("_vte"),Dm=n=>n.__isTeleport,Nm=Symbol("_leaveCb");function fa(n,e){n.shapeFlag&6&&n.component?(n.transition=e,fa(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ef(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Oc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const jo=new WeakMap;function wr(n,e,t,i,s=!1){if(Ve(n)){n.forEach((v,p)=>wr(v,e&&(Ve(e)?e[p]:e),t,i,s));return}if(Rr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?_a(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,d=a.setupState,h=at(d),f=d===pt?ph:v=>Oc(u,v)?!1:ct(h,v),_=(v,p)=>!(p&&Oc(u,p));if(c!=null&&c!==l){if(Fc(e),wt(c))u[c]=null,f(c)&&(d[c]=null);else if(Ut(c)){const v=e;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(qe(l))nr(l,a,12,[o,u]);else{const v=wt(l),p=Ut(l);if(v||p){const m=()=>{if(n.f){const A=v?f(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Ve(A)&&Jl(A,r);else if(Ve(A))A.includes(r)||A.push(r);else if(v)u[l]=[r],f(l)&&(d[l]=u[l]);else{const y=[r];_(l,n.k)&&(l.value=y),n.k&&(u[n.k]=y)}}else v?(u[l]=o,f(l)&&(d[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const A=()=>{m(),jo.delete(n)};A.id=-1,jo.set(n,A),en(A,t)}else Fc(n),m()}}}function Fc(n){const e=jo.get(n);e&&(e.flags|=8,jo.delete(n))}ra().requestIdleCallback;ra().cancelIdleCallback;const Rr=n=>!!n.type.__asyncLoader,tf=n=>n.type.__isKeepAlive;function nf(n,e){rf(n,"a",e)}function sf(n,e){rf(n,"da",e)}function rf(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(pa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)tf(s.parent.vnode)&&Um(i,e,t,s),s=s.parent}}function Um(n,e,t,i){const s=pa(e,n,i,!0);jr(()=>{Jl(i[e],s)},t)}function pa(n,e,t=zt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{di();const a=Xr(t),l=Rn(e,t,n,o);return a(),hi(),l});return i?s.unshift(r):s.push(r),r}}const mi=n=>(e,t=zt)=>{(!Fr||n==="sp")&&pa(n,(...i)=>e(...i),t)},of=mi("bm"),ma=mi("m"),af=mi("bu"),lf=mi("u"),cf=mi("bum"),jr=mi("um"),uf=mi("sp"),df=mi("rtg"),hf=mi("rtc");function ff(n,e=zt){pa("ec",n,e)}const Om="components";function pf(n,e){return Bm(Om,n,!0,e)||n}const Fm=Symbol.for("v-ndc");function Bm(n,e,t=!0,i=!1){const s=cn||zt;if(s){const r=s.type;{const a=xg(r,!1);if(a&&(a===e||a===Gt(e)||a===Gr(Gt(e))))return r}const o=Bc(s[n]||r[n],e)||Bc(s.appContext[n],e);return!o&&i?r:o}}function Bc(n,e){return n&&(n[e]||n[Gt(e)]||n[Gr(Gt(e))])}function st(n,e,t,i){let s;const r=t,o=Ve(n);if(o||wt(n)){const a=o&&Di(n);let l=!1,c=!1;a&&(l=!hn(n),c=zn(n),n=oa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=e(l?c?Gs(wn(n[u])):wn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ft(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Pl=n=>n?Bf(n)?_a(n):Pl(n.parent):null,Cr=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Pl(n.parent),$root:n=>Pl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gf(n),$forceUpdate:n=>n.f||(n.f=()=>{ac(n.update)}),$nextTick:n=>n.n||(n.n=ha.bind(n.proxy)),$watch:n=>Lm.bind(n)}),Ia=(n,e)=>n!==pt&&!n.__isScriptSetup&&ct(n,e),km={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Ia(i,e))return o[e]=1,i[e];if(s!==pt&&ct(s,e))return o[e]=2,s[e];if(ct(r,e))return o[e]=3,r[e];if(t!==pt&&ct(t,e))return o[e]=4,t[e];Ll&&(o[e]=0)}}const c=Cr[e];let u,d;if(c)return e==="$attrs"&&Ht(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==pt&&ct(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ct(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Ia(s,e)?(s[e]=t,!0):i!==pt&&ct(i,e)?(i[e]=t,!0):ct(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==pt&&a[0]!=="$"&&ct(n,a)||Ia(e,a)||ct(r,a)||ct(i,a)||ct(Cr,a)||ct(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ct(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kc(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ll=!0;function Vm(n){const e=gf(n),t=n.proxy,i=n.ctx;Ll=!1,e.beforeCreate&&Vc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:_,activated:v,deactivated:p,beforeDestroy:m,beforeUnmount:A,destroyed:y,unmounted:M,render:I,renderTracked:R,renderTriggered:T,errorCaptured:V,serverPrefetch:E,expose:S,inheritAttrs:D,components:B,directives:C,filters:X}=e;if(c&&Hm(c,i,null),o)for(const K in o){const N=o[K];qe(N)&&(i[K]=N.bind(t))}if(s){const K=s.call(t,t);ft(K)&&(n.data=la(K))}if(Ll=!0,r)for(const K in r){const N=r[K],q=qe(N)?N.bind(t,t):qe(N.get)?N.get.bind(t,t):kn,J=!qe(N)&&qe(N.set)?N.set.bind(t):kn,me=lt({get:q,set:J});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>me.value,set:Se=>me.value=Se})}if(a)for(const K in a)mf(a[K],i,t,K);if(l){const K=qe(l)?l.call(t):l;Reflect.ownKeys(K).forEach(N=>{Kh(N,K[N])})}u&&Vc(u,n,"c");function ie(K,N){Ve(N)?N.forEach(q=>K(q.bind(t))):N&&K(N.bind(t))}if(ie(of,d),ie(ma,h),ie(af,f),ie(lf,_),ie(nf,v),ie(sf,p),ie(ff,V),ie(hf,R),ie(df,T),ie(cf,A),ie(jr,M),ie(uf,E),Ve(S))if(S.length){const K=n.exposed||(n.exposed={});S.forEach(N=>{Object.defineProperty(K,N,{get:()=>t[N],set:q=>t[N]=q,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===kn&&(n.render=I),D!=null&&(n.inheritAttrs=D),B&&(n.components=B),C&&(n.directives=C),E&&ef(n)}function Hm(n,e,t=kn){Ve(n)&&(n=Il(n));for(const i in n){const s=n[i];let r;ft(s)?"default"in s?r=Ar(s.from||i,s.default,!0):r=Ar(s.from||i):r=Ar(s),Ut(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Vc(n,e,t){Rn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function mf(n,e,t,i){let s=i.includes(".")?Qh(t,i):()=>t[i];if(wt(n)){const r=e[n];qe(r)&&ns(s,r)}else if(qe(n))ns(s,n.bind(t));else if(ft(n))if(Ve(n))n.forEach(r=>mf(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&ns(s,r,n)}}function gf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>$o(l,c,o,!0)),$o(l,e,o)),ft(e)&&r.set(e,l),l}function $o(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&$o(n,r,t,!0),s&&s.forEach(o=>$o(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=zm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const zm={data:Hc,props:zc,emits:zc,methods:yr,computed:yr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:yr,directives:yr,watch:Wm,provide:Hc,inject:Gm};function Hc(n,e){return e?n?function(){return Wt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Gm(n,e){return yr(Il(n),Il(e))}function Il(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?Wt(Object.create(null),n,e):e}function zc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Wt(Object.create(null),kc(n),kc(e??{})):e}function Wm(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function _f(){return{app:null,config:{isNativeTag:ph,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function $m(n,e){return function(i,s=null){qe(i)||(i=Wt({},i)),s!=null&&!ft(s)&&(s=null);const r=_f(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:jm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Vf,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...d)):qe(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const f=c._ceVNode||_t(i,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(f,u,h),l=!0,c._container=u,u.__vue_app__=c,_a(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Os;Os=c;try{return u()}finally{Os=d}}};return c}}let Os=null;const Xm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Gt(e)}Modifiers`]||n[`${Fi(e)}Modifiers`];function qm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||pt;let s=t;const r=e.startsWith("update:"),o=r&&Xm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>wt(u)?u.trim():u)),o.number&&(s=t.map(sa)));let a,l=i[a=No(e)]||i[a=No(Gt(e))];!l&&r&&(l=i[a=No(Fi(e))]),l&&Rn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Rn(c,n,6,s)}}const Km=new WeakMap;function vf(n,e,t=!1){const i=t?Km:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=vf(c,e,!0);u&&(a=!0,Wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ft(n)&&i.set(n,null),null):(Ve(r)?r.forEach(l=>o[l]=null):Wt(o,r),ft(n)&&i.set(n,o),o)}function ga(n,e){return!n||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(n,e[0].toLowerCase()+e.slice(1))||ct(n,Fi(e))||ct(n,e))}function Gc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:_,inheritAttrs:v}=n,p=Wo(n);let m,A;try{if(t.shapeFlag&4){const M=s||i,I=M;m=Nn(c.call(I,M,u,d,f,h,_)),A=a}else{const M=e;m=Nn(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),A=e.props?a:Ym(a)}}catch(M){Pr.length=0,Wr(M,n,1),m=_t(fi)}let y=m;if(A&&v!==!1){const M=Object.keys(A),{shapeFlag:I}=y;M.length&&I&7&&(r&&M.some(Zl)&&(A=Zm(A,r)),y=ss(y,A,!1,!0))}return t.dirs&&(y=ss(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&fa(y,t.transition),m=y,Wo(p),m}const Ym=n=>{let e;for(const t in n)(t==="class"||t==="style"||na(t))&&((e||(e={}))[t]=n[t]);return e},Zm=(n,e)=>{const t={};for(const i in n)(!Zl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Jm(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Wc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(xf(o,i,h)&&!ga(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Wc(i,o,c):!0:!!o;return!1}function Wc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(xf(e,n,r)&&!ga(t,r))return!0}return!1}function xf(n,e,t){const i=n[t],s=e[t];return t==="style"&&ft(i)&&ft(s)?!tr(i,s):i!==s}function Qm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const yf={},Mf=()=>Object.create(yf),Sf=n=>Object.getPrototypeOf(n)===yf;function eg(n,e,t,i=!1){const s={},r=Mf();n.propsDefaults=Object.create(null),bf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:kh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function tg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=at(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ga(n.emitsOptions,h))continue;const f=e[h];if(l)if(ct(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const _=Gt(h);s[_]=Dl(l,a,_,f,n,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{bf(n,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!ct(e,d)&&((u=Fi(d))===d||!ct(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(s[d]=Dl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!ct(e,d))&&(delete r[d],c=!0)}c&&ri(n.attrs,"set","")}function bf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(br(l))continue;const c=e[l];let u;s&&ct(s,u=Gt(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=at(t),c=a||pt;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Dl(s,l,d,c[d],n,!ct(c,d))}}return o}function Dl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ct(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Xr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fi(t))&&(i=!0))}return i}const ng=new WeakMap;function Ef(n,e,t=!1){const i=t?ng:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=d=>{l=!0;const[h,f]=Ef(d,e,!0);Wt(o,h),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ft(n)&&i.set(n,Ds),Ds;if(Ve(r))for(let u=0;u<r.length;u++){const d=Gt(r[u]);jc(d)&&(o[d]=pt)}else if(r)for(const u in r){const d=Gt(u);if(jc(d)){const h=r[u],f=o[d]=Ve(h)||qe(h)?{type:h}:Wt({},h),_=f.type;let v=!1,p=!0;if(Ve(_))for(let m=0;m<_.length;++m){const A=_[m],y=qe(A)&&A.name;if(y==="Boolean"){v=!0;break}else y==="String"&&(p=!1)}else v=qe(_)&&_.name==="Boolean";f[0]=v,f[1]=p,(v||ct(f,"default"))&&a.push(d)}}const c=[o,a];return ft(n)&&i.set(n,c),c}function jc(n){return n[0]!=="$"&&!br(n)}const lc=n=>n==="_"||n==="_ctx"||n==="$stable",cc=n=>Ve(n)?n.map(Nn):[Nn(n)],ig=(n,e,t)=>{if(e._n)return e;const i=qh((...s)=>cc(e(...s)),t);return i._c=!1,i},Tf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(lc(s))continue;const r=n[s];if(qe(r))e[s]=ig(s,r,i);else if(r!=null){const o=cc(r);e[s]=()=>o}}},Af=(n,e)=>{const t=cc(e);n.slots.default=()=>t},wf=(n,e,t)=>{for(const i in e)(t||!lc(i))&&(n[i]=e[i])},sg=(n,e,t)=>{const i=n.slots=Mf();if(n.vnode.shapeFlag&32){const s=e._;s?(wf(i,e,t),t&&vh(i,"_",s,!0)):Tf(e,i)}else e&&Af(n,e)},rg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:wf(s,e,t):(r=!e.$stable,Tf(e,s)),o=e}else e&&(Af(n,e),o={default:1});if(r)for(const a in s)!lc(a)&&o[a]==null&&delete s[a]},en=cg;function Rf(n){return og(n)}function og(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=kn,insertStaticContent:_}=n,v=(L,O,te,se=null,de=null,b=null,x=void 0,F=null,W=!!O.dynamicChildren)=>{if(L===O)return;L&&!cr(L,O)&&(se=be(L),Se(L,de,b,!0),L=null),O.patchFlag===-2&&(W=!1,O.dynamicChildren=null);const{type:z,ref:ne,shapeFlag:he}=O;switch(z){case $r:p(L,O,te,se);break;case fi:m(L,O,te,se);break;case Oo:L==null&&A(O,te,se,x);break;case ke:B(L,O,te,se,de,b,x,F,W);break;default:he&1?I(L,O,te,se,de,b,x,F,W):he&6?C(L,O,te,se,de,b,x,F,W):(he&64||he&128)&&z.process(L,O,te,se,de,b,x,F,W,je)}ne!=null&&de?wr(ne,L&&L.ref,b,O||L,!O):ne==null&&L&&L.ref!=null&&wr(L.ref,null,b,L,!0)},p=(L,O,te,se)=>{if(L==null)i(O.el=a(O.children),te,se);else{const de=O.el=L.el;O.children!==L.children&&c(de,O.children)}},m=(L,O,te,se)=>{L==null?i(O.el=l(O.children||""),te,se):O.el=L.el},A=(L,O,te,se)=>{[L.el,L.anchor]=_(L.children,O,te,se,L.el,L.anchor)},y=({el:L,anchor:O},te,se)=>{let de;for(;L&&L!==O;)de=h(L),i(L,te,se),L=de;i(O,te,se)},M=({el:L,anchor:O})=>{let te;for(;L&&L!==O;)te=h(L),s(L),L=te;s(O)},I=(L,O,te,se,de,b,x,F,W)=>{if(O.type==="svg"?x="svg":O.type==="math"&&(x="mathml"),L==null)R(O,te,se,de,b,x,F,W);else{const z=L.el&&L.el._isVueCE?L.el:null;try{z&&z._beginPatch(),E(L,O,de,b,x,F,W)}finally{z&&z._endPatch()}}},R=(L,O,te,se,de,b,x,F)=>{let W,z;const{props:ne,shapeFlag:he,transition:re,dirs:ge}=L;if(W=L.el=o(L.type,b,ne&&ne.is,ne),he&8?u(W,L.children):he&16&&V(L.children,W,null,se,de,Da(L,b),x,F),ge&&Vi(L,null,se,"created"),T(W,L,L.scopeId,x,se),ne){for(const fe in ne)fe!=="value"&&!br(fe)&&r(W,fe,null,ne[fe],b,se);"value"in ne&&r(W,"value",null,ne.value,b),(z=ne.onVnodeBeforeMount)&&Pn(z,se,L)}ge&&Vi(L,null,se,"beforeMount");const ye=ag(de,re);ye&&re.beforeEnter(W),i(W,O,te),((z=ne&&ne.onVnodeMounted)||ye||ge)&&en(()=>{z&&Pn(z,se,L),ye&&re.enter(W),ge&&Vi(L,null,se,"mounted")},de)},T=(L,O,te,se,de)=>{if(te&&f(L,te),se)for(let b=0;b<se.length;b++)f(L,se[b]);if(de){let b=de.subTree;if(O===b||If(b.type)&&(b.ssContent===O||b.ssFallback===O)){const x=de.vnode;T(L,x,x.scopeId,x.slotScopeIds,de.parent)}}},V=(L,O,te,se,de,b,x,F,W=0)=>{for(let z=W;z<L.length;z++){const ne=L[z]=F?si(L[z]):Nn(L[z]);v(null,ne,O,te,se,de,b,x,F)}},E=(L,O,te,se,de,b,x)=>{const F=O.el=L.el;let{patchFlag:W,dynamicChildren:z,dirs:ne}=O;W|=L.patchFlag&16;const he=L.props||pt,re=O.props||pt;let ge;if(te&&Hi(te,!1),(ge=re.onVnodeBeforeUpdate)&&Pn(ge,te,O,L),ne&&Vi(O,L,te,"beforeUpdate"),te&&Hi(te,!0),(he.innerHTML&&re.innerHTML==null||he.textContent&&re.textContent==null)&&u(F,""),z?S(L.dynamicChildren,z,F,te,se,Da(O,de),b):x||N(L,O,F,null,te,se,Da(O,de),b,!1),W>0){if(W&16)D(F,he,re,te,de);else if(W&2&&he.class!==re.class&&r(F,"class",null,re.class,de),W&4&&r(F,"style",he.style,re.style,de),W&8){const ye=O.dynamicProps;for(let fe=0;fe<ye.length;fe++){const ve=ye[fe],Pe=he[ve],Te=re[ve];(Te!==Pe||ve==="value")&&r(F,ve,Pe,Te,de,te)}}W&1&&L.children!==O.children&&u(F,O.children)}else!x&&z==null&&D(F,he,re,te,de);((ge=re.onVnodeUpdated)||ne)&&en(()=>{ge&&Pn(ge,te,O,L),ne&&Vi(O,L,te,"updated")},se)},S=(L,O,te,se,de,b,x)=>{for(let F=0;F<O.length;F++){const W=L[F],z=O[F],ne=W.el&&(W.type===ke||!cr(W,z)||W.shapeFlag&198)?d(W.el):te;v(W,z,ne,null,se,de,b,x,!0)}},D=(L,O,te,se,de)=>{if(O!==te){if(O!==pt)for(const b in O)!br(b)&&!(b in te)&&r(L,b,O[b],null,de,se);for(const b in te){if(br(b))continue;const x=te[b],F=O[b];x!==F&&b!=="value"&&r(L,b,F,x,de,se)}"value"in te&&r(L,"value",O.value,te.value,de)}},B=(L,O,te,se,de,b,x,F,W)=>{const z=O.el=L?L.el:a(""),ne=O.anchor=L?L.anchor:a("");let{patchFlag:he,dynamicChildren:re,slotScopeIds:ge}=O;ge&&(F=F?F.concat(ge):ge),L==null?(i(z,te,se),i(ne,te,se),V(O.children||[],te,ne,de,b,x,F,W)):he>0&&he&64&&re&&L.dynamicChildren&&L.dynamicChildren.length===re.length?(S(L.dynamicChildren,re,te,de,b,x,F),(O.key!=null||de&&O===de.subTree)&&Cf(L,O,!0)):N(L,O,te,ne,de,b,x,F,W)},C=(L,O,te,se,de,b,x,F,W)=>{O.slotScopeIds=F,L==null?O.shapeFlag&512?de.ctx.activate(O,te,se,x,W):X(O,te,se,de,b,x,W):Q(L,O,W)},X=(L,O,te,se,de,b,x)=>{const F=L.component=pg(L,se,de);if(tf(L)&&(F.ctx.renderer=je),mg(F,!1,x),F.asyncDep){if(de&&de.registerDep(F,ie,x),!L.el){const W=F.subTree=_t(fi);m(null,W,O,te),L.placeholder=W.el}}else ie(F,L,O,te,de,b,x)},Q=(L,O,te)=>{const se=O.component=L.component;if(Jm(L,O,te))if(se.asyncDep&&!se.asyncResolved){K(se,O,te);return}else se.next=O,se.update();else O.el=L.el,se.vnode=O},ie=(L,O,te,se,de,b,x)=>{const F=()=>{if(L.isMounted){let{next:he,bu:re,u:ge,parent:ye,vnode:fe}=L;{const Ue=Pf(L);if(Ue){he&&(he.el=fe.el,K(L,he,x)),Ue.asyncDep.then(()=>{en(()=>{L.isUnmounted||z()},de)});return}}let ve=he,Pe;Hi(L,!1),he?(he.el=fe.el,K(L,he,x)):he=fe,re&&Uo(re),(Pe=he.props&&he.props.onVnodeBeforeUpdate)&&Pn(Pe,ye,he,fe),Hi(L,!0);const Te=Gc(L),we=L.subTree;L.subTree=Te,v(we,Te,d(we.el),be(we),L,de,b),he.el=Te.el,ve===null&&Qm(L,Te.el),ge&&en(ge,de),(Pe=he.props&&he.props.onVnodeUpdated)&&en(()=>Pn(Pe,ye,he,fe),de)}else{let he;const{el:re,props:ge}=O,{bm:ye,m:fe,parent:ve,root:Pe,type:Te}=L,we=Rr(O);Hi(L,!1),ye&&Uo(ye),!we&&(he=ge&&ge.onVnodeBeforeMount)&&Pn(he,ve,O),Hi(L,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(Te,L.parent?L.parent.type:void 0);const Ue=L.subTree=Gc(L);v(null,Ue,te,se,L,de,b),O.el=Ue.el}if(fe&&en(fe,de),!we&&(he=ge&&ge.onVnodeMounted)){const Ue=O;en(()=>Pn(he,ve,Ue),de)}(O.shapeFlag&256||ve&&Rr(ve.vnode)&&ve.vnode.shapeFlag&256)&&L.a&&en(L.a,de),L.isMounted=!0,O=te=se=null}};L.scope.on();const W=L.effect=new tc(F);L.scope.off();const z=L.update=W.run.bind(W),ne=L.job=W.runIfDirty.bind(W);ne.i=L,ne.id=L.uid,W.scheduler=()=>ac(ne),Hi(L,!0),z()},K=(L,O,te)=>{O.component=L;const se=L.vnode.props;L.vnode=O,L.next=null,tg(L,O.props,se,te),rg(L,O.children,te),di(),Uc(L),hi()},N=(L,O,te,se,de,b,x,F,W=!1)=>{const z=L&&L.children,ne=L?L.shapeFlag:0,he=O.children,{patchFlag:re,shapeFlag:ge}=O;if(re>0){if(re&128){J(z,he,te,se,de,b,x,F,W);return}else if(re&256){q(z,he,te,se,de,b,x,F,W);return}}ge&8?(ne&16&&Ee(z,de,b),he!==z&&u(te,he)):ne&16?ge&16?J(z,he,te,se,de,b,x,F,W):Ee(z,de,b,!0):(ne&8&&u(te,""),ge&16&&V(he,te,se,de,b,x,F,W))},q=(L,O,te,se,de,b,x,F,W)=>{L=L||Ds,O=O||Ds;const z=L.length,ne=O.length,he=Math.min(z,ne);let re;for(re=0;re<he;re++){const ge=O[re]=W?si(O[re]):Nn(O[re]);v(L[re],ge,te,null,de,b,x,F,W)}z>ne?Ee(L,de,b,!0,!1,he):V(O,te,se,de,b,x,F,W,he)},J=(L,O,te,se,de,b,x,F,W)=>{let z=0;const ne=O.length;let he=L.length-1,re=ne-1;for(;z<=he&&z<=re;){const ge=L[z],ye=O[z]=W?si(O[z]):Nn(O[z]);if(cr(ge,ye))v(ge,ye,te,null,de,b,x,F,W);else break;z++}for(;z<=he&&z<=re;){const ge=L[he],ye=O[re]=W?si(O[re]):Nn(O[re]);if(cr(ge,ye))v(ge,ye,te,null,de,b,x,F,W);else break;he--,re--}if(z>he){if(z<=re){const ge=re+1,ye=ge<ne?O[ge].el:se;for(;z<=re;)v(null,O[z]=W?si(O[z]):Nn(O[z]),te,ye,de,b,x,F,W),z++}}else if(z>re)for(;z<=he;)Se(L[z],de,b,!0),z++;else{const ge=z,ye=z,fe=new Map;for(z=ye;z<=re;z++){const Ne=O[z]=W?si(O[z]):Nn(O[z]);Ne.key!=null&&fe.set(Ne.key,z)}let ve,Pe=0;const Te=re-ye+1;let we=!1,Ue=0;const $e=new Array(Te);for(z=0;z<Te;z++)$e[z]=0;for(z=ge;z<=he;z++){const Ne=L[z];if(Pe>=Te){Se(Ne,de,b,!0);continue}let Ge;if(Ne.key!=null)Ge=fe.get(Ne.key);else for(ve=ye;ve<=re;ve++)if($e[ve-ye]===0&&cr(Ne,O[ve])){Ge=ve;break}Ge===void 0?Se(Ne,de,b,!0):($e[Ge-ye]=z+1,Ge>=Ue?Ue=Ge:we=!0,v(Ne,O[Ge],te,null,de,b,x,F,W),Pe++)}const tt=we?lg($e):Ds;for(ve=tt.length-1,z=Te-1;z>=0;z--){const Ne=ye+z,Ge=O[Ne],H=O[Ne+1],g=Ne+1<ne?H.el||Lf(H):se;$e[z]===0?v(null,Ge,te,g,de,b,x,F,W):we&&(ve<0||z!==tt[ve]?me(Ge,te,g,2):ve--)}}},me=(L,O,te,se,de=null)=>{const{el:b,type:x,transition:F,children:W,shapeFlag:z}=L;if(z&6){me(L.component.subTree,O,te,se);return}if(z&128){L.suspense.move(O,te,se);return}if(z&64){x.move(L,O,te,je);return}if(x===ke){i(b,O,te);for(let he=0;he<W.length;he++)me(W[he],O,te,se);i(L.anchor,O,te);return}if(x===Oo){y(L,O,te);return}if(se!==2&&z&1&&F)if(se===0)F.beforeEnter(b),i(b,O,te),en(()=>F.enter(b),de);else{const{leave:he,delayLeave:re,afterLeave:ge}=F,ye=()=>{L.ctx.isUnmounted?s(b):i(b,O,te)},fe=()=>{b._isLeaving&&b[Nm](!0),he(b,()=>{ye(),ge&&ge()})};re?re(b,ye,fe):fe()}else i(b,O,te)},Se=(L,O,te,se=!1,de=!1)=>{const{type:b,props:x,ref:F,children:W,dynamicChildren:z,shapeFlag:ne,patchFlag:he,dirs:re,cacheIndex:ge}=L;if(he===-2&&(de=!1),F!=null&&(di(),wr(F,null,te,L,!0),hi()),ge!=null&&(O.renderCache[ge]=void 0),ne&256){O.ctx.deactivate(L);return}const ye=ne&1&&re,fe=!Rr(L);let ve;if(fe&&(ve=x&&x.onVnodeBeforeUnmount)&&Pn(ve,O,L),ne&6)_e(L.component,te,se);else{if(ne&128){L.suspense.unmount(te,se);return}ye&&Vi(L,null,O,"beforeUnmount"),ne&64?L.type.remove(L,O,te,je,se):z&&!z.hasOnce&&(b!==ke||he>0&&he&64)?Ee(z,O,te,!1,!0):(b===ke&&he&384||!de&&ne&16)&&Ee(W,O,te),se&&Ie(L)}(fe&&(ve=x&&x.onVnodeUnmounted)||ye)&&en(()=>{ve&&Pn(ve,O,L),ye&&Vi(L,null,O,"unmounted")},te)},Ie=L=>{const{type:O,el:te,anchor:se,transition:de}=L;if(O===ke){ae(te,se);return}if(O===Oo){M(L);return}const b=()=>{s(te),de&&!de.persisted&&de.afterLeave&&de.afterLeave()};if(L.shapeFlag&1&&de&&!de.persisted){const{leave:x,delayLeave:F}=de,W=()=>x(te,b);F?F(L.el,b,W):W()}else b()},ae=(L,O)=>{let te;for(;L!==O;)te=h(L),s(L),L=te;s(O)},_e=(L,O,te)=>{const{bum:se,scope:de,job:b,subTree:x,um:F,m:W,a:z}=L;$c(W),$c(z),se&&Uo(se),de.stop(),b&&(b.flags|=8,Se(x,L,O,te)),F&&en(F,O),en(()=>{L.isUnmounted=!0},O)},Ee=(L,O,te,se=!1,de=!1,b=0)=>{for(let x=b;x<L.length;x++)Se(L[x],O,te,se,de)},be=L=>{if(L.shapeFlag&6)return be(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const O=h(L.anchor||L.el),te=O&&O[Im];return te?h(te):O};let Fe=!1;const He=(L,O,te)=>{let se;L==null?O._vnode&&(Se(O._vnode,null,null,!0),se=O._vnode.component):v(O._vnode||null,L,O,null,null,null,te),O._vnode=L,Fe||(Fe=!0,Uc(se),jh(),Fe=!1)},je={p:v,um:Se,m:me,r:Ie,mt:X,mc:V,pc:N,pbc:S,n:be,o:n};return{render:He,hydrate:void 0,createApp:$m(He)}}function Da({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Hi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ag(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Cf(n,e,t=!1){const i=n.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=si(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Cf(o,a)),a.type===$r&&(a.patchFlag===-1&&(a=s[r]=si(a)),a.el=o.el),a.type===fi&&!a.el&&(a.el=o.el)}}function lg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Pf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pf(e)}function $c(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Lf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Lf(e.subTree):null}const If=n=>n.__isSuspense;function cg(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Wh(n)}const ke=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),fi=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),Pr=[];let un=null;function k(n=!1){Pr.push(un=n?null:[])}function ug(){Pr.pop(),un=Pr[Pr.length-1]||null}let Or=1;function Nl(n,e=!1){Or+=n,n<0&&un&&e&&(un.hasOnce=!0)}function Df(n){return n.dynamicChildren=Or>0?un||Ds:null,ug(),Or>0&&un&&un.push(n),n}function G(n,e,t,i,s,r){return Df(U(n,e,t,i,s,r,!0))}function is(n,e,t,i,s){return Df(_t(n,e,t,i,s,!0))}function uc(n){return n?n.__v_isVNode===!0:!1}function cr(n,e){return n.type===e.type&&n.key===e.key}const Nf=({key:n})=>n??null,Fo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||Ut(n)||qe(n)?{i:cn,r:n,k:e,f:!!t}:n:null);function U(n,e=null,t=null,i=0,s=null,r=n===ke?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Nf(e),ref:e&&Fo(e),scopeId:Xh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:cn};return a?(dc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),Or>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const _t=dg;function dg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Fm)&&(n=fi),uc(n)){const a=ss(n,e,!0);return t&&dc(a,t),Or>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(yg(n)&&(n=n.__vccOpts),e){e=Uf(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Tt(a)),ft(l)&&(ua(l)&&!Ve(l)&&(l=Wt({},l)),e.style=ui(l))}const o=wt(n)?1:If(n)?128:Dm(n)?64:ft(n)?4:qe(n)?2:0;return U(n,e,t,i,s,o,r,!0)}function Uf(n){return n?ua(n)||Sf(n)?Wt({},n):n:null}function ss(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Of(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Nf(c),ref:e&&e.ref?t&&r?Ve(r)?r.concat(Fo(e)):[r,Fo(e)]:Fo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==ke?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ss(n.ssContent),ssFallback:n.ssFallback&&ss(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&fa(u,l.clone(u)),u}function Dt(n=" ",e=0){return _t($r,null,n,e)}function pe(n="",e=!1){return e?(k(),is(fi,null,n)):_t(fi,null,n)}function Nn(n){return n==null||typeof n=="boolean"?_t(fi):Ve(n)?_t(ke,null,n.slice()):uc(n)?si(n):_t($r,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ss(n)}function dc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),dc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Sf(e)?e._ctx=cn:s===3&&cn&&(cn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:cn},t=32):(e=String(e),i&64?(t=16,e=[Dt(e)]):t=8);n.children=e,n.shapeFlag|=t}function Of(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Tt([e.class,i.class]));else if(s==="style")e.style=ui([e.style,i.style]);else if(na(s)){const r=e[s],o=i[s];o&&r!==o&&!(Ve(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Pn(n,e,t,i=null){Rn(n,e,7,[t,i])}const hg=_f();let fg=0;function pg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||hg,r={uid:fg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ef(i,s),emitsOptions:vf(i,s),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=qm.bind(null,r),n.ce&&n.ce(r),r}let zt=null;const Ff=()=>zt||cn;let Xo,Ul;{const n=ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Xo=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),Ul=e("__VUE_SSR_SETTERS__",t=>Fr=t)}const Xr=n=>{const e=zt;return Xo(n),n.scope.on(),()=>{n.scope.off(),Xo(e)}},Xc=()=>{zt&&zt.scope.off(),Xo(null)};function Bf(n){return n.vnode.shapeFlag&4}let Fr=!1;function mg(n,e=!1,t=!1){e&&Ul(e);const{props:i,children:s}=n.vnode,r=Bf(n);eg(n,i,r,e),sg(n,s,t||e);const o=r?gg(n,e):void 0;return e&&Ul(!1),o}function gg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,km);const{setup:i}=t;if(i){di();const s=n.setupContext=i.length>1?vg(n):null,r=Xr(n),o=nr(i,n,0,[n.props,s]),a=mh(o);if(hi(),r(),(a||n.sp)&&!Rr(n)&&ef(n),a){if(o.then(Xc,Xc),e)return o.then(l=>{qc(n,l)}).catch(l=>{Wr(l,n,0)});n.asyncDep=o}else qc(n,o)}else kf(n)}function qc(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ft(e)&&(n.setupState=oc(e)),kf(n)}function kf(n,e,t){const i=n.type;n.render||(n.render=i.render||kn);{const s=Xr(n);di();try{Vm(n)}finally{hi(),s()}}}const _g={get(n,e){return Ht(n,"get",""),n[e]}};function vg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,_g),slots:n.slots,emit:n.emit,expose:e}}function _a(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(oc(Vh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Cr)return Cr[t](n)},has(e,t){return t in e||t in Cr}})):n.proxy}function xg(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function yg(n){return qe(n)&&"__vccOpts"in n}const lt=(n,e)=>wm(n,e,Fr),Vf="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ol;const Kc=typeof window<"u"&&window.trustedTypes;if(Kc)try{Ol=Kc.createPolicy("vue",{createHTML:n=>n})}catch{}const Hf=Ol?n=>Ol.createHTML(n):n=>n,Mg="http://www.w3.org/2000/svg",Sg="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,Yc=ii&&ii.createElement("template"),zf={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ii.createElementNS(Mg,n):e==="mathml"?ii.createElementNS(Sg,n):t?ii.createElement(n,{is:t}):ii.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ii.createTextNode(n),createComment:n=>ii.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ii.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Yc.innerHTML=Hf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Yc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bg=Symbol("_vtc");function Eg(n,e,t){const i=n[bg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qo=Symbol("_vod"),Gf=Symbol("_vsh"),Ls={name:"show",beforeMount(n,{value:e},{transition:t}){n[qo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ur(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ur(n,!0),i.enter(n)):i.leave(n,()=>{ur(n,!1)}):ur(n,e))},beforeUnmount(n,{value:e}){ur(n,e)}};function ur(n,e){n.style.display=e?n[qo]:"none",n[Gf]=!e}const Tg=Symbol(""),Ag=/(?:^|;)\s*display\s*:/;function wg(n,e,t){const i=n.style,s=wt(t);let r=!1;if(t&&!s){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Bo(i,a,"")}else for(const o in e)t[o]==null&&Bo(i,o,"");for(const o in t)o==="display"&&(r=!0),Bo(i,o,t[o])}else if(s){if(e!==t){const o=i[Tg];o&&(t+=";"+o),i.cssText=t,r=Ag.test(t)}}else e&&n.removeAttribute("style");qo in n&&(n[qo]=r?i.display:"",n[Gf]&&(i.display="none"))}const Zc=/\s*!important$/;function Bo(n,e,t){if(Ve(t))t.forEach(i=>Bo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Rg(n,e);Zc.test(t)?n.setProperty(Fi(i),t.replace(Zc,""),"important"):n[i]=t}}const Jc=["Webkit","Moz","ms"],Na={};function Rg(n,e){const t=Na[e];if(t)return t;let i=Gt(e);if(i!=="filter"&&i in n)return Na[e]=i;i=Gr(i);for(let s=0;s<Jc.length;s++){const r=Jc[s]+i;if(r in n)return Na[e]=r}return e}const Qc="http://www.w3.org/1999/xlink";function eu(n,e,t,i,s,r=nm(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Qc,e.slice(6,e.length)):n.setAttributeNS(Qc,e,t):t==null||r&&!xh(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Hn(t)?String(t):t)}function tu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Hf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=xh(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ci(n,e,t,i){n.addEventListener(e,t,i)}function Cg(n,e,t,i){n.removeEventListener(e,t,i)}const nu=Symbol("_vei");function Pg(n,e,t,i,s=null){const r=n[nu]||(n[nu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Lg(e);if(i){const c=r[e]=Ng(i,s);Ci(n,a,c,l)}else o&&(Cg(n,a,o,l),r[e]=void 0)}}const iu=/(?:Once|Passive|Capture)$/;function Lg(n){let e;if(iu.test(n)){e={};let i;for(;i=n.match(iu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fi(n.slice(2)),e]}let Ua=0;const Ig=Promise.resolve(),Dg=()=>Ua||(Ig.then(()=>Ua=0),Ua=Date.now());function Ng(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Rn(Ug(i,t.value),e,5,[i])};return t.value=n,t.attached=Dg(),t}function Ug(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const su=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Wf=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Eg(n,i,o):e==="style"?wg(n,t,i):na(e)?Zl(e)||Pg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Og(n,e,i,o))?(tu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&eu(n,e,i,o,r,e!=="value")):n._isVueCE&&(Fg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!wt(i)))?tu(n,Gt(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),eu(n,e,i,o))};function Og(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&su(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return su(e)&&wt(t)?!1:e in n}function Fg(n,e){const t=n._def.props;if(!t)return!1;const i=Gt(e);return Array.isArray(t)?t.some(s=>Gt(s)===i):Object.keys(t).some(s=>Gt(s)===i)}const Ws=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ve(e)?t=>Uo(e,t):e};function Bg(n){n.target.composing=!0}function ru(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ci=Symbol("_assign");function ou(n,e,t){return e&&(n=n.trim()),t&&(n=sa(n)),n}const jf={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[ci]=Ws(s);const r=i||s.props&&s.props.type==="number";Ci(n,e?"change":"input",o=>{o.target.composing||n[ci](ou(n.value,t,r))}),(t||r)&&Ci(n,"change",()=>{n.value=ou(n.value,t,r)}),e||(Ci(n,"compositionstart",Bg),Ci(n,"compositionend",ru),Ci(n,"change",ru))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ci]=Ws(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?sa(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},Fl={deep:!0,created(n,e,t){n[ci]=Ws(t),Ci(n,"change",()=>{const i=n._modelValue,s=Br(n),r=n.checked,o=n[ci];if(Ve(i)){const a=ec(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(er(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Xf(n,r))})},mounted:au,beforeUpdate(n,e,t){n[ci]=Ws(t),au(n,e,t)}};function au(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(Ve(e))s=ec(e,i.props.value)>-1;else if(er(e))s=e.has(i.props.value);else{if(e===t)return;s=tr(e,Xf(n,!0))}n.checked!==s&&(n.checked=s)}const $f={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=er(e);Ci(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?sa(Br(o)):Br(o));n[ci](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,ha(()=>{n._assigning=!1})}),n[ci]=Ws(i)},mounted(n,{value:e}){lu(n,e)},beforeUpdate(n,e,t){n[ci]=Ws(t)},updated(n,{value:e}){n._assigning||lu(n,e)}};function lu(n,e){const t=n.multiple,i=Ve(e);if(!(t&&!i&&!er(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Br(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ec(e,a)>-1}else o.selected=e.has(a);else if(tr(Br(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Br(n){return"_value"in n?n._value:n.value}function Xf(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const kg=["ctrl","shift","alt","meta"],Vg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>kg.some(t=>n[`${t}Key`]&&!e.includes(t))},Fs=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Vg[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Hg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qf=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=Fi(s.key);if(e.some(o=>o===r||Hg[o]===r))return n(s)})},zg=Wt({patchProp:Wf},zf);let cu;function Gg(){return cu||(cu=Rf(zg))}const Kf=(...n)=>{const e=Gg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=jg(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Wg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function jg(n){return wt(n)?document.querySelector(n):n}/**
* vue v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $g=Object.freeze(Object.defineProperty({__proto__:null,Comment:fi,EffectScope:Sh,Fragment:ke,ReactiveEffect:tc,Static:Oo,Text:$r,callWithAsyncErrorHandling:Rn,callWithErrorHandling:nr,camelize:Gt,capitalize:Gr,cloneVNode:ss,computed:lt,createApp:Kf,createBlock:is,createCommentVNode:pe,createElementBlock:G,createElementVNode:U,createRenderer:Rf,createTextVNode:Dt,createVNode:_t,getCurrentInstance:Ff,getCurrentScope:bh,guardReactiveProps:Uf,handleError:Wr,inject:Ar,isProxy:ua,isReactive:Di,isReadonly:zn,isRef:Ut,isShallow:hn,isVNode:uc,markRaw:Vh,mergeProps:Of,nextTick:ha,nodeOps:zf,normalizeClass:Tt,normalizeStyle:ui,onActivated:nf,onBeforeMount:of,onBeforeUnmount:cf,onBeforeUpdate:af,onDeactivated:sf,onErrorCaptured:ff,onMounted:ma,onRenderTracked:hf,onRenderTriggered:df,onServerPrefetch:uf,onUnmounted:jr,onUpdated:lf,onWatcherCleanup:Hh,openBlock:k,patchProp:Wf,provide:Kh,proxyRefs:oc,queuePostFlushCb:Wh,reactive:la,readonly:Ho,ref:De,renderList:st,resolveComponent:pf,setBlockTracking:Nl,setTransitionHooks:fa,shallowReactive:kh,shallowReadonly:Sm,ssrContextKey:Yh,toDisplayString:Z,toHandlerKey:No,toRaw:at,unref:da,useSSRContext:Zh,vModelCheckbox:Fl,vModelSelect:$f,vModelText:jf,vShow:Ls,version:Vf,watch:ns,withCtx:qh,withDirectives:Fn,withKeys:qf,withModifiers:Fs},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hc="163",us={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xg=0,uu=1,qg=2,Yf=1,Kg=2,ni=3,Cn=0,nn=1,an=2,Ni=0,Bs=1,du=2,hu=3,fu=4,Yg=5,Zi=100,Zg=101,Jg=102,Qg=103,e_=104,t_=200,n_=201,i_=202,s_=203,Bl=204,kl=205,r_=206,o_=207,a_=208,l_=209,c_=210,u_=211,d_=212,h_=213,f_=214,p_=0,m_=1,g_=2,Ko=3,__=4,v_=5,x_=6,y_=7,Zf=0,M_=1,S_=2,Ui=0,b_=1,E_=2,T_=3,A_=4,w_=5,R_=6,C_=7,pu="attached",P_="detached",Jf=300,js=301,$s=302,Vl=303,Hl=304,va=306,Xs=1e3,Li=1001,Yo=1002,Jt=1003,Qf=1004,Mr=1005,ln=1006,ko=1007,ai=1008,Oi=1009,L_=1010,I_=1011,ep=1012,tp=1013,qs=1014,Bn=1015,Zo=1016,np=1017,ip=1018,qr=1020,D_=35902,N_=1021,U_=1022,En=1023,O_=1024,F_=1025,ks=1026,kr=1027,sp=1028,rp=1029,B_=1030,op=1031,ap=1033,Oa=33776,Fa=33777,Ba=33778,ka=33779,mu=35840,gu=35841,_u=35842,vu=35843,lp=36196,xu=37492,yu=37496,Mu=37808,Su=37809,bu=37810,Eu=37811,Tu=37812,Au=37813,wu=37814,Ru=37815,Cu=37816,Pu=37817,Lu=37818,Iu=37819,Du=37820,Nu=37821,Va=36492,Uu=36494,Ou=36495,k_=36283,Fu=36284,Bu=36285,ku=36286,Vr=2300,Ks=2301,Ha=2302,Vu=2400,Hu=2401,zu=2402,V_=2500,H_=0,cp=1,zl=2,z_=3200,G_=3201,up=0,W_=1,Pi="",Kt="srgb",Ot="srgb-linear",fc="display-p3",xa="display-p3-linear",Jo="linear",xt="srgb",Qo="rec709",ea="p3",hs=7680,Gu=519,j_=512,$_=513,X_=514,dp=515,q_=516,K_=517,Y_=518,Z_=519,Gl=35044,Wu="300 es",li=2e3,ta=2001;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ju=1234567;const Vs=Math.PI/180,Ys=180/Math.PI;function An(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function pc(n,e){return(n%e+e)%e}function J_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Q_(n,e,t){return n!==e?(t-n)/(e-n):0}function Lr(n,e,t){return(1-t)*n+t*e}function ev(n,e,t,i){return Lr(n,e,1-Math.exp(-t*i))}function tv(n,e=1){return e-Math.abs(pc(n,e*2)-e)}function nv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function iv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rv(n,e){return n+Math.random()*(e-n)}function ov(n){return n*(.5-Math.random())}function av(n){n!==void 0&&(ju=n);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lv(n){return n*Vs}function cv(n){return n*Ys}function uv(n){return(n&n-1)===0&&n!==0}function dv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function hv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function fv(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hp={DEG2RAD:Vs,RAD2DEG:Ys,generateUUID:An,clamp:Nt,euclideanModulo:pc,mapLinear:J_,inverseLerp:Q_,lerp:Lr,damp:ev,pingpong:tv,smoothstep:nv,smootherstep:iv,randInt:sv,randFloat:rv,randFloatSpread:ov,seededRandom:av,degToRad:lv,radToDeg:cv,isPowerOfTwo:uv,ceilPowerOfTwo:dv,floorPowerOfTwo:hv,setQuaternionFromProperEuler:fv,normalize:dt,denormalize:Sn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,s,r,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],_=i[8],v=s[0],p=s[3],m=s[6],A=s[1],y=s[4],M=s[7],I=s[2],R=s[5],T=s[8];return r[0]=o*v+a*A+l*I,r[3]=o*p+a*y+l*R,r[6]=o*m+a*M+l*T,r[1]=c*v+u*A+d*I,r[4]=c*p+u*y+d*R,r[7]=c*m+u*M+d*T,r[2]=h*v+f*A+_*I,r[5]=h*p+f*y+_*R,r[8]=h*m+f*M+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,_=t*d+i*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Qe;function fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pv(){const n=Hr("canvas");return n.style.display="block",n}const $u={};function pp(n){n in $u||($u[n]=!0,console.warn(n))}const Xu=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qu=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[Ot]:{transfer:Jo,primaries:Qo,toReference:n=>n,fromReference:n=>n},[Kt]:{transfer:xt,primaries:Qo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xa]:{transfer:Jo,primaries:ea,toReference:n=>n.applyMatrix3(qu),fromReference:n=>n.applyMatrix3(Xu)},[fc]:{transfer:xt,primaries:ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qu),fromReference:n=>n.applyMatrix3(Xu).convertLinearToSRGB()}},mv=new Set([Ot,xa]),ut={enabled:!0,_workingColorSpace:Ot,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=no[e].toReference,s=no[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return no[n].primaries},getTransfer:function(n){return n===Pi?Jo:no[n].transfer}};function Hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class gv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=Hr("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hs(t[i]/255)*255):t[i]=Hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _v=0;class mp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wa(s[o].image)):r.push(Wa(s[o]))}else r=Wa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Wa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vv=0;class It extends as{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Li,s=Li,r=ln,o=ai,a=En,l=Oi,c=It.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=An(),this.name="",this.source=new mp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xs:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xs:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Jf;It.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(f+1)/2,I=(m+1)/2,R=(u+h)/4,T=(d+v)/4,V=(_+p)/4;return y>M&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=R/i,r=T/i):M>I?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=V/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=T/r,s=V/r),this.set(i,s,r,t),this}let A=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(d-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xv extends as{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const r=new It(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends xv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gp extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yv extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],f=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==_){let p=1-a;const m=l*h+c*f+u*_+d*v,A=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const I=Math.sqrt(y),R=Math.atan2(I,m*A);p=Math.sin(p*R)/I,a=Math.sin(a*R)/I}const M=a*A;if(l=l*p+h*M,c=c*p+f*M,u=u*p+_*M,d=d*p+v*M,p===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=I,c*=I,u*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-a*f,e[t+2]=c*_+u*f+a*h-l*d,e[t+3]=u*_-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new j,Ku=new Gn;class jn{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),so.subVectors(this.max,dr),ps.subVectors(e.a,dr),ms.subVectors(e.b,dr),gs.subVectors(e.c,dr),xi.subVectors(ms,ps),yi.subVectors(gs,ms),zi.subVectors(ps,gs);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-zi.z,zi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,zi.z,0,-zi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-zi.y,zi.x,0];return!$a(t,ps,ms,gs,so)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,ps,ms,gs,so))?!1:(ro.crossVectors(xi,yi),t=[ro.x,ro.y,ro.z],$a(t,ps,ms,gs,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yn=[new j,new j,new j,new j,new j,new j,new j,new j],xn=new j,io=new jn,ps=new j,ms=new j,gs=new j,xi=new j,yi=new j,zi=new j,dr=new j,so=new j,ro=new j,Gi=new j;function $a(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Gi.fromArray(n,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),u=i.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mv=new jn,hr=new j,Xa=new j;class $n{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Mv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Xa)),this.expandByPoint(hr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new j,qa=new j,oo=new j,Mi=new j,Ka=new j,ao=new j,Ya=new j;class Kr{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){qa.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oo),a=Mi.dot(this.direction),l=-Mi.dot(oo),c=Mi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*l-a,h=o*a-l,_=r*u,d>=0)if(h>=-_)if(h<=_){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qa).addScaledVector(oo,h),f}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){Ka.subVectors(t,e),ao.subVectors(i,e),Ya.crossVectors(Ka,ao);let o=this.direction.dot(Ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(ao.crossVectors(Mi,ao));if(l<0)return null;const c=a*this.direction.dot(Ka.cross(Mi));if(c<0||l+c>o)return null;const u=-a*Mi.dot(Ya);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,s,r,o,a,l,c,u,d,h,f,_,v,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,f,_,v,p)}set(e,t,i,s,r,o,a,l,c,u,d,h,f,_,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,v=c*d;t[0]=h+v*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,_=a*u,v=a*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=_*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,f=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sv,e,bv)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Si.crossVectors(i,rn),Si.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Si.crossVectors(i,rn)),Si.normalize(),lo.crossVectors(rn,Si),s[0]=Si.x,s[4]=lo.x,s[8]=rn.x,s[1]=Si.y,s[5]=lo.y,s[9]=rn.y,s[2]=Si.z,s[6]=lo.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],_=i[2],v=i[6],p=i[10],m=i[14],A=i[3],y=i[7],M=i[11],I=i[15],R=s[0],T=s[4],V=s[8],E=s[12],S=s[1],D=s[5],B=s[9],C=s[13],X=s[2],Q=s[6],ie=s[10],K=s[14],N=s[3],q=s[7],J=s[11],me=s[15];return r[0]=o*R+a*S+l*X+c*N,r[4]=o*T+a*D+l*Q+c*q,r[8]=o*V+a*B+l*ie+c*J,r[12]=o*E+a*C+l*K+c*me,r[1]=u*R+d*S+h*X+f*N,r[5]=u*T+d*D+h*Q+f*q,r[9]=u*V+d*B+h*ie+f*J,r[13]=u*E+d*C+h*K+f*me,r[2]=_*R+v*S+p*X+m*N,r[6]=_*T+v*D+p*Q+m*q,r[10]=_*V+v*B+p*ie+m*J,r[14]=_*E+v*C+p*K+m*me,r[3]=A*R+y*S+M*X+I*N,r[7]=A*T+y*D+M*Q+I*q,r[11]=A*V+y*B+M*ie+I*J,r[15]=A*E+y*C+M*K+I*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],v=e[7],p=e[11],m=e[15];return _*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*f-i*l*f)+v*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*u-r*l*u)+p*(+t*c*d-t*a*f-r*o*d+i*o*f+r*a*u-i*c*u)+m*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],v=e[13],p=e[14],m=e[15],A=d*p*c-v*h*c+v*l*f-a*p*f-d*l*m+a*h*m,y=_*h*c-u*p*c-_*l*f+o*p*f+u*l*m-o*h*m,M=u*v*c-_*d*c+_*a*f-o*v*f-u*a*m+o*d*m,I=_*d*l-u*v*l-_*a*h+o*v*h+u*a*p-o*d*p,R=t*A+i*y+s*M+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=A*T,e[1]=(v*h*r-d*p*r-v*s*f+i*p*f+d*s*m-i*h*m)*T,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*m+i*l*m)*T,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*f-i*l*f)*T,e[4]=y*T,e[5]=(u*p*r-_*h*r+_*s*f-t*p*f-u*s*m+t*h*m)*T,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*m-t*l*m)*T,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*f+t*l*f)*T,e[8]=M*T,e[9]=(_*d*r-u*v*r-_*i*f+t*v*f+u*i*m-t*d*m)*T,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*m+t*a*m)*T,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*f-t*a*f)*T,e[12]=I*T,e[13]=(u*v*s-_*d*s+_*i*h-t*v*h-u*i*p+t*d*p)*T,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*p-t*a*p)*T,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,_=r*d,v=o*u,p=o*d,m=a*d,A=l*c,y=l*u,M=l*d,I=i.x,R=i.y,T=i.z;return s[0]=(1-(v+m))*I,s[1]=(f+M)*I,s[2]=(_-y)*I,s[3]=0,s[4]=(f-M)*R,s[5]=(1-(h+m))*R,s[6]=(p+A)*R,s[7]=0,s[8]=(_+y)*T,s[9]=(p-A)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const c=1/r,u=1/o,d=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=li){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let f,_;if(a===li)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ta)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=li){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,f=(i+s)*u;let _,v;if(a===li)_=(o+r)*d,v=-2*d;else if(a===ta)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _s=new j,yn=new et,Sv=new j(0,0,0),bv=new j(1,1,1),Si=new j,lo=new j,rn=new j,Yu=new et,Zu=new Gn;class Wn{constructor(e=0,t=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ev=0;const Ju=new j,vs=new Gn,Jn=new et,co=new j,fr=new j,Tv=new j,Av=new Gn,Qu=new j(1,0,0),ed=new j(0,1,0),td=new j(0,0,1),nd={type:"added"},wv={type:"removed"},xs={type:"childadded",child:null},Za={type:"childremoved",child:null};class St extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ev++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new j,t=new Wn,i=new Gn,s=new j(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Qe}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(ed,e)}rotateZ(e){return this.rotateOnAxis(td,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(ed,e)}translateZ(e){return this.translateOnAxis(td,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?co.copy(e):co.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(fr,co,this.up):Jn.lookAt(co,fr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(Jn),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nd),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wv),Za.child=e,this.dispatchEvent(Za),Za.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nd),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Av,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}St.DEFAULT_UP=new j(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new j,Qn=new j,Ja=new j,ei=new j,ys=new j,Ms=new j,id=new j,Qa=new j,el=new j,tl=new j;class bn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mn.subVectors(s,t),Qn.subVectors(i,t),Ja.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Qn),l=Mn.dot(Ja),c=Qn.dot(Qn),u=Qn.dot(Ja),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,t,i,s){return Mn.subVectors(i,t),Qn.subVectors(e,t),Mn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Mn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ms.subVectors(r,i),Qa.subVectors(e,i);const l=ys.dot(Qa),c=Ms.dot(Qa);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,s);const u=ys.dot(el),d=Ms.dot(el);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ys,o);tl.subVectors(e,r);const f=ys.dot(tl),_=Ms.dot(tl);if(_>=0&&f<=_)return t.copy(r);const v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ms,a);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return id.subVectors(r,s),a=(d-u)/(d-u+(f-_)),t.copy(s).addScaledVector(id,a);const m=1/(p+v+h);return o=v*m,a=h*m,t.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=pc(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nl(o,r,e+1/3),this.g=nl(o,r,e),this.b=nl(o,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=vp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ut.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Nt(Vt.r*255,0,255))*65536+Math.round(Nt(Vt.g*255,0,255))*256+Math.round(Nt(Vt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Vt.copy(this),t);const i=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Kt){ut.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,i=Vt.g,s=Vt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(uo);const i=Lr(bi.h,uo.h,t),s=Lr(bi.s,uo.s,t),r=Lr(bi.l,uo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ze;ze.NAMES=vp;let Rv=0;class Vn extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Bs,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=kl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bl&&(i.blendSrc=this.blendSrc),this.blendDst!==kl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ko&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qi extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new j,ho=new Oe;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}}class xp extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yp extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cv=0;const mn=new et,il=new St,Ss=new j,on=new jn,pr=new jn,Lt=new j;class vn extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?yp:xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(on.min,pr.min),on.expandByPoint(Lt),Lt.addVectors(on.max,pr.max),on.expandByPoint(Lt)):(on.expandByPoint(pr.min),on.expandByPoint(pr.max))}on.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Lt.add(Ss)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new j,l[V]=new j;const c=new j,u=new j,d=new j,h=new Oe,f=new Oe,_=new Oe,v=new j,p=new j;function m(V,E,S){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),h.fromBufferAttribute(r,V),f.fromBufferAttribute(r,E),_.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(D),a[V].add(v),a[E].add(v),a[S].add(v),l[V].add(p),l[E].add(p),l[S].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let V=0,E=A.length;V<E;++V){const S=A[V],D=S.start,B=S.count;for(let C=D,X=D+B;C<X;C+=3)m(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const y=new j,M=new j,I=new j,R=new j;function T(V){I.fromBufferAttribute(s,V),R.copy(I);const E=a[V];y.copy(E),y.sub(I.multiplyScalar(I.dot(E))).normalize(),M.crossVectors(R,E);const D=M.dot(l[V])<0?-1:1;o.setXYZW(V,y.x,y.y,y.z,D)}for(let V=0,E=A.length;V<E;++V){const S=A[V],D=S.start,B=S.count;for(let C=D,X=D+B;C<X;C+=3)T(e.getX(C+0)),T(e.getX(C+1)),T(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new Qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sd=new et,Wi=new Kr,fo=new $n,rd=new j,bs=new j,Es=new j,Ts=new j,sl=new j,po=new j,mo=new Oe,go=new Oe,_o=new Oe,od=new j,ad=new j,ld=new j,vo=new j,xo=new j;class dn extends St{constructor(e=new vn,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(sl.fromBufferAttribute(d,e),o?po.addScaledVector(sl,u):po.addScaledVector(sl.sub(t),u))}t.add(po)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(fo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(fo,rd)===null||Wi.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(sd.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(sd),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const p=h[_],m=o[p.materialIndex],A=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=A,I=y;M<I;M+=3){const R=a.getX(M),T=a.getX(M+1),V=a.getX(M+2);s=yo(this,m,e,i,c,u,d,R,T,V),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const A=a.getX(p),y=a.getX(p+1),M=a.getX(p+2);s=yo(this,o,e,i,c,u,d,A,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const p=h[_],m=o[p.materialIndex],A=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=A,I=y;M<I;M+=3){const R=M,T=M+1,V=M+2;s=yo(this,m,e,i,c,u,d,R,T,V),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=_,m=v;p<m;p+=3){const A=p,y=p+1,M=p+2;s=yo(this,o,e,i,c,u,d,A,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Pv(n,e,t,i,s,r,o,a){let l;if(e.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Cn,a),l===null)return null;xo.copy(a),xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xo);return c<t.near||c>t.far?null:{distance:c,point:xo.clone(),object:n}}function yo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,bs),n.getVertexPosition(l,Es),n.getVertexPosition(c,Ts);const u=Pv(n,e,t,i,bs,Es,Ts,vo);if(u){s&&(mo.fromBufferAttribute(s,a),go.fromBufferAttribute(s,l),_o.fromBufferAttribute(s,c),u.uv=bn.getInterpolation(vo,bs,Es,Ts,mo,go,_o,new Oe)),r&&(mo.fromBufferAttribute(r,a),go.fromBufferAttribute(r,l),_o.fromBufferAttribute(r,c),u.uv1=bn.getInterpolation(vo,bs,Es,Ts,mo,go,_o,new Oe)),o&&(od.fromBufferAttribute(o,a),ad.fromBufferAttribute(o,l),ld.fromBufferAttribute(o,c),u.normal=bn.getInterpolation(vo,bs,Es,Ts,od,ad,ld,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};bn.getNormal(bs,Es,Ts,d.normal),u.face=d}return u}class Yr extends vn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function _(v,p,m,A,y,M,I,R,T,V,E){const S=M/T,D=I/V,B=M/2,C=I/2,X=R/2,Q=T+1,ie=V+1;let K=0,N=0;const q=new j;for(let J=0;J<ie;J++){const me=J*D-C;for(let Se=0;Se<Q;Se++){const Ie=Se*S-B;q[v]=Ie*A,q[p]=me*y,q[m]=X,c.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[m]=R>0?1:-1,u.push(q.x,q.y,q.z),d.push(Se/T),d.push(1-J/V),K+=1}}for(let J=0;J<V;J++)for(let me=0;me<T;me++){const Se=h+me+Q*J,Ie=h+me+Q*(J+1),ae=h+(me+1)+Q*(J+1),_e=h+(me+1)+Q*J;l.push(Se,Ie,_e),l.push(Ie,ae,_e),N+=6}a.addGroup(f,N,E),f+=N,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Zs(n[t]);for(const s in i)e[s]=i[s]}return e}function Lv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Iv={clone:Zs,merge:qt};var Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=Lv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sp extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new j,cd=new Oe,ud=new Oe;class Zt extends Sp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ud),t.subVectors(ud,cd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,ws=1;class Uv extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(As,ws,e,t);s.layers=this.layers,this.add(s);const r=new Zt(As,ws,e,t);r.layers=this.layers,this.add(r);const o=new Zt(As,ws,e,t);o.layers=this.layers,this.add(o);const a=new Zt(As,ws,e,t);a.layers=this.layers,this.add(a);const l=new Zt(As,ws,e,t);l.layers=this.layers,this.add(l);const c=new Zt(As,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class bp extends It{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ov extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yr(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ni});r.uniforms.tEquirect.value=t;const o=new dn(s,r),a=t.minFilter;return t.minFilter===ai&&(t.minFilter=ln),new Uv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const rl=new j,Fv=new j,Bv=new Qe;class wi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rl.subVectors(i,t).cross(Fv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bv.getNormalMatrix(e),s=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new $n,Mo=new j;class mc{constructor(e=new wi,t=new wi,i=new wi,s=new wi,r=new wi,o=new wi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],_=s[9],v=s[10],p=s[11],m=s[12],A=s[13],y=s[14],M=s[15];if(i[0].setComponents(l-r,h-c,p-f,M-m).normalize(),i[1].setComponents(l+r,h+c,p+f,M+m).normalize(),i[2].setComponents(l+o,h+u,p+_,M+A).normalize(),i[3].setComponents(l-o,h-u,p-_,M-A).normalize(),i[4].setComponents(l-a,h-d,p-v,M-y).normalize(),t===li)i[5].setComponents(l+a,h+d,p+v,M+y).normalize();else if(t===ta)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ep(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let f=0,_=h.length;f<_;f++){const v=h[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ya extends vn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,f=[],_=[],v=[],p=[];for(let m=0;m<u;m++){const A=m*h-o;for(let y=0;y<c;y++){const M=y*d-r;_.push(M,-A,0),v.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let A=0;A<a;A++){const y=A+c*m,M=A+c*(m+1),I=A+1+c*(m+1),R=A+1+c*m;f.push(y,M,R),f.push(M,I,R)}this.setIndex(f),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(v,3)),this.setAttribute("uv",new _n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$v=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Yv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,c0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,R0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$x=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ry=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ly=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Vv,alphahash_pars_fragment:Hv,alphamap_fragment:zv,alphamap_pars_fragment:Gv,alphatest_fragment:Wv,alphatest_pars_fragment:jv,aomap_fragment:$v,aomap_pars_fragment:Xv,batching_pars_vertex:qv,batching_vertex:Kv,begin_vertex:Yv,beginnormal_vertex:Zv,bsdfs:Jv,iridescence_fragment:Qv,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:s0,color_fragment:r0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:d0,displacementmap_pars_vertex:h0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:y0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:D0,envmap_vertex:S0,fog_vertex:b0,fog_pars_vertex:E0,fog_fragment:T0,fog_pars_fragment:A0,gradientmap_pars_fragment:w0,lightmap_fragment:R0,lightmap_pars_fragment:C0,lights_lambert_fragment:P0,lights_lambert_pars_fragment:L0,lights_pars_begin:I0,lights_toon_fragment:N0,lights_toon_pars_fragment:U0,lights_phong_fragment:O0,lights_phong_pars_fragment:F0,lights_physical_fragment:B0,lights_physical_pars_fragment:k0,lights_fragment_begin:V0,lights_fragment_maps:H0,lights_fragment_end:z0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:$0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:K0,map_particle_pars_fragment:Y0,metalnessmap_fragment:Z0,metalnessmap_pars_fragment:J0,morphinstance_vertex:Q0,morphcolor_vertex:ex,morphnormal_vertex:tx,morphtarget_pars_vertex:nx,morphtarget_vertex:ix,normal_fragment_begin:sx,normal_fragment_maps:rx,normal_pars_fragment:ox,normal_pars_vertex:ax,normal_vertex:lx,normalmap_pars_fragment:cx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:hx,iridescence_pars_fragment:fx,opaque_fragment:px,packing:mx,premultiplied_alpha_fragment:gx,project_vertex:_x,dithering_fragment:vx,dithering_pars_fragment:xx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Mx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:bx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:Ax,skinning_pars_vertex:wx,skinning_vertex:Rx,skinnormal_vertex:Cx,specularmap_fragment:Px,specularmap_pars_fragment:Lx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Dx,transmission_fragment:Nx,transmission_pars_fragment:Ux,uv_pars_fragment:Ox,uv_pars_vertex:Fx,uv_vertex:Bx,worldpos_vertex:kx,background_vert:Vx,background_frag:Hx,backgroundCube_vert:zx,backgroundCube_frag:Gx,cube_vert:Wx,cube_frag:jx,depth_vert:$x,depth_frag:Xx,distanceRGBA_vert:qx,distanceRGBA_frag:Kx,equirect_vert:Yx,equirect_frag:Zx,linedashed_vert:Jx,linedashed_frag:Qx,meshbasic_vert:ey,meshbasic_frag:ty,meshlambert_vert:ny,meshlambert_frag:iy,meshmatcap_vert:sy,meshmatcap_frag:ry,meshnormal_vert:oy,meshnormal_frag:ay,meshphong_vert:ly,meshphong_frag:cy,meshphysical_vert:uy,meshphysical_frag:dy,meshtoon_vert:hy,meshtoon_frag:fy,points_vert:py,points_frag:my,shadow_vert:gy,shadow_frag:_y,sprite_vert:vy,sprite_frag:xy},Ae={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Un={basic:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:qt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:qt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:qt([Ae.points,Ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:qt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:qt([Ae.common,Ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:qt([Ae.sprite,Ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:qt([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:qt([Ae.lights,Ae.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Un.physical={uniforms:qt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const So={r:0,b:0,g:0},$i=new Wn,yy=new et;function My(n,e,t,i,s,r,o){const a=new ze(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function _(p,m){let A=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?v(a,l):y&&y.isColor&&(v(y,1),A=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===va)?(u===void 0&&(u=new dn(new Yr(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Zs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),$i.copy(m.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler($i)),u.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,(d!==y||h!==y.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new dn(new ya(2,2),new pi({name:"BackgroundMaterial",uniforms:Zs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,m){p.getRGB(So,Mp(n)),i.buffers.color.setClear(So.r,So.g,So.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function Sy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,D,B,C,X){let Q=!1;const ie=d(C,B,D);r!==ie&&(r=ie,c(r.object)),Q=f(S,C,B,X),Q&&_(S,C,B,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(S,D,B,C),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function d(S,D,B){const C=B.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let Q=X[D.id];Q===void 0&&(Q={},X[D.id]=Q);let ie=Q[C];return ie===void 0&&(ie=h(l()),Q[C]=ie),ie}function h(S){const D=[],B=[],C=[];for(let X=0;X<t;X++)D[X]=0,B[X]=0,C[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:C,object:S,attributes:{},index:null}}function f(S,D,B,C){const X=r.attributes,Q=D.attributes;let ie=0;const K=B.getAttributes();for(const N in K)if(K[N].location>=0){const J=X[N];let me=Q[N];if(me===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(me=S.instanceColor)),J===void 0||J.attribute!==me||me&&J.data!==me.data)return!0;ie++}return r.attributesNum!==ie||r.index!==C}function _(S,D,B,C){const X={},Q=D.attributes;let ie=0;const K=B.getAttributes();for(const N in K)if(K[N].location>=0){let J=Q[N];J===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const me={};me.attribute=J,J&&J.data&&(me.data=J.data),X[N]=me,ie++}r.attributes=X,r.attributesNum=ie,r.index=C}function v(){const S=r.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function p(S){m(S,0)}function m(S,D){const B=r.newAttributes,C=r.enabledAttributes,X=r.attributeDivisors;B[S]=1,C[S]===0&&(n.enableVertexAttribArray(S),C[S]=1),X[S]!==D&&(n.vertexAttribDivisor(S,D),X[S]=D)}function A(){const S=r.newAttributes,D=r.enabledAttributes;for(let B=0,C=D.length;B<C;B++)D[B]!==S[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function y(S,D,B,C,X,Q,ie){ie===!0?n.vertexAttribIPointer(S,D,B,X,Q):n.vertexAttribPointer(S,D,B,C,X,Q)}function M(S,D,B,C){v();const X=C.attributes,Q=B.getAttributes(),ie=D.defaultAttributeValues;for(const K in Q){const N=Q[K];if(N.location>=0){let q=X[K];if(q===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const J=q.normalized,me=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Ie=Se.buffer,ae=Se.type,_e=Se.bytesPerElement,Ee=ae===n.INT||ae===n.UNSIGNED_INT||q.gpuType===tp;if(q.isInterleavedBufferAttribute){const be=q.data,Fe=be.stride,He=q.offset;if(be.isInstancedInterleavedBuffer){for(let je=0;je<N.locationSize;je++)m(N.location+je,be.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let je=0;je<N.locationSize;je++)p(N.location+je);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let je=0;je<N.locationSize;je++)y(N.location+je,me/N.locationSize,ae,J,Fe*_e,(He+me/N.locationSize*je)*_e,Ee)}else{if(q.isInstancedBufferAttribute){for(let be=0;be<N.locationSize;be++)m(N.location+be,q.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let be=0;be<N.locationSize;be++)p(N.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let be=0;be<N.locationSize;be++)y(N.location+be,me/N.locationSize,ae,J,me*_e,me/N.locationSize*be*_e,Ee)}}else if(ie!==void 0){const J=ie[K];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(N.location,J);break;case 3:n.vertexAttrib3fv(N.location,J);break;case 4:n.vertexAttrib4fv(N.location,J);break;default:n.vertexAttrib1fv(N.location,J)}}}}A()}function I(){V();for(const S in i){const D=i[S];for(const B in D){const C=D[B];for(const X in C)u(C[X].object),delete C[X];delete D[B]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const C=D[B];for(const X in C)u(C[X].object),delete C[X];delete D[B]}delete i[S.id]}function T(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const C=B[S.id];for(const X in C)u(C[X].object),delete C[X];delete B[S.id]}}function V(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:A}}function by(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function a(l,c,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{d.multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ey(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),p=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:h,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:p,vertexTextures:m,maxSamples:A}}function Ty(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new wi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const A=r?0:i,y=A*4;let M=m.clippingState||null;l.value=M,M=u(_,h,y,f);for(let I=0;I!==y;++I)M[I]=t[I];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=f+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=f;y!==v;++y,M+=4)o.copy(d[y]).applyMatrix4(A,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Ay(n){let e=new WeakMap;function t(o,a){return a===Vl?o.mapping=js:a===Hl&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vl||a===Hl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ov(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class gc extends Sp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,dd=[.125,.215,.35,.446,.526,.582],Ji=20,ol=new gc,hd=new ze;let al=null,ll=0,cl=0,ul=!1;const Yi=(1+Math.sqrt(5))/2,Rs=1/Yi,fd=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Yi,Rs),new j(0,Yi,-Rs),new j(Rs,0,Yi),new j(-Rs,0,Yi),new j(Yi,Rs,0),new j(-Yi,Rs,0)];class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ll,cl),this._renderer.xr.enabled=ul,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Zo,format:En,colorSpace:Ot,depthBuffer:!1},s=md(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wy(r)),this._blurMaterial=Ry(r,e,t)}return s}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s){const a=new Zt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(hd),u.toneMapping=Ui,u.autoClear=!1;const f=new Qi({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),_=new dn(new Yr,f);let v=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,v=!0):(f.color.copy(hd),v=!0);for(let m=0;m<6;m++){const A=m%3;A===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):A===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;bo(s,A*y,m>2?y:0,y,y),u.setRenderTarget(s),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===js||e.mapping===$s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ol)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fd[(s-1)%fd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new dn(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):Ji;p>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const m=[];let A=0;for(let T=0;T<Ji;++T){const V=T/v,E=Math.exp(-V*V/2);m.push(E),T===0?A+=E:T<p&&(A+=2*E)}for(let T=0;T<m.length;T++)m[T]=m[T]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const M=this._sizeLods[s],I=3*M*(s>y-Is?s-y+Is:0),R=4*(this._cubeSize-M);bo(t,I,R,3*M,2*M),l.setRenderTarget(t),l.render(d,ol)}}function wy(n){const e=[],t=[],i=[];let s=n;const r=n-Is+1+dd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Is?l=dd[o-n+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,v=3,p=2,m=1,A=new Float32Array(v*_*f),y=new Float32Array(p*_*f),M=new Float32Array(m*_*f);for(let R=0;R<f;R++){const T=R%3*2/3-1,V=R>2?0:-1,E=[T,V,0,T+2/3,V,0,T+2/3,V+1,0,T,V,0,T+2/3,V+1,0,T,V+1,0];A.set(E,v*_*R),y.set(h,p*_*R);const S=[R,R,R,R,R,R];M.set(S,m*_*R)}const I=new vn;I.setAttribute("position",new Qt(A,v)),I.setAttribute("uv",new Qt(y,p)),I.setAttribute("faceIndex",new Qt(M,m)),e.push(I),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function md(n,e,t){const i=new rs(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ry(n,e,t){const i=new Float32Array(Ji),s=new j(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function gd(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function _d(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cy(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vl||l===Hl,u=l===js||l===$s;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new pd(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new pd(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Py(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ly(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const A=f.array;v=f.version;for(let y=0,M=A.length;y<M;y+=3){const I=A[y+0],R=A[y+1],T=A[y+2];h.push(I,R,R,T,T,I)}}else if(_!==void 0){const A=_.array;v=_.version;for(let y=0,M=A.length/3-1;y<M;y+=3){const I=y+0,R=y+1,T=y+2;h.push(I,R,R,T,T,I)}}else return;const p=new(fp(h)?yp:xp)(h,1);p.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Iy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*o),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*o,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<f;v++)this.render(d[v]/o,h[v]);else{_.multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let p=0;p<f;p++)v+=h[p];t.update(v,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Dy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ny(n,e,t){const i=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),_===!0&&(y=2),v===!0&&(y=3);let M=a.attributes.position.count*y,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const R=new Float32Array(M*I*4*d),T=new gp(R,M,I,d);T.type=Bn,T.needsUpdate=!0;const V=y*4;for(let S=0;S<d;S++){const D=p[S],B=m[S],C=A[S],X=M*I*4*S;for(let Q=0;Q<D.count;Q++){const ie=Q*V;f===!0&&(s.fromBufferAttribute(D,Q),R[X+ie+0]=s.x,R[X+ie+1]=s.y,R[X+ie+2]=s.z,R[X+ie+3]=0),_===!0&&(s.fromBufferAttribute(B,Q),R[X+ie+4]=s.x,R[X+ie+5]=s.y,R[X+ie+6]=s.z,R[X+ie+7]=0),v===!0&&(s.fromBufferAttribute(C,Q),R[X+ie+8]=s.x,R[X+ie+9]=s.y,R[X+ie+10]=s.z,R[X+ie+11]=C.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new Oe(M,I)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function Uy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Tp extends It{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:ks,u!==ks&&u!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ks&&(i=qs),i===void 0&&u===kr&&(i=qr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ap=new It,wp=new Tp(1,1);wp.compareFunction=dp;const Rp=new gp,Cp=new yv,Pp=new bp,vd=[],xd=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function By(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function Vy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Sd.set(i),n.uniformMatrix2fv(this.addr,!1,Sd),Ct(t,i)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Md.set(i),n.uniformMatrix3fv(this.addr,!1,Md),Ct(t,i)}}function zy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;yd.set(i),n.uniformMatrix4fv(this.addr,!1,yd),Ct(t,i)}}function Gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function $y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function Xy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function Ky(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function Zy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?wp:Ap;t.setTexture2D(e||r,s)}function Jy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Cp,s)}function Qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Pp,s)}function eM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Rp,s)}function tM(n){switch(n){case 5126:return Oy;case 35664:return Fy;case 35665:return By;case 35666:return ky;case 35674:return Vy;case 35675:return Hy;case 35676:return zy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return jy;case 35669:case 35673:return $y;case 5125:return Xy;case 36294:return qy;case 36295:return Ky;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return eM}}function nM(n,e){n.uniform1fv(this.addr,e)}function iM(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function sM(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function rM(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function oM(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aM(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lM(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cM(n,e){n.uniform1iv(this.addr,e)}function uM(n,e){n.uniform2iv(this.addr,e)}function dM(n,e){n.uniform3iv(this.addr,e)}function hM(n,e){n.uniform4iv(this.addr,e)}function fM(n,e){n.uniform1uiv(this.addr,e)}function pM(n,e){n.uniform2uiv(this.addr,e)}function mM(n,e){n.uniform3uiv(this.addr,e)}function gM(n,e){n.uniform4uiv(this.addr,e)}function _M(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ap,r[o])}function vM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cp,r[o])}function xM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pp,r[o])}function yM(n,e,t){const i=this.cache,s=e.length,r=Ma(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rp,r[o])}function MM(n){switch(n){case 5126:return nM;case 35664:return iM;case 35665:return sM;case 35666:return rM;case 35674:return oM;case 35675:return aM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return dM;case 35669:case 35673:return hM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}class SM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tM(t.type)}}class bM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MM(t.type)}}class EM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function bd(n,e){n.seq.push(e),n.map[e.id]=e}function TM(n,e,t){const i=n.name,s=i.length;for(dl.lastIndex=0;;){const r=dl.exec(i),o=dl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){bd(t,c===void 0?new SM(a,n,e):new bM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new EM(a),bd(t,d)),t=d}}}class Vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);TM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Ed(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AM=37297;let wM=0;function RM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function CM(n){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n);let i;switch(e===t?i="":e===ea&&t===Qo?i="LinearDisplayP3ToLinearSRGB":e===Qo&&t===ea&&(i="LinearSRGBToLinearDisplayP3"),n){case Ot:case xa:return[i,"LinearTransferOETF"];case Kt:case fc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Td(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+RM(n.getShaderSource(e),o)}else return s}function PM(n,e){const t=CM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function LM(n,e){let t;switch(e){case b_:t="Linear";break;case E_:t="Reinhard";break;case T_:t="OptimizedCineon";break;case A_:t="ACESFilmic";break;case R_:t="AgX";break;case C_:t="Neutral";break;case w_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function IM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function DM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function NM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function Ad(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(n){return n.replace(UM,FM)}const OM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function FM(n,e){let t=Je[e];if(t===void 0){const i=OM.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}const BM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(n){return n.replace(BM,kM)}function kM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function HM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case $s:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function GM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zf:e="ENVMAP_BLENDING_MULTIPLY";break;case M_:e="ENVMAP_BLENDING_MIX";break;case S_:e="ENVMAP_BLENDING_ADD";break}return e}function WM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=VM(t),c=HM(t),u=zM(t),d=GM(t),h=WM(t),f=IM(t),_=DM(r),v=s.createProgram();let p,m,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(p=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ui?LM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,PM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=Wl(o),o=Ad(o,t),o=wd(o,t),a=Wl(a),a=Ad(a,t),a=wd(a,t),o=Rd(o),a=Rd(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=A+p+o,M=A+m+a,I=Ed(s,s.VERTEX_SHADER,y),R=Ed(s,s.FRAGMENT_SHADER,M);s.attachShader(v,I),s.attachShader(v,R),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(D){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(v).trim(),C=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(R).trim();let Q=!0,ie=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,R);else{const K=Td(s,I,"vertex"),N=Td(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+K+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(C===""||X==="")&&(ie=!1);ie&&(D.diagnostics={runnable:Q,programLog:B,vertexShader:{log:C,prefix:p},fragmentShader:{log:X,prefix:m}})}s.deleteShader(I),s.deleteShader(R),V=new Vo(s,v),E=NM(s,v)}let V;this.getUniforms=function(){return V===void 0&&T(this),V};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,AM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}let $M=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qM(e),t.set(e,i)),i}}class qM{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}}function KM(n,e,t,i,s,r,o){const a=new _p,l=new XM,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,D,B,C){const X=B.fog,Q=C.geometry,ie=E.isMeshStandardMaterial?B.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||ie),N=K&&K.mapping===va?K.image.height:null,q=_[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const J=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,me=J!==void 0?J.length:0;let Se=0;Q.morphAttributes.position!==void 0&&(Se=1),Q.morphAttributes.normal!==void 0&&(Se=2),Q.morphAttributes.color!==void 0&&(Se=3);let Ie,ae,_e,Ee;if(q){const ot=Un[q];Ie=ot.vertexShader,ae=ot.fragmentShader}else Ie=E.vertexShader,ae=E.fragmentShader,l.update(E),_e=l.getVertexShaderID(E),Ee=l.getFragmentShaderID(E);const be=n.getRenderTarget(),Fe=C.isInstancedMesh===!0,He=C.isBatchedMesh===!0,je=!!E.map,ee=!!E.matcap,L=!!K,O=!!E.aoMap,te=!!E.lightMap,se=!!E.bumpMap,de=!!E.normalMap,b=!!E.displacementMap,x=!!E.emissiveMap,F=!!E.metalnessMap,W=!!E.roughnessMap,z=E.anisotropy>0,ne=E.clearcoat>0,he=E.iridescence>0,re=E.sheen>0,ge=E.transmission>0,ye=z&&!!E.anisotropyMap,fe=ne&&!!E.clearcoatMap,ve=ne&&!!E.clearcoatNormalMap,Pe=ne&&!!E.clearcoatRoughnessMap,Te=he&&!!E.iridescenceMap,we=he&&!!E.iridescenceThicknessMap,Ue=re&&!!E.sheenColorMap,$e=re&&!!E.sheenRoughnessMap,tt=!!E.specularMap,Ne=!!E.specularColorMap,Ge=!!E.specularIntensityMap,H=ge&&!!E.transmissionMap,g=ge&&!!E.thicknessMap,P=!!E.gradientMap,$=!!E.alphaMap,ce=E.alphaTest>0,xe=!!E.alphaHash,Me=!!E.extensions;let Re=Ui;E.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Re=n.toneMapping);const nt={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Ie,fragmentShader:ae,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:He,instancing:Fe,instancingColor:Fe&&C.instanceColor!==null,instancingMorph:Fe&&C.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Ot,alphaToCoverage:!!E.alphaToCoverage,map:je,matcap:ee,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:N,aoMap:O,lightMap:te,bumpMap:se,normalMap:de,displacementMap:h&&b,emissiveMap:x,normalMapObjectSpace:de&&E.normalMapType===W_,normalMapTangentSpace:de&&E.normalMapType===up,metalnessMap:F,roughnessMap:W,anisotropy:z,anisotropyMap:ye,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Pe,iridescence:he,iridescenceMap:Te,iridescenceThicknessMap:we,sheen:re,sheenColorMap:Ue,sheenRoughnessMap:$e,specularMap:tt,specularColorMap:Ne,specularIntensityMap:Ge,transmission:ge,transmissionMap:H,thicknessMap:g,gradientMap:P,opaque:E.transparent===!1&&E.blending===Bs&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ce,alphaHash:xe,combine:E.combine,mapUv:je&&v(E.map.channel),aoMapUv:O&&v(E.aoMap.channel),lightMapUv:te&&v(E.lightMap.channel),bumpMapUv:se&&v(E.bumpMap.channel),normalMapUv:de&&v(E.normalMap.channel),displacementMapUv:b&&v(E.displacementMap.channel),emissiveMapUv:x&&v(E.emissiveMap.channel),metalnessMapUv:F&&v(E.metalnessMap.channel),roughnessMapUv:W&&v(E.roughnessMap.channel),anisotropyMapUv:ye&&v(E.anisotropyMap.channel),clearcoatMapUv:fe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&v(E.sheenRoughnessMap.channel),specularMapUv:tt&&v(E.specularMap.channel),specularColorMapUv:Ne&&v(E.specularColorMap.channel),specularIntensityMapUv:Ge&&v(E.specularIntensityMap.channel),transmissionMapUv:H&&v(E.transmissionMap.channel),thicknessMapUv:g&&v(E.thicknessMap.channel),alphaMapUv:$&&v(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(de||z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!Q.attributes.uv&&(je||$),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,useLegacyLights:n._useLegacyLights,decodeVideoTexture:je&&E.map.isVideoTexture===!0&&ut.getTransfer(E.map.colorSpace)===xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===an,flipSided:E.side===nn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Me&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Me&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function m(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(S,E),y(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const S=_[E.type];let D;if(S){const B=Un[S];D=Iv.clone(B.uniforms)}else D=E.uniforms;return D}function I(E,S){let D;for(let B=0,C=u.length;B<C;B++){const X=u[B];if(X.cacheKey===S){D=X,++D.usedTimes;break}}return D===void 0&&(D=new jM(n,S,E,r),u.push(D)),D}function R(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:V}}function YM(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function ZM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ld(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,f,_,v,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=v,m.group=p),e++,m}function a(d,h,f,_,v,p){const m=o(d,h,f,_,v,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(d,h,f,_,v,p){const m=o(d,h,f,_,v,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||ZM),i.length>1&&i.sort(h||Pd),s.length>1&&s.sort(h||Pd)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function JM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Ld,n.set(i,[o])):s>=r.length?(o=new Ld,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ze};break;case"SpotLight":t={position:new j,direction:new j,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function eS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tS=0;function nS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iS(n){const e=new QM,t=eS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const s=new j,r=new et,o=new et;function a(c,u){let d=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let _=0,v=0,p=0,m=0,A=0,y=0,M=0,I=0,R=0,T=0,V=0;c.sort(nS);const E=u===!0?Math.PI:1;for(let D=0,B=c.length;D<B;D++){const C=c[D],X=C.color,Q=C.intensity,ie=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=X.r*Q*E,h+=X.g*Q*E,f+=X.b*Q*E;else if(C.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(C.sh.coefficients[N],Q);V++}else if(C.isDirectionalLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const q=C.shadow,J=t.get(C);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.directionalShadow[_]=J,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=C.shadow.matrix,y++}i.directional[_]=N,_++}else if(C.isSpotLight){const N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(X).multiplyScalar(Q*E),N.distance=ie,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,i.spot[p]=N;const q=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,q.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[p]=q.matrix,C.castShadow){const J=t.get(C);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=K,I++}p++}else if(C.isRectAreaLight){const N=e.get(C);N.color.copy(X).multiplyScalar(Q),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=N,m++}else if(C.isPointLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity*E),N.distance=C.distance,N.decay=C.decay,C.castShadow){const q=C.shadow,J=t.get(C);J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=C.shadow.matrix,M++}i.point[v]=N,v++}else if(C.isHemisphereLight){const N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(Q*E),N.groundColor.copy(C.groundColor).multiplyScalar(Q*E),i.hemi[A]=N,A++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==_||S.pointLength!==v||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==A||S.numDirectionalShadows!==y||S.numPointShadows!==M||S.numSpotShadows!==I||S.numSpotMaps!==R||S.numLightProbes!==V)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=m,i.point.length=v,i.hemi.length=A,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=I+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=V,S.directionalLength=_,S.pointLength=v,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=A,S.numDirectionalShadows=y,S.numPointShadows=M,S.numSpotShadows=I,S.numSpotMaps=R,S.numLightProbes=V,i.version=tS++)}function l(c,u){let d=0,h=0,f=0,_=0,v=0;const p=u.matrixWorldInverse;for(let m=0,A=c.length;m<A;m++){const y=c[m];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(y.isSpotLight){const M=i.spot[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Id(n){const e=new iS(n),t=[],i=[];function s(){t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:s,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Id(n),e.set(s,[a])):r>=o.length?(a=new Id(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class rS extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oS extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cS(n,e,t){let i=new mc;const s=new Oe,r=new Oe,o=new mt,a=new rS({depthPacking:G_}),l=new oS,c={},u=t.maxTextureSize,d={[Cn]:nn,[nn]:Cn,[an]:an},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:aS,fragmentShader:lS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new dn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let m=this.type;this.render=function(R,T,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const C=m!==ni&&this.type===ni,X=m===ni&&this.type!==ni;for(let Q=0,ie=R.length;Q<ie;Q++){const K=R[Q],N=K.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const q=N.getFrameExtents();if(s.multiply(q),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,N.mapSize.y=r.y)),N.map===null||C===!0||X===!0){const me=this.type!==ni?{minFilter:Jt,magFilter:Jt}:{};N.map!==null&&N.map.dispose(),N.map=new rs(s.x,s.y,me),N.map.texture.name=K.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const J=N.getViewportCount();for(let me=0;me<J;me++){const Se=N.getViewport(me);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),B.viewport(o),N.updateMatrices(K,me),i=N.getFrustum(),M(T,V,N.camera,K,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&A(N,V),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(E,S,D)};function A(R,T){const V=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new rs(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(T,null,V,h,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(T,null,V,f,v,null)}function y(R,T,V,E){let S=null;const D=V.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)S=D;else if(S=V.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=S.uuid,C=T.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let Q=X[C];Q===void 0&&(Q=S.clone(),X[C]=Q,T.addEventListener("dispose",I)),S=Q}if(S.visible=T.visible,S.wireframe=T.wireframe,E===ni?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=V}return S}function M(R,T,V,E,S){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===ni)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,R.matrixWorld);const C=e.update(R),X=R.material;if(Array.isArray(X)){const Q=C.groups;for(let ie=0,K=Q.length;ie<K;ie++){const N=Q[ie],q=X[N.materialIndex];if(q&&q.visible){const J=y(R,q,E,S);R.onBeforeShadow(n,R,T,V,C,J,N),n.renderBufferDirect(V,null,C,J,R,N),R.onAfterShadow(n,R,T,V,C,J,N)}}}else if(X.visible){const Q=y(R,X,E,S);R.onBeforeShadow(n,R,T,V,C,Q,null),n.renderBufferDirect(V,null,C,Q,R,null),R.onAfterShadow(n,R,T,V,C,Q,null)}}const B=R.children;for(let C=0,X=B.length;C<X;C++)M(B[C],T,V,E,S)}function I(R){R.target.removeEventListener("dispose",I);for(const V in c){const E=c[V],S=R.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function uS(n){function e(){let g=!1;const P=new mt;let $=null;const ce=new mt(0,0,0,0);return{setMask:function(xe){$!==xe&&!g&&(n.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){g=xe},setClear:function(xe,Me,Re,nt,ot){ot===!0&&(xe*=nt,Me*=nt,Re*=nt),P.set(xe,Me,Re,nt),ce.equals(P)===!1&&(n.clearColor(xe,Me,Re,nt),ce.copy(P))},reset:function(){g=!1,$=null,ce.set(-1,0,0,0)}}}function t(){let g=!1,P=null,$=null,ce=null;return{setTest:function(xe){xe?Ee(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(xe){P!==xe&&!g&&(n.depthMask(xe),P=xe)},setFunc:function(xe){if($!==xe){switch(xe){case p_:n.depthFunc(n.NEVER);break;case m_:n.depthFunc(n.ALWAYS);break;case g_:n.depthFunc(n.LESS);break;case Ko:n.depthFunc(n.LEQUAL);break;case __:n.depthFunc(n.EQUAL);break;case v_:n.depthFunc(n.GEQUAL);break;case x_:n.depthFunc(n.GREATER);break;case y_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=xe}},setLocked:function(xe){g=xe},setClear:function(xe){ce!==xe&&(n.clearDepth(xe),ce=xe)},reset:function(){g=!1,P=null,$=null,ce=null}}}function i(){let g=!1,P=null,$=null,ce=null,xe=null,Me=null,Re=null,nt=null,ot=null;return{setTest:function(it){g||(it?Ee(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(it){P!==it&&!g&&(n.stencilMask(it),P=it)},setFunc:function(it,bt,vt){($!==it||ce!==bt||xe!==vt)&&(n.stencilFunc(it,bt,vt),$=it,ce=bt,xe=vt)},setOp:function(it,bt,vt){(Me!==it||Re!==bt||nt!==vt)&&(n.stencilOp(it,bt,vt),Me=it,Re=bt,nt=vt)},setLocked:function(it){g=it},setClear:function(it){ot!==it&&(n.clearStencil(it),ot=it)},reset:function(){g=!1,P=null,$=null,ce=null,xe=null,Me=null,Re=null,nt=null,ot=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,_=!1,v=null,p=null,m=null,A=null,y=null,M=null,I=null,R=new ze(0,0,0),T=0,V=!1,E=null,S=null,D=null,B=null,C=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ie=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(K)[1]),Q=ie>=1):K.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Q=ie>=2);let N=null,q={};const J=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),Se=new mt().fromArray(J),Ie=new mt().fromArray(me);function ae(g,P,$,ce){const xe=new Uint8Array(4),Me=n.createTexture();n.bindTexture(g,Me),n.texParameteri(g,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(g,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<$;Re++)g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY?n.texImage3D(P,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(P+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return Me}const _e={};_e[n.TEXTURE_2D]=ae(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),r.setFunc(Ko),se(!1),de(uu),Ee(n.CULL_FACE),O(Ni);function Ee(g){c[g]!==!0&&(n.enable(g),c[g]=!0)}function be(g){c[g]!==!1&&(n.disable(g),c[g]=!1)}function Fe(g,P){return u[g]!==P?(n.bindFramebuffer(g,P),u[g]=P,g===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=P),g===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=P),!0):!1}function He(g,P){let $=h,ce=!1;if(g){$=d.get(P),$===void 0&&($=[],d.set(P,$));const xe=g.textures;if($.length!==xe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Re=xe.length;Me<Re;Me++)$[Me]=n.COLOR_ATTACHMENT0+Me;$.length=xe.length,ce=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ce=!0);ce&&n.drawBuffers($)}function je(g){return f!==g?(n.useProgram(g),f=g,!0):!1}const ee={[Zi]:n.FUNC_ADD,[Zg]:n.FUNC_SUBTRACT,[Jg]:n.FUNC_REVERSE_SUBTRACT};ee[Qg]=n.MIN,ee[e_]=n.MAX;const L={[t_]:n.ZERO,[n_]:n.ONE,[i_]:n.SRC_COLOR,[Bl]:n.SRC_ALPHA,[c_]:n.SRC_ALPHA_SATURATE,[a_]:n.DST_COLOR,[r_]:n.DST_ALPHA,[s_]:n.ONE_MINUS_SRC_COLOR,[kl]:n.ONE_MINUS_SRC_ALPHA,[l_]:n.ONE_MINUS_DST_COLOR,[o_]:n.ONE_MINUS_DST_ALPHA,[u_]:n.CONSTANT_COLOR,[d_]:n.ONE_MINUS_CONSTANT_COLOR,[h_]:n.CONSTANT_ALPHA,[f_]:n.ONE_MINUS_CONSTANT_ALPHA};function O(g,P,$,ce,xe,Me,Re,nt,ot,it){if(g===Ni){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(Ee(n.BLEND),_=!0),g!==Yg){if(g!==v||it!==V){if((p!==Zi||y!==Zi)&&(n.blendEquation(n.FUNC_ADD),p=Zi,y=Zi),it)switch(g){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.ONE,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}m=null,A=null,M=null,I=null,R.set(0,0,0),T=0,v=g,V=it}return}xe=xe||P,Me=Me||$,Re=Re||ce,(P!==p||xe!==y)&&(n.blendEquationSeparate(ee[P],ee[xe]),p=P,y=xe),($!==m||ce!==A||Me!==M||Re!==I)&&(n.blendFuncSeparate(L[$],L[ce],L[Me],L[Re]),m=$,A=ce,M=Me,I=Re),(nt.equals(R)===!1||ot!==T)&&(n.blendColor(nt.r,nt.g,nt.b,ot),R.copy(nt),T=ot),v=g,V=!1}function te(g,P){g.side===an?be(n.CULL_FACE):Ee(n.CULL_FACE);let $=g.side===nn;P&&($=!$),se($),g.blending===Bs&&g.transparent===!1?O(Ni):O(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),r.setFunc(g.depthFunc),r.setTest(g.depthTest),r.setMask(g.depthWrite),s.setMask(g.colorWrite);const ce=g.stencilWrite;o.setTest(ce),ce&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),x(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(g){E!==g&&(g?n.frontFace(n.CW):n.frontFace(n.CCW),E=g)}function de(g){g!==Xg?(Ee(n.CULL_FACE),g!==S&&(g===uu?n.cullFace(n.BACK):g===qg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),S=g}function b(g){g!==D&&(Q&&n.lineWidth(g),D=g)}function x(g,P,$){g?(Ee(n.POLYGON_OFFSET_FILL),(B!==P||C!==$)&&(n.polygonOffset(P,$),B=P,C=$)):be(n.POLYGON_OFFSET_FILL)}function F(g){g?Ee(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function W(g){g===void 0&&(g=n.TEXTURE0+X-1),N!==g&&(n.activeTexture(g),N=g)}function z(g,P,$){$===void 0&&(N===null?$=n.TEXTURE0+X-1:$=N);let ce=q[$];ce===void 0&&(ce={type:void 0,texture:void 0},q[$]=ce),(ce.type!==g||ce.texture!==P)&&(N!==$&&(n.activeTexture($),N=$),n.bindTexture(g,P||_e[g]),ce.type=g,ce.texture=P)}function ne(){const g=q[N];g!==void 0&&g.type!==void 0&&(n.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function he(){try{n.compressedTexImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ge(){try{n.texSubImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ye(){try{n.texSubImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Te(){try{n.texStorage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function we(){try{n.texImage2D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function $e(g){Se.equals(g)===!1&&(n.scissor(g.x,g.y,g.z,g.w),Se.copy(g))}function tt(g){Ie.equals(g)===!1&&(n.viewport(g.x,g.y,g.z,g.w),Ie.copy(g))}function Ne(g,P){let $=l.get(P);$===void 0&&($=new WeakMap,l.set(P,$));let ce=$.get(g);ce===void 0&&(ce=n.getUniformBlockIndex(P,g.name),$.set(g,ce))}function Ge(g,P){const ce=l.get(P).get(g);a.get(P)!==ce&&(n.uniformBlockBinding(P,ce,g.__bindingPointIndex),a.set(P,ce))}function H(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,q={},u={},d=new WeakMap,h=[],f=null,_=!1,v=null,p=null,m=null,A=null,y=null,M=null,I=null,R=new ze(0,0,0),T=0,V=!1,E=null,S=null,D=null,B=null,C=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ee,disable:be,bindFramebuffer:Fe,drawBuffers:He,useProgram:je,setBlending:O,setMaterial:te,setFlipSided:se,setCullFace:de,setLineWidth:b,setPolygonOffset:x,setScissorTest:F,activeTexture:W,bindTexture:z,unbindTexture:ne,compressedTexImage2D:he,compressedTexImage3D:re,texImage2D:we,texImage3D:Ue,updateUBOMapping:Ne,uniformBlockBinding:Ge,texStorage2D:Pe,texStorage3D:Te,texSubImage2D:ge,texSubImage3D:ye,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:$e,viewport:tt,reset:H}}function dS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return f?new OffscreenCanvas(b,x):Hr("canvas")}function v(b,x,F){let W=1;const z=de(b);if((z.width>F||z.height>F)&&(W=F/Math.max(z.width,z.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ne=Math.floor(W*z.width),he=Math.floor(W*z.height);d===void 0&&(d=_(ne,he));const re=x?_(ne,he):d;return re.width=ne,re.height=he,re.getContext("2d").drawImage(b,0,0,ne,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+ne+"x"+he+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Jt&&b.minFilter!==ln}function m(b){n.generateMipmap(b)}function A(b,x,F,W,z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=x;if(x===n.RED&&(F===n.FLOAT&&(ne=n.R32F),F===n.HALF_FLOAT&&(ne=n.R16F),F===n.UNSIGNED_BYTE&&(ne=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(ne=n.R8UI),F===n.UNSIGNED_SHORT&&(ne=n.R16UI),F===n.UNSIGNED_INT&&(ne=n.R32UI),F===n.BYTE&&(ne=n.R8I),F===n.SHORT&&(ne=n.R16I),F===n.INT&&(ne=n.R32I)),x===n.RG&&(F===n.FLOAT&&(ne=n.RG32F),F===n.HALF_FLOAT&&(ne=n.RG16F),F===n.UNSIGNED_BYTE&&(ne=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(ne=n.RG8UI),F===n.UNSIGNED_SHORT&&(ne=n.RG16UI),F===n.UNSIGNED_INT&&(ne=n.RG32UI),F===n.BYTE&&(ne=n.RG8I),F===n.SHORT&&(ne=n.RG16I),F===n.INT&&(ne=n.RG32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),x===n.RGBA){const he=z?Jo:ut.getTransfer(W);F===n.FLOAT&&(ne=n.RGBA32F),F===n.HALF_FLOAT&&(ne=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ne=he===xt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function y(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Jt&&b.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function M(b){const x=b.target;x.removeEventListener("dispose",M),R(x),x.isVideoTexture&&u.delete(x)}function I(b){const x=b.target;x.removeEventListener("dispose",I),V(x)}function R(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,W=h.get(F);if(W){const z=W[x.__cacheKey];z.usedTimes--,z.usedTimes===0&&T(b),Object.keys(W).length===0&&h.delete(F)}i.remove(b)}function T(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,W=h.get(F);delete W[x.__cacheKey],o.memory.textures--}function V(b){const x=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let z=0;z<x.__webglFramebuffer[W].length;z++)n.deleteFramebuffer(x.__webglFramebuffer[W][z]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let W=0,z=F.length;W<z;W++){const ne=i.get(F[W]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(F[W])}i.remove(b)}let E=0;function S(){E=0}function D(){const b=E;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),E+=1,b}function B(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function C(b,x){const F=i.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(F,b,x);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function X(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Se(F,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Q(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Se(F,b,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function ie(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){Ie(F,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const K={[Xs]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},N={[Jt]:n.NEAREST,[Qf]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[ko]:n.LINEAR_MIPMAP_NEAREST,[ai]:n.LINEAR_MIPMAP_LINEAR},q={[j_]:n.NEVER,[Z_]:n.ALWAYS,[$_]:n.LESS,[dp]:n.LEQUAL,[X_]:n.EQUAL,[Y_]:n.GEQUAL,[q_]:n.GREATER,[K_]:n.NOTEQUAL};function J(b,x){if(x.type===Bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===ko||x.magFilter===Mr||x.magFilter===ai||x.minFilter===ln||x.minFilter===ko||x.minFilter===Mr||x.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,K[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,N[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Mr&&x.minFilter!==ai||x.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function me(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",M));const W=x.source;let z=h.get(W);z===void 0&&(z={},h.set(W,z));const ne=B(x);if(ne!==b.__cacheKey){z[ne]===void 0&&(z[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),z[ne].usedTimes++;const he=z[b.__cacheKey];he!==void 0&&(z[b.__cacheKey].usedTimes--,he.usedTimes===0&&T(x)),b.__cacheKey=ne,b.__webglTexture=z[ne].texture}return F}function Se(b,x,F){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const z=me(b,x),ne=x.source;t.bindTexture(W,b.__webglTexture,n.TEXTURE0+F);const he=i.get(ne);if(ne.version!==he.__version||z===!0){t.activeTexture(n.TEXTURE0+F);const re=ut.getPrimaries(ut.workingColorSpace),ge=x.colorSpace===Pi?null:ut.getPrimaries(x.colorSpace),ye=x.colorSpace===Pi||re===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let fe=v(x.image,!1,s.maxTextureSize);fe=se(x,fe);const ve=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let Te=A(x.internalFormat,ve,Pe,x.colorSpace,x.isVideoTexture);J(W,x);let we;const Ue=x.mipmaps,$e=x.isVideoTexture!==!0&&Te!==lp,tt=he.__version===void 0||z===!0,Ne=ne.dataReady,Ge=y(x,fe);if(x.isDepthTexture)Te=n.DEPTH_COMPONENT16,x.type===Bn?Te=n.DEPTH_COMPONENT32F:x.type===qs?Te=n.DEPTH_COMPONENT24:x.type===qr&&(Te=n.DEPTH24_STENCIL8),tt&&($e?t.texStorage2D(n.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Te,fe.width,fe.height,0,ve,Pe,null));else if(x.isDataTexture)if(Ue.length>0){$e&&tt&&t.texStorage2D(n.TEXTURE_2D,Ge,Te,Ue[0].width,Ue[0].height);for(let H=0,g=Ue.length;H<g;H++)we=Ue[H],$e?Ne&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,we.width,we.height,ve,Pe,we.data):t.texImage2D(n.TEXTURE_2D,H,Te,we.width,we.height,0,ve,Pe,we.data);x.generateMipmaps=!1}else $e?(tt&&t.texStorage2D(n.TEXTURE_2D,Ge,Te,fe.width,fe.height),Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,ve,Pe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Te,fe.width,fe.height,0,ve,Pe,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Te,Ue[0].width,Ue[0].height,fe.depth);for(let H=0,g=Ue.length;H<g;H++)we=Ue[H],x.format!==En?ve!==null?$e?Ne&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,we.width,we.height,fe.depth,ve,we.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,Te,we.width,we.height,fe.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,we.width,we.height,fe.depth,ve,Pe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,H,Te,we.width,we.height,fe.depth,0,ve,Pe,we.data)}else{$e&&tt&&t.texStorage2D(n.TEXTURE_2D,Ge,Te,Ue[0].width,Ue[0].height);for(let H=0,g=Ue.length;H<g;H++)we=Ue[H],x.format!==En?ve!==null?$e?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(n.TEXTURE_2D,H,Te,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?Ne&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,we.width,we.height,ve,Pe,we.data):t.texImage2D(n.TEXTURE_2D,H,Te,we.width,we.height,0,ve,Pe,we.data)}else if(x.isDataArrayTexture)$e?(tt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ge,Te,fe.width,fe.height,fe.depth),Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,ve,Pe,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,ve,Pe,fe.data);else if(x.isData3DTexture)$e?(tt&&t.texStorage3D(n.TEXTURE_3D,Ge,Te,fe.width,fe.height,fe.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,ve,Pe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,ve,Pe,fe.data);else if(x.isFramebufferTexture){if(tt)if($e)t.texStorage2D(n.TEXTURE_2D,Ge,Te,fe.width,fe.height);else{let H=fe.width,g=fe.height;for(let P=0;P<Ge;P++)t.texImage2D(n.TEXTURE_2D,P,Te,H,g,0,ve,Pe,null),H>>=1,g>>=1}}else if(Ue.length>0){if($e&&tt){const H=de(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Ge,Te,H.width,H.height)}for(let H=0,g=Ue.length;H<g;H++)we=Ue[H],$e?Ne&&t.texSubImage2D(n.TEXTURE_2D,H,0,0,ve,Pe,we):t.texImage2D(n.TEXTURE_2D,H,Te,ve,Pe,we);x.generateMipmaps=!1}else if($e){if(tt){const H=de(fe);t.texStorage2D(n.TEXTURE_2D,Ge,Te,H.width,H.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Pe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Te,ve,Pe,fe);p(x)&&m(W),he.__version=ne.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Ie(b,x,F){if(x.image.length!==6)return;const W=me(b,x),z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const ne=i.get(z);if(z.version!==ne.__version||W===!0){t.activeTexture(n.TEXTURE0+F);const he=ut.getPrimaries(ut.workingColorSpace),re=x.colorSpace===Pi?null:ut.getPrimaries(x.colorSpace),ge=x.colorSpace===Pi||he===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let g=0;g<6;g++)!ye&&!fe?ve[g]=v(x.image[g],!0,s.maxCubemapSize):ve[g]=fe?x.image[g].image:x.image[g],ve[g]=se(x,ve[g]);const Pe=ve[0],Te=r.convert(x.format,x.colorSpace),we=r.convert(x.type),Ue=A(x.internalFormat,Te,we,x.colorSpace),$e=x.isVideoTexture!==!0,tt=ne.__version===void 0||W===!0,Ne=z.dataReady;let Ge=y(x,Pe);J(n.TEXTURE_CUBE_MAP,x);let H;if(ye){$e&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,Ue,Pe.width,Pe.height);for(let g=0;g<6;g++){H=ve[g].mipmaps;for(let P=0;P<H.length;P++){const $=H[P];x.format!==En?Te!==null?$e?Ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P,0,0,$.width,$.height,Te,$.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P,Ue,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P,0,0,$.width,$.height,Te,we,$.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P,Ue,$.width,$.height,0,Te,we,$.data)}}}else{if(H=x.mipmaps,$e&&tt){H.length>0&&Ge++;const g=de(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ge,Ue,g.width,g.height)}for(let g=0;g<6;g++)if(fe){$e?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,ve[g].width,ve[g].height,Te,we,ve[g].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,Ue,ve[g].width,ve[g].height,0,Te,we,ve[g].data);for(let P=0;P<H.length;P++){const ce=H[P].image[g].image;$e?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P+1,0,0,ce.width,ce.height,Te,we,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P+1,Ue,ce.width,ce.height,0,Te,we,ce.data)}}else{$e?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,0,0,Te,we,ve[g]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,Ue,Te,we,ve[g]);for(let P=0;P<H.length;P++){const $=H[P];$e?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P+1,0,0,Te,we,$.image[g]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+g,P+1,Ue,Te,we,$.image[g])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),ne.__version=z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ae(b,x,F,W,z,ne){const he=r.convert(F.format,F.colorSpace),re=r.convert(F.type),ge=A(F.internalFormat,he,re,F.colorSpace);if(!i.get(x).__hasExternalTextures){const fe=Math.max(1,x.width>>ne),ve=Math.max(1,x.height>>ne);z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?t.texImage3D(z,ne,ge,fe,ve,x.depth,0,he,re,null):t.texImage2D(z,ne,ge,fe,ve,0,he,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),O(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,z,i.get(F).__webglTexture,0,L(x)):(z===n.TEXTURE_2D||z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,z,i.get(F).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let W=n.DEPTH_COMPONENT24;if(F||O(x)){const z=x.depthTexture;z&&z.isDepthTexture&&(z.type===Bn?W=n.DEPTH_COMPONENT32F:z.type===qs&&(W=n.DEPTH_COMPONENT24));const ne=L(x);O(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,W,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,W,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const W=L(x);F&&O(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,x.width,x.height):O(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const W=x.textures;for(let z=0;z<W.length;z++){const ne=W[z],he=r.convert(ne.format,ne.colorSpace),re=r.convert(ne.type),ge=A(ne.internalFormat,he,re,ne.colorSpace),ye=L(x);F&&O(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ge,x.width,x.height):O(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ge,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),C(x.depthTexture,0);const W=i.get(x.depthTexture).__webglTexture,z=L(x);if(x.depthTexture.format===ks)O(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(x.depthTexture.format===kr)O(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function be(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ee(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]=n.createRenderbuffer(),_e(x.__webglDepthbuffer[W],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),_e(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(b,x,F){const W=i.get(b);x!==void 0&&ae(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&be(b)}function He(b){const x=b.texture,F=i.get(b),W=i.get(x);b.addEventListener("dispose",I);const z=b.textures,ne=b.isWebGLCubeRenderTarget===!0,he=z.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++),ne){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let ge=0;ge<x.mipmaps.length;ge++)F.__webglFramebuffer[re][ge]=n.createFramebuffer()}else F.__webglFramebuffer[re]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)F.__webglFramebuffer[re]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(he)for(let re=0,ge=z.length;re<ge;re++){const ye=i.get(z[re]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&O(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<z.length;re++){const ge=z[re];F.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const ye=r.convert(ge.format,ge.colorSpace),fe=r.convert(ge.type),ve=A(ge.internalFormat,ye,fe,ge.colorSpace,b.isXRRenderTarget===!0),Pe=L(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,F.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),J(n.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)ae(F.__webglFramebuffer[re][ge],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ge);else ae(F.__webglFramebuffer[re],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let re=0,ge=z.length;re<ge;re++){const ye=z[re],fe=i.get(ye);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),J(n.TEXTURE_2D,ye),ae(F.__webglFramebuffer,b,ye,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),p(ye)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,W.__webglTexture),J(re,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)ae(F.__webglFramebuffer[ge],b,x,n.COLOR_ATTACHMENT0,re,ge);else ae(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,re,0);p(x)&&m(re),t.unbindTexture()}b.depthBuffer&&be(b)}function je(b){const x=b.textures;for(let F=0,W=x.length;F<W;F++){const z=x[F];if(p(z)){const ne=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,he=i.get(z).__webglTexture;t.bindTexture(ne,he),m(ne),t.unbindTexture()}}}function ee(b){if(b.samples>0&&O(b)===!1){const x=b.textures,F=b.width,W=b.height;let z=n.COLOR_BUFFER_BIT;const ne=[],he=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(b),ge=x.length>1;if(ge)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){ne.push(n.COLOR_ATTACHMENT0+ye),b.depthBuffer&&ne.push(he);const fe=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(fe===!1&&(b.depthBuffer&&(z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&re.__isTransmissionRenderTarget!==!0&&(z|=n.STENCIL_BUFFER_BIT)),ge&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[ye]),fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[he]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[he])),ge){const ve=i.get(x[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,F,W,0,0,F,W,z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,re.__webglColorRenderbuffer[ye]);const fe=i.get(x[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function L(b){return Math.min(s.maxSamples,b.samples)}function O(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function te(b){const x=o.render.frame;u.get(b)!==x&&(u.set(b,x),b.update())}function se(b,x){const F=b.colorSpace,W=b.format,z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ot&&F!==Pi&&(ut.getTransfer(F)===xt?(W!==En||z!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function de(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=C,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=ie,this.rebindTextures=Fe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=O}function hS(n,e){function t(i,s=Pi){let r;const o=ut.getTransfer(s);if(i===Oi)return n.UNSIGNED_BYTE;if(i===np)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ip)return n.UNSIGNED_SHORT_5_5_5_1;if(i===D_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===L_)return n.BYTE;if(i===I_)return n.SHORT;if(i===ep)return n.UNSIGNED_SHORT;if(i===tp)return n.INT;if(i===qs)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Zo)return n.HALF_FLOAT;if(i===N_)return n.ALPHA;if(i===U_)return n.RGB;if(i===En)return n.RGBA;if(i===O_)return n.LUMINANCE;if(i===F_)return n.LUMINANCE_ALPHA;if(i===ks)return n.DEPTH_COMPONENT;if(i===kr)return n.DEPTH_STENCIL;if(i===sp)return n.RED;if(i===rp)return n.RED_INTEGER;if(i===B_)return n.RG;if(i===op)return n.RG_INTEGER;if(i===ap)return n.RGBA_INTEGER;if(i===Oa||i===Fa||i===Ba||i===ka)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mu||i===gu||i===_u||i===vu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_u)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lp)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===xu)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mu||i===Su||i===bu||i===Eu||i===Tu||i===Au||i===wu||i===Ru||i===Cu||i===Pu||i===Lu||i===Iu||i===Du||i===Nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Mu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Su)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Au)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ru)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Iu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Du)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Va||i===Uu||i===Ou)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Va)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k_||i===Fu||i===Bu||i===ku)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class fS extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class es extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pS={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pS)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _S{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,s=new pi({vertexShader:mS,fragmentShader:gS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new dn(new ya(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class vS extends as{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const v=new _S,p=t.getContextAttributes();let m=null,A=null;const y=[],M=[],I=new Oe;let R=null;const T=new Zt;T.layers.enable(1),T.viewport=new mt;const V=new Zt;V.layers.enable(2),V.viewport=new mt;const E=[T,V],S=new fS;S.layers.enable(1),S.layers.enable(2);let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let _e=y[ae];return _e===void 0&&(_e=new hl,y[ae]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ae){let _e=y[ae];return _e===void 0&&(_e=new hl,y[ae]=_e),_e.getGripSpace()},this.getHand=function(ae){let _e=y[ae];return _e===void 0&&(_e=new hl,y[ae]=_e),_e.getHandSpace()};function C(ae){const _e=M.indexOf(ae.inputSource);if(_e===-1)return;const Ee=y[_e];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,c||o),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function X(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Q);for(let ae=0;ae<y.length;ae++){const _e=M[ae];_e!==null&&(M[ae]=null,y[ae].disconnect(_e))}D=null,B=null,v.reset(),e.setRenderTarget(m),f=null,h=null,d=null,s=null,A=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){r=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){a=ae,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const _e={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new rs(f.framebufferWidth,f.framebufferHeight,{format:En,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let _e=null,Ee=null,be=null;p.depth&&(be=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=p.stencil?kr:ks,Ee=p.stencil?qr:qs);const Fe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new rs(h.textureWidth,h.textureHeight,{format:En,type:Oi,depthTexture:new Tp(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const He=e.properties.get(A);He.__ignoreDepthValues=h.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Q(ae){for(let _e=0;_e<ae.removed.length;_e++){const Ee=ae.removed[_e],be=M.indexOf(Ee);be>=0&&(M[be]=null,y[be].disconnect(Ee))}for(let _e=0;_e<ae.added.length;_e++){const Ee=ae.added[_e];let be=M.indexOf(Ee);if(be===-1){for(let He=0;He<y.length;He++)if(He>=M.length){M.push(Ee),be=He;break}else if(M[He]===null){M[He]=Ee,be=He;break}if(be===-1)break}const Fe=y[be];Fe&&Fe.connect(Ee)}}const ie=new j,K=new j;function N(ae,_e,Ee){ie.setFromMatrixPosition(_e.matrixWorld),K.setFromMatrixPosition(Ee.matrixWorld);const be=ie.distanceTo(K),Fe=_e.projectionMatrix.elements,He=Ee.projectionMatrix.elements,je=Fe[14]/(Fe[10]-1),ee=Fe[14]/(Fe[10]+1),L=(Fe[9]+1)/Fe[5],O=(Fe[9]-1)/Fe[5],te=(Fe[8]-1)/Fe[0],se=(He[8]+1)/He[0],de=je*te,b=je*se,x=be/(-te+se),F=x*-te;_e.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(F),ae.translateZ(x),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert();const W=je+x,z=ee+x,ne=de-F,he=b+(be-F),re=L*ee/z*W,ge=O*ee/z*W;ae.projectionMatrix.makePerspective(ne,he,re,ge,W,z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}function q(ae,_e){_e===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(_e.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;v.texture!==null&&(ae.near=v.depthNear,ae.far=v.depthFar),S.near=V.near=T.near=ae.near,S.far=V.far=T.far=ae.far,(D!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far,T.near=D,T.far=B,V.near=D,V.far=B,T.updateProjectionMatrix(),V.updateProjectionMatrix(),ae.updateProjectionMatrix());const _e=ae.parent,Ee=S.cameras;q(S,_e);for(let be=0;be<Ee.length;be++)q(Ee[be],_e);Ee.length===2?N(S,T,V):S.projectionMatrix.copy(T.projectionMatrix),J(ae,S,_e)};function J(ae,_e,Ee){Ee===null?ae.matrix.copy(_e.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(_e.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ys*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ae){l=ae,h!==null&&(h.fixedFoveation=ae),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ae)},this.hasDepthSensing=function(){return v.texture!==null};let me=null;function Se(ae,_e){if(u=_e.getViewerPose(c||o),_=_e,u!==null){const Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let be=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,be=!0);for(let He=0;He<Ee.length;He++){const je=Ee[He];let ee=null;if(f!==null)ee=f.getViewport(je);else{const O=d.getViewSubImage(h,je);ee=O.viewport,He===0&&(e.setRenderTargetTextures(A,O.colorTexture,h.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(A))}let L=E[He];L===void 0&&(L=new Zt,L.layers.enable(He),L.viewport=new mt,E[He]=L),L.matrix.fromArray(je.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(je.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ee.x,ee.y,ee.width,ee.height),He===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),be===!0&&S.cameras.push(L)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const He=d.getDepthInformation(Ee[0]);He&&He.isValid&&He.texture&&v.init(e,He,s.renderState)}}for(let Ee=0;Ee<y.length;Ee++){const be=M[Ee],Fe=y[Ee];be!==null&&Fe!==void 0&&Fe.update(be,_e,c||o)}v.render(e,S),me&&me(ae,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Ie=new Ep;Ie.setAnimationLoop(Se),this.setAnimationLoop=function(ae){me=ae},this.dispose=function(){}}}const Xi=new Wn,xS=new et;function yS(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Mp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,A,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,A,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const A=e.get(m),y=A.envMap,M=A.envMapRotation;if(y&&(p.envMap.value=y,Xi.copy(M),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),p.envMapRotation.value.setFromMatrix4(xS.makeRotationFromEuler(Xi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const I=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*I,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,A,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*A,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,A){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const A=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,y){const M=y.program;i.uniformBlockBinding(A,M)}function c(A,y){let M=s[A.id];M===void 0&&(_(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",p));const I=y.program;i.updateUBOMapping(A,I);const R=e.render.frame;r[A.id]!==R&&(h(A),r[A.id]=R)}function u(A){const y=d();A.__bindingPointIndex=y;const M=n.createBuffer(),I=A.__size,R=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,I,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,M),M}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const y=s[A.id],M=A.uniforms,I=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,T=M.length;R<T;R++){const V=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,S=V.length;E<S;E++){const D=V[E];if(f(D,R,E,I)===!0){const B=D.__offset,C=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let Q=0;Q<C.length;Q++){const ie=C[Q],K=v(ie);typeof ie=="number"||typeof ie=="boolean"?(D.__data[0]=ie,n.bufferSubData(n.UNIFORM_BUFFER,B+X,D.__data)):ie.isMatrix3?(D.__data[0]=ie.elements[0],D.__data[1]=ie.elements[1],D.__data[2]=ie.elements[2],D.__data[3]=0,D.__data[4]=ie.elements[3],D.__data[5]=ie.elements[4],D.__data[6]=ie.elements[5],D.__data[7]=0,D.__data[8]=ie.elements[6],D.__data[9]=ie.elements[7],D.__data[10]=ie.elements[8],D.__data[11]=0):(ie.toArray(D.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,y,M,I){const R=A.value,T=y+"_"+M;if(I[T]===void 0)return typeof R=="number"||typeof R=="boolean"?I[T]=R:I[T]=R.clone(),!0;{const V=I[T];if(typeof R=="number"||typeof R=="boolean"){if(V!==R)return I[T]=R,!0}else if(V.equals(R)===!1)return V.copy(R),!0}return!1}function _(A){const y=A.uniforms;let M=0;const I=16;for(let T=0,V=y.length;T<V;T++){const E=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,D=E.length;S<D;S++){const B=E[S],C=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Q=C.length;X<Q;X++){const ie=C[X],K=v(ie),N=M%I;N!==0&&I-N<K.boundary&&(M+=I-N),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=K.storage}}}const R=M%I;return R>0&&(M+=I-R),A.__size=M,A.__cache={},this}function v(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function p(A){const y=A.target;y.removeEventListener("dispose",p);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class SS{constructor(e={}){const{canvas:t=pv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const m=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;const y=this;let M=!1,I=0,R=0,T=null,V=-1,E=null;const S=new mt,D=new mt;let B=null;const C=new ze(0);let X=0,Q=t.width,ie=t.height,K=1,N=null,q=null;const J=new mt(0,0,Q,ie),me=new mt(0,0,Q,ie);let Se=!1;const Ie=new mc;let ae=!1,_e=!1;const Ee=new et,be=new Oe,Fe=new j,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return T===null?K:1}let ee=i;function L(w,Y){const le=t.getContext(w,Y);return le!==null?le:null}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hc}`),t.addEventListener("webglcontextlost",P,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ce,!1),ee===null){const Y="webgl2";if(ee=L(Y,w),ee===null)throw L(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let O,te,se,de,b,x,F,W,z,ne,he,re,ge,ye,fe,ve,Pe,Te,we,Ue,$e,tt,Ne,Ge;function H(){O=new Py(ee),O.init(),te=new Ey(ee,O,e),tt=new hS(ee,O),se=new uS(ee),de=new Dy(ee),b=new YM,x=new dS(ee,O,se,b,te,tt,de),F=new Ay(y),W=new Cy(y),z=new kv(ee),Ne=new Sy(ee,z),ne=new Ly(ee,z,de,Ne),he=new Uy(ee,ne,z,de),we=new Ny(ee,te,x),ve=new Ty(b),re=new KM(y,F,W,O,te,Ne,ve),ge=new yS(y,b),ye=new JM,fe=new sS(O),Te=new My(y,F,W,se,he,h,l),Pe=new cS(y,he,te),Ge=new MS(ee,de,te,se),Ue=new by(ee,O,de),$e=new Iy(ee,O,de),de.programs=re.programs,y.capabilities=te,y.extensions=O,y.properties=b,y.renderLists=ye,y.shadowMap=Pe,y.state=se,y.info=de}H();const g=new vS(y,ee);this.xr=g,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const w=O.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=O.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(Q,ie,!1))},this.getSize=function(w){return w.set(Q,ie)},this.setSize=function(w,Y,le=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=w,ie=Y,t.width=Math.floor(w*K),t.height=Math.floor(Y*K),le===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(Q*K,ie*K).floor()},this.setDrawingBufferSize=function(w,Y,le){Q=w,ie=Y,K=le,t.width=Math.floor(w*le),t.height=Math.floor(Y*le),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,Y,le,ue){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,Y,le,ue),se.viewport(S.copy(J).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,Y,le,ue){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,Y,le,ue),se.scissor(D.copy(me).multiplyScalar(K).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){se.setScissorTest(Se=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(w=!0,Y=!0,le=!0){let ue=0;if(w){let oe=!1;if(T!==null){const Ce=T.texture.format;oe=Ce===ap||Ce===op||Ce===rp}if(oe){const Ce=T.texture.type,Le=Ce===Oi||Ce===qs||Ce===ep||Ce===qr||Ce===np||Ce===ip,Be=Te.getClearColor(),We=Te.getClearAlpha(),Ke=Be.r,Xe=Be.g,Ye=Be.b;Le?(f[0]=Ke,f[1]=Xe,f[2]=Ye,f[3]=We,ee.clearBufferuiv(ee.COLOR,0,f)):(_[0]=Ke,_[1]=Xe,_[2]=Ye,_[3]=We,ee.clearBufferiv(ee.COLOR,0,_))}else ue|=ee.COLOR_BUFFER_BIT}Y&&(ue|=ee.DEPTH_BUFFER_BIT),le&&(ue|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",P,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ye.dispose(),fe.dispose(),b.dispose(),F.dispose(),W.dispose(),he.dispose(),Ne.dispose(),Ge.dispose(),re.dispose(),g.dispose(),g.removeEventListener("sessionstart",bt),g.removeEventListener("sessionend",vt),Ft.stop()};function P(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=de.autoReset,Y=Pe.enabled,le=Pe.autoUpdate,ue=Pe.needsUpdate,oe=Pe.type;H(),de.autoReset=w,Pe.enabled=Y,Pe.autoUpdate=le,Pe.needsUpdate=ue,Pe.type=oe}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const Y=w.target;Y.removeEventListener("dispose",xe),Me(Y)}function Me(w){Re(w),b.remove(w)}function Re(w){const Y=b.get(w).programs;Y!==void 0&&(Y.forEach(function(le){re.releaseProgram(le)}),w.isShaderMaterial&&re.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,le,ue,oe,Ce){Y===null&&(Y=He);const Le=oe.isMesh&&oe.matrixWorld.determinant()<0,Be=Gp(w,Y,le,ue,oe);se.setMaterial(ue,Le);let We=le.index,Ke=1;if(ue.wireframe===!0){if(We=ne.getWireframeAttribute(le),We===void 0)return;Ke=2}const Xe=le.drawRange,Ye=le.attributes.position;let Et=Xe.start*Ke,sn=(Xe.start+Xe.count)*Ke;Ce!==null&&(Et=Math.max(Et,Ce.start*Ke),sn=Math.min(sn,(Ce.start+Ce.count)*Ke)),We!==null?(Et=Math.max(Et,0),sn=Math.min(sn,We.count)):Ye!=null&&(Et=Math.max(Et,0),sn=Math.min(sn,Ye.count));const Pt=sn-Et;if(Pt<0||Pt===1/0)return;Ne.setup(oe,ue,Be,le,We);let qn,Mt=Ue;if(We!==null&&(qn=z.get(We),Mt=$e,Mt.setIndex(qn)),oe.isMesh)ue.wireframe===!0?(se.setLineWidth(ue.wireframeLinewidth*je()),Mt.setMode(ee.LINES)):Mt.setMode(ee.TRIANGLES);else if(oe.isLine){let Ze=ue.linewidth;Ze===void 0&&(Ze=1),se.setLineWidth(Ze*je()),oe.isLineSegments?Mt.setMode(ee.LINES):oe.isLineLoop?Mt.setMode(ee.LINE_LOOP):Mt.setMode(ee.LINE_STRIP)}else oe.isPoints?Mt.setMode(ee.POINTS):oe.isSprite&&Mt.setMode(ee.TRIANGLES);if(oe.isBatchedMesh)Mt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else if(oe.isInstancedMesh)Mt.renderInstances(Et,Pt,oe.count);else if(le.isInstancedBufferGeometry){const Ze=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ea=Math.min(le.instanceCount,Ze);Mt.renderInstances(Et,Pt,Ea)}else Mt.render(Et,Pt)};function nt(w,Y,le){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=nn,w.needsUpdate=!0,Jr(w,Y,le),w.side=Cn,w.needsUpdate=!0,Jr(w,Y,le),w.side=an):Jr(w,Y,le)}this.compile=function(w,Y,le=null){le===null&&(le=w),p=fe.get(le),p.init(),A.push(p),le.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),w!==le&&w.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(p.pushLight(oe),oe.castShadow&&p.pushShadow(oe))}),p.setupLights(y._useLegacyLights);const ue=new Set;return w.traverse(function(oe){const Ce=oe.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){const Be=Ce[Le];nt(Be,le,oe),ue.add(Be)}else nt(Ce,le,oe),ue.add(Ce)}),A.pop(),p=null,ue},this.compileAsync=function(w,Y,le=null){const ue=this.compile(w,Y,le);return new Promise(oe=>{function Ce(){if(ue.forEach(function(Le){b.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){oe(w);return}setTimeout(Ce,10)}O.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ot=null;function it(w){ot&&ot(w)}function bt(){Ft.stop()}function vt(){Ft.start()}const Ft=new Ep;Ft.setAnimationLoop(it),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(w){ot=w,g.setAnimationLoop(w),w===null?Ft.stop():Ft.start()},g.addEventListener("sessionstart",bt),g.addEventListener("sessionend",vt),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(Y),Y=g.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,Y,T),p=fe.get(w,A.length),p.init(),A.push(p),Ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ie.setFromProjectionMatrix(Ee),_e=this.localClippingEnabled,ae=ve.init(this.clippingPlanes,_e),v=ye.get(w,m.length),v.init(),m.push(v),fn(w,Y,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(N,q),this.info.render.frame++,ae===!0&&ve.beginShadows();const le=p.state.shadowsArray;if(Pe.render(le,w,Y),ae===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1)&&Te.render(v,w),p.setupLights(y._useLegacyLights),Y.isArrayCamera){const ue=Y.cameras;for(let oe=0,Ce=ue.length;oe<Ce;oe++){const Le=ue[oe];_i(v,w,Le,Le.viewport)}}else _i(v,w,Y);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(y,w,Y),Ne.resetDefaultState(),V=-1,E=null,A.pop(),A.length>0?p=A[A.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function fn(w,Y,le,ue){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)le=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){ue&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const Le=he.update(w),Be=w.material;Be.visible&&v.push(w,Le,Be,le,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){const Le=he.update(w),Be=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Fe.copy(Le.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Be)){const We=Le.groups;for(let Ke=0,Xe=We.length;Ke<Xe;Ke++){const Ye=We[Ke],Et=Be[Ye.materialIndex];Et&&Et.visible&&v.push(w,Le,Et,le,Fe.z,Ye)}}else Be.visible&&v.push(w,Le,Be,le,Fe.z,null)}}const Ce=w.children;for(let Le=0,Be=Ce.length;Le<Be;Le++)fn(Ce[Le],Y,le,ue)}function _i(w,Y,le,ue){const oe=w.opaque,Ce=w.transmissive,Le=w.transparent;p.setupLightsView(le),ae===!0&&ve.setGlobalState(y.clippingPlanes,le),Ce.length>0&&ls(oe,Ce,Y,le),ue&&se.viewport(S.copy(ue)),oe.length>0&&Bi(oe,Y,le),Ce.length>0&&Bi(Ce,Y,le),Le.length>0&&Bi(Le,Y,le),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function ls(w,Y,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new rs(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Zo:Oi,minFilter:ai,samples:4,stencilBuffer:r});const Ke=b.get(p.state.transmissionRenderTarget);Ke.__isTransmissionRenderTarget=!0}const Ce=p.state.transmissionRenderTarget;y.getDrawingBufferSize(be),Ce.setSize(be.x,be.y);const Le=y.getRenderTarget();y.setRenderTarget(Ce),y.getClearColor(C),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear();const Be=y.toneMapping;y.toneMapping=Ui,Bi(w,le,ue),x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce);let We=!1;for(let Ke=0,Xe=Y.length;Ke<Xe;Ke++){const Ye=Y[Ke],Et=Ye.object,sn=Ye.geometry,Pt=Ye.material,qn=Ye.group;if(Pt.side===an&&Et.layers.test(ue.layers)){const Mt=Pt.side;Pt.side=nn,Pt.needsUpdate=!0,Ac(Et,le,ue,sn,Pt,qn),Pt.side=Mt,Pt.needsUpdate=!0,We=!0}}We===!0&&(x.updateMultisampleRenderTarget(Ce),x.updateRenderTargetMipmap(Ce)),y.setRenderTarget(Le),y.setClearColor(C,X),y.toneMapping=Be}function Bi(w,Y,le){const ue=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Ce=w.length;oe<Ce;oe++){const Le=w[oe],Be=Le.object,We=Le.geometry,Ke=ue===null?Le.material:ue,Xe=Le.group;Be.layers.test(le.layers)&&Ac(Be,Y,le,We,Ke,Xe)}}function Ac(w,Y,le,ue,oe,Ce){w.onBeforeRender(y,Y,le,ue,oe,Ce),w.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),oe.onBeforeRender(y,Y,le,ue,w,Ce),oe.transparent===!0&&oe.side===an&&oe.forceSinglePass===!1?(oe.side=nn,oe.needsUpdate=!0,y.renderBufferDirect(le,Y,ue,oe,w,Ce),oe.side=Cn,oe.needsUpdate=!0,y.renderBufferDirect(le,Y,ue,oe,w,Ce),oe.side=an):y.renderBufferDirect(le,Y,ue,oe,w,Ce),w.onAfterRender(y,Y,le,ue,oe,Ce)}function Jr(w,Y,le){Y.isScene!==!0&&(Y=He);const ue=b.get(w),oe=p.state.lights,Ce=p.state.shadowsArray,Le=oe.state.version,Be=re.getParameters(w,oe.state,Ce,Y,le),We=re.getProgramCacheKey(Be);let Ke=ue.programs;ue.environment=w.isMeshStandardMaterial?Y.environment:null,ue.fog=Y.fog,ue.envMap=(w.isMeshStandardMaterial?W:F).get(w.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",xe),Ke=new Map,ue.programs=Ke);let Xe=Ke.get(We);if(Xe!==void 0){if(ue.currentProgram===Xe&&ue.lightsStateVersion===Le)return Rc(w,Be),Xe}else Be.uniforms=re.getUniforms(w),w.onBuild(le,Be,y),w.onBeforeCompile(Be,y),Xe=re.acquireProgram(Be,We),Ke.set(We,Xe),ue.uniforms=Be.uniforms;const Ye=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=ve.uniform),Rc(w,Be),ue.needsLights=jp(w),ue.lightsStateVersion=Le,ue.needsLights&&(Ye.ambientLightColor.value=oe.state.ambient,Ye.lightProbe.value=oe.state.probe,Ye.directionalLights.value=oe.state.directional,Ye.directionalLightShadows.value=oe.state.directionalShadow,Ye.spotLights.value=oe.state.spot,Ye.spotLightShadows.value=oe.state.spotShadow,Ye.rectAreaLights.value=oe.state.rectArea,Ye.ltc_1.value=oe.state.rectAreaLTC1,Ye.ltc_2.value=oe.state.rectAreaLTC2,Ye.pointLights.value=oe.state.point,Ye.pointLightShadows.value=oe.state.pointShadow,Ye.hemisphereLights.value=oe.state.hemi,Ye.directionalShadowMap.value=oe.state.directionalShadowMap,Ye.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ye.spotShadowMap.value=oe.state.spotShadowMap,Ye.spotLightMatrix.value=oe.state.spotLightMatrix,Ye.spotLightMap.value=oe.state.spotLightMap,Ye.pointShadowMap.value=oe.state.pointShadowMap,Ye.pointShadowMatrix.value=oe.state.pointShadowMatrix),ue.currentProgram=Xe,ue.uniformsList=null,Xe}function wc(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Vo.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Rc(w,Y){const le=b.get(w);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function Gp(w,Y,le,ue,oe){Y.isScene!==!0&&(Y=He),x.resetTextureUnits();const Ce=Y.fog,Le=ue.isMeshStandardMaterial?Y.environment:null,Be=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ot,We=(ue.isMeshStandardMaterial?W:F).get(ue.envMap||Le),Ke=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Xe=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ye=!!le.morphAttributes.position,Et=!!le.morphAttributes.normal,sn=!!le.morphAttributes.color;let Pt=Ui;ue.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const qn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Mt=qn!==void 0?qn.length:0,Ze=b.get(ue),Ea=p.state.lights;if(ae===!0&&(_e===!0||w!==E)){const pn=w===E&&ue.id===V;ve.setState(ue,w,pn)}let yt=!1;ue.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ea.state.version||Ze.outputColorSpace!==Be||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ze.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ze.instancingMorph===!1&&oe.morphTexture!==null||Ze.envMap!==We||ue.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ve.numPlanes||Ze.numIntersection!==ve.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==Xe||Ze.morphTargets!==Ye||Ze.morphNormals!==Et||Ze.morphColors!==sn||Ze.toneMapping!==Pt||Ze.morphTargetsCount!==Mt)&&(yt=!0):(yt=!0,Ze.__version=ue.version);let ki=Ze.currentProgram;yt===!0&&(ki=Jr(ue,Y,oe));let Cc=!1,ar=!1,Ta=!1;const Bt=ki.getUniforms(),vi=Ze.uniforms;if(se.useProgram(ki.program)&&(Cc=!0,ar=!0,Ta=!0),ue.id!==V&&(V=ue.id,ar=!0),Cc||E!==w){Bt.setValue(ee,"projectionMatrix",w.projectionMatrix),Bt.setValue(ee,"viewMatrix",w.matrixWorldInverse);const pn=Bt.map.cameraPosition;pn!==void 0&&pn.setValue(ee,Fe.setFromMatrixPosition(w.matrixWorld)),te.logarithmicDepthBuffer&&Bt.setValue(ee,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Bt.setValue(ee,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,ar=!0,Ta=!0)}if(oe.isSkinnedMesh){Bt.setOptional(ee,oe,"bindMatrix"),Bt.setOptional(ee,oe,"bindMatrixInverse");const pn=oe.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Bt.setValue(ee,"boneTexture",pn.boneTexture,x))}oe.isBatchedMesh&&(Bt.setOptional(ee,oe,"batchingTexture"),Bt.setValue(ee,"batchingTexture",oe._matricesTexture,x));const Aa=le.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0)&&we.update(oe,le,ki),(ar||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,Bt.setValue(ee,"receiveShadow",oe.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(vi.envMap.value=We,vi.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Y.environment!==null&&(vi.envMapIntensity.value=Y.environmentIntensity),ar&&(Bt.setValue(ee,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&Wp(vi,Ta),Ce&&ue.fog===!0&&ge.refreshFogUniforms(vi,Ce),ge.refreshMaterialUniforms(vi,ue,K,ie,p.state.transmissionRenderTarget),Vo.upload(ee,wc(Ze),vi,x)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Vo.upload(ee,wc(Ze),vi,x),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Bt.setValue(ee,"center",oe.center),Bt.setValue(ee,"modelViewMatrix",oe.modelViewMatrix),Bt.setValue(ee,"normalMatrix",oe.normalMatrix),Bt.setValue(ee,"modelMatrix",oe.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const pn=ue.uniformsGroups;for(let wa=0,$p=pn.length;wa<$p;wa++){const Pc=pn[wa];Ge.update(Pc,ki),Ge.bind(Pc,ki)}}return ki}function Wp(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,Y,le){b.get(w.texture).__webglTexture=Y,b.get(w.depthTexture).__webglTexture=le;const ue=b.get(w);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Y){const le=b.get(w);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,le=0){T=w,I=Y,R=le;let ue=!0,oe=null,Ce=!1,Le=!1;if(w){const We=b.get(w);We.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(ee.FRAMEBUFFER,null),ue=!1):We.__webglFramebuffer===void 0?x.setupRenderTarget(w):We.__hasExternalTextures&&x.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);const Ke=w.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Le=!0);const Xe=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?oe=Xe[Y][le]:oe=Xe[Y],Ce=!0):w.samples>0&&x.useMultisampledRTT(w)===!1?oe=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?oe=Xe[le]:oe=Xe,S.copy(w.viewport),D.copy(w.scissor),B=w.scissorTest}else S.copy(J).multiplyScalar(K).floor(),D.copy(me).multiplyScalar(K).floor(),B=Se;if(se.bindFramebuffer(ee.FRAMEBUFFER,oe)&&ue&&se.drawBuffers(w,oe),se.viewport(S),se.scissor(D),se.setScissorTest(B),Ce){const We=b.get(w.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,le)}else if(Le){const We=b.get(w.texture),Ke=Y||0;ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,We.__webglTexture,le||0,Ke)}V=-1},this.readRenderTargetPixels=function(w,Y,le,ue,oe,Ce,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Be=Be[Le]),Be){se.bindFramebuffer(ee.FRAMEBUFFER,Be);try{const We=w.texture,Ke=We.format,Xe=We.type;if(Ke!==En&&tt.convert(Ke)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Xe===Zo&&(O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float"));if(Xe!==Oi&&tt.convert(Xe)!==ee.getParameter(ee.IMPLEMENTATION_COLOR_READ_TYPE)&&Xe!==Bn&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ue&&le>=0&&le<=w.height-oe&&ee.readPixels(Y,le,ue,oe,tt.convert(Ke),tt.convert(Xe),Ce)}finally{const We=T!==null?b.get(T).__webglFramebuffer:null;se.bindFramebuffer(ee.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(w,Y,le=0){const ue=Math.pow(2,-le),oe=Math.floor(Y.image.width*ue),Ce=Math.floor(Y.image.height*ue);x.setTexture2D(Y,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,le,0,0,w.x,w.y,oe,Ce),se.unbindTexture()},this.copyTextureToTexture=function(w,Y,le,ue=0){const oe=Y.image.width,Ce=Y.image.height,Le=tt.convert(le.format),Be=tt.convert(le.type);x.setTexture2D(le,0),ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,le.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,le.unpackAlignment),Y.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,ue,w.x,w.y,oe,Ce,Le,Be,Y.image.data):Y.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,ue,w.x,w.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Le,Y.mipmaps[0].data):ee.texSubImage2D(ee.TEXTURE_2D,ue,w.x,w.y,Le,Be,Y.image),ue===0&&le.generateMipmaps&&ee.generateMipmap(ee.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,le,ue,oe=0){const Ce=Math.round(w.max.x-w.min.x),Le=Math.round(w.max.y-w.min.y),Be=w.max.z-w.min.z+1,We=tt.convert(ue.format),Ke=tt.convert(ue.type);let Xe;if(ue.isData3DTexture)x.setTexture3D(ue,0),Xe=ee.TEXTURE_3D;else if(ue.isDataArrayTexture||ue.isCompressedArrayTexture)x.setTexture2DArray(ue,0),Xe=ee.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ee.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,ue.flipY),ee.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),ee.pixelStorei(ee.UNPACK_ALIGNMENT,ue.unpackAlignment);const Ye=ee.getParameter(ee.UNPACK_ROW_LENGTH),Et=ee.getParameter(ee.UNPACK_IMAGE_HEIGHT),sn=ee.getParameter(ee.UNPACK_SKIP_PIXELS),Pt=ee.getParameter(ee.UNPACK_SKIP_ROWS),qn=ee.getParameter(ee.UNPACK_SKIP_IMAGES),Mt=le.isCompressedTexture?le.mipmaps[oe]:le.image;ee.pixelStorei(ee.UNPACK_ROW_LENGTH,Mt.width),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Mt.height),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,w.min.x),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,w.min.y),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,w.min.z),le.isDataTexture||le.isData3DTexture?ee.texSubImage3D(Xe,oe,Y.x,Y.y,Y.z,Ce,Le,Be,We,Ke,Mt.data):ue.isCompressedArrayTexture?ee.compressedTexSubImage3D(Xe,oe,Y.x,Y.y,Y.z,Ce,Le,Be,We,Mt.data):ee.texSubImage3D(Xe,oe,Y.x,Y.y,Y.z,Ce,Le,Be,We,Ke,Mt),ee.pixelStorei(ee.UNPACK_ROW_LENGTH,Ye),ee.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,Et),ee.pixelStorei(ee.UNPACK_SKIP_PIXELS,sn),ee.pixelStorei(ee.UNPACK_SKIP_ROWS,Pt),ee.pixelStorei(ee.UNPACK_SKIP_IMAGES,qn),oe===0&&ue.generateMipmaps&&ee.generateMipmap(Xe),se.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?x.setTextureCube(w,0):w.isData3DTexture?x.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?x.setTexture2DArray(w,0):x.setTexture2D(w,0),se.unbindTexture()},this.resetState=function(){I=0,R=0,T=null,se.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===xa?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bS extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ES{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pp("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new j;class vc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Dd=new j,Nd=new mt,Ud=new mt,TS=new j,Od=new et,Eo=new j,fl=new $n,Fd=new et,pl=new Kr;class AS extends dn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pu,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Eo),this.boundingSphere.expandByPoint(Eo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(s),e.ray.intersectsSphere(fl)!==!1&&(Fd.copy(s).invert(),pl.copy(e.ray).applyMatrix4(Fd),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===P_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Nd.fromBufferAttribute(s.attributes.skinIndex,e),Ud.fromBufferAttribute(s.attributes.skinWeight,e),Dd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ud.getComponent(r);if(o!==0){const a=Nd.getComponent(r);Od.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(TS.copy(Dd).applyMatrix4(Od),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lp extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ip extends It{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Jt,u=Jt,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bd=new et,wS=new et;class xc{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:wS;Bd.multiplyMatrices(a,t[r]),Bd.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ip(t,e,e,En,Bn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lp),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class jl extends Qt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Cs=new et,kd=new et,To=[],Vd=new jn,RS=new et,mr=new dn,gr=new $n;class CS extends dn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,RS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Vd.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),gr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),kd.multiplyMatrices(i,Cs),mr.matrixWorld=kd,mr.raycast(e,To);for(let o=0,a=To.length;o<a;o++){const l=To[o];l.instanceId=r,l.object=this,t.push(l)}To.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ip(new Float32Array(s*this.count),s,this.count,sp,Bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Sa extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hd=new j,zd=new j,Gd=new et,ml=new Kr,Ao=new $n;class yc extends St{constructor(e=new vn,t=new Sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Hd.fromBufferAttribute(t,s-1),zd.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Hd.distanceTo(zd);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,e.ray.intersectsSphere(Ao)===!1)return;Gd.copy(s).invert(),ml.copy(e.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new j,u=new j,d=new j,h=new j,f=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const m=Math.max(0,o.start),A=Math.min(_.count,o.start+o.count);for(let y=m,M=A-1;y<M;y+=f){const I=_.getX(y),R=_.getX(y+1);if(c.fromBufferAttribute(p,I),u.fromBufferAttribute(p,R),ml.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const V=e.ray.origin.distanceTo(h);V<e.near||V>e.far||t.push({distance:V,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),A=Math.min(p.count,o.start+o.count);for(let y=m,M=A-1;y<M;y+=f){if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,y+1),ml.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Wd=new j,jd=new j;class Mc extends yc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Wd.fromBufferAttribute(t,s),jd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Wd.distanceTo(jd);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PS extends yc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Dp extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $d=new et,$l=new Kr,wo=new $n,Ro=new j;class LS extends St{constructor(e=new vn,t=new Dp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;$d.copy(s).invert(),$l.copy(e.ray).applyMatrix4($d);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=h,v=f;_<v;_++){const p=c.getX(_);Ro.fromBufferAttribute(d,p),Xd(Ro,p,l,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=h,v=f;_<v;_++)Ro.fromBufferAttribute(d,_),Xd(Ro,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xd(n,e,t,i,s,r,o){const a=$l.distanceSqToPoint(n);if(a<t){const l=new j;$l.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const Co=new j,Po=new j,gl=new j,Lo=new bn;class IS extends vn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Vs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:p,c:m}=Lo;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),m.fromBufferAttribute(a,c[2]),Lo.getNormal(gl),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let A=0;A<3;A++){const y=(A+1)%3,M=d[A],I=d[y],R=Lo[u[A]],T=Lo[u[y]],V=`${M}_${I}`,E=`${I}_${M}`;E in h&&h[E]?(gl.dot(h[E].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(T.x,T.y,T.z)),h[E]=null):V in h||(h[V]={index0:c[A],index1:c[y],normal:gl.clone()})}}for(const _ in h)if(h[_]){const{index0:v,index1:p}=h[_];Co.fromBufferAttribute(a,v),Po.fromBufferAttribute(a,p),f.push(Co.x,Co.y,Co.z),f.push(Po.x,Po.y,Po.z)}this.setAttribute("position",new _n(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Sc extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gi extends Sc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Io(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function DS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function NS(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function qd(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Np(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Zr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class US extends Zr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hu:r=e,a=2*t-i;break;case zu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Hu:o=e,l=2*i-t;break;case zu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(i-t)/(s-t),v=_*_,p=v*_,m=-h*p+2*h*v-h*_,A=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*_+1,y=(-1-f)*p+(1.5+f)*v+.5*_,M=f*p-f*v;for(let I=0;I!==a;++I)r[I]=m*o[u+I]+A*o[c+I]+y*o[l+I]+M*o[d+I];return r}}class OS extends Zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class FS extends Zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new FS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new OS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new US(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Ha:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Ha}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&DS(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ha,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const d=a*i,h=d-i,f=d+i;for(let _=0;_!==i;++_){const v=t[d+_];if(v!==t[h+_]||v!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ks;class sr extends Xn{}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Vr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Up extends Xn{}Up.prototype.ValueTypeName="color";class Js extends Xn{}Js.prototype.ValueTypeName="number";class BS extends Zr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Gn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class os extends Xn{InterpolantFactoryMethodLinear(e){return new BS(this.times,this.values,this.getValueSize(),e)}}os.prototype.ValueTypeName="quaternion";os.prototype.DefaultInterpolation=Ks;os.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends Xn{}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Vr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Xn{}Qs.prototype.ValueTypeName="vector";class kS{constructor(e="",t=-1,i=[],s=V_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(HS(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Xn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=NS(l);l=qd(l,1,u),c=qd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=s[d];h||(s[d]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,_,v){if(f.length!==0){const p=[],m=[];Np(f,p,m,_),p.length!==0&&v.push(new d(h,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let _;for(_=0;_<h.length;_++)if(h[_].morphTargets)for(let v=0;v<h[_].morphTargets.length;v++)f[h[_].morphTargets[v]]=-1;for(const v in f){const p=[],m=[];for(let A=0;A!==h[_].morphTargets.length;++A){const y=h[_];p.push(y.time),m.push(y.morphTarget===v?1:0)}s.push(new Js(".morphTargetInfluence["+v+"]",p,m))}l=f.length*o}else{const f=".bones["+t[d].name+"]";i(Qs,f+".position",h,"pos",s),i(os,f+".quaternion",h,"rot",s),i(Qs,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function VS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return Qs;case"color":return Up;case"quaternion":return os;case"bool":case"boolean":return sr;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function HS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=VS(n.type);if(n.times===void 0){const t=[],i=[];Np(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ii={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Op{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const zS=new Op;class or{constructor(e){this.manager=e!==void 0?e:zS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}or.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class GS extends Error{constructor(e,t){super(e),this.response=t}}class Fp extends or{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:i,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=h?parseInt(h):0,_=f!==0;let v=0;const p=new ReadableStream({start(m){A();function A(){d.read().then(({done:y,value:M})=>{if(y)m.close();else{v+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:f});for(let R=0,T=u.length;R<T;R++){const V=u[R];V.onProgress&&V.onProgress(I)}m.enqueue(M),A()}})}}});return new Response(p)}else throw new GS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Ii.add(e,c);const u=ti[e];delete ti[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class WS extends or{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ii.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Hr("img");function l(){u(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class jS extends or{constructor(e){super(e)}load(e,t,i,s){const r=new It,o=new WS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ba extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _l=new et,Kd=new j,Yd=new j;class bc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_l)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $S extends bc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class XS extends ba{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $S}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zd=new et,_r=new j,vl=new j;class qS extends bc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),i.position.copy(_r),vl.copy(i.position),vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vl),i.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),Zd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zd)}}class KS extends ba{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new qS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class YS extends bc{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xl extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new YS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZS extends ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ir{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class JS extends or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ii.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(e,l),r.manager.itemStart(e)}}const Ec="\\[\\]\\.:\\/",QS=new RegExp("["+Ec+"]","g"),Tc="[^"+Ec+"]",eb="[^"+Ec.replace("\\.","")+"]",tb=/((?:WC+[\/:])*)/.source.replace("WC",Tc),nb=/(WCOD+)?/.source.replace("WCOD",eb),ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),sb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),rb=new RegExp("^"+tb+nb+ib+sb+"$"),ob=["material","materials","bones","map"];class ab{constructor(e,t,i){const s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(QS,"")}static parseTrackName(e){const t=rb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);ob.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=ab;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jd{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qd extends Mc{constructor(e=10,t=10,i=4473924,s=8947848){i=new ze(i),s=new ze(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,_=-a;h<=t;h++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=h===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new vn;u.setAttribute("position",new _n(l,3)),u.setAttribute("color",new _n(c,3));const d=new Sa({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hc);function eh(n,e){if(e===H_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===zl||e===cp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===zl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class xl extends or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Sb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new Eb(t)}),this.register(function(t){return new Tb(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ir.extractUrlBase(e);o=Ir.resolveURL(c,this.path)}else o=Ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Fp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Bp){try{o[rt.KHR_BINARY_GLTF]=new Ab(e)}catch(d){s&&s(d);return}r=JSON.parse(o[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case rt.KHR_MATERIALS_UNLIT:o[d]=new ub;break;case rt.KHR_DRACO_MESH_COMPRESSION:o[d]=new wb(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:o[d]=new Rb;break;case rt.KHR_MESH_QUANTIZATION:o[d]=new Cb;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function lb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cb{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Ot);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new KS(u),c.distance=d;break;case"spot":c=new XS(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class ub{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qi}extendParams(e,t,i){const s=[];e.color=new ze(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(s)}}class db{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}}class fb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class pb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class mb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class gb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(a[0],a[1],a[2],Ot),Promise.all(r)}}class _b{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class vb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(a[0],a[1],a[2],Ot),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(r)}}class xb{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class yb{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:gi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Mb{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Sb{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class bb{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Eb{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}}class Tb{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const _ of d){const v=new et,p=new j,m=new Gn,A=new j(1,1,1),y=new CS(_.geometry,_.material,h);for(let M=0;M<h;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&A.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,v.compose(p,m,A));for(const M in l)if(M==="_COLOR_0"){const I=l[M];y.instanceColor=new jl(I.array,I.itemSize,I.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);St.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Bp="glTF",vr=12,th={JSON:1313821514,BIN:5130562};class Ab{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,vr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-vr,r=new DataView(e,vr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===th.JSON){const c=new Uint8Array(e,vr+o,a);this.content=i.decode(c)}else if(l===th.BIN){const c=vr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=ql[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=ql[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],f=zs[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(const _ in f.attributes){const v=f.attributes[_],p=l[_];p!==void 0&&(v.normalized=p)}d(f)},a,c,Ot,h)})})}}class Rb{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cb{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}}class kp extends Zr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,d=(i-t)/u,h=d*d,f=h*d,_=e*c,v=_-c,p=-2*f+3*h,m=f-h,A=1-p,y=m-h+d;for(let M=0;M!==a;M++){const I=o[v+M+a],R=o[v+M+l]*u,T=o[_+M+a],V=o[_+M]*u;r[M]=A*I+y*R+p*T+m*V}return r}}const Pb=new Gn;class Lb extends kp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return Pb.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nh={9728:Jt,9729:ln,9984:Qf,9985:ko,9986:Mr,9987:ai},ih={33071:Li,33648:Yo,10497:Xs},yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ql={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ib={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Vr},Ml={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Db(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Sc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),n.DefaultMaterial}function qi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ri(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Nb(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(s){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=d),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function Ub(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ob(n){let e;const t=n.extensions&&n.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sl(t.attributes):e=n.indices+":"+Sl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Sl(n.targets[i]);return e}function Sl(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Kl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Bb=new et;class kb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new jS(this.options.manager):this.textureLoader=new JS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return qi(r,a,s),Ri(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Ir.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=yl[s.type],a=zs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Qt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=yl[s.type],c=zs[s.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let v,p;if(f&&f!==d){const m=Math.floor(h/f),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let y=t.cache.get(A);y||(v=new c(a,m*f,s.count*f/u),y=new ES(v,f/u),t.cache.add(A,y)),p=new vc(y,l,h%f/u,_)}else a===null?v=new c(s.count*l):v=new c(a,h,s.count*l),p=new Qt(v,l,_);if(s.sparse!==void 0){const m=yl.SCALAR,A=zs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,I=new A(o[1],y,s.sparse.count*m),R=new c(o[2],M,s.sparse.count*l);a!==null&&(p=new Qt(p.array.slice(),p.itemSize,p.normalized));for(let T=0,V=I.length;T<V;T++){const E=I[T];if(p.setX(E,R[T*l]),l>=2&&p.setY(E,R[T*l+1]),l>=3&&p.setZ(E,R[T*l+2]),l>=4&&p.setW(E,R[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=nh[h.magFilter]||ln,u.minFilter=nh[h.minFilter]||ai,u.wrapS=ih[h.wrapS]||Xs,u.wrapT=ih[h.wrapT]||Xs,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let _=h;t.isImageBitmapLoader===!0&&(_=function(v){const p=new It(v);p.needsUpdate=!0,h(p)}),t.load(Ir.resolveURL(d,r.path),_,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),d.userData.mimeType=o.mimeType||Fb(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Dp,Vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Sa,Vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Sc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){const d=s[rt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Ot),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Kt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);const u=r.alphaMode||Ml.OPAQUE;if(u===Ml.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ml.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==Qi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qi){const d=r.emissiveFactor;a.emissive=new ze().setRGB(d[0],d[1],d[2],Ot)}return r.emissiveTexture!==void 0&&o!==Qi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ri(d,r),t.associations.set(d,{materials:e}),r.extensions&&qi(s,d,r),d})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Ob(c),d=s[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=sh(new vn,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Db(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,_=u.length;f<_;f++){const v=u[f],p=o[f];let m;const A=c[f];if(p.mode===gn.TRIANGLES||p.mode===gn.TRIANGLE_STRIP||p.mode===gn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new AS(v,A):new dn(v,A),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===gn.TRIANGLE_STRIP?m.geometry=eh(m.geometry,cp):p.mode===gn.TRIANGLE_FAN&&(m.geometry=eh(m.geometry,zl));else if(p.mode===gn.LINES)m=new Mc(v,A);else if(p.mode===gn.LINE_STRIP)m=new yc(v,A);else if(p.mode===gn.LINE_LOOP)m=new PS(v,A);else if(p.mode===gn.POINTS)m=new LS(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ub(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Ri(m,r),p.extensions&&qi(s,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,_=d.length;f<_;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&qi(s,d[0],r),d[0];const h=new es;r.extensions&&qi(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,_=d.length;f<_;f++)h.add(d[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Zt(hp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new gc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ri(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new et;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){const f=s.channels[d],_=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[_.input]:_.input,A=s.parameters!==void 0?s.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",A)),c.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],_=d[2],v=d[3],p=d[4],m=[];for(let A=0,y=h.length;A<y;A++){const M=h[A],I=f[A],R=_[A],T=v[A],V=p[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=i._createAnimationTracks(M,I,R,T,V);if(E)for(let S=0;S<E.length;S++)m.push(E[S])}return new kS(r,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Bb)});for(let f=0,_=d.length;f<_;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Lp:c.length>1?u=new es:c.length===1?u=c[0]:u=new St,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Ri(u,r),r.extensions&&qi(i,u,r),r.matrix!==void 0){const d=new et;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new es;i.name&&(r.name=s.createUniqueName(i.name)),Ri(r,i),i.extensions&&qi(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of s.associations)(h instanceof Vn||h instanceof It)&&d.set(h,f);return u.traverse(h=>{const f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ti[r.path]===Ti.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Ti[r.path]){case Ti.weights:c=Js;break;case Ti.rotation:c=os;break;case Ti.position:case Ti.scale:c=Qs;break;default:switch(i.itemSize){case 1:c=Js;break;case 2:case 3:default:c=Qs;break}break}const u=s.interpolation!==void 0?Ib[s.interpolation]:Ks,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){const _=new c(l[h]+"."+Ti[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Kl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof os?Lb:kp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Vb(n,e,t){const i=e.attributes,s=new jn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new j(l[0],l[1],l[2]),new j(c[0],c[1],c[2])),a.normalized){const u=Kl(zs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new j,l=new j;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,_=h.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),h.normalized){const v=Kl(zs[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new $n;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function sh(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=ql[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ut.workingColorSpace!==Ot&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Ri(n,e),Vb(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Nb(n,e.targets,t):n})}const rh={type:"change"},bl={type:"start"},oh={type:"end"},Do=new Kr,ah=new wi,Hb=Math.cos(70*hp.DEG2RAD);class zb extends as{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",ve),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(rh),i.update(),r=s.NONE},this.update=function(){const g=new j,P=new Gn().setFromUnitVectors(e.up,new j(0,1,0)),$=P.clone().invert(),ce=new j,xe=new Gn,Me=new j,Re=2*Math.PI;return function(ot=null){const it=i.object.position;g.copy(it).sub(i.target),g.applyQuaternion(P),a.setFromVector3(g),i.autoRotate&&r===s.NONE&&B(S(ot)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let bt=i.minAzimuthAngle,vt=i.maxAzimuthAngle;isFinite(bt)&&isFinite(vt)&&(bt<-Math.PI?bt+=Re:bt>Math.PI&&(bt-=Re),vt<-Math.PI?vt+=Re:vt>Math.PI&&(vt-=Re),bt<=vt?a.theta=Math.max(bt,Math.min(vt,a.theta)):a.theta=a.theta>(bt+vt)/2?Math.max(bt,a.theta):Math.min(vt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ft=!1;if(i.zoomToCursor&&R||i.object.isOrthographicCamera)a.radius=J(a.radius);else{const fn=a.radius;a.radius=J(a.radius*c),Ft=fn!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion($),it.copy(i.target).add(g),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&R){let fn=null;if(i.object.isPerspectiveCamera){const _i=g.length();fn=J(_i*c);const ls=_i-fn;i.object.position.addScaledVector(M,ls),i.object.updateMatrixWorld(),Ft=!!ls}else if(i.object.isOrthographicCamera){const _i=new j(I.x,I.y,0);_i.unproject(i.object);const ls=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ft=ls!==i.object.zoom;const Bi=new j(I.x,I.y,0);Bi.unproject(i.object),i.object.position.sub(Bi).add(_i),i.object.updateMatrixWorld(),fn=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;fn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(fn).add(i.object.position):(Do.origin.copy(i.object.position),Do.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Do.direction))<Hb?e.lookAt(i.target):(ah.setFromNormalAndCoplanarPoint(i.object.up,i.target),Do.intersectPlane(ah,i.target))))}else if(i.object.isOrthographicCamera){const fn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),fn!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ft=!0)}return c=1,R=!1,Ft||ce.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||Me.distanceToSquared(i.target)>o?(i.dispatchEvent(rh),ce.copy(i.object.position),xe.copy(i.object.quaternion),Me.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",we),i.domElement.removeEventListener("pointerdown",F),i.domElement.removeEventListener("pointercancel",z),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",z),i.domElement.getRootNode().removeEventListener("keydown",ye,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ve),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Jd,l=new Jd;let c=1;const u=new j,d=new Oe,h=new Oe,f=new Oe,_=new Oe,v=new Oe,p=new Oe,m=new Oe,A=new Oe,y=new Oe,M=new j,I=new Oe;let R=!1;const T=[],V={};let E=!1;function S(g){return g!==null?2*Math.PI/60*i.autoRotateSpeed*g:2*Math.PI/60/60*i.autoRotateSpeed}function D(g){const P=Math.abs(g*.01);return Math.pow(.95,i.zoomSpeed*P)}function B(g){l.theta-=g}function C(g){l.phi-=g}const X=function(){const g=new j;return function($,ce){g.setFromMatrixColumn(ce,0),g.multiplyScalar(-$),u.add(g)}}(),Q=function(){const g=new j;return function($,ce){i.screenSpacePanning===!0?g.setFromMatrixColumn(ce,1):(g.setFromMatrixColumn(ce,0),g.crossVectors(i.object.up,g)),g.multiplyScalar($),u.add(g)}}(),ie=function(){const g=new j;return function($,ce){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Me=i.object.position;g.copy(Me).sub(i.target);let Re=g.length();Re*=Math.tan(i.object.fov/2*Math.PI/180),X(2*$*Re/xe.clientHeight,i.object.matrix),Q(2*ce*Re/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X($*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),Q(ce*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(g){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(g){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(g,P){if(!i.zoomToCursor)return;R=!0;const $=i.domElement.getBoundingClientRect(),ce=g-$.left,xe=P-$.top,Me=$.width,Re=$.height;I.x=ce/Me*2-1,I.y=-(xe/Re)*2+1,M.set(I.x,I.y,1).unproject(i.object).sub(i.object.position).normalize()}function J(g){return Math.max(i.minDistance,Math.min(i.maxDistance,g))}function me(g){d.set(g.clientX,g.clientY)}function Se(g){q(g.clientX,g.clientX),m.set(g.clientX,g.clientY)}function Ie(g){_.set(g.clientX,g.clientY)}function ae(g){h.set(g.clientX,g.clientY),f.subVectors(h,d).multiplyScalar(i.rotateSpeed);const P=i.domElement;B(2*Math.PI*f.x/P.clientHeight),C(2*Math.PI*f.y/P.clientHeight),d.copy(h),i.update()}function _e(g){A.set(g.clientX,g.clientY),y.subVectors(A,m),y.y>0?K(D(y.y)):y.y<0&&N(D(y.y)),m.copy(A),i.update()}function Ee(g){v.set(g.clientX,g.clientY),p.subVectors(v,_).multiplyScalar(i.panSpeed),ie(p.x,p.y),_.copy(v),i.update()}function be(g){q(g.clientX,g.clientY),g.deltaY<0?N(D(g.deltaY)):g.deltaY>0&&K(D(g.deltaY)),i.update()}function Fe(g){let P=!1;switch(g.code){case i.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,i.keyPanSpeed),P=!0;break;case i.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(0,-i.keyPanSpeed),P=!0;break;case i.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(i.keyPanSpeed,0),P=!0;break;case i.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):ie(-i.keyPanSpeed,0),P=!0;break}P&&(g.preventDefault(),i.update())}function He(g){if(T.length===1)d.set(g.pageX,g.pageY);else{const P=Ge(g),$=.5*(g.pageX+P.x),ce=.5*(g.pageY+P.y);d.set($,ce)}}function je(g){if(T.length===1)_.set(g.pageX,g.pageY);else{const P=Ge(g),$=.5*(g.pageX+P.x),ce=.5*(g.pageY+P.y);_.set($,ce)}}function ee(g){const P=Ge(g),$=g.pageX-P.x,ce=g.pageY-P.y,xe=Math.sqrt($*$+ce*ce);m.set(0,xe)}function L(g){i.enableZoom&&ee(g),i.enablePan&&je(g)}function O(g){i.enableZoom&&ee(g),i.enableRotate&&He(g)}function te(g){if(T.length==1)h.set(g.pageX,g.pageY);else{const $=Ge(g),ce=.5*(g.pageX+$.x),xe=.5*(g.pageY+$.y);h.set(ce,xe)}f.subVectors(h,d).multiplyScalar(i.rotateSpeed);const P=i.domElement;B(2*Math.PI*f.x/P.clientHeight),C(2*Math.PI*f.y/P.clientHeight),d.copy(h)}function se(g){if(T.length===1)v.set(g.pageX,g.pageY);else{const P=Ge(g),$=.5*(g.pageX+P.x),ce=.5*(g.pageY+P.y);v.set($,ce)}p.subVectors(v,_).multiplyScalar(i.panSpeed),ie(p.x,p.y),_.copy(v)}function de(g){const P=Ge(g),$=g.pageX-P.x,ce=g.pageY-P.y,xe=Math.sqrt($*$+ce*ce);A.set(0,xe),y.set(0,Math.pow(A.y/m.y,i.zoomSpeed)),K(y.y),m.copy(A);const Me=(g.pageX+P.x)*.5,Re=(g.pageY+P.y)*.5;q(Me,Re)}function b(g){i.enableZoom&&de(g),i.enablePan&&se(g)}function x(g){i.enableZoom&&de(g),i.enableRotate&&te(g)}function F(g){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(g.pointerId),i.domElement.addEventListener("pointermove",W),i.domElement.addEventListener("pointerup",z)),!tt(g)&&(Ue(g),g.pointerType==="touch"?Pe(g):ne(g)))}function W(g){i.enabled!==!1&&(g.pointerType==="touch"?Te(g):he(g))}function z(g){switch($e(g),T.length){case 0:i.domElement.releasePointerCapture(g.pointerId),i.domElement.removeEventListener("pointermove",W),i.domElement.removeEventListener("pointerup",z),i.dispatchEvent(oh),r=s.NONE;break;case 1:const P=T[0],$=V[P];Pe({pointerId:P,pageX:$.x,pageY:$.y});break}}function ne(g){let P;switch(g.button){case 0:P=i.mouseButtons.LEFT;break;case 1:P=i.mouseButtons.MIDDLE;break;case 2:P=i.mouseButtons.RIGHT;break;default:P=-1}switch(P){case us.DOLLY:if(i.enableZoom===!1)return;Se(g),r=s.DOLLY;break;case us.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(i.enablePan===!1)return;Ie(g),r=s.PAN}else{if(i.enableRotate===!1)return;me(g),r=s.ROTATE}break;case us.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(i.enableRotate===!1)return;me(g),r=s.ROTATE}else{if(i.enablePan===!1)return;Ie(g),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(bl)}function he(g){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ae(g);break;case s.DOLLY:if(i.enableZoom===!1)return;_e(g);break;case s.PAN:if(i.enablePan===!1)return;Ee(g);break}}function re(g){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(g.preventDefault(),i.dispatchEvent(bl),be(ge(g)),i.dispatchEvent(oh))}function ge(g){const P=g.deltaMode,$={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(P){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return g.ctrlKey&&!E&&($.deltaY*=10),$}function ye(g){g.key==="Control"&&(E=!0,i.domElement.getRootNode().addEventListener("keyup",fe,{passive:!0,capture:!0}))}function fe(g){g.key==="Control"&&(E=!1,i.domElement.getRootNode().removeEventListener("keyup",fe,{passive:!0,capture:!0}))}function ve(g){i.enabled===!1||i.enablePan===!1||Fe(g)}function Pe(g){switch(Ne(g),T.length){case 1:switch(i.touches.ONE){case ds.ROTATE:if(i.enableRotate===!1)return;He(g),r=s.TOUCH_ROTATE;break;case ds.PAN:if(i.enablePan===!1)return;je(g),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case ds.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(g),r=s.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;O(g),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(bl)}function Te(g){switch(Ne(g),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;te(g),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;se(g),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;b(g),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;x(g),i.update();break;default:r=s.NONE}}function we(g){i.enabled!==!1&&g.preventDefault()}function Ue(g){T.push(g.pointerId)}function $e(g){delete V[g.pointerId];for(let P=0;P<T.length;P++)if(T[P]==g.pointerId){T.splice(P,1);return}}function tt(g){for(let P=0;P<T.length;P++)if(T[P]==g.pointerId)return!0;return!1}function Ne(g){let P=V[g.pointerId];P===void 0&&(P=new Oe,V[g.pointerId]=P),P.set(g.pageX,g.pageY)}function Ge(g){const P=g.pointerId===T[0]?T[1]:T[0];return V[P]}i.domElement.addEventListener("contextmenu",we),i.domElement.addEventListener("pointerdown",F),i.domElement.addEventListener("pointercancel",z),i.domElement.addEventListener("wheel",re,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ye,{passive:!0,capture:!0}),this.update()}}const jt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Gb={class:"toggle-icon"},Wb={key:0,class:"key-name"},jb={class:"bracket"},$b={key:1,class:"collapsed-info"},Xb={key:0,class:"node-children"},qb={class:"bracket"},Kb={key:0,class:"key-name"},Yb={key:1,class:"buffer-info"},Zb={__name:"JsonNode",props:{data:{type:[Object,Array,String,Number,Boolean],required:!0},keyName:{type:String,default:""},path:{type:String,default:""},expandedKeys:{type:Set,default:()=>new Set},level:{type:Number,default:0}},emits:["select","toggle","selectMeshPrimitive"],setup(n,{emit:e}){const t=n,i=e,s=lt(()=>typeof t.data=="object"&&t.data!==null&&!Array.isArray(t.data)),r=lt(()=>Array.isArray(t.data)),o=lt(()=>t.level===0?t.keyName:t.path||t.keyName),a=lt(()=>t.level===0?!0:t.expandedKeys.has(o.value)),l=lt(()=>typeof t.data=="string"?`"${t.data}"`:typeof t.data=="boolean"?t.data?"true":"false":t.data===null?"null":typeof t.data=="number"?t.data.toString():String(t.data)),c=lt(()=>{const y=typeof t.data;return y==="string"?"string-value":y==="number"?"number-value":y==="boolean"?"boolean-value":t.data===null?"null-value":""}),u=lt(()=>{if(!t.path)return null;if(t.path.includes("accessors")){const y=t.path.match(/accessors\.(\d+)/);if(y&&t.keyName==="bufferView")return{type:"accessor",index:parseInt(y[1]),bufferView:t.data};if(y&&(t.keyName==="byteOffset"||t.keyName==="count"||t.keyName==="componentType"))return{type:"accessor",index:parseInt(y[1]),property:t.keyName}}if(t.path.includes("bufferViews")){const y=t.path.match(/bufferViews\.(\d+)/);if(y)return{type:"bufferView",index:parseInt(y[1])}}return null}),d=lt(()=>u.value!==null),h=lt(()=>{const y=o.value;return/\.?meshes\.\d+$/.test(y)||/\.?meshes\.\d+\.primitives\.\d+$/.test(y)});function f(){i("toggle",o.value,!a.value),_()}function _(){const y=o.value,M=y.match(/\.?meshes\.(\d+)\.primitives\.(\d+)$/);if(M){i("selectMeshPrimitive",parseInt(M[1]),parseInt(M[2]));return}const I=y.match(/\.?meshes\.(\d+)$/);if(I){i("selectMeshPrimitive",parseInt(I[1]),-1);return}}function v(){u.value&&i("select",o.value)}function p(y,M,I){i("select",y,M,I)}function m(y,M){i("toggle",y,M)}function A(y,M){i("selectMeshPrimitive",y,M)}return(y,M)=>{const I=pf("json-node",!0);return k(),G("div",{class:"json-node",style:ui({paddingLeft:n.level*16+"px"})},[s.value||r.value?(k(),G(ke,{key:0},[U("div",{class:Tt(["node-header",{expandable:!0,expanded:a.value,"mesh-primitive-node":h.value}]),onClick:f},[U("span",Gb,Z(a.value?"▼":"▶"),1),n.keyName?(k(),G("span",Wb,'"'+Z(n.keyName)+'":',1)):pe("",!0),U("span",jb,Z(r.value?"[":"{"),1),a.value?pe("",!0):(k(),G("span",$b,Z(r.value?`${n.data.length} items`:`${Object.keys(n.data).length} keys`)+" "+Z(r.value?"]":"}"),1))],2),a.value?(k(),G("div",Xb,[(k(!0),G(ke,null,st(n.data,(R,T)=>(k(),is(I,{key:T,data:R,"key-name":String(T),path:o.value+"."+T,"expanded-keys":n.expandedKeys,level:n.level+1,onSelect:p,onToggle:m,onSelectMeshPrimitive:A},null,8,["data","key-name","path","expanded-keys","level"]))),128)),U("div",{class:"node-footer",style:ui({paddingLeft:n.level*16+"px"})},[U("span",qb,Z(r.value?"]":"}"),1)],4)])):pe("",!0)],64)):(k(),G("div",{key:1,class:Tt(["node-value",{clickable:d.value}]),onClick:v},[n.keyName?(k(),G("span",Kb,'"'+Z(n.keyName)+'":',1)):pe("",!0),U("span",{class:Tt(c.value)},Z(l.value),3),u.value?(k(),G("span",Yb," [offset: "+Z(u.value.byteOffset)+", length: "+Z(u.value.byteLength)+"] ",1)):pe("",!0)],2))],4)}}},Jb=jt(Zb,[["__scopeId","data-v-afdbc8e0"]]),Qb={class:"json-tree"},eE={__name:"JsonTree",props:{data:{type:[Object,Array,String,Number,Boolean],default:null},expandedKeys:{type:Set,default:()=>new Set}},emits:["select","toggle","selectMeshPrimitive"],setup(n,{emit:e}){const t=e;function i(o,a,l){t("select",o,a,l)}function s(o,a){t("toggle",o,a)}function r(o,a){t("selectMeshPrimitive",o,a)}return(o,a)=>(k(),G("div",Qb,[_t(Jb,{data:n.data,"key-name":"",path:"","expanded-keys":n.expandedKeys,level:0,onSelect:i,onToggle:s,onSelectMeshPrimitive:r},null,8,["data","expanded-keys"])]))}},tE=jt(eE,[["__scopeId","data-v-722e1c63"]]),nE="modulepreload",iE=function(n,e){return new URL(n,e).href},lh={},sE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=iE(c,i),c in lh)return;lh[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const v=o[_];if(v.href===c&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":nE,u||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),u)return new Promise((_,v)=>{f.addEventListener("load",_),f.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function In(n){return"0x"+n.toString(16).padStart(8,"0").toUpperCase()}function rE(n){return n>=32&&n<=126?String.fromCharCode(n):"."}function ch(n){return{5120:1,5121:1,5122:2,5123:2,5125:4,5126:4}[n]||1}function uh(n){return{SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16}[n]||1}function oE(n){return{5120:"INT8",5121:"UINT8",5122:"INT16",5123:"UINT16",5125:"UINT32",5126:"FLOAT32"}[n]||"UNKNOWN"}function Vp(n,e,t=16){const i=[],s=[];for(let a=0;a<t;a++){const l=e+a;if(l<n.length){const c=n[l];i.push(c.toString(16).padStart(2,"0").toUpperCase()),s.push(rE(c))}else i.push("  "),s.push(" ")}const r=i.join(" "),o=s.join("");return{offset:e,hexString:r,asciiString:o}}function aE(n,e,t,i=16){if(!n)return[];const s=[],r=Math.floor(e/i),o=Math.ceil(t/i);for(let a=r;a<o;a++){const l=a*i;s.push(Vp(n,l,i))}return s}function El(n,e,t=1600){const i=[];let s=n;for(;s<e;){const r=Math.min(s+t,e);i.push({start:s,end:r,label:`${In(s)} - ${In(r)} (${Math.ceil((r-s)/16)} rows)`}),s=r}return i}const lE={class:"row-offset"},cE={class:"row-hex-container"},uE=["innerHTML"],dE={class:"row-ascii-container"},hE=["innerHTML"],fE={__name:"HexRow",props:{row:{type:Object,required:!0},highlighted:{type:Boolean,default:!1}},emits:["click","hover"],setup(n,{emit:e}){const t=n,i=e,s=De(-1),r=De(null),o=De(null);function a(v){i("click",t.row.offset,v)}function l(v){const p=v.target,m=p.getBoundingClientRect(),A=p.parentElement.getBoundingClientRect(),y=v.clientX-A.left,M=m.left-A.left,I=d(y-M,m.width);I!==-1?(s.value=I,i("hover",t.row.offset+I)):(s.value=-1,i("hover",-1))}function c(v){const p=v.target,m=p.getBoundingClientRect(),A=p.parentElement.getBoundingClientRect(),y=v.clientX-A.left,M=m.left-A.left,I=h(y-M,m.width);I!==-1?(s.value=I,i("hover",t.row.offset+I)):(s.value=-1,i("hover",-1))}function u(){s.value=-1,i("hover",-1)}function d(v,p){if(v<0)return-1;const A=p/16,y=Math.floor(v/A);return y<16?y:-1}function h(v,p){if(v<0)return-1;const m=p/16,A=Math.floor(v/m);return A<16?A:-1}const f=lt(()=>{if(s.value===-1||!r.value)return{};const p=r.value.offsetWidth/16,m=s.value*p+"px",A=p+"px";return{left:m,width:A}}),_=lt(()=>{if(s.value===-1||!o.value)return{};const p=o.value.offsetWidth/16,m=s.value*p+"px",A=p+"px";return{left:m,width:A}});return(v,p)=>(k(),G("div",{class:Tt(["hex-row",{highlighted:n.highlighted}]),onClick:a},[U("span",lE,Z(da(In)(n.row.offset)),1),U("div",cE,[U("span",{ref_key:"hexSpanRef",ref:r,class:Tt(["row-hex",{highlighted:n.highlighted}]),innerHTML:n.row.hexString,onMousemove:l,onMouseleave:u},null,42,uE),s.value!==-1?(k(),G("div",{key:0,class:"hex-highlight",style:ui(f.value)},null,4)):pe("",!0)]),U("div",dE,[U("span",{ref_key:"asciiSpanRef",ref:o,class:Tt(["row-ascii",{highlighted:n.highlighted}]),innerHTML:n.row.asciiString,onMousemove:c,onMouseleave:u},null,42,hE),s.value!==-1?(k(),G("div",{key:0,class:"ascii-highlight",style:ui(_.value)},null,4)):pe("",!0)])],2))}},Hp=jt(fE,[["__scopeId","data-v-3608f2a5"]]),pE={class:"hex-group"},mE={class:"toggle-icon"},gE={class:"group-label"},_E={key:0,class:"group-content"},vE=["onClick"],xE={class:"toggle-icon"},yE={class:"subgroup-label"},ME={key:0,class:"subgroup-content"},SE={__name:"HexGroup",props:{group:{type:Object,required:!0},data:{type:Uint8Array,default:null},highlightRange:{type:Object,default:()=>({start:-1,end:-1})},forceExpand:{type:Boolean,default:!1}},emits:["rowClick","rowHover"],setup(n,{emit:e}){const t=n,i=e,s=De(!1),r=De({});ns(()=>t.forceExpand,h=>{h&&(s.value=!0,t.group.subGroups&&t.group.subGroups.length>0&&(r.value[0]=!0))});function o(){s.value=!s.value}function a(h){r.value[h]=!r.value[h]}function l(h,f){return aE(t.data,h,f)}function c(h){if(t.highlightRange.start<0)return!1;const f=h+16;return t.highlightRange.start<f&&t.highlightRange.end>h}function u(h,f){i("rowClick",h,f)}function d(h){i("rowHover",h)}return(h,f)=>(k(),G("div",pE,[U("div",{class:"group-header",onClick:o},[U("span",mE,Z(s.value?"▼":"▶"),1),U("span",gE,Z(n.group.label),1)]),s.value?(k(),G("div",_E,[(k(!0),G(ke,null,st(n.group.subGroups,(_,v)=>(k(),G("div",{key:v,class:"hex-subgroup"},[U("div",{class:"subgroup-header",onClick:p=>a(v)},[U("span",xE,Z(r.value[v]?"▼":"▶"),1),U("span",yE,Z(_.label),1)],8,vE),r.value[v]?(k(),G("div",ME,[(k(!0),G(ke,null,st(l(_.start,_.end),(p,m)=>(k(),is(Hp,{key:m,row:p,highlighted:c(p.offset),onClick:u,onHover:d},null,8,["row","highlighted"]))),128))])):pe("",!0)]))),128))])):pe("",!0)]))}},Tl=jt(SE,[["__scopeId","data-v-1e4ed79f"]]),bE={class:"hex-viewer"},EE={key:0,class:"hex-groups"},TE={key:0,class:"group-category"},AE={key:1,class:"group-category"},wE={key:2,class:"group-category"},RE={key:1,class:"hex-rows"},CE={class:"tip-header"},PE={class:"tip-title"},LE={class:"tip-content"},IE={key:0,class:"tip-source"},DE={key:0,class:"source-label"},NE={key:1,class:"source-label"},UE={key:1,class:"tip-section"},OE={class:"tip-label"},FE={class:"tip-value"},BE={key:0},kE={key:1},VE={key:2,class:"tip-section"},HE={class:"tip-label"},zE={class:"tip-value"},GE=20,xr=16,WE={__name:"HexViewer",props:{data:{type:Uint8Array,default:null},highlightRange:{type:Object,default:()=>({start:-1,end:-1})},jsonObject:{type:Object,default:()=>({})},expandedAccessorIndices:{type:Array,default:()=>[]}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=De(null),r=De(null),o=De(-1),a=De(!1),l=De(0),c=De({}),u=De({}),d=De(null),h=lt(()=>t.data?Math.ceil(t.data.length/xr):0),f=lt(()=>{if(!t.data)return[];const D=[];for(let B=0;B<h.value;B++)D.push(Vp(t.data,B*xr,xr));return D});function _(D){if(t.highlightRange.start<0)return!1;const B=D+xr;return t.highlightRange.start<B&&t.highlightRange.end>D}function v(D,B){o.value=D,i("select",D),m(D,B)}function p(D){console.log("Hovered byte:",D)}function m(D,B){t.data&&(l.value=D,c.value=M(D),d.value=B.target.getBoundingClientRect(),a.value=!0,sE(async()=>{const{nextTick:C}=await Promise.resolve().then(()=>$g);return{nextTick:C}},void 0,import.meta.url).then(({nextTick:C})=>{C(()=>A())}))}function A(){if(!r.value||!d.value)return;const D=d.value,B=400,X=r.value.offsetHeight||150;let Q=D.top-X-5,ie=D.left;Q<0&&(Q=D.bottom+5),ie+B>window.innerWidth&&(ie=window.innerWidth-B-10),ie<0&&(ie=10),Q+X>window.innerHeight&&(Q=window.innerHeight-X-10),u.value={position:"fixed",top:`${Q}px`,left:`${ie}px`,zIndex:999999}}function y(D){if(!t.jsonObject)return null;if(t.jsonObject.accessors&&t.jsonObject.bufferViews)for(let B=0;B<t.jsonObject.accessors.length;B++){const C=t.jsonObject.accessors[B];if(C.bufferView!==void 0){const X=t.jsonObject.bufferViews[C.bufferView];if(X){const Q=(X.byteOffset||0)+(C.byteOffset||0),ie=ch(C.componentType),K=uh(C.type),N=ie*K*C.count,q=Q+N;if(D>=Q&&D<q)return{type:"accessor",index:B,accessorType:C.type,componentType:C.componentType,componentSize:ie,componentCount:K}}}}if(t.jsonObject.bufferViews)for(let B=0;B<t.jsonObject.bufferViews.length;B++){const C=t.jsonObject.bufferViews[B],X=C.byteOffset||0,Q=X+C.byteLength;if(D>=X&&D<Q)return{type:"bufferView",index:B,byteLength:C.byteLength}}return null}function M(D){if(!t.data||D+16>t.data.length)return{};const B=y(D),C={dataType:B};if(!B){const X=[];for(let Q=0;Q<16&&D+Q<t.data.length;Q++){const ie=new DataView(t.data.buffer,t.data.byteOffset+D+Q,1);X.push(ie.getInt8(0))}return C.int8=X,C.typeName="INT8",C}if(B.type==="accessor"){const X=[],Q=B.componentSize,ie=Math.floor(16/Q);for(let K=0;K<ie&&D+(K+1)*Q<=t.data.length;K++){const N=t.data.byteOffset+D+K*Q;switch(B.componentType){case 5120:X.push(new DataView(t.data.buffer,N,1).getInt8(0));break;case 5121:X.push(new DataView(t.data.buffer,N,1).getUint8(0));break;case 5122:X.push(new DataView(t.data.buffer,N,2).getInt16(0,!0));break;case 5123:X.push(new DataView(t.data.buffer,N,2).getUint16(0,!0));break;case 5125:X.push(new DataView(t.data.buffer,N,4).getUint32(0,!0));break;case 5126:X.push(new DataView(t.data.buffer,N,4).getFloat32(0,!0));break}}C.values=X,C.typeName=oE(B.componentType),C.accessorType=B.accessorType,C.componentCount=B.componentCount}else if(B.type==="bufferView"){const X=[];for(let Q=0;Q<16&&D+Q<t.data.length;Q++)X.push(t.data[D+Q]);C.values=X,C.typeName="UINT8"}return C}function I(){a.value=!1}const R=lt(()=>t.jsonObject&&(t.jsonObject.bufferViews||t.jsonObject.accessors)),T=lt(()=>t.jsonObject.bufferViews?t.jsonObject.bufferViews.map((D,B)=>{const C=D.byteOffset||0,X=C+D.byteLength;return{label:`BufferView ${B} (${In(C)} - ${In(X)})`,start:C,end:X,subGroups:El(C,X)}}):[]),V=lt(()=>!t.jsonObject.accessors||!t.jsonObject.bufferViews?[]:t.jsonObject.accessors.map((D,B)=>{if(D.bufferView!==void 0){const C=t.jsonObject.bufferViews[D.bufferView];if(C){const X=(C.byteOffset||0)+(D.byteOffset||0),Q=ch(D.componentType),ie=uh(D.type),K=Q*ie*D.count,N=X+K;return{label:`Accessor ${B} (${D.type}) - ${In(X)} - ${In(N)}`,start:X,end:N,subGroups:El(X,N)}}}return null}).filter(Boolean)),E=lt(()=>{if(!t.data)return[];const D=[];t.jsonObject.bufferViews&&t.jsonObject.bufferViews.forEach(N=>{const q=N.byteOffset||0,J=q+N.byteLength;D.push({start:q,end:J})}),D.sort((N,q)=>N.start-q.start);const B=[];let C=null;for(const N of D)C?N.start<=C.end?C.end=Math.max(C.end,N.end):(B.push(C),C={...N}):C={...N};C&&B.push(C);let X=0;const Q=[];for(const N of B)N.start>X&&Q.push({start:X,end:N.start}),X=N.end;if(X<t.data.length&&Q.push({start:X,end:t.data.length}),Q.length===0)return[];const ie=Q[0].start,K=Q[Q.length-1].end;return{label:`Other Data (${In(ie)} - ${In(K)})`,start:ie,end:K,subGroups:El(ie,K)}});ns(()=>t.highlightRange,D=>{if(D.start>=0&&s.value){const C=Math.floor(D.start/xr)*GE;s.value.scrollTop=C-s.value.clientHeight/2}},{immediate:!0}),ma(()=>{s.value&&(s.value.scrollTop=0),document.addEventListener("click",S)});function S(D){const B=document.querySelector(".data-tip");B&&!B.contains(D.target)&&!D.target.closest(".hex-row")&&I()}return jr(()=>{document.removeEventListener("click",S)}),(D,B)=>(k(),G("div",bE,[B[3]||(B[3]=U("div",{class:"hex-header"},[U("span",{class:"header-offset"},"Offset"),U("span",{class:"header-hex"},"00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F"),U("span",{class:"header-ascii"},"ASCII")],-1)),U("div",{class:"hex-content",ref_key:"contentRef",ref:s},[R.value?(k(),G("div",EE,[V.value.length>0?(k(),G("div",TE,[B[0]||(B[0]=U("h4",null,"Accessors",-1)),(k(!0),G(ke,null,st(V.value,(C,X)=>(k(),is(Tl,{key:`accessor_${X}`,group:C,data:t.data,"highlight-range":t.highlightRange,"force-expand":t.expandedAccessorIndices.includes(X),onRowClick:v,onRowHover:p},null,8,["group","data","highlight-range","force-expand"]))),128))])):pe("",!0),T.value.length>0?(k(),G("div",AE,[B[1]||(B[1]=U("h4",null,"BufferViews",-1)),(k(!0),G(ke,null,st(T.value,(C,X)=>(k(),is(Tl,{key:`bufferView_${X}`,group:C,data:t.data,"highlight-range":t.highlightRange,onRowClick:v,onRowHover:p},null,8,["group","data","highlight-range"]))),128))])):pe("",!0),E.value.subGroups?(k(),G("div",wE,[B[2]||(B[2]=U("h4",null,"Other Data",-1)),_t(Tl,{group:E.value,data:t.data,"highlight-range":t.highlightRange,onRowClick:v,onRowHover:p},null,8,["group","data","highlight-range"])])):pe("",!0)])):(k(),G("div",RE,[(k(!0),G(ke,null,st(f.value,(C,X)=>(k(),is(Hp,{key:X,row:C,highlighted:_(C.offset),onClick:v,onHover:p},null,8,["row","highlighted"]))),128))]))],512),a.value?(k(),G("div",{key:0,ref_key:"tipRef",ref:r,class:"data-tip",style:ui(u.value)},[U("div",CE,[U("span",PE,"Row Data ("+Z(da(In)(l.value))+")",1),U("button",{class:"tip-close",onClick:I},"×")]),U("div",LE,[c.value.dataType?(k(),G("div",IE,[c.value.dataType.type==="accessor"?(k(),G("span",DE," Accessor "+Z(c.value.dataType.index)+" ("+Z(c.value.accessorType)+") ",1)):c.value.dataType.type==="bufferView"?(k(),G("span",NE," BufferView "+Z(c.value.dataType.index),1)):pe("",!0)])):pe("",!0),c.value.values&&c.value.values.length>0?(k(),G("div",UE,[U("div",OE,Z(c.value.typeName)+"["+Z(c.value.values.length)+"]:",1),U("div",FE,[c.value.typeName==="FLOAT32"?(k(),G("span",BE,Z(c.value.values.map(C=>typeof C=="number"?C.toFixed(6):C).join(", ")),1)):(k(),G("span",kE,Z(c.value.values.join(", ")),1))])])):c.value.int8&&c.value.int8.length>0?(k(),G("div",VE,[U("div",HE,"INT8["+Z(c.value.int8.length)+"]:",1),U("div",zE,Z(c.value.int8.join(", ")),1)])):pe("",!0)])],4)):pe("",!0)]))}},jE=jt(WE,[["__scopeId","data-v-2bbf0483"]]),$E={class:"metadata-schema"},XE={key:0,class:"info-row"},qE={class:"value"},KE={key:1,class:"metadata-subsection"},YE={class:"class-header"},ZE={key:0,class:"class-description"},JE={key:1,class:"class-properties"},QE={class:"property-header"},eT={class:"property-details"},tT={class:"badge"},nT={key:0,class:"badge"},iT={key:1,class:"badge required"},sT={key:0,class:"property-description"},rT={key:1,class:"info-row"},oT={class:"value"},aT={key:2,class:"info-row"},lT={class:"value"},cT={key:3,class:"info-row"},uT={class:"value"},dT={key:4,class:"info-row"},hT={class:"value"},fT={__name:"StructuralMetadataSchema",props:{schema:{type:Object,required:!0},formatValue:{type:Function,required:!0}},setup(n){return(e,t)=>(k(),G("div",$E,[n.schema.id?(k(),G("div",XE,[t[0]||(t[0]=U("span",{class:"label"},"ID:",-1)),U("span",qE,Z(n.schema.id),1)])):pe("",!0),Object.keys(n.schema.classes).length>0?(k(),G("div",KE,[t[5]||(t[5]=U("h6",null,"Classes",-1)),(k(!0),G(ke,null,st(n.schema.classes,(i,s)=>(k(),G("div",{key:s,class:"metadata-class"},[U("div",YE,Z(i.name||s),1),i.description?(k(),G("div",ZE,Z(i.description),1)):pe("",!0),Object.keys(i.properties).length>0?(k(),G("div",JE,[(k(!0),G(ke,null,st(i.properties,(r,o)=>(k(),G("div",{key:o,class:"property-item"},[U("div",QE,Z(r.name||o),1),U("div",eT,[U("span",tT,Z(r.type),1),r.componentType?(k(),G("span",nT,Z(r.componentType),1)):pe("",!0),r.required?(k(),G("span",iT,"Required")):pe("",!0)]),r.description?(k(),G("div",sT,Z(r.description),1)):pe("",!0),r.default!==null?(k(),G("div",rT,[t[1]||(t[1]=U("span",{class:"label"},"Default:",-1)),U("span",oT,Z(n.formatValue(r.default,r.type)),1)])):pe("",!0),r.min!==null?(k(),G("div",aT,[t[2]||(t[2]=U("span",{class:"label"},"Min:",-1)),U("span",lT,Z(r.min),1)])):pe("",!0),r.max!==null?(k(),G("div",cT,[t[3]||(t[3]=U("span",{class:"label"},"Max:",-1)),U("span",uT,Z(r.max),1)])):pe("",!0),r.enumType?(k(),G("div",dT,[t[4]||(t[4]=U("span",{class:"label"},"Enum:",-1)),U("span",hT,Z(r.enumType),1)])):pe("",!0)]))),128))])):pe("",!0)]))),128))])):pe("",!0)]))}},pT=jt(fT,[["__scopeId","data-v-d71a3118"]]),mT={class:"metadata-enums"},gT={class:"enum-header"},_T={key:0,class:"enum-description"},vT={class:"enum-values"},xT={class:"value-name"},yT={class:"value-number"},MT={key:0,class:"value-description"},ST={__name:"StructuralMetadataEnums",props:{enums:{type:Object,required:!0}},setup(n){return(e,t)=>(k(),G("div",mT,[(k(!0),G(ke,null,st(n.enums,(i,s)=>(k(),G("div",{key:s,class:"metadata-enum"},[U("div",gT,Z(i.name||s),1),i.description?(k(),G("div",_T,Z(i.description),1)):pe("",!0),U("div",vT,[(k(!0),G(ke,null,st(i.values,(r,o)=>(k(),G("div",{key:o,class:"enum-value"},[U("span",xT,Z(r.name||o),1),U("span",yT,": "+Z(r.value),1),r.description?(k(),G("div",MT,Z(r.description),1)):pe("",!0)]))),128))])]))),128))]))}},bT=jt(ST,[["__scopeId","data-v-6e233898"]]),ET={class:"metadata-property-tables"},TT={class:"table-header"},AT={class:"info-row"},wT={class:"value"},RT={class:"info-row"},CT={class:"value"},PT={key:0,class:"table-properties"},LT={class:"property-name"},IT={class:"property-value"},DT={__name:"StructuralMetadataPropertyTables",props:{propertyTables:{type:Array,required:!0}},setup(n){return(e,t)=>(k(),G("div",ET,[(k(!0),G(ke,null,st(n.propertyTables,(i,s)=>(k(),G("div",{key:s,class:"metadata-table"},[U("div",TT,Z(i.name),1),U("div",AT,[t[0]||(t[0]=U("span",{class:"label"},"Class:",-1)),U("span",wT,Z(i.class),1)]),U("div",RT,[t[1]||(t[1]=U("span",{class:"label"},"Count:",-1)),U("span",CT,Z(i.count),1)]),Object.keys(i.properties).length>0?(k(),G("div",PT,[(k(!0),G(ke,null,st(i.properties,(r,o)=>(k(),G("div",{key:o,class:"table-property"},[U("span",LT,Z(o),1),U("span",IT,Z(r),1)]))),128))])):pe("",!0)]))),128))]))}},NT=jt(DT,[["__scopeId","data-v-802391fe"]]),UT={class:"metadata-property-attributes"},OT={class:"attribute-header"},FT={class:"info-row"},BT={class:"value"},kT={class:"info-row"},VT={class:"value"},HT={key:0,class:"attribute-properties"},zT={class:"property-name"},GT={class:"property-value"},WT={__name:"StructuralMetadataPropertyAttributes",props:{propertyAttributes:{type:Array,required:!0}},setup(n){return(e,t)=>(k(),G("div",UT,[(k(!0),G(ke,null,st(n.propertyAttributes,(i,s)=>(k(),G("div",{key:s,class:"metadata-attribute"},[U("div",OT,Z(i.name),1),U("div",FT,[t[0]||(t[0]=U("span",{class:"label"},"Class:",-1)),U("span",BT,Z(i.class),1)]),U("div",kT,[t[1]||(t[1]=U("span",{class:"label"},"Attribute:",-1)),U("span",VT,Z(i.attribute),1)]),Object.keys(i.properties).length>0?(k(),G("div",HT,[(k(!0),G(ke,null,st(i.properties,(r,o)=>(k(),G("div",{key:o,class:"attribute-property"},[U("span",zT,Z(o),1),U("span",GT,Z(r),1)]))),128))])):pe("",!0)]))),128))]))}},jT=jt(WT,[["__scopeId","data-v-be0b1161"]]),$T={class:"metadata-property-textures"},XT={class:"texture-header"},qT={class:"info-row"},KT={class:"value"},YT={key:0,class:"texture-properties"},ZT={class:"property-name"},JT={class:"property-value"},QT={__name:"StructuralMetadataPropertyTextures",props:{propertyTextures:{type:Array,required:!0}},setup(n){return(e,t)=>(k(),G("div",$T,[(k(!0),G(ke,null,st(n.propertyTextures,(i,s)=>(k(),G("div",{key:s,class:"metadata-texture"},[U("div",XT,Z(i.name),1),U("div",qT,[t[0]||(t[0]=U("span",{class:"label"},"Class:",-1)),U("span",KT,Z(i.class),1)]),Object.keys(i.properties).length>0?(k(),G("div",YT,[(k(!0),G(ke,null,st(i.properties,(r,o)=>(k(),G("div",{key:o,class:"texture-property"},[U("span",ZT,Z(o),1),U("span",JT,Z(r),1)]))),128))])):pe("",!0)]))),128))]))}},eA=jt(QT,[["__scopeId","data-v-0a799baa"]]),tA={key:0,class:"data-section"},nA={class:"toggle-icon"},iA={key:0,class:"section-content"},sA={key:0,class:"metadata-section"},rA={key:0,class:"metadata-subsection"},oA={key:1,class:"metadata-section"},aA={key:2,class:"metadata-section"},lA={key:3,class:"metadata-section"},cA={__name:"StructuralMetadataView",props:{structuralMetadata:{type:Object,default:null},expandedSections:{type:Object,required:!0},formatValue:{type:Function,required:!0}},emits:["toggleSection"],setup(n,{emit:e}){const t=n,i=e;function s(o){i("toggleSection",o)}function r(o){return t.expandedSections.has(o)}return(o,a)=>n.structuralMetadata?(k(),G("section",tA,[U("h4",{onClick:a[0]||(a[0]=l=>s("structuralMetadata"))},[U("span",nA,Z(r("structuralMetadata")?"▼":"▶"),1),a[1]||(a[1]=Dt(" Structural Metadata (EXT_structural_metadata) ",-1))]),r("structuralMetadata")?(k(),G("div",iA,[n.structuralMetadata.schema?(k(),G("div",sA,[a[3]||(a[3]=U("h5",null,"Schema",-1)),_t(pT,{schema:n.structuralMetadata.schema,"format-value":n.formatValue},null,8,["schema","format-value"]),n.structuralMetadata.schema.enums&&Object.keys(n.structuralMetadata.schema.enums).length>0?(k(),G("div",rA,[a[2]||(a[2]=U("h6",null,"Enums",-1)),_t(bT,{enums:n.structuralMetadata.schema.enums},null,8,["enums"])])):pe("",!0)])):pe("",!0),n.structuralMetadata.propertyTables&&n.structuralMetadata.propertyTables.length>0?(k(),G("div",oA,[a[4]||(a[4]=U("h5",null,"Property Tables",-1)),_t(NT,{"property-tables":n.structuralMetadata.propertyTables},null,8,["property-tables"])])):pe("",!0),n.structuralMetadata.propertyAttributes&&n.structuralMetadata.propertyAttributes.length>0?(k(),G("div",aA,[a[5]||(a[5]=U("h5",null,"Property Attributes",-1)),_t(jT,{"property-attributes":n.structuralMetadata.propertyAttributes},null,8,["property-attributes"])])):pe("",!0),n.structuralMetadata.propertyTextures&&n.structuralMetadata.propertyTextures.length>0?(k(),G("div",lA,[a[6]||(a[6]=U("h5",null,"Property Textures",-1)),_t(eA,{"property-textures":n.structuralMetadata.propertyTextures},null,8,["property-textures"])])):pe("",!0)])):pe("",!0)])):pe("",!0)}},uA=jt(cA,[["__scopeId","data-v-be930127"]]),dA={key:0,class:"data-section"},hA={class:"toggle-icon"},fA={key:0,class:"section-content"},pA=["onClick"],mA={class:"item-header"},gA={class:"header-index"},_A={class:"badge"},vA={class:"badge"},xA={class:"item-detail"},yA={key:0,class:"item-detail"},MA={key:1,class:"item-detail"},SA={class:"usage-badge"},bA={key:0,class:"usage-detail"},EA={key:1,class:"usage-detail"},TA=["onClick"],AA={class:"toggle-icon"},wA={key:0,class:"accessor-data-content"},RA={key:0,class:"accessor-data-grid"},CA={class:"item-index"},PA={class:"item-value"},LA={key:1,class:"accessor-data-groups"},IA=["onClick"],DA={class:"toggle-icon"},NA={class:"group-label"},UA={key:0,class:"group-content"},OA=["onClick"],FA={class:"toggle-icon"},BA={class:"subgroup-label"},kA={key:0,class:"subgroup-content"},VA={class:"item-index"},HA={class:"item-value"},zA={class:"item-index"},GA={class:"item-value"},WA={__name:"AccessorsView",props:{accessors:{type:Array,required:!0},binaryData:{type:Uint8Array,default:null},jsonObject:{type:Object,default:()=>({})},selectedType:{type:String,default:"all"},selectedIndex:{type:Number,default:-1},expandedSections:{type:Object,required:!0},expandedGroups:{type:Object,required:!0},expandedSubGroups:{type:Object,required:!0}},emits:["select","toggleSection"],setup(n,{emit:e}){const t=n,i=e;function s(M){i("toggleSection",M)}function r(M){return t.expandedSections.has(M)}function o(M){const I=t.accessors[M];if(!I)return;let R=0,T=0;if(I.bufferView!==void 0&&t.jsonObject.bufferViews){const V=t.jsonObject.bufferViews[I.bufferView];if(V){R=(V.byteOffset||0)+(I.byteOffset||0);const E=u(I.componentType),S=d(I.type);T=E*S*I.count}}t.expandedSections.add(`accessor_${M}`),i("select","accessor",M,R,T)}function a(M){const I=`accessor_${M}`;t.expandedSections.has(I)?t.expandedSections.delete(I):t.expandedSections.add(I)}function l(M){const I=t.accessors[M];if(!I||!t.binaryData)return[];let R=0;if(I.bufferView!==void 0&&t.jsonObject.bufferViews){const T=t.jsonObject.bufferViews[I.bufferView];T&&(R=(T.byteOffset||0)+(I.byteOffset||0))}return h(I,R,t.binaryData)}function c(M){return{5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"}[M]||`TYPE_${M}`}function u(M){return{5120:1,5121:1,5122:2,5123:2,5125:4,5126:4}[M]||1}function d(M){return{SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16}[M]||1}function h(M,I,R){if(!R||!R.buffer)return[];u(M.componentType);const T=d(M.type),V=[],E=(R.byteOffset||0)+I;let S;switch(M.componentType){case 5120:S=new Int8Array(R.buffer,E,M.count*T);break;case 5121:S=new Uint8Array(R.buffer,E,M.count*T);break;case 5122:S=new Int16Array(R.buffer,E,M.count*T);break;case 5123:S=new Uint16Array(R.buffer,E,M.count*T);break;case 5125:S=new Uint32Array(R.buffer,E,M.count*T);break;case 5126:S=new Float32Array(R.buffer,E,M.count*T);break;default:return V}for(let D=0;D<M.count;D++){const B=[];for(let C=0;C<T;C++)B.push(S[D*T+C]);V.push(B)}return V}function f(M,I){if(!Array.isArray(M))return M.toString();switch(I){case"SCALAR":return M[0].toString();case"VEC2":return`[${M[0].toFixed(4)}, ${M[1].toFixed(4)}]`;case"VEC3":return`[${M[0].toFixed(4)}, ${M[1].toFixed(4)}, ${M[2].toFixed(4)}]`;case"VEC4":return`[${M[0].toFixed(4)}, ${M[1].toFixed(4)}, ${M[2].toFixed(4)}, ${M[3].toFixed(4)}]`;case"MAT2":return`[[${M[0].toFixed(4)}, ${M[1].toFixed(4)}], [${M[2].toFixed(4)}, ${M[3].toFixed(4)}]]`;case"MAT3":return`[[${M[0].toFixed(4)}, ${M[1].toFixed(4)}, ${M[2].toFixed(4)}], [${M[3].toFixed(4)}, ${M[4].toFixed(4)}, ${M[5].toFixed(4)}], [${M[6].toFixed(4)}, ${M[7].toFixed(4)}, ${M[8].toFixed(4)}]]`;case"MAT4":return`[[${M[0].toFixed(4)}, ${M[1].toFixed(4)}, ${M[2].toFixed(4)}, ${M[3].toFixed(4)}], [${M[4].toFixed(4)}, ${M[5].toFixed(4)}, ${M[6].toFixed(4)}, ${M[7].toFixed(4)}], [${M[8].toFixed(4)}, ${M[9].toFixed(4)}, ${M[10].toFixed(4)}, ${M[11].toFixed(4)}], [${M[12].toFixed(4)}, ${M[13].toFixed(4)}, ${M[14].toFixed(4)}, ${M[15].toFixed(4)}]]`;default:return M.toString()}}function _(M){const I=t.accessors[M];if(!I)return[];const R=[],T=I.count;if(T>1e4){const S=Math.ceil(T/1e3);for(let D=0;D<S;D++){const B=D*1e3,C=Math.min((D+1)*1e3,T),X=[],Q=Math.ceil((C-B)/100);for(let ie=0;ie<Q;ie++){const K=B+ie*100,N=Math.min(K+100,C);X.push({start:K,end:N,label:`[${K}...${N-1}] (${N-K} items)`})}R.push({start:B,end:C,label:`[${B}...${C-1}] (${C-B} items)`,subGroups:X})}}else if(T>100){const E=Math.ceil(T/100);for(let S=0;S<E;S++){const D=S*100,B=Math.min((S+1)*100,T);R.push({start:D,end:B,label:`[${D}...${B-1}] (${B-D} items)`,subGroups:null})}}else R.push({start:0,end:T,label:`[0...${T-1}] (${T} items)`,subGroups:null});return R}function v(M,I){const R=`${M}_${I}`;return t.expandedGroups.has(R)}function p(M,I){const R=`${M}_${I}`;t.expandedGroups.has(R)?t.expandedGroups.delete(R):t.expandedGroups.add(R)}function m(M,I,R){const T=`${M}_${I}_${R}`;return t.expandedSubGroups.has(T)}function A(M,I,R){const T=`${M}_${I}_${R}`;t.expandedSubGroups.has(T)?t.expandedSubGroups.delete(T):t.expandedSubGroups.add(T)}function y(M,I,R){return l(M).slice(I,R)}return(M,I)=>n.accessors.length>0?(k(),G("section",dA,[U("h4",{onClick:I[0]||(I[0]=R=>s("accessors"))},[U("span",hA,Z(r("accessors")?"▼":"▶"),1),Dt(" Accessors ("+Z(n.accessors.length)+") ",1)]),r("accessors")?(k(),G("div",fA,[(k(!0),G(ke,null,st(n.accessors,(R,T)=>(k(),G("div",{key:T,class:Tt(["item-card",{selected:n.selectedType==="accessor"&&n.selectedIndex===T}]),onClick:V=>o(T)},[U("div",mA,[U("span",gA,"Accessor "+Z(T),1),U("span",_A,Z(R.type),1),U("span",vA,Z(c(R.componentType)),1),U("span",xA,"Num: "+Z(R.count),1),R.bufferView!==void 0?(k(),G("span",yA,"BV:"+Z(R.bufferView),1)):pe("",!0),R.byteOffset!==void 0?(k(),G("span",MA,"Off:"+Z(R.byteOffset),1)):pe("",!0),(k(!0),G(ke,null,st(R.usage,(V,E)=>(k(),G(ke,{key:E},[U("span",SA,Z(V.type),1),V.type==="mesh"?(k(),G("span",bA," Mesh："+Z(V.mesh)+" | Prim："+Z(V.primitive)+" | Attr："+Z(V.attribute),1)):pe("",!0),V.type==="animation"?(k(),G("span",EA," Anim："+Z(V.animation)+" | "+Z(V.attribute)+"："+Z(V.sampler||V.channel),1)):pe("",!0)],64))),128))]),n.selectedIndex===T?(k(),G("div",{key:0,class:"accessor-data-container",onClick:I[1]||(I[1]=Fs(()=>{},["stop"]))},[U("div",{class:"accessor-data-header",onClick:V=>a(T)},[U("span",AA,Z(r(`accessor_${T}`)?"▼":"▶"),1),Dt(" Accessor Data ("+Z(R.count)+" items) ",1)],8,TA),r(`accessor_${T}`)?(k(),G("div",wA,[R.count<=100?(k(),G("div",RA,[(k(!0),G(ke,null,st(l(T),(V,E)=>(k(),G("div",{key:E,class:"accessor-data-item"},[U("span",CA,Z(E)+":",1),U("span",PA,Z(f(V,R.type)),1)]))),128))])):(k(),G("div",LA,[(k(!0),G(ke,null,st(_(T),(V,E)=>(k(),G("div",{key:`group_${T}_${E}`,class:"data-group"},[U("div",{class:"group-header",onClick:Fs(S=>p(T,E),["stop"])},[U("span",DA,Z(v(T,E)?"▼":"▶"),1),U("span",NA,Z(V.label),1)],8,IA),v(T,E)?(k(),G("div",UA,[V.subGroups?(k(!0),G(ke,{key:0},st(V.subGroups,(S,D)=>(k(),G("div",{key:`subgroup_${T}_${E}_${D}`,class:"data-subgroup"},[U("div",{class:"subgroup-header",onClick:Fs(B=>A(T,E,D),["stop"])},[U("span",FA,Z(m(T,E,D)?"▼":"▶"),1),U("span",BA,Z(S.label),1)],8,OA),m(T,E,D)?(k(),G("div",kA,[(k(!0),G(ke,null,st(y(T,S.start,S.end),(B,C)=>(k(),G("div",{key:`item_${T}_${S.start}_${C}`,class:"accessor-data-item"},[U("span",VA,Z(S.start+C)+":",1),U("span",HA,Z(f(B,R.type)),1)]))),128))])):pe("",!0)]))),128)):(k(!0),G(ke,{key:1},st(y(T,V.start,V.end),(S,D)=>(k(),G("div",{key:`item_${T}_${V.start}_${D}`,class:"accessor-data-item"},[U("span",zA,Z(V.start+D)+":",1),U("span",GA,Z(f(S,R.type)),1)]))),128))])):pe("",!0)]))),128))]))])):pe("",!0)])):pe("",!0)],10,pA))),128))])):pe("",!0)])):pe("",!0)}},jA=jt(WA,[["__scopeId","data-v-c6df91e7"]]),$A={class:"item-preview"},XA=["src","alt"],qA={key:1,class:"preview-placeholder"},KA=Object.assign({name:"ImagePreview"},{__name:"ImagePreview",props:{imageUrl:{type:String,default:null},altText:{type:String,default:""}},emits:["openImageModal"],setup(n,{emit:e}){const t=n,i=e;function s(o,a){i("openImageModal",o,a)}function r(o){console.error("Image failed to load:",t.imageUrl),o.target.style.display="none"}return(o,a)=>(k(),G("div",$A,[n.imageUrl?(k(),G("img",{key:0,src:n.imageUrl,alt:n.altText,class:"preview-image",onClick:a[0]||(a[0]=Fs(l=>s(n.imageUrl,n.altText),["stop"])),onError:r},null,40,XA)):(k(),G("div",qA,"No preview"))]))}}),zp=jt(KA,[["__scopeId","data-v-30b49939"]]),YA={key:0,class:"data-section"},ZA={class:"toggle-icon"},JA={key:0,class:"section-content"},QA=["onClick"],ew={class:"item-left"},tw={class:"item-header"},nw={class:"header-texture"},iw={class:"item-details"},sw={key:0,class:"detail-row"},rw={class:"detail-value"},ow={key:1,class:"detail-row"},aw={class:"detail-value"},lw={key:0,class:"item-usage"},cw={class:"usage-info"},uw={class:"usage-line"},dw={class:"usage-text"},hw={class:"usage-text"},fw={key:0,class:"usage-line"},pw={class:"usage-text"},mw={class:"usage-text"},gw={class:"item-right"},_w={__name:"TexturesView",props:{textures:{type:Array,required:!0},jsonObject:{type:Object,default:()=>({})},binaryData:{type:Uint8Array,default:null},selectedType:{type:String,default:"all"},selectedIndex:{type:Number,default:-1},expandedSections:{type:Object,required:!0}},emits:["select","toggleSection","openImageModal"],setup(n,{emit:e}){const t=n,i=e;function s(c){i("toggleSection",c)}function r(c){return t.expandedSections.has(c)}function o(c,u){i("select",c,u)}function a(c,u){i("openImageModal",c,u)}function l(c){const d=(t.jsonObject.images||[])[c];if(!d)return null;if(d.uri)return d.uri.startsWith("data:")?d.uri:null;if(d.bufferView!==void 0&&t.binaryData){const f=(t.jsonObject.bufferViews||[])[d.bufferView];if(f){const _=f.byteOffset||0,v=f.byteLength,p=t.binaryData.subarray(_,_+v),m=new Blob([p],{type:d.mimeType||"image/jpeg"});return URL.createObjectURL(m)}}return null}return(c,u)=>n.textures.length>0?(k(),G("section",YA,[U("h4",{onClick:u[0]||(u[0]=d=>s("textures"))},[U("span",ZA,Z(r("textures")?"▼":"▶"),1),Dt(" Textures ("+Z(n.textures.length)+") ",1)]),r("textures")?(k(),G("div",JA,[(k(!0),G(ke,null,st(n.textures,(d,h)=>(k(),G("div",{key:h,class:Tt(["item-card with-preview",{selected:n.selectedType==="texture"&&n.selectedIndex===h}]),onClick:f=>o("texture",h)},[U("div",ew,[U("div",tw,[U("span",nw,"Texture "+Z(h),1)]),U("div",iw,[d.source!==void 0?(k(),G("div",sw,[u[1]||(u[1]=U("span",{class:"detail-label"},"Source：",-1)),U("span",rw,Z(d.source),1)])):pe("",!0),d.sampler!==void 0?(k(),G("div",ow,[u[2]||(u[2]=U("span",{class:"detail-label"},"Sampler：",-1)),U("span",aw,Z(d.sampler),1)])):pe("",!0)]),d.usage&&d.usage.length>0?(k(),G("div",lw,[(k(!0),G(ke,null,st(d.usage,(f,_)=>(k(),G("div",{key:_,class:"usage-item"},[U("div",cw,[U("div",uw,[U("span",dw,"Mat："+Z(f.material),1),U("span",hw,"Attr："+Z(f.attribute),1)]),f.mesh!==void 0?(k(),G("div",fw,[U("span",pw,"Mesh："+Z(f.mesh),1),U("span",mw,"Prim："+Z(f.primitive),1)])):pe("",!0)])]))),128))])):pe("",!0)]),U("div",gw,[_t(zp,{"image-url":l(d.source),"alt-text":`Texture ${h}`,onOpenImageModal:a},null,8,["image-url","alt-text"])])],10,QA))),128))])):pe("",!0)])):pe("",!0)}},vw=jt(_w,[["__scopeId","data-v-7b37a078"]]),xw={key:0,class:"data-section"},yw={class:"toggle-icon"},Mw={key:0,class:"section-content"},Sw=["onClick"],bw={class:"item-content"},Ew={class:"item-header"},Tw={key:0,class:"item-name"},Aw={key:1,class:"item-detail"},ww={key:2,class:"item-detail"},Rw={key:3,class:"item-detail"},Cw={__name:"ImagesView",props:{images:{type:Array,required:!0},jsonObject:{type:Object,default:()=>({})},binaryData:{type:Uint8Array,default:null},selectedType:{type:String,default:"all"},selectedIndex:{type:Number,default:-1},expandedSections:{type:Object,required:!0}},emits:["select","toggleSection","openImageModal"],setup(n,{emit:e}){const t=n,i=e;function s(c){i("toggleSection",c)}function r(c){return t.expandedSections.has(c)}function o(c,u){i("select",c,u)}function a(c,u){i("openImageModal",c,u)}function l(c){const d=(t.images||[])[c];if(!d)return null;if(d.uri)return d.uri.startsWith("data:")?d.uri:null;if(d.bufferView!==void 0&&t.binaryData){const f=(t.jsonObject.bufferViews||[])[d.bufferView];if(f){const _=f.byteOffset||0,v=f.byteLength,p=t.binaryData.subarray(_,_+v),m=new Blob([p],{type:d.mimeType||"image/jpeg"});return URL.createObjectURL(m)}}return null}return(c,u)=>n.images.length>0?(k(),G("section",xw,[U("h4",{onClick:u[0]||(u[0]=d=>s("images"))},[U("span",yw,Z(r("images")?"▼":"▶"),1),Dt(" Images ("+Z(n.images.length)+") ",1)]),r("images")?(k(),G("div",Mw,[(k(!0),G(ke,null,st(n.images,(d,h)=>(k(),G("div",{key:h,class:Tt(["item-card with-preview",{selected:n.selectedType==="image"&&n.selectedIndex===h}]),onClick:f=>o("image",h)},[U("div",bw,[U("div",Ew,"Image "+Z(h),1),d.name?(k(),G("div",Tw,Z(d.name),1)):pe("",!0),d.uri?(k(),G("div",Aw,"URI: "+Z(d.uri),1)):pe("",!0),d.bufferView!==void 0?(k(),G("div",ww,"BufferView: "+Z(d.bufferView),1)):pe("",!0),d.mimeType?(k(),G("div",Rw,"MIME: "+Z(d.mimeType),1)):pe("",!0)]),_t(zp,{"image-url":l(h),"alt-text":`Image ${h}`,onOpenImageModal:a},null,8,["image-url","alt-text"])],10,Sw))),128))])):pe("",!0)])):pe("",!0)}},Pw=jt(Cw,[["__scopeId","data-v-3c355a8d"]]),Lw={class:"parsed-data-view"},Iw={key:0,class:"no-data"},Dw={key:1,class:"data-content"},Nw=["src","alt"],Uw={class:"tabs-header"},Ow=["onClick"],Fw={key:0,class:"tab-count"},Bw={class:"tab-content"},kw={class:"tab-panel"},Vw={key:0,class:"data-section"},Hw={class:"toggle-icon"},zw={key:0,class:"section-content"},Gw={class:"item-header"},Ww={class:"item-details"},jw={class:"badge"},$w={class:"item-detail"},Xw={class:"item-detail"},qw={key:0,class:"item-detail"},Kw={key:1,class:"item-detail"},Yw={key:1,class:"data-section"},Zw={class:"toggle-icon"},Jw={key:0,class:"section-content"},Qw={class:"item-header"},e1={key:0,class:"item-name"},t1={class:"item-detail"},n1={class:"tab-panel"},i1={key:0,class:"data-section"},s1={class:"toggle-icon"},r1={key:0,class:"section-content"},o1=["onClick"],a1={class:"item-header"},l1={key:0,class:"item-name"},c1={class:"item-details"},u1={key:0,class:"badge"},d1={key:1,class:"badge"},h1={key:2,class:"badge"},f1={class:"tab-panel"},p1={key:0,class:"data-section"},m1={class:"toggle-icon"},g1={key:0,class:"section-content"},_1={class:"info-row"},v1={class:"value"},x1={key:1,class:"data-section"},y1={class:"toggle-icon"},M1={key:0,class:"section-content"},S1=["onClick"],b1={class:"item-header"},E1={key:0,class:"item-name"},T1={class:"item-detail"},A1={key:2,class:"data-section"},w1={class:"toggle-icon"},R1={key:0,class:"section-content"},C1=["onClick"],P1={class:"item-header"},L1={key:0,class:"item-name"},I1={class:"item-details"},D1={key:0},N1={key:1},U1={key:3,class:"data-section"},O1={class:"toggle-icon"},F1={key:0,class:"section-content"},B1=["onClick"],k1={class:"item-header"},V1={key:0,class:"item-name"},H1={class:"item-detail"},z1={key:0,class:"primitives-list"},G1={class:"primitive-header"},W1={class:"primitive-index"},j1={key:0,class:"badge"},$1={key:1,class:"badge"},X1={class:"primitive-attributes"},q1={key:0,class:"attr-item"},K1={class:"attr-value"},Y1={class:"attr-name"},Z1={class:"attr-value"},J1={class:"tab-panel"},Q1={key:0,class:"data-section"},eR={class:"toggle-icon"},tR={key:0,class:"section-content"},nR=["onClick"],iR={class:"item-header"},sR={key:0,class:"item-name"},rR={class:"item-detail"},oR={class:"item-detail"},aR={key:1,class:"empty-tab"},lR={class:"tab-panel"},cR={key:0,class:"data-section"},uR={class:"toggle-icon"},dR={key:0,class:"section-content"},hR={class:"info-row"},fR={class:"value"},pR={key:0,class:"info-row"},mR={class:"value"},gR={key:1,class:"info-row"},_R={class:"value"},vR={__name:"ParsedDataView",props:{jsonObject:{type:Object,default:()=>({})},binaryData:{type:Uint8Array,default:null},structuralMetadata:{type:Object,default:null},selectedType:{type:String,default:"all"},selectedIndex:{type:Number,default:-1},selectedMeshIndex:{type:Number,default:-1},selectedPrimitiveIndex:{type:Number,default:-1}},emits:["select"],setup(n,{emit:e}){const t=n,i=e,s=De("geometry"),r=De(new Set(["accessors","materials","textures"])),o=De(new Set),a=De(new Set),l=lt(()=>{var K,N,q,J,me,Se,Ie,ae,_e,Ee;return[{id:"geometry",label:"几何数据",count:(((K=t.jsonObject.accessors)==null?void 0:K.length)||0)+(((N=t.jsonObject.bufferViews)==null?void 0:N.length)||0)+(((q=t.jsonObject.buffers)==null?void 0:q.length)||0)},{id:"material",label:"材质纹理",count:(((J=t.jsonObject.materials)==null?void 0:J.length)||0)+(((me=t.jsonObject.textures)==null?void 0:me.length)||0)+(((Se=t.jsonObject.images)==null?void 0:Se.length)||0)},{id:"scene",label:"场景结构",count:(((Ie=t.jsonObject.scenes)==null?void 0:Ie.length)||0)+(((ae=t.jsonObject.nodes)==null?void 0:ae.length)||0)+(((_e=t.jsonObject.meshes)==null?void 0:_e.length)||0)},{id:"animation",label:"动画",count:((Ee=t.jsonObject.animations)==null?void 0:Ee.length)||0},{id:"metadata",label:"元数据",count:t.structuralMetadata?1:0}]});ns(()=>t.selectedMeshIndex,K=>{K>=0&&(s.value="scene",r.value.add("meshes"),ha(()=>{const N=document.querySelector(".mesh-selected");N&&N.scrollIntoView({behavior:"smooth",block:"center"})}))});const c=De(!1),u=De(""),d=De(""),h=lt(()=>Object.keys(t.jsonObject).length>0),f=lt(()=>t.jsonObject.scenes||[]),_=lt(()=>t.jsonObject.nodes||[]),v=lt(()=>t.jsonObject.meshes||[]),p=lt(()=>(t.jsonObject.accessors||[]).map((N,q)=>{const J=C(q);return{...N,usage:J}})),m=lt(()=>t.jsonObject.bufferViews||[]),A=lt(()=>t.jsonObject.buffers||[]),y=lt(()=>t.jsonObject.materials||[]),M=lt(()=>(t.jsonObject.textures||[]).map((N,q)=>{const J=X(q);return{...N,usage:J}})),I=lt(()=>t.jsonObject.images||[]),R=lt(()=>t.jsonObject.animations||[]);function T(K){return r.value.has(K)}function V(K){r.value.has(K)?r.value.delete(K):r.value.add(K)}function E(K,N){i("select",K,N)}function S(K,N){if(K==null)return"N/A";switch(N){case"SCALAR":return K.toString();case"VEC2":case"VEC3":case"VEC4":case"MAT2":case"MAT3":case"MAT4":return Array.isArray(K)?`[${K.map(q=>typeof q=="number"?q.toFixed(4):q).join(", ")}]`:K.toString();case"STRING":return K.toString();case"BOOLEAN":return K?"true":"false";default:return K.toString()}}function D(K){return{34962:"ARRAY_BUFFER",34963:"ELEMENT_ARRAY_BUFFER"}[K]||`TARGET_${K}`}function B(K){return{0:"POINTS",1:"LINES",2:"LINE_LOOP",3:"LINE_STRIP",4:"TRIANGLES",5:"TRIANGLE_STRIP",6:"TRIANGLE_FAN"}[K]||`MODE_${K}`}function C(K){const N=t.jsonObject.meshes||[],q=t.jsonObject.animations||[],J=[];return N.forEach((me,Se)=>{me.primitives&&me.primitives.forEach((Ie,ae)=>{const _e=Ie.attributes;_e&&Object.entries(_e).forEach(([Ee,be])=>{be===K&&J.push({type:"mesh",mesh:me.name?`${me.name} (${Se})`:Se,primitive:ae,attribute:Ee})}),Ie.indices===K&&J.push({type:"mesh",mesh:me.name?`${me.name} (${Se})`:Se,primitive:ae,attribute:"indices"})})}),q.forEach((me,Se)=>{me.channels&&me.samplers&&me.samplers.forEach((Ie,ae)=>{Ie.input===K&&J.push({type:"animation",animation:me.name?`${me.name} (${Se})`:Se,sampler:ae,attribute:"input"}),Ie.output===K&&J.push({type:"animation",animation:me.name?`${me.name} (${Se})`:Se,sampler:ae,attribute:"output"})})}),J}function X(K){const N=t.jsonObject.materials||[],q=[];return N.forEach((J,me)=>{var Ie,ae,_e,Ee,be;const Se=J.name?`${J.name} (${me})`:me;J.pbrMetallicRoughness&&(((Ie=J.pbrMetallicRoughness.baseColorTexture)==null?void 0:Ie.index)===K&&q.push({type:"material",material:Se,attribute:"baseColorTexture"}),((ae=J.pbrMetallicRoughness.metallicRoughnessTexture)==null?void 0:ae.index)===K&&q.push({type:"material",material:Se,attribute:"metallicRoughnessTexture"})),((_e=J.normalTexture)==null?void 0:_e.index)===K&&q.push({type:"material",material:Se,attribute:"normalTexture"}),((Ee=J.occlusionTexture)==null?void 0:Ee.index)===K&&q.push({type:"material",material:Se,attribute:"occlusionTexture"}),((be=J.emissiveTexture)==null?void 0:be.index)===K&&q.push({type:"material",material:Se,attribute:"emissiveTexture"})}),q}function Q(K,N){u.value=K,d.value=N,c.value=!0}function ie(){c.value=!1,u.value="",d.value=""}return(K,N)=>(k(),G("div",Lw,[h.value?(k(),G("div",Dw,[c.value?(k(),G("div",{key:0,class:"image-modal",onClick:ie},[U("div",{class:"modal-content",onClick:N[0]||(N[0]=Fs(()=>{},["stop"]))},[U("button",{class:"modal-close",onClick:ie},"×"),U("img",{src:u.value,alt:d.value,class:"modal-image"},null,8,Nw)])])):pe("",!0),U("div",Uw,[(k(!0),G(ke,null,st(l.value,q=>(k(),G("button",{key:q.id,class:Tt(["tab-btn",{active:s.value===q.id}]),onClick:J=>s.value=q.id},[Dt(Z(q.label)+" ",1),q.count>0?(k(),G("span",Fw,Z(q.count),1)):pe("",!0)],10,Ow))),128))]),U("div",Bw,[Fn(U("div",kw,[_t(jA,{accessors:p.value,"binary-data":n.binaryData,"json-object":n.jsonObject,"selected-type":n.selectedType,"selected-index":n.selectedIndex,"expanded-sections":r.value,"expanded-groups":o.value,"expanded-sub-groups":a.value,onSelect:E,onToggleSection:V},null,8,["accessors","binary-data","json-object","selected-type","selected-index","expanded-sections","expanded-groups","expanded-sub-groups"]),m.value.length>0?(k(),G("section",Vw,[U("h4",{onClick:N[1]||(N[1]=q=>V("bufferViews"))},[U("span",Hw,Z(T("bufferViews")?"▼":"▶"),1),Dt(" BufferViews ("+Z(m.value.length)+") ",1)]),T("bufferViews")?(k(),G("div",zw,[(k(!0),G(ke,null,st(m.value,(q,J)=>(k(),G("div",{key:J,class:"item-card"},[U("div",Gw,"BufferView "+Z(J),1),U("div",Ww,[U("span",jw,"Buffer "+Z(q.buffer),1)]),U("div",$w,"Offset: "+Z(q.byteOffset||0),1),U("div",Xw,"Length: "+Z(q.byteLength),1),q.byteStride?(k(),G("div",qw,"Stride: "+Z(q.byteStride),1)):pe("",!0),q.target?(k(),G("div",Kw,"Target: "+Z(D(q.target)),1)):pe("",!0)]))),128))])):pe("",!0)])):pe("",!0),A.value.length>0?(k(),G("section",Yw,[U("h4",{onClick:N[2]||(N[2]=q=>V("buffers"))},[U("span",Zw,Z(T("buffers")?"▼":"▶"),1),Dt(" Buffers ("+Z(A.value.length)+") ",1)]),T("buffers")?(k(),G("div",Jw,[(k(!0),G(ke,null,st(A.value,(q,J)=>(k(),G("div",{key:J,class:"item-card"},[U("div",Qw,"Buffer "+Z(J),1),q.uri?(k(),G("div",e1,Z(q.uri),1)):pe("",!0),U("div",t1,"Byte Length: "+Z(q.byteLength),1)]))),128))])):pe("",!0)])):pe("",!0)],512),[[Ls,s.value==="geometry"]]),Fn(U("div",n1,[y.value.length>0?(k(),G("section",i1,[U("h4",{onClick:N[3]||(N[3]=q=>V("materials"))},[U("span",s1,Z(T("materials")?"▼":"▶"),1),Dt(" Materials ("+Z(y.value.length)+") ",1)]),T("materials")?(k(),G("div",r1,[(k(!0),G(ke,null,st(y.value,(q,J)=>(k(),G("div",{key:J,class:Tt(["item-card",{selected:n.selectedType==="material"&&n.selectedIndex===J}]),onClick:me=>E("material",J)},[U("div",a1,"Material "+Z(J),1),q.name?(k(),G("div",l1,Z(q.name),1)):pe("",!0),U("div",c1,[q.pbrMetallicRoughness?(k(),G("span",u1,"PBR")):pe("",!0),q.normalTexture?(k(),G("span",d1,"Normal")):pe("",!0),q.emissiveTexture?(k(),G("span",h1,"Emissive")):pe("",!0)])],10,o1))),128))])):pe("",!0)])):pe("",!0),_t(vw,{textures:M.value,"json-object":n.jsonObject,"binary-data":n.binaryData,"selected-type":n.selectedType,"selected-index":n.selectedIndex,"expanded-sections":r.value,onSelect:E,onToggleSection:V,onOpenImageModal:Q},null,8,["textures","json-object","binary-data","selected-type","selected-index","expanded-sections"]),_t(Pw,{images:I.value,"json-object":n.jsonObject,"binary-data":n.binaryData,"selected-type":n.selectedType,"selected-index":n.selectedIndex,"expanded-sections":r.value,onSelect:E,onToggleSection:V,onOpenImageModal:Q},null,8,["images","json-object","binary-data","selected-type","selected-index","expanded-sections"])],512),[[Ls,s.value==="material"]]),Fn(U("div",f1,[n.jsonObject.scene!==void 0?(k(),G("section",p1,[U("h4",{onClick:N[4]||(N[4]=q=>V("scene"))},[U("span",m1,Z(T("scene")?"▼":"▶"),1),N[10]||(N[10]=Dt(" Default Scene ",-1))]),T("scene")?(k(),G("div",g1,[U("div",_1,[N[11]||(N[11]=U("span",{class:"label"},"Scene Index:",-1)),U("span",v1,Z(n.jsonObject.scene),1)])])):pe("",!0)])):pe("",!0),f.value.length>0?(k(),G("section",x1,[U("h4",{onClick:N[5]||(N[5]=q=>V("scenes"))},[U("span",y1,Z(T("scenes")?"▼":"▶"),1),Dt(" Scenes ("+Z(f.value.length)+") ",1)]),T("scenes")?(k(),G("div",M1,[(k(!0),G(ke,null,st(f.value,(q,J)=>{var me;return k(),G("div",{key:J,class:Tt(["item-card",{selected:n.selectedType==="scene"&&n.selectedIndex===J}]),onClick:Se=>E("scene",J)},[U("div",b1,"Scene "+Z(J),1),q.name?(k(),G("div",E1,Z(q.name),1)):pe("",!0),U("div",T1,"Nodes: "+Z(((me=q.nodes)==null?void 0:me.length)||0),1)],10,S1)}),128))])):pe("",!0)])):pe("",!0),_.value.length>0?(k(),G("section",A1,[U("h4",{onClick:N[6]||(N[6]=q=>V("nodes"))},[U("span",w1,Z(T("nodes")?"▼":"▶"),1),Dt(" Nodes ("+Z(_.value.length)+") ",1)]),T("nodes")?(k(),G("div",R1,[(k(!0),G(ke,null,st(_.value,(q,J)=>(k(),G("div",{key:J,class:Tt(["item-card",{selected:n.selectedType==="node"&&n.selectedIndex===J}]),onClick:me=>E("node",J)},[U("div",P1,"Node "+Z(J),1),q.name?(k(),G("div",L1,Z(q.name),1)):pe("",!0),U("div",I1,[q.mesh!==void 0?(k(),G("span",D1,"Mesh: "+Z(q.mesh),1)):pe("",!0),q.children?(k(),G("span",N1,"Children: "+Z(q.children.length),1)):pe("",!0)])],10,C1))),128))])):pe("",!0)])):pe("",!0),v.value.length>0?(k(),G("section",U1,[U("h4",{onClick:N[7]||(N[7]=q=>V("meshes"))},[U("span",O1,Z(T("meshes")?"▼":"▶"),1),Dt(" Meshes ("+Z(v.value.length)+") ",1)]),T("meshes")?(k(),G("div",F1,[(k(!0),G(ke,null,st(v.value,(q,J)=>{var me;return k(),G("div",{key:J,class:Tt(["mesh-card",{"mesh-selected":n.selectedMeshIndex===J}])},[U("div",{class:Tt(["item-card",{selected:n.selectedType==="mesh"&&n.selectedIndex===J,"mesh-highlighted":n.selectedMeshIndex===J&&n.selectedPrimitiveIndex===-1}]),onClick:Se=>E("mesh",J)},[U("div",k1,"Mesh "+Z(J),1),q.name?(k(),G("div",V1,Z(q.name),1)):pe("",!0),U("div",H1,"Primitives: "+Z(((me=q.primitives)==null?void 0:me.length)||0),1)],10,B1),q.primitives&&q.primitives.length>0&&(n.selectedMeshIndex===J||T(`mesh_primitives_${J}`))?(k(),G("div",z1,[(k(!0),G(ke,null,st(q.primitives,(Se,Ie)=>(k(),G("div",{key:Ie,class:Tt(["primitive-card",{"primitive-highlighted":n.selectedMeshIndex===J&&n.selectedPrimitiveIndex===Ie}])},[U("div",G1,[U("span",W1,"Primitive "+Z(Ie),1),Se.material!==void 0?(k(),G("span",j1,"Material "+Z(Se.material),1)):pe("",!0),Se.mode!==void 0?(k(),G("span",$1,"Mode "+Z(B(Se.mode)),1)):pe("",!0)]),U("div",X1,[Se.indices!==void 0?(k(),G("div",q1,[N[12]||(N[12]=U("span",{class:"attr-name"},"indices:",-1)),U("span",K1,"Accessor "+Z(Se.indices),1)])):pe("",!0),(k(!0),G(ke,null,st(Se.attributes,(ae,_e)=>(k(),G("div",{key:_e,class:"attr-item"},[U("span",Y1,Z(_e)+":",1),U("span",Z1,"Accessor "+Z(ae),1)]))),128))])],2))),128))])):pe("",!0)],2)}),128))])):pe("",!0)])):pe("",!0)],512),[[Ls,s.value==="scene"]]),Fn(U("div",J1,[R.value.length>0?(k(),G("section",Q1,[U("h4",{onClick:N[8]||(N[8]=q=>V("animations"))},[U("span",eR,Z(T("animations")?"▼":"▶"),1),Dt(" Animations ("+Z(R.value.length)+") ",1)]),T("animations")?(k(),G("div",tR,[(k(!0),G(ke,null,st(R.value,(q,J)=>{var me,Se;return k(),G("div",{key:J,class:Tt(["item-card",{selected:n.selectedType==="animation"&&n.selectedIndex===J}]),onClick:Ie=>E("animation",J)},[U("div",iR,"Animation "+Z(J),1),q.name?(k(),G("div",sR,Z(q.name),1)):pe("",!0),U("div",rR,"Channels: "+Z(((me=q.channels)==null?void 0:me.length)||0),1),U("div",oR,"Samplers: "+Z(((Se=q.samplers)==null?void 0:Se.length)||0),1)],10,nR)}),128))])):pe("",!0)])):pe("",!0),R.value.length===0?(k(),G("div",aR," No animations in this model ")):pe("",!0)],512),[[Ls,s.value==="animation"]]),Fn(U("div",lR,[n.jsonObject.asset?(k(),G("section",cR,[U("h4",{onClick:N[9]||(N[9]=q=>V("asset"))},[U("span",uR,Z(T("asset")?"▼":"▶"),1),N[13]||(N[13]=Dt(" Asset Info ",-1))]),T("asset")?(k(),G("div",dR,[U("div",hR,[N[14]||(N[14]=U("span",{class:"label"},"Version:",-1)),U("span",fR,Z(n.jsonObject.asset.version),1)]),n.jsonObject.asset.generator?(k(),G("div",pR,[N[15]||(N[15]=U("span",{class:"label"},"Generator:",-1)),U("span",mR,Z(n.jsonObject.asset.generator),1)])):pe("",!0),n.jsonObject.asset.copyright?(k(),G("div",gR,[N[16]||(N[16]=U("span",{class:"label"},"Copyright:",-1)),U("span",_R,Z(n.jsonObject.asset.copyright),1)])):pe("",!0)])):pe("",!0)])):pe("",!0),_t(uA,{"structural-metadata":n.structuralMetadata,"expanded-sections":r.value,"format-value":S,onToggleSection:V},null,8,["structural-metadata","expanded-sections"])],512),[[Ls,s.value==="metadata"]])])])):(k(),G("div",Iw," No GLB file loaded "))]))}},xR=jt(vR,[["__scopeId","data-v-51b4df1f"]]),yR=`
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,MR=`
  varying vec3 vNormal;
  void main() {
    vec3 normalColor = normalize(vNormal) * 0.5 + 0.5;
    gl_FragColor = vec4(normalColor, 1.0);
  }
`,SR=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,bR=`
  varying vec2 vUv;
  void main() {
    float r = vUv.x;
    float g = vUv.y;
    float b = 0.0;
    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;function dh(n,e){return new pi({vertexShader:n,fragmentShader:e,side:an})}function ER(n,e){n&&n.traverse(t=>{t.isMesh&&(e==="normal"?t.material=dh(yR,MR):e==="uv"&&(t.material=dh(SR,bR)))})}function TR(n,e){!n||!e||n.traverse(t=>{t.isMesh&&e.has(t)&&(t.material=e.get(t))})}async function AR(n,e,t=fetch){const i=[],s={buffers:[],images:[]};if(n.buffers)for(let r=0;r<n.buffers.length;r++){const o=n.buffers[r];if(o.uri)try{const a=hh(o.uri,e),l=await t(a);if(!l.ok)throw new Error(`Failed to load buffer ${r}: ${l.status}`);const c=await l.arrayBuffer();i.push(new Uint8Array(c)),s.buffers.push({index:r,uri:o.uri,size:c.byteLength,data:i[r]})}catch(a){console.error(`Error loading buffer ${r}:`,a),i.push(null)}else i.push(null)}if(n.images)for(let r=0;r<n.images.length;r++){const o=n.images[r];if(o.uri)try{const a=hh(o.uri,e);s.images.push({index:r,uri:o.uri,url:a})}catch(a){console.error(`Error processing image ${r}:`,a)}}return{buffers:i,resources:s}}function hh(n,e){if(n.startsWith("data:"))return n;try{return new URL(n,e).href}catch{return n}}function fh(n,e){const t=n.bufferViews||[];let i=0;const s=[];e.forEach((a,l)=>{s.push(i),a&&(i+=a.length)});const r=new Uint8Array(i);e.forEach((a,l)=>{a&&r.set(a,s[l])});const o=t.map(a=>{const l=a.buffer!==void 0?a.buffer:0,c=(a.byteOffset||0)+(s[l]||0);return{...a,byteOffset:c,buffer:0}});return{combinedBuffer:r,updatedBufferViews:o,totalSize:i}}async function wR(n){const e=await n.text(),t=JSON.parse(e),i=[],s=[];if(t.buffers)for(let r=0;r<t.buffers.length;r++){const o=t.buffers[r];if(o.uri)if(o.uri.startsWith("data:")){const a=o.uri.split(",")[1],l=atob(a),c=new Uint8Array(l.length);for(let u=0;u<l.length;u++)c[u]=l.charCodeAt(u);i[r]=c}else s.push((async()=>{try{const a=await fetch(o.uri);if(!a.ok)throw new Error(`Failed to load buffer: ${a.status}`);const l=await a.arrayBuffer();i[r]=new Uint8Array(l)}catch(a){console.error(`Error loading buffer ${r}:`,a),i[r]=null}})())}return await Promise.all(s),{gltfJson:t,buffers:i}}async function RR(n){const e=await fetch(n);if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const t=await e.text(),i=JSON.parse(t),s=n.substring(0,n.lastIndexOf("/")+1),{buffers:r,resources:o}=await AR(i,s);return{gltfJson:i,buffers:r,resources:o,baseUrl:s}}const CR={id:"app"},PR={class:"grid-container"},LR={class:"grid-item json-item"},IR={class:"panel json-panel"},DR={class:"panel-header"},NR={class:"header-controls"},UR={class:"url-input-group"},OR=["disabled"],FR={id:"preview-container"},BR={class:"scene-controls"},kR={class:"switch",title:"双面渲染"},VR={class:"switch",title:"线框模式"},HR={class:"status-section"},zR={key:0},GR={key:1},WR={key:2},jR={class:"grid-item json-item"},$R={class:"panel json-panel"},XR={class:"panel-content"},qR={class:"grid-item hex-item"},KR={class:"panel hex-panel"},YR={class:"panel-content"},ZR={class:"grid-item parsed-item"},JR={class:"panel parsed-panel"},QR={class:"panel-content"},eC={__name:"App",setup(n){const e=De({}),t=De(null),i=De(new Set),s=De("0x00000000"),r=De({start:-1,end:-1}),o=De("all"),a=De(-1),l=De(null),c=De(-1),u=De(-1),d=De([]),h=De({left:30,middle:40,right:30}),f=De(!1),_=De(null),v=De(0),p=De({left:0,middle:0,right:0}),m=De(null),A=De(null),y=De(""),M=De(0),I=De("-"),R=De(0),T=De(0),V=De(""),E=De(!1),S=De("glb");let D,B,C,X,Q,ie;const K=De(!1),N=De("default"),q=De(!1),J=De(new Map),me=De(new Map);ma(()=>{_e(),window.addEventListener("mousemove",Ne),window.addEventListener("mouseup",Ge);const H=document.getElementById("app");H&&(H.addEventListener("dragover",Se),H.addEventListener("drop",Ie))}),jr(()=>{window.removeEventListener("mousemove",Ne),window.removeEventListener("mouseup",Ge);const H=document.getElementById("app");H&&(H.removeEventListener("dragover",Se),H.removeEventListener("drop",Ie))});function Se(H){H.preventDefault(),H.dataTransfer.dropEffect="copy"}function Ie(H){if(H.preventDefault(),H.dataTransfer.files&&H.dataTransfer.files.length>0){const g=H.dataTransfer.files[0],P=g.name.toLowerCase().split(".").pop();if(P!=="glb"&&P!=="gltf"){alert("请拖入 .glb 或 .gltf 文件");return}ae("drop"),be(g)}}function ae(H){(H==="file"||H==="drop")&&(V.value=""),(H==="url"||H==="drop")&&A.value&&(A.value.value="")}function _e(){const H=document.getElementById("preview-container");if(!H)return;D=new bS,D.background=new ze(1710638),B=new Zt(75,H.clientWidth/H.clientHeight,.1,1e3),B.position.set(0,0,5),C=new SS({antialias:!0}),C.setSize(H.clientWidth,H.clientHeight),C.setPixelRatio(window.devicePixelRatio),H.appendChild(C.domElement),Q=new zb(B,C.domElement),Q.enableDamping=!0,Q.dampingFactor=.05;const g=new ZS(4210752,.6);D.add(g);const P=new Xl(16777215,.8);P.position.set(5,10,7),D.add(P);const $=new Xl(16777215,.3);$.position.set(-5,0,-5),D.add($),ie=new Qd(10,10,4473924,2236962),D.add(ie);function ce(){requestAnimationFrame(ce),Q&&Q.update(),C.render(D,B)}ce(),window.addEventListener("resize",()=>{H.clientWidth>0&&H.clientHeight>0&&(B.aspect=H.clientWidth/H.clientHeight,B.updateProjectionMatrix(),C.setSize(H.clientWidth,H.clientHeight))})}function Ee(H){const g=H.target.files[0];g&&(ae("file"),be(g))}function be(H){y.value=H.name,M.value=H.size;const g=H.name.toLowerCase().split(".").pop();if(S.value=g,g==="gltf")Fe(H);else{const P=new FileReader;P.onload=function($){const ce=$.target.result;ee(ce),b(ce)},P.readAsArrayBuffer(H)}}async function Fe(H){var g;E.value=!0;try{const P=await wR(H);if(!P)throw new Error("processGltfFile返回空结果");const{gltfJson:$,buffers:ce}=P;if(!$)throw new Error("无效的glTF JSON数据");if(!ce)throw new Error("缓冲区数据加载失败");if(e.value=$,I.value="2.0",R.value=JSON.stringify($).length,L($),ce.filter(Me=>Me!=null).length>0){const{combinedBuffer:Me,updatedBufferViews:Re}=fh($,ce);t.value=Me,T.value=Me.length,e.value.bufferViews||(e.value.bufferViews=Re)}else t.value=null,T.value=0;l.value=((g=$.extensions)==null?void 0:g.EXT_structural_metadata)||null,x($,H)}catch(P){console.error("Error processing glTF file:",P),alert(`glTF文件处理失败: ${P.message}`)}finally{E.value=!1}}async function He(){const H=V.value.trim();if(!H){alert("请输入GLB或glTF模型的URL");return}ae("url"),E.value=!0;try{const g=H.split("?")[0],P=g.split(".").pop().toLowerCase();if(S.value=P,P==="gltf")await je(H);else{const $=await fetch(H);if(!$.ok)throw new Error(`HTTP error! status: ${$.status}`);const ce=await $.arrayBuffer(),xe=g.substring(g.lastIndexOf("/")+1)||"remote_model.glb";y.value=xe,M.value=ce.byteLength,ee(ce),b(ce)}}catch(g){console.error("Error loading model from URL:",g),alert(`加载失败: ${g.message}`)}finally{E.value=!1}}async function je(H){var g;try{const P=await RR(H);if(!P)throw new Error("loadGltfFromUrl返回空结果");const{gltfJson:$,buffers:ce,resources:xe}=P;if(!$)throw new Error("无效的glTF JSON数据");if(!ce)throw new Error("缓冲区数据加载失败");const Me=H.split("?")[0],Re=Me.substring(Me.lastIndexOf("/")+1)||"remote_model.gltf";if(y.value=Re,e.value=$,I.value="2.0",R.value=JSON.stringify($).length,L($),ce.filter(ot=>ot!=null).length>0){const{combinedBuffer:ot,updatedBufferViews:it}=fh($,ce);t.value=ot,T.value=ot.length,M.value=ot.length,e.value.bufferViews||(e.value.bufferViews=it)}else t.value=null,T.value=0,M.value=0;l.value=((g=$.extensions)==null?void 0:g.EXT_structural_metadata)||null,F(H)}catch(P){throw console.error("Error loading glTF from URL:",P),P}}function ee(H){const g=new Worker(new URL(""+new URL("glbParserWorker-DAqUxzs9.js",import.meta.url).href,import.meta.url),{type:"module"});g.onmessage=P=>{const $=P.data;if($.success){const ce=$.data;I.value=ce.glbVersion,R.value=ce.jsonChunkSize,e.value=ce.jsonObject,l.value=ce.structuralMetadata,T.value=ce.binaryChunkSize,L(e.value),ce.binaryChunkSize>0?t.value=new Uint8Array(H,ce.binStart,ce.binaryChunkSize):t.value=null}else console.error("GLB Worker Parsing Error:",$.error);g.terminate()},g.onerror=P=>{console.error("Worker failed:",P),g.terminate()},g.postMessage(H)}function L(H,g=""){typeof H=="object"&&H!==null&&Object.keys(H).forEach(P=>{const $=g?`${g}.${P}`:P;i.value.add($)})}function O(){if(!e.value||Object.keys(e.value).length===0){alert("没有可复制的JSON数据");return}const H=JSON.stringify(e.value,null,2);navigator.clipboard.writeText(H).then(()=>{alert("JSON已复制到剪贴板！")}).catch(g=>{console.error("复制失败:",g);const P=document.createElement("textarea");P.value=H,document.body.appendChild(P),P.select(),document.execCommand("copy"),document.body.removeChild(P),alert("JSON已复制到剪贴板！")})}function te(){D&&(D.traverse(H=>{H.isMesh&&H.material&&(Array.isArray(H.material)?H.material.forEach(g=>{g.side=K.value?an:Cn}):H.material.side=K.value?an:Cn)}),C&&C.render(D,B))}function se(){D&&(D.traverse(H=>{if(H.isMesh&&H.material){const g=P=>{P&&(P.wireframe=q.value,P.needsUpdate=!0)};Array.isArray(H.material)?H.material.forEach(g):g(H.material)}}),C&&C.render(D,B))}function de(){!D||!X||(N.value==="default"?TR(D,J.value):(D.traverse(H=>{H.isMesh&&H.material&&(J.value.has(H)||J.value.set(H,H.material))}),ER(D,N.value)),se(),C&&C.render(D,B))}function b(H){new xl().load(URL.createObjectURL(new Blob([H])),function(P){W(P)},void 0,function(P){console.error("Error loading model:",P)})}function x(H,g){const P=new xl,$=new Blob([JSON.stringify(H)],{type:"application/json"}),ce=URL.createObjectURL($),xe=new Op;xe.setURLModifier(Me=>(Me.startsWith("blob:"),Me)),P.manager=xe,P.load(ce,function(Me){URL.revokeObjectURL(ce),W(Me)},void 0,function(Me){console.error("Error loading glTF:",Me),URL.revokeObjectURL(ce)})}function F(H){new xl().load(H,function(P){W(P)},void 0,function(P){console.error("Error loading glTF from URL:",P)})}function W(H){X&&D.remove(X),X=H.scene,D.add(X),me.value.clear(),H.parser&&H.parser.associations?X.traverse(Re=>{if(Re.isMesh){const nt=H.parser.associations.get(Re);if(nt&&nt.meshes!==void 0){const ot=`${nt.meshes}-${nt.primitives!==void 0?nt.primitives:0}`;me.value.set(ot,Re),Re.userData.gltfMeshIndex=nt.meshes,Re.userData.gltfPrimitiveIndex=nt.primitives!==void 0?nt.primitives:0}}}):X.traverse(Re=>{if(Re.isMesh){const nt=e.value.meshes||[];let ot=!1;for(let it=0;it<nt.length&&!ot;it++){const bt=nt[it].primitives||[];for(let vt=0;vt<bt.length&&!ot;vt++){const Ft=`${it}-${vt}`;me.value.has(Ft)||(me.value.set(Ft,Re),Re.userData.gltfMeshIndex=it,Re.userData.gltfPrimitiveIndex=vt,ot=!0)}}}}),te(),de(),X.updateMatrixWorld(!0);const g=new jn().setFromObject(X),P=g.getCenter(new j),$=g.getSize(new j);Math.max($.x,$.y,$.z);const ce=Math.sqrt($.x*$.x+$.y*$.y+$.z*$.z),xe=B.fov*(Math.PI/180),Me=ce/2/Math.tan(xe/2)*1.2;B.position.set(P.x+Me*.8,P.y+Me*.6,P.z+Me*.8),B.lookAt(P),B.near=Math.max(.1,Me*.001),B.far=Math.max(Me*10,Me+ce*10),B.updateProjectionMatrix(),Q&&(Q.target.copy(P),Q.update()),console.log("Model bounding box:",g),console.log("Model center:",P),console.log("Model size:",$),console.log("Model diagonal:",ce),console.log("Camera distance:",Me),console.log("Camera position:",B.position),console.log("Camera near/far:",B.near,B.far),z($,P)}function z(H,g){if(!ie)return;const P=Math.max(H.x,H.y,H.z),$=Math.max(10,Math.min(2e3,Math.ceil(P/10)*10)),ce=10;D.remove(ie),ie=new Qd($,ce,4473924,2236962),g&&ie.position.set(g.x,0,g.z),D.add(ie)}function ne(H,g,P){g!==void 0&&P!==void 0&&(r.value={start:g,end:g+P},s.value=`0x${g.toString(16).padStart(8,"0")}`)}function he(H,g){g?i.value.add(H):i.value.delete(H)}function re(H){s.value=`0x${H.toString(16).padStart(8,"0")}`}function ge(H,g,P,$){a.value=g,P!==void 0&&$!==void 0&&(r.value={start:P,end:P+$},s.value=`0x${P.toString(16).padStart(8,"0")}`)}function ye(H,g){c.value=H,u.value=g,Ue(H,g);const P=fe(H,g);if(d.value=P,P.length>0){const $=Pe(P);if($.length>0){const ce=Math.min(...$.map(Me=>Me.start)),xe=Math.max(...$.map(Me=>Me.end));r.value={start:ce,end:xe}}}}function fe(H,g){var xe;const P=e.value.meshes;if(!P||!P[H])return[];const $=P[H],ce=[];if(g===-1)$.primitives&&$.primitives.forEach(Me=>{ve(Me,ce)});else{const Me=(xe=$.primitives)==null?void 0:xe[g];Me&&ve(Me,ce)}return[...new Set(ce)]}function ve(H,g){H.attributes&&Object.values(H.attributes).forEach(P=>{typeof P=="number"&&g.push(P)}),H.indices!==void 0&&g.push(H.indices)}function Pe(H){const g=e.value.accessors,P=e.value.bufferViews;if(!g||!P)return[];const $=[];for(const ce of H){const xe=g[ce];if(!xe||xe.bufferView===void 0)continue;const Me=P[xe.bufferView];if(!Me)continue;const Re=(Me.byteOffset||0)+(xe.byteOffset||0),nt=Te(xe.componentType),ot=we(xe.type),it=nt*ot*xe.count;$.push({start:Re,end:Re+it})}return $}function Te(H){return{5120:1,5121:1,5122:2,5123:2,5125:4,5126:4}[H]||1}function we(H){return{SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16}[H]||1}function Ue(H,g){$e(),X&&X.traverse(P=>{if(P.isMesh&&P.userData.gltfMeshIndex!==void 0){const $=P.userData.gltfMeshIndex,ce=P.userData.gltfPrimitiveIndex;if(g===-1?$===H:$===H&&ce===g){const Me=new IS(P.geometry),Re=new Mc(Me,new Sa({color:65535,linewidth:2}));Re.userData.isHighlight=!0,P.add(Re)}else{const Me=Re=>{Re&&(P.userData.origOpacity=P.userData.origOpacity??Re.opacity,P.userData.origTransparent=P.userData.origTransparent??Re.transparent,Re.transparent=!0,Re.opacity=.15)};Array.isArray(P.material)?P.material.forEach(Me):Me(P.material)}}})}function $e(){X&&X.traverse(H=>{if(H.isMesh){const g=[];if(H.children.forEach(P=>{P.userData&&P.userData.isHighlight&&g.push(P)}),g.forEach(P=>{H.remove(P),P.geometry&&P.geometry.dispose(),P.material&&P.material.dispose()}),H.userData.origOpacity!==void 0){const P=$=>{$&&($.opacity=H.userData.origOpacity,$.transparent=H.userData.origTransparent)};Array.isArray(H.material)?H.material.forEach(P):P(H.material),delete H.userData.origOpacity,delete H.userData.origTransparent}}})}function tt(H){if(H===0)return"0 B";const g=1024,P=["B","KB","MB","GB"],$=Math.floor(Math.log(H)/Math.log(g));return parseFloat((H/Math.pow(g,$)).toFixed(2))+" "+P[$]}function Ne(H){if(!f.value||!m.value)return;const g=m.value.offsetWidth,P=H.clientX-v.value,$=P/g*100;if(console.log("Resize values:",{containerWidth:g,deltaX:P,deltaPercent:$,startWidths:p.value}),_.value==="left"){const ce=Math.max(10,Math.min(60,p.value.left+$)),xe=ce-p.value.left,Me=Math.max(10,p.value.middle-xe),Re=100-ce-Me;console.log("Left resizer values:",{newLeftWidth:ce,newMiddleWidth:Me,newRightWidth:Re,widthChange:xe}),Re>=10&&(console.log("Updating panelWidths for left resizer"),h.value={left:ce,middle:Me,right:Re},console.log("Updated panelWidths:",h.value))}else if(_.value==="right"){const ce=Math.max(10,Math.min(60,p.value.right-$)),xe=p.value.right-ce,Me=Math.max(10,p.value.middle+xe),Re=100-Me-ce;console.log("Right resizer values:",{newLeftWidth:Re,newMiddleWidth:Me,newRightWidth:ce,widthChange:xe}),Re>=10&&(console.log("Updating panelWidths for right resizer"),h.value={left:Re,middle:Me,right:ce},console.log("Updated panelWidths:",h.value))}}function Ge(){console.log("stopResize called"),f.value=!1,_.value=null,document.body.style.cursor="",document.body.style.userSelect="",console.log("Resize stopped")}return(H,g)=>(k(),G("div",CR,[U("div",PR,[U("div",LR,[U("div",IR,[U("div",DR,[g[5]||(g[5]=U("h3",null,"GLB/glTF Model Viewer",-1)),U("div",NR,[U("div",UR,[Fn(U("input",{type:"text","onUpdate:modelValue":g[0]||(g[0]=P=>V.value=P),placeholder:"输入GLB/glTF模型URL...",onKeyup:qf(He,["enter"]),onDblclick:g[1]||(g[1]=P=>P.target.select()),class:"url-input"},null,544),[[jf,V.value]]),U("button",{onClick:He,disabled:E.value,class:"load-btn"},Z(E.value?"加载中...":"加载"),9,OR)]),U("input",{type:"file",accept:".glb,.gltf",onChange:Ee,ref_key:"fileInputRef",ref:A,class:"file-input"},null,544)])]),U("div",FR,[U("div",BR,[Fn(U("select",{"onUpdate:modelValue":g[2]||(g[2]=P=>N.value=P),onChange:de,title:"着色模式"},[...g[6]||(g[6]=[U("option",{value:"default"},"默认着色",-1),U("option",{value:"normal"},"法向着色",-1),U("option",{value:"uv"},"UV着色",-1)])],544),[[$f,N.value]]),U("label",kR,[Fn(U("input",{type:"checkbox","onUpdate:modelValue":g[3]||(g[3]=P=>K.value=P),onChange:te},null,544),[[Fl,K.value]]),g[7]||(g[7]=U("span",{class:"slider"},null,-1))]),U("label",VR,[Fn(U("input",{type:"checkbox","onUpdate:modelValue":g[4]||(g[4]=P=>q.value=P),onChange:se},null,544),[[Fl,q.value]]),g[8]||(g[8]=U("span",{class:"slider"},null,-1))])]),U("div",HR,[U("span",null,"File: "+Z(y.value||"No file loaded"),1),U("span",null,"Type: "+Z(S.value.toUpperCase()),1),U("span",null,"Size: "+Z(tt(M.value)),1),U("span",null,"Version: "+Z(I.value),1),S.value==="glb"?(k(),G("span",zR,"JSON Chunk: "+Z(tt(R.value)),1)):pe("",!0),S.value==="glb"?(k(),G("span",GR,"Binary Chunk: "+Z(tt(T.value)),1)):pe("",!0),S.value==="gltf"?(k(),G("span",WR,"Buffers: "+Z(T.value?tt(T.value):"External"),1)):pe("",!0)])])])]),U("div",jR,[U("div",$R,[U("div",{class:"panel-header"},[g[9]||(g[9]=U("h3",null,"JSON Structure",-1)),U("div",{class:"panel-tools"},[U("button",{onClick:O,title:"复制JSON到剪贴板"},"复制JSON")])]),U("div",XR,[_t(tE,{data:e.value,"expanded-keys":i.value,onSelect:ne,onToggle:he,onSelectMeshPrimitive:ye},null,8,["data","expanded-keys"])])])]),U("div",qR,[U("div",KR,[g[10]||(g[10]=U("div",{class:"panel-header"},[U("h3",null,"Hex View"),U("div",{class:"panel-tools"})],-1)),U("div",YR,[_t(jE,{data:t.value,"highlight-range":r.value,"json-object":e.value,"expanded-accessor-indices":d.value,onSelect:re},null,8,["data","highlight-range","json-object","expanded-accessor-indices"])])])]),U("div",ZR,[U("div",JR,[g[11]||(g[11]=U("div",{class:"panel-header"},[U("h3",null,"Parsed Data"),U("div",{class:"panel-tools"})],-1)),U("div",QR,[_t(xR,{"json-object":e.value,"binary-data":t.value,"structural-metadata":l.value,"selected-type":o.value,"selected-index":a.value,"selected-mesh-index":c.value,"selected-primitive-index":u.value,onSelect:ge},null,8,["json-object","binary-data","structural-metadata","selected-type","selected-index","selected-mesh-index","selected-primitive-index"])])])])])]))}};Kf(eC).mount("#app");
