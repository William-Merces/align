import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import LanguageSwitcher from '../utils/LanguageSwitcher';
import ThemeSwitcher from '../utils/ThemeSwitcher';
import { useBreakpoint } from '../../utils/deviceHelpers';
import { routes } from '../../config/routes';

// Importando as imagens diretamente
import alignLogoDark from '/src/assets/align-logo-dark.png';
import alignLogoLight from '/src/assets/align-logo-light.png';
import alignLogoDefault from '/src/assets/align-logo.png';
import alignLogoWhite from '/src/assets/align-logo-white.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const breakpoint = useBreakpoint();
  const [isScrolled, setIsScrolled] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    light: false,
    dark: false
  });

  // Otimizado com useCallback para evitar recriações desnecessárias
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 20);
  }, []);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, [handleScroll]);

  // Função de debounce para otimização de performance
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handlers melhorados para carregamento e erro de imagens
  const handleImageLoad = (mode) => () => {
    console.log(`${mode} mode logo loaded successfully`);
    setImagesLoaded(prev => ({
      ...prev,
      [mode]: true
    }));
  };

  const handleImageError = (mode) => (e) => {
    console.error(`Failed to load ${mode} mode logo:`, e.target.src);
    // Tentar carregar a imagem da pasta public se o import falhar
    if (!e.target.src.includes('/public/')) {
      e.target.src = `/${mode === 'light' ?
        (isScrolled ? 'align-logo-dark.png' : 'align-logo.png') :
        (isScrolled ? 'align-logo-light.png' : 'align-logo-white.png')}`;
    }
  };

  // Sistema sofisticado de seleção de logos baseado no estado
  const getLogoUrl = (mode) => {
    if (mode === 'light') {
      return isScrolled ? alignLogoDark : alignLogoDefault;
    }
    return isScrolled ? alignLogoLight : alignLogoWhite;
  };

  const currentRoutes = routes[i18n.language] || routes.en;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`w-full transition-all duration-300 ${isScrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
          }`}
      >
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo com sistema de fallback e transições */}
            <Link
              to="/"
              className="flex items-center relative min-w-[120px] h-12"
              aria-label={t('common.logoAlt')}
            >
              {/* Container com bordas arredondadas */}
              <div className="rounded-lg overflow-hidden">
                {/* Sistema de logos com fallback para light mode */}
                <picture className="h-12 w-auto dark:hidden">
                  <source srcSet={getLogoUrl('light')} type="image/png" />
                  <img
                    src={`/align-logo${isScrolled ? '-dark' : ''}.png`}
                    alt={t('common.logoAlt')}
                    className={`h-12 w-auto object-contain transition-opacity duration-300 ${imagesLoaded.light ? 'opacity-100' : 'opacity-0'
                      }`}
                    onLoad={handleImageLoad('light')}
                    onError={handleImageError('light')}
                  />
                </picture>

                {/* Sistema de logos com fallback para dark mode */}
                <picture className="h-12 w-auto hidden dark:block">
                  <source srcSet={getLogoUrl('dark')} type="image/png" />
                  <img
                    src={`/align-logo${isScrolled ? '-light' : '-white'}.png`}
                    alt={t('common.logoAlt')}
                    className={`h-12 w-auto object-contain transition-opacity duration-300 ${imagesLoaded.dark ? 'opacity-100' : 'opacity-0'
                      }`}
                    onLoad={handleImageLoad('dark')}
                    onError={handleImageError('dark')}
                  />
                </picture>
              </div>
            </Link>

            {/* Navigation Component */}
            <Navigation />

            {/* Utility Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>

              {/* Responsive CTA Button */}
              {breakpoint !== 'xs' && breakpoint !== 'sm' && (
                <Link
                  to={currentRoutes.contact}
                  className="btn btn-primary whitespace-nowrap"
                >
                  {t('common.buttons.contact')}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {/* Mobile menu implementation here */}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;