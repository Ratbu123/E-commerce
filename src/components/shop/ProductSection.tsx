import ProductCard from "./ProductCard";
import { useAnimation } from "@/contexts/AnimationContext";

import tshirtTape from "@/assets/products/tshirt-tape.jpg";
import skinnyJeans from "@/assets/products/skinny-jeans.jpg";
import checkeredShirt from "@/assets/products/checkered-shirt.jpg";
import sleeveStriped from "@/assets/products/sleeve-striped.jpg";
import verticalStriped from "@/assets/products/vertical-striped.jpg";
import courageGraphic from "@/assets/products/courage-graphic.jpg";
import bermudaShorts from "@/assets/products/bermuda-shorts.jpg";
import fadedJeans from "@/assets/products/faded-jeans.jpg";

const newArrivals = [
  { image: tshirtTape, name: "T-shirt with Tape Details", rating: 4.5, price: 120 },
  { image: skinnyJeans, name: "Skinny Fit Jeans", rating: 3.5, price: 240, originalPrice: 260, discount: "-20%" },
  { image: checkeredShirt, name: "Checkered Shirt", rating: 4.5, price: 180 },
  { image: sleeveStriped, name: "Sleeve Striped T-shirt", rating: 4.5, price: 130, originalPrice: 160, discount: "-30%" },
];

const topSelling = [
  { image: verticalStriped, name: "Vertical Striped Shirt", rating: 5, price: 212, originalPrice: 232, discount: "-20%" },
  { image: courageGraphic, name: "Courage Graphic T-shirt", rating: 4, price: 145 },
  { image: bermudaShorts, name: "Loose Fit Bermuda Shorts", rating: 3, price: 80 },
  { image: fadedJeans, name: "Faded Skinny Jeans", rating: 4.5, price: 210 },
];

const ProductSection = ({ title, products }: { title: string; products: typeof newArrivals }) => {
  const { isPremium } = useAnimation();
  return (
    <section className="container mx-auto py-12 md:py-16 px-4">
      <h2 className={`font-integral text-3xl md:text-5xl font-extrabold text-center mb-10 ${isPremium ? "animate-fade-in" : ""}`}>
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {products.map((p, i) => (
          <div key={i} className={isPremium ? "animate-fade-in-up" : ""} style={isPremium ? { animationDelay: `${i * 100}ms` } : undefined}>
            <ProductCard {...p} />
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-border rounded-lg px-12 py-3 text-sm font-medium">
          View All
        </button>
      </div>
    </section>
  );
};

export const NewArrivals = () => <ProductSection title="NEW ARRIVALS" products={newArrivals} />;
export const TopSelling = () => <ProductSection title="TOP SELLING" products={topSelling} />;
