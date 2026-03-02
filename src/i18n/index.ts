import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Tipo genérico mas seguro
interface TranslationModule {
  default: Record<string, unknown>;
}

const modules = import.meta.glob('./locales/*.json', { 
  eager: true 
}) as Record<string, TranslationModule>;

const resources: Record<string, { translation: Record<string, unknown> }> = {};

Object.entries(modules).forEach(([path, module]) => {
  const langMatch = path.match(/\.\/locales\/(.*)\.json$/);
  if (langMatch) {
    const lang = langMatch[1];
    resources[lang] = {
      translation: module.default
    };
  }
});

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;