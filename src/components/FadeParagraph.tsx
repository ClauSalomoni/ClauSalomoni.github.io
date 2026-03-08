// src/components/FadeParagraph.tsx
import FadeText from "./FadeText";
import { TEXT_SIZES } from "./ui/Constants";

interface FadeParagraphProps {
  children: React.ReactNode;
  size?: 'large' | 'base' | 'small';
  className?: string;
}

export default function FadeParagraph({ 
  children, 
  size = 'base',
  className = '' 
}: FadeParagraphProps) {
  
  const sizeClasses = {
    large: TEXT_SIZES.body.large,
    base: TEXT_SIZES.body.base,
    small: TEXT_SIZES.body.small,
  };

  return (
    <FadeText 
      as="p" 
      className={`${sizeClasses[size]} leading-relaxed ${className}`}
      threshold={1.2} // Efeito um pouco mais suave para parágrafos
    >
      {children}
    </FadeText>
  );
}