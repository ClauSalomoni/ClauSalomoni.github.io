import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LinkNav from "./LinkNav";
import LanguageSwitcher from "./LanguageSwitcher";
import ContactList from "./ContactList";
import { SOCIAL_LINKS } from "../config/constants";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mostrarContato, setMostrarContato] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  // Derivação direta do idioma (elimina re-renders desnecessários e o useEffect)
  const isPortuguese = (i18n.language || "pt").startsWith("pt");

  const cvLink = isPortuguese
    ? "/Claudia_Salomoni_CV.pdf"
    : "/Claudia_Salomoni_Resume_EN.pdf";

  const downloadName = isPortuguese
    ? "Curriculo_Claudia_Salomoni.pdf"
    : "Resume_Claudia_Salomoni.pdf";

  const curriculoDigital = isPortuguese
    ? "CV Digital"
    : "Digital Resume"

  const handleLinkClick = () => {
    setMenuAberto(false);
    setMostrarContato(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Linha superior */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo e CVs */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <span className="text-lg sm:text-xl tracking-tight truncate logo-gradient">
              <span className="sm:hidden">Claudia</span>
              <span className="hidden sm:inline">Claudia Salomoni</span>
            </span>

            {/* CV PDF - Desktop */}
            <a
              href={cvLink}
              download={downloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >
              {t("header.cv")}
            </a>

            {/* CV Digital - Desktop */}
            <a
              href={SOCIAL_LINKS.cvOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xs:inline-block px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
            >{curriculoDigital}
            </a>
          </div>

          {/* Área direita */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* CV PDF - Mobile */}
            <a
              href={cvLink}
              download={downloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="xs:hidden p-2 text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-sm"
              title={t("header.cv")}
            >
              CV
            </a>

            {/* CV Digital - Mobile */}
            <a
              href={SOCIAL_LINKS.cvOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="xs:hidden p-2 text-indigo-600 dark:text-indigo-400 font-medium text-xs sm:text-sm"
            >
              online
            </a>

            <LanguageSwitcher />

            {/* Menu Hambúrguer */}
            <button
              onClick={() => setMenuAberto((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menu"
              title={t("header.descricao")}
            >
              {menuAberto ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center justify-end py-2 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex gap-6 text-sm xl:text-base">
            <li>
              <LinkNav href="#sobre" onClick={handleLinkClick}>
                {t("header.sobre")}
              </LinkNav>
            </li>
            <li>
              <LinkNav href="#projetos" onClick={handleLinkClick}>
                {t("header.projetos")}
              </LinkNav>
            </li>
            <li className="relative">
              <button
                onClick={() => setMostrarContato((prev) => !prev)}
                className="flex items-center gap-2 hover:underline text-indigo-500 font-medium"
              >
                {t("header.contato")}
              </button>

              {mostrarContato && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4 z-50 border border-gray-200 dark:border-gray-700 min-w-[200px]">
                  <ul className="space-y-2">
                    <ContactList iconSize={18} />
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Menu Mobile Dropdown */}
        {menuAberto && (
          <div className="lg:hidden mt-4 pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <ul className="space-y-3">
              <li>
                <LinkNav href="#sobre" onClick={handleLinkClick} className="block py-2">
                  {t("header.sobre")}
                </LinkNav>
              </li>
              <li>
                <LinkNav href="#projetos" onClick={handleLinkClick} className="block py-2">
                  {t("header.projetos")}
                </LinkNav>
              </li>
              <li>
                <button
                  onClick={() => setMostrarContato((prev) => !prev)}
                  className="flex items-center justify-between w-full py-2 font-medium"
                >
                  {t("header.contato")}
                  <span>{mostrarContato ? "−" : "+"}</span>
                </button>

                {mostrarContato && (
                  <div className="mt-2 pl-4 space-y-2 border-l-2 border-indigo-500">
                    <ul className="space-y-2">
                      <ContactList iconSize={16} />
                    </ul>
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