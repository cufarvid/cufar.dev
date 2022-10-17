var cu=Object.defineProperty;var uu=(o,e,t)=>e in o?cu(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var Mt=(o,e,t)=>(uu(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function gn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function zl(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ct={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vi={duration:.5,overwrite:!1,delay:0},Fa,jt,Ze,Ot=1e8,ze=1/Ot,ha=Math.PI*2,hu=ha/4,fu=0,Nl=Math.sqrt,du=Math.cos,pu=Math.sin,tt=function(e){return typeof e=="string"},We=function(e){return typeof e=="function"},bn=function(e){return typeof e=="number"},za=function(e){return typeof e>"u"},ln=function(e){return typeof e=="object"},gt=function(e){return e!==!1},Ol=function(){return typeof window<"u"},Dr=function(e){return We(e)||tt(e)},Ul=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ct=Array.isArray,fa=/(?:-?\.?\d|\.)+/gi,Bl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bs=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kl=/[+-]=-?[.\d]+/,Gl=/[^,'"\[\]\s]+/gi,mu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Ft,da,Na,At={},is={},Vl,Wl=function(e){return(is=ui(e,At))&&Lt},Oa=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rs=function(e,t){return!t&&console.warn(e)},Hl=function(e,t){return e&&(At[e]=t)&&is&&(is[e]=t)||At},gr=function(){return 0},gu={suppressEvents:!0,isStart:!0},fr={suppressEvents:!0},Ua={},Un=[],pa={},ql,wt={},ws={},so=30,Qr=[],Ba="",ka=function(e){var t=e[0],n,i;if(ln(t)||We(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Qr.length;i--&&!Qr[i].targetTest(t););n=Qr[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new dc(e[i],n)))||e.splice(i,1);return e},si=function(e){return e._gsap||ka(Ut(e))[0]._gsap},Xl=function(e,t,n){return(n=e[t])&&We(n)?e[t]():za(n)&&e.getAttribute&&e.getAttribute(t)||n},_t=function(e,t){return(e=e.split(",")).forEach(t)||e},Xe=function(e){return Math.round(e*1e5)/1e5||0},rt=function(e){return Math.round(e*1e7)/1e7||0},Oi=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},_u=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ss=function(){var e=Un.length,t=Un.slice(0),n,i;for(pa={},Un.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yl=function(e,t,n,i){Un.length&&ss(),e.render(t,n,i||jt),Un.length&&ss()},jl=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Gl).length<2?t:tt(e)?e.trim():e},Zl=function(e){return e},Gt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xu=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ui=function(e,t){for(var n in t)e[n]=t[n];return e},ao=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ln(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},as=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},dr=function(e){var t=e.parent||Ue,n=e.keyframes?xu(ct(e.keyframes)):Gt;if(gt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},vu=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$l=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},fs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},wn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ai=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},yu=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ma=function(e,t,n,i){return e._startAt&&(jt?e._startAt.revert(fr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Mu=function o(e){return!e||e._ts&&o(e.parent)},oo=function(e){return e._repeat?Wi(e._tTime,e=e.duration()+e._rDelay)*e:0},Wi=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},os=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ds=function(e){return e._end=rt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ze)||0))},ps=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ds(e),n._dirty||ai(n,e)),e},Kl=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=os(e.rawTime(),t),(!t._dur||Tr(0,t.totalDuration(),n)-t._tTime>ze)&&t.render(n,!0)),ai(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ze}},tn=function(e,t,n,i){return t.parent&&wn(t),t._start=rt((bn(n)?n:n||e!==Ue?It(e,n,t):e._time)+t._delay),t._end=rt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$l(e,t,"_first","_last",e._sort?"_start":0),ga(t)||(e._recent=t),i||Kl(e,t),e._ts<0&&ps(e,e._tTime),e},Jl=function(e,t){return(At.ScrollTrigger||Oa("scrollTrigger",t))&&At.ScrollTrigger.create(t,e)},Ql=function(e,t,n,i){if(Va(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ql!==Et.frame)return Un.push(e),e._lazy=[t,i],1},Su=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},ga=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bu=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Su(e)&&!(!e._initted&&ga(e))||(e._ts<0||e._dp._ts<0)&&!ga(e))?0:1,s=e._rDelay,c=0,l,u,f;if(s&&e._repeat&&(c=Tr(0,e._tDur,t),u=Wi(c,s),e._yoyo&&u&1&&(a=1-a),u!==Wi(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||jt||i||e._zTime===ze||!t&&e._zTime){if(!e._initted&&Ql(e,t,i,n))return;for(f=e._zTime,e._zTime=t||(n?ze:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&ma(e,t,n,!0),e._onUpdate&&!n&&Bt(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Bt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&wn(e,1),n||(Bt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wu=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Hi=function(e,t,n,i){var r=e._repeat,a=rt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:rt(a*(r+1)+e._rDelay*r):a,s>0&&!i?ps(e,e._tTime=e._tDur*s):e.parent&&ds(e),n||ai(e.parent,e),e},lo=function(e){return e instanceof mt?ai(e):Hi(e,e._dur)},Tu={_start:0,endTime:gr,totalDuration:gr},It=function o(e,t,n){var i=e.labels,r=e._recent||Tu,a=e.duration()>=Ot?r.endTime(!1):e._dur,s,c,l;return tt(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",s=t.indexOf("="),c==="<"||c===">"?(s>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(s-1)+t.substr(s+1)),l&&n&&(c=c/100*(ct(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+c:a+c)):t==null?a:+t},pr=function(e,t,n){var i=bn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=gt(c.vars.inherit)&&c.parent;a.immediateRender=gt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new Ke(t[0],a,t[r+1])},Wn=function(e,t){return e||e===0?t(e):t},Tr=function(e,t,n){return n<e?e:n>t?t:n},lt=function(e,t){return!tt(e)||!(t=mu.exec(e))?"":t[1]},Eu=function(e,t,n){return Wn(n,function(i){return Tr(e,t,i)})},_a=[].slice,ec=function(e,t){return e&&ln(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ln(e[0]))&&!e.nodeType&&e!==Ft},Cu=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return tt(i)&&!t||ec(i,1)?(r=n).push.apply(r,Ut(i)):n.push(i)})||n},Ut=function(e,t,n){return Ze&&!t&&Ze.selector?Ze.selector(e):tt(e)&&!n&&(da||!qi())?_a.call((t||Na).querySelectorAll(e),0):ct(e)?Cu(e,n):ec(e)?_a.call(e,0):e?[e]:[]},xa=function(e){return e=Ut(e)[0]||rs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ut(t,n.querySelectorAll?n:n===e?rs("Invalid scope")||Na.createElement("div"):e)}},tc=function(e){return e.sort(function(){return .5-Math.random()})},nc=function(e){if(We(e))return e;var t=ln(e)?e:{each:e},n=oi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=t.axis,u=i,f=i;return tt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(u=i[0],f=i[1]),function(h,m,g){var d=(g||t).length,p=a[d],x,v,S,M,y,E,A,_,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,Ot])[1],!b){for(A=-Ot;A<(A=g[b++].getBoundingClientRect().left)&&b<d;);b--}for(p=a[d]=[],x=c?Math.min(b,d)*u-.5:i%b,v=b===Ot?0:c?d*f/b-.5:i/b|0,A=0,_=Ot,E=0;E<d;E++)S=E%b-x,M=v-(E/b|0),p[E]=y=l?Math.abs(l==="y"?M:S):Nl(S*S+M*M),y>A&&(A=y),y<_&&(_=y);i==="random"&&tc(p),p.max=A-_,p.min=_,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(b>d?d-1:l?l==="y"?d/b:b:Math.max(b,d/b))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=lt(t.amount||t.each)||0,n=n&&d<0?uc(n):n}return d=(p[h]-p.min)/p.max||0,rt(p.b+(n?n(d):d)*p.v)+p.u}},va=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=rt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(bn(n)?0:lt(n))}},ic=function(e,t){var n=ct(e),i,r;return!n&&ln(e)&&(i=n=e.radius||Ot,e.values?(e=Ut(e.values),(r=!bn(e[0]))&&(i*=i)):e=va(e.increment)),Wn(t,n?We(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Ot,u=0,f=e.length,h,m;f--;)r?(h=e[f].x-s,m=e[f].y-c,h=h*h+m*m):h=Math.abs(e[f]-s),h<l&&(l=h,u=f);return u=!i||l<=i?e[u]:a,r||u===a||bn(a)?u:u+lt(a)}:va(e))},rc=function(e,t,n,i){return Wn(ct(e)?!t:n===!0?!!(n=0):!i,function(){return ct(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Au=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Lu=function(e,t){return function(n){return e(parseFloat(n))+(t||lt(n))}},Pu=function(e,t,n){return ac(e,t,0,1,n)},sc=function(e,t,n){return Wn(n,function(i){return e[~~t(i)]})},Du=function o(e,t,n){var i=t-e;return ct(e)?sc(e,o(0,e.length),t):Wn(n,function(r){return(i+(r-e)%i)%i+e})},Ru=function o(e,t,n){var i=t-e,r=i*2;return ct(e)?sc(e,o(0,e.length-1),t):Wn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},_r=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Gl:fa),n+=e.substr(t,i-t)+rc(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},ac=function(e,t,n,i,r){var a=t-e,s=i-n;return Wn(r,function(c){return n+((c-e)/a*s||0)})},Iu=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=tt(e),s={},c,l,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(ct(e)&&!ct(t)){for(u=[],f=e.length,h=f-2,l=1;l<f;l++)u.push(o(e[l-1],e[l]));f--,r=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=ui(ct(e)?[]:{},e));if(!u){for(c in t)Ga.call(s,e,c,"get",t[c]);r=function(g){return qa(g,s)||(a?e.p:e)}}}return Wn(n,r)},co=function(e,t,n){var i=e.labels,r=Ot,a,s,c;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},Bt=function(e,t,n){var i=e.vars,r=i[t],a=Ze,s=e._ctx,c,l,u;if(!!r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Un.length&&ss(),s&&(Ze=s),u=c?r.apply(l,c):r.call(l),Ze=a,u},lr=function(e){return wn(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Bt(e,"onInterrupt"),e},zi,Fu=function(e){e=!e.name&&e.default||e;var t=e.name,n=We(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:gr,render:qa,add:Ga,kill:$u,modifier:Zu,rawVars:0},a={targetTest:0,get:0,getSetter:Ha,aliases:{},register:0};if(qi(),e!==i){if(wt[t])return;Gt(i,Gt(as(e,r),a)),ui(i.prototype,ui(r,as(e,a))),wt[i.prop=t]=i,e.targetTest&&(Qr.push(i),Ua[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hl(t,i),e.register&&e.register(Lt,i,xt)},Fe=255,cr={aqua:[0,Fe,Fe],lime:[0,Fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Fe],navy:[0,0,128],white:[Fe,Fe,Fe],olive:[128,128,0],yellow:[Fe,Fe,0],orange:[Fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Fe,0,0],pink:[Fe,192,203],cyan:[0,Fe,Fe],transparent:[Fe,Fe,Fe,0]},Ts=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Fe+.5|0},oc=function(e,t,n){var i=e?bn(e)?[e>>16,e>>8&Fe,e&Fe]:0:cr.black,r,a,s,c,l,u,f,h,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),cr[e])i=cr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Fe,i&Fe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Fe,e&Fe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(fa),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ts(c+1/3,r,a),i[1]=Ts(c,r,a),i[2]=Ts(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Bl),n&&i.length<4&&(i[3]=1),i}else i=e.match(fa)||cr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Fe,a=i[1]/Fe,s=i[2]/Fe,f=Math.max(r,a,s),h=Math.min(r,a,s),u=(f+h)/2,f===h?c=l=0:(m=f-h,l=u>.5?m/(2-f-h):m/(f+h),c=f===r?(a-s)/m+(a<s?6:0):f===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lc=function(e){var t=[],n=[],i=-1;return e.split(Bn).forEach(function(r){var a=r.match(Fi)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},uo=function(e,t,n){var i="",r=(e+i).match(Bn),a=t?"hsla(":"rgba(",s=0,c,l,u,f;if(!r)return e;if(r=r.map(function(h){return(h=oc(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=lc(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Bn,"1").split(Fi),f=l.length-1;s<f;s++)i+=l[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Bn),f=l.length-1;s<f;s++)i+=l[s]+r[s];return i+l[f]},Bn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in cr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),zu=/hsl[a]?\(/,cc=function(e){var t=e.join(" "),n;if(Bn.lastIndex=0,Bn.test(t))return n=zu.test(t),e[1]=uo(e[1],n),e[0]=uo(e[0],n,lc(e[1])),!0},xr,Et=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,l,u,f,h,m,g=function d(p){var x=o()-i,v=p===!0,S,M,y,E;if(x>e&&(n+=x-t),i+=x,y=i-n,S=y-a,(S>0||v)&&(E=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,a+=S+(S>=r?4:r-S),M=1),v||(c=l(d)),M)for(m=0;m<s.length;m++)s[m](y,h,E,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Vl&&(!da&&Ol()&&(Ft=da=window,Na=Ft.document||{},At.gsap=Lt,(Ft.gsapVersions||(Ft.gsapVersions=[])).push(Lt.version),Wl(is||Ft.GreenSockGlobals||!Ft.gsap&&Ft||{}),u=Ft.requestAnimationFrame),c&&f.sleep(),l=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},xr=1,g(2))},sleep:function(){(u?Ft.cancelAnimationFrame:clearTimeout)(c),xr=0,l=gr},lagSmoothing:function(p,x){e=p||1/ze,t=Math.min(x,e,0)},fps:function(p){r=1e3/(p||240),a=f.time*1e3+r},add:function(p,x,v){var S=x?function(M,y,E,A){p(M,y,E,A),f.remove(S)}:p;return f.remove(p),s[v?"unshift":"push"](S),qi(),S},remove:function(p,x){~(x=s.indexOf(p))&&s.splice(x,1)&&m>=x&&m--},_listeners:s},f}(),qi=function(){return!xr&&Et.wake()},we={},Nu=/^[\d.\-M][\d.\-,\s]/,Ou=/["']/g,Uu=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,l;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),t[i]=isNaN(l)?l.replace(Ou,"").trim():+l,i=c.substr(s+1).trim();return t},Bu=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},ku=function(e){var t=(e+"").split("("),n=we[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Uu(t[1])]:Bu(e).split(",").map(jl)):we._CE&&Nu.test(e)?we._CE("",e):n},uc=function(e){return function(t){return 1-e(1-t)}},hc=function o(e,t){for(var n=e._first,i;n;)n instanceof mt?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},oi=function(e,t){return e&&(We(e)?e:we[e]||ku(e))||t},pi=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return _t(e,function(s){we[s]=At[s]=r,we[a=s.toLowerCase()]=n;for(var c in r)we[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=we[s+"."+c]=r[c]}),r},fc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Es=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ha*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*pu((u-a)*r)+1},c=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:fc(s);return r=ha/r,c.config=function(l,u){return o(e,l,u)},c},Cs=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:fc(n);return i.config=function(r){return o(e,r)},i};_t("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;pi(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});we.Linear.easeNone=we.none=we.Linear.easeIn;pi("Elastic",Es("in"),Es("out"),Es());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};pi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);pi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});pi("Circ",function(o){return-(Nl(1-o*o)-1)});pi("Sine",function(o){return o===1?1:-du(o*hu)+1});pi("Back",Cs("in"),Cs("out"),Cs());we.SteppedEase=we.steps=At.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ze;return function(s){return((i*Tr(0,a,s)|0)+r)*n}}};Vi.ease=we["quad.out"];_t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ba+=o+","+o+"Params,"});var dc=function(e,t){this.id=fu++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xl,this.set=t?t.getSetter:Ha},Xi=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Hi(this,+t.duration,1,1),this.data=t.data,Ze&&(this._ctx=Ze,Ze.data.push(this)),xr||Et.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Hi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(qi(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ps(this,n),!r._dp||r.parent||Kl(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yl(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+oo(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+oo(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Wi(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ze?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?os(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ze?0:this._rts,this.totalTime(Tr(-this._delay,this._tDur,i),!0),ds(this),yu(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ze&&(this._tTime-=ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(gt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?os(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=fr);var i=jt;return jt=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&wn(this),jt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lo(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lo(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(It(this,n),gt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,gt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ze)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=We(n)?n:Zl,s=function(){var l=i.then;i.then=null,We(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){lr(this)},o}();Gt(Xi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ze,_prom:0,_ps:!1,_rts:1});var mt=function(o){zl(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=gt(n.sortChildren),Ue&&tn(n.parent||Ue,gn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Jl(gn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return pr(0,arguments,this),this},t.from=function(i,r,a){return pr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return pr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,dr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ke(i,r,It(this,a),1),this},t.call=function(i,r,a){return tn(this,Ke.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,c,l,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Ke(i,a,It(this,c)),this},t.staggerFrom=function(i,r,a,s,c,l,u){return a.runBackwards=1,dr(a).immediateRender=gt(a.immediateRender),this.staggerTo(i,r,a,s,c,l,u)},t.staggerFromTo=function(i,r,a,s,c,l,u,f){return s.startAt=a,dr(s).immediateRender=gt(s.immediateRender),this.staggerTo(i,r,s,c,l,u,f)},t.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:rt(i),f=this._zTime<0!=i<0&&(this._initted||!l),h,m,g,d,p,x,v,S,M,y,E,A;if(this!==Ue&&u>c&&i>=0&&(u=c),u!==this._tTime||a||f){if(s!==this._time&&l&&(u+=this._time-s,i+=this._time-s),h=u,M=this._start,S=this._ts,x=!S,f&&(l||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(h=rt(u%p),u===c?(d=this._repeat,h=l):(d=~~(u/p),d&&d===u/p&&(h=l,d--),h>l&&(h=l)),y=Wi(this._tTime,p),!s&&this._tTime&&y!==d&&(y=d),E&&d&1&&(h=l-h,A=1),d!==y&&!this._lock){var _=E&&y&1,b=_===(E&&d&1);if(d<y&&(_=!_),s=_?0:l,this._lock=1,this.render(s||(A?0:rt(d*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&Bt(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),s&&s!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,s=_?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;hc(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=wu(this,rt(s),rt(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&h&&!r&&(Bt(this,"onStart"),this._tTime!==u))return this;if(h>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!x){v=0,g&&(u+=this._zTime=-ze);break}}m=g}else{a=a||jt,m=this._last;for(var L=i<0?i:h;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a),h!==this._time||!this._ts&&!x){v=0,g&&(u+=this._zTime=L?-ze:ze);break}}m=g}}if(v&&!r&&(this.pause(),v.render(h>=s?0:-ze)._zTime=h>=s?1:-1,this._ts))return this._start=M,ds(this),this.render(i,r,a);this._onUpdate&&!r&&Bt(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&wn(this,1),!r&&!(i<0&&!s)&&(u||s||!c)&&(Bt(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(bn(r)||(r=It(this,r,i)),!(i instanceof Xi)){if(ct(i))return i.forEach(function(s){return a.add(s,r)}),this;if(tt(i))return this.addLabel(i,r);if(We(i))i=Ke.delayedCall(0,i);else return this}return this!==i?tn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ot);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof Ke?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return tt(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(fs(this,i),i===this._recent&&(this._recent=this._last),ai(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rt(Et.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=It(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=Ke.delayedCall(0,r||gr,a);return s.data="isPause",this._hasPause=1,tn(this,s,It(this,i))},t.removePause=function(i){var r=this._first;for(i=It(this,i);r;)r._start===i&&r.data==="isPause"&&wn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)zn!==s[c]&&s[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=Ut(i),c=this._first,l=bn(r),u;c;)c instanceof Ke?_u(c._targets,s)&&(l?(!zn||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(s,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=It(a,i),c=r,l=c.startAt,u=c.onStart,f=c.onStartParams,h=c.immediateRender,m,g=Ke.to(a,Gt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||ze,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Hi(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},r));return h?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,Gt({startAt:{time:It(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),co(this,It(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),co(this,It(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ze)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,c=this.labels,l;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return ai(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ai(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,c=Ot,l,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,tn(a,s,u-s._delay,1)._lock=0):c=u,u<0&&s._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;Hi(a,a===Ue&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ue._ts&&(Yl(Ue,os(i,Ue)),ql=Et.frame),Et.frame>=so){so+=Ct.autoSleep||120;var r=Ue._first;if((!r||!r._ts)&&Ct.autoSleep&&Et._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Et.sleep()}}},e}(Xi);Gt(mt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gu=function(e,t,n,i,r,a,s){var c=new xt(this._pt,e,t,0,1,vc,null,r),l=0,u=0,f,h,m,g,d,p,x,v;for(c.b=n,c.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=_r(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(bs)||[];f=bs.exec(i);)g=f[0],d=i.substring(l,f.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Oi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=bs.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(kl.test(i)||x)&&(c.e=0),this._pt=c,c},Ga=function(e,t,n,i,r,a,s,c,l,u){We(i)&&(i=i(r||0,e,a));var f=e[t],h=n!=="get"?n:We(f)?l?e[t.indexOf("set")||!We(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():f,m=We(f)?l?Xu:_c:Wa,g;if(tt(i)&&(~i.indexOf("random(")&&(i=_r(i)),i.charAt(1)==="="&&(g=Oi(h,i)+(lt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||ya)return!isNaN(h*i)&&i!==""?(g=new xt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?ju:xc,0,m),l&&(g.fp=l),s&&g.modifier(s,this,e),this._pt=g):(!f&&!(t in e)&&Oa(t,i),Gu.call(this,e,t,h,i,m,c||Ct.stringFilter,l))},Vu=function(e,t,n,i,r){if(We(e)&&(e=mr(e,r,t,n,i)),!ln(e)||e.style&&e.nodeType||ct(e)||Ul(e))return tt(e)?mr(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=mr(e[s],r,t,n,i);return a},pc=function(e,t,n,i,r,a){var s,c,l,u;if(wt[e]&&(s=new wt[e]).init(r,s.rawVars?t[e]:Vu(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new xt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==zi))for(l=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)l[s._props[u]]=c;return s},zn,ya,Va=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,a=n.immediateRender,s=n.lazy,c=n.onUpdate,l=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,h=n.yoyoEase,m=n.keyframes,g=n.autoRevert,d=e._dur,p=e._startAt,x=e._targets,v=e.parent,S=v&&v.data==="nested"?v.parent._targets:x,M=e._overwrite==="auto"&&!Fa,y=e.timeline,E,A,_,b,L,R,Z,j,D,V,N,k,q;if(y&&(!m||!i)&&(i="none"),e._ease=oi(i,Vi.ease),e._yEase=h?uc(oi(h===!0?i:h,Vi.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!n.runBackwards,!y||m&&!n.stagger){if(j=x[0]?si(x[0]).harness:0,k=j&&n[j.prop],E=as(n,Ua),p&&(p.revert(f&&d?fr:gu),p._lazy=0),r){if(wn(e._startAt=Ke.set(x,Gt({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:gt(s),startAt:null,delay:0,onUpdate:c,onUpdateParams:l,callbackScope:u,stagger:0},r))),t<0&&(jt||!a&&!g)&&e._startAt.revert(fr),a&&d&&t<=0){t&&(e._zTime=t);return}}else if(f&&d&&!p){if(t&&(a=!1),_=Gt({overwrite:!1,data:"isFromStart",lazy:a&&gt(s),immediateRender:a,stagger:0,parent:v},E),k&&(_[j.prop]=k),wn(e._startAt=Ke.set(x,_)),t<0&&(jt?e._startAt.revert(fr):e._startAt.render(-1,!0)),e._zTime=t,!a)o(e._startAt,ze);else if(!t)return}for(e._pt=e._ptCache=0,s=d&&gt(s)||s&&!d,A=0;A<x.length;A++){if(L=x[A],Z=L._gsap||ka(x)[A]._gsap,e._ptLookup[A]=V={},pa[Z.id]&&Un.length&&ss(),N=S===x?A:S.indexOf(L),j&&(D=new j).init(L,k||E,e,N,S)!==!1&&(e._pt=b=new xt(e._pt,L,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(O){V[O]=b}),D.priority&&(R=1)),!j||k)for(_ in E)wt[_]&&(D=pc(_,E,e,N,L,S))?D.priority&&(R=1):V[_]=b=Ga.call(e,L,_,"get",E[_],N,S,0,n.stringFilter);e._op&&e._op[A]&&e.kill(L,e._op[A]),M&&e._pt&&(zn=e,Ue.killTweensOf(L,V,e.globalTime(t)),q=!e.parent,zn=0),e._pt&&s&&(pa[Z.id]=1)}R&&yc(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!q,m&&t<=0&&y.render(Ot,!0,!0)},Wu=function(e,t,n,i,r,a,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(l=f[h][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return ya=1,e.vars[t]="+=0",Va(e,s),ya=0,1;c.push(l)}for(h=c.length;h--;)u=c[h],l=u._pt||u,l.s=(i||i===0)&&!r?i:l.s+(i||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Xe(n)+lt(u.e)),u.b&&(u.b=l.s+lt(u.b))},Hu=function(e,t){var n=e[0]?si(e[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return t;r=ui({},t);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},qu=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(ct(t))s=n[e]||(n[e]=[]),t.forEach(function(c,l){return s.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},mr=function(e,t,n,i,r){return We(e)?e.call(t,n,i,r):tt(e)&&~e.indexOf("random(")?_r(e):e},mc=Ba+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gc={};_t(mc+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return gc[o]=1});var Ke=function(o){zl(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:dr(i))||this;var c=s.vars,l=c.duration,u=c.delay,f=c.immediateRender,h=c.stagger,m=c.overwrite,g=c.keyframes,d=c.defaults,p=c.scrollTrigger,x=c.yoyoEase,v=i.parent||Ue,S=(ct(n)||Ul(n)?bn(n[0]):"length"in i)?[n]:Ut(n),M,y,E,A,_,b,L,R;if(s._targets=S.length?ka(S):rs("GSAP target "+n+" not found. https://greensock.com",!Ct.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||h||Dr(l)||Dr(u)){if(i=s.vars,M=s.timeline=new mt({data:"nested",defaults:d||{}}),M.kill(),M.parent=M._dp=gn(s),M._start=0,h||Dr(l)||Dr(u)){if(A=S.length,L=h&&nc(h),ln(h))for(_ in h)~mc.indexOf(_)&&(R||(R={}),R[_]=h[_]);for(y=0;y<A;y++)E=as(i,gc),E.stagger=0,x&&(E.yoyoEase=x),R&&ui(E,R),b=S[y],E.duration=+mr(l,gn(s),y,b,S),E.delay=(+mr(u,gn(s),y,b,S)||0)-s._delay,!h&&A===1&&E.delay&&(s._delay=u=E.delay,s._start+=u,E.delay=0),M.to(b,E,L?L(y,b,S):0),M._ease=we.none;M.duration()?l=u=0:s.timeline=0}else if(g){dr(Gt(M.vars.defaults,{ease:"none"})),M._ease=oi(g.ease||i.ease||"none");var Z=0,j,D,V;if(ct(g))g.forEach(function(N){return M.to(S,N,">")}),M.duration();else{E={};for(_ in g)_==="ease"||_==="easeEach"||qu(_,g[_],E,g.easeEach);for(_ in E)for(j=E[_].sort(function(N,k){return N.t-k.t}),Z=0,y=0;y<j.length;y++)D=j[y],V={ease:D.e,duration:(D.t-(y?j[y-1].t:0))/100*l},V[_]=D.v,M.to(S,V,Z),Z+=V.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||s.duration(l=M.duration())}else s.timeline=0;return m===!0&&!Fa&&(zn=gn(s),Ue.killTweensOf(S),zn=0),tn(v,gn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(f||!l&&!g&&s._start===rt(v._time)&&gt(f)&&Mu(gn(s))&&v.data!=="nested")&&(s._tTime=-ze,s.render(Math.max(0,-u))),p&&Jl(gn(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,c=this._tDur,l=this._dur,u=i<0,f=i>c-ze&&!u?c:i<ze?0:i,h,m,g,d,p,x,v,S,M;if(!l)bu(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,S=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(h=rt(f%d),f===c?(g=this._repeat,h=l):(g=~~(f/d),g&&g===f/d&&(h=l,g--),h>l&&(h=l)),x=this._yoyo&&g&1,x&&(M=this._yEase,h=l-h),p=Wi(this._tTime,d),h===s&&!a&&this._initted)return this._tTime=f,this;g!==p&&(S&&this._yEase&&hc(S,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render(rt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ql(this,u?i:h,a,r))return this._tTime=0,this;if(s!==this._time)return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(h/l),this._from&&(this.ratio=v=1-v),h&&!s&&!r&&(Bt(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;S&&S.render(i<0?i:!h&&x?-ze:S._dur*S._ease(h/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ma(this,i,r,a),Bt(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Bt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ma(this,i,!0,!0),(i||!l)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&wn(this,1),!r&&!(u&&!s)&&(f||s)&&(Bt(this,f===c?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.resetTo=function(i,r,a,s){xr||Et.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Va(this,c),l=this._ease(c/this._dur),Wu(this,i,r,a,s,l,c)?this.resetTo(i,r,a,s):(ps(this,0),this.parent||$l(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?lr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zn&&zn.vars.overwrite!==!0)._first||lr(this),this.parent&&a!==this.timeline.totalDuration()&&Hi(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?Ut(i):s,l=this._ptLookup,u=this._pt,f,h,m,g,d,p,x;if((!r||r==="all")&&vu(s,c))return r==="all"&&(this._pt=0),lr(this);for(f=this._op=this._op||[],r!=="all"&&(tt(r)&&(d={},_t(r,function(v){return d[v]=1}),r=d),r=Hu(s,r)),x=s.length;x--;)if(~c.indexOf(s[x])){h=l[x],r==="all"?(f[x]=r,g=h,m={}):(m=f[x]=f[x]||{},g=r);for(d in g)p=h&&h[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&fs(this,p,"_pt"),delete h[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&lr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return pr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return pr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ue.killTweensOf(i,r,a)},e}(Xi);Gt(Ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});_t("staggerTo,staggerFrom,staggerFromTo",function(o){Ke[o]=function(){var e=new mt,t=_a.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Wa=function(e,t,n){return e[t]=n},_c=function(e,t,n){return e[t](n)},Xu=function(e,t,n,i){return e[t](i.fp,n)},Yu=function(e,t,n){return e.setAttribute(t,n)},Ha=function(e,t){return We(e[t])?_c:za(e[t])&&e.setAttribute?Yu:Wa},xc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ju=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vc=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},qa=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Zu=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},$u=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ku=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yc=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},xt=function(){function o(t,n,i,r,a,s,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||xc,this.d=c||this,this.set=l||Wa,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ku,this.m=n,this.mt=r,this.tween=i},o}();_t(Ba+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Ua[o]=1});At.TweenMax=At.TweenLite=Ke;At.TimelineLite=At.TimelineMax=mt;Ue=new mt({sortChildren:!1,defaults:Vi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ct.stringFilter=cc;var Yi=[],es={},Ju=[],ho=0,As=function(e){return(es[e]||Ju).map(function(t){return t()})},Ma=function(){var e=Date.now(),t=[];e-ho>2&&(As("matchMediaInit"),Yi.forEach(function(n){var i=n.queries,r=n.conditions,a,s,c,l;for(s in i)a=Ft.matchMedia(i[s]).matches,a&&(c=1),a!==r[s]&&(r[s]=a,l=1);l&&(n.revert(),c&&t.push(n))}),As("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ho=e,As("matchMedia"))},Mc=function(){function o(t,n){this.selector=n&&xa(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){We(n)&&(r=i,i=n,n=We);var a=this,s=function(){var l=Ze,u=a.selector,f;return l&&l.data.push(a),r&&(a.selector=xa(r)),Ze=a,f=i.apply(a,arguments),We(f)&&a._r.push(f),Ze=l,a.selector=u,a.isReverted=!1,f};return a.last=s,n===We?s(a):n?a[n]=s:s},e.ignore=function(n){var i=Ze;Ze=null,n(this),Ze=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Ke&&i._targets[0]!==i.vars.onComplete&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(this.getTweens().map(function(s){return{g:s.globalTime(0),t:s}}).sort(function(s,c){return c.g-s.g||-1}).forEach(function(s){return s.t.revert(n)}),this.data.forEach(function(s){return!(s instanceof Xi)&&s.revert&&s.revert(n)}),this._r.forEach(function(s){return s(n,r)}),this.isReverted=!0):this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i){var a=Yi.indexOf(this);~a&&Yi.splice(a,1)}},e.revert=function(n){this.kill(n||{})},o}(),Qu=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){ln(n)||(n={matches:n});var a=new Mc(0,r||this.scope),s=a.conditions={},c,l,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Ft.matchMedia(n[l]),c&&(Yi.indexOf(a)<0&&Yi.push(a),(s[l]=c.matches)&&(u=1),c.addListener?c.addListener(Ma):c.addEventListener("change",Ma)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ls={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Fu(i)})},timeline:function(e){return new mt(e)},getTweensOf:function(e,t){return Ue.getTweensOf(e,t)},getProperty:function(e,t,n,i){tt(e)&&(e=Ut(e)[0]);var r=si(e||{}).get,a=n?Zl:jl;return n==="native"&&(n=""),e&&(t?a((wt[t]&&wt[t].get||r)(e,t,n,i)):function(s,c,l){return a((wt[s]&&wt[s].get||r)(e,s,c,l))})},quickSetter:function(e,t,n){if(e=Ut(e),e.length>1){var i=e.map(function(u){return Lt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=wt[t],s=si(e),c=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(u){var f=new a;zi._pt=0,f.init(e,n?u+n:u,zi,0,[e]),f.render(1,f),zi._pt&&qa(1,zi)}:s.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Lt.to(e,ui((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return Ue.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=oi(e.ease,Vi.ease)),ao(Vi,e||{})},config:function(e){return ao(Ct,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!wt[s]&&!At[s]&&rs(t+" effect requires "+s+" plugin.")}),ws[t]=function(s,c,l){return n(Ut(s),Gt(c||{},r),l)},a&&(mt.prototype[t]=function(s,c,l){return this.add(ws[t](s,ln(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){we[e]=oi(t)},parseEase:function(e,t){return arguments.length?oi(e,t):we},getById:function(e){return Ue.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mt(e),i,r;for(n.smoothChildTiming=gt(e.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)r=i._next,(t||!(!i._dur&&i instanceof Ke&&i.vars.onComplete===i._targets[0]))&&tn(n,i,i._start-i._delay),i=r;return tn(Ue,n,0),n},context:function(e,t){return e?new Mc(e,t):Ze},matchMedia:function(e){return new Qu(e)},matchMediaRefresh:function(){return Yi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ma()},addEventListener:function(e,t){var n=es[e]||(es[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=es[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Du,wrapYoyo:Ru,distribute:nc,random:rc,snap:ic,normalize:Pu,getUnit:lt,clamp:Eu,splitColor:oc,toArray:Ut,selector:xa,mapRange:ac,pipe:Au,unitize:Lu,interpolate:Iu,shuffle:tc},install:Wl,effects:ws,ticker:Et,updateRoot:mt.updateRoot,plugins:wt,globalTimeline:Ue,core:{PropTween:xt,globals:Hl,Tween:Ke,Timeline:mt,Animation:Xi,getCache:si,_removeLinkedListItem:fs,reverting:function(){return jt},context:function(e){return e&&Ze&&(Ze.data.push(e),e._ctx=Ze),Ze},suppressOverwrites:function(e){return Fa=e}}};_t("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ls[o]=Ke[o]});Et.add(mt.updateRoot);zi=ls.to({},{duration:0});var eh=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},th=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=eh(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Ls=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,l;if(tt(r)&&(c={},_t(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}th(s,r)}}}},Lt=ls.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ls("roundProps",va),Ls("modifiers"),Ls("snap",ic))||ls;Ke.version=mt.version=Lt.version="3.11.0";Vl=1;Ol()&&qi();we.Power0;we.Power1;we.Power2;var nh=we.Power3;we.Power4;we.Linear;we.Quad;we.Cubic;we.Quart;we.Quint;we.Strong;we.Elastic;we.Back;we.SteppedEase;we.Bounce;we.Sine;we.Expo;we.Circ;/*!
 * CSSPlugin 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fo,Nn,Ui,Xa,ti,po,Ya,ih=function(){return typeof window<"u"},Tn={},Kn=180/Math.PI,Bi=Math.PI/180,xi=Math.atan2,mo=1e8,ja=/([A-Z])/g,rh=/(left|right|width|margin|padding|x)/i,sh=/[\s,\(]\S/,yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ah=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oh=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},lh=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Sc=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bc=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ch=function(e,t,n){return e.style[t]=n},uh=function(e,t,n){return e.style.setProperty(t,n)},hh=function(e,t,n){return e._gsap[t]=n},fh=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},dh=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},ph=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ve="transform",rn=Ve+"Origin",mh=function(e){var t=this,n=this.target,i=n.style;if(e in Tn){if(this.tfm=this.tfm||{},e!=="transform"&&(e=yn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(r){return t.tfm[r]=xn(n,r)}):this.tfm[e]=n._gsap.x?n._gsap[e]:xn(n,e)),n._gsap.svg&&(this.svg=n.getAttribute(e)||""),this.props.indexOf(Ve)>=0)return;e=Ve}i&&this.props.push(e,i[e])},wc=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gh=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=2)e[r+1]?n[e[r]]=e[r+1]:n.removeProperty(e[r].replace(ja,"-$1").toLowerCase());if(this.tfm){i.svg&&t.setAttribute("transform",this.svg||"");for(a in this.tfm)i[a]=this.tfm[a];r=Ya(),r&&!r.isStart&&!n[Ve]&&(wc(n),i.uncache=1)}},Tc=function(e,t){var n={target:e,props:[],revert:gh,save:mh};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ec,ba=function(e,t){var n=Nn.createElementNS?Nn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Nn.createElement(e);return n.style?n:Nn.createElement(e)},sn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ja,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,ji(t)||t,1)||""},go="O,Moz,ms,Ms,Webkit".split(","),ji=function(e,t,n){var i=t||ti,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(go[a]+e in r););return a<0?null:(a===3?"ms":a>=0?go[a]:"")+e},wa=function(){ih()&&window.document&&(fo=window,Nn=fo.document,Ui=Nn.documentElement,ti=ba("div")||{style:{}},ba("div"),Ve=ji(Ve),rn=Ve+"Origin",ti.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ec=!!ji("perspective"),Ya=Lt.core.reverting,Xa=1)},Ps=function o(e){var t=ba("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Ui.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Ui.removeChild(t),this.style.cssText=r,a},_o=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cc=function(e){var t;try{t=e.getBBox()}catch{t=Ps.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ps||(t=Ps.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+_o(e,["x","cx","x1"])||0,y:+_o(e,["y","cy","y1"])||0,width:0,height:0}:t},Ac=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cc(e))},vr=function(e,t){if(t){var n=e.style;t in Tn&&t!==rn&&(t=Ve),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ja,"-$1").toLowerCase())):n.removeAttribute(t)}},On=function(e,t,n,i,r,a){var s=new xt(e._pt,t,n,0,1,a?bc:Sc);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},xo={deg:1,rad:1,turn:1},_h={grid:1,flex:1},Gn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=ti.style,c=rh.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),f=100,h=i==="px",m=i==="%",g,d,p,x;return i===a||!r||xo[i]||xo[a]?r:(a!=="px"&&!h&&(r=o(e,t,n,"px")),x=e.getCTM&&Ac(e),(m||a==="%")&&(Tn[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[c?"width":"height"]:e[u],Xe(m?r/g*f:r/100*g)):(s[c?"width":"height"]=f+(h?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,x&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Nn||!d.appendChild)&&(d=Nn.body),p=d._gsap,p&&m&&p.width&&c&&p.time===Et.time&&!p.uncache?Xe(r/p.width*f):((m||a==="%")&&!_h[sn(d,"display")]&&(s.position=sn(e,"position")),d===e&&(s.position="static"),d.appendChild(ti),g=ti[u],d.removeChild(ti),s.position="absolute",c&&m&&(p=si(d),p.time=Et.time,p.width=d[u]),Xe(h?g*r/f:g&&r?f/g*r:0))))},xn=function(e,t,n,i){var r;return Xa||wa(),t in yn&&t!=="transform"&&(t=yn[t],~t.indexOf(",")&&(t=t.split(",")[0])),Tn[t]&&t!=="transform"?(r=Mr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:us(sn(e,rn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=cs[t]&&cs[t](e,t,n)||sn(e,t)||Xl(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gn(e,t,r,n)+n:r},xh=function(e,t,n,i){if(!n||n==="none"){var r=ji(t,e,1),a=r&&sn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=sn(e,"borderTopColor"))}var s=new xt(this._pt,e.style,t,0,1,vc),c=0,l=0,u,f,h,m,g,d,p,x,v,S,M,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=sn(e,t)||i,e.style[t]=n),u=[n,i],cc(u),n=u[0],i=u[1],h=n.match(Fi)||[],y=i.match(Fi)||[],y.length){for(;f=Fi.exec(i);)p=f[0],v=i.substring(c,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(d=h[l++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=Oi(m,p)+M),x=parseFloat(p),S=p.substr((x+"").length),c=Fi.lastIndex-S.length,S||(S=S||Ct.units[t]||M,c===i.length&&(i+=S,s.e+=S)),M!==S&&(m=Gn(e,t,d,S)||0),s._pt={_next:s._pt,p:v||l===1?v:",",s:m,c:x-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=t==="display"&&i==="none"?bc:Sc;return kl.test(i)&&(s.e=0),this._pt=s,s},vo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},vh=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vo[n]||n,t[1]=vo[i]||i,t.join(" ")},yh=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],Tn[s]&&(c=1,s=s==="transformOrigin"?rn:Ve),vr(n,s);c&&(vr(n,Ve),a&&(a.svg&&n.removeAttribute("transform"),Mr(n,1),a.uncache=1,wc(i)))}},cs={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new xt(e._pt,t,n,0,0,yh);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},yr=[1,0,0,1,0,0],Lc={},Pc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yo=function(e){var t=sn(e,Ve);return Pc(t)?yr:t.substr(7).match(Bl).map(Xe)},Za=function(e,t){var n=e._gsap||si(e),i=e.style,r=yo(e),a,s,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?yr:r):(r===yr&&!e.offsetParent&&e!==Ui&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,s=e.nextElementSibling,Ui.appendChild(e)),r=yo(e),c?i.display=c:vr(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):Ui.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ta=function(e,t,n,i,r,a){var s=e._gsap,c=r||Za(e,!0),l=s.xOrigin||0,u=s.yOrigin||0,f=s.xOffset||0,h=s.yOffset||0,m=c[0],g=c[1],d=c[2],p=c[3],x=c[4],v=c[5],S=t.split(" "),M=parseFloat(S[0])||0,y=parseFloat(S[1])||0,E,A,_,b;n?c!==yr&&(A=m*p-g*d)&&(_=M*(p/A)+y*(-d/A)+(d*v-p*x)/A,b=M*(-g/A)+y*(m/A)-(m*v-g*x)/A,M=_,y=b):(E=Cc(e),M=E.x+(~S[0].indexOf("%")?M/100*E.width:M),y=E.y+(~(S[1]||S[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&s.smooth?(x=M-l,v=y-u,s.xOffset=f+(x*m+v*d)-x,s.yOffset=h+(x*g+v*p)-v):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[rn]="0px 0px",a&&(On(a,s,"xOrigin",l,M),On(a,s,"yOrigin",u,y),On(a,s,"xOffset",f,s.xOffset),On(a,s,"yOffset",h,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},Mr=function(e,t){var n=e._gsap||new dc(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",c=getComputedStyle(e),l=sn(e,rn)||"0",u,f,h,m,g,d,p,x,v,S,M,y,E,A,_,b,L,R,Z,j,D,V,N,k,q,O,W,J,$,K,ie,fe;return u=f=h=d=p=x=v=S=M=0,m=g=1,n.svg=!!(e.getCTM&&Ac(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Ve]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+c[Ve]),i.scale=i.rotate=i.translate="none"),A=Za(e,n.svg),n.svg&&(k=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Ta(e,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,E=n.yOrigin||0,A!==yr&&(R=A[0],Z=A[1],j=A[2],D=A[3],u=V=A[4],f=N=A[5],A.length===6?(m=Math.sqrt(R*R+Z*Z),g=Math.sqrt(D*D+j*j),d=R||Z?xi(Z,R)*Kn:0,v=j||D?xi(j,D)*Kn+d:0,v&&(g*=Math.abs(Math.cos(v*Bi))),n.svg&&(u-=y-(y*R+E*j),f-=E-(y*Z+E*D))):(fe=A[6],K=A[7],W=A[8],J=A[9],$=A[10],ie=A[11],u=A[12],f=A[13],h=A[14],_=xi(fe,$),p=_*Kn,_&&(b=Math.cos(-_),L=Math.sin(-_),k=V*b+W*L,q=N*b+J*L,O=fe*b+$*L,W=V*-L+W*b,J=N*-L+J*b,$=fe*-L+$*b,ie=K*-L+ie*b,V=k,N=q,fe=O),_=xi(-j,$),x=_*Kn,_&&(b=Math.cos(-_),L=Math.sin(-_),k=R*b-W*L,q=Z*b-J*L,O=j*b-$*L,ie=D*L+ie*b,R=k,Z=q,j=O),_=xi(Z,R),d=_*Kn,_&&(b=Math.cos(_),L=Math.sin(_),k=R*b+Z*L,q=V*b+N*L,Z=Z*b-R*L,N=N*b-V*L,R=k,V=q),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,x=180-x),m=Xe(Math.sqrt(R*R+Z*Z+j*j)),g=Xe(Math.sqrt(N*N+fe*fe)),_=xi(V,N),v=Math.abs(_)>2e-4?_*Kn:0,M=ie?1/(ie<0?-ie:ie):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pc(sn(e,Ve)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(m*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Xe(m),n.scaleY=Xe(g),n.rotation=Xe(d)+s,n.rotationX=Xe(p)+s,n.rotationY=Xe(x)+s,n.skewX=v+s,n.skewY=S+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[rn]=us(l)),n.xOffset=n.yOffset=0,n.force3D=Ct.force3D,n.renderTransform=n.svg?Sh:Ec?Dc:Mh,n.uncache=0,n},us=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ds=function(e,t,n){var i=lt(t);return Xe(parseFloat(t)+parseFloat(Gn(e,"x",n+"px",i)))+i},Mh=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dc(e,t)},Xn="0deg",rr="0px",Yn=") ",Dc=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,x=n.force3D,v=n.target,S=n.zOrigin,M="",y=x==="auto"&&e&&e!==1||x===!0;if(S&&(f!==Xn||u!==Xn)){var E=parseFloat(u)*Bi,A=Math.sin(E),_=Math.cos(E),b;E=parseFloat(f)*Bi,b=Math.cos(E),a=Ds(v,a,A*b*-S),s=Ds(v,s,-Math.sin(E)*-S),c=Ds(v,c,_*b*-S+S)}p!==rr&&(M+="perspective("+p+Yn),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||a!==rr||s!==rr||c!==rr)&&(M+=c!==rr||y?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+Yn),l!==Xn&&(M+="rotate("+l+Yn),u!==Xn&&(M+="rotateY("+u+Yn),f!==Xn&&(M+="rotateX("+f+Yn),(h!==Xn||m!==Xn)&&(M+="skew("+h+", "+m+Yn),(g!==1||d!==1)&&(M+="scale("+g+", "+d+Yn),v.style[Ve]=M||"translate(0, 0)"},Sh=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,x=n.yOffset,v=n.forceCSS,S=parseFloat(a),M=parseFloat(s),y,E,A,_,b;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Bi,l*=Bi,y=Math.cos(c)*f,E=Math.sin(c)*f,A=Math.sin(c-l)*-h,_=Math.cos(c-l)*h,l&&(u*=Bi,b=Math.tan(l-u),b=Math.sqrt(1+b*b),A*=b,_*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),y*=b,E*=b)),y=Xe(y),E=Xe(E),A=Xe(A),_=Xe(_)):(y=f,_=h,E=A=0),(S&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(S=Gn(m,"x",a,"px"),M=Gn(m,"y",s,"px")),(g||d||p||x)&&(S=Xe(S+g-(g*y+d*A)+p),M=Xe(M+d-(g*E+d*_)+x)),(i||r)&&(b=m.getBBox(),S=Xe(S+i/100*b.width),M=Xe(M+r/100*b.height)),b="matrix("+y+","+E+","+A+","+_+","+S+","+M+")",m.setAttribute("transform",b),v&&(m.style[Ve]=b)},bh=function(e,t,n,i,r){var a=360,s=tt(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?Kn:1),l=c-i,u=i+l+"deg",f,h;return s&&(f=r.split("_")[1],f==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),f==="cw"&&l<0?l=(l+a*mo)%a-~~(l/a)*a:f==="ccw"&&l>0&&(l=(l-a*mo)%a-~~(l/a)*a)),e._pt=h=new xt(e._pt,t,n,i,l,ah),h.e=u,h.u="deg",e._props.push(n),h},Mo=function(e,t){for(var n in t)e[n]=t[n];return e},wh=function(e,t,n){var i=Mo({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,l,u,f,h,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ve]=t,s=Mr(n,1),vr(n,Ve),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Ve],a[Ve]=t,s=Mr(n,1),a[Ve]=l);for(c in Tn)l=i[c],u=s[c],l!==u&&r.indexOf(c)<0&&(m=lt(l),g=lt(u),f=m!==g?Gn(n,c,l,g):parseFloat(l),h=parseFloat(u),e._pt=new xt(e._pt,s,c,f,h-f,Sa),e._pt.u=g||0,e._props.push(c));Mo(s,i)};_t("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});cs[e>1?"border"+o:o]=function(s,c,l,u,f){var h,m;if(arguments.length<4)return h=a.map(function(g){return xn(s,g,l)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=h[d]=h[d]||h[(d-1)/2|0]}),s.init(c,m,f)}});var Rc={name:"css",register:wa,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,c=n.vars.startAt,l,u,f,h,m,g,d,p,x,v,S,M,y,E,A,_;Xa||wa(),this.styles=this.styles||Tc(e),_=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(wt[d]&&pc(d,t,n,i,e,r)))){if(m=typeof u,g=cs[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=_r(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Bn.lastIndex=0,Bn.test(l)||(p=lt(l),x=lt(u)),x?p!==x&&(l=Gn(e,d,l,x)+x):p&&(u+=p),this.add(s,"setProperty",l,u,i,r,0,0,d),a.push(d),_.push(d,s[d]);else if(m!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(n,i,e,r):c[d],tt(l)&&~l.indexOf("random(")&&(l=_r(l)),lt(l+"")||(l+=Ct.units[d]||lt(xn(e,d))||""),(l+"").charAt(1)==="="&&(l=xn(e,d))):l=xn(e,d),h=parseFloat(l),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),d in yn&&(d==="autoAlpha"&&(h===1&&xn(e,"visibility")==="hidden"&&f&&(h=0),_.push("visibility",s.visibility),On(this,s,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=yn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in Tn,S){if(this.styles.save(d),M||(y=e._gsap,y.renderTransform&&!t.parseTransform||Mr(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new xt(this._pt,s,Ve,0,1,y.renderTransform,y,0,-1),M.dep=1),d==="scale")this._pt=new xt(this._pt,y,"scaleY",y.scaleY,(v?Oi(y.scaleY,v+f):f)-y.scaleY||0,Sa),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){_.push(rn,s[rn]),u=vh(u),y.svg?Ta(e,u,0,E,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==y.zOrigin&&On(this,y,"zOrigin",y.zOrigin,x),On(this,s,d,us(l),us(u)));continue}else if(d==="svgOrigin"){Ta(e,u,1,E,0,this);continue}else if(d in Lc){bh(this,y,d,h,v?Oi(h,v+u):u);continue}else if(d==="smoothOrigin"){On(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){wh(this,u,e);continue}}else d in s||(d=ji(d)||d);if(S||(f||f===0)&&(h||h===0)&&!sh.test(u)&&d in s)p=(l+"").substr((h+"").length),f||(f=0),x=lt(u)||(d in Ct.units?Ct.units[d]:p),p!==x&&(h=Gn(e,d,l,x)),this._pt=new xt(this._pt,S?y:s,d,h,(v?Oi(h,v+f):f)-h,!S&&(x==="px"||d==="zIndex")&&t.autoRound!==!1?lh:Sa),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=l,this._pt.r=oh);else if(d in s)xh.call(this,e,d,l,v?v+u:u);else if(d in e)this.add(e,d,l||e[d],v?v+u:u,i,r);else{Oa(d,u);continue}S||_.push(d,s[d]),a.push(d)}}A&&yc(this)},render:function(e,t){if(t.tween._time||!Ya())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xn,aliases:yn,getSetter:function(e,t,n){var i=yn[t];return i&&i.indexOf(",")<0&&(t=i),t in Tn&&t!==rn&&(e._gsap.x||xn(e,"x"))?n&&po===n?t==="scale"?fh:hh:(po=n||{})&&(t==="scale"?dh:ph):e.style&&!za(e.style[t])?ch:~t.indexOf("-")?uh:Ha(e,t)},core:{_removeProperty:vr,_getMatrix:Za}};Lt.utils.checkPrefix=ji;Lt.core.getStyleSaver=Tc;(function(o,e,t,n){var i=_t(o+","+e+","+t,function(r){Tn[r]=1});_t(e,function(r){Ct.units[r]="deg",Lc[r]=1}),yn[i[13]]=o+","+e,_t(n,function(r){var a=r.split(":");yn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");_t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ct.units[o]="px"});Lt.registerPlugin(Rc);var Sr=Lt.registerPlugin(Rc)||Lt;Sr.core.Tween;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="143",Th=0,So=1,Eh=2,Ic=1,Ch=2,ur=3,br=0,Zt=1,Zi=2,Ah=1,kn=0,ki=1,bo=2,wo=3,To=4,Lh=5,Ii=100,Ph=101,Dh=102,Eo=103,Co=104,Rh=200,Ih=201,Fh=202,zh=203,Fc=204,zc=205,Nh=206,Oh=207,Uh=208,Bh=209,kh=210,Gh=0,Vh=1,Wh=2,Ea=3,Hh=4,qh=5,Xh=6,Yh=7,Nc=0,jh=1,Zh=2,Sn=0,$h=1,Kh=2,Jh=3,Qh=4,ef=5,Oc=300,$i=301,Ki=302,Ca=303,Aa=304,ms=306,La=1e3,Yt=1001,Pa=1002,pt=1003,Ao=1004,Lo=1005,zt=1006,tf=1007,gs=1008,hi=1009,nf=1010,rf=1011,Uc=1012,sf=1013,ni=1014,ii=1015,wr=1016,af=1017,of=1018,Gi=1020,lf=1021,cf=1022,nn=1023,uf=1024,hf=1025,li=1026,Ji=1027,ff=1028,df=1029,pf=1030,mf=1031,gf=1033,Rs=33776,Is=33777,Fs=33778,zs=33779,Po=35840,Do=35841,Ro=35842,Io=35843,_f=36196,Fo=37492,zo=37496,No=37808,Oo=37809,Uo=37810,Bo=37811,ko=37812,Go=37813,Vo=37814,Wo=37815,Ho=37816,qo=37817,Xo=37818,Yo=37819,jo=37820,Zo=37821,$o=36492,fi=3e3,Ge=3001,xf=3200,vf=3201,yf=0,Mf=1,_n="srgb",ri="srgb-linear",Ns=7680,Sf=519,Ko=35044,Jo="300 es",Da=1035;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Os=Math.PI/180,Qo=180/Math.PI;function Er(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[o&255]+at[o>>8&255]+at[o>>16&255]+at[o>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function Tt(o,e,t){return Math.max(e,Math.min(t,o))}function bf(o,e){return(o%e+e)%e}function Us(o,e,t){return(1-t)*o+t*e}function el(o){return(o&o-1)===0&&o!==0}function Ra(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],m=n[5],g=n[8],d=i[0],p=i[3],x=i[6],v=i[1],S=i[4],M=i[7],y=i[2],E=i[5],A=i[8];return r[0]=a*d+s*v+c*y,r[3]=a*p+s*S+c*E,r[6]=a*x+s*M+c*A,r[1]=l*d+u*v+f*y,r[4]=l*p+u*S+f*E,r[7]=l*x+u*M+f*A,r[2]=h*d+m*v+g*y,r[5]=h*p+m*S+g*E,r[8]=h*x+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*s*l-n*r*u+n*s*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=u*a-s*l,h=s*c-u*r,m=l*r-a*c,g=t*f+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*l-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=h*d,e[4]=(u*t-i*c)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*c-l*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*s)+a+e,-i*l,i*c,-i*(-l*a+c*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],s=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*r+n*c,i[3]=t*a+n*l,i[6]=t*s+n*u,i[1]=-n*r+t*c,i[4]=-n*a+t*l,i[7]=-n*s+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Bc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>65535)return!0;return!1}function hs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ci(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ts(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Bs={[_n]:{[ri]:ci},[ri]:{[_n]:ts}},Wt={legacyMode:!0,get workingColorSpace(){return ri},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Bs[e]&&Bs[e][t]!==void 0){const n=Bs[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={r:0,g:0,b:0},Ht={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function ks(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Ir(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ri){return this.r=e,this.g=t,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ri){if(e=bf(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ks(a,r,e+1/3),this.g=ks(a,r,e),this.b=ks(a,r,e-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Wt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Wt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=_n){const n=kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Wt.fromWorkingColorSpace(Ir(this,$e),e),Tt($e.r*255,0,255)<<16^Tt($e.g*255,0,255)<<8^Tt($e.b*255,0,255)<<0}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ri){Wt.fromWorkingColorSpace(Ir(this,$e),t);const n=$e.r,i=$e.g,r=$e.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+a)/2;if(s===a)c=0,l=0;else{const f=a-s;switch(l=u<=.5?f/(a+s):f/(2-a-s),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ri){return Wt.fromWorkingColorSpace(Ir(this,$e),t),e.r=$e.r,e.g=$e.g,e.b=$e.b,e}getStyle(e=_n){return Wt.fromWorkingColorSpace(Ir(this,$e),e),e!==_n?`color(${e} ${$e.r} ${$e.g} ${$e.b})`:`rgb(${$e.r*255|0},${$e.g*255|0},${$e.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ht),Ht.h+=e,Ht.s+=t,Ht.l+=n,this.setHSL(Ht.h,Ht.s,Ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ht),e.getHSL(Rr);const n=Us(Ht.h,Rr.h,t),i=Us(Ht.s,Rr.s,t),r=Us(Ht.l,Rr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=kc;let vi;class Gc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vi===void 0&&(vi=hs("canvas")),vi.width=e.width,vi.height=e.height;const n=vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vc{constructor(e=null){this.isSource=!0,this.uuid=Er(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Gs(i[a].image)):r.push(Gs(i[a]))}else r=Gs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Gc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class $t extends er{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=Yt,i=Yt,r=zt,a=gs,s=nn,c=hi,l=1,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Er(),this.name="",this.source=new Vc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Oc;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],m=c[5],g=c[9],d=c[2],p=c[6],x=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,M=(m+1)/2,y=(x+1)/2,E=(u+h)/4,A=(f+d)/4,_=(g+p)/4;return S>M&&S>y?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=A/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=_/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-d)/v,this.z=(h-u)/v,this.w=Math.acos((l+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends er{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new $t(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wc extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tf extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||c!==h||l!==m||u!==g){let p=1-s;const x=c*h+l*m+u*g+f*d,v=x>=0?1:-1,S=1-x*x;if(S>Number.EPSILON){const y=Math.sqrt(S),E=Math.atan2(y,x*v);p=Math.sin(p*E)/y,s=Math.sin(s*E)/y}const M=s*v;if(c=c*p+h*M,l=l*p+m*M,u=u*p+g*M,f=f*p+d*M,p===1-s){const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[a],h=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*f+c*m-l*h,e[t+1]=c*g+u*h+l*f-s*m,e[t+2]=l*g+u*m+s*h-c*f,e[t+3]=u*g-s*f-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),f=s(r/2),h=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f+h*m*g;break;case"YZX":this._x=h*u*f+l*m*g,this._y=l*m*f+h*u*g,this._z=l*u*g-h*m*f,this._w=l*u*f-h*m*g;break;case"XZY":this._x=h*u*f-l*m*g,this._y=l*m*f-h*u*g,this._z=l*u*g+h*m*f,this._w=l*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>s&&n>f){const m=2*Math.sqrt(1+n-s-f);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(s>f){const m=2*Math.sqrt(1+s-n-f);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-s);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*s+i*l-r*c,this._y=i*u+a*c+r*s-n*l,this._z=r*u+a*l+n*c-i*s,this._w=a*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,c=e.w,l=c*t+a*i-s*n,u=c*n+s*t-r*i,f=c*i+r*n-a*t,h=-r*t-a*n-s*i;return this.x=l*c+h*-r+u*-s-f*-a,this.y=u*c+h*-a+f*-r-l*-s,this.z=f*c+h*-s+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,c=t.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new I,tl=new Cr;class Ar{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>a&&(a=f),h>s&&(s=h)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)jn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox),Ws.applyMatrix4(e.matrixWorld),this.union(Ws);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Fr.subVectors(this.max,sr),yi.subVectors(e.a,sr),Mi.subVectors(e.b,sr),Si.subVectors(e.c,sr),An.subVectors(Mi,yi),Ln.subVectors(Si,Mi),Zn.subVectors(yi,Si);let t=[0,-An.z,An.y,0,-Ln.z,Ln.y,0,-Zn.z,Zn.y,An.z,0,-An.x,Ln.z,0,-Ln.x,Zn.z,0,-Zn.x,-An.y,An.x,0,-Ln.y,Ln.x,0,-Zn.y,Zn.x,0];return!Hs(t,yi,Mi,Si,Fr)||(t=[1,0,0,0,1,0,0,0,1],!Hs(t,yi,Mi,Si,Fr))?!1:(zr.crossVectors(An,Ln),t=[zr.x,zr.y,zr.z],Hs(t,yi,Mi,Si,Fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return jn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,Ws=new Ar,yi=new I,Mi=new I,Si=new I,An=new I,Ln=new I,Zn=new I,sr=new I,Fr=new I,zr=new I,$n=new I;function Hs(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){$n.fromArray(o,r);const s=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),c=e.dot($n),l=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Ef=new Ar,nl=new I,Nr=new I,qs=new I;class Ka{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(qs.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Nr.set(0,0,1).multiplyScalar(e.radius):Nr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(nl.copy(e.center).add(Nr)),this.expandByPoint(nl.copy(e.center).sub(Nr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new I,Xs=new I,Or=new I,Pn=new I,Ys=new I,Ur=new I,js=new I;class Cf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.direction).multiplyScalar(t).add(this.origin),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xs.copy(e).add(t).multiplyScalar(.5),Or.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Xs);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Or),s=Pn.dot(this.direction),c=-Pn.dot(Or),l=Pn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,g;if(u>0)if(f=a*c-s,h=a*s-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+a*h+2*s)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-a*r+s)),h=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),m=h*(h+2*c)+l):(f=Math.max(0,-(a*r+s)),h=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+s)),m=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Or).multiplyScalar(h).add(Xs),m}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return s<0&&c<0?null:s<0?this.at(c,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),f>=0?(s=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,i,r){Ys.subVectors(t,e),Ur.subVectors(n,e),js.crossVectors(Ys,Ur);let a=this.direction.dot(js),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const c=s*this.direction.dot(Ur.crossVectors(Pn,Ur));if(c<0)return null;const l=s*this.direction.dot(Ys.cross(Pn));if(l<0||c+l>a)return null;const u=-s*Pn.dot(js);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,c,l,u,f,h,m,g,d,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=s,x[13]=c,x[2]=l,x[6]=u,x[10]=f,x[14]=h,x[3]=m,x[7]=g,x[11]=d,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,m=a*f,g=s*u,d=s*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=h-d*l,t[9]=-s*c,t[2]=d-h*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,m=c*f,g=l*u,d=l*f;t[0]=h+d*s,t[4]=g*s-m,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=d+h*s,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,m=c*f,g=l*u,d=l*f;t[0]=h-d*s,t[4]=-a*f,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=d-h*s,t[2]=-a*l,t[6]=s,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,m=a*f,g=s*u,d=s*f;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+d,t[1]=c*f,t[5]=d*l+h,t[9]=m*l-g,t[2]=-l,t[6]=s*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,m=a*l,g=s*c,d=s*l;t[0]=c*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=a*u,t[9]=-s*u,t[2]=-l*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*c,m=a*l,g=s*c,d=s*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+d,t[5]=a*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=s*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Lf)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),Dn.crossVectors(n,St),Dn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),Dn.crossVectors(n,St)),Dn.normalize(),Br.crossVectors(St,Dn),i[0]=Dn.x,i[4]=Br.x,i[8]=St.x,i[1]=Dn.y,i[5]=Br.y,i[9]=St.y,i[2]=Dn.z,i[6]=Br.z,i[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],m=n[13],g=n[2],d=n[6],p=n[10],x=n[14],v=n[3],S=n[7],M=n[11],y=n[15],E=i[0],A=i[4],_=i[8],b=i[12],L=i[1],R=i[5],Z=i[9],j=i[13],D=i[2],V=i[6],N=i[10],k=i[14],q=i[3],O=i[7],W=i[11],J=i[15];return r[0]=a*E+s*L+c*D+l*q,r[4]=a*A+s*R+c*V+l*O,r[8]=a*_+s*Z+c*N+l*W,r[12]=a*b+s*j+c*k+l*J,r[1]=u*E+f*L+h*D+m*q,r[5]=u*A+f*R+h*V+m*O,r[9]=u*_+f*Z+h*N+m*W,r[13]=u*b+f*j+h*k+m*J,r[2]=g*E+d*L+p*D+x*q,r[6]=g*A+d*R+p*V+x*O,r[10]=g*_+d*Z+p*N+x*W,r[14]=g*b+d*j+p*k+x*J,r[3]=v*E+S*L+M*D+y*q,r[7]=v*A+S*R+M*V+y*O,r[11]=v*_+S*Z+M*N+y*W,r[15]=v*b+S*j+M*k+y*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],x=e[15];return g*(+r*c*f-i*l*f-r*s*h+n*l*h+i*s*m-n*c*m)+d*(+t*c*m-t*l*h+r*a*h-i*a*m+i*l*u-r*c*u)+p*(+t*l*f-t*s*m-r*a*f+n*a*m+r*s*u-n*l*u)+x*(-i*s*u-t*c*f+t*s*h+i*a*f-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],x=e[15],v=f*p*l-d*h*l+d*c*m-s*p*m-f*c*x+s*h*x,S=g*h*l-u*p*l-g*c*m+a*p*m+u*c*x-a*h*x,M=u*d*l-g*f*l+g*s*m-a*d*m-u*s*x+a*f*x,y=g*f*c-u*d*c-g*s*h+a*d*h+u*s*p-a*f*p,E=t*v+n*S+i*M+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(d*h*r-f*p*r-d*i*m+n*p*m+f*i*x-n*h*x)*A,e[2]=(s*p*r-d*c*r+d*i*l-n*p*l-s*i*x+n*c*x)*A,e[3]=(f*c*r-s*h*r-f*i*l+n*h*l+s*i*m-n*c*m)*A,e[4]=S*A,e[5]=(u*p*r-g*h*r+g*i*m-t*p*m-u*i*x+t*h*x)*A,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*x-t*c*x)*A,e[7]=(a*h*r-u*c*r+u*i*l-t*h*l-a*i*m+t*c*m)*A,e[8]=M*A,e[9]=(g*f*r-u*d*r-g*n*m+t*d*m+u*n*x-t*f*x)*A,e[10]=(a*d*r-g*s*r+g*n*l-t*d*l-a*n*x+t*s*x)*A,e[11]=(u*s*r-a*f*r-u*n*l+t*f*l+a*n*m-t*s*m)*A,e[12]=y*A,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*p+t*f*p)*A,e[14]=(g*s*i-a*d*i-g*n*c+t*d*c+a*n*p-t*s*p)*A,e[15]=(a*f*i-u*s*i+u*n*c-t*f*c-a*n*h+t*s*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,c=e.z,l=r*a,u=r*s;return this.set(l*a+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*a,0,l*c-i*s,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,c=t._w,l=r+r,u=a+a,f=s+s,h=r*l,m=r*u,g=r*f,d=a*u,p=a*f,x=s*f,v=c*l,S=c*u,M=c*f,y=n.x,E=n.y,A=n.z;return i[0]=(1-(d+x))*y,i[1]=(m+M)*y,i[2]=(g-S)*y,i[3]=0,i[4]=(m-M)*E,i[5]=(1-(h+x))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(g+S)*A,i[9]=(p-v)*A,i[10]=(1-(h+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=bi.set(i[0],i[1],i[2]).length();const a=bi.set(i[4],i[5],i[6]).length(),s=bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const l=1/r,u=1/a,f=1/s;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,c=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,c=1/(t-e),l=1/(n-i),u=1/(a-r),f=(t+e)*c,h=(n+i)*l,m=(a+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new I,qt=new st,Af=new I(0,0,0),Lf=new I(1,1,1),Dn=new I,Br=new I,St=new I,il=new st,rl=new Cr;class Lr{constructor(e=0,t=0,n=0,i=Lr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Lr.DefaultOrder="XYZ";Lr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pf=0;const sl=new I,wi=new Cr,dn=new st,kr=new I,ar=new I,Df=new I,Rf=new Cr,al=new I(1,0,0),ol=new I(0,1,0),ll=new I(0,0,1),If={type:"added"},cl={type:"removed"};class Vt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DefaultUp.clone();const e=new I,t=new Lr,n=new Cr,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new kt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Vt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return sl.copy(e).applyQuaternion(this.quaternion),this.position.add(sl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(ar,kr,this.up):dn.lookAt(kr,ar,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(dn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(If)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(cl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(e.materials,this.material[c]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(e.animations,c))}}if(t){const s=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Vt.DefaultUp=new I(0,1,0);Vt.DefaultMatrixAutoUpdate=!0;const Xt=new I,pn=new I,Zs=new I,mn=new I,Ti=new I,Ei=new I,ul=new I,$s=new I,Ks=new I,Js=new I;class vn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xt.subVectors(e,t),i.cross(Xt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xt.subVectors(i,t),pn.subVectors(n,t),Zs.subVectors(e,t);const a=Xt.dot(Xt),s=Xt.dot(pn),c=Xt.dot(Zs),l=pn.dot(pn),u=pn.dot(Zs),f=a*l-s*s;if(f===0)return r.set(-2,-1,-1);const h=1/f,m=(l*c-s*u)*h,g=(a*u-s*c)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(e,t,n,i,r,a,s,c){return this.getBarycoord(e,t,n,i,mn),c.set(0,0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(s,mn.z),c}static isFrontFacing(e,t,n,i){return Xt.subVectors(n,t),pn.subVectors(e,t),Xt.cross(pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Xt.cross(pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return vn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;Ti.subVectors(i,n),Ei.subVectors(r,n),$s.subVectors(e,n);const c=Ti.dot($s),l=Ei.dot($s);if(c<=0&&l<=0)return t.copy(n);Ks.subVectors(e,i);const u=Ti.dot(Ks),f=Ei.dot(Ks);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ti,a);Js.subVectors(e,r);const m=Ti.dot(Js),g=Ei.dot(Js);if(g>=0&&m<=g)return t.copy(r);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return s=l/(l-g),t.copy(n).addScaledVector(Ei,s);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return ul.subVectors(r,i),s=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(ul,s);const x=1/(p+d+h);return a=d*x,s=h*x,t.copy(n).addScaledVector(Ti,a).addScaledVector(Ei,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ff=0;class _s extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Er(),this.name="",this.type="Material",this.blending=ki,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fc,this.blendDst=zc,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ah;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qc extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new I,Gr=new Ae;class an{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ko,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new Oe),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ae),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new I),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new et),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xc extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yc extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zf=0;const Rt=new st,Qs=new Vt,Ci=new I,bt=new Ar,or=new Ar,Qe=new I;class Hn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Yc:Xc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Qs.lookAt(e),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];bt.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];or.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(bt.min,or.min),bt.expandByPoint(Qe),Qe.addVectors(bt.max,or.max),bt.expandByPoint(Qe)):(bt.expandByPoint(or.min),bt.expandByPoint(or.max))}bt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Qe.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)Qe.fromBufferAttribute(s,l),c&&(Ci.fromBufferAttribute(e,l),Qe.add(Ci)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<s;L++)l[L]=new I,u[L]=new I;const f=new I,h=new I,m=new I,g=new Ae,d=new Ae,p=new Ae,x=new I,v=new I;function S(L,R,Z){f.fromArray(i,L*3),h.fromArray(i,R*3),m.fromArray(i,Z*3),g.fromArray(a,L*2),d.fromArray(a,R*2),p.fromArray(a,Z*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const j=1/(d.x*p.y-p.x*d.y);!isFinite(j)||(x.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(j),v.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(j),l[L].add(x),l[R].add(x),l[Z].add(x),u[L].add(v),u[R].add(v),u[Z].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,R=M.length;L<R;++L){const Z=M[L],j=Z.start,D=Z.count;for(let V=j,N=j+D;V<N;V+=3)S(n[V+0],n[V+1],n[V+2])}const y=new I,E=new I,A=new I,_=new I;function b(L){A.fromArray(r,L*3),_.copy(A);const R=l[L];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(_,R);const j=E.dot(u[L])<0?-1:1;c[L*4]=y.x,c[L*4+1]=y.y,c[L*4+2]=y.z,c[L*4+3]=j}for(let L=0,R=M.length;L<R;++L){const Z=M[L],j=Z.start,D=Z.count;for(let V=j,N=j+D;V<N;V+=3)b(n[V+0]),b(n[V+1]),b(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new I,r=new I,a=new I,s=new I,c=new I,l=new I,u=new I,f=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),s.add(u),c.add(u),l.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,s=e.attributes[i],c=s.array,l=s.itemSize*t,u=Math.min(c.length,a.length-l);for(let f=0,h=l;f<u;f++,h++)a[h]=c[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(s,c){const l=s.array,u=s.itemSize,f=s.normalized,h=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){s.isInterleavedBufferAttribute?m=c[d]*s.data.stride+s.offset:m=c[d]*u;for(let x=0;x<u;x++)h[g++]=l[m++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=e(c,n);t.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,f=l.length;u<f;u++){const h=l[u],m=e(h,n);c.push(m)}t.morphAttributes[s]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const m=l[f];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const hl=new st,Ai=new Cf,ea=new Ka,Rn=new I,In=new I,Fn=new I,ta=new I,na=new I,ia=new I,Vr=new I,Wr=new I,Hr=new I,qr=new Ae,Xr=new Ae,Yr=new Ae,ra=new I,jr=new I;class Mn extends Vt{constructor(e=new Hn,t=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),e.ray.intersectsSphere(ea)===!1)||(hl.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(hl),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],v=i[x.materialIndex],S=Math.max(x.start,g.start),M=Math.min(s.count,Math.min(x.start+x.count,g.start+g.count));for(let y=S,E=M;y<E;y+=3){const A=s.getX(y),_=s.getX(y+1),b=s.getX(y+2);a=Zr(this,v,e,Ai,c,l,u,f,h,A,_,b),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let x=d,v=p;x<v;x+=3){const S=s.getX(x),M=s.getX(x+1),y=s.getX(x+2);a=Zr(this,i,e,Ai,c,l,u,f,h,S,M,y),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const x=m[d],v=i[x.materialIndex],S=Math.max(x.start,g.start),M=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let y=S,E=M;y<E;y+=3){const A=y,_=y+1,b=y+2;a=Zr(this,v,e,Ai,c,l,u,f,h,A,_,b),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const d=Math.max(0,g.start),p=Math.min(c.count,g.start+g.count);for(let x=d,v=p;x<v;x+=3){const S=x,M=x+1,y=x+2;a=Zr(this,i,e,Ai,c,l,u,f,h,S,M,y),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Nf(o,e,t,n,i,r,a,s){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,e.side!==Zi,s),c===null)return null;jr.copy(s),jr.applyMatrix4(o.matrixWorld);const l=t.ray.origin.distanceTo(jr);return l<t.near||l>t.far?null:{distance:l,point:jr.clone(),object:o}}function Zr(o,e,t,n,i,r,a,s,c,l,u,f){Rn.fromBufferAttribute(i,l),In.fromBufferAttribute(i,u),Fn.fromBufferAttribute(i,f);const h=o.morphTargetInfluences;if(r&&h){Vr.set(0,0,0),Wr.set(0,0,0),Hr.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=h[g],x=r[g];p!==0&&(ta.fromBufferAttribute(x,l),na.fromBufferAttribute(x,u),ia.fromBufferAttribute(x,f),a?(Vr.addScaledVector(ta,p),Wr.addScaledVector(na,p),Hr.addScaledVector(ia,p)):(Vr.addScaledVector(ta.sub(Rn),p),Wr.addScaledVector(na.sub(In),p),Hr.addScaledVector(ia.sub(Fn),p)))}Rn.add(Vr),In.add(Wr),Fn.add(Hr)}o.isSkinnedMesh&&(o.boneTransform(l,Rn),o.boneTransform(u,In),o.boneTransform(f,Fn));const m=Nf(o,e,t,n,Rn,In,Fn,ra);if(m){s&&(qr.fromBufferAttribute(s,l),Xr.fromBufferAttribute(s,u),Yr.fromBufferAttribute(s,f),m.uv=vn.getUV(ra,Rn,In,Fn,qr,Xr,Yr,new Ae)),c&&(qr.fromBufferAttribute(c,l),Xr.fromBufferAttribute(c,u),Yr.fromBufferAttribute(c,f),m.uv2=vn.getUV(ra,Rn,In,Fn,qr,Xr,Yr,new Ae));const g={a:l,b:u,c:f,normal:new I,materialIndex:0};vn.getNormal(Rn,In,Fn,g.normal),m.face=g}return m}class Pr extends Hn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2));function g(d,p,x,v,S,M,y,E,A,_,b){const L=M/A,R=y/_,Z=M/2,j=y/2,D=E/2,V=A+1,N=_+1;let k=0,q=0;const O=new I;for(let W=0;W<N;W++){const J=W*R-j;for(let $=0;$<V;$++){const K=$*L-Z;O[d]=K*v,O[p]=J*S,O[x]=D,l.push(O.x,O.y,O.z),O[d]=0,O[p]=0,O[x]=E>0?1:-1,u.push(O.x,O.y,O.z),f.push($/A),f.push(1-W/_),k+=1}}for(let W=0;W<_;W++)for(let J=0;J<A;J++){const $=h+J+V*W,K=h+J+V*(W+1),ie=h+(J+1)+V*(W+1),fe=h+(J+1)+V*W;c.push($,K,fe),c.push(K,ie,fe),q+=6}s.addGroup(m,q,b),m+=q,h+=k}}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ot(o){const e={};for(let t=0;t<o.length;t++){const n=Qi(o[t]);for(const i in n)e[i]=n[i]}return e}function Of(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const Uf={clone:Qi,merge:ot};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jc extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Os*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=90,Pi=1;class Gf extends Vt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Nt(Li,Pi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new I(1,0,0)),this.add(i);const r=new Nt(Li,Pi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(-1,0,0)),this.add(r);const a=new Nt(Li,Pi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new I(0,1,0)),this.add(a);const s=new Nt(Li,Pi,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new I(0,-1,0)),this.add(s);const c=new Nt(Li,Pi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,1)),this.add(c);const l=new Nt(Li,Pi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Sn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Zc extends $t{constructor(e,t,n,i,r,a,s,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:$i,super(e,t,n,i,r,a,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vf extends di{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pr(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:kn});r.uniforms.tEquirect.value=t;const a=new Mn(i,r),s=t.minFilter;return t.minFilter===gs&&(t.minFilter=zt),new Gf(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const sa=new I,Wf=new I,Hf=new kt;class Jn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sa.subVectors(n,t).cross(Wf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hf.getNormalMatrix(e),i=this.coplanarPoint(sa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ka,$r=new I;class $c{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],m=n[9],g=n[10],d=n[11],p=n[12],x=n[13],v=n[14],S=n[15];return t[0].setComponents(s-i,f-c,d-h,S-p).normalize(),t[1].setComponents(s+i,f+c,d+h,S+p).normalize(),t[2].setComponents(s+r,f+l,d+m,S+x).normalize(),t[3].setComponents(s-r,f-l,d-m,S-x).normalize(),t[4].setComponents(s-a,f-u,d-g,S-v).normalize(),t[5].setComponents(s+a,f+u,d+g,S+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($r.x=i.normal.x>0?e.max.x:e.min.x,$r.y=i.normal.y>0?e.max.y:e.min.y,$r.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function qf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,m=u.updateRange;o.bindBuffer(f,l),m.count===-1?o.bufferSubData(f,0,h):(t?o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):o.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:a,remove:s,update:c}}class Ja extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,f=e/s,h=t/c,m=[],g=[],d=[],p=[];for(let x=0;x<u;x++){const v=x*h-a;for(let S=0;S<l;S++){const M=S*f-r;g.push(M,-v,0),d.push(0,0,1),p.push(S/s),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let v=0;v<s;v++){const S=v+l*x,M=v+l*(x+1),y=v+1+l*(x+1),E=v+1+l*x;m.push(S,M,E),m.push(M,y,E)}this.setIndex(m),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(p,2))}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Yf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf="vec3 transformed = vec3( position );",Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,td=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
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
}`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,dd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xd="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Id=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,Fd=`#if defined( USE_ENVMAP )
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
#endif`,zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,kd=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
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
}`,Gd=`
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tp=`#ifdef USE_MORPHNORMALS
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
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,sp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,bp=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,wp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Tp=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,zp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
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
#endif`,Np=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Op=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Up=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Gp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,Zp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
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
}`,nm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
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
}`,im=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,om=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,um=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
}`,hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,fm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
}`,dm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
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
}`,pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
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
}`,mm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,be={alphamap_fragment:Xf,alphamap_pars_fragment:Yf,alphatest_fragment:jf,alphatest_pars_fragment:Zf,aomap_fragment:$f,aomap_pars_fragment:Kf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:ed,iridescence_fragment:td,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:sd,clipping_planes_vertex:ad,color_fragment:od,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:ud,common:hd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:dd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:_d,encodings_fragment:xd,encodings_pars_fragment:vd,envmap_fragment:yd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Fd,envmap_vertex:wd,fog_vertex:Td,fog_pars_vertex:Ed,fog_fragment:Cd,fog_pars_fragment:Ad,gradientmap_pars_fragment:Ld,lightmap_fragment:Pd,lightmap_pars_fragment:Dd,lights_lambert_vertex:Rd,lights_pars_begin:Id,lights_toon_fragment:zd,lights_toon_pars_fragment:Nd,lights_phong_fragment:Od,lights_phong_pars_fragment:Ud,lights_physical_fragment:Bd,lights_physical_pars_fragment:kd,lights_fragment_begin:Gd,lights_fragment_maps:Vd,lights_fragment_end:Wd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:Yd,map_fragment:jd,map_pars_fragment:Zd,map_particle_fragment:$d,map_particle_pars_fragment:Kd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:Qd,morphcolor_vertex:ep,morphnormal_vertex:tp,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:rp,normal_fragment_maps:sp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:hp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:dp,output_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:vp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:bp,shadowmap_vertex:wp,shadowmask_pars_fragment:Tp,skinbase_vertex:Ep,skinning_pars_vertex:Cp,skinning_vertex:Ap,skinnormal_vertex:Lp,specularmap_fragment:Pp,specularmap_pars_fragment:Dp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Ip,transmission_fragment:Fp,transmission_pars_fragment:zp,uv_pars_fragment:Np,uv_pars_vertex:Op,uv_vertex:Up,uv2_pars_fragment:Bp,uv2_pars_vertex:kp,uv2_vertex:Gp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Hp,cube_vert:qp,cube_frag:Xp,depth_vert:Yp,depth_frag:jp,distanceRGBA_vert:Zp,distanceRGBA_frag:$p,equirect_vert:Kp,equirect_frag:Jp,linedashed_vert:Qp,linedashed_frag:em,meshbasic_vert:tm,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:rm,meshmatcap_vert:sm,meshmatcap_frag:am,meshnormal_vert:om,meshnormal_frag:lm,meshphong_vert:cm,meshphong_frag:um,meshphysical_vert:hm,meshphysical_frag:fm,meshtoon_vert:dm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:xm,sprite_vert:vm,sprite_frag:ym},te={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new kt},uv2Transform:{value:new kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new kt}}},en={basic:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ot([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ot([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Oe(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ot([te.points,te.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ot([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ot([te.common,te.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ot([te.sprite,te.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null}},vertexShader:be.background_vert,fragmentShader:be.background_frag},cube:{uniforms:ot([te.envmap,{opacity:{value:1}}]),vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:ot([te.common,te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:ot([te.lights,te.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};en.physical={uniforms:ot([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};function Mm(o,e,t,n,i,r){const a=new Oe(0);let s=i===!0?0:1,c,l,u=null,f=0,h=null;function m(d,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const S=o.xr,M=S.getSession&&S.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?g(a,s):v&&v.isColor&&(g(v,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ms)?(l===void 0&&(l=new Mn(new Pr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Qi(en.cube.uniforms),vertexShader:en.cube.vertexShader,fragmentShader:en.cube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||h!==o.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new Ja(2,2),new Vn({name:"BackgroundMaterial",uniforms:Qi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),s=p,g(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(a,s)},render:m}}function Sm(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=p(null);let l=c,u=!1;function f(D,V,N,k,q){let O=!1;if(a){const W=d(k,N,V);l!==W&&(l=W,m(l.object)),O=x(D,k,N,q),O&&v(D,k,N,q)}else{const W=V.wireframe===!0;(l.geometry!==k.id||l.program!==N.id||l.wireframe!==W)&&(l.geometry=k.id,l.program=N.id,l.wireframe=W,O=!0)}q!==null&&t.update(q,34963),(O||u)&&(u=!1,_(D,V,N,k),q!==null&&o.bindBuffer(34963,t.get(q).buffer))}function h(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?o.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?o.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function d(D,V,N){const k=N.wireframe===!0;let q=s[D.id];q===void 0&&(q={},s[D.id]=q);let O=q[V.id];O===void 0&&(O={},q[V.id]=O);let W=O[k];return W===void 0&&(W=p(h()),O[k]=W),W}function p(D){const V=[],N=[],k=[];for(let q=0;q<i;q++)V[q]=0,N[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:N,attributeDivisors:k,object:D,attributes:{},index:null}}function x(D,V,N,k){const q=l.attributes,O=V.attributes;let W=0;const J=N.getAttributes();for(const $ in J)if(J[$].location>=0){const ie=q[$];let fe=O[$];if(fe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;W++}return l.attributesNum!==W||l.index!==k}function v(D,V,N,k){const q={},O=V.attributes;let W=0;const J=N.getAttributes();for(const $ in J)if(J[$].location>=0){let ie=O[$];ie===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),q[$]=fe,W++}l.attributes=q,l.attributesNum=W,l.index=k}function S(){const D=l.newAttributes;for(let V=0,N=D.length;V<N;V++)D[V]=0}function M(D){y(D,0)}function y(D,V){const N=l.newAttributes,k=l.enabledAttributes,q=l.attributeDivisors;N[D]=1,k[D]===0&&(o.enableVertexAttribArray(D),k[D]=1),q[D]!==V&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),q[D]=V)}function E(){const D=l.newAttributes,V=l.enabledAttributes;for(let N=0,k=V.length;N<k;N++)V[N]!==D[N]&&(o.disableVertexAttribArray(N),V[N]=0)}function A(D,V,N,k,q,O){n.isWebGL2===!0&&(N===5124||N===5125)?o.vertexAttribIPointer(D,V,N,q,O):o.vertexAttribPointer(D,V,N,k,q,O)}function _(D,V,N,k){if(n.isWebGL2===!1&&(D.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const q=k.attributes,O=N.getAttributes(),W=V.defaultAttributeValues;for(const J in O){const $=O[J];if($.location>=0){let K=q[J];if(K===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const ie=K.normalized,fe=K.itemSize,X=t.get(K);if(X===void 0)continue;const Re=X.buffer,me=X.type,ge=X.bytesPerElement;if(K.isInterleavedBufferAttribute){const le=K.data,Ne=le.stride,Se=K.offset;if(le.isInstancedInterleavedBuffer){for(let de=0;de<$.locationSize;de++)y($.location+de,le.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<$.locationSize;de++)M($.location+de);o.bindBuffer(34962,Re);for(let de=0;de<$.locationSize;de++)A($.location+de,fe/$.locationSize,me,ie,Ne*ge,(Se+fe/$.locationSize*de)*ge)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<$.locationSize;le++)y($.location+le,K.meshPerAttribute);D.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<$.locationSize;le++)M($.location+le);o.bindBuffer(34962,Re);for(let le=0;le<$.locationSize;le++)A($.location+le,fe/$.locationSize,me,ie,fe*ge,fe/$.locationSize*le*ge)}}else if(W!==void 0){const ie=W[J];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv($.location,ie);break;case 3:o.vertexAttrib3fv($.location,ie);break;case 4:o.vertexAttrib4fv($.location,ie);break;default:o.vertexAttrib1fv($.location,ie)}}}}E()}function b(){Z();for(const D in s){const V=s[D];for(const N in V){const k=V[N];for(const q in k)g(k[q].object),delete k[q];delete V[N]}delete s[D]}}function L(D){if(s[D.id]===void 0)return;const V=s[D.id];for(const N in V){const k=V[N];for(const q in k)g(k[q].object),delete k[q];delete V[N]}delete s[D.id]}function R(D){for(const V in s){const N=s[V];if(N[D.id]===void 0)continue;const k=N[D.id];for(const q in k)g(k[q].object),delete k[q];delete N[D.id]}}function Z(){j(),u=!0,l!==c&&(l=c,m(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:j,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:M,disableUnusedAttributes:E}}function bm(o,e,t,n){const i=n.isWebGL2;let r;function a(l){r=l}function s(l,u){o.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,m;if(i)h=o,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](r,l,u,f),t.update(u,r,f)}this.setMode=a,this.render=s,this.renderInstances=c}function wm(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=o.getParameter(34930),h=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),x=o.getParameter(36348),v=o.getParameter(36349),S=h>0,M=a||e.has("OES_texture_float"),y=S&&M,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:S,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:E}}function Tm(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Jn,s=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||n!==0||i;return i=h,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,x=o.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const v=r?0:n,S=v*4;let M=x.clippingState||null;c.value=M,M=u(g,h,S,m);for(let y=0;y!==S;++y)M[y]=t[y];x.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const x=m+d*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<x)&&(p=new Float32Array(x));for(let S=0,M=m;S!==d;++S,M+=4)a.copy(f[S]).applyMatrix4(v,s),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Em(o){let e=new WeakMap;function t(a,s){return s===Ca?a.mapping=$i:s===Aa&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Ca||s===Aa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vf(c.height/2);return l.fromEquirectangularTexture(o,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=e.get(s);c!==void 0&&(e.delete(s),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Cm extends jc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ni=4,fl=[.125,.215,.35,.446,.526,.582],ei=20,aa=new Cm,dl=new Oe;let oa=null;const Qn=(1+Math.sqrt(5))/2,Ri=1/Qn,pl=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Qn,Ri),new I(0,Qn,-Ri),new I(Ri,0,Qn),new I(-Ri,0,Qn),new I(Qn,Ri,0),new I(-Qn,Ri,0)];class ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){oa=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa),e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$i||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:wr,format:nn,encoding:fi,depthBuffer:!1},i=gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Am(r)),this._blurMaterial=Lm(r,e,t)}return i}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,i){const s=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(dl),u.toneMapping=Sn,u.autoClear=!1;const m=new qc({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new Mn(new Pr,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(dl),d=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(s.up.set(0,c[x],0),s.lookAt(l[x],0,0)):v===1?(s.up.set(0,0,c[x]),s.lookAt(0,l[x],0)):(s.up.set(0,c[x],0),s.lookAt(0,0,l[x]));const S=this._cubeSize;Kr(i,v*S,x>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$i||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const c=this._cubeSize;Kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=pl[(i-1)%pl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mn(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ei-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ei;p>ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ei}`);const x=[];let v=0;for(let A=0;A<ei;++A){const _=A/d,b=Math.exp(-_*_/2);x.push(b),A===0?v+=b:A<p&&(v+=2*b)}for(let A=0;A<x.length;A++)x[A]=x[A]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=x,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const M=this._sizeLods[i],y=3*M*(i>S-Ni?i-S+Ni:0),E=4*(this._cubeSize-M);Kr(t,y,E,3*M,2*M),c.setRenderTarget(t),c.render(f,aa)}}function Am(o){const e=[],t=[],n=[];let i=o;const r=o-Ni+1+fl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let c=1/s;a>o-Ni?c=fl[a-o+Ni-1]:a===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,x=1,v=new Float32Array(d*g*m),S=new Float32Array(p*g*m),M=new Float32Array(x*g*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,_=E>2?0:-1,b=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];v.set(b,d*g*E),S.set(h,p*g*E);const L=[E,E,E,E,E,E];M.set(L,x*g*E)}const y=new Hn;y.setAttribute("position",new an(v,d)),y.setAttribute("uv",new an(S,p)),y.setAttribute("faceIndex",new an(M,x)),e.push(y),i>Ni&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gl(o,e,t){const n=new di(o,e,t);return n.texture.mapping=ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Lm(o,e,t){const n=new Float32Array(ei),i=new I(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _l(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function xl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function Pm(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Ca||c===Aa,u=c===$i||c===Ki;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new ml(o)),f=l?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new ml(o));const h=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Dm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rm(o,e,t,n){const i={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,x=d.length;p<x;p++)e.update(d[p],34962)}}function l(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let S=0,M=v.length;S<M;S+=3){const y=v[S+0],E=v[S+1],A=v[S+2];h.push(y,E,E,A,A,y)}}else{const v=g.array;d=g.version;for(let S=0,M=v.length/3-1;S<M;S+=3){const y=S+0,E=S+1,A=S+2;h.push(y,E,E,A,A,y)}}const p=new(Bc(h)?Yc:Xc)(h,1);p.version=d;const x=r.get(f);x&&e.remove(x),r.set(f,p)}function u(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:s,update:c,getWireframeAttribute:u}}function Im(o,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}let s,c;function l(h){s=h.type,c=h.bytesPerElement}function u(h,m){o.drawElements(r,m,s,h*c),t.update(m,r,1)}function f(h,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,h*c,g),t.update(m,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function Fm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zm(o,e){return o[0]-e[0]}function Nm(o,e){return Math.abs(e[1])-Math.abs(o[1])}function la(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function Om(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new et,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,f,h){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==p){let N=function(){D.dispose(),r.delete(u),u.removeEventListener("dispose",N)};var g=N;x!==void 0&&x.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;M===!0&&(L=1),y===!0&&(L=2),E===!0&&(L=3);let R=u.attributes.position.count*L,Z=1;R>e.maxTextureSize&&(Z=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const j=new Float32Array(R*Z*4*p),D=new Wc(j,R,Z,p);D.type=ii,D.needsUpdate=!0;const V=L*4;for(let k=0;k<p;k++){const q=A[k],O=_[k],W=b[k],J=R*Z*4*k;for(let $=0;$<q.count;$++){const K=$*V;M===!0&&(a.fromBufferAttribute(q,$),q.normalized===!0&&la(a,q),j[J+K+0]=a.x,j[J+K+1]=a.y,j[J+K+2]=a.z,j[J+K+3]=0),y===!0&&(a.fromBufferAttribute(O,$),O.normalized===!0&&la(a,O),j[J+K+4]=a.x,j[J+K+5]=a.y,j[J+K+6]=a.z,j[J+K+7]=0),E===!0&&(a.fromBufferAttribute(W,$),W.normalized===!0&&la(a,W),j[J+K+8]=a.x,j[J+K+9]=a.y,j[J+K+10]=a.z,j[J+K+11]=W.itemSize===4?a.w:1)}}x={count:p,texture:D,size:new Ae(R,Z)},r.set(u,x),u.addEventListener("dispose",N)}let v=0;for(let M=0;M<m.length;M++)v+=m[M];const S=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(o,"morphTargetBaseInfluence",S),h.getUniforms().setValue(o,"morphTargetInfluences",m),h.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const E=p[y];E[0]=y,E[1]=m[y]}p.sort(Nm);for(let y=0;y<8;y++)y<d&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(zm);const x=u.morphAttributes.position,v=u.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const E=s[y],A=E[0],_=E[1];A!==Number.MAX_SAFE_INTEGER&&_?(x&&u.getAttribute("morphTarget"+y)!==x[A]&&u.setAttribute("morphTarget"+y,x[A]),v&&u.getAttribute("morphNormal"+y)!==v[A]&&u.setAttribute("morphNormal"+y,v[A]),i[y]=_,S+=_):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(o,"morphTargetBaseInfluence",M),h.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function Um(o,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function a(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Jc=new $t,Qc=new Wc,eu=new Tf,tu=new Zc,vl=[],yl=[],Ml=new Float32Array(16),Sl=new Float32Array(9),bl=new Float32Array(4);function tr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=vl[i];if(r===void 0&&(r=new Float32Array(i),vl[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function ft(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function dt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function xs(o,e){let t=yl[e];t===void 0&&(t=new Int32Array(e),yl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Bm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function km(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;o.uniform2fv(this.addr,e),dt(t,e)}}function Gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;o.uniform3fv(this.addr,e),dt(t,e)}}function Vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;o.uniform4fv(this.addr,e),dt(t,e)}}function Wm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;bl.set(n),o.uniformMatrix2fv(this.addr,!1,bl),dt(t,n)}}function Hm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Sl.set(n),o.uniformMatrix3fv(this.addr,!1,Sl),dt(t,n)}}function qm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;Ml.set(n),o.uniformMatrix4fv(this.addr,!1,Ml),dt(t,n)}}function Xm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Ym(o,e){const t=this.cache;ft(t,e)||(o.uniform2iv(this.addr,e),dt(t,e))}function jm(o,e){const t=this.cache;ft(t,e)||(o.uniform3iv(this.addr,e),dt(t,e))}function Zm(o,e){const t=this.cache;ft(t,e)||(o.uniform4iv(this.addr,e),dt(t,e))}function $m(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Km(o,e){const t=this.cache;ft(t,e)||(o.uniform2uiv(this.addr,e),dt(t,e))}function Jm(o,e){const t=this.cache;ft(t,e)||(o.uniform3uiv(this.addr,e),dt(t,e))}function Qm(o,e){const t=this.cache;ft(t,e)||(o.uniform4uiv(this.addr,e),dt(t,e))}function eg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Jc,i)}function tg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eu,i)}function ng(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tu,i)}function ig(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qc,i)}function rg(o){switch(o){case 5126:return Bm;case 35664:return km;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Hm;case 35676:return qm;case 5124:case 35670:return Xm;case 35667:case 35671:return Ym;case 35668:case 35672:return jm;case 35669:case 35673:return Zm;case 5125:return $m;case 36294:return Km;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function sg(o,e){o.uniform1fv(this.addr,e)}function ag(o,e){const t=tr(e,this.size,2);o.uniform2fv(this.addr,t)}function og(o,e){const t=tr(e,this.size,3);o.uniform3fv(this.addr,t)}function lg(o,e){const t=tr(e,this.size,4);o.uniform4fv(this.addr,t)}function cg(o,e){const t=tr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ug(o,e){const t=tr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function hg(o,e){const t=tr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function fg(o,e){o.uniform1iv(this.addr,e)}function dg(o,e){o.uniform2iv(this.addr,e)}function pg(o,e){o.uniform3iv(this.addr,e)}function mg(o,e){o.uniform4iv(this.addr,e)}function gg(o,e){o.uniform1uiv(this.addr,e)}function _g(o,e){o.uniform2uiv(this.addr,e)}function xg(o,e){o.uniform3uiv(this.addr,e)}function vg(o,e){o.uniform4uiv(this.addr,e)}function yg(o,e,t){const n=e.length,i=xs(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Jc,i[r])}function Mg(o,e,t){const n=e.length,i=xs(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||eu,i[r])}function Sg(o,e,t){const n=e.length,i=xs(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||tu,i[r])}function bg(o,e,t){const n=e.length,i=xs(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Qc,i[r])}function wg(o){switch(o){case 5126:return sg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return hg;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}class Tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=rg(t.type)}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wg(t.type)}}class Cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function wl(o,e){o.seq.push(e),o.map[e.id]=e}function Ag(o,e,t){const n=o.name,i=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),a=ca.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===i){wl(t,l===void 0?new Tg(s,o,e):new Eg(s,o,e));break}else{let f=t.map[s];f===void 0&&(f=new Cg(s),wl(t,f)),t=f}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Ag(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Tl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Lg=0;function Pg(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Dg(o){switch(o){case fi:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function El(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Pg(o.getShaderSource(e),a)}else return i}function Rg(o,e){const t=Dg(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ig(o,e){let t;switch(e){case $h:t="Linear";break;case Kh:t="Reinhard";break;case Jh:t="OptimizedCineon";break;case Qh:t="ACESFilmic";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fg(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hr).join(`
`)}function zg(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function hr(o){return o!==""}function Cl(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Og=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(o){return o.replace(Og,Ug)}function Ug(o,e){const t=be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ia(t)}const Bg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(o){return o.replace(kg,nu).replace(Bg,Gg)}function Gg(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),nu(o,e,t,n)}function nu(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function Wg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case $i:case Ki:e="ENVMAP_TYPE_CUBE";break;case ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hg(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function qg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case jh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function Xg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yg(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const c=Vg(t),l=Wg(t),u=Hg(t),f=qg(t),h=Xg(t),m=t.isWebGL2?"":Fg(t),g=zg(r),d=i.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(hr).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(hr).join(`
`),x.length>0&&(x+=`
`)):(p=[Pl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),x=[m,Pl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?be.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.encodings_pars_fragment,Rg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),a=Ia(a),a=Cl(a,t),a=Al(a,t),s=Ia(s),s=Cl(s,t),s=Al(s,t),a=Ll(a),s=Ll(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=v+p+a,M=v+x+s,y=Tl(i,35633,S),E=Tl(i,35632,M);if(i.attachShader(d,y),i.attachShader(d,E),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const b=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(y).trim(),R=i.getShaderInfoLog(E).trim();let Z=!0,j=!0;if(i.getProgramParameter(d,35714)===!1){Z=!1;const D=El(i,y,"vertex"),V=El(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+D+`
`+V)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||R==="")&&(j=!1);j&&(this.diagnostics={runnable:Z,programLog:b,vertexShader:{log:L,prefix:p},fragmentShader:{log:R,prefix:x}})}i.deleteShader(y),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new ns(i,d)),A};let _;return this.getAttributes=function(){return _===void 0&&(_=Ng(i,d)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Lg++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=E,this}let jg=0;class Zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new $g(e);t.set(e,n)}return t.get(e)}}class $g{constructor(e){this.id=jg++,this.code=e,this.usedTimes=0}}function Kg(o,e,t,n,i,r,a){const s=new Hc,c=new Zg,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_,b,L,R,Z){const j=R.fog,D=Z.geometry,V=_.isMeshStandardMaterial?R.environment:null,N=(_.isMeshStandardMaterial?t:e).get(_.envMap||V),k=!!N&&N.mapping===ms?N.image.height:null,q=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const O=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,W=O!==void 0?O.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let $,K,ie,fe;if(q){const Ne=en[q];$=Ne.vertexShader,K=Ne.fragmentShader}else $=_.vertexShader,K=_.fragmentShader,c.update(_),ie=c.getVertexShaderID(_),fe=c.getFragmentShaderID(_);const X=o.getRenderTarget(),Re=_.alphaTest>0,me=_.clearcoat>0,ge=_.iridescence>0;return{isWebGL2:u,shaderID:q,shaderName:_.type,vertexShader:$,fragmentShader:K,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?o.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:fi,map:!!_.map,matcap:!!_.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:k,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Mf,tangentSpaceNormalMap:_.normalMapType===yf,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ge,clearcoat:me,clearcoatMap:me&&!!_.clearcoatMap,clearcoatRoughnessMap:me&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!_.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!_.iridescenceMap,iridescenceThicknessMap:ge&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ki,alphaMap:!!_.alphaMap,alphaTest:Re,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!D.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!j,useFog:_.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:Sn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zi,flipSided:_.side===Zt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(b,_),v(b,_),b.push(o.outputEncoding)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputEncoding),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.combine),_.push(b.vertexUvs),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function v(_,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.map&&s.enable(4),b.matcap&&s.enable(5),b.envMap&&s.enable(6),b.lightMap&&s.enable(7),b.aoMap&&s.enable(8),b.emissiveMap&&s.enable(9),b.bumpMap&&s.enable(10),b.normalMap&&s.enable(11),b.objectSpaceNormalMap&&s.enable(12),b.tangentSpaceNormalMap&&s.enable(13),b.clearcoat&&s.enable(14),b.clearcoatMap&&s.enable(15),b.clearcoatRoughnessMap&&s.enable(16),b.clearcoatNormalMap&&s.enable(17),b.iridescence&&s.enable(18),b.iridescenceMap&&s.enable(19),b.iridescenceThicknessMap&&s.enable(20),b.displacementMap&&s.enable(21),b.specularMap&&s.enable(22),b.roughnessMap&&s.enable(23),b.metalnessMap&&s.enable(24),b.gradientMap&&s.enable(25),b.alphaMap&&s.enable(26),b.alphaTest&&s.enable(27),b.vertexColors&&s.enable(28),b.vertexAlphas&&s.enable(29),b.vertexUvs&&s.enable(30),b.vertexTangents&&s.enable(31),b.uvsVertexOnly&&s.enable(32),b.fog&&s.enable(33),_.push(s.mask),s.disableAll(),b.useFog&&s.enable(0),b.flatShading&&s.enable(1),b.logarithmicDepthBuffer&&s.enable(2),b.skinning&&s.enable(3),b.morphTargets&&s.enable(4),b.morphNormals&&s.enable(5),b.morphColors&&s.enable(6),b.premultipliedAlpha&&s.enable(7),b.shadowMapEnabled&&s.enable(8),b.physicallyCorrectLights&&s.enable(9),b.doubleSided&&s.enable(10),b.flipSided&&s.enable(11),b.useDepthPacking&&s.enable(12),b.dithering&&s.enable(13),b.specularIntensityMap&&s.enable(14),b.specularColorMap&&s.enable(15),b.transmission&&s.enable(16),b.transmissionMap&&s.enable(17),b.thicknessMap&&s.enable(18),b.sheen&&s.enable(19),b.sheenColorMap&&s.enable(20),b.sheenRoughnessMap&&s.enable(21),b.decodeVideoTexture&&s.enable(22),b.opaque&&s.enable(23),_.push(s.mask)}function S(_){const b=g[_.type];let L;if(b){const R=en[b];L=Uf.clone(R.uniforms)}else L=_.uniforms;return L}function M(_,b){let L;for(let R=0,Z=l.length;R<Z;R++){const j=l[R];if(j.cacheKey===b){L=j,++L.usedTimes;break}}return L===void 0&&(L=new Yg(o,b,_,r),l.push(L)),L}function y(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),_.destroy()}}function E(_){c.remove(_)}function A(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:y,releaseShaderCache:E,programs:l,dispose:A}}function Jg(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Dl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Rl(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,m,g,d,p){let x=o[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},o[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=m,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=d,x.group=p),e++,x}function s(f,h,m,g,d,p){const x=a(f,h,m,g,d,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(f,h,m,g,d,p){const x=a(f,h,m,g,d,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function l(f,h){t.length>1&&t.sort(f||Qg),n.length>1&&n.sort(h||Dl),i.length>1&&i.sort(h||Dl)}function u(){for(let f=e,h=o.length;f<h;f++){const m=o[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function e_(){let o=new WeakMap;function e(n,i){let r;return o.has(n)===!1?(r=new Rl,o.set(n,[r])):i>=o.get(n).length?(r=new Rl,o.get(n).push(r)):r=o.get(n)[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function t_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Oe};break;case"SpotLight":t={position:new I,direction:new I,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new I,halfWidth:new I,halfHeight:new I};break}return o[e.id]=t,t}}}function n_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let i_=0;function r_(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function s_(o,e){const t=new t_,n=n_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,a=new st,s=new st;function c(u,f){let h=0,m=0,g=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,x=0,v=0,S=0,M=0,y=0,E=0;u.sort(r_);const A=f!==!0?Math.PI:1;for(let b=0,L=u.length;b<L;b++){const R=u[b],Z=R.color,j=R.intensity,D=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=Z.r*j*A,m+=Z.g*j*A,g+=Z.b*j*A;else if(R.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(R.sh.coefficients[N],j);else if(R.isDirectionalLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const k=R.shadow,q=n.get(R);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=R.shadow.matrix,M++}i.directional[d]=N,d++}else if(R.isSpotLight){const N=t.get(R);if(N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(Z).multiplyScalar(j*A),N.distance=D,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,R.castShadow){const k=R.shadow,q=n.get(R);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=V,i.spotShadowMatrix[x]=R.shadow.matrix,E++}i.spot[x]=N,x++}else if(R.isRectAreaLight){const N=t.get(R);N.color.copy(Z).multiplyScalar(j),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),i.rectArea[v]=N,v++}else if(R.isPointLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity*A),N.distance=R.distance,N.decay=R.decay,R.castShadow){const k=R.shadow,q=n.get(R);q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[p]=q,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=N,p++}else if(R.isHemisphereLight){const N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(j*A),N.groundColor.copy(R.groundColor).multiplyScalar(j*A),i.hemi[S]=N,S++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=te.LTC_FLOAT_1,i.rectAreaLTC2=te.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=te.LTC_HALF_1,i.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const _=i.hash;(_.directionalLength!==d||_.pointLength!==p||_.spotLength!==x||_.rectAreaLength!==v||_.hemiLength!==S||_.numDirectionalShadows!==M||_.numPointShadows!==y||_.numSpotShadows!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=v,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=E,_.directionalLength=d,_.pointLength=p,_.spotLength=x,_.rectAreaLength=v,_.hemiLength=S,_.numDirectionalShadows=M,_.numPointShadows=y,_.numSpotShadows=E,i.version=i_++)}function l(u,f){let h=0,m=0,g=0,d=0,p=0;const x=f.matrixWorldInverse;for(let v=0,S=u.length;v<S;v++){const M=u[v];if(M.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),h++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),g++}else if(M.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),s.identity(),a.copy(M.matrixWorld),a.premultiply(x),s.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:i}}function Il(o,e){const t=new s_(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function s(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:s}}function a_(o,e){let t=new WeakMap;function n(r,a=0){let s;return t.has(r)===!1?(s=new Il(o,e),t.set(r,[s])):a>=t.get(r).length?(s=new Il(o,e),t.get(r).push(s)):s=t.get(r)[a],s}function i(){t=new WeakMap}return{get:n,dispose:i}}class o_ extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l_ extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function h_(o,e,t){let n=new $c;const i=new Ae,r=new Ae,a=new et,s=new o_({depthPacking:vf}),c=new l_,l={},u=t.maxTextureSize,f={0:Zt,1:br,2:Zi},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:c_,fragmentShader:u_}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Mn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic,this.render=function(M,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const A=o.getRenderTarget(),_=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),L=o.state;L.setBlending(kn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let R=0,Z=M.length;R<Z;R++){const j=M[R],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const V=D.getFrameExtents();if(i.multiply(V),r.copy(D.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,D.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null){const k=this.type!==ur?{minFilter:pt,magFilter:pt}:{};D.map=new di(i.x,i.y,k),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const N=D.getViewportCount();for(let k=0;k<N;k++){const q=D.getViewport(k);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),L.viewport(a),D.updateMatrices(j,k),n=D.getFrustum(),S(y,E,D.camera,j,this.type)}D.isPointLightShadow!==!0&&this.type===ur&&x(D,E),D.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(A,_,b)};function x(M,y){const E=e.update(d);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new di(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(y,null,E,h,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(y,null,E,m,d,null)}function v(M,y,E,A,_,b){let L=null;const R=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0?L=R:L=E.isPointLight===!0?c:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const Z=L.uuid,j=y.uuid;let D=l[Z];D===void 0&&(D={},l[Z]=D);let V=D[j];V===void 0&&(V=L.clone(),D[j]=V),L=V}return L.visible=y.visible,L.wireframe=y.wireframe,b===ur?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:f[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=A,L.farDistance=_),L}function S(M,y,E,A,_){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===ur)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const R=e.update(M),Z=M.material;if(Array.isArray(Z)){const j=R.groups;for(let D=0,V=j.length;D<V;D++){const N=j[D],k=Z[N.materialIndex];if(k&&k.visible){const q=v(M,k,A,E.near,E.far,_);o.renderBufferDirect(E,null,R,q,M,N)}}}else if(Z.visible){const j=v(M,Z,A,E.near,E.far,_);o.renderBufferDirect(E,null,R,j,M,null)}}const L=M.children;for(let R=0,Z=L.length;R<Z;R++)S(L[R],y,E,A,_)}}function f_(o,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new et;let G=null;const se=new et(0,0,0,0);return{setMask:function(ne){G!==ne&&!P&&(o.colorMask(ne,ne,ne,ne),G=ne)},setLocked:function(ne){P=ne},setClear:function(ne,Ee,Je,qe,En){En===!0&&(ne*=qe,Ee*=qe,Je*=qe),ae.set(ne,Ee,Je,qe),se.equals(ae)===!1&&(o.clearColor(ne,Ee,Je,qe),se.copy(ae))},reset:function(){P=!1,G=null,se.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,G=null,se=null;return{setTest:function(ne){ne?Re(2929):me(2929)},setMask:function(ne){ae!==ne&&!P&&(o.depthMask(ne),ae=ne)},setFunc:function(ne){if(G!==ne){if(ne)switch(ne){case Gh:o.depthFunc(512);break;case Vh:o.depthFunc(519);break;case Wh:o.depthFunc(513);break;case Ea:o.depthFunc(515);break;case Hh:o.depthFunc(514);break;case qh:o.depthFunc(518);break;case Xh:o.depthFunc(516);break;case Yh:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);G=ne}},setLocked:function(ne){P=ne},setClear:function(ne){se!==ne&&(o.clearDepth(ne),se=ne)},reset:function(){P=!1,ae=null,G=null,se=null}}}function a(){let P=!1,ae=null,G=null,se=null,ne=null,Ee=null,Je=null,qe=null,En=null;return{setTest:function(Be){P||(Be?Re(2960):me(2960))},setMask:function(Be){ae!==Be&&!P&&(o.stencilMask(Be),ae=Be)},setFunc:function(Be,un,Pt){(G!==Be||se!==un||ne!==Pt)&&(o.stencilFunc(Be,un,Pt),G=Be,se=un,ne=Pt)},setOp:function(Be,un,Pt){(Ee!==Be||Je!==un||qe!==Pt)&&(o.stencilOp(Be,un,Pt),Ee=Be,Je=un,qe=Pt)},setLocked:function(Be){P=Be},setClear:function(Be){En!==Be&&(o.clearStencil(Be),En=Be)},reset:function(){P=!1,ae=null,G=null,se=null,ne=null,Ee=null,Je=null,qe=null,En=null}}}const s=new i,c=new r,l=new a,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,d=[],p=null,x=!1,v=null,S=null,M=null,y=null,E=null,A=null,_=null,b=!1,L=null,R=null,Z=null,j=null,D=null;const V=o.getParameter(35661);let N=!1,k=0;const q=o.getParameter(7938);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),N=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),N=k>=2);let O=null,W={};const J=o.getParameter(3088),$=o.getParameter(2978),K=new et().fromArray(J),ie=new et().fromArray($);function fe(P,ae,G){const se=new Uint8Array(4),ne=o.createTexture();o.bindTexture(P,ne),o.texParameteri(P,10241,9728),o.texParameteri(P,10240,9728);for(let Ee=0;Ee<G;Ee++)o.texImage2D(ae+Ee,0,6408,1,1,0,6408,5121,se);return ne}const X={};X[3553]=fe(3553,3553,1),X[34067]=fe(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Re(2929),c.setFunc(Ea),ut(!1),Kt(So),Re(2884),nt(kn);function Re(P){h[P]!==!0&&(o.enable(P),h[P]=!0)}function me(P){h[P]!==!1&&(o.disable(P),h[P]=!1)}function ge(P,ae){return m[P]!==ae?(o.bindFramebuffer(P,ae),m[P]=ae,n&&(P===36009&&(m[36160]=ae),P===36160&&(m[36009]=ae)),!0):!1}function le(P,ae){let G=d,se=!1;if(P)if(G=g.get(ae),G===void 0&&(G=[],g.set(ae,G)),P.isWebGLMultipleRenderTargets){const ne=P.texture;if(G.length!==ne.length||G[0]!==36064){for(let Ee=0,Je=ne.length;Ee<Je;Ee++)G[Ee]=36064+Ee;G.length=ne.length,se=!0}}else G[0]!==36064&&(G[0]=36064,se=!0);else G[0]!==1029&&(G[0]=1029,se=!0);se&&(t.isWebGL2?o.drawBuffers(G):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G))}function Ne(P){return p!==P?(o.useProgram(P),p=P,!0):!1}const Se={[Ii]:32774,[Ph]:32778,[Dh]:32779};if(n)Se[Eo]=32775,Se[Co]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Se[Eo]=P.MIN_EXT,Se[Co]=P.MAX_EXT)}const de={[Rh]:0,[Ih]:1,[Fh]:768,[Fc]:770,[kh]:776,[Uh]:774,[Nh]:772,[zh]:769,[zc]:771,[Bh]:775,[Oh]:773};function nt(P,ae,G,se,ne,Ee,Je,qe){if(P===kn){x===!0&&(me(3042),x=!1);return}if(x===!1&&(Re(3042),x=!0),P!==Lh){if(P!==v||qe!==b){if((S!==Ii||E!==Ii)&&(o.blendEquation(32774),S=Ii,E=Ii),qe)switch(P){case ki:o.blendFuncSeparate(1,771,1,771);break;case bo:o.blendFunc(1,1);break;case wo:o.blendFuncSeparate(0,769,0,1);break;case To:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ki:o.blendFuncSeparate(770,771,1,771);break;case bo:o.blendFunc(770,1);break;case wo:o.blendFuncSeparate(0,769,0,1);break;case To:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,y=null,A=null,_=null,v=P,b=qe}return}ne=ne||ae,Ee=Ee||G,Je=Je||se,(ae!==S||ne!==E)&&(o.blendEquationSeparate(Se[ae],Se[ne]),S=ae,E=ne),(G!==M||se!==y||Ee!==A||Je!==_)&&(o.blendFuncSeparate(de[G],de[se],de[Ee],de[Je]),M=G,y=se,A=Ee,_=Je),v=P,b=null}function vt(P,ae){P.side===Zi?me(2884):Re(2884);let G=P.side===Zt;ae&&(G=!G),ut(G),P.blending===ki&&P.transparent===!1?nt(kn):nt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),s.setMask(P.colorWrite);const se=P.stencilWrite;l.setTest(se),se&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ie(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Re(32926):me(32926)}function ut(P){L!==P&&(P?o.frontFace(2304):o.frontFace(2305),L=P)}function Kt(P){P!==Th?(Re(2884),P!==R&&(P===So?o.cullFace(1029):P===Eh?o.cullFace(1028):o.cullFace(1032))):me(2884),R=P}function it(P){P!==Z&&(N&&o.lineWidth(P),Z=P)}function Ie(P,ae,G){P?(Re(32823),(j!==ae||D!==G)&&(o.polygonOffset(ae,G),j=ae,D=G)):me(32823)}function cn(P){P?Re(3089):me(3089)}function Jt(P){P===void 0&&(P=33984+V-1),O!==P&&(o.activeTexture(P),O=P)}function C(P,ae){O===null&&Jt();let G=W[O];G===void 0&&(G={type:void 0,texture:void 0},W[O]=G),(G.type!==P||G.texture!==ae)&&(o.bindTexture(P,ae||X[P]),G.type=P,G.texture=ae)}function w(){const P=W[O];P!==void 0&&P.type!==void 0&&(o.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{o.texSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{o.texSubImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{o.texStorage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function B(){try{o.texStorage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{o.texImage3D.apply(o,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){K.equals(P)===!1&&(o.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function ce(P){ie.equals(P)===!1&&(o.viewport(P.x,P.y,P.z,P.w),ie.copy(P))}function ve(P,ae){let G=f.get(ae);G===void 0&&(G=new WeakMap,f.set(ae,G));let se=G.get(P);se===void 0&&(se=o.getUniformBlockIndex(ae,P.name),G.set(P,se))}function Le(P,ae){const se=f.get(ae).get(P);u.get(P)!==se&&(o.uniformBlockBinding(ae,se,P.__bindingPointIndex),u.set(P,se))}function He(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},O=null,W={},m={},g=new WeakMap,d=[],p=null,x=!1,v=null,S=null,M=null,y=null,E=null,A=null,_=null,b=!1,L=null,R=null,Z=null,j=null,D=null,K.set(0,0,o.canvas.width,o.canvas.height),ie.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Re,disable:me,bindFramebuffer:ge,drawBuffers:le,useProgram:Ne,setBlending:nt,setMaterial:vt,setFlipSided:ut,setCullFace:Kt,setLineWidth:it,setPolygonOffset:Ie,setScissorTest:cn,activeTexture:Jt,bindTexture:C,unbindTexture:w,compressedTexImage2D:H,texImage2D:he,texImage3D:oe,updateUBOMapping:ve,uniformBlockBinding:Le,texStorage2D:_e,texStorage3D:B,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:re,scissor:ue,viewport:ce,reset:He}}function d_(o,e,t,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,w){return x?new OffscreenCanvas(C,w):hs("canvas")}function S(C,w,H,Q){let ee=1;if((C.width>Q||C.height>Q)&&(ee=Q/Math.max(C.width,C.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const re=w?Ra:Math.floor,_e=re(ee*C.width),B=re(ee*C.height);d===void 0&&(d=v(_e,B));const he=H?v(_e,B):d;return he.width=_e,he.height=B,he.getContext("2d").drawImage(C,0,0,_e,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+B+")."),he}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return el(C.width)&&el(C.height)}function y(C){return s?!1:C.wrapS!==Yt||C.wrapT!==Yt||C.minFilter!==pt&&C.minFilter!==zt}function E(C,w){return C.generateMipmaps&&w&&C.minFilter!==pt&&C.minFilter!==zt}function A(C){o.generateMipmap(C)}function _(C,w,H,Q,ee=!1){if(s===!1)return w;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=w;return w===6403&&(H===5126&&(re=33326),H===5131&&(re=33325),H===5121&&(re=33321)),w===33319&&(H===5126&&(re=33328),H===5131&&(re=33327),H===5121&&(re=33323)),w===6408&&(H===5126&&(re=34836),H===5131&&(re=34842),H===5121&&(re=Q===Ge&&ee===!1?35907:32856),H===32819&&(re=32854),H===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function b(C,w,H){return E(C,H)===!0||C.isFramebufferTexture&&C.minFilter!==pt&&C.minFilter!==zt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){return C===pt||C===Ao||C===Lo?9728:9729}function R(C){const w=C.target;w.removeEventListener("dispose",R),j(w),w.isVideoTexture&&g.delete(w)}function Z(C){const w=C.target;w.removeEventListener("dispose",Z),V(w)}function j(C){const w=n.get(C);if(w.__webglInit===void 0)return;const H=C.source,Q=p.get(H);if(Q){const ee=Q[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(C),Object.keys(Q).length===0&&p.delete(H)}n.remove(C)}function D(C){const w=n.get(C);o.deleteTexture(w.__webglTexture);const H=C.source,Q=p.get(H);delete Q[w.__cacheKey],a.memory.textures--}function V(C){const w=C.texture,H=n.get(C),Q=n.get(w);if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)o.deleteFramebuffer(H.__webglFramebuffer[ee]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[ee]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,re=w.length;ee<re;ee++){const _e=n.get(w[ee]);_e.__webglTexture&&(o.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(C)}let N=0;function k(){N=0}function q(){const C=N;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),N+=1,C}function O(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function W(C,w){const H=n.get(C);if(C.isVideoTexture&&cn(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,C,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,H.__webglTexture)}function J(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){me(H,C,w);return}t.activeTexture(33984+w),t.bindTexture(35866,H.__webglTexture)}function $(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){me(H,C,w);return}t.activeTexture(33984+w),t.bindTexture(32879,H.__webglTexture)}function K(C,w){const H=n.get(C);if(C.version>0&&H.__version!==C.version){ge(H,C,w);return}t.activeTexture(33984+w),t.bindTexture(34067,H.__webglTexture)}const ie={[La]:10497,[Yt]:33071,[Pa]:33648},fe={[pt]:9728,[Ao]:9984,[Lo]:9986,[zt]:9729,[tf]:9985,[gs]:9987};function X(C,w,H){if(H?(o.texParameteri(C,10242,ie[w.wrapS]),o.texParameteri(C,10243,ie[w.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,ie[w.wrapR]),o.texParameteri(C,10240,fe[w.magFilter]),o.texParameteri(C,10241,fe[w.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(w.wrapS!==Yt||w.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,L(w.magFilter)),o.texParameteri(C,10241,L(w.minFilter)),w.minFilter!==pt&&w.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(w.type===ii&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===wr&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Re(C,w){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const Q=w.source;let ee=p.get(Q);ee===void 0&&(ee={},p.set(Q,ee));const re=O(w);if(re!==C.__cacheKey){ee[re]===void 0&&(ee[re]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[re].usedTimes++;const _e=ee[C.__cacheKey];_e!==void 0&&(ee[C.__cacheKey].usedTimes--,_e.usedTimes===0&&D(w)),C.__cacheKey=re,C.__webglTexture=ee[re].texture}return H}function me(C,w,H){let Q=3553;w.isDataArrayTexture&&(Q=35866),w.isData3DTexture&&(Q=32879);const ee=Re(C,w),re=w.source;if(t.activeTexture(33984+H),t.bindTexture(Q,C.__webglTexture),re.version!==re.__currentVersion||ee===!0){o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const _e=y(w)&&M(w.image)===!1;let B=S(w.image,_e,!1,u);B=Jt(w,B);const he=M(B)||s,oe=r.convert(w.format,w.encoding);let ue=r.convert(w.type),ce=_(w.internalFormat,oe,ue,w.encoding,w.isVideoTexture);X(Q,w,he);let ve;const Le=w.mipmaps,He=s&&w.isVideoTexture!==!0,P=re.__currentVersion===void 0||ee===!0,ae=b(w,B,he);if(w.isDepthTexture)ce=6402,s?w.type===ii?ce=36012:w.type===ni?ce=33190:w.type===Gi?ce=35056:ce=33189:w.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===li&&ce===6402&&w.type!==Uc&&w.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ni,ue=r.convert(w.type)),w.format===Ji&&ce===6402&&(ce=34041,w.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Gi,ue=r.convert(w.type))),P&&(He?t.texStorage2D(3553,1,ce,B.width,B.height):t.texImage2D(3553,0,ce,B.width,B.height,0,oe,ue,null));else if(w.isDataTexture)if(Le.length>0&&he){He&&P&&t.texStorage2D(3553,ae,ce,Le[0].width,Le[0].height);for(let G=0,se=Le.length;G<se;G++)ve=Le[G],He?t.texSubImage2D(3553,G,0,0,ve.width,ve.height,oe,ue,ve.data):t.texImage2D(3553,G,ce,ve.width,ve.height,0,oe,ue,ve.data);w.generateMipmaps=!1}else He?(P&&t.texStorage2D(3553,ae,ce,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,oe,ue,B.data)):t.texImage2D(3553,0,ce,B.width,B.height,0,oe,ue,B.data);else if(w.isCompressedTexture){He&&P&&t.texStorage2D(3553,ae,ce,Le[0].width,Le[0].height);for(let G=0,se=Le.length;G<se;G++)ve=Le[G],w.format!==nn?oe!==null?He?t.compressedTexSubImage2D(3553,G,0,0,ve.width,ve.height,oe,ve.data):t.compressedTexImage2D(3553,G,ce,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(3553,G,0,0,ve.width,ve.height,oe,ue,ve.data):t.texImage2D(3553,G,ce,ve.width,ve.height,0,oe,ue,ve.data)}else if(w.isDataArrayTexture)He?(P&&t.texStorage3D(35866,ae,ce,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,oe,ue,B.data)):t.texImage3D(35866,0,ce,B.width,B.height,B.depth,0,oe,ue,B.data);else if(w.isData3DTexture)He?(P&&t.texStorage3D(32879,ae,ce,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,oe,ue,B.data)):t.texImage3D(32879,0,ce,B.width,B.height,B.depth,0,oe,ue,B.data);else if(w.isFramebufferTexture){if(P)if(He)t.texStorage2D(3553,ae,ce,B.width,B.height);else{let G=B.width,se=B.height;for(let ne=0;ne<ae;ne++)t.texImage2D(3553,ne,ce,G,se,0,oe,ue,null),G>>=1,se>>=1}}else if(Le.length>0&&he){He&&P&&t.texStorage2D(3553,ae,ce,Le[0].width,Le[0].height);for(let G=0,se=Le.length;G<se;G++)ve=Le[G],He?t.texSubImage2D(3553,G,0,0,oe,ue,ve):t.texImage2D(3553,G,ce,oe,ue,ve);w.generateMipmaps=!1}else He?(P&&t.texStorage2D(3553,ae,ce,B.width,B.height),t.texSubImage2D(3553,0,0,0,oe,ue,B)):t.texImage2D(3553,0,ce,oe,ue,B);E(w,he)&&A(Q),re.__currentVersion=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ge(C,w,H){if(w.image.length!==6)return;const Q=Re(C,w),ee=w.source;if(t.activeTexture(33984+H),t.bindTexture(34067,C.__webglTexture),ee.version!==ee.__currentVersion||Q===!0){o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const re=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,B=[];for(let G=0;G<6;G++)!re&&!_e?B[G]=S(w.image[G],!1,!0,l):B[G]=_e?w.image[G].image:w.image[G],B[G]=Jt(w,B[G]);const he=B[0],oe=M(he)||s,ue=r.convert(w.format,w.encoding),ce=r.convert(w.type),ve=_(w.internalFormat,ue,ce,w.encoding),Le=s&&w.isVideoTexture!==!0,He=ee.__currentVersion===void 0||Q===!0;let P=b(w,he,oe);X(34067,w,oe);let ae;if(re){Le&&He&&t.texStorage2D(34067,P,ve,he.width,he.height);for(let G=0;G<6;G++){ae=B[G].mipmaps;for(let se=0;se<ae.length;se++){const ne=ae[se];w.format!==nn?ue!==null?Le?t.compressedTexSubImage2D(34069+G,se,0,0,ne.width,ne.height,ue,ne.data):t.compressedTexImage2D(34069+G,se,ve,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+G,se,0,0,ne.width,ne.height,ue,ce,ne.data):t.texImage2D(34069+G,se,ve,ne.width,ne.height,0,ue,ce,ne.data)}}}else{ae=w.mipmaps,Le&&He&&(ae.length>0&&P++,t.texStorage2D(34067,P,ve,B[0].width,B[0].height));for(let G=0;G<6;G++)if(_e){Le?t.texSubImage2D(34069+G,0,0,0,B[G].width,B[G].height,ue,ce,B[G].data):t.texImage2D(34069+G,0,ve,B[G].width,B[G].height,0,ue,ce,B[G].data);for(let se=0;se<ae.length;se++){const Ee=ae[se].image[G].image;Le?t.texSubImage2D(34069+G,se+1,0,0,Ee.width,Ee.height,ue,ce,Ee.data):t.texImage2D(34069+G,se+1,ve,Ee.width,Ee.height,0,ue,ce,Ee.data)}}else{Le?t.texSubImage2D(34069+G,0,0,0,ue,ce,B[G]):t.texImage2D(34069+G,0,ve,ue,ce,B[G]);for(let se=0;se<ae.length;se++){const ne=ae[se];Le?t.texSubImage2D(34069+G,se+1,0,0,ue,ce,ne.image[G]):t.texImage2D(34069+G,se+1,ve,ue,ce,ne.image[G])}}}E(w,oe)&&A(34067),ee.__currentVersion=ee.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function le(C,w,H,Q,ee){const re=r.convert(H.format,H.encoding),_e=r.convert(H.type),B=_(H.internalFormat,re,_e,H.encoding);n.get(w).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,B,w.width,w.height,w.depth,0,re,_e,null):t.texImage2D(ee,0,B,w.width,w.height,0,re,_e,null)),t.bindFramebuffer(36160,C),Ie(w)?h.framebufferTexture2DMultisampleEXT(36160,Q,ee,n.get(H).__webglTexture,0,it(w)):o.framebufferTexture2D(36160,Q,ee,n.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(C,w,H){if(o.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let Q=33189;if(H||Ie(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ii?Q=36012:ee.type===ni&&(Q=33190));const re=it(w);Ie(w)?h.renderbufferStorageMultisampleEXT(36161,re,Q,w.width,w.height):o.renderbufferStorageMultisample(36161,re,Q,w.width,w.height)}else o.renderbufferStorage(36161,Q,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const Q=it(w);H&&Ie(w)===!1?o.renderbufferStorageMultisample(36161,Q,35056,w.width,w.height):Ie(w)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const Q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<Q.length;ee++){const re=Q[ee],_e=r.convert(re.format,re.encoding),B=r.convert(re.type),he=_(re.internalFormat,_e,B,re.encoding),oe=it(w);H&&Ie(w)===!1?o.renderbufferStorageMultisample(36161,oe,he,w.width,w.height):Ie(w)?h.renderbufferStorageMultisampleEXT(36161,oe,he,w.width,w.height):o.renderbufferStorage(36161,he,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function Se(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,ee=it(w);if(w.depthTexture.format===li)Ie(w)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,ee):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(w.depthTexture.format===Ji)Ie(w)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,ee):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function de(C){const w=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Se(w.__webglFramebuffer,C)}else if(H){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=o.createRenderbuffer(),Ne(w.__webglDepthbuffer[Q],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),Ne(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function nt(C,w,H){const Q=n.get(C);w!==void 0&&le(Q.__webglFramebuffer,C,C.texture,36064,3553),H!==void 0&&de(C)}function vt(C){const w=C.texture,H=n.get(C),Q=n.get(w);C.addEventListener("dispose",Z),C.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=w.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,_e=M(C)||s;if(ee){H.__webglFramebuffer=[];for(let B=0;B<6;B++)H.__webglFramebuffer[B]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),re)if(i.drawBuffers){const B=C.texture;for(let he=0,oe=B.length;he<oe;he++){const ue=n.get(B[he]);ue.__webglTexture===void 0&&(ue.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&Ie(C)===!1){const B=re?w:[w];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let he=0;he<B.length;he++){const oe=B[he];H.__webglColorRenderbuffer[he]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[he]);const ue=r.convert(oe.format,oe.encoding),ce=r.convert(oe.type),ve=_(oe.internalFormat,ue,ce,oe.encoding),Le=it(C);o.renderbufferStorageMultisample(36161,Le,ve,C.width,C.height),o.framebufferRenderbuffer(36160,36064+he,36161,H.__webglColorRenderbuffer[he])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,Q.__webglTexture),X(34067,w,_e);for(let B=0;B<6;B++)le(H.__webglFramebuffer[B],C,w,36064,34069+B);E(w,_e)&&A(34067),t.unbindTexture()}else if(re){const B=C.texture;for(let he=0,oe=B.length;he<oe;he++){const ue=B[he],ce=n.get(ue);t.bindTexture(3553,ce.__webglTexture),X(3553,ue,_e),le(H.__webglFramebuffer,C,ue,36064+he,3553),E(ue,_e)&&A(3553)}t.unbindTexture()}else{let B=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?B=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,Q.__webglTexture),X(B,w,_e),le(H.__webglFramebuffer,C,w,36064,B),E(w,_e)&&A(B),t.unbindTexture()}C.depthBuffer&&de(C)}function ut(C){const w=M(C)||s,H=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Q=0,ee=H.length;Q<ee;Q++){const re=H[Q];if(E(re,w)){const _e=C.isWebGLCubeRenderTarget?34067:3553,B=n.get(re).__webglTexture;t.bindTexture(_e,B),A(_e),t.unbindTexture()}}}function Kt(C){if(s&&C.samples>0&&Ie(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],H=C.width,Q=C.height;let ee=16384;const re=[],_e=C.stencilBuffer?33306:36096,B=n.get(C),he=C.isWebGLMultipleRenderTargets===!0;if(he)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,B.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,B.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){re.push(36064+oe),C.depthBuffer&&re.push(_e);const ue=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(ue===!1&&(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024)),he&&o.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[oe]),ue===!0&&(o.invalidateFramebuffer(36008,[_e]),o.invalidateFramebuffer(36009,[_e])),he){const ce=n.get(w[oe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ce,0)}o.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,9728),m&&o.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,B.__webglColorRenderbuffer[oe]);const ue=n.get(w[oe]).__webglTexture;t.bindFramebuffer(36160,B.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,ue,0)}t.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function it(C){return Math.min(f,C.samples)}function Ie(C){const w=n.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function cn(C){const w=a.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function Jt(C,w){const H=C.encoding,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Da||H!==fi&&(H===Ge?s===!1?e.has("EXT_sRGB")===!0&&Q===nn?(C.format=Da,C.minFilter=zt,C.generateMipmaps=!1):w=Gc.sRGBToLinear(w):(Q!==nn||ee!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=K,this.rebindTextures=nt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ie}function p_(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===hi)return 5121;if(r===af)return 32819;if(r===of)return 32820;if(r===nf)return 5120;if(r===rf)return 5122;if(r===Uc)return 5123;if(r===sf)return 5124;if(r===ni)return 5125;if(r===ii)return 5126;if(r===wr)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===lf)return 6406;if(r===nn)return 6408;if(r===uf)return 6409;if(r===hf)return 6410;if(r===li)return 6402;if(r===Ji)return 34041;if(r===ff)return 6403;if(r===cf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Da)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===df)return 36244;if(r===pf)return 33319;if(r===mf)return 33320;if(r===gf)return 36249;if(r===Rs||r===Is||r===Fs||r===zs)if(a===Ge)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Is)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Po||r===Do||r===Ro||r===Io)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Do)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Io)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_f)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Fo||r===zo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Fo)return a===Ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===zo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===No||r===Oo||r===Uo||r===Bo||r===ko||r===Go||r===Vo||r===Wo||r===Ho||r===qo||r===Xo||r===Yo||r===jo||r===Zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===No)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Oo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ko)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Go)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ho)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$o)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===$o)return a===Ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Gi?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class m_ extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g_={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(l.joints[d.jointName]===void 0){const v=new Jr;v.matrixAutoUpdate=!1,v.visible=!1,l.joints[d.jointName]=v,l.add(v)}const x=l.joints[d.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}}class __ extends $t{constructor(e,t,n,i,r,a,s,c,l,u){if(u=u!==void 0?u:li,u!==li&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=ni),n===void 0&&u===Ji&&(n=Gi),super(null,i,r,a,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:pt,this.minFilter=c!==void 0?c:pt,this.flipY=!1,this.generateMipmaps=!1}}class x_ extends er{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=null,l=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const x=[],v=[],S=new Nt;S.layers.enable(1),S.viewport=new et;const M=new Nt;M.layers.enable(2),M.viewport=new et;const y=[S,M],E=new m_;E.layers.enable(1),E.layers.enable(2);let A=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=x[O];return W===void 0&&(W=new ua,x[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=x[O];return W===void 0&&(W=new ua,x[O]=W),W.getGripSpace()},this.getHand=function(O){let W=x[O];return W===void 0&&(W=new ua,x[O]=W),W.getHandSpace()};function b(O){const W=v.indexOf(O.inputSource);if(W===-1)return;const J=x[W];J!==void 0&&J.dispatchEvent({type:O.type,data:O.inputSource})}function L(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",R);for(let O=0;O<x.length;O++){const W=v[O];W!==null&&(v[O]=null,x[O].disconnect(W))}A=null,_=null,e.setRenderTarget(d),h=null,f=null,u=null,i=null,p=null,q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",L),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:h}),p=new di(h.framebufferWidth,h.framebufferHeight,{format:nn,type:hi,encoding:e.outputEncoding})}else{let W=null,J=null,$=null;g.depth&&($=g.stencil?35056:33190,W=g.stencil?Ji:li,J=g.stencil?Gi:ni);const K={colorFormat:32856,depthFormat:$,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(K),i.updateRenderState({layers:[f]}),p=new di(f.textureWidth,f.textureHeight,{format:nn,type:hi,depthTexture:new __(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ie=e.properties.get(p);ie.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(s),q.setContext(i),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(O){for(let W=0;W<O.removed.length;W++){const J=O.removed[W],$=v.indexOf(J);$>=0&&(v[$]=null,x[$].dispatchEvent({type:"disconnected",data:J}))}for(let W=0;W<O.added.length;W++){const J=O.added[W];let $=v.indexOf(J);if($===-1){for(let ie=0;ie<x.length;ie++)if(ie>=v.length){v.push(J),$=ie;break}else if(v[ie]===null){v[ie]=J,$=ie;break}if($===-1)break}const K=x[$];K&&K.dispatchEvent({type:"connected",data:J})}}const Z=new I,j=new I;function D(O,W,J){Z.setFromMatrixPosition(W.matrixWorld),j.setFromMatrixPosition(J.matrixWorld);const $=Z.distanceTo(j),K=W.projectionMatrix.elements,ie=J.projectionMatrix.elements,fe=K[14]/(K[10]-1),X=K[14]/(K[10]+1),Re=(K[9]+1)/K[5],me=(K[9]-1)/K[5],ge=(K[8]-1)/K[0],le=(ie[8]+1)/ie[0],Ne=fe*ge,Se=fe*le,de=$/(-ge+le),nt=de*-ge;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(nt),O.translateZ(de),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const vt=fe+de,ut=X+de,Kt=Ne-nt,it=Se+($-nt),Ie=Re*X/ut*vt,cn=me*X/ut*vt;O.projectionMatrix.makePerspective(Kt,it,Ie,cn,vt,ut)}function V(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;E.near=M.near=S.near=O.near,E.far=M.far=S.far=O.far,(A!==E.near||_!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,_=E.far);const W=O.parent,J=E.cameras;V(E,W);for(let K=0;K<J.length;K++)V(J[K],W);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),O.position.copy(E.position),O.quaternion.copy(E.quaternion),O.scale.copy(E.scale),O.matrix.copy(E.matrix),O.matrixWorld.copy(E.matrixWorld);const $=O.children;for(let K=0,ie=$.length;K<ie;K++)$[K].updateMatrixWorld(!0);J.length===2?D(E,S,M):E.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(O){f!==null&&(f.fixedFoveation=O),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=O)};let N=null;function k(O,W){if(l=W.getViewerPose(c||a),m=W,l!==null){const J=l.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let $=!1;J.length!==E.cameras.length&&(E.cameras.length=0,$=!0);for(let K=0;K<J.length;K++){const ie=J[K];let fe=null;if(h!==null)fe=h.getViewport(ie);else{const Re=u.getViewSubImage(f,ie);fe=Re.viewport,K===0&&(e.setRenderTargetTextures(p,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),e.setRenderTarget(p))}let X=y[K];X===void 0&&(X=new Nt,X.layers.enable(K),X.viewport=new et,y[K]=X),X.matrix.fromArray(ie.transform.matrix),X.projectionMatrix.fromArray(ie.projectionMatrix),X.viewport.set(fe.x,fe.y,fe.width,fe.height),K===0&&E.matrix.copy(X.matrix),$===!0&&E.cameras.push(X)}}for(let J=0;J<x.length;J++){const $=v[J],K=x[J];$!==null&&K!==void 0&&K.update($,W,c||a)}N&&N(O,W),m=null}const q=new Kc;q.setAnimationLoop(k),this.setAnimationLoop=function(O){N=O},this.dispose=function(){}}}function v_(o,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,x,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,x,v):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Zt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Zt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,x,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Zt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function y_(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function c(v,S){const M=S.program;n.uniformBlockBinding(v,M)}function l(v,S){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",p));const y=S.program;n.updateUBOMapping(v,y);const E=e.render.frame;r[v.id]!==E&&(h(v),r[v.id]=E)}function u(v){const S=f();v.__bindingPointIndex=S;const M=o.createBuffer(),y=v.__size,E=v.usage;return o.bindBuffer(35345,M),o.bufferData(35345,y,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,S,M),M}function f(){for(let v=0;v<s;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=i[v.id],M=v.uniforms,y=v.__cache;o.bindBuffer(35345,S);for(let E=0,A=M.length;E<A;E++){const _=M[E];if(m(_,E,y)===!0){const b=_.value,L=_.__offset;typeof b=="number"?(_.__data[0]=b,o.bufferSubData(35345,L,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):b.toArray(_.__data),o.bufferSubData(35345,L,_.__data))}}o.bindBuffer(35345,null)}function m(v,S,M){const y=v.value;if(M[S]===void 0)return typeof y=="number"?M[S]=y:M[S]=y.clone(),!0;if(typeof y=="number"){if(M[S]!==y)return M[S]=y,!0}else{const E=M[S];if(E.equals(y)===!1)return E.copy(y),!0}return!1}function g(v){const S=v.uniforms;let M=0;const y=16;let E=0;for(let A=0,_=S.length;A<_;A++){const b=S[A],L=d(b);if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,A>0){E=M%y;const R=y-E;E!==0&&R-L.boundary<0&&(M+=y-E,b.__offset=M)}M+=L.storage}return E=M%y,E>0&&(M+=y-E),v.__size=M,v.__cache={},this}function d(v){const S=v.value,M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(v){const S=v.target;S.removeEventListener("dispose",p);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function x(){for(const v in i)o.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:x}}function M_(){const o=hs("canvas");return o.style.display="block",o}function iu(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:M_(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,x=0,v=0,S=null,M=-1,y=null;const E=new et,A=new et;let _=null,b=e.width,L=e.height,R=1,Z=null,j=null;const D=new et(0,0,b,L),V=new et(0,0,b,L);let N=!1;const k=new $c;let q=!1,O=!1,W=null;const J=new st,$=new Ae,K=new I,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return S===null?R:1}let X=t;function Re(T,F){for(let U=0;U<T.length;U++){const z=T[U],Y=e.getContext(z,F);if(Y!==null)return Y}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",He,!1),X===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),X=Re(F,T),X===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let me,ge,le,Ne,Se,de,nt,vt,ut,Kt,it,Ie,cn,Jt,C,w,H,Q,ee,re,_e,B,he,oe;function ue(){me=new Dm(X),ge=new wm(X,me,o),me.init(ge),B=new p_(X,me,ge),le=new f_(X,me,ge),Ne=new Fm,Se=new Jg,de=new d_(X,me,le,Se,ge,B,Ne),nt=new Em(d),vt=new Pm(d),ut=new qf(X,ge),he=new Sm(X,me,ut,ge),Kt=new Rm(X,ut,Ne,he),it=new Um(X,Kt,ut,Ne),ee=new Om(X,ge,de),w=new Tm(Se),Ie=new Kg(d,nt,vt,me,ge,he,w),cn=new v_(d,Se),Jt=new e_,C=new a_(me,ge),Q=new Mm(d,nt,le,it,u,a),H=new h_(d,it,ge),oe=new y_(X,Ne,ge,le),re=new bm(X,me,Ne,ge),_e=new Im(X,me,Ne,ge),Ne.programs=Ie.programs,d.capabilities=ge,d.extensions=me,d.properties=Se,d.renderLists=Jt,d.shadowMap=H,d.state=le,d.info=Ne}ue();const ce=new x_(d,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(T){T!==void 0&&(R=T,this.setSize(b,L,!1))},this.getSize=function(T){return T.set(b,L)},this.setSize=function(T,F,U){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=T,L=F,e.width=Math.floor(T*R),e.height=Math.floor(F*R),U!==!1&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(b*R,L*R).floor()},this.setDrawingBufferSize=function(T,F,U){b=T,L=F,R=U,e.width=Math.floor(T*U),e.height=Math.floor(F*U),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(D)},this.setViewport=function(T,F,U,z){T.isVector4?D.set(T.x,T.y,T.z,T.w):D.set(T,F,U,z),le.viewport(E.copy(D).multiplyScalar(R).floor())},this.getScissor=function(T){return T.copy(V)},this.setScissor=function(T,F,U,z){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,F,U,z),le.scissor(A.copy(V).multiplyScalar(R).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){le.setScissorTest(N=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,F=!0,U=!0){let z=0;T&&(z|=16384),F&&(z|=256),U&&(z|=1024),X.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",He,!1),Jt.dispose(),C.dispose(),Se.dispose(),nt.dispose(),vt.dispose(),it.dispose(),he.dispose(),oe.dispose(),Ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ee),ce.removeEventListener("sessionend",Je),W&&(W.dispose(),W=null),qe.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ne.autoReset,F=H.enabled,U=H.autoUpdate,z=H.needsUpdate,Y=H.type;ue(),Ne.autoReset=T,H.enabled=F,H.autoUpdate=U,H.needsUpdate=z,H.type=Y}function He(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function P(T){const F=T.target;F.removeEventListener("dispose",P),ae(F)}function ae(T){G(T),Se.remove(T)}function G(T){const F=Se.get(T).programs;F!==void 0&&(F.forEach(function(U){Ie.releaseProgram(U)}),T.isShaderMaterial&&Ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,U,z,Y,pe){F===null&&(F=ie);const xe=Y.isMesh&&Y.matrixWorld.determinant()<0,Me=su(T,F,U,z,Y);le.setMaterial(z,xe);let ye=U.index;const De=U.attributes.position;if(ye===null){if(De===void 0||De.count===0)return}else if(ye.count===0)return;let Te=1;z.wireframe===!0&&(ye=Kt.getWireframeAttribute(U),Te=2),he.setup(Y,z,Me,U,ye);let Ce,ke=re;ye!==null&&(Ce=ut.get(ye),ke=_e,ke.setIndex(Ce));const qn=ye!==null?ye.count:De.count,mi=U.drawRange.start*Te,gi=U.drawRange.count*Te,Qt=pe!==null?pe.start*Te:0,Pe=pe!==null?pe.count*Te:1/0,_i=Math.max(mi,Qt),Ye=Math.min(qn,mi+gi,Qt+Pe)-1,Dt=Math.max(0,Ye-_i+1);if(Dt!==0){if(Y.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*fe()),ke.setMode(1)):ke.setMode(4);else if(Y.isLine){let Cn=z.linewidth;Cn===void 0&&(Cn=1),le.setLineWidth(Cn*fe()),Y.isLineSegments?ke.setMode(1):Y.isLineLoop?ke.setMode(2):ke.setMode(3)}else Y.isPoints?ke.setMode(0):Y.isSprite&&ke.setMode(4);if(Y.isInstancedMesh)ke.renderInstances(_i,Dt,Y.count);else if(U.isInstancedBufferGeometry){const Cn=Math.min(U.instanceCount,U._maxInstanceCount);ke.renderInstances(_i,Dt,Cn)}else ke.render(_i,Dt)}},this.compile=function(T,F){h=C.get(T),h.init(),g.push(h),T.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights(d.physicallyCorrectLights),T.traverse(function(U){const z=U.material;if(z)if(Array.isArray(z))for(let Y=0;Y<z.length;Y++){const pe=z[Y];vs(pe,T,U)}else vs(z,T,U)}),g.pop(),h=null};let se=null;function ne(T){se&&se(T)}function Ee(){qe.stop()}function Je(){qe.start()}const qe=new Kc;qe.setAnimationLoop(ne),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){se=T,ce.setAnimationLoop(T),T===null?qe.stop():qe.start()},ce.addEventListener("sessionstart",Ee),ce.addEventListener("sessionend",Je),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,F,S),h=C.get(T,g.length),h.init(),g.push(h),J.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),k.setFromProjectionMatrix(J),O=this.localClippingEnabled,q=w.init(this.clippingPlanes,O,F),f=Jt.get(T,m.length),f.init(),m.push(f),En(T,F,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(Z,j),q===!0&&w.beginShadows();const U=h.state.shadowsArray;if(H.render(U,T,F),q===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(f,T),h.setupLights(d.physicallyCorrectLights),F.isArrayCamera){const z=F.cameras;for(let Y=0,pe=z.length;Y<pe;Y++){const xe=z[Y];Be(f,T,xe,xe.viewport)}}else Be(f,T,F);S!==null&&(de.updateMultisampleRenderTarget(S),de.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(d,T,F),he.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function En(T,F,U,z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)U=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||k.intersectsSprite(T)){z&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const xe=it.update(T),Me=T.material;Me.visible&&f.push(T,xe,Me,U,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ne.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ne.render.frame),!T.frustumCulled||k.intersectsObject(T))){z&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const xe=it.update(T),Me=T.material;if(Array.isArray(Me)){const ye=xe.groups;for(let De=0,Te=ye.length;De<Te;De++){const Ce=ye[De],ke=Me[Ce.materialIndex];ke&&ke.visible&&f.push(T,xe,ke,U,K.z,Ce)}}else Me.visible&&f.push(T,xe,Me,U,K.z,null)}}const pe=T.children;for(let xe=0,Me=pe.length;xe<Me;xe++)En(pe[xe],F,U,z)}function Be(T,F,U,z){const Y=T.opaque,pe=T.transmissive,xe=T.transparent;h.setupLightsView(U),pe.length>0&&un(Y,F,U),z&&le.viewport(E.copy(z)),Y.length>0&&Pt(Y,F,U),pe.length>0&&Pt(pe,F,U),xe.length>0&&Pt(xe,F,U),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function un(T,F,U){const z=ge.isWebGL2;W===null&&(W=new di(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?wr:hi,minFilter:gs,samples:z&&r===!0?4:0})),d.getDrawingBufferSize($),z?W.setSize($.x,$.y):W.setSize(Ra($.x),Ra($.y));const Y=d.getRenderTarget();d.setRenderTarget(W),d.clear();const pe=d.toneMapping;d.toneMapping=Sn,Pt(T,F,U),d.toneMapping=pe,de.updateMultisampleRenderTarget(W),de.updateRenderTargetMipmap(W),d.setRenderTarget(Y)}function Pt(T,F,U){const z=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,pe=T.length;Y<pe;Y++){const xe=T[Y],Me=xe.object,ye=xe.geometry,De=z===null?xe.material:z,Te=xe.group;Me.layers.test(U.layers)&&ru(Me,F,U,ye,De,Te)}}function ru(T,F,U,z,Y,pe){T.onBeforeRender(d,F,U,z,Y,pe),T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(d,F,U,z,T,pe),Y.transparent===!0&&Y.side===Zi?(Y.side=Zt,Y.needsUpdate=!0,d.renderBufferDirect(U,F,z,Y,T,pe),Y.side=br,Y.needsUpdate=!0,d.renderBufferDirect(U,F,z,Y,T,pe),Y.side=Zi):d.renderBufferDirect(U,F,z,Y,T,pe),T.onAfterRender(d,F,U,z,Y,pe)}function vs(T,F,U){F.isScene!==!0&&(F=ie);const z=Se.get(T),Y=h.state.lights,pe=h.state.shadowsArray,xe=Y.state.version,Me=Ie.getParameters(T,Y.state,pe,F,U),ye=Ie.getProgramCacheKey(Me);let De=z.programs;z.environment=T.isMeshStandardMaterial?F.environment:null,z.fog=F.fog,z.envMap=(T.isMeshStandardMaterial?vt:nt).get(T.envMap||z.environment),De===void 0&&(T.addEventListener("dispose",P),De=new Map,z.programs=De);let Te=De.get(ye);if(Te!==void 0){if(z.currentProgram===Te&&z.lightsStateVersion===xe)return io(T,Me),Te}else Me.uniforms=Ie.getUniforms(T),T.onBuild(U,Me,d),T.onBeforeCompile(Me,d),Te=Ie.acquireProgram(Me,ye),De.set(ye,Te),z.uniforms=Me.uniforms;const Ce=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=w.uniform),io(T,Me),z.needsLights=ou(T),z.lightsStateVersion=xe,z.needsLights&&(Ce.ambientLightColor.value=Y.state.ambient,Ce.lightProbe.value=Y.state.probe,Ce.directionalLights.value=Y.state.directional,Ce.directionalLightShadows.value=Y.state.directionalShadow,Ce.spotLights.value=Y.state.spot,Ce.spotLightShadows.value=Y.state.spotShadow,Ce.rectAreaLights.value=Y.state.rectArea,Ce.ltc_1.value=Y.state.rectAreaLTC1,Ce.ltc_2.value=Y.state.rectAreaLTC2,Ce.pointLights.value=Y.state.point,Ce.pointLightShadows.value=Y.state.pointShadow,Ce.hemisphereLights.value=Y.state.hemi,Ce.directionalShadowMap.value=Y.state.directionalShadowMap,Ce.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ce.spotShadowMap.value=Y.state.spotShadowMap,Ce.spotShadowMatrix.value=Y.state.spotShadowMatrix,Ce.pointShadowMap.value=Y.state.pointShadowMap,Ce.pointShadowMatrix.value=Y.state.pointShadowMatrix);const ke=Te.getUniforms(),qn=ns.seqWithValue(ke.seq,Ce);return z.currentProgram=Te,z.uniformsList=qn,Te}function io(T,F){const U=Se.get(T);U.outputEncoding=F.outputEncoding,U.instancing=F.instancing,U.skinning=F.skinning,U.morphTargets=F.morphTargets,U.morphNormals=F.morphNormals,U.morphColors=F.morphColors,U.morphTargetsCount=F.morphTargetsCount,U.numClippingPlanes=F.numClippingPlanes,U.numIntersection=F.numClipIntersection,U.vertexAlphas=F.vertexAlphas,U.vertexTangents=F.vertexTangents,U.toneMapping=F.toneMapping}function su(T,F,U,z,Y){F.isScene!==!0&&(F=ie),de.resetTextureUnits();const pe=F.fog,xe=z.isMeshStandardMaterial?F.environment:null,Me=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:fi,ye=(z.isMeshStandardMaterial?vt:nt).get(z.envMap||xe),De=z.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Te=!!z.normalMap&&!!U.attributes.tangent,Ce=!!U.morphAttributes.position,ke=!!U.morphAttributes.normal,qn=!!U.morphAttributes.color,mi=z.toneMapped?d.toneMapping:Sn,gi=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Qt=gi!==void 0?gi.length:0,Pe=Se.get(z),_i=h.state.lights;if(q===!0&&(O===!0||T!==y)){const yt=T===y&&z.id===M;w.setState(z,T,yt)}let Ye=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==_i.state.version||Pe.outputEncoding!==Me||Y.isInstancedMesh&&Pe.instancing===!1||!Y.isInstancedMesh&&Pe.instancing===!0||Y.isSkinnedMesh&&Pe.skinning===!1||!Y.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==ye||z.fog===!0&&Pe.fog!==pe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==w.numPlanes||Pe.numIntersection!==w.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Te||Pe.morphTargets!==Ce||Pe.morphNormals!==ke||Pe.morphColors!==qn||Pe.toneMapping!==mi||ge.isWebGL2===!0&&Pe.morphTargetsCount!==Qt)&&(Ye=!0):(Ye=!0,Pe.__version=z.version);let Dt=Pe.currentProgram;Ye===!0&&(Dt=vs(z,F,Y));let Cn=!1,nr=!1,ys=!1;const ht=Dt.getUniforms(),ir=Pe.uniforms;if(le.useProgram(Dt.program)&&(Cn=!0,nr=!0,ys=!0),z.id!==M&&(M=z.id,nr=!0),Cn||y!==T){if(ht.setValue(X,"projectionMatrix",T.projectionMatrix),ge.logarithmicDepthBuffer&&ht.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,nr=!0,ys=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const yt=ht.map.cameraPosition;yt!==void 0&&yt.setValue(X,K.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ht.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Y.isSkinnedMesh)&&ht.setValue(X,"viewMatrix",T.matrixWorldInverse)}if(Y.isSkinnedMesh){ht.setOptional(X,Y,"bindMatrix"),ht.setOptional(X,Y,"bindMatrixInverse");const yt=Y.skeleton;yt&&(ge.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),ht.setValue(X,"boneTexture",yt.boneTexture,de),ht.setValue(X,"boneTextureSize",yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ms=U.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0&&ge.isWebGL2===!0)&&ee.update(Y,U,z,Dt),(nr||Pe.receiveShadow!==Y.receiveShadow)&&(Pe.receiveShadow=Y.receiveShadow,ht.setValue(X,"receiveShadow",Y.receiveShadow)),nr&&(ht.setValue(X,"toneMappingExposure",d.toneMappingExposure),Pe.needsLights&&au(ir,ys),pe&&z.fog===!0&&cn.refreshFogUniforms(ir,pe),cn.refreshMaterialUniforms(ir,z,R,L,W),ns.upload(X,Pe.uniformsList,ir,de)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ns.upload(X,Pe.uniformsList,ir,de),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ht.setValue(X,"center",Y.center),ht.setValue(X,"modelViewMatrix",Y.modelViewMatrix),ht.setValue(X,"normalMatrix",Y.normalMatrix),ht.setValue(X,"modelMatrix",Y.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const yt=z.uniformsGroups;for(let Ss=0,lu=yt.length;Ss<lu;Ss++)if(ge.isWebGL2){const ro=yt[Ss];oe.update(ro,Dt),oe.bind(ro,Dt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dt}function au(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function ou(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,F,U){Se.get(T.texture).__webglTexture=F,Se.get(T.depthTexture).__webglTexture=U;const z=Se.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=U===void 0,z.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const U=Se.get(T);U.__webglFramebuffer=F,U.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,U=0){S=T,x=F,v=U;let z=!0;if(T){const ye=Se.get(T);ye.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),z=!1):ye.__webglFramebuffer===void 0?de.setupRenderTarget(T):ye.__hasExternalTextures&&de.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture)}let Y=null,pe=!1,xe=!1;if(T){const ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture)&&(xe=!0);const De=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=De[F],pe=!0):ge.isWebGL2&&T.samples>0&&de.useMultisampledRTT(T)===!1?Y=Se.get(T).__webglMultisampledFramebuffer:Y=De,E.copy(T.viewport),A.copy(T.scissor),_=T.scissorTest}else E.copy(D).multiplyScalar(R).floor(),A.copy(V).multiplyScalar(R).floor(),_=N;if(le.bindFramebuffer(36160,Y)&&ge.drawBuffers&&z&&le.drawBuffers(T,Y),le.viewport(E),le.scissor(A),le.setScissorTest(_),pe){const ye=Se.get(T.texture);X.framebufferTexture2D(36160,36064,34069+F,ye.__webglTexture,U)}else if(xe){const ye=Se.get(T.texture),De=F||0;X.framebufferTextureLayer(36160,36064,ye.__webglTexture,U||0,De)}M=-1},this.readRenderTargetPixels=function(T,F,U,z,Y,pe,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Me=Me[xe]),Me){le.bindFramebuffer(36160,Me);try{const ye=T.texture,De=ye.format,Te=ye.type;if(De!==nn&&B.convert(De)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Te===wr&&(me.has("EXT_color_buffer_half_float")||ge.isWebGL2&&me.has("EXT_color_buffer_float"));if(Te!==hi&&B.convert(Te)!==X.getParameter(35738)&&!(Te===ii&&(ge.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-z&&U>=0&&U<=T.height-Y&&X.readPixels(F,U,z,Y,B.convert(De),B.convert(Te),pe)}finally{const ye=S!==null?Se.get(S).__webglFramebuffer:null;le.bindFramebuffer(36160,ye)}}},this.copyFramebufferToTexture=function(T,F,U=0){const z=Math.pow(2,-U),Y=Math.floor(F.image.width*z),pe=Math.floor(F.image.height*z);de.setTexture2D(F,0),X.copyTexSubImage2D(3553,U,0,0,T.x,T.y,Y,pe),le.unbindTexture()},this.copyTextureToTexture=function(T,F,U,z=0){const Y=F.image.width,pe=F.image.height,xe=B.convert(U.format),Me=B.convert(U.type);de.setTexture2D(U,0),X.pixelStorei(37440,U.flipY),X.pixelStorei(37441,U.premultiplyAlpha),X.pixelStorei(3317,U.unpackAlignment),F.isDataTexture?X.texSubImage2D(3553,z,T.x,T.y,Y,pe,xe,Me,F.image.data):F.isCompressedTexture?X.compressedTexSubImage2D(3553,z,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,xe,F.mipmaps[0].data):X.texSubImage2D(3553,z,T.x,T.y,xe,Me,F.image),z===0&&U.generateMipmaps&&X.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(T,F,U,z,Y=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=T.max.x-T.min.x+1,xe=T.max.y-T.min.y+1,Me=T.max.z-T.min.z+1,ye=B.convert(z.format),De=B.convert(z.type);let Te;if(z.isData3DTexture)de.setTexture3D(z,0),Te=32879;else if(z.isDataArrayTexture)de.setTexture2DArray(z,0),Te=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,z.flipY),X.pixelStorei(37441,z.premultiplyAlpha),X.pixelStorei(3317,z.unpackAlignment);const Ce=X.getParameter(3314),ke=X.getParameter(32878),qn=X.getParameter(3316),mi=X.getParameter(3315),gi=X.getParameter(32877),Qt=U.isCompressedTexture?U.mipmaps[0]:U.image;X.pixelStorei(3314,Qt.width),X.pixelStorei(32878,Qt.height),X.pixelStorei(3316,T.min.x),X.pixelStorei(3315,T.min.y),X.pixelStorei(32877,T.min.z),U.isDataTexture||U.isData3DTexture?X.texSubImage3D(Te,Y,F.x,F.y,F.z,pe,xe,Me,ye,De,Qt.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Te,Y,F.x,F.y,F.z,pe,xe,Me,ye,Qt.data)):X.texSubImage3D(Te,Y,F.x,F.y,F.z,pe,xe,Me,ye,De,Qt),X.pixelStorei(3314,Ce),X.pixelStorei(32878,ke),X.pixelStorei(3316,qn),X.pixelStorei(3315,mi),X.pixelStorei(32877,gi),Y===0&&z.generateMipmaps&&X.generateMipmap(Te),le.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?de.setTextureCube(T,0):T.isData3DTexture?de.setTexture3D(T,0):T.isDataArrayTexture?de.setTexture2DArray(T,0):de.setTexture2D(T,0),le.unbindTexture()},this.resetState=function(){x=0,v=0,S=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class S_ extends iu{}S_.prototype.isWebGL1Renderer=!0;class b_ extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class eo extends Hn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];s(i),l(n),u(),this.setAttribute("position",new on(r,3)),this.setAttribute("normal",new on(r.slice(),3)),this.setAttribute("uv",new on(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function s(v){const S=new I,M=new I,y=new I;for(let E=0;E<t.length;E+=3)m(t[E+0],S),m(t[E+1],M),m(t[E+2],y),c(S,M,y,v)}function c(v,S,M,y){const E=y+1,A=[];for(let _=0;_<=E;_++){A[_]=[];const b=v.clone().lerp(M,_/E),L=S.clone().lerp(M,_/E),R=E-_;for(let Z=0;Z<=R;Z++)Z===0&&_===E?A[_][Z]=b:A[_][Z]=b.clone().lerp(L,Z/R)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){const L=Math.floor(b/2);b%2===0?(h(A[_][L+1]),h(A[_+1][L]),h(A[_][L])):(h(A[_][L+1]),h(A[_+1][L+1]),h(A[_+1][L]))}}function l(v){const S=new I;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const v=new I;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const M=p(v)/2/Math.PI+.5,y=x(v)/Math.PI+.5;a.push(M,1-y)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const S=a[v+0],M=a[v+2],y=a[v+4],E=Math.max(S,M,y),A=Math.min(S,M,y);E>.9&&A<.1&&(S<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),y<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function m(v,S){const M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){const v=new I,S=new I,M=new I,y=new I,E=new Ae,A=new Ae,_=new Ae;for(let b=0,L=0;b<r.length;b+=9,L+=6){v.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),M.set(r[b+6],r[b+7],r[b+8]),E.set(a[L+0],a[L+1]),A.set(a[L+2],a[L+3]),_.set(a[L+4],a[L+5]),y.copy(v).add(S).add(M).divideScalar(3);const R=p(y);d(E,L+0,v,R),d(A,L+2,S,R),d(_,L+4,M,R)}}function d(v,S,M,y){y<0&&v.x===1&&(a[S]=v.x-1),M.x===0&&M.z===0&&(a[S]=y/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}static fromJSON(e){return new eo(e.vertices,e.indices,e.radius,e.details)}}class to extends eo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new to(e.radius,e.detail)}}class w_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);class T_{constructor(){Mt(this,"_renderer");Mt(this,"_camera");Mt(this,"_scene",new b_);Mt(this,"_clock",new w_);Mt(this,"_mouse",new Ae);Mt(this,"_mouseTarget",new Ae);var e;this._renderer=new iu({canvas:(e=document.getElementById("canvas"))!=null?e:void 0}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setSize(window.innerWidth,window.innerHeight),this._renderer.setClearColor(16777215,0),this._camera=new Nt(75,window.innerWidth/window.innerHeight,.1,1e3),this._camera.position.setZ(5),this._addListeners(),this._animate()}get scene(){return this._scene}_addListeners(){window.addEventListener("resize",()=>this._resize()),window.addEventListener("mousemove",e=>this._onMouseMove(e))}_animate(){requestAnimationFrame(()=>this._animate()),this._render()}_render(){this._scene.children.forEach(e=>{const{uSpeed:t,uTime:n}=e.material.uniforms;n.value=t.value*this._clock.getElapsedTime()}),this._mouseTarget.set(Sr.utils.interpolate(this._mouseTarget.x,this._mouse.x,.042),Sr.utils.interpolate(this._mouseTarget.y,this._mouse.y,.042)),this._scene.rotation.set(this._mouseTarget.y*.25,this._mouseTarget.x*.25,0),this._renderer.render(this._scene,this._camera)}_resize(){const e=window.innerWidth,t=window.innerHeight;this._camera.aspect=e/t,this._renderer.setSize(e,t),this._camera.updateProjectionMatrix()}_onMouseMove(e){this._mouse.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight)*2+1)}}var E_="varying vec2 vUv;varying float vNoise;uniform float uTime;uniform float uDisplace;uniform float uDecay;uniform float uSize;uniform float uComplex;uniform float uWaves;uniform float uHue;vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}vec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}float pnoise(vec3 P,vec3 rep){vec3 Pi0=mod(floor(P),rep);vec3 Pi1=mod(Pi0+vec3(1.0),rep);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float turbulence(vec3 p){float t=-0.005;for(float f=1.0;f<=1.0;f++){float power=pow(1.3,f);t+=abs(pnoise(vec3(power*p),vec3(10.0,10.0,10.0))/power);}return t;}void main(){vUv=uv;vNoise=(0.3*-uHue)*turbulence(uDecay*abs(normal+uTime));float noise=(2.0*-uWaves)*turbulence(uDecay*abs(normal+uTime));float b=pnoise(uComplex*(position)+vec3((uDecay*2.0)*uTime),vec3(100.0));float displacement=-atan(noise)+tan(b*uDisplace);vec3 p=position+(normal*displacement);gl_Position=(projectionMatrix*modelViewMatrix)*vec4(p,1.0);}",C_="varying float vNoise;uniform float uTime;uniform float uRed;uniform float uGreen;uniform float uBlue;uniform float uColorFactor;void main(){float r=normalize(vNoise+uRed);float g=cos(vNoise+uGreen);float b=sin(vNoise+uBlue);vec3 colors=vec3(r,g,b);vec3 lum=vec3(0.21,0.71,0.07);float gray=dot(colors.rgb,lum.rgb);gl_FragColor=vec4(colors.rgb*(1.0-uColorFactor)+(gray*uColorFactor),1.0);}";const A_={uTime:{value:.1},uSpeed:{value:.25},uDecay:{value:1.2},uSize:{value:3},uDisplace:{value:.1},uComplex:{value:.1},uWaves:{value:20},uHue:{value:4},uRed:{value:2.5},uGreen:{value:1},uBlue:{value:0},uColorFactor:{value:0}};class no extends Vt{constructor(t,n=1){super();Mt(this,"_geometry");Mt(this,"_material");Mt(this,"_mesh");this._geometry=new to(n,64),this._material=new Vn({vertexShader:E_,fragmentShader:C_,uniforms:t,defines:{PI:Math.PI},transparent:!0}),this._mesh=new Mn(this._geometry,this._material),this.add(this._mesh)}get material(){return this._material}setUniformValue(t,n){const i=this._material.uniforms[t];!i||(i.value=n)}setScale(t){this._geometry.scale(t,t,t)}static YellowCloud(){return new no(A_)}}class L_{constructor(){Mt(this,"_colorScheme");Mt(this,"_gl");Mt(this,"_blob");if(this._gl=new T_,this._colorScheme=this._getPreferredColorScheme(),this._addListeners(),this._addBlobs(),this._setColorScheme(this._colorScheme),this._colorScheme==="dark"){const e=document.getElementById("dark-mode-checkbox");e&&(e.checked=!0)}}_addListeners(){var e,t;(e=document.getElementById("dark-mode-checkbox"))==null||e.addEventListener("change",()=>this._toggleDarkMode()),(t=window.matchMedia)==null||t.call(window,"(prefers-color-scheme: dark)").addEventListener("change",()=>this._setColorScheme(this._getPreferredColorScheme()))}_setColorScheme(e){!this._blob||(Sr.to(this._blob.material.uniforms.uColorFactor,{value:e==="dark"?1:0,ease:nh.easeIn}),Sr.to(this._blob.material.uniforms.uWaves,{value:5,yoyo:!0,repeat:1}),document.body.classList.toggle("dark-mode"),this._colorScheme=e)}_toggleDarkMode(){this._setColorScheme(this._colorScheme==="dark"?"light":"dark")}_addBlobs(){this._blob=no.YellowCloud(),this._gl.scene.add(this._blob)}_getPreferredColorScheme(){var e;return(e=window.matchMedia)!=null&&e.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"}}new L_;
