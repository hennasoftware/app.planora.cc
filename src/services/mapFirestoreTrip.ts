import type { DocumentData } from "firebase/firestore";

import type Activity from "../types/Activity.ts";
import type Place from "../types/Place.ts";
import type Trip from "../types/Trip.ts";
import type TripDay from "../types/TripDay.ts";

export default function mapFirestoreTrip(doc: DocumentData): Trip {
  return {
    id: doc.id,
    slug: doc.slug ?? "",
    startDate: doc.startDate,
    endDate: doc.endDate,
    expireDate: doc.expireDate,
    active: Boolean(doc.active),
    meta: {
      createdAt: doc.meta?.createdAt,
      author: doc.meta?.author ?? "",
    },
    location: {
      city: doc.location?.city ?? "",
      state: doc.location?.state ?? "",
      country: doc.location?.country ?? "",
      timezone: doc.location?.timezone ?? "",
      latitude: Number(doc.location?.latitude ?? 0),
      longitude: Number(doc.location?.longitude ?? 0),
    },
    accommodation: {
      name: doc.accommodation?.name ?? "",
      address: doc.accommodation?.address ?? "",
      website: doc.accommodation?.website ?? "",
      checkInDate: doc.accommodation?.checkInDate,
      checkInTime: doc.accommodation?.checkInTime ?? "",
      checkOutDate: doc.accommodation?.checkOutDate,
      checkOutTime: doc.accommodation?.checkOutTime ?? "",
      latitude: Number(doc.accommodation?.latitude ?? 0),
      longitude: Number(doc.accommodation?.longitude ?? 0),
    },
    places: (doc.places ?? []).map((place: Place) => ({
      id: Number(place.id),
      name: place.name ?? "",
      category: place.category ?? "",
      latitude: Number(place.latitude ?? 0),
      longitude: Number(place.longitude ?? 0),
      address: place.address ?? "",
      website: place.website ?? "",
    })),
    days: (doc.days ?? []).map((day: TripDay) => ({
      day: Number(day.day),
      date: day.date,
      title: day.title ?? "",
      img: day.img ?? "",
      activities: (day.activities ?? []).map((activity: Activity) => ({
        time: activity.time ?? "",
        description: activity.description ?? "",
      })),
      tip: day.tip ?? "",
    })),
  };
}
