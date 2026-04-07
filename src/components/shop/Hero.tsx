import heroImage from "@/assets/hero.png";
import { useAnimation } from "@/contexts/AnimationContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const { isPremium } = useAnimation();

  const [brandsCount, setBrandsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);

  useEffect(() => {
    if (!isPremium) return;

    let startTime: number;
    const duration = 1500;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setBrandsCount(Math.floor(200 * progress));
      setProductsCount(Math.floor(2000 * progress));
      setCustomersCount(Math.floor(30000 * progress));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isPremium]);

  return (
    <section className="bg-shop-hero relative w-full overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 relative z-10">

        {/* LEFT */}
        <div className={`flex-1 py-12 lg:py-24 ${isPremium ? "animate-fade-in-up" : ""}`}>

          {/* TITLE */}
          <h2 className="font-integral text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight hero-title">
            FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
          </h2>

          <p className="mt-5 font-satoshi text-muted-foreground text-sm md:text-base max-w-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>

          {/* BUTTON */}
          {isPremium ? (
            <motion.button
              className="mt-7 font-satoshi btn-primary relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none btn-shine"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Shop Now</span>
            </motion.button>
          ) : (
            <button className="mt-7 font-satoshi btn-primary">
              Shop Now
            </button>
          )}

          {/* STATS */}
          <div className="flex items-center gap-8 mt-8 flex-wrap font-satoshi">
            <div>
              <p className="text-2xl md:text-[40px] font-bold">
                {isPremium ? brandsCount : 200}+
              </p>
              <p className="text-xs text-muted-foreground">International Brands</p>
            </div>

            <div className="w-px h-12 bg-border" />

            <div>
              <p className="text-2xl md:text-[40px] font-bold">
                {isPremium ? productsCount : 2000}+
              </p>
              <p className="text-xs text-muted-foreground">High-Quality Products</p>
            </div>

            <div className="w-px h-12 bg-border hidden md:block" />

            <div>
              <p className="text-2xl md:text-[40px] font-bold">
                {isPremium ? customersCount : 30000}+
              </p>
              <p className="text-xs text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-end relative z-0">
          <img
            src={heroImage}
            alt="Fashion models"
            className="w-full max-w-lg object-contain translate-y-16 scale-150"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;