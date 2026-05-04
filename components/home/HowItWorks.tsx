const steps = [
  {
    step: "01",
    title: "Выберите линзы",
    description:
      "Откройте каталог и смотрите оттенки крупными свотчами — как в любимых Instagram-брендах.",
  },
  {
    step: "02",
    title: "Добавьте в корзину",
    description:
      "Укажите нужное количество и проверьте итог: цена в ₸ и состав заказа на одном экране.",
  },
  {
    step: "03",
    title: "Оформите заказ и дождитесь подтверждения",
    description:
      "Отправляем понятное подтверждение: без лишних уточнений там, где всё уже ясно.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-stone-100 bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="how-heading"
          className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
        >
          Как оформить заказ на линзы
        </h2>
        <p className="mt-3 max-w-xl text-sm text-stone-600 sm:text-base">
          Три шага — аккуратно и по делу.
        </p>

        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="relative flex gap-4 rounded-3xl border border-stone-200 bg-gradient-to-b from-white to-violet-50/30 p-6"
            >
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-rose-500 text-center text-xs font-bold text-white shadow-md">
                {item.step}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                  Шаг {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
