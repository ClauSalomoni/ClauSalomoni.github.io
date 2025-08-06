import FadeText from "./FadeText"


interface Projeto {
  titulo: string
  descricao: string
  link: string
  textoLink: string
}

const projetos: Projeto[] = [
  {
    titulo: "Jogo da Bomba",
    descricao: "Um jogo interativo para testar raciocínio e lógica, desenvolvido com JavaScript, HTML, CSS e Flask, hospedado no Render.",
    link: "https://desarme-bomba-flask.onrender.com",
    textoLink: "Jogar Demo →"
  },
  {
    titulo: "Meu Github",
    descricao: "Atualmente, estou focada em desenvolvimento web com JavaScript, HTML, CSS e explorando back-end com Flask e Node.js.",
    link: "https://github.com/ClauSalomoni",
    textoLink: "Ver Perfil →"
  },
  {
    titulo: "Site/blog em WordPress",
    descricao: "Criei um blog pessoal para explorar e aprender o uso da plataforma. O servidor é simples e afeta muito o desempenho, porém o projeto foi essencial para entender a estrutura do WordPress.",
    link: "https://transformaçãoti.com.br",
    textoLink: "Acessar Site/Blog →"
  },
  {
    titulo: "Colaboração em comunidade",
    descricao: "Contribuindo com melhorias visuais e ajustes de responsividade, substituindo imagens de IA por fotos reais. Minha primeira experiência prática em colaboração com uma comunidade de tecnologia",
    link: "https://github.com/pyladies-floripa/site-pyladies-floripa",
    textoLink: "Repositório PyLadies Floripa →"
  },
  // Adicione mais projetos conforme quiser
]

export default function Projetos() {
  return (
    
    <section id="projetos" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-100 drop-shadow-md dark:drop-shadow-xl"><FadeText>Projetos</FadeText></h2>
        <div className="grid gap-8 md:grid-cols-2">
        {projetos.map((projeto, index) => (
            <div key={index} className="rounded-2xl border-2 border-accent/30 dark:border-accent/50 p-6 bg-white dark:bg-gray-800 shadow-md shadow-accent/30 hover:shadow-lg hover:shadow-accent/60 transition-all">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100"><FadeText>{projeto.titulo}</FadeText></h3>
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
    
  )
}