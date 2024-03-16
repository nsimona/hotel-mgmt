import { Room } from "@/app/models/room";
import sanityCLient from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRoom() {
  const result = await sanityCLient.fetch<Room>(
    queries.getFeaturedRoomQuery,
    {},
    { cache: "no-cache" }
    // { next: { revalidate: 1800 } } // every 30 mins
  );

  return result;
}

export async function getRooms() {
  const result = await sanityCLient.fetch(queries.getRoomsQuery);
  return result;
}
