import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'pt' | 'en') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferredLanguage', lng);
  };

  return (
    <div className="flex gap-2 ml-4">
      <button
        onClick={() => changeLanguage('pt')}
        title="Mudar para Português"
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
          i18n.language === 'pt' 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-600'
        }`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        title="Switch to English"
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
          i18n.language === 'en' 
            ? 'bg-indigo-600 text-white' 
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-600'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;