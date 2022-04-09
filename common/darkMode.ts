export const toggleMode = () => {
  const isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    || document.querySelector('html')?.getAttribute?.('class') === 'dark';
  if (isDarkMode) setCurrentMode(false);
  else setCurrentMode(true);
}

export const setCurrentMode = (isDarkMode: boolean) => {
  const htmlNode = document.querySelector('html');
  if (isDarkMode) {
    htmlNode?.setAttribute?.('class', 'dark');
    return;
  }
  htmlNode?.setAttribute('class', '');
}

export const useDarkMode = () => {
  if (typeof window === "undefined") return;
  const isDarkMode = window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
  setCurrentMode(isDarkMode);
  window?.matchMedia('(prefers-color-scheme: dark)')?.addEventListener('change', (e) => {
    setCurrentMode(e.matches);
  });
}
