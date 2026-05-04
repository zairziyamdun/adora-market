"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";

export function CartPageContent() {
  const items = useCartStore((s) => s.items);
  const isEmpty = items.length === 0;

  return (
    <main className="min-h-[60vh] bg-gradient-to-b from-violet-50/35 via-white to-stone-50/50 pb-16 pt-6 lg:pb-24 lg:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
            Adora Market
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">
            Корзина
          </h1>
          <p className="mt-3 max-w-xl text-sm text-stone-600">
            Цветные линзы, которые вы выбрали. Проверьте количество и перейдите к
            оформлению.
          </p>
        </div>

        {isEmpty ? (
          <div className="mx-auto max-w-md rounded-3xl border border-stone-200/90 bg-white px-8 py-16 text-center shadow-sm">
            <p className="text-lg font-medium text-stone-900">Корзина пуста</p>
            <p className="mt-2 text-sm text-stone-500">
              Добавьте линзы из каталога или с карточки товара.
            </p>
            <Link
              href="/catalog"
              className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-6 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition hover:brightness-105"
            >
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-4 lg:col-span-7">
              {items.map((line) => (
                <CartItem key={line.productId} line={line} />
              ))}
            </div>
            <div className="lg:col-span-5">
              <CartSummary />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
