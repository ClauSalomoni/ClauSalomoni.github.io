import { useState, useEffect } from "react";
import { Mail, Linkedin, MessageCircle, Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LinkNav from "./LinkNav";
import LinkContato from "./LinkContato";
import LanguageSwitcher from "./LanguageSwitcher";


export default function Header() {
  const { t, i18n } = useTranslation();
  const [mostrarContato, setMostrarContato] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [idiomaCarregado, setIdiomaCarregado] = useState(false);
  
  useEffect(() => {
    if (i18n.language) {
      setIdiomaCarregado(true);
    }
  }, [i18n.language]);

  const isPortuguese = idiomaCarregado 
    ? i18n.language.startsWith("pt")
    : true;

  const cvLink = isPortuguese
    ? "/Claudia_Salomoni_CV.pdf"
    : "/Claudia_Salomoni_Resume_EN.pdf";

  const handleLinkClick = () => {
    setMenuAberto(false);
    setMostrarContato(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha superior - sempre visível */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo e CV */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            
          <a href="/" className="text-lg sm:text-xl tracking-tight truncate logo-gradient">
          <span className="sm:hidden">Claudia</span>
          <span className="hidden sm:inline">Claudia Salomoni</span>
        </a>
            
            {/* CV - versão desktop (texto) */}
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              {t("header.cv")}
            </a>
          </div>

          {/* Área direita - sempre visível */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* CV - versão mobile (ícone) */}
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="xs:hidden p-2 text-indigo-600 dark:text-indigo-400"
              title={t("header.cv")}
            >
              CV
            </a>

            <LanguageSwitcher />
            
            {/* Menu Hamburguer - mobile */}
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Menu"
              title={t("header.descricao")}
            >
              {menuAberto ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Desktop - visível em lg+ */}
        <div className="hidden lg:flex items-center justify-end py-2 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex gap-6 text-sm xl:text-base">
            <li>
              <LinkNav href="#sobre" onClick={handleLinkClick}>
                {t('header.sobre')}
              </LinkNav>
            </li>
            <li>
              <LinkNav href="#projetos" onClick={handleLinkClick}>
                {t('header.projetos')}
              </LinkNav>
            </li>
            <li className="relative">
              <button
                onClick={() => setMostrarContato(!mostrarContato)}
                className={`flex items-center gap-2 hover:underline "text-indigo-500"`}
              >
                {t('header.contato')}
              </button>

              {mostrarContato && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 z-50 border border-gray-200 dark:border-gray-700 min-w-[200px]">
                  <ul className="space-y-2">
                    <LinkContato
                      href="https://wa.me/5548991030916?text=Olá%20Claudia%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
                      icon={<MessageCircle size={18} />}
                      colorClass="text-green-500"
                    >
                      {t('header.whatsapp')}
                    </LinkContato>
                    <LinkContato
                      href="mailto:claudia404salomoni@gmail.com"
                      icon={<Mail size={18} />}
                      colorClass="text-blue-500"
                    >
                      {t('header.email')}
                    </LinkContato>
                    
                    <LinkContato
                      href="https://www.linkedin.com/in/clau-salomoni/"
                      icon={<Linkedin size={18} />}
                      colorClass="text-indigo-500"
                    >
                      {t('header.linkedin')}
                    </LinkContato>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Menu Mobile - dropdown */}
        {menuAberto && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="space-y-3">
              <li>
                <LinkNav href="#sobre" onClick={handleLinkClick} className="block py-2">
                  {t('header.sobre')}
                </LinkNav>
              </li>
              <li>
                <LinkNav href="#projetos" onClick={handleLinkClick} className="block py-2">
                  {t('header.projetos')}
                </LinkNav>
              </li>
              <li>
                <button
                  onClick={() => setMostrarContato(!mostrarContato)}
                  className="flex items-center justify-between w-full py-2"
                >
                  {t('header.contato')}
                  <span>{mostrarContato ? '−' : '+'}</span>
                </button>
                
                {mostrarContato && (
                  <div className="mt-2 pl-4 space-y-2">
                    <LinkContato
                      href="https://wa.me/5548991030916?text=Olá%20Claudia%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
                      icon={<MessageCircle size={16} />}
                      colorClass="text-green-500"
                    >
                      {t('header.whatsapp')}
                    </LinkContato>
                    <LinkContato
                      href="mailto:claudia404salomoni@gmail.com"
                      icon={<Mail size={16} />}
                      colorClass="text-blue-500"
                    >
                      {t('header.email')}
                    </LinkContato>
                  
                    <LinkContato
                      href="https://www.linkedin.com/in/clau-salomoni/"
                      icon={<Linkedin size={16} />}
                      colorClass="text-indigo-500"
                    >
                      {t('header.linkedin')}
                    </LinkContato>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}