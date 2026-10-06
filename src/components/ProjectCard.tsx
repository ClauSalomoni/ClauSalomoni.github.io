import { useState, useId } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './ui/Card';
import Button from './ui/Button';
import { Paragraph } from './ui/Typography';
import { ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react';

export interface Projeto {
  id?: string;
  titulo: string;
  descricao: string;
  detalhes?: string;
  techs?: string[];
  link: string;
  textoLink: string;
  linkGithub?: string;
}

interface ProjectCardProps {
  projeto: Projeto;
}

export default function ProjectCard({ projeto }: ProjectCardProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  const temConteudoExpansivel = Boolean(
    projeto.detalhes || (projeto.techs && projeto.techs.length > 0)
  );

  return (
    <Card hover className="flex h-full flex-col justify-between">
      {/* Conteúdo principal */}
      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-gray-100">
          {projeto.titulo}
        </h3>

        <Paragraph className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {projeto.descricao}
        </Paragraph>
      </div>

      {/* Ações */}
      <div className="mt-auto pt-2">

        {/* Detalhes + GitHub */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">

          {temConteudoExpansivel ? (
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              className="inline-flex cursor-pointer items-center gap-1 rounded py-1 text-xs font-semibold text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {isExpanded ? (
                <>
                  {t(
                    'projetos.botoes.ocultar_detalhes',
                    'Ocultar detalhes'
                  )}
                  <ChevronUp size={14} />
                </>
              ) : (
                <>
                  {t(
                    'projetos.botoes.ver_detalhes',
                    '+ Ver detalhes'
                  )}
                  <ChevronDown size={14} />
                </>
              )}
            </button>
          ) : (
            <div />
          )}

          {projeto.linkGithub && (
            <a
              href={projeto.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.currentTarget.blur()}
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors hover:bg-accent/10 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-accent/20 dark:hover:text-accent"
              
            >
              <Github size={14} />

              <span>
                {t('projetos.botoes.ver_codigo', 'Ver código')}
              </span>

              <ExternalLink size={12} className="opacity-70" />
            </a>
          )}
        </div>

        {/* Detalhes */}
        {isExpanded && (
          <div
            id={detailsId}
            className="mb-4 space-y-3"
          >
            {projeto.detalhes && (
              <div className="rounded-lg border-l-2 border-accent bg-gray-50 p-3 text-xs leading-relaxed text-gray-700 transition-all duration-200 dark:bg-gray-900/50 dark:text-gray-300">
                {projeto.detalhes}
              </div>
            )}

            {projeto.techs && projeto.techs.length > 0 && (
              <div
                className="flex flex-wrap gap-1.5"
                aria-label={t(
                  'projetos.tecnologias',
                  'Tecnologias utilizadas'
                )}
              >
                {projeto.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-accent/20 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent dark:bg-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA principal */}
        {projeto.link && (
          <div className="border-t border-accent/10 pt-3 dark:border-accent/20">
            <Button
              href={projeto.link}
              variant="primary"
              external
              className="inline-flex w-full items-center justify-center gap-2 py-2.5 text-sm font-semibold"
            >
              {projeto.textoLink}
              <ExternalLink size={16} />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}