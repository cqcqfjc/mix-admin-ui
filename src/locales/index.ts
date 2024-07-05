import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import EnUS from '@/locales/en-US';
import ZhCN from '@/locales/zh-TW';
import ZhTW from '@/locales/zh-TW';

const resources = {
  en: {
    translation: EnUS
  },
  'zh-CN': {
    translation: ZhCN
  },
  'zh-TW': {
    translation: ZhTW
  }
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources
  }).then();

export default i18next;