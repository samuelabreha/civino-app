import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuration de i18next
i18n
  .use(initReactI18next) // Passer i18n à react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to CIVINO",
          // Ajoutez d'autres traductions ici
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue à CIVINO",
          // Ajoutez d'autres traductions ici
        }
      }
    },
    lng: "fr", // Langue par défaut
    fallbackLng: "en", // Langue de secours
    interpolation: {
      escapeValue: false // React déjà protège contre les XSS
    }
  });

export default i18n;
