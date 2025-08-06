import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

interface FadeTextProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

export default function FadeText({ children, as: Component = "div", className}: FadeTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [color, setColor] = useState("rgb(30, 30, 30)");

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const center = windowHeight / 2;
      const distance = Math.abs(rect.top + rect.height / 2 - center);
      const x = Math.min(distance / (center * 1.4), 1);
      const normalized = Math.sin(x * (Math.PI / 2));

      const minColor = 90;
      const maxColor = 255;
      const r = Math.floor(maxColor - (maxColor - minColor) * normalized);
      const g = r;
      const b = r;
      const newColor = `rgb(${r}, ${g}, ${b})`;
      if (newColor !== color) {
        setColor(newColor);
}
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Component ref={ref} className={className} 
    style={{ color, transition: "color 0.3s ease"}}>
      {children}
    </Component>
  );
}