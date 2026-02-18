export default interface Place {
  id: number;
  name: string;
  category: "activity" | "restaurant" | "store" | "point_of_interest";
  latitude: number;
  longitude: number;
  address?: string;
  website?: string;
}
