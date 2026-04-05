import StarRating from "./StarRating";
import { useAnimation } from "@/contexts/AnimationContext";

interface ProductCardProps {
  image: string;
  name: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: string;
}

const ProductCard = ({ image, name, rating, price, originalPrice, discount }: ProductCardProps) => {
  const { isPremium } = useAnimation();
  return (
    <div className={`group ${isPremium ? "transition-transform duration-300 hover:scale-[1.02]" : ""}`}>
      <div className="bg-shop-hero rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
      </div>
      <div className="mt-3">
        <h3 className="font-satoshi font-bold text-sm md:text-base">{name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <StarRating rating={rating} />
          <span className="text-xs text-muted-foreground">{rating}/5</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-lg md:text-xl">${price}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">${originalPrice}</span>
          )}
          {discount && (
            <span className="bg-red-50 text-shop-sale text-xs font-medium rounded-lg px-2 py-0.5">{discount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
