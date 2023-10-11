import { Product } from '@/types/products';
import { create } from 'zustand';

type InitialState = {
  cart: Product[];
  isOpenCart: boolean;
};

const initialState: InitialState = {
  cart: [],
  isOpenCart: false,
};

interface CartState extends InitialState {
  setCart: (p: Product) => void;
  remove: (id: number) => void;
  setOpenCart: (isOpen: boolean) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  ...initialState,
  setCart: (p) =>
    set((state) => {
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.id === p.id);

      if (index === -1) {
        newCart.push({ ...p, quantity: 1 });
      } else {
        newCart[index].quantity = newCart[index].quantity! + 1;
      }

      return {
        cart: newCart,
      };
    }),
  remove: (id) => {
    set((state) => {
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.id === id);

      if (index === -1) {
        return state;
      }

      if (newCart[index].quantity === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity = newCart[index].quantity! - 1;
      }

      return {
        cart: newCart,
      };
    });
  },
  setOpenCart: (isOpen) => set(() => ({ isOpenCart: isOpen })),
  clearCart: () => set(() => ({ cart: [] })),
}));
