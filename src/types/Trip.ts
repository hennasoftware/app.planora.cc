import type Accommodation from "./Accommodation.ts";
import type Location from "./Location.ts";
import type Place from "./Place.ts";
import type TripDay from "./TripDay.ts";

export default interface Trip {
  slug: string;
  startDate: string;
  endDate: string;
  expireDate: string;
  active: boolean;
  meta: {
    createdAt: string;
    author: string;
  };
  location: Location;
  accommodation: Accommodation;
  places: Place[];
  days: TripDay[];
}
