// src/components/ui/Typography.tsx
import React, { forwardRef } from 'react';
import { TEXT_SIZES } from './Constants';

interface TitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  center?: boolean;
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(({ 
  children, 
  as: Component = 'h2', 
  className = '',
  center = false 
}, ref) => {
  
  // 👇 Verificação de segurança para TEXT_SIZES
  const getSizeClass = () => {
    if (!TEXT_SIZES) return 'text-2xl md:text-3xl'; // fallback
    
    try {
      if (Component === 'h1') return TEXT_SIZES.hero?.title || 'text-3xl md:text-4xl lg:text-5xl';
      if (Component === 'h2') return TEXT_SIZES.section?.title || 'text-2xl md:text-3xl lg:text-4xl';
      if (Component === 'h3') return 'text-xl sm:text-2xl md:text-3xl';
      return 'text-lg sm:text-xl md:text-2xl';
    } catch {
      // Fallback se algo der errado
      return Component === 'h1' 
        ? 'text-3xl md:text-4xl lg:text-5xl'
        : 'text-2xl md:text-3xl lg:text-4xl';
    }
  };

  return (
    <Component 
      ref={ref}
      className={`font-extrabold ${getSizeClass()} ${center ? 'text-center' : ''} ${className}`}
    >
      {children}
    </Component>
  );
});

Title.displayName = 'Title';

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  size?: 'large' | 'base' | 'small';
  muted?: boolean;
}

export function Paragraph({ 
  children, 
  className = '',
  size = 'base',
  muted = false
}: ParagraphProps) {
  
  // 👇 Verificação de segurança para TEXT_SIZES.body
  const getSizeClass = () => {
    try {
      return TEXT_SIZES?.body?.[size] || 'text-base sm:text-lg';
    } catch {
      // Fallback
      const fallbackSizes = {
        large: 'text-lg sm:text-xl',
        base: 'text-base sm:text-lg',
        small: 'text-sm sm:text-base'
      };
      return fallbackSizes[size];
    }
  };
  const getColorClass = () => {
    if (muted) {
      return 'text-gray-600 dark:text-gray-400'; // Cinza médio (bom contraste)
    }
    return 'text-gray-700 dark:text-gray-300'; // Cinza escuro (excelente contraste)
  };

  return (
    <p className={`${getSizeClass()} ${getColorClass()} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}