export type LensHue = "gray" | "brown" | "blue" | "green" | "black" | "hazel";

export type ProductDetail = {
  id: string;
  name: string;
  price: number;
  currency: "₸";
  badge?: "Хит" | "Новинка";
  color: string;
  description: string;
  diameter: string;
  wearPeriod: string;
  /** URL изображения; пустое — показываем премиум-плейсхолдер */
  image: string | null;
  hue: LensHue;
};

export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    id: "1",
    name: "Adora Gray",
    price: 7000,
    currency: "₸",
    badge: "Хит",
    color: "Gray",
    description:
      "Натуральный серый оттенок, подчёркивающий глубину взгляда. Мягкая граница линзы и деликатный переход создают эффект «своих» глаз в кадре.",
    diameter: "14.2",
    wearPeriod: "3 месяца",
    image: null,
    hue: "gray",
  },
  {
    id: "2",
    name: "Honey Brown",
    price: 7000,
    currency: "₸",
    color: "Brown",
    description:
      "Тёплый мёдово-коричневый тон для деликатного усиления радужки. Подходит к дневному макияжу и съёмке в формате close-up.",
    diameter: "14.2",
    wearPeriod: "3 месяца",
    image: null,
    hue: "brown",
  },
  {
    id: "3",
    name: "Ocean Blue",
    price: 7500,
    currency: "₸",
    badge: "Новинка",
    color: "Blue",
    description:
      "Глубокий голубой акцент с холодным подтоном — выразительно, но без «маски». Идеально для студийной съёмки и вечернего образа.",
    diameter: "14.2",
    wearPeriod: "3 месяца",
    image: null,
    hue: "blue",
  },
  {
    id: "4",
    name: "Emerald Green",
    price: 7500,
    currency: "₸",
    color: "Green",
    description:
      "Изумрудный оттенок с мягкой дымкой по краю. Создаёт эффект кристальной радужки и хорошо читается на фото при естественном свете.",
    diameter: "14.2",
    wearPeriod: "3 месяца",
    image: null,
    hue: "green",
  },
  {
    id: "5",
    name: "Natural Black",
    price: 6800,
    currency: "₸",
    color: "Black",
    description:
      "Мягкое усиление контраста зрачка и естественный «ring» — визуально увеличивает выразительность без агрессивного чёрного кольца.",
    diameter: "14.2",
    wearPeriod: "3 месяца",
    image: null,
    hue: "black",
  },
  {
    id: "6",
    name: "Hazel Light",
    price: 7200,
    currency: "₸",
    badge: "Новинка",
    color: "Hazel",
    description:
      "Светло-ореховый микс с золотистым всполохом у зрачка. Один из самых «инстаграмных» натуральных оттенков для личного бренда.",
    diameter: "14.2",
    wearPeriod: "3 месяца",
    image: null,
    hue: "hazel",
  },
];

export function getProductById(id: string): ProductDetail | undefined {
  return PRODUCT_DETAILS.find((p) => p.id === id);
}
