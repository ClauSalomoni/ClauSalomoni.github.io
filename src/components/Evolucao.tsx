import { useTranslation } from 'react-i18next';
import RevealText from "./RevealText";
import { Title, Paragraph } from './ui/Typography';

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
      <RevealText delay={100} className="text-center mb-12">
        <Title 
          as="h2" 
          className="text-accent mb-4" 
        >
          {t('evolucao.frase_destaque')}
        </Title>
        
        <Paragraph size="large" muted>
          {t('evolucao.subtitulo')}
        </Paragraph>
      </RevealText>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Habilidades Técnicas */}
        <RevealText delay={200}>
          <div className="border-l-4 border-accent pl-4">
            <Title as="h3" className="text-accent text-xl mb-2">{t('evolucao.technical.title')}</Title>
              <div className="space-y-2">
                {technicalItems.map((item, index) => (
                  <RevealText key={index} delay={250 + (index * 50)}>
                    <Paragraph size="base">
                      <span className="font-bold text-gray-900 dark:text-gray-100">
                        {item.category}
                      </span>{' '}
                      {/* 👇 CORRIGIDO: melhor contraste */}
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.skills}
                      </span>
                    </Paragraph>
                  </RevealText>
                ))}
              </div>
           </div>
        </RevealText>

        {/* Habilidades Comportamentais */}
        <RevealText delay={300}>
          <div className="border-l-4 border-accent pl-4">
            <Title as="h3" className="text-accent text-xl mb-2">
              {t('evolucao.comportamentais.title')}
            </Title>
            
            <div className="space-y-2">
              {comportamentalItems.map((item, index) => (
                <RevealText key={index} delay={350 + (index * 50)}>
                   <Paragraph size="base">
                    <span className="font-bold text-gray-900 dark:text-gray-100">
                      {item.category}
                    </span>{' '}
                    {/* 👇 CORRIGIDO: melhor contraste */}
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </span>
                  </Paragraph>
                </RevealText>
              ))}
            </div>
          </div>
        </RevealText>
      </div>

      <div className="mt-12 text-center">
        <Paragraph size="large" className="mb-6 font-medium">
          {t('evolucao.chamada')}
        </Paragraph>
        
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