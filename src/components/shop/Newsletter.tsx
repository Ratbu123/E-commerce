import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="newsletter-bg rounded-2xl px-6 md:px-16 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-xl">
        
        <h2 className="font-integral text-2xl md:text-[40px] font-extrabold text-white leading-tight max-w-md">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[350px]">
          
          {/* INPUT */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg pl-10 pr-4 py-3 text-sm bg-white outline-none transition-all focus:ring-2 focus:ring-primary/40"
            />
          </div>

          {/* BUTTON */}
          <button className="bg-white text-black rounded-lg py-3 text-sm font-medium w-full transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]">
            Subscribe to Newsletter
          </button>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;