import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './component/locales/en.json';
// import frTranslation from './component/locales/fr.json';
import zhTranslation from './component/locales/zh.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
    //   fr: { translation: frTranslation },
      zh: { translation: zhTranslation },

    },
    lng: 'zh', // Default language
    fallbackLng: 'zh', // Fallback language
    interpolation: {
      escapeValue: false, // React already sanitizes content
    },
  });

export default i18n;
