import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { CheckoutContent } from "@/components/checkout/CheckoutContent";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <CheckoutContent />
      <Footer />
    </>
  );
}
