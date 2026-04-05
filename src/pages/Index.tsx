import { AnimationProvider } from "@/contexts/AnimationContext";
import ModeToggle from "@/components/shop/ModeToggle";
import Header from "@/components/shop/Header";
import Hero from "@/components/shop/Hero";
import BrandBar from "@/components/shop/BrandBar";
import { NewArrivals, TopSelling } from "@/components/shop/ProductSection";
import BrowseStyles from "@/components/shop/BrowseStyles";
import Reviews from "@/components/shop/Reviews";
import Newsletter from "@/components/shop/Newsletter";
import Footer from "@/components/shop/Footer";

const Index = () => {
  return (
    <AnimationProvider>
      <ModeToggle />
      <Header />
      <Hero />
      <BrandBar />
      <NewArrivals />
      <div className="border-t border-border" />
      <TopSelling />
      <BrowseStyles />
      <Reviews />
      <Newsletter />
      <Footer />
    </AnimationProvider>
  );
};

export default Index;
