(this["webpackJsonpreact-search-panel-example"]=this["webpackJsonpreact-search-panel-example"]||[]).push([[0],{10:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);n(10);var i=n(0),a=n.n(i),r=n(6),s=n.n(r),c=n(1),o=n(4),u=n.n(o),l=n(7),m=n(8),d="_styles-module__topContainer__27LcO",p="_styles-module__small__1YEqb",f="_styles-module__searchContainer__28k26",v="_styles-module__searchContainerExpanded__e0HZm",_="_styles-module__searchContainerExpandedShadow__19P_K",b="_styles-module__searchContainerShadow__K2rgg",h="_styles-module__searchIconContainer__10p4R",y="_styles-module__flexContainer__3pFk-",g="_styles-module__searchIcon__1dkPH",E="_styles-module__inputField__3_x3y",O="_styles-module__inputContainer__34uzV",j="_styles-module__inputFieldContainer__1KlJe",S="_styles-module__resultContainerCollapsed__3sdwM",w="_styles-module__resultContainer__Po5pr",C="_styles-module__resultListContainer__GFbgN",k="_styles-module__resultListContainerExpandedShadow__2qkdB",x="_styles-module__resultList__3JJzg",N="_styles-module__resultSeperator__2FQkt",A="_styles-module__resultListItem__255FQ",q="_styles-module__resultItem__3Hp7m",L="_styles-module__resultItemLabel__rcaln";function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,r=void 0;try{for(var s,c=e[Symbol.iterator]();!(i=(s=c.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){a=!0,r=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw r}}return n}}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var F=function(e,t){for(var n=e.target;n;){var i;if(null===(i=n.classList)||void 0===i?void 0:i.contains(t))return!0;n=n.parentElement}return!1},R=function(e){return document.documentElement.clientWidth<=e.clientX||document.documentElement.clientHeight<=e.clientY},J=function(e){return!(!e.includes("touch")||!function(){if("undefined"==typeof window||"function"!=typeof window.addEventListener)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){return null};return window.addEventListener("test",n,t),window.removeEventListener("test",n,t),e}())&&{passive:!0}},U=i.useLayoutEffect,z=function(e){var t=Object(i.useRef)(e);return U((function(){t.current=e})),t},V=new Map([["Win","Meta"],["Scroll","ScrollLock"],["Spacebar"," "],["Down","ArrowDown"],["Left","ArrowLeft"],["Right","ArrowRight"],["Up","ArrowUp"],["Del","Delete"],["Crsel","CrSel"],["Exsel","ExSel"],["Apps","ContextMenu"],["Esc","Escape"],["Decimal","."],["Multiply","*"],["Add","+"],["Subtract","-"],["Divide","/"]]),H=function(e,t){var n=z(e),a=z(t);Object(i.useEffect)((function(){var e=function(e){var t;!function(e){if(V.has(e.key)){var t=V.get(e.key);Object.defineProperty(e,"key",{get:function(){return t}})}}(e),(t=n.current,Array.isArray(t)?t:[t]).includes(e.key)&&a.current(e)};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[])},T=function(e){var t=e.choices,n=e.isMultiSelect,a=e.isSelectionOptional,r=e.noChoiceItem,s=e.onChange,o=e.onSelectionChange,P=e.placeholder,D=e.shadow,U=e.small,z=e.value,V=Object(i.useState)(!1),T=Object(c.a)(V,2),B=T[0],G=T[1],K=Object(i.useState)([]),W=Object(c.a)(K,2),Q=W[0],Y=W[1],X=Object(i.useRef)(null),Z=function(){X.current&&X.current.blur(),G(!1)},$=function(){t.length&&G(!0)},ee=function(e,t){var n=t.indexOf(e);n>-1&&t.splice(n,1)},te=function(e,t){var i=e.target,s=Object(m.a)(Q),c=!1;i.checked?function(e,t){n||t.splice(0,t.length),t.push(e)}(t,s):ee(t,s),a&&(r&&t===r.key?i.checked&&(s=[t],c=!0):r&&ee(r.key,s)),Y(s),o(c?[]:s)},ne=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:t.length&&G(!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(e){var t=e.choice,a="choice_".concat(t.key,"_").concat(Math.random()),r="radio";return n&&(r="checkbox"),Object(i.createElement)("div",{className:"".concat(q," ").concat(U?p:"")},Object(i.createElement)("input",{id:a,name:"ChoiceGroup",type:r,onChange:function(e){return te(e,t.key)},value:t.key,checked:Q.indexOf(t.key)>-1}),Object(i.createElement)("label",{htmlFor:a,className:L},t.description))},ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.refs,a=t.disabled,r=void 0!==a&&a,s=t.eventTypes,c=void 0===s?["mousedown","touchstart"]:s,o=t.excludeScrollbar,u=void 0!==o&&o,l=t.ignoreClass,m=void 0===l?"ignore-onclickoutside":l,d=Object(i.useRef)(e),p=Object(i.useState)([]),f=M(p,2),v=f[0],_=f[1];Object(i.useEffect)((function(){d.current=e}),[e]);var b=Object(i.useCallback)((function(e){_((function(t){return[].concat(I(t),[{current:e}])}))}),[]);return Object(i.useEffect)((function(){if((null==n?void 0:n.length)||v.length){var e=function(e){if(!F(e,m)){var t=[];(n||v).forEach((function(e){var n=e.current;n&&t.push(n)})),u&&R(e)||t.length&&t.every((function(t){return!t.contains(e.target)}))&&d.current(e)}},t=function(){c.forEach((function(t){document.removeEventListener(t,e,J(t))}))};if(!r)return c.forEach((function(t){document.addEventListener(t,e,J(t))})),function(){t()};t()}}),[v,m,u,r,JSON.stringify(c)]),b}(Z);return H("Escape",Z),Object(i.createElement)("form",{className:"\n        ".concat(d,"\n        ").concat(U?p:"","\n      "),ref:ae,onFocus:$,onSubmit:function(e){e.preventDefault(),$()}},Object(i.createElement)("div",{className:"\n            ".concat(f,"\n            ").concat(B?v:"","\n            ").concat(B&&D?_:"","\n            ").concat(U?p:"","\n            ").concat(D?b:"","\n          ")},Object(i.createElement)("div",{className:y},Object(i.createElement)("div",{className:h},Object(i.createElement)("span",{className:g},Object(i.createElement)("svg",{focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(i.createElement)("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))),Object(i.createElement)("div",{className:O},Object(i.createElement)("div",{className:j}),Object(i.createElement)("input",{ref:X,className:"".concat(E," ").concat(U?p:""),type:"text","aria-autocomplete":"both","aria-haspopup":"false",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",role:"combobox",spellCheck:"false",title:P,"aria-label":P,"aria-controls":"ResultContainer","aria-expanded":B,placeholder:P,onChange:ne,value:z})))),Object(i.createElement)("div",{id:"ResultContainer",className:"\n          ".concat(w,"\n          ").concat(B?"":S,"\n        ")},Object(i.createElement)("fieldset",{id:"ChoiceGroup",className:"\n            ".concat(C,"\n            ").concat(B&&D?k:"","\n            ").concat(U?p:"","\n          ")},Object(i.createElement)("div",{className:N}),Object(i.createElement)("ul",{className:x,role:"listbox"},a&&r&&Object(i.createElement)("li",{key:r.key,className:A,role:"presentation"},Object(i.createElement)(ie,{choice:r})),t.map((function(e){return Object(i.createElement)("li",{key:e.key,className:A,role:"presentation"},Object(i.createElement)(ie,{choice:e}))}))))))},B=(n(16),{container:{margin:"auto",maxWidth:"650px",padding:"40px"},constrained:{}}),G=[{key:"choice1",description:"A choice"},{key:"choice2",description:"Another choice"},{key:"choice3",description:"A third choice"}],K={key:"none",description:"None"},W=function(){var e=a.a.useState(""),t=Object(c.a)(e,2),n=t[0],i=t[1],r=a.a.useState([]),s=Object(c.a)(r,2)[1];return a.a.createElement("div",{style:B.container},a.a.createElement("h1",null,"A demonstration of react-search-panel"),a.a.createElement("p",null,"This is a demonstration of react-search-panel:"),a.a.createElement("div",{style:B.constrained},a.a.createElement(T,{choices:G,isMultiSelect:!0,isSelectionOptional:!0,onChange:function(e){return i(e.target.value)},onSelectionChange:function(e){return s(e)},noChoiceItem:K,placeholder:"Search",shadow:!0,small:!0,value:n})),a.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales erat quis enim maximus euismod. Sed viverra eget nisl in auctor. Proin tempus nisl sit amet nunc rhoncus, et imperdiet nisi vestibulum. Praesent tempus interdum sem. Morbi auctor nulla et nibh consequat sodales. Suspendisse et tristique turpis. Praesent sagittis commodo dolor et pretium. Etiam ut eros id felis porta tristique. Sed elementum erat vel rutrum laoreet. Ut at volutpat erat. Donec sit amet mauris ultrices, pulvinar orci sed, dignissim ipsum. Sed nec odio eu tortor condimentum accumsan."),a.a.createElement("p",null,"Ut gravida libero elit, lacinia gravida nunc placerat vitae. Morbi pellentesque lacus ac ipsum cursus, eu euismod ex rutrum. Nunc vel finibus diam. Aenean feugiat cursus lacus, at dapibus lorem tristique ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tristique orci nisi. Phasellus sit amet blandit risus, at suscipit purus. Morbi iaculis sapien augue, ac dapibus velit fermentum sit amet."),a.a.createElement("p",null,"Sed interdum maximus placerat. Proin iaculis, leo sit amet vehicula pretium, dui tortor euismod felis, eu maximus ex ante ac eros. Integer tincidunt risus vitae fermentum ornare. Nulla arcu nisl, dignissim id est vitae, imperdiet egestas tortor. Nulla porta, nisi a finibus tristique, turpis elit placerat libero, ac imperdiet nisi sapien sed nisl. Mauris at feugiat risus. Sed efficitur convallis sapien. Praesent maximus aliquam mi, in commodo ipsum consectetur vitae. Sed porta in turpis vitae laoreet. Donec sodales rutrum orci, vitae tincidunt lacus tincidunt vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ante purus, accumsan vitae eleifend id, accumsan et metus. Ut facilisis mauris eget elit ultricies, et consequat eros congue. Nullam tempus rutrum dolor, sit amet vulputate felis ornare vel."),a.a.createElement("p",null,"Curabitur euismod magna sed massa fringilla sagittis. Etiam sed dui rhoncus, tempor justo non, sodales dui. Pellentesque vulputate aliquam risus, sed pulvinar enim molestie gravida. Suspendisse eros lectus, dictum et bibendum id, iaculis ac est. Mauris luctus orci quam, commodo iaculis lectus venenatis non. Vivamus sollicitudin sem eget erat pretium tincidunt. Vestibulum bibendum semper risus eget tincidunt. Etiam quis libero non orci pharetra sagittis vel a felis. Maecenas lobortis consectetur sem ac lobortis. Nulla ornare urna vel dolor convallis blandit."),a.a.createElement("p",null,"Vivamus dictum lacus nec quam egestas, sit amet tempus eros dignissim. Sed malesuada risus sit amet risus tempus mattis. Nunc fermentum ex vel consectetur ultricies. Suspendisse velit neque, auctor pellentesque ante et, ultricies feugiat elit. In et est iaculis, venenatis urna in, tristique tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate elit urna, id fringilla ligula facilisis ultricies."))};s.a.render(a.a.createElement(W,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.fe95ad0b.chunk.js.map