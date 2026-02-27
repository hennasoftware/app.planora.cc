import { useMemo } from "react";

import BouncingBalls from "../components/utils/BouncingBalls";
import useLoading from "../hooks/useLoading.ts";

export default function LoadingPage() {
  const steps = useMemo(
    () => [
      { delay: 0, message: "Preparando seu roteiro" },
      { delay: 5000, message: "Organizando os detalhes da sua viagem" },
      { delay: 10000, message: "Finalizando os últimos ajustes" },
      { delay: 15000, message: "Está levando mais tempo que o esperado", showRetry: true },
    ],
    []
  );
  const { message, showRetry, isTransitioning } = useLoading(steps);

  return (
    <section
      id="loading-hero"
      className="hero relative z-10 flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-purple-500 via-pink-400 to-orange-400"
    >
      <BouncingBalls />

      <div className="relative z-10 container mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
        <h1
          className={`text-3xl font-semibold transition-opacity duration-300 md:text-5xl ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          {message}
        </h1>

        <div className="relative my-8 h-1 w-2/3 overflow-hidden bg-white/30">
          <div className="animate-loading-slide absolute top-0 left-0 h-full w-1/3 bg-white"></div>
        </div>

        {showRetry && (
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 font-semibold text-white/80 transition hover:cursor-pointer hover:text-white"
          >
            Recarregar
            <i className="fa-solid fa-arrow-rotate-right"></i>
          </button>
        )}
      </div>
    </section>
  );
}
