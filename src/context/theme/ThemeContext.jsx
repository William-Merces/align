// src/context/theme/ThemeContext.jsx
import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};