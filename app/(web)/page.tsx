import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import Newsletter from "@/components/Newsletter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <PageSearch />
      <FeaturedRoom />
      <Gallery />
      <Newsletter />
    </>
  );
}
