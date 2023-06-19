const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'themeKeyLibrary';

export const libraryCheckBox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');

export function onChange(event) {
  if (event.target.checked) {
    body.classList.add('dark-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
  } else {
    body.classList.remove('dark-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  }
}

export function isTheme() {
  const saveTheme = localStorage.getItem(STORAGE_KEY);

  if (!saveTheme) {
    body.classList.remove('dark-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
    libraryCheckBox.checked = false;
  } else {
    const parseTheme = JSON.parse(saveTheme);
    body.classList.toggle('dark-theme', parseTheme === Theme.DARK);
    libraryCheckBox.checked = parseTheme === Theme.DARK;
  }
}
