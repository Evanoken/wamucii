/**
 * Content-protection deterrents: blocks right-click, copy/cut, text selection,
 * image dragging and save/view-source/print shortcuts.
 * Note: these deter casual copying only — screenshots and devtools cannot be
 * blocked by any web page.
 */
export function installProtection() {
  const prevent = (e: Event) => e.preventDefault();

  document.addEventListener('contextmenu', prevent);
  document.addEventListener('copy', prevent);
  document.addEventListener('cut', prevent);
  document.addEventListener('dragstart', prevent);
  document.addEventListener('selectstart', prevent);

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ['c', 'x', 's', 'u', 'p'].includes(k)) {
      e.preventDefault();
    }
  });
}
