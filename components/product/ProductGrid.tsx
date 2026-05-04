import type { CatalogProduct } from "./ProductCard";
import { ProductCard } from "./ProductCard";

type Props = {
  products: CatalogProduct[];
};

export function ProductGrid({ products }: Props) {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Сетка товаров"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
