import heroImage from "@/assets/hero-couple.jpg";
import { useAnimation } from "@/contexts/AnimationContext";

const Hero = () => {
  const { isPremium } = useAnimation();
  return (
    <section className="bg-shop-hero">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <div className={`flex-1 py-12 lg:py-24 ${isPremium ? "animate-fade-in-up" : ""}`}>
          <h2 className="font-integral text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight">
            FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
          </h2>
          <p className="mt-5 text-muted-foreground text-sm md:text-base max-w-lg">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-7 bg-primary text-primary-foreground rounded-lg px-14 py-3.5 text-sm font-medium">
            Shop Now
          </button>
          <div className="flex items-center gap-8 mt-8 flex-wrap">
            <div>
              <p className="text-2xl md:text-[40px] font-bold">200+</p>
              <p className="text-xs text-muted-foreground">International Brands</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-2xl md:text-[40px] font-bold">2,000+</p>
              <p className="text-xs text-muted-foreground">High-Quality Products</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div>
              <p className="text-2xl md:text-[40px] font-bold">30,000+</p>
              <p className="text-xs text-muted-foreground">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img src={heroImage} alt="Fashion models" className="w-full max-w-lg object-cover" width={1024} height={1024} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
