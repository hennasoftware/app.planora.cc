import type Activity from "./Activity.ts";

export default interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  img?: string;
  activities: Activity[];
  tip?: string;
}
