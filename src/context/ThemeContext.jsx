import { createContext, useContext, useEffect, useState } from 'react';

const PALETTE_STORAGE_KEY = 'portfolio-palette';
const MODE_STORAGE_KEY = 'portfolio-mode';
const DIRECTION_STORAGE_KEY = 'portfolio-direction';

const PALETTES = ['modern', 'classic'];
const MODES = ['light', 'dark'];

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [palette, setPalette] = useState('modern');
  const [mode, setMode] = useState('light');
  const [direction, setDirection] = useState('ltr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedPalette = window.localStorage.getItem(PALETTE_STORAGE_KEY);
    const savedMode = window.localStorage.getItem(MODE_STORAGE_KEY);
    const savedDirection = window.localStorage.getItem(DIRECTION_STORAGE_KEY);

    if (PALETTES.includes(savedPalette)) {
      setPalette(savedPalette);
    }
    if (MODES.includes(savedMode)) {
      setMode(savedMode);
    }
    if (savedDirection === 'rtl' || savedDirection === 'ltr') {
      setDirection(savedDirection);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.toggle('palette-modern', palette === 'modern');
    root.classList.toggle('palette-classic', palette === 'classic');
    root.classList.toggle('mode-light', mode === 'light');
    root.classList.toggle('mode-dark', mode === 'dark');
    root.setAttribute('dir', direction);
    root.style.direction = direction;

    window.localStorage.setItem(PALETTE_STORAGE_KEY, palette);
    window.localStorage.setItem(MODE_STORAGE_KEY, mode);
    window.localStorage.setItem(DIRECTION_STORAGE_KEY, direction);
  }, [palette, mode, direction, mounted]);

  const togglePalette = () =>
    setPalette((prev) => (prev === 'modern' ? 'classic' : 'modern'));
  const toggleMode = () =>
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  const toggleDirection = () =>
    setDirection((prev) => (prev === 'ltr' ? 'rtl' : 'ltr'));

  return (
    <ThemeContext.Provider
      value={{
        palette,
        mode,
        direction,
        togglePalette,
        toggleMode,
        toggleDirection,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
