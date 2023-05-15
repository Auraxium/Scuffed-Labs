(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="151",Uf=0,cl=1,Nf=2,$c=1,Of=2,$r=3,bi=0,_n=1,fi=2,Si=0,_r=1,ul=2,fl=3,hl=4,Ff=5,pr=100,zf=101,Bf=102,dl=103,pl=104,kf=200,Hf=201,Gf=202,Vf=203,Yc=204,Jc=205,Wf=206,qf=207,jf=208,Xf=209,$f=210,Yf=0,Jf=1,Zf=2,fa=3,Kf=4,Qf=5,eh=6,th=7,Zc=0,nh=1,ih=2,hi=0,rh=1,sh=2,oh=3,ah=4,lh=5,Kc=300,yr=301,Mr=302,ha=303,da=304,Qs=306,pa=1e3,qn=1001,ma=1002,un=1003,ml=1004,Po=1005,Un=1006,ch=1007,ts=1008,Hi=1009,uh=1010,fh=1011,Qc=1012,hh=1013,zi=1014,Bi=1015,ns=1016,dh=1017,ph=1018,vr=1020,mh=1021,jn=1023,gh=1024,_h=1025,ki=1026,Sr=1027,vh=1028,xh=1029,yh=1030,Mh=1031,Sh=1033,Ro=33776,Do=33777,Io=33778,Uo=33779,gl=35840,_l=35841,vl=35842,xl=35843,bh=36196,yl=37492,Ml=37496,Sl=37808,bl=37809,wl=37810,El=37811,Tl=37812,Al=37813,Cl=37814,Ll=37815,Pl=37816,Rl=37817,Dl=37818,Il=37819,Ul=37820,Nl=37821,No=36492,wh=36283,Ol=36284,Fl=36285,zl=36286,Gi=3e3,Rt=3001,Eh=3200,Th=3201,eu=0,Ah=1,Jn="srgb",is="srgb-linear",tu="display-p3",Oo=7680,Ch=519,Bl=35044,kl="300 es",ga=1035;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,c=r.length;o<c;o++)r[o].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const Kr=Math.PI/180,rs=180/Math.PI;function Cr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function fn(i,e,t){return Math.max(e,Math.min(t,i))}function Ca(i,e){return(i%e+e)%e}function Lh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ph(i,e,t){return i!==e?(t-i)/(e-i):0}function Qr(i,e,t){return(1-t)*i+t*e}function Rh(i,e,t,n){return Qr(i,e,1-Math.exp(-t*n))}function Dh(i,e=1){return e-Math.abs(Ca(i,e*2)-e)}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Oh(i,e){return i+Math.random()*(e-i)}function Fh(i){return i*(.5-Math.random())}function zh(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bh(i){return i*Kr}function kh(i){return i*rs}function _a(i){return(i&i-1)===0&&i!==0}function Hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gh(i,e,t,n,r){const o=Math.cos,c=Math.sin,l=o(t/2),p=c(t/2),h=o((e+n)/2),m=c((e+n)/2),_=o((e-n)/2),v=c((e-n)/2),y=o((n-e)/2),b=c((n-e)/2);switch(r){case"XYX":i.set(l*m,p*_,p*v,l*h);break;case"YZY":i.set(p*v,l*m,p*_,l*h);break;case"ZXZ":i.set(p*_,p*v,l*m,l*h);break;case"XZX":i.set(l*m,p*b,p*y,l*h);break;case"YXY":i.set(p*y,l*m,p*b,l*h);break;case"ZYZ":i.set(p*b,p*y,l*m,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Yr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vh={DEG2RAD:Kr,RAD2DEG:rs,generateUUID:Cr,clamp:fn,euclideanModulo:Ca,mapLinear:Lh,inverseLerp:Ph,lerp:Qr,damp:Rh,pingpong:Dh,smoothstep:Ih,smootherstep:Uh,randInt:Nh,randFloat:Oh,randFloatSpread:Fh,seededRandom:zh,degToRad:Bh,radToDeg:kh,isPowerOfTwo:_a,ceilPowerOfTwo:Hh,floorPowerOfTwo:nu,setQuaternionFromProperEuler:Gh,normalize:gn,denormalize:Yr};class wt{constructor(e=0,t=0){wt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*n-c*r+e.x,this.y=o*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mt{constructor(){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,o,c,l,p,h){const m=this.elements;return m[0]=e,m[1]=r,m[2]=l,m[3]=t,m[4]=o,m[5]=p,m[6]=n,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[3],p=n[6],h=n[1],m=n[4],_=n[7],v=n[2],y=n[5],b=n[8],w=r[0],M=r[3],g=r[6],N=r[1],R=r[4],L=r[7],O=r[2],u=r[5],q=r[8];return o[0]=c*w+l*N+p*O,o[3]=c*M+l*R+p*u,o[6]=c*g+l*L+p*q,o[1]=h*w+m*N+_*O,o[4]=h*M+m*R+_*u,o[7]=h*g+m*L+_*q,o[2]=v*w+y*N+b*O,o[5]=v*M+y*R+b*u,o[8]=v*g+y*L+b*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],p=e[6],h=e[7],m=e[8];return t*c*m-t*l*h-n*o*m+n*l*p+r*o*h-r*c*p}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],p=e[6],h=e[7],m=e[8],_=m*c-l*h,v=l*p-m*o,y=h*o-c*p,b=t*_+n*v+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=_*w,e[1]=(r*h-m*n)*w,e[2]=(l*n-r*c)*w,e[3]=v*w,e[4]=(m*t-r*p)*w,e[5]=(r*o-l*t)*w,e[6]=y*w,e[7]=(n*p-h*t)*w,e[8]=(c*t-n*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,c,l){const p=Math.cos(o),h=Math.sin(o);return this.set(n*p,n*h,-n*(p*c+h*l)+c+e,-r*h,r*p,-r*(-h*c+p*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Fo.makeScale(e,t)),this}rotate(e){return this.premultiply(Fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fo=new mt;function iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Wh=new mt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),qh=new mt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function jh(i){return i.convertSRGBToLinear().applyMatrix3(qh)}function Xh(i){return i.applyMatrix3(Wh).convertLinearToSRGB()}const $h={[is]:i=>i,[Jn]:i=>i.convertSRGBToLinear(),[tu]:jh},Yh={[is]:i=>i,[Jn]:i=>i.convertLinearToSRGB(),[tu]:Xh},En={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return is},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=$h[e],r=Yh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Ji;class ru{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ji===void 0&&(Ji=ss("canvas")),Ji.width=e.width,Ji.height=e.height;const n=Ji.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let c=0;c<o.length;c++)o[c]=xr(o[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xr(t[n]/255)*255):t[n]=xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class su{constructor(e=null){this.isSource=!0,this.uuid=Cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?o.push(Bo(r[c].image)):o.push(Bo(r[c]))}else o=Bo(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ru.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class vn extends qi{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=qn,r=qn,o=Un,c=ts,l=jn,p=Hi,h=vn.DEFAULT_ANISOTROPY,m=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Cr(),this.name="",this.source=new su(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Kc;vn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*o,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*o,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*o,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const p=e.elements,h=p[0],m=p[4],_=p[8],v=p[1],y=p[5],b=p[9],w=p[2],M=p[6],g=p[10];if(Math.abs(m-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+M)<.1&&Math.abs(h+y+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,L=(y+1)/2,O=(g+1)/2,u=(m+v)/4,q=(_+w)/4,J=(b+M)/4;return R>L&&R>O?R<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(R),r=u/n,o=q/n):L>O?L<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),n=u/r,o=J/r):O<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(O),n=q/o,r=J/o),this.set(n,r,o,t),this}let N=Math.sqrt((M-b)*(M-b)+(_-w)*(_-w)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(_-w)/N,this.z=(v-m)/N,this.w=Math.acos((h+y+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vi extends qi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new su(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ou extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zh extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=un,this.minFilter=un,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ls{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,c,l){let p=n[r+0],h=n[r+1],m=n[r+2],_=n[r+3];const v=o[c+0],y=o[c+1],b=o[c+2],w=o[c+3];if(l===0){e[t+0]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(l===1){e[t+0]=v,e[t+1]=y,e[t+2]=b,e[t+3]=w;return}if(_!==w||p!==v||h!==y||m!==b){let M=1-l;const g=p*v+h*y+m*b+_*w,N=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const O=Math.sqrt(R),u=Math.atan2(O,g*N);M=Math.sin(M*u)/O,l=Math.sin(l*u)/O}const L=l*N;if(p=p*M+v*L,h=h*M+y*L,m=m*M+b*L,_=_*M+w*L,M===1-l){const O=1/Math.sqrt(p*p+h*h+m*m+_*_);p*=O,h*=O,m*=O,_*=O}}e[t]=p,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,r,o,c){const l=n[r],p=n[r+1],h=n[r+2],m=n[r+3],_=o[c],v=o[c+1],y=o[c+2],b=o[c+3];return e[t]=l*b+m*_+p*y-h*v,e[t+1]=p*b+m*v+h*_-l*y,e[t+2]=h*b+m*y+l*v-p*_,e[t+3]=m*b-l*_-p*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,o=e._z,c=e._order,l=Math.cos,p=Math.sin,h=l(n/2),m=l(r/2),_=l(o/2),v=p(n/2),y=p(r/2),b=p(o/2);switch(c){case"XYZ":this._x=v*m*_+h*y*b,this._y=h*y*_-v*m*b,this._z=h*m*b+v*y*_,this._w=h*m*_-v*y*b;break;case"YXZ":this._x=v*m*_+h*y*b,this._y=h*y*_-v*m*b,this._z=h*m*b-v*y*_,this._w=h*m*_+v*y*b;break;case"ZXY":this._x=v*m*_-h*y*b,this._y=h*y*_+v*m*b,this._z=h*m*b+v*y*_,this._w=h*m*_-v*y*b;break;case"ZYX":this._x=v*m*_-h*y*b,this._y=h*y*_+v*m*b,this._z=h*m*b-v*y*_,this._w=h*m*_+v*y*b;break;case"YZX":this._x=v*m*_+h*y*b,this._y=h*y*_+v*m*b,this._z=h*m*b-v*y*_,this._w=h*m*_-v*y*b;break;case"XZY":this._x=v*m*_-h*y*b,this._y=h*y*_-v*m*b,this._z=h*m*b+v*y*_,this._w=h*m*_+v*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],c=t[1],l=t[5],p=t[9],h=t[2],m=t[6],_=t[10],v=n+l+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-p)*y,this._y=(o-h)*y,this._z=(c-r)*y}else if(n>l&&n>_){const y=2*Math.sqrt(1+n-l-_);this._w=(m-p)/y,this._x=.25*y,this._y=(r+c)/y,this._z=(o+h)/y}else if(l>_){const y=2*Math.sqrt(1+l-n-_);this._w=(o-h)/y,this._x=(r+c)/y,this._y=.25*y,this._z=(p+m)/y}else{const y=2*Math.sqrt(1+_-n-l);this._w=(c-r)/y,this._x=(o+h)/y,this._y=(p+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,c=e._w,l=t._x,p=t._y,h=t._z,m=t._w;return this._x=n*m+c*l+r*h-o*p,this._y=r*m+c*p+o*l-n*h,this._z=o*m+c*h+n*p-r*l,this._w=c*m-n*l-r*p-o*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,c=this._w;let l=c*e._w+n*e._x+r*e._y+o*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=c,this._x=n,this._y=r,this._z=o,this;const p=1-l*l;if(p<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(p),m=Math.atan2(h,l),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*_+this._w*v,this._x=n*_+this._x*v,this._y=r*_+this._y*v,this._z=o*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,n=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,c=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*c,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*c,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,c=e.y,l=e.z,p=e.w,h=p*t+c*r-l*n,m=p*n+l*t-o*r,_=p*r+o*n-c*t,v=-o*t-c*n-l*r;return this.x=h*p+v*-o+m*-l-_*-c,this.y=m*p+v*-c+_*-o-h*-l,this.z=_*p+v*-l+h*-c-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,c=t.x,l=t.y,p=t.z;return this.x=r*p-o*l,this.y=o*c-n*p,this.z=n*l-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ko=new V,Gl=new ls;class cs{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Zi.copy(e.boundingBox),Zi.applyMatrix4(e.matrixWorld),this.union(Zi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let c=0,l=o.count;c<l;c++)oi.fromBufferAttribute(o,c).applyMatrix4(e.matrixWorld),this.expandByPoint(oi)}else r.boundingBox===null&&r.computeBoundingBox(),Zi.copy(r.boundingBox),Zi.applyMatrix4(e.matrixWorld),this.union(Zi)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Ss.subVectors(this.max,Gr),Ki.subVectors(e.a,Gr),Qi.subVectors(e.b,Gr),er.subVectors(e.c,Gr),_i.subVectors(Qi,Ki),vi.subVectors(er,Qi),Di.subVectors(Ki,er);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Di.z,Di.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Di.z,0,-Di.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Di.y,Di.x,0];return!Ho(t,Ki,Qi,er,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Ki,Qi,er,Ss))?!1:(bs.crossVectors(_i,vi),t=[bs.x,bs.y,bs.z],Ho(t,Ki,Qi,er,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new V,new V,new V,new V,new V,new V,new V,new V],oi=new V,Zi=new cs,Ki=new V,Qi=new V,er=new V,_i=new V,vi=new V,Di=new V,Gr=new V,Ss=new V,bs=new V,Ii=new V;function Ho(i,e,t,n,r){for(let o=0,c=i.length-3;o<=c;o+=3){Ii.fromArray(i,o);const l=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),p=e.dot(Ii),h=t.dot(Ii),m=n.dot(Ii);if(Math.max(-Math.max(p,h,m),Math.min(p,h,m))>l)return!1}return!0}const Kh=new cs,Vr=new V,Go=new V;class eo{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kh.setFromPoints(e).getCenter(n);let r=0;for(let o=0,c=e.length;o<c;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Go)),this.expandByPoint(Vr.copy(e.center).sub(Go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new V,Vo=new V,ws=new V,xi=new V,Wo=new V,Es=new V,qo=new V;class La{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vo.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Vo);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ws),l=xi.dot(this.direction),p=-xi.dot(ws),h=xi.lengthSq(),m=Math.abs(1-c*c);let _,v,y,b;if(m>0)if(_=c*p-l,v=c*l-p,b=o*m,_>=0)if(v>=-b)if(v<=b){const w=1/m;_*=w,v*=w,y=_*(_+c*v+2*l)+v*(c*_+v+2*p)+h}else v=o,_=Math.max(0,-(c*v+l)),y=-_*_+v*(v+2*p)+h;else v=-o,_=Math.max(0,-(c*v+l)),y=-_*_+v*(v+2*p)+h;else v<=-b?(_=Math.max(0,-(-c*o+l)),v=_>0?-o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h):v<=b?(_=0,v=Math.min(Math.max(-o,-p),o),y=v*(v+2*p)+h):(_=Math.max(0,-(c*o+l)),v=_>0?o:Math.min(Math.max(-o,-p),o),y=-_*_+v*(v+2*p)+h);else v=c>0?-o:o,_=Math.max(0,-(c*v+l)),y=-_*_+v*(v+2*p)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Vo).addScaledVector(ws,v),y}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,o=e.radius*e.radius;if(r>o)return null;const c=Math.sqrt(o-r),l=n-c,p=n+c;return p<0?null:l<0?this.at(p,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,c,l,p;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(n=(e.min.x-v.x)*h,r=(e.max.x-v.x)*h):(n=(e.max.x-v.x)*h,r=(e.min.x-v.x)*h),m>=0?(o=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),n>c||o>r||((o>n||isNaN(n))&&(n=o),(c<r||isNaN(r))&&(r=c),_>=0?(l=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(l=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),n>p||l>r)||((l>n||n!==n)&&(n=l),(p<r||r!==r)&&(r=p),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,o){Wo.subVectors(t,e),Es.subVectors(n,e),qo.crossVectors(Wo,Es);let c=this.direction.dot(qo),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;xi.subVectors(this.origin,e);const p=l*this.direction.dot(Es.crossVectors(xi,Es));if(p<0)return null;const h=l*this.direction.dot(Wo.cross(xi));if(h<0||p+h>c)return null;const m=-l*xi.dot(qo);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,o,c,l,p,h,m,_,v,y,b,w,M){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=o,g[5]=c,g[9]=l,g[13]=p,g[2]=h,g[6]=m,g[10]=_,g[14]=v,g[3]=y,g[7]=b,g[11]=w,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/tr.setFromMatrixColumn(e,0).length(),o=1/tr.setFromMatrixColumn(e,1).length(),c=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,c=Math.cos(n),l=Math.sin(n),p=Math.cos(r),h=Math.sin(r),m=Math.cos(o),_=Math.sin(o);if(e.order==="XYZ"){const v=c*m,y=c*_,b=l*m,w=l*_;t[0]=p*m,t[4]=-p*_,t[8]=h,t[1]=y+b*h,t[5]=v-w*h,t[9]=-l*p,t[2]=w-v*h,t[6]=b+y*h,t[10]=c*p}else if(e.order==="YXZ"){const v=p*m,y=p*_,b=h*m,w=h*_;t[0]=v+w*l,t[4]=b*l-y,t[8]=c*h,t[1]=c*_,t[5]=c*m,t[9]=-l,t[2]=y*l-b,t[6]=w+v*l,t[10]=c*p}else if(e.order==="ZXY"){const v=p*m,y=p*_,b=h*m,w=h*_;t[0]=v-w*l,t[4]=-c*_,t[8]=b+y*l,t[1]=y+b*l,t[5]=c*m,t[9]=w-v*l,t[2]=-c*h,t[6]=l,t[10]=c*p}else if(e.order==="ZYX"){const v=c*m,y=c*_,b=l*m,w=l*_;t[0]=p*m,t[4]=b*h-y,t[8]=v*h+w,t[1]=p*_,t[5]=w*h+v,t[9]=y*h-b,t[2]=-h,t[6]=l*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,y=c*h,b=l*p,w=l*h;t[0]=p*m,t[4]=w-v*_,t[8]=b*_+y,t[1]=_,t[5]=c*m,t[9]=-l*m,t[2]=-h*m,t[6]=y*_+b,t[10]=v-w*_}else if(e.order==="XZY"){const v=c*p,y=c*h,b=l*p,w=l*h;t[0]=p*m,t[4]=-_,t[8]=h*m,t[1]=v*_+w,t[5]=c*m,t[9]=y*_-b,t[2]=b*_-y,t[6]=l*m,t[10]=w*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,ed)}lookAt(e,t,n){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),yi.crossVectors(n,Tn),yi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),yi.crossVectors(n,Tn)),yi.normalize(),Ts.crossVectors(Tn,yi),r[0]=yi.x,r[4]=Ts.x,r[8]=Tn.x,r[1]=yi.y,r[5]=Ts.y,r[9]=Tn.y,r[2]=yi.z,r[6]=Ts.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,c=n[0],l=n[4],p=n[8],h=n[12],m=n[1],_=n[5],v=n[9],y=n[13],b=n[2],w=n[6],M=n[10],g=n[14],N=n[3],R=n[7],L=n[11],O=n[15],u=r[0],q=r[4],J=r[8],P=r[12],z=r[1],_e=r[5],ue=r[9],Y=r[13],K=r[2],le=r[6],Se=r[10],Me=r[14],de=r[3],be=r[7],ye=r[11],Ve=r[15];return o[0]=c*u+l*z+p*K+h*de,o[4]=c*q+l*_e+p*le+h*be,o[8]=c*J+l*ue+p*Se+h*ye,o[12]=c*P+l*Y+p*Me+h*Ve,o[1]=m*u+_*z+v*K+y*de,o[5]=m*q+_*_e+v*le+y*be,o[9]=m*J+_*ue+v*Se+y*ye,o[13]=m*P+_*Y+v*Me+y*Ve,o[2]=b*u+w*z+M*K+g*de,o[6]=b*q+w*_e+M*le+g*be,o[10]=b*J+w*ue+M*Se+g*ye,o[14]=b*P+w*Y+M*Me+g*Ve,o[3]=N*u+R*z+L*K+O*de,o[7]=N*q+R*_e+L*le+O*be,o[11]=N*J+R*ue+L*Se+O*ye,o[15]=N*P+R*Y+L*Me+O*Ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],c=e[1],l=e[5],p=e[9],h=e[13],m=e[2],_=e[6],v=e[10],y=e[14],b=e[3],w=e[7],M=e[11],g=e[15];return b*(+o*p*_-r*h*_-o*l*v+n*h*v+r*l*y-n*p*y)+w*(+t*p*y-t*h*v+o*c*v-r*c*y+r*h*m-o*p*m)+M*(+t*h*_-t*l*y-o*c*_+n*c*y+o*l*m-n*h*m)+g*(-r*l*m-t*p*_+t*l*v+r*c*_-n*c*v+n*p*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],c=e[4],l=e[5],p=e[6],h=e[7],m=e[8],_=e[9],v=e[10],y=e[11],b=e[12],w=e[13],M=e[14],g=e[15],N=_*M*h-w*v*h+w*p*y-l*M*y-_*p*g+l*v*g,R=b*v*h-m*M*h-b*p*y+c*M*y+m*p*g-c*v*g,L=m*w*h-b*_*h+b*l*y-c*w*y-m*l*g+c*_*g,O=b*_*p-m*w*p-b*l*v+c*w*v+m*l*M-c*_*M,u=t*N+n*R+r*L+o*O;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/u;return e[0]=N*q,e[1]=(w*v*o-_*M*o-w*r*y+n*M*y+_*r*g-n*v*g)*q,e[2]=(l*M*o-w*p*o+w*r*h-n*M*h-l*r*g+n*p*g)*q,e[3]=(_*p*o-l*v*o-_*r*h+n*v*h+l*r*y-n*p*y)*q,e[4]=R*q,e[5]=(m*M*o-b*v*o+b*r*y-t*M*y-m*r*g+t*v*g)*q,e[6]=(b*p*o-c*M*o-b*r*h+t*M*h+c*r*g-t*p*g)*q,e[7]=(c*v*o-m*p*o+m*r*h-t*v*h-c*r*y+t*p*y)*q,e[8]=L*q,e[9]=(b*_*o-m*w*o-b*n*y+t*w*y+m*n*g-t*_*g)*q,e[10]=(c*w*o-b*l*o+b*n*h-t*w*h-c*n*g+t*l*g)*q,e[11]=(m*l*o-c*_*o-m*n*h+t*_*h+c*n*y-t*l*y)*q,e[12]=O*q,e[13]=(m*w*r-b*_*r+b*n*v-t*w*v-m*n*M+t*_*M)*q,e[14]=(b*l*r-c*w*r-b*n*p+t*w*p+c*n*M-t*l*M)*q,e[15]=(c*_*r-m*l*r+m*n*p-t*_*p-c*n*v+t*l*v)*q,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,c=e.x,l=e.y,p=e.z,h=o*c,m=o*l;return this.set(h*c+n,h*l-r*p,h*p+r*l,0,h*l+r*p,m*l+n,m*p-r*c,0,h*p-r*l,m*p+r*c,o*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,c){return this.set(1,n,o,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,c=t._y,l=t._z,p=t._w,h=o+o,m=c+c,_=l+l,v=o*h,y=o*m,b=o*_,w=c*m,M=c*_,g=l*_,N=p*h,R=p*m,L=p*_,O=n.x,u=n.y,q=n.z;return r[0]=(1-(w+g))*O,r[1]=(y+L)*O,r[2]=(b-R)*O,r[3]=0,r[4]=(y-L)*u,r[5]=(1-(v+g))*u,r[6]=(M+N)*u,r[7]=0,r[8]=(b+R)*q,r[9]=(M-N)*q,r[10]=(1-(v+w))*q,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=tr.set(r[0],r[1],r[2]).length();const c=tr.set(r[4],r[5],r[6]).length(),l=tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);const h=1/o,m=1/c,_=1/l;return Hn.elements[0]*=h,Hn.elements[1]*=h,Hn.elements[2]*=h,Hn.elements[4]*=m,Hn.elements[5]*=m,Hn.elements[6]*=m,Hn.elements[8]*=_,Hn.elements[9]*=_,Hn.elements[10]*=_,t.setFromRotationMatrix(Hn),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,o,c){const l=this.elements,p=2*o/(t-e),h=2*o/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r),v=-(c+o)/(c-o),y=-2*c*o/(c-o);return l[0]=p,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=h,l[9]=_,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,o,c){const l=this.elements,p=1/(t-e),h=1/(n-r),m=1/(c-o),_=(t+e)*p,v=(n+r)*h,y=(c+o)*m;return l[0]=2*p,l[4]=0,l[8]=0,l[12]=-_,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*m,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new V,Hn=new Ht,Qh=new V(0,0,0),ed=new V(1,1,1),yi=new V,Ts=new V,Tn=new V,Vl=new Ht,Wl=new ls;class us{constructor(e=0,t=0,n=0,r=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],c=r[4],l=r[8],p=r[1],h=r[5],m=r[9],_=r[2],v=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,o),this._z=0);break;case"ZXY":this._x=Math.asin(fn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,o));break;case"ZYX":this._y=Math.asin(-fn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(fn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,o)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let td=0;const ql=new V,nr=new ls,li=new Ht,As=new V,Wr=new V,nd=new V,id=new ls,jl=new V(1,0,0),Xl=new V(0,1,0),$l=new V(0,0,1),rd={type:"added"},Yl={type:"removed"};class hn extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new V,t=new us,n=new ls,r=new V(1,1,1);function o(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new mt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Xl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Xl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?As.copy(e):As.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Wr,As,this.up):li.lookAt(As,Wr,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),nr.setFromRotationMatrix(li),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectsByProperty(e,t);c.length>0&&(n=n.concat(c))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,nd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,c=r.length;o<c;o++){const l=r[o];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(l,p){return l[p.uuid]===void 0&&(l[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const p=l.shapes;if(Array.isArray(p))for(let h=0,m=p.length;h<m;h++){const _=p[h];o(e.shapes,_)}else o(e.shapes,p)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let p=0,h=this.material.length;p<h;p++)l.push(o(e.materials,this.material[p]));r.material=l}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const p=this.animations[l];r.animations.push(o(e.animations,p))}}if(t){const l=c(e.geometries),p=c(e.materials),h=c(e.textures),m=c(e.images),_=c(e.shapes),v=c(e.skeletons),y=c(e.animations),b=c(e.nodes);l.length>0&&(n.geometries=l),p.length>0&&(n.materials=p),h.length>0&&(n.textures=h),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),b.length>0&&(n.nodes=b)}return n.object=r,n;function c(l){const p=[];for(const h in l){const m=l[h];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}hn.DEFAULT_UP=new V(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new V,ci=new V,jo=new V,ui=new V,ir=new V,rr=new V,Jl=new V,Xo=new V,$o=new V,Yo=new V;let Cs=!1;class Wn{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gn.subVectors(e,t),r.cross(Gn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Gn.subVectors(r,t),ci.subVectors(n,t),jo.subVectors(e,t);const c=Gn.dot(Gn),l=Gn.dot(ci),p=Gn.dot(jo),h=ci.dot(ci),m=ci.dot(jo),_=c*h-l*l;if(_===0)return o.set(-2,-1,-1);const v=1/_,y=(h*p-l*m)*v,b=(c*m-l*p)*v;return o.set(1-y-b,b,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,n,r,o,c,l,p){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),this.getInterpolation(e,t,n,r,o,c,l,p)}static getInterpolation(e,t,n,r,o,c,l,p){return this.getBarycoord(e,t,n,r,ui),p.setScalar(0),p.addScaledVector(o,ui.x),p.addScaledVector(c,ui.y),p.addScaledVector(l,ui.z),p}static isFrontFacing(e,t,n,r){return Gn.subVectors(n,t),ci.subVectors(e,t),Gn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Gn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return Cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Cs=!0),Wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let c,l;ir.subVectors(r,n),rr.subVectors(o,n),Xo.subVectors(e,n);const p=ir.dot(Xo),h=rr.dot(Xo);if(p<=0&&h<=0)return t.copy(n);$o.subVectors(e,r);const m=ir.dot($o),_=rr.dot($o);if(m>=0&&_<=m)return t.copy(r);const v=p*_-m*h;if(v<=0&&p>=0&&m<=0)return c=p/(p-m),t.copy(n).addScaledVector(ir,c);Yo.subVectors(e,o);const y=ir.dot(Yo),b=rr.dot(Yo);if(b>=0&&y<=b)return t.copy(o);const w=y*h-p*b;if(w<=0&&h>=0&&b<=0)return l=h/(h-b),t.copy(n).addScaledVector(rr,l);const M=m*b-y*_;if(M<=0&&_-m>=0&&y-b>=0)return Jl.subVectors(o,r),l=(_-m)/(_-m+(y-b)),t.copy(r).addScaledVector(Jl,l);const g=1/(M+w+v);return c=w*g,l=v*g,t.copy(n).addScaledVector(ir,c).addScaledVector(rr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let sd=0;class Lr extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=_r,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yc,this.blendDst=Jc,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const c=[];for(const l in o){const p=o[l];delete p.metadata,c.push(p)}return c}if(t){const o=r(e.textures),c=r(e.images);o.length>0&&(n.textures=o),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=En.workingColorSpace){if(e=Ca(e,1),t=fn(t,0,1),n=fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,c=2*n-o;this.r=Jo(c,o,e+1/3),this.g=Jo(c,o,e),this.b=Jo(c,o,e-1/3)}return En.toWorkingColorSpace(this,r),this}setStyle(e,t=Jn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,En.toWorkingColorSpace(this,t),n(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,En.toWorkingColorSpace(this,t),n(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const p=parseFloat(o[1])/360,h=parseFloat(o[2])/100,m=parseFloat(o[3])/100;return n(o[4]),this.setHSL(p,h,m,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const n=au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return En.fromWorkingColorSpace(an.copy(this),e),fn(an.r*255,0,255)<<16^fn(an.g*255,0,255)<<8^fn(an.b*255,0,255)<<0}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.fromWorkingColorSpace(an.copy(this),t);const n=an.r,r=an.g,o=an.b,c=Math.max(n,r,o),l=Math.min(n,r,o);let p,h;const m=(l+c)/2;if(l===c)p=0,h=0;else{const _=c-l;switch(h=m<=.5?_/(c+l):_/(2-c-l),c){case n:p=(r-o)/_+(r<o?6:0);break;case r:p=(o-n)/_+2;break;case o:p=(n-r)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=m,e}getRGB(e,t=En.workingColorSpace){return En.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Jn){En.fromWorkingColorSpace(an.copy(this),e);const t=an.r,n=an.g,r=an.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(Vn),Vn.h+=e,Vn.s+=t,Vn.l+=n,this.setHSL(Vn.h,Vn.s,Vn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vn),e.getHSL(Ls);const n=Qr(Vn.h,Ls.h,t),r=Qr(Vn.s,Ls.s,t),o=Qr(Vn.l,Ls.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new bt;bt.NAMES=au;class Ra extends Lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new V,Ps=new wt;class ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ps.fromBufferAttribute(this,t),Ps.applyMatrix3(e),this.setXY(t,Ps.x,Ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),n=gn(n,this.array),r=gn(r,this.array),o=gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lu extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cu extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let od=0;const In=new Ht,Zo=new hn,sr=new V,An=new cs,qr=new cs,Qt=new V;class Xn extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?cu:lu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new mt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const l=t[o];qr.setFromBufferAttribute(l),this.morphTargetsRelative?(Qt.addVectors(An.min,qr.min),An.expandByPoint(Qt),Qt.addVectors(An.max,qr.max),An.expandByPoint(Qt)):(An.expandByPoint(qr.min),An.expandByPoint(qr.max))}An.getCenter(n);let r=0;for(let o=0,c=e.count;o<c;o++)Qt.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Qt));if(t)for(let o=0,c=t.length;o<c;o++){const l=t[o],p=this.morphTargetsRelative;for(let h=0,m=l.count;h<m;h++)Qt.fromBufferAttribute(l,h),p&&(sr.fromBufferAttribute(e,h),Qt.add(sr)),r=Math.max(r,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,o=t.normal.array,c=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*l),4));const p=this.getAttribute("tangent").array,h=[],m=[];for(let z=0;z<l;z++)h[z]=new V,m[z]=new V;const _=new V,v=new V,y=new V,b=new wt,w=new wt,M=new wt,g=new V,N=new V;function R(z,_e,ue){_.fromArray(r,z*3),v.fromArray(r,_e*3),y.fromArray(r,ue*3),b.fromArray(c,z*2),w.fromArray(c,_e*2),M.fromArray(c,ue*2),v.sub(_),y.sub(_),w.sub(b),M.sub(b);const Y=1/(w.x*M.y-M.x*w.y);isFinite(Y)&&(g.copy(v).multiplyScalar(M.y).addScaledVector(y,-w.y).multiplyScalar(Y),N.copy(y).multiplyScalar(w.x).addScaledVector(v,-M.x).multiplyScalar(Y),h[z].add(g),h[_e].add(g),h[ue].add(g),m[z].add(N),m[_e].add(N),m[ue].add(N))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let z=0,_e=L.length;z<_e;++z){const ue=L[z],Y=ue.start,K=ue.count;for(let le=Y,Se=Y+K;le<Se;le+=3)R(n[le+0],n[le+1],n[le+2])}const O=new V,u=new V,q=new V,J=new V;function P(z){q.fromArray(o,z*3),J.copy(q);const _e=h[z];O.copy(_e),O.sub(q.multiplyScalar(q.dot(_e))).normalize(),u.crossVectors(J,_e);const Y=u.dot(m[z])<0?-1:1;p[z*4]=O.x,p[z*4+1]=O.y,p[z*4+2]=O.z,p[z*4+3]=Y}for(let z=0,_e=L.length;z<_e;++z){const ue=L[z],Y=ue.start,K=ue.count;for(let le=Y,Se=Y+K;le<Se;le+=3)P(n[le+0]),P(n[le+1]),P(n[le+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const r=new V,o=new V,c=new V,l=new V,p=new V,h=new V,m=new V,_=new V;if(e)for(let v=0,y=e.count;v<y;v+=3){const b=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,M),m.subVectors(c,o),_.subVectors(r,o),m.cross(_),l.fromBufferAttribute(n,b),p.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),l.add(m),p.add(m),h.add(m),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(w,p.x,p.y,p.z),n.setXYZ(M,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)r.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,o),_.subVectors(r,o),m.cross(_),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(l,p){const h=l.array,m=l.itemSize,_=l.normalized,v=new h.constructor(p.length*m);let y=0,b=0;for(let w=0,M=p.length;w<M;w++){l.isInterleavedBufferAttribute?y=p[w]*l.data.stride+l.offset:y=p[w]*m;for(let g=0;g<m;g++)v[b++]=h[y++]}return new ei(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,n=this.index.array,r=this.attributes;for(const l in r){const p=r[l],h=e(p,n);t.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const p=[],h=o[l];for(let m=0,_=h.length;m<_;m++){const v=h[m],y=e(v,n);p.push(y)}t.morphAttributes[l]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let l=0,p=c.length;l<p;l++){const h=c[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const h=n[p];e.data.attributes[p]=h.toJSON(e.data)}const r={};let o=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],m=[];for(let _=0,v=h.length;_<v;_++){const y=h[_];m.push(y.toJSON(e.data))}m.length>0&&(r[p]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const m=r[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],_=o[h];for(let v=0,y=_.length;v<y;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zl=new Ht,Yn=new La,Rs=new eo,Kl=new V,or=new V,ar=new V,lr=new V,Ko=new V,Ds=new V,Is=new wt,Us=new wt,Ns=new wt,Ql=new V,ec=new V,tc=new V,Os=new V,Fs=new V;class Ln extends hn{constructor(e=new Xn,t=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(o&&l){Ds.set(0,0,0);for(let p=0,h=o.length;p<h;p++){const m=l[p],_=o[p];m!==0&&(Ko.fromBufferAttribute(_,e),c?Ds.addScaledVector(Ko,m):Ds.addScaledVector(Ko.sub(t),m))}t.add(Ds)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(o),Yn.copy(e.ray).recast(e.near),Rs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Rs,Kl)===null||Yn.origin.distanceToSquared(Kl)>(e.far-e.near)**2))||(Zl.copy(o).invert(),Yn.copy(e.ray).applyMatrix4(Zl),n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1))return;let c;const l=n.index,p=n.attributes.position,h=n.attributes.uv,m=n.attributes.uv2,_=n.attributes.normal,v=n.groups,y=n.drawRange;if(l!==null)if(Array.isArray(r))for(let b=0,w=v.length;b<w;b++){const M=v[b],g=r[M.materialIndex],N=Math.max(M.start,y.start),R=Math.min(l.count,Math.min(M.start+M.count,y.start+y.count));for(let L=N,O=R;L<O;L+=3){const u=l.getX(L),q=l.getX(L+1),J=l.getX(L+2);c=zs(this,g,e,Yn,h,m,_,u,q,J),c&&(c.faceIndex=Math.floor(L/3),c.face.materialIndex=M.materialIndex,t.push(c))}}else{const b=Math.max(0,y.start),w=Math.min(l.count,y.start+y.count);for(let M=b,g=w;M<g;M+=3){const N=l.getX(M),R=l.getX(M+1),L=l.getX(M+2);c=zs(this,r,e,Yn,h,m,_,N,R,L),c&&(c.faceIndex=Math.floor(M/3),t.push(c))}}else if(p!==void 0)if(Array.isArray(r))for(let b=0,w=v.length;b<w;b++){const M=v[b],g=r[M.materialIndex],N=Math.max(M.start,y.start),R=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=N,O=R;L<O;L+=3){const u=L,q=L+1,J=L+2;c=zs(this,g,e,Yn,h,m,_,u,q,J),c&&(c.faceIndex=Math.floor(L/3),c.face.materialIndex=M.materialIndex,t.push(c))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=b,g=w;M<g;M+=3){const N=M,R=M+1,L=M+2;c=zs(this,r,e,Yn,h,m,_,N,R,L),c&&(c.faceIndex=Math.floor(M/3),t.push(c))}}}}function ad(i,e,t,n,r,o,c,l){let p;if(e.side===_n?p=n.intersectTriangle(c,o,r,!0,l):p=n.intersectTriangle(r,o,c,e.side===bi,l),p===null)return null;Fs.copy(l),Fs.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Fs);return h<t.near||h>t.far?null:{distance:h,point:Fs.clone(),object:i}}function zs(i,e,t,n,r,o,c,l,p,h){i.getVertexPosition(l,or),i.getVertexPosition(p,ar),i.getVertexPosition(h,lr);const m=ad(i,e,t,n,or,ar,lr,Os);if(m){r&&(Is.fromBufferAttribute(r,l),Us.fromBufferAttribute(r,p),Ns.fromBufferAttribute(r,h),m.uv=Wn.getInterpolation(Os,or,ar,lr,Is,Us,Ns,new wt)),o&&(Is.fromBufferAttribute(o,l),Us.fromBufferAttribute(o,p),Ns.fromBufferAttribute(o,h),m.uv2=Wn.getInterpolation(Os,or,ar,lr,Is,Us,Ns,new wt)),c&&(Ql.fromBufferAttribute(c,l),ec.fromBufferAttribute(c,p),tc.fromBufferAttribute(c,h),m.normal=Wn.getInterpolation(Os,or,ar,lr,Ql,ec,tc,new V),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const _={a:l,b:p,c:h,normal:new V,materialIndex:0};Wn.getNormal(or,ar,lr,_.normal),m.face=_}return m}class ji extends Xn{constructor(e=1,t=1,n=1,r=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:c};const l=this;r=Math.floor(r),o=Math.floor(o),c=Math.floor(c);const p=[],h=[],m=[],_=[];let v=0,y=0;b("z","y","x",-1,-1,n,t,e,c,o,0),b("z","y","x",1,-1,n,t,-e,c,o,1),b("x","z","y",1,1,e,n,t,r,c,2),b("x","z","y",1,-1,e,n,-t,r,c,3),b("x","y","z",1,-1,e,t,n,r,o,4),b("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(p),this.setAttribute("position",new rn(h,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(_,2));function b(w,M,g,N,R,L,O,u,q,J,P){const z=L/q,_e=O/J,ue=L/2,Y=O/2,K=u/2,le=q+1,Se=J+1;let Me=0,de=0;const be=new V;for(let ye=0;ye<Se;ye++){const Ve=ye*_e-Y;for(let we=0;we<le;we++){const te=we*z-ue;be[w]=te*N,be[M]=Ve*R,be[g]=K,h.push(be.x,be.y,be.z),be[w]=0,be[M]=0,be[g]=u>0?1:-1,m.push(be.x,be.y,be.z),_.push(we/q),_.push(1-ye/J),Me+=1}}for(let ye=0;ye<J;ye++)for(let Ve=0;Ve<q;Ve++){const we=v+Ve+le*ye,te=v+Ve+le*(ye+1),he=v+(Ve+1)+le*(ye+1),Le=v+(Ve+1)+le*ye;p.push(we,te,Le),p.push(te,he,Le),de+=6}l.addGroup(y,de,P),y+=de,v+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function br(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=br(i[t]);for(const r in n)e[r]=n[r]}return e}function ld(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){return i.getRenderTarget()===null&&i.outputEncoding===Rt?Jn:is}const cd={clone:br,merge:cn};var ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=br(e.uniforms),this.uniformsGroups=ld(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fu extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends fu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;o+=c.offsetX*r/p,t-=c.offsetY*n/h,r*=c.width/p,n*=c.height/h}const l=this.filmOffset;l!==0&&(o+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cr=-90,ur=1;class hd extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Cn(cr,ur,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const o=new Cn(cr,ur,e,t);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(-1,0,0),this.add(o);const c=new Cn(cr,ur,e,t);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(0,1,0),this.add(c);const l=new Cn(cr,ur,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const p=new Cn(cr,ur,e,t);p.layers=this.layers,p.up.set(0,1,0),p.lookAt(0,0,1),this.add(p);const h=new Cn(cr,ur,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,o,c,l,p,h]=this.children,m=e.getRenderTarget(),_=e.toneMapping,v=e.xr.enabled;e.toneMapping=hi,e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,c),e.setRenderTarget(n,3),e.render(t,l),e.setRenderTarget(n,4),e.render(t,p),n.texture.generateMipmaps=y,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(m),e.toneMapping=_,e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class hu extends vn{constructor(e,t,n,r,o,c,l,p,h,m){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,n,r,o,c,l,p,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dd extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new hu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ji(5,5,5),o=new Wi({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Si});o.uniforms.tEquirect.value=t;const c=new Ln(r,o),l=t.minFilter;return t.minFilter===ts&&(t.minFilter=Un),new hd(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(o)}}const Qo=new V,pd=new V,md=new mt;class Ni{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qo.subVectors(n,t).cross(pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||md.getNormalMatrix(e),r=this.coplanarPoint(Qo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new eo,Bs=new V;class Da{constructor(e=new Ni,t=new Ni,n=new Ni,r=new Ni,o=new Ni,c=new Ni){this.planes=[e,t,n,r,o,c]}set(e,t,n,r,o,c){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(o),l[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],o=n[1],c=n[2],l=n[3],p=n[4],h=n[5],m=n[6],_=n[7],v=n[8],y=n[9],b=n[10],w=n[11],M=n[12],g=n[13],N=n[14],R=n[15];return t[0].setComponents(l-r,_-p,w-v,R-M).normalize(),t[1].setComponents(l+r,_+p,w+v,R+M).normalize(),t[2].setComponents(l+o,_+h,w+y,R+g).normalize(),t[3].setComponents(l-o,_-h,w-y,R-g).normalize(),t[4].setComponents(l-c,_-m,w-b,R-N).normalize(),t[5].setComponents(l+c,_+m,w+b,R+N).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bs.x=r.normal.x>0?e.max.x:e.min.x,Bs.y=r.normal.y>0?e.max.y:e.min.y,Bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function du(){let i=null,e=!1,t=null,n=null;function r(o,c){t(o,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function gd(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,m){const _=h.array,v=h.usage,y=i.createBuffer();i.bindBuffer(m,y),i.bufferData(m,_,v),h.onUploadCallback();let b;if(_ instanceof Float32Array)b=5126;else if(_ instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(_ instanceof Int16Array)b=5122;else if(_ instanceof Uint32Array)b=5125;else if(_ instanceof Int32Array)b=5124;else if(_ instanceof Int8Array)b=5120;else if(_ instanceof Uint8Array)b=5121;else if(_ instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:y,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:h.version}}function o(h,m,_){const v=m.array,y=m.updateRange;i.bindBuffer(_,h),y.count===-1?i.bufferSubData(_,0,v):(t?i.bufferSubData(_,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count):i.bufferSubData(_,y.offset*v.BYTES_PER_ELEMENT,v.subarray(y.offset,y.offset+y.count)),y.count=-1),m.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=n.get(h);m&&(i.deleteBuffer(m.buffer),n.delete(h))}function p(h,m){if(h.isGLBufferAttribute){const v=n.get(h);(!v||v.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const _=n.get(h);_===void 0?n.set(h,r(h,m)):_.version<h.version&&(o(_.buffer,h,m),_.version=h.version)}return{get:c,remove:l,update:p}}class Ia extends Xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,c=t/2,l=Math.floor(n),p=Math.floor(r),h=l+1,m=p+1,_=e/l,v=t/p,y=[],b=[],w=[],M=[];for(let g=0;g<m;g++){const N=g*v-c;for(let R=0;R<h;R++){const L=R*_-o;b.push(L,-N,0),w.push(0,0,1),M.push(R/l),M.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<l;N++){const R=N+h*g,L=N+h*(g+1),O=N+1+h*(g+1),u=N+1+h*g;y.push(R,L,u),y.push(L,O,u)}this.setIndex(y),this.setAttribute("position",new rn(b,3)),this.setAttribute("normal",new rn(w,3)),this.setAttribute("uv",new rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}var _d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd="vec3 transformed = vec3( position );",wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Td=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Od=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ep=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,op=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,hp=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,dp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,Op=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,am=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lm=`#ifdef USE_UV
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
#endif`,cm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
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
#endif`,um=`#ifdef USE_UV
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
#endif`,fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ym=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Mm=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tm=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Am=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Lm=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Rm=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Im=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Nm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Fm=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Bm=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Vm=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ft={alphamap_fragment:_d,alphamap_pars_fragment:vd,alphatest_fragment:xd,alphatest_pars_fragment:yd,aomap_fragment:Md,aomap_pars_fragment:Sd,begin_vertex:bd,beginnormal_vertex:wd,bsdfs:Ed,iridescence_fragment:Td,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Rd,color_fragment:Dd,color_pars_fragment:Id,color_pars_vertex:Ud,color_vertex:Nd,common:Od,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:zd,displacementmap_pars_vertex:Bd,displacementmap_vertex:kd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,encodings_fragment:Vd,encodings_pars_fragment:Wd,envmap_fragment:qd,envmap_common_pars_fragment:jd,envmap_pars_fragment:Xd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:op,envmap_vertex:Yd,fog_vertex:Jd,fog_pars_vertex:Zd,fog_fragment:Kd,fog_pars_fragment:Qd,gradientmap_pars_fragment:ep,lightmap_fragment:tp,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:rp,lights_pars_begin:sp,lights_toon_fragment:ap,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:up,lights_physical_fragment:fp,lights_physical_pars_fragment:hp,lights_fragment_begin:dp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:xp,map_fragment:yp,map_pars_fragment:Mp,map_particle_fragment:Sp,map_particle_pars_fragment:bp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ep,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Cp,morphtarget_vertex:Lp,normal_fragment_begin:Pp,normal_fragment_maps:Rp,normal_pars_fragment:Dp,normal_pars_vertex:Ip,normal_vertex:Up,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Op,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Bp,output_fragment:kp,packing:Hp,premultiplied_alpha_fragment:Gp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:qp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Xp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Yp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Zp,skinbase_vertex:Kp,skinning_pars_vertex:Qp,skinning_vertex:em,skinnormal_vertex:tm,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:rm,tonemapping_pars_fragment:sm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:um,worldpos_vertex:fm,background_vert:hm,background_frag:dm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:_m,depth_vert:vm,depth_frag:xm,distanceRGBA_vert:ym,distanceRGBA_frag:Mm,equirect_vert:Sm,equirect_frag:bm,linedashed_vert:wm,linedashed_frag:Em,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Cm,meshlambert_frag:Lm,meshmatcap_vert:Pm,meshmatcap_frag:Rm,meshnormal_vert:Dm,meshnormal_frag:Im,meshphong_vert:Um,meshphong_frag:Nm,meshphysical_vert:Om,meshphysical_frag:Fm,meshtoon_vert:zm,meshtoon_frag:Bm,points_vert:km,points_frag:Hm,shadow_vert:Gm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:qm},Ae={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaTest:{value:0}}},Zn={basic:{uniforms:cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:cn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:cn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new bt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:cn([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:cn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:cn([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:cn([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:cn([Ae.common,Ae.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:cn([Ae.lights,Ae.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Zn.physical={uniforms:cn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const ks={r:0,b:0,g:0};function jm(i,e,t,n,r,o,c){const l=new bt(0);let p=o===!0?0:1,h,m,_=null,v=0,y=null;function b(M,g){let N=!1,R=g.isScene===!0?g.background:null;R&&R.isTexture&&(R=(g.backgroundBlurriness>0?t:e).get(R));const L=i.xr,O=L.getSession&&L.getSession();O&&O.environmentBlendMode==="additive"&&(R=null),R===null?w(l,p):R&&R.isColor&&(w(R,1),N=!0),(i.autoClear||N)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Qs)?(m===void 0&&(m=new Ln(new ji(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:br(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(u,q,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.toneMapped=R.encoding!==Rt,(_!==R||v!==R.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,_=R,v=R.version,y=i.toneMapping),m.layers.enableAll(),M.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new Ln(new Ia(2,2),new Wi({name:"BackgroundMaterial",uniforms:br(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=R.encoding!==Rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||y!==i.toneMapping)&&(h.material.needsUpdate=!0,_=R,v=R.version,y=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function w(M,g){M.getRGB(ks,uu(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,g,c)}return{getClearColor:function(){return l},setClearColor:function(M,g=1){l.set(M),p=g,w(l,p)},getClearAlpha:function(){return p},setClearAlpha:function(M){p=M,w(l,p)},render:b}}function Xm(i,e,t,n){const r=i.getParameter(34921),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),c=n.isWebGL2||o!==null,l={},p=M(null);let h=p,m=!1;function _(K,le,Se,Me,de){let be=!1;if(c){const ye=w(Me,Se,le);h!==ye&&(h=ye,y(h.object)),be=g(K,Me,Se,de),be&&N(K,Me,Se,de)}else{const ye=le.wireframe===!0;(h.geometry!==Me.id||h.program!==Se.id||h.wireframe!==ye)&&(h.geometry=Me.id,h.program=Se.id,h.wireframe=ye,be=!0)}de!==null&&t.update(de,34963),(be||m)&&(m=!1,J(K,le,Se,Me),de!==null&&i.bindBuffer(34963,t.get(de).buffer))}function v(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function y(K){return n.isWebGL2?i.bindVertexArray(K):o.bindVertexArrayOES(K)}function b(K){return n.isWebGL2?i.deleteVertexArray(K):o.deleteVertexArrayOES(K)}function w(K,le,Se){const Me=Se.wireframe===!0;let de=l[K.id];de===void 0&&(de={},l[K.id]=de);let be=de[le.id];be===void 0&&(be={},de[le.id]=be);let ye=be[Me];return ye===void 0&&(ye=M(v()),be[Me]=ye),ye}function M(K){const le=[],Se=[],Me=[];for(let de=0;de<r;de++)le[de]=0,Se[de]=0,Me[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:le,enabledAttributes:Se,attributeDivisors:Me,object:K,attributes:{},index:null}}function g(K,le,Se,Me){const de=h.attributes,be=le.attributes;let ye=0;const Ve=Se.getAttributes();for(const we in Ve)if(Ve[we].location>=0){const he=de[we];let Le=be[we];if(Le===void 0&&(we==="instanceMatrix"&&K.instanceMatrix&&(Le=K.instanceMatrix),we==="instanceColor"&&K.instanceColor&&(Le=K.instanceColor)),he===void 0||he.attribute!==Le||Le&&he.data!==Le.data)return!0;ye++}return h.attributesNum!==ye||h.index!==Me}function N(K,le,Se,Me){const de={},be=le.attributes;let ye=0;const Ve=Se.getAttributes();for(const we in Ve)if(Ve[we].location>=0){let he=be[we];he===void 0&&(we==="instanceMatrix"&&K.instanceMatrix&&(he=K.instanceMatrix),we==="instanceColor"&&K.instanceColor&&(he=K.instanceColor));const Le={};Le.attribute=he,he&&he.data&&(Le.data=he.data),de[we]=Le,ye++}h.attributes=de,h.attributesNum=ye,h.index=Me}function R(){const K=h.newAttributes;for(let le=0,Se=K.length;le<Se;le++)K[le]=0}function L(K){O(K,0)}function O(K,le){const Se=h.newAttributes,Me=h.enabledAttributes,de=h.attributeDivisors;Se[K]=1,Me[K]===0&&(i.enableVertexAttribArray(K),Me[K]=1),de[K]!==le&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](K,le),de[K]=le)}function u(){const K=h.newAttributes,le=h.enabledAttributes;for(let Se=0,Me=le.length;Se<Me;Se++)le[Se]!==K[Se]&&(i.disableVertexAttribArray(Se),le[Se]=0)}function q(K,le,Se,Me,de,be){n.isWebGL2===!0&&(Se===5124||Se===5125)?i.vertexAttribIPointer(K,le,Se,de,be):i.vertexAttribPointer(K,le,Se,Me,de,be)}function J(K,le,Se,Me){if(n.isWebGL2===!1&&(K.isInstancedMesh||Me.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const de=Me.attributes,be=Se.getAttributes(),ye=le.defaultAttributeValues;for(const Ve in be){const we=be[Ve];if(we.location>=0){let te=de[Ve];if(te===void 0&&(Ve==="instanceMatrix"&&K.instanceMatrix&&(te=K.instanceMatrix),Ve==="instanceColor"&&K.instanceColor&&(te=K.instanceColor)),te!==void 0){const he=te.normalized,Le=te.itemSize,Ie=t.get(te);if(Ie===void 0)continue;const Q=Ie.buffer,et=Ie.type,We=Ie.bytesPerElement;if(te.isInterleavedBufferAttribute){const Te=te.data,Ke=Te.stride,xt=te.offset;if(Te.isInstancedInterleavedBuffer){for(let Oe=0;Oe<we.locationSize;Oe++)O(we.location+Oe,Te.meshPerAttribute);K.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Oe=0;Oe<we.locationSize;Oe++)L(we.location+Oe);i.bindBuffer(34962,Q);for(let Oe=0;Oe<we.locationSize;Oe++)q(we.location+Oe,Le/we.locationSize,et,he,Ke*We,(xt+Le/we.locationSize*Oe)*We)}else{if(te.isInstancedBufferAttribute){for(let Te=0;Te<we.locationSize;Te++)O(we.location+Te,te.meshPerAttribute);K.isInstancedMesh!==!0&&Me._maxInstanceCount===void 0&&(Me._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Te=0;Te<we.locationSize;Te++)L(we.location+Te);i.bindBuffer(34962,Q);for(let Te=0;Te<we.locationSize;Te++)q(we.location+Te,Le/we.locationSize,et,he,Le*We,Le/we.locationSize*Te*We)}}else if(ye!==void 0){const he=ye[Ve];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(we.location,he);break;case 3:i.vertexAttrib3fv(we.location,he);break;case 4:i.vertexAttrib4fv(we.location,he);break;default:i.vertexAttrib1fv(we.location,he)}}}}u()}function P(){ue();for(const K in l){const le=l[K];for(const Se in le){const Me=le[Se];for(const de in Me)b(Me[de].object),delete Me[de];delete le[Se]}delete l[K]}}function z(K){if(l[K.id]===void 0)return;const le=l[K.id];for(const Se in le){const Me=le[Se];for(const de in Me)b(Me[de].object),delete Me[de];delete le[Se]}delete l[K.id]}function _e(K){for(const le in l){const Se=l[le];if(Se[K.id]===void 0)continue;const Me=Se[K.id];for(const de in Me)b(Me[de].object),delete Me[de];delete Se[K.id]}}function ue(){Y(),m=!0,h!==p&&(h=p,y(h.object))}function Y(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:_,reset:ue,resetDefaultState:Y,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:_e,initAttributes:R,enableAttribute:L,disableUnusedAttributes:u}}function $m(i,e,t,n){const r=n.isWebGL2;let o;function c(h){o=h}function l(h,m){i.drawArrays(o,h,m),t.update(m,o,1)}function p(h,m,_){if(_===0)return;let v,y;if(r)v=i,y="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](o,h,m,_),t.update(m,o,_)}this.setMode=c,this.render=l,this.renderInstances=p}function Ym(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(q){if(q==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";q="mediump"}return q==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const c=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const p=o(l);p!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const h=c||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,_=i.getParameter(34930),v=i.getParameter(35660),y=i.getParameter(3379),b=i.getParameter(34076),w=i.getParameter(34921),M=i.getParameter(36347),g=i.getParameter(36348),N=i.getParameter(36349),R=v>0,L=c||e.has("OES_texture_float"),O=R&&L,u=c?i.getParameter(36183):0;return{isWebGL2:c,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:o,precision:l,logarithmicDepthBuffer:m,maxTextures:_,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:b,maxAttributes:w,maxVertexUniforms:M,maxVaryings:g,maxFragmentUniforms:N,vertexTextures:R,floatFragmentTextures:L,floatVertexTextures:O,maxSamples:u}}function Jm(i){const e=this;let t=null,n=0,r=!1,o=!1;const c=new Ni,l=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||n!==0||r;return r=v,n=_.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,y){const b=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,g=i.get(_);if(!r||b===null||b.length===0||o&&!M)o?m(null):h();else{const N=o?0:n,R=N*4;let L=g.clippingState||null;p.value=L,L=m(b,v,R,y);for(let O=0;O!==R;++O)L[O]=t[O];g.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,v,y,b){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=p.value,b!==!0||M===null){const g=y+w*4,N=v.matrixWorldInverse;l.getNormalMatrix(N),(M===null||M.length<g)&&(M=new Float32Array(g));for(let R=0,L=y;R!==w;++R,L+=4)c.copy(_[R]).applyMatrix4(N,l),c.normal.toArray(M,L),M[L+3]=c.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function Zm(i){let e=new WeakMap;function t(c,l){return l===ha?c.mapping=yr:l===da&&(c.mapping=Mr),c}function n(c){if(c&&c.isTexture&&c.isRenderTargetTexture===!1){const l=c.mapping;if(l===ha||l===da)if(e.has(c)){const p=e.get(c).texture;return t(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new dd(p.height/2);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",r),t(h.texture,c.mapping)}else return null}}return c}function r(c){const l=c.target;l.removeEventListener("dispose",r);const p=e.get(l);p!==void 0&&(e.delete(l),p.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Km extends fu{constructor(e=-1,t=1,n=1,r=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,c=n+e,l=r+t,p=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,l-=m*this.view.offsetY,p=l-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,l,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,nc=[.125,.215,.35,.446,.526,.582],Fi=20,ea=new Km,ic=new bt;let ta=null;const Oi=(1+Math.sqrt(5))/2,fr=1/Oi,rc=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Oi,fr),new V(0,Oi,-fr),new V(fr,0,Oi),new V(-fr,0,Oi),new V(Oi,fr,0),new V(-Oi,fr,0)];class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ta=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta),e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:ns,format:jn,encoding:Gi,depthBuffer:!1},r=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(o)),this._blurMaterial=eg(o,e,t)}return r}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,r){const l=new Cn(90,1,t,n),p=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(ic),m.toneMapping=hi,m.autoClear=!1;const y=new Ra({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),b=new Ln(new ji,y);let w=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,w=!0):(y.color.copy(ic),w=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(l.up.set(0,p[g],0),l.lookAt(h[g],0,0)):N===1?(l.up.set(0,0,p[g]),l.lookAt(0,h[g],0)):(l.up.set(0,p[g],0),l.lookAt(0,0,h[g]));const R=this._cubeSize;Hs(r,N*R,g>2?R:0,R,R),m.setRenderTarget(r),w&&m.render(b,l),m.render(e,l)}b.geometry.dispose(),b.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===yr||e.mapping===Mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const o=r?this._cubemapMaterial:this._equirectMaterial,c=new Ln(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=e;const p=this._cubeSize;Hs(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(c,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=rc[(r-1)%rc.length];this._blur(e,r-1,r,o,c)}t.autoClear=n}_blur(e,t,n,r,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",o),this._halfBlur(c,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,c,l){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Ln(this._lodPlanes[r],h),v=h.uniforms,y=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Fi-1),w=o/b,M=isFinite(o)?1+Math.floor(m*w):Fi;M>Fi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Fi}`);const g=[];let N=0;for(let q=0;q<Fi;++q){const J=q/w,P=Math.exp(-J*J/2);g.push(P),q===0?N+=P:q<M&&(N+=2*P)}for(let q=0;q<g.length;q++)g[q]=g[q]/N;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=g,v.latitudinal.value=c==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:R}=this;v.dTheta.value=b,v.mipInt.value=R-n;const L=this._sizeLods[r],O=3*L*(r>R-mr?r-R+mr:0),u=4*(this._cubeSize-L);Hs(t,O,u,3*L,2*L),p.setRenderTarget(t),p.render(_,ea)}}function Qm(i){const e=[],t=[],n=[];let r=i;const o=i-mr+1+nc.length;for(let c=0;c<o;c++){const l=Math.pow(2,r);t.push(l);let p=1/l;c>i-mr?p=nc[c-i+mr-1]:c===0&&(p=0),n.push(p);const h=1/(l-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,b=6,w=3,M=2,g=1,N=new Float32Array(w*b*y),R=new Float32Array(M*b*y),L=new Float32Array(g*b*y);for(let u=0;u<y;u++){const q=u%3*2/3-1,J=u>2?0:-1,P=[q,J,0,q+2/3,J,0,q+2/3,J+1,0,q,J,0,q+2/3,J+1,0,q,J+1,0];N.set(P,w*b*u),R.set(v,M*b*u);const z=[u,u,u,u,u,u];L.set(z,g*b*u)}const O=new Xn;O.setAttribute("position",new ei(N,w)),O.setAttribute("uv",new ei(R,M)),O.setAttribute("faceIndex",new ei(L,g)),e.push(O),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oc(i,e,t){const n=new Vi(i,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function eg(i,e,t){const n=new Float32Array(Fi),r=new V(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ac(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function lc(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function tg(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const p=l.mapping,h=p===ha||p===da,m=p===yr||p===Mr;if(h||m)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let _=e.get(l);return t===null&&(t=new sc(i)),_=h?t.fromEquirectangular(l,_):t.fromCubemap(l,_),e.set(l,_),_.texture}else{if(e.has(l))return e.get(l).texture;{const _=l.image;if(h&&_&&_.height>0||m&&_&&r(_)){t===null&&(t=new sc(i));const v=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,v),l.addEventListener("dispose",o),v.texture}else return null}}}return l}function r(l){let p=0;const h=6;for(let m=0;m<h;m++)l[m]!==void 0&&p++;return p===h}function o(l){const p=l.target;p.removeEventListener("dispose",o);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function ng(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ig(i,e,t,n){const r={},o=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",c),delete r[v.id];const y=o.get(v);y&&(e.remove(y),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function l(_,v){return r[v.id]===!0||(v.addEventListener("dispose",c),r[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const b in v)e.update(v[b],34962);const y=_.morphAttributes;for(const b in y){const w=y[b];for(let M=0,g=w.length;M<g;M++)e.update(w[M],34962)}}function h(_){const v=[],y=_.index,b=_.attributes.position;let w=0;if(y!==null){const N=y.array;w=y.version;for(let R=0,L=N.length;R<L;R+=3){const O=N[R+0],u=N[R+1],q=N[R+2];v.push(O,u,u,q,q,O)}}else{const N=b.array;w=b.version;for(let R=0,L=N.length/3-1;R<L;R+=3){const O=R+0,u=R+1,q=R+2;v.push(O,u,u,q,q,O)}}const M=new(iu(v)?cu:lu)(v,1);M.version=w;const g=o.get(_);g&&e.remove(g),o.set(_,M)}function m(_){const v=o.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&h(_)}else h(_);return o.get(_)}return{get:l,update:p,getWireframeAttribute:m}}function rg(i,e,t,n){const r=n.isWebGL2;let o;function c(v){o=v}let l,p;function h(v){l=v.type,p=v.bytesPerElement}function m(v,y){i.drawElements(o,y,l,v*p),t.update(y,o,1)}function _(v,y,b){if(b===0)return;let w,M;if(r)w=i,M="drawElementsInstanced";else if(w=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[M](o,y,l,v*p,b),t.update(y,o,b)}this.setMode=c,this.setIndex=h,this.render=m,this.renderInstances=_}function sg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,c,l){switch(t.calls++,c){case 4:t.triangles+=l*(o/3);break;case 1:t.lines+=l*(o/2);break;case 3:t.lines+=l*(o-1);break;case 2:t.lines+=l*o;break;case 0:t.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function og(i,e){return i[0]-e[0]}function ag(i,e){return Math.abs(e[1])-Math.abs(i[1])}function lg(i,e,t){const n={},r=new Float32Array(8),o=new WeakMap,c=new Nt,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function p(h,m,_){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const b=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,w=b!==void 0?b.length:0;let M=o.get(m);if(M===void 0||M.count!==w){let le=function(){Y.dispose(),o.delete(m),m.removeEventListener("dispose",le)};var y=le;M!==void 0&&M.texture.dispose();const R=m.morphAttributes.position!==void 0,L=m.morphAttributes.normal!==void 0,O=m.morphAttributes.color!==void 0,u=m.morphAttributes.position||[],q=m.morphAttributes.normal||[],J=m.morphAttributes.color||[];let P=0;R===!0&&(P=1),L===!0&&(P=2),O===!0&&(P=3);let z=m.attributes.position.count*P,_e=1;z>e.maxTextureSize&&(_e=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const ue=new Float32Array(z*_e*4*w),Y=new ou(ue,z,_e,w);Y.type=Bi,Y.needsUpdate=!0;const K=P*4;for(let Se=0;Se<w;Se++){const Me=u[Se],de=q[Se],be=J[Se],ye=z*_e*4*Se;for(let Ve=0;Ve<Me.count;Ve++){const we=Ve*K;R===!0&&(c.fromBufferAttribute(Me,Ve),ue[ye+we+0]=c.x,ue[ye+we+1]=c.y,ue[ye+we+2]=c.z,ue[ye+we+3]=0),L===!0&&(c.fromBufferAttribute(de,Ve),ue[ye+we+4]=c.x,ue[ye+we+5]=c.y,ue[ye+we+6]=c.z,ue[ye+we+7]=0),O===!0&&(c.fromBufferAttribute(be,Ve),ue[ye+we+8]=c.x,ue[ye+we+9]=c.y,ue[ye+we+10]=c.z,ue[ye+we+11]=be.itemSize===4?c.w:1)}}M={count:w,texture:Y,size:new wt(z,_e)},o.set(m,M),m.addEventListener("dispose",le)}let g=0;for(let R=0;R<v.length;R++)g+=v[R];const N=m.morphTargetsRelative?1:1-g;_.getUniforms().setValue(i,"morphTargetBaseInfluence",N),_.getUniforms().setValue(i,"morphTargetInfluences",v),_.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),_.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{const b=v===void 0?0:v.length;let w=n[m.id];if(w===void 0||w.length!==b){w=[];for(let L=0;L<b;L++)w[L]=[L,0];n[m.id]=w}for(let L=0;L<b;L++){const O=w[L];O[0]=L,O[1]=v[L]}w.sort(ag);for(let L=0;L<8;L++)L<b&&w[L][1]?(l[L][0]=w[L][0],l[L][1]=w[L][1]):(l[L][0]=Number.MAX_SAFE_INTEGER,l[L][1]=0);l.sort(og);const M=m.morphAttributes.position,g=m.morphAttributes.normal;let N=0;for(let L=0;L<8;L++){const O=l[L],u=O[0],q=O[1];u!==Number.MAX_SAFE_INTEGER&&q?(M&&m.getAttribute("morphTarget"+L)!==M[u]&&m.setAttribute("morphTarget"+L,M[u]),g&&m.getAttribute("morphNormal"+L)!==g[u]&&m.setAttribute("morphNormal"+L,g[u]),r[L]=q,N+=q):(M&&m.hasAttribute("morphTarget"+L)===!0&&m.deleteAttribute("morphTarget"+L),g&&m.hasAttribute("morphNormal"+L)===!0&&m.deleteAttribute("morphNormal"+L),r[L]=0)}const R=m.morphTargetsRelative?1:1-N;_.getUniforms().setValue(i,"morphTargetBaseInfluence",R),_.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:p}}function cg(i,e,t,n){let r=new WeakMap;function o(p){const h=n.render.frame,m=p.geometry,_=e.get(p,m);return r.get(_)!==h&&(e.update(_),r.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",l)===!1&&p.addEventListener("dispose",l),t.update(p.instanceMatrix,34962),p.instanceColor!==null&&t.update(p.instanceColor,34962)),_}function c(){r=new WeakMap}function l(p){const h=p.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}const pu=new vn,mu=new ou,gu=new Zh,_u=new hu,cc=[],uc=[],fc=new Float32Array(16),hc=new Float32Array(9),dc=new Float32Array(4);function Pr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=cc[r];if(o===void 0&&(o=new Float32Array(r),cc[r]=o),e!==0){n.toArray(o,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(o,l)}return o}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=uc[e];t===void 0&&(t=new Int32Array(e),uc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Yt(t,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),Jt(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Yt(t,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),Jt(t,n)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Yt(t,n))return;fc.set(n),i.uniformMatrix4fv(this.addr,!1,fc),Jt(t,n)}}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function Mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function Eg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||pu,r)}function Tg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||gu,r)}function Ag(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_u,r)}function Cg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||mu,r)}function Lg(i){switch(i){case 5126:return ug;case 35664:return fg;case 35665:return hg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return Mg;case 36294:return Sg;case 36295:return bg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,e){i.uniform1fv(this.addr,e)}function Rg(i,e){const t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Dg(i,e){const t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ig(i,e){const t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ug(i,e){const t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ng(i,e){const t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Og(i,e){const t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Fg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function Bg(i,e){i.uniform3iv(this.addr,e)}function kg(i,e){i.uniform4iv(this.addr,e)}function Hg(i,e){i.uniform1uiv(this.addr,e)}function Gg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function qg(i,e,t){const n=this.cache,r=e.length,o=to(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||pu,o[c])}function jg(i,e,t){const n=this.cache,r=e.length,o=to(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||gu,o[c])}function Xg(i,e,t){const n=this.cache,r=e.length,o=to(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||_u,o[c])}function $g(i,e,t){const n=this.cache,r=e.length,o=to(t,r);Yt(n,o)||(i.uniform1iv(this.addr,o),Jt(n,o));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||mu,o[c])}function Yg(i){switch(i){case 5126:return Pg;case 35664:return Rg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ug;case 35675:return Ng;case 35676:return Og;case 5124:case 35670:return Fg;case 35667:case 35671:return zg;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return $g}}class Jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Lg(t.type)}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yg(t.type)}}class Kg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,c=r.length;o!==c;++o){const l=r[o];l.setValue(e,t[l.id],n)}}}const na=/(\w+)(\])?(\[|\.)?/g;function pc(i,e){i.seq.push(e),i.map[e.id]=e}function Qg(i,e,t){const n=i.name,r=n.length;for(na.lastIndex=0;;){const o=na.exec(n),c=na.lastIndex;let l=o[1];const p=o[2]==="]",h=o[3];if(p&&(l=l|0),h===void 0||h==="["&&c+2===r){pc(t,h===void 0?new Jg(l,i,e):new Zg(l,i,e));break}else{let _=t.map[l];_===void 0&&(_=new Kg(l),pc(t,_)),t=_}}}class js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);Qg(o,c,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,c=t.length;o!==c;++o){const l=t[o],p=n[l.id];p.needsUpdate!==!1&&l.setValue(e,p.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function mc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let e_=0;function t_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=r;c<o;c++){const l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}function n_(i){switch(i){case Gi:return["Linear","( value )"];case Rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function gc(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+t_(i.getShaderSource(e),c)}else return r}function i_(i,e){const t=n_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function r_(i,e){let t;switch(e){case rh:t="Linear";break;case sh:t="Reinhard";break;case oh:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jr).join(`
`)}function o_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a_(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),c=o.name;let l=1;o.type===35674&&(l=2),o.type===35675&&(l=3),o.type===35676&&(l=4),t[c]={type:o.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function Jr(i){return i!==""}function _c(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(i){return i.replace(l_,c_)}function c_(i,e){const t=ft[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return va(t)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(u_,f_)}function f_(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function yc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Of?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$r&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mr:e="ENVMAP_MODE_REFRACTION";break}return e}function m_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function g_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function __(i,e,t,n){const r=i.getContext(),o=t.defines;let c=t.vertexShader,l=t.fragmentShader;const p=h_(t),h=d_(t),m=p_(t),_=m_(t),v=g_(t),y=t.isWebGL2?"":s_(t),b=o_(o),w=r.createProgram();let M,g,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=[b].filter(Jr).join(`
`),M.length>0&&(M+=`
`),g=[y,b].filter(Jr).join(`
`),g.length>0&&(g+=`
`)):(M=[yc(t),"#define SHADER_NAME "+t.shaderName,b,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),g=[y,yc(t),"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?ft.tonemapping_pars_fragment:"",t.toneMapping!==hi?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.encodings_pars_fragment,i_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jr).join(`
`)),c=va(c),c=_c(c,t),c=vc(c,t),l=va(l),l=_c(l,t),l=vc(l,t),c=xc(c),l=xc(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=N+M+c,L=N+g+l,O=mc(r,35633,R),u=mc(r,35632,L);if(r.attachShader(w,O),r.attachShader(w,u),t.index0AttributeName!==void 0?r.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w),i.debug.checkShaderErrors){const P=r.getProgramInfoLog(w).trim(),z=r.getShaderInfoLog(O).trim(),_e=r.getShaderInfoLog(u).trim();let ue=!0,Y=!0;if(r.getProgramParameter(w,35714)===!1)if(ue=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,O,u);else{const K=gc(r,O,"vertex"),le=gc(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,35715)+`

Program Info Log: `+P+`
`+K+`
`+le)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(z===""||_e==="")&&(Y=!1);Y&&(this.diagnostics={runnable:ue,programLog:P,vertexShader:{log:z,prefix:M},fragmentShader:{log:_e,prefix:g}})}r.deleteShader(O),r.deleteShader(u);let q;this.getUniforms=function(){return q===void 0&&(q=new js(r,w)),q};let J;return this.getAttributes=function(){return J===void 0&&(J=a_(r,w)),J},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.name=t.shaderName,this.id=e_++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=O,this.fragmentShader=u,this}let v_=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y_(e),t.set(e,n)),n}}class y_{constructor(e){this.id=v_++,this.code=e,this.usedTimes=0}}function M_(i,e,t,n,r,o,c){const l=new Pa,p=new x_,h=[],m=r.isWebGL2,_=r.logarithmicDepthBuffer,v=r.vertexTextures;let y=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return P===1?"uv2":"uv"}function M(P,z,_e,ue,Y){const K=ue.fog,le=Y.geometry,Se=P.isMeshStandardMaterial?ue.environment:null,Me=(P.isMeshStandardMaterial?t:e).get(P.envMap||Se),de=Me&&Me.mapping===Qs?Me.image.height:null,be=b[P.type];P.precision!==null&&(y=r.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const ye=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ve=ye!==void 0?ye.length:0;let we=0;le.morphAttributes.position!==void 0&&(we=1),le.morphAttributes.normal!==void 0&&(we=2),le.morphAttributes.color!==void 0&&(we=3);let te,he,Le,Ie;if(be){const Ce=Zn[be];te=Ce.vertexShader,he=Ce.fragmentShader}else te=P.vertexShader,he=P.fragmentShader,p.update(P),Le=p.getVertexShaderID(P),Ie=p.getFragmentShaderID(P);const Q=i.getRenderTarget(),et=Y.isInstancedMesh===!0,We=!!P.map,Te=!!P.matcap,Ke=!!Me,xt=!!P.aoMap,Oe=!!P.lightMap,at=!!P.bumpMap,Dt=!!P.normalMap,De=!!P.displacementMap,gt=!!P.emissiveMap,Bt=!!P.metalnessMap,yt=!!P.roughnessMap,It=P.clearcoat>0,en=P.iridescence>0,D=P.sheen>0,A=P.transmission>0,ee=It&&!!P.clearcoatMap,ge=It&&!!P.clearcoatNormalMap,xe=It&&!!P.clearcoatRoughnessMap,Re=en&&!!P.iridescenceMap,$e=en&&!!P.iridescenceThicknessMap,Ne=D&&!!P.sheenColorMap,ae=D&&!!P.sheenRoughnessMap,He=!!P.specularMap,ze=!!P.specularColorMap,qe=!!P.specularIntensityMap,Ue=A&&!!P.transmissionMap,Be=A&&!!P.thicknessMap,tt=!!P.gradientMap,st=!!P.alphaMap,Lt=P.alphaTest>0,k=!!P.extensions,re=!!le.attributes.uv2;return{isWebGL2:m,shaderID:be,shaderName:P.type,vertexShader:te,fragmentShader:he,defines:P.defines,customVertexShaderID:Le,customFragmentShaderID:Ie,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,instancing:et,instancingColor:et&&Y.instanceColor!==null,supportsVertexTextures:v,outputEncoding:Q===null?i.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:Gi,map:We,matcap:Te,envMap:Ke,envMapMode:Ke&&Me.mapping,envMapCubeUVHeight:de,aoMap:xt,lightMap:Oe,bumpMap:at,normalMap:Dt,displacementMap:v&&De,emissiveMap:gt,normalMapObjectSpace:Dt&&P.normalMapType===Ah,normalMapTangentSpace:Dt&&P.normalMapType===eu,decodeVideoTexture:We&&P.map.isVideoTexture===!0&&P.map.encoding===Rt,metalnessMap:Bt,roughnessMap:yt,clearcoat:It,clearcoatMap:ee,clearcoatNormalMap:ge,clearcoatRoughnessMap:xe,iridescence:en,iridescenceMap:Re,iridescenceThicknessMap:$e,sheen:D,sheenColorMap:Ne,sheenRoughnessMap:ae,specularMap:He,specularColorMap:ze,specularIntensityMap:qe,transmission:A,transmissionMap:Ue,thicknessMap:Be,gradientMap:tt,opaque:P.transparent===!1&&P.blending===_r,alphaMap:st,alphaTest:Lt,combine:P.combine,mapUv:We&&w(P.map.channel),aoMapUv:xt&&w(P.aoMap.channel),lightMapUv:Oe&&w(P.lightMap.channel),bumpMapUv:at&&w(P.bumpMap.channel),normalMapUv:Dt&&w(P.normalMap.channel),displacementMapUv:De&&w(P.displacementMap.channel),emissiveMapUv:gt&&w(P.emissiveMap.channel),metalnessMapUv:Bt&&w(P.metalnessMap.channel),roughnessMapUv:yt&&w(P.roughnessMap.channel),clearcoatMapUv:ee&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:ge&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:ae&&w(P.sheenRoughnessMap.channel),specularMapUv:He&&w(P.specularMap.channel),specularColorMapUv:ze&&w(P.specularColorMap.channel),specularIntensityMapUv:qe&&w(P.specularIntensityMap.channel),transmissionMapUv:Ue&&w(P.transmissionMap.channel),thicknessMapUv:Be&&w(P.thicknessMap.channel),alphaMapUv:st&&w(P.alphaMap.channel),vertexTangents:Dt&&!!le.attributes.tangent,vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,vertexUvs2:re,pointsUvs:Y.isPoints===!0&&!!le.attributes.uv&&(We||st),fog:!!K,useFog:P.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Y.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:we,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&_e.length>0,shadowMapType:i.shadowMap.type,toneMapping:P.toneMapped?i.toneMapping:hi,useLegacyLights:i.useLegacyLights,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===fi,flipSided:P.side===_n,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionDerivatives:k&&P.extensions.derivatives===!0,extensionFragDepth:k&&P.extensions.fragDepth===!0,extensionDrawBuffers:k&&P.extensions.drawBuffers===!0,extensionShaderTextureLOD:k&&P.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:P.customProgramCacheKey()}}function g(P){const z=[];if(P.shaderID?z.push(P.shaderID):(z.push(P.customVertexShaderID),z.push(P.customFragmentShaderID)),P.defines!==void 0)for(const _e in P.defines)z.push(_e),z.push(P.defines[_e]);return P.isRawShaderMaterial===!1&&(N(z,P),R(z,P),z.push(i.outputEncoding)),z.push(P.customProgramCacheKey),z.join()}function N(P,z){P.push(z.precision),P.push(z.outputEncoding),P.push(z.envMapMode),P.push(z.envMapCubeUVHeight),P.push(z.mapUv),P.push(z.alphaMapUv),P.push(z.lightMapUv),P.push(z.aoMapUv),P.push(z.bumpMapUv),P.push(z.normalMapUv),P.push(z.displacementMapUv),P.push(z.emissiveMapUv),P.push(z.metalnessMapUv),P.push(z.roughnessMapUv),P.push(z.clearcoatMapUv),P.push(z.clearcoatNormalMapUv),P.push(z.clearcoatRoughnessMapUv),P.push(z.iridescenceMapUv),P.push(z.iridescenceThicknessMapUv),P.push(z.sheenColorMapUv),P.push(z.sheenRoughnessMapUv),P.push(z.specularMapUv),P.push(z.specularColorMapUv),P.push(z.specularIntensityMapUv),P.push(z.transmissionMapUv),P.push(z.thicknessMapUv),P.push(z.combine),P.push(z.fogExp2),P.push(z.sizeAttenuation),P.push(z.morphTargetsCount),P.push(z.morphAttributeCount),P.push(z.numDirLights),P.push(z.numPointLights),P.push(z.numSpotLights),P.push(z.numSpotLightMaps),P.push(z.numHemiLights),P.push(z.numRectAreaLights),P.push(z.numDirLightShadows),P.push(z.numPointLightShadows),P.push(z.numSpotLightShadows),P.push(z.numSpotLightShadowsWithMaps),P.push(z.shadowMapType),P.push(z.toneMapping),P.push(z.numClippingPlanes),P.push(z.numClipIntersection),P.push(z.depthPacking)}function R(P,z){l.disableAll(),z.isWebGL2&&l.enable(0),z.supportsVertexTextures&&l.enable(1),z.instancing&&l.enable(2),z.instancingColor&&l.enable(3),z.matcap&&l.enable(4),z.envMap&&l.enable(5),z.normalMapObjectSpace&&l.enable(6),z.normalMapTangentSpace&&l.enable(7),z.clearcoat&&l.enable(8),z.iridescence&&l.enable(9),z.alphaTest&&l.enable(10),z.vertexColors&&l.enable(11),z.vertexAlphas&&l.enable(12),z.vertexUvs2&&l.enable(13),z.vertexTangents&&l.enable(14),P.push(l.mask),l.disableAll(),z.fog&&l.enable(0),z.useFog&&l.enable(1),z.flatShading&&l.enable(2),z.logarithmicDepthBuffer&&l.enable(3),z.skinning&&l.enable(4),z.morphTargets&&l.enable(5),z.morphNormals&&l.enable(6),z.morphColors&&l.enable(7),z.premultipliedAlpha&&l.enable(8),z.shadowMapEnabled&&l.enable(9),z.useLegacyLights&&l.enable(10),z.doubleSided&&l.enable(11),z.flipSided&&l.enable(12),z.useDepthPacking&&l.enable(13),z.dithering&&l.enable(14),z.transmission&&l.enable(15),z.sheen&&l.enable(16),z.decodeVideoTexture&&l.enable(17),z.opaque&&l.enable(18),z.pointsUvs&&l.enable(19),P.push(l.mask)}function L(P){const z=b[P.type];let _e;if(z){const ue=Zn[z];_e=cd.clone(ue.uniforms)}else _e=P.uniforms;return _e}function O(P,z){let _e;for(let ue=0,Y=h.length;ue<Y;ue++){const K=h[ue];if(K.cacheKey===z){_e=K,++_e.usedTimes;break}}return _e===void 0&&(_e=new __(i,z,P,o),h.push(_e)),_e}function u(P){if(--P.usedTimes===0){const z=h.indexOf(P);h[z]=h[h.length-1],h.pop(),P.destroy()}}function q(P){p.remove(P)}function J(){p.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:L,acquireProgram:O,releaseProgram:u,releaseShaderCache:q,programs:h,dispose:J}}function S_(){let i=new WeakMap;function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function t(o){i.delete(o)}function n(o,c,l){i.get(o)[c]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function b_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function c(_,v,y,b,w,M){let g=i[e];return g===void 0?(g={id:_.id,object:_,geometry:v,material:y,groupOrder:b,renderOrder:_.renderOrder,z:w,group:M},i[e]=g):(g.id=_.id,g.object=_,g.geometry=v,g.material=y,g.groupOrder=b,g.renderOrder=_.renderOrder,g.z=w,g.group=M),e++,g}function l(_,v,y,b,w,M){const g=c(_,v,y,b,w,M);y.transmission>0?n.push(g):y.transparent===!0?r.push(g):t.push(g)}function p(_,v,y,b,w,M){const g=c(_,v,y,b,w,M);y.transmission>0?n.unshift(g):y.transparent===!0?r.unshift(g):t.unshift(g)}function h(_,v){t.length>1&&t.sort(_||b_),n.length>1&&n.sort(v||Mc),r.length>1&&r.sort(v||Mc)}function m(){for(let _=e,v=i.length;_<v;_++){const y=i[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:l,unshift:p,finish:m,sort:h}}function w_(){let i=new WeakMap;function e(n,r){const o=i.get(n);let c;return o===void 0?(c=new Sc,i.set(n,[c])):r>=o.length?(c=new Sc,o.push(c)):c=o[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function E_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new bt};break;case"SpotLight":t={position:new V,direction:new V,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function T_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let A_=0;function C_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L_(i,e){const t=new E_,n=T_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new V);const o=new V,c=new Ht,l=new Ht;function p(m,_){let v=0,y=0,b=0;for(let _e=0;_e<9;_e++)r.probe[_e].set(0,0,0);let w=0,M=0,g=0,N=0,R=0,L=0,O=0,u=0,q=0,J=0;m.sort(C_);const P=_===!0?Math.PI:1;for(let _e=0,ue=m.length;_e<ue;_e++){const Y=m[_e],K=Y.color,le=Y.intensity,Se=Y.distance,Me=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)v+=K.r*le*P,y+=K.g*le*P,b+=K.b*le*P;else if(Y.isLightProbe)for(let de=0;de<9;de++)r.probe[de].addScaledVector(Y.sh.coefficients[de],le);else if(Y.isDirectionalLight){const de=t.get(Y);if(de.color.copy(Y.color).multiplyScalar(Y.intensity*P),Y.castShadow){const be=Y.shadow,ye=n.get(Y);ye.shadowBias=be.bias,ye.shadowNormalBias=be.normalBias,ye.shadowRadius=be.radius,ye.shadowMapSize=be.mapSize,r.directionalShadow[w]=ye,r.directionalShadowMap[w]=Me,r.directionalShadowMatrix[w]=Y.shadow.matrix,L++}r.directional[w]=de,w++}else if(Y.isSpotLight){const de=t.get(Y);de.position.setFromMatrixPosition(Y.matrixWorld),de.color.copy(K).multiplyScalar(le*P),de.distance=Se,de.coneCos=Math.cos(Y.angle),de.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),de.decay=Y.decay,r.spot[g]=de;const be=Y.shadow;if(Y.map&&(r.spotLightMap[q]=Y.map,q++,be.updateMatrices(Y),Y.castShadow&&J++),r.spotLightMatrix[g]=be.matrix,Y.castShadow){const ye=n.get(Y);ye.shadowBias=be.bias,ye.shadowNormalBias=be.normalBias,ye.shadowRadius=be.radius,ye.shadowMapSize=be.mapSize,r.spotShadow[g]=ye,r.spotShadowMap[g]=Me,u++}g++}else if(Y.isRectAreaLight){const de=t.get(Y);de.color.copy(K).multiplyScalar(le),de.halfWidth.set(Y.width*.5,0,0),de.halfHeight.set(0,Y.height*.5,0),r.rectArea[N]=de,N++}else if(Y.isPointLight){const de=t.get(Y);if(de.color.copy(Y.color).multiplyScalar(Y.intensity*P),de.distance=Y.distance,de.decay=Y.decay,Y.castShadow){const be=Y.shadow,ye=n.get(Y);ye.shadowBias=be.bias,ye.shadowNormalBias=be.normalBias,ye.shadowRadius=be.radius,ye.shadowMapSize=be.mapSize,ye.shadowCameraNear=be.camera.near,ye.shadowCameraFar=be.camera.far,r.pointShadow[M]=ye,r.pointShadowMap[M]=Me,r.pointShadowMatrix[M]=Y.shadow.matrix,O++}r.point[M]=de,M++}else if(Y.isHemisphereLight){const de=t.get(Y);de.skyColor.copy(Y.color).multiplyScalar(le*P),de.groundColor.copy(Y.groundColor).multiplyScalar(le*P),r.hemi[R]=de,R++}}N>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=b;const z=r.hash;(z.directionalLength!==w||z.pointLength!==M||z.spotLength!==g||z.rectAreaLength!==N||z.hemiLength!==R||z.numDirectionalShadows!==L||z.numPointShadows!==O||z.numSpotShadows!==u||z.numSpotMaps!==q)&&(r.directional.length=w,r.spot.length=g,r.rectArea.length=N,r.point.length=M,r.hemi.length=R,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=u,r.spotShadowMap.length=u,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=u+q-J,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=J,z.directionalLength=w,z.pointLength=M,z.spotLength=g,z.rectAreaLength=N,z.hemiLength=R,z.numDirectionalShadows=L,z.numPointShadows=O,z.numSpotShadows=u,z.numSpotMaps=q,r.version=A_++)}function h(m,_){let v=0,y=0,b=0,w=0,M=0;const g=_.matrixWorldInverse;for(let N=0,R=m.length;N<R;N++){const L=m[N];if(L.isDirectionalLight){const O=r.directional[v];O.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(g),v++}else if(L.isSpotLight){const O=r.spot[b];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(g),O.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(g),b++}else if(L.isRectAreaLight){const O=r.rectArea[w];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(g),l.identity(),c.copy(L.matrixWorld),c.premultiply(g),l.extractRotation(c),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),O.halfWidth.applyMatrix4(l),O.halfHeight.applyMatrix4(l),w++}else if(L.isPointLight){const O=r.point[y];O.position.setFromMatrixPosition(L.matrixWorld),O.position.applyMatrix4(g),y++}else if(L.isHemisphereLight){const O=r.hemi[M];O.direction.setFromMatrixPosition(L.matrixWorld),O.direction.transformDirection(g),M++}}}return{setup:p,setupView:h,state:r}}function bc(i,e){const t=new L_(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function c(_){n.push(_)}function l(_){r.push(_)}function p(_){t.setup(n,_)}function h(_){t.setupView(n,_)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:p,setupLightsView:h,pushLight:c,pushShadow:l}}function P_(i,e){let t=new WeakMap;function n(o,c=0){const l=t.get(o);let p;return l===void 0?(p=new bc(i,e),t.set(o,[p])):c>=l.length?(p=new bc(i,e),l.push(p)):p=l[c],p}function r(){t=new WeakMap}return{get:n,dispose:r}}class R_ extends Lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D_ extends Lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U_=`uniform sampler2D shadow_pass;
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
}`;function N_(i,e,t){let n=new Da;const r=new wt,o=new wt,c=new Nt,l=new R_({depthPacking:Th}),p=new D_,h={},m=t.maxTextureSize,_={[bi]:_n,[_n]:bi,[fi]:fi},v=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:I_,fragmentShader:U_}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new Xn;b.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ln(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c,this.render=function(L,O,u){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;const q=i.getRenderTarget(),J=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Si),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let _e=0,ue=L.length;_e<ue;_e++){const Y=L[_e],K=Y.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const le=K.getFrameExtents();if(r.multiply(le),o.copy(K.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/le.x),r.x=o.x*le.x,K.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/le.y),r.y=o.y*le.y,K.mapSize.y=o.y)),K.map===null){const Me=this.type!==$r?{minFilter:un,magFilter:un}:{};K.map=new Vi(r.x,r.y,Me),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const Se=K.getViewportCount();for(let Me=0;Me<Se;Me++){const de=K.getViewport(Me);c.set(o.x*de.x,o.y*de.y,o.x*de.z,o.y*de.w),z.viewport(c),K.updateMatrices(Y,Me),n=K.getFrustum(),R(O,u,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===$r&&g(K,u),K.needsUpdate=!1}M.needsUpdate=!1,i.setRenderTarget(q,J,P)};function g(L,O){const u=e.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Vi(r.x,r.y)),v.uniforms.shadow_pass.value=L.map.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,u,v,w,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,u,y,w,null)}function N(L,O,u,q){let J=null;const P=u.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)J=P;else if(J=u.isPointLight===!0?p:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const z=J.uuid,_e=O.uuid;let ue=h[z];ue===void 0&&(ue={},h[z]=ue);let Y=ue[_e];Y===void 0&&(Y=J.clone(),ue[_e]=Y),J=Y}if(J.visible=O.visible,J.wireframe=O.wireframe,q===$r?J.side=O.shadowSide!==null?O.shadowSide:O.side:J.side=O.shadowSide!==null?O.shadowSide:_[O.side],J.alphaMap=O.alphaMap,J.alphaTest=O.alphaTest,J.map=O.map,J.clipShadows=O.clipShadows,J.clippingPlanes=O.clippingPlanes,J.clipIntersection=O.clipIntersection,J.displacementMap=O.displacementMap,J.displacementScale=O.displacementScale,J.displacementBias=O.displacementBias,J.wireframeLinewidth=O.wireframeLinewidth,J.linewidth=O.linewidth,u.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const z=i.properties.get(J);z.light=u}return J}function R(L,O,u,q,J){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&J===$r)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,L.matrixWorld);const _e=e.update(L),ue=L.material;if(Array.isArray(ue)){const Y=_e.groups;for(let K=0,le=Y.length;K<le;K++){const Se=Y[K],Me=ue[Se.materialIndex];if(Me&&Me.visible){const de=N(L,Me,q,J);i.renderBufferDirect(u,null,_e,de,L,Se)}}}else if(ue.visible){const Y=N(L,ue,q,J);i.renderBufferDirect(u,null,_e,Y,L,null)}}const z=L.children;for(let _e=0,ue=z.length;_e<ue;_e++)R(z[_e],O,u,q,J)}}function O_(i,e,t){const n=t.isWebGL2;function r(){let k=!1;const re=new Nt;let ve=null;const Ce=new Nt(0,0,0,0);return{setMask:function(Fe){ve!==Fe&&!k&&(i.colorMask(Fe,Fe,Fe,Fe),ve=Fe)},setLocked:function(Fe){k=Fe},setClear:function(Fe,Tt,Pt,Gt,xn){xn===!0&&(Fe*=Gt,Tt*=Gt,Pt*=Gt),re.set(Fe,Tt,Pt,Gt),Ce.equals(re)===!1&&(i.clearColor(Fe,Tt,Pt,Gt),Ce.copy(re))},reset:function(){k=!1,ve=null,Ce.set(-1,0,0,0)}}}function o(){let k=!1,re=null,ve=null,Ce=null;return{setTest:function(Fe){Fe?Q(2929):et(2929)},setMask:function(Fe){re!==Fe&&!k&&(i.depthMask(Fe),re=Fe)},setFunc:function(Fe){if(ve!==Fe){switch(Fe){case Yf:i.depthFunc(512);break;case Jf:i.depthFunc(519);break;case Zf:i.depthFunc(513);break;case fa:i.depthFunc(515);break;case Kf:i.depthFunc(514);break;case Qf:i.depthFunc(518);break;case eh:i.depthFunc(516);break;case th:i.depthFunc(517);break;default:i.depthFunc(515)}ve=Fe}},setLocked:function(Fe){k=Fe},setClear:function(Fe){Ce!==Fe&&(i.clearDepth(Fe),Ce=Fe)},reset:function(){k=!1,re=null,ve=null,Ce=null}}}function c(){let k=!1,re=null,ve=null,Ce=null,Fe=null,Tt=null,Pt=null,Gt=null,xn=null;return{setTest:function(Ot){k||(Ot?Q(2960):et(2960))},setMask:function(Ot){re!==Ot&&!k&&(i.stencilMask(Ot),re=Ot)},setFunc:function(Ot,dn,Pn){(ve!==Ot||Ce!==dn||Fe!==Pn)&&(i.stencilFunc(Ot,dn,Pn),ve=Ot,Ce=dn,Fe=Pn)},setOp:function(Ot,dn,Pn){(Tt!==Ot||Pt!==dn||Gt!==Pn)&&(i.stencilOp(Ot,dn,Pn),Tt=Ot,Pt=dn,Gt=Pn)},setLocked:function(Ot){k=Ot},setClear:function(Ot){xn!==Ot&&(i.clearStencil(Ot),xn=Ot)},reset:function(){k=!1,re=null,ve=null,Ce=null,Fe=null,Tt=null,Pt=null,Gt=null,xn=null}}}const l=new r,p=new o,h=new c,m=new WeakMap,_=new WeakMap;let v={},y={},b=new WeakMap,w=[],M=null,g=!1,N=null,R=null,L=null,O=null,u=null,q=null,J=null,P=!1,z=null,_e=null,ue=null,Y=null,K=null;const le=i.getParameter(35661);let Se=!1,Me=0;const de=i.getParameter(7938);de.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(de)[1]),Se=Me>=1):de.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),Se=Me>=2);let be=null,ye={};const Ve=i.getParameter(3088),we=i.getParameter(2978),te=new Nt().fromArray(Ve),he=new Nt().fromArray(we);function Le(k,re,ve){const Ce=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(k,Fe),i.texParameteri(k,10241,9728),i.texParameteri(k,10240,9728);for(let Tt=0;Tt<ve;Tt++)i.texImage2D(re+Tt,0,6408,1,1,0,6408,5121,Ce);return Fe}const Ie={};Ie[3553]=Le(3553,3553,1),Ie[34067]=Le(34067,34069,6),l.setClear(0,0,0,1),p.setClear(1),h.setClear(0),Q(2929),p.setFunc(fa),De(!1),gt(cl),Q(2884),at(Si);function Q(k){v[k]!==!0&&(i.enable(k),v[k]=!0)}function et(k){v[k]!==!1&&(i.disable(k),v[k]=!1)}function We(k,re){return y[k]!==re?(i.bindFramebuffer(k,re),y[k]=re,n&&(k===36009&&(y[36160]=re),k===36160&&(y[36009]=re)),!0):!1}function Te(k,re){let ve=w,Ce=!1;if(k)if(ve=b.get(re),ve===void 0&&(ve=[],b.set(re,ve)),k.isWebGLMultipleRenderTargets){const Fe=k.texture;if(ve.length!==Fe.length||ve[0]!==36064){for(let Tt=0,Pt=Fe.length;Tt<Pt;Tt++)ve[Tt]=36064+Tt;ve.length=Fe.length,Ce=!0}}else ve[0]!==36064&&(ve[0]=36064,Ce=!0);else ve[0]!==1029&&(ve[0]=1029,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Ke(k){return M!==k?(i.useProgram(k),M=k,!0):!1}const xt={[pr]:32774,[zf]:32778,[Bf]:32779};if(n)xt[dl]=32775,xt[pl]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(xt[dl]=k.MIN_EXT,xt[pl]=k.MAX_EXT)}const Oe={[kf]:0,[Hf]:1,[Gf]:768,[Yc]:770,[$f]:776,[jf]:774,[Wf]:772,[Vf]:769,[Jc]:771,[Xf]:775,[qf]:773};function at(k,re,ve,Ce,Fe,Tt,Pt,Gt){if(k===Si){g===!0&&(et(3042),g=!1);return}if(g===!1&&(Q(3042),g=!0),k!==Ff){if(k!==N||Gt!==P){if((R!==pr||u!==pr)&&(i.blendEquation(32774),R=pr,u=pr),Gt)switch(k){case _r:i.blendFuncSeparate(1,771,1,771);break;case ul:i.blendFunc(1,1);break;case fl:i.blendFuncSeparate(0,769,0,1);break;case hl:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case _r:i.blendFuncSeparate(770,771,1,771);break;case ul:i.blendFunc(770,1);break;case fl:i.blendFuncSeparate(0,769,0,1);break;case hl:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,O=null,q=null,J=null,N=k,P=Gt}return}Fe=Fe||re,Tt=Tt||ve,Pt=Pt||Ce,(re!==R||Fe!==u)&&(i.blendEquationSeparate(xt[re],xt[Fe]),R=re,u=Fe),(ve!==L||Ce!==O||Tt!==q||Pt!==J)&&(i.blendFuncSeparate(Oe[ve],Oe[Ce],Oe[Tt],Oe[Pt]),L=ve,O=Ce,q=Tt,J=Pt),N=k,P=!1}function Dt(k,re){k.side===fi?et(2884):Q(2884);let ve=k.side===_n;re&&(ve=!ve),De(ve),k.blending===_r&&k.transparent===!1?at(Si):at(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),p.setFunc(k.depthFunc),p.setTest(k.depthTest),p.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ce=k.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),yt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(32926):et(32926)}function De(k){z!==k&&(k?i.frontFace(2304):i.frontFace(2305),z=k)}function gt(k){k!==Uf?(Q(2884),k!==_e&&(k===cl?i.cullFace(1029):k===Nf?i.cullFace(1028):i.cullFace(1032))):et(2884),_e=k}function Bt(k){k!==ue&&(Se&&i.lineWidth(k),ue=k)}function yt(k,re,ve){k?(Q(32823),(Y!==re||K!==ve)&&(i.polygonOffset(re,ve),Y=re,K=ve)):et(32823)}function It(k){k?Q(3089):et(3089)}function en(k){k===void 0&&(k=33984+le-1),be!==k&&(i.activeTexture(k),be=k)}function D(k,re,ve){ve===void 0&&(be===null?ve=33984+le-1:ve=be);let Ce=ye[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},ye[ve]=Ce),(Ce.type!==k||Ce.texture!==re)&&(be!==ve&&(i.activeTexture(ve),be=ve),i.bindTexture(k,re||Ie[k]),Ce.type=k,Ce.texture=re)}function A(){const k=ye[be];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(k){te.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),te.copy(k))}function Be(k){he.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),he.copy(k))}function tt(k,re){let ve=_.get(re);ve===void 0&&(ve=new WeakMap,_.set(re,ve));let Ce=ve.get(k);Ce===void 0&&(Ce=i.getUniformBlockIndex(re,k.name),ve.set(k,Ce))}function st(k,re){const Ce=_.get(re).get(k);m.get(re)!==Ce&&(i.uniformBlockBinding(re,Ce,k.__bindingPointIndex),m.set(re,Ce))}function Lt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},be=null,ye={},y={},b=new WeakMap,w=[],M=null,g=!1,N=null,R=null,L=null,O=null,u=null,q=null,J=null,P=!1,z=null,_e=null,ue=null,Y=null,K=null,te.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),l.reset(),p.reset(),h.reset()}return{buffers:{color:l,depth:p,stencil:h},enable:Q,disable:et,bindFramebuffer:We,drawBuffers:Te,useProgram:Ke,setBlending:at,setMaterial:Dt,setFlipSided:De,setCullFace:gt,setLineWidth:Bt,setPolygonOffset:yt,setScissorTest:It,activeTexture:en,bindTexture:D,unbindTexture:A,compressedTexImage2D:ee,compressedTexImage3D:ge,texImage2D:ze,texImage3D:qe,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:ae,texStorage3D:He,texSubImage2D:xe,texSubImage3D:Re,compressedTexSubImage2D:$e,compressedTexSubImage3D:Ne,scissor:Ue,viewport:Be,reset:Lt}}function F_(i,e,t,n,r,o,c){const l=r.isWebGL2,p=r.maxTextures,h=r.maxCubemapSize,m=r.maxTextureSize,_=r.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let w;const M=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(D,A){return g?new OffscreenCanvas(D,A):ss("canvas")}function R(D,A,ee,ge){let xe=1;if((D.width>ge||D.height>ge)&&(xe=ge/Math.max(D.width,D.height)),xe<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const Re=A?nu:Math.floor,$e=Re(xe*D.width),Ne=Re(xe*D.height);w===void 0&&(w=N($e,Ne));const ae=ee?N($e,Ne):w;return ae.width=$e,ae.height=Ne,ae.getContext("2d").drawImage(D,0,0,$e,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+$e+"x"+Ne+")."),ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function L(D){return _a(D.width)&&_a(D.height)}function O(D){return l?!1:D.wrapS!==qn||D.wrapT!==qn||D.minFilter!==un&&D.minFilter!==Un}function u(D,A){return D.generateMipmaps&&A&&D.minFilter!==un&&D.minFilter!==Un}function q(D){i.generateMipmap(D)}function J(D,A,ee,ge,xe=!1){if(l===!1)return A;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Re=A;return A===6403&&(ee===5126&&(Re=33326),ee===5131&&(Re=33325),ee===5121&&(Re=33321)),A===33319&&(ee===5126&&(Re=33328),ee===5131&&(Re=33327),ee===5121&&(Re=33323)),A===6408&&(ee===5126&&(Re=34836),ee===5131&&(Re=34842),ee===5121&&(Re=ge===Rt&&xe===!1?35907:32856),ee===32819&&(Re=32854),ee===32820&&(Re=32855)),(Re===33325||Re===33326||Re===33327||Re===33328||Re===34842||Re===34836)&&e.get("EXT_color_buffer_float"),Re}function P(D,A,ee){return u(D,ee)===!0||D.isFramebufferTexture&&D.minFilter!==un&&D.minFilter!==Un?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function z(D){return D===un||D===ml||D===Po?9728:9729}function _e(D){const A=D.target;A.removeEventListener("dispose",_e),Y(A),A.isVideoTexture&&b.delete(A)}function ue(D){const A=D.target;A.removeEventListener("dispose",ue),le(A)}function Y(D){const A=n.get(D);if(A.__webglInit===void 0)return;const ee=D.source,ge=M.get(ee);if(ge){const xe=ge[A.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&K(D),Object.keys(ge).length===0&&M.delete(ee)}n.remove(D)}function K(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const ee=D.source,ge=M.get(ee);delete ge[A.__cacheKey],c.memory.textures--}function le(D){const A=D.texture,ee=n.get(D),ge=n.get(A);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),c.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++)i.deleteFramebuffer(ee.__webglFramebuffer[xe]),ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer[xe]);else{if(i.deleteFramebuffer(ee.__webglFramebuffer),ee.__webglDepthbuffer&&i.deleteRenderbuffer(ee.__webglDepthbuffer),ee.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ee.__webglMultisampledFramebuffer),ee.__webglColorRenderbuffer)for(let xe=0;xe<ee.__webglColorRenderbuffer.length;xe++)ee.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(ee.__webglColorRenderbuffer[xe]);ee.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ee.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let xe=0,Re=A.length;xe<Re;xe++){const $e=n.get(A[xe]);$e.__webglTexture&&(i.deleteTexture($e.__webglTexture),c.memory.textures--),n.remove(A[xe])}n.remove(A),n.remove(D)}let Se=0;function Me(){Se=0}function de(){const D=Se;return D>=p&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+p),Se+=1,D}function be(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.encoding),A.join()}function ye(D,A){const ee=n.get(D);if(D.isVideoTexture&&It(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const ge=D.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(ee,D,A);return}}t.bindTexture(3553,ee.__webglTexture,33984+A)}function Ve(D,A){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){et(ee,D,A);return}t.bindTexture(35866,ee.__webglTexture,33984+A)}function we(D,A){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){et(ee,D,A);return}t.bindTexture(32879,ee.__webglTexture,33984+A)}function te(D,A){const ee=n.get(D);if(D.version>0&&ee.__version!==D.version){We(ee,D,A);return}t.bindTexture(34067,ee.__webglTexture,33984+A)}const he={[pa]:10497,[qn]:33071,[ma]:33648},Le={[un]:9728,[ml]:9984,[Po]:9986,[Un]:9729,[ch]:9985,[ts]:9987};function Ie(D,A,ee){if(ee?(i.texParameteri(D,10242,he[A.wrapS]),i.texParameteri(D,10243,he[A.wrapT]),(D===32879||D===35866)&&i.texParameteri(D,32882,he[A.wrapR]),i.texParameteri(D,10240,Le[A.magFilter]),i.texParameteri(D,10241,Le[A.minFilter])):(i.texParameteri(D,10242,33071),i.texParameteri(D,10243,33071),(D===32879||D===35866)&&i.texParameteri(D,32882,33071),(A.wrapS!==qn||A.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,10240,z(A.magFilter)),i.texParameteri(D,10241,z(A.minFilter)),A.minFilter!==un&&A.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===un||A.minFilter!==Po&&A.minFilter!==ts||A.type===Bi&&e.has("OES_texture_float_linear")===!1||l===!1&&A.type===ns&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(D,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function Q(D,A){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",_e));const ge=A.source;let xe=M.get(ge);xe===void 0&&(xe={},M.set(ge,xe));const Re=be(A);if(Re!==D.__cacheKey){xe[Re]===void 0&&(xe[Re]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),xe[Re].usedTimes++;const $e=xe[D.__cacheKey];$e!==void 0&&(xe[D.__cacheKey].usedTimes--,$e.usedTimes===0&&K(A)),D.__cacheKey=Re,D.__webglTexture=xe[Re].texture}return ee}function et(D,A,ee){let ge=3553;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=35866),A.isData3DTexture&&(ge=32879);const xe=Q(D,A),Re=A.source;t.bindTexture(ge,D.__webglTexture,33984+ee);const $e=n.get(Re);if(Re.version!==$e.__version||xe===!0){t.activeTexture(33984+ee),i.pixelStorei(37440,A.flipY),i.pixelStorei(37441,A.premultiplyAlpha),i.pixelStorei(3317,A.unpackAlignment),i.pixelStorei(37443,0);const Ne=O(A)&&L(A.image)===!1;let ae=R(A.image,Ne,!1,m);ae=en(A,ae);const He=L(ae)||l,ze=o.convert(A.format,A.encoding);let qe=o.convert(A.type),Ue=J(A.internalFormat,ze,qe,A.encoding,A.isVideoTexture);Ie(ge,A,He);let Be;const tt=A.mipmaps,st=l&&A.isVideoTexture!==!0,Lt=$e.__version===void 0||xe===!0,k=P(A,ae,He);if(A.isDepthTexture)Ue=6402,l?A.type===Bi?Ue=36012:A.type===zi?Ue=33190:A.type===vr?Ue=35056:Ue=33189:A.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===ki&&Ue===6402&&A.type!==Qc&&A.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=zi,qe=o.convert(A.type)),A.format===Sr&&Ue===6402&&(Ue=34041,A.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=vr,qe=o.convert(A.type))),Lt&&(st?t.texStorage2D(3553,1,Ue,ae.width,ae.height):t.texImage2D(3553,0,Ue,ae.width,ae.height,0,ze,qe,null));else if(A.isDataTexture)if(tt.length>0&&He){st&&Lt&&t.texStorage2D(3553,k,Ue,tt[0].width,tt[0].height);for(let re=0,ve=tt.length;re<ve;re++)Be=tt[re],st?t.texSubImage2D(3553,re,0,0,Be.width,Be.height,ze,qe,Be.data):t.texImage2D(3553,re,Ue,Be.width,Be.height,0,ze,qe,Be.data);A.generateMipmaps=!1}else st?(Lt&&t.texStorage2D(3553,k,Ue,ae.width,ae.height),t.texSubImage2D(3553,0,0,0,ae.width,ae.height,ze,qe,ae.data)):t.texImage2D(3553,0,Ue,ae.width,ae.height,0,ze,qe,ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){st&&Lt&&t.texStorage3D(35866,k,Ue,tt[0].width,tt[0].height,ae.depth);for(let re=0,ve=tt.length;re<ve;re++)Be=tt[re],A.format!==jn?ze!==null?st?t.compressedTexSubImage3D(35866,re,0,0,0,Be.width,Be.height,ae.depth,ze,Be.data,0,0):t.compressedTexImage3D(35866,re,Ue,Be.width,Be.height,ae.depth,0,Be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage3D(35866,re,0,0,0,Be.width,Be.height,ae.depth,ze,qe,Be.data):t.texImage3D(35866,re,Ue,Be.width,Be.height,ae.depth,0,ze,qe,Be.data)}else{st&&Lt&&t.texStorage2D(3553,k,Ue,tt[0].width,tt[0].height);for(let re=0,ve=tt.length;re<ve;re++)Be=tt[re],A.format!==jn?ze!==null?st?t.compressedTexSubImage2D(3553,re,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(3553,re,Ue,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(3553,re,0,0,Be.width,Be.height,ze,qe,Be.data):t.texImage2D(3553,re,Ue,Be.width,Be.height,0,ze,qe,Be.data)}else if(A.isDataArrayTexture)st?(Lt&&t.texStorage3D(35866,k,Ue,ae.width,ae.height,ae.depth),t.texSubImage3D(35866,0,0,0,0,ae.width,ae.height,ae.depth,ze,qe,ae.data)):t.texImage3D(35866,0,Ue,ae.width,ae.height,ae.depth,0,ze,qe,ae.data);else if(A.isData3DTexture)st?(Lt&&t.texStorage3D(32879,k,Ue,ae.width,ae.height,ae.depth),t.texSubImage3D(32879,0,0,0,0,ae.width,ae.height,ae.depth,ze,qe,ae.data)):t.texImage3D(32879,0,Ue,ae.width,ae.height,ae.depth,0,ze,qe,ae.data);else if(A.isFramebufferTexture){if(Lt)if(st)t.texStorage2D(3553,k,Ue,ae.width,ae.height);else{let re=ae.width,ve=ae.height;for(let Ce=0;Ce<k;Ce++)t.texImage2D(3553,Ce,Ue,re,ve,0,ze,qe,null),re>>=1,ve>>=1}}else if(tt.length>0&&He){st&&Lt&&t.texStorage2D(3553,k,Ue,tt[0].width,tt[0].height);for(let re=0,ve=tt.length;re<ve;re++)Be=tt[re],st?t.texSubImage2D(3553,re,0,0,ze,qe,Be):t.texImage2D(3553,re,Ue,ze,qe,Be);A.generateMipmaps=!1}else st?(Lt&&t.texStorage2D(3553,k,Ue,ae.width,ae.height),t.texSubImage2D(3553,0,0,0,ze,qe,ae)):t.texImage2D(3553,0,Ue,ze,qe,ae);u(A,He)&&q(ge),$e.__version=Re.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function We(D,A,ee){if(A.image.length!==6)return;const ge=Q(D,A),xe=A.source;t.bindTexture(34067,D.__webglTexture,33984+ee);const Re=n.get(xe);if(xe.version!==Re.__version||ge===!0){t.activeTexture(33984+ee),i.pixelStorei(37440,A.flipY),i.pixelStorei(37441,A.premultiplyAlpha),i.pixelStorei(3317,A.unpackAlignment),i.pixelStorei(37443,0);const $e=A.isCompressedTexture||A.image[0].isCompressedTexture,Ne=A.image[0]&&A.image[0].isDataTexture,ae=[];for(let re=0;re<6;re++)!$e&&!Ne?ae[re]=R(A.image[re],!1,!0,h):ae[re]=Ne?A.image[re].image:A.image[re],ae[re]=en(A,ae[re]);const He=ae[0],ze=L(He)||l,qe=o.convert(A.format,A.encoding),Ue=o.convert(A.type),Be=J(A.internalFormat,qe,Ue,A.encoding),tt=l&&A.isVideoTexture!==!0,st=Re.__version===void 0||ge===!0;let Lt=P(A,He,ze);Ie(34067,A,ze);let k;if($e){tt&&st&&t.texStorage2D(34067,Lt,Be,He.width,He.height);for(let re=0;re<6;re++){k=ae[re].mipmaps;for(let ve=0;ve<k.length;ve++){const Ce=k[ve];A.format!==jn?qe!==null?tt?t.compressedTexSubImage2D(34069+re,ve,0,0,Ce.width,Ce.height,qe,Ce.data):t.compressedTexImage2D(34069+re,ve,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?t.texSubImage2D(34069+re,ve,0,0,Ce.width,Ce.height,qe,Ue,Ce.data):t.texImage2D(34069+re,ve,Be,Ce.width,Ce.height,0,qe,Ue,Ce.data)}}}else{k=A.mipmaps,tt&&st&&(k.length>0&&Lt++,t.texStorage2D(34067,Lt,Be,ae[0].width,ae[0].height));for(let re=0;re<6;re++)if(Ne){tt?t.texSubImage2D(34069+re,0,0,0,ae[re].width,ae[re].height,qe,Ue,ae[re].data):t.texImage2D(34069+re,0,Be,ae[re].width,ae[re].height,0,qe,Ue,ae[re].data);for(let ve=0;ve<k.length;ve++){const Fe=k[ve].image[re].image;tt?t.texSubImage2D(34069+re,ve+1,0,0,Fe.width,Fe.height,qe,Ue,Fe.data):t.texImage2D(34069+re,ve+1,Be,Fe.width,Fe.height,0,qe,Ue,Fe.data)}}else{tt?t.texSubImage2D(34069+re,0,0,0,qe,Ue,ae[re]):t.texImage2D(34069+re,0,Be,qe,Ue,ae[re]);for(let ve=0;ve<k.length;ve++){const Ce=k[ve];tt?t.texSubImage2D(34069+re,ve+1,0,0,qe,Ue,Ce.image[re]):t.texImage2D(34069+re,ve+1,Be,qe,Ue,Ce.image[re])}}}u(A,ze)&&q(34067),Re.__version=xe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Te(D,A,ee,ge,xe){const Re=o.convert(ee.format,ee.encoding),$e=o.convert(ee.type),Ne=J(ee.internalFormat,Re,$e,ee.encoding);n.get(A).__hasExternalTextures||(xe===32879||xe===35866?t.texImage3D(xe,0,Ne,A.width,A.height,A.depth,0,Re,$e,null):t.texImage2D(xe,0,Ne,A.width,A.height,0,Re,$e,null)),t.bindFramebuffer(36160,D),yt(A)?v.framebufferTexture2DMultisampleEXT(36160,ge,xe,n.get(ee).__webglTexture,0,Bt(A)):(xe===3553||xe>=34069&&xe<=34074)&&i.framebufferTexture2D(36160,ge,xe,n.get(ee).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ke(D,A,ee){if(i.bindRenderbuffer(36161,D),A.depthBuffer&&!A.stencilBuffer){let ge=33189;if(ee||yt(A)){const xe=A.depthTexture;xe&&xe.isDepthTexture&&(xe.type===Bi?ge=36012:xe.type===zi&&(ge=33190));const Re=Bt(A);yt(A)?v.renderbufferStorageMultisampleEXT(36161,Re,ge,A.width,A.height):i.renderbufferStorageMultisample(36161,Re,ge,A.width,A.height)}else i.renderbufferStorage(36161,ge,A.width,A.height);i.framebufferRenderbuffer(36160,36096,36161,D)}else if(A.depthBuffer&&A.stencilBuffer){const ge=Bt(A);ee&&yt(A)===!1?i.renderbufferStorageMultisample(36161,ge,35056,A.width,A.height):yt(A)?v.renderbufferStorageMultisampleEXT(36161,ge,35056,A.width,A.height):i.renderbufferStorage(36161,34041,A.width,A.height),i.framebufferRenderbuffer(36160,33306,36161,D)}else{const ge=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0;xe<ge.length;xe++){const Re=ge[xe],$e=o.convert(Re.format,Re.encoding),Ne=o.convert(Re.type),ae=J(Re.internalFormat,$e,Ne,Re.encoding),He=Bt(A);ee&&yt(A)===!1?i.renderbufferStorageMultisample(36161,He,ae,A.width,A.height):yt(A)?v.renderbufferStorageMultisampleEXT(36161,He,ae,A.width,A.height):i.renderbufferStorage(36161,ae,A.width,A.height)}}i.bindRenderbuffer(36161,null)}function xt(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ye(A.depthTexture,0);const ge=n.get(A.depthTexture).__webglTexture,xe=Bt(A);if(A.depthTexture.format===ki)yt(A)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,ge,0,xe):i.framebufferTexture2D(36160,36096,3553,ge,0);else if(A.depthTexture.format===Sr)yt(A)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,ge,0,xe):i.framebufferTexture2D(36160,33306,3553,ge,0);else throw new Error("Unknown depthTexture format")}function Oe(D){const A=n.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");xt(A.__webglFramebuffer,D)}else if(ee){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(36160,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]=i.createRenderbuffer(),Ke(A.__webglDepthbuffer[ge],D,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Ke(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(36160,null)}function at(D,A,ee){const ge=n.get(D);A!==void 0&&Te(ge.__webglFramebuffer,D,D.texture,36064,3553),ee!==void 0&&Oe(D)}function Dt(D){const A=D.texture,ee=n.get(D),ge=n.get(A);D.addEventListener("dispose",ue),D.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=A.version,c.memory.textures++);const xe=D.isWebGLCubeRenderTarget===!0,Re=D.isWebGLMultipleRenderTargets===!0,$e=L(D)||l;if(xe){ee.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)ee.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(ee.__webglFramebuffer=i.createFramebuffer(),Re)if(r.drawBuffers){const Ne=D.texture;for(let ae=0,He=Ne.length;ae<He;ae++){const ze=n.get(Ne[ae]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),c.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&D.samples>0&&yt(D)===!1){const Ne=Re?A:[A];ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,ee.__webglMultisampledFramebuffer);for(let ae=0;ae<Ne.length;ae++){const He=Ne[ae];ee.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(36161,ee.__webglColorRenderbuffer[ae]);const ze=o.convert(He.format,He.encoding),qe=o.convert(He.type),Ue=J(He.internalFormat,ze,qe,He.encoding,D.isXRRenderTarget===!0),Be=Bt(D);i.renderbufferStorageMultisample(36161,Be,Ue,D.width,D.height),i.framebufferRenderbuffer(36160,36064+ae,36161,ee.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(36161,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(36160,null)}}if(xe){t.bindTexture(34067,ge.__webglTexture),Ie(34067,A,$e);for(let Ne=0;Ne<6;Ne++)Te(ee.__webglFramebuffer[Ne],D,A,36064,34069+Ne);u(A,$e)&&q(34067),t.unbindTexture()}else if(Re){const Ne=D.texture;for(let ae=0,He=Ne.length;ae<He;ae++){const ze=Ne[ae],qe=n.get(ze);t.bindTexture(3553,qe.__webglTexture),Ie(3553,ze,$e),Te(ee.__webglFramebuffer,D,ze,36064+ae,3553),u(ze,$e)&&q(3553)}t.unbindTexture()}else{let Ne=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(l?Ne=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,ge.__webglTexture),Ie(Ne,A,$e),Te(ee.__webglFramebuffer,D,A,36064,Ne),u(A,$e)&&q(Ne),t.unbindTexture()}D.depthBuffer&&Oe(D)}function De(D){const A=L(D)||l,ee=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ge=0,xe=ee.length;ge<xe;ge++){const Re=ee[ge];if(u(Re,A)){const $e=D.isWebGLCubeRenderTarget?34067:3553,Ne=n.get(Re).__webglTexture;t.bindTexture($e,Ne),q($e),t.unbindTexture()}}}function gt(D){if(l&&D.samples>0&&yt(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],ee=D.width,ge=D.height;let xe=16384;const Re=[],$e=D.stencilBuffer?33306:36096,Ne=n.get(D),ae=D.isWebGLMultipleRenderTargets===!0;if(ae)for(let He=0;He<A.length;He++)t.bindFramebuffer(36160,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+He,36161,null),t.bindFramebuffer(36160,Ne.__webglFramebuffer),i.framebufferTexture2D(36009,36064+He,3553,null,0);t.bindFramebuffer(36008,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Ne.__webglFramebuffer);for(let He=0;He<A.length;He++){Re.push(36064+He),D.depthBuffer&&Re.push($e);const ze=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(ze===!1&&(D.depthBuffer&&(xe|=256),D.stencilBuffer&&(xe|=1024)),ae&&i.framebufferRenderbuffer(36008,36064,36161,Ne.__webglColorRenderbuffer[He]),ze===!0&&(i.invalidateFramebuffer(36008,[$e]),i.invalidateFramebuffer(36009,[$e])),ae){const qe=n.get(A[He]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,qe,0)}i.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,xe,9728),y&&i.invalidateFramebuffer(36008,Re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ae)for(let He=0;He<A.length;He++){t.bindFramebuffer(36160,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+He,36161,Ne.__webglColorRenderbuffer[He]);const ze=n.get(A[He]).__webglTexture;t.bindFramebuffer(36160,Ne.__webglFramebuffer),i.framebufferTexture2D(36009,36064+He,3553,ze,0)}t.bindFramebuffer(36009,Ne.__webglMultisampledFramebuffer)}}function Bt(D){return Math.min(_,D.samples)}function yt(D){const A=n.get(D);return l&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function It(D){const A=c.render.frame;b.get(D)!==A&&(b.set(D,A),D.update())}function en(D,A){const ee=D.encoding,ge=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===ga||ee!==Gi&&(ee===Rt?l===!1?e.has("EXT_sRGB")===!0&&ge===jn?(D.format=ga,D.minFilter=Un,D.generateMipmaps=!1):A=ru.sRGBToLinear(A):(ge!==jn||xe!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ee)),A}this.allocateTextureUnit=de,this.resetTextureUnits=Me,this.setTexture2D=ye,this.setTexture2DArray=Ve,this.setTexture3D=we,this.setTextureCube=te,this.rebindTextures=at,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=yt}function z_(i,e,t){const n=t.isWebGL2;function r(o,c=null){let l;if(o===Hi)return 5121;if(o===dh)return 32819;if(o===ph)return 32820;if(o===uh)return 5120;if(o===fh)return 5122;if(o===Qc)return 5123;if(o===hh)return 5124;if(o===zi)return 5125;if(o===Bi)return 5126;if(o===ns)return n?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(o===mh)return 6406;if(o===jn)return 6408;if(o===gh)return 6409;if(o===_h)return 6410;if(o===ki)return 6402;if(o===Sr)return 34041;if(o===ga)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(o===vh)return 6403;if(o===xh)return 36244;if(o===yh)return 33319;if(o===Mh)return 33320;if(o===Sh)return 36249;if(o===Ro||o===Do||o===Io||o===Uo)if(c===Rt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(o===Ro)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Do)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Io)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Uo)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(o===Ro)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Do)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Io)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Uo)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===gl||o===_l||o===vl||o===xl)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(o===gl)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===_l)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===vl)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===xl)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===bh)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===yl||o===Ml)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(o===yl)return c===Rt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(o===Ml)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Sl||o===bl||o===wl||o===El||o===Tl||o===Al||o===Cl||o===Ll||o===Pl||o===Rl||o===Dl||o===Il||o===Ul||o===Nl)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(o===Sl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===bl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===wl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===El)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Tl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Al)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Cl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Ll)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Pl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Rl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Dl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Il)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ul)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Nl)return c===Rt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===No)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(o===No)return c===Rt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===wh||o===Ol||o===Fl||o===zl)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(o===No)return l.COMPRESSED_RED_RGTC1_EXT;if(o===Ol)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Fl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===zl)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===vr?n?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class B_ extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gs extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k_={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,c=null;const l=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const M=t.getJointPose(w,n),g=this._getHandJoint(h,w);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=M.radius),g.visible=M!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),y=.02,b=.005;h.inputState.pinching&&v>y+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(k_)))}return l!==null&&(l.visible=r!==null),p!==null&&(p.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class H_ extends vn{constructor(e,t,n,r,o,c,l,p,h,m){if(m=m!==void 0?m:ki,m!==ki&&m!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===ki&&(n=zi),n===void 0&&m===Sr&&(n=vr),super(null,r,o,c,l,p,m,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:un,this.minFilter=p!==void 0?p:un,this.flipY=!1,this.generateMipmaps=!1}}class G_ extends qi{constructor(e,t){super();const n=this;let r=null,o=1,c=null,l="local-floor",p=1,h=null,m=null,_=null,v=null,y=null,b=null;const w=t.getContextAttributes();let M=null,g=null;const N=[],R=[],L=new Set,O=new Map,u=new Cn;u.layers.enable(1),u.viewport=new Nt;const q=new Cn;q.layers.enable(2),q.viewport=new Nt;const J=[u,q],P=new B_;P.layers.enable(1),P.layers.enable(2);let z=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=N[te];return he===void 0&&(he=new ia,N[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=N[te];return he===void 0&&(he=new ia,N[te]=he),he.getGripSpace()},this.getHand=function(te){let he=N[te];return he===void 0&&(he=new ia,N[te]=he),he.getHandSpace()};function ue(te){const he=R.indexOf(te.inputSource);if(he===-1)return;const Le=N[he];Le!==void 0&&Le.dispatchEvent({type:te.type,data:te.inputSource})}function Y(){r.removeEventListener("select",ue),r.removeEventListener("selectstart",ue),r.removeEventListener("selectend",ue),r.removeEventListener("squeeze",ue),r.removeEventListener("squeezestart",ue),r.removeEventListener("squeezeend",ue),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",K);for(let te=0;te<N.length;te++){const he=R[te];he!==null&&(R[te]=null,N[te].disconnect(he))}z=null,_e=null,e.setRenderTarget(M),y=null,v=null,_=null,r=null,g=null,we.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){l=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",ue),r.addEventListener("selectstart",ue),r.addEventListener("selectend",ue),r.addEventListener("squeeze",ue),r.addEventListener("squeezestart",ue),r.addEventListener("squeezeend",ue),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:r.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:y}),g=new Vi(y.framebufferWidth,y.framebufferHeight,{format:jn,type:Hi,encoding:e.outputEncoding,stencilBuffer:w.stencil})}else{let he=null,Le=null,Ie=null;w.depth&&(Ie=w.stencil?35056:33190,he=w.stencil?Sr:ki,Le=w.stencil?vr:zi);const Q={colorFormat:32856,depthFormat:Ie,scaleFactor:o};_=new XRWebGLBinding(r,t),v=_.createProjectionLayer(Q),r.updateRenderState({layers:[v]}),g=new Vi(v.textureWidth,v.textureHeight,{format:jn,type:Hi,depthTexture:new H_(v.textureWidth,v.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:w.stencil,encoding:e.outputEncoding,samples:w.antialias?4:0});const et=e.properties.get(g);et.__ignoreDepthValues=v.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await r.requestReferenceSpace(l),we.setContext(r),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function K(te){for(let he=0;he<te.removed.length;he++){const Le=te.removed[he],Ie=R.indexOf(Le);Ie>=0&&(R[Ie]=null,N[Ie].disconnect(Le))}for(let he=0;he<te.added.length;he++){const Le=te.added[he];let Ie=R.indexOf(Le);if(Ie===-1){for(let et=0;et<N.length;et++)if(et>=R.length){R.push(Le),Ie=et;break}else if(R[et]===null){R[et]=Le,Ie=et;break}if(Ie===-1)break}const Q=N[Ie];Q&&Q.connect(Le)}}const le=new V,Se=new V;function Me(te,he,Le){le.setFromMatrixPosition(he.matrixWorld),Se.setFromMatrixPosition(Le.matrixWorld);const Ie=le.distanceTo(Se),Q=he.projectionMatrix.elements,et=Le.projectionMatrix.elements,We=Q[14]/(Q[10]-1),Te=Q[14]/(Q[10]+1),Ke=(Q[9]+1)/Q[5],xt=(Q[9]-1)/Q[5],Oe=(Q[8]-1)/Q[0],at=(et[8]+1)/et[0],Dt=We*Oe,De=We*at,gt=Ie/(-Oe+at),Bt=gt*-Oe;he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Bt),te.translateZ(gt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const yt=We+gt,It=Te+gt,en=Dt-Bt,D=De+(Ie-Bt),A=Ke*Te/It*yt,ee=xt*Te/It*yt;te.projectionMatrix.makePerspective(en,D,A,ee,yt,It),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function de(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;P.near=q.near=u.near=te.near,P.far=q.far=u.far=te.far,(z!==P.near||_e!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),z=P.near,_e=P.far);const he=te.parent,Le=P.cameras;de(P,he);for(let Ie=0;Ie<Le.length;Ie++)de(Le[Ie],he);Le.length===2?Me(P,u,q):P.projectionMatrix.copy(u.projectionMatrix),be(te,P,he)};function be(te,he,Le){Le===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(Le.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0);const Ie=te.children;for(let Q=0,et=Ie.length;Q<et;Q++)Ie[Q].updateMatrixWorld(!0);te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=rs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(te){p=te,v!==null&&(v.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.getPlanes=function(){return L};let ye=null;function Ve(te,he){if(m=he.getViewerPose(h||c),b=he,m!==null){const Le=m.views;y!==null&&(e.setRenderTargetFramebuffer(g,y.framebuffer),e.setRenderTarget(g));let Ie=!1;Le.length!==P.cameras.length&&(P.cameras.length=0,Ie=!0);for(let Q=0;Q<Le.length;Q++){const et=Le[Q];let We=null;if(y!==null)We=y.getViewport(et);else{const Ke=_.getViewSubImage(v,et);We=Ke.viewport,Q===0&&(e.setRenderTargetTextures(g,Ke.colorTexture,v.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(g))}let Te=J[Q];Te===void 0&&(Te=new Cn,Te.layers.enable(Q),Te.viewport=new Nt,J[Q]=Te),Te.matrix.fromArray(et.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(et.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(We.x,We.y,We.width,We.height),Q===0&&(P.matrix.copy(Te.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ie===!0&&P.cameras.push(Te)}}for(let Le=0;Le<N.length;Le++){const Ie=R[Le],Q=N[Le];Ie!==null&&Q!==void 0&&Q.update(Ie,he,h||c)}if(ye&&ye(te,he),he.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:he.detectedPlanes});let Le=null;for(const Ie of L)he.detectedPlanes.has(Ie)||(Le===null&&(Le=[]),Le.push(Ie));if(Le!==null)for(const Ie of Le)L.delete(Ie),O.delete(Ie),n.dispatchEvent({type:"planeremoved",data:Ie});for(const Ie of he.detectedPlanes)if(!L.has(Ie))L.add(Ie),O.set(Ie,he.lastChangedTime),n.dispatchEvent({type:"planeadded",data:Ie});else{const Q=O.get(Ie);Ie.lastChangedTime>Q&&(O.set(Ie,Ie.lastChangedTime),n.dispatchEvent({type:"planechanged",data:Ie}))}}b=null}const we=new du;we.setAnimationLoop(Ve),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}function V_(i,e){function t(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function n(M,g){g.color.getRGB(M.fogColor.value,uu(i)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function r(M,g,N,R,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(M,g):g.isMeshToonMaterial?(o(M,g),_(M,g)):g.isMeshPhongMaterial?(o(M,g),m(M,g)):g.isMeshStandardMaterial?(o(M,g),v(M,g),g.isMeshPhysicalMaterial&&y(M,g,L)):g.isMeshMatcapMaterial?(o(M,g),b(M,g)):g.isMeshDepthMaterial?o(M,g):g.isMeshDistanceMaterial?(o(M,g),w(M,g)):g.isMeshNormalMaterial?o(M,g):g.isLineBasicMaterial?(c(M,g),g.isLineDashedMaterial&&l(M,g)):g.isPointsMaterial?p(M,g,N,R):g.isSpriteMaterial?h(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,t(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,t(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,t(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===_n&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,t(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===_n&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,t(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,t(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const N=e.get(g).envMap;if(N&&(M.envMap.value=N,M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap){M.lightMap.value=g.lightMap;const R=i.useLegacyLights===!0?Math.PI:1;M.lightMapIntensity.value=g.lightMapIntensity*R,t(g.lightMap,M.lightMapTransform)}g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,M.aoMapTransform))}function c(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,t(g.map,M.mapTransform))}function l(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function p(M,g,N,R){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*N,M.scale.value=R*.5,g.map&&(M.map.value=g.map,t(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,t(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function m(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function _(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function v(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,M.roughnessMapTransform)),e.get(g).envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,N){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===_n&&M.clearcoatNormalScale.value.negate())),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,g){g.matcap&&(M.matcap.value=g.matcap)}function w(M,g){const N=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function W_(i,e,t,n){let r={},o={},c=[];const l=t.isWebGL2?i.getParameter(35375):0;function p(N,R){const L=R.program;n.uniformBlockBinding(N,L)}function h(N,R){let L=r[N.id];L===void 0&&(b(N),L=m(N),r[N.id]=L,N.addEventListener("dispose",M));const O=R.program;n.updateUBOMapping(N,O);const u=e.render.frame;o[N.id]!==u&&(v(N),o[N.id]=u)}function m(N){const R=_();N.__bindingPointIndex=R;const L=i.createBuffer(),O=N.__size,u=N.usage;return i.bindBuffer(35345,L),i.bufferData(35345,O,u),i.bindBuffer(35345,null),i.bindBufferBase(35345,R,L),L}function _(){for(let N=0;N<l;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const R=r[N.id],L=N.uniforms,O=N.__cache;i.bindBuffer(35345,R);for(let u=0,q=L.length;u<q;u++){const J=L[u];if(y(J,u,O)===!0){const P=J.__offset,z=Array.isArray(J.value)?J.value:[J.value];let _e=0;for(let ue=0;ue<z.length;ue++){const Y=z[ue],K=w(Y);typeof Y=="number"?(J.__data[0]=Y,i.bufferSubData(35345,P+_e,J.__data)):Y.isMatrix3?(J.__data[0]=Y.elements[0],J.__data[1]=Y.elements[1],J.__data[2]=Y.elements[2],J.__data[3]=Y.elements[0],J.__data[4]=Y.elements[3],J.__data[5]=Y.elements[4],J.__data[6]=Y.elements[5],J.__data[7]=Y.elements[0],J.__data[8]=Y.elements[6],J.__data[9]=Y.elements[7],J.__data[10]=Y.elements[8],J.__data[11]=Y.elements[0]):(Y.toArray(J.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,P,J.__data)}}i.bindBuffer(35345,null)}function y(N,R,L){const O=N.value;if(L[R]===void 0){if(typeof O=="number")L[R]=O;else{const u=Array.isArray(O)?O:[O],q=[];for(let J=0;J<u.length;J++)q.push(u[J].clone());L[R]=q}return!0}else if(typeof O=="number"){if(L[R]!==O)return L[R]=O,!0}else{const u=Array.isArray(L[R])?L[R]:[L[R]],q=Array.isArray(O)?O:[O];for(let J=0;J<u.length;J++){const P=u[J];if(P.equals(q[J])===!1)return P.copy(q[J]),!0}}return!1}function b(N){const R=N.uniforms;let L=0;const O=16;let u=0;for(let q=0,J=R.length;q<J;q++){const P=R[q],z={boundary:0,storage:0},_e=Array.isArray(P.value)?P.value:[P.value];for(let ue=0,Y=_e.length;ue<Y;ue++){const K=_e[ue],le=w(K);z.boundary+=le.boundary,z.storage+=le.storage}if(P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=L,q>0){u=L%O;const ue=O-u;u!==0&&ue-z.boundary<0&&(L+=O-u,P.__offset=L)}L+=z.storage}return u=L%O,u>0&&(L+=O-u),N.__size=L,N.__cache={},this}function w(N){const R={boundary:0,storage:0};return typeof N=="number"?(R.boundary=4,R.storage=4):N.isVector2?(R.boundary=8,R.storage=8):N.isVector3||N.isColor?(R.boundary=16,R.storage=12):N.isVector4?(R.boundary=16,R.storage=16):N.isMatrix3?(R.boundary=48,R.storage=48):N.isMatrix4?(R.boundary=64,R.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),R}function M(N){const R=N.target;R.removeEventListener("dispose",M);const L=c.indexOf(R.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function g(){for(const N in r)i.deleteBuffer(r[N]);c=[],r={},o={}}return{bind:p,update:h,dispose:g}}function q_(){const i=ss("canvas");return i.style.display="block",i}class vu{constructor(e={}){const{canvas:t=q_(),context:n=null,depth:r=!0,stencil:o=!0,alpha:c=!1,antialias:l=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;n!==null?v=n.getContextAttributes().alpha:v=c;let y=null,b=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gi,this.useLegacyLights=!0,this.toneMapping=hi,this.toneMappingExposure=1;const g=this;let N=!1,R=0,L=0,O=null,u=-1,q=null;const J=new Nt,P=new Nt;let z=null,_e=t.width,ue=t.height,Y=1,K=null,le=null;const Se=new Nt(0,0,_e,ue),Me=new Nt(0,0,_e,ue);let de=!1;const be=new Da;let ye=!1,Ve=!1,we=null;const te=new Ht,he=new V,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return O===null?Y:1}let Q=n;function et(C,j){for(let ie=0;ie<C.length;ie++){const W=C[ie],oe=t.getContext(W,j);if(oe!==null)return oe}return null}try{const C={alpha:!0,depth:r,stencil:o,antialias:l,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Aa}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",st,!1),Q===null){const j=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&j.shift(),Q=et(j,C),Q===null)throw et(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let We,Te,Ke,xt,Oe,at,Dt,De,gt,Bt,yt,It,en,D,A,ee,ge,xe,Re,$e,Ne,ae,He,ze;function qe(){We=new ng(Q),Te=new Ym(Q,We,e),We.init(Te),ae=new z_(Q,We,Te),Ke=new O_(Q,We,Te),xt=new sg,Oe=new S_,at=new F_(Q,We,Ke,Oe,Te,ae,xt),Dt=new Zm(g),De=new tg(g),gt=new gd(Q,Te),He=new Xm(Q,We,gt,Te),Bt=new ig(Q,gt,xt,He),yt=new cg(Q,Bt,gt,xt),Re=new lg(Q,Te,at),ee=new Jm(Oe),It=new M_(g,Dt,De,We,Te,He,ee),en=new V_(g,Oe),D=new w_,A=new P_(We,Te),xe=new jm(g,Dt,De,Ke,yt,v,p),ge=new N_(g,yt,Te),ze=new W_(Q,xt,Te,Ke),$e=new $m(Q,We,xt,Te),Ne=new rg(Q,We,xt,Te),xt.programs=It.programs,g.capabilities=Te,g.extensions=We,g.properties=Oe,g.renderLists=D,g.shadowMap=ge,g.state=Ke,g.info=xt}qe();const Ue=new G_(g,Q);this.xr=Ue,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(_e,ue,!1))},this.getSize=function(C){return C.set(_e,ue)},this.setSize=function(C,j,ie=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}_e=C,ue=j,t.width=Math.floor(C*Y),t.height=Math.floor(j*Y),ie===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(_e*Y,ue*Y).floor()},this.setDrawingBufferSize=function(C,j,ie){_e=C,ue=j,Y=ie,t.width=Math.floor(C*ie),t.height=Math.floor(j*ie),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(Se)},this.setViewport=function(C,j,ie,W){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,j,ie,W),Ke.viewport(J.copy(Se).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,j,ie,W){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,j,ie,W),Ke.scissor(P.copy(Me).multiplyScalar(Y).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){Ke.setScissorTest(de=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(C=!0,j=!0,ie=!0){let W=0;C&&(W|=16384),j&&(W|=256),ie&&(W|=1024),Q.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",st,!1),D.dispose(),A.dispose(),Oe.dispose(),Dt.dispose(),De.dispose(),yt.dispose(),He.dispose(),ze.dispose(),It.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Fe),Ue.removeEventListener("sessionend",Tt),we&&(we.dispose(),we=null),Pt.stop()};function Be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=xt.autoReset,j=ge.enabled,ie=ge.autoUpdate,W=ge.needsUpdate,oe=ge.type;qe(),xt.autoReset=C,ge.enabled=j,ge.autoUpdate=ie,ge.needsUpdate=W,ge.type=oe}function st(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){const j=C.target;j.removeEventListener("dispose",Lt),k(j)}function k(C){re(C),Oe.remove(C)}function re(C){const j=Oe.get(C).programs;j!==void 0&&(j.forEach(function(ie){It.releaseProgram(ie)}),C.isShaderMaterial&&It.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,ie,W,oe,je){j===null&&(j=Le);const Qe=oe.isMesh&&oe.matrixWorld.determinant()<0,nt=ho(C,j,ie,W,oe);Ke.setMaterial(W,Qe);let lt=ie.index,ot=1;W.wireframe===!0&&(lt=Bt.getWireframeAttribute(ie),ot=2);const ct=ie.drawRange,ut=ie.attributes.position;let Mt=ct.start*ot,Kt=(ct.start+ct.count)*ot;je!==null&&(Mt=Math.max(Mt,je.start*ot),Kt=Math.min(Kt,(je.start+je.count)*ot)),lt!==null?(Mt=Math.max(Mt,0),Kt=Math.min(Kt,lt.count)):ut!=null&&(Mt=Math.max(Mt,0),Kt=Math.min(Kt,ut.count));const yn=Kt-Mt;if(yn<0||yn===1/0)return;He.setup(oe,W,nt,ie,lt);let Fn,zt=$e;if(lt!==null&&(Fn=gt.get(lt),zt=Ne,zt.setIndex(Fn)),oe.isMesh)W.wireframe===!0?(Ke.setLineWidth(W.wireframeLinewidth*Ie()),zt.setMode(1)):zt.setMode(4);else if(oe.isLine){let pt=W.linewidth;pt===void 0&&(pt=1),Ke.setLineWidth(pt*Ie()),oe.isLineSegments?zt.setMode(1):oe.isLineLoop?zt.setMode(2):zt.setMode(3)}else oe.isPoints?zt.setMode(0):oe.isSprite&&zt.setMode(4);if(oe.isInstancedMesh)zt.renderInstances(Mt,yn,oe.count);else if(ie.isInstancedBufferGeometry){const pt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xi=Math.min(ie.instanceCount,pt);zt.renderInstances(Mt,yn,Xi)}else zt.render(Mt,yn)},this.compile=function(C,j){function ie(W,oe,je){W.transparent===!0&&W.side===fi&&W.forceSinglePass===!1?(W.side=_n,W.needsUpdate=!0,wi(W,oe,je),W.side=bi,W.needsUpdate=!0,wi(W,oe,je),W.side=fi):wi(W,oe,je)}b=A.get(C),b.init(),M.push(b),C.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(g.useLegacyLights),C.traverse(function(W){const oe=W.material;if(oe)if(Array.isArray(oe))for(let je=0;je<oe.length;je++){const Qe=oe[je];ie(Qe,C,W)}else ie(oe,C,W)}),M.pop(),b=null};let ve=null;function Ce(C){ve&&ve(C)}function Fe(){Pt.stop()}function Tt(){Pt.start()}const Pt=new du;Pt.setAnimationLoop(Ce),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(C){ve=C,Ue.setAnimationLoop(C),C===null?Pt.stop():Pt.start()},Ue.addEventListener("sessionstart",Fe),Ue.addEventListener("sessionend",Tt),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(j),j=Ue.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,j,O),b=A.get(C,M.length),b.init(),M.push(b),te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),be.setFromProjectionMatrix(te),Ve=this.localClippingEnabled,ye=ee.init(this.clippingPlanes,Ve),y=D.get(C,w.length),y.init(),w.push(y),Gt(C,j,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(K,le),ye===!0&&ee.beginShadows();const ie=b.state.shadowsArray;if(ge.render(ie,C,j),ye===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(y,C),b.setupLights(g.useLegacyLights),j.isArrayCamera){const W=j.cameras;for(let oe=0,je=W.length;oe<je;oe++){const Qe=W[oe];xn(y,C,Qe,Qe.viewport)}}else xn(y,C,j);O!==null&&(at.updateMultisampleRenderTarget(O),at.updateRenderTargetMipmap(O)),C.isScene===!0&&C.onAfterRender(g,C,j),He.resetDefaultState(),u=-1,q=null,M.pop(),M.length>0?b=M[M.length-1]:b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Gt(C,j,ie,W){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)ie=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)b.pushLight(C),C.castShadow&&b.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||be.intersectsSprite(C)){W&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);const Qe=yt.update(C),nt=C.material;nt.visible&&y.push(C,Qe,nt,ie,he.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==xt.render.frame&&(C.skeleton.update(),C.skeleton.frame=xt.render.frame),!C.frustumCulled||be.intersectsObject(C))){W&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(te);const Qe=yt.update(C),nt=C.material;if(Array.isArray(nt)){const lt=Qe.groups;for(let ot=0,ct=lt.length;ot<ct;ot++){const ut=lt[ot],Mt=nt[ut.materialIndex];Mt&&Mt.visible&&y.push(C,Qe,Mt,ie,he.z,ut)}}else nt.visible&&y.push(C,Qe,nt,ie,he.z,null)}}const je=C.children;for(let Qe=0,nt=je.length;Qe<nt;Qe++)Gt(je[Qe],j,ie,W)}function xn(C,j,ie,W){const oe=C.opaque,je=C.transmissive,Qe=C.transparent;b.setupLightsView(ie),ye===!0&&ee.setGlobalState(g.clippingPlanes,ie),je.length>0&&Ot(oe,je,j,ie),W&&Ke.viewport(J.copy(W)),oe.length>0&&dn(oe,j,ie),je.length>0&&dn(je,j,ie),Qe.length>0&&dn(Qe,j,ie),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ot(C,j,ie,W){if(we===null){const nt=Te.isWebGL2;we=new Vi(1024,1024,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?ns:Hi,minFilter:ts,samples:nt&&l===!0?4:0})}const oe=g.getRenderTarget();g.setRenderTarget(we),g.clear();const je=g.toneMapping;g.toneMapping=hi,dn(C,ie,W),at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we);let Qe=!1;for(let nt=0,lt=j.length;nt<lt;nt++){const ot=j[nt],ct=ot.object,ut=ot.geometry,Mt=ot.material,Kt=ot.group;if(Mt.side===fi&&ct.layers.test(W.layers)){const yn=Mt.side;Mt.side=_n,Mt.needsUpdate=!0,Pn(ct,ie,W,ut,Mt,Kt),Mt.side=yn,Mt.needsUpdate=!0,Qe=!0}}Qe===!0&&(at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we)),g.setRenderTarget(oe),g.toneMapping=je}function dn(C,j,ie){const W=j.isScene===!0?j.overrideMaterial:null;for(let oe=0,je=C.length;oe<je;oe++){const Qe=C[oe],nt=Qe.object,lt=Qe.geometry,ot=W===null?Qe.material:W,ct=Qe.group;nt.layers.test(ie.layers)&&Pn(nt,j,ie,lt,ot,ct)}}function Pn(C,j,ie,W,oe,je){C.onBeforeRender(g,j,ie,W,oe,je),C.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),oe.onBeforeRender(g,j,ie,W,C,je),oe.transparent===!0&&oe.side===fi&&oe.forceSinglePass===!1?(oe.side=_n,oe.needsUpdate=!0,g.renderBufferDirect(ie,j,W,oe,C,je),oe.side=bi,oe.needsUpdate=!0,g.renderBufferDirect(ie,j,W,oe,C,je),oe.side=fi):g.renderBufferDirect(ie,j,W,oe,C,je),C.onAfterRender(g,j,ie,W,oe,je)}function wi(C,j,ie){j.isScene!==!0&&(j=Le);const W=Oe.get(C),oe=b.state.lights,je=b.state.shadowsArray,Qe=oe.state.version,nt=It.getParameters(C,oe.state,je,j,ie),lt=It.getProgramCacheKey(nt);let ot=W.programs;W.environment=C.isMeshStandardMaterial?j.environment:null,W.fog=j.fog,W.envMap=(C.isMeshStandardMaterial?De:Dt).get(C.envMap||W.environment),ot===void 0&&(C.addEventListener("dispose",Lt),ot=new Map,W.programs=ot);let ct=ot.get(lt);if(ct!==void 0){if(W.currentProgram===ct&&W.lightsStateVersion===Qe)return ds(C,nt),ct}else nt.uniforms=It.getUniforms(C),C.onBuild(ie,nt,g),C.onBeforeCompile(nt,g),ct=It.acquireProgram(nt,lt),ot.set(lt,ct),W.uniforms=nt.uniforms;const ut=W.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ut.clippingPlanes=ee.uniform),ds(C,nt),W.needsLights=po(C),W.lightsStateVersion=Qe,W.needsLights&&(ut.ambientLightColor.value=oe.state.ambient,ut.lightProbe.value=oe.state.probe,ut.directionalLights.value=oe.state.directional,ut.directionalLightShadows.value=oe.state.directionalShadow,ut.spotLights.value=oe.state.spot,ut.spotLightShadows.value=oe.state.spotShadow,ut.rectAreaLights.value=oe.state.rectArea,ut.ltc_1.value=oe.state.rectAreaLTC1,ut.ltc_2.value=oe.state.rectAreaLTC2,ut.pointLights.value=oe.state.point,ut.pointLightShadows.value=oe.state.pointShadow,ut.hemisphereLights.value=oe.state.hemi,ut.directionalShadowMap.value=oe.state.directionalShadowMap,ut.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ut.spotShadowMap.value=oe.state.spotShadowMap,ut.spotLightMatrix.value=oe.state.spotLightMatrix,ut.spotLightMap.value=oe.state.spotLightMap,ut.pointShadowMap.value=oe.state.pointShadowMap,ut.pointShadowMatrix.value=oe.state.pointShadowMatrix);const Mt=ct.getUniforms(),Kt=js.seqWithValue(Mt.seq,ut);return W.currentProgram=ct,W.uniformsList=Kt,ct}function ds(C,j){const ie=Oe.get(C);ie.outputEncoding=j.outputEncoding,ie.instancing=j.instancing,ie.skinning=j.skinning,ie.morphTargets=j.morphTargets,ie.morphNormals=j.morphNormals,ie.morphColors=j.morphColors,ie.morphTargetsCount=j.morphTargetsCount,ie.numClippingPlanes=j.numClippingPlanes,ie.numIntersection=j.numClipIntersection,ie.vertexAlphas=j.vertexAlphas,ie.vertexTangents=j.vertexTangents,ie.toneMapping=j.toneMapping}function ho(C,j,ie,W,oe){j.isScene!==!0&&(j=Le),at.resetTextureUnits();const je=j.fog,Qe=W.isMeshStandardMaterial?j.environment:null,nt=O===null?g.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Gi,lt=(W.isMeshStandardMaterial?De:Dt).get(W.envMap||Qe),ot=W.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ct=!!W.normalMap&&!!ie.attributes.tangent,ut=!!ie.morphAttributes.position,Mt=!!ie.morphAttributes.normal,Kt=!!ie.morphAttributes.color,yn=W.toneMapped?g.toneMapping:hi,Fn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,zt=Fn!==void 0?Fn.length:0,pt=Oe.get(W),Xi=b.state.lights;if(ye===!0&&(Ve===!0||C!==q)){const tn=C===q&&W.id===u;ee.setState(W,C,tn)}let kt=!1;W.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Xi.state.version||pt.outputEncoding!==nt||oe.isInstancedMesh&&pt.instancing===!1||!oe.isInstancedMesh&&pt.instancing===!0||oe.isSkinnedMesh&&pt.skinning===!1||!oe.isSkinnedMesh&&pt.skinning===!0||pt.envMap!==lt||W.fog===!0&&pt.fog!==je||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==ee.numPlanes||pt.numIntersection!==ee.numIntersection)||pt.vertexAlphas!==ot||pt.vertexTangents!==ct||pt.morphTargets!==ut||pt.morphNormals!==Mt||pt.morphColors!==Kt||pt.toneMapping!==yn||Te.isWebGL2===!0&&pt.morphTargetsCount!==zt)&&(kt=!0):(kt=!0,pt.__version=W.version);let zn=pt.currentProgram;kt===!0&&(zn=wi(W,j,oe));let Dr=!1,Vt=!1,$n=!1;const Wt=zn.getUniforms(),ni=pt.uniforms;if(Ke.useProgram(zn.program)&&(Dr=!0,Vt=!0,$n=!0),W.id!==u&&(u=W.id,Vt=!0),Dr||q!==C){if(Wt.setValue(Q,"projectionMatrix",C.projectionMatrix),Te.logarithmicDepthBuffer&&Wt.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),q!==C&&(q=C,Vt=!0,$n=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const tn=Wt.map.cameraPosition;tn!==void 0&&tn.setValue(Q,he.setFromMatrixPosition(C.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Wt.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||oe.isSkinnedMesh)&&Wt.setValue(Q,"viewMatrix",C.matrixWorldInverse)}if(oe.isSkinnedMesh){Wt.setOptional(Q,oe,"bindMatrix"),Wt.setOptional(Q,oe,"bindMatrixInverse");const tn=oe.skeleton;tn&&(Te.floatVertexTextures?(tn.boneTexture===null&&tn.computeBoneTexture(),Wt.setValue(Q,"boneTexture",tn.boneTexture,at),Wt.setValue(Q,"boneTextureSize",tn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ir=ie.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&Te.isWebGL2===!0)&&Re.update(oe,ie,zn),(Vt||pt.receiveShadow!==oe.receiveShadow)&&(pt.receiveShadow=oe.receiveShadow,Wt.setValue(Q,"receiveShadow",oe.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ni.envMap.value=lt,ni.flipEnvMap.value=lt.isCubeTexture&&lt.isRenderTargetTexture===!1?-1:1),Vt&&(Wt.setValue(Q,"toneMappingExposure",g.toneMappingExposure),pt.needsLights&&ps(ni,$n),je&&W.fog===!0&&en.refreshFogUniforms(ni,je),en.refreshMaterialUniforms(ni,W,Y,ue,we),js.upload(Q,pt.uniformsList,ni,at)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(js.upload(Q,pt.uniformsList,ni,at),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Wt.setValue(Q,"center",oe.center),Wt.setValue(Q,"modelViewMatrix",oe.modelViewMatrix),Wt.setValue(Q,"normalMatrix",oe.normalMatrix),Wt.setValue(Q,"modelMatrix",oe.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let $i=0,Yi=tn.length;$i<Yi;$i++)if(Te.isWebGL2){const Ur=tn[$i];ze.update(Ur,zn),ze.bind(Ur,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function ps(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function po(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(C,j,ie){Oe.get(C.texture).__webglTexture=j,Oe.get(C.depthTexture).__webglTexture=ie;const W=Oe.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=ie===void 0,W.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const ie=Oe.get(C);ie.__webglFramebuffer=j,ie.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,ie=0){O=C,R=j,L=ie;let W=!0,oe=null,je=!1,Qe=!1;if(C){const lt=Oe.get(C);lt.__useDefaultFramebuffer!==void 0?(Ke.bindFramebuffer(36160,null),W=!1):lt.__webglFramebuffer===void 0?at.setupRenderTarget(C):lt.__hasExternalTextures&&at.rebindTextures(C,Oe.get(C.texture).__webglTexture,Oe.get(C.depthTexture).__webglTexture);const ot=C.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Qe=!0);const ct=Oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(oe=ct[j],je=!0):Te.isWebGL2&&C.samples>0&&at.useMultisampledRTT(C)===!1?oe=Oe.get(C).__webglMultisampledFramebuffer:oe=ct,J.copy(C.viewport),P.copy(C.scissor),z=C.scissorTest}else J.copy(Se).multiplyScalar(Y).floor(),P.copy(Me).multiplyScalar(Y).floor(),z=de;if(Ke.bindFramebuffer(36160,oe)&&Te.drawBuffers&&W&&Ke.drawBuffers(C,oe),Ke.viewport(J),Ke.scissor(P),Ke.setScissorTest(z),je){const lt=Oe.get(C.texture);Q.framebufferTexture2D(36160,36064,34069+j,lt.__webglTexture,ie)}else if(Qe){const lt=Oe.get(C.texture),ot=j||0;Q.framebufferTextureLayer(36160,36064,lt.__webglTexture,ie||0,ot)}u=-1},this.readRenderTargetPixels=function(C,j,ie,W,oe,je,Qe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=Oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Qe!==void 0&&(nt=nt[Qe]),nt){Ke.bindFramebuffer(36160,nt);try{const lt=C.texture,ot=lt.format,ct=lt.type;if(ot!==jn&&ae.convert(ot)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=ct===ns&&(We.has("EXT_color_buffer_half_float")||Te.isWebGL2&&We.has("EXT_color_buffer_float"));if(ct!==Hi&&ae.convert(ct)!==Q.getParameter(35738)&&!(ct===Bi&&(Te.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-W&&ie>=0&&ie<=C.height-oe&&Q.readPixels(j,ie,W,oe,ae.convert(ot),ae.convert(ct),je)}finally{const lt=O!==null?Oe.get(O).__webglFramebuffer:null;Ke.bindFramebuffer(36160,lt)}}},this.copyFramebufferToTexture=function(C,j,ie=0){const W=Math.pow(2,-ie),oe=Math.floor(j.image.width*W),je=Math.floor(j.image.height*W);at.setTexture2D(j,0),Q.copyTexSubImage2D(3553,ie,0,0,C.x,C.y,oe,je),Ke.unbindTexture()},this.copyTextureToTexture=function(C,j,ie,W=0){const oe=j.image.width,je=j.image.height,Qe=ae.convert(ie.format),nt=ae.convert(ie.type);at.setTexture2D(ie,0),Q.pixelStorei(37440,ie.flipY),Q.pixelStorei(37441,ie.premultiplyAlpha),Q.pixelStorei(3317,ie.unpackAlignment),j.isDataTexture?Q.texSubImage2D(3553,W,C.x,C.y,oe,je,Qe,nt,j.image.data):j.isCompressedTexture?Q.compressedTexSubImage2D(3553,W,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,Qe,j.mipmaps[0].data):Q.texSubImage2D(3553,W,C.x,C.y,Qe,nt,j.image),W===0&&ie.generateMipmaps&&Q.generateMipmap(3553),Ke.unbindTexture()},this.copyTextureToTexture3D=function(C,j,ie,W,oe=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const je=C.max.x-C.min.x+1,Qe=C.max.y-C.min.y+1,nt=C.max.z-C.min.z+1,lt=ae.convert(W.format),ot=ae.convert(W.type);let ct;if(W.isData3DTexture)at.setTexture3D(W,0),ct=32879;else if(W.isDataArrayTexture)at.setTexture2DArray(W,0),ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,W.flipY),Q.pixelStorei(37441,W.premultiplyAlpha),Q.pixelStorei(3317,W.unpackAlignment);const ut=Q.getParameter(3314),Mt=Q.getParameter(32878),Kt=Q.getParameter(3316),yn=Q.getParameter(3315),Fn=Q.getParameter(32877),zt=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;Q.pixelStorei(3314,zt.width),Q.pixelStorei(32878,zt.height),Q.pixelStorei(3316,C.min.x),Q.pixelStorei(3315,C.min.y),Q.pixelStorei(32877,C.min.z),ie.isDataTexture||ie.isData3DTexture?Q.texSubImage3D(ct,oe,j.x,j.y,j.z,je,Qe,nt,lt,ot,zt.data):ie.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(ct,oe,j.x,j.y,j.z,je,Qe,nt,lt,zt.data)):Q.texSubImage3D(ct,oe,j.x,j.y,j.z,je,Qe,nt,lt,ot,zt),Q.pixelStorei(3314,ut),Q.pixelStorei(32878,Mt),Q.pixelStorei(3316,Kt),Q.pixelStorei(3315,yn),Q.pixelStorei(32877,Fn),oe===0&&W.generateMipmaps&&Q.generateMipmap(ct),Ke.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?at.setTextureCube(C,0):C.isData3DTexture?at.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?at.setTexture2DArray(C,0):at.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){R=0,L=0,O=null,Ke.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class j_ extends vu{}j_.prototype.isWebGL1Renderer=!0;class X_ extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class xu extends Lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new V,Ec=new V,Tc=new Ht,ra=new La,Vs=new eo;class $_ extends hn{constructor(e=new Xn,t=new xu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)wc.fromBufferAttribute(t,r-1),Ec.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=wc.distanceTo(Ec);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Vs.radius+=o,e.ray.intersectsSphere(Vs)===!1)return;Tc.copy(r).invert(),ra.copy(e.ray).applyMatrix4(Tc);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),p=l*l,h=new V,m=new V,_=new V,v=new V,y=this.isLineSegments?2:1,b=n.index,M=n.attributes.position;if(b!==null){const g=Math.max(0,c.start),N=Math.min(b.count,c.start+c.count);for(let R=g,L=N-1;R<L;R+=y){const O=b.getX(R),u=b.getX(R+1);if(h.fromBufferAttribute(M,O),m.fromBufferAttribute(M,u),ra.distanceSqToSegment(h,m,v,_)>p)continue;v.applyMatrix4(this.matrixWorld);const J=e.ray.origin.distanceTo(v);J<e.near||J>e.far||t.push({distance:J,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,c.start),N=Math.min(M.count,c.start+c.count);for(let R=g,L=N-1;R<L;R+=y){if(h.fromBufferAttribute(M,R),m.fromBufferAttribute(M,R+1),ra.distanceSqToSegment(h,m,v,_)>p)continue;v.applyMatrix4(this.matrixWorld);const u=e.ray.origin.distanceTo(v);u<e.near||u>e.far||t.push({distance:u,point:_.clone().applyMatrix4(this.matrixWorld),index:R,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=r.length;o<c;o++){const l=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}const Ac=new V,Cc=new V;class Y_ extends $_{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Ac.fromBufferAttribute(t,r),Cc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ac.distanceTo(Cc);e.setAttribute("lineDistance",new rn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class no extends Xn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const p=Math.min(c+l,Math.PI);let h=0;const m=[],_=new V,v=new V,y=[],b=[],w=[],M=[];for(let g=0;g<=n;g++){const N=[],R=g/n;let L=0;g===0&&c===0?L=.5/t:g===n&&p===Math.PI&&(L=-.5/t);for(let O=0;O<=t;O++){const u=O/t;_.x=-e*Math.cos(r+u*o)*Math.sin(c+R*l),_.y=e*Math.cos(c+R*l),_.z=e*Math.sin(r+u*o)*Math.sin(c+R*l),b.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),M.push(u+L,1-R),N.push(h++)}m.push(N)}for(let g=0;g<n;g++)for(let N=0;N<t;N++){const R=m[g][N+1],L=m[g][N],O=m[g+1][N],u=m[g+1][N+1];(g!==0||c>0)&&y.push(R,L,u),(g!==n-1||p<Math.PI)&&y.push(L,O,u)}this.setIndex(y),this.setAttribute("position",new rn(b,3)),this.setAttribute("normal",new rn(w,3)),this.setAttribute("uv",new rn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Na extends Xn{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],p=[],h=[],m=new V,_=new V,v=new V;for(let y=0;y<=n;y++)for(let b=0;b<=r;b++){const w=b/r*o,M=y/n*Math.PI*2;_.x=(e+t*Math.cos(M))*Math.cos(w),_.y=(e+t*Math.cos(M))*Math.sin(w),_.z=t*Math.sin(M),l.push(_.x,_.y,_.z),m.x=e*Math.cos(w),m.y=e*Math.sin(w),v.subVectors(_,m).normalize(),p.push(v.x,v.y,v.z),h.push(b/r),h.push(y/n)}for(let y=1;y<=n;y++)for(let b=1;b<=r;b++){const w=(r+1)*y+b-1,M=(r+1)*(y-1)+b-1,g=(r+1)*(y-1)+b,N=(r+1)*y+b;c.push(w,M,N),c.push(M,g,N)}this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(p,3)),this.setAttribute("uv",new rn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class io extends Lr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Lc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class J_{constructor(e,t,n){const r=this;let o=!1,c=0,l=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){l++,o===!1&&r.onStart!==void 0&&r.onStart(m,c,l),o=!0},this.itemEnd=function(m){c++,r.onProgress!==void 0&&r.onProgress(m,c,l),c===l&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=h.length;_<v;_+=2){const y=h[_],b=h[_+1];if(y.global&&(y.lastIndex=0),y.test(m))return b}return null}}}const Z_=new J_;class yu{constructor(e){this.manager=e!==void 0?e:Z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class K_ extends yu{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Lc.get(e);if(c!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0),c;const l=ss("img");function p(){m(),Lc.add(e,this),t&&t(this),o.manager.itemEnd(e)}function h(_){m(),r&&r(_),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){l.removeEventListener("load",p,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",p,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),o.manager.itemStart(e),l.src=e,l}}class Q_ extends yu{constructor(e){super(e)}load(e,t,n,r){const o=new vn,c=new K_(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(l){o.image=l,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Mu extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const sa=new Ht,Pc=new V,Rc=new V;class e0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pc),Rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rc),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dc=new Ht,jr=new V,oa=new V;class t0 extends e0{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),oa.copy(n.position),oa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oa),n.updateMatrixWorld(),r.makeTranslation(-jr.x,-jr.y,-jr.z),Dc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dc)}}class n0 extends Mu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new t0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i0 extends Mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class r0{constructor(e,t,n=0,r=1/0){this.ray=new La(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xa(e,this,n,t),n.sort(Ic),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)xa(e[r],this,n,t);return n.sort(Ic),n}}function Ic(i,e){return i.distance-e.distance}function xa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let o=0,c=r.length;o<c;o++)xa(r[o],e,t,!0)}}class s0 extends Ln{constructor(e,t,n){const r=new no(t,4,2),o=new Ra({wireframe:!0,fog:!1,toneMapped:!1});super(r,o),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class o0 extends Y_{constructor(e=10,t=10,n=4473924,r=8947848){n=new bt(n),r=new bt(r);const o=t/2,c=e/t,l=e/2,p=[],h=[];for(let v=0,y=0,b=-l;v<=t;v++,b+=c){p.push(-l,0,b,l,0,b),p.push(b,0,-l,b,0,l);const w=v===o?n:r;w.toArray(h,y),y+=3,w.toArray(h,y),y+=3,w.toArray(h,y),y+=3,w.toArray(h,y),y+=3}const m=new Xn;m.setAttribute("position",new rn(p,3)),m.setAttribute("color",new rn(h,3));const _=new xu({vertexColors:!0,toneMapped:!1});super(m,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);let Kn={forward:0,side:0};const a0=new ji(5,5,5,5),l0=new io({color:9397063}),ya=new Ln(a0,l0);function Su(){ya.position.x+=Kn.side,ya.position.z+=Kn.forward,requestAnimationFrame(Su)}Su();document.addEventListener("keydown",i=>{switch(i.key.toLowerCase()){case"w":Kn.forward=1;break;case"a":Kn.side=1;break;case"s":Kn.forward=-1;break;case"d":Kn.side=-1;break}});document.addEventListener("keyup",i=>{switch(i.key.toLowerCase()){case"w":Kn.forward=0;break;case"a":Kn.side=0;break;case"s":Kn.forward=0;break;case"d":Kn.side=0;break}});var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function c0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var u0={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(bu,function(){var t=function(){function n(y){return c.appendChild(y.dom),y}function r(y){for(var b=0;b<c.children.length;b++)c.children[b].style.display=b===y?"block":"none";o=y}var o=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",c.addEventListener("click",function(y){y.preventDefault(),r(++o%c.children.length)},!1);var l=(performance||Date).now(),p=l,h=0,m=n(new t.Panel("FPS","#0ff","#002")),_=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var v=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:c,addPanel:n,showPanel:r,begin:function(){l=(performance||Date).now()},end:function(){h++;var y=(performance||Date).now();if(_.update(y-l,200),y>p+1e3&&(m.update(1e3*h/(y-p),100),p=y,h=0,v)){var b=performance.memory;v.update(b.usedJSHeapSize/1048576,b.jsHeapSizeLimit/1048576)}return y},update:function(){l=this.end()},domElement:c,setMode:r}};return t.Panel=function(n,r,o){var c=1/0,l=0,p=Math.round,h=p(window.devicePixelRatio||1),m=80*h,_=48*h,v=3*h,y=2*h,b=3*h,w=15*h,M=74*h,g=30*h,N=document.createElement("canvas");N.width=m,N.height=_,N.style.cssText="width:80px;height:48px";var R=N.getContext("2d");return R.font="bold "+9*h+"px Helvetica,Arial,sans-serif",R.textBaseline="top",R.fillStyle=o,R.fillRect(0,0,m,_),R.fillStyle=r,R.fillText(n,v,y),R.fillRect(b,w,M,g),R.fillStyle=o,R.globalAlpha=.9,R.fillRect(b,w,M,g),{dom:N,update:function(L,O){c=Math.min(c,L),l=Math.max(l,L),R.fillStyle=o,R.globalAlpha=1,R.fillRect(0,0,m,w),R.fillStyle=r,R.fillText(p(L)+" "+n+" ("+p(c)+"-"+p(l)+")",v,y),R.drawImage(N,b+h,w,M-h,g,b,w,M-h,g),R.fillRect(b+M-h,w,h,g),R.fillStyle=o,R.globalAlpha=.9,R.fillRect(b+M-h,w,h,p((1-L/O)*g))}}},t})})(u0);var wu={exports:{}};/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:bu,function(e,t){var n=[],r=Object.getPrototypeOf,o=n.slice,c=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},l=n.push,p=n.indexOf,h={},m=h.toString,_=h.hasOwnProperty,v=_.toString,y=v.call(Object),b={},w=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},M=function(a){return a!=null&&a===a.window},g=e.document,N={type:!0,src:!0,nonce:!0,noModule:!0};function R(s,a,f){f=f||g;var d,x,S=f.createElement("script");if(S.text=s,a)for(d in N)x=a[d]||a.getAttribute&&a.getAttribute(d),x&&S.setAttribute(d,x);f.head.appendChild(S).parentNode.removeChild(S)}function L(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?h[m.call(s)]||"object":typeof s}var O="3.6.4",u=function(s,a){return new u.fn.init(s,a)};u.fn=u.prototype={jquery:O,constructor:u,length:0,toArray:function(){return o.call(this)},get:function(s){return s==null?o.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var a=u.merge(this.constructor(),s);return a.prevObject=this,a},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(a,f){return s.call(a,f,a)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,a){return(a+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,a){return a%2}))},eq:function(s){var a=this.length,f=+s+(s<0?a:0);return this.pushStack(f>=0&&f<a?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:n.sort,splice:n.splice},u.extend=u.fn.extend=function(){var s,a,f,d,x,S,E=arguments[0]||{},F=1,I=arguments.length,G=!1;for(typeof E=="boolean"&&(G=E,E=arguments[F]||{},F++),typeof E!="object"&&!w(E)&&(E={}),F===I&&(E=this,F--);F<I;F++)if((s=arguments[F])!=null)for(a in s)d=s[a],!(a==="__proto__"||E===d)&&(G&&d&&(u.isPlainObject(d)||(x=Array.isArray(d)))?(f=E[a],x&&!Array.isArray(f)?S=[]:!x&&!u.isPlainObject(f)?S={}:S=f,x=!1,E[a]=u.extend(G,S,d)):d!==void 0&&(E[a]=d));return E},u.extend({expando:"jQuery"+(O+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var a,f;return!s||m.call(s)!=="[object Object]"?!1:(a=r(s),a?(f=_.call(a,"constructor")&&a.constructor,typeof f=="function"&&v.call(f)===y):!0)},isEmptyObject:function(s){var a;for(a in s)return!1;return!0},globalEval:function(s,a,f){R(s,{nonce:a&&a.nonce},f)},each:function(s,a){var f,d=0;if(q(s))for(f=s.length;d<f&&a.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(a.call(s[d],d,s[d])===!1)break;return s},makeArray:function(s,a){var f=a||[];return s!=null&&(q(Object(s))?u.merge(f,typeof s=="string"?[s]:s):l.call(f,s)),f},inArray:function(s,a,f){return a==null?-1:p.call(a,s,f)},merge:function(s,a){for(var f=+a.length,d=0,x=s.length;d<f;d++)s[x++]=a[d];return s.length=x,s},grep:function(s,a,f){for(var d,x=[],S=0,E=s.length,F=!f;S<E;S++)d=!a(s[S],S),d!==F&&x.push(s[S]);return x},map:function(s,a,f){var d,x,S=0,E=[];if(q(s))for(d=s.length;S<d;S++)x=a(s[S],S,f),x!=null&&E.push(x);else for(S in s)x=a(s[S],S,f),x!=null&&E.push(x);return c(E)},guid:1,support:b}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=n[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,a){h["[object "+a+"]"]=a.toLowerCase()});function q(s){var a=!!s&&"length"in s&&s.length,f=L(s);return w(s)||M(s)?!1:f==="array"||a===0||typeof a=="number"&&a>0&&a-1 in s}var J=function(s){var a,f,d,x,S,E,F,I,G,Z,pe,X,ne,Ge,rt,ke,Xt,qt,Mn,Et="sizzle"+1*new Date,it=s.document,pn=0,_t=0,Ft=vs(),zr=vs(),ms=vs(),Sn=vs(),Ai=function(T,U){return T===U&&(pe=!0),0},Ci={}.hasOwnProperty,mn=[],mi=mn.pop,Rn=mn.push,gi=mn.push,el=mn.slice,Li=function(T,U){for(var B=0,se=T.length;B<se;B++)if(T[B]===U)return B;return-1},So="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",St="[\\x20\\t\\r\\n\\f]",Pi="(?:\\\\[\\da-fA-F]{1,6}"+St+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",tl="\\["+St+"*("+Pi+")(?:"+St+"*([*^$|!~]?=)"+St+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Pi+"))|)"+St+"*\\]",bo=":("+Pi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+tl+")*)|.*)\\)|)",yf=new RegExp(St+"+","g"),gs=new RegExp("^"+St+"+|((?:^|[^\\\\])(?:\\\\.)*)"+St+"+$","g"),Mf=new RegExp("^"+St+"*,"+St+"*"),nl=new RegExp("^"+St+"*([>+~]|"+St+")"+St+"*"),Sf=new RegExp(St+"|>"),bf=new RegExp(bo),wf=new RegExp("^"+Pi+"$"),_s={ID:new RegExp("^#("+Pi+")"),CLASS:new RegExp("^\\.("+Pi+")"),TAG:new RegExp("^("+Pi+"|[*])"),ATTR:new RegExp("^"+tl),PSEUDO:new RegExp("^"+bo),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+St+"*(even|odd|(([+-]|)(\\d*)n|)"+St+"*(?:([+-]|)"+St+"*(\\d+)|))"+St+"*\\)|)","i"),bool:new RegExp("^(?:"+So+")$","i"),needsContext:new RegExp("^"+St+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+St+"*((?:-\\d)?\\d*)"+St+"*\\)|)(?=[^-]|$)","i")},Ef=/HTML$/i,Tf=/^(?:input|select|textarea|button)$/i,Af=/^h\d$/i,Br=/^[^{]+\{\s*\[native \w/,Cf=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wo=/[+~]/,ii=new RegExp("\\\\[\\da-fA-F]{1,6}"+St+"?|\\\\([^\\r\\n\\f])","g"),ri=function(T,U){var B="0x"+T.slice(1)-65536;return U||(B<0?String.fromCharCode(B+65536):String.fromCharCode(B>>10|55296,B&1023|56320))},il=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,rl=function(T,U){return U?T==="\0"?"�":T.slice(0,-1)+"\\"+T.charCodeAt(T.length-1).toString(16)+" ":"\\"+T},sl=function(){X()},Lf=ys(function(T){return T.disabled===!0&&T.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{gi.apply(mn=el.call(it.childNodes),it.childNodes),mn[it.childNodes.length].nodeType}catch{gi={apply:mn.length?function(U,B){Rn.apply(U,el.call(B))}:function(U,B){for(var se=U.length,H=0;U[se++]=B[H++];);U.length=se-1}}}function At(T,U,B,se){var H,fe,me,Ee,Pe,Ye,Xe,Ze=U&&U.ownerDocument,ht=U?U.nodeType:9;if(B=B||[],typeof T!="string"||!T||ht!==1&&ht!==9&&ht!==11)return B;if(!se&&(X(U),U=U||ne,rt)){if(ht!==11&&(Pe=Cf.exec(T)))if(H=Pe[1]){if(ht===9)if(me=U.getElementById(H)){if(me.id===H)return B.push(me),B}else return B;else if(Ze&&(me=Ze.getElementById(H))&&Mn(U,me)&&me.id===H)return B.push(me),B}else{if(Pe[2])return gi.apply(B,U.getElementsByTagName(T)),B;if((H=Pe[3])&&f.getElementsByClassName&&U.getElementsByClassName)return gi.apply(B,U.getElementsByClassName(H)),B}if(f.qsa&&!Sn[T+" "]&&(!ke||!ke.test(T))&&(ht!==1||U.nodeName.toLowerCase()!=="object")){if(Xe=T,Ze=U,ht===1&&(Sf.test(T)||nl.test(T))){for(Ze=wo.test(T)&&To(U.parentNode)||U,(Ze!==U||!f.scope)&&((Ee=U.getAttribute("id"))?Ee=Ee.replace(il,rl):U.setAttribute("id",Ee=Et)),Ye=E(T),fe=Ye.length;fe--;)Ye[fe]=(Ee?"#"+Ee:":scope")+" "+xs(Ye[fe]);Xe=Ye.join(",")}try{return gi.apply(B,Ze.querySelectorAll(Xe)),B}catch{Sn(T,!0)}finally{Ee===Et&&U.removeAttribute("id")}}}return I(T.replace(gs,"$1"),U,B,se)}function vs(){var T=[];function U(B,se){return T.push(B+" ")>d.cacheLength&&delete U[T.shift()],U[B+" "]=se}return U}function kn(T){return T[Et]=!0,T}function Dn(T){var U=ne.createElement("fieldset");try{return!!T(U)}catch{return!1}finally{U.parentNode&&U.parentNode.removeChild(U),U=null}}function Eo(T,U){for(var B=T.split("|"),se=B.length;se--;)d.attrHandle[B[se]]=U}function ol(T,U){var B=U&&T,se=B&&T.nodeType===1&&U.nodeType===1&&T.sourceIndex-U.sourceIndex;if(se)return se;if(B){for(;B=B.nextSibling;)if(B===U)return-1}return T?1:-1}function Pf(T){return function(U){var B=U.nodeName.toLowerCase();return B==="input"&&U.type===T}}function Rf(T){return function(U){var B=U.nodeName.toLowerCase();return(B==="input"||B==="button")&&U.type===T}}function al(T){return function(U){return"form"in U?U.parentNode&&U.disabled===!1?"label"in U?"label"in U.parentNode?U.parentNode.disabled===T:U.disabled===T:U.isDisabled===T||U.isDisabled!==!T&&Lf(U)===T:U.disabled===T:"label"in U?U.disabled===T:!1}}function Ri(T){return kn(function(U){return U=+U,kn(function(B,se){for(var H,fe=T([],B.length,U),me=fe.length;me--;)B[H=fe[me]]&&(B[H]=!(se[H]=B[H]))})})}function To(T){return T&&typeof T.getElementsByTagName<"u"&&T}f=At.support={},S=At.isXML=function(T){var U=T&&T.namespaceURI,B=T&&(T.ownerDocument||T).documentElement;return!Ef.test(U||B&&B.nodeName||"HTML")},X=At.setDocument=function(T){var U,B,se=T?T.ownerDocument||T:it;return se==ne||se.nodeType!==9||!se.documentElement||(ne=se,Ge=ne.documentElement,rt=!S(ne),it!=ne&&(B=ne.defaultView)&&B.top!==B&&(B.addEventListener?B.addEventListener("unload",sl,!1):B.attachEvent&&B.attachEvent("onunload",sl)),f.scope=Dn(function(H){return Ge.appendChild(H).appendChild(ne.createElement("div")),typeof H.querySelectorAll<"u"&&!H.querySelectorAll(":scope fieldset div").length}),f.cssHas=Dn(function(){try{return ne.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),f.attributes=Dn(function(H){return H.className="i",!H.getAttribute("className")}),f.getElementsByTagName=Dn(function(H){return H.appendChild(ne.createComment("")),!H.getElementsByTagName("*").length}),f.getElementsByClassName=Br.test(ne.getElementsByClassName),f.getById=Dn(function(H){return Ge.appendChild(H).id=Et,!ne.getElementsByName||!ne.getElementsByName(Et).length}),f.getById?(d.filter.ID=function(H){var fe=H.replace(ii,ri);return function(me){return me.getAttribute("id")===fe}},d.find.ID=function(H,fe){if(typeof fe.getElementById<"u"&&rt){var me=fe.getElementById(H);return me?[me]:[]}}):(d.filter.ID=function(H){var fe=H.replace(ii,ri);return function(me){var Ee=typeof me.getAttributeNode<"u"&&me.getAttributeNode("id");return Ee&&Ee.value===fe}},d.find.ID=function(H,fe){if(typeof fe.getElementById<"u"&&rt){var me,Ee,Pe,Ye=fe.getElementById(H);if(Ye){if(me=Ye.getAttributeNode("id"),me&&me.value===H)return[Ye];for(Pe=fe.getElementsByName(H),Ee=0;Ye=Pe[Ee++];)if(me=Ye.getAttributeNode("id"),me&&me.value===H)return[Ye]}return[]}}),d.find.TAG=f.getElementsByTagName?function(H,fe){if(typeof fe.getElementsByTagName<"u")return fe.getElementsByTagName(H);if(f.qsa)return fe.querySelectorAll(H)}:function(H,fe){var me,Ee=[],Pe=0,Ye=fe.getElementsByTagName(H);if(H==="*"){for(;me=Ye[Pe++];)me.nodeType===1&&Ee.push(me);return Ee}return Ye},d.find.CLASS=f.getElementsByClassName&&function(H,fe){if(typeof fe.getElementsByClassName<"u"&&rt)return fe.getElementsByClassName(H)},Xt=[],ke=[],(f.qsa=Br.test(ne.querySelectorAll))&&(Dn(function(H){var fe;Ge.appendChild(H).innerHTML="<a id='"+Et+"'></a><select id='"+Et+"-\r\\' msallowcapture=''><option selected=''></option></select>",H.querySelectorAll("[msallowcapture^='']").length&&ke.push("[*^$]="+St+`*(?:''|"")`),H.querySelectorAll("[selected]").length||ke.push("\\["+St+"*(?:value|"+So+")"),H.querySelectorAll("[id~="+Et+"-]").length||ke.push("~="),fe=ne.createElement("input"),fe.setAttribute("name",""),H.appendChild(fe),H.querySelectorAll("[name='']").length||ke.push("\\["+St+"*name"+St+"*="+St+`*(?:''|"")`),H.querySelectorAll(":checked").length||ke.push(":checked"),H.querySelectorAll("a#"+Et+"+*").length||ke.push(".#.+[+~]"),H.querySelectorAll("\\\f"),ke.push("[\\r\\n\\f]")}),Dn(function(H){H.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var fe=ne.createElement("input");fe.setAttribute("type","hidden"),H.appendChild(fe).setAttribute("name","D"),H.querySelectorAll("[name=d]").length&&ke.push("name"+St+"*[*^$|!~]?="),H.querySelectorAll(":enabled").length!==2&&ke.push(":enabled",":disabled"),Ge.appendChild(H).disabled=!0,H.querySelectorAll(":disabled").length!==2&&ke.push(":enabled",":disabled"),H.querySelectorAll("*,:x"),ke.push(",.*:")})),(f.matchesSelector=Br.test(qt=Ge.matches||Ge.webkitMatchesSelector||Ge.mozMatchesSelector||Ge.oMatchesSelector||Ge.msMatchesSelector))&&Dn(function(H){f.disconnectedMatch=qt.call(H,"*"),qt.call(H,"[s!='']:x"),Xt.push("!=",bo)}),f.cssHas||ke.push(":has"),ke=ke.length&&new RegExp(ke.join("|")),Xt=Xt.length&&new RegExp(Xt.join("|")),U=Br.test(Ge.compareDocumentPosition),Mn=U||Br.test(Ge.contains)?function(H,fe){var me=H.nodeType===9&&H.documentElement||H,Ee=fe&&fe.parentNode;return H===Ee||!!(Ee&&Ee.nodeType===1&&(me.contains?me.contains(Ee):H.compareDocumentPosition&&H.compareDocumentPosition(Ee)&16))}:function(H,fe){if(fe){for(;fe=fe.parentNode;)if(fe===H)return!0}return!1},Ai=U?function(H,fe){if(H===fe)return pe=!0,0;var me=!H.compareDocumentPosition-!fe.compareDocumentPosition;return me||(me=(H.ownerDocument||H)==(fe.ownerDocument||fe)?H.compareDocumentPosition(fe):1,me&1||!f.sortDetached&&fe.compareDocumentPosition(H)===me?H==ne||H.ownerDocument==it&&Mn(it,H)?-1:fe==ne||fe.ownerDocument==it&&Mn(it,fe)?1:Z?Li(Z,H)-Li(Z,fe):0:me&4?-1:1)}:function(H,fe){if(H===fe)return pe=!0,0;var me,Ee=0,Pe=H.parentNode,Ye=fe.parentNode,Xe=[H],Ze=[fe];if(!Pe||!Ye)return H==ne?-1:fe==ne?1:Pe?-1:Ye?1:Z?Li(Z,H)-Li(Z,fe):0;if(Pe===Ye)return ol(H,fe);for(me=H;me=me.parentNode;)Xe.unshift(me);for(me=fe;me=me.parentNode;)Ze.unshift(me);for(;Xe[Ee]===Ze[Ee];)Ee++;return Ee?ol(Xe[Ee],Ze[Ee]):Xe[Ee]==it?-1:Ze[Ee]==it?1:0}),ne},At.matches=function(T,U){return At(T,null,null,U)},At.matchesSelector=function(T,U){if(X(T),f.matchesSelector&&rt&&!Sn[U+" "]&&(!Xt||!Xt.test(U))&&(!ke||!ke.test(U)))try{var B=qt.call(T,U);if(B||f.disconnectedMatch||T.document&&T.document.nodeType!==11)return B}catch{Sn(U,!0)}return At(U,ne,null,[T]).length>0},At.contains=function(T,U){return(T.ownerDocument||T)!=ne&&X(T),Mn(T,U)},At.attr=function(T,U){(T.ownerDocument||T)!=ne&&X(T);var B=d.attrHandle[U.toLowerCase()],se=B&&Ci.call(d.attrHandle,U.toLowerCase())?B(T,U,!rt):void 0;return se!==void 0?se:f.attributes||!rt?T.getAttribute(U):(se=T.getAttributeNode(U))&&se.specified?se.value:null},At.escape=function(T){return(T+"").replace(il,rl)},At.error=function(T){throw new Error("Syntax error, unrecognized expression: "+T)},At.uniqueSort=function(T){var U,B=[],se=0,H=0;if(pe=!f.detectDuplicates,Z=!f.sortStable&&T.slice(0),T.sort(Ai),pe){for(;U=T[H++];)U===T[H]&&(se=B.push(H));for(;se--;)T.splice(B[se],1)}return Z=null,T},x=At.getText=function(T){var U,B="",se=0,H=T.nodeType;if(H){if(H===1||H===9||H===11){if(typeof T.textContent=="string")return T.textContent;for(T=T.firstChild;T;T=T.nextSibling)B+=x(T)}else if(H===3||H===4)return T.nodeValue}else for(;U=T[se++];)B+=x(U);return B},d=At.selectors={cacheLength:50,createPseudo:kn,match:_s,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(T){return T[1]=T[1].replace(ii,ri),T[3]=(T[3]||T[4]||T[5]||"").replace(ii,ri),T[2]==="~="&&(T[3]=" "+T[3]+" "),T.slice(0,4)},CHILD:function(T){return T[1]=T[1].toLowerCase(),T[1].slice(0,3)==="nth"?(T[3]||At.error(T[0]),T[4]=+(T[4]?T[5]+(T[6]||1):2*(T[3]==="even"||T[3]==="odd")),T[5]=+(T[7]+T[8]||T[3]==="odd")):T[3]&&At.error(T[0]),T},PSEUDO:function(T){var U,B=!T[6]&&T[2];return _s.CHILD.test(T[0])?null:(T[3]?T[2]=T[4]||T[5]||"":B&&bf.test(B)&&(U=E(B,!0))&&(U=B.indexOf(")",B.length-U)-B.length)&&(T[0]=T[0].slice(0,U),T[2]=B.slice(0,U)),T.slice(0,3))}},filter:{TAG:function(T){var U=T.replace(ii,ri).toLowerCase();return T==="*"?function(){return!0}:function(B){return B.nodeName&&B.nodeName.toLowerCase()===U}},CLASS:function(T){var U=Ft[T+" "];return U||(U=new RegExp("(^|"+St+")"+T+"("+St+"|$)"))&&Ft(T,function(B){return U.test(typeof B.className=="string"&&B.className||typeof B.getAttribute<"u"&&B.getAttribute("class")||"")})},ATTR:function(T,U,B){return function(se){var H=At.attr(se,T);return H==null?U==="!=":U?(H+="",U==="="?H===B:U==="!="?H!==B:U==="^="?B&&H.indexOf(B)===0:U==="*="?B&&H.indexOf(B)>-1:U==="$="?B&&H.slice(-B.length)===B:U==="~="?(" "+H.replace(yf," ")+" ").indexOf(B)>-1:U==="|="?H===B||H.slice(0,B.length+1)===B+"-":!1):!0}},CHILD:function(T,U,B,se,H){var fe=T.slice(0,3)!=="nth",me=T.slice(-4)!=="last",Ee=U==="of-type";return se===1&&H===0?function(Pe){return!!Pe.parentNode}:function(Pe,Ye,Xe){var Ze,ht,Ct,Je,$t,sn,bn=fe!==me?"nextSibling":"previousSibling",Ut=Pe.parentNode,kr=Ee&&Pe.nodeName.toLowerCase(),Hr=!Xe&&!Ee,wn=!1;if(Ut){if(fe){for(;bn;){for(Je=Pe;Je=Je[bn];)if(Ee?Je.nodeName.toLowerCase()===kr:Je.nodeType===1)return!1;sn=bn=T==="only"&&!sn&&"nextSibling"}return!0}if(sn=[me?Ut.firstChild:Ut.lastChild],me&&Hr){for(Je=Ut,Ct=Je[Et]||(Je[Et]={}),ht=Ct[Je.uniqueID]||(Ct[Je.uniqueID]={}),Ze=ht[T]||[],$t=Ze[0]===pn&&Ze[1],wn=$t&&Ze[2],Je=$t&&Ut.childNodes[$t];Je=++$t&&Je&&Je[bn]||(wn=$t=0)||sn.pop();)if(Je.nodeType===1&&++wn&&Je===Pe){ht[T]=[pn,$t,wn];break}}else if(Hr&&(Je=Pe,Ct=Je[Et]||(Je[Et]={}),ht=Ct[Je.uniqueID]||(Ct[Je.uniqueID]={}),Ze=ht[T]||[],$t=Ze[0]===pn&&Ze[1],wn=$t),wn===!1)for(;(Je=++$t&&Je&&Je[bn]||(wn=$t=0)||sn.pop())&&!((Ee?Je.nodeName.toLowerCase()===kr:Je.nodeType===1)&&++wn&&(Hr&&(Ct=Je[Et]||(Je[Et]={}),ht=Ct[Je.uniqueID]||(Ct[Je.uniqueID]={}),ht[T]=[pn,wn]),Je===Pe)););return wn-=H,wn===se||wn%se===0&&wn/se>=0}}},PSEUDO:function(T,U){var B,se=d.pseudos[T]||d.setFilters[T.toLowerCase()]||At.error("unsupported pseudo: "+T);return se[Et]?se(U):se.length>1?(B=[T,T,"",U],d.setFilters.hasOwnProperty(T.toLowerCase())?kn(function(H,fe){for(var me,Ee=se(H,U),Pe=Ee.length;Pe--;)me=Li(H,Ee[Pe]),H[me]=!(fe[me]=Ee[Pe])}):function(H){return se(H,0,B)}):se}},pseudos:{not:kn(function(T){var U=[],B=[],se=F(T.replace(gs,"$1"));return se[Et]?kn(function(H,fe,me,Ee){for(var Pe,Ye=se(H,null,Ee,[]),Xe=H.length;Xe--;)(Pe=Ye[Xe])&&(H[Xe]=!(fe[Xe]=Pe))}):function(H,fe,me){return U[0]=H,se(U,null,me,B),U[0]=null,!B.pop()}}),has:kn(function(T){return function(U){return At(T,U).length>0}}),contains:kn(function(T){return T=T.replace(ii,ri),function(U){return(U.textContent||x(U)).indexOf(T)>-1}}),lang:kn(function(T){return wf.test(T||"")||At.error("unsupported lang: "+T),T=T.replace(ii,ri).toLowerCase(),function(U){var B;do if(B=rt?U.lang:U.getAttribute("xml:lang")||U.getAttribute("lang"))return B=B.toLowerCase(),B===T||B.indexOf(T+"-")===0;while((U=U.parentNode)&&U.nodeType===1);return!1}}),target:function(T){var U=s.location&&s.location.hash;return U&&U.slice(1)===T.id},root:function(T){return T===Ge},focus:function(T){return T===ne.activeElement&&(!ne.hasFocus||ne.hasFocus())&&!!(T.type||T.href||~T.tabIndex)},enabled:al(!1),disabled:al(!0),checked:function(T){var U=T.nodeName.toLowerCase();return U==="input"&&!!T.checked||U==="option"&&!!T.selected},selected:function(T){return T.parentNode&&T.parentNode.selectedIndex,T.selected===!0},empty:function(T){for(T=T.firstChild;T;T=T.nextSibling)if(T.nodeType<6)return!1;return!0},parent:function(T){return!d.pseudos.empty(T)},header:function(T){return Af.test(T.nodeName)},input:function(T){return Tf.test(T.nodeName)},button:function(T){var U=T.nodeName.toLowerCase();return U==="input"&&T.type==="button"||U==="button"},text:function(T){var U;return T.nodeName.toLowerCase()==="input"&&T.type==="text"&&((U=T.getAttribute("type"))==null||U.toLowerCase()==="text")},first:Ri(function(){return[0]}),last:Ri(function(T,U){return[U-1]}),eq:Ri(function(T,U,B){return[B<0?B+U:B]}),even:Ri(function(T,U){for(var B=0;B<U;B+=2)T.push(B);return T}),odd:Ri(function(T,U){for(var B=1;B<U;B+=2)T.push(B);return T}),lt:Ri(function(T,U,B){for(var se=B<0?B+U:B>U?U:B;--se>=0;)T.push(se);return T}),gt:Ri(function(T,U,B){for(var se=B<0?B+U:B;++se<U;)T.push(se);return T})}},d.pseudos.nth=d.pseudos.eq;for(a in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[a]=Pf(a);for(a in{submit:!0,reset:!0})d.pseudos[a]=Rf(a);function ll(){}ll.prototype=d.filters=d.pseudos,d.setFilters=new ll,E=At.tokenize=function(T,U){var B,se,H,fe,me,Ee,Pe,Ye=zr[T+" "];if(Ye)return U?0:Ye.slice(0);for(me=T,Ee=[],Pe=d.preFilter;me;){(!B||(se=Mf.exec(me)))&&(se&&(me=me.slice(se[0].length)||me),Ee.push(H=[])),B=!1,(se=nl.exec(me))&&(B=se.shift(),H.push({value:B,type:se[0].replace(gs," ")}),me=me.slice(B.length));for(fe in d.filter)(se=_s[fe].exec(me))&&(!Pe[fe]||(se=Pe[fe](se)))&&(B=se.shift(),H.push({value:B,type:fe,matches:se}),me=me.slice(B.length));if(!B)break}return U?me.length:me?At.error(T):zr(T,Ee).slice(0)};function xs(T){for(var U=0,B=T.length,se="";U<B;U++)se+=T[U].value;return se}function ys(T,U,B){var se=U.dir,H=U.next,fe=H||se,me=B&&fe==="parentNode",Ee=_t++;return U.first?function(Pe,Ye,Xe){for(;Pe=Pe[se];)if(Pe.nodeType===1||me)return T(Pe,Ye,Xe);return!1}:function(Pe,Ye,Xe){var Ze,ht,Ct,Je=[pn,Ee];if(Xe){for(;Pe=Pe[se];)if((Pe.nodeType===1||me)&&T(Pe,Ye,Xe))return!0}else for(;Pe=Pe[se];)if(Pe.nodeType===1||me)if(Ct=Pe[Et]||(Pe[Et]={}),ht=Ct[Pe.uniqueID]||(Ct[Pe.uniqueID]={}),H&&H===Pe.nodeName.toLowerCase())Pe=Pe[se]||Pe;else{if((Ze=ht[fe])&&Ze[0]===pn&&Ze[1]===Ee)return Je[2]=Ze[2];if(ht[fe]=Je,Je[2]=T(Pe,Ye,Xe))return!0}return!1}}function Ao(T){return T.length>1?function(U,B,se){for(var H=T.length;H--;)if(!T[H](U,B,se))return!1;return!0}:T[0]}function Df(T,U,B){for(var se=0,H=U.length;se<H;se++)At(T,U[se],B);return B}function Ms(T,U,B,se,H){for(var fe,me=[],Ee=0,Pe=T.length,Ye=U!=null;Ee<Pe;Ee++)(fe=T[Ee])&&(!B||B(fe,se,H))&&(me.push(fe),Ye&&U.push(Ee));return me}function Co(T,U,B,se,H,fe){return se&&!se[Et]&&(se=Co(se)),H&&!H[Et]&&(H=Co(H,fe)),kn(function(me,Ee,Pe,Ye){var Xe,Ze,ht,Ct=[],Je=[],$t=Ee.length,sn=me||Df(U||"*",Pe.nodeType?[Pe]:Pe,[]),bn=T&&(me||!U)?Ms(sn,Ct,T,Pe,Ye):sn,Ut=B?H||(me?T:$t||se)?[]:Ee:bn;if(B&&B(bn,Ut,Pe,Ye),se)for(Xe=Ms(Ut,Je),se(Xe,[],Pe,Ye),Ze=Xe.length;Ze--;)(ht=Xe[Ze])&&(Ut[Je[Ze]]=!(bn[Je[Ze]]=ht));if(me){if(H||T){if(H){for(Xe=[],Ze=Ut.length;Ze--;)(ht=Ut[Ze])&&Xe.push(bn[Ze]=ht);H(null,Ut=[],Xe,Ye)}for(Ze=Ut.length;Ze--;)(ht=Ut[Ze])&&(Xe=H?Li(me,ht):Ct[Ze])>-1&&(me[Xe]=!(Ee[Xe]=ht))}}else Ut=Ms(Ut===Ee?Ut.splice($t,Ut.length):Ut),H?H(null,Ee,Ut,Ye):gi.apply(Ee,Ut)})}function Lo(T){for(var U,B,se,H=T.length,fe=d.relative[T[0].type],me=fe||d.relative[" "],Ee=fe?1:0,Pe=ys(function(Ze){return Ze===U},me,!0),Ye=ys(function(Ze){return Li(U,Ze)>-1},me,!0),Xe=[function(Ze,ht,Ct){var Je=!fe&&(Ct||ht!==G)||((U=ht).nodeType?Pe(Ze,ht,Ct):Ye(Ze,ht,Ct));return U=null,Je}];Ee<H;Ee++)if(B=d.relative[T[Ee].type])Xe=[ys(Ao(Xe),B)];else{if(B=d.filter[T[Ee].type].apply(null,T[Ee].matches),B[Et]){for(se=++Ee;se<H&&!d.relative[T[se].type];se++);return Co(Ee>1&&Ao(Xe),Ee>1&&xs(T.slice(0,Ee-1).concat({value:T[Ee-2].type===" "?"*":""})).replace(gs,"$1"),B,Ee<se&&Lo(T.slice(Ee,se)),se<H&&Lo(T=T.slice(se)),se<H&&xs(T))}Xe.push(B)}return Ao(Xe)}function If(T,U){var B=U.length>0,se=T.length>0,H=function(fe,me,Ee,Pe,Ye){var Xe,Ze,ht,Ct=0,Je="0",$t=fe&&[],sn=[],bn=G,Ut=fe||se&&d.find.TAG("*",Ye),kr=pn+=bn==null?1:Math.random()||.1,Hr=Ut.length;for(Ye&&(G=me==ne||me||Ye);Je!==Hr&&(Xe=Ut[Je])!=null;Je++){if(se&&Xe){for(Ze=0,!me&&Xe.ownerDocument!=ne&&(X(Xe),Ee=!rt);ht=T[Ze++];)if(ht(Xe,me||ne,Ee)){Pe.push(Xe);break}Ye&&(pn=kr)}B&&((Xe=!ht&&Xe)&&Ct--,fe&&$t.push(Xe))}if(Ct+=Je,B&&Je!==Ct){for(Ze=0;ht=U[Ze++];)ht($t,sn,me,Ee);if(fe){if(Ct>0)for(;Je--;)$t[Je]||sn[Je]||(sn[Je]=mi.call(Pe));sn=Ms(sn)}gi.apply(Pe,sn),Ye&&!fe&&sn.length>0&&Ct+U.length>1&&At.uniqueSort(Pe)}return Ye&&(pn=kr,G=bn),$t};return B?kn(H):H}return F=At.compile=function(T,U){var B,se=[],H=[],fe=ms[T+" "];if(!fe){for(U||(U=E(T)),B=U.length;B--;)fe=Lo(U[B]),fe[Et]?se.push(fe):H.push(fe);fe=ms(T,If(H,se)),fe.selector=T}return fe},I=At.select=function(T,U,B,se){var H,fe,me,Ee,Pe,Ye=typeof T=="function"&&T,Xe=!se&&E(T=Ye.selector||T);if(B=B||[],Xe.length===1){if(fe=Xe[0]=Xe[0].slice(0),fe.length>2&&(me=fe[0]).type==="ID"&&U.nodeType===9&&rt&&d.relative[fe[1].type]){if(U=(d.find.ID(me.matches[0].replace(ii,ri),U)||[])[0],U)Ye&&(U=U.parentNode);else return B;T=T.slice(fe.shift().value.length)}for(H=_s.needsContext.test(T)?0:fe.length;H--&&(me=fe[H],!d.relative[Ee=me.type]);)if((Pe=d.find[Ee])&&(se=Pe(me.matches[0].replace(ii,ri),wo.test(fe[0].type)&&To(U.parentNode)||U))){if(fe.splice(H,1),T=se.length&&xs(fe),!T)return gi.apply(B,se),B;break}}return(Ye||F(T,Xe))(se,U,!rt,B,!U||wo.test(T)&&To(U.parentNode)||U),B},f.sortStable=Et.split("").sort(Ai).join("")===Et,f.detectDuplicates=!!pe,X(),f.sortDetached=Dn(function(T){return T.compareDocumentPosition(ne.createElement("fieldset"))&1}),Dn(function(T){return T.innerHTML="<a href='#'></a>",T.firstChild.getAttribute("href")==="#"})||Eo("type|href|height|width",function(T,U,B){if(!B)return T.getAttribute(U,U.toLowerCase()==="type"?1:2)}),(!f.attributes||!Dn(function(T){return T.innerHTML="<input/>",T.firstChild.setAttribute("value",""),T.firstChild.getAttribute("value")===""}))&&Eo("value",function(T,U,B){if(!B&&T.nodeName.toLowerCase()==="input")return T.defaultValue}),Dn(function(T){return T.getAttribute("disabled")==null})||Eo(So,function(T,U,B){var se;if(!B)return T[U]===!0?U.toLowerCase():(se=T.getAttributeNode(U))&&se.specified?se.value:null}),At}(e);u.find=J,u.expr=J.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=J.uniqueSort,u.text=J.getText,u.isXMLDoc=J.isXML,u.contains=J.contains,u.escapeSelector=J.escape;var P=function(s,a,f){for(var d=[],x=f!==void 0;(s=s[a])&&s.nodeType!==9;)if(s.nodeType===1){if(x&&u(s).is(f))break;d.push(s)}return d},z=function(s,a){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==a&&f.push(s);return f},_e=u.expr.match.needsContext;function ue(s,a){return s.nodeName&&s.nodeName.toLowerCase()===a.toLowerCase()}var Y=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function K(s,a,f){return w(a)?u.grep(s,function(d,x){return!!a.call(d,x,d)!==f}):a.nodeType?u.grep(s,function(d){return d===a!==f}):typeof a!="string"?u.grep(s,function(d){return p.call(a,d)>-1!==f}):u.filter(a,s,f)}u.filter=function(s,a,f){var d=a[0];return f&&(s=":not("+s+")"),a.length===1&&d.nodeType===1?u.find.matchesSelector(d,s)?[d]:[]:u.find.matches(s,u.grep(a,function(x){return x.nodeType===1}))},u.fn.extend({find:function(s){var a,f,d=this.length,x=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(a=0;a<d;a++)if(u.contains(x[a],this))return!0}));for(f=this.pushStack([]),a=0;a<d;a++)u.find(s,x[a],f);return d>1?u.uniqueSort(f):f},filter:function(s){return this.pushStack(K(this,s||[],!1))},not:function(s){return this.pushStack(K(this,s||[],!0))},is:function(s){return!!K(this,typeof s=="string"&&_e.test(s)?u(s):s||[],!1).length}});var le,Se=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Me=u.fn.init=function(s,a,f){var d,x;if(!s)return this;if(f=f||le,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Se.exec(s),d&&(d[1]||!a))if(d[1]){if(a=a instanceof u?a[0]:a,u.merge(this,u.parseHTML(d[1],a&&a.nodeType?a.ownerDocument||a:g,!0)),Y.test(d[1])&&u.isPlainObject(a))for(d in a)w(this[d])?this[d](a[d]):this.attr(d,a[d]);return this}else return x=g.getElementById(d[2]),x&&(this[0]=x,this.length=1),this;else return!a||a.jquery?(a||f).find(s):this.constructor(a).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(w(s))return f.ready!==void 0?f.ready(s):s(u)}return u.makeArray(s,this)};Me.prototype=u.fn,le=u(g);var de=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(s){var a=u(s,this),f=a.length;return this.filter(function(){for(var d=0;d<f;d++)if(u.contains(this,a[d]))return!0})},closest:function(s,a){var f,d=0,x=this.length,S=[],E=typeof s!="string"&&u(s);if(!_e.test(s)){for(;d<x;d++)for(f=this[d];f&&f!==a;f=f.parentNode)if(f.nodeType<11&&(E?E.index(f)>-1:f.nodeType===1&&u.find.matchesSelector(f,s))){S.push(f);break}}return this.pushStack(S.length>1?u.uniqueSort(S):S)},index:function(s){return s?typeof s=="string"?p.call(u(s),this[0]):p.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,a){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,a))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function ye(s,a){for(;(s=s[a])&&s.nodeType!==1;);return s}u.each({parent:function(s){var a=s.parentNode;return a&&a.nodeType!==11?a:null},parents:function(s){return P(s,"parentNode")},parentsUntil:function(s,a,f){return P(s,"parentNode",f)},next:function(s){return ye(s,"nextSibling")},prev:function(s){return ye(s,"previousSibling")},nextAll:function(s){return P(s,"nextSibling")},prevAll:function(s){return P(s,"previousSibling")},nextUntil:function(s,a,f){return P(s,"nextSibling",f)},prevUntil:function(s,a,f){return P(s,"previousSibling",f)},siblings:function(s){return z((s.parentNode||{}).firstChild,s)},children:function(s){return z(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(ue(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,a){u.fn[s]=function(f,d){var x=u.map(this,a,f);return s.slice(-5)!=="Until"&&(d=f),d&&typeof d=="string"&&(x=u.filter(d,x)),this.length>1&&(be[s]||u.uniqueSort(x),de.test(s)&&x.reverse()),this.pushStack(x)}});var Ve=/[^\x20\t\r\n\f]+/g;function we(s){var a={};return u.each(s.match(Ve)||[],function(f,d){a[d]=!0}),a}u.Callbacks=function(s){s=typeof s=="string"?we(s):u.extend({},s);var a,f,d,x,S=[],E=[],F=-1,I=function(){for(x=x||s.once,d=a=!0;E.length;F=-1)for(f=E.shift();++F<S.length;)S[F].apply(f[0],f[1])===!1&&s.stopOnFalse&&(F=S.length,f=!1);s.memory||(f=!1),a=!1,x&&(f?S=[]:S="")},G={add:function(){return S&&(f&&!a&&(F=S.length-1,E.push(f)),function Z(pe){u.each(pe,function(X,ne){w(ne)?(!s.unique||!G.has(ne))&&S.push(ne):ne&&ne.length&&L(ne)!=="string"&&Z(ne)})}(arguments),f&&!a&&I()),this},remove:function(){return u.each(arguments,function(Z,pe){for(var X;(X=u.inArray(pe,S,X))>-1;)S.splice(X,1),X<=F&&F--}),this},has:function(Z){return Z?u.inArray(Z,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return x=E=[],S=f="",this},disabled:function(){return!S},lock:function(){return x=E=[],!f&&!a&&(S=f=""),this},locked:function(){return!!x},fireWith:function(Z,pe){return x||(pe=pe||[],pe=[Z,pe.slice?pe.slice():pe],E.push(pe),a||I()),this},fire:function(){return G.fireWith(this,arguments),this},fired:function(){return!!d}};return G};function te(s){return s}function he(s){throw s}function Le(s,a,f,d){var x;try{s&&w(x=s.promise)?x.call(s).done(a).fail(f):s&&w(x=s.then)?x.call(s,a,f):a.apply(void 0,[s].slice(d))}catch(S){f.apply(void 0,[S])}}u.extend({Deferred:function(s){var a=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],f="pending",d={state:function(){return f},always:function(){return x.done(arguments).fail(arguments),this},catch:function(S){return d.then(null,S)},pipe:function(){var S=arguments;return u.Deferred(function(E){u.each(a,function(F,I){var G=w(S[I[4]])&&S[I[4]];x[I[1]](function(){var Z=G&&G.apply(this,arguments);Z&&w(Z.promise)?Z.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[I[0]+"With"](this,G?[Z]:arguments)})}),S=null}).promise()},then:function(S,E,F){var I=0;function G(Z,pe,X,ne){return function(){var Ge=this,rt=arguments,ke=function(){var qt,Mn;if(!(Z<I)){if(qt=X.apply(Ge,rt),qt===pe.promise())throw new TypeError("Thenable self-resolution");Mn=qt&&(typeof qt=="object"||typeof qt=="function")&&qt.then,w(Mn)?ne?Mn.call(qt,G(I,pe,te,ne),G(I,pe,he,ne)):(I++,Mn.call(qt,G(I,pe,te,ne),G(I,pe,he,ne),G(I,pe,te,pe.notifyWith))):(X!==te&&(Ge=void 0,rt=[qt]),(ne||pe.resolveWith)(Ge,rt))}},Xt=ne?ke:function(){try{ke()}catch(qt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(qt,Xt.stackTrace),Z+1>=I&&(X!==he&&(Ge=void 0,rt=[qt]),pe.rejectWith(Ge,rt))}};Z?Xt():(u.Deferred.getStackHook&&(Xt.stackTrace=u.Deferred.getStackHook()),e.setTimeout(Xt))}}return u.Deferred(function(Z){a[0][3].add(G(0,Z,w(F)?F:te,Z.notifyWith)),a[1][3].add(G(0,Z,w(S)?S:te)),a[2][3].add(G(0,Z,w(E)?E:he))}).promise()},promise:function(S){return S!=null?u.extend(S,d):d}},x={};return u.each(a,function(S,E){var F=E[2],I=E[5];d[E[1]]=F.add,I&&F.add(function(){f=I},a[3-S][2].disable,a[3-S][3].disable,a[0][2].lock,a[0][3].lock),F.add(E[3].fire),x[E[0]]=function(){return x[E[0]+"With"](this===x?void 0:this,arguments),this},x[E[0]+"With"]=F.fireWith}),d.promise(x),s&&s.call(x,x),x},when:function(s){var a=arguments.length,f=a,d=Array(f),x=o.call(arguments),S=u.Deferred(),E=function(F){return function(I){d[F]=this,x[F]=arguments.length>1?o.call(arguments):I,--a||S.resolveWith(d,x)}};if(a<=1&&(Le(s,S.done(E(f)).resolve,S.reject,!a),S.state()==="pending"||w(x[f]&&x[f].then)))return S.then();for(;f--;)Le(x[f],E(f),S.reject);return S.promise()}});var Ie=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,a){e.console&&e.console.warn&&s&&Ie.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,a)},u.readyException=function(s){e.setTimeout(function(){throw s})};var Q=u.Deferred();u.fn.ready=function(s){return Q.then(s).catch(function(a){u.readyException(a)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(s!==!0&&--u.readyWait>0)&&Q.resolveWith(g,[u]))}}),u.ready.then=Q.then;function et(){g.removeEventListener("DOMContentLoaded",et),e.removeEventListener("load",et),u.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(u.ready):(g.addEventListener("DOMContentLoaded",et),e.addEventListener("load",et));var We=function(s,a,f,d,x,S,E){var F=0,I=s.length,G=f==null;if(L(f)==="object"){x=!0;for(F in f)We(s,a,F,f[F],!0,S,E)}else if(d!==void 0&&(x=!0,w(d)||(E=!0),G&&(E?(a.call(s,d),a=null):(G=a,a=function(Z,pe,X){return G.call(u(Z),X)})),a))for(;F<I;F++)a(s[F],f,E?d:d.call(s[F],F,a(s[F],f)));return x?s:G?a.call(s):I?a(s[0],f):S},Te=/^-ms-/,Ke=/-([a-z])/g;function xt(s,a){return a.toUpperCase()}function Oe(s){return s.replace(Te,"ms-").replace(Ke,xt)}var at=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function Dt(){this.expando=u.expando+Dt.uid++}Dt.uid=1,Dt.prototype={cache:function(s){var a=s[this.expando];return a||(a={},at(s)&&(s.nodeType?s[this.expando]=a:Object.defineProperty(s,this.expando,{value:a,configurable:!0}))),a},set:function(s,a,f){var d,x=this.cache(s);if(typeof a=="string")x[Oe(a)]=f;else for(d in a)x[Oe(d)]=a[d];return x},get:function(s,a){return a===void 0?this.cache(s):s[this.expando]&&s[this.expando][Oe(a)]},access:function(s,a,f){return a===void 0||a&&typeof a=="string"&&f===void 0?this.get(s,a):(this.set(s,a,f),f!==void 0?f:a)},remove:function(s,a){var f,d=s[this.expando];if(d!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(Oe):(a=Oe(a),a=a in d?[a]:a.match(Ve)||[]),f=a.length;f--;)delete d[a[f]];(a===void 0||u.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var a=s[this.expando];return a!==void 0&&!u.isEmptyObject(a)}};var De=new Dt,gt=new Dt,Bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,yt=/[A-Z]/g;function It(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Bt.test(s)?JSON.parse(s):s}function en(s,a,f){var d;if(f===void 0&&s.nodeType===1)if(d="data-"+a.replace(yt,"-$&").toLowerCase(),f=s.getAttribute(d),typeof f=="string"){try{f=It(f)}catch{}gt.set(s,a,f)}else f=void 0;return f}u.extend({hasData:function(s){return gt.hasData(s)||De.hasData(s)},data:function(s,a,f){return gt.access(s,a,f)},removeData:function(s,a){gt.remove(s,a)},_data:function(s,a,f){return De.access(s,a,f)},_removeData:function(s,a){De.remove(s,a)}}),u.fn.extend({data:function(s,a){var f,d,x,S=this[0],E=S&&S.attributes;if(s===void 0){if(this.length&&(x=gt.get(S),S.nodeType===1&&!De.get(S,"hasDataAttrs"))){for(f=E.length;f--;)E[f]&&(d=E[f].name,d.indexOf("data-")===0&&(d=Oe(d.slice(5)),en(S,d,x[d])));De.set(S,"hasDataAttrs",!0)}return x}return typeof s=="object"?this.each(function(){gt.set(this,s)}):We(this,function(F){var I;if(S&&F===void 0)return I=gt.get(S,s),I!==void 0||(I=en(S,s),I!==void 0)?I:void 0;this.each(function(){gt.set(this,s,F)})},null,a,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){gt.remove(this,s)})}}),u.extend({queue:function(s,a,f){var d;if(s)return a=(a||"fx")+"queue",d=De.get(s,a),f&&(!d||Array.isArray(f)?d=De.access(s,a,u.makeArray(f)):d.push(f)),d||[]},dequeue:function(s,a){a=a||"fx";var f=u.queue(s,a),d=f.length,x=f.shift(),S=u._queueHooks(s,a),E=function(){u.dequeue(s,a)};x==="inprogress"&&(x=f.shift(),d--),x&&(a==="fx"&&f.unshift("inprogress"),delete S.stop,x.call(s,E,S)),!d&&S&&S.empty.fire()},_queueHooks:function(s,a){var f=a+"queueHooks";return De.get(s,f)||De.access(s,f,{empty:u.Callbacks("once memory").add(function(){De.remove(s,[a+"queue",f])})})}}),u.fn.extend({queue:function(s,a){var f=2;return typeof s!="string"&&(a=s,s="fx",f--),arguments.length<f?u.queue(this[0],s):a===void 0?this:this.each(function(){var d=u.queue(this,s,a);u._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,a){var f,d=1,x=u.Deferred(),S=this,E=this.length,F=function(){--d||x.resolveWith(S,[S])};for(typeof s!="string"&&(a=s,s=void 0),s=s||"fx";E--;)f=De.get(S[E],s+"queueHooks"),f&&f.empty&&(d++,f.empty.add(F));return F(),x.promise(a)}});var D=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,A=new RegExp("^(?:([+-])=|)("+D+")([a-z%]*)$","i"),ee=["Top","Right","Bottom","Left"],ge=g.documentElement,xe=function(s){return u.contains(s.ownerDocument,s)},Re={composed:!0};ge.getRootNode&&(xe=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(Re)===s.ownerDocument});var $e=function(s,a){return s=a||s,s.style.display==="none"||s.style.display===""&&xe(s)&&u.css(s,"display")==="none"};function Ne(s,a,f,d){var x,S,E=20,F=d?function(){return d.cur()}:function(){return u.css(s,a,"")},I=F(),G=f&&f[3]||(u.cssNumber[a]?"":"px"),Z=s.nodeType&&(u.cssNumber[a]||G!=="px"&&+I)&&A.exec(u.css(s,a));if(Z&&Z[3]!==G){for(I=I/2,G=G||Z[3],Z=+I||1;E--;)u.style(s,a,Z+G),(1-S)*(1-(S=F()/I||.5))<=0&&(E=0),Z=Z/S;Z=Z*2,u.style(s,a,Z+G),f=f||[]}return f&&(Z=+Z||+I||0,x=f[1]?Z+(f[1]+1)*f[2]:+f[2],d&&(d.unit=G,d.start=Z,d.end=x)),x}var ae={};function He(s){var a,f=s.ownerDocument,d=s.nodeName,x=ae[d];return x||(a=f.body.appendChild(f.createElement(d)),x=u.css(a,"display"),a.parentNode.removeChild(a),x==="none"&&(x="block"),ae[d]=x,x)}function ze(s,a){for(var f,d,x=[],S=0,E=s.length;S<E;S++)d=s[S],d.style&&(f=d.style.display,a?(f==="none"&&(x[S]=De.get(d,"display")||null,x[S]||(d.style.display="")),d.style.display===""&&$e(d)&&(x[S]=He(d))):f!=="none"&&(x[S]="none",De.set(d,"display",f)));for(S=0;S<E;S++)x[S]!=null&&(s[S].style.display=x[S]);return s}u.fn.extend({show:function(){return ze(this,!0)},hide:function(){return ze(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){$e(this)?u(this).show():u(this).hide()})}});var qe=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Be=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=g.createDocumentFragment(),a=s.appendChild(g.createElement("div")),f=g.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),a.appendChild(f),b.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",b.option=!!a.lastChild})();var tt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};tt.tbody=tt.tfoot=tt.colgroup=tt.caption=tt.thead,tt.th=tt.td,b.option||(tt.optgroup=tt.option=[1,"<select multiple='multiple'>","</select>"]);function st(s,a){var f;return typeof s.getElementsByTagName<"u"?f=s.getElementsByTagName(a||"*"):typeof s.querySelectorAll<"u"?f=s.querySelectorAll(a||"*"):f=[],a===void 0||a&&ue(s,a)?u.merge([s],f):f}function Lt(s,a){for(var f=0,d=s.length;f<d;f++)De.set(s[f],"globalEval",!a||De.get(a[f],"globalEval"))}var k=/<|&#?\w+;/;function re(s,a,f,d,x){for(var S,E,F,I,G,Z,pe=a.createDocumentFragment(),X=[],ne=0,Ge=s.length;ne<Ge;ne++)if(S=s[ne],S||S===0)if(L(S)==="object")u.merge(X,S.nodeType?[S]:S);else if(!k.test(S))X.push(a.createTextNode(S));else{for(E=E||pe.appendChild(a.createElement("div")),F=(Ue.exec(S)||["",""])[1].toLowerCase(),I=tt[F]||tt._default,E.innerHTML=I[1]+u.htmlPrefilter(S)+I[2],Z=I[0];Z--;)E=E.lastChild;u.merge(X,E.childNodes),E=pe.firstChild,E.textContent=""}for(pe.textContent="",ne=0;S=X[ne++];){if(d&&u.inArray(S,d)>-1){x&&x.push(S);continue}if(G=xe(S),E=st(pe.appendChild(S),"script"),G&&Lt(E),f)for(Z=0;S=E[Z++];)Be.test(S.type||"")&&f.push(S)}return pe}var ve=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Fe(){return!1}function Tt(s,a){return s===Pt()==(a==="focus")}function Pt(){try{return g.activeElement}catch{}}function Gt(s,a,f,d,x,S){var E,F;if(typeof a=="object"){typeof f!="string"&&(d=d||f,f=void 0);for(F in a)Gt(s,F,f,d,a[F],S);return s}if(d==null&&x==null?(x=f,d=f=void 0):x==null&&(typeof f=="string"?(x=d,d=void 0):(x=d,d=f,f=void 0)),x===!1)x=Fe;else if(!x)return s;return S===1&&(E=x,x=function(I){return u().off(I),E.apply(this,arguments)},x.guid=E.guid||(E.guid=u.guid++)),s.each(function(){u.event.add(this,a,x,d,f)})}u.event={global:{},add:function(s,a,f,d,x){var S,E,F,I,G,Z,pe,X,ne,Ge,rt,ke=De.get(s);if(at(s))for(f.handler&&(S=f,f=S.handler,x=S.selector),x&&u.find.matchesSelector(ge,x),f.guid||(f.guid=u.guid++),(I=ke.events)||(I=ke.events=Object.create(null)),(E=ke.handle)||(E=ke.handle=function(Xt){return typeof u<"u"&&u.event.triggered!==Xt.type?u.event.dispatch.apply(s,arguments):void 0}),a=(a||"").match(Ve)||[""],G=a.length;G--;)F=ve.exec(a[G])||[],ne=rt=F[1],Ge=(F[2]||"").split(".").sort(),ne&&(pe=u.event.special[ne]||{},ne=(x?pe.delegateType:pe.bindType)||ne,pe=u.event.special[ne]||{},Z=u.extend({type:ne,origType:rt,data:d,handler:f,guid:f.guid,selector:x,needsContext:x&&u.expr.match.needsContext.test(x),namespace:Ge.join(".")},S),(X=I[ne])||(X=I[ne]=[],X.delegateCount=0,(!pe.setup||pe.setup.call(s,d,Ge,E)===!1)&&s.addEventListener&&s.addEventListener(ne,E)),pe.add&&(pe.add.call(s,Z),Z.handler.guid||(Z.handler.guid=f.guid)),x?X.splice(X.delegateCount++,0,Z):X.push(Z),u.event.global[ne]=!0)},remove:function(s,a,f,d,x){var S,E,F,I,G,Z,pe,X,ne,Ge,rt,ke=De.hasData(s)&&De.get(s);if(!(!ke||!(I=ke.events))){for(a=(a||"").match(Ve)||[""],G=a.length;G--;){if(F=ve.exec(a[G])||[],ne=rt=F[1],Ge=(F[2]||"").split(".").sort(),!ne){for(ne in I)u.event.remove(s,ne+a[G],f,d,!0);continue}for(pe=u.event.special[ne]||{},ne=(d?pe.delegateType:pe.bindType)||ne,X=I[ne]||[],F=F[2]&&new RegExp("(^|\\.)"+Ge.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=S=X.length;S--;)Z=X[S],(x||rt===Z.origType)&&(!f||f.guid===Z.guid)&&(!F||F.test(Z.namespace))&&(!d||d===Z.selector||d==="**"&&Z.selector)&&(X.splice(S,1),Z.selector&&X.delegateCount--,pe.remove&&pe.remove.call(s,Z));E&&!X.length&&((!pe.teardown||pe.teardown.call(s,Ge,ke.handle)===!1)&&u.removeEvent(s,ne,ke.handle),delete I[ne])}u.isEmptyObject(I)&&De.remove(s,"handle events")}},dispatch:function(s){var a,f,d,x,S,E,F=new Array(arguments.length),I=u.event.fix(s),G=(De.get(this,"events")||Object.create(null))[I.type]||[],Z=u.event.special[I.type]||{};for(F[0]=I,a=1;a<arguments.length;a++)F[a]=arguments[a];if(I.delegateTarget=this,!(Z.preDispatch&&Z.preDispatch.call(this,I)===!1)){for(E=u.event.handlers.call(this,I,G),a=0;(x=E[a++])&&!I.isPropagationStopped();)for(I.currentTarget=x.elem,f=0;(S=x.handlers[f++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||S.namespace===!1||I.rnamespace.test(S.namespace))&&(I.handleObj=S,I.data=S.data,d=((u.event.special[S.origType]||{}).handle||S.handler).apply(x.elem,F),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return Z.postDispatch&&Z.postDispatch.call(this,I),I.result}},handlers:function(s,a){var f,d,x,S,E,F=[],I=a.delegateCount,G=s.target;if(I&&G.nodeType&&!(s.type==="click"&&s.button>=1)){for(;G!==this;G=G.parentNode||this)if(G.nodeType===1&&!(s.type==="click"&&G.disabled===!0)){for(S=[],E={},f=0;f<I;f++)d=a[f],x=d.selector+" ",E[x]===void 0&&(E[x]=d.needsContext?u(x,this).index(G)>-1:u.find(x,this,null,[G]).length),E[x]&&S.push(d);S.length&&F.push({elem:G,handlers:S})}}return G=this,I<a.length&&F.push({elem:G,handlers:a.slice(I)}),F},addProp:function(s,a){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:w(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(f){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var a=this||s;return qe.test(a.type)&&a.click&&ue(a,"input")&&xn(a,"click",Ce),!1},trigger:function(s){var a=this||s;return qe.test(a.type)&&a.click&&ue(a,"input")&&xn(a,"click"),!0},_default:function(s){var a=s.target;return qe.test(a.type)&&a.click&&ue(a,"input")&&De.get(a,"click")||ue(a,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function xn(s,a,f){if(!f){De.get(s,a)===void 0&&u.event.add(s,a,Ce);return}De.set(s,a,!1),u.event.add(s,a,{namespace:!1,handler:function(d){var x,S,E=De.get(this,a);if(d.isTrigger&1&&this[a]){if(E.length)(u.event.special[a]||{}).delegateType&&d.stopPropagation();else if(E=o.call(arguments),De.set(this,a,E),x=f(this,a),this[a](),S=De.get(this,a),E!==S||x?De.set(this,a,!1):S={},E!==S)return d.stopImmediatePropagation(),d.preventDefault(),S&&S.value}else E.length&&(De.set(this,a,{value:u.event.trigger(u.extend(E[0],u.Event.prototype),E.slice(1),this)}),d.stopImmediatePropagation())}})}u.removeEvent=function(s,a,f){s.removeEventListener&&s.removeEventListener(a,f)},u.Event=function(s,a){if(!(this instanceof u.Event))return new u.Event(s,a);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ce:Fe,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,a&&u.extend(this,a),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:Fe,isPropagationStopped:Fe,isImmediatePropagationStopped:Fe,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ce,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ce,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ce,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,a){u.event.special[s]={setup:function(){return xn(this,s,Tt),!1},trigger:function(){return xn(this,s),!0},_default:function(f){return De.get(f.target,s)},delegateType:a}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,a){u.event.special[s]={delegateType:a,bindType:a,handle:function(f){var d,x=this,S=f.relatedTarget,E=f.handleObj;return(!S||S!==x&&!u.contains(x,S))&&(f.type=E.origType,d=E.handler.apply(this,arguments),f.type=a),d}}}),u.fn.extend({on:function(s,a,f,d){return Gt(this,s,a,f,d)},one:function(s,a,f,d){return Gt(this,s,a,f,d,1)},off:function(s,a,f){var d,x;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,u(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(x in s)this.off(x,a,s[x]);return this}return(a===!1||typeof a=="function")&&(f=a,a=void 0),f===!1&&(f=Fe),this.each(function(){u.event.remove(this,s,f,a)})}});var Ot=/<script|<style|<link/i,dn=/checked\s*(?:[^=]|=\s*.checked.)/i,Pn=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function wi(s,a){return ue(s,"table")&&ue(a.nodeType!==11?a:a.firstChild,"tr")&&u(s).children("tbody")[0]||s}function ds(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function ho(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function ps(s,a){var f,d,x,S,E,F,I;if(a.nodeType===1){if(De.hasData(s)&&(S=De.get(s),I=S.events,I)){De.remove(a,"handle events");for(x in I)for(f=0,d=I[x].length;f<d;f++)u.event.add(a,x,I[x][f])}gt.hasData(s)&&(E=gt.access(s),F=u.extend({},E),gt.set(a,F))}}function po(s,a){var f=a.nodeName.toLowerCase();f==="input"&&qe.test(s.type)?a.checked=s.checked:(f==="input"||f==="textarea")&&(a.defaultValue=s.defaultValue)}function C(s,a,f,d){a=c(a);var x,S,E,F,I,G,Z=0,pe=s.length,X=pe-1,ne=a[0],Ge=w(ne);if(Ge||pe>1&&typeof ne=="string"&&!b.checkClone&&dn.test(ne))return s.each(function(rt){var ke=s.eq(rt);Ge&&(a[0]=ne.call(this,rt,ke.html())),C(ke,a,f,d)});if(pe&&(x=re(a,s[0].ownerDocument,!1,s,d),S=x.firstChild,x.childNodes.length===1&&(x=S),S||d)){for(E=u.map(st(x,"script"),ds),F=E.length;Z<pe;Z++)I=x,Z!==X&&(I=u.clone(I,!0,!0),F&&u.merge(E,st(I,"script"))),f.call(s[Z],I,Z);if(F)for(G=E[E.length-1].ownerDocument,u.map(E,ho),Z=0;Z<F;Z++)I=E[Z],Be.test(I.type||"")&&!De.access(I,"globalEval")&&u.contains(G,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?u._evalUrl&&!I.noModule&&u._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},G):R(I.textContent.replace(Pn,""),I,G))}return s}function j(s,a,f){for(var d,x=a?u.filter(a,s):s,S=0;(d=x[S])!=null;S++)!f&&d.nodeType===1&&u.cleanData(st(d)),d.parentNode&&(f&&xe(d)&&Lt(st(d,"script")),d.parentNode.removeChild(d));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,a,f){var d,x,S,E,F=s.cloneNode(!0),I=xe(s);if(!b.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!u.isXMLDoc(s))for(E=st(F),S=st(s),d=0,x=S.length;d<x;d++)po(S[d],E[d]);if(a)if(f)for(S=S||st(s),E=E||st(F),d=0,x=S.length;d<x;d++)ps(S[d],E[d]);else ps(s,F);return E=st(F,"script"),E.length>0&&Lt(E,!I&&st(s,"script")),F},cleanData:function(s){for(var a,f,d,x=u.event.special,S=0;(f=s[S])!==void 0;S++)if(at(f)){if(a=f[De.expando]){if(a.events)for(d in a.events)x[d]?u.event.remove(f,d):u.removeEvent(f,d,a.handle);f[De.expando]=void 0}f[gt.expando]&&(f[gt.expando]=void 0)}}}),u.fn.extend({detach:function(s){return j(this,s,!0)},remove:function(s){return j(this,s)},text:function(s){return We(this,function(a){return a===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,s,arguments.length)},append:function(){return C(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=wi(this,s);a.appendChild(s)}})},prepend:function(){return C(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=wi(this,s);a.insertBefore(s,a.firstChild)}})},before:function(){return C(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return C(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,a=0;(s=this[a])!=null;a++)s.nodeType===1&&(u.cleanData(st(s,!1)),s.textContent="");return this},clone:function(s,a){return s=s??!1,a=a??s,this.map(function(){return u.clone(this,s,a)})},html:function(s){return We(this,function(a){var f=this[0]||{},d=0,x=this.length;if(a===void 0&&f.nodeType===1)return f.innerHTML;if(typeof a=="string"&&!Ot.test(a)&&!tt[(Ue.exec(a)||["",""])[1].toLowerCase()]){a=u.htmlPrefilter(a);try{for(;d<x;d++)f=this[d]||{},f.nodeType===1&&(u.cleanData(st(f,!1)),f.innerHTML=a);f=0}catch{}}f&&this.empty().append(a)},null,s,arguments.length)},replaceWith:function(){var s=[];return C(this,arguments,function(a){var f=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(st(this)),f&&f.replaceChild(a,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,a){u.fn[s]=function(f){for(var d,x=[],S=u(f),E=S.length-1,F=0;F<=E;F++)d=F===E?this:this.clone(!0),u(S[F])[a](d),l.apply(x,d.get());return this.pushStack(x)}});var ie=new RegExp("^("+D+")(?!px)[a-z%]+$","i"),W=/^--/,oe=function(s){var a=s.ownerDocument.defaultView;return(!a||!a.opener)&&(a=e),a.getComputedStyle(s)},je=function(s,a,f){var d,x,S={};for(x in a)S[x]=s.style[x],s.style[x]=a[x];d=f.call(s);for(x in a)s.style[x]=S[x];return d},Qe=new RegExp(ee.join("|"),"i"),nt="[\\x20\\t\\r\\n\\f]",lt=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g");(function(){function s(){if(G){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",G.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ge.appendChild(I).appendChild(G);var Z=e.getComputedStyle(G);f=Z.top!=="1%",F=a(Z.marginLeft)===12,G.style.right="60%",S=a(Z.right)===36,d=a(Z.width)===36,G.style.position="absolute",x=a(G.offsetWidth/3)===12,ge.removeChild(I),G=null}}function a(Z){return Math.round(parseFloat(Z))}var f,d,x,S,E,F,I=g.createElement("div"),G=g.createElement("div");G.style&&(G.style.backgroundClip="content-box",G.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=G.style.backgroundClip==="content-box",u.extend(b,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),S},pixelPosition:function(){return s(),f},reliableMarginLeft:function(){return s(),F},scrollboxSize:function(){return s(),x},reliableTrDimensions:function(){var Z,pe,X,ne;return E==null&&(Z=g.createElement("table"),pe=g.createElement("tr"),X=g.createElement("div"),Z.style.cssText="position:absolute;left:-11111px;border-collapse:separate",pe.style.cssText="border:1px solid",pe.style.height="1px",X.style.height="9px",X.style.display="block",ge.appendChild(Z).appendChild(pe).appendChild(X),ne=e.getComputedStyle(pe),E=parseInt(ne.height,10)+parseInt(ne.borderTopWidth,10)+parseInt(ne.borderBottomWidth,10)===pe.offsetHeight,ge.removeChild(Z)),E}}))})();function ot(s,a,f){var d,x,S,E,F=W.test(a),I=s.style;return f=f||oe(s),f&&(E=f.getPropertyValue(a)||f[a],F&&E&&(E=E.replace(lt,"$1")||void 0),E===""&&!xe(s)&&(E=u.style(s,a)),!b.pixelBoxStyles()&&ie.test(E)&&Qe.test(a)&&(d=I.width,x=I.minWidth,S=I.maxWidth,I.minWidth=I.maxWidth=I.width=E,E=f.width,I.width=d,I.minWidth=x,I.maxWidth=S)),E!==void 0?E+"":E}function ct(s,a){return{get:function(){if(s()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var ut=["Webkit","Moz","ms"],Mt=g.createElement("div").style,Kt={};function yn(s){for(var a=s[0].toUpperCase()+s.slice(1),f=ut.length;f--;)if(s=ut[f]+a,s in Mt)return s}function Fn(s){var a=u.cssProps[s]||Kt[s];return a||(s in Mt?s:Kt[s]=yn(s)||s)}var zt=/^(none|table(?!-c[ea]).+)/,pt={position:"absolute",visibility:"hidden",display:"block"},Xi={letterSpacing:"0",fontWeight:"400"};function kt(s,a,f){var d=A.exec(a);return d?Math.max(0,d[2]-(f||0))+(d[3]||"px"):a}function zn(s,a,f,d,x,S){var E=a==="width"?1:0,F=0,I=0;if(f===(d?"border":"content"))return 0;for(;E<4;E+=2)f==="margin"&&(I+=u.css(s,f+ee[E],!0,x)),d?(f==="content"&&(I-=u.css(s,"padding"+ee[E],!0,x)),f!=="margin"&&(I-=u.css(s,"border"+ee[E]+"Width",!0,x))):(I+=u.css(s,"padding"+ee[E],!0,x),f!=="padding"?I+=u.css(s,"border"+ee[E]+"Width",!0,x):F+=u.css(s,"border"+ee[E]+"Width",!0,x));return!d&&S>=0&&(I+=Math.max(0,Math.ceil(s["offset"+a[0].toUpperCase()+a.slice(1)]-S-I-F-.5))||0),I}function Dr(s,a,f){var d=oe(s),x=!b.boxSizingReliable()||f,S=x&&u.css(s,"boxSizing",!1,d)==="border-box",E=S,F=ot(s,a,d),I="offset"+a[0].toUpperCase()+a.slice(1);if(ie.test(F)){if(!f)return F;F="auto"}return(!b.boxSizingReliable()&&S||!b.reliableTrDimensions()&&ue(s,"tr")||F==="auto"||!parseFloat(F)&&u.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(S=u.css(s,"boxSizing",!1,d)==="border-box",E=I in s,E&&(F=s[I])),F=parseFloat(F)||0,F+zn(s,a,f||(S?"border":"content"),E,d,F)+"px"}u.extend({cssHooks:{opacity:{get:function(s,a){if(a){var f=ot(s,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(s,a,f,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var x,S,E,F=Oe(a),I=W.test(a),G=s.style;if(I||(a=Fn(F)),E=u.cssHooks[a]||u.cssHooks[F],f!==void 0){if(S=typeof f,S==="string"&&(x=A.exec(f))&&x[1]&&(f=Ne(s,a,x),S="number"),f==null||f!==f)return;S==="number"&&!I&&(f+=x&&x[3]||(u.cssNumber[F]?"":"px")),!b.clearCloneStyle&&f===""&&a.indexOf("background")===0&&(G[a]="inherit"),(!E||!("set"in E)||(f=E.set(s,f,d))!==void 0)&&(I?G.setProperty(a,f):G[a]=f)}else return E&&"get"in E&&(x=E.get(s,!1,d))!==void 0?x:G[a]}},css:function(s,a,f,d){var x,S,E,F=Oe(a),I=W.test(a);return I||(a=Fn(F)),E=u.cssHooks[a]||u.cssHooks[F],E&&"get"in E&&(x=E.get(s,!0,f)),x===void 0&&(x=ot(s,a,d)),x==="normal"&&a in Xi&&(x=Xi[a]),f===""||f?(S=parseFloat(x),f===!0||isFinite(S)?S||0:x):x}}),u.each(["height","width"],function(s,a){u.cssHooks[a]={get:function(f,d,x){if(d)return zt.test(u.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?je(f,pt,function(){return Dr(f,a,x)}):Dr(f,a,x)},set:function(f,d,x){var S,E=oe(f),F=!b.scrollboxSize()&&E.position==="absolute",I=F||x,G=I&&u.css(f,"boxSizing",!1,E)==="border-box",Z=x?zn(f,a,x,G,E):0;return G&&F&&(Z-=Math.ceil(f["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(E[a])-zn(f,a,"border",!1,E)-.5)),Z&&(S=A.exec(d))&&(S[3]||"px")!=="px"&&(f.style[a]=d,d=u.css(f,a)),kt(f,d,Z)}}}),u.cssHooks.marginLeft=ct(b.reliableMarginLeft,function(s,a){if(a)return(parseFloat(ot(s,"marginLeft"))||s.getBoundingClientRect().left-je(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,a){u.cssHooks[s+a]={expand:function(f){for(var d=0,x={},S=typeof f=="string"?f.split(" "):[f];d<4;d++)x[s+ee[d]+a]=S[d]||S[d-2]||S[0];return x}},s!=="margin"&&(u.cssHooks[s+a].set=kt)}),u.fn.extend({css:function(s,a){return We(this,function(f,d,x){var S,E,F={},I=0;if(Array.isArray(d)){for(S=oe(f),E=d.length;I<E;I++)F[d[I]]=u.css(f,d[I],!1,S);return F}return x!==void 0?u.style(f,d,x):u.css(f,d)},s,a,arguments.length>1)}});function Vt(s,a,f,d,x){return new Vt.prototype.init(s,a,f,d,x)}u.Tween=Vt,Vt.prototype={constructor:Vt,init:function(s,a,f,d,x,S){this.elem=s,this.prop=f,this.easing=x||u.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=d,this.unit=S||(u.cssNumber[f]?"":"px")},cur:function(){var s=Vt.propHooks[this.prop];return s&&s.get?s.get(this):Vt.propHooks._default.get(this)},run:function(s){var a,f=Vt.propHooks[this.prop];return this.options.duration?this.pos=a=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=a=s,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):Vt.propHooks._default.set(this),this}},Vt.prototype.init.prototype=Vt.prototype,Vt.propHooks={_default:{get:function(s){var a;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(a=u.css(s.elem,s.prop,""),!a||a==="auto"?0:a)},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType===1&&(u.cssHooks[s.prop]||s.elem.style[Fn(s.prop)]!=null)?u.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Vt.propHooks.scrollTop=Vt.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=Vt.prototype.init,u.fx.step={};var $n,Wt,ni=/^(?:toggle|show|hide)$/,Ir=/queueHooks$/;function tn(){Wt&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(tn):e.setTimeout(tn,u.fx.interval),u.fx.tick())}function $i(){return e.setTimeout(function(){$n=void 0}),$n=Date.now()}function Yi(s,a){var f,d=0,x={height:s};for(a=a?1:0;d<4;d+=2-a)f=ee[d],x["margin"+f]=x["padding"+f]=s;return a&&(x.opacity=x.width=s),x}function Ur(s,a,f){for(var d,x=(Bn.tweeners[a]||[]).concat(Bn.tweeners["*"]),S=0,E=x.length;S<E;S++)if(d=x[S].call(f,a,s))return d}function Ku(s,a,f){var d,x,S,E,F,I,G,Z,pe="width"in a||"height"in a,X=this,ne={},Ge=s.style,rt=s.nodeType&&$e(s),ke=De.get(s,"fxshow");f.queue||(E=u._queueHooks(s,"fx"),E.unqueued==null&&(E.unqueued=0,F=E.empty.fire,E.empty.fire=function(){E.unqueued||F()}),E.unqueued++,X.always(function(){X.always(function(){E.unqueued--,u.queue(s,"fx").length||E.empty.fire()})}));for(d in a)if(x=a[d],ni.test(x)){if(delete a[d],S=S||x==="toggle",x===(rt?"hide":"show"))if(x==="show"&&ke&&ke[d]!==void 0)rt=!0;else continue;ne[d]=ke&&ke[d]||u.style(s,d)}if(I=!u.isEmptyObject(a),!(!I&&u.isEmptyObject(ne))){pe&&s.nodeType===1&&(f.overflow=[Ge.overflow,Ge.overflowX,Ge.overflowY],G=ke&&ke.display,G==null&&(G=De.get(s,"display")),Z=u.css(s,"display"),Z==="none"&&(G?Z=G:(ze([s],!0),G=s.style.display||G,Z=u.css(s,"display"),ze([s]))),(Z==="inline"||Z==="inline-block"&&G!=null)&&u.css(s,"float")==="none"&&(I||(X.done(function(){Ge.display=G}),G==null&&(Z=Ge.display,G=Z==="none"?"":Z)),Ge.display="inline-block")),f.overflow&&(Ge.overflow="hidden",X.always(function(){Ge.overflow=f.overflow[0],Ge.overflowX=f.overflow[1],Ge.overflowY=f.overflow[2]})),I=!1;for(d in ne)I||(ke?"hidden"in ke&&(rt=ke.hidden):ke=De.access(s,"fxshow",{display:G}),S&&(ke.hidden=!rt),rt&&ze([s],!0),X.done(function(){rt||ze([s]),De.remove(s,"fxshow");for(d in ne)u.style(s,d,ne[d])})),I=Ur(rt?ke[d]:0,d,X),d in ke||(ke[d]=I.start,rt&&(I.end=I.start,I.start=0))}}function Qu(s,a){var f,d,x,S,E;for(f in s)if(d=Oe(f),x=a[d],S=s[f],Array.isArray(S)&&(x=S[1],S=s[f]=S[0]),f!==d&&(s[d]=S,delete s[f]),E=u.cssHooks[d],E&&"expand"in E){S=E.expand(S),delete s[d];for(f in S)f in s||(s[f]=S[f],a[f]=x)}else a[d]=x}function Bn(s,a,f){var d,x,S=0,E=Bn.prefilters.length,F=u.Deferred().always(function(){delete I.elem}),I=function(){if(x)return!1;for(var pe=$n||$i(),X=Math.max(0,G.startTime+G.duration-pe),ne=X/G.duration||0,Ge=1-ne,rt=0,ke=G.tweens.length;rt<ke;rt++)G.tweens[rt].run(Ge);return F.notifyWith(s,[G,Ge,X]),Ge<1&&ke?X:(ke||F.notifyWith(s,[G,1,0]),F.resolveWith(s,[G]),!1)},G=F.promise({elem:s,props:u.extend({},a),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},f),originalProperties:a,originalOptions:f,startTime:$n||$i(),duration:f.duration,tweens:[],createTween:function(pe,X){var ne=u.Tween(s,G.opts,pe,X,G.opts.specialEasing[pe]||G.opts.easing);return G.tweens.push(ne),ne},stop:function(pe){var X=0,ne=pe?G.tweens.length:0;if(x)return this;for(x=!0;X<ne;X++)G.tweens[X].run(1);return pe?(F.notifyWith(s,[G,1,0]),F.resolveWith(s,[G,pe])):F.rejectWith(s,[G,pe]),this}}),Z=G.props;for(Qu(Z,G.opts.specialEasing);S<E;S++)if(d=Bn.prefilters[S].call(G,s,Z,G.opts),d)return w(d.stop)&&(u._queueHooks(G.elem,G.opts.queue).stop=d.stop.bind(d)),d;return u.map(Z,Ur,G),w(G.opts.start)&&G.opts.start.call(s,G),G.progress(G.opts.progress).done(G.opts.done,G.opts.complete).fail(G.opts.fail).always(G.opts.always),u.fx.timer(u.extend(I,{elem:s,anim:G,queue:G.opts.queue})),G}u.Animation=u.extend(Bn,{tweeners:{"*":[function(s,a){var f=this.createTween(s,a);return Ne(f.elem,s,A.exec(a),f),f}]},tweener:function(s,a){w(s)?(a=s,s=["*"]):s=s.match(Ve);for(var f,d=0,x=s.length;d<x;d++)f=s[d],Bn.tweeners[f]=Bn.tweeners[f]||[],Bn.tweeners[f].unshift(a)},prefilters:[Ku],prefilter:function(s,a){a?Bn.prefilters.unshift(s):Bn.prefilters.push(s)}}),u.speed=function(s,a,f){var d=s&&typeof s=="object"?u.extend({},s):{complete:f||!f&&a||w(s)&&s,duration:s,easing:f&&a||a&&!w(a)&&a};return u.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in u.fx.speeds?d.duration=u.fx.speeds[d.duration]:d.duration=u.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){w(d.old)&&d.old.call(this),d.queue&&u.dequeue(this,d.queue)},d},u.fn.extend({fadeTo:function(s,a,f,d){return this.filter($e).css("opacity",0).show().end().animate({opacity:a},s,f,d)},animate:function(s,a,f,d){var x=u.isEmptyObject(s),S=u.speed(a,f,d),E=function(){var F=Bn(this,u.extend({},s),S);(x||De.get(this,"finish"))&&F.stop(!0)};return E.finish=E,x||S.queue===!1?this.each(E):this.queue(S.queue,E)},stop:function(s,a,f){var d=function(x){var S=x.stop;delete x.stop,S(f)};return typeof s!="string"&&(f=a,a=s,s=void 0),a&&this.queue(s||"fx",[]),this.each(function(){var x=!0,S=s!=null&&s+"queueHooks",E=u.timers,F=De.get(this);if(S)F[S]&&F[S].stop&&d(F[S]);else for(S in F)F[S]&&F[S].stop&&Ir.test(S)&&d(F[S]);for(S=E.length;S--;)E[S].elem===this&&(s==null||E[S].queue===s)&&(E[S].anim.stop(f),x=!1,E.splice(S,1));(x||!f)&&u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var a,f=De.get(this),d=f[s+"queue"],x=f[s+"queueHooks"],S=u.timers,E=d?d.length:0;for(f.finish=!0,u.queue(this,s,[]),x&&x.stop&&x.stop.call(this,!0),a=S.length;a--;)S[a].elem===this&&S[a].queue===s&&(S[a].anim.stop(!0),S.splice(a,1));for(a=0;a<E;a++)d[a]&&d[a].finish&&d[a].finish.call(this);delete f.finish})}}),u.each(["toggle","show","hide"],function(s,a){var f=u.fn[a];u.fn[a]=function(d,x,S){return d==null||typeof d=="boolean"?f.apply(this,arguments):this.animate(Yi(a,!0),d,x,S)}}),u.each({slideDown:Yi("show"),slideUp:Yi("hide"),slideToggle:Yi("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,a){u.fn[s]=function(f,d,x){return this.animate(a,f,d,x)}}),u.timers=[],u.fx.tick=function(){var s,a=0,f=u.timers;for($n=Date.now();a<f.length;a++)s=f[a],!s()&&f[a]===s&&f.splice(a--,1);f.length||u.fx.stop(),$n=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Wt||(Wt=!0,tn())},u.fx.stop=function(){Wt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,a){return s=u.fx&&u.fx.speeds[s]||s,a=a||"fx",this.queue(a,function(f,d){var x=e.setTimeout(f,s);d.stop=function(){e.clearTimeout(x)}})},function(){var s=g.createElement("input"),a=g.createElement("select"),f=a.appendChild(g.createElement("option"));s.type="checkbox",b.checkOn=s.value!=="",b.optSelected=f.selected,s=g.createElement("input"),s.value="t",s.type="radio",b.radioValue=s.value==="t"}();var Wa,Nr=u.expr.attrHandle;u.fn.extend({attr:function(s,a){return We(this,u.attr,s,a,arguments.length>1)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,a,f){var d,x,S=s.nodeType;if(!(S===3||S===8||S===2)){if(typeof s.getAttribute>"u")return u.prop(s,a,f);if((S!==1||!u.isXMLDoc(s))&&(x=u.attrHooks[a.toLowerCase()]||(u.expr.match.bool.test(a)?Wa:void 0)),f!==void 0){if(f===null){u.removeAttr(s,a);return}return x&&"set"in x&&(d=x.set(s,f,a))!==void 0?d:(s.setAttribute(a,f+""),f)}return x&&"get"in x&&(d=x.get(s,a))!==null?d:(d=u.find.attr(s,a),d??void 0)}},attrHooks:{type:{set:function(s,a){if(!b.radioValue&&a==="radio"&&ue(s,"input")){var f=s.value;return s.setAttribute("type",a),f&&(s.value=f),a}}}},removeAttr:function(s,a){var f,d=0,x=a&&a.match(Ve);if(x&&s.nodeType===1)for(;f=x[d++];)s.removeAttribute(f)}}),Wa={set:function(s,a,f){return a===!1?u.removeAttr(s,f):s.setAttribute(f,f),f}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,a){var f=Nr[a]||u.find.attr;Nr[a]=function(d,x,S){var E,F,I=x.toLowerCase();return S||(F=Nr[I],Nr[I]=E,E=f(d,x,S)!=null?I:null,Nr[I]=F),E}});var ef=/^(?:input|select|textarea|button)$/i,tf=/^(?:a|area)$/i;u.fn.extend({prop:function(s,a){return We(this,u.prop,s,a,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,a,f){var d,x,S=s.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!u.isXMLDoc(s))&&(a=u.propFix[a]||a,x=u.propHooks[a]),f!==void 0?x&&"set"in x&&(d=x.set(s,f,a))!==void 0?d:s[a]=f:x&&"get"in x&&(d=x.get(s,a))!==null?d:s[a]},propHooks:{tabIndex:{get:function(s){var a=u.find.attr(s,"tabindex");return a?parseInt(a,10):ef.test(s.nodeName)||tf.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(u.propHooks.selected={get:function(s){var a=s.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(s){var a=s.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function Ei(s){var a=s.match(Ve)||[];return a.join(" ")}function Ti(s){return s.getAttribute&&s.getAttribute("class")||""}function mo(s){return Array.isArray(s)?s:typeof s=="string"?s.match(Ve)||[]:[]}u.fn.extend({addClass:function(s){var a,f,d,x,S,E;return w(s)?this.each(function(F){u(this).addClass(s.call(this,F,Ti(this)))}):(a=mo(s),a.length?this.each(function(){if(d=Ti(this),f=this.nodeType===1&&" "+Ei(d)+" ",f){for(S=0;S<a.length;S++)x=a[S],f.indexOf(" "+x+" ")<0&&(f+=x+" ");E=Ei(f),d!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(s){var a,f,d,x,S,E;return w(s)?this.each(function(F){u(this).removeClass(s.call(this,F,Ti(this)))}):arguments.length?(a=mo(s),a.length?this.each(function(){if(d=Ti(this),f=this.nodeType===1&&" "+Ei(d)+" ",f){for(S=0;S<a.length;S++)for(x=a[S];f.indexOf(" "+x+" ")>-1;)f=f.replace(" "+x+" "," ");E=Ei(f),d!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(s,a){var f,d,x,S,E=typeof s,F=E==="string"||Array.isArray(s);return w(s)?this.each(function(I){u(this).toggleClass(s.call(this,I,Ti(this),a),a)}):typeof a=="boolean"&&F?a?this.addClass(s):this.removeClass(s):(f=mo(s),this.each(function(){if(F)for(S=u(this),x=0;x<f.length;x++)d=f[x],S.hasClass(d)?S.removeClass(d):S.addClass(d);else(s===void 0||E==="boolean")&&(d=Ti(this),d&&De.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":De.get(this,"__className__")||""))}))},hasClass:function(s){var a,f,d=0;for(a=" "+s+" ";f=this[d++];)if(f.nodeType===1&&(" "+Ei(Ti(f))+" ").indexOf(a)>-1)return!0;return!1}});var nf=/\r/g;u.fn.extend({val:function(s){var a,f,d,x=this[0];return arguments.length?(d=w(s),this.each(function(S){var E;this.nodeType===1&&(d?E=s.call(this,S,u(this).val()):E=s,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=u.map(E,function(F){return F==null?"":F+""})),a=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,E,"value")===void 0)&&(this.value=E))})):x?(a=u.valHooks[x.type]||u.valHooks[x.nodeName.toLowerCase()],a&&"get"in a&&(f=a.get(x,"value"))!==void 0?f:(f=x.value,typeof f=="string"?f.replace(nf,""):f??"")):void 0}}),u.extend({valHooks:{option:{get:function(s){var a=u.find.attr(s,"value");return a??Ei(u.text(s))}},select:{get:function(s){var a,f,d,x=s.options,S=s.selectedIndex,E=s.type==="select-one",F=E?null:[],I=E?S+1:x.length;for(S<0?d=I:d=E?S:0;d<I;d++)if(f=x[d],(f.selected||d===S)&&!f.disabled&&(!f.parentNode.disabled||!ue(f.parentNode,"optgroup"))){if(a=u(f).val(),E)return a;F.push(a)}return F},set:function(s,a){for(var f,d,x=s.options,S=u.makeArray(a),E=x.length;E--;)d=x[E],(d.selected=u.inArray(u.valHooks.option.get(d),S)>-1)&&(f=!0);return f||(s.selectedIndex=-1),S}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,a){if(Array.isArray(a))return s.checked=u.inArray(u(s).val(),a)>-1}},b.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})}),b.focusin="onfocusin"in e;var qa=/^(?:focusinfocus|focusoutblur)$/,ja=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,a,f,d){var x,S,E,F,I,G,Z,pe,X=[f||g],ne=_.call(s,"type")?s.type:s,Ge=_.call(s,"namespace")?s.namespace.split("."):[];if(S=pe=E=f=f||g,!(f.nodeType===3||f.nodeType===8)&&!qa.test(ne+u.event.triggered)&&(ne.indexOf(".")>-1&&(Ge=ne.split("."),ne=Ge.shift(),Ge.sort()),I=ne.indexOf(":")<0&&"on"+ne,s=s[u.expando]?s:new u.Event(ne,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=Ge.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+Ge.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=f),a=a==null?[s]:u.makeArray(a,[s]),Z=u.event.special[ne]||{},!(!d&&Z.trigger&&Z.trigger.apply(f,a)===!1))){if(!d&&!Z.noBubble&&!M(f)){for(F=Z.delegateType||ne,qa.test(F+ne)||(S=S.parentNode);S;S=S.parentNode)X.push(S),E=S;E===(f.ownerDocument||g)&&X.push(E.defaultView||E.parentWindow||e)}for(x=0;(S=X[x++])&&!s.isPropagationStopped();)pe=S,s.type=x>1?F:Z.bindType||ne,G=(De.get(S,"events")||Object.create(null))[s.type]&&De.get(S,"handle"),G&&G.apply(S,a),G=I&&S[I],G&&G.apply&&at(S)&&(s.result=G.apply(S,a),s.result===!1&&s.preventDefault());return s.type=ne,!d&&!s.isDefaultPrevented()&&(!Z._default||Z._default.apply(X.pop(),a)===!1)&&at(f)&&I&&w(f[ne])&&!M(f)&&(E=f[I],E&&(f[I]=null),u.event.triggered=ne,s.isPropagationStopped()&&pe.addEventListener(ne,ja),f[ne](),s.isPropagationStopped()&&pe.removeEventListener(ne,ja),u.event.triggered=void 0,E&&(f[I]=E)),s.result}},simulate:function(s,a,f){var d=u.extend(new u.Event,f,{type:s,isSimulated:!0});u.event.trigger(d,null,a)}}),u.fn.extend({trigger:function(s,a){return this.each(function(){u.event.trigger(s,a,this)})},triggerHandler:function(s,a){var f=this[0];if(f)return u.event.trigger(s,a,f,!0)}}),b.focusin||u.each({focus:"focusin",blur:"focusout"},function(s,a){var f=function(d){u.event.simulate(a,d.target,u.event.fix(d))};u.event.special[a]={setup:function(){var d=this.ownerDocument||this.document||this,x=De.access(d,a);x||d.addEventListener(s,f,!0),De.access(d,a,(x||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,x=De.access(d,a)-1;x?De.access(d,a,x):(d.removeEventListener(s,f,!0),De.remove(d,a))}}});var Or=e.location,Xa={guid:Date.now()},go=/\?/;u.parseXML=function(s){var a,f;if(!s||typeof s!="string")return null;try{a=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return f=a&&a.getElementsByTagName("parsererror")[0],(!a||f)&&u.error("Invalid XML: "+(f?u.map(f.childNodes,function(d){return d.textContent}).join(`
`):s)),a};var rf=/\[\]$/,$a=/\r?\n/g,sf=/^(?:submit|button|image|reset|file)$/i,of=/^(?:input|select|textarea|keygen)/i;function _o(s,a,f,d){var x;if(Array.isArray(a))u.each(a,function(S,E){f||rf.test(s)?d(s,E):_o(s+"["+(typeof E=="object"&&E!=null?S:"")+"]",E,f,d)});else if(!f&&L(a)==="object")for(x in a)_o(s+"["+x+"]",a[x],f,d);else d(s,a)}u.param=function(s,a){var f,d=[],x=function(S,E){var F=w(E)?E():E;d[d.length]=encodeURIComponent(S)+"="+encodeURIComponent(F??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){x(this.name,this.value)});else for(f in s)_o(f,s[f],a,x);return d.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&of.test(this.nodeName)&&!sf.test(s)&&(this.checked||!qe.test(s))}).map(function(s,a){var f=u(this).val();return f==null?null:Array.isArray(f)?u.map(f,function(d){return{name:a.name,value:d.replace($a,`\r
`)}}):{name:a.name,value:f.replace($a,`\r
`)}}).get()}});var af=/%20/g,lf=/#.*$/,cf=/([?&])_=[^&]*/,uf=/^(.*?):[ \t]*([^\r\n]*)$/mg,ff=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,hf=/^(?:GET|HEAD)$/,df=/^\/\//,Ya={},vo={},Ja="*/".concat("*"),xo=g.createElement("a");xo.href=Or.href;function Za(s){return function(a,f){typeof a!="string"&&(f=a,a="*");var d,x=0,S=a.toLowerCase().match(Ve)||[];if(w(f))for(;d=S[x++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(f)):(s[d]=s[d]||[]).push(f)}}function Ka(s,a,f,d){var x={},S=s===vo;function E(F){var I;return x[F]=!0,u.each(s[F]||[],function(G,Z){var pe=Z(a,f,d);if(typeof pe=="string"&&!S&&!x[pe])return a.dataTypes.unshift(pe),E(pe),!1;if(S)return!(I=pe)}),I}return E(a.dataTypes[0])||!x["*"]&&E("*")}function yo(s,a){var f,d,x=u.ajaxSettings.flatOptions||{};for(f in a)a[f]!==void 0&&((x[f]?s:d||(d={}))[f]=a[f]);return d&&u.extend(!0,s,d),s}function pf(s,a,f){for(var d,x,S,E,F=s.contents,I=s.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=s.mimeType||a.getResponseHeader("Content-Type"));if(d){for(x in F)if(F[x]&&F[x].test(d)){I.unshift(x);break}}if(I[0]in f)S=I[0];else{for(x in f){if(!I[0]||s.converters[x+" "+I[0]]){S=x;break}E||(E=x)}S=S||E}if(S)return S!==I[0]&&I.unshift(S),f[S]}function mf(s,a,f,d){var x,S,E,F,I,G={},Z=s.dataTypes.slice();if(Z[1])for(E in s.converters)G[E.toLowerCase()]=s.converters[E];for(S=Z.shift();S;)if(s.responseFields[S]&&(f[s.responseFields[S]]=a),!I&&d&&s.dataFilter&&(a=s.dataFilter(a,s.dataType)),I=S,S=Z.shift(),S){if(S==="*")S=I;else if(I!=="*"&&I!==S){if(E=G[I+" "+S]||G["* "+S],!E){for(x in G)if(F=x.split(" "),F[1]===S&&(E=G[I+" "+F[0]]||G["* "+F[0]],E)){E===!0?E=G[x]:G[x]!==!0&&(S=F[0],Z.unshift(F[1]));break}}if(E!==!0)if(E&&s.throws)a=E(a);else try{a=E(a)}catch(pe){return{state:"parsererror",error:E?pe:"No conversion from "+I+" to "+S}}}}return{state:"success",data:a}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Or.href,type:"GET",isLocal:ff.test(Or.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ja,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,a){return a?yo(yo(s,u.ajaxSettings),a):yo(u.ajaxSettings,s)},ajaxPrefilter:Za(Ya),ajaxTransport:Za(vo),ajax:function(s,a){typeof s=="object"&&(a=s,s=void 0),a=a||{};var f,d,x,S,E,F,I,G,Z,pe,X=u.ajaxSetup({},a),ne=X.context||X,Ge=X.context&&(ne.nodeType||ne.jquery)?u(ne):u.event,rt=u.Deferred(),ke=u.Callbacks("once memory"),Xt=X.statusCode||{},qt={},Mn={},Et="canceled",it={readyState:0,getResponseHeader:function(_t){var Ft;if(I){if(!S)for(S={};Ft=uf.exec(x);)S[Ft[1].toLowerCase()+" "]=(S[Ft[1].toLowerCase()+" "]||[]).concat(Ft[2]);Ft=S[_t.toLowerCase()+" "]}return Ft==null?null:Ft.join(", ")},getAllResponseHeaders:function(){return I?x:null},setRequestHeader:function(_t,Ft){return I==null&&(_t=Mn[_t.toLowerCase()]=Mn[_t.toLowerCase()]||_t,qt[_t]=Ft),this},overrideMimeType:function(_t){return I==null&&(X.mimeType=_t),this},statusCode:function(_t){var Ft;if(_t)if(I)it.always(_t[it.status]);else for(Ft in _t)Xt[Ft]=[Xt[Ft],_t[Ft]];return this},abort:function(_t){var Ft=_t||Et;return f&&f.abort(Ft),pn(0,Ft),this}};if(rt.promise(it),X.url=((s||X.url||Or.href)+"").replace(df,Or.protocol+"//"),X.type=a.method||a.type||X.method||X.type,X.dataTypes=(X.dataType||"*").toLowerCase().match(Ve)||[""],X.crossDomain==null){F=g.createElement("a");try{F.href=X.url,F.href=F.href,X.crossDomain=xo.protocol+"//"+xo.host!=F.protocol+"//"+F.host}catch{X.crossDomain=!0}}if(X.data&&X.processData&&typeof X.data!="string"&&(X.data=u.param(X.data,X.traditional)),Ka(Ya,X,a,it),I)return it;G=u.event&&X.global,G&&u.active++===0&&u.event.trigger("ajaxStart"),X.type=X.type.toUpperCase(),X.hasContent=!hf.test(X.type),d=X.url.replace(lf,""),X.hasContent?X.data&&X.processData&&(X.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(X.data=X.data.replace(af,"+")):(pe=X.url.slice(d.length),X.data&&(X.processData||typeof X.data=="string")&&(d+=(go.test(d)?"&":"?")+X.data,delete X.data),X.cache===!1&&(d=d.replace(cf,"$1"),pe=(go.test(d)?"&":"?")+"_="+Xa.guid+++pe),X.url=d+pe),X.ifModified&&(u.lastModified[d]&&it.setRequestHeader("If-Modified-Since",u.lastModified[d]),u.etag[d]&&it.setRequestHeader("If-None-Match",u.etag[d])),(X.data&&X.hasContent&&X.contentType!==!1||a.contentType)&&it.setRequestHeader("Content-Type",X.contentType),it.setRequestHeader("Accept",X.dataTypes[0]&&X.accepts[X.dataTypes[0]]?X.accepts[X.dataTypes[0]]+(X.dataTypes[0]!=="*"?", "+Ja+"; q=0.01":""):X.accepts["*"]);for(Z in X.headers)it.setRequestHeader(Z,X.headers[Z]);if(X.beforeSend&&(X.beforeSend.call(ne,it,X)===!1||I))return it.abort();if(Et="abort",ke.add(X.complete),it.done(X.success),it.fail(X.error),f=Ka(vo,X,a,it),!f)pn(-1,"No Transport");else{if(it.readyState=1,G&&Ge.trigger("ajaxSend",[it,X]),I)return it;X.async&&X.timeout>0&&(E=e.setTimeout(function(){it.abort("timeout")},X.timeout));try{I=!1,f.send(qt,pn)}catch(_t){if(I)throw _t;pn(-1,_t)}}function pn(_t,Ft,zr,ms){var Sn,Ai,Ci,mn,mi,Rn=Ft;I||(I=!0,E&&e.clearTimeout(E),f=void 0,x=ms||"",it.readyState=_t>0?4:0,Sn=_t>=200&&_t<300||_t===304,zr&&(mn=pf(X,it,zr)),!Sn&&u.inArray("script",X.dataTypes)>-1&&u.inArray("json",X.dataTypes)<0&&(X.converters["text script"]=function(){}),mn=mf(X,mn,it,Sn),Sn?(X.ifModified&&(mi=it.getResponseHeader("Last-Modified"),mi&&(u.lastModified[d]=mi),mi=it.getResponseHeader("etag"),mi&&(u.etag[d]=mi)),_t===204||X.type==="HEAD"?Rn="nocontent":_t===304?Rn="notmodified":(Rn=mn.state,Ai=mn.data,Ci=mn.error,Sn=!Ci)):(Ci=Rn,(_t||!Rn)&&(Rn="error",_t<0&&(_t=0))),it.status=_t,it.statusText=(Ft||Rn)+"",Sn?rt.resolveWith(ne,[Ai,Rn,it]):rt.rejectWith(ne,[it,Rn,Ci]),it.statusCode(Xt),Xt=void 0,G&&Ge.trigger(Sn?"ajaxSuccess":"ajaxError",[it,X,Sn?Ai:Ci]),ke.fireWith(ne,[it,Rn]),G&&(Ge.trigger("ajaxComplete",[it,X]),--u.active||u.event.trigger("ajaxStop")))}return it},getJSON:function(s,a,f){return u.get(s,a,f,"json")},getScript:function(s,a){return u.get(s,void 0,a,"script")}}),u.each(["get","post"],function(s,a){u[a]=function(f,d,x,S){return w(d)&&(S=S||x,x=d,d=void 0),u.ajax(u.extend({url:f,type:a,dataType:S,data:d,success:x},u.isPlainObject(f)&&f))}}),u.ajaxPrefilter(function(s){var a;for(a in s.headers)a.toLowerCase()==="content-type"&&(s.contentType=s.headers[a]||"")}),u._evalUrl=function(s,a,f){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){u.globalEval(d,a,f)}})},u.fn.extend({wrapAll:function(s){var a;return this[0]&&(w(s)&&(s=s.call(this[0])),a=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(s){return w(s)?this.each(function(a){u(this).wrapInner(s.call(this,a))}):this.each(function(){var a=u(this),f=a.contents();f.length?f.wrapAll(s):a.append(s)})},wrap:function(s){var a=w(s);return this.each(function(f){u(this).wrapAll(a?s.call(this,f):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var gf={0:200,1223:204},Fr=u.ajaxSettings.xhr();b.cors=!!Fr&&"withCredentials"in Fr,b.ajax=Fr=!!Fr,u.ajaxTransport(function(s){var a,f;if(b.cors||Fr&&!s.crossDomain)return{send:function(d,x){var S,E=s.xhr();if(E.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(S in s.xhrFields)E[S]=s.xhrFields[S];s.mimeType&&E.overrideMimeType&&E.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(S in d)E.setRequestHeader(S,d[S]);a=function(F){return function(){a&&(a=f=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,F==="abort"?E.abort():F==="error"?typeof E.status!="number"?x(0,"error"):x(E.status,E.statusText):x(gf[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=a(),f=E.onerror=E.ontimeout=a("error"),E.onabort!==void 0?E.onabort=f:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){a&&f()})},a=a("abort");try{E.send(s.hasContent&&s.data||null)}catch(F){if(a)throw F}},abort:function(){a&&a()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var a,f;return{send:function(d,x){a=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",f=function(S){a.remove(),f=null,S&&x(S.type==="error"?404:200,S.type)}),g.head.appendChild(a[0])},abort:function(){f&&f()}}}});var Qa=[],Mo=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Qa.pop()||u.expando+"_"+Xa.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,a,f){var d,x,S,E=s.jsonp!==!1&&(Mo.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Mo.test(s.data)&&"data");if(E||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=w(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,E?s[E]=s[E].replace(Mo,"$1"+d):s.jsonp!==!1&&(s.url+=(go.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return S||u.error(d+" was not called"),S[0]},s.dataTypes[0]="json",x=e[d],e[d]=function(){S=arguments},f.always(function(){x===void 0?u(e).removeProp(d):e[d]=x,s[d]&&(s.jsonpCallback=a.jsonpCallback,Qa.push(d)),S&&w(x)&&x(S[0]),S=x=void 0}),"script"}),b.createHTMLDocument=function(){var s=g.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),u.parseHTML=function(s,a,f){if(typeof s!="string")return[];typeof a=="boolean"&&(f=a,a=!1);var d,x,S;return a||(b.createHTMLDocument?(a=g.implementation.createHTMLDocument(""),d=a.createElement("base"),d.href=g.location.href,a.head.appendChild(d)):a=g),x=Y.exec(s),S=!f&&[],x?[a.createElement(x[1])]:(x=re([s],a,S),S&&S.length&&u(S).remove(),u.merge([],x.childNodes))},u.fn.load=function(s,a,f){var d,x,S,E=this,F=s.indexOf(" ");return F>-1&&(d=Ei(s.slice(F)),s=s.slice(0,F)),w(a)?(f=a,a=void 0):a&&typeof a=="object"&&(x="POST"),E.length>0&&u.ajax({url:s,type:x||"GET",dataType:"html",data:a}).done(function(I){S=arguments,E.html(d?u("<div>").append(u.parseHTML(I)).find(d):I)}).always(f&&function(I,G){E.each(function(){f.apply(this,S||[I.responseText,G,I])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(a){return s===a.elem}).length},u.offset={setOffset:function(s,a,f){var d,x,S,E,F,I,G,Z=u.css(s,"position"),pe=u(s),X={};Z==="static"&&(s.style.position="relative"),F=pe.offset(),S=u.css(s,"top"),I=u.css(s,"left"),G=(Z==="absolute"||Z==="fixed")&&(S+I).indexOf("auto")>-1,G?(d=pe.position(),E=d.top,x=d.left):(E=parseFloat(S)||0,x=parseFloat(I)||0),w(a)&&(a=a.call(s,f,u.extend({},F))),a.top!=null&&(X.top=a.top-F.top+E),a.left!=null&&(X.left=a.left-F.left+x),"using"in a?a.using.call(s,X):pe.css(X)}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(x){u.offset.setOffset(this,s,x)});var a,f,d=this[0];if(d)return d.getClientRects().length?(a=d.getBoundingClientRect(),f=d.ownerDocument.defaultView,{top:a.top+f.pageYOffset,left:a.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,a,f,d=this[0],x={top:0,left:0};if(u.css(d,"position")==="fixed")a=d.getBoundingClientRect();else{for(a=this.offset(),f=d.ownerDocument,s=d.offsetParent||f.documentElement;s&&(s===f.body||s===f.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(x=u(s).offset(),x.top+=u.css(s,"borderTopWidth",!0),x.left+=u.css(s,"borderLeftWidth",!0))}return{top:a.top-x.top-u.css(d,"marginTop",!0),left:a.left-x.left-u.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||ge})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,a){var f=a==="pageYOffset";u.fn[s]=function(d){return We(this,function(x,S,E){var F;if(M(x)?F=x:x.nodeType===9&&(F=x.defaultView),E===void 0)return F?F[a]:x[S];F?F.scrollTo(f?F.pageXOffset:E,f?E:F.pageYOffset):x[S]=E},s,d,arguments.length)}}),u.each(["top","left"],function(s,a){u.cssHooks[a]=ct(b.pixelPosition,function(f,d){if(d)return d=ot(f,a),ie.test(d)?u(f).position()[a]+"px":d})}),u.each({Height:"height",Width:"width"},function(s,a){u.each({padding:"inner"+s,content:a,"":"outer"+s},function(f,d){u.fn[d]=function(x,S){var E=arguments.length&&(f||typeof x!="boolean"),F=f||(x===!0||S===!0?"margin":"border");return We(this,function(I,G,Z){var pe;return M(I)?d.indexOf("outer")===0?I["inner"+s]:I.document.documentElement["client"+s]:I.nodeType===9?(pe=I.documentElement,Math.max(I.body["scroll"+s],pe["scroll"+s],I.body["offset"+s],pe["offset"+s],pe["client"+s])):Z===void 0?u.css(I,G,F):u.style(I,G,Z,F)},a,E?x:void 0,E)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,a){u.fn[a]=function(f){return this.on(a,f)}}),u.fn.extend({bind:function(s,a,f){return this.on(s,null,a,f)},unbind:function(s,a){return this.off(s,null,a)},delegate:function(s,a,f,d){return this.on(a,s,f,d)},undelegate:function(s,a,f){return arguments.length===1?this.off(s,"**"):this.off(a,s||"**",f)},hover:function(s,a){return this.mouseenter(s).mouseleave(a||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,a){u.fn[a]=function(f,d){return arguments.length>0?this.on(a,null,f,d):this.trigger(a)}});var _f=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(s,a){var f,d,x;if(typeof a=="string"&&(f=s[a],a=s,s=f),!!w(s))return d=o.call(arguments,2),x=function(){return s.apply(a||this,d.concat(o.call(arguments)))},x.guid=s.guid=s.guid||u.guid++,x},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=ue,u.isFunction=w,u.isWindow=M,u.camelCase=Oe,u.type=L,u.now=Date.now,u.isNumeric=function(s){var a=u.type(s);return(a==="number"||a==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(_f,"$1")};var vf=e.jQuery,xf=e.$;return u.noConflict=function(s){return e.$===u&&(e.$=xf),s&&e.jQuery===u&&(e.jQuery=vf),u},typeof t>"u"&&(e.jQuery=e.$=u),u})})(wu);var f0=wu.exports;const dt=c0(f0),h0=new Na(10,3,16,100),d0=new io({color:16737095});function p0(i){const e=new Ln(h0,d0);this.geo=e,this.position=i,this.animate=function t(){e.rotation.x+=.01,e.rotation.y+=.01,e.rotation.z+=.01,requestAnimationFrame(t)}}const m0=new no(1.5),g0=new io({color:"#D22030"});function _0(){let i=new Ln(m0,g0),e=Date.now();this.geo=i,this.animate=function t(){let n=ln.position.clone().sub(i.position),r=ln.position.distanceTo(i.position);if(r&&r<5&&r>-5&&Date.now()-e>3e3){if(dt(".game-over").is(":visible"))return;console.log("this was the m: "+r),On.remove(i),Kv();return}let o=n.normalize();if(i.position.add(o.multiplyScalar(Ar)),!i.parent)return i=null;requestAnimationFrame(t)}}function Eu(i,e=Array(3).fill().map(()=>Vh.randFloatSpread(110))){let t=new _0;t.geo.position.set(...e),i.add(t.geo),t.animate()}function Tu(i,e){return function(){return i.apply(e,arguments)}}const{toString:v0}=Object.prototype,{getPrototypeOf:Oa}=Object,ro=(i=>e=>{const t=v0.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),ti=i=>(i=i.toLowerCase(),e=>ro(e)===i),so=i=>e=>typeof e===i,{isArray:Rr}=Array,os=so("undefined");function x0(i){return i!==null&&!os(i)&&i.constructor!==null&&!os(i.constructor)&&Nn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Au=ti("ArrayBuffer");function y0(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Au(i.buffer),e}const M0=so("string"),Nn=so("function"),Cu=so("number"),oo=i=>i!==null&&typeof i=="object",S0=i=>i===!0||i===!1,Xs=i=>{if(ro(i)!=="object")return!1;const e=Oa(i);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},b0=ti("Date"),w0=ti("File"),E0=ti("Blob"),T0=ti("FileList"),A0=i=>oo(i)&&Nn(i.pipe),C0=i=>{let e;return i&&(typeof FormData=="function"&&i instanceof FormData||Nn(i.append)&&((e=ro(i))==="formdata"||e==="object"&&Nn(i.toString)&&i.toString()==="[object FormData]"))},L0=ti("URLSearchParams"),P0=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fs(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let n,r;if(typeof i!="object"&&(i=[i]),Rr(i))for(n=0,r=i.length;n<r;n++)e.call(null,i[n],n,i);else{const o=t?Object.getOwnPropertyNames(i):Object.keys(i),c=o.length;let l;for(n=0;n<c;n++)l=o[n],e.call(null,i[l],l,i)}}function Lu(i,e){e=e.toLowerCase();const t=Object.keys(i);let n=t.length,r;for(;n-- >0;)if(r=t[n],e===r.toLowerCase())return r;return null}const Pu=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ru=i=>!os(i)&&i!==Pu;function Ma(){const{caseless:i}=Ru(this)&&this||{},e={},t=(n,r)=>{const o=i&&Lu(e,r)||r;Xs(e[o])&&Xs(n)?e[o]=Ma(e[o],n):Xs(n)?e[o]=Ma({},n):Rr(n)?e[o]=n.slice():e[o]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&fs(arguments[n],t);return e}const R0=(i,e,t,{allOwnKeys:n}={})=>(fs(e,(r,o)=>{t&&Nn(r)?i[o]=Tu(r,t):i[o]=r},{allOwnKeys:n}),i),D0=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),I0=(i,e,t,n)=>{i.prototype=Object.create(e.prototype,n),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:e.prototype}),t&&Object.assign(i.prototype,t)},U0=(i,e,t,n)=>{let r,o,c;const l={};if(e=e||{},i==null)return e;do{for(r=Object.getOwnPropertyNames(i),o=r.length;o-- >0;)c=r[o],(!n||n(c,i,e))&&!l[c]&&(e[c]=i[c],l[c]=!0);i=t!==!1&&Oa(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},N0=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const n=i.indexOf(e,t);return n!==-1&&n===t},O0=i=>{if(!i)return null;if(Rr(i))return i;let e=i.length;if(!Cu(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},F0=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Oa(Uint8Array)),z0=(i,e)=>{const n=(i&&i[Symbol.iterator]).call(i);let r;for(;(r=n.next())&&!r.done;){const o=r.value;e.call(i,o[0],o[1])}},B0=(i,e)=>{let t;const n=[];for(;(t=i.exec(e))!==null;)n.push(t);return n},k0=ti("HTMLFormElement"),H0=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,n,r){return n.toUpperCase()+r}),Uc=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),G0=ti("RegExp"),Du=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),n={};fs(t,(r,o)=>{e(r,o,i)!==!1&&(n[o]=r)}),Object.defineProperties(i,n)},V0=i=>{Du(i,(e,t)=>{if(Nn(i)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const n=i[t];if(Nn(n)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},W0=(i,e)=>{const t={},n=r=>{r.forEach(o=>{t[o]=!0})};return Rr(i)?n(i):n(String(i).split(e)),t},q0=()=>{},j0=(i,e)=>(i=+i,Number.isFinite(i)?i:e),aa="abcdefghijklmnopqrstuvwxyz",Nc="0123456789",Iu={DIGIT:Nc,ALPHA:aa,ALPHA_DIGIT:aa+aa.toUpperCase()+Nc},X0=(i=16,e=Iu.ALPHA_DIGIT)=>{let t="";const{length:n}=e;for(;i--;)t+=e[Math.random()*n|0];return t};function $0(i){return!!(i&&Nn(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const Y0=i=>{const e=new Array(10),t=(n,r)=>{if(oo(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[r]=n;const o=Rr(n)?[]:{};return fs(n,(c,l)=>{const p=t(c,r+1);!os(p)&&(o[l]=p)}),e[r]=void 0,o}}return n};return t(i,0)},J0=ti("AsyncFunction"),Z0=i=>i&&(oo(i)||Nn(i))&&Nn(i.then)&&Nn(i.catch),ce={isArray:Rr,isArrayBuffer:Au,isBuffer:x0,isFormData:C0,isArrayBufferView:y0,isString:M0,isNumber:Cu,isBoolean:S0,isObject:oo,isPlainObject:Xs,isUndefined:os,isDate:b0,isFile:w0,isBlob:E0,isRegExp:G0,isFunction:Nn,isStream:A0,isURLSearchParams:L0,isTypedArray:F0,isFileList:T0,forEach:fs,merge:Ma,extend:R0,trim:P0,stripBOM:D0,inherits:I0,toFlatObject:U0,kindOf:ro,kindOfTest:ti,endsWith:N0,toArray:O0,forEachEntry:z0,matchAll:B0,isHTMLForm:k0,hasOwnProperty:Uc,hasOwnProp:Uc,reduceDescriptors:Du,freezeMethods:V0,toObjectSet:W0,toCamelCase:H0,noop:q0,toFiniteNumber:j0,findKey:Lu,global:Pu,isContextDefined:Ru,ALPHABET:Iu,generateString:X0,isSpecCompliantForm:$0,toJSONObject:Y0,isAsyncFn:J0,isThenable:Z0};function vt(i,e,t,n,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),r&&(this.response=r)}ce.inherits(vt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ce.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Uu=vt.prototype,Nu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{Nu[i]={value:i}});Object.defineProperties(vt,Nu);Object.defineProperty(Uu,"isAxiosError",{value:!0});vt.from=(i,e,t,n,r,o)=>{const c=Object.create(Uu);return ce.toFlatObject(i,c,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),vt.call(c,i.message,e,t,n,r),c.cause=i,c.name=i.name,o&&Object.assign(c,o),c};const K0=null;function Sa(i){return ce.isPlainObject(i)||ce.isArray(i)}function Ou(i){return ce.endsWith(i,"[]")?i.slice(0,-2):i}function Oc(i,e,t){return i?i.concat(e).map(function(r,o){return r=Ou(r),!t&&o?"["+r+"]":r}).join(t?".":""):e}function Q0(i){return ce.isArray(i)&&!i.some(Sa)}const ev=ce.toFlatObject(ce,{},null,function(e){return/^is[A-Z]/.test(e)});function ao(i,e,t){if(!ce.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=ce.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,M){return!ce.isUndefined(M[w])});const n=t.metaTokens,r=t.visitor||m,o=t.dots,c=t.indexes,p=(t.Blob||typeof Blob<"u"&&Blob)&&ce.isSpecCompliantForm(e);if(!ce.isFunction(r))throw new TypeError("visitor must be a function");function h(b){if(b===null)return"";if(ce.isDate(b))return b.toISOString();if(!p&&ce.isBlob(b))throw new vt("Blob is not supported. Use a Buffer instead.");return ce.isArrayBuffer(b)||ce.isTypedArray(b)?p&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function m(b,w,M){let g=b;if(b&&!M&&typeof b=="object"){if(ce.endsWith(w,"{}"))w=n?w:w.slice(0,-2),b=JSON.stringify(b);else if(ce.isArray(b)&&Q0(b)||(ce.isFileList(b)||ce.endsWith(w,"[]"))&&(g=ce.toArray(b)))return w=Ou(w),g.forEach(function(R,L){!(ce.isUndefined(R)||R===null)&&e.append(c===!0?Oc([w],L,o):c===null?w:w+"[]",h(R))}),!1}return Sa(b)?!0:(e.append(Oc(M,w,o),h(b)),!1)}const _=[],v=Object.assign(ev,{defaultVisitor:m,convertValue:h,isVisitable:Sa});function y(b,w){if(!ce.isUndefined(b)){if(_.indexOf(b)!==-1)throw Error("Circular reference detected in "+w.join("."));_.push(b),ce.forEach(b,function(g,N){(!(ce.isUndefined(g)||g===null)&&r.call(e,g,ce.isString(N)?N.trim():N,w,v))===!0&&y(g,w?w.concat(N):[N])}),_.pop()}}if(!ce.isObject(i))throw new TypeError("data must be an object");return y(i),e}function Fc(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(n){return e[n]})}function Fa(i,e){this._pairs=[],i&&ao(i,this,e)}const Fu=Fa.prototype;Fu.append=function(e,t){this._pairs.push([e,t])};Fu.toString=function(e){const t=e?function(n){return e.call(this,n,Fc)}:Fc;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function tv(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function zu(i,e,t){if(!e)return i;const n=t&&t.encode||tv,r=t&&t.serialize;let o;if(r?o=r(e,t):o=ce.isURLSearchParams(e)?e.toString():new Fa(e,t).toString(n),o){const c=i.indexOf("#");c!==-1&&(i=i.slice(0,c)),i+=(i.indexOf("?")===-1?"?":"&")+o}return i}class nv{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ce.forEach(this.handlers,function(n){n!==null&&e(n)})}}const zc=nv,Bu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iv=typeof URLSearchParams<"u"?URLSearchParams:Fa,rv=typeof FormData<"u"?FormData:null,sv=typeof Blob<"u"?Blob:null,ov=(()=>{let i;return typeof navigator<"u"&&((i=navigator.product)==="ReactNative"||i==="NativeScript"||i==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),av=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Qn={isBrowser:!0,classes:{URLSearchParams:iv,FormData:rv,Blob:sv},isStandardBrowserEnv:ov,isStandardBrowserWebWorkerEnv:av,protocols:["http","https","file","blob","url","data"]};function lv(i,e){return ao(i,new Qn.classes.URLSearchParams,Object.assign({visitor:function(t,n,r,o){return Qn.isNode&&ce.isBuffer(t)?(this.append(n,t.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},e))}function cv(i){return ce.matchAll(/\w+|\[(\w*)]/g,i).map(e=>e[0]==="[]"?"":e[1]||e[0])}function uv(i){const e={},t=Object.keys(i);let n;const r=t.length;let o;for(n=0;n<r;n++)o=t[n],e[o]=i[o];return e}function ku(i){function e(t,n,r,o){let c=t[o++];const l=Number.isFinite(+c),p=o>=t.length;return c=!c&&ce.isArray(r)?r.length:c,p?(ce.hasOwnProp(r,c)?r[c]=[r[c],n]:r[c]=n,!l):((!r[c]||!ce.isObject(r[c]))&&(r[c]=[]),e(t,n,r[c],o)&&ce.isArray(r[c])&&(r[c]=uv(r[c])),!l)}if(ce.isFormData(i)&&ce.isFunction(i.entries)){const t={};return ce.forEachEntry(i,(n,r)=>{e(cv(n),r,t,0)}),t}return null}const fv={"Content-Type":void 0};function hv(i,e,t){if(ce.isString(i))try{return(e||JSON.parse)(i),ce.trim(i)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(i)}const lo={transitional:Bu,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ce.isObject(e);if(o&&ce.isHTMLForm(e)&&(e=new FormData(e)),ce.isFormData(e))return r&&r?JSON.stringify(ku(e)):e;if(ce.isArrayBuffer(e)||ce.isBuffer(e)||ce.isStream(e)||ce.isFile(e)||ce.isBlob(e))return e;if(ce.isArrayBufferView(e))return e.buffer;if(ce.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return lv(e,this.formSerializer).toString();if((l=ce.isFileList(e))||n.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return ao(l?{"files[]":e}:e,p&&new p,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),hv(e)):e}],transformResponse:[function(e){const t=this.transitional||lo.transitional,n=t&&t.forcedJSONParsing,r=this.responseType==="json";if(e&&ce.isString(e)&&(n&&!this.responseType||r)){const c=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(l){if(c)throw l.name==="SyntaxError"?vt.from(l,vt.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qn.classes.FormData,Blob:Qn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ce.forEach(["delete","get","head"],function(e){lo.headers[e]={}});ce.forEach(["post","put","patch"],function(e){lo.headers[e]=ce.merge(fv)});const za=lo,dv=ce.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pv=i=>{const e={};let t,n,r;return i&&i.split(`
`).forEach(function(c){r=c.indexOf(":"),t=c.substring(0,r).trim().toLowerCase(),n=c.substring(r+1).trim(),!(!t||e[t]&&dv[t])&&(t==="set-cookie"?e[t]?e[t].push(n):e[t]=[n]:e[t]=e[t]?e[t]+", "+n:n)}),e},Bc=Symbol("internals");function Xr(i){return i&&String(i).trim().toLowerCase()}function $s(i){return i===!1||i==null?i:ce.isArray(i)?i.map($s):String(i)}function mv(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=t.exec(i);)e[n[1]]=n[2];return e}const gv=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function la(i,e,t,n,r){if(ce.isFunction(n))return n.call(this,e,t);if(r&&(e=t),!!ce.isString(e)){if(ce.isString(n))return e.indexOf(n)!==-1;if(ce.isRegExp(n))return n.test(e)}}function _v(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function vv(i,e){const t=ce.toCamelCase(" "+e);["get","set","has"].forEach(n=>{Object.defineProperty(i,n+t,{value:function(r,o,c){return this[n].call(this,e,r,o,c)},configurable:!0})})}class co{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(l,p,h){const m=Xr(p);if(!m)throw new Error("header name must be a non-empty string");const _=ce.findKey(r,m);(!_||r[_]===void 0||h===!0||h===void 0&&r[_]!==!1)&&(r[_||p]=$s(l))}const c=(l,p)=>ce.forEach(l,(h,m)=>o(h,m,p));return ce.isPlainObject(e)||e instanceof this.constructor?c(e,t):ce.isString(e)&&(e=e.trim())&&!gv(e)?c(pv(e),t):e!=null&&o(t,e,n),this}get(e,t){if(e=Xr(e),e){const n=ce.findKey(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return mv(r);if(ce.isFunction(t))return t.call(this,r,n);if(ce.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Xr(e),e){const n=ce.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||la(this,this[n],n,t)))}return!1}delete(e,t){const n=this;let r=!1;function o(c){if(c=Xr(c),c){const l=ce.findKey(n,c);l&&(!t||la(n,n[l],l,t))&&(delete n[l],r=!0)}}return ce.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];(!e||la(this,this[o],o,e,!0))&&(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return ce.forEach(this,(r,o)=>{const c=ce.findKey(n,o);if(c){t[c]=$s(r),delete t[o];return}const l=e?_v(o):String(o).trim();l!==o&&delete t[o],t[l]=$s(r),n[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ce.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&ce.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach(r=>n.set(r)),n}static accessor(e){const n=(this[Bc]=this[Bc]={accessors:{}}).accessors,r=this.prototype;function o(c){const l=Xr(c);n[l]||(vv(r,c),n[l]=!0)}return ce.isArray(e)?e.forEach(o):o(e),this}}co.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ce.freezeMethods(co.prototype);ce.freezeMethods(co);const di=co;function ca(i,e){const t=this||za,n=e||t,r=di.from(n.headers);let o=n.data;return ce.forEach(i,function(l){o=l.call(t,o,r.normalize(),e?e.status:void 0)}),r.normalize(),o}function Hu(i){return!!(i&&i.__CANCEL__)}function hs(i,e,t){vt.call(this,i??"canceled",vt.ERR_CANCELED,e,t),this.name="CanceledError"}ce.inherits(hs,vt,{__CANCEL__:!0});function xv(i,e,t){const n=t.config.validateStatus;!t.status||!n||n(t.status)?i(t):e(new vt("Request failed with status code "+t.status,[vt.ERR_BAD_REQUEST,vt.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const yv=Qn.isStandardBrowserEnv?function(){return{write:function(t,n,r,o,c,l){const p=[];p.push(t+"="+encodeURIComponent(n)),ce.isNumber(r)&&p.push("expires="+new Date(r).toGMTString()),ce.isString(o)&&p.push("path="+o),ce.isString(c)&&p.push("domain="+c),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(t){const n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Mv(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function Sv(i,e){return e?i.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):i}function Gu(i,e){return i&&!Mv(e)?Sv(i,e):e}const bv=Qn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(o){let c=o;return e&&(t.setAttribute("href",c),c=t.href),t.setAttribute("href",c),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(c){const l=ce.isString(c)?r(c):c;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}();function wv(i){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return e&&e[1]||""}function Ev(i,e){i=i||10;const t=new Array(i),n=new Array(i);let r=0,o=0,c;return e=e!==void 0?e:1e3,function(p){const h=Date.now(),m=n[o];c||(c=h),t[r]=p,n[r]=h;let _=o,v=0;for(;_!==r;)v+=t[_++],_=_%i;if(r=(r+1)%i,r===o&&(o=(o+1)%i),h-c<e)return;const y=m&&h-m;return y?Math.round(v*1e3/y):void 0}}function kc(i,e){let t=0;const n=Ev(50,250);return r=>{const o=r.loaded,c=r.lengthComputable?r.total:void 0,l=o-t,p=n(l),h=o<=c;t=o;const m={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:p||void 0,estimated:p&&c&&h?(c-o)/p:void 0,event:r};m[e?"download":"upload"]=!0,i(m)}}const Tv=typeof XMLHttpRequest<"u",Av=Tv&&function(i){return new Promise(function(t,n){let r=i.data;const o=di.from(i.headers).normalize(),c=i.responseType;let l;function p(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}ce.isFormData(r)&&(Qn.isStandardBrowserEnv||Qn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let h=new XMLHttpRequest;if(i.auth){const y=i.auth.username||"",b=i.auth.password?unescape(encodeURIComponent(i.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+b))}const m=Gu(i.baseURL,i.url);h.open(i.method.toUpperCase(),zu(m,i.params,i.paramsSerializer),!0),h.timeout=i.timeout;function _(){if(!h)return;const y=di.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),w={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:y,config:i,request:h};xv(function(g){t(g),p()},function(g){n(g),p()},w),h=null}if("onloadend"in h?h.onloadend=_:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(_)},h.onabort=function(){h&&(n(new vt("Request aborted",vt.ECONNABORTED,i,h)),h=null)},h.onerror=function(){n(new vt("Network Error",vt.ERR_NETWORK,i,h)),h=null},h.ontimeout=function(){let b=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const w=i.transitional||Bu;i.timeoutErrorMessage&&(b=i.timeoutErrorMessage),n(new vt(b,w.clarifyTimeoutError?vt.ETIMEDOUT:vt.ECONNABORTED,i,h)),h=null},Qn.isStandardBrowserEnv){const y=(i.withCredentials||bv(m))&&i.xsrfCookieName&&yv.read(i.xsrfCookieName);y&&o.set(i.xsrfHeaderName,y)}r===void 0&&o.setContentType(null),"setRequestHeader"in h&&ce.forEach(o.toJSON(),function(b,w){h.setRequestHeader(w,b)}),ce.isUndefined(i.withCredentials)||(h.withCredentials=!!i.withCredentials),c&&c!=="json"&&(h.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&h.addEventListener("progress",kc(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",kc(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=y=>{h&&(n(!y||y.type?new hs(null,i,h):y),h.abort(),h=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const v=wv(m);if(v&&Qn.protocols.indexOf(v)===-1){n(new vt("Unsupported protocol "+v+":",vt.ERR_BAD_REQUEST,i));return}h.send(r||null)})},Ys={http:K0,xhr:Av};ce.forEach(Ys,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{value:e})}catch{}Object.defineProperty(i,"adapterName",{value:e})}});const Cv={getAdapter:i=>{i=ce.isArray(i)?i:[i];const{length:e}=i;let t,n;for(let r=0;r<e&&(t=i[r],!(n=ce.isString(t)?Ys[t.toLowerCase()]:t));r++);if(!n)throw n===!1?new vt(`Adapter ${t} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(ce.hasOwnProp(Ys,t)?`Adapter '${t}' is not available in the build`:`Unknown adapter '${t}'`);if(!ce.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:Ys};function ua(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new hs(null,i)}function Hc(i){return ua(i),i.headers=di.from(i.headers),i.data=ca.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Cv.getAdapter(i.adapter||za.adapter)(i).then(function(n){return ua(i),n.data=ca.call(i,i.transformResponse,n),n.headers=di.from(n.headers),n},function(n){return Hu(n)||(ua(i),n&&n.response&&(n.response.data=ca.call(i,i.transformResponse,n.response),n.response.headers=di.from(n.response.headers))),Promise.reject(n)})}const Gc=i=>i instanceof di?i.toJSON():i;function wr(i,e){e=e||{};const t={};function n(h,m,_){return ce.isPlainObject(h)&&ce.isPlainObject(m)?ce.merge.call({caseless:_},h,m):ce.isPlainObject(m)?ce.merge({},m):ce.isArray(m)?m.slice():m}function r(h,m,_){if(ce.isUndefined(m)){if(!ce.isUndefined(h))return n(void 0,h,_)}else return n(h,m,_)}function o(h,m){if(!ce.isUndefined(m))return n(void 0,m)}function c(h,m){if(ce.isUndefined(m)){if(!ce.isUndefined(h))return n(void 0,h)}else return n(void 0,m)}function l(h,m,_){if(_ in e)return n(h,m);if(_ in i)return n(void 0,h)}const p={url:o,method:o,data:o,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:l,headers:(h,m)=>r(Gc(h),Gc(m),!0)};return ce.forEach(Object.keys(Object.assign({},i,e)),function(m){const _=p[m]||r,v=_(i[m],e[m],m);ce.isUndefined(v)&&_!==l||(t[m]=v)}),t}const Vu="1.4.0",Ba={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Ba[i]=function(n){return typeof n===i||"a"+(e<1?"n ":" ")+i}});const Vc={};Ba.transitional=function(e,t,n){function r(o,c){return"[Axios v"+Vu+"] Transitional option '"+o+"'"+c+(n?". "+n:"")}return(o,c,l)=>{if(e===!1)throw new vt(r(c," has been removed"+(t?" in "+t:"")),vt.ERR_DEPRECATED);return t&&!Vc[c]&&(Vc[c]=!0,console.warn(r(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(o,c,l):!0}};function Lv(i,e,t){if(typeof i!="object")throw new vt("options must be an object",vt.ERR_BAD_OPTION_VALUE);const n=Object.keys(i);let r=n.length;for(;r-- >0;){const o=n[r],c=e[o];if(c){const l=i[o],p=l===void 0||c(l,o,i);if(p!==!0)throw new vt("option "+o+" must be "+p,vt.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new vt("Unknown option "+o,vt.ERR_BAD_OPTION)}}const ba={assertOptions:Lv,validators:Ba},Mi=ba.validators;class Ks{constructor(e){this.defaults=e,this.interceptors={request:new zc,response:new zc}}request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=wr(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;n!==void 0&&ba.assertOptions(n,{silentJSONParsing:Mi.transitional(Mi.boolean),forcedJSONParsing:Mi.transitional(Mi.boolean),clarifyTimeoutError:Mi.transitional(Mi.boolean)},!1),r!=null&&(ce.isFunction(r)?t.paramsSerializer={serialize:r}:ba.assertOptions(r,{encode:Mi.function,serialize:Mi.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c;c=o&&ce.merge(o.common,o[t.method]),c&&ce.forEach(["delete","get","head","post","put","patch","common"],b=>{delete o[b]}),t.headers=di.concat(c,o);const l=[];let p=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(t)===!1||(p=p&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const h=[];this.interceptors.response.forEach(function(w){h.push(w.fulfilled,w.rejected)});let m,_=0,v;if(!p){const b=[Hc.bind(this),void 0];for(b.unshift.apply(b,l),b.push.apply(b,h),v=b.length,m=Promise.resolve(t);_<v;)m=m.then(b[_++],b[_++]);return m}v=l.length;let y=t;for(_=0;_<v;){const b=l[_++],w=l[_++];try{y=b(y)}catch(M){w.call(this,M);break}}try{m=Hc.call(this,y)}catch(b){return Promise.reject(b)}for(_=0,v=h.length;_<v;)m=m.then(h[_++],h[_++]);return m}getUri(e){e=wr(this.defaults,e);const t=Gu(e.baseURL,e.url);return zu(t,e.params,e.paramsSerializer)}}ce.forEach(["delete","get","head","options"],function(e){Ks.prototype[e]=function(t,n){return this.request(wr(n||{},{method:e,url:t,data:(n||{}).data}))}});ce.forEach(["post","put","patch"],function(e){function t(n){return function(o,c,l){return this.request(wr(l||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:c}))}}Ks.prototype[e]=t(),Ks.prototype[e+"Form"]=t(!0)});const Js=Ks;class ka{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(o){t=o});const n=this;this.promise.then(r=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](r);n._listeners=null}),this.promise.then=r=>{let o;const c=new Promise(l=>{n.subscribe(l),o=l}).then(r);return c.cancel=function(){n.unsubscribe(o)},c},e(function(o,c,l){n.reason||(n.reason=new hs(o,c,l),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new ka(function(r){e=r}),cancel:e}}}const Pv=ka;function Rv(i){return function(t){return i.apply(null,t)}}function Dv(i){return ce.isObject(i)&&i.isAxiosError===!0}const wa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(wa).forEach(([i,e])=>{wa[e]=i});const Iv=wa;function Wu(i){const e=new Js(i),t=Tu(Js.prototype.request,e);return ce.extend(t,Js.prototype,e,{allOwnKeys:!0}),ce.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return Wu(wr(i,r))},t}const Zt=Wu(za);Zt.Axios=Js;Zt.CanceledError=hs;Zt.CancelToken=Pv;Zt.isCancel=Hu;Zt.VERSION=Vu;Zt.toFormData=ao;Zt.AxiosError=vt;Zt.Cancel=Zt.CanceledError;Zt.all=function(e){return Promise.all(e)};Zt.spread=Rv;Zt.isAxiosError=Dv;Zt.mergeConfig=wr;Zt.AxiosHeaders=di;Zt.formToJSON=i=>ku(ce.isHTMLForm(i)?new FormData(i):i);Zt.HttpStatusCode=Iv;Zt.default=Zt;const Er=Zt,Tr="http://localhost:9090";let Ws;const Uv=new Uint8Array(16);function Nv(){if(!Ws&&(Ws=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ws))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ws(Uv)}const nn=[];for(let i=0;i<256;++i)nn.push((i+256).toString(16).slice(1));function Ov(i,e=0){return(nn[i[e+0]]+nn[i[e+1]]+nn[i[e+2]]+nn[i[e+3]]+"-"+nn[i[e+4]]+nn[i[e+5]]+"-"+nn[i[e+6]]+nn[i[e+7]]+"-"+nn[i[e+8]]+nn[i[e+9]]+"-"+nn[i[e+10]]+nn[i[e+11]]+nn[i[e+12]]+nn[i[e+13]]+nn[i[e+14]]+nn[i[e+15]]).toLowerCase()}const Fv=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Wc={randomUUID:Fv};function zv(i,e,t){if(Wc.randomUUID&&!e&&!i)return Wc.randomUUID();i=i||{};const n=i.random||(i.rng||Nv)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){t=t||0;for(let r=0;r<16;++r)e[t+r]=n[r];return e}return Ov(n)}let Zr,qu=localStorage.getItem.bind(localStorage);localStorage.setItem.bind(localStorage);localStorage.removeItem.bind(localStorage);dt(".title").on("click",i=>{});dt("#play").on("click",i=>{console.log("playing"),Zu()});dt("#lb").on("click",async i=>{dt("[menu]").hide(),dt("#title-lb").show();let{data:e}=await Er(Tr+"/getScores"),t=e.map(o=>o.data);t.length>9&&(t.length=9);let n=t.sort((o,c)=>c.score-o.score);console.log(n);let r="";for(let o=0;o<n.length;o++){let c=n[o];r+=`
      <div class="lb-score">
        <div class="me-3">${c.username}:</div>
        <div class="">${c.highscore}</div>
      </div>
    `}dt(".tlb-scores").html(r)});dt("#stats").on("click",i=>{dt("[menu]").hide(),dt("#stats-menu").show();let e=JSON.parse(qu("account")),t=`
    <div class="mb-1">Highscore: 	 ${e.highscore}</div>
    <div class="mb-1">Total Hits: 	 ${e.hits}</div>
    <div class="mb-1">Time Played: 	 ${Math.floor(e.time_played/60)}:${(e.time_played%60).toString().padStart(2,"0")}</div>
  `;dt("#s").html(t)});dt("#retry").on("click",i=>{Zu()});dt(".quit").on("click",i=>{location.reload()});dt("#login").on("click",i=>{if(localStorage.getItem("account"))return;let e=zv();localStorage.setItem("uuid",e),Er.post(Tr+"/oauth",{uuid:e,href:window.location.href}).then(t=>window.location.href=t.data)});dt("#logout").on("click",i=>{localStorage.removeItem("account"),window.location.reload()});dt(async()=>{if(localStorage.getItem("uuid")){let{data:i}=await Er.post(Tr+"/getToken",{uuid:localStorage.getItem("uuid")}).catch(e=>null);if(localStorage.removeItem("uuid"),console.log(i),!i)return;console.log("gere1"),i.highscore||(i.highscore=0,i.time_played=0,i.hits=0,console.log("pain"),await Er.post(Tr+"/saveAccount",i)),console.log("here2"),localStorage.setItem("account",JSON.stringify(i)),dt("#login").html(i.username),dt("#logout").show()}else if(localStorage.getItem("account")){console.log("??????//"),localStorage.removeItem("uuid");let i=JSON.parse(qu("account"));console.log("This is acc: in doc.ready"),console.log(i),dt("#login").html(i.username),dt("#logout").show()}Zr=dt("#audio")[0],Zr.currentTime=localStorage.getItem("audio")||0,Zr.loop=!0,Zr.volume=.5});dt("#bg").on("click",async i=>{});dt(window).on("unload",i=>{localStorage.setItem("audio",Zr.currentTime)});const hr=new us(0,0,0,"YXZ"),dr=new V,Bv={type:"change"},kv={type:"lock"},Hv={type:"unlock"},qc=Math.PI/2;class Gv extends qi{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Vv.bind(this),this._onPointerlockChange=Wv.bind(this),this._onPointerlockError=qv.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;dr.setFromMatrixColumn(t.matrix,0),dr.crossVectors(t.up,dr),t.position.addScaledVector(dr,e)}moveRight(e){const t=this.camera;dr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(dr,e)}lock(){this.domElement.requestPointerLock({unadjustedMovement:!0})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}let qs=30;function Vv(i){if(this.isLocked===!1)return;const e=jc(i.movementX||i.mozMovementX||i.webkitMovementX||0,-qs,qs),t=jc(i.movementY||i.mozMovementY||i.webkitMovementY||0,-qs,qs),n=this.camera;hr.setFromQuaternion(n.quaternion),hr.y-=e*.002*this.pointerSpeed,hr.x-=t*.002*this.pointerSpeed,hr.x=Math.max(qc-this.maxPolarAngle,Math.min(qc-this.minPolarAngle,hr.x)),n.quaternion.setFromEuler(hr),this.dispatchEvent(Bv)}function jc(i,e,t){return i<=e?e:i>=t?t:i}function Wv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(kv),this.isLocked=!0):(this.dispatchEvent(Hv),this.isLocked=!1,dt("#paused").show())}function qv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const ln=new Cn(75,window.innerWidth/window.innerHeight,.1,1e3),uo=new Gv(ln,$("#bg")[0]);let ju=console.log,Ea=localStorage.getItem.bind(localStorage),jv=localStorage.setItem.bind(localStorage);localStorage.removeItem.bind(localStorage);const On=new X_,Xc=new r0,fo=new vu({canvas:dt("#bg")[0]});fo.setPixelRatio(window.devicePixelRatio);fo.setSize(window.innerWidth,window.innerHeight);ln.position.set(0,50,-100);ln.rotation.set(-2.7095338077918627,.01597627537694578,3.1342261956640667);fo.render(On,ln);new Q_().load("space.jpeg");const Ha=new n0(16777215);Ha.position.set(5,5,5);const Xv=new i0(16777215);On.add(Ha,Xv);new s0(Ha);new o0(200,50);let $v=new ji(50,2,50),Yv=new io({color:3684408});const Xu=new Ln($v,Yv);Xu.position.set(0,-20,0);On.add(Xu);Qv([0,0,0]);function $u(){requestAnimationFrame($u),fo.render(On,ln)}$u();let gr=0,as=0,es=0,pi=[],Zs,Ar=.1,Ta=10,Jv=localStorage.getItem("account")?JSON.parse(Ea("account")).username:"YOU",Ga=[[0,50,-100],[10,100,70],[-80,-60,-30]],Va=[[3.1294898990744757,-.13039790361064346,3.140018872872886],[-.2546460804929257,.07047449746912259,.01832705546224618],[1.849602546449333,-.7145598994559652,1.9826623581145912]];function Yu(){On.traverse(i=>{i.isMesh&&i.material.color.getHex()===13770800&&pi.push(i)})}function Ju(i){i.geometry.type=="SphereGeometry"&&(On.remove(i),pi.pop(),dt(".score").html("Score: "+ ++gr),pi.length==0&&Zv(),console.log(pi.length))}function Zv(){ln.position.set(...Ga[++as%3]),ln.rotation.set(...Va[as%3]),Ar+=.05,Array(++Ta).fill().forEach(()=>Eu(On)),Yu()}function Zu(){dt("[menu]").hide(),pi=[],gr=0,Ar=.1,Ta=10,Zs=setInterval(ex,1e3),es=0,as=0,ln.position.set(...Ga[0]),ln.rotation.set(...Va[0]),Array(Ta).fill().forEach(()=>Eu(On)),dt("[menu]").hide(),dt("[ui]").show(),dt(".score").html("Score: 0"),uo.lock(),Yu(),dt("#audio")[0].volume=.3}async function Kv(){if(!Zs||!Ar)return;dt("[menu]").hide(),ju("game over"),Ar=0,clearInterval(Zs),Zs=null,uo.unlock(),dt(".game-over").css("display","flex"),pi.forEach(l=>On.remove(l)),pi=[];let i;Ea("account")&&(i=JSON.parse(Ea("account")),i.time_played+=es,i.hits+=gr,i.highscore<gr&&(i.highscore=gr),jv("account",JSON.stringify(i)),await Er.post(Tr+"/saveAccount",i));let e={username:Jv,highscore:gr,gold:!0},{data:t}=await Er(Tr+"/getScores"),n=t.map(l=>l.data);n.length>9&&(n.length=9);let r=[...n,e].sort((l,p)=>p.score-l.score);console.log(r);let o="",c;for(let l=0;l<r.length;l++){let p=r[l];p.gold&&(c=l),o+=`
      <div class="lb-score" id="ls${l}">
        <div class="me-3">${p.username}:</div>
        <div class="">${p.highscore}</div>
      </div>
    `}dt("#scores").html(o),c&&dt(`#ls${c}`).addClass("text-warning"),console.log(n)}function Qv(i){let e=new p0(i);On.add(e.geo),e.animate()}function ex(){es++,dt(".timer").html(`${Math.floor(es/60)}:${(es%60).toString().padStart(2,"0")}`)}document.addEventListener("pointerdown",function(){Xc.setFromCamera(new wt,ln);const i=Xc.intersectObjects(On.children,!0);i.length>0&&Ju(i[0].object)});dt(".resume").on("click",i=>{ju("run resume"),uo.lock()});document.addEventListener("keydown",async i=>{switch(i.key.toLowerCase()){case"m":console.log(ln.position);break;case"n":console.log(ya.position);break;case"b":console.log(ln.rotation);break;case"r":location.reload();break;case"v":Ar=1;break;case"escape":break;case"k":pi.length&&Ju(pi[0]);break;case".":ln.position.set(...Ga[++as%3]),ln.rotation.set(...Va[as%3]);break}});document.addEventListener("click",function(){dt("[menu]:visible").length===0&&uo.lock()});
