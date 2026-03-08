import { useTranslation } from 'react-i18next';
import FadeParagraph from "./FadeParagraph";

import { Linkedin, MessageCircle } from "lucide-react";

// Interface para os itens técnicos
interface TechnicalItem {
  category: string;
  skills: string;
}

// Interface para os itens comportamentais
interface ComportamentalItem {
  category: string;
  description: string;
}

export default function Evolucao() {
  const { t } = useTranslation();
  
  // Pega a lista de habilidades técnicas
  const technicalItems = t('evolucao.technical.items', { returnObjects: true }) as TechnicalItem[];

  
  // Pega a lista de habilidades comportamentais
  const comportamentalItems = t('evolucao.comportamentais.items', { returnObjects: true }) as ComportamentalItem[];

  return (
    <section className="mt-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
          {t('evolucao.frase_destaque')}
        </h2>
        <p className="text-lg text-gray-500">
          {t('evolucao.subtitulo')}
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Habilidades Técnicas */}
        <div className="border-l-4 border-accent pl-4">
          <p className="text-accent text-xl font-bold">{t('evolucao.technical.title')}</p>
          <FadeParagraph>
            {technicalItems.map((item, index) => (
              <p key={index} className="text-gray-500">
                <span className="font-semibold text-gray-400">{item.category}</span> {item.skills}
              </p>
            ))}
          </FadeParagraph>
        </div>

        {/* Habilidades Comportamentais */}
        <div className="border-l-4 border-accent pl-4">
          <p className="text-accent text-xl font-bold">{t('evolucao.comportamentais.title')}</p>
          <FadeParagraph>
          {comportamentalItems.map((item, index) => (
            <p key={index} className="text-gray-500">
              <span className="font-semibold text-gray-400">{item.category}</span> {item.description}
            </p>
          ))}
          </FadeParagraph>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium mb-6">
          {t('evolucao.chamada')}
        </p>
        
        {/* Container flex para os botões */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Botão WhatsApp */}
          {/* Botão LinkedIn */}
          <a
            href="https://www.linkedin.com/in/clau-salomoni/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all text-lg font-semibold shadow-md w-full sm:w-auto justify-center"
          >
            <Linkedin size={20} />
             {t('evolucao.botao_linkedin')}
          </a>
          <a
            href="https://wa.me/5548991030916?text=Olá%20Claudia%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all text-lg font-semibold shadow-md w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            {t('evolucao.botao_whatsapp')}
          </a>

        </div>
      </div>
    </section>
  );
}