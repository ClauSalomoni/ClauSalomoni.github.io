import React from 'react';

interface GridProps {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Grid({ 
  children, 
  cols = 2, 
  gap = 'md',
  className = '' 
}: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2 gap-8',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const gapSizes = {
    sm: 'gap-4',
    md: 'gap-8', 
    lg: 'gap-12',
  };

  return (
    <div className={`grid ${gridCols[cols]} ${gapSizes[gap]} ${className}`}>
      {children}
    </div>
  );
}