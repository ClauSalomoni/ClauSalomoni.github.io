import FadeText from "./FadeText";
import minhaFoto from "../assets/eu2.png";
import outraFoto from "../assets/eu.png";


interface HeroProps {
  onMostrarSurpresa: () => void;
}   

export default function Hero({ onMostrarSurpresa }: HeroProps) {
  return (
    <section className="text-center py-16 md:py-24">
       <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 max-w-5xl mx-auto">
        {/* IMAGEM COM HOVER */}
        <div className="relative w-44 h-44 md:w-52 md:h-52 group">
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
        <div className="text-center md:text-left">
        <FadeText>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Transformando Ideias em código</h2>
      <p className="text-lg md:text-xl max-w-2xl">
        Sua próxima grande ideia precisa de alguém com responsabilidade e dedicação. Olá, sou a Claudia, desenvolvedora em transição de carreira, preparada para somar experiência e criar soluções.
      </p>
      </FadeText>
      <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
        <a
          href="#projetos"
          className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
          Veja meus projetos
        </a>
        <button
          id="PrecisandoRelaxar"
          onClick={onMostrarSurpresa}
          className=" mt-8 inline-block px-6 py-3 bg-accent text-white rounded-xl hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Precisando Relaxar?
        </button>
        </div>
        </div>
      </div>
    </section>

  )
}