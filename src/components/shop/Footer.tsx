const footerLinks = {
  COMPANY: ["About", "Features", "Works", "Career"],
  HELP: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  FAQ: ["Account", "Manage Deliveries", "Orders", "Payments"],
  RESOURCES: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
};

const Footer = () => {
  return (
    <footer className="bg-shop-hero mt-12">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-integral text-2xl font-extrabold mb-4">SHOP.CO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-satoshi font-medium text-sm tracking-widest mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border mt-10 pt-6 text-center text-muted-foreground text-sm">
          Shop.co © 2000-2023, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
