import Link from "next/link";

function StylizedEye({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 36c16-22 40-28 52-28s36 6 52 28c-16 22-40 28-52 28S24 58 8 36Z"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-stone-300"
      />
      <circle cx="60" cy="36" r="18" fill="url(#iris)" />
      <circle
        cx="60"
        cy="36"
        r="8"
        className="fill-stone-900/90"
        opacity="0.35"
      />
      <defs>
        <radialGradient
          id="iris"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(56 32) rotate(98) scale(22 22)"
        >
          <stop stopColor="#a78bfa" />
          <stop offset="0.45" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#1e1b4b" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-violet-50/70 via-rose-50/40 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-xl lg:max-w-lg lg:flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
            Color lenses · beauty
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl"
          >
            Цветные линзы, которые меняют взгляд
          </h1>
          <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            Натуральные и яркие оттенки для выразительного образа. Выбирайте линзы
            онлайн и оформляйте заказ без лишней переписки.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Смотреть каталог
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-300 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300"
            >
              Как выбрать линзы
            </Link>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 lg:flex-1">
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:max-w-lg sm:gap-4 lg:mx-0 lg:max-w-none">
            {/* Главная beauty-карточка с «линзами» */}
            <div className="col-span-2 rounded-3xl border border-stone-200/80 bg-white/90 p-5 shadow-xl shadow-violet-200/40 backdrop-blur-sm sm:p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-600">
                    Look of the week
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-stone-900">
                    Оттенок для мягкого glam
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    Деликатное усиление радужки — аккуратно на фото и в жизни.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-900">
                      1-дневные / месячные
                    </span>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">
                      BC/DIA подбор
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center justify-center gap-0 sm:flex-col sm:gap-3">
                  <div className="relative flex h-28 w-28 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-200/80 to-rose-200/60 blur-xl" />
                    <span className="relative h-20 w-20 rounded-full bg-gradient-to-br from-slate-200 via-violet-300 to-indigo-500 ring-[6px] ring-white shadow-inner" />
                    <span className="absolute right-6 top-4 h-10 w-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-600 ring-4 ring-white/90 shadow-lg" />
                    <span className="absolute bottom-6 left-4 h-8 w-8 rounded-full bg-gradient-to-br from-sky-200 to-sky-600 ring-[3px] ring-white shadow-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Палитра оттенков */}
            <div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-md sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                Оттенки
              </p>
              <p className="mt-2 text-sm font-semibold text-stone-900">
                Карточки линз в ленте
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "Gray", cls: "from-slate-300 to-slate-600" },
                  { label: "Honey", cls: "from-amber-200 to-amber-700" },
                  { label: "Ocean", cls: "from-sky-200 to-blue-700" },
                  { label: "Emerald", cls: "from-emerald-200 to-emerald-700" },
                ].map((sw) => (
                  <div key={sw.label} className="flex flex-col items-center gap-1">
                    <span
                      className={`inline-block h-11 w-11 rounded-full bg-gradient-to-br ${sw.cls} ring-2 ring-white shadow-md`}
                    />
                    <span className="text-[10px] font-medium uppercase tracking-wide text-stone-500">
                      {sw.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Глаз + beauty-блок */}
            <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-white to-violet-50/50 p-4 shadow-md sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex-1 rounded-2xl bg-white/70 p-2 ring-1 ring-violet-100">
                  <StylizedEye className="mx-auto h-14 w-auto text-violet-200" />
                  <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-wider text-stone-500">
                    natural blend
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-stone-600">
                Свотчи и крупные фото радужки — как в удобном Instagram-магазине:
                видно переход края линзы и глубину цвета.
              </p>
            </div>
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl lg:-right-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-rose-200/50 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
