import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

const languages = [
  { 
    code: 'pt', 
    name: 'Português', 
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

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const dropdownRef = useRef(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Encontra a linguagem atual nas opções disponíveis
    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
    setSelectedLanguage(currentLang);

    // Adiciona listener para fechar o dropdown quando clicar fora
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [i18n.language]);

  const handleLanguageSelect = (language) => {
    i18n.changeLanguage(language.code);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  if (!selectedLanguage) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {selectedLanguage.flag} {selectedLanguage.name}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => {
              const isSelected = selectedLanguage.code === language.code;
              
              return (
                <button
                  key={language.code}
                  className={`
                    w-full text-left px-4 py-2 text-sm
                    ${isSelected ? 'bg-primary-50 text-primary-900' : 'text-gray-700 hover:bg-gray-50'}
                    flex items-center justify-between group
                  `}
                  role="menuitem"
                  onClick={() => handleLanguageSelect(language)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{language.flag}</span>
                    <div>
                      <p className="font-medium">{language.nativeName}</p>
                      <p className="text-xs text-gray-500">{language.region}</p>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <Check className="h-4 w-4 text-primary-600" />
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