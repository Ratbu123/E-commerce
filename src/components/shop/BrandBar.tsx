const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"];

const BrandBar = () => {
  return (
    <div className="bg-primary py-5 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between px-8 flex-wrap gap-4">
        {brands.map((brand) => (
          <span key={brand} className="text-primary-foreground font-bold text-xl md:text-3xl tracking-wider font-integral">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandBar;
