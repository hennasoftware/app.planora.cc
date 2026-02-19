import type Trip from "../../../types/Trip.ts";
import Countdown from "../../utils/Countdown.tsx";
import RotatingMessage from "../../utils/RotatingMessage.tsx";
import SummaryCard from "../../utils/SummaryCard.tsx";

type TripPreviewProps = {
  trip: Trip;
};

export default function TripPreview({ trip }: TripPreviewProps) {
  return (
    <div className="relative z-10 container mx-auto flex h-full max-w-4xl flex-col justify-between px-4 pt-5 pb-40 md:pb-20">
      <div className="flex w-full flex-col items-center gap-8 text-white">
        <p className="w-full max-w-md rounded-full bg-white/25 py-2 text-center text-sm font-semibold md:text-base">
          ⭐ A viagem dos sonhos está chegando! ⭐
        </p>

        <div className="text-center">
          <h1 className="text-7xl font-extrabold md:text-9xl">{trip.location.city}</h1>

          <span className="text-5xl md:text-7xl">Magic Trip</span>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-4 text-white">
        <p className="text-center text-sm font-semibold md:text-base">Uma aventura inesquecível começa em...</p>

        <Countdown targetDate={trip.startDate} />
      </div>

      <RotatingMessage trip={trip} />

      <SummaryCard trip={trip} />
    </div>
  );
}
