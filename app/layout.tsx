import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adora Market — цветные контактные линзы",
  description:
    "Интернет-магазин цветных контактных линз для Instagram. Натуральные и яркие оттенки, удобный каталог и оформление заказа.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
