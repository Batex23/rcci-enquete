(()=>{var Va="160",Rt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},an={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Wc=1,jo=2,di=3,Kt=0,bt=1,ri=2;var Xs=2;var Wi=100;var Wa=204,ja=205;var Xo=0,Hh=1,kh=2,Ci=0,Gh=1,Vh=2,Wh=3,jh=4,Xh=5,qh=6;var jc=300,Dn=301,Un=302,Xa=303,qa=304,qs=306,ur=1e3,pi=1001,Ya=1002,vt=1003,ml=1004;var sa=1005;var Vt=1006,Yh=1007;var ds=1008;var qi=1009;var qo=1012,Xc=1013,wi=1014,Ai=1015,dr=1016,qc=1017,Yc=1018,Yi=1020;var Yt=1023;var Zi=1026,Nn=1027;var Zc=1029;var $c=1031,Jc=1033,aa=33776,oa=33777,la=33778,ca=33779,fl=35840,gl=35841,vl=35842,_l=35843,Kc=36196,yl=37492,xl=37496,bl=37808,Ml=37809,Sl=37810,El=37811,Tl=37812,wl=37813,Al=37814,Rl=37815,Cl=37816,Pl=37817,Ll=37818,Il=37819,Dl=37820,Ul=37821,ha=36492,Nl=36494,Ol=36495;var Fl=36284,zl=36285,Bl=36286;var ps=2300,ms=2301,ua=2302,Hl=2400,kl=2401,Gl=2402;var Qc=3e3,$i=3001;var Zt="",$e="srgb",mi="srgb-linear",Yo="display-p3",Ys="display-p3-linear",fs="linear",je="srgb",gs="rec709",vs="p3";var cn=7680;var Za=35044;var Vl="300 es",$a=1035,On=2e3,_s=2001,Qt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=1234567,Pn=Math.PI/180,pr=180/Math.PI;function Jt(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(dt[255&r]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]+"-"+dt[255&e]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[63&t|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[255&i]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function Ja(r,e){return(r%e+e)%e}function sr(r,e,t){return(1-t)*r+t*e}function Ka(r){return(r&r-1)==0&&r!==0}function ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var eh={DEG2RAD:Pn,RAD2DEG:pr,generateUUID:Jt,clamp:rt,euclideanModulo:Ja,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:sr,damp:function(r,e,t,i){return sr(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(Ja(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Wl=r);let e=Wl+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Pn},radToDeg:function(r){return r*pr},isPowerOfTwo:Ka,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:ys,setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Ge,denormalize:$t},ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],g=n[0],m=n[3],y=n[6],_=n[1],v=n[4],b=n[7],C=n[2],x=n[5],E=n[8];return s[0]=a*g+o*_+l*C,s[3]=a*m+o*v+l*x,s[6]=a*y+o*b+l*E,s[1]=c*g+h*_+d*C,s[4]=c*m+h*v+d*x,s[7]=c*y+h*b+d*E,s[2]=u*g+p*_+f*C,s[5]=u*m+p*v+f*x,s[8]=u*y+p*b+f*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,f=t*d+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=d*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=u*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},da=new De;function th(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zh(){let r=xs("canvas");return r.style.display="block",r}var jl={};function ar(r){r in jl||(jl[r]=!0,console.warn(r))}var Xl=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ql=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[mi]:{transfer:fs,primaries:gs,toReference:r=>r,fromReference:r=>r},[$e]:{transfer:je,primaries:gs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ys]:{transfer:fs,primaries:vs,toReference:r=>r.applyMatrix3(ql),fromReference:r=>r.applyMatrix3(Xl)},[Yo]:{transfer:je,primaries:vs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ql),fromReference:r=>r.applyMatrix3(Xl).convertLinearToSRGB()}},$h=new Set([mi,Ys]),Ve={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!$h.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=Dr[e].toReference;return(0,Dr[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Dr[r].primaries},getTransfer:function(r){return r===Zt?fs:Dr[r].transfer}};function Ln(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function pa(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var hn,bs=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hn===void 0&&(hn=xs("canvas")),hn.width=e.width,hn.height=e.height;let i=hn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Ln(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ln(t[i]/255)):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jh=0,Ms=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ma(n[a].image)):s.push(ma(n[a]))}else s=ma(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ma(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kh=0,Nt=class r extends Qt{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Jt(),this.name="",this.source=new Ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===$i?$e:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$e?$i:Qc}set encoding(e){ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===$i?$e:Zt}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=jc,Nt.DEFAULT_ANISOTROPY=1;var We=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(p+1)/2,C=(y+1)/2,x=(h+u)/4,E=(d+g)/4,D=(f+m)/4;return v>b&&v>C?v<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(v),n=x/i,s=E/i):b>C?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=x/n,s=D/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=E/s,n=D/s),this.set(i,n,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-g)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends Qt{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$i?$e:Zt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ms(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends Qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ss=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=vt,this.minFilter=vt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=vt,this.minFilter=vt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(d!==g||l!==u||c!==p||h!==f){let m=1-o,y=l*u+c*p+h*f+d*g,_=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){let C=Math.sqrt(v),x=Math.atan2(C,y*_);m=Math.sin(m*x)/C,o=Math.sin(o*x)/C}let b=o*_;if(l=l*m+u*b,c=c*m+p*b,h=h*m+f*b,d=d*m+g*b,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new S,Yl=new At,ei=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($n),Nr.subVectors(this.max,$n),un.subVectors(e.a,$n),dn.subVectors(e.b,$n),pn.subVectors(e.c,$n),bi.subVectors(dn,un),Mi.subVectors(pn,dn),Bi.subVectors(un,pn);let t=[0,-bi.z,bi.y,0,-Mi.z,Mi.y,0,-Bi.z,Bi.y,bi.z,0,-bi.x,Mi.z,0,-Mi.x,Bi.z,0,-Bi.x,-bi.y,bi.x,0,-Mi.y,Mi.x,0,-Bi.y,Bi.x,0];return!!ga(t,un,dn,pn,Nr)&&(t=[1,0,0,0,1,0,0,0,1],!!ga(t,un,dn,pn,Nr)&&(Or.crossVectors(bi,Mi),t=[Or.x,Or.y,Or.z],ga(t,un,dn,pn,Nr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ht).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new S,new S,new S,new S,new S,new S,new S,new S],Ht=new S,Ur=new ei,un=new S,dn=new S,pn=new S,bi=new S,Mi=new S,Bi=new S,$n=new S,Nr=new S,Or=new S,Hi=new S;function ga(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Hi.fromArray(r,s);let o=n.x*Math.abs(Hi.x)+n.y*Math.abs(Hi.y)+n.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qh=new ei,Jn=new S,va=new S,ti=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Qh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jn.subVectors(e,this.center);let t=Jn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Jn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jn.copy(e.center).add(va)),this.expandByPoint(Jn.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new S,_a=new S,Fr=new S,Si=new S,ya=new S,zr=new S,xa=new S,gi=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){_a.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(_a);let s=.5*e.distanceTo(t),a=-this.direction.dot(Fr),o=Si.dot(this.direction),l=-Si.dot(Fr),c=Si.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){let g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(_a).addScaledVector(Fr,u),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);let i=li.dot(this.direction),n=li.dot(li)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,n,s){ya.subVectors(t,e),zr.subVectors(i,e),xa.crossVectors(ya,zr);let a,o=this.direction.dot(xa);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Si.subVectors(this.origin,e);let l=a*this.direction.dot(zr.crossVectors(Si,zr));if(l<0)return null;let c=a*this.direction.dot(ya.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(xa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(e,t,i,n,s,a,o,l,c,h,d,u,p,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,p,f,g,m)}set(e,t,i,n,s,a,o,l,c,h,d,u,p,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/mn.setFromMatrixColumn(e,0).length(),s=1/mn.setFromMatrixColumn(e,1).length(),a=1/mn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,g=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,t,i){let n=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),Ei.crossVectors(i,Et),Ei.lengthSq()===0&&(Math.abs(i.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),Ei.crossVectors(i,Et)),Ei.normalize(),Br.crossVectors(Et,Ei),n[0]=Ei.x,n[4]=Br.x,n[8]=Et.x,n[1]=Ei.y,n[5]=Br.y,n[9]=Et.y,n[2]=Ei.z,n[6]=Br.z,n[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],g=i[6],m=i[10],y=i[14],_=i[3],v=i[7],b=i[11],C=i[15],x=n[0],E=n[4],D=n[8],I=n[12],O=n[1],B=n[5],P=n[9],A=n[13],L=n[2],H=n[6],oe=n[10],q=n[14],Z=n[3],ee=n[7],G=n[11],J=n[15];return s[0]=a*x+o*O+l*L+c*Z,s[4]=a*E+o*B+l*H+c*ee,s[8]=a*D+o*P+l*oe+c*G,s[12]=a*I+o*A+l*q+c*J,s[1]=h*x+d*O+u*L+p*Z,s[5]=h*E+d*B+u*H+p*ee,s[9]=h*D+d*P+u*oe+p*G,s[13]=h*I+d*A+u*q+p*J,s[2]=f*x+g*O+m*L+y*Z,s[6]=f*E+g*B+m*H+y*ee,s[10]=f*D+g*P+m*oe+y*G,s[14]=f*I+g*A+m*q+y*J,s[3]=_*x+v*O+b*L+C*Z,s[7]=_*E+v*B+b*H+C*ee,s[11]=_*D+v*P+b*oe+C*G,s[15]=_*I+v*A+b*q+C*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],_=d*m*c-g*u*c+g*l*p-o*m*p-d*l*y+o*u*y,v=f*u*c-h*m*c-f*l*p+a*m*p+h*l*y-a*u*y,b=h*g*c-f*d*c+f*o*p-a*g*p-h*o*y+a*d*y,C=f*d*l-h*g*l-f*o*u+a*g*u+h*o*m-a*d*m,x=t*_+i*v+n*b+s*C;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/x;return e[0]=_*E,e[1]=(g*u*s-d*m*s-g*n*p+i*m*p+d*n*y-i*u*y)*E,e[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*y+i*l*y)*E,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*p-i*l*p)*E,e[4]=v*E,e[5]=(h*m*s-f*u*s+f*n*p-t*m*p-h*n*y+t*u*y)*E,e[6]=(f*l*s-a*m*s-f*n*c+t*m*c+a*n*y-t*l*y)*E,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*p+t*l*p)*E,e[8]=b*E,e[9]=(f*d*s-h*g*s-f*i*p+t*g*p+h*i*y-t*d*y)*E,e[10]=(a*g*s-f*o*s+f*i*c-t*g*c-a*i*y+t*o*y)*E,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*E,e[12]=C*E,e[13]=(h*g*n-f*d*n+f*i*u-t*g*u-h*i*m+t*d*m)*E,e[14]=(f*o*n-a*g*n-f*i*l+t*g*l+a*i*m-t*o*m)*E,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*E,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,f=s*d,g=a*h,m=a*d,y=o*d,_=l*c,v=l*h,b=l*d,C=i.x,x=i.y,E=i.z;return n[0]=(1-(g+y))*C,n[1]=(p+b)*C,n[2]=(f-v)*C,n[3]=0,n[4]=(p-b)*x,n[5]=(1-(u+y))*x,n[6]=(m+_)*x,n[7]=0,n[8]=(f+v)*E,n[9]=(m-_)*E,n[10]=(1-(u+g))*E,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=mn.set(n[0],n[1],n[2]).length(),a=mn.set(n[4],n[5],n[6]).length(),o=mn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],kt.copy(this);let l=1/s,c=1/a,h=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=c,kt.elements[5]*=c,kt.elements[6]*=c,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,f;if(o===On)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==_s)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-s),u=(t+e)*c,p=(i+n)*h,f,g;if(o===On)f=(a+s)*d,g=-2*d;else{if(o!==_s)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,g=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},mn=new S,kt=new Ce,eu=new S(0,0,0),tu=new S(1,1,1),Ei=new S,Br=new S,Et=new S,Zl=new Ce,$l=new At,Es=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $l.setFromEuler(this),this.setFromQuaternion($l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},iu=0,Jl=new S,fn=new At,ci=new Ce,Hr=new S,Kn=new S,nu=new S,ru=new At,Kl=new S(1,0,0),Ql=new S(0,1,0),ec=new S(0,0,1),su={type:"added"},au={type:"removed"},ht=class r extends Qt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new S,t=new Es,i=new At,n=new S(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new De}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis(ec,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis(ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Kn,Hr,this.up):ci.lookAt(Hr,Kn,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),fn.setFromRotationMatrix(ci),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(au)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};ht.DEFAULT_UP=new S(0,1,0),ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=new S,hi=new S,ba=new S,ui=new S,gn=new S,vn=new S,tc=new S,Ma=new S,Sa=new S,Ea=new S,kr=!1,Ri=class r{constructor(e=new S,t=new S,i=new S){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Gt.subVectors(e,t),n.cross(Gt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Gt.subVectors(n,t),hi.subVectors(i,t),ba.subVectors(e,t);let a=Gt.dot(Gt),o=Gt.dot(hi),l=Gt.dot(ba),c=hi.dot(hi),h=hi.dot(ba),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ui)!==null&&ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,n,s,a,o,l){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static isFrontFacing(e,t,i,n){return Gt.subVectors(i,t),hi.subVectors(e,t),Gt.cross(hi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),.5*Gt.cross(hi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;gn.subVectors(n,i),vn.subVectors(s,i),Ma.subVectors(e,i);let l=gn.dot(Ma),c=vn.dot(Ma);if(l<=0&&c<=0)return t.copy(i);Sa.subVectors(e,n);let h=gn.dot(Sa),d=vn.dot(Sa);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gn,a);Ea.subVectors(e,s);let p=gn.dot(Ea),f=vn.dot(Ea);if(f>=0&&p<=f)return t.copy(s);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(vn,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return tc.subVectors(s,n),o=(d-h)/(d-h+(p-f)),t.copy(n).addScaledVector(tc,o);let y=1/(m+g+u);return a=g*y,o=u*y,t.copy(i).addScaledVector(gn,a).addScaledVector(vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=Ja(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ta(a,s,e+1/3),this.g=Ta(a,s,e),this.b=Ta(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=$e){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$e){let i=ih[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$e){return Ve.fromWorkingColorSpace(pt.copy(this),e),65536*Math.round(rt(255*pt.r,0,255))+256*Math.round(rt(255*pt.g,0,255))+Math.round(rt(255*pt.b,0,255))}getHexString(e=$e){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(pt.copy(this),t);let i=pt.r,n=pt.g,s=pt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=$e){Ve.fromWorkingColorSpace(pt.copy(this),e);let t=pt.r,i=pt.g,n=pt.b;return e!==$e?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Gr);let i=sr(Ti.h,Gr.h,t),n=sr(Ti.s,Gr.s,t),s=sr(Ti.l,Gr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pt=new Ae;Ae.NAMES=ih;var ou=0,vi=class extends Qt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=1,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=ja,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cn,this.stencilZFail=cn,this.stencilZPass=cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Kt&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==ja&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jt=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mp=lu();function lu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var tt=new S,Vr=new ie,wt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$t(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$t(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$t(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$t(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$t(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var Ts=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ws=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ee=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var cu=0,Ut=new Ce,wa=new ht,_n=new S,Tt=new ei,Qn=new ei,lt=new S,qe=class r extends Qt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?ws:Ts)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new S,1/0);if(e){let i=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Tt.min,Qn.min),Tt.expandByPoint(lt),lt.addVectors(Tt.max,Qn.max),Tt.expandByPoint(lt)):(Tt.expandByPoint(Qn.min),Tt.expandByPoint(Qn.max))}Tt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)lt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(lt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)lt.fromBufferAttribute(o,c),l&&(_n.fromBufferAttribute(e,c),lt.add(_n)),n=Math.max(n,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let O=0;O<o;O++)c[O]=new S,h[O]=new S;let d=new S,u=new S,p=new S,f=new ie,g=new ie,m=new ie,y=new S,_=new S;function v(O,B,P){d.fromArray(n,3*O),u.fromArray(n,3*B),p.fromArray(n,3*P),f.fromArray(a,2*O),g.fromArray(a,2*B),m.fromArray(a,2*P),u.sub(d),p.sub(d),g.sub(f),m.sub(f);let A=1/(g.x*m.y-m.x*g.y);isFinite(A)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(A),_.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(A),c[O].add(y),c[B].add(y),c[P].add(y),h[O].add(_),h[B].add(_),h[P].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let O=0,B=b.length;O<B;++O){let P=b[O],A=P.start;for(let L=A,H=A+P.count;L<H;L+=3)v(i[L+0],i[L+1],i[L+2])}let C=new S,x=new S,E=new S,D=new S;function I(O){E.fromArray(s,3*O),D.copy(E);let B=c[O];C.copy(B),C.sub(E.multiplyScalar(E.dot(B))).normalize(),x.crossVectors(D,B);let P=x.dot(h[O])<0?-1:1;l[4*O]=C.x,l[4*O+1]=C.y,l[4*O+2]=C.z,l[4*O+3]=P}for(let O=0,B=b.length;O<B;++O){let P=b[O],A=P.start;for(let L=A,H=A+P.count;L<H;L+=3)I(i[L+0]),I(i[L+1]),I(i[L+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new S,s=new S,a=new S,o=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)u[f++]=c[p++]}return new wt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ic=new Ce,ki=new gi,Wr=new ti,nc=new S,yn=new S,xn=new S,bn=new S,Aa=new S,jr=new S,Xr=new ie,qr=new ie,Yr=new ie,rc=new S,sc=new S,ac=new S,Zr=new S,$r=new S,Se=class extends ht{constructor(e=new qe,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){jr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Aa.fromBufferAttribute(d,e),a?jr.addScaledVector(Aa,h):jr.addScaledVector(Aa.sub(t),h))}t.add(jr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),ki.copy(e.ray).recast(e.near),Wr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Wr,nc)===null||ki.origin.distanceToSquared(nc)>(e.far-e.near)**2))return;ic.copy(s).invert(),ki.copy(e.ray).applyMatrix4(ic),i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,ki)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=u.length;f<g;f++){let m=u[f],y=a[m.materialIndex];for(let _=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<v;_+=3)n=Jr(this,y,e,i,c,h,d,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)n=Jr(this,a,e,i,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=u.length;f<g;f++){let m=u[f],y=a[m.materialIndex];for(let _=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));_<v;_+=3)n=Jr(this,y,e,i,c,h,d,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)n=Jr(this,a,e,i,c,h,d,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function Jr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,yn),r.getVertexPosition(l,xn),r.getVertexPosition(c,bn);let h=function(d,u,p,f,g,m,y,_){let v;if(v=u.side===bt?f.intersectTriangle(y,m,g,!0,_):f.intersectTriangle(g,m,y,u.side===Kt,_),v===null)return null;$r.copy(_),$r.applyMatrix4(d.matrixWorld);let b=p.ray.origin.distanceTo($r);return b<p.near||b>p.far?null:{distance:b,point:$r.clone(),object:d}}(r,e,t,i,yn,xn,bn,Zr);if(h){n&&(Xr.fromBufferAttribute(n,o),qr.fromBufferAttribute(n,l),Yr.fromBufferAttribute(n,c),h.uv=Ri.getInterpolation(Zr,yn,xn,bn,Xr,qr,Yr,new ie)),s&&(Xr.fromBufferAttribute(s,o),qr.fromBufferAttribute(s,l),Yr.fromBufferAttribute(s,c),h.uv1=Ri.getInterpolation(Zr,yn,xn,bn,Xr,qr,Yr,new ie),h.uv2=h.uv1),a&&(rc.fromBufferAttribute(a,o),sc.fromBufferAttribute(a,l),ac.fromBufferAttribute(a,c),h.normal=Ri.getInterpolation(Zr,yn,xn,bn,rc,sc,ac,new S),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new S,materialIndex:0};Ri.getNormal(yn,xn,bn,d.normal),h.face=d}return h}var Ke=class r extends qe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(g,m,y,_,v,b,C,x,E,D,I){let O=b/E,B=C/D,P=b/2,A=C/2,L=x/2,H=E+1,oe=D+1,q=0,Z=0,ee=new S;for(let G=0;G<oe;G++){let J=G*B-A;for(let ce=0;ce<H;ce++){let w=ce*O-P;ee[g]=w*_,ee[m]=J*v,ee[y]=L,c.push(ee.x,ee.y,ee.z),ee[g]=0,ee[m]=0,ee[y]=x>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(ce/E),d.push(1-G/D),q+=1}}for(let G=0;G<D;G++)for(let J=0;J<E;J++){let ce=u+J+H*G,w=u+J+H*(G+1),T=u+(J+1)+H*(G+1),k=u+(J+1)+H*G;l.push(ce,w,k),l.push(w,T,k),Z+=6}o.addGroup(p,Z,I),p+=Z,u+=q}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function gt(r){let e={};for(let t=0;t<r.length;t++){let i=Fn(r[t]);for(let n in i)e[n]=i[n]}return e}function nh(r){return r.getRenderTarget()===null?r.outputColorSpace:Ve.workingColorSpace}var hu={clone:Fn,merge:gt},_i=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fr=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yt=class extends fr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*pr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Pn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*pr*Math.atan(Math.tan(.5*Pn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Pn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Mn=-90,to=class extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new yt(Mn,1,e,t);n.layers=this.layers,this.add(n);let s=new yt(Mn,1,e,t);s.layers=this.layers,this.add(s);let a=new yt(Mn,1,e,t);a.layers=this.layers,this.add(a);let o=new yt(Mn,1,e,t);o.layers=this.layers,this.add(o);let l=new yt(Mn,1,e,t);l.layers=this.layers,this.add(l);let c=new yt(Mn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==_s)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},As=class extends Nt{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Dn,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},io=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===$i?$e:Zt),this.texture=new As(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ke(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:0});s.uniforms.tEquirect.value=t;let a=new Se(n,s),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Vt),new to(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Ra=new S,uu=new S,du=new De,xt=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ra.subVectors(i,t).cross(uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ra),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||du.getNormalMatrix(e),n=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new ti,Kr=new S,zn=class{constructor(e=new xt,t=new xt,i=new xt,n=new xt,s=new xt,a=new xt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],f=n[9],g=n[10],m=n[11],y=n[12],_=n[13],v=n[14],b=n[15];if(i[0].setComponents(l-s,u-c,m-p,b-y).normalize(),i[1].setComponents(l+s,u+c,m+p,b+y).normalize(),i[2].setComponents(l+a,u+h,m+f,b+_).normalize(),i[3].setComponents(l-a,u-h,m-f,b-_).normalize(),i[4].setComponents(l-o,u-d,m-g,b-v).normalize(),t===On)i[5].setComponents(l+o,u+d,m+g,b+v).normalize();else{if(t!==_s)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,d,g,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Kr.x=n.normal.x>0?e.max.x:e.min.x,Kr.y=n.normal.y>0?e.max.y:e.min.y,Kr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function pu(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}(n,s));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,d=l._updateRange,u=l.updateRanges;if(r.bindBuffer(c,o),d.count===-1&&u.length===0&&r.bufferSubData(c,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let g=u[p];t?r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,n,s),a.version=n.version}}}}var ii=class r extends qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let _=y*u-a;for(let v=0;v<c;v++){let b=v*d-s;f.push(b,-_,0),g.push(0,0,1),m.push(v/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let _=0;_<o;_++){let v=_+c*y,b=_+c*(y+1),C=_+1+c*(y+1),x=_+1+c*y;p.push(v,b,x),p.push(b,C,x)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Re={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
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
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},qt={basic:{uniforms:gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:gt([he.points,he.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:gt([he.common,he.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:gt([he.sprite,he.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:gt([he.common,he.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:gt([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};qt.physical={uniforms:gt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var Qr={r:0,b:0,g:0};function mu(r,e,t,i,n,s,a){let o=new Ae(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function f(g,m){g.getRGB(Qr,nh(r)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?f(o,h):_&&_.isColor&&(f(_,1),y=!0);let v=r.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===qs)?(c===void 0&&(c=new Se(new Ke(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Fn(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(_.colorSpace)!==je,d===_&&u===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=_,u=_.version,p=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Se(new ii(2,2),new _i({name:"BackgroundMaterial",uniforms:Fn(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(_.colorSpace)!==je,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),d===_&&u===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=_,u=_.version,p=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function fu(r,e,t,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function d(C){return i.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function u(C){return i.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function p(C){let x=[],E=[],D=[];for(let I=0;I<n;I++)x[I]=0,E[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:E,attributeDivisors:D,object:C,attributes:{},index:null}}function f(){let C=c.newAttributes;for(let x=0,E=C.length;x<E;x++)C[x]=0}function g(C){m(C,0)}function m(C,x){let E=c.newAttributes,D=c.enabledAttributes,I=c.attributeDivisors;E[C]=1,D[C]===0&&(r.enableVertexAttribArray(C),D[C]=1),I[C]!==x&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,x),I[C]=x)}function y(){let C=c.newAttributes,x=c.enabledAttributes;for(let E=0,D=x.length;E<D;E++)x[E]!==C[E]&&(r.disableVertexAttribArray(E),x[E]=0)}function _(C,x,E,D,I,O,B){B===!0?r.vertexAttribIPointer(C,x,E,I,O):r.vertexAttribPointer(C,x,E,D,I,O)}function v(){b(),h=!0,c!==l&&(c=l,d(c.object))}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(C,x,E,D,I){let O=!1;if(a){let B=function(P,A,L){let H=L.wireframe===!0,oe=o[P.id];oe===void 0&&(oe={},o[P.id]=oe);let q=oe[A.id];q===void 0&&(q={},oe[A.id]=q);let Z=q[H];return Z===void 0&&(Z=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),q[H]=Z),Z}(D,E,x);c!==B&&(c=B,d(c.object)),O=function(P,A,L,H){let oe=c.attributes,q=A.attributes,Z=0,ee=L.getAttributes();for(let G in ee)if(ee[G].location>=0){let J=oe[G],ce=q[G];if(ce===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;Z++}return c.attributesNum!==Z||c.index!==H}(C,D,E,I),O&&function(P,A,L,H){let oe={},q=A.attributes,Z=0,ee=L.getAttributes();for(let G in ee)if(ee[G].location>=0){let J=q[G];J===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),oe[G]=ce,Z++}c.attributes=oe,c.attributesNum=Z,c.index=H}(C,D,E,I)}else{let B=x.wireframe===!0;c.geometry===D.id&&c.program===E.id&&c.wireframe===B||(c.geometry=D.id,c.program=E.id,c.wireframe=B,O=!0)}I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,function(B,P,A,L){if(i.isWebGL2===!1&&(B.isInstancedMesh||L.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let H=L.attributes,oe=A.getAttributes(),q=P.defaultAttributeValues;for(let Z in oe){let ee=oe[Z];if(ee.location>=0){let G=H[Z];if(G===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),G!==void 0){let J=G.normalized,ce=G.itemSize,w=t.get(G);if(w===void 0)continue;let T=w.buffer,k=w.type,K=w.bytesPerElement,N=i.isWebGL2===!0&&(k===r.INT||k===r.UNSIGNED_INT||G.gpuType===Xc);if(G.isInterleavedBufferAttribute){let $=G.data,F=$.stride,z=G.offset;if($.isInstancedInterleavedBuffer){for(let W=0;W<ee.locationSize;W++)m(ee.location+W,$.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let W=0;W<ee.locationSize;W++)g(ee.location+W);r.bindBuffer(r.ARRAY_BUFFER,T);for(let W=0;W<ee.locationSize;W++)_(ee.location+W,ce/ee.locationSize,k,J,F*K,(z+ce/ee.locationSize*W)*K,N)}else{if(G.isInstancedBufferAttribute){for(let $=0;$<ee.locationSize;$++)m(ee.location+$,G.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let $=0;$<ee.locationSize;$++)g(ee.location+$);r.bindBuffer(r.ARRAY_BUFFER,T);for(let $=0;$<ee.locationSize;$++)_(ee.location+$,ce/ee.locationSize,k,J,ce*K,ce/ee.locationSize*$*K,N)}}else if(q!==void 0){let J=q[Z];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ee.location,J);break;case 3:r.vertexAttrib3fv(ee.location,J);break;case 4:r.vertexAttrib4fv(ee.location,J);break;default:r.vertexAttrib1fv(ee.location,J)}}}}y()}(C,x,E,D),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))},reset:v,resetDefaultState:b,dispose:function(){v();for(let C in o){let x=o[C];for(let E in x){let D=x[E];for(let I in D)u(D[I].object),delete D[I];delete x[E]}delete o[C]}},releaseStatesOfGeometry:function(C){if(o[C.id]===void 0)return;let x=o[C.id];for(let E in x){let D=x[E];for(let I in D)u(D[I].object),delete D[I];delete x[E]}delete o[C.id]},releaseStatesOfProgram:function(C){for(let x in o){let E=o[x];if(E[C.id]===void 0)continue;let D=E[C.id];for(let I in D)u(D[I].object),delete D[I];delete E[C.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:y}}function gu(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(n)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let d=0;d<l;d++)h+=o[d];t.update(h,s,1)}}}function vu(r,e,t){let i;function n(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,v=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:_&&v,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function _u(r){let e=this,t=null,i=0,n=!1,s=!1,a=new xt,o=new De,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=u+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=u;_!==f;++_,v+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||n;return n=d,i=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!g)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let y=s?0:i,_=4*y,v=m.clippingState||null;l.value=v,v=c(p,d,_,u);for(let b=0;b!==_;++b)v[b]=t[b];m.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function yu(r){let e=new WeakMap;function t(n,s){return s===Xa?n.mapping=Dn:s===qa&&(n.mapping=Un),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===Xa||s===qa){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new io(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Bn=class extends fr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oc=[.125,.215,.35,.446,.526,.582],er=20,Ca=new Bn,lc=new Ae,Pa=null,La=0,Ia=0,Vi=(1+Math.sqrt(5))/2,Sn=1/Vi,cc=[new S(1,1,1),new S(-1,1,1),new S(1,1,-1),new S(-1,1,-1),new S(0,Vi,Sn),new S(0,Vi,-Sn),new S(Sn,0,Vi),new S(-Sn,0,Vi),new S(Vi,Sn,0),new S(-Vi,Sn,0)],Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Ia),e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dn||e.mapping===Un?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:dr,format:Yt,colorSpace:mi,depthBuffer:!1},n=hc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hc(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+oc.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=oc[u-a+4-1]:u===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,y=1+g,_=[m,m,y,m,y,y,m,m,y,y,m,y],v=6,b=6,C=3,x=2,E=1,D=new Float32Array(C*b*v),I=new Float32Array(x*b*v),O=new Float32Array(E*b*v);for(let P=0;P<v;P++){let A=P%3*2/3-1,L=P>2?0:-1,H=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];D.set(H,C*b*P),I.set(_,x*b*P);let oe=[P,P,P,P,P,P];O.set(oe,E*b*P)}let B=new qe;B.setAttribute("position",new wt(D,C)),B.setAttribute("uv",new wt(I,x)),B.setAttribute("faceIndex",new wt(O,E)),o.push(B),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(er),h=new S(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,i,n){let s=new yt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(lc),l.toneMapping=Ci,l.autoClear=!1;let d=new jt({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),u=new Se(new Ke,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(lc),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let y=this._cubeSize;es(n,m*y,g>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Dn||e.mapping===Un;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;es(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Ca)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=cc[(n-1)%cc.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Se(this._lodPlanes[n],c),d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):er;g>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let b=0;b<er;++b){let C=b/f,x=Math.exp(-C*C/2);m.push(x),b===0?y+=x:b<g&&(y+=2*x)}for(let b=0;b<m.length;b++)m[b]=m[b]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;let v=this._sizeLods[n];es(t,3*v*(n>_-4?n-_+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(h,Ca)}};function hc(r,e,t){let i=new fi(r,e,t);return i.texture.mapping=qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function uc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function dc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zo(){return`

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
	`}function xu(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===Xa||s===qa,o=s===Dn||s===Un;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new Rs(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d}(l)){t===null&&(t=new Rs(r));let c=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,c),n.addEventListener("dispose",i),c.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function bu(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Mu(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let g=h.array;u=h.version;for(let m=0,y=g.length;m<y;m+=3){let _=g[m+0],v=g[m+1],b=g[m+2];c.push(_,v,v,b,b,_)}}else{if(d===void 0)return;{let g=d.array;u=d.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let _=m+0,v=m+1,b=m+2;c.push(_,v,v,b,b,_)}}}let p=new(th(c)?ws:Ts)(c,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Su(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(n)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(l[u]/o,c[u]);else{d.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,s,1)}}}function Eu(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Tu(r,e){return r[0]-e[0]}function wu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Au(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,f=s.get(c);if(f===void 0||f.count!==p){let A=function(){B.dispose(),s.delete(c),c.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let y=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],C=c.morphAttributes.normal||[],x=c.morphAttributes.color||[],E=0;y===!0&&(E=1),_===!0&&(E=2),v===!0&&(E=3);let D=c.attributes.position.count*E,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let O=new Float32Array(D*I*4*p),B=new Ss(O,D,I,p);B.type=Ai,B.needsUpdate=!0;let P=4*E;for(let L=0;L<p;L++){let H=b[L],oe=C[L],q=x[L],Z=D*I*4*L;for(let ee=0;ee<H.count;ee++){let G=ee*P;y===!0&&(a.fromBufferAttribute(H,ee),O[Z+G+0]=a.x,O[Z+G+1]=a.y,O[Z+G+2]=a.z,O[Z+G+3]=0),_===!0&&(a.fromBufferAttribute(oe,ee),O[Z+G+4]=a.x,O[Z+G+5]=a.y,O[Z+G+6]=a.z,O[Z+G+7]=0),v===!0&&(a.fromBufferAttribute(q,ee),O[Z+G+8]=a.x,O[Z+G+9]=a.y,O[Z+G+10]=a.z,O[Z+G+11]=q.itemSize===4?a.w:1)}}f={count:p,texture:B,size:new ie(D,I)},s.set(c,f),c.addEventListener("dispose",A)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let m=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=i[c.id];if(p===void 0||p.length!==u){p=[];for(let _=0;_<u;_++)p[_]=[_,0];i[c.id]=p}for(let _=0;_<u;_++){let v=p[_];v[0]=_,v[1]=d[_]}p.sort(wu);for(let _=0;_<8;_++)_<u&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Tu);let f=c.morphAttributes.position,g=c.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let v=o[_],b=v[0],C=v[1];b!==Number.MAX_SAFE_INTEGER&&C?(f&&c.getAttribute("morphTarget"+_)!==f[b]&&c.setAttribute("morphTarget"+_,f[b]),g&&c.getAttribute("morphNormal"+_)!==g[b]&&c.setAttribute("morphNormal"+_,g[b]),n[_]=C,m+=C):(f&&c.hasAttribute("morphTarget"+_)===!0&&c.deleteAttribute("morphTarget"+_),g&&c.hasAttribute("morphNormal"+_)===!0&&c.deleteAttribute("morphNormal"+_),n[_]=0)}let y=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function Ru(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Cs=class extends Nt{constructor(e,t,i,n,s,a,o,l,c,h){if((h=h!==void 0?h:Zi)!==Zi&&h!==Nn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zi&&(i=wi),i===void 0&&h===Nn&&(i=Yi),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=new Nt,ah=new Cs(1,1);ah.compareFunction=515;var oh=new Ss,lh=new eo,ch=new As,pc=[],mc=[],fc=new Float32Array(16),gc=new Float32Array(9),vc=new Float32Array(4);function Vn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=pc[n];if(s===void 0&&(s=new Float32Array(n),pc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function st(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function at(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Zs(r,e){let t=mc[e];t===void 0&&(t=new Int32Array(e),mc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Cu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Pu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2fv(this.addr,e),at(t,e)}}function Lu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;r.uniform3fv(this.addr,e),at(t,e)}}function Iu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4fv(this.addr,e),at(t,e)}}function Du(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;vc.set(i),r.uniformMatrix2fv(this.addr,!1,vc),at(t,i)}}function Uu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;gc.set(i),r.uniformMatrix3fv(this.addr,!1,gc),at(t,i)}}function Nu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;fc.set(i),r.uniformMatrix4fv(this.addr,!1,fc),at(t,i)}}function Ou(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Fu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2iv(this.addr,e),at(t,e)}}function zu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3iv(this.addr,e),at(t,e)}}function Bu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4iv(this.addr,e),at(t,e)}}function Hu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ku(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2uiv(this.addr,e),at(t,e)}}function Gu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3uiv(this.addr,e),at(t,e)}}function Vu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4uiv(this.addr,e),at(t,e)}}function Wu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?ah:sh;t.setTexture2D(e||s,n)}function ju(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||lh,n)}function Xu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ch,n)}function qu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||oh,n)}function Yu(r,e){r.uniform1fv(this.addr,e)}function Zu(r,e){let t=Vn(e,this.size,2);r.uniform2fv(this.addr,t)}function $u(r,e){let t=Vn(e,this.size,3);r.uniform3fv(this.addr,t)}function Ju(r,e){let t=Vn(e,this.size,4);r.uniform4fv(this.addr,t)}function Ku(r,e){let t=Vn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Qu(r,e){let t=Vn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ed(r,e){let t=Vn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function td(r,e){r.uniform1iv(this.addr,e)}function id(r,e){r.uniform2iv(this.addr,e)}function nd(r,e){r.uniform3iv(this.addr,e)}function rd(r,e){r.uniform4iv(this.addr,e)}function sd(r,e){r.uniform1uiv(this.addr,e)}function ad(r,e){r.uniform2uiv(this.addr,e)}function od(r,e){r.uniform3uiv(this.addr,e)}function ld(r,e){r.uniform4uiv(this.addr,e)}function cd(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||sh,s[a])}function hd(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||lh,s[a])}function ud(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ch,s[a])}function dd(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||oh,s[a])}var no=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Cu;case 35664:return Pu;case 35665:return Lu;case 35666:return Iu;case 35674:return Du;case 35675:return Uu;case 35676:return Nu;case 5124:case 35670:return Ou;case 35667:case 35671:return Fu;case 35668:case 35672:return zu;case 35669:case 35673:return Bu;case 5125:return Hu;case 36294:return ku;case 36295:return Gu;case 36296:return Vu;case 35678:case 36198:case 36298:case 36306:case 35682:return Wu;case 35679:case 36299:case 36307:return ju;case 35680:case 36300:case 36308:case 36293:return Xu;case 36289:case 36303:case 36311:case 36292:return qu}}(t.type)}},ro=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Yu;case 35664:return Zu;case 35665:return $u;case 35666:return Ju;case 35674:return Ku;case 35675:return Qu;case 35676:return ed;case 5124:case 35670:return td;case 35667:case 35671:return id;case 35668:case 35672:return nd;case 35669:case 35673:return rd;case 5125:return sd;case 36294:return ad;case 36295:return od;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return hd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return dd}}(t.type)}},so=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Da=/(\w+)(\])?(\[|\.)?/g;function _c(r,e){r.seq.push(e),r.map[e.id]=e}function pd(r,e,t){let i=r.name,n=i.length;for(Da.lastIndex=0;;){let s=Da.exec(i),a=Da.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){_c(t,c===void 0?new no(o,r,e):new ro(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new so(o),_c(t,h)),t=h}}}var In=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);pd(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function yc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var md=37297,fd=0;function xc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function gd(r,e){let t=function(i){let n=Ve.getPrimaries(Ve.workingColorSpace),s=Ve.getPrimaries(i),a;switch(n===s?a="":n===vs&&s===gs?a="LinearDisplayP3ToLinearSRGB":n===gs&&s===vs&&(a="LinearSRGBToLinearDisplayP3"),i){case mi:case Ys:return[a,"LinearTransferOETF"];case $e:case Yo:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vd(r,e){let t;switch(e){case Gh:t="Linear";break;case Vh:t="Reinhard";break;case Wh:t="OptimizedCineon";break;case jh:t="ACESFilmic";break;case qh:t="AgX";break;case Xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function En(r){return r!==""}function bc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _d=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(r){return r.replace(_d,xd)}var yd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xd(r,e){let t=Re[e];if(t===void 0){let i=yd.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return ao(t)}var bd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(r){return r.replace(bd,Md)}function Md(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ec(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sd(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(P){let A="SHADOWMAP_TYPE_BASIC";return P.shadowMapType===Wc?A="SHADOWMAP_TYPE_PCF":P.shadowMapType===jo?A="SHADOWMAP_TYPE_PCF_SOFT":P.shadowMapType===di&&(A="SHADOWMAP_TYPE_VSM"),A}(t),c=function(P){let A="ENVMAP_TYPE_CUBE";if(P.envMap)switch(P.envMapMode){case Dn:case Un:A="ENVMAP_TYPE_CUBE";break;case qs:A="ENVMAP_TYPE_CUBE_UV"}return A}(t),h=function(P){let A="ENVMAP_MODE_REFLECTION";return P.envMap&&P.envMapMode===Un&&(A="ENVMAP_MODE_REFRACTION"),A}(t),d=function(P){let A="ENVMAP_BLENDING_NONE";if(P.envMap)switch(P.combine){case Xo:A="ENVMAP_BLENDING_MULTIPLY";break;case Hh:A="ENVMAP_BLENDING_MIX";break;case kh:A="ENVMAP_BLENDING_ADD"}return A}(t),u=function(P){let A=P.envMapCubeUVHeight;if(A===null)return null;let L=Math.log2(A)-2,H=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,L),112)),texelHeight:H,maxMip:L}}(t),p=t.isWebGL2?"":function(P){return[P.extensionDerivatives||P.envMapCubeUVHeight||P.bumpMap||P.normalMapTangentSpace||P.clearcoatNormalMap||P.flatShading||P.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(P.extensionFragDepth||P.logarithmicDepthBuffer)&&P.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",P.extensionDrawBuffers&&P.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(P.extensionShaderTextureLOD||P.envMap||P.transmission)&&P.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(En).join(`
`)}(t),f=function(P){return[P.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(En).join(`
`)}(t),g=function(P){let A=[];for(let L in P){let H=P[L];H!==!1&&A.push("#define "+L+" "+H)}return A.join(`
`)}(s),m=n.createProgram(),y,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(En).join(`
`),y.length>0&&(y+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(En).join(`
`),_.length>0&&(_+=`
`)):(y=[Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(En).join(`
`),_=[p,Ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Re.tonemapping_pars_fragment:"",t.toneMapping!==Ci?vd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,gd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(En).join(`
`)),a=ao(a),a=bc(a,t),a=Mc(a,t),o=ao(o),o=bc(o,t),o=Mc(o,t),a=Sc(a),o=Sc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let b=v+y+a,C=v+_+o,x=yc(n,n.VERTEX_SHADER,b),E=yc(n,n.FRAGMENT_SHADER,C);function D(P){if(r.debug.checkShaderErrors){let A=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(x).trim(),H=n.getShaderInfoLog(E).trim(),oe=!0,q=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,x,E);else{let Z=xc(n,x,"vertex"),ee=xc(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+Z+`
`+ee)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):L!==""&&H!==""||(q=!1);q&&(P.diagnostics={runnable:oe,programLog:A,vertexShader:{log:L,prefix:y},fragmentShader:{log:H,prefix:_}})}n.deleteShader(x),n.deleteShader(E),I=new In(n,m),O=function(A,L){let H={},oe=A.getProgramParameter(L,A.ACTIVE_ATTRIBUTES);for(let q=0;q<oe;q++){let Z=A.getActiveAttrib(L,q),ee=Z.name,G=1;Z.type===A.FLOAT_MAT2&&(G=2),Z.type===A.FLOAT_MAT3&&(G=3),Z.type===A.FLOAT_MAT4&&(G=4),H[ee]={type:Z.type,location:A.getAttribLocation(L,ee),locationSize:G}}return H}(n,m)}let I,O;n.attachShader(m,x),n.attachShader(m,E),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return I===void 0&&D(this),I},this.getAttributes=function(){return O===void 0&&D(this),O};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=n.getProgramParameter(m,md)),B},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=E,this}var Ed=0,oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lo(e),t.set(e,i)),i}},lo=class{constructor(e){this.id=Ed++,this.code=e,this.usedTimes=0}};function Td(r,e,t,i,n,s,a){let o=new mr,l=new oo,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,_,v,b){let C=v.fog,x=b.geometry,E=m.isMeshStandardMaterial?v.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||E),I=D&&D.mapping===qs?D.image.height:null,O=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let B=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,P=B!==void 0?B.length:0,A,L,H,oe,q=0;if(x.morphAttributes.position!==void 0&&(q=1),x.morphAttributes.normal!==void 0&&(q=2),x.morphAttributes.color!==void 0&&(q=3),O){let ct=qt[O];A=ct.vertexShader,L=ct.fragmentShader}else A=m.vertexShader,L=m.fragmentShader,l.update(m),H=l.getVertexShaderID(m),oe=l.getFragmentShaderID(m);let Z=r.getRenderTarget(),ee=b.isInstancedMesh===!0,G=b.isBatchedMesh===!0,J=!!m.map,ce=!!m.matcap,w=!!D,T=!!m.aoMap,k=!!m.lightMap,K=!!m.bumpMap,N=!!m.normalMap,$=!!m.displacementMap,F=!!m.emissiveMap,z=!!m.metalnessMap,W=!!m.roughnessMap,ne=m.anisotropy>0,te=m.clearcoat>0,M=m.iridescence>0,se=m.sheen>0,j=m.transmission>0,X=ne&&!!m.anisotropyMap,ae=te&&!!m.clearcoatMap,ue=te&&!!m.clearcoatNormalMap,de=te&&!!m.clearcoatRoughnessMap,ge=M&&!!m.iridescenceMap,be=M&&!!m.iridescenceThicknessMap,fe=se&&!!m.sheenColorMap,ve=se&&!!m.sheenRoughnessMap,we=!!m.specularMap,et=!!m.specularColorMap,ye=!!m.specularIntensityMap,Ne=j&&!!m.transmissionMap,Le=j&&!!m.thicknessMap,Di=!!m.gradientMap,Mt=!!m.alphaMap,U=m.alphaTest>0,me=!!m.alphaHash,Te=!!m.extensions,He=!!x.attributes.uv1,V=!!x.attributes.uv2,St=!!x.attributes.uv3,ot=Ci;return m.toneMapped&&(Z!==null&&Z.isXRRenderTarget!==!0||(ot=r.toneMapping)),{isWebGL2:h,shaderID:O,shaderType:m.type,shaderName:m.name,vertexShader:A,fragmentShader:L,defines:m.defines,customVertexShaderID:H,customFragmentShaderID:oe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:G,instancing:ee,instancingColor:ee&&b.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:mi,map:J,matcap:ce,envMap:w,envMapMode:w&&D.mapping,envMapCubeUVHeight:I,aoMap:T,lightMap:k,bumpMap:K,normalMap:N,displacementMap:u&&$,emissiveMap:F,normalMapObjectSpace:N&&m.normalMapType===1,normalMapTangentSpace:N&&m.normalMapType===0,metalnessMap:z,roughnessMap:W,anisotropy:ne,anisotropyMap:X,clearcoat:te,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:be,sheen:se,sheenColorMap:fe,sheenRoughnessMap:ve,specularMap:we,specularColorMap:et,specularIntensityMap:ye,transmission:j,transmissionMap:Ne,thicknessMap:Le,gradientMap:Di,opaque:m.transparent===!1&&m.blending===1,alphaMap:Mt,alphaTest:U,alphaHash:me,combine:m.combine,mapUv:J&&g(m.map.channel),aoMapUv:T&&g(m.aoMap.channel),lightMapUv:k&&g(m.lightMap.channel),bumpMapUv:K&&g(m.bumpMap.channel),normalMapUv:N&&g(m.normalMap.channel),displacementMapUv:$&&g(m.displacementMap.channel),emissiveMapUv:F&&g(m.emissiveMap.channel),metalnessMapUv:z&&g(m.metalnessMap.channel),roughnessMapUv:W&&g(m.roughnessMap.channel),anisotropyMapUv:X&&g(m.anisotropyMap.channel),clearcoatMapUv:ae&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:be&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(m.sheenRoughnessMap.channel),specularMapUv:we&&g(m.specularMap.channel),specularColorMapUv:et&&g(m.specularColorMap.channel),specularIntensityMapUv:ye&&g(m.specularIntensityMap.channel),transmissionMapUv:Ne&&g(m.transmissionMap.channel),thicknessMapUv:Le&&g(m.thicknessMap.channel),alphaMapUv:Mt&&g(m.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(N||ne),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:V,vertexUv3s:St,pointsUvs:b.isPoints===!0&&!!x.attributes.uv&&(J||Mt),fog:!!C,useFog:m.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,useLegacyLights:r._useLegacyLights,decodeVideoTexture:J&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===je,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===bt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Te&&m.extensions.derivatives===!0,extensionFragDepth:Te&&m.extensions.fragDepth===!0,extensionDrawBuffers:Te&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&m.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)y.push(_),y.push(m.defines[_]);return m.isRawShaderMaterial===!1&&(function(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapCubeUVHeight),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.morphAttributeCount),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}(y,m),function(_,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),_.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),_.push(o.mask)}(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],_;if(y){let v=qt[y];_=hu.clone(v.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,y){let _;for(let v=0,b=c.length;v<b;v++){let C=c[v];if(C.cacheKey===y){_=C,++_.usedTimes;break}}return _===void 0&&(_=new Sd(r,y,m,s),c.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){let y=c.indexOf(m);c[y]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function wd(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Ad(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Tc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function wc(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Ad),i.length>1&&i.sort(o||Tc),n.length>1&&n.sort(o||Tc)}}}function Rd(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new wc,r.set(e,[n])):t>=i.length?(n=new wc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Cd(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new Ae};break;case"SpotLight":t={position:new S,direction:new S,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new S,halfWidth:new S,halfHeight:new S}}return r[e.id]=t,t}}}var Pd=0;function Ld(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Id(r,e){let t=new Cd,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let s=new S,a=new Ce,o=new Ce;return{setup:function(l,c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let p=0,f=0,g=0,m=0,y=0,_=0,v=0,b=0,C=0,x=0,E=0;l.sort(Ld);let D=c===!0?Math.PI:1;for(let O=0,B=l.length;O<B;O++){let P=l[O],A=P.color,L=P.intensity,H=P.distance,oe=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=A.r*L*D,d+=A.g*L*D,u+=A.b*L*D;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],L);E++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*D),P.castShadow){let Z=P.shadow,ee=i.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=P.shadow.matrix,_++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(A).multiplyScalar(L*D),q.distance=H,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[g]=q;let Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&x++),n.spotLightMatrix[g]=Z.matrix,P.castShadow){let ee=i.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,n.spotShadow[g]=ee,n.spotShadowMap[g]=oe,b++}g++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(A).multiplyScalar(L),q.halfWidth.set(.5*P.width,0,0),q.halfHeight.set(0,.5*P.height,0),n.rectArea[m]=q,m++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity*D),q.distance=P.distance,q.decay=P.decay,P.castShadow){let Z=P.shadow,ee=i.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=oe,n.pointShadowMatrix[f]=P.shadow.matrix,v++}n.point[f]=q,f++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(L*D),q.groundColor.copy(P.groundColor).multiplyScalar(L*D),n.hemi[y]=q,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;I.directionalLength===p&&I.pointLength===f&&I.spotLength===g&&I.rectAreaLength===m&&I.hemiLength===y&&I.numDirectionalShadows===_&&I.numPointShadows===v&&I.numSpotShadows===b&&I.numSpotMaps===C&&I.numLightProbes===E||(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=f,n.hemi.length=y,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+C-x,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=E,I.directionalLength=p,I.pointLength=f,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=y,I.numDirectionalShadows=_,I.numPointShadows=v,I.numSpotShadows=b,I.numSpotMaps=C,I.numLightProbes=E,n.version=Pd++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,f=0,g=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let _=l[m];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(_.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),a.copy(_.matrixWorld),a.premultiply(g),o.extractRotation(a),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[f];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),f++}}},state:n}}function Ac(r,e){let t=new Id(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function Dd(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new Ac(r,e),t.set(i,[a])):n>=s.length?(a=new Ac(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}var co=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ho=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ud(r,e,t){let i=new zn,n=new ie,s=new ie,a=new We,o=new co({depthPacking:3201}),l=new ho,c={},h=t.maxTextureSize,d={[Kt]:bt,[bt]:Kt,2:2},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new qe;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Se(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let y=this.type;function _(x,E){let D=e.update(g);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new fi(n.x,n.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(E,null,D,u,g,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(E,null,D,p,g,null)}function v(x,E,D,I){let O=null,B=D.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(B!==void 0)O=B;else if(O=D.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let P=O.uuid,A=E.uuid,L=c[P];L===void 0&&(L={},c[P]=L);let H=L[A];H===void 0&&(H=O.clone(),L[A]=H,E.addEventListener("dispose",C)),O=H}return O.visible=E.visible,O.wireframe=E.wireframe,O.side=I===di?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:d[E.side],O.alphaMap=E.alphaMap,O.alphaTest=E.alphaTest,O.map=E.map,O.clipShadows=E.clipShadows,O.clippingPlanes=E.clippingPlanes,O.clipIntersection=E.clipIntersection,O.displacementMap=E.displacementMap,O.displacementScale=E.displacementScale,O.displacementBias=E.displacementBias,O.wireframeLinewidth=E.wireframeLinewidth,O.linewidth=E.linewidth,D.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(r.properties.get(O).light=D),O}function b(x,E,D,I,O){if(x.visible===!1)return;if(x.layers.test(E.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&O===di)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,x.matrixWorld);let P=e.update(x),A=x.material;if(Array.isArray(A)){let L=P.groups;for(let H=0,oe=L.length;H<oe;H++){let q=L[H],Z=A[q.materialIndex];if(Z&&Z.visible){let ee=v(x,Z,I,O);x.onBeforeShadow(r,x,E,D,P,ee,q),r.renderBufferDirect(D,null,P,ee,x,q),x.onAfterShadow(r,x,E,D,P,ee,q)}}}else if(A.visible){let L=v(x,A,I,O);x.onBeforeShadow(r,x,E,D,P,L,null),r.renderBufferDirect(D,null,P,L,x,null),x.onAfterShadow(r,x,E,D,P,L,null)}}let B=x.children;for(let P=0,A=B.length;P<A;P++)b(B[P],E,D,I,O)}function C(x){x.target.removeEventListener("dispose",C);for(let E in c){let D=c[E],I=x.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}this.render=function(x,E,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let I=r.getRenderTarget(),O=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),P=r.state;P.setBlending(0),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let A=y!==di&&this.type===di,L=y===di&&this.type!==di;for(let H=0,oe=x.length;H<oe;H++){let q=x[H],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;n.copy(Z.mapSize);let ee=Z.getFrameExtents();if(n.multiply(ee),s.copy(Z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ee.x),n.x=s.x*ee.x,Z.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ee.y),n.y=s.y*ee.y,Z.mapSize.y=s.y)),Z.map===null||A===!0||L===!0){let J=this.type!==di?{minFilter:vt,magFilter:vt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new fi(n.x,n.y,J),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();let G=Z.getViewportCount();for(let J=0;J<G;J++){let ce=Z.getViewport(J);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),P.viewport(a),Z.updateMatrices(q,J),i=Z.getFrustum(),b(E,D,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===di&&_(Z,D),Z.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(I,O,B)}}function Nd(r,e,t){let i=t.isWebGL2,n=new function(){let M=!1,se=new We,j=null,X=new We(0,0,0,0);return{setMask:function(ae){j===ae||M||(r.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){M=ae},setClear:function(ae,ue,de,ge,be){be===!0&&(ae*=ge,ue*=ge,de*=ge),se.set(ae,ue,de,ge),X.equals(se)===!1&&(r.clearColor(ae,ue,de,ge),X.copy(se))},reset:function(){M=!1,j=null,X.set(-1,0,0,0)}}},s=new function(){let M=!1,se=null,j=null,X=null;return{setTest:function(ae){ae?K(r.DEPTH_TEST):N(r.DEPTH_TEST)},setMask:function(ae){se===ae||M||(r.depthMask(ae),se=ae)},setFunc:function(ae){if(j!==ae){switch(ae){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}j=ae}},setLocked:function(ae){M=ae},setClear:function(ae){X!==ae&&(r.clearDepth(ae),X=ae)},reset:function(){M=!1,se=null,j=null,X=null}}},a=new function(){let M=!1,se=null,j=null,X=null,ae=null,ue=null,de=null,ge=null,be=null;return{setTest:function(fe){M||(fe?K(r.STENCIL_TEST):N(r.STENCIL_TEST))},setMask:function(fe){se===fe||M||(r.stencilMask(fe),se=fe)},setFunc:function(fe,ve,we){j===fe&&X===ve&&ae===we||(r.stencilFunc(fe,ve,we),j=fe,X=ve,ae=we)},setOp:function(fe,ve,we){ue===fe&&de===ve&&ge===we||(r.stencilOp(fe,ve,we),ue=fe,de=ve,ge=we)},setLocked:function(fe){M=fe},setClear:function(fe){be!==fe&&(r.clearStencil(fe),be=fe)},reset:function(){M=!1,se=null,j=null,X=null,ae=null,ue=null,de=null,ge=null,be=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,f=!1,g=null,m=null,y=null,_=null,v=null,b=null,C=null,x=new Ae(0,0,0),E=0,D=!1,I=null,O=null,B=null,P=null,A=null,L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,oe=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=oe>=2);let Z=null,ee={},G=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ce=new We().fromArray(G),w=new We().fromArray(J);function T(M,se,j,X){let ae=new Uint8Array(4),ue=r.createTexture();r.bindTexture(M,ue),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<j;de++)!i||M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY?r.texImage2D(se+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage3D(se,0,r.RGBA,1,1,X,0,r.RGBA,r.UNSIGNED_BYTE,ae);return ue}let k={};function K(M){c[M]!==!0&&(r.enable(M),c[M]=!0)}function N(M){c[M]!==!1&&(r.disable(M),c[M]=!1)}k[r.TEXTURE_2D]=T(r.TEXTURE_2D,r.TEXTURE_2D,1),k[r.TEXTURE_CUBE_MAP]=T(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(k[r.TEXTURE_2D_ARRAY]=T(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),k[r.TEXTURE_3D]=T(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(r.DEPTH_TEST),s.setFunc(3),W(!1),ne(1),K(r.CULL_FACE),z(0);let $={[Wi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)$[103]=r.MIN,$[104]=r.MAX;else{let M=e.get("EXT_blend_minmax");M!==null&&($[103]=M.MIN_EXT,$[104]=M.MAX_EXT)}let F={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Wa]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[ja]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function z(M,se,j,X,ae,ue,de,ge,be,fe){if(M!==0){if(f===!1&&(K(r.BLEND),f=!0),M===5)ae=ae||se,ue=ue||j,de=de||X,se===m&&ae===v||(r.blendEquationSeparate($[se],$[ae]),m=se,v=ae),j===y&&X===_&&ue===b&&de===C||(r.blendFuncSeparate(F[j],F[X],F[ue],F[de]),y=j,_=X,b=ue,C=de),ge.equals(x)!==!1&&be===E||(r.blendColor(ge.r,ge.g,ge.b,be),x.copy(ge),E=be),g=M,D=!1;else if(M!==g||fe!==D){if(m===Wi&&v===Wi||(r.blendEquation(r.FUNC_ADD),m=Wi,v=Wi),fe)switch(M){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}y=null,_=null,b=null,C=null,x.set(0,0,0),E=0,g=M,D=fe}}else f===!0&&(N(r.BLEND),f=!1)}function W(M){I!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),I=M)}function ne(M){M!==0?(K(r.CULL_FACE),M!==O&&(M===1?r.cullFace(r.BACK):M===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):N(r.CULL_FACE),O=M}function te(M,se,j){M?(K(r.POLYGON_OFFSET_FILL),P===se&&A===j||(r.polygonOffset(se,j),P=se,A=j)):N(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:s,stencil:a},enable:K,disable:N,bindFramebuffer:function(M,se){return h[M]!==se&&(r.bindFramebuffer(M,se),h[M]=se,i&&(M===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=se),M===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(M,se){let j=u,X=!1;if(M)if(j=d.get(se),j===void 0&&(j=[],d.set(se,j)),M.isWebGLMultipleRenderTargets){let ae=M.texture;if(j.length!==ae.length||j[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,de=ae.length;ue<de;ue++)j[ue]=r.COLOR_ATTACHMENT0+ue;j.length=ae.length,X=!0}}else j[0]!==r.COLOR_ATTACHMENT0&&(j[0]=r.COLOR_ATTACHMENT0,X=!0);else j[0]!==r.BACK&&(j[0]=r.BACK,X=!0);X&&(t.isWebGL2?r.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))},useProgram:function(M){return p!==M&&(r.useProgram(M),p=M,!0)},setBlending:z,setMaterial:function(M,se){M.side===2?N(r.CULL_FACE):K(r.CULL_FACE);let j=M.side===bt;se&&(j=!j),W(j),M.blending===1&&M.transparent===!1?z(0):z(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),n.setMask(M.colorWrite);let X=M.stencilWrite;a.setTest(X),X&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),te(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):N(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:W,setCullFace:ne,setLineWidth:function(M){M!==B&&(H&&r.lineWidth(M),B=M)},setPolygonOffset:te,setScissorTest:function(M){M?K(r.SCISSOR_TEST):N(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+L-1),Z!==M&&(r.activeTexture(M),Z=M)},bindTexture:function(M,se,j){j===void 0&&(j=Z===null?r.TEXTURE0+L-1:Z);let X=ee[j];X===void 0&&(X={type:void 0,texture:void 0},ee[j]=X),X.type===M&&X.texture===se||(Z!==j&&(r.activeTexture(j),Z=j),r.bindTexture(M,se||k[M]),X.type=M,X.texture=se)},unbindTexture:function(){let M=ee[Z];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,se){let j=l.get(se);j===void 0&&(j=new WeakMap,l.set(se,j));let X=j.get(M);X===void 0&&(X=r.getUniformBlockIndex(se,M.name),j.set(M,X))},uniformBlockBinding:function(M,se){let j=l.get(se).get(M);o.get(se)!==j&&(r.uniformBlockBinding(se,j,M.__bindingPointIndex),o.set(se,j))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ce.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),ce.copy(M))},viewport:function(M){w.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),w.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Z=null,ee={},h={},d=new WeakMap,u=[],p=null,f=!1,g=null,m=null,y=null,_=null,v=null,b=null,C=null,x=new Ae(0,0,0),E=0,D=!1,I=null,O=null,B=null,P=null,A=null,ce.set(0,0,r.canvas.width,r.canvas.height),w.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Od(r,e,t,i,n,s,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,T){return p?new OffscreenCanvas(w,T):xs("canvas")}function g(w,T,k,K){let N=1;if((w.width>K||w.height>K)&&(N=K/Math.max(w.width,w.height)),N<1||T===!0){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let $=T?ys:Math.floor,F=$(N*w.width),z=$(N*w.height);d===void 0&&(d=f(F,z));let W=k?f(F,z):d;return W.width=F,W.height=z,W.getContext("2d").drawImage(w,0,0,F,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+F+"x"+z+")."),W}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w}return w}function m(w){return Ka(w.width)&&Ka(w.height)}function y(w,T){return w.generateMipmaps&&T&&w.minFilter!==vt&&w.minFilter!==Vt}function _(w){r.generateMipmap(w)}function v(w,T,k,K,N=!1){if(o===!1)return T;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=T;if(T===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),T===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RGBA){let F=N?fs:Ve.getTransfer(K);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=F===je?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return $!==r.R16F&&$!==r.R32F&&$!==r.RG16F&&$!==r.RG32F&&$!==r.RGBA16F&&$!==r.RGBA32F||e.get("EXT_color_buffer_float"),$}function b(w,T,k){return y(w,k)===!0||w.isFramebufferTexture&&w.minFilter!==vt&&w.minFilter!==Vt?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function C(w){return w===vt||w===ml||w===sa?r.NEAREST:r.LINEAR}function x(w){let T=w.target;T.removeEventListener("dispose",x),function(k){let K=i.get(k);if(K.__webglInit===void 0)return;let N=k.source,$=u.get(N);if($){let F=$[K.__cacheKey];F.usedTimes--,F.usedTimes===0&&D(k),Object.keys($).length===0&&u.delete(N)}i.remove(k)}(T),T.isVideoTexture&&h.delete(T)}function E(w){let T=w.target;T.removeEventListener("dispose",E),function(k){let K=k.texture,N=i.get(k),$=i.get(K);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(N.__webglFramebuffer[F]))for(let z=0;z<N.__webglFramebuffer[F].length;z++)r.deleteFramebuffer(N.__webglFramebuffer[F][z]);else r.deleteFramebuffer(N.__webglFramebuffer[F]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[F])}else{if(Array.isArray(N.__webglFramebuffer))for(let F=0;F<N.__webglFramebuffer.length;F++)r.deleteFramebuffer(N.__webglFramebuffer[F]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let F=0;F<N.__webglColorRenderbuffer.length;F++)N.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[F]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let F=0,z=K.length;F<z;F++){let W=i.get(K[F]);W.__webglTexture&&(r.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(K[F])}i.remove(K),i.remove(k)}(T)}function D(w){let T=i.get(w);r.deleteTexture(T.__webglTexture);let k=w.source;delete u.get(k)[T.__cacheKey],a.memory.textures--}let I=0;function O(w,T){let k=i.get(w);if(w.isVideoTexture&&function(K){let N=a.render.frame;h.get(K)!==N&&(h.set(K,N),K.update())}(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(K.complete!==!1)return void oe(k,w,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+T)}let B={[ur]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[Ya]:r.MIRRORED_REPEAT},P={[vt]:r.NEAREST,[ml]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[Vt]:r.LINEAR,[Yh]:r.LINEAR_MIPMAP_NEAREST,[ds]:r.LINEAR_MIPMAP_LINEAR},A={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function L(w,T,k){if(k?(r.texParameteri(w,r.TEXTURE_WRAP_S,B[T.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,B[T.wrapT]),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,B[T.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,P[T.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,P[T.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),w!==r.TEXTURE_3D&&w!==r.TEXTURE_2D_ARRAY||r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),T.wrapS===pi&&T.wrapT===pi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,C(T.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,C(T.minFilter)),T.minFilter!==vt&&T.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,A[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let K=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===vt||T.minFilter!==sa&&T.minFilter!==ds||T.type===Ai&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function H(w,T){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",x));let K=T.source,N=u.get(K);N===void 0&&(N={},u.set(K,N));let $=function(F){let z=[];return z.push(F.wrapS),z.push(F.wrapT),z.push(F.wrapR||0),z.push(F.magFilter),z.push(F.minFilter),z.push(F.anisotropy),z.push(F.internalFormat),z.push(F.format),z.push(F.type),z.push(F.generateMipmaps),z.push(F.premultiplyAlpha),z.push(F.flipY),z.push(F.unpackAlignment),z.push(F.colorSpace),z.join()}(T);if($!==w.__cacheKey){N[$]===void 0&&(N[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),N[$].usedTimes++;let F=N[w.__cacheKey];F!==void 0&&(N[w.__cacheKey].usedTimes--,F.usedTimes===0&&D(T)),w.__cacheKey=$,w.__webglTexture=N[$].texture}return k}function oe(w,T,k){let K=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=r.TEXTURE_3D);let N=H(w,T),$=T.source;t.bindTexture(K,w.__webglTexture,r.TEXTURE0+k);let F=i.get($);if($.version!==F.__version||N===!0){t.activeTexture(r.TEXTURE0+k);let z=Ve.getPrimaries(Ve.workingColorSpace),W=T.colorSpace===Zt?null:Ve.getPrimaries(T.colorSpace),ne=T.colorSpace===Zt||z===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let te=function(ve){return!o&&(ve.wrapS!==pi||ve.wrapT!==pi||ve.minFilter!==vt&&ve.minFilter!==Vt)}(T)&&m(T.image)===!1,M=g(T.image,te,!1,n.maxTextureSize);M=ce(T,M);let se=m(M)||o,j=s.convert(T.format,T.colorSpace),X,ae=s.convert(T.type),ue=v(T.internalFormat,j,ae,T.colorSpace,T.isVideoTexture);L(K,T,se);let de=T.mipmaps,ge=o&&T.isVideoTexture!==!0&&ue!==Kc,be=F.__version===void 0||N===!0,fe=b(T,M,se);if(T.isDepthTexture)ue=r.DEPTH_COMPONENT,o?ue=T.type===Ai?r.DEPTH_COMPONENT32F:T.type===wi?r.DEPTH_COMPONENT24:T.type===Yi?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:T.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Zi&&ue===r.DEPTH_COMPONENT&&T.type!==qo&&T.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=wi,ae=s.convert(T.type)),T.format===Nn&&ue===r.DEPTH_COMPONENT&&(ue=r.DEPTH_STENCIL,T.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Yi,ae=s.convert(T.type))),be&&(ge?t.texStorage2D(r.TEXTURE_2D,1,ue,M.width,M.height):t.texImage2D(r.TEXTURE_2D,0,ue,M.width,M.height,0,j,ae,null));else if(T.isDataTexture)if(de.length>0&&se){ge&&be&&t.texStorage2D(r.TEXTURE_2D,fe,ue,de[0].width,de[0].height);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],ge?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,X.width,X.height,j,ae,X.data):t.texImage2D(r.TEXTURE_2D,ve,ue,X.width,X.height,0,j,ae,X.data);T.generateMipmaps=!1}else ge?(be&&t.texStorage2D(r.TEXTURE_2D,fe,ue,M.width,M.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,j,ae,M.data)):t.texImage2D(r.TEXTURE_2D,0,ue,M.width,M.height,0,j,ae,M.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ge&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ue,de[0].width,de[0].height,M.depth);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],T.format!==Yt?j!==null?ge?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,X.width,X.height,M.depth,j,X.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ue,X.width,X.height,M.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,X.width,X.height,M.depth,j,ae,X.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,ue,X.width,X.height,M.depth,0,j,ae,X.data)}else{ge&&be&&t.texStorage2D(r.TEXTURE_2D,fe,ue,de[0].width,de[0].height);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],T.format!==Yt?j!==null?ge?t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,X.width,X.height,j,X.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,ue,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,X.width,X.height,j,ae,X.data):t.texImage2D(r.TEXTURE_2D,ve,ue,X.width,X.height,0,j,ae,X.data)}else if(T.isDataArrayTexture)ge?(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ue,M.width,M.height,M.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,j,ae,M.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,M.width,M.height,M.depth,0,j,ae,M.data);else if(T.isData3DTexture)ge?(be&&t.texStorage3D(r.TEXTURE_3D,fe,ue,M.width,M.height,M.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,j,ae,M.data)):t.texImage3D(r.TEXTURE_3D,0,ue,M.width,M.height,M.depth,0,j,ae,M.data);else if(T.isFramebufferTexture){if(be)if(ge)t.texStorage2D(r.TEXTURE_2D,fe,ue,M.width,M.height);else{let ve=M.width,we=M.height;for(let et=0;et<fe;et++)t.texImage2D(r.TEXTURE_2D,et,ue,ve,we,0,j,ae,null),ve>>=1,we>>=1}}else if(de.length>0&&se){ge&&be&&t.texStorage2D(r.TEXTURE_2D,fe,ue,de[0].width,de[0].height);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],ge?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,j,ae,X):t.texImage2D(r.TEXTURE_2D,ve,ue,j,ae,X);T.generateMipmaps=!1}else ge?(be&&t.texStorage2D(r.TEXTURE_2D,fe,ue,M.width,M.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j,ae,M)):t.texImage2D(r.TEXTURE_2D,0,ue,j,ae,M);y(T,se)&&_(K),F.__version=$.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function q(w,T,k,K,N,$){let F=s.convert(k.format,k.colorSpace),z=s.convert(k.type),W=v(k.internalFormat,F,z,k.colorSpace);if(!i.get(T).__hasExternalTextures){let ne=Math.max(1,T.width>>$),te=Math.max(1,T.height>>$);N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?t.texImage3D(N,$,W,ne,te,T.depth,0,F,z,null):t.texImage2D(N,$,W,ne,te,0,F,z,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),J(T)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,N,i.get(k).__webglTexture,0,G(T)):(N===r.TEXTURE_2D||N>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,N,i.get(k).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(w,T,k){if(r.bindRenderbuffer(r.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let K=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||J(T)){let N=T.depthTexture;N&&N.isDepthTexture&&(N.type===Ai?K=r.DEPTH_COMPONENT32F:N.type===wi&&(K=r.DEPTH_COMPONENT24));let $=G(T);J(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,K,T.width,T.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,$,K,T.width,T.height)}else r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){let K=G(T);k&&J(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,K,r.DEPTH24_STENCIL8,T.width,T.height):J(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,r.DEPTH24_STENCIL8,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{let K=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let N=0;N<K.length;N++){let $=K[N],F=s.convert($.format,$.colorSpace),z=s.convert($.type),W=v($.internalFormat,F,z,$.colorSpace),ne=G(T);k&&J(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,W,T.width,T.height):J(T)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,W,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,W,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(w){let T=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");(function(K,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,K),!N.depthTexture||!N.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(N.depthTexture).__webglTexture&&N.depthTexture.image.width===N.width&&N.depthTexture.image.height===N.height||(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),O(N.depthTexture,0);let $=i.get(N.depthTexture).__webglTexture,F=G(N);if(N.depthTexture.format===Zi)J(N)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else{if(N.depthTexture.format!==Nn)throw new Error("Unknown depthTexture format");J(N)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,F):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0)}})(T.__webglFramebuffer,w)}else if(k){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]=r.createRenderbuffer(),Z(T.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=r.createRenderbuffer(),Z(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function G(w){return Math.min(n.maxSamples,w.samples)}function J(w){let T=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(w,T){let k=w.colorSpace,K=w.format,N=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===$a||k!==mi&&k!==Zt&&(Ve.getTransfer(k)===je?o===!1?e.has("EXT_sRGB")===!0&&K===Yt?(w.format=$a,w.minFilter=Vt,w.generateMipmaps=!1):T=bs.sRGBToLinear(T):K===Yt&&N===qi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),T}this.allocateTextureUnit=function(){let w=I;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),I+=1,w},this.resetTextureUnits=function(){I=0},this.setTexture2D=O,this.setTexture2DArray=function(w,T){let k=i.get(w);w.version>0&&k.__version!==w.version?oe(k,w,T):t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+T)},this.setTexture3D=function(w,T){let k=i.get(w);w.version>0&&k.__version!==w.version?oe(k,w,T):t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(w,T){let k=i.get(w);w.version>0&&k.__version!==w.version?function(K,N,$){if(N.image.length!==6)return;let F=H(K,N),z=N.source;t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+$);let W=i.get(z);if(z.version!==W.__version||F===!0){t.activeTexture(r.TEXTURE0+$);let ne=Ve.getPrimaries(Ve.workingColorSpace),te=N.colorSpace===Zt?null:Ve.getPrimaries(N.colorSpace),M=N.colorSpace===Zt||ne===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,N.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,N.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let se=N.isCompressedTexture||N.image[0].isCompressedTexture,j=N.image[0]&&N.image[0].isDataTexture,X=[];for(let ye=0;ye<6;ye++)X[ye]=se||j?j?N.image[ye].image:N.image[ye]:g(N.image[ye],!1,!0,n.maxCubemapSize),X[ye]=ce(N,X[ye]);let ae=X[0],ue=m(ae)||o,de=s.convert(N.format,N.colorSpace),ge=s.convert(N.type),be=v(N.internalFormat,de,ge,N.colorSpace),fe=o&&N.isVideoTexture!==!0,ve=W.__version===void 0||F===!0,we,et=b(N,ae,ue);if(L(r.TEXTURE_CUBE_MAP,N,ue),se){fe&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,et,be,ae.width,ae.height);for(let ye=0;ye<6;ye++){we=X[ye].mipmaps;for(let Ne=0;Ne<we.length;Ne++){let Le=we[Ne];N.format!==Yt?de!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,0,0,Le.width,Le.height,de,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,be,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,0,0,Le.width,Le.height,de,ge,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne,be,Le.width,Le.height,0,de,ge,Le.data)}}}else{we=N.mipmaps,fe&&ve&&(we.length>0&&et++,t.texStorage2D(r.TEXTURE_CUBE_MAP,et,be,X[0].width,X[0].height));for(let ye=0;ye<6;ye++)if(j){fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,X[ye].width,X[ye].height,de,ge,X[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,be,X[ye].width,X[ye].height,0,de,ge,X[ye].data);for(let Ne=0;Ne<we.length;Ne++){let Le=we[Ne].image[ye].image;fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,0,0,Le.width,Le.height,de,ge,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,be,Le.width,Le.height,0,de,ge,Le.data)}}else{fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de,ge,X[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,be,de,ge,X[ye]);for(let Ne=0;Ne<we.length;Ne++){let Le=we[Ne];fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,0,0,de,ge,Le.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ne+1,be,de,ge,Le.image[ye])}}}y(N,ue)&&_(r.TEXTURE_CUBE_MAP),W.__version=z.version,N.onUpdate&&N.onUpdate(N)}K.__version=N.version}(k,w,T):t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(w,T,k){let K=i.get(w);T!==void 0&&q(K.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&ee(w)},this.setupRenderTarget=function(w){let T=w.texture,k=i.get(w),K=i.get(T);w.addEventListener("dispose",E),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=T.version,a.memory.textures++);let N=w.isWebGLCubeRenderTarget===!0,$=w.isWebGLMultipleRenderTargets===!0,F=m(w)||o;if(N){k.__webglFramebuffer=[];for(let z=0;z<6;z++)if(o&&T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer[z]=[];for(let W=0;W<T.mipmaps.length;W++)k.__webglFramebuffer[z][W]=r.createFramebuffer()}else k.__webglFramebuffer[z]=r.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){k.__webglFramebuffer=[];for(let z=0;z<T.mipmaps.length;z++)k.__webglFramebuffer[z]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if($)if(n.drawBuffers){let z=w.texture;for(let W=0,ne=z.length;W<ne;W++){let te=i.get(z[W]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&J(w)===!1){let z=$?T:[T];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let W=0;W<z.length;W++){let ne=z[W];k.__webglColorRenderbuffer[W]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[W]);let te=s.convert(ne.format,ne.colorSpace),M=s.convert(ne.type),se=v(ne.internalFormat,te,M,ne.colorSpace,w.isXRRenderTarget===!0),j=G(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,se,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+W,r.RENDERBUFFER,k.__webglColorRenderbuffer[W])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(N){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),L(r.TEXTURE_CUBE_MAP,T,F);for(let z=0;z<6;z++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)q(k.__webglFramebuffer[z][W],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+z,W);else q(k.__webglFramebuffer[z],w,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);y(T,F)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){let z=w.texture;for(let W=0,ne=z.length;W<ne;W++){let te=z[W],M=i.get(te);t.bindTexture(r.TEXTURE_2D,M.__webglTexture),L(r.TEXTURE_2D,te,F),q(k.__webglFramebuffer,w,te,r.COLOR_ATTACHMENT0+W,r.TEXTURE_2D,0),y(te,F)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let z=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?z=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(z,K.__webglTexture),L(z,T,F),o&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)q(k.__webglFramebuffer[W],w,T,r.COLOR_ATTACHMENT0,z,W);else q(k.__webglFramebuffer,w,T,r.COLOR_ATTACHMENT0,z,0);y(T,F)&&_(z),t.unbindTexture()}w.depthBuffer&&ee(w)},this.updateRenderTargetMipmap=function(w){let T=m(w)||o,k=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,N=k.length;K<N;K++){let $=k[K];if(y($,T)){let F=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,z=i.get($).__webglTexture;t.bindTexture(F,z),_(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(o&&w.samples>0&&J(w)===!1){let T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],k=w.width,K=w.height,N=r.COLOR_BUFFER_BIT,$=[],F=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=i.get(w),W=w.isWebGLMultipleRenderTargets===!0;if(W)for(let ne=0;ne<T.length;ne++)t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,z.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,z.__webglFramebuffer);for(let ne=0;ne<T.length;ne++){$.push(r.COLOR_ATTACHMENT0+ne),w.depthBuffer&&$.push(F);let te=z.__ignoreDepthValues!==void 0&&z.__ignoreDepthValues;if(te===!1&&(w.depthBuffer&&(N|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(N|=r.STENCIL_BUFFER_BIT)),W&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,z.__webglColorRenderbuffer[ne]),te===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[F]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[F])),W){let M=i.get(T[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,M,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,N,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),W)for(let ne=0;ne<T.length;ne++){t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,z.__webglColorRenderbuffer[ne]);let te=i.get(T[ne]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,z.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=q,this.useMultisampledRTT=J}function Fd(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=""){let a,o=Ve.getTransfer(s);if(n===qi)return r.UNSIGNED_BYTE;if(n===qc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Yc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===Xc)return r.INT;if(n===wi)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===dr)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===Yt)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===Zi)return r.DEPTH_COMPONENT;if(n===Nn)return r.DEPTH_STENCIL;if(n===$a)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===Zc)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===$c)return r.RG_INTEGER;if(n===Jc)return r.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(o===je){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===fl||n===gl||n===vl||n===_l){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_l)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Kc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===yl||n===xl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===yl)return o===je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===xl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===bl||n===Ml||n===Sl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Ul){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===bl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===ha||n===Nl||n===Ol){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===ha)return o===je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===Fl||n===zl||n===Bl){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===ha)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Yi?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}var uo=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},zd={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},po=class extends Qt{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,g=t.getContextAttributes(),m=null,y=null,_=[],v=[],b=new ie,C=null,x=new yt;x.layers.enable(1),x.viewport=new We;let E=new yt;E.layers.enable(2),E.viewport=new We;let D=[x,E],I=new uo;I.layers.enable(1),I.layers.enable(2);let O=null,B=null;function P(G){let J=v.indexOf(G.inputSource);if(J===-1)return;let ce=_[J];ce!==void 0&&(ce.update(G.inputSource,G.frame,c||a),ce.dispatchEvent({type:G.type,data:G.inputSource}))}function A(){n.removeEventListener("select",P),n.removeEventListener("selectstart",P),n.removeEventListener("selectend",P),n.removeEventListener("squeeze",P),n.removeEventListener("squeezestart",P),n.removeEventListener("squeezeend",P),n.removeEventListener("end",A),n.removeEventListener("inputsourceschange",L);for(let G=0;G<_.length;G++){let J=v[G];J!==null&&(v[G]=null,_[G].disconnect(J))}O=null,B=null,e.setRenderTarget(m),p=null,u=null,d=null,n=null,y=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}function L(G){for(let J=0;J<G.removed.length;J++){let ce=G.removed[J],w=v.indexOf(ce);w>=0&&(v[w]=null,_[w].disconnect(ce))}for(let J=0;J<G.added.length;J++){let ce=G.added[J],w=v.indexOf(ce);if(w===-1){for(let k=0;k<_.length;k++){if(k>=v.length){v.push(ce),w=k;break}if(v[k]===null){v[k]=ce,w=k;break}}if(w===-1)break}let T=_[w];T&&T.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let J=_[G];return J===void 0&&(J=new or,_[G]=J),J.getTargetRaySpace()},this.getControllerGrip=function(G){let J=_[G];return J===void 0&&(J=new or,_[G]=J),J.getGripSpace()},this.getHand=function(G){let J=_[G];return J===void 0&&(J=new or,_[G]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",A),n.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let J={antialias:n.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,J),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,ce=null,w=null;g.depth&&(w=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=g.stencil?Nn:Zi,ce=g.stencil?Yi:wi);let T={colorFormat:t.RGBA8,depthFormat:w,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(T),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new fi(u.textureWidth,u.textureHeight,{format:Yt,type:qi,depthTexture:new Cs(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let H=new S,oe=new S;function q(G,J){J===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(J.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;I.near=E.near=x.near=G.near,I.far=E.far=x.far=G.far,O===I.near&&B===I.far||(n.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,B=I.far);let J=G.parent,ce=I.cameras;q(I,J);for(let w=0;w<ce.length;w++)q(ce[w],J);ce.length===2?function(w,T,k){H.setFromMatrixPosition(T.matrixWorld),oe.setFromMatrixPosition(k.matrixWorld);let K=H.distanceTo(oe),N=T.projectionMatrix.elements,$=k.projectionMatrix.elements,F=N[14]/(N[10]-1),z=N[14]/(N[10]+1),W=(N[9]+1)/N[5],ne=(N[9]-1)/N[5],te=(N[8]-1)/N[0],M=($[8]+1)/$[0],se=F*te,j=F*M,X=K/(-te+M),ae=X*-te;T.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(ae),w.translateZ(X),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();let ue=F+X,de=z+X,ge=se-ae,be=j+(K-ae),fe=W*z/de*ue,ve=ne*z/de*ue;w.projectionMatrix.makePerspective(ge,be,fe,ve,ue,de),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}(I,x,E):I.projectionMatrix.copy(x.projectionMatrix),function(w,T,k){k===null?w.matrix.copy(T.matrixWorld):(w.matrix.copy(k.matrixWorld),w.matrix.invert(),w.matrix.multiply(T.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*pr*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}(G,I,J)},this.getCamera=function(){return I},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(G){l=G,u!==null&&(u.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)};let Z=null,ee=new rh;ee.setAnimationLoop(function(G,J){if(h=J.getViewerPose(c||a),f=J,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let w=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,w=!0);for(let T=0;T<ce.length;T++){let k=ce[T],K=null;if(p!==null)K=p.getViewport(k);else{let $=d.getViewSubImage(u,k);K=$.viewport,T===0&&(e.setRenderTargetTextures(y,$.colorTexture,u.ignoreDepthValues?void 0:$.depthStencilTexture),e.setRenderTarget(y))}let N=D[T];N===void 0&&(N=new yt,N.layers.enable(T),N.viewport=new We,D[T]=N),N.matrix.fromArray(k.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(k.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(K.x,K.y,K.width,K.height),T===0&&(I.matrix.copy(N.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),w===!0&&I.cameras.push(N)}}for(let ce=0;ce<_.length;ce++){let w=v[ce],T=_[ce];w!==null&&T!==void 0&&T.update(w,J,c||a)}Z&&Z(G,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),f=null}),this.setAnimationLoop=function(G){Z=G},this.dispose=function(){}}};function Bd(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===bt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===bt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,nh(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(n,s)):s.isMeshStandardMaterial?(i(n,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(n,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Hd(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,p,f){let g=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&(function(m){let y=m.uniforms,_=0,v=16;for(let C=0,x=y.length;C<x;C++){let E=Array.isArray(y[C])?y[C]:[y[C]];for(let D=0,I=E.length;D<I;D++){let O=E[D],B=Array.isArray(O.value)?O.value:[O.value];for(let P=0,A=B.length;P<A;P++){let L=c(B[P]),H=_%v;H!==0&&v-H<L.boundary&&(_+=v-H),O.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=L.storage}}}let b=_%v;b>0&&(_+=v-b),m.__size=_,m.__cache={}}(d),p=function(m){let y=function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=y;let _=r.createBuffer(),v=m.__size,b=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,v,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,_),_}(d),n[d.id]=p,d.addEventListener("dispose",h));let f=u.program;i.updateUBOMapping(d,f);let g=e.render.frame;s[d.id]!==g&&(function(m){let y=n[m.id],_=m.uniforms,v=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,C=_.length;b<C;b++){let x=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,D=x.length;E<D;E++){let I=x[E];if(l(I,b,E,v)===!0){let O=I.__offset,B=Array.isArray(I.value)?I.value:[I.value],P=0;for(let A=0;A<B.length;A++){let L=B[A],H=c(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,O+P,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,P),P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=g)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}var gr=class{constructor(e={}){let{canvas:t=Zh(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),g=null,m=null,y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;let v=this,b=!1,C=0,x=0,E=null,D=-1,I=null,O=new We,B=new We,P=null,A=new Ae(0),L=0,H=t.width,oe=t.height,q=1,Z=null,ee=null,G=new We(0,0,H,oe),J=new We(0,0,H,oe),ce=!1,w=new zn,T=!1,k=!1,K=null,N=new Ce,$=new ie,F=new S,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function W(){return E===null?q:1}let ne,te,M,se,j,X,ae,ue,de,ge,be,fe,ve,we,et,ye,Ne,Le,Di,Mt,U,me,Te,He,V=i;function St(R,Y){for(let Q=0;Q<R.length;Q++){let le=R[Q],re=t.getContext(le,Y);if(re!==null)return re}return null}try{let R={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",Cr,!1),t.addEventListener("webglcontextrestored",qn,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),V===null){let Y=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Y.shift(),V=St(Y,R),V===null)throw St(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function ot(){ne=new bu(V),te=new vu(V,ne,e),ne.init(te),me=new Fd(V,ne,te),M=new Nd(V,ne,te),se=new Eu(V),j=new wd,X=new Od(V,ne,M,j,te,me,se),ae=new yu(v),ue=new xu(v),de=new pu(V,te),Te=new fu(V,ne,de,te),ge=new Mu(V,de,se,Te),be=new Ru(V,ge,de,se),Di=new Au(V,te,X),ye=new _u(j),fe=new Td(v,ae,ue,ne,te,Te,ye),ve=new Bd(v,j),we=new Rd,et=new Dd(ne,te),Le=new mu(v,ae,ue,M,be,u,l),Ne=new Ud(v,be,te),He=new Hd(V,se,te,M),Mt=new gu(V,ne,se,te),U=new Su(V,ne,se,te),se.programs=fe.programs,v.capabilities=te,v.extensions=ne,v.properties=j,v.renderLists=we,v.shadowMap=Ne,v.state=M,v.info=se}ot();let ct=new po(v,V);function Cr(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function qn(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let R=se.autoReset,Y=Ne.enabled,Q=Ne.autoUpdate,le=Ne.needsUpdate,re=Ne.type;ot(),se.autoReset=R,Ne.enabled=Y,Ne.autoUpdate=Q,Ne.needsUpdate=le,Ne.type=re}function Pt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Lt(R){let Y=R.target;Y.removeEventListener("dispose",Lt),function(Q){(function(le){let re=j.get(le).programs;re!==void 0&&(re.forEach(function(pe){fe.releaseProgram(pe)}),le.isShaderMaterial&&fe.releaseShaderCache(le))})(Q),j.remove(Q)}(Y)}function ln(R,Y,Q){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=bt,R.needsUpdate=!0,Lr(R,Y,Q),R.side=Kt,R.needsUpdate=!0,Lr(R,Y,Q),R.side=2):Lr(R,Y,Q)}this.xr=ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(H,oe,!1))},this.getSize=function(R){return R.set(H,oe)},this.setSize=function(R,Y,Q=!0){ct.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(H=R,oe=Y,t.width=Math.floor(R*q),t.height=Math.floor(Y*q),Q===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y))},this.getDrawingBufferSize=function(R){return R.set(H*q,oe*q).floor()},this.setDrawingBufferSize=function(R,Y,Q){H=R,oe=Y,q=Q,t.width=Math.floor(R*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,Y,Q,le){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,Y,Q,le),M.viewport(O.copy(G).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,Y,Q,le){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Y,Q,le),M.scissor(B.copy(J).multiplyScalar(q).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){M.setScissorTest(ce=R)},this.setOpaqueSort=function(R){Z=R},this.setTransparentSort=function(R){ee=R},this.getClearColor=function(R){return R.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(R=!0,Y=!0,Q=!0){let le=0;if(R){let re=!1;if(E!==null){let pe=E.texture.format;re=pe===Jc||pe===$c||pe===Zc}if(re){let pe=E.texture.type,xe=pe===qi||pe===wi||pe===qo||pe===Yi||pe===qc||pe===Yc,Me=Le.getClearColor(),Ie=Le.getClearAlpha(),Ue=Me.r,Oe=Me.g,Fe=Me.b;xe?(p[0]=Ue,p[1]=Oe,p[2]=Fe,p[3]=Ie,V.clearBufferuiv(V.COLOR,0,p)):(f[0]=Ue,f[1]=Oe,f[2]=Fe,f[3]=Ie,V.clearBufferiv(V.COLOR,0,f))}else le|=V.COLOR_BUFFER_BIT}Y&&(le|=V.DEPTH_BUFFER_BIT),Q&&(le|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Cr,!1),t.removeEventListener("webglcontextrestored",qn,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),we.dispose(),et.dispose(),j.dispose(),ae.dispose(),ue.dispose(),be.dispose(),Te.dispose(),He.dispose(),fe.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",xi),ct.removeEventListener("sessionend",Ui),K&&(K.dispose(),K=null),Ni.stop()},this.renderBufferDirect=function(R,Y,Q,le,re,pe){Y===null&&(Y=z);let xe=re.isMesh&&re.matrixWorld.determinant()<0,Me=function(nt,It,_t,ze,Be){It.isScene!==!0&&(It=z),X.resetTextureUnits();let Yn=It.fog,ta=ze.isMeshStandardMaterial?It.environment:null,Lh=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:mi,Ir=(ze.isMeshStandardMaterial?ue:ae).get(ze.envMap||ta),Ih=ze.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,Dh=!!_t.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),Uh=!!_t.morphAttributes.position,Nh=!!_t.morphAttributes.normal,Oh=!!_t.morphAttributes.color,hl=Ci;ze.toneMapped&&(E!==null&&E.isXRRenderTarget!==!0||(hl=v.toneMapping));let ul=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Fh=ul!==void 0?ul.length:0,ke=j.get(ze),zh=m.state.lights;if(T===!0&&(k===!0||nt!==I)){let Dt=nt===I&&ze.id===D;ye.setState(ze,nt,Dt)}let zt=!1;ze.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==zh.state.version||ke.outputColorSpace!==Lh||Be.isBatchedMesh&&ke.batching===!1?zt=!0:Be.isBatchedMesh||ke.batching!==!0?Be.isInstancedMesh&&ke.instancing===!1?zt=!0:Be.isInstancedMesh||ke.instancing!==!0?Be.isSkinnedMesh&&ke.skinning===!1?zt=!0:Be.isSkinnedMesh||ke.skinning!==!0?Be.isInstancedMesh&&ke.instancingColor===!0&&Be.instanceColor===null||Be.isInstancedMesh&&ke.instancingColor===!1&&Be.instanceColor!==null||ke.envMap!==Ir||ze.fog===!0&&ke.fog!==Yn?zt=!0:ke.numClippingPlanes===void 0||ke.numClippingPlanes===ye.numPlanes&&ke.numIntersection===ye.numIntersection?(ke.vertexAlphas!==Ih||ke.vertexTangents!==Dh||ke.morphTargets!==Uh||ke.morphNormals!==Nh||ke.morphColors!==Oh||ke.toneMapping!==hl||te.isWebGL2===!0&&ke.morphTargetsCount!==Fh)&&(zt=!0):zt=!0:zt=!0:zt=!0:zt=!0:(zt=!0,ke.__version=ze.version);let Fi=ke.currentProgram;zt===!0&&(Fi=Lr(ze,It,Be));let dl=!1,Zn=!1,ia=!1,ut=Fi.getUniforms(),zi=ke.uniforms;if(M.useProgram(Fi.program)&&(dl=!0,Zn=!0,ia=!0),ze.id!==D&&(D=ze.id,Zn=!0),dl||I!==nt){ut.setValue(V,"projectionMatrix",nt.projectionMatrix),ut.setValue(V,"viewMatrix",nt.matrixWorldInverse);let Dt=ut.map.cameraPosition;Dt!==void 0&&Dt.setValue(V,F.setFromMatrixPosition(nt.matrixWorld)),te.logarithmicDepthBuffer&&ut.setValue(V,"logDepthBufFC",2/(Math.log(nt.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&ut.setValue(V,"isOrthographic",nt.isOrthographicCamera===!0),I!==nt&&(I=nt,Zn=!0,ia=!0)}if(Be.isSkinnedMesh){ut.setOptional(V,Be,"bindMatrix"),ut.setOptional(V,Be,"bindMatrixInverse");let Dt=Be.skeleton;Dt&&(te.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),ut.setValue(V,"boneTexture",Dt.boneTexture,X)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Be.isBatchedMesh&&(ut.setOptional(V,Be,"batchingTexture"),ut.setValue(V,"batchingTexture",Be._matricesTexture,X));let na=_t.morphAttributes;(na.position!==void 0||na.normal!==void 0||na.color!==void 0&&te.isWebGL2===!0)&&Di.update(Be,_t,Fi),(Zn||ke.receiveShadow!==Be.receiveShadow)&&(ke.receiveShadow=Be.receiveShadow,ut.setValue(V,"receiveShadow",Be.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(zi.envMap.value=Ir,zi.flipEnvMap.value=Ir.isCubeTexture&&Ir.isRenderTargetTexture===!1?-1:1),Zn&&(ut.setValue(V,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&(Bt=ia,(Xt=zi).ambientLightColor.needsUpdate=Bt,Xt.lightProbe.needsUpdate=Bt,Xt.directionalLights.needsUpdate=Bt,Xt.directionalLightShadows.needsUpdate=Bt,Xt.pointLights.needsUpdate=Bt,Xt.pointLightShadows.needsUpdate=Bt,Xt.spotLights.needsUpdate=Bt,Xt.spotLightShadows.needsUpdate=Bt,Xt.rectAreaLights.needsUpdate=Bt,Xt.hemisphereLights.needsUpdate=Bt),Yn&&ze.fog===!0&&ve.refreshFogUniforms(zi,Yn),ve.refreshMaterialUniforms(zi,ze,q,oe,K),In.upload(V,ll(ke),zi,X));var Xt,Bt;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(In.upload(V,ll(ke),zi,X),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&ut.setValue(V,"center",Be.center),ut.setValue(V,"modelViewMatrix",Be.modelViewMatrix),ut.setValue(V,"normalMatrix",Be.normalMatrix),ut.setValue(V,"modelMatrix",Be.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let Dt=ze.uniformsGroups;for(let ra=0,Bh=Dt.length;ra<Bh;ra++)if(te.isWebGL2){let pl=Dt[ra];He.update(pl,Fi),He.bind(pl,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}(R,Y,Q,le,re);M.setMaterial(le,xe);let Ie=Q.index,Ue=1;if(le.wireframe===!0){if(Ie=ge.getWireframeAttribute(Q),Ie===void 0)return;Ue=2}let Oe=Q.drawRange,Fe=Q.attributes.position,Ye=Oe.start*Ue,Ft=(Oe.start+Oe.count)*Ue;pe!==null&&(Ye=Math.max(Ye,pe.start*Ue),Ft=Math.min(Ft,(pe.start+pe.count)*Ue)),Ie!==null?(Ye=Math.max(Ye,0),Ft=Math.min(Ft,Ie.count)):Fe!=null&&(Ye=Math.max(Ye,0),Ft=Math.min(Ft,Fe.count));let ai=Ft-Ye;if(ai<0||ai===1/0)return;let Oi;Te.setup(re,le,Me,Q,Ie);let Ze=Mt;if(Ie!==null&&(Oi=de.get(Ie),Ze=U,Ze.setIndex(Oi)),re.isMesh)le.wireframe===!0?(M.setLineWidth(le.wireframeLinewidth*W()),Ze.setMode(V.LINES)):Ze.setMode(V.TRIANGLES);else if(re.isLine){let nt=le.linewidth;nt===void 0&&(nt=1),M.setLineWidth(nt*W()),re.isLineSegments?Ze.setMode(V.LINES):re.isLineLoop?Ze.setMode(V.LINE_LOOP):Ze.setMode(V.LINE_STRIP)}else re.isPoints?Ze.setMode(V.POINTS):re.isSprite&&Ze.setMode(V.TRIANGLES);if(re.isBatchedMesh)Ze.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)Ze.renderInstances(Ye,ai,re.count);else if(Q.isInstancedBufferGeometry){let nt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,It=Math.min(Q.instanceCount,nt);Ze.renderInstances(Ye,ai,It)}else Ze.render(Ye,ai)},this.compile=function(R,Y,Q=null){Q===null&&(Q=R),m=et.get(Q),m.init(),_.push(m),Q.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),R!==Q&&R.traverseVisible(function(re){re.isLight&&re.layers.test(Y.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),m.setupLights(v._useLegacyLights);let le=new Set;return R.traverse(function(re){let pe=re.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){let Me=pe[xe];ln(Me,Q,re),le.add(Me)}else ln(pe,Q,re),le.add(pe)}),_.pop(),m=null,le},this.compileAsync=function(R,Y,Q=null){let le=this.compile(R,Y,Q);return new Promise(re=>{function pe(){le.forEach(function(xe){j.get(xe).currentProgram.isReady()&&le.delete(xe)}),le.size!==0?setTimeout(pe,10):re(R)}ne.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let si=null;function xi(){Ni.stop()}function Ui(){Ni.start()}let Ni=new rh;function sl(R,Y,Q,le){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||w.intersectsSprite(R)){le&&F.setFromMatrixPosition(R.matrixWorld).applyMatrix4(N);let pe=be.update(R),xe=R.material;xe.visible&&g.push(R,pe,xe,Q,F.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||w.intersectsObject(R))){let pe=be.update(R),xe=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),F.copy(R.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),F.copy(pe.boundingSphere.center)),F.applyMatrix4(R.matrixWorld).applyMatrix4(N)),Array.isArray(xe)){let Me=pe.groups;for(let Ie=0,Ue=Me.length;Ie<Ue;Ie++){let Oe=Me[Ie],Fe=xe[Oe.materialIndex];Fe&&Fe.visible&&g.push(R,pe,Fe,Q,F.z,Oe)}}else xe.visible&&g.push(R,pe,xe,Q,F.z,null)}}let re=R.children;for(let pe=0,xe=re.length;pe<xe;pe++)sl(re[pe],Y,Q,le)}function al(R,Y,Q,le){let re=R.opaque,pe=R.transmissive,xe=R.transparent;m.setupLightsView(Q),T===!0&&ye.setGlobalState(v.clippingPlanes,Q),pe.length>0&&function(Me,Ie,Ue,Oe){if((Ue.isScene===!0?Ue.overrideMaterial:null)!==null)return;let Ye=te.isWebGL2;K===null&&(K=new fi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?dr:qi,minFilter:ds,samples:Ye?4:0})),v.getDrawingBufferSize($),Ye?K.setSize($.x,$.y):K.setSize(ys($.x),ys($.y));let Ft=v.getRenderTarget();v.setRenderTarget(K),v.getClearColor(A),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let ai=v.toneMapping;v.toneMapping=Ci,Pr(Me,Ue,Oe),X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K);let Oi=!1;for(let Ze=0,nt=Ie.length;Ze<nt;Ze++){let It=Ie[Ze],_t=It.object,ze=It.geometry,Be=It.material,Yn=It.group;if(Be.side===2&&_t.layers.test(Oe.layers)){let ta=Be.side;Be.side=bt,Be.needsUpdate=!0,ol(_t,Ue,Oe,ze,Be,Yn),Be.side=ta,Be.needsUpdate=!0,Oi=!0}}Oi===!0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),v.setRenderTarget(Ft),v.setClearColor(A,L),v.toneMapping=ai}(re,pe,Y,Q),le&&M.viewport(O.copy(le)),re.length>0&&Pr(re,Y,Q),pe.length>0&&Pr(pe,Y,Q),xe.length>0&&Pr(xe,Y,Q),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Pr(R,Y,Q){let le=Y.isScene===!0?Y.overrideMaterial:null;for(let re=0,pe=R.length;re<pe;re++){let xe=R[re],Me=xe.object,Ie=xe.geometry,Ue=le===null?xe.material:le,Oe=xe.group;Me.layers.test(Q.layers)&&ol(Me,Y,Q,Ie,Ue,Oe)}}function ol(R,Y,Q,le,re,pe){R.onBeforeRender(v,Y,Q,le,re,pe),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(v,Y,Q,le,R,pe),re.transparent===!0&&re.side===2&&re.forceSinglePass===!1?(re.side=bt,re.needsUpdate=!0,v.renderBufferDirect(Q,Y,le,re,R,pe),re.side=Kt,re.needsUpdate=!0,v.renderBufferDirect(Q,Y,le,re,R,pe),re.side=2):v.renderBufferDirect(Q,Y,le,re,R,pe),R.onAfterRender(v,Y,Q,le,re,pe)}function Lr(R,Y,Q){Y.isScene!==!0&&(Y=z);let le=j.get(R),re=m.state.lights,pe=m.state.shadowsArray,xe=re.state.version,Me=fe.getParameters(R,re.state,pe,Y,Q),Ie=fe.getProgramCacheKey(Me),Ue=le.programs;le.environment=R.isMeshStandardMaterial?Y.environment:null,le.fog=Y.fog,le.envMap=(R.isMeshStandardMaterial?ue:ae).get(R.envMap||le.environment),Ue===void 0&&(R.addEventListener("dispose",Lt),Ue=new Map,le.programs=Ue);let Oe=Ue.get(Ie);if(Oe!==void 0){if(le.currentProgram===Oe&&le.lightsStateVersion===xe)return cl(R,Me),Oe}else Me.uniforms=fe.getUniforms(R),R.onBuild(Q,Me,v),R.onBeforeCompile(Me,v),Oe=fe.acquireProgram(Me,Ie),Ue.set(Ie,Oe),le.uniforms=Me.uniforms;let Fe=le.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Fe.clippingPlanes=ye.uniform),cl(R,Me),le.needsLights=function(Ye){return Ye.isMeshLambertMaterial||Ye.isMeshToonMaterial||Ye.isMeshPhongMaterial||Ye.isMeshStandardMaterial||Ye.isShadowMaterial||Ye.isShaderMaterial&&Ye.lights===!0}(R),le.lightsStateVersion=xe,le.needsLights&&(Fe.ambientLightColor.value=re.state.ambient,Fe.lightProbe.value=re.state.probe,Fe.directionalLights.value=re.state.directional,Fe.directionalLightShadows.value=re.state.directionalShadow,Fe.spotLights.value=re.state.spot,Fe.spotLightShadows.value=re.state.spotShadow,Fe.rectAreaLights.value=re.state.rectArea,Fe.ltc_1.value=re.state.rectAreaLTC1,Fe.ltc_2.value=re.state.rectAreaLTC2,Fe.pointLights.value=re.state.point,Fe.pointLightShadows.value=re.state.pointShadow,Fe.hemisphereLights.value=re.state.hemi,Fe.directionalShadowMap.value=re.state.directionalShadowMap,Fe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Fe.spotShadowMap.value=re.state.spotShadowMap,Fe.spotLightMatrix.value=re.state.spotLightMatrix,Fe.spotLightMap.value=re.state.spotLightMap,Fe.pointShadowMap.value=re.state.pointShadowMap,Fe.pointShadowMatrix.value=re.state.pointShadowMatrix),le.currentProgram=Oe,le.uniformsList=null,Oe}function ll(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=In.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function cl(R,Y){let Q=j.get(R);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}Ni.setAnimationLoop(function(R){si&&si(R)}),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(R){si=R,ct.setAnimationLoop(R),R===null?Ni.stop():Ni.start()},ct.addEventListener("sessionstart",xi),ct.addEventListener("sessionend",Ui),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(Y),Y=ct.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,Y,E),m=et.get(R,_.length),m.init(),_.push(m),N.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),w.setFromProjectionMatrix(N),k=this.localClippingEnabled,T=ye.init(this.clippingPlanes,k),g=we.get(R,y.length),g.init(),y.push(g),sl(R,Y,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(Z,ee),this.info.render.frame++,T===!0&&ye.beginShadows();let Q=m.state.shadowsArray;if(Ne.render(Q,R,Y),T===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Le.render(g,R),m.setupLights(v._useLegacyLights),Y.isArrayCamera){let le=Y.cameras;for(let re=0,pe=le.length;re<pe;re++){let xe=le[re];al(g,R,xe,xe.viewport)}}else al(g,R,Y);E!==null&&(X.updateMultisampleRenderTarget(E),X.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,Y),Te.resetDefaultState(),D=-1,I=null,_.pop(),m=_.length>0?_[_.length-1]:null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,Y,Q){j.get(R.texture).__webglTexture=Y,j.get(R.depthTexture).__webglTexture=Q;let le=j.get(R);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=Q===void 0,le.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Y){let Q=j.get(R);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,Q=0){E=R,C=Y,x=Q;let le=!0,re=null,pe=!1,xe=!1;if(R){let Me=j.get(R);Me.__useDefaultFramebuffer!==void 0?(M.bindFramebuffer(V.FRAMEBUFFER,null),le=!1):Me.__webglFramebuffer===void 0?X.setupRenderTarget(R):Me.__hasExternalTextures&&X.rebindTextures(R,j.get(R.texture).__webglTexture,j.get(R.depthTexture).__webglTexture);let Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);let Ue=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(re=Array.isArray(Ue[Y])?Ue[Y][Q]:Ue[Y],pe=!0):re=te.isWebGL2&&R.samples>0&&X.useMultisampledRTT(R)===!1?j.get(R).__webglMultisampledFramebuffer:Array.isArray(Ue)?Ue[Q]:Ue,O.copy(R.viewport),B.copy(R.scissor),P=R.scissorTest}else O.copy(G).multiplyScalar(q).floor(),B.copy(J).multiplyScalar(q).floor(),P=ce;if(M.bindFramebuffer(V.FRAMEBUFFER,re)&&te.drawBuffers&&le&&M.drawBuffers(R,re),M.viewport(O),M.scissor(B),M.setScissorTest(P),pe){let Me=j.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me.__webglTexture,Q)}else if(xe){let Me=j.get(R.texture),Ie=Y||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Me.__webglTexture,Q||0,Ie)}D=-1},this.readRenderTargetPixels=function(R,Y,Q,le,re,pe,xe){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){M.bindFramebuffer(V.FRAMEBUFFER,Me);try{let Ie=R.texture,Ue=Ie.format,Oe=Ie.type;if(Ue!==Yt&&me.convert(Ue)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Fe=Oe===dr&&(ne.has("EXT_color_buffer_half_float")||te.isWebGL2&&ne.has("EXT_color_buffer_float"));if(!(Oe===qi||me.convert(Oe)===V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)||Oe===Ai&&(te.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float"))||Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=R.width-le&&Q>=0&&Q<=R.height-re&&V.readPixels(Y,Q,le,re,me.convert(Ue),me.convert(Oe),pe)}finally{let Ie=E!==null?j.get(E).__webglFramebuffer:null;M.bindFramebuffer(V.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(R,Y,Q=0){let le=Math.pow(2,-Q),re=Math.floor(Y.image.width*le),pe=Math.floor(Y.image.height*le);X.setTexture2D(Y,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,R.x,R.y,re,pe),M.unbindTexture()},this.copyTextureToTexture=function(R,Y,Q,le=0){let re=Y.image.width,pe=Y.image.height,xe=me.convert(Q.format),Me=me.convert(Q.type);X.setTexture2D(Q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment),Y.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,le,R.x,R.y,re,pe,xe,Me,Y.image.data):Y.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,le,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,xe,Y.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,le,R.x,R.y,xe,Me,Y.image),le===0&&Q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),M.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,Q,le,re=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let pe=R.max.x-R.min.x+1,xe=R.max.y-R.min.y+1,Me=R.max.z-R.min.z+1,Ie=me.convert(le.format),Ue=me.convert(le.type),Oe;if(le.isData3DTexture)X.setTexture3D(le,0),Oe=V.TEXTURE_3D;else{if(!le.isDataArrayTexture&&!le.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");X.setTexture2DArray(le,0),Oe=V.TEXTURE_2D_ARRAY}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,le.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,le.unpackAlignment);let Fe=V.getParameter(V.UNPACK_ROW_LENGTH),Ye=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ft=V.getParameter(V.UNPACK_SKIP_PIXELS),ai=V.getParameter(V.UNPACK_SKIP_ROWS),Oi=V.getParameter(V.UNPACK_SKIP_IMAGES),Ze=Q.isCompressedTexture?Q.mipmaps[re]:Q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,Ze.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ze.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,R.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,R.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,R.min.z),Q.isDataTexture||Q.isData3DTexture?V.texSubImage3D(Oe,re,Y.x,Y.y,Y.z,pe,xe,Me,Ie,Ue,Ze.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Oe,re,Y.x,Y.y,Y.z,pe,xe,Me,Ie,Ze.data)):V.texSubImage3D(Oe,re,Y.x,Y.y,Y.z,pe,xe,Me,Ie,Ue,Ze),V.pixelStorei(V.UNPACK_ROW_LENGTH,Fe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ft),V.pixelStorei(V.UNPACK_SKIP_ROWS,ai),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Oi),re===0&&le.generateMipmaps&&V.generateMipmap(Oe),M.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?X.setTextureCube(R,0):R.isData3DTexture?X.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?X.setTexture2DArray(R,0):X.setTexture2D(R,0),M.unbindTexture()},this.resetState=function(){C=0,x=0,E=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yo?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===Ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$e?$i:Qc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===$i?$e:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},mo=class extends gr{};mo.prototype.isWebGL1Renderer=!0;var Ps=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ft=new S,Ls=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$t(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$t(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$t(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$t(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tn,tr=new S,wn=new S,An=new S,Rn=new ie,ir=new ie,hh=new Ce,ts=new S,nr=new S,is=new S,Rc=new ie,Ua=new ie,Cc=new ie,Ji=class extends ht{constructor(e=new Li){if(super(),this.isSprite=!0,this.type="Sprite",Tn===void 0){Tn=new qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fo(t,5);Tn.setIndex([0,1,2,0,2,3]),Tn.setAttribute("position",new Ls(i,3,0,!1)),Tn.setAttribute("uv",new Ls(i,2,3,!1))}this.geometry=Tn,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wn.setFromMatrixScale(this.matrixWorld),hh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),An.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wn.multiplyScalar(-An.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ns(ts.set(-.5,-.5,0),An,a,wn,n,s),ns(nr.set(.5,-.5,0),An,a,wn,n,s),ns(is.set(.5,.5,0),An,a,wn,n,s),Rc.set(0,0),Ua.set(1,0),Cc.set(1,1);let o=e.ray.intersectTriangle(ts,nr,is,!1,tr);if(o===null&&(ns(nr.set(-.5,.5,0),An,a,wn,n,s),Ua.set(0,1),o=e.ray.intersectTriangle(ts,is,nr,!1,tr),o===null))return;let l=e.ray.origin.distanceTo(tr);l<e.near||l>e.far||t.push({distance:l,point:tr.clone(),uv:Ri.getInterpolation(tr,ts,nr,is,Rc,Ua,Cc,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ns(r,e,t,i,n,s){Rn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(ir.x=s*Rn.x-n*Rn.y,ir.y=n*Rn.x+s*Rn.y):ir.copy(Rn),r.copy(e),r.x+=ir.x,r.y+=ir.y,r.applyMatrix4(hh)}var fp=new S,gp=new S;var vp=new S,_p=new We,yp=new We,xp=new S,bp=new Ce,Mp=new S,Sp=new ti,Ep=new Ce,Tp=new gi;var wp=new Ce,Ap=new Ce;var Rp=new Ce,Cp=new Ce;var Pp=new ei,Lp=new Ce,Ip=new Se,Dp=new ti;var go=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];n.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Up=new Ce,Np=new Ce,Op=new Ce,Fp=new Ce,zp=new zn,Bp=new ei,Hp=new ti,kp=new S,Gp=new go,Vp=new Se;var vr=class extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pc=new S,Lc=new S,Ic=new Ce,Na=new gi,rs=new ti,Is=class extends ht{constructor(e=new qe,t=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Pc.fromBufferAttribute(t,n-1),Lc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Pc.distanceTo(Lc);e.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(n),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Ic.copy(n).invert(),Na.copy(e.ray).applyMatrix4(Ic);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new S,h=new S,d=new S,u=new S,p=this.isLineSegments?2:1,f=i.index,g=i.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;m<y;m+=p){let _=f.getX(m),v=f.getX(m+1);if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,v),Na.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(u);b<e.near||b>e.far||t.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count)-1;m<y;m+=p){if(c.fromBufferAttribute(g,m),h.fromBufferAttribute(g,m+1),Na.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(u);_<e.near||_>e.far||t.push({distance:_,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}},Wp=new S,jp=new S;var Xp=new Ce,qp=new gi,Yp=new ti,Zp=new S;var ni=class extends Nt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ie:new S);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new S,n=[],s=[],a=[],o=new S,l=new Ce;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(rt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(rt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends Ot{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new ie,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vo=class extends _r{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $o(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var ss=new S,Oa=new $o,Fa=new $o,za=new $o,yr=class extends Ot{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new S){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(ss.subVectors(n[0],n[1]).add(n[0]),o=ss);let d=n[c%s],u=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(ss.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=ss),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Oa.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,g,m),Fa.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,g,m),za.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Fa.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),za.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return i.set(Oa.calc(h),Fa.calc(h),za.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new S().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function lr(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function cr(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var Ds=class extends Ot{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(cr(e,n.x,s.x,a.x,o.x),cr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends Ot{constructor(e=new S,t=new S,i=new S,n=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new S){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(cr(e,n.x,s.x,a.x,o.x),cr(e,n.y,s.y,a.y,o.y),cr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Us=class extends Ot{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Ot{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends Ot{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(lr(e,n.x,s.x,a.x),lr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Ot{constructor(e=new S,t=new S,i=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new S){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(lr(e,n.x,s.x,a.x),lr(e,n.y,s.y,a.y),lr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Dc(o,l.x,c.x,h.x,d.x),Dc(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ie().fromArray(n))}return this}},zs=Object.freeze({__proto__:null,ArcCurve:vo,CatmullRomCurve3:yr,CubicBezierCurve:Ds,CubicBezierCurve3:_o,EllipseCurve:_r,LineCurve:Us,LineCurve3:yo,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Os,SplineCurve:Fs}),xo=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new zs[n.type]().fromJSON(n))}return this}},Ki=class extends xo{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Us(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Ns(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Ds(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Fs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new _r(e,t,i,n,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bs=class r extends qe{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=rt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new S,u=new ie,p=new S,f=new S,g=new S,m=0,y=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,y=e[_+1].y-e[_].y,p.x=1*y,p.y=-m,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[_+1].x-e[_].x,y=e[_+1].y-e[_].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let _=0;_<=t;_++){let v=i+_*h*n,b=Math.sin(v),C=Math.cos(v);for(let x=0;x<=e.length-1;x++){d.x=e[x].x*b,d.y=e[x].y,d.z=e[x].x*C,a.push(d.x,d.y,d.z),u.x=_/t,u.y=x/(e.length-1),o.push(u.x,u.y);let E=l[3*x+0]*b,D=l[3*x+1],I=l[3*x+0]*C;c.push(E,D,I)}}for(let _=0;_<t;_++)for(let v=0;v<e.length-1;v++){let b=v+_*e.length,C=b,x=b+e.length,E=b+e.length+1,D=b+1;s.push(C,x,D),s.push(E,D,x)}this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},bo=class r extends Bs{constructor(e=1,t=1,i=4,n=8){let s=new Ki;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Mo=class r extends qe{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new S,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qi=class r extends qe{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,g=[],m=i/2,y=0;function _(v){let b=f,C=new ie,x=new S,E=0,D=v===!0?e:t,I=v===!0?1:-1;for(let B=1;B<=n;B++)d.push(0,m*I,0),u.push(0,I,0),p.push(.5,.5),f++;let O=f;for(let B=0;B<=n;B++){let P=B/n*l+o,A=Math.cos(P),L=Math.sin(P);x.x=D*L,x.y=m*I,x.z=D*A,d.push(x.x,x.y,x.z),u.push(0,I,0),C.x=.5*A+.5,C.y=.5*L*I+.5,p.push(C.x,C.y),f++}for(let B=0;B<n;B++){let P=b+B,A=O+B;v===!0?h.push(A,A+1,P):h.push(A+1,A,P),E+=3}c.addGroup(y,E,v===!0?1:2),y+=E}(function(){let v=new S,b=new S,C=0,x=(t-e)/i;for(let E=0;E<=s;E++){let D=[],I=E/s,O=I*(t-e)+e;for(let B=0;B<=n;B++){let P=B/n,A=P*l+o,L=Math.sin(A),H=Math.cos(A);b.x=O*L,b.y=-I*i+m,b.z=O*H,d.push(b.x,b.y,b.z),v.set(L,x,H).normalize(),u.push(v.x,v.y,v.z),p.push(P,1-I),D.push(f++)}g.push(D)}for(let E=0;E<n;E++)for(let D=0;D<s;D++){let I=g[D][E],O=g[D+1][E],B=g[D+1][E+1],P=g[D][E+1];h.push(I,O,P),h.push(O,B,P),C+=6}c.addGroup(y,C,0),y+=C})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},en=class r extends Qi{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tn=class r extends qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,p,f,g){let m=g+1,y=[];for(let _=0;_<=m;_++){y[_]=[];let v=u.clone().lerp(f,_/m),b=p.clone().lerp(f,_/m),C=m-_;for(let x=0;x<=C;x++)y[_][x]=x===0&&_===m?v:v.clone().lerp(b,x/C)}for(let _=0;_<m;_++)for(let v=0;v<2*(m-_)-1;v++){let b=Math.floor(v/2);v%2==0?(l(y[_][b+1]),l(y[_+1][b]),l(y[_][b])):(l(y[_][b+1]),l(y[_+1][b+1]),l(y[_+1][b]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,g){g<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new S,f=new S,g=new S;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,u)})(n),function(u){let p=new S;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(i),function(){let u=new S;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let g=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new S,g=new S,m=new S,y=new S,_=new ie,v=new ie,b=new ie;for(let C=0,x=0;C<s.length;C+=9,x+=6){f.set(s[C+0],s[C+1],s[C+2]),g.set(s[C+3],s[C+4],s[C+5]),m.set(s[C+6],s[C+7],s[C+8]),_.set(a[x+0],a[x+1]),v.set(a[x+2],a[x+3]),b.set(a[x+4],a[x+5]),y.copy(f).add(g).add(m).divideScalar(3);let E=d(y);h(_,x+0,f,E),h(v,x+2,g,E),h(b,x+4,m,E)}})(),function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],y=a[f+4],_=Math.max(g,m,y),v=Math.min(g,m,y);_>.9&&v<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(s.slice(),3)),this.setAttribute("uv",new Ee(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},So=class r extends tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},as=new S,os=new S,Ba=new S,ls=new Ri,Eo=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Pn*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:y}=ls;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),ls.getNormal(Ba),d[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let _=0;_<3;_++){let v=(_+1)%3,b=d[_],C=d[v],x=ls[h[_]],E=ls[h[v]],D=`${b}_${C}`,I=`${C}_${b}`;I in u&&u[I]?(Ba.dot(u[I].normal)<=s&&(p.push(x.x,x.y,x.z),p.push(E.x,E.y,E.z)),u[I]=null):D in u||(u[D]={index0:c[_],index1:c[v],normal:Ba.clone()})}}for(let f in u)if(u[f]){let{index0:g,index1:m}=u[f];as.fromBufferAttribute(o,g),os.fromBufferAttribute(o,m),p.push(as.x,as.y,as.z),p.push(os.x,os.y,os.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},nn=class extends Ki{constructor(e){super(e),this.uuid=Jt(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Ki().fromJSON(n))}return this}},kd=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Uc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(i&&(s=function(f,g,m,y){let _=[],v,b,C,x,E;for(v=0,b=g.length;v<b;v++)C=g[v]*y,x=v<b-1?g[v+1]*y:f.length,E=Uc(f,C,x,y,!1),E===E.next&&(E.steiner=!0),_.push(Zd(E));for(_.sort(Xd),v=0;v<_.length;v++)m=qd(_[v],m);return m}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<n;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return xr(s,a,t,o,l,p,0),a};function Uc(r,e,t,i,n){let s,a;if(n===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Nc(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Nc(s,r[s],r[s+1],a);return a&&$s(a,a.next)&&(Mr(a),a=a.next),a}function rn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!$s(i,i.next)&&Je(i.prev,i,i.next)!==0)i=i.next;else{if(Mr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function xr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=To(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(g){let m,y,_,v,b,C,x,E,D=1;do{for(y=g,g=null,b=null,C=0;y;){for(C++,_=y,x=0,m=0;m<D&&(x++,_=_.nextZ,_);m++);for(E=D;x>0||E>0&&_;)x!==0&&(E===0||!_||y.z<=_.z)?(v=y,y=y.nextZ,x--):(v=_,_=_.nextZ,E--),b?b.nextZ=v:g=v,v.prevZ=b,b=v;y=_}b.nextZ=null,D*=2}while(C>1)}(f)}(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Vd(r,i,n,s):Gd(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),Mr(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?xr(r=Wd(rn(r),e,t),e,t,i,n,s,2):a===2&&jd(r,e,t,i,n,s):xr(rn(r),e,t,i,n,s,1);break}}function Gd(r){let e=r.prev,t=r,i=r.next;if(Je(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&Cn(n,o,s,l,a,c,f.x,f.y)&&Je(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Vd(r,e,t,i){let n=r.prev,s=r,a=r.next;if(Je(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,g=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,y=To(p,f,e,t,i),_=To(g,m,e,t,i),v=r.prevZ,b=r.nextZ;for(;v&&v.z>=y&&b&&b.z<=_;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==n&&v!==a&&Cn(o,h,l,d,c,u,v.x,v.y)&&Je(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=p&&b.x<=g&&b.y>=f&&b.y<=m&&b!==n&&b!==a&&Cn(o,h,l,d,c,u,b.x,b.y)&&Je(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=y;){if(v.x>=p&&v.x<=g&&v.y>=f&&v.y<=m&&v!==n&&v!==a&&Cn(o,h,l,d,c,u,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=_;){if(b.x>=p&&b.x<=g&&b.y>=f&&b.y<=m&&b!==n&&b!==a&&Cn(o,h,l,d,c,u,b.x,b.y)&&Je(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Wd(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!$s(n,s)&&uh(n,i,i.next,s)&&br(n,s)&&br(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Mr(i),Mr(i.next),i=r=s),i=i.next}while(i!==r);return rn(i)}function jd(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$d(a,o)){let l=dh(a,o);return a=rn(a,a.next),l=rn(l,l.next),xr(a,e,t,i,n,s,0),void xr(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Xd(r,e){return r.x-e.x}function qd(r,e){let t=function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&Cn(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),br(o,n)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Yd(a,o)))&&(a=o,g=f)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let i=dh(t,r);return rn(i,i.next),rn(t,t.next)}function Yd(r,e){return Je(r.prev,r,e.prev)<0&&Je(e.next,r,r.next)<0}function To(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Cn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function $d(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&uh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(br(r,e)&&br(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(Je(r.prev,r,e.prev)||Je(r,e.prev,e))||$s(r,e)&&Je(r.prev,r,r.next)>0&&Je(e.prev,e,e.next)>0)}function Je(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function $s(r,e){return r.x===e.x&&r.y===e.y}function uh(r,e,t,i){let n=hs(Je(r,e,t)),s=hs(Je(r,e,i)),a=hs(Je(t,i,r)),o=hs(Je(t,i,e));return n!==s&&a!==o||!(n!==0||!cs(r,t,e))||!(s!==0||!cs(r,i,e))||!(a!==0||!cs(t,r,i))||!(o!==0||!cs(t,e,i))}function cs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function hs(r){return r>0?1:r<0?-1:0}function br(r,e){return Je(r.prev,r,r.next)<0?Je(r,e,r.next)>=0&&Je(r,r.prev,e)>=0:Je(r,e,r.prev)<0||Je(r,r.next,e)<0}function dh(r,e){let t=new wo(r.i,r.x,r.y),i=new wo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Nc(r,e,t,i){let n=new wo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Mr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Pi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Oc(e),Fc(i,e);let a=e.length;t.forEach(Oc);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Fc(i,t[l]);let o=kd(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Oc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Fc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ao=class r extends qe{constructor(e=new nn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Jd,v,b,C,x,E,D=!1;y&&(v=y.getSpacedPoints(h),D=!0,u=!1,b=y.computeFrenetFrames(h,!1),C=new S,x=new S,E=new S),u||(m=0,p=0,f=0,g=0);let I=o.extractPoints(c),O=I.shape,B=I.holes;if(!Pi.isClockWise(O)){O=O.reverse();for(let F=0,z=B.length;F<z;F++){let W=B[F];Pi.isClockWise(W)&&(B[F]=W.reverse())}}let P=Pi.triangulateShape(O,B),A=O;for(let F=0,z=B.length;F<z;F++){let W=B[F];O=O.concat(W)}function L(F,z,W){return z||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(z,W)}let H=O.length,oe=P.length;function q(F,z,W){let ne,te,M,se=F.x-z.x,j=F.y-z.y,X=W.x-F.x,ae=W.y-F.y,ue=se*se+j*j,de=se*ae-j*X;if(Math.abs(de)>Number.EPSILON){let ge=Math.sqrt(ue),be=Math.sqrt(X*X+ae*ae),fe=z.x-j/ge,ve=z.y+se/ge,we=((W.x-ae/be-fe)*ae-(W.y+X/be-ve)*X)/(se*ae-j*X);ne=fe+se*we-F.x,te=ve+j*we-F.y;let et=ne*ne+te*te;if(et<=2)return new ie(ne,te);M=Math.sqrt(et/2)}else{let ge=!1;se>Number.EPSILON?X>Number.EPSILON&&(ge=!0):se<-Number.EPSILON?X<-Number.EPSILON&&(ge=!0):Math.sign(j)===Math.sign(ae)&&(ge=!0),ge?(ne=-j,te=se,M=Math.sqrt(ue)):(ne=se,te=j,M=Math.sqrt(ue/2))}return new ie(ne/M,te/M)}let Z=[];for(let F=0,z=A.length,W=z-1,ne=F+1;F<z;F++,W++,ne++)W===z&&(W=0),ne===z&&(ne=0),Z[F]=q(A[F],A[W],A[ne]);let ee=[],G,J=Z.concat();for(let F=0,z=B.length;F<z;F++){let W=B[F];G=[];for(let ne=0,te=W.length,M=te-1,se=ne+1;ne<te;ne++,M++,se++)M===te&&(M=0),se===te&&(se=0),G[ne]=q(W[ne],W[M],W[se]);ee.push(G),J=J.concat(G)}for(let F=0;F<m;F++){let z=F/m,W=p*Math.cos(z*Math.PI/2),ne=f*Math.sin(z*Math.PI/2)+g;for(let te=0,M=A.length;te<M;te++){let se=L(A[te],Z[te],ne);T(se.x,se.y,-W)}for(let te=0,M=B.length;te<M;te++){let se=B[te];G=ee[te];for(let j=0,X=se.length;j<X;j++){let ae=L(se[j],G[j],ne);T(ae.x,ae.y,-W)}}}let ce=f+g;for(let F=0;F<H;F++){let z=u?L(O[F],J[F],ce):O[F];D?(x.copy(b.normals[0]).multiplyScalar(z.x),C.copy(b.binormals[0]).multiplyScalar(z.y),E.copy(v[0]).add(x).add(C),T(E.x,E.y,E.z)):T(z.x,z.y,0)}for(let F=1;F<=h;F++)for(let z=0;z<H;z++){let W=u?L(O[z],J[z],ce):O[z];D?(x.copy(b.normals[F]).multiplyScalar(W.x),C.copy(b.binormals[F]).multiplyScalar(W.y),E.copy(v[F]).add(x).add(C),T(E.x,E.y,E.z)):T(W.x,W.y,d/h*F)}for(let F=m-1;F>=0;F--){let z=F/m,W=p*Math.cos(z*Math.PI/2),ne=f*Math.sin(z*Math.PI/2)+g;for(let te=0,M=A.length;te<M;te++){let se=L(A[te],Z[te],ne);T(se.x,se.y,d+W)}for(let te=0,M=B.length;te<M;te++){let se=B[te];G=ee[te];for(let j=0,X=se.length;j<X;j++){let ae=L(se[j],G[j],ne);D?T(ae.x,ae.y+v[h-1].y,v[h-1].x+W):T(ae.x,ae.y,d+W)}}}function w(F,z){let W=F.length;for(;--W>=0;){let ne=W,te=W-1;te<0&&(te=F.length-1);for(let M=0,se=h+2*m;M<se;M++){let j=H*M,X=H*(M+1);K(z+ne+j,z+te+j,z+te+X,z+ne+X)}}}function T(F,z,W){l.push(F),l.push(z),l.push(W)}function k(F,z,W){N(F),N(z),N(W);let ne=n.length/3,te=_.generateTopUV(i,n,ne-3,ne-2,ne-1);$(te[0]),$(te[1]),$(te[2])}function K(F,z,W,ne){N(F),N(z),N(ne),N(z),N(W),N(ne);let te=n.length/3,M=_.generateSideWallUV(i,n,te-6,te-3,te-2,te-1);$(M[0]),$(M[1]),$(M[3]),$(M[1]),$(M[2]),$(M[3])}function N(F){n.push(l[3*F+0]),n.push(l[3*F+1]),n.push(l[3*F+2])}function $(F){s.push(F.x),s.push(F.y)}(function(){let F=n.length/3;if(u){let z=0,W=H*z;for(let ne=0;ne<oe;ne++){let te=P[ne];k(te[2]+W,te[1]+W,te[0]+W)}z=h+2*m,W=H*z;for(let ne=0;ne<oe;ne++){let te=P[ne];k(te[0]+W,te[1]+W,te[2]+W)}}else{for(let z=0;z<oe;z++){let W=P[z];k(W[2],W[1],W[0])}for(let z=0;z<oe;z++){let W=P[z];k(W[0]+H*h,W[1]+H*h,W[2]+H*h)}}i.addGroup(F,n.length/3-F,0)})(),function(){let F=n.length/3,z=0;w(A,z),z+=A.length;for(let W=0,ne=B.length;W<ne;W++){let te=B[W];w(te,z),z+=te.length}i.addGroup(F,n.length/3-F,1)}()}this.setAttribute("position",new Ee(n,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new zs[n.type]().fromJSON(n)),new r(i,e.options)}},Jd={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new ie(s,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],f=e[3*n+2],g=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-d),new ie(u,1-f),new ie(g,1-y)]:[new ie(o,1-l),new ie(h,1-d),new ie(p,1-f),new ie(m,1-y)]}},Ro=class r extends tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Co=class r extends tn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Sr=class r extends qe{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new S,f=new ie;for(let g=0;g<=n;g++){for(let m=0;m<=i;m++){let y=s+m/i*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let g=0;g<n;g++){let m=g*(i+1);for(let y=0;y<i;y++){let _=y+m,v=_,b=_+i+1,C=_+i+2,x=_+1;o.push(v,b,x),o.push(b,C,x)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Hn=class r extends qe{constructor(e=new nn([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=n.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let _=f[m];Pi.isClockWise(_)===!0&&(f[m]=_.reverse())}let g=Pi.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let _=f[m];p=p.concat(_)}for(let m=0,y=p.length;m<y;m++){let _=p[m];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,y=g.length;m<y;m++){let _=g[m],v=_[0]+d,b=_[1]+d,C=_[2]+d;i.push(v,b,C),l+=3}}this.setIndex(i),this.setAttribute("position",new Ee(n,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},kn=class r extends qe{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new S,u=new S,p=[],f=[],g=[],m=[];for(let y=0;y<=i;y++){let _=[],v=y/i,b=0;y===0&&a===0?b=.5/t:y===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){let x=C/t;d.x=-e*Math.cos(n+x*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(n+x*s)*Math.sin(a+v*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(x+b,1-v),_.push(c++)}h.push(_)}for(let y=0;y<i;y++)for(let _=0;_<t;_++){let v=h[y][_+1],b=h[y][_],C=h[y+1][_],x=h[y+1][_+1];(y!==0||a>0)&&p.push(v,b,x),(y!==i-1||l<Math.PI)&&p.push(b,C,x)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Po=class r extends tn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Er=class r extends qe{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new S,d=new S,u=new S;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let g=f/n*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let g=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,y=(n+1)*(p-1)+f,_=(n+1)*p+f;a.push(g,m,_),a.push(m,y,_)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Lo=class r extends qe{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],d=new S,u=new S,p=new S,f=new S,g=new S,m=new S,y=new S;for(let v=0;v<=i;++v){let b=v/i*s*Math.PI*2;_(b,s,a,e,p),_(b+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let C=0;C<=n;++C){let x=C/n*Math.PI*2,E=-t*Math.cos(x),D=t*Math.sin(x);d.x=p.x+(E*y.x+D*g.x),d.y=p.y+(E*y.y+D*g.y),d.z=p.z+(E*y.z+D*g.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(v/i),h.push(C/n)}}for(let v=1;v<=i;v++)for(let b=1;b<=n;b++){let C=(n+1)*(v-1)+(b-1),x=(n+1)*v+(b-1),E=(n+1)*v+b,D=(n+1)*(v-1)+b;o.push(C,x,D),o.push(x,E,D)}function _(v,b,C,x,E){let D=Math.cos(v),I=Math.sin(v),O=C/b*v,B=Math.cos(O);E.x=x*(2+B)*.5*D,E.y=x*(2+B)*I*.5,E.z=x*Math.sin(O)*.5}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Tr=class r extends qe{constructor(e=new Os(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,l=new S,c=new ie,h=new S,d=[],u=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=a.normals[m],_=a.binormals[m];for(let v=0;v<=n;v++){let b=v/n*Math.PI*2,C=Math.sin(b),x=-Math.cos(b);l.x=x*y.x+C*_.x,l.y=x*y.y+C*_.y,l.z=x*y.z+C*_.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let y=0;y<=n;y++)c.x=m/t,c.y=y/n,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let y=1;y<=n;y++){let _=(n+1)*(m-1)+(y-1),v=(n+1)*m+(y-1),b=(n+1)*m+y,C=(n+1)*(m-1)+y;f.push(_,v,C),f.push(v,b,C)}}()})(),this.setIndex(f),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new zs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Io=class extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),zc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),zc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var $p=Object.freeze({__proto__:null,BoxGeometry:Ke,CapsuleGeometry:bo,CircleGeometry:Mo,ConeGeometry:en,CylinderGeometry:Qi,DodecahedronGeometry:So,EdgesGeometry:Eo,ExtrudeGeometry:Ao,IcosahedronGeometry:Ro,LatheGeometry:Bs,OctahedronGeometry:Co,PlaneGeometry:ii,PolyhedronGeometry:tn,RingGeometry:Sr,ShapeGeometry:Hn,SphereGeometry:kn,TetrahedronGeometry:Po,TorusGeometry:Er,TorusKnotGeometry:Lo,TubeGeometry:Tr,WireframeGeometry:Io});var sn=class extends vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function us(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Kd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Gn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Do=class extends Gn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:s=e,o=2*t-i;break;case Gl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*i-t;break;case Gl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),g=f*f,m=g*f,y=-u*m+2*u*g-u*f,_=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*f+1,v=(-1-p)*m+(1.5+p)*g+.5*f,b=p*m-p*g;for(let C=0;C!==o;++C)s[C]=y*a[h+C]+_*a[c+C]+v*a[l+C]+b*a[d+C];return s}},Uo=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},No=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(t,this.TimeBufferType),this.values=us(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Kd(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ua,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=ms;var ji=class extends Wt{};ji.prototype.ValueTypeName="bool",ji.prototype.ValueBufferType=Array,ji.prototype.DefaultInterpolation=ps,ji.prototype.InterpolantFactoryMethodLinear=void 0,ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Wt{};Oo.prototype.ValueTypeName="color";var Fo=class extends Wt{};Fo.prototype.ValueTypeName="number";var zo=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)At.slerpFlat(s,0,a,c-o,a,c,l);return s}},hr=class extends Wt{InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}};hr.prototype.ValueTypeName="quaternion",hr.prototype.DefaultInterpolation=ms,hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Wt{};Xi.prototype.ValueTypeName="string",Xi.prototype.ValueBufferType=Array,Xi.prototype.DefaultInterpolation=ps,Xi.prototype.InterpolantFactoryMethodLinear=void 0,Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Wt{};Bo.prototype.ValueTypeName="vector";var Ho=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Qd=new Ho,ko=class{constructor(e){this.manager=e!==void 0?e:Qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Hs=class extends wr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ha=new Ce,Bc=new S,Hc=new S,ks=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zn,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),Hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var kc=new Ce,rr=new S,ka=new S,Go=class extends ks{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(rr),ka.copy(i.position),ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ka),i.updateMatrixWorld(),n.makeTranslation(-rr.x,-rr.y,-rr.z),kc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}},Gs=class extends wr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Go}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vo=class extends ks{constructor(){super(new Bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Jp=new Ce,Kp=new Ce,Qp=new Ce;var Ws=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gc(){return(typeof performance>"u"?Date:performance).now()}var em=new S,tm=new At,im=new S,nm=new S;var rm=new S,sm=new At,am=new S,om=new S;var Jo="\\[\\]\\.:\\/",ep=new RegExp("["+Jo+"]","g"),Ga="[^"+Jo+"]",tp="[^"+Jo.replace("\\.","")+"]",ip=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ga)+/(WCOD+)?/.source.replace("WCOD",tp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga)+"$"),np=["material","materials","bones","map"],Xe=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ep,"")}static parseTrackName(e){let t=ip.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);np.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=class{constructor(r,e,t){let i=t||Xe.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray],Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lm=new Float32Array(1);var js=class{constructor(e,t,i=0,n=1/0){this.ray=new gi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Wo(e,this,i,t),i.sort(Vc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Wo(e[n],this,i,t);return i.sort(Vc),i}};function Vc(r,e){return r.distance-e.distance}function Wo(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){let n=r.children;for(let s=0,a=n.length;s<a;s++)Wo(n[s],e,t,!0)}}var Ar=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var cm=new ie;var hm=new S,um=new S;var dm=new S;var pm=new S,mm=new Ce,fm=new Ce;var gm=new S,vm=new Ae,_m=new Ae;var ym=new S,xm=new S,bm=new S;var Mm=new S,Sm=new fr;var Em=new ei;var Tm=new S;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);var ph={type:"change"},Ko={type:"start"},mh={type:"end"},Js=new gi,fh=new xt,sp=Math.cos(70*eh.DEG2RAD),Ks=class extends Qt{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rt.ROTATE,MIDDLE:Rt.DOLLY,RIGHT:Rt.PAN},this.touches={ONE:an.ROTATE,TWO:an.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ve),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ph),i.update(),s=n.NONE},this.update=function(){let U=new S,me=new At().setFromUnitVectors(e.up,new S(0,1,0)),Te=me.clone().invert(),He=new S,V=new At,St=new S,ot=2*Math.PI;return function(Cr=null){let qn=i.object.position;U.copy(qn).sub(i.target),U.applyQuaternion(me),o.setFromVector3(U),i.autoRotate&&s===n.NONE&&B(I(Cr)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Pt=i.minAzimuthAngle,Lt=i.maxAzimuthAngle;isFinite(Pt)&&isFinite(Lt)&&(Pt<-Math.PI?Pt+=ot:Pt>Math.PI&&(Pt-=ot),Lt<-Math.PI?Lt+=ot:Lt>Math.PI&&(Lt-=ot),Pt<=Lt?o.theta=Math.max(Pt,Math.min(Lt,o.theta)):o.theta=o.theta>(Pt+Lt)/2?Math.max(Pt,o.theta):Math.min(Lt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&x||i.object.isOrthographicCamera?o.radius=ee(o.radius):o.radius=ee(o.radius*c),U.setFromSpherical(o),U.applyQuaternion(Te),qn.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ln=!1;if(i.zoomToCursor&&x){let si=null;if(i.object.isPerspectiveCamera){let xi=U.length();si=ee(xi*c);let Ui=xi-si;i.object.position.addScaledVector(b,Ui),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let xi=new S(C.x,C.y,0);xi.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ln=!0;let Ui=new S(C.x,C.y,0);Ui.unproject(i.object),i.object.position.sub(Ui).add(xi),i.object.updateMatrixWorld(),si=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;si!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(si).add(i.object.position):(Js.origin.copy(i.object.position),Js.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Js.direction))<sp?e.lookAt(i.target):(fh.setFromNormalAndCoplanarPoint(i.object.up,i.target),Js.intersectPlane(fh,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ln=!0);return c=1,x=!1,ln||He.distanceToSquared(i.object.position)>a||8*(1-V.dot(i.object.quaternion))>a||St.distanceToSquared(i.target)>0?(i.dispatchEvent(ph),He.copy(i.object.position),V.copy(i.object.quaternion),St.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",ae),i.domElement.removeEventListener("pointercancel",de),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",ue),i.domElement.removeEventListener("pointerup",de),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ve),i._domElementKeyEvents=null)};let i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=n.NONE,a=1e-6,o=new Ar,l=new Ar,c=1,h=new S,d=new ie,u=new ie,p=new ie,f=new ie,g=new ie,m=new ie,y=new ie,_=new ie,v=new ie,b=new S,C=new ie,x=!1,E=[],D={};function I(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function O(U){let me=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*me)}function B(U){l.theta-=U}function P(U){l.phi-=U}let A=function(){let U=new S;return function(Te,He){U.setFromMatrixColumn(He,0),U.multiplyScalar(-Te),h.add(U)}}(),L=function(){let U=new S;return function(Te,He){i.screenSpacePanning===!0?U.setFromMatrixColumn(He,1):(U.setFromMatrixColumn(He,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(Te),h.add(U)}}(),H=function(){let U=new S;return function(Te,He){let V=i.domElement;if(i.object.isPerspectiveCamera){let St=i.object.position;U.copy(St).sub(i.target);let ot=U.length();ot*=Math.tan(i.object.fov/2*Math.PI/180),A(2*Te*ot/V.clientHeight,i.object.matrix),L(2*He*ot/V.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(A(Te*(i.object.right-i.object.left)/i.object.zoom/V.clientWidth,i.object.matrix),L(He*(i.object.top-i.object.bottom)/i.object.zoom/V.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function oe(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Z(U,me){if(!i.zoomToCursor)return;x=!0;let Te=i.domElement.getBoundingClientRect(),He=U-Te.left,V=me-Te.top,St=Te.width,ot=Te.height;C.x=He/St*2-1,C.y=-(V/ot)*2+1,b.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function ee(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function G(U){d.set(U.clientX,U.clientY)}function J(U){Z(U.clientX,U.clientX),y.set(U.clientX,U.clientY)}function ce(U){f.set(U.clientX,U.clientY)}function w(U){u.set(U.clientX,U.clientY),p.subVectors(u,d).multiplyScalar(i.rotateSpeed);let me=i.domElement;B(2*Math.PI*p.x/me.clientHeight),P(2*Math.PI*p.y/me.clientHeight),d.copy(u),i.update()}function T(U){_.set(U.clientX,U.clientY),v.subVectors(_,y),v.y>0?oe(O(v.y)):v.y<0&&q(O(v.y)),y.copy(_),i.update()}function k(U){g.set(U.clientX,U.clientY),m.subVectors(g,f).multiplyScalar(i.panSpeed),H(m.x,m.y),f.copy(g),i.update()}function K(U){Z(U.clientX,U.clientY),U.deltaY<0?q(O(U.deltaY)):U.deltaY>0&&oe(O(U.deltaY)),i.update()}function N(U){let me=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),me=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),me=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?B(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),me=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?B(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),me=!0;break}me&&(U.preventDefault(),i.update())}function $(U){if(E.length===1)d.set(U.pageX,U.pageY);else{let me=Mt(U),Te=.5*(U.pageX+me.x),He=.5*(U.pageY+me.y);d.set(Te,He)}}function F(U){if(E.length===1)f.set(U.pageX,U.pageY);else{let me=Mt(U),Te=.5*(U.pageX+me.x),He=.5*(U.pageY+me.y);f.set(Te,He)}}function z(U){let me=Mt(U),Te=U.pageX-me.x,He=U.pageY-me.y,V=Math.sqrt(Te*Te+He*He);y.set(0,V)}function W(U){i.enableZoom&&z(U),i.enablePan&&F(U)}function ne(U){i.enableZoom&&z(U),i.enableRotate&&$(U)}function te(U){if(E.length==1)u.set(U.pageX,U.pageY);else{let Te=Mt(U),He=.5*(U.pageX+Te.x),V=.5*(U.pageY+Te.y);u.set(He,V)}p.subVectors(u,d).multiplyScalar(i.rotateSpeed);let me=i.domElement;B(2*Math.PI*p.x/me.clientHeight),P(2*Math.PI*p.y/me.clientHeight),d.copy(u)}function M(U){if(E.length===1)g.set(U.pageX,U.pageY);else{let me=Mt(U),Te=.5*(U.pageX+me.x),He=.5*(U.pageY+me.y);g.set(Te,He)}m.subVectors(g,f).multiplyScalar(i.panSpeed),H(m.x,m.y),f.copy(g)}function se(U){let me=Mt(U),Te=U.pageX-me.x,He=U.pageY-me.y,V=Math.sqrt(Te*Te+He*He);_.set(0,V),v.set(0,Math.pow(_.y/y.y,i.zoomSpeed)),oe(v.y),y.copy(_);let St=(U.pageX+me.x)*.5,ot=(U.pageY+me.y)*.5;Z(St,ot)}function j(U){i.enableZoom&&se(U),i.enablePan&&M(U)}function X(U){i.enableZoom&&se(U),i.enableRotate&&te(U)}function ae(U){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",ue),i.domElement.addEventListener("pointerup",de)),Ne(U),U.pointerType==="touch"?we(U):ge(U))}function ue(U){i.enabled!==!1&&(U.pointerType==="touch"?et(U):be(U))}function de(U){Le(U),E.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",ue),i.domElement.removeEventListener("pointerup",de)),i.dispatchEvent(mh),s=n.NONE}function ge(U){let me;switch(U.button){case 0:me=i.mouseButtons.LEFT;break;case 1:me=i.mouseButtons.MIDDLE;break;case 2:me=i.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Rt.DOLLY:if(i.enableZoom===!1)return;J(U),s=n.DOLLY;break;case Rt.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;ce(U),s=n.PAN}else{if(i.enableRotate===!1)return;G(U),s=n.ROTATE}break;case Rt.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;G(U),s=n.ROTATE}else{if(i.enablePan===!1)return;ce(U),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Ko)}function be(U){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;w(U);break;case n.DOLLY:if(i.enableZoom===!1)return;T(U);break;case n.PAN:if(i.enablePan===!1)return;k(U);break}}function fe(U){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(U.preventDefault(),i.dispatchEvent(Ko),K(U),i.dispatchEvent(mh))}function ve(U){i.enabled===!1||i.enablePan===!1||N(U)}function we(U){switch(Di(U),E.length){case 1:switch(i.touches.ONE){case an.ROTATE:if(i.enableRotate===!1)return;$(U),s=n.TOUCH_ROTATE;break;case an.PAN:if(i.enablePan===!1)return;F(U),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case an.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(U),s=n.TOUCH_DOLLY_PAN;break;case an.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ne(U),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Ko)}function et(U){switch(Di(U),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;te(U),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;M(U),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;j(U),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(U),i.update();break;default:s=n.NONE}}function ye(U){i.enabled!==!1&&U.preventDefault()}function Ne(U){E.push(U.pointerId)}function Le(U){delete D[U.pointerId];for(let me=0;me<E.length;me++)if(E[me]==U.pointerId){E.splice(me,1);return}}function Di(U){let me=D[U.pointerId];me===void 0&&(me=new ie,D[U.pointerId]=me),me.set(U.pageX,U.pageY)}function Mt(U){let me=U.pointerId===E[0]?E[1]:E[0];return D[me]}i.domElement.addEventListener("contextmenu",ye),i.domElement.addEventListener("pointerdown",ae),i.domElement.addEventListener("pointercancel",de),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}};function Ct(r=1){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function gh(r){let e=parseInt(r.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function Ii(r,e,t){let i=gh(r),n=gh(e);return"#"+i.map((a,o)=>Math.round(a+(n[o]-a)*Math.max(0,Math.min(1,t)))).map(a=>a.toString(16).padStart(2,"0")).join("")}function ap(r,e){let t=r?.couche;if(t==null)return 99;if(typeof t=="number")return t;let i=(e-t.x0)/(t.x1-t.x0||1);return t.y0+(t.y1-t.y0)*Math.max(0,Math.min(1,i))}function _h(r,e){let t=Math.max(4,Math.round((r.u1-r.u0)*48)),i=Math.max(4,Math.round((r.y1-r.y0)*48)),n=document.createElement("canvas");n.width=t,n.height=i;let s=n.getContext("2d");r.flip&&(s.translate(t,0),s.scale(-1,1));let a=p=>(p-r.u0)*48,o=p=>(r.y1-p)*48,l=r.piece,c=!l,h=c?"#e6dfcf":l.peinture||"#ddd6c6";s.fillStyle=h,s.fillRect(0,0,t,i);let d=Ct(Math.round(r.u0*100+r.ligne*7+r.y0*13));for(let p=0;p<t*i/60;p++)s.fillStyle=`rgba(0,0,0,${d()*.04})`,s.fillRect(d()*t,d()*i,2,2);let u=c?.05:l.suie??0;if(!c&&u>0)for(let f=0;f<t;f+=4){let g=r.u0+f/48,m=r.axe==="h"?g:r.ligne,y=ap(l,m)+Math.sin(g*7.3)*.03+(d()-.5)*.03,_=o(r.y1),v=o(Math.max(r.y0,y));if(v>_){let b=s.createLinearGradient(0,o(r.y1>2.4?2.5:r.y1),0,v);b.addColorStop(0,`rgba(18,14,12,${Math.min(.97,.55+u*.42)})`),b.addColorStop(1,`rgba(28,22,18,${Math.min(.9,.35+u*.45)})`),s.fillStyle=b,s.fillRect(f,_,5,v-_)}s.fillStyle=`rgba(30,25,20,${u*.12})`,s.fillRect(f,Math.max(0,v),5,i-Math.max(0,v))}if(c){let p=s.createLinearGradient(0,o(.6),0,o(0));p.addColorStop(0,"rgba(90,80,60,0)"),p.addColorStop(1,"rgba(90,80,60,0.18)"),s.fillStyle=p,s.fillRect(0,o(.6),t,o(0)-o(.6))}for(let p of e)p.cote==="sol"||!(c?p.piece==="exterieur":p.piece===l.id)||p.cote!==r.cote||p.ligne!=null&&Math.abs(p.ligne-r.ligne)>.05||op(s,p,a,o,r,c);return n}function op(r,e,t,i,n,s){let a=n.H||2.5;if(e.type==="V"){let o=(e.angle||30)*Math.PI/180,l=a+.6,c=(l-e.y0)*Math.tan(o),h=()=>{r.beginPath(),r.moveTo(t(e.u-.06),i(e.y0)),r.lineTo(t(e.u-c),i(l)),r.lineTo(t(e.u+c),i(l)),r.lineTo(t(e.u+.06),i(e.y0)),r.closePath()};if(s||e.remplissage==="suie"){h();let d=r.createLinearGradient(0,i(e.y0),0,i(l));d.addColorStop(0,`rgba(15,12,10,${.9*(e.force??1)})`),d.addColorStop(1,`rgba(25,20,16,${.55*(e.force??1)})`),r.fillStyle=d,r.fill()}else{r.save(),h(),r.lineWidth=.16*48,r.strokeStyle="rgba(12,9,7,0.95)",r.stroke(),r.restore(),h();let d=r.createLinearGradient(0,i(e.y0),0,i(l));d.addColorStop(0,"rgba(214,208,196,0.97)"),d.addColorStop(.5,"rgba(188,180,166,0.92)"),d.addColorStop(1,"rgba(120,112,100,0.7)"),r.fillStyle=d,r.fill()}}else if(e.type==="cleanburn"||e.type==="calcination")r.beginPath(),r.ellipse(t(e.u),i(e.y),(e.rx||.5)*48,(e.ry||.5)*48,0,0,Math.PI*2),r.fillStyle=e.type==="cleanburn"?"rgba(200,194,182,0.75)":"rgba(238,235,226,0.8)",r.fill();else if(e.type==="protegee"){let o=t(Math.min(e.u0,e.u1)),l=t(Math.max(e.u0,e.u1));r.fillStyle=n.piece?.peinture||"#ddd6c6",r.globalAlpha=.85,r.fillRect(Math.min(o,l),i(e.y1),Math.abs(l-o),i(e.y0)-i(e.y1)),r.globalAlpha=1}else e.type==="demarcation"&&(r.strokeStyle="rgba(15,12,10,0.9)",r.lineWidth=3,r.beginPath(),r.moveTo(t(e.u0??n.u0),i(e.y)),r.lineTo(t(e.u1??n.u1),i(e.y)),r.stroke())}var vh={stratifie:{base:"#a98d66",joint:"rgba(60,40,20,0.25)",lame:[1.2,.19]},parquet:{base:"#9b7650",joint:"rgba(50,30,15,0.3)",lame:[.6,.09]},carrelage:{base:"#d3cfc6",joint:"rgba(90,90,90,0.35)",lame:[.45,.45]},beton:{base:"#9d9b95",joint:null},herbe:{base:"#6f7d4f",joint:null}};function yh(r,e){let t=Math.round(r.w*48),i=Math.round(r.d*48),n=document.createElement("canvas");n.width=t,n.height=i;let s=n.getContext("2d"),a=vh[r.sol]||vh.beton;s.fillStyle=a.base,s.fillRect(0,0,t,i);let o=Ct(Math.round(r.x*31+r.z*17+3));if(a.joint){s.strokeStyle=a.joint,s.lineWidth=1;let[h,d]=a.lame;for(let u=0;u<r.d;u+=d){s.beginPath(),s.moveTo(0,u*48),s.lineTo(t,u*48),s.stroke();let p=Math.round(u/d)%3*h/3;for(let f=-p;f<r.w;f+=h)s.beginPath(),s.moveTo(f*48,u*48),s.lineTo(f*48,(u+d)*48),s.stroke()}}for(let h=0;h<t*i/40;h++)s.fillStyle=`rgba(0,0,0,${o()*.05})`,s.fillRect(o()*t,o()*i,2,2);let l=r.suie??0;l>0&&(s.fillStyle=`rgba(25,18,12,${Math.min(.78,l*.62)})`,s.fillRect(0,0,t,i));let c=(h,d)=>[(h-r.x)*48,(d-r.z)*48];for(let h of e)if(!(h.cote!=="sol"||h.piece!==r.id)){if(h.type==="irregulier"){let d=Ct(h.seed||5);for(let u=0;u<26;u++){let[p,f]=c(h.x+(d()-.5)*2*h.rx,h.z+(d()-.5)*2*h.rz),g=(.12+d()*.35)*48;s.beginPath();for(let m=0;m<=12;m++){let y=m/12*Math.PI*2,_=g*(.6+d()*.6);m?s.lineTo(p+Math.cos(y)*_,f+Math.sin(y)*_):s.moveTo(p+Math.cos(y)*_,f+Math.sin(y)*_)}s.closePath(),s.fillStyle=d()<.25?"rgba(96,92,86,0.95)":"rgba(10,7,5,0.92)",s.fill()}}else if(h.type==="consomme"){let[d,u]=c(h.x,h.z),p=s.createRadialGradient(d,u,0,d,u,Math.max(h.rx,h.rz)*48*1.6);p.addColorStop(0,"rgba(110,106,100,1)"),p.addColorStop(.55,"rgba(100,96,90,0.95)"),p.addColorStop(.62,"rgba(8,6,4,0.95)"),p.addColorStop(1,"rgba(8,6,4,0)"),s.fillStyle=p,s.beginPath(),s.ellipse(d,u,h.rx*48*1.6,h.rz*48*1.6,0,0,Math.PI*2),s.fill()}else if(h.type==="protegee"){let[d,u]=c(h.x,h.z);s.fillStyle=Ii(a.base,"#2a2018",.35),s.beginPath(),s.ellipse(d,u,h.rx*48,h.rz*48,0,0,Math.PI*2),s.fill()}else if(h.type==="debris"){let d=Ct(Math.round(r.x*13+1)),u=Math.round(r.w*r.d*40*(h.densite??.5));for(let p=0;p<u;p++){s.fillStyle=d()<.5?"rgba(160,156,148,0.8)":"rgba(15,12,10,0.85)";let f=(.02+d()*.07)*48;s.fillRect(d()*t,d()*i,f,f*(.5+d()))}}}return n}function xh(r,e=!1,t=!1){let i=document.createElement("canvas");i.width=128,i.height=128;let n=i.getContext("2d");return n.fillStyle="rgba(0,0,0,0.35)",n.beginPath(),n.ellipse(64,118,42,8,0,0,Math.PI*2),n.fill(),n.fillStyle=t?"#ffd23f":"#f5c400",n.strokeStyle="#3a2f00",n.lineWidth=5,n.beginPath(),n.moveTo(20,112),n.lineTo(64,14),n.lineTo(108,112),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#111",n.font="bold 44px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(r),64,80),e&&(n.fillStyle="#1b6ef3",n.beginPath(),n.arc(104,26,20,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 22px system-ui",n.fillText("P",104,27)),t&&(n.fillStyle="#17a34a",n.beginPath(),n.arc(24,26,18,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 22px system-ui",n.fillText("\u2713",24,27)),i}function bh(){let r=document.createElement("canvas");r.width=64,r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,220,0.95)"),t.addColorStop(.3,"rgba(255,230,120,0.45)"),t.addColorStop(1,"rgba(255,200,80,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),r}function Mh(){let r=document.createElement("canvas");r.width=64,r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(32,96,4,32,80,60);return t.addColorStop(0,"rgba(255,250,200,1)"),t.addColorStop(.25,"rgba(255,190,60,0.95)"),t.addColorStop(.6,"rgba(240,90,20,0.6)"),t.addColorStop(1,"rgba(120,20,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,2),e.bezierCurveTo(60,50,64,100,32,126),e.bezierCurveTo(0,100,4,50,32,2),e.fill(),r}function yi(r){return r.niveaux?.length?r.niveaux:[{id:"rdc",nom:"Rez-de-chauss\xE9e",altitude:0,hauteur:r.hauteur||2.5,pieces:r.pieces||[],ouvertures:r.ouvertures||[],objets:r.objets||[],traces:r.traces||[],tremies:[]}]}function Wn(r,e){let i=yi(r).findIndex(n=>n.id===e);return i<0?0:i}function jn(r,e){let t=yi(r);return(t.find(i=>i.id===e)||t[0]).altitude||0}function Qo(r){return yi(r).flatMap((e,t)=>e.pieces.map(i=>({...i,_niv:t,_alt:e.altitude||0})))}var on="#1b1714",lp=.42,Rr=Math.PI/180;function Pe(r,e=0){return new Ae(Ii(r,on,e))}function Qe(r,e={}){return new sn({color:r,...e})}var Qs=class{constructor(e,t={}){this.container=e,this.opts=t,this.renderer=new gr({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jo,e.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("scene-canvas"),this.scene=new Ps,this.scene.background=new Ae("#1a1e23"),this.viewSize=15,this.camera=new Bn(-10,10,10,-10,-200,400),this.camera.position.set(20,22,26),this.controls=new Ks(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.minPolarAngle=.35,this.controls.maxPolarAngle=1.25,this.controls.minZoom=.35,this.controls.maxZoom=6,this.controls.screenSpacePanning=!0,this.controls.mouseButtons=t.editeur?{LEFT:-1,MIDDLE:Rt.ROTATE,RIGHT:Rt.PAN}:{LEFT:Rt.ROTATE,MIDDLE:Rt.DOLLY,RIGHT:Rt.PAN},this.controls.addEventListener("change",()=>{this._cutDirty=!0}),this.hemi=new Hs(15002879,4208170,1.15),this.scene.add(this.hemi),this.sun=new Vs(16774374,1.35),this.sun.position.set(10,18,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60}),this.sun.shadow.bias=-6e-4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new it,this.scene.add(this.root),this.overlay=new it,this.scene.add(this.overlay),this.photos=new Map,this.levelGroups=[],this.niveauVisible=null,this.planY=0,this.onPointer=null,this.hotspots=new Map,this.walls=[],this.focus=null,this.onPick=null,this.clock=new Ws,this.raycaster=new js,this._tween=null;let i=this.renderer.domElement,n=null;i.addEventListener("pointerdown",s=>{n={x:s.clientX,y:s.clientY},this.onPointer&&s.button===0&&(i.setPointerCapture?.(s.pointerId),this.onPointer("down",this._info(s)))}),i.addEventListener("pointerup",s=>{if(this.onPointer&&s.button===0&&this.onPointer("up",this._info(s)),!n)return;let a=Math.hypot(s.clientX-n.x,s.clientY-n.y);n=null,a<6&&s.button===0&&this._click(s)}),i.addEventListener("pointermove",s=>{this.onPointer?this.onPointer("move",this._info(s)):this._hover(s)}),i.addEventListener("contextmenu",s=>s.preventDefault()),this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(e),this.resize(),this._loop=this._loop.bind(this),this._raf=requestAnimationFrame(this._loop)}dispose(){cancelAnimationFrame(this._raf),this._ro.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}resize(){let e=this.container.clientWidth||800,t=this.container.clientHeight||600;this.renderer.setSize(e,t,!1);let i=e/t;this.camera.left=-this.viewSize*i/2,this.camera.right=this.viewSize*i/2,this.camera.top=this.viewSize/2,this.camera.bottom=-this.viewSize/2,this.camera.updateProjectionMatrix()}load(e,t={}){this.scn=e,this.root.traverse(l=>{l.geometry?.dispose?.();let c=Array.isArray(l.material)?l.material:[l.material];for(let h of c)h?.map?.dispose?.(),h?.dispose?.()}),this.root.clear(),this.hotspots.clear(),this.photos.clear(),this.walls=[],this.fouilleMeshes=[],this.smoke={},this.flash={},this.levelGroups=[],this.feu=null;let i=e.batiment;this.niveaux=yi(i),this.H=this.niveaux[0].hauteur||i.hauteur||2.5,this._buildGround(i);let n=e.fouille?Wn(i,e.fouille.niveau):-1;this.niveaux.forEach((l,c)=>{let h=new it;h.position.y=l.altitude||0,h.userData.niveau=c,this.root.add(h),this.levelGroups.push(h),this._g=h,this._niv=c,this._nivData=l,this._alt=l.altitude||0;let d=l.hauteur||this.H;for(let u of l.pieces)this._buildFloor(u,l.traces||[],l.tremies||[],c>0);this._buildWalls({...i,pieces:l.pieces,ouvertures:l.ouvertures||[],traces:l.traces||[],hauteur:d});for(let u of l.objets||[]){let p=this._buildObjet(u);p&&(p.userData.niveau=c,h.add(p))}c===n&&this._buildFouille(e.fouille),this._buildFireRig(l,d)}),this._g=this.root,n<0&&this._buildFouille(null),this.toiture=null,i.toiture&&this._buildToiture(i.toiture);let s=Qo(i),a=s.flatMap(l=>[l.x,l.x+l.w]),o=s.flatMap(l=>[l.z,l.z+l.d]);if(this.centre=s.length?new S((Math.min(...a)+Math.max(...a))/2,0,(Math.min(...o)+Math.max(...o))/2):new S,this.sun.target.position.copy(this.centre),this.sun.position.set(this.centre.x+8,18,this.centre.z+12),!t.garderCamera){this.controls.target.copy(this.centre),this.camera.position.copy(this.centre).add(new S(16,17,18));let l=s.length?Math.max(Math.max(...a)-Math.min(...a),Math.max(...o)-Math.min(...o)):10;this.camera.zoom=Math.min(1.6,Math.max(.45,10/l)),this.camera.updateProjectionMatrix()}this.setNiveauVisible(this.niveauVisible),this._cutDirty=!0}setToiture(e){if(this.modeToiture=e,!this.toiture)return;let t=this.levelGroups.length-1,i=this.niveauVisible==null||this.niveauVisible>=t;this.toiture.visible=e!=="cache"&&i;for(let n of this.toitTuiles)n.visible=e==="visible"}_buildToiture(e){let t=new it;t.userData.toiture=!0,this.toitTuiles=[];let i=e.x0-(e.debord??.3),n=e.x1+(e.debord??.3),s=e.z0-(e.debord??.3),a=e.z1+(e.debord??.3),o=e.altitude,l=e.hauteur||2,c=(e.axe||"x")==="x",h=c?n-i:a-s,d=(c?a-s:n-i)/2,u=Math.atan2(l,d),p=Math.hypot(d,l),f=e.effondrement||[],g=(D,I,O=1)=>f.some(B=>Math.hypot(D-B.x,I-B.z)<B.r*O),m=(D,I)=>f.reduce((O,B)=>Math.max(O,1-Math.min(1,Math.max(0,(Math.hypot(D-B.x,I-B.z)-B.r)/(B.r*.8)))),e.brule||0),y=Ct(77),_=e.couleur||"#b5532f",v=(D,I,O)=>{let B=(1-I)*d*O,P=o+I*l,A=c?(s+a)/2:(i+n)/2;return c?new S(i+D,P,A+B):new S(A+B,P,s+D)},b=.55,C=Math.ceil(h/b),x=Math.ceil(p/b);for(let D of[-1,1]){for(let O=0;O<C;O++)for(let B=0;B<x;B++){let P=(O+.5)*h/C,A=(B+.5)/x,L=v(P,A,D);if(g(L.x,L.z))continue;let H=m(L.x,L.z),oe=new Se(new Ke(c?h/C-.01:.04,.04,c?.04:h/C-.01),Qe(Ii(Ii(_,"#8f3c22",y()*.4),on,H*.8))),q=p/x-.01;c?(oe.scale.z=q/.04,oe.rotation.x=D>0?u:-u):(oe.scale.x=q/.04,oe.rotation.z=D>0?-u:u),oe.position.copy(L),oe.castShadow=!0,oe.receiveShadow=!0,t.add(oe),this.toitTuiles.push(oe)}let I=Math.floor(h/.6);for(let O=0;O<=I;O++){let B=O*h/I,P=1,A=v(B,.5,D);if(g(A.x,A.z,.6))continue;g(A.x,A.z,1.05)&&(P=.25+y()*.5);let L=m(A.x,A.z),H=v(B,0,D),oe=v(B,P,D),q=new Se(new Ke(.07,.12,1),Qe(Ii("#9b7448",on,Math.min(1,L+.1))));q.position.copy(H.clone().add(oe).multiplyScalar(.5)).add(new S(0,-.08,0)),q.scale.z=H.distanceTo(oe),q.lookAt(oe.x,oe.y-.08,oe.z),q.castShadow=!0,t.add(q)}}let E=12;for(let D=0;D<E;D++){let I=D*h/E,O=(D+1)*h/E,B=v((I+O)/2,1,1);if(g(B.x,B.z,.7))continue;let P=new Se(new Ke(c?h/E:.12,.16,c?.12:h/E),Qe(Ii("#8a6640",on,m(B.x,B.z))));P.position.set(B.x,B.y-.1,B.z),t.add(P)}for(let D of[0,1]){let I=new nn([new ie(-d+(e.debord??.3),0),new ie(d-(e.debord??.3),0),new ie(0,l-(e.debord??.3)*l/d)]),O=new Se(new Hn(I),Qe(e.pignon||"#e3dccd",{side:ri})),B=c?(s+a)/2:(i+n)/2;c?(O.position.set(D?e.x1:e.x0,o,B),O.rotation.y=Math.PI/2):O.position.set(B,o,D?e.z1:e.z0),t.add(O)}this.root.add(t),this.toiture=t,this.setToiture(this.modeToiture||"visible")}setNiveauVisible(e){this.niveauVisible=e,this.levelGroups.forEach((t,i)=>{t.visible=e==null||i<=e}),this.toiture&&this.setToiture(this.modeToiture||"visible");for(let t of this.hotspots.values())t.group.visible=(t.state.actif||t.state.toujours)&&this._nivOk(t.niv);for(let t of this.photos.values())t.group.visible=t.state.visible&&this._nivOk(t.niv);this._cutDirty=!0}_nivOk(e){return this.niveauVisible==null||(e??0)<=this.niveauVisible}roomAt(e,t,i){return(i==null?this._nivData?.pieces&&this._g!==this.root?this._nivData.pieces:this.niveaux[0].pieces:this.niveaux[i].pieces).find(s=>e>s.x+.001&&e<s.x+s.w-.001&&t>s.z+.001&&t<s.z+s.d-.001)||null}_buildGround(e){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),n=Ct(42);i.fillStyle="#5f6e43",i.fillRect(0,0,512,512);for(let p=0;p<9e3;p++)i.fillStyle=n()<.5?"rgba(40,55,25,0.25)":"rgba(150,160,90,0.18)",i.fillRect(n()*512,n()*512,2,3);for(let p=0;p<40;p++)i.fillStyle="rgba(190,170,120,0.18)",i.beginPath(),i.arc(n()*512,n()*512,6+n()*20,0,7),i.fill();let s=new ni(t);s.wrapS=s.wrapT=ur,s.repeat.set(8,8),s.colorSpace=$e;let a=new Se(new ii(70,70),Qe(16777215,{map:s}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,a.userData.sol="exterieur",this.root.add(a);for(let[p,f]of[["terrasse","#b9ad98"],["allee","#a7a29a"]]){let g=e[p];if(!g)continue;let m=new Se(new Ke(g.w,.05,g.d),Qe(f));m.position.set(g.x+g.w/2,0,g.z+g.d/2),m.receiveShadow=!0,m.userData.sol="exterieur",this.root.add(m)}let o=Ct(9),l=Qo(e),c=l.flatMap(p=>[p.x,p.x+p.w]),h=l.flatMap(p=>[p.z,p.z+p.d]);l.length||(c.push(0,1),h.push(0,1));let d=(Math.min(...c)+Math.max(...c))/2,u=(Math.min(...h)+Math.max(...h))/2;for(let p=0;p<14;p++){let f=o()*Math.PI*2,g=12+o()*9,m=d+Math.cos(f)*g,y=u+Math.sin(f)*g,_=new it,v=new Se(new Qi(.12,.16,1.4,6),Qe("#5a4330"));v.position.y=.7;let b=new Se(new en(.9+o()*.6,3+o()*2,7),Qe(o()<.5?"#2f4a2c":"#3b5a33"));b.position.y=2.6,b.castShadow=!0,_.add(v,b),_.position.set(m,0,y),this.root.add(_)}}_buildFloor(e,t,i=[],n=!1){let s=new ni(yh(e,t));s.colorSpace=$e,s.anisotropy=4;let a=i.filter(c=>c.x<e.x+e.w&&c.x+c.w>e.x&&c.z<e.z+e.d&&c.z+c.d>e.z),o;if(!a.length)o=new ii(e.w,e.d),o.rotateX(-Math.PI/2),o.translate(e.x+e.w/2,0,e.z+e.d/2);else{let c=new nn([new ie(e.x,-e.z),new ie(e.x+e.w,-e.z),new ie(e.x+e.w,-(e.z+e.d)),new ie(e.x,-(e.z+e.d))]);for(let u of a){let p=Math.max(u.x,e.x),f=Math.min(u.x+u.w,e.x+e.w),g=Math.max(u.z,e.z),m=Math.min(u.z+u.d,e.z+e.d);c.holes.push(new Ki([new ie(p,-g),new ie(p,-m),new ie(f,-m),new ie(f,-g)]))}o=new Hn(c),o.rotateX(-Math.PI/2);let h=o.attributes.position,d=o.attributes.uv;for(let u=0;u<h.count;u++)d.setXY(u,(h.getX(u)-e.x)/e.w,1-(h.getZ(u)-e.z)/e.d);d.needsUpdate=!0}let l=new Se(o,Qe(16777215,{map:s,side:n?ri:Kt}));if(l.position.y=.005,l.receiveShadow=!0,l.userData.sol=e.id,l.userData.niveau=this._niv,this._g.add(l),n){let c=new Se(new Ke(e.w,.2,e.d),Qe("#8f8a82"));c.position.set(e.x+e.w/2,-.105,e.z+e.d/2),a.length||this._g.add(c)}}_buildWalls(e){let t=e.hauteur||this.H,i=e.epaisseur||.16,n={h:new Map,v:new Map},s=(o,l,c,h)=>{let d=Math.round(l*100)/100;n[o].has(d)||n[o].set(d,[]),n[o].get(d).push([c,h])};for(let o of e.pieces)s("h",o.z,o.x,o.x+o.w),s("h",o.z+o.d,o.x,o.x+o.w),s("v",o.x,o.z,o.z+o.d),s("v",o.x+o.w,o.z,o.z+o.d);let a=e.traces||[];for(let o of["h","v"])for(let[l,c]of n[o]){c.sort((d,u)=>d[0]-u[0]);let h=[];for(let d of c){let u=h[h.length-1];u&&d[0]<=u[1]+.001?u[1]=Math.max(u[1],d[1]):h.push([...d])}for(let[d,u]of h){let p=new Set([d,u]);for(let g of e.pieces){let m=o==="h"?[g.x,g.x+g.w]:[g.z,g.z+g.d];for(let y of m)y>d+.001&&y<u-.001&&p.add(y)}let f=[...p].sort((g,m)=>g-m);for(let g=0;g<f.length-1;g++)this._buildWallPiece(o,l,f[g],f[g+1],g===0,g===f.length-2,e,a,t,i)}}}_buildWallPiece(e,t,i,n,s,a,o,l,c,h){let d=(i+n)/2,u=x=>e==="h"?this.roomAt(d,t+x):this.roomAt(t+x,d),p=u(.3),f=u(-.3),g=new xt(new S(0,-1,0),99),m={axe:e,ligne:t,a:i,b:n,plane:g,rooms:{},niv:this._niv,alt:this._alt};p&&(m.rooms[p.id]=e==="h"?new S(0,0,1):new S(1,0,0)),f&&(m.rooms[f.id]=e==="h"?new S(0,0,-1):new S(-1,0,0)),m.exterieur=!p||!f,this.walls.push(m);let y=(o.ouvertures||[]).filter(x=>x.axe===e&&Math.abs((e==="h"?x.z:x.x)-t)<.03).map(x=>({...x,c:e==="h"?x.x:x.z})).filter(x=>x.c>i&&x.c<n).sort((x,E)=>x.c-E.c),_=[],v=i-(s?h/2:0),b=n+(a?h/2:0);for(let x of y){let E=x.c-x.w/2,D=x.c+x.w/2;E>v&&_.push([v,E,0,c]);let I=x.allege||0;I>0&&_.push([E,D,0,I]),I+x.h<c&&_.push([E,D,I+x.h,c]),v=D,this._buildOuverture(x,e,t,h,g,p,f)}b>v&&_.push([v,b,0,c]);let C=Qe("#b8b1a3",{clippingPlanes:[g],side:ri});for(let[x,E,D,I]of _){let O=E-x,B=I-D;if(O<.01||B<.01)continue;let P=e==="h"?new Ke(O,B,h):new Ke(h,B,O),A=(ee,G)=>{let J,ce;e==="h"?G>0?(J=ee?"N":"S",ce=!1):(J=ee?"S":"N",ce=!0):G>0?(J=ee?"W":"E",ce=!0):(J=ee?"E":"W",ce=!1);let w=_h({u0:x,u1:E,y0:D,y1:I,axe:e,ligne:t,flip:ce,piece:ee,cote:J,H:c},l),T=new ni(w);return T.colorSpace=$e,T.anisotropy=4,Qe(16777215,{map:T,clippingPlanes:[g],side:ri})},L=A(p,1),H=A(f,-1),oe=e==="h"?[C,C,C,C,L,H]:[L,H,C,C,C,C],q=new Se(P,oe),Z=(x+E)/2;e==="h"?q.position.set(Z,D+B/2,t):q.position.set(t,D+B/2,Z),q.castShadow=!0,q.receiveShadow=!0,q.userData={mur:!0,axe:e,ligne:t,pos:p?.id||null,neg:f?.id||null,niveau:this._niv,u0:x,u1:E,y0:D,y1:I},this._g.add(q)}}_buildOuverture(e,t,i,n,s,a,o){let l=new it,c={clippingPlanes:[s],side:ri},h=Math.max(a?.suie||0,o?.suie||0),d=e.allege||0;if(e.type==="porte")if(e.garage){let u=new Se(new Ke(e.w,e.h,.05),Qe("#d2d2cf",c));u.position.set(0,e.h/2,0),l.add(u);for(let p=1;p<5;p++){let f=new Se(new Ke(e.w,.02,.06),Qe("#a9a9a6",c));f.position.set(0,p*e.h/5,0),l.add(f)}}else{let u=new Se(new Ke(e.w-.04,e.h-.02,.04),Qe(Pe("#b79d78",h*.55),c)),p=new it;u.position.set((e.w-.04)/2,(e.h-.02)/2,0),p.add(u),p.position.set(-e.w/2+.02,0,0),p.rotation.y=e.fermee?0:-80*Rr,l.add(p)}else{let u=e.brise?Pe("#efefef",.85):"#f2f2f0",p=(f,g,m,y)=>{let _=new Se(new Ke(f,g,.07),Qe(u,c));_.position.set(m,y,0),l.add(_)};if(p(e.w,.06,0,d+.03),e.brise?(p(.06,e.h*.45,-e.w/2+.03,d+e.h*.22),p(.06,e.h*.3,e.w/2-.03,d+e.h*.15)):(p(e.w,.06,0,d+e.h-.03),p(.06,e.h,-e.w/2+.03,d+e.h/2),p(.06,e.h,e.w/2-.03,d+e.h/2)),e.brise){let f=Ct(11);for(let g=0;g<46;g++){let m=new Se(new ii(.05+f()*.12,.04+f()*.1),new sn({color:"#b9d4de",transparent:!0,opacity:.7,side:ri}));m.rotation.x=-Math.PI/2,m.rotation.z=f()*3,m.position.set((f()-.5)*e.w*1.1,.012+f()*.004,(f()-.35)*1.6),l.add(m)}}else{let f=new Se(new ii(e.w-.1,e.h-.1),new sn({color:"#9fc0cf",transparent:!0,opacity:.32,...c}));f.position.set(0,d+e.h/2,0),l.add(f)}}t==="h"?l.position.set(e.x,0,i):(l.position.set(i,0,e.z),l.rotation.y=Math.PI/2),l.userData.ouverture=e,l.userData.niveau=this._niv,this._g.add(l)}_buildObjet(e){let t=e.brule||0,i=new it,n=(a,o,l,c,h=0,d=0,u=0,p={})=>{let f=new Se(new Ke(a,o,l),Qe(c,p));return f.position.set(h,d+o/2,u),f.castShadow=!0,f.receiveShadow=!0,i.add(f),f},s=(a,o,l,c,h=0,d=0,u=0,p=10)=>{let f=new Se(new Qi(a,o,l,p),Qe(c));return f.position.set(h,d+l/2,u),f.castShadow=!0,i.add(f),f};switch(e.type){case"canape":{let a=e.L||2.2,o=.9;if(t<.5){let l=Pe("#6d7480",t);n(a,.42,o,l,0,0,0),n(a,.45,.22,l,0,.42,-o/2+.11),n(.2,.25,o,l,-a/2+.1,.42,0),n(.2,.25,o,l,a/2-.1,.42,0)}else{for(let c=0;c<6;c++){let d=.15+.85*(c/5),u=-a/2+(c+.5)*a/6,p=.06+.22*d*(1-t*.5),f=n(a/6-.02,p,.07,on,u,.02,o/2-.04);f.userData.fouillable=!0;let g=n(a/6-.02,p*.9,.07,on,u,.02,-o/2+.04);g.userData.fouillable=!0;let m=n(a/6-.02,.1+.55*d*(1-t*.4),.06,"#221c18",u,.02,-o/2+.03);m.userData.fouillable=!0;for(let y=0;y<3;y++){let _=.06+.22*d,v=new Se(new Er(.045,.008,4,8),Qe("#4a423b"));v.rotation.x=Math.PI/2,v.position.set(u+(y-1)*.11,_,-.25+y*.25),v.userData.fouillable=!0,i.add(v)}}for(let[c,h]of[[-a/2+.05,-o/2+.05],[a/2-.05,-o/2+.05],[-a/2+.05,o/2-.05],[a/2-.05,o/2-.05]])n(.04,.05,.04,"#5a5550",c,0,h)}break}case"lampadaire":{s(.16,.18,.03,"#2b2b2b"),s(.015,.015,1.6,Pe("#9a9a9a",t*.6),0,.03);let a=new Se(new en(.25,.25,12,1,!0),Qe(Pe("#efe6cf",t),{side:ri}));a.position.set(0,1.7,0),a.rotation.x=Math.PI,i.add(a);break}case"multiprise":n(.32,.04,.06,Pe("#f4f4f4",t));break;case"prise":n(.08,.08,.03,Pe("#f4f4f4",.6));break;case"cable":{let a=e.points.map(c=>new S(c[0],c[1],c[2])),o=new yr(a),l=new Se(new Tr(o,40,t>.5?.006:.012,5),Qe(t>.5?"#b56a35":"#f2f2f2"));return i.add(l),i.userData.objet=e.id,i.userData.def=e,i}case"meubleTV":n(e.L||1.6,.48,.42,Pe("#7a5b3c",t));break;case"tv":{let a=n(1.12,.66*(1-t*.35),.06,Pe("#222",t*.3),0,.06,0);a.rotation.x=t*.35,n(.3,.06,.2,"#333",0,0,0);break}case"tableBasse":{for(let[o,l]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])n(.03,.4,.03,"#333",o,0,l);let a=new Se(new Ke(1.1,.012,.6),new sn({color:t>.3?"#4d5a5c":"#bcd2d6",transparent:!0,opacity:.8}));a.position.set(0,t>.3?.06:.41,0),a.rotation.z=t>.3?.08:0,i.add(a);break}case"tapis":{let a=new Se(new ii(e.w||2,e.d||1.4),Qe(Pe("#8c3b3b",t)));a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,i.add(a);break}case"etagere":{n(e.L||1.8,.03,.25,Pe("#8b6a46",t*.8),0,1.25,0);for(let a=-1;a<=1;a++)s(.04,.04,.09,"#b9c9cc",a*.25,1.28,0),s(.034,.034,.03,"#e9e1cf",a*.25,1.28,0);break}case"debris":{let a=Ct(Math.round((e.x+3)*97+e.z*31)),o=Math.round((e.w||1)*(e.d||1)*18);for(let l=0;l<o;l++){let c=a()<.6?"#2a2420":"#9a958c",h=n(.08+a()*.3,.015+a()*.05,.06+a()*.25,c,(a()-.5)*(e.w||1),0,(a()-.5)*(e.d||1));h.rotation.y=a()*3}break}case"cuisine":{let a=e.L||3;n(a,.88,.6,Pe("#e8e4dc",t*.5)),n(a,.04,.62,Pe("#5a5450",t*.4),0,.88,0),n(a,.7,.34,Pe("#e8e4dc",Math.min(1,t*2.5)),0,1.45,-.13),n(.6,.01,.5,"#111",.2,.92,.02);break}case"frigo":n(.6,1.8,.65,Pe("#eeeeee",t));break;case"table":{n(1.2,.04,.8,Pe("#a07a50",t),0,.72,0);for(let[a,o]of[[-.55,-.35],[.55,-.35],[-.55,.35],[.55,.35]])n(.05,.72,.05,Pe("#a07a50",t),a,0,o);break}case"lit":{let a=e.L||2,o=e.l||1.6;n(o,.3,a,Pe("#6b5038",t),0,0,0),n(o-.06,.22,a-.1,Pe("#eef0f2",t),0,.3,.02),n(o-.2,.1,.4,Pe("#ffffff",t),0,.52,-a/2+.3);break}case"armoire":n(1.2,2.1,.6,Pe("#8a6b4b",t));break;case"bureau":{n(1.2,.04,.6,Pe("#d9d4c8",t),0,.72,0),n(.05,.72,.55,Pe("#777",t),-.55,0,0),n(.05,.72,.55,Pe("#777",t),.55,0,0),n(.55,.35,.03,"#1d1d1d",0,.76,-.15);break}case"baignoire":n(1.7,.55,.75,"#f3f3f3");break;case"tableauElec":{n(.5,.45,.1,"#f1f1f1",0,0,0);for(let a=0;a<6;a++)n(.05,.08,.02,a===2?"#d13b3b":"#2b2b2b",-.17+a*.07,.18,.06);break}case"tondeuse":{n(.5,.3,.55,"#2f7a3a",0,.06,0),n(.04,.6,.04,"#333",-.2,.36,.3).rotation.x=-.5,n(.04,.6,.04,"#333",.2,.36,.3).rotation.x=-.5;break}case"jerrican":n(.3,.36,.17,"#c4291f"),n(.12,.05,.04,"#c4291f",0,.36,0);break;case"etabli":n(e.L||2,.06,.6,"#a07a50",0,.86,0),n(.06,.86,.6,"#7a5b3c",-(e.L||2)/2+.05,0,0),n(.06,.86,.6,"#7a5b3c",(e.L||2)/2-.05,0,0);break;case"daaf":{let a=s(.06,.06,.04,Pe("#f5f5f5",t),0,2.44,0);a.castShadow=!1;break}case"escalier":{let a=e.L||3,o=e.l||.9,l=e.H||this.H,c=Math.max(3,Math.round(l/.18));for(let h=0;h<c;h++){let d=n(a/c+.02,l*(h+1)/c,o,Pe("#a68a6a",t),-a/2+(h+.5)*a/c,0,0);d.castShadow=!0}break}case"conduit":{let a=s(e.r||.09,e.r||.09,e.H||6,Pe("#a9adb1",t*.5),0,e.y0||0,0,12);a.castShadow=!0;break}case"gravats":{let a=Ct(Math.round((e.x+5)*53+e.z*17)),o=Math.round((e.w||1)*(e.d||1)*22),l=e.couleurs||["#a34a2a","#2a2420","#8d8a84","#5b4630"];for(let c=0;c<o;c++)n(.1+a()*.35,.02+a()*.07,.08+a()*.3,l[Math.floor(a()*l.length)],(a()-.5)*(e.w||1),a()*.08,(a()-.5)*(e.d||1)).rotation.set(a()*.4,a()*3,a()*.4);for(let c=0;c<(e.poutres??3);c++)n(.08,.12,1.2+a()*1.5,on,(a()-.5)*(e.w||1),.05+a()*.2,(a()-.5)*(e.d||1)).rotation.set(a()*.5,a()*3,a()*.3);break}case"souche":n(e.w||.55,e.H||1.5,e.d||.55,"#b9a58c"),n((e.w||.55)+.1,.08,(e.d||.55)+.1,"#8d7c66",0,e.H||1.5,0);break;case"porteRoom":n(.9,2,.05,Pe("#b79d78",t));break;case"radiateur":n(.8,.6,.1,Pe("#efefef",t));break;case"chaise":n(.42,.04,.42,Pe("#8a6b4b",t),0,.45,0),n(.42,.45,.04,Pe("#8a6b4b",t),0,.45,-.19);for(let[a,o]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])n(.03,.45,.03,"#444",a,0,o);break;case"fauteuil":{let a=Pe("#7d6a58",t);n(.85,.42,.85,a),n(.85,.45,.2,a,0,.42,-.32),n(.15,.25,.85,a,-.35,.42,0),n(.15,.25,.85,a,.35,.42,0);break}case"machineLaver":n(.6,.85,.6,Pe("#f2f2f2",t));break;case"chaudiere":n(.45,.75,.35,Pe("#eeeeee",t),0,1.1,0);break;case"poele":n(.5,.8,.45,Pe("#2b2b2b",t)),s(.07,.07,1.4,"#333",0,.8,-.1);break;case"trottinette":n(1,.05,.15,Pe("#333",t),0,.08,0),n(.04,1,.04,Pe("#444",t),.45,.1,0);break;case"voiture":{n(4.1,.75,1.75,Pe("#7a8794",t),0,.3,0),n(2.2,.55,1.6,Pe("#7a8794",t),-.2,1.05,0);for(let[a,o]of[[-1.3,-.8],[1.3,-.8],[-1.3,.8],[1.3,.8]]){let l=s(.32,.32,.22,"#1b1b1b",a,0,o,12);l.rotation.x=Math.PI/2,l.position.y=.32}break}default:n(.4,.4,.4,"#888")}return i.position.set(e.x||0,e.y||0,e.z||0),i.rotation.y=(e.rot||0)*Rr,i.userData.objet=e.id,i.userData.def=e,i}_buildFouille(e){if(this.fouille=e||null,!e){(!this.rubanFouille||this.rubanFouille.parent==null)&&(this.rubanFouille=null);return}let t=e.aire,i=[...e.couches].sort((o,l)=>l.n-o.n),n=.006+(t.y||0);for(let o of i){let l=new it,c=Ct(o.n*77),h=Math.round(t.w*t.d*26);for(let d=0;d<h;d++){let u=.12+c()*.3,p=.1+c()*.3,f=o.h*(.6+c()*.7),g=new Se(new Ke(u,f,p),Qe(Ii(o.couleur,c()<.5?"#000000":"#bbbbbb",c()*.3)));g.position.set(t.x+u/2+c()*(t.w-u),n+f/2,t.z+p/2+c()*(t.d-p)),g.rotation.y=c()*3,g.castShadow=!0,g.receiveShadow=!0,l.add(g)}l.userData.couche=o.n,this._g.add(l),this.fouilleMeshes.push(l),n+=o.h*.85}let s=[[t.x,t.z],[t.x+t.w,t.z],[t.x+t.w,t.z+t.d],[t.x,t.z+t.d],[t.x,t.z]].map(([o,l])=>new S(o,(t.y||0)+.03,l)),a=new Is(new qe().setFromPoints(s),new vr({color:"#ffcc00"}));a.visible=!1,this.rubanFouille=a,this._g.add(a),this.setFouille(0)}setFouille(e){if(!this.fouille)return;this.fouilleNiveau=e;for(let n of this.fouilleMeshes)n.visible=n.userData.couche>e;let t=this.fouille.aire,i=new S;this.root.traverse(n=>{n.userData.fouillable&&(n.getWorldPosition(i),i.x>=t.x-.05&&i.x<=t.x+t.w+.05&&i.z>=t.z-.05&&i.z<=t.z+t.d+.05&&(n.visible=e<2))})}montrerRubanFouille(e){this.rubanFouille&&(this.rubanFouille.visible=!!e)}setHotspots(e){for(let i of this.hotspots.values())this.root.remove(i.group);this.hotspots.clear();let t=new ni(bh());for(let i of e){let n=new it;n.position.set(i.pos[0],i.pos[1]+(i.alt||0),i.pos[2]);let s=new Se(new kn(i.rayon||.32,8,6),new jt({visible:!1}));s.userData.hotspot=i.id,n.add(s);let a=new Ji(new Li({map:t,transparent:!0,depthTest:!1,blending:Xs}));a.scale.set(.45,.45,1),a.visible=!1,a.renderOrder=10,n.add(a),this.root.add(n),this.hotspots.set(i.id,{...i,group:n,hit:s,lueur:a,sprite:null,state:{}}),n.visible=!1}}updateHotspot(e,t){let i=this.hotspots.get(e);if(!i)return;i.state={...i.state,...t};let n=i.state;if(i.hit.visible=!!n.actif,i.group.visible=(!!n.actif||!!n.toujours)&&this._nivOk(i.niv),i.lueur.visible=!!n.actif&&!!n.lueur&&!n.decouvert,n.decouvert){let s=`${n.num}|${!!n.photo}|${!!n.analyse}`;if(i._key!==s){i.sprite&&i.group.remove(i.sprite);let a=new ni(xh(n.num,n.photo,n.analyse));a.colorSpace=$e,i.sprite=new Ji(new Li({map:a,depthTest:!1,transparent:!0})),i.sprite.scale.set(.34,.34,1),i.sprite.position.y=.26,i.sprite.renderOrder=20,i.group.add(i.sprite),i._key=s}i.sprite.visible=!0}else i.sprite&&(i.sprite.visible=!1)}setPhotos(e){for(let t of this.photos.values())this.overlay.remove(t.group);this.photos.clear();for(let t of e){let i=new it;i.position.set(t.pos[0],t.pos[1]+(t.alt||0),t.pos[2]);let n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d");s.fillStyle=t.couleur||"#1b6ef3",s.beginPath(),s.arc(48,48,40,0,7),s.fill(),s.strokeStyle="#fff",s.lineWidth=5,s.stroke(),s.font="44px system-ui",s.textAlign="center",s.textBaseline="middle",s.fillText("\u{1F4F7}",48,52);let a=new ni(n);a.colorSpace=$e;let o=new Ji(new Li({map:a,depthTest:!1,transparent:!0}));o.scale.set(.38,.38,1),o.renderOrder=25,i.add(o);let l=(t.yaw||0)*Rr,c=new Se(new en(.22,.55,4,1,!0),new jt({color:t.couleur||"#1b6ef3",transparent:!0,opacity:.35,side:ri,depthTest:!1}));c.rotation.set(-Math.PI/2,0,0),c.position.z=.3;let h=new it;h.rotation.y=l,h.add(c),i.add(h);let d=new Se(new kn(.25,8,6),new jt({visible:!1}));d.userData.photo=t.id,i.add(d),this.overlay.add(i);let u={visible:t.visible!==!1};i.visible=u.visible&&this._nivOk(t.niv),this.photos.set(t.id,{...t,group:i,hit:d,state:u})}}setPhotoVisible(e,t){let i=this.photos.get(e);i&&(i.state.visible=t,i.group.visible=t&&this._nivOk(i.niv))}_info(e){this.raycaster.setFromCamera(this._ndc(e),this.camera);let t=new xt(new S(0,1,0),-this.planY),i=new S,n=this.raycaster.ray.intersectPlane(t,i),s=[...[...this.photos.values()].map(d=>d.group),...this.root.children],o=this.raycaster.intersectObjects(s,!0).filter(d=>this._visibleDeep(d.object)&&d.object.type!=="Line"&&this._visibleClip(d.point,d.object))[0]||null,l=null,c=o?.object;for(;c&&!l;)(c.userData?.objet||c.userData?.ouverture||c.userData?.photo||c.userData?.hotspot)&&(l=c),c=c.parent;let h=null;return o?.face&&(h=o.face.normal.clone().transformDirection(o.object.matrixWorld)),{e,plan:n?i:null,hit:o,objet:l,normal:h,shift:e.shiftKey}}_visibleDeep(e){for(;e;){if(!e.visible)return!1;e=e.parent}return!0}setFocus(e,t,i=!0){this.focus={zone:e,piece:t};let n=new S(...e?.cible||[this.centre.x,0,this.centre.z]),s=e?.zoom||.6,a=this.camera.position.clone().sub(this.controls.target);if(e?.azimut!=null){let o=Math.hypot(a.x,a.z),l=e.azimut*Rr;a=new S(Math.sin(l)*o,a.y,Math.cos(l)*o)}if(!i){this.controls.target.copy(n),this.camera.position.copy(n).add(a),this.camera.zoom=s,this.camera.updateProjectionMatrix(),this._cutDirty=!0;return}this._tween={t0:performance.now(),dur:650,fromT:this.controls.target.clone(),toT:n,fromZ:this.camera.zoom,toZ:s,off:a},this._cutDirty=!0}rotateView(e){let t=this.camera.position.clone().sub(this.controls.target);t.applyAxisAngle(new S(0,1,0),e*Rr),this.camera.position.copy(this.controls.target).add(t),this._cutDirty=!0}vueDessus(e){let i=this.camera.position.clone().sub(this.controls.target).length();e?(this.controls.minPolarAngle=0,this.camera.position.copy(this.controls.target).add(new S(.001,i,.001))):(this.controls.minPolarAngle=.35,this.camera.position.copy(this.controls.target).add(new S(i*.5,i*.6,i*.6))),this._cutDirty=!0}setPieceCoupe(e){this.focus={zone:this.focus?.zone||null,piece:e||null},this._cutDirty=!0}setModeMurs(e){this.modeMurs=e,this._cutDirty=!0}_updateCut(){let e=this.focus,t=this.camera.position.clone().sub(this.controls.target);t.y=0,t.normalize();let i=e?.piece?this._nivDePiece(e.piece):this.niveauVisible??null,n=this.modeMurs==="pleins"||!e||!e.piece;for(let s of this.walls){let a=99,o=s.alt+lp;if(i!=null&&s.niv<i)a=99;else if(this.modeMurs==="bas")a=o;else if(n)this.modeMurs!=="pleins"&&this.niveauVisible!=null&&s.niv===this.niveauVisible&&this.niveaux.length>1&&this.editeurCoupe&&(a=o);else{let l=s.rooms[e.piece];l?a=l.dot(t)>.12?99:o:a=o}s.plane.constant=a}}_nivDePiece(e){let t=this.niveaux?.findIndex(i=>i.pieces.some(n=>n.id===e));return t<0?0:t}_ndc(e){let t=this.renderer.domElement.getBoundingClientRect();return new ie((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}_click(e){if(!this.onPick)return;this.raycaster.setFromCamera(this._ndc(e),this.camera);let t=[...this.hotspots.values()].filter(o=>o.state.actif).map(o=>o.hit),i=this.raycaster.intersectObjects(t,!1).filter(o=>this._visibleDeep(o.object)),n=this.raycaster.intersectObjects([...this.photos.values()].filter(o=>o.group.visible).map(o=>o.hit),!1);if(n[0]&&(!i[0]||n[0].distance<=i[0].distance)){this.onPick({photo:n[0].object.userData.photo});return}let s=this.raycaster.intersectObjects(this.root.children,!0).filter(o=>this._visibleDeep(o.object)&&!o.object.userData.hotspot&&o.object.type==="Mesh"&&this._visibleClip(o.point,o.object)),a=s[0]?.point||null;this.onPick({hotspot:i[0]?.object.userData.hotspot||null,point:a,sol:s[0]?.object.userData.sol||null})}_visibleClip(e,t){let n=(Array.isArray(t.material)?t.material[0]:t.material)?.clippingPlanes?.[0];return!n||n.distanceToPoint(e)>=0}_hover(e){if(!this.hotspots.size)return;this.raycaster.setFromCamera(this._ndc(e),this.camera);let t=[...this.hotspots.values()].filter(n=>n.state.actif&&n.state.decouvert).map(n=>n.hit),i=this.raycaster.intersectObjects(t,!1)[0];this.renderer.domElement.style.cursor=i?"pointer":this.curseur||"crosshair"}capture(e=420){this.renderer.render(this.scene,this.camera);let t=this.renderer.domElement,i=document.createElement("canvas");return i.width=e,i.height=Math.round(e*t.height/t.width),i.getContext("2d").drawImage(t,0,0,i.width,i.height),i.toDataURL("image/jpeg",.78)}_buildFireRig(e,t){let i=e.altitude||0;for(let a of e.pieces){let o=new Se(new Ke(a.w-.02,1,a.d-.02),new jt({color:"#100c0a",transparent:!0,opacity:.55,depthWrite:!1}));o.position.set(a.x+a.w/2,i+t,a.z+a.d/2),o.visible=!1,o.renderOrder=5,o.userData.H=t,o.userData.alt=i,this.root.add(o),this.smoke[a.id]=o;let l=new Se(new Ke(a.w-.05,t-.05,a.d-.05),new jt({color:"#ff6a1a",transparent:!0,opacity:0,depthWrite:!1,blending:Xs}));l.position.set(a.x+a.w/2,i+t/2,a.z+a.d/2),l.visible=!1,l.renderOrder=6,this.root.add(l),this.flash[a.id]=l}if(this.feu&&this.feu.parent)return;this.feu=new it;let n=new ni(Mh());this.flammes=[];for(let a=0;a<7;a++){let o=new Ji(new Li({map:n,transparent:!0,depthWrite:!1,blending:Xs}));o.userData.ph=Math.random()*6,o.userData.dx=(Math.random()-.5)*.5,o.userData.dz=(Math.random()-.5)*.5,this.feu.add(o),this.flammes.push(o)}this.feuLight=new Gs("#ff8a3a",0,9,1.6),this.feu.add(this.feuLight),this.feu.visible=!1,this.root.add(this.feu);let s=new Se(new Sr(.28,.36,32),new jt({color:"#ff2d2d",side:ri,depthTest:!1,transparent:!0}));s.rotation.x=-Math.PI/2,s.renderOrder=30,s.visible=!1,this.origineMarqueur=s,this.root.add(s)}setOrigineMarqueur(e){if(!e){this.origineMarqueur.visible=!1;return}this.origineMarqueur.position.set(e[0],(e.alt||0)+.04,e[2]),this.origineMarqueur.visible=!0}setReconstitution(e,t,i){if(!e){this.feu.visible=!1;for(let u in this.smoke)this.smoke[u].visible=!1,this.flash[u].visible=!1;this.hemi.intensity=1.15,this.sun.intensity=1.35,this.recon=null;return}let n=e.length-1,s=Math.max(0,Math.min(n,i)),a=Math.min(n-1,Math.floor(s)),o=s-a,l=e[a],c=e[Math.min(n,a+1)],h=(u,p)=>u+(p-u)*o,d=h(l.feu||0,c.feu||0);this.recon={feu:d},this.hemi.intensity=.55,this.sun.intensity=.4,this.feu.visible=d>.01,this.feu.position.set(t[0],t.alt||0,t[2]),this.feuLight.intensity=6*d;for(let u in this.smoke){let p=h(l.fumee?.[u]||0,c.fumee?.[u]||0),f=this.smoke[u];f.visible=p>.01;let g=f.userData.H||this.H;f.scale.y=p*g,f.position.y=(f.userData.alt||0)+g-p*g/2;let m=s>=a&&(l.flash||[]).includes(u)?o<.5||(c.flash||[]).includes(u)?1:1-(o-.5)*2:(c.flash||[]).includes(u)?o:0;this.flash[u].visible=m>.01,this.flash[u].material.opacity=.32*m}}_loop(){this._raf=requestAnimationFrame(this._loop);let e=performance.now();if(this._tween){let i=this._tween,n=Math.min(1,(e-i.t0)/i.dur),s=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;this.controls.target.lerpVectors(i.fromT,i.toT,s),this.camera.position.copy(this.controls.target).add(i.off),this.camera.zoom=i.fromZ+(i.toZ-i.fromZ)*s,this.camera.updateProjectionMatrix(),this._cutDirty=!0,n>=1&&(this._tween=null)}this.controls.update(),this._cutDirty&&(this._updateCut(),this._cutDirty=!1);let t=this.clock.getElapsedTime();for(let i of this.hotspots.values())if(i.lueur.visible){let n=.3+.18*Math.sin(t*3+i.pos[0]);i.lueur.scale.set(n,n,1)}if(this.feu?.visible&&this.recon){let i=this.recon.feu;this.flammes.forEach((n,s)=>{let a=.85+.25*Math.sin(t*9+n.userData.ph),o=(.35+1.6*i)*a;n.scale.set(o*.55,o,1),n.position.set(n.userData.dx*(.3+i),o/2,n.userData.dz*(.3+i))}),this.feuLight.position.set(0,.8,0)}this.origineMarqueur?.visible&&(this.origineMarqueur.material.opacity=.6+.4*Math.sin(t*4)),this.renderer.render(this.scene,this.camera)}};function Sh(r){let e=r.batiment||(r.batiment={});e.niveaux?.length||(e.niveaux=yi(e).map(i=>({...i})),delete e.pieces,delete e.ouvertures,delete e.objets,delete e.traces);for(let i of e.niveaux)i.pieces||=[],i.ouvertures||=[],i.objets||=[],i.traces||=[],i.tremies||=[],i.hauteur||=e.hauteur||2.5,i.altitude||=0;let t=e.niveaux[0].id;for(let i of r.observations||[])i.niveau||=t;for(let i of r.photos||[])i.niveau||=t;for(let i of r.hypotheses?.origines||[])i.niveau||=t;return r.fouille&&(r.fouille.niveau||=t),r.photos||=[],r.medias||={},r}var el="NFPA 921 \u2014 \xE9dition 2011";var Eh=[{id:"accidentelle",nom:"Accidentelle",ref:"19.2.1.1"},{id:"naturelle",nom:"Naturelle",ref:"19.2.1.2"},{id:"volontaire",nom:"Volontaire (incendiary)",ref:"19.2.1.3"},{id:"indeterminee",nom:"Ind\xE9termin\xE9e",ref:"19.2.1.4"},{id:"suspecte",nom:"Suspecte",ref:"19.2.1",piege:!0}],Th=[{id:"probable",nom:"Probable (> 50 %)",ref:"4.5.1"},{id:"possible",nom:"Possible",ref:"4.5.1"},{id:"suspecte",nom:"Suspect\xE9e",ref:"4.5.2",piege:!0}];var tl={nfpa921:{court:"NFPA 921",annee:2011,langue:"en",base:!0,ref:"NFPA 921 \u2014 Guide for Fire and Explosion Investigations, \xE9dition 2011, National Fire Protection Association.",role:"R\xE9f\xE9rence de base du jeu : m\xE9thode scientifique, science du feu, trac\xE9s, origine, cause, classification."},lentini:{court:"Lentini",annee:2013,langue:"en",ref:"J. J. Lentini, Scientific Protocols for Fire Investigation, 2e \xE9dition, CRC Press, 2013.",role:"Protocoles d'enqu\xEAte, mythes de l'enqu\xEAte incendie, sources d'erreur et nombreux cas r\xE9els."},chandler:{court:"Chandler",annee:2009,langue:"en",ref:"R. K. Chandler, Fire Investigation, Delmar Cengage Learning, 2009.",role:"Manuel de terrain : s\xE9curit\xE9, sc\xE8ne, \xE9lectricit\xE9, trac\xE9s, preuves, entretiens, rapport."},cnpp:{court:"CNPP",annee:2011,langue:"fr",ref:"CNPP, \xC9tude pr\xE9vention EP 02-11 \u2014 M\xE9thodologie de recherche des causes d'incendie.",role:"R\xE9f\xE9rence fran\xE7aise : lecture des indices, d\xE9marche sur les lieux, pr\xE9l\xE8vements, s\xE9curit\xE9 de l'expert."},enfsi:{court:"ENFSI",annee:2017,langue:"en",ref:"ENFSI, Best Practice Manual for the Investigation of Fire Scenes, ENFSI-BPM-FEI-01, version 02, 2017.",role:"Bonnes pratiques des laboratoires forensiques europ\xE9ens (primo-intervenants, sc\xE8ne, fouille, pr\xE9l\xE8vements)."},aaas:{court:"AAAS",annee:2017,langue:"en",ref:"AAAS, Forensic Science Assessments: A Quality and Gap Analysis \u2014 Fire Investigation, 2017.",role:"Bilan scientifique : ce qui est d\xE9montr\xE9, ce qui ne l'est pas, biais et besoins de recherche."},gorbett:{court:"Gorbett et al.",annee:2015,langue:"en",ref:"G. E. Gorbett, B. J. Meacham, C. B. Wood, N. A. Dembsey, \xAB Use of damage in fire investigation: a review of fire patterns analysis, research and future direction \xBB, Fire Science Reviews, 4:4, 2015.",role:"Revue de la recherche sur les trac\xE9s : ce que les d\xE9g\xE2ts permettent (ou non) de conclure."},usfa:{court:"USFA",annee:2016,langue:"en",ref:"FEMA / USFA / National Fire Academy, Fire Investigation: Fire Dynamics and Modeling (FI:FDM), manuel du stagiaire, 2e \xE9dition, 2016.",role:"Dynamique du feu en compartiment, essais, mod\xE8les math\xE9matiques et num\xE9riques."},leberrera:{court:"Leberrera",langue:"fr",ref:"G. Leberrera, La recherche des causes et circonstances des incendies, une nouvelle approche post-combustion.",role:"Cadre fran\xE7ais de la RCCI : acteurs, proc\xE9dures, examen des lieux, \xE9lectricit\xE9, t\xE9moignages, rapport."},lcpp:{court:"LCPP",annee:2015,langue:"fr",ref:"A. Thiry-Muller (Laboratoire central de la pr\xE9fecture de police), L'expertise judiciaire et la science de l'incendie, \xE9cole th\xE9matique du CNRS, Porticcio, 2015.",role:"L'expertise post-incendie en France : laboratoires, d\xE9marche, essais et simulation."},suzanne:{court:"Suzanne",annee:2009,langue:"fr",ref:"M. Suzanne, Conditions d'utilisation de mod\xE8les num\xE9riques pour l'\xE9valuation de sc\xE9narios de d\xE9part de feu dans un cadre d'investigation post-incendie, th\xE8se, INSA de Rouen, 2009.",role:"Quand et comment utiliser la simulation num\xE9rique pour tester un sc\xE9nario."},forensis:{court:"Forensis",annee:2014,langue:"en",ref:"Forensic Architecture (dir.), Forensis: The Architecture of Public Truth, Sternberg Press, 2014.",role:"Reconstitution d'\xE9v\xE9nements \xE0 partir des b\xE2timents, des images et des sources ouvertes."},nfpa1033:{court:"NFPA 1033",annee:2003,langue:"en",ref:"NFPA 1033 \u2014 Standard for Professional Qualifications for Fire Investigator, \xE9dition 2003.",role:"Comp\xE9tences attendues de l'enqu\xEAteur : sc\xE8ne, documentation, preuves, entretiens, rapport."},row:{court:"Row",langue:"en",ref:"D. A. Row, Report Writing for Fire Investigators (support de formation).",role:"R\xE9diger un rapport d'expert : faits, analyses, opinion et m\xE9thode."},nfc15100:{court:"NF C 15-100",annee:2002,langue:"fr",ref:"NF C 15-100 \u2014 Installations \xE9lectriques \xE0 basse tension (AFNOR, 2002).",role:"R\xE8gles d'installation \xE9lectrique : protections, sections, appareillage."}},wh=[{id:"methode",titre:"M\xE9thode scientifique",nfpa:["4.1","4.2","4.3","4.4","18.2","18.6","18.6.1","18.6.2","18.6.3","18.6.4","18.7"],voir:[["lentini","chap. 4, \xA7 4.3","Partir de l'hypoth\xE8se nulle (\xAB cause non d\xE9termin\xE9e \xBB) et ne la quitter que lorsque les donn\xE9es y obligent."],["lentini","chap. 4, \xA7 4.14","D\xE9velopper puis tester chaque hypoth\xE8se contre toutes les donn\xE9es."],["cnpp","\xA7 2 (d\xE9marche sur les lieux)","La m\xEAme d\xE9marche en fran\xE7ais : pr\xE9paration, observations, relev\xE9s, lieu d'ignition, cause."],["enfsi","\xA7 12 et annexe A2 \xA7 12.1","Interpr\xE9tation : formuler plusieurs hypoth\xE8ses, puis retenir l'hypoth\xE8se finale."],["leberrera","\xAB La m\xE9thode RCCI vue par le recueil NFPA 921 \xBB","Transposition de la d\xE9marche NFPA 921 dans la pratique fran\xE7aise."]]},{id:"biais",titre:"Biais et pr\xE9somption",nfpa:["4.3.7","4.3.8","4.3.9"],voir:[["aaas","partie A (Fire Scene Investigation)","Le risque de biais cognitif est identifi\xE9 comme un point faible majeur de l'enqu\xEAte incendie."],["lentini","chap. 9, \xA7 9.2 \xE0 9.6","Donn\xE9es critiques ignor\xE9es, mal interpr\xE9t\xE9es ou incoh\xE9rentes \xE9cart\xE9es : les erreurs classiques."],["lentini","chap. 9, \xA7 9.10","Affaires judiciaires r\xE9elles, chacune suivie d'une analyse des erreurs commises."]]},{id:"certitude",titre:"Niveau de certitude et revue",nfpa:["4.5","4.6"],voir:[["lentini","chap. 4, \xA7 4.14","Une hypoth\xE8se qui n'a pas r\xE9sist\xE9 aux tests ne peut pas \xEAtre pr\xE9sent\xE9e comme probable."],["row","support de formation","Distinguer, dans le rapport, les faits, l'analyse et l'opinion de l'expert."],["lcpp","partie 1 (cadre)","Le cadre de l'expertise judiciaire fran\xE7aise : ce que le magistrat attend d'un avis."]]},{id:"feu",titre:"Science du feu et inflammation",nfpa:["5.1","5.2","5.3","5.4","5.5","5.6","5.7","5.8","5.9"],voir:[["usfa","unit\xE9 1","Bases de la dynamique du feu : transferts thermiques, puissance, inflammation."],["lentini","chap. 3, \xA7 3.1 \xE0 3.6","Chimie du feu, inflammation chimique, combustion couvante, flammes."],["cnpp","\xA7 1.1","Rappels sur l'incendie : combustible, comburant, transmission de la chaleur, m\xE9canismes d'ignition."]]},{id:"couvante",titre:"Combustion lente, auto-\xE9chauffement",nfpa:["5.7.4.1"],voir:[["lentini","chap. 3, \xA7 3.5","L'inflammation par combustion couvante : lente, peu visible, longtemps avant la flamme."],["cnpp","\xA7 1.1.5 (p. 15)","Auto-\xE9chauffement et auto-inflammation."],["lentini","chap. 6, \xA7 6.4.1","Tests d'inflammation spontan\xE9e."]]},{id:"compartiment",titre:"Feu en compartiment et embrasement g\xE9n\xE9ralis\xE9",nfpa:["5.10","6.3.2.4"],voir:[["usfa","unit\xE9 2","Dynamique du feu en compartiment : couche chaude, ventilation, embrasement g\xE9n\xE9ralis\xE9."],["lentini","chap. 3, \xA7 3.8","Feux de compartiment : comment l'embrasement efface ou cr\xE9e des trac\xE9s."],["lentini","chap. 9, \xA7 9.9.1","Erreur fr\xE9quente : conclure \xE0 un incendie volontaire sur l'aspect du sol d'une pi\xE8ce totalement embras\xE9e."],["aaas","partie A","Apr\xE8s embrasement g\xE9n\xE9ralis\xE9, la lecture des trac\xE9s pour l'origine devient beaucoup moins fiable."]]},{id:"fumees",titre:"Cheminement des fum\xE9es",nfpa:["5.12"],voir:[["cnpp","\xA7 2.2.1 (p. 37)","Les d\xE9p\xF4ts de fum\xE9es et ce qu'ils indiquent du sens de propagation."],["usfa","unit\xE9 2","\xC9coulements aux ouvertures et d\xE9placement des gaz chauds."]]},{id:"effets",titre:"Effets du feu (g\xE9n\xE9ralit\xE9s)",nfpa:["6","6.1","6.2","6.3","6.2.1","6.2.2","6.2.3","6.2.6","6.2.7","6.2.8","6.2.9","6.2.10","6.2.15","6.2.16"],voir:[["cnpp","\xA7 2.2 (p. 37 \xE0 61)","Catalogue des indices : fum\xE9es, ventilation, couche chaude, bois, b\xE9ton, pl\xE2tres, vitres, fusions."],["chandler","chap. 11 (p. 261)","Les trac\xE9s et leur interpr\xE9tation, illustr\xE9s de photos de terrain."],["gorbett","article complet","Ce que la recherche a valid\xE9 ou non dans l'usage des d\xE9g\xE2ts pour trouver l'origine."]]},{id:"carbonisation",titre:"Carbonisation du bois",nfpa:["6.2.4","6.3.6","17.4.3"],voir:[["cnpp","\xA7 2.2.7 (p. 46)","Carbonisation du bois : lecture relative et pr\xE9cautions."],["lentini","chap. 8, \xA7 8.4","Mythe : la profondeur ou l'aspect \xAB en \xE9cailles \xBB du charbon ne date pas le feu et ne prouve pas un acc\xE9l\xE9rant."],["gorbett","article complet","Profondeur de carbonisation : utile en relev\xE9 comparatif, peu fiable isol\xE9ment."]]},{id:"ecaillage",titre:"\xC9caillage du b\xE9ton",nfpa:["6.2.5"],voir:[["lentini","chap. 8, \xA7 8.7","Mythe : l'\xE9caillage n'est pas un indicateur de liquide inflammable."],["cnpp","\xA7 2.2.8 (p. 47)","L'\xE9clatement du b\xE9ton et ses causes multiples."]]},{id:"cleanburn",titre:"Clean burn",nfpa:["6.2.11"],voir:[["lentini","chap. 3, \xA7 3.13","Le clean burn : suies br\xFBl\xE9es par une exposition intense et prolong\xE9e."]]},{id:"calcination",titre:"Calcination du pl\xE2tre",nfpa:["6.2.12","17.4.4"],voir:[["cnpp","\xA7 2.2.11 (p. 52)","Comportement des pl\xE2tres au feu."],["gorbett","article complet","Relev\xE9s de profondeur de calcination : m\xE9thode et limites."]]},{id:"verre",titre:"Verre et vitrages",nfpa:["6.2.13"],voir:[["lentini","chap. 8, \xA7 8.3","Mythe d\xE9mont\xE9 : le verre fa\xEFenc\xE9 vient d'un refroidissement brutal (eau), pas d'un feu \xAB rapide \xBB."],["chandler","chap. 11, \xAB Windows and glass \xBB (p. 278)","Ce que le verre bris\xE9, fondu ou fa\xEFenc\xE9 peut et ne peut pas dire."],["cnpp","\xA7 2.2.12 (p. 52)","Les vitres comme indices de propagation et de ventilation."],["enfsi","annexe A2, \xA7 5.3.8","Relever o\xF9 se trouvent les \xE9clats (dedans, dehors) et l'\xE9tat des ouvrants."]]},{id:"ressorts",titre:"Ressorts affaiss\xE9s",nfpa:["6.2.14"],voir:[["lentini","chap. 8, \xA7 8.6","Mythe : l'affaissement des ressorts ne prouve ni un feu couvant ni un acc\xE9l\xE9rant."]]},{id:"victimes",titre:"Victimes",nfpa:["6.2.17","23"],voir:[["enfsi","annexe B1","Incendies avec victimes : coordination avec le m\xE9decin l\xE9giste."],["lentini","chap. 4, \xA7 4.13","Les feux mortels : pr\xE9cautions suppl\xE9mentaires."]]},{id:"panache",titre:"Trac\xE9s de panache, V et c\xF4nes",nfpa:["6.3.2.1","6.3.7.1","6.3.7.2","6.3.7.3","6.3.7.4","6.3.7.5","6.3.7.6","6.3.7.7","17.4.2"],voir:[["lentini","chap. 3, \xA7 3.9","Formation des trac\xE9s de panache, d'o\xF9 naissent les V."],["lentini","chap. 8, \xA7 8.10","Mythe : l'angle du V ne mesure pas la vitesse du feu ; il d\xE9pend surtout de la puissance et de la g\xE9om\xE9trie."],["gorbett","article complet","Les V restent un outil d'origine utile tant que la pi\xE8ce n'est pas embras\xE9e."],["cnpp","\xA7 2.2.1 (p. 37)","D\xE9p\xF4ts de fum\xE9es et pointes de suie au-dessus du foyer."]]},{id:"ventilation",titre:"Trac\xE9s de ventilation",nfpa:["6.3.2.2"],voir:[["lentini","chap. 3, \xA7 3.10","Les ouvertures cr\xE9ent des trac\xE9s intenses loin de l'origine."],["cnpp","\xA7 2.2.5 (p. 45)","Ventilation : le feu br\xFBle le plus l\xE0 o\xF9 l'air arrive."],["enfsi","annexe A2, \xA7 5.3.8","Ouvrants et suies autour des ouvertures : indices de ventilation."]]},{id:"couchechaude",titre:"Couche chaude et lignes de d\xE9marcation",nfpa:["6.3.2.3","6.3.3.1"],voir:[["cnpp","\xA7 2.2.6 (p. 45)","Couche chaude : hauteur, horizontalit\xE9 et ce qu'elle r\xE9v\xE8le."],["lentini","chap. 8, \xA7 8.5","Mythe : une ligne de d\xE9marcation nette ne signe pas un acc\xE9l\xE9rant."],["lentini","chap. 3, \xA7 3.12","Horizons, trac\xE9s de mouvement et d'intensit\xE9."],["usfa","unit\xE9 2","Descente de la couche de gaz chauds et flux rayonn\xE9 vers le sol."]]},{id:"lance",titre:"Traces de l'extinction",nfpa:["6.3.2.5","16.3.5"],voir:[["enfsi","annexe A1, \xA7 3.4 et \xA7 5","Primo-intervenants : limiter l'alt\xE9ration de la sc\xE8ne et la pr\xE9server."],["chandler","chap. 6 (p. 115)","Spoliation : ce qui se perd pendant et apr\xE8s l'extinction."]]},{id:"sols",titre:"Trac\xE9s au sol et trous dans le plancher",nfpa:["6.3.3.2","6.3.5","6.3.7.8","6.3.7.9","6.3.7.10","6.3.7.11"],voir:[["lentini","chap. 8, \xA7 8.9","Mythe : un feu \xAB bas \xBB ou un trou dans le plancher ne prouvent pas un liquide inflammable."],["lentini","chap. 9, \xA7 9.9.1","Le sol d'une pi\xE8ce totalement embras\xE9e : principale source d'erreurs de conclusion."],["cnpp","\xA7 2.2.14 (p. 54)","Feux de sol : causes possibles et v\xE9rifications."],["chandler","chap. 11, \xAB Floors \xBB (p. 282)","Lecture des trac\xE9s au sol."],["aaas","partie A","Les trac\xE9s irr\xE9guliers apparaissent aussi sans acc\xE9l\xE9rant, notamment apr\xE8s embrasement."]]},{id:"protegees",titre:"Zones prot\xE9g\xE9es et ombres thermiques",nfpa:["6.3.4"],voir:[["chandler","chap. 11, \xAB Protected areas \xBB (p. 289)","Replacer les objets dans leur position d'avant le feu."],["lentini","chap. 4, \xA7 4.8","La reconstitution de la sc\xE8ne remet chaque objet \xE0 sa place."]]},{id:"trous",titre:"Travers\xE9es de planchers",nfpa:["6.3.5"],voir:[["lentini","chap. 3, \xA7 3.11","Travers\xE9es de planchers : du haut vers le bas ou du bas vers le haut."]]},{id:"electricite",titre:"\xC9lectricit\xE9 et incendie",nfpa:["8"],voir:[["chandler","chap. 10 (p. 228)","\xC9lectricit\xE9 et incendie : bases utiles \xE0 l'enqu\xEAteur."],["leberrera","\xAB L'\xE9lectricit\xE9 et les d\xE9faillances \xE9lectriques \xBB","Effet Joule, oxydation des contacts, comportement des appareils face au feu."],["cnpp","\xA7 1.4 (p. 33)","L'incendie d'origine \xE9lectrique."],["nfc15100","norme d'installation","R\xE9f\xE9rence fran\xE7aise pour juger d'une installation (protections, sections)."]]},{id:"arcs",titre:"Fusions \xE9lectriques et cartographie des arcs",nfpa:["8.10","8.11","17.4.5"],voir:[["cnpp","\xA7 2.2.19 \xE0 2.2.21 (p. 60-61)","Fusions multiples des conducteurs, court-circuit, faux contact."],["lentini","chap. 3, \xA7 3.14","Trac\xE9s \xE9lectriques et leur interpr\xE9tation."],["chandler","chap. 10, \xAB Melting of conductors \xBB (p. 256)","Fusion par arc ou fusion par le feu."],["leberrera","\xAB Le perlage et ses significations \xBB","Les perles de fusion dans la pratique fran\xE7aise de la RCCI."]]},{id:"securite",titre:"S\xE9curit\xE9 sur la sc\xE8ne",nfpa:["12","17.3.2.2"],voir:[["enfsi","\xA7 14 et annexe A2, \xA7 14","Sant\xE9 et s\xE9curit\xE9 de l'enqu\xEAteur."],["chandler","chap. 2 (p. 29)","La s\xE9curit\xE9 d'abord : structure, \xE9nergies, atmosph\xE8re, EPI."],["cnpp","\xA7 2.8 (p. 80)","S\xE9curit\xE9 de l'expert sur les lieux."],["lentini","chap. 4, \xA7 4.6","La premi\xE8re reconnaissance commence par la s\xE9curit\xE9."]]},{id:"entretiens",titre:"Entretiens et t\xE9moignages",nfpa:["13.1","13.2","13.3","13.4"],voir:[["chandler","chap. 19 (p. 442)","Mener un entretien : pr\xE9paration, questions ouvertes, prise de notes."],["enfsi","annexe A2, \xA7 5.2.1","Recueillir l'information aupr\xE8s des personnes avant d'entrer."],["lentini","chap. 9, \xA7 9.9.5","Les t\xE9moins neutres placent-ils l'origine ailleurs ? Une question \xE0 se poser syst\xE9matiquement."],["leberrera","\xAB L'analyse de la d\xE9claration du t\xE9moin \xBB","Exploiter une d\xE9claration avec prudence."]]},{id:"osint",titre:"Sources publiques et priv\xE9es (OSINT)",nfpa:["13.5","13.6"],voir:[["chandler","chap. 21 (p. 477)","Sources d'information : registres, archives, donn\xE9es techniques."],["forensis","ouvrage","Reconstituer un \xE9v\xE9nement en croisant images, vid\xE9os et sources ouvertes."]]},{id:"documentation",titre:"Photographie et documentation",nfpa:["15"],voir:[["chandler","chap. 18 (p. 425), \xAB Photographs \xBB (p. 427)","Photographier du g\xE9n\xE9ral au particulier, avant toute modification."],["lentini","chap. 4, \xA7 4.7","Documenter la sc\xE8ne : photos, croquis, notes."],["enfsi","annexe A2, \xA7 8.2.2","Enregistrer chaque indice en place avant de le pr\xE9lever."],["nfpa1033","\xA7 4.3","Comp\xE9tence exig\xE9e : plan, photos et notes de terrain."],["leberrera","\xAB La photographie des indices \xBB","La photo comme preuve dans le dossier d'expertise."]]},{id:"rapport",titre:"Rapport",nfpa:["15.5","4.4.6"],voir:[["lentini","chap. 4, \xA7 4.15","Proc\xE9dure de r\xE9daction et de relecture du rapport."],["chandler","chap. 23 (p. 496)","Structure d'un rapport d'enqu\xEAte incendie."],["row","support de formation","Un rapport d'opinion : faits, donn\xE9es sur lesquelles l'expert s'appuie, m\xE9thode, conclusion."],["leberrera","\xAB Le rapport final d'expertise et son contenu \xBB","Pr\xE9-rapport et rapport final dans le cadre judiciaire fran\xE7ais."]]},{id:"preuves",titre:"Preuves, pr\xE9servation et spoliation",nfpa:["16.1","16.2","16.3","16.4","16.7","16.8","16.9","16.10","16.11","17.3.2.5","17.3.2.6"],voir:[["chandler","chap. 6 (p. 115) et chap. 8 (p. 159)","\xC9viter la spoliation ; collecter et conserver les preuves."],["lentini","chap. 4, \xA7 4.10 et \xA7 4.12","Spoliation, collecte et conservation des preuves."],["enfsi","annexe A1, \xA7 5","Pr\xE9server la sc\xE8ne d\xE8s l'arriv\xE9e des secours."],["leberrera","\xAB La protection et la pr\xE9servation des indices fiables \xBB","La cha\xEEne de transmission des indices."]]},{id:"prelevements",titre:"Pr\xE9l\xE8vements pour recherche d'acc\xE9l\xE9rants",nfpa:["16.5","16.6"],voir:[["enfsi","annexe A2, \xA7 8.2.3.2","O\xF9 pr\xE9lever : zones prot\xE9g\xE9es (plinthes, seuils), bords des zones br\xFBl\xE9es, mat\xE9riaux absorbants ; pr\xE9voir un \xE9chantillon de comparaison."],["cnpp","\xA7 2.7.2 (p. 77) et \xA7 3.1 (p. 82)","Pr\xE9l\xE8vements puis analyses de d\xE9bris en laboratoire."],["lentini","chap. 5","Analyse des r\xE9sidus de liquides inflammables : m\xE9thodes et crit\xE8res d'identification."],["chandler","chap. 17 (p. 417)","D\xE9tection des acc\xE9l\xE9rants sur la sc\xE8ne."],["aaas","partie B (Fire Debris Analysis)","Forces et limites de l'analyse des d\xE9bris."]]},{id:"detection",titre:"D\xE9tecteurs (PID) et chiens",nfpa:["16.5.4.2","16.5.4.7","14.5.10"],voir:[["lentini","chap. 9, \xA7 9.9.3","Une alerte de chien ou de d\xE9tecteur non confirm\xE9e par le laboratoire ne prouve rien."],["aaas","partie A","Chiens et d\xE9tecteurs orientent les pr\xE9l\xE8vements ; seul le laboratoire confirme."],["enfsi","annexe A2, \xA7 8.2.3.2","Chiens et d\xE9tecteurs \xE9lectroniques aident \xE0 choisir o\xF9 pr\xE9lever."]]},{id:"examen",titre:"Examen de la sc\xE8ne : de l'ext\xE9rieur vers l'int\xE9rieur",nfpa:["17.1","17.2","17.3","17.3.1"],voir:[["cnpp","\xA7 2.1 (p. 35) et \xA7 2.4.3 (p. 69)","Observer du g\xE9n\xE9ral au d\xE9tail, puis consigner les observations."],["enfsi","annexe A2, \xA7 5.3.4 \xE0 5.3.7","Vue d'ensemble, abords, ext\xE9rieur, puis int\xE9rieur."],["chandler","chap. 12 (p. 295)","Examiner la sc\xE8ne avec m\xE9thode."],["leberrera","\xAB Les m\xE9thodes utilis\xE9es pour l'examen ext\xE9rieur des lieux \xBB","Examen ext\xE9rieur puis int\xE9rieur."]]},{id:"fouille",titre:"Fouille et reconstruction",nfpa:["17.3.2"],voir:[["enfsi","annexe A2, \xA7 5.4.1","Fouille stratigraphique : de la zone la moins touch\xE9e vers l'origine pr\xE9sum\xE9e, couche par couche."],["lentini","chap. 4, \xA7 4.8","Reconstruire la sc\xE8ne : remettre les objets \xE0 leur place pour relire les trac\xE9s."],["cnpp","\xA7 2.4.3 (p. 69) et \xA7 2.4.4 (p. 72)","Observations et relev\xE9s pendant le d\xE9blaiement."]]},{id:"origine",titre:"D\xE9termination de l'origine",nfpa:["17.4","17.4.1","17.4.6","17.4.7","17.5","17.6","17.7"],voir:[["lentini","chap. 4, \xA7 4.11","D\xE9terminer l'origine avant de chercher la cause."],["cnpp","\xA7 2.5 (p. 74)","Le lieu d'ignition."],["enfsi","annexe A2, \xA7 5.3.9","D\xE9limiter la zone d'int\xE9r\xEAt."],["gorbett","article complet","Fiabilit\xE9 de l'analyse des trac\xE9s pour localiser l'origine."]]},{id:"cause",titre:"D\xE9termination de la cause",nfpa:["18.1","18.3","18.4","18.5"],voir:[["cnpp","\xA7 2.6 (p. 76)","La recherche de la cause \xE0 partir du lieu d'ignition."],["chandler","chap. 13 (p. 311)","Cause : combustible, source d'ignition et circonstances qui les ont r\xE9unis."],["nfpa1033","\xA7 4.2","L'enqu\xEAteur doit \xE9tablir origine, source d'ignition, mat\xE9riau enflamm\xE9 et circonstances."]]},{id:"competence",titre:"Comp\xE9tence de la source d'ignition",nfpa:["18.3.2","18.4.2","18.5.3","18.5.4","18.6.5.2"],voir:[["chandler","chap. 9, \xAB Competent ignition sources \xBB (p. 195)","Une source est comp\xE9tente si elle apporte assez d'\xE9nergie, assez longtemps, au bon combustible."],["lentini","chap. 6","D\xE9faillances des appareils et sources d'ignition courantes."]]},{id:"negcorpus",titre:"\xC9limination et negative corpus",nfpa:["18.6.5","18.6.5.1"],voir:[["lentini","chap. 4, \xA7 4.4","La m\xE9thode du negative corpus : pourquoi elle ne prouve rien."],["chandler","chap. 13, \xAB Elimination \xBB (p. 326)","\xC9liminer des causes n'autorise pas \xE0 en affirmer une sans preuve positive."],["leberrera","\xAB Le processus d'\xE9limination, les causes probables, les mythes possibles \xBB","La m\xEAme mise en garde dans la pratique fran\xE7aise."]]},{id:"classification",titre:"Classification de la cause",nfpa:["19"],voir:[["chandler","chap. 13, \xAB Classification \xBB (p. 327)","Accidentel, naturel, volontaire, ind\xE9termin\xE9."],["lcpp","partie 1 (cadre)","Ce que la classification implique dans la proc\xE9dure judiciaire fran\xE7aise."]]},{id:"chronologie",titre:"Chronologie et outils d'analyse",nfpa:["20","20.1","20.2","20.3"],voir:[["enfsi","\xA7 10 et \xA7 11","S\xE9quence des \xE9v\xE9nements et reconstitution."],["forensis","ouvrage","Assembler une chronologie \xE0 partir de sources h\xE9t\xE9rog\xE8nes."]]},{id:"modelisation",titre:"Mod\xE9lisation et essais",nfpa:["20.4","20.5","20.6"],voir:[["usfa","unit\xE9s 3 \xE0 5","Essais, corr\xE9lations math\xE9matiques et mod\xE8les num\xE9riques."],["suzanne","th\xE8se","Conditions d'emploi d'un mod\xE8le num\xE9rique pour tester un sc\xE9nario de d\xE9part de feu."],["lentini","chap. 3, \xA7 3.15 et chap. 9, \xA7 9.9.6","Apport du mod\xE8le, et erreur d'une conclusion fond\xE9e seulement sur un calcul ou une simulation."],["lcpp","partie 2","Simulation et essais en vraie grandeur pour valider une hypoth\xE8se."],["cnpp","\xA7 3.2 (p. 89)","Reconstitution et essais."]]},{id:"volontaire",titre:"Incendie volontaire",nfpa:["22"],voir:[["lentini","chap. 9, \xA7 9.9","Les questions \xE0 poser avant de retenir un incendie volontaire."],["chandler","chap. 16 (p. 373)","L'incendie volontaire : indicateurs et prudence."],["cnpp","\xA7 1.3 (p. 31)","L'incendie volontaire."]]},{id:"appareils",titre:"Appareils et \xE9quipements",nfpa:["24"],voir:[["lentini","chap. 6, \xA7 6.3","D\xE9faillances d'appareils : cuisini\xE8res, friteuses, chauffages, luminaires encastr\xE9s, tableaux."],["lentini","chap. 7","Cas r\xE9els class\xE9s par type de source (s\xE8che-linge, chauffage, \xE9lectricit\xE9, gaz\u2026)."]]},{id:"vehicules",titre:"V\xE9hicules",nfpa:["25"],voir:[["leberrera","\xAB Le feu de v\xE9hicule \xBB","Sp\xE9cificit\xE9s de l'enqu\xEAte sur un v\xE9hicule."]]}],cp=[{re:/\bPID\b|cynophile|chien|d[ée]tecteur/i,voir:[["lentini","chap. 9, \xA7 9.9.3","Une alerte de chien ou de d\xE9tecteur non confirm\xE9e par le laboratoire ne prouve rien."],["aaas","partie A","Chiens et d\xE9tecteurs orientent les pr\xE9l\xE8vements ; seul le laboratoire confirme."]]},{re:/cuisini|plaque|casserole|huile|friteuse|hotte/i,voir:[["lentini","chap. 6, \xA7 6.3.2 et \xA7 6.3.4","Feux de cuisini\xE8res et de friteuses : modes de d\xE9faillance et sc\xE9narios typiques."]]},{re:/po[eê]le|conduit|chemin[ée]e|souche|chevron|charpente/i,voir:[["chandler","chap. 9, \xAB Chimneys \xBB (p. 209)","Conduits de fum\xE9e : distances aux combustibles et feux de charpente."],["lentini","chap. 6, \xA7 6.3.5","Appareils de chauffage : d\xE9faillances et distances de s\xE9curit\xE9."]]},{re:/spot|encastr/i,voir:[["lentini","chap. 6, \xA7 6.3.9","Luminaires encastr\xE9s : isolation au contact et surchauffe."]]},{re:/cigarette|m[ée]got|fumeur/i,voir:[["chandler","chap. 9, \xAB Smoking materials \xBB (p. 198)","Cigarettes : feu couvant, conditions d'inflammation, limites."]]},{re:/multiprise|rallonge|prolongateur/i,voir:[["nfc15100","norme d'installation","R\xE8gles d'usage des socles et prolongateurs."]]},{re:/tableau|disjonct/i,voir:[["lentini","chap. 6, \xA7 6.3.11","Tableaux \xE9lectriques : ce qu'ils r\xE9v\xE8lent apr\xE8s le feu."]]},{re:/radiateur|chauffage d.appoint/i,voir:[["lentini","chap. 7, \xA7 7.7","Cas r\xE9els de feux de chauffage (combustibles trop proches)."]]}],hp=Object.fromEntries(wh.map(r=>[r.id,r]));function il(r){return String(r||"").split(/\s*[\/,;·]\s*|\s+et\s+/).map(e=>e.replace(/^(chap(itre)?\.?|§)\s*/i,"").replace(/\*$/,"").trim()).filter(e=>/^\d+(\.\d+)*$/.test(e))}function up(r){let e=null,t=-1;for(let i of wh)for(let n of i.nfpa)(r===n||r.startsWith(n+"."))&&n.length>t&&(e=i,t=n.length);return e}function dp(r){let e=[];for(let t of il(r)){let i=up(t);i&&!e.includes(i)&&e.push(i)}return e}function nl(r,e=4){let t=typeof r=="string"?{ref:r}:r||{},i=[],n=(l,c,h)=>{!l||i.some(d=>d.s===l&&d.loc===c)||i.push({s:l,loc:c,note:h,b:tl[l]})};for(let l of t.sources||[])Array.isArray(l)?n(l[0],l[1],l[2]):l&&i.push({s:null,libre:String(l)});for(let l of[].concat(t.theme||[]))for(let c of hp[l]?.voir||[])n(...c);let a=dp(t.ref).map(l=>l.voir.slice()),o=t.texte||"";for(let l of cp)if(l.re.test(o))for(let c of l.voir)n(...c);for(let l of a){let c=l.findIndex(h=>!i.some(d=>d.s===h[0]));c>=0&&n(...l.splice(c,1)[0])}for(;a.some(l=>l.length);)for(let l of a)l.length&&n(...l.shift());return i.slice(0,Math.max(e,(t.sources||[]).length))}function Ah(r){let e=new Set(["nfpa921"]);for(let t of r)for(let i of nl(t,3))i.s&&e.add(i.s);return Object.keys(tl).filter(t=>e.has(t)).map(t=>tl[t])}var mt=(r,e=document)=>e.querySelector(r),Xn=(r,e=document)=>[...e.querySelectorAll(r)];function _e(r){return String(r??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ea(r){let e=document.createElement("template");return e.innerHTML=r.trim(),e.content.firstElementChild}function Rh({titre:r,corps:e,actions:t=[],large:i=!1,onClose:n,classe:s=""}){let a=mt("#modal-root"),o=ea(`<div class="modal-bg"><div class="modal ${i?"modal-large":""} ${s}" role="dialog" aria-modal="true">
    <header class="modal-h"><h2>${r}</h2><button class="btn-x" aria-label="Fermer">\u2715</button></header>
    <div class="modal-b"></div>
    <footer class="modal-f"></footer></div></div>`),l=mt(".modal-b",o);typeof e=="string"?l.innerHTML=e:e&&l.appendChild(e);let c=mt(".modal-f",o),h=()=>{o.remove(),n&&n()};for(let d of t){let u=ea(`<button class="btn ${d.classe||""}">${d.label}</button>`);u.onclick=()=>{(d.onClick?d.onClick(o):void 0)!==!1&&h()},c.appendChild(u)}return t.length||c.remove(),mt(".btn-x",o).onclick=h,o.addEventListener("mousedown",d=>{d.target===o&&h()}),a.appendChild(o),{el:o,close:h,body:l}}function Ch(r,e=!1){let t=il(r);return t.length?e?`NFPA 921 (\xE9d. 2011), chapitre ${t.join(" ; chapitre ")}`:`NFPA 921 \u2013 chap. ${t.join(" \xB7 ")}`:r?`NFPA 921 \u2013 ${r}`:""}function pp(r){let e=new Map;(r.observations||[]).forEach((t,i)=>e.set(t.id,{n:i+1,court:`Constat ${i+1} \u2014 ${t.titre}`,type:"constat"}));for(let t of r.temoins||[])for(let i of t.questions||[])i.fait?.id&&e.set(i.fait.id,{court:`${t.nom} : ${i.fait.texte}`,type:"temoin",contamine:i.fait.contamine});for(let t of r.osint||[])t.fait?.id&&e.set(t.fait.id,{court:t.fait.texte,type:"osint"});for(let t of r.prelevements||[])for(let i of t.analyses||[]){let n=i.resultats?.ok;n?.fait&&e.set(n.fait,{court:`${i.nom} : ${n.texte}`,type:"labo"})}return e}function Ph(r,e,t={}){let i=Sh(structuredClone(r)),n=i.batiment,s=i.retex||{},a=i.solution||{},o=pp(i),l=A=>i.hypotheses?.origines?.find(L=>L.id===A),c=A=>i.hypotheses?.causes?.find(L=>L.id===A),h=A=>A.lecture||A.analyse?.options?.find(L=>L.ok)?.t||"",d=A=>(i.photos||[]).filter(L=>L.constat===A&&i.medias?.[L.media]),u=yi(n),p=Th.find(A=>A.id===a.certitude)?.nom||a.certitude||"\u2014",f=Eh.find(A=>A.id===a.classification)?.nom||a.classification||"\u2014",g=A=>({ref:A.ref||A.analyse?.ref,sources:A.sources,texte:`${A.titre||""} ${A.description||""}`}),m=(i.observations||[]).map(g),y=A=>{let L=nl(g(A),3);return L.length?`<p class="small ana-voir">\u{1F4DA} Voir aussi : ${L.map(H=>H.libre?_e(H.libre):`${_e(H.b.court)}${H.b.annee?` (${H.b.annee})`:""}, ${_e(H.loc)}`).join(" ; ")}</p>`:""},_=A=>(A||[]).map(L=>o.get(L)?.court||L).map(L=>`<li>${_e(L)}</li>`).join(""),v=ea(`<div class="ana">
    <section class="ana-3d">
      <div class="ov ov-zone"><h3>${_e(i.titre)}</h3><div class="muted small">Cliquez sur un cavalier ou un appareil photo.</div></div>
      <div class="ov ov-view">
        ${u.length>1?`<select class="btn btn-sm" data-niv><option value="">Tous niveaux</option>${u.map((A,L)=>`<option value="${L}">${_e(A.nom)}</option>`).join("")}</select>`:""}
        <button class="btn btn-sm" data-v="rotg">\u27F2</button><button class="btn btn-sm" data-v="rotd">\u27F3</button>
        <button class="btn btn-sm" data-v="murs">\u{1F9F1} Murs : bas</button>
      </div>
      ${i.reconstitution?.length>1?`<div class="ov ov-recon"><button class="btn btn-sm" data-play>\u25B6</button><input type="range" min="0" max="${i.reconstitution.length-1}" step="0.01" value="0"><div class="lbl small muted">Reconstitution : faites glisser le curseur.</div></div>`:""}
    </section>
    <section class="ana-doc">
      <div class="ana-bar">${t.onClose?'<button class="btn btn-sm" data-close>\u27F5 Retour</button>':""}<span class="chip">${i.mode==="retex"?"Dossier RETEX":"Dossier d'analyse"}</span><span style="flex:1"></span><button class="btn btn-sm" data-print>\u{1F5A8}\uFE0F Imprimer / PDF</button></div>
      <div class="ana-nav">${["synthese:Synth\xE8se","contexte:Contexte","chrono:Chronologie","constats:Constatations","photos:Photos","labo:Analyses","temoins:D\xE9clarations","hyp:Hypoth\xE8ses","retex:Enseignements","refs:R\xE9f\xE9rences"].map(A=>{let[L,H]=A.split(":");return`<a href="#a-${L}" data-nav="${L}">${H}</a>`}).join("")}</div>
      <article class="rapport-doc ana-article">
        <h1>${_e(i.titre)}</h1>
        <p class="small">${_e([s.auteur&&`R\xE9dig\xE9 par ${s.auteur}`,s.service,s.date].filter(Boolean).join(" \xB7 "))}${s.confidentialite?`<br><b>${_e(s.confidentialite)}</b>`:""}</p>

        <h2 id="a-synthese">Synth\xE8se</h2>
        ${s.resume||i.resume?`<p>${_e(s.resume||i.resume)}</p>`:""}
        <table>
          <tr><th style="width:190px">Zone d'origine</th><td>${_e(l(a.origine)?.nom||"Non d\xE9termin\xE9e")}</td></tr>
          <tr><th>Premier combustible</th><td>${_e(c(a.cause)?.premierCombustible||"\u2014")}</td></tr>
          <tr><th>Source d'ignition</th><td>${_e(c(a.cause)?.source||"\u2014")}</td></tr>
          <tr><th>Cause / s\xE9quence</th><td>${_e(c(a.cause)?.nom||"Ind\xE9termin\xE9e")}</td></tr>
          <tr><th>Niveau de certitude</th><td>${_e(p)}</td></tr>
          <tr><th>Classification</th><td>${_e(f)}</td></tr>
        </table>
        ${a.faitsCles?.length?`<p><b>\xC9l\xE9ments d\xE9terminants :</b></p><ul>${_(a.faitsCles)}</ul>`:""}

        <h2 id="a-contexte">Contexte et mission</h2>
        ${s.contexte?`<p>${_e(s.contexte).replace(/\n/g,"<br>")}</p>`:""}
        <p>${_e(i.mission?.ordre||"")}</p>
        <p class="small">${[["Sinistre",i.mission?.dateSinistre],["Alerte",i.mission?.heureAlerte],["Lieu",s.lieuPublic||i.mission?.adresse],["Pr\xE9servation",i.mission?.preservation],["M\xE9t\xE9o",i.meteo]].filter(A=>A[1]).map(([A,L])=>`<b>${A} :</b> ${_e(L)}`).join("<br>")}</p>
        ${(i.rapportSdis||[]).length?`<p><b>Intervention des secours</b></p><ul>${i.rapportSdis.map(A=>`<li>${_e(A)}</li>`).join("")}</ul>`:""}

        <h2 id="a-chrono">Chronologie</h2>
        <table>${(i.reconstitution||[]).map((A,L)=>`<tr data-etape="${L}" style="cursor:pointer"><td style="width:70px"><b>${_e(A.t)}</b></td><td>${_e(A.titre)}</td></tr>`).join("")}</table>

        <h2 id="a-constats">Constatations</h2>
        ${(i.zones||[]).map(A=>{let L=i.observations.filter(H=>H.zone===A.id);return L.length?`<h3 class="ana-z">${_e(A.nom)}</h3>${L.map(H=>{let oe=i.observations.indexOf(H)+1;return`<div class="ana-c" id="c-${_e(H.id)}" data-obs="${_e(H.id)}">
          <div class="ana-ch"><span class="cav">${oe}</span><b>${_e(H.titre)}</b>${H.analyse?.ref||H.ref?`<span class="small"> \xB7 ${_e(Ch(H.ref||H.analyse.ref))}</span>`:""}</div>
          <p>${_e(H.description)}</p>${h(H)?`<p><i>Analyse :</i> ${_e(h(H))}</p>`:""}${y(H)}
          ${d(H.id).length?`<div class="ph">${d(H.id).map(q=>`<figure><img src="${i.medias[q.media]}" data-ph="${_e(q.id)}" alt=""><figcaption>${_e(q.titre||"")}</figcaption></figure>`).join("")}</div>`:""}
        </div>`}).join("")}`:""}).join("")}
        ${i.observations.filter(A=>!(i.zones||[]).some(L=>L.id===A.zone)).map(A=>`<div class="ana-c" id="c-${_e(A.id)}" data-obs="${_e(A.id)}"><b>${_e(A.titre)}</b><p>${_e(A.description)}</p></div>`).join("")}

        <h2 id="a-photos">Planche photographique</h2>
        ${(i.photos||[]).filter(A=>i.medias?.[A.media]).length?`<div class="ph">${i.photos.filter(A=>i.medias?.[A.media]).map((A,L)=>`<figure><img src="${i.medias[A.media]}" data-ph="${_e(A.id)}" alt=""><figcaption><b>Photo ${L+1}</b> \u2014 ${_e(A.titre||"")}${A.legende?`<br>${_e(A.legende)}`:""}</figcaption></figure>`).join("")}</div>`:"<p>Aucune photo jointe.</p>"}

        <h2 id="a-labo">Pr\xE9l\xE8vements et analyses</h2>
        ${(i.prelevements||[]).length?`<table><tr><th>Pr\xE9l\xE8vement</th><th>Analyse</th><th>R\xE9sultat</th></tr>${i.prelevements.flatMap(A=>(A.analyses||[]).map(L=>`<tr><td>${_e(A.nom)}</td><td>${_e(L.nom)}</td><td>${_e(L.resultats?.ok?.texte||"")}</td></tr>`)).join("")}</table>`:"<p>Aucun pr\xE9l\xE8vement.</p>"}

        <h2 id="a-temoins">D\xE9clarations et sources</h2>
        ${(i.temoins||[]).map(A=>{let L=(A.questions||[]).filter(H=>H.type!=="orientee");return L.length?`<p><b>${_e(A.nom)}</b> <span class="small">${_e(A.role||"")}</span></p><ul>${L.map(H=>`<li><i>${_e(H.q)}</i><br>${_e(H.r)}</li>`).join("")}</ul>`:""}).join("")||"<p>Aucune d\xE9claration.</p>"}
        ${(i.osint||[]).length?`<p><b>Sources ouvertes</b></p><ul>${i.osint.map(A=>`<li><b>${_e(A.titre)}</b> \u2014 ${_e(A.extrait)} <span class="small">(${_e(A.fiabilite||"")})</span></li>`).join("")}</ul>`:""}

        <h2 id="a-hyp">Hypoth\xE8ses et tests</h2>
        ${["origines","causes"].map(A=>(i.hypotheses?.[A]||[]).length?`<h3 class="ana-z">${A==="origines"?"Origine":"Cause"}</h3><table><tr><th>Hypoth\xE8se</th><th style="width:90px">Statut</th><th>Donn\xE9es</th></tr>${i.hypotheses[A].map(L=>{let H=L.id===(A==="origines"?a.origine:a.cause);return`<tr><td>${_e(L.nom)}</td><td><b>${H?"RETENUE":"\xE9cart\xE9e"}</b></td><td>${H?`<ul>${_(L.soutien)}</ul>`:L.refute?.length?`<i>R\xE9fut\xE9e par :</i><ul>${_(L.refute)}</ul>`:"\u2014"}</td></tr>`}).join("")}</table>`:"").join("")}

        <h2 id="a-retex">Enseignements</h2>
        ${[["Enseignements",s.enseignements],["Points positifs",s.positifs],["Axes d'am\xE9lioration",s.ameliorations],["Recommandations (pr\xE9vention)",s.recommandations]].filter(A=>A[1]?.length).map(([A,L])=>`<p><b>${A}</b></p><ul>${L.map(H=>`<li>${_e(H)}</li>`).join("")}</ul>`).join("")||"<p>\u2014</p>"}
        <h2 id="a-refs">R\xE9f\xE9rences</h2>
        <p class="small">M\xE9thode et num\xE9rotation : <b>${_e(el)}</b> (r\xE9f\xE9rence de base). Ouvrages compl\xE9mentaires cit\xE9s dans ce dossier :</p>
        <ul class="small">${Ah(m).map(A=>`<li>${_e(A.ref)}</li>`).join("")}</ul>
        <p class="small" style="margin-top:20px;color:#666">M\xE9thodologie : ${el} (recherche des causes et circonstances d'incendie, m\xE9thode scientifique). Document g\xE9n\xE9r\xE9 avec \xAB RCCI \xB7 L'Enqu\xEAteur \xBB.</p>
      </article>
    </section>
  </div>`);e.innerHTML="",e.appendChild(v);let b=new Qs(mt(".ana-3d",v));b.load(i),b.setModeMurs("bas"),b.setHotspots(i.observations.map(A=>({id:A.id,pos:A.pos,alt:jn(n,A.niveau),niv:Wn(n,A.niveau)}))),i.observations.forEach((A,L)=>b.updateHotspot(A.id,{actif:!0,decouvert:!0,num:L+1,toujours:!0,analyse:!0})),b.setPhotos((i.photos||[]).map(A=>({id:A.id,pos:A.pos,yaw:A.yaw,alt:jn(n,A.niveau),niv:Wn(n,A.niveau)})));let C=l(a.origine),x=C?Object.assign([...C.pos],{alt:jn(n,C.niveau)}):null;x&&b.setOrigineMarqueur(x);let E=A=>{let L=i.photos.find(H=>H.id===A);L&&Rh({titre:`\u{1F4F7} ${_e(L.titre||"Photo")}`,large:!0,corps:`${i.medias?.[L.media]?`<img src="${i.medias[L.media]}" alt="" style="width:100%;border-radius:8px">`:""}<p style="margin-top:8px">${_e(L.legende||"")}</p><p class="small muted">${_e([L.date,L.auteur].filter(Boolean).join(" \xB7 "))}${L.constat&&o.get(L.constat)?` \xB7 ${_e(o.get(L.constat).court)}`:""}</p>`,actions:[{label:"Fermer"}]})},D=mt(".ana-doc",v),I=A=>{let L=mt(`#c-${CSS.escape(A)}`,v);L&&(Xn(".ana-c.on",v).forEach(H=>H.classList.remove("on")),L.classList.add("on"),D.scrollTo({top:L.offsetTop-90,behavior:"smooth"}))};b.onPick=A=>{A.photo?E(A.photo):A.hotspot&&I(A.hotspot)},Xn("[data-ph]",v).forEach(A=>A.onclick=()=>E(A.dataset.ph)),Xn("[data-obs]",v).forEach(A=>A.querySelector(".ana-ch")?.addEventListener("click",()=>{let L=i.observations.find(oe=>oe.id===A.dataset.obs),H=Wn(n,L.niveau);b.setNiveauVisible(u.length>1?H:null),b.setFocus({cible:[L.pos[0],jn(n,L.niveau),L.pos[2]],zoom:1.8},null)})),Xn("[data-nav]",v).forEach(A=>A.onclick=L=>{L.preventDefault();let H=mt(`#a-${A.dataset.nav}`,v);D.scrollTo({top:H.offsetTop-90,behavior:"smooth"})}),mt("[data-print]",v).onclick=()=>window.print(),mt("[data-close]",v)?.addEventListener("click",()=>{b.dispose(),t.onClose()}),mt("[data-niv]",v)?.addEventListener("change",A=>b.setNiveauVisible(A.target.value===""?null:+A.target.value));let O=["bas","auto","pleins"],B=0;mt(".ov-view",v).addEventListener("click",A=>{let L=A.target.closest("[data-v]")?.dataset.v;L==="rotg"&&b.rotateView(-45),L==="rotd"&&b.rotateView(45),L==="murs"&&(B=(B+1)%3,b.setModeMurs(O[B]),A.target.textContent=`\u{1F9F1} Murs : ${O[B]}`)});let P=mt(".ov-recon input",v);if(P&&x){let A=mt(".ov-recon .lbl",v),L=()=>{let oe=+P.value,q=i.reconstitution[Math.round(oe)];b.setReconstitution(i.reconstitution,x,oe),A.innerHTML=`<span class="t">${_e(q.t)}</span>${_e(q.titre)}`};P.oninput=L;let H=null;mt("[data-play]",v).onclick=()=>{if(H){cancelAnimationFrame(H),H=null;return}+P.value>=+P.max&&(P.value=0);let oe=performance.now(),q=Z=>{P.value=Math.min(+P.max,+P.value+(Z-oe)/1600),oe=Z,L(),H=+P.value<+P.max?requestAnimationFrame(q):null};H=requestAnimationFrame(q)},Xn("[data-etape]",v).forEach(oe=>oe.onclick=()=>{P.value=oe.dataset.etape,L()})}return{dispose:()=>b.dispose()}}var rl=window.__RETEX__;document.title=rl?.titre?`RETEX \xB7 ${rl.titre}`:"Dossier RETEX";Ph(rl,document.getElementById("screen"),{standalone:!0});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
