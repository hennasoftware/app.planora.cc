import type Trip from "../types/Trip.ts";

export const mockTrip: Trip = {
  id: "38ym2LxbHHrzZCZZpI2x",
  slug: "orlando-2026",
  startDate: "2026-05-27",
  endDate: "2026-06-12",
  expireDate: "2026-06-19",
  active: true,
  meta: {
    createdAt: "2024-02-01",
    author: "Planora",
  },
  location: {
    city: "Orlando",
    state: "Florida",
    country: "United States",
    timezone: "America/New_York",
    latitude: 28.535813696544647,
    longitude: -81.38124941747176,
  },
  accommodation: {
    name: "AirBnb - Kissimmee Townhouse",
    address: "4436 Le Reve Ct, Kissimmee, FL 34746",
    website:
      "https://www.airbnb.com.br/rooms/53540930?check_in=2026-05-27&check_out=2026-06-12&guests=1&adults=8&s=67&unique_share_id=f20a9331-80e8-4a0a-8353-9b58eb5c7924",
    checkInDate: "2026-05-27",
    checkInTime: "16h00",
    checkOutDate: "2026-06-12",
    checkOutTime: "12h00",
    latitude: 28.30049048176157,
    longitude: -81.45906819377491,
  },
  places: [
    {
      id: 10,
      name: "Disney's Magic Kingdom",
      category: "activity",
      latitude: 28.418828608442183,
      longitude: -81.58176941503291,
      address: "Bay Lake, FL 32836, United States",
      website:
        "https://www.disneyworld.eu/destinations/magic-kingdom/?CMP=OKC-80007944_GM_WDW_destination_magickingdompark_NA",
    },
  ],
  days: [
    {
      day: 1,
      date: "2026-05-27",
      title: "Arrival and Check-in",
      img: "https://placehold.co/600x400",
      activities: [
        {
          time: "16h00",
          description: "Check-in at the accommodation and settle in.",
        },
      ],
      tip: "Make sure to bring a copy of your reservation confirmation and a valid ID for check-in.",
    },
  ],
};
