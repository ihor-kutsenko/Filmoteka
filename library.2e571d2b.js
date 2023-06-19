var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("7Y9D8");const r={library:document.querySelector(".gallery--library"),footerLink:document.querySelector(".footer__link"),footerBackDrop:document.querySelector(".footer__backdrop"),footerCloseBtn:document.querySelector("[data-modal-close]"),watchBtn:document.querySelector(".button-watched"),queueBtn:document.querySelector(".button-queue")};var i=n("9ECFy"),s=n("1GioC"),o=n("3TVVy"),l=n("jiL1b");function c(e,t){const{id:a,poster_path:n,title:r,release_date:i,vote_average:s}=e,o=s.toFixed(1);return`<li class="gallery__item gallery__item--library movie-card" data-id="${a}">\n                  <div class="movie-card__poster-thumb">\n                    <img src="${e.poster_path?`https://image.tmdb.org/t/p/w300${n}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png"}"\n                        class="movie-card__poster"\n                        alt="${r}"\n                                            />\n                  </div>\n                  <div class="movie-card__wrap">\n                      <h2 class="movie-info-title movie-title-library"> ${r}</h2>\n                      <div class="movie-info-list">\n                      <p class="info-item-genre">${t}</p>\n                        <span class="info-item-slash"> | </span>\n                        <p class="info-item-year">${new Date(Date.parse(i)).getFullYear()||""}</p>\n                        <span class="info-item-vote">${o}</span>\n                      </div>\n                  </div>\n            </li>`}var d=n("fm3FE"),u=n("jInTj");const m="light-theme",y="dark-theme",h=document.querySelector(".theme-switch__toggle"),p=document.querySelector(".cloak");const g=new(0,i.ThemoviedbAPI);r.watchBtn.classList.add("is-active-library");try{(0,s.spinnerPlay)(),f(),window.addEventListener("scroll",o.scrollFunction)}catch(e){Notify.failure("Ооps, something went wrong, please try again")}finally{(0,s.spinnerStop)()}function v(e){const t=document.querySelector(".js-title-queue"),a=document.querySelector(".js-library-bg-image"),n=document.querySelector("main");e.length>0&&(t.classList.add("visually-hidden"),a.classList.add("visually-hidden"),n.classList.remove("perspective")),0===e.length&&(t.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),n.classList.add("perspective"))}async function f(){r.library.innerHTML="";const e=(0,u.load)(g.WATCH_KEY);v(e);try{e.map((e=>e.id)).forEach((async e=>{const t=await g.fetchMovieById(e),a=t.genres.map((e=>e.name));a.length>2&&a.splice(2,a.length-1,"Other"),0===a.length&&a.push("Other"),r.library.insertAdjacentHTML("beforeend",c(t,a.join(", "))),r.library.lastElementChild.setAttribute("data-status","watched")}))}catch(e){Notify.failure("Ооps, something went wrong, please try again")}}function b(e,t,a,n,r){const i=(0,u.load)(e),s=t,o=i.find((e=>e.id===s.id));o&&(a.dataset.list=`${r}`,a.textContent=`${n}`),o||a.classList.add("visually-hidden")}r.watchBtn.addEventListener("click",(()=>{r.queueBtn.classList.remove("is-active-library"),r.watchBtn.classList.add("is-active-library"),f()})),r.queueBtn.addEventListener("click",(()=>{r.watchBtn.classList.remove("is-active-library"),r.queueBtn.classList.add("is-active-library"),async function(){(0,s.spinnerPlay)(),r.library.innerHTML="";const e=(0,u.load)(g.QUEUE_KEY);v(e);const t=e.map((e=>e.id));try{t.forEach((async e=>{const t=await g.fetchMovieById(e),a=t.genres.map((e=>e.name));a.length>2&&a.splice(2,a.length-1,"Other"),0===a.length&&a.push("Other"),r.library.insertAdjacentHTML("beforeend",c(t,a.join(", "))),r.library.lastElementChild.setAttribute("data-status","queue")}))}catch(e){console.log(e),Notify.failure("Ооps, something went wrong, please try again")}finally{(0,s.spinnerStop)()}}()})),r.library.addEventListener("click",(async function(e){const t=e.target.closest(".gallery__item");try{(0,s.spinnerPlay)();const e=t.dataset.id,a=t.dataset.status;await g.fetchMovieById(e).then((n=>{const i=n.poster_path?`https://image.tmdb.org/t/p/w300${n.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",s=new Date(Date.parse(n.release_date)).getFullYear(),o={id:n.id,poster:i,title:n.title,originalTitle:n.original_title,genres:[],popularity:n.popularity.toFixed(1),overview:n.overview,vote_average:n.vote_average.toFixed(1),vote_count:n.vote_count,release_date:s};n.genres.forEach((e=>{o.genres.push(e.name)})),o.genres=o.genres.join(", "),(0,d.getTrailer)(e,g),(0,l.createModalMarkUp)(o);const c=document.querySelector(".lightbox-modal__watched-button"),m=document.querySelector(".lightbox-modal__queque-button");c.addEventListener("click",(function(e){const n=e.target.dataset.btn;(0,u.removeLocal)(g.WATCH_KEY,n),e.target.textContent="Removed from Watched",e.target.disabled=!0,e.target.dataset.list===a&&t.remove();r.watchBtn.classList.contains("is-active-library")?v((0,u.load)(g.WATCH_KEY)):v((0,u.load)(g.QUEUE_KEY))})),m.addEventListener("click",(function(e){const n=e.target.dataset.btn;(0,u.removeLocal)(g.QUEUE_KEY,n),e.target.textContent="Removed from Queue",e.target.disabled=!0,e.target.dataset.list===a&&t.remove();r.watchBtn.classList.contains("is-active-library")?v((0,u.load)(g.WATCH_KEY)):v((0,u.load)(g.QUEUE_KEY))})),b(g.WATCH_KEY,o,c,"Remove from Watched","watched"),b(g.QUEUE_KEY,o,m,"Remove from Queue","queue")}))}catch(e){console.log(e),Notify.failure("Ооps, something went wrong, please try again")}finally{(0,s.spinnerStop)()}})),h.addEventListener("change",(function(e){e.target.checked?(p.classList.add("cloak--dark"),localStorage.setItem("themeKeyLibrary",JSON.stringify(y))):(p.classList.remove("cloak--dark"),localStorage.setItem("themeKeyLibrary",JSON.stringify(m)))})),function(){const e=localStorage.getItem("themeKeyLibrary");if(e){const t=JSON.parse(e);"dark-theme"===t&&(p.classList.add("cloak--dark"),h.checked=!0),"light-theme"===t&&(p.classList.remove("cloak--dark"),h.checked=!1)}else p.classList.remove("cloak--dark"),localStorage.setItem("themeKeyLibrary",JSON.stringify(m)),h.checked=!1}();
//# sourceMappingURL=library.2e571d2b.js.map