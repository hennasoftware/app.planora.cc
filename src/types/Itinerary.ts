import type Accommodation from "./Accommodation.ts";
import type ItineraryDay from "./ItineraryDay.ts";
import type Location from "./Location.ts";
import type Place from "./Place.ts";

export default interface Itinerary {
  id: number;
  slug: string;
  startDate: string;
  endDate: string;
  expireDate: string;
  meta: {
    version: string;
    createdAt: string;
    author: string;
  };
  location: Location;
  accommodation: Accommodation;
  places: Place[];
  days: ItineraryDay[];
}
