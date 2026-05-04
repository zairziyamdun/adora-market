"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";

type Props = {
  productId: string;
};

export function AddToCartSection({ productId }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        onClick={() => addItem(productId, 1)}
        className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-105 active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:min-w-[220px]"
      >
        Добавить в корзину
      </button>
      <Link
        href="/cart"
        className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-stone-300 bg-white px-8 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400 sm:min-w-[200px]"
      >
        Перейти в корзину
      </Link>
    </div>
  );
}
