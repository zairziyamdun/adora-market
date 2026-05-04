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

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (productId, quantity = 1) =>
    set((state) => {
      const i = state.items.findIndex((x) => x.productId === productId);
      if (i >= 0) {
        const next = [...state.items];
        next[i] = { ...next[i], quantity: next[i].quantity + quantity };
        return { items: next };
      }
      return { items: [...state.items, { productId, quantity }] };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((x) => x.productId !== productId),
    })),
  clear: () => set({ items: [] }),
}));
