import Link from "next/link";

const footerLinks = [
  { href: "/catalog", label: "Каталог" },
  { href: "/#how-it-works", label: "Инструкция" },
  { href: "#contacts", label: "Контакты" },
] as const;

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-semibold text-stone-900">
              Adora<span className="text-violet-600"> Market</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600">
              Adora Market — интернет-магазин цветных линз. Помогаем выбрать оттенок,
              оформить заказ и получить понятную консультацию без лишней переписки.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500">
              Навигация
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-stone-700 underline-offset-4 hover:text-stone-900 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-stone-600 lg:text-right">
            <p>Instagram · Direct</p>
            <p className="mt-2 text-xs text-stone-500">
              Ответим по оттенкам и параметрам · Пн–Вс · 09:00–21:00
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-8">
          <p className="text-center text-xs text-stone-500">
            © {new Date().getFullYear()} Adora Market. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
