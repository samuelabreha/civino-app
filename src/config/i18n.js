import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from '../translations/fr';

const resources = {
  fr: {
    translation: fr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
