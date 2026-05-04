import type { ProductDetail } from "@/lib/data/product-details";
import { AddToCartSection } from "./AddToCartSection";

const badgeStyles = {
  Хит: "border-violet-200/80 bg-violet-50 text-violet-900",
  Новинка: "border-rose-200/80 bg-rose-50 text-rose-900",
} as const;

const trustItems = [
  "Комфортная посадка",
  "Подходит для ежедневного ношения",
  "Быстрая доставка",
] as const;

type Props = {
  product: ProductDetail;
};

export function ProductInfo({ product }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-3">
        {product.badge ? (
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${badgeStyles[product.badge]}`}
          >
            {product.badge}
          </span>
        ) : null}
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-stone-400">
          color lens
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
        {product.name}
      </h1>

      <p className="mt-6 text-3xl font-light tabular-nums tracking-tight text-stone-900">
        {product.price.toLocaleString("kk-KZ")}
        <span className="ml-2 text-lg font-medium text-stone-500">{product.currency}</span>
      </p>

      <p className="mt-8 text-base leading-relaxed text-stone-600 sm:text-lg">
        {product.description}
      </p>

      <div className="mt-10 rounded-2xl border border-stone-200/80 bg-stone-50/50 px-6 py-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
          Характеристики
        </p>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between gap-6 border-b border-stone-200/60 pb-3">
            <dt className="text-stone-500">Цвет</dt>
            <dd className="font-medium text-stone-900">{product.color}</dd>
          </div>
          <div className="flex justify-between gap-6 border-b border-stone-200/60 pb-3">
            <dt className="text-stone-500">Срок ношения</dt>
            <dd className="font-medium text-stone-900">{product.wearPeriod}</dd>
          </div>
          <div className="flex justify-between gap-6">
            <dt className="text-stone-500">Диаметр</dt>
            <dd className="font-medium text-stone-900">{product.diameter} mm</dd>
          </div>
        </dl>
      </div>

      <div className="mt-10 rounded-2xl border border-stone-100 bg-white px-6 py-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
          Ваш комфорт
        </p>
        <ul className="mt-4 space-y-3">
          {trustItems.map((line) => (
            <li key={line} className="flex items-start gap-3 text-sm text-stone-700">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                aria-hidden
              >
                ✓
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <AddToCartSection
          product={{
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          }}
        />
      </div>
    </div>
  );
}
