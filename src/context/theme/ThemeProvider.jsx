// src/context/theme/ThemeProvider.jsx
import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import { lightTheme } from '../../themes/lightTheme';
import { darkTheme } from '../../themes/darkTheme';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check if user has theme preference saved
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Apply theme classes to root element
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    // Save theme preference
    localStorage.setItem('theme', theme);
    // Apply theme variables
    const themeColors = theme === 'dark' ? darkTheme : lightTheme;
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};