// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import LanguageSwitcher from '../utils/LanguageSwitcher';
import ThemeSwitcher from '../utils/ThemeSwitcher';
import { useBreakpoint } from '../../utils/deviceHelpers';

const Header = () => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={isScrolled ? '/align-logo-dark.svg' : '/align-logo.svg'}
              alt="Align Logo"
              className="h-8 w-auto dark:hidden"
            />
            <img
              src={isScrolled ? '/align-logo-light.svg' : '/align-logo-white.svg'}
              alt="Align Logo"
              className="h-8 w-auto hidden dark:block"
            />
          </Link>

          {/* Navigation */}
          <Navigation />

          {/* Right Section */}
          <div className="flex items-center space-x-2">
            {/* Language & Theme Switchers */}
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>

            {/* CTA Button - Hidden on mobile */}
            {breakpoint !== 'xs' && breakpoint !== 'sm' && (
              <Link
                to="/contact"
                className="btn btn-primary ml-4"
              >
                {t('common.cta.talkToExpert')}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {/* Mobile menu implementation here */}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;