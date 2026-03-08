import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  bgColor?: 'white' | 'gray' | 'dark';
}

export default function Section({ 
  children, 
  id, 
  className = '',
  bgColor = 'white'
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-950',
    gray: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 dark:bg-black'
  };

  return (
    <section 
      id={id} 
      className={`py-12 sm:py-16 md:py-24 ${bgClasses[bgColor]} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}