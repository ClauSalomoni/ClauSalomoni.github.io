import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // ícone opcional, se estiver usando lucide

export default function BtnScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica se deve mostrar o botão
  useEffect(() => {
    const toggleVisibility = () => {
      const threshold = window.innerWidth < 768 ? 10 : 200; // menos scroll necessário em telas pequenas
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    )
  );
}