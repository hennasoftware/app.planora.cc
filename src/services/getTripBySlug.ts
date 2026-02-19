import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "./firebase";

export async function getTripBySlug(slug: string) {
  const q = query(collection(db, "trips"), where("slug", "==", slug), where("active", "==", true));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  return querySnapshot.docs[0].data();
}
