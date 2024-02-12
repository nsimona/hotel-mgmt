import { createClient } from "@sanity/client";

const sanityCLient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANIITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: "2021-10-21",
});

export default sanityCLient;
