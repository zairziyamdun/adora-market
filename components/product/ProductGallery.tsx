import Image from "next/image";
import type { ProductDetail } from "@/lib/data/product-details";

const hueGradients: Record<ProductDetail["hue"], string> = {
  gray: "from-slate-200 via-slate-400 to-slate-700",
  brown: "from-amber-100 via-amber-500 to-amber-900",
  blue: "from-sky-200 via-blue-500 to-blue-900",
  green: "from-emerald-200 via-emerald-600 to-emerald-900",
  black: "from-stone-500 via-stone-900 to-black",
  hazel: "from-orange-100 via-amber-400 to-amber-900",
};

type Props = {
  product: ProductDetail;
};

export function ProductGallery({ product }: Props) {
  const gradient = hueGradients[product.hue];

  return (
    <div className="lg:sticky lg:top-24">
      <div className="group relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.15)]">
        <div
          className={`relative aspect-square overflow-hidden bg-gradient-to-br ${gradient}`}
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center transition duration-500 ease-out group-hover:scale-[1.02]">
              <div
                aria-hidden
                className="absolute inset-[16%] rounded-full bg-black/20 shadow-[inset_0_0_40px_rgba(255,255,255,0.2)] ring-[8px] ring-white/30"
              />
              <span className="relative z-10 px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/90 drop-shadow-md">
                Превью фото
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-violet-200/80 bg-gradient-to-br ${gradient} shadow-sm ring-2 ring-white`}
          aria-current="true"
          aria-label="Выбранное превью"
        />
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-stone-200/90 bg-gradient-to-br ${gradient} opacity-40 grayscale transition hover:opacity-70`}
          aria-hidden
        />
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-stone-200/90 bg-gradient-to-br ${gradient} opacity-25 grayscale`}
          aria-hidden
        />
      </div>
      <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-wider text-stone-400 lg:text-left">
        Доп. ракурсы · скоро в галерее
      </p>
    </div>
  );
}
