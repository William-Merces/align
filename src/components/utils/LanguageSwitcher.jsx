// LanguageSwitcher.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

/**
 * Configuração dos idiomas suportados pela aplicação
 * Cada idioma contém:
 * @property {string} code - Código ISO do idioma
 * @property {string} name - Nome do idioma em inglês
 * @property {string} nativeName - Nome do idioma em sua própria língua
 * @property {string} flag - Emoji da bandeira do país
 * @property {string} region - Nome da região/país
 */
const SUPPORTED_LANGUAGES = [
  { 
    code: 'pt', 
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    region: 'Brasil'
  },
  { 
    code: 'en', 
    name: 'English',
    nativeName: 'English',
    flag: '🇺🇸',
    region: 'United States'
  },
  { 
    code: 'es', 
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    region: 'España'
  }
];

/**
 * LanguageSwitcher Component
 * 
 * Componente responsável por gerenciar a mudança de idiomas na aplicação.
 * Implementa um dropdown acessível com suporte a navegação por teclado e
 * integração com o sistema de tradução i18next.
 */
const LanguageSwitcher = () => {
  // Estados locais
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  // Refs
  const dropdownRef = useRef(null);
  
  // Hooks
  const { i18n, t } = useTranslation();
  const { setCurrentLanguage, setIsLoading } = useApp();

  /**
   * Atualiza o idioma em toda a aplicação
   * @param {string} langCode - Código do idioma a ser configurado
   */
  const updateLanguage = useCallback(async (langCode) => {
    try {
      setIsLoading(true);

      // Atualiza o idioma no i18next
      await i18n.changeLanguage(langCode);
      
      // Atualiza metadados do documento
      document.documentElement.lang = langCode;
      document.documentElement.setAttribute('lang', langCode);
      
      // Persiste a preferência do usuário
      localStorage.setItem('i18nextLng', langCode);
      
      // Atualiza o contexto global da aplicação
      setCurrentLanguage(langCode);
      
      // Dispara eventos de mudança de idioma
      window.dispatchEvent(new Event('languageChange'));
      document.dispatchEvent(new CustomEvent('languageChanged', { detail: langCode }));
      
    } catch (error) {
      console.error('Error changing language:', error);
    } finally {
      setIsLoading(false);
    }
  }, [i18n, setCurrentLanguage, setIsLoading]);

  /**
   * Inicializa o idioma selecionado baseado no i18n
   */
  useEffect(() => {
    const currentLang = SUPPORTED_LANGUAGES.find(lang => lang.code === i18n.language) 
      || SUPPORTED_LANGUAGES[0];
    setSelectedLanguage(currentLang);
  }, [i18n.language]);

  /**
   * Gerencia cliques fora do dropdown para fechá-lo
   */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Gerencia teclas de atalho para o dropdown
   */
  useEffect(() => {
    const handleKeyboard = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
      
      // Se o dropdown estiver aberto e uma tecla de seta for pressionada
      if (isOpen && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
        event.preventDefault();
        
        const currentIndex = SUPPORTED_LANGUAGES.findIndex(
          lang => lang.code === selectedLanguage.code
        );
        
        let nextIndex;
        if (event.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
        } else {
          nextIndex = (currentIndex - 1 + SUPPORTED_LANGUAGES.length) % SUPPORTED_LANGUAGES.length;
        }
        
        handleLanguageSelect(SUPPORTED_LANGUAGES[nextIndex]);
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [isOpen, selectedLanguage]);

  /**
   * Manipula a seleção de um novo idioma
   * @param {Object} language - Objeto contendo as informações do idioma selecionado
   */
  const handleLanguageSelect = async (language) => {
    await updateLanguage(language.code);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  // Não renderiza nada até ter um idioma selecionado
  if (!selectedLanguage) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão do dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 
                  dark:hover:bg-gray-800 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('common.buttons.selectLanguage')}
      >
        <Globe className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {selectedLanguage.flag} {selectedLanguage.name}
        </span>
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-56 rounded-lg bg-white dark:bg-gray-800 
                     shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="listbox"
          aria-label={t('common.buttons.languageSelection')}
        >
          <div className="py-1">
            {SUPPORTED_LANGUAGES.map((language) => {
              const isSelected = selectedLanguage.code === language.code;
              
              return (
                <button
                  key={language.code}
                  className={`
                    w-full text-left px-4 py-2 text-sm
                    ${isSelected 
                      ? 'bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50' 
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                    flex items-center justify-between group
                  `}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleLanguageSelect(language)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg" aria-hidden="true">
                      {language.flag}
                    </span>
                    <div>
                      <p className="font-medium">{language.nativeName}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {language.region}
                      </p>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <Check 
                      className="h-4 w-4 text-primary-600 dark:text-primary-400" 
                      aria-hidden="true" 
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;