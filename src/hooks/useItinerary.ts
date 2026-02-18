import { useEffect, useState } from "react";

import { mockItinerary } from "../mocks/itinerary.mock.ts";
import type Itinerary from "../types/Itinerary.ts";

async function getItineraryBySlug(slug: string): Promise<Itinerary> {
  //TODO: Replace with actual API call
  if (slug != mockItinerary.slug) {
    throw new Error("Itinerary not found");
  }

  return mockItinerary;
}

export default function useItinerary(slug: string) {
  const [data, setData] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getItineraryBySlug(slug)
      .then(setData)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug]);

  return { data, loading, error };
}
