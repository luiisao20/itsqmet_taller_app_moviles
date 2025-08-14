import { create } from "zustand";
import { Product } from "../constants/products";

export interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  cart: CartProduct[];
  total: number;

  addProduct: (product: Product, quantity: number) => void;
  decreaseQuantity: (id: number) => void;
  deleteItem: (id: number) => void;
  getTotal: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set, get) => ({
  cart: [],
  total: 0,

  addProduct: (product: Product, quantity: number) => {
    const findIndex = get().cart.findIndex((item) => item.id === product.id);

    if (findIndex !== -1) {
      const arrayUpdated = get().cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      );
      set({ cart: arrayUpdated });
      return;
    }

    const newProduct: CartProduct = {
      ...product,
      quantity,
    };

    set({ cart: [...get().cart, newProduct] });
  },

  decreaseQuantity: (id: number) => {
    const newArray = get().cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity - 1 } : p
    );
    set({ cart: newArray });
  },

  deleteItem: (id: number) => {
    const newArray = get().cart.filter((p) => p.id !== id);
    set({ cart: newArray });
  },

  getTotal: () =>
    get().cart.reduce(
      (acc, product) =>
        acc + product.price * (1 - product.discount) * product.quantity,
      0
    ),

  clearCart: () => set({ cart: [] }),
}));
