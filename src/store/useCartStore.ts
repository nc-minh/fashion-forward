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
  setCart: (id: Product) => void;
  remove: (id: number) => void;
  setOpenCart: (isOpen: boolean) => void;
}

export const useCartStore = create<CartState>((set) => ({
  ...initialState,
  setCart: (id) => set((state) => ({ cart: [...state.cart, id] })),
  remove: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  setOpenCart: (isOpen) => set(() => ({ isOpenCart: isOpen })),
}));
