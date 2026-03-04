import { useState } from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LinkNav from "./LinkNav";
import LinkContato from "./LinkContato";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mostrarContato, setMostrarContato] = useState(false);
  const isPortuguese = i18n.language.startsWith("pt");

  const cvLink = isPortuguese
    ? "/Claudia_Salomoni_CV_PT.pdf"
    : "/Claudia_Salomoni_Resume_EN.pdf";


  return (
    <header className="bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3" aria-label="Menu principal">
        <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          {t('header.logo')}
        </a>
        
        <div className="flex items-center">
          <ul className="flex gap-4 text-xs sm:gap-6 sm:text-sm md:text-base">
            <li>
              <LinkNav href="#sobre">
                {t('header.sobre')}
              </LinkNav>
            </li>
            <li>
              <LinkNav href="#projetos">
                {t('header.projetos')}
              </LinkNav>
            </li>
            <li className="relative">
              <LinkNav
                href="#"
                onClick={() => setMostrarContato(!mostrarContato)}
                isButton
              >
                {t('header.contato')}
              </LinkNav>

              {mostrarContato && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 z-50 border border-gray-100 dark:border-gray-700 ring-1 ring-black/5">
                  <ul className="flex flex-col gap-3 text-sm md:text-base text-gray-800 dark:text-gray-200">
                    <LinkContato
                      href="https://wa.me/5548991030916?text=Olá%20Claudia%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
                      icon={<MessageCircle size={18} />}
                      colorClass="text-green-500"
                    >
                      {t('header.whatsapp')}
                    </LinkContato>
                    
                    <li>
                      <a
                        href="mailto:claudia404salomoni@gmail.com"
                        className="flex items-center gap-2 hover:underline text-blue-500"
                      >
                        <Mail size={18} />
                        {t('header.email')}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/clau-salomoni-7376b2350"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:underline text-indigo-500"
                      >
                        <Linkedin size={18} />
                        {t('header.linkedin')}
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 px-3 py-1 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            {t("header.cv")}
          </a>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}