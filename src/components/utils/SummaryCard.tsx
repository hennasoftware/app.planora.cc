import type Trip from "../../types/Trip.ts";

type SummaryCardProps = {
  trip: Trip;
};

export default function SummaryCard({ trip }: SummaryCardProps) {
  return (
    <div className="mx-auto flex w-full max-w-lg items-center justify-between gap-1 rounded-xl bg-white/90">
      <div className="flex w-1/3 flex-col items-center justify-center p-4">
        <i className="fa-solid fa-calendar-days mb-2 text-purple-500 md:mb-4 md:text-xl"></i>

        <span className="text-2xl font-bold md:text-4xl">{trip.days.length}</span>

        <span className="text-sm font-bold text-gray-500 md:text-base">DIAS</span>
      </div>

      <div className="flex w-1/3 flex-col items-center justify-center border-r border-l border-gray-300 p-4">
        <i className="fa-solid fa-ticket mb-2 text-pink-500 md:mb-4 md:text-xl"></i>

        <span className="text-2xl font-bold md:text-4xl">
          {trip.places.filter((place) => place.category === "activity").length}
        </span>

        <span className="text-sm font-bold text-gray-500 md:text-base">LOCAIS</span>
      </div>

      <div className="flex w-1/3 flex-col items-center justify-center p-4">
        <i className="fa-solid fa-wand-magic-sparkles mb-2 text-orange-500 md:mb-4 md:text-xl"></i>

        <i className="fa-solid fa-infinity mb-1 text-2xl font-extrabold md:text-4xl"></i>

        <span className="text-sm font-bold text-gray-500 md:text-base">MEMÓRIAS</span>
      </div>
    </div>
  );
}
