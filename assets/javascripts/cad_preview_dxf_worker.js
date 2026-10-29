(()=>{var _2=Object.create;var On=Object.defineProperty;var S2=Object.getOwnPropertyDescriptor;var b2=Object.getOwnPropertyNames;var M2=Object.getPrototypeOf,T2=Object.prototype.hasOwnProperty;var E2=(n,e,t)=>e in n?On(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var xa=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},A2=(n,e)=>{for(var t in e)On(n,t,{get:e[t],enumerable:!0})},w2=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of b2(e))!T2.call(n,r)&&r!==t&&On(n,r,{get:()=>e[r],enumerable:!(i=S2(e,r))||i.enumerable});return n};var va=(n,e,t)=>(t=n!=null?_2(M2(n)):{},w2(e||!n||!n.__esModule?On(t,"default",{value:n,enumerable:!0}):t,n));var Un=(n,e,t)=>E2(n,typeof e!="symbol"?e+"":e,t);var tr=xa((_a,kn)=>{(function(n,e){"use strict";typeof define=="function"&&define.amd?define(e):typeof kn=="object"&&kn.exports?kn.exports=e():n.log=e()})(_a,function(){"use strict";var n=function(){},e="undefined",t=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],r={},s=null;function a(g,x){var v=g[x];if(typeof v.bind=="function")return v.bind(g);try{return Function.prototype.bind.call(v,g)}catch{return function(){return Function.prototype.apply.apply(v,[g,arguments])}}}function o(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(g){return g==="debug"&&(g="log"),typeof console===e?!1:g==="trace"&&t?o:console[g]!==void 0?a(console,g):console.log!==void 0?a(console,"log"):n}function c(){for(var g=this.getLevel(),x=0;x<i.length;x++){var v=i[x];this[v]=x<g?n:this.methodFactory(v,g,this.name)}if(this.log=this.debug,typeof console===e&&g<this.levels.SILENT)return"No console available for logging"}function h(g){return function(){typeof console!==e&&(c.call(this),this[g].apply(this,arguments))}}function f(g,x,v){return l(g)||h.apply(this,arguments)}function u(g,x){var v=this,y,M,_,S="loglevel";typeof g=="string"?S+=":"+g:typeof g=="symbol"&&(S=void 0);function A(b){var R=(i[b]||"silent").toUpperCase();if(!(typeof window===e||!S)){try{window.localStorage[S]=R;return}catch{}try{window.document.cookie=encodeURIComponent(S)+"="+R+";"}catch{}}}function w(){var b;if(!(typeof window===e||!S)){try{b=window.localStorage[S]}catch{}if(typeof b===e)try{var R=window.document.cookie,B=encodeURIComponent(S),H=R.indexOf(B+"=");H!==-1&&(b=/^([^;]+)/.exec(R.slice(H+B.length+1))[1])}catch{}return v.levels[b]===void 0&&(b=void 0),b}}function C(){if(!(typeof window===e||!S)){try{window.localStorage.removeItem(S)}catch{}try{window.document.cookie=encodeURIComponent(S)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function P(b){var R=b;if(typeof R=="string"&&v.levels[R.toUpperCase()]!==void 0&&(R=v.levels[R.toUpperCase()]),typeof R=="number"&&R>=0&&R<=v.levels.SILENT)return R;throw new TypeError("log.setLevel() called with invalid level: "+b)}v.name=g,v.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},v.methodFactory=x||f,v.getLevel=function(){return _??M??y},v.setLevel=function(b,R){return _=P(b),R!==!1&&A(_),c.call(v)},v.setDefaultLevel=function(b){M=P(b),w()||v.setLevel(b,!1)},v.resetLevel=function(){_=null,C(),c.call(v)},v.enableAll=function(b){v.setLevel(v.levels.TRACE,b)},v.disableAll=function(b){v.setLevel(v.levels.SILENT,b)},v.rebuild=function(){if(s!==v&&(y=P(s.getLevel())),c.call(v),s===v)for(var b in r)r[b].rebuild()},y=P(s?s.getLevel():"WARN");var E=w();E!=null&&(_=P(E)),c.call(v)}s=new u,s.getLogger=function(x){if(typeof x!="symbol"&&typeof x!="string"||x==="")throw new TypeError("You must supply a name when creating a logger.");var v=r[x];return v||(v=r[x]=new u(x,s.methodFactory)),v};var p=typeof window!==e?window.log:void 0;return s.noConflict=function(){return typeof window!==e&&window.log===s&&(window.log=p),s},s.getLoggers=function(){return r},s.default=s,s})});var Ui=xa(()=>{});function St(n){this._pointer=0,this._data=n,this._eof=!1}St.prototype.next=function(){var n;if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);if(n={code:parseInt(this._data[this._pointer])},isNaN(n.code))throw new Error("Cannot parse group code: "+this._data[this._pointer]);return this._pointer++,n.value=ya(n.code,this._data[this._pointer]),this._pointer++,n.code===0&&n.value==="EOF"&&(this._eof=!0),this.lastReadGroup=n,n};St.prototype.peek=function(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);var n={code:parseInt(this._data[this._pointer])};if(isNaN(n.code))throw new Error("Cannot parse group code: "+this._data[this._pointer]);return n.value=ya(n.code,this._data[this._pointer+1]),n};St.prototype.rewind=function(n){n=n||1,this._pointer=this._pointer-n*2};St.prototype.hasNext=function(){return!(this._eof||this._pointer>this._data.length-2)};St.prototype.isEOF=function(){return this._eof};function ya(n,e){return n<=9?e:n>=10&&n<=59?parseFloat(e.trim()):n>=60&&n<=99?parseInt(e.trim()):n>=100&&n<=109?e:n>=110&&n<=149?parseFloat(e.trim()):n>=160&&n<=179?parseInt(e.trim()):n>=210&&n<=239?parseFloat(e.trim()):n>=270&&n<=289?parseInt(e.trim()):n>=290&&n<=299?C2(e.trim()):n>=300&&n<=369?e:n>=370&&n<=389?parseInt(e.trim()):n>=390&&n<=399?e:n>=400&&n<=409?parseInt(e.trim()):n>=410&&n<=419?e:n>=420&&n<=429?parseInt(e.trim()):n>=430&&n<=439?e:n>=440&&n<=459?parseInt(e.trim()):n>=460&&n<=469?parseFloat(e.trim()):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?e:n>=1010&&n<=1059?parseFloat(e.trim()):n>=1060&&n<=1071?parseInt(e.trim()):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:e}),e)}function C2(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}var bt=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];var t0=va(tr(),1),R0=class{constructor(){this.appName=null,this.appNameWarningShown=!1,this.lastString=null,this.sectionStack=[this._CreateSection()],this.failure=!1}Feed(e){if(!this.appName)return e.code==1001?(this.appName=e.value,!1):(this.appNameWarningShown||(this.appNameWarningShown=!0,t0.default.warn("XDATA section does not start with application name")),!1);if(e.code==1001)return!0;if(this.failure)return!1;if(e.code==1e3)return this.lastString&&t0.default.warn("XDATA section unused string: "+this.lastString),this.lastString=e.value,!1;let t=this._currentSection;if(e.code==1002){if(e.value=="{"){if(!this.lastString)return t0.default.warn("Unnamed XDATA section encountered"),this.failure=!0,!1;let i=this._CreateSection();return t[this.lastString]=i,this.lastString=null,this.sectionStack.push(i),!1}return e.value=="}"?this.sectionStack.length<2?(t0.default.warn("Unmatched XDATA section closing"),this.failure=!0,!1):(this.sectionStack.length=this.sectionStack.length-1,!1):(t0.default.warn("Bad XDATA section control string encountered: "+e.value),this.failure=!0,!1)}return this.lastString!==null&&(t.values.push(this._CreateValue(1e3,this.lastString)),this.lastString=null),t.values.push(this._CreateValue(e.code,e.value)),!1}Finish(e){if(!this.failure&&this.appName){let t;e.hasOwnProperty("xdata")?t=e.xdata:(t={},e.xdata=t),t[this.appName]=this.sectionStack[0]}}get _currentSection(){return this.sectionStack[this.sectionStack.length-1]}_CreateSection(){return{values:[]}}_CreateValue(e,t){return{code:e,value:t}}};function P2(n){return bt[n]}function D(n){var e={};n.rewind();var t=n.next(),i=t.code;if(e.x=t.value,i+=10,t=n.next(),t.code!==i)throw new Error("Expected code for point value to be "+i+" but got "+t.code+".");return e.y=t.value,i+=10,t=n.next(),t.code!==i?(n.rewind(),e):(e.z=t.value,e)}function Bn(n){n.rewind();let e=n.next();if(e.code!==101)throw new Error("Bad call for skipEmbeddedObject()");do e=n.next();while(e.code!==0);n.rewind()}function Z(n,e,t){let i=null;for(;e.code>=1e3;)i==null&&(i=new R0),i.Feed(e)?(i.Finish(n),i=null):e=t.next();if(i)return i.Finish(n),t.rewind(),!0;switch(e.code){case 0:n.type=e.value;break;case 5:n.handle=e.value;break;case 6:n.lineType=e.value;break;case 8:n.layer=e.value;break;case 48:n.lineTypeScale=e.value;break;case 60:n.hidden=!!e.value;break;case 62:n.colorIndex=e.value,n.color=P2(Math.abs(e.value));break;case 67:n.inPaperSpace=e.value!==0;break;case 100:break;case 330:n.ownerHandle=e.value;break;case 347:n.materialObjectHandle=e.value;break;case 370:n.lineweight=e.value;break;case 420:n.color=e.value&16777215;break;default:return!1}return!0}function I0(){}I0.ForEntityName="3DFACE";I0.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 70:t.shape=(e.value&1)===1,t.hasContinuousLinetypePattern=(e.value&128)===128;break;case 10:t.vertices=R2(n,e),e=n.lastReadGroup;break;default:Z(t,e,n);break}e=n.next()}return t};function R2(n,e){var t=[],i,r=!1,s=!1,a=4;for(i=0;i<=a;i++){for(var o={};e!=="EOF"&&!(e.code===0||s);){switch(e.code){case 10:case 11:case 12:case 13:if(r){s=!0;continue}o.x=e.value,r=!0;break;case 20:case 21:case 22:case 23:o.y=e.value;break;case 30:case 31:case 32:case 33:o.z=e.value;break;default:return t}e=n.next()}t.push(o),r=!1,s=!1}return n.rewind(),t}function L0(){}L0.ForEntityName="ARC";L0.prototype.parseEntity=function(n,e){var t,i;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.center=D(n);break;case 40:t.radius=e.value;break;case 50:t.startAngle=Math.PI/180*e.value;break;case 51:t.endAngle=Math.PI/180*e.value;break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function F0(){}F0.ForEntityName="ATTDEF";F0.prototype.parseEntity=function(n,e){var t={type:e.value,scale:1,textStyle:"STANDARD"};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 1:t.text=e.value;break;case 2:t.tag=e.value;break;case 3:t.prompt=e.value;break;case 7:t.textStyle=e.value;break;case 10:t.startPoint=D(n);break;case 11:t.endPoint=D(n);break;case 39:t.thickness=e.value;break;case 40:t.textHeight=e.value;break;case 41:t.scale=e.value;break;case 50:t.rotation=e.value;break;case 51:t.obliqueAngle=e.value;break;case 70:t.hidden=!!(e.value&1),t.constant=!!(e.value&2),t.verificationRequired=!!(e.value&4),t.preset=!!(e.value&8);break;case 71:t.backwards=!!(e.value&2),t.mirrored=!!(e.value&4);break;case 72:t.horizontalJustification=e.value;break;case 73:t.fieldLength=e.value;break;case 74:t.verticalJustification=e.value;break;case 100:break;case 101:Bn(n);break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function D0(){}D0.ForEntityName="ATTRIB";D0.prototype.parseEntity=function(n,e){var t={type:e.value,scale:1,textStyle:"STANDARD"};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 1:t.text=e.value;break;case 2:t.tag=e.value;break;case 3:t.prompt=e.value;break;case 7:t.textStyle=e.value;break;case 10:t.startPoint=D(n);break;case 11:t.endPoint=D(n);break;case 39:t.thickness=e.value;break;case 40:t.textHeight=e.value;break;case 41:t.scale=e.value;break;case 44:t.lineSpacingFactor=e.value;break;case 45:t.fillBoxScale=e.value;break;case 46:t.annotationHeight=e.value;break;case 50:t.rotation=e.value;break;case 51:t.obliqueAngle=e.value;break;case 63:t.backgroundFillColor=e.value;break;case 70:t.hidden=!!(e.value&1),t.constant=!!(e.value&2),t.verificationRequired=!!(e.value&4),t.preset=!!(e.value&8);break;case 71:t.attachmentPoint=e.value;break;case 72:t.horizontalJustification=e.value;break;case 73:t.lineSpacing=e.value;break;case 74:t.verticalJustification=e.value;break;case 90:t.backgroundFillSetting=e.value;break;case 100:break;case 210:t.extrusionDirection=D(n);break;case 280:t.lockPositionFlag=e.value;break;case 340:t.hardPointerId=e.value;break;default:Z(t,e,n);break}e=n.next()}return t};function N0(){}N0.ForEntityName="CIRCLE";N0.prototype.parseEntity=function(n,e){var t,i;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.center=D(n);break;case 40:t.radius=e.value;break;case 50:t.startAngle=Math.PI/180*e.value;break;case 51:i=Math.PI/180*e.value,i<t.startAngle?t.angleLength=i+2*Math.PI-t.startAngle:t.angleLength=i-t.startAngle,t.endAngle=i;break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function O0(){}O0.ForEntityName="DIMENSION";O0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 2:t.block=e.value;break;case 3:t.styleName=e.value;break;case 10:t.anchorPoint=D(n);break;case 11:t.middleOfText=D(n);break;case 12:t.insertionPoint=D(n);break;case 13:t.linearOrAngularPoint1=D(n);break;case 14:t.linearOrAngularPoint2=D(n);break;case 15:t.diameterOrRadiusPoint=D(n);break;case 16:t.arcPoint=D(n);break;case 70:t.dimensionType=e.value;break;case 71:t.attachmentPoint=e.value;break;case 42:t.actualMeasurement=e.value;break;case 1:t.text=e.value;break;case 50:t.angle=e.value;break;case 53:t.textRotation=e.value;break;default:Z(t,e,n);break}e=n.next()}return t};function U0(){}U0.ForEntityName="ELLIPSE";U0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.center=D(n);break;case 11:t.majorAxisEndPoint=D(n);break;case 40:t.axisRatio=e.value;break;case 41:t.startAngle=e.value;break;case 42:t.endAngle=e.value;break;case 2:t.name=e.value;break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function k0(){}k0.ForEntityName="INSERT";k0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 2:t.name=e.value;break;case 41:t.xScale=e.value;break;case 42:t.yScale=e.value;break;case 43:t.zScale=e.value;break;case 10:t.position=D(n);break;case 50:t.rotation=e.value;break;case 70:t.columnCount=e.value;break;case 71:t.rowCount=e.value;break;case 44:t.columnSpacing=e.value;break;case 45:t.rowSpacing=e.value;break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function B0(){}B0.ForEntityName="LINE";B0.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.vertices.unshift(D(n));break;case 11:t.vertices.push(D(n));break;case 210:t.extrusionDirection=D(n);break;case 100:break;default:Z(t,e,n);break}e=n.next()}return t};function G0(){}G0.ForEntityName="LWPOLYLINE";G0.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]},i=0;for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 38:t.elevation=e.value;break;case 39:t.depth=e.value;break;case 70:t.shape=(e.value&1)===1,t.hasContinuousLinetypePattern=(e.value&128)===128;break;case 90:i=e.value;break;case 10:t.vertices=I2(i,n);break;case 43:e.value!==0&&(t.width=e.value);break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function I2(n,e){if(!n||n<=0)throw Error("n must be greater than 0 vertices");var t=[],i,r=!1,s=!1,a=e.lastReadGroup;for(i=0;i<n;i++){for(var o={};a!=="EOF"&&!(a.code===0||s);){switch(a.code){case 10:if(r){s=!0;continue}o.x=a.value,r=!0;break;case 20:o.y=a.value;break;case 30:o.z=a.value;break;case 40:o.startWidth=a.value;break;case 41:o.endWidth=a.value;break;case 42:a.value!=0&&(o.bulge=a.value);break;case 91:o.id=a.value;break;default:return r&&t.push(o),e.rewind(),t}a=e.next()}t.push(o),r=!1,s=!1}return e.rewind(),t}function z0(){}z0.ForEntityName="MTEXT";z0.prototype.parseEntity=function(n,e){var t={type:e.value};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 3:case 1:t.text?t.text+=e.value:t.text=e.value;break;case 10:t.position=D(n);break;case 11:t.direction=D(n);break;case 40:t.height=e.value;break;case 41:t.width=e.value;break;case 44:t.lineSpacing=e.value;break;case 50:t.rotation=e.value;break;case 7:t.styleName=e.value;break;case 71:t.attachmentPoint=e.value;break;case 72:t.drawingDirection=e.value;break;case 101:Bn(n);break;default:Z(t,e,n);break}e=n.next()}return t};function H0(){}H0.ForEntityName="POINT";H0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.position=D(n);break;case 39:t.thickness=e.value;break;case 210:t.extrusionDirection=D(n);break;case 100:break;default:Z(t,e,n);break}e=n.next()}return t};function V0(){}V0.ForEntityName="VERTEX";V0.prototype.parseEntity=function(n,e){var t={type:e.value};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.x=e.value;break;case 20:t.y=e.value;break;case 30:t.z=e.value;break;case 40:break;case 41:break;case 42:e.value!=0&&(t.bulge=e.value);break;case 70:t.curveFittingVertex=(e.value&1)!==0,t.curveFitTangent=(e.value&2)!==0,t.splineVertex=(e.value&8)!==0,t.splineControlPoint=(e.value&16)!==0,t.threeDPolylineVertex=(e.value&32)!==0,t.threeDPolylineMesh=(e.value&64)!==0,t.polyfaceMeshVertex=(e.value&128)!==0;break;case 50:break;case 71:t.faces=[e.value];break;case 72:t.faces[1]=e.value;break;case 73:t.faces[2]=e.value;break;case 74:t.faces[3]=e.value;break;default:Z(t,e,n);break}e=n.next()}return t};function W0(){}W0.ForEntityName="POLYLINE";W0.prototype.parseEntity=function(n,e){var t={type:e.value,vertices:[]};for(e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:break;case 20:break;case 30:break;case 39:t.thickness=e.value;break;case 40:break;case 41:break;case 70:t.shape=(e.value&1)!==0,t.includesCurveFitVertices=(e.value&2)!==0,t.includesSplineFitVertices=(e.value&4)!==0,t.is3dPolyline=(e.value&8)!==0,t.is3dPolygonMesh=(e.value&16)!==0,t.is3dPolygonMeshClosed=(e.value&32)!==0,t.isPolyfaceMesh=(e.value&64)!==0,t.hasContinuousLinetypePattern=(e.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t.vertices=L2(n,e),t};function L2(n,e){for(var t=new V0,i=[];!n.isEOF();){if(e.code!==0){e=n.next();continue}if(e.value==="VERTEX"){i.push(t.parseEntity(n,e)),e=n.lastReadGroup;continue}if(e.value==="SEQEND"){F2(n,e);break}break}return i}function F2(n,e){var t={type:e.value};for(e=n.next();e!="EOF"&&e.code!=0;)Z(t,e,n),e=n.next();return t}function X0(){}X0.ForEntityName="SOLID";X0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},t.points=[],e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.points[0]=D(n);break;case 11:t.points[1]=D(n);break;case 12:t.points[2]=D(n);break;case 13:t.points[3]=D(n);break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function q0(){}q0.ForEntityName="SPLINE";q0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.controlPoints||(t.controlPoints=[]),t.controlPoints.push(D(n));break;case 11:t.fitPoints||(t.fitPoints=[]),t.fitPoints.push(D(n));break;case 12:t.startTangent=D(n);break;case 13:t.endTangent=D(n);break;case 40:t.knotValues||(t.knotValues=[]),t.knotValues.push(e.value);break;case 70:(e.value&1)!=0&&(t.closed=!0),(e.value&2)!=0&&(t.periodic=!0),(e.value&4)!=0&&(t.rational=!0),(e.value&8)!=0&&(t.planar=!0),(e.value&16)!=0&&(t.planar=!0,t.linear=!0);break;case 71:t.degreeOfSplineCurve=e.value;break;case 72:t.numberOfKnots=e.value;break;case 73:t.numberOfControlPoints=e.value;break;case 74:t.numberOfFitPoints=e.value;break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function Y0(){}Y0.ForEntityName="TEXT";Y0.prototype.parseEntity=function(n,e){var t;for(t={type:e.value},e=n.next();e!=="EOF"&&e.code!==0;){switch(e.code){case 10:t.startPoint=D(n);break;case 11:t.endPoint=D(n);break;case 40:t.textHeight=e.value;break;case 41:t.xScale=e.value;break;case 50:t.rotation=e.value;break;case 7:t.styleName=e.value;break;case 1:t.text=e.value;break;case 72:t.halign=e.value;break;case 73:t.valign=e.value;break;default:Z(t,e,n);break}e=n.next()}return t};function J0(){}J0.ForEntityName="HATCH";J0.prototype.parseEntity=function(n,e){var t;t={type:e.value};let i=0,r=0,s=0;for(e=n.next();e!=="EOF"&&e.code!==0;){for(;i>0;){let a=D2(e,n);a?(t.boundaryLoops.push(a),i--,e=n.next()):i=0}for(;r>0;){let a=N2(e,n);a?(t.definitionLines.push(a),r--,e=n.next()):r=0}for(;s>0;){let a=O2(e,n);a?(t.seedPoints.push(a),s--,e=n.next()):s=0}if(e.code===0)break;switch(e.code){case 2:t.patternName=e.value;break;case 70:t.isSolid=e.value!=0;break;case 91:i=e.value,i>0&&(t.boundaryLoops=[]);break;case 75:t.hatchStyle=e.value;break;case 76:t.patternType=e.value;break;case 52:t.patternAngle=e.value*Math.PI/180;break;case 41:t.patternScale=e.value;break;case 78:r=e.value,r>0&&(t.definitionLines=[]);break;case 98:s=e.value,s>0&&(t.seedPoints=[]);break;case 210:t.extrusionDirection=D(n);break;default:Z(t,e,n);break}e=n.next()}return t};function D2(n,e){let t=null,i=()=>{let l={vertices:[],isClosed:!1},c=!1,h=0;for(;;){if(h>0){for(let f=0;f<h&&n.code==10;f++){let u=D(e);n=e.next(),n.code==42&&(u.bulge=n.value,n=e.next()),l.vertices.push(u)}return l}switch(n.code){case 72:c=n.value;break;case 73:l.isClosed=n.value;break;case 93:h=n.value;break;default:return l}n=e.next()}},r=()=>{if(n.code!=72)return null;let l={type:n.value};n=e.next();let c=l.type==4,h=!1;for(;;){switch(n.code){case 10:c?(l.controlPoints||(l.controlPoints=[]),l.controlPoints.push(D(e))):l.start=D(e);break;case 11:c?(l.fitPoints||(l.fitPoints=[]),l.fitPoints.push(D(e))):l.end=D(e);break;case 40:c?(l.knotValues||(l.knotValues=[]),l.knotValues.push(n.value)):l.radius=n.value;break;case 50:l.startAngle=n.value*Math.PI/180;break;case 51:l.endAngle=n.value*Math.PI/180;break;case 73:c?l.rational=n.value:l.isCcw=n.value;break;case 74:l.periodic=n.value;break;case 94:l.degreeOfSplineCurve=n.value;break;case 12:case 13:if(!c)return l;n.code==12?l.startTangent=D(e):l.endTangent=D(e);break;case 97:if(!c||h)return l;h=!0;break;case 95:case 96:case 42:break;default:return l}n=e.next()}},s=!1,a=0,o=0;for(;;){if(!t){if(n.code!=92)return null;t={type:n.value,isExternal:(n.value&1)!=0,isOutermost:(n.value&16)!=0,isTextbox:(n.value&8)!=0},n=e.next()}for(t.type&2&&!s&&(t.polyline=i(),s=!0);a;){let l=r();l?(t.edges.push(l),a--):a=0}for(;o;)n.code==330?(t.sourceRefs.push(n.value),o--,n=e.next()):o=0;switch(n.code){case 93:a=n.value,a>0&&(t.edges=[]);break;case 97:o=n.value,o>0&&(t.sourceRefs=[]);break;default:return e.rewind(),t}n=e.next()}}function N2(n,e){if(n.code!=53)return null;let t={angle:n.value*Math.PI/180,base:{x:0,y:0},offset:{x:0,y:0}};n=e.next();let i=0;for(;;){switch(n.code){case 43:t.base.x=n.value;break;case 44:t.base.y=n.value;break;case 45:t.offset.x=n.value;break;case 46:t.offset.y=n.value;break;case 49:i>0&&(t.dashes.push(n.value),i--);break;case 79:i=n.value,n.value&&(t.dashes=[]);break;default:return e.rewind(),t}n=e.next()}}function O2(n,e){return n.code!=10?null:D(e)}var U2=new Map([[140,"DIMTXT"],[142,"DIMTSZ"],[144,"DIMLFAC"],[147,"DIMGAP"],[173,"DIMSAH"],[175,"DIMSOXD"],[176,"DIMCLRD"],[177,"DIMCLRE"],[178,"DIMCLRT"],[271,"DIMDEC"],[278,"DIMDSEP"],[281,"DIMSD1"],[282,"DIMSD2"],[3,"DIMPOST"],[40,"DIMSCALE"],[41,"DIMASZ"],[42,"DIMEXO"],[44,"DIMEXE"],[45,"DIMRND"],[46,"DIMDLE"],[5,"DIMBLK"],[6,"DIMBLK1"],[7,"DIMBLK2"],[75,"DIMSE1"],[76,"DIMSE2"],[78,"DIMZIN"],[342,"DIMBLK_handle"],[343,"DIMBLK1_handle"],[344,"DIMBLK2_handle"]]),Z0=U2;var X=va(tr(),1);X.default.setLevel("error");function k2(n){n.registerEntityHandler(I0),n.registerEntityHandler(L0),n.registerEntityHandler(F0),n.registerEntityHandler(D0),n.registerEntityHandler(N0),n.registerEntityHandler(O0),n.registerEntityHandler(U0),n.registerEntityHandler(k0),n.registerEntityHandler(B0),n.registerEntityHandler(G0),n.registerEntityHandler(z0),n.registerEntityHandler(H0),n.registerEntityHandler(W0),n.registerEntityHandler(X0),n.registerEntityHandler(q0),n.registerEntityHandler(Y0),n.registerEntityHandler(J0)}function Je(){this._entityHandlers={},k2(this)}Je.prototype.parse=function(n,e){throw new Error("read() not implemented. Use readSync()")};Je.prototype.registerEntityHandler=function(n){var e=new n;this._entityHandlers[n.ForEntityName]=e};Je.prototype.parseSync=function(n){return typeof n=="string"?this._parse(n):(console.error("Cannot read DXF source of type `"+typeof n),null)};Je.prototype.parseStream=function(n,e){var t="",i=this;n.on("data",r),n.on("end",s),n.on("error",a);function r(o){t+=o}function s(){try{var o=i._parse(t)}catch(l){return e(l)}e(null,o)}function a(o){e(o)}};Je.prototype._parse=function(n){var e,t,i={},r=0,s=n.split(/\r\n|\r|\n/g);if(e=new St(s),!e.hasNext())throw Error("Empty file");var a=this,o=function(){for(t=e.next();!e.isEOF();)if(t.code===0&&t.value==="SECTION"){if(t=e.next(),t.code!==2){console.error("Unexpected code %s after 0:SECTION",Sa(t)),t=e.next();continue}t.value==="HEADER"?(X.default.debug("> HEADER"),i.header=c(),X.default.debug("<")):t.value==="BLOCKS"?(X.default.debug("> BLOCKS"),i.blocks=h(),X.default.debug("<")):t.value==="ENTITIES"?(X.default.debug("> ENTITIES"),i.entities=A(!1),X.default.debug("<")):t.value==="TABLES"?(X.default.debug("> TABLES"),i.tables=u(),X.default.debug("<")):t.value==="EOF"?X.default.debug("EOF"):X.default.warn("Skipping section '%s'",t.value)}else t=e.next()},l=function(E,b){return t.code===E&&t.value===b},c=function(){var E=null,b=null,R={};for(t=e.next();;){if(l(0,"ENDSEC")){E!=null&&(R[E]=b);break}else t.code===9?(E!=null&&(R[E]=b),E=t.value):t.code===10?b={x:t.value}:t.code===20?b.y=t.value:t.code===30?b.z=t.value:b=t.value;t=e.next()}return t=e.next(),R},h=function(){var E={},b;for(t=e.next();t.value!=="EOF"&&!l(0,"ENDSEC");)l(0,"BLOCK")?(X.default.debug("block {"),b=f(),X.default.debug("}"),C(b),b.name?E[b.name]=b:X.default.error('block with handle "'+b.handle+'" is missing a name.')):(ut(t),t=e.next());return E},f=function(){var E={};for(t=e.next();t.value!=="EOF";){switch(t.code){case 1:E.xrefPath=t.value,t=e.next();break;case 2:E.name=t.value,t=e.next();break;case 3:E.name2=t.value,t=e.next();break;case 5:E.handle=t.value,t=e.next();break;case 8:E.layer=t.value,t=e.next();break;case 10:E.position=w(),t=e.next();break;case 67:E.inPaperSpace=!!(t.value&&t.value==1),t=e.next();break;case 70:t.value!=0&&(E.type=t.value),t=e.next();break;case 100:t=e.next();break;case 330:E.ownerHandle=t.value,t=e.next();break;case 0:if(t.value=="ENDBLK")break;E.entities=A(!0);break;default:ut(t),t=e.next()}if(l(0,"ENDBLK")){t=e.next();break}}return E},u=function(){var E={};for(t=e.next();t.value!=="EOF"&&!l(0,"ENDSEC");)if(l(0,"TABLE")){t=e.next();var b=S[t.value];b?(X.default.debug(t.value+" Table {"),E[S[t.value].tableName]=g(),X.default.debug("}")):X.default.debug("Unhandled Table "+t.value)}else t=e.next();return t=e.next(),E};let p="ENDTAB";var g=function(){var E=S[t.value],b={},R=0,B;for(t=e.next();!l(0,p);)switch(t.code){case 5:b.handle=t.value,t=e.next();break;case 330:b.ownerHandle=t.value,t=e.next();break;case 100:t.value==="AcDbSymbolTable"||ut(t),t=e.next();break;case 70:R=t.value,t=e.next();break;case 0:t.value===E.dxfSymbolName?b[E.tableRecordsProperty]=E.parseTableRecords():(ut(t),t=e.next());break;default:ut(t),t=e.next()}var H=b[E.tableRecordsProperty];return H?(H.constructor===Array?B=H.length:typeof H=="object"&&(B=Object.keys(H).length),R!==B&&X.default.warn(`Parsed ${B} ${E.dxfSymbolName}'s but expected ${R}`)):b[E.tableRecordsProperty]=[],t=e.next(),b},x=function(){var E=[],b={};for(X.default.debug("ViewPort {"),t=e.next();!l(0,p);)switch(t.code){case 2:b.name=t.value,t=e.next();break;case 10:b.lowerLeftCorner=w(),t=e.next();break;case 11:b.upperRightCorner=w(),t=e.next();break;case 12:b.center=w(),t=e.next();break;case 13:b.snapBasePoint=w(),t=e.next();break;case 14:b.snapSpacing=w(),t=e.next();break;case 15:b.gridSpacing=w(),t=e.next();break;case 16:b.viewDirectionFromTarget=w(),t=e.next();break;case 17:b.viewTarget=w(),t=e.next();break;case 42:b.lensLength=t.value,t=e.next();break;case 43:b.frontClippingPlane=t.value,t=e.next();break;case 44:b.backClippingPlane=t.value,t=e.next();break;case 45:b.viewHeight=t.value,t=e.next();break;case 50:b.snapRotationAngle=t.value,t=e.next();break;case 51:b.viewTwistAngle=t.value,t=e.next();break;case 79:b.orthographicType=t.value,t=e.next();break;case 110:b.ucsOrigin=w(),t=e.next();break;case 111:b.ucsXAxis=w(),t=e.next();break;case 112:b.ucsYAxis=w(),t=e.next();break;case 110:b.ucsOrigin=w(),t=e.next();break;case 281:b.renderMode=t.value,t=e.next();break;case 281:b.defaultLightingType=t.value,t=e.next();break;case 292:b.defaultLightingOn=t.value,t=e.next();break;case 330:b.ownerHandle=t.value,t=e.next();break;case 63:case 421:case 431:b.ambientColor=t.value,t=e.next();break;case 0:t.value==="VPORT"&&(X.default.debug("}"),E.push(b),X.default.debug("ViewPort {"),b={},t=e.next());break;default:ut(t),t=e.next();break}return X.default.debug("}"),E.push(b),E},v=function(){var E={},b,R={},B;for(X.default.debug("LType {"),t=e.next();!l(0,"ENDTAB");)switch(t.code){case 2:R.name=t.value,b=t.value,t=e.next();break;case 3:R.description=t.value,t=e.next();break;case 73:B=t.value,B>0&&(R.pattern=[]),t=e.next();break;case 40:R.patternLength=t.value,t=e.next();break;case 49:R.pattern.push(t.value),t=e.next();break;case 0:X.default.debug("}"),B>0&&B!==R.pattern.length&&X.default.warn("lengths do not match on LTYPE pattern"),E[b]=R,R={},X.default.debug("LType {"),t=e.next();break;default:t=e.next()}return X.default.debug("}"),E[b]=R,E},y=function(){var E={},b,R={};for(X.default.debug("Layer {"),t=e.next();!l(0,"ENDTAB");)switch(t.code){case 2:R.name=t.value,b=t.value,t=e.next();break;case 62:R.visible=t.value>=0,R.colorIndex=Math.abs(t.value),R.color=B2(R.colorIndex),t=e.next();break;case 70:R.frozen=(t.value&1)!==0,t=e.next();break;case 420:R.color=t.value&16777215,t=e.next();break;case 0:t.value==="LAYER"&&(X.default.debug("}"),E[b]=R,X.default.debug("Layer {"),R={},b=void 0,t=e.next());break;default:ut(t),t=e.next();break}return X.default.debug("}"),E[b]=R,E},M=function(){var E={},b,R={};for(X.default.debug("DimStyle {"),t=e.next();!l(0,"ENDTAB");)if(Z0.has(t.code))R[Z0.get(t.code)]=t.value,t=e.next();else switch(t.code){case 2:R.name=t.value,b=t.value,t=e.next();break;case 0:t.value==="DIMSTYLE"&&(X.default.debug("}"),E[b]=R,X.default.debug("DimStyle {"),R={},b=void 0,t=e.next());break;default:ut(t),t=e.next();break}return X.default.debug("}"),E[b]=R,E},_=function(){var E={},b={},R;for(X.default.debug("Style {"),t=e.next();!l(0,p);)switch(t.code){case 100:b.subClassMarker=t.value,t=e.next();break;case 2:b.styleName=t.value,R=t.value,t=e.next();break;case 70:b.standardFlag=t.value,t=e.next();break;case 40:b.fixedTextHeight=t.value,t=e.next();break;case 41:b.widthFactor=t.value,t=e.next();break;case 50:b.obliqueAngle=t.value,t=e.next();break;case 71:b.textGenerationFlag=t.value,t=e.next();break;case 42:b.lastHeight=t.value,t=e.next();break;case 3:b.font=t.value,t=e.next();break;case 4:b.bigFont=t.value,t=e.next();break;case 1071:b.extendedFont=t.value,t=e.next();break;case 0:t.value==="STYLE"&&(X.default.debug("}"),E[R]=b,X.default.debug("Style {"),b={},R=void 0,t=e.next());break;default:ut(t),t=e.next();break}return X.default.debug("}"),E[R]=b,E},S={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:x},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:v},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:y},DIMSTYLE:{tableRecordsProperty:"dimStyles",tableName:"dimstyle",dxfSymbolName:"DIMSTYLE",parseTableRecords:M},STYLE:{tableRecordsProperty:"styles",tableName:"style",dxfSymbolName:"STYLE",parseTableRecords:_}},A=function(E){var b=[],R=E?"ENDBLK":"ENDSEC";for(E||(t=e.next());;)if(t.code===0){if(t.value===R)break;var B,H=a._entityHandlers[t.value];if(H!=null)X.default.debug(t.value+" {"),B=H.parseEntity(e,t),t=e.lastReadGroup,X.default.debug("}");else{X.default.warn("Unhandled entity "+t.value),t=e.next();continue}C(B),b.push(B)}else t=e.next();return R=="ENDSEC"&&(t=e.next()),b},w=function(){var E={},b=t.code;if(E.x=t.value,b+=10,t=e.next(),t.code!=b)throw new Error("Expected code for point value to be "+b+" but got "+t.code+".");return E.y=t.value,b+=10,t=e.next(),t.code!=b?(e.rewind(),E):(E.z=t.value,E)},C=function(E){if(!E)throw new TypeError("entity cannot be undefined or null");E.handle||(E.handle=r++)},P=function(){var E=i.tables&&i.tables.dimstyle&&i.tables.dimstyle.dimStyles;if(!(!E||!i.blocks)){var b=new Map;for(var R in i.blocks){var B=i.blocks[R].ownerHandle;B!==void 0&&b.set(B,R)}var H=["DIMBLK","DIMBLK1","DIMBLK2"];for(var q in E)for(var O=E[q],j=0;j<H.length;j++){var ee=H[j]+"_handle";if(O.hasOwnProperty(ee)){var te=O[ee];delete O[ee],b.has(te)?O[H[j]]=b.get(te):X.default.warn("Unresolved "+H[j]+" block handle in dimension style "+q+": "+te)}}}};return o(),P(),i};function ut(n){X.default.debug("unhandled group "+Sa(n))}function Sa(n){return n.code+":"+n.value}function B2(n){return bt[n]}var G2=["3DSOLID","BODY","REGION","SURFACE"],z2=G2.map(n=>{function e(){}return e.ForEntityName=n,e.prototype.parseEntity=t=>{let i=t.next();for(;i!=="EOF"&&i.code!==0;)i=t.next();return{type:n}},e}),ba=Je.prototype.registerEntityHandler;Je.prototype.registerEntityHandler=function(e){ba.call(this,e);for(let t of z2)this._entityHandlers[t.ForEntityName]||ba.call(this,t)};var Gn=class{constructor(e,t="utf-8"){this.url=e,this.encoding=t}async Fetch(e=null){let t=await fetch(this.url);if(!t.ok)throw new Error(`Failed to fetch DXF file: HTTP ${t.status} ${t.statusText}`);let i=+t.headers.get("Content-Length"),r=t.body.getReader(),s=0,a="",o=new TextDecoder(this.encoding);for(;;){let{done:c,value:h}=await r.read();if(c){a+=o.decode(new ArrayBuffer(0),{stream:!1});break}a+=o.decode(h,{stream:!0}),s+=h.length,e!==null&&e("fetch",s,i)}return e!==null&&e("parse",0,null),new Je().parseSync(a)}};var Gt=class{constructor(e,t=16){this.type=e,this.capacity=t,this.size=0,this.buffer=new(Ma(e))(t)}GetSize(){return this.size}Push(e){this._CheckGrow();let t=this.size;return this.buffer[t]=e,this.size++,t}Get(e){if(e>=this.size)throw new Error(`Index out of range: ${e}/${this.size}`);return this.buffer[e]}CopyTo(e,t,i=0,r=-1){r===-1&&(r=this.size-i),e.set(this.buffer.subarray(i,i+r),t)}_CheckGrow(){if(this.size<this.capacity)return;this.capacity*=2;let e=new(Ma(this.type))(this.capacity);e.set(this.buffer),this.buffer=e}},Ie={INT8:0,UINT8:1,UINT8_CLAMPED:2,INT16:3,UINT16:4,INT32:5,UINT32:6,INT64:7,UINT64:8,FLOAT32:9,FLOAT64:10};function Ma(n){switch(n){case Ie.INT8:return Int8Array;case Ie.UINT8:return Uint8Array;case Ie.UINT8_CLAMPED:return Uint8ClampedArray;case Ie.INT16:return Int16Array;case Ie.UINT16:return Uint16Array;case Ie.INT32:return Int32Array;case Ie.UINT32:return Uint32Array;case Ie.FLOAT32:return Float32Array;case Ie.FLOAT64:return Float64Array;default:throw new Error("Unrecognized native type: "+n)}}var ce=class n{constructor(e,t,i,r,s){this.layerName=e??null,this.blockName=t??null,this.geometryType=i??null,this.color=r,this.lineType=s??null}Compare(e){let t=K0(this.layerName,e.layerName);return t!==0||(t=K0(this.blockName,e.blockName),t!==0)||(t=K0(this.geometryType,e.geometryType),t!==0)||(t=K0(this.color,e.color),t!==0)?t:K0(this.lineType,e.lineType)}IsIndexed(){return this.geometryType===n.GeometryType.INDEXED_LINES||this.geometryType===n.GeometryType.INDEXED_TRIANGLES}IsInstanced(){return this.geometryType===n.GeometryType.BLOCK_INSTANCE||this.geometryType===n.GeometryType.POINT_INSTANCE}};ce.GeometryType=Object.freeze({POINTS:0,LINES:1,INDEXED_LINES:2,TRIANGLES:3,INDEXED_TRIANGLES:4,BLOCK_INSTANCE:5,POINT_INSTANCE:6});function K0(n,e){return n===null?e===null?0:-1:e===null?1:n<e?-1:n>e?1:0}var ka=1;var Ba=3;var hr=0,ur=1,fr=2,pr=3,dr=4,mr=5,gr=6,xr=7,Ga=0,za=1,Ha=2;var Ir=1,Lr=2,Fr=3,Dr=4,Nr=5,Or=6,Ur=7;var kr=300,Va=301,Br=302;var Wa=306,vr=1e3,$0=1001,yr=1002;var Xa=1006;var qa=1008;var Ya=1009;var Ja=1023;var en=2300,qn=2301,Wn=2302,_r=2303,Sr=2400,br=2401,Mr=2402;var Gr="",Ve="srgb",Tr="srgb-linear",Er="linear",Xn="srgb";var j0=2e3,Ar=2001;function H2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}var Ta={},Yn=null;function Za(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ee(...n){n=Za(n);let e="THREE."+n.shift();if(Yn)Yn("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ve(...n){n=Za(n);let e="THREE."+n.shift();if(Yn)Yn("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function o0(...n){let e=n.join(" ");e in Ta||(Ta[e]=!0,Ee(...n))}var V2={[hr]:ur,[fr]:gr,[dr]:xr,[pr]:mr,[ur]:hr,[gr]:fr,[xr]:dr,[mr]:pr},tn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wf=Math.PI/180,W2=180/Math.PI;function zr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Me[n&255]+Me[n>>8&255]+Me[n>>16&255]+Me[n>>24&255]+"-"+Me[e&255]+Me[e>>8&255]+"-"+Me[e>>16&15|64]+Me[e>>24&255]+"-"+Me[t&63|128]+Me[t>>8&255]+"-"+Me[t>>16&255]+Me[t>>24&255]+Me[i&255]+Me[i>>8&255]+Me[i>>16&255]+Me[i>>24&255]).toLowerCase()}function Q(n,e,t){return Math.max(e,Math.min(t,n))}function X2(n,e){return(n%e+e)%e}function nr(n,e,t){return(1-t)*n+t*e}var Wr=class Wr{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Q(this.x,e.x,t.x),this.y=Q(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Q(this.x,e,t),this.y=Q(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Q(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Q(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wr.prototype.isVector2=!0;var F=Wr,mt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(f!==x||l!==u||c!==p||h!==g){let v=l*u+c*p+h*g+f*x;v<0&&(u=-u,p=-p,g=-g,x=-x,v=-v);let y=1-o;if(v<.9995){let M=Math.acos(v),_=Math.sin(M);y=Math.sin(y*M)/_,o=Math.sin(o*M)/_,l=l*y+u*o,c=c*y+p*o,h=h*y+g*o,f=f*y+x*o}else{l=l*y+u*o,c=c*y+p*o,h=h*y+g*o,f=f*y+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-o*p,e[t+2]=c*g+h*p+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Q(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xr=class Xr{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ea.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ea.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Q(this.x,e.x,t.x),this.y=Q(this.y,e.y,t.y),this.z=Q(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Q(this.x,e,t),this.y=Q(this.y,e,t),this.z=Q(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Q(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ir.copy(this).projectOnVector(e),this.sub(ir)}reflect(e){return this.sub(ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Q(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xr.prototype.isVector3=!0;var le=Xr,ir=new le,Ea=new mt,qr=class qr{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],x=r[0],v=r[3],y=r[6],M=r[1],_=r[4],S=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*x+o*M+l*A,s[3]=a*v+o*_+l*w,s[6]=a*y+o*S+l*C,s[1]=c*x+h*M+f*A,s[4]=c*v+h*_+f*w,s[7]=c*y+h*S+f*C,s[2]=u*x+p*M+g*A,s[5]=u*v+p*_+g*w,s[8]=u*y+p*S+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(r*c-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=u*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return o0("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rr.makeScale(e,t)),this}rotate(e){return o0("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return o0("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};qr.prototype.isMatrix3=!0;var G=qr,rr=new G,Aa=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wa=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q2(){let n={enabled:!0,workingColorSpace:Tr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Xn&&(r.r=pt(r.r),r.g=pt(r.g),r.b=pt(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xn&&(r.r=l0(r.r),r.g=l0(r.g),r.b=l0(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gr?Er:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return o0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return o0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Tr]:{primaries:e,whitePoint:i,transfer:Er,toXYZ:Aa,fromXYZ:wa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:e,whitePoint:i,transfer:Xn,toXYZ:Aa,fromXYZ:wa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),n}var He=q2();function pt(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function l0(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var n0,Jn=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{n0===void 0&&(n0=wr("canvas")),n0.width=e.width,n0.height=e.height;let r=n0.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=n0}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pt(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pt(t[i]/255)*255):t[i]=pt(t[i]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Y2=0,Zn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Y2++}),this.uuid=zr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sr(r[a].image)):s.push(sr(r[a]))}else s=sr(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function sr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jn.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var J2=0,ar=new le,c0=class n extends tn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=$0,r=$0,s=Xa,a=qa,o=Ja,l=Ya,c=n.DEFAULT_ANISOTROPY,h=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=zr(),this.name="",this.source=new Zn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new F(0,0),this.repeat=new F(1,1),this.center=new F(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ar).x}get height(){return this.source.getSize(ar).y}get depth(){return this.source.getSize(ar).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vr:e.x=e.x-Math.floor(e.x);break;case $0:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vr:e.y=e.y-Math.floor(e.y);break;case $0:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};c0.DEFAULT_IMAGE=null;c0.DEFAULT_MAPPING=kr;c0.DEFAULT_ANISOTROPY=1;var Yr=class Yr{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],x=l[2],v=l[6],y=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,S=(p+1)/2,A=(y+1)/2,w=(h+u)/4,C=(f+x)/4,P=(g+v)/4;return _>S&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=C/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=P/s),this.set(i,r,s,t),this}let M=Math.sqrt((v-g)*(v-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(v-g)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Q(this.x,e.x,t.x),this.y=Q(this.y,e.y,t.y),this.z=Q(this.z,e.z,t.z),this.w=Q(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Q(this.x,e,t),this.y=Q(this.y,e,t),this.z=Q(this.z,e,t),this.w=Q(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Q(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yr.prototype.isVector4=!0;var Cr=Yr;var oi=class oi{constructor(e,t,i,r,s,a,o,l,c,h,f,u,p,g,x,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,u,p,g,x,v)}set(e,t,i,r,s,a,o,l,c,h,f,u,p,g,x,v){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=f,y[14]=u,y[3]=p,y[7]=g,y[11]=x,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oi().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/i0.setFromMatrixColumn(e,0).length(),s=1/i0.setFromMatrixColumn(e,1).length(),a=1/i0.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,g=c*h,x=c*f;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,g=c*h,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z2,e,K2)}lookAt(e,t,i){let r=this.elements;return De.subVectors(e,t),De.lengthSq()===0&&(De.z=1),De.normalize(),Mt.crossVectors(i,De),Mt.lengthSq()===0&&(Math.abs(i.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Mt.crossVectors(i,De)),Mt.normalize(),zn.crossVectors(De,Mt),r[0]=Mt.x,r[4]=zn.x,r[8]=De.x,r[1]=Mt.y,r[5]=zn.y,r[9]=De.y,r[2]=Mt.z,r[6]=zn.z,r[10]=De.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],x=i[6],v=i[10],y=i[14],M=i[3],_=i[7],S=i[11],A=i[15],w=r[0],C=r[4],P=r[8],E=r[12],b=r[1],R=r[5],B=r[9],H=r[13],q=r[2],O=r[6],j=r[10],ee=r[14],te=r[3],ne=r[7],ae=r[11],$=r[15];return s[0]=a*w+o*b+l*q+c*te,s[4]=a*C+o*R+l*O+c*ne,s[8]=a*P+o*B+l*j+c*ae,s[12]=a*E+o*H+l*ee+c*$,s[1]=h*w+f*b+u*q+p*te,s[5]=h*C+f*R+u*O+p*ne,s[9]=h*P+f*B+u*j+p*ae,s[13]=h*E+f*H+u*ee+p*$,s[2]=g*w+x*b+v*q+y*te,s[6]=g*C+x*R+v*O+y*ne,s[10]=g*P+x*B+v*j+y*ae,s[14]=g*E+x*H+v*ee+y*$,s[3]=M*w+_*b+S*q+A*te,s[7]=M*C+_*R+S*O+A*ne,s[11]=M*P+_*B+S*j+A*ae,s[15]=M*E+_*H+S*ee+A*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],x=e[7],v=e[11],y=e[15],M=l*p-c*u,_=o*p-c*f,S=o*u-l*f,A=a*p-c*h,w=a*u-l*h,C=a*f-o*h;return t*(x*M-v*_+y*S)-i*(g*M-v*A+y*w)+r*(g*_-x*A+y*C)-s*(g*S-x*w+v*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],x=e[13],v=e[14],y=e[15],M=t*o-i*a,_=t*l-r*a,S=t*c-s*a,A=i*l-r*o,w=i*c-s*o,C=r*c-s*l,P=h*x-f*g,E=h*v-u*g,b=h*y-p*g,R=f*v-u*x,B=f*y-p*x,H=u*y-p*v,q=M*H-_*B+S*R+A*b-w*E+C*P;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return e[0]=(o*H-l*B+c*R)*O,e[1]=(r*B-i*H-s*R)*O,e[2]=(x*C-v*w+y*A)*O,e[3]=(u*w-f*C-p*A)*O,e[4]=(l*b-a*H-c*E)*O,e[5]=(t*H-r*b+s*E)*O,e[6]=(v*S-g*C-y*_)*O,e[7]=(h*C-u*S+p*_)*O,e[8]=(a*B-o*b+c*P)*O,e[9]=(i*b-t*B-s*P)*O,e[10]=(g*w-x*S+y*M)*O,e[11]=(f*S-h*w-p*M)*O,e[12]=(o*E-a*R-l*P)*O,e[13]=(t*R-i*E+r*P)*O,e[14]=(x*_-g*A-v*M)*O,e[15]=(h*A-f*_+u*M)*O,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,p=s*h,g=s*f,x=a*h,v=a*f,y=o*f,M=l*c,_=l*h,S=l*f,A=i.x,w=i.y,C=i.z;return r[0]=(1-(x+y))*A,r[1]=(p+S)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(u+y))*w,r[6]=(v+M)*w,r[7]=0,r[8]=(g+_)*C,r[9]=(v-M)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=i0.set(r[0],r[1],r[2]).length(),o=i0.set(r[4],r[5],r[6]).length(),l=i0.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ze.copy(this);let c=1/a,h=1/o,f=1/l;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=f,Ze.elements[9]*=f,Ze.elements[10]*=f,t.setFromRotationMatrix(Ze),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=j0,l=!1){let c=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===j0)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ar)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=j0,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r),g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===j0)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ar)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};oi.prototype.isMatrix4=!0;var dt=oi,i0=new le,Ze=new dt,Z2=new le(0,0,0),K2=new le(1,1,1),Mt=new le,zn=new le,De=new le,Ca=new dt,Pa=new mt,nn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Q(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Q(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Q(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Q(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Q(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Q(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var Kn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Q2=0,Ra=new le,r0=new mt,ft=new dt,Hn=new le,Q0=new le,$2=new le,j2=new mt,Ia=new le(1,0,0),La=new le(0,1,0),Fa=new le(0,0,1),Da={type:"added"},e4={type:"removed"},s0={type:"childadded",child:null},or={type:"childremoved",child:null},h0=class n extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q2++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new le,t=new nn,i=new mt,r=new le(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new G}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return r0.setFromAxisAngle(e,t),this.quaternion.multiply(r0),this}rotateOnWorldAxis(e,t){return r0.setFromAxisAngle(e,t),this.quaternion.premultiply(r0),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(La,e)}rotateZ(e){return this.rotateOnAxis(Fa,e)}translateOnAxis(e,t){return Ra.copy(e).applyQuaternion(this.quaternion),this.position.add(Ra.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(La,e)}translateZ(e){return this.translateOnAxis(Fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ft.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Hn.copy(e):Hn.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Q0.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ft.lookAt(Q0,Hn,this.up):ft.lookAt(Hn,Q0,this.up),this.quaternion.setFromRotationMatrix(ft),r&&(ft.extractRotation(r.matrixWorld),r0.setFromRotationMatrix(ft),this.quaternion.premultiply(r0.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Da),s0.child=e,this.dispatchEvent(s0),s0.child=null):ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e4),or.child=e,this.dispatchEvent(or),or.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(ft),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Da),s0.child=e,this.dispatchEvent(s0),s0.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Q0,e,$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Q0,j2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};h0.DEFAULT_UP=new le(0,1,0);h0.DEFAULT_MATRIX_AUTO_UPDATE=!0;h0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ka={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={h:0,s:0,l:0},Vn={h:0,s:0,l:0};function lr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=He.workingColorSpace){if(e=X2(e,1),t=Q(t,0,1),i=Q(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=lr(a,s,e+1/3),this.g=lr(a,s,e),this.b=lr(a,s,e-1/3)}return He.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function i(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let i=Ka[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pt(e.r),this.g=pt(e.g),this.b=pt(e.b),this}copyLinearToSRGB(e){return this.r=l0(e.r),this.g=l0(e.g),this.b=l0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return He.workingToColorSpace(Te.copy(this),e),Math.round(Q(Te.r*255,0,255))*65536+Math.round(Q(Te.g*255,0,255))*256+Math.round(Q(Te.b*255,0,255))}getHexString(e=Ve){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.workingToColorSpace(Te.copy(this),t);let i=Te.r,r=Te.g,s=Te.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.workingToColorSpace(Te.copy(this),t),e.r=Te.r,e.g=Te.g,e.b=Te.b,e}getStyle(e=Ve){He.workingToColorSpace(Te.copy(this),e);let t=Te.r,i=Te.g,r=Te.b;return e!==Ve?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tt),this.setHSL(Tt.h+e,Tt.s+t,Tt.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tt),e.getHSL(Vn);let i=nr(Tt.h,Vn.h,t),r=nr(Tt.s,Vn.s,t),s=nr(Tt.l,Vn.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Te=new ye;ye.NAMES=Ka;function Qa(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(Na(r))r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Na(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ce(n){let e={};for(let t=0;t<n.length;t++){let i=Qa(n[t]);for(let r in i)e[r]=i[r]}return e}function Na(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function a0(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cr(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Et=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Qn=class extends Et{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sr,endingEnd:Sr}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case br:s=e,o=2*t-i;break;case Mr:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case br:a=e,l=2*i-t;break;case Mr:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),x=g*g,v=x*g,y=-u*v+2*u*x-u*g,M=(1+u)*v+(-1.5-2*u)*x+(-.5+u)*g+1,_=(-1-p)*v+(1.5+p)*x+.5*g,S=p*v-p*x;for(let A=0;A!==o;++A)s[A]=y*a[h+A]+M*a[c+A]+_*a[l+A]+S*a[f+A];return s}},$n=class extends Et{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*f+a[l+u]*h;return s}},jn=class extends Et{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ei=class extends Et{interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-t)/(r-t),x=1-g;for(let v=0;v!==o;++v)s[v]=a[c+v]*x+a[l+v]*g;return s}let u=o*2,p=e-1;for(let g=0;g!==o;++g){let x=a[c+g],v=a[l+g],y=p*u+g*2,M=f[y],_=f[y+1],S=e*u+g*2,A=h[S],w=h[S+1],C=n4(i,t,M,A,r);s[g]=$a(C,x,_,w,v)}return s}};function $a(n,e,t,i,r){let s=1-n;return s*s*s*e+3*s*s*n*t+3*s*n*n*i+n*n*n*r}function t4(n,e,t,i,r){let s=1-n;return 3*s*s*(t-e)+6*s*n*(i-t)+3*n*n*(r-i)}function n4(n,e,t,i,r){let s=(n-e)/(r-e);for(let a=0;a<8;a++){let o=$a(s,e,t,i,r)-n;if(Math.abs(o)<1e-10)break;let l=t4(s,e,t,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ne=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=a0(t,this.TimeBufferType),this.values=a0(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:a0(e.times,Array),values:a0(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),cr(e.settings)&&(i.settings={inTangents:a0(e.settings.inTangents,Array),outTangents:a0(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jn(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $n(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qn(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ei(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case en:t=this.InterpolantFactoryMethodDiscrete;break;case qn:t=this.InterpolantFactoryMethodLinear;break;case Wn:t=this.InterpolantFactoryMethodSmooth;break;case _r:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ee("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return en;case this.InterpolantFactoryMethodLinear:return qn;case this.InterpolantFactoryMethodSmooth:return Wn;case this.InterpolantFactoryMethodBezier:return _r}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;cr(this.settings)&&(Oa(this.settings.inTangents,e),Oa(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ve("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&H2(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){ve("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wn,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*i,u=f-i,p=f+i;for(let g=0;g!==i;++g){let x=t[f+g];if(x!==t[u+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let p=0;p!==i;++p)t[u+p]=t[f+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,cr(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Oa(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ne.prototype.ValueTypeName="";Ne.prototype.TimeBufferType=Float32Array;Ne.prototype.ValueBufferType=Float32Array;Ne.prototype.DefaultInterpolation=qn;var At=class extends Ne{constructor(e,t,i){super(e,t,i)}};At.prototype.ValueTypeName="bool";At.prototype.ValueBufferType=Array;At.prototype.DefaultInterpolation=en;At.prototype.InterpolantFactoryMethodLinear=void 0;At.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Ne{constructor(e,t,i,r){super(e,t,i,r)}};ti.prototype.ValueTypeName="color";var ni=class extends Ne{constructor(e,t,i,r){super(e,t,i,r)}};ni.prototype.ValueTypeName="number";var ii=class extends Et{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)mt.slerpFlat(s,0,a,c-o,a,c,l);return s}},rn=class extends Ne{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ii(this.times,this.values,this.getValueSize(),e)}};rn.prototype.ValueTypeName="quaternion";rn.prototype.InterpolantFactoryMethodSmooth=void 0;var wt=class extends Ne{constructor(e,t,i){super(e,t,i)}};wt.prototype.ValueTypeName="string";wt.prototype.ValueBufferType=Array;wt.prototype.DefaultInterpolation=en;wt.prototype.InterpolantFactoryMethodLinear=void 0;wt.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends Ne{constructor(e,t,i,r){super(e,t,i,r)}};ri.prototype.ValueTypeName="vector";var si=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ja=new si,ai=class{constructor(e){this.manager=e!==void 0?e:ja,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr="\\[\\]\\.:\\/",i4=new RegExp("["+Hr+"]","g"),Vr="[^"+Hr+"]",r4="[^"+Hr.replace("\\.","")+"]",s4=/((?:WC+[\/:])*)/.source.replace("WC",Vr),a4=/(WCOD+)?/.source.replace("WCOD",r4),o4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vr),l4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vr),c4=new RegExp("^"+s4+a4+o4+l4+"$"),h4=["material","materials","bones","map"],Pr=class{constructor(e,t,i){let r=i||oe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},oe=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i4,"")}static parseTrackName(e){let t=c4.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);h4.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;ve("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Pr;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cf=new Float32Array(1);var Jr=class Jr{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Jr.prototype.isMatrix2=!0;var Rr=Jr,Ua=new F,u0=class{constructor(e=new F(1/0,1/0),t=new F(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ua.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ua).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");var u4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f4=`#ifdef USE_ALPHAHASH
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
#endif`,p4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x4=`#ifdef USE_AOMAP
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
#endif`,v4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T4=`#ifdef USE_IRIDESCENCE
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
#endif`,E4=`#ifdef USE_BUMPMAP
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
#endif`,A4=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,w4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R4=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,I4=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L4=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,F4=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D4=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,N4=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O4=`vec3 transformedNormal = objectNormal;
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
#endif`,U4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z4="gl_FragColor = linearToOutputTexel( gl_FragColor );",H4=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,W4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X4=`#ifdef USE_ENVMAP
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
#endif`,q4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$4=`#ifdef USE_GRADIENTMAP
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
}`,j4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,el=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nl=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,il=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sl=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,al=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ol=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ll=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,cl=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hl=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ul=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fl=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pl=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ml=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_l=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sl=`#if defined( USE_POINTS_UV )
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
#endif`,bl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ml=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,El=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Al=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,Cl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Il=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ll=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dl=`#ifdef USE_NORMALMAP
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
#endif`,Nl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ol=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ul=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ql=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Jl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Kl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ql=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$l=`#ifdef USE_SKINNING
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
#endif`,jl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e5=`#ifdef USE_SKINNING
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
#endif`,t5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r5=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s5=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a5=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,u5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f5=`uniform sampler2D t2D;
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
}`,p5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x5=`#include <common>
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
}`,v5=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y5=`#define DISTANCE
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
}`,_5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,S5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M5=`uniform float scale;
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
}`,T5=`uniform vec3 diffuse;
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
}`,E5=`#include <common>
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
}`,A5=`uniform vec3 diffuse;
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
}`,w5=`#define LAMBERT
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
}`,C5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,P5=`#define MATCAP
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
}`,R5=`#define MATCAP
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
}`,I5=`#define NORMAL
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
}`,L5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F5=`#define PHONG
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
}`,D5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,N5=`#define STANDARD
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
}`,O5=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,U5=`#define TOON
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
}`,k5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,B5=`uniform float size;
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
}`,G5=`uniform vec3 diffuse;
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
}`,z5=`#include <common>
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
}`,H5=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,V5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,W5=`uniform vec3 diffuse;
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
}`,K={alphahash_fragment:u4,alphahash_pars_fragment:f4,alphamap_fragment:p4,alphamap_pars_fragment:d4,alphatest_fragment:m4,alphatest_pars_fragment:g4,aomap_fragment:x4,aomap_pars_fragment:v4,batching_pars_vertex:y4,batching_vertex:_4,begin_vertex:S4,beginnormal_vertex:b4,bsdfs:M4,iridescence_fragment:T4,bumpmap_pars_fragment:E4,clipping_planes_fragment:A4,clipping_planes_pars_fragment:w4,clipping_planes_pars_vertex:C4,clipping_planes_vertex:P4,color_fragment:R4,color_pars_fragment:I4,color_pars_vertex:L4,color_vertex:F4,common:D4,cube_uv_reflection_fragment:N4,defaultnormal_vertex:O4,displacementmap_pars_vertex:U4,displacementmap_vertex:k4,emissivemap_fragment:B4,emissivemap_pars_fragment:G4,colorspace_fragment:z4,colorspace_pars_fragment:H4,envmap_fragment:V4,envmap_common_pars_fragment:W4,envmap_pars_fragment:X4,envmap_pars_vertex:q4,envmap_physical_pars_fragment:il,envmap_vertex:Y4,fog_vertex:J4,fog_pars_vertex:Z4,fog_fragment:K4,fog_pars_fragment:Q4,gradientmap_pars_fragment:$4,lightmap_pars_fragment:j4,lights_lambert_fragment:el,lights_lambert_pars_fragment:tl,lights_pars_begin:nl,lights_toon_fragment:rl,lights_toon_pars_fragment:sl,lights_phong_fragment:al,lights_phong_pars_fragment:ol,lights_physical_fragment:ll,lights_physical_pars_fragment:cl,lights_fragment_begin:hl,lights_fragment_maps:ul,lights_fragment_end:fl,lightprobes_pars_fragment:pl,logdepthbuf_fragment:dl,logdepthbuf_pars_fragment:ml,logdepthbuf_pars_vertex:gl,logdepthbuf_vertex:xl,map_fragment:vl,map_pars_fragment:yl,map_particle_fragment:_l,map_particle_pars_fragment:Sl,metalnessmap_fragment:bl,metalnessmap_pars_fragment:Ml,morphinstance_vertex:Tl,morphcolor_vertex:El,morphnormal_vertex:Al,morphtarget_pars_vertex:wl,morphtarget_vertex:Cl,normal_fragment_begin:Pl,normal_fragment_maps:Rl,normal_pars_fragment:Il,normal_pars_vertex:Ll,normal_vertex:Fl,normalmap_pars_fragment:Dl,clearcoat_normal_fragment_begin:Nl,clearcoat_normal_fragment_maps:Ol,clearcoat_pars_fragment:Ul,iridescence_pars_fragment:kl,opaque_fragment:Bl,packing:Gl,premultiplied_alpha_fragment:zl,project_vertex:Hl,dithering_fragment:Vl,dithering_pars_fragment:Wl,roughnessmap_fragment:Xl,roughnessmap_pars_fragment:ql,shadowmap_pars_fragment:Yl,shadowmap_pars_vertex:Jl,shadowmap_vertex:Zl,shadowmask_pars_fragment:Kl,skinbase_vertex:Ql,skinning_pars_vertex:$l,skinning_vertex:jl,skinnormal_vertex:e5,specularmap_fragment:t5,specularmap_pars_fragment:n5,tonemapping_fragment:i5,tonemapping_pars_fragment:r5,transmission_fragment:s5,transmission_pars_fragment:a5,uv_pars_fragment:o5,uv_pars_vertex:l5,uv_vertex:c5,worldpos_vertex:h5,background_vert:u5,background_frag:f5,backgroundCube_vert:p5,backgroundCube_frag:d5,cube_vert:m5,cube_frag:g5,depth_vert:x5,depth_frag:v5,distance_vert:y5,distance_frag:_5,equirect_vert:S5,equirect_frag:b5,linedashed_vert:M5,linedashed_frag:T5,meshbasic_vert:E5,meshbasic_frag:A5,meshlambert_vert:w5,meshlambert_frag:C5,meshmatcap_vert:P5,meshmatcap_frag:R5,meshnormal_vert:I5,meshnormal_frag:L5,meshphong_vert:F5,meshphong_frag:D5,meshphysical_vert:N5,meshphysical_frag:O5,meshtoon_vert:U5,meshtoon_frag:k5,points_vert:B5,points_frag:G5,shadow_vert:z5,shadow_frag:H5,sprite_vert:V5,sprite_frag:W5},L={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new F(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new F(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},eo={basic:{uniforms:Ce([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Ce([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Ce([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Ce([L.common,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.roughnessmap,L.metalnessmap,L.fog,L.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Ce([L.common,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.gradientmap,L.fog,L.lights,{emissive:{value:new ye(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Ce([L.common,L.bumpmap,L.normalmap,L.displacementmap,L.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Ce([L.points,L.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Ce([L.common,L.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Ce([L.common,L.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Ce([L.common,L.bumpmap,L.normalmap,L.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Ce([L.sprite,L.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:Ce([L.common,L.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:Ce([L.lights,L.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};eo.physical={uniforms:Ce([eo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new F(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new F},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new F},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var X5=new G;X5.set(-1,0,0,0,1,0,0,0,1);var ux={[Ir]:"LINEAR_TONE_MAPPING",[Lr]:"REINHARD_TONE_MAPPING",[Fr]:"CINEON_TONE_MAPPING",[Dr]:"ACES_FILMIC_TONE_MAPPING",[Or]:"AGX_TONE_MAPPING",[Ur]:"NEUTRAL_TONE_MAPPING",[Nr]:"CUSTOM_TONE_MAPPING"};var fx=new Float32Array(16),px=new Float32Array(9),dx=new Float32Array(4);var mx={[Ir]:"Linear",[Lr]:"Reinhard",[Fr]:"Cineon",[Dr]:"ACESFilmic",[Or]:"AgX",[Ur]:"Neutral",[Nr]:"Custom"};var gx={[ka]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};var xx={[Va]:"ENVMAP_TYPE_CUBE",[Br]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};var vx={[Br]:"ENVMAP_MODE_REFRACTION"};var yx={[Ga]:"ENVMAP_BLENDING_MULTIPLY",[za]:"ENVMAP_BLENDING_MIX",[Ha]:"ENVMAP_BLENDING_ADD"};var q5=new G;q5.set(-1,0,0,0,1,0,0,0,1);var _x=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);function to(n,e,t,i,r=!1){let s=e.clone().sub(n),a=i.clone().sub(t);if(s.lengthSq()==0||a.lengthSq()==0)return null;let o=s.cross(a);if(Math.abs(o)<=Number.EPSILON)return null;let l=t.clone().sub(n),c=l.cross(a)/o;if(!r&&(c<0||c>1))return null;let h=l.cross(s)/o;return!r&&(h<0||h>1)?null:[c,h,o]}var Zr=new G;function Ke(n,e,t){return n.premultiply(Zr.makeTranslation(e,t))}function st(n,e,t){return n.premultiply(Zr.makeScale(e,t))}function Qe(n,e){return n.premultiply(Zr.makeRotation(-e))}var Kr=0,Qr=1,$r=2,jr=3,es=4,ts=5,ns=6,is=7;var no="",Oe="srgb",rs="srgb-linear",ss="linear",li="srgb";var sn=2e3,as=2001;var io={},ro=null;function Y5(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=Y5(n);let e="THREE."+n.shift();if(ro)ro("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function zt(...n){let e=n.join(" ");e in io||(io[e]=!0,We(...n))}var Cx={[Kr]:Qr,[$r]:ns,[es]:is,[jr]:ts,[Qr]:Kr,[ns]:$r,[is]:es,[ts]:jr};var Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rx=Math.PI/180,Ix=180/Math.PI;function so(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[e&255]+Ae[e>>8&255]+"-"+Ae[e>>16&15|64]+Ae[e>>24&255]+"-"+Ae[t&63|128]+Ae[t>>8&255]+"-"+Ae[t>>16&255]+Ae[t>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function re(n,e,t){return Math.max(e,Math.min(t,n))}function ao(n,e){return(n%e+e)%e}function ci(n,e,t){return(1-t)*n+t*e}var ls=class ls{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],x=r[0],v=r[3],y=r[6],M=r[1],_=r[4],S=r[7],A=r[2],w=r[5],C=r[8];return s[0]=a*x+o*M+l*A,s[3]=a*v+o*_+l*w,s[6]=a*y+o*S+l*C,s[1]=c*x+h*M+f*A,s[4]=c*v+h*_+f*w,s[7]=c*y+h*S+f*C,s[2]=u*x+p*M+g*A,s[5]=u*v+p*_+g*w,s[8]=u*y+p*S+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,p=c*s-a*l,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(r*c-h*i)*x,e[2]=(o*i-r*a)*x,e[3]=u*x,e[4]=(h*t-r*l)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zt("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(os.makeScale(e,t)),this}rotate(e){return zt("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(os.makeRotation(-e)),this}translate(e,t){return zt("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ls.prototype.isMatrix3=!0;var f0=ls,os=new f0;var oo=new f0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lo=new f0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J5(){let n={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===li&&(r.r=Ht(r.r),r.g=Ht(r.g),r.b=Ht(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===li&&(r.r=Vt(r.r),r.g=Vt(r.g),r.b=Vt(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===no?ss:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zt("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zt("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[rs]:{primaries:e,whitePoint:i,transfer:ss,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:e,whitePoint:i,transfer:li,toXYZ:oo,fromXYZ:lo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),n}var Xe=J5();function Ht(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vt(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var co={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ct={h:0,s:0,l:0},hi={h:0,s:0,l:0};function cs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var p0=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=ao(e,1),t=re(t,0,1),i=re(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=cs(a,s,e+1/3),this.g=cs(a,s,e),this.b=cs(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Oe){let i=co[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}copyLinearToSRGB(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return Xe.workingToColorSpace(we.copy(this),e),Math.round(re(we.r*255,0,255))*65536+Math.round(re(we.g*255,0,255))*256+Math.round(re(we.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(we.copy(this),t);let i=we.r,r=we.g,s=we.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(we.copy(this),t),e.r=we.r,e.g=we.g,e.b=we.b,e}getStyle(e=Oe){Xe.workingToColorSpace(we.copy(this),e);let t=we.r,i=we.g,r=we.b;return e!==Oe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ct),this.setHSL(Ct.h+e,Ct.s+t,Ct.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ct),e.getHSL(hi);let i=ci(Ct.h,hi.h,t),r=ci(Ct.s,hi.s,t),s=ci(Ct.l,hi.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new p0;p0.NAMES=co;var hs=class hs{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=re(this.x,e.x,t.x),this.y=re(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=re(this.x,e,t),this.y=re(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(re(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hs.prototype.isVector2=!0;var Y=hs;var ho=new Y,ui=class{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ho.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ho).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var fi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],p=s[a+1],g=s[a+2],x=s[a+3];if(f!==x||l!==u||c!==p||h!==g){let v=l*u+c*p+h*g+f*x;v<0&&(u=-u,p=-p,g=-g,x=-x,v=-v);let y=1-o;if(v<.9995){let M=Math.acos(v),_=Math.sin(M);y=Math.sin(y*M)/_,o=Math.sin(o*M)/_,l=l*y+u*o,c=c*y+p*o,h=h*y+g*o,f=f*y+x*o}else{l=l*y+u*o,c=c*y+p*o,h=h*y+g*o,f=f*y+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-o*p,e[t+2]=c*g+h*p+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){let p=2*Math.sqrt(1+i-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(re(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var fs=class fs{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=re(this.x,e.x,t.x),this.y=re(this.y,e.y,t.y),this.z=re(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=re(this.x,e,t),this.y=re(this.y,e,t),this.z=re(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return us.copy(this).projectOnVector(e),this.sub(us)}reflect(e){return this.sub(us.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(re(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fs.prototype.isVector3=!0;var J=fs,us=new J,uo=new fi;var di=class di{constructor(e,t,i,r,s,a,o,l,c,h,f,u,p,g,x,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,u,p,g,x,v)}set(e,t,i,r,s,a,o,l,c,h,f,u,p,g,x,v){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=r,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=f,y[14]=u,y[3]=p,y[7]=g,y[11]=x,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new di().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/d0.setFromMatrixColumn(e,0).length(),s=1/d0.setFromMatrixColumn(e,1).length(),a=1/d0.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*f,g=c*h,x=c*f;t[0]=u+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*f,g=c*h,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*f,t[8]=g*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z5,e,K5)}lookAt(e,t,i){let r=this.elements;return Ue.subVectors(e,t),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Pt.crossVectors(i,Ue),Pt.lengthSq()===0&&(Math.abs(i.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Pt.crossVectors(i,Ue)),Pt.normalize(),pi.crossVectors(Ue,Pt),r[0]=Pt.x,r[4]=pi.x,r[8]=Ue.x,r[1]=Pt.y,r[5]=pi.y,r[9]=Ue.y,r[2]=Pt.z,r[6]=pi.z,r[10]=Ue.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],x=i[6],v=i[10],y=i[14],M=i[3],_=i[7],S=i[11],A=i[15],w=r[0],C=r[4],P=r[8],E=r[12],b=r[1],R=r[5],B=r[9],H=r[13],q=r[2],O=r[6],j=r[10],ee=r[14],te=r[3],ne=r[7],ae=r[11],$=r[15];return s[0]=a*w+o*b+l*q+c*te,s[4]=a*C+o*R+l*O+c*ne,s[8]=a*P+o*B+l*j+c*ae,s[12]=a*E+o*H+l*ee+c*$,s[1]=h*w+f*b+u*q+p*te,s[5]=h*C+f*R+u*O+p*ne,s[9]=h*P+f*B+u*j+p*ae,s[13]=h*E+f*H+u*ee+p*$,s[2]=g*w+x*b+v*q+y*te,s[6]=g*C+x*R+v*O+y*ne,s[10]=g*P+x*B+v*j+y*ae,s[14]=g*E+x*H+v*ee+y*$,s[3]=M*w+_*b+S*q+A*te,s[7]=M*C+_*R+S*O+A*ne,s[11]=M*P+_*B+S*j+A*ae,s[15]=M*E+_*H+S*ee+A*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],x=e[7],v=e[11],y=e[15],M=l*p-c*u,_=o*p-c*f,S=o*u-l*f,A=a*p-c*h,w=a*u-l*h,C=a*f-o*h;return t*(x*M-v*_+y*S)-i*(g*M-v*A+y*w)+r*(g*_-x*A+y*C)-s*(g*S-x*w+v*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],x=e[13],v=e[14],y=e[15],M=t*o-i*a,_=t*l-r*a,S=t*c-s*a,A=i*l-r*o,w=i*c-s*o,C=r*c-s*l,P=h*x-f*g,E=h*v-u*g,b=h*y-p*g,R=f*v-u*x,B=f*y-p*x,H=u*y-p*v,q=M*H-_*B+S*R+A*b-w*E+C*P;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return e[0]=(o*H-l*B+c*R)*O,e[1]=(r*B-i*H-s*R)*O,e[2]=(x*C-v*w+y*A)*O,e[3]=(u*w-f*C-p*A)*O,e[4]=(l*b-a*H-c*E)*O,e[5]=(t*H-r*b+s*E)*O,e[6]=(v*S-g*C-y*_)*O,e[7]=(h*C-u*S+p*_)*O,e[8]=(a*B-o*b+c*P)*O,e[9]=(i*b-t*B-s*P)*O,e[10]=(g*w-x*S+y*M)*O,e[11]=(f*S-h*w-p*M)*O,e[12]=(o*E-a*R-l*P)*O,e[13]=(t*R-i*E+r*P)*O,e[14]=(x*_-g*A-v*M)*O,e[15]=(h*A-f*_+u*M)*O,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,p=s*h,g=s*f,x=a*h,v=a*f,y=o*f,M=l*c,_=l*h,S=l*f,A=i.x,w=i.y,C=i.z;return r[0]=(1-(x+y))*A,r[1]=(p+S)*A,r[2]=(g-_)*A,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(u+y))*w,r[6]=(v+M)*w,r[7]=0,r[8]=(g+_)*C,r[9]=(v-M)*C,r[10]=(1-(u+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=d0.set(r[0],r[1],r[2]).length(),o=d0.set(r[4],r[5],r[6]).length(),l=d0.set(r[8],r[9],r[10]).length();s<0&&(a=-a),$e.copy(this);let c=1/a,h=1/o,f=1/l;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=f,$e.elements[9]*=f,$e.elements[10]*=f,t.setFromRotationMatrix($e),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=sn,l=!1){let c=this.elements,h=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r),g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===sn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===as)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=sn,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r),g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===sn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===as)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};di.prototype.isMatrix4=!0;var an=di,d0=new J,$e=new an,Z5=new J(0,0,0),K5=new J(1,1,1),Pt=new J,pi=new J,Ue=new J;var ue=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],u=i[r+1]-h,p=(a-h)/u;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Y:new J);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new J,r=[],s=[],a=[],o=new J,l=new an;for(let p=0;p<=e;p++){let g=p/e;r[p]=this.getTangentAt(g,new J)}s[0]=new J,a[0]=new J;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(re(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(re(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var _i={};A2(_i,{ArcCurve:()=>mi,CatmullRomCurve3:()=>gi,CubicBezierCurve:()=>m0,CubicBezierCurve3:()=>xi,EllipseCurve:()=>Rt,LineCurve:()=>g0,LineCurve3:()=>vi,QuadraticBezierCurve:()=>x0,QuadraticBezierCurve3:()=>yi,SplineCurve:()=>v0});var Rt=class extends ue{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Y){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var mi=class extends Rt{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gs(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,p*=h,r(a,o,u,p)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var fo=new J,po=new J,ps=new gs,ds=new gs,ms=new gs,gi=class extends ue{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new J){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(po.subVectors(r[0],r[1]).add(r[0]),c=po);let f=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(fo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),v<1e-4&&(v=x),ps.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,v),ds.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,v),ms.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,v)}else this.curveType==="catmullrom"&&(ps.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ds.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ms.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(ps.calc(l),ds.calc(l),ms.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new J().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xs(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function Q5(n,e){let t=1-n;return t*t*e}function $5(n,e){return 2*(1-n)*n*e}function j5(n,e){return n*n*e}function Wt(n,e,t,i){return Q5(n,e)+$5(n,t)+j5(n,i)}function e3(n,e){let t=1-n;return t*t*t*e}function t3(n,e){let t=1-n;return 3*t*t*n*e}function n3(n,e){return 3*(1-n)*n*n*e}function i3(n,e){return n*n*n*e}function Xt(n,e,t,i,r){return e3(n,e)+t3(n,t)+n3(n,i)+i3(n,r)}var m0=class extends ue{constructor(e=new Y,t=new Y,i=new Y,r=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Y){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Xt(e,r.x,s.x,a.x,o.x),Xt(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var xi=class extends ue{constructor(e=new J,t=new J,i=new J,r=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new J){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Xt(e,r.x,s.x,a.x,o.x),Xt(e,r.y,s.y,a.y,o.y),Xt(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var g0=class extends ue{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var vi=class extends ue{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new J){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var x0=class extends ue{constructor(e=new Y,t=new Y,i=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Y){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Wt(e,r.x,s.x,a.x),Wt(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var yi=class extends ue{constructor(e=new J,t=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new J){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Wt(e,r.x,s.x,a.x),Wt(e,r.y,s.y,a.y),Wt(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var v0=class extends ue{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(xs(o,l.x,c.x,h.x,f.x),xs(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Y().fromArray(r))}return this}};var Si=class extends ue{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _i[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new _i[r.type]().fromJSON(r))}return this}};var It=class extends Si{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new g0(this.currentPoint.clone(),new Y(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new x0(this.currentPoint.clone(),new Y(e,t),new Y(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new m0(this.currentPoint.clone(),new Y(e,t),new Y(i,r),new Y(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new v0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new Rt(e,t,i,r,s,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var bi=class extends It{constructor(e){super(e),this.uuid=so(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new It().fromJSON(r))}return this}};function _s(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=go(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=l3(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let u=t;u<r;u+=t){let p=n[u],g=n[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return ln(s,a,t,o,l,c,0),a}function go(n,e,t,i,r){let s;if(r===y3(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=mo(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=mo(a/i|0,n[a],n[a+1],s);return s&&y0(s,s.next)&&(hn(s),s=s.next),s}function qt(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(y0(t,t.next)||he(t.prev,t,t.next)===0)){if(hn(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ln(n,e,t,i,r,s,a){if(!n)return;!a&&s&&p3(n,i,r,s);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?s3(n,i,r,s):r3(n)){e.push(l.i,n.i,c.i),hn(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=a3(qt(n),e),ln(n,e,t,i,r,s,2)):a===2&&o3(n,e,t,i,r,s):ln(qt(n),e,t,i,r,s,1);break}}}function r3(n){let e=n.prev,t=n,i=n.next;if(he(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),f=Math.min(o,l,c),u=Math.max(r,s,a),p=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&on(r,o,s,l,a,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function s3(n,e,t,i){let r=n.prev,s=n,a=n.next;if(he(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,f=s.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,f,u),x=Math.max(o,l,c),v=Math.max(h,f,u),y=vs(p,g,e,t,i),M=vs(x,v,e,t,i),_=n.prevZ,S=n.nextZ;for(;_&&_.z>=y&&S&&S.z<=M;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==a&&on(o,h,l,f,c,u,_.x,_.y)&&he(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=p&&S.x<=x&&S.y>=g&&S.y<=v&&S!==r&&S!==a&&on(o,h,l,f,c,u,S.x,S.y)&&he(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=y;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=v&&_!==r&&_!==a&&on(o,h,l,f,c,u,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=M;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=v&&S!==r&&S!==a&&on(o,h,l,f,c,u,S.x,S.y)&&he(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function a3(n,e){let t=n;do{let i=t.prev,r=t.next.next;!y0(i,r)&&vo(i,t,t.next,r)&&cn(i,r)&&cn(r,i)&&(e.push(i.i,t.i,r.i),hn(t),hn(t.next),t=n=r),t=t.next}while(t!==n);return qt(t)}function o3(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&g3(a,o)){let l=yo(a,o);a=qt(a,a.next),l=qt(l,l.next),ln(a,e,t,i,r,s,0),ln(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function l3(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=go(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(m3(c))}r.sort(c3);for(let s=0;s<r.length;s++)t=h3(r[s],t);return t}function c3(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function h3(n,e){let t=u3(n,e);if(!t)return e;let i=yo(t,n);return qt(i,i.next),qt(t,t.next)}function u3(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(y0(n,t))return t;do{if(y0(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&xo(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){let f=Math.abs(r-t.y)/(i-t.x);cn(t,n)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&f3(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function f3(n,e){return he(n.prev,n,e.prev)<0&&he(e.next,n,n.next)<0}function p3(n,e,t,i){let r=n;do r.z===0&&(r.z=vs(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,d3(r)}function d3(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function vs(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function m3(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xo(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function on(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&xo(n,e,t,i,r,s,a,o)}function g3(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!x3(n,e)&&(cn(n,e)&&cn(e,n)&&v3(n,e)&&(he(n.prev,n,e.prev)||he(n,e.prev,e))||y0(n,e)&&he(n.prev,n,n.next)>0&&he(e.prev,e,e.next)>0)}function he(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function y0(n,e){return n.x===e.x&&n.y===e.y}function vo(n,e,t,i){let r=Ti(he(n,e,t)),s=Ti(he(n,e,i)),a=Ti(he(t,i,n)),o=Ti(he(t,i,e));return!!(r!==s&&a!==o||r===0&&Mi(n,t,e)||s===0&&Mi(n,i,e)||a===0&&Mi(t,n,i)||o===0&&Mi(t,e,i))}function Mi(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ti(n){return n>0?1:n<0?-1:0}function x3(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&vo(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function cn(n,e){return he(n.prev,n,n.next)<0?he(n,e,n.next)>=0&&he(n,n.prev,e)>=0:he(n,e,n.prev)<0||he(n,n.next,e)<0}function v3(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function yo(n,e){let t=ys(n.i,n.x,n.y),i=ys(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function mo(n,e,t,i){let r=ys(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function hn(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ys(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y3(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var Ei=class{static triangulate(e,t,i=2){return _s(e,t,i)}};var Lt=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];_o(e),So(i,e);let a=e.length;t.forEach(_o);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,So(i,t[l]);let o=Ei.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function _o(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function So(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ai=class{constructor(){this.type="ShapePath",this.color=new p0,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new It,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,a){return this.currentPath.bezierCurveTo(e,t,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let h=!1,f=c.length;for(let u=0,p=f-1;u<f;p=u++){let g=c[u],x=c[p];g.y>l.y!=x.y>l.y&&l.x<(x.x-g.x)*(l.y-g.y)/(x.y-g.y)+g.x&&(h=!h)}return h}function t(l,c){let h=c.getCenter(new Y);if(e(h,l))return h;let f=h.y,u=[],p=l.length;for(let g=0;g<p;g++){let x=l[g],v=l[(g+1)%p];if(x.y>f!=v.y>f){let y=x.x+(f-x.y)*(v.x-x.x)/(v.y-x.y);u.push(y)}}return u.length>1&&(u.sort((g,x)=>g-x),h.x=(u[0]+u[1])/2),h}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(We('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let r=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Lt.area(c);if(h===0)continue;let f=new ui;for(let u=0;u<c.length;u++)f.expandByPoint(c[u]);s.push({subPath:l,points:c,boundingBox:f,interiorPoint:t(c,f),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],h=0;for(let f=l-1;f>=0;f--){let u=s[f];if(u.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}r(c.winding)===r(h)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new bi;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let h=new It;h.curves=l.subPath.curves,c.holes.push(h)}return a}};var se=Object.freeze({TEXT:0,ESCAPE:1,SKIP_FORMAT:2,PARAGRAPH_PROPS:3,PARAGRAPH_ALIGN:4,COLOR:5,STACK:6,CARET:7}),be=Object.freeze({TEXT:0,SCOPE:1,PARAGRAPH:2,NON_BREAKING_SPACE:3,PARAGRAPH_ALIGNMENT:4,COLOR:5,STACK:6,TAB:7}),_3=new Set(["L","l","O","o","K","k","P","X","~"]),S3=new Set(["f","F","p","Q","H","W","S","A","C","T"]),b3=new Set(["\\","{","}"]),M3=new Set(["^","/","#"]),Pe=class{constructor(){this.entities=[]}Parse(e){let t=e.length,i=0,r=se.TEXT,s=[],a=this.entities,o=0,l=this;function c(){r!==se.TEXT||i===o||(a.push({type:be.TEXT,content:e.slice(i,o)}),i=o)}function h(x){a.push({type:x})}function f(){let x=e.slice(i,o),v=parseInt(x);isNaN(v)||v<1||v>255||a.push({type:be.COLOR,color:bt[v]})}function u(x){let v="",y=null,M=null,_=x;for(;_<t;_++){let S=e.charAt(_);if(S==="\\"&&_+1<t)_++,S=e.charAt(_);else{if(S===";")break;if(M===null&&M3.has(S)){M=S,y="";continue}}y===null?v+=S:y+=S}return M===null?(v!==""&&a.push({type:be.TEXT,content:v}),_):(M==="^"&&y.startsWith(" ")&&(y=y.slice(1)),a.push({type:be.STACK,numerator:v,denominator:y,divider:M}),_)}function p(){let x={type:be.SCOPE,content:[]};a.push(x),a=x.content,s.push(x)}function g(){s.length!==0&&(s.pop(),s.length===0?a=l.entities:a=s[s.length-1].content)}for(;o<t;o++){let x=e.charAt(o);switch(r){case se.TEXT:if(x==="{"){c(),p(),i=o+1;continue}if(x==="}"){c(),g(),i=o+1;continue}if(x==="\\"){c(),r=se.ESCAPE;continue}if(x==="^"){c(),r=se.CARET;continue}if(x==="	"){c(),h(be.TAB),i=o+1;continue}continue;case se.ESCAPE:if(_3.has(x)){switch(x){case"P":h(be.PARAGRAPH);break;case"~":h(be.NON_BREAKING_SPACE);break}r=se.TEXT,i=o+1;continue}if(S3.has(x)){switch(x){case"p":r=se.PARAGRAPH_PROPS;continue;case"C":r=se.COLOR,i=o+1;continue;case"S":r=se.STACK;continue}r=se.SKIP_FORMAT;continue}b3.has(x)?i=o:i=o-1,r=se.TEXT;continue;case se.CARET:switch(x){case"I":h(be.TAB);break;case"J":h(be.PARAGRAPH);break;case"M":break;case" ":a.push({type:be.TEXT,content:"^"});break;default:a.push({type:be.TEXT,content:"^"}),i=o,r=se.TEXT,o--;continue}r=se.TEXT,i=o+1;continue;case se.PARAGRAPH_PROPS:if(x===";"){i=o+1,r=se.TEXT;continue}x==="q"&&(r=se.PARAGRAPH_ALIGN);continue;case se.PARAGRAPH_ALIGN:if(x===";"){i=o+1,r=se.TEXT;continue}a.push({type:be.PARAGRAPH_ALIGNMENT,alignment:x}),r=se.PARAGRAPH_PROPS;continue;case se.SKIP_FORMAT:x===";"&&(i=o+1,r=se.TEXT);continue;case se.STACK:{let v=u(o);o=v,i=v+1,r=se.TEXT;continue}case se.COLOR:x===";"&&(f(),i=o+1,r=se.TEXT);continue;default:throw new Error("Unhandled state")}}c()}GetContent(){return this.entities}*GetText(){function*e(t){for(let i of t)i.type===be.TEXT?yield i.content:i.type===be.STACK?(yield i.numerator,yield i.denominator):i.type===be.SCOPE&&(yield*e(i.content))}yield*e(this.GetContent())}};Pe.EntityType=be;var wi={curveSubdivision:2,fallbackChar:"\uFFFD?"};var T3=/(?:%%([dpcou%]))|(?:\\U\+([0-9a-f]{4}))|(?:\\M\+([1-5][0-9a-f]{4}))/gi,E3=[null,"shift_jis","big5","euc-kr",null,"gbk"],Ss=new Map;function A3(n){if(Ss.has(n))return Ss.get(n);let e=E3[n]??null,t=null;if(e!==null)try{t=new TextDecoder(e,{fatal:!0})}catch{console.warn(`Code page not supported for MIF encoded text: ${e}`)}return Ss.set(n,t),t}function w3(n){let e=parseInt(n.slice(1),16);if(e<128)return String.fromCharCode(e);let t=A3(parseInt(n.charAt(0)));if(t===null)return null;let i=e<256?[e]:[e>>8,e&255];try{return t.decode(new Uint8Array(i))}catch{return null}}function at(n){return n.replaceAll(T3,(e,t,i,r)=>{if(t!==void 0)switch(t.toLowerCase()){case"d":return"\xB0";case"p":return"\xB1";case"c":return"\u2205";case"o":return"";case"u":return"";case"%":return"%"}else if(i!==void 0){let s=parseInt(i,16);return isNaN(s)?e:String.fromCharCode(s)}else if(r!==void 0)return w3(r)??e;return e})}var un=class n{constructor(e,t=null){this.fontFetchers=e,this.fonts=[],this.options=Object.create(n.DefaultOptions),t&&Object.assign(this.options,t),this.shapes=new Map,this.stubShapeLoaded=!1,this.stubShape=null}async FetchFonts(e){if(!this.stubShapeLoaded){this.stubShapeLoaded=!0;for(let i of Array.from(this.options.fallbackChar))if(await this.FetchFonts(i)){this.stubShape=this._CreateCharShape(i);break}}let t=!1;for(let i of e){if(i.codePointAt(0)<32)continue;let r=!1;for(let s of this.fonts)if(s.HasChar(i)){r=!0;break}if(!r){if(!this.fontFetchers)return!1;for(;this.fontFetchers.length>0;){let s=this.fontFetchers.shift(),a=await this._FetchFont(s);if(this.fonts.push(a),a.HasChar(i)){r=!0;break}}r||(t=!0)}}return!t}get canRender(){return this.fonts!==null&&this.fonts.length>0}GetLineWidth(e,t){let i=new Yt(t);for(let r of e){let s=this._GetCharShape(r);s&&i.PushChar(r,s)}return i.GetCurrentPosition()}*Render({text:e,startPos:t,endPos:i,rotation:r=0,widthFactor:s=1,hAlign:a=0,vAlign:o=0,color:l,layer:c=null,fontSize:h}){let f=new Yt(h);for(let u of e){let p=this._GetCharShape(u);p&&f.PushChar(u,p)}yield*f.Render(t,i,r,s,a,o,l,c)}*RenderMText({formattedText:e,position:t,fontSize:i,width:r=null,rotation:s=0,direction:a=null,attachment:o,lineSpacing:l=1,color:c,layer:h=null}){i||(i=1);let f=new Fe(i,this._GetCharShape.bind(this));f.FeedText(e),yield*f.Render(t,r,s,a,o,l,c,h)}_GetCharShape(e){let t=this.shapes.get(e);return t||(t=this._CreateCharShape(e),this.shapes.set(e,t),t)}_CreateCharShape(e){for(let t of this.fonts){let i=t.GetCharPath(e);if(i)return new bs(t,i,this.options)}return this.stubShape}async _FetchFont(e){return new Ms(await e())}};un.DefaultOptions=wi;var bs=class{constructor(e,t,i){if(this.font=e,this.advance=t.advance,this.bounds=t.bounds,t.path){let r=t.path.toShapes(!1);this.vertices=[],this.indices=[];for(let s of r){let h=function(f){for(let u of f)l.vertices.push(u)},a=s.extractPoints(i.curveSubdivision);if(!Lt.isClockWise(a.shape)){a.shape=a.shape.reverse();for(let[f,u]of a.holes.entries())Lt.isClockWise(u)&&(a.holes[f]=u.reverse())}let o=Lt.triangulateShape(a.shape,a.holes),l=this,c=this.vertices.length;h(a.shape);for(let f of a.holes)h(f);for(let f of o)for(let u of f)this.indices.push(c+u)}}else this.vertices=null}GetVertices(e,t){return this.vertices.map(i=>i.clone().multiplyScalar(t).add(e))}},Ms=class{constructor(e){this.data=e,this.charMap=new Map;for(let t of Object.values(e.glyphs.glyphs))if(t.unicode!==void 0)for(let i of t.unicodes)this.charMap.set(String.fromCodePoint(i),t);this.scale=100/((this.data.unitsPerEm||2048)*72)}HasChar(e){return this.charMap.has(e)}GetCharPath(e){let t=this.charMap.get(e);if(!t)return null;let i=this.scale,r=new Ai;for(let s of t.path.commands)switch(s.type){case"M":r.moveTo(s.x*i,s.y*i);break;case"L":r.lineTo(s.x*i,s.y*i);break;case"Q":r.quadraticCurveTo(s.x1*i,s.y1*i,s.x*i,s.y*i);break;case"C":r.bezierCurveTo(s.x1*i,s.y1*i,s.x2*i,s.y2*i,s.x*i,s.y*i);break}return{advance:t.advanceWidth*i,path:r,bounds:{xMin:t.xMin*i,xMax:t.xMax*i,yMin:t.yMin*i,yMax:t.yMax*i}}}GetKerning(e,t){let i=this.data.charToGlyphIndex(e);if(i===0)return 0;let r=this.data.charToGlyphIndex(t);return r===0?0:this.data.getKerningValue(i,r)*this.scale}},qe=Object.freeze({LEFT:0,CENTER:1,RIGHT:2,ALIGNED:3,MIDDLE:4,FIT:5}),Ft=Object.freeze({BASELINE:0,BOTTOM:1,MIDDLE:2,TOP:3}),Le=Object.freeze({TOP_LEFT:1,TOP_CENTER:2,TOP_RIGHT:3,MIDDLE_LEFT:4,MIDDLE_CENTER:5,MIDDLE_RIGHT:6,BOTTOM_LEFT:7,BOTTOM_CENTER:8,BOTTOM_RIGHT:9}),C3=4,P3=[[4352,4607],[11904,40959],[40960,42191],[43360,55291],[63744,64255],[65040,65135],[65281,65376],[65504,65510],[131072,262143]],R3=new Set(`,.;:!?%)]}"'\u3001\u3002\uFF0C\uFF0E\uFF1B\uFF1A\uFF01\uFF1F\uFF05\uFF09\uFF3D\uFF5D\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301F\uFF60\u30FC\u301C\uFF5E\u30FB\u2026\u2025\u3005\u3006\u201D\u2019`),I3=new Set("([{$\uFF08\uFF3B\uFF5B\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFF5F\u201C\u2018\uFFE5\uFF04");function bo(n){let e=n.codePointAt(0);for(let[t,i]of P3){if(e<t)return!1;if(e<=i)return!0}return!1}function L3(n,e){return!bo(n)&&!bo(e)?!1:!I3.has(n)&&!R3.has(e)}var Fe=class n{constructor(e,t){this.fontSize=e,this.charShapeProvider=t,this.curParagraph=new n.Paragraph(this),this.paragraphs=[this.curParagraph],this.spaceShape=t(" ")}FeedText(e){function*t(s){for(let a of s)a.type===Pe.EntityType.SCOPE?yield*t(a.content):yield a}let i=null,r=null;for(let s of t(e))switch(s.type){case Pe.EntityType.TEXT:for(let o of s.content)o===" "?this.curParagraph.FeedSpace():this.curParagraph.FeedChar(o);break;case Pe.EntityType.PARAGRAPH:this.curParagraph=new n.Paragraph(this),this.curParagraph.SetAlignment(i),this.curParagraph.SetColor(r),this.paragraphs.push(this.curParagraph);break;case Pe.EntityType.NON_BREAKING_SPACE:this.curParagraph.FeedChar(" ");break;case Pe.EntityType.TAB:this.curParagraph.FeedTab();break;case Pe.EntityType.PARAGRAPH_ALIGNMENT:let a=null;switch(s.alignment){case"l":a=n.Paragraph.Alignment.LEFT;break;case"c":a=n.Paragraph.Alignment.CENTER;break;case"r":a=n.Paragraph.Alignment.RIGHT;break;case"d":a=n.Paragraph.Alignment.JUSTIFY;break;case"j":a=null;break}this.curParagraph.SetAlignment(a),i=a;break;case Pe.EntityType.COLOR:r=s.color,this.curParagraph.SetColor(r);break;case Pe.EntityType.STACK:this.curParagraph.FeedStack(s.numerator,s.denominator,s.divider);break}}*Render(e,t,i,r,s,a,o,l){for(let x of this.paragraphs)x.BuildLines(t);if(t===null||t===0){t=0;for(let x of this.paragraphs){let v=x.GetMaxLineWidth();v>t&&(t=v)}}let c=n.Paragraph.Alignment.LEFT;switch(s){case Le.TOP_CENTER:case Le.MIDDLE_CENTER:case Le.BOTTOM_CENTER:c=n.Paragraph.Alignment.CENTER;break;case Le.TOP_RIGHT:case Le.MIDDLE_RIGHT:case Le.BOTTOM_RIGHT:c=n.Paragraph.Alignment.RIGHT;break}for(let x of this.paragraphs)x.ApplyAlignment(t,c);r!==null&&(i=Math.atan2(r.y,r.x)*180/Math.PI);let h=a*5*this.fontSize/3,f=0;for(let x of this.paragraphs)x.lines===null?f++:f+=x.lines.length;f*=h;let u=new F;switch(s){case Le.TOP_CENTER:u.x=t/2;break;case Le.TOP_RIGHT:u.x=t;break;case Le.MIDDLE_LEFT:u.y=-f/2;break;case Le.MIDDLE_CENTER:u.x=t/2,u.y=-f/2;break;case Le.MIDDLE_RIGHT:u.x=t,u.y=-f/2;break;case Le.BOTTOM_LEFT:u.y=-f;break;case Le.BOTTOM_CENTER:u.x=t/2,u.y=-f;break;case Le.BOTTOM_RIGHT:u.x=t,u.y=-f;break}let p=new G().makeTranslation(-u.x,-u.y);Qe(p,-i*Math.PI/180),Ke(p,e.x,e.y);let g=-this.fontSize;for(let x of this.paragraphs){if(x.lines===null){g-=h;continue}for(let v of x.lines){for(let y=v.startChunkIdx;y<v.startChunkIdx+v.numChunks;y++){let M=x.chunks[y],_=M.position;(y===0||y!==v.startChunkIdx)&&(_+=M.GetSpacingWidth()),yield*M.Render(_,g,p,i,o,l)}g-=h}}}};Fe.Paragraph=class{constructor(n){this.textBox=n,this.chunks=[],this.curChunk=null,this.alignment=null,this.lines=null,this.color=null}FeedChar(n){let e=this.textBox.charShapeProvider(n);e!==null&&((this.curChunk===null||this.curChunk.stack!==null||this.curChunk.isTab||this.curChunk.lastChar!==null&&L3(this.curChunk.lastChar,n))&&this._AddChunk(),this.curChunk.PushChar(n,e))}FeedSpace(){(this.curChunk===null||this.curChunk.lastChar!==null||this.curChunk.stack!==null||this.curChunk.isTab)&&this._AddChunk(),this.curChunk.PushSpace()}FeedTab(){this._AddChunk(),this.curChunk.PushTab()}FeedStack(n,e,t){(this.curChunk===null||this.curChunk.lastChar!==null||this.curChunk.stack!==null||this.curChunk.isTab)&&this._AddChunk(),this.curChunk.PushStack(n,e,t,this.textBox.charShapeProvider)}SetAlignment(n){this.alignment=n}SetColor(n){this.color=n}BuildLines(n){if(this.curChunk===null)return;this.lines=[];let e=0,t=0,i=0,r=()=>{this.lines.push(new Fe.Paragraph.Line(this,e,t-e,i)),e=t,i=0};for(;t<this.chunks.length;t++){let s=this.chunks[t],a=s.GetWidth(i,e===0||t!==e);n!==null&&n!==0&&!s.isTab&&i+a>n&&(t==0&&s.leadingSpaces>0&&(this.lines.push(new Fe.Paragraph.Line(this,e,e,0)),s.leadingSpaces=0,a=s.GetWidth(i,!1)),i!==0&&(r(),a=s.GetWidth(i,!1))),s.position=i,i+=a}e!==t&&i!==0&&r()}GetMaxLineWidth(){if(this.lines===null)return 0;let n=0;for(let e of this.lines)e.width>n&&(n=e.width);return n}ApplyAlignment(n,e){if(this.lines)for(let t of this.lines)t.ApplyAlignment(n,e)}_AddChunk(){this.curChunk=new Fe.Paragraph.Chunk(this,this.textBox.fontSize,this.color,this.curChunk),this.chunks.push(this.curChunk)}};Fe.Paragraph.Alignment=Object.freeze({LEFT:0,CENTER:1,RIGHT:2,JUSTIFY:3});Fe.Paragraph.Chunk=class{constructor(n,e,t,i){this.paragraph=n,this.fontSize=e,this.color=t,this.prevChunk=i,this.lastChar=null,this.lastShape=null,this.leadingSpaces=0,this.spaceStartKerning=null,this.spaceEndKerning=null,this.block=null,this.stack=null,this.position=null,this.isTab=!1}PushSpace(){if(this.block||this.stack||this.isTab)throw new Error("Illegal operation");this.leadingSpaces++}PushTab(){if(this.block||this.stack||this.leadingSpaces)throw new Error("Illegal operation");this.isTab=!0}PushChar(n,e){this.spaceStartKerning===null&&(this.leadingSpaces===0?(this.spaceStartKerning=0,this.spaceEndKerning=0):(this.prevChunk&&this.prevChunk.lastShape&&this.prevChunk.fontSize===this.fontSize&&this.prevChunk.lastShape.font===this.paragraph.textBox.spaceShape.font?this.spaceStartKerning=this.prevChunk.lastShape.font.GetKerning(this.prevChunk.lastChar," "):this.spaceStartKerning=0,e.font===this.paragraph.textBox.spaceShape.font?this.spaceEndKerning=e.font.GetKerning(" ",n):this.spaceEndKerning=0)),this.block===null&&(this.block=new Yt(this.fontSize,this.color)),this.block.PushChar(n,e),this.lastChar=n,this.lastShape=e}PushStack(n,e,t,i){this.spaceStartKerning===null&&(this.spaceStartKerning=0,this.spaceEndKerning=0),this.stack=new fn(this.fontSize,this.color,t),this.stack.Fill(n,e,i)}GetSpacingWidth(){return(this.leadingSpaces*this.paragraph.textBox.spaceShape.advance+this.spaceStartKerning+this.spaceEndKerning)*this.fontSize}GetWidth(n,e){if(this.isTab){let i=C3*this.paragraph.textBox.fontSize;return i>0?(Math.floor(n/i)+1)*i-n:0}let t;if(this.stack!==null)t=this.stack.GetWidth();else if(this.block!==null)t=this.block.GetCurrentPosition();else return 0;return e&&(t+=this.GetSpacingWidth()),t}*Render(n,e,t,i,r,s){if(this.stack!==null){yield*this.stack.Render(n,e,t,i,r,s);return}if(this.block===null)return;let a=new F(n,e);a.applyMatrix3(t),yield*this.block.RenderAtPenOrigin(a,i,r,s)}};Fe.Paragraph.Line=class{constructor(n,e,t,i){this.paragraph=n,this.startChunkIdx=e,this.numChunks=t,this.width=i}ApplyAlignment(n,e){switch(this.paragraph.alignment??e){case Fe.Paragraph.Alignment.LEFT:break;case Fe.Paragraph.Alignment.CENTER:{let i=(n-this.width)/2;this.ForEachChunk(r=>r.position+=i);break}case Fe.Paragraph.Alignment.RIGHT:{let i=n-this.width;this.ForEachChunk(r=>r.position+=i);break}case Fe.Paragraph.Alignment.JUSTIFY:{let i=n-this.width;if(i<=0||this.numChunks===1)break;let r=i/(this.numChunks-1),s=0;this.ForEachChunk(a=>{a.position+=s,s+=r});break}default:throw new Error("Unhandled alignment: "+this.paragraph.alignment)}}ForEachChunk(n){for(let e=0;e<this.numChunks;e++)n(this.paragraph.chunks[this.startChunkIdx+e])}};var Yt=class{constructor(e,t){this.fontSize=e,this.color=t,this.glyphs=[],this.bounds=null,this.curX=0,this.prevChar=null,this.prevFont=null}PushChar(e,t){let i;this.prevChar!==null&&this.prevFont===t.font?i=this.prevFont.GetKerning(this.prevChar,e):i=0;let r=this.curX+i*this.fontSize,s;if(t.vertices&&t.vertices.length>0){s=t.GetVertices({x:r,y:0},this.fontSize);let a=r+t.bounds.xMin*this.fontSize,o=r+t.bounds.xMax*this.fontSize,l=t.bounds.yMin*this.fontSize,c=t.bounds.yMax*this.fontSize;this.bounds===null?this.bounds={xMin:a,xMax:o,yMin:l,yMax:c}:(a<this.bounds.xMin&&(this.bounds.xMin=a),l<this.bounds.yMin&&(this.bounds.yMin=l),o>this.bounds.xMax&&(this.bounds.xMax=o),c>this.bounds.yMax&&(this.bounds.yMax=c))}else s=null;this.curX=r+t.advance*this.fontSize,this.glyphs.push({shape:t,vertices:s}),this.prevChar=e,this.prevFont=t.font}GetCurrentPosition(){return this.curX}*Render(e,t,i,r,s,a,o,l){if(this.bounds===null)return;t=t??e,i?i*=-Math.PI/180:i=0,r=r??1,s=s??qe.LEFT,a=a??Ft.BASELINE;let c=new F,h=new F(r,1),f=s===qe.LEFT&&a===Ft.BASELINE||s===qe.FIT||s===qe.ALIGNED?new F(e.x,e.y):new F(t.x,t.y),u=()=>{let x=t.x-e.x;return x<Number.MIN_VALUE*2?r:x/(this.bounds.xMax-this.bounds.xMin)},p=()=>-Math.atan2(t.y-e.y,t.x-e.x);switch(s){case qe.LEFT:c.x=this.bounds.xMin;break;case qe.CENTER:c.x=(this.bounds.xMax-this.bounds.xMin)/2;break;case qe.RIGHT:c.x=this.bounds.xMax;break;case qe.MIDDLE:c.x=(this.bounds.xMax-this.bounds.xMin)/2,c.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case qe.ALIGNED:{let x=u();h.x=x,h.y=x,i=p();break}case qe.FIT:h.x=u(),i=p();break;default:console.warn("Unrecognized hAlign value: "+s)}switch(a){case Ft.BASELINE:break;case Ft.BOTTOM:c.y=this.bounds.yMin;break;case Ft.MIDDLE:c.y=(this.bounds.yMax-this.bounds.yMin)/2;break;case Ft.TOP:c.y=this.bounds.yMax;break;default:console.warn("Unrecognized vAlign value: "+a)}let g=new G().makeTranslation(-c.x,-c.y);st(g,h.x,h.y),Qe(g,i),Ke(g,f.x,f.y),yield*this._RenderGlyphs(g,o,l)}*RenderAtPenOrigin(e,t,i,r){if(this.bounds===null)return;let s=new G;Qe(s,t?-t*Math.PI/180:0),Ke(s,e.x,e.y),yield*this._RenderGlyphs(s,i,r)}*_RenderGlyphs(e,t,i){for(let r of this.glyphs)if(r.vertices){for(let s of r.vertices)s.applyMatrix3(e);yield new z({type:z.Type.TRIANGLES,vertices:r.vertices,indices:r.shape.indices,layer:i,color:this.color??t})}}},fn=class n{constructor(e,t,i){this.fontSize=e,this.color=t,this.divider=i,this.partSize=e*n.SIZE_RATIO,this.top=new Yt(this.partSize,t),this.bottom=new Yt(this.partSize,t)}Fill(e,t,i){for(let[r,s]of[[e,this.top],[t,this.bottom]])for(let a of r){let o=i(a);o!==null&&s.PushChar(a,o)}}GetWidth(){let e=this.top.GetCurrentPosition(),t=this.bottom.GetCurrentPosition();return this.divider==="#"?e+t:Math.max(e,t)}*Render(e,t,i,r,s,a){let o=this.partSize,l=this.GetWidth(),c=this.top.GetCurrentPosition(),h=this.bottom.GetCurrentPosition(),f=o*(2*n.HEIGHT_SCALE-1),u=t+this.fontSize/2,p=u-(f+o)/2,g=p+f,x,v;this.divider==="#"?(x=e,v=e+c):(x=e+(l-c)/2,v=e+(l-h)/2);let y=(_,S)=>new F(_,S).applyMatrix3(i);if(yield*this.top.RenderAtPenOrigin(y(x,g),r,s,a),yield*this.bottom.RenderAtPenOrigin(y(v,p),r,s,a),this.divider==="^")return;let M;if(this.divider==="/")M=[y(e,u),y(e+l,u)];else{let _=o/2;M=[y(e+c-_,p),y(e+c+_,g+o)]}yield new z({type:z.Type.LINE_SEGMENTS,vertices:M,layer:a,color:this.color??s})}};fn.SIZE_RATIO=.7;fn.HEIGHT_SCALE=1.2;function je(){}je.prototype.clear=function(){this._root=null,this.size=0};je.prototype.find=function(n){for(var e=this._root;e!==null;){var t=this._comparator(n,e.data);if(t===0)return e.data;e=e.get_child(t>0)}return null};je.prototype.findIter=function(n){for(var e=this._root,t=this.iterator();e!==null;){var i=this._comparator(n,e.data);if(i===0)return t._cursor=e,t;t._ancestors.push(e),e=e.get_child(i>0)}return null};je.prototype.lowerBound=function(n){for(var e=this._root,t=this.iterator(),i=this._comparator;e!==null;){var r=i(n,e.data);if(r===0)return t._cursor=e,t;t._ancestors.push(e),e=e.get_child(r>0)}for(var s=t._ancestors.length-1;s>=0;--s)if(e=t._ancestors[s],i(n,e.data)<0)return t._cursor=e,t._ancestors.length=s,t;return t._ancestors.length=0,t};je.prototype.upperBound=function(n){for(var e=this.lowerBound(n),t=this._comparator;e.data()!==null&&t(e.data(),n)===0;)e.next();return e};je.prototype.min=function(){var n=this._root;if(n===null)return null;for(;n.left!==null;)n=n.left;return n.data};je.prototype.max=function(){var n=this._root;if(n===null)return null;for(;n.right!==null;)n=n.right;return n.data};je.prototype.iterator=function(){return new S0(this)};je.prototype.each=function(n){for(var e=this.iterator(),t;(t=e.next())!==null;)n(t)};je.prototype.reach=function(n){for(var e=this.iterator(),t;(t=e.prev())!==null;)n(t)};function S0(n){this._tree=n,this._ancestors=[],this._cursor=null}S0.prototype.data=function(){return this._cursor!==null?this._cursor.data:null};S0.prototype.next=function(){if(this._cursor===null){var n=this._tree._root;n!==null&&this._minNode(n)}else if(this._cursor.right===null){var e;do if(e=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.right===e)}else this._ancestors.push(this._cursor),this._minNode(this._cursor.right);return this._cursor!==null?this._cursor.data:null};S0.prototype.prev=function(){if(this._cursor===null){var n=this._tree._root;n!==null&&this._maxNode(n)}else if(this._cursor.left===null){var e;do if(e=this._cursor,this._ancestors.length)this._cursor=this._ancestors.pop();else{this._cursor=null;break}while(this._cursor.left===e)}else this._ancestors.push(this._cursor),this._maxNode(this._cursor.left);return this._cursor!==null?this._cursor.data:null};S0.prototype._minNode=function(n){for(;n.left!==null;)this._ancestors.push(n),n=n.left;this._cursor=n};S0.prototype._maxNode=function(n){for(;n.right!==null;)this._ancestors.push(n),n=n.right;this._cursor=n};function _0(n){this.data=n,this.left=null,this.right=null,this.red=!0}_0.prototype.get_child=function(n){return n?this.right:this.left};_0.prototype.set_child=function(n,e){n?this.right=e:this.left=e};function dn(n){this._root=null,this._comparator=n,this.size=0}dn.prototype=new je;dn.prototype.insert=function(n){var e=!1;if(this._root===null)this._root=new _0(n),e=!0,this.size++;else{var t=new _0(void 0),i=0,r=0,s=null,a=t,o=null,l=this._root;for(a.right=this._root;;){if(l===null?(l=new _0(n),o.set_child(i,l),e=!0,this.size++):Ye(l.left)&&Ye(l.right)&&(l.red=!0,l.left.red=!1,l.right.red=!1),Ye(l)&&Ye(o)){var c=a.right===s;l===o.get_child(r)?a.set_child(c,pn(s,!r)):a.set_child(c,Mo(s,!r))}var h=this._comparator(l.data,n);if(h===0)break;r=i,i=h<0,s!==null&&(a=s),s=o,o=l,l=l.get_child(i)}this._root=t.right}return this._root.red=!1,e};dn.prototype.remove=function(n){if(this._root===null)return!1;var e=new _0(void 0),t=e;t.right=this._root;for(var i=null,r=null,s=null,a=1;t.get_child(a)!==null;){var o=a;r=i,i=t,t=t.get_child(a);var l=this._comparator(n,t.data);if(a=l>0,l===0&&(s=t),!Ye(t)&&!Ye(t.get_child(a))){if(Ye(t.get_child(!a))){var c=pn(t,a);i.set_child(o,c),i=c}else if(!Ye(t.get_child(!a))){var h=i.get_child(!o);if(h!==null)if(!Ye(h.get_child(!o))&&!Ye(h.get_child(o)))i.red=!1,h.red=!0,t.red=!0;else{var f=r.right===i;Ye(h.get_child(o))?r.set_child(f,Mo(i,o)):Ye(h.get_child(!o))&&r.set_child(f,pn(i,o));var u=r.get_child(f);u.red=!0,t.red=!0,u.left.red=!1,u.right.red=!1}}}}return s!==null&&(s.data=t.data,i.set_child(i.right===t,t.get_child(t.left===null)),this.size--),this._root=e.right,this._root!==null&&(this._root.red=!1),s!==null};function Ye(n){return n!==null&&n.red}function pn(n,e){var t=n.get_child(!e);return n.set_child(!e,t.get_child(e)),t.set_child(e,n),n.red=!0,t.red=!1,t}function Mo(n,e){return n.set_child(!e,pn(n.get_child(!e),!e)),pn(n,e)}var Es=class{constructor(){this.lines=[],this.triangles=[],this.texts=[]}AddLine(e,t,i=null){this.lines.push({start:e,end:t,color:i})}AddTriangles(e,t,i=null){this.triangles.push({vertices:e,indices:t,color:i})}AddText(e,t,i,r,s){this.texts.push({text:e,size:t,angle:i,color:r,position:s})}},To={vertices:[new F(0,0),new F(1,-.25),new F(1,.25)],indices:[0,1,2]},gt=Object.freeze({ARROW:0,TICK:1,NONE:2});function Ts(n){if(typeof n!="string")return gt.ARROW;switch(n.toUpperCase().replace(/^_/,"")){case"ARCHTICK":case"OBLIQUE":return gt.TICK;case"NONE":return gt.NONE;default:return gt.ARROW}}var Ci=class{constructor(e,t,i){this.params=e,this.styleResolver=t,this.textWidthCalculator=i,this.isValid=!0,this._CalculateGeometry()}IsValid(){return this.isValid}GetTexts(){return[this._GetText()]}GenerateLayout(){let e=new Es,t=this.d1.distanceTo(this.d2),i=this.styleResolver("DIMCLRD"),r=this.styleResolver("DIMSCALE")??1;r==0&&(r=1);let s=this._GetText(),a=(this.styleResolver("DIMTXT")??1)*r,o=this.textWidthCalculator(s,a),l=this.styleResolver("DIMCLRT"),c=(this.styleResolver("DIMASZ")??1)*r,h=(this.styleResolver("DIMTSZ")??0)*r,f=this.styleResolver("DIMSAH")?[Ts(this.styleResolver("DIMBLK1")),Ts(this.styleResolver("DIMBLK2"))]:Array(2).fill(Ts(this.styleResolver("DIMBLK"))),u=this.params.textAnchor,p=!1,g=this.d1.clone(),x=(this.styleResolver("DIMDLE")??0)*r;x!=0&&g.add(this.vDim.clone().multiplyScalar(-x));let v=this.d2.clone();x!=0&&v.add(this.vDim.clone().multiplyScalar(x)),e.AddLine(g,v,i),t<c*2&&(p=!0),u||(u=this.vDim.clone().multiplyScalar(this.d1.distanceTo(this.d2)/2).add(this.d1).add(this.vDimNorm.clone().multiplyScalar(a*.75)));let y=this.vDimNorm.angle()*180/Math.PI-90+(this.params.textRotation??0);e.AddText(s,a,y,l,u);let M=this.styleResolver("DIMCLRE"),_=(this.styleResolver("DIMEXO")??0)*r,S=(this.styleResolver("DIMEXE")??0)*r,A=(w,C)=>{let P=C.clone().sub(w);if(P.length()==0)return;P.normalize();let b=w.clone();_!=0&&b.add(P.clone().multiplyScalar(_));let R=C.clone();S!=0&&R.add(P.clone().multiplyScalar(S)),e.AddLine(b,R,M)};(this.styleResolver("DIMSE1")??0)||A(this.params.p1,this.d1),(this.styleResolver("DIMSE2")??0)||A(this.params.p2,this.d2);for(let w=0;w<2;w++){let C=w==0?this.d1:this.d2,P=w==1;p&&(P=!P);let E=h>0?gt.TICK:f[w];if(E==gt.NONE)continue;let b=E==gt.TICK&&h>0?h:c,R=new G().identity();st(R,b,b),E!=gt.TICK&&P&&st(R,-1,1);let B=-this.vDim.angle();Qe(R,B),Ke(R,C.x,C.y),E==gt.TICK?this._CreateTick(e,R,i):this._CreateArrowShape(e,R,i)}return e}_CreateArrowShape(e,t,i){let r=[];for(let s of To.vertices)r.push(s.clone().applyMatrix3(t));e.AddTriangles(r,To.indices,i)}_CreateTick(e,t,i){e.AddLine(new F(.5,.5).applyMatrix3(t),new F(-.5,-.5).applyMatrix3(t),i)}_CalculateGeometry(){if(this.vBase=this.params.p2.clone().sub(this.params.p1).normalize(),this.params.isAligned)this.vDim=this.vBase;else{let e=(this.params.angle??0)*Math.PI/180;this.vDim=new F(Math.cos(e),Math.sin(e))}this.d1=this.vDim.clone().multiplyScalar(this.params.p1.clone().sub(this.params.anchor).dot(this.vDim)).add(this.params.anchor),this.d2=this.vDim.clone().multiplyScalar(this.params.p2.clone().sub(this.params.anchor).dot(this.vDim)).add(this.params.anchor),this.d1.distanceTo(this.d2)==0&&(this.isValid=!1),this.vDim.copy(this.d2).sub(this.d1).normalize(),this.vDim.y<-this.vDim.x?this.vDimNorm=new F(this.vDim.y,-this.vDim.x):this.vDimNorm=new F(-this.vDim.y,this.vDim.x)}_GetText(){if(this.params.text==" ")return"";if((this.params.text??"")!=""&&this.params.text.indexOf("<>")==-1)return at(this.params.text);let e=this.d2.distanceTo(this.d1);e*=this.styleResolver("DIMLFAC")??1;let t=this.styleResolver("DIMRND")??0;if(t>0){let c=Math.round(e/t);e=t*c}let i=this.styleResolver("DIMZIN")??0,r=(i&4)!=0,s=(i&8)!=0,a=e.toFixed(this.styleResolver("DIMDEC")??2);s&&(a=a.replace(/.0+$/,"")),r&&(a=a.replace(/^0+/,"")),a.startsWith(".")?a="0"+a:a==""&&(a="0"),a.endsWith(".")&&(a=a.substring(0,a.length-1));let o=this.styleResolver("DIMDSEP")??".";isNaN(o)||(o=String.fromCharCode(o)),o!="."&&(a=a.replace(".",o));let l=this.styleResolver("DIMPOST")??"";return l!=""&&(l.indexOf("<>")!=-1?a=l.replaceAll("<>",a):a+=l),(this.params.text??"")!=""&&(a=this.params.text.replaceAll("<>",a)),at(a)}};var mn=Object.freeze({ODD_PARITY:0,OUTERMOST:1,THROUGH_ENTIRE_AREA:2}),F3=1e-6,As=1e-6;function Eo(n,e){return n.intersection[2]>0&&e.intersection[2]>0||n.intersection[2]<0&&e.intersection[2]<0}var ws=class{constructor(e,t,i,r){this.style=t,this.line=i,this.lineDir=i[1].clone().sub(i[0]).normalize(),this.endpointMargin=r,this.loops=[];for(let s=0;s<e.length;s++){let a=e[s],o=[];for(let l=0;l<a.length;l++)o.push({idx:l,start:a[l],end:a[l==a.length-1?0:l+1],loopIdx:s});this.loops.push(o)}}Calculate(){return this._ProcessEdges(),this._CreateNodes(),this.nodes.sort((e,t)=>e.intersection[0]-t.intersection[0]),this.style==mn.THROUGH_ENTIRE_AREA?this._GenerateThroughAllSegments():this._GenerateOddParitySegments()}_ProcessEdges(){for(let e of this.loops)for(let t of e){let i=t.end.clone().sub(t.start),r=i.length();if(t.isZero=r<=this.endpointMargin,t.isZero)continue;t.endpointMargin=this.endpointMargin/r,i.divideScalar(r);let s=i.cross(this.lineDir);t.isParallel=Math.abs(s)<=1e-6,!t.isParallel&&(t.intersection=to(this.line[0],this.line[1],t.start,t.end,!0),t.intersection||(t.isParallel=!0))}}_CreateNodes(){this.nodes=[];for(let e of this.loops)for(let t of e){if(t.isZero||t.isParallel||t.isProcessed||!t.intersection||t.intersection[1]<-t.endpointMargin||t.intersection[1]>1+t.endpointMargin)continue;let i=t.intersection[1]<=t.endpointMargin;if(i||t.intersection[1]>=1-t.endpointMargin){let[r,s]=this._GetConnectedEdge(t,i);if(!r)continue;if(t.isProcessed=!0,r.isProcessed=!0,s)Eo(t,r)&&(t.toggle=!0,this.nodes.push(t));else{if(t.intersection[0]>r.intersection[0]){let a=r;r=t,t=a}t.suppress=!0,r.unsuppress=!0,this.nodes.push(t),Eo(t,r)&&(r.toggle=!0),this.nodes.push(r)}}else t.isProcessed=!0,t.toggle=!0,this.nodes.push(t)}}_GetConnectedEdge(e,t){let i=this.loops[e.loopIdx],r=e.idx,s=!0;do{t?r==0?r=i.length-1:r--:r==i.length-1?r=0:r++;let a=i[r];if(a.isZero||a.isParallel)s=!1;else return[a,s]}while(r!=e.idx);return[null,!1]}_GenerateOddParitySegments(){let e=[],t=!1,i=0,r=null;for(let s of this.nodes)s.suppress&&i++,s.unsuppress&&i--,s.toggle&&(t=!t),i==0&&t&&(s.unsuppress||s.toggle)?r=s:(i||!t)&&r&&(s.intersection[0]-r.intersection[0]>Number.EPSILON&&e.push([r.intersection[0],s.intersection[0]]),r=null);return e}_GenerateThroughAllSegments(){let e=[],t=0,i=null,r=new Array(this.loops.length).fill(0);function s(){for(let a of r)if(a!=0)return!1;return!0}for(let a of this.nodes){a.suppress&&t++,a.unsuppress&&t--;let o=s();a.toggle&&(a.intersection[2]>0?r[a.loopIdx]++:r[a.loopIdx]--),t==0&&!s()&&(a.unsuppress||o)?i=a:(t||s())&&i&&(a.intersection[0]-i.intersection[0]>Number.EPSILON&&e.push([i.intersection[0],a.intersection[0]]),i=null)}return e}};function D3(n,e){let t=!1;for(let i=0,r=e.length-1;i<e.length;r=i++){let s=e[i],a=e[r];s.y>n.y!=a.y>n.y&&n.x<(a.x-s.x)*(n.y-s.y)/(a.y-s.y)+s.x&&(t=!t)}return t}function N3(n,e){for(let t=0,i=e.length-1;t<e.length;i=t++){let r=e[i],s=e[t],a=s.x-r.x,o=s.y-r.y,l=a*a+o*o;if(l==0||Math.abs(a*(n.y-r.y)-o*(n.x-r.x))>As*l)continue;let c=((n.x-r.x)*a+(n.y-r.y)*o)/l;if(c>=-As&&c<=1+As)return!0}return!1}function O3(n,e){for(let t=0,i=n.length-1;t<n.length;i=t++){let r=n[i],s=n[t],a=new F((r.x+s.x)/2,(r.y+s.y)/2);if(!N3(a,e))return D3(a,e)}return!1}var Pi=class{constructor(e,t){Un(this,"boundaryLoops");Un(this,"style");Un(this,"_endpointMargin");this.boundaryLoops=e,this.style=t}ClipLine(e){return new ws(this.boundaryLoops,this.style,e,this._GetEndpointMargin()).Calculate()}_GetEndpointMargin(){if(this._endpointMargin===void 0){let e=new u0;for(let t of this.boundaryLoops)for(let i of t)e.expandByPoint(i);this._endpointMargin=F3*e.getSize(new F).length()}return this._endpointMargin}GetSolidRegions(){let e=this.style==mn.THROUGH_ENTIRE_AREA,t=this.boundaryLoops.filter(a=>a.length>=3),i=[];for(let a=0;a<t.length;a++){let o=[];for(let l=0;l<t.length;l++)a!=l&&O3(t[a],t[l])&&o.push(l);i.push(o)}let r=[],s=[];for(let a=0;a<t.length;a++){if(!(e?i[a].length==0:i[a].length%2==0)){s.push(-1);continue}s.push(r.length),r.push({contour:t[a],holes:[]})}if(e)return r;for(let a=0;a<t.length;a++){if(i[a].length%2==0)continue;let o=i[a][0];for(let l of i[a])i[l].length>i[o].length&&(o=l);s[o]>=0&&r[s[o]].holes.push(t[a])}return r}GetPatternTransform({seedPoint:e,angle:t,scale:i}){let r=new G().makeTranslation(-e.x,-e.y);return t&&Qe(r,t),(i??1)!=1&&st(r,1/i,1/i),r}GetLineTransform({patTransform:e,basePoint:t,angle:i}){let r=e.clone();return t&&Ke(r,-t.x,-t.y),i&&Qe(r,i),r}GetBoundingBox(e){let t=new u0;for(let i of this.boundaryLoops)for(let r of i)t.expandByPoint(r.clone().applyMatrix3(e));return t}};var U3=1e-6,d=class n{constructor(e,t=null,i=!0){this.lines=e,this.name=t,this.offsetInLineSpace=i}get isQcadDefault(){if(this.lines.length!=1)return!1;let e=this.lines[0];return!(e.dashes||Math.abs(e.angle-Math.PI/4)>1e-13)}ContradictsNamedPattern(e){if(this.lines.length!=e.lines.length)return!0;let t=a=>{let o=a%Math.PI;return o<0?o+Math.PI:o},i=a=>{let o=t(a.lines[0].angle??0);return a.lines.map(l=>t((l.angle??0)-o))},r=i(this),s=i(e);for(let a=0;a<this.lines.length;a++){if(Math.abs(r[a]-s[a])>U3)return!0;let o=this.lines[a].dashes??[],l=e.lines[a].dashes??[];if(o.length!=l.length)return!0;for(let c=0;c<o.length;c++)if(Math.sign(o[c])!=Math.sign(l[c]))return!0}return!1}static ParsePatFile(e){let t=e.split(/\r?\n/);if(t.length<2)throw new Error("Invalid .pat file content");let i=null,r=[];for(let s of t){if(s=s.trim(),s==""||s.startsWith(";"))continue;if(i===null){let c=s.match(/\*([^,]+)(?:,.*)?/);if(!c)throw new Error("Bad header for .pat file content");i=c[1];continue}let a=s.indexOf(";");a!=-1&&(s=s.substring(0,a).trim());let o=s.split(/\s*,\s*/);o[o.length-1]==""&&(o.length=o.length-1),o=o.map(c=>{let h=parseFloat(c);if(isNaN(h))throw new Error("Failed to parse number in .pat file: "+c);return h});let l={angle:o[0]*Math.PI/180,base:new F(o[1],o[2]),offset:new F(o[3],o[4])};o.length>5&&(l.dashes=o.slice(5)),r.push(l)}return new n(r,i)}},Ao=new Map,wo=new Map;function m(n,e=!0){if(!n.name)throw new Error("Anonymous pattern cannot be registered");let t=n.name.toUpperCase(),i=e?Ao:wo;if(i.has(t)){console.warn(`Pattern with name ${t} is already registered`);return}i.set(t,n)}function Cs(n,e=!0){return(e?Ao:wo).get(n.toUpperCase())??null}m(d.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`));m(d.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`));m(d.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`));m(d.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`));m(d.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`));m(d.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`));m(d.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,6.985, 5.08,-1.905
90, 0,0, 0,6.985, 5.08,-1.905
`));m(d.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,3.175
`));m(d.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,9.525
45, 4.49013,0, 0,9.525
`));m(d.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 3.175,-1.5875
`));m(d.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,19.05
45, 4.49013,0, 0,19.05
45, 8.98026,0, 0,19.05
45, 13.4704,0, 0,19.05
`));m(d.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,6.35
45, 4.49013,0, 0,6.35, 7.9375,-1.5875,0,-1.5875
`));m(d.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, 5.55625,3.175, 7.9375,-1.5875,0,-1.5875
`));m(d.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,3.175
135, 0,0, 0,3.175
`));m(d.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,3.175
135, 0,0, 6.35,3.175, 7.9375,-4.7625
`));m(d.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,203.2
90, 0,0, 203.2,203.2, 203.2,-203.2
`));m(d.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 203.2,203.2, 396.875,-9.525
0, -203.2,9.525, 203.2,203.2, 396.875,-9.525
90, 0,0, 203.2,203.2, -212.725,193.675
90, -9.525,0, 203.2,203.2, -212.725,193.675
`));m(d.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,203.2
90, 0,0, 203.2,101.6, 203.2,-203.2
`));m(d.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,135.484, 193.675,-9.525
0, 0,57.15, 0,135.484, 193.675,-9.525
0, 50.8,67.7418, 0,135.484, 92.075,-9.525
0, 50.8,124.892, 0,135.484, 92.075,-9.525
90, 0,0, 0,203.2, 57.15,-78.3336
90, -9.525,0, 0,203.2, 57.15,-78.3336
90, 50.8,67.7418, 0,101.6, 57.15,-78.3336
90, 41.275,67.7418, 0,101.6, 57.15,-78.3336
`));m(d.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,67.7418
90, 0,0, 67.7418,101.6, 67.7418,-67.7418
`));m(d.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
243.434949,7.62,20.32,227.18450626,113.5922544,5.67961272,-562.2816542
90,7.62,15.24,0,254,5.08,-248.92
0,5.08,15.24,0,254,2.54,-251.46
315,2.54,2.54,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,7.62,5.08,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,5.08,0,227.18450626,113.5922544,5.67961272,-562.2816542
45,50.8,10.16,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,58.42,7.62,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,55.88,15.24,562.25296744,80.32185358,8.03218612,-795.18633952
315,58.42,22.86,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,63.5,25.4,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,60.96,20.32,227.18450626,113.5922544,5.67961272,-562.2816542
270,104.14,15.24,0,254,5.08,-248.92
45,99.06,10.16,179.60512212,179.60512212,7.18420458,-352.02603966
180,104.14,10.16,0,254,5.08,-248.92
333.434949,99.06,5.08,227.18450626,113.5922544,5.67961272,-562.2816542
225,101.6,7.62,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,104.14,2.54,340.77676066,113.5922544,5.67961272,-562.2816542
198.434949,160.02,20.32,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,157.48,15.24,227.18450626,113.5922544,5.67961272,-562.2816542
333.434949,152.4,17.78,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,144.78,0,340.77676066,113.5922544,5.67961272,-562.2816542
251.565051,147.32,7.62,240.9655582,80.32185358,8.03218612,-795.18633952
116.565051,149.86,2.54,340.77676066,113.5922544,5.67961272,-562.2816542
45,170.18,2.54,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,177.8,0,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,175.26,7.62,562.25296744,80.32185358,8.03218612,-795.18633952
315,76.2,71.12,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,81.28,73.66,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,78.74,68.58,227.18450626,113.5922544,5.67961272,-562.2816542
45,27.94,20.32,179.60512212,179.60512212,7.18420458,-352.02603966
180,33.02,20.32,0,254,5.08,-248.92
270,33.02,25.4,0,254,5.08,-248.92
225,45.72,60.96,179.60512212,179.60512212,3.59210356,-355.61814322
270,45.72,66.04,0,254,5.08,-248.92
71.565051,43.18,58.42,240.9655582,80.32185358,8.03218612,-795.18633952
198.434949,25.4,53.34,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,22.86,48.26,227.18450626,113.5922544,5.67961272,-562.2816542
333.434949,17.78,50.8,227.18450626,113.5922544,5.67961272,-562.2816542
0,88.9,55.88,0,254,5.08,-248.92
225,93.98,60.96,179.60512212,179.60512212,7.18420458,-352.02603966
90,93.98,55.88,0,254,5.08,-248.92
315,114.3,43.18,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,119.38,45.72,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,116.84,40.64,227.18450626,113.5922544,5.67961272,-562.2816542
315,139.7,53.34,179.60512212,179.60512212,3.59210356,-355.61814322
270,139.7,58.42,0,254,5.08,-248.92
108.434949,142.24,50.8,562.25296744,80.32185358,8.03218612,-795.18633952
206.565051,175.26,68.58,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,172.72,63.5,227.18450626,113.5922544,5.67961272,-562.2816542
315,170.18,66.04,179.60512212,179.60512212,3.59210356,-355.61814322
333.434949,185.42,48.26,227.18450626,113.5922544,5.67961272,-562.2816542
225,187.96,50.8,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,190.5,45.72,340.77676066,113.5922544,5.67961272,-562.2816542
26.565051,208.28,38.1,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,213.36,35.56,227.18450626,113.5922544,5.67961272,-562.2816542
270,213.36,40.64,0,254,5.08,-248.92
180,236.22,43.18,0,254,2.54,-251.46
270,236.22,45.72,0,254,2.54,-251.46
45,233.68,43.18,179.60512212,179.60512212,3.59210356,-355.61814322
153.434949,236.22,60.96,227.18450626,113.5922544,5.67961272,-562.2816542
270,236.22,68.58,0,254,7.62,-246.38
45,231.14,63.5,179.60512212,179.60512212,7.18420458,-352.02603966
206.565051,231.14,88.9,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,228.6,83.82,227.18450626,113.5922544,5.67961272,-562.2816542
315,226.06,86.36,179.60512212,179.60512212,3.59210356,-355.61814322
180,165.1,73.66,0,254,5.08,-248.92
270,165.1,81.28,0,254,7.62,-246.38
56.309932,160.02,73.66,563.57539812,70.4469254,9.15809954,-906.65192304
198.434949,137.16,96.52,562.25296744,80.32185358,8.03218612,-795.18633952
71.565051,134.62,88.9,240.9655582,80.32185358,8.03218612,-795.18633952
315,129.54,93.98,179.60512212,179.60512212,7.18420458,-352.02603966
180,96.52,83.82,0,254,7.62,-246.38
270,96.52,91.44,0,254,7.62,-246.38
45,88.9,83.82,179.60512212,179.60512212,10.77630814,-348.43393864
225,83.82,109.22,179.60512212,179.60512212,7.18420458,-352.02603966
90,83.82,104.14,0,254,5.08,-248.92
0,78.74,104.14,0,254,5.08,-248.92
206.565051,40.64,99.06,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,38.1,93.98,227.18450626,113.5922544,5.67961272,-562.2816542
315,35.56,96.52,179.60512212,179.60512212,3.59210356,-355.61814322
108.434949,25.4,93.98,562.25296744,80.32185358,8.03218612,-795.18633952
341.565051,17.78,96.52,240.9655582,80.32185358,8.03218612,-795.18633952
225,22.86,101.6,179.60512212,179.60512212,7.18420458,-352.02603966
270,38.1,114.3,0,254,5.08,-248.92
45,33.02,109.22,179.60512212,179.60512212,7.18420458,-352.02603966
180,38.1,109.22,0,254,5.08,-248.92
315,91.44,119.38,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,96.52,121.92,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,93.98,116.84,227.18450626,113.5922544,5.67961272,-562.2816542
0,129.54,101.6,0,254,2.54,-251.46
225,132.08,104.14,179.60512212,179.60512212,3.59210356,-355.61814322
90,132.08,101.6,0,254,2.54,-251.46
0,175.26,96.52,0,254,5.08,-248.92
243.434949,177.8,101.6,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,180.34,96.52,340.77676066,113.5922544,5.67961272,-562.2816542
26.565051,185.42,114.3,340.77676066,113.5922544,5.67961272,-562.2816542
116.565051,187.96,109.22,340.77676066,113.5922544,5.67961272,-562.2816542
251.565051,190.5,116.84,240.9655582,80.32185358,8.03218612,-795.18633952
63.434949,223.52,91.44,227.18450626,113.5922544,5.67961272,-562.2816542
180,228.6,91.44,0,254,5.08,-248.92
296.565051,226.06,96.52,340.77676066,113.5922544,5.67961272,-562.2816542
180,228.6,137.16,0,254,7.62,-246.38
270,228.6,144.78,0,254,7.62,-246.38
45,220.98,137.16,179.60512212,179.60512212,10.77630814,-348.43393864
180,218.44,142.24,0,254,5.08,-248.92
270,218.44,147.32,0,254,5.08,-248.92
45,213.36,142.24,179.60512212,179.60512212,7.18420458,-352.02603966
243.434949,208.28,165.1,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,203.2,162.56,340.77676066,113.5922544,5.67961272,-562.2816542
135,205.74,160.02,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,170.18,152.4,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,172.72,147.32,340.77676066,113.5922544,5.67961272,-562.2816542
0,167.64,147.32,0,254,5.08,-248.92
225,157.48,154.94,179.60512212,179.60512212,7.18420458,-352.02603966
108.434949,160.02,147.32,562.25296744,80.32185358,8.03218612,-795.18633952
341.565051,152.4,149.86,240.9655582,80.32185358,8.03218612,-795.18633952
135,149.86,137.16,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,152.4,142.24,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,147.32,139.7,340.77676066,113.5922544,5.67961272,-562.2816542
180,121.92,152.4,0,254,2.54,-251.46
270,121.92,154.94,0,254,2.54,-251.46
45,119.38,152.4,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,111.76,170.18,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,109.22,165.1,227.18450626,113.5922544,5.67961272,-562.2816542
315,106.68,167.64,179.60512212,179.60512212,3.59210356,-355.61814322
225,86.36,165.1,179.60512212,179.60512212,7.18420458,-352.02603966
90,86.36,157.48,0,254,7.62,-246.38
333.434949,81.28,160.02,227.18450626,113.5922544,5.67961272,-562.2816542
180,76.2,154.94,0,254,5.08,-248.92
270,76.2,160.02,0,254,5.08,-248.92
45,71.12,154.94,179.60512212,179.60512212,7.18420458,-352.02603966
135,53.34,142.24,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,55.88,147.32,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,50.8,144.78,340.77676066,113.5922544,5.67961272,-562.2816542
180,27.94,160.02,0,254,5.08,-248.92
270,27.94,165.1,0,254,5.08,-248.92
45,22.86,160.02,179.60512212,179.60512212,7.18420458,-352.02603966
270,15.24,177.8,0,254,7.62,-246.38
45,10.16,172.72,179.60512212,179.60512212,7.18420458,-352.02603966
153.434949,15.24,170.18,227.18450626,113.5922544,5.67961272,-562.2816542
243.434949,208.28,198.12,227.18450626,113.5922544,5.67961272,-562.2816542
90,208.28,193.04,0,254,5.08,-248.92
0,205.74,193.04,0,254,2.54,-251.46
135,220.98,208.28,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,223.52,213.36,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,218.44,210.82,340.77676066,113.5922544,5.67961272,-562.2816542
180,218.44,213.36,0,254,5.08,-248.92
251.565051,220.98,220.98,240.9655582,80.32185358,8.03218612,-795.18633952
45,213.36,213.36,179.60512212,179.60512212,10.77630814,-348.43393864
153.434949,182.88,233.68,227.18450626,113.5922544,5.67961272,-562.2816542
135,165.1,185.42,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,167.64,190.5,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,162.56,187.96,340.77676066,113.5922544,5.67961272,-562.2816542
135,160.02,195.58,179.60512212,179.60512212,3.59210356,-355.61814322
251.565051,162.56,203.2,240.9655582,80.32185358,8.03218612,-795.18633952
45,157.48,198.12,179.60512212,179.60512212,7.18420458,-352.02603966
26.565051,66.04,193.04,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,71.12,190.5,227.18450626,113.5922544,5.67961272,-562.2816542
270,71.12,195.58,0,254,5.08,-248.92
90,114.3,200.66,0,254,5.08,-248.92
0,109.22,200.66,0,254,5.08,-248.92
225,114.3,205.74,179.60512212,179.60512212,7.18420458,-352.02603966
63.434949,124.46,210.82,227.18450626,113.5922544,5.67961272,-562.2816542
315,121.92,213.36,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,127,215.9,340.77676066,113.5922544,5.67961272,-562.2816542
153.434949,147.32,223.52,227.18450626,113.5922544,5.67961272,-562.2816542
270,147.32,231.14,0,254,7.62,-246.38
45,142.24,226.06,179.60512212,179.60512212,7.18420458,-352.02603966
0,71.12,236.22,0,254,7.62,-246.38
135,66.04,203.2,179.60512212,179.60512212,3.59210356,-355.61814322
270,66.04,208.28,0,254,5.08,-248.92
45,63.5,205.74,179.60512212,179.60512212,3.59210356,-355.61814322
116.565051,20.32,208.28,340.77676066,113.5922544,5.67961272,-562.2816542
333.434949,15.24,210.82,227.18450626,113.5922544,5.67961272,-562.2816542
225,17.78,213.36,179.60512212,179.60512212,3.59210356,-355.61814322
135,30.48,218.44,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,33.02,223.52,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,27.94,220.98,340.77676066,113.5922544,5.67961272,-562.2816542
0,222.21825,218.170506,0,254,0,-254
0,206.330804,232.72877,0,254,0,-254
0,208.872836,188.32957,0,254,0,-254
0,183.55056,211.532978,0,254,0,-254
0,167.663114,226.091242,0,254,0,-254
0,222.022924,134.20979,0,254,0,-254
0,206.135224,148.768054,0,254,0,-254
0,170.205146,181.692042,0,254,0,-254
0,144.88287,204.895704,0,254,0,-254
0,128.99517,219.453968,0,254,0,-254
0,208.677256,104.368854,0,254,0,-254
0,183.35498,127.572516,0,254,0,-254
0,167.467534,142.13078,0,254,0,-254
0,131.537202,175.054768,0,254,0,-254
0,106.214926,198.258176,0,254,0,-254
0,90.32748,212.81644,0,254,0,-254
0,221.827344,50.249328,0,254,0,-254
0,205.939898,64.807592,0,254,0,-254
0,170.009566,97.73158,0,254,0,-254
0,144.68729,120.934988,0,254,0,-254
0,128.799844,135.493252,0,254,0,-254
0,92.869512,168.41724,0,254,0,-254
0,67.547236,191.620902,0,254,0,-254
0,51.65979,206.179166,0,254,0,-254
0,208.48193,20.408392,0,254,0,-254
0,183.159654,43.6118,0,254,0,-254
0,167.271954,58.170064,0,254,0,-254
0,131.341876,91.094052,0,254,0,-254
0,106.0196,114.297714,0,254,0,-254
0,90.1319,128.855978,0,254,0,-254
0,54.201822,161.779966,0,254,0,-254
0,28.879546,184.983628,0,254,0,-254
0,12.991846,199.541638,0,254,0,-254
0,169.813986,13.770864,0,254,0,-254
0,144.49171,36.974526,0,254,0,-254
0,128.604264,51.53279,0,254,0,-254
0,89.821004,81.952846,0,254,0,-254
0,67.351656,107.660186,0,254,0,-254
0,51.46421,122.21845,0,254,0,-254
0,15.533878,155.142438,0,254,0,-254
0,131.146296,7.13359,0,254,0,-254
0,105.82402,30.336998,0,254,0,-254
0,89.936574,44.895262,0,254,0,-254
0,54.006242,77.81925,0,254,0,-254
0,28.683966,101.022912,0,254,0,-254
0,12.79652,115.581176,0,254,0,-254
0,92.478606,0.496062,0,254,0,-254
0,67.15633,23.699724,0,254,0,-254
0,51.26863,38.257988,0,254,0,-254
0,15.338552,71.181976,0,254,0,-254
0,28.488386,17.062196,0,254,0,-254
0,12.60094,31.62046,0,254,0,-254
0,232.573576,212.125814,0,254,0,-254
0,211.15909,204.714856,0,254,0,-254
0,197.17893,213.621112,0,254,0,-254
0,219.38234,178.422554,0,254,0,-254
0,175.76419,206.210408,0,254,0,-254
0,161.78403,215.116664,0,254,0,-254
0,183.98744,179.918106,0,254,0,-254
0,140.369544,207.705706,0,254,0,-254
0,126.389384,216.612216,0,254,0,-254
0,220.450664,135.634984,0,254,0,-254
0,206.470504,144.541494,0,254,0,-254
0,148.592794,181.413658,0,254,0,-254
0,104.974898,209.201258,0,254,0,-254
0,90.994738,218.107514,0,254,0,-254
0,228.673914,109.342936,0,254,0,-254
0,185.055764,137.130536,0,254,0,-254
0,171.075858,146.036792,0,254,0,-254
0,113.198148,182.908956,0,254,0,-254
0,69.579998,210.69681,0,254,0,-254
0,55.599838,219.603066,0,254,0,-254
0,193.279268,110.838234,0,254,0,-254
0,149.661118,138.626088,0,254,0,-254
0,135.680958,147.532344,0,254,0,-254
0,77.803248,184.404508,0,254,0,-254
0,34.185352,212.192362,0,254,0,-254
0,20.205192,221.098618,0,254,0,-254
0,229.742238,66.555366,0,254,0,-254
0,215.762078,75.461622,0,254,0,-254
0,157.884368,112.333786,0,254,0,-254
0,114.266472,140.12164,0,254,0,-254
0,100.286312,149.027896,0,254,0,-254
0,42.408602,185.90006,0,254,0,-254
0,237.965488,40.263064,0,254,0,-254
0,194.347592,68.050918,0,254,0,-254
0,180.367432,76.957174,0,254,0,-254
0,122.489722,113.829338,0,254,0,-254
0,78.871572,141.616938,0,254,0,-254
0,64.891666,150.523448,0,254,0,-254
0,7.013702,187.395612,0,254,0,-254
0,202.570842,41.758616,0,254,0,-254
0,158.952692,69.546216,0,254,0,-254
0,144.972532,78.452726,0,254,0,-254
0,87.094822,115.32489,0,254,0,-254
0,43.476926,143.11249,0,254,0,-254
0,29.496766,152.018746,0,254,0,-254
0,225.053652,6.38175,0,254,0,-254
0,167.175942,43.254168,0,254,0,-254
0,123.558046,71.041768,0,254,0,-254
0,109.577886,79.948024,0,254,0,-254
0,51.700176,116.820188,0,254,0,-254
0,8.08228,144.608042,0,254,0,-254
0,189.659006,7.877302,0,254,0,-254
0,131.781296,44.749466,0,254,0,-254
0,88.1634,72.53732,0,254,0,-254
0,74.18324,81.443576,0,254,0,-254
0,16.30553,118.31574,0,254,0,-254
0,168.24452,0.466598,0,254,0,-254
0,154.26436,9.372854,0,254,0,-254
0,96.38665,46.245018,0,254,0,-254
0,52.7685,74.032872,0,254,0,-254
0,38.78834,82.939128,0,254,0,-254
0,132.84962,1.961896,0,254,0,-254
0,118.86946,10.868406,0,254,0,-254
0,60.99175,47.74057,0,254,0,-254
0,17.373854,75.52817,0,254,0,-254
0,3.393694,84.43468,0,254,0,-254
0,97.454974,3.457448,0,254,0,-254
0,83.474814,12.363704,0,254,0,-254
0,25.597104,49.235868,0,254,0,-254
0,62.060074,4.953,0,254,0,-254
0,48.080168,13.859256,0,254,0,-254
0,26.665428,6.448552,0,254,0,-254
0,12.685268,15.354808,0,254,0,-254
0,163.20897,236.374178,0,254,0,-254
0,121.33453,230.861362,0,254,0,-254
0,96.22282,227.555298,0,254,0,-254
0,79.624174,225.370136,0,254,0,-254
0,37.749734,219.85732,0,254,0,-254
0,12.638278,216.551256,0,254,0,-254
0,229.351078,221.227142,0,254,0,-254
0,187.476638,215.714326,0,254,0,-254
0,162.364928,212.408262,0,254,0,-254
0,145.766282,210.2231,0,254,0,-254
0,103.891842,204.710284,0,254,0,-254
0,78.780132,201.40422,0,254,0,-254
0,62.18174,199.219058,0,254,0,-254
0,20.307046,193.705988,0,254,0,-254
0,228.507036,197.261226,0,254,0,-254
0,211.90839,195.076064,0,254,0,-254
0,170.03395,189.563248,0,254,0,-254
0,144.92224,186.257184,0,254,0,-254
0,128.323594,184.071768,0,254,0,-254
0,86.449154,178.558952,0,254,0,-254
0,61.337698,175.252888,0,254,0,-254
0,44.739052,173.067726,0,254,0,-254
0,2.864358,167.55491,0,254,0,-254
0,236.176058,174.415958,0,254,0,-254
0,211.064348,171.110148,0,254,0,-254
0,194.465702,168.924732,0,254,0,-254
0,152.591262,163.411916,0,254,0,-254
0,127.479552,160.105852,0,254,0,-254
0,110.88116,157.92069,0,254,0,-254
0,69.006466,152.407874,0,254,0,-254
0,43.89501,149.10181,0,254,0,-254
0,27.296364,146.916648,0,254,0,-254
0,218.73337,148.26488,0,254,0,-254
0,193.62166,144.958816,0,254,0,-254
0,177.023014,142.773654,0,254,0,-254
0,135.148574,137.260838,0,254,0,-254
0,110.037118,133.954774,0,254,0,-254
0,93.438472,131.769358,0,254,0,-254
0,51.563778,126.256542,0,254,0,-254
0,26.452322,122.950478,0,254,0,-254
0,9.853676,120.765316,0,254,0,-254
0,201.290682,122.113548,0,254,0,-254
0,176.178972,118.807738,0,254,0,-254
0,159.58058,116.622322,0,254,0,-254
0,117.705886,111.109506,0,254,0,-254
0,92.59443,107.803442,0,254,0,-254
0,75.995784,105.61828,0,254,0,-254
0,34.121344,100.105464,0,254,0,-254
0,9.009634,96.7994,0,254,0,-254
0,225.722434,101.475286,0,254,0,-254
0,183.847994,95.96247,0,254,0,-254
0,158.736538,92.656406,0,254,0,-254
0,142.137892,90.471244,0,254,0,-254
0,100.263198,84.958428,0,254,0,-254
0,75.151742,81.652364,0,254,0,-254
0,58.553096,79.466948,0,254,0,-254
0,16.678656,73.954132,0,254,0,-254
0,224.878392,77.50937,0,254,0,-254
0,208.279746,75.324208,0,254,0,-254
0,166.405306,69.811138,0,254,0,-254
0,141.29385,66.505328,0,254,0,-254
0,124.695204,64.319912,0,254,0,-254
0,82.82051,58.807096,0,254,0,-254
0,57.709054,55.501032,0,254,0,-254
0,41.110408,53.31587,0,254,0,-254
0,232.547414,54.664102,0,254,0,-254
0,207.435704,51.358038,0,254,0,-254
0,190.837312,49.172876,0,254,0,-254
0,148.962618,43.66006,0,254,0,-254
0,123.851162,40.353996,0,254,0,-254
0,107.252516,38.168834,0,254,0,-254
0,65.378076,32.656018,0,254,0,-254
0,40.266366,29.349954,0,254,0,-254
0,23.66772,27.164538,0,254,0,-254
0,215.104726,28.513024,0,254,0,-254
0,189.99327,25.20696,0,254,0,-254
0,173.394624,23.021798,0,254,0,-254
0,131.51993,17.508728,0,254,0,-254
0,106.408474,14.202918,0,254,0,-254
0,89.809828,12.017502,0,254,0,-254
0,47.935388,6.504686,0,254,0,-254
0,22.823678,3.198622,0,254,0,-254
0,6.225032,1.01346,0,254,0,-254
0,197.662038,2.361692,0,254,0,-254
0,31.866332,226.2124,0,254,0,-254
0,65.909444,230.88092,0,254,0,-254
0,31.060136,204.140054,0,254,0,-254
0,99.400106,235.125768,0,254,0,-254
0,65.103248,208.808574,0,254,0,-254
0,30.253686,182.067962,0,254,0,-254
0,98.59391,213.053422,0,254,0,-254
0,64.296798,186.736482,0,254,0,-254
0,29.44749,159.995616,0,254,0,-254
0,133.031484,218.02471,0,254,0,-254
0,97.787714,190.981076,0,254,0,-254
0,63.490602,164.664136,0,254,0,-254
0,28.641294,137.92327,0,254,0,-254
0,167.074596,222.69323,0,254,0,-254
0,132.225288,195.952364,0,254,0,-254
0,96.981264,168.90873,0,254,0,-254
0,62.684406,142.59179,0,254,0,-254
0,27.835098,115.850924,0,254,0,-254
0,200.565258,226.937824,0,254,0,-254
0,166.2684,200.620884,0,254,0,-254
0,131.419092,173.880018,0,254,0,-254
0,96.175068,146.836384,0,254,0,-254
0,61.87821,120.519444,0,254,0,-254
0,27.028902,93.778578,0,254,0,-254
0,235.002832,231.909112,0,254,0,-254
0,199.759062,204.865478,0,254,0,-254
0,165.46195,178.548538,0,254,0,-254
0,130.612642,151.807672,0,254,0,-254
0,95.368872,124.764292,0,254,0,-254
0,61.07176,98.447098,0,254,0,-254
0,26.222452,71.706232,0,254,0,-254
0,234.196636,209.836766,0,254,0,-254
0,198.952866,182.793386,0,254,0,-254
0,164.655754,156.476192,0,254,0,-254
0,129.806446,129.735326,0,254,0,-254
0,94.562676,102.691946,0,254,0,-254
0,60.265564,76.374752,0,254,0,-254
0,25.416256,49.63414,0,254,0,-254
0,233.39044,187.76442,0,254,0,-254
0,198.14667,160.72104,0,254,0,-254
0,163.849558,134.403846,0,254,0,-254
0,129.00025,107.663234,0,254,0,-254
0,93.75648,80.6196,0,254,0,-254
0,59.459368,54.30266,0,254,0,-254
0,24.61006,27.561794,0,254,0,-254
0,232.584244,165.692328,0,254,0,-254
0,197.34022,138.648694,0,254,0,-254
0,163.043362,112.331754,0,254,0,-254
0,128.194054,85.590888,0,254,0,-254
0,58.653172,32.230314,0,254,0,-254
0,23.803864,5.489448,0,254,0,-254
0,231.777794,143.619982,0,254,0,-254
0,196.534024,116.576348,0,254,0,-254
0,162.237166,90.259408,0,254,0,-254
0,127.387858,63.518542,0,254,0,-254
0,92.143834,36.474908,0,254,0,-254
0,57.846976,10.157968,0,254,0,-254
0,230.971598,121.547636,0,254,0,-254
0,195.727828,94.504002,0,254,0,-254
0,161.430716,68.187062,0,254,0,-254
0,126.581408,41.446196,0,254,0,-254
0,91.337638,14.402562,0,254,0,-254
0,230.165402,99.47529,0,254,0,-254
0,194.921632,72.431656,0,254,0,-254
0,160.62452,46.114716,0,254,0,-254
0,125.775212,19.37385,0,254,0,-254
0,229.359206,77.402944,0,254,0,-254
0,194.115436,50.359564,0,254,0,-254
0,159.818324,24.04237,0,254,0,-254
0,228.55301,55.330598,0,254,0,-254
0,193.308986,28.287218,0,254,0,-254
0,159.012128,1.970024,0,254,0,-254
0,227.74656,33.258506,0,254,0,-254
0,192.50279,6.214872,0,254,0,-254
0,226.940364,11.18616,0,254,0,-254
206.565051,254,15.24,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,251.46,10.16,227.18450626,113.5922544,5.67961272,-562.2816542
315,248.92,12.7,179.60512212,179.60512212,3.59210356,-355.61814322
206.565051,246.38,137.16,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,243.84,132.08,227.18450626,113.5922544,5.67961272,-562.2816542
315,241.3,134.62,179.60512212,179.60512212,3.59210356,-355.61814322
153.434949,254,182.88,227.18450626,113.5922544,5.67961272,-562.2816542
288.434949,251.46,190.5,562.25296744,80.32185358,8.03218612,-795.18633952
63.434949,248.92,185.42,227.18450626,113.5922544,5.67961272,-562.2816542
135,246.38,236.22,179.60512212,179.60512212,3.59210356,-355.61814322
270,246.38,241.3,0,254,5.08,-248.92
45,243.84,238.76,179.60512212,179.60512212,3.59210356,-355.61814322
0,195.58,243.84,0,254,5.08,-248.92
270,182.88,238.76,0,254,5.08,-248.92
26.565051,177.8,236.22,340.77676066,113.5922544,5.67961272,-562.2816542
0,241.457734,241.2111,0,254,0,-254
0,247.540526,194.966844,0,254,0,-254
0,244.803168,155.405582,0,254,0,-254
0,247.3452,111.006382,0,254,0,-254
0,244.607588,71.444866,0,254,0,-254
0,247.14962,27.045666,0,254,0,-254
0,246.553736,203.219304,0,254,0,-254
0,241.86515,143.045942,0,254,0,-254
0,251.156978,73.96607,0,254,0,-254
0,204.919072,241.865658,0,254,0,-254
0,179.807616,238.559594,0,254,0,-254
0,245.949724,223.412558,0,254,0,-254
0,253.618492,200.56729,0,254,0,-254
0,243.165122,127.626618,0,254,0,-254
0,242.32108,103.660448,0,254,0,-254
0,249.990102,80.815434,0,254,0,-254
0,239.536732,7.874762,0,254,0,-254
243.434949,198.12,248.92,227.18450626,113.5922544,5.67961272,-562.2816542
116.565051,200.66,243.84,340.77676066,113.5922544,5.67961272,-562.2816542
180,152.4,246.38,0,254,5.08,-248.92
270,152.4,251.46,0,254,5.08,-248.92
45,147.32,246.38,179.60512212,179.60512212,7.18420458,-352.02603966
296.565051,104.14,254,340.77676066,113.5922544,5.67961272,-562.2816542
63.434949,101.6,248.92,227.18450626,113.5922544,5.67961272,-562.2816542
180,106.68,248.92,0,254,5.08,-248.92
135,86.36,238.76,179.60512212,179.60512212,3.59210356,-355.61814322
243.434949,88.9,243.84,227.18450626,113.5922544,5.67961272,-562.2816542
26.565051,83.82,241.3,340.77676066,113.5922544,5.67961272,-562.2816542
116.565051,78.74,236.22,340.77676066,113.5922544,5.67961272,-562.2816542
225,76.2,241.3,179.60512212,179.60512212,7.18420458,-352.02603966
45,0,246.38,179.60512212,179.60512212,7.18420458,-352.02603966
161.565051,7.62,243.84,240.9655582,80.32185358,8.03218612,-795.18633952
288.434949,5.08,251.46,562.25296744,80.32185358,8.03218612,-795.18633952
0,93.065092,252.377956,0,254,0,-254
0,54.397148,245.740428,0,254,0,-254
0,15.729458,239.103154,0,254,0,-254
0,174.695866,248.997978,0,254,0,-254
0,139.30122,250.493276,0,254,0,-254
0,68.511674,253.48438,0,254,0,-254
0,113.665508,253.70663,0,254,0,-254
0,97.066862,251.521468,0,254,0,-254
0,55.192422,246.008398,0,254,0,-254
0,30.080966,242.702588,0,254,0,-254
0,13.48232,240.517172,0,254,0,-254
0,32.672528,248.284746,0,254,0,-254
0,66.71564,252.953266,0,254,0,-254
0,133.83768,240.097056,0,254,0,-254
0,167.880792,244.765576,0,254,0,-254
0,201.371454,249.01017,0,254,0,-254
0,245.485412,246.006874,0,254,0,-254
0,210.090512,247.502426,0,254,0,-254
0,246.793766,247.378474,0,254,0,-254
0,235.809282,253.981458,0,254,0,-254
`));m(d.ParsePatFile(`
*AR-CONC,AR-CONC
50, 0,0, 104.896,-149.807, 19.05,-209.55
355, 0,0, -51.7604,187.258, 15.24,-167.64
100.451, 15.182,-1.32825, 145.557,-176.27, 16.19,-178.09
46.1842, 0,50.8, 157.343,-224.71, 28.575,-314.325
96.6356, 22.5899,47.2965, 218.335,-264.405, 24.285,-267.135
351.184, 0,50.8, 196.679,280.887, 22.86,-251.46
21, 25.4,38.1, 104.896,-149.807, 19.05,-209.55
326, 25.4,38.1, -51.7604,187.258, 15.24,-167.64
71.4514, 38.0345,29.5779, 145.557,-176.27, 16.19,-178.09
37.5, 0,0, 53.9242,65.2018, 0,-165.608,0,-170.18,0,-168.275
7.5, 0,0, 79.3242,90.6018, 0,-97.028,0,-161.798,0,-64.135
-32.5, -56.642,0, 117.434,68.0212, 0,-63.5,0,-198.12,0,-262.89
-42.5, -82.042,0, 92.0344,118.821, 0,-82.55,0,-131.572,0,-186.69
`));m(d.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 101.6,101.6, 304.8,-101.6
135, 71.842,71.842, 101.6,-101.6, 304.8,-101.6
`));m(d.ParsePatFile(`
*AR-PARQ1,AR-PARQ1
90, 0,0, 304.8,304.8, 304.8,-304.8
90, 50.8,0, 304.8,304.8, 304.8,-304.8
90, 101.6,0, 304.8,304.8, 304.8,-304.8
90, 152.4,0, 304.8,304.8, 304.8,-304.8
90, 203.2,0, 304.8,304.8, 304.8,-304.8
90, 254,0, 304.8,304.8, 304.8,-304.8
90, 304.8,0, 304.8,304.8, 304.8,-304.8
0, 0,304.8, 304.8,-304.8, 304.8,-304.8
0, 0,355.6, 304.8,-304.8, 304.8,-304.8
0, 0,406.4, 304.8,-304.8, 304.8,-304.8
0, 0,457.2, 304.8,-304.8, 304.8,-304.8
0, 0,508, 304.8,-304.8, 304.8,-304.8
0, 0,558.8, 304.8,-304.8, 304.8,-304.8
0, 0,609.6, 304.8,-304.8, 304.8,-304.8
`));m(d.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 55.88,25.4, 381,-50.8,127,-25.4
0, 33.782,12.7, -25.4,33.782, 76.2,-8.382,152.4,-19.05
0, 12.7,21.59, 132.08,17.018, 203.2,-35.56,101.6,-25.4
`));m(d.ParsePatFile(`
*AR-RSHKE,AR-RSHKE
0, 0,0, 647.7,304.8, 152.4,-127,177.8,-76.2,228.6,-101.6
0, 152.4,12.7, 647.7,304.8, 127,-482.6,101.6,-152.4
0, 457.2,-19.05, 647.7,304.8, 76.2,-787.4
90, 0,0, 304.8,215.9, 292.1,-927.1
90, 152.4,0, 304.8,215.9, 285.75,-933.45
90, 279.4,0, 304.8,215.9, 266.7,-952.5
90, 457.2,-19.05, 304.8,215.9, 292.1,-927.1
90, 533.4,-19.05, 304.8,215.9, 292.1,-927.1
90, 762,0, 304.8,215.9, 279.4,-939.8
`));m(d.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 28.5242,39.8018, 0,-38.608,0,-43.18,0,-41.275
7.5, 0,0, 53.9242,65.2018, 0,-20.828,0,-34.798,0,-13.335
-32.5, -31.242,0, 66.6344,42.6212, 0,-12.7,0,-45.72,0,-59.69
-42.5, -31.242,0, 41.2344,68.0212, 0,-6.35,0,-29.972,0,-34.29
`));m(d.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
315,7.62,14.224,17.960512212,17.960512212,0.359210356,-35.561814322
288.434949,6.604,17.272,56.225296744,8.032185358,3.212874194,-77.10897837
158.198591,7.874,16.764,80.18324705,4.716661636,1.36783191,-135.415354264
116.565051,8.128,16.256,34.077676066,11.35922544,0.567961272,-56.22816542
116.565051,8.636,15.24,34.077676066,11.35922544,1.135922544,-55.660204148
111.801409,11.176,9.906,56.599939124,4.716661636,1.36783191,-135.415354264
156.801409,12.954,9.144,136.74251925,3.335183322,1.934406342,-191.506230398
289.653824,11.684,12.7,297.294468148,1.708588912,3.775981526,-373.822164724
194.036243,7.874,9.144,80.085263502,6.160405002,1.047268924,-103.679614078
251.565051,8.128,9.906,24.09655582,8.032185358,0.803218612,-79.518633952
254.054604,8.636,11.684,104.668749768,3.488958224,1.84914794,-183.065643266
74.744881,8.636,11.684,104.703186326,2.22772732,2.896045516,-286.708512434
135,9.144,11.176,17.960512212,17.960512212,0.718420458,-35.202603966
180,9.906,11.176,0,25.4,0.762,-24.638
270,9.906,11.43,0,25.4,0.254,-25.146
74.054604,9.906,11.43,104.668749768,3.488958224,3.69829588,-181.216495326
161.565051,10.668,11.176,24.09655582,8.032185358,0.803218612,-79.518633952
198.434949,11.43,11.43,56.225296744,8.032185358,0.803218612,-79.518633952
258.231711,12.7,17.526,129.51095129,1.03608759,6.226886454,-616.461767582
21.801409,11.43,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
75.963757,10.922,14.986,24.6416195,6.160405002,2.094537594,-102.632345154
341.565051,10.16,15.24,24.09655582,8.032185358,0.803218612,-79.518633952
45,9.398,14.478,17.960512212,17.960512212,1.077630814,-34.843393864
288.434949,9.144,15.24,56.225296744,8.032185358,0.803218612,-79.518633952
0,8.636,15.24,0,25.4,0.508,-24.892
26.565051,8.128,14.986,34.077676066,11.35922544,0.567961272,-56.22816542
78.231711,6.858,8.89,129.51095129,1.03608759,6.226886454,-616.461767582
4.085617,19.812,12.192,331.17053781,1.80967507,3.565059926,-352.940928864
0,17.526,12.192,0,25.4,2.286,-23.114
354.289407,14.986,12.446,25.273944626,2.527394488,2.552668504,-252.714172244
356.185925,11.938,13.97,25.343743064,1.689582854,3.818457184,-378.027270614
351.469234,20.32,13.97,179.600730968,1.255949228,5.136831992,-508.546377622
0,16.764,13.97,0,25.4,3.556,-21.844
14.036243,11.684,12.7,80.085263502,6.160405002,5.236344112,-99.490538636
189.865807,17.78,12.954,438.470633344,1.088016366,5.92968969,-587.039280834
180,20.32,12.954,0,25.4,2.54,-22.86
171.469234,25.4,12.192,179.600730968,1.255949228,5.136831992,-508.546377622
186.115504,25.4,14.224,230.005013954,0.901980416,3.973724844,-711.296769428
5.52754,3.499555612,13.546666582,255.265537982,0.815544724,4.394880466,-786.683623734
3.691386,0,12.192,381.844852514,0.817654956,3.84896106,-785.188047096
348.310631,0,13.208,129.51225558,0.85769704,7.522003244,-744.678315822
348.690068,0,14.224,24.906749272,4.981349956,7.770905718,-121.744189836
`));m(d.ParsePatFile(`
*BLOCKS-01
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
270,7.874,16.764,25.4,25.4,5.588,-19.812
180,2.032,2.286,0,25.4,14.478,-10.922
270,2.032,2.286,25.4,25.4,5.334,-20.066
180,2.032,22.352,0,25.4,14.478,-10.922
270,12.954,2.286,25.4,25.4,5.334,-20.066
270,22.606,8.128,25.4,25.4,5.08,-20.32
0,12.446,8.128,0,25.4,10.16,-15.24
90,12.446,3.048,25.4,25.4,5.08,-20.32
180,22.606,3.048,0,25.4,10.16,-15.24
270,17.526,21.336,25.4,25.4,12.192,-13.208
0,12.192,21.336,0,25.4,5.334,-20.066
90,12.192,9.144,25.4,25.4,12.192,-13.208
180,17.526,9.144,0,25.4,5.334,-20.066
270,3.048,0.762,25.4,25.4,8.382,-17.018
0,3.048,17.78,0,25.4,8.128,-17.272
270,11.176,0.762,25.4,25.4,8.382,-17.018
0,3.048,0.762,0,25.4,8.128,-17.272
270,11.43,17.018,25.4,25.4,6.096,-19.304
0,9.144,17.018,0,25.4,2.286,-23.114
90,9.144,10.922,25.4,25.4,6.096,-19.304
180,11.43,10.922,0,25.4,2.286,-23.114
270,11.43,10.16,25.4,25.4,8.382,-17.018
0,2.794,10.16,0,25.4,8.636,-16.764
90,2.794,1.778,25.4,25.4,8.382,-17.018
180,11.43,1.778,0,25.4,8.636,-16.764
270,22.606,10.414,25.4,25.4,1.524,-23.876
0,18.542,10.414,0,25.4,4.064,-21.336
90,18.542,8.89,25.4,25.4,1.524,-23.876
180,22.606,8.89,0,25.4,4.064,-21.336
180,1.778,10.16,0,25.4,3.556,-21.844
270,23.622,10.16,25.4,25.4,6.858,-18.542
180,1.778,3.302,0,25.4,3.556,-21.844
270,1.778,10.16,25.4,25.4,6.858,-18.542
180,2.032,20.574,0,25.4,8.636,-16.764
270,18.796,20.574,25.4,25.4,2.54,-22.86
180,2.032,18.034,0,25.4,8.636,-16.764
270,2.032,20.574,25.4,25.4,2.54,-22.86
180,7.874,16.764,0,25.4,14.986,-10.414
270,18.288,16.764,25.4,25.4,5.588,-19.812
180,7.874,11.176,0,25.4,14.986,-10.414
`));m(d.ParsePatFile(`
*BLOCKS-02
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
180,8.128,4.572,0,25.4,12.446,-12.954
270,8.128,13.97,25.4,25.4,9.398,-16.002
0,9.398,24.384,0,25.4,10.668,-14.732
0,4.318,24.892,0,25.4,4.318,-21.082
90,20.828,0,25.4,25.4,3.81,-21.59
180,23.368,0,0,25.4,2.54,-22.86
180,8.128,13.97,0,25.4,12.446,-12.954
270,21.082,13.97,25.4,25.4,9.398,-16.002
180,3.302,20.32,0,25.4,4.572,-20.828
90,3.556,14.986,25.4,25.4,4.318,-21.082
270,3.302,3.81,25.4,25.4,8.89,-16.51
180,18.034,14.986,0,25.4,14.478,-10.922
270,23.368,3.81,25.4,25.4,3.81,-21.59
0,20.828,3.81,0,25.4,2.54,-22.86
270,18.034,19.304,25.4,25.4,4.318,-21.082
0,3.556,19.304,0,25.4,14.478,-10.922
180,2.032,14.986,0,25.4,8.128,-17.272
270,2.032,19.304,25.4,25.4,4.318,-21.082
180,3.302,3.81,0,25.4,4.572,-20.828
270,24.13,3.81,25.4,25.4,8.89,-16.51
90,4.572,20.32,25.4,25.4,3.302,-22.098
180,23.114,20.32,0,25.4,18.542,-6.858
180,2.032,19.304,0,25.4,8.128,-17.272
270,19.304,19.304,25.4,25.4,4.318,-21.082
270,8.636,3.81,25.4,25.4,4.318,-21.082
0,4.318,3.81,0,25.4,4.318,-21.082
270,23.114,23.622,25.4,25.4,3.302,-22.098
0,4.572,23.622,0,25.4,18.542,-6.858
0,9.398,13.97,0,25.4,10.668,-14.732
270,9.398,13.97,25.4,25.4,14.986,-10.414
270,4.318,3.81,25.4,25.4,4.318,-21.082
270,20.066,13.97,25.4,25.4,14.986,-10.414
`));m(d.ParsePatFile(`
*BOX-OVERLAP
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
180,5.08,17.78,0,25.4,10.16,-15.24
90,5.08,5.08,25.4,25.4,15.24,-10.16
270,7.62,5.08,25.4,25.4,10.16,-15.24
180,5.08,7.62,0,25.4,10.16,-15.24
0,5.08,20.32,0,25.4,15.24,-10.16
180,20.32,5.08,0,25.4,15.24,-10.16
270,20.32,20.32,25.4,25.4,15.24,-10.16
270,17.78,5.08,25.4,25.4,10.16,-15.24
`));m(d.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,25.4
90, 6.35,0, 0,25.4
0, 0,0, 0,25.4, -6.35,6.35
0, 0,6.35, 0,25.4, -6.35,6.35
0, 0,12.7, 0,25.4, 6.35,-6.35
0, 0,19.05, 0,25.4, 6.35,-6.35
90, 12.7,0, 0,25.4, 6.35,-6.35
90, 19.05,0, 0,25.4, 6.35,-6.35
`));m(d.ParsePatFile(`
*BOXJOIN-01
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,3.81,25.4,25.4,17.78,-7.62
0,3.810000254,21.59,0,25.4,17.78,-7.62
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,17.78,-7.62
270,21.590000254,21.59,25.4,25.4,17.78,-7.62
180,3.810000254,13.97,0,25.4,7.62,-17.78
`));m(d.ParsePatFile(`
*BOXJOIN-02
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
90,3.810000254,13.97,25.4,25.4,7.62,-17.78
270,21.590000254,21.59,25.4,25.4,7.62,-17.78
0,13.970000254,21.59,0,25.4,7.62,-17.78
180,3.810000254,13.97,0,25.4,7.62,-17.78
90,3.810000254,3.81,25.4,25.4,7.62,-17.78
180,11.430000254,3.81,0,25.4,7.62,-17.78
180,3.810000254,11.43,0,25.4,7.62,-17.78
180,21.590000254,3.81,0,25.4,7.62,-17.78
270,21.590000254,11.43,25.4,25.4,7.62,-17.78
270,11.430000254,3.81,25.4,25.4,7.62,-17.78
270,13.970000254,3.81,25.4,25.4,7.62,-17.78
0,3.810000254,21.59,0,25.4,7.62,-17.78
`));m(d.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-1.5875
`));m(d.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,6.35
90, 0,0, 0,12.7, 6.35,-6.35
90, 6.35,0, 0,12.7, -6.35,6.35
`));m(d.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,8.382
90, 22.86,0, 8.382,12.7, 8.382,-8.382
90, 20.32,0, 8.382,12.7, 8.382,-8.382
0, 22.86,1.397, 12.7,8.382, -22.86,2.54
0, 22.86,2.794, 12.7,8.382, -22.86,2.54
0, 22.86,4.191, 12.7,8.382, -22.86,2.54
0, 22.86,5.588, 12.7,8.382, -22.86,2.54
0, 22.86,6.985, 12.7,8.382, -22.86,2.54
`));m(d.ParsePatFile(`
*BUBBLES-01,BUBBLES-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,1.4976856,0.4251706,0,25.4,0,-25.4
0,1.5807944,0.8431022,0,25.4,0,-25.4
0,1.7177766,1.2465812,0,25.4,0,-25.4
0,1.9062192,1.6287242,0,25.4,0,-25.4
0,2.1429472,1.9830034,0,25.4,0,-25.4
0,2.4238966,2.3033736,0,25.4,0,-25.4
0,2.7442414,2.584323,0,25.4,0,-25.4
0,3.098546,2.821051,0,25.4,0,-25.4
0,3.480689,3.0094936,0,25.4,0,-25.4
0,3.884168,3.1464504,0,25.4,0,-25.4
0,4.3020742,3.2295846,0,25.4,0,-25.4
0,4.7272702,3.2574484,0,25.4,0,-25.4
0,5.1524408,3.2295846,0,25.4,0,-25.4
0,5.570347,3.1464504,0,25.4,0,-25.4
0,5.973826,3.0094936,0,25.4,0,-25.4
0,6.3559944,2.821051,0,25.4,0,-25.4
0,6.7102736,2.584323,0,25.4,0,-25.4
0,7.0306184,2.3033736,0,25.4,0,-25.4
0,7.3115678,1.9830034,0,25.4,0,-25.4
0,7.5482958,1.6287242,0,25.4,0,-25.4
0,7.7367638,1.2465812,0,25.4,0,-25.4
0,7.8737206,0.8431022,0,25.4,0,-25.4
0,7.9568548,0.4251706,0,25.4,0,-25.4
0,3.0482032,5.5942992,0,25.4,0,-25.4
0,2.9839412,5.1610768,0,25.4,0,-25.4
0,2.8775152,4.7362618,0,25.4,0,-25.4
0,2.729992,4.3239182,0,25.4,0,-25.4
0,2.5427432,3.9280338,0,25.4,0,-25.4
0,2.3175976,3.5523932,0,25.4,0,-25.4
0,2.0567142,3.2006286,0,25.4,0,-25.4
0,1.7626076,2.8761436,0,25.4,0,-25.4
0,1.4380972,2.582037,0,25.4,0,-25.4
0,1.086358,2.3211536,0,25.4,0,-25.4
0,0.7107174,2.096008,0,25.4,0,-25.4
0,0.3148076,1.9087592,0,25.4,0,-25.4
0,0.3148076,10.154666,0,25.4,0,-25.4
0,0.7107174,9.9674172,0,25.4,0,-25.4
0,1.086358,9.7422716,0,25.4,0,-25.4
0,1.4380972,9.4813882,0,25.4,0,-25.4
0,1.7626076,9.1872816,0,25.4,0,-25.4
0,2.0567142,8.8627966,0,25.4,0,-25.4
0,2.3175976,8.511032,0,25.4,0,-25.4
0,2.5427432,8.1353914,0,25.4,0,-25.4
0,2.729992,7.7394816,0,25.4,0,-25.4
0,2.8775152,7.327138,0,25.4,0,-25.4
0,2.9839412,6.902323,0,25.4,0,-25.4
0,3.0482032,6.469126,0,25.4,0,-25.4
0,3.0696916,6.0317126,0,25.4,0,-25.4
0,18.7471304,9.4569026,0,25.4,0,-25.4
0,18.6083702,9.0603324,0,25.4,0,-25.4
0,18.3848248,8.70458,0,25.4,0,-25.4
0,18.0877464,8.4074762,0,25.4,0,-25.4
0,17.731994,8.1839562,0,25.4,0,-25.4
0,17.3354238,8.0451706,0,25.4,0,-25.4
0,16.9178986,7.9981298,0,25.4,0,-25.4
0,16.5003988,8.0451706,0,25.4,0,-25.4
0,16.1038286,8.1839562,0,25.4,0,-25.4
0,15.7480762,8.4074762,0,25.4,0,-25.4
0,15.4509724,8.70458,0,25.4,0,-25.4
0,15.2274524,9.0603324,0,25.4,0,-25.4
0,15.0886668,9.4569026,0,25.4,0,-25.4
0,15.041626,9.8744024,0,25.4,0,-25.4
0,15.0886668,10.2919276,0,25.4,0,-25.4
0,15.2274524,10.6884978,0,25.4,0,-25.4
0,15.4509724,11.0442502,0,25.4,0,-25.4
0,15.7480762,11.341354,0,25.4,0,-25.4
0,16.1038286,11.564874,0,25.4,0,-25.4
0,16.5003988,11.7036342,0,25.4,0,-25.4
0,16.9178986,11.750675,0,25.4,0,-25.4
0,17.3354238,11.7036342,0,25.4,0,-25.4
0,17.731994,11.564874,0,25.4,0,-25.4
0,18.0877464,11.341354,0,25.4,0,-25.4
0,18.3848248,11.0442502,0,25.4,0,-25.4
0,18.6083702,10.6884978,0,25.4,0,-25.4
0,18.7471304,10.2919276,0,25.4,0,-25.4
0,18.7941712,9.8744024,0,25.4,0,-25.4
0,21.2068664,21.1084414,0,25.4,0,-25.4
0,20.8647792,21.3569804,0,25.4,0,-25.4
0,20.5818486,21.6712292,0,25.4,0,-25.4
0,11.7541802,19.0603632,0,25.4,0,-25.4
0,11.6505482,18.6510676,0,25.4,0,-25.4
0,11.480927,18.264378,0,25.4,0,-25.4
0,11.2499902,17.9108862,0,25.4,0,-25.4
0,10.9640116,17.6002442,0,25.4,0,-25.4
0,10.6308144,17.3409102,0,25.4,0,-25.4
0,10.2594664,17.1399454,0,25.4,0,-25.4
0,9.8601022,17.0028362,0,25.4,0,-25.4
0,9.4436184,16.9333418,0,25.4,0,-25.4
0,9.0213688,16.9333418,0,25.4,0,-25.4
0,8.6049104,17.0028362,0,25.4,0,-25.4
0,8.2055462,17.1399454,0,25.4,0,-25.4
0,7.8341982,17.3409102,0,25.4,0,-25.4
0,7.5009756,17.6002442,0,25.4,0,-25.4
0,7.2150224,17.9108862,0,25.4,0,-25.4
0,6.9840602,18.264378,0,25.4,0,-25.4
0,6.8144644,18.6510676,0,25.4,0,-25.4
0,6.710807,19.0603632,0,25.4,0,-25.4
0,6.6759328,19.481165,0,25.4,0,-25.4
0,6.710807,19.9019668,0,25.4,0,-25.4
0,6.8144644,20.3112878,0,25.4,0,-25.4
0,6.9840602,20.697952,0,25.4,0,-25.4
0,7.2150224,21.0514438,0,25.4,0,-25.4
0,7.5009756,21.3620858,0,25.4,0,-25.4
0,7.8341982,21.6214452,0,25.4,0,-25.4
0,8.2055462,21.82241,0,25.4,0,-25.4
0,10.2594664,21.82241,0,25.4,0,-25.4
0,10.6308144,21.6214452,0,25.4,0,-25.4
0,10.9640116,21.3620858,0,25.4,0,-25.4
0,11.2499902,21.0514438,0,25.4,0,-25.4
0,11.480927,20.697952,0,25.4,0,-25.4
0,11.6505482,20.3112878,0,25.4,0,-25.4
0,11.7541802,19.9019668,0,25.4,0,-25.4
0,11.7890544,19.481165,0,25.4,0,-25.4
0,20.8583784,16.4692076,0,25.4,0,-25.4
0,20.7913224,16.0457896,0,25.4,0,-25.4
0,20.6803752,15.6317442,0,25.4,0,-25.4
0,20.5267306,15.2315418,0,25.4,0,-25.4
0,20.3321158,14.8495766,0,25.4,0,-25.4
0,20.0986644,14.490065,0,25.4,0,-25.4
0,19.828891,14.1569186,0,25.4,0,-25.4
0,19.5257674,13.853795,0,25.4,0,-25.4
0,19.192621,13.5840216,0,25.4,0,-25.4
0,18.8331094,13.3505448,0,25.4,0,-25.4
0,18.4511442,13.15593,0,25.4,0,-25.4
0,18.0509418,13.0023108,0,25.4,0,-25.4
0,17.636871,12.8913636,0,25.4,0,-25.4
0,17.2134784,12.8243076,0,25.4,0,-25.4
0,16.7853868,12.8018794,0,25.4,0,-25.4
0,16.3573206,12.8243076,0,25.4,0,-25.4
0,15.9339026,12.8913636,0,25.4,0,-25.4
0,15.5198572,13.0023108,0,25.4,0,-25.4
0,15.1196548,13.15593,0,25.4,0,-25.4
0,14.7376896,13.3505448,0,25.4,0,-25.4
0,14.378178,13.5840216,0,25.4,0,-25.4
0,14.0450316,13.853795,0,25.4,0,-25.4
0,13.741908,14.1569186,0,25.4,0,-25.4
0,13.4721346,14.490065,0,25.4,0,-25.4
0,13.2386578,14.8495766,0,25.4,0,-25.4
0,13.044043,15.2315418,0,25.4,0,-25.4
0,12.8904238,15.6317442,0,25.4,0,-25.4
0,12.7794766,16.0457896,0,25.4,0,-25.4
0,12.7124206,16.4692076,0,25.4,0,-25.4
0,12.6899924,16.8972738,0,25.4,0,-25.4
0,12.7124206,17.3253654,0,25.4,0,-25.4
0,12.7794766,17.748758,0,25.4,0,-25.4
0,12.8904238,18.1628288,0,25.4,0,-25.4
0,13.044043,18.5630312,0,25.4,0,-25.4
0,13.2386578,18.9449964,0,25.4,0,-25.4
0,13.4721346,19.304508,0,25.4,0,-25.4
0,13.741908,19.6376544,0,25.4,0,-25.4
0,14.0450316,19.9407526,0,25.4,0,-25.4
0,14.378178,20.2105514,0,25.4,0,-25.4
0,14.7376896,20.4440028,0,25.4,0,-25.4
0,15.1196548,20.6386176,0,25.4,0,-25.4
0,15.5198572,20.7922368,0,25.4,0,-25.4
0,15.9339026,20.9032094,0,25.4,0,-25.4
0,16.3573206,20.9702654,0,25.4,0,-25.4
0,16.7853868,20.9926936,0,25.4,0,-25.4
0,17.2134784,20.9702654,0,25.4,0,-25.4
0,17.636871,20.9032094,0,25.4,0,-25.4
0,18.0509418,20.7922368,0,25.4,0,-25.4
0,18.4511442,20.6386176,0,25.4,0,-25.4
0,18.8331094,20.4440028,0,25.4,0,-25.4
0,19.192621,20.2105514,0,25.4,0,-25.4
0,19.5257674,19.9407526,0,25.4,0,-25.4
0,19.828891,19.6376544,0,25.4,0,-25.4
0,20.0986644,19.304508,0,25.4,0,-25.4
0,20.3321158,18.9449964,0,25.4,0,-25.4
0,20.5267306,18.5630312,0,25.4,0,-25.4
0,20.6803752,18.1628288,0,25.4,0,-25.4
0,20.7913224,17.748758,0,25.4,0,-25.4
0,20.8583784,17.3253654,0,25.4,0,-25.4
0,20.8808066,16.8972738,0,25.4,0,-25.4
0,13.3174994,9.6961452,0,25.4,0,-25.4
0,13.2480558,9.2577158,0,25.4,0,-25.4
0,13.1331716,8.8289638,0,25.4,0,-25.4
0,12.9740914,8.4145628,0,25.4,0,-25.4
0,12.7725932,8.0190594,0,25.4,0,-25.4
0,12.530836,7.6467716,0,25.4,0,-25.4
0,12.2514868,7.3018142,0,25.4,0,-25.4
0,11.9375936,6.9879464,0,25.4,0,-25.4
0,11.5926362,6.7085972,0,25.4,0,-25.4
0,11.2203738,6.46684,0,25.4,0,-25.4
0,10.824845,6.2653164,0,25.4,0,-25.4
0,10.410444,6.1062362,0,25.4,0,-25.4
0,9.981692,5.991352,0,25.4,0,-25.4
0,9.5432626,5.9219084,0,25.4,0,-25.4
0,9.0999818,5.8986928,0,25.4,0,-25.4
0,8.6567264,5.9219084,0,25.4,0,-25.4
0,8.218297,5.991352,0,25.4,0,-25.4
0,7.7895196,6.1062362,0,25.4,0,-25.4
0,7.3751186,6.2653164,0,25.4,0,-25.4
0,6.9796152,6.46684,0,25.4,0,-25.4
0,6.6073528,6.7085972,0,25.4,0,-25.4
0,6.2623954,6.9879464,0,25.4,0,-25.4
0,5.9485022,7.3018142,0,25.4,0,-25.4
0,5.669153,7.6467716,0,25.4,0,-25.4
0,5.4273958,8.0190594,0,25.4,0,-25.4
0,5.2258722,8.4145628,0,25.4,0,-25.4
0,5.0668174,8.8289638,0,25.4,0,-25.4
0,4.9519332,9.2577158,0,25.4,0,-25.4
0,4.8824896,9.6961452,0,25.4,0,-25.4
0,4.8592486,10.139426,0,25.4,0,-25.4
0,4.8824896,10.5827068,0,25.4,0,-25.4
0,4.9519332,11.0211362,0,25.4,0,-25.4
0,5.0668174,11.4498882,0,25.4,0,-25.4
0,5.2258722,11.8642892,0,25.4,0,-25.4
0,5.4273958,12.2597926,0,25.4,0,-25.4
0,5.669153,12.6320804,0,25.4,0,-25.4
0,5.9485022,12.9770378,0,25.4,0,-25.4
0,6.2623954,13.2909056,0,25.4,0,-25.4
0,6.6073528,13.5702548,0,25.4,0,-25.4
0,6.9796152,13.812012,0,25.4,0,-25.4
0,7.3751186,14.0135356,0,25.4,0,-25.4
0,7.7895196,14.1726158,0,25.4,0,-25.4
0,8.218297,14.2875,0,25.4,0,-25.4
0,8.6567264,14.3569436,0,25.4,0,-25.4
0,9.0999818,14.3801592,0,25.4,0,-25.4
0,9.5432626,14.3569436,0,25.4,0,-25.4
0,9.981692,14.2875,0,25.4,0,-25.4
0,10.410444,14.1726158,0,25.4,0,-25.4
0,10.824845,14.0135356,0,25.4,0,-25.4
0,11.2203738,13.812012,0,25.4,0,-25.4
0,11.5926362,13.5702548,0,25.4,0,-25.4
0,11.9375936,13.2909056,0,25.4,0,-25.4
0,12.2514868,12.9770378,0,25.4,0,-25.4
0,12.530836,12.6320804,0,25.4,0,-25.4
0,12.7725932,12.2597926,0,25.4,0,-25.4
0,12.9740914,11.8642892,0,25.4,0,-25.4
0,13.1331716,11.4498882,0,25.4,0,-25.4
0,13.2480558,11.0211362,0,25.4,0,-25.4
0,13.3174994,10.5827068,0,25.4,0,-25.4
0,13.3407404,10.139426,0,25.4,0,-25.4
0,21.5277192,2.3211536,0,25.4,0,-25.4
0,21.1759546,2.582037,0,25.4,0,-25.4
0,20.8514442,2.8761436,0,25.4,0,-25.4
0,20.557363,3.2006286,0,25.4,0,-25.4
0,20.2964796,3.5523932,0,25.4,0,-25.4
0,20.0713086,3.9280338,0,25.4,0,-25.4
0,19.8840852,4.3239182,0,25.4,0,-25.4
0,19.7365366,4.7362618,0,25.4,0,-25.4
0,19.630136,5.1610768,0,25.4,0,-25.4
0,19.565874,5.5942992,0,25.4,0,-25.4
0,19.5443856,6.0317126,0,25.4,0,-25.4
0,19.565874,6.469126,0,25.4,0,-25.4
0,19.630136,6.902323,0,25.4,0,-25.4
0,19.7365366,7.327138,0,25.4,0,-25.4
0,19.8840852,7.7394816,0,25.4,0,-25.4
0,20.0713086,8.1353914,0,25.4,0,-25.4
0,20.2964796,8.511032,0,25.4,0,-25.4
0,20.557363,8.8627966,0,25.4,0,-25.4
0,20.8514442,9.1872816,0,25.4,0,-25.4
0,21.1759546,9.4813882,0,25.4,0,-25.4
0,21.5277192,9.7422716,0,25.4,0,-25.4
0,6.1278008,16.064738,0,25.4,0,-25.4
0,6.0612782,15.6162756,0,25.4,0,-25.4
0,5.9511438,15.1765,0,25.4,0,-25.4
0,5.7983882,14.749653,0,25.4,0,-25.4
0,5.6045608,14.339824,0,25.4,0,-25.4
0,5.3714904,13.95095,0,25.4,0,-25.4
0,5.1014122,13.5868156,0,25.4,0,-25.4
0,4.7969678,13.2509006,0,25.4,0,-25.4
0,4.4610528,12.9464308,0,25.4,0,-25.4
0,4.0969184,12.676378,0,25.4,0,-25.4
0,3.7080444,12.4433076,0,25.4,0,-25.4
0,3.2982154,12.2494548,0,25.4,0,-25.4
0,2.8713684,12.0967246,0,25.4,0,-25.4
0,2.4315928,11.9865648,0,25.4,0,-25.4
0,1.9831304,11.9200422,0,25.4,0,-25.4
0,1.5303246,11.8977918,0,25.4,0,-25.4
0,1.0774934,11.9200422,0,25.4,0,-25.4
0,0.6290564,11.9865648,0,25.4,0,-25.4
0,0.1892808,12.0967246,0,25.4,0,-25.4
0,0.1892808,20.938363,0,25.4,0,-25.4
0,0.6290564,21.0485228,0,25.4,0,-25.4
0,1.0774934,21.1150454,0,25.4,0,-25.4
0,1.5303246,21.1372958,0,25.4,0,-25.4
0,1.9831304,21.1150454,0,25.4,0,-25.4
0,2.4315928,21.0485228,0,25.4,0,-25.4
0,2.8713684,20.938363,0,25.4,0,-25.4
0,3.2982154,20.7856328,0,25.4,0,-25.4
0,3.7080444,20.59178,0,25.4,0,-25.4
0,4.0969184,20.3587096,0,25.4,0,-25.4
0,4.4610528,20.0886568,0,25.4,0,-25.4
0,4.7969678,19.784187,0,25.4,0,-25.4
0,5.1014122,19.448272,0,25.4,0,-25.4
0,5.3714904,19.0841376,0,25.4,0,-25.4
0,5.6045608,18.6952636,0,25.4,0,-25.4
0,5.7983882,18.2854346,0,25.4,0,-25.4
0,5.9511438,17.8585876,0,25.4,0,-25.4
0,6.0612782,17.418812,0,25.4,0,-25.4
0,6.1278008,16.9703496,0,25.4,0,-25.4
0,6.1500512,16.5175438,0,25.4,0,-25.4
0,19.5946268,1.221359,0,25.4,0,-25.4
0,19.5242688,0.7469886,0,25.4,0,-25.4
0,19.4077336,0.281813,0,25.4,0,-25.4
0,10.055352,0.281813,0,25.4,0,-25.4
0,9.9388168,0.7469886,0,25.4,0,-25.4
0,9.8684588,1.221359,0,25.4,0,-25.4
0,9.844913,1.7003268,0,25.4,0,-25.4
0,9.8684588,2.1792946,0,25.4,0,-25.4
0,9.9388168,2.653665,0,25.4,0,-25.4
0,10.055352,3.1188406,0,25.4,0,-25.4
0,10.216896,3.570351,0,25.4,0,-25.4
0,10.4219248,4.0038528,0,25.4,0,-25.4
0,10.6684572,4.4151804,0,25.4,0,-25.4
0,10.954131,4.800346,0,25.4,0,-25.4
0,11.2761776,5.155692,0,25.4,0,-25.4
0,11.6314982,5.4777386,0,25.4,0,-25.4
0,12.0166892,5.763387,0,25.4,0,-25.4
0,12.4280168,6.0099448,0,25.4,0,-25.4
0,12.8615186,6.2149736,0,25.4,0,-25.4
0,13.313029,6.3765176,0,25.4,0,-25.4
0,13.7782046,6.4930528,0,25.4,0,-25.4
0,14.252575,6.5634108,0,25.4,0,-25.4
0,14.7315428,6.5869312,0,25.4,0,-25.4
0,15.2105106,6.5634108,0,25.4,0,-25.4
0,15.684881,6.4930528,0,25.4,0,-25.4
0,16.1500566,6.3765176,0,25.4,0,-25.4
0,16.601567,6.2149736,0,25.4,0,-25.4
0,17.0350688,6.0099448,0,25.4,0,-25.4
0,17.4463964,5.763387,0,25.4,0,-25.4
0,17.8315874,5.4777386,0,25.4,0,-25.4
0,18.186908,5.155692,0,25.4,0,-25.4
0,18.5089546,4.800346,0,25.4,0,-25.4
0,18.794603,4.4151804,0,25.4,0,-25.4
0,19.0411608,4.0038528,0,25.4,0,-25.4
0,19.2461896,3.570351,0,25.4,0,-25.4
0,19.4077336,3.1188406,0,25.4,0,-25.4
0,19.5242688,2.653665,0,25.4,0,-25.4
0,19.5946268,2.1792946,0,25.4,0,-25.4
0,19.6181472,1.7003268,0,25.4,0,-25.4
0,25.1624084,12.2494548,0,25.4,0,-25.4
0,24.7525794,12.4433076,0,25.4,0,-25.4
0,24.3637308,12.676378,0,25.4,0,-25.4
0,23.9995964,12.9464308,0,25.4,0,-25.4
0,23.663656,13.2509006,0,25.4,0,-25.4
0,23.3592116,13.5868156,0,25.4,0,-25.4
0,23.0891334,13.95095,0,25.4,0,-25.4
0,22.856063,14.339824,0,25.4,0,-25.4
0,22.6622356,14.749653,0,25.4,0,-25.4
0,22.5095054,15.1765,0,25.4,0,-25.4
0,22.3993456,15.6162756,0,25.4,0,-25.4
0,22.332823,16.064738,0,25.4,0,-25.4
0,22.3105726,16.5175438,0,25.4,0,-25.4
0,22.332823,16.9703496,0,25.4,0,-25.4
0,22.3993456,17.418812,0,25.4,0,-25.4
0,22.5095054,17.8585876,0,25.4,0,-25.4
0,22.6622356,18.2854346,0,25.4,0,-25.4
0,22.856063,18.6952636,0,25.4,0,-25.4
0,23.0891334,19.0841376,0,25.4,0,-25.4
0,23.3592116,19.448272,0,25.4,0,-25.4
0,23.663656,19.784187,0,25.4,0,-25.4
0,23.9995964,20.0886568,0,25.4,0,-25.4
0,24.3637308,20.3587096,0,25.4,0,-25.4
0,24.7525794,20.59178,0,25.4,0,-25.4
0,25.1624084,20.7856328,0,25.4,0,-25.4
0,24.0659412,22.037421,0,25.4,0,-25.4
0,23.854537,21.6712292,0,25.4,0,-25.4
0,23.571581,21.3569804,0,25.4,0,-25.4
0,23.2294938,21.1084414,0,25.4,0,-25.4
0,22.8432106,20.936458,0,25.4,0,-25.4
0,22.429597,20.8485486,0,25.4,0,-25.4
0,22.0067632,20.8485486,0,25.4,0,-25.4
0,21.5931496,20.936458,0,25.4,0,-25.4
0,20.370419,22.037421,0,25.4,0,-25.4
0,25.302464,1.7612106,0,25.4,0,-25.4
0,24.877649,1.65481,0,25.4,0,-25.4
0,24.444452,1.590548,0,25.4,0,-25.4
0,24.0070386,1.5690596,0,25.4,0,-25.4
0,23.5696252,1.590548,0,25.4,0,-25.4
0,23.1364028,1.65481,0,25.4,0,-25.4
0,22.7115878,1.7612106,0,25.4,0,-25.4
0,22.2992442,1.9087592,0,25.4,0,-25.4
0,21.9033598,2.096008,0,25.4,0,-25.4
0,21.9033598,9.9674172,0,25.4,0,-25.4
0,22.2992442,10.154666,0,25.4,0,-25.4
0,22.7115878,10.3022146,0,25.4,0,-25.4
0,23.1364028,10.4086152,0,25.4,0,-25.4
0,23.5696252,10.4728772,0,25.4,0,-25.4
0,24.0070386,10.4943656,0,25.4,0,-25.4
0,24.444452,10.4728772,0,25.4,0,-25.4
0,24.877649,10.4086152,0,25.4,0,-25.4
0,25.302464,10.3022146,0,25.4,0,-25.4
0,19.2461896,25.2303026,0,25.4,0,-25.4
0,19.0411608,24.7967754,0,25.4,0,-25.4
0,18.794603,24.3854732,0,25.4,0,-25.4
0,18.5089546,24.0002822,0,25.4,0,-25.4
0,18.186908,23.6449616,0,25.4,0,-25.4
0,17.8315874,23.322915,0,25.4,0,-25.4
0,17.4463964,23.0372412,0,25.4,0,-25.4
0,17.0350688,22.7907088,0,25.4,0,-25.4
0,16.601567,22.58568,0,25.4,0,-25.4
0,16.1500566,22.4241106,0,25.4,0,-25.4
0,15.684881,22.3076008,0,25.4,0,-25.4
0,15.2105106,22.2372428,0,25.4,0,-25.4
0,14.7315428,22.213697,0,25.4,0,-25.4
0,14.252575,22.2372428,0,25.4,0,-25.4
0,13.7782046,22.3076008,0,25.4,0,-25.4
0,13.313029,22.4241106,0,25.4,0,-25.4
0,12.8615186,22.58568,0,25.4,0,-25.4
0,12.4280168,22.7907088,0,25.4,0,-25.4
0,12.0166892,23.0372412,0,25.4,0,-25.4
0,11.6314982,23.322915,0,25.4,0,-25.4
0,11.2761776,23.6449616,0,25.4,0,-25.4
0,10.954131,24.0002822,0,25.4,0,-25.4
0,10.6684572,24.3854732,0,25.4,0,-25.4
0,10.4219248,24.7967754,0,25.4,0,-25.4
0,10.216896,25.2303026,0,25.4,0,-25.4
0,20.2397614,22.4395792,0,25.4,0,-25.4
0,20.1955654,22.8601016,0,25.4,0,-25.4
0,20.2397614,23.280624,0,25.4,0,-25.4
0,20.370419,23.6827822,0,25.4,0,-25.4
0,20.5818486,24.048974,0,25.4,0,-25.4
0,20.8647792,24.3631974,0,25.4,0,-25.4
0,21.2068664,24.6117364,0,25.4,0,-25.4
0,8.6049104,21.9594938,0,25.4,0,-25.4
0,9.0213688,22.0289882,0,25.4,0,-25.4
0,9.4436184,22.0289882,0,25.4,0,-25.4
0,9.8601022,21.9594938,0,25.4,0,-25.4
0,7.9568548,24.9748294,0,25.4,0,-25.4
0,7.8737206,24.5568978,0,25.4,0,-25.4
0,7.7367638,24.1534188,0,25.4,0,-25.4
0,7.5482958,23.7712758,0,25.4,0,-25.4
0,7.3115678,23.4169966,0,25.4,0,-25.4
0,7.0306184,23.0966264,0,25.4,0,-25.4
0,6.7102736,22.815677,0,25.4,0,-25.4
0,6.3559944,22.578949,0,25.4,0,-25.4
0,5.973826,22.3905064,0,25.4,0,-25.4
0,5.570347,22.2535496,0,25.4,0,-25.4
0,5.1524408,22.1704154,0,25.4,0,-25.4
0,4.7272702,22.1425516,0,25.4,0,-25.4
0,4.3020742,22.1704154,0,25.4,0,-25.4
0,3.884168,22.2535496,0,25.4,0,-25.4
0,3.480689,22.3905064,0,25.4,0,-25.4
0,3.098546,22.578949,0,25.4,0,-25.4
0,2.7442414,22.815677,0,25.4,0,-25.4
0,2.4238966,23.0966264,0,25.4,0,-25.4
0,2.1429472,23.4169966,0,25.4,0,-25.4
0,1.9062192,23.7712758,0,25.4,0,-25.4
0,1.7177766,24.1534188,0,25.4,0,-25.4
0,1.5807944,24.5568978,0,25.4,0,-25.4
0,1.4976856,24.9748294,0,25.4,0,-25.4
0,1.4697964,25.4,0,25.4,0,-25.4
0,7.9847186,25.4,0,25.4,0,-25.4
0,24.1966242,22.4395792,0,25.4,0,-25.4
0,21.5931496,24.7837452,0,25.4,0,-25.4
0,22.0067632,24.8716546,0,25.4,0,-25.4
0,22.429597,24.8716546,0,25.4,0,-25.4
0,22.8432106,24.7837452,0,25.4,0,-25.4
0,23.2294938,24.6117364,0,25.4,0,-25.4
0,23.571581,24.3631974,0,25.4,0,-25.4
0,23.854537,24.048974,0,25.4,0,-25.4
0,24.0659412,23.6827822,0,25.4,0,-25.4
0,24.1966242,23.280624,0,25.4,0,-25.4
0,24.2408202,22.8601016,0,25.4,0,-25.4
`));m(d.ParsePatFile(`
*BUBBLES-02,BUBBLES-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,0.315722,3.5481006,0,25.4,0,-25.4
0,0.1191006,3.162173,0,25.4,0,-25.4
0,0.1191006,4.7896018,0,25.4,0,-25.4
0,0.315722,4.4036742,0,25.4,0,-25.4
0,0.3834892,3.9758874,0,25.4,0,-25.4
0,0.9946386,13.9859512,0,25.4,0,-25.4
0,0.840232,13.5788146,0,25.4,0,-25.4
0,0.5928614,13.220446,0,25.4,0,-25.4
0,0.2669286,12.9316988,0,25.4,0,-25.4
0,0.2669286,15.9047688,0,25.4,0,-25.4
0,0.5928614,15.6160216,0,25.4,0,-25.4
0,0.840232,15.257653,0,25.4,0,-25.4
0,0.9946386,14.8505164,0,25.4,0,-25.4
0,1.0471404,14.4182338,0,25.4,0,-25.4
0,0.321437,1.5549118,0,25.4,0,-25.4
0,0.7453122,1.6269208,0,25.4,0,-25.4
0,1.1745976,1.6510254,0,25.4,0,-25.4
0,1.6039084,1.6269208,0,25.4,0,-25.4
0,2.0277836,1.5549118,0,25.4,0,-25.4
0,2.44094,1.435862,0,25.4,0,-25.4
0,2.838196,1.2713208,0,25.4,0,-25.4
0,3.214497,1.0633456,0,25.4,0,-25.4
0,3.5651694,0.8145526,0,25.4,0,-25.4
0,3.8857682,0.5280406,0,25.4,0,-25.4
0,4.1722802,0.2074418,0,25.4,0,-25.4
0,5.3785008,15.8337504,0,25.4,0,-25.4
0,5.1644804,15.4630628,0,25.4,0,-25.4
0,4.8365664,15.1879046,0,25.4,0,-25.4
0,4.434332,15.041499,0,25.4,0,-25.4
0,4.0062658,15.041499,0,25.4,0,-25.4
0,3.6040314,15.1879046,0,25.4,0,-25.4
0,3.2761174,15.4630628,0,25.4,0,-25.4
0,3.062097,15.8337504,0,25.4,0,-25.4
0,2.9877512,16.2553142,0,25.4,0,-25.4
0,3.062097,16.676878,0,25.4,0,-25.4
0,3.2761174,17.0475656,0,25.4,0,-25.4
0,3.6040314,17.3227238,0,25.4,0,-25.4
0,4.0062658,17.4691294,0,25.4,0,-25.4
0,4.434332,17.4691294,0,25.4,0,-25.4
0,4.8365664,17.3227238,0,25.4,0,-25.4
0,5.1644804,17.0475656,0,25.4,0,-25.4
0,5.3785008,16.676878,0,25.4,0,-25.4
0,5.4528212,16.2553142,0,25.4,0,-25.4
0,1.6039084,19.4068192,0,25.4,0,-25.4
0,1.1745976,19.3827146,0,25.4,0,-25.4
0,0.7453122,19.4068192,0,25.4,0,-25.4
0,8.07212,6.3135002,0,25.4,0,-25.4
0,7.9904082,5.9026552,0,25.4,0,-25.4
0,7.8557628,5.5059834,0,25.4,0,-25.4
0,7.6704952,5.130292,0,25.4,0,-25.4
0,7.437755,4.7820072,0,25.4,0,-25.4
0,7.1615554,4.4670472,0,25.4,0,-25.4
0,6.8466208,4.1908476,0,25.4,0,-25.4
0,6.4983106,3.9581328,0,25.4,0,-25.4
0,6.1226192,3.7728652,0,25.4,0,-25.4
0,5.7259474,3.6382198,0,25.4,0,-25.4
0,5.3151024,3.5564826,0,25.4,0,-25.4
0,4.89712,3.5291014,0,25.4,0,-25.4
0,4.4791122,3.5564826,0,25.4,0,-25.4
0,4.0682672,3.6382198,0,25.4,0,-25.4
0,3.6715954,3.7728652,0,25.4,0,-25.4
0,3.295904,3.9581328,0,25.4,0,-25.4
0,2.9475938,4.1908476,0,25.4,0,-25.4
0,2.6326592,4.4670472,0,25.4,0,-25.4
0,2.3564596,4.7820072,0,25.4,0,-25.4
0,2.1237448,5.130292,0,25.4,0,-25.4
0,1.9384772,5.5059834,0,25.4,0,-25.4
0,1.8038064,5.9026552,0,25.4,0,-25.4
0,1.7220946,6.3135002,0,25.4,0,-25.4
0,1.694688,6.731508,0,25.4,0,-25.4
0,1.7220946,7.1495158,0,25.4,0,-25.4
0,1.8038064,7.5603608,0,25.4,0,-25.4
0,1.9384772,7.9570072,0,25.4,0,-25.4
0,2.1237448,8.332724,0,25.4,0,-25.4
0,2.3564596,8.6810088,0,25.4,0,-25.4
0,2.6326592,8.9959434,0,25.4,0,-25.4
0,2.9475938,9.272143,0,25.4,0,-25.4
0,3.295904,9.5048832,0,25.4,0,-25.4
0,3.6715954,9.6901508,0,25.4,0,-25.4
0,4.0682672,9.8247962,0,25.4,0,-25.4
0,4.4791122,9.9065334,0,25.4,0,-25.4
0,4.89712,9.9339146,0,25.4,0,-25.4
0,5.3151024,9.9065334,0,25.4,0,-25.4
0,5.7259474,9.8247962,0,25.4,0,-25.4
0,6.1226192,9.6901508,0,25.4,0,-25.4
0,6.4983106,9.5048832,0,25.4,0,-25.4
0,6.8466208,9.272143,0,25.4,0,-25.4
0,7.1615554,8.9959434,0,25.4,0,-25.4
0,7.437755,8.6810088,0,25.4,0,-25.4
0,7.6704952,8.332724,0,25.4,0,-25.4
0,7.8557628,7.9570072,0,25.4,0,-25.4
0,7.9904082,7.5603608,0,25.4,0,-25.4
0,8.07212,7.1495158,0,25.4,0,-25.4
0,8.0995266,6.731508,0,25.4,0,-25.4
0,18.0404516,13.0813048,0,25.4,0,-25.4
0,17.9789836,12.6669292,0,25.4,0,-25.4
0,17.8771804,12.2606054,0,25.4,0,-25.4
0,17.736058,11.8661942,0,25.4,0,-25.4
0,17.5569626,11.4875056,0,25.4,0,-25.4
0,17.3416214,11.1282226,0,25.4,0,-25.4
0,17.0920664,10.7917488,0,25.4,0,-25.4
0,16.8107614,10.4813862,0,25.4,0,-25.4
0,16.5003734,10.2000558,0,25.4,0,-25.4
0,16.163925,9.9505262,0,25.4,0,-25.4
0,15.8046166,9.7351596,0,25.4,0,-25.4
0,15.4259534,9.5560642,0,25.4,0,-25.4
0,15.0315422,9.4149418,0,25.4,0,-25.4
0,14.625193,9.313164,0,25.4,0,-25.4
0,14.2108428,9.251696,0,25.4,0,-25.4
0,13.792454,9.2311474,0,25.4,0,-25.4
0,13.3740652,9.251696,0,25.4,0,-25.4
0,12.9596896,9.313164,0,25.4,0,-25.4
0,12.5533404,9.4149418,0,25.4,0,-25.4
0,12.1589292,9.5560642,0,25.4,0,-25.4
0,11.780266,9.7351596,0,25.4,0,-25.4
0,11.4209576,9.9505262,0,25.4,0,-25.4
0,11.0845092,10.2000558,0,25.4,0,-25.4
0,10.7741212,10.4813862,0,25.4,0,-25.4
0,10.4928162,10.7917488,0,25.4,0,-25.4
0,10.2432866,11.1282226,0,25.4,0,-25.4
0,10.02792,11.4875056,0,25.4,0,-25.4
0,9.8488246,11.8661942,0,25.4,0,-25.4
0,9.7077022,12.2606054,0,25.4,0,-25.4
0,9.6059244,12.6669292,0,25.4,0,-25.4
0,9.5444564,13.0813048,0,25.4,0,-25.4
0,9.5239078,13.4996936,0,25.4,0,-25.4
0,9.5444564,13.9180824,0,25.4,0,-25.4
0,9.6059244,14.332458,0,25.4,0,-25.4
0,9.7077022,14.7387818,0,25.4,0,-25.4
0,9.8488246,15.133193,0,25.4,0,-25.4
0,10.02792,15.5118816,0,25.4,0,-25.4
0,10.2432866,15.8711646,0,25.4,0,-25.4
0,10.4928162,16.2076384,0,25.4,0,-25.4
0,10.7741212,16.518001,0,25.4,0,-25.4
0,11.0845092,16.7993314,0,25.4,0,-25.4
0,11.4209576,17.048861,0,25.4,0,-25.4
0,11.780266,17.2642276,0,25.4,0,-25.4
0,12.1589292,17.443323,0,25.4,0,-25.4
0,12.5533404,17.5844454,0,25.4,0,-25.4
0,12.9596896,17.6862232,0,25.4,0,-25.4
0,13.3740652,17.7476912,0,25.4,0,-25.4
0,13.792454,17.7682398,0,25.4,0,-25.4
0,14.2108428,17.7476912,0,25.4,0,-25.4
0,14.625193,17.6862232,0,25.4,0,-25.4
0,15.0315422,17.5844454,0,25.4,0,-25.4
0,15.4259534,17.443323,0,25.4,0,-25.4
0,15.8046166,17.2642276,0,25.4,0,-25.4
0,16.163925,17.048861,0,25.4,0,-25.4
0,16.5003734,16.7993314,0,25.4,0,-25.4
0,16.8107614,16.518001,0,25.4,0,-25.4
0,17.0920664,16.2076384,0,25.4,0,-25.4
0,17.3416214,15.8711646,0,25.4,0,-25.4
0,17.5569626,15.5118816,0,25.4,0,-25.4
0,17.736058,15.133193,0,25.4,0,-25.4
0,17.8771804,14.7387818,0,25.4,0,-25.4
0,17.9789836,14.332458,0,25.4,0,-25.4
0,18.0404516,13.9180824,0,25.4,0,-25.4
0,18.0610002,13.4996936,0,25.4,0,-25.4
0,8.9792048,0.3298444,0,25.4,0,-25.4
0,8.9318846,0.7497064,0,25.4,0,-25.4
0,8.9160858,1.1719306,0,25.4,0,-25.4
0,8.9318846,1.5941294,0,25.4,0,-25.4
0,8.9792048,2.0139914,0,25.4,0,-25.4
0,9.0577416,2.429129,0,25.4,0,-25.4
0,9.1670886,2.8372562,0,25.4,0,-25.4
0,9.3066362,3.2360616,0,25.4,0,-25.4
0,9.475597,3.62331,0,25.4,0,-25.4
0,9.6730312,3.9968424,0,25.4,0,-25.4
0,9.8978212,4.3546014,0,25.4,0,-25.4
0,10.1487224,4.694555,0,25.4,0,-25.4
0,10.4243124,5.0147982,0,25.4,0,-25.4
0,10.7230672,5.3135784,0,25.4,0,-25.4
0,11.0433104,5.5891684,0,25.4,0,-25.4
0,11.383264,5.8400696,0,25.4,0,-25.4
0,11.741023,6.0648596,0,25.4,0,-25.4
0,12.1145554,6.2622684,0,25.4,0,-25.4
0,12.5018292,6.4312292,0,25.4,0,-25.4
0,12.9006346,6.5707768,0,25.4,0,-25.4
0,13.3087364,6.6801238,0,25.4,0,-25.4
0,13.723874,6.758686,0,25.4,0,-25.4
0,14.143736,6.8059808,0,25.4,0,-25.4
0,14.5659602,6.8217796,0,25.4,0,-25.4
0,14.988159,6.8059808,0,25.4,0,-25.4
0,15.408021,6.758686,0,25.4,0,-25.4
0,15.8231586,6.6801238,0,25.4,0,-25.4
0,16.2312858,6.5707768,0,25.4,0,-25.4
0,16.6300658,6.4312292,0,25.4,0,-25.4
0,17.0173396,6.2622684,0,25.4,0,-25.4
0,17.390872,6.0648596,0,25.4,0,-25.4
0,17.748631,5.8400696,0,25.4,0,-25.4
0,18.0885846,5.5891684,0,25.4,0,-25.4
0,18.4088278,5.3135784,0,25.4,0,-25.4
0,18.7075826,5.0147982,0,25.4,0,-25.4
0,18.983198,4.694555,0,25.4,0,-25.4
0,19.2340992,4.3546014,0,25.4,0,-25.4
0,19.4588892,3.9968424,0,25.4,0,-25.4
0,19.656298,3.62331,0,25.4,0,-25.4
0,19.8252588,3.2360616,0,25.4,0,-25.4
0,23.5769404,0.2074418,0,25.4,0,-25.4
0,23.8634524,0.5280406,0,25.4,0,-25.4
0,24.1840512,0.8145526,0,25.4,0,-25.4
0,24.5347236,1.0633456,0,25.4,0,-25.4
0,24.9110246,1.2713208,0,25.4,0,-25.4
0,25.3082552,1.435862,0,25.4,0,-25.4
0,25.2128274,2.8558998,0,25.4,0,-25.4
0,24.8269252,2.6592784,0,25.4,0,-25.4
0,24.399113,2.5915112,0,25.4,0,-25.4
0,23.9713262,2.6592784,0,25.4,0,-25.4
0,23.5853986,2.8558998,0,25.4,0,-25.4
0,23.2791508,3.162173,0,25.4,0,-25.4
0,23.082504,3.5481006,0,25.4,0,-25.4
0,23.0147622,3.9758874,0,25.4,0,-25.4
0,23.082504,4.4036742,0,25.4,0,-25.4
0,23.2791508,4.7896018,0,25.4,0,-25.4
0,23.5853986,5.095875,0,25.4,0,-25.4
0,23.9713262,5.2924964,0,25.4,0,-25.4
0,24.399113,5.3602636,0,25.4,0,-25.4
0,24.8269252,5.2924964,0,25.4,0,-25.4
0,25.2128274,5.095875,0,25.4,0,-25.4
0,25.2813566,12.729337,0,25.4,0,-25.4
0,24.8585736,12.6251208,0,25.4,0,-25.4
0,24.423116,12.6251208,0,25.4,0,-25.4
0,24.000333,12.729337,0,25.4,0,-25.4
0,23.614761,12.9316988,0,25.4,0,-25.4
0,23.2888028,13.220446,0,25.4,0,-25.4
0,23.0414576,13.5788146,0,25.4,0,-25.4
0,22.887051,13.9859512,0,25.4,0,-25.4
0,22.8345492,14.4182338,0,25.4,0,-25.4
0,22.887051,14.8505164,0,25.4,0,-25.4
0,23.0414576,15.257653,0,25.4,0,-25.4
0,23.2888028,15.6160216,0,25.4,0,-25.4
0,23.614761,15.9047688,0,25.4,0,-25.4
0,24.000333,16.1071306,0,25.4,0,-25.4
0,24.423116,16.2113468,0,25.4,0,-25.4
0,24.8585736,16.2113468,0,25.4,0,-25.4
0,25.2813566,16.1071306,0,25.4,0,-25.4
0,20.2000104,0.7497064,0,25.4,0,-25.4
0,20.1527156,0.3298444,0,25.4,0,-25.4
0,19.9648064,2.8372562,0,25.4,0,-25.4
0,20.0741534,2.429129,0,25.4,0,-25.4
0,20.1527156,2.0139914,0,25.4,0,-25.4
0,20.2000104,1.5941294,0,25.4,0,-25.4
0,20.2158092,1.1719306,0,25.4,0,-25.4
0,20.0741534,25.3147068,0,25.4,0,-25.4
0,19.9648064,24.906605,0,25.4,0,-25.4
0,19.8252588,24.5077996,0,25.4,0,-25.4
0,19.656298,24.1205512,0,25.4,0,-25.4
0,19.4588892,23.7469934,0,25.4,0,-25.4
0,19.2340992,23.3892344,0,25.4,0,-25.4
0,18.983198,23.0492808,0,25.4,0,-25.4
0,18.7075826,22.7290376,0,25.4,0,-25.4
0,18.4088278,22.4302828,0,25.4,0,-25.4
0,18.0885846,22.1546928,0,25.4,0,-25.4
0,17.748631,21.9037916,0,25.4,0,-25.4
0,17.390872,21.6790016,0,25.4,0,-25.4
0,17.0173396,21.4815674,0,25.4,0,-25.4
0,16.6300658,21.3126066,0,25.4,0,-25.4
0,16.2312858,21.173059,0,25.4,0,-25.4
0,15.8231586,21.063712,0,25.4,0,-25.4
0,15.408021,20.9851752,0,25.4,0,-25.4
0,14.988159,20.937855,0,25.4,0,-25.4
0,14.5659602,20.9220562,0,25.4,0,-25.4
0,14.143736,20.937855,0,25.4,0,-25.4
0,13.723874,20.9851752,0,25.4,0,-25.4
0,13.3087364,21.063712,0,25.4,0,-25.4
0,12.9006346,21.173059,0,25.4,0,-25.4
0,12.5018292,21.3126066,0,25.4,0,-25.4
0,12.1145554,21.4815674,0,25.4,0,-25.4
0,11.741023,21.6790016,0,25.4,0,-25.4
0,11.383264,21.9037916,0,25.4,0,-25.4
0,11.0433104,22.1546928,0,25.4,0,-25.4
0,10.7230672,22.4302828,0,25.4,0,-25.4
0,10.4243124,22.7290376,0,25.4,0,-25.4
0,10.1487224,23.0492808,0,25.4,0,-25.4
0,9.8978212,23.3892344,0,25.4,0,-25.4
0,9.6730312,23.7469934,0,25.4,0,-25.4
0,9.475597,24.1205512,0,25.4,0,-25.4
0,9.3066362,24.5077996,0,25.4,0,-25.4
0,9.1670886,24.906605,0,25.4,0,-25.4
0,9.0577416,25.3147068,0,25.4,0,-25.4
0,4.9846484,22.7875846,0,25.4,0,-25.4
0,4.9126394,22.3637094,0,25.4,0,-25.4
0,4.793615,21.9505276,0,25.4,0,-25.4
0,4.6290738,21.553297,0,25.4,0,-25.4
0,4.4210732,21.176996,0,25.4,0,-25.4
0,4.1722802,20.8263236,0,25.4,0,-25.4
0,3.8857682,20.5057248,0,25.4,0,-25.4
0,3.5651694,20.2192128,0,25.4,0,-25.4
0,3.214497,19.9703944,0,25.4,0,-25.4
0,2.838196,19.7624192,0,25.4,0,-25.4
0,2.44094,19.597878,0,25.4,0,-25.4
0,2.0277836,19.4788536,0,25.4,0,-25.4
0,0.321437,19.4788536,0,25.4,0,-25.4
0,4.4210732,25.2567694,0,25.4,0,-25.4
0,4.6290738,24.880443,0,25.4,0,-25.4
0,4.793615,24.4832124,0,25.4,0,-25.4
0,4.9126394,24.070056,0,25.4,0,-25.4
0,4.9846484,23.6461554,0,25.4,0,-25.4
0,5.008753,23.21687,0,25.4,0,-25.4
0,25.3082552,19.597878,0,25.4,0,-25.4
0,24.9110246,19.7624192,0,25.4,0,-25.4
0,24.5347236,19.9703944,0,25.4,0,-25.4
0,24.1840512,20.2192128,0,25.4,0,-25.4
0,23.8634524,20.5057248,0,25.4,0,-25.4
0,23.5769404,20.8263236,0,25.4,0,-25.4
0,23.3281474,21.176996,0,25.4,0,-25.4
0,23.1201468,21.553297,0,25.4,0,-25.4
0,22.9556056,21.9505276,0,25.4,0,-25.4
0,22.8365812,22.3637094,0,25.4,0,-25.4
0,22.7645722,22.7875846,0,25.4,0,-25.4
0,22.7404422,23.21687,0,25.4,0,-25.4
0,22.7645722,23.6461554,0,25.4,0,-25.4
0,22.8365812,24.070056,0,25.4,0,-25.4
0,22.9556056,24.4832124,0,25.4,0,-25.4
0,23.1201468,24.880443,0,25.4,0,-25.4
0,23.3281474,25.2567694,0,25.4,0,-25.4
`));m(d.ParsePatFile(`
*BUBBLES-03,BUBBLES-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
0,10.1887274,4.1559734,0,25.4,0,-25.4
0,10.0855526,3.6595304,0,25.4,0,-25.4
0,9.9157536,3.181731,0,25.4,0,-25.4
0,9.68248,2.7315414,0,25.4,0,-25.4
0,9.3900752,2.3172928,0,25.4,0,-25.4
0,9.0439748,1.9467068,0,25.4,0,-25.4
0,8.6506558,1.6267176,0,25.4,0,-25.4
0,8.217408,1.3632688,0,25.4,0,-25.4
0,7.752334,1.1612372,0,25.4,0,-25.4
0,7.2640952,1.0244582,0,25.4,0,-25.4
0,6.7617594,0.9553956,0,25.4,0,-25.4
0,6.2546992,0.9553956,0,25.4,0,-25.4
0,5.7523634,1.0244582,0,25.4,0,-25.4
0,5.2641246,1.1612372,0,25.4,0,-25.4
0,4.7990252,1.3632688,0,25.4,0,-25.4
0,4.3658028,1.6267176,0,25.4,0,-25.4
0,3.9724838,1.9467068,0,25.4,0,-25.4
0,3.6263834,2.3172928,0,25.4,0,-25.4
0,3.3339786,2.7315414,0,25.4,0,-25.4
0,3.100705,3.181731,0,25.4,0,-25.4
0,2.9308806,3.6595304,0,25.4,0,-25.4
0,2.8277312,4.1559734,0,25.4,0,-25.4
0,2.7931364,4.6618398,0,25.4,0,-25.4
0,2.8277312,5.1677062,0,25.4,0,-25.4
0,2.9308806,5.6641746,0,25.4,0,-25.4
0,3.100705,6.1419486,0,25.4,0,-25.4
0,3.3339786,6.5921382,0,25.4,0,-25.4
0,3.6263834,7.0063868,0,25.4,0,-25.4
0,3.9724838,7.3769728,0,25.4,0,-25.4
0,4.3658028,7.696962,0,25.4,0,-25.4
0,4.7990252,7.9604362,0,25.4,0,-25.4
0,5.2641246,8.1624424,0,25.4,0,-25.4
0,5.7523634,8.2992468,0,25.4,0,-25.4
0,6.2546992,8.368284,0,25.4,0,-25.4
0,6.7617594,8.368284,0,25.4,0,-25.4
0,7.2640952,8.2992468,0,25.4,0,-25.4
0,7.752334,8.1624424,0,25.4,0,-25.4
0,8.217408,7.9604362,0,25.4,0,-25.4
0,8.6506558,7.696962,0,25.4,0,-25.4
0,9.0439748,7.3769728,0,25.4,0,-25.4
0,9.3900752,7.0063868,0,25.4,0,-25.4
0,9.68248,6.5921382,0,25.4,0,-25.4
0,9.9157536,6.1419486,0,25.4,0,-25.4
0,10.0855526,5.6641746,0,25.4,0,-25.4
0,10.1887274,5.1677062,0,25.4,0,-25.4
0,10.2233222,4.6618398,0,25.4,0,-25.4
0,18.2143908,14.7408138,0,25.4,0,-25.4
0,17.687036,14.9496018,0,25.4,0,-25.4
0,17.1900342,15.222855,0,25.4,0,-25.4
0,16.7311578,15.55623,0,25.4,0,-25.4
0,16.317722,15.9444944,0,25.4,0,-25.4
0,15.9561784,16.3815014,0,25.4,0,-25.4
0,15.6522674,16.860393,0,25.4,0,-25.4
0,15.4107896,17.3736,0,25.4,0,-25.4
0,15.2355042,17.9130198,0,25.4,0,-25.4
0,15.1292306,18.4701434,0,25.4,0,-25.4
0,15.0936198,19.0362078,0,25.4,0,-25.4
0,15.1292306,19.6022722,0,25.4,0,-25.4
0,15.2355042,20.1593958,0,25.4,0,-25.4
0,15.4107896,20.6988156,0,25.4,0,-25.4
0,18.1163722,0.530352,0,25.4,0,-25.4
0,17.4814484,0.5615432,0,25.4,0,-25.4
0,16.8526714,0.654812,0,25.4,0,-25.4
0,16.236061,0.8092694,0,25.4,0,-25.4
0,15.6375354,1.0234168,0,25.4,0,-25.4
0,15.0629112,1.2951968,0,25.4,0,-25.4
0,14.5176748,1.6219932,0,25.4,0,-25.4
0,14.0071094,2.0006564,0,25.4,0,-25.4
0,13.5361172,2.4275542,0,25.4,0,-25.4
0,13.1092194,2.8985464,0,25.4,0,-25.4
0,12.7305562,3.4091372,0,25.4,0,-25.4
0,12.4037598,3.9543482,0,25.4,0,-25.4
0,12.1319798,4.5289978,0,25.4,0,-25.4
0,11.9178324,5.127498,0,25.4,0,-25.4
0,11.763375,5.7441084,0,25.4,0,-25.4
0,11.6701062,6.3729108,0,25.4,0,-25.4
0,11.638915,7.0078092,0,25.4,0,-25.4
0,11.6701062,7.6427076,0,25.4,0,-25.4
0,11.763375,8.2714846,0,25.4,0,-25.4
0,11.9178324,8.8881204,0,25.4,0,-25.4
0,12.1319798,9.4866206,0,25.4,0,-25.4
0,12.4037598,10.0612702,0,25.4,0,-25.4
0,12.7305562,10.6064812,0,25.4,0,-25.4
0,13.1092194,11.117072,0,25.4,0,-25.4
0,13.5361172,11.5880642,0,25.4,0,-25.4
0,14.0071094,12.0149366,0,25.4,0,-25.4
0,14.5176748,12.3936252,0,25.4,0,-25.4
0,15.0629112,12.7204216,0,25.4,0,-25.4
0,15.6375354,12.9922016,0,25.4,0,-25.4
0,16.236061,13.206349,0,25.4,0,-25.4
0,16.8526714,13.3608064,0,25.4,0,-25.4
0,17.4814484,13.4540752,0,25.4,0,-25.4
0,18.1163722,13.4852664,0,25.4,0,-25.4
0,14.3025876,16.7496744,0,25.4,0,-25.4
0,14.1946122,16.0217104,0,25.4,0,-25.4
0,14.0157962,15.3078434,0,25.4,0,-25.4
0,13.7678668,14.6149568,0,25.4,0,-25.4
0,13.453237,13.94968,0,25.4,0,-25.4
0,13.0748786,13.3184646,0,25.4,0,-25.4
0,12.6365,12.7273558,0,25.4,0,-25.4
0,12.1422922,12.1820686,0,25.4,0,-25.4
0,11.597005,11.6878608,0,25.4,0,-25.4
0,11.0058962,11.2494822,0,25.4,0,-25.4
0,10.3746808,10.8711492,0,25.4,0,-25.4
0,9.7094294,10.556494,0,25.4,0,-25.4
0,9.0165174,10.3085646,0,25.4,0,-25.4
0,8.3026504,10.1297486,0,25.4,0,-25.4
0,7.5746864,10.0217732,0,25.4,0,-25.4
0,6.8396612,9.9856544,0,25.4,0,-25.4
0,6.1046106,10.0217732,0,25.4,0,-25.4
0,5.376672,10.1297486,0,25.4,0,-25.4
0,4.662805,10.3085646,0,25.4,0,-25.4
0,3.969893,10.556494,0,25.4,0,-25.4
0,3.3046416,10.8711492,0,25.4,0,-25.4
0,2.6734008,11.2494822,0,25.4,0,-25.4
0,2.0823174,11.6878608,0,25.4,0,-25.4
0,1.5370302,12.1820686,0,25.4,0,-25.4
0,1.0428224,12.7273558,0,25.4,0,-25.4
0,0.6044184,13.3184646,0,25.4,0,-25.4
0,0.2260854,13.94968,0,25.4,0,-25.4
0,13.7678668,20.3544678,0,25.4,0,-25.4
0,14.0157962,19.6615558,0,25.4,0,-25.4
0,14.1946122,18.9476888,0,25.4,0,-25.4
0,14.3025876,18.2197502,0,25.4,0,-25.4
0,14.3387064,17.4846996,0,25.4,0,-25.4
0,25.3114302,14.6149568,0,25.4,0,-25.4
0,25.0635262,15.3078434,0,25.4,0,-25.4
0,24.8847102,16.0217104,0,25.4,0,-25.4
0,24.7767094,16.7496744,0,25.4,0,-25.4
0,24.740616,17.4846996,0,25.4,0,-25.4
0,24.7767094,18.2197502,0,25.4,0,-25.4
0,24.8847102,18.9476888,0,25.4,0,-25.4
0,25.0635262,19.6615558,0,25.4,0,-25.4
0,25.3114302,20.3544678,0,25.4,0,-25.4
0,24.090884,18.4701434,0,25.4,0,-25.4
0,23.984585,17.9130198,0,25.4,0,-25.4
0,23.809325,17.3736,0,25.4,0,-25.4
0,23.5678472,16.860393,0,25.4,0,-25.4
0,23.2639362,16.3815014,0,25.4,0,-25.4
0,22.9023926,15.9444944,0,25.4,0,-25.4
0,22.4889314,15.55623,0,25.4,0,-25.4
0,22.0300804,15.222855,0,25.4,0,-25.4
0,21.5330532,14.9496018,0,25.4,0,-25.4
0,21.0056984,14.7408138,0,25.4,0,-25.4
0,20.4563472,14.5997676,0,25.4,0,-25.4
0,19.8936356,14.528673,0,25.4,0,-25.4
0,19.3264536,14.528673,0,25.4,0,-25.4
0,18.7637674,14.5997676,0,25.4,0,-25.4
0,15.6522674,21.2120226,0,25.4,0,-25.4
0,15.9561784,21.6908888,0,25.4,0,-25.4
0,16.317722,22.1279212,0,25.4,0,-25.4
0,16.7311578,22.5161856,0,25.4,0,-25.4
0,17.1900342,22.8495606,0,25.4,0,-25.4
0,17.687036,23.1227884,0,25.4,0,-25.4
0,18.2143908,23.3315764,0,25.4,0,-25.4
0,18.7637674,23.472648,0,25.4,0,-25.4
0,19.3264536,23.5437172,0,25.4,0,-25.4
0,19.8936356,23.5437172,0,25.4,0,-25.4
0,20.4563472,23.472648,0,25.4,0,-25.4
0,21.0056984,23.3315764,0,25.4,0,-25.4
0,21.5330532,23.1227884,0,25.4,0,-25.4
0,22.0300804,22.8495606,0,25.4,0,-25.4
0,22.4889314,22.5161856,0,25.4,0,-25.4
0,22.9023926,22.1279212,0,25.4,0,-25.4
0,23.2639362,21.6908888,0,25.4,0,-25.4
0,23.5678472,21.2120226,0,25.4,0,-25.4
0,23.809325,20.6988156,0,25.4,0,-25.4
0,23.984585,20.1593958,0,25.4,0,-25.4
0,24.090884,19.6022722,0,25.4,0,-25.4
0,24.1264948,19.0362078,0,25.4,0,-25.4
0,24.5626128,6.3729108,0,25.4,0,-25.4
0,24.469344,5.7441084,0,25.4,0,-25.4
0,24.3148866,5.127498,0,25.4,0,-25.4
0,24.1007392,4.5289978,0,25.4,0,-25.4
0,23.8289592,3.9543482,0,25.4,0,-25.4
0,23.5021628,3.4091372,0,25.4,0,-25.4
0,23.1234996,2.8985464,0,25.4,0,-25.4
0,22.6966018,2.4275542,0,25.4,0,-25.4
0,22.2256096,2.0006564,0,25.4,0,-25.4
0,21.7150442,1.6219932,0,25.4,0,-25.4
0,21.1698078,1.2951968,0,25.4,0,-25.4
0,20.5951836,1.0234168,0,25.4,0,-25.4
0,19.996658,0.8092694,0,25.4,0,-25.4
0,19.3800476,0.654812,0,25.4,0,-25.4
0,18.7512706,0.5615432,0,25.4,0,-25.4
0,18.7512706,13.4540752,0,25.4,0,-25.4
0,19.3800476,13.3608064,0,25.4,0,-25.4
0,19.996658,13.206349,0,25.4,0,-25.4
0,20.5951836,12.9922016,0,25.4,0,-25.4
0,21.1698078,12.7204216,0,25.4,0,-25.4
0,21.7150442,12.3936252,0,25.4,0,-25.4
0,22.2256096,12.0149366,0,25.4,0,-25.4
0,22.6966018,11.5880642,0,25.4,0,-25.4
0,23.1234996,11.117072,0,25.4,0,-25.4
0,23.5021628,10.6064812,0,25.4,0,-25.4
0,23.8289592,10.0612702,0,25.4,0,-25.4
0,24.1007392,9.4866206,0,25.4,0,-25.4
0,24.3148866,8.8881204,0,25.4,0,-25.4
0,24.469344,8.2714846,0,25.4,0,-25.4
0,24.5626128,7.6427076,0,25.4,0,-25.4
0,24.593804,7.0078092,0,25.4,0,-25.4
0,12.6365,22.2420434,0,25.4,0,-25.4
0,13.0748786,21.65096,0,25.4,0,-25.4
0,13.453237,21.0197446,0,25.4,0,-25.4
0,0.2260854,21.0197446,0,25.4,0,-25.4
0,0.6044184,21.65096,0,25.4,0,-25.4
0,1.0428224,22.2420434,0,25.4,0,-25.4
0,1.5370302,22.7873306,0,25.4,0,-25.4
0,2.0823174,23.2815638,0,25.4,0,-25.4
0,2.6734008,23.7199424,0,25.4,0,-25.4
0,3.3046416,24.0982754,0,25.4,0,-25.4
0,3.969893,24.4129306,0,25.4,0,-25.4
0,4.662805,24.66086,0,25.4,0,-25.4
0,5.376672,24.839676,0,25.4,0,-25.4
0,6.1046106,24.9476514,0,25.4,0,-25.4
0,6.8396612,24.9837448,0,25.4,0,-25.4
0,7.5746864,24.9476514,0,25.4,0,-25.4
0,8.3026504,24.839676,0,25.4,0,-25.4
0,9.0165174,24.66086,0,25.4,0,-25.4
0,9.7094294,24.4129306,0,25.4,0,-25.4
0,10.3746808,24.0982754,0,25.4,0,-25.4
0,11.0058962,23.7199424,0,25.4,0,-25.4
0,11.597005,23.2815638,0,25.4,0,-25.4
0,12.1422922,22.7873306,0,25.4,0,-25.4
`));m(d.ParsePatFile(`
*CELTIC-01,CELTIC PATTERN 01
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
135,9.144,10.72444439,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.72444439,9.934222194,17.96051221,17.96051221,6.565564974,-29.35545945
315,9.934222194,14.67555561,17.96051221,17.96051221,2.235085954,-33.68593847
315,7.662333418,16.15722219,17.96051221,17.96051221,6.565564974,-29.35545945
225,19.31811122,10.82322219,17.96051221,17.96051221,2.235085954,-33.68593847
225,21.98511122,12.7,17.96051221,17.96051221,7.124336526,-28.7966879
225,21.68877781,8.452555612,17.96051221,17.96051221,2.235085954,-33.68593847
225,25.146,12.7,17.96051221,17.96051221,9.35942248,-26.56160194
225,19.31811122,18.52788878,17.96051221,17.96051221,2.235085954,-33.68593847
225,21.68877781,16.15722219,17.96051221,17.96051221,2.235085954,-33.68593847
90,25.146,22.91091405,0,25.4,2.235085954,-23.16491405
0,22.91091405,22.35214249,0,25.4,2.235085954,-23.16491405
0,21.33046966,22.91091405,0,25.4,3.815530342,-21.58446966
0,20.40466658,25.146,0,25.4,4.741333418,-20.65866658
90,22.91091405,21.33046966,0,25.4,1.021672836,-24.37832716
90,25.146,20.40466658,0,25.4,1.947475912,-23.45252409
180,2.489085954,25.146,0,25.4,2.235085954,-23.16491405
90,3.047857506,22.91091405,0,25.4,2.235085954,-23.16491405
90,2.489085954,21.33046966,0,25.4,3.815530342,-21.58446966
90,0.254,20.40466658,0,25.4,4.741333418,-20.65866658
180,4.069530342,22.91091405,0,25.4,1.021672836,-24.37832716
180,4.995333418,25.146,0,25.4,1.947475912,-23.45252409
270,0.254,2.489085954,0,25.4,2.235085954,-23.16491405
180,2.489085954,3.047857506,0,25.4,2.235085954,-23.16491405
180,4.069530342,2.489085954,0,25.4,3.815530342,-21.58446966
180,4.995333418,0.254,0,25.4,4.741333418,-20.65866658
270,2.489085954,4.069530342,0,25.4,1.021672836,-24.37832716
270,0.254,4.995333418,0,25.4,1.947475912,-23.45252409
45,17.83644439,13.09511122,17.96051221,17.96051221,10.3372727,-25.58375198
45,13.09511122,7.563555612,17.96051221,17.96051221,2.235085954,-33.68593847
45,10.82322219,6.081888776,17.96051221,17.96051221,6.565564974,-29.35545945
45,4.995333418,0.254,17.96051221,17.96051221,4.889250572,-31.03177385
45,16.256,14.67555561,17.96051221,17.96051221,9.41146962,-26.5095548
45,10.72444439,9.934222194,17.96051221,17.96051221,2.235085954,-33.68593847
45,9.242777806,7.662333418,17.96051221,17.96051221,6.565564974,-29.35545945
45,4.069530342,2.489085954,17.96051221,17.96051221,3.96344775,-31.95757693
45,16.94744439,21.68877781,17.96051221,17.96051221,4.889250572,-31.03177385
45,10.72444439,16.256,17.96051221,17.96051221,2.235085954,-33.68593847
45,3.711222194,9.242777806,17.96051221,17.96051221,2.235085954,-33.68593847
45,9.934222194,14.67555561,17.96051221,17.96051221,6.565564974,-29.35545945
45,0.254,4.995333418,17.96051221,17.96051221,10.3372727,-25.58375198
45,18.52788878,20.10833342,17.96051221,17.96051221,3.96344775,-31.95757693
45,6.081888776,6.872111224,17.96051221,17.96051221,2.235085954,-33.68593847
45,13.09511122,13.88533342,17.96051221,17.96051221,2.235085954,-33.68593847
45,11.51466658,13.09511122,17.96051221,17.96051221,6.565564974,-29.35545945
45,2.489085954,4.069530342,17.96051221,17.96051221,9.41146962,-26.5095548
0,22.91091405,0.254,0,25.4,2.235085954,-23.16491405
135,17.83644439,13.09511122,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.82322219,20.10833342,17.96051221,17.96051221,2.235085954,-33.68593847
135,12.30488878,17.83644439,17.96051221,17.96051221,10.3372727,-25.58375198
135,19.31811122,10.82322219,17.96051221,17.96051221,6.565564974,-29.35545945
135,25.146,4.995333418,17.96051221,17.96051221,4.889250572,-31.03177385
135,8.452555612,17.73766658,17.96051221,17.96051221,2.235085954,-33.68593847
135,10.72444439,16.256,17.96051221,17.96051221,9.41146962,-26.5095548
135,15.46577781,10.72444439,17.96051221,17.96051221,2.235085954,-33.68593847
135,17.73766658,9.242777806,17.96051221,17.96051221,6.565564974,-29.35545945
135,22.91091405,4.069530342,17.96051221,17.96051221,3.96344775,-31.95757693
135,16.15722219,3.711222194,17.96051221,17.96051221,2.235085954,-33.68593847
135,3.711222194,16.94744439,17.96051221,17.96051221,4.889250572,-31.03177385
135,20.40466658,0.254,17.96051221,17.96051221,10.3372727,-25.58375198
135,18.52788878,6.081888776,17.96051221,17.96051221,2.235085954,-33.68593847
135,5.291666582,18.52788878,17.96051221,17.96051221,3.96344775,-31.95757693
135,21.33046966,2.489085954,17.96051221,17.96051221,9.41146962,-26.5095548
270,22.35214249,2.489085954,0,25.4,2.235085954,-23.16491405
270,22.91091405,4.069530342,0,25.4,3.815530342,-21.58446966
270,25.146,4.995333418,0,25.4,4.741333418,-20.65866658
0,21.33046966,2.489085954,0,25.4,1.021672836,-24.37832716
0,20.40466658,0.254,0,25.4,1.947475912,-23.45252409
135,25.146,12.7,17.96051221,17.96051221,4.889250572,-31.03177385
45,12.7,0.254,17.96051221,17.96051221,4.889250572,-31.03177385
315,6.872111224,5.291666582,17.96051221,17.96051221,2.235085954,-33.68593847
315,6.081888776,6.872111224,17.96051221,17.96051221,9.35942248,-26.56160194
315,0.254,12.7,17.96051221,17.96051221,4.889250572,-31.03177385
225,5.291666582,18.52788878,17.96051221,17.96051221,2.235085954,-33.68593847
225,6.872111224,19.31811122,17.96051221,17.96051221,9.35942248,-26.56160194
225,12.7,25.146,17.96051221,17.96051221,4.889250572,-31.03177385
135,18.52788878,20.10833342,17.96051221,17.96051221,2.235085954,-33.68593847
135,19.31811122,18.52788878,17.96051221,17.96051221,9.35942248,-26.56160194
135,21.98511122,12.7,17.96051221,17.96051221,2.654164618,-33.26685981
45,12.7,3.414888776,17.96051221,17.96051221,2.654164618,-33.26685981
315,9.242777806,7.662333418,17.96051221,17.96051221,2.235085954,-33.68593847
315,7.662333418,8.452555612,17.96051221,17.96051221,7.124336526,-28.7966879
315,3.414888776,12.7,17.96051221,17.96051221,2.654164618,-33.26685981
225,7.662333418,16.15722219,17.96051221,17.96051221,2.235085954,-33.68593847
225,8.452555612,17.73766658,17.96051221,17.96051221,7.124336526,-28.7966879
225,12.7,21.98511122,17.96051221,17.96051221,2.654164618,-33.26685981
135,16.15722219,17.73766658,17.96051221,17.96051221,2.235085954,-33.68593847
135,17.73766658,16.94744439,17.96051221,17.96051221,7.124336526,-28.7966879
`));m(d.ParsePatFile(`
*CELTIC-02,CELTIC PATTERN 02
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern,,,,,,
180,11.1371634,0.392662664,0,25.4,3.125672946,-22.27432705
270,25.00733734,11.1371634,0,25.4,3.125672946,-22.27432705
270,0.392662664,17.38850955,0,25.4,3.125672946,-22.27432705
180,17.38850955,25.00733734,0,25.4,3.125672946,-22.27432705
90,25.00733734,11.9185817,0,25.4,13.08875564,-12.31124436
270,25.00733734,7.230072408,0,25.4,6.837409744,-18.56259026
180,11.1371634,7.230072408,0,25.4,3.125672946,-22.27432705
180,13.4814183,8.011490454,0,25.4,9.18166439,-16.21833561
0,8.011490454,11.9185817,0,25.4,3.125672946,-22.27432705
0,4.29975391,11.1371634,0,25.4,9.18166439,-16.21833561
270,21.10024609,17.38850955,0,25.4,3.125672946,-22.27432705
270,21.88166439,21.88166439,0,25.4,9.96308269,-15.43691731
270,13.4814183,25.00733734,0,25.4,3.125672946,-22.27432705
270,18.16992759,25.00733734,0,25.4,3.125672946,-22.27432705
90,17.38850955,18.16992759,0,25.4,6.837409744,-18.56259026
90,18.16992759,8.011490454,0,25.4,3.125672946,-22.27432705
90,17.38850955,4.29975391,0,25.4,9.18166439,-16.21833561
90,14.2628366,18.16992759,0,25.4,6.837409744,-18.56259026
90,13.4814183,8.011490454,0,25.4,3.125672946,-22.27432705
90,14.2628366,4.29975391,0,25.4,9.18166439,-16.21833561
90,7.230072408,14.2628366,0,25.4,3.125672946,-22.27432705
90,7.230072408,0.392662664,0,25.4,3.125672946,-22.27432705
90,8.011490454,11.9185817,0,25.4,9.18166439,-16.21833561
90,8.011490454,0.392662664,0,25.4,6.837409744,-18.56259026
90,11.9185817,0.392662664,0,25.4,3.125672946,-22.27432705
90,11.9185817,14.2628366,0,25.4,3.125672946,-22.27432705
90,11.1371634,11.9185817,0,25.4,9.18166439,-16.21833561
90,11.1371634,0.392662664,0,25.4,6.837409744,-18.56259026
180,17.38850955,18.16992759,0,25.4,3.125672946,-22.27432705
180,3.51833561,18.16992759,0,25.4,3.125672946,-22.27432705
180,7.230072408,17.38850955,0,25.4,6.837409744,-18.56259026
180,21.10024609,17.38850955,0,25.4,9.18166439,-16.21833561
180,3.51833561,13.4814183,0,25.4,3.125672946,-22.27432705
180,7.230072408,14.2628366,0,25.4,6.837409744,-18.56259026
180,17.38850955,13.4814183,0,25.4,3.125672946,-22.27432705
180,21.10024609,14.2628366,0,25.4,9.18166439,-16.21833561
180,25.00733734,7.230072408,0,25.4,3.125672946,-22.27432705
180,25.00733734,8.011490454,0,25.4,6.837409744,-18.56259026
180,25.00733734,11.9185817,0,25.4,3.125672946,-22.27432705
180,25.00733734,11.1371634,0,25.4,6.837409744,-18.56259026
180,25.00733734,25.00733734,0,25.4,6.837409744,-18.56259026
0,11.9185817,0.392662664,0,25.4,13.08875564,-12.31124436
0,0.392662664,0.392662664,0,25.4,6.837409744,-18.56259026
270,0.392662664,13.4814183,0,25.4,13.08875564,-12.31124436
270,0.392662664,25.00733734,0,25.4,6.837409744,-18.56259026
180,13.4814183,25.00733734,0,25.4,13.08875564,-12.31124436
180,21.88166439,21.88166439,0,25.4,3.711736544,-21.68826346
90,21.88166439,3.51833561,0,25.4,3.711736544,-21.68826346
0,14.2628366,4.29975391,0,25.4,3.125672946,-22.27432705
0,11.9185817,3.51833561,0,25.4,9.96308269,-15.43691731
0,3.51833561,3.51833561,0,25.4,3.711736544,-21.68826346
270,4.29975391,11.1371634,0,25.4,3.125672946,-22.27432705
270,3.51833561,13.4814183,0,25.4,9.96308269,-15.43691731
270,3.51833561,21.88166439,0,25.4,3.711736544,-21.68826346
180,11.1371634,21.10024609,0,25.4,3.125672946,-22.27432705
180,13.4814183,21.88166439,0,25.4,9.96308269,-15.43691731
`));m(d.ParsePatFile(`
*CELTIC-03,CELTIC-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,6.35,13.97,0,25.4,5.08,-20.32
90,19.05,6.35,0,25.4,5.08,-20.32
0,6.35,6.35,0,25.4,12.7,-12.7
270,6.35,11.43,0,25.4,5.08,-20.32
90,3.81,3.81,0,25.4,7.62,-17.78
180,21.59,3.81,0,25.4,17.78,-7.62
270,21.59,11.43,0,25.4,7.62,-17.78
270,21.59,21.59,0,25.4,7.62,-17.78
0,3.81,21.59,0,25.4,17.78,-7.62
90,3.81,13.97,0,25.4,7.62,-17.78
270,19.05,19.05,0,25.4,5.08,-20.32
0,6.35,19.05,0,25.4,12.7,-12.7
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`));m(d.ParsePatFile(`
*CELTIC-04,CELTIC-04
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,3.81,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
135,21.59,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
45,12.7,2.54,17.960512212,17.960512212,12.57235865,-23.348666028
315,3.81,11.43,17.960512212,17.960512212,12.57235865,-23.348666028
135,12.7,5.08,17.960512212,17.960512212,8.980256106,-26.940768318
225,19.05,11.43,17.960512212,17.960512212,8.980256106,-26.940768318
315,12.7,20.32,17.960512212,17.960512212,8.980256106,-26.940768318
45,6.35,13.97,17.960512212,17.960512212,8.980256106,-26.940768318
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`));m(d.ParsePatFile(`
*CIRCLES-02,CIRCLES-02
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,24.3609368,11.9663464,0,25.4,0,-25.4
0,24.2918742,11.2356138,0,25.4,0,-25.4
0,24.1770408,10.510647,0,25.4,0,-25.4
0,24.0169192,9.7943162,0,25.4,0,-25.4
0,23.8121444,9.0894408,0,25.4,0,-25.4
0,23.5635038,8.3988402,0,25.4,0,-25.4
0,23.271988,7.7252068,0,25.4,0,-25.4
0,22.9387654,7.0711822,0,25.4,0,-25.4
0,22.5651314,6.439408,0,25.4,0,-25.4
0,22.1525592,5.8323226,0,25.4,0,-25.4
0,21.7026744,5.252339,0,25.4,0,-25.4
0,21.2172804,4.7017432,0,25.4,0,-25.4
0,20.6982568,4.1827196,0,25.4,0,-25.4
0,20.147661,3.6973256,0,25.4,0,-25.4
0,19.5676774,3.2474408,0,25.4,0,-25.4
0,18.960592,2.8348686,0,25.4,0,-25.4
0,18.3288178,2.4612346,0,25.4,0,-25.4
0,17.6747932,2.128012,0,25.4,0,-25.4
0,17.0011598,1.8364962,0,25.4,0,-25.4
0,16.3105592,1.5878556,0,25.4,0,-25.4
0,15.6056838,1.3830808,0,25.4,0,-25.4
0,14.889353,1.2229592,0,25.4,0,-25.4
0,14.1643862,1.1081258,0,25.4,0,-25.4
0,13.4336536,1.0390632,0,25.4,0,-25.4
0,12.7,1.016,0,25.4,0,-25.4
0,11.9663464,1.0390632,0,25.4,0,-25.4
0,11.2356138,1.1081258,0,25.4,0,-25.4
0,10.510647,1.2229592,0,25.4,0,-25.4
0,9.7943162,1.3830808,0,25.4,0,-25.4
0,9.0894408,1.5878556,0,25.4,0,-25.4
0,8.3988402,1.8364962,0,25.4,0,-25.4
0,7.7252068,2.128012,0,25.4,0,-25.4
0,7.0711822,2.4612346,0,25.4,0,-25.4
0,6.439408,2.8348686,0,25.4,0,-25.4
0,5.8323226,3.2474408,0,25.4,0,-25.4
0,5.252339,3.6973256,0,25.4,0,-25.4
0,4.7017432,4.1827196,0,25.4,0,-25.4
0,4.1827196,4.7017432,0,25.4,0,-25.4
0,3.6973256,5.252339,0,25.4,0,-25.4
0,3.2474408,5.8323226,0,25.4,0,-25.4
0,2.8348686,6.439408,0,25.4,0,-25.4
0,2.4612346,7.0711822,0,25.4,0,-25.4
0,2.128012,7.7252068,0,25.4,0,-25.4
0,1.8364962,8.3988402,0,25.4,0,-25.4
0,1.5878556,9.0894408,0,25.4,0,-25.4
0,1.3830808,9.7943162,0,25.4,0,-25.4
0,1.2229592,10.510647,0,25.4,0,-25.4
0,1.1081258,11.2356138,0,25.4,0,-25.4
0,1.0390632,11.9663464,0,25.4,0,-25.4
0,1.016,12.7,0,25.4,0,-25.4
0,1.0390632,13.4336536,0,25.4,0,-25.4
0,1.1081258,14.1643862,0,25.4,0,-25.4
0,1.2229592,14.889353,0,25.4,0,-25.4
0,1.3830808,15.6056838,0,25.4,0,-25.4
0,1.5878556,16.3105592,0,25.4,0,-25.4
0,1.8364962,17.0011598,0,25.4,0,-25.4
0,2.128012,17.6747932,0,25.4,0,-25.4
0,2.4612346,18.3288178,0,25.4,0,-25.4
0,2.8348686,18.960592,0,25.4,0,-25.4
0,3.2474408,19.5676774,0,25.4,0,-25.4
0,3.6973256,20.147661,0,25.4,0,-25.4
0,4.1827196,20.6982568,0,25.4,0,-25.4
0,4.7017432,21.2172804,0,25.4,0,-25.4
0,5.252339,21.7026744,0,25.4,0,-25.4
0,5.8323226,22.1525592,0,25.4,0,-25.4
0,6.439408,22.5651314,0,25.4,0,-25.4
0,7.0711822,22.9387654,0,25.4,0,-25.4
0,7.7252068,23.271988,0,25.4,0,-25.4
0,8.3988402,23.5635038,0,25.4,0,-25.4
0,9.0894408,23.8121444,0,25.4,0,-25.4
0,9.7943162,24.0169192,0,25.4,0,-25.4
0,10.510647,24.1770408,0,25.4,0,-25.4
0,11.2356138,24.2918742,0,25.4,0,-25.4
0,11.9663464,24.3609368,0,25.4,0,-25.4
0,12.7,24.384,0,25.4,0,-25.4
0,13.4336536,24.3609368,0,25.4,0,-25.4
0,14.1643862,24.2918742,0,25.4,0,-25.4
0,14.889353,24.1770408,0,25.4,0,-25.4
0,15.6056838,24.0169192,0,25.4,0,-25.4
0,16.3105592,23.8121444,0,25.4,0,-25.4
0,17.0011598,23.5635038,0,25.4,0,-25.4
0,17.6747932,23.271988,0,25.4,0,-25.4
0,18.3288178,22.9387654,0,25.4,0,-25.4
0,18.960592,22.5651314,0,25.4,0,-25.4
0,19.5676774,22.1525592,0,25.4,0,-25.4
0,20.147661,21.7026744,0,25.4,0,-25.4
0,20.6982568,21.2172804,0,25.4,0,-25.4
0,21.2172804,20.6982568,0,25.4,0,-25.4
0,21.7026744,20.147661,0,25.4,0,-25.4
0,22.1525592,19.5676774,0,25.4,0,-25.4
0,22.5651314,18.960592,0,25.4,0,-25.4
0,22.9387654,18.3288178,0,25.4,0,-25.4
0,23.271988,17.6747932,0,25.4,0,-25.4
0,23.5635038,17.0011598,0,25.4,0,-25.4
0,23.8121444,16.3105592,0,25.4,0,-25.4
0,24.0169192,15.6056838,0,25.4,0,-25.4
0,24.1770408,14.889353,0,25.4,0,-25.4
0,24.2918742,14.1643862,0,25.4,0,-25.4
0,24.3609368,13.4336536,0,25.4,0,-25.4
0,24.384,12.7,0,25.4,0,-25.4
`));m(d.ParsePatFile(`
*CIRCLES,CIRCLES
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,23.7384082,10.9516926,0,25.4,0,-25.4
0,23.329011,9.2464382,0,25.4,0,-25.4
0,22.6578922,7.6261976,0,25.4,0,-25.4
0,21.7415618,6.1308996,0,25.4,0,-25.4
0,20.6026258,4.7973742,0,25.4,0,-25.4
0,19.2691004,3.6584382,0,25.4,0,-25.4
0,17.7738024,2.7421078,0,25.4,0,-25.4
0,16.1535618,2.070989,0,25.4,0,-25.4
0,14.4483074,1.6615918,0,25.4,0,-25.4
0,12.7,1.524,0,25.4,0,-25.4
0,10.9516926,1.6615918,0,25.4,0,-25.4
0,9.2464382,2.070989,0,25.4,0,-25.4
0,7.6261976,2.7421078,0,25.4,0,-25.4
0,6.1308996,3.6584382,0,25.4,0,-25.4
0,4.7973742,4.7973742,0,25.4,0,-25.4
0,3.6584382,6.1308996,0,25.4,0,-25.4
0,2.7421078,7.6261976,0,25.4,0,-25.4
0,2.070989,9.2464382,0,25.4,0,-25.4
0,1.6615918,10.9516926,0,25.4,0,-25.4
0,1.524,12.7,0,25.4,0,-25.4
0,1.6615918,14.4483074,0,25.4,0,-25.4
0,2.070989,16.1535618,0,25.4,0,-25.4
0,2.7421078,17.7738024,0,25.4,0,-25.4
0,3.6584382,19.2691004,0,25.4,0,-25.4
0,4.7973742,20.6026258,0,25.4,0,-25.4
0,6.1308996,21.7415618,0,25.4,0,-25.4
0,7.6261976,22.6578922,0,25.4,0,-25.4
0,9.2464382,23.329011,0,25.4,0,-25.4
0,10.9516926,23.7384082,0,25.4,0,-25.4
0,12.7,23.876,0,25.4,0,-25.4
0,14.4483074,23.7384082,0,25.4,0,-25.4
0,16.1535618,23.329011,0,25.4,0,-25.4
0,17.7738024,22.6578922,0,25.4,0,-25.4
0,19.2691004,21.7415618,0,25.4,0,-25.4
0,20.6026258,20.6026258,0,25.4,0,-25.4
0,21.7415618,19.2691004,0,25.4,0,-25.4
0,22.6578922,17.7738024,0,25.4,0,-25.4
0,23.329011,16.1535618,0,25.4,0,-25.4
0,23.7384082,14.4483074,0,25.4,0,-25.4
0,23.876,12.7,0,25.4,0,-25.4
`));m(d.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,4.7625
0, 0,.79375, 0,4.7625
0, 0,1.5875, 0,4.7625
0, 0,3.175, 0,4.7625, 4.7625,-3.175
`));m(d.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,3.175
135, 1.5875,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 2.38125,-1.5875, 0,8.98026, 4.49013,-4.49013
135, 3.175,-1.5875, 0,8.98026, 4.49013,-4.49013
`));m(d.ParsePatFile(`
*CROSS,CROSS
0, 0,0, 6.35,6.35, 3.175,-9.525
90, 1.5875,-1.5875, 6.35,6.35, 3.175,-9.525
`));m(d.ParsePatFile(`
*DASH,DASH
0, 0,0, 3.175,3.175, 3.175,-3.175
`));m(d.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,6.35
45, 0,0, 0,17.9605, 8.98026,-17.9605
`));m(d.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .79375,1.5875, 0,-1.5875
`));m(d.ParsePatFile(`
*EARTH,EARTH
0, 0,0, 6.35,6.35, 6.35,-6.35
0, 0,2.38125, 6.35,6.35, 6.35,-6.35
0, 0,4.7625, 6.35,6.35, 6.35,-6.35
90, .79375,5.55625, 6.35,6.35, 6.35,-6.35
90, 3.175,5.55625, 6.35,6.35, 6.35,-6.35
90, 5.55625,5.55625, 6.35,6.35, 6.35,-6.35
`));m(d.ParsePatFile(`
*ESCHER,ESCHER
60, 0,0, -15.24,26.3965, 27.94,-2.54
180, 0,0, -15.24,26.3965, 27.94,-2.54
300, 0,0, 15.24,26.3965, 27.94,-2.54
60, 2.54,0, -15.24,26.3965, 5.08,-25.4
300, 2.54,0, 15.24,26.3965, 5.08,-25.4
60, -1.27,2.1997, -15.24,26.3965, 5.08,-25.4
180, -1.27,2.1997, -15.24,26.3965, 5.08,-25.4
300, -1.27,-2.1997, 15.24,26.3965, 5.08,-25.4
180, -1.27,-2.1997, -15.24,26.3965, 5.08,-25.4
60, -10.16,0, -15.24,26.3965, 5.08,-25.4
300, -10.16,0, 15.24,26.3965, 5.08,-25.4
60, 5.08,-8.79882, -15.24,26.3965, 5.08,-25.4
180, 5.08,-8.79882, -15.24,26.3965, 5.08,-25.4
300, 5.08,8.79882, 15.24,26.3965, 5.08,-25.4
180, 5.08,8.79882, -15.24,26.3965, 5.08,-25.4
0, 5.08,4.39941, -15.24,26.3965, 17.78,-12.7
0, 5.08,-4.39941, -15.24,26.3965, 17.78,-12.7
120, 1.27,6.59911, 15.24,26.3965, 17.78,-12.7
120, -6.35,2.1997, 15.24,26.3965, 17.78,-12.7
240, -6.35,-2.1997, 15.24,26.3965, 17.78,-12.7
240, 1.27,-6.59911, 15.24,26.3965, 17.78,-12.7
`));m(d.ParsePatFile(`
*EXPLOSION,EXPLOSION
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
270,11.43,2.794,0,25.4,2.794,-22.606
143.130102,12.446,2.032,91.44,5.08,1.27,-125.73
270,12.446,4.318,0,25.4,2.286,-23.114
112.380135,14.224,0,330.1971097,1.381577882,4.669733104,-462.3035852
75.256437,12.954,20.574,104.7189028,1.292825964,4.990308282,-494.0405126
287.525568,11.43,25.4,80.31173574,1.274789424,5.060914186,-501.0305006
135,1.524,12.446,17.96051221,17.96051221,2.155261374,-33.76576305
26.565051,0,11.684,34.07767607,11.35922544,1.703883816,-55.09224288
353.884496,18.288,12.446,485.2654803,0.901980416,7.152705024,-708.1177892
192.094757,25.4,13.97,234.1697095,1.774012962,7.273453068,-356.3992019
3.691386,17.526,9.652,381.8448525,0.817654956,7.890370046,-781.1466379
136.080924,24.384,3.048,916.1619403,0.677634662,9.52076582,-942.5558068
336.037511,22.098,4.064,193.4234445,2.578979348,2.501609932,-247.6593782
123.690068,24.638,0.254,35.22346245,7.04469254,4.579050024,-87.00195223
324.462322,15.748,6.604,91.53339072,2.952690056,10.924953,-207.5741086
117.645975,18.542,1.27,545.3600756,1.07143423,6.021460906,-596.1246343
326.309932,13.97,4.318,56.35753981,7.04469254,5.494860232,-86.08614228
106.38954,15.24,0,265.1799113,1.433404804,4.50089143,-445.5882554
153.434949,3.048,8.636,22.71845063,11.35922544,3.407767632,-53.38835906
64.798876,1.016,4.318,420.4426387,1.351905602,4.772226676,-472.4504468
202.619865,4.064,5.588,193.4307693,1.953846232,3.302,-326.898
59.036243,2.54,3.048,56.62883289,4.356064186,2.962123616,-145.1440546
211.75948,7.874,6.35,239.620914,1.028416028,6.273337212,-621.0603858
79.215702,6.858,1.016,413.4803361,1.188161962,5.429899732,-537.5600816
212.471192,9.652,2.794,91.56028043,1.9480911,3.31175487,-327.8637273
63.434949,8.89,1.27,22.71845063,11.35922544,1.703883816,-55.09224288
135,10.16,0,17.96051221,17.96051221,1.796051272,-34.12497315
74.357754,8.382,19.05,474.5101503,0.978371424,6.59422354,-652.8281297
333.434949,0.762,22.86,22.71845063,11.35922544,8.51941908,-48.27670761
110.556045,4.572,12.7,136.7508764,2.97284521,10.85088483,-206.1668104
330.945396,0,15.24,56.74251999,2.467066186,5.23018004,-256.2788255
99.462322,16.002,20.828,129.4477627,4.175734346,4.635065152,-149.8671031
222.70939,19.304,23.876,35.89232217,1.435692836,4.493718724,-444.8781539
74.744881,18.542,21.082,104.7031863,2.22772732,2.896045516,-286.7085124
208.61046,24.13,24.13,261.5011486,2.027140726,6.365221712,-311.8958659
62.744672,19.812,15.748,56.79200478,0.684240948,9.428841188,-933.4552873
212.275644,24.638,18.796,331.1735533,1.130285268,5.70794007,-565.0860682
55.00798,22.86,16.256,91.55735943,2.080849026,3.100465224,-306.9460475
158.198591,25.4,15.24,80.18324705,4.716661636,2.73566382,-134.0475224
51.911227,14.986,12.954,741.8363621,0.540303212,11.9407018,-1182.12948
153.434949,16.51,12.192,22.71845063,11.35922544,1.703883816,-55.09224288
35.537678,14.732,10.922,126.9656711,2.952690056,2.18499055,-216.3140711
129.289407,19.304,5.334,198.3722919,1.78713765,7.220036614,-353.7817918
322.30576,13.716,9.652,416.5899728,0.9135745,7.061931012,-699.1311588
77.905243,12.954,6.096,129.5029455,1.774012962,3.636726534,-360.0359284
282.994617,12.192,9.398,104.709577,1.903810518,3.388782656,-335.4894845
62.525568,8.89,3.048,56.78897304,0.901412218,7.157213524,-708.564129
267.137595,9.144,8.128,25.36830944,1.268415548,5.086345936,-503.5482576
12.994617,2.54,6.604,104.709577,1.903810518,6.777565312,-332.1007018
211.75948,7.874,9.906,239.620914,1.028416028,6.273337212,-621.0603858
318.366461,5.588,11.938,269.9974641,2.109355192,3.05856513,-302.7979372
189.462322,7.112,12.192,129.4477627,4.175734346,1.545021802,-152.9571465
297.299572,3.048,20.066,829.3009284,0.728095572,8.860923858,-877.231464
132.273689,8.128,14.478,35.8803669,1.708588912,7.551962798,-370.0461832
282.994617,7.366,17.78,104.709577,1.903810518,3.388782656,-335.4894845
140.194429,10.414,15.24,162.6068376,3.252136752,3.967606746,-194.4127349
268.363423,10.668,24.13,25.38963909,0.725418158,8.893627882,-880.4691552
102.200469,12.7,14.732,597.8446202,0.67098164,9.615166444,-951.9014896
250.016893,14.732,20.32,80.29253258,2.170068558,5.9459876,-291.3533901
84.559668,14.224,14.986,280.549586,1.20407557,5.358135842,-530.4554512
222.184443,22.352,22.352,377.597688,0.588158336,10.96915408,-1085.946248
`));m(d.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,6.35, 6.35,-6.35
45, 6.35,0, 4.49013,4.49013, 1.5875,-5.80526,1.5875,-8.98026
`));m(d.ParsePatFile(`
*GRASS,GRASS
90, 0,0, 17.9605,17.9605, 4.7625,-31.1585
45, 0,0, 0,25.4, 4.7625,-20.6375
135, 0,0, 0,25.4, 4.7625,-20.6375
`));m(d.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.79375
90, 0,0, 0,3.175
`));m(d.ParsePatFile(`
*GRAVEL-01,GRAVEL-01
;Optimize to replace existing GRAVEL Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
159.443955,4.064,3.302,80.266818638,2.97284521,4.340353778,-212.677341218
114.775141,5.588,0,56.76841453,1.774012962,3.636726534,-360.03592839
249.443955,8.128,2.032,80.266818638,2.97284521,2.170177016,-214.847518234
186.009006,12.954,2.54,230.002940044,1.329496706,4.852663142,-480.413655376
165.963757,18.034,1.27,24.6416195,6.160405002,5.236344112,-99.490538636
101.309932,18.288,0,104.608346536,4.981349956,1.29515108,-128.219944728
243.434949,21.336,3.556,22.718450626,11.35922544,3.975728904,-52.820397788
355.426079,12.446,3.302,331.173933536,1.012764294,6.370287488,-630.658471472
300.256437,10.668,6.35,148.094892532,1.828332132,3.528680776,-349.33939657
228.012788,15.24,11.43,305.850675318,1.887967014,6.834440992,-334.887609878
180,21.844,11.43,0,25.4,6.604,-18.796
303.690068,15.748,15.748,35.223462446,7.04469254,3.66324007,-87.917762188
225,18.288,18.288,17.960512212,17.960512212,3.592102544,-32.328922134
110.224859,2.032,5.842,217.014069654,1.254416592,5.143108078,-509.167692864
177.273689,7.366,5.588,25.371250756,1.20815481,5.340044184,-528.664375232
217.69424,12.954,9.906,289.603117008,0.9135745,7.061931012,-699.131158758
252.255328,14.986,16.256,586.403737782,0.967663038,6.667197486,-660.05256356
301.429566,12.192,20.828,387.712303314,1.20407557,5.358135842,-530.455451152
355.236358,6.096,21.336,25.312262304,2.109355192,6.117130006,-299.739372326
43.66778,0.508,16.002,35.911314766,0.83514692,7.725108502,-764.785732808
87.273689,0.254,10.668,25.371250756,1.20815481,5.340044184,-528.664375232
30.963757,15.748,18.034,91.477345366,4.356064186,4.443185424,-143.662992836
291.801409,14.732,20.574,56.599939124,4.716661636,2.73566382,-134.047522354
203.198591,16.51,21.336,56.698117744,3.335183322,1.934406342,-191.506230398
161.565051,19.558,20.32,24.09655582,8.032185358,3.212874194,-77.10897837
4.969741,10.16,22.352,280.550012686,1.100196174,5.864045422,-580.540490682
16.38954,0,20.574,265.179911346,1.433404804,4.50089143,-445.58825538
197.354025,25.4,4.826,80.307559222,1.515237,4.25781597,-421.523771378
74.054604,24.13,5.588,104.668749768,3.488958224,3.69829588,-181.216495326
27.645975,18.796,2.794,545.360075648,1.07143423,6.021460906,-596.124634266
145.304846,25.146,9.144,91.566911862,1.60643697,4.016092552,-397.593170268
353.157227,17.78,12.7,434.77679618,1.008762778,6.395556678,-633.160101724
171.469234,23.368,17.526,179.600730968,1.255949228,5.136831992,-508.546377622
138.814075,25.4,15.748,234.164238554,2.389431086,2.700057084,-267.30564649
90,25.4,14.224,0,25.4,1.524,-23.876
60.945396,24.13,11.938,56.742519992,2.467066186,2.61509002,-258.893915536
343.61046,21.082,21.844,184.909235464,1.433404804,4.50089143,-445.58825538
293.198591,19.558,25.4,56.698117744,3.335183322,3.868812684,-189.571824056
48.012788,16.002,22.86,305.850675318,1.887967014,3.417220496,-338.304830374
312.510447,7.366,25.4,35.887120758,1.560309554,4.134820534,-409.347222706
70.346176,4.318,21.844,80.303678102,1.708588912,3.775981526,-373.822164724
`));m(d.ParsePatFile(`
*GRAVEL,GRAVEL
228.0128, 18.288,25.4, 305.851,1.88796, 3.41721,-338.305
184.9697, 16.002,22.86, -305.855,1.1002, 5.86405,-580.54
132.5104, 10.16,22.352, -377.595,1.56032, 4.13482,-409.347
267.2737, .254,16.002, -508.633,1.20815, 5.34005,-528.664
292.8337, 0,10.668, -330.198,1.23208, 5.23634,-518.398
357.2737, 2.032,5.842, -508.633,1.20815, 5.34005,-528.664
37.6942, 7.366,5.588, -416.59,.913587, 7.06194,-699.131
72.2553, 12.954,9.906, 586.404,.967664, 6.6672,-660.053
121.4296, 14.986,16.256, 387.712,1.20409, 5.35813,-530.455
175.2364, 12.192,20.828, -280.544,2.10934, 6.11713,-299.739
222.3974, 6.096,21.336, 413.481,.815543, 7.91078,-783.168
138.8141, 25.4,15.748, 234.164,2.38943, 2.70005,-267.306
171.4692, 23.368,17.526, -334.082,1.25595, 5.13682,-508.546
225, 18.288,18.288, 17.9605,17.9605, 3.59209,-32.3289
203.1986, 16.51,21.336, -136.743,3.33517, 1.93441,-191.506
291.8014, 14.732,20.574, -80.1833,4.71665, 2.73566,-134.048
30.9638, 15.748,18.034, 91.4773,4.35607, 4.4432,-143.663
161.5651, 19.558,20.32, -56.2253,8.03219, 3.21287,-77.109
16.3895, 0,20.574, 265.18,1.4334, 4.50088,-445.588
70.3462, 4.318,21.844, -297.294,1.70858, 3.77599,-373.822
293.1986, 19.558,25.4, -136.743,3.33517, 3.8688,-189.572
343.6105, 21.082,21.844, -265.18,1.4334, 4.50088,-445.588
339.444, 0,4.826, -136.751,2.97284, 4.34035,-212.677
294.7751, 4.064,3.302, -306.904,1.77401, 3.63672,-360.036
66.8014, 19.812,0, 136.743,3.33517, 3.8688,-189.572
17.354, 21.336,3.556, -345.474,1.51524, 4.25783,-421.524
69.444, 7.366,0, -136.751,2.97284, 2.17018,-214.848
101.3099, 18.288,0, 104.608,4.98135, 1.29515,-128.22
165.9638, 18.034,1.27, -80.0853,6.16041, 5.23634,-99.4905
186.009, 12.954,2.54, -255.263,1.32949, 4.85267,-480.414
303.6901, 15.748,15.748, -56.3575,7.04469, 3.66324,-87.9178
353.1572, 17.78,12.7, 434.777,1.00876, 6.39557,-633.16
60.9454, 24.13,11.938, -204.766,2.46708, 2.61508,-258.894
90, 25.4,14.224, 25.4,25.4, 1.524,-23.876
120.2564, 12.446,3.302, -204.773,1.82834, 3.52867,-349.339
48.0128, 10.668,6.35, 305.851,1.88796, 6.83443,-334.888
0, 15.24,11.43, 25.4,25.4, 6.604,-18.796
325.3048, 21.844,11.43, -310.042,1.60645, 4.0161,-397.593
254.0546, 25.146,9.144, 104.669,3.48897, 3.69829,-181.217
207.646, 24.13,5.588, 545.36,1.07142, 6.02145,-596.125
175.4261, 18.796,2.794, 331.174,1.01277, 6.37029,-630.658
175.4261, 18.796,2.794, 331.174,1.01277, 6.37029,-630.658
`));m(d.ParsePatFile(`
*HATCH-DOTS
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
225,14.364914374,2.934914374,17.960512212,17.960512212,11.492295278,-24.428729146
225,6.359242552,5.089242552,17.960512212,17.960512212,16.19060262,-19.730421804
225,3.281299762,9.631299762,17.960512212,17.960512212,18.261173282,-17.659851142
225,19.161365538,5.191365538,17.960512212,17.960512212,11.492295278,-24.428729146
225,7.864421914,4.054421914,17.960512212,17.960512212,16.85579052,-19.065234158
225,2.841461932,11.731461932,17.960512212,17.960512212,20.609227006,-15.311797418
225,9.631299762,3.281299762,17.960512212,17.960512212,18.261173282,-17.659851142
225,2.934914374,14.364914374,17.960512212,17.960512212,11.492295278,-24.428729146
225,5.089242552,6.359242552,17.960512212,17.960512212,16.19060262,-19.730421804
225,11.731462186,2.841462186,17.960512212,17.960512212,20.60922726,-15.311797164
225,5.191365538,19.161365538,17.960512212,17.960512212,11.492295278,-24.428729146
225,4.054421914,7.864421914,17.960512212,17.960512212,16.85579052,-19.065234158
`));m(d.ParsePatFile(`
*HATCH-SQRS
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
225,2.794,9.144,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,21.844,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,6.604,17.960512212,17.960512212,13.290779108,-22.630245316
225,19.304,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,14.224,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,11.684,17.960512212,17.960512212,7.902625292,-28.018399132
225,6.604,2.794,17.960512212,17.960512212,13.290779108,-22.630245316
225,2.794,19.304,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,4.064,17.960512212,17.960512212,9.698676564,-26.22234786
225,4.064,2.794,17.960512212,17.960512212,9.698676564,-26.22234786
225,11.684,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,14.224,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,9.144,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,21.844,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
225,2.794,16.764,17.960512212,17.960512212,7.902625292,-28.018399132
225,16.764,2.794,17.960512212,17.960512212,7.902625292,-28.018399132
`));m(d.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,5.49926, 3.175,-6.35
120, 0,0, 0,5.49926, 3.175,-6.35
60, 3.175,0, 0,5.49926, 3.175,-6.35
`));m(d.ParsePatFile(`
*HEXAGONS
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
239.931417,5.587999746,25.399999492,204.778078632,1.15693825,5.576441984,-552.067817376
239.931417,22.606,4.826,204.778078632,1.15693825,5.576441984,-552.067817376
300.068583,19.812000254,25.399999492,352.866180728,1.15693825,5.576441984,-552.067817376
60.068488,3.048,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
119.931512,7.874,4.318,762.42292397,0.667036766,9.67203171,-957.531152498
300.068583,2.794,4.826,352.866180728,1.15693825,5.576441984,-552.067817376
180,2.794,4.826,0,25.4,5.587998984,-19.812001016
299.931512,17.526,21.082,762.42292397,0.667036766,9.67203171,-957.531152498
0,7.874,21.082,0,25.4,9.652,-15.748
180,17.526,4.318,0,25.4,9.652,-15.748
240.068488,22.352,12.7,204.780260492,0.667036766,9.672031964,-957.531152498
180,2.794,20.574,0,25.4,5.587998984,-19.812001016
`));m(d.ParsePatFile(`
*HEXJOIN-01
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
45,3.81,16.51,17.960512212,17.960512212,7.184204834,-28.73681959
270,21.59,16.51,25.4,25.4,7.62,-17.78
315,16.51,21.59,17.960512212,17.960512212,7.184204834,-28.73681959
180,16.51,3.81,0,25.4,7.62,-17.78
270,13.97,3.81,25.4,25.4,7.62,-17.78
90,3.81,8.89,25.4,25.4,7.62,-17.78
135,8.89,3.81,17.960512212,17.960512212,7.184204834,-28.73681959
180,3.81,13.97,0,25.4,7.62,-17.78
270,11.43,3.81,25.4,25.4,7.62,-17.78
180,3.81,11.43,0,25.4,7.62,-17.78
225,21.59,8.89,17.960512212,17.960512212,7.184204834,-28.73681959
0,8.89,21.59,0,25.4,7.62,-17.78
`));m(d.ParsePatFile(`
*HEXJOIN-02
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
270,21.59,11.43,25.4,25.4,2.54,-22.86
315,16.51,21.59,17.960512212,17.960512212,7.184204834,-28.73681959
270,13.97,3.81,25.4,25.4,7.62,-17.78
180,3.81,13.97,0,25.4,7.62,-17.78
180,16.51,3.81,0,25.4,2.54,-22.86
45,3.81,16.51,17.960512212,17.960512212,7.184204834,-28.73681959
90,3.81,13.97,25.4,25.4,2.54,-22.86
180,3.81,11.43,0,25.4,7.62,-17.78
180,11.43,3.81,0,25.4,2.54,-22.86
270,11.43,3.81,25.4,25.4,7.62,-17.78
90,3.81,8.89,25.4,25.4,2.54,-22.86
0,13.97,21.59,0,25.4,2.54,-22.86
135,8.89,3.81,17.960512212,17.960512212,7.184204834,-28.73681959
0,8.89,21.59,0,25.4,2.54,-22.86
225,21.59,8.89,17.960512212,17.960512212,7.184204834,-28.73681959
270,21.59,16.51,25.4,25.4,2.54,-22.86
`));m(d.ParsePatFile(`
*HOLLY,HOLLY
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
99.462322,20.32,2.794,129.4477627,4.175734346,1.545021802,-152.9571465
74.744881,17.018,2.032,104.7031863,2.22772732,2.896045516,-286.7085124
68.198591,13.462,3.81,80.18324705,4.716661636,2.73566382,-134.0475224
270,14.732,9.398,0,25.4,1.778,-23.622
248.198591,19.05,8.89,80.18324705,4.716661636,2.73566382,-134.0475224
45,20.32,5.08,17.96051221,17.96051221,2.155261374,-33.76576305
351.869898,22.86,3.302,25.14471705,3.592102544,1.796051272,-177.8090711
0,21.844,3.302,0,25.4,1.016,-24.384
26.565051,20.828,2.794,34.07767607,11.35922544,1.135922544,-55.66020415
45,20.32,2.286,17.96051221,17.96051221,0.718420458,-35.20260397
341.565051,19.558,2.54,24.09655582,8.032185358,0.803218612,-79.51863395
0,18.542,2.54,0,25.4,1.016,-24.384
26.565051,18.034,2.286,34.07767607,11.35922544,0.567961272,-56.22816542
26.565051,17.526,2.032,34.07767607,11.35922544,0.567961272,-56.22816542
53.130102,16.764,1.016,91.44,5.08,1.27,-125.73
270,16.764,2.032,0,25.4,1.016,-24.384
303.690068,16.256,2.794,35.22346245,7.04469254,0.915809954,-90.6651923
315,15.748,3.302,17.96051221,17.96051221,0.718420458,-35.20260397
345.963757,14.732,3.556,24.6416195,6.160405002,1.047268924,-103.6796141
0,13.716,3.556,0,25.4,1.016,-24.384
33.690068,12.954,3.048,35.22346245,7.04469254,0.915809954,-90.6651923
255.963757,13.208,4.064,24.6416195,6.160405002,1.047268924,-103.6796141
281.309932,12.954,5.334,104.6083465,4.981349956,1.29515108,-128.2199447
284.036243,12.7,6.35,80.0852635,6.160405002,1.047268924,-103.6796141
296.565051,12.192,7.366,34.07767607,11.35922544,1.135922544,-55.66020415
303.690068,11.684,8.128,35.22346245,7.04469254,0.915809954,-90.6651923
180,12.7,8.128,0,25.4,1.016,-24.384
180,13.462,8.128,0,25.4,0.762,-24.638
213.690068,14.224,8.636,35.22346245,7.04469254,0.915809954,-90.6651923
243.434949,14.478,9.144,22.71845063,11.35922544,0.567961272,-56.22816542
251.565051,14.732,9.906,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,14.986,9.144,56.22529674,8.032185358,0.803218612,-79.51863395
135,15.494,8.636,17.96051221,17.96051221,0.718420458,-35.20260397
153.434949,16.002,8.382,22.71845063,11.35922544,0.567961272,-56.22816542
161.565051,16.764,8.128,24.09655582,8.032185358,0.803218612,-79.51863395
180,17.526,8.128,0,25.4,0.762,-24.638
198.434949,18.288,8.382,56.22529674,8.032185358,0.803218612,-79.51863395
225,18.796,8.89,17.96051221,17.96051221,0.718420458,-35.20260397
251.565051,19.05,9.652,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,19.304,8.89,56.22529674,8.032185358,0.803218612,-79.51863395
116.565051,19.812,7.874,34.07767607,11.35922544,1.135922544,-55.66020415
135,20.574,7.112,17.96051221,17.96051221,1.077630814,-34.84339386
161.565051,21.336,6.858,24.09655582,8.032185358,0.803218612,-79.51863395
180,22.098,6.858,0,25.4,0.762,-24.638
90,22.098,6.096,0,25.4,0.762,-24.638
111.801409,22.606,4.826,56.59993912,4.716661636,1.36783191,-135.4153543
126.869898,23.368,3.81,35.56,5.08,1.27,-125.73
149.036243,24.638,3.048,56.62883289,4.356064186,1.481061808,-146.6251165
338.587031,11.684,8.128,627.3335515,0.463661252,13.91447154,-1377.532674
338.198591,20.32,17.526,80.18324705,4.716661636,1.36783191,-135.4153543
323.972627,18.034,15.748,218.4910814,1.867445084,3.454773634,-342.0225773
315,15.24,13.462,17.96051221,17.96051221,2.873681832,-33.04734259
135,14.732,13.97,17.96051221,17.96051221,1.796051272,-34.12497315
126.869898,17.272,16.51,35.56,5.08,2.54,-124.46
105.945396,19.558,18.288,80.24604144,3.488958224,1.84914794,-183.0656433
30.963757,22.098,20.32,91.47734537,4.356064186,1.481061808,-146.6251165
14.036243,21.082,20.066,80.0852635,6.160405002,1.047268924,-103.6796141
0,20.32,20.066,0,25.4,0.762,-24.638
341.565051,19.558,20.32,24.09655582,8.032185358,0.803218612,-79.51863395
333.434949,19.05,20.574,22.71845063,11.35922544,0.567961272,-56.22816542
63.434949,18.796,20.066,22.71845063,11.35922544,0.567961272,-56.22816542
45,18.288,19.558,17.96051221,17.96051221,0.718420458,-35.20260397
33.690068,17.526,19.05,35.22346245,7.04469254,0.915809954,-90.6651923
18.434949,16.764,18.796,56.22529674,8.032185358,0.803218612,-79.51863395
0,16.002,18.796,0,25.4,0.762,-24.638
341.565051,15.24,19.05,24.09655582,8.032185358,0.803218612,-79.51863395
108.434949,15.494,18.288,56.22529674,8.032185358,0.803218612,-79.51863395
90,15.494,17.526,0,25.4,0.762,-24.638
75.963757,15.24,16.51,24.6416195,6.160405002,1.047268924,-103.6796141
45,14.478,15.748,17.96051221,17.96051221,1.077630814,-34.84339386
14.036243,13.462,15.494,80.0852635,6.160405002,1.047268924,-103.6796141
0,12.7,15.494,0,25.4,0.762,-24.638
126.869898,13.462,14.478,35.56,5.08,1.27,-125.73
90,13.462,13.716,0,25.4,0.762,-24.638
75.963757,13.208,12.7,24.6416195,6.160405002,1.047268924,-103.6796141
56.309932,12.7,11.938,56.35753981,7.04469254,0.915809954,-90.6651923
191.309932,13.97,12.192,104.6083465,4.981349956,1.29515108,-128.2199447
168.690068,15.24,11.938,24.90674927,4.981349956,1.29515108,-128.2199447
161.565051,16.764,11.43,24.09655582,8.032185358,1.60643697,-78.71541559
143.130102,17.78,10.668,91.44,5.08,1.27,-125.73
270,17.78,10.922,0,25.4,0.254,-25.146
270,17.78,11.684,0,25.4,0.762,-24.638
243.434949,18.288,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
213.690068,19.05,13.208,35.22346245,7.04469254,0.915809954,-90.6651923
198.434949,19.812,13.462,56.22529674,8.032185358,0.803218612,-79.51863395
180,20.828,13.462,0,25.4,1.016,-24.384
146.309932,21.59,12.954,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,21.082,13.716,35.22346245,7.04469254,0.915809954,-90.6651923
270,21.082,14.478,0,25.4,0.762,-24.638
270,21.082,15.494,0,25.4,1.016,-24.384
243.434949,21.59,16.51,22.71845063,11.35922544,1.135922544,-55.66020415
225,22.098,17.018,17.96051221,17.96051221,0.718420458,-35.20260397
296.565051,21.844,17.526,34.07767607,11.35922544,0.567961272,-56.22816542
270,21.844,18.034,0,25.4,0.508,-24.892
255.963757,22.098,19.05,24.6416195,6.160405002,1.047268924,-103.6796141
243.434949,22.606,20.066,22.71845063,11.35922544,1.135922544,-55.66020415
233.130102,23.368,21.082,91.44,5.08,1.27,-125.73
40.601295,12.7,11.938,35.81521869,2.755016842,14.05058582,-220.1258435
195.945396,6.604,13.716,80.24604144,3.488958224,1.84914794,-183.0656433
5.194429,7.366,13.97,255.2564824,2.29960805,2.805521694,-277.7466482
19.983107,7.112,17.272,217.0068451,2.170068558,2.9729938,-294.3263839
185.710593,5.842,17.272,229.9928961,2.527394488,2.552668504,-252.7141722
164.054604,5.588,20.066,104.6687498,3.488958224,1.84914794,-183.0656433
45,6.858,20.066,17.96051221,17.96051221,1.436840916,-34.48418351
90,5.334,23.368,0,25.4,1.016,-24.384
75.963757,5.08,22.352,24.6416195,6.160405002,1.047268924,-103.6796141
243.434949,7.874,11.938,22.71845063,11.35922544,1.135922544,-55.66020415
236.309932,8.382,12.7,56.35753981,7.04469254,0.915809954,-90.6651923
225,9.144,13.462,17.96051221,17.96051221,1.077630814,-34.84339386
213.690068,9.906,13.97,35.22346245,7.04469254,0.915809954,-90.6651923
189.462322,11.43,14.224,129.4477627,4.175734346,1.545021802,-152.9571465
333.434949,10.922,14.478,22.71845063,11.35922544,0.567961272,-56.22816542
326.309932,10.16,14.986,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,9.652,15.748,35.22346245,7.04469254,0.915809954,-90.6651923
270,9.652,16.764,0,25.4,1.016,-24.384
251.565051,9.906,17.526,24.09655582,8.032185358,0.803218612,-79.51863395
236.309932,10.414,18.288,56.35753981,7.04469254,0.915809954,-90.6651923
213.690068,11.176,18.796,35.22346245,7.04469254,0.915809954,-90.6651923
0,10.16,18.796,0,25.4,1.016,-24.384
333.434949,9.144,19.304,22.71845063,11.35922544,1.135922544,-55.66020415
306.869898,8.382,20.32,35.56,5.08,1.27,-125.73
284.036243,8.128,21.336,80.0852635,6.160405002,1.047268924,-103.6796141
341.565051,7.366,21.59,24.09655582,8.032185358,0.803218612,-79.51863395
326.309932,6.604,22.098,56.35753981,7.04469254,0.915809954,-90.6651923
303.690068,6.096,22.86,35.22346245,7.04469254,0.915809954,-90.6651923
296.565051,5.334,24.384,34.07767607,11.35922544,1.703883816,-55.09224288
56.309932,4.572,21.59,56.35753981,7.04469254,0.915809954,-90.6651923
45,4.064,21.082,17.96051221,17.96051221,0.718420458,-35.20260397
33.690068,3.302,20.574,35.22346245,7.04469254,0.915809954,-90.6651923
116.565051,3.556,20.066,34.07767607,11.35922544,0.567961272,-56.22816542
108.434949,3.81,19.304,56.22529674,8.032185358,0.803218612,-79.51863395
90,3.81,18.288,0,25.4,1.016,-24.384
63.434949,3.302,17.272,22.71845063,11.35922544,1.135922544,-55.66020415
33.690068,2.54,16.764,35.22346245,7.04469254,0.915809954,-90.6651923
165.963757,3.556,16.51,24.6416195,6.160405002,1.047268924,-103.6796141
143.130102,4.572,15.748,91.44,5.08,1.27,-125.73
116.565051,5.08,14.732,34.07767607,11.35922544,1.135922544,-55.66020415
75.963757,4.826,13.716,24.6416195,6.160405002,1.047268924,-103.6796141
63.434949,4.318,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
180,5.334,12.7,0,25.4,1.016,-24.384
165.963757,6.35,12.446,24.6416195,6.160405002,1.047268924,-103.6796141
135,6.858,11.938,17.96051221,17.96051221,0.718420458,-35.20260397
116.565051,7.366,10.922,34.07767607,11.35922544,1.135922544,-55.66020415
278.583621,5.334,24.384,847.7664863,0.473877386,13.61449474,-1347.834983
104.036243,7.62,5.08,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,8.128,4.318,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,9.144,3.81,22.71845063,11.35922544,1.135922544,-55.66020415
180,9.906,3.81,0,25.4,0.762,-24.638
206.565051,10.922,4.318,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,11.43,5.08,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,11.684,6.096,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,11.43,6.858,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,10.922,7.62,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,9.906,8.128,22.71845063,11.35922544,1.135922544,-55.66020415
0,9.144,8.128,0,25.4,0.762,-24.638
26.565051,8.128,7.62,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,7.62,6.858,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,7.366,6.096,24.09655582,8.032185358,0.803218612,-79.51863395
104.036243,4.064,7.874,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,4.572,7.112,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,5.588,6.604,22.71845063,11.35922544,1.135922544,-55.66020415
180,6.35,6.604,0,25.4,0.762,-24.638
206.565051,7.366,7.112,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,7.874,7.874,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,8.128,8.89,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,7.874,9.652,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,7.366,10.414,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,6.35,10.922,22.71845063,11.35922544,1.135922544,-55.66020415
0,5.588,10.922,0,25.4,0.762,-24.638
26.565051,4.572,10.414,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,4.064,9.652,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,3.81,8.89,24.09655582,8.032185358,0.803218612,-79.51863395
104.036243,8.636,9.652,80.0852635,6.160405002,1.047268924,-103.6796141
123.690068,9.144,8.89,35.22346245,7.04469254,0.915809954,-90.6651923
153.434949,10.16,8.382,22.71845063,11.35922544,1.135922544,-55.66020415
180,10.922,8.382,0,25.4,0.762,-24.638
206.565051,11.938,8.89,34.07767607,11.35922544,1.135922544,-55.66020415
236.309932,12.446,9.652,56.35753981,7.04469254,0.915809954,-90.6651923
255.963757,12.7,10.668,24.6416195,6.160405002,1.047268924,-103.6796141
288.434949,12.446,11.43,56.22529674,8.032185358,0.803218612,-79.51863395
303.690068,11.938,12.192,35.22346245,7.04469254,0.915809954,-90.6651923
333.434949,10.922,12.7,22.71845063,11.35922544,1.135922544,-55.66020415
0,10.16,12.7,0,25.4,0.762,-24.638
26.565051,9.144,12.192,34.07767607,11.35922544,1.135922544,-55.66020415
56.309932,8.636,11.43,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,8.382,10.668,24.09655582,8.032185358,0.803218612,-79.51863395
`));m(d.ParsePatFile(`
*HONEY,HONEY
0, 0,0, 4.7625,2.74963, 3.175,-6.35
120, 0,0, 4.7625,2.74963, 3.175,-6.35
60, 0,0, 4.7625,2.74963, -6.35,3.175
`));m(d.ParsePatFile(`
*HOUND,HOUND
0, 0,0, 6.35,1.5875, 25.4,-12.7
90, 0,0, -6.35,1.5875, 25.4,-12.7
`));m(d.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,9.525
0, 0,3.175, 0,9.525, 3.175,-3.175
0, 0,6.35, 0,9.525, 3.175,-3.175
`));m(d.ParsePatFile(`
*JIS_LC_20,JIS_LC_20
45, 0,0, 0,20
45, .4,0, 0,20
`));m(d.ParsePatFile(`
*JIS_LC_20A,JIS_LC_20A
45, 0,0, 0,20
45, 1,0, 0,20
`));m(d.ParsePatFile(`
*JIS_LC_8,JIS_LC_8
45, 0,0, 0,7.8
45, .4,0, 0,7.8
`));m(d.ParsePatFile(`
*JIS_LC_8A,JIS_LC_8A
45, 0,0, 0,7.8
45, 1,0, 0,7.8
`));m(d.ParsePatFile(`
*JIS_RC_10,JIS_RC_10
45, 0,0, 0,10
45, .725,0, 0,10
45, 1.45,0, 0,10
`));m(d.ParsePatFile(`
*JIS_RC_15,JIS_RC_15
45, 0,0, 0,15
45, .725,0, 0,15
45, 1.45,0, 0,15
`));m(d.ParsePatFile(`
*JIS_RC_18,JIS_RC_18
45, 0,0, 0,18
45, 1,0, 0,18
45, 2,0, 0,18
`));m(d.ParsePatFile(`
*JIS_RC_30,JIS_RC_30
45, 0,0, 0,30
45, 1,0, 0,30
45, 2,0, 0,30
`));m(d.ParsePatFile(`
*JIS_STN_1E,JIS_STN_1E
45, 0,0, 0,1
45, .705,0, 0,1, 1,-.5
`));m(d.ParsePatFile(`
*JIS_STN_2.5,JIS_STN_2.5
45, 0,0, 0,2.5
45, 1.765,0, 0,2.5, 1.2,-.5
`));m(d.ParsePatFile(`
*JIS_WOOD,JIS_WOOD
45, 0,0, 0,.70710678
`));m(d.ParsePatFile(`
*LATTICE-01
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
180,2.162738626,10.16,0,25.4,4.325477252,-21.074522748
270,15.24,2.162738626,25.4,25.4,4.325477252,-21.074522748
270,10.16,2.162738626,25.4,25.4,4.325477252,-21.074522748
135,12.7,6.80694346,17.960512212,17.960512212,8.334040482,-27.586983942
225,18.59305654,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
45,2.162738626,15.24,17.960512212,17.960512212,11.309835394,-24.61118903
180,2.162738626,15.24,0,25.4,4.325477252,-21.074522748
315,12.7,18.59305654,17.960512212,17.960512212,8.334040482,-27.586983942
45,6.80694346,12.7,17.960512212,17.960512212,8.334040482,-27.586983942
315,15.24,23.237261374,17.960512212,17.960512212,11.309835394,-24.61118903
45,15.24,2.162738626,17.960512212,17.960512212,11.309835394,-24.61118903
315,2.162738626,10.16,17.960512212,17.960512212,11.309835394,-24.61118903
`));m(d.ParsePatFile(`
*LATTICE-02
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
270,15.663333418,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,9.736666582,25.4,25.4,25.4,25.4;,0 Removed 0 IT RENDERS A POINT
`));m(d.ParsePatFile(`
*LATTICE-03
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
180,9.736666582,9.736666582,0,25.4,19.473333164,-5.926666836
180,9.736666582,15.663333418,0,25.4,19.473333164,-5.926666836
270,15.663333418,9.736666582,25.4,25.4,19.473333164,-5.926666836
270,9.736666582,9.736666582,25.4,25.4,19.473333164,-5.926666836
`));m(d.ParsePatFile(`
*LATTICE-04
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
296.565051,3.894666582,11.684,34.077676066,11.35922544,28.776704194,-28.019422498
296.565051,8.636000254,14.054666582,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,11.684,21.505333418,34.077676066,11.35922544,28.776704194,-28.019422498
206.565051,14.054666582,16.763999746,34.077676066,11.35922544,28.776704194,-28.019422498
`));m(d.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`));m(d.ParsePatFile(`
*LATTICE-06,LATTICE-06
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
180,15.875,9.525,0,25.4,6.35,-19.05
270,15.875,15.875,0,25.4,6.35,-19.05
0,9.525,15.875,0,25.4,6.35,-19.05
90,9.525,9.525,0,25.4,6.35,-19.05
0,19.685,1.905,0,25.4,3.81,-21.59
180,5.715,23.495,0,25.4,3.81,-21.59
180,15.875,5.715,0,25.4,10.16,-15.24
180,15.875,1.905,0,25.4,13.97,-11.43
270,15.875,5.715,0,25.4,3.81,-21.59
270,19.685,19.685,0,25.4,17.78,-7.62
270,23.495,23.495,0,25.4,21.59,-3.81
0,9.525,19.685,0,25.4,10.16,-15.24
0,9.525,23.495,0,25.4,13.97,-11.43
90,9.525,19.685,0,25.4,3.81,-21.59
90,5.715,5.715,0,25.4,17.78,-7.62
90,1.905,1.905,0,25.4,21.59,-3.81
`));m(d.ParsePatFile(`
*LATTICE-07
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
270,17.568333418,17.568333164,25.4,25.4,22.436666582,-2.963333418
270,20.531666836,17.568333164,25.4,25.4,22.436666582,-2.963333418
270,4.868333164,4.868333418,25.4,25.4,22.436666582,-2.963333418
270,7.831666582,4.868333418,25.4,25.4,22.436666582,-2.963333418
180,17.568333418,7.831666582,0,25.4,22.436666582,-2.963333418
180,17.568333418,4.868333164,0,25.4,22.436666582,-2.963333418
180,4.868333418,20.531666836,0,25.4,22.436666582,-2.963333418
180,4.868333418,17.568333418,0,25.4,22.436666582,-2.963333418
`));m(d.ParsePatFile(`
*LEAF-01,LEAF-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
83.659808,22.86,5.08,25.244646742,2.804960862,2.30006779,-227.706714766
26.565051,22.352,4.826,34.077676066,11.35922544,0.567961272,-56.22816542
14.036243,21.336,4.572,80.085263502,6.160405002,1.047268924,-103.679614078
315,21.336,4.572,17.960512212,17.960512212,1.436840916,-34.484183508
83.659808,21.336,4.572,25.244646742,2.804960862,2.30006779,-227.706714766
0,20.066,4.572,0,25.4,1.27,-24.13
345.963757,20.828,3.048,24.6416195,6.160405002,1.047268924,-103.679614078
326.309932,20.066,3.556,56.357539812,7.04469254,0.915809954,-90.665192304
303.690068,19.558,4.318,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,18.796,4.064,56.225296744,8.032185358,0.803218612,-79.518633952
288.434949,18.542,4.826,56.225296744,8.032185358,0.803218612,-79.518633952
180,19.558,4.826,0,25.4,1.016,-24.384
258.690068,19.812,6.096,24.906749272,4.981349956,1.29515108,-128.219944728
243.434949,20.066,6.604,22.718450626,11.35922544,0.567961272,-56.22816542
225,20.828,7.366,17.960512212,17.960512212,1.077630814,-34.843393864
213.690068,21.59,7.874,35.223462446,7.04469254,0.915809954,-90.665192304
191.309932,22.86,8.128,104.608346536,4.981349956,1.29515108,-128.219944728
128.659808,7.62,10.668,35.701322044,3.966813504,1.626393496,-161.0129622
143.130102,8.636,9.906,91.44,5.08,1.27,-125.73
153.434949,9.652,9.398,22.718450626,11.35922544,1.135922544,-55.660204148
192.528808,9.652,9.398,104.69063898,2.755016842,2.341764176,-231.834664854
105.945396,9.652,9.398,80.246041438,3.488958224,1.84914794,-183.065643266
153.434949,10.668,8.89,22.718450626,11.35922544,1.135922544,-55.660204148
149.036243,11.938,8.128,56.628832894,4.356064186,1.481061808,-146.625116452
95.710593,11.938,8.128,229.992896122,2.527394488,2.552668504,-252.714172244
194.931417,11.938,8.128,289.599936166,1.636157764,3.94314045,-390.37089693
135,12.954,7.112,17.960512212,17.960512212,1.436840916,-34.484183508
123.690068,13.462,6.35,35.223462446,7.04469254,0.915809954,-90.665192304
199.653824,13.462,6.35,297.294468148,1.708588912,3.775981526,-373.822164724
71.565051,13.462,6.35,24.09655582,8.032185358,2.409655582,-77.912196982
119.054604,14.732,4.064,204.766485564,2.467066186,2.61509002,-258.893915536
288.434949,14.732,3.556,56.225296744,8.032185358,1.60643697,-78.715415594
21.801409,13.462,3.048,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,12.192,2.794,104.608346536,4.981349956,1.29515108,-128.219944728
0,11.43,2.794,0,25.4,0.762,-24.638
341.565051,9.906,3.302,24.09655582,8.032185358,1.60643697,-78.715415594
326.309932,8.382,4.318,56.357539812,7.04469254,1.831620162,-89.74938235
308.659808,7.366,5.588,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,6.604,6.858,91.477345366,4.356064186,1.481061808,-146.625116452
285.945396,6.096,8.636,80.246041438,3.488958224,1.84914794,-183.065643266
270,6.096,10.414,0,25.4,1.778,-23.622
279.462322,5.842,11.938,129.447762694,4.175734346,1.545021802,-152.95714646
285.945396,5.334,13.716,80.246041438,3.488958224,1.84914794,-183.065643266
123.690068,5.842,12.954,35.223462446,7.04469254,0.915809954,-90.665192304
161.565051,6.604,12.7,24.09655582,8.032185358,0.803218612,-79.518633952
171.869898,8.382,12.446,25.144717046,3.592102544,1.796051272,-177.809071102
171.869898,10.16,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
161.565051,11.684,11.684,24.09655582,8.032185358,1.60643697,-78.715415594
161.565051,13.208,11.176,24.09655582,8.032185358,1.60643697,-78.715415594
146.309932,14.732,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
119.744881,15.748,8.382,148.072666262,3.150482142,2.047813532,-202.733533318
111.801409,16.256,7.112,56.599939124,4.716661636,1.36783191,-135.415354264
90,16.256,6.096,0,25.4,1.016,-24.384
75.963757,16.002,5.08,24.6416195,6.160405002,1.047268924,-103.679614078
56.309932,15.494,4.318,56.357539812,7.04469254,0.915809954,-90.665192304
63.434949,15.24,3.81,22.718450626,11.35922544,0.567961272,-56.22816542
126.869898,16.002,2.794,35.56,5.08,1.27,-125.73
45,15.24,2.032,17.960512212,17.960512212,1.077630814,-34.843393864
233.130102,22.606,1.016,91.44,5.08,1.27,-125.73
258.690068,1.778,1.27,24.906749272,4.981349956,1.29515108,-128.219944728
258.690068,3.556,1.27,24.906749272,4.981349956,1.29515108,-128.219944728
198.434949,6.604,0.508,56.225296744,8.032185358,1.60643697,-78.715415594
225,7.874,0.508,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,8.636,0.762,56.225296744,8.032185358,0.803218612,-79.518633952
348.690068,7.366,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
345.963757,6.35,1.27,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,5.334,1.778,22.718450626,11.35922544,1.135922544,-55.660204148
333.434949,3.81,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,2.54,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
0,1.778,2.794,0,25.4,0.762,-24.638
8.130102,0,2.54,154.460405328,3.592102544,1.796051272,-177.809071102
236.309932,0.508,5.842,56.357539812,7.04469254,0.915809954,-90.665192304
236.309932,1.016,6.604,56.357539812,7.04469254,0.915809954,-90.665192304
213.690068,1.778,7.112,35.223462446,7.04469254,0.915809954,-90.665192304
0,0.762,7.112,0,25.4,1.016,-24.384
326.309932,0,7.62,56.357539812,7.04469254,0.915809954,-90.665192304
18.434949,0,6.604,56.225296744,8.032185358,0.803218612,-79.518633952
0,0,13.97,0,25.4,1.778,-23.622
14.036243,2.54,15.494,80.085263502,6.160405002,1.047268924,-103.679614078
21.801409,1.27,14.986,56.599939124,4.716661636,1.36783191,-135.415354264
30.963757,0,14.224,91.477345366,4.356064186,1.481061808,-146.625116452
254.054604,0.508,16.764,104.668749768,3.488958224,1.84914794,-183.065643266
158.198591,1.27,17.526,80.18324705,4.716661636,1.36783191,-135.415354264
153.434949,2.794,16.764,22.718450626,11.35922544,1.703883816,-55.092242876
158.198591,4.064,16.256,80.18324705,4.716661636,1.36783191,-135.415354264
180,5.334,16.256,0,25.4,1.27,-24.13
33.690068,4.572,15.748,35.223462446,7.04469254,0.915809954,-90.665192304
45,4.064,15.24,17.960512212,17.960512212,0.718420458,-35.202603966
53.130102,3.302,14.224,91.44,5.08,1.27,-125.73
56.309932,2.286,12.7,56.357539812,7.04469254,1.831620162,-89.74938235
51.340192,1.27,11.43,126.938033652,3.966813504,1.626393496,-161.0129622
38.659808,0,10.414,35.701322044,3.966813504,1.626393496,-161.0129622
180,20.828,12.192,0,25.4,2.54,-22.86
310.601295,20.828,12.192,35.815218692,2.755016842,2.341764176,-231.834664854
82.405357,20.828,12.192,204.774468022,1.678479244,3.843717484,-380.528029646
180,21.336,12.192,0,25.4,0.508,-24.892
194.036243,22.352,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
198.434949,23.114,12.7,56.225296744,8.032185358,0.803218612,-79.518633952
0,21.082,9.398,0,25.4,2.032,-23.368
348.690068,19.812,9.652,24.906749272,4.981349956,1.29515108,-128.219944728
321.340192,18.542,10.668,126.938033652,3.966813504,1.626393496,-161.0129622
300.963757,17.78,11.938,91.477345366,4.356064186,1.481061808,-146.625116452
21.801409,16.51,11.43,56.599939124,4.716661636,1.36783191,-135.415354264
284.036243,16.256,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
180,17.78,12.446,0,25.4,1.524,-23.876
261.869898,18.034,14.224,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,18.542,15.494,80.18324705,4.716661636,1.36783191,-135.415354264
225,19.558,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
216.869898,20.574,17.272,35.56,5.08,1.27,-125.73
198.434949,22.86,18.034,56.225296744,8.032185358,2.409655582,-77.912196982
153.434949,9.144,16.51,22.718450626,11.35922544,1.703883816,-55.092242876
170.537678,10.668,16.256,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,12.446,16.51,154.460405328,3.592102544,1.796051272,-177.809071102
201.801409,13.716,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
219.805571,15.24,18.288,35.773504272,3.252136752,1.9838035,-196.396538372
18.434949,24.638,6.35,56.225296744,8.032185358,0.803218612,-79.518633952
33.690068,23.876,5.842,35.223462446,7.04469254,0.915809954,-90.665192304
0,23.876,5.842,0,25.4,1.016,-24.384
80.537678,23.876,5.842,25.054405568,4.175734346,1.545021802,-152.95714646
36.869898,22.86,5.08,35.56,5.08,1.27,-125.73
341.565051,22.86,5.08,24.09655582,8.032185358,1.60643697,-78.715415594
53.130102,24.638,4.064,91.44,5.08,1.27,-125.73
38.659808,23.368,3.048,35.701322044,3.966813504,1.626393496,-161.0129622
9.462322,21.844,2.794,129.447762694,4.175734346,1.545021802,-152.95714646
180,24.13,8.128,0,25.4,1.27,-24.13
158.198591,25.4,7.62,80.18324705,4.716661636,1.36783191,-135.415354264
216.869898,23.622,1.778,35.56,5.08,1.27,-125.73
206.565051,24.638,2.286,34.077676066,11.35922544,1.135922544,-55.660204148
198.434949,25.4,2.54,56.225296744,8.032185358,0.803218612,-79.518633952
90,24.638,0,0,25.4,0.508,-24.892
26.565051,24.384,13.462,34.077676066,11.35922544,1.135922544,-55.660204148
56.309932,24.384,13.462,56.357539812,7.04469254,1.831620162,-89.74938235
36.869898,24.384,13.462,35.56,5.08,1.27,-125.73
30.963757,23.114,12.7,91.477345366,4.356064186,1.481061808,-146.625116452
78.690068,23.114,12.7,24.906749272,4.981349956,3.885452986,-125.629642822
156.037511,25.4,11.684,193.423444496,2.578979348,2.501609932,-247.659378188
30.963757,24.13,9.652,91.477345366,4.356064186,1.481061808,-146.625116452
14.036243,23.114,9.398,80.085263502,6.160405002,1.047268924,-103.679614078
180,25.4,18.034,0,25.4,2.54,-22.86
0,21.844,22.098,0,25.4,2.286,-23.114
11.309932,24.13,22.098,104.608346536,4.981349956,1.29515108,-128.219944728
135,25.4,20.828,17.960512212,17.960512212,1.796051272,-34.124973152
0,24.384,19.304,0,25.4,1.016,-24.384
345.963757,23.368,19.558,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,22.352,20.066,22.718450626,11.35922544,1.135922544,-55.660204148
315,21.844,20.574,17.960512212,17.960512212,0.718420458,-35.202603966
306.869898,21.082,21.59,35.56,5.08,1.27,-125.73
11.309932,19.812,21.336,104.608346536,4.981349956,1.29515108,-128.219944728
284.036243,19.558,22.352,80.085263502,6.160405002,1.047268924,-103.679614078
180,21.082,22.352,0,25.4,1.524,-23.876
14.036243,16.51,22.606,80.085263502,6.160405002,1.047268924,-103.679614078
18.434949,15.748,22.352,56.225296744,8.032185358,0.803218612,-79.518633952
33.690068,14.986,21.844,35.223462446,7.04469254,0.915809954,-90.665192304
230.194429,16.51,19.812,162.6068376,3.252136752,1.9838035,-196.396538372
239.036243,17.272,21.082,56.628832894,4.356064186,1.481061808,-146.625116452
236.309932,18.288,22.606,56.357539812,7.04469254,1.831620162,-89.74938235
213.690068,19.05,23.114,35.223462446,7.04469254,0.915809954,-90.665192304
198.434949,19.812,23.368,56.225296744,8.032185358,0.803218612,-79.518633952
0,18.796,23.368,0,25.4,1.016,-24.384
345.963757,17.78,23.622,24.6416195,6.160405002,1.047268924,-103.679614078
261.869898,21.336,24.13,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,21.844,25.4,80.18324705,4.716661636,1.36783191,-135.415354264
36.869898,13.97,21.082,35.56,5.08,1.27,-125.73
0,13.97,21.082,0,25.4,2.032,-23.368
78.690068,13.97,21.082,24.906749272,4.981349956,2.590301906,-126.924793648
33.690068,13.208,20.574,35.223462446,7.04469254,0.915809954,-90.665192304
30.963757,11.938,19.812,91.477345366,4.356064186,1.481061808,-146.625116452
336.037511,11.938,19.812,193.423444496,2.578979348,2.501609932,-247.659378188
79.380345,11.938,19.812,283.976346702,1.560309554,4.134820534,-409.347222706
26.565051,10.922,19.304,34.077676066,11.35922544,1.135922544,-55.660204148
9.462322,9.398,19.05,129.447762694,4.175734346,1.545021802,-152.95714646
318.814075,9.398,19.05,234.164238554,2.389431086,2.700057084,-267.30564649
82.405357,9.398,19.05,204.774468022,1.678479244,3.843717484,-380.528029646
0,8.382,19.05,0,25.4,1.016,-24.384
0,7.366,19.05,0,25.4,1.016,-24.384
0,5.08,19.304,0,25.4,1.524,-23.876
104.036243,5.334,18.288,80.085263502,6.160405002,1.047268924,-103.679614078
201.801409,6.604,18.796,56.599939124,4.716661636,1.36783191,-135.415354264
123.690068,7.62,17.272,35.223462446,7.04469254,1.831620162,-89.74938235
338.198591,16.51,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,14.986,24.892,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,13.716,25.146,24.906749272,4.981349956,1.29515108,-128.219944728
0,11.684,25.146,0,25.4,2.032,-23.368
18.434949,10.16,24.638,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,8.636,23.876,34.077676066,11.35922544,1.703883816,-55.092242876
45,7.366,22.606,17.960512212,17.960512212,1.796051272,-34.124973152
71.565051,6.858,21.082,24.09655582,8.032185358,1.60643697,-78.715415594
81.869898,6.604,19.304,25.144717046,3.592102544,1.796051272,-177.809071102
;0,5.08,19.304,0,25.4,1.524,-23.876
315,0,20.828,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,0.762,22.606,56.225296744,8.032185358,0.803218612,-79.518633952
343.300756,0.762,22.606,184.898786158,2.432878802,2.651837978,-262.531947376
74.744881,0.762,22.606,104.703186326,2.22772732,2.896045516,-286.708512434
206.565051,1.27,22.86,34.077676066,11.35922544,0.567961272,-56.22816542
213.690068,2.032,23.368,35.223462446,7.04469254,0.915809954,-90.665192304
216.869898,3.048,24.13,35.56,5.08,1.27,-125.73
352.874984,3.048,24.13,25.203858152,3.150482142,2.047813532,-202.733533318
78.690068,3.048,24.13,24.906749272,4.981349956,1.29515108,-128.219944728
213.690068,3.81,24.638,35.223462446,7.04469254,0.915809954,-90.665192304
213.690068,4.572,25.146,35.223462446,7.04469254,0.915809954,-90.665192304
206.565051,5.08,25.4,34.077676066,11.35922544,0.567961272,-56.22816542
45,7.112,25.146,17.960512212,17.960512212,0.359210356,-35.561814322
56.309932,6.604,24.384,56.357539812,7.04469254,0.915809954,-90.665192304
56.309932,5.588,22.86,56.357539812,7.04469254,1.831620162,-89.74938235
53.130102,4.826,21.844,91.44,5.08,1.27,-125.73
45,3.556,20.574,17.960512212,17.960512212,1.796051272,-34.124973152
36.869898,2.54,19.812,35.56,5.08,1.27,-125.73
18.434949,1.016,19.304,56.225296744,8.032185358,1.60643697,-78.715415594
0,0,19.304,0,25.4,1.016,-24.384
81.253838,24.13,22.098,179.594740378,1.931126186,3.340848284,-330.743991038
`));m(d.ParsePatFile(`
*LEAF-02,LEAF-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
303.690068,19.558,4.318,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,18.796,4.064,56.225296744,8.032185358,0.803218612,-79.518633952
288.434949,18.542,4.826,56.225296744,8.032185358,0.803218612,-79.518633952
180,19.558,4.826,0,25.4,1.016,-24.384
258.690068,19.812,6.096,24.906749272,4.981349956,1.29515108,-128.219944728
243.434949,20.066,6.604,22.718450626,11.35922544,0.567961272,-56.22816542
288.434949,14.732,3.556,56.225296744,8.032185358,1.60643697,-78.715415594
21.801409,13.462,3.048,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,12.192,2.794,104.608346536,4.981349956,1.29515108,-128.219944728
0,11.43,2.794,0,25.4,0.762,-24.638
341.565051,9.906,3.302,24.09655582,8.032185358,1.60643697,-78.715415594
326.309932,8.382,4.318,56.357539812,7.04469254,1.831620162,-89.74938235
308.659808,7.366,5.588,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,6.604,6.858,91.477345366,4.356064186,1.481061808,-146.625116452
285.945396,6.096,8.636,80.246041438,3.488958224,1.84914794,-183.065643266
270,6.096,10.414,0,25.4,1.778,-23.622
279.462322,5.842,11.938,129.447762694,4.175734346,1.545021802,-152.95714646
285.945396,5.334,13.716,80.246041438,3.488958224,1.84914794,-183.065643266
123.690068,5.842,12.954,35.223462446,7.04469254,0.915809954,-90.665192304
161.565051,6.604,12.7,24.09655582,8.032185358,0.803218612,-79.518633952
171.869898,8.382,12.446,25.144717046,3.592102544,1.796051272,-177.809071102
171.869898,10.16,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
161.565051,11.684,11.684,24.09655582,8.032185358,1.60643697,-78.715415594
161.565051,13.208,11.176,24.09655582,8.032185358,1.60643697,-78.715415594
146.309932,14.732,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
119.744881,15.748,8.382,148.072666262,3.150482142,2.047813532,-202.733533318
111.801409,16.256,7.112,56.599939124,4.716661636,1.36783191,-135.415354264
90,16.256,6.096,0,25.4,1.016,-24.384
75.963757,16.002,5.08,24.6416195,6.160405002,1.047268924,-103.679614078
56.309932,15.494,4.318,56.357539812,7.04469254,0.915809954,-90.665192304
63.434949,15.24,3.81,22.718450626,11.35922544,0.567961272,-56.22816542
126.869898,16.002,2.794,35.56,5.08,1.27,-125.73
45,15.24,2.032,17.960512212,17.960512212,1.077630814,-34.843393864
225,7.874,0.508,17.960512212,17.960512212,0.718420458,-35.202603966
198.434949,8.636,0.762,56.225296744,8.032185358,0.803218612,-79.518633952
348.690068,7.366,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
345.963757,6.35,1.27,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,5.334,1.778,22.718450626,11.35922544,1.135922544,-55.660204148
333.434949,3.81,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,2.54,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
0,1.778,2.794,0,25.4,0.762,-24.638
8.130102,0,2.54,154.460405328,3.592102544,1.796051272,-177.809071102
236.309932,0.508,5.842,56.357539812,7.04469254,0.915809954,-90.665192304
236.309932,1.016,6.604,56.357539812,7.04469254,0.915809954,-90.665192304
213.690068,1.778,7.112,35.223462446,7.04469254,0.915809954,-90.665192304
0,0.762,7.112,0,25.4,1.016,-24.384
326.309932,0,7.62,56.357539812,7.04469254,0.915809954,-90.665192304
158.198591,1.27,17.526,80.18324705,4.716661636,1.36783191,-135.415354264
153.434949,2.794,16.764,22.718450626,11.35922544,1.703883816,-55.092242876
158.198591,4.064,16.256,80.18324705,4.716661636,1.36783191,-135.415354264
180,5.334,16.256,0,25.4,1.27,-24.13
33.690068,4.572,15.748,35.223462446,7.04469254,0.915809954,-90.665192304
45,4.064,15.24,17.960512212,17.960512212,0.718420458,-35.202603966
53.130102,3.302,14.224,91.44,5.08,1.27,-125.73
56.309932,2.286,12.7,56.357539812,7.04469254,1.831620162,-89.74938235
51.340192,1.27,11.43,126.938033652,3.966813504,1.626393496,-161.0129622
38.659808,0,10.414,35.701322044,3.966813504,1.626393496,-161.0129622
321.340192,18.542,10.668,126.938033652,3.966813504,1.626393496,-161.0129622
300.963757,17.78,11.938,91.477345366,4.356064186,1.481061808,-146.625116452
21.801409,16.51,11.43,56.599939124,4.716661636,1.36783191,-135.415354264
284.036243,16.256,12.446,80.085263502,6.160405002,1.047268924,-103.679614078
180,17.78,12.446,0,25.4,1.524,-23.876
261.869898,18.034,14.224,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,18.542,15.494,80.18324705,4.716661636,1.36783191,-135.415354264
225,19.558,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
284.036243,19.558,22.352,80.085263502,6.160405002,1.047268924,-103.679614078
0,5.08,19.304,0,25.4,1.524,-23.876
104.036243,5.334,18.288,80.085263502,6.160405002,1.047268924,-103.679614078
201.801409,6.604,18.796,56.599939124,4.716661636,1.36783191,-135.415354264
123.690068,7.62,17.272,35.223462446,7.04469254,1.831620162,-89.74938235
153.434949,9.144,16.51,22.718450626,11.35922544,1.703883816,-55.092242876
170.537678,10.668,16.256,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,12.446,16.51,154.460405328,3.592102544,1.796051272,-177.809071102
201.801409,13.716,17.018,56.599939124,4.716661636,1.36783191,-135.415354264
219.805571,15.24,18.288,35.773504272,3.252136752,1.9838035,-196.396538372
230.194429,16.51,19.812,162.6068376,3.252136752,1.9838035,-196.396538372
239.036243,17.272,21.082,56.628832894,4.356064186,1.481061808,-146.625116452
236.309932,18.288,22.606,56.357539812,7.04469254,1.831620162,-89.74938235
213.690068,19.05,23.114,35.223462446,7.04469254,0.915809954,-90.665192304
198.434949,19.812,23.368,56.225296744,8.032185358,0.803218612,-79.518633952
0,18.796,23.368,0,25.4,1.016,-24.384
345.963757,17.78,23.622,24.6416195,6.160405002,1.047268924,-103.679614078
338.198591,16.51,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
45,7.366,22.606,17.960512212,17.960512212,1.796051272,-34.124973152
71.565051,6.858,21.082,24.09655582,8.032185358,1.60643697,-78.715415594
81.869898,6.604,19.304,25.144717046,3.592102544,1.796051272,-177.809071102
;0,5.08,19.304,0,25.4,1.524,-23.876
53.130102,4.826,21.844,91.44,5.08,1.27,-125.73
45,3.556,20.574,17.960512212,17.960512212,1.796051272,-34.124973152
36.869898,2.54,19.812,35.56,5.08,1.27,-125.73
18.434949,1.016,19.304,56.225296744,8.032185358,1.60643697,-78.715415594
0,0,19.304,0,25.4,1.016,-24.384
0,24.384,19.304,0,25.4,1.016,-24.384
345.963757,23.368,19.558,24.6416195,6.160405002,1.047268924,-103.679614078
333.434949,22.352,20.066,22.718450626,11.35922544,1.135922544,-55.660204148
315,21.844,20.574,17.960512212,17.960512212,0.718420458,-35.202603966
306.869898,21.082,21.59,35.56,5.08,1.27,-125.73
11.309932,19.812,21.336,104.608346536,4.981349956,1.29515108,-128.219944728
180,21.082,22.352,0,25.4,1.524,-23.876
261.869898,21.336,24.13,25.144717046,3.592102544,1.796051272,-177.809071102
248.198591,21.844,25.4,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,14.986,24.892,22.718450626,11.35922544,1.703883816,-55.092242876
348.690068,13.716,25.146,24.906749272,4.981349956,1.29515108,-128.219944728
0,11.684,25.146,0,25.4,2.032,-23.368
18.434949,10.16,24.638,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,8.636,23.876,34.077676066,11.35922544,1.703883816,-55.092242876
45,7.112,25.146,17.960512212,17.960512212,0.359210356,-35.561814322
56.309932,6.604,24.384,56.357539812,7.04469254,0.915809954,-90.665192304
56.309932,5.588,22.86,56.357539812,7.04469254,1.831620162,-89.74938235
53.130102,24.638,4.064,91.44,5.08,1.27,-125.73
38.659808,23.368,3.048,35.701322044,3.966813504,1.626393496,-161.0129622
9.462322,21.844,2.794,129.447762694,4.175734346,1.545021802,-152.95714646
345.963757,20.828,3.048,24.6416195,6.160405002,1.047268924,-103.679614078
326.309932,20.066,3.556,56.357539812,7.04469254,0.915809954,-90.665192304
225,20.828,7.366,17.960512212,17.960512212,1.077630814,-34.843393864
213.690068,21.59,7.874,35.223462446,7.04469254,0.915809954,-90.665192304
191.309932,22.86,8.128,104.608346536,4.981349956,1.29515108,-128.219944728
180,24.13,8.128,0,25.4,1.27,-24.13
158.198591,25.4,7.62,80.18324705,4.716661636,1.36783191,-135.415354264
233.130102,22.606,1.016,91.44,5.08,1.27,-125.73
216.869898,23.622,1.778,35.56,5.08,1.27,-125.73
206.565051,24.638,2.286,34.077676066,11.35922544,1.135922544,-55.660204148
198.434949,25.4,2.54,56.225296744,8.032185358,0.803218612,-79.518633952
30.963757,24.13,9.652,91.477345366,4.356064186,1.481061808,-146.625116452
14.036243,23.114,9.398,80.085263502,6.160405002,1.047268924,-103.679614078
0,21.082,9.398,0,25.4,2.032,-23.368
348.690068,19.812,9.652,24.906749272,4.981349956,1.29515108,-128.219944728
216.869898,20.574,17.272,35.56,5.08,1.27,-125.73
198.434949,22.86,18.034,56.225296744,8.032185358,2.409655582,-77.912196982
180,25.4,18.034,0,25.4,2.54,-22.86
`));m(d.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
344.054604,21.844,9.652,104.668749768,3.488958224,1.84914794,-183.065643266
338.198591,20.574,10.16,80.18324705,4.716661636,1.36783191,-135.415354264
326.309932,19.05,11.176,56.357539812,7.04469254,1.831620162,-89.74938235
320.194429,17.526,12.446,162.6068376,3.252136752,1.9838035,-196.396538372
308.659808,16.51,13.716,35.701322044,3.966813504,1.626393496,-161.0129622
300.963757,15.748,14.986,91.477345366,4.356064186,1.481061808,-146.625116452
293.198591,14.986,16.764,56.698117744,3.335183322,1.934406342,-191.506230398
281.309932,14.732,18.034,104.608346536,4.981349956,1.29515108,-128.219944728
276.340192,14.478,20.32,204.76213556,2.804960862,2.30006779,-227.706714766
270,14.478,21.59,0,25.4,1.27,-24.13
257.471192,14.986,23.876,129.485790304,2.755016842,2.341764176,-231.834664854
164.054604,16.764,23.368,104.668749768,3.488958224,1.84914794,-183.065643266
158.198591,18.034,22.86,80.18324705,4.716661636,1.36783191,-135.415354264
146.309932,19.558,21.844,56.357539812,7.04469254,1.831620162,-89.74938235
140.194429,21.082,20.574,162.6068376,3.252136752,1.9838035,-196.396538372
125.537678,22.352,18.796,126.965671138,2.952690056,2.18499055,-216.314071054
116.565051,23.368,16.764,34.077676066,11.35922544,2.271845088,-54.524281604
105.945396,23.876,14.986,80.246041438,3.488958224,1.84914794,-183.065643266
97.125016,24.13,12.954,179.577488698,3.150482142,2.047813532,-202.733533318
90,24.13,11.43,0,25.4,1.524,-23.876
77.471192,23.622,9.144,129.485790304,2.755016842,2.341764176,-231.834664854
195.945396,3.556,9.652,80.246041438,3.488958224,1.84914794,-183.065643266
201.801409,4.826,10.16,56.599939124,4.716661636,1.36783191,-135.415354264
213.690068,6.35,11.176,35.223462446,7.04469254,1.831620162,-89.74938235
219.805571,7.874,12.446,35.773504272,3.252136752,1.9838035,-196.396538372
231.340192,8.89,13.716,126.938033652,3.966813504,1.626393496,-161.0129622
239.036243,9.652,14.986,56.628832894,4.356064186,1.481061808,-146.625116452
246.801409,10.414,16.764,136.74251925,3.335183322,1.934406342,-191.506230398
258.690068,10.668,18.034,24.906749272,4.981349956,1.29515108,-128.219944728
263.659808,10.922,20.32,25.244646742,2.804960862,2.30006779,-227.706714766
270,10.922,21.59,0,25.4,1.27,-24.13
282.528808,10.414,23.876,104.69063898,2.755016842,2.341764176,-231.834664854
15.945396,8.636,23.368,80.246041438,3.488958224,1.84914794,-183.065643266
21.801409,7.366,22.86,56.599939124,4.716661636,1.36783191,-135.415354264
33.690068,5.842,21.844,35.223462446,7.04469254,1.831620162,-89.74938235
39.805571,4.318,20.574,35.773504272,3.252136752,1.9838035,-196.396538372
54.462322,3.048,18.796,91.53339072,2.952690056,2.18499055,-216.314071054
63.434949,2.032,16.764,22.718450626,11.35922544,2.271845088,-54.524281604
74.054604,1.524,14.986,104.668749768,3.488958224,1.84914794,-183.065643266
82.874984,1.27,12.954,25.203858152,3.150482142,2.047813532,-202.733533318
90,1.27,11.43,0,25.4,1.524,-23.876
102.528808,1.778,9.144,104.69063898,2.755016842,2.341764176,-231.834664854
128.659808,5.334,3.81,35.701322044,3.966813504,1.626393496,-161.0129622
146.309932,6.858,2.794,56.357539812,7.04469254,1.831620162,-89.74938235
153.434949,8.382,2.032,22.718450626,11.35922544,1.703883816,-55.092242876
164.054604,10.16,1.524,104.668749768,3.488958224,1.84914794,-183.065643266
171.869898,11.938,1.27,25.144717046,3.592102544,1.796051272,-177.809071102
180,13.462,1.27,0,25.4,1.524,-23.876
188.130102,15.24,1.524,154.460405328,3.592102544,1.796051272,-177.809071102
195.945396,17.018,2.032,80.246041438,3.488958224,1.84914794,-183.065643266
206.565051,18.542,2.794,34.077676066,11.35922544,1.703883816,-55.092242876
218.659808,19.812,3.81,35.701322044,3.966813504,1.626393496,-161.0129622
225,21.082,5.08,17.960512212,17.960512212,1.796051272,-34.124973152
315,19.812,6.35,17.960512212,17.960512212,1.796051272,-34.124973152
321.340192,18.542,7.366,126.938033652,3.966813504,1.626393496,-161.0129622
336.801409,16.764,8.128,136.74251925,3.335183322,1.934406342,-191.506230398
341.565051,15.24,8.636,24.09655582,8.032185358,1.60643697,-78.715415594
351.869898,13.462,8.89,25.144717046,3.592102544,1.796051272,-177.809071102
0,11.938,8.89,0,25.4,1.524,-23.876
8.130102,10.16,8.636,154.460405328,3.592102544,1.796051272,-177.809071102
18.434949,8.636,8.128,56.225296744,8.032185358,1.60643697,-78.715415594
23.198591,6.858,7.366,56.698117744,3.335183322,1.934406342,-191.506230398
38.659808,5.588,6.35,35.701322044,3.966813504,1.626393496,-161.0129622
45,4.318,5.08,17.960512212,17.960512212,1.796051272,-34.124973152
`));m(d.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,3.175
`));m(d.ParsePatFile(`
*LOOPLINKS,LOOPLINKS
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
206.565051,13.462,17.018,34.077676066,11.35922544,0.567961272,-56.22816542
243.434949,13.716,17.526,22.718450626,11.35922544,0.567961272,-56.22816542
116.565051,11.938,17.018,34.077676066,11.35922544,0.567961272,-56.22816542
153.434949,12.446,16.764,22.718450626,11.35922544,0.567961272,-56.22816542
180,12.954,16.764,0,25.4,0.508,-24.892
258.690068,4.826,14.986,24.906749272,4.981349956,1.29515108,-128.219944728
251.565051,5.08,15.748,24.09655582,8.032185358,0.803218612,-79.518633952
243.434949,5.588,16.764,22.718450626,11.35922544,1.135922544,-55.660204148
230.194429,6.858,18.288,162.6068376,3.252136752,1.9838035,-196.396538372
225,7.874,19.304,17.960512212,17.960512212,1.436840916,-34.484183508
209.744881,9.652,20.32,148.072666262,3.150482142,2.047813532,-202.733533318
194.036243,11.684,20.828,80.085263502,6.160405002,2.094537594,-102.632345154
251.565051,7.112,15.24,24.09655582,8.032185358,1.60643697,-78.715415594
239.036243,7.874,16.51,56.628832894,4.356064186,1.481061808,-146.625116452
225,8.89,17.526,17.960512212,17.960512212,1.436840916,-34.484183508
210.963757,10.16,18.288,91.477345366,4.356064186,1.481061808,-146.625116452
198.434949,11.684,18.796,56.225296744,8.032185358,1.60643697,-78.715415594
116.565051,17.018,11.938,34.077676066,11.35922544,0.567961272,-56.22816542
153.434949,17.526,11.684,22.718450626,11.35922544,0.567961272,-56.22816542
26.565051,17.018,13.462,34.077676066,11.35922544,0.567961272,-56.22816542
63.434949,16.764,12.954,22.718450626,11.35922544,0.567961272,-56.22816542
90,16.764,12.446,0,25.4,0.508,-24.892
168.690068,14.986,20.574,24.906749272,4.981349956,1.29515108,-128.219944728
161.565051,15.748,20.32,24.09655582,8.032185358,0.803218612,-79.518633952
153.434949,16.764,19.812,22.718450626,11.35922544,1.135922544,-55.660204148
140.194429,18.288,18.542,162.6068376,3.252136752,1.9838035,-196.396538372
135,19.304,17.526,17.960512212,17.960512212,1.436840916,-34.484183508
119.744881,20.32,15.748,148.072666262,3.150482142,2.047813532,-202.733533318
104.036243,20.828,13.716,80.085263502,6.160405002,2.094537594,-102.632345154
161.565051,15.24,18.288,24.09655582,8.032185358,1.60643697,-78.715415594
149.036243,16.51,17.526,56.628832894,4.356064186,1.481061808,-146.625116452
135,17.526,16.51,17.960512212,17.960512212,1.436840916,-34.484183508
120.963757,18.288,15.24,91.477345366,4.356064186,1.481061808,-146.625116452
108.434949,18.796,13.716,56.225296744,8.032185358,1.60643697,-78.715415594
26.565051,11.938,8.382,34.077676066,11.35922544,0.567961272,-56.22816542
63.434949,11.684,7.874,22.718450626,11.35922544,0.567961272,-56.22816542
296.565051,13.462,8.382,34.077676066,11.35922544,0.567961272,-56.22816542
333.434949,12.954,8.636,22.718450626,11.35922544,0.567961272,-56.22816542
0,12.446,8.636,0,25.4,0.508,-24.892
78.690068,20.574,10.414,24.906749272,4.981349956,1.29515108,-128.219944728
71.565051,20.32,9.652,24.09655582,8.032185358,0.803218612,-79.518633952
63.434949,19.812,8.636,22.718450626,11.35922544,1.135922544,-55.660204148
50.194429,18.542,7.112,162.6068376,3.252136752,1.9838035,-196.396538372
45,17.526,6.096,17.960512212,17.960512212,1.436840916,-34.484183508
29.744881,15.748,5.08,148.072666262,3.150482142,2.047813532,-202.733533318
14.036243,13.716,4.572,80.085263502,6.160405002,2.094537594,-102.632345154
71.565051,18.288,10.16,24.09655582,8.032185358,1.60643697,-78.715415594
59.036243,17.526,8.89,56.628832894,4.356064186,1.481061808,-146.625116452
45,16.51,7.874,17.960512212,17.960512212,1.436840916,-34.484183508
30.963757,15.24,7.112,91.477345366,4.356064186,1.481061808,-146.625116452
18.434949,13.716,6.604,56.225296744,8.032185358,1.60643697,-78.715415594
296.565051,8.382,13.462,34.077676066,11.35922544,0.567961272,-56.22816542
333.434949,7.874,13.716,22.718450626,11.35922544,0.567961272,-56.22816542
206.565051,8.382,11.938,34.077676066,11.35922544,0.567961272,-56.22816542
243.434949,8.636,12.446,22.718450626,11.35922544,0.567961272,-56.22816542
270,8.636,12.954,0,25.4,0.508,-24.892
348.690068,10.414,4.826,24.906749272,4.981349956,1.29515108,-128.219944728
341.565051,9.652,5.08,24.09655582,8.032185358,0.803218612,-79.518633952
333.434949,8.636,5.588,22.718450626,11.35922544,1.135922544,-55.660204148
320.194429,7.112,6.858,162.6068376,3.252136752,1.9838035,-196.396538372
315,6.096,7.874,17.960512212,17.960512212,1.436840916,-34.484183508
299.744881,5.08,9.652,148.072666262,3.150482142,2.047813532,-202.733533318
284.036243,4.572,11.684,80.085263502,6.160405002,2.094537594,-102.632345154
341.565051,10.16,7.112,24.09655582,8.032185358,1.60643697,-78.715415594
329.036243,8.89,7.874,56.628832894,4.356064186,1.481061808,-146.625116452
315,7.874,8.89,17.960512212,17.960512212,1.436840916,-34.484183508
300.963757,7.112,10.16,91.477345366,4.356064186,1.481061808,-146.625116452
288.434949,6.604,11.684,56.225296744,8.032185358,1.60643697,-78.715415594
90,11.684,-7.874,0,25.4,15.748,-9.652
270,13.716,7.874,0,25.4,15.748,-9.652
180,7.874,11.684,0,25.4,15.748,-9.652
0,-7.874,13.716,0,25.4,15.748,-9.652
`));m(d.ParsePatFile(`
*MAZE-01
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
180,24.13,23.368,0,25.4,6.35,-19.05
90,24.13,13.97,25.4,25.4,9.398,-16.002
90,21.082,13.97,25.4,25.4,6.35,-19.05
0,17.78,10.668,0,25.4,2.794,-22.606
180,14.478,20.32,0,25.4,9.652,-15.748
270,14.478,23.368,25.4,25.4,3.048,-22.352
0,1.778,23.368,0,25.4,12.7,-12.7
90,24.13,7.366,25.4,25.4,3.302,-22.098
180,11.43,1.27,0,25.4,9.652,-15.748
0,17.78,7.366,0,25.4,6.35,-19.05
270,11.43,4.318,25.4,25.4,3.048,-22.352
0,4.826,4.318,0,25.4,6.604,-18.796
90,17.78,4.318,25.4,25.4,3.048,-22.352
270,4.826,20.32,25.4,25.4,16.002,-9.398
0,7.874,7.366,0,25.4,6.604,-18.796
270,7.874,17.272,25.4,25.4,9.906,-15.494
180,17.78,17.272,0,25.4,9.906,-15.494
270,17.78,23.368,25.4,25.4,6.096,-19.304
180,24.13,4.318,0,25.4,6.35,-19.05
90,24.13,1.27,25.4,25.4,3.048,-22.352
0,14.478,1.27,0,25.4,9.652,-15.748
270,14.478,10.668,25.4,25.4,9.398,-16.002
270,17.78,13.97,25.4,25.4,3.302,-22.098
0,11.43,13.97,0,25.4,6.35,-19.05
90,11.43,10.668,25.4,25.4,3.302,-22.098
90,1.778,1.27,25.4,25.4,22.098,-3.302
`));m(d.ParsePatFile(`
*MAZE-02
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
270,22.859999746,2.54,25.4,25.4,2.54,-22.86
0,17.779999746,2.54,0,25.4,5.08,-20.32
90,0,7.62,25.4,25.4,12.7,-12.7
270,22.859999746,22.86,25.4,25.4,12.7,-12.7
270,7.619999746,22.86,25.4,25.4,2.54,-22.86
180,7.619999746,22.86,0,25.4,10.16,-15.24
0,5.079999746,5.08,0,25.4,3.81,-21.59
90,5.079999746,7.62,25.4,25.4,5.08,-20.32
180,12.699999746,7.62,0,25.4,7.62,-17.78
90,12.699999746,2.54,25.4,25.4,5.08,-20.32
270,17.779999746,5.08,25.4,25.4,2.54,-22.86
0,15.239999746,5.08,0,25.4,2.54,-22.86
270,15.239999746,7.62,25.4,25.4,2.54,-22.86
180,17.779999746,7.62,0,25.4,2.54,-22.86
270,15.239999746,15.24,25.4,25.4,2.54,-22.86
0,7.619999746,15.24,0,25.4,7.62,-17.78
90,7.619999746,10.16,25.4,25.4,5.08,-20.32
180,17.779999746,10.16,0,25.4,10.16,-15.24
180,15.239999746,12.7,0,25.4,5.08,-20.32
270,20.319999746,20.32,25.4,25.4,12.7,-12.7
0,2.539999746,2.54,0,25.4,10.16,-15.24
0,2.539999746,20.32,0,25.4,17.78,-7.62
270,2.539999746,5.08,25.4,25.4,2.54,-22.86
90,2.539999746,7.62,25.4,25.4,12.7,-12.7
180,2.539999746,5.08,0,25.4,7.62,-17.78
180,0,7.62,0,25.4,5.080000254,-20.319999746
180,7.619999746,0,0,25.4,7.62,-17.78
270,17.779999746,17.78,25.4,25.4,5.08,-20.32
0,10.159999746,0,0,25.4,10.16,-15.24
0,5.079999746,17.78,0,25.4,12.7,-12.7
90,5.079999746,15.24,25.4,25.4,2.54,-22.86
270,15.239999746,2.54,25.4,25.4,2.54,-22.86
0,10.159999746,22.86,0,25.4,10.16,-15.24
270,10.159999746,25.4,25.4,25.4,2.54,-22.86
`));m(d.ParsePatFile(`
*MUDST,MUDST
0, 0,0, 12.7,6.35, 6.35,-6.35,0,-6.35,0,-6.35
`));m(d.ParsePatFile(`
*NET,NET
0, 0,0, 0,3.175
90, 0,0, 0,3.175
`));m(d.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,3.175
60, 0,0, 0,3.175
120, 0,0, 0,3.175
`));m(d.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
`));m(d.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,6.35
0, 0,.79375, 0,6.35
0, 0,1.5875, 0,6.35
0, 0,3.96875, 0,6.35
`));m(d.ParsePatFile(`
*QCAD-LOGO
;By John Hyslop,    Line 101 modified by CVH to fix left side of pencil drift when hatching far from Origin
;Developed in mm as metric QCAD3 pattern
243.434949,20.32,9.144,22.718450626,11.35922544,0.567961272,-56.22816542
248.198591,20.828,10.414,80.18324705,4.716661636,1.36783191,-135.415354264
263.659808,21.082,12.7,25.244646742,2.804960862,2.30006779,-227.706714766
276.340192,20.828,14.986,204.76213556,2.804960862,2.30006779,-227.706714766
290.556045,20.066,17.018,136.750876358,2.97284521,2.170177016,-214.847518234
310.601295,18.542,18.796,35.815218692,2.755016842,2.341764176,-231.834664854
324.462322,16.764,20.066,91.53339072,2.952690056,2.18499055,-216.314071054
336.801409,14.986,20.828,136.74251925,3.335183322,1.934406342,-191.506230398
351.869898,13.208,21.082,25.144717046,3.592102544,1.796051272,-177.809071102
26.565051,15.494,4.572,34.077676066,11.35922544,1.703883816,-55.092242876
7.125016,13.462,4.318,179.577488698,3.150482142,2.047813532,-202.733533318
0,11.43,4.318,0,25.4,2.032,-23.368
344.054604,9.652,4.826,104.668749768,3.488958224,1.84914794,-183.065643266
336.801409,7.874,5.588,136.74251925,3.335183322,1.934406342,-191.506230398
320.194429,6.35,6.858,162.6068376,3.252136752,1.9838035,-196.396538372
308.659808,5.334,8.128,35.701322044,3.966813504,1.626393496,-161.0129622
293.198591,4.572,9.906,56.698117744,3.335183322,1.934406342,-191.506230398
285.945396,4.064,11.684,80.246041438,3.488958224,1.84914794,-183.065643266
270,4.064,13.208,0,25.4,1.524,-23.876
261.869898,4.318,14.986,25.144717046,3.592102544,1.796051272,-177.809071102
246.801409,5.08,16.764,136.74251925,3.335183322,1.934406342,-191.506230398
234.462322,6.35,18.542,91.53339072,2.952690056,2.18499055,-216.314071054
219.805571,7.874,19.812,35.773504272,3.252136752,1.9838035,-196.396538372
206.565051,9.398,20.574,34.077676066,11.35922544,1.703883816,-55.092242876
195.945396,11.176,21.082,80.246041438,3.488958224,1.84914794,-183.065643266
180,12.192,21.082,0,25.4,1.016,-24.384
180,13.208,21.082,0,25.4,1.016,-24.384
233.130102,23.368,6.858,91.44,5.08,1.27,-125.73
248.198591,23.876,8.128,80.18324705,4.716661636,1.36783191,-135.415354264
248.198591,24.384,9.398,80.18324705,4.716661636,1.36783191,-135.415354264
260.537678,24.638,10.922,25.054405568,4.175734346,1.545021802,-152.95714646
261.869898,24.892,12.7,25.144717046,3.592102544,1.796051272,-177.809071102
278.130102,24.638,14.478,154.460405328,3.592102544,1.796051272,-177.809071102
279.462322,24.384,16.002,129.447762694,4.175734346,1.545021802,-152.95714646
288.434949,23.876,17.526,56.225296744,8.032185358,1.60643697,-78.715415594
299.744881,22.86,19.304,148.072666262,3.150482142,2.047813532,-202.733533318
308.659808,21.844,20.574,35.701322044,3.966813504,1.626393496,-161.0129622
315,20.574,21.844,17.960512212,17.960512212,1.796051272,-34.124973152
321.340192,19.304,22.86,126.938033652,3.966813504,1.626393496,-161.0129622
329.036243,18.034,23.622,56.628832894,4.356064186,1.481061808,-146.625116452
338.198591,16.764,24.13,80.18324705,4.716661636,1.36783191,-135.415354264
338.198591,15.494,24.638,80.18324705,4.716661636,1.36783191,-135.415354264
350.537678,13.97,24.892,25.054405568,4.175734346,1.545021802,-152.95714646
0,12.7,24.892,0,25.4,1.27,-24.13
0,11.43,24.892,0,25.4,1.27,-24.13
11.309932,10.16,24.638,104.608346536,4.981349956,1.29515108,-128.219944728
14.036243,9.144,24.384,80.085263502,6.160405002,1.047268924,-103.679614078
21.801409,7.874,23.876,56.599939124,4.716661636,1.36783191,-135.415354264
21.801409,6.604,23.368,56.599939124,4.716661636,1.36783191,-135.415354264
36.869898,5.588,22.606,35.56,5.08,1.27,-125.73
36.869898,4.572,21.844,35.56,5.08,1.27,-125.73
33.690068,19.05,2.286,35.223462446,7.04469254,0.915809954,-90.665192304
26.565051,17.526,1.524,34.077676066,11.35922544,1.703883816,-55.092242876
21.801409,16.256,1.016,56.599939124,4.716661636,1.36783191,-135.415354264
11.309932,14.986,0.762,104.608346536,4.981349956,1.29515108,-128.219944728
8.130102,13.208,0.508,154.460405328,3.592102544,1.796051272,-177.809071102
0,11.684,0.508,0,25.4,1.524,-23.876
350.537678,10.16,0.762,25.054405568,4.175734346,1.545021802,-152.95714646
348.690068,8.89,1.016,24.906749272,4.981349956,1.29515108,-128.219944728
338.198591,7.62,1.524,80.18324705,4.716661636,1.36783191,-135.415354264
333.434949,6.604,2.032,22.718450626,11.35922544,1.135922544,-55.660204148
323.130102,5.588,2.794,91.44,5.08,1.27,-125.73
323.130102,4.572,3.556,91.44,5.08,1.27,-125.73
315,3.556,4.572,17.960512212,17.960512212,1.436840916,-34.484183508
306.869898,2.794,5.588,35.56,5.08,1.27,-125.73
306.869898,2.032,6.604,35.56,5.08,1.27,-125.73
296.565051,1.524,7.62,34.077676066,11.35922544,1.135922544,-55.660204148
291.801409,1.016,8.89,56.599939124,4.716661636,1.36783191,-135.415354264
281.309932,0.762,10.16,104.608346536,4.981349956,1.29515108,-128.219944728
281.309932,0.508,11.43,104.608346536,4.981349956,1.29515108,-128.219944728
270,0.508,12.7,0,25.4,1.27,-24.13
270,0.508,13.97,0,25.4,1.27,-24.13
258.690068,0.762,15.24,24.906749272,4.981349956,1.29515108,-128.219944728
258.690068,1.016,16.51,24.906749272,4.981349956,1.29515108,-128.219944728
248.198591,1.524,17.78,80.18324705,4.716661636,1.36783191,-135.415354264
243.434949,2.032,18.796,22.718450626,11.35922544,1.135922544,-55.660204148
233.130102,2.794,19.812,91.44,5.08,1.27,-125.73
233.130102,3.556,20.828,91.44,5.08,1.27,-125.73
225,4.572,21.844,17.960512212,17.960512212,1.436840916,-34.484183508
0,8.89,5.334,0,25.4,7.366,-18.034
180,14.224,9.906,0,25.4,1.016,-24.384
270,14.224,11.176,0,25.4,1.27,-24.13
180,15.748,11.176,0,25.4,1.524,-23.876
270,15.748,12.192,0,25.4,1.016,-24.384
270,24.892,2.794,0,25.4,0.254,-25.146
270,24.892,3.302,0,25.4,0.508,-24.892
45,20.828,2.032,17.960512212,17.960512212,3.592102544,-32.328922134
225,22.86,5.08,17.960512212,17.960512212,3.592102544,-32.328922134
45,20.066,2.794,17.960512212,17.960512212,3.592102544,-32.328922134
0,13.8209782,14.218285,0,25.4,0,-25.4
0,14.9935692,16.1227008,0,25.4,0,-25.4
0,16.2642042,18.3038496,0,25.4,0,-25.4
135,24.892,3.302,17.960512212,17.960512212,12.57235865,-23.348666028
56.309932,24.384,1.778,56.357539812,7.04469254,0.915809954,-90.665192304
45,23.876,1.27,17.960512212,17.960512212,0.718420458,-35.202603966
33.690068,23.114,0.762,35.223462446,7.04469254,0.915809954,-90.665192304
18.434949,22.352,0.508,56.225296744,8.032185358,0.803218612,-79.518633952
135.806929,22.352,0.508,-35.917462074,0.505879862,12.753228494,-1262.569616842
289.983107,12.192,12.192,217.006845132,2.170068558,2.9729938,-294.326383914
338.198591,13.462,13.208,80.18324705,4.716661636,2.73566382,-134.047522354
105.945396,12.192,12.192,80.246041438,3.488958224,1.84914794,-183.065643266
218.659808,13.462,13.208,35.701322044,3.966813504,1.626393496,-161.0129622
336.801409,11.684,13.97,136.74251925,3.335183322,1.934406342,-191.506230398
56.309932,16.764,19.177,56.357539812,7.04469254,0.457905104,-91.123097408
239.036243,12.065,11.049,56.628832894,4.356064186,0.740530904,-147.365647356
236.309932,14.478,15.24,56.357539812,7.04469254,0.457905104,-91.123097408
236.309932,15.748,17.272,56.357539812,7.04469254,0.457905104,-91.123097408
0,11.684,10.414,0,25.4,0,-25.4
0,12.446,8.636,0,25.4,0.508,-24.892
0,13.716,8.636,0,25.4,0,-25.4
0,11.43,8.636,0,25.4,0,-25.4
0,9.144,8.636,0,25.4,0,-25.4
0,6.858,8.636,0,25.4,0,-25.4
180,6.096,8.636,0,25.4,0.762,-24.638
180,8.382,8.636,0,25.4,0.762,-24.638
180,10.668,8.636,0,25.4,0.762,-24.638
239.036243,11.43,9.906,56.628832894,4.356064186,1.481061808,-146.625116452
0,11.176,11.176,0,25.4,1.27,-24.13
341.565051,10.414,11.43,24.09655582,8.032185358,0.803218612,-79.518633952
315,9.906,11.938,17.960512212,17.960512212,0.718420458,-35.202603966
296.565051,9.652,12.446,34.077676066,11.35922544,0.567961272,-56.22816542
180,9.652,12.446,0,25.4,5.334,-20.066
240.068488,14.478,20.828,204.780260492,0.667036766,9.672031964,-957.531152498
0,16.002,12.446,0,25.4,4.572,-20.828
240.255119,19.05,17.78,56.708680588,3.150482142,6.143440342,-198.637906508
`));m(d.ParsePatFile(`
*REDBACK,REDBACK
;By John Hyslop
;Developed in mm as Metric QCAD3 pattern
63.434949,18.542,19.812,22.71845063,11.35922544,0.567961272,-56.22816542
33.690068,17.78,19.304,35.22346245,7.04469254,0.915809954,-90.6651923
75.963757,17.526,18.288,24.6416195,6.160405002,1.047268924,-103.6796141
0,16.764,18.288,0,25.4,0.762,-24.638
108.434949,17.018,17.526,56.22529674,8.032185358,0.803218612,-79.51863395
90,17.018,17.272,0,25.4,0.254,-25.146
0,13.716,14.478,0,25.4,0.254,-25.146
270,13.716,14.732,0,25.4,0.254,-25.146
225,13.97,14.986,17.96051221,17.96051221,0.359210356,-35.56181432
180,14.224,14.986,0,25.4,0.254,-25.146
315,13.97,15.24,17.96051221,17.96051221,0.359210356,-35.56181432
15.524111,9.398,13.97,184.9097925,1.359630758,4.745111668,-469.7660475
0,8.89,13.97,0,25.4,0.508,-24.892
45,8.636,13.716,17.96051221,17.96051221,0.359210356,-35.56181432
0,7.874,13.716,0,25.4,0.762,-24.638
26.565051,4.826,12.192,34.07767607,11.35922544,3.407767632,-53.38835906
0,4.572,12.192,0,25.4,0.254,-25.146
33.690068,3.81,11.684,35.22346245,7.04469254,0.915809954,-90.6651923
32.005383,1.778,10.414,91.54141687,2.692394666,2.396231174,-237.2268895
45,1.524,10.16,17.96051221,17.96051221,0.359210356,-35.56181432
270,1.524,10.414,0,25.4,0.254,-25.146
225,1.778,10.668,17.96051221,17.96051221,0.359210356,-35.56181432
213.690068,4.064,12.192,35.22346245,7.04469254,2.747430116,-88.8335724
243.434949,4.318,12.7,22.71845063,11.35922544,0.567961272,-56.22816542
205.016893,8.128,14.478,56.77539445,1.534470134,4.20444803,-416.2403639
189.462322,9.652,14.732,129.4477627,4.175734346,1.545021802,-152.9571465
194.036243,10.668,14.986,80.0852635,6.160405002,1.047268924,-103.6796141
194.036243,12.7,15.494,80.0852635,6.160405002,2.094537594,-102.6323452
198.434949,14.224,16.002,56.22529674,8.032185358,1.60643697,-78.71541559
6.340192,11.938,15.748,204.7621356,2.804960862,2.30006779,-227.7067148
315,11.684,16.002,17.96051221,17.96051221,0.359210356,-35.56181432
45,11.43,15.748,17.96051221,17.96051221,0.359210356,-35.56181432
23.198591,9.652,14.986,56.69811774,3.335183322,1.934406342,-191.5062304
0,8.89,14.986,0,25.4,0.762,-24.638
45,8.128,14.224,17.96051221,17.96051221,1.077630814,-34.84339386
236.309932,8.636,14.986,56.35753981,7.04469254,0.915809954,-90.6651923
206.565051,9.144,15.24,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,10.668,16.002,34.07767607,11.35922544,1.703883816,-55.09224288
206.565051,11.176,16.256,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,11.684,16.51,34.07767607,11.35922544,0.567961272,-56.22816542
180,14.478,16.51,0,25.4,2.794,-22.606
225,14.732,16.764,17.96051221,17.96051221,0.359210356,-35.56181432
321.340192,13.462,17.78,126.9380337,3.966813504,1.626393496,-161.0129622
296.565051,13.208,18.288,34.07767607,11.35922544,0.567961272,-56.22816542
285.945396,12.7,20.066,80.24604144,3.488958224,1.84914794,-183.0656433
254.054604,13.208,21.844,104.6687498,3.488958224,1.84914794,-183.0656433
135,13.462,21.59,17.96051221,17.96051221,0.359210356,-35.56181432
90,13.462,20.828,0,25.4,0.762,-24.638
71.565051,13.208,20.066,24.09655582,8.032185358,0.803218612,-79.51863395
105.945396,13.716,18.288,80.24604144,3.488958224,1.84914794,-183.0656433
135,14.732,17.272,17.96051221,17.96051221,1.436840916,-34.48418351
180,14.986,17.272,0,25.4,0.254,-25.146
270,14.986,17.526,0,25.4,0.254,-25.146
270,14.986,18.034,0,25.4,0.508,-24.892
296.565051,14.732,18.542,34.07767607,11.35922544,0.567961272,-56.22816542
278.130102,14.478,20.32,154.4604053,3.592102544,1.796051272,-177.8090711
251.565051,14.732,21.082,24.09655582,8.032185358,0.803218612,-79.51863395
225,14.986,21.336,17.96051221,17.96051221,0.359210356,-35.56181432
225,15.24,21.59,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,15.494,22.098,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,16.002,23.114,22.71845063,11.35922544,1.135922544,-55.66020415
243.434949,16.51,24.13,22.71845063,11.35922544,1.135922544,-55.66020415
225,16.764,24.384,17.96051221,17.96051221,0.359210356,-35.56181432
168.690068,20.574,23.622,24.90674927,4.981349956,3.885452986,-125.6296428
355.601295,17.272,23.876,25.32518405,1.9480911,3.31175487,-327.8637273
56.309932,16.764,23.114,56.35753981,7.04469254,0.915809954,-90.6651923
56.309932,16.256,22.352,56.35753981,7.04469254,0.915809954,-90.6651923
63.434949,16.002,21.844,22.71845063,11.35922544,0.567961272,-56.22816542
56.309932,15.494,21.082,56.35753981,7.04469254,0.915809954,-90.6651923
71.565051,15.24,20.32,24.09655582,8.032185358,0.803218612,-79.51863395
90,15.24,20.066,0,25.4,0.254,-25.146
90,15.24,19.558,0,25.4,0.508,-24.892
90,15.24,18.796,0,25.4,0.762,-24.638
225,15.494,19.05,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,15.748,19.558,22.71845063,11.35922544,0.567961272,-56.22816542
225,16.002,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,16.51,20.066,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,17.018,20.32,34.07767607,11.35922544,0.567961272,-56.22816542
180,17.526,20.32,0,25.4,0.508,-24.892
180,18.034,20.32,0,25.4,0.508,-24.892
180,18.796,20.32,0,25.4,0.762,-24.638
153.434949,19.304,20.066,22.71845063,11.35922544,0.567961272,-56.22816542
135,19.558,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
135,14.224,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
26.565051,19.558,18.796,34.07767607,11.35922544,0.567961272,-56.22816542
56.309932,19.05,18.034,56.35753981,7.04469254,0.915809954,-90.6651923
14.036243,18.034,17.78,80.0852635,6.160405002,1.047268924,-103.6796141
90,18.034,17.018,0,25.4,0.762,-24.638
341.565051,17.272,17.272,24.09655582,8.032185358,0.803218612,-79.51863395
0,17.018,17.272,0,25.4,0.254,-25.146
90,14.224,13.97,0,25.4,0.254,-25.146
180,14.478,13.97,0,25.4,0.254,-25.146
225,14.732,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
270,14.732,14.478,0,25.4,0.254,-25.146
135,14.986,14.224,17.96051221,17.96051221,0.359210356,-35.56181432
74.475889,13.716,9.652,289.6013664,1.359630758,4.745111668,-469.7660475
90,13.716,9.144,0,25.4,0.508,-24.892
45,13.462,8.89,17.96051221,17.96051221,0.359210356,-35.56181432
90,13.462,8.128,0,25.4,0.762,-24.638
63.434949,11.938,5.08,22.71845063,11.35922544,3.407767632,-53.38835906
90,11.938,4.826,0,25.4,0.254,-25.146
56.309932,11.43,4.064,56.35753981,7.04469254,0.915809954,-90.6651923
57.994617,10.16,2.032,148.0817038,2.692394666,2.396231174,-237.2268895
45,9.906,1.778,17.96051221,17.96051221,0.359210356,-35.56181432
180,10.16,1.778,0,25.4,0.254,-25.146
225,10.414,2.032,17.96051221,17.96051221,0.359210356,-35.56181432
236.309932,11.938,4.318,56.35753981,7.04469254,2.747430116,-88.8335724
206.565051,12.446,4.572,34.07767607,11.35922544,0.567961272,-56.22816542
244.983107,14.224,8.382,363.6694177,1.534470134,4.20444803,-416.2403639
260.537678,14.478,9.906,25.05440557,4.175734346,1.545021802,-152.9571465
255.963757,14.732,10.922,24.6416195,6.160405002,1.047268924,-103.6796141
255.963757,15.24,12.954,24.6416195,6.160405002,2.094537594,-102.6323452
251.565051,15.748,14.478,24.09655582,8.032185358,1.60643697,-78.71541559
83.659808,15.494,12.192,25.24464674,2.804960862,2.30006779,-227.7067148
135,15.748,11.938,17.96051221,17.96051221,0.359210356,-35.56181432
45,15.494,11.684,17.96051221,17.96051221,0.359210356,-35.56181432
66.801409,14.732,9.906,136.7425193,3.335183322,1.934406342,-191.5062304
90,14.732,9.144,0,25.4,0.762,-24.638
45,13.97,8.382,17.96051221,17.96051221,1.077630814,-34.84339386
213.690068,14.732,8.89,35.22346245,7.04469254,0.915809954,-90.6651923
243.434949,14.986,9.398,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,15.748,10.922,22.71845063,11.35922544,1.703883816,-55.09224288
243.434949,16.002,11.43,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,16.256,11.938,22.71845063,11.35922544,0.567961272,-56.22816542
270,16.256,14.732,0,25.4,2.794,-22.606
225,16.51,14.986,17.96051221,17.96051221,0.359210356,-35.56181432
128.659808,17.526,13.716,35.70132204,3.966813504,1.626393496,-161.0129622
153.434949,18.034,13.462,22.71845063,11.35922544,0.567961272,-56.22816542
164.054604,19.812,12.954,104.6687498,3.488958224,1.84914794,-183.0656433
195.945396,21.59,13.462,80.24604144,3.488958224,1.84914794,-183.0656433
315,21.336,13.716,17.96051221,17.96051221,0.359210356,-35.56181432
0,20.574,13.716,0,25.4,0.762,-24.638
18.434949,19.812,13.462,56.22529674,8.032185358,0.803218612,-79.51863395
344.054604,18.034,13.97,104.6687498,3.488958224,1.84914794,-183.0656433
315,17.018,14.986,17.96051221,17.96051221,1.436840916,-34.48418351
270,17.018,15.24,0,25.4,0.254,-25.146
180,17.272,15.24,0,25.4,0.254,-25.146
180,17.78,15.24,0,25.4,0.508,-24.892
153.434949,18.288,14.986,22.71845063,11.35922544,0.567961272,-56.22816542
171.869898,20.066,14.732,25.14471705,3.592102544,1.796051272,-177.8090711
198.434949,20.828,14.986,56.22529674,8.032185358,0.803218612,-79.51863395
225,21.082,15.24,17.96051221,17.96051221,0.359210356,-35.56181432
225,21.336,15.494,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,21.844,15.748,34.07767607,11.35922544,0.567961272,-56.22816542
206.565051,22.86,16.256,34.07767607,11.35922544,1.135922544,-55.66020415
206.565051,23.876,16.764,34.07767607,11.35922544,1.135922544,-55.66020415
225,24.13,17.018,17.96051221,17.96051221,0.359210356,-35.56181432
281.309932,23.368,20.828,104.6083465,4.981349956,3.885452986,-125.6296428
94.398705,23.622,17.526,305.8502981,1.9480911,3.31175487,-327.8637273
33.690068,22.86,17.018,35.22346245,7.04469254,0.915809954,-90.6651923
33.690068,22.098,16.51,35.22346245,7.04469254,0.915809954,-90.6651923
26.565051,21.59,16.256,34.07767607,11.35922544,0.567961272,-56.22816542
33.690068,20.828,15.748,35.22346245,7.04469254,0.915809954,-90.6651923
18.434949,20.066,15.494,56.22529674,8.032185358,0.803218612,-79.51863395
0,19.812,15.494,0,25.4,0.254,-25.146
0,19.304,15.494,0,25.4,0.508,-24.892
0,18.542,15.494,0,25.4,0.762,-24.638
225,18.796,15.748,17.96051221,17.96051221,0.359210356,-35.56181432
206.565051,19.304,16.002,34.07767607,11.35922544,0.567961272,-56.22816542
225,19.558,16.256,17.96051221,17.96051221,0.359210356,-35.56181432
243.434949,19.812,16.764,22.71845063,11.35922544,0.567961272,-56.22816542
243.434949,20.066,17.272,22.71845063,11.35922544,0.567961272,-56.22816542
270,20.066,17.78,0,25.4,0.508,-24.892
270,20.066,18.288,0,25.4,0.508,-24.892
270,20.066,19.05,0,25.4,0.762,-24.638
296.565051,19.812,19.558,34.07767607,11.35922544,0.567961272,-56.22816542
315,19.558,19.812,17.96051221,17.96051221,0.359210356,-35.56181432
`));m(d.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,2.38125
45, 1.6838,0, 0,2.38125, 0,-2.38125
`));m(d.ParsePatFile(`
*SCAFFOLD
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
270,19.304,21.336,25.4,25.4,0.508,-24.892
326.3099325,6.604,4.064,56.357539812,7.04469254,14.652960026,-76.928042486
90,6.096,12.446,25.4,25.4,0.508,-24.892
270,6.35,4.064,25.4,25.4,8.128,-17.272
146.3099325,6.096,21.336,56.357539812,7.04469254,14.65296028,-76.928041978
180,19.304,12.446,0,25.4,0.508,-24.892
270,18.796,4.572,25.4,25.4,0.508,-24.892
0,18.796,21.336,0,25.4,0.508,-24.892
90,6.35,12.954,25.4,25.4,7.874,-17.526
270,19.304,12.954,25.4,25.4,0.508,-24.892
0,6.604,4.318,0,25.4,12.192,-13.208
0,6.096,12.954,0,25.4,0.508,-24.892
180,19.304,4.572,0,25.4,0.508,-24.892
90,18.796,20.828,25.4,25.4,0.508,-24.892
212.855722,6.096,12.446,514.310608918,0.444520828,14.513605212,-1436.846928942
147.144278,6.096,4.572,937.049925236,0.444520828,14.513605212,-1436.846928942
213.6900675,6.096,4.064,35.223462446,7.04469254,14.652959772,-76.928042486
180,6.096,4.318,0,25.4,12.192,-13.208
0,6.604,21.082,0,25.4,12.192,-13.208
90,6.604,4.064,25.4,25.4,0.508,-24.892
180,19.304,20.828,0,25.4,0.508,-24.892
90,18.796,12.446,25.4,25.4,0.508,-24.892
147.144278,18.796,4.572,937.049925236,0.444520828,14.513605466,-1436.846928688
0,6.096,4.064,0,25.4,0.508,-24.892
0,6.604,12.7,0,25.4,12.192,-13.208
270,6.604,21.336,25.4,25.4,0.508,-24.892
90,19.05,4.572,25.4,25.4,7.874,-17.526
212.855722,18.796,20.828,514.310608918,0.444520828,14.513605466,-1436.846928688
180,6.604,12.446,0,25.4,0.508,-24.892
270,6.096,4.572,25.4,25.4,0.508,-24.892
0,6.096,21.336,0,25.4,0.508,-24.892
270,6.604,12.954,25.4,25.4,0.508,-24.892
270,19.05,20.828,25.4,25.4,7.874,-17.526
32.855722,6.604,4.572,514.310608918,0.444520828,14.513605466,-1436.846928688
180,6.604,4.572,0,25.4,0.508,-24.892
0,18.796,12.954,0,25.4,0.508,-24.892
90,19.304,4.064,25.4,25.4,0.508,-24.892
90,6.096,20.828,25.4,25.4,0.508,-24.892
180,6.096,21.082,0,25.4,12.192,-13.208
147.144278,6.096,12.954,937.049925236,0.444520828,14.513605212,-1436.846928942
180,6.096,12.7,0,25.4,12.192,-13.208
270,6.35,12.446,25.4,25.4,7.874,-17.526
212.855722,6.096,20.828,514.310608918,0.444520828,14.513605466,-1436.846928688
0,18.796,4.064,0,25.4,0.508,-24.892
270,19.05,4.064,25.4,25.4,8.128,-17.272
180,6.604,20.828,0,25.4,0.508,-24.892
213.6900675,18.796,4.064,35.223462446,7.04469254,14.652960026,-76.928042486
327.144278,6.604,20.828,937.049925236,0.444520828,14.513605466,-1436.846928688
`));m(d.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,3.175, 3.175,-3.175
90, 0,0, 0,3.175, 3.175,-3.175
`));m(d.ParsePatFile(`
*SQUIGGLE-01,SQUIGGLE-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,2.794,-9.906,17.960512212,17.960512212,28.377609234,-7.54341519
56.309932,1.778,13.97,56.357539812,7.04469254,1.831620162,-89.74938235
81.869898,1.524,12.192,25.144717046,3.592102544,1.796051272,-177.809071102
99.462322,1.778,10.668,129.447762694,4.175734346,1.545021802,-152.95714646
123.690068,2.794,9.144,35.223462446,7.04469254,1.831620162,-89.74938235
146.309932,4.318,8.128,56.357539812,7.04469254,1.831620162,-89.74938235
170.537678,5.842,7.874,25.054405568,4.175734346,1.545021802,-152.95714646
188.130102,7.62,8.128,154.460405328,3.592102544,1.796051272,-177.809071102
213.690068,9.144,9.144,35.223462446,7.04469254,1.831620162,-89.74938235
225,16.51,16.51,17.960512212,17.960512212,10.417097022,-25.503927402
213.690068,18.034,17.526,35.223462446,7.04469254,1.831620162,-89.74938235
189.462322,19.558,17.78,129.447762694,4.175734346,1.545021802,-152.95714646
171.869898,21.336,17.526,25.144717046,3.592102544,1.796051272,-177.809071102
146.309932,22.86,16.51,56.357539812,7.04469254,1.831620162,-89.74938235
123.690068,23.876,14.986,35.223462446,7.04469254,1.831620162,-89.74938235
99.462322,24.13,13.462,129.447762694,4.175734346,1.545021802,-152.95714646
81.869898,23.876,11.684,25.144717046,3.592102544,1.796051272,-177.809071102
56.309932,22.86,10.16,56.357539812,7.04469254,1.831620162,-89.74938235
`));m(d.ParsePatFile(`
*SQUIGGLE-02,SQUIGGLE-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
75.963757,25.146,4.064,24.6416195,6.160405002,1.047268924,-103.679614078
63.434949,24.638,3.048,22.718450626,11.35922544,1.135922544,-55.660204148
45,23.876,2.286,17.960512212,17.960512212,1.077630814,-34.843393864
14.036243,22.86,2.032,80.085263502,6.160405002,1.047268924,-103.679614078
0,21.59,2.032,0,25.4,1.27,-24.13
345.963757,20.574,2.286,24.6416195,6.160405002,1.047268924,-103.679614078
315,19.812,3.048,17.960512212,17.960512212,1.077630814,-34.843393864
296.565051,19.304,4.064,34.077676066,11.35922544,1.135922544,-55.660204148
284.036243,19.05,5.08,80.085263502,6.160405002,1.047268924,-103.679614078
281.309932,18.796,21.59,104.608346536,4.981349956,1.29515108,-128.219944728
303.690068,18.288,22.352,35.223462446,7.04469254,0.915809954,-90.665192304
315,17.526,23.114,17.960512212,17.960512212,1.077630814,-34.843393864
345.963757,16.51,23.368,24.6416195,6.160405002,1.047268924,-103.679614078
0,15.24,23.368,0,25.4,1.27,-24.13
14.036243,14.224,23.114,80.085263502,6.160405002,1.047268924,-103.679614078
45,13.462,22.352,17.960512212,17.960512212,1.077630814,-34.843393864
56.309932,12.954,21.59,56.357539812,7.04469254,0.915809954,-90.665192304
78.690068,12.7,20.32,24.906749272,4.981349956,1.29515108,-128.219944728
75.963757,12.446,4.064,24.6416195,6.160405002,1.047268924,-103.679614078
63.434949,11.938,3.048,22.718450626,11.35922544,1.135922544,-55.660204148
45,11.176,2.286,17.960512212,17.960512212,1.077630814,-34.843393864
14.036243,10.16,2.032,80.085263502,6.160405002,1.047268924,-103.679614078
0,8.89,2.032,0,25.4,1.27,-24.13
345.963757,7.874,2.286,24.6416195,6.160405002,1.047268924,-103.679614078
315,7.112,3.048,17.960512212,17.960512212,1.077630814,-34.843393864
296.565051,6.604,4.064,34.077676066,11.35922544,1.135922544,-55.660204148
284.036243,6.35,5.08,80.085263502,6.160405002,1.047268924,-103.679614078
281.309932,6.096,21.59,104.608346536,4.981349956,1.29515108,-128.219944728
303.690068,5.588,22.352,35.223462446,7.04469254,0.915809954,-90.665192304
315,4.826,23.114,17.960512212,17.960512212,1.077630814,-34.843393864
345.963757,3.81,23.368,24.6416195,6.160405002,1.047268924,-103.679614078
0,2.54,23.368,0,25.4,1.27,-24.13
14.036243,1.524,23.114,80.085263502,6.160405002,1.047268924,-103.679614078
45,0.762,22.352,17.960512212,17.960512212,1.077630814,-34.843393864
56.309932,0.254,21.59,56.357539812,7.04469254,0.915809954,-90.665192304
78.690068,0,20.32,24.906749272,4.981349956,1.29515108,-128.219944728
270,19.05,20.32,0,25.4,15.24,-10.16
270,12.7,20.32,0,25.4,15.24,-10.16
270,6.35,20.32,0,25.4,15.24,-10.16
270,0,20.32,0,25.4,15.24,-10.16
`));m(d.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,5.49926, 3.175,-3.175
60, 0,0, 0,5.49926, 3.175,-3.175
120, 1.5875,2.74963, 0,5.49926, 3.175,-3.175
`));m(d.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,3.175
45, 0,1.5875, 0,3.175
`));m(d.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, 12.7,21.997, 3.175,-22.225
90, 1.5875,0, 21.997,12.7, 1.5875,-42.4066
90, 1.98438,0, 21.997,12.7, 1.27,-42.7241
90, 1.19062,0, 21.997,12.7, 1.27,-42.7241
60, 2.38125,0, 12.7,21.997, 1.016,-24.384
120, .79375,0, 12.7,21.997, 1.016,-24.384
`));m(d.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,6.35
0, 0,3.175, 0,6.35, 3.175,-3.175
`));m(d.ParsePatFile(`
*TRI-OVERLAP
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
59.641885,2.286000254,3.81,1206.700468992,0.313103514,20.605334202,-2039.928082188
300.358115,12.7,21.590000254,853.832947398,0.313103514,20.605334202,-2039.928082188
180,9.129485678,15.494,0,25.4,18.258981262,-7.141018738
59.036243,22.737590288,4.452650734,56.628832894,4.356064186,5.17479407,-142.931383936
180,23.114,3.81,0,25.4,20.827999746,-4.572000254
300.963757,0,8.89,91.477345366,4.356064186,5.174794324,-142.931383682
300.784147,3.048,3.81,148.105450296,0.464280504,13.89591328,-1375.695350204
239.215853,22.352,3.81,1241.485813188,0.464280504,13.89591328,-1375.695350204
`));m(d.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, 4.7625,8.24889, 4.7625,-4.7625
120, 0,0, 4.76250001,8.24889, 4.7625,-4.7625
0, -2.38125,4.12445, 4.7625,8.24889, 4.7625,-4.7625
`));m(d.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in mm as metric QCAD3 pattern
; Metric Hatch Scale 1 Makes 152mm horizontally placed boards
; with a 13mm offset line to simulate a rounded edge
0,0,0,0,152
0,0,13,0,152
`));m(d.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
90,22.86,5.08,0,25.4,1.27,-24.13
75.963757,22.352,3.048,24.6416195,6.160405002,2.094537594,-102.632345154
66.801409,21.59,1.27,136.74251925,3.335183322,1.934406342,-191.506230398
54.462322,20.32,-0.508,91.53339072,2.952690056,2.18499055,-216.314071054
56.309932,19.304,-2.032,56.357539812,7.04469254,1.831620162,-89.74938235
90,20.066,5.588,0,25.4,1.778,-23.622
80.537678,19.812,4.064,25.054405568,4.175734346,1.545021802,-152.95714646
63.434949,19.05,2.54,22.718450626,11.35922544,1.703883816,-55.092242876
56.309932,18.034,1.016,56.357539812,7.04469254,1.831620162,-89.74938235
56.309932,17.018,-0.508,56.357539812,7.04469254,1.831620162,-89.74938235
333.434949,21.844,6.858,22.718450626,11.35922544,1.703883816,-55.092242876
344.054604,20.066,7.366,104.668749768,3.488958224,1.84914794,-183.065643266
0,18.034,7.366,0,25.4,2.032,-23.368
9.462322,16.51,7.112,129.447762694,4.175734346,1.545021802,-152.95714646
26.565051,14.986,6.35,34.077676066,11.35922544,1.703883816,-55.092242876
38.659808,13.716,5.334,35.701322044,3.966813504,1.626393496,-161.0129622
36.869898,11.684,3.81,35.56,5.08,2.54,-124.46
20.556045,9.652,3.048,136.750876358,2.97284521,2.170177016,-214.847518234
330.255119,23.114,9.398,56.708680588,3.150482142,2.047813532,-202.733533318
344.054604,21.336,9.906,104.668749768,3.488958224,1.84914794,-183.065643266
352.874984,19.304,10.16,25.203858152,3.150482142,2.047813532,-202.733533318
0,17.526,10.16,0,25.4,1.778,-23.622
14.036243,15.494,9.652,80.085263502,6.160405002,2.094537594,-102.632345154
26.565051,13.462,8.636,34.077676066,11.35922544,2.271845088,-54.524281604
33.690068,11.938,7.62,35.223462446,7.04469254,1.831620162,-89.74938235
35.537678,10.16,6.35,126.965671138,2.952690056,2.18499055,-216.314071054
0,5.08,2.54,0,25.4,1.27,-24.13
348.690068,3.81,2.794,24.906749272,4.981349956,1.29515108,-128.219944728
341.565051,3.048,3.048,24.09655582,8.032185358,0.803218612,-79.518633952
336.801409,1.27,3.81,136.74251925,3.335183322,1.934406342,-191.506230398
326.309932,-0.254,4.826,56.357539812,7.04469254,1.831620162,-89.74938235
324.462322,-2.032,6.096,91.53339072,2.952690056,2.18499055,-216.314071054
0,5.588,5.334,0,25.4,1.778,-23.622
350.537678,4.064,5.588,25.054405568,4.175734346,1.545021802,-152.95714646
333.434949,2.54,6.35,22.718450626,11.35922544,1.703883816,-55.092242876
326.309932,1.016,7.366,56.357539812,7.04469254,1.831620162,-89.74938235
326.309932,-0.508,8.382,56.357539812,7.04469254,1.831620162,-89.74938235
60.255119,16.002,23.114,56.708680588,3.150482142,2.047813532,-202.733533318
180,20.066,20.066,0,25.4,2.032,-23.368
164.054604,21.844,19.558,104.668749768,3.488958224,1.84914794,-183.065643266
153.434949,23.368,18.796,22.718450626,11.35922544,1.703883816,-55.092242876
330.255119,23.114,22.098,56.708680588,3.150482142,2.047813532,-202.733533318
345.963757,21.082,22.606,24.6416195,6.160405002,2.094537594,-102.632345154
352.874984,19.05,22.86,25.203858152,3.150482142,2.047813532,-202.733533318
60.255119,18.288,21.59,56.708680588,3.150482142,2.047813532,-202.733533318
80.537678,18.034,20.066,25.054405568,4.175734346,1.545021802,-152.95714646
90,18.034,18.034,0,25.4,2.032,-23.368
104.036243,18.542,16.002,80.085263502,6.160405002,2.094537594,-102.632345154
116.565051,19.304,14.478,34.077676066,11.35922544,1.703883816,-55.092242876
129.805571,20.574,12.954,35.773504272,3.252136752,1.9838035,-196.396538372
123.690068,21.59,11.43,35.223462446,7.04469254,1.831620162,-89.74938235
113.198591,22.352,9.652,56.698117744,3.335183322,1.934406342,-191.506230398
309.805571,18.034,11.684,35.773504272,3.252136752,1.9838035,-196.396538372
305.537678,16.764,13.462,126.965671138,2.952690056,2.18499055,-216.314071054
299.744881,15.748,15.24,148.072666262,3.150482142,2.047813532,-202.733533318
285.945396,15.24,17.018,80.246041438,3.488958224,1.84914794,-183.065643266
270,15.24,19.304,0,25.4,2.286,-23.114
74.054604,15.494,21.336,104.668749768,3.488958224,1.84914794,-183.065643266
82.874984,15.24,19.304,25.203858152,3.150482142,2.047813532,-202.733533318
39.805571,13.716,18.034,35.773504272,3.252136752,1.9838035,-196.396538372
35.537678,11.938,16.764,126.965671138,2.952690056,2.18499055,-216.314071054
33.690068,10.414,15.748,35.223462446,7.04469254,1.831620162,-89.74938235
15.945396,8.636,15.24,80.246041438,3.488958224,1.84914794,-183.065643266
6.340192,6.35,14.986,204.76213556,2.804960862,2.30006779,-227.706714766
350.537678,4.826,15.24,25.054405568,4.175734346,1.545021802,-152.95714646
344.054604,3.048,15.748,104.668749768,3.488958224,1.84914794,-183.065643266
23.198591,13.97,21.59,56.698117744,3.335183322,1.934406342,-191.506230398
29.744881,12.192,20.574,148.072666262,3.150482142,2.047813532,-202.733533318
39.805571,10.668,19.304,35.773504272,3.252136752,1.9838035,-196.396538372
29.744881,8.89,18.288,148.072666262,3.150482142,2.047813532,-202.733533318
7.125016,6.858,18.034,179.577488698,3.150482142,2.047813532,-202.733533318
0,5.334,18.034,0,25.4,1.524,-23.876
344.054604,3.556,18.542,104.668749768,3.488958224,1.84914794,-183.065643266
333.434949,2.54,19.05,22.718450626,11.35922544,1.135922544,-55.660204148
234.462322,7.874,-0.254,91.53339072,2.952690056,2.18499055,-216.314071054
240.255119,8.89,1.524,56.708680588,3.150482142,2.047813532,-202.733533318
243.434949,9.906,3.556,22.718450626,11.35922544,2.271845088,-54.524281604
262.874984,10.16,5.588,25.203858152,3.150482142,2.047813532,-202.733533318
270,10.16,7.62,0,25.4,2.032,-23.368
282.528808,9.652,9.906,104.69063898,2.755016842,2.341764176,-231.834664854
293.198591,8.89,11.684,56.698117744,3.335183322,1.934406342,-191.506230398
309.805571,7.62,13.208,35.773504272,3.252136752,1.9838035,-196.396538372
305.537678,6.35,14.986,126.965671138,2.952690056,2.18499055,-216.314071054
270,5.334,19.812,0,25.4,1.778,-23.622
254.054604,5.842,21.59,104.668749768,3.488958224,1.84914794,-183.065643266
246.801409,6.604,23.368,136.74251925,3.335183322,1.934406342,-191.506230398
236.309932,5.334,1.016,56.357539812,7.04469254,1.831620162,-89.74938235
234.462322,6.604,2.794,91.53339072,2.952690056,2.18499055,-216.314071054
249.443955,7.366,4.826,80.266818638,2.97284521,2.170177016,-214.847518234
270,7.366,6.858,0,25.4,2.032,-23.368
278.130102,7.112,8.636,154.460405328,3.592102544,1.796051272,-177.809071102
296.565051,6.096,10.668,34.077676066,11.35922544,2.271845088,-54.524281604
309.805571,4.826,12.192,35.773504272,3.252136752,1.9838035,-196.396538372
303.690068,3.81,13.716,35.223462446,7.04469254,1.831620162,-89.74938235
290.556045,3.048,15.748,136.750876358,2.97284521,2.170177016,-214.847518234
341.565051,1.524,16.256,24.09655582,8.032185358,1.60643697,-78.715415594
324.462322,-0.254,17.526,91.53339072,2.952690056,2.18499055,-216.314071054
324.462322,-2.032,18.796,91.53339072,2.952690056,2.18499055,-216.314071054
146.309932,1.016,20.066,56.357539812,7.04469254,1.831620162,-89.74938235
146.309932,2.54,19.05,56.357539812,7.04469254,1.831620162,-89.74938235
262.874984,2.794,21.082,25.203858152,3.150482142,2.047813532,-202.733533318
255.963757,3.302,23.114,24.6416195,6.160405002,2.094537594,-102.632345154
240.255119,4.318,24.892,56.708680588,3.150482142,2.047813532,-202.733533318
`));m(d.ParsePatFile(`
*WIRE-FENCE
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in mm as metric QCAD3 pattern
315,11.684,12.7,17.960512212,17.960512212,1.186955462,-34.734068962
315,13.353142966,14.332857034,17.960512212,17.960512212,1.231577928,-34.689446496
3.731397,12.767918076,14.294690232,381.845330542,0.55100347,0.586467966,-1170.2956782
183.17983,11.77579941,14.229987034,432.544118908,1.408938508,23.016097986,-434.888914066
183.17983,11.714581854,13.209697736,432.544118908,1.408938508,23.012451308,-434.892560744
153.434949,13.208,12.954,22.718450626,11.35922544,0.567961272,-56.22816542
266.593556,13.208,12.954,432.546308388,0.301846742,25.69937837,-2111.67704156
266.593556,14.224,13.462,432.546308388,0.301846742,25.69937837,-2111.67704156
2.602562,12.523304392,11.860695608,534.003174054,1.153354564,0.622066574,-558.754908396
`));m(d.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,24.13,0,25.4,1.016,-24.384
90,1.016,20.828,0,25.4,3.302,-22.098
180,8.382,20.828,0,25.4,7.366,-18.034
49.763642,5.588,17.526,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,17.526,0,25.4,1.524,-23.876
51.340192,4.064,13.716,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,13.716,0,25.4,1.524,-23.876
52.431408,3.048,10.414,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,10.414,0,25.4,1.27,-24.13
53.130102,2.032,7.366,91.44,5.08,3.81,-123.19
180,3.302,7.366,0,25.4,1.27,-24.13
53.972627,1.27,4.572,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,4.572,0,25.4,1.27,-24.13
54.462322,0,1.016,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,24.13,0,25.4,1.016,-24.384
90,24.384,20.828,0,25.4,3.302,-22.098
0,17.018,20.828,0,25.4,7.366,-18.034
130.236358,19.812,17.526,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,17.526,0,25.4,1.524,-23.876
128.659808,21.336,13.716,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,13.716,0,25.4,1.524,-23.876
127.568592,22.352,10.414,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,10.414,0,25.4,1.27,-24.13
126.869898,23.368,7.366,35.56,5.08,3.81,-123.19
0,22.098,7.366,0,25.4,1.27,-24.13
126.027373,24.13,4.572,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,4.572,0,25.4,1.27,-24.13
125.537678,25.4,1.016,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,1.016,0,25.4,1.016,-24.384
270,11.684,4.318,0,25.4,3.302,-22.098
0,4.318,4.318,0,25.4,7.366,-18.034
229.763642,7.112,7.62,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,7.62,0,25.4,1.524,-23.876
231.340192,8.636,11.43,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,11.43,0,25.4,1.524,-23.876
232.431408,9.652,14.732,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,14.732,0,25.4,1.27,-24.13
233.130102,10.668,17.78,91.44,5.08,3.81,-123.19
0,9.398,17.78,0,25.4,1.27,-24.13
233.972627,11.43,20.574,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,20.574,0,25.4,1.27,-24.13
234.462322,12.7,24.13,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,1.016,0,25.4,1.016,-24.384
270,13.716,4.318,0,25.4,3.302,-22.098
180,21.082,4.318,0,25.4,7.366,-18.034
310.236358,18.288,7.62,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,7.62,0,25.4,1.524,-23.876
308.659808,16.764,11.43,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,11.43,0,25.4,1.524,-23.876
307.568592,15.748,14.732,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,14.732,0,25.4,1.27,-24.13
306.869898,14.732,17.78,35.56,5.08,3.81,-123.19
180,16.002,17.78,0,25.4,1.27,-24.13
306.027373,13.97,20.574,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,20.574,0,25.4,1.27,-24.13
305.537678,12.7,24.13,126.965671138,2.952690056,4.369981354,-214.129080504
`));m(d.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in mm as metric QCAD3 pattern
180,1.016,6.604,0,25.4,1.016,-24.384
90,1.016,3.302,0,25.4,3.302,-22.098
180,8.382,3.302,0,25.4,7.366,-18.034
49.763642,5.588,0,198.374734568,1.491539308,4.325464044,-428.2209495
180,7.112,25.4,0,25.4,1.524,-23.876
51.340192,4.064,21.59,126.938033652,3.966813504,4.879180742,-157.760174954
180,5.588,21.59,0,25.4,1.524,-23.876
52.431408,3.048,18.288,126.990557296,1.548665432,4.165909626,-412.425064658
180,4.318,18.288,0,25.4,1.27,-24.13
53.130102,2.032,15.24,91.44,5.08,3.81,-123.19
180,3.302,15.24,0,25.4,1.27,-24.13
53.972627,1.27,12.446,218.491081432,1.867445084,3.454773634,-342.02257732
180,2.54,12.446,0,25.4,1.27,-24.13
54.462322,0,8.89,91.53339072,2.952690056,4.369981354,-214.129080504
0,24.384,6.604,0,25.4,1.016,-24.384
90,24.384,3.302,0,25.4,3.302,-22.098
0,17.018,3.302,0,25.4,7.366,-18.034
130.236358,19.812,0,234.17167923,1.491539308,4.325464044,-428.2209495
0,18.288,25.4,0,25.4,1.524,-23.876
128.659808,21.336,21.59,35.701322044,3.966813504,4.879180742,-157.760174954
0,19.812,21.59,0,25.4,1.524,-23.876
127.568592,22.352,18.288,289.600417242,1.548665432,4.165909626,-412.425064658
0,21.082,18.288,0,25.4,1.27,-24.13
126.869898,23.368,15.24,35.56,5.08,3.81,-123.19
0,22.098,15.24,0,25.4,1.27,-24.13
126.027373,24.13,12.446,126.986269522,1.867445084,3.454773634,-342.02257732
0,22.86,12.446,0,25.4,1.27,-24.13
125.537678,25.4,8.89,126.965671138,2.952690056,4.369981354,-214.129080504
0,11.684,2.286,0,25.4,1.016,-24.384
270,11.684,5.588,0,25.4,3.302,-22.098
0,4.318,5.588,0,25.4,7.366,-18.034
229.763642,7.112,8.89,198.374734568,1.491539308,4.325464044,-428.2209495
0,5.588,8.89,0,25.4,1.524,-23.876
231.340192,8.636,12.7,126.938033652,3.966813504,4.879180742,-157.760174954
0,7.112,12.7,0,25.4,1.524,-23.876
232.431408,9.652,16.002,126.990557296,1.548665432,4.165909626,-412.425064658
0,8.382,16.002,0,25.4,1.27,-24.13
233.130102,10.668,19.05,91.44,5.08,3.81,-123.19
0,9.398,19.05,0,25.4,1.27,-24.13
233.972627,11.43,21.844,218.491081432,1.867445084,3.454773634,-342.02257732
0,10.16,21.844,0,25.4,1.27,-24.13
234.462322,12.7,25.4,91.53339072,2.952690056,4.369981354,-214.129080504
180,13.716,2.286,0,25.4,1.016,-24.384
270,13.716,5.588,0,25.4,3.302,-22.098
180,21.082,5.588,0,25.4,7.366,-18.034
310.236358,18.288,8.89,234.17167923,1.491539308,4.325464044,-428.2209495
180,19.812,8.89,0,25.4,1.524,-23.876
308.659808,16.764,12.7,35.701322044,3.966813504,4.879180742,-157.760174954
180,18.288,12.7,0,25.4,1.524,-23.876
307.568592,15.748,16.002,289.600417242,1.548665432,4.165909626,-412.425064658
180,17.018,16.002,0,25.4,1.27,-24.13
306.869898,14.732,19.05,35.56,5.08,3.81,-123.19
180,16.002,19.05,0,25.4,1.27,-24.13
306.027373,13.97,21.844,126.986269522,1.867445084,3.454773634,-342.02257732
180,15.24,21.844,0,25.4,1.27,-24.13
305.537678,12.7,25.4,126.965671138,2.952690056,4.369981354,-214.129080504
`));m(d.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, 3.175,3.175, 3.175,-3.175
90, 3.175,0, 3.175,3.175, 3.175,-3.175
`));m(d.ParsePatFile(`
*ACAD_ISO02W100,ACAD_ISO02W100
0, 0,0, 0,5, 12,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO03W100,ACAD_ISO03W100
0, 0,0, 0,5, 12,-18
`),!1);m(d.ParsePatFile(`
*ACAD_ISO04W100,ACAD_ISO04W100
0, 0,0, 0,5, 24,-3,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO05W100,ACAD_ISO05W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO06W100,ACAD_ISO06W100
0, 0,0, 0,5, 24,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -34,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO07W100,ACAD_ISO07W100
0, 0,0, 0,5, .5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO08W100,ACAD_ISO08W100
0, 0,0, 0,5, 24,-3,6,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO09W100,ACAD_ISO09W100
0, 0,0, 0,5, 24,-3,6,-3,6,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO10W100,ACAD_ISO10W100
0, 0,0, 0,5, 12,-3,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO11W100,ACAD_ISO11W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO12W100,ACAD_ISO12W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO13W100,ACAD_ISO13W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-6.5
0, 0,0, 0,5, -33.5,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO14W100,ACAD_ISO14W100
0, 0,0, 0,5, 12,-3,.5,-3,.5,-6.5
0, 0,0, 0,5, -22,.5,-3
`),!1);m(d.ParsePatFile(`
*ACAD_ISO15W100,ACAD_ISO15W100
0, 0,0, 0,5, 12,-3,12,-3,.5,-10
0, 0,0, 0,5, -33.5,.5,-3,.5,-3
`),!1);m(d.ParsePatFile(`
*ANGLE,ANGLE
0, 0,0, 0,.275, .2,-.075
90, 0,0, 0,.275, .2,-.075
`),!1);m(d.ParsePatFile(`
*ANSI31,ANSI31
45, 0,0, 0,.125
`),!1);m(d.ParsePatFile(`
*ANSI32,ANSI32
45, 0,0, 0,.375
45, .1767767,0, 0,.375
`),!1);m(d.ParsePatFile(`
*ANSI33,ANSI33
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .125,-.0625
`),!1);m(d.ParsePatFile(`
*ANSI34,ANSI34
45, 0,0, 0,.75
45, .1767767,0, 0,.75
45, .35355339,0, 0,.75
45, .53033009,0, 0,.75
`),!1);m(d.ParsePatFile(`
*ANSI35,ANSI35
45, 0,0, 0,.25
45, .1767767,0, 0,.25, .3125,-.0625,0,-.0625
`),!1);m(d.ParsePatFile(`
*ANSI36,ANSI36
45, 0,0, .21875,.125, .3125,-.0625,0,-.0625
`),!1);m(d.ParsePatFile(`
*ANSI37,ANSI37
45, 0,0, 0,.125
135, 0,0, 0,.125
`),!1);m(d.ParsePatFile(`
*ANSI38,ANSI38
45, 0,0, 0,.125
135, 0,0, .25,.125, .3125,-.1875
`),!1);m(d.ParsePatFile(`
*AR-B816C,AR-B816C
0, 0,0, 8,8, 15.625,-.375
0, -8,.375, 8,8, 15.625,-.375
90, 0,0, 8,8, -8.375,7.625
90, -.375,0, 8,8, -8.375,7.625
`),!1);m(d.ParsePatFile(`
*AR-B816,AR-B816
0, 0,0, 0,8
90, 0,0, 8,8, 8,-8
`),!1);m(d.ParsePatFile(`
*AR-B88,AR-B88
0, 0,0, 0,8
90, 0,0, 8,4, 8,-8
`),!1);m(d.ParsePatFile(`
*AR-BRELM,AR-BRELM
0, 0,0, 0,5.334, 7.625,-.375
0, 0,2.25, 0,5.334, 7.625,-.375
0, 2,2.667, 0,5.334, 3.625,-.375
0, 2,4.917, 0,5.334, 3.625,-.375
90, 0,0, 0,8, 2.25,-3.084
90, -.375,0, 0,8, 2.25,-3.084
90, 2,2.667, 0,4, 2.25,-3.084
90, 1.625,2.667, 0,4, 2.25,-3.084
`),!1);m(d.ParsePatFile(`
*AR-BRSTD,AR-BRSTD
0, 0,0, 0,2.667
90, 0,0, 2.667,4, 2.667,-2.667
`),!1);m(d.ParsePatFile(`
*AR-CONC-01,AR-CONC-01
;Optimize to replace existing AR-CONC Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
243.434949,0.3,0.8,8.9442719,4.472136,0.2236068,-22.137073
90,0.3,0.6,0,10,0.2,-9.8
0,0.2,0.6,0,10,0.1,-9.9
315,0.1,0.1,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,0.3,0.2,13.4164079,4.472136,0.2236068,-22.137073
63.434949,0.2,0,8.9442719,4.472136,0.2236068,-22.137073
45,2,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,2.3,0.3,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,2.2,0.6,22.1359436,3.1622777,0.3162278,-31.3065488
315,2.3,0.9,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,2.5,1,13.4164079,4.472136,0.2236068,-22.137073
63.434949,2.4,0.8,8.9442719,4.472136,0.2236068,-22.137073
270,4.1,0.6,0,10,0.2,-9.8
45,3.9,0.4,7.0710678,7.0710678,0.2828427,-13.8592929
180,4.1,0.4,0,10,0.2,-9.8
333.434949,3.9,0.2,8.9442719,4.472136,0.2236068,-22.137073
225,4,0.3,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,4.1,0.1,13.4164079,4.472136,0.2236068,-22.137073
198.434949,6.3,0.8,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,6.2,0.6,8.9442719,4.472136,0.2236068,-22.137073
333.434949,6,0.7,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.7,0,13.4164079,4.472136,0.2236068,-22.137073
251.565051,5.8,0.3,9.486833,3.1622777,0.3162278,-31.3065488
116.565051,5.9,0.1,13.4164079,4.472136,0.2236068,-22.137073
45,6.7,0.1,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,7,0,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,6.9,0.3,22.1359436,3.1622777,0.3162278,-31.3065488
315,3,2.8,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.2,2.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.1,2.7,8.9442719,4.472136,0.2236068,-22.137073
45,1.1,0.8,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.3,0.8,0,10,0.2,-9.8
270,1.3,1,0,10,0.2,-9.8
225,1.8,2.4,7.0710678,7.0710678,0.1414214,-14.0007143
270,1.8,2.6,0,10,0.2,-9.8
71.565051,1.7,2.3,9.486833,3.1622777,0.3162278,-31.3065488
198.434949,1,2.1,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,0.9,1.9,8.9442719,4.472136,0.2236068,-22.137073
333.434949,0.7,2,8.9442719,4.472136,0.2236068,-22.137073
0,3.5,2.2,0,10,0.2,-9.8
225,3.7,2.4,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.7,2.2,0,10,0.2,-9.8
315,4.5,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.7,1.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.6,1.6,8.9442719,4.472136,0.2236068,-22.137073
315,5.5,2.1,7.0710678,7.0710678,0.1414214,-14.0007143
270,5.5,2.3,0,10,0.2,-9.8
108.434949,5.6,2,22.1359436,3.1622777,0.3162278,-31.3065488
206.565051,6.9,2.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,6.8,2.5,8.9442719,4.472136,0.2236068,-22.137073
315,6.7,2.6,7.0710678,7.0710678,0.1414214,-14.0007143
333.434949,7.3,1.9,8.9442719,4.472136,0.2236068,-22.137073
225,7.4,2,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,7.5,1.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,8.2,1.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,8.4,1.4,8.9442719,4.472136,0.2236068,-22.137073
270,8.4,1.6,0,10,0.2,-9.8
180,9.3,1.7,0,10,0.1,-9.9
270,9.3,1.8,0,10,0.1,-9.9
45,9.2,1.7,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,9.3,2.4,8.9442719,4.472136,0.2236068,-22.137073
270,9.3,2.7,0,10,0.3,-9.7
45,9.1,2.5,7.0710678,7.0710678,0.2828427,-13.8592929
206.565051,9.1,3.5,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9,3.3,8.9442719,4.472136,0.2236068,-22.137073
315,8.9,3.4,7.0710678,7.0710678,0.1414214,-14.0007143
180,6.5,2.9,0,10,0.2,-9.8
270,6.5,3.2,0,10,0.3,-9.7
56.309932,6.3,2.9,22.1880078,2.773501,0.3605551,-35.6949576
198.434949,5.4,3.8,22.1359436,3.1622777,0.3162278,-31.3065488
71.565051,5.3,3.5,9.486833,3.1622777,0.3162278,-31.3065488
315,5.1,3.7,7.0710678,7.0710678,0.2828427,-13.8592929
180,3.8,3.3,0,10,0.3,-9.7
270,3.8,3.6,0,10,0.3,-9.7
45,3.5,3.3,7.0710678,7.0710678,0.4242641,-13.7178716
225,3.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.3,4.1,0,10,0.2,-9.8
0,3.1,4.1,0,10,0.2,-9.8
206.565051,1.6,3.9,13.4164079,4.472136,0.2236068,-22.137073
63.434949,1.5,3.7,8.9442719,4.472136,0.2236068,-22.137073
315,1.4,3.8,7.0710678,7.0710678,0.1414214,-14.0007143
108.434949,1,3.7,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,0.7,3.8,9.486833,3.1622777,0.3162278,-31.3065488
225,0.9,4,7.0710678,7.0710678,0.2828427,-13.8592929
270,1.5,4.5,0,10,0.2,-9.8
45,1.3,4.3,7.0710678,7.0710678,0.2828427,-13.8592929
180,1.5,4.3,0,10,0.2,-9.8
315,3.6,4.7,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,3.8,4.8,13.4164079,4.472136,0.2236068,-22.137073
63.434949,3.7,4.6,8.9442719,4.472136,0.2236068,-22.137073
0,5.1,4,0,10,0.1,-9.9
225,5.2,4.1,7.0710678,7.0710678,0.1414214,-14.0007143
90,5.2,4,0,10,0.1,-9.9
0,6.9,3.8,0,10,0.2,-9.8
243.434949,7,4,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.1,3.8,13.4164079,4.472136,0.2236068,-22.137073
26.565051,7.3,4.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,7.4,4.3,13.4164079,4.472136,0.2236068,-22.137073
251.565051,7.5,4.6,9.486833,3.1622777,0.3162278,-31.3065488
63.434949,8.8,3.6,8.9442719,4.472136,0.2236068,-22.137073
180,9,3.6,0,10,0.2,-9.8
296.565051,8.9,3.8,13.4164079,4.472136,0.2236068,-22.137073
180,9,5.4,0,10,0.3,-9.7
270,9,5.7,0,10,0.3,-9.7
45,8.7,5.4,7.0710678,7.0710678,0.4242641,-13.7178716
180,8.6,5.6,0,10,0.2,-9.8
270,8.6,5.8,0,10,0.2,-9.8
45,8.4,5.6,7.0710678,7.0710678,0.2828427,-13.8592929
243.434949,8.2,6.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8,6.4,13.4164079,4.472136,0.2236068,-22.137073
135,8.1,6.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.7,6,8.9442719,4.472136,0.2236068,-22.137073
116.565051,6.8,5.8,13.4164079,4.472136,0.2236068,-22.137073
0,6.6,5.8,0,10,0.2,-9.8
225,6.2,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
108.434949,6.3,5.8,22.1359436,3.1622777,0.3162278,-31.3065488
341.565051,6,5.9,9.486833,3.1622777,0.3162278,-31.3065488
135,5.9,5.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6,5.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,5.8,5.5,13.4164079,4.472136,0.2236068,-22.137073
180,4.8,6,0,10,0.1,-9.9
270,4.8,6.1,0,10,0.1,-9.9
45,4.7,6,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,4.4,6.7,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4.3,6.5,8.9442719,4.472136,0.2236068,-22.137073
315,4.2,6.6,7.0710678,7.0710678,0.1414214,-14.0007143
225,3.4,6.5,7.0710678,7.0710678,0.2828427,-13.8592929
90,3.4,6.2,0,10,0.3,-9.7
333.434949,3.2,6.3,8.9442719,4.472136,0.2236068,-22.137073
180,3,6.1,0,10,0.2,-9.8
270,3,6.3,0,10,0.2,-9.8
45,2.8,6.1,7.0710678,7.0710678,0.2828427,-13.8592929
135,2.1,5.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,2.2,5.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,2,5.7,13.4164079,4.472136,0.2236068,-22.137073
180,1.1,6.3,0,10,0.2,-9.8
270,1.1,6.5,0,10,0.2,-9.8
45,0.9,6.3,7.0710678,7.0710678,0.2828427,-13.8592929
270,0.6,7,0,10,0.3,-9.7
45,0.4,6.8,7.0710678,7.0710678,0.2828427,-13.8592929
153.434949,0.6,6.7,8.9442719,4.472136,0.2236068,-22.137073
243.434949,8.2,7.8,8.9442719,4.472136,0.2236068,-22.137073
90,8.2,7.6,0,10,0.2,-9.8
0,8.1,7.6,0,10,0.1,-9.9
135,8.7,8.2,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,8.8,8.4,8.9442719,4.472136,0.2236068,-22.137073
26.565051,8.6,8.3,13.4164079,4.472136,0.2236068,-22.137073
180,8.6,8.4,0,10,0.2,-9.8
251.565051,8.7,8.7,9.486833,3.1622777,0.3162278,-31.3065488
45,8.4,8.4,7.0710678,7.0710678,0.4242641,-13.7178716
153.434949,7.2,9.2,8.9442719,4.472136,0.2236068,-22.137073
135,6.5,7.3,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,6.6,7.5,8.9442719,4.472136,0.2236068,-22.137073
26.565051,6.4,7.4,13.4164079,4.472136,0.2236068,-22.137073
135,6.3,7.7,7.0710678,7.0710678,0.1414214,-14.0007143
251.565051,6.4,8,9.486833,3.1622777,0.3162278,-31.3065488
45,6.2,7.8,7.0710678,7.0710678,0.2828427,-13.8592929
26.565051,2.6,7.6,13.4164079,4.472136,0.2236068,-22.137073
153.434949,2.8,7.5,8.9442719,4.472136,0.2236068,-22.137073
270,2.8,7.7,0,10,0.2,-9.8
90,4.5,7.9,0,10,0.2,-9.8
0,4.3,7.9,0,10,0.2,-9.8
225,4.5,8.1,7.0710678,7.0710678,0.2828427,-13.8592929
63.434949,4.9,8.3,8.9442719,4.472136,0.2236068,-22.137073
315,4.8,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,5,8.5,13.4164079,4.472136,0.2236068,-22.137073
153.434949,5.8,8.8,8.9442719,4.472136,0.2236068,-22.137073
270,5.8,9.1,0,10,0.3,-9.7
45,5.6,8.9,7.0710678,7.0710678,0.2828427,-13.8592929
0,2.8,9.3,0,10,0.3,-9.7
135,2.6,8,7.0710678,7.0710678,0.1414214,-14.0007143
270,2.6,8.2,0,10,0.2,-9.8
45,2.5,8.1,7.0710678,7.0710678,0.1414214,-14.0007143
116.565051,0.8,8.2,13.4164079,4.472136,0.2236068,-22.137073
333.434949,0.6,8.3,8.9442719,4.472136,0.2236068,-22.137073
225,0.7,8.4,7.0710678,7.0710678,0.1414214,-14.0007143
135,1.2,8.6,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,1.3,8.8,8.9442719,4.472136,0.2236068,-22.137073
26.565051,1.1,8.7,13.4164079,4.472136,0.2236068,-22.137073
0,8.74875,8.58939,0,10,0,-10
0,8.12326,9.16255,0,10,0,-10
0,8.22334,7.41455,0,10,0,-10
0,7.2264,8.32807,0,10,0,-10
0,6.60091,8.90123,0,10,0,-10
0,8.74106,5.28385,0,10,0,-10
0,8.11556,5.85701,0,10,0,-10
0,6.70099,7.15323,0,10,0,-10
0,5.70405,8.06676,0,10,0,-10
0,5.07855,8.63992,0,10,0,-10
0,8.21564,4.10901,0,10,0,-10
0,7.2187,5.02254,0,10,0,-10
0,6.59321,5.5957,0,10,0,-10
0,5.17863,6.89192,0,10,0,-10
0,4.18169,7.80544,0,10,0,-10
0,3.5562,8.3786,0,10,0,-10
0,8.73336,1.97832,0,10,0,-10
0,8.10787,2.55148,0,10,0,-10
0,6.69329,3.8477,0,10,0,-10
0,5.69635,4.76122,0,10,0,-10
0,5.07086,5.33438,0,10,0,-10
0,3.65628,6.6306,0,10,0,-10
0,2.65934,7.54413,0,10,0,-10
0,2.03385,8.11729,0,10,0,-10
0,8.20795,0.80348,0,10,0,-10
0,7.21101,1.717,0,10,0,-10
0,6.58551,2.29016,0,10,0,-10
0,5.17094,3.58638,0,10,0,-10
0,4.174,4.49991,0,10,0,-10
0,3.5485,5.07307,0,10,0,-10
0,2.13393,6.36929,0,10,0,-10
0,1.13699,7.28282,0,10,0,-10
0,0.51149,7.85597,0,10,0,-10
0,6.68559,0.54216,0,10,0,-10
0,5.68865,1.45569,0,10,0,-10
0,5.06316,2.02885,0,10,0,-10
0,3.53626,3.22649,0,10,0,-10
0,2.65164,4.23859,0,10,0,-10
0,2.02615,4.81175,0,10,0,-10
0,0.61157,6.10797,0,10,0,-10
0,5.16324,0.28085,0,10,0,-10
0,4.1663,1.19437,0,10,0,-10
0,3.54081,1.76753,0,10,0,-10
0,2.12623,3.06375,0,10,0,-10
0,1.12929,3.97728,0,10,0,-10
0,0.5038,4.55044,0,10,0,-10
0,3.64089,0.01953,0,10,0,-10
0,2.64395,0.93306,0,10,0,-10
0,2.01845,1.50622,0,10,0,-10
0,0.60388,2.80244,0,10,0,-10
0,1.12159,0.67174,0,10,0,-10
0,0.4961,1.2449,0,10,0,-10
0,9.15644,8.35141,0,10,0,-10
0,8.31335,8.05964,0,10,0,-10
0,7.76295,8.41028,0,10,0,-10
0,8.6371,7.02451,0,10,0,-10
0,6.91985,8.11852,0,10,0,-10
0,6.36945,8.46916,0,10,0,-10
0,7.2436,7.08339,0,10,0,-10
0,5.52636,8.17739,0,10,0,-10
0,4.97596,8.52804,0,10,0,-10
0,8.67916,5.33996,0,10,0,-10
0,8.12876,5.69061,0,10,0,-10
0,5.85011,7.14227,0,10,0,-10
0,4.13287,8.23627,0,10,0,-10
0,3.58247,8.58691,0,10,0,-10
0,9.00291,4.30484,0,10,0,-10
0,7.28566,5.39884,0,10,0,-10
0,6.73527,5.74948,0,10,0,-10
0,4.45662,7.20114,0,10,0,-10
0,2.73937,8.29515,0,10,0,-10
0,2.18897,8.64579,0,10,0,-10
0,7.60942,4.36371,0,10,0,-10
0,5.89217,5.45772,0,10,0,-10
0,5.34177,5.80836,0,10,0,-10
0,3.06312,7.26002,0,10,0,-10
0,1.34588,8.35403,0,10,0,-10
0,0.79548,8.70467,0,10,0,-10
0,9.04497,2.62029,0,10,0,-10
0,8.49457,2.97093,0,10,0,-10
0,6.21592,4.42259,0,10,0,-10
0,4.49868,5.5166,0,10,0,-10
0,3.94828,5.86724,0,10,0,-10
0,1.66963,7.3189,0,10,0,-10
0,9.36872,1.58516,0,10,0,-10
0,7.65148,2.67917,0,10,0,-10
0,7.10108,3.02981,0,10,0,-10
0,4.82243,4.48147,0,10,0,-10
0,3.10518,5.57547,0,10,0,-10
0,2.55479,5.92612,0,10,0,-10
0,0.27613,7.37778,0,10,0,-10
0,7.97523,1.64404,0,10,0,-10
0,6.25798,2.73804,0,10,0,-10
0,5.70758,3.08869,0,10,0,-10
0,3.42893,4.54035,0,10,0,-10
0,1.71169,5.63435,0,10,0,-10
0,1.16129,5.98499,0,10,0,-10
0,8.86038,0.25125,0,10,0,-10
0,6.58173,1.70292,0,10,0,-10
0,4.86449,2.79692,0,10,0,-10
0,4.31409,3.14756,0,10,0,-10
0,2.03544,4.59922,0,10,0,-10
0,0.3182,5.69323,0,10,0,-10
0,7.46689,0.31013,0,10,0,-10
0,5.18824,1.76179,0,10,0,-10
0,3.471,2.8558,0,10,0,-10
0,2.9206,3.20644,0,10,0,-10
0,0.64195,4.6581,0,10,0,-10
0,6.6238,0.01837,0,10,0,-10
0,6.0734,0.36901,0,10,0,-10
0,3.79475,1.82067,0,10,0,-10
0,2.0775,2.91468,0,10,0,-10
0,1.5271,3.26532,0,10,0,-10
0,5.2303,0.07724,0,10,0,-10
0,4.6799,0.42789,0,10,0,-10
0,2.40125,1.87955,0,10,0,-10
0,0.68401,2.97355,0,10,0,-10
0,0.13361,3.3242,0,10,0,-10
0,3.83681,0.13612,0,10,0,-10
0,3.28641,0.48676,0,10,0,-10
0,1.00776,1.93842,0,10,0,-10
0,2.44331,0.195,0,10,0,-10
0,1.89292,0.54564,0,10,0,-10
0,1.04982,0.25388,0,10,0,-10
0,0.49942,0.60452,0,10,0,-10
0,6.42555,9.30607,0,10,0,-10
0,4.77695,9.08903,0,10,0,-10
0,3.7883,8.95887,0,10,0,-10
0,3.13481,8.87284,0,10,0,-10
0,1.48621,8.6558,0,10,0,-10
0,0.49757,8.52564,0,10,0,-10
0,9.02957,8.70973,0,10,0,-10
0,7.38097,8.49269,0,10,0,-10
0,6.39232,8.36253,0,10,0,-10
0,5.73883,8.2765,0,10,0,-10
0,4.09023,8.05946,0,10,0,-10
0,3.10158,7.9293,0,10,0,-10
0,2.4481,7.84327,0,10,0,-10
0,0.79949,7.62622,0,10,0,-10
0,8.99634,7.76619,0,10,0,-10
0,8.34285,7.68016,0,10,0,-10
0,6.69425,7.46312,0,10,0,-10
0,5.7056,7.33296,0,10,0,-10
0,5.05211,7.24692,0,10,0,-10
0,3.40351,7.02988,0,10,0,-10
0,2.41487,6.89972,0,10,0,-10
0,1.76138,6.81369,0,10,0,-10
0,0.11277,6.59665,0,10,0,-10
0,9.29827,6.86677,0,10,0,-10
0,8.30962,6.73662,0,10,0,-10
0,7.65613,6.65058,0,10,0,-10
0,6.00753,6.43354,0,10,0,-10
0,5.01888,6.30338,0,10,0,-10
0,4.3654,6.21735,0,10,0,-10
0,2.71679,6.00031,0,10,0,-10
0,1.72815,5.87015,0,10,0,-10
0,1.07466,5.78412,0,10,0,-10
0,8.61155,5.8372,0,10,0,-10
0,7.6229,5.70704,0,10,0,-10
0,6.96941,5.62101,0,10,0,-10
0,5.32081,5.40397,0,10,0,-10
0,4.33217,5.27381,0,10,0,-10
0,3.67868,5.18777,0,10,0,-10
0,2.03007,4.97073,0,10,0,-10
0,1.04143,4.84057,0,10,0,-10
0,0.38794,4.75454,0,10,0,-10
0,7.92483,4.80762,0,10,0,-10
0,6.93618,4.67747,0,10,0,-10
0,6.2827,4.59143,0,10,0,-10
0,4.63409,4.37439,0,10,0,-10
0,3.64545,4.24423,0,10,0,-10
0,2.99196,4.1582,0,10,0,-10
0,1.34336,3.94116,0,10,0,-10
0,0.35471,3.811,0,10,0,-10
0,8.88671,3.99509,0,10,0,-10
0,7.23811,3.77805,0,10,0,-10
0,6.24947,3.64789,0,10,0,-10
0,5.59598,3.56186,0,10,0,-10
0,3.94737,3.34482,0,10,0,-10
0,2.95873,3.21466,0,10,0,-10
0,2.30524,3.12862,0,10,0,-10
0,0.65664,2.91158,0,10,0,-10
0,8.85348,3.05155,0,10,0,-10
0,8.19999,2.96552,0,10,0,-10
0,6.55139,2.74847,0,10,0,-10
0,5.56275,2.61832,0,10,0,-10
0,4.90926,2.53228,0,10,0,-10
0,3.26065,2.31524,0,10,0,-10
0,2.27201,2.18508,0,10,0,-10
0,1.61852,2.09905,0,10,0,-10
0,9.15541,2.15213,0,10,0,-10
0,8.16676,2.02197,0,10,0,-10
0,7.51328,1.93594,0,10,0,-10
0,5.86467,1.7189,0,10,0,-10
0,4.87603,1.58874,0,10,0,-10
0,4.22254,1.50271,0,10,0,-10
0,2.57394,1.28567,0,10,0,-10
0,1.58529,1.15551,0,10,0,-10
0,0.9318,1.06947,0,10,0,-10
0,8.46869,1.12256,0,10,0,-10
0,7.48005,0.9924,0,10,0,-10
0,6.82656,0.90637,0,10,0,-10
0,5.17795,0.68932,0,10,0,-10
0,4.18931,0.55917,0,10,0,-10
0,3.53582,0.47313,0,10,0,-10
0,1.88722,0.25609,0,10,0,-10
0,0.89857,0.12593,0,10,0,-10
0,0.24508,0.0399,0,10,0,-10
0,7.78197,0.09298,0,10,0,-10
0,1.25458,8.906,0,10,0,-10
0,2.59486,9.0898,0,10,0,-10
0,1.22284,8.03701,0,10,0,-10
0,3.91339,9.25692,0,10,0,-10
0,2.56312,8.22081,0,10,0,-10
0,1.19109,7.16803,0,10,0,-10
0,3.88165,8.38793,0,10,0,-10
0,2.53137,7.35183,0,10,0,-10
0,1.15935,6.29904,0,10,0,-10
0,5.23746,8.58365,0,10,0,-10
0,3.84991,7.51894,0,10,0,-10
0,2.49963,6.48284,0,10,0,-10
0,1.12761,5.43005,0,10,0,-10
0,6.57774,8.76745,0,10,0,-10
0,5.20572,7.71466,0,10,0,-10
0,3.81816,6.64995,0,10,0,-10
0,2.46789,5.61385,0,10,0,-10
0,1.09587,4.56106,0,10,0,-10
0,7.89627,8.93456,0,10,0,-10
0,6.546,7.89846,0,10,0,-10
0,5.17398,6.84567,0,10,0,-10
0,3.78642,5.78096,0,10,0,-10
0,2.43615,4.74486,0,10,0,-10
0,1.06413,3.69207,0,10,0,-10
0,9.25208,9.13028,0,10,0,-10
0,7.86453,8.06557,0,10,0,-10
0,6.51425,7.02947,0,10,0,-10
0,5.14223,5.97668,0,10,0,-10
0,3.75468,4.91198,0,10,0,-10
0,2.4044,3.87587,0,10,0,-10
0,1.03238,2.82308,0,10,0,-10
0,9.22034,8.26129,0,10,0,-10
0,7.83279,7.19659,0,10,0,-10
0,6.48251,6.16048,0,10,0,-10
0,5.11049,5.10769,0,10,0,-10
0,3.72294,4.04299,0,10,0,-10
0,2.37266,3.00688,0,10,0,-10
0,1.00064,1.9541,0,10,0,-10
0,9.1886,7.3923,0,10,0,-10
0,7.80105,6.3276,0,10,0,-10
0,6.45077,5.29149,0,10,0,-10
0,5.07875,4.23871,0,10,0,-10
0,3.6912,3.174,0,10,0,-10
0,2.34092,2.1379,0,10,0,-10
0,0.9689,1.08511,0,10,0,-10
0,9.15686,6.52332,0,10,0,-10
0,7.7693,5.45861,0,10,0,-10
0,6.41903,4.42251,0,10,0,-10
0,5.04701,3.36972,0,10,0,-10
0,2.30918,1.26891,0,10,0,-10
0,0.93716,0.21612,0,10,0,-10
0,9.12511,5.65433,0,10,0,-10
0,7.73756,4.58962,0,10,0,-10
0,6.38729,3.55352,0,10,0,-10
0,5.01527,2.50073,0,10,0,-10
0,3.62771,1.43602,0,10,0,-10
0,2.27744,0.39992,0,10,0,-10
0,9.09337,4.78534,0,10,0,-10
0,7.70582,3.72063,0,10,0,-10
0,6.35554,2.68453,0,10,0,-10
0,4.98352,1.63174,0,10,0,-10
0,3.59597,0.56703,0,10,0,-10
0,9.06163,3.91635,0,10,0,-10
0,7.67408,2.85164,0,10,0,-10
0,6.3238,1.81554,0,10,0,-10
0,4.95178,0.76275,0,10,0,-10
0,9.02989,3.04736,0,10,0,-10
0,7.64234,1.98266,0,10,0,-10
0,6.29206,0.94655,0,10,0,-10
0,8.99815,2.17837,0,10,0,-10
0,7.61059,1.11367,0,10,0,-10
0,6.26032,0.07756,0,10,0,-10
0,8.9664,1.30939,0,10,0,-10
0,7.57885,0.24468,0,10,0,-10
0,8.93466,0.4404,0,10,0,-10
206.565051,10,0.6,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.9,0.4,8.9442719,4.472136,0.2236068,-22.137073
315,9.8,0.5,7.0710678,7.0710678,0.1414214,-14.0007143
206.565051,9.7,5.4,13.4164079,4.472136,0.2236068,-22.137073
63.434949,9.6,5.2,8.9442719,4.472136,0.2236068,-22.137073
315,9.5,5.3,7.0710678,7.0710678,0.1414214,-14.0007143
153.434949,10,7.2,8.9442719,4.472136,0.2236068,-22.137073
288.434949,9.9,7.5,22.1359436,3.1622777,0.3162278,-31.3065488
63.434949,9.8,7.3,8.9442719,4.472136,0.2236068,-22.137073
135,9.7,9.3,7.0710678,7.0710678,0.1414214,-14.0007143
270,9.7,9.5,0,10,0.2,-9.8
45,9.6,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
0,7.7,9.6,0,10,0.2,-9.8
270,7.2,9.4,0,10,0.2,-9.8
26.565051,7,9.3,13.4164079,4.472136,0.2236068,-22.137073
0,9.50621,9.4965,0,10,0,-10
0,9.74569,7.67586,0,10,0,-10
0,9.63792,6.11833,0,10,0,-10
0,9.738,4.37033,0,10,0,-10
0,9.63022,2.81279,0,10,0,-10
0,9.7303,1.06479,0,10,0,-10
0,9.70684,8.00076,0,10,0,-10
0,9.52225,5.63173,0,10,0,-10
0,9.88807,2.91205,0,10,0,-10
0,8.06768,9.52227,0,10,0,-10
0,7.07904,9.39211,0,10,0,-10
0,9.68306,8.79577,0,10,0,-10
0,9.98498,7.89635,0,10,0,-10
0,9.57343,5.02467,0,10,0,-10
0,9.5402,4.08112,0,10,0,-10
0,9.84213,3.18171,0,10,0,-10
0,9.43058,0.31003,0,10,0,-10
243.434949,7.8,9.8,8.9442719,4.472136,0.2236068,-22.137073
116.565051,7.9,9.6,13.4164079,4.472136,0.2236068,-22.137073
180,6,9.7,0,10,0.2,-9.8
270,6,9.9,0,10,0.2,-9.8
45,5.8,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
296.565051,4.1,10,13.4164079,4.472136,0.2236068,-22.137073
63.434949,4,9.8,8.9442719,4.472136,0.2236068,-22.137073
180,4.2,9.8,0,10,0.2,-9.8
135,3.4,9.4,7.0710678,7.0710678,0.1414214,-14.0007143
243.434949,3.5,9.6,8.9442719,4.472136,0.2236068,-22.137073
26.565051,3.3,9.5,13.4164079,4.472136,0.2236068,-22.137073
116.565051,3.1,9.3,13.4164079,4.472136,0.2236068,-22.137073
225,3,9.5,7.0710678,7.0710678,0.2828427,-13.8592929
45,0,9.7,7.0710678,7.0710678,0.2828427,-13.8592929
161.565051,0.3,9.6,9.486833,3.1622777,0.3162278,-31.3065488
288.434949,0.2,9.9,22.1359436,3.1622777,0.3162278,-31.3065488
0,3.66398,9.93614,0,10,0,-10
0,2.14162,9.67482,0,10,0,-10
0,0.61927,9.41351,0,10,0,-10
0,6.87779,9.80307,0,10,0,-10
0,5.4843,9.86194,0,10,0,-10
0,2.69731,9.9797,0,10,0,-10
0,4.47502,9.98845,0,10,0,-10
0,3.82153,9.90242,0,10,0,-10
0,2.17293,9.68537,0,10,0,-10
0,1.18429,9.55522,0,10,0,-10
0,0.5308,9.46918,0,10,0,-10
0,1.28632,9.77499,0,10,0,-10
0,2.6266,9.95879,0,10,0,-10
0,5.2692,9.45264,0,10,0,-10
0,6.60948,9.63644,0,10,0,-10
0,7.92801,9.80355,0,10,0,-10
0,9.66478,9.68531,0,10,0,-10
0,8.27128,9.74419,0,10,0,-10
0,9.71629,9.73931,0,10,0,-10
0,9.28383,9.99927,0,10,0,-10
`),!1);m(d.ParsePatFile(`
*AR-CONC,AR-CONC
50, 0,0, 4.12975034,-5.89789472, .75,-8.25
355, 0,0, -2.03781207,7.3723684, .6,-6.6
100.4514, .5977168,-.0522934, 5.7305871,-6.9397673, .6374019,-7.01142112
46.1842, 0,2, 6.19462551,-8.84684208, 1.125,-12.375
96.6356, .88936745,1.86206693, 8.59588071,-10.40965104, .95610288,-10.51713
351.1842, 0,2, 7.74328189,11.0585526, .9,-9.9
21, 1,1.5, 4.12975034,-5.89789472, .75,-8.25
326, 1,1.5, -2.03781207,7.3723684, .6,-6.6
71.4514, 1.49742233,1.16448394, 5.7305871,-6.9397673, .6374019,-7.01142112
37.5, 0,0, 2.123,2.567, 0,-6.52,0,-6.7,0,-6.625
7.5, 0,0, 3.123,3.567, 0,-3.82,0,-6.37,0,-2.525
-32.5, -2.23,0, 4.6234,2.678, 0,-2.5,0,-7.8,0,-10.35
-42.5, -3.23,0, 3.6234,4.678, 0,-3.25,0,-5.18,0,-7.35
`),!1);m(d.ParsePatFile(`
*AR-HBONE,AR-HBONE
45, 0,0, 4,4, 12,-4
135, 2.82842713,2.82842713, 4,-4, 12,-4
`),!1);m(d.ParsePatFile(`
*AR-PARQ1,AR-PARQ1
90, 0,0, 12,12, 12,-12
90, 2,0, 12,12, 12,-12
90, 4,0, 12,12, 12,-12
90, 6,0, 12,12, 12,-12
90, 8,0, 12,12, 12,-12
90, 10,0, 12,12, 12,-12
90, 12,0, 12,12, 12,-12
0, 0,12, 12,-12, 12,-12
0, 0,14, 12,-12, 12,-12
0, 0,16, 12,-12, 12,-12
0, 0,18, 12,-12, 12,-12
0, 0,20, 12,-12, 12,-12
0, 0,22, 12,-12, 12,-12
0, 0,24, 12,-12, 12,-12
`),!1);m(d.ParsePatFile(`
*AR-RROOF,AR-RROOF
0, 0,0, 2.2,1, 15,-2,5,-1
0, 1.33,.5, -1,1.33, 3,-.33,6,-.75
0, .5,.85, 5.2,.67, 8,-1.4,4,-1
`),!1);m(d.ParsePatFile(`
*AR-RSHKE,AR-RSHKE
0, 0,0, 25.5,12, 6,-5,7,-3,9,-4
0, 6,.5, 25.5,12, 5,-19,4,-6
0, 18,-.75, 25.5,12, 3,-31
90, 0,0, 12,8.5, 11.5,-36.5
90, 6,0, 12,8.5, 11.25,-36.75
90, 11,0, 12,8.5, 10.5,-37.5
90, 18,-.75, 12,8.5, 11.5,-36.5
90, 21,-.75, 12,8.5, 11.5,-36.5
90, 30,0, 12,8.5, 11,-37
`),!1);m(d.ParsePatFile(`
*AR-SAND,AR-SAND
37.5, 0,0, 1.123,1.567, 0,-1.52,0,-1.7,0,-1.625
7.5, 0,0, 2.123,2.567, 0,-.82,0,-1.37,0,-.525
-32.5, -1.23,0, 2.6234,1.678, 0,-.5,0,-1.8,0,-2.35
-42.5, -1.23,0, 1.6234,2.678, 0,-.25,0,-1.18,0,-1.35
`),!1);m(d.ParsePatFile(`
*BARBWIRE,BARBWIRE
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
315,0.3,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
288.434949,0.26,0.68,2.21359436,0.31622777,0.12649111,-3.03578655
158.198591,0.31,0.66,3.15682075,0.18569534,0.05385165,-5.33131316
116.565051,0.32,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
116.565051,0.34,0.6,1.34164079,0.4472136,0.04472136,-2.19134662
111.801409,0.44,0.39,2.22834406,0.18569534,0.05385165,-5.33131316
156.801409,0.51,0.36,5.38356375,0.13130643,0.07615773,-7.53961537
289.653824,0.46,0.5,11.70450662,0.06726728,0.14866069,-14.71740806
194.036243,0.31,0.36,3.15296313,0.24253563,0.04123106,-4.08187457
251.565051,0.32,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
254.054604,0.34,0.46,4.12081692,0.13736056,0.0728011,-7.20730879
74.744881,0.34,0.46,4.12217269,0.0877058,0.11401754,-11.28773671
135,0.36,0.44,0.70710678,0.70710678,0.02828427,-1.38592929
180,0.39,0.44,0,1,0.03,-0.97
270,0.39,0.45,0,1,0.01,-0.99
74.054604,0.39,0.45,4.12081692,0.13736056,0.1456022,-7.13450769
161.565051,0.42,0.44,0.9486833,0.31622777,0.03162278,-3.13065488
198.434949,0.45,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
258.231711,0.5,0.69,5.09885635,0.04079085,0.24515301,-24.27014833
21.801409,0.45,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
75.963757,0.43,0.59,0.9701425,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.6,0.9486833,0.31622777,0.03162278,-3.13065488
45,0.37,0.57,0.70710678,0.70710678,0.04242641,-1.37178716
288.434949,0.36,0.6,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.34,0.6,0,1,0.02,-0.98
26.565051,0.32,0.59,1.34164079,0.4472136,0.02236068,-2.2137073
78.231711,0.27,0.35,5.09885635,0.04079085,0.24515301,-24.27014833
4.085617,0.78,0.48,13.03821015,0.07124705,0.14035669,-13.89531216
0,0.69,0.48,0,1,0.09,-0.91
354.289407,0.59,0.49,0.99503719,0.09950372,0.10049876,-9.94937686
356.185925,0.47,0.55,0.99778516,0.06651901,0.15033296,-14.88296341
351.469234,0.8,0.55,7.07089492,0.04944682,0.20223748,-20.02151093
0,0.66,0.55,0,1,0.14,-0.86
14.036243,0.46,0.5,3.15296313,0.24253563,0.20615528,-3.91695034
189.865807,0.7,0.51,17.26262336,0.04283529,0.23345235,-23.11178271
180,0.8,0.51,0,1,0.1,-0.9
171.469234,1,0.48,7.07089492,0.04944682,0.20223748,-20.02151093
186.115504,1,0.56,9.05531551,0.03551104,0.15644586,-28.00380982
5.52754,0.13777778,0.53333333,10.04982433,0.03210806,0.17302679,-30.97179621
3.691386,0,0.48,15.03326191,0.03219114,0.1515339,-30.91291524
348.310631,0,0.52,5.0989077,0.0337676,0.29614186,-29.31804393
348.690068,0,0.56,0.98058068,0.19611614,0.30594117,-4.79307834
`),!1);m(d.ParsePatFile(`
*BLOCKS-01,BLOCKS-01 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.31,0.66,1,1,0.22,-0.78
180,0.08,0.09,0,1,0.57,-0.43
270,0.08,0.09,1,1,0.21,-0.79
180,0.08,0.88,0,1,0.57,-0.43
270,0.51,0.09,1,1,0.21,-0.79
270,0.89,0.32,1,1,0.2,-0.8
0,0.49,0.32,0,1,0.4,-0.6
90,0.49,0.12,1,1,0.2,-0.8
180,0.89,0.12,0,1,0.4,-0.6
270,0.69,0.84,1,1,0.48,-0.52
0,0.48,0.84,0,1,0.21,-0.79
90,0.48,0.36,1,1,0.48,-0.52
180,0.69,0.36,0,1,0.21,-0.79
270,0.12,0.03,1,1,0.33,-0.67
0,0.12,0.7,0,1,0.32,-0.68
270,0.44,0.03,1,1,0.33,-0.67
0,0.12,0.03,0,1,0.32,-0.68
270,0.45,0.67,1,1,0.24,-0.76
0,0.36,0.67,0,1,0.09,-0.91
90,0.36,0.43,1,1,0.24,-0.76
180,0.45,0.43,0,1,0.09,-0.91
270,0.45,0.4,1,1,0.33,-0.67
0,0.11,0.4,0,1,0.34,-0.66
90,0.11,0.07,1,1,0.33,-0.67
180,0.45,0.07,0,1,0.34,-0.66
270,0.89,0.41,1,1,0.06,-0.94
0,0.73,0.41,0,1,0.16,-0.84
90,0.73,0.35,1,1,0.06,-0.94
180,0.89,0.35,0,1,0.16,-0.84
180,0.07,0.4,0,1,0.14,-0.86
270,0.93,0.4,1,1,0.27,-0.73
180,0.07,0.13,0,1,0.14,-0.86
270,0.07,0.4,1,1,0.27,-0.73
180,0.08,0.81,0,1,0.34,-0.66
270,0.74,0.81,1,1,0.1,-0.9
180,0.08,0.71,0,1,0.34,-0.66
270,0.08,0.81,1,1,0.1,-0.9
180,0.31,0.66,0,1,0.59,-0.41
270,0.72,0.66,1,1,0.22,-0.78
180,0.31,0.44,0,1,0.59,-0.41
`),!1);m(d.ParsePatFile(`
*BLOCKS-02,BLOCKS-02 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.32,0.18,0,1,0.49,-0.51
270,0.32,0.55,1,1,0.37,-0.63
0,0.37,0.96,0,1,0.42,-0.58
0,0.17,0.98,0,1,0.17,-0.83
90,0.82,0,1,1,0.15,-0.85
180,0.92,0,0,1,0.1,-0.9
180,0.32,0.55,0,1,0.49,-0.51
270,0.83,0.55,1,1,0.37,-0.63
180,0.13,0.8,0,1,0.18,-0.82
90,0.14,0.59,1,1,0.17,-0.83
270,0.13,0.15,1,1,0.35,-0.65
180,0.71,0.59,0,1,0.57,-0.43
270,0.92,0.15,1,1,0.15,-0.85
0,0.82,0.15,0,1,0.1,-0.9
270,0.71,0.76,1,1,0.17,-0.83
0,0.14,0.76,0,1,0.57,-0.43
180,0.08,0.59,0,1,0.32,-0.68
270,0.08,0.76,1,1,0.17,-0.83
180,0.13,0.15,0,1,0.18,-0.82
270,0.95,0.15,1,1,0.35,-0.65
90,0.18,0.8,1,1,0.13,-0.87
180,0.91,0.8,0,1,0.73,-0.27
180,0.08,0.76,0,1,0.32,-0.68
270,0.76,0.76,1,1,0.17,-0.83
270,0.34,0.15,1,1,0.17,-0.83
0,0.17,0.15,0,1,0.17,-0.83
270,0.91,0.93,1,1,0.13,-0.87
0,0.18,0.93,0,1,0.73,-0.27
0,0.37,0.55,0,1,0.42,-0.58
270,0.37,0.55,1,1,0.59,-0.41
270,0.17,0.15,1,1,0.17,-0.83
270,0.79,0.55,1,1,0.59,-0.41
`),!1);m(d.ParsePatFile(`
*BOXJOIN-01,BOXJOIN-01 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
90,0.15000001,0.15,1,1,0.7,-0.3
0,0.15000001,0.85,0,1,0.7,-0.3
270,0.45000001,0.15,1,1,0.3,-0.7
180,0.15000001,0.45,0,1,0.3,-0.7
270,0.55000001,0.15,1,1,0.3,-0.7
180,0.85000001,0.15,0,1,0.7,-0.3
270,0.85000001,0.85,1,1,0.7,-0.3
180,0.15000001,0.55,0,1,0.3,-0.7
`),!1);m(d.ParsePatFile(`
*BOXJOIN-02,BOXJOIN-02 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
90,0.15000001,0.55,1,1,0.3,-0.7
270,0.85000001,0.85,1,1,0.3,-0.7
0,0.55000001,0.85,0,1,0.3,-0.7
180,0.15000001,0.55,0,1,0.3,-0.7
90,0.15000001,0.15,1,1,0.3,-0.7
180,0.45000001,0.15,0,1,0.3,-0.7
180,0.15000001,0.45,0,1,0.3,-0.7
180,0.85000001,0.15,0,1,0.3,-0.7
270,0.85000001,0.45,1,1,0.3,-0.7
270,0.45000001,0.15,1,1,0.3,-0.7
270,0.55000001,0.15,1,1,0.3,-0.7
0,0.15000001,0.85,0,1,0.3,-0.7
`),!1);m(d.ParsePatFile(`
*BOX,BOX
90, 0,0, 0,1
90, .25,0, 0,1
0, 0,0, 0,1, -.25,.25
0, 0,.25, 0,1, -.25,.25
0, 0,.5, 0,1, .25,-.25
0, 0,.75, 0,1, .25,-.25
90, .5,0, 0,1, .25,-.25
90, .75,0, 0,1, .25,-.25
`),!1);m(d.ParsePatFile(`
*BOX-OVERLAP,BOX-OVERLAP verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.2,0.7,0,1,0.4,-0.6
90,0.2,0.2,1,1,0.6,-0.4
270,0.3,0.2,1,1,0.4,-0.6
180,0.2,0.3,0,1,0.4,-0.6
0,0.2,0.8,0,1,0.6,-0.4
180,0.8,0.2,0,1,0.6,-0.4
270,0.8,0.8,1,1,0.6,-0.4
270,0.7,0.2,1,1,0.4,-0.6
`),!1);m(d.ParsePatFile(`
*BRASS,BRASS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.0625
`),!1);m(d.ParsePatFile(`
*BRICK,BRICK
0, 0,0, 0,.25
90, 0,0, 0,.5, .25,-.25
90, .25,0, 0,.5, -.25,.25
`),!1);m(d.ParsePatFile(`
*BRSTONE,BRSTONE
0, 0,0, 0,.33
90, .9,0, .33,.5, .33,-.33
90, .8,0, .33,.5, .33,-.33
0, .9,.055, .5,.33, -.9,.1
0, .9,.11, .5,.33, -.9,.1
0, .9,.165, .5,.33, -.9,.1
0, .9,.22, .5,.33, -.9,.1
0, .9,.275, .5,.33, -.9,.1
`),!1);m(d.ParsePatFile(`
*BUBBLES-01,BUBBLES-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.058964,0.016739,0,1,0,-1
0,0.062236,0.033193,0,1,0,-1
0,0.067629,0.049078,0,1,0,-1
0,0.075048,0.064123,0,1,0,-1
0,0.084368,0.078071,0,1,0,-1
0,0.095429,0.090684,0,1,0,-1
0,0.108041,0.101745,0,1,0,-1
0,0.12199,0.111065,0,1,0,-1
0,0.137035,0.118484,0,1,0,-1
0,0.15292,0.123876,0,1,0,-1
0,0.169373,0.127149,0,1,0,-1
0,0.186113,0.128246,0,1,0,-1
0,0.202852,0.127149,0,1,0,-1
0,0.219305,0.123876,0,1,0,-1
0,0.23519,0.118484,0,1,0,-1
0,0.250236,0.111065,0,1,0,-1
0,0.264184,0.101745,0,1,0,-1
0,0.276796,0.090684,0,1,0,-1
0,0.287857,0.078071,0,1,0,-1
0,0.297177,0.064123,0,1,0,-1
0,0.304597,0.049078,0,1,0,-1
0,0.309989,0.033193,0,1,0,-1
0,0.313262,0.016739,0,1,0,-1
0,0.120008,0.220248,0,1,0,-1
0,0.117478,0.203192,0,1,0,-1
0,0.113288,0.186467,0,1,0,-1
0,0.10748,0.170233,0,1,0,-1
0,0.100108,0.154647,0,1,0,-1
0,0.091244,0.139858,0,1,0,-1
0,0.080973,0.126009,0,1,0,-1
0,0.069394,0.113234,0,1,0,-1
0,0.056618,0.101655,0,1,0,-1
0,0.04277,0.091384,0,1,0,-1
0,0.027981,0.08252,0,1,0,-1
0,0.012394,0.075148,0,1,0,-1
0,0.012394,0.39979,0,1,0,-1
0,0.027981,0.392418,0,1,0,-1
0,0.04277,0.383554,0,1,0,-1
0,0.056618,0.373283,0,1,0,-1
0,0.069394,0.361704,0,1,0,-1
0,0.080973,0.348929,0,1,0,-1
0,0.091244,0.33508,0,1,0,-1
0,0.100108,0.320291,0,1,0,-1
0,0.10748,0.304704,0,1,0,-1
0,0.113288,0.28847,0,1,0,-1
0,0.117478,0.271745,0,1,0,-1
0,0.120008,0.25469,0,1,0,-1
0,0.120854,0.237469,0,1,0,-1
0,0.738076,0.372319,0,1,0,-1
0,0.732613,0.356706,0,1,0,-1
0,0.723812,0.3427,0,1,0,-1
0,0.712116,0.331003,0,1,0,-1
0,0.69811,0.322203,0,1,0,-1
0,0.682497,0.316739,0,1,0,-1
0,0.666059,0.314887,0,1,0,-1
0,0.649622,0.316739,0,1,0,-1
0,0.634009,0.322203,0,1,0,-1
0,0.620003,0.331003,0,1,0,-1
0,0.608306,0.3427,0,1,0,-1
0,0.599506,0.356706,0,1,0,-1
0,0.594042,0.372319,0,1,0,-1
0,0.59219,0.388756,0,1,0,-1
0,0.594042,0.405194,0,1,0,-1
0,0.599506,0.420807,0,1,0,-1
0,0.608306,0.434813,0,1,0,-1
0,0.620003,0.44651,0,1,0,-1
0,0.634009,0.45531,0,1,0,-1
0,0.649622,0.460773,0,1,0,-1
0,0.666059,0.462625,0,1,0,-1
0,0.682497,0.460773,0,1,0,-1
0,0.69811,0.45531,0,1,0,-1
0,0.712116,0.44651,0,1,0,-1
0,0.723812,0.434813,0,1,0,-1
0,0.732613,0.420807,0,1,0,-1
0,0.738076,0.405194,0,1,0,-1
0,0.739928,0.388756,0,1,0,-1
0,0.834916,0.831041,0,1,0,-1
0,0.821448,0.840826,0,1,0,-1
0,0.810309,0.853198,0,1,0,-1
0,0.462763,0.750408,0,1,0,-1
0,0.458683,0.734294,0,1,0,-1
0,0.452005,0.71907,0,1,0,-1
0,0.442913,0.705153,0,1,0,-1
0,0.431654,0.692923,0,1,0,-1
0,0.418536,0.682713,0,1,0,-1
0,0.403916,0.674801,0,1,0,-1
0,0.388193,0.669403,0,1,0,-1
0,0.371796,0.666667,0,1,0,-1
0,0.355172,0.666667,0,1,0,-1
0,0.338776,0.669403,0,1,0,-1
0,0.323053,0.674801,0,1,0,-1
0,0.308433,0.682713,0,1,0,-1
0,0.295314,0.692923,0,1,0,-1
0,0.284056,0.705153,0,1,0,-1
0,0.274963,0.71907,0,1,0,-1
0,0.268286,0.734294,0,1,0,-1
0,0.264205,0.750408,0,1,0,-1
0,0.262832,0.766975,0,1,0,-1
0,0.264205,0.783542,0,1,0,-1
0,0.268286,0.799657,0,1,0,-1
0,0.274963,0.81488,0,1,0,-1
0,0.284056,0.828797,0,1,0,-1
0,0.295314,0.841027,0,1,0,-1
0,0.308433,0.851238,0,1,0,-1
0,0.323053,0.85915,0,1,0,-1
0,0.403916,0.85915,0,1,0,-1
0,0.418536,0.851238,0,1,0,-1
0,0.431654,0.841027,0,1,0,-1
0,0.442913,0.828797,0,1,0,-1
0,0.452005,0.81488,0,1,0,-1
0,0.458683,0.799657,0,1,0,-1
0,0.462763,0.783542,0,1,0,-1
0,0.464136,0.766975,0,1,0,-1
0,0.821196,0.648394,0,1,0,-1
0,0.818556,0.631724,0,1,0,-1
0,0.814188,0.615423,0,1,0,-1
0,0.808139,0.599667,0,1,0,-1
0,0.800477,0.584629,0,1,0,-1
0,0.791286,0.570475,0,1,0,-1
0,0.780665,0.557359,0,1,0,-1
0,0.768731,0.545425,0,1,0,-1
0,0.755615,0.534804,0,1,0,-1
0,0.741461,0.525612,0,1,0,-1
0,0.726423,0.51795,0,1,0,-1
0,0.710667,0.511902,0,1,0,-1
0,0.694365,0.507534,0,1,0,-1
0,0.677696,0.504894,0,1,0,-1
0,0.660842,0.504011,0,1,0,-1
0,0.643989,0.504894,0,1,0,-1
0,0.627319,0.507534,0,1,0,-1
0,0.611018,0.511902,0,1,0,-1
0,0.595262,0.51795,0,1,0,-1
0,0.580224,0.525612,0,1,0,-1
0,0.56607,0.534804,0,1,0,-1
0,0.552954,0.545425,0,1,0,-1
0,0.54102,0.557359,0,1,0,-1
0,0.530399,0.570475,0,1,0,-1
0,0.521207,0.584629,0,1,0,-1
0,0.513545,0.599667,0,1,0,-1
0,0.507497,0.615423,0,1,0,-1
0,0.503129,0.631724,0,1,0,-1
0,0.500489,0.648394,0,1,0,-1
0,0.499606,0.665247,0,1,0,-1
0,0.500489,0.682101,0,1,0,-1
0,0.503129,0.69877,0,1,0,-1
0,0.507497,0.715072,0,1,0,-1
0,0.513545,0.730828,0,1,0,-1
0,0.521207,0.745866,0,1,0,-1
0,0.530399,0.76002,0,1,0,-1
0,0.54102,0.773136,0,1,0,-1
0,0.552954,0.785069,0,1,0,-1
0,0.56607,0.795691,0,1,0,-1
0,0.580224,0.804882,0,1,0,-1
0,0.595262,0.812544,0,1,0,-1
0,0.611018,0.818592,0,1,0,-1
0,0.627319,0.822961,0,1,0,-1
0,0.643989,0.825601,0,1,0,-1
0,0.660842,0.826484,0,1,0,-1
0,0.677696,0.825601,0,1,0,-1
0,0.694365,0.822961,0,1,0,-1
0,0.710667,0.818592,0,1,0,-1
0,0.726423,0.812544,0,1,0,-1
0,0.741461,0.804882,0,1,0,-1
0,0.755615,0.795691,0,1,0,-1
0,0.768731,0.785069,0,1,0,-1
0,0.780665,0.773136,0,1,0,-1
0,0.791286,0.76002,0,1,0,-1
0,0.800477,0.745866,0,1,0,-1
0,0.808139,0.730828,0,1,0,-1
0,0.814188,0.715072,0,1,0,-1
0,0.818556,0.69877,0,1,0,-1
0,0.821196,0.682101,0,1,0,-1
0,0.822079,0.665247,0,1,0,-1
0,0.524311,0.381738,0,1,0,-1
0,0.521577,0.364477,0,1,0,-1
0,0.517054,0.347597,0,1,0,-1
0,0.510791,0.331282,0,1,0,-1
0,0.502858,0.315711,0,1,0,-1
0,0.49334,0.301054,0,1,0,-1
0,0.482342,0.287473,0,1,0,-1
0,0.469984,0.275116,0,1,0,-1
0,0.456403,0.264118,0,1,0,-1
0,0.441747,0.2546,0,1,0,-1
0,0.426175,0.246666,0,1,0,-1
0,0.40986,0.240403,0,1,0,-1
0,0.39298,0.23588,0,1,0,-1
0,0.375719,0.233146,0,1,0,-1
0,0.358267,0.232232,0,1,0,-1
0,0.340816,0.233146,0,1,0,-1
0,0.323555,0.23588,0,1,0,-1
0,0.306674,0.240403,0,1,0,-1
0,0.290359,0.246666,0,1,0,-1
0,0.274788,0.2546,0,1,0,-1
0,0.260132,0.264118,0,1,0,-1
0,0.246551,0.275116,0,1,0,-1
0,0.234193,0.287473,0,1,0,-1
0,0.223195,0.301054,0,1,0,-1
0,0.213677,0.315711,0,1,0,-1
0,0.205743,0.331282,0,1,0,-1
0,0.199481,0.347597,0,1,0,-1
0,0.194958,0.364477,0,1,0,-1
0,0.192224,0.381738,0,1,0,-1
0,0.191309,0.39919,0,1,0,-1
0,0.192224,0.416642,0,1,0,-1
0,0.194958,0.433903,0,1,0,-1
0,0.199481,0.450783,0,1,0,-1
0,0.205743,0.467098,0,1,0,-1
0,0.213677,0.482669,0,1,0,-1
0,0.223195,0.497326,0,1,0,-1
0,0.234193,0.510907,0,1,0,-1
0,0.246551,0.523264,0,1,0,-1
0,0.260132,0.534262,0,1,0,-1
0,0.274788,0.54378,0,1,0,-1
0,0.290359,0.551714,0,1,0,-1
0,0.306674,0.557977,0,1,0,-1
0,0.323555,0.5625,0,1,0,-1
0,0.340816,0.565234,0,1,0,-1
0,0.358267,0.566148,0,1,0,-1
0,0.375719,0.565234,0,1,0,-1
0,0.39298,0.5625,0,1,0,-1
0,0.40986,0.557977,0,1,0,-1
0,0.426175,0.551714,0,1,0,-1
0,0.441747,0.54378,0,1,0,-1
0,0.456403,0.534262,0,1,0,-1
0,0.469984,0.523264,0,1,0,-1
0,0.482342,0.510907,0,1,0,-1
0,0.49334,0.497326,0,1,0,-1
0,0.502858,0.482669,0,1,0,-1
0,0.510791,0.467098,0,1,0,-1
0,0.517054,0.450783,0,1,0,-1
0,0.521577,0.433903,0,1,0,-1
0,0.524311,0.416642,0,1,0,-1
0,0.525226,0.39919,0,1,0,-1
0,0.847548,0.091384,0,1,0,-1
0,0.833699,0.101655,0,1,0,-1
0,0.820923,0.113234,0,1,0,-1
0,0.809345,0.126009,0,1,0,-1
0,0.799074,0.139858,0,1,0,-1
0,0.790209,0.154647,0,1,0,-1
0,0.782838,0.170233,0,1,0,-1
0,0.777029,0.186467,0,1,0,-1
0,0.77284,0.203192,0,1,0,-1
0,0.77031,0.220248,0,1,0,-1
0,0.769464,0.237469,0,1,0,-1
0,0.77031,0.25469,0,1,0,-1
0,0.77284,0.271745,0,1,0,-1
0,0.777029,0.28847,0,1,0,-1
0,0.782838,0.304704,0,1,0,-1
0,0.790209,0.320291,0,1,0,-1
0,0.799074,0.33508,0,1,0,-1
0,0.809345,0.348929,0,1,0,-1
0,0.820923,0.361704,0,1,0,-1
0,0.833699,0.373283,0,1,0,-1
0,0.847548,0.383554,0,1,0,-1
0,0.241252,0.63247,0,1,0,-1
0,0.238633,0.614814,0,1,0,-1
0,0.234297,0.5975,0,1,0,-1
0,0.228283,0.580695,0,1,0,-1
0,0.220652,0.56456,0,1,0,-1
0,0.211476,0.54925,0,1,0,-1
0,0.200843,0.534914,0,1,0,-1
0,0.188857,0.521689,0,1,0,-1
0,0.175632,0.509702,0,1,0,-1
0,0.161296,0.49907,0,1,0,-1
0,0.145986,0.489894,0,1,0,-1
0,0.129851,0.482262,0,1,0,-1
0,0.113046,0.476249,0,1,0,-1
0,0.095732,0.471912,0,1,0,-1
0,0.078076,0.469293,0,1,0,-1
0,0.060249,0.468417,0,1,0,-1
0,0.042421,0.469293,0,1,0,-1
0,0.024766,0.471912,0,1,0,-1
0,0.007452,0.476249,0,1,0,-1
0,0.007452,0.824345,0,1,0,-1
0,0.024766,0.828682,0,1,0,-1
0,0.042421,0.831301,0,1,0,-1
0,0.060249,0.832177,0,1,0,-1
0,0.078076,0.831301,0,1,0,-1
0,0.095732,0.828682,0,1,0,-1
0,0.113046,0.824345,0,1,0,-1
0,0.129851,0.818332,0,1,0,-1
0,0.145986,0.8107,0,1,0,-1
0,0.161296,0.801524,0,1,0,-1
0,0.175632,0.790892,0,1,0,-1
0,0.188857,0.778905,0,1,0,-1
0,0.200843,0.76568,0,1,0,-1
0,0.211476,0.751344,0,1,0,-1
0,0.220652,0.736034,0,1,0,-1
0,0.228283,0.719899,0,1,0,-1
0,0.234297,0.703094,0,1,0,-1
0,0.238633,0.68578,0,1,0,-1
0,0.241252,0.668124,0,1,0,-1
0,0.242128,0.650297,0,1,0,-1
0,0.771442,0.048085,0,1,0,-1
0,0.768672,0.029409,0,1,0,-1
0,0.764084,0.011095,0,1,0,-1
0,0.39588,0.011095,0,1,0,-1
0,0.391292,0.029409,0,1,0,-1
0,0.388522,0.048085,0,1,0,-1
0,0.387595,0.066942,0,1,0,-1
0,0.388522,0.085799,0,1,0,-1
0,0.391292,0.104475,0,1,0,-1
0,0.39588,0.122789,0,1,0,-1
0,0.40224,0.140565,0,1,0,-1
0,0.410312,0.157632,0,1,0,-1
0,0.420018,0.173826,0,1,0,-1
0,0.431265,0.18899,0,1,0,-1
0,0.443944,0.20298,0,1,0,-1
0,0.457933,0.215659,0,1,0,-1
0,0.473098,0.226905,0,1,0,-1
0,0.489292,0.236612,0,1,0,-1
0,0.506359,0.244684,0,1,0,-1
0,0.524135,0.251044,0,1,0,-1
0,0.542449,0.255632,0,1,0,-1
0,0.561125,0.258402,0,1,0,-1
0,0.579982,0.259328,0,1,0,-1
0,0.598839,0.258402,0,1,0,-1
0,0.617515,0.255632,0,1,0,-1
0,0.635829,0.251044,0,1,0,-1
0,0.653605,0.244684,0,1,0,-1
0,0.670672,0.236612,0,1,0,-1
0,0.686866,0.226905,0,1,0,-1
0,0.702031,0.215659,0,1,0,-1
0,0.71602,0.20298,0,1,0,-1
0,0.728699,0.18899,0,1,0,-1
0,0.739945,0.173826,0,1,0,-1
0,0.749652,0.157632,0,1,0,-1
0,0.757724,0.140565,0,1,0,-1
0,0.764084,0.122789,0,1,0,-1
0,0.768672,0.104475,0,1,0,-1
0,0.771442,0.085799,0,1,0,-1
0,0.772368,0.066942,0,1,0,-1
0,0.990646,0.482262,0,1,0,-1
0,0.974511,0.489894,0,1,0,-1
0,0.959202,0.49907,0,1,0,-1
0,0.944866,0.509702,0,1,0,-1
0,0.93164,0.521689,0,1,0,-1
0,0.919654,0.534914,0,1,0,-1
0,0.909021,0.54925,0,1,0,-1
0,0.899845,0.56456,0,1,0,-1
0,0.892214,0.580695,0,1,0,-1
0,0.886201,0.5975,0,1,0,-1
0,0.881864,0.614814,0,1,0,-1
0,0.879245,0.63247,0,1,0,-1
0,0.878369,0.650297,0,1,0,-1
0,0.879245,0.668124,0,1,0,-1
0,0.881864,0.68578,0,1,0,-1
0,0.886201,0.703094,0,1,0,-1
0,0.892214,0.719899,0,1,0,-1
0,0.899845,0.736034,0,1,0,-1
0,0.909021,0.751344,0,1,0,-1
0,0.919654,0.76568,0,1,0,-1
0,0.93164,0.778905,0,1,0,-1
0,0.944866,0.790892,0,1,0,-1
0,0.959202,0.801524,0,1,0,-1
0,0.974511,0.8107,0,1,0,-1
0,0.990646,0.818332,0,1,0,-1
0,0.947478,0.867615,0,1,0,-1
0,0.939155,0.853198,0,1,0,-1
0,0.928015,0.840826,0,1,0,-1
0,0.914547,0.831041,0,1,0,-1
0,0.899339,0.82427,0,1,0,-1
0,0.883055,0.820809,0,1,0,-1
0,0.866408,0.820809,0,1,0,-1
0,0.850124,0.82427,0,1,0,-1
0,0.801985,0.867615,0,1,0,-1
0,0.99616,0.069339,0,1,0,-1
0,0.979435,0.06515,0,1,0,-1
0,0.96238,0.06262,0,1,0,-1
0,0.945159,0.061774,0,1,0,-1
0,0.927938,0.06262,0,1,0,-1
0,0.910882,0.06515,0,1,0,-1
0,0.894157,0.069339,0,1,0,-1
0,0.877923,0.075148,0,1,0,-1
0,0.862337,0.08252,0,1,0,-1
0,0.862337,0.392418,0,1,0,-1
0,0.877923,0.39979,0,1,0,-1
0,0.894157,0.405599,0,1,0,-1
0,0.910882,0.409788,0,1,0,-1
0,0.927938,0.412318,0,1,0,-1
0,0.945159,0.413164,0,1,0,-1
0,0.96238,0.412318,0,1,0,-1
0,0.979435,0.409788,0,1,0,-1
0,0.99616,0.405599,0,1,0,-1
0,0.757724,0.993319,0,1,0,-1
0,0.749652,0.976251,0,1,0,-1
0,0.739945,0.960058,0,1,0,-1
0,0.728699,0.944893,0,1,0,-1
0,0.71602,0.930904,0,1,0,-1
0,0.702031,0.918225,0,1,0,-1
0,0.686866,0.906978,0,1,0,-1
0,0.670672,0.897272,0,1,0,-1
0,0.653605,0.8892,0,1,0,-1
0,0.635829,0.882839,0,1,0,-1
0,0.617515,0.878252,0,1,0,-1
0,0.598839,0.875482,0,1,0,-1
0,0.579982,0.874555,0,1,0,-1
0,0.561125,0.875482,0,1,0,-1
0,0.542449,0.878252,0,1,0,-1
0,0.524135,0.882839,0,1,0,-1
0,0.506359,0.8892,0,1,0,-1
0,0.489292,0.897272,0,1,0,-1
0,0.473098,0.906978,0,1,0,-1
0,0.457933,0.918225,0,1,0,-1
0,0.443944,0.930904,0,1,0,-1
0,0.431265,0.944893,0,1,0,-1
0,0.420018,0.960058,0,1,0,-1
0,0.410312,0.976251,0,1,0,-1
0,0.40224,0.993319,0,1,0,-1
0,0.796841,0.883448,0,1,0,-1
0,0.795101,0.900004,0,1,0,-1
0,0.796841,0.91656,0,1,0,-1
0,0.801985,0.932393,0,1,0,-1
0,0.810309,0.94681,0,1,0,-1
0,0.821448,0.959181,0,1,0,-1
0,0.834916,0.968966,0,1,0,-1
0,0.338776,0.864547,0,1,0,-1
0,0.355172,0.867283,0,1,0,-1
0,0.371796,0.867283,0,1,0,-1
0,0.388193,0.864547,0,1,0,-1
0,0.313262,0.983261,0,1,0,-1
0,0.309989,0.966807,0,1,0,-1
0,0.304597,0.950922,0,1,0,-1
0,0.297177,0.935877,0,1,0,-1
0,0.287857,0.921929,0,1,0,-1
0,0.276796,0.909316,0,1,0,-1
0,0.264184,0.898255,0,1,0,-1
0,0.250236,0.888935,0,1,0,-1
0,0.23519,0.881516,0,1,0,-1
0,0.219305,0.876124,0,1,0,-1
0,0.202852,0.872851,0,1,0,-1
0,0.186113,0.871754,0,1,0,-1
0,0.169373,0.872851,0,1,0,-1
0,0.15292,0.876124,0,1,0,-1
0,0.137035,0.881516,0,1,0,-1
0,0.12199,0.888935,0,1,0,-1
0,0.108041,0.898255,0,1,0,-1
0,0.095429,0.909316,0,1,0,-1
0,0.084368,0.921929,0,1,0,-1
0,0.075048,0.935877,0,1,0,-1
0,0.067629,0.950922,0,1,0,-1
0,0.062236,0.966807,0,1,0,-1
0,0.058964,0.983261,0,1,0,-1
0,0.057866,1,0,1,0,-1
0,0.314359,1,0,1,0,-1
0,0.952623,0.883448,0,1,0,-1
0,0.850124,0.975738,0,1,0,-1
0,0.866408,0.979199,0,1,0,-1
0,0.883055,0.979199,0,1,0,-1
0,0.899339,0.975738,0,1,0,-1
0,0.914547,0.968966,0,1,0,-1
0,0.928015,0.959181,0,1,0,-1
0,0.939155,0.94681,0,1,0,-1
0,0.947478,0.932393,0,1,0,-1
0,0.952623,0.91656,0,1,0,-1
0,0.954363,0.900004,0,1,0,-1
`),!1);m(d.ParsePatFile(`
*BUBBLES-02,BUBBLES-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.01243,0.139689,0,1,0,-1
0,0.004689,0.124495,0,1,0,-1
0,0.004689,0.188567,0,1,0,-1
0,0.01243,0.173373,0,1,0,-1
0,0.015098,0.156531,0,1,0,-1
0,0.039159,0.550628,0,1,0,-1
0,0.03308,0.534599,0,1,0,-1
0,0.023341,0.52049,0,1,0,-1
0,0.010509,0.509122,0,1,0,-1
0,0.010509,0.626172,0,1,0,-1
0,0.023341,0.614804,0,1,0,-1
0,0.03308,0.600695,0,1,0,-1
0,0.039159,0.584666,0,1,0,-1
0,0.041226,0.567647,0,1,0,-1
0,0.012655,0.061217,0,1,0,-1
0,0.029343,0.064052,0,1,0,-1
0,0.046244,0.065001,0,1,0,-1
0,0.063146,0.064052,0,1,0,-1
0,0.079834,0.061217,0,1,0,-1
0,0.0961,0.05653,0,1,0,-1
0,0.11174,0.050052,0,1,0,-1
0,0.126555,0.041864,0,1,0,-1
0,0.140361,0.032069,0,1,0,-1
0,0.152983,0.020789,0,1,0,-1
0,0.164263,0.008167,0,1,0,-1
0,0.211752,0.623376,0,1,0,-1
0,0.203326,0.608782,0,1,0,-1
0,0.190416,0.597949,0,1,0,-1
0,0.17458,0.592185,0,1,0,-1
0,0.157727,0.592185,0,1,0,-1
0,0.141891,0.597949,0,1,0,-1
0,0.128981,0.608782,0,1,0,-1
0,0.120555,0.623376,0,1,0,-1
0,0.117628,0.639973,0,1,0,-1
0,0.120555,0.65657,0,1,0,-1
0,0.128981,0.671164,0,1,0,-1
0,0.141891,0.681997,0,1,0,-1
0,0.157727,0.687761,0,1,0,-1
0,0.17458,0.687761,0,1,0,-1
0,0.190416,0.681997,0,1,0,-1
0,0.203326,0.671164,0,1,0,-1
0,0.211752,0.65657,0,1,0,-1
0,0.214678,0.639973,0,1,0,-1
0,0.063146,0.764048,0,1,0,-1
0,0.046244,0.763099,0,1,0,-1
0,0.029343,0.764048,0,1,0,-1
0,0.3178,0.248563,0,1,0,-1
0,0.314583,0.232388,0,1,0,-1
0,0.309282,0.216771,0,1,0,-1
0,0.301988,0.20198,0,1,0,-1
0,0.292825,0.188268,0,1,0,-1
0,0.281951,0.175868,0,1,0,-1
0,0.269552,0.164994,0,1,0,-1
0,0.255839,0.155832,0,1,0,-1
0,0.241048,0.148538,0,1,0,-1
0,0.225431,0.143237,0,1,0,-1
0,0.209256,0.140019,0,1,0,-1
0,0.1928,0.138941,0,1,0,-1
0,0.176343,0.140019,0,1,0,-1
0,0.160168,0.143237,0,1,0,-1
0,0.144551,0.148538,0,1,0,-1
0,0.12976,0.155832,0,1,0,-1
0,0.116047,0.164994,0,1,0,-1
0,0.103648,0.175868,0,1,0,-1
0,0.092774,0.188268,0,1,0,-1
0,0.083612,0.20198,0,1,0,-1
0,0.076318,0.216771,0,1,0,-1
0,0.071016,0.232388,0,1,0,-1
0,0.067799,0.248563,0,1,0,-1
0,0.06672,0.26502,0,1,0,-1
0,0.067799,0.281477,0,1,0,-1
0,0.071016,0.297652,0,1,0,-1
0,0.076318,0.313268,0,1,0,-1
0,0.083612,0.32806,0,1,0,-1
0,0.092774,0.341772,0,1,0,-1
0,0.103648,0.354171,0,1,0,-1
0,0.116047,0.365045,0,1,0,-1
0,0.12976,0.374208,0,1,0,-1
0,0.144551,0.381502,0,1,0,-1
0,0.160168,0.386803,0,1,0,-1
0,0.176343,0.390021,0,1,0,-1
0,0.1928,0.391099,0,1,0,-1
0,0.209256,0.390021,0,1,0,-1
0,0.225431,0.386803,0,1,0,-1
0,0.241048,0.381502,0,1,0,-1
0,0.255839,0.374208,0,1,0,-1
0,0.269552,0.365045,0,1,0,-1
0,0.281951,0.354171,0,1,0,-1
0,0.292825,0.341772,0,1,0,-1
0,0.301988,0.32806,0,1,0,-1
0,0.309282,0.313268,0,1,0,-1
0,0.314583,0.297652,0,1,0,-1
0,0.3178,0.281477,0,1,0,-1
0,0.318879,0.26502,0,1,0,-1
0,0.710254,0.515012,0,1,0,-1
0,0.707834,0.498698,0,1,0,-1
0,0.703826,0.482701,0,1,0,-1
0,0.69827,0.467173,0,1,0,-1
0,0.691219,0.452264,0,1,0,-1
0,0.682741,0.438119,0,1,0,-1
0,0.672916,0.424872,0,1,0,-1
0,0.661841,0.412653,0,1,0,-1
0,0.649621,0.401577,0,1,0,-1
0,0.636375,0.391753,0,1,0,-1
0,0.622229,0.383274,0,1,0,-1
0,0.607321,0.376223,0,1,0,-1
0,0.591793,0.370667,0,1,0,-1
0,0.575795,0.36666,0,1,0,-1
0,0.559482,0.36424,0,1,0,-1
0,0.54301,0.363431,0,1,0,-1
0,0.526538,0.36424,0,1,0,-1
0,0.510224,0.36666,0,1,0,-1
0,0.494226,0.370667,0,1,0,-1
0,0.478698,0.376223,0,1,0,-1
0,0.46379,0.383274,0,1,0,-1
0,0.449644,0.391753,0,1,0,-1
0,0.436398,0.401577,0,1,0,-1
0,0.424178,0.412653,0,1,0,-1
0,0.413103,0.424872,0,1,0,-1
0,0.403279,0.438119,0,1,0,-1
0,0.3948,0.452264,0,1,0,-1
0,0.387749,0.467173,0,1,0,-1
0,0.382193,0.482701,0,1,0,-1
0,0.378186,0.498698,0,1,0,-1
0,0.375766,0.515012,0,1,0,-1
0,0.374957,0.531484,0,1,0,-1
0,0.375766,0.547956,0,1,0,-1
0,0.378186,0.56427,0,1,0,-1
0,0.382193,0.580267,0,1,0,-1
0,0.387749,0.595795,0,1,0,-1
0,0.3948,0.610704,0,1,0,-1
0,0.403279,0.624849,0,1,0,-1
0,0.413103,0.638096,0,1,0,-1
0,0.424178,0.650315,0,1,0,-1
0,0.436398,0.661391,0,1,0,-1
0,0.449644,0.671215,0,1,0,-1
0,0.46379,0.679694,0,1,0,-1
0,0.478698,0.686745,0,1,0,-1
0,0.494226,0.692301,0,1,0,-1
0,0.510224,0.696308,0,1,0,-1
0,0.526538,0.698728,0,1,0,-1
0,0.54301,0.699537,0,1,0,-1
0,0.559482,0.698728,0,1,0,-1
0,0.575795,0.696308,0,1,0,-1
0,0.591793,0.692301,0,1,0,-1
0,0.607321,0.686745,0,1,0,-1
0,0.622229,0.679694,0,1,0,-1
0,0.636375,0.671215,0,1,0,-1
0,0.649621,0.661391,0,1,0,-1
0,0.661841,0.650315,0,1,0,-1
0,0.672916,0.638096,0,1,0,-1
0,0.682741,0.624849,0,1,0,-1
0,0.691219,0.610704,0,1,0,-1
0,0.69827,0.595795,0,1,0,-1
0,0.703826,0.580267,0,1,0,-1
0,0.707834,0.56427,0,1,0,-1
0,0.710254,0.547956,0,1,0,-1
0,0.711063,0.531484,0,1,0,-1
0,0.353512,0.012986,0,1,0,-1
0,0.351649,0.029516,0,1,0,-1
0,0.351027,0.046139,0,1,0,-1
0,0.351649,0.062761,0,1,0,-1
0,0.353512,0.079291,0,1,0,-1
0,0.356604,0.095635,0,1,0,-1
0,0.360909,0.111703,0,1,0,-1
0,0.366403,0.127404,0,1,0,-1
0,0.373055,0.14265,0,1,0,-1
0,0.380828,0.157356,0,1,0,-1
0,0.389678,0.171441,0,1,0,-1
0,0.399556,0.184825,0,1,0,-1
0,0.410406,0.197433,0,1,0,-1
0,0.422168,0.209196,0,1,0,-1
0,0.434776,0.220046,0,1,0,-1
0,0.44816,0.229924,0,1,0,-1
0,0.462245,0.238774,0,1,0,-1
0,0.476951,0.246546,0,1,0,-1
0,0.492198,0.253198,0,1,0,-1
0,0.507899,0.258692,0,1,0,-1
0,0.523966,0.262997,0,1,0,-1
0,0.54031,0.26609,0,1,0,-1
0,0.55684,0.267952,0,1,0,-1
0,0.573463,0.268574,0,1,0,-1
0,0.590085,0.267952,0,1,0,-1
0,0.606615,0.26609,0,1,0,-1
0,0.622959,0.262997,0,1,0,-1
0,0.639027,0.258692,0,1,0,-1
0,0.654727,0.253198,0,1,0,-1
0,0.669974,0.246546,0,1,0,-1
0,0.68468,0.238774,0,1,0,-1
0,0.698765,0.229924,0,1,0,-1
0,0.712149,0.220046,0,1,0,-1
0,0.724757,0.209196,0,1,0,-1
0,0.736519,0.197433,0,1,0,-1
0,0.74737,0.184825,0,1,0,-1
0,0.757248,0.171441,0,1,0,-1
0,0.766098,0.157356,0,1,0,-1
0,0.77387,0.14265,0,1,0,-1
0,0.780522,0.127404,0,1,0,-1
0,0.928226,0.008167,0,1,0,-1
0,0.939506,0.020789,0,1,0,-1
0,0.952128,0.032069,0,1,0,-1
0,0.965934,0.041864,0,1,0,-1
0,0.980749,0.050052,0,1,0,-1
0,0.996388,0.05653,0,1,0,-1
0,0.992631,0.112437,0,1,0,-1
0,0.977438,0.104696,0,1,0,-1
0,0.960595,0.102028,0,1,0,-1
0,0.943753,0.104696,0,1,0,-1
0,0.928559,0.112437,0,1,0,-1
0,0.916502,0.124495,0,1,0,-1
0,0.90876,0.139689,0,1,0,-1
0,0.906093,0.156531,0,1,0,-1
0,0.90876,0.173373,0,1,0,-1
0,0.916502,0.188567,0,1,0,-1
0,0.928559,0.200625,0,1,0,-1
0,0.943753,0.208366,0,1,0,-1
0,0.960595,0.211034,0,1,0,-1
0,0.977438,0.208366,0,1,0,-1
0,0.992631,0.200625,0,1,0,-1
0,0.995329,0.501155,0,1,0,-1
0,0.978684,0.497052,0,1,0,-1
0,0.96154,0.497052,0,1,0,-1
0,0.944895,0.501155,0,1,0,-1
0,0.929715,0.509122,0,1,0,-1
0,0.916882,0.52049,0,1,0,-1
0,0.907144,0.534599,0,1,0,-1
0,0.901065,0.550628,0,1,0,-1
0,0.898998,0.567647,0,1,0,-1
0,0.901065,0.584666,0,1,0,-1
0,0.907144,0.600695,0,1,0,-1
0,0.916882,0.614804,0,1,0,-1
0,0.929715,0.626172,0,1,0,-1
0,0.944895,0.634139,0,1,0,-1
0,0.96154,0.638242,0,1,0,-1
0,0.978684,0.638242,0,1,0,-1
0,0.995329,0.634139,0,1,0,-1
0,0.795276,0.029516,0,1,0,-1
0,0.793414,0.012986,0,1,0,-1
0,0.786016,0.111703,0,1,0,-1
0,0.790321,0.095635,0,1,0,-1
0,0.793414,0.079291,0,1,0,-1
0,0.795276,0.062761,0,1,0,-1
0,0.795898,0.046139,0,1,0,-1
0,0.790321,0.996642,0,1,0,-1
0,0.786016,0.980575,0,1,0,-1
0,0.780522,0.964874,0,1,0,-1
0,0.77387,0.949628,0,1,0,-1
0,0.766098,0.934921,0,1,0,-1
0,0.757248,0.920836,0,1,0,-1
0,0.74737,0.907452,0,1,0,-1
0,0.736519,0.894844,0,1,0,-1
0,0.724757,0.883082,0,1,0,-1
0,0.712149,0.872232,0,1,0,-1
0,0.698765,0.862354,0,1,0,-1
0,0.68468,0.853504,0,1,0,-1
0,0.669974,0.845731,0,1,0,-1
0,0.654727,0.839079,0,1,0,-1
0,0.639027,0.833585,0,1,0,-1
0,0.622959,0.82928,0,1,0,-1
0,0.606615,0.826188,0,1,0,-1
0,0.590085,0.824325,0,1,0,-1
0,0.573463,0.823703,0,1,0,-1
0,0.55684,0.824325,0,1,0,-1
0,0.54031,0.826188,0,1,0,-1
0,0.523966,0.82928,0,1,0,-1
0,0.507899,0.833585,0,1,0,-1
0,0.492198,0.839079,0,1,0,-1
0,0.476951,0.845731,0,1,0,-1
0,0.462245,0.853504,0,1,0,-1
0,0.44816,0.862354,0,1,0,-1
0,0.434776,0.872232,0,1,0,-1
0,0.422168,0.883082,0,1,0,-1
0,0.410406,0.894844,0,1,0,-1
0,0.399556,0.907452,0,1,0,-1
0,0.389678,0.920836,0,1,0,-1
0,0.380828,0.934921,0,1,0,-1
0,0.373055,0.949628,0,1,0,-1
0,0.366403,0.964874,0,1,0,-1
0,0.360909,0.980575,0,1,0,-1
0,0.356604,0.996642,0,1,0,-1
0,0.196246,0.897149,0,1,0,-1
0,0.193411,0.880461,0,1,0,-1
0,0.188725,0.864194,0,1,0,-1
0,0.182247,0.848555,0,1,0,-1
0,0.174058,0.83374,0,1,0,-1
0,0.164263,0.819934,0,1,0,-1
0,0.152983,0.807312,0,1,0,-1
0,0.140361,0.796032,0,1,0,-1
0,0.126555,0.786236,0,1,0,-1
0,0.11174,0.778048,0,1,0,-1
0,0.0961,0.77157,0,1,0,-1
0,0.079834,0.766884,0,1,0,-1
0,0.012655,0.766884,0,1,0,-1
0,0.174058,0.994361,0,1,0,-1
0,0.182247,0.979545,0,1,0,-1
0,0.188725,0.963906,0,1,0,-1
0,0.193411,0.94764,0,1,0,-1
0,0.196246,0.930951,0,1,0,-1
0,0.197195,0.91405,0,1,0,-1
0,0.996388,0.77157,0,1,0,-1
0,0.980749,0.778048,0,1,0,-1
0,0.965934,0.786236,0,1,0,-1
0,0.952128,0.796032,0,1,0,-1
0,0.939506,0.807312,0,1,0,-1
0,0.928226,0.819934,0,1,0,-1
0,0.918431,0.83374,0,1,0,-1
0,0.910242,0.848555,0,1,0,-1
0,0.903764,0.864194,0,1,0,-1
0,0.899078,0.880461,0,1,0,-1
0,0.896243,0.897149,0,1,0,-1
0,0.895293,0.91405,0,1,0,-1
0,0.896243,0.930951,0,1,0,-1
0,0.899078,0.94764,0,1,0,-1
0,0.903764,0.963906,0,1,0,-1
0,0.910242,0.979545,0,1,0,-1
0,0.918431,0.994361,0,1,0,-1
`),!1);m(d.ParsePatFile(`
*BUBBLES-03,BUBBLES-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
0,0.401131,0.163621,0,1,0,-1
0,0.397069,0.144076,0,1,0,-1
0,0.390384,0.125265,0,1,0,-1
0,0.3812,0.107541,0,1,0,-1
0,0.369688,0.091232,0,1,0,-1
0,0.356062,0.076642,0,1,0,-1
0,0.340577,0.064044,0,1,0,-1
0,0.32352,0.053672,0,1,0,-1
0,0.30521,0.045718,0,1,0,-1
0,0.285988,0.040333,0,1,0,-1
0,0.266211,0.037614,0,1,0,-1
0,0.246248,0.037614,0,1,0,-1
0,0.226471,0.040333,0,1,0,-1
0,0.207249,0.045718,0,1,0,-1
0,0.188938,0.053672,0,1,0,-1
0,0.171882,0.064044,0,1,0,-1
0,0.156397,0.076642,0,1,0,-1
0,0.142771,0.091232,0,1,0,-1
0,0.131259,0.107541,0,1,0,-1
0,0.122075,0.125265,0,1,0,-1
0,0.115389,0.144076,0,1,0,-1
0,0.111328,0.163621,0,1,0,-1
0,0.109966,0.183537,0,1,0,-1
0,0.111328,0.203453,0,1,0,-1
0,0.115389,0.222999,0,1,0,-1
0,0.122075,0.241809,0,1,0,-1
0,0.131259,0.259533,0,1,0,-1
0,0.142771,0.275842,0,1,0,-1
0,0.156397,0.290432,0,1,0,-1
0,0.171882,0.30303,0,1,0,-1
0,0.188938,0.313403,0,1,0,-1
0,0.207249,0.321356,0,1,0,-1
0,0.226471,0.326742,0,1,0,-1
0,0.246248,0.32946,0,1,0,-1
0,0.266211,0.32946,0,1,0,-1
0,0.285988,0.326742,0,1,0,-1
0,0.30521,0.321356,0,1,0,-1
0,0.32352,0.313403,0,1,0,-1
0,0.340577,0.30303,0,1,0,-1
0,0.356062,0.290432,0,1,0,-1
0,0.369688,0.275842,0,1,0,-1
0,0.3812,0.259533,0,1,0,-1
0,0.390384,0.241809,0,1,0,-1
0,0.397069,0.222999,0,1,0,-1
0,0.401131,0.203453,0,1,0,-1
0,0.402493,0.183537,0,1,0,-1
0,0.717102,0.580347,0,1,0,-1
0,0.69634,0.588567,0,1,0,-1
0,0.676773,0.599325,0,1,0,-1
0,0.658707,0.61245,0,1,0,-1
0,0.64243,0.627736,0,1,0,-1
0,0.628196,0.644941,0,1,0,-1
0,0.616231,0.663795,0,1,0,-1
0,0.606724,0.684,0,1,0,-1
0,0.599823,0.705237,0,1,0,-1
0,0.595639,0.727171,0,1,0,-1
0,0.594237,0.749457,0,1,0,-1
0,0.595639,0.771743,0,1,0,-1
0,0.599823,0.793677,0,1,0,-1
0,0.606724,0.814914,0,1,0,-1
0,0.713243,0.02088,0,1,0,-1
0,0.688246,0.022108,0,1,0,-1
0,0.663491,0.02578,0,1,0,-1
0,0.639215,0.031861,0,1,0,-1
0,0.615651,0.040292,0,1,0,-1
0,0.593028,0.050992,0,1,0,-1
0,0.571562,0.063858,0,1,0,-1
0,0.551461,0.078766,0,1,0,-1
0,0.532918,0.095573,0,1,0,-1
0,0.516111,0.114116,0,1,0,-1
0,0.501203,0.134218,0,1,0,-1
0,0.488337,0.155683,0,1,0,-1
0,0.477637,0.178307,0,1,0,-1
0,0.469206,0.20187,0,1,0,-1
0,0.463125,0.226146,0,1,0,-1
0,0.459453,0.250902,0,1,0,-1
0,0.458225,0.275898,0,1,0,-1
0,0.459453,0.300894,0,1,0,-1
0,0.463125,0.325649,0,1,0,-1
0,0.469206,0.349926,0,1,0,-1
0,0.477637,0.373489,0,1,0,-1
0,0.488337,0.396113,0,1,0,-1
0,0.501203,0.417578,0,1,0,-1
0,0.516111,0.43768,0,1,0,-1
0,0.532918,0.456223,0,1,0,-1
0,0.551461,0.473029,0,1,0,-1
0,0.571562,0.487938,0,1,0,-1
0,0.593028,0.500804,0,1,0,-1
0,0.615651,0.511504,0,1,0,-1
0,0.639215,0.519935,0,1,0,-1
0,0.663491,0.526016,0,1,0,-1
0,0.688246,0.529688,0,1,0,-1
0,0.713243,0.530916,0,1,0,-1
0,0.563094,0.659436,0,1,0,-1
0,0.558843,0.630776,0,1,0,-1
0,0.551803,0.602671,0,1,0,-1
0,0.542042,0.575392,0,1,0,-1
0,0.529655,0.5492,0,1,0,-1
0,0.514759,0.524349,0,1,0,-1
0,0.4975,0.501077,0,1,0,-1
0,0.478043,0.479609,0,1,0,-1
0,0.456575,0.460152,0,1,0,-1
0,0.433303,0.442893,0,1,0,-1
0,0.408452,0.427998,0,1,0,-1
0,0.382261,0.41561,0,1,0,-1
0,0.354981,0.405849,0,1,0,-1
0,0.326876,0.398809,0,1,0,-1
0,0.298216,0.394558,0,1,0,-1
0,0.269278,0.393136,0,1,0,-1
0,0.240339,0.394558,0,1,0,-1
0,0.21168,0.398809,0,1,0,-1
0,0.183575,0.405849,0,1,0,-1
0,0.156295,0.41561,0,1,0,-1
0,0.130104,0.427998,0,1,0,-1
0,0.105252,0.442893,0,1,0,-1
0,0.081981,0.460152,0,1,0,-1
0,0.060513,0.479609,0,1,0,-1
0,0.041056,0.501077,0,1,0,-1
0,0.023796,0.524349,0,1,0,-1
0,0.008901,0.5492,0,1,0,-1
0,0.542042,0.801357,0,1,0,-1
0,0.551803,0.774077,0,1,0,-1
0,0.558843,0.745972,0,1,0,-1
0,0.563094,0.717313,0,1,0,-1
0,0.564516,0.688374,0,1,0,-1
0,0.996513,0.575392,0,1,0,-1
0,0.986753,0.602671,0,1,0,-1
0,0.979713,0.630776,0,1,0,-1
0,0.975461,0.659436,0,1,0,-1
0,0.97404,0.688374,0,1,0,-1
0,0.975461,0.717313,0,1,0,-1
0,0.979713,0.745972,0,1,0,-1
0,0.986753,0.774077,0,1,0,-1
0,0.996513,0.801357,0,1,0,-1
0,0.94846,0.727171,0,1,0,-1
0,0.944275,0.705237,0,1,0,-1
0,0.937375,0.684,0,1,0,-1
0,0.927868,0.663795,0,1,0,-1
0,0.915903,0.644941,0,1,0,-1
0,0.901669,0.627736,0,1,0,-1
0,0.885391,0.61245,0,1,0,-1
0,0.867326,0.599325,0,1,0,-1
0,0.847758,0.588567,0,1,0,-1
0,0.826996,0.580347,0,1,0,-1
0,0.805368,0.574794,0,1,0,-1
0,0.783214,0.571995,0,1,0,-1
0,0.760884,0.571995,0,1,0,-1
0,0.738731,0.574794,0,1,0,-1
0,0.616231,0.835119,0,1,0,-1
0,0.628196,0.853972,0,1,0,-1
0,0.64243,0.871178,0,1,0,-1
0,0.658707,0.886464,0,1,0,-1
0,0.676773,0.899589,0,1,0,-1
0,0.69634,0.910346,0,1,0,-1
0,0.717102,0.918566,0,1,0,-1
0,0.738731,0.92412,0,1,0,-1
0,0.760884,0.926918,0,1,0,-1
0,0.783214,0.926918,0,1,0,-1
0,0.805368,0.92412,0,1,0,-1
0,0.826996,0.918566,0,1,0,-1
0,0.847758,0.910346,0,1,0,-1
0,0.867326,0.899589,0,1,0,-1
0,0.885391,0.886464,0,1,0,-1
0,0.901669,0.871178,0,1,0,-1
0,0.915903,0.853972,0,1,0,-1
0,0.927868,0.835119,0,1,0,-1
0,0.937375,0.814914,0,1,0,-1
0,0.944275,0.793677,0,1,0,-1
0,0.94846,0.771743,0,1,0,-1
0,0.949862,0.749457,0,1,0,-1
0,0.967032,0.250902,0,1,0,-1
0,0.96336,0.226146,0,1,0,-1
0,0.957279,0.20187,0,1,0,-1
0,0.948848,0.178307,0,1,0,-1
0,0.938148,0.155683,0,1,0,-1
0,0.925282,0.134218,0,1,0,-1
0,0.910374,0.114116,0,1,0,-1
0,0.893567,0.095573,0,1,0,-1
0,0.875024,0.078766,0,1,0,-1
0,0.854923,0.063858,0,1,0,-1
0,0.833457,0.050992,0,1,0,-1
0,0.810834,0.040292,0,1,0,-1
0,0.78727,0.031861,0,1,0,-1
0,0.762994,0.02578,0,1,0,-1
0,0.738239,0.022108,0,1,0,-1
0,0.738239,0.529688,0,1,0,-1
0,0.762994,0.526016,0,1,0,-1
0,0.78727,0.519935,0,1,0,-1
0,0.810834,0.511504,0,1,0,-1
0,0.833457,0.500804,0,1,0,-1
0,0.854923,0.487938,0,1,0,-1
0,0.875024,0.473029,0,1,0,-1
0,0.893567,0.456223,0,1,0,-1
0,0.910374,0.43768,0,1,0,-1
0,0.925282,0.417578,0,1,0,-1
0,0.938148,0.396113,0,1,0,-1
0,0.948848,0.373489,0,1,0,-1
0,0.957279,0.349926,0,1,0,-1
0,0.96336,0.325649,0,1,0,-1
0,0.967032,0.300894,0,1,0,-1
0,0.96826,0.275898,0,1,0,-1
0,0.4975,0.875671,0,1,0,-1
0,0.514759,0.8524,0,1,0,-1
0,0.529655,0.827549,0,1,0,-1
0,0.008901,0.827549,0,1,0,-1
0,0.023796,0.8524,0,1,0,-1
0,0.041056,0.875671,0,1,0,-1
0,0.060513,0.897139,0,1,0,-1
0,0.081981,0.916597,0,1,0,-1
0,0.105252,0.933856,0,1,0,-1
0,0.130104,0.948751,0,1,0,-1
0,0.156295,0.961139,0,1,0,-1
0,0.183575,0.9709,0,1,0,-1
0,0.21168,0.97794,0,1,0,-1
0,0.240339,0.982191,0,1,0,-1
0,0.269278,0.983612,0,1,0,-1
0,0.298216,0.982191,0,1,0,-1
0,0.326876,0.97794,0,1,0,-1
0,0.354981,0.9709,0,1,0,-1
0,0.382261,0.961139,0,1,0,-1
0,0.408452,0.948751,0,1,0,-1
0,0.433303,0.933856,0,1,0,-1
0,0.456575,0.916597,0,1,0,-1
0,0.478043,0.897139,0,1,0,-1
`),!1);m(d.ParsePatFile(`
*CELTIC-01,CELTIC PATTERN 01
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
135,0.36,0.42222222,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42222222,0.39111111,0.70710678,0.70710678,0.25848681,-1.15572675
315,0.39111111,0.57777778,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.30166667,0.63611111,0.70710678,0.70710678,0.25848681,-1.15572675
225,0.76055556,0.42611111,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.86555556,0.5,0.70710678,0.70710678,0.28048569,-1.13372787
225,0.85388889,0.33277778,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.99,0.5,0.70710678,0.70710678,0.3684812,-1.04573236
225,0.76055556,0.72944444,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.85388889,0.63611111,0.70710678,0.70710678,0.08799551,-1.32621805
90,0.99,0.90200449,0,1,0.08799551,-0.91200449
0,0.90200449,0.88000561,0,1,0.08799551,-0.91200449
0,0.83978227,0.90200449,0,1,0.15021773,-0.84978227
0,0.80333333,0.99,0,1,0.18666667,-0.81333333
90,0.90200449,0.83978227,0,1,0.04022334,-0.95977666
90,0.99,0.80333333,0,1,0.07667228,-0.92332772
180,0.09799551,0.99,0,1,0.08799551,-0.91200449
90,0.11999439,0.90200449,0,1,0.08799551,-0.91200449
90,0.09799551,0.83978227,0,1,0.15021773,-0.84978227
90,0.01,0.80333333,0,1,0.18666667,-0.81333333
180,0.16021773,0.90200449,0,1,0.04022334,-0.95977666
180,0.19666667,0.99,0,1,0.07667228,-0.92332772
270,0.01,0.09799551,0,1,0.08799551,-0.91200449
180,0.09799551,0.11999439,0,1,0.08799551,-0.91200449
180,0.16021773,0.09799551,0,1,0.15021773,-0.84978227
180,0.19666667,0.01,0,1,0.18666667,-0.81333333
270,0.09799551,0.16021773,0,1,0.04022334,-0.95977666
270,0.01,0.19666667,0,1,0.07667228,-0.92332772
45,0.70222222,0.51555556,0.70710678,0.70710678,0.40697924,-1.00723433
45,0.51555556,0.29777778,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.42611111,0.23944444,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.19666667,0.01,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.64,0.57777778,0.70710678,0.70710678,0.3705303,-1.04368326
45,0.42222222,0.39111111,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.36388889,0.30166667,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.16021773,0.09799551,0.70710678,0.70710678,0.15604125,-1.25817232
45,0.66722222,0.85388889,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.42222222,0.64,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.14611111,0.36388889,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.39111111,0.57777778,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.01,0.19666667,0.70710678,0.70710678,0.40697924,-1.00723433
45,0.72944444,0.79166667,0.70710678,0.70710678,0.15604125,-1.25817232
45,0.23944444,0.27055556,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.51555556,0.54666667,0.70710678,0.70710678,0.08799551,-1.32621805
45,0.45333333,0.51555556,0.70710678,0.70710678,0.25848681,-1.15572675
45,0.09799551,0.16021773,0.70710678,0.70710678,0.3705303,-1.04368326
0,0.90200449,0.01,0,1,0.08799551,-0.91200449
135,0.70222222,0.51555556,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42611111,0.79166667,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.48444444,0.70222222,0.70710678,0.70710678,0.40697924,-1.00723433
135,0.76055556,0.42611111,0.70710678,0.70710678,0.25848681,-1.15572675
135,0.99,0.19666667,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.33277778,0.69833333,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.42222222,0.64,0.70710678,0.70710678,0.3705303,-1.04368326
135,0.60888889,0.42222222,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.69833333,0.36388889,0.70710678,0.70710678,0.25848681,-1.15572675
135,0.90200449,0.16021773,0.70710678,0.70710678,0.15604125,-1.25817232
135,0.63611111,0.14611111,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.14611111,0.66722222,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.80333333,0.01,0.70710678,0.70710678,0.40697924,-1.00723433
135,0.72944444,0.23944444,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.20833333,0.72944444,0.70710678,0.70710678,0.15604125,-1.25817232
135,0.83978227,0.09799551,0.70710678,0.70710678,0.3705303,-1.04368326
270,0.88000561,0.09799551,0,1,0.08799551,-0.91200449
270,0.90200449,0.16021773,0,1,0.15021773,-0.84978227
270,0.99,0.19666667,0,1,0.18666667,-0.81333333
0,0.83978227,0.09799551,0,1,0.04022334,-0.95977666
0,0.80333333,0.01,0,1,0.07667228,-0.92332772
135,0.99,0.5,0.70710678,0.70710678,0.19249018,-1.22172338
45,0.5,0.01,0.70710678,0.70710678,0.19249018,-1.22172338
315,0.27055556,0.20833333,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.23944444,0.27055556,0.70710678,0.70710678,0.3684812,-1.04573236
315,0.01,0.5,0.70710678,0.70710678,0.19249018,-1.22172338
225,0.20833333,0.72944444,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.27055556,0.76055556,0.70710678,0.70710678,0.3684812,-1.04573236
225,0.5,0.99,0.70710678,0.70710678,0.19249018,-1.22172338
135,0.72944444,0.79166667,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.76055556,0.72944444,0.70710678,0.70710678,0.3684812,-1.04573236
135,0.86555556,0.5,0.70710678,0.70710678,0.10449467,-1.30971889
45,0.5,0.13444444,0.70710678,0.70710678,0.10449467,-1.30971889
315,0.36388889,0.30166667,0.70710678,0.70710678,0.08799551,-1.32621805
315,0.30166667,0.33277778,0.70710678,0.70710678,0.28048569,-1.13372787
315,0.13444444,0.5,0.70710678,0.70710678,0.10449467,-1.30971889
225,0.30166667,0.63611111,0.70710678,0.70710678,0.08799551,-1.32621805
225,0.33277778,0.69833333,0.70710678,0.70710678,0.28048569,-1.13372787
225,0.5,0.86555556,0.70710678,0.70710678,0.10449467,-1.30971889
135,0.63611111,0.69833333,0.70710678,0.70710678,0.08799551,-1.32621805
135,0.69833333,0.66722222,0.70710678,0.70710678,0.28048569,-1.13372787
`),!1);m(d.ParsePatFile(`
*CELTIC-02,CELTIC PATTERN 02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.438471,0.01545916,0,1,0.12305799,-0.87694201
270,0.98454084,0.438471,0,1,0.12305799,-0.87694201
270,0.01545916,0.68458699,0,1,0.12305799,-0.87694201
180,0.68458699,0.98454084,0,1,0.12305799,-0.87694201
90,0.98454084,0.4692355,0,1,0.51530534,-0.48469466
270,0.98454084,0.28464852,0,1,0.26918936,-0.73081064
180,0.438471,0.28464852,0,1,0.12305799,-0.87694201
180,0.5307645,0.31541301,0,1,0.36148285,-0.63851715
0,0.31541301,0.4692355,0,1,0.12305799,-0.87694201
0,0.16928165,0.438471,0,1,0.36148285,-0.63851715
270,0.83071835,0.68458699,0,1,0.12305799,-0.87694201
270,0.86148285,0.86148285,0,1,0.39224735,-0.60775265
270,0.5307645,0.98454084,0,1,0.12305799,-0.87694201
270,0.71535148,0.98454084,0,1,0.12305799,-0.87694201
90,0.68458699,0.71535148,0,1,0.26918936,-0.73081064
90,0.71535148,0.31541301,0,1,0.12305799,-0.87694201
90,0.68458699,0.16928165,0,1,0.36148285,-0.63851715
90,0.561529,0.71535148,0,1,0.26918936,-0.73081064
90,0.5307645,0.31541301,0,1,0.12305799,-0.87694201
90,0.561529,0.16928165,0,1,0.36148285,-0.63851715
90,0.28464852,0.561529,0,1,0.12305799,-0.87694201
90,0.28464852,0.01545916,0,1,0.12305799,-0.87694201
90,0.31541301,0.4692355,0,1,0.36148285,-0.63851715
90,0.31541301,0.01545916,0,1,0.26918936,-0.73081064
90,0.4692355,0.01545916,0,1,0.12305799,-0.87694201
90,0.4692355,0.561529,0,1,0.12305799,-0.87694201
90,0.438471,0.4692355,0,1,0.36148285,-0.63851715
90,0.438471,0.01545916,0,1,0.26918936,-0.73081064
180,0.68458699,0.71535148,0,1,0.12305799,-0.87694201
180,0.13851715,0.71535148,0,1,0.12305799,-0.87694201
180,0.28464852,0.68458699,0,1,0.26918936,-0.73081064
180,0.83071835,0.68458699,0,1,0.36148285,-0.63851715
180,0.13851715,0.5307645,0,1,0.12305799,-0.87694201
180,0.28464852,0.561529,0,1,0.26918936,-0.73081064
180,0.68458699,0.5307645,0,1,0.12305799,-0.87694201
180,0.83071835,0.561529,0,1,0.36148285,-0.63851715
180,0.98454084,0.28464852,0,1,0.12305799,-0.87694201
180,0.98454084,0.31541301,0,1,0.26918936,-0.73081064
180,0.98454084,0.4692355,0,1,0.12305799,-0.87694201
180,0.98454084,0.438471,0,1,0.26918936,-0.73081064
180,0.98454084,0.98454084,0,1,0.26918936,-0.73081064
0,0.4692355,0.01545916,0,1,0.51530534,-0.48469466
0,0.01545916,0.01545916,0,1,0.26918936,-0.73081064
270,0.01545916,0.5307645,0,1,0.51530534,-0.48469466
270,0.01545916,0.98454084,0,1,0.26918936,-0.73081064
180,0.5307645,0.98454084,0,1,0.51530534,-0.48469466
180,0.86148285,0.86148285,0,1,0.14613136,-0.85386864
90,0.86148285,0.13851715,0,1,0.14613136,-0.85386864
0,0.561529,0.16928165,0,1,0.12305799,-0.87694201
0,0.4692355,0.13851715,0,1,0.39224735,-0.60775265
0,0.13851715,0.13851715,0,1,0.14613136,-0.85386864
270,0.16928165,0.438471,0,1,0.12305799,-0.87694201
270,0.13851715,0.5307645,0,1,0.39224735,-0.60775265
270,0.13851715,0.86148285,0,1,0.14613136,-0.85386864
180,0.438471,0.83071835,0,1,0.12305799,-0.87694201
180,0.5307645,0.86148285,0,1,0.39224735,-0.60775265
`),!1);m(d.ParsePatFile(`
*CELTIC-03,CELTIC-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,6.35,13.97,0,25.4,5.08,-20.32
90,19.05,6.35,0,25.4,5.08,-20.32
0,6.35,6.35,0,25.4,12.7,-12.7
270,6.35,11.43,0,25.4,5.08,-20.32
90,3.81,3.81,0,25.4,7.62,-17.78
180,21.59,3.81,0,25.4,17.78,-7.62
270,21.59,11.43,0,25.4,7.62,-17.78
270,21.59,21.59,0,25.4,7.62,-17.78
0,3.81,21.59,0,25.4,17.78,-7.62
90,3.81,13.97,0,25.4,7.62,-17.78
270,19.05,19.05,0,25.4,5.08,-20.32
0,6.35,19.05,0,25.4,12.7,-12.7
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`),!1);m(d.ParsePatFile(`
*CELTIC-04,CELTIC-04
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in mm as metric QCAD3 pattern
45,3.81,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
135,21.59,13.97,17.960512212,17.960512212,12.57235865,-23.348666028
45,12.7,2.54,17.960512212,17.960512212,12.57235865,-23.348666028
315,3.81,11.43,17.960512212,17.960512212,12.57235865,-23.348666028
135,12.7,5.08,17.960512212,17.960512212,8.980256106,-26.940768318
225,19.05,11.43,17.960512212,17.960512212,8.980256106,-26.940768318
315,12.7,20.32,17.960512212,17.960512212,8.980256106,-26.940768318
45,6.35,13.97,17.960512212,17.960512212,8.980256106,-26.940768318
90,13.97,6.35,0,25.4,12.7,-12.7
90,11.43,6.35,0,25.4,12.7,-12.7
270,13.97,3.81,0,25.4,7.62,-17.78
90,11.43,-3.81,0,25.4,7.62,-17.78
180,11.43,11.43,0,25.4,22.86,-2.54
0,-11.43,13.97,0,25.4,22.86,-2.54
`),!1);m(d.ParsePatFile(`
*CIRCLES-02,CIRCLES-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.959092,0.471116,0,1,0,-1
0,0.956373,0.442347,0,1,0,-1
0,0.951852,0.413805,0,1,0,-1
0,0.945548,0.385603,0,1,0,-1
0,0.937486,0.357852,0,1,0,-1
0,0.927697,0.330663,0,1,0,-1
0,0.91622,0.304142,0,1,0,-1
0,0.903101,0.278393,0,1,0,-1
0,0.888391,0.25352,0,1,0,-1
0,0.872148,0.229619,0,1,0,-1
0,0.854436,0.206785,0,1,0,-1
0,0.835326,0.185108,0,1,0,-1
0,0.814892,0.164674,0,1,0,-1
0,0.793215,0.145564,0,1,0,-1
0,0.770381,0.127852,0,1,0,-1
0,0.74648,0.111609,0,1,0,-1
0,0.721607,0.096899,0,1,0,-1
0,0.695858,0.08378,0,1,0,-1
0,0.669337,0.072303,0,1,0,-1
0,0.642148,0.062514,0,1,0,-1
0,0.614397,0.054452,0,1,0,-1
0,0.586195,0.048148,0,1,0,-1
0,0.557653,0.043627,0,1,0,-1
0,0.528884,0.040908,0,1,0,-1
0,0.5,0.04,0,1,0,-1
0,0.471116,0.040908,0,1,0,-1
0,0.442347,0.043627,0,1,0,-1
0,0.413805,0.048148,0,1,0,-1
0,0.385603,0.054452,0,1,0,-1
0,0.357852,0.062514,0,1,0,-1
0,0.330663,0.072303,0,1,0,-1
0,0.304142,0.08378,0,1,0,-1
0,0.278393,0.096899,0,1,0,-1
0,0.25352,0.111609,0,1,0,-1
0,0.229619,0.127852,0,1,0,-1
0,0.206785,0.145564,0,1,0,-1
0,0.185108,0.164674,0,1,0,-1
0,0.164674,0.185108,0,1,0,-1
0,0.145564,0.206785,0,1,0,-1
0,0.127852,0.229619,0,1,0,-1
0,0.111609,0.25352,0,1,0,-1
0,0.096899,0.278393,0,1,0,-1
0,0.08378,0.304142,0,1,0,-1
0,0.072303,0.330663,0,1,0,-1
0,0.062514,0.357852,0,1,0,-1
0,0.054452,0.385603,0,1,0,-1
0,0.048148,0.413805,0,1,0,-1
0,0.043627,0.442347,0,1,0,-1
0,0.040908,0.471116,0,1,0,-1
0,0.04,0.5,0,1,0,-1
0,0.040908,0.528884,0,1,0,-1
0,0.043627,0.557653,0,1,0,-1
0,0.048148,0.586195,0,1,0,-1
0,0.054452,0.614397,0,1,0,-1
0,0.062514,0.642148,0,1,0,-1
0,0.072303,0.669337,0,1,0,-1
0,0.08378,0.695858,0,1,0,-1
0,0.096899,0.721607,0,1,0,-1
0,0.111609,0.74648,0,1,0,-1
0,0.127852,0.770381,0,1,0,-1
0,0.145564,0.793215,0,1,0,-1
0,0.164674,0.814892,0,1,0,-1
0,0.185108,0.835326,0,1,0,-1
0,0.206785,0.854436,0,1,0,-1
0,0.229619,0.872148,0,1,0,-1
0,0.25352,0.888391,0,1,0,-1
0,0.278393,0.903101,0,1,0,-1
0,0.304142,0.91622,0,1,0,-1
0,0.330663,0.927697,0,1,0,-1
0,0.357852,0.937486,0,1,0,-1
0,0.385603,0.945548,0,1,0,-1
0,0.413805,0.951852,0,1,0,-1
0,0.442347,0.956373,0,1,0,-1
0,0.471116,0.959092,0,1,0,-1
0,0.5,0.96,0,1,0,-1
0,0.528884,0.959092,0,1,0,-1
0,0.557653,0.956373,0,1,0,-1
0,0.586195,0.951852,0,1,0,-1
0,0.614397,0.945548,0,1,0,-1
0,0.642148,0.937486,0,1,0,-1
0,0.669337,0.927697,0,1,0,-1
0,0.695858,0.91622,0,1,0,-1
0,0.721607,0.903101,0,1,0,-1
0,0.74648,0.888391,0,1,0,-1
0,0.770381,0.872148,0,1,0,-1
0,0.793215,0.854436,0,1,0,-1
0,0.814892,0.835326,0,1,0,-1
0,0.835326,0.814892,0,1,0,-1
0,0.854436,0.793215,0,1,0,-1
0,0.872148,0.770381,0,1,0,-1
0,0.888391,0.74648,0,1,0,-1
0,0.903101,0.721607,0,1,0,-1
0,0.91622,0.695858,0,1,0,-1
0,0.927697,0.669337,0,1,0,-1
0,0.937486,0.642148,0,1,0,-1
0,0.945548,0.614397,0,1,0,-1
0,0.951852,0.586195,0,1,0,-1
0,0.956373,0.557653,0,1,0,-1
0,0.959092,0.528884,0,1,0,-1
0,0.96,0.5,0,1,0,-1
`),!1);m(d.ParsePatFile(`
*CIRCLES,CIRCLES
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.934583,0.431169,0,1,0,-1
0,0.918465,0.364033,0,1,0,-1
0,0.892043,0.300244,0,1,0,-1
0,0.855967,0.241374,0,1,0,-1
0,0.811127,0.188873,0,1,0,-1
0,0.758626,0.144033,0,1,0,-1
0,0.699756,0.107957,0,1,0,-1
0,0.635967,0.081535,0,1,0,-1
0,0.568831,0.065417,0,1,0,-1
0,0.5,0.06,0,1,0,-1
0,0.431169,0.065417,0,1,0,-1
0,0.364033,0.081535,0,1,0,-1
0,0.300244,0.107957,0,1,0,-1
0,0.241374,0.144033,0,1,0,-1
0,0.188873,0.188873,0,1,0,-1
0,0.144033,0.241374,0,1,0,-1
0,0.107957,0.300244,0,1,0,-1
0,0.081535,0.364033,0,1,0,-1
0,0.065417,0.431169,0,1,0,-1
0,0.06,0.5,0,1,0,-1
0,0.065417,0.568831,0,1,0,-1
0,0.081535,0.635967,0,1,0,-1
0,0.107957,0.699756,0,1,0,-1
0,0.144033,0.758626,0,1,0,-1
0,0.188873,0.811127,0,1,0,-1
0,0.241374,0.855967,0,1,0,-1
0,0.300244,0.892043,0,1,0,-1
0,0.364033,0.918465,0,1,0,-1
0,0.431169,0.934583,0,1,0,-1
0,0.5,0.94,0,1,0,-1
0,0.568831,0.934583,0,1,0,-1
0,0.635967,0.918465,0,1,0,-1
0,0.699756,0.892043,0,1,0,-1
0,0.758626,0.855967,0,1,0,-1
0,0.811127,0.811127,0,1,0,-1
0,0.855967,0.758626,0,1,0,-1
0,0.892043,0.699756,0,1,0,-1
0,0.918465,0.635967,0,1,0,-1
0,0.934583,0.568831,0,1,0,-1
0,0.94,0.5,0,1,0,-1
`),!1);m(d.ParsePatFile(`
*CLAY,CLAY
0, 0,0, 0,.1875
0, 0,.03125, 0,.1875
0, 0,.0625, 0,.1875
0, 0,.125, 0,.1875, .1875,-.125
`),!1);m(d.ParsePatFile(`
*CORK,CORK
0, 0,0, 0,.125
135, .0625,-.0625, 0,.35355339, .1767767,-.1767767
135, .09375,-.0625, 0,.35355339, .1767767,-.1767767
135, .125,-.0625, 0,.35355339, .1767767,-.1767767
`),!1);m(d.ParsePatFile(`
*CROSS,CROSS
0, 0,0, .25,.25, .125,-.375
90, .0625,-.0625, .25,.25, .125,-.375
`),!1);m(d.ParsePatFile(`
*DASH,DASH
0, 0,0, .125,.125, .125,-.125
`),!1);m(d.ParsePatFile(`
*DOLMIT,DOLMIT
0, 0,0, 0,.25
45, 0,0, 0,.70710678, .35355339,-.70710768
`),!1);m(d.ParsePatFile(`
*DOTS,DOTS
0, 0,0, .03125,.0625, 0,-.0625
`),!1);m(d.ParsePatFile(`
*EARTH,EARTH
0, 0,0, .25,.25, .25,-.25
0, 0,.09375, .25,.25, .25,-.25
0, 0,.1875, .25,.25, .25,-.25
90, .03125,.21875, .25,.25, .25,-.25
90, .125,.21875, .25,.25, .25,-.25
90, .21875,.21875, .25,.25, .25,-.25
`),!1);m(d.ParsePatFile(`
*ESCHER,ESCHER
60, 0,0, -.6,1.03923048, 1.1,-.1
180, 0,0, -.6,1.03923048, 1.1,-.1
300, 0,0, .6,1.03923048, 1.1,-.1
60, .1,0, -.6,1.03923048, .2,-1
300, .1,0, .6,1.03923048, .2,-1
60, -.05,.08660254, -.6,1.03923048, .2,-1
180, -.05,.08660254, -.6,1.03923048, .2,-1
300, -.05,-.08660254, .6,1.03923048, .2,-1
180, -.05,-.08660254, -.6,1.03923048, .2,-1
60, -.4,0, -.6,1.03923048, .2,-1
300, -.4,0, .6,1.03923048, .2,-1
60, .2,-.34641016, -.6,1.03923048, .2,-1
180, .2,-.34641016, -.6,1.03923048, .2,-1
300, .2,.34641016, .6,1.03923048, .2,-1
180, .2,.34641016, -.6,1.03923048, .2,-1
0, .2,.17320508, -.6,1.03923048, .7,-.5
0, .2,-.17320508, -.6,1.03923048, .7,-.5
120, .05,.25980762, .6,1.03923048, .7,-.5
120, -.25,.08660254, .6,1.03923048, .7,-.5
240, -.25,-.08660254, .6,1.03923048, .7,-.5
240, .05,-.25980762, .6,1.03923048, .7,-.5
`),!1);m(d.ParsePatFile(`
*EXPLOSION,EXPLOSION
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
270,0.45,0.11,0,1,0.11,-0.89
143.130102,0.49,0.08,3.6,0.2,0.05,-4.95
270,0.49,0.17,0,1,0.09,-0.91
112.380135,0.56,0,12.99988621,0.05439283,0.18384776,-18.20092855
75.256437,0.51,0.81,4.12279145,0.05089866,0.19646883,-19.45041388
287.525568,0.45,1,3.16187936,0.05018856,0.19924859,-19.72561026
135,0.06,0.49,0.70710678,0.70710678,0.08485281,-1.32936075
26.565051,0,0.46,1.34164079,0.4472136,0.06708204,-2.16898594
353.884496,0.72,0.49,19.10494017,0.03551104,0.28160256,-27.87865312
192.094757,1,0.55,9.2192799,0.06984303,0.28635642,-14.03146464
3.691386,0.69,0.38,15.03326191,0.03219114,0.31064449,-30.75380464
136.080924,0.96,0.12,36.06936773,0.02667853,0.3748333,-37.10849633
336.037511,0.87,0.16,7.61509624,0.10153462,0.09848858,-9.75036922
123.690068,0.97,0.01,1.38675049,0.2773501,0.18027756,-3.42527371
324.462322,0.62,0.26,3.6036768,0.11624764,0.43011626,-8.172209
117.645975,0.73,0.05,21.47086912,0.04218245,0.23706539,-23.46947379
326.309932,0.55,0.17,2.21880078,0.2773501,0.21633308,-3.3892182
106.38954,0.6,0,10.44015399,0.05643326,0.17720045,-17.5428447
153.434949,0.12,0.34,0.89442719,0.4472136,0.13416408,-2.1019039
64.798876,0.04,0.17,16.55285979,0.05322463,0.18788294,-18.60041129
202.619865,0.16,0.22,7.61538462,0.07692308,0.13,-12.87
59.036243,0.1,0.12,2.22948161,0.17149859,0.11661904,-5.71433286
211.75948,0.31,0.25,9.43389425,0.04048882,0.24698178,-24.45119629
79.215702,0.27,0.04,16.27875339,0.04677803,0.21377558,-21.16378274
212.471192,0.38,0.11,3.60473545,0.0766965,0.13038405,-12.90802076
63.434949,0.35,0.05,0.89442719,0.4472136,0.06708204,-2.16898594
135,0.4,0,0.70710678,0.70710678,0.07071068,-1.34350288
74.357754,0.33,0.75,18.68150198,0.03851856,0.2596151,-25.70189487
333.434949,0.03,0.9,0.89442719,0.4472136,0.3354102,-1.90065778
110.556045,0.18,0.5,5.38389277,0.11704115,0.42720019,-8.11680356
330.945396,0,0.6,2.23395748,0.09712859,0.2059126,-10.08971754
99.462322,0.63,0.82,5.09636861,0.16439899,0.18248288,-5.90027965
222.70939,0.76,0.94,1.41308355,0.05652334,0.17691806,-17.51488795
74.744881,0.73,0.83,4.12217269,0.0877058,0.11401754,-11.28773671
208.61046,0.95,0.95,10.29532081,0.07980869,0.25059928,-12.2793648
62.744672,0.78,0.62,2.2359057,0.02693862,0.37121422,-36.75020816
212.275644,0.97,0.74,13.03832887,0.04449942,0.22472205,-22.247483
55.00798,0.9,0.64,3.60462045,0.08192319,0.12206556,-12.08449006
158.198591,1,0.6,3.15682075,0.18569534,0.1077033,-5.27746151
51.911227,0.59,0.51,29.20615599,0.02127178,0.47010637,-46.54053072
153.434949,0.65,0.48,0.89442719,0.4472136,0.06708204,-2.16898594
35.537678,0.58,0.43,4.99864847,0.11624764,0.08602325,-8.51630201
129.289407,0.76,0.21,7.80993275,0.07035975,0.28425341,-13.928417
322.30576,0.54,0.38,16.40118003,0.0359675,0.27802878,-27.52484877
77.905243,0.51,0.24,5.09854116,0.06984303,0.14317821,-14.17464285
282.994617,0.48,0.37,4.12242429,0.07495317,0.13341664,-13.20824742
62.525568,0.35,0.12,2.23578634,0.03548867,0.28178006,-27.89622555
267.137595,0.36,0.32,0.99875234,0.04993762,0.20024984,-19.82473455
12.994617,0.1,0.26,4.12242429,0.07495317,0.26683328,-13.07483078
211.75948,0.31,0.39,9.43389425,0.04048882,0.24698178,-24.45119629
318.366461,0.22,0.47,10.62982142,0.08304548,0.12041595,-11.92117863
189.462322,0.28,0.48,5.09636861,0.16439899,0.06082763,-6.0219349
297.299572,0.12,0.79,32.64964285,0.02866518,0.34885527,-34.53667181
132.273689,0.32,0.57,1.41261287,0.06726728,0.29732137,-14.56874737
282.994617,0.29,0.7,4.12242429,0.07495317,0.13341664,-13.20824742
140.194429,0.41,0.6,6.401844,0.12803688,0.15620499,-7.65404468
268.363423,0.42,0.95,0.99959209,0.02855977,0.35014283,-34.66413997
102.200469,0.5,0.58,23.53718977,0.0264166,0.37854986,-37.4764366
250.016893,0.58,0.8,3.16112333,0.08543577,0.234094,-11.47060591
84.559668,0.56,0.59,11.04525929,0.04740455,0.21095023,-20.88407288
222.184443,0.88,0.88,14.86605071,0.02315584,0.43185646,-42.75378931
`),!1);m(d.ParsePatFile(`
*FLEX,FLEX
0, 0,0, 0,.25, .25,-.25
45, .25,0, .1767767,.1767767, .0625,-.22855339,.0625,-.35355339
`),!1);m(d.ParsePatFile(`
*GRASS,GRASS
90, 0,0, .70710678,.70710678, .1875,-1.22671356
45, 0,0, 0,1, .1875,-.8125
135, 0,0, 0,1, .1875,-.8125
`),!1);m(d.ParsePatFile(`
*GRATE,GRATE
0, 0,0, 0,.03125
90, 0,0, 0,.125
`),!1);m(d.ParsePatFile(`
*GRAVEL-01,GRAVEL-01
;Optimize to replace existing GRAVEL Pattern
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
159.443955,0.16,0.13,3.16011097,0.11704115,0.17088007,-8.37312367
114.775141,0.22,0,2.23497695,0.06984303,0.14317821,-14.17464285
249.443955,0.32,0.08,3.16011097,0.11704115,0.08544004,-8.45856371
186.009006,0.51,0.1,9.05523386,0.05234239,0.19104973,-18.91392344
165.963757,0.71,0.05,0.9701425,0.24253563,0.20615528,-3.91695034
101.309932,0.72,0,4.11843884,0.19611614,0.0509902,-5.04802932
243.434949,0.84,0.14,0.89442719,0.4472136,0.15652476,-2.07954322
355.426079,0.49,0.13,13.03834384,0.03987261,0.25079872,-24.82907368
300.256437,0.42,0.25,5.83050758,0.07198158,0.13892444,-13.75351955
228.012788,0.6,0.45,12.04136517,0.07432941,0.26907248,-13.18455157
180,0.86,0.45,0,1,0.26,-0.74
303.690068,0.62,0.62,1.38675049,0.2773501,0.14422205,-3.46132922
225,0.72,0.72,0.70710678,0.70710678,0.14142136,-1.27279221
110.224859,0.08,0.23,8.54386101,0.04938648,0.20248457,-20.04597216
177.273689,0.29,0.22,0.99886814,0.04756515,0.21023796,-20.81355808
217.69424,0.51,0.39,11.40169752,0.0359675,0.27802878,-27.52484877
252.255328,0.59,0.64,23.08676133,0.03809697,0.26248809,-25.9863214
301.429566,0.48,0.82,15.26426391,0.04740455,0.21095023,-20.88407288
355.236358,0.24,0.84,0.99654576,0.08304548,0.24083189,-11.80076269
43.66778,0.02,0.63,1.41383129,0.0328798,0.30413813,-30.10967452
87.273689,0.01,0.42,0.99886814,0.04756515,0.21023796,-20.81355808
30.963757,0.62,0.71,3.60147029,0.17149859,0.17492856,-5.65602334
291.801409,0.58,0.81,2.22834406,0.18569534,0.1077033,-5.27746151
203.198591,0.65,0.84,2.23220936,0.13130643,0.07615773,-7.53961537
161.565051,0.77,0.8,0.9486833,0.31622777,0.12649111,-3.03578655
4.969741,0.4,0.88,11.04527609,0.04331481,0.23086793,-22.85592483
16.38954,0,0.81,10.44015399,0.05643326,0.17720045,-17.5428447
197.354025,1,0.19,3.16171493,0.059655,0.16763055,-16.59542407
74.054604,0.95,0.22,4.12081692,0.13736056,0.1456022,-7.13450769
27.645975,0.74,0.11,21.47086912,0.04218245,0.23706539,-23.46947379
145.304846,0.99,0.36,3.60499653,0.06324555,0.15811388,-15.65327442
353.157227,0.7,0.5,17.1171967,0.03971507,0.25179357,-24.92756306
171.469234,0.92,0.69,7.07089492,0.04944682,0.20223748,-20.02151093
138.814075,1,0.62,9.21906451,0.09407209,0.10630146,-10.52384435
90,1,0.56,0,1,0.06,-0.94
60.945396,0.95,0.47,2.23395748,0.09712859,0.1029563,-10.19267384
343.61046,0.83,0.86,7.27989116,0.05643326,0.17720045,-17.5428447
293.198591,0.77,1,2.23220936,0.13130643,0.15231546,-7.46345764
48.012788,0.63,0.9,12.04136517,0.07432941,0.13453624,-13.31908781
312.510447,0.29,1,1.41287877,0.06142951,0.16278821,-16.11603239
70.346176,0.17,0.86,3.16156213,0.06726728,0.14866069,-14.71740806
`),!1);m(d.ParsePatFile(`
*GRAVEL,GRAVEL
228.0128, .72,1, 12.041365,.074329, .134536,-13.319088
184.9697, .63,.9, -12.041517,.043315, .230868,-22.855925
132.5104, .4,.88, -14.865942,.06143, .162788,-16.116032
267.2737, .01,.63, -20.024928,.047565, .210238,-20.813558
292.8337, 0,.42, -12.99991,.048507, .206155,-20.409373
357.2737, .08,.23, -20.024928,.047565, .210238,-20.813558
37.6942, .29,.22, -16.40118,.035968, .278029,-27.524849
72.2553, .51,.39, 23.086761,.038097, .262488,-25.986321
121.4296, .59,.64, 15.264264,.047405, .21095,-20.884073
175.2364, .48,.82, -11.045049,.083045, .240832,-11.800763
222.3974, .24,.84, 16.278789,.032108, .311448,-30.833375
138.8141, 1,.62, 9.219065,.094072, .106301,-10.523844
171.4692, .92,.69, -13.152853,.049447, .202237,-20.021511
225, .72,.72, .707107,.707107, .141421,-1.272792
203.1986, .65,.84, -5.383564,.131306, .076158,-7.539615
291.8014, .58,.81, -3.156821,.185695, .107703,-5.277462
30.9638, .62,.71, 3.60147,.171499, .174929,-5.656023
161.5651, .77,.8, -2.213594,.316228, .126491,-3.035787
16.3895, 0,.81, 10.440154,.056433, .1772,-17.542845
70.3462, .17,.86, -11.704507,.067267, .148661,-14.717408
293.1986, .77,1, -5.383564,.131306, .152315,-7.463458
343.6105, .83,.86, -10.440154,.056433, .1772,-17.542845
339.444, 0,.19, -5.383893,.117041, .17088,-8.373124
294.7751, .16,.13, -12.082844,.069843, .143178,-14.174643
66.8014, .78,0, 5.383564,.131306, .152315,-7.463458
17.354, .84,.14, -13.60134,.059655, .167631,-16.595424
69.444, .29,0, -5.383893,.117041, .08544,-8.458564
101.3099, .72,0, 4.118439,.196116, .05099,-5.048029
165.9638, .71,.05, -3.152963,.242536, .206155,-3.91695
186.009, .51,.1, -10.049739,.052342, .19105,-18.913923
303.6901, .62,.62, -2.218801,.27735, .144222,-3.461329
353.1572, .7,.5, 17.117197,.039715, .251794,-24.927563
60.9454, .95,.47, -8.061673,.097129, .102956,-10.192674
90, 1,.56, 1,1, .06,-.94
120.2564, .49,.13, -8.061936,.071982, .138924,-13.75352
48.0128, .42,.25, 12.041365,.074329, .269072,-13.184552
0, .6,.45, 1,1, .26,-.74
325.3048, .86,.45, -12.206392,.063246, .158114,-15.653274
254.0546, .99,.36, 4.120817,.137361, .145602,-7.134508
207.646, .95,.22, 21.470869,.042182, .237065,-23.469474
175.4261, .74,.11, 13.038344,.039873, .250799,-24.829074
`),!1);m(d.ParsePatFile(`
*HATCH-DOTS,HATCH-DOTS verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
225,0.56554781,0.11554781,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.25036388,0.20036388,0.70710678,0.70710678,0.6374253,-0.77678826
225,0.12918503,0.37918503,0.70710678,0.70710678,0.71894383,-0.69526973
225,0.75438447,0.20438447,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.30962291,0.15962291,0.70710678,0.70710678,0.6636138,-0.75059977
225,0.11186858,0.46186858,0.70710678,0.70710678,0.81138689,-0.60282667
225,0.37918503,0.12918503,0.70710678,0.70710678,0.71894383,-0.69526973
225,0.11554781,0.56554781,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.20036388,0.25036388,0.70710678,0.70710678,0.6374253,-0.77678826
225,0.46186859,0.11186859,0.70710678,0.70710678,0.8113869,-0.60282666
225,0.20438447,0.75438447,0.70710678,0.70710678,0.45245257,-0.96176099
225,0.15962291,0.30962291,0.70710678,0.70710678,0.6636138,-0.75059977
`),!1);m(d.ParsePatFile(`
*HATCH-SQRS,HATCH-SQRS verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
225,0.11,0.36,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.86,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.26,0.70710678,0.70710678,0.52325902,-0.89095454
225,0.76,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.56,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.46,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.26,0.11,0.70710678,0.70710678,0.52325902,-0.89095454
225,0.11,0.76,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.16,0.70710678,0.70710678,0.38183766,-1.0323759
225,0.16,0.11,0.70710678,0.70710678,0.38183766,-1.0323759
225,0.46,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.56,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.36,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.86,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.11,0.66,0.70710678,0.70710678,0.31112698,-1.10308658
225,0.66,0.11,0.70710678,0.70710678,0.31112698,-1.10308658
`),!1);m(d.ParsePatFile(`
*HEXAGONS,HEXAGONS verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
239.931417,0.21999999,0.99999998,8.06212908,0.04554875,0.21954496,-21.73495344
239.931417,0.89,0.19,8.06212908,0.04554875,0.21954496,-21.73495344
300.068583,0.78000001,0.99999998,13.89236932,0.04554875,0.21954496,-21.73495344
60.068488,0.12,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
119.931512,0.31,0.17,30.01665055,0.02626129,0.38078865,-37.69807687
300.068583,0.11,0.19,13.89236932,0.04554875,0.21954496,-21.73495344
180,0.11,0.19,0,1,0.21999996,-0.78000004
299.931512,0.69,0.83,30.01665055,0.02626129,0.38078865,-37.69807687
0,0.31,0.83,0,1,0.38,-0.62
180,0.69,0.17,0,1,0.38,-0.62
240.068488,0.88,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
180,0.11,0.81,0,1,0.21999996,-0.78000004
`),!1);m(d.ParsePatFile(`
*HEXJOIN-01,HEXJOIN-01 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
45,0.15,0.65,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.85,0.65,1,1,0.3,-0.7
315,0.65,0.85,0.70710678,0.70710678,0.28284271,-1.13137085
180,0.65,0.15,0,1,0.3,-0.7
270,0.55,0.15,1,1,0.3,-0.7
90,0.15,0.35,1,1,0.3,-0.7
135,0.35,0.15,0.70710678,0.70710678,0.28284271,-1.13137085
180,0.15,0.55,0,1,0.3,-0.7
270,0.45,0.15,1,1,0.3,-0.7
180,0.15,0.45,0,1,0.3,-0.7
225,0.85,0.35,0.70710678,0.70710678,0.28284271,-1.13137085
0,0.35,0.85,0,1,0.3,-0.7
`),!1);m(d.ParsePatFile(`
*HEXJOIN-02,HEXJOIN-02 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.85,0.45,1,1,0.1,-0.9
315,0.65,0.85,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.55,0.15,1,1,0.3,-0.7
180,0.15,0.55,0,1,0.3,-0.7
180,0.65,0.15,0,1,0.1,-0.9
45,0.15,0.65,0.70710678,0.70710678,0.28284271,-1.13137085
90,0.15,0.55,1,1,0.1,-0.9
180,0.15,0.45,0,1,0.3,-0.7
180,0.45,0.15,0,1,0.1,-0.9
270,0.45,0.15,1,1,0.3,-0.7
90,0.15,0.35,1,1,0.1,-0.9
0,0.55,0.85,0,1,0.1,-0.9
135,0.35,0.15,0.70710678,0.70710678,0.28284271,-1.13137085
0,0.35,0.85,0,1,0.1,-0.9
225,0.85,0.35,0.70710678,0.70710678,0.28284271,-1.13137085
270,0.85,0.65,1,1,0.1,-0.9
`),!1);m(d.ParsePatFile(`
*HEX,HEX
0, 0,0, 0,.21650635, .125,-.25
120, 0,0, 0,.21650635, .125,-.25
60, .125,0, 0,.21650635, .125,-.25
`),!1);m(d.ParsePatFile(`
*HOLLY,HOLLY
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
99.462322,0.8,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
74.744881,0.67,0.08,4.12217269,0.0877058,0.11401754,-11.28773671
68.198591,0.53,0.15,3.15682075,0.18569534,0.1077033,-5.27746151
270,0.58,0.37,0,1,0.07,-0.93
248.198591,0.75,0.35,3.15682075,0.18569534,0.1077033,-5.27746151
45,0.8,0.2,0.70710678,0.70710678,0.08485281,-1.32936075
351.869898,0.9,0.13,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.86,0.13,0,1,0.04,-0.96
26.565051,0.82,0.11,1.34164079,0.4472136,0.04472136,-2.19134662
45,0.8,0.09,0.70710678,0.70710678,0.02828427,-1.38592929
341.565051,0.77,0.1,0.9486833,0.31622777,0.03162278,-3.13065488
0,0.73,0.1,0,1,0.04,-0.96
26.565051,0.71,0.09,1.34164079,0.4472136,0.02236068,-2.2137073
26.565051,0.69,0.08,1.34164079,0.4472136,0.02236068,-2.2137073
53.130102,0.66,0.04,3.6,0.2,0.05,-4.95
270,0.66,0.08,0,1,0.04,-0.96
303.690068,0.64,0.11,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.62,0.13,0.70710678,0.70710678,0.02828427,-1.38592929
345.963757,0.58,0.14,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.54,0.14,0,1,0.04,-0.96
33.690068,0.51,0.12,1.38675049,0.2773501,0.03605551,-3.56949576
255.963757,0.52,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
281.309932,0.51,0.21,4.11843884,0.19611614,0.0509902,-5.04802932
284.036243,0.5,0.25,3.15296313,0.24253563,0.04123106,-4.08187457
296.565051,0.48,0.29,1.34164079,0.4472136,0.04472136,-2.19134662
303.690068,0.46,0.32,1.38675049,0.2773501,0.03605551,-3.56949576
180,0.5,0.32,0,1,0.04,-0.96
180,0.53,0.32,0,1,0.03,-0.97
213.690068,0.56,0.34,1.38675049,0.2773501,0.03605551,-3.56949576
243.434949,0.57,0.36,0.89442719,0.4472136,0.02236068,-2.2137073
251.565051,0.58,0.39,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.59,0.36,2.21359436,0.31622777,0.03162278,-3.13065488
135,0.61,0.34,0.70710678,0.70710678,0.02828427,-1.38592929
153.434949,0.63,0.33,0.89442719,0.4472136,0.02236068,-2.2137073
161.565051,0.66,0.32,0.9486833,0.31622777,0.03162278,-3.13065488
180,0.69,0.32,0,1,0.03,-0.97
198.434949,0.72,0.33,2.21359436,0.31622777,0.03162278,-3.13065488
225,0.74,0.35,0.70710678,0.70710678,0.02828427,-1.38592929
251.565051,0.75,0.38,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.76,0.35,2.21359436,0.31622777,0.03162278,-3.13065488
116.565051,0.78,0.31,1.34164079,0.4472136,0.04472136,-2.19134662
135,0.81,0.28,0.70710678,0.70710678,0.04242641,-1.37178716
161.565051,0.84,0.27,0.9486833,0.31622777,0.03162278,-3.13065488
180,0.87,0.27,0,1,0.03,-0.97
90,0.87,0.24,0,1,0.03,-0.97
111.801409,0.89,0.19,2.22834406,0.18569534,0.05385165,-5.33131316
126.869898,0.92,0.15,1.4,0.2,0.05,-4.95
149.036243,0.97,0.12,2.22948161,0.17149859,0.05830952,-5.77264238
338.587031,0.46,0.32,24.69817132,0.01825438,0.54781384,-54.23356986
338.198591,0.8,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
323.972627,0.71,0.62,8.60201108,0.07352146,0.13601471,-13.4654558
315,0.6,0.53,0.70710678,0.70710678,0.11313708,-1.30107648
135,0.58,0.55,0.70710678,0.70710678,0.07071068,-1.34350288
126.869898,0.68,0.65,1.4,0.2,0.1,-4.9
105.945396,0.77,0.72,3.15929297,0.13736056,0.0728011,-7.20730879
30.963757,0.87,0.8,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.83,0.79,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.8,0.79,0,1,0.03,-0.97
341.565051,0.77,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
333.434949,0.75,0.81,0.89442719,0.4472136,0.02236068,-2.2137073
63.434949,0.74,0.79,0.89442719,0.4472136,0.02236068,-2.2137073
45,0.72,0.77,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.69,0.75,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.66,0.74,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.63,0.74,0,1,0.03,-0.97
341.565051,0.6,0.75,0.9486833,0.31622777,0.03162278,-3.13065488
108.434949,0.61,0.72,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.61,0.69,0,1,0.03,-0.97
75.963757,0.6,0.65,0.9701425,0.24253563,0.04123106,-4.08187457
45,0.57,0.62,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.53,0.61,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.5,0.61,0,1,0.03,-0.97
126.869898,0.53,0.57,1.4,0.2,0.05,-4.95
90,0.53,0.54,0,1,0.03,-0.97
75.963757,0.52,0.5,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.5,0.47,2.21880078,0.2773501,0.03605551,-3.56949576
191.309932,0.55,0.48,4.11843884,0.19611614,0.0509902,-5.04802932
168.690068,0.6,0.47,0.98058068,0.19611614,0.0509902,-5.04802932
161.565051,0.66,0.45,0.9486833,0.31622777,0.06324555,-3.09903211
143.130102,0.7,0.42,3.6,0.2,0.05,-4.95
270,0.7,0.43,0,1,0.01,-0.99
270,0.7,0.46,0,1,0.03,-0.97
243.434949,0.72,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
213.690068,0.75,0.52,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.53,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.82,0.53,0,1,0.04,-0.96
146.309932,0.85,0.51,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.83,0.54,1.38675049,0.2773501,0.03605551,-3.56949576
270,0.83,0.57,0,1,0.03,-0.97
270,0.83,0.61,0,1,0.04,-0.96
243.434949,0.85,0.65,0.89442719,0.4472136,0.04472136,-2.19134662
225,0.87,0.67,0.70710678,0.70710678,0.02828427,-1.38592929
296.565051,0.86,0.69,1.34164079,0.4472136,0.02236068,-2.2137073
270,0.86,0.71,0,1,0.02,-0.98
255.963757,0.87,0.75,0.9701425,0.24253563,0.04123106,-4.08187457
243.434949,0.89,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
233.130102,0.92,0.83,3.6,0.2,0.05,-4.95
40.601295,0.5,0.47,1.41004798,0.10846523,0.55317267,-8.66637179
195.945396,0.26,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
5.194429,0.29,0.55,10.04946781,0.09053575,0.11045361,-10.93490741
19.983107,0.28,0.68,8.54357658,0.08543577,0.117047,-11.58765291
185.710593,0.23,0.68,9.05483843,0.09950372,0.10049876,-9.94937686
164.054604,0.22,0.79,4.12081692,0.13736056,0.0728011,-7.20730879
45,0.27,0.79,0.70710678,0.70710678,0.05656854,-1.35764502
90,0.21,0.92,0,1,0.04,-0.96
75.963757,0.2,0.88,0.9701425,0.24253563,0.04123106,-4.08187457
243.434949,0.31,0.47,0.89442719,0.4472136,0.04472136,-2.19134662
236.309932,0.33,0.5,2.21880078,0.2773501,0.03605551,-3.56949576
225,0.36,0.53,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.39,0.55,1.38675049,0.2773501,0.03605551,-3.56949576
189.462322,0.45,0.56,5.09636861,0.16439899,0.06082763,-6.0219349
333.434949,0.43,0.57,0.89442719,0.4472136,0.02236068,-2.2137073
326.309932,0.4,0.59,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.38,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
270,0.38,0.66,0,1,0.04,-0.96
251.565051,0.39,0.69,0.9486833,0.31622777,0.03162278,-3.13065488
236.309932,0.41,0.72,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.44,0.74,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.4,0.74,0,1,0.04,-0.96
333.434949,0.36,0.76,0.89442719,0.4472136,0.04472136,-2.19134662
306.869898,0.33,0.8,1.4,0.2,0.05,-4.95
284.036243,0.32,0.84,3.15296313,0.24253563,0.04123106,-4.08187457
341.565051,0.29,0.85,0.9486833,0.31622777,0.03162278,-3.13065488
326.309932,0.26,0.87,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.24,0.9,1.38675049,0.2773501,0.03605551,-3.56949576
296.565051,0.21,0.96,1.34164079,0.4472136,0.06708204,-2.16898594
56.309932,0.18,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
45,0.16,0.83,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.13,0.81,1.38675049,0.2773501,0.03605551,-3.56949576
116.565051,0.14,0.79,1.34164079,0.4472136,0.02236068,-2.2137073
108.434949,0.15,0.76,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.15,0.72,0,1,0.04,-0.96
63.434949,0.13,0.68,0.89442719,0.4472136,0.04472136,-2.19134662
33.690068,0.1,0.66,1.38675049,0.2773501,0.03605551,-3.56949576
165.963757,0.14,0.65,0.9701425,0.24253563,0.04123106,-4.08187457
143.130102,0.18,0.62,3.6,0.2,0.05,-4.95
116.565051,0.2,0.58,1.34164079,0.4472136,0.04472136,-2.19134662
75.963757,0.19,0.54,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.17,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.21,0.5,0,1,0.04,-0.96
165.963757,0.25,0.49,0.9701425,0.24253563,0.04123106,-4.08187457
135,0.27,0.47,0.70710678,0.70710678,0.02828427,-1.38592929
116.565051,0.29,0.43,1.34164079,0.4472136,0.04472136,-2.19134662
278.583621,0.21,0.96,33.37663332,0.01865659,0.53600373,-53.0643694
104.036243,0.3,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.32,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.36,0.15,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.39,0.15,0,1,0.03,-0.97
206.565051,0.43,0.17,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.45,0.2,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.46,0.24,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.45,0.27,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.43,0.3,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.39,0.32,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.36,0.32,0,1,0.03,-0.97
26.565051,0.32,0.3,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.3,0.27,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.29,0.24,0.9486833,0.31622777,0.03162278,-3.13065488
104.036243,0.16,0.31,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.18,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.22,0.26,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.25,0.26,0,1,0.03,-0.97
206.565051,0.29,0.28,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.31,0.31,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.32,0.35,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.31,0.38,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.29,0.41,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.25,0.43,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.22,0.43,0,1,0.03,-0.97
26.565051,0.18,0.41,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.16,0.38,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.15,0.35,0.9486833,0.31622777,0.03162278,-3.13065488
104.036243,0.34,0.38,3.15296313,0.24253563,0.04123106,-4.08187457
123.690068,0.36,0.35,1.38675049,0.2773501,0.03605551,-3.56949576
153.434949,0.4,0.33,0.89442719,0.4472136,0.04472136,-2.19134662
180,0.43,0.33,0,1,0.03,-0.97
206.565051,0.47,0.35,1.34164079,0.4472136,0.04472136,-2.19134662
236.309932,0.49,0.38,2.21880078,0.2773501,0.03605551,-3.56949576
255.963757,0.5,0.42,0.9701425,0.24253563,0.04123106,-4.08187457
288.434949,0.49,0.45,2.21359436,0.31622777,0.03162278,-3.13065488
303.690068,0.47,0.48,1.38675049,0.2773501,0.03605551,-3.56949576
333.434949,0.43,0.5,0.89442719,0.4472136,0.04472136,-2.19134662
0,0.4,0.5,0,1,0.03,-0.97
26.565051,0.36,0.48,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.34,0.45,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.33,0.42,0.9486833,0.31622777,0.03162278,-3.13065488
`),!1);m(d.ParsePatFile(`
*HONEY,HONEY
0, 0,0, .1875,.10825317, .125,-.25
120, 0,0, .1875,.10825317, .125,-.25
60, 0,0, .1875,.10825317, -.25,.125
`),!1);m(d.ParsePatFile(`
*HOUND,HOUND
0, 0,0, .25,.0625, 1,-.5
90, 0,0, -.25,.0625, 1,-.5
`),!1);m(d.ParsePatFile(`
*INSUL,INSUL
0, 0,0, 0,.375
0, 0,.125, 0,.375, .125,-.125
0, 0,.25, 0,.375, .125,-.125
`),!1);m(d.ParsePatFile(`
*LATTICE-01,LATTICE-01 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.08514719,0.4,0,1,0.17029438,-0.82970562
270,0.6,0.08514719,1,1,0.17029438,-0.82970562
270,0.4,0.08514719,1,1,0.17029438,-0.82970562
135,0.5,0.2679899,0.70710678,0.70710678,0.32811183,-1.08610173
225,0.7320101,0.5,0.70710678,0.70710678,0.32811183,-1.08610173
45,0.08514719,0.6,0.70710678,0.70710678,0.44526911,-0.96894445
180,0.08514719,0.6,0,1,0.17029438,-0.82970562
315,0.5,0.7320101,0.70710678,0.70710678,0.32811183,-1.08610173
45,0.2679899,0.5,0.70710678,0.70710678,0.32811183,-1.08610173
315,0.6,0.91485281,0.70710678,0.70710678,0.44526911,-0.96894445
45,0.6,0.08514719,0.70710678,0.70710678,0.44526911,-0.96894445
315,0.08514719,0.4,0.70710678,0.70710678,0.44526911,-0.96894445
`),!1);m(d.ParsePatFile(`
*LATTICE-02,LATTICE-02 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
270,0.61666667,1,1,1,1;,0 Removed 0 IT RENDERS A POINT
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.38333333,1,1,1,1,;0 Removed 0 IT RENDERS A POINT
`),!1);m(d.ParsePatFile(`
*LATTICE-03,LATTICE-03 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.38333333,0.38333333,0,1,0.76666666,-0.23333334
180,0.38333333,0.61666667,0,1,0.76666666,-0.23333334
270,0.61666667,0.38333333,1,1,0.76666666,-0.23333334
270,0.38333333,0.38333333,1,1,0.76666666,-0.23333334
`),!1);m(d.ParsePatFile(`
*LATTICE-04,LATTICE-04 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
296.565051,0.15333333,0.46,1.34164079,0.4472136,1.13294111,-1.10312687
296.565051,0.34000001,0.55333333,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.46,0.84666667,1.34164079,0.4472136,1.13294111,-1.10312687
206.565051,0.55333333,0.65999999,1.34164079,0.4472136,1.13294111,-1.10312687
`),!1);m(d.ParsePatFile(`
*LATTICE-05,LATTICE-05
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
0,0.775,0.075,0,1,0.15,-0.85
180,0.225,0.925,0,1,0.15,-0.85
180,0.625,0.225,0,1,0.4,-0.6
180,0.625,0.075,0,1,0.55,-0.45
270,0.625,0.225,0,1,0.15,-0.85
270,0.775,0.775,0,1,0.7,-0.3
270,0.925,0.925,0,1,0.85,-0.15
0,0.375,0.775,0,1,0.4,-0.6
0,0.375,0.925,0,1,0.55,-0.45
90,0.375,0.775,0,1,0.15,-0.85
90,0.225,0.225,0,1,0.7,-0.3
90,0.075,0.075,0,1,0.85,-0.15
`),!1);m(d.ParsePatFile(`
*LATTICE-06,LATTICE-06
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.625,0.375,0,1,0.25,-0.75
270,0.625,0.625,0,1,0.25,-0.75
0,0.375,0.625,0,1,0.25,-0.75
90,0.375,0.375,0,1,0.25,-0.75
0,0.775,0.075,0,1,0.15,-0.85
180,0.225,0.925,0,1,0.15,-0.85
180,0.625,0.225,0,1,0.4,-0.6
180,0.625,0.075,0,1,0.55,-0.45
270,0.625,0.225,0,1,0.15,-0.85
270,0.775,0.775,0,1,0.7,-0.3
270,0.925,0.925,0,1,0.85,-0.15
0,0.375,0.775,0,1,0.4,-0.6
0,0.375,0.925,0,1,0.55,-0.45
90,0.375,0.775,0,1,0.15,-0.85
90,0.225,0.225,0,1,0.7,-0.3
90,0.075,0.075,0,1,0.85,-0.15
`),!1);m(d.ParsePatFile(`
*LATTICE-07, verbose comment
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.69166667,0.69166666,1,1,0.88333333,-0.11666667
270,0.80833334,0.69166666,1,1,0.88333333,-0.11666667
270,0.19166666,0.19166667,1,1,0.88333333,-0.11666667
270,0.30833333,0.19166667,1,1,0.88333333,-0.11666667
180,0.69166667,0.30833333,0,1,0.88333333,-0.11666667
180,0.69166667,0.19166666,0,1,0.88333333,-0.11666667
180,0.19166667,0.80833334,0,1,0.88333333,-0.11666667
180,0.19166667,0.69166667,0,1,0.88333333,-0.11666667
`),!1);m(d.ParsePatFile(`
*LEAF-01,LEAF-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
83.659808,0.9,0.2,0.99388373,0.11043153,0.09055385,-8.96483129
26.565051,0.88,0.19,1.34164079,0.4472136,0.02236068,-2.2137073
14.036243,0.84,0.18,3.15296313,0.24253563,0.04123106,-4.08187457
315,0.84,0.18,0.70710678,0.70710678,0.05656854,-1.35764502
83.659808,0.84,0.18,0.99388373,0.11043153,0.09055385,-8.96483129
0,0.79,0.18,0,1,0.05,-0.95
345.963757,0.82,0.12,0.9701425,0.24253563,0.04123106,-4.08187457
326.309932,0.79,0.14,2.21880078,0.2773501,0.03605551,-3.56949576
303.690068,0.77,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.74,0.16,2.21359436,0.31622777,0.03162278,-3.13065488
288.434949,0.73,0.19,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.77,0.19,0,1,0.04,-0.96
258.690068,0.78,0.24,0.98058068,0.19611614,0.0509902,-5.04802932
243.434949,0.79,0.26,0.89442719,0.4472136,0.02236068,-2.2137073
225,0.82,0.29,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.85,0.31,1.38675049,0.2773501,0.03605551,-3.56949576
191.309932,0.9,0.32,4.11843884,0.19611614,0.0509902,-5.04802932
128.659808,0.3,0.42,1.40556386,0.15617376,0.06403124,-6.339093
143.130102,0.34,0.39,3.6,0.2,0.05,-4.95
153.434949,0.38,0.37,0.89442719,0.4472136,0.04472136,-2.19134662
192.528808,0.38,0.37,4.1216787,0.10846523,0.09219544,-9.12734901
105.945396,0.38,0.37,3.15929297,0.13736056,0.0728011,-7.20730879
153.434949,0.42,0.35,0.89442719,0.4472136,0.04472136,-2.19134662
149.036243,0.47,0.32,2.22948161,0.17149859,0.05830952,-5.77264238
95.710593,0.47,0.32,9.05483843,0.09950372,0.10049876,-9.94937686
194.931417,0.47,0.32,11.40157229,0.06441566,0.15524175,-15.36893295
135,0.51,0.28,0.70710678,0.70710678,0.05656854,-1.35764502
123.690068,0.53,0.25,1.38675049,0.2773501,0.03605551,-3.56949576
199.653824,0.53,0.25,11.70450662,0.06726728,0.14866069,-14.71740806
71.565051,0.53,0.25,0.9486833,0.31622777,0.09486833,-3.06740933
119.054604,0.58,0.16,8.06167266,0.09712859,0.1029563,-10.19267384
288.434949,0.58,0.14,2.21359436,0.31622777,0.06324555,-3.09903211
21.801409,0.53,0.12,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.48,0.11,4.11843884,0.19611614,0.0509902,-5.04802932
0,0.45,0.11,0,1,0.03,-0.97
341.565051,0.39,0.13,0.9486833,0.31622777,0.06324555,-3.09903211
326.309932,0.33,0.17,2.21880078,0.2773501,0.07211103,-3.53344025
308.659808,0.29,0.22,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.26,0.27,3.60147029,0.17149859,0.05830952,-5.77264238
285.945396,0.24,0.34,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.24,0.41,0,1,0.07,-0.93
279.462322,0.23,0.47,5.09636861,0.16439899,0.06082763,-6.0219349
285.945396,0.21,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
123.690068,0.23,0.51,1.38675049,0.2773501,0.03605551,-3.56949576
161.565051,0.26,0.5,0.9486833,0.31622777,0.03162278,-3.13065488
171.869898,0.33,0.49,0.98994949,0.14142136,0.07071068,-7.00035713
171.869898,0.4,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
161.565051,0.46,0.46,0.9486833,0.31622777,0.06324555,-3.09903211
161.565051,0.52,0.44,0.9486833,0.31622777,0.06324555,-3.09903211
146.309932,0.58,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
119.744881,0.62,0.33,5.82963253,0.12403473,0.08062258,-7.98163517
111.801409,0.64,0.28,2.22834406,0.18569534,0.05385165,-5.33131316
90,0.64,0.24,0,1,0.04,-0.96
75.963757,0.63,0.2,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.61,0.17,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.6,0.15,0.89442719,0.4472136,0.02236068,-2.2137073
126.869898,0.63,0.11,1.4,0.2,0.05,-4.95
45,0.6,0.08,0.70710678,0.70710678,0.04242641,-1.37178716
233.130102,0.89,0.04,3.6,0.2,0.05,-4.95
258.690068,0.07,0.05,0.98058068,0.19611614,0.0509902,-5.04802932
258.690068,0.14,0.05,0.98058068,0.19611614,0.0509902,-5.04802932
198.434949,0.26,0.02,2.21359436,0.31622777,0.06324555,-3.09903211
225,0.31,0.02,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.34,0.03,2.21359436,0.31622777,0.03162278,-3.13065488
348.690068,0.29,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
345.963757,0.25,0.05,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.21,0.07,0.89442719,0.4472136,0.04472136,-2.19134662
333.434949,0.15,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.1,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.07,0.11,0,1,0.03,-0.97
8.130102,0,0.1,6.08111832,0.14142136,0.07071068,-7.00035713
236.309932,0.02,0.23,2.21880078,0.2773501,0.03605551,-3.56949576
236.309932,0.04,0.26,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.07,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.03,0.28,0,1,0.04,-0.96
326.309932,0,0.3,2.21880078,0.2773501,0.03605551,-3.56949576
18.434949,0,0.26,2.21359436,0.31622777,0.03162278,-3.13065488
0,0,0.55,0,1,0.07,-0.93
14.036243,0.1,0.61,3.15296313,0.24253563,0.04123106,-4.08187457
21.801409,0.05,0.59,2.22834406,0.18569534,0.05385165,-5.33131316
30.963757,0,0.56,3.60147029,0.17149859,0.05830952,-5.77264238
254.054604,0.02,0.66,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.05,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
153.434949,0.11,0.66,0.89442719,0.4472136,0.06708204,-2.16898594
158.198591,0.16,0.64,3.15682075,0.18569534,0.05385165,-5.33131316
180,0.21,0.64,0,1,0.05,-0.95
33.690068,0.18,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
45,0.16,0.6,0.70710678,0.70710678,0.02828427,-1.38592929
53.130102,0.13,0.56,3.6,0.2,0.05,-4.95
56.309932,0.09,0.5,2.21880078,0.2773501,0.07211103,-3.53344025
51.340192,0.05,0.45,4.99756038,0.15617376,0.06403124,-6.339093
38.659808,0,0.41,1.40556386,0.15617376,0.06403124,-6.339093
180,0.82,0.48,0,1,0.1,-0.9
310.601295,0.82,0.48,1.41004798,0.10846523,0.09219544,-9.12734901
82.405357,0.82,0.48,8.06198693,0.06608186,0.15132746,-14.98141849
180,0.84,0.48,0,1,0.02,-0.98
194.036243,0.88,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
198.434949,0.91,0.5,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.83,0.37,0,1,0.08,-0.92
348.690068,0.78,0.38,0.98058068,0.19611614,0.0509902,-5.04802932
321.340192,0.73,0.42,4.99756038,0.15617376,0.06403124,-6.339093
300.963757,0.7,0.47,3.60147029,0.17149859,0.05830952,-5.77264238
21.801409,0.65,0.45,2.22834406,0.18569534,0.05385165,-5.33131316
284.036243,0.64,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.7,0.49,0,1,0.06,-0.94
261.869898,0.71,0.56,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.73,0.61,3.15682075,0.18569534,0.05385165,-5.33131316
225,0.77,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
216.869898,0.81,0.68,1.4,0.2,0.05,-4.95
198.434949,0.9,0.71,2.21359436,0.31622777,0.09486833,-3.06740933
153.434949,0.36,0.65,0.89442719,0.4472136,0.06708204,-2.16898594
170.537678,0.42,0.64,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.49,0.65,6.08111832,0.14142136,0.07071068,-7.00035713
201.801409,0.54,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
219.805571,0.6,0.72,1.40840568,0.12803688,0.0781025,-7.73214718
18.434949,0.97,0.25,2.21359436,0.31622777,0.03162278,-3.13065488
33.690068,0.94,0.23,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.94,0.23,0,1,0.04,-0.96
80.537678,0.94,0.23,0.98639392,0.16439899,0.06082763,-6.0219349
36.869898,0.9,0.2,1.4,0.2,0.05,-4.95
341.565051,0.9,0.2,0.9486833,0.31622777,0.06324555,-3.09903211
53.130102,0.97,0.16,3.6,0.2,0.05,-4.95
38.659808,0.92,0.12,1.40556386,0.15617376,0.06403124,-6.339093
9.462322,0.86,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
180,0.95,0.32,0,1,0.05,-0.95
158.198591,1,0.3,3.15682075,0.18569534,0.05385165,-5.33131316
216.869898,0.93,0.07,1.4,0.2,0.05,-4.95
206.565051,0.97,0.09,1.34164079,0.4472136,0.04472136,-2.19134662
198.434949,1,0.1,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.97,0,0,1,0.02,-0.98
26.565051,0.96,0.53,1.34164079,0.4472136,0.04472136,-2.19134662
56.309932,0.96,0.53,2.21880078,0.2773501,0.07211103,-3.53344025
36.869898,0.96,0.53,1.4,0.2,0.05,-4.95
30.963757,0.91,0.5,3.60147029,0.17149859,0.05830952,-5.77264238
78.690068,0.91,0.5,0.98058068,0.19611614,0.15297059,-4.94604893
156.037511,1,0.46,7.61509624,0.10153462,0.09848858,-9.75036922
30.963757,0.95,0.38,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.91,0.37,3.15296313,0.24253563,0.04123106,-4.08187457
180,1,0.71,0,1,0.1,-0.9
0,0.86,0.87,0,1,0.09,-0.91
11.309932,0.95,0.87,4.11843884,0.19611614,0.0509902,-5.04802932
135,1,0.82,0.70710678,0.70710678,0.07071068,-1.34350288
0,0.96,0.76,0,1,0.04,-0.96
345.963757,0.92,0.77,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.88,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
315,0.86,0.81,0.70710678,0.70710678,0.02828427,-1.38592929
306.869898,0.83,0.85,1.4,0.2,0.05,-4.95
11.309932,0.78,0.84,4.11843884,0.19611614,0.0509902,-5.04802932
284.036243,0.77,0.88,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.83,0.88,0,1,0.06,-0.94
14.036243,0.65,0.89,3.15296313,0.24253563,0.04123106,-4.08187457
18.434949,0.62,0.88,2.21359436,0.31622777,0.03162278,-3.13065488
33.690068,0.59,0.86,1.38675049,0.2773501,0.03605551,-3.56949576
230.194429,0.65,0.78,6.401844,0.12803688,0.0781025,-7.73214718
239.036243,0.68,0.83,2.22948161,0.17149859,0.05830952,-5.77264238
236.309932,0.72,0.89,2.21880078,0.2773501,0.07211103,-3.53344025
213.690068,0.75,0.91,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.92,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.74,0.92,0,1,0.04,-0.96
345.963757,0.7,0.93,0.9701425,0.24253563,0.04123106,-4.08187457
261.869898,0.84,0.95,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.86,1,3.15682075,0.18569534,0.05385165,-5.33131316
36.869898,0.55,0.83,1.4,0.2,0.05,-4.95
0,0.55,0.83,0,1,0.08,-0.92
78.690068,0.55,0.83,0.98058068,0.19611614,0.10198039,-4.99703912
33.690068,0.52,0.81,1.38675049,0.2773501,0.03605551,-3.56949576
30.963757,0.47,0.78,3.60147029,0.17149859,0.05830952,-5.77264238
336.037511,0.47,0.78,7.61509624,0.10153462,0.09848858,-9.75036922
79.380345,0.47,0.78,11.18017113,0.06142951,0.16278821,-16.11603239
26.565051,0.43,0.76,1.34164079,0.4472136,0.04472136,-2.19134662
9.462322,0.37,0.75,5.09636861,0.16439899,0.06082763,-6.0219349
318.814075,0.37,0.75,9.21906451,0.09407209,0.10630146,-10.52384435
82.405357,0.37,0.75,8.06198693,0.06608186,0.15132746,-14.98141849
0,0.33,0.75,0,1,0.04,-0.96
0,0.29,0.75,0,1,0.04,-0.96
0,0.2,0.76,0,1,0.06,-0.94
104.036243,0.21,0.72,3.15296313,0.24253563,0.04123106,-4.08187457
201.801409,0.26,0.74,2.22834406,0.18569534,0.05385165,-5.33131316
123.690068,0.3,0.68,1.38675049,0.2773501,0.07211103,-3.53344025
338.198591,0.65,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.59,0.98,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.54,0.99,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.46,0.99,0,1,0.08,-0.92
18.434949,0.4,0.97,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.34,0.94,1.34164079,0.4472136,0.06708204,-2.16898594
45,0.29,0.89,0.70710678,0.70710678,0.07071068,-1.34350288
71.565051,0.27,0.83,0.9486833,0.31622777,0.06324555,-3.09903211
81.869898,0.26,0.76,0.98994949,0.14142136,0.07071068,-7.00035713
;0,0.2,0.76,0,1,0.06,-0.94
315,0,0.82,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.03,0.89,2.21359436,0.31622777,0.03162278,-3.13065488
343.300756,0.03,0.89,7.27947977,0.09578263,0.10440307,-10.33590344
74.744881,0.03,0.89,4.12217269,0.0877058,0.11401754,-11.28773671
206.565051,0.05,0.9,1.34164079,0.4472136,0.02236068,-2.2137073
213.690068,0.08,0.92,1.38675049,0.2773501,0.03605551,-3.56949576
216.869898,0.12,0.95,1.4,0.2,0.05,-4.95
352.874984,0.12,0.95,0.99227788,0.12403473,0.08062258,-7.98163517
78.690068,0.12,0.95,0.98058068,0.19611614,0.0509902,-5.04802932
213.690068,0.15,0.97,1.38675049,0.2773501,0.03605551,-3.56949576
213.690068,0.18,0.99,1.38675049,0.2773501,0.03605551,-3.56949576
206.565051,0.2,1,1.34164079,0.4472136,0.02236068,-2.2137073
45,0.28,0.99,0.70710678,0.70710678,0.01414214,-1.40007143
56.309932,0.26,0.96,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.22,0.9,2.21880078,0.2773501,0.07211103,-3.53344025
53.130102,0.19,0.86,3.6,0.2,0.05,-4.95
45,0.14,0.81,0.70710678,0.70710678,0.07071068,-1.34350288
36.869898,0.1,0.78,1.4,0.2,0.05,-4.95
18.434949,0.04,0.76,2.21359436,0.31622777,0.06324555,-3.09903211
0,0,0.76,0,1,0.04,-0.96
81.253838,0.95,0.87,7.07065907,0.07602859,0.13152946,-13.02141697
`),!1);m(d.ParsePatFile(`
*LEAF-02,LEAF-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
303.690068,0.77,0.17,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.74,0.16,2.21359436,0.31622777,0.03162278,-3.13065488
288.434949,0.73,0.19,2.21359436,0.31622777,0.03162278,-3.13065488
180,0.77,0.19,0,1,0.04,-0.96
258.690068,0.78,0.24,0.98058068,0.19611614,0.0509902,-5.04802932
243.434949,0.79,0.26,0.89442719,0.4472136,0.02236068,-2.2137073
288.434949,0.58,0.14,2.21359436,0.31622777,0.06324555,-3.09903211
21.801409,0.53,0.12,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.48,0.11,4.11843884,0.19611614,0.0509902,-5.04802932
0,0.45,0.11,0,1,0.03,-0.97
341.565051,0.39,0.13,0.9486833,0.31622777,0.06324555,-3.09903211
326.309932,0.33,0.17,2.21880078,0.2773501,0.07211103,-3.53344025
308.659808,0.29,0.22,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.26,0.27,3.60147029,0.17149859,0.05830952,-5.77264238
285.945396,0.24,0.34,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.24,0.41,0,1,0.07,-0.93
279.462322,0.23,0.47,5.09636861,0.16439899,0.06082763,-6.0219349
285.945396,0.21,0.54,3.15929297,0.13736056,0.0728011,-7.20730879
123.690068,0.23,0.51,1.38675049,0.2773501,0.03605551,-3.56949576
161.565051,0.26,0.5,0.9486833,0.31622777,0.03162278,-3.13065488
171.869898,0.33,0.49,0.98994949,0.14142136,0.07071068,-7.00035713
171.869898,0.4,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
161.565051,0.46,0.46,0.9486833,0.31622777,0.06324555,-3.09903211
161.565051,0.52,0.44,0.9486833,0.31622777,0.06324555,-3.09903211
146.309932,0.58,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
119.744881,0.62,0.33,5.82963253,0.12403473,0.08062258,-7.98163517
111.801409,0.64,0.28,2.22834406,0.18569534,0.05385165,-5.33131316
90,0.64,0.24,0,1,0.04,-0.96
75.963757,0.63,0.2,0.9701425,0.24253563,0.04123106,-4.08187457
56.309932,0.61,0.17,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.6,0.15,0.89442719,0.4472136,0.02236068,-2.2137073
126.869898,0.63,0.11,1.4,0.2,0.05,-4.95
45,0.6,0.08,0.70710678,0.70710678,0.04242641,-1.37178716
225,0.31,0.02,0.70710678,0.70710678,0.02828427,-1.38592929
198.434949,0.34,0.03,2.21359436,0.31622777,0.03162278,-3.13065488
348.690068,0.29,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
345.963757,0.25,0.05,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.21,0.07,0.89442719,0.4472136,0.04472136,-2.19134662
333.434949,0.15,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.1,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.07,0.11,0,1,0.03,-0.97
8.130102,0,0.1,6.08111832,0.14142136,0.07071068,-7.00035713
236.309932,0.02,0.23,2.21880078,0.2773501,0.03605551,-3.56949576
236.309932,0.04,0.26,2.21880078,0.2773501,0.03605551,-3.56949576
213.690068,0.07,0.28,1.38675049,0.2773501,0.03605551,-3.56949576
0,0.03,0.28,0,1,0.04,-0.96
326.309932,0,0.3,2.21880078,0.2773501,0.03605551,-3.56949576
158.198591,0.05,0.69,3.15682075,0.18569534,0.05385165,-5.33131316
153.434949,0.11,0.66,0.89442719,0.4472136,0.06708204,-2.16898594
158.198591,0.16,0.64,3.15682075,0.18569534,0.05385165,-5.33131316
180,0.21,0.64,0,1,0.05,-0.95
33.690068,0.18,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
45,0.16,0.6,0.70710678,0.70710678,0.02828427,-1.38592929
53.130102,0.13,0.56,3.6,0.2,0.05,-4.95
56.309932,0.09,0.5,2.21880078,0.2773501,0.07211103,-3.53344025
51.340192,0.05,0.45,4.99756038,0.15617376,0.06403124,-6.339093
38.659808,0,0.41,1.40556386,0.15617376,0.06403124,-6.339093
321.340192,0.73,0.42,4.99756038,0.15617376,0.06403124,-6.339093
300.963757,0.7,0.47,3.60147029,0.17149859,0.05830952,-5.77264238
21.801409,0.65,0.45,2.22834406,0.18569534,0.05385165,-5.33131316
284.036243,0.64,0.49,3.15296313,0.24253563,0.04123106,-4.08187457
180,0.7,0.49,0,1,0.06,-0.94
261.869898,0.71,0.56,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.73,0.61,3.15682075,0.18569534,0.05385165,-5.33131316
225,0.77,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
284.036243,0.77,0.88,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.2,0.76,0,1,0.06,-0.94
104.036243,0.21,0.72,3.15296313,0.24253563,0.04123106,-4.08187457
201.801409,0.26,0.74,2.22834406,0.18569534,0.05385165,-5.33131316
123.690068,0.3,0.68,1.38675049,0.2773501,0.07211103,-3.53344025
153.434949,0.36,0.65,0.89442719,0.4472136,0.06708204,-2.16898594
170.537678,0.42,0.64,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.49,0.65,6.08111832,0.14142136,0.07071068,-7.00035713
201.801409,0.54,0.67,2.22834406,0.18569534,0.05385165,-5.33131316
219.805571,0.6,0.72,1.40840568,0.12803688,0.0781025,-7.73214718
230.194429,0.65,0.78,6.401844,0.12803688,0.0781025,-7.73214718
239.036243,0.68,0.83,2.22948161,0.17149859,0.05830952,-5.77264238
236.309932,0.72,0.89,2.21880078,0.2773501,0.07211103,-3.53344025
213.690068,0.75,0.91,1.38675049,0.2773501,0.03605551,-3.56949576
198.434949,0.78,0.92,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.74,0.92,0,1,0.04,-0.96
345.963757,0.7,0.93,0.9701425,0.24253563,0.04123106,-4.08187457
338.198591,0.65,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
45,0.29,0.89,0.70710678,0.70710678,0.07071068,-1.34350288
71.565051,0.27,0.83,0.9486833,0.31622777,0.06324555,-3.09903211
81.869898,0.26,0.76,0.98994949,0.14142136,0.07071068,-7.00035713
;0,0.2,0.76,0,1,0.06,-0.94
53.130102,0.19,0.86,3.6,0.2,0.05,-4.95
45,0.14,0.81,0.70710678,0.70710678,0.07071068,-1.34350288
36.869898,0.1,0.78,1.4,0.2,0.05,-4.95
18.434949,0.04,0.76,2.21359436,0.31622777,0.06324555,-3.09903211
0,0,0.76,0,1,0.04,-0.96
0,0.96,0.76,0,1,0.04,-0.96
345.963757,0.92,0.77,0.9701425,0.24253563,0.04123106,-4.08187457
333.434949,0.88,0.79,0.89442719,0.4472136,0.04472136,-2.19134662
315,0.86,0.81,0.70710678,0.70710678,0.02828427,-1.38592929
306.869898,0.83,0.85,1.4,0.2,0.05,-4.95
11.309932,0.78,0.84,4.11843884,0.19611614,0.0509902,-5.04802932
180,0.83,0.88,0,1,0.06,-0.94
261.869898,0.84,0.95,0.98994949,0.14142136,0.07071068,-7.00035713
248.198591,0.86,1,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.59,0.98,0.89442719,0.4472136,0.06708204,-2.16898594
348.690068,0.54,0.99,0.98058068,0.19611614,0.0509902,-5.04802932
0,0.46,0.99,0,1,0.08,-0.92
18.434949,0.4,0.97,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.34,0.94,1.34164079,0.4472136,0.06708204,-2.16898594
45,0.28,0.99,0.70710678,0.70710678,0.01414214,-1.40007143
56.309932,0.26,0.96,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.22,0.9,2.21880078,0.2773501,0.07211103,-3.53344025
53.130102,0.97,0.16,3.6,0.2,0.05,-4.95
38.659808,0.92,0.12,1.40556386,0.15617376,0.06403124,-6.339093
9.462322,0.86,0.11,5.09636861,0.16439899,0.06082763,-6.0219349
345.963757,0.82,0.12,0.9701425,0.24253563,0.04123106,-4.08187457
326.309932,0.79,0.14,2.21880078,0.2773501,0.03605551,-3.56949576
225,0.82,0.29,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.85,0.31,1.38675049,0.2773501,0.03605551,-3.56949576
191.309932,0.9,0.32,4.11843884,0.19611614,0.0509902,-5.04802932
180,0.95,0.32,0,1,0.05,-0.95
158.198591,1,0.3,3.15682075,0.18569534,0.05385165,-5.33131316
233.130102,0.89,0.04,3.6,0.2,0.05,-4.95
216.869898,0.93,0.07,1.4,0.2,0.05,-4.95
206.565051,0.97,0.09,1.34164079,0.4472136,0.04472136,-2.19134662
198.434949,1,0.1,2.21359436,0.31622777,0.03162278,-3.13065488
30.963757,0.95,0.38,3.60147029,0.17149859,0.05830952,-5.77264238
14.036243,0.91,0.37,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.83,0.37,0,1,0.08,-0.92
348.690068,0.78,0.38,0.98058068,0.19611614,0.0509902,-5.04802932
216.869898,0.81,0.68,1.4,0.2,0.05,-4.95
198.434949,0.9,0.71,2.21359436,0.31622777,0.09486833,-3.06740933
180,1,0.71,0,1,0.1,-0.9
`),!1);m(d.ParsePatFile(`
*LEAF-03,LEAF-03
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
344.054604,0.86,0.38,4.12081692,0.13736056,0.0728011,-7.20730879
338.198591,0.81,0.4,3.15682075,0.18569534,0.05385165,-5.33131316
326.309932,0.75,0.44,2.21880078,0.2773501,0.07211103,-3.53344025
320.194429,0.69,0.49,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.65,0.54,1.40556386,0.15617376,0.06403124,-6.339093
300.963757,0.62,0.59,3.60147029,0.17149859,0.05830952,-5.77264238
293.198591,0.59,0.66,2.23220936,0.13130643,0.07615773,-7.53961537
281.309932,0.58,0.71,4.11843884,0.19611614,0.0509902,-5.04802932
276.340192,0.57,0.8,8.0615014,0.11043153,0.09055385,-8.96483129
270,0.57,0.85,0,1,0.05,-0.95
257.471192,0.59,0.94,5.09786576,0.10846523,0.09219544,-9.12734901
164.054604,0.66,0.92,4.12081692,0.13736056,0.0728011,-7.20730879
158.198591,0.71,0.9,3.15682075,0.18569534,0.05385165,-5.33131316
146.309932,0.77,0.86,2.21880078,0.2773501,0.07211103,-3.53344025
140.194429,0.83,0.81,6.401844,0.12803688,0.0781025,-7.73214718
125.537678,0.88,0.74,4.99864847,0.11624764,0.08602325,-8.51630201
116.565051,0.92,0.66,1.34164079,0.4472136,0.08944272,-2.14662526
105.945396,0.94,0.59,3.15929297,0.13736056,0.0728011,-7.20730879
97.125016,0.95,0.51,7.06997987,0.12403473,0.08062258,-7.98163517
90,0.95,0.45,0,1,0.06,-0.94
77.471192,0.93,0.36,5.09786576,0.10846523,0.09219544,-9.12734901
195.945396,0.14,0.38,3.15929297,0.13736056,0.0728011,-7.20730879
201.801409,0.19,0.4,2.22834406,0.18569534,0.05385165,-5.33131316
213.690068,0.25,0.44,1.38675049,0.2773501,0.07211103,-3.53344025
219.805571,0.31,0.49,1.40840568,0.12803688,0.0781025,-7.73214718
231.340192,0.35,0.54,4.99756038,0.15617376,0.06403124,-6.339093
239.036243,0.38,0.59,2.22948161,0.17149859,0.05830952,-5.77264238
246.801409,0.41,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
258.690068,0.42,0.71,0.98058068,0.19611614,0.0509902,-5.04802932
263.659808,0.43,0.8,0.99388373,0.11043153,0.09055385,-8.96483129
270,0.43,0.85,0,1,0.05,-0.95
282.528808,0.41,0.94,4.1216787,0.10846523,0.09219544,-9.12734901
15.945396,0.34,0.92,3.15929297,0.13736056,0.0728011,-7.20730879
21.801409,0.29,0.9,2.22834406,0.18569534,0.05385165,-5.33131316
33.690068,0.23,0.86,1.38675049,0.2773501,0.07211103,-3.53344025
39.805571,0.17,0.81,1.40840568,0.12803688,0.0781025,-7.73214718
54.462322,0.12,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
63.434949,0.08,0.66,0.89442719,0.4472136,0.08944272,-2.14662526
74.054604,0.06,0.59,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.05,0.51,0.99227788,0.12403473,0.08062258,-7.98163517
90,0.05,0.45,0,1,0.06,-0.94
102.528808,0.07,0.36,4.1216787,0.10846523,0.09219544,-9.12734901
128.659808,0.21,0.15,1.40556386,0.15617376,0.06403124,-6.339093
146.309932,0.27,0.11,2.21880078,0.2773501,0.07211103,-3.53344025
153.434949,0.33,0.08,0.89442719,0.4472136,0.06708204,-2.16898594
164.054604,0.4,0.06,4.12081692,0.13736056,0.0728011,-7.20730879
171.869898,0.47,0.05,0.98994949,0.14142136,0.07071068,-7.00035713
180,0.53,0.05,0,1,0.06,-0.94
188.130102,0.6,0.06,6.08111832,0.14142136,0.07071068,-7.00035713
195.945396,0.67,0.08,3.15929297,0.13736056,0.0728011,-7.20730879
206.565051,0.73,0.11,1.34164079,0.4472136,0.06708204,-2.16898594
218.659808,0.78,0.15,1.40556386,0.15617376,0.06403124,-6.339093
225,0.83,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
315,0.78,0.25,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.73,0.29,4.99756038,0.15617376,0.06403124,-6.339093
336.801409,0.66,0.32,5.38356375,0.13130643,0.07615773,-7.53961537
341.565051,0.6,0.34,0.9486833,0.31622777,0.06324555,-3.09903211
351.869898,0.53,0.35,0.98994949,0.14142136,0.07071068,-7.00035713
0,0.47,0.35,0,1,0.06,-0.94
8.130102,0.4,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
18.434949,0.34,0.32,2.21359436,0.31622777,0.06324555,-3.09903211
23.198591,0.27,0.29,2.23220936,0.13130643,0.07615773,-7.53961537
38.659808,0.22,0.25,1.40556386,0.15617376,0.06403124,-6.339093
45,0.17,0.2,0.70710678,0.70710678,0.07071068,-1.34350288
`),!1);m(d.ParsePatFile(`
*LINE,LINE
0, 0,0, 0,.125
`),!1);m(d.ParsePatFile(`
*LOOPLINKS,LOOPLINKS
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
206.565051,0.53,0.67,1.34164079,0.4472136,0.02236068,-2.2137073
243.434949,0.54,0.69,0.89442719,0.4472136,0.02236068,-2.2137073
116.565051,0.47,0.67,1.34164079,0.4472136,0.02236068,-2.2137073
153.434949,0.49,0.66,0.89442719,0.4472136,0.02236068,-2.2137073
180,0.51,0.66,0,1,0.02,-0.98
258.690068,0.19,0.59,0.98058068,0.19611614,0.0509902,-5.04802932
251.565051,0.2,0.62,0.9486833,0.31622777,0.03162278,-3.13065488
243.434949,0.22,0.66,0.89442719,0.4472136,0.04472136,-2.19134662
230.194429,0.27,0.72,6.401844,0.12803688,0.0781025,-7.73214718
225,0.31,0.76,0.70710678,0.70710678,0.05656854,-1.35764502
209.744881,0.38,0.8,5.82963253,0.12403473,0.08062258,-7.98163517
194.036243,0.46,0.82,3.15296313,0.24253563,0.08246211,-4.04064351
251.565051,0.28,0.6,0.9486833,0.31622777,0.06324555,-3.09903211
239.036243,0.31,0.65,2.22948161,0.17149859,0.05830952,-5.77264238
225,0.35,0.69,0.70710678,0.70710678,0.05656854,-1.35764502
210.963757,0.4,0.72,3.60147029,0.17149859,0.05830952,-5.77264238
198.434949,0.46,0.74,2.21359436,0.31622777,0.06324555,-3.09903211
116.565051,0.67,0.47,1.34164079,0.4472136,0.02236068,-2.2137073
153.434949,0.69,0.46,0.89442719,0.4472136,0.02236068,-2.2137073
26.565051,0.67,0.53,1.34164079,0.4472136,0.02236068,-2.2137073
63.434949,0.66,0.51,0.89442719,0.4472136,0.02236068,-2.2137073
90,0.66,0.49,0,1,0.02,-0.98
168.690068,0.59,0.81,0.98058068,0.19611614,0.0509902,-5.04802932
161.565051,0.62,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
153.434949,0.66,0.78,0.89442719,0.4472136,0.04472136,-2.19134662
140.194429,0.72,0.73,6.401844,0.12803688,0.0781025,-7.73214718
135,0.76,0.69,0.70710678,0.70710678,0.05656854,-1.35764502
119.744881,0.8,0.62,5.82963253,0.12403473,0.08062258,-7.98163517
104.036243,0.82,0.54,3.15296313,0.24253563,0.08246211,-4.04064351
161.565051,0.6,0.72,0.9486833,0.31622777,0.06324555,-3.09903211
149.036243,0.65,0.69,2.22948161,0.17149859,0.05830952,-5.77264238
135,0.69,0.65,0.70710678,0.70710678,0.05656854,-1.35764502
120.963757,0.72,0.6,3.60147029,0.17149859,0.05830952,-5.77264238
108.434949,0.74,0.54,2.21359436,0.31622777,0.06324555,-3.09903211
26.565051,0.47,0.33,1.34164079,0.4472136,0.02236068,-2.2137073
63.434949,0.46,0.31,0.89442719,0.4472136,0.02236068,-2.2137073
296.565051,0.53,0.33,1.34164079,0.4472136,0.02236068,-2.2137073
333.434949,0.51,0.34,0.89442719,0.4472136,0.02236068,-2.2137073
0,0.49,0.34,0,1,0.02,-0.98
78.690068,0.81,0.41,0.98058068,0.19611614,0.0509902,-5.04802932
71.565051,0.8,0.38,0.9486833,0.31622777,0.03162278,-3.13065488
63.434949,0.78,0.34,0.89442719,0.4472136,0.04472136,-2.19134662
50.194429,0.73,0.28,6.401844,0.12803688,0.0781025,-7.73214718
45,0.69,0.24,0.70710678,0.70710678,0.05656854,-1.35764502
29.744881,0.62,0.2,5.82963253,0.12403473,0.08062258,-7.98163517
14.036243,0.54,0.18,3.15296313,0.24253563,0.08246211,-4.04064351
71.565051,0.72,0.4,0.9486833,0.31622777,0.06324555,-3.09903211
59.036243,0.69,0.35,2.22948161,0.17149859,0.05830952,-5.77264238
45,0.65,0.31,0.70710678,0.70710678,0.05656854,-1.35764502
30.963757,0.6,0.28,3.60147029,0.17149859,0.05830952,-5.77264238
18.434949,0.54,0.26,2.21359436,0.31622777,0.06324555,-3.09903211
296.565051,0.33,0.53,1.34164079,0.4472136,0.02236068,-2.2137073
333.434949,0.31,0.54,0.89442719,0.4472136,0.02236068,-2.2137073
206.565051,0.33,0.47,1.34164079,0.4472136,0.02236068,-2.2137073
243.434949,0.34,0.49,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.34,0.51,0,1,0.02,-0.98
348.690068,0.41,0.19,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.38,0.2,0.9486833,0.31622777,0.03162278,-3.13065488
333.434949,0.34,0.22,0.89442719,0.4472136,0.04472136,-2.19134662
320.194429,0.28,0.27,6.401844,0.12803688,0.0781025,-7.73214718
315,0.24,0.31,0.70710678,0.70710678,0.05656854,-1.35764502
299.744881,0.2,0.38,5.82963253,0.12403473,0.08062258,-7.98163517
284.036243,0.18,0.46,3.15296313,0.24253563,0.08246211,-4.04064351
341.565051,0.4,0.28,0.9486833,0.31622777,0.06324555,-3.09903211
329.036243,0.35,0.31,2.22948161,0.17149859,0.05830952,-5.77264238
315,0.31,0.35,0.70710678,0.70710678,0.05656854,-1.35764502
300.963757,0.28,0.4,3.60147029,0.17149859,0.05830952,-5.77264238
288.434949,0.26,0.46,2.21359436,0.31622777,0.06324555,-3.09903211
90,0.46,-0.31,0,1,0.62,-0.38
270,0.54,0.31,0,1,0.62,-0.38
180,0.31,0.46,0,1,0.62,-0.38
0,-0.31,0.54,0,1,0.62,-0.38
`),!1);m(d.ParsePatFile(`
*MAZE-01,MAZE-01 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
180,0.95,0.92,0,1,0.25,-0.75
90,0.95,0.55,1,1,0.37,-0.63
90,0.83,0.55,1,1,0.25,-0.75
0,0.7,0.42,0,1,0.11,-0.89
180,0.57,0.8,0,1,0.38,-0.62
270,0.57,0.92,1,1,0.12,-0.88
0,0.07,0.92,0,1,0.5,-0.5
90,0.95,0.29,1,1,0.13,-0.87
180,0.45,0.05,0,1,0.38,-0.62
0,0.7,0.29,0,1,0.25,-0.75
270,0.45,0.17,1,1,0.12,-0.88
0,0.19,0.17,0,1,0.26,-0.74
90,0.7,0.17,1,1,0.12,-0.88
270,0.19,0.8,1,1,0.63,-0.37
0,0.31,0.29,0,1,0.26,-0.74
270,0.31,0.68,1,1,0.39,-0.61
180,0.7,0.68,0,1,0.39,-0.61
270,0.7,0.92,1,1,0.24,-0.76
180,0.95,0.17,0,1,0.25,-0.75
90,0.95,0.05,1,1,0.12,-0.88
0,0.57,0.05,0,1,0.38,-0.62
270,0.57,0.42,1,1,0.37,-0.63
270,0.7,0.55,1,1,0.13,-0.87
0,0.45,0.55,0,1,0.25,-0.75
90,0.45,0.42,1,1,0.13,-0.87
90,0.07,0.05,1,1,0.87,-0.13
`),!1);m(d.ParsePatFile(`
*MAZE-02,MAZE-02 verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.89999999,0.1,1,1,0.1,-0.9
0,0.69999999,0.1,0,1,0.2,-0.8
90,0,0.3,1,1,0.5,-0.5
270,0.89999999,0.9,1,1,0.5,-0.5
270,0.29999999,0.9,1,1,0.1,-0.9
180,0.29999999,0.9,0,1,0.4,-0.6
0,0.19999999,0.2,0,1,0.15,-0.85
90,0.19999999,0.3,1,1,0.2,-0.8
180,0.49999999,0.3,0,1,0.3,-0.7
90,0.49999999,0.1,1,1,0.2,-0.8
270,0.69999999,0.2,1,1,0.1,-0.9
0,0.59999999,0.2,0,1,0.1,-0.9
270,0.59999999,0.3,1,1,0.1,-0.9
180,0.69999999,0.3,0,1,0.1,-0.9
270,0.59999999,0.6,1,1,0.1,-0.9
0,0.29999999,0.6,0,1,0.3,-0.7
90,0.29999999,0.4,1,1,0.2,-0.8
180,0.69999999,0.4,0,1,0.4,-0.6
180,0.59999999,0.5,0,1,0.2,-0.8
270,0.79999999,0.8,1,1,0.5,-0.5
0,0.09999999,0.1,0,1,0.4,-0.6
0,0.09999999,0.8,0,1,0.7,-0.3
270,0.09999999,0.2,1,1,0.1,-0.9
90,0.09999999,0.3,1,1,0.5,-0.5
180,0.09999999,0.2,0,1,0.3,-0.7
180,0,0.3,0,1,0.20000001,-0.79999999
180,0.29999999,0,0,1,0.3,-0.7
270,0.69999999,0.7,1,1,0.2,-0.8
0,0.39999999,0,0,1,0.4,-0.6
0,0.19999999,0.7,0,1,0.5,-0.5
90,0.19999999,0.6,1,1,0.1,-0.9
270,0.59999999,0.1,1,1,0.1,-0.9
0,0.39999999,0.9,0,1,0.4,-0.6
270,0.39999999,1,1,1,0.1,-0.9
`),!1);m(d.ParsePatFile(`
*MUDST,MUDST
0, 0,0, .5,.25, .25,-.25,0,-.25,0,-.25
`),!1);m(d.ParsePatFile(`
*NET3,NET3
0, 0,0, 0,.125
60, 0,0, 0,.125
120, 0,0, 0,.125
`),!1);m(d.ParsePatFile(`
*NET,NET
0, 0,0, 0,.125
90, 0,0, 0,.125
`),!1);m(d.ParsePatFile(`
*PLASTI,PLASTI
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
0, 0,.15625, 0,.25
`),!1);m(d.ParsePatFile(`
*PLAST,PLAST
0, 0,0, 0,.25
0, 0,.03125, 0,.25
0, 0,.0625, 0,.25
`),!1);m(d.ParsePatFile(`
*QCAD-LOGO,QCAD-LOGO
;By John Hyslop, Line 101 modified by CVH to fix left side of pencil drift when hatching far from Origin
;Developed in inch as imperial QCAD3 pattern
243.434949,0.8,0.36,0.89442719,0.4472136,0.02236068,-2.2137073
248.198591,0.82,0.41,3.15682075,0.18569534,0.05385165,-5.33131316
263.659808,0.83,0.5,0.99388373,0.11043153,0.09055385,-8.96483129
276.340192,0.82,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
290.556045,0.79,0.67,5.38389277,0.11704115,0.08544004,-8.45856371
310.601295,0.73,0.74,1.41004798,0.10846523,0.09219544,-9.12734901
324.462322,0.66,0.79,3.6036768,0.11624764,0.08602325,-8.51630201
336.801409,0.59,0.82,5.38356375,0.13130643,0.07615773,-7.53961537
351.869898,0.52,0.83,0.98994949,0.14142136,0.07071068,-7.00035713
26.565051,0.61,0.18,1.34164079,0.4472136,0.06708204,-2.16898594
7.125016,0.53,0.17,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.45,0.17,0,1,0.08,-0.92
344.054604,0.38,0.19,4.12081692,0.13736056,0.0728011,-7.20730879
336.801409,0.31,0.22,5.38356375,0.13130643,0.07615773,-7.53961537
320.194429,0.25,0.27,6.401844,0.12803688,0.0781025,-7.73214718
308.659808,0.21,0.32,1.40556386,0.15617376,0.06403124,-6.339093
293.198591,0.18,0.39,2.23220936,0.13130643,0.07615773,-7.53961537
285.945396,0.16,0.46,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.16,0.52,0,1,0.06,-0.94
261.869898,0.17,0.59,0.98994949,0.14142136,0.07071068,-7.00035713
246.801409,0.2,0.66,5.38356375,0.13130643,0.07615773,-7.53961537
234.462322,0.25,0.73,3.6036768,0.11624764,0.08602325,-8.51630201
219.805571,0.31,0.78,1.40840568,0.12803688,0.0781025,-7.73214718
206.565051,0.37,0.81,1.34164079,0.4472136,0.06708204,-2.16898594
195.945396,0.44,0.83,3.15929297,0.13736056,0.0728011,-7.20730879
180,0.48,0.83,0,1,0.04,-0.96
180,0.52,0.83,0,1,0.04,-0.96
233.130102,0.92,0.27,3.6,0.2,0.05,-4.95
248.198591,0.94,0.32,3.15682075,0.18569534,0.05385165,-5.33131316
248.198591,0.96,0.37,3.15682075,0.18569534,0.05385165,-5.33131316
260.537678,0.97,0.43,0.98639392,0.16439899,0.06082763,-6.0219349
261.869898,0.98,0.5,0.98994949,0.14142136,0.07071068,-7.00035713
278.130102,0.97,0.57,6.08111832,0.14142136,0.07071068,-7.00035713
279.462322,0.96,0.63,5.09636861,0.16439899,0.06082763,-6.0219349
288.434949,0.94,0.69,2.21359436,0.31622777,0.06324555,-3.09903211
299.744881,0.9,0.76,5.82963253,0.12403473,0.08062258,-7.98163517
308.659808,0.86,0.81,1.40556386,0.15617376,0.06403124,-6.339093
315,0.81,0.86,0.70710678,0.70710678,0.07071068,-1.34350288
321.340192,0.76,0.9,4.99756038,0.15617376,0.06403124,-6.339093
329.036243,0.71,0.93,2.22948161,0.17149859,0.05830952,-5.77264238
338.198591,0.66,0.95,3.15682075,0.18569534,0.05385165,-5.33131316
338.198591,0.61,0.97,3.15682075,0.18569534,0.05385165,-5.33131316
350.537678,0.55,0.98,0.98639392,0.16439899,0.06082763,-6.0219349
0,0.5,0.98,0,1,0.05,-0.95
0,0.45,0.98,0,1,0.05,-0.95
11.309932,0.4,0.97,4.11843884,0.19611614,0.0509902,-5.04802932
14.036243,0.36,0.96,3.15296313,0.24253563,0.04123106,-4.08187457
21.801409,0.31,0.94,2.22834406,0.18569534,0.05385165,-5.33131316
21.801409,0.26,0.92,2.22834406,0.18569534,0.05385165,-5.33131316
36.869898,0.22,0.89,1.4,0.2,0.05,-4.95
36.869898,0.18,0.86,1.4,0.2,0.05,-4.95
33.690068,0.75,0.09,1.38675049,0.2773501,0.03605551,-3.56949576
26.565051,0.69,0.06,1.34164079,0.4472136,0.06708204,-2.16898594
21.801409,0.64,0.04,2.22834406,0.18569534,0.05385165,-5.33131316
11.309932,0.59,0.03,4.11843884,0.19611614,0.0509902,-5.04802932
8.130102,0.52,0.02,6.08111832,0.14142136,0.07071068,-7.00035713
0,0.46,0.02,0,1,0.06,-0.94
350.537678,0.4,0.03,0.98639392,0.16439899,0.06082763,-6.0219349
348.690068,0.35,0.04,0.98058068,0.19611614,0.0509902,-5.04802932
338.198591,0.3,0.06,3.15682075,0.18569534,0.05385165,-5.33131316
333.434949,0.26,0.08,0.89442719,0.4472136,0.04472136,-2.19134662
323.130102,0.22,0.11,3.6,0.2,0.05,-4.95
323.130102,0.18,0.14,3.6,0.2,0.05,-4.95
315,0.14,0.18,0.70710678,0.70710678,0.05656854,-1.35764502
306.869898,0.11,0.22,1.4,0.2,0.05,-4.95
306.869898,0.08,0.26,1.4,0.2,0.05,-4.95
296.565051,0.06,0.3,1.34164079,0.4472136,0.04472136,-2.19134662
291.801409,0.04,0.35,2.22834406,0.18569534,0.05385165,-5.33131316
281.309932,0.03,0.4,4.11843884,0.19611614,0.0509902,-5.04802932
281.309932,0.02,0.45,4.11843884,0.19611614,0.0509902,-5.04802932
270,0.02,0.5,0,1,0.05,-0.95
270,0.02,0.55,0,1,0.05,-0.95
258.690068,0.03,0.6,0.98058068,0.19611614,0.0509902,-5.04802932
258.690068,0.04,0.65,0.98058068,0.19611614,0.0509902,-5.04802932
248.198591,0.06,0.7,3.15682075,0.18569534,0.05385165,-5.33131316
243.434949,0.08,0.74,0.89442719,0.4472136,0.04472136,-2.19134662
233.130102,0.11,0.78,3.6,0.2,0.05,-4.95
233.130102,0.14,0.82,3.6,0.2,0.05,-4.95
225,0.18,0.86,0.70710678,0.70710678,0.05656854,-1.35764502
0,0.35,0.21,0,1,0.29,-0.71
180,0.56,0.39,0,1,0.04,-0.96
270,0.56,0.44,0,1,0.05,-0.95
180,0.62,0.44,0,1,0.06,-0.94
270,0.62,0.48,0,1,0.04,-0.96
270,0.98,0.11,0,1,0.01,-0.99
270,0.98,0.13,0,1,0.02,-0.98
45,0.82,0.08,0.70710678,0.70710678,0.14142136,-1.27279221
225,0.9,0.2,0.70710678,0.70710678,0.14142136,-1.27279221
45,0.79,0.11,0.70710678,0.70710678,0.14142136,-1.27279221
0,0.544133,0.559775,0,1,0,-1
0,0.590298,0.634752,0,1,0,-1
0,0.640323,0.720624,0,1,0,-1
135,0.98,0.13,0.70710678,0.70710678,0.49497475,-0.91923882
56.309932,0.96,0.07,2.21880078,0.2773501,0.03605551,-3.56949576
45,0.94,0.05,0.70710678,0.70710678,0.02828427,-1.38592929
33.690068,0.91,0.03,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.88,0.02,2.21359436,0.31622777,0.03162278,-3.13065488
135.806929,0.88,0.02,-1.41407331,0.01991653,0.50209561,-49.70746523
289.983107,0.48,0.48,8.54357658,0.08543577,0.117047,-11.58765291
338.198591,0.53,0.52,3.15682075,0.18569534,0.1077033,-5.27746151
105.945396,0.48,0.48,3.15929297,0.13736056,0.0728011,-7.20730879
218.659808,0.53,0.52,1.40556386,0.15617376,0.06403124,-6.339093
336.801409,0.46,0.55,5.38356375,0.13130643,0.07615773,-7.53961537
56.309932,0.66,0.755,2.21880078,0.2773501,0.01802776,-3.58752352
239.036243,0.475,0.435,2.22948161,0.17149859,0.02915476,-5.80179714
236.309932,0.57,0.6,2.21880078,0.2773501,0.01802776,-3.58752352
236.309932,0.62,0.68,2.21880078,0.2773501,0.01802776,-3.58752352
0,0.46,0.41,0,1,0,-1
0,0.49,0.34,0,1,0.02,-0.98
0,0.54,0.34,0,1,0,-1
0,0.45,0.34,0,1,0,-1
0,0.36,0.34,0,1,0,-1
0,0.27,0.34,0,1,0,-1
180,0.24,0.34,0,1,0.03,-0.97
180,0.33,0.34,0,1,0.03,-0.97
180,0.42,0.34,0,1,0.03,-0.97
239.036243,0.45,0.39,2.22948161,0.17149859,0.05830952,-5.77264238
0,0.44,0.44,0,1,0.05,-0.95
341.565051,0.41,0.45,0.9486833,0.31622777,0.03162278,-3.13065488
315,0.39,0.47,0.70710678,0.70710678,0.02828427,-1.38592929
296.565051,0.38,0.49,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.38,0.49,0,1,0.21,-0.79
240.068488,0.57,0.82,8.06221498,0.02626129,0.38078866,-37.69807687
0,0.63,0.49,0,1,0.18,-0.82
240.255119,0.75,0.7,2.23262522,0.12403473,0.24186773,-7.82039002
`),!1);m(d.ParsePatFile(`
*REDBACK,REDBACK
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
63.434949,0.73,0.78,0.89442719,0.4472136,0.02236068,-2.2137073
33.690068,0.7,0.76,1.38675049,0.2773501,0.03605551,-3.56949576
75.963757,0.69,0.72,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.66,0.72,0,1,0.03,-0.97
108.434949,0.67,0.69,2.21359436,0.31622777,0.03162278,-3.13065488
90,0.67,0.68,0,1,0.01,-0.99
0,0.54,0.57,0,1,0.01,-0.99
270,0.54,0.58,0,1,0.01,-0.99
225,0.55,0.59,0.70710678,0.70710678,0.01414214,-1.40007143
180,0.56,0.59,0,1,0.01,-0.99
315,0.55,0.6,0.70710678,0.70710678,0.01414214,-1.40007143
15.524111,0.37,0.55,7.27991309,0.05352877,0.18681542,-18.49472628
0,0.35,0.55,0,1,0.02,-0.98
45,0.34,0.54,0.70710678,0.70710678,0.01414214,-1.40007143
0,0.31,0.54,0,1,0.03,-0.97
26.565051,0.19,0.48,1.34164079,0.4472136,0.13416408,-2.1019039
0,0.18,0.48,0,1,0.01,-0.99
33.690068,0.15,0.46,1.38675049,0.2773501,0.03605551,-3.56949576
32.005383,0.07,0.41,3.60399279,0.10599979,0.09433981,-9.33964132
45,0.06,0.4,0.70710678,0.70710678,0.01414214,-1.40007143
270,0.06,0.41,0,1,0.01,-0.99
225,0.07,0.42,0.70710678,0.70710678,0.01414214,-1.40007143
213.690068,0.16,0.48,1.38675049,0.2773501,0.10816654,-3.49738474
243.434949,0.17,0.5,0.89442719,0.4472136,0.02236068,-2.2137073
205.016893,0.32,0.57,2.23525175,0.06041221,0.16552945,-16.3874159
189.462322,0.38,0.58,5.09636861,0.16439899,0.06082763,-6.0219349
194.036243,0.42,0.59,3.15296313,0.24253563,0.04123106,-4.08187457
194.036243,0.5,0.61,3.15296313,0.24253563,0.08246211,-4.04064351
198.434949,0.56,0.63,2.21359436,0.31622777,0.06324555,-3.09903211
6.340192,0.47,0.62,8.0615014,0.11043153,0.09055385,-8.96483129
315,0.46,0.63,0.70710678,0.70710678,0.01414214,-1.40007143
45,0.45,0.62,0.70710678,0.70710678,0.01414214,-1.40007143
23.198591,0.38,0.59,2.23220936,0.13130643,0.07615773,-7.53961537
0,0.35,0.59,0,1,0.03,-0.97
45,0.32,0.56,0.70710678,0.70710678,0.04242641,-1.37178716
236.309932,0.34,0.59,2.21880078,0.2773501,0.03605551,-3.56949576
206.565051,0.36,0.6,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.42,0.63,1.34164079,0.4472136,0.06708204,-2.16898594
206.565051,0.44,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.46,0.65,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.57,0.65,0,1,0.11,-0.89
225,0.58,0.66,0.70710678,0.70710678,0.01414214,-1.40007143
321.340192,0.53,0.7,4.99756038,0.15617376,0.06403124,-6.339093
296.565051,0.52,0.72,1.34164079,0.4472136,0.02236068,-2.2137073
285.945396,0.5,0.79,3.15929297,0.13736056,0.0728011,-7.20730879
254.054604,0.52,0.86,4.12081692,0.13736056,0.0728011,-7.20730879
135,0.53,0.85,0.70710678,0.70710678,0.01414214,-1.40007143
90,0.53,0.82,0,1,0.03,-0.97
71.565051,0.52,0.79,0.9486833,0.31622777,0.03162278,-3.13065488
105.945396,0.54,0.72,3.15929297,0.13736056,0.0728011,-7.20730879
135,0.58,0.68,0.70710678,0.70710678,0.05656854,-1.35764502
180,0.59,0.68,0,1,0.01,-0.99
270,0.59,0.69,0,1,0.01,-0.99
270,0.59,0.71,0,1,0.02,-0.98
296.565051,0.58,0.73,1.34164079,0.4472136,0.02236068,-2.2137073
278.130102,0.57,0.8,6.08111832,0.14142136,0.07071068,-7.00035713
251.565051,0.58,0.83,0.9486833,0.31622777,0.03162278,-3.13065488
225,0.59,0.84,0.70710678,0.70710678,0.01414214,-1.40007143
225,0.6,0.85,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.61,0.87,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.63,0.91,0.89442719,0.4472136,0.04472136,-2.19134662
243.434949,0.65,0.95,0.89442719,0.4472136,0.04472136,-2.19134662
225,0.66,0.96,0.70710678,0.70710678,0.01414214,-1.40007143
168.690068,0.81,0.93,0.98058068,0.19611614,0.15297059,-4.94604893
355.601295,0.68,0.94,0.99705449,0.0766965,0.13038405,-12.90802076
56.309932,0.66,0.91,2.21880078,0.2773501,0.03605551,-3.56949576
56.309932,0.64,0.88,2.21880078,0.2773501,0.03605551,-3.56949576
63.434949,0.63,0.86,0.89442719,0.4472136,0.02236068,-2.2137073
56.309932,0.61,0.83,2.21880078,0.2773501,0.03605551,-3.56949576
71.565051,0.6,0.8,0.9486833,0.31622777,0.03162278,-3.13065488
90,0.6,0.79,0,1,0.01,-0.99
90,0.6,0.77,0,1,0.02,-0.98
90,0.6,0.74,0,1,0.03,-0.97
225,0.61,0.75,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.62,0.77,0.89442719,0.4472136,0.02236068,-2.2137073
225,0.63,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.65,0.79,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.67,0.8,1.34164079,0.4472136,0.02236068,-2.2137073
180,0.69,0.8,0,1,0.02,-0.98
180,0.71,0.8,0,1,0.02,-0.98
180,0.74,0.8,0,1,0.03,-0.97
153.434949,0.76,0.79,0.89442719,0.4472136,0.02236068,-2.2137073
135,0.77,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
135,0.56,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
26.565051,0.77,0.74,1.34164079,0.4472136,0.02236068,-2.2137073
56.309932,0.75,0.71,2.21880078,0.2773501,0.03605551,-3.56949576
14.036243,0.71,0.7,3.15296313,0.24253563,0.04123106,-4.08187457
90,0.71,0.67,0,1,0.03,-0.97
341.565051,0.68,0.68,0.9486833,0.31622777,0.03162278,-3.13065488
0,0.67,0.68,0,1,0.01,-0.99
90,0.56,0.55,0,1,0.01,-0.99
180,0.57,0.55,0,1,0.01,-0.99
225,0.58,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
270,0.58,0.57,0,1,0.01,-0.99
135,0.59,0.56,0.70710678,0.70710678,0.01414214,-1.40007143
74.475889,0.54,0.38,11.4016286,0.05352877,0.18681542,-18.49472628
90,0.54,0.36,0,1,0.02,-0.98
45,0.53,0.35,0.70710678,0.70710678,0.01414214,-1.40007143
90,0.53,0.32,0,1,0.03,-0.97
63.434949,0.47,0.2,0.89442719,0.4472136,0.13416408,-2.1019039
90,0.47,0.19,0,1,0.01,-0.99
56.309932,0.45,0.16,2.21880078,0.2773501,0.03605551,-3.56949576
57.994617,0.4,0.08,5.82998834,0.10599979,0.09433981,-9.33964132
45,0.39,0.07,0.70710678,0.70710678,0.01414214,-1.40007143
180,0.4,0.07,0,1,0.01,-0.99
225,0.41,0.08,0.70710678,0.70710678,0.01414214,-1.40007143
236.309932,0.47,0.17,2.21880078,0.2773501,0.10816654,-3.49738474
206.565051,0.49,0.18,1.34164079,0.4472136,0.02236068,-2.2137073
244.983107,0.56,0.33,14.31769361,0.06041221,0.16552945,-16.3874159
260.537678,0.57,0.39,0.98639392,0.16439899,0.06082763,-6.0219349
255.963757,0.58,0.43,0.9701425,0.24253563,0.04123106,-4.08187457
255.963757,0.6,0.51,0.9701425,0.24253563,0.08246211,-4.04064351
251.565051,0.62,0.57,0.9486833,0.31622777,0.06324555,-3.09903211
83.659808,0.61,0.48,0.99388373,0.11043153,0.09055385,-8.96483129
135,0.62,0.47,0.70710678,0.70710678,0.01414214,-1.40007143
45,0.61,0.46,0.70710678,0.70710678,0.01414214,-1.40007143
66.801409,0.58,0.39,5.38356375,0.13130643,0.07615773,-7.53961537
90,0.58,0.36,0,1,0.03,-0.97
45,0.55,0.33,0.70710678,0.70710678,0.04242641,-1.37178716
213.690068,0.58,0.35,1.38675049,0.2773501,0.03605551,-3.56949576
243.434949,0.59,0.37,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.62,0.43,0.89442719,0.4472136,0.06708204,-2.16898594
243.434949,0.63,0.45,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.64,0.47,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.64,0.58,0,1,0.11,-0.89
225,0.65,0.59,0.70710678,0.70710678,0.01414214,-1.40007143
128.659808,0.69,0.54,1.40556386,0.15617376,0.06403124,-6.339093
153.434949,0.71,0.53,0.89442719,0.4472136,0.02236068,-2.2137073
164.054604,0.78,0.51,4.12081692,0.13736056,0.0728011,-7.20730879
195.945396,0.85,0.53,3.15929297,0.13736056,0.0728011,-7.20730879
315,0.84,0.54,0.70710678,0.70710678,0.01414214,-1.40007143
0,0.81,0.54,0,1,0.03,-0.97
18.434949,0.78,0.53,2.21359436,0.31622777,0.03162278,-3.13065488
344.054604,0.71,0.55,4.12081692,0.13736056,0.0728011,-7.20730879
315,0.67,0.59,0.70710678,0.70710678,0.05656854,-1.35764502
270,0.67,0.6,0,1,0.01,-0.99
180,0.68,0.6,0,1,0.01,-0.99
180,0.7,0.6,0,1,0.02,-0.98
153.434949,0.72,0.59,0.89442719,0.4472136,0.02236068,-2.2137073
171.869898,0.79,0.58,0.98994949,0.14142136,0.07071068,-7.00035713
198.434949,0.82,0.59,2.21359436,0.31622777,0.03162278,-3.13065488
225,0.83,0.6,0.70710678,0.70710678,0.01414214,-1.40007143
225,0.84,0.61,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.86,0.62,1.34164079,0.4472136,0.02236068,-2.2137073
206.565051,0.9,0.64,1.34164079,0.4472136,0.04472136,-2.19134662
206.565051,0.94,0.66,1.34164079,0.4472136,0.04472136,-2.19134662
225,0.95,0.67,0.70710678,0.70710678,0.01414214,-1.40007143
281.309932,0.92,0.82,4.11843884,0.19611614,0.15297059,-4.94604893
94.398705,0.93,0.69,12.04135032,0.0766965,0.13038405,-12.90802076
33.690068,0.9,0.67,1.38675049,0.2773501,0.03605551,-3.56949576
33.690068,0.87,0.65,1.38675049,0.2773501,0.03605551,-3.56949576
26.565051,0.85,0.64,1.34164079,0.4472136,0.02236068,-2.2137073
33.690068,0.82,0.62,1.38675049,0.2773501,0.03605551,-3.56949576
18.434949,0.79,0.61,2.21359436,0.31622777,0.03162278,-3.13065488
0,0.78,0.61,0,1,0.01,-0.99
0,0.76,0.61,0,1,0.02,-0.98
0,0.73,0.61,0,1,0.03,-0.97
225,0.74,0.62,0.70710678,0.70710678,0.01414214,-1.40007143
206.565051,0.76,0.63,1.34164079,0.4472136,0.02236068,-2.2137073
225,0.77,0.64,0.70710678,0.70710678,0.01414214,-1.40007143
243.434949,0.78,0.66,0.89442719,0.4472136,0.02236068,-2.2137073
243.434949,0.79,0.68,0.89442719,0.4472136,0.02236068,-2.2137073
270,0.79,0.7,0,1,0.02,-0.98
270,0.79,0.72,0,1,0.02,-0.98
270,0.79,0.75,0,1,0.03,-0.97
296.565051,0.78,0.77,1.34164079,0.4472136,0.02236068,-2.2137073
315,0.77,0.78,0.70710678,0.70710678,0.01414214,-1.40007143
`),!1);m(d.ParsePatFile(`
*SACNCR,SACNCR
45, 0,0, 0,.09375
45, .06629126,0, 0,.09375, 0,-.09375
`),!1);m(d.ParsePatFile(`
*SCAFFOLD, verbose comment
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
270,0.76,0.84,1,1,0.02,-0.98
326.3099325,0.26,0.16,2.21880078,0.2773501,0.57688819,-3.02866309
90,0.24,0.49,1,1,0.02,-0.98
270,0.25,0.16,1,1,0.32,-0.68
146.3099325,0.24,0.84,2.21880078,0.2773501,0.5768882,-3.02866307
180,0.76,0.49,0,1,0.02,-0.98
270,0.74,0.18,1,1,0.02,-0.98
0,0.74,0.84,0,1,0.02,-0.98
90,0.25,0.51,1,1,0.31,-0.69
270,0.76,0.51,1,1,0.02,-0.98
0,0.26,0.17,0,1,0.48,-0.52
0,0.24,0.51,0,1,0.02,-0.98
180,0.76,0.18,0,1,0.02,-0.98
90,0.74,0.82,1,1,0.02,-0.98
212.855722,0.24,0.49,20.24844917,0.01750082,0.57140178,-56.56877673
147.144278,0.24,0.18,36.89172934,0.01750082,0.57140178,-56.56877673
213.6900675,0.24,0.16,1.38675049,0.2773501,0.57688818,-3.02866309
180,0.24,0.17,0,1,0.48,-0.52
0,0.26,0.83,0,1,0.48,-0.52
90,0.26,0.16,1,1,0.02,-0.98
180,0.76,0.82,0,1,0.02,-0.98
90,0.74,0.49,1,1,0.02,-0.98
147.144278,0.74,0.18,36.89172934,0.01750082,0.57140179,-56.56877672
0,0.24,0.16,0,1,0.02,-0.98
0,0.26,0.5,0,1,0.48,-0.52
270,0.26,0.84,1,1,0.02,-0.98
90,0.75,0.18,1,1,0.31,-0.69
212.855722,0.74,0.82,20.24844917,0.01750082,0.57140179,-56.56877672
180,0.26,0.49,0,1,0.02,-0.98
270,0.24,0.18,1,1,0.02,-0.98
0,0.24,0.84,0,1,0.02,-0.98
270,0.26,0.51,1,1,0.02,-0.98
270,0.75,0.82,1,1,0.31,-0.69
32.855722,0.26,0.18,20.24844917,0.01750082,0.57140179,-56.56877672
180,0.26,0.18,0,1,0.02,-0.98
0,0.74,0.51,0,1,0.02,-0.98
90,0.76,0.16,1,1,0.02,-0.98
90,0.24,0.82,1,1,0.02,-0.98
180,0.24,0.83,0,1,0.48,-0.52
147.144278,0.24,0.51,36.89172934,0.01750082,0.57140178,-56.56877673
180,0.24,0.5,0,1,0.48,-0.52
270,0.25,0.49,1,1,0.31,-0.69
212.855722,0.24,0.82,20.24844917,0.01750082,0.57140179,-56.56877672
0,0.74,0.16,0,1,0.02,-0.98
270,0.75,0.16,1,1,0.32,-0.68
180,0.26,0.82,0,1,0.02,-0.98
213.6900675,0.74,0.16,1.38675049,0.2773501,0.57688819,-3.02866309
327.144278,0.26,0.82,36.89172934,0.01750082,0.57140179,-56.56877672
`),!1);m(d.ParsePatFile(`
*SQUARE,SQUARE
0, 0,0, 0,.125, .125,-.125
90, 0,0, 0,.125, .125,-.125
`),!1);m(d.ParsePatFile(`
*SQUIGGLE-01,SQUIGGLE-01
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
45,0.11,-0.39,0.70710678,0.70710678,1.11722871,-0.29698485
56.309932,0.07,0.55,2.21880078,0.2773501,0.07211103,-3.53344025
81.869898,0.06,0.48,0.98994949,0.14142136,0.07071068,-7.00035713
99.462322,0.07,0.42,5.09636861,0.16439899,0.06082763,-6.0219349
123.690068,0.11,0.36,1.38675049,0.2773501,0.07211103,-3.53344025
146.309932,0.17,0.32,2.21880078,0.2773501,0.07211103,-3.53344025
170.537678,0.23,0.31,0.98639392,0.16439899,0.06082763,-6.0219349
188.130102,0.3,0.32,6.08111832,0.14142136,0.07071068,-7.00035713
213.690068,0.36,0.36,1.38675049,0.2773501,0.07211103,-3.53344025
225,0.65,0.65,0.70710678,0.70710678,0.41012193,-1.00409163
213.690068,0.71,0.69,1.38675049,0.2773501,0.07211103,-3.53344025
189.462322,0.77,0.7,5.09636861,0.16439899,0.06082763,-6.0219349
171.869898,0.84,0.69,0.98994949,0.14142136,0.07071068,-7.00035713
146.309932,0.9,0.65,2.21880078,0.2773501,0.07211103,-3.53344025
123.690068,0.94,0.59,1.38675049,0.2773501,0.07211103,-3.53344025
99.462322,0.95,0.53,5.09636861,0.16439899,0.06082763,-6.0219349
81.869898,0.94,0.46,0.98994949,0.14142136,0.07071068,-7.00035713
56.309932,0.9,0.4,2.21880078,0.2773501,0.07211103,-3.53344025
`),!1);m(d.ParsePatFile(`
*SQUIGGLE-02,SQUIGGLE-02
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
75.963757,0.99,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.97,0.12,0.89442719,0.4472136,0.04472136,-2.19134662
45,0.94,0.09,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.9,0.08,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.85,0.08,0,1,0.05,-0.95
345.963757,0.81,0.09,0.9701425,0.24253563,0.04123106,-4.08187457
315,0.78,0.12,0.70710678,0.70710678,0.04242641,-1.37178716
296.565051,0.76,0.16,1.34164079,0.4472136,0.04472136,-2.19134662
284.036243,0.75,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
281.309932,0.74,0.85,4.11843884,0.19611614,0.0509902,-5.04802932
303.690068,0.72,0.88,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.69,0.91,0.70710678,0.70710678,0.04242641,-1.37178716
345.963757,0.65,0.92,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.6,0.92,0,1,0.05,-0.95
14.036243,0.56,0.91,3.15296313,0.24253563,0.04123106,-4.08187457
45,0.53,0.88,0.70710678,0.70710678,0.04242641,-1.37178716
56.309932,0.51,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
78.690068,0.5,0.8,0.98058068,0.19611614,0.0509902,-5.04802932
75.963757,0.49,0.16,0.9701425,0.24253563,0.04123106,-4.08187457
63.434949,0.47,0.12,0.89442719,0.4472136,0.04472136,-2.19134662
45,0.44,0.09,0.70710678,0.70710678,0.04242641,-1.37178716
14.036243,0.4,0.08,3.15296313,0.24253563,0.04123106,-4.08187457
0,0.35,0.08,0,1,0.05,-0.95
345.963757,0.31,0.09,0.9701425,0.24253563,0.04123106,-4.08187457
315,0.28,0.12,0.70710678,0.70710678,0.04242641,-1.37178716
296.565051,0.26,0.16,1.34164079,0.4472136,0.04472136,-2.19134662
284.036243,0.25,0.2,3.15296313,0.24253563,0.04123106,-4.08187457
281.309932,0.24,0.85,4.11843884,0.19611614,0.0509902,-5.04802932
303.690068,0.22,0.88,1.38675049,0.2773501,0.03605551,-3.56949576
315,0.19,0.91,0.70710678,0.70710678,0.04242641,-1.37178716
345.963757,0.15,0.92,0.9701425,0.24253563,0.04123106,-4.08187457
0,0.1,0.92,0,1,0.05,-0.95
14.036243,0.06,0.91,3.15296313,0.24253563,0.04123106,-4.08187457
45,0.03,0.88,0.70710678,0.70710678,0.04242641,-1.37178716
56.309932,0.01,0.85,2.21880078,0.2773501,0.03605551,-3.56949576
78.690068,0,0.8,0.98058068,0.19611614,0.0509902,-5.04802932
270,0.75,0.8,0,1,0.6,-0.4
270,0.5,0.8,0,1,0.6,-0.4
270,0.25,0.8,0,1,0.6,-0.4
270,0,0.8,0,1,0.6,-0.4
`),!1);m(d.ParsePatFile(`
*STARS,STARS
0, 0,0, 0,.21650635, .125,-.125
60, 0,0, 0,.21650635, .125,-.125
120, .0625,.10825318, 0,.21650635, .125,-.125
`),!1);m(d.ParsePatFile(`
*STEEL,STEEL
45, 0,0, 0,.125
45, 0,.0625, 0,.125
`),!1);m(d.ParsePatFile(`
*SWAMP,SWAMP
0, 0,0, .5,.8660254, .125,-.875
90, .0625,0, .8660254,.5, .0625,-1.66955081
90, .078125,0, .8660254,.5, .05,-1.68205081
90, .046875,0, .8660254,.5, .05,-1.68205081
60, .09375,0, .5,.8660254, .04,-.96
120, .03125,0, .5,.8660254, .04,-.96
`),!1);m(d.ParsePatFile(`
*TRANS,TRANS
0, 0,0, 0,.25
0, 0,.125, 0,.25, .125,-.125
`),!1);m(d.ParsePatFile(`
*TRIANG,TRIANG
60, 0,0, .1875,.32475953, .1875,-.1875
120, 0,0, .1875,.32475953, .1875,-.1875
0, -.09375,.16237976, .1875,.32475953, .1875,-.1875
`),!1);m(d.ParsePatFile(`
*TRI-OVERLAP,TRI-OVERLAP verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
59.641885,0.09000001,0.15,47.50789248,0.01232691,0.81123363,-80.31212922
300.358115,0.5,0.85000001,33.61547037,0.01232691,0.81123363,-80.31212922
180,0.35942857,0.61,0,1,0.71885753,-0.28114247
59.036243,0.89518072,0.17530121,2.22948161,0.17149859,0.20373205,-5.62721984
180,0.91,0.15,0,1,0.81999999,-0.18000001
300.963757,0,0.35,3.60147029,0.17149859,0.20373206,-5.62721983
300.784147,0.12,0.15,5.83092324,0.01827876,0.5470832,-54.16123426
239.215853,0.88,0.15,48.87739422,0.01827876,0.5470832,-54.16123426
`),!1);m(d.ParsePatFile(`
*WEATHERBOARD,WEATHERBOARD
; By John Hyslop,    Manually Entered QCAD3 pattern
; Developed in inch as imperial QCAD3 pattern
; Imperial Hatch Scale 1 Makes 6inch horizontally placed boards
; with a 0.5in offset line to simulate a rounded edge
0,0,0,0,6
0,0,0.5,0,6
`),!1);m(d.ParsePatFile(`
*WEAVING,WEAVING
;By John Hyslop,    Using AutoCAD Lisp Tool
;Developed in inch as imperial QCAD3 pattern
90,0.9,0.2,0,1,0.05,-0.95
75.963757,0.88,0.12,0.9701425,0.24253563,0.08246211,-4.04064351
66.801409,0.85,0.05,5.38356375,0.13130643,0.07615773,-7.53961537
54.462322,0.8,-0.02,3.6036768,0.11624764,0.08602325,-8.51630201
56.309932,0.76,-0.08,2.21880078,0.2773501,0.07211103,-3.53344025
90,0.79,0.22,0,1,0.07,-0.93
80.537678,0.78,0.16,0.98639392,0.16439899,0.06082763,-6.0219349
63.434949,0.75,0.1,0.89442719,0.4472136,0.06708204,-2.16898594
56.309932,0.71,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
56.309932,0.67,-0.02,2.21880078,0.2773501,0.07211103,-3.53344025
333.434949,0.86,0.27,0.89442719,0.4472136,0.06708204,-2.16898594
344.054604,0.79,0.29,4.12081692,0.13736056,0.0728011,-7.20730879
0,0.71,0.29,0,1,0.08,-0.92
9.462322,0.65,0.28,5.09636861,0.16439899,0.06082763,-6.0219349
26.565051,0.59,0.25,1.34164079,0.4472136,0.06708204,-2.16898594
38.659808,0.54,0.21,1.40556386,0.15617376,0.06403124,-6.339093
36.869898,0.46,0.15,1.4,0.2,0.1,-4.9
20.556045,0.38,0.12,5.38389277,0.11704115,0.08544004,-8.45856371
330.255119,0.91,0.37,2.23262522,0.12403473,0.08062258,-7.98163517
344.054604,0.84,0.39,4.12081692,0.13736056,0.0728011,-7.20730879
352.874984,0.76,0.4,0.99227788,0.12403473,0.08062258,-7.98163517
0,0.69,0.4,0,1,0.07,-0.93
14.036243,0.61,0.38,3.15296313,0.24253563,0.08246211,-4.04064351
26.565051,0.53,0.34,1.34164079,0.4472136,0.08944272,-2.14662526
33.690068,0.47,0.3,1.38675049,0.2773501,0.07211103,-3.53344025
35.537678,0.4,0.25,4.99864847,0.11624764,0.08602325,-8.51630201
0,0.2,0.1,0,1,0.05,-0.95
348.690068,0.15,0.11,0.98058068,0.19611614,0.0509902,-5.04802932
341.565051,0.12,0.12,0.9486833,0.31622777,0.03162278,-3.13065488
336.801409,0.05,0.15,5.38356375,0.13130643,0.07615773,-7.53961537
326.309932,-0.01,0.19,2.21880078,0.2773501,0.07211103,-3.53344025
324.462322,-0.08,0.24,3.6036768,0.11624764,0.08602325,-8.51630201
0,0.22,0.21,0,1,0.07,-0.93
350.537678,0.16,0.22,0.98639392,0.16439899,0.06082763,-6.0219349
333.434949,0.1,0.25,0.89442719,0.4472136,0.06708204,-2.16898594
326.309932,0.04,0.29,2.21880078,0.2773501,0.07211103,-3.53344025
326.309932,-0.02,0.33,2.21880078,0.2773501,0.07211103,-3.53344025
60.255119,0.63,0.91,2.23262522,0.12403473,0.08062258,-7.98163517
180,0.79,0.79,0,1,0.08,-0.92
164.054604,0.86,0.77,4.12081692,0.13736056,0.0728011,-7.20730879
153.434949,0.92,0.74,0.89442719,0.4472136,0.06708204,-2.16898594
330.255119,0.91,0.87,2.23262522,0.12403473,0.08062258,-7.98163517
345.963757,0.83,0.89,0.9701425,0.24253563,0.08246211,-4.04064351
352.874984,0.75,0.9,0.99227788,0.12403473,0.08062258,-7.98163517
60.255119,0.72,0.85,2.23262522,0.12403473,0.08062258,-7.98163517
80.537678,0.71,0.79,0.98639392,0.16439899,0.06082763,-6.0219349
90,0.71,0.71,0,1,0.08,-0.92
104.036243,0.73,0.63,3.15296313,0.24253563,0.08246211,-4.04064351
116.565051,0.76,0.57,1.34164079,0.4472136,0.06708204,-2.16898594
129.805571,0.81,0.51,1.40840568,0.12803688,0.0781025,-7.73214718
123.690068,0.85,0.45,1.38675049,0.2773501,0.07211103,-3.53344025
113.198591,0.88,0.38,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.71,0.46,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.66,0.53,4.99864847,0.11624764,0.08602325,-8.51630201
299.744881,0.62,0.6,5.82963253,0.12403473,0.08062258,-7.98163517
285.945396,0.6,0.67,3.15929297,0.13736056,0.0728011,-7.20730879
270,0.6,0.76,0,1,0.09,-0.91
74.054604,0.61,0.84,4.12081692,0.13736056,0.0728011,-7.20730879
82.874984,0.6,0.76,0.99227788,0.12403473,0.08062258,-7.98163517
39.805571,0.54,0.71,1.40840568,0.12803688,0.0781025,-7.73214718
35.537678,0.47,0.66,4.99864847,0.11624764,0.08602325,-8.51630201
33.690068,0.41,0.62,1.38675049,0.2773501,0.07211103,-3.53344025
15.945396,0.34,0.6,3.15929297,0.13736056,0.0728011,-7.20730879
6.340192,0.25,0.59,8.0615014,0.11043153,0.09055385,-8.96483129
350.537678,0.19,0.6,0.98639392,0.16439899,0.06082763,-6.0219349
344.054604,0.12,0.62,4.12081692,0.13736056,0.0728011,-7.20730879
23.198591,0.55,0.85,2.23220936,0.13130643,0.07615773,-7.53961537
29.744881,0.48,0.81,5.82963253,0.12403473,0.08062258,-7.98163517
39.805571,0.42,0.76,1.40840568,0.12803688,0.0781025,-7.73214718
29.744881,0.35,0.72,5.82963253,0.12403473,0.08062258,-7.98163517
7.125016,0.27,0.71,7.06997987,0.12403473,0.08062258,-7.98163517
0,0.21,0.71,0,1,0.06,-0.94
344.054604,0.14,0.73,4.12081692,0.13736056,0.0728011,-7.20730879
333.434949,0.1,0.75,0.89442719,0.4472136,0.04472136,-2.19134662
234.462322,0.31,-0.01,3.6036768,0.11624764,0.08602325,-8.51630201
240.255119,0.35,0.06,2.23262522,0.12403473,0.08062258,-7.98163517
243.434949,0.39,0.14,0.89442719,0.4472136,0.08944272,-2.14662526
262.874984,0.4,0.22,0.99227788,0.12403473,0.08062258,-7.98163517
270,0.4,0.3,0,1,0.08,-0.92
282.528808,0.38,0.39,4.1216787,0.10846523,0.09219544,-9.12734901
293.198591,0.35,0.46,2.23220936,0.13130643,0.07615773,-7.53961537
309.805571,0.3,0.52,1.40840568,0.12803688,0.0781025,-7.73214718
305.537678,0.25,0.59,4.99864847,0.11624764,0.08602325,-8.51630201
270,0.21,0.78,0,1,0.07,-0.93
254.054604,0.23,0.85,4.12081692,0.13736056,0.0728011,-7.20730879
246.801409,0.26,0.92,5.38356375,0.13130643,0.07615773,-7.53961537
236.309932,0.21,0.04,2.21880078,0.2773501,0.07211103,-3.53344025
234.462322,0.26,0.11,3.6036768,0.11624764,0.08602325,-8.51630201
249.443955,0.29,0.19,3.16011097,0.11704115,0.08544004,-8.45856371
270,0.29,0.27,0,1,0.08,-0.92
278.130102,0.28,0.34,6.08111832,0.14142136,0.07071068,-7.00035713
296.565051,0.24,0.42,1.34164079,0.4472136,0.08944272,-2.14662526
309.805571,0.19,0.48,1.40840568,0.12803688,0.0781025,-7.73214718
303.690068,0.15,0.54,1.38675049,0.2773501,0.07211103,-3.53344025
290.556045,0.12,0.62,5.38389277,0.11704115,0.08544004,-8.45856371
341.565051,0.06,0.64,0.9486833,0.31622777,0.06324555,-3.09903211
324.462322,-0.01,0.69,3.6036768,0.11624764,0.08602325,-8.51630201
324.462322,-0.08,0.74,3.6036768,0.11624764,0.08602325,-8.51630201
146.309932,0.04,0.79,2.21880078,0.2773501,0.07211103,-3.53344025
146.309932,0.1,0.75,2.21880078,0.2773501,0.07211103,-3.53344025
262.874984,0.11,0.83,0.99227788,0.12403473,0.08062258,-7.98163517
255.963757,0.13,0.91,0.9701425,0.24253563,0.08246211,-4.04064351
240.255119,0.17,0.98,2.23262522,0.12403473,0.08062258,-7.98163517
`),!1);m(d.ParsePatFile(`
*WIRE-FENCE,WIRE-FENCE verbose
;By John Hyslop,    Tile2Hatch tool \xA9 CVH 2020
;Developed in inch as imperial QCAD3 pattern
315,0.46,0.5,0.70710678,0.70710678,0.04673053,-1.36748303
315,0.52571429,0.56428571,0.70710678,0.70710678,0.04848732,-1.36572624
3.731397,0.50267394,0.56278308,15.03328073,0.02169305,0.02308929,-46.074633
183.17983,0.46361415,0.56023571,17.02929602,0.05547002,0.90614559,-17.12161079
183.17983,0.46120401,0.52006684,17.02929602,0.05547002,0.90600202,-17.12175436
153.434949,0.52,0.51,0.89442719,0.4472136,0.02236068,-2.2137073
266.593556,0.52,0.51,17.02938222,0.01188373,1.01178655,-83.1368914
266.593556,0.56,0.53,17.02938222,0.01188373,1.01178655,-83.1368914
2.602562,0.49304348,0.46695652,21.02374701,0.04540766,0.02449081,-21.99822474
`),!1);m(d.ParsePatFile(`
*XMASTREE-01,XMASTREE-01
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.95,0,1,0.04,-0.96
90,0.04,0.82,0,1,0.13,-0.87
180,0.33,0.82,0,1,0.29,-0.71
49.763642,0.22,0.69,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,0.69,0,1,0.06,-0.94
51.340192,0.16,0.54,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.54,0,1,0.06,-0.94
52.431408,0.12,0.41,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.41,0,1,0.05,-0.95
53.130102,0.08,0.29,3.6,0.2,0.15,-4.85
180,0.13,0.29,0,1,0.05,-0.95
53.972627,0.05,0.18,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.18,0,1,0.05,-0.95
54.462322,0,0.04,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.95,0,1,0.04,-0.96
90,0.96,0.82,0,1,0.13,-0.87
0,0.67,0.82,0,1,0.29,-0.71
130.236358,0.78,0.69,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,0.69,0,1,0.06,-0.94
128.659808,0.84,0.54,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.54,0,1,0.06,-0.94
127.568592,0.88,0.41,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.41,0,1,0.05,-0.95
126.869898,0.92,0.29,1.4,0.2,0.15,-4.85
0,0.87,0.29,0,1,0.05,-0.95
126.027373,0.95,0.18,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.18,0,1,0.05,-0.95
125.537678,1,0.04,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.04,0,1,0.04,-0.96
270,0.46,0.17,0,1,0.13,-0.87
0,0.17,0.17,0,1,0.29,-0.71
229.763642,0.28,0.3,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.3,0,1,0.06,-0.94
231.340192,0.34,0.45,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.45,0,1,0.06,-0.94
232.431408,0.38,0.58,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.58,0,1,0.05,-0.95
233.130102,0.42,0.7,3.6,0.2,0.15,-4.85
0,0.37,0.7,0,1,0.05,-0.95
233.972627,0.45,0.81,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.81,0,1,0.05,-0.95
234.462322,0.5,0.95,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.04,0,1,0.04,-0.96
270,0.54,0.17,0,1,0.13,-0.87
180,0.83,0.17,0,1,0.29,-0.71
310.236358,0.72,0.3,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.3,0,1,0.06,-0.94
308.659808,0.66,0.45,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.45,0,1,0.06,-0.94
307.568592,0.62,0.58,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.58,0,1,0.05,-0.95
306.869898,0.58,0.7,1.4,0.2,0.15,-4.85
180,0.63,0.7,0,1,0.05,-0.95
306.027373,0.55,0.81,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.81,0,1,0.05,-0.95
305.537678,0.5,0.95,4.99864847,0.11624764,0.17204651,-8.43027876
`),!1);m(d.ParsePatFile(`
*XMASTREE-02,XMASTREE-02
;By John Hyslop
;Developed in inch as imperial QCAD3 pattern
180,0.04,0.26,0,1,0.04,-0.96
90,0.04,0.13,0,1,0.13,-0.87
180,0.33,0.13,0,1,0.29,-0.71
49.763642,0.22,0,7.81002892,0.05872202,0.17029386,-16.8590925
180,0.28,1,0,1,0.06,-0.94
51.340192,0.16,0.85,4.99756038,0.15617376,0.19209373,-6.21103051
180,0.22,0.85,0,1,0.06,-0.94
52.431408,0.12,0.72,4.99962824,0.06097108,0.16401219,-16.23720727
180,0.17,0.72,0,1,0.05,-0.95
53.130102,0.08,0.6,3.6,0.2,0.15,-4.85
180,0.13,0.6,0,1,0.05,-0.95
53.972627,0.05,0.49,8.60201108,0.07352146,0.13601471,-13.4654558
180,0.1,0.49,0,1,0.05,-0.95
54.462322,0,0.35,3.6036768,0.11624764,0.17204651,-8.43027876
0,0.96,0.26,0,1,0.04,-0.96
90,0.96,0.13,0,1,0.13,-0.87
0,0.67,0.13,0,1,0.29,-0.71
130.236358,0.78,0,9.21935745,0.05872202,0.17029386,-16.8590925
0,0.72,1,0,1,0.06,-0.94
128.659808,0.84,0.85,1.40556386,0.15617376,0.19209373,-6.21103051
0,0.78,0.85,0,1,0.06,-0.94
127.568592,0.88,0.72,11.40159123,0.06097108,0.16401219,-16.23720727
0,0.83,0.72,0,1,0.05,-0.95
126.869898,0.92,0.6,1.4,0.2,0.15,-4.85
0,0.87,0.6,0,1,0.05,-0.95
126.027373,0.95,0.49,4.99945943,0.07352146,0.13601471,-13.4654558
0,0.9,0.49,0,1,0.05,-0.95
125.537678,1,0.35,4.99864847,0.11624764,0.17204651,-8.43027876
0,0.46,0.09,0,1,0.04,-0.96
270,0.46,0.22,0,1,0.13,-0.87
0,0.17,0.22,0,1,0.29,-0.71
229.763642,0.28,0.35,7.81002892,0.05872202,0.17029386,-16.8590925
0,0.22,0.35,0,1,0.06,-0.94
231.340192,0.34,0.5,4.99756038,0.15617376,0.19209373,-6.21103051
0,0.28,0.5,0,1,0.06,-0.94
232.431408,0.38,0.63,4.99962824,0.06097108,0.16401219,-16.23720727
0,0.33,0.63,0,1,0.05,-0.95
233.130102,0.42,0.75,3.6,0.2,0.15,-4.85
0,0.37,0.75,0,1,0.05,-0.95
233.972627,0.45,0.86,8.60201108,0.07352146,0.13601471,-13.4654558
0,0.4,0.86,0,1,0.05,-0.95
234.462322,0.5,1,3.6036768,0.11624764,0.17204651,-8.43027876
180,0.54,0.09,0,1,0.04,-0.96
270,0.54,0.22,0,1,0.13,-0.87
180,0.83,0.22,0,1,0.29,-0.71
310.236358,0.72,0.35,9.21935745,0.05872202,0.17029386,-16.8590925
180,0.78,0.35,0,1,0.06,-0.94
308.659808,0.66,0.5,1.40556386,0.15617376,0.19209373,-6.21103051
180,0.72,0.5,0,1,0.06,-0.94
307.568592,0.62,0.63,11.40159123,0.06097108,0.16401219,-16.23720727
180,0.67,0.63,0,1,0.05,-0.95
306.869898,0.58,0.75,1.4,0.2,0.15,-4.85
180,0.63,0.75,0,1,0.05,-0.95
306.027373,0.55,0.86,4.99945943,0.07352146,0.13601471,-13.4654558
180,0.6,0.86,0,1,0.05,-0.95
305.537678,0.5,1,4.99864847,0.11624764,0.17204651,-8.43027876
`),!1);m(d.ParsePatFile(`
*ZIGZAG,ZIGZAG
0, 0,0, .125,.125, .125,-.125
90, .125,0, .125,.125, .125,-.125
`),!1);var vn=new Set,Ps=!1;function Os(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length;vn.size&&vn.clear();let s=Io(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o=0,l=0,c=0;if(i&&(s=H3(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let u=t;u<r;u+=t){let p=n[u],g=n[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Rs(s,a,o,l,c),a}function Io(n,e,t,i,r){let s=null;if(r===tc(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Ro(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Ro(a/i|0,n[a],n[a+1],s);return s&&yn(s,s.next)&&(Sn(s),s=s.next),s}function Zt(n,e=n){let t=e===n,i=n,r;do r=!1,i!==i.next&&(vn.size===0||!vn.has(i))&&(yn(i,i.next)||me(i.prev,i,i.next)===0)?((t||i===e)&&(e=i.prev),Ps=!0,Sn(i),i=i.prev,r=!0):(t||i!==e)&&(i=i.next,r=!t);while(r||i!==e);return e}function Rs(n,e,t,i,r){r&&Z3(n,t,i,r);let s=n,a=!1;for(;n.prev!==n.next;){let o=n.prev,l=n.next;if(me(o,n,l)<0&&(r?B3(n,t,i,r):k3(n))){e.push(o.i,n.i,l.i),Sn(n),n=l,s=l;continue}if(n=l,n===s){if(Ps=!1,n=Zt(n),Ps){s=n;continue}if(!a){n=G3(n,e),s=n,a=!0;continue}z3(n,e,t,i,r);break}}}function k3(n){let e=n.prev,t=n,i=n.next,r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(r,s,a),f=Math.min(o,l,c),u=Math.max(r,s,a),p=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&!(r===g.x&&o===g.y)&&Fi(r,o,s,l,a,c,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function B3(n,e,t,i){let r=n.prev,s=n,a=n.next,o=r.x,l=s.x,c=a.x,h=r.y,f=s.y,u=a.y,p=Math.min(o,l,c),g=Math.min(h,f,u),x=Math.max(o,l,c),v=Math.max(h,f,u),y=Ds(p,g,e,t,i),M=Ds(x,v,e,t,i),_=n.prevZ;for(;_&&_.z>=y;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=v&&_!==a&&!(o===_.x&&h===_.y)&&Fi(o,h,l,f,c,u,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.prevZ}let S=n.nextZ;for(;S&&S.z<=M;){if(S.x>=p&&S.x<=x&&S.y>=g&&S.y<=v&&S!==a&&!(o===S.x&&h===S.y)&&Fi(o,h,l,f,c,u,S.x,S.y)&&me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function G3(n,e){let t=n,i=!1;do{let r=t.prev,s=t.next.next;Do(r,t,t.next,s,!1)&&_n(r,s)&&_n(s,r)&&(e.push(r.i,t.i,s.i),Sn(t),Sn(t.next),t=n=s,i=!0),t=t.next}while(t!==n);return i?Zt(t):t}function z3(n,e,t,i,r){let s=n;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&$3(s,a)){let o=No(s,a);s=Zt(s,s.next),o=Zt(o,o.next),Rs(s,e,t,i,r),Rs(o,e,t,i,r);return}a=a.next}s=s.next}while(s!==n)}var Is=!1;function H3(n,e,t,i){let r=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Io(n,o,l,i,!1);c===c.next&&vn.add(c),r.push(Q3(c))}r.sort(V3),X3(n.length/i,e.length),Fo(t,t),Is=!0;for(let s=0;s<r.length;s++)t=W3(r[s],t);return Is=!1,Zt(t)}function V3(n,e){return n.x-e.x||n.y-e.y||(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)}function W3(n,e){let t=Y3(n,e);if(!t)return e;let i=No(t,n),r=i.next;return Fo(t,r.next),Zt(i,i.next),Zt(t,t.next)}var Lo=16,fe=new Float64Array(0),Li=0,Ls=[],Fs=[];function X3(n,e){let t=Math.ceil((n+2*e)/Lo)+e+2;fe.length<t*4&&(fe=new Float64Array(t*4)),Li=0}function Fo(n,e){let t=n;do{let i=Li++;Ls[i]=t;let r=t.x,s=t.y,a=t.x,o=t.y,l=0;do{let h=t.next;t.z=i,h.x<r&&(r=h.x),h.x>a&&(a=h.x),h.y<s&&(s=h.y),h.y>o&&(o=h.y),t=h}while(++l<Lo&&t!==e);Fs[i]=t;let c=i*4;fe[c]=r,fe[c+1]=s,fe[c+2]=a,fe[c+3]=o}while(t!==e)}function q3(n,e){let t=n.z*4;e.x<fe[t]&&(fe[t]=e.x),e.y<fe[t+1]&&(fe[t+1]=e.y),e.x>fe[t+2]&&(fe[t+2]=e.x),e.y>fe[t+3]&&(fe[t+3]=e.y)}function Co(n){let e=Fs[n];for(;e.prev.next!==e;)e=e.next;return Fs[n]=e,e}function Po(n){let e=Ls[n];for(;e.prev.next!==e;)e=e.next;return Ls[n]=e,e}function Y3(n,e){let t=e,i=n.x,r=n.y,s=-1/0,a;if(yn(n,t))return t;for(let u=0,p=0;u<Li;u++,p+=4){if(r<fe[p+1]||r>fe[p+3]||fe[p]>i||fe[p+2]<=s)continue;let g=Co(u);t=Po(u);do{if(t.prev.next===t){if(yn(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let x=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=i&&x>s&&(s=x,a=t.x<t.next.x?t:t.next,x===i))return a}}t=t.next}while(t!==g)}if(!a)return null;let o=a.x,l=a.y,c=Math.min(r,l),h=Math.max(r,l),f=1/0;for(let u=0,p=0;u<Li;u++,p+=4){if(fe[p+2]<o||fe[p]>i||fe[p+3]<c||fe[p+1]>h)continue;let g=Co(u);t=Po(u);do{if(t.prev.next===t&&i>=t.x&&t.x>=o&&i!==t.x&&Fi(r<l?i:s,r,o,l,r<l?s:i,r,t.x,t.y)){let x=Math.abs(r-t.y)/(i-t.x);(_n(t,n)||t.y===r&&t.next.y===r&&t.next.x>i)&&(x<f||x===f&&(t.x>a.x||t.x===a.x&&J3(a,t)))&&(a=t,f=x)}t=t.next}while(t!==g)}return a}function J3(n,e){return me(n.prev,n,e.prev)<0&&me(e.next,n,n.next)<0}var ke=[],b0=[],Jt=new Uint32Array(0),gn=new Uint32Array(0),xn=new Uint32Array(256);function Z3(n,e,t,i){let r=n,s=0;do r.z=Ds(r.x,r.y,e,t,i),ke[s++]=r,r=r.next;while(r!==n);K3(s);let a=null;for(let o=0;o<s;o++){let l=ke[o];l.prevZ=a,a&&(a.nextZ=l),a=l}a.nextZ=null,ke.fill(null,0,s),b0.fill(null,0,s)}function K3(n){if(n<=32){for(let e=1;e<n;e++){let t=ke[e],i=t.z,r=e-1;for(;r>=0&&ke[r].z>i;)ke[r+1]=ke[r],r--;ke[r+1]=t}return}Jt.length<n&&(Jt=new Uint32Array(n),gn=new Uint32Array(n),b0=new Array(n));for(let e=0;e<n;e++)Jt[e]=ke[e].z;Ri(n,ke,Jt,b0,gn,0),Ri(n,b0,gn,ke,Jt,8),Ri(n,ke,Jt,b0,gn,16),Ri(n,b0,gn,ke,Jt,24)}function Ri(n,e,t,i,r,s){xn.fill(0);for(let o=0;o<n;o++)xn[t[o]>>>s&255]++;let a=0;for(let o=0;o<256;o++){let l=xn[o];xn[o]=a,a+=l}for(let o=0;o<n;o++){let l=t[o],c=xn[l>>>s&255]++;i[c]=e[o],r[c]=l}}function Ds(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Q3(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fi(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function $3(n,e){let t=yn(n,e)&&me(n.prev,n,n.next)>0&&me(e.prev,e,e.next)>0;return n.next.i!==e.i&&(t||_n(n,e)&&_n(e,n)&&(me(n.prev,n,e.prev)!==0||me(n,e.prev,e)!==0))&&!j3(n,e)&&(t||ec(n,e))}function me(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yn(n,e){return n.x===e.x&&n.y===e.y}function Do(n,e,t,i,r=!0){let s=me(n,e,t),a=me(n,e,i),o=me(t,i,n),l=me(t,i,e);return(s>0&&a<0||s<0&&a>0)&&(o>0&&l<0||o<0&&l>0)?!0:r?!!(s===0&&Ii(n,t,e)||a===0&&Ii(n,i,e)||o===0&&Ii(t,n,i)||l===0&&Ii(t,e,i)):!1}function Ii(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function j3(n,e){let t=Math.min(n.x,e.x),i=Math.max(n.x,e.x),r=Math.min(n.y,e.y),s=Math.max(n.y,e.y),a=n;do{let o=a.next;if(a.x>i&&o.x>i||a.x<t&&o.x<t||a.y>s&&o.y>s||a.y<r&&o.y<r){a=o;continue}if(a.i!==n.i&&o.i!==n.i&&a.i!==e.i&&o.i!==e.i&&Do(a,o,n,e))return!0;a=o}while(a!==n);return!1}function _n(n,e){return me(n.prev,n,n.next)<0?me(n,e,n.next)>=0&&me(n,n.prev,e)>=0:me(n,e,n.prev)<0||me(n,n.next,e)<0}function ec(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do{let a=t.next;t.y>s!=a.y>s&&r<(a.x-t.x)*(s-t.y)/(a.y-t.y)+t.x&&(i=!i),t=a}while(t!==n);return i}function No(n,e){let t=Ns(n.i,n.x,n.y),i=Ns(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Ro(n,e,t,i){let r=Ns(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Sn(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ),Is&&q3(n.prev,n.next)}function Ns(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function tc(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var M0=65536,nc=15*Math.PI/180,Oo="__point_shape",ic=1024,Uo=4,rc=2e4,sc=2e4,ko={DIMTXT:function(){return 2.5},DIMASZ:2.5,DIMCLRD:0,DIMCLRE:0,DIMCLRT:0,DIMDEC:2,DIMDLE:0,DIMDSEP:46,DIMEXE:1.25,DIMEXO:.625,DIMFXL:1,DIMFXLON:!1,DIMGAP:.625,DIMLFAC:1,DIMRND:0,DIMSAH:0,DIMSCALE:1,DIMSD1:0,DIMSD2:0,DIMSE1:0,DIMSE2:0,DIMSOXD:!1,DIMTSZ:0,DIMZIN:8};function Ni(n,e){if(!Number.isFinite(n?.x)||!Number.isFinite(n?.y))throw new Error(`Non-finite ${e} (${n?.x}, ${n?.y})`)}var bn=class n{constructor(e){this.options=Object.create(n.DefaultOptions),e&&Object.assign(this.options,e.sceneOptions),this.origin=null,this.batches=new dn((t,i)=>t.key.Compare(i.key)),this.layers=new Map,this.blocks=new Map,this.dimStyles=new Map,this.vars=new Map,this.fontStyles=new Map,this.inserts=new Map,this.bounds=null,this.pointShapeBlock=null,this.numBlocksFlattened=0,this.numEntitiesFiltered=0,this.numEntitiesSkipped=0}async Build(e,t){let i=e.header||{};for(let[r,s]of Object.entries(i))r.startsWith("$")&&this.vars.set(r.slice(1),s);if(this.angBase=this.vars.get("ANGBASE")??0,this.angDir=this.vars.get("ANGDIR")??0,this.pdMode=this.vars.get("PDMODE")??0,this.pdSize=this.vars.get("PDSIZE")??0,this.isMetric=(this.vars.get("MEASUREMENT")??1)==1,e.tables&&e.tables.layer)for(let[,r]of Object.entries(e.tables.layer.layers))r.displayName=at(r.name),this.layers.set(r.name,r);if(e.tables&&e.tables.dimstyle)for(let[,r]of Object.entries(e.tables.dimstyle.dimStyles))this.dimStyles.set(r.name,r);if(e.tables&&e.tables.style)for(let[,r]of Object.entries(e.tables.style.styles))this.fontStyles.set(r.styleName,r);if(e.blocks)for(let[,r]of Object.entries(e.blocks))this.blocks.set(r.name,new Oi(r));this.textRenderer=new un(t,this.options.textOptions),this.hasMissingChars=!1,await this._FetchFonts(e);for(let r of e.entities)this._FilterEntity(r)&&(r.type==="INSERT"?(this.inserts.set(r.handle,r),this.blocks.get(r.name)?.RegisterInsert(r)):r.type=="DIMENSION"&&(r.block??null)!==null&&this.blocks.get(r.block)?.RegisterInsert(r));for(let r of this.blocks.values()){if(r.data.hasOwnProperty("entities")){let s=r.DefinitionContext();for(let a of r.data.entities)this._FilterEntity(a)&&this._ProcessDxfEntity(a,s)}r.SetFlatten()&&this.numBlocksFlattened++}console.log(`${this.numBlocksFlattened} blocks flattened`);for(let r of e.entities){if(!this._FilterEntity(r)){this.numEntitiesFiltered++;continue}this._ProcessDxfEntity(r)}console.log(`${this.numEntitiesFiltered} entities filtered`),this.numEntitiesSkipped>0&&console.warn(`${this.numEntitiesSkipped} malformed entities skipped`),this.scene=this._BuildScene(),delete this.batches,delete this.layers,delete this.blocks,delete this.textRenderer}_FilterEntity(e){if(e.hidden)return!1;let t=this._GetEntityLayer(e);return t!="0"&&this.layers.get(t)?.frozen?!1:!this.options.suppressPaperSpace||!e.inPaperSpace}async _FetchFonts(e){function t(s){return s.type==="TEXT"||s.type==="MTEXT"||s.type==="DIMENSION"||s.type==="ATTDEF"||s.type==="ATTRIB"}let i=s=>{if(s.type==="TEXT"||s.type==="ATTRIB"||s.type==="ATTDEF")return[at(s.text)];if(s.type==="MTEXT"){let a=new Pe;return a.Parse(s.text),Array.from(a.GetText(),o=>at(o))}return this._CreateLinearDimension(s,null,!1)?.GetTexts()??[]},r=async s=>{if(!this._FilterEntity(s))return!0;let a;try{a=i(s)}catch{return!0}for(let o of a)if(!await this.textRenderer.FetchFonts(o))return this.hasMissingChars=!0,!1;return!0};for(let s of e.entities)if(t(s)&&!await r(s))return;for(let s of this.blocks.values())if(s.data.hasOwnProperty("entities")){for(let a of s.data.entities)if(t(a)&&!await r(a))return}}_ProcessDxfEntity(e,t=null){let i;try{i=this._DecomposeDxfEntity(e,t)}catch(r){this.numEntitiesSkipped++;let s=e.handle!==void 0?` ${e.handle}`:"",a=t?` in block ${t.name}`:"";console.warn(`Skipped malformed ${e.type} entity${s}${a}:`,r);return}for(let r of i)this._ProcessEntity(r,t)}_DecomposeDxfEntity(e,t){let i;switch(e.type){case"LINE":i=this._DecomposeLine(e,t);break;case"POLYLINE":case"LWPOLYLINE":i=this._DecomposePolyline(e,t);break;case"ARC":i=this._DecomposeArc(e,t);break;case"CIRCLE":i=this._DecomposeCircle(e,t);break;case"ELLIPSE":i=this._DecomposeEllipse(e,t);break;case"POINT":i=this._DecomposePoint(e,t);break;case"SPLINE":i=this._DecomposeSpline(e,t);break;case"INSERT":return this._ProcessInsert(e,t),[];case"TEXT":i=this._DecomposeText(e,t);break;case"MTEXT":i=this._DecomposeMText(e,t);break;case"3DFACE":i=this._Decompose3DFace(e,t);break;case"SOLID":i=this._DecomposeSolid(e,t);break;case"DIMENSION":i=this._DecomposeDimension(e,t);break;case"ATTRIB":i=this._DecomposeAttribute(e,t);break;case"HATCH":i=this._DecomposeHatch(e,t);break;default:return console.log("Unhandled entity type: "+e.type),[]}i=Array.from(i);for(let r of i)r.Validate();return i}_ProcessEntity(e,t=null){switch(e.type){case z.Type.POINTS:this._ProcessPoints(e,t);break;case z.Type.LINE_SEGMENTS:this._ProcessLineSegments(e,t);break;case z.Type.POLYLINE:this._ProcessPolyline(e,t);break;case z.Type.TRIANGLES:this._ProcessTriangles(e,t);break;default:throw new Error("Unhandled entity type: "+e.type)}}_GetLineType(e,t=null,i=null){return 0}_IsPlainLine(e){return!0}*_DecomposeLine(e,t){if(e.vertices.length!==2)return;let i=this._GetEntityLayer(e,t),r=this._GetEntityColor(e,t);yield new z({type:z.Type.LINE_SEGMENTS,vertices:e.vertices,layer:i,color:r,lineType:this._GetLineType(e,e.vertices[0])})}_GenerateBulgeVertices(e,t,i,r){let s=4*Math.atan(r),a=Math.abs(s);if(a<this.options.arcTessellationAngle){e.push(new F(i.x,i.y));return}let o=s/2,l=Math.sin(o),c=Math.cos(o),h={x:i.x-t.x,y:i.y-t.y},f=h.x*h.x+h.y*h.y;if(f<Number.MIN_VALUE*2)return;let u=Math.sqrt(f),p=u/2/l;h.x/=u,h.y/=u;let g={x:(h.x*l-h.y*c)*p+t.x,y:(h.x*c+h.y*l)*p+t.y},x=Math.floor(a/this.options.arcTessellationAngle);if(x<this.options.minArcTessellationSubdivisions&&(x=this.options.minArcTessellationSubdivisions),x>1){let v=Math.atan2(t.y-g.y,t.x-g.x),y=s/x;s<0&&(p=-p);for(let M=1;M<x;M++){let _=v+M*y,S=new F(g.x+p*Math.cos(_),g.y+p*Math.sin(_));e.push(S)}}e.push(new F(i.x,i.y))}_GenerateArcVertices({vertices:e,center:t,radius:i,startAngle:r=null,endAngle:s=null,tessellationAngle:a=null,yRadius:o=null,transform:l=null,rotation:c=null,ccwAngleDir:h=!0}){if(!t||!i)return;a||(a=this.options.arcTessellationAngle),o===null&&(o=i),r==null?r=0:r+=this.angBase;let f=!1;if(s==null?(s=r+2*Math.PI,f=!0):s+=this.angBase,!h){let v=r;r=-s,s=-v}for(;s<=r;)s+=Math.PI*2;let u=s-r,p=Math.floor(u/a);p===0&&(p=1);let g=u/p,x=null;c&&(x=new G().makeRotation(c));for(let v=0;v<=p&&!(v===p&&f);v++){let y;h?y=r+v*g:y=r+(p-v)*g;let M=new F(i*Math.cos(y),o*Math.sin(y));x&&M.applyMatrix3(x),M.add(t),l&&M.applyMatrix3(l),e.push(M)}}*_DecomposeArc(e,t){let i=this._GetEntityColor(e,t),r=this._GetEntityLayer(e,t),s=this._GetLineType(e,null,t),a=[];this._GenerateArcVertices({vertices:a,center:e.center,radius:e.radius,startAngle:e.startAngle,endAngle:e.endAngle,transform:this._GetEntityExtrusionTransform(e)}),yield new z({type:z.Type.POLYLINE,vertices:a,layer:r,color:i,lineType:s,shape:e.endAngle===void 0})}*_DecomposeCircle(e,t){let i=this._GetEntityColor(e,t),r=this._GetEntityLayer(e,t),s=this._GetLineType(e,null,t),a=[];this._GenerateArcVertices({vertices:a,center:e.center,radius:e.radius,transform:this._GetEntityExtrusionTransform(e)}),yield new z({type:z.Type.POLYLINE,vertices:a,layer:r,color:i,lineType:s,shape:!0})}*_DecomposeEllipse(e,t){let i=this._GetEntityColor(e,t),r=this._GetEntityLayer(e,t),s=this._GetLineType(e,null,t),a=[],o=Math.sqrt(e.majorAxisEndPoint.x*e.majorAxisEndPoint.x+e.majorAxisEndPoint.y*e.majorAxisEndPoint.y),l=o*e.axisRatio,c=Math.atan2(e.majorAxisEndPoint.y,e.majorAxisEndPoint.x),h=e.startAngle??0,f=e.endAngle??h+2*Math.PI;for(;f<=h;)f+=Math.PI*2;let u=(e.endAngle??null)===null||Math.abs(f-h-2*Math.PI)<1e-6;this._GenerateArcVertices({vertices:a,center:e.center,radius:o,startAngle:e.startAngle,endAngle:u?null:e.endAngle,yRadius:l,rotation:c,ccwAngleDir:!this._GetEntityExtrusionTransform(e)}),yield new z({type:z.Type.POLYLINE,vertices:a,layer:r,color:i,lineType:s,shape:u})}*_DecomposePoint(e,t){if(this.pdMode===Re.NONE||this.pdMode!==Re.DOT&&this.pdSize<=0)return;Ni(e.position,"position");let i=this._GetEntityColor(e,t),r=this._GetEntityLayer(e,t),s=this.pdMode&Re.MARK_MASK;if((this.pdMode&Re.SHAPE_MASK)!==0){if(t){yield*this._GeneratePointShapeEntities(e.position,r,i,null,!0);return}let l=new ce(r,Oo,ce.GeometryType.POINT_INSTANCE,i,0);this._GetBatch(l).PushVertex(this._TransformVertex(e.position,t)),this._CreatePointShapeBlock();return}if(s===Re.DOT){yield new z({type:z.Type.POINTS,vertices:[e.position],layer:r,color:i,lineType:null});return}let o=[];this._CreatePointMarker(o,s,e.position),yield new z({type:z.Type.LINE_SEGMENTS,vertices:o,layer:r,color:i,lineType:null})}*_DecomposeAttribute(e,t){if(!this.textRenderer.canRender)return;let i=this.inserts.get(e.ownerHandle),r=this._GetEntityLayer(i??e,t),s=this._GetEntityColor(i??e,t);yield*this.textRenderer.Render({text:at(e.text),fontSize:e.textHeight*e.scale,startPos:e.startPoint,endPos:e.endPoint,rotation:e.rotation,hAlign:e.horizontalJustification,vAlign:e.verticalJustification,color:s,layer:r})}_CreatePointMarker(e,t,i=null){let r=this;function s(a,o){e.push({x:(i?.x??0)+a*r.pdSize*.5,y:(i?.y??0)+o*r.pdSize*.5})}switch(t){case Re.PLUS:s(0,1.5),s(0,-1.5),s(-1.5,0),s(1.5,0);break;case Re.CROSS:s(-1,1),s(1,-1),s(1,1),s(-1,-1);break;case Re.TICK:s(0,1),s(0,0);break;default:console.warn("Unsupported point display type: "+t)}}_CreatePointShapeBlock(){if(this.pointShapeBlock)return;this.pointShapeBlock=new Oi({name:Oo,position:{x:0,y:0}}),this.pointShapeBlock.offset=new F(0,0);let e=this.pointShapeBlock.DefinitionContext();for(let t of this._GeneratePointShapeEntities({x:0,y:0},null,xt.BY_BLOCK,0,!1))this._ProcessEntity(t,e)}*_GeneratePointShapeEntities(e,t,i,r,s){let a=this.pdMode&Re.MARK_MASK;if(a===Re.DOT)s&&(yield new z({type:z.Type.POINTS,vertices:[e],layer:t,color:i,lineType:r}));else if(a!==Re.NONE){let o=[];this._CreatePointMarker(o,a,e),yield new z({type:z.Type.LINE_SEGMENTS,vertices:o,layer:t,color:i,lineType:r})}if(this.pdMode&Re.SQUARE){let o=this.pdSize*.5;yield new z({type:z.Type.POLYLINE,vertices:[{x:e.x-o,y:e.y+o},{x:e.x+o,y:e.y+o},{x:e.x+o,y:e.y-o},{x:e.x-o,y:e.y-o}],layer:t,color:i,lineType:r,shape:!0})}if(this.pdMode&Re.CIRCLE){let o=[];this._GenerateArcVertices({vertices:o,center:e,radius:this.pdSize*.5,tessellationAngle:nc}),yield new z({type:z.Type.POLYLINE,vertices:o,layer:t,color:i,lineType:r,shape:!0})}}*_Decompose3DFace(e,t){yield*this._DecomposeFace(e,e.vertices,t,this.options.wireframeMesh)}*_DecomposeSolid(e,t){yield*this._DecomposeFace(e,e.points,t,!1,this._GetEntityExtrusionTransform(e))}*_DecomposeFace(e,t,i,r,s=null){let a=this._GetEntityLayer(e,i),o=this._GetEntityColor(e,i);function l(x,v,y){let M=new F().subVectors(v,x),_=new F().subVectors(y,x);return Math.abs(M.cross(_))>Number.EPSILON}let c=new F(t[0].x,t[0].y),h=new F(t[1].x,t[1].y),f=new F(t[2].x,t[2].y),u=null,p=l(c,h,f),g=!1;if(t.length>3&&(u=new F(t[3].x,t[3].y),g=l(h,u,f),s&&u.applyMatrix3(s)),s&&(c.applyMatrix3(s),h.applyMatrix3(s),f.applyMatrix3(s)),!(!p&&!g))if(r){let x=[];p&&!g?x.push(c,h,f):!p&&g?x.push(h,u,f):x.push(c,h,u,f),yield new z({type:z.Type.POLYLINE,vertices:x,layer:a,color:o,shape:!0})}else{let x=[],v=[];p&&(x.push(c,h,f),v.push(0,1,2)),g&&(p?v.push(1,2,3):(x.push(h,f),v.push(0,1,2)),x.push(u)),yield new z({type:z.Type.TRIANGLES,vertices:x,indices:v,layer:a,color:o})}}*_DecomposeText(e,t){if(!this.textRenderer.canRender)return;let i=this._GetEntityLayer(e,t),r=this._GetEntityColor(e,t),s=this._GetEntityTextStyle(e),a=s?.fixedTextHeight===0?null:s?.fixedTextHeight;yield*this.textRenderer.Render({text:at(e.text),fontSize:e.textHeight??a??1,startPos:e.startPoint,endPos:e.endPoint,rotation:e.rotation,hAlign:e.halign,vAlign:e.valign,widthFactor:e.xScale,color:r,layer:i})}*_DecomposeMText(e,t){if(!this.textRenderer.canRender)return;let i=this._GetEntityLayer(e,t),r=this._GetEntityColor(e,t),s=this._GetEntityTextStyle(e),a=s?.fixedTextHeight===0?null:s?.fixedTextHeight,o=new Pe;o.Parse(at(e.text)),yield*this.textRenderer.RenderMText({formattedText:o.GetContent(),fontSize:e.height??a,position:e.position,rotation:e.rotation,direction:e.direction,attachment:e.attachmentPoint,lineSpacing:e.lineSpacing,width:e.width,color:r,layer:i})}_CreateLinearDimension(e,t=null,i=!0){let r=(e.dimensionType||0)&15;if(r!=0&&r!=1||!e.linearOrAngularPoint1||!e.linearOrAngularPoint2||!e.anchorPoint)return null;let s=null;e.hasOwnProperty("styleName")&&(s=this.dimStyles.get(e.styleName));let a=new Ci({p1:new F().copy(e.linearOrAngularPoint1),p2:new F().copy(e.linearOrAngularPoint2),anchor:new F().copy(e.anchorPoint),isAligned:r==1,angle:e.angle,text:e.text,textAnchor:e.middleOfText?new F().copy(e.middleOfText):null,textRotation:e.textRotation},o=>{let l=this._GetDimStyleValue(o,e,s);return ac.has(o)?this._ResolveDimStyleColor(l,e,t):l},(o,l)=>this.textRenderer.GetLineWidth(o,l));return a.IsValid()?a:(i&&console.warn("Invalid dimension geometry detected for "+e.handle),null)}_ResolveDimStyleColor(e,t,i){if(e==null||e===0)return this._GetEntityColor(t,i);if(e===256){let s=this._GetEntityLayer(t,i),a=s!==null?this.layers.get(s):null;return a?a.color:i?xt.BY_LAYER:0}let r=bt[e];return r===void 0?(console.warn(`Unrecognized dimension style color index: ${e}`),this._GetEntityColor(t,i)):r}*_DecomposeDimension(e,t){if((e.block??null)!==null&&this.blocks.has(e.block)){let l={name:e.block,position:{x:0,y:0},layer:e.layer,color:e.color,colorIndex:e.colorIndex};this._ProcessInsert(l,t);return}let i=this._CreateLinearDimension(e,t);if(!i)return;let r=this._GetEntityLayer(e,t),s=this._GetEntityColor(e,t),a=this._GetEntityExtrusionTransform(e),o=i.GenerateLayout();for(let l of o.lines){let c=[];a&&(l.start.applyMatrix3(a),l.end.applyMatrix3(a)),c.push(l.start,l.end),yield new z({type:z.Type.LINE_SEGMENTS,vertices:c,layer:r,color:l.color??s})}for(let l of o.triangles){if(a)for(let c of l.vertices)c.applyMatrix3(a);yield new z({type:z.Type.TRIANGLES,vertices:l.vertices,indices:l.indices,layer:r,color:l.color??s})}if(this.textRenderer.canRender)for(let l of o.texts)a&&l.position.applyMatrix3(a),yield*this.textRenderer.Render({text:l.text,fontSize:l.size,startPos:l.position,rotation:l.angle,hAlign:qe.CENTER,vAlign:Ft.MIDDLE,color:l.color??s,layer:r})}_TransformBoundaryLoop(e,t,i){i||(i=[]);for(let r of e)t&&r.applyMatrix3(t),i.push(r.x),i.push(r.y);return i}*_DecomposeHatch(e,t){let i=this._GetHatchBoundaryLoops(e);if(i.length==0){console.warn("HATCH entity with empty boundary loops array (perhaps some loop types are not implemented yet)");return}let r=e.hatchStyle??0,s=this._GetEntityLayer(e,t),a=this._GetEntityColor(e,t),o=this._GetEntityExtrusionTransform(e),l=null;if(i.sort((u,p)=>u.isExternal!=p.isExternal?u.isExternal?-1:1:u.isOutermost!=p.isOutermost?u.isOutermost?-1:1:0),r==mn.THROUGH_ENTIRE_AREA){l=[];for(let u of i)u.isExternal&&l.push(u.vertices);l.length==0&&(l=null)}else if(r==mn.OUTERMOST){l=[];for(let u of i)(u.isExternal||u.isOutermost)&&l.push(u.vertices);l.length==0&&(l=null)}l||(l=i.map(u=>u.vertices));let c=new Pi(l,r);if(e.isSolid){for(let{contour:u,holes:p}of c.GetSolidRegions()){let g=this._TransformBoundaryLoop(u,o),x=[...u],v=[];for(let M of p)v.push(g.length/2),this._TransformBoundaryLoop(M,o,g),x.push(...M);let y=Os(g,v);y.length!=0&&(yield new z({type:z.Type.TRIANGLES,vertices:x,indices:y,layer:s,color:a}))}return}let h=null;if(e.definitionLines&&(h=new d(e.definitionLines,e.patternName,!1)),(h==null||h.isQcadDefault)&&e.patternName){let u=Cs(e.patternName,this.isMetric);u?(h==null||h.ContradictsNamedPattern(u))&&(h=u):console.log(`Hatch pattern with name ${e.patternName} not found (metric: ${this.isMetric})`)}if(h==null&&(h=Cs("ANSI31")),!h)return;let f=e.seedPoints?e.seedPoints:[{x:0,y:0}];for(let u of f){let p=h.offsetInLineSpace?c.GetPatternTransform({seedPoint:u,angle:e.patternAngle,scale:e.patternScale}):new G;for(let g of h.lines)yield*this._DecomposeHatchPatternLine(g,c,p,h.offsetInLineSpace,{layer:s,color:a,transform:o})}}*_DecomposeHatchPatternLine(e,t,i,r,s){let a,o;if(r)a=e.offset.x,o=e.offset.y;else{let x=Math.sin(-(e.angle??0)),v=Math.cos(-(e.angle??0));a=e.offset.x*v-e.offset.y*x,o=e.offset.x*x+e.offset.y*v}o<0&&(o=-o,a=-a);let l=t.GetLineTransform({patTransform:i,basePoint:e.base,angle:e.angle??0}),c=t.GetBoundingBox(l),h=(c.max.x-c.min.x)*.05,f,u;if(o==0?(f=0,u=0):(f=Math.ceil(c.min.y/o),u=Math.floor(c.max.y/o)),u-f>rc){console.warn("Too many lines produced by hatching pattern");return}let p;if(e.dashes&&e.dashes.length>1){p=0;for(let x of e.dashes)x<0?p-=x:p+=x}else p=null;let g=l.clone().invert();for(let x=f;x<=u;x++)yield*this._DecomposeHatchLine(e.dashes,t,{y:x*o,xBase:x*a,xStart:c.min.x-h,xEnd:c.max.x+h,ocsTransform:g,dashPatLength:p},s)}*_DecomposeHatchLine(e,t,{y:i,xBase:r,xStart:s,xEnd:a,ocsTransform:o,dashPatLength:l},{layer:c,color:h,transform:f}){let u=a-s,p=new F(s,i).applyMatrix3(o),g=new F(a,i).applyMatrix3(o),x=g.clone().sub(p),v=t.ClipLine([p,g]);function y(w){return(w-s)/u}function M(w){let C=x.clone().multiplyScalar(w[0]).add(p),P=x.clone().multiplyScalar(w[1]).add(p);return f&&(C.applyMatrix3(f),P.applyMatrix3(f)),w[1]-w[0]<=Number.EPSILON?new z({type:z.Type.POINTS,vertices:[C],layer:c,color:h}):new z({type:z.Type.LINE_SEGMENTS,vertices:[C,P],layer:c,color:h})}function*_(w,C){for(let P of v){if(P[0]>=C)return;if(P[1]<=w)continue;let E=Math.max(w,P[0]),b=Math.min(C,P[1]);yield[E,b],w=b}}if(l===null){for(let w of v)yield M(w);return}let S=Math.floor((s-r)/l),A=Math.floor((a-r)/l);if(A-S>=sc){console.warn("Too many segments produced by hatching pattern line");return}for(let w=S;w<=A;w++){let C=y(r+w*l);for(let P of e){let E=P<0;E&&(P=-P);let b=P/u;if(!E)for(let R of _(C,C+b))yield M(R);C+=b}}}_GetHatchBoundaryLoops(e){if(!e.boundaryLoops)return[];let t=[],i=(r,s)=>{let a=s.length;if(a!=0){if(r.length==0)r.push(s[0]);else{let o=r[r.length-1];(o.x!=s[0].x||o.y!=s[0].y)&&r.push(s[0])}for(let o=1;o<a;o++)r.push(s[o])}};for(let r of e.boundaryLoops){if(r.isTextbox)continue;let s=[];if(r.type&2)for(let a=0;a<r.polyline.vertices.length;a++){let o=r.polyline.vertices[a];if((o.bulge??0)==0)s.push(new F(o.x,o.y));else{(r.polyline.vertices[a==0?r.polyline.vertices.length-1:a-1].bulge??0)==0&&s.push(new F(o.x,o.y));let c=r.polyline.vertices[a==r.polyline.vertices.length-1?0:a+1];this._GenerateBulgeVertices(s,o,c,o.bulge)}}else if(r.edges&&r.edges.length>0)for(let a of r.edges)switch(a.type){case 1:i(s,[new F(a.start.x,a.start.y),new F(a.end.x,a.end.y)]);break;case 2:{let h=[];this._GenerateArcVertices({vertices:h,center:a.start,radius:a.radius,startAngle:a.startAngle,endAngle:a.endAngle,ccwAngleDir:a.isCcw}),i(s,h);break}case 3:{let h=a.start,f=a.end,u=Math.sqrt(f.x*f.x+f.y*f.y),p=a.radius,g=u*p,x=Math.atan2(f.y,f.x),v=[];if(this._GenerateArcVertices({vertices:v,center:h,radius:u,startAngle:a.startAngle,endAngle:a.endAngle,yRadius:g,ccwAngleDir:a.isCcw}),x!==0){let y=Math.cos(x),M=Math.sin(x);for(let _ of v){let S=_.x-h.x,A=_.y-h.y;_.x=S*y-A*M+h.x,_.y=S*M+A*y+h.y}}i(s,v);break}case 4:if(!a.controlPoints){console.warn("Hatch boundary spline edge without control points");break}let o=a.controlPoints.map(h=>[h.x,h.y]),l=o.length*Uo,c=1/l;for(let h=0;h<=l;h++){let f=this._InterpolateSpline(h*c,a.degreeOfSplineCurve,o,a.knotValues);s.push(new F(f[0],f[1]))}break;default:console.warn("Unhandled hatch boundary loop edge type: "+a.type)}if(s.length>2){let a=s[0],o=s[s.length-1];o.x==a.x&&o.y==a.y&&(s.length=s.length-1)}s.length>2&&t.push({vertices:s,isExternal:r.isExternal,isOutermost:r.isOutermost})}return t}_GetDimStyleValue(e,t,i){let r=t?.xdata?.ACAD?.DSTYLE?.values;if(r){let s=!0,a=!1;for(let o of r){if(s){if(o.code!=1070)break;Z0.get(o.value)==e&&(a=!0)}else if(a)return o.value;s=!s}}if(i&&i.hasOwnProperty(e))return i[e];if(this.vars.has(e))return this.vars.get(e);if(ko.hasOwnProperty(e)){let s=ko[e];return s instanceof Function?s.call(this):s}return null}_ProcessInsert(e,t=null){if(t){if(t.IsRecursiveReference(e.name)){console.warn("Recursive block reference: "+t.DescribeBlockPath(e.name));return}let c=this.blocks.get(e.name);if(!c){console.warn("Unresolved nested block reference: "+e.name);return}let h=t.NestedBlockContext(c,e);if(c.data.entities)for(let f of c.data.entities)this._ProcessDxfEntity(f,h);return}let i=this.blocks.get(e.name);if(!i){console.warn("Unresolved block reference in INSERT: "+e.name);return}if(!i.HasGeometry())return;let r=this._GetEntityLayer(e,null),s=this._GetEntityColor(e,null),a=this._GetLineType(e,null,null),o=i.InstantiationContext().GetInsertionTransform(e),l=i.bounds;if(this._UpdateBounds(new F(l.minX,l.minY).applyMatrix3(o)),this._UpdateBounds(new F(l.maxX,l.maxY).applyMatrix3(o)),this._UpdateBounds(new F(l.minX,l.maxY).applyMatrix3(o)),this._UpdateBounds(new F(l.maxX,l.minY).applyMatrix3(o)),Ke(o,-this.origin.x,-this.origin.y),i.flatten)for(let c of i.batches)this._FlattenBatch(c,r,s,a,o);else{let c=new ce(r,e.name,ce.GeometryType.BLOCK_INSTANCE,s,a);this._GetBatch(c).PushInstanceTransform(o)}}_FlattenBatch(e,t,i,r,s){t??(t=e.key.layerName);let a=t?this.layers.get(t):null,o,l=0;e.key.color===xt.BY_BLOCK?o=i:e.key.color===xt.BY_LAYER?o=a?.color??0:o=e.key.color;let c=new ce(t,null,e.key.geometryType,o,l);this._GetBatch(c).Merge(e,s)}*_GenerateShapedPolyline(e,t,i,r,s){yield new z({type:z.Type.POLYLINE,vertices:e,layer:t,color:i,lineType:r,shape:s})}_MirrorEntityVertices(e,t=null){if(!e.extrusionDirection||e.extrusionDirection.z>=0)return t??e.vertices;(!t||t===e.vertices)&&(t=e.vertices.slice());let i=t.length;for(let r=0;r<i;r++){let s=t[r],a={x:-s.x};for(let o in s)s.hasOwnProperty(o)&&o!=="x"&&(a[o]=s[o]);t[r]=a}return t}*_DecomposePolyline(e,t=null){if(e.isPolyfaceMesh){yield*this._DecomposePolyfaceMesh(e,t);return}let i,r;if(e.includesCurveFitVertices||e.includesSplineFitVertices?(i=e.vertices.filter(p=>p.splineVertex||p.curveFittingVertex),r=i.length):(i=e.vertices,r=e.vertices.length),r<2)return;i=this._MirrorEntityVertices(e,i);let s=this._GetEntityColor(e,t),a=this._GetEntityLayer(e,t),o=this,l=0,c=this._IsPlainLine(i[0]),h=this._GetLineType(e,i[0],t),f=null;function*u(p){if(p===l)return;let g=!1,x=f;p===r&&l===0?(g=!0,x===null&&(x=i)):p===r-1&&l===0?x===null&&(x=i):p===r?x===null&&(x=i.slice(l,p),x.push(i[0])):x===null&&(x=i.slice(l,p+1)),c?yield new z({type:z.Type.POLYLINE,vertices:x,layer:a,color:s,lineType:h,shape:g}):yield*o._GenerateShapedPolyline(x,a,s,h,g),l=p,p!==r&&(c=o._IsPlainLine(i[p]),h=o._GetLineType(e,i[p])),f=null}for(let p=1;p<=r;p++){let g=i[p-1],x;if(p===r){if(!e.shape){yield*u(p-1);break}x=i[0]}else x=i[p];if(g.bulge&&c?(f===null&&(f=i.slice(l,p)),this._GenerateBulgeVertices(f,g,x,g.bulge)):f!==null&&f.push(x),p===r){yield*u(p);break}let v=this._IsPlainLine(x),y=this._GetLineType(e,x);(v!==c||c&&y!==h)&&(yield*u(p))}}*_DecomposePolyfaceMesh(e,t=null){let i=this._GetEntityLayer(e,t),r=this._GetEntityColor(e,t),s=[],a=[];for(let l of e.vertices)if(l.faces){let c={indices:[],hiddenEdges:[]};for(let h of l.faces){if(h==0)break;if(h>s.length){if(65536-h>s.length)continue;h=h-65536}c.indices.push(h<0?-h-1:h-1),c.hiddenEdges.push(h<0)}(c.indices.length==3||c.indices.length==4)&&a.push(c)}else s.push(new F(l.x,l.y));if(!this.options.wireframeMesh){yield*this._GeneratePolyfaceTriangles(s,a,i,r);return}let o=[];for(let l of a)for(let c=0;c<l.indices.length;c++){if(l.hiddenEdges[c])continue;let h=l.indices[c],f=l.indices[c<l.indices.length-1?c+1:0],u=o.at(-1);u?.at(-1)===h?u.push(f):o.push([h,f])}for(let l of o)yield new z({type:z.Type.POLYLINE,vertices:l.map(c=>s[c]),layer:i,color:r})}*_GeneratePolyfaceTriangles(e,t,i,r){let s=[],a=[],o=new Map;for(let l of t){let c=l.indices.map(h=>{let f=o.get(h);return f===void 0&&(f=s.length,o.set(h,f),s.push(e[h])),f});c.length==3?a.push(c[0],c[1],c[2]):a.push(c[0],c[1],c[2],c[0],c[2],c[3])}a.length>0&&(yield new z({type:z.Type.TRIANGLES,vertices:s,indices:a,layer:i,color:r}))}*_DecomposeSpline(e,t=null){let i=this._GetEntityColor(e,t),r=this._GetEntityLayer(e,t),s=this._GetLineType(e,null,t);if(!e.controlPoints)return;let a=e.controlPoints.map(h=>[h.x,h.y]),o=[],l=a.length*Uo,c=1/l;for(let h=0;h<=l;h++){let f=this._InterpolateSpline(h*c,e.degreeOfSplineCurve,a,e.knotValues);o.push({x:f[0],y:f[1]})}yield new z({type:z.Type.POLYLINE,vertices:o,layer:r,color:i,lineType:s})}_InterpolateSpline(e,t,i,r=null,s=null){let a,o,l,c,h=i.length,f=i[0].length;if(t<1)throw new Error("Degree must be at least 1 (linear)");if(t>h-1)throw new Error("Degree must be less than or equal to point count - 1");if(!s)for(s=[],a=0;a<h;a++)s[a]=1;if(r){if(r.length!==h+t+1)throw new Error("Bad knot vector length")}else for(r=[],a=0;a<h+t+1;a++)r[a]=a;let u=[t,r.length-1-t],p=r[u[0]],g=r[u[1]];for(e=e*(g-p)+p,e<p?e=p:e>g&&(e=g),l=u[0];l<u[1]&&!(e>=r[l]&&e<=r[l+1]);l++);let x=[];for(a=0;a<h;a++){for(x[a]=[],o=0;o<f;o++)x[a][o]=i[a][o]*s[a];x[a][f]=s[a]}let v;for(c=1;c<=t+1;c++)for(a=l;a>l-t-1+c;a--)for(v=(e-r[a])/(r[a+t+1-c]-r[a]),o=0;o<f+1;o++)x[a][o]=(1-v)*x[a-1][o]+v*x[a][o];let y=[];for(a=0;a<f;a++)y[a]=x[l][a]/x[l][f];return y}_ProcessPoints(e,t=null){let i=new ce(e.layer,t?.name,ce.GeometryType.POINTS,e.color,0),r=this._GetBatch(i);for(let s of e.vertices)r.PushVertex(this._TransformVertex(s,t))}_ProcessLineSegments(e,t=null){if(e.vertices.length%2!==0)throw Error("Even number of vertices expected");let i=new ce(e.layer,t?.name,ce.GeometryType.LINES,e.color,e.lineType),r=this._GetBatch(i);for(let s of e.vertices)r.PushVertex(this._TransformVertex(s,t))}_ProcessPolyline(e,t=null){if(e.vertices.length<2)return;let i=e.vertices.length;if(i<=3){let a=new ce(e.layer,t?.name,ce.GeometryType.LINES,e.color,e.lineType),o=this._GetBatch(a),l=null;for(let c of e.vertices)l!==null&&(o.PushVertex(this._TransformVertex(l,t)),o.PushVertex(this._TransformVertex(c,t))),l=c;e.shape&&i>2&&(o.PushVertex(this._TransformVertex(e.vertices[i-1],t)),o.PushVertex(this._TransformVertex(e.vertices[0],t)));return}let r=new ce(e.layer,t?.name,ce.GeometryType.INDEXED_LINES,e.color,e.lineType),s=this._GetBatch(r);for(let a of e._IterateLineChunks()){let o=s.PushChunk(a.verticesCount);for(let l of a.vertices)o.PushVertex(this._TransformVertex(l,t));for(let l of a.indices)o.PushIndex(l);o.Finish()}}_ProcessTriangles(e,t=null){if(e.vertices.length<3)return;if(e.indices.length%3!==0){console.error("Unexpected size of indices array: "+e.indices.length);return}let i=new ce(e.layer,t?.name,ce.GeometryType.INDEXED_TRIANGLES,e.color,0),r=this._GetBatch(i);for(let s of e._IterateTriangleChunks()){let a=r.PushChunk(s.verticesCount);for(let o of s.vertices)a.PushVertex(this._TransformVertex(o,t));for(let o of s.indices)a.PushIndex(o);a.Finish()}}_GetEntityColor(e,t=null){let i=xt.BY_LAYER;if(e.colorIndex===0)i=xt.BY_BLOCK;else if(e.colorIndex===256){if(e.hasOwnProperty("layer")){let r=this.layers.get(e.layer);if(r)return r.color}i=xt.BY_LAYER}else e.hasOwnProperty("color")&&e.color!=null&&(i=e.color);if(t)return i;if(i===xt.BY_BLOCK)return 16777215;if(i===xt.BY_LAYER){if(e.hasOwnProperty("layer")){let r=this.layers.get(e.layer);if(r&&r.color!=null)return r.color}}else return i;return 0}_GetEntityLayer(e,t=null){return e.hasOwnProperty("layer")&&e.layer!=null?e.layer:t?null:"0"}_GetEntityTextStyle(e){return e.hasOwnProperty("styleName")?this.fontStyles.get(e.styleName)??null:null}_GetEntityExtrusionTransform(e){return!e.hasOwnProperty("extrusionDirection")||e.extrusionDirection.z>0?null:new G().makeScale(-1,1)}_GetBatch(e){let t=this.batches.find({key:e});if(t!==null)return t;if(t=new Us(e),this.batches.insert(t),e.blockName!==null&&!e.IsInstanced()){let i=this.blocks.get(e.blockName);i&&i.batches.push(t)}return t}_TransformVertex(e,t=null){return t?t.TransformVertex(e):(this._UpdateBounds(e),{x:e.x-this.origin.x,y:e.y-this.origin.y})}_UpdateBounds(e){this.bounds===null?this.bounds={minX:e.x,maxX:e.x,minY:e.y,maxY:e.y}:(e.x<this.bounds.minX?this.bounds.minX=e.x:e.x>this.bounds.maxX&&(this.bounds.maxX=e.x),e.y<this.bounds.minY?this.bounds.minY=e.y:e.y>this.bounds.maxY&&(this.bounds.maxY=e.y)),this.origin===null&&(this.origin={x:e.x,y:e.y})}_BuildScene(){let e=0,t=0,i=0;this.batches.each(a=>{e+=a.GetVerticesBufferSize(),t+=a.GetIndicesBufferSize(),i+=a.GetTransformsSize()});let r={vertices:new ArrayBuffer(e),indices:new ArrayBuffer(t),transforms:new ArrayBuffer(i),batches:[],layers:[],origin:this.origin,bounds:this.bounds,hasMissingChars:this.hasMissingChars,numEntitiesSkipped:this.numEntitiesSkipped},s={vertices:new Float32Array(r.vertices),verticesOffset:0,indices:new Uint16Array(r.indices),indicesOffset:0,transforms:new Float32Array(r.transforms),transformsOffset:0};this.batches.each(a=>{r.batches.push(a.Serialize(s))});for(let a of this.layers.values())a.frozen||r.layers.push({name:a.name,displayName:a.displayName,color:a.color,visible:a.visible??!0});return r.pointShapeHasDot=(this.pdMode&Re.MARK_MASK)===Re.DOT,r}},Us=class{constructor(e){this.key=e,e.IsIndexed()?this.chunks=[]:e.geometryType===ce.GeometryType.BLOCK_INSTANCE?this.transforms=new Gt(Ie.FLOAT32):this.vertices=new Gt(Ie.FLOAT32)}PushVertex(e){let t=this.vertices.Push(e.x);return this.vertices.Push(e.y),t}PushInstanceTransform(e){for(let t=0;t<2;t++)for(let i=0;i<3;i++)this.transforms.Push(e.elements[i*3+t])}PushChunk(e){if(e>M0)throw new Error("Vertices count exceeds chunk limit: "+e);let t=null,i=0;for(let r of this.chunks){let s=M0-r.vertices.GetSize()/2;s<e||(t===null||s<i)&&(t=r,i=s)}return t===null&&(t=this._NewChunk(e)),new Bs(t,e)}Merge(e,t=null){if(this.key.geometryType!==e.key.geometryType)throw new Error(`Rendering batch merging geometry type mismatch: ${this.key.geometryType} !== ${e.key.geometryType}`);if(this.key.IsInstanced())throw new Error("Attempted to merge instanced batch");if(this.key.IsIndexed())for(let i of e.chunks){let r=i.vertices.size,s=this.PushChunk(r/2);for(let o=0;o<r;o+=2){let l=new F(i.vertices.Get(o),i.vertices.Get(o+1));t&&l.applyMatrix3(t),s.PushVertex(l)}let a=i.indices.size;for(let o=0;o<a;o++)s.PushIndex(i.indices.Get(o));s.Finish()}else{let i=e.vertices.size;for(let r=0;r<i;r+=2){let s=new F(e.vertices.Get(r),e.vertices.Get(r+1));t&&s.applyMatrix3(t),this.PushVertex(s)}}}GetVerticesBufferSize(){if(this.key.IsIndexed()){let e=0;for(let t of this.chunks)e+=t.vertices.GetSize();return e*Float32Array.BYTES_PER_ELEMENT}else return this.key.geometryType===ce.GeometryType.BLOCK_INSTANCE?0:this.vertices.GetSize()*Float32Array.BYTES_PER_ELEMENT}GetIndicesBufferSize(){if(this.key.IsIndexed()){let e=0;for(let t of this.chunks)e+=t.indices.GetSize();return e*Uint16Array.BYTES_PER_ELEMENT}else return 0}GetTransformsSize(){return this.key.geometryType===ce.GeometryType.BLOCK_INSTANCE?this.transforms.GetSize()*Float32Array.BYTES_PER_ELEMENT:0}Serialize(e){if(this.key.IsIndexed()){let t={key:this.key,chunks:[]};for(let i of this.chunks)t.chunks.push(i.Serialize(e));return t}else if(this.key.geometryType===ce.GeometryType.BLOCK_INSTANCE){let t=this.transforms.GetSize(),i={key:this.key,transformsOffset:e.transformsOffset,transformsSize:t};return this.transforms.CopyTo(e.transforms,e.transformsOffset),e.transformsOffset+=t,i}else{let t=this.vertices.GetSize(),i={key:this.key,verticesOffset:e.verticesOffset,verticesSize:t};return this.vertices.CopyTo(e.vertices,e.verticesOffset),e.verticesOffset+=t,i}}_NewChunk(e){let t=new ks(e);return this.chunks.push(t),t}},Oi=class{constructor(e){this.data=e,this.useCount=0,this.nestedUseCount=0,this.verticesCount=0,this.offset=null,this.batches=[],this.flatten=!1,this.bounds=null}SetFlatten(){return this.HasGeometry()?(this.flatten=this.useCount===1||this.useCount*this.verticesCount<=ic,this.flatten):!1}HasGeometry(){return this.offset!==null}RegisterInsert(e){this.useCount++}RegisterNestedUse(e){this.nestedUseCount++}DefinitionContext(){return new Kt(this,Kt.Type.DEFINITION)}InstantiationContext(){return new Kt(this,Kt.Type.INSTANTIATION)}UpdateBounds(e){this.bounds===null?this.bounds={minX:e.x,maxX:e.x,minY:e.y,maxY:e.y}:(e.x<this.bounds.minX?this.bounds.minX=e.x:e.x>this.bounds.maxX&&(this.bounds.maxX=e.x),e.y<this.bounds.minY?this.bounds.minY=e.y:e.y>this.bounds.maxY&&(this.bounds.maxY=e.y))}},Kt=class n{constructor(e,t){this.block=e,this.type=t,this.origin=this.block.data.position,this.transform=new G,this.blockPath=[this.name]}get name(){return this.block.data.name}IsRecursiveReference(e){return this.blockPath.includes(e)}DescribeBlockPath(e){return this.blockPath.concat(e).join(" -> ")}TransformVertex(e){let t=new F(e.x,e.y).applyMatrix3(this.transform);if(this.type!==n.Type.DEFINITION&&this.type!==n.Type.NESTED_DEFINITION)throw new Error("Unexpected transform type");if(this.block.verticesCount++,this.block.offset===null){this.block.offset=t;let i=new F;return this.block.UpdateBounds(i),i}return t.sub(this.block.offset),this.block.UpdateBounds(t),t}GetInsertionTransform(e){Ni(this.origin,"block base point"),Ni(e.position,"insertion point");let t=new G().makeTranslation(-this.origin.x,-this.origin.y),i=e.yScale||1,r=e.xScale||1,s=-(e.rotation||0)*Math.PI/180,a=e.position.x,o=e.position.y;if(st(t,r,i),Qe(t,s),Ke(t,a,o),e.extrusionDirection&&e.extrusionDirection.z<0&&st(t,-1,1),this.type===n.Type.INSTANTIATION&&t.multiply(new G().makeTranslation(this.block.offset.x,this.block.offset.y)),!t.elements.every(Number.isFinite))throw new Error("Non-finite insertion transform");return t}NestedBlockContext(e,t){e.RegisterNestedUse(this.block);let r=new n(e,n.Type.NESTED_DEFINITION).GetInsertionTransform(t),s=new n(this.block,n.Type.NESTED_DEFINITION);return s.transform=new G().multiplyMatrices(this.transform,r),s.blockPath=this.blockPath.concat(e.data.name),s}};Kt.Type=Object.freeze({DEFINITION:0,NESTED_DEFINITION:1,INSTANTIATION:2});var ks=class{constructor(e){e<16&&(e=16),this.indices=new Gt(Ie.UINT16,e*2),this.vertices=new Gt(Ie.FLOAT32,e*2)}Serialize(e){let t={};{let i=this.vertices.GetSize();t.verticesOffset=e.verticesOffset,t.verticesSize=i,this.vertices.CopyTo(e.vertices,e.verticesOffset),e.verticesOffset+=i}{let i=this.indices.GetSize();t.indicesOffset=e.indicesOffset,t.indicesSize=i,this.indices.CopyTo(e.indices,e.indicesOffset),e.indicesOffset+=i}return t}},Bs=class{constructor(e,t){this.chunk=e,this.verticesCount=t,this.verticesOffset=this.chunk.vertices.GetSize()/2,this.numVerticesPushed=0}PushVertex(e){if(this.numVerticesPushed===this.verticesCount)throw new Error;this.chunk.vertices.Push(e.x),this.chunk.vertices.Push(e.y),this.numVerticesPushed++}PushIndex(e){if(e<0||e>=this.verticesCount)throw new Error(`Index out of range: ${e}/${this.verticesCount}`);this.chunk.indices.Push(e+this.verticesOffset)}Finish(){if(this.numVerticesPushed!==this.verticesCount)throw new Error(`Not all vertices pushed: ${this.numVerticesPushed}/${this.verticesCount}`)}},z=class{constructor({type:e,vertices:t,indices:i=null,layer:r=null,color:s,lineType:a=0,shape:o=!1}){this.type=e,this.vertices=t,this.indices=i,this.layer=r,this.color=s,this.lineType=a,this.shape=o}Validate(){for(let e of this.vertices)Ni(e,"vertex");if(this.indices){let e=this.vertices.length;for(let t of this.indices)if(!Number.isInteger(t)||t<0||t>=e)throw new Error(`Index ${t} out of range of ${e} vertices`)}}*_IterateVertices(e,t){for(let i=e;i<e+t;i++)yield this.vertices[i]}*_IterateLineChunks(){let e=this.vertices.length;if(e<2)return;let t=this,i=0,r=!1;for(;i<e-1;){let s=e-i,a=Math.min(M0,s),o=a===s,l,c,h;o&&this.shape&&i===0?(l=this._IterateVertices(i,a),c=Di(a,!0),h=a,r=!0):o&&this.shape&&a<M0?(l=(function*(){yield*t._IterateVertices(i,a),yield t.vertices[0]})(),c=Di(a+1,!1),h=a+1,r=!0):(l=this._IterateVertices(i,a),c=Di(a,!1),h=a),yield{verticesCount:h,vertices:l,indices:c},i+=a-1}this.shape&&!r&&(yield{verticesCount:2,vertices:(function*(){yield t.vertices[e-1],yield t.vertices[0]})(),indices:Di(2,!1)})}*_IterateTriangleChunks(){if(this.vertices.length<=M0){yield{verticesCount:this.vertices.length,vertices:this.vertices,indices:this.indices};return}let e=this.indices.length/3,t=new Uint32Array(e),i=new Uint32Array(e);for(let o=0;o<e;o++){let l=this.indices[o*3],c=this.indices[o*3+1],h=this.indices[o*3+2];t[o]=l+c+h-Math.min(l,c,h)-Math.max(l,c,h),i[o]=o}i.sort((o,l)=>t[o]-t[l]);let r=[],s=[],a=new Map;for(let o of i){let l=o*3,c=0;for(let h=l;h<l+3;h++)a.has(this.indices[h])||c++;r.length+c>M0&&(yield{verticesCount:r.length,vertices:r,indices:s},r=[],s=[],a=new Map);for(let h=l;h<l+3;h++){let f=this.indices[h],u=a.get(f);u===void 0&&(u=r.length,a.set(f,u),r.push(this.vertices[f])),s.push(u)}}s.length>0&&(yield{verticesCount:r.length,vertices:r,indices:s})}};z.Type=Object.freeze({POINTS:0,LINE_SEGMENTS:1,POLYLINE:2,TRIANGLES:3});function*Di(n,e){for(let t=0;t<n-1;t++)yield t,yield t+1;e&&n>2&&(yield n-1,yield 0)}var Re=Object.freeze({DOT:0,NONE:1,PLUS:2,CROSS:3,TICK:4,MARK_MASK:15,CIRCLE:32,SQUARE:64,SHAPE_MASK:240}),ac=new Set(["DIMCLRD","DIMCLRE","DIMCLRT"]),xt=Object.freeze({BY_LAYER:-1,BY_BLOCK:-2});bn.DefaultOptions={arcTessellationAngle:10/180*Math.PI,minArcTessellationSubdivisions:8,wireframeMesh:!1,suppressPaperSpace:!1,textOptions:wi};String.prototype.codePointAt||(function(){var n=(function(){try{var t={},i=Object.defineProperty,r=i(t,t,t)&&i}catch{}return r})(),e=function(t){if(this==null)throw TypeError();var i=String(this),r=i.length,s=t?Number(t):0;if(s!=s&&(s=0),!(s<0||s>=r)){var a=i.charCodeAt(s),o;return a>=55296&&a<=56319&&r>s+1&&(o=i.charCodeAt(s+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}};n?n(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e})();var ra=0,T1=-3;function En(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function oc(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new En,this.dtree=new En}var E1=new En,A1=new En,sa=new Uint8Array(30),aa=new Uint16Array(30),w1=new Uint8Array(30),C1=new Uint16Array(30),lc=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bo=new En,ot=new Uint8Array(320);function P1(n,e,t,i){var r,s;for(r=0;r<t;++r)n[r]=0;for(r=0;r<30-t;++r)n[r+t]=r/t|0;for(s=i,r=0;r<30;++r)e[r]=s,s+=1<<n[r]}function cc(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var Go=new Uint16Array(16);function Gs(n,e,t,i){var r,s;for(r=0;r<16;++r)n.table[r]=0;for(r=0;r<i;++r)n.table[e[t+r]]++;for(n.table[0]=0,s=0,r=0;r<16;++r)Go[r]=s,s+=n.table[r];for(r=0;r<i;++r)e[t+r]&&(n.trans[Go[e[t+r]]++]=r)}function hc(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function lt(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var i=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,i+t}function Zs(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,i=0,r=0,s=n.tag;do i=2*i+(s&1),s>>>=1,++r,t+=e.table[r],i-=e.table[r];while(i>=0);return n.tag=s,n.bitcount-=r,e.trans[t+i]}function uc(n,e,t){var i,r,s,a,o,l;for(i=lt(n,5,257),r=lt(n,5,1),s=lt(n,4,4),a=0;a<19;++a)ot[a]=0;for(a=0;a<s;++a){var c=lt(n,3,0);ot[lc[a]]=c}for(Gs(Bo,ot,0,19),o=0;o<i+r;){var h=Zs(n,Bo);switch(h){case 16:var f=ot[o-1];for(l=lt(n,2,3);l;--l)ot[o++]=f;break;case 17:for(l=lt(n,3,3);l;--l)ot[o++]=0;break;case 18:for(l=lt(n,7,11);l;--l)ot[o++]=0;break;default:ot[o++]=h;break}}Gs(e,ot,0,i),Gs(t,ot,i,r)}function zo(n,e,t){for(;;){var i=Zs(n,e);if(i===256)return ra;if(i<256)n.dest[n.destLen++]=i;else{var r,s,a,o;for(i-=257,r=lt(n,sa[i],aa[i]),s=Zs(n,t),a=n.destLen-lt(n,w1[s],C1[s]),o=a;o<a+r;++o)n.dest[n.destLen++]=n.dest[o]}}}function fc(n){for(var e,t,i;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return T1;for(n.sourceIndex+=4,i=e;i;--i)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,ra}function pc(n,e){var t=new oc(n,e),i,r,s;do{switch(i=hc(t),r=lt(t,2,0),r){case 0:s=fc(t);break;case 1:s=zo(t,E1,A1);break;case 2:uc(t,t.ltree,t.dtree),s=zo(t,t.ltree,t.dtree);break;default:s=T1}if(s!==ra)throw new Error("Data error")}while(!i);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}cc(E1,A1);P1(sa,aa,4,3);P1(w1,C1,2,1);sa[28]=0;aa[28]=258;var dc=pc;function T0(n,e,t,i,r){return Math.pow(1-r,3)*n+3*Math.pow(1-r,2)*r*e+3*(1-r)*Math.pow(r,2)*t+Math.pow(r,3)*i}function _t(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}_t.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};_t.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};_t.prototype.addX=function(n){this.addPoint(n,null)};_t.prototype.addY=function(n){this.addPoint(null,n)};_t.prototype.addBezier=function(n,e,t,i,r,s,a,o){var l=[n,e],c=[t,i],h=[r,s],f=[a,o];this.addPoint(n,e),this.addPoint(a,o);for(var u=0;u<=1;u++){var p=6*l[u]-12*c[u]+6*h[u],g=-3*l[u]+9*c[u]-9*h[u]+3*f[u],x=3*c[u]-3*l[u];if(g===0){if(p===0)continue;var v=-x/p;0<v&&v<1&&(u===0&&this.addX(T0(l[u],c[u],h[u],f[u],v)),u===1&&this.addY(T0(l[u],c[u],h[u],f[u],v)));continue}var y=Math.pow(p,2)-4*x*g;if(!(y<0)){var M=(-p+Math.sqrt(y))/(2*g);0<M&&M<1&&(u===0&&this.addX(T0(l[u],c[u],h[u],f[u],M)),u===1&&this.addY(T0(l[u],c[u],h[u],f[u],M)));var _=(-p-Math.sqrt(y))/(2*g);0<_&&_<1&&(u===0&&this.addX(T0(l[u],c[u],h[u],f[u],_)),u===1&&this.addY(T0(l[u],c[u],h[u],f[u],_)))}}};_t.prototype.addQuad=function(n,e,t,i,r,s){var a=n+.6666666666666666*(t-n),o=e+2/3*(i-e),l=a+1/3*(r-n),c=o+1/3*(s-e);this.addBezier(n,e,a,o,l,c,r,s)};function ge(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}ge.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})};ge.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})};ge.prototype.curveTo=ge.prototype.bezierCurveTo=function(n,e,t,i,r,s){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:i,x:r,y:s})};ge.prototype.quadTo=ge.prototype.quadraticCurveTo=function(n,e,t,i){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:i})};ge.prototype.close=ge.prototype.closePath=function(){this.commands.push({type:"Z"})};ge.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof _t){var e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)};ge.prototype.getBoundingBox=function(){for(var n=new _t,e=0,t=0,i=0,r=0,s=0;s<this.commands.length;s++){var a=this.commands[s];switch(a.type){case"M":n.addPoint(a.x,a.y),e=i=a.x,t=r=a.y;break;case"L":n.addPoint(a.x,a.y),i=a.x,r=a.y;break;case"Q":n.addQuad(i,r,a.x1,a.y1,a.x,a.y),i=a.x,r=a.y;break;case"C":n.addBezier(i,r,a.x1,a.y1,a.x2,a.y2,a.x,a.y),i=a.x,r=a.y;break;case"Z":i=e,r=t;break;default:throw new Error("Unexpected path command "+a.type)}}return n.isEmpty()&&n.addPoint(0,0),n};ge.prototype.draw=function(n){n.beginPath();for(var e=0;e<this.commands.length;e+=1){var t=this.commands[e];t.type==="M"?n.moveTo(t.x,t.y):t.type==="L"?n.lineTo(t.x,t.y):t.type==="C"?n.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?n.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())};ge.prototype.toPathData=function(n){n=n!==void 0?n:2;function e(a){return Math.round(a)===a?""+Math.round(a):a.toFixed(n)}function t(){for(var a=arguments,o="",l=0;l<arguments.length;l+=1){var c=a[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}for(var i="",r=0;r<this.commands.length;r+=1){var s=this.commands[r];s.type==="M"?i+="M"+t(s.x,s.y):s.type==="L"?i+="L"+t(s.x,s.y):s.type==="C"?i+="C"+t(s.x1,s.y1,s.x2,s.y2,s.x,s.y):s.type==="Q"?i+="Q"+t(s.x1,s.y1,s.x,s.y):s.type==="Z"&&(i+="Z")}return i};ge.prototype.toSVG=function(n){var e='<path d="';return e+=this.toPathData(n),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};ge.prototype.toDOMElement=function(n){var e=this.toPathData(n),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),t};function R1(n){throw new Error(n)}function Ho(n,e){n||R1(e)}var V={fail:R1,argument:Ho,assert:Ho},Vo=32768,Wo=2147483648,A0={},I={},W={};function it(n){return function(){return n}}I.BYTE=function(n){return V.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]};W.BYTE=it(1);I.CHAR=function(n){return[n.charCodeAt(0)]};W.CHAR=it(1);I.CHARARRAY=function(n){typeof n>"u"&&(n="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e};W.CHARARRAY=function(n){return typeof n>"u"?0:n.length};I.USHORT=function(n){return[n>>8&255,n&255]};W.USHORT=it(2);I.SHORT=function(n){return n>=Vo&&(n=-(2*Vo-n)),[n>>8&255,n&255]};W.SHORT=it(2);I.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]};W.UINT24=it(3);I.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]};W.ULONG=it(4);I.LONG=function(n){return n>=Wo&&(n=-(2*Wo-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]};W.LONG=it(4);I.FIXED=I.ULONG;W.FIXED=W.ULONG;I.FWORD=I.SHORT;W.FWORD=W.SHORT;I.UFWORD=I.USHORT;W.UFWORD=W.USHORT;I.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]};W.LONGDATETIME=it(8);I.TAG=function(n){return V.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]};W.TAG=it(4);I.Card8=I.BYTE;W.Card8=W.BYTE;I.Card16=I.USHORT;W.Card16=W.USHORT;I.OffSize=I.BYTE;W.OffSize=W.BYTE;I.SID=I.USHORT;W.SID=W.USHORT;I.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?I.NUMBER16(n):I.NUMBER32(n)};W.NUMBER=function(n){return I.NUMBER(n).length};I.NUMBER16=function(n){return[28,n>>8&255,n&255]};W.NUMBER16=it(3);I.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]};W.NUMBER32=it(5);I.REAL=function(n){var e=n.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){var i=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*i)/i).toString()}for(var r="",s=0,a=e.length;s<a;s+=1){var o=e[s];o==="e"?r+=e[++s]==="-"?"c":"b":o==="."?r+="a":o==="-"?r+="e":r+=o}r+=r.length&1?"f":"ff";for(var l=[30],c=0,h=r.length;c<h;c+=2)l.push(parseInt(r.substr(c,2),16));return l};W.REAL=function(n){return I.REAL(n).length};I.NAME=I.CHARARRAY;W.NAME=W.CHARARRAY;I.STRING=I.CHARARRAY;W.STRING=W.CHARARRAY;A0.UTF8=function(n,e,t){for(var i=[],r=t,s=0;s<r;s++,e+=1)i[s]=n.getUint8(e);return String.fromCharCode.apply(null,i)};A0.UTF16=function(n,e,t){for(var i=[],r=t/2,s=0;s<r;s++,e+=2)i[s]=n.getUint16(e);return String.fromCharCode.apply(null,i)};I.UTF16=function(n){for(var e=[],t=0;t<n.length;t+=1){var i=n.charCodeAt(t);e[e.length]=i>>8&255,e[e.length]=i&255}return e};W.UTF16=function(n){return n.length*2};var Ks={"x-mac-croatian":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7","x-mac-cyrillic":"\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E","x-mac-gaelic":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83","x-mac-greek":"\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD","x-mac-icelandic":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-inuit":"\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142","x-mac-ce":"\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7",macintosh:"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-romanian":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-turkish":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"};A0.MACSTRING=function(n,e,t,i){var r=Ks[i];if(r!==void 0){for(var s="",a=0;a<t;a++){var o=n.getUint8(e+a);o<=127?s+=String.fromCharCode(o):s+=r[o&127]}return s}};var ki=typeof WeakMap=="function"&&new WeakMap,Bi,mc=function(n){if(!Bi){Bi={};for(var e in Ks)Bi[e]=new String(e)}var t=Bi[n];if(t!==void 0){if(ki){var i=ki.get(t);if(i!==void 0)return i}var r=Ks[n];if(r!==void 0){for(var s={},a=0;a<r.length;a++)s[r.charCodeAt(a)]=a+128;return ki&&ki.set(t,s),s}}};I.MACSTRING=function(n,e){var t=mc(e);if(t!==void 0){for(var i=[],r=0;r<n.length;r++){var s=n.charCodeAt(r);if(s>=128&&(s=t[s],s===void 0))return;i[r]=s}return i}};W.MACSTRING=function(n,e){var t=I.MACSTRING(n,e);return t!==void 0?t.length:0};function Qs(n){return n>=-128&&n<=127}function gc(n,e,t){for(var i=0,r=n.length;e<r&&i<64&&n[e]===0;)++e,++i;return t.push(128|i-1),e}function xc(n,e,t){for(var i=0,r=n.length,s=e;s<r&&i<64;){var a=n[s];if(!Qs(a)||a===0&&s+1<r&&n[s+1]===0)break;++s,++i}t.push(i-1);for(var o=e;o<s;++o)t.push(n[o]+256&255);return s}function vc(n,e,t){for(var i=0,r=n.length,s=e;s<r&&i<64;){var a=n[s];if(a===0||Qs(a)&&s+1<r&&Qs(n[s+1]))break;++s,++i}t.push(64|i-1);for(var o=e;o<s;++o){var l=n[o];t.push(l+65536>>8&255,l+256&255)}return s}I.VARDELTAS=function(n){for(var e=0,t=[];e<n.length;){var i=n[e];i===0?e=gc(n,e,t):i>=-128&&i<=127?e=xc(n,e,t):e=vc(n,e,t)}return t};I.INDEX=function(n){for(var e=1,t=[e],i=[],r=0;r<n.length;r+=1){var s=I.OBJECT(n[r]);Array.prototype.push.apply(i,s),e+=s.length,t.push(e)}if(i.length===0)return[0,0];for(var a=[],o=1+Math.floor(Math.log(e)/Math.log(2))/8|0,l=[void 0,I.BYTE,I.USHORT,I.UINT24,I.ULONG][o],c=0;c<t.length;c+=1){var h=l(t[c]);Array.prototype.push.apply(a,h)}return Array.prototype.concat(I.Card16(n.length),I.OffSize(o),a,i)};W.INDEX=function(n){return I.INDEX(n).length};I.DICT=function(n){for(var e=[],t=Object.keys(n),i=t.length,r=0;r<i;r+=1){var s=parseInt(t[r],0),a=n[s];e=e.concat(I.OPERAND(a.value,a.type)),e=e.concat(I.OPERATOR(s))}return e};W.DICT=function(n){return I.DICT(n).length};I.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]};I.OPERAND=function(n,e){var t=[];if(Array.isArray(e))for(var i=0;i<e.length;i+=1)V.argument(n.length===e.length,"Not enough arguments given for type"+e),t=t.concat(I.OPERAND(n[i],e[i]));else if(e==="SID")t=t.concat(I.NUMBER(n));else if(e==="offset")t=t.concat(I.NUMBER32(n));else if(e==="number")t=t.concat(I.NUMBER(n));else if(e==="real")t=t.concat(I.REAL(n));else throw new Error("Unknown operand type "+e);return t};I.OP=I.BYTE;W.OP=W.BYTE;var Gi=typeof WeakMap=="function"&&new WeakMap;I.CHARSTRING=function(n){if(Gi){var e=Gi.get(n);if(e!==void 0)return e}for(var t=[],i=n.length,r=0;r<i;r+=1){var s=n[r];t=t.concat(I[s.type](s.value))}return Gi&&Gi.set(n,t),t};W.CHARSTRING=function(n){return I.CHARSTRING(n).length};I.OBJECT=function(n){var e=I[n.type];return V.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)};W.OBJECT=function(n){var e=W[n.type];return V.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)};I.TABLE=function(n){for(var e=[],t=n.fields.length,i=[],r=[],s=0;s<t;s+=1){var a=n.fields[s],o=I[a.type];V.argument(o!==void 0,"No encoding function for field type "+a.type+" ("+a.name+")");var l=n[a.name];l===void 0&&(l=a.value);var c=o(l);a.type==="TABLE"?(r.push(e.length),e=e.concat([0,0]),i.push(c)):e=e.concat(c)}for(var h=0;h<i.length;h+=1){var f=r[h],u=e.length;V.argument(u<65536,"Table "+n.tableName+" too big."),e[f]=u>>8,e[f+1]=u&255,e=e.concat(i[h])}return e};W.TABLE=function(n){for(var e=0,t=n.fields.length,i=0;i<t;i+=1){var r=n.fields[i],s=W[r.type];V.argument(s!==void 0,"No sizeOf function for field type "+r.type+" ("+r.name+")");var a=n[r.name];a===void 0&&(a=r.value),e+=s(a),r.type==="TABLE"&&(e+=2)}return e};I.RECORD=I.TABLE;W.RECORD=W.TABLE;I.LITERAL=function(n){return n};W.LITERAL=function(n){return n.length};function _e(n,e,t){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var i=0;i<e.length;i+=1){var r=e[i];this[r.name]=r.value}if(this.tableName=n,this.fields=e,t)for(var s=Object.keys(t),a=0;a<s.length;a+=1){var o=s[a],l=t[o];this[o]!==void 0&&(this[o]=l)}}_e.prototype.encode=function(){return I.TABLE(this)};_e.prototype.sizeOf=function(){return W.TABLE(this)};function An(n,e,t){t===void 0&&(t=e.length);var i=new Array(e.length+1);i[0]={name:n+"Count",type:"USHORT",value:t};for(var r=0;r<e.length;r++)i[r+1]={name:n+r,type:"USHORT",value:e[r]};return i}function $s(n,e,t){var i=e.length,r=new Array(i+1);r[0]={name:n+"Count",type:"USHORT",value:i};for(var s=0;s<i;s++)r[s+1]={name:n+s,type:"TABLE",value:t(e[s],s)};return r}function wn(n,e,t){var i=e.length,r=[];r[0]={name:n+"Count",type:"USHORT",value:i};for(var s=0;s<i;s++)r=r.concat(t(e[s],s));return r}function Xi(n){n.format===1?_e.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(An("glyph",n.glyphs))):n.format===2?_e.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(wn("rangeRecord",n.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):V.assert(!1,"Coverage format must be 1 or 2.")}Xi.prototype=Object.create(_e.prototype);Xi.prototype.constructor=Xi;function qi(n){_e.call(this,"scriptListTable",wn("scriptRecord",n,function(e,t){var i=e.script,r=i.defaultLangSys;return V.assert(!!r,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new _e("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new _e("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:r.reqFeatureIndex}].concat(An("featureIndex",r.featureIndexes)))}].concat(wn("langSys",i.langSysRecords,function(s,a){var o=s.langSys;return[{name:"langSysTag"+a,type:"TAG",value:s.tag},{name:"langSys"+a,type:"TABLE",value:new _e("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(An("featureIndex",o.featureIndexes)))}]})))}]}))}qi.prototype=Object.create(_e.prototype);qi.prototype.constructor=qi;function Yi(n){_e.call(this,"featureListTable",wn("featureRecord",n,function(e,t){var i=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new _e("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(An("lookupListIndex",i.lookupListIndexes)))}]}))}Yi.prototype=Object.create(_e.prototype);Yi.prototype.constructor=Yi;function Ji(n,e){_e.call(this,"lookupListTable",$s("lookup",n,function(t){var i=e[t.lookupType];return V.assert(!!i,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new _e("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat($s("subtable",t.subtables,i)))}))}Ji.prototype=Object.create(_e.prototype);Ji.prototype.constructor=Ji;var N={Table:_e,Record:_e,Coverage:Xi,ScriptList:qi,FeatureList:Yi,LookupList:Ji,ushortList:An,tableList:$s,recordList:wn};function Xo(n,e){return n.getUint8(e)}function Zi(n,e){return n.getUint16(e,!1)}function yc(n,e){return n.getInt16(e,!1)}function oa(n,e){return n.getUint32(e,!1)}function I1(n,e){var t=n.getInt16(e,!1),i=n.getUint16(e+2,!1);return t+i/65535}function _c(n,e){for(var t="",i=e;i<e+4;i+=1)t+=String.fromCharCode(n.getInt8(i));return t}function Sc(n,e,t){for(var i=0,r=0;r<t;r+=1)i<<=8,i+=n.getUint8(e+r);return i}function bc(n,e,t){for(var i=[],r=e;r<t;r+=1)i.push(n.getUint8(r));return i}function Mc(n){for(var e="",t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var Tc={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function T(n,e){this.data=n,this.offset=e,this.relativeOffset=0}T.prototype.parseByte=function(){var n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};T.prototype.parseChar=function(){var n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};T.prototype.parseCard8=T.prototype.parseByte;T.prototype.parseUShort=function(){var n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};T.prototype.parseCard16=T.prototype.parseUShort;T.prototype.parseSID=T.prototype.parseUShort;T.prototype.parseOffset16=T.prototype.parseUShort;T.prototype.parseShort=function(){var n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};T.prototype.parseF2Dot14=function(){var n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n};T.prototype.parseULong=function(){var n=oa(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};T.prototype.parseOffset32=T.prototype.parseULong;T.prototype.parseFixed=function(){var n=I1(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};T.prototype.parseString=function(n){var e=this.data,t=this.offset+this.relativeOffset,i="";this.relativeOffset+=n;for(var r=0;r<n;r++)i+=String.fromCharCode(e.getUint8(t+r));return i};T.prototype.parseTag=function(){return this.parseString(4)};T.prototype.parseLongDateTime=function(){var n=oa(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n};T.prototype.parseVersion=function(n){var e=Zi(this.data,this.offset+this.relativeOffset),t=Zi(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10};T.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=Tc[n]*e};T.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint32(i),i+=4;return this.relativeOffset+=n*4,e};T.prototype.parseOffset16List=T.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint16(i),i+=2;return this.relativeOffset+=n*2,e};T.prototype.parseShortList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getInt16(i),i+=2;return this.relativeOffset+=n*2,e};T.prototype.parseByteList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint8(i++);return this.relativeOffset+=n,e};T.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};T.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};T.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var s={},a=0;a<i.length;a++){var o=i[a],l=e[o];s[o]=l.call(this)}t[r]=s}return t};T.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var s={},a=0;a<i.length;a++){var o=i[a],l=e[o];s[o]=l.call(this)}t[r]=s}return t};T.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);for(var e=Object.keys(n),t={},i=0;i<e.length;i++){var r=e[i],s=n[r];t[r]=s.call(this)}return t};T.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n!==0){var e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};T.prototype.parseValueRecordList=function(){for(var n=this.parseUShort(),e=this.parseUShort(),t=new Array(e),i=0;i<e;i++)t[i]=this.parseValueRecord(n);return t};T.prototype.parsePointer=function(n){var e=this.parseOffset16();if(e>0)return new T(this.data,this.offset+e).parseStruct(n)};T.prototype.parsePointer32=function(n){var e=this.parseOffset32();if(e>0)return new T(this.data,this.offset+e).parseStruct(n)};T.prototype.parseListOfLists=function(n){for(var e=this.parseOffset16List(),t=e.length,i=this.relativeOffset,r=new Array(t),s=0;s<t;s++){var a=e[s];if(a===0){r[s]=void 0;continue}if(this.relativeOffset=a,n){for(var o=this.parseOffset16List(),l=new Array(o.length),c=0;c<o.length;c++)this.relativeOffset=a+o[c],l[c]=n.call(this);r[s]=l}else r[s]=this.parseUShortList()}return this.relativeOffset=i,r};T.prototype.parseCoverage=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){for(var i=new Array(t),r=0;r<t;r++)i[r]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")};T.prototype.parseClassDef=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:T.uShort,end:T.uShort,classId:T.uShort})};throw new Error("0x"+n.toString(16)+": ClassDef format must be 1 or 2.")};T.list=function(n,e){return function(){return this.parseList(n,e)}};T.list32=function(n,e){return function(){return this.parseList32(n,e)}};T.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}};T.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}};T.pointer=function(n){return function(){return this.parsePointer(n)}};T.pointer32=function(n){return function(){return this.parsePointer32(n)}};T.tag=T.prototype.parseTag;T.byte=T.prototype.parseByte;T.uShort=T.offset16=T.prototype.parseUShort;T.uShortList=T.prototype.parseUShortList;T.uLong=T.offset32=T.prototype.parseULong;T.uLongList=T.prototype.parseULongList;T.struct=T.prototype.parseStruct;T.coverage=T.prototype.parseCoverage;T.classDef=T.prototype.parseClassDef;var qo={reserved:T.uShort,reqFeatureIndex:T.uShort,featureIndexes:T.uShortList};T.prototype.parseScriptList=function(){return this.parsePointer(T.recordList({tag:T.tag,script:T.pointer({defaultLangSys:T.pointer(qo),langSysRecords:T.recordList({tag:T.tag,langSys:T.pointer(qo)})})}))||[]};T.prototype.parseFeatureList=function(){return this.parsePointer(T.recordList({tag:T.tag,feature:T.pointer({featureParams:T.offset16,lookupListIndexes:T.uShortList})}))||[]};T.prototype.parseLookupList=function(n){return this.parsePointer(T.list(T.pointer(function(){var e=this.parseUShort();V.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var t=this.parseUShort(),i=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(T.pointer(n[e])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};T.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var n=this.parseUShort(),e=this.parseUShort();V.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:T.offset32,featureTableSubstitutionOffset:T.offset32});return t})||[]};var k={getByte:Xo,getCard8:Xo,getUShort:Zi,getCard16:Zi,getShort:yc,getULong:oa,getFixed:I1,getTag:_c,getOffset:Sc,getBytes:bc,bytesToString:Mc,Parser:T};function Ec(n,e){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();var t;n.groupCount=t=e.parseULong(),n.glyphIndexMap={};for(var i=0;i<t;i+=1)for(var r=e.parseULong(),s=e.parseULong(),a=e.parseULong(),o=r;o<=s;o+=1)n.glyphIndexMap[o]=a,a++}function Ac(n,e,t,i,r){n.length=e.parseUShort(),n.language=e.parseUShort();var s;n.segCount=s=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};for(var a=new k.Parser(t,i+r+14),o=new k.Parser(t,i+r+16+s*2),l=new k.Parser(t,i+r+16+s*4),c=new k.Parser(t,i+r+16+s*6),h=i+r+16+s*8,f=0;f<s-1;f+=1)for(var u=void 0,p=a.parseUShort(),g=o.parseUShort(),x=l.parseShort(),v=c.parseUShort(),y=g;y<=p;y+=1)v!==0?(h=c.offset+c.relativeOffset-2,h+=v,h+=(y-g)*2,u=k.getUShort(t,h),u!==0&&(u=u+x&65535)):u=y+x&65535,n.glyphIndexMap[y]=u}function wc(n,e){var t={};t.version=k.getUShort(n,e),V.argument(t.version===0,"cmap table version should be 0."),t.numTables=k.getUShort(n,e+2);for(var i=-1,r=t.numTables-1;r>=0;r-=1){var s=k.getUShort(n,e+4+r*8),a=k.getUShort(n,e+4+r*8+2);if(s===3&&(a===0||a===1||a===10)||s===0&&(a===0||a===1||a===2||a===3||a===4)){i=k.getULong(n,e+4+r*8+4);break}}if(i===-1)throw new Error("No valid cmap sub-tables found.");var o=new k.Parser(n,e+i);if(t.format=o.parseUShort(),t.format===12)Ec(t,o);else if(t.format===4)Ac(t,o,n,e,i);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function Cc(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function Pc(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function Rc(n){var e=!0,t;for(t=n.length-1;t>0;t-=1){var i=n.get(t);if(i.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var r=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(r=r.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),r=r.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var s=new N.Table("cmap",r);for(s.segments=[],t=0;t<n.length;t+=1){for(var a=n.get(t),o=0;o<a.unicodes.length;o+=1)Cc(s,a.unicodes[o],t);s.segments=s.segments.sort(function(M,_){return M.start-_.start})}Pc(s);var l=s.segments.length,c=0,h=[],f=[],u=[],p=[],g=[],x=[];for(t=0;t<l;t+=1){var v=s.segments[t];v.end<=65535&&v.start<=65535?(h=h.concat({name:"end_"+t,type:"USHORT",value:v.end}),f=f.concat({name:"start_"+t,type:"USHORT",value:v.start}),u=u.concat({name:"idDelta_"+t,type:"SHORT",value:v.delta}),p=p.concat({name:"idRangeOffset_"+t,type:"USHORT",value:v.offset}),v.glyphId!==void 0&&(g=g.concat({name:"glyph_"+t,type:"USHORT",value:v.glyphId}))):c+=1,!e&&v.glyphIndex!==void 0&&(x=x.concat({name:"cmap12Start_"+t,type:"ULONG",value:v.start}),x=x.concat({name:"cmap12End_"+t,type:"ULONG",value:v.end}),x=x.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:v.glyphIndex}))}if(s.segCountX2=(l-c)*2,s.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,s.entrySelector=Math.log(s.searchRange/2)/Math.log(2),s.rangeShift=s.segCountX2-s.searchRange,s.fields=s.fields.concat(h),s.fields.push({name:"reservedPad",type:"USHORT",value:0}),s.fields=s.fields.concat(f),s.fields=s.fields.concat(u),s.fields=s.fields.concat(p),s.fields=s.fields.concat(g),s.cmap4Length=14+h.length*2+2+f.length*2+u.length*2+p.length*2+g.length*2,!e){var y=16+x.length*4;s.cmap12Offset=20+s.cmap4Length,s.fields=s.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:y},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:x.length/3}]),s.fields=s.fields.concat(x)}return s}var L1={parse:wc,make:Rc},Vi=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],Ic=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],Lc=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],$t=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function F1(n){this.font=n}F1.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.font.glyphs;if(t){for(var i=0;i<t.length;i+=1)for(var r=t.get(i),s=0;s<r.unicodes.length;s+=1)if(r.unicodes[s]===e)return i}return null};function D1(n){this.cmap=n}D1.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function Ki(n,e){this.encoding=n,this.charset=e}Ki.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function la(n){switch(n.version){case 1:this.names=$t.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(var e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<$t.length?this.names[e]=$t[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-$t.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(var t=0;t<n.numberOfGlyphs;t++)this.names[t]=$t[t+n.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}la.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)};la.prototype.glyphIndexToName=function(n){return this.names[n]};function Fc(n){for(var e,t=n.tables.cmap.glyphIndexMap,i=Object.keys(t),r=0;r<i.length;r+=1){var s=i[r],a=t[s];e=n.glyphs.get(a),e.addUnicode(parseInt(s))}for(var o=0;o<n.glyphs.length;o+=1)e=n.glyphs.get(o),n.cffEncoding?n.isCIDFont?e.name="gid"+o:e.name=n.cffEncoding.charset[o]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(o))}function Dc(n){n._IndexToUnicodeMap={};for(var e=n.tables.cmap.glyphIndexMap,t=Object.keys(e),i=0;i<t.length;i+=1){var r=t[i],s=e[r];n._IndexToUnicodeMap[s]===void 0?n._IndexToUnicodeMap[s]={unicodes:[parseInt(r)]}:n._IndexToUnicodeMap[s].unicodes.push(parseInt(r))}}function Nc(n,e){e.lowMemory?Dc(n):Fc(n)}function Oc(n,e,t,i,r){n.beginPath(),n.moveTo(e,t),n.lineTo(i,r),n.stroke()}var Qt={line:Oc};function Uc(n,e){var t=e||new ge;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(i){t=i}}}function Be(n){this.bindConstructorValues(n)}Be.prototype.bindConstructorValues=function(n){this.index=n.index||0,this.name=n.name||null,this.unicode=n.unicode||void 0,this.unicodes=n.unicodes||n.unicode!==void 0?[n.unicode]:[],"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),Object.defineProperty(this,"path",Uc(this,n.path))};Be.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)};Be.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Be.prototype.getPath=function(n,e,t,i,r){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72;var s,a;i||(i={});var o=i.xScale,l=i.yScale;if(i.hinting&&r&&r.hinting&&(a=this.path&&r.hinting.exec(this,t)),a)s=r.hinting.getCommands(a),n=Math.round(n),e=Math.round(e),o=l=1;else{s=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*t;o===void 0&&(o=c),l===void 0&&(l=c)}for(var h=new ge,f=0;f<s.length;f+=1){var u=s[f];u.type==="M"?h.moveTo(n+u.x*o,e+-u.y*l):u.type==="L"?h.lineTo(n+u.x*o,e+-u.y*l):u.type==="Q"?h.quadraticCurveTo(n+u.x1*o,e+-u.y1*l,n+u.x*o,e+-u.y*l):u.type==="C"?h.curveTo(n+u.x1*o,e+-u.y1*l,n+u.x2*o,e+-u.y2*l,n+u.x*o,e+-u.y*l):u.type==="Z"&&h.closePath()}return h};Be.prototype.getContours=function(){if(this.points===void 0)return[];for(var n=[],e=[],t=0;t<this.points.length;t+=1){var i=this.points[t];e.push(i),i.lastPointOfContour&&(n.push(e),e=[])}return V.argument(e.length===0,"There are still points left in the current contour."),n};Be.prototype.getMetrics=function(){for(var n=this.path.commands,e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];r.type!=="Z"&&(e.push(r.x),t.push(r.y)),(r.type==="Q"||r.type==="C")&&(e.push(r.x1),t.push(r.y1)),r.type==="C"&&(e.push(r.x2),t.push(r.y2))}var s={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(s.xMin)||(s.xMin=0),isFinite(s.xMax)||(s.xMax=this.advanceWidth),isFinite(s.yMin)||(s.yMin=0),isFinite(s.yMax)||(s.yMax=0),s.rightSideBearing=this.advanceWidth-s.leftSideBearing-(s.xMax-s.xMin),s};Be.prototype.draw=function(n,e,t,i,r){this.getPath(e,t,i,r).draw(n)};Be.prototype.drawPoints=function(n,e,t,i){function r(f,u,p,g){n.beginPath();for(var x=0;x<f.length;x+=1)n.moveTo(u+f[x].x*g,p+f[x].y*g),n.arc(u+f[x].x*g,p+f[x].y*g,2,0,Math.PI*2,!1);n.closePath(),n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24;for(var s=1/this.path.unitsPerEm*i,a=[],o=[],l=this.path,c=0;c<l.commands.length;c+=1){var h=l.commands[c];h.x!==void 0&&a.push({x:h.x,y:-h.y}),h.x1!==void 0&&o.push({x:h.x1,y:-h.y1}),h.x2!==void 0&&o.push({x:h.x2,y:-h.y2})}n.fillStyle="blue",r(a,e,t,s),n.fillStyle="red",r(o,e,t,s)};Be.prototype.drawMetrics=function(n,e,t,i){var r;e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24,r=1/this.path.unitsPerEm*i,n.lineWidth=1,n.strokeStyle="black",Qt.line(n,e,-1e4,e,1e4),Qt.line(n,-1e4,t,1e4,t);var s=this.xMin||0,a=this.yMin||0,o=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;n.strokeStyle="blue",Qt.line(n,e+s*r,-1e4,e+s*r,1e4),Qt.line(n,e+o*r,-1e4,e+o*r,1e4),Qt.line(n,-1e4,t+-a*r,1e4,t+-a*r),Qt.line(n,-1e4,t+-l*r,1e4,t+-l*r),n.strokeStyle="green",Qt.line(n,e+c*r,-1e4,e+c*r,1e4)};function zi(n,e,t){Object.defineProperty(n,e,{get:function(){return n.path,n[t]},set:function(i){n[t]=i},enumerable:!0,configurable:!0})}function ca(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(var t=0;t<e.length;t++){var i=e[t];i.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=i}this.length=e&&e.length||0}ca.prototype.get=function(n){if(this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());var e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(var i=0;i<t.unicodes.length;i++)e.addUnicode(t.unicodes[i]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+n:e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]};ca.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function kc(n,e){return new Be({index:e,font:n})}function Bc(n,e,t,i,r,s){return function(){var a=new Be({index:e,font:n});return a.path=function(){t(a,i,r);var o=s(n.glyphs,a);return o.unitsPerEm=n.unitsPerEm,o},zi(a,"xMin","_xMin"),zi(a,"xMax","_xMax"),zi(a,"yMin","_yMin"),zi(a,"yMax","_yMax"),a}}function Gc(n,e,t,i){return function(){var r=new Be({index:e,font:n});return r.path=function(){var s=t(n,r,i);return s.unitsPerEm=n.unitsPerEm,s},r}}var ht={GlyphSet:ca,glyphLoader:kc,ttfGlyphLoader:Bc,cffGlyphLoader:Gc};function N1(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t+=1)if(!N1(n[t],e[t]))return!1;return!0}else return!1}function js(n){var e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function Ot(n,e,t){var i=[],r=[],s=k.getCard16(n,e),a,o;if(s!==0){var l=k.getByte(n,e+2);a=e+(s+1)*l+2;for(var c=e+3,h=0;h<s+1;h+=1)i.push(k.getOffset(n,c,l)),c+=l;o=a+i[s]}else o=e+2;for(var f=0;f<i.length-1;f+=1){var u=k.getBytes(n,a+i[f],a+i[f+1]);t&&(u=t(u)),r.push(u)}return{objects:r,startOffset:e,endOffset:o}}function zc(n,e){var t=[],i=k.getCard16(n,e),r,s;if(i!==0){var a=k.getByte(n,e+2);r=e+(i+1)*a+2;for(var o=e+3,l=0;l<i+1;l+=1)t.push(k.getOffset(n,o,a)),o+=a;s=r+t[i]}else s=e+2;return{offsets:t,startOffset:e,endOffset:s}}function Hc(n,e,t,i,r){var s=k.getCard16(t,i),a=0;if(s!==0){var o=k.getByte(t,i+2);a=i+(s+1)*o+2}var l=k.getBytes(t,a+e[n],a+e[n+1]);return r&&(l=r(l)),l}function Vc(n){for(var e="",t=15,i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var r=n.parseByte(),s=r>>4,a=r&15;if(s===t||(e+=i[s],a===t))break;e+=i[a]}return parseFloat(e)}function Wc(n,e){var t,i,r,s;if(e===28)return t=n.parseByte(),i=n.parseByte(),t<<8|i;if(e===29)return t=n.parseByte(),i=n.parseByte(),r=n.parseByte(),s=n.parseByte(),t<<24|i<<16|r<<8|s;if(e===30)return Vc(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function Xc(n){for(var e={},t=0;t<n.length;t+=1){var i=n[t][0],r=n[t][1],s=void 0;if(r.length===1?s=r[0]:s=r,e.hasOwnProperty(i)&&!isNaN(e[i]))throw new Error("Object "+e+" already has key "+i);e[i]=s}return e}function O1(n,e,t){e=e!==void 0?e:0;var i=new k.Parser(n,e),r=[],s=[];for(t=t!==void 0?t:n.length;i.relativeOffset<t;){var a=i.parseByte();a<=21?(a===12&&(a=1200+i.parseByte()),r.push([a,s]),s=[]):s.push(Wc(i,a))}return Xc(r)}function Tn(n,e){return e<=390?e=Vi[e]:e=n[e-391],e}function U1(n,e,t){for(var i={},r,s=0;s<e.length;s+=1){var a=e[s];if(Array.isArray(a.type)){var o=[];o.length=a.type.length;for(var l=0;l<a.type.length;l++)r=n[a.op]!==void 0?n[a.op][l]:void 0,r===void 0&&(r=a.value!==void 0&&a.value[l]!==void 0?a.value[l]:null),a.type[l]==="SID"&&(r=Tn(t,r)),o[l]=r;i[a.name]=o}else r=n[a.op],r===void 0&&(r=a.value!==void 0?a.value:null),a.type==="SID"&&(r=Tn(t,r)),i[a.name]=r}return i}function qc(n,e){var t={};return t.formatMajor=k.getCard8(n,e),t.formatMinor=k.getCard8(n,e+1),t.size=k.getCard8(n,e+2),t.offsetSize=k.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4,t}var k1=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],B1=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function Yc(n,e){var t=O1(n,0,n.byteLength);return U1(t,k1,e)}function G1(n,e,t,i){var r=O1(n,e,t);return U1(r,B1,i)}function Yo(n,e,t,i){for(var r=[],s=0;s<t.length;s+=1){var a=new DataView(new Uint8Array(t[s]).buffer),o=Yc(a,i);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var l=o.private[0],c=o.private[1];if(l!==0&&c!==0){var h=G1(n,c+e,l,i);if(o._defaultWidthX=h.defaultWidthX,o._nominalWidthX=h.nominalWidthX,h.subrs!==0){var f=c+h.subrs,u=Ot(n,f+e);o._subrs=u.objects,o._subrsBias=js(o._subrs)}o._privateDict=h}r.push(o)}return r}function Jc(n,e,t,i){var r,s,a=new k.Parser(n,e);t-=1;var o=[".notdef"],l=a.parseCard8();if(l===0)for(var c=0;c<t;c+=1)r=a.parseSID(),o.push(Tn(i,r));else if(l===1)for(;o.length<=t;){r=a.parseSID(),s=a.parseCard8();for(var h=0;h<=s;h+=1)o.push(Tn(i,r)),r+=1}else if(l===2)for(;o.length<=t;){r=a.parseSID(),s=a.parseCard16();for(var f=0;f<=s;f+=1)o.push(Tn(i,r)),r+=1}else throw new Error("Unknown charset format "+l);return o}function Zc(n,e,t){var i,r={},s=new k.Parser(n,e),a=s.parseCard8();if(a===0)for(var o=s.parseCard8(),l=0;l<o;l+=1)i=s.parseCard8(),r[i]=l;else if(a===1){var c=s.parseCard8();i=1;for(var h=0;h<c;h+=1)for(var f=s.parseCard8(),u=s.parseCard8(),p=f;p<=f+u;p+=1)r[p]=i,i+=1}else throw new Error("Unknown encoding format "+a);return new Ki(r,t)}function Jo(n,e,t){var i,r,s,a,o=new ge,l=[],c=0,h=!1,f=!1,u=0,p=0,g,x,v,y;if(n.isCIDFont){var M=n.tables.cff.topDict._fdSelect[e.index],_=n.tables.cff.topDict._fdArray[M];g=_._subrs,x=_._subrsBias,v=_._defaultWidthX,y=_._nominalWidthX}else g=n.tables.cff.topDict._subrs,x=n.tables.cff.topDict._subrsBias,v=n.tables.cff.topDict._defaultWidthX,y=n.tables.cff.topDict._nominalWidthX;var S=v;function A(P,E){f&&o.closePath(),o.moveTo(P,E),f=!0}function w(){var P;P=l.length%2!==0,P&&!h&&(S=l.shift()+y),c+=l.length>>1,l.length=0,h=!0}function C(P){for(var E,b,R,B,H,q,O,j,ee,te,ne,ae,$=0;$<P.length;){var Se=P[$];switch($+=1,Se){case 1:w();break;case 3:w();break;case 4:l.length>1&&!h&&(S=l.shift()+y,h=!0),p+=l.pop(),A(u,p);break;case 5:for(;l.length>0;)u+=l.shift(),p+=l.shift(),o.lineTo(u,p);break;case 6:for(;l.length>0&&(u+=l.shift(),o.lineTo(u,p),l.length!==0);)p+=l.shift(),o.lineTo(u,p);break;case 7:for(;l.length>0&&(p+=l.shift(),o.lineTo(u,p),l.length!==0);)u+=l.shift(),o.lineTo(u,p);break;case 8:for(;l.length>0;)i=u+l.shift(),r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),p=a+l.shift(),o.curveTo(i,r,s,a,u,p);break;case 10:H=l.pop()+x,q=g[H],q&&C(q);break;case 11:return;case 12:switch(Se=P[$],$+=1,Se){case 35:i=u+l.shift(),r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),O=s+l.shift(),j=a+l.shift(),ee=O+l.shift(),te=j+l.shift(),ne=ee+l.shift(),ae=te+l.shift(),u=ne+l.shift(),p=ae+l.shift(),l.shift(),o.curveTo(i,r,s,a,O,j),o.curveTo(ee,te,ne,ae,u,p);break;case 34:i=u+l.shift(),r=p,s=i+l.shift(),a=r+l.shift(),O=s+l.shift(),j=a,ee=O+l.shift(),te=a,ne=ee+l.shift(),ae=p,u=ne+l.shift(),o.curveTo(i,r,s,a,O,j),o.curveTo(ee,te,ne,ae,u,p);break;case 36:i=u+l.shift(),r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),O=s+l.shift(),j=a,ee=O+l.shift(),te=a,ne=ee+l.shift(),ae=te+l.shift(),u=ne+l.shift(),o.curveTo(i,r,s,a,O,j),o.curveTo(ee,te,ne,ae,u,p);break;case 37:i=u+l.shift(),r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),O=s+l.shift(),j=a+l.shift(),ee=O+l.shift(),te=j+l.shift(),ne=ee+l.shift(),ae=te+l.shift(),Math.abs(ne-u)>Math.abs(ae-p)?u=ne+l.shift():p=ae+l.shift(),o.curveTo(i,r,s,a,O,j),o.curveTo(ee,te,ne,ae,u,p);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Se),l.length=0}break;case 14:l.length>0&&!h&&(S=l.shift()+y,h=!0),f&&(o.closePath(),f=!1);break;case 18:w();break;case 19:case 20:w(),$+=c+7>>3;break;case 21:l.length>2&&!h&&(S=l.shift()+y,h=!0),p+=l.pop(),u+=l.pop(),A(u,p);break;case 22:l.length>1&&!h&&(S=l.shift()+y,h=!0),u+=l.pop(),A(u,p);break;case 23:w();break;case 24:for(;l.length>2;)i=u+l.shift(),r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),p=a+l.shift(),o.curveTo(i,r,s,a,u,p);u+=l.shift(),p+=l.shift(),o.lineTo(u,p);break;case 25:for(;l.length>6;)u+=l.shift(),p+=l.shift(),o.lineTo(u,p);i=u+l.shift(),r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),p=a+l.shift(),o.curveTo(i,r,s,a,u,p);break;case 26:for(l.length%2&&(u+=l.shift());l.length>0;)i=u,r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s,p=a+l.shift(),o.curveTo(i,r,s,a,u,p);break;case 27:for(l.length%2&&(p+=l.shift());l.length>0;)i=u+l.shift(),r=p,s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),p=a,o.curveTo(i,r,s,a,u,p);break;case 28:E=P[$],b=P[$+1],l.push((E<<24|b<<16)>>16),$+=2;break;case 29:H=l.pop()+n.gsubrsBias,q=n.gsubrs[H],q&&C(q);break;case 30:for(;l.length>0&&(i=u,r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),p=a+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,p),l.length!==0);)i=u+l.shift(),r=p,s=i+l.shift(),a=r+l.shift(),p=a+l.shift(),u=s+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,p);break;case 31:for(;l.length>0&&(i=u+l.shift(),r=p,s=i+l.shift(),a=r+l.shift(),p=a+l.shift(),u=s+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,p),l.length!==0);)i=u,r=p+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),p=a+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,p);break;default:Se<32?console.log("Glyph "+e.index+": unknown operator "+Se):Se<247?l.push(Se-139):Se<251?(E=P[$],$+=1,l.push((Se-247)*256+E+108)):Se<255?(E=P[$],$+=1,l.push(-(Se-251)*256-E-108)):(E=P[$],b=P[$+1],R=P[$+2],B=P[$+3],$+=4,l.push((E<<24|b<<16|R<<8|B)/65536))}}}return C(t),e.advanceWidth=S,o}function Kc(n,e,t,i){var r=[],s,a=new k.Parser(n,e),o=a.parseCard8();if(o===0)for(var l=0;l<t;l++){if(s=a.parseCard8(),s>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+s+" (FD count "+i+")");r.push(s)}else if(o===3){var c=a.parseCard16(),h=a.parseCard16();if(h!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+h);for(var f,u=0;u<c;u++){if(s=a.parseCard8(),f=a.parseCard16(),s>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+s+" (FD count "+i+")");if(f>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+f);for(;h<f;h++)r.push(s);h=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+o);return r}function Qc(n,e,t,i){t.tables.cff={};var r=qc(n,e),s=Ot(n,r.endOffset,k.bytesToString),a=Ot(n,s.endOffset),o=Ot(n,a.endOffset,k.bytesToString),l=Ot(n,o.endOffset);t.gsubrs=l.objects,t.gsubrsBias=js(t.gsubrs);var c=Yo(n,e,a.objects,o.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var h=c[0];if(t.tables.cff.topDict=h,h._privateDict&&(t.defaultWidthX=h._privateDict.defaultWidthX,t.nominalWidthX=h._privateDict.nominalWidthX),h.ros[0]!==void 0&&h.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var f=h.fdArray,u=h.fdSelect;if(f===0||u===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=e;var p=Ot(n,f),g=Yo(n,e,p.objects,o.objects);h._fdArray=g,u+=e,h._fdSelect=Kc(n,u,t.numGlyphs,g.length)}var x=e+h.private[1],v=G1(n,x,h.private[0],o.objects);if(t.defaultWidthX=v.defaultWidthX,t.nominalWidthX=v.nominalWidthX,v.subrs!==0){var y=x+v.subrs,M=Ot(n,y);t.subrs=M.objects,t.subrsBias=js(t.subrs)}else t.subrs=[],t.subrsBias=0;var _;i.lowMemory?(_=zc(n,e+h.charStrings),t.nGlyphs=_.offsets.length):(_=Ot(n,e+h.charStrings),t.nGlyphs=_.objects.length);var S=Jc(n,e+h.charset,t.nGlyphs,o.objects);if(h.encoding===0?t.cffEncoding=new Ki(Ic,S):h.encoding===1?t.cffEncoding=new Ki(Lc,S):t.cffEncoding=Zc(n,e+h.encoding,S),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new ht.GlyphSet(t),i.lowMemory)t._push=function(C){var P=Hc(C,_.offsets,n,e+h.charStrings);t.glyphs.push(C,ht.cffGlyphLoader(t,C,Jo,P))};else for(var A=0;A<t.nGlyphs;A+=1){var w=_.objects[A];t.glyphs.push(A,ht.cffGlyphLoader(t,A,Jo,w))}}function z1(n,e){var t,i=Vi.indexOf(n);return i>=0&&(t=i),i=e.indexOf(n),i>=0?t=i+Vi.length:(t=Vi.length+e.length,e.push(n)),t}function $c(){return new N.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function jc(n){var e=new N.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function H1(n,e,t){for(var i={},r=0;r<n.length;r+=1){var s=n[r],a=e[s.name];a!==void 0&&!N1(a,s.value)&&(s.type==="SID"&&(a=z1(a,t)),i[s.op]={name:s.name,type:s.type,value:a})}return i}function Zo(n,e){var t=new N.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=H1(k1,n,e),t}function Ko(n){var e=new N.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function e6(n){var e=new N.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function t6(){return new N.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function n6(n,e){for(var t=new N.Record("Charsets",[{name:"format",type:"Card8",value:0}]),i=0;i<n.length;i+=1){var r=n[i],s=z1(r,e);t.fields.push({name:"glyph_"+i,type:"SID",value:s})}return t}function i6(n){var e=[],t=n.path;e.push({name:"width",type:"NUMBER",value:n.advanceWidth});for(var i=0,r=0,s=0;s<t.commands.length;s+=1){var a=void 0,o=void 0,l=t.commands[s];if(l.type==="Q"){var c=.3333333333333333,h=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*i+h*l.x1),y1:Math.round(c*r+h*l.y1),x2:Math.round(c*l.x+h*l.x1),y2:Math.round(c*l.y+h*l.y1)}}if(l.type==="M")a=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rmoveto",type:"OP",value:21}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="L")a=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rlineto",type:"OP",value:5}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="C"){var f=Math.round(l.x1-i),u=Math.round(l.y1-r),p=Math.round(l.x2-l.x1),g=Math.round(l.y2-l.y1);a=Math.round(l.x-l.x2),o=Math.round(l.y-l.y2),e.push({name:"dx1",type:"NUMBER",value:f}),e.push({name:"dy1",type:"NUMBER",value:u}),e.push({name:"dx2",type:"NUMBER",value:p}),e.push({name:"dy2",type:"NUMBER",value:g}),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rrcurveto",type:"OP",value:8}),i=Math.round(l.x),r=Math.round(l.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function r6(n){for(var e=new N.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<n.length;t+=1){var i=n.get(t),r=i6(i);e.charStrings.push({name:i.name,type:"CHARSTRING",value:r})}return e}function s6(n,e){var t=new N.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=H1(B1,n,e),t}function a6(n,e){for(var t=new N.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/e.unitsPerEm,r={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},s={},a=[],o,l=1;l<n.length;l+=1)o=n.get(l),a.push(o.name);var c=[];t.header=$c(),t.nameIndex=jc([e.postScriptName]);var h=Zo(r,c);t.topDictIndex=Ko(h),t.globalSubrIndex=t6(),t.charsets=n6(a,c),t.charStringsIndex=r6(n),t.privateDict=s6(s,c),t.stringIndex=e6(c);var f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return r.charset=f,r.encoding=0,r.charStrings=r.charset+t.charsets.sizeOf(),r.private[1]=r.charStrings+t.charStringsIndex.sizeOf(),h=Zo(r,c),t.topDictIndex=Ko(h),t}var V1={parse:Qc,make:a6};function o6(n,e){var t={},i=new k.Parser(n,e);return t.version=i.parseVersion(),t.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,t.checkSumAdjustment=i.parseULong(),t.magicNumber=i.parseULong(),V.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=i.parseUShort(),t.unitsPerEm=i.parseUShort(),t.created=i.parseLongDateTime(),t.modified=i.parseLongDateTime(),t.xMin=i.parseShort(),t.yMin=i.parseShort(),t.xMax=i.parseShort(),t.yMax=i.parseShort(),t.macStyle=i.parseUShort(),t.lowestRecPPEM=i.parseUShort(),t.fontDirectionHint=i.parseShort(),t.indexToLocFormat=i.parseShort(),t.glyphDataFormat=i.parseShort(),t}function l6(n){var e=Math.round(new Date().getTime()/1e3)+2082844800,t=e;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new N.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var W1={parse:o6,make:l6};function c6(n,e){var t={},i=new k.Parser(n,e);return t.version=i.parseVersion(),t.ascender=i.parseShort(),t.descender=i.parseShort(),t.lineGap=i.parseShort(),t.advanceWidthMax=i.parseUShort(),t.minLeftSideBearing=i.parseShort(),t.minRightSideBearing=i.parseShort(),t.xMaxExtent=i.parseShort(),t.caretSlopeRise=i.parseShort(),t.caretSlopeRun=i.parseShort(),t.caretOffset=i.parseShort(),i.relativeOffset+=8,t.metricDataFormat=i.parseShort(),t.numberOfHMetrics=i.parseUShort(),t}function h6(n){return new N.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var X1={parse:c6,make:h6};function u6(n,e,t,i,r){for(var s,a,o=new k.Parser(n,e),l=0;l<i;l+=1){l<t&&(s=o.parseUShort(),a=o.parseShort());var c=r.get(l);c.advanceWidth=s,c.leftSideBearing=a}}function f6(n,e,t,i,r){n._hmtxTableData={};for(var s,a,o=new k.Parser(e,t),l=0;l<r;l+=1)l<i&&(s=o.parseUShort(),a=o.parseShort()),n._hmtxTableData[l]={advanceWidth:s,leftSideBearing:a}}function p6(n,e,t,i,r,s,a){a.lowMemory?f6(n,e,t,i,r):u6(e,t,i,r,s)}function d6(n){for(var e=new N.Table("hmtx",[]),t=0;t<n.length;t+=1){var i=n.get(t),r=i.advanceWidth||0,s=i.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:r}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:s})}return e}var q1={parse:p6,make:d6};function m6(n){for(var e=new N.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]),t="",i=12+n.length*4,r=0;r<n.length;++r){var s=t.indexOf(n[r]);s<0&&(s=t.length,t+=n[r]),e.fields.push({name:"offset "+r,type:"USHORT",value:i+s}),e.fields.push({name:"length "+r,type:"USHORT",value:n[r].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function g6(n,e){var t=new k.Parser(n,e),i=t.parseULong();V.argument(i===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var r=t.parseULong(),s=[],a=0;a<r;a++){for(var o="",l=e+t.parseUShort(),c=t.parseUShort(),h=l;h<l+c;++h)o+=String.fromCharCode(n.getInt8(h));s.push(o)}return s}var Y1={make:m6,parse:g6};function x6(n,e){var t={},i=new k.Parser(n,e);return t.version=i.parseVersion(),t.numGlyphs=i.parseUShort(),t.version===1&&(t.maxPoints=i.parseUShort(),t.maxContours=i.parseUShort(),t.maxCompositePoints=i.parseUShort(),t.maxCompositeContours=i.parseUShort(),t.maxZones=i.parseUShort(),t.maxTwilightPoints=i.parseUShort(),t.maxStorage=i.parseUShort(),t.maxFunctionDefs=i.parseUShort(),t.maxInstructionDefs=i.parseUShort(),t.maxStackElements=i.parseUShort(),t.maxSizeOfInstructions=i.parseUShort(),t.maxComponentElements=i.parseUShort(),t.maxComponentDepth=i.parseUShort()),t}function v6(n){return new N.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var J1={parse:x6,make:v6},Z1=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],K1={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},y6={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Q1={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function _6(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return K1[e];case 3:return Q1[e]}}var ea="utf-16",S6={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},b6={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function $1(n,e,t){switch(n){case 0:return ea;case 1:return b6[t]||S6[e];case 3:if(e===1||e===10)return ea;break}}function M6(n,e,t){for(var i={},r=new k.Parser(n,e),s=r.parseUShort(),a=r.parseUShort(),o=r.offset+r.parseUShort(),l=0;l<a;l++){var c=r.parseUShort(),h=r.parseUShort(),f=r.parseUShort(),u=r.parseUShort(),p=Z1[u]||u,g=r.parseUShort(),x=r.parseUShort(),v=_6(c,f,t),y=$1(c,h,f);if(y!==void 0&&v!==void 0){var M=void 0;if(y===ea?M=A0.UTF16(n,o+x,g):M=A0.MACSTRING(n,o+x,g,y),M){var _=i[p];_===void 0&&(_=i[p]={}),_[v]=M}}}var S=0;return s===1&&(S=r.parseUShort()),i}function zs(n){var e={};for(var t in n)e[n[t]]=parseInt(t);return e}function Qo(n,e,t,i,r,s){return new N.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:r},{name:"offset",type:"USHORT",value:s}])}function T6(n,e){var t=n.length,i=e.length-t+1;e:for(var r=0;r<i;r++)for(;r<i;r++){for(var s=0;s<t;s++)if(e[r+s]!==n[s])continue e;return r}return-1}function $o(n,e){var t=T6(n,e);if(t<0){t=e.length;for(var i=0,r=n.length;i<r;++i)e.push(n[i])}return t}function E6(n,e){var t,i=[],r={},s=zs(Z1);for(var a in n){var o=s[a];if(o===void 0&&(o=a),t=parseInt(o),isNaN(t))throw new Error('Name table entry "'+a+'" does not exist, see nameTableNames for complete list.');r[t]=n[a],i.push(t)}for(var l=zs(K1),c=zs(Q1),h=[],f=[],u=0;u<i.length;u++){t=i[u];var p=r[t];for(var g in p){var x=p[g],v=1,y=l[g],M=y6[y],_=$1(v,M,y),S=I.MACSTRING(x,_);S===void 0&&(v=0,y=e.indexOf(g),y<0&&(y=e.length,e.push(g)),M=4,S=I.UTF16(x));var A=$o(S,f);h.push(Qo(v,M,y,t,S.length,A));var w=c[g];if(w!==void 0){var C=I.UTF16(x),P=$o(C,f);h.push(Qo(3,1,w,t,C.length,P))}}}h.sort(function(R,B){return R.platformID-B.platformID||R.encodingID-B.encodingID||R.languageID-B.languageID||R.nameID-B.nameID});for(var E=new N.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:h.length},{name:"stringOffset",type:"USHORT",value:6+h.length*12}]),b=0;b<h.length;b++)E.fields.push({name:"record_"+b,type:"RECORD",value:h[b]});return E.fields.push({name:"strings",type:"LITERAL",value:f}),E}var j1={parse:M6,make:E6},ta=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function A6(n){for(var e=0;e<ta.length;e+=1){var t=ta[e];if(n>=t.begin&&n<t.end)return e}return-1}function w6(n,e){var t={},i=new k.Parser(n,e);t.version=i.parseUShort(),t.xAvgCharWidth=i.parseShort(),t.usWeightClass=i.parseUShort(),t.usWidthClass=i.parseUShort(),t.fsType=i.parseUShort(),t.ySubscriptXSize=i.parseShort(),t.ySubscriptYSize=i.parseShort(),t.ySubscriptXOffset=i.parseShort(),t.ySubscriptYOffset=i.parseShort(),t.ySuperscriptXSize=i.parseShort(),t.ySuperscriptYSize=i.parseShort(),t.ySuperscriptXOffset=i.parseShort(),t.ySuperscriptYOffset=i.parseShort(),t.yStrikeoutSize=i.parseShort(),t.yStrikeoutPosition=i.parseShort(),t.sFamilyClass=i.parseShort(),t.panose=[];for(var r=0;r<10;r++)t.panose[r]=i.parseByte();return t.ulUnicodeRange1=i.parseULong(),t.ulUnicodeRange2=i.parseULong(),t.ulUnicodeRange3=i.parseULong(),t.ulUnicodeRange4=i.parseULong(),t.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),t.fsSelection=i.parseUShort(),t.usFirstCharIndex=i.parseUShort(),t.usLastCharIndex=i.parseUShort(),t.sTypoAscender=i.parseShort(),t.sTypoDescender=i.parseShort(),t.sTypoLineGap=i.parseShort(),t.usWinAscent=i.parseUShort(),t.usWinDescent=i.parseUShort(),t.version>=1&&(t.ulCodePageRange1=i.parseULong(),t.ulCodePageRange2=i.parseULong()),t.version>=2&&(t.sxHeight=i.parseShort(),t.sCapHeight=i.parseShort(),t.usDefaultChar=i.parseUShort(),t.usBreakChar=i.parseUShort(),t.usMaxContent=i.parseUShort()),t}function C6(n){return new N.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var na={parse:w6,make:C6,unicodeRanges:ta,getUnicodeRange:A6};function P6(n,e){var t={},i=new k.Parser(n,e);switch(t.version=i.parseVersion(),t.italicAngle=i.parseFixed(),t.underlinePosition=i.parseShort(),t.underlineThickness=i.parseShort(),t.isFixedPitch=i.parseULong(),t.minMemType42=i.parseULong(),t.maxMemType42=i.parseULong(),t.minMemType1=i.parseULong(),t.maxMemType1=i.parseULong(),t.version){case 1:t.names=$t.slice();break;case 2:t.numberOfGlyphs=i.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)t.glyphNameIndex[r]=i.parseUShort();t.names=[];for(var s=0;s<t.numberOfGlyphs;s++)if(t.glyphNameIndex[s]>=$t.length){var a=i.parseChar();t.names.push(i.parseString(a))}break;case 2.5:t.numberOfGlyphs=i.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var o=0;o<t.numberOfGlyphs;o++)t.offset[o]=i.parseChar();break}return t}function R6(){return new N.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var e2={parse:P6,make:R6},et=new Array(9);et[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(T.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(T.coverage),substitute:this.parseOffset16List()};V.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};et[2]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(T.coverage),sequences:this.parseListOfLists()}};et[3]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(T.coverage),alternateSets:this.parseListOfLists()}};et[4]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(T.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var E0={sequenceIndex:T.uShort,lookupListIndex:T.uShort};et[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(T.coverage),ruleSets:this.parseListOfLists(function(){var s=this.parseUShort(),a=this.parseUShort();return{input:this.parseUShortList(s-1),lookupRecords:this.parseRecordList(a,E0)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(T.coverage),classDef:this.parsePointer(T.classDef),classSets:this.parseListOfLists(function(){var s=this.parseUShort(),a=this.parseUShort();return{classes:this.parseUShortList(s-1),lookupRecords:this.parseRecordList(a,E0)}})};if(t===3){var i=this.parseUShort(),r=this.parseUShort();return{substFormat:t,coverages:this.parseList(i,T.pointer(T.coverage)),lookupRecords:this.parseRecordList(r,E0)}}V.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};et[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(T.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(E0)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(T.coverage),backtrackClassDef:this.parsePointer(T.classDef),inputClassDef:this.parsePointer(T.classDef),lookaheadClassDef:this.parsePointer(T.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(E0)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(T.pointer(T.coverage)),inputCoverage:this.parseList(T.pointer(T.coverage)),lookaheadCoverage:this.parseList(T.pointer(T.coverage)),lookupRecords:this.parseRecordList(E0)};V.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};et[7]=function(){var e=this.parseUShort();V.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),i=new T(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:et[t].call(i)}};et[8]=function(){var e=this.parseUShort();return V.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(T.coverage),backtrackCoverage:this.parseList(T.pointer(T.coverage)),lookaheadCoverage:this.parseList(T.pointer(T.coverage)),substitutes:this.parseUShortList()}};function I6(n,e){e=e||0;var t=new T(n,e),i=t.parseVersion(1);return V.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(et)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(et),variations:t.parseFeatureVariationsList()}}var w0=new Array(9);w0[1]=function(e){return e.substFormat===1?new N.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new N.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new N.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new N.Coverage(e.coverage)}].concat(N.ushortList("substitute",e.substitute)))};w0[2]=function(e){return V.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new N.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new N.Coverage(e.coverage)}].concat(N.tableList("seqSet",e.sequences,function(t){return new N.Table("sequenceSetTable",N.ushortList("sequence",t))})))};w0[3]=function(e){return V.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new N.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new N.Coverage(e.coverage)}].concat(N.tableList("altSet",e.alternateSets,function(t){return new N.Table("alternateSetTable",N.ushortList("alternate",t))})))};w0[4]=function(e){return V.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new N.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new N.Coverage(e.coverage)}].concat(N.tableList("ligSet",e.ligatureSets,function(t){return new N.Table("ligatureSetTable",N.tableList("ligature",t,function(i){return new N.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(N.ushortList("component",i.components,i.components.length+1)))}))})))};w0[6]=function(e){if(e.substFormat===1){var t=new N.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new N.Coverage(e.coverage)}].concat(N.tableList("chainRuleSet",e.chainRuleSets,function(s){return new N.Table("chainRuleSetTable",N.tableList("chainRule",s,function(a){var o=N.ushortList("backtrackGlyph",a.backtrack,a.backtrack.length).concat(N.ushortList("inputGlyph",a.input,a.input.length+1)).concat(N.ushortList("lookaheadGlyph",a.lookahead,a.lookahead.length)).concat(N.ushortList("substitution",[],a.lookupRecords.length));return a.lookupRecords.forEach(function(l,c){o=o.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new N.Table("chainRuleTable",o)}))})));return t}else if(e.substFormat===2)V.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var i=[{name:"substFormat",type:"USHORT",value:e.substFormat}];i.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(s,a){i.push({name:"backtrackCoverage"+a,type:"TABLE",value:new N.Coverage(s)})}),i.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(s,a){i.push({name:"inputCoverage"+a,type:"TABLE",value:new N.Coverage(s)})}),i.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(s,a){i.push({name:"lookaheadCoverage"+a,type:"TABLE",value:new N.Coverage(s)})}),i.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(s,a){i=i.concat({name:"sequenceIndex"+a,type:"USHORT",value:s.sequenceIndex}).concat({name:"lookupListIndex"+a,type:"USHORT",value:s.lookupListIndex})});var r=new N.Table("chainContextTable",i);return r}V.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function L6(n){return new N.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new N.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new N.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new N.LookupList(n.lookups,w0)}])}var t2={parse:I6,make:L6};function F6(n,e){var t=new k.Parser(n,e),i=t.parseULong();V.argument(i===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var r=t.parseULong(),s={},a=0;a<r;a++){var o=t.parseTag(),l=t.parseULong(),c=t.parseULong(),h=A0.UTF8(n,e+l,c);s[o]=h}return s}function D6(n){var e=Object.keys(n).length,t="",i=16+e*12,r=new N.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:e}]);for(var s in n){var a=t.length;t+=n[s],r.fields.push({name:"tag "+s,type:"TAG",value:s}),r.fields.push({name:"offset "+s,type:"ULONG",value:i+a}),r.fields.push({name:"length "+s,type:"ULONG",value:n[s].length})}return r.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),r}var n2={parse:F6,make:D6};function jo(n){return Math.log(n)/Math.log(2)|0}function ha(n){for(;n.length%4!==0;)n.push(0);for(var e=0,t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function e1(n,e,t,i){return new N.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function i2(n){var e=new N.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;var t=Math.pow(2,jo(e.numTables));e.searchRange=16*t,e.entrySelector=jo(t),e.rangeShift=e.numTables*16-e.searchRange;for(var i=[],r=[],s=e.sizeOf()+e1().sizeOf()*e.numTables;s%4!==0;)s+=1,r.push({name:"padding",type:"BYTE",value:0});for(var a=0;a<n.length;a+=1){var o=n[a];V.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");var l=o.sizeOf(),c=e1(o.tableName,ha(o.encode()),s,l);for(i.push({name:c.tag+" Table Record",type:"RECORD",value:c}),r.push({name:o.tableName+" table",type:"RECORD",value:o}),s+=l,V.argument(!isNaN(s),"Something went wrong calculating the offset.");s%4!==0;)s+=1,r.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(h,f){return h.value.tag>f.value.tag?1:-1}),e.fields=e.fields.concat(i),e.fields=e.fields.concat(r),e}function t1(n,e,t){for(var i=0;i<e.length;i+=1){var r=n.charToGlyphIndex(e[i]);if(r>0){var s=n.glyphs.get(r);return s.getMetrics()}}return t}function N6(n){for(var e=0,t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function O6(n){for(var e=[],t=[],i=[],r=[],s=[],a=[],o=[],l,c=0,h=0,f=0,u=0,p=0,g=0;g<n.glyphs.length;g+=1){var x=n.glyphs.get(g),v=x.unicode|0;if(isNaN(x.advanceWidth))throw new Error("Glyph "+x.name+" ("+g+"): advanceWidth is not a number.");(l>v||l===void 0)&&v>0&&(l=v),c<v&&(c=v);var y=na.getUnicodeRange(v);if(y<32)h|=1<<y;else if(y<64)f|=1<<y-32;else if(y<96)u|=1<<y-64;else if(y<123)p|=1<<y-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(x.name!==".notdef"){var M=x.getMetrics();e.push(M.xMin),t.push(M.yMin),i.push(M.xMax),r.push(M.yMax),a.push(M.leftSideBearing),o.push(M.rightSideBearing),s.push(x.advanceWidth)}}var _={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,r),advanceWidthMax:Math.max.apply(null,s),advanceWidthAvg:N6(s),minLeftSideBearing:Math.min.apply(null,a),maxLeftSideBearing:Math.max.apply(null,a),minRightSideBearing:Math.min.apply(null,o)};_.ascender=n.ascender,_.descender=n.descender;var S=W1.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:_.xMin,yMin:_.yMin,xMax:_.xMax,yMax:_.yMax,lowestRecPPEM:3,createdTimestamp:n.createdTimestamp}),A=X1.make({ascender:_.ascender,descender:_.descender,advanceWidthMax:_.advanceWidthMax,minLeftSideBearing:_.minLeftSideBearing,minRightSideBearing:_.minRightSideBearing,xMaxExtent:_.maxLeftSideBearing+(_.xMax-_.xMin),numberOfHMetrics:n.glyphs.length}),w=J1.make(n.glyphs.length),C=na.make(Object.assign({xAvgCharWidth:Math.round(_.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:h,ulUnicodeRange2:f,ulUnicodeRange3:u,ulUnicodeRange4:p,sTypoAscender:_.ascender,sTypoDescender:_.descender,sTypoLineGap:0,usWinAscent:_.yMax,usWinDescent:Math.abs(_.yMin),ulCodePageRange1:1,sxHeight:t1(n,"xyvw",{yMax:Math.round(_.ascender/2)}).yMax,sCapHeight:t1(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",_).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),P=q1.make(n.glyphs),E=L1.make(n.glyphs),b=n.getEnglishName("fontFamily"),R=n.getEnglishName("fontSubfamily"),B=b+" "+R,H=n.getEnglishName("postScriptName");H||(H=b.replace(/\s/g,"")+"-"+R);var q={};for(var O in n.names)q[O]=n.names[O];q.uniqueID||(q.uniqueID={en:n.getEnglishName("manufacturer")+":"+B}),q.postScriptName||(q.postScriptName={en:H}),q.preferredFamily||(q.preferredFamily=n.names.fontFamily),q.preferredSubfamily||(q.preferredSubfamily=n.names.fontSubfamily);var j=[],ee=j1.make(q,j),te=j.length>0?Y1.make(j):void 0,ne=e2.make(),ae=V1.make(n.glyphs,{version:n.getEnglishName("version"),fullName:B,familyName:b,weightName:R,postScriptName:H,unitsPerEm:n.unitsPerEm,fontBBox:[0,_.yMin,_.ascender,_.advanceWidthMax]}),$=n.metas&&Object.keys(n.metas).length>0?n2.make(n.metas):void 0,Se=[S,A,w,C,ee,E,ne,ae,P];te&&Se.push(te),n.tables.gsub&&Se.push(t2.make(n.tables.gsub)),$&&Se.push($);for(var ji=i2(Se),v2=ji.encode(),y2=ha(v2),er=ji.fields,ga=!1,Nn=0;Nn<er.length;Nn+=1)if(er[Nn].name==="head table"){er[Nn].value.checkSumAdjustment=2981146554-y2,ga=!0;break}if(!ga)throw new Error("Could not find head table with checkSum to adjust.");return ji}var U6={make:i2,fontToTable:O6,computeCheckSum:ha};function Hs(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,s=n[r].tag;if(s===e)return r;s<e?t=r+1:i=r-1}return-t-1}function n1(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,s=n[r];if(s===e)return r;s<e?t=r+1:i=r-1}return-t-1}function i1(n,e){for(var t,i=0,r=n.length-1;i<=r;){var s=i+r>>>1;t=n[s];var a=t.start;if(a===e)return t;a<e?i=s+1:r=s-1}if(i>0)return t=n[i-1],e>t.end?0:t}function Pn(n,e){this.font=n,this.tableName=e}Pn.prototype={searchTag:Hs,binSearch:n1,getTable:function(n){var e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var n=this.getTable();if(n){for(var e=!1,t=0;t<n.scripts.length;t++){var i=n.scripts[t].tag;if(i==="DFLT")return i;i==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(n,e){var t=this.getTable(e);if(t){n=n||"DFLT";var i=t.scripts,r=Hs(t.scripts,n);if(r>=0)return i[r].script;if(e){var s={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-r,0,s),s.script}}},getLangSysTable:function(n,e,t){var i=this.getScriptTable(n,t);if(i){if(!e||e==="dflt"||e==="DFLT")return i.defaultLangSys;var r=Hs(i.langSysRecords,e);if(r>=0)return i.langSysRecords[r].langSys;if(t){var s={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-r,0,s),s.langSys}}},getFeatureTable:function(n,e,t,i){var r=this.getLangSysTable(n,e,i);if(r){for(var s,a=r.featureIndexes,o=this.font.tables[this.tableName].features,l=0;l<a.length;l++)if(s=o[a[l]],s.tag===t)return s.feature;if(i){var c=o.length;return V.assert(c===0||t>=o[c-1].tag,"Features must be added in alphabetical order."),s={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(s),a.push(c),s.feature}}},getLookupTables:function(n,e,t,i,r){var s=this.getFeatureTable(n,e,t,r),a=[];if(s){for(var o,l=s.lookupListIndexes,c=this.font.tables[this.tableName].lookups,h=0;h<l.length;h++)o=c[l[h]],o.lookupType===i&&a.push(o);if(a.length===0&&r){o={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};var f=c.length;return c.push(o),l.push(f),[o]}}return a},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:var t=i1(n.ranges,e);return t?t.classId:0}},getCoverageIndex:function(n,e){switch(n.format){case 1:var t=n1(n.glyphs,e);return t>=0?t:-1;case 2:var i=i1(n.ranges,e);return i?i.index+e-i.start:-1}},expandCoverage:function(n){if(n.format===1)return n.glyphs;for(var e=[],t=n.ranges,i=0;i<t.length;i++)for(var r=t[i],s=r.start,a=r.end,o=s;o<=a;o++)e.push(o);return e}};function Rn(n){Pn.call(this,n,"gpos")}Rn.prototype=Pn.prototype;Rn.prototype.init=function(){var n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)};Rn.prototype.getKerningValue=function(n,e,t){for(var i=0;i<n.length;i++)for(var r=n[i].subtables,s=0;s<r.length;s++){var a=r[s],o=this.getCoverageIndex(a.coverage,e);if(!(o<0))switch(a.posFormat){case 1:for(var l=a.pairSets[o],c=0;c<l.length;c++){var h=l[c];if(h.secondGlyph===t)return h.value1&&h.value1.xAdvance||0}break;case 2:var f=this.getGlyphClass(a.classDef1,e),u=this.getGlyphClass(a.classDef2,t),p=a.classRecords[f][u];return p.value1&&p.value1.xAdvance||0}}return 0};Rn.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};function Ge(n){Pn.call(this,n,"gsub")}function k6(n,e){var t=n.length;if(t!==e.length)return!1;for(var i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function ua(n,e,t){for(var i=n.subtables,r=0;r<i.length;r++){var s=i[r];if(s.substFormat===e)return s}if(t)return i.push(t),t}Ge.prototype=Pn.prototype;Ge.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Ge.prototype.getSingle=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,1),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),h=void 0;if(l.substFormat===1){var f=l.deltaGlyphId;for(h=0;h<c.length;h++){var u=c[h];i.push({sub:u,by:u+f})}}else{var p=l.substitute;for(h=0;h<c.length;h++)i.push({sub:c[h],by:p[h]})}}return i};Ge.prototype.getMultiple=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,2),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),h=void 0;for(h=0;h<c.length;h++){var f=c[h],u=l.sequences[h];i.push({sub:f,by:u})}}return i};Ge.prototype.getAlternates=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,3),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),h=l.alternateSets,f=0;f<c.length;f++)i.push({sub:c[f],by:h[f]});return i};Ge.prototype.getLigatures=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,4),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),h=l.ligatureSets,f=0;f<c.length;f++)for(var u=c[f],p=h[f],g=0;g<p.length;g++){var x=p[g];i.push({sub:[u].concat(x.components),by:x.ligGlyph})}return i};Ge.prototype.addSingle=function(n,e,t,i){var r=this.getLookupTables(t,i,n,1,!0)[0],s=ua(r,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});V.assert(s.coverage.format===1,"Single: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.substitute.splice(o,0,0)),s.substitute[o]=e.by};Ge.prototype.addMultiple=function(n,e,t,i){V.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var r=this.getLookupTables(t,i,n,2,!0)[0],s=ua(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});V.assert(s.coverage.format===1,"Multiple: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.sequences.splice(o,0,0)),s.sequences[o]=e.by};Ge.prototype.addAlternate=function(n,e,t,i){var r=this.getLookupTables(t,i,n,3,!0)[0],s=ua(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});V.assert(s.coverage.format===1,"Alternate: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.alternateSets.splice(o,0,0)),s.alternateSets[o]=e.by};Ge.prototype.addLigature=function(n,e,t,i){var r=this.getLookupTables(t,i,n,4,!0)[0],s=r.subtables[0];s||(s={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},r.subtables[0]=s),V.assert(s.coverage.format===1,"Ligature: unable to modify coverage table format "+s.coverage.format);var a=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o},c=this.binSearch(s.coverage.glyphs,a);if(c>=0){for(var h=s.ligatureSets[c],f=0;f<h.length;f++)if(k6(h[f].components,o))return;h.push(l)}else c=-1-c,s.coverage.glyphs.splice(c,0,a),s.ligatureSets.splice(c,0,[l])};Ge.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}};Ge.prototype.add=function(n,e,t,i){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,i);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,i):this.addAlternate(n,e,t,i);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,i);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,i):this.addLigature(n,e,t,i)}};function B6(){return typeof window<"u"}function r2(n){for(var e=new ArrayBuffer(n.length),t=new Uint8Array(e),i=0;i<n.length;++i)t[i]=n[i];return e}function G6(n){for(var e=new Buffer(n.byteLength),t=new Uint8Array(n),i=0;i<e.length;++i)e[i]=t[i];return e}function Mn(n,e){if(!n)throw e}function r1(n,e,t,i,r){var s;return(e&i)>0?(s=n.parseByte(),(e&r)===0&&(s=-s),s=t+s):(e&r)>0?s=t:s=t+n.parseShort(),s}function s2(n,e,t){var i=new k.Parser(e,t);n.numberOfContours=i.parseShort(),n._xMin=i.parseShort(),n._yMin=i.parseShort(),n._xMax=i.parseShort(),n._yMax=i.parseShort();var r,s;if(n.numberOfContours>0){for(var a=n.endPointIndices=[],o=0;o<n.numberOfContours;o+=1)a.push(i.parseUShort());n.instructionLength=i.parseUShort(),n.instructions=[];for(var l=0;l<n.instructionLength;l+=1)n.instructions.push(i.parseByte());var c=a[a.length-1]+1;r=[];for(var h=0;h<c;h+=1)if(s=i.parseByte(),r.push(s),(s&8)>0)for(var f=i.parseByte(),u=0;u<f;u+=1)r.push(s),h+=1;if(V.argument(r.length===c,"Bad flags."),a.length>0){var p=[],g;if(c>0){for(var x=0;x<c;x+=1)s=r[x],g={},g.onCurve=!!(s&1),g.lastPointOfContour=a.indexOf(x)>=0,p.push(g);for(var v=0,y=0;y<c;y+=1)s=r[y],g=p[y],g.x=r1(i,s,v,2,16),v=g.x;for(var M=0,_=0;_<c;_+=1)s=r[_],g=p[_],g.y=r1(i,s,M,4,32),M=g.y}n.points=p}else n.points=[]}else if(n.numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];for(var S=!0;S;){r=i.parseUShort();var A={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(r&1)>0?(r&2)>0?(A.dx=i.parseShort(),A.dy=i.parseShort()):A.matchedPoints=[i.parseUShort(),i.parseUShort()]:(r&2)>0?(A.dx=i.parseChar(),A.dy=i.parseChar()):A.matchedPoints=[i.parseByte(),i.parseByte()],(r&8)>0?A.xScale=A.yScale=i.parseF2Dot14():(r&64)>0?(A.xScale=i.parseF2Dot14(),A.yScale=i.parseF2Dot14()):(r&128)>0&&(A.xScale=i.parseF2Dot14(),A.scale01=i.parseF2Dot14(),A.scale10=i.parseF2Dot14(),A.yScale=i.parseF2Dot14()),n.components.push(A),S=!!(r&32)}if(r&256){n.instructionLength=i.parseUShort(),n.instructions=[];for(var w=0;w<n.instructionLength;w+=1)n.instructions.push(i.parseByte())}}}function Vs(n,e){for(var t=[],i=0;i<n.length;i+=1){var r=n[i],s={x:e.xScale*r.x+e.scale01*r.y+e.dx,y:e.scale10*r.x+e.yScale*r.y+e.dy,onCurve:r.onCurve,lastPointOfContour:r.lastPointOfContour};t.push(s)}return t}function z6(n){for(var e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return V.argument(t.length===0,"There are still points left in the current contour."),e}function a2(n){var e=new ge;if(!n)return e;for(var t=z6(n),i=0;i<t.length;++i){var r=t[i],s=null,a=r[r.length-1],o=r[0];if(a.onCurve)e.moveTo(a.x,a.y);else if(o.onCurve)e.moveTo(o.x,o.y);else{var l={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5};e.moveTo(l.x,l.y)}for(var c=0;c<r.length;++c)if(s=a,a=o,o=r[(c+1)%r.length],a.onCurve)e.lineTo(a.x,a.y);else{var h=s,f=o;s.onCurve||(h={x:(a.x+s.x)*.5,y:(a.y+s.y)*.5}),o.onCurve||(f={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5}),e.quadraticCurveTo(a.x,a.y,f.x,f.y)}e.closePath()}return e}function o2(n,e){if(e.isComposite)for(var t=0;t<e.components.length;t+=1){var i=e.components[t],r=n.get(i.glyphIndex);if(r.getPath(),r.points){var s=void 0;if(i.matchedPoints===void 0)s=Vs(r.points,i);else{if(i.matchedPoints[0]>e.points.length-1||i.matchedPoints[1]>r.points.length-1)throw Error("Matched points out of range in "+e.name);var a=e.points[i.matchedPoints[0]],o=r.points[i.matchedPoints[1]],l={xScale:i.xScale,scale01:i.scale01,scale10:i.scale10,yScale:i.yScale,dx:0,dy:0};o=Vs([o],l)[0],l.dx=a.x-o.x,l.dy=a.y-o.y,s=Vs(r.points,l)}e.points=e.points.concat(s)}}return a2(e.points)}function H6(n,e,t,i){for(var r=new ht.GlyphSet(i),s=0;s<t.length-1;s+=1){var a=t[s],o=t[s+1];a!==o?r.push(s,ht.ttfGlyphLoader(i,s,s2,n,e+a,o2)):r.push(s,ht.glyphLoader(i,s))}return r}function V6(n,e,t,i){var r=new ht.GlyphSet(i);return i._push=function(s){var a=t[s],o=t[s+1];a!==o?r.push(s,ht.ttfGlyphLoader(i,s,s2,n,e+a,o2)):r.push(s,ht.glyphLoader(i,s))},r}function W6(n,e,t,i,r){return r.lowMemory?V6(n,e,t,i):H6(n,e,t,i)}var l2={getPath:a2,parse:W6},c2,e0,h2,ia;function u2(n){this.font=n,this.getCommands=function(e){return l2.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function X6(n){return n}function f2(n){return Math.sign(n)*Math.round(Math.abs(n))}function q6(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function Y6(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function J6(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function Z6(n){return Math.sign(n)*Math.floor(Math.abs(n))}var p2=function(n){var e=this.srPeriod,t=this.srPhase,i=this.srThreshold,r=1;return n<0&&(n=-n,r=-1),n+=i-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*r:n*r},ct={x:1,y:0,axis:"x",distance:function(n,e,t,i){return(t?n.xo:n.x)-(i?e.xo:e.x)},interpolate:function(n,e,t,i){var r,s,a,o,l,c,h;if(!i||i===this){if(r=n.xo-e.xo,s=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*a)/h;return}if(r=i.distance(n,e,!0,!0),s=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){ct.setRelative(n,n,(l+c)/2,i,!0);return}ct.setRelative(n,n,(l*o+c*a)/h,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,i,r){if(!i||i===this){n.x=(r?e.xo:e.x)+t;return}var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y;n.x=o+(n.y-l)/i.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},vt={x:0,y:1,axis:"y",distance:function(n,e,t,i){return(t?n.yo:n.y)-(i?e.yo:e.y)},interpolate:function(n,e,t,i){var r,s,a,o,l,c,h;if(!i||i===this){if(r=n.yo-e.yo,s=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*a)/h;return}if(r=i.distance(n,e,!0,!0),s=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){vt.setRelative(n,n,(l+c)/2,i,!0);return}vt.setRelative(n,n,(l*o+c*a)/h,i,!0)},normalSlope:0,setRelative:function(n,e,t,i,r){if(!i||i===this){n.y=(r?e.yo:e.y)+t;return}var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y;n.y=l+i.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(ct);Object.freeze(vt);function In(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}In.prototype.distance=function(n,e,t,i){return this.x*ct.distance(n,e,t,i)+this.y*vt.distance(n,e,t,i)};In.prototype.interpolate=function(n,e,t,i){var r,s,a,o,l,c,h;if(a=i.distance(n,e,!0,!0),o=i.distance(n,t,!0,!0),r=i.distance(e,e,!1,!0),s=i.distance(t,t,!1,!0),l=Math.abs(a),c=Math.abs(o),h=l+c,h===0){this.setRelative(n,n,(r+s)/2,i,!0);return}this.setRelative(n,n,(r*c+s*l)/h,i,!0)};In.prototype.setRelative=function(n,e,t,i,r){i=i||this;var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y,c=i.normalSlope,h=this.slope,f=n.x,u=n.y;n.x=(h*f-c*o+l-u)/(h-c),n.y=h*(n.x-f)+u};In.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function Ln(n,e){var t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?ct:n===0&&e===1?vt:new In(n,e)}function yt(n,e,t,i){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}yt.prototype.nextTouched=function(n){for(var e=this.nextPointOnContour;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};yt.prototype.prevTouched=function(n){for(var e=this.prevPointOnContour;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Cn=Object.freeze(new yt(0,0)),K6={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Ut(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=ct,this.round=f2}}u2.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,i=this._prepState;if(!i||i.ppem!==e){var r=this._fpgmState;if(!r){Ut.prototype=K6,r=this._fpgmState=new Ut("fpgm",t.tables.fpgm),r.funcs=[],r.font=t,exports.DEBUG&&(console.log("---EXEC FPGM---"),r.step=-1);try{e0(r)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}Ut.prototype=r,i=this._prepState=new Ut("prep",t.tables.prep),i.ppem=e;var s=t.tables.cvt;if(s)for(var a=i.cvt=new Array(s.length),o=e/t.unitsPerEm,l=0;l<s.length;l++)a[l]=s[l]*o;else i.cvt=[];exports.DEBUG&&(console.log("---EXEC PREP---"),i.step=-1);try{e0(i)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return h2(n,i)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};h2=function(n,e){var t=e.ppem/e.font.unitsPerEm,i=t,r=n.components,s,a,o;if(Ut.prototype=e,!r)o=new Ut("glyf",n.instructions),exports.DEBUG&&(console.log("---EXEC GLYPH---"),o.step=-1),ia(n,o,t,i),a=o.gZone;else{var l=e.font;a=[],s=[];for(var c=0;c<r.length;c++){var h=r[c],f=l.glyphs.get(h.glyphIndex);o=new Ut("glyf",f.instructions),exports.DEBUG&&(console.log("---EXEC COMP "+c+"---"),o.step=-1),ia(f,o,t,i);for(var u=Math.round(h.dx*t),p=Math.round(h.dy*i),g=o.gZone,x=o.contours,v=0;v<g.length;v++){var y=g[v];y.xTouched=y.yTouched=!1,y.xo=y.x=y.x+u,y.yo=y.y=y.y+p}var M=a.length;a.push.apply(a,g);for(var _=0;_<x.length;_++)s.push(x[_]+M)}n.instructions&&!o.inhibitGridFit&&(o=new Ut("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=a,o.contours=s,a.push(new yt(0,0),new yt(Math.round(n.advanceWidth*t),0)),exports.DEBUG&&(console.log("---EXEC COMPOSITE---"),o.step=-1),e0(o),a.length-=2)}return a};ia=function(n,e,t,i){for(var r=n.points||[],s=r.length,a=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[],l,c=0;c<s;c++)l=r[c],a[c]=new yt(l.x*t,l.y*i,l.lastPointOfContour,l.onCurve);for(var h,f,u=0;u<s;u++)l=a[u],h||(h=l,o.push(u)),l.lastPointOfContour?(l.nextPointOnContour=h,h.prevPointOnContour=l,h=void 0):(f=a[u+1],l.nextPointOnContour=f,f.prevPointOnContour=l);if(!e.inhibitGridFit){if(exports.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var p=0;p<s;p++)console.log(p,a[p].x,a[p].y)}if(a.push(new yt(0,0),new yt(Math.round(n.advanceWidth*t),0)),e0(e),a.length-=2,exports.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var g=0;g<s;g++)console.log(g,a[g].x,a[g].y)}}};e0=function(n){var e=n.prog;if(e){var t=e.length,i;for(n.ip=0;n.ip<t;n.ip++){if(exports.DEBUG&&n.step++,i=c2[e[n.ip]],!i)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));i(n)}}};function Qi(n){for(var e=n.tZone=new Array(n.gZone.length),t=0;t<e.length;t++)e[t]=new yt(0,0)}function d2(n,e){var t=n.prog,i=n.ip,r=1,s;do if(s=t[++i],s===88)r++;else if(s===89)r--;else if(s===64)i+=t[i+1]+1;else if(s===65)i+=2*t[i+1]+1;else if(s>=176&&s<=183)i+=s-176+1;else if(s>=184&&s<=191)i+=(s-184+1)*2;else if(e&&r===1&&s===27)break;while(r>0);n.ip=i}function s1(n,e){exports.DEBUG&&console.log(e.step,"SVTCA["+n.axis+"]"),e.fv=e.pv=e.dpv=n}function a1(n,e){exports.DEBUG&&console.log(e.step,"SPVTCA["+n.axis+"]"),e.pv=e.dpv=n}function o1(n,e){exports.DEBUG&&console.log(e.step,"SFVTCA["+n.axis+"]"),e.fv=n}function l1(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];exports.DEBUG&&console.log("SPVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.pv=e.dpv=Ln(o,l)}function c1(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];exports.DEBUG&&console.log("SFVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.fv=Ln(o,l)}function Q6(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.pv=n.dpv=Ln(i,t)}function $6(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.fv=Ln(i,t)}function j6(n){var e=n.stack,t=n.pv;exports.DEBUG&&console.log(n.step,"GPV[]"),e.push(t.x*16384),e.push(t.y*16384)}function eh(n){var e=n.stack,t=n.fv;exports.DEBUG&&console.log(n.step,"GFV[]"),e.push(t.x*16384),e.push(t.y*16384)}function th(n){n.fv=n.pv,exports.DEBUG&&console.log(n.step,"SFVTPV[]")}function nh(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop(),s=e.pop(),a=e.pop(),o=n.z0,l=n.z1,c=o[t],h=o[i],f=l[r],u=l[s],p=n.z2[a];exports.DEBUG&&console.log("ISECT[], ",t,i,r,s,a);var g=c.x,x=c.y,v=h.x,y=h.y,M=f.x,_=f.y,S=u.x,A=u.y,w=(g-v)*(_-A)-(x-y)*(M-S),C=g*y-x*v,P=M*A-_*S;p.x=(C*(M-S)-P*(g-v))/w,p.y=(C*(_-A)-P*(x-y))/w}function ih(n){n.rp0=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SRP0[]",n.rp0)}function rh(n){n.rp1=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SRP1[]",n.rp1)}function sh(n){n.rp2=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SRP2[]",n.rp2)}function ah(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZP0[]",e),n.zp0=e,e){case 0:n.tZone||Qi(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function oh(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZP1[]",e),n.zp1=e,e){case 0:n.tZone||Qi(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function lh(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZP2[]",e),n.zp2=e,e){case 0:n.tZone||Qi(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function ch(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZPS[]",e),n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||Qi(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function hh(n){n.loop=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SLOOP[]",n.loop)}function uh(n){exports.DEBUG&&console.log(n.step,"RTG[]"),n.round=f2}function fh(n){exports.DEBUG&&console.log(n.step,"RTHG[]"),n.round=Y6}function ph(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SMD[]",e),n.minDis=e/64}function dh(n){exports.DEBUG&&console.log(n.step,"ELSE[]"),d2(n,!1)}function mh(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"JMPR[]",e),n.ip+=e-1}function gh(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SCVTCI[]",e),n.cvCutIn=e/64}function xh(n){var e=n.stack;exports.DEBUG&&console.log(n.step,"DUP[]"),e.push(e[e.length-1])}function Ws(n){exports.DEBUG&&console.log(n.step,"POP[]"),n.stack.pop()}function vh(n){exports.DEBUG&&console.log(n.step,"CLEAR[]"),n.stack.length=0}function yh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SWAP[]"),e.push(t),e.push(i)}function _h(n){var e=n.stack;exports.DEBUG&&console.log(n.step,"DEPTH[]"),e.push(e.length)}function Sh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"LOOPCALL[]",t,i);var r=n.ip,s=n.prog;n.prog=n.funcs[t];for(var a=0;a<i;a++)e0(n),exports.DEBUG&&console.log(++n.step,a+1<i?"next loopcall":"done loopcall",a);n.ip=r,n.prog=s}function bh(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"CALL[]",e);var t=n.ip,i=n.prog;n.prog=n.funcs[e],e0(n),n.ip=t,n.prog=i,exports.DEBUG&&console.log(++n.step,"returning from",e)}function Mh(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"CINDEX[]",t),e.push(e[e.length-t])}function Th(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"MINDEX[]",t),e.push(e.splice(e.length-t,1)[0])}function Eh(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");var e=n.stack,t=n.prog,i=n.ip,r=e.pop(),s=i;for(exports.DEBUG&&console.log(n.step,"FDEF[]",r);t[++i]!==45;);n.ip=i,n.funcs[r]=t.slice(s+1,i)}function h1(n,e){var t=e.stack.pop(),i=e.z0[t],r=e.fv,s=e.pv;exports.DEBUG&&console.log(e.step,"MDAP["+n+"]",t);var a=s.distance(i,Cn);n&&(a=e.round(a)),r.setRelative(i,Cn,a,s),r.touch(i),e.rp0=e.rp1=t}function u1(n,e){var t=e.z2,i=t.length-2,r,s,a;exports.DEBUG&&console.log(e.step,"IUP["+n.axis+"]");for(var o=0;o<i;o++)r=t[o],!n.touched(r)&&(s=r.prevTouched(n),s!==r&&(a=r.nextTouched(n),s===a&&n.setRelative(r,r,n.distance(s,s,!1,!0),n,!0),n.interpolate(r,s,a,n)))}function f1(n,e){for(var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=e.loop,l=e.z2;o--;){var c=t.pop(),h=l[c],f=a.distance(r,r,!1,!0);s.setRelative(h,h,f,a),s.touch(h),exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-o)+": ":"")+"SHP["+(n?"rp1":"rp2")+"]",c)}e.loop=1}function p1(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=t.pop(),l=e.z2[e.contours[o]],c=l;exports.DEBUG&&console.log(e.step,"SHC["+n+"]",o);var h=a.distance(r,r,!1,!0);do c!==r&&s.setRelative(c,c,h,a),c=c.nextPointOnContour;while(c!==l)}function d1(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=t.pop();exports.DEBUG&&console.log(e.step,"SHZ["+n+"]",o);var l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}for(var c,h=a.distance(r,r,!1,!0),f=l.length-2,u=0;u<f;u++)c=l[u],s.setRelative(c,c,h,a)}function Ah(n){for(var e=n.stack,t=n.loop,i=n.fv,r=e.pop()/64,s=n.z2;t--;){var a=e.pop(),o=s[a];exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-t)+": ":"")+"SHPIX[]",a,r),i.setRelative(o,o,r),i.touch(o)}n.loop=1}function wh(n){for(var e=n.stack,t=n.rp1,i=n.rp2,r=n.loop,s=n.z0[t],a=n.z1[i],o=n.fv,l=n.dpv,c=n.z2;r--;){var h=e.pop(),f=c[h];exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"IP[]",h,t,"<->",i),o.interpolate(f,s,a,l),o.touch(f)}n.loop=1}function m1(n,e){var t=e.stack,i=t.pop()/64,r=t.pop(),s=e.z1[r],a=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(s,a,i,l),o.touch(s),exports.DEBUG&&console.log(e.step,"MSIRP["+n+"]",i,r),e.rp1=e.rp0,e.rp2=r,n&&(e.rp0=r)}function Ch(n){for(var e=n.stack,t=n.rp0,i=n.z0[t],r=n.loop,s=n.fv,a=n.pv,o=n.z1;r--;){var l=e.pop(),c=o[l];exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"ALIGNRP[]",l),s.setRelative(c,i,0,a),s.touch(c)}n.loop=1}function Ph(n){exports.DEBUG&&console.log(n.step,"RTDG[]"),n.round=q6}function g1(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z0[r],a=e.fv,o=e.pv,l=e.cvt[i];exports.DEBUG&&console.log(e.step,"MIAP["+n+"]",i,"(",l,")",r);var c=o.distance(s,Cn);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),a.setRelative(s,Cn,c,o),e.zp0===0&&(s.xo=s.x,s.yo=s.y),a.touch(s),e.rp0=e.rp1=r}function Rh(n){var e=n.prog,t=n.ip,i=n.stack,r=e[++t];exports.DEBUG&&console.log(n.step,"NPUSHB[]",r);for(var s=0;s<r;s++)i.push(e[++t]);n.ip=t}function Ih(n){var e=n.ip,t=n.prog,i=n.stack,r=t[++e];exports.DEBUG&&console.log(n.step,"NPUSHW[]",r);for(var s=0;s<r;s++){var a=t[++e]<<8|t[++e];a&32768&&(a=-((a^65535)+1)),i.push(a)}n.ip=e}function Lh(n){var e=n.stack,t=n.store;t||(t=n.store=[]);var i=e.pop(),r=e.pop();exports.DEBUG&&console.log(n.step,"WS",i,r),t[r]=i}function Fh(n){var e=n.stack,t=n.store,i=e.pop();exports.DEBUG&&console.log(n.step,"RS",i);var r=t&&t[i]||0;e.push(r)}function Dh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"WCVTP",t,i),n.cvt[i]=t/64}function Nh(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"RCVT",t),e.push(n.cvt[t]*64)}function x1(n,e){var t=e.stack,i=t.pop(),r=e.z2[i];exports.DEBUG&&console.log(e.step,"GC["+n+"]",i),t.push(e.dpv.distance(r,Cn,n,!1)*64)}function v1(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z1[i],a=e.z0[r],o=e.dpv.distance(a,s,n,n);exports.DEBUG&&console.log(e.step,"MD["+n+"]",i,r,"->",o),e.stack.push(Math.round(o*64))}function Oh(n){exports.DEBUG&&console.log(n.step,"MPPEM[]"),n.stack.push(n.ppem)}function Uh(n){exports.DEBUG&&console.log(n.step,"FLIPON[]"),n.autoFlip=!0}function kh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"LT[]",t,i),e.push(i<t?1:0)}function Bh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"LTEQ[]",t,i),e.push(i<=t?1:0)}function Gh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"GT[]",t,i),e.push(i>t?1:0)}function zh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"GTEQ[]",t,i),e.push(i>=t?1:0)}function Hh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"EQ[]",t,i),e.push(t===i?1:0)}function Vh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"NEQ[]",t,i),e.push(t!==i?1:0)}function Wh(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"ODD[]",t),e.push(Math.trunc(t)%2?1:0)}function Xh(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"EVEN[]",t),e.push(Math.trunc(t)%2?0:1)}function qh(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"IF[]",e),e||(d2(n,!0),exports.DEBUG&&console.log(n.step,"EIF[]"))}function Yh(n){exports.DEBUG&&console.log(n.step,"EIF[]")}function Jh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"AND[]",t,i),e.push(t&&i?1:0)}function Zh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"OR[]",t,i),e.push(t||i?1:0)}function Kh(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"NOT[]",t),e.push(t?0:1)}function Xs(n,e){var t=e.stack,i=t.pop(),r=e.fv,s=e.pv,a=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;exports.DEBUG&&console.log(e.step,"DELTAP["+n+"]",i,t);for(var h=0;h<i;h++){var f=t.pop(),u=t.pop(),p=o+((u&240)>>4);if(p===a){var g=(u&15)-8;g>=0&&g++,exports.DEBUG&&console.log(e.step,"DELTAPFIX",f,"by",g*l);var x=c[f];r.setRelative(x,x,g*l,s)}}}function Qh(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"SDB[]",t),n.deltaBase=t}function $h(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"SDS[]",t),n.deltaShift=Math.pow(.5,t)}function jh(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"ADD[]",t,i),e.push(i+t)}function eu(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SUB[]",t,i),e.push(i-t)}function tu(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"DIV[]",t,i),e.push(i*64/t)}function nu(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"MUL[]",t,i),e.push(i*t/64)}function iu(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"ABS[]",t),e.push(Math.abs(t))}function ru(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"NEG[]",t),e.push(-t)}function su(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"FLOOR[]",t),e.push(Math.floor(t/64)*64)}function au(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"CEILING[]",t),e.push(Math.ceil(t/64)*64)}function Hi(n,e){var t=e.stack,i=t.pop();exports.DEBUG&&console.log(e.step,"ROUND[]"),t.push(e.round(i/64)*64)}function ou(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"WCVTF[]",t,i),n.cvt[i]=t*n.ppem/n.font.unitsPerEm}function qs(n,e){var t=e.stack,i=t.pop(),r=e.ppem,s=e.deltaBase+(n-1)*16,a=e.deltaShift;exports.DEBUG&&console.log(e.step,"DELTAC["+n+"]",i,t);for(var o=0;o<i;o++){var l=t.pop(),c=t.pop(),h=s+((c&240)>>4);if(h===r){var f=(c&15)-8;f>=0&&f++;var u=f*a;exports.DEBUG&&console.log(e.step,"DELTACFIX",l,"by",u),e.cvt[l]+=u}}}function lu(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SROUND[]",e),n.round=p2;var t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function cu(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"S45ROUND[]",e),n.round=p2;var t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function hu(n){exports.DEBUG&&console.log(n.step,"ROFF[]"),n.round=X6}function uu(n){exports.DEBUG&&console.log(n.step,"RUTG[]"),n.round=J6}function fu(n){exports.DEBUG&&console.log(n.step,"RDTG[]"),n.round=Z6}function pu(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SCANCTRL[]",e)}function y1(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];exports.DEBUG&&console.log(e.step,"SDPVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.dpv=Ln(o,l)}function du(n){var e=n.stack,t=e.pop(),i=0;exports.DEBUG&&console.log(n.step,"GETINFO[]",t),t&1&&(i=35),t&32&&(i|=4096),e.push(i)}function mu(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop();exports.DEBUG&&console.log(n.step,"ROLL[]"),e.push(i),e.push(t),e.push(r)}function gu(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"MAX[]",t,i),e.push(Math.max(i,t))}function xu(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"MIN[]",t,i),e.push(Math.min(i,t))}function vu(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SCANTYPE[]",e)}function yu(n){var e=n.stack.pop(),t=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"INSTCTRL[]",e,t),e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function Dt(n,e){var t=e.stack,i=e.prog,r=e.ip;exports.DEBUG&&console.log(e.step,"PUSHB["+n+"]");for(var s=0;s<n;s++)t.push(i[++r]);e.ip=r}function Nt(n,e){var t=e.ip,i=e.prog,r=e.stack;exports.DEBUG&&console.log(e.ip,"PUSHW["+n+"]");for(var s=0;s<n;s++){var a=i[++t]<<8|i[++t];a&32768&&(a=-((a^65535)+1)),r.push(a)}e.ip=t}function U(n,e,t,i,r,s){var a=s.stack,o=n&&a.pop(),l=a.pop(),c=s.rp0,h=s.z0[c],f=s.z1[l],u=s.minDis,p=s.fv,g=s.dpv,x,v,y,M;v=x=g.distance(f,h,!0,!0),y=v>=0?1:-1,v=Math.abs(v),n&&(M=s.cvt[o],i&&Math.abs(v-M)<s.cvCutIn&&(v=M)),t&&v<u&&(v=u),i&&(v=s.round(v)),p.setRelative(f,h,y*v,g),p.touch(f),exports.DEBUG&&console.log(s.step,(n?"MIRP[":"MDRP[")+(e?"M":"m")+(t?">":"_")+(i?"R":"_")+(r===0?"Gr":r===1?"Bl":r===2?"Wh":"")+"]",n?o+"("+s.cvt[o]+","+M+")":"",l,"(d =",x,"->",y*v,")"),s.rp1=s.rp0,s.rp2=l,e&&(s.rp0=l)}c2=[s1.bind(void 0,vt),s1.bind(void 0,ct),a1.bind(void 0,vt),a1.bind(void 0,ct),o1.bind(void 0,vt),o1.bind(void 0,ct),l1.bind(void 0,0),l1.bind(void 0,1),c1.bind(void 0,0),c1.bind(void 0,1),Q6,$6,j6,eh,th,nh,ih,rh,sh,ah,oh,lh,ch,hh,uh,fh,ph,dh,mh,gh,void 0,void 0,xh,Ws,vh,yh,_h,Mh,Th,void 0,void 0,void 0,Sh,bh,Eh,void 0,h1.bind(void 0,0),h1.bind(void 0,1),u1.bind(void 0,vt),u1.bind(void 0,ct),f1.bind(void 0,0),f1.bind(void 0,1),p1.bind(void 0,0),p1.bind(void 0,1),d1.bind(void 0,0),d1.bind(void 0,1),Ah,wh,m1.bind(void 0,0),m1.bind(void 0,1),Ch,Ph,g1.bind(void 0,0),g1.bind(void 0,1),Rh,Ih,Lh,Fh,Dh,Nh,x1.bind(void 0,0),x1.bind(void 0,1),void 0,v1.bind(void 0,0),v1.bind(void 0,1),Oh,void 0,Uh,void 0,void 0,kh,Bh,Gh,zh,Hh,Vh,Wh,Xh,qh,Yh,Jh,Zh,Kh,Xs.bind(void 0,1),Qh,$h,jh,eu,tu,nu,iu,ru,su,au,Hi.bind(void 0,0),Hi.bind(void 0,1),Hi.bind(void 0,2),Hi.bind(void 0,3),void 0,void 0,void 0,void 0,ou,Xs.bind(void 0,2),Xs.bind(void 0,3),qs.bind(void 0,1),qs.bind(void 0,2),qs.bind(void 0,3),lu,cu,void 0,void 0,hu,void 0,uu,fu,Ws,Ws,void 0,void 0,void 0,void 0,void 0,pu,y1.bind(void 0,0),y1.bind(void 0,1),du,void 0,mu,gu,xu,vu,yu,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,Dt.bind(void 0,1),Dt.bind(void 0,2),Dt.bind(void 0,3),Dt.bind(void 0,4),Dt.bind(void 0,5),Dt.bind(void 0,6),Dt.bind(void 0,7),Dt.bind(void 0,8),Nt.bind(void 0,1),Nt.bind(void 0,2),Nt.bind(void 0,3),Nt.bind(void 0,4),Nt.bind(void 0,5),Nt.bind(void 0,6),Nt.bind(void 0,7),Nt.bind(void 0,8),U.bind(void 0,0,0,0,0,0),U.bind(void 0,0,0,0,0,1),U.bind(void 0,0,0,0,0,2),U.bind(void 0,0,0,0,0,3),U.bind(void 0,0,0,0,1,0),U.bind(void 0,0,0,0,1,1),U.bind(void 0,0,0,0,1,2),U.bind(void 0,0,0,0,1,3),U.bind(void 0,0,0,1,0,0),U.bind(void 0,0,0,1,0,1),U.bind(void 0,0,0,1,0,2),U.bind(void 0,0,0,1,0,3),U.bind(void 0,0,0,1,1,0),U.bind(void 0,0,0,1,1,1),U.bind(void 0,0,0,1,1,2),U.bind(void 0,0,0,1,1,3),U.bind(void 0,0,1,0,0,0),U.bind(void 0,0,1,0,0,1),U.bind(void 0,0,1,0,0,2),U.bind(void 0,0,1,0,0,3),U.bind(void 0,0,1,0,1,0),U.bind(void 0,0,1,0,1,1),U.bind(void 0,0,1,0,1,2),U.bind(void 0,0,1,0,1,3),U.bind(void 0,0,1,1,0,0),U.bind(void 0,0,1,1,0,1),U.bind(void 0,0,1,1,0,2),U.bind(void 0,0,1,1,0,3),U.bind(void 0,0,1,1,1,0),U.bind(void 0,0,1,1,1,1),U.bind(void 0,0,1,1,1,2),U.bind(void 0,0,1,1,1,3),U.bind(void 0,1,0,0,0,0),U.bind(void 0,1,0,0,0,1),U.bind(void 0,1,0,0,0,2),U.bind(void 0,1,0,0,0,3),U.bind(void 0,1,0,0,1,0),U.bind(void 0,1,0,0,1,1),U.bind(void 0,1,0,0,1,2),U.bind(void 0,1,0,0,1,3),U.bind(void 0,1,0,1,0,0),U.bind(void 0,1,0,1,0,1),U.bind(void 0,1,0,1,0,2),U.bind(void 0,1,0,1,0,3),U.bind(void 0,1,0,1,1,0),U.bind(void 0,1,0,1,1,1),U.bind(void 0,1,0,1,1,2),U.bind(void 0,1,0,1,1,3),U.bind(void 0,1,1,0,0,0),U.bind(void 0,1,1,0,0,1),U.bind(void 0,1,1,0,0,2),U.bind(void 0,1,1,0,0,3),U.bind(void 0,1,1,0,1,0),U.bind(void 0,1,1,0,1,1),U.bind(void 0,1,1,0,1,2),U.bind(void 0,1,1,0,1,3),U.bind(void 0,1,1,1,0,0),U.bind(void 0,1,1,1,0,1),U.bind(void 0,1,1,1,0,2),U.bind(void 0,1,1,1,0,3),U.bind(void 0,1,1,1,1,0),U.bind(void 0,1,1,1,1,1),U.bind(void 0,1,1,1,1,2),U.bind(void 0,1,1,1,1,3)];function C0(n){this.char=n,this.state={},this.activeState=null}function fa(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function _u(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function tt(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function $i(n){this.eventId=n,this.subscribers=[]}function Su(n){var e=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(r){Object.defineProperty(e.events,r,{value:new $i(r)})}),n&&t.forEach(function(r){var s=n[r];typeof s=="function"&&e.events[r].subscribe(s)});var i=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];i.forEach(function(r){e.events[r].subscribe(e.updateContextsRanges)})}function pe(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],Su.call(this,n)}C0.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState};C0.prototype.getState=function(n){return this.state[n]||null};pe.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length};pe.prototype.composeRUD=function(n){var e=this,t=!0,i=n.map(function(s){return e[s[0]].apply(e,s.slice(1).concat(t))}),r=function(s){return typeof s=="object"&&s.hasOwnProperty("FAIL")};if(i.every(r))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:i.filter(r)};this.dispatch("composeRUD",[i.filter(function(s){return!r(s)})])};pe.prototype.replaceRange=function(n,e,t,i){e=e!==null?e:this.tokens.length;var r=t.every(function(a){return a instanceof C0});if(!isNaN(n)&&this.inboundIndex(n)&&r){var s=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return i||this.dispatch("replaceToken",[n,e,t]),[s,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};pe.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof C0){var i=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[i[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};pe.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;var i=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[i,n,e]),i};pe.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){var t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}};pe.prototype.insertToken=function(n,e,t){var i=n.every(function(r){return r instanceof C0});return i?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}};pe.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(i,r){var s=[i,r],a=e===null||e.apply(this,s)===!0,o=[i,r];if(a){var l=t.apply(this,o);i.setState(n,l)}}),this.registeredModifiers.push(n)};$i.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};$i.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)};tt.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)};tt.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}};pe.prototype.rangeToText=function(n){if(n instanceof fa)return this.getRangeTokens(n).map(function(e){return e.char}).join("")};pe.prototype.getText=function(){return this.tokens.map(function(n){return n.char}).join("")};pe.prototype.getContext=function(n){var e=this.registeredContexts[n];return e||null};pe.prototype.on=function(n,e){var t=this.events[n];return t?t.subscribe(e):null};pe.prototype.dispatch=function(n,e){var t=this,i=this.events[n];i instanceof $i&&i.subscribers.forEach(function(r){r.apply(t,e||[])})};pe.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:"context name '"+n+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var i=new _u(n,e,t);return this.registeredContexts[n]=i,this.contextCheckers.push(i),i};pe.prototype.getRangeTokens=function(n){var e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))};pe.prototype.getContextRanges=function(n){var e=this.getContext(n);return e?e.ranges:{FAIL:"context checker '"+n+"' is not registered."}};pe.prototype.resetContextsRanges=function(){var n=this.registeredContexts;for(var e in n)if(n.hasOwnProperty(e)){var t=n[e];t.ranges=[]}};pe.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var n=this.tokens.map(function(i){return i.char}),e=0;e<n.length;e++){var t=new tt(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};pe.prototype.setEndOffset=function(n,e){var t=this.getContext(e).openRange.startIndex,i=new fa(t,n,e),r=this.getContext(e).ranges;return i.rangeId=e+"."+r.length,r.push(i),this.getContext(e).openRange=null,i};pe.prototype.runContextCheck=function(n){var e=this,t=n.index;this.contextCheckers.forEach(function(i){var r=i.contextName,s=e.getContext(r).openRange;if(!s&&i.checkStart(n)&&(s=new fa(t,null,r),e.getContext(r).openRange=s,e.dispatch("contextStart",[r,t])),s&&i.checkEnd(n)){var a=t-s.startIndex+1,o=e.setEndOffset(a,r);e.dispatch("contextEnd",[r,o])}})};pe.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();var e=Array.from(n);this.dispatch("start");for(var t=0;t<e.length;t++){var i=e[t],r=new tt(e,t);this.dispatch("next",[r]),this.runContextCheck(r);var s=new C0(i);this.tokens.push(s),this.dispatch("newToken",[s,r])}return this.dispatch("end",[this.tokens]),this.tokens};function kt(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function m2(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function Bt(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function Wi(n){return/[A-z]/.test(n)}function bu(n){return/\s/.test(n)}function ze(n){this.font=n,this.features={}}function jt(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function Fn(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:for(var t=e.ranges,i=0;i<t.length;i++){var r=t[i];if(n>=r.start&&n<=r.end){var s=n-r.start;return r.index+s}}break;default:return-1}return-1}function Mu(n,e){var t=Fn(n,e.coverage);return t===-1?null:n+e.deltaGlyphId}function Tu(n,e){var t=Fn(n,e.coverage);return t===-1?null:e.substitute[t]}function Ys(n,e){for(var t=[],i=0;i<n.length;i++){var r=n[i],s=e.current;s=Array.isArray(s)?s[0]:s;var a=Fn(s,r);a!==-1&&t.push(a)}return t.length!==n.length?-1:t}function Eu(n,e){var t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];var i=Ys(e.inputCoverage,n);if(i===-1)return[];var r=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];for(var s=n.lookahead.slice(r);s.length&&Bt(s[0].char);)s.shift();var a=new tt(s,0),o=Ys(e.lookaheadCoverage,a),l=[].concat(n.backtrack);for(l.reverse();l.length&&Bt(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];var c=new tt(l,0),h=Ys(e.backtrackCoverage,c),f=i.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&h.length===e.backtrackCoverage.length,u=[];if(f)for(var p=0;p<e.lookupRecords.length;p++)for(var g=e.lookupRecords[p],x=g.lookupListIndex,v=this.getLookupByIndex(x),y=0;y<v.subtables.length;y++){var M=v.subtables[y],_=this.getLookupMethod(v,M),S=this.getSubstitutionType(v,M);if(S==="12")for(var A=0;A<i.length;A++){var w=n.get(A),C=_(w);C&&u.push(C)}}return u}function Au(n,e){var t=n.current,i=Fn(t,e.coverage);if(i===-1)return null;for(var r,s=e.ligatureSets[i],a=0;a<s.length;a++){r=s[a];for(var o=0;o<r.components.length;o++){var l=n.lookahead[o],c=r.components[o];if(l!==c)break;if(o===r.components.length-1)return r}}return null}function wu(n,e){var t=Fn(n,e.coverage);return t===-1?null:e.sequences[t]}ze.prototype.getDefaultScriptFeaturesIndexes=function(){for(var n=this.font.tables.gsub.scripts,e=0;e<n.length;e++){var t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};ze.prototype.getScriptFeaturesIndexes=function(n){var e=this.font.tables;if(!e.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,i=0;i<t.length;i++){var r=t[i];if(r.tag===n&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;var s=r.langSysRecords;if(s)for(var a=0;a<s.length;a++){var o=s[a];if(o.tag===n){var l=o.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};ze.prototype.mapTagsToFeatures=function(n,e){for(var t={},i=0;i<n.length;i++){var r=n[i].tag,s=n[i].feature;t[r]=s}this.features[e].tags=t};ze.prototype.getScriptFeatures=function(n){var e=this.features[n];if(this.features.hasOwnProperty(n))return e;var t=this.getScriptFeaturesIndexes(n);if(!t)return null;var i=this.font.tables.gsub;return e=t.map(function(r){return i.features[r]}),this.features[n]=e,this.mapTagsToFeatures(e,n),e};ze.prototype.getSubstitutionType=function(n,e){var t=n.lookupType.toString(),i=e.substFormat.toString();return t+i};ze.prototype.getLookupMethod=function(n,e){var t=this,i=this.getSubstitutionType(n,e);switch(i){case"11":return function(r){return Mu.apply(t,[r,e])};case"12":return function(r){return Tu.apply(t,[r,e])};case"63":return function(r){return Eu.apply(t,[r,e])};case"41":return function(r){return Au.apply(t,[r,e])};case"21":return function(r){return wu.apply(t,[r,e])};default:throw new Error("lookupType: "+n.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};ze.prototype.lookupFeature=function(n){var e=n.contextParams,t=e.index,i=this.getFeature({tag:n.tag,script:n.script});if(!i)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+n.tag+"' for script '"+n.script+"'.");for(var r=this.getFeatureLookups(i),s=[].concat(e.context),a=0;a<r.length;a++)for(var o=r[a],l=this.getLookupSubtables(o),c=0;c<l.length;c++){var h=l[c],f=this.getSubstitutionType(o,h),u=this.getLookupMethod(o,h),p=void 0;switch(f){case"11":p=u(e.current),p&&s.splice(t,1,new jt({id:11,tag:n.tag,substitution:p}));break;case"12":p=u(e.current),p&&s.splice(t,1,new jt({id:12,tag:n.tag,substitution:p}));break;case"63":p=u(e),Array.isArray(p)&&p.length&&s.splice(t,1,new jt({id:63,tag:n.tag,substitution:p}));break;case"41":p=u(e),p&&s.splice(t,1,new jt({id:41,tag:n.tag,substitution:p}));break;case"21":p=u(e.current),p&&s.splice(t,1,new jt({id:21,tag:n.tag,substitution:p}));break}e=new tt(s,t),!(Array.isArray(p)&&!p.length)&&(p=null)}return s.length?s:null};ze.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);var e=this.features.hasOwnProperty(n.script);if(!n.tag)return e;var t=this.features[n.script].some(function(i){return i.tag===n.tag});return e&&t};ze.prototype.getLookupSubtables=function(n){return n.subtables||null};ze.prototype.getLookupByIndex=function(n){var e=this.font.tables.gsub.lookups;return e[n]||null};ze.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))};ze.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function Cu(n){var e=n.current,t=n.get(-1);return t===null&&kt(e)||!kt(t)&&kt(e)}function Pu(n){var e=n.get(1);return e===null||!kt(e)}var Ru={startCheck:Cu,endCheck:Pu};function Iu(n){var e=n.current,t=n.get(-1);return(kt(e)||Bt(e))&&!kt(t)}function Lu(n){var e=n.get(1);switch(!0){case e===null:return!0;case(!kt(e)&&!Bt(e)):var t=bu(e);if(!t)return!0;if(t){var i=!1;if(i=n.lookahead.some(function(r){return kt(r)||Bt(r)}),!i)return!0}break;default:return!1}}var Fu={startCheck:Iu,endCheck:Lu};function Du(n,e,t){e[t].setState(n.tag,n.substitution)}function Nu(n,e,t){e[t].setState(n.tag,n.substitution)}function Ou(n,e,t){n.substitution.forEach(function(i,r){var s=e[t+r];s.setState(n.tag,i)})}function Uu(n,e,t){var i=e[t];i.setState(n.tag,n.substitution.ligGlyph);for(var r=n.substitution.components.length,s=0;s<r;s++)i=e[t+s+1],i.setState("deleted",!0)}var _1={11:Du,12:Nu,63:Ou,41:Uu};function pa(n,e,t){n instanceof jt&&_1[n.id]&&_1[n.id](n,e,t)}function ku(n){for(var e=[].concat(n.backtrack),t=e.length-1;t>=0;t--){var i=e[t],r=m2(i),s=Bt(i);if(!r&&!s)return!0;if(r)return!1}return!1}function Bu(n){if(m2(n.current))return!1;for(var e=0;e<n.lookahead.length;e++){var t=n.lookahead[e],i=Bt(t);if(!i)return!0}return!1}function Gu(n){var e=this,t="arab",i=this.featuresTags[t],r=this.tokenizer.getRangeTokens(n);if(r.length!==1){var s=new tt(r.map(function(o){return o.getState("glyphIndex")}),0),a=new tt(r.map(function(o){return o.char}),0);r.forEach(function(o,l){if(!Bt(o.char)){s.setCurrentIndex(l),a.setCurrentIndex(l);var c=0;ku(a)&&(c|=1),Bu(a)&&(c|=2);var h;switch(c){case 1:h="fina";break;case 2:h="init";break;case 3:h="medi";break}if(i.indexOf(h)!==-1){var f=e.query.lookupFeature({tag:h,script:t,contextParams:s});if(f instanceof Error)return console.info(f.message);f.forEach(function(u,p){u instanceof jt&&(pa(u,r,p),s.context[p]=u.substitution)})}}})}}function S1(n,e){var t=n.map(function(i){return i.activeState.value});return new tt(t,e||0)}function zu(n){var e=this,t="arab",i=this.tokenizer.getRangeTokens(n),r=S1(i);r.context.forEach(function(s,a){r.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"rlig",script:t,contextParams:r});o.length&&(o.forEach(function(l){return pa(l,i,a)}),r=S1(i))})}function Hu(n){var e=n.current,t=n.get(-1);return t===null&&Wi(e)||!Wi(t)&&Wi(e)}function Vu(n){var e=n.get(1);return e===null||!Wi(e)}var Wu={startCheck:Hu,endCheck:Vu};function b1(n,e){var t=n.map(function(i){return i.activeState.value});return new tt(t,e||0)}function Xu(n){var e=this,t="latn",i=this.tokenizer.getRangeTokens(n),r=b1(i);r.context.forEach(function(s,a){r.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"liga",script:t,contextParams:r});o.length&&(o.forEach(function(l){return pa(l,i,a)}),r=b1(i))})}function rt(n){this.baseDir=n||"ltr",this.tokenizer=new pe,this.featuresTags={}}rt.prototype.setText=function(n){this.text=n};rt.prototype.contextChecks={latinWordCheck:Wu,arabicWordCheck:Ru,arabicSentenceCheck:Fu};function Js(n){var e=this.contextChecks[n+"Check"];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function qu(){return Js.call(this,"latinWord"),Js.call(this,"arabicWord"),Js.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function Yu(){var n=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(t){var i=n.tokenizer.getRangeTokens(t);n.tokenizer.replaceRange(t.startIndex,t.endOffset,i.reverse())})}rt.prototype.registerFeatures=function(n,e){var t=this,i=e.filter(function(r){return t.query.supports({script:n,tag:r})});this.featuresTags.hasOwnProperty(n)?this.featuresTags[n]=this.featuresTags[n].concat(i):this.featuresTags[n]=i};rt.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new ze(n));for(var t=0;t<e.length;t++){var i=e[t];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};rt.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function da(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function Ju(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){da.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(i){Gu.call(n,i)})}}function Zu(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("rlig")!==-1){da.call(this);var i=this.tokenizer.getContextRanges("arabicWord");i.forEach(function(r){zu.call(n,r)})}}}function Ku(){var n=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("liga")!==-1){da.call(this);var i=this.tokenizer.getContextRanges("latinWord");i.forEach(function(r){Xu.call(n,r)})}}}rt.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)};rt.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(Ju.call(this),Zu.call(this)),this.checkContextReady("latinWord")&&Ku.call(this),this.checkContextReady("arabicSentence")&&Yu.call(this)};rt.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),qu.call(this),this.applyFeaturesToContexts())};rt.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()};rt.prototype.getTextGlyphs=function(n){this.processText(n);for(var e=[],t=0;t<this.tokenizer.tokens.length;t++){var i=this.tokenizer.tokens[t];if(!i.state.deleted){var r=i.activeState.value;e.push(Array.isArray(r)?r[0]:r)}}return e};function ie(n){n=n||{},n.tables=n.tables||{},n.empty||(Mn(n.familyName,"When creating a new Font object, familyName is required."),Mn(n.styleName,"When creating a new Font object, styleName is required."),Mn(n.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),Mn(n.ascender,"When creating a new Font object, ascender is required."),Mn(n.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}},this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,fsSelection:n.fsSelection||this.fsSelectionValues.REGULAR},n.tables.os2)})),this.supported=!0,this.glyphs=new ht.GlyphSet(this,n.glyphs||[]),this.encoding=new F1(this),this.position=new Rn(this),this.substitution=new Ge(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new u2(this)}})}ie.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)!==null};ie.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)};ie.prototype.charToGlyph=function(n){var e=this.charToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};ie.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(t){return n[t]})}:e})};ie.prototype.stringToGlyphs=function(n,e){var t=this,i=new rt,r=function(f){return t.charToGlyphIndex(f.char)};i.registerModifier("glyphIndex",null,r);var s=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;i.applyFeatures(this,s);for(var a=i.getTextGlyphs(n),o=a.length,l=new Array(o),c=this.glyphs.get(0),h=0;h<o;h+=1)l[h]=this.glyphs.get(a[h])||c;return l};ie.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)};ie.prototype.nameToGlyph=function(n){var e=this.nameToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};ie.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""};ie.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0};ie.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};ie.prototype.forEachGlyph=function(n,e,t,i,r,s){e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:72,r=Object.assign({},this.defaultRenderOptions,r);var a=1/this.unitsPerEm*i,o=this.stringToGlyphs(n,r),l;if(r.kerning){var c=r.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,r.language)}for(var h=0;h<o.length;h+=1){var f=o[h];if(s.call(this,f,e,t,i,r),f.advanceWidth&&(e+=f.advanceWidth*a),r.kerning&&h<o.length-1){var u=l?this.position.getKerningValue(l,f.index,o[h+1].index):this.getKerningValue(f,o[h+1]);e+=u*a}r.letterSpacing?e+=r.letterSpacing*i:r.tracking&&(e+=r.tracking/1e3*i)}return e};ie.prototype.getPath=function(n,e,t,i,r){var s=new ge;return this.forEachGlyph(n,e,t,i,r,function(a,o,l,c){var h=a.getPath(o,l,c,r,this);s.extend(h)}),s};ie.prototype.getPaths=function(n,e,t,i,r){var s=[];return this.forEachGlyph(n,e,t,i,r,function(a,o,l,c){var h=a.getPath(o,l,c,r,this);s.push(h)}),s};ie.prototype.getAdvanceWidth=function(n,e,t){return this.forEachGlyph(n,0,0,e,t,function(){})};ie.prototype.draw=function(n,e,t,i,r,s){this.getPath(e,t,i,r,s).draw(n)};ie.prototype.drawPoints=function(n,e,t,i,r,s){this.forEachGlyph(e,t,i,r,s,function(a,o,l,c){a.drawPoints(n,o,l,c)})};ie.prototype.drawMetrics=function(n,e,t,i,r,s){this.forEachGlyph(e,t,i,r,s,function(a,o,l,c){a.drawMetrics(n,o,l,c)})};ie.prototype.getEnglishName=function(n){var e=this.names[n];if(e)return e.en};ie.prototype.validate=function(){var n=this;function e(i,r){}function t(i){var r=n.getEnglishName(i);r&&r.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0};ie.prototype.toTables=function(){return U6.fontToTable(this)};ie.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};ie.prototype.toArrayBuffer=function(){for(var n=this.toTables(),e=n.encode(),t=new ArrayBuffer(e.length),i=new Uint8Array(t),r=0;r<e.length;r++)i[r]=e[r];return t};ie.prototype.download=function(n){var e=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");n=n||e.replace(/\s/g,"")+"-"+t+".otf";var i=this.toArrayBuffer();if(B6())if(window.URL=window.URL||window.webkitURL,window.URL){var r=new DataView(i),s=new Blob([r],{type:"font/opentype"}),a=document.createElement("a");a.href=window.URL.createObjectURL(s),a.download=n;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!1),a.dispatchEvent(o)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var l=Ui(),c=G6(i);l.writeFileSync(n,c)}};ie.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};ie.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};ie.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function g2(n,e){var t=JSON.stringify(n),i=256;for(var r in e){var s=parseInt(r);if(!(!s||s<256)){if(JSON.stringify(e[r])===t)return s;i<=s&&(i=s+1)}}return e[i]=n,i}function Qu(n,e,t){var i=g2(e.name,t);return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:i}]}function $u(n,e,t){var i={},r=new k.Parser(n,e);return i.tag=r.parseTag(),i.minValue=r.parseFixed(),i.defaultValue=r.parseFixed(),i.maxValue=r.parseFixed(),r.skip("uShort",1),i.name=t[r.parseUShort()]||{},i}function ju(n,e,t,i){for(var r=g2(e.name,i),s=[{name:"nameID_"+n,type:"USHORT",value:r},{name:"flags_"+n,type:"USHORT",value:0}],a=0;a<t.length;++a){var o=t[a].tag;s.push({name:"axis_"+n+" "+o,type:"FIXED",value:e.coordinates[o]<<16})}return s}function e8(n,e,t,i){var r={},s=new k.Parser(n,e);r.name=i[s.parseUShort()]||{},s.skip("uShort",1),r.coordinates={};for(var a=0;a<t.length;++a)r.coordinates[t[a].tag]=s.parseFixed();return r}function t8(n,e){var t=new N.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(var i=0;i<n.axes.length;i++)t.fields=t.fields.concat(Qu(i,n.axes[i],e));for(var r=0;r<n.instances.length;r++)t.fields=t.fields.concat(ju(r,n.instances[r],n.axes,e));return t}function n8(n,e,t){var i=new k.Parser(n,e),r=i.parseULong();V.argument(r===65536,"Unsupported fvar table version.");var s=i.parseOffset16();i.skip("uShort",1);for(var a=i.parseUShort(),o=i.parseUShort(),l=i.parseUShort(),c=i.parseUShort(),h=[],f=0;f<a;f++)h.push($u(n,e+s+f*o,t));for(var u=[],p=e+s+a*o,g=0;g<l;g++)u.push(e8(n,p+g*c,h,t));return{axes:h,instances:u}}var i8={make:t8,parse:n8},r8=function(){return{coverage:this.parsePointer(T.coverage),attachPoints:this.parseList(T.pointer(T.uShortList))}},s8=function(){var n=this.parseUShort();if(V.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},a8=function(){return this.parseList(T.pointer(s8))},o8=function(){return{coverage:this.parsePointer(T.coverage),ligGlyphs:this.parseList(T.pointer(a8))}},l8=function(){return this.parseUShort(),this.parseList(T.pointer(T.coverage))};function c8(n,e){e=e||0;var t=new T(n,e),i=t.parseVersion(1);V.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var r={version:i,classDef:t.parsePointer(T.classDef),attachList:t.parsePointer(r8),ligCaretList:t.parsePointer(o8),markAttachClassDef:t.parsePointer(T.classDef)};return i>=1.2&&(r.markGlyphSets=t.parsePointer(l8)),r}var h8={parse:c8},nt=new Array(10);nt[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(T.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(T.coverage),values:this.parseValueRecordList()};V.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};nt[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();V.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var i=this.parsePointer(T.coverage),r=this.parseUShort(),s=this.parseUShort();if(t===1)return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:s,pairSets:this.parseList(T.pointer(T.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(s)}})))};if(t===2){var a=this.parsePointer(T.classDef),o=this.parsePointer(T.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:s,classDef1:a,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,T.list(c,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(s)}}))}}};nt[3]=function(){return{error:"GPOS Lookup 3 not supported"}};nt[4]=function(){return{error:"GPOS Lookup 4 not supported"}};nt[5]=function(){return{error:"GPOS Lookup 5 not supported"}};nt[6]=function(){return{error:"GPOS Lookup 6 not supported"}};nt[7]=function(){return{error:"GPOS Lookup 7 not supported"}};nt[8]=function(){return{error:"GPOS Lookup 8 not supported"}};nt[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function u8(n,e){e=e||0;var t=new T(n,e),i=t.parseVersion(1);return V.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(nt)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(nt),variations:t.parseFeatureVariationsList()}}var f8=new Array(10);function p8(n){return new N.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new N.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new N.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new N.LookupList(n.lookups,f8)}])}var d8={parse:u8,make:p8};function m8(n){var e={};n.skip("uShort");var t=n.parseUShort();V.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);var i=n.parseUShort();n.skip("uShort",3);for(var r=0;r<i;r+=1){var s=n.parseUShort(),a=n.parseUShort(),o=n.parseShort();e[s+","+a]=o}return e}function g8(n){var e={};n.skip("uShort");var t=n.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");var i=n.parseUShort(),r=i&255;if(n.skip("uShort"),r===0){var s=n.parseUShort();n.skip("uShort",3);for(var a=0;a<s;a+=1){var o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function x8(n,e){var t=new k.Parser(n,e),i=t.parseUShort();if(i===0)return m8(t);if(i===1)return g8(t);throw new Error("Unsupported kern table version ("+i+").")}var v8={parse:x8};function y8(n,e,t,i){for(var r=new k.Parser(n,e),s=i?r.parseUShort:r.parseULong,a=[],o=0;o<t+1;o+=1){var l=s.call(r);i&&(l*=2),a.push(l)}return a}var _8={parse:y8};function S8(n,e){var t=Ui();t.readFile(n,function(i,r){if(i)return e(i.message);e(null,r2(r))})}function b8(n,e){var t=new XMLHttpRequest;t.open("get",n,!0),t.responseType="arraybuffer",t.onload=function(){return t.response?e(null,t.response):e("Font could not be loaded: "+t.statusText)},t.onerror=function(){e("Font could not be loaded")},t.send()}function M1(n,e){for(var t=[],i=12,r=0;r<e;r+=1){var s=k.getTag(n,i),a=k.getULong(n,i+4),o=k.getULong(n,i+8),l=k.getULong(n,i+12);t.push({tag:s,checksum:a,offset:o,length:l,compression:!1}),i+=16}return t}function M8(n,e){for(var t=[],i=44,r=0;r<e;r+=1){var s=k.getTag(n,i),a=k.getULong(n,i+4),o=k.getULong(n,i+8),l=k.getULong(n,i+12),c=void 0;o<l?c="WOFF":c=!1,t.push({tag:s,offset:a,compression:c,compressedLength:o,length:l}),i+=20}return t}function de(n,e){if(e.compression==="WOFF"){var t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),i=new Uint8Array(e.length);if(dc(t,i),i.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var r=new DataView(i.buffer,0);return{data:r,offset:0}}else return{data:n,offset:e.offset}}function ma(n,e){e=e??{};var t,i,r=new ie({empty:!0}),s=new DataView(n,0),a,o=[],l=k.getTag(s,0);if(l==="\0\0\0"||l==="true"||l==="typ1")r.outlinesFormat="truetype",a=k.getUShort(s,4),o=M1(s,a);else if(l==="OTTO")r.outlinesFormat="cff",a=k.getUShort(s,4),o=M1(s,a);else if(l==="wOFF"){var c=k.getTag(s,4);if(c==="\0\0\0")r.outlinesFormat="truetype";else if(c==="OTTO")r.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);a=k.getUShort(s,12),o=M8(s,a)}else throw new Error("Unsupported OpenType signature "+l);for(var h,f,u,p,g,x,v,y,M,_,S,A,w=0;w<a;w+=1){var C=o[w],P=void 0;switch(C.tag){case"cmap":P=de(s,C),r.tables.cmap=L1.parse(P.data,P.offset),r.encoding=new D1(r.tables.cmap);break;case"cvt ":P=de(s,C),A=new k.Parser(P.data,P.offset),r.tables.cvt=A.parseShortList(C.length/2);break;case"fvar":f=C;break;case"fpgm":P=de(s,C),A=new k.Parser(P.data,P.offset),r.tables.fpgm=A.parseByteList(C.length);break;case"head":P=de(s,C),r.tables.head=W1.parse(P.data,P.offset),r.unitsPerEm=r.tables.head.unitsPerEm,t=r.tables.head.indexToLocFormat;break;case"hhea":P=de(s,C),r.tables.hhea=X1.parse(P.data,P.offset),r.ascender=r.tables.hhea.ascender,r.descender=r.tables.hhea.descender,r.numberOfHMetrics=r.tables.hhea.numberOfHMetrics;break;case"hmtx":v=C;break;case"ltag":P=de(s,C),i=Y1.parse(P.data,P.offset);break;case"maxp":P=de(s,C),r.tables.maxp=J1.parse(P.data,P.offset),r.numGlyphs=r.tables.maxp.numGlyphs;break;case"name":_=C;break;case"OS/2":P=de(s,C),r.tables.os2=na.parse(P.data,P.offset);break;case"post":P=de(s,C),r.tables.post=e2.parse(P.data,P.offset),r.glyphNames=new la(r.tables.post);break;case"prep":P=de(s,C),A=new k.Parser(P.data,P.offset),r.tables.prep=A.parseByteList(C.length);break;case"glyf":u=C;break;case"loca":M=C;break;case"CFF ":h=C;break;case"kern":y=C;break;case"GDEF":p=C;break;case"GPOS":g=C;break;case"GSUB":x=C;break;case"meta":S=C;break}}var E=de(s,_);if(r.tables.name=j1.parse(E.data,E.offset,i),r.names=r.tables.name,u&&M){var b=t===0,R=de(s,M),B=_8.parse(R.data,R.offset,r.numGlyphs,b),H=de(s,u);r.glyphs=l2.parse(H.data,H.offset,B,r,e)}else if(h){var q=de(s,h);V1.parse(q.data,q.offset,r,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var O=de(s,v);if(q1.parse(r,O.data,O.offset,r.numberOfHMetrics,r.numGlyphs,r.glyphs,e),Nc(r,e),y){var j=de(s,y);r.kerningPairs=v8.parse(j.data,j.offset)}else r.kerningPairs={};if(p){var ee=de(s,p);r.tables.gdef=h8.parse(ee.data,ee.offset)}if(g){var te=de(s,g);r.tables.gpos=d8.parse(te.data,te.offset),r.position.init()}if(x){var ne=de(s,x);r.tables.gsub=t2.parse(ne.data,ne.offset)}if(f){var ae=de(s,f);r.tables.fvar=i8.parse(ae.data,ae.offset,r.names)}if(S){var $=de(s,S);r.tables.meta=n2.parse($.data,$.offset),r.metas=r.tables.meta}return r}function T8(n,e,t){t=t??{};var i=typeof window>"u",r=i&&!t.isUrl?S8:b8;return new Promise(function(s,a){r(n,function(o,l){if(o){if(e)return e(o);a(o)}var c;try{c=ma(l,t)}catch(h){if(e)return e(h,null);a(h)}if(e)return e(null,c);s(c)})})}function E8(n,e){var t=Ui(),i=t.readFileSync(n);return ma(r2(i),e)}var A8=Object.freeze({__proto__:null,Font:ie,Glyph:Be,Path:ge,BoundingBox:_t,_parse:k,parse:ma,load:T8,loadSync:E8}),x2=A8;var Dn="DxfWorkerMsg",P0=class n{constructor(e,t=!1){this.worker=e,t?e.onmessage=this._ProcessRequest.bind(this):e&&(e.addEventListener("message",this._ProcessResponse.bind(this),!1),e.addEventListener("error",this._OnError.bind(this),!1),this.reqSeq=1,this.requests=new Map,this.progressCbk=null)}async Load(e,t,i,r){return this.worker?this._SendRequest(n.WorkerMsg.LOAD,{url:e,fonts:t,options:this._CloneOptions(i)},r):this._Load(e,t,i,r)}async Destroy(e=!1){this.worker&&(e||await this._SendRequest(n.WorkerMsg.DESTROY),this.worker.terminate())}async _ProcessRequest(e){let t=e.data;if(t.signature!==Dn){console.log("Message with bad signature",t);return}let i={seq:t.seq,type:t.type,signature:Dn},r=[];try{i.data=await this._ProcessRequestMessage(t.type,t.data,r,t.seq)}catch(s){console.error(s),i.error=String(s)}this.worker.postMessage(i,r),t.type===n.WorkerMsg.DESTROY&&(this.worker.onmessage=null,this.worker.close(),this.worker=null)}async _ProcessRequestMessage(e,t,i,r){switch(e){case n.WorkerMsg.LOAD:{let{scene:s,dxf:a}=await this._Load(t.url,t.fonts,t.options,(o,l,c)=>this._SendProgress(r,o,l,c));return i.push(s.vertices),i.push(s.indices),i.push(s.transforms),{scene:s,dxf:a}}case n.WorkerMsg.DESTROY:return null;default:throw"Unknown message type: "+e}}async _ProcessResponse(e){let t=e.data;if(t.signature!==Dn){console.log("Message with bad signature",t);return}let i=t.seq,r=this.requests.get(i);if(!r){console.error("Unmatched message sequence: ",i);return}let s=t.data;if(t.type===n.WorkerMsg.PROGRESS){r.progressCbk&&r.progressCbk(s.phase,s.size,s.totalSize);return}this.requests.delete(i),t.hasOwnProperty("error")?r.SetError(t.error):r.SetResponse(s)}async _OnError(e){console.error("DxfWorker worker error",e);let t=Array.from(this.requests.values());this.requests.clear(),t.forEach(i=>i.SetError(e))}async _SendRequest(e,t=null,i=null){let r=this.reqSeq++,s=new n.Request(r,i);return this.requests.set(r,s),this.worker.postMessage({seq:r,type:e,data:t,signature:Dn}),await s.GetResponse()}_SendProgress(e,t,i,r){this.worker.postMessage({seq:e,type:n.WorkerMsg.PROGRESS,data:{phase:t,size:i,totalSize:r},signature:Dn})}async _Load(e,t,i,r){let s;t?s=this._CreateFontFetchers(t,r):s=[];let a=await new Gn(e,i.fileEncoding).Fetch(r);r&&r("prepare",0,null);let o=new bn(i);return await o.Build(a,s),{scene:o.scene,dxf:i.retainParsedDxf===!0?a:void 0}}_CreateFontFetchers(e,t){function i(s){return async function(){t&&t("font",0,null);let a=await fetch(s).then(o=>o.arrayBuffer());return t&&t("prepare",0,null),x2.parse(a)}}let r=[];for(let s of e)r.push(i(s));return r}_CloneOptions(e){if(Array.isArray(e))return e.map(t=>this._CloneOptions(t));if(typeof e=="object"&&e!==null){let t={};for(let i in e)t[i]=this._CloneOptions(e[i]);return t}else return e}};P0.WorkerMsg={LOAD:"LOAD",PROGRESS:"PROGRESS",DESTROY:"DESTROY"};P0.Request=class{constructor(n,e){this.seq=n,this.progressCbk=e,this.promise=new Promise((t,i)=>{this._Resolve=t,this._Reject=i})}async GetResponse(){return await this.promise}SetResponse(n){this._Resolve(n)}SetError(n){this._Reject(n)}};new P0(self,!0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

opentype.js/dist/opentype.module.js:
  (*! https://mths.be/codepointat v0.2.0 by @mathias *)
*/
