import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { formMarcupCreator } from './authModal';
import { refs } from './refs';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyBQVwgoD-GUyRS29TAgEJOAJL2BPX4EPvk',
  authDomain: 'filmoteka-42310.firebaseapp.com',
  projectId: 'filmoteka-42310',
  storageBucket: 'filmoteka-42310.appspot.com',
  messagingSenderId: '829466975577',
  appId: '1:829466975577:web:e47c64fd924a0ec98c0048',
  measurementId: 'G-FDQ051EE6H',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const auth = getAuth(app);

function ifUserOff() {
  refs.userStatusEl.textContent = 'You are not logged';
  refs.btnSignIn.addEventListener('click', onClickSingIn);
  refs.btnTextSign.textContent = 'Sign In';
  refs.btnSignIn.querySelector('.icon-in').classList.remove('visually-hidden');
  refs.btnSignIn.querySelector('.icon-out').classList.add('visually-hidden');
}

function ifUserOn() {
  refs.userStatusEl.textContent = 'Hello user';
  refs.btnSignIn.addEventListener('click', onClickSingOut);
  refs.btnTextSign.textContent = 'Sign Out';
  if (window.innerWidth >= 768) {
    refs.btnSignOutJs.style.right = '51px';
  }
  refs.btnSignIn.querySelector('.icon-in').classList.add('visually-hidden');
  refs.btnSignIn.querySelector('.icon-out').classList.remove('visually-hidden');
}

function ifUser() {
  const user = localStorage.getItem(`USER`);
  if (user) {
    return JSON.parse(user);
  } else {
    return;
  }
}

function authUser() {
  if (ifUser() === undefined) {
    return ifUserOff();
  } else {
    return ifUserOn();
  }
}

function onClickSingIn() {
  // marcupClear();
  formMarcupCreator(refs.mainContainer);

  const forms = {
    formLogin: document.querySelector(`.form-login`),
    formSignup: document.querySelector(`.form-signup`),
  };

  forms.formLogin.addEventListener(`submit`, onSubmitLogin);
  forms.formSignup.addEventListener(`submit`, onSubmitSingup);
}

function closeSignInForm() {
  let forms = ``;
  forms = document.querySelector(`.forms`);
  if (forms) {
    forms.remove();
  } else {
    return;
  }
}

async function onSubmitLogin(e) {
  e.preventDefault();

  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);

  const log = await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user.uid;
      localStorage.setItem(`USER`, JSON.stringify(user));
      return user;
    })
    .catch(function (error) {
      if (error.code === `auth/user-not-found`) {
        return Notiflix.Notify.failure(`you need to singup`);
      } else if (error.code === `auth/wrong-password`) {
        return Notiflix.Notify.failure(`wrong password`);
      } else if (error.code === `auth/network-request-failed`) {
        return Notiflix.Notify.failure(`network request failed`);
      }
      console.log(error.code);
      alert(error.message);
    });

  if (log) {
    authUser();
    location.reload();
  }
}

async function onSubmitSingup(e) {
  e.preventDefault();
  const data = new FormData(this);
  const email = data.get(`email`);
  const password = data.get(`password`);
  const passwordRepeat = data.get(`password_repeat`);

  if (password !== passwordRepeat) {
    return Notiflix.Notify.failure(`password problem`);
  }
  console.log(email, password);

  const log = await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user.uid;
      localStorage.setItem(`USER`, JSON.stringify(user));
      return user;
    })
    .catch(function (error) {
      if (error.code === `auth/weak-password`) {
        return Notiflix.Notify.failure(`password is too short`);
      } else if (error.code === `auth/email-already-in-use`) {
        return Notiflix.Notify.failure(`you are already registered`);
      }
      console.log(error.code);
      console.log(error.message);
    });
  if (log) {
    authUser();
    location.reload();
  }
}

async function onClickSingOut() {
  const out = await signOut(auth)
    .then(res => {
      localStorage.removeItem(`USER`);
      return res;
    })
    .then(() => {
      authUser();
      location.reload();
    })
    .catch(error => {});
}

// function marcupClear() {
//   closeSignInForm();
//   refs.mostWached.textContent = ``;
//   refs.newVideo.textContent = ``;
//   refs.films.innerHTML = ``;
//   refs.videos.innerHTML = ``;
// }

export { ifUser, authUser, closeSignInForm };
