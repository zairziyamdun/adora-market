import type { ReactNode } from "react";

function FilterChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm">
      {children}
    </span>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-500">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

/**
 * Упрощённый статичный блок фильтров (без логики фильтрации).
 */
export function CatalogFilters() {
  return (
    <section
      aria-label="Фильтры каталога"
      className="rounded-3xl border border-stone-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-6"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:items-start lg:gap-x-14 lg:gap-y-8">
        <FilterSection title="Цвет">
          <FilterChip>Gray</FilterChip>
          <FilterChip>Brown</FilterChip>
          <FilterChip>Blue</FilterChip>
          <FilterChip>Green</FilterChip>
        </FilterSection>
        <FilterSection title="Цена">
          <FilterChip>до 7000 ₸</FilterChip>
          <FilterChip>7000–8000 ₸</FilterChip>
        </FilterSection>
        <FilterSection title="Тип">
          <FilterChip>Натуральные</FilterChip>
          <FilterChip>Яркие</FilterChip>
        </FilterSection>
      </div>
      <p className="mt-6 border-t border-stone-100 pt-4 text-xs text-stone-500">
        Фильтры подключены визуально. Позже здесь будет живая выборка.
      </p>
    </section>
  );
}
