import { create } from "zustand";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

/** Данные для добавления позиции в корзину */
export type CartProductInput = {
  productId: string;
  name: string;
  price: number;
  quantity?: number;
};

export type CartState = {
  items: CartItem[];
  addItem: (product: CartProductInput) => void;
  removeItem: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clear: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (product) => {
    const qty = product.quantity ?? 1;
    set((state) => {
      const i = state.items.findIndex((x) => x.productId === product.productId);
      if (i >= 0) {
        const next = [...state.items];
        next[i] = { ...next[i], quantity: next[i].quantity + qty };
        return { items: next };
      }
      return {
        items: [
          ...state.items,
          {
            productId: product.productId,
            name: product.name,
            price: product.price,
            quantity: qty,
          },
        ],
      };
    });
  },

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((x) => x.productId !== productId),
    })),

  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  decreaseQuantity: (productId) =>
    set((state) => {
      const i = state.items.findIndex((x) => x.productId === productId);
      if (i === -1) return state;
      const line = state.items[i];
      if (line.quantity <= 1) {
        return {
          items: state.items.filter((x) => x.productId !== productId),
        };
      }
      const next = [...state.items];
      next[i] = { ...line, quantity: line.quantity - 1 };
      return { items: next };
    }),

  clear: () => set({ items: [] }),

  getTotalItems: () =>
    get().items.reduce((acc, item) => acc + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}));
