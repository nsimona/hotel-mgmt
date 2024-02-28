import Gallery from "@/components/Gallery/Gallery";
import Newsletter from "@/components/Newsletter/Newsletter";
import PageSearch from "@/components/PageSearch/PageSearch";
import Hero from "@/components/Hero/hero";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { getFeaturedRoom } from "@/libs/api";
import { useEffect } from "react";

const Home = async () => {
  const featuredRoom = await getFeaturedRoom();

  return (
    <>
      <Hero />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <Newsletter />
    </>
  );
};

export default Home;
