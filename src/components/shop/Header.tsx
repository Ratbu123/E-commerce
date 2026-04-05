import { Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="bg-primary text-primary-foreground text-center text-xs py-2 px-4">
        Sign up and get 20% off to your first order.{" "}
        <a href="#" className="underline font-medium">Sign Up Now</a>
      </div>
      <nav className="container mx-auto flex items-center justify-between py-5 px-4">
        <div className="flex items-center gap-6">
          <h1 className="font-integral text-2xl md:text-[32px] font-extrabold tracking-tight">SHOP.CO</h1>
          <div className="hidden md:flex items-center gap-6 text-sm font-satoshi">
            <a href="#" className="flex items-center gap-1">Shop <span className="text-xs">▾</span></a>
            <a href="#">On Sale</a>
            <a href="#">New Arrivals</a>
            <a href="#">Brands</a>
          </div>
        </div>
        <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-secondary rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 lg:hidden" />
          <ShoppingCart className="w-5 h-5" />
          <User className="w-5 h-5" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
