import { BenefitsSection } from "@/components/home/BenefitsSection";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <BenefitsSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
