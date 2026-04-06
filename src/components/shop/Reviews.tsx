import StarRating from "./StarRating";
import { useAnimation } from "@/contexts/AnimationContext";
import { CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    rating: 5,
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    rating: 5,
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

const Reviews = () => {
  const { isPremium } = useAnimation();

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Gradient Heading */}
      <h2
        className={`font-integral text-3xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#4F46FF] via-[#6366F1] to-[#818CF8] bg-clip-text text-transparent ${
          isPremium ? "animate-fade-in" : ""
        }`}
      >
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`border rounded-2xl p-6 md:p-8 transition-all ${
              isPremium
                ? "hover:shadow-lg hover:-translate-y-1 animate-fade-in-up"
                : ""
            }`}
            style={{
              borderColor: "rgba(79, 70, 255, 0.5)", // low-opacity indigo border
              animationDelay: isPremium ? `${i * 150}ms` : undefined,
            }}
          >
            <StarRating rating={review.rating} />

            <div className="flex items-center gap-1 mt-3">
              <span className="font-bold">{review.name}</span>
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>

            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;