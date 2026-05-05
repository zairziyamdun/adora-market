"use client";

import { useCartStore } from "@/store/cart";

export function OrderSummary() {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.getTotalItems());
  const totalPrice = useCartStore((state) => state.getTotalPrice());

  return (
    <aside className="rounded-3xl border border-stone-200/90 bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.12)] sm:p-8 lg:sticky lg:top-24">
      <h2 className="text-lg font-semibold tracking-tight text-stone-900">
        Ваш заказ
      </h2>
      <p className="mt-2 text-sm text-stone-600">
        Проверьте оттенки и количество линз перед подтверждением.
      </p>

      <div className="mt-6 space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.productId}
              className="rounded-2xl border border-stone-100 bg-stone-50/70 p-4"
            >
              <p className="text-sm font-medium text-stone-900">{item.name}</p>
              <div className="mt-2 flex items-center justify-between text-sm text-stone-600">
                <span>Количество: {item.quantity}</span>
                <span className="font-medium text-stone-800">
                  {(item.price * item.quantity).toLocaleString("kk-KZ")} ₸
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-200 p-4 text-sm text-stone-500">
            В корзине пока нет товаров.
          </div>
        )}
      </div>

      <div className="mt-6 space-y-3 border-t border-stone-100 pt-5">
        <div className="flex items-center justify-between text-sm text-stone-600">
          <span>Всего товаров</span>
          <span className="font-semibold text-stone-900">{totalItems}</span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-sm text-stone-600">Итоговая сумма</span>
          <p className="text-2xl font-light tabular-nums text-stone-900">
            {totalPrice.toLocaleString("kk-KZ")}
            <span className="ml-1 text-base font-medium text-stone-500">₸</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
