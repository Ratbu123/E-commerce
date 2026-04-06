import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import { useAnimation } from "@/contexts/AnimationContext";

// ------------------ PRODUCT DATA ------------------

import tshirtTape from "@/assets/products/tshirt-tape.jpg";
import skinnyJeans from "@/assets/products/skinny-jeans.jpg";
import checkeredShirt from "@/assets/products/checkered-shirt.jpg";
import sleeveStriped from "@/assets/products/sleeve-striped.jpg";
import verticalStriped from "@/assets/products/vertical-striped.jpg";
import courageGraphic from "@/assets/products/courage-graphic.jpg";
import bermudaShorts from "@/assets/products/bermuda-shorts.jpg";
import fadedJeans from "@/assets/products/faded-jeans.jpg";

export const newArrivals = [
  { image: tshirtTape, name: "T-shirt with Tape Details", rating: 4.5, price: 120 },
  { image: skinnyJeans, name: "Skinny Fit Jeans", rating: 3.5, price: 240, originalPrice: 260, discount: "-20%" },
  { image: checkeredShirt, name: "Checkered Shirt", rating: 4.5, price: 180 },
  { image: sleeveStriped, name: "Sleeve Striped T-shirt", rating: 4.5, price: 130, originalPrice: 160, discount: "-30%" },
  { image: verticalStriped, name: "Casual Vertical Shirt", rating: 4.2, price: 150 },
  { image: courageGraphic, name: "Minimal Graphic Tee", rating: 4.8, price: 170 },
  { image: bermudaShorts, name: "Summer Bermuda Shorts", rating: 3.9, price: 90 },
  { image: fadedJeans, name: "Slim Faded Jeans", rating: 4.4, price: 220 },
];

export const topSelling = [
  { image: verticalStriped, name: "Vertical Striped Shirt", rating: 5, price: 212, originalPrice: 232, discount: "-20%" },
  { image: courageGraphic, name: "Courage Graphic T-shirt", rating: 4, price: 145 },
  { image: bermudaShorts, name: "Loose Fit Bermuda Shorts", rating: 3, price: 80 },
  { image: fadedJeans, name: "Faded Skinny Jeans", rating: 4.5, price: 210 },
  { image: tshirtTape, name: "Tape Detail Tee Premium", rating: 4.7, price: 140 },
  { image: skinnyJeans, name: "Stretch Skinny Jeans", rating: 4.3, price: 260 },
  { image: checkeredShirt, name: "Classic Checkered Shirt", rating: 4.6, price: 190 },
  { image: sleeveStriped, name: "Striped Sleeve Tee", rating: 4.1, price: 135 },
];

// ------------------ PRODUCT SECTION COMPONENT ------------------

const INITIAL_VISIBLE = 4;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const ProductSection = ({
  title,
  products,
}: {
  title: string;
  products: typeof newArrivals;
}) => {
  const { isPremium } = useAnimation();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleViewMore = () => setVisibleCount((prev) => prev + 4);
  const handleShowLess = () => setVisibleCount(INITIAL_VISIBLE);

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="container mx-auto py-12 md:py-16 px-4">
      {/* Gradient Heading */}
      <h2
        className={`font-integral text-3xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#4F46FF] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent ${
          isPremium ? "animate-fade-in" : ""
        }`}
      >
        {title}
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {isPremium ? (
          <AnimatePresence>
            {visibleProducts.map((product, i) => (
              <motion.div
                key={product.name + i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          visibleProducts.map((product, i) => (
            <div key={product.name + i}>
              <ProductCard {...product} />
            </div>
          ))
        )}
      </div>

      {/* View More / Show Less Buttons */}
      <div className="text-center mt-8 flex justify-center gap-4">
        {visibleCount < products.length && (
          <button
            onClick={handleViewMore}
            className="border border-indigo-500/50 rounded-lg px-8 py-3 text-sm font-medium
                       bg-transparent text-black
                       transition-all duration-500 ease-in-out
                       hover:text-white hover:bg-gradient-to-r hover:from-[#4F46FF] hover:via-[#6366F1] hover:to-[#818CF8]"
          >
            View More
          </button>
        )}
        {visibleCount > INITIAL_VISIBLE && (
          <button
            onClick={handleShowLess}
            className="border border-indigo-500/50 rounded-lg px-8 py-3 text-sm font-medium
                       bg-transparent text-black
                       transition-all duration-500 ease-in-out
                       hover:text-white hover:bg-gradient-to-r hover:from-[#4F46FF] hover:via-[#6366F1] hover:to-[#818CF8]"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

// ------------------ EXPORTS ------------------

export const NewArrivals = () => <ProductSection title="NEW ARRIVALS" products={newArrivals} />;
export const TopSelling = () => <ProductSection title="TOP SELLING" products={topSelling} />;

export default ProductSection;