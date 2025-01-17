// src/hooks/useLocalization.js
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const useLocalization = () => {
  const { t, i18n } = useTranslation();

  const formatCurrency = useCallback((amount, currency = 'USD') => {
    const locale = i18n.language;
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(amount);
  }, [i18n.language]);

  const formatDate = useCallback((date) => {
    const locale = i18n.language;
    return new Intl.DateTimeFormat(locale).format(new Date(date));
  }, [i18n.language]);

  const formatPhone = useCallback((phone) => {
    const locale = i18n.language;
    switch (locale) {
      case 'pt':
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      case 'es':
        return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
      default:
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
  }, [i18n.language]);

  const formatNumber = useCallback((number) => {
    const locale = i18n.language;
    return new Intl.NumberFormat(locale).format(number);
  }, [i18n.language]);

  return {
    t,
    i18n,
    formatCurrency,
    formatDate,
    formatPhone,
    formatNumber,
  };
};