import { create } from "zustand";

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>(() => ({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
}));
