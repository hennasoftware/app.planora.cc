import BouncingBalls from "../components/utils/BouncingBalls.tsx";

export default function NoSlugPage() {
  return (
    <section
      id="no-slug-hero"
      className="hero relative z-10 flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-purple-500 via-pink-400 to-orange-400"
    >
      <BouncingBalls />

      <div className="relative z-10 container mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
        <i className="fa-solid fa-plane-departure text-6xl opacity-90"></i>

        <h1 className="mt-10 text-2xl leading-snug font-semibold transition-opacity duration-300 md:text-4xl">
          Para onde vamos?
        </h1>

        <h2 className="mt-4 text-white/90 md:text-xl">Para acessar um roteiro, é necessário um link completo</h2>

        <div className="mx-auto my-8 h-px w-12 bg-white opacity-50" />

        <p className="text-sm leading-relaxed text-white/70 md:text-base">
          Cada roteiro possui um endereço único. Utilize o link completo enviado para você para acessar sua jornada
          personalizada
        </p>
      </div>
    </section>
  );
}
