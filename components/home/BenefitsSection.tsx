const benefits = [
  {
    title: "Натуральные оттенки",
    description:
      "Плавные переходы и глубина цвета радужки — выглядит гармонично на камере и вживую.",
    icon: "✨",
  },
  {
    title: "Комфортная посадка",
    description:
      "Подбор параметров под ваш режим ношения и ощущение — без покраснений и пересыхания.",
    icon: "👁",
  },
  {
    title: "Быстрое оформление заказа",
    description:
      "Каталог → корзина → подтверждение. Без долгих чатов: всё в одном понятном потоке.",
    icon: "⚡",
  },
  {
    title: "Поддержка по выбору",
    description:
      "Поможем подобрать оттенок и BC/DIA, если сомневаетесь между двумя вариантами.",
    icon: "💬",
  },
] as const;

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="border-t border-stone-100 bg-stone-50 py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="benefits-heading"
          className="max-w-2xl text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl"
        >
          Почему Adora Market
        </h2>
        <p className="mt-3 max-w-xl text-sm text-stone-600 sm:text-base">
          Чистый beauty-опыт интернет-магазина: от палитры до корзины.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <li
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
