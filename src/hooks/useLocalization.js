// src/hooks/useLocalization.js
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

/**
 * Configurações de formatação por região
 */
const REGION_CONFIGS = {
  pt: {
    currency: 'BRL',
    currencyFormat: {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    dateFormat: {
      short: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      },
      long: {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      },
      time: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      },
    },
    phoneFormat: /(\d{2})(\d{5})(\d{4})/,
    phoneTemplate: '($1) $2-$3',
  },
  es: {
    currency: 'EUR',
    currencyFormat: {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    dateFormat: {
      short: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      },
      long: {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      },
      time: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      },
    },
    phoneFormat: /(\d{3})(\d{3})(\d{3})/,
    phoneTemplate: '$1 $2 $3',
  },
  en: {
    currency: 'USD',
    currencyFormat: {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
    dateFormat: {
      short: {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      },
      long: {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      },
      time: {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      },
    },
    phoneFormat: /(\d{3})(\d{3})(\d{4})/,
    phoneTemplate: '($1) $2-$3',
  },
};

/**
 * Hook personalizado para internacionalização e formatação
 * @returns {Object} Objeto com funções de formatação e utilidades i18n
 */
export const useLocalization = () => {
  const { t, i18n } = useTranslation();

  /**
   * Obtém a configuração regional atual
   */
  const getRegionConfig = useCallback(() => {
    return REGION_CONFIGS[i18n.language] || REGION_CONFIGS.en;
  }, [i18n.language]);

  /**
   * Formata um valor monetário
   * @param {number} amount - Valor a ser formatado
   * @param {string} [currency] - Código da moeda (opcional)
   * @returns {string} Valor formatado
   */
  const formatCurrency = useCallback((amount, currency) => {
    const config = getRegionConfig();
    const options = {
      ...config.currencyFormat,
      ...(currency && { currency }),
    };

    try {
      return new Intl.NumberFormat(i18n.language, options).format(amount);
    } catch (error) {
      console.error('Error formatting currency:', error);
      return amount.toString();
    }
  }, [i18n.language, getRegionConfig]);

  /**
   * Formata uma data
   * @param {Date|string|number} date - Data a ser formatada
   * @param {string} [format='short'] - Formato desejado ('short', 'long', 'time')
   * @returns {string} Data formatada
   */
  const formatDate = useCallback((date, format = 'short') => {
    const config = getRegionConfig();
    const options = config.dateFormat[format] || config.dateFormat.short;

    try {
      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) throw new Error('Invalid date');
      
      return new Intl.DateTimeFormat(i18n.language, options).format(dateObj);
    } catch (error) {
      console.error('Error formatting date:', error);
      return date.toString();
    }
  }, [i18n.language, getRegionConfig]);

  /**
   * Formata um número de telefone
   * @param {string} phone - Número de telefone
   * @returns {string} Número formatado
   */
  const formatPhone = useCallback((phone) => {
    const config = getRegionConfig();
    
    try {
      const cleaned = phone.replace(/\D/g, '');
      const match = cleaned.match(config.phoneFormat);
      
      if (match) {
        return match.slice(1).reduce((str, val, idx) => {
          return str.replace(`$${idx + 1}`, val);
        }, config.phoneTemplate);
      }
      
      return phone;
    } catch (error) {
      console.error('Error formatting phone:', error);
      return phone;
    }
  }, [i18n.language, getRegionConfig]);

  /**
   * Formata um número
   * @param {number} number - Número a ser formatado
   * @param {Object} [options] - Opções de formatação
   * @returns {string} Número formatado
   */
  const formatNumber = useCallback((number, options = {}) => {
    try {
      return new Intl.NumberFormat(i18n.language, options).format(number);
    } catch (error) {
      console.error('Error formatting number:', error);
      return number.toString();
    }
  }, [i18n.language]);

  /**
   * Formata um valor percentual
   * @param {number} value - Valor a ser formatado (0-100)
   * @returns {string} Percentual formatado
   */
  const formatPercent = useCallback((value) => {
    try {
      return new Intl.NumberFormat(i18n.language, {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(value / 100);
    } catch (error) {
      console.error('Error formatting percentage:', error);
      return `${value}%`;
    }
  }, [i18n.language]);

  return {
    // Funções de tradução e i18n
    t,
    i18n,
    
    // Funções de formatação
    formatCurrency,
    formatDate,
    formatPhone,
    formatNumber,
    formatPercent,
    
    // Utilidades
    currentLocale: i18n.language,
    isRTL: i18n.dir() === 'rtl',
    regionConfig: getRegionConfig(),
  };
};

export default useLocalization;