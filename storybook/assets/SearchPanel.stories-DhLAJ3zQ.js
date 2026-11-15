import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{f as n}from"./iframe-Da1Mdnj9.js";import{t as r}from"./jsx-runtime-MKhVqBIO.js";var i,a,o,s,c;function l(){return(l=t((()=>{i={prefix:`fas`,iconName:`magnifying-glass`,icon:[512,512,[128269,`search`],`f002`,`M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z`]},a=i,o={prefix:`fas`,iconName:`spinner`,icon:[512,512,[],`f110`,`M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z`]},s={prefix:`fas`,iconName:`xmark`,icon:[384,512,[128473,10005,10006,10060,215,`close`,`multiply`,`remove`,`times`],`f00d`,`M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z`]},c=s})))()}function u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function d(e){if(Array.isArray(e))return e}function f(e){if(Array.isArray(e))return u(e)}function p(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,w(r.key),r)}}function h(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=re(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function _(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function y(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ee(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?b(Object(n),!0).forEach(function(t){_(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function S(e,t){return d(e)||y(e,t)||re(e,t)||ee()}function C(e){return f(e)||v(e)||re(e)||te()}function ne(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function w(e){var t=ne(e,`string`);return typeof t==`symbol`?t:t+``}function T(e){"@babel/helpers - typeof";return T=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},T(e)}function re(e,t){if(e){if(typeof e==`string`)return u(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function E(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[F]}})}function ie(e){var t=N.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function D(e){return e===``?!0:e===`false`?!1:e===`true`||e}function ae(e){return Lr.push(e),function(){Lr.splice(Lr.indexOf(e),1)}}function oe(e){if(e&&P){var t=N.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=N.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return N.head.insertBefore(t,r),e}}function se(){for(var e=12,t=``;e-->0;)t+=Rr[Math.random()*62|0];return t}function O(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ce(e){return e.classList?O(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function le(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ue(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${le(e[n])}" `},``).trim()}function de(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function fe(e){return e.size!==B.size||e.x!==B.x||e.y!==B.y||e.rotate!==B.rotate||e.flipX||e.flipY}function pe(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function me(e){var t=e.transform,n=e.width,r=n===void 0?lr:n,i=e.height,a=i===void 0?lr:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&Rt?`translate(${t.x/z-r/2}em, ${t.y/z-a/2}em) `:s?`translate(calc(-50% + ${t.x/z}em), calc(-50% + ${t.y/z}em)) `:`translate(${t.x/z}em, ${t.y/z}em) `,c+=`scale(${t.size/z*(t.flipX?-1:1)}, ${t.size/z*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}function he(){var e=ur,t=dr,n=R.cssPrefix,r=R.replacementClass,i=zr;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}function ge(){R.autoAddCss&&!Br&&(oe(he()),Br=!0)}function _e(e){P&&(Wr?setTimeout(e,0):Hr.push(e))}function ve(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?le(e):`<${t} ${ue(r)}>${a.map(ve).join(``)}</${t}>`}function ye(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function be(e){return C(e).length===1?e.codePointAt(0).toString(16):null}function xe(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Se(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=xe(t);typeof H.hooks.addPack==`function`&&!r?H.hooks.addPack(e,xe(t)):H.styles[e]=x(x({},H.styles[e]||{}),i),e===`fas`&&Se(`fa`,t)}function Ce(e){return~Nr.indexOf(e)}function we(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Ce(i)?i:null}function Te(e,t){return(Qr[e]||{})[t]}function Ee(e,t){return($r[e]||{})[t]}function k(e,t){return(ni[e]||{})[t]}function De(e){return ei[e]||{prefix:null,iconName:null}}function Oe(e){var t=ti[e],n=Te(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function A(){return Zr}function ke(e){var t=F,n=Yr.reduce(function(e,t){return e[t]=`${R.cssPrefix}-${t}`,e},{});return zn.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Xr[r].includes(e)}))&&(t=r)}),t}function Ae(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?F:t,r=Sr[n][e];if(n===Gt&&!e)return`fad`;var i=wr[n][e]||wr[n][r],a=e in H.styles?e:null;return i||a||null}function je(e){var t=[],n=null;return e.forEach(function(e){var r=we(R.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Me(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}function Ne(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Me(e.filter(function(e){return ai.includes(e)})),a=Me(e.filter(function(e){return!ai.includes(e)})),o=S(i.filter(function(e){return r=e,!Wt.includes(e)}),1)[0],s=o===void 0?null:o,c=ke(i),l=x(x({},je(a)),{},{prefix:Ae(s,{family:c})});return x(x(x({},l),Fe({values:e,family:c,styles:qr,config:R,canonical:l,givenPrefix:r})),Pe(n,r,l))}function Pe(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?De(i):{},o=k(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!qr.far&&qr.fas&&!R.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}function Fe(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Gt,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&oi.includes(n)&&(Object.keys(s).find(function(e){return si.includes(e)})||l.autoFetchSvg)&&(r.prefix=Hn.get(n).defaultShortPrefixId,r.iconName=k(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=A()||`fas`),r}function Ie(e,t){var n=t.mixoutsTo;return li=e,ui={},Object.keys(di).forEach(function(e){fi.indexOf(e)===-1&&delete di[e]}),li.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),T(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){ui[e]||(ui[e]=[]),ui[e].push(r[e])})}e.provides&&e.provides(di)}),n}function Le(e,t){var n=[...arguments].slice(2);return(ui[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Re(e){var t=[...arguments].slice(1);(ui[e]||[]).forEach(function(e){e.apply(null,t)})}function j(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return di[e]?di[e].apply(null,t):void 0}function ze(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||A();if(t)return t=k(n,t)||t,ye(pi.definitions,n,t)||ye(H.styles,n,t)}function Be(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return ve(e)})}}),Object.defineProperty(e,"node",{get:function(){if(P){var t=N.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Ve(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(fe(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=de(x(x({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function He(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${R.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:x(x({},i),{},{id:o}),children:r}]}]}function Ue(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function We(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[R.replacementClass,a?`${R.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:x(x({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Ue(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[L]=``);var _=x(x({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:x({},l.styles)}),v=r.found&&n.found?j(`generateAbstractMask`,_)||{children:[],attributes:{}}:j(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,ee=v.attributes;return _.children=y,_.attributes=ee,s?He(_):Ve(_)}function Ge(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=x(x({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[L]=``);var l=x({},a.styles);fe(i)&&(l.transform=me({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=de(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Ke(e){var t=e.content,n=e.extra,r=x(x({},n.attributes),{},{class:n.classes.join(` `)}),i=de(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}function qe(e){var t=e[0],n=e[1],r=S(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${R.cssPrefix}-${Mr.GROUP}`},children:[{tag:`path`,attributes:{class:`${R.cssPrefix}-${Mr.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${R.cssPrefix}-${Mr.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}function Je(e,t){!br&&!R.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Ye(e,t){var n=t;return t===`fa`&&R.styleDefault!==null&&(t=A()),new Promise(function(r,i){if(n===`fa`){var a=De(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&hi[t]&&hi[t][e]){var o=hi[t][e];return r(qe(o))}Je(e,t),r(x(x({},gi),{},{icon:R.showMissingIcons&&e&&j(`missingIconAbstract`)||{}}))})}function Xe(e){return typeof(e.getAttribute?e.getAttribute(L):null)==`string`}function Ze(e){var t=e.getAttribute?e.getAttribute(mr):null,n=e.getAttribute?e.getAttribute(hr):null;return t&&n}function Qe(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(R.replacementClass)}function $e(){return R.autoReplaceSvg===!0?wi.replace:wi[R.autoReplaceSvg]||wi.replace}function et(e){return N.createElementNS(`http://www.w3.org/2000/svg`,e)}function tt(e){return N.createElement(e)}function nt(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?et:tt:t;if(typeof e==`string`)return N.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(nt(e,{ceFn:n}))}),r}function rt(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}function it(e){e()}function at(e,t){var n=typeof t==`function`?t:Ci;if(e.length===0)n();else{var r=it;R.mutateApproach===_r&&(r=M.requestAnimationFrame||it),r(function(){var t=$e(),r=Si.begin(`mutate`);e.map(t),r(),n()})}}function ot(){Ti=!0}function st(){Ti=!1}function ct(e){if(It&&R.observeMutations){var t=e.treeCallback,n=t===void 0?Ci:t,r=e.nodeCallback,i=r===void 0?Ci:r,a=e.pseudoElementsCallback,o=a===void 0?Ci:a,s=e.observeMutationsRoot,c=s===void 0?N:s;Ei=new It(function(e){if(!Ti){var t=A();O(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Xe(e.addedNodes[0])&&(R.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&R.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Xe(e.target)&&~jr.indexOf(e.attributeName)){if(e.attributeName===`class`&&Ze(e.target)){var r=Ne(ce(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(mr,a||t),s&&e.target.setAttribute(hr,s)}else Qe(e.target)&&i(e.target)}})}}),P&&Ei.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lt(){Ei&&Ei.disconnect()}function ut(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function dt(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ne(ce(e));return i.prefix||=A(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Ee(i.prefix,e.innerText)||Te(i.prefix,be(e.innerText))),!i.iconName&&R.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function ft(e){return O(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function pt(){return{iconName:null,prefix:null,transform:B,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dt(e),r=n.iconName,i=n.prefix,a=n.rest,o=ft(e),s=Le(`parseNodeAttributes`,{},e);return x({iconName:r,prefix:i,transform:B,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ut(e):[],attributes:o}},s)}function ht(e){var t=R.autoReplaceSvg===`nest`?mt(e,{styleParser:!1}):mt(e);return~t.extra.classes.indexOf(kr)?j(`generateLayersText`,e,t):j(`generateSvgReplacementMutation`,e,t)}function gt(){return[].concat(C(Wn),C(rr))}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();var n=N.documentElement.classList,r=function(e){return n.add(`${gr}-${e}`)},i=function(e){return n.remove(`${gr}-${e}`)},a=R.autoFetchSvg?gt():Wt.concat(Object.keys(Di));a.includes(`fa`)||a.push(`fa`);var o=[`.${kr}:not([${L}])`].concat(a.map(function(e){return`.${e}:not([${L}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=O(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Si.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ht(t);n&&e.push(n)}catch(e){br||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){at(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function vt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ht(e).then(function(e){e&&at([e],t)})}function yt(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ze(t||{}),i=n.mask;return i&&=(i||{}).icon?i:ze(i||{}),e(r,x(x({},n),{},{mask:i}))}}function bt(e){return be(C(e.replace(Ni,``))[0]||``)}function xt(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Ni,``),r=n.codePointAt(0),i=r>=Pi[0]&&r<=Pi[1],a=n.length===2&&n[0]===n[1];return i||a||t}function St(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ii[n]||{})[i]||Li[n]}function Ct(e,t){var n=`${pr}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=O(e.children).filter(function(e){return e.getAttribute(fr)===t})[0],o=M.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ar),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=St(s,l),p=bt(d),m=c[0].startsWith(`FontAwesome`),h=xt(o),g=Te(f,p),_=g;if(m){var v=Oe(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(mr)!==f||a.getAttribute(hr)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=pt(),ee=y.extra;ee.attributes[fr]=t,Ye(g,f).then(function(i){var a=We(x(x({},y),{},{icons:{main:i,mask:ii()},prefix:f,iconName:_,extra:ee,watchable:!0})),o=N.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return ve(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function wt(e){return Promise.all([Ct(e,`::before`),Ct(e,`::after`)])}function Tt(e){return e.parentNode!==document.head&&!~vr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(fr)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(P){var n;if(t)n=e;else if(R.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=g(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=g(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=g(zi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){R.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=O(n).filter(Tt).map(wt),i=Si.begin(`searchPseudoElements`);ot(),Promise.all(r).then(function(){i(),st(),e()}).catch(function(){i(),st(),t()})})}}function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ot(e){return e.tag===`g`?e.children:[e]}var kt,At,jt,Mt,Nt,Pt,Ft,M,N,It,Lt,P,Rt,zt,Bt,Vt,Ht,Ut,Wt,F,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,I,lr,ur,dr,L,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,R,Lr,z,B,Rr,zr,Br,Vr,V,H,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,U,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji;function Yi(){return(Yi=t((()=>{kt=function(){},At={},jt={},Mt=null,Nt={mark:kt,measure:kt};try{typeof window<`u`&&(At=window),typeof document<`u`&&(jt=document),typeof MutationObserver<`u`&&(Mt=MutationObserver),typeof performance<`u`&&(Nt=performance)}catch{}Pt=(At.navigator||{}).userAgent,Ft=Pt===void 0?``:Pt,M=At,N=jt,It=Mt,Lt=Nt,M.document,P=!!N.documentElement&&!!N.head&&typeof N.addEventListener==`function`&&typeof N.createElement==`function`,Rt=~Ft.indexOf(`MSIE`)||~Ft.indexOf(`Trident/`),Bt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Vt=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Ht={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Ut={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Wt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],F=`classic`,Gt=`duotone`,Kt=`sharp`,qt=`sharp-duotone`,Jt=`chisel`,Yt=`etch`,Xt=`graphite`,Zt=`jelly`,Qt=`jelly-duo`,$t=`jelly-fill`,en=`mosaic`,tn=`notdog`,nn=`notdog-duo`,rn=`pixel`,an=`slab`,on=`slab-duo`,sn=`slab-press`,cn=`slab-press-duo`,ln=`thumbprint`,un=`utility`,dn=`utility-duo`,fn=`utility-fill`,pn=`vellum`,mn=`whiteboard`,hn=`Classic`,gn=`Duotone`,_n=`Sharp`,vn=`Sharp Duotone`,yn=`Chisel`,bn=`Etch`,xn=`Graphite`,Sn=`Jelly`,Cn=`Jelly Duo`,wn=`Jelly Fill`,Tn=`Mosaic`,En=`Notdog`,Dn=`Notdog Duo`,On=`Pixel`,kn=`Slab`,An=`Slab Duo`,jn=`Slab Press`,Mn=`Slab Press Duo`,Nn=`Thumbprint`,Pn=`Utility`,Fn=`Utility Duo`,In=`Utility Fill`,Ln=`Vellum`,Rn=`Whiteboard`,zn=[F,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn],zt={},_(_(_(_(_(_(_(_(_(_(zt,F,hn),Gt,gn),Kt,_n),qt,vn),Jt,yn),Yt,bn),Xt,xn),Zt,Sn),Qt,Cn),$t,wn),_(_(_(_(_(_(_(_(_(_(zt,en,Tn),tn,En),nn,Dn),rn,On),an,kn),on,An),sn,jn),cn,Mn),ln,Nn),un,Pn),_(_(_(_(zt,dn,Fn),fn,In),pn,Ln),mn,Rn),Bn={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Vn={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Hn=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Un={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Wn=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Gn={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Kn=[`kit`],_(_({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),qn={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},Jn={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Yn={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Xn={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Qn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},$n=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Zn={},_(_(_(_(_(_(_(_(_(_(Zn,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),_(_(_(_(_(_(_(_(_(_(Zn,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),_(_(_(_(Zn,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),_(_({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`),er={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},tr={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},nr={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},rr=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat($n,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),ir=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],ar=[1,2,3,4,5,6,7,8,9,10],or=ar.concat([11,12,13,14,15,16,17,18,19,20]),sr=[].concat(C(Object.keys(tr)),ir,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Qn.GROUP,Qn.SWAP_OPACITY,Qn.PRIMARY,Qn.SECONDARY],ar.map(function(e){return`${e}x`}),or.map(function(e){return`w-${e}`})),cr={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},I=`___FONT_AWESOME___`,lr=16,ur=`fa`,dr=`svg-inline--fa`,L=`data-fa-i2svg`,fr=`data-fa-pseudo-element`,pr=`data-fa-pseudo-element-pending`,mr=`data-prefix`,hr=`data-icon`,gr=`fontawesome-i2svg`,_r=`async`,vr=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],yr=[`::before`,`::after`,`:before`,`:after`],br=function(){try{return!0}catch{return!1}}(),xr=x({},Ht),xr[F]=x(x(x(x({},{"fa-duotone":`duotone`}),Ht[F]),Gn.kit),Gn[`kit-duotone`]),Sr=E(xr),Cr=x({},Un),Cr[F]=x(x(x(x({},{duotone:`fad`}),Cr[F]),Xn.kit),Xn[`kit-duotone`]),wr=E(Cr),Tr=x({},nr),Tr[F]=x(x({},Tr[F]),Yn.kit),Er=E(Tr),Dr=x({},er),Dr[F]=x(x({},Dr[F]),qn.kit),E(Dr),Or=Bt,kr=`fa-layers-text`,Ar=Vt,E(x({},Bn)),jr=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Mr=Ut,Nr=[].concat(C(Kn),C(sr)),Pr=M.FontAwesomeConfig||{},N&&typeof N.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=S(e,2),n=t[0],r=t[1],i=D(ie(n));i!=null&&(Pr[r]=i)}),Fr={styleDefault:`solid`,familyDefault:F,cssPrefix:ur,replacementClass:dr,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Pr.familyPrefix&&(Pr.cssPrefix=Pr.familyPrefix),Ir=x(x({},Fr),Pr),Ir.autoReplaceSvg||(Ir.observeMutations=!1),R={},Object.keys(Fr).forEach(function(e){Object.defineProperty(R,e,{enumerable:!0,set:function(t){Ir[e]=t,Lr.forEach(function(e){return e(R)})},get:function(){return Ir[e]}})}),Object.defineProperty(R,"familyPrefix",{enumerable:!0,set:function(e){Ir.cssPrefix=e,Lr.forEach(function(e){return e(R)})},get:function(){return Ir.cssPrefix}}),M.FontAwesomeConfig=R,Lr=[],z=lr,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},Rr=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,zr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`,Br=!1,Vr={mixout:function(){return{dom:{css:he,insertCss:ge}}},hooks:function(){return{beforeDOMElementCreation:function(){ge()},beforeI2svg:function(){ge()}}}},V=M||{},V[I]||(V[I]={}),V[I].styles||(V[I].styles={}),V[I].hooks||(V[I].hooks={}),V[I].shims||(V[I].shims=[]),H=V[I],Hr=[],Ur=function(){N.removeEventListener(`DOMContentLoaded`,Ur),Wr=1,Hr.map(function(e){return e()})},Wr=!1,P&&(Wr=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Wr||N.addEventListener(`DOMContentLoaded`,Ur)),Gr=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Kr=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Gr(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l},qr=H.styles,Jr=H.shims,Yr=Object.keys(Er),Xr=Yr.reduce(function(e,t){return e[t]=Object.keys(Er[t]),e},{}),Zr=null,Qr={},$r={},ei={},ti={},ni={},ri=function(){var e=function(e){return Kr(qr,function(t,n,r){return t[r]=Kr(n,e,{}),t},{})};Qr=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),$r=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),ni=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in qr||R.autoFetchSvg,n=Kr(Jr,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});ei=n.names,ti=n.unicodes,Zr=Ae(R.styleDefault,{family:R.familyDefault})},ae(function(e){Zr=Ae(e.styleDefault,{family:R.familyDefault})}),ri(),ii=function(){return{prefix:null,iconName:null,rest:[]}},ai=rr.concat(Wn),oi=zn.filter(function(e){return e!==F||e!==Gt}),si=Object.keys(nr).filter(function(e){return e!==F}).map(function(e){return Object.keys(nr[e])}).flat(),ci=function(){function e(){p(this,e),this.definitions={}}return h(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=x(x({},e.definitions[n]||{}),t[n]),Se(n,t[n]);var r=Er[F][n];r&&Se(r,t[n]),ri()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),li=[],ui={},di={},fi=Object.keys(di),pi=new ci,U={noAuto:function(){R.autoReplaceSvg=!1,R.observeMutations=!1,Re(`noAuto`)},config:R,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(Re(`beforeI2svg`,e),j(`pseudoElements2svg`,e),j(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;R.autoReplaceSvg===!1&&(R.autoReplaceSvg=!0),R.observeMutations=!0,_e(function(){mi({autoReplaceSvgRoot:t}),Re(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(T(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:k(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Ae(e[0]);return{prefix:n,iconName:k(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${R.cssPrefix}-`)>-1||e.match(Or))){var r=Ne(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||A(),iconName:k(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=A();return{prefix:i,iconName:k(i,e)||e}}}},library:pi,findIconDefinition:ze,toHtml:ve},mi=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?N:e;(Object.keys(H.styles).length>0||R.autoFetchSvg)&&P&&R.autoReplaceSvg&&U.dom.i2svg({node:t})},hi=H.styles,gi={found:!1,width:512,height:512},_i=function(){},vi=R.measurePerformance&&Lt&&Lt.mark&&Lt.measure?Lt:{mark:_i,measure:_i},yi=`FA "7.3.1"`,bi=function(e){return vi.mark(`${yi} ${e} begins`),function(){return xi(e)}},xi=function(e){vi.mark(`${yi} ${e} ends`),vi.measure(`${yi} ${e}`,`${yi} ${e} begins`,`${yi} ${e} ends`)},Si={begin:bi,end:xi},Ci=function(){},wi={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(nt(e),t)}),t.getAttribute(L)===null&&R.keepOriginalSource){var n=N.createComment(rt(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~ce(t).indexOf(R.replacementClass))return wi.replace(e);var r=RegExp(`${R.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===R.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return ve(e)}).join(`
`);t.setAttribute(L,``),t.innerHTML=a}},Ti=!1,Ei=null,Di=H.styles,Oi=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Be(x({type:`icon`},e),function(){return Re(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),We({icons:{main:qe(v),mask:s?qe(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:x(x({},B),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ki={mixout:function(){return{icon:yt(Oi)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_t,e.nodeCallback=vt,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?N:t,r=e.callback;return _t(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Ye(n,r),o.iconName?Ye(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=S(o,2),u=l[0],d=l[1];t([e,We({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=de(a);o.length>0&&(n.style=o);var s;return fe(i)&&(s=j(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ai={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Be({type:`layer`},function(){Re(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${R.cssPrefix}-layers`].concat(C(r)).join(` `)},children:n}]})}}}},ji={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Be({type:`counter`,content:e},function(){return Re(`beforeDOMElementCreation`,{content:e,params:t}),Ke({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-counter`].concat(C(a))}})})}}}},Mi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?B:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Be({type:`text`,content:e},function(){return Re(`beforeDOMElementCreation`,{content:e,params:t}),Ge({content:e,transform:x(x({},B),r),extra:{attributes:s,styles:l,classes:[`${R.cssPrefix}-layers-text`].concat(C(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Rt){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Ge({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Ni=RegExp(`"`,`ug`),Pi=[1105920,1112319],Fi=x(x(x(x({},{FontAwesome:{normal:`fas`,400:`fas`}}),Vn),cr),Jn),Ii=Object.keys(Fi).reduce(function(e,t){return e[t.toLowerCase()]=Fi[t],e},{}),Li=Object.keys(Ii).reduce(function(e,t){var n=Ii[t];return e[t]=n[900]||C(Object.entries(n))[0][1],e},{}),Ri=function(e){return!!e&&yr.some(function(t){return e.includes(t)})},zi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=g(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Ri(a)){var o=yr.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t},Bi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Et,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?N:t;R.searchPseudoElements&&Et(n)}}},Vi=!1,Hi={mixout:function(){return{dom:{unwatch:function(){ot(),Vi=!0}}}},hooks:function(){return{bootstrap:function(){ct(Le(`mutationObserverCallbacks`,{}))},noAuto:function(){lt()},watch:function(e){var t=e.observeMutationsRoot;Vi?st():ct(Le(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ui=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Wi={mixout:function(){return{parse:{transform:function(e){return Ui(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ui(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:x({},a.outer),children:[{tag:`g`,attributes:x({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:x(x({},t.icon.attributes),a.path)}]}]}}}},Gi={x:0,y:0,width:`100%`,height:`100%`},Ie([Vr,ki,Ai,ji,Mi,Bi,Hi,Wi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ne(n.split(` `).map(function(e){return e.trim()})):ii();return r.prefix||=A(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=pe({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:x(x({},Gi),{},{fill:`white`})},p=c.children?{children:c.children.map(Dt)}:{},m={tag:`g`,attributes:x({},d.inner),children:[Dt(x({tag:c.tag,attributes:x(x({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:x({},d.outer),children:[m]},g=`mask-${a||se()}`,_=`clip-${a||se()}`,v={tag:`mask`,attributes:x(x({},Gi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ot(u)},v]};return t.push(y,{tag:`rect`,attributes:x({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Gi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;M.matchMedia&&(t=M.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:x(x({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=x(x({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:x(x({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:x(x({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:x(x({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:x(x({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:x(x({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:x(x({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:x(x({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:U}),U.noAuto,Ki=U.config,U.library,U.dom,qi=U.parse,U.findIconDefinition,U.toHtml,Ji=U.icon,U.layer,U.text,U.counter})))()}function Xi(e){return e-=0,e===e}function Zi(e){return Xi(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function Qi(e){return e.charAt(0).toUpperCase()+e.slice(1)}function $i(e){if(sa.has(e))return sa.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Zi(n);t[e.startsWith(`webkit`)?Qi(e):e]=r}}}n=a+1}if(sa.size===ca){let e=sa.keys().next().value;e&&sa.delete(e)}return sa.set(e,t),t}function ea(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),ea(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=$i(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Zi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(oa)))}return e(t.tag,{...a,...u},...r)}function ta(e){let t=Ki.cssPrefix||Ki.familyPrefix||ha;return t===ha?e:e.replace(new RegExp(String.raw`(?<=^|\s)${ha}-`,`g`),`${t}-`)}function na(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:ee,canvasRoomy:te,flip360:b,buzz:x,float:S,jello:C,spinSnap:ne,spinSnap4:w,spinSnap8:T,swing:re,wag:E,className:ie}=e,D=[];return ie&&D.push(...ie.split(` `)),t&&D.push(W.beat),n&&D.push(W.fade),r&&D.push(W.beatFade),i&&D.push(W.bounce),a&&D.push(W.shake),o&&D.push(W.spin),c&&D.push(W.spinReverse),s&&D.push(W.spinPulse),l&&D.push(W.pulse),u&&D.push(G.fixedWidth),d&&D.push(G.inverse),f&&D.push(G.border),p===!0&&D.push(G.flip),(p===`horizontal`||p===`both`)&&D.push(G.flipHorizontal),(p===`vertical`||p===`both`)&&D.push(G.flipVertical),m!=null&&D.push(va[m]),h!=null&&h!==0&&D.push(_a[h]),g!=null&&D.push(ga[g]),_&&D.push(G.swapOpacity),ma()?(v&&D.push(G.rotateBy),y&&D.push(G.widthAuto),ee&&D.push(G.canvasSquare),te&&D.push(G.canvasRoomy),b&&D.push(W.flip360),x&&D.push(W.buzz),S&&D.push(W.float),C&&D.push(W.jello),ne&&D.push(W.spinSnap),w&&D.push(W.spinSnap4),T&&D.push(W.spinSnap8),re&&D.push(W.swing),E&&D.push(W.wag),(Ki.cssPrefix||Ki.familyPrefix||ha)===ha?D:D.map(ta)):D}function ra(e){if(e)return ba(e)?e:qi.icon(e)}function ia(e){return Object.keys(e)}var aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,W,ga,_a,va,G,ya,ba,xa,Sa,Ca,wa;function Ta(){return(Ta=t((()=>{aa=e(n(),1),Yi(),r(),oa=(e,t)=>aa.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}}),sa=new Map,ca=1e3,la=ea.bind(null,aa.createElement),ua=(e,t)=>{let n=(0,aa.useId)();return e||(t?n:void 0)},da=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},typeof process<`u`&&{}.FA_VERSION,fa=`searchPseudoElementsFullScan`in Ki&&typeof Ki.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,pa=Number.parseInt(fa)>=7,ma=()=>pa,ha=`fa`,W={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},ga={left:`fa-pull-left`,right:`fa-pull-right`},_a={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},va={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},G={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},ya={default:`fa-layers`},ba=e=>typeof e==`object`&&`icon`in e&&!!e.icon,xa=new da(`FontAwesomeIcon`),Sa={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Ca=new Set(Object.keys(Sa)),wa=aa.forwardRef((e,t)=>{let n={...Sa,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=ua(c,!!i),d=ua(s,!!o),f=ra(r);if(!f)return xa.error(`Icon lookup is undefined`,r),null;let p=na(n),m=typeof l==`string`?qi.transform(l):l,h=ra(i),g=Ji(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return xa.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ia(n))Ca.has(e)||(v[e]=n[e]);return la(_[0],v)}),wa.displayName=`FontAwesomeIcon`,`${ya.default}${G.fixedWidth}`})))()}var Ea,Da,Oa,ka,Aa,ja,Ma,Na;function Pa(){return(Pa=t((()=>{Ea=n(),Da=(function(){if(typeof window>`u`||typeof window.addEventListener!=`function`)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){return null};return window.addEventListener(`test`,n,t),window.removeEventListener(`test`,n,t),e}),Oa=`ignore-onclickoutside`,ka=function(e,t){return e.classList?.contains(t)},Aa=function(e,t){for(var n=e.target||e;n;){if(Array.isArray(t)){if(t.some(function(e){return ka(n,e)}))return!0}else if(ka(n,t))return!0;n=n.parentElement}return!1},ja=function(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY},Ma=function(e){return e.includes(`touch`)&&Da()?{passive:!0}:!1},Na=function(e,t){var n=t===void 0?{}:t,r=n.refs,i=n.disabled,a=n.eventTypes,o=a===void 0?[`mousedown`,`touchstart`]:a,s=n.excludeScrollbar,c=n.ignoreClass,l=c===void 0?Oa:c,u=n.detectIFrame,d=u===void 0||u,f=(0,Ea.useState)([]),p=f[0],m=f[1],h=(0,Ea.useRef)(e);h.current=e;var g=(0,Ea.useCallback)(function(e){return m(function(t){return[].concat(t,[{current:e}])})},[]);return(0,Ea.useEffect)(function(){if(r!=null&&r.length||p.length){var e=function(){var e=[];return(r||p).forEach(function(t){var n=t.current;return n&&e.push(n)}),e},t=function(t){!Aa(t,l)&&!(s&&ja(t))&&e().every(function(e){return!e.contains(t.target)})&&h.current(t)},n=function(t){return setTimeout(function(){var n=document.activeElement;n?.tagName===`IFRAME`&&!Aa(n,l)&&!e().includes(n)&&h.current(t)},0)},a=function(){o.forEach(function(e){return document.removeEventListener(e,t,Ma(e))}),d&&window.removeEventListener(`blur`,n)};if(i)a();else return o.forEach(function(e){return document.addEventListener(e,t,Ma(e))}),d&&window.addEventListener(`blur`,n),function(){return a()}}},[p,l,s,i,d,JSON.stringify(o)]),g}})))()}var Fa,Ia,La,Ra;function za(){return(za=t((()=>{Fa=n(),Ia={Win:`Meta`,Scroll:`ScrollLock`,Spacebar:` `,Down:`ArrowDown`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Del:`Delete`,Crsel:`CrSel`,Exsel:`ExSel`,Apps:`ContextMenu`,Esc:`Escape`,Decimal:`.`,Multiply:`*`,Add:`+`,Subtract:`-`,Divide:`/`},La=e=>{let t=e.key;if(Object.hasOwn(Ia,t)){let n=Ia[t];Object.defineProperty(e,"key",{configurable:!0,enumerable:!0,get:()=>n})}},Ra=(e,t)=>{let n=(0,Fa.useRef)();(0,Fa.useEffect)(()=>{n.current=n=>{La(n),(Array.isArray(e)?e.includes(n.key):e===n.key)&&t?.(n)}},[e,t]),(0,Fa.useEffect)(()=>{let e=e=>n.current?.(e);return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[])}})))()}var Ba,Va,Ha,Ua,Wa;function Ga(){return(Ga=t((()=>{Ba=`_chip_1k4xd_1`,Va=`_chipLabel_1k4xd_15`,Ha=`_chipDeleteContainer_1k4xd_23`,Ua=`_chipClose_1k4xd_38`,Wa={chip:Ba,chipLabel:Va,chipDeleteContainer:Ha,chipClose:Ua}})))()}var Ka,qa;function Ja(){return(Ja=t((()=>{l(),Ta(),Ga(),Ka=r(),qa=({deleteLabel:e,onDelete:t,value:n})=>(0,Ka.jsxs)(`div`,{className:Wa.chip,children:[(0,Ka.jsx)(`span`,{className:Wa.chipLabel,children:n}),e?(0,Ka.jsx)(`button`,{type:`button`,onClick:t,title:e,className:Wa.chipDeleteContainer,children:(0,Ka.jsx)(wa,{icon:c,className:Wa.chipClose})}):null]}),qa.__docgenInfo={description:`A removable chip used to represent selected search choices.`,methods:[],displayName:`Chip`,props:{deleteLabel:{required:!1,tsType:{name:`string`},description:`Label for tooltip on the delete button.`},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEvent<HTMLButtonElement>`},name:`event`}],return:{name:`void`}}},description:`A handler for when delete button is pressed.`},value:{required:!0,tsType:{name:`string`},description:`Text value to display on Chip.`}}}})))()}var Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,K;function wo(){return(wo=t((()=>{Ya=`_topContainer_do3zw_1`,Xa=`_small_do3zw_5`,Za=`_searchContainer_do3zw_9`,Qa=`_searchContainerExpanded_do3zw_25`,$a=`_searchContainerExpandedShadow_do3zw_30`,eo=`_searchContainerShadow_do3zw_30`,to=`_flexContainer_do3zw_35`,no=`_searchIconContainer_do3zw_44`,ro=`_spinnerContainer_do3zw_52`,io=`_clearContainer_do3zw_53`,ao=`_searchIcon_do3zw_44`,oo=`_clearButton_do3zw_79`,so=`_inputField_do3zw_98`,co=`_inputContainer_do3zw_119`,lo=`_inputFieldContainer_do3zw_126`,uo=`_resultContainer_do3zw_134`,fo=`_resultListContainer_do3zw_141`,po=`_resultListContainerExpandedShadow_do3zw_159`,mo=`_resultList_do3zw_141`,ho=`_resultSeperatorContainer_do3zw_170`,go=`_resultSeperatorContainerShadow_do3zw_176`,_o=`_resultSeperator_do3zw_170`,vo=`_resultListItem_do3zw_185`,yo=`_resultItem_do3zw_193`,bo=`_resultItemControl_do3zw_201`,xo=`_resultItemLabel_do3zw_205`,So=`_linkChoice_do3zw_212`,Co=`_chipContainer_do3zw_224`,K={topContainer:Ya,small:Xa,searchContainer:Za,searchContainerExpanded:Qa,searchContainerExpandedShadow:$a,searchContainerShadow:eo,flexContainer:to,searchIconContainer:no,spinnerContainer:ro,clearContainer:io,searchIcon:ao,clearButton:oo,inputField:so,inputContainer:co,inputFieldContainer:lo,resultContainer:uo,resultListContainer:fo,resultListContainerExpandedShadow:po,resultList:mo,resultSeperatorContainer:ho,resultSeperatorContainerShadow:go,resultSeperator:_o,resultListItem:vo,resultItem:yo,resultItemControl:bo,resultItemLabel:xo,linkChoice:So,chipContainer:Co}})))()}var To,Eo;function Do(){return(Do=t((()=>{wo(),To=r(),Eo=({choice:e,isSelected:t,isText:n,isMultiSelect:r,small:i=!1,onCheckChanged:a,onLinkPress:o})=>{let s=r?`checkbox`:`radio`;return(0,To.jsx)(`div`,{className:`${K.resultItem} ${i?K.small:``}`,children:n?(0,To.jsx)(`a`,{href:`#${e.key}`,className:K.linkChoice,onClick:t=>o(t,e),children:e.description}):(0,To.jsxs)(`label`,{className:K.resultItemLabel,children:[(0,To.jsx)(`input`,{type:s,onChange:t=>a(t,e),value:e.key,checked:t,tabIndex:0,className:K.resultItemControl}),e.description]})})},Eo.__docgenInfo={description:`Renders a single search result as a link, radio, or checkbox.`,methods:[],displayName:`ChoiceItem`,props:{choice:{required:!0,tsType:{name:`SearchPanelChoice`},description:``},isSelected:{required:!0,tsType:{name:`boolean`},description:``},isText:{required:!0,tsType:{name:`boolean`},description:``},isMultiSelect:{required:!0,tsType:{name:`boolean`},description:``},small:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onCheckChanged:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: ChangeEvent<HTMLInputElement>, choice: SearchPanelChoice) => void`,signature:{arguments:[{type:{name:`ChangeEvent`,elements:[{name:`HTMLInputElement`}],raw:`ChangeEvent<HTMLInputElement>`},name:`event`},{type:{name:`SearchPanelChoice`},name:`choice`}],return:{name:`void`}}},description:``},onLinkPress:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLAnchorElement>, choice: SearchPanelChoice) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLAnchorElement`}],raw:`MouseEvent<HTMLAnchorElement>`},name:`event`},{type:{name:`SearchPanelChoice`},name:`choice`}],return:{name:`void`}}},description:``}}}})))()}var Oo,ko,Ao,jo;function Mo(){return(Mo=t((()=>{Oo=(e,t)=>t.findIndex(t=>t.key===e.key),ko=e=>{if(e!==void 0)return e<254?254:e},Ao=(e,t)=>{let n=Oo(e,t);n>-1&&t.splice(n,1)},jo=(e,t,n)=>{n||t.splice(0,t.length),t.push(e)}})))()}var q,J,Y,No;function Po(){return(Po=t((()=>{l(),Ta(),q=n(),Pa(),za(),Ja(),Do(),Mo(),wo(),J=r(),Y=function(e){return e[e.checkbox=0]=`checkbox`,e[e.link=1]=`link`,e[e.radio=2]=`radio`,e}({}),No=e=>{let{chips:t=!1,choices:n,className:r=``,clearLabel:i,float:s=!1,isLoading:l=!1,maximumHeight:u,noChoiceItem:d,onChange:f,onClear:p,onFocus:m,onSelectionChange:h,placeholder:g,preSelectedChoices:_,shadow:v=!1,small:y=!1,value:ee,variant:te=1,width:b}=e,[x,S]=(0,q.useState)(!1),[C,ne]=(0,q.useState)(!1),[w,T]=(0,q.useState)(()=>_??[]),re=(0,q.useId)(),E=(0,q.useRef)(null),ie=ko(b),D=te===0,ae=te===1;(0,q.useEffect)(()=>{s&&!b&&console.warn(`Property "float" only works when "width" is also set.`)},[s,b]),(0,q.useEffect)(()=>{b!==void 0&&b<254&&console.warn(`Minimum width is 254`)},[b]),(0,q.useEffect)(()=>{p&&!i&&console.warn(`Developer should provide a value for clearLabel.`)},[p,i]);let oe=()=>{E.current?.blur(),S(!1),ne(!1)},se=()=>{ne(!0),S(!0)},O=(e,t)=>{let n=e.target,r=[...w],i=!1;n.checked?jo(t,r,D):Ao(t,r),d&&(t.key===d.key&&n.checked?(r=[t],i=!0):Ao(d,r)),T(r),h(i?[]:r)},ce=e=>{let t=[...w];Ao(e,t),T(t),h(t)},le=e=>{f(e)},ue=e=>{m?.(e)},de=e=>{T(e),h(e)},fe=(e,t)=>{e.preventDefault(),de([t]),S(!1)};(0,q.useEffect)(()=>{let e=!1;return queueMicrotask(()=>{!e&&C&&S(n.length>0)}),()=>{e=!0}},[n,C]),(0,q.useEffect)(()=>{if(!_)return;let e=!1;return queueMicrotask(()=>{e||T(_)}),()=>{e=!0}},[_]);let pe=Na(oe);Ra(`Escape`,oe),Ra(`Enter`,oe);let me=x&&n.length>0;return(0,J.jsxs)(`div`,{style:{width:ie?`${ie}px`:void 0},children:[(0,J.jsxs)(`form`,{className:`
          ${r}
          ${K.topContainer}
          ${y?K.small:``}
        `,ref:pe,onFocus:se,children:[(0,J.jsx)(`div`,{className:`
            ${K.searchContainer}
            ${me?K.searchContainerExpanded:``}
            ${me&&v?K.searchContainerExpandedShadow:``}
            ${y?K.small:``}
            ${v?K.searchContainerShadow:``}
          `,children:(0,J.jsxs)(`div`,{className:K.flexContainer,children:[(0,J.jsx)(`div`,{className:K.searchIconContainer,children:(0,J.jsx)(`span`,{className:K.searchIcon,children:(0,J.jsx)(wa,{icon:a})})}),(0,J.jsx)(`div`,{className:K.inputContainer,children:(0,J.jsx)(`input`,{ref:E,className:`${K.inputField} ${y?K.small:``}`,type:`text`,"aria-autocomplete":`both`,"aria-haspopup":`listbox`,autoCapitalize:`off`,autoComplete:`off`,autoCorrect:`off`,role:`combobox`,spellCheck:!1,title:g,"aria-label":g,"aria-controls":re,"aria-expanded":me,placeholder:g,onChange:le,onFocus:ue,value:ee})}),l?(0,J.jsx)(`div`,{className:`${K.spinnerContainer} ${y?K.small:``}`,children:(0,J.jsx)(`span`,{className:K.searchIcon,"aria-label":`Loading`,children:(0,J.jsx)(wa,{icon:o,spin:!0})})}):null,p&&ee?(0,J.jsx)(`div`,{className:K.clearContainer,children:(0,J.jsx)(`button`,{type:`button`,onClick:p,title:i,className:`${K.clearButton} ${y?K.small:``}`,children:(0,J.jsx)(wa,{icon:c})})}):null]})}),me?(0,J.jsxs)(`div`,{id:re,className:K.resultContainer,style:{width:ie?`${ie}px`:void 0,position:b&&s?`absolute`:`inherit`},children:[(0,J.jsx)(`div`,{className:`
                ${K.resultSeperatorContainer}
                ${v?K.resultSeperatorContainerShadow:``}
              `,children:(0,J.jsx)(`div`,{className:K.resultSeperator})}),(0,J.jsx)(`fieldset`,{className:`
                ${K.resultListContainer}
                ${v?K.resultListContainerExpandedShadow:``}
                ${y?K.small:``}
              `,style:{maxHeight:u?`${u}px`:void 0},children:(0,J.jsxs)(`ul`,{className:K.resultList,role:`listbox`,children:[d?(0,J.jsx)(`li`,{className:K.resultListItem,role:`presentation`,children:(0,J.jsx)(Eo,{choice:d,isSelected:Oo(d,w)>-1,isText:ae,isMultiSelect:D,small:y,onCheckChanged:O,onLinkPress:fe})},d.key):null,n.map(e=>(0,J.jsx)(`li`,{className:K.resultListItem,role:`presentation`,children:(0,J.jsx)(Eo,{choice:e,isSelected:Oo(e,w)>-1,isText:ae,isMultiSelect:D,small:y,onCheckChanged:O,onLinkPress:fe})},e.key))]})})]}):null]}),t?(0,J.jsx)(`div`,{className:K.chipContainer,children:w.map(e=>(0,J.jsx)(qa,{deleteLabel:`Delete ${e.description}`,onDelete:()=>ce(e),value:e.description},e.key))}):null]})},No.__docgenInfo={description:`Expandable search panel with checkbox, radio, or link result variants.`,methods:[],displayName:`SearchPanel`,props:{chips:{required:!1,tsType:{name:`boolean`},description:`Display Chips to represent selected choices.`},choices:{required:!0,tsType:{name:`Array`,elements:[{name:`SearchPanelChoice`}],raw:`SearchPanelChoice[]`},description:`An array of choices to be displayed.`},className:{required:!1,tsType:{name:`string`},description:`Optional class name to be applied to the top level of the component.`},clearLabel:{required:!1,tsType:{name:`string`},description:`A label for clear button, should be provided if onClear is provided.`},float:{required:!1,tsType:{name:`boolean`},description:`Result list will float above content. Setting width is required.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Indicate when consumer is loading to display a spinner.`},maximumHeight:{required:!1,tsType:{name:`number`},description:`Optional maximum height of result list in pixels.`},noChoiceItem:{required:!1,tsType:{name:`SearchPanelChoice`},description:`Provide a "None" choice item so user can "unselect" a select choice
when variant is checkbox or radio.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(event: ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`ChangeEvent`,elements:[{name:`HTMLInputElement`}],raw:`ChangeEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Function that will handle event when search input changes.`},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: MouseEvent<HTMLButtonElement>) => void`,signature:{arguments:[{type:{name:`MouseEvent`,elements:[{name:`HTMLButtonElement`}],raw:`MouseEvent<HTMLButtonElement>`},name:`event`}],return:{name:`void`}}},description:`Function that will handle event when user presses clear button.`},onFocus:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: FocusEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:`FocusEvent`,elements:[{name:`HTMLInputElement`}],raw:`FocusEvent<HTMLInputElement>`},name:`event`}],return:{name:`void`}}},description:`Function that will handle event when search input is focused.`},onSelectionChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(selectedChoices: SearchPanelChoice[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`SearchPanelChoice`}],raw:`SearchPanelChoice[]`},name:`selectedChoices`}],return:{name:`void`}}},description:`Function that will handle event when selected items change.`},preSelectedChoices:{required:!1,tsType:{name:`Array`,elements:[{name:`SearchPanelChoice`}],raw:`SearchPanelChoice[]`},description:`State of selected choices.`},shadow:{required:!1,tsType:{name:`boolean`},description:`Display a shadow on hover and when expanded.`},small:{required:!1,tsType:{name:`boolean`},description:`A smaller variant.`},placeholder:{required:!0,tsType:{name:`string`},description:`Placeholder label in the search input box.`},value:{required:!0,tsType:{name:`string`},description:`Value of search input.`},variant:{required:!1,tsType:{name:`SearchPanelVariant`},description:`Variants available: checkbox, radio, link.`},width:{required:!1,tsType:{name:`number`},description:`Width in pixels.`}}}})))()}var Fo,X,Z,Io,Q,Lo,Ro,zo,Bo,$,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs;function is(){return(is=t((()=>{Fo=n(),Po(),X=r(),{expect:Z,fn:Io,userEvent:Q,within:Lo}=__STORYBOOK_MODULE_TEST__,Ro=[{key:`choice1`,description:`A choice`},{key:`choice2`,description:`Another choice`},{key:`choice3`,description:`This choice`},{key:`choice4`,description:`That choice`}],zo={key:`none`,description:`None`},Bo={title:`SearchPanel`,component:No,args:{choices:Ro,onChange:Io(),onSelectionChange:Io(),placeholder:`Search`,value:``}},$=e=>{let{initialValue:t=``,initialSelected:n=[],onSelectionChange:r,...i}=e,[a,o]=(0,Fo.useState)(t),[s,c]=(0,Fo.useState)(n);return(0,X.jsx)(No,{...i,value:a,preSelectedChoices:s,onChange:e=>o(e.target.value),onClear:()=>o(``),onSelectionChange:e=>{c(e),r(e)}})},Vo={render:e=>(0,X.jsx)($,{...e}),play:async({canvasElement:e})=>{let t=Lo(e),n=t.getByPlaceholderText(`Search`);await Q.click(n),await Z(t.getByText(`A choice`)).toBeInTheDocument()}},Ho={args:{small:!0,width:300},render:e=>(0,X.jsx)($,{...e})},Uo={args:{shadow:!0},render:e=>(0,X.jsx)($,{...e})},Wo={args:{chips:!0,shadow:!0,variant:Y.checkbox},render:e=>(0,X.jsx)($,{...e}),play:async({canvasElement:e,args:t})=>{let n=Lo(e);await Q.click(n.getByPlaceholderText(`Search`)),await Q.click(n.getByText(`A choice`)),await Z(t.onSelectionChange).toHaveBeenCalled(),await Z(n.getAllByText(`A choice`).length).toBeGreaterThan(1)}},Go={args:{chips:!0,noChoiceItem:zo,shadow:!0,variant:Y.checkbox},render:e=>(0,X.jsx)($,{...e})},Ko={args:{chips:!0,noChoiceItem:zo,shadow:!0,small:!0,variant:Y.checkbox},render:e=>(0,X.jsx)($,{...e})},qo={args:{chips:!0,shadow:!0,variant:Y.checkbox},render:e=>(0,X.jsx)($,{...e,initialSelected:Ro})},Jo={args:{chips:!0,maximumHeight:120,small:!0,variant:Y.checkbox,width:400},render:e=>(0,X.jsx)($,{...e,initialSelected:Ro})},Yo={args:{chips:!0,noChoiceItem:zo,shadow:!0,variant:Y.radio},render:e=>(0,X.jsx)($,{...e})},Xo={args:{chips:!0,noChoiceItem:zo,variant:Y.checkbox,width:300},render:e=>(0,X.jsx)($,{...e})},Zo={args:{shadow:!0,variant:Y.link},render:e=>(0,X.jsx)($,{...e}),play:async({canvasElement:e,args:t})=>{let n=Lo(e);await Q.click(n.getByPlaceholderText(`Search`)),await Q.click(n.getByText(`A choice`)),await Z(t.onSelectionChange).toHaveBeenCalledWith([Ro[0]])}},Qo={args:{small:!0,variant:Y.link},render:e=>(0,X.jsx)($,{...e})},$o={args:{float:!0,maximumHeight:100,shadow:!0,variant:Y.link,width:350},render:e=>(0,X.jsx)($,{...e})},es={args:{isLoading:!0,shadow:!0,variant:Y.link},render:e=>(0,X.jsx)($,{...e})},ts={args:{clearLabel:`Clear search`,isLoading:!1,shadow:!0,variant:Y.link},render:e=>(0,X.jsx)($,{...e,initialValue:`Default input`}),play:async({canvasElement:e})=>{let t=Lo(e),n=t.getByPlaceholderText(`Search`);await Z(n).toHaveValue(`Default input`),await Z(t.getByTitle(`Clear search`)).toBeInTheDocument(),await Q.click(t.getByTitle(`Clear search`)),await Z(n).toHaveValue(``),await Q.type(n,`Default input`),await Z(t.getByTitle(`Clear search`)).toBeInTheDocument()}},ns={args:{clearLabel:`Clear search`,isLoading:!1,shadow:!0,small:!0,variant:Y.link},render:e=>(0,X.jsx)($,{...e,initialValue:`Default input`})},rs=[`Default`,`Small`,`Shadow`,`MultiSelect`,`MultiSelectWithNone`,`SmallWithMultiSelect`,`PreselectedChoices`,`PreselectedSmall`,`SingleSelectNone`,`DefaultWithWidth`,`LinkVariant`,`LinkVariantSmall`,`FloatingResults`,`LoadingIndicator`,`ClearButton`,`ClearButtonSmall`],Vo.parameters={...Vo.parameters,docs:{...Vo.parameters?.docs,source:{originalSource:`{
  render: args => <StatefulSearchPanel {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Search");
    await userEvent.click(input);
    await expect(canvas.getByText("A choice")).toBeInTheDocument();
  }
}`,...Vo.parameters?.docs?.source}}},Ho.parameters={...Ho.parameters,docs:{...Ho.parameters?.docs,source:{originalSource:`{
  args: {
    small: true,
    width: 300
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Ho.parameters?.docs?.source}}},Uo.parameters={...Uo.parameters,docs:{...Uo.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: true
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Uo.parameters?.docs?.source}}},Wo.parameters={...Wo.parameters,docs:{...Wo.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    shadow: true,
    variant: SearchPanelVariant.checkbox
  },
  render: args => <StatefulSearchPanel {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByPlaceholderText("Search"));
    await userEvent.click(canvas.getByText("A choice"));
    await expect(args.onSelectionChange).toHaveBeenCalled();
    await expect(canvas.getAllByText("A choice").length).toBeGreaterThan(1);
  }
}`,...Wo.parameters?.docs?.source}}},Go.parameters={...Go.parameters,docs:{...Go.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    noChoiceItem,
    shadow: true,
    variant: SearchPanelVariant.checkbox
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Go.parameters?.docs?.source}}},Ko.parameters={...Ko.parameters,docs:{...Ko.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    noChoiceItem,
    shadow: true,
    small: true,
    variant: SearchPanelVariant.checkbox
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Ko.parameters?.docs?.source}}},qo.parameters={...qo.parameters,docs:{...qo.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    shadow: true,
    variant: SearchPanelVariant.checkbox
  },
  render: args => <StatefulSearchPanel {...args} initialSelected={choices} />
}`,...qo.parameters?.docs?.source}}},Jo.parameters={...Jo.parameters,docs:{...Jo.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    maximumHeight: 120,
    small: true,
    variant: SearchPanelVariant.checkbox,
    width: 400
  },
  render: args => <StatefulSearchPanel {...args} initialSelected={choices} />
}`,...Jo.parameters?.docs?.source}}},Yo.parameters={...Yo.parameters,docs:{...Yo.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    noChoiceItem,
    shadow: true,
    variant: SearchPanelVariant.radio
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Yo.parameters?.docs?.source}}},Xo.parameters={...Xo.parameters,docs:{...Xo.parameters?.docs,source:{originalSource:`{
  args: {
    chips: true,
    noChoiceItem,
    variant: SearchPanelVariant.checkbox,
    width: 300
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Xo.parameters?.docs?.source}}},Zo.parameters={...Zo.parameters,docs:{...Zo.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: true,
    variant: SearchPanelVariant.link
  },
  render: args => <StatefulSearchPanel {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByPlaceholderText("Search"));
    await userEvent.click(canvas.getByText("A choice"));
    await expect(args.onSelectionChange).toHaveBeenCalledWith([choices[0]]);
  }
}`,...Zo.parameters?.docs?.source}}},Qo.parameters={...Qo.parameters,docs:{...Qo.parameters?.docs,source:{originalSource:`{
  args: {
    small: true,
    variant: SearchPanelVariant.link
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...Qo.parameters?.docs?.source}}},$o.parameters={...$o.parameters,docs:{...$o.parameters?.docs,source:{originalSource:`{
  args: {
    float: true,
    maximumHeight: 100,
    shadow: true,
    variant: SearchPanelVariant.link,
    width: 350
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...$o.parameters?.docs?.source}}},es.parameters={...es.parameters,docs:{...es.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    shadow: true,
    variant: SearchPanelVariant.link
  },
  render: args => <StatefulSearchPanel {...args} />
}`,...es.parameters?.docs?.source}}},ts.parameters={...ts.parameters,docs:{...ts.parameters?.docs,source:{originalSource:`{
  args: {
    clearLabel: "Clear search",
    isLoading: false,
    shadow: true,
    variant: SearchPanelVariant.link
  },
  render: args => <StatefulSearchPanel {...args} initialValue="Default input" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Search");
    await expect(input).toHaveValue("Default input");
    await expect(canvas.getByTitle("Clear search")).toBeInTheDocument();
    await userEvent.click(canvas.getByTitle("Clear search"));
    await expect(input).toHaveValue("");
    await userEvent.type(input, "Default input");
    await expect(canvas.getByTitle("Clear search")).toBeInTheDocument();
  }
}`,...ts.parameters?.docs?.source}}},ns.parameters={...ns.parameters,docs:{...ns.parameters?.docs,source:{originalSource:`{
  args: {
    clearLabel: "Clear search",
    isLoading: false,
    shadow: true,
    small: true,
    variant: SearchPanelVariant.link
  },
  render: args => <StatefulSearchPanel {...args} initialValue="Default input" />
}`,...ns.parameters?.docs?.source}}}})))()}is();export{ts as ClearButton,ns as ClearButtonSmall,Vo as Default,Xo as DefaultWithWidth,$o as FloatingResults,Zo as LinkVariant,Qo as LinkVariantSmall,es as LoadingIndicator,Wo as MultiSelect,Go as MultiSelectWithNone,qo as PreselectedChoices,Jo as PreselectedSmall,Uo as Shadow,Yo as SingleSelectNone,Ho as Small,Ko as SmallWithMultiSelect,rs as __namedExportsOrder,Bo as default};