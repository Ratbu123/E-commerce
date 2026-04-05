const brands = [
  { name: "VERSACE", src: "/brands/versace.svg" },
  { name: "ZARA", src: "/brands/zara.svg" },
  { name: "GUCCI", src: "/brands/gucci.svg" },
  { name: "PRADA", src: "/brands/prada.svg" },
  { name: "Calvin Klein", src: "/brands/calvin-klein.svg" },
];

const BrandBar = () => {
  return (
    <div className="bg-primary py-5">
      <div className="container mx-auto px-4 md:px-8">

        {/* MOBILE: 3 on top, 2 on bottom */}
        <div className="grid grid-cols-3 gap-6 justify-items-center md:hidden">
          {brands.slice(0, 3).map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-6 object-contain brightness-0 invert"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center mt-4 md:hidden">
          {brands.slice(3).map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-6 object-contain brightness-0 invert"
            />
          ))}
        </div>

        {/* DESKTOP: single row */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              className="h-8 object-contain brightness-0 invert"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default BrandBar;