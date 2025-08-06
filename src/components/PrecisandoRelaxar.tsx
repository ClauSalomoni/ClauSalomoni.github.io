import { useState, useEffect } from "react";
import { surpresas } from "../data/surpresas";
import { useRef } from "react";
interface PrecisandoRelaxarProps {
  onClose: () => void;
}

export default function PrecisandoRelaxar({ onClose }: PrecisandoRelaxarProps) {
  const [etapa, setEtapa] = useState<"inicio" | "video" | "frase" | "musica">("inicio");
  const [mostrar, setMostrar] = useState(false);
  const [contador, setContador] = useState(7);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [surpresa] = useState(() => {
    const aleatoria = surpresas[Math.floor(Math.random() * surpresas.length)];
    return aleatoria;
  });

  useEffect(() => {
  setMostrar(true); // mostra ao montar
  setEtapa("video"); // reinicia etapa
  setTimeout(() => {
    videoRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 200); // espera pequeno delay (evita problemas de render)
  
}, []);

useEffect(() => {
  return () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
}, []);


  useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>;
  let intervalo: ReturnType<typeof setInterval>;

  if (etapa === "video") {
    timeout = setTimeout(() => {
      setEtapa("frase");
    }, 20000);
  }

  if (etapa === "frase") {
    setContador(7);

    timeout = setTimeout(() => {
      setEtapa("musica");
    }, 7000);

    intervalo = setInterval(() => {
      setContador((prev) => {
        if (prev <= 1) {
          clearInterval(intervalo);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  return () => {
    clearTimeout(timeout);
    clearInterval(intervalo);
  };
}, [etapa]);

  
  function fecharTudo() {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current = null;
  }
  onClose();
}
  function tocarMusica() {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const novaMusica = new Audio(surpresa.audioUrl);
    novaMusica.play();
    audioRef.current = novaMusica;
  }


  if (!mostrar) return null;

  return (
    <div className="text-center my-10">
      {etapa === "video" && mostrar && (
        <div ref={videoRef} className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Dê Play. Por 15 segundos o mundo pode esperar. 💕</h2>
          <div className="aspect-video max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={surpresa.videoUrl}
              title="Vídeo fofo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {etapa === "frase" && mostrar && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl border-2 border-accent/30 dark:border-accent/50 p-6 dark:bg-gray-800 shadow-md shadow-accent/20 text-center">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-secondary dark:text-secondary/80 mb-4">💖 Mensagem para você: fecha em: <strong>{contador}</strong> </h2>
            </div>
              <p className="text-gray-700 dark:text-gray-300 text-xl">
                {surpresa.frase}
              </p>
              
          </div>
        </div>
      )}

      {etapa === "musica" && mostrar && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">🎵</h2>
            <button
              onClick={tocarMusica}
              className="px-6 py-2 bg-accent text-white rounded-xl hover:bg-accent/80 transition"
          >
            Ouça enquanto navega
          </button>
          <audio ref={audioRef} src={surpresa.audioUrl} className="hidden"/>
           
        </div>
      )}

      
        <div className="mt-6">
          <button
            onClick={fecharTudo}
            className="text text-gray-400 underline hover:text-gray-700"
          >
            Fechar surpresa ❌
          </button>
        </div>
      
    </div>
  );
}