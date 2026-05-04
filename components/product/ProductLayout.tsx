import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * Две колонки на desktop, одна на mobile. Ожидает два дочерних узла: галерея и блок инфо.
 */
export function ProductLayout({ children }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {children}
      </div>
    </div>
  );
}
