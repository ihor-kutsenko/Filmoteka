!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");const s={library:document.querySelector(".gallery--library"),footerLink:document.querySelector(".footer__link"),footerBackDrop:document.querySelector(".footer__backdrop"),footerCloseBtn:document.querySelector("[data-modal-close]"),watchBtn:document.querySelector(".button-watched"),queueBtn:document.querySelector(".button-queue")};var o=r("X3bd8"),l=r("ddUeE"),c=r("dKhQL"),d=r("d1Qha");function u(e,t){const{id:a,poster_path:n,title:r,release_date:i,vote_average:s}=e,o=s.toFixed(1);return`<li class="gallery__item gallery__item--library movie-card" data-id="${a}">\n                  <div class="movie-card__poster-thumb">\n                    <img src="${e.poster_path?`https://image.tmdb.org/t/p/w300${n}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png"}"\n                        class="movie-card__poster"\n                        alt="${r}"\n                                            />\n                  </div>\n                  <div class="movie-card__wrap">\n                      <h2 class="movie-info-title movie-title-library"> ${r}</h2>\n                      <div class="movie-info-list">\n                      <p class="info-item-genre">${t}</p>\n                        <span class="info-item-slash"> | </span>\n                        <p class="info-item-year">${new Date(Date.parse(i)).getFullYear()||""}</p>\n                        <span class="info-item-vote">${o}</span>\n                      </div>\n                  </div>\n            </li>`}var m=r("2doPt"),p=r("hcgbf");const g="light-theme",h="dark-theme",y="themeKeyLibrary",v=document.querySelector(".theme-switch__toggle"),f=document.querySelector("body");const b=new(0,o.ThemoviedbAPI);s.watchBtn.classList.add("is-active-library");try{(0,l.spinnerPlay)(),w(),window.addEventListener("scroll",c.scrollFunction)}catch(t){e(i).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}function _(e){const t=document.querySelector(".js-title-queue"),a=document.querySelector(".js-library-bg-image"),n=document.querySelector("main");e.length>0&&(t.classList.add("visually-hidden"),a.classList.add("visually-hidden"),n.classList.remove("perspective")),0===e.length&&(t.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),n.classList.add("perspective"))}async function w(){s.library.innerHTML="";const t=(0,p.load)(b.WATCH_KEY);_(t);try{t.map((e=>e.id)).forEach((async e=>{const t=await b.fetchMovieById(e),a=t.genres.map((e=>e.name));a.length>2&&a.splice(2,a.length-1,"Other"),0===a.length&&a.push("Other"),s.library.insertAdjacentHTML("beforeend",u(t,a.join(", "))),s.library.lastElementChild.setAttribute("data-status","watched")}))}catch(t){e(i).Notify.failure("Ооps, something went wrong, please try again")}}function E(e,t,a,n,r){const i=(0,p.load)(e),s=t,o=i.find((e=>e.id===s.id));o&&(a.dataset.list=`${r}`,a.textContent=`${n}`),o||a.classList.add("visually-hidden")}s.watchBtn.addEventListener("click",(()=>{s.queueBtn.classList.remove("is-active-library"),s.watchBtn.classList.add("is-active-library"),w()})),s.queueBtn.addEventListener("click",(()=>{s.watchBtn.classList.remove("is-active-library"),s.queueBtn.classList.add("is-active-library"),async function(){(0,l.spinnerPlay)(),s.library.innerHTML="";const t=(0,p.load)(b.QUEUE_KEY);_(t);const a=t.map((e=>e.id));try{a.forEach((async e=>{const t=await b.fetchMovieById(e),a=t.genres.map((e=>e.name));a.length>2&&a.splice(2,a.length-1,"Other"),0===a.length&&a.push("Other"),s.library.insertAdjacentHTML("beforeend",u(t,a.join(", "))),s.library.lastElementChild.setAttribute("data-status","queue")}))}catch(t){console.log(t),e(i).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}}()})),s.library.addEventListener("click",(async function(t){const a=t.target.closest(".gallery__item");try{(0,l.spinnerPlay)();const e=a.dataset.id,t=a.dataset.status;await b.fetchMovieById(e).then((n=>{const r=n.poster_path?`https://image.tmdb.org/t/p/w300${n.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",i=new Date(Date.parse(n.release_date)).getFullYear(),o={id:n.id,poster:r,title:n.title,originalTitle:n.original_title,genres:[],popularity:n.popularity.toFixed(1),overview:n.overview,vote_average:n.vote_average.toFixed(1),vote_count:n.vote_count,release_date:i};n.genres.forEach((e=>{o.genres.push(e.name)})),o.genres=o.genres.join(", "),(0,m.getTrailer)(e,b),(0,d.createModalMarkUp)(o);const l=document.querySelector(".lightbox-modal__watched-button"),c=document.querySelector(".lightbox-modal__queque-button");l.addEventListener("click",(function(e){const n=e.target.dataset.btn;(0,p.removeLocal)(b.WATCH_KEY,n),e.target.textContent="Removed from Watched",e.target.disabled=!0,e.target.dataset.list===t&&a.remove();s.watchBtn.classList.contains("is-active-library")?_((0,p.load)(b.WATCH_KEY)):_((0,p.load)(b.QUEUE_KEY))})),c.addEventListener("click",(function(e){const n=e.target.dataset.btn;(0,p.removeLocal)(b.QUEUE_KEY,n),e.target.textContent="Removed from Queue",e.target.disabled=!0,e.target.dataset.list===t&&a.remove();s.watchBtn.classList.contains("is-active-library")?_((0,p.load)(b.WATCH_KEY)):_((0,p.load)(b.QUEUE_KEY))})),E(b.WATCH_KEY,o,l,"Remove from Watched","watched"),E(b.QUEUE_KEY,o,c,"Remove from Queue","queue")}))}catch(t){console.log(t),e(i).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}})),v.addEventListener("change",(function(e){e.target.checked?(f.classList.add("dark-theme"),localStorage.setItem(y,JSON.stringify(h))):(f.classList.remove("dark-theme"),localStorage.setItem(y,JSON.stringify(g)))})),function(){const e=localStorage.getItem(y);if(e){const t=JSON.parse(e);f.classList.toggle("dark-theme",t===h),v.checked=t===h}else f.classList.remove("dark-theme"),localStorage.setItem(y,JSON.stringify(g)),v.checked=!1}()}();
//# sourceMappingURL=library.9348eb70.js.map
