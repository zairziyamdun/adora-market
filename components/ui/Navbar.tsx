"use client";

import Link from "next/link";
import { useState } from "react";

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/cart", label: "Корзина" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Основная навигация"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-stone-900"
        >
          Adora<span className="text-violet-600"> Market</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-stone-600 transition hover:text-stone-900"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-100 hover:text-stone-900 md:h-11 md:w-11"
            aria-label="Корзина"
          >
            <CartIcon className="h-5 w-5" />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-stone-700 hover:bg-stone-100 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-stone-200 bg-white md:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
