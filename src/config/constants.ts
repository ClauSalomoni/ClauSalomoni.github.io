// src/config/constants.ts

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || ''}?text=${encodeURIComponent(
    'Olá Claudia, vi seu portfólio e gostaria de conversar!'
  )}`,
  email: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS || ''}`,
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '#',
  cvOnline: import.meta.env.VITE_CV_ONLINE_URL || '#',
} as const;