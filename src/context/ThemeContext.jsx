import { createContext, useContext, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'portfolio-theme';
const DIRECTION_STORAGE_KEY = 'portfolio-direction';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [direction, setDirection] = useState('ltr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const savedDirection = window.localStorage.getItem(DIRECTION_STORAGE_KEY);

    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
    if (savedDirection === 'rtl' || savedDirection === 'ltr') {
      setDirection(savedDirection);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    root.setAttribute('dir', direction);
    root.style.direction = direction;

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.localStorage.setItem(DIRECTION_STORAGE_KEY, direction);
  }, [theme, direction, mounted]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  const toggleDirection = () => setDirection((prev) => (prev === 'ltr' ? 'rtl' : 'ltr'));

  return (
    <ThemeContext.Provider
      value={{ theme, direction, toggleTheme, toggleDirection, mounted }}
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
