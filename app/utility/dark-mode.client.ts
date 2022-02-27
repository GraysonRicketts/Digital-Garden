export enum Mode {
  LIGHT = 1,
  DARK,
}

const THEME = "theme";
const DARK = "dark";
const LIGHT = "light";
const sysDefaultIsDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

let currentMode: Mode;

/** Utility to switch modes and handle side effects
 *
 * Changing the mode stores the theme in the local
 * store under the the `theme` key.
 */
const changeMode = (mode: Mode) => {
  if (mode === currentMode) {
    return;
  }

  if (mode === Mode.DARK) {
    currentMode = Mode.DARK;
    document.documentElement.classList.add(DARK);
    localStorage.setItem(THEME, DARK);
  } else {
    currentMode = Mode.LIGHT;
    document.documentElement.classList.remove(DARK);
    localStorage.setItem(THEME, LIGHT);
  }
};

/** Setups correct mode on page load */
function initalize() {
  const savedTheme = localStorage.getItem(THEME);
  if (savedTheme === DARK || (sysDefaultIsDark && savedTheme !== LIGHT)) {
    changeMode(Mode.DARK);
  } else {
    changeMode(Mode.LIGHT);
  }
}

/** Toggle between dark and light mode */
function toggleMode() {
  if (currentMode === Mode.DARK) {
    changeMode(Mode.LIGHT);
  } else {
    changeMode(Mode.DARK);
  }
}

export { initalize, toggleMode };
