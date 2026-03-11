import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
//import FadeText from "./FadeText";
//import FadeParagraph from "./FadeParagraph";
import RevealText from './RevealText.tsx';
import Section from './layout/Section.tsx';
import Container from './layout/Container.tsx';
import Button from './ui/Button';
import { Title, Paragraph } from './ui/Typography.tsx'
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sobre() {
  const { t } = useTranslation();
  const [expandido, setExpandido] = useState(false);
  const tituloRef = useRef<HTMLHeadingElement>(null);

  const paragrafos = [1, 2, 3, 4, 5, 6];
  const paragrafosIniciais = 1;

  const handleToggle = () => {
    if (expandido) {
      // Scroll suave para o título com offset do header
      if (tituloRef.current) {
        const headerOffset = 80;
        const elementPosition = tituloRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setExpandido(!expandido);
  };

  return (
    <Section id="sobre" bgColor="white">
      <Container size="small">
        <RevealText as="div" className="mb-6 md:mb-8">
          <Title 
            as="h2" 
            center
            ref={tituloRef} // 👈 Referência no título
          >
            {t('sobre.title')}
          </Title>
        </RevealText>
        
        <div className="space-y-3 md:space-y-6">
          {paragrafos.map((num, index) => {
            if (!expandido && index >= paragrafosIniciais) return null;
            
            return (
              <RevealText key={num} delay={150 + (index * 50)}>
                <Paragraph>
                {t(`sobre.paragraph${num}`)}
                </Paragraph>
              </RevealText>
            );
          })}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <Button
            onClick={handleToggle}
            variant="secondary"
            className="inline-flex items-center gap-2"
          >
            {expandido ? (
              <>
                {t('sobre.buttons.mostrar_menos')} <ChevronUp size={16} />
              </>
            ) : (
              <>
                {t('sobre.buttons.continuar_lendo')} <ChevronDown size={16} />
              </>
            )}
          </Button>
        </div>
      </Container>
    </Section>
  );
}