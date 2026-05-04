"use client";

import Link from "next/link";
import type { CartProductInput } from "@/store/cart";
import { useCartStore } from "@/store/cart";

type Props = {
  product: CartProductInput;
};

export function AddToCartSection({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem({
      productId: product.productId,
      name: product.name,
      price: product.price,
      quantity: product.quantity ?? 1,
    });
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:brightness-105 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:min-w-[220px]"
      >
        Добавить в корзину
      </button>
      <Link
        href="/cart"
        className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-stone-300 bg-white px-8 text-sm font-semibold text-stone-800 transition duration-200 hover:border-stone-400 hover:bg-stone-50 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400 sm:min-w-[200px]"
      >
        Перейти в корзину
      </Link>
    </div>
  );
}
