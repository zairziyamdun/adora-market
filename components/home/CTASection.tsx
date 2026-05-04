import Link from "next/link";

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-stone-100 bg-gradient-to-br from-violet-950 via-stone-900 to-stone-950 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/90">
            Adora Market
          </p>
          <h2
            id="cta-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            Найдите оттенок, который подойдёт именно вам
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-400 sm:text-base">
            Свайпаете палитру, сравниваете свотчи и добавляете в корзину — как в аккуратном
            премиум-магазине в ленте.
          </p>
          <div className="mt-8">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-rose-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/50 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
