import { useParams } from "react-router-dom";

import useTrip from "../../../hooks/useTrip.ts";
import BouncingBalls from "../../utils/BouncingBalls.tsx";

import TripPreview from "./TripPreview.tsx";

export default function Hero() {
  const params = useParams();
  const slug = params.slug;
  const { trip, loading, notFound } = useTrip(slug);

  if (loading) {
    return (
      <section
        id="hero"
        className="hero relative z-10 flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-purple-500 via-pink-400 to-orange-400"
      >
        <BouncingBalls />
        <div className="text-2xl text-white">Carregando...</div>
      </section>
    );
  }

  if (notFound || !trip) {
    return (
      <section
        id="hero"
        className="hero relative z-10 flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-purple-500 via-pink-400 to-orange-400"
      >
        <BouncingBalls />
        <div className="text-2xl text-white">Itinerário não encontrado.</div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="hero relative z-10 h-screen overflow-hidden bg-linear-to-br from-purple-500 via-pink-400 to-orange-400"
    >
      <BouncingBalls />
      <TripPreview trip={trip} />
    </section>
  );
}
