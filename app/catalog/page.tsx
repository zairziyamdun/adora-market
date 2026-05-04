import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import type { CatalogProduct } from "@/components/product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Footer } from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

const catalogProducts: CatalogProduct[] = [
  {
    id: "1",
    name: "Adora Gray",
    lensColor: "Серый оттенок",
    price: 7000,
    currency: "₸",
    hue: "gray",
    badge: "Хит",
  },
  {
    id: "2",
    name: "Honey Brown",
    lensColor: "Медово-карие",
    price: 7000,
    currency: "₸",
    hue: "brown",
  },
  {
    id: "3",
    name: "Ocean Blue",
    lensColor: "Глубокий голубой",
    price: 7500,
    currency: "₸",
    hue: "blue",
    badge: "Новинка",
  },
  {
    id: "4",
    name: "Emerald Green",
    lensColor: "Изумрудно-зелёный",
    price: 7500,
    currency: "₸",
    hue: "green",
  },
  {
    id: "5",
    name: "Natural Black",
    lensColor: "Мягкий чёрный / natural",
    price: 6800,
    currency: "₸",
    hue: "black",
  },
  {
    id: "6",
    name: "Hazel Light",
    lensColor: "Светло-ореховые",
    price: 7200,
    currency: "₸",
    hue: "hazel",
    badge: "Новинка",
  },
];

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-violet-50/40 via-white to-stone-50/80 pb-16 pt-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="pb-10 pt-8 sm:pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              Adora Market · catalog
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Каталог линз
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
              Выберите оттенок, который подчеркнёт ваш взгляд
            </p>
          </header>

          <div className="space-y-8">
            <CatalogFilters />
            <ProductGrid products={catalogProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
