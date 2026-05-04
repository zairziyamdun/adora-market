"use client";

import type { CartItem as CartLine } from "@/store/cart";
import { useCartStore } from "@/store/cart";

type Props = {
  line: CartLine;
};

export function CartItem({ line }: Props) {
  const removeItem = useCartStore((s) => s.removeItem);
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);

  const lineTotal = line.price * line.quantity;

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-stone-200/90 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0 flex-1">
        <p className="truncate text-lg font-semibold tracking-tight text-stone-900">
          {line.name}
        </p>
        <p className="mt-1 text-sm text-stone-500">
          Цена за шт.: {line.price.toLocaleString("kk-KZ")}{" "}
          <span className="tabular-nums">₸</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-stone-700">Количество</span>
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50/90 p-1">
            <button
              type="button"
              onClick={() => decreaseQuantity(line.productId)}
              aria-label="Уменьшить количество"
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-stone-700 transition-colors duration-200 hover:bg-white hover:text-stone-900 active:scale-95"
            >
              −
            </button>
            <span className="min-w-[2rem] text-center text-sm font-semibold tabular-nums text-stone-900">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => increaseQuantity(line.productId)}
              aria-label="Увеличить количество"
              className="flex h-9 w-9 items-center justify-center rounded-full text-lg font-semibold text-stone-700 transition-colors duration-200 hover:bg-white hover:text-stone-900 active:scale-95"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-col sm:items-end">
        <p className="text-right text-lg font-semibold tabular-nums text-stone-900 sm:text-xl">
          {lineTotal.toLocaleString("kk-KZ")}{" "}
          <span className="text-sm font-medium text-stone-500">₸</span>
        </p>
        <button
          type="button"
          onClick={() => removeItem(line.productId)}
          className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 transition duration-200 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-400 sm:self-end"
        >
          Удалить
        </button>
      </div>
    </article>
  );
}
