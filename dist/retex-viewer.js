(()=>{var Va="160",Rt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},an={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var Hc=1,Xo=2,di=3,Kt=0,Mt=1,ri=2;var js=2;var Wi=100;var Wa=204,Xa=205;var jo=0,Uh=1,Nh=2,Ci=0,Oh=1,Fh=2,zh=3,Bh=4,Hh=5,kh=6;var kc=300,Dn=301,Un=302,ja=303,qa=304,qs=306,ur=1e3,pi=1001,Ya=1002,vt=1003,hl=1004;var sa=1005;var Vt=1006,Gh=1007;var ds=1008;var qi=1009;var qo=1012,Gc=1013,wi=1014,Ai=1015,dr=1016,Vc=1017,Wc=1018,Yi=1020;var Yt=1023;var Zi=1026,Nn=1027;var Xc=1029;var jc=1031,qc=1033,aa=33776,oa=33777,la=33778,ca=33779,ul=35840,dl=35841,pl=35842,ml=35843,Yc=36196,fl=37492,gl=37496,vl=37808,_l=37809,yl=37810,xl=37811,Ml=37812,bl=37813,Sl=37814,El=37815,Tl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,ha=36492,Ll=36494,Il=36495;var Dl=36284,Ul=36285,Nl=36286;var ps=2300,ms=2301,ua=2302,Ol=2400,Fl=2401,zl=2402;var Zc=3e3,Ji=3001;var Zt="",Je="srgb",mi="srgb-linear",Yo="display-p3",Ys="display-p3-linear",fs="linear",Xe="srgb",gs="rec709",vs="p3";var cn=7680;var Za=35044;var Bl="300 es",Ja=1035,On=2e3,_s=2001,Qt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hl=1234567,Pn=Math.PI/180,pr=180/Math.PI;function $t(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(dt[255&r]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]+"-"+dt[255&e]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[63&t|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[255&i]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function $a(r,e){return(r%e+e)%e}function sr(r,e,t){return(1-t)*r+t*e}function Ka(r){return(r&r-1)==0&&r!==0}function ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ge(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Jc={DEG2RAD:Pn,RAD2DEG:pr,generateUUID:$t,clamp:rt,euclideanModulo:$a,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:sr,damp:function(r,e,t,i){return sr(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs($a(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Hl=r);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Pn},radToDeg:function(r){return r*pr},isPowerOfTwo:Ka,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:ys,setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:Ge,denormalize:Jt},te=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},De=class r{constructor(e,t,i,n,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],g=n[0],m=n[3],y=n[6],v=n[1],_=n[4],E=n[7],P=n[2],x=n[5],T=n[8];return s[0]=a*g+o*v+l*P,s[3]=a*m+o*_+l*x,s[6]=a*y+o*E+l*T,s[1]=c*g+h*v+d*P,s[4]=c*m+h*_+d*x,s[7]=c*y+h*E+d*T,s[2]=u*g+p*v+f*P,s[5]=u*m+p*_+f*x,s[8]=u*y+p*E+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,p=c*s-a*l,f=t*d+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=d*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=u*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=p*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},da=new De;function $c(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vh(){let r=xs("canvas");return r.style.display="block",r}var kl={};function ar(r){r in kl||(kl[r]=!0,console.warn(r))}var Gl=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vl=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Dr={[mi]:{transfer:fs,primaries:gs,toReference:r=>r,fromReference:r=>r},[Je]:{transfer:Xe,primaries:gs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ys]:{transfer:fs,primaries:vs,toReference:r=>r.applyMatrix3(Vl),fromReference:r=>r.applyMatrix3(Gl)},[Yo]:{transfer:Xe,primaries:vs,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vl),fromReference:r=>r.applyMatrix3(Gl).convertLinearToSRGB()}},Wh=new Set([mi,Ys]),Ve={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Wh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=Dr[e].toReference;return(0,Dr[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Dr[r].primaries},getTransfer:function(r){return r===Zt?fs:Dr[r].transfer}};function Ln(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function pa(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var hn,Ms=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hn===void 0&&(hn=xs("canvas")),hn.width=e.width,hn.height=e.height;let i=hn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*Ln(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ln(t[i]/255)):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xh=0,bs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=$t(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(ma(n[a].image)):s.push(ma(n[a]))}else s=ma(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function ma(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ms.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jh=0,Nt=class r extends Qt{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=$t(),this.name="",this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ji?Je:Zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Je?Ji:Zc}set encoding(e){ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?Je:Zt}};Nt.DEFAULT_IMAGE=null,Nt.DEFAULT_MAPPING=kc,Nt.DEFAULT_ANISOTROPY=1;var We=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,E=(p+1)/2,P=(y+1)/2,x=(h+u)/4,T=(d+g)/4,D=(f+m)/4;return _>E&&_>P?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=x/i,s=T/i):E>P?E<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(E),i=x/n,s=D/n):P<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(P),i=T/s,n=D/s),this.set(i,n,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends Qt{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ji?Je:Zt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new bs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends Qa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ss=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=vt,this.minFilter=vt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends Nt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=vt,this.minFilter=vt,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var At=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(d!==g||l!==u||c!==p||h!==f){let m=1-o,y=l*u+c*p+h*f+d*g,v=y>=0?1:-1,_=1-y*y;if(_>Number.EPSILON){let P=Math.sqrt(_),x=Math.atan2(P,y*v);m=Math.sin(m*x)/P,o=Math.sin(o*x)/P}let E=o*v;if(l=l*m+u*E,c=c*m+p*E,h=h*m+f*E,d=d*m+g*E,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(s/2),u=l(i/2),p=l(n/2),f=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=n+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new b,Wl=new At,ei=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),Nr.subVectors(this.max,Jn),un.subVectors(e.a,Jn),dn.subVectors(e.b,Jn),pn.subVectors(e.c,Jn),Mi.subVectors(dn,un),bi.subVectors(pn,dn),Bi.subVectors(un,pn);let t=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Bi.z,Bi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Bi.z,0,-Bi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Bi.y,Bi.x,0];return!!ga(t,un,dn,pn,Nr)&&(t=[1,0,0,0,1,0,0,0,1],!!ga(t,un,dn,pn,Nr)&&(Or.crossVectors(Mi,bi),t=[Or.x,Or.y,Or.z],ga(t,un,dn,pn,Nr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ht).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new b,new b,new b,new b,new b,new b,new b,new b],Ht=new b,Ur=new ei,un=new b,dn=new b,pn=new b,Mi=new b,bi=new b,Bi=new b,Jn=new b,Nr=new b,Or=new b,Hi=new b;function ga(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Hi.fromArray(r,s);let o=n.x*Math.abs(Hi.x)+n.y*Math.abs(Hi.y)+n.z*Math.abs(Hi.z),l=e.dot(Hi),c=t.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qh=new ei,$n=new b,va=new b,ti=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$n.subVectors(e,this.center);let t=$n.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector($n,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($n.copy(e.center).add(va)),this.expandByPoint($n.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new b,_a=new b,Fr=new b,Si=new b,ya=new b,zr=new b,xa=new b,gi=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){_a.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(_a);let s=.5*e.distanceTo(t),a=-this.direction.dot(Fr),o=Si.dot(this.direction),l=-Si.dot(Fr),c=Si.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=s*h,d>=0)if(u>=-f)if(u<=f){let g=1/h;d*=g,u*=g,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(_a).addScaledVector(Fr,u),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);let i=li.dot(this.direction),n=li.dot(li)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,n,s){ya.subVectors(t,e),zr.subVectors(i,e),xa.crossVectors(ya,zr);let a,o=this.direction.dot(xa);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Si.subVectors(this.origin,e);let l=a*this.direction.dot(zr.crossVectors(Si,zr));if(l<0)return null;let c=a*this.direction.dot(ya.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(xa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(e,t,i,n,s,a,o,l,c,h,d,u,p,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,d,u,p,f,g,m)}set(e,t,i,n,s,a,o,l,c,h,d,u,p,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/mn.setFromMatrixColumn(e,0).length(),s=1/mn.setFromMatrixColumn(e,1).length(),a=1/mn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,g=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-g*c,t[9]=-o*l,t[2]=g-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,g=c*d;t[0]=u-g*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,g=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+g,t[1]=l*d,t[5]=g*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-g*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+g,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yh,e,Zh)}lookAt(e,t,i){let n=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),Ei.crossVectors(i,Et),Ei.lengthSq()===0&&(Math.abs(i.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),Ei.crossVectors(i,Et)),Ei.normalize(),Br.crossVectors(Et,Ei),n[0]=Ei.x,n[4]=Br.x,n[8]=Et.x,n[1]=Ei.y,n[5]=Br.y,n[9]=Et.y,n[2]=Ei.z,n[6]=Br.z,n[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],g=i[6],m=i[10],y=i[14],v=i[3],_=i[7],E=i[11],P=i[15],x=n[0],T=n[4],D=n[8],I=n[12],S=n[1],L=n[5],R=n[9],z=n[13],B=n[2],re=n[6],le=n[10],J=n[14],Y=n[3],Q=n[7],k=n[11],Z=n[15];return s[0]=a*x+o*S+l*B+c*Y,s[4]=a*T+o*L+l*re+c*Q,s[8]=a*D+o*R+l*le+c*k,s[12]=a*I+o*z+l*J+c*Z,s[1]=h*x+d*S+u*B+p*Y,s[5]=h*T+d*L+u*re+p*Q,s[9]=h*D+d*R+u*le+p*k,s[13]=h*I+d*z+u*J+p*Z,s[2]=f*x+g*S+m*B+y*Y,s[6]=f*T+g*L+m*re+y*Q,s[10]=f*D+g*R+m*le+y*k,s[14]=f*I+g*z+m*J+y*Z,s[3]=v*x+_*S+E*B+P*Y,s[7]=v*T+_*L+E*re+P*Q,s[11]=v*D+_*R+E*le+P*k,s[15]=v*I+_*z+E*J+P*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*l*d-n*c*d-s*o*u+i*c*u+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*u+s*a*u-n*a*p+n*c*h-s*l*h)+e[11]*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*h-i*c*h)+e[15]*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],v=d*m*c-g*u*c+g*l*p-o*m*p-d*l*y+o*u*y,_=f*u*c-h*m*c-f*l*p+a*m*p+h*l*y-a*u*y,E=h*g*c-f*d*c+f*o*p-a*g*p-h*o*y+a*d*y,P=f*d*l-h*g*l-f*o*u+a*g*u+h*o*m-a*d*m,x=t*v+i*_+n*E+s*P;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/x;return e[0]=v*T,e[1]=(g*u*s-d*m*s-g*n*p+i*m*p+d*n*y-i*u*y)*T,e[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*y+i*l*y)*T,e[3]=(d*l*s-o*u*s-d*n*c+i*u*c+o*n*p-i*l*p)*T,e[4]=_*T,e[5]=(h*m*s-f*u*s+f*n*p-t*m*p-h*n*y+t*u*y)*T,e[6]=(f*l*s-a*m*s-f*n*c+t*m*c+a*n*y-t*l*y)*T,e[7]=(a*u*s-h*l*s+h*n*c-t*u*c-a*n*p+t*l*p)*T,e[8]=E*T,e[9]=(f*d*s-h*g*s-f*i*p+t*g*p+h*i*y-t*d*y)*T,e[10]=(a*g*s-f*o*s+f*i*c-t*g*c-a*i*y+t*o*y)*T,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*p-t*o*p)*T,e[12]=P*T,e[13]=(h*g*n-f*d*n+f*i*u-t*g*u-h*i*m+t*d*m)*T,e[14]=(f*o*n-a*g*n-f*i*l+t*g*l+a*i*m-t*o*m)*T,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*T,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,p=s*h,f=s*d,g=a*h,m=a*d,y=o*d,v=l*c,_=l*h,E=l*d,P=i.x,x=i.y,T=i.z;return n[0]=(1-(g+y))*P,n[1]=(p+E)*P,n[2]=(f-_)*P,n[3]=0,n[4]=(p-E)*x,n[5]=(1-(u+y))*x,n[6]=(m+v)*x,n[7]=0,n[8]=(f+_)*T,n[9]=(m-v)*T,n[10]=(1-(u+g))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=mn.set(n[0],n[1],n[2]).length(),a=mn.set(n[4],n[5],n[6]).length(),o=mn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],kt.copy(this);let l=1/s,c=1/a,h=1/o;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=c,kt.elements[5]*=c,kt.elements[6]*=c,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,f;if(o===On)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==_s)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-s),u=(t+e)*c,p=(i+n)*h,f,g;if(o===On)f=(a+s)*d,g=-2*d;else{if(o!==_s)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,g=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},mn=new b,kt=new Ce,Yh=new b(0,0,0),Zh=new b(1,1,1),Ei=new b,Br=new b,Et=new b,Xl=new Ce,jl=new At,Es=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Jh=0,ql=new b,fn=new At,ci=new Ce,Hr=new b,Kn=new b,$h=new b,Kh=new At,Yl=new b(1,0,0),Zl=new b(0,1,0),Jl=new b(0,0,1),Qh={type:"added"},eu={type:"removed"},ht=class r extends Qt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new b,t=new Es,i=new At,n=new b(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new De}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(Yl,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yl,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hr.copy(e):Hr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Kn,Hr,this.up):ci.lookAt(Hr,Kn,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),fn.setFromRotationMatrix(ci),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,$h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};ht.DEFAULT_UP=new b(0,1,0),ht.DEFAULT_MATRIX_AUTO_UPDATE=!0,ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gt=new b,hi=new b,Ma=new b,ui=new b,gn=new b,vn=new b,$l=new b,ba=new b,Sa=new b,Ea=new b,kr=!1,Ri=class r{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Gt.subVectors(e,t),n.cross(Gt);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Gt.subVectors(n,t),hi.subVectors(i,t),Ma.subVectors(e,t);let a=Gt.dot(Gt),o=Gt.dot(hi),l=Gt.dot(Ma),c=hi.dot(hi),h=hi.dot(Ma),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ui)!==null&&ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,i,n,s,a,o,l){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),this.getInterpolation(e,t,i,n,s,a,o,l)}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static isFrontFacing(e,t,i,n){return Gt.subVectors(i,t),hi.subVectors(e,t),Gt.cross(hi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),.5*Gt.cross(hi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return kr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kr=!0),r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;gn.subVectors(n,i),vn.subVectors(s,i),ba.subVectors(e,i);let l=gn.dot(ba),c=vn.dot(ba);if(l<=0&&c<=0)return t.copy(i);Sa.subVectors(e,n);let h=gn.dot(Sa),d=vn.dot(Sa);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(gn,a);Ea.subVectors(e,s);let p=gn.dot(Ea),f=vn.dot(Ea);if(f>=0&&p<=f)return t.copy(s);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(vn,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return $l.subVectors(s,n),o=(d-h)/(d-h+(p-f)),t.copy(n).addScaledVector($l,o);let y=1/(m+g+u);return a=g*y,o=u*y,t.copy(i).addScaledVector(gn,a).addScaledVector(vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Ta(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ae=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ve.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ve.workingColorSpace){if(e=$a(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ta(a,s,e+1/3),this.g=Ta(a,s,e),this.b=Ta(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,n),this}setStyle(e,t=Je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let i=Kc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Ve.fromWorkingColorSpace(pt.copy(this),e),65536*Math.round(rt(255*pt.r,0,255))+256*Math.round(rt(255*pt.g,0,255))+Math.round(rt(255*pt.b,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(pt.copy(this),t);let i=pt.r,n=pt.g,s=pt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Je){Ve.fromWorkingColorSpace(pt.copy(this),e);let t=pt.r,i=pt.g,n=pt.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Gr);let i=sr(Ti.h,Gr.h,t),n=sr(Ti.s,Gr.s,t),s=sr(Ti.l,Gr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pt=new Ae;Ae.NAMES=Kc;var tu=0,vi=class extends Qt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=$t(),this.name="",this.type="Material",this.blending=1,this.side=Kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cn,this.stencilZFail=cn,this.stencilZPass=cn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Kt&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wa&&(i.blendSrc=this.blendSrc),this.blendDst!==Xa&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xt=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rp=iu();function iu(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var tt=new b,Vr=new te,wt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vr.fromBufferAttribute(this,t),Vr.applyMatrix3(e),this.setXY(t,Vr.x,Vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ge(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Za&&(e.usage=this.usage),e}};var Ts=class extends wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ws=class extends wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ee=class extends wt{constructor(e,t,i){super(new Float32Array(e),t,i)}};var nu=0,Ut=new Ce,wa=new ht,_n=new b,Tt=new ei,Qn=new ei,lt=new b,qe=class r extends Qt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?ws:Ts)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new De().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,i){return Ut.makeTranslation(e,t,i),this.applyMatrix4(Ut),this}scale(e,t,i){return Ut.makeScale(e,t,i),this.applyMatrix4(Ut),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_n).negate(),this.translate(_n.x,_n.y,_n.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ee(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new b,1/0);if(e){let i=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Tt.min,Qn.min),Tt.expandByPoint(lt),lt.addVectors(Tt.max,Qn.max),Tt.expandByPoint(lt)):(Tt.expandByPoint(Qn.min),Tt.expandByPoint(Qn.max))}Tt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)lt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(lt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)lt.fromBufferAttribute(o,c),l&&(_n.fromBufferAttribute(e,c),lt.add(_n)),n=Math.max(n,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new b,h[S]=new b;let d=new b,u=new b,p=new b,f=new te,g=new te,m=new te,y=new b,v=new b;function _(S,L,R){d.fromArray(n,3*S),u.fromArray(n,3*L),p.fromArray(n,3*R),f.fromArray(a,2*S),g.fromArray(a,2*L),m.fromArray(a,2*R),u.sub(d),p.sub(d),g.sub(f),m.sub(f);let z=1/(g.x*m.y-m.x*g.y);isFinite(z)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(z),v.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(z),c[S].add(y),c[L].add(y),c[R].add(y),h[S].add(v),h[L].add(v),h[R].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let S=0,L=E.length;S<L;++S){let R=E[S],z=R.start;for(let B=z,re=z+R.count;B<re;B+=3)_(i[B+0],i[B+1],i[B+2])}let P=new b,x=new b,T=new b,D=new b;function I(S){T.fromArray(s,3*S),D.copy(T);let L=c[S];P.copy(L),P.sub(T.multiplyScalar(T.dot(L))).normalize(),x.crossVectors(D,L);let R=x.dot(h[S])<0?-1:1;l[4*S]=P.x,l[4*S+1]=P.y,l[4*S+2]=P.z,l[4*S+3]=R}for(let S=0,L=E.length;S<L;++S){let R=E[S],z=R.start;for(let B=z,re=z+R.count;B<re;B+=3)I(i[B+0]),I(i[B+1]),I(i[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new b,s=new b,a=new b,o=new b,l=new b,c=new b,h=new b,d=new b;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),g=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)u[f++]=c[p++]}return new wt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kl=new Ce,ki=new gi,Wr=new ti,Ql=new b,yn=new b,xn=new b,Mn=new b,Aa=new b,Xr=new b,jr=new te,qr=new te,Yr=new te,ec=new b,tc=new b,ic=new b,Zr=new b,Jr=new b,Se=class extends ht{constructor(e=new qe,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Aa.fromBufferAttribute(d,e),a?Xr.addScaledVector(Aa,h):Xr.addScaledVector(Aa.sub(t),h))}t.add(Xr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(s),ki.copy(e.ray).recast(e.near),Wr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Wr,Ql)===null||ki.origin.distanceToSquared(Ql)>(e.far-e.near)**2))return;Kl.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Kl),i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,ki)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=u.length;f<g;f++){let m=u[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)n=$r(this,y,e,i,c,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)n=$r(this,a,e,i,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=u.length;f<g;f++){let m=u[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)n=$r(this,y,e,i,c,h,d,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)n=$r(this,a,e,i,c,h,d,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function $r(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,yn),r.getVertexPosition(l,xn),r.getVertexPosition(c,Mn);let h=function(d,u,p,f,g,m,y,v){let _;if(_=u.side===Mt?f.intersectTriangle(y,m,g,!0,v):f.intersectTriangle(g,m,y,u.side===Kt,v),_===null)return null;Jr.copy(v),Jr.applyMatrix4(d.matrixWorld);let E=p.ray.origin.distanceTo(Jr);return E<p.near||E>p.far?null:{distance:E,point:Jr.clone(),object:d}}(r,e,t,i,yn,xn,Mn,Zr);if(h){n&&(jr.fromBufferAttribute(n,o),qr.fromBufferAttribute(n,l),Yr.fromBufferAttribute(n,c),h.uv=Ri.getInterpolation(Zr,yn,xn,Mn,jr,qr,Yr,new te)),s&&(jr.fromBufferAttribute(s,o),qr.fromBufferAttribute(s,l),Yr.fromBufferAttribute(s,c),h.uv1=Ri.getInterpolation(Zr,yn,xn,Mn,jr,qr,Yr,new te),h.uv2=h.uv1),a&&(ec.fromBufferAttribute(a,o),tc.fromBufferAttribute(a,l),ic.fromBufferAttribute(a,c),h.normal=Ri.getInterpolation(Zr,yn,xn,Mn,ec,tc,ic,new b),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new b,materialIndex:0};Ri.getNormal(yn,xn,Mn,d.normal),h.face=d}return h}var Ke=class r extends qe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(g,m,y,v,_,E,P,x,T,D,I){let S=E/T,L=P/D,R=E/2,z=P/2,B=x/2,re=T+1,le=D+1,J=0,Y=0,Q=new b;for(let k=0;k<le;k++){let Z=k*L-z;for(let ce=0;ce<re;ce++){let A=ce*S-R;Q[g]=A*v,Q[m]=Z*_,Q[y]=B,c.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[y]=x>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(ce/T),d.push(1-k/D),J+=1}}for(let k=0;k<D;k++)for(let Z=0;Z<T;Z++){let ce=u+Z+re*k,A=u+Z+re*(k+1),w=u+(Z+1)+re*(k+1),H=u+(Z+1)+re*k;l.push(ce,A,H),l.push(A,w,H),Y+=6}o.addGroup(p,Y,I),p+=Y,u+=J}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function gt(r){let e={};for(let t=0;t<r.length;t++){let i=Fn(r[t]);for(let n in i)e[n]=i[n]}return e}function Qc(r){return r.getRenderTarget()===null?r.outputColorSpace:Ve.workingColorSpace}var ru={clone:Fn,merge:gt},_i=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},fr=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yt=class extends fr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*pr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Pn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*pr*Math.atan(Math.tan(.5*Pn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Pn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bn=-90,to=class extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new yt(bn,1,e,t);n.layers=this.layers,this.add(n);let s=new yt(bn,1,e,t);s.layers=this.layers,this.add(s);let a=new yt(bn,1,e,t);a.layers=this.layers,this.add(a);let o=new yt(bn,1,e,t);o.layers=this.layers,this.add(o);let l=new yt(bn,1,e,t);l.layers=this.layers,this.add(l);let c=new yt(bn,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==_s)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},As=class extends Nt{constructor(e,t,i,n,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Dn,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},io=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?Je:Zt),this.texture=new As(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ke(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Fn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mt,blending:0});s.uniforms.tEquirect.value=t;let a=new Se(n,s),o=t.minFilter;return t.minFilter===ds&&(t.minFilter=Vt),new to(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},Ra=new b,su=new b,au=new De,xt=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ra.subVectors(i,t).cross(su.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ra),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||au.getNormalMatrix(e),n=this.coplanarPoint(Ra).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new ti,Kr=new b,zn=class{constructor(e=new xt,t=new xt,i=new xt,n=new xt,s=new xt,a=new xt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],f=n[9],g=n[10],m=n[11],y=n[12],v=n[13],_=n[14],E=n[15];if(i[0].setComponents(l-s,u-c,m-p,E-y).normalize(),i[1].setComponents(l+s,u+c,m+p,E+y).normalize(),i[2].setComponents(l+a,u+h,m+f,E+v).normalize(),i[3].setComponents(l-a,u-h,m-f,E-v).normalize(),i[4].setComponents(l-o,u-d,m-g,E-_).normalize(),t===On)i[5].setComponents(l+o,u+d,m+g,E+_).normalize();else{if(t!==_s)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,d,g,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Kr.x=n.normal.x>0?e.max.x:e.min.x,Kr.y=n.normal.y>0?e.max.y:e.min.y,Kr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function eh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ou(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback(),c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(c instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}(n,s));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,c){let h=l.array,d=l._updateRange,u=l.updateRanges;if(r.bindBuffer(c,o),d.count===-1&&u.length===0&&r.bufferSubData(c,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let g=u[p];t?r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count):r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h.subarray(g.start,g.start+g.count))}l.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,n,s),a.version=n.version}}}}var ii=class r extends qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let v=y*u-a;for(let _=0;_<c;_++){let E=_*d-s;f.push(E,-v,0),g.push(0,0,1),m.push(_/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let _=v+c*y,E=v+c*(y+1),P=v+1+c*(y+1),x=v+1+c*y;p.push(_,E,x),p.push(E,P,x)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Re={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},he={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},qt={basic:{uniforms:gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:gt([he.points,he.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:gt([he.common,he.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:gt([he.sprite,he.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:gt([he.common,he.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:gt([he.lights,he.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};qt.physical={uniforms:gt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var Qr={r:0,b:0,g:0};function lu(r,e,t,i,n,s,a){let o=new Ae(0),l,c,h=s===!0?0:1,d=null,u=0,p=null;function f(g,m){g.getRGB(Qr,Qc(r)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(g){h=g,f(o,h)},render:function(g,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?f(o,h):v&&v.isColor&&(f(v,1),y=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===qs)?(c===void 0&&(c=new Se(new Ke(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Fn(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,P,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Xe,d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Se(new ii(2,2),new _i({name:"BackgroundMaterial",uniforms:Fn(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(v.colorSpace)!==Xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}}}function cu(r,e,t,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null),c=l,h=!1;function d(P){return i.isWebGL2?r.bindVertexArray(P):s.bindVertexArrayOES(P)}function u(P){return i.isWebGL2?r.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P){let x=[],T=[],D=[];for(let I=0;I<n;I++)x[I]=0,T[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:T,attributeDivisors:D,object:P,attributes:{},index:null}}function f(){let P=c.newAttributes;for(let x=0,T=P.length;x<T;x++)P[x]=0}function g(P){m(P,0)}function m(P,x){let T=c.newAttributes,D=c.enabledAttributes,I=c.attributeDivisors;T[P]=1,D[P]===0&&(r.enableVertexAttribArray(P),D[P]=1),I[P]!==x&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,x),I[P]=x)}function y(){let P=c.newAttributes,x=c.enabledAttributes;for(let T=0,D=x.length;T<D;T++)x[T]!==P[T]&&(r.disableVertexAttribArray(T),x[T]=0)}function v(P,x,T,D,I,S,L){L===!0?r.vertexAttribIPointer(P,x,T,I,S):r.vertexAttribPointer(P,x,T,D,I,S)}function _(){E(),h=!0,c!==l&&(c=l,d(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(P,x,T,D,I){let S=!1;if(a){let L=function(R,z,B){let re=B.wireframe===!0,le=o[R.id];le===void 0&&(le={},o[R.id]=le);let J=le[z.id];J===void 0&&(J={},le[z.id]=J);let Y=J[re];return Y===void 0&&(Y=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),J[re]=Y),Y}(D,T,x);c!==L&&(c=L,d(c.object)),S=function(R,z,B,re){let le=c.attributes,J=z.attributes,Y=0,Q=B.getAttributes();for(let k in Q)if(Q[k].location>=0){let Z=le[k],ce=J[k];if(ce===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;Y++}return c.attributesNum!==Y||c.index!==re}(P,D,T,I),S&&function(R,z,B,re){let le={},J=z.attributes,Y=0,Q=B.getAttributes();for(let k in Q)if(Q[k].location>=0){let Z=J[k];Z===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(Z=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(Z=R.instanceColor));let ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),le[k]=ce,Y++}c.attributes=le,c.attributesNum=Y,c.index=re}(P,D,T,I)}else{let L=x.wireframe===!0;c.geometry===D.id&&c.program===T.id&&c.wireframe===L||(c.geometry=D.id,c.program=T.id,c.wireframe=L,S=!0)}I!==null&&t.update(I,r.ELEMENT_ARRAY_BUFFER),(S||h)&&(h=!1,function(L,R,z,B){if(i.isWebGL2===!1&&(L.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let re=B.attributes,le=z.getAttributes(),J=R.defaultAttributeValues;for(let Y in le){let Q=le[Y];if(Q.location>=0){let k=re[Y];if(k===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){let Z=k.normalized,ce=k.itemSize,A=t.get(k);if(A===void 0)continue;let w=A.buffer,H=A.type,$=A.bytesPerElement,N=i.isWebGL2===!0&&(H===r.INT||H===r.UNSIGNED_INT||k.gpuType===Gc);if(k.isInterleavedBufferAttribute){let q=k.data,O=q.stride,F=k.offset;if(q.isInstancedInterleavedBuffer){for(let V=0;V<Q.locationSize;V++)m(Q.location+V,q.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let V=0;V<Q.locationSize;V++)g(Q.location+V);r.bindBuffer(r.ARRAY_BUFFER,w);for(let V=0;V<Q.locationSize;V++)v(Q.location+V,ce/Q.locationSize,H,Z,O*$,(F+ce/Q.locationSize*V)*$,N)}else{if(k.isInstancedBufferAttribute){for(let q=0;q<Q.locationSize;q++)m(Q.location+q,k.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let q=0;q<Q.locationSize;q++)g(Q.location+q);r.bindBuffer(r.ARRAY_BUFFER,w);for(let q=0;q<Q.locationSize;q++)v(Q.location+q,ce/Q.locationSize,H,Z,ce*$,ce/Q.locationSize*q*$,N)}}else if(J!==void 0){let Z=J[Y];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(Q.location,Z);break;case 3:r.vertexAttrib3fv(Q.location,Z);break;case 4:r.vertexAttrib4fv(Q.location,Z);break;default:r.vertexAttrib1fv(Q.location,Z)}}}}y()}(P,x,T,D),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))},reset:_,resetDefaultState:E,dispose:function(){_();for(let P in o){let x=o[P];for(let T in x){let D=x[T];for(let I in D)u(D[I].object),delete D[I];delete x[T]}delete o[P]}},releaseStatesOfGeometry:function(P){if(o[P.id]===void 0)return;let x=o[P.id];for(let T in x){let D=x[T];for(let I in D)u(D[I].object),delete D[I];delete x[T]}delete o[P.id]},releaseStatesOfProgram:function(P){for(let x in o){let T=o[x];if(T[P.id]===void 0)continue;let D=T[P.id];for(let I in D)u(D[I].object),delete D[I];delete T[P.id]}},initAttributes:f,enableAttribute:g,disableUnusedAttributes:y}}function hu(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,l){if(l===0)return;let c,h;if(n)c=r,h="drawArraysInstanced";else if(c=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",c===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");c[h](s,a,o,l),t.update(o,s,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h],o[h]);else{c.multiDrawArraysWEBGL(s,a,0,o,0,l);let h=0;for(let d=0;d<l;d++)h+=o[d];t.update(h,s,1)}}}function uu(r,e,t){let i;function n(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,_=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:v&&_,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function du(r){let e=this,t=null,i=0,n=!1,s=!1,a=new xt,o=new De,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=u+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,_=u;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||n;return n=d,i=h.length,u},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!g)s?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let y=s?0:i,v=4*y,_=m.clippingState||null;l.value=_,_=c(p,d,v,u);for(let E=0;E!==v;++E)_[E]=t[E];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function pu(r){let e=new WeakMap;function t(n,s){return s===ja?n.mapping=Dn:s===qa&&(n.mapping=Un),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===ja||s===qa){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new io(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Bn=class extends fr{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nc=[.125,.215,.35,.446,.526,.582],er=20,Ca=new Bn,rc=new Ae,Pa=null,La=0,Ia=0,Vi=(1+Math.sqrt(5))/2,Sn=1/Vi,sc=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,Vi,Sn),new b(0,Vi,-Sn),new b(Sn,0,Vi),new b(-Sn,0,Vi),new b(Vi,Sn,0),new b(-Vi,Sn,0)],Rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pa,La,Ia),e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dn||e.mapping===Un?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pa=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:dr,format:Yt,colorSpace:mi,depthBuffer:!1},n=ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+nc.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=nc[u-a+4-1]:u===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,y=1+g,v=[m,m,y,m,y,y,m,m,y,y,m,y],_=6,E=6,P=3,x=2,T=1,D=new Float32Array(P*E*_),I=new Float32Array(x*E*_),S=new Float32Array(T*E*_);for(let R=0;R<_;R++){let z=R%3*2/3-1,B=R>2?0:-1,re=[z,B,0,z+2/3,B,0,z+2/3,B+1,0,z,B,0,z+2/3,B+1,0,z,B+1,0];D.set(re,P*E*R),I.set(v,x*E*R);let le=[R,R,R,R,R,R];S.set(le,T*E*R)}let L=new qe;L.setAttribute("position",new wt(D,P)),L.setAttribute("uv",new wt(I,x)),L.setAttribute("faceIndex",new wt(S,T)),o.push(L),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(s)),this._blurMaterial=function(a,o,l){let c=new Float32Array(er),h=new b(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,i,n){let s=new yt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(rc),l.toneMapping=Ci,l.autoClear=!1;let d=new Xt({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),u=new Se(new Ke,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(rc),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let y=this._cubeSize;es(n,m*y,g>2?y:0,y,y),l.setRenderTarget(n),p&&l.render(u,s),l.render(e,s)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Dn||e.mapping===Un;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oc());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;es(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Ca)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=sc[(n-1)%sc.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Se(this._lodPlanes[n],c),d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):er;g>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let E=0;E<er;++E){let P=E/f,x=Math.exp(-P*P/2);m.push(x),E===0?y+=x:E<g&&(y+=2*x)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let _=this._sizeLods[n];es(t,3*_*(n>v-4?n-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Ca)}};function ac(r,e,t){let i=new fi(r,e,t);return i.texture.mapping=qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function oc(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zo(),fragmentShader:`

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
	`}function mu(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===ja||s===qa,o=s===Dn||s===Un;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new Rs(r)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(c){let h=0,d=6;for(let u=0;u<d;u++)c[u]!==void 0&&h++;return h===d}(l)){t===null&&(t=new Rs(r));let c=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,c),n.addEventListener("dispose",i),c.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function fu(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function gu(r,e,t,i){let n={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let g=h.array;u=h.version;for(let m=0,y=g.length;m<y;m+=3){let v=g[m+0],_=g[m+1],E=g[m+2];c.push(v,_,_,E,E,v)}}else{if(d===void 0)return;{let g=d.array;u=d.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let v=m+0,_=m+1,E=m+2;c.push(v,_,_,E,E,v)}}}let p=new($c(c)?ws:Ts)(c,1);p.version=u;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function vu(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(l){s=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,c){r.drawElements(s,c,a,l*o),t.update(c,s,1)},this.renderInstances=function(l,c,h){if(h===0)return;let d,u;if(n)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,c,a,l*o,h),t.update(c,s,h)},this.renderMultiDraw=function(l,c,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(l[u]/o,c[u]);else{d.multiDrawElementsWEBGL(s,c,0,a,l,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];t.update(u,s,1)}}}function _u(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function yu(r,e){return r[0]-e[0]}function xu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Mu(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,c,h){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=u!==void 0?u.length:0,f=s.get(c);if(f===void 0||f.count!==p){let z=function(){L.dispose(),s.delete(c),c.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();let y=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],x=c.morphAttributes.color||[],T=0;y===!0&&(T=1),v===!0&&(T=2),_===!0&&(T=3);let D=c.attributes.position.count*T,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let S=new Float32Array(D*I*4*p),L=new Ss(S,D,I,p);L.type=Ai,L.needsUpdate=!0;let R=4*T;for(let B=0;B<p;B++){let re=E[B],le=P[B],J=x[B],Y=D*I*4*B;for(let Q=0;Q<re.count;Q++){let k=Q*R;y===!0&&(a.fromBufferAttribute(re,Q),S[Y+k+0]=a.x,S[Y+k+1]=a.y,S[Y+k+2]=a.z,S[Y+k+3]=0),v===!0&&(a.fromBufferAttribute(le,Q),S[Y+k+4]=a.x,S[Y+k+5]=a.y,S[Y+k+6]=a.z,S[Y+k+7]=0),_===!0&&(a.fromBufferAttribute(J,Q),S[Y+k+8]=a.x,S[Y+k+9]=a.y,S[Y+k+10]=a.z,S[Y+k+11]=J.itemSize===4?a.w:1)}}f={count:p,texture:L,size:new te(D,I)},s.set(c,f),c.addEventListener("dispose",z)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let m=c.morphTargetsRelative?1:1-g;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=i[c.id];if(p===void 0||p.length!==u){p=[];for(let v=0;v<u;v++)p[v]=[v,0];i[c.id]=p}for(let v=0;v<u;v++){let _=p[v];_[0]=v,_[1]=d[v]}p.sort(xu);for(let v=0;v<8;v++)v<u&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(yu);let f=c.morphAttributes.position,g=c.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let _=o[v],E=_[0],P=_[1];E!==Number.MAX_SAFE_INTEGER&&P?(f&&c.getAttribute("morphTarget"+v)!==f[E]&&c.setAttribute("morphTarget"+v,f[E]),g&&c.getAttribute("morphNormal"+v)!==g[E]&&c.setAttribute("morphNormal"+v,g[E]),n[v]=P,m+=P):(f&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),g&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),n[v]=0)}let y=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function bu(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Cs=class extends Nt{constructor(e,t,i,n,s,a,o,l,c,h){if((h=h!==void 0?h:Zi)!==Zi&&h!==Nn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zi&&(i=wi),i===void 0&&h===Nn&&(i=Yi),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},th=new Nt,ih=new Cs(1,1);ih.compareFunction=515;var nh=new Ss,rh=new eo,sh=new As,cc=[],hc=[],uc=new Float32Array(16),dc=new Float32Array(9),pc=new Float32Array(4);function Vn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=cc[n];if(s===void 0&&(s=new Float32Array(n),cc[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function st(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function at(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Zs(r,e){let t=hc[e];t===void 0&&(t=new Int32Array(e),hc[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Su(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Eu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2fv(this.addr,e),at(t,e)}}function Tu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;r.uniform3fv(this.addr,e),at(t,e)}}function wu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4fv(this.addr,e),at(t,e)}}function Au(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;pc.set(i),r.uniformMatrix2fv(this.addr,!1,pc),at(t,i)}}function Ru(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;dc.set(i),r.uniformMatrix3fv(this.addr,!1,dc),at(t,i)}}function Cu(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(st(t,i))return;uc.set(i),r.uniformMatrix4fv(this.addr,!1,uc),at(t,i)}}function Pu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Lu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2iv(this.addr,e),at(t,e)}}function Iu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3iv(this.addr,e),at(t,e)}}function Du(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4iv(this.addr,e),at(t,e)}}function Uu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2uiv(this.addr,e),at(t,e)}}function Ou(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3uiv(this.addr,e),at(t,e)}}function Fu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4uiv(this.addr,e),at(t,e)}}function zu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?ih:th;t.setTexture2D(e||s,n)}function Bu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||rh,n)}function Hu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||sh,n)}function ku(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||nh,n)}function Gu(r,e){r.uniform1fv(this.addr,e)}function Vu(r,e){let t=Vn(e,this.size,2);r.uniform2fv(this.addr,t)}function Wu(r,e){let t=Vn(e,this.size,3);r.uniform3fv(this.addr,t)}function Xu(r,e){let t=Vn(e,this.size,4);r.uniform4fv(this.addr,t)}function ju(r,e){let t=Vn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qu(r,e){let t=Vn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yu(r,e){let t=Vn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zu(r,e){r.uniform1iv(this.addr,e)}function Ju(r,e){r.uniform2iv(this.addr,e)}function $u(r,e){r.uniform3iv(this.addr,e)}function Ku(r,e){r.uniform4iv(this.addr,e)}function Qu(r,e){r.uniform1uiv(this.addr,e)}function ed(r,e){r.uniform2uiv(this.addr,e)}function td(r,e){r.uniform3uiv(this.addr,e)}function id(r,e){r.uniform4uiv(this.addr,e)}function nd(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||th,s[a])}function rd(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||rh,s[a])}function sd(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||sh,s[a])}function ad(r,e,t){let i=this.cache,n=e.length,s=Zs(t,n);st(i,s)||(r.uniform1iv(this.addr,s),at(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||nh,s[a])}var no=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Su;case 35664:return Eu;case 35665:return Tu;case 35666:return wu;case 35674:return Au;case 35675:return Ru;case 35676:return Cu;case 5124:case 35670:return Pu;case 35667:case 35671:return Lu;case 35668:case 35672:return Iu;case 35669:case 35673:return Du;case 5125:return Uu;case 36294:return Nu;case 36295:return Ou;case 36296:return Fu;case 35678:case 36198:case 36298:case 36306:case 35682:return zu;case 35679:case 36299:case 36307:return Bu;case 35680:case 36300:case 36308:case 36293:return Hu;case 36289:case 36303:case 36311:case 36292:return ku}}(t.type)}},ro=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Gu;case 35664:return Vu;case 35665:return Wu;case 35666:return Xu;case 35674:return ju;case 35675:return qu;case 35676:return Yu;case 5124:case 35670:return Zu;case 35667:case 35671:return Ju;case 35668:case 35672:return $u;case 35669:case 35673:return Ku;case 5125:return Qu;case 36294:return ed;case 36295:return td;case 36296:return id;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return rd;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return ad}}(t.type)}},so=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Da=/(\w+)(\])?(\[|\.)?/g;function mc(r,e){r.seq.push(e),r.map[e.id]=e}function od(r,e,t){let i=r.name,n=i.length;for(Da.lastIndex=0;;){let s=Da.exec(i),a=Da.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){mc(t,c===void 0?new no(o,r,e):new ro(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new so(o),mc(t,h)),t=h}}}var In=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);od(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function fc(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var ld=37297,cd=0;function gc(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function hd(r,e){let t=function(i){let n=Ve.getPrimaries(Ve.workingColorSpace),s=Ve.getPrimaries(i),a;switch(n===s?a="":n===vs&&s===gs?a="LinearDisplayP3ToLinearSRGB":n===gs&&s===vs&&(a="LinearSRGBToLinearDisplayP3"),i){case mi:case Ys:return[a,"LinearTransferOETF"];case Je:case Yo:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ud(r,e){let t;switch(e){case Oh:t="Linear";break;case Fh:t="Reinhard";break;case zh:t="OptimizedCineon";break;case Bh:t="ACESFilmic";break;case kh:t="AgX";break;case Hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function En(r){return r!==""}function vc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(r){return r.replace(dd,md)}var pd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function md(r,e){let t=Re[e];if(t===void 0){let i=pd.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return ao(t)}var fd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(r){return r.replace(fd,gd)}function gd(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function xc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vd(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(R){let z="SHADOWMAP_TYPE_BASIC";return R.shadowMapType===Hc?z="SHADOWMAP_TYPE_PCF":R.shadowMapType===Xo?z="SHADOWMAP_TYPE_PCF_SOFT":R.shadowMapType===di&&(z="SHADOWMAP_TYPE_VSM"),z}(t),c=function(R){let z="ENVMAP_TYPE_CUBE";if(R.envMap)switch(R.envMapMode){case Dn:case Un:z="ENVMAP_TYPE_CUBE";break;case qs:z="ENVMAP_TYPE_CUBE_UV"}return z}(t),h=function(R){let z="ENVMAP_MODE_REFLECTION";return R.envMap&&R.envMapMode===Un&&(z="ENVMAP_MODE_REFRACTION"),z}(t),d=function(R){let z="ENVMAP_BLENDING_NONE";if(R.envMap)switch(R.combine){case jo:z="ENVMAP_BLENDING_MULTIPLY";break;case Uh:z="ENVMAP_BLENDING_MIX";break;case Nh:z="ENVMAP_BLENDING_ADD"}return z}(t),u=function(R){let z=R.envMapCubeUVHeight;if(z===null)return null;let B=Math.log2(z)-2,re=1/z;return{texelWidth:1/(3*Math.max(Math.pow(2,B),112)),texelHeight:re,maxMip:B}}(t),p=t.isWebGL2?"":function(R){return[R.extensionDerivatives||R.envMapCubeUVHeight||R.bumpMap||R.normalMapTangentSpace||R.clearcoatNormalMap||R.flatShading||R.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(R.extensionFragDepth||R.logarithmicDepthBuffer)&&R.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",R.extensionDrawBuffers&&R.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(R.extensionShaderTextureLOD||R.envMap||R.transmission)&&R.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(En).join(`
`)}(t),f=function(R){return[R.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(En).join(`
`)}(t),g=function(R){let z=[];for(let B in R){let re=R[B];re!==!1&&z.push("#define "+B+" "+re)}return z.join(`
`)}(s),m=n.createProgram(),y,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(En).join(`
`),y.length>0&&(y+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(En).join(`
`),v.length>0&&(v+=`
`)):(y=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(En).join(`
`),v=[p,xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Re.tonemapping_pars_fragment:"",t.toneMapping!==Ci?ud("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,hd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(En).join(`
`)),a=ao(a),a=vc(a,t),a=_c(a,t),o=ao(o),o=vc(o,t),o=_c(o,t),a=yc(a),o=yc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=_+y+a,P=_+v+o,x=fc(n,n.VERTEX_SHADER,E),T=fc(n,n.FRAGMENT_SHADER,P);function D(R){if(r.debug.checkShaderErrors){let z=n.getProgramInfoLog(m).trim(),B=n.getShaderInfoLog(x).trim(),re=n.getShaderInfoLog(T).trim(),le=!0,J=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(le=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,x,T);else{let Y=gc(n,x,"vertex"),Q=gc(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+z+`
`+Y+`
`+Q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):B!==""&&re!==""||(J=!1);J&&(R.diagnostics={runnable:le,programLog:z,vertexShader:{log:B,prefix:y},fragmentShader:{log:re,prefix:v}})}n.deleteShader(x),n.deleteShader(T),I=new In(n,m),S=function(z,B){let re={},le=z.getProgramParameter(B,z.ACTIVE_ATTRIBUTES);for(let J=0;J<le;J++){let Y=z.getActiveAttrib(B,J),Q=Y.name,k=1;Y.type===z.FLOAT_MAT2&&(k=2),Y.type===z.FLOAT_MAT3&&(k=3),Y.type===z.FLOAT_MAT4&&(k=4),re[Q]={type:Y.type,location:z.getAttribLocation(B,Q),locationSize:k}}return re}(n,m)}let I,S;n.attachShader(m,x),n.attachShader(m,T),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return I===void 0&&D(this),I},this.getAttributes=function(){return S===void 0&&D(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(m,ld)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cd++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=T,this}var _d=0,oo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new lo(e),t.set(e,i)),i}},lo=class{constructor(e){this.id=_d++,this.code=e,this.usedTimes=0}};function yd(r,e,t,i,n,s,a){let o=new mr,l=new oo,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,v,_,E){let P=_.fog,x=E.geometry,T=m.isMeshStandardMaterial?_.environment:null,D=(m.isMeshStandardMaterial?t:e).get(m.envMap||T),I=D&&D.mapping===qs?D.image.height:null,S=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let L=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,R=L!==void 0?L.length:0,z,B,re,le,J=0;if(x.morphAttributes.position!==void 0&&(J=1),x.morphAttributes.normal!==void 0&&(J=2),x.morphAttributes.color!==void 0&&(J=3),S){let ct=qt[S];z=ct.vertexShader,B=ct.fragmentShader}else z=m.vertexShader,B=m.fragmentShader,l.update(m),re=l.getVertexShaderID(m),le=l.getFragmentShaderID(m);let Y=r.getRenderTarget(),Q=E.isInstancedMesh===!0,k=E.isBatchedMesh===!0,Z=!!m.map,ce=!!m.matcap,A=!!D,w=!!m.aoMap,H=!!m.lightMap,$=!!m.bumpMap,N=!!m.normalMap,q=!!m.displacementMap,O=!!m.emissiveMap,F=!!m.metalnessMap,V=!!m.roughnessMap,ie=m.anisotropy>0,ee=m.clearcoat>0,M=m.iridescence>0,se=m.sheen>0,W=m.transmission>0,X=ie&&!!m.anisotropyMap,ae=ee&&!!m.clearcoatMap,ue=ee&&!!m.clearcoatNormalMap,de=ee&&!!m.clearcoatRoughnessMap,ge=M&&!!m.iridescenceMap,Me=M&&!!m.iridescenceThicknessMap,fe=se&&!!m.sheenColorMap,ve=se&&!!m.sheenRoughnessMap,we=!!m.specularMap,et=!!m.specularColorMap,_e=!!m.specularIntensityMap,Ne=W&&!!m.transmissionMap,Le=W&&!!m.thicknessMap,Di=!!m.gradientMap,bt=!!m.alphaMap,U=m.alphaTest>0,me=!!m.alphaHash,Te=!!m.extensions,He=!!x.attributes.uv1,G=!!x.attributes.uv2,St=!!x.attributes.uv3,ot=Ci;return m.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(ot=r.toneMapping)),{isWebGL2:h,shaderID:S,shaderType:m.type,shaderName:m.name,vertexShader:z,fragmentShader:B,defines:m.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:k,instancing:Q,instancingColor:Q&&E.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:mi,map:Z,matcap:ce,envMap:A,envMapMode:A&&D.mapping,envMapCubeUVHeight:I,aoMap:w,lightMap:H,bumpMap:$,normalMap:N,displacementMap:u&&q,emissiveMap:O,normalMapObjectSpace:N&&m.normalMapType===1,normalMapTangentSpace:N&&m.normalMapType===0,metalnessMap:F,roughnessMap:V,anisotropy:ie,anisotropyMap:X,clearcoat:ee,clearcoatMap:ae,clearcoatNormalMap:ue,clearcoatRoughnessMap:de,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:Me,sheen:se,sheenColorMap:fe,sheenRoughnessMap:ve,specularMap:we,specularColorMap:et,specularIntensityMap:_e,transmission:W,transmissionMap:Ne,thicknessMap:Le,gradientMap:Di,opaque:m.transparent===!1&&m.blending===1,alphaMap:bt,alphaTest:U,alphaHash:me,combine:m.combine,mapUv:Z&&g(m.map.channel),aoMapUv:w&&g(m.aoMap.channel),lightMapUv:H&&g(m.lightMap.channel),bumpMapUv:$&&g(m.bumpMap.channel),normalMapUv:N&&g(m.normalMap.channel),displacementMapUv:q&&g(m.displacementMap.channel),emissiveMapUv:O&&g(m.emissiveMap.channel),metalnessMapUv:F&&g(m.metalnessMap.channel),roughnessMapUv:V&&g(m.roughnessMap.channel),anisotropyMapUv:X&&g(m.anisotropyMap.channel),clearcoatMapUv:ae&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(m.sheenRoughnessMap.channel),specularMapUv:we&&g(m.specularMap.channel),specularColorMapUv:et&&g(m.specularColorMap.channel),specularIntensityMapUv:_e&&g(m.specularIntensityMap.channel),transmissionMapUv:Ne&&g(m.transmissionMap.channel),thicknessMapUv:Le&&g(m.thicknessMap.channel),alphaMapUv:bt&&g(m.alphaMap.channel),vertexTangents:!!x.attributes.tangent&&(N||ie),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:G,vertexUv3s:St,pointsUvs:E.isPoints===!0&&!!x.attributes.uv&&(Z||bt),fog:!!P,useFog:m.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:x.morphAttributes.position!==void 0,morphNormals:x.morphAttributes.normal!==void 0,morphColors:x.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:J,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Z&&m.map.isVideoTexture===!0&&Ve.getTransfer(m.map.colorSpace)===Xe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===Mt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:Te&&m.extensions.derivatives===!0,extensionFragDepth:Te&&m.extensions.fragDepth===!0,extensionDrawBuffers:Te&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:Te&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Te&&m.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)y.push(v),y.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}(y,m),function(v,_){o.disableAll(),_.isWebGL2&&o.enable(0),_.supportsVertexTextures&&o.enable(1),_.instancing&&o.enable(2),_.instancingColor&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.useLegacyLights&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),v.push(o.mask)}(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],v;if(y){let _=qt[y];v=ru.clone(_.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,y){let v;for(let _=0,E=c.length;_<E;_++){let P=c[_];if(P.cacheKey===y){v=P,++v.usedTimes;break}}return v===void 0&&(v=new vd(r,y,m,s),c.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let y=c.indexOf(m);c[y]=c[c.length-1],c.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:c,dispose:function(){l.dispose()}}}function xd(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function Md(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Mc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bc(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,l,c,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=s(a,o,l,c,h,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Md),i.length>1&&i.sort(o||Mc),n.length>1&&n.sort(o||Mc)}}}function bd(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new bc,r.set(e,[n])):t>=i.length?(n=new bc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function Sd(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Ae};break;case"SpotLight":t={position:new b,direction:new b,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new b,halfWidth:new b,halfHeight:new b}}return r[e.id]=t,t}}}var Ed=0;function Td(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wd(r,e){let t=new Sd,i=function(){let l={};return{get:function(c){if(l[c.id]!==void 0)return l[c.id];let h;switch(c.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3}}return l[c.id]=h,h}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);let s=new b,a=new Ce,o=new Ce;return{setup:function(l,c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,f=0,g=0,m=0,y=0,v=0,_=0,E=0,P=0,x=0,T=0;l.sort(Td);let D=c===!0?Math.PI:1;for(let S=0,L=l.length;S<L;S++){let R=l[S],z=R.color,B=R.intensity,re=R.distance,le=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*B*D,d+=z.g*B*D,u+=z.b*B*D;else if(R.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(R.sh.coefficients[J],B);T++}else if(R.isDirectionalLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity*D),R.castShadow){let Y=R.shadow,Q=i.get(R);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=le,n.directionalShadowMatrix[p]=R.shadow.matrix,v++}n.directional[p]=J,p++}else if(R.isSpotLight){let J=t.get(R);J.position.setFromMatrixPosition(R.matrixWorld),J.color.copy(z).multiplyScalar(B*D),J.distance=re,J.coneCos=Math.cos(R.angle),J.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),J.decay=R.decay,n.spot[g]=J;let Y=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,Y.updateMatrices(R),R.castShadow&&x++),n.spotLightMatrix[g]=Y.matrix,R.castShadow){let Q=i.get(R);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[g]=Q,n.spotShadowMap[g]=le,E++}g++}else if(R.isRectAreaLight){let J=t.get(R);J.color.copy(z).multiplyScalar(B),J.halfWidth.set(.5*R.width,0,0),J.halfHeight.set(0,.5*R.height,0),n.rectArea[m]=J,m++}else if(R.isPointLight){let J=t.get(R);if(J.color.copy(R.color).multiplyScalar(R.intensity*D),J.distance=R.distance,J.decay=R.decay,R.castShadow){let Y=R.shadow,Q=i.get(R);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[f]=Q,n.pointShadowMap[f]=le,n.pointShadowMatrix[f]=R.shadow.matrix,_++}n.point[f]=J,f++}else if(R.isHemisphereLight){let J=t.get(R);J.skyColor.copy(R.color).multiplyScalar(B*D),J.groundColor.copy(R.groundColor).multiplyScalar(B*D),n.hemi[y]=J,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;I.directionalLength===p&&I.pointLength===f&&I.spotLength===g&&I.rectAreaLength===m&&I.hemiLength===y&&I.numDirectionalShadows===v&&I.numPointShadows===_&&I.numSpotShadows===E&&I.numSpotMaps===P&&I.numLightProbes===T||(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=f,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=E+P-x,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=T,I.directionalLength=p,I.pointLength=f,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=y,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=E,I.numSpotMaps=P,I.numLightProbes=T,n.version=Ed++)},setupView:function(l,c){let h=0,d=0,u=0,p=0,f=0,g=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let v=l[m];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(v.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(v.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),a.copy(v.matrixWorld),a.premultiply(g),o.extractRotation(a),_.halfWidth.set(.5*v.width,0,0),_.halfHeight.set(0,.5*v.height,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[f];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),f++}}},state:n}}function Sc(r,e){let t=new wd(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function Ad(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new Sc(r,e),t.set(i,[a])):n>=s.length?(a=new Sc(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}var co=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ho=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rd(r,e,t){let i=new zn,n=new te,s=new te,a=new We,o=new co({depthPacking:3201}),l=new ho,c={},h=t.maxTextureSize,d={[Kt]:Mt,[Mt]:Kt,2:2},u=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new qe;f.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Se(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let y=this.type;function v(x,T){let D=e.update(g);u.defines.VSM_SAMPLES!==x.blurSamples&&(u.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new fi(n.x,n.y)),u.uniforms.shadow_pass.value=x.map.texture,u.uniforms.resolution.value=x.mapSize,u.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(T,null,D,u,g,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(T,null,D,p,g,null)}function _(x,T,D,I){let S=null,L=D.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let R=S.uuid,z=T.uuid,B=c[R];B===void 0&&(B={},c[R]=B);let re=B[z];re===void 0&&(re=S.clone(),B[z]=re,T.addEventListener("dispose",P)),S=re}return S.visible=T.visible,S.wireframe=T.wireframe,S.side=I===di?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0&&(r.properties.get(S).light=D),S}function E(x,T,D,I,S){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&S===di)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,x.matrixWorld);let R=e.update(x),z=x.material;if(Array.isArray(z)){let B=R.groups;for(let re=0,le=B.length;re<le;re++){let J=B[re],Y=z[J.materialIndex];if(Y&&Y.visible){let Q=_(x,Y,I,S);x.onBeforeShadow(r,x,T,D,R,Q,J),r.renderBufferDirect(D,null,R,Q,x,J),x.onAfterShadow(r,x,T,D,R,Q,J)}}}else if(z.visible){let B=_(x,z,I,S);x.onBeforeShadow(r,x,T,D,R,B,null),r.renderBufferDirect(D,null,R,B,x,null),x.onAfterShadow(r,x,T,D,R,B,null)}}let L=x.children;for(let R=0,z=L.length;R<z;R++)E(L[R],T,D,I,S)}function P(x){x.target.removeEventListener("dispose",P);for(let T in c){let D=c[T],I=x.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}this.render=function(x,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;let I=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),R=r.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let z=y!==di&&this.type===di,B=y===di&&this.type!==di;for(let re=0,le=x.length;re<le;re++){let J=x[re],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let Q=Y.getFrameExtents();if(n.multiply(Q),s.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Q.x),n.x=s.x*Q.x,Y.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Q.y),n.y=s.y*Q.y,Y.mapSize.y=s.y)),Y.map===null||z===!0||B===!0){let Z=this.type!==di?{minFilter:vt,magFilter:vt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new fi(n.x,n.y,Z),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();let k=Y.getViewportCount();for(let Z=0;Z<k;Z++){let ce=Y.getViewport(Z);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),R.viewport(a),Y.updateMatrices(J,Z),i=Y.getFrustum(),E(T,D,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===di&&v(Y,D),Y.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(I,S,L)}}function Cd(r,e,t){let i=t.isWebGL2,n=new function(){let M=!1,se=new We,W=null,X=new We(0,0,0,0);return{setMask:function(ae){W===ae||M||(r.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){M=ae},setClear:function(ae,ue,de,ge,Me){Me===!0&&(ae*=ge,ue*=ge,de*=ge),se.set(ae,ue,de,ge),X.equals(se)===!1&&(r.clearColor(ae,ue,de,ge),X.copy(se))},reset:function(){M=!1,W=null,X.set(-1,0,0,0)}}},s=new function(){let M=!1,se=null,W=null,X=null;return{setTest:function(ae){ae?$(r.DEPTH_TEST):N(r.DEPTH_TEST)},setMask:function(ae){se===ae||M||(r.depthMask(ae),se=ae)},setFunc:function(ae){if(W!==ae){switch(ae){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}W=ae}},setLocked:function(ae){M=ae},setClear:function(ae){X!==ae&&(r.clearDepth(ae),X=ae)},reset:function(){M=!1,se=null,W=null,X=null}}},a=new function(){let M=!1,se=null,W=null,X=null,ae=null,ue=null,de=null,ge=null,Me=null;return{setTest:function(fe){M||(fe?$(r.STENCIL_TEST):N(r.STENCIL_TEST))},setMask:function(fe){se===fe||M||(r.stencilMask(fe),se=fe)},setFunc:function(fe,ve,we){W===fe&&X===ve&&ae===we||(r.stencilFunc(fe,ve,we),W=fe,X=ve,ae=we)},setOp:function(fe,ve,we){ue===fe&&de===ve&&ge===we||(r.stencilOp(fe,ve,we),ue=fe,de=ve,ge=we)},setLocked:function(fe){M=fe},setClear:function(fe){Me!==fe&&(r.clearStencil(fe),Me=fe)},reset:function(){M=!1,se=null,W=null,X=null,ae=null,ue=null,de=null,ge=null,Me=null}}},o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],p=null,f=!1,g=null,m=null,y=null,v=null,_=null,E=null,P=null,x=new Ae(0,0,0),T=0,D=!1,I=null,S=null,L=null,R=null,z=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,le=0,J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(J)[1]),re=le>=1):J.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),re=le>=2);let Y=null,Q={},k=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ce=new We().fromArray(k),A=new We().fromArray(Z);function w(M,se,W,X){let ae=new Uint8Array(4),ue=r.createTexture();r.bindTexture(M,ue),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<W;de++)!i||M!==r.TEXTURE_3D&&M!==r.TEXTURE_2D_ARRAY?r.texImage2D(se+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage3D(se,0,r.RGBA,1,1,X,0,r.RGBA,r.UNSIGNED_BYTE,ae);return ue}let H={};function $(M){c[M]!==!0&&(r.enable(M),c[M]=!0)}function N(M){c[M]!==!1&&(r.disable(M),c[M]=!1)}H[r.TEXTURE_2D]=w(r.TEXTURE_2D,r.TEXTURE_2D,1),H[r.TEXTURE_CUBE_MAP]=w(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(H[r.TEXTURE_2D_ARRAY]=w(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),H[r.TEXTURE_3D]=w(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),$(r.DEPTH_TEST),s.setFunc(3),V(!1),ie(1),$(r.CULL_FACE),F(0);let q={[Wi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)q[103]=r.MIN,q[104]=r.MAX;else{let M=e.get("EXT_blend_minmax");M!==null&&(q[103]=M.MIN_EXT,q[104]=M.MAX_EXT)}let O={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[Wa]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[Xa]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function F(M,se,W,X,ae,ue,de,ge,Me,fe){if(M!==0){if(f===!1&&($(r.BLEND),f=!0),M===5)ae=ae||se,ue=ue||W,de=de||X,se===m&&ae===_||(r.blendEquationSeparate(q[se],q[ae]),m=se,_=ae),W===y&&X===v&&ue===E&&de===P||(r.blendFuncSeparate(O[W],O[X],O[ue],O[de]),y=W,v=X,E=ue,P=de),ge.equals(x)!==!1&&Me===T||(r.blendColor(ge.r,ge.g,ge.b,Me),x.copy(ge),T=Me),g=M,D=!1;else if(M!==g||fe!==D){if(m===Wi&&_===Wi||(r.blendEquation(r.FUNC_ADD),m=Wi,_=Wi),fe)switch(M){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}y=null,v=null,E=null,P=null,x.set(0,0,0),T=0,g=M,D=fe}}else f===!0&&(N(r.BLEND),f=!1)}function V(M){I!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),I=M)}function ie(M){M!==0?($(r.CULL_FACE),M!==S&&(M===1?r.cullFace(r.BACK):M===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):N(r.CULL_FACE),S=M}function ee(M,se,W){M?($(r.POLYGON_OFFSET_FILL),R===se&&z===W||(r.polygonOffset(se,W),R=se,z=W)):N(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:s,stencil:a},enable:$,disable:N,bindFramebuffer:function(M,se){return h[M]!==se&&(r.bindFramebuffer(M,se),h[M]=se,i&&(M===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=se),M===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=se)),!0)},drawBuffers:function(M,se){let W=u,X=!1;if(M)if(W=d.get(se),W===void 0&&(W=[],d.set(se,W)),M.isWebGLMultipleRenderTargets){let ae=M.texture;if(W.length!==ae.length||W[0]!==r.COLOR_ATTACHMENT0){for(let ue=0,de=ae.length;ue<de;ue++)W[ue]=r.COLOR_ATTACHMENT0+ue;W.length=ae.length,X=!0}}else W[0]!==r.COLOR_ATTACHMENT0&&(W[0]=r.COLOR_ATTACHMENT0,X=!0);else W[0]!==r.BACK&&(W[0]=r.BACK,X=!0);X&&(t.isWebGL2?r.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))},useProgram:function(M){return p!==M&&(r.useProgram(M),p=M,!0)},setBlending:F,setMaterial:function(M,se){M.side===2?N(r.CULL_FACE):$(r.CULL_FACE);let W=M.side===Mt;se&&(W=!W),V(W),M.blending===1&&M.transparent===!1?F(0):F(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),s.setFunc(M.depthFunc),s.setTest(M.depthTest),s.setMask(M.depthWrite),n.setMask(M.colorWrite);let X=M.stencilWrite;a.setTest(X),X&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),ee(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):N(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:V,setCullFace:ie,setLineWidth:function(M){M!==L&&(re&&r.lineWidth(M),L=M)},setPolygonOffset:ee,setScissorTest:function(M){M?$(r.SCISSOR_TEST):N(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+B-1),Y!==M&&(r.activeTexture(M),Y=M)},bindTexture:function(M,se,W){W===void 0&&(W=Y===null?r.TEXTURE0+B-1:Y);let X=Q[W];X===void 0&&(X={type:void 0,texture:void 0},Q[W]=X),X.type===M&&X.texture===se||(Y!==W&&(r.activeTexture(W),Y=W),r.bindTexture(M,se||H[M]),X.type=M,X.texture=se)},unbindTexture:function(){let M=Q[Y];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,se){let W=l.get(se);W===void 0&&(W=new WeakMap,l.set(se,W));let X=W.get(M);X===void 0&&(X=r.getUniformBlockIndex(se,M.name),W.set(M,X))},uniformBlockBinding:function(M,se){let W=l.get(se).get(M);o.get(se)!==W&&(r.uniformBlockBinding(se,W,M.__bindingPointIndex),o.set(se,W))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){ce.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),ce.copy(M))},viewport:function(M){A.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),A.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},Y=null,Q={},h={},d=new WeakMap,u=[],p=null,f=!1,g=null,m=null,y=null,v=null,_=null,E=null,P=null,x=new Ae(0,0,0),T=0,D=!1,I=null,S=null,L=null,R=null,z=null,ce.set(0,0,r.canvas.width,r.canvas.height),A.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function Pd(r,e,t,i,n,s,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,w){return p?new OffscreenCanvas(A,w):xs("canvas")}function g(A,w,H,$){let N=1;if((A.width>$||A.height>$)&&(N=$/Math.max(A.width,A.height)),N<1||w===!0){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let q=w?ys:Math.floor,O=q(N*A.width),F=q(N*A.height);d===void 0&&(d=f(O,F));let V=H?f(O,F):d;return V.width=O,V.height=F,V.getContext("2d").drawImage(A,0,0,O,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+O+"x"+F+")."),V}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A}return A}function m(A){return Ka(A.width)&&Ka(A.height)}function y(A,w){return A.generateMipmaps&&w&&A.minFilter!==vt&&A.minFilter!==Vt}function v(A){r.generateMipmap(A)}function _(A,w,H,$,N=!1){if(o===!1)return w;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=w;if(w===r.RED&&(H===r.FLOAT&&(q=r.R32F),H===r.HALF_FLOAT&&(q=r.R16F),H===r.UNSIGNED_BYTE&&(q=r.R8)),w===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(q=r.R8UI),H===r.UNSIGNED_SHORT&&(q=r.R16UI),H===r.UNSIGNED_INT&&(q=r.R32UI),H===r.BYTE&&(q=r.R8I),H===r.SHORT&&(q=r.R16I),H===r.INT&&(q=r.R32I)),w===r.RG&&(H===r.FLOAT&&(q=r.RG32F),H===r.HALF_FLOAT&&(q=r.RG16F),H===r.UNSIGNED_BYTE&&(q=r.RG8)),w===r.RGBA){let O=N?fs:Ve.getTransfer($);H===r.FLOAT&&(q=r.RGBA32F),H===r.HALF_FLOAT&&(q=r.RGBA16F),H===r.UNSIGNED_BYTE&&(q=O===Xe?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return q!==r.R16F&&q!==r.R32F&&q!==r.RG16F&&q!==r.RG32F&&q!==r.RGBA16F&&q!==r.RGBA32F||e.get("EXT_color_buffer_float"),q}function E(A,w,H){return y(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==vt&&A.minFilter!==Vt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function P(A){return A===vt||A===hl||A===sa?r.NEAREST:r.LINEAR}function x(A){let w=A.target;w.removeEventListener("dispose",x),function(H){let $=i.get(H);if($.__webglInit===void 0)return;let N=H.source,q=u.get(N);if(q){let O=q[$.__cacheKey];O.usedTimes--,O.usedTimes===0&&D(H),Object.keys(q).length===0&&u.delete(N)}i.remove(H)}(w),w.isVideoTexture&&h.delete(w)}function T(A){let w=A.target;w.removeEventListener("dispose",T),function(H){let $=H.texture,N=i.get(H),q=i.get($);if(q.__webglTexture!==void 0&&(r.deleteTexture(q.__webglTexture),a.memory.textures--),H.depthTexture&&H.depthTexture.dispose(),H.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(N.__webglFramebuffer[O]))for(let F=0;F<N.__webglFramebuffer[O].length;F++)r.deleteFramebuffer(N.__webglFramebuffer[O][F]);else r.deleteFramebuffer(N.__webglFramebuffer[O]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[O])}else{if(Array.isArray(N.__webglFramebuffer))for(let O=0;O<N.__webglFramebuffer.length;O++)r.deleteFramebuffer(N.__webglFramebuffer[O]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let O=0;O<N.__webglColorRenderbuffer.length;O++)N.__webglColorRenderbuffer[O]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[O]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(H.isWebGLMultipleRenderTargets)for(let O=0,F=$.length;O<F;O++){let V=i.get($[O]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove($[O])}i.remove($),i.remove(H)}(w)}function D(A){let w=i.get(A);r.deleteTexture(w.__webglTexture);let H=A.source;delete u.get(H)[w.__cacheKey],a.memory.textures--}let I=0;function S(A,w){let H=i.get(A);if(A.isVideoTexture&&function($){let N=a.render.frame;h.get($)!==N&&(h.set($,N),$.update())}(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if($.complete!==!1)return void le(H,A,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+w)}let L={[ur]:r.REPEAT,[pi]:r.CLAMP_TO_EDGE,[Ya]:r.MIRRORED_REPEAT},R={[vt]:r.NEAREST,[hl]:r.NEAREST_MIPMAP_NEAREST,[sa]:r.NEAREST_MIPMAP_LINEAR,[Vt]:r.LINEAR,[Gh]:r.LINEAR_MIPMAP_NEAREST,[ds]:r.LINEAR_MIPMAP_LINEAR},z={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function B(A,w,H){if(H?(r.texParameteri(A,r.TEXTURE_WRAP_S,L[w.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,L[w.wrapT]),A!==r.TEXTURE_3D&&A!==r.TEXTURE_2D_ARRAY||r.texParameteri(A,r.TEXTURE_WRAP_R,L[w.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,R[w.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,R[w.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),A!==r.TEXTURE_3D&&A!==r.TEXTURE_2D_ARRAY||r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),w.wrapS===pi&&w.wrapT===pi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,P(w.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,P(w.minFilter)),w.minFilter!==vt&&w.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===vt||w.minFilter!==sa&&w.minFilter!==ds||w.type===Ai&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(r.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function re(A,w){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",x));let $=w.source,N=u.get($);N===void 0&&(N={},u.set($,N));let q=function(O){let F=[];return F.push(O.wrapS),F.push(O.wrapT),F.push(O.wrapR||0),F.push(O.magFilter),F.push(O.minFilter),F.push(O.anisotropy),F.push(O.internalFormat),F.push(O.format),F.push(O.type),F.push(O.generateMipmaps),F.push(O.premultiplyAlpha),F.push(O.flipY),F.push(O.unpackAlignment),F.push(O.colorSpace),F.join()}(w);if(q!==A.__cacheKey){N[q]===void 0&&(N[q]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),N[q].usedTimes++;let O=N[A.__cacheKey];O!==void 0&&(N[A.__cacheKey].usedTimes--,O.usedTimes===0&&D(w)),A.__cacheKey=q,A.__webglTexture=N[q].texture}return H}function le(A,w,H){let $=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=r.TEXTURE_3D);let N=re(A,w),q=w.source;t.bindTexture($,A.__webglTexture,r.TEXTURE0+H);let O=i.get(q);if(q.version!==O.__version||N===!0){t.activeTexture(r.TEXTURE0+H);let F=Ve.getPrimaries(Ve.workingColorSpace),V=w.colorSpace===Zt?null:Ve.getPrimaries(w.colorSpace),ie=w.colorSpace===Zt||F===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ee=function(ve){return!o&&(ve.wrapS!==pi||ve.wrapT!==pi||ve.minFilter!==vt&&ve.minFilter!==Vt)}(w)&&m(w.image)===!1,M=g(w.image,ee,!1,n.maxTextureSize);M=ce(w,M);let se=m(M)||o,W=s.convert(w.format,w.colorSpace),X,ae=s.convert(w.type),ue=_(w.internalFormat,W,ae,w.colorSpace,w.isVideoTexture);B($,w,se);let de=w.mipmaps,ge=o&&w.isVideoTexture!==!0&&ue!==Yc,Me=O.__version===void 0||N===!0,fe=E(w,M,se);if(w.isDepthTexture)ue=r.DEPTH_COMPONENT,o?ue=w.type===Ai?r.DEPTH_COMPONENT32F:w.type===wi?r.DEPTH_COMPONENT24:w.type===Yi?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:w.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Zi&&ue===r.DEPTH_COMPONENT&&w.type!==qo&&w.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=wi,ae=s.convert(w.type)),w.format===Nn&&ue===r.DEPTH_COMPONENT&&(ue=r.DEPTH_STENCIL,w.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Yi,ae=s.convert(w.type))),Me&&(ge?t.texStorage2D(r.TEXTURE_2D,1,ue,M.width,M.height):t.texImage2D(r.TEXTURE_2D,0,ue,M.width,M.height,0,W,ae,null));else if(w.isDataTexture)if(de.length>0&&se){ge&&Me&&t.texStorage2D(r.TEXTURE_2D,fe,ue,de[0].width,de[0].height);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],ge?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,X.width,X.height,W,ae,X.data):t.texImage2D(r.TEXTURE_2D,ve,ue,X.width,X.height,0,W,ae,X.data);w.generateMipmaps=!1}else ge?(Me&&t.texStorage2D(r.TEXTURE_2D,fe,ue,M.width,M.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,W,ae,M.data)):t.texImage2D(r.TEXTURE_2D,0,ue,M.width,M.height,0,W,ae,M.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ge&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ue,de[0].width,de[0].height,M.depth);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],w.format!==Yt?W!==null?ge?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,X.width,X.height,M.depth,W,X.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ue,X.width,X.height,M.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,X.width,X.height,M.depth,W,ae,X.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,ue,X.width,X.height,M.depth,0,W,ae,X.data)}else{ge&&Me&&t.texStorage2D(r.TEXTURE_2D,fe,ue,de[0].width,de[0].height);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],w.format!==Yt?W!==null?ge?t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,X.width,X.height,W,X.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,ue,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ge?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,X.width,X.height,W,ae,X.data):t.texImage2D(r.TEXTURE_2D,ve,ue,X.width,X.height,0,W,ae,X.data)}else if(w.isDataArrayTexture)ge?(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ue,M.width,M.height,M.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,W,ae,M.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,M.width,M.height,M.depth,0,W,ae,M.data);else if(w.isData3DTexture)ge?(Me&&t.texStorage3D(r.TEXTURE_3D,fe,ue,M.width,M.height,M.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,W,ae,M.data)):t.texImage3D(r.TEXTURE_3D,0,ue,M.width,M.height,M.depth,0,W,ae,M.data);else if(w.isFramebufferTexture){if(Me)if(ge)t.texStorage2D(r.TEXTURE_2D,fe,ue,M.width,M.height);else{let ve=M.width,we=M.height;for(let et=0;et<fe;et++)t.texImage2D(r.TEXTURE_2D,et,ue,ve,we,0,W,ae,null),ve>>=1,we>>=1}}else if(de.length>0&&se){ge&&Me&&t.texStorage2D(r.TEXTURE_2D,fe,ue,de[0].width,de[0].height);for(let ve=0,we=de.length;ve<we;ve++)X=de[ve],ge?t.texSubImage2D(r.TEXTURE_2D,ve,0,0,W,ae,X):t.texImage2D(r.TEXTURE_2D,ve,ue,W,ae,X);w.generateMipmaps=!1}else ge?(Me&&t.texStorage2D(r.TEXTURE_2D,fe,ue,M.width,M.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,W,ae,M)):t.texImage2D(r.TEXTURE_2D,0,ue,W,ae,M);y(w,se)&&v($),O.__version=q.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function J(A,w,H,$,N,q){let O=s.convert(H.format,H.colorSpace),F=s.convert(H.type),V=_(H.internalFormat,O,F,H.colorSpace);if(!i.get(w).__hasExternalTextures){let ie=Math.max(1,w.width>>q),ee=Math.max(1,w.height>>q);N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?t.texImage3D(N,q,V,ie,ee,w.depth,0,O,F,null):t.texImage2D(N,q,V,ie,ee,0,O,F,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),Z(w)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,N,i.get(H).__webglTexture,0,k(w)):(N===r.TEXTURE_2D||N>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,N,i.get(H).__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(A,w,H){if(r.bindRenderbuffer(r.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let $=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(H||Z(w)){let N=w.depthTexture;N&&N.isDepthTexture&&(N.type===Ai?$=r.DEPTH_COMPONENT32F:N.type===wi&&($=r.DEPTH_COMPONENT24));let q=k(w);Z(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,q,$,w.width,w.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,q,$,w.width,w.height)}else r.renderbufferStorage(r.RENDERBUFFER,$,w.width,w.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let $=k(w);H&&Z(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,w.width,w.height):Z(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{let $=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let N=0;N<$.length;N++){let q=$[N],O=s.convert(q.format,q.colorSpace),F=s.convert(q.type),V=_(q.internalFormat,O,F,q.colorSpace),ie=k(w);H&&Z(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,V,w.width,w.height):Z(w)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,V,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,V,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Q(A){let w=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function($,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,$),!N.depthTexture||!N.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(N.depthTexture).__webglTexture&&N.depthTexture.image.width===N.width&&N.depthTexture.image.height===N.height||(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),S(N.depthTexture,0);let q=i.get(N.depthTexture).__webglTexture,O=k(N);if(N.depthTexture.format===Zi)Z(N)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else{if(N.depthTexture.format!==Nn)throw new Error("Unknown depthTexture format");Z(N)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,O):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0)}})(w.__webglFramebuffer,A)}else if(H){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=r.createRenderbuffer(),Y(w.__webglDepthbuffer[$],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),Y(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function k(A){return Math.min(n.maxSamples,A.samples)}function Z(A){let w=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(A,w){let H=A.colorSpace,$=A.format,N=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ja||H!==mi&&H!==Zt&&(Ve.getTransfer(H)===Xe?o===!1?e.has("EXT_sRGB")===!0&&$===Yt?(A.format=Ja,A.minFilter=Vt,A.generateMipmaps=!1):w=Ms.sRGBToLinear(w):$===Yt&&N===qi||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}this.allocateTextureUnit=function(){let A=I;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),I+=1,A},this.resetTextureUnits=function(){I=0},this.setTexture2D=S,this.setTexture2DArray=function(A,w){let H=i.get(A);A.version>0&&H.__version!==A.version?le(H,A,w):t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+w)},this.setTexture3D=function(A,w){let H=i.get(A);A.version>0&&H.__version!==A.version?le(H,A,w):t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+w)},this.setTextureCube=function(A,w){let H=i.get(A);A.version>0&&H.__version!==A.version?function($,N,q){if(N.image.length!==6)return;let O=re($,N),F=N.source;t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+q);let V=i.get(F);if(F.version!==V.__version||O===!0){t.activeTexture(r.TEXTURE0+q);let ie=Ve.getPrimaries(Ve.workingColorSpace),ee=N.colorSpace===Zt?null:Ve.getPrimaries(N.colorSpace),M=N.colorSpace===Zt||ie===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,N.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,N.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let se=N.isCompressedTexture||N.image[0].isCompressedTexture,W=N.image[0]&&N.image[0].isDataTexture,X=[];for(let _e=0;_e<6;_e++)X[_e]=se||W?W?N.image[_e].image:N.image[_e]:g(N.image[_e],!1,!0,n.maxCubemapSize),X[_e]=ce(N,X[_e]);let ae=X[0],ue=m(ae)||o,de=s.convert(N.format,N.colorSpace),ge=s.convert(N.type),Me=_(N.internalFormat,de,ge,N.colorSpace),fe=o&&N.isVideoTexture!==!0,ve=V.__version===void 0||O===!0,we,et=E(N,ae,ue);if(B(r.TEXTURE_CUBE_MAP,N,ue),se){fe&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,et,Me,ae.width,ae.height);for(let _e=0;_e<6;_e++){we=X[_e].mipmaps;for(let Ne=0;Ne<we.length;Ne++){let Le=we[Ne];N.format!==Yt?de!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,0,0,Le.width,Le.height,de,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,Me,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,0,0,Le.width,Le.height,de,ge,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,Me,Le.width,Le.height,0,de,ge,Le.data)}}}else{we=N.mipmaps,fe&&ve&&(we.length>0&&et++,t.texStorage2D(r.TEXTURE_CUBE_MAP,et,Me,X[0].width,X[0].height));for(let _e=0;_e<6;_e++)if(W){fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,X[_e].width,X[_e].height,de,ge,X[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,X[_e].width,X[_e].height,0,de,ge,X[_e].data);for(let Ne=0;Ne<we.length;Ne++){let Le=we[Ne].image[_e].image;fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,0,0,Le.width,Le.height,de,ge,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,Me,Le.width,Le.height,0,de,ge,Le.data)}}else{fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,ge,X[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Me,de,ge,X[_e]);for(let Ne=0;Ne<we.length;Ne++){let Le=we[Ne];fe?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,0,0,de,ge,Le.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,Me,de,ge,Le.image[_e])}}}y(N,ue)&&v(r.TEXTURE_CUBE_MAP),V.__version=F.version,N.onUpdate&&N.onUpdate(N)}$.__version=N.version}(H,A,w):t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+w)},this.rebindTextures=function(A,w,H){let $=i.get(A);w!==void 0&&J($.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Q(A)},this.setupRenderTarget=function(A){let w=A.texture,H=i.get(A),$=i.get(w);A.addEventListener("dispose",T),A.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=w.version,a.memory.textures++);let N=A.isWebGLCubeRenderTarget===!0,q=A.isWebGLMultipleRenderTargets===!0,O=m(A)||o;if(N){H.__webglFramebuffer=[];for(let F=0;F<6;F++)if(o&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[F]=[];for(let V=0;V<w.mipmaps.length;V++)H.__webglFramebuffer[F][V]=r.createFramebuffer()}else H.__webglFramebuffer[F]=r.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let F=0;F<w.mipmaps.length;F++)H.__webglFramebuffer[F]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(q)if(n.drawBuffers){let F=A.texture;for(let V=0,ie=F.length;V<ie;V++){let ee=i.get(F[V]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Z(A)===!1){let F=q?w:[w];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let V=0;V<F.length;V++){let ie=F[V];H.__webglColorRenderbuffer[V]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[V]);let ee=s.convert(ie.format,ie.colorSpace),M=s.convert(ie.type),se=_(ie.internalFormat,ee,M,ie.colorSpace,A.isXRRenderTarget===!0),W=k(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,W,se,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+V,r.RENDERBUFFER,H.__webglColorRenderbuffer[V])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(N){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),B(r.TEXTURE_CUBE_MAP,w,O);for(let F=0;F<6;F++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)J(H.__webglFramebuffer[F][V],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,V);else J(H.__webglFramebuffer[F],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);y(w,O)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){let F=A.texture;for(let V=0,ie=F.length;V<ie;V++){let ee=F[V],M=i.get(ee);t.bindTexture(r.TEXTURE_2D,M.__webglTexture),B(r.TEXTURE_2D,ee,O),J(H.__webglFramebuffer,A,ee,r.COLOR_ATTACHMENT0+V,r.TEXTURE_2D,0),y(ee,O)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let F=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?F=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(F,$.__webglTexture),B(F,w,O),o&&w.mipmaps&&w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)J(H.__webglFramebuffer[V],A,w,r.COLOR_ATTACHMENT0,F,V);else J(H.__webglFramebuffer,A,w,r.COLOR_ATTACHMENT0,F,0);y(w,O)&&v(F),t.unbindTexture()}A.depthBuffer&&Q(A)},this.updateRenderTargetMipmap=function(A){let w=m(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let $=0,N=H.length;$<N;$++){let q=H[$];if(y(q,w)){let O=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,F=i.get(q).__webglTexture;t.bindTexture(O,F),v(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(o&&A.samples>0&&Z(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,$=A.height,N=r.COLOR_BUFFER_BIT,q=[],O=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=i.get(A),V=A.isWebGLMultipleRenderTargets===!0;if(V)for(let ie=0;ie<w.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let ie=0;ie<w.length;ie++){q.push(r.COLOR_ATTACHMENT0+ie),A.depthBuffer&&q.push(O);let ee=F.__ignoreDepthValues!==void 0&&F.__ignoreDepthValues;if(ee===!1&&(A.depthBuffer&&(N|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(N|=r.STENCIL_BUFFER_BIT)),V&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,F.__webglColorRenderbuffer[ie]),ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[O]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[O])),V){let M=i.get(w[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,M,0)}r.blitFramebuffer(0,0,H,$,0,0,H,$,N,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),V)for(let ie=0;ie<w.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);let ee=i.get(w[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Z}function Ld(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=""){let a,o=Ve.getTransfer(s);if(n===qi)return r.UNSIGNED_BYTE;if(n===Vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===Gc)return r.INT;if(n===wi)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===dr)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===Yt)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===Zi)return r.DEPTH_COMPONENT;if(n===Nn)return r.DEPTH_STENCIL;if(n===Ja)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===Xc)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===jc)return r.RG_INTEGER;if(n===qc)return r.RGBA_INTEGER;if(n===aa||n===oa||n===la||n===ca)if(o===Xe){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===aa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===aa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===ul||n===dl||n===pl||n===ml){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===ul)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Yc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===fl||n===gl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===fl)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===gl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===vl||n===_l||n===yl||n===xl||n===Ml||n===bl||n===Sl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===vl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Al)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===ha||n===Ll||n===Il){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===ha)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===Dl||n===Ul||n===Nl){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===ha)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ul)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Yi?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}var uo=class extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Id={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Id)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},po=class extends Qt{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,g=t.getContextAttributes(),m=null,y=null,v=[],_=[],E=new te,P=null,x=new yt;x.layers.enable(1),x.viewport=new We;let T=new yt;T.layers.enable(2),T.viewport=new We;let D=[x,T],I=new uo;I.layers.enable(1),I.layers.enable(2);let S=null,L=null;function R(k){let Z=_.indexOf(k.inputSource);if(Z===-1)return;let ce=v[Z];ce!==void 0&&(ce.update(k.inputSource,k.frame,c||a),ce.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){n.removeEventListener("select",R),n.removeEventListener("selectstart",R),n.removeEventListener("selectend",R),n.removeEventListener("squeeze",R),n.removeEventListener("squeezestart",R),n.removeEventListener("squeezeend",R),n.removeEventListener("end",z),n.removeEventListener("inputsourceschange",B);for(let k=0;k<v.length;k++){let Z=_[k];Z!==null&&(_[k]=null,v[k].disconnect(Z))}S=null,L=null,e.setRenderTarget(m),p=null,u=null,d=null,n=null,y=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}function B(k){for(let Z=0;Z<k.removed.length;Z++){let ce=k.removed[Z],A=_.indexOf(ce);A>=0&&(_[A]=null,v[A].disconnect(ce))}for(let Z=0;Z<k.added.length;Z++){let ce=k.added[Z],A=_.indexOf(ce);if(A===-1){for(let H=0;H<v.length;H++){if(H>=_.length){_.push(ce),A=H;break}if(_[H]===null){_[H]=ce,A=H;break}}if(A===-1)break}let w=v[A];w&&w.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=v[k];return Z===void 0&&(Z=new or,v[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=v[k];return Z===void 0&&(Z=new or,v[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=v[k];return Z===void 0&&(Z=new or,v[k]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(k){if(n=k,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",R),n.addEventListener("selectstart",R),n.addEventListener("selectend",R),n.addEventListener("squeeze",R),n.addEventListener("squeezestart",R),n.addEventListener("squeezeend",R),n.addEventListener("end",z),n.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:n.renderState.layers!==void 0||g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ce=null,A=null;g.depth&&(A=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?Nn:Zi,ce=g.stencil?Yi:wi);let w={colorFormat:t.RGBA8,depthFormat:A,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(w),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new fi(u.textureWidth,u.textureHeight,{format:Yt,type:qi,depthTexture:new Cs(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Q.setContext(n),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let re=new b,le=new b;function J(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(n===null)return;I.near=T.near=x.near=k.near,I.far=T.far=x.far=k.far,S===I.near&&L===I.far||(n.updateRenderState({depthNear:I.near,depthFar:I.far}),S=I.near,L=I.far);let Z=k.parent,ce=I.cameras;J(I,Z);for(let A=0;A<ce.length;A++)J(ce[A],Z);ce.length===2?function(A,w,H){re.setFromMatrixPosition(w.matrixWorld),le.setFromMatrixPosition(H.matrixWorld);let $=re.distanceTo(le),N=w.projectionMatrix.elements,q=H.projectionMatrix.elements,O=N[14]/(N[10]-1),F=N[14]/(N[10]+1),V=(N[9]+1)/N[5],ie=(N[9]-1)/N[5],ee=(N[8]-1)/N[0],M=(q[8]+1)/q[0],se=O*ee,W=O*M,X=$/(-ee+M),ae=X*-ee;w.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ae),A.translateZ(X),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();let ue=O+X,de=F+X,ge=se-ae,Me=W+($-ae),fe=V*F/de*ue,ve=ie*F/de*ue;A.projectionMatrix.makePerspective(ge,Me,fe,ve,ue,de),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}(I,x,T):I.projectionMatrix.copy(x.projectionMatrix),function(A,w,H){H===null?A.matrix.copy(w.matrixWorld):(A.matrix.copy(H.matrixWorld),A.matrix.invert(),A.matrix.multiply(w.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*pr*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}(k,I,Z)},this.getCamera=function(){return I},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)};let Y=null,Q=new eh;Q.setAnimationLoop(function(k,Z){if(h=Z.getViewerPose(c||a),f=Z,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let A=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,A=!0);for(let w=0;w<ce.length;w++){let H=ce[w],$=null;if(p!==null)$=p.getViewport(H);else{let q=d.getViewSubImage(u,H);$=q.viewport,w===0&&(e.setRenderTargetTextures(y,q.colorTexture,u.ignoreDepthValues?void 0:q.depthStencilTexture),e.setRenderTarget(y))}let N=D[w];N===void 0&&(N=new yt,N.layers.enable(w),N.viewport=new We,D[w]=N),N.matrix.fromArray(H.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(H.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set($.x,$.y,$.width,$.height),w===0&&(I.matrix.copy(N.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),A===!0&&I.cameras.push(N)}}for(let ce=0;ce<v.length;ce++){let A=_[ce],w=v[ce];A!==null&&w!==void 0&&w.update(A,Z,c||a)}Y&&Y(k,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),f=null}),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}};function Dd(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===Mt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===Mt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,Qc(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(n,s)):s.isMeshStandardMaterial?(i(n,s),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),e.get(h).envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mt&&c.clearcoatNormalScale.value.negate())),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(n,s,l)):s.isMeshMatcapMaterial?(i(n,s),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(n,s),s.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Ud(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,p,f){let g=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&(function(m){let y=m.uniforms,v=0,_=16;for(let P=0,x=y.length;P<x;P++){let T=Array.isArray(y[P])?y[P]:[y[P]];for(let D=0,I=T.length;D<I;D++){let S=T[D],L=Array.isArray(S.value)?S.value:[S.value];for(let R=0,z=L.length;R<z;R++){let B=c(L[R]),re=v%_;re!==0&&_-re<B.boundary&&(v+=_-re),S.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,v+=B.storage}}}let E=v%_;E>0&&(v+=_-E),m.__size=v,m.__cache={}}(d),p=function(m){let y=function(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=y;let v=r.createBuffer(),_=m.__size,E=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,_,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}(d),n[d.id]=p,d.addEventListener("dispose",h));let f=u.program;i.updateUBOMapping(d,f);let g=e.render.frame;s[d.id]!==g&&(function(m){let y=n[m.id],v=m.uniforms,_=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,P=v.length;E<P;E++){let x=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,D=x.length;T<D;T++){let I=x[T];if(l(I,E,T,_)===!0){let S=I.__offset,L=Array.isArray(I.value)?I.value:[I.value],R=0;for(let z=0;z<L.length;z++){let B=L[z],re=c(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,S+R,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,R),R+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,S,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=g)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}var gr=class{constructor(e={}){let{canvas:t=Vh(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),g=null,m=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=Ci,this.toneMappingExposure=1;let _=this,E=!1,P=0,x=0,T=null,D=-1,I=null,S=new We,L=new We,R=null,z=new Ae(0),B=0,re=t.width,le=t.height,J=1,Y=null,Q=null,k=new We(0,0,re,le),Z=new We(0,0,re,le),ce=!1,A=new zn,w=!1,H=!1,$=null,N=new Ce,q=new te,O=new b,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function V(){return T===null?J:1}let ie,ee,M,se,W,X,ae,ue,de,ge,Me,fe,ve,we,et,_e,Ne,Le,Di,bt,U,me,Te,He,G=i;function St(C,j){for(let K=0;K<C.length;K++){let oe=C[K],ne=t.getContext(oe,j);if(ne!==null)return ne}return null}try{let C={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",Cr,!1),t.addEventListener("webglcontextrestored",qn,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),G===null){let j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),G=St(j,C),G===null)throw St(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}function ot(){ie=new fu(G),ee=new uu(G,ie,e),ie.init(ee),me=new Ld(G,ie,ee),M=new Cd(G,ie,ee),se=new _u(G),W=new xd,X=new Pd(G,ie,M,W,ee,me,se),ae=new pu(_),ue=new mu(_),de=new ou(G,ee),Te=new cu(G,ie,de,ee),ge=new gu(G,de,se,Te),Me=new bu(G,ge,de,se),Di=new Mu(G,ee,X),_e=new du(W),fe=new yd(_,ae,ue,ie,ee,Te,_e),ve=new Dd(_,W),we=new bd,et=new Ad(ie,ee),Le=new lu(_,ae,ue,M,Me,u,l),Ne=new Rd(_,Me,ee),He=new Ud(G,se,ee,M),bt=new hu(G,ie,se,ee),U=new vu(G,ie,se,ee),se.programs=fe.programs,_.capabilities=ee,_.extensions=ie,_.properties=W,_.renderLists=we,_.shadowMap=Ne,_.state=M,_.info=se}ot();let ct=new po(_,G);function Cr(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function qn(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=se.autoReset,j=Ne.enabled,K=Ne.autoUpdate,oe=Ne.needsUpdate,ne=Ne.type;ot(),se.autoReset=C,Ne.enabled=j,Ne.autoUpdate=K,Ne.needsUpdate=oe,Ne.type=ne}function Pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Lt(C){let j=C.target;j.removeEventListener("dispose",Lt),function(K){(function(oe){let ne=W.get(oe).programs;ne!==void 0&&(ne.forEach(function(pe){fe.releaseProgram(pe)}),oe.isShaderMaterial&&fe.releaseShaderCache(oe))})(K),W.remove(K)}(j)}function ln(C,j,K){C.transparent===!0&&C.side===2&&C.forceSinglePass===!1?(C.side=Mt,C.needsUpdate=!0,Lr(C,j,K),C.side=Kt,C.needsUpdate=!0,Lr(C,j,K),C.side=2):Lr(C,j,K)}this.xr=ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=ie.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ie.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(re,le,!1))},this.getSize=function(C){return C.set(re,le)},this.setSize=function(C,j,K=!0){ct.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(re=C,le=j,t.width=Math.floor(C*J),t.height=Math.floor(j*J),K===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j))},this.getDrawingBufferSize=function(C){return C.set(re*J,le*J).floor()},this.setDrawingBufferSize=function(C,j,K){re=C,le=j,J=K,t.width=Math.floor(C*K),t.height=Math.floor(j*K),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,j,K,oe){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,j,K,oe),M.viewport(S.copy(k).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,j,K,oe){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,j,K,oe),M.scissor(L.copy(Z).multiplyScalar(J).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(C){M.setScissorTest(ce=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(C=!0,j=!0,K=!0){let oe=0;if(C){let ne=!1;if(T!==null){let pe=T.texture.format;ne=pe===qc||pe===jc||pe===Xc}if(ne){let pe=T.texture.type,xe=pe===qi||pe===wi||pe===qo||pe===Yi||pe===Vc||pe===Wc,be=Le.getClearColor(),Ie=Le.getClearAlpha(),Ue=be.r,Oe=be.g,Fe=be.b;xe?(p[0]=Ue,p[1]=Oe,p[2]=Fe,p[3]=Ie,G.clearBufferuiv(G.COLOR,0,p)):(f[0]=Ue,f[1]=Oe,f[2]=Fe,f[3]=Ie,G.clearBufferiv(G.COLOR,0,f))}else oe|=G.COLOR_BUFFER_BIT}j&&(oe|=G.DEPTH_BUFFER_BIT),K&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Cr,!1),t.removeEventListener("webglcontextrestored",qn,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),we.dispose(),et.dispose(),W.dispose(),ae.dispose(),ue.dispose(),Me.dispose(),Te.dispose(),He.dispose(),fe.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",xi),ct.removeEventListener("sessionend",Ui),$&&($.dispose(),$=null),Ni.stop()},this.renderBufferDirect=function(C,j,K,oe,ne,pe){j===null&&(j=F);let xe=ne.isMesh&&ne.matrixWorld.determinant()<0,be=function(nt,It,_t,ze,Be){It.isScene!==!0&&(It=F),X.resetTextureUnits();let Yn=It.fog,ta=ze.isMeshStandardMaterial?It.environment:null,Th=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mi,Ir=(ze.isMeshStandardMaterial?ue:ae).get(ze.envMap||ta),wh=ze.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,Ah=!!_t.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),Rh=!!_t.morphAttributes.position,Ch=!!_t.morphAttributes.normal,Ph=!!_t.morphAttributes.color,al=Ci;ze.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(al=_.toneMapping));let ol=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,Lh=ol!==void 0?ol.length:0,ke=W.get(ze),Ih=m.state.lights;if(w===!0&&(H===!0||nt!==I)){let Dt=nt===I&&ze.id===D;_e.setState(ze,nt,Dt)}let zt=!1;ze.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Ih.state.version||ke.outputColorSpace!==Th||Be.isBatchedMesh&&ke.batching===!1?zt=!0:Be.isBatchedMesh||ke.batching!==!0?Be.isInstancedMesh&&ke.instancing===!1?zt=!0:Be.isInstancedMesh||ke.instancing!==!0?Be.isSkinnedMesh&&ke.skinning===!1?zt=!0:Be.isSkinnedMesh||ke.skinning!==!0?Be.isInstancedMesh&&ke.instancingColor===!0&&Be.instanceColor===null||Be.isInstancedMesh&&ke.instancingColor===!1&&Be.instanceColor!==null||ke.envMap!==Ir||ze.fog===!0&&ke.fog!==Yn?zt=!0:ke.numClippingPlanes===void 0||ke.numClippingPlanes===_e.numPlanes&&ke.numIntersection===_e.numIntersection?(ke.vertexAlphas!==wh||ke.vertexTangents!==Ah||ke.morphTargets!==Rh||ke.morphNormals!==Ch||ke.morphColors!==Ph||ke.toneMapping!==al||ee.isWebGL2===!0&&ke.morphTargetsCount!==Lh)&&(zt=!0):zt=!0:zt=!0:zt=!0:zt=!0:(zt=!0,ke.__version=ze.version);let Fi=ke.currentProgram;zt===!0&&(Fi=Lr(ze,It,Be));let ll=!1,Zn=!1,ia=!1,ut=Fi.getUniforms(),zi=ke.uniforms;if(M.useProgram(Fi.program)&&(ll=!0,Zn=!0,ia=!0),ze.id!==D&&(D=ze.id,Zn=!0),ll||I!==nt){ut.setValue(G,"projectionMatrix",nt.projectionMatrix),ut.setValue(G,"viewMatrix",nt.matrixWorldInverse);let Dt=ut.map.cameraPosition;Dt!==void 0&&Dt.setValue(G,O.setFromMatrixPosition(nt.matrixWorld)),ee.logarithmicDepthBuffer&&ut.setValue(G,"logDepthBufFC",2/(Math.log(nt.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&ut.setValue(G,"isOrthographic",nt.isOrthographicCamera===!0),I!==nt&&(I=nt,Zn=!0,ia=!0)}if(Be.isSkinnedMesh){ut.setOptional(G,Be,"bindMatrix"),ut.setOptional(G,Be,"bindMatrixInverse");let Dt=Be.skeleton;Dt&&(ee.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),ut.setValue(G,"boneTexture",Dt.boneTexture,X)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Be.isBatchedMesh&&(ut.setOptional(G,Be,"batchingTexture"),ut.setValue(G,"batchingTexture",Be._matricesTexture,X));let na=_t.morphAttributes;(na.position!==void 0||na.normal!==void 0||na.color!==void 0&&ee.isWebGL2===!0)&&Di.update(Be,_t,Fi),(Zn||ke.receiveShadow!==Be.receiveShadow)&&(ke.receiveShadow=Be.receiveShadow,ut.setValue(G,"receiveShadow",Be.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(zi.envMap.value=Ir,zi.flipEnvMap.value=Ir.isCubeTexture&&Ir.isRenderTargetTexture===!1?-1:1),Zn&&(ut.setValue(G,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&(Bt=ia,(jt=zi).ambientLightColor.needsUpdate=Bt,jt.lightProbe.needsUpdate=Bt,jt.directionalLights.needsUpdate=Bt,jt.directionalLightShadows.needsUpdate=Bt,jt.pointLights.needsUpdate=Bt,jt.pointLightShadows.needsUpdate=Bt,jt.spotLights.needsUpdate=Bt,jt.spotLightShadows.needsUpdate=Bt,jt.rectAreaLights.needsUpdate=Bt,jt.hemisphereLights.needsUpdate=Bt),Yn&&ze.fog===!0&&ve.refreshFogUniforms(zi,Yn),ve.refreshMaterialUniforms(zi,ze,J,le,$),In.upload(G,rl(ke),zi,X));var jt,Bt;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(In.upload(G,rl(ke),zi,X),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&ut.setValue(G,"center",Be.center),ut.setValue(G,"modelViewMatrix",Be.modelViewMatrix),ut.setValue(G,"normalMatrix",Be.normalMatrix),ut.setValue(G,"modelMatrix",Be.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let Dt=ze.uniformsGroups;for(let ra=0,Dh=Dt.length;ra<Dh;ra++)if(ee.isWebGL2){let cl=Dt[ra];He.update(cl,Fi),He.bind(cl,Fi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fi}(C,j,K,oe,ne);M.setMaterial(oe,xe);let Ie=K.index,Ue=1;if(oe.wireframe===!0){if(Ie=ge.getWireframeAttribute(K),Ie===void 0)return;Ue=2}let Oe=K.drawRange,Fe=K.attributes.position,Ye=Oe.start*Ue,Ft=(Oe.start+Oe.count)*Ue;pe!==null&&(Ye=Math.max(Ye,pe.start*Ue),Ft=Math.min(Ft,(pe.start+pe.count)*Ue)),Ie!==null?(Ye=Math.max(Ye,0),Ft=Math.min(Ft,Ie.count)):Fe!=null&&(Ye=Math.max(Ye,0),Ft=Math.min(Ft,Fe.count));let ai=Ft-Ye;if(ai<0||ai===1/0)return;let Oi;Te.setup(ne,oe,be,K,Ie);let Ze=bt;if(Ie!==null&&(Oi=de.get(Ie),Ze=U,Ze.setIndex(Oi)),ne.isMesh)oe.wireframe===!0?(M.setLineWidth(oe.wireframeLinewidth*V()),Ze.setMode(G.LINES)):Ze.setMode(G.TRIANGLES);else if(ne.isLine){let nt=oe.linewidth;nt===void 0&&(nt=1),M.setLineWidth(nt*V()),ne.isLineSegments?Ze.setMode(G.LINES):ne.isLineLoop?Ze.setMode(G.LINE_LOOP):Ze.setMode(G.LINE_STRIP)}else ne.isPoints?Ze.setMode(G.POINTS):ne.isSprite&&Ze.setMode(G.TRIANGLES);if(ne.isBatchedMesh)Ze.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)Ze.renderInstances(Ye,ai,ne.count);else if(K.isInstancedBufferGeometry){let nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,It=Math.min(K.instanceCount,nt);Ze.renderInstances(Ye,ai,It)}else Ze.render(Ye,ai)},this.compile=function(C,j,K=null){K===null&&(K=C),m=et.get(K),m.init(),v.push(m),K.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),C!==K&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test(j.layers)&&(m.pushLight(ne),ne.castShadow&&m.pushShadow(ne))}),m.setupLights(_._useLegacyLights);let oe=new Set;return C.traverse(function(ne){let pe=ne.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){let be=pe[xe];ln(be,K,ne),oe.add(be)}else ln(pe,K,ne),oe.add(pe)}),v.pop(),m=null,oe},this.compileAsync=function(C,j,K=null){let oe=this.compile(C,j,K);return new Promise(ne=>{function pe(){oe.forEach(function(xe){W.get(xe).currentProgram.isReady()&&oe.delete(xe)}),oe.size!==0?setTimeout(pe,10):ne(C)}ie.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let si=null;function xi(){Ni.stop()}function Ui(){Ni.start()}let Ni=new eh;function tl(C,j,K,oe){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||A.intersectsSprite(C)){oe&&O.setFromMatrixPosition(C.matrixWorld).applyMatrix4(N);let pe=Me.update(C),xe=C.material;xe.visible&&g.push(C,pe,xe,K,O.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||A.intersectsObject(C))){let pe=Me.update(C),xe=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),O.copy(C.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),O.copy(pe.boundingSphere.center)),O.applyMatrix4(C.matrixWorld).applyMatrix4(N)),Array.isArray(xe)){let be=pe.groups;for(let Ie=0,Ue=be.length;Ie<Ue;Ie++){let Oe=be[Ie],Fe=xe[Oe.materialIndex];Fe&&Fe.visible&&g.push(C,pe,Fe,K,O.z,Oe)}}else xe.visible&&g.push(C,pe,xe,K,O.z,null)}}let ne=C.children;for(let pe=0,xe=ne.length;pe<xe;pe++)tl(ne[pe],j,K,oe)}function il(C,j,K,oe){let ne=C.opaque,pe=C.transmissive,xe=C.transparent;m.setupLightsView(K),w===!0&&_e.setGlobalState(_.clippingPlanes,K),pe.length>0&&function(be,Ie,Ue,Oe){if((Ue.isScene===!0?Ue.overrideMaterial:null)!==null)return;let Ye=ee.isWebGL2;$===null&&($=new fi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")?dr:qi,minFilter:ds,samples:Ye?4:0})),_.getDrawingBufferSize(q),Ye?$.setSize(q.x,q.y):$.setSize(ys(q.x),ys(q.y));let Ft=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(z),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear();let ai=_.toneMapping;_.toneMapping=Ci,Pr(be,Ue,Oe),X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($);let Oi=!1;for(let Ze=0,nt=Ie.length;Ze<nt;Ze++){let It=Ie[Ze],_t=It.object,ze=It.geometry,Be=It.material,Yn=It.group;if(Be.side===2&&_t.layers.test(Oe.layers)){let ta=Be.side;Be.side=Mt,Be.needsUpdate=!0,nl(_t,Ue,Oe,ze,Be,Yn),Be.side=ta,Be.needsUpdate=!0,Oi=!0}}Oi===!0&&(X.updateMultisampleRenderTarget($),X.updateRenderTargetMipmap($)),_.setRenderTarget(Ft),_.setClearColor(z,B),_.toneMapping=ai}(ne,pe,j,K),oe&&M.viewport(S.copy(oe)),ne.length>0&&Pr(ne,j,K),pe.length>0&&Pr(pe,j,K),xe.length>0&&Pr(xe,j,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Pr(C,j,K){let oe=j.isScene===!0?j.overrideMaterial:null;for(let ne=0,pe=C.length;ne<pe;ne++){let xe=C[ne],be=xe.object,Ie=xe.geometry,Ue=oe===null?xe.material:oe,Oe=xe.group;be.layers.test(K.layers)&&nl(be,j,K,Ie,Ue,Oe)}}function nl(C,j,K,oe,ne,pe){C.onBeforeRender(_,j,K,oe,ne,pe),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(_,j,K,oe,C,pe),ne.transparent===!0&&ne.side===2&&ne.forceSinglePass===!1?(ne.side=Mt,ne.needsUpdate=!0,_.renderBufferDirect(K,j,oe,ne,C,pe),ne.side=Kt,ne.needsUpdate=!0,_.renderBufferDirect(K,j,oe,ne,C,pe),ne.side=2):_.renderBufferDirect(K,j,oe,ne,C,pe),C.onAfterRender(_,j,K,oe,ne,pe)}function Lr(C,j,K){j.isScene!==!0&&(j=F);let oe=W.get(C),ne=m.state.lights,pe=m.state.shadowsArray,xe=ne.state.version,be=fe.getParameters(C,ne.state,pe,j,K),Ie=fe.getProgramCacheKey(be),Ue=oe.programs;oe.environment=C.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(C.isMeshStandardMaterial?ue:ae).get(C.envMap||oe.environment),Ue===void 0&&(C.addEventListener("dispose",Lt),Ue=new Map,oe.programs=Ue);let Oe=Ue.get(Ie);if(Oe!==void 0){if(oe.currentProgram===Oe&&oe.lightsStateVersion===xe)return sl(C,be),Oe}else be.uniforms=fe.getUniforms(C),C.onBuild(K,be,_),C.onBeforeCompile(be,_),Oe=fe.acquireProgram(be,Ie),Ue.set(Ie,Oe),oe.uniforms=be.uniforms;let Fe=oe.uniforms;return(C.isShaderMaterial||C.isRawShaderMaterial)&&C.clipping!==!0||(Fe.clippingPlanes=_e.uniform),sl(C,be),oe.needsLights=function(Ye){return Ye.isMeshLambertMaterial||Ye.isMeshToonMaterial||Ye.isMeshPhongMaterial||Ye.isMeshStandardMaterial||Ye.isShadowMaterial||Ye.isShaderMaterial&&Ye.lights===!0}(C),oe.lightsStateVersion=xe,oe.needsLights&&(Fe.ambientLightColor.value=ne.state.ambient,Fe.lightProbe.value=ne.state.probe,Fe.directionalLights.value=ne.state.directional,Fe.directionalLightShadows.value=ne.state.directionalShadow,Fe.spotLights.value=ne.state.spot,Fe.spotLightShadows.value=ne.state.spotShadow,Fe.rectAreaLights.value=ne.state.rectArea,Fe.ltc_1.value=ne.state.rectAreaLTC1,Fe.ltc_2.value=ne.state.rectAreaLTC2,Fe.pointLights.value=ne.state.point,Fe.pointLightShadows.value=ne.state.pointShadow,Fe.hemisphereLights.value=ne.state.hemi,Fe.directionalShadowMap.value=ne.state.directionalShadowMap,Fe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Fe.spotShadowMap.value=ne.state.spotShadowMap,Fe.spotLightMatrix.value=ne.state.spotLightMatrix,Fe.spotLightMap.value=ne.state.spotLightMap,Fe.pointShadowMap.value=ne.state.pointShadowMap,Fe.pointShadowMatrix.value=ne.state.pointShadowMatrix),oe.currentProgram=Oe,oe.uniformsList=null,Oe}function rl(C){if(C.uniformsList===null){let j=C.currentProgram.getUniforms();C.uniformsList=In.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function sl(C,j){let K=W.get(C);K.outputColorSpace=j.outputColorSpace,K.batching=j.batching,K.instancing=j.instancing,K.instancingColor=j.instancingColor,K.skinning=j.skinning,K.morphTargets=j.morphTargets,K.morphNormals=j.morphNormals,K.morphColors=j.morphColors,K.morphTargetsCount=j.morphTargetsCount,K.numClippingPlanes=j.numClippingPlanes,K.numIntersection=j.numClipIntersection,K.vertexAlphas=j.vertexAlphas,K.vertexTangents=j.vertexTangents,K.toneMapping=j.toneMapping}Ni.setAnimationLoop(function(C){si&&si(C)}),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){si=C,ct.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},ct.addEventListener("sessionstart",xi),ct.addEventListener("sessionend",Ui),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(E===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(j),j=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,j,T),m=et.get(C,v.length),m.init(),v.push(m),N.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),A.setFromProjectionMatrix(N),H=this.localClippingEnabled,w=_e.init(this.clippingPlanes,H),g=we.get(C,y.length),g.init(),y.push(g),tl(C,j,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,Q),this.info.render.frame++,w===!0&&_e.beginShadows();let K=m.state.shadowsArray;if(Ne.render(K,C,j),w===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),Le.render(g,C),m.setupLights(_._useLegacyLights),j.isArrayCamera){let oe=j.cameras;for(let ne=0,pe=oe.length;ne<pe;ne++){let xe=oe[ne];il(g,C,xe,xe.viewport)}}else il(g,C,j);T!==null&&(X.updateMultisampleRenderTarget(T),X.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(_,C,j),Te.resetDefaultState(),D=-1,I=null,v.pop(),m=v.length>0?v[v.length-1]:null,y.pop(),g=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,j,K){W.get(C.texture).__webglTexture=j,W.get(C.depthTexture).__webglTexture=K;let oe=W.get(C);oe.__hasExternalTextures=!0,oe.__hasExternalTextures&&(oe.__autoAllocateDepthBuffer=K===void 0,oe.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){let K=W.get(C);K.__webglFramebuffer=j,K.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,K=0){T=C,P=j,x=K;let oe=!0,ne=null,pe=!1,xe=!1;if(C){let be=W.get(C);be.__useDefaultFramebuffer!==void 0?(M.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1):be.__webglFramebuffer===void 0?X.setupRenderTarget(C):be.__hasExternalTextures&&X.rebindTextures(C,W.get(C.texture).__webglTexture,W.get(C.depthTexture).__webglTexture);let Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);let Ue=W.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(ne=Array.isArray(Ue[j])?Ue[j][K]:Ue[j],pe=!0):ne=ee.isWebGL2&&C.samples>0&&X.useMultisampledRTT(C)===!1?W.get(C).__webglMultisampledFramebuffer:Array.isArray(Ue)?Ue[K]:Ue,S.copy(C.viewport),L.copy(C.scissor),R=C.scissorTest}else S.copy(k).multiplyScalar(J).floor(),L.copy(Z).multiplyScalar(J).floor(),R=ce;if(M.bindFramebuffer(G.FRAMEBUFFER,ne)&&ee.drawBuffers&&oe&&M.drawBuffers(C,ne),M.viewport(S),M.scissor(L),M.setScissorTest(R),pe){let be=W.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,be.__webglTexture,K)}else if(xe){let be=W.get(C.texture),Ie=j||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,be.__webglTexture,K||0,Ie)}D=-1},this.readRenderTargetPixels=function(C,j,K,oe,ne,pe,xe){if(!C||!C.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=W.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){M.bindFramebuffer(G.FRAMEBUFFER,be);try{let Ie=C.texture,Ue=Ie.format,Oe=Ie.type;if(Ue!==Yt&&me.convert(Ue)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Fe=Oe===dr&&(ie.has("EXT_color_buffer_half_float")||ee.isWebGL2&&ie.has("EXT_color_buffer_float"));if(!(Oe===qi||me.convert(Oe)===G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)||Oe===Ai&&(ee.isWebGL2||ie.has("OES_texture_float")||ie.has("WEBGL_color_buffer_float"))||Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=C.width-oe&&K>=0&&K<=C.height-ne&&G.readPixels(j,K,oe,ne,me.convert(Ue),me.convert(Oe),pe)}finally{let Ie=T!==null?W.get(T).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(C,j,K=0){let oe=Math.pow(2,-K),ne=Math.floor(j.image.width*oe),pe=Math.floor(j.image.height*oe);X.setTexture2D(j,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,C.x,C.y,ne,pe),M.unbindTexture()},this.copyTextureToTexture=function(C,j,K,oe=0){let ne=j.image.width,pe=j.image.height,xe=me.convert(K.format),be=me.convert(K.type);X.setTexture2D(K,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment),j.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,oe,C.x,C.y,ne,pe,xe,be,j.image.data):j.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,oe,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,xe,j.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,oe,C.x,C.y,xe,be,j.image),oe===0&&K.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),M.unbindTexture()},this.copyTextureToTexture3D=function(C,j,K,oe,ne=0){if(_.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let pe=C.max.x-C.min.x+1,xe=C.max.y-C.min.y+1,be=C.max.z-C.min.z+1,Ie=me.convert(oe.format),Ue=me.convert(oe.type),Oe;if(oe.isData3DTexture)X.setTexture3D(oe,0),Oe=G.TEXTURE_3D;else{if(!oe.isDataArrayTexture&&!oe.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");X.setTexture2DArray(oe,0),Oe=G.TEXTURE_2D_ARRAY}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,oe.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,oe.unpackAlignment);let Fe=G.getParameter(G.UNPACK_ROW_LENGTH),Ye=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ft=G.getParameter(G.UNPACK_SKIP_PIXELS),ai=G.getParameter(G.UNPACK_SKIP_ROWS),Oi=G.getParameter(G.UNPACK_SKIP_IMAGES),Ze=K.isCompressedTexture?K.mipmaps[ne]:K.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Ze.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ze.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?G.texSubImage3D(Oe,ne,j.x,j.y,j.z,pe,xe,be,Ie,Ue,Ze.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Oe,ne,j.x,j.y,j.z,pe,xe,be,Ie,Ze.data)):G.texSubImage3D(Oe,ne,j.x,j.y,j.z,pe,xe,be,Ie,Ue,Ze),G.pixelStorei(G.UNPACK_ROW_LENGTH,Fe),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ft),G.pixelStorei(G.UNPACK_SKIP_ROWS,ai),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Oi),ne===0&&oe.generateMipmaps&&G.generateMipmap(Oe),M.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?X.setTextureCube(C,0):C.isData3DTexture?X.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?X.setTexture2DArray(C,0):X.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){P=0,x=0,T=null,M.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yo?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===Ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Je?Ji:Zc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?Je:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},mo=class extends gr{};mo.prototype.isWebGL1Renderer=!0;var Ps=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Za,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ft=new b,Ls=class r{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ge(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ge(t,this.array),i=Ge(i,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tn,tr=new b,wn=new b,An=new b,Rn=new te,ir=new te,ah=new Ce,ts=new b,nr=new b,is=new b,Ec=new te,Ua=new te,Tc=new te,$i=class extends ht{constructor(e=new Li){if(super(),this.isSprite=!0,this.type="Sprite",Tn===void 0){Tn=new qe;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fo(t,5);Tn.setIndex([0,1,2,0,2,3]),Tn.setAttribute("position",new Ls(i,3,0,!1)),Tn.setAttribute("uv",new Ls(i,2,3,!1))}this.geometry=Tn,this.material=e,this.center=new te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wn.setFromMatrixScale(this.matrixWorld),ah.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),An.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wn.multiplyScalar(-An.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let a=this.center;ns(ts.set(-.5,-.5,0),An,a,wn,n,s),ns(nr.set(.5,-.5,0),An,a,wn,n,s),ns(is.set(.5,.5,0),An,a,wn,n,s),Ec.set(0,0),Ua.set(1,0),Tc.set(1,1);let o=e.ray.intersectTriangle(ts,nr,is,!1,tr);if(o===null&&(ns(nr.set(-.5,.5,0),An,a,wn,n,s),Ua.set(0,1),o=e.ray.intersectTriangle(ts,is,nr,!1,tr),o===null))return;let l=e.ray.origin.distanceTo(tr);l<e.near||l>e.far||t.push({distance:l,point:tr.clone(),uv:Ri.getInterpolation(tr,ts,nr,is,Ec,Ua,Tc,new te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ns(r,e,t,i,n,s){Rn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(ir.x=s*Rn.x-n*Rn.y,ir.y=n*Rn.x+s*Rn.y):ir.copy(Rn),r.copy(e),r.x+=ir.x,r.y+=ir.y,r.applyMatrix4(ah)}var sp=new b,ap=new b;var op=new b,lp=new We,cp=new We,hp=new b,up=new Ce,dp=new b,pp=new ti,mp=new Ce,fp=new gi;var gp=new Ce,vp=new Ce;var _p=new Ce,yp=new Ce;var xp=new ei,Mp=new Ce,bp=new Se,Sp=new ti;var go=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];n.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}};var Ep=new Ce,Tp=new Ce,wp=new Ce,Ap=new Ce,Rp=new zn,Cp=new ei,Pp=new ti,Lp=new b,Ip=new go,Dp=new Se;var vr=class extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wc=new b,Ac=new b,Rc=new Ce,Na=new gi,rs=new ti,Is=class extends ht{constructor(e=new qe,t=new vr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)wc.fromBufferAttribute(t,n-1),Ac.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=wc.distanceTo(Ac);e.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(n),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;Rc.copy(n).invert(),Na.copy(e.ray).applyMatrix4(Rc);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,d=new b,u=new b,p=this.isLineSegments?2:1,f=i.index,g=i.attributes.position;if(f!==null)for(let m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count)-1;m<y;m+=p){let v=f.getX(m),_=f.getX(m+1);if(c.fromBufferAttribute(g,v),h.fromBufferAttribute(g,_),Na.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let E=e.ray.origin.distanceTo(u);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}else for(let m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count)-1;m<y;m+=p){if(c.fromBufferAttribute(g,m),h.fromBufferAttribute(g,m+1),Na.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let v=e.ray.origin.distanceTo(u);v<e.near||v>e.far||t.push({distance:v,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}},Up=new b,Np=new b;var Op=new Ce,Fp=new gi,zp=new ti,Bp=new b;var ni=class extends Nt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ot=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,l=0,c=s-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new te:new b);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new b,n=[],s=[],a=[],o=new b,l=new Ce;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new b)}s[0]=new b,a[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(rt(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(rt(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_r=class extends Ot{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new te,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vo=class extends _r{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jo(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}var ss=new b,Oa=new Jo,Fa=new Jo,za=new Jo,yr=class extends Ot{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new b){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=n[(c-1)%s]:(ss.subVectors(n[0],n[1]).add(n[0]),o=ss);let d=n[c%s],u=n[(c+1)%s];if(this.closed||c+2<s?l=n[(c+2)%s]:(ss.subVectors(n[s-1],n[s-2]).add(n[s-1]),l=ss),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),Oa.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,g,m),Fa.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,g,m),za.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(Oa.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),Fa.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),za.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return i.set(Oa.calc(h),Fa.calc(h),za.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new b().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function lr(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function cr(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}var Ds=class extends Ot{constructor(e=new te,t=new te,i=new te,n=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(cr(e,n.x,s.x,a.x,o.x),cr(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends Ot{constructor(e=new b,t=new b,i=new b,n=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new b){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(cr(e,n.x,s.x,a.x,o.x),cr(e,n.y,s.y,a.y,o.y),cr(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Us=class extends Ot{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Ot{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends Ot{constructor(e=new te,t=new te,i=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new te){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(lr(e,n.x,s.x,a.x),lr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Ot{constructor(e=new b,t=new b,i=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(lr(e,n.x,s.x,a.x),lr(e,n.y,s.y,a.y),lr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fs=class extends Ot{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Cc(o,l.x,c.x,h.x,d.x),Cc(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new te().fromArray(n))}return this}},zs=Object.freeze({__proto__:null,ArcCurve:vo,CatmullRomCurve3:yr,CubicBezierCurve:Ds,CubicBezierCurve3:_o,EllipseCurve:_r,LineCurve:Us,LineCurve3:yo,QuadraticBezierCurve:Ns,QuadraticBezierCurve3:Os,SplineCurve:Fs}),xo=class extends Ot{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zs[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new zs[n.type]().fromJSON(n))}return this}},Ki=class extends xo{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Us(this.currentPoint.clone(),new te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new Ns(this.currentPoint.clone(),new te(e,t),new te(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new Ds(this.currentPoint.clone(),new te(e,t),new te(i,n),new te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Fs(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){let c=new _r(e,t,i,n,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bs=class r extends qe{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=rt(n,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new b,u=new te,p=new b,f=new b,g=new b,m=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let _=i+v*h*n,E=Math.sin(_),P=Math.cos(_);for(let x=0;x<=e.length-1;x++){d.x=e[x].x*E,d.y=e[x].y,d.z=e[x].x*P,a.push(d.x,d.y,d.z),u.x=v/t,u.y=x/(e.length-1),o.push(u.x,u.y);let T=l[3*x+0]*E,D=l[3*x+1],I=l[3*x+0]*P;c.push(T,D,I)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let E=_+v*e.length,P=E,x=E+e.length,T=E+e.length+1,D=E+1;s.push(P,x,D),s.push(T,D,x)}this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Mo=class r extends Bs{constructor(e=1,t=1,i=4,n=8){let s=new Ki;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},bo=class r extends qe{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new b,h=new te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Qi=class r extends qe{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,g=[],m=i/2,y=0;function v(_){let E=f,P=new te,x=new b,T=0,D=_===!0?e:t,I=_===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*I,0),u.push(0,I,0),p.push(.5,.5),f++;let S=f;for(let L=0;L<=n;L++){let R=L/n*l+o,z=Math.cos(R),B=Math.sin(R);x.x=D*B,x.y=m*I,x.z=D*z,d.push(x.x,x.y,x.z),u.push(0,I,0),P.x=.5*z+.5,P.y=.5*B*I+.5,p.push(P.x,P.y),f++}for(let L=0;L<n;L++){let R=E+L,z=S+L;_===!0?h.push(z,z+1,R):h.push(z+1,z,R),T+=3}c.addGroup(y,T,_===!0?1:2),y+=T}(function(){let _=new b,E=new b,P=0,x=(t-e)/i;for(let T=0;T<=s;T++){let D=[],I=T/s,S=I*(t-e)+e;for(let L=0;L<=n;L++){let R=L/n,z=R*l+o,B=Math.sin(z),re=Math.cos(z);E.x=S*B,E.y=-I*i+m,E.z=S*re,d.push(E.x,E.y,E.z),_.set(B,x,re).normalize(),u.push(_.x,_.y,_.z),p.push(R,1-I),D.push(f++)}g.push(D)}for(let T=0;T<n;T++)for(let D=0;D<s;D++){let I=g[D][T],S=g[D+1][T],L=g[D+1][T+1],R=g[D][T+1];h.push(I,S,R),h.push(S,L,R),P+=6}c.addGroup(y,P,0),y+=P})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},en=class r extends Qi{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tn=class r extends qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,p,f,g){let m=g+1,y=[];for(let v=0;v<=m;v++){y[v]=[];let _=u.clone().lerp(f,v/m),E=p.clone().lerp(f,v/m),P=m-v;for(let x=0;x<=P;x++)y[v][x]=x===0&&v===m?_:_.clone().lerp(E,x/P)}for(let v=0;v<m;v++)for(let _=0;_<2*(m-v)-1;_++){let E=Math.floor(_/2);_%2==0?(l(y[v][E+1]),l(y[v+1][E]),l(y[v][E])):(l(y[v][E+1]),l(y[v+1][E+1]),l(y[v+1][E]))}}function l(u){s.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,g){g<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new b,f=new b,g=new b;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,u)})(n),function(u){let p=new b;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(i),function(){let u=new b;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let g=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new b,g=new b,m=new b,y=new b,v=new te,_=new te,E=new te;for(let P=0,x=0;P<s.length;P+=9,x+=6){f.set(s[P+0],s[P+1],s[P+2]),g.set(s[P+3],s[P+4],s[P+5]),m.set(s[P+6],s[P+7],s[P+8]),v.set(a[x+0],a[x+1]),_.set(a[x+2],a[x+3]),E.set(a[x+4],a[x+5]),y.copy(f).add(g).add(m).divideScalar(3);let T=d(y);h(v,x+0,f,T),h(_,x+2,g,T),h(E,x+4,m,T)}})(),function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],y=a[f+4],v=Math.max(g,m,y),_=Math.min(g,m,y);v>.9&&_<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(s.slice(),3)),this.setAttribute("uv",new Ee(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},So=class r extends tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},as=new b,os=new b,Ba=new b,ls=new Ri,Eo=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(Pn*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:y}=ls;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),ls.getNormal(Ba),d[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let _=(v+1)%3,E=d[v],P=d[_],x=ls[h[v]],T=ls[h[_]],D=`${E}_${P}`,I=`${P}_${E}`;I in u&&u[I]?(Ba.dot(u[I].normal)<=s&&(p.push(x.x,x.y,x.z),p.push(T.x,T.y,T.z)),u[I]=null):D in u||(u[D]={index0:c[v],index1:c[_],normal:Ba.clone()})}}for(let f in u)if(u[f]){let{index0:g,index1:m}=u[f];as.fromBufferAttribute(o,g),os.fromBufferAttribute(o,m),p.push(as.x,as.y,as.z),p.push(os.x,os.y,os.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},nn=class extends Ki{constructor(e){super(e),this.uuid=$t(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Ki().fromJSON(n))}return this}},Nd=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=Pc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,p;if(i&&(s=function(f,g,m,y){let v=[],_,E,P,x,T;for(_=0,E=g.length;_<E;_++)P=g[_]*y,x=_<E-1?g[_+1]*y:f.length,T=Pc(f,P,x,y,!1),T===T.next&&(T.steiner=!0),v.push(Vd(T));for(v.sort(Hd),_=0;_<v.length;_++)m=kd(v[_],m);return m}(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<n;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return xr(s,a,t,o,l,p,0),a};function Pc(r,e,t,i,n){let s,a;if(n===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Lc(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Lc(s,r[s],r[s+1],a);return a&&Js(a,a.next)&&(br(a),a=a.next),a}function rn(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!Js(i,i.next)&&$e(i.prev,i,i.next)!==0)i=i.next;else{if(br(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function xr(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=To(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(g){let m,y,v,_,E,P,x,T,D=1;do{for(y=g,g=null,E=null,P=0;y;){for(P++,v=y,x=0,m=0;m<D&&(x++,v=v.nextZ,v);m++);for(T=D;x>0||T>0&&v;)x!==0&&(T===0||!v||y.z<=v.z)?(_=y,y=y.nextZ,x--):(_=v,v=v.nextZ,T--),E?E.nextZ=_:g=_,_.prevZ=E,E=_;y=v}E.nextZ=null,D*=2}while(P>1)}(f)}(r,i,n,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?Fd(r,i,n,s):Od(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),br(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?xr(r=zd(rn(r),e,t),e,t,i,n,s,2):a===2&&Bd(r,e,t,i,n,s):xr(rn(r),e,t,i,n,s,1);break}}function Od(r){let e=r.prev,t=r,i=r.next;if($e(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<s?n<a?n:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=n>s?n>a?n:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&Cn(n,o,s,l,a,c,f.x,f.y)&&$e(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Fd(r,e,t,i){let n=r.prev,s=r,a=r.next;if($e(n,s,a)>=0)return!1;let o=n.x,l=s.x,c=a.x,h=n.y,d=s.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,g=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,y=To(p,f,e,t,i),v=To(g,m,e,t,i),_=r.prevZ,E=r.nextZ;for(;_&&_.z>=y&&E&&E.z<=v;){if(_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==n&&_!==a&&Cn(o,h,l,d,c,u,_.x,_.y)&&$e(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=g&&E.y>=f&&E.y<=m&&E!==n&&E!==a&&Cn(o,h,l,d,c,u,E.x,E.y)&&$e(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=g&&_.y>=f&&_.y<=m&&_!==n&&_!==a&&Cn(o,h,l,d,c,u,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=g&&E.y>=f&&E.y<=m&&E!==n&&E!==a&&Cn(o,h,l,d,c,u,E.x,E.y)&&$e(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function zd(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!Js(n,s)&&oh(n,i,i.next,s)&&Mr(n,s)&&Mr(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),br(i),br(i.next),i=r=s),i=i.next}while(i!==r);return rn(i)}function Bd(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wd(a,o)){let l=lh(a,o);return a=rn(a,a.next),l=rn(l,l.next),xr(a,e,t,i,n,s,0),void xr(l,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function Hd(r,e){return r.x-e.x}function kd(r,e){let t=function(n,s){let a,o=s,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&Cn(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Mr(o,n)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Gd(a,o)))&&(a=o,g=f)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let i=lh(t,r);return rn(i,i.next),rn(t,t.next)}function Gd(r,e){return $e(r.prev,r,e.prev)<0&&$e(e.next,r,r.next)<0}function To(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Vd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Cn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Wd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&oh(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Mr(r,e)&&Mr(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&($e(r.prev,r,e.prev)||$e(r,e.prev,e))||Js(r,e)&&$e(r.prev,r,r.next)>0&&$e(e.prev,e,e.next)>0)}function $e(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Js(r,e){return r.x===e.x&&r.y===e.y}function oh(r,e,t,i){let n=hs($e(r,e,t)),s=hs($e(r,e,i)),a=hs($e(t,i,r)),o=hs($e(t,i,e));return n!==s&&a!==o||!(n!==0||!cs(r,t,e))||!(s!==0||!cs(r,i,e))||!(a!==0||!cs(t,r,i))||!(o!==0||!cs(t,e,i))}function cs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function hs(r){return r>0?1:r<0?-1:0}function Mr(r,e){return $e(r.prev,r,r.next)<0?$e(r,e,r.next)>=0&&$e(r,r.prev,e)>=0:$e(r,e,r.prev)<0||$e(r,r.next,e)<0}function lh(r,e){let t=new wo(r.i,r.x,r.y),i=new wo(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Lc(r,e,t,i){let n=new wo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function br(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Pi=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];Ic(e),Dc(i,e);let a=e.length;t.forEach(Ic);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Dc(i,t[l]);let o=Nd(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ic(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Dc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ao=class r extends qe{constructor(e=new nn([new te(.5,.5),new te(-.5,.5),new te(-.5,-.5),new te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Xd,_,E,P,x,T,D=!1;y&&(_=y.getSpacedPoints(h),D=!0,u=!1,E=y.computeFrenetFrames(h,!1),P=new b,x=new b,T=new b),u||(m=0,p=0,f=0,g=0);let I=o.extractPoints(c),S=I.shape,L=I.holes;if(!Pi.isClockWise(S)){S=S.reverse();for(let O=0,F=L.length;O<F;O++){let V=L[O];Pi.isClockWise(V)&&(L[O]=V.reverse())}}let R=Pi.triangulateShape(S,L),z=S;for(let O=0,F=L.length;O<F;O++){let V=L[O];S=S.concat(V)}function B(O,F,V){return F||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(F,V)}let re=S.length,le=R.length;function J(O,F,V){let ie,ee,M,se=O.x-F.x,W=O.y-F.y,X=V.x-O.x,ae=V.y-O.y,ue=se*se+W*W,de=se*ae-W*X;if(Math.abs(de)>Number.EPSILON){let ge=Math.sqrt(ue),Me=Math.sqrt(X*X+ae*ae),fe=F.x-W/ge,ve=F.y+se/ge,we=((V.x-ae/Me-fe)*ae-(V.y+X/Me-ve)*X)/(se*ae-W*X);ie=fe+se*we-O.x,ee=ve+W*we-O.y;let et=ie*ie+ee*ee;if(et<=2)return new te(ie,ee);M=Math.sqrt(et/2)}else{let ge=!1;se>Number.EPSILON?X>Number.EPSILON&&(ge=!0):se<-Number.EPSILON?X<-Number.EPSILON&&(ge=!0):Math.sign(W)===Math.sign(ae)&&(ge=!0),ge?(ie=-W,ee=se,M=Math.sqrt(ue)):(ie=se,ee=W,M=Math.sqrt(ue/2))}return new te(ie/M,ee/M)}let Y=[];for(let O=0,F=z.length,V=F-1,ie=O+1;O<F;O++,V++,ie++)V===F&&(V=0),ie===F&&(ie=0),Y[O]=J(z[O],z[V],z[ie]);let Q=[],k,Z=Y.concat();for(let O=0,F=L.length;O<F;O++){let V=L[O];k=[];for(let ie=0,ee=V.length,M=ee-1,se=ie+1;ie<ee;ie++,M++,se++)M===ee&&(M=0),se===ee&&(se=0),k[ie]=J(V[ie],V[M],V[se]);Q.push(k),Z=Z.concat(k)}for(let O=0;O<m;O++){let F=O/m,V=p*Math.cos(F*Math.PI/2),ie=f*Math.sin(F*Math.PI/2)+g;for(let ee=0,M=z.length;ee<M;ee++){let se=B(z[ee],Y[ee],ie);w(se.x,se.y,-V)}for(let ee=0,M=L.length;ee<M;ee++){let se=L[ee];k=Q[ee];for(let W=0,X=se.length;W<X;W++){let ae=B(se[W],k[W],ie);w(ae.x,ae.y,-V)}}}let ce=f+g;for(let O=0;O<re;O++){let F=u?B(S[O],Z[O],ce):S[O];D?(x.copy(E.normals[0]).multiplyScalar(F.x),P.copy(E.binormals[0]).multiplyScalar(F.y),T.copy(_[0]).add(x).add(P),w(T.x,T.y,T.z)):w(F.x,F.y,0)}for(let O=1;O<=h;O++)for(let F=0;F<re;F++){let V=u?B(S[F],Z[F],ce):S[F];D?(x.copy(E.normals[O]).multiplyScalar(V.x),P.copy(E.binormals[O]).multiplyScalar(V.y),T.copy(_[O]).add(x).add(P),w(T.x,T.y,T.z)):w(V.x,V.y,d/h*O)}for(let O=m-1;O>=0;O--){let F=O/m,V=p*Math.cos(F*Math.PI/2),ie=f*Math.sin(F*Math.PI/2)+g;for(let ee=0,M=z.length;ee<M;ee++){let se=B(z[ee],Y[ee],ie);w(se.x,se.y,d+V)}for(let ee=0,M=L.length;ee<M;ee++){let se=L[ee];k=Q[ee];for(let W=0,X=se.length;W<X;W++){let ae=B(se[W],k[W],ie);D?w(ae.x,ae.y+_[h-1].y,_[h-1].x+V):w(ae.x,ae.y,d+V)}}}function A(O,F){let V=O.length;for(;--V>=0;){let ie=V,ee=V-1;ee<0&&(ee=O.length-1);for(let M=0,se=h+2*m;M<se;M++){let W=re*M,X=re*(M+1);$(F+ie+W,F+ee+W,F+ee+X,F+ie+X)}}}function w(O,F,V){l.push(O),l.push(F),l.push(V)}function H(O,F,V){N(O),N(F),N(V);let ie=n.length/3,ee=v.generateTopUV(i,n,ie-3,ie-2,ie-1);q(ee[0]),q(ee[1]),q(ee[2])}function $(O,F,V,ie){N(O),N(F),N(ie),N(F),N(V),N(ie);let ee=n.length/3,M=v.generateSideWallUV(i,n,ee-6,ee-3,ee-2,ee-1);q(M[0]),q(M[1]),q(M[3]),q(M[1]),q(M[2]),q(M[3])}function N(O){n.push(l[3*O+0]),n.push(l[3*O+1]),n.push(l[3*O+2])}function q(O){s.push(O.x),s.push(O.y)}(function(){let O=n.length/3;if(u){let F=0,V=re*F;for(let ie=0;ie<le;ie++){let ee=R[ie];H(ee[2]+V,ee[1]+V,ee[0]+V)}F=h+2*m,V=re*F;for(let ie=0;ie<le;ie++){let ee=R[ie];H(ee[0]+V,ee[1]+V,ee[2]+V)}}else{for(let F=0;F<le;F++){let V=R[F];H(V[2],V[1],V[0])}for(let F=0;F<le;F++){let V=R[F];H(V[0]+re*h,V[1]+re*h,V[2]+re*h)}}i.addGroup(O,n.length/3-O,0)})(),function(){let O=n.length/3,F=0;A(z,F),F+=z.length;for(let V=0,ie=L.length;V<ie;V++){let ee=L[V];A(ee,F),F+=ee.length}i.addGroup(O,n.length/3-O,1)}()}this.setAttribute("position",new Ee(n,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new zs[n.type]().fromJSON(n)),new r(i,e.options)}},Xd={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new te(s,a),new te(o,l),new te(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],f=e[3*n+2],g=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new te(a,1-l),new te(c,1-d),new te(u,1-f),new te(g,1-y)]:[new te(o,1-l),new te(h,1-d),new te(p,1-f),new te(m,1-y)]}},Ro=class r extends tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Co=class r extends tn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Sr=class r extends qe{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new b,f=new te;for(let g=0;g<=n;g++){for(let m=0;m<=i;m++){let y=s+m/i*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let g=0;g<n;g++){let m=g*(i+1);for(let y=0;y<i;y++){let v=y+m,_=v,E=v+i+1,P=v+i+2,x=v+1;o.push(_,E,x),o.push(E,P,x)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Hn=class r extends qe{constructor(e=new nn([new te(0,.5),new te(-.5,-.5),new te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=n.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;Pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let v=f[m];Pi.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=Pi.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let v=f[m];p=p.concat(v)}for(let m=0,y=p.length;m<y;m++){let v=p[m];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,y=g.length;m<y;m++){let v=g[m],_=v[0]+d,E=v[1]+d,P=v[2]+d;i.push(_,E,P),l+=3}}this.setIndex(i),this.setAttribute("position",new Ee(n,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},kn=class r extends qe{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new b,u=new b,p=[],f=[],g=[],m=[];for(let y=0;y<=i;y++){let v=[],_=y/i,E=0;y===0&&a===0?E=.5/t:y===i&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){let x=P/t;d.x=-e*Math.cos(n+x*s)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(n+x*s)*Math.sin(a+_*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(x+E,1-_),v.push(c++)}h.push(v)}for(let y=0;y<i;y++)for(let v=0;v<t;v++){let _=h[y][v+1],E=h[y][v],P=h[y+1][v],x=h[y+1][v+1];(y!==0||a>0)&&p.push(_,E,x),(y!==i-1||l<Math.PI)&&p.push(E,P,x)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Po=class r extends tn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Er=class r extends qe{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new b,d=new b,u=new b;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let g=f/n*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(g),d.y=(e+t*Math.cos(m))*Math.sin(g),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let g=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,y=(n+1)*(p-1)+f,v=(n+1)*p+f;a.push(g,m,v),a.push(m,y,v)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Lo=class r extends qe{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],d=new b,u=new b,p=new b,f=new b,g=new b,m=new b,y=new b;for(let _=0;_<=i;++_){let E=_/i*s*Math.PI*2;v(E,s,a,e,p),v(E+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let P=0;P<=n;++P){let x=P/n*Math.PI*2,T=-t*Math.cos(x),D=t*Math.sin(x);d.x=p.x+(T*y.x+D*g.x),d.y=p.y+(T*y.y+D*g.y),d.z=p.z+(T*y.z+D*g.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(_/i),h.push(P/n)}}for(let _=1;_<=i;_++)for(let E=1;E<=n;E++){let P=(n+1)*(_-1)+(E-1),x=(n+1)*_+(E-1),T=(n+1)*_+E,D=(n+1)*(_-1)+E;o.push(P,x,D),o.push(x,T,D)}function v(_,E,P,x,T){let D=Math.cos(_),I=Math.sin(_),S=P/E*_,L=Math.cos(S);T.x=x*(2+L)*.5*D,T.y=x*(2+L)*I*.5,T.z=x*Math.sin(S)*.5}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Tr=class r extends qe{constructor(e=new Os(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new b,l=new b,c=new te,h=new b,d=[],u=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=a.normals[m],v=a.binormals[m];for(let _=0;_<=n;_++){let E=_/n*Math.PI*2,P=Math.sin(E),x=-Math.cos(E);l.x=x*y.x+P*v.x,l.y=x*y.y+P*v.y,l.z=x*y.z+P*v.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let y=0;y<=n;y++)c.x=m/t,c.y=y/n,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let y=1;y<=n;y++){let v=(n+1)*(m-1)+(y-1),_=(n+1)*m+(y-1),E=(n+1)*m+y,P=(n+1)*(m-1)+y;f.push(v,_,P),f.push(_,E,P)}}()})(),this.setIndex(f),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new zs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Io=class extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new b,s=new b;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),Uc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),Uc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Uc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Hp=Object.freeze({__proto__:null,BoxGeometry:Ke,CapsuleGeometry:Mo,CircleGeometry:bo,ConeGeometry:en,CylinderGeometry:Qi,DodecahedronGeometry:So,EdgesGeometry:Eo,ExtrudeGeometry:Ao,IcosahedronGeometry:Ro,LatheGeometry:Bs,OctahedronGeometry:Co,PlaneGeometry:ii,PolyhedronGeometry:tn,RingGeometry:Sr,ShapeGeometry:Hn,SphereGeometry:kn,TetrahedronGeometry:Po,TorusGeometry:Er,TorusKnotGeometry:Lo,TubeGeometry:Tr,WireframeGeometry:Io});var sn=class extends vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function us(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function jd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Gn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Do=class extends Gn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fl:s=e,o=2*t-i;break;case zl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fl:a=e,l=2*i-t;break;case zl:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),g=f*f,m=g*f,y=-u*m+2*u*g-u*f,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*f+1,_=(-1-p)*m+(1.5+p)*g+.5*f,E=p*m-p*g;for(let P=0;P!==o;++P)s[P]=y*a[h+P]+v*a[c+P]+_*a[l+P]+E*a[d+P];return s}},Uo=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},No=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Wt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=us(t,this.TimeBufferType),this.values=us(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:us(e.times,Array),values:us(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Do(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case ua:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&jd(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ua,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Wt.prototype.TimeBufferType=Float32Array,Wt.prototype.ValueBufferType=Float32Array,Wt.prototype.DefaultInterpolation=ms;var Xi=class extends Wt{};Xi.prototype.ValueTypeName="bool",Xi.prototype.ValueBufferType=Array,Xi.prototype.DefaultInterpolation=ps,Xi.prototype.InterpolantFactoryMethodLinear=void 0,Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends Wt{};Oo.prototype.ValueTypeName="color";var Fo=class extends Wt{};Fo.prototype.ValueTypeName="number";var zo=class extends Gn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)At.slerpFlat(s,0,a,c-o,a,c,l);return s}},hr=class extends Wt{InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}};hr.prototype.ValueTypeName="quaternion",hr.prototype.DefaultInterpolation=ms,hr.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Wt{};ji.prototype.ValueTypeName="string",ji.prototype.ValueBufferType=Array,ji.prototype.DefaultInterpolation=ps,ji.prototype.InterpolantFactoryMethodLinear=void 0,ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Wt{};Bo.prototype.ValueTypeName="vector";var Ho=class{constructor(e,t,i){let n=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},qd=new Ho,ko=class{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Hs=class extends wr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ha=new Ce,Nc=new b,Oc=new b,ks=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zn,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fc=new Ce,rr=new b,ka=new b,Go=class extends ks{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),rr.setFromMatrixPosition(e.matrixWorld),i.position.copy(rr),ka.copy(i.position),ka.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ka),i.updateMatrixWorld(),n.makeTranslation(-rr.x,-rr.y,-rr.z),Fc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc)}},Gs=class extends wr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Go}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vo=class extends ks{constructor(){super(new Bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var kp=new Ce,Gp=new Ce,Vp=new Ce;var Ws=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function zc(){return(typeof performance>"u"?Date:performance).now()}var Wp=new b,Xp=new At,jp=new b,qp=new b;var Yp=new b,Zp=new At,Jp=new b,$p=new b;var $o="\\[\\]\\.:\\/",Yd=new RegExp("["+$o+"]","g"),Ga="[^"+$o+"]",Zd="[^"+$o.replace("\\.","")+"]",Jd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Ga)+/(WCOD+)?/.source.replace("WCOD",Zd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga)+"$"),$d=["material","materials","bones","map"],je=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yd,"")}static parseTrackName(e){let t=Jd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);$d.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=class{constructor(r,e,t){let i=t||je.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray],je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kp=new Float32Array(1);var Xs=class{constructor(e,t,i=0,n=1/0){this.ray=new gi(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Wo(e,this,i,t),i.sort(Bc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Wo(e[n],this,i,t);return i.sort(Bc),i}};function Bc(r,e){return r.distance-e.distance}function Wo(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){let n=r.children;for(let s=0,a=n.length;s<a;s++)Wo(n[s],e,t,!0)}}var Ar=class{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qp=new te;var em=new b,tm=new b;var im=new b;var nm=new b,rm=new Ce,sm=new Ce;var am=new b,om=new Ae,lm=new Ae;var cm=new b,hm=new b,um=new b;var dm=new b,pm=new fr;var mm=new ei;var fm=new b;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);var ch={type:"change"},Ko={type:"start"},hh={type:"end"},$s=new gi,uh=new xt,Qd=Math.cos(70*Jc.DEG2RAD),Ks=class extends Qt{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new b,this.cursor=new b,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rt.ROTATE,MIDDLE:Rt.DOLLY,RIGHT:Rt.PAN},this.touches={ONE:an.ROTATE,TWO:an.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ve),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ve),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(ch),i.update(),s=n.NONE},this.update=function(){let U=new b,me=new At().setFromUnitVectors(e.up,new b(0,1,0)),Te=me.clone().invert(),He=new b,G=new At,St=new b,ot=2*Math.PI;return function(Cr=null){let qn=i.object.position;U.copy(qn).sub(i.target),U.applyQuaternion(me),o.setFromVector3(U),i.autoRotate&&s===n.NONE&&L(I(Cr)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Pt=i.minAzimuthAngle,Lt=i.maxAzimuthAngle;isFinite(Pt)&&isFinite(Lt)&&(Pt<-Math.PI?Pt+=ot:Pt>Math.PI&&(Pt-=ot),Lt<-Math.PI?Lt+=ot:Lt>Math.PI&&(Lt-=ot),Pt<=Lt?o.theta=Math.max(Pt,Math.min(Lt,o.theta)):o.theta=o.theta>(Pt+Lt)/2?Math.max(Pt,o.theta):Math.min(Lt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&x||i.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*c),U.setFromSpherical(o),U.applyQuaternion(Te),qn.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let ln=!1;if(i.zoomToCursor&&x){let si=null;if(i.object.isPerspectiveCamera){let xi=U.length();si=Q(xi*c);let Ui=xi-si;i.object.position.addScaledVector(E,Ui),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let xi=new b(P.x,P.y,0);xi.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ln=!0;let Ui=new b(P.x,P.y,0);Ui.unproject(i.object),i.object.position.sub(Ui).add(xi),i.object.updateMatrixWorld(),si=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;si!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(si).add(i.object.position):($s.origin.copy(i.object.position),$s.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot($s.direction))<Qd?e.lookAt(i.target):(uh.setFromNormalAndCoplanarPoint(i.object.up,i.target),$s.intersectPlane(uh,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),ln=!0);return c=1,x=!1,ln||He.distanceToSquared(i.object.position)>a||8*(1-G.dot(i.object.quaternion))>a||St.distanceToSquared(i.target)>0?(i.dispatchEvent(ch),He.copy(i.object.position),G.copy(i.object.quaternion),St.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",_e),i.domElement.removeEventListener("pointerdown",ae),i.domElement.removeEventListener("pointercancel",de),i.domElement.removeEventListener("wheel",fe),i.domElement.removeEventListener("pointermove",ue),i.domElement.removeEventListener("pointerup",de),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ve),i._domElementKeyEvents=null)};let i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=n.NONE,a=1e-6,o=new Ar,l=new Ar,c=1,h=new b,d=new te,u=new te,p=new te,f=new te,g=new te,m=new te,y=new te,v=new te,_=new te,E=new b,P=new te,x=!1,T=[],D={};function I(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function S(U){let me=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*me)}function L(U){l.theta-=U}function R(U){l.phi-=U}let z=function(){let U=new b;return function(Te,He){U.setFromMatrixColumn(He,0),U.multiplyScalar(-Te),h.add(U)}}(),B=function(){let U=new b;return function(Te,He){i.screenSpacePanning===!0?U.setFromMatrixColumn(He,1):(U.setFromMatrixColumn(He,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(Te),h.add(U)}}(),re=function(){let U=new b;return function(Te,He){let G=i.domElement;if(i.object.isPerspectiveCamera){let St=i.object.position;U.copy(St).sub(i.target);let ot=U.length();ot*=Math.tan(i.object.fov/2*Math.PI/180),z(2*Te*ot/G.clientHeight,i.object.matrix),B(2*He*ot/G.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(z(Te*(i.object.right-i.object.left)/i.object.zoom/G.clientWidth,i.object.matrix),B(He*(i.object.top-i.object.bottom)/i.object.zoom/G.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function le(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(U,me){if(!i.zoomToCursor)return;x=!0;let Te=i.domElement.getBoundingClientRect(),He=U-Te.left,G=me-Te.top,St=Te.width,ot=Te.height;P.x=He/St*2-1,P.y=-(G/ot)*2+1,E.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function Q(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function k(U){d.set(U.clientX,U.clientY)}function Z(U){Y(U.clientX,U.clientX),y.set(U.clientX,U.clientY)}function ce(U){f.set(U.clientX,U.clientY)}function A(U){u.set(U.clientX,U.clientY),p.subVectors(u,d).multiplyScalar(i.rotateSpeed);let me=i.domElement;L(2*Math.PI*p.x/me.clientHeight),R(2*Math.PI*p.y/me.clientHeight),d.copy(u),i.update()}function w(U){v.set(U.clientX,U.clientY),_.subVectors(v,y),_.y>0?le(S(_.y)):_.y<0&&J(S(_.y)),y.copy(v),i.update()}function H(U){g.set(U.clientX,U.clientY),m.subVectors(g,f).multiplyScalar(i.panSpeed),re(m.x,m.y),f.copy(g),i.update()}function $(U){Y(U.clientX,U.clientY),U.deltaY<0?J(S(U.deltaY)):U.deltaY>0&&le(S(U.deltaY)),i.update()}function N(U){let me=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):re(0,i.keyPanSpeed),me=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):re(0,-i.keyPanSpeed),me=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):re(i.keyPanSpeed,0),me=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):re(-i.keyPanSpeed,0),me=!0;break}me&&(U.preventDefault(),i.update())}function q(U){if(T.length===1)d.set(U.pageX,U.pageY);else{let me=bt(U),Te=.5*(U.pageX+me.x),He=.5*(U.pageY+me.y);d.set(Te,He)}}function O(U){if(T.length===1)f.set(U.pageX,U.pageY);else{let me=bt(U),Te=.5*(U.pageX+me.x),He=.5*(U.pageY+me.y);f.set(Te,He)}}function F(U){let me=bt(U),Te=U.pageX-me.x,He=U.pageY-me.y,G=Math.sqrt(Te*Te+He*He);y.set(0,G)}function V(U){i.enableZoom&&F(U),i.enablePan&&O(U)}function ie(U){i.enableZoom&&F(U),i.enableRotate&&q(U)}function ee(U){if(T.length==1)u.set(U.pageX,U.pageY);else{let Te=bt(U),He=.5*(U.pageX+Te.x),G=.5*(U.pageY+Te.y);u.set(He,G)}p.subVectors(u,d).multiplyScalar(i.rotateSpeed);let me=i.domElement;L(2*Math.PI*p.x/me.clientHeight),R(2*Math.PI*p.y/me.clientHeight),d.copy(u)}function M(U){if(T.length===1)g.set(U.pageX,U.pageY);else{let me=bt(U),Te=.5*(U.pageX+me.x),He=.5*(U.pageY+me.y);g.set(Te,He)}m.subVectors(g,f).multiplyScalar(i.panSpeed),re(m.x,m.y),f.copy(g)}function se(U){let me=bt(U),Te=U.pageX-me.x,He=U.pageY-me.y,G=Math.sqrt(Te*Te+He*He);v.set(0,G),_.set(0,Math.pow(v.y/y.y,i.zoomSpeed)),le(_.y),y.copy(v);let St=(U.pageX+me.x)*.5,ot=(U.pageY+me.y)*.5;Y(St,ot)}function W(U){i.enableZoom&&se(U),i.enablePan&&M(U)}function X(U){i.enableZoom&&se(U),i.enableRotate&&ee(U)}function ae(U){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",ue),i.domElement.addEventListener("pointerup",de)),Ne(U),U.pointerType==="touch"?we(U):ge(U))}function ue(U){i.enabled!==!1&&(U.pointerType==="touch"?et(U):Me(U))}function de(U){Le(U),T.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",ue),i.domElement.removeEventListener("pointerup",de)),i.dispatchEvent(hh),s=n.NONE}function ge(U){let me;switch(U.button){case 0:me=i.mouseButtons.LEFT;break;case 1:me=i.mouseButtons.MIDDLE;break;case 2:me=i.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Rt.DOLLY:if(i.enableZoom===!1)return;Z(U),s=n.DOLLY;break;case Rt.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;ce(U),s=n.PAN}else{if(i.enableRotate===!1)return;k(U),s=n.ROTATE}break;case Rt.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;k(U),s=n.ROTATE}else{if(i.enablePan===!1)return;ce(U),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Ko)}function Me(U){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;A(U);break;case n.DOLLY:if(i.enableZoom===!1)return;w(U);break;case n.PAN:if(i.enablePan===!1)return;H(U);break}}function fe(U){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(U.preventDefault(),i.dispatchEvent(Ko),$(U),i.dispatchEvent(hh))}function ve(U){i.enabled===!1||i.enablePan===!1||N(U)}function we(U){switch(Di(U),T.length){case 1:switch(i.touches.ONE){case an.ROTATE:if(i.enableRotate===!1)return;q(U),s=n.TOUCH_ROTATE;break;case an.PAN:if(i.enablePan===!1)return;O(U),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case an.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;V(U),s=n.TOUCH_DOLLY_PAN;break;case an.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ie(U),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Ko)}function et(U){switch(Di(U),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;ee(U),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;M(U),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;W(U),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;X(U),i.update();break;default:s=n.NONE}}function _e(U){i.enabled!==!1&&U.preventDefault()}function Ne(U){T.push(U.pointerId)}function Le(U){delete D[U.pointerId];for(let me=0;me<T.length;me++)if(T[me]==U.pointerId){T.splice(me,1);return}}function Di(U){let me=D[U.pointerId];me===void 0&&(me=new te,D[U.pointerId]=me),me.set(U.pageX,U.pageY)}function bt(U){let me=U.pointerId===T[0]?T[1]:T[0];return D[me]}i.domElement.addEventListener("contextmenu",_e),i.domElement.addEventListener("pointerdown",ae),i.domElement.addEventListener("pointercancel",de),i.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}};function Ct(r=1){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function dh(r){let e=parseInt(r.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function Ii(r,e,t){let i=dh(r),n=dh(e);return"#"+i.map((a,o)=>Math.round(a+(n[o]-a)*Math.max(0,Math.min(1,t)))).map(a=>a.toString(16).padStart(2,"0")).join("")}function ep(r,e){let t=r?.couche;if(t==null)return 99;if(typeof t=="number")return t;let i=(e-t.x0)/(t.x1-t.x0||1);return t.y0+(t.y1-t.y0)*Math.max(0,Math.min(1,i))}function mh(r,e){let t=Math.max(4,Math.round((r.u1-r.u0)*48)),i=Math.max(4,Math.round((r.y1-r.y0)*48)),n=document.createElement("canvas");n.width=t,n.height=i;let s=n.getContext("2d");r.flip&&(s.translate(t,0),s.scale(-1,1));let a=p=>(p-r.u0)*48,o=p=>(r.y1-p)*48,l=r.piece,c=!l,h=c?"#e6dfcf":l.peinture||"#ddd6c6";s.fillStyle=h,s.fillRect(0,0,t,i);let d=Ct(Math.round(r.u0*100+r.ligne*7+r.y0*13));for(let p=0;p<t*i/60;p++)s.fillStyle=`rgba(0,0,0,${d()*.04})`,s.fillRect(d()*t,d()*i,2,2);let u=c?.05:l.suie??0;if(!c&&u>0)for(let f=0;f<t;f+=4){let g=r.u0+f/48,m=r.axe==="h"?g:r.ligne,y=ep(l,m)+Math.sin(g*7.3)*.03+(d()-.5)*.03,v=o(r.y1),_=o(Math.max(r.y0,y));if(_>v){let E=s.createLinearGradient(0,o(r.y1>2.4?2.5:r.y1),0,_);E.addColorStop(0,`rgba(18,14,12,${Math.min(.97,.55+u*.42)})`),E.addColorStop(1,`rgba(28,22,18,${Math.min(.9,.35+u*.45)})`),s.fillStyle=E,s.fillRect(f,v,5,_-v)}s.fillStyle=`rgba(30,25,20,${u*.12})`,s.fillRect(f,Math.max(0,_),5,i-Math.max(0,_))}if(c){let p=s.createLinearGradient(0,o(.6),0,o(0));p.addColorStop(0,"rgba(90,80,60,0)"),p.addColorStop(1,"rgba(90,80,60,0.18)"),s.fillStyle=p,s.fillRect(0,o(.6),t,o(0)-o(.6))}for(let p of e)p.cote==="sol"||!(c?p.piece==="exterieur":p.piece===l.id)||p.cote!==r.cote||p.ligne!=null&&Math.abs(p.ligne-r.ligne)>.05||tp(s,p,a,o,r,c);return n}function tp(r,e,t,i,n,s){let a=n.H||2.5;if(e.type==="V"){let o=(e.angle||30)*Math.PI/180,l=a+.6,c=(l-e.y0)*Math.tan(o),h=()=>{r.beginPath(),r.moveTo(t(e.u-.06),i(e.y0)),r.lineTo(t(e.u-c),i(l)),r.lineTo(t(e.u+c),i(l)),r.lineTo(t(e.u+.06),i(e.y0)),r.closePath()};if(s||e.remplissage==="suie"){h();let d=r.createLinearGradient(0,i(e.y0),0,i(l));d.addColorStop(0,`rgba(15,12,10,${.9*(e.force??1)})`),d.addColorStop(1,`rgba(25,20,16,${.55*(e.force??1)})`),r.fillStyle=d,r.fill()}else{r.save(),h(),r.lineWidth=.16*48,r.strokeStyle="rgba(12,9,7,0.95)",r.stroke(),r.restore(),h();let d=r.createLinearGradient(0,i(e.y0),0,i(l));d.addColorStop(0,"rgba(214,208,196,0.97)"),d.addColorStop(.5,"rgba(188,180,166,0.92)"),d.addColorStop(1,"rgba(120,112,100,0.7)"),r.fillStyle=d,r.fill()}}else if(e.type==="cleanburn"||e.type==="calcination")r.beginPath(),r.ellipse(t(e.u),i(e.y),(e.rx||.5)*48,(e.ry||.5)*48,0,0,Math.PI*2),r.fillStyle=e.type==="cleanburn"?"rgba(200,194,182,0.75)":"rgba(238,235,226,0.8)",r.fill();else if(e.type==="protegee"){let o=t(Math.min(e.u0,e.u1)),l=t(Math.max(e.u0,e.u1));r.fillStyle=n.piece?.peinture||"#ddd6c6",r.globalAlpha=.85,r.fillRect(Math.min(o,l),i(e.y1),Math.abs(l-o),i(e.y0)-i(e.y1)),r.globalAlpha=1}else e.type==="demarcation"&&(r.strokeStyle="rgba(15,12,10,0.9)",r.lineWidth=3,r.beginPath(),r.moveTo(t(e.u0??n.u0),i(e.y)),r.lineTo(t(e.u1??n.u1),i(e.y)),r.stroke())}var ph={stratifie:{base:"#a98d66",joint:"rgba(60,40,20,0.25)",lame:[1.2,.19]},parquet:{base:"#9b7650",joint:"rgba(50,30,15,0.3)",lame:[.6,.09]},carrelage:{base:"#d3cfc6",joint:"rgba(90,90,90,0.35)",lame:[.45,.45]},beton:{base:"#9d9b95",joint:null},herbe:{base:"#6f7d4f",joint:null}};function fh(r,e){let t=Math.round(r.w*48),i=Math.round(r.d*48),n=document.createElement("canvas");n.width=t,n.height=i;let s=n.getContext("2d"),a=ph[r.sol]||ph.beton;s.fillStyle=a.base,s.fillRect(0,0,t,i);let o=Ct(Math.round(r.x*31+r.z*17+3));if(a.joint){s.strokeStyle=a.joint,s.lineWidth=1;let[h,d]=a.lame;for(let u=0;u<r.d;u+=d){s.beginPath(),s.moveTo(0,u*48),s.lineTo(t,u*48),s.stroke();let p=Math.round(u/d)%3*h/3;for(let f=-p;f<r.w;f+=h)s.beginPath(),s.moveTo(f*48,u*48),s.lineTo(f*48,(u+d)*48),s.stroke()}}for(let h=0;h<t*i/40;h++)s.fillStyle=`rgba(0,0,0,${o()*.05})`,s.fillRect(o()*t,o()*i,2,2);let l=r.suie??0;l>0&&(s.fillStyle=`rgba(25,18,12,${Math.min(.78,l*.62)})`,s.fillRect(0,0,t,i));let c=(h,d)=>[(h-r.x)*48,(d-r.z)*48];for(let h of e)if(!(h.cote!=="sol"||h.piece!==r.id)){if(h.type==="irregulier"){let d=Ct(h.seed||5);for(let u=0;u<26;u++){let[p,f]=c(h.x+(d()-.5)*2*h.rx,h.z+(d()-.5)*2*h.rz),g=(.12+d()*.35)*48;s.beginPath();for(let m=0;m<=12;m++){let y=m/12*Math.PI*2,v=g*(.6+d()*.6);m?s.lineTo(p+Math.cos(y)*v,f+Math.sin(y)*v):s.moveTo(p+Math.cos(y)*v,f+Math.sin(y)*v)}s.closePath(),s.fillStyle=d()<.25?"rgba(96,92,86,0.95)":"rgba(10,7,5,0.92)",s.fill()}}else if(h.type==="consomme"){let[d,u]=c(h.x,h.z),p=s.createRadialGradient(d,u,0,d,u,Math.max(h.rx,h.rz)*48*1.6);p.addColorStop(0,"rgba(110,106,100,1)"),p.addColorStop(.55,"rgba(100,96,90,0.95)"),p.addColorStop(.62,"rgba(8,6,4,0.95)"),p.addColorStop(1,"rgba(8,6,4,0)"),s.fillStyle=p,s.beginPath(),s.ellipse(d,u,h.rx*48*1.6,h.rz*48*1.6,0,0,Math.PI*2),s.fill()}else if(h.type==="protegee"){let[d,u]=c(h.x,h.z);s.fillStyle=Ii(a.base,"#2a2018",.35),s.beginPath(),s.ellipse(d,u,h.rx*48,h.rz*48,0,0,Math.PI*2),s.fill()}else if(h.type==="debris"){let d=Ct(Math.round(r.x*13+1)),u=Math.round(r.w*r.d*40*(h.densite??.5));for(let p=0;p<u;p++){s.fillStyle=d()<.5?"rgba(160,156,148,0.8)":"rgba(15,12,10,0.85)";let f=(.02+d()*.07)*48;s.fillRect(d()*t,d()*i,f,f*(.5+d()))}}}return n}function gh(r,e=!1,t=!1){let i=document.createElement("canvas");i.width=128,i.height=128;let n=i.getContext("2d");return n.fillStyle="rgba(0,0,0,0.35)",n.beginPath(),n.ellipse(64,118,42,8,0,0,Math.PI*2),n.fill(),n.fillStyle=t?"#ffd23f":"#f5c400",n.strokeStyle="#3a2f00",n.lineWidth=5,n.beginPath(),n.moveTo(20,112),n.lineTo(64,14),n.lineTo(108,112),n.closePath(),n.fill(),n.stroke(),n.fillStyle="#111",n.font="bold 44px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(r),64,80),e&&(n.fillStyle="#1b6ef3",n.beginPath(),n.arc(104,26,20,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 22px system-ui",n.fillText("P",104,27)),t&&(n.fillStyle="#17a34a",n.beginPath(),n.arc(24,26,18,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.font="bold 22px system-ui",n.fillText("\u2713",24,27)),i}function vh(){let r=document.createElement("canvas");r.width=64,r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,30);return t.addColorStop(0,"rgba(255,255,220,0.95)"),t.addColorStop(.3,"rgba(255,230,120,0.45)"),t.addColorStop(1,"rgba(255,200,80,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),r}function _h(){let r=document.createElement("canvas");r.width=64,r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(32,96,4,32,80,60);return t.addColorStop(0,"rgba(255,250,200,1)"),t.addColorStop(.25,"rgba(255,190,60,0.95)"),t.addColorStop(.6,"rgba(240,90,20,0.6)"),t.addColorStop(1,"rgba(120,20,0,0)"),e.fillStyle=t,e.beginPath(),e.moveTo(32,2),e.bezierCurveTo(60,50,64,100,32,126),e.bezierCurveTo(0,100,4,50,32,2),e.fill(),r}function yi(r){return r.niveaux?.length?r.niveaux:[{id:"rdc",nom:"Rez-de-chauss\xE9e",altitude:0,hauteur:r.hauteur||2.5,pieces:r.pieces||[],ouvertures:r.ouvertures||[],objets:r.objets||[],traces:r.traces||[],tremies:[]}]}function Wn(r,e){let i=yi(r).findIndex(n=>n.id===e);return i<0?0:i}function Xn(r,e){let t=yi(r);return(t.find(i=>i.id===e)||t[0]).altitude||0}function Qo(r){return yi(r).flatMap((e,t)=>e.pieces.map(i=>({...i,_niv:t,_alt:e.altitude||0})))}var on="#1b1714",ip=.42,Rr=Math.PI/180;function Pe(r,e=0){return new Ae(Ii(r,on,e))}function Qe(r,e={}){return new sn({color:r,...e})}var Qs=class{constructor(e,t={}){this.container=e,this.opts=t,this.renderer=new gr({antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.localClippingEnabled=!0,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Xo,e.appendChild(this.renderer.domElement),this.renderer.domElement.classList.add("scene-canvas"),this.scene=new Ps,this.scene.background=new Ae("#1a1e23"),this.viewSize=15,this.camera=new Bn(-10,10,10,-10,-200,400),this.camera.position.set(20,22,26),this.controls=new Ks(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.12,this.controls.minPolarAngle=.35,this.controls.maxPolarAngle=1.25,this.controls.minZoom=.35,this.controls.maxZoom=6,this.controls.screenSpacePanning=!0,this.controls.mouseButtons=t.editeur?{LEFT:-1,MIDDLE:Rt.ROTATE,RIGHT:Rt.PAN}:{LEFT:Rt.ROTATE,MIDDLE:Rt.DOLLY,RIGHT:Rt.PAN},this.controls.addEventListener("change",()=>{this._cutDirty=!0}),this.hemi=new Hs(15002879,4208170,1.15),this.scene.add(this.hemi),this.sun=new Vs(16774374,1.35),this.sun.position.set(10,18,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-16,right:16,top:16,bottom:-16,near:1,far:60}),this.sun.shadow.bias=-6e-4,this.scene.add(this.sun),this.scene.add(this.sun.target),this.root=new it,this.scene.add(this.root),this.overlay=new it,this.scene.add(this.overlay),this.photos=new Map,this.levelGroups=[],this.niveauVisible=null,this.planY=0,this.onPointer=null,this.hotspots=new Map,this.walls=[],this.focus=null,this.onPick=null,this.clock=new Ws,this.raycaster=new Xs,this._tween=null;let i=this.renderer.domElement,n=null;i.addEventListener("pointerdown",s=>{n={x:s.clientX,y:s.clientY},this.onPointer&&s.button===0&&(i.setPointerCapture?.(s.pointerId),this.onPointer("down",this._info(s)))}),i.addEventListener("pointerup",s=>{if(this.onPointer&&s.button===0&&this.onPointer("up",this._info(s)),!n)return;let a=Math.hypot(s.clientX-n.x,s.clientY-n.y);n=null,a<6&&s.button===0&&this._click(s)}),i.addEventListener("pointermove",s=>{this.onPointer?this.onPointer("move",this._info(s)):this._hover(s)}),i.addEventListener("contextmenu",s=>s.preventDefault()),this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(e),this.resize(),this._loop=this._loop.bind(this),this._raf=requestAnimationFrame(this._loop)}dispose(){cancelAnimationFrame(this._raf),this._ro.disconnect(),this.renderer.dispose(),this.renderer.domElement.remove()}resize(){let e=this.container.clientWidth||800,t=this.container.clientHeight||600;this.renderer.setSize(e,t,!1);let i=e/t;this.camera.left=-this.viewSize*i/2,this.camera.right=this.viewSize*i/2,this.camera.top=this.viewSize/2,this.camera.bottom=-this.viewSize/2,this.camera.updateProjectionMatrix()}load(e,t={}){this.scn=e,this.root.traverse(l=>{l.geometry?.dispose?.();let c=Array.isArray(l.material)?l.material:[l.material];for(let h of c)h?.map?.dispose?.(),h?.dispose?.()}),this.root.clear(),this.hotspots.clear(),this.photos.clear(),this.walls=[],this.fouilleMeshes=[],this.smoke={},this.flash={},this.levelGroups=[],this.feu=null;let i=e.batiment;this.niveaux=yi(i),this.H=this.niveaux[0].hauteur||i.hauteur||2.5,this._buildGround(i);let n=e.fouille?Wn(i,e.fouille.niveau):-1;this.niveaux.forEach((l,c)=>{let h=new it;h.position.y=l.altitude||0,h.userData.niveau=c,this.root.add(h),this.levelGroups.push(h),this._g=h,this._niv=c,this._nivData=l,this._alt=l.altitude||0;let d=l.hauteur||this.H;for(let u of l.pieces)this._buildFloor(u,l.traces||[],l.tremies||[],c>0);this._buildWalls({...i,pieces:l.pieces,ouvertures:l.ouvertures||[],traces:l.traces||[],hauteur:d});for(let u of l.objets||[]){let p=this._buildObjet(u);p&&(p.userData.niveau=c,h.add(p))}c===n&&this._buildFouille(e.fouille),this._buildFireRig(l,d)}),this._g=this.root,n<0&&this._buildFouille(null),this.toiture=null,i.toiture&&this._buildToiture(i.toiture);let s=Qo(i),a=s.flatMap(l=>[l.x,l.x+l.w]),o=s.flatMap(l=>[l.z,l.z+l.d]);if(this.centre=s.length?new b((Math.min(...a)+Math.max(...a))/2,0,(Math.min(...o)+Math.max(...o))/2):new b,this.sun.target.position.copy(this.centre),this.sun.position.set(this.centre.x+8,18,this.centre.z+12),!t.garderCamera){this.controls.target.copy(this.centre),this.camera.position.copy(this.centre).add(new b(16,17,18));let l=s.length?Math.max(Math.max(...a)-Math.min(...a),Math.max(...o)-Math.min(...o)):10;this.camera.zoom=Math.min(1.6,Math.max(.45,10/l)),this.camera.updateProjectionMatrix()}this.setNiveauVisible(this.niveauVisible),this._cutDirty=!0}setToiture(e){if(this.modeToiture=e,!this.toiture)return;let t=this.levelGroups.length-1,i=this.niveauVisible==null||this.niveauVisible>=t;this.toiture.visible=e!=="cache"&&i;for(let n of this.toitTuiles)n.visible=e==="visible"}_buildToiture(e){let t=new it;t.userData.toiture=!0,this.toitTuiles=[];let i=e.x0-(e.debord??.3),n=e.x1+(e.debord??.3),s=e.z0-(e.debord??.3),a=e.z1+(e.debord??.3),o=e.altitude,l=e.hauteur||2,c=(e.axe||"x")==="x",h=c?n-i:a-s,d=(c?a-s:n-i)/2,u=Math.atan2(l,d),p=Math.hypot(d,l),f=e.effondrement||[],g=(D,I,S=1)=>f.some(L=>Math.hypot(D-L.x,I-L.z)<L.r*S),m=(D,I)=>f.reduce((S,L)=>Math.max(S,1-Math.min(1,Math.max(0,(Math.hypot(D-L.x,I-L.z)-L.r)/(L.r*.8)))),e.brule||0),y=Ct(77),v=e.couleur||"#b5532f",_=(D,I,S)=>{let L=(1-I)*d*S,R=o+I*l,z=c?(s+a)/2:(i+n)/2;return c?new b(i+D,R,z+L):new b(z+L,R,s+D)},E=.55,P=Math.ceil(h/E),x=Math.ceil(p/E);for(let D of[-1,1]){for(let S=0;S<P;S++)for(let L=0;L<x;L++){let R=(S+.5)*h/P,z=(L+.5)/x,B=_(R,z,D);if(g(B.x,B.z))continue;let re=m(B.x,B.z),le=new Se(new Ke(c?h/P-.01:.04,.04,c?.04:h/P-.01),Qe(Ii(Ii(v,"#8f3c22",y()*.4),on,re*.8))),J=p/x-.01;c?(le.scale.z=J/.04,le.rotation.x=D>0?u:-u):(le.scale.x=J/.04,le.rotation.z=D>0?-u:u),le.position.copy(B),le.castShadow=!0,le.receiveShadow=!0,t.add(le),this.toitTuiles.push(le)}let I=Math.floor(h/.6);for(let S=0;S<=I;S++){let L=S*h/I,R=1,z=_(L,.5,D);if(g(z.x,z.z,.6))continue;g(z.x,z.z,1.05)&&(R=.25+y()*.5);let B=m(z.x,z.z),re=_(L,0,D),le=_(L,R,D),J=new Se(new Ke(.07,.12,1),Qe(Ii("#9b7448",on,Math.min(1,B+.1))));J.position.copy(re.clone().add(le).multiplyScalar(.5)).add(new b(0,-.08,0)),J.scale.z=re.distanceTo(le),J.lookAt(le.x,le.y-.08,le.z),J.castShadow=!0,t.add(J)}}let T=12;for(let D=0;D<T;D++){let I=D*h/T,S=(D+1)*h/T,L=_((I+S)/2,1,1);if(g(L.x,L.z,.7))continue;let R=new Se(new Ke(c?h/T:.12,.16,c?.12:h/T),Qe(Ii("#8a6640",on,m(L.x,L.z))));R.position.set(L.x,L.y-.1,L.z),t.add(R)}for(let D of[0,1]){let I=new nn([new te(-d+(e.debord??.3),0),new te(d-(e.debord??.3),0),new te(0,l-(e.debord??.3)*l/d)]),S=new Se(new Hn(I),Qe(e.pignon||"#e3dccd",{side:ri})),L=c?(s+a)/2:(i+n)/2;c?(S.position.set(D?e.x1:e.x0,o,L),S.rotation.y=Math.PI/2):S.position.set(L,o,D?e.z1:e.z0),t.add(S)}this.root.add(t),this.toiture=t,this.setToiture(this.modeToiture||"visible")}setNiveauVisible(e){this.niveauVisible=e,this.levelGroups.forEach((t,i)=>{t.visible=e==null||i<=e}),this.toiture&&this.setToiture(this.modeToiture||"visible");for(let t of this.hotspots.values())t.group.visible=(t.state.actif||t.state.toujours)&&this._nivOk(t.niv);for(let t of this.photos.values())t.group.visible=t.state.visible&&this._nivOk(t.niv);this._cutDirty=!0}_nivOk(e){return this.niveauVisible==null||(e??0)<=this.niveauVisible}roomAt(e,t,i){return(i==null?this._nivData?.pieces&&this._g!==this.root?this._nivData.pieces:this.niveaux[0].pieces:this.niveaux[i].pieces).find(s=>e>s.x+.001&&e<s.x+s.w-.001&&t>s.z+.001&&t<s.z+s.d-.001)||null}_buildGround(e){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),n=Ct(42);i.fillStyle="#5f6e43",i.fillRect(0,0,512,512);for(let p=0;p<9e3;p++)i.fillStyle=n()<.5?"rgba(40,55,25,0.25)":"rgba(150,160,90,0.18)",i.fillRect(n()*512,n()*512,2,3);for(let p=0;p<40;p++)i.fillStyle="rgba(190,170,120,0.18)",i.beginPath(),i.arc(n()*512,n()*512,6+n()*20,0,7),i.fill();let s=new ni(t);s.wrapS=s.wrapT=ur,s.repeat.set(8,8),s.colorSpace=Je;let a=new Se(new ii(70,70),Qe(16777215,{map:s}));a.rotation.x=-Math.PI/2,a.receiveShadow=!0,a.userData.sol="exterieur",this.root.add(a);for(let[p,f]of[["terrasse","#b9ad98"],["allee","#a7a29a"]]){let g=e[p];if(!g)continue;let m=new Se(new Ke(g.w,.05,g.d),Qe(f));m.position.set(g.x+g.w/2,0,g.z+g.d/2),m.receiveShadow=!0,m.userData.sol="exterieur",this.root.add(m)}let o=Ct(9),l=Qo(e),c=l.flatMap(p=>[p.x,p.x+p.w]),h=l.flatMap(p=>[p.z,p.z+p.d]);l.length||(c.push(0,1),h.push(0,1));let d=(Math.min(...c)+Math.max(...c))/2,u=(Math.min(...h)+Math.max(...h))/2;for(let p=0;p<14;p++){let f=o()*Math.PI*2,g=12+o()*9,m=d+Math.cos(f)*g,y=u+Math.sin(f)*g,v=new it,_=new Se(new Qi(.12,.16,1.4,6),Qe("#5a4330"));_.position.y=.7;let E=new Se(new en(.9+o()*.6,3+o()*2,7),Qe(o()<.5?"#2f4a2c":"#3b5a33"));E.position.y=2.6,E.castShadow=!0,v.add(_,E),v.position.set(m,0,y),this.root.add(v)}}_buildFloor(e,t,i=[],n=!1){let s=new ni(fh(e,t));s.colorSpace=Je,s.anisotropy=4;let a=i.filter(c=>c.x<e.x+e.w&&c.x+c.w>e.x&&c.z<e.z+e.d&&c.z+c.d>e.z),o;if(!a.length)o=new ii(e.w,e.d),o.rotateX(-Math.PI/2),o.translate(e.x+e.w/2,0,e.z+e.d/2);else{let c=new nn([new te(e.x,-e.z),new te(e.x+e.w,-e.z),new te(e.x+e.w,-(e.z+e.d)),new te(e.x,-(e.z+e.d))]);for(let u of a){let p=Math.max(u.x,e.x),f=Math.min(u.x+u.w,e.x+e.w),g=Math.max(u.z,e.z),m=Math.min(u.z+u.d,e.z+e.d);c.holes.push(new Ki([new te(p,-g),new te(p,-m),new te(f,-m),new te(f,-g)]))}o=new Hn(c),o.rotateX(-Math.PI/2);let h=o.attributes.position,d=o.attributes.uv;for(let u=0;u<h.count;u++)d.setXY(u,(h.getX(u)-e.x)/e.w,1-(h.getZ(u)-e.z)/e.d);d.needsUpdate=!0}let l=new Se(o,Qe(16777215,{map:s,side:n?ri:Kt}));if(l.position.y=.005,l.receiveShadow=!0,l.userData.sol=e.id,l.userData.niveau=this._niv,this._g.add(l),n){let c=new Se(new Ke(e.w,.2,e.d),Qe("#8f8a82"));c.position.set(e.x+e.w/2,-.105,e.z+e.d/2),a.length||this._g.add(c)}}_buildWalls(e){let t=e.hauteur||this.H,i=e.epaisseur||.16,n={h:new Map,v:new Map},s=(o,l,c,h)=>{let d=Math.round(l*100)/100;n[o].has(d)||n[o].set(d,[]),n[o].get(d).push([c,h])};for(let o of e.pieces)s("h",o.z,o.x,o.x+o.w),s("h",o.z+o.d,o.x,o.x+o.w),s("v",o.x,o.z,o.z+o.d),s("v",o.x+o.w,o.z,o.z+o.d);let a=e.traces||[];for(let o of["h","v"])for(let[l,c]of n[o]){c.sort((d,u)=>d[0]-u[0]);let h=[];for(let d of c){let u=h[h.length-1];u&&d[0]<=u[1]+.001?u[1]=Math.max(u[1],d[1]):h.push([...d])}for(let[d,u]of h){let p=new Set([d,u]);for(let g of e.pieces){let m=o==="h"?[g.x,g.x+g.w]:[g.z,g.z+g.d];for(let y of m)y>d+.001&&y<u-.001&&p.add(y)}let f=[...p].sort((g,m)=>g-m);for(let g=0;g<f.length-1;g++)this._buildWallPiece(o,l,f[g],f[g+1],g===0,g===f.length-2,e,a,t,i)}}}_buildWallPiece(e,t,i,n,s,a,o,l,c,h){let d=(i+n)/2,u=x=>e==="h"?this.roomAt(d,t+x):this.roomAt(t+x,d),p=u(.3),f=u(-.3),g=new xt(new b(0,-1,0),99),m={axe:e,ligne:t,a:i,b:n,plane:g,rooms:{},niv:this._niv,alt:this._alt};p&&(m.rooms[p.id]=e==="h"?new b(0,0,1):new b(1,0,0)),f&&(m.rooms[f.id]=e==="h"?new b(0,0,-1):new b(-1,0,0)),m.exterieur=!p||!f,this.walls.push(m);let y=(o.ouvertures||[]).filter(x=>x.axe===e&&Math.abs((e==="h"?x.z:x.x)-t)<.03).map(x=>({...x,c:e==="h"?x.x:x.z})).filter(x=>x.c>i&&x.c<n).sort((x,T)=>x.c-T.c),v=[],_=i-(s?h/2:0),E=n+(a?h/2:0);for(let x of y){let T=x.c-x.w/2,D=x.c+x.w/2;T>_&&v.push([_,T,0,c]);let I=x.allege||0;I>0&&v.push([T,D,0,I]),I+x.h<c&&v.push([T,D,I+x.h,c]),_=D,this._buildOuverture(x,e,t,h,g,p,f)}E>_&&v.push([_,E,0,c]);let P=Qe("#b8b1a3",{clippingPlanes:[g],side:ri});for(let[x,T,D,I]of v){let S=T-x,L=I-D;if(S<.01||L<.01)continue;let R=e==="h"?new Ke(S,L,h):new Ke(h,L,S),z=(Q,k)=>{let Z,ce;e==="h"?k>0?(Z=Q?"N":"S",ce=!1):(Z=Q?"S":"N",ce=!0):k>0?(Z=Q?"W":"E",ce=!0):(Z=Q?"E":"W",ce=!1);let A=mh({u0:x,u1:T,y0:D,y1:I,axe:e,ligne:t,flip:ce,piece:Q,cote:Z,H:c},l),w=new ni(A);return w.colorSpace=Je,w.anisotropy=4,Qe(16777215,{map:w,clippingPlanes:[g],side:ri})},B=z(p,1),re=z(f,-1),le=e==="h"?[P,P,P,P,B,re]:[B,re,P,P,P,P],J=new Se(R,le),Y=(x+T)/2;e==="h"?J.position.set(Y,D+L/2,t):J.position.set(t,D+L/2,Y),J.castShadow=!0,J.receiveShadow=!0,J.userData={mur:!0,axe:e,ligne:t,pos:p?.id||null,neg:f?.id||null,niveau:this._niv,u0:x,u1:T,y0:D,y1:I},this._g.add(J)}}_buildOuverture(e,t,i,n,s,a,o){let l=new it,c={clippingPlanes:[s],side:ri},h=Math.max(a?.suie||0,o?.suie||0),d=e.allege||0;if(e.type==="porte")if(e.garage){let u=new Se(new Ke(e.w,e.h,.05),Qe("#d2d2cf",c));u.position.set(0,e.h/2,0),l.add(u);for(let p=1;p<5;p++){let f=new Se(new Ke(e.w,.02,.06),Qe("#a9a9a6",c));f.position.set(0,p*e.h/5,0),l.add(f)}}else{let u=new Se(new Ke(e.w-.04,e.h-.02,.04),Qe(Pe("#b79d78",h*.55),c)),p=new it;u.position.set((e.w-.04)/2,(e.h-.02)/2,0),p.add(u),p.position.set(-e.w/2+.02,0,0),p.rotation.y=e.fermee?0:-80*Rr,l.add(p)}else{let u=e.brise?Pe("#efefef",.85):"#f2f2f0",p=(f,g,m,y)=>{let v=new Se(new Ke(f,g,.07),Qe(u,c));v.position.set(m,y,0),l.add(v)};if(p(e.w,.06,0,d+.03),e.brise?(p(.06,e.h*.45,-e.w/2+.03,d+e.h*.22),p(.06,e.h*.3,e.w/2-.03,d+e.h*.15)):(p(e.w,.06,0,d+e.h-.03),p(.06,e.h,-e.w/2+.03,d+e.h/2),p(.06,e.h,e.w/2-.03,d+e.h/2)),e.brise){let f=Ct(11);for(let g=0;g<46;g++){let m=new Se(new ii(.05+f()*.12,.04+f()*.1),new sn({color:"#b9d4de",transparent:!0,opacity:.7,side:ri}));m.rotation.x=-Math.PI/2,m.rotation.z=f()*3,m.position.set((f()-.5)*e.w*1.1,.012+f()*.004,(f()-.35)*1.6),l.add(m)}}else{let f=new Se(new ii(e.w-.1,e.h-.1),new sn({color:"#9fc0cf",transparent:!0,opacity:.32,...c}));f.position.set(0,d+e.h/2,0),l.add(f)}}t==="h"?l.position.set(e.x,0,i):(l.position.set(i,0,e.z),l.rotation.y=Math.PI/2),l.userData.ouverture=e,l.userData.niveau=this._niv,this._g.add(l)}_buildObjet(e){let t=e.brule||0,i=new it,n=(a,o,l,c,h=0,d=0,u=0,p={})=>{let f=new Se(new Ke(a,o,l),Qe(c,p));return f.position.set(h,d+o/2,u),f.castShadow=!0,f.receiveShadow=!0,i.add(f),f},s=(a,o,l,c,h=0,d=0,u=0,p=10)=>{let f=new Se(new Qi(a,o,l,p),Qe(c));return f.position.set(h,d+l/2,u),f.castShadow=!0,i.add(f),f};switch(e.type){case"canape":{let a=e.L||2.2,o=.9;if(t<.5){let l=Pe("#6d7480",t);n(a,.42,o,l,0,0,0),n(a,.45,.22,l,0,.42,-o/2+.11),n(.2,.25,o,l,-a/2+.1,.42,0),n(.2,.25,o,l,a/2-.1,.42,0)}else{for(let c=0;c<6;c++){let d=.15+.85*(c/5),u=-a/2+(c+.5)*a/6,p=.06+.22*d*(1-t*.5),f=n(a/6-.02,p,.07,on,u,.02,o/2-.04);f.userData.fouillable=!0;let g=n(a/6-.02,p*.9,.07,on,u,.02,-o/2+.04);g.userData.fouillable=!0;let m=n(a/6-.02,.1+.55*d*(1-t*.4),.06,"#221c18",u,.02,-o/2+.03);m.userData.fouillable=!0;for(let y=0;y<3;y++){let v=.06+.22*d,_=new Se(new Er(.045,.008,4,8),Qe("#4a423b"));_.rotation.x=Math.PI/2,_.position.set(u+(y-1)*.11,v,-.25+y*.25),_.userData.fouillable=!0,i.add(_)}}for(let[c,h]of[[-a/2+.05,-o/2+.05],[a/2-.05,-o/2+.05],[-a/2+.05,o/2-.05],[a/2-.05,o/2-.05]])n(.04,.05,.04,"#5a5550",c,0,h)}break}case"lampadaire":{s(.16,.18,.03,"#2b2b2b"),s(.015,.015,1.6,Pe("#9a9a9a",t*.6),0,.03);let a=new Se(new en(.25,.25,12,1,!0),Qe(Pe("#efe6cf",t),{side:ri}));a.position.set(0,1.7,0),a.rotation.x=Math.PI,i.add(a);break}case"multiprise":n(.32,.04,.06,Pe("#f4f4f4",t));break;case"prise":n(.08,.08,.03,Pe("#f4f4f4",.6));break;case"cable":{let a=e.points.map(c=>new b(c[0],c[1],c[2])),o=new yr(a),l=new Se(new Tr(o,40,t>.5?.006:.012,5),Qe(t>.5?"#b56a35":"#f2f2f2"));return i.add(l),i.userData.objet=e.id,i.userData.def=e,i}case"meubleTV":n(e.L||1.6,.48,.42,Pe("#7a5b3c",t));break;case"tv":{let a=n(1.12,.66*(1-t*.35),.06,Pe("#222",t*.3),0,.06,0);a.rotation.x=t*.35,n(.3,.06,.2,"#333",0,0,0);break}case"tableBasse":{for(let[o,l]of[[-.5,-.25],[.5,-.25],[-.5,.25],[.5,.25]])n(.03,.4,.03,"#333",o,0,l);let a=new Se(new Ke(1.1,.012,.6),new sn({color:t>.3?"#4d5a5c":"#bcd2d6",transparent:!0,opacity:.8}));a.position.set(0,t>.3?.06:.41,0),a.rotation.z=t>.3?.08:0,i.add(a);break}case"tapis":{let a=new Se(new ii(e.w||2,e.d||1.4),Qe(Pe("#8c3b3b",t)));a.rotation.x=-Math.PI/2,a.position.y=.01,a.receiveShadow=!0,i.add(a);break}case"etagere":{n(e.L||1.8,.03,.25,Pe("#8b6a46",t*.8),0,1.25,0);for(let a=-1;a<=1;a++)s(.04,.04,.09,"#b9c9cc",a*.25,1.28,0),s(.034,.034,.03,"#e9e1cf",a*.25,1.28,0);break}case"debris":{let a=Ct(Math.round((e.x+3)*97+e.z*31)),o=Math.round((e.w||1)*(e.d||1)*18);for(let l=0;l<o;l++){let c=a()<.6?"#2a2420":"#9a958c",h=n(.08+a()*.3,.015+a()*.05,.06+a()*.25,c,(a()-.5)*(e.w||1),0,(a()-.5)*(e.d||1));h.rotation.y=a()*3}break}case"cuisine":{let a=e.L||3;n(a,.88,.6,Pe("#e8e4dc",t*.5)),n(a,.04,.62,Pe("#5a5450",t*.4),0,.88,0),n(a,.7,.34,Pe("#e8e4dc",Math.min(1,t*2.5)),0,1.45,-.13),n(.6,.01,.5,"#111",.2,.92,.02);break}case"frigo":n(.6,1.8,.65,Pe("#eeeeee",t));break;case"table":{n(1.2,.04,.8,Pe("#a07a50",t),0,.72,0);for(let[a,o]of[[-.55,-.35],[.55,-.35],[-.55,.35],[.55,.35]])n(.05,.72,.05,Pe("#a07a50",t),a,0,o);break}case"lit":{let a=e.L||2,o=e.l||1.6;n(o,.3,a,Pe("#6b5038",t),0,0,0),n(o-.06,.22,a-.1,Pe("#eef0f2",t),0,.3,.02),n(o-.2,.1,.4,Pe("#ffffff",t),0,.52,-a/2+.3);break}case"armoire":n(1.2,2.1,.6,Pe("#8a6b4b",t));break;case"bureau":{n(1.2,.04,.6,Pe("#d9d4c8",t),0,.72,0),n(.05,.72,.55,Pe("#777",t),-.55,0,0),n(.05,.72,.55,Pe("#777",t),.55,0,0),n(.55,.35,.03,"#1d1d1d",0,.76,-.15);break}case"baignoire":n(1.7,.55,.75,"#f3f3f3");break;case"tableauElec":{n(.5,.45,.1,"#f1f1f1",0,0,0);for(let a=0;a<6;a++)n(.05,.08,.02,a===2?"#d13b3b":"#2b2b2b",-.17+a*.07,.18,.06);break}case"tondeuse":{n(.5,.3,.55,"#2f7a3a",0,.06,0),n(.04,.6,.04,"#333",-.2,.36,.3).rotation.x=-.5,n(.04,.6,.04,"#333",.2,.36,.3).rotation.x=-.5;break}case"jerrican":n(.3,.36,.17,"#c4291f"),n(.12,.05,.04,"#c4291f",0,.36,0);break;case"etabli":n(e.L||2,.06,.6,"#a07a50",0,.86,0),n(.06,.86,.6,"#7a5b3c",-(e.L||2)/2+.05,0,0),n(.06,.86,.6,"#7a5b3c",(e.L||2)/2-.05,0,0);break;case"daaf":{let a=s(.06,.06,.04,Pe("#f5f5f5",t),0,2.44,0);a.castShadow=!1;break}case"escalier":{let a=e.L||3,o=e.l||.9,l=e.H||this.H,c=Math.max(3,Math.round(l/.18));for(let h=0;h<c;h++){let d=n(a/c+.02,l*(h+1)/c,o,Pe("#a68a6a",t),-a/2+(h+.5)*a/c,0,0);d.castShadow=!0}break}case"conduit":{let a=s(e.r||.09,e.r||.09,e.H||6,Pe("#a9adb1",t*.5),0,e.y0||0,0,12);a.castShadow=!0;break}case"gravats":{let a=Ct(Math.round((e.x+5)*53+e.z*17)),o=Math.round((e.w||1)*(e.d||1)*22),l=e.couleurs||["#a34a2a","#2a2420","#8d8a84","#5b4630"];for(let c=0;c<o;c++)n(.1+a()*.35,.02+a()*.07,.08+a()*.3,l[Math.floor(a()*l.length)],(a()-.5)*(e.w||1),a()*.08,(a()-.5)*(e.d||1)).rotation.set(a()*.4,a()*3,a()*.4);for(let c=0;c<(e.poutres??3);c++)n(.08,.12,1.2+a()*1.5,on,(a()-.5)*(e.w||1),.05+a()*.2,(a()-.5)*(e.d||1)).rotation.set(a()*.5,a()*3,a()*.3);break}case"souche":n(e.w||.55,e.H||1.5,e.d||.55,"#b9a58c"),n((e.w||.55)+.1,.08,(e.d||.55)+.1,"#8d7c66",0,e.H||1.5,0);break;case"porteRoom":n(.9,2,.05,Pe("#b79d78",t));break;case"radiateur":n(.8,.6,.1,Pe("#efefef",t));break;case"chaise":n(.42,.04,.42,Pe("#8a6b4b",t),0,.45,0),n(.42,.45,.04,Pe("#8a6b4b",t),0,.45,-.19);for(let[a,o]of[[-.18,-.18],[.18,-.18],[-.18,.18],[.18,.18]])n(.03,.45,.03,"#444",a,0,o);break;case"fauteuil":{let a=Pe("#7d6a58",t);n(.85,.42,.85,a),n(.85,.45,.2,a,0,.42,-.32),n(.15,.25,.85,a,-.35,.42,0),n(.15,.25,.85,a,.35,.42,0);break}case"machineLaver":n(.6,.85,.6,Pe("#f2f2f2",t));break;case"chaudiere":n(.45,.75,.35,Pe("#eeeeee",t),0,1.1,0);break;case"poele":n(.5,.8,.45,Pe("#2b2b2b",t)),s(.07,.07,1.4,"#333",0,.8,-.1);break;case"trottinette":n(1,.05,.15,Pe("#333",t),0,.08,0),n(.04,1,.04,Pe("#444",t),.45,.1,0);break;case"voiture":{n(4.1,.75,1.75,Pe("#7a8794",t),0,.3,0),n(2.2,.55,1.6,Pe("#7a8794",t),-.2,1.05,0);for(let[a,o]of[[-1.3,-.8],[1.3,-.8],[-1.3,.8],[1.3,.8]]){let l=s(.32,.32,.22,"#1b1b1b",a,0,o,12);l.rotation.x=Math.PI/2,l.position.y=.32}break}default:n(.4,.4,.4,"#888")}return i.position.set(e.x||0,e.y||0,e.z||0),i.rotation.y=(e.rot||0)*Rr,i.userData.objet=e.id,i.userData.def=e,i}_buildFouille(e){if(this.fouille=e||null,!e){(!this.rubanFouille||this.rubanFouille.parent==null)&&(this.rubanFouille=null);return}let t=e.aire,i=[...e.couches].sort((o,l)=>l.n-o.n),n=.006+(t.y||0);for(let o of i){let l=new it,c=Ct(o.n*77),h=Math.round(t.w*t.d*26);for(let d=0;d<h;d++){let u=.12+c()*.3,p=.1+c()*.3,f=o.h*(.6+c()*.7),g=new Se(new Ke(u,f,p),Qe(Ii(o.couleur,c()<.5?"#000000":"#bbbbbb",c()*.3)));g.position.set(t.x+u/2+c()*(t.w-u),n+f/2,t.z+p/2+c()*(t.d-p)),g.rotation.y=c()*3,g.castShadow=!0,g.receiveShadow=!0,l.add(g)}l.userData.couche=o.n,this._g.add(l),this.fouilleMeshes.push(l),n+=o.h*.85}let s=[[t.x,t.z],[t.x+t.w,t.z],[t.x+t.w,t.z+t.d],[t.x,t.z+t.d],[t.x,t.z]].map(([o,l])=>new b(o,(t.y||0)+.03,l)),a=new Is(new qe().setFromPoints(s),new vr({color:"#ffcc00"}));a.visible=!1,this.rubanFouille=a,this._g.add(a),this.setFouille(0)}setFouille(e){if(!this.fouille)return;this.fouilleNiveau=e;for(let n of this.fouilleMeshes)n.visible=n.userData.couche>e;let t=this.fouille.aire,i=new b;this.root.traverse(n=>{n.userData.fouillable&&(n.getWorldPosition(i),i.x>=t.x-.05&&i.x<=t.x+t.w+.05&&i.z>=t.z-.05&&i.z<=t.z+t.d+.05&&(n.visible=e<2))})}montrerRubanFouille(e){this.rubanFouille&&(this.rubanFouille.visible=!!e)}setHotspots(e){for(let i of this.hotspots.values())this.root.remove(i.group);this.hotspots.clear();let t=new ni(vh());for(let i of e){let n=new it;n.position.set(i.pos[0],i.pos[1]+(i.alt||0),i.pos[2]);let s=new Se(new kn(i.rayon||.32,8,6),new Xt({visible:!1}));s.userData.hotspot=i.id,n.add(s);let a=new $i(new Li({map:t,transparent:!0,depthTest:!1,blending:js}));a.scale.set(.45,.45,1),a.visible=!1,a.renderOrder=10,n.add(a),this.root.add(n),this.hotspots.set(i.id,{...i,group:n,hit:s,lueur:a,sprite:null,state:{}}),n.visible=!1}}updateHotspot(e,t){let i=this.hotspots.get(e);if(!i)return;i.state={...i.state,...t};let n=i.state;if(i.hit.visible=!!n.actif,i.group.visible=(!!n.actif||!!n.toujours)&&this._nivOk(i.niv),i.lueur.visible=!!n.actif&&!!n.lueur&&!n.decouvert,n.decouvert){let s=`${n.num}|${!!n.photo}|${!!n.analyse}`;if(i._key!==s){i.sprite&&i.group.remove(i.sprite);let a=new ni(gh(n.num,n.photo,n.analyse));a.colorSpace=Je,i.sprite=new $i(new Li({map:a,depthTest:!1,transparent:!0})),i.sprite.scale.set(.34,.34,1),i.sprite.position.y=.26,i.sprite.renderOrder=20,i.group.add(i.sprite),i._key=s}i.sprite.visible=!0}else i.sprite&&(i.sprite.visible=!1)}setPhotos(e){for(let t of this.photos.values())this.overlay.remove(t.group);this.photos.clear();for(let t of e){let i=new it;i.position.set(t.pos[0],t.pos[1]+(t.alt||0),t.pos[2]);let n=document.createElement("canvas");n.width=n.height=96;let s=n.getContext("2d");s.fillStyle=t.couleur||"#1b6ef3",s.beginPath(),s.arc(48,48,40,0,7),s.fill(),s.strokeStyle="#fff",s.lineWidth=5,s.stroke(),s.font="44px system-ui",s.textAlign="center",s.textBaseline="middle",s.fillText("\u{1F4F7}",48,52);let a=new ni(n);a.colorSpace=Je;let o=new $i(new Li({map:a,depthTest:!1,transparent:!0}));o.scale.set(.38,.38,1),o.renderOrder=25,i.add(o);let l=(t.yaw||0)*Rr,c=new Se(new en(.22,.55,4,1,!0),new Xt({color:t.couleur||"#1b6ef3",transparent:!0,opacity:.35,side:ri,depthTest:!1}));c.rotation.set(-Math.PI/2,0,0),c.position.z=.3;let h=new it;h.rotation.y=l,h.add(c),i.add(h);let d=new Se(new kn(.25,8,6),new Xt({visible:!1}));d.userData.photo=t.id,i.add(d),this.overlay.add(i);let u={visible:t.visible!==!1};i.visible=u.visible&&this._nivOk(t.niv),this.photos.set(t.id,{...t,group:i,hit:d,state:u})}}setPhotoVisible(e,t){let i=this.photos.get(e);i&&(i.state.visible=t,i.group.visible=t&&this._nivOk(i.niv))}_info(e){this.raycaster.setFromCamera(this._ndc(e),this.camera);let t=new xt(new b(0,1,0),-this.planY),i=new b,n=this.raycaster.ray.intersectPlane(t,i),s=[...[...this.photos.values()].map(d=>d.group),...this.root.children],o=this.raycaster.intersectObjects(s,!0).filter(d=>this._visibleDeep(d.object)&&d.object.type!=="Line"&&this._visibleClip(d.point,d.object))[0]||null,l=null,c=o?.object;for(;c&&!l;)(c.userData?.objet||c.userData?.ouverture||c.userData?.photo||c.userData?.hotspot)&&(l=c),c=c.parent;let h=null;return o?.face&&(h=o.face.normal.clone().transformDirection(o.object.matrixWorld)),{e,plan:n?i:null,hit:o,objet:l,normal:h,shift:e.shiftKey}}_visibleDeep(e){for(;e;){if(!e.visible)return!1;e=e.parent}return!0}setFocus(e,t,i=!0){this.focus={zone:e,piece:t};let n=new b(...e?.cible||[this.centre.x,0,this.centre.z]),s=e?.zoom||.6,a=this.camera.position.clone().sub(this.controls.target);if(e?.azimut!=null){let o=Math.hypot(a.x,a.z),l=e.azimut*Rr;a=new b(Math.sin(l)*o,a.y,Math.cos(l)*o)}if(!i){this.controls.target.copy(n),this.camera.position.copy(n).add(a),this.camera.zoom=s,this.camera.updateProjectionMatrix(),this._cutDirty=!0;return}this._tween={t0:performance.now(),dur:650,fromT:this.controls.target.clone(),toT:n,fromZ:this.camera.zoom,toZ:s,off:a},this._cutDirty=!0}rotateView(e){let t=this.camera.position.clone().sub(this.controls.target);t.applyAxisAngle(new b(0,1,0),e*Rr),this.camera.position.copy(this.controls.target).add(t),this._cutDirty=!0}vueDessus(e){let i=this.camera.position.clone().sub(this.controls.target).length();e?(this.controls.minPolarAngle=0,this.camera.position.copy(this.controls.target).add(new b(.001,i,.001))):(this.controls.minPolarAngle=.35,this.camera.position.copy(this.controls.target).add(new b(i*.5,i*.6,i*.6))),this._cutDirty=!0}setPieceCoupe(e){this.focus={zone:this.focus?.zone||null,piece:e||null},this._cutDirty=!0}setModeMurs(e){this.modeMurs=e,this._cutDirty=!0}_updateCut(){let e=this.focus,t=this.camera.position.clone().sub(this.controls.target);t.y=0,t.normalize();let i=e?.piece?this._nivDePiece(e.piece):this.niveauVisible??null,n=this.modeMurs==="pleins"||!e||!e.piece;for(let s of this.walls){let a=99,o=s.alt+ip;if(i!=null&&s.niv<i)a=99;else if(this.modeMurs==="bas")a=o;else if(n)this.modeMurs!=="pleins"&&this.niveauVisible!=null&&s.niv===this.niveauVisible&&this.niveaux.length>1&&this.editeurCoupe&&(a=o);else{let l=s.rooms[e.piece];l?a=l.dot(t)>.12?99:o:a=o}s.plane.constant=a}}_nivDePiece(e){let t=this.niveaux?.findIndex(i=>i.pieces.some(n=>n.id===e));return t<0?0:t}_ndc(e){let t=this.renderer.domElement.getBoundingClientRect();return new te((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}_click(e){if(!this.onPick)return;this.raycaster.setFromCamera(this._ndc(e),this.camera);let t=[...this.hotspots.values()].filter(o=>o.state.actif).map(o=>o.hit),i=this.raycaster.intersectObjects(t,!1).filter(o=>this._visibleDeep(o.object)),n=this.raycaster.intersectObjects([...this.photos.values()].filter(o=>o.group.visible).map(o=>o.hit),!1);if(n[0]&&(!i[0]||n[0].distance<=i[0].distance)){this.onPick({photo:n[0].object.userData.photo});return}let s=this.raycaster.intersectObjects(this.root.children,!0).filter(o=>this._visibleDeep(o.object)&&!o.object.userData.hotspot&&o.object.type==="Mesh"&&this._visibleClip(o.point,o.object)),a=s[0]?.point||null;this.onPick({hotspot:i[0]?.object.userData.hotspot||null,point:a,sol:s[0]?.object.userData.sol||null})}_visibleClip(e,t){let n=(Array.isArray(t.material)?t.material[0]:t.material)?.clippingPlanes?.[0];return!n||n.distanceToPoint(e)>=0}_hover(e){if(!this.hotspots.size)return;this.raycaster.setFromCamera(this._ndc(e),this.camera);let t=[...this.hotspots.values()].filter(n=>n.state.actif&&n.state.decouvert).map(n=>n.hit),i=this.raycaster.intersectObjects(t,!1)[0];this.renderer.domElement.style.cursor=i?"pointer":this.curseur||"crosshair"}capture(e=420){this.renderer.render(this.scene,this.camera);let t=this.renderer.domElement,i=document.createElement("canvas");return i.width=e,i.height=Math.round(e*t.height/t.width),i.getContext("2d").drawImage(t,0,0,i.width,i.height),i.toDataURL("image/jpeg",.78)}_buildFireRig(e,t){let i=e.altitude||0;for(let a of e.pieces){let o=new Se(new Ke(a.w-.02,1,a.d-.02),new Xt({color:"#100c0a",transparent:!0,opacity:.55,depthWrite:!1}));o.position.set(a.x+a.w/2,i+t,a.z+a.d/2),o.visible=!1,o.renderOrder=5,o.userData.H=t,o.userData.alt=i,this.root.add(o),this.smoke[a.id]=o;let l=new Se(new Ke(a.w-.05,t-.05,a.d-.05),new Xt({color:"#ff6a1a",transparent:!0,opacity:0,depthWrite:!1,blending:js}));l.position.set(a.x+a.w/2,i+t/2,a.z+a.d/2),l.visible=!1,l.renderOrder=6,this.root.add(l),this.flash[a.id]=l}if(this.feu&&this.feu.parent)return;this.feu=new it;let n=new ni(_h());this.flammes=[];for(let a=0;a<7;a++){let o=new $i(new Li({map:n,transparent:!0,depthWrite:!1,blending:js}));o.userData.ph=Math.random()*6,o.userData.dx=(Math.random()-.5)*.5,o.userData.dz=(Math.random()-.5)*.5,this.feu.add(o),this.flammes.push(o)}this.feuLight=new Gs("#ff8a3a",0,9,1.6),this.feu.add(this.feuLight),this.feu.visible=!1,this.root.add(this.feu);let s=new Se(new Sr(.28,.36,32),new Xt({color:"#ff2d2d",side:ri,depthTest:!1,transparent:!0}));s.rotation.x=-Math.PI/2,s.renderOrder=30,s.visible=!1,this.origineMarqueur=s,this.root.add(s)}setOrigineMarqueur(e){if(!e){this.origineMarqueur.visible=!1;return}this.origineMarqueur.position.set(e[0],(e.alt||0)+.04,e[2]),this.origineMarqueur.visible=!0}setReconstitution(e,t,i){if(!e){this.feu.visible=!1;for(let u in this.smoke)this.smoke[u].visible=!1,this.flash[u].visible=!1;this.hemi.intensity=1.15,this.sun.intensity=1.35,this.recon=null;return}let n=e.length-1,s=Math.max(0,Math.min(n,i)),a=Math.min(n-1,Math.floor(s)),o=s-a,l=e[a],c=e[Math.min(n,a+1)],h=(u,p)=>u+(p-u)*o,d=h(l.feu||0,c.feu||0);this.recon={feu:d},this.hemi.intensity=.55,this.sun.intensity=.4,this.feu.visible=d>.01,this.feu.position.set(t[0],t.alt||0,t[2]),this.feuLight.intensity=6*d;for(let u in this.smoke){let p=h(l.fumee?.[u]||0,c.fumee?.[u]||0),f=this.smoke[u];f.visible=p>.01;let g=f.userData.H||this.H;f.scale.y=p*g,f.position.y=(f.userData.alt||0)+g-p*g/2;let m=s>=a&&(l.flash||[]).includes(u)?o<.5||(c.flash||[]).includes(u)?1:1-(o-.5)*2:(c.flash||[]).includes(u)?o:0;this.flash[u].visible=m>.01,this.flash[u].material.opacity=.32*m}}_loop(){this._raf=requestAnimationFrame(this._loop);let e=performance.now();if(this._tween){let i=this._tween,n=Math.min(1,(e-i.t0)/i.dur),s=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;this.controls.target.lerpVectors(i.fromT,i.toT,s),this.camera.position.copy(this.controls.target).add(i.off),this.camera.zoom=i.fromZ+(i.toZ-i.fromZ)*s,this.camera.updateProjectionMatrix(),this._cutDirty=!0,n>=1&&(this._tween=null)}this.controls.update(),this._cutDirty&&(this._updateCut(),this._cutDirty=!1);let t=this.clock.getElapsedTime();for(let i of this.hotspots.values())if(i.lueur.visible){let n=.3+.18*Math.sin(t*3+i.pos[0]);i.lueur.scale.set(n,n,1)}if(this.feu?.visible&&this.recon){let i=this.recon.feu;this.flammes.forEach((n,s)=>{let a=.85+.25*Math.sin(t*9+n.userData.ph),o=(.35+1.6*i)*a;n.scale.set(o*.55,o,1),n.position.set(n.userData.dx*(.3+i),o/2,n.userData.dz*(.3+i))}),this.feuLight.position.set(0,.8,0)}this.origineMarqueur?.visible&&(this.origineMarqueur.material.opacity=.6+.4*Math.sin(t*4)),this.renderer.render(this.scene,this.camera)}};function yh(r){let e=r.batiment||(r.batiment={});e.niveaux?.length||(e.niveaux=yi(e).map(i=>({...i})),delete e.pieces,delete e.ouvertures,delete e.objets,delete e.traces);for(let i of e.niveaux)i.pieces||=[],i.ouvertures||=[],i.objets||=[],i.traces||=[],i.tremies||=[],i.hauteur||=e.hauteur||2.5,i.altitude||=0;let t=e.niveaux[0].id;for(let i of r.observations||[])i.niveau||=t;for(let i of r.photos||[])i.niveau||=t;for(let i of r.hypotheses?.origines||[])i.niveau||=t;return r.fouille&&(r.fouille.niveau||=t),r.photos||=[],r.medias||={},r}var xh="NFPA 921 \u2014 \xE9dition 2011";var Mh=[{id:"accidentelle",nom:"Accidentelle",ref:"19.2.1.1"},{id:"naturelle",nom:"Naturelle",ref:"19.2.1.2"},{id:"volontaire",nom:"Volontaire (incendiary)",ref:"19.2.1.3"},{id:"indeterminee",nom:"Ind\xE9termin\xE9e",ref:"19.2.1.4"},{id:"suspecte",nom:"Suspecte",ref:"19.2.1",piege:!0}],bh=[{id:"probable",nom:"Probable (> 50 %)",ref:"4.5.1"},{id:"possible",nom:"Possible",ref:"4.5.1"},{id:"suspecte",nom:"Suspect\xE9e",ref:"4.5.2",piege:!0}];var mt=(r,e=document)=>e.querySelector(r),jn=(r,e=document)=>[...e.querySelectorAll(r)];function ye(r){return String(r??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ea(r){let e=document.createElement("template");return e.innerHTML=r.trim(),e.content.firstElementChild}function Sh({titre:r,corps:e,actions:t=[],large:i=!1,onClose:n,classe:s=""}){let a=mt("#modal-root"),o=ea(`<div class="modal-bg"><div class="modal ${i?"modal-large":""} ${s}" role="dialog" aria-modal="true">
    <header class="modal-h"><h2>${r}</h2><button class="btn-x" aria-label="Fermer">\u2715</button></header>
    <div class="modal-b"></div>
    <footer class="modal-f"></footer></div></div>`),l=mt(".modal-b",o);typeof e=="string"?l.innerHTML=e:e&&l.appendChild(e);let c=mt(".modal-f",o),h=()=>{o.remove(),n&&n()};for(let d of t){let u=ea(`<button class="btn ${d.classe||""}">${d.label}</button>`);u.onclick=()=>{(d.onClick?d.onClick(o):void 0)!==!1&&h()},c.appendChild(u)}return t.length||c.remove(),mt(".btn-x",o).onclick=h,o.addEventListener("mousedown",d=>{d.target===o&&h()}),a.appendChild(o),{el:o,close:h,body:l}}function np(r){let e=new Map;(r.observations||[]).forEach((t,i)=>e.set(t.id,{n:i+1,court:`Constat ${i+1} \u2014 ${t.titre}`,type:"constat"}));for(let t of r.temoins||[])for(let i of t.questions||[])i.fait?.id&&e.set(i.fait.id,{court:`${t.nom} : ${i.fait.texte}`,type:"temoin",contamine:i.fait.contamine});for(let t of r.osint||[])t.fait?.id&&e.set(t.fait.id,{court:t.fait.texte,type:"osint"});for(let t of r.prelevements||[])for(let i of t.analyses||[]){let n=i.resultats?.ok;n?.fait&&e.set(n.fait,{court:`${i.nom} : ${n.texte}`,type:"labo"})}return e}function Eh(r,e,t={}){let i=yh(structuredClone(r)),n=i.batiment,s=i.retex||{},a=i.solution||{},o=np(i),l=S=>i.hypotheses?.origines?.find(L=>L.id===S),c=S=>i.hypotheses?.causes?.find(L=>L.id===S),h=S=>S.lecture||S.analyse?.options?.find(L=>L.ok)?.t||"",d=S=>(i.photos||[]).filter(L=>L.constat===S&&i.medias?.[L.media]),u=yi(n),p=bh.find(S=>S.id===a.certitude)?.nom||a.certitude||"\u2014",f=Mh.find(S=>S.id===a.classification)?.nom||a.classification||"\u2014",g=S=>(S||[]).map(L=>o.get(L)?.court||L).map(L=>`<li>${ye(L)}</li>`).join(""),m=ea(`<div class="ana">
    <section class="ana-3d">
      <div class="ov ov-zone"><h3>${ye(i.titre)}</h3><div class="muted small">Cliquez sur un cavalier ou un appareil photo.</div></div>
      <div class="ov ov-view">
        ${u.length>1?`<select class="btn btn-sm" data-niv><option value="">Tous niveaux</option>${u.map((S,L)=>`<option value="${L}">${ye(S.nom)}</option>`).join("")}</select>`:""}
        <button class="btn btn-sm" data-v="rotg">\u27F2</button><button class="btn btn-sm" data-v="rotd">\u27F3</button>
        <button class="btn btn-sm" data-v="murs">\u{1F9F1} Murs : bas</button>
      </div>
      ${i.reconstitution?.length>1?`<div class="ov ov-recon"><button class="btn btn-sm" data-play>\u25B6</button><input type="range" min="0" max="${i.reconstitution.length-1}" step="0.01" value="0"><div class="lbl small muted">Reconstitution : faites glisser le curseur.</div></div>`:""}
    </section>
    <section class="ana-doc">
      <div class="ana-bar">${t.onClose?'<button class="btn btn-sm" data-close>\u27F5 Retour</button>':""}<span class="chip">${i.mode==="retex"?"Dossier RETEX":"Dossier d'analyse"}</span><span style="flex:1"></span><button class="btn btn-sm" data-print>\u{1F5A8}\uFE0F Imprimer / PDF</button></div>
      <div class="ana-nav">${["synthese:Synth\xE8se","contexte:Contexte","chrono:Chronologie","constats:Constatations","photos:Photos","labo:Analyses","temoins:D\xE9clarations","hyp:Hypoth\xE8ses","retex:Enseignements"].map(S=>{let[L,R]=S.split(":");return`<a href="#a-${L}" data-nav="${L}">${R}</a>`}).join("")}</div>
      <article class="rapport-doc ana-article">
        <h1>${ye(i.titre)}</h1>
        <p class="small">${ye([s.auteur&&`R\xE9dig\xE9 par ${s.auteur}`,s.service,s.date].filter(Boolean).join(" \xB7 "))}${s.confidentialite?`<br><b>${ye(s.confidentialite)}</b>`:""}</p>

        <h2 id="a-synthese">Synth\xE8se</h2>
        ${s.resume||i.resume?`<p>${ye(s.resume||i.resume)}</p>`:""}
        <table>
          <tr><th style="width:190px">Zone d'origine</th><td>${ye(l(a.origine)?.nom||"Non d\xE9termin\xE9e")}</td></tr>
          <tr><th>Premier combustible</th><td>${ye(c(a.cause)?.premierCombustible||"\u2014")}</td></tr>
          <tr><th>Source d'ignition</th><td>${ye(c(a.cause)?.source||"\u2014")}</td></tr>
          <tr><th>Cause / s\xE9quence</th><td>${ye(c(a.cause)?.nom||"Ind\xE9termin\xE9e")}</td></tr>
          <tr><th>Niveau de certitude</th><td>${ye(p)}</td></tr>
          <tr><th>Classification</th><td>${ye(f)}</td></tr>
        </table>
        ${a.faitsCles?.length?`<p><b>\xC9l\xE9ments d\xE9terminants :</b></p><ul>${g(a.faitsCles)}</ul>`:""}

        <h2 id="a-contexte">Contexte et mission</h2>
        ${s.contexte?`<p>${ye(s.contexte).replace(/\n/g,"<br>")}</p>`:""}
        <p>${ye(i.mission?.ordre||"")}</p>
        <p class="small">${[["Sinistre",i.mission?.dateSinistre],["Alerte",i.mission?.heureAlerte],["Lieu",s.lieuPublic||i.mission?.adresse],["Pr\xE9servation",i.mission?.preservation],["M\xE9t\xE9o",i.meteo]].filter(S=>S[1]).map(([S,L])=>`<b>${S} :</b> ${ye(L)}`).join("<br>")}</p>
        ${(i.rapportSdis||[]).length?`<p><b>Intervention des secours</b></p><ul>${i.rapportSdis.map(S=>`<li>${ye(S)}</li>`).join("")}</ul>`:""}

        <h2 id="a-chrono">Chronologie</h2>
        <table>${(i.reconstitution||[]).map((S,L)=>`<tr data-etape="${L}" style="cursor:pointer"><td style="width:70px"><b>${ye(S.t)}</b></td><td>${ye(S.titre)}</td></tr>`).join("")}</table>

        <h2 id="a-constats">Constatations</h2>
        ${(i.zones||[]).map(S=>{let L=i.observations.filter(R=>R.zone===S.id);return L.length?`<h3 class="ana-z">${ye(S.nom)}</h3>${L.map(R=>{let z=i.observations.indexOf(R)+1;return`<div class="ana-c" id="c-${ye(R.id)}" data-obs="${ye(R.id)}">
          <div class="ana-ch"><span class="cav">${z}</span><b>${ye(R.titre)}</b>${R.analyse?.ref||R.ref?`<span class="small"> \xB7 NFPA ${ye(R.ref||R.analyse.ref)}</span>`:""}</div>
          <p>${ye(R.description)}</p>${h(R)?`<p><i>Analyse :</i> ${ye(h(R))}</p>`:""}
          ${d(R.id).length?`<div class="ph">${d(R.id).map(B=>`<figure><img src="${i.medias[B.media]}" data-ph="${ye(B.id)}" alt=""><figcaption>${ye(B.titre||"")}</figcaption></figure>`).join("")}</div>`:""}
        </div>`}).join("")}`:""}).join("")}
        ${i.observations.filter(S=>!(i.zones||[]).some(L=>L.id===S.zone)).map(S=>`<div class="ana-c" id="c-${ye(S.id)}" data-obs="${ye(S.id)}"><b>${ye(S.titre)}</b><p>${ye(S.description)}</p></div>`).join("")}

        <h2 id="a-photos">Planche photographique</h2>
        ${(i.photos||[]).filter(S=>i.medias?.[S.media]).length?`<div class="ph">${i.photos.filter(S=>i.medias?.[S.media]).map((S,L)=>`<figure><img src="${i.medias[S.media]}" data-ph="${ye(S.id)}" alt=""><figcaption><b>Photo ${L+1}</b> \u2014 ${ye(S.titre||"")}${S.legende?`<br>${ye(S.legende)}`:""}</figcaption></figure>`).join("")}</div>`:"<p>Aucune photo jointe.</p>"}

        <h2 id="a-labo">Pr\xE9l\xE8vements et analyses</h2>
        ${(i.prelevements||[]).length?`<table><tr><th>Pr\xE9l\xE8vement</th><th>Analyse</th><th>R\xE9sultat</th></tr>${i.prelevements.flatMap(S=>(S.analyses||[]).map(L=>`<tr><td>${ye(S.nom)}</td><td>${ye(L.nom)}</td><td>${ye(L.resultats?.ok?.texte||"")}</td></tr>`)).join("")}</table>`:"<p>Aucun pr\xE9l\xE8vement.</p>"}

        <h2 id="a-temoins">D\xE9clarations et sources</h2>
        ${(i.temoins||[]).map(S=>{let L=(S.questions||[]).filter(R=>R.type!=="orientee");return L.length?`<p><b>${ye(S.nom)}</b> <span class="small">${ye(S.role||"")}</span></p><ul>${L.map(R=>`<li><i>${ye(R.q)}</i><br>${ye(R.r)}</li>`).join("")}</ul>`:""}).join("")||"<p>Aucune d\xE9claration.</p>"}
        ${(i.osint||[]).length?`<p><b>Sources ouvertes</b></p><ul>${i.osint.map(S=>`<li><b>${ye(S.titre)}</b> \u2014 ${ye(S.extrait)} <span class="small">(${ye(S.fiabilite||"")})</span></li>`).join("")}</ul>`:""}

        <h2 id="a-hyp">Hypoth\xE8ses et tests</h2>
        ${["origines","causes"].map(S=>(i.hypotheses?.[S]||[]).length?`<h3 class="ana-z">${S==="origines"?"Origine":"Cause"}</h3><table><tr><th>Hypoth\xE8se</th><th style="width:90px">Statut</th><th>Donn\xE9es</th></tr>${i.hypotheses[S].map(L=>{let R=L.id===(S==="origines"?a.origine:a.cause);return`<tr><td>${ye(L.nom)}</td><td><b>${R?"RETENUE":"\xE9cart\xE9e"}</b></td><td>${R?`<ul>${g(L.soutien)}</ul>`:L.refute?.length?`<i>R\xE9fut\xE9e par :</i><ul>${g(L.refute)}</ul>`:"\u2014"}</td></tr>`}).join("")}</table>`:"").join("")}

        <h2 id="a-retex">Enseignements</h2>
        ${[["Enseignements",s.enseignements],["Points positifs",s.positifs],["Axes d'am\xE9lioration",s.ameliorations],["Recommandations (pr\xE9vention)",s.recommandations]].filter(S=>S[1]?.length).map(([S,L])=>`<p><b>${S}</b></p><ul>${L.map(R=>`<li>${ye(R)}</li>`).join("")}</ul>`).join("")||"<p>\u2014</p>"}
        <p class="small" style="margin-top:20px;color:#666">M\xE9thodologie : ${xh} (recherche des causes et circonstances d'incendie, m\xE9thode scientifique). Document g\xE9n\xE9r\xE9 avec \xAB RCCI \xB7 L'Enqu\xEAteur \xBB.</p>
      </article>
    </section>
  </div>`);e.innerHTML="",e.appendChild(m);let y=new Qs(mt(".ana-3d",m));y.load(i),y.setModeMurs("bas"),y.setHotspots(i.observations.map(S=>({id:S.id,pos:S.pos,alt:Xn(n,S.niveau),niv:Wn(n,S.niveau)}))),i.observations.forEach((S,L)=>y.updateHotspot(S.id,{actif:!0,decouvert:!0,num:L+1,toujours:!0,analyse:!0})),y.setPhotos((i.photos||[]).map(S=>({id:S.id,pos:S.pos,yaw:S.yaw,alt:Xn(n,S.niveau),niv:Wn(n,S.niveau)})));let v=l(a.origine),_=v?Object.assign([...v.pos],{alt:Xn(n,v.niveau)}):null;_&&y.setOrigineMarqueur(_);let E=S=>{let L=i.photos.find(R=>R.id===S);L&&Sh({titre:`\u{1F4F7} ${ye(L.titre||"Photo")}`,large:!0,corps:`${i.medias?.[L.media]?`<img src="${i.medias[L.media]}" alt="" style="width:100%;border-radius:8px">`:""}<p style="margin-top:8px">${ye(L.legende||"")}</p><p class="small muted">${ye([L.date,L.auteur].filter(Boolean).join(" \xB7 "))}${L.constat&&o.get(L.constat)?` \xB7 ${ye(o.get(L.constat).court)}`:""}</p>`,actions:[{label:"Fermer"}]})},P=mt(".ana-doc",m),x=S=>{let L=mt(`#c-${CSS.escape(S)}`,m);L&&(jn(".ana-c.on",m).forEach(R=>R.classList.remove("on")),L.classList.add("on"),P.scrollTo({top:L.offsetTop-90,behavior:"smooth"}))};y.onPick=S=>{S.photo?E(S.photo):S.hotspot&&x(S.hotspot)},jn("[data-ph]",m).forEach(S=>S.onclick=()=>E(S.dataset.ph)),jn("[data-obs]",m).forEach(S=>S.querySelector(".ana-ch")?.addEventListener("click",()=>{let L=i.observations.find(z=>z.id===S.dataset.obs),R=Wn(n,L.niveau);y.setNiveauVisible(u.length>1?R:null),y.setFocus({cible:[L.pos[0],Xn(n,L.niveau),L.pos[2]],zoom:1.8},null)})),jn("[data-nav]",m).forEach(S=>S.onclick=L=>{L.preventDefault();let R=mt(`#a-${S.dataset.nav}`,m);P.scrollTo({top:R.offsetTop-90,behavior:"smooth"})}),mt("[data-print]",m).onclick=()=>window.print(),mt("[data-close]",m)?.addEventListener("click",()=>{y.dispose(),t.onClose()}),mt("[data-niv]",m)?.addEventListener("change",S=>y.setNiveauVisible(S.target.value===""?null:+S.target.value));let T=["bas","auto","pleins"],D=0;mt(".ov-view",m).addEventListener("click",S=>{let L=S.target.closest("[data-v]")?.dataset.v;L==="rotg"&&y.rotateView(-45),L==="rotd"&&y.rotateView(45),L==="murs"&&(D=(D+1)%3,y.setModeMurs(T[D]),S.target.textContent=`\u{1F9F1} Murs : ${T[D]}`)});let I=mt(".ov-recon input",m);if(I&&_){let S=mt(".ov-recon .lbl",m),L=()=>{let z=+I.value,B=i.reconstitution[Math.round(z)];y.setReconstitution(i.reconstitution,_,z),S.innerHTML=`<span class="t">${ye(B.t)}</span>${ye(B.titre)}`};I.oninput=L;let R=null;mt("[data-play]",m).onclick=()=>{if(R){cancelAnimationFrame(R),R=null;return}+I.value>=+I.max&&(I.value=0);let z=performance.now(),B=re=>{I.value=Math.min(+I.max,+I.value+(re-z)/1600),z=re,L(),R=+I.value<+I.max?requestAnimationFrame(B):null};R=requestAnimationFrame(B)},jn("[data-etape]",m).forEach(z=>z.onclick=()=>{I.value=z.dataset.etape,L()})}return{dispose:()=>y.dispose()}}var el=window.__RETEX__;document.title=el?.titre?`RETEX \xB7 ${el.titre}`:"Dossier RETEX";Eh(el,document.getElementById("screen"),{standalone:!0});})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
