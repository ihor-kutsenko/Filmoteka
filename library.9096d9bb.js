!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var i=n("bpxeT"),o=n("2TvXO");n("6JpON");var s={library:document.querySelector(".gallery--library"),footerLink:document.querySelector(".footer__link"),footerBackDrop:document.querySelector(".footer__backdrop"),footerCloseBtn:document.querySelector("[data-modal-close]"),watchBtn:document.querySelector(".button-watched"),queueBtn:document.querySelector(".button-queue")},c=n("X3bd8"),l=n("ddUeE"),d=n("dKhQL"),u=n("d1Qha");function p(e,t){var a=e.id,r=e.poster_path,n=e.title,i=e.release_date,o=e.vote_average.toFixed(1),s=e.poster_path?"https://image.tmdb.org/t/p/w300".concat(r):"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",c=new Date(Date.parse(i)).getFullYear()||"";return'<li class="gallery__item gallery__item--library movie-card" data-id="'.concat(a,'">\n                  <div class="movie-card__poster-thumb">\n                    <img src="').concat(s,'"\n                        class="movie-card__poster"\n                        alt="').concat(n,'"\n                                            />\n                  </div>\n                  <div class="movie-card__wrap">\n                      <h2 class="movie-info-title movie-title-library"> ').concat(n,'</h2>\n                      <div class="movie-info-list">\n                      <p class="info-item-genre">').concat(t,'</p>\n                        <span class="info-item-slash"> | </span>\n                        <p class="info-item-year">').concat(c,'</p>\n                        <span class="info-item-vote">').concat(o,"</span>\n                      </div>\n                  </div>\n            </li>")}var v=n("2doPt"),f=n("hcgbf"),h="light-theme",m="dark-theme",g="themeKeyLibrary",y=document.querySelector(".theme-switch__toggle"),b=document.querySelector("body");var _=new(0,c.ThemoviedbAPI);s.watchBtn.classList.add("is-active-library");try{(0,l.spinnerPlay)(),E(),window.addEventListener("scroll",d.scrollFunction)}catch(e){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}function w(e){var t=document.querySelector(".js-title-queue"),a=document.querySelector(".js-library-bg-image"),r=document.querySelector("main");e.length>0&&(t.classList.add("visually-hidden"),a.classList.add("visually-hidden"),r.classList.remove("perspective")),0===e.length&&(t.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),r.classList.add("perspective"))}function E(){return L.apply(this,arguments)}function L(){return L=e(i)(e(o).mark((function t(){var a;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.library.innerHTML="",w(a=(0,f.load)(_.WATCH_KEY));try{a.map((function(e){return e.id})).forEach(function(){var t=e(i)(e(o).mark((function t(a){var r,n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.fetchMovieById(a);case 2:r=e.sent,(n=r.genres.map((function(e){return e.name}))).length>2&&n.splice(2,n.length-1,"Other"),0===n.length&&n.push("Other"),s.library.insertAdjacentHTML("beforeend",p(r,n.join(", "))),s.library.lastElementChild.setAttribute("data-status","watched");case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(e){Notify.failure("Ооps, something went wrong, please try again")}case 4:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}function q(){return q=e(i)(e(o).mark((function t(){var a,r;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,l.spinnerPlay)(),s.library.innerHTML="",w(a=(0,f.load)(_.QUEUE_KEY)),r=a.map((function(e){return e.id}));try{r.forEach(function(){var t=e(i)(e(o).mark((function t(a){var r,n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.fetchMovieById(a);case 2:r=e.sent,(n=r.genres.map((function(e){return e.name}))).length>2&&n.splice(2,n.length-1,"Other"),0===n.length&&n.push("Other"),s.library.insertAdjacentHTML("beforeend",p(r,n.join(", "))),s.library.lastElementChild.setAttribute("data-status","queue");case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(e){console.log(e),Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}case 6:case"end":return t.stop()}}),t)}))),q.apply(this,arguments)}function k(){return(k=e(i)(e(o).mark((function t(a){var r,n,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.target.closest(".gallery__item"),e.prev=1,(0,l.spinnerPlay)(),n=r.dataset.id,i=r.dataset.status,e.next=7,_.fetchMovieById(n).then((function(e){var t=e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",a=new Date(Date.parse(e.release_date)).getFullYear(),o={id:e.id,poster:t,title:e.title,originalTitle:e.original_title,genres:[],popularity:e.popularity.toFixed(1),overview:e.overview,vote_average:e.vote_average.toFixed(1),vote_count:e.vote_count,release_date:a};e.genres.forEach((function(e){o.genres.push(e.name)})),o.genres=o.genres.join(", "),(0,v.getTrailer)(n,_),(0,u.createModalMarkUp)(o);var c=document.querySelector(".lightbox-modal__watched-button"),l=document.querySelector(".lightbox-modal__queque-button");c.addEventListener("click",(function(e){var t=e.target.dataset.btn;(0,f.removeLocal)(_.WATCH_KEY,t),e.target.textContent="Removed from Watched",e.target.disabled=!0,e.target.dataset.list===i&&r.remove();s.watchBtn.classList.contains("is-active-library")?w((0,f.load)(_.WATCH_KEY)):w((0,f.load)(_.QUEUE_KEY))})),l.addEventListener("click",(function(e){var t=e.target.dataset.btn;(0,f.removeLocal)(_.QUEUE_KEY,t),e.target.textContent="Removed from Queue",e.target.disabled=!0,e.target.dataset.list===i&&r.remove();s.watchBtn.classList.contains("is-active-library")?w((0,f.load)(_.WATCH_KEY)):w((0,f.load)(_.QUEUE_KEY))})),S(_.WATCH_KEY,o,c,"Remove from Watched","watched"),S(_.QUEUE_KEY,o,l,"Remove from Queue","queue")}));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),Notify.failure("Ооps, something went wrong, please try again");case 13:return e.prev=13,(0,l.spinnerStop)(),e.finish(13);case 16:case"end":return e.stop()}}),t,null,[[1,9,13,16]])})))).apply(this,arguments)}function S(e,t,a,r,n){var i=(0,f.load)(e),o=t,s=i.find((function(e){return e.id===o.id}));s&&(a.dataset.list="".concat(n),a.textContent="".concat(r)),s||a.classList.add("visually-hidden")}s.watchBtn.addEventListener("click",(function(){s.queueBtn.classList.remove("is-active-library"),s.watchBtn.classList.add("is-active-library"),E()})),s.queueBtn.addEventListener("click",(function(){s.watchBtn.classList.remove("is-active-library"),s.queueBtn.classList.add("is-active-library"),function(){q.apply(this,arguments)}()})),s.library.addEventListener("click",(function(e){return k.apply(this,arguments)})),y.addEventListener("change",(function(e){e.target.checked?(b.classList.add("dark-theme"),localStorage.setItem(g,JSON.stringify(m))):(b.classList.remove("dark-theme"),localStorage.setItem(g,JSON.stringify(h)))})),function(){var e=localStorage.getItem(g);if(e){var t=JSON.parse(e);b.classList.toggle("dark-theme",t===m),y.checked=t===m}else b.classList.remove("dark-theme"),localStorage.setItem(g,JSON.stringify(h)),y.checked=!1}()}();
//# sourceMappingURL=library.9096d9bb.js.map
