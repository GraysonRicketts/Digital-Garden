export enum Mode {
  LIGHT = 1,
  DARK,
}

const sysDefaultIsDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

let currentMode = sysDefaultIsDark ? Mode.DARK : Mode.LIGHT;
const changeMode = (mode: Mode) => {
  if (mode === currentMode) {
    return;
  }

  if (mode === Mode.DARK) {
    currentMode = Mode.DARK;
    document.documentElement.classList.add("dark");
  } else {
    currentMode = Mode.LIGHT;
    document.documentElement.classList.remove("dark");
  }
};

function initalize() {
    if (localStorage.theme === "dark" || sysDefaultIsDark) {
      changeMode(Mode.DARK);
      if (!sysDefaultIsDark) {
        localStorage.theme = "dark";
      }
    } else {
      changeMode(Mode.LIGHT);
      if (sysDefaultIsDark) {
        localStorage.theme = "light";
      }
    }
}

function toggleMode() {
  if (currentMode === Mode.DARK) {
    changeMode(Mode.LIGHT);
  } else {
    changeMode(Mode.DARK);
  }
}

export { initalize, toggleMode };
