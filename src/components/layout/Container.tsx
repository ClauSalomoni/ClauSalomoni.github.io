import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'small' | 'large';  // 👈 ISSO DEVE EXISTIR!
}

export default function Container({ 
  children, 
  className = '',
  size = 'default'  // 👈 VALOR PADRÃO
}: ContainerProps) {
  
  const sizes = {
    small: 'max-w-3xl',
    default: 'w-full max-w-5xl',
    large: 'max-w-7xl w-full',
  };

  return (
    <div className={`w-full ${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}