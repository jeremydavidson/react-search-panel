(this["webpackJsonpreact-search-panel-example"]=this["webpackJsonpreact-search-panel-example"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},20:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=n(2),l=n.n(i),s=n(5),u=n(3),f=n(17),d=n.n(f),m=n(18),p="_styles-module__topContainer__27LcO",h="_styles-module__small__1YEqb",_="_styles-module__searchContainer__28k26",v="_styles-module__searchContainerExpanded__e0HZm",y="_styles-module__searchContainerExpandedShadow__19P_K",E="_styles-module__searchContainerShadow__K2rgg",b="_styles-module__searchIconContainer__10p4R",w="_styles-module__flexContainer__3pFk-",g="_styles-module__searchIcon__1dkPH",k="_styles-module__inputField__3_x3y",S="_styles-module__inputContainer__34uzV",C="_styles-module__inputFieldContainer__1KlJe",x="_styles-module__resultContainer__Po5pr",O="_styles-module__resultListContainer__GFbgN",j="_styles-module__resultListContainerExpandedShadow__2qkdB",A="_styles-module__resultList__3JJzg",L="_styles-module__resultSeperator__2FQkt",N="_styles-module__resultListItem__255FQ",I="_styles-module__resultItem__3Hp7m",M="_styles-module__resultItemLabel__rcaln";function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(a=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}}(e,t)||T(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e){return function(e){if(Array.isArray(e))return z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||T(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var D=function(e,t){for(var n=e.target;n;){var a;if(null===(a=n.classList)||void 0===a?void 0:a.contains(t))return!0;n=n.parentElement}return!1},J=function(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY},P=function(e){return!(!e.includes("touch")||!function(){if("undefined"==typeof window||"function"!=typeof window.addEventListener)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){return null};return window.addEventListener("test",n,t),window.removeEventListener("test",n,t),e}())&&{passive:!0}},B=a.useLayoutEffect,H=function(e){var t=Object(a.useRef)(e);return B((function(){t.current=e})),t},V=new Map([["Win","Meta"],["Scroll","ScrollLock"],["Spacebar"," "],["Down","ArrowDown"],["Left","ArrowLeft"],["Right","ArrowRight"],["Up","ArrowUp"],["Del","Delete"],["Crsel","CrSel"],["Exsel","ExSel"],["Apps","ContextMenu"],["Esc","Escape"],["Decimal","."],["Multiply","*"],["Add","+"],["Subtract","-"],["Divide","/"]]),q=function(e,t){var n=H(e),r=H(t);Object(a.useEffect)((function(){var e=function(e){var t;!function(e){if(V.has(e.key)){var t=V.get(e.key);Object.defineProperty(e,"key",{get:function(){return t}})}}(e),(t=n.current,Array.isArray(t)?t:[t]).includes(e.key)&&r.current(e)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[])},G=function(e){var t=e.choices,n=e.isMultiSelect,o=e.isSelectionOptional,c=e.noChoiceItem,i=e.onChange,f=e.onSelectionChange,d=e.placeholder,T=e.shadow,z=e.small,B=e.value,H=r.a.useState(!1),V=Object(u.a)(H,2),G=V[0],K=V[1],U=r.a.useState([]),W=Object(u.a)(U,2),Q=W[0],Y=W[1],Z=r.a.useRef(null);Object(a.useEffect)((function(){Y([])}),[t]);var X=function(){Z.current&&Z.current.blur(),K(!1)},$=function(){t.length&&K(!0)},ee=function(e,t){var n=t.indexOf(e);n>-1&&t.splice(n,1)},te=function(e,t){var a=e.target,r=Object(m.a)(Q),i=!1;a.checked?function(e,t){n||t.splice(0,t.length),t.push(e)}(t,r):ee(t,r),o&&(c&&t===c.key?a.checked&&(r=[t],i=!0):c&&ee(c.key,r)),Y(r),f&&f(i?[]:r)},ne=function(){var e=Object(s.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(n);case 2:t.length&&K(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ae=function(e){var t=e.choice,a="choice_".concat(t.key,"_").concat(Math.random()),o="radio";return n&&(o="checkbox"),r.a.createElement("div",{className:"".concat(I," ").concat(z?h:"")},r.a.createElement("input",{id:a,name:"ChoiceGroup",tabIndex:0,type:o,onChange:function(e){return te(e,t.key)},value:t.key,checked:Q.indexOf(t.key)>-1}),r.a.createElement("label",{htmlFor:a,className:M},t.description))},re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.refs,r=t.disabled,o=void 0!==r&&r,c=t.eventTypes,i=void 0===c?["mousedown","touchstart"]:c,l=t.excludeScrollbar,s=void 0!==l&&l,u=t.ignoreClass,f=void 0===u?"ignore-onclickoutside":u,d=Object(a.useRef)(e),m=Object(a.useState)([]),p=F(m,2),h=p[0],_=p[1];Object(a.useEffect)((function(){d.current=e}),[e]);var v=Object(a.useCallback)((function(e){_((function(t){return[].concat(R(t),[{current:e}])}))}),[]);return Object(a.useEffect)((function(){if((null==n?void 0:n.length)||h.length){var e=function(e){if(!D(e,f)){var t=[];(n||h).forEach((function(e){var n=e.current;n&&t.push(n)})),s&&J(e)||t.length&&t.every((function(t){return!t.contains(e.target)}))&&d.current(e)}},t=function(){i.forEach((function(t){document.removeEventListener(t,e,P(t))}))};if(!o)return i.forEach((function(t){document.addEventListener(t,e,P(t))})),function(){t()};t()}}),[h,f,s,o,JSON.stringify(i)]),v}(X);return q("Escape",X),r.a.createElement("form",{className:"\n        ".concat(p,"\n        ").concat(z?h:"","\n      "),ref:re,onFocus:$,onBlur:function(){},onSubmit:function(e){e.preventDefault(),$()}},r.a.createElement("div",{className:"\n            ".concat(_,"\n            ").concat(G?v:"","\n            ").concat(G&&T?y:"","\n            ").concat(z?h:"","\n            ").concat(T?E:"","\n          ")},r.a.createElement("div",{className:w},r.a.createElement("div",{className:b},r.a.createElement("span",{className:g},r.a.createElement("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),r.a.createElement("div",{className:S},r.a.createElement("div",{className:C}),r.a.createElement("input",{ref:Z,className:"".concat(k," ").concat(z?h:""),type:"text","aria-autocomplete":"both","aria-haspopup":"false",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",role:"combobox",spellCheck:"false",title:d,"aria-label":d,"aria-controls":"ResultContainer","aria-expanded":G,placeholder:d,onChange:ne,value:B})))),G&&r.a.createElement("div",{id:"ResultContainer",className:x},r.a.createElement("fieldset",{id:"ChoiceGroup",className:"\n            ".concat(O,"\n            ").concat(T?j:"","\n            ").concat(z?h:"","\n          ")},r.a.createElement("div",{className:L}),r.a.createElement("ul",{className:A,role:"listbox"},o&&c&&r.a.createElement("li",{key:c.key,className:N,role:"presentation"},r.a.createElement(ae,{choice:c})),t.map((function(e){return r.a.createElement("li",{key:e.key,className:N,role:"presentation"},r.a.createElement(ae,{choice:e}))}))))))},K=(n(43),{container:{margin:"auto",maxWidth:"650px",padding:"40px"}}),U=function(){var e=r.a.useState(""),t=Object(u.a)(e,2),n=t[0],o=t[1],c=r.a.useState([]),i=Object(u.a)(c,2),f=i[0],m=i[1],p=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Search: "+n),t=[],!(n.length>=3)){e.next=11;break}return a="".concat("http://api.tvmaze.com/search/shows?q=").concat(n),e.next=6,d()(a);case 6:return r=e.sent,e.next=9,r.data;case 9:e.sent.forEach((function(e){var n={key:e.show.id,description:e.show.name};t.push(n)}));case 11:m(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[n]),r.a.createElement("div",{style:K.container},r.a.createElement("h1",null,"A demonstration of react-search-panel"),r.a.createElement("p",null,"This is a demonstration of react-search-panel:"),r.a.createElement("div",null,r.a.createElement(G,{choices:f,isMultiSelect:!0,isSelectionOptional:!0,onChange:function(e){var t=e.target;o(t.value)},placeholder:"Search TV shows",small:!0,value:n})),r.a.createElement("p",null,"This demonstration searches for TV shows when you type at least ",3," characters. It uses the public ",r.a.createElement("a",{href:"http://www.tvmaze.com/api#show-search"},"TVMAZE API"),"."))};c.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.766557c2.chunk.js.map