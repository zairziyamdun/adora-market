import Link from "next/link";

export type LensHue = "gray" | "brown" | "blue" | "green" | "black" | "hazel";

export type CatalogProduct = {
  id: string;
  name: string;
  lensColor: string;
  price: number;
  currency: "₸";
  hue: LensHue;
  badge?: "Хит" | "Новинка";
};

const hueGradients: Record<LensHue, string> = {
  gray: "from-slate-200 via-slate-400 to-slate-700",
  brown: "from-amber-100 via-amber-400 to-amber-900",
  blue: "from-sky-200 via-blue-400 to-blue-900",
  green: "from-emerald-200 via-emerald-500 to-emerald-900",
  black: "from-stone-600 via-stone-900 to-black",
  hazel: "from-orange-100 via-amber-500 to-amber-950",
};

const hueRings: Record<LensHue, string> = {
  gray: "ring-slate-200/80",
  brown: "ring-amber-200/80",
  blue: "ring-sky-200/80",
  green: "ring-emerald-200/80",
  black: "ring-stone-400/70",
  hazel: "ring-orange-200/80",
};

const badgeClasses: Record<NonNullable<CatalogProduct["badge"]>, string> = {
  Хит: "border-violet-200 bg-violet-50 text-violet-900",
  Новинка: "border-rose-200 bg-rose-50 text-rose-900",
};

export function ProductCard({ product }: { product: CatalogProduct }) {
  const gradient = hueGradients[product.hue];
  const ring = hueRings[product.hue];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-100">
      <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${gradient}`}>
        {product.badge ? (
          <span
            className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${badgeClasses[product.badge]}`}
          >
            {product.badge}
          </span>
        ) : null}
        <div
          aria-hidden
          className={`absolute inset-[18%] rounded-full bg-black/25 shadow-inner ring-[6px] ${ring}`}
          style={{
            boxShadow:
              "inset 0 0 28px rgb(255 255 255 / 0.25), inset 0 -14px 32px rgb(0 0 0 / 0.25)",
          }}
        />
        <div className="absolute inset-x-6 bottom-4 flex justify-center rounded-lg bg-black/35 px-2 py-1.5 text-center backdrop-blur-sm">
          <span className="text-[11px] font-medium uppercase tracking-wider text-white/95">
            Плейсхолдер изображения
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-base font-semibold tracking-tight text-stone-900 sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-violet-700/90">{product.lensColor}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-lg font-bold tabular-nums text-stone-900">
            {product.price.toLocaleString("kk-KZ")}
            <span className="ml-1 text-sm font-semibold text-stone-500">{product.currency}</span>
          </p>
        </div>
        <Link
          href={`/product/${product.id}`}
          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 active:brightness-95"
        >
          Подробнее
        </Link>
      </div>
    </article>
  );
}
