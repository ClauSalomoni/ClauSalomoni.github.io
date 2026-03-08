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

export type TextSize = typeof TEXT_SIZES;