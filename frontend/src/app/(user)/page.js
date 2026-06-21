import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <LatestProducts />
      <PopularCategories />
      <Footer />
    </>
  );
}
