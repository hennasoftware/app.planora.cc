import { useParams } from "react-router-dom";

import Hero from "../components/sections/hero/Hero.tsx";
import useTrip from "../hooks/useTrip.ts";

import LoadingPage from "./LoadingPage.tsx";
import SlugNotFoundPage from "./SlugNotFoundPage.tsx";

export default function TripPage() {
  const params = useParams();
  const slug = params.slug;
  const { trip, loading, notFound } = useTrip(slug);

  if (loading) return <LoadingPage />;

  if (notFound || !trip) return <SlugNotFoundPage />;

  return <Hero trip={trip} />;
}
