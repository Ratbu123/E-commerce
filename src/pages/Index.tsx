import { AnimationProvider, useAnimation } from "@/contexts/AnimationContext";
import { motion } from "framer-motion";
import ModeToggle from "@/components/shop/ModeToggle";
import Header from "@/components/shop/Header";
import Hero from "@/components/shop/Hero";
import BrandBar from "@/components/shop/BrandBar";
import { NewArrivals, TopSelling } from "@/components/shop/ProductSection";
import BrowseStyles from "@/components/shop/BrowseStyles";
import Reviews from "@/components/shop/Reviews";
import Newsletter from "@/components/shop/Newsletter";
import Footer from "@/components/shop/Footer";
import { useEffect } from "react";

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const { isPremium } = useAnimation();

  if (!isPremium) return <>{children}</>; // no animation on standard

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  const { isPremium } = useAnimation();

  // refresh page when switching to premium
  useEffect(() => {
    if (isPremium) {
      window.location.reload();
    }
  }, [isPremium]);

  const sections = [
    { component: <ModeToggle />, delay: 0 },
    { component: <Header />, delay: 0.1 },
    { component: <Hero />, delay: 0.2 },
    { component: <BrandBar />, delay: 0.3 },
    { component: <NewArrivals />, delay: 0.4 },
    { component: <div className="border-t border-border" />, delay: 0.5 },
    { component: <TopSelling />, delay: 0.6 },
    { component: <BrowseStyles />, delay: 0.7 },
    { component: <Reviews />, delay: 0.8 },
    { component: <Newsletter />, delay: 0.9 },
    { component: <Footer />, delay: 1 },
  ];

  return (
    <AnimationProvider>
      {sections.map((section, i) => (
        <AnimatedSection key={i} delay={section.delay}>
          {section.component}
        </AnimatedSection>
      ))}
    </AnimationProvider>
  );
};

export default Index;