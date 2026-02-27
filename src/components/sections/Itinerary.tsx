import formatCleanDate from "../../services/formatCleanDate.ts";
import type Trip from "../../types/Trip.ts";
import type TripDay from "../../types/TripDay.ts";

type ItineraryProps = {
  trip: Trip;
};

export default function Itinerary({ trip }: ItineraryProps) {
  const itinerary: TripDay[] = trip.days;

  return (
    <section id="itinerary" className="bg-linear-to-b from-pink-100 to-orange-50 px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-6 py-2 font-semibold text-white">
            Linha do Tempo
          </div>
          <h2 className="mb-3 text-4xl font-extrabold text-gray-900 md:text-5xl">Roteiro Diário</h2>
          <p className="text-lg text-gray-600">Tudo o que você precisa saber para cada dia da sua viagem</p>
        </div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-1 bg-linear-to-b from-purple-400 to-pink-400 md:left-8"></div>

          {itinerary.map((day) => (
            <div key={day.day} className="relative mb-12 md:mb-16">
              <div className="absolute left-0 z-10 flex size-9 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 font-bold text-white shadow-lg md:left-4">
                {day.day}
              </div>

              <div className="ml-16 md:ml-24">
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                  <div className="relative h-48 overflow-hidden md:h-64">
                    <img src={day.img} alt={day.title} className="h-full w-full object-cover" />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="mb-6">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-bold text-purple-600">Dia {day.day}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{formatCleanDate(day.date)}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">{day.title}</h3>
                    </div>

                    <div className="mb-6 space-y-4">
                      {day.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                            <i className={`fa-solid ${activity.icon} text-purple-600`}></i>
                          </div>

                          <div className="flex-1">
                            <div className="font-bold text-gray-900">{activity.time}</div>
                            <div className="text-gray-700">{activity.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {day.tip && (
                      <div className="rounded-r-lg border-l-4 border-purple-500 bg-purple-50 p-4">
                        <div className="flex gap-3">
                          <div className="shrink-0">
                            <i className="fa-solid fa-lightbulb text-purple-600"></i>
                          </div>
                          <div>
                            <div className="mb-1 font-bold text-purple-900">Dica</div>
                            <div className="text-sm leading-relaxed text-purple-800">{day.tip}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
