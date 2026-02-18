import useItinerary from "../hooks/useItinerary.ts";

export default function ItineraryPage() {
  const { data, loading, error } = useItinerary("orlando-2026");
  let content;

  if (loading) {
    content = (
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
        <p>Loading itinerary...</p>
      </div>
    );
  } else if (error) {
    content = (
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
        <p>Error loading itinerary: {error}</p>
      </div>
    );
  } else if (!data) {
    content = (
      <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
        <p>No itinerary data available.</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
          <h1>{data.location.city} Itinerary</h1>
          <p>Start Date: {data.startDate}</p>
          <p>End Date: {data.endDate}</p>
        </div>

        <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white p-6">
          <h2>Accommodation</h2>
          <p>{data.accommodation.name}</p>
          <p>{data.accommodation.address}</p>
          <a
            href={data.accommodation.website}
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
            {data.places.map((place) => (
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
