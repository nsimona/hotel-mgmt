import { groq } from "next-sanity";

export const getFeaturedRoomQuery = groq`*[_type === "hotelRoom" && isFeatured == true][o] {
    _id,
    description,
    discount,
    images,
    isFeatured,
    name,
    price,
    slug
}`;
