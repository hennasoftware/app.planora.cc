import type Activity from "./Activity.ts";

export default interface TripDay {
  day: number;
  date: string;
  title: string;
  img?: string;
  activities: Activity[];
  tip?: string;
}
