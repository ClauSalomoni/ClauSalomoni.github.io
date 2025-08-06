import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projetos from './components/Projetos'
import Footer from './components/Footer'
import FadeText from "./components/FadeText";

import Sobre from './components/Sobre';
import PrecisandoRelaxar from "./components/PrecisandoRelaxar";
import Evolucao from "./components/Evolucao";
import BtnScrollTop from "./components/BtnScrollTop";
import { useState } from "react";
//criei a pages, vou adicionar arquivo e aqui devo importar(la tenho que export)
//lembrar de mudar o caminho href do header do meu nome)
export default function App() {
  const [mostrarSurpresa, setMostrarSurpresa] = useState(false);
  return (
    <div className="relative min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white overflow-hidden">
          
      <Header />
      
      
      <main className="p-4 md:p-8 max-w-5xl mx-auto">
        <Hero onMostrarSurpresa={() => setMostrarSurpresa(true)} />
        {mostrarSurpresa && <PrecisandoRelaxar onClose={() => setMostrarSurpresa(false)} />}
        <FadeText>
        <Sobre />
        <Projetos />
        </FadeText>
       
        
      </main>
        <Evolucao />
        <BtnScrollTop />
        
      <Footer />
    </div>
  )
}