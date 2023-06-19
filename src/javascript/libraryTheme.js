const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'themeKeyLibrary';

export const libraryCheckBox = document.querySelector('.theme-switch__toggle');
const bgEl = document.querySelector('.cloak');


export function onChange(event) {
  if (event.target.checked) {
    bgEl.classList.add('cloak--dark');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
  } else {
    bgEl.classList.remove('cloak--dark');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  }
}

export function isTheme() {
  const saveTheme = localStorage.getItem(STORAGE_KEY);

  if (!saveTheme) {
    bgEl.classList.remove('cloak--dark');

    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
    libraryCheckBox.checked = false;
  } else {
    const parseTheme = JSON.parse(saveTheme);
    if (parseTheme === 'dark-theme') {
      bgEl.classList.add('cloak--dark');
      libraryCheckBox.checked = true;
    }
    if (parseTheme === 'light-theme') {
      bgEl.classList.remove('cloak--dark');
      libraryCheckBox.checked = false;
    }
  }
}