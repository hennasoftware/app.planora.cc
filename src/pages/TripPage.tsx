import { useParams } from "react-router-dom";

import useTrip from "../hooks/useTrip.ts";

export default function TripPage() {
  const params = useParams();
  const slug = params.slug;
  const { trip, loading, notFound } = useTrip(slug);

  let content;

  if (loading) {
    content = (
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
        <p>Loading itinerary...</p>
      </div>
    );
  } else if (notFound || !trip) {
    content = (
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
        <p>Error loading itinerary</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
          <h1>{trip.location.city} Itinerary</h1>
          <p>Start Date: {trip.startDate}</p>
          <p>End Date: {trip.endDate}</p>
        </div>

        <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
          <h2>Accommodation</h2>
          <p>{trip.accommodation.name}</p>
          <p>{trip.accommodation.address}</p>
          <a
            href={trip.accommodation.website}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Accommodation
          </a>
        </div>

        <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
          <h2>Places to Visit</h2>
          <ul>
            {trip.places.map((place) => (
              <li key={place.id}>
                <h3>{place.name}</h3>
                <p>{place.address}</p>
                <a href={place.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                  View Place
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2 bg-gray-500">{content}</div>
  );
}
