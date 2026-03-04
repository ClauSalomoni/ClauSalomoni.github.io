import { useTranslation } from 'react-i18next';

export type Surpresa = {
  frase: string;
  videoUrl: string;
  audioUrl: string;
};

// Hook personalizado para obter surpresas traduzidas
export const useSurpresas = (): Surpresa[] => {
  const { t } = useTranslation();

  const surpresas: Surpresa[] = [
    {
      frase: t('surpresas.frase1'),
      videoUrl: "https://www.youtube.com/embed/iiCemZxxopU",
      audioUrl: "https://cdn.pixabay.com/audio/2025/07/29/audio_2a1b68d9d9.mp3",
    },
    {
      frase: t('surpresas.frase2'),
      videoUrl: "https://www.youtube.com/embed/Uno7rKBOtEw",
      audioUrl: "https://cdn.pixabay.com/audio/2025/07/05/audio_381c19ad15.mp3",
    },
    {
      frase: t('surpresas.frase3'),
      videoUrl: "https://www.youtube.com/embed/OuyuVHQNWiQ",
      audioUrl: "https://cdn.pixabay.com/audio/2025/07/07/audio_4353d5c665.mp3",
    },
    {
      frase: t('surpresas.frase4'),
      videoUrl: "https://www.youtube.com/embed/QPxqidDoMSo",
      audioUrl: "https://cdn.pixabay.com/audio/2025/07/05/audio_ec0282fe66.mp3",
    },
    {
      frase: t('surpresas.frase5'),
      videoUrl: "https://www.youtube.com/embed/0lcK99WwzoE",
      audioUrl: "https://cdn.pixabay.com/audio/2025/06/26/audio_9f76605cae.mp3",
    },
    {
      frase: t('surpresas.frase6'),
      videoUrl: "https://www.youtube.com/embed/5fnI6teKT_g",
      audioUrl: "https://cdn.pixabay.com/audio/2024/04/21/audio_f12a210a71.mp3",
    },
    {
      frase: t('surpresas.frase7'),
      videoUrl: "https://www.youtube.com/embed/uBJo37Fmf4I",
      audioUrl: "https://cdn.pixabay.com/audio/2025/03/26/audio_41fc036a00.mp3",
    },
    {
      frase: t('surpresas.frase8'),
      videoUrl: "https://www.youtube.com/embed/F3j_BWaJVXE",
      audioUrl: "https://cdn.pixabay.com/audio/2025/05/09/audio_34a3d81554.mp3",
    },
    {
      frase: t('surpresas.frase9'),
      videoUrl: "https://www.youtube.com/embed/f0wxd0rYwy8",
      audioUrl: "https://cdn.pixabay.com/audio/2023/05/23/audio_7e2a7c614f.mp3",
    },
    {
      frase: t('surpresas.frase10'),
      videoUrl: "https://www.youtube.com/embed/FpuIbSUjMFA",
      audioUrl: "https://cdn.pixabay.com/audio/2024/12/21/audio_ec3933e0fb.mp3",
    },
    {
      frase: t('surpresas.frase11'),
      videoUrl: "https://www.youtube.com/embed/_HDUY3puPng",
      audioUrl: "https://cdn.pixabay.com/audio/2024/09/14/audio_d2a0b3e980.mp3",
    },
  ];

  return surpresas;
};

// Para manter compatibilidade com código existente que possa importar diretamente a constante
// Você pode também exportar um hook que retorna uma surpresa aleatória
export const useSurpresaAleatoria = (): Surpresa => {
  const surpresas = useSurpresas();
  const indiceAleatorio = Math.floor(Math.random() * surpresas.length);
  return surpresas[indiceAleatorio];
};