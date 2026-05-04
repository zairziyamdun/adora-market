"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";

export function CartSummary() {
  const items = useCartStore((s) => s.items);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const totalPrice = useCartStore((s) => s.getTotalPrice());

  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="rounded-3xl border border-stone-200/90 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] transition-shadow duration-200 lg:sticky lg:top-24">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        Итого
      </h2>

      <div className="mt-6 space-y-4 border-b border-stone-100 pb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-stone-600">Всего товаров (шт)</span>
          <span className="font-semibold tabular-nums text-stone-900">
            {totalItems}
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-stone-600">Итоговая сумма</span>
          <p className="text-2xl font-light tabular-nums text-stone-900 transition-all duration-200">
            {totalPrice.toLocaleString("kk-KZ")}
            <span className="ml-1 text-base font-medium text-stone-500">₸</span>
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-stone-500">
        Оформление запросит контакты доставки. Оплату можно согласовать в Direct.
      </p>

      <Link
        href="/checkout"
        className="mt-6 flex min-h-[52px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-200 hover:brightness-105 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
      >
        Оформить заказ
      </Link>
    </aside>
  );
}
