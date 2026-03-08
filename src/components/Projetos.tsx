import { useTranslation } from 'react-i18next';
import FadeText from "./FadeText";
import Section from './layout/Section';
import Container from './layout/Container';
import Grid from './layout/Grid';
import Card from './ui/Card';
import Button from './ui/Button';
import { Title, Paragraph } from './ui/Typography';

interface Projeto {
  titulo: string;
  descricao: string;
  link: string;
  textoLink: string;
}

function isProjeto(obj: unknown): obj is Projeto {
  if (!obj || typeof obj !== 'object') return false;
  const projeto = obj as Record<string, unknown>;
  return (
    typeof projeto.titulo === 'string' &&
    typeof projeto.descricao === 'string' &&
    typeof projeto.link === 'string' &&
    typeof projeto.textoLink === 'string'
  );
}

export default function Projetos() {
  const { t } = useTranslation();
  
  const rawData = t('projetos.items', { returnObjects: true });
  const projetos: Projeto[] = Array.isArray(rawData) 
    ? rawData.filter(isProjeto)
    : [];

  if (projetos.length === 0) return null;

  return (
    <Section id="projetos" bgColor="gray">
      <Container>
        <Title as="h2" center className="mb-12 drop-shadow-md dark:drop-shadow-xl">
          <FadeText>{t('projetos.titulo_secao')}</FadeText>
        </Title>
        
        <Grid cols={2} gap="md">
          {projetos.map((projeto, index) => (
            <Card key={index} hover className="flex flex-col h-full">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                <FadeText>{projeto.titulo}</FadeText>
              </h3>
              
              <Paragraph className="mb-4 flex-grow">
                {projeto.descricao}
              </Paragraph>
              
              <Button 
                href={projeto.link} 
                variant="primary" 
                external
                className="mt-auto"
              >
                {projeto.textoLink}
              </Button>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}