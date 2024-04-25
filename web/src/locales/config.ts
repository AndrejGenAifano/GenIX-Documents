import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation_en from './en';
import translation_de from './de';

const resources = {
  en: translation_en,
  de: translation_de,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
