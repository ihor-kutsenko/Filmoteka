function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s("7Y9D8");var r,a={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,r=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,s,r,a=Object.prototype.hasOwnProperty;for(s=1,r=arguments.length;s<r;s+=1)for(i in n=arguments[s])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),s=n(17),r=n(6);t.exports=function(t,e,n){i(t)?s(t,e,n):r(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),s=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(s(n,e.static),delete e.static),s(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var s,r;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(r=e.length,s=n;n>=0&&s<r;s+=1)if(e[s]===t)return s;return-1}},function(t,e,n){var i=n(29),s=n(30),r=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),s=r(t)?t(e):i(t,e);return n.innerHTML=s,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){s("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),s=n(7),r=n(0),a=n(1),o=n(20),l=n(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},c=s({init:function(t,e){this._options=r({},u,e),this._currentPage=0,this._view=new o(t,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),s=this._getPageIndex(n),r=this._getEdge(t);return e.leftPageNumber=r.left,e.rightPageNumber=r.right,e.prevMore=i>1,e.nextMore=i<s,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,s=this._getLastPage(),r=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(r/2),(n=(e=Math.max(t-i,1))+r-1)>s&&(e=Math.max(s-r+1,1),n=s)):(e=(a-1)*r+1,n=a*r,n=Math.min(n,s)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(c),t.exports=c},function(t,e,n){var i=n(0),s=n(14),r=n(4),a=n(16),o=n(2),l=n(5),u=n(3),c=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;s(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;r(t)?(t=t.split(c),u(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,u(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void u(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function s(){e.apply(n,arguments),i.off(t,s,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(o(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var s=t===i.handler,r=e===i.context,a=s&&r;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=l(e),s=n._matchHandler(e);t=t.split(c),u(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,s):(u(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);u(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?u(t,(function(t,e){i.off(e,t)})):r(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):l(e)?(n=this._matchHandlerAndContext(e,t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),u(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){r(t)?this._offByEventName(t,e):arguments.length?l(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,s;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(s=e[i]).handler.apply(s.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),s=n(15);t.exports=function(t){return!i(t)&&!s(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,s=t.length;for(n=n||null;i<s&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),s=n(7),r=n(21),a=n(22),o=n(24),l=n(25),u=n(0),c=n(4),p=n(28),f=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=s({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=u({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(c(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,l(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,l(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,s=t.rightPageNumber;for(n=i;n<=s;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||l(e,this._firstItemClassName),n!==s||t.nextMore||l(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,s=r(e);o(e),(i=this._getButtonType(s))||(n=this._getPageNumber(s)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),s=n(3),r=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=r(t,e),o=!1;s(a,(function(t){return t.handler!==n||(o=!0,!1)})),o||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,r){i(e)?s(e.split(/\s+/g),(function(e){a(t,e,n,r)})):s(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,s=t[i];return s||(s=t[i]={}),(n=s[e])||(n=s[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),s=n(8),r=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,l=[];o?i(n,(function(e){t.classList.add(e)})):((e=r(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){s(t,l)<0&&l.push(t)})),a(t,l))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),s=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),s(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),s=n(3),r=n(2),a=n(4),o=n(0),l=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,c=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],r=0,a=0;return s(e,(function(t,s){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,s)),a=s+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),r=!1,a="";return s(i.exps,(function(t,e){return(r=x(t,n))&&(a=b(i.sourcesInsideIf[e],n)),!r})),a},each:function(t,e,n){var i=x(t,n),a=r(i)?"@index":"@key",l={},u="";return s(i,(function(t,i){l[a]=i,l["@this"]=t,o(n,l),u+=b(e.slice(),n)})),u},with:function(t,e,n){var s=i("as",t),r=t[s+1],a=x(t.slice(0,s),n),l={};return l[r]=a,b(e,o(n,l))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,s=[],r=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,s.push(t.slice(r,i)),r=i+n[0].length,n=e.exec(t);return s.push(t.slice(r)),s};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):u.test(t)?i=_((n=t.split(c))[0],e)[_(n[1],e)]:p.test(t)?i=_((n=t.split(f))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,s,r,o,l=v[t],u=1,c=2,p=e[c];u&&a(p);)0===p.indexOf(t)?u+=1:0===p.indexOf("/"+t)&&(u-=1,i=c),p=e[c+=2];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=l(e[0].split(" ").slice(1),(s=0,r=i,(o=e.splice(s+1,r-s)).pop(),o),n),e}function x(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return s(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function b(t,e){for(var n,i,s,r=1,o=t[r];a(o);)i=(n=o.split(" "))[0],v[i]?(s=y(i,t.splice(r,t.length-r),e),t=t.concat(s)):t[r]=x(n,e),o=t[r+=2];return t.join("")}t.exports=function(t,e){return b(m(t,l),e)}},function(t,e,n){var i=n(1),s=n(31);t.exports=function(t,e){var n=location.hostname,r="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(r);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(r,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||s("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),s="";return i(e,(function(t,e){s+="&"+e+"="+t})),s=s.substring(1),n.src=t+"?"+s,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},a=r();var o=s("90HKd"),l=s("9ECFy");function u(t,e){const n=[];return t.genre_ids.forEach((t=>{e.forEach((e=>{e.id===t&&n.push(e.name)}))})),n.length>2&&n.splice(2,n.length-1,"Other"),0===n.length&&n.push("Other"),n.join(", ")}function c(t,e){const{id:n,poster_path:i,title:s,release_date:r,vote_average:a}=t,o=a.toFixed(1);return`<li class="gallery__item movie-card" data-id="${n}">\n                  <div class="movie-card__poster-thumb">\n                    <img src="${t.poster_path?`https://image.tmdb.org/t/p/w300${i}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png"}"\n                        class="movie-card__poster"\n                        alt="${s}"\n                                            />\n                  </div>\n                  <div class="movie-card__wrap">\n                      <h2 class="movie-info-title"> ${s}</h2>\n                      <div class="movie-info-list">\n                      <p class="info-item-genre">${e}</p>\n                        <span class="info-item-slash"> | </span>\n                        <p class="info-item-year">${new Date(Date.parse(r)).getFullYear()||""}</p>\n                        <span class="info-item-vote">${o}</span>\n                      </div>\n                  </div>\n            </li>`}var p=s("3TVVy"),f=s("1GioC");const d=t=>{var e;const n=null==t?void 0:t.id,i=null==t?void 0:t.title;let s=(null==t?void 0:t.poster_path)?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",r=[];t.genres.forEach((t=>{r.push(t.name)})),r=r.join(", ");let a="";(null==t?void 0:t.release_date)&&(a=(null===(e=t.release_date)||void 0===e?void 0:e.length)?null==t?void 0:t.release_date.slice(0,4):"");let o=0;(null==t?void 0:t.vote_average)&&(o=t.vote_average.toFixed(2));return{title:i,posterUrl:s,genres:r,year:a,id:n,noImage:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",vote_average:o}};var h=s("jiL1b"),g=(l=s("9ECFy"),s("jInTj")),v=(f=s("1GioC"),s("fm3FE"));s("7Y9D8");const m=new(0,l.ThemoviedbAPI);function _(t){const e=t.childNodes,n=[...e];return e.forEach((t=>t.addEventListener("click",y))),n}function y(t){t.preventDefault();let e=[];[...t.currentTarget.children].forEach((t=>e.push([...t.children]))),e=e.flatMap((t=>t)),(t.target===t.currentTarget||[...t.currentTarget.children].includes(t.target)||e.includes(t.target))&&async function(t){const e=(await function(t,e){return e.find((e=>e.dataset.id===t.currentTarget.dataset.id))}(t,L)).dataset.id;try{(0,f.spinnerPlay)(),m.fetchMovieById(e).then((t=>{const n=t,i=n.poster_path?`https://image.tmdb.org/t/p/w300${n.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",s=new Date(Date.parse(n.release_date)).getFullYear(),r={id:n.id,poster:i,title:n.title.replaceAll("'","`"),originalTitle:n.original_title.replaceAll("'","`"),genres:[],popularity:n.popularity.toFixed(1),overview:n.overview.replaceAll("'","`"),vote_average:n.vote_average.toFixed(1),vote_count:n.vote_count,release_date:s};n.genres.forEach((t=>{r.genres.push(t.name)})),r.genres=r.genres.join(", ");JSON.stringify(r);const a=d(n);(0,g.save)("modalInfo",a),(0,h.createModalMarkUp)(r,a),(0,v.getTrailer)(e,m);const o=document.querySelector(".lightbox-modal__watched-button"),l=document.querySelector(".lightbox-modal__queque-button");b("watched",a,o,"Added to watched"),b("queue",a,l,"Added to queue"),o.addEventListener("click",x),l.addEventListener("click",x)}))}catch(t){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,f.spinnerStop)()}}(t)}function x(t){!function(t,e,n){const i=(0,g.load)(e)||[];if(i.find((e=>(null==e?void 0:e.id)===t)))return;const s=(0,g.load)("modalInfo");i.push(s),(0,g.save)(e,i)}(+t.target.dataset.btn,t.target.dataset.type,t.target.dataset.id),"watched"===t.target.dataset.type&&(t.target.textContent="Added to watched"),"queue"===t.target.dataset.type&&(t.target.textContent="Added to queue"),t.target.disabled=!0}function b(t,e,n,i){const s=(0,g.load)(t),r=e;s.find((t=>t.id===r.id))&&(n.textContent=`${i}`,n.disabled=!0)}const P="light-theme",w="dark-theme",M=document.querySelector(".theme-switch__toggle"),E=document.querySelector("body");const C=new(0,l.ThemoviedbAPI);let L=null;const I=new(t(a))(o.refs.paginationContainer,{totalItems:0,itemsPerPage:20,visiblePages:7,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}),T=I.getCurrentPage();try{(0,f.spinnerPlay)(),async function(){await C.fetchGenres();const t=await C.fetchFavouritesMovies(T);I.reset(t.total_results);const e=t.results.map((t=>c(t,u(t,[...C.genres])))).join("");o.refs.gallery.innerHTML=e,L=[..._(o.refs.gallery)]}(),window.addEventListener("scroll",p.scrollFunction)}catch(t){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,f.spinnerStop)()}async function N(t){const e=t.page;try{(0,f.spinnerPlay)();await C.fetchGenres();const t=(await C.fetchFavouritesMovies(e)).results.map((t=>c(t,u(t,[...C.genres])))).join("");o.refs.gallery.innerHTML=t,L=[..._(o.refs.gallery)]}catch(t){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,f.spinnerStop)()}}async function B(t){const e=t.page;try{(0,f.spinnerPlay)();const t=(await C.fetchMoviesByQuery(e)).results.map((t=>c(t,u(t,[...C.genres])))).join("");o.refs.gallery.innerHTML=t,L=[..._(o.refs.gallery)]}catch(t){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,f.spinnerStop)()}}o.refs.formEl.addEventListener("submit",(async function(t){if(t.preventDefault(),C.query=t.target.elements.search.value,!C.query)return"";try{document.querySelector(".input-error")&&document.querySelector(".input-error").remove(),(0,f.spinnerPlay)();const t=await C.fetchMoviesByQuery(T),e=t.results.map((t=>c(t,u(t,[...C.genres])))).join("");I.off("beforeMove",N),I.off("beforeMove",B),I.on("beforeMove",B),I.reset(t.total_results),o.refs.gallery.innerHTML=e,L=[..._(o.refs.gallery)],o.refs.noResultsTitle.classList.add("visually-hidden"),o.refs.noResultsImg.classList.add("visually-hidden"),0===t.total_results?(o.refs.formEl.insertAdjacentHTML("afterend",'<div class="input-error">\n       Search result not successful. Enter the correct movie name  \n      </div>'),o.refs.noResultsTitle.classList.remove("visually-hidden"),o.refs.noResultsImg.classList.remove("visually-hidden"),o.refs.paginationContainer.style.display="none"):o.refs.paginationContainer.style.display="block"}catch(t){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,f.spinnerStop)()}t.target.reset()})),I.on("beforeMove",N),I.on("afterMove",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),o.refs.filterForm.addEventListener("submit",(function(t){t.preventDefault(),o.refs.gallery.innerHTML="";const e=o.refs.filterGenres.value,n=o.refs.filterYears.value,i=o.refs.filterLanguage.value,s=o.refs.filtersSort.value;I.getCurrentPage(),async function(t,e,n,i,s){S=t,O=e,k=n,F=i,o.refs.gallery.innerHTML="";try{(0,f.spinnerPlay)();const s=await C.fetchFilters(t,e,n,i,1),r=s.results.map((t=>c(t,u(t,[...C.genres])))).join("");o.refs.gallery.innerHTML=r,L=[..._(o.refs.gallery)],I.off("beforeMove",N),I.off("beforeMove",B),I.on("beforeMove",A),I.reset(s.total_results),o.refs.noResultsTitle.classList.add("visually-hidden"),o.refs.noResultsImg.classList.add("visually-hidden"),0===s.total_results?(o.refs.noResultsTitle.classList.remove("visually-hidden"),o.refs.noResultsImg.classList.remove("visually-hidden"),o.refs.paginationContainer.style.display="none"):o.refs.paginationContainer.style.display="block"}catch(t){Notify.failure("Oops, something went wrong")}finally{(0,f.spinnerStop)()}}(e,n,i,s)}));let S="",O="",k="",F="";async function A(t){const e=t.page;try{(0,f.spinnerPlay)();const t=await C.fetchFilters(S,O,k,F,e);console.log(t);const n=t.results.map((t=>c(t,u(t,[...C.genres])))).join("");o.refs.gallery.innerHTML=n,L=[..._(o.refs.gallery)]}catch(t){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,f.spinnerStop)()}}M.addEventListener("change",(function(t){t.target.checked?(E.classList.remove("ligth-theme"),E.classList.add("dark-theme"),localStorage.setItem("themekey",JSON.stringify(w))):(E.classList.remove("dark-theme"),E.classList.add("ligth-theme"),localStorage.setItem("themekey",JSON.stringify(P)))})),function(){const t=localStorage.getItem("themekey");if(t){"dark-theme"===JSON.parse(t)&&(E.classList.add("dark-theme"),M.checked=!0)}else E.classList.add("ligth-theme"),localStorage.setItem("themekey",JSON.stringify(P))}();
//# sourceMappingURL=index.b86c3648.js.map
