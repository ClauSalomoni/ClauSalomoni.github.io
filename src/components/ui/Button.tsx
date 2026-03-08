// src/components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

export default function Button({ 
  children, 
  onClick, 
  href, 
  variant = 'primary',
  className = '',
  type = 'button',
  external = false
}: ButtonProps) {
  
  const baseClasses = "inline-block text-sm rounded-xl p-3 focus:outline-none focus:ring-2 transition-colors";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400",
    accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}