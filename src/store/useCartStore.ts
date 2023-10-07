import { create } from 'zustand';

type InitialState = {
  ids: number[];
};

const initialState: InitialState = {
  ids: [],
};

interface CartState extends InitialState {
  setIds: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  ...initialState,
  setIds: (id) => set((state) => ({ ids: [...state.ids, id] })),
}));
