export default interface Place {
  id: number;
  name: string;
  category: "accommodation" | "activity" | "restaurant" | "store";
  latitude: number;
  longitude: number;
  address?: string;
  website?: string;
}
