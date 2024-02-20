import sanityCLient from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRoom() {
  const result = await sanityCLient.fetch(
    queries.getFeaturedRoomQuery,
    {}
    // { next: { revalidate: 1800 } } // every 30 secs
  );

  return result;
}
