import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Importation des traductions
import fr from './translations/fr';
import en from './translations/en';
import es from './translations/es';
import de from './translations/de';
import it from './translations/it';
import pt from './translations/pt';
import ru from './translations/ru';
import zh from './translations/zh';
import ja from './translations/ja';
import ko from './translations/ko';
import ar from './translations/ar';
import hi from './translations/hi';
import tr from './translations/tr';
import nl from './translations/nl';
import pl from './translations/pl';
import vi from './translations/vi';
import th from './translations/th';
import cs from './translations/cs';
import el from './translations/el';
import he from './translations/he';
import id from './translations/id';
import ms from './translations/ms';
import fa from './translations/fa';
import bn from './translations/bn';
import ro from './translations/ro';
import hu from './translations/hu';
import da from './translations/da';
import fi from './translations/fi';
import no from './translations/no';
import sv from './translations/sv';
import bg from './translations/bg';
import hr from './translations/hr';
import sr from './translations/sr';
import sk from './translations/sk';
import uk from './translations/uk';
import sw from './translations/sw';

const resources = {
  fr: { translation: fr },     // Français
  en: { translation: en },     // English
  es: { translation: es },     // Español
  de: { translation: de },     // Deutsch
  it: { translation: it },     // Italiano
  pt: { translation: pt },     // Português
  ru: { translation: ru },     // Русский
  zh: { translation: zh },     // 中文
  ja: { translation: ja },     // 日本語
  ko: { translation: ko },     // 한국어
  ar: { translation: ar },     // العربية
  hi: { translation: hi },     // हिन्दी
  tr: { translation: tr },     // Türkçe
  nl: { translation: nl },     // Nederlands
  pl: { translation: pl },     // Polski
  vi: { translation: vi },     // Tiếng Việt
  th: { translation: th },     // ไทย
  cs: { translation: cs },     // Čeština
  el: { translation: el },     // Ελληνικά
  he: { translation: he },     // עברית
  id: { translation: id },     // Bahasa Indonesia
  ms: { translation: ms },     // Bahasa Melayu
  fa: { translation: fa },     // فارسی
  bn: { translation: bn },     // বাংলা
  ro: { translation: ro },     // Română
  hu: { translation: hu },     // Magyar
  da: { translation: da },     // Dansk
  fi: { translation: fi },     // Suomi
  no: { translation: no },     // Norsk
  sv: { translation: sv },     // Svenska
  bg: { translation: bg },     // Български
  hr: { translation: hr },     // Hrvatski
  sr: { translation: sr },     // Српски
  sk: { translation: sk },     // Slovenčina
  uk: { translation: uk },     // Українська
  sw: { translation: sw },     // Kiswahili
};

// Obtenir la langue du système
const getDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  if (locales.length > 0) {
    return locales[0].languageCode;
  }
  return 'fr'; // Français par défaut
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(), // Utilise la langue du système
    fallbackLng: 'en',        // Anglais comme langue de secours
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    // Options avancées
    detection: {
      order: ['navigator', 'querystring', 'cookie'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Gestion des pluriels pour toutes les langues
    pluralSeparator: '_',
    nsSeparator: ':',
    keySeparator: '.',
    // Support des langues RTL (droite à gauche)
    supportedLngs: Object.keys(resources),
    nonExplicitSupportedLngs: true,
  });

export default i18n;
