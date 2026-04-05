import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating }: { rating: number }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-shop-star text-shop-star" />
      ))}
      {half && <StarHalf className="w-4 h-4 fill-shop-star text-shop-star" />}
    </div>
  );
};

export default StarRating;
