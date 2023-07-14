function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const o={library:document.querySelector(".gallery--library"),footerLink:document.querySelector(".footer__link"),footerBackDrop:document.querySelector(".footer__backdrop"),footerCloseBtn:document.querySelector("[data-modal-close]"),watchBtn:document.querySelector(".button-watched"),queueBtn:document.querySelector(".button-queue"),btnSignIn:document.querySelector(".js-signIn-btn"),btnSignOut:document.querySelector("js-signOut-btn"),btnTextSign:document.querySelector(".btn-text"),btnSignOutJs:document.querySelector(".navigation-buttons"),userStatusEl:document.querySelector(".js-userStatus"),mainContainer:document.querySelector(".main-container")};var s=r("9ECFy"),l=r("1GioC"),c=r("3TVVy"),d=r("jiL1b");function u(e,t){const{id:a,poster_path:n,title:r,release_date:i,vote_average:o}=e,s=o.toFixed(1);return`<li class="gallery__item gallery__item--library movie-card" data-id="${a}">\n                  <div class="movie-card__poster-thumb">\n                    <img src="${e.poster_path?`https://image.tmdb.org/t/p/w300${n}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png"}"\n                        class="movie-card__poster"\n                        alt="${r}"\n                                            />\n                  </div>\n                  <div class="movie-card__wrap">\n                      <h2 class="movie-info-title movie-title-library"> ${r}</h2>\n                      <div class="movie-info-list">\n                      <p class="info-item-genre">${t}</p>\n                        <span class="info-item-slash"> | </span>\n                        <p class="info-item-year">${new Date(Date.parse(i)).getFullYear()||""}</p>\n                        <span class="info-item-vote">${s}</span>\n                      </div>\n                  </div>\n            </li>`}var m=r("fm3FE"),g=r("jInTj");const y="light-theme",h="dark-theme",p="themeKeyLibrary",v=document.querySelector(".theme-switch__toggle"),f=document.querySelector("body");var b=r("4d3hh");const _=new(0,s.ThemoviedbAPI);o.watchBtn.classList.add("is-active-library");try{(0,l.spinnerPlay)(),E(),window.addEventListener("scroll",c.scrollFunction)}catch(t){e(i).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}function w(e){const t=document.querySelector(".js-title-queue"),a=document.querySelector(".js-library-bg-image"),n=document.querySelector("main");e.length>0&&(t.classList.add("visually-hidden"),a.classList.add("visually-hidden"),n.classList.remove("perspective")),0===e.length&&(t.classList.remove("visually-hidden"),a.classList.remove("visually-hidden"),n.classList.add("perspective"))}async function E(){o.library.innerHTML="";const t=(0,g.load)(_.WATCH_KEY);w(t);try{t.map((e=>e.id)).forEach((async e=>{const t=await _.fetchMovieById(e),a=t.genres.map((e=>e.name));a.length>2&&a.splice(2,a.length-1,"Other"),0===a.length&&a.push("Other"),o.library.insertAdjacentHTML("beforeend",u(t,a.join(", "))),o.library.lastElementChild.setAttribute("data-status","watched")}))}catch(t){e(i).Notify.failure("Ооps, something went wrong, please try again")}}function S(e,t,a,n,r){const i=(0,g.load)(e),o=t,s=i.find((e=>e.id===o.id));s&&(a.dataset.list=`${r}`,a.textContent=`${n}`),s||a.classList.add("visually-hidden")}o.watchBtn.addEventListener("click",(()=>{o.queueBtn.classList.remove("is-active-library"),o.watchBtn.classList.add("is-active-library"),E()})),o.queueBtn.addEventListener("click",(()=>{o.watchBtn.classList.remove("is-active-library"),o.queueBtn.classList.add("is-active-library"),async function(){(0,l.spinnerPlay)(),o.library.innerHTML="";const t=(0,g.load)(_.QUEUE_KEY);w(t);const a=t.map((e=>e.id));try{a.forEach((async e=>{const t=await _.fetchMovieById(e),a=t.genres.map((e=>e.name));a.length>2&&a.splice(2,a.length-1,"Other"),0===a.length&&a.push("Other"),o.library.insertAdjacentHTML("beforeend",u(t,a.join(", "))),o.library.lastElementChild.setAttribute("data-status","queue")}))}catch(t){console.log(t),e(i).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}}()})),o.library.addEventListener("click",(async function(t){const a=t.target.closest(".gallery__item");try{(0,l.spinnerPlay)();const e=a.dataset.id,t=a.dataset.status;await _.fetchMovieById(e).then((n=>{const r=n.poster_path?`https://image.tmdb.org/t/p/w300${n.poster_path}`:"https://astoriamuseums.org/wp-content/uploads/2020/10/OFM-poster-not-available.png",i=new Date(Date.parse(n.release_date)).getFullYear(),s={id:n.id,poster:r,title:n.title,originalTitle:n.original_title,genres:[],popularity:n.popularity.toFixed(1),overview:n.overview,vote_average:n.vote_average.toFixed(1),vote_count:n.vote_count,release_date:i};n.genres.forEach((e=>{s.genres.push(e.name)})),s.genres=s.genres.join(", "),(0,m.getTrailer)(e,_),(0,d.createModalMarkUp)(s);const l=document.querySelector(".lightbox-modal__watched-button"),c=document.querySelector(".lightbox-modal__queque-button");l.addEventListener("click",(function(e){const n=e.target.dataset.btn;(0,g.removeLocal)(_.WATCH_KEY,n),e.target.textContent="Removed from Watched",e.target.disabled=!0,e.target.dataset.list===t&&a.remove();o.watchBtn.classList.contains("is-active-library")?w((0,g.load)(_.WATCH_KEY)):w((0,g.load)(_.QUEUE_KEY))})),c.addEventListener("click",(function(e){const n=e.target.dataset.btn;(0,g.removeLocal)(_.QUEUE_KEY,n),e.target.textContent="Removed from Queue",e.target.disabled=!0,e.target.dataset.list===t&&a.remove();o.watchBtn.classList.contains("is-active-library")?w((0,g.load)(_.WATCH_KEY)):w((0,g.load)(_.QUEUE_KEY))})),S(_.WATCH_KEY,s,l,"Remove from Watched","watched"),S(_.QUEUE_KEY,s,c,"Remove from Queue","queue")}))}catch(t){console.log(t),e(i).Notify.failure("Ооps, something went wrong, please try again")}finally{(0,l.spinnerStop)()}})),v.addEventListener("change",(function(e){e.target.checked?(f.classList.add("dark-theme"),localStorage.setItem(p,JSON.stringify(h))):(f.classList.remove("dark-theme"),localStorage.setItem(p,JSON.stringify(y)))})),function(){const e=localStorage.getItem(p);if(e){const t=JSON.parse(e);f.classList.toggle("dark-theme",t===h),v.checked=t===h}else f.classList.remove("dark-theme"),localStorage.setItem(p,JSON.stringify(y)),v.checked=!1}(),(0,b.authUser)();
//# sourceMappingURL=library.15c6be4f.js.map
