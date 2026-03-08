import { useTranslation } from 'react-i18next';
import FadeText from "./FadeText";
import Container from './layout/Container';
import Button from './ui/Button';
import { TEXT_SIZES } from './ui/Constants';
import minhaFoto from "../assets/eu2.png";
import outraFoto from "../assets/eu.png";

interface HeroProps {
  onMostrarSurpresa: () => void;
}   

export default function Hero({ onMostrarSurpresa }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* IMAGEM */}
          <div className="hero-image w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 group">
            <img
              src={minhaFoto}
              alt="Foto de Claudia"
              className="absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0 shadow-lg"
            />
            <img
              src={outraFoto}
              alt="Foto de Claudia sorrindo"
              className="absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 shadow-lg"
            />
          </div>

          {/* TEXTO */}
          <div className="text-center md:text-left flex-1">
            <FadeText as="h1" className={TEXT_SIZES.hero.title + " font-bold mb-3 sm:mb-4"}>
              {t('hero.title')}
            </FadeText>
            
            <FadeText as="p" className={`${TEXT_SIZES.hero.subtitle} text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0`}>
              {t('hero.description')}
            </FadeText>
            
            {/* BOTÕES */}
            <div className="mt-6 sm:mt-8 flex flex-row flex-wrap gap-2 sm:gap-4 justify-center md:justify-start">
              <Button href="#projetos" variant="primary" className="flex-1 sm:flex-none min-w-[120px]">
                {t('hero.btn_projetos')}
              </Button>
              <Button onClick={onMostrarSurpresa} variant="accent" className="flex-1 sm:flex-none min-w-[120px]">
                {t('hero.btn_relaxar')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}