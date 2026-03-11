// src/constants/typography.ts
export const TEXT_SIZES = {
  hero: {
    title: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  },
  section: {
    title: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    subtitle: 'text-lg sm:text-xl md:text-2xl',
  },
  body: {
    large: 'text-base sm:text-lg md:text-xl',
    base: 'text-sm sm:text-base md:text-lg',
    small: 'text-xs sm:text-sm md:text-base',
  },
  components: {
    card: 'text-sm sm:text-base',
    button: 'text-sm sm:text-base',
    nav: 'text-sm sm:text-base',
  }
} as const;
// ✅ NOVO: Cores com contraste GARANTIDO
export const TEXT_COLORS = {
  // Modo Claro (fundo branco/cinza claro)
  light: {
    primary: 'text-gray-900',   // Quase preto - 16:1 contraste
    secondary: 'text-gray-700',  // Cinza escuro - 9:1 contraste  
    tertiary: 'text-gray-600',   // Cinza médio - 7:1 contraste
    accent: 'text-indigo-600',   // Roxo escuro - bom contraste
    white: 'text-white',         // Branco puro
  },
  // Modo Escuro (fundo escuro)
  dark: {
    primary: 'text-gray-100',    // Quase branco - 16:1 contraste
    secondary: 'text-gray-300',   // Cinza claro - 9:1 contraste
    tertiary: 'text-gray-400',    // Cinza médio - 7:1 contraste
    accent: 'text-indigo-400',    // Roxo claro - bom contraste
    black: 'text-gray-900',       // Preto
  }
} as const;


export type TextSize = typeof TEXT_SIZES;