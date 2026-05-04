import Link from "next/link";

const toneStyles = {
  slate: {
    swatch: "bg-gradient-to-br from-slate-200 to-slate-500 text-slate-900",
    chip: "bg-slate-100 text-slate-800 border-slate-200",
  },
  amber: {
    swatch: "bg-gradient-to-br from-amber-200 to-amber-700 text-amber-950",
    chip: "bg-amber-50 text-amber-900 border-amber-100",
  },
  sky: {
    swatch: "bg-gradient-to-br from-sky-200 to-blue-700 text-sky-950",
    chip: "bg-sky-50 text-sky-900 border-sky-100",
  },
  emerald: {
    swatch: "bg-gradient-to-br from-emerald-200 to-emerald-700 text-emerald-950",
    chip: "bg-emerald-50 text-emerald-900 border-emerald-100",
  },
} as const;

type ProductTone = keyof typeof toneStyles;

type MockProduct = {
  id: string;
  name: string;
  variant: string;
  price: number;
  currency: string;
  badge?: string;
  tone: ProductTone;
};

const mockProducts: MockProduct[] = [
  {
    id: "1",
    name: "Adora Gray",
    variant: "Серые линзы",
    price: 7000,
    currency: "₸",
    badge: "Хит",
    tone: "slate",
  },
  {
    id: "2",
    name: "Honey Brown",
    variant: "Карие линзы",
    price: 7000,
    currency: "₸",
    tone: "amber",
  },
  {
    id: "3",
    name: "Ocean Blue",
    variant: "Голубые линзы",
    price: 7500,
    currency: "₸",
    badge: "New",
    tone: "sky",
  },
  {
    id: "4",
    name: "Emerald Green",
    variant: "Зелёные линзы",
    price: 7500,
    currency: "₸",
    tone: "emerald",
  },
];

function FeaturedProductCard({ product }: { product: MockProduct }) {
  const t = toneStyles[product.tone];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200/90 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-100/80">
      <div
        className={`relative flex aspect-[4/3] items-end justify-start p-4 ${t.swatch}`}
      >
        {product.badge ? (
          <span
            className={`absolute right-3 top-3 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${t.chip}`}
          >
            {product.badge}
          </span>
        ) : null}
        <div className="flex items-center gap-2 rounded-xl bg-black/25 px-2.5 py-2 backdrop-blur-sm">
          <span
            className="inline-block h-9 w-9 rounded-full bg-white/30 ring-2 ring-white/70"
            aria-hidden
          />
          <span className="text-xs font-medium text-white drop-shadow-sm">
            Линза · свотч
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold tracking-tight text-stone-900 sm:text-lg">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-violet-700/90">{product.variant}</p>
        <p className="mt-2 text-sm text-stone-500">
          Подходит для образов в стиле soft glam и естественного усиления.
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <p className="text-lg font-bold tabular-nums text-stone-900">
            {product.price.toLocaleString("kk-KZ")}
            <span className="ml-1 text-sm font-semibold text-stone-500">
              {product.currency}
            </span>
          </p>
          <Link
            href={`/product/${product.id}`}
            className="inline-flex shrink-0 rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-800 sm:text-sm"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FeaturedProducts() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="border-t border-stone-100 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="featured-heading"
              className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
            >
              Популярные линзы
            </h2>
            <p className="mt-2 max-w-xl text-sm text-stone-600 sm:text-base">
              Нежные серые и тёплые карие, холодный голубой и изумруд — подбор для
              ленты и повседневных образов.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-violet-700 hover:text-violet-800"
          >
            Весь каталог
            <span aria-hidden className="text-base">
              →
            </span>
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <FeaturedProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
