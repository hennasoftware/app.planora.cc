import { useEffect, useState } from "react";

import { getTripBySlug } from "../services/getTripBySlug.ts";
import mapFirestoreTrip from "../services/mapFirestoreTrip.ts";
import type Trip from "../types/Trip.ts";

export default function useTrip(slug?: string) {
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTrip() {
      if (!slug) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const data = await getTripBySlug(slug);

      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      const now = new Date();
      const expireDate = new Date(data.expireDate);

      if (expireDate < now) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setTrip(mapFirestoreTrip(data));
      setLoading(false);
    }

    fetchTrip();
  }, [slug]);

  return { trip, loading, notFound };
}
