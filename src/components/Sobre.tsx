import FadeText from "./FadeText";
import FadeParagraph from "./FadeParagraph";

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <FadeText as="h2" className="text-3xl md:text-4xl font-bold mb-8">Sobre mim</FadeText>
        </h2>
            <FadeParagraph>
            Sou gaúcha e escolhi Florianópolis como residência quando passei no vestibular da UFSC em 2001 para o curso de Educação Física, Licenciatura. Lecionei em algumas escolas públicas onde rapidamente percebi que não seria possível lecionar da forma que acreditava ser o ideal. Passei então a unir os  conhecimentos de Licenciatura com os da língua Inglesa e passei alguns anos ministrando aulas de Inglês. </FadeParagraph>
            <br className="hidden md:block" /><br className="hidden md:block" />
            <FadeParagraph>
            Ao perceber que minha paixão pela gastronomiafoi crescendo fiz um curso de tecnólogo em gastronomia no IFSC.  Fiz alguns estágios em restaurantes e passei a trabalhar como autônoma. Recentemente atuar nesta área tem se tornado fisicamente extenuante. </FadeParagraph>
            <br className="hidden md:block" /><br className="hidden md:block" />
            <FadeParagraph>
            Eis que decidi trocar a gastronomia e a cozinha por uma profissão mais tranquila, fisicamente pelo menos. Pensando em minhas “soft skills”,  levando em conta as minhas formações, iniciei uma pesquisa para ver em qual área profissional eu poderia atuar de forma a atender o que busco nesta fase da vida.Seja falando com amigos e conhecidos, seja pesquisando na internet, descobri que todos os caminhos levam à Tecnologia da Informação. </FadeParagraph>
            <br className="hidden md:block" /><br className="hidden md:block" />
            <FadeParagraph>
            Depois de decidir trocar de área e mergulhar no universo da tecnologia percebi que a transição vai muito além de aprender a programar. Ela envolve desafios, dúvidas, conquistas e, claro, muitos debugs na vida real. Atualmente estou cursando Tecnico em Desenvolvimento de Sistemas pelo Senai.
            <br className="hidden md:block" /><br className="hidden md:block" /></FadeParagraph>
            <FadeParagraph>
            Procuro evoluir e testar meus conhecimentos na pratica enquanto continuo explorando diferentes caminhos deste incrível mundo da tecnologia. É com orgulho que digo que este site foi todo desenvolvido por mim. Espero que goste dos projetos que estão aqui e aguardo seu contato.</FadeParagraph>
            <br className="hidden md:block" /><br className="hidden md:block" />
            <FadeParagraph>
            Busco contribuir com soluções reais e crescer em equipe, sempre com dedicação e responsabilidade.
            </FadeParagraph>
        
        
      </div>
    </section>
  );
}