import FadeParagraph from "./FadeParagraph";
export default function Evolucao() {
  return (
    <section className="mt-20 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
          “Troquei o medo da mudança pela vontade de evoluir.”
        </h2>
        <p className="text-lg text-gray-500">
          Minhas Habilidades: O Código e a Experiência
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="border-l-4 border-accent pl-4">
          <p className="text-accent text-xl font-bold">Habilidades Técnicas:</p>
          <FadeParagraph>
          <p className="text-gray-500">HTML, CSS, JavaScript, Python.</p>
          <p className="text-gray-500">React, Tailwind, Flask.</p>
          <p className="text-gray-500">Git, GitHub, npm, Render.</p></FadeParagraph>
        </div>
        <div className="border-l-4 border-accent pl-4">
          <p className="text-accent text-xl font-bold">Habilidades Comportamentais:</p>
          <p className="text-gray-500"><span className="font-semibold text-gray-400">Adaptabilidade:</span>  Experiência de morar e trabalhar nos EUA e na Itália me preparou para me adaptar a novos ambientes e desafios de forma rápida e eficaz.</p>
          <p className="text-gray-500"><span className="font-semibold text-gray-400">Resolução de Problemas:</span>  Como Chef, aprendi a resolver problemas sob pressão, com foco em eficiência e atenção aos detalhes.</p>
          <p className="text-gray-500"><span className="font-semibold text-gray-400">Comunicação:</span>  A experiência como professora de inglês me ensinou a transmitir ideias complexas de forma simples e clara, uma habilidade essencial para o trabalho em equipe.</p>
          <p className="text-gray-500"><span className="font-semibold text-gray-400">Criatividade:</span>  O curso de gastronomia e a vivência em diferentes culturas me deram uma perspectiva única para pensar fora da caixa e encontrar soluções inovadoras.</p>
        </div>
        
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg font-medium mb-4">
          Se quiser saber mais ou tiver uma vaga que combine comigo:
        </p>
        <a
            href="https://wa.me/5548991030916?text=Olá%20Claudia%2C%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all text-lg font-semibold shadow-md"
        >
            Fale comigo no WhatsApp
        </a>
      </div>
    </section>
  );
}