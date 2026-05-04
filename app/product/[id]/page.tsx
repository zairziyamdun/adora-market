import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductLayout } from "@/components/product/ProductLayout";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";
import { getProductById } from "@/lib/data/product-details";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-violet-50/30 via-white to-stone-50/40">
        <ProductLayout>
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </ProductLayout>
      </main>
      <Footer />
    </>
  );
}
