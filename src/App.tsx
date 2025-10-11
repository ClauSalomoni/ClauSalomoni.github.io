import './index.css'
import BtnScrollTop from "./components/BtnScrollTop";
import Evolucao from "./components/Evolucao";
import FadeText from "./components/FadeText";
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import PrecisandoRelaxar from "./components/PrecisandoRelaxar";
import Projetos from './components/Projetos'
import Sobre from './components/Sobre';

import { useState } from "react";
import { useEffect } from 'react';

export default function App() {
  const [mostrarSurpresa, setMostrarSurpresa] = useState(false);
 
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gray-950 dark:text-white overflow-hidden">
          
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