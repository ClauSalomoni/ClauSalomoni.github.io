import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-white dark:bg-gray-800
      rounded-2xl
      p-6
      border-2 border-accent/30 dark:border-accent/50
      shadow-md shadow-accent/30
      ${hover ? 'hover:shadow-lg hover:shadow-accent/60 transition-all' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}