// src/components/FadeText.tsx
import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

interface FadeTextProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  threshold?: number; // Controle da intensidade do efeito
}

export default function FadeText({ 
  children, 
  as: Component = "div", 
  className,
  threshold = 1.4 // Valor padrão ajustável
}: FadeTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [color, setColor] = useState("rgb(30, 30, 30)");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const center = windowHeight / 2;
      
      // Calcula distância do centro
      const distance = Math.abs(rect.top + rect.height / 2 - center);
      const x = Math.min(distance / (center * threshold), 1);
      
      // Efeito mais suave
      const normalized = Math.sin(x * (Math.PI / 2));
      
      // Ajusta cor (mais claro quando no centro)
      const minColor = 90;
      const maxColor = 255;
      const value = Math.floor(maxColor - (maxColor - minColor) * normalized);
      
      setColor(`rgb(${value}, ${value}, ${value})`);
      setOpacity(1 - normalized * 0.2); // Reduz um pouco a opacidade nas bordas
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return (
    <Component 
      ref={ref} 
      className={className} 
      style={{ 
        color, 
        opacity,
        transition: "color 0.3s ease, opacity 0.3s ease"
      }}
    >
      {children}
    </Component>
  );
}