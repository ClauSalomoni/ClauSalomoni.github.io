import { useTranslation } from 'react-i18next';
import FadeText from "./FadeText";

interface Projeto {
  titulo: string;
  descricao: string;
  link: string;
  textoLink: string;
}

// Função para verificar se o objeto é um Projeto válido
// Usando 'unknown' que é type-safe, diferente de 'any'
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
  
  // Pega os dados brutos
  const rawData = t('projetos.items', { returnObjects: true });
  
  // Filtra apenas os itens válidos
  const projetos: Projeto[] = Array.isArray(rawData) 
    ? rawData.filter(isProjeto)
    : [];

  // Se não houver projetos, não renderiza nada
  if (projetos.length === 0) {
    return null;
  }

  return (
    <section id="projetos" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100 drop-shadow-md dark:drop-shadow-xl">
          <FadeText>{t('projetos.titulo_secao')}</FadeText>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projetos.map((projeto, index) => (
            <div key={index} className="rounded-2xl border-2 border-accent/30 dark:border-accent/50 p-6 bg-white dark:bg-gray-800 shadow-md shadow-accent/30 hover:shadow-lg hover:shadow-accent/60 transition-all">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                <FadeText>{projeto.titulo}</FadeText>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 p-3"
              >
                {projeto.textoLink}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}