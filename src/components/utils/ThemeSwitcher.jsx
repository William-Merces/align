// src/components/utils/ThemeSwitcher.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/theme/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <Sun className="w-6 h-6 text-yellow-500" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <Moon className="w-6 h-6 text-blue-500" />
        </motion.div>
      </div>

      {/* Tooltip */}
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;