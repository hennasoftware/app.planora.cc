import BouncingBalls from "../components/utils/BouncingBalls.tsx";

export default function InvalidRoutePage() {
  return (
    <section
      id="invalid-route-hero"
      className="hero relative z-10 flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-purple-500 via-pink-400 to-orange-400"
    >
      <BouncingBalls />

      <div className="relative z-10 container mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
        <i className="fa-regular fa-circle-question text-6xl opacity-90"></i>

        <h1 className="mt-10 text-2xl leading-snug font-semibold transition-opacity duration-300 md:text-4xl">
          Ops! Não há nada aqui
        </h1>

        <h2 className="mt-4 text-white/90 md:text-xl">
          O endereço informado não corresponde a nenhuma área do aplicativo
        </h2>

        <div className="mx-auto my-8 h-px w-12 bg-white opacity-50" />

        <p className="text-sm leading-relaxed text-white/70 md:text-base">
          Se você está tentando acessar uma jornada, utilize o link completo enviado para você
        </p>
      </div>
    </section>
  );
}
