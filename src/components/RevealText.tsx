import { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'p' | 'span';
}

export default function RevealText({ 
  children, 
  delay = 0, 
  className = ""
  
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respeita preferência do usuário por movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true); // Mostra imediatamente sem animação
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}