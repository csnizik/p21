/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(x,t){"use strict";function g(t){return null!=t&&t===t.window}
var e=[],T=x.document,i=Object.getPrototypeOf,a=e.slice,m=e.concat,l=e.push,r=e.indexOf,n={},o=n.toString,v=n.hasOwnProperty,s=v.toString,u=s.call(Object),y={},_=function(t){return"function"==typeof t&&"number"!=typeof t.nodeType},c={type:!0,src:!0,noModule:!0};function b(t,e,i){var n,r=(e=e||T).createElement("script");if(r.text=t,i)
for(n in c)i[n]&&(r[n]=i[n]);e.head.appendChild(r).parentNode.removeChild(r)}
function p(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?n[o.call(t)]||"object":typeof t}
var S=function(t,e){return new S.fn.init(t,e)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(t){var e=!!t&&"length" in t&&t.length,i=p(t);return!_(t)&&!g(t)&&("array"===i||0===e||"number"==typeof e&&0<e&&e-1 in t)}
S.fn=S.prototype={jquery:"3.3.1",constructor:S,length:0,toArray:function(){return a.call(this)},get:function(t){return null==t?a.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){t=S.merge(this.constructor(),t);return t.prevObject=this,t},each:function(t){return S.each(this,t)},map:function(i){return this.pushStack(S.map(this,function(t,e){return i.call(t,e,t)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,t=+t+(t<0?e:0);return this.pushStack(0<=t&&t<e?[this[t]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:e.sort,splice:e.splice},S.extend=S.fn.extend=function(){var t,e,i,n,r,o=arguments[0]||{},s=1,a=arguments.length,l=!1;for("boolean"==typeof o&&(l=o,o=arguments[s]||{},s++),"object"==typeof o||_(o)||(o={}),s===a&&(o=this,s--);s<a;s++)
if(null!=(t=arguments[s]))
for(e in t)r=o[e],o!==(i=t[e])&&(l&&i&&(S.isPlainObject(i)||(n=Array.isArray(i)))?(r=n?(n=!1,r&&Array.isArray(r)?r:[]):r&&S.isPlainObject(r)?r:{},o[e]=S.extend(l,r,i)):void 0!==i&&(o[e]=i));return o},S.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){return!(!t||"[object Object]"!==o.call(t)||(t=i(t))&&("function"!=typeof(t=v.call(t,"constructor")&&t.constructor)||s.call(t)!==u))},isEmptyObject:function(t){for(var e in t)return!1;return!0},globalEval:function(t){b(t)},each:function(t,e){var i,n=0;if(d(t))
for(i=t.length;n<i&&!1!==e.call(t[n],n,t[n]);n++);else for(n in t)
if(!1===e.call(t[n],n,t[n]))break;return t},trim:function(t){return null==t?"":(t+"").replace(h,"")},makeArray:function(t,e){e=e||[];return null!=t&&(d(Object(t))?S.merge(e,"string"==typeof t?[t]:t):l.call(e,t)),e},inArray:function(t,e,i){return null==e?-1:r.call(e,t,i)},merge:function(t,e){for(var i=+e.length,n=0,r=t.length;n<i;n++)t[r++]=e[n];return t.length=r,t},grep:function(t,e,i){for(var n=[],r=0,o=t.length,s=!i;r<o;r++)!e(t[r],r)!=s&&n.push(t[r]);return n},map:function(t,e,i){var n,r,o=0,s=[];if(d(t))
for(n=t.length;o<n;o++)null!=(r=e(t[o],o,i))&&s.push(r);else for(o in t)null!=(r=e(t[o],o,i))&&s.push(r);return m.apply([],s)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=e[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){n["[object "+e+"]"]=e.toLowerCase()});var f=function(i){function h(t,e,i){var n="0x"+e-65536;return n!=n||i?e:n<0?String.fromCharCode(65536+n):String.fromCharCode(n>>10|55296,1023&n|56320)}
function n(){x()}
var t,f,b,o,r,p,d,g,w,l,u,x,T,s,S,m,a,c,v,C="sizzle"+ +new Date,y=i.document,E=0,_=0,k=st(),P=st(),O=st(),M=function(t,e){return t===e&&(u=!0),0},A={}.hasOwnProperty,e=[],D=e.pop,R=e.push,I=e.push,L=e.slice,j=function(t,e){for(var i=0,n=t.length;i<n;i++)
if(t[i]===e)return i;return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",N="[\\x20\\t\\r\\n\\f]",z="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",B="\\["+N+"*("+z+")(?:"+N+"*([*^$|!~]?=)"+N+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+z+"))|)"+N+"*\\]",$=":("+z+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",H=new RegExp(N+"+","g"),U=new RegExp("^"+N+"+|((?:^|[^\\\\])(?:\\\\.)*)"+N+"+$","g"),W=new RegExp("^"+N+"*,"+N+"*"),X=new RegExp("^"+N+"*([>+~]|"+N+")"+N+"*"),q=new RegExp("="+N+"*([^\\]'\"]*?)"+N+"*\\]","g"),G=new RegExp($),Y=new RegExp("^"+z+"$"),V={ID:new RegExp("^#("+z+")"),CLASS:new RegExp("^\\.("+z+")"),TAG:new RegExp("^("+z+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+N+"*(even|odd|(([+-]|)(\\d*)n|)"+N+"*(?:([+-]|)"+N+"*(\\d+)|))"+N+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+N+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+N+"*((?:-\\d)?\\d*)"+N+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tt=/[+~]/,et=new RegExp("\\\\([\\da-f]{1,6}"+N+"?|("+N+")|.)","ig"),it=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,nt=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},rt=mt(function(t){return!0===t.disabled&&("form" in t||"label" in t)},{dir:"parentNode",next:"legend"});try{I.apply(e=L.call(y.childNodes),y.childNodes),e[y.childNodes.length].nodeType}catch(i){I={apply:e.length?function(t,e){R.apply(t,L.call(e))}:function(t,e){for(var i=t.length,n=0;t[i++]=e[n++];);t.length=i-1}}}
function ot(t,e,i,n){var r,o,s,a,l,u,c,h=e&&e.ownerDocument,d=e?e.nodeType:9;if(i=i||[],"string"!=typeof t||!t||1!==d&&9!==d&&11!==d)return i;if(!n&&((e?e.ownerDocument||e:y)!==T&&x(e),e=e||T,S)){if(11!==d&&(l=J.exec(t)))
if(r=l[1]){if(9===d){if(!(s=e.getElementById(r)))return i;if(s.id===r)return i.push(s),i}else if(h&&(s=h.getElementById(r))&&v(e,s)&&s.id===r)return i.push(s),i}else{if(l[2])return I.apply(i,e.getElementsByTagName(t)),i;if((r=l[3])&&f.getElementsByClassName&&e.getElementsByClassName)return I.apply(i,e.getElementsByClassName(r)),i}if(f.qsa&&!O[t+" "]&&(!m||!m.test(t))){if(1!==d)h=e,c=t;else if("object"!==e.nodeName.toLowerCase()){for((a=e.getAttribute("id"))?a=a.replace(it,nt):e.setAttribute("id",a=C),o=(u=p(t)).length;o--;)u[o]="#"+a+" "+gt(u[o]);c=u.join(","),h=tt.test(t)&&ft(e.parentNode)||e}
if(c)try{return I.apply(i,h.querySelectorAll(c)),i}catch(t){}finally{a===C&&e.removeAttribute("id")}}}
return g(t.replace(U,"$1"),e,i,n)}
function st(){var i=[];function n(t,e){return i.push(t+" ")>b.cacheLength&&delete n[i.shift()],n[t+" "]=e}
return n}
function at(t){return t[C]=!0,t}
function lt(t){var e=T.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}
function ut(t,e){for(var i=t.split("|"),n=i.length;n--;)b.attrHandle[i[n]]=e}
function ct(t,e){var i=e&&t,n=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(n)return n;if(i)
for(;i=i.nextSibling;)
if(i===e)return-1;return t?1:-1}
function ht(e){return function(t){return"form" in t?t.parentNode&&!1===t.disabled?"label" in t?"label" in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&rt(t)===e:t.disabled===e:"label" in t&&t.disabled===e}}
function dt(s){return at(function(o){return o=+o,at(function(t,e){for(var i,n=s([],t.length,o),r=n.length;r--;)t[i=n[r]]&&(t[i]=!(e[i]=t[i]))})})}
function ft(t){return t&&void 0!==t.getElementsByTagName&&t}
for(t in f=ot.support={},r=ot.isXML=function(t){t=t&&(t.ownerDocument||t).documentElement;return!!t&&"HTML"!==t.nodeName},x=ot.setDocument=function(t){var e,t=t?t.ownerDocument||t:y;return t!==T&&9===t.nodeType&&t.documentElement&&(s=(T=t).documentElement,S=!r(T),y!==T&&(e=T.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",n,!1):e.attachEvent&&e.attachEvent("onunload",n)),f.attributes=lt(function(t){return t.className="i",!t.getAttribute("className")}),f.getElementsByTagName=lt(function(t){return t.appendChild(T.createComment("")),!t.getElementsByTagName("*").length}),f.getElementsByClassName=K.test(T.getElementsByClassName),f.getById=lt(function(t){return s.appendChild(t).id=C,!T.getElementsByName||!T.getElementsByName(C).length}),f.getById?(b.filter.ID=function(t){var e=t.replace(et,h);return function(t){return t.getAttribute("id")===e}},b.find.ID=function(t,e){if(void 0!==e.getElementById&&S){t=e.getElementById(t);return t?[t]:[]}}):(b.filter.ID=function(t){var e=t.replace(et,h);return function(t){t=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return t&&t.value===e}},b.find.ID=function(t,e){if(void 0!==e.getElementById&&S){var i,n,r,o=e.getElementById(t);if(o){if((i=o.getAttributeNode("id"))&&i.value===t)return[o];for(r=e.getElementsByName(t),n=0;o=r[n++];)
if((i=o.getAttributeNode("id"))&&i.value===t)return[o]}
return[]}}),b.find.TAG=f.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):f.qsa?e.querySelectorAll(t):void 0}:function(t,e){var i,n=[],r=0,o=e.getElementsByTagName(t);if("*"!==t)return o;for(;i=o[r++];)1===i.nodeType&&n.push(i);return n},b.find.CLASS=f.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&S)return e.getElementsByClassName(t)},a=[],m=[],(f.qsa=K.test(T.querySelectorAll))&&(lt(function(t){s.appendChild(t).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+N+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||m.push("\\["+N+"*(?:value|"+F+")"),t.querySelectorAll("[id~="+C+"-]").length||m.push("~="),t.querySelectorAll(":checked").length||m.push(":checked"),t.querySelectorAll("a#"+C+"+*").length||m.push(".#.+[+~]")}),lt(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e=T.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&m.push("name"+N+"*[*^$|!~]?="),2!==t.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),s.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),m.push(",.*:")})),(f.matchesSelector=K.test(c=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&lt(function(t){f.disconnectedMatch=c.call(t,"*"),c.call(t,"[s!='']:x"),a.push("!=",$)}),m=m.length&&new RegExp(m.join("|")),a=a.length&&new RegExp(a.join("|")),e=K.test(s.compareDocumentPosition),v=e||K.test(s.contains)?function(t,e){var i=9===t.nodeType?t.documentElement:t,e=e&&e.parentNode;return t===e||!(!e||1!==e.nodeType||!(i.contains?i.contains(e):t.compareDocumentPosition&&16&t.compareDocumentPosition(e)))}:function(t,e){if(e)
for(;e=e.parentNode;)
if(e===t)return!0;return!1},M=e?function(t,e){if(t===e)return u=!0,0;var i=!t.compareDocumentPosition-!e.compareDocumentPosition;return i||(1&(i=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1)||!f.sortDetached&&e.compareDocumentPosition(t)===i?t===T||t.ownerDocument===y&&v(y,t)?-1:e===T||e.ownerDocument===y&&v(y,e)?1:l?j(l,t)-j(l,e):0:4&i?-1:1)}:function(t,e){if(t===e)return u=!0,0;var i,n=0,r=t.parentNode,o=e.parentNode,s=[t],a=[e];if(!r||!o)return t===T?-1:e===T?1:r?-1:o?1:l?j(l,t)-j(l,e):0;if(r===o)return ct(t,e);for(i=t;i=i.parentNode;)s.unshift(i);for(i=e;i=i.parentNode;)a.unshift(i);for(;s[n]===a[n];)n++;return n?ct(s[n],a[n]):s[n]===y?-1:a[n]===y?1:0}),T},ot.matches=function(t,e){return ot(t,null,null,e)},ot.matchesSelector=function(t,e){if((t.ownerDocument||t)!==T&&x(t),e=e.replace(q,"='$1']"),f.matchesSelector&&S&&!O[e+" "]&&(!a||!a.test(e))&&(!m||!m.test(e)))try{var i=c.call(t,e);if(i||f.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}
return 0<ot(e,T,null,[t]).length},ot.contains=function(t,e){return(t.ownerDocument||t)!==T&&x(t),v(t,e)},ot.attr=function(t,e){(t.ownerDocument||t)!==T&&x(t);var i=b.attrHandle[e.toLowerCase()],i=i&&A.call(b.attrHandle,e.toLowerCase())?i(t,e,!S):void 0;return void 0!==i?i:f.attributes||!S?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},ot.escape=function(t){return(t+"").replace(it,nt)},ot.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},ot.uniqueSort=function(t){var e,i=[],n=0,r=0;if(u=!f.detectDuplicates,l=!f.sortStable&&t.slice(0),t.sort(M),u){for(;e=t[r++];)e===t[r]&&(n=i.push(r));for(;n--;)t.splice(i[n],1)}
return l=null,t},o=ot.getText=function(t){var e,i="",n=0,r=t.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=o(t)}else if(3===r||4===r)return t.nodeValue}else for(;e=t[n++];)i+=o(e);return i},(b=ot.selectors={cacheLength:50,createPseudo:at,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(et,h),t[3]=(t[3]||t[4]||t[5]||"").replace(et,h),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||ot.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&ot.error(t[0]),t},PSEUDO:function(t){var e,i=!t[6]&&t[2];return V.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":i&&G.test(i)&&(e=p(i,!0))&&(e=i.indexOf(")",i.length-e)-i.length)&&(t[0]=t[0].slice(0,e),t[2]=i.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(et,h).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=k[t+" "];return e||(e=new RegExp("(^|"+N+")"+t+"("+N+"|$)"))&&k(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(e,i,n){return function(t){t=ot.attr(t,e);return null==t?"!="===i:!i||(t+="","="===i?t===n:"!="===i?t!==n:"^="===i?n&&0===t.indexOf(n):"*="===i?n&&-1<t.indexOf(n):"$="===i?n&&t.slice(-n.length)===n:"~="===i?-1<(" "+t.replace(H," ")+" ").indexOf(n):"|="===i&&(t===n||t.slice(0,n.length+1)===n+"-"))}},CHILD:function(p,t,e,g,m){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),_="of-type"===t;return 1===g&&0===m?function(t){return!!t.parentNode}:function(t,e,i){var n,r,o,s,a,l,u=v!=y?"nextSibling":"previousSibling",c=t.parentNode,h=_&&t.nodeName.toLowerCase(),d=!i&&!_,f=!1;if(c){if(v){for(;u;){for(s=t;s=s[u];)
if(_?s.nodeName.toLowerCase()===h:1===s.nodeType)return!1;l=u="only"===p&&!l&&"nextSibling"}
return!0}
if(l=[y?c.firstChild:c.lastChild],y&&d){for(f=(a=(n=(r=(o=(s=c)[C]||(s[C]={}))[s.uniqueID]||(o[s.uniqueID]={}))[p]||[])[0]===E&&n[1])&&n[2],s=a&&c.childNodes[a];s=++a&&s&&s[u]||(f=a=0)||l.pop();)
if(1===s.nodeType&&++f&&s===t){r[p]=[E,a,f];break}}else if(d&&(f=a=(n=(r=(o=(s=t)[C]||(s[C]={}))[s.uniqueID]||(o[s.uniqueID]={}))[p]||[])[0]===E&&n[1]),!1===f)
for(;(s=++a&&s&&s[u]||(f=a=0)||l.pop())&&((_?s.nodeName.toLowerCase()!==h:1!==s.nodeType)||!++f||(d&&((r=(o=s[C]||(s[C]={}))[s.uniqueID]||(o[s.uniqueID]={}))[p]=[E,f]),s!==t)););return(f-=m)===g||f%g==0&&0<=f/g}}},PSEUDO:function(t,o){var e,s=b.pseudos[t]||b.setFilters[t.toLowerCase()]||ot.error("unsupported pseudo: "+t);return s[C]?s(o):1<s.length?(e=[t,t,"",o],b.setFilters.hasOwnProperty(t.toLowerCase())?at(function(t,e){for(var i,n=s(t,o),r=n.length;r--;)t[i=j(t,n[r])]=!(e[i]=n[r])}):function(t){return s(t,0,e)}):s}},pseudos:{not:at(function(t){var n=[],r=[],a=d(t.replace(U,"$1"));return a[C]?at(function(t,e,i,n){for(var r,o=a(t,null,n,[]),s=t.length;s--;)(r=o[s])&&(t[s]=!(e[s]=r))}):function(t,e,i){return n[0]=t,a(n,null,i,r),n[0]=null,!r.pop()}}),has:at(function(e){return function(t){return 0<ot(e,t).length}}),contains:at(function(e){return e=e.replace(et,h),function(t){return-1<(t.textContent||t.innerText||o(t)).indexOf(e)}}),lang:at(function(i){return Y.test(i||"")||ot.error("unsupported lang: "+i),i=i.replace(et,h).toLowerCase(),function(t){var e;do{if(e=S?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(e=e.toLowerCase())===i||0===e.indexOf(i+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var e=i.location&&i.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===s},focus:function(t){return t===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:ht(!1),disabled:ht(!0),checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)
if(t.nodeType<6)return!1;return!0},parent:function(t){return!b.pseudos.empty(t)},header:function(t){return Z.test(t.nodeName)},input:function(t){return Q.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(t=t.getAttribute("type"))||"text"===t.toLowerCase())},first:dt(function(){return[0]}),last:dt(function(t,e){return[e-1]}),eq:dt(function(t,e,i){return[i<0?i+e:i]}),even:dt(function(t,e){for(var i=0;i<e;i+=2)t.push(i);return t}),odd:dt(function(t,e){for(var i=1;i<e;i+=2)t.push(i);return t}),lt:dt(function(t,e,i){for(var n=i<0?i+e:i;0<=--n;)t.push(n);return t}),gt:dt(function(t,e,i){for(var n=i<0?i+e:i;++n<e;)t.push(n);return t})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[t]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(t);for(t in{submit:!0,reset:!0})b.pseudos[t]=function(i){return function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&t.type===i}}(t);function pt(){}
function gt(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e].value;return n}
function mt(s,t,e){var a=t.dir,l=t.next,u=l||a,c=e&&"parentNode"===u,h=_++;return t.first?function(t,e,i){for(;t=t[a];)
if(1===t.nodeType||c)return s(t,e,i);return!1}:function(t,e,i){var n,r,o=[E,h];if(i){for(;t=t[a];)
if((1===t.nodeType||c)&&s(t,e,i))return!0}else for(;t=t[a];)
if(1===t.nodeType||c)
if(n=(r=t[C]||(t[C]={}))[t.uniqueID]||(r[t.uniqueID]={}),l&&l===t.nodeName.toLowerCase())t=t[a]||t;else{if((r=n[u])&&r[0]===E&&r[1]===h)return o[2]=r[2];if((n[u]=o)[2]=s(t,e,i))return!0}return!1}}
function vt(r){return 1<r.length?function(t,e,i){for(var n=r.length;n--;)
if(!r[n](t,e,i))return!1;return!0}:r[0]}
function yt(t,e,i,n,r){for(var o,s=[],a=0,l=t.length,u=null!=e;a<l;a++)(o=t[a])&&(i&&!i(o,n,r)||(s.push(o),u&&e.push(a)));return s}
function _t(f,p,g,m,v,t){return m&&!m[C]&&(m=_t(m)),v&&!v[C]&&(v=_t(v,t)),at(function(t,e,i,n){var r,o,s,a=[],l=[],u=e.length,c=t||function(t,e,i){for(var n=0,r=e.length;n<r;n++)ot(t,e[n],i);return i}(p||"*",i.nodeType?[i]:i,[]),h=!f||!t&&p?c:yt(c,a,f,i,n),d=g?v||(t?f:u||m)?[]:e:h;if(g&&g(h,d,i,n),m)
for(r=yt(d,l),m(r,[],i,n),o=r.length;o--;)(s=r[o])&&(d[l[o]]=!(h[l[o]]=s));if(t){if(v||f){if(v){for(r=[],o=d.length;o--;)(s=d[o])&&r.push(h[o]=s);v(null,d=[],r,n)}
for(o=d.length;o--;)(s=d[o])&&-1<(r=v?j(t,s):a[o])&&(t[r]=!(e[r]=s))}}else d=yt(d===e?d.splice(u,d.length):d),v?v(null,e,d,n):I.apply(e,d)})}
function bt(m,v){function t(t,e,i,n,r){var o,s,a,l=0,u="0",c=t&&[],h=[],d=w,f=t||_&&b.find.TAG("*",r),p=E+=null==d?1:Math.random()||.1,g=f.length;for(r&&(w=e===T||e||r);u!==g&&null!=(o=f[u]);u++){if(_&&o){for(s=0,e||o.ownerDocument===T||(x(o),i=!S);a=m[s++];)
if(a(o,e||T,i)){n.push(o);break}r&&(E=p)}
y&&((o=!a&&o)&&l--,t&&c.push(o))}
if(l+=u,y&&u!==l){for(s=0;a=v[s++];)a(c,h,e,i);if(t){if(0<l)
for(;u--;)c[u]||h[u]||(h[u]=D.call(n));h=yt(h)}
I.apply(n,h),r&&!t&&0<h.length&&1<l+v.length&&ot.uniqueSort(n)}
return r&&(E=p,w=d),c}
var y=0<v.length,_=0<m.length;return y?at(t):t}
return pt.prototype=b.filters=b.pseudos,b.setFilters=new pt,p=ot.tokenize=function(t,e){var i,n,r,o,s,a,l,u=P[t+" "];if(u)return e?0:u.slice(0);for(s=t,a=[],l=b.preFilter;s;){for(o in i&&!(n=W.exec(s))||(n&&(s=s.slice(n[0].length)||s),a.push(r=[])),i=!1,(n=X.exec(s))&&(i=n.shift(),r.push({value:i,type:n[0].replace(U," ")}),s=s.slice(i.length)),b.filter)!(n=V[o].exec(s))||l[o]&&!(n=l[o](n))||(i=n.shift(),r.push({value:i,type:o,matches:n}),s=s.slice(i.length));if(!i)break}
return e?s.length:s?ot.error(t):P(t,a).slice(0)},d=ot.compile=function(t,e){var i,n=[],r=[],o=O[t+" "];if(!o){for(i=(e=e||p(t)).length;i--;)((o=function t(e){for(var n,i,r,o=e.length,s=b.relative[e[0].type],a=s||b.relative[" "],l=s?1:0,u=mt(function(t){return t===n},a,!0),c=mt(function(t){return-1<j(n,t)},a,!0),h=[function(t,e,i){return i=!s&&(i||e!==w)||((n=e).nodeType?u:c)(t,e,i),n=null,i}];l<o;l++)
if(i=b.relative[e[l].type])h=[mt(vt(h),i)];else{if((i=b.filter[e[l].type].apply(null,e[l].matches))[C]){for(r=++l;r<o&&!b.relative[e[r].type];r++);return _t(1<l&&vt(h),1<l&&gt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(U,"$1"),i,l<r&&t(e.slice(l,r)),r<o&&t(e=e.slice(r)),r<o&&gt(e))}
h.push(i)}return vt(h)}(e[i]))[C]?n:r).push(o);(o=O(t,bt(r,n))).selector=t}
return o},g=ot.select=function(t,e,i,n){var r,o,s,a,l,u="function"==typeof t&&t,c=!n&&p(t=u.selector||t);if(i=i||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(s=o[0]).type&&9===e.nodeType&&S&&b.relative[o[1].type]){if(!(e=(b.find.ID(s.matches[0].replace(et,h),e)||[])[0]))return i;u&&(e=e.parentNode),t=t.slice(o.shift().value.length)}
for(r=V.needsContext.test(t)?0:o.length;r--&&(s=o[r],!b.relative[a=s.type]);)
if((l=b.find[a])&&(n=l(s.matches[0].replace(et,h),tt.test(o[0].type)&&ft(e.parentNode)||e))){if(o.splice(r,1),!(t=n.length&&gt(o)))return I.apply(i,n),i;break}}
return(u||d(t,c))(n,e,!S,i,!e||tt.test(t)&&ft(e.parentNode)||e),i},f.sortStable=C.split("").sort(M).join("")===C,f.detectDuplicates=!!u,x(),f.sortDetached=lt(function(t){return 1&t.compareDocumentPosition(T.createElement("fieldset"))}),lt(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||ut("type|href|height|width",function(t,e,i){if(!i)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),f.attributes&&lt(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||ut("value",function(t,e,i){if(!i&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),lt(function(t){return null==t.getAttribute("disabled")})||ut(F,function(t,e,i){if(!i)return!0===t[e]?e.toLowerCase():(e=t.getAttributeNode(e))&&e.specified?e.value:null}),ot}(x);S.find=f,S.expr=f.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=f.uniqueSort,S.text=f.getText,S.isXMLDoc=f.isXML,S.contains=f.contains,S.escapeSelector=f.escape;function w(t,e,i){for(var n=[],r=void 0!==i;(t=t[e])&&9!==t.nodeType;)
if(1===t.nodeType){if(r&&S(t).is(i))break;n.push(t)}return n}
function C(t,e){for(var i=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&i.push(t);return i}
var E=S.expr.match.needsContext;function k(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}
var P=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function O(t,i,n){return _(i)?S.grep(t,function(t,e){return!!i.call(t,e,t)!==n}):i.nodeType?S.grep(t,function(t){return t===i!==n}):"string"!=typeof i?S.grep(t,function(t){return-1<r.call(i,t)!==n}):S.filter(i,t,n)}
S.filter=function(t,e,i){var n=e[0];return i&&(t=":not("+t+")"),1===e.length&&1===n.nodeType?S.find.matchesSelector(n,t)?[n]:[]:S.find.matches(t,S.grep(e,function(t){return 1===t.nodeType}))},S.fn.extend({find:function(t){var e,i,n=this.length,r=this;if("string"!=typeof t)return this.pushStack(S(t).filter(function(){for(e=0;e<n;e++)
if(S.contains(r[e],this))return!0}));for(i=this.pushStack([]),e=0;e<n;e++)S.find(t,r[e],i);return 1<n?S.uniqueSort(i):i},filter:function(t){return this.pushStack(O(this,t||[],!1))},not:function(t){return this.pushStack(O(this,t||[],!0))},is:function(t){return!!O(this,"string"==typeof t&&E.test(t)?S(t):t||[],!1).length}});var M,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(t,e,i){if(!t)return this;if(i=i||M,"string"!=typeof t)return t.nodeType?(this[0]=t,this.length=1,this):_(t)?void 0!==i.ready?i.ready(t):t(S):S.makeArray(t,this);if(!(n="<"===t[0]&&">"===t[t.length-1]&&3<=t.length?[null,t,null]:A.exec(t))||!n[1]&&e)return(!e||e.jquery?e||i:this.constructor(e)).find(t);if(n[1]){if(e=e instanceof S?e[0]:e,S.merge(this,S.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:T,!0)),P.test(n[1])&&S.isPlainObject(e))
for(var n in e)_(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}
return(t=T.getElementById(n[2]))&&(this[0]=t,this.length=1),this}).prototype=S.fn,M=S(T);var D=/^(?:parents|prev(?:Until|All))/,R={children:!0,contents:!0,next:!0,prev:!0};function I(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}
S.fn.extend({has:function(t){var e=S(t,this),i=e.length;return this.filter(function(){for(var t=0;t<i;t++)
if(S.contains(this,e[t]))return!0})},closest:function(t,e){var i,n=0,r=this.length,o=[],s="string"!=typeof t&&S(t);if(!E.test(t))
for(;n<r;n++)
for(i=this[n];i&&i!==e;i=i.parentNode)
if(i.nodeType<11&&(s?-1<s.index(i):1===i.nodeType&&S.find.matchesSelector(i,t))){o.push(i);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(t){return t?"string"==typeof t?r.call(S(t),this[0]):r.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),S.each({parent:function(t){t=t.parentNode;return t&&11!==t.nodeType?t:null},parents:function(t){return w(t,"parentNode")},parentsUntil:function(t,e,i){return w(t,"parentNode",i)},next:function(t){return I(t,"nextSibling")},prev:function(t){return I(t,"previousSibling")},nextAll:function(t){return w(t,"nextSibling")},prevAll:function(t){return w(t,"previousSibling")},nextUntil:function(t,e,i){return w(t,"nextSibling",i)},prevUntil:function(t,e,i){return w(t,"previousSibling",i)},siblings:function(t){return C((t.parentNode||{}).firstChild,t)},children:function(t){return C(t.firstChild)},contents:function(t){return k(t,"iframe")?t.contentDocument:(k(t,"template")&&(t=t.content||t),S.merge([],t.childNodes))}},function(n,r){S.fn[n]=function(t,e){var i=S.map(this,r,t);return"Until"!==n.slice(-5)&&(e=t),e&&"string"==typeof e&&(i=S.filter(e,i)),1<this.length&&(R[n]||S.uniqueSort(i),D.test(n)&&i.reverse()),this.pushStack(i)}});var L=/[^\x20\t\r\n\f]+/g;function j(t){return t}
function F(t){throw t}
function N(t,e,i,n){var r;try{t&&_(r=t.promise)?r.call(t).done(e).fail(i):t&&_(r=t.then)?r.call(t,e,i):e.apply(void 0,[t].slice(n))}catch(t){i.apply(void 0,[t])}}
S.Callbacks=function(n){var t,i;n="string"==typeof n?(t=n,i={},S.each(t.match(L)||[],function(t,e){i[e]=!0}),i):S.extend({},n);function r(){for(a=a||n.once,s=o=!0;u.length;c=-1)
for(e=u.shift();++c<l.length;)!1===l[c].apply(e[0],e[1])&&n.stopOnFalse&&(c=l.length,e=!1);n.memory||(e=!1),o=!1,a&&(l=e?[]:"")}
var o,e,s,a,l=[],u=[],c=-1,h={add:function(){return l&&(e&&!o&&(c=l.length-1,u.push(e)),function i(t){S.each(t,function(t,e){_(e)?n.unique&&h.has(e)||l.push(e):e&&e.length&&"string"!==p(e)&&i(e)})}(arguments),e&&!o&&r()),this},remove:function(){return S.each(arguments,function(t,e){for(var i;-1<(i=S.inArray(e,l,i));)l.splice(i,1),i<=c&&c--}),this},has:function(t){return t?-1<S.inArray(t,l):0<l.length},empty:function(){return l=l&&[],this},disable:function(){return a=u=[],l=e="",this},disabled:function(){return!l},lock:function(){return a=u=[],e||o||(l=e=""),this},locked:function(){return!!a},fireWith:function(t,e){return a||(e=[t,(e=e||[]).slice?e.slice():e],u.push(e),o||r()),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!s}};return h},S.extend({Deferred:function(t){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],r="pending",s={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},pipe:function(){var r=arguments;return S.Deferred(function(n){S.each(o,function(t,e){var i=_(r[e[4]])&&r[e[4]];a[e[1]](function(){var t=i&&i.apply(this,arguments);t&&_(t.promise)?t.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[e[0]+"With"](this,i?[t]:arguments)})}),r=null}).promise()},then:function(e,i,n){var l=0;function u(r,o,s,a){return function(){function t(){var t,e;if(!(r<l)){if((t=s.apply(i,n))===o.promise())throw new TypeError("Thenable self-resolution");e=t&&("object"==typeof t||"function"==typeof t)&&t.then,_(e)?a?e.call(t,u(l,o,j,a),u(l,o,F,a)):(l++,e.call(t,u(l,o,j,a),u(l,o,F,a),u(l,o,j,o.notifyWith))):(s!==j&&(i=void 0,n=[t]),(a||o.resolveWith)(i,n))}}
var i=this,n=arguments,e=a?t:function(){try{t()}catch(t){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(t,e.stackTrace),l<=r+1&&(s!==F&&(i=void 0,n=[t]),o.rejectWith(i,n))}};r?e():(S.Deferred.getStackHook&&(e.stackTrace=S.Deferred.getStackHook()),x.setTimeout(e))}}
return S.Deferred(function(t){o[0][3].add(u(0,t,_(n)?n:j,t.notifyWith)),o[1][3].add(u(0,t,_(e)?e:j)),o[2][3].add(u(0,t,_(i)?i:F))}).promise()},promise:function(t){return null!=t?S.extend(t,s):s}},a={};return S.each(o,function(t,e){var i=e[2],n=e[5];s[e[1]]=i.add,n&&i.add(function(){r=n},o[3-t][2].disable,o[3-t][3].disable,o[0][2].lock,o[0][3].lock),i.add(e[3].fire),a[e[0]]=function(){return a[e[0]+"With"](this===a?void 0:this,arguments),this},a[e[0]+"With"]=i.fireWith}),s.promise(a),t&&t.call(a,a),a},when:function(t){function e(e){return function(t){r[e]=this,o[e]=1<arguments.length?a.call(arguments):t,--i||s.resolveWith(r,o)}}
var i=arguments.length,n=i,r=Array(n),o=a.call(arguments),s=S.Deferred();if(i<=1&&(N(t,s.done(e(n)).resolve,s.reject,!i),"pending"===s.state()||_(o[n]&&o[n].then)))return s.then();for(;n--;)N(o[n],e(n),s.reject);return s.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(t,e){x.console&&x.console.warn&&t&&z.test(t.name)&&x.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},S.readyException=function(t){x.setTimeout(function(){throw t})};var B=S.Deferred();function $(){T.removeEventListener("DOMContentLoaded",$),x.removeEventListener("load",$),S.ready()}
S.fn.ready=function(t){return B.then(t).catch(function(t){S.readyException(t)}),this},S.extend({isReady:!1,readyWait:1,ready:function(t){(!0===t?--S.readyWait:S.isReady)||((S.isReady=!0)!==t&&0<--S.readyWait||B.resolveWith(T,[S]))}}),S.ready.then=B.then,"complete"===T.readyState||"loading"!==T.readyState&&!T.documentElement.doScroll?x.setTimeout(S.ready):(T.addEventListener("DOMContentLoaded",$),x.addEventListener("load",$));var H=function(t,e,i,n,r,o,s){var a=0,l=t.length,u=null==i;if("object"===p(i))
for(a in r=!0,i)H(t,e,a,i[a],!0,o,s);else if(void 0!==n&&(r=!0,_(n)||(s=!0),u&&(e=s?(e.call(t,n),null):(u=e,function(t,e,i){return u.call(S(t),i)})),e))
for(;a<l;a++)e(t[a],i,s?n:n.call(t[a],a,e(t[a],i)));return r?t:u?e.call(t):l?e(t[0],i):o},U=/^-ms-/,W=/-([a-z])/g;function X(t,e){return e.toUpperCase()}
function q(t){return t.replace(U,"ms-").replace(W,X)}
function G(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType}
function Y(){this.expando=S.expando+Y.uid++}
Y.uid=1,Y.prototype={cache:function(t){var e=t[this.expando];return e||(e={},G(t)&&(t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,i){var n,r=this.cache(t);if("string"==typeof e)r[q(e)]=i;else for(n in e)r[q(n)]=e[n];return r},get:function(t,e){return void 0===e?this.cache(t):t[this.expando]&&t[this.expando][q(e)]},access:function(t,e,i){return void 0===e||e&&"string"==typeof e&&void 0===i?this.get(t,e):(this.set(t,e,i),void 0!==i?i:e)},remove:function(t,e){var i,n=t[this.expando];if(void 0!==n){if(void 0!==e){i=(e=Array.isArray(e)?e.map(q):(e=q(e))in n?[e]:e.match(L)||[]).length;for(;i--;)delete n[e[i]]}
void 0!==e&&!S.isEmptyObject(n)||(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){t=t[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var V=new Y,Q=new Y,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function J(t,e,i){var n,r;if(void 0===i&&1===t.nodeType)
if(n="data-"+e.replace(K,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(n))){try{i="true"===(r=i)||"false"!==r&&("null"===r?null:r===+r+""?+r:Z.test(r)?JSON.parse(r):r)}catch(t){}
Q.set(t,e,i)}else i=void 0;return i}
S.extend({hasData:function(t){return Q.hasData(t)||V.hasData(t)},data:function(t,e,i){return Q.access(t,e,i)},removeData:function(t,e){Q.remove(t,e)},_data:function(t,e,i){return V.access(t,e,i)},_removeData:function(t,e){V.remove(t,e)}}),S.fn.extend({data:function(i,t){var e,n,r,o=this[0],s=o&&o.attributes;if(void 0!==i)return"object"==typeof i?this.each(function(){Q.set(this,i)}):H(this,function(t){var e;return o&&void 0===t?void 0!==(e=Q.get(o,i))||void 0!==(e=J(o,i))?e:void 0:void this.each(function(){Q.set(this,i,t)})},null,t,1<arguments.length,null,!0);if(this.length&&(r=Q.get(o),1===o.nodeType&&!V.get(o,"hasDataAttrs"))){for(e=s.length;e--;)s[e]&&0===(n=s[e].name).indexOf("data-")&&(n=q(n.slice(5)),J(o,n,r[n]));V.set(o,"hasDataAttrs",!0)}
return r},removeData:function(t){return this.each(function(){Q.remove(this,t)})}}),S.extend({queue:function(t,e,i){var n;if(t)return e=(e||"fx")+"queue",n=V.get(t,e),i&&(!n||Array.isArray(i)?n=V.access(t,e,S.makeArray(i)):n.push(i)),n||[]},dequeue:function(t,e){e=e||"fx";var i=S.queue(t,e),n=i.length,r=i.shift(),o=S._queueHooks(t,e);"inprogress"===r&&(r=i.shift(),n--),r&&("fx"===e&&i.unshift("inprogress"),delete o.stop,r.call(t,function(){S.dequeue(t,e)},o)),!n&&o&&o.empty.fire()},_queueHooks:function(t,e){var i=e+"queueHooks";return V.get(t,i)||V.access(t,i,{empty:S.Callbacks("once memory").add(function(){V.remove(t,[e+"queue",i])})})}}),S.fn.extend({queue:function(e,i){var t=2;return"string"!=typeof e&&(i=e,e="fx",t--),arguments.length<t?S.queue(this[0],e):void 0===i?this:this.each(function(){var t=S.queue(this,e,i);S._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&S.dequeue(this,e)})},dequeue:function(t){return this.each(function(){S.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){function i(){--r||o.resolveWith(s,[s])}
var n,r=1,o=S.Deferred(),s=this,a=this.length;for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";a--;)(n=V.get(s[a],t+"queueHooks"))&&n.empty&&(r++,n.empty.add(i));return i(),o.promise(e)}});function tt(t,e,i,n){var r,o={};for(r in e)o[r]=t.style[r],t.style[r]=e[r];for(r in n=i.apply(t,n||[]),e)t.style[r]=o[r];return n}
var et=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,it=new RegExp("^(?:([+-])=|)("+et+")([a-z%]*)$","i"),nt=["Top","Right","Bottom","Left"],rt=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&S.contains(t.ownerDocument,t)&&"none"===S.css(t,"display")};function ot(t,e,i,n){var r,o,s=20,a=n?function(){return n.cur()}:function(){return S.css(t,e,"")},l=a(),u=i&&i[3]||(S.cssNumber[e]?"":"px"),c=(S.cssNumber[e]||"px"!==u&&+l)&&it.exec(S.css(t,e));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)S.style(t,e,c+u),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),c/=o;c*=2,S.style(t,e,c+u),i=i||[]}
return i&&(c=+c||+l||0,r=i[1]?c+(i[1]+1)*i[2]:+i[2],n&&(n.unit=u,n.start=c,n.end=r)),r}
var st={};function at(t,e){for(var i,n,r,o,s,a=[],l=0,u=t.length;l<u;l++)(n=t[l]).style&&(i=n.style.display,e?("none"===i&&(a[l]=V.get(n,"display")||null,a[l]||(n.style.display="")),""===n.style.display&&rt(n)&&(a[l]=(s=o=void 0,o=(r=n).ownerDocument,s=r.nodeName,(r=st[s])||(o=o.body.appendChild(o.createElement(s)),r=S.css(o,"display"),o.parentNode.removeChild(o),"none"===r&&(r="block"),st[s]=r)))):"none"!==i&&(a[l]="none",V.set(n,"display",i)));for(l=0;l<u;l++)null!=a[l]&&(t[l].style.display=a[l]);return t}
S.fn.extend({show:function(){return at(this,!0)},hide:function(){return at(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){rt(this)?S(this).show():S(this).hide()})}});var lt=/^(?:checkbox|radio)$/i,ut=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ct=/^$|^module$|\/(?:java|ecma)script/i,ht={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function dt(t,e){var i=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[];return void 0===e||e&&k(t,e)?S.merge([t],i):i}
function ft(t,e){for(var i=0,n=t.length;i<n;i++)V.set(t[i],"globalEval",!e||V.get(e[i],"globalEval"))}
ht.optgroup=ht.option,ht.tbody=ht.tfoot=ht.colgroup=ht.caption=ht.thead,ht.th=ht.td;var pt=/<|&#?\w+;/;function gt(t,e,i,n,r){for(var o,s,a,l,u,c=e.createDocumentFragment(),h=[],d=0,f=t.length;d<f;d++)
if((o=t[d])||0===o)
if("object"===p(o))S.merge(h,o.nodeType?[o]:o);else if(pt.test(o)){for(s=s||c.appendChild(e.createElement("div")),a=(ut.exec(o)||["",""])[1].toLowerCase(),a=ht[a]||ht._default,s.innerHTML=a[1]+S.htmlPrefilter(o)+a[2],u=a[0];u--;)s=s.lastChild;S.merge(h,s.childNodes),(s=c.firstChild).textContent=""}else h.push(e.createTextNode(o));for(c.textContent="",d=0;o=h[d++];)
if(n&&-1<S.inArray(o,n))r&&r.push(o);else if(l=S.contains(o.ownerDocument,o),s=dt(c.appendChild(o),"script"),l&&ft(s),i)
for(u=0;o=s[u++];)ct.test(o.type||"")&&i.push(o);return c}
e=T.createDocumentFragment().appendChild(T.createElement("div")),(f=T.createElement("input")).setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),e.appendChild(f),y.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue;var mt=T.documentElement,vt=/^key/,yt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,_t=/^([^.]*)(?:\.(.+)|)/;function bt(){return!0}
function wt(){return!1}
function xt(){try{return T.activeElement}catch(t){}}
function Tt(t,e,i,n,r,o){var s,a;if("object"==typeof e){for(a in "string"!=typeof i&&(n=n||i,i=void 0),e)Tt(t,a,i,n,e[a],o);return t}
if(null==n&&null==r?(r=i,n=i=void 0):null==r&&("string"==typeof i?(r=n,n=void 0):(r=n,n=i,i=void 0)),!1===r)r=wt;else if(!r)return t;return 1===o&&(s=r,(r=function(t){return S().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=S.guid++)),t.each(function(){S.event.add(this,e,r,n,i)})}
S.event={global:{},add:function(e,t,i,n,r){var o,s,a,l,u,c,h,d,f,p=V.get(e);if(p)
for(i.handler&&(i=(o=i).handler,r=o.selector),r&&S.find.matchesSelector(mt,r),i.guid||(i.guid=S.guid++),(a=p.events)||(a=p.events={}),(s=p.handle)||(s=p.handle=function(t){return void 0!==S&&S.event.triggered!==t.type?S.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(L)||[""]).length;l--;)h=f=(u=_t.exec(t[l])||[])[1],d=(u[2]||"").split(".").sort(),h&&(c=S.event.special[h]||{},h=(r?c.delegateType:c.bindType)||h,c=S.event.special[h]||{},u=S.extend({type:h,origType:f,data:n,handler:i,guid:i.guid,selector:r,needsContext:r&&S.expr.match.needsContext.test(r),namespace:d.join(".")},o),(f=a[h])||((f=a[h]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(e,n,d,s)||e.addEventListener&&e.addEventListener(h,s)),c.add&&(c.add.call(e,u),u.handler.guid||(u.handler.guid=i.guid)),r?f.splice(f.delegateCount++,0,u):f.push(u),S.event.global[h]=!0)},remove:function(t,e,i,n,r){var o,s,a,l,u,c,h,d,f,p,g,m=V.hasData(t)&&V.get(t);if(m&&(l=m.events)){for(u=(e=(e||"").match(L)||[""]).length;u--;)
if(f=g=(a=_t.exec(e[u])||[])[1],p=(a[2]||"").split(".").sort(),f){for(h=S.event.special[f]||{},d=l[f=(n?h.delegateType:h.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)c=d[o],!r&&g!==c.origType||i&&i.guid!==c.guid||a&&!a.test(c.namespace)||n&&n!==c.selector&&("**"!==n||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,h.remove&&h.remove.call(t,c));s&&!d.length&&(h.teardown&&!1!==h.teardown.call(t,p,m.handle)||S.removeEvent(t,f,m.handle),delete l[f])}else for(f in l)S.event.remove(t,f+e[u],i,n,!0);S.isEmptyObject(l)&&V.remove(t,"handle events")}},dispatch:function(t){var e,i,n,r,o,s=S.event.fix(t),a=new Array(arguments.length),l=(V.get(this,"events")||{})[s.type]||[],t=S.event.special[s.type]||{};for(a[0]=s,e=1;e<arguments.length;e++)a[e]=arguments[e];if(s.delegateTarget=this,!t.preDispatch||!1!==t.preDispatch.call(this,s)){for(o=S.event.handlers.call(this,s,l),e=0;(n=o[e++])&&!s.isPropagationStopped();)
for(s.currentTarget=n.elem,i=0;(r=n.handlers[i++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!s.rnamespace.test(r.namespace)||(s.handleObj=r,s.data=r.data,void 0!==(r=((S.event.special[r.origType]||{}).handle||r.handler).apply(n.elem,a))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));return t.postDispatch&&t.postDispatch.call(this,s),s.result}},handlers:function(t,e){var i,n,r,o,s,a=[],l=e.delegateCount,u=t.target;if(l&&u.nodeType&&!("click"===t.type&&1<=t.button))
for(;u!==this;u=u.parentNode||this)
if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(o=[],s={},i=0;i<l;i++)void 0===s[r=(n=e[i]).selector+" "]&&(s[r]=n.needsContext?-1<S(r,this).index(u):S.find(r,this,null,[u]).length),s[r]&&o.push(n);o.length&&a.push({elem:u,handlers:o})}return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(e,t){Object.defineProperty(S.Event.prototype,e,{enumerable:!0,configurable:!0,get:_(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(t){return t[S.expando]?t:new S.Event(t)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xt()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xt()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&k(this,"input"))return this.click(),!1},_default:function(t){return k(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},S.removeEvent=function(t,e,i){t.removeEventListener&&t.removeEventListener(e,i)},S.Event=function(t,e){if(!(this instanceof S.Event))return new S.Event(t,e);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?bt:wt,this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,e&&S.extend(this,e),this.timeStamp=t&&t.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:wt,isPropagationStopped:wt,isImmediatePropagationStopped:wt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=bt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=bt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=bt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;return null==t.which&&vt.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:!t.which&&void 0!==e&&yt.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},S.event.addProp),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,r){S.event.special[t]={delegateType:r,bindType:r,handle:function(t){var e,i=t.relatedTarget,n=t.handleObj;return i&&(i===this||S.contains(this,i))||(t.type=n.origType,e=n.handler.apply(this,arguments),t.type=r),e}}}),S.fn.extend({on:function(t,e,i,n){return Tt(this,t,e,i,n)},one:function(t,e,i,n){return Tt(this,t,e,i,n,1)},off:function(t,e,i){var n,r;if(t&&t.preventDefault&&t.handleObj)return n=t.handleObj,S(t.delegateTarget).off(n.namespace?n.origType+"."+n.namespace:n.origType,n.selector,n.handler),this;if("object"!=typeof t)return!1!==e&&"function"!=typeof e||(i=e,e=void 0),!1===i&&(i=wt),this.each(function(){S.event.remove(this,t,i,e)});for(r in t)this.off(r,e,t[r]);return this}});var St=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ct=/<script|<style|<link/i,Et=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Pt(t,e){return k(t,"table")&&k(11!==e.nodeType?e:e.firstChild,"tr")&&S(t).children("tbody")[0]||t}
function Ot(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}
function Mt(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}
function At(t,e){var i,n,r,o,s,a;if(1===e.nodeType){if(V.hasData(t)&&(o=V.access(t),s=V.set(e,o),a=o.events))
for(r in delete s.handle,s.events={},a)
for(i=0,n=a[r].length;i<n;i++)S.event.add(e,r,a[r][i]);Q.hasData(t)&&(t=Q.access(t),t=S.extend({},t),Q.set(e,t))}}
function Dt(i,n,r,o){n=m.apply([],n);var t,e,s,a,l,u,c=0,h=i.length,d=h-1,f=n[0],p=_(f);if(p||1<h&&"string"==typeof f&&!y.checkClone&&Et.test(f))return i.each(function(t){var e=i.eq(t);p&&(n[0]=f.call(this,t,e.html())),Dt(e,n,r,o)});if(h&&(e=(t=gt(n,i[0].ownerDocument,!1,i,o)).firstChild,1===t.childNodes.length&&(t=e),e||o)){for(a=(s=S.map(dt(t,"script"),Ot)).length;c<h;c++)l=t,c!==d&&(l=S.clone(l,!0,!0),a&&S.merge(s,dt(l,"script"))),r.call(i[c],l,c);if(a)
for(u=s[s.length-1].ownerDocument,S.map(s,Mt),c=0;c<a;c++)l=s[c],ct.test(l.type||"")&&!V.access(l,"globalEval")&&S.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?S._evalUrl&&S._evalUrl(l.src):b(l.textContent.replace(kt,""),u,l))}
return i}
function Rt(t,e,i){for(var n,r=e?S.filter(e,t):t,o=0;null!=(n=r[o]);o++)i||1!==n.nodeType||S.cleanData(dt(n)),n.parentNode&&(i&&S.contains(n.ownerDocument,n)&&ft(dt(n,"script")),n.parentNode.removeChild(n));return t}
S.extend({htmlPrefilter:function(t){return t.replace(St,"<$1></$2>")},clone:function(t,e,i){var n,r,o,s,a,l,u,c=t.cloneNode(!0),h=S.contains(t.ownerDocument,t);if(!(y.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||S.isXMLDoc(t)))
for(s=dt(c),n=0,r=(o=dt(t)).length;n<r;n++)a=o[n],l=s[n],u=void 0,"input"===(u=l.nodeName.toLowerCase())&&lt.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(e)
if(i)
for(o=o||dt(t),s=s||dt(c),n=0,r=o.length;n<r;n++)At(o[n],s[n]);else At(t,c);return 0<(s=dt(c,"script")).length&&ft(s,!h&&dt(t,"script")),c},cleanData:function(t){for(var e,i,n,r=S.event.special,o=0;void 0!==(i=t[o]);o++)
if(G(i)){if(e=i[V.expando]){if(e.events)
for(n in e.events)r[n]?S.event.remove(i,n):S.removeEvent(i,n,e.handle);i[V.expando]=void 0}
i[Q.expando]&&(i[Q.expando]=void 0)}}}),S.fn.extend({detach:function(t){return Rt(this,t,!0)},remove:function(t){return Rt(this,t)},text:function(t){return H(this,function(t){return void 0===t?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return Dt(this,arguments,function(t){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Pt(this,t).appendChild(t)})},prepend:function(){return Dt(this,arguments,function(t){var e;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(e=Pt(this,t)).insertBefore(t,e.firstChild)})},before:function(){return Dt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return Dt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(S.cleanData(dt(t,!1)),t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return S.clone(this,t,e)})},html:function(t){return H(this,function(t){var e=this[0]||{},i=0,n=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;if("string"==typeof t&&!Ct.test(t)&&!ht[(ut.exec(t)||["",""])[1].toLowerCase()]){t=S.htmlPrefilter(t);try{for(;i<n;i++)1===(e=this[i]||{}).nodeType&&(S.cleanData(dt(e,!1)),e.innerHTML=t);e=0}catch(t){}}
e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var i=[];return Dt(this,arguments,function(t){var e=this.parentNode;S.inArray(this,i)<0&&(S.cleanData(dt(this)),e&&e.replaceChild(t,this))},i)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,s){S.fn[t]=function(t){for(var e,i=[],n=S(t),r=n.length-1,o=0;o<=r;o++)e=o===r?this:this.clone(!0),S(n[o])[s](e),l.apply(i,e.get());return this.pushStack(i)}});var It,Lt,jt,Ft,Nt,zt,Bt,$t=new RegExp("^("+et+")(?!px)[a-z%]+$","i"),Ht=function(t){var e=t.ownerDocument.defaultView;return e&&e.opener||(e=x),e.getComputedStyle(t)},Ut=new RegExp(nt.join("|"),"i");function Wt(){var t;Bt&&(zt.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",Bt.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",mt.appendChild(zt).appendChild(Bt),t=x.getComputedStyle(Bt),It="1%"!==t.top,Nt=12===Xt(t.marginLeft),Bt.style.right="60%",Ft=36===Xt(t.right),Lt=36===Xt(t.width),Bt.style.position="absolute",jt=36===Bt.offsetWidth||"absolute",mt.removeChild(zt),Bt=null)}
function Xt(t){return Math.round(parseFloat(t))}
function qt(t,e,i){var n,r,o=t.style;return(i=i||Ht(t))&&(""!==(r=i.getPropertyValue(e)||i[e])||S.contains(t.ownerDocument,t)||(r=S.style(t,e)),!y.pixelBoxStyles()&&$t.test(r)&&Ut.test(e)&&(n=o.width,t=o.minWidth,e=o.maxWidth,o.minWidth=o.maxWidth=o.width=r,r=i.width,o.width=n,o.minWidth=t,o.maxWidth=e)),void 0!==r?r+"":r}
function Gt(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}
zt=T.createElement("div"),(Bt=T.createElement("div")).style&&(Bt.style.backgroundClip="content-box",Bt.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===Bt.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return Wt(),Lt},pixelBoxStyles:function(){return Wt(),Ft},pixelPosition:function(){return Wt(),It},reliableMarginLeft:function(){return Wt(),Nt},scrollboxSize:function(){return Wt(),jt}}));var Yt=/^(none|table(?!-c[ea]).+)/,Vt=/^--/,Qt={position:"absolute",visibility:"hidden",display:"block"},Zt={letterSpacing:"0",fontWeight:"400"},Kt=["Webkit","Moz","ms"],Jt=T.createElement("div").style;function te(t){return S.cssProps[t]||(S.cssProps[t]=function(t){if(t in Jt)return t;for(var e=t[0].toUpperCase()+t.slice(1),i=Kt.length;i--;)
if((t=Kt[i]+e)in Jt)return t}(t)||t)}
function ee(t,e,i){var n=it.exec(e);return n?Math.max(0,n[2]-(i||0))+(n[3]||"px"):e}
function ie(t,e,i,n,r,o){var s="width"===e?1:0,a=0,l=0;if(i===(n?"border":"content"))return 0;for(;s<4;s+=2)"margin"===i&&(l+=S.css(t,i+nt[s],!0,r)),n?("content"===i&&(l-=S.css(t,"padding"+nt[s],!0,r)),"margin"!==i&&(l-=S.css(t,"border"+nt[s]+"Width",!0,r))):(l+=S.css(t,"padding"+nt[s],!0,r),"padding"!==i?l+=S.css(t,"border"+nt[s]+"Width",!0,r):a+=S.css(t,"border"+nt[s]+"Width",!0,r));return!n&&0<=o&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-o-l-a-.5))),l}
function ne(t,e,i){var n=Ht(t),r=qt(t,e,n),o="border-box"===S.css(t,"boxSizing",!1,n),s=o;if($t.test(r)){if(!i)return r;r="auto"}
return s=s&&(y.boxSizingReliable()||r===t.style[e]),"auto"!==r&&(parseFloat(r)||"inline"!==S.css(t,"display",!1,n))||(r=t["offset"+e[0].toUpperCase()+e.slice(1)],s=!0),(r=parseFloat(r)||0)+ie(t,e,i||(o?"border":"content"),s,n,r)+"px"}
function re(t,e,i,n,r){return new re.prototype.init(t,e,i,n,r)}
S.extend({cssHooks:{opacity:{get:function(t,e){if(e){t=qt(t,"opacity");return""===t?"1":t}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(t,e,i,n){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var r,o,s,a=q(e),l=Vt.test(e),u=t.style;if(l||(e=te(a)),s=S.cssHooks[e]||S.cssHooks[a],void 0===i)return s&&"get" in s&&void 0!==(r=s.get(t,!1,n))?r:u[e];"string"==(o=typeof i)&&(r=it.exec(i))&&r[1]&&(i=ot(t,e,r),o="number"),null!=i&&i==i&&("number"===o&&(i+=r&&r[3]||(S.cssNumber[a]?"":"px")),y.clearCloneStyle||""!==i||0!==e.indexOf("background")||(u[e]="inherit"),s&&"set" in s&&void 0===(i=s.set(t,i,n))||(l?u.setProperty(e,i):u[e]=i))}},css:function(t,e,i,n){var r,o=q(e);return Vt.test(e)||(e=te(o)),(o=S.cssHooks[e]||S.cssHooks[o])&&"get" in o&&(r=o.get(t,!0,i)),void 0===r&&(r=qt(t,e,n)),"normal"===r&&e in Zt&&(r=Zt[e]),""===i||i?(e=parseFloat(r),!0===i||isFinite(e)?e||0:r):r}}),S.each(["height","width"],function(t,s){S.cssHooks[s]={get:function(t,e,i){if(e)return!Yt.test(S.css(t,"display"))||t.getClientRects().length&&t.getBoundingClientRect().width?ne(t,s,i):tt(t,Qt,function(){return ne(t,s,i)})},set:function(t,e,i){var n,r=Ht(t),o="border-box"===S.css(t,"boxSizing",!1,r),i=i&&ie(t,s,i,o,r);return o&&y.scrollboxSize()===r.position&&(i-=Math.ceil(t["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(r[s])-ie(t,s,"border",!1,r)-.5)),i&&(n=it.exec(e))&&"px"!==(n[3]||"px")&&(t.style[s]=e,e=S.css(t,s)),ee(0,e,i)}}}),S.cssHooks.marginLeft=Gt(y.reliableMarginLeft,function(t,e){if(e)return(parseFloat(qt(t,"marginLeft"))||t.getBoundingClientRect().left-tt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(r,o){S.cssHooks[r+o]={expand:function(t){for(var e=0,i={},n="string"==typeof t?t.split(" "):[t];e<4;e++)i[r+nt[e]+o]=n[e]||n[e-2]||n[0];return i}},"margin"!==r&&(S.cssHooks[r+o].set=ee)}),S.fn.extend({css:function(t,e){return H(this,function(t,e,i){var n,r,o={},s=0;if(Array.isArray(e)){for(n=Ht(t),r=e.length;s<r;s++)o[e[s]]=S.css(t,e[s],!1,n);return o}
return void 0!==i?S.style(t,e,i):S.css(t,e)},t,e,1<arguments.length)}}),(S.Tween=re).prototype={constructor:re,init:function(t,e,i,n,r,o){this.elem=t,this.prop=i,this.easing=r||S.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=n,this.unit=o||(S.cssNumber[i]?"":"px")},cur:function(){var t=re.propHooks[this.prop];return(t&&t.get?t:re.propHooks._default).get(this)},run:function(t){var e,i=re.propHooks[this.prop];return this.options.duration?this.pos=e=S.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(i&&i.set?i:re.propHooks._default).set(this),this}},re.prototype.init.prototype=re.prototype,re.propHooks={_default:{get:function(t){return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(t=S.css(t.elem,t.prop,""))&&"auto"!==t?t:0},set:function(t){S.fx.step[t.prop]?S.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[S.cssProps[t.prop]]&&!S.cssHooks[t.prop]?t.elem[t.prop]=t.now:S.style(t.elem,t.prop,t.now+t.unit)}}},re.propHooks.scrollTop=re.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},S.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},S.fx=re.prototype.init,S.fx.step={};var oe,se,ae=/^(?:toggle|show|hide)$/,le=/queueHooks$/;function ue(){se&&(!1===T.hidden&&x.requestAnimationFrame?x.requestAnimationFrame(ue):x.setTimeout(ue,S.fx.interval),S.fx.tick())}
function ce(){return x.setTimeout(function(){oe=void 0}),oe=Date.now()}
function he(t,e){var i,n=0,r={height:t};for(e=e?1:0;n<4;n+=2-e)r["margin"+(i=nt[n])]=r["padding"+i]=t;return e&&(r.opacity=r.width=t),r}
function de(t,e,i){for(var n,r=(fe.tweeners[e]||[]).concat(fe.tweeners["*"]),o=0,s=r.length;o<s;o++)
if(n=r[o].call(i,e,t))return n}
function fe(r,t,e){var i,o,n=0,s=fe.prefilters.length,a=S.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=oe||ce(),t=Math.max(0,u.startTime+u.duration-t),e=1-(t/u.duration||0),i=0,n=u.tweens.length;i<n;i++)u.tweens[i].run(e);return a.notifyWith(r,[u,e,t]),e<1&&n?t:(n||a.notifyWith(r,[u,1,0]),a.resolveWith(r,[u]),!1)},u=a.promise({elem:r,props:S.extend({},t),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},e),originalProperties:t,originalOptions:e,startTime:oe||ce(),duration:e.duration,tweens:[],createTween:function(t,e){t=S.Tween(r,u.opts,t,e,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(t),t},stop:function(t){var e=0,i=t?u.tweens.length:0;if(o)return this;for(o=!0;e<i;e++)u.tweens[e].run(1);return t?(a.notifyWith(r,[u,1,0]),a.resolveWith(r,[u,t])):a.rejectWith(r,[u,t]),this}}),c=u.props;for(function(t,e){var i,n,r,o,s;for(i in t)
if(n=q(i),r=e[n],o=t[i],Array.isArray(o)&&(r=o[1],o=t[i]=o[0]),i!==n&&(t[n]=o,delete t[i]),(s=S.cssHooks[n])&&"expand" in s)
for(i in o=s.expand(o),delete t[n],o)i in t||(t[i]=o[i],e[i]=r);else e[n]=r}(c,u.opts.specialEasing);n<s;n++)
if(i=fe.prefilters[n].call(u,r,c,u.opts))return _(i.stop)&&(S._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return S.map(c,de,u),_(u.opts.start)&&u.opts.start.call(r,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),S.fx.timer(S.extend(l,{elem:r,anim:u,queue:u.opts.queue})),u}
S.Animation=S.extend(fe,{tweeners:{"*":[function(t,e){var i=this.createTween(t,e);return ot(i.elem,t,it.exec(e),i),i}]},tweener:function(t,e){for(var i,n=0,r=(t=_(t)?(e=t,["*"]):t.match(L)).length;n<r;n++)i=t[n],fe.tweeners[i]=fe.tweeners[i]||[],fe.tweeners[i].unshift(e)},prefilters:[function(t,e,i){var n,r,o,s,a,l,u,c="width" in e||"height" in e,h=this,d={},f=t.style,p=t.nodeType&&rt(t),g=V.get(t,"fxshow");for(n in i.queue||(null==(s=S._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,h.always(function(){h.always(function(){s.unqueued--,S.queue(t,"fx").length||s.empty.fire()})})),e)
if(r=e[n],ae.test(r)){if(delete e[n],o=o||"toggle"===r,r===(p?"hide":"show")){if("show"!==r||!g||void 0===g[n])continue;p=!0}
d[n]=g&&g[n]||S.style(t,n)}if((l=!S.isEmptyObject(e))||!S.isEmptyObject(d))
for(n in c&&1===t.nodeType&&(i.overflow=[f.overflow,f.overflowX,f.overflowY],null==(u=g&&g.display)&&(u=V.get(t,"display")),"none"===(c=S.css(t,"display"))&&(u?c=u:(at([t],!0),u=t.style.display||u,c=S.css(t,"display"),at([t]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===S.css(t,"float")&&(l||(h.done(function(){f.display=u}),null==u&&(c=f.display,u="none"===c?"":c)),f.display="inline-block")),i.overflow&&(f.overflow="hidden",h.always(function(){f.overflow=i.overflow[0],f.overflowX=i.overflow[1],f.overflowY=i.overflow[2]})),l=!1,d)l||(g?"hidden" in g&&(p=g.hidden):g=V.access(t,"fxshow",{display:u}),o&&(g.hidden=!p),p&&at([t],!0),h.done(function(){for(n in p||at([t]),V.remove(t,"fxshow"),d)S.style(t,n,d[n])})),l=de(p?g[n]:0,n,h),n in g||(g[n]=l.start,p&&(l.end=l.start,l.start=0))}],prefilter:function(t,e){e?fe.prefilters.unshift(t):fe.prefilters.push(t)}}),S.speed=function(t,e,i){var n=t&&"object"==typeof t?S.extend({},t):{complete:i||!i&&e||_(t)&&t,duration:t,easing:i&&e||e&&!_(e)&&e};return S.fx.off?n.duration=0:"number"!=typeof n.duration&&(n.duration in S.fx.speeds?n.duration=S.fx.speeds[n.duration]:n.duration=S.fx.speeds._default),null!=n.queue&&!0!==n.queue||(n.queue="fx"),n.old=n.complete,n.complete=function(){_(n.old)&&n.old.call(this),n.queue&&S.dequeue(this,n.queue)},n},S.fn.extend({fadeTo:function(t,e,i,n){return this.filter(rt).css("opacity",0).show().end().animate({opacity:e},t,i,n)},animate:function(e,t,i,n){var r=S.isEmptyObject(e),o=S.speed(t,i,n),n=function(){var t=fe(this,S.extend({},e),o);(r||V.get(this,"finish"))&&t.stop(!0)};return n.finish=n,r||!1===o.queue?this.each(n):this.queue(o.queue,n)},stop:function(r,t,o){function s(t){var e=t.stop;delete t.stop,e(o)}
return"string"!=typeof r&&(o=t,t=r,r=void 0),t&&!1!==r&&this.queue(r||"fx",[]),this.each(function(){var t=!0,e=null!=r&&r+"queueHooks",i=S.timers,n=V.get(this);if(e)n[e]&&n[e].stop&&s(n[e]);else for(e in n)n[e]&&n[e].stop&&le.test(e)&&s(n[e]);for(e=i.length;e--;)i[e].elem!==this||null!=r&&i[e].queue!==r||(i[e].anim.stop(o),t=!1,i.splice(e,1));!t&&o||S.dequeue(this,r)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var t,e=V.get(this),i=e[s+"queue"],n=e[s+"queueHooks"],r=S.timers,o=i?i.length:0;for(e.finish=!0,S.queue(this,s,[]),n&&n.stop&&n.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===s&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<o;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete e.finish})}}),S.each(["toggle","show","hide"],function(t,n){var r=S.fn[n];S.fn[n]=function(t,e,i){return null==t||"boolean"==typeof t?r.apply(this,arguments):this.animate(he(n,!0),t,e,i)}}),S.each({slideDown:he("show"),slideUp:he("hide"),slideToggle:he("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){S.fn[t]=function(t,e,i){return this.animate(n,t,e,i)}}),S.timers=[],S.fx.tick=function(){var t,e=0,i=S.timers;for(oe=Date.now();e<i.length;e++)(t=i[e])()||i[e]!==t||i.splice(e--,1);i.length||S.fx.stop(),oe=void 0},S.fx.timer=function(t){S.timers.push(t),S.fx.start()},S.fx.interval=13,S.fx.start=function(){se||(se=!0,ue())},S.fx.stop=function(){se=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(n,t){return n=S.fx&&S.fx.speeds[n]||n,t=t||"fx",this.queue(t,function(t,e){var i=x.setTimeout(t,n);e.stop=function(){x.clearTimeout(i)}})},e=T.createElement("input"),et=T.createElement("select").appendChild(T.createElement("option")),e.type="checkbox",y.checkOn=""!==e.value,y.optSelected=et.selected,(e=T.createElement("input")).value="t",e.type="radio",y.radioValue="t"===e.value;var pe,ge=S.expr.attrHandle;S.fn.extend({attr:function(t,e){return H(this,S.attr,t,e,1<arguments.length)},removeAttr:function(t){return this.each(function(){S.removeAttr(this,t)})}}),S.extend({attr:function(t,e,i){var n,r,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===t.getAttribute?S.prop(t,e,i):(1===o&&S.isXMLDoc(t)||(r=S.attrHooks[e.toLowerCase()]||(S.expr.match.bool.test(e)?pe:void 0)),void 0!==i?null===i?void S.removeAttr(t,e):r&&"set" in r&&void 0!==(n=r.set(t,i,e))?n:(t.setAttribute(e,i+""),i):!(r&&"get" in r&&null!==(n=r.get(t,e)))&&null==(n=S.find.attr(t,e))?void 0:n)},attrHooks:{type:{set:function(t,e){if(!y.radioValue&&"radio"===e&&k(t,"input")){var i=t.value;return t.setAttribute("type",e),i&&(t.value=i),e}}}},removeAttr:function(t,e){var i,n=0,r=e&&e.match(L);if(r&&1===t.nodeType)
for(;i=r[n++];)t.removeAttribute(i)}}),pe={set:function(t,e,i){return!1===e?S.removeAttr(t,i):t.setAttribute(i,i),i}},S.each(S.expr.match.bool.source.match(/\w+/g),function(t,e){var s=ge[e]||S.find.attr;ge[e]=function(t,e,i){var n,r,o=e.toLowerCase();return i||(r=ge[o],ge[o]=n,n=null!=s(t,e,i)?o:null,ge[o]=r),n}});var me=/^(?:input|select|textarea|button)$/i,ve=/^(?:a|area)$/i;function ye(t){return(t.match(L)||[]).join(" ")}
function _e(t){return t.getAttribute&&t.getAttribute("class")||""}
function be(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(L)||[]}
S.fn.extend({prop:function(t,e){return H(this,S.prop,t,e,1<arguments.length)},removeProp:function(t){return this.each(function(){delete this[S.propFix[t]||t]})}}),S.extend({prop:function(t,e,i){var n,r,o=t.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(t)||(e=S.propFix[e]||e,r=S.propHooks[e]),void 0!==i?r&&"set" in r&&void 0!==(n=r.set(t,i,e))?n:t[e]=i:r&&"get" in r&&null!==(n=r.get(t,e))?n:t[e]},propHooks:{tabIndex:{get:function(t){var e=S.find.attr(t,"tabindex");return e?parseInt(e,10):me.test(t.nodeName)||ve.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(S.propHooks.selected={get:function(t){t=t.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(t){t=t.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(e){var t,i,n,r,o,s,a=0;if(_(e))return this.each(function(t){S(this).addClass(e.call(this,t,_e(this)))});if((t=be(e)).length)
for(;i=this[a++];)
if(s=_e(i),n=1===i.nodeType&&" "+ye(s)+" "){for(o=0;r=t[o++];)n.indexOf(" "+r+" ")<0&&(n+=r+" ");s!==(s=ye(n))&&i.setAttribute("class",s)}return this},removeClass:function(e){var t,i,n,r,o,s,a=0;if(_(e))return this.each(function(t){S(this).removeClass(e.call(this,t,_e(this)))});if(!arguments.length)return this.attr("class","");if((t=be(e)).length)
for(;i=this[a++];)
if(s=_e(i),n=1===i.nodeType&&" "+ye(s)+" "){for(o=0;r=t[o++];)
for(;-1<n.indexOf(" "+r+" ");)n=n.replace(" "+r+" "," ");s!==(s=ye(n))&&i.setAttribute("class",s)}return this},toggleClass:function(r,e){var o=typeof r,s="string"==o||Array.isArray(r);return"boolean"==typeof e&&s?e?this.addClass(r):this.removeClass(r):_(r)?this.each(function(t){S(this).toggleClass(r.call(this,t,_e(this),e),e)}):this.each(function(){var t,e,i,n;if(s)
for(e=0,i=S(this),n=be(r);t=n[e++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==r&&"boolean"!=o||((t=_e(this))&&V.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",!t&&!1!==r&&V.get(this,"__className__")||""))})},hasClass:function(t){for(var e,i=0,n=" "+t+" ";e=this[i++];)
if(1===e.nodeType&&-1<(" "+ye(_e(e))+" ").indexOf(n))return!0;return!1}});var we=/\r/g;S.fn.extend({val:function(e){var i,t,n,r=this[0];return arguments.length?(n=_(e),this.each(function(t){1===this.nodeType&&(null==(t=n?e.call(this,t,S(this).val()):e)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(t){return null==t?"":t+""})),(i=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set" in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):r?(i=S.valHooks[r.type]||S.valHooks[r.nodeName.toLowerCase()])&&"get" in i&&void 0!==(t=i.get(r,"value"))?t:"string"==typeof(t=r.value)?t.replace(we,""):null==t?"":t:void 0}}),S.extend({valHooks:{option:{get:function(t){var e=S.find.attr(t,"value");return null!=e?e:ye(S.text(t))}},select:{get:function(t){for(var e,i=t.options,n=t.selectedIndex,r="select-one"===t.type,o=r?null:[],s=r?n+1:i.length,a=n<0?s:r?n:0;a<s;a++)
if(((e=i[a]).selected||a===n)&&!e.disabled&&(!e.parentNode.disabled||!k(e.parentNode,"optgroup"))){if(e=S(e).val(),r)return e;o.push(e)}return o},set:function(t,e){for(var i,n,r=t.options,o=S.makeArray(e),s=r.length;s--;)((n=r[s]).selected=-1<S.inArray(S.valHooks.option.get(n),o))&&(i=!0);return i||(t.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=-1<S.inArray(S(t).val(),e)}},y.checkOn||(S.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),y.focusin="onfocusin" in x;function xe(t){t.stopPropagation()}
var Te=/^(?:focusinfocus|focusoutblur)$/;S.extend(S.event,{trigger:function(t,e,i,n){var r,o,s,a,l,u,c,h=[i||T],d=v.call(t,"type")?t.type:t,f=v.call(t,"namespace")?t.namespace.split("."):[],p=c=o=i=i||T;if(3!==i.nodeType&&8!==i.nodeType&&!Te.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(f=d.split(".")).shift(),f.sort()),a=d.indexOf(":")<0&&"on"+d,(t=t[S.expando]?t:new S.Event(d,"object"==typeof t&&t)).isTrigger=n?2:3,t.namespace=f.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),e=null==e?[t]:S.makeArray(e,[t]),u=S.event.special[d]||{},n||!u.trigger||!1!==u.trigger.apply(i,e))){if(!n&&!u.noBubble&&!g(i)){for(s=u.delegateType||d,Te.test(s+d)||(p=p.parentNode);p;p=p.parentNode)h.push(p),o=p;o===(i.ownerDocument||T)&&h.push(o.defaultView||o.parentWindow||x)}
for(r=0;(p=h[r++])&&!t.isPropagationStopped();)c=p,t.type=1<r?s:u.bindType||d,(l=(V.get(p,"events")||{})[t.type]&&V.get(p,"handle"))&&l.apply(p,e),(l=a&&p[a])&&l.apply&&G(p)&&(t.result=l.apply(p,e),!1===t.result&&t.preventDefault());return t.type=d,n||t.isDefaultPrevented()||u._default&&!1!==u._default.apply(h.pop(),e)||!G(i)||a&&_(i[d])&&!g(i)&&((o=i[a])&&(i[a]=null),S.event.triggered=d,t.isPropagationStopped()&&c.addEventListener(d,xe),i[d](),t.isPropagationStopped()&&c.removeEventListener(d,xe),S.event.triggered=void 0,o&&(i[a]=o)),t.result}},simulate:function(t,e,i){t=S.extend(new S.Event,i,{type:t,isSimulated:!0});S.event.trigger(t,null,e)}}),S.fn.extend({trigger:function(t,e){return this.each(function(){S.event.trigger(t,e,this)})},triggerHandler:function(t,e){var i=this[0];if(i)return S.event.trigger(t,e,i,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(i,n){function r(t){S.event.simulate(n,t.target,S.event.fix(t))}
S.event.special[n]={setup:function(){var t=this.ownerDocument||this,e=V.access(t,n);e||t.addEventListener(i,r,!0),V.access(t,n,(e||0)+1)},teardown:function(){var t=this.ownerDocument||this,e=V.access(t,n)-1;e?V.access(t,n,e):(t.removeEventListener(i,r,!0),V.remove(t,n))}}});var Se=x.location,Ce=Date.now(),Ee=/\?/;S.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;try{e=(new x.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}
return e&&!e.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+t),e};var ke=/\[\]$/,Pe=/\r?\n/g,Oe=/^(?:submit|button|image|reset|file)$/i,Me=/^(?:input|select|textarea|keygen)/i;S.param=function(t,e){function i(t,e){e=_(e)?e():e,r[r.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==e?"":e)}
var n,r=[];if(Array.isArray(t)||t.jquery&&!S.isPlainObject(t))S.each(t,function(){i(this.name,this.value)});else for(n in t)!function i(n,t,r,o){if(Array.isArray(t))S.each(t,function(t,e){r||ke.test(n)?o(n,e):i(n+"["+("object"==typeof e&&null!=e?t:"")+"]",e,r,o)});else if(r||"object"!==p(t))o(n,t);else for(var e in t)i(n+"["+e+"]",t[e],r,o)}(n,t[n],e,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=S.prop(this,"elements");return t?S.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!S(this).is(":disabled")&&Me.test(this.nodeName)&&!Oe.test(t)&&(this.checked||!lt.test(t))}).map(function(t,e){var i=S(this).val();return null==i?null:Array.isArray(i)?S.map(i,function(t){return{name:e.name,value:t.replace(Pe,"\r\n")}}):{name:e.name,value:i.replace(Pe,"\r\n")}}).get()}});var Ae=/%20/g,De=/#.*$/,Re=/([?&])_=[^&]*/,Ie=/^(.*?):[ \t]*([^\r\n]*)$/gm,Le=/^(?:GET|HEAD)$/,je=/^\/\//,Fe={},Ne={},ze="*/".concat("*"),Be=T.createElement("a");function $e(o){return function(t,e){"string"!=typeof t&&(e=t,t="*");var i,n=0,r=t.toLowerCase().match(L)||[];if(_(e))
for(;i=r[n++];)"+"===i[0]?(i=i.slice(1)||"*",(o[i]=o[i]||[]).unshift(e)):(o[i]=o[i]||[]).push(e)}}
function He(e,n,r,o){var s={},a=e===Ne;function l(t){var i;return s[t]=!0,S.each(e[t]||[],function(t,e){e=e(n,r,o);return"string"!=typeof e||a||s[e]?a?!(i=e):void 0:(n.dataTypes.unshift(e),l(e),!1)}),i}
return l(n.dataTypes[0])||!s["*"]&&l("*")}
function Ue(t,e){var i,n,r=S.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((r[i]?t:n=n||{})[i]=e[i]);return n&&S.extend(!0,t,n),t}
Be.href=Se.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Se.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Se.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ze,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?Ue(Ue(t,S.ajaxSettings),e):Ue(S.ajaxSettings,t)},ajaxPrefilter:$e(Fe),ajaxTransport:$e(Ne),ajax:function(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var l,u,c,i,h,n,d,f,r,p=S.ajaxSetup({},e),g=p.context||p,m=p.context&&(g.nodeType||g.jquery)?S(g):S.event,v=S.Deferred(),y=S.Callbacks("once memory"),_=p.statusCode||{},o={},s={},a="canceled",b={readyState:0,getResponseHeader:function(t){var e;if(d){if(!i)
for(i={};e=Ie.exec(c);)i[e[1].toLowerCase()]=e[2];e=i[t.toLowerCase()]}
return null==e?null:e},getAllResponseHeaders:function(){return d?c:null},setRequestHeader:function(t,e){return null==d&&(t=s[t.toLowerCase()]=s[t.toLowerCase()]||t,o[t]=e),this},overrideMimeType:function(t){return null==d&&(p.mimeType=t),this},statusCode:function(t){if(t)
if(d)b.always(t[b.status]);else for(var e in t)_[e]=[_[e],t[e]];return this},abort:function(t){t=t||a;return l&&l.abort(t),w(0,t),this}};if(v.promise(b),p.url=((t||p.url||Se.href)+"").replace(je,Se.protocol+"//"),p.type=e.method||e.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(L)||[""],null==p.crossDomain){n=T.createElement("a");try{n.href=p.url,n.href=n.href,p.crossDomain=Be.protocol+"//"+Be.host!=n.protocol+"//"+n.host}catch(t){p.crossDomain=!0}}
if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=S.param(p.data,p.traditional)),He(Fe,p,e,b),d)return b;for(r in(f=S.event&&p.global)&&0==S.active++&&S.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Le.test(p.type),u=p.url.replace(De,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Ae,"+")):(t=p.url.slice(u.length),p.data&&(p.processData||"string"==typeof p.data)&&(u+=(Ee.test(u)?"&":"?")+p.data,delete p.data),!1===p.cache&&(u=u.replace(Re,"$1"),t=(Ee.test(u)?"&":"?")+"_="+Ce++ +t),p.url=u+t),p.ifModified&&(S.lastModified[u]&&b.setRequestHeader("If-Modified-Since",S.lastModified[u]),S.etag[u]&&b.setRequestHeader("If-None-Match",S.etag[u])),(p.data&&p.hasContent&&!1!==p.contentType||e.contentType)&&b.setRequestHeader("Content-Type",p.contentType),b.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+ze+"; q=0.01":""):p.accepts["*"]),p.headers)b.setRequestHeader(r,p.headers[r]);if(p.beforeSend&&(!1===p.beforeSend.call(g,b,p)||d))return b.abort();if(a="abort",y.add(p.complete),b.done(p.success),b.fail(p.error),l=He(Ne,p,e,b)){if(b.readyState=1,f&&m.trigger("ajaxSend",[b,p]),d)return b;p.async&&0<p.timeout&&(h=x.setTimeout(function(){b.abort("timeout")},p.timeout));try{d=!1,l.send(o,w)}catch(t){if(d)throw t;w(-1,t)}}else w(-1,"No Transport");function w(t,e,i,n){var r,o,s,a=e;d||(d=!0,h&&x.clearTimeout(h),l=void 0,c=n||"",b.readyState=0<t?4:0,n=200<=t&&t<300||304===t,i&&(s=function(t,e,i){for(var n,r,o,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===n&&(n=t.mimeType||e.getResponseHeader("Content-Type"));if(n)
for(r in a)
if(a[r]&&a[r].test(n)){l.unshift(r);break}if(l[0]in i)o=l[0];else{for(r in i){if(!l[0]||t.converters[r+" "+l[0]]){o=r;break}
s=s||r}
o=o||s}
if(o)return o!==l[0]&&l.unshift(o),i[o]}(p,b,i)),s=function(t,e,i,n){var r,o,s,a,l,u={},c=t.dataTypes.slice();if(c[1])
for(s in t.converters)u[s.toLowerCase()]=t.converters[s];for(o=c.shift();o;)
if(t.responseFields[o]&&(i[t.responseFields[o]]=e),!l&&n&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=o,o=c.shift())
if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(s=u[l+" "+o]||u["* "+o]))
for(r in u)
if((a=r.split(" "))[1]===o&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[r]:!0!==u[r]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)
if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+o}}}
return{state:"success",data:e}}(p,s,b,n),n?(p.ifModified&&((i=b.getResponseHeader("Last-Modified"))&&(S.lastModified[u]=i),(i=b.getResponseHeader("etag"))&&(S.etag[u]=i)),204===t||"HEAD"===p.type?a="nocontent":304===t?a="notmodified":(a=s.state,r=s.data,n=!(o=s.error))):(o=a,!t&&a||(a="error",t<0&&(t=0))),b.status=t,b.statusText=(e||a)+"",n?v.resolveWith(g,[r,a,b]):v.rejectWith(g,[b,a,o]),b.statusCode(_),_=void 0,f&&m.trigger(n?"ajaxSuccess":"ajaxError",[b,p,n?r:o]),y.fireWith(g,[b,a]),f&&(m.trigger("ajaxComplete",[b,p]),--S.active||S.event.trigger("ajaxStop")))}
return b},getJSON:function(t,e,i){return S.get(t,e,i,"json")},getScript:function(t,e){return S.get(t,void 0,e,"script")}}),S.each(["get","post"],function(t,r){S[r]=function(t,e,i,n){return _(e)&&(n=n||i,i=e,e=void 0),S.ajax(S.extend({url:t,type:r,dataType:n,data:e,success:i},S.isPlainObject(t)&&t))}}),S._evalUrl=function(t){return S.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},S.fn.extend({wrapAll:function(t){return this[0]&&(_(t)&&(t=t.call(this[0])),t=S(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(i){return _(i)?this.each(function(t){S(this).wrapInner(i.call(this,t))}):this.each(function(){var t=S(this),e=t.contents();e.length?e.wrapAll(i):t.append(i)})},wrap:function(e){var i=_(e);return this.each(function(t){S(this).wrapAll(i?e.call(this,t):e)})},unwrap:function(t){return this.parent(t).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(t){return!S.expr.pseudos.visible(t)},S.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new x.XMLHttpRequest}catch(t){}};var We={0:200,1223:204},Xe=S.ajaxSettings.xhr();y.cors=!!Xe&&"withCredentials" in Xe,y.ajax=Xe=!!Xe,S.ajaxTransport(function(r){var o,s;if(y.cors||Xe&&!r.crossDomain)return{send:function(t,e){var i,n=r.xhr();if(n.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)
for(i in r.xhrFields)n[i]=r.xhrFields[i];for(i in r.mimeType&&n.overrideMimeType&&n.overrideMimeType(r.mimeType),r.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t)n.setRequestHeader(i,t[i]);o=function(t){return function(){o&&(o=s=n.onload=n.onerror=n.onabort=n.ontimeout=n.onreadystatechange=null,"abort"===t?n.abort():"error"===t?"number"!=typeof n.status?e(0,"error"):e(n.status,n.statusText):e(We[n.status]||n.status,n.statusText,"text"!==(n.responseType||"text")||"string"!=typeof n.responseText?{binary:n.response}:{text:n.responseText},n.getAllResponseHeaders()))}},n.onload=o(),s=n.onerror=n.ontimeout=o("error"),void 0!==n.onabort?n.onabort=s:n.onreadystatechange=function(){4===n.readyState&&x.setTimeout(function(){o&&s()})},o=o("abort");try{n.send(r.hasContent&&r.data||null)}catch(t){if(o)throw t}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return S.globalEval(t),t}}}),S.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),S.ajaxTransport("script",function(i){var n,r;if(i.crossDomain)return{send:function(t,e){n=S("<script>").prop({charset:i.scriptCharset,src:i.url}).on("load error",r=function(t){n.remove(),r=null,t&&e("error"===t.type?404:200,t.type)}),T.head.appendChild(n[0])},abort:function(){r&&r()}}});var qe=[],Ge=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=qe.pop()||S.expando+"_"+Ce++;return this[t]=!0,t}}),S.ajaxPrefilter("json jsonp",function(t,e,i){var n,r,o,s=!1!==t.jsonp&&(Ge.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ge.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return n=t.jsonpCallback=_(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ge,"$1"+n):!1!==t.jsonp&&(t.url+=(Ee.test(t.url)?"&":"?")+t.jsonp+"="+n),t.converters["script json"]=function(){return o||S.error(n+" was not called"),o[0]},t.dataTypes[0]="json",r=x[n],x[n]=function(){o=arguments},i.always(function(){void 0===r?S(x).removeProp(n):x[n]=r,t[n]&&(t.jsonpCallback=e.jsonpCallback,qe.push(n)),o&&_(r)&&r(o[0]),o=r=void 0}),"script"}),y.createHTMLDocument=((e=T.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===e.childNodes.length),S.parseHTML=function(t,e,i){return"string"!=typeof t?[]:("boolean"==typeof e&&(i=e,e=!1),e||(y.createHTMLDocument?((n=(e=T.implementation.createHTMLDocument("")).createElement("base")).href=T.location.href,e.head.appendChild(n)):e=T),n=!i&&[],(i=P.exec(t))?[e.createElement(i[1])]:(i=gt([t],e,n),n&&n.length&&S(n).remove(),S.merge([],i.childNodes)));var n},S.fn.load=function(t,e,i){var n,r,o,s=this,a=t.indexOf(" ");return-1<a&&(n=ye(t.slice(a)),t=t.slice(0,a)),_(e)?(i=e,e=void 0):e&&"object"==typeof e&&(r="POST"),0<s.length&&S.ajax({url:t,type:r||"GET",dataType:"html",data:e}).done(function(t){o=arguments,s.html(n?S("<div>").append(S.parseHTML(t)).find(n):t)}).always(i&&function(t,e){s.each(function(){i.apply(this,o||[t.responseText,e,t])})}),this},S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){S.fn[e]=function(t){return this.on(e,t)}}),S.expr.pseudos.animated=function(e){return S.grep(S.timers,function(t){return e===t.elem}).length},S.offset={setOffset:function(t,e,i){var n,r,o,s,a=S.css(t,"position"),l=S(t),u={};"static"===a&&(t.style.position="relative"),o=l.offset(),n=S.css(t,"top"),s=S.css(t,"left"),s=("absolute"===a||"fixed"===a)&&-1<(n+s).indexOf("auto")?(r=(a=l.position()).top,a.left):(r=parseFloat(n)||0,parseFloat(s)||0),_(e)&&(e=e.call(t,i,S.extend({},o))),null!=e.top&&(u.top=e.top-o.top+r),null!=e.left&&(u.left=e.left-o.left+s),"using" in e?e.using.call(t,u):l.css(u)}},S.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){S.offset.setOffset(this,e,t)});var t,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),i=i.ownerDocument.defaultView,{top:t.top+i.pageYOffset,left:t.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var t,e,i,n=this[0],r={top:0,left:0};if("fixed"===S.css(n,"position"))e=n.getBoundingClientRect();else{for(e=this.offset(),i=n.ownerDocument,t=n.offsetParent||i.documentElement;t&&(t===i.body||t===i.documentElement)&&"static"===S.css(t,"position");)t=t.parentNode;t&&t!==n&&1===t.nodeType&&((r=S(t).offset()).top+=S.css(t,"borderTopWidth",!0),r.left+=S.css(t,"borderLeftWidth",!0))}
return{top:e.top-r.top-S.css(n,"marginTop",!0),left:e.left-r.left-S.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===S.css(t,"position");)t=t.offsetParent;return t||mt})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,r){var o="pageYOffset"===r;S.fn[e]=function(t){return H(this,function(t,e,i){var n;return g(t)?n=t:9===t.nodeType&&(n=t.defaultView),void 0===i?n?n[r]:t[e]:void(n?n.scrollTo(o?n.pageXOffset:i,o?i:n.pageYOffset):t[e]=i)},e,t,arguments.length)}}),S.each(["top","left"],function(t,i){S.cssHooks[i]=Gt(y.pixelPosition,function(t,e){if(e)return e=qt(t,i),$t.test(e)?S(t).position()[i]+"px":e})}),S.each({Height:"height",Width:"width"},function(s,a){S.each({padding:"inner"+s,content:a,"":"outer"+s},function(n,o){S.fn[o]=function(t,e){var i=arguments.length&&(n||"boolean"!=typeof t),r=n||(!0===t||!0===e?"margin":"border");return H(this,function(t,e,i){var n;return g(t)?0===o.indexOf("outer")?t["inner"+s]:t.document.documentElement["client"+s]:9===t.nodeType?(n=t.documentElement,Math.max(t.body["scroll"+s],n["scroll"+s],t.body["offset"+s],n["offset"+s],n["client"+s])):void 0===i?S.css(t,e,r):S.style(t,e,i,r)},a,i?t:void 0,i)}})}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,i){S.fn[i]=function(t,e){return 0<arguments.length?this.on(i,null,t,e):this.trigger(i)}}),S.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),S.fn.extend({bind:function(t,e,i){return this.on(t,null,e,i)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,i,n){return this.on(e,t,i,n)},undelegate:function(t,e,i){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",i)}}),S.proxy=function(t,e){var i,n;if("string"==typeof e&&(n=t[e],e=t,t=n),_(t))return i=a.call(arguments,2),(n=function(){return t.apply(e||this,i.concat(a.call(arguments)))}).guid=t.guid=t.guid||S.guid++,n},S.holdReady=function(t){t?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=k,S.isFunction=_,S.isWindow=g,S.camelCase=q,S.type=p,S.now=Date.now,S.isNumeric=function(t){var e=S.type(t);return("number"===e||"string"===e)&&!isNaN(t-parseFloat(t))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Ye=x.jQuery,Ve=x.$;return S.noConflict=function(t){return x.$===S&&(x.$=Ve),t&&x.jQuery===S&&(x.jQuery=Ye),S},t||(x.jQuery=x.$=S),S}),

/* AOS */
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AOS = e() : t.AOS = e()
}(this, function() {
    return r = {}, i.m = n = [function(t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r() {
            if (0 < arguments.length && void 0 !== arguments[0] && arguments[0] && (m = !0), m) return g = (0, f.default)(g, y), (0, d.default)(g, y.once), g
        }

        function o() {
            g = (0, p.default)(), r()
        }
        var s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i, n = arguments[e];
                    for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            },
            a = (n(i(1)), i(6)),
            l = n(a),
            u = n(i(7)),
            c = n(i(8)),
            h = n(i(9)),
            d = n(i(10)),
            f = n(i(11)),
            p = n(i(14)),
            g = [],
            m = !1,
            v = document.all && !window.atob,
            y = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            };
        t.exports = {
            init: function(t) {
                return y = s(y, t), g = (0, p.default)(), !0 === (t = y.disable) || "mobile" === t && h.default.mobile() || "phone" === t && h.default.phone() || "tablet" === t && h.default.tablet() || "function" == typeof t && !0 === t() || v ? void g.forEach(function(t, e) {
                    t.node.removeAttribute("data-aos"), t.node.removeAttribute("data-aos-easing"), t.node.removeAttribute("data-aos-duration"), t.node.removeAttribute("data-aos-delay")
                }) : (document.querySelector("body").setAttribute("data-aos-easing", y.easing), document.querySelector("body").setAttribute("data-aos-duration", y.duration), document.querySelector("body").setAttribute("data-aos-delay", y.delay), "DOMContentLoaded" === y.startEvent && -1 < ["complete", "interactive"].indexOf(document.readyState) ? r(!0) : ("load" === y.startEvent ? window : document).addEventListener(y.startEvent, function() {
                    r(!0)
                }), window.addEventListener("resize", (0, u.default)(r, y.debounceDelay, !0)), window.addEventListener("orientationchange", (0, u.default)(r, y.debounceDelay, !0)), window.addEventListener("scroll", (0, l.default)(function() {
                    (0, d.default)(g, y.once)
                }, y.throttleDelay)), y.disableMutationObserver || (0, c.default)("[data-aos]", o), g)
            },
            refresh: r,
            refreshHard: o
        }
    }, function(t, e) {}, , , , , function(p, t) {
        (function(t) {
            "use strict";

            function o(n, i, t) {
                function r(t) {
                    var e = l,
                        i = u;
                    return l = u = void 0, p = t, h = n.apply(i, e)
                }

                function o(t) {
                    var e = t - f;
                    return void 0 === f || i <= e || e < 0 || m && c <= t - p
                }

                function s() {
                    var t, e = T();
                    return o(e) ? a(e) : void(d = setTimeout(s, (e = i - ((t = e) - f), m ? x(e, c - (t - p)) : e)))
                }

                function a(t) {
                    return d = void 0, v && l ? r(t) : (l = u = void 0, h)
                }

                function e() {
                    var t = T(),
                        e = o(t);
                    if (l = arguments, u = this, f = t, e) {
                        if (void 0 === d) return p = e = f, d = setTimeout(s, i), g ? r(e) : h;
                        if (m) return d = setTimeout(s, i), r(f)
                    }
                    return void 0 === d && (d = setTimeout(s, i)), h
                }
                var l, u, c, h, d, f, p = 0,
                    g = !1,
                    m = !1,
                    v = !0;
                if ("function" != typeof n) throw new TypeError(b);
                return i = _(i) || 0, y(t) && (g = !!t.leading, m = "maxWait" in t, c = m ? w(_(t.maxWait) || 0, i) : c, v = "trailing" in t ? !!t.trailing : v), e.cancel = function() {
                    void 0 !== d && clearTimeout(d), l = f = u = d = void(p = 0)
                }, e.flush = function() {
                    return void 0 === d ? h : a(T())
                }, e
            }

            function y(t) {
                var e = void 0 === t ? "undefined" : n(t);
                return t && ("object" == e || "function" == e)
            }

            function i(t) {
                return "symbol" == (void 0 === t ? "undefined" : n(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : n(e)) && f.call(t) == s;
                var e
            }

            function _(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return r;
                if (y(t) && (t = y(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e), "string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(a, "");
                var e = u.test(t);
                return e || c.test(t) ? h(t.slice(2), e ? 2 : 8) : l.test(t) ? r : +t
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                b = "Expected a function",
                r = NaN,
                s = "[object Symbol]",
                a = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                h = parseInt,
                e = "object" == (void 0 === t ? "undefined" : n(t)) && t && t.Object === Object && t,
                t = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                d = e || t || Function("return this")(),
                f = Object.prototype.toString,
                w = Math.max,
                x = Math.min,
                T = function() {
                    return d.Date.now()
                };
            p.exports = function(t, e, i) {
                var n = !0,
                    r = !0;
                if ("function" != typeof t) throw new TypeError(b);
                return y(i) && (n = "leading" in i ? !!i.leading : n, r = "trailing" in i ? !!i.trailing : r), o(t, e, {
                    leading: n,
                    maxWait: e,
                    trailing: r
                })
            }
        }).call(t, function() {
            return this
        }())
    }, function(f, t) {
        (function(t) {
            "use strict";

            function y(t) {
                var e = void 0 === t ? "undefined" : n(t);
                return t && ("object" == e || "function" == e)
            }

            function i(t) {
                return "symbol" == (void 0 === t ? "undefined" : n(t)) || !!(e = t) && "object" == (void 0 === e ? "undefined" : n(e)) && d.call(t) == o;
                var e
            }

            function _(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return r;
                if (y(t) && (t = y(e = "function" == typeof t.valueOf ? t.valueOf() : t) ? e + "" : e), "string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(s, "");
                var e = l.test(t);
                return e || u.test(t) ? c(t.slice(2), e ? 2 : 8) : a.test(t) ? r : +t
            }

            function b() {
                return h.Date.now()
            }
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                r = NaN,
                o = "[object Symbol]",
                s = /^\s+|\s+$/g,
                a = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                c = parseInt,
                e = "object" == (void 0 === t ? "undefined" : n(t)) && t && t.Object === Object && t,
                t = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                h = e || t || Function("return this")(),
                d = Object.prototype.toString,
                w = Math.max,
                x = Math.min;
            f.exports = function(n, i, t) {
                function r(t) {
                    var e = l,
                        i = u;
                    return l = u = void 0, p = t, h = n.apply(i, e)
                }

                function o(t) {
                    var e = t - f;
                    return void 0 === f || i <= e || e < 0 || m && c <= t - p
                }

                function s() {
                    var t, e = b();
                    return o(e) ? a(e) : void(d = setTimeout(s, (e = i - ((t = e) - f), m ? x(e, c - (t - p)) : e)))
                }

                function a(t) {
                    return d = void 0, v && l ? r(t) : (l = u = void 0, h)
                }

                function e() {
                    var t = b(),
                        e = o(t);
                    if (l = arguments, u = this, f = t, e) {
                        if (void 0 === d) return p = e = f, d = setTimeout(s, i), g ? r(e) : h;
                        if (m) return d = setTimeout(s, i), r(f)
                    }
                    return void 0 === d && (d = setTimeout(s, i)), h
                }
                var l, u, c, h, d, f, p = 0,
                    g = !1,
                    m = !1,
                    v = !0;
                if ("function" != typeof n) throw new TypeError("Expected a function");
                return i = _(i) || 0, y(t) && (g = !!t.leading, m = "maxWait" in t, c = m ? w(_(t.maxWait) || 0, i) : c, v = "trailing" in t ? !!t.trailing : v), e.cancel = function() {
                    void 0 !== d && clearTimeout(d), l = f = u = d = void(p = 0)
                }, e.flush = function() {
                    return void 0 === d ? h : a(b())
                }, e
            }
        }).call(t, function() {
            return this
        }())
    }, function(t, e) {
        "use strict";

        function n(t) {
            t && t.forEach(function(t) {
                var e = Array.prototype.slice.call(t.addedNodes),
                    t = Array.prototype.slice.call(t.removedNodes);
                e.concat(t).filter(function(t) {
                    return t.hasAttribute && t.hasAttribute("data-aos")
                }).length && s()
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = window.document,
            o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            s = function() {};
        e.default = function(t, e) {
            var i = new o(n);
            s = e, i.observe(r.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }
    }, function(t, e) {
        "use strict";

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            o = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            s = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            a = (function(t, e, i) {
                return e && u(t.prototype, e), i && u(t, i), t
            }(l, [{
                key: "phone",
                value: function() {
                    var t = i();
                    return !(!n.test(t) && !r.test(t.substr(0, 4)))
                }
            }, {
                key: "mobile",
                value: function() {
                    var t = i();
                    return !(!o.test(t) && !s.test(t.substr(0, 4)))
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]), l);

        function l() {
            ! function(t) {
                if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function")
            }(this)
        }

        function u(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        e.default = new a
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t, o) {
            var s = window.pageYOffset,
                a = window.innerHeight;
            t.forEach(function(t, e) {
                var i, n, r;
                n = a + s, r = o, t = (i = t).node.getAttribute("data-aos-once"), n > i.position ? i.node.classList.add("aos-animate") : void 0 === t || "false" !== t && (r || "true" === t) || i.node.classList.remove("aos-animate")
            })
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, r = i(12),
            o = (n = r) && n.__esModule ? n : {
                default: n
            };
        e.default = function(t, i) {
            return t.forEach(function(t, e) {
                t.node.classList.add("aos-init"), t.position = (0, o.default)(t.node, i.offset)
            }), t
        }
    }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n, r = i(13),
            s = (n = r) && n.__esModule ? n : {
                default: n
            };
        e.default = function(t, e) {
            var i = 0,
                n = 0,
                r = window.innerHeight,
                o = {
                    offset: t.getAttribute("data-aos-offset"),
                    anchor: t.getAttribute("data-aos-anchor"),
                    anchorPlacement: t.getAttribute("data-aos-anchor-placement")
                };
            switch (o.offset && !isNaN(o.offset) && (n = parseInt(o.offset)), o.anchor && document.querySelectorAll(o.anchor) && (t = document.querySelectorAll(o.anchor)[0]), i = (0, s.default)(t).top, o.anchorPlacement) {
                case "top-bottom":
                    break;
                case "center-bottom":
                    i += t.offsetHeight / 2;
                    break;
                case "bottom-bottom":
                    i += t.offsetHeight;
                    break;
                case "top-center":
                    i += r / 2;
                    break;
                case "bottom-center":
                    i += r / 2 + t.offsetHeight;
                    break;
                case "center-center":
                    i += r / 2 + t.offsetHeight / 2;
                    break;
                case "top-top":
                    i += r;
                    break;
                case "bottom-top":
                    i += t.offsetHeight + r;
                    break;
                case "center-top":
                    i += t.offsetHeight / 2 + r
            }
            return o.anchorPlacement || o.offset || isNaN(e) || (n = e), i + n
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t) {
            for (var e = 0, i = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0), i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0), t = t.offsetParent;
            return {
                top: i,
                left: e
            }
        }
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.default = function(t) {
            return t = t || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(t, function(t) {
                return {
                    node: t
                }
            })
        }
    }], i.c = r, i.p = "dist/", i(0);

    function i(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return n[t].call(e.exports, e, e.exports, i), e.loaded = !0, e.exports
    }
    var n, r
}), 

/* Rellax JS */
function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Rellax = e()
}(this, function() {
    var d = function(t, e) {
        var a = Object.create(d.prototype),
            i = 0,
            l = 0,
            n = [],
            r = !1,
            o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                setTimeout(t, 1e3 / 60)
            };
        if (a.options = {
                speed: -2,
                center: !1
            }, e && Object.keys(e).forEach(function(t) {
                a.options[t] = e[t]
            }), a.options.speed < -10 ? a.options.speed = -10 : 10 < a.options.speed && (a.options.speed = 10), t = t || ".rellax", document.getElementsByClassName(t.replace(".", ""))) a.elems = document.getElementsByClassName(t.replace(".", ""));
        else {
            if (!1 === document.querySelector(t)) throw Error("The elements you're trying to select don't exist.");
            a.elems = querySelector(t)
        }

        function s() {
            return i != (i = void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop)
        }
        var u = function(t, e) {
                return t < -e ? -e : e < t ? e : t
            },
            c = function() {
                s() && !1 === r && h(), o(c)
            },
            h = function() {
                for (var t = 0; t < a.elems.length; t++) {
                    var e = " translate3d(0," + (Math.round(100 * n[t].speed * (1 - (i - n[t].top + l) / (n[t].height + l))) - n[t].base) + "px,0)" + n[t].transform;
                    a.elems[t].style.cssText = n[t].style + "-webkit-transform:" + e + ";-moz-transform:" + e + ";transform:" + e + ";"
                }
            };
        return a.destroy = function() {
                for (var t = 0; t < a.elems.length; t++) a.elems[t].style.cssText = n[t].style;
                r = !0
            },
            function() {
                l = window.innerHeight, s();
                for (var t = 0; t < a.elems.length; t++) {
                    var e = function(t) {
                        var e = t.getAttribute("data-rellax-percentage") || a.options.center ? document.body.scrollTop : 0,
                            i = e + t.getBoundingClientRect().top,
                            n = t.clientHeight || t.offsetHeight || t.scrollHeight,
                            r = t.getAttribute("data-rellax-percentage") ? t.getAttribute("data-rellax-percentage") : (e - i + l) / (n + l);
                        a.options.center && (r = .5), e = t.getAttribute("data-rellax-speed") ? u(t.getAttribute("data-rellax-speed"), 10) : a.options.speed, (t.getAttribute("data-rellax-percentage") || a.options.center) && (e = t.getAttribute("data-rellax-speed") ? u(t.getAttribute("data-rellax-speed"), 5) : u(a.options.speed, 5)), r = Math.round(100 * e * (1 - r));
                        var o, s = "";
                        return 0 <= (t = t.style.cssText).indexOf("transform") && (s = t.indexOf("transform"), s = (o = (s = t.slice(s)).indexOf(";")) ? " " + s.slice(11, o).replace(/\s/g, "") : " " + s.slice(11).replace(/\s/g, "")), {
                            base: r,
                            top: i,
                            height: n,
                            speed: e,
                            style: t,
                            transform: s
                        }
                    }(a.elems[t]);
                    n.push(e)
                }
                window.addEventListener("resize", function() {
                    h()
                }), c(), h()
            }(), a
    };
    return d
});