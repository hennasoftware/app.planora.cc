import type Trip from "../../../types/Trip.ts";
import BouncingBalls from "../../utils/BouncingBalls.tsx";

import TripPreview from "./TripPreview.tsx";

type HeroProps = {
  trip: Trip;
};

export default function Hero({ trip }: HeroProps) {
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
