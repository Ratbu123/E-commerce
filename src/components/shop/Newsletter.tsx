import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-primary rounded-2xl px-6 md:px-16 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="font-integral text-2xl md:text-[40px] font-extrabold text-primary-foreground leading-tight max-w-md">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[350px]">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg pl-10 pr-4 py-3 text-sm bg-background outline-none"
            />
          </div>
          <button className="bg-background text-foreground rounded-lg py-3 text-sm font-medium w-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
