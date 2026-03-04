import { useTranslation } from 'react-i18next';
import FadeText from "./FadeText";
import FadeParagraph from "./FadeParagraph";

export default function Sobre() {
  const { t } = useTranslation();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <FadeText as="h2" className="text-3xl md:text-4xl font-bold mb-8">
            {t('sobre.title')}
          </FadeText>
        </h2>
        
        <FadeParagraph>
          {t('sobre.paragraph1')}
        </FadeParagraph>
        <br className="hidden md:block" /><br className="hidden md:block" />
        
        <FadeParagraph>
          {t('sobre.paragraph2')}
        </FadeParagraph>
        <br className="hidden md:block" /><br className="hidden md:block" />
        
        <FadeParagraph>
          {t('sobre.paragraph3')}
        </FadeParagraph>
        <br className="hidden md:block" /><br className="hidden md:block" />
        
        <FadeParagraph>
          {t('sobre.paragraph4')}
          <br className="hidden md:block" /><br className="hidden md:block" />
        </FadeParagraph>
        
        <FadeParagraph>
          {t('sobre.paragraph5')}
        </FadeParagraph>
        <br className="hidden md:block" /><br className="hidden md:block" />
        
        <FadeParagraph>
          {t('sobre.paragraph6')}
        </FadeParagraph>
      </div>
    </section>
  );
}