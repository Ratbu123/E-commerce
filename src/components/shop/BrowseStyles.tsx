import casualImg from "@/assets/styles/casual.jpg";
import formalImg from "@/assets/styles/formal.jpg";
import partyImg from "@/assets/styles/party.jpg";
import gymImg from "@/assets/styles/gym.jpg";
import { useAnimation } from "@/contexts/AnimationContext";

const styles = [
  { name: "Casual", image: casualImg, className: "col-span-1 md:col-span-1" },
  { name: "Formal", image: formalImg, className: "col-span-1 md:col-span-2" },
  { name: "Party", image: partyImg, className: "col-span-1 md:col-span-2" },
  { name: "Gym", image: gymImg, className: "col-span-1 md:col-span-1" },
];

const BrowseStyles = () => {
  const { isPremium } = useAnimation();

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="bg-shop-hero rounded-[40px] px-6 md:px-16 py-10 md:py-16">
        {/* ✅ NOW USES GLOBAL HERO TITLE */}
        <h2
          className={`font-integral text-3xl md:text-5xl font-extrabold text-center mb-10 hero-title ${
            isPremium ? "animate-fade-in" : ""
          }`}
        >
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {styles.map((style, i) => (
            <div
              key={style.name}
              className={`${style.className} relative rounded-2xl overflow-hidden h-48 md:h-72 ${
                isPremium
                  ? "transition-transform duration-300 hover:scale-[1.02] animate-scale-in"
                  : ""
              }`}
              style={isPremium ? { animationDelay: `${i * 100}ms` } : undefined}
            >
              {/* Image */}
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={512}
                height={512}
              />

              {/* Text on image */}
              <span className="absolute top-5 left-5 font-satoshi font-bold text-xl md:text-2xl text-white mix-blend-difference">
                {style.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseStyles;