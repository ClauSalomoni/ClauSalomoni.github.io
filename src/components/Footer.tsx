import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="mb-4">
          © {currentYear} Claudia Salomoni. {t('footer.direitos')}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:claudia404salomoni@gmail.com"
            className="hover:text-indigo-400 transition"
          >
            {t('header.email')}
          </a>
          <a
            href="https://www.linkedin.com/in/clau-salomoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            {t('header.linkedin')}
          </a>
          <a
            href="https://wa.me/5548991030916"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            {t('header.whatsapp')}
          </a>
        </div>
      </div>
    </footer>
  );
}