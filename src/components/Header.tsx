import { useState } from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import LinkNav from "./LinkNav";
import LinkContato from "./LinkContato";
export default function Header() {
    const [mostrarContato, setMostrarContato] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3" aria-label="Menu principal">
        <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Claudia Salomoni</a>
        <ul className="flex gap-4 text-xs sm:gap-6 sm:text-sm md:text-base">
          <li>
            <LinkNav href="#sobre"> 
              Sobre
            </LinkNav>
            
          </li>
          <li>
            <LinkNav href="#projetos"> 
              Projetos
            </LinkNav>
          </li>
          <li className="relative">
            <LinkNav
              href="#"
              onClick={() => setMostrarContato(!mostrarContato)}
              isButton
            >
              Contato
            </LinkNav>

            {mostrarContato && (
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 z-50 border border-gray-100 dark:border-gray-700 ring-1 ring-black/5">
                <ul className="flex flex-col gap-3 text-sm md:text-base text-gray-800 dark:text-gray-200">
                
                    <LinkContato
                      href="https://wa.me/5548991030916?text=Olá%20Claudia%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
                      icon={<MessageCircle size={18} />}
                      colorClass="text-green-500"
                     >
                    WhatsApp
                    </LinkContato>
                
                <li>
                    <a
                    href="mailto:claudia404salomoni@gmail.com"
                    className="flex items-center gap-2 hover:underline text-blue-500"
                    >
                    <Mail size={18} />
                    E-mail
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
                    LinkedIn
                    </a>
                </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}