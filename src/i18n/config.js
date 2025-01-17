// src/i18n/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import moment from 'moment';

// Importação dos locales do moment
import 'moment/locale/pt';
import 'moment/locale/es';

// Importação dos recursos de tradução
import enCommon from './translations/en/common.json';
import esCommon from './translations/es/common.json';
import ptCommon from './translations/pt/common.json';

/**
 * Configurações de pluralização para cada idioma
 * Cada idioma pode ter regras diferentes para plural
 */
const pluralRules = {
  pt: {
    numbers: [1, 2],
    plurals: (n) => Number(n > 1)
  },
  en: {
    numbers: [1, 2],
    plurals: (n) => Number(n !== 1)
  },
  es: {
    numbers: [1, 2],
    plurals: (n) => Number(n !== 1)
  }
};

/**
 * Formatos de data/hora personalizados para cada idioma
 * Inclui formatos curtos e longos seguindo padrões locais
 */
const dateTimeFormats = {
  pt: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  es: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }
  }
};

/**
 * Formatos numéricos para cada idioma
 * Inclui configurações para moeda e porcentagem
 */
const numberFormats = {
  pt: {
    currency: {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  },
  en: {
    currency: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  },
  es: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    percent: {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  }
};

/**
 * Configuração principal do i18n
 * Inicializa o sistema de internacionalização com todas as configurações necessárias
 */
i18n
  // Carrega traduções de forma assíncrona
  .use(Backend)
  // Detecta idioma do usuário
  .use(LanguageDetector)
  // Inicializa o React-i18next
  .use(initReactI18next)
  .init({
    // Recursos iniciais de tradução
    resources: {
      en: { 
        common: enCommon,
        translation: enCommon  // Namespace padrão para compatibilidade
      },
      es: { 
        common: esCommon,
        translation: esCommon
      },
      pt: { 
        common: ptCommon,
        translation: ptCommon
      }
    },

    // Configurações de idioma
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'es'],
    defaultNS: 'common',
    
    // Configurações de detecção de idioma
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 60 * 24 * 365, // 1 ano
      cookieDomain: process.env.NODE_ENV === 'production' ? 'align.com' : 'localhost'
    },

    // Configurações de interpolação
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        // Formatação de texto
        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        if (format === 'capitalize') return value.charAt(0).toUpperCase() + value.slice(1);
        
        // Formatação de data
        if (value instanceof Date) {
          const options = dateTimeFormats[lng][format] || dateTimeFormats[lng].short;
          return new Intl.DateTimeFormat(lng, options).format(value);
        }
        
        // Formatação numérica
        if (typeof value === 'number') {
          const options = numberFormats[lng][format] || {};
          return new Intl.NumberFormat(lng, options).format(value);
        }
        
        return value;
      }
    },

    // Configurações de pluralização
    pluralResolver: {
      rules: pluralRules,
      numbers: {
        pt: [1, 2],
        en: [1, 2],
        es: [1, 2]
      }
    },

    // Configurações React
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span']
    },

    // Configurações de backend
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
      allowMultiLoading: false,
      crossDomain: false
    },

    // Debug em desenvolvimento
    debug: process.env.NODE_ENV === 'development',

    // Configurações de desempenho
    load: 'languageOnly',
    preload: ['pt', 'en', 'es'],
    keySeparator: '.',
    nsSeparator: ':',
  });

/**
 * Configuração do moment.js e atualização do DOM quando o idioma é alterado
 */
i18n.on('languageChanged', (lng) => {
  // Atualiza o locale do moment.js
  moment.locale(lng);
  
  // Atualiza atributos do documento para suporte a RTL e acessibilidade
  document.dir = i18n.dir(lng);
  document.documentElement.lang = lng;
  
  // Configurações específicas para português
  if (lng === 'pt') {
    moment.updateLocale('pt', {
      months: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      weekdays: [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
        'Quinta-feira', 'Sexta-feira', 'Sábado'
      ]
    });
  }
});

/**
 * Funções auxiliares para formatação
 */

/**
 * Formata um valor para moeda de acordo com o idioma
 * @param {number} value - Valor a ser formatado
 * @param {string} lng - Código do idioma (opcional)
 * @returns {string} Valor formatado como moeda
 */
export const formatCurrency = (value, lng = i18n.language) => {
  return new Intl.NumberFormat(lng, numberFormats[lng].currency).format(value);
};

/**
 * Formata um valor para porcentagem de acordo com o idioma
 * @param {number} value - Valor a ser formatado
 * @param {string} lng - Código do idioma (opcional)
 * @returns {string} Valor formatado como porcentagem
 */
export const formatPercent = (value, lng = i18n.language) => {
  return new Intl.NumberFormat(lng, numberFormats[lng].percent).format(value);
};

/**
 * Formata uma data de acordo com o idioma
 * @param {Date} date - Data a ser formatada
 * @param {string} format - Formato desejado ('short' ou 'long')
 * @param {string} lng - Código do idioma (opcional)
 * @returns {string} Data formatada
 */
export const formatDate = (date, format = 'short', lng = i18n.language) => {
  const options = dateTimeFormats[lng][format];
  return new Intl.DateTimeFormat(lng, options).format(date);
};

// Exporta a instância configurada do i18n
export default i18n;