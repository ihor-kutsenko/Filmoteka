import { refs } from './refs';

// ---------------------------------------------------------
// we use pagination.on('afterMove', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }); instead scrollPage
// -------------------------------------------------------------

// export function scrollPage() {
//   const { height: cardHeight } = document
//     .querySelector('.gallery')
//     .firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// }

export function scrollFunction() {
  refs.btnUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    refs.btnUpWrapper.style.display = 'flex';
  } else {
    refs.btnUpWrapper.style.display = 'none';
  }
}