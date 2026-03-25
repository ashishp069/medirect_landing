import en from "./en";
import ar from "./ar";

const translations = { en, ar };

export const getTranslation = (lang) => translations[lang] || en;