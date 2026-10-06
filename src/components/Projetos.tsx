import { useTranslation } from 'react-i18next';
import FadeText from "./FadeText";
import Section from './layout/Section';
import Container from './layout/Container';
import Grid from './layout/Grid';
import { Title } from './ui/Typography';
import ProjectCard from './ProjectCard';
import type { Projeto } from './ProjectCard';

function isProjeto(obj: unknown): obj is Projeto {
  if (!obj || typeof obj !== 'object') return false;
  const p = obj as Record<string, unknown>;
  return (
    typeof p.titulo === 'string' &&
    typeof p.descricao === 'string' &&
    typeof p.link === 'string' &&
    typeof p.textoLink === 'string' &&
    (p.linkGithub === undefined || typeof p.linkGithub === 'string') &&
    (p.detalhes === undefined || typeof p.detalhes === 'string') &&
    (p.techs === undefined || (Array.isArray(p.techs) && p.techs.every(item => typeof item === 'string')))
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
            <ProjectCard key={projeto.id || index} projeto={projeto} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}