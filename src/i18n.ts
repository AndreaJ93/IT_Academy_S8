import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import catTranslation from "./locales/cat/translation.json";
import esTranslation from "./locales/es/translation.json";
import enTranslation from "./locales/en/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  cat: {
    translation: catTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: `cat`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
