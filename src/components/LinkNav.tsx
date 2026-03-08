import React from 'react';

interface LinkNavProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  isButton?: boolean;
  className?: string; 
}

export default function LinkNav({ 
  href, 
  children, 
  onClick, 
  isButton = false,
  className = '' 
}: LinkNavProps) {
  
  const baseClasses = "hover:underline px-1 py-0.5 text-sm md:text-base text-gray-800 dark:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 rounded";
  
  // Combina as classes base com as classes adicionais
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (isButton) {
    return (
      <button onClick={onClick} className={combinedClasses}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={combinedClasses}>
      {children}
    </a>
  );
}