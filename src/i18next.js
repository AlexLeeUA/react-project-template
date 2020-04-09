import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN_US from './locales/enUS/translation.json';
import translationEN_UK from './locales/enUK/translation.json';
import translationDE from './locales/de/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  'en-US': {
    translation: translationEN_US,
  },
  'en-UK': {
    translation: translationEN_UK,
  },
  de: {
    translation: translationDE,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
};

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: 'en-US',
    debug: process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false,
      wait: true,
      bindI18n: 'languageChanged loaded',
    },
  });

export default i18next;
