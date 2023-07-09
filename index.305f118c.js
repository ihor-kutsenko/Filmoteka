!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},e.parcelRequired7c6=i);var r,a=i("6JpON"),o={};window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
r=function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,s,i,r,a=Object.prototype.hasOwnProperty;for(i=1,r=arguments.length;i<r;i+=1)for(s in n=arguments[i])a.call(n,s)&&(t[s]=n[s]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var s=n(2),i=n(17),r=n(6);t.exports=function(t,e,n){s(t)?i(t,e,n):r(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var s;for(s in n=n||null,t)if(t.hasOwnProperty(s)&&!1===e.call(n,t[s],s,t))break}},function(t,e,n){"use strict";var s=n(18),i=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&s(n,t),e.hasOwnProperty("static")&&(i(n,e.static),delete e.static),i(n.prototype,e),n}},function(t,e,n){"use strict";var s=n(2);t.exports=function(t,e,n){var i,r;if(n=n||0,!s(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,i=n;n>=0&&i<r;i+=1)if(e[i]===t)return i;return-1}},function(t,e,n){"use strict";var s=n(29),i=n(30),r=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),i=r(t)?t(e):s(t,e);return n.innerHTML=i,n.firstChild},bind:function(t,e){var n,s=Array.prototype.slice;return t.bind?t.bind.apply(t,s.call(arguments,1)):(n=s.call(arguments,2),function(){return t.apply(e,n.length?n.concat(s.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var s=n(13),i=n(7),r=n(0),a=n(1),o=n(20),l=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},c=i({init:function(t,e){this._options=r({},u,e),this._currentPage=0,this._view=new o(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,s="prev"===t;return this._options.centerAlign?s?e-1:e+n:s?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),s=this._getPageIndex(t),i=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=s>1,e.nextMore=s<i,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,s,i=this._getLastPage(),r=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(s=Math.floor(r/2),(n=(e=Math.max(t-s,1))+r-1)>i&&(e=Math.max(i-r+1,1),n=i)):(e=(a-1)*r+1,n=a*r,n=Math.min(n,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});s.mixin(c),t.exports=c},function(t,e,n){"use strict";var s=n(0),i=n(14),r=n(4),a=n(16),o=n(2),l=n(5),u=n(3),c=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){s(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;i(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var s=this._safeEvent(t);this._memorizeContext(n),s.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var s=this;r(t)?(t=t.split(c),u(t,(function(t){s._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){s.on(e,t,n)})))},p.prototype.once=function(t,e,n){var s=this;if(a(t))return n=e,void u(t,(function(t,e){s.once(e,t,n)}));this.on(t,(function i(){e.apply(n,arguments),s.off(t,i,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,s=0;if(o(t))for(n=t.length;s<n;s+=1)!0===e(t[s])&&(t.splice(s,1),n-=1,s-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var s=t===n.handler;return s&&e._forgetContext(n.context),s}},p.prototype._matchContext=function(t){var e=this;return function(n){var s=t===n.context;return s&&e._forgetContext(n.context),s}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(s){var i=t===s.handler,r=e===s.context,a=i&&r;return a&&n._forgetContext(s.context),a}},p.prototype._offByEventName=function(t,e){var n=this,s=l(e),i=n._matchHandler(e);t=t.split(c),u(t,(function(t){var e=n._safeEvent(t);s?n._spliceMatches(e,i):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,s=this;this._indexOfContext(t)<0?u(t,(function(t,e){s.off(e,t)})):r(e)?(n=this._matchContext(t),s._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){s._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){s._spliceMatches(t,n)})))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,s,i;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),s=0;e[s];){if(!1===(i=e[s]).handler.apply(i.context,n))return!1;s+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var s=n(1),i=n(15);t.exports=function(t){return!s(t)&&!i(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var s=0,i=t.length;for(n=n||null;s<i&&!1!==e.call(n,t[s],s,t);s+=1);}},function(t,e,n){"use strict";var s=n(19);t.exports=function(t,e){var n=s(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var s=n(3),i=n(7),r=n(21),a=n(22),o=n(24),l=n(25),u=n(0),c=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=i({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(c(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){s(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){s(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){s(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,s=t.leftPageNumber,i=t.rightPageNumber;for(n=s;n<=i;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==s||t.prevMore||l(e,this._firstItemClassName),n!==i||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,s,i=r(e);o(e),(s=this._getButtonType(i))||(n=this._getPageNumber(i)),t(s,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return s(n,(function(n,s){return!f.isContained(t,n)||(e=s,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,s=this._enabledPageElements.length;n<s;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],s(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var s=n(4),i=n(3),r=n(23);function a(t,e,n,s){function a(e){n.call(s||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,s){var a=r(t,e),o=!1;i(a,(function(t){return t.handler!==n||(o=!0,!1)})),o||a.push({handler:n,wrappedHandler:s})}(t,e,n,a)}t.exports=function(t,e,n,r){s(e)?i(e.split(/\s+/g),(function(e){a(t,e,n,r)})):i(e,(function(e,s){a(t,s,e,n)}))}},function(t,e,n){"use strict";var s="_feEventKey";t.exports=function(t,e){var n,i=t[s];return i||(i=t[s]={}),(n=i[e])||(n=i[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var s=n(3),i=n(8),r=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,l=[];o?s(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),s(n,(function(t){i(t,l)<0&&l.push(t)})),a(t,l))}},function(t,e,n){"use strict";var s=n(1);t.exports=function(t){return t&&t.className?s(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var s=n(2),i=n(1);t.exports=function(t,e){e=(e=s(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var s=n(8),i=n(3),r=n(2),a=n(4),o=n(0),l=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,c=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v=2,m={if:function(t,e,n){var s=function(t,e){var n=[t],s=[],r=0,a=0;return i(e,(function(t,i){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),s.push(e.slice(a,i)),a=i+1)})),s.push(e.slice(a)),{exps:n,sourcesInsideIf:s}}(t,e),r=!1,a="";return i(s.exps,(function(t,e){return(r=x(t,n))&&(a=P(s.sourcesInsideIf[e],n)),!r})),a},each:function(t,e,n){var s=x(t,n),a=r(s)?"@index":"@key",l={},u="";return i(s,(function(t,s){l[a]=s,l["@this"]=t,o(n,l),u+=P(e.slice(),n)})),u},with:function(t,e,n){var i=s("as",t),r=t[i+1],a=x(t.slice(0,i),n),l={};return l[r]=a,P(e,o(n,l))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,s,i=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)s=n.index,i.push(t.slice(r,s)),r=s+n[0].length,n=e.exec(t);return i.push(t.slice(r)),i};function y(t,e){var n,s=e[t];return"true"===t?s=!0:"false"===t?s=!1:d.test(t)?s=t.replace(h,""):u.test(t)?s=y((n=t.split(c))[0],e)[y(n[1],e)]:p.test(t)?s=y((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(s=parseFloat(t)),s}function b(t,e,n){for(var s,i,r,o,l=m[t],u=1,c=0+v,p=e[c];u&&a(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,s=c),p=e[c+=v];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(i=0,r=s,(o=e.splice(i+1,r-i)).pop(),o),n),e}function x(t,e){var n=y(t[0],e);return n instanceof Function?function(t,e,n){var s=[];return i(e,(function(t){s.push(y(t,n))})),t.apply(null,s)}(n,t.slice(1),e):n}function P(t,e){for(var n,s,i,r=1,o=t[r];a(o);)s=(n=o.split(" "))[0],m[s]?(i=b(s,t.splice(r,t.length-r),e),t=t.concat(i)):t[r]=x(n,e),o=t[r+=v];return t.join("")}t.exports=function(t,e){return P(_(t,l),e)}},function(t,e,n){"use strict";var s=n(1),i=n(31),r=6048e5;t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",o=window.localStorage.getItem(a);(s(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(t){return(new Date).getTime()-t>r}(o)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var s=n(6);t.exports=function(t,e){var n=document.createElement("img"),i="";return s(e,(function(t,e){i+="&"+e+"="+t})),i=i.substring(1),n.src=t+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},o=r();var l=i("cIxev"),u=i("X3bd8");function c(t,e){const n=[];return t.genre_ids.forEach((t=>{e.forEach((e=>{e.id===t&&n.push(e.name)}))})),n.length>2&&n.splice(2,n.length-1,"Other"),0===n.length&&n.push("Other"),n.join(", ")}function p(t,e){const{id:n,poster_path:s,title:i,release_date:r,vote_average:a}=t,o=a.toFixed(1);return`<li class="gallery__item movie-card" data-id="${n}">\n                  <div class="movie-card__poster-thumb">\n                    <img src="${t.poster_path?`https://image.tmdb.org/t/p/w300${s}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png"}"\n                        class="movie-card__poster"\n                        alt="${i}"\n                                            />\n                  </div>\n                  <div class="movie-card__wrap">\n                      <h2 class="movie-info-title"> ${i}</h2>\n                      <div class="movie-info-list">\n                      <p class="info-item-genre">${e}</p>\n                        <span class="info-item-slash"> | </span>\n                        <p class="info-item-year">${new Date(Date.parse(r)).getFullYear()||""}</p>\n                        <span class="info-item-vote">${o}</span>\n                      </div>\n                  </div>\n            </li>`}var f=i("dKhQL"),d=i("ddUeE");const h=t=>{const e=t?.id,n=t?.title;let s=t?.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",i=[];t.genres.forEach((t=>{i.push(t.name)})),i=i.join(", ");let r="";t?.release_date&&(r=t.release_date?.length?t?.release_date.slice(0,4):"");let a=0;t?.vote_average&&(a=t.vote_average.toFixed(2));return{title:n,posterUrl:s,genres:i,year:r,id:e,noImage:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",vote_average:a}};var g=i("d1Qha"),v=(u=i("X3bd8"),i("hcgbf")),m=(d=i("ddUeE"),i("2doPt"));a=i("6JpON");const _=new(0,u.ThemoviedbAPI);function y(t){const e=t.childNodes,n=[...e];return e.forEach((t=>t.addEventListener("click",b))),n}function b(e){e.preventDefault();let n=[];[...e.currentTarget.children].forEach((t=>n.push([...t.children]))),n=n.flatMap((t=>t)),(e.target===e.currentTarget||[...e.currentTarget.children].includes(e.target)||n.includes(e.target))&&async function(e){const n=await function(t,e){return e.find((e=>e.dataset.id===t.currentTarget.dataset.id))}(e,N),s=n.dataset.id;try{(0,d.spinnerPlay)(),_.fetchMovieById(s).then((t=>{const e=t,n=e.poster_path?`https://image.tmdb.org/t/p/w300${e.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",i=new Date(Date.parse(e.release_date)).getFullYear(),r={id:e.id,poster:n,title:e.title.replaceAll("'","`"),originalTitle:e.original_title.replaceAll("'","`"),genres:[],popularity:e.popularity.toFixed(1),overview:e.overview.replaceAll("'","`"),vote_average:e.vote_average.toFixed(1),vote_count:e.vote_count,release_date:i};e.genres.forEach((t=>{r.genres.push(t.name)})),r.genres=r.genres.join(", ");JSON.stringify(r);const a=h(e);(0,v.save)("modalInfo",a),(0,g.createModalMarkUp)(r,a),(0,m.getTrailer)(s,_);const o=document.querySelector(".lightbox-modal__watched-button"),l=document.querySelector(".lightbox-modal__queque-button");P("watched",a,o,"Added to watched"),P("queue",a,l,"Added to queue"),o.addEventListener("click",x),l.addEventListener("click",x)}))}catch(e){t(a).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,d.spinnerStop)()}}(e)}function x(t){!function(t,e,n){const s=(0,v.load)(e)||[];if(s.find((e=>e?.id===t)))return;const i=(0,v.load)("modalInfo");s.push(i),(0,v.save)(e,s)}(+t.target.dataset.btn,t.target.dataset.type,t.target.dataset.id),"watched"===t.target.dataset.type&&(t.target.textContent="Added to watched"),"queue"===t.target.dataset.type&&(t.target.textContent="Added to queue"),t.target.disabled=!0}function P(t,e,n,s){const i=(0,v.load)(t),r=e;i.find((t=>t.id===r.id))&&(n.textContent=`${s}`,n.disabled=!0)}const w="light-theme",M="dark-theme",E="themekey",C=document.querySelector(".theme-switch__toggle"),I=document.querySelector("body");const L=new(0,u.ThemoviedbAPI);let N=null,T=null;T=window.screen.width<=580?{totalItems:0,itemsPerPage:20,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}:{totalItems:0,itemsPerPage:20,visiblePages:7,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};const B=new(t(o))(l.refs.paginationContainer,T),O=B.getCurrentPage();try{(0,d.spinnerPlay)(),async function(){await L.fetchGenres();const t=await L.fetchFavouritesMovies(O);B.reset(t.total_results);const e=t.results.map((t=>p(t,c(t,[...L.genres])))).join("");l.refs.gallery.innerHTML=e,N=[...y(l.refs.gallery)]}(),window.addEventListener("scroll",f.scrollFunction)}catch(e){t(a).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,d.spinnerStop)()}async function S(e){const n=e.page;try{(0,d.spinnerPlay)();await L.fetchGenres();const t=(await L.fetchFavouritesMovies(n)).results.map((t=>p(t,c(t,[...L.genres])))).join("");l.refs.gallery.innerHTML=t,N=[...y(l.refs.gallery)]}catch(e){t(a).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,d.spinnerStop)()}}async function k(e){const n=e.page;try{(0,d.spinnerPlay)();const t=(await L.fetchMoviesByQuery(n)).results.map((t=>p(t,c(t,[...L.genres])))).join("");l.refs.gallery.innerHTML=t,N=[...y(l.refs.gallery)]}catch(e){t(a).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,d.spinnerStop)()}}l.refs.formEl.addEventListener("submit",(async function(e){if(e.preventDefault(),L.query=e.target.elements.search.value,!L.query)return"";try{document.querySelector(".input-error")&&document.querySelector(".input-error").remove(),(0,d.spinnerPlay)();const t=await L.fetchMoviesByQuery(O),e=t.results.map((t=>p(t,c(t,[...L.genres])))).join("");B.off("beforeMove",S),B.off("beforeMove",k),B.on("beforeMove",k),B.reset(t.total_results),l.refs.gallery.innerHTML=e,N=[...y(l.refs.gallery)],l.refs.noResultsTitle.classList.add("visually-hidden"),l.refs.noResultsImg.classList.add("visually-hidden"),0===t.total_results?(l.refs.formEl.insertAdjacentHTML("afterend",'<div class="input-error">\n       Search result not successful. Enter the correct movie name  \n      </div>'),l.refs.noResultsTitle.classList.remove("visually-hidden"),l.refs.noResultsImg.classList.remove("visually-hidden"),l.refs.paginationContainer.style.display="none"):l.refs.paginationContainer.style.display="block"}catch(e){t(a).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,d.spinnerStop)()}e.target.reset()})),B.on("beforeMove",S),B.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),l.refs.filterForm.addEventListener("submit",(function(e){e.preventDefault(),l.refs.gallery.innerHTML="";const n=l.refs.filterGenres.value,s=l.refs.filterYears.value,i=l.refs.filterLanguage.value,r=l.refs.filtersSort.value;B.getCurrentPage(),async function(e,n,s,i,r){A=e,F=n,H=s,j=i,l.refs.gallery.innerHTML="";try{(0,d.spinnerPlay)();const t=await L.fetchFilters(e,n,s,i,1),r=t.results.map((t=>p(t,c(t,[...L.genres])))).join("");l.refs.gallery.innerHTML=r,N=[...y(l.refs.gallery)],B.off("beforeMove",S),B.off("beforeMove",k),B.on("beforeMove",q),B.reset(t.total_results),l.refs.noResultsTitle.classList.add("visually-hidden"),l.refs.noResultsImg.classList.add("visually-hidden"),0===t.total_results?(l.refs.noResultsTitle.classList.remove("visually-hidden"),l.refs.noResultsImg.classList.remove("visually-hidden"),l.refs.paginationContainer.style.display="none"):l.refs.paginationContainer.style.display="block"}catch(e){t(a).Notify.failure("Oops, something went wrong")}finally{(0,d.spinnerStop)()}}(n,s,i,r)}));let A="",F="",H="",j="";async function q(e){const n=e.page;try{(0,d.spinnerPlay)();const t=(await L.fetchFilters(A,F,H,j,n)).results.map((t=>p(t,c(t,[...L.genres])))).join("");l.refs.gallery.innerHTML=t,N=[...y(l.refs.gallery)]}catch(e){t(a).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,d.spinnerStop)()}}C.addEventListener("change",(function(t){t.target.checked?(I.classList.remove("ligth-theme"),I.classList.add("dark-theme"),localStorage.setItem(E,JSON.stringify(M))):(I.classList.remove("dark-theme"),I.classList.add("ligth-theme"),localStorage.setItem(E,JSON.stringify(w)))})),function(){const t=localStorage.getItem(E);if(t){"dark-theme"===JSON.parse(t)&&(I.classList.add("dark-theme"),C.checked=!0)}else I.classList.add("ligth-theme"),localStorage.setItem(E,JSON.stringify(w))}()}();
//# sourceMappingURL=index.305f118c.js.map
