import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function BtnScrollTop() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const threshold = window.innerWidth < 768 ? 10 : 200;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all"
        aria-label={t('btn_scroll.aria_label')}
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    )
  );
}