import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
//move inline here instead
const themes = {
  light: {
    nav: 'linear-gradient(to right, #87b7ff, #fd8989)',
    background: '#ffffff0c',
  },
  dark: {
    nav: 'linear-gradient(to right, #1f0808, #010a13)',
    background: '#111111',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const toggle = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const styles = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggle, styles }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}