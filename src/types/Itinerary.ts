import type Accommodation from "./Accommodation.ts";
import type ItineraryDay from "./ItineraryDay.ts";
import type Location from "./Location.ts";

export default interface Itinerary {
  id: number;
  slug: string;
  startDate: string;
  endDate: string;
  location: Location;
  accommodation: Accommodation;
  days: ItineraryDay[];
}
