import type { CartStateItem, CreateCartItemValues } from "@/lib/types";
import { getCartDetails } from "@/lib/utils/getCartDetails";
import { API } from "@/services/api-client";
import { createStore } from "zustand/vanilla";

export type CartStateType = {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: CartStateItem[];
};

export type CartActionsType = {
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: CreateCartItemValues) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
};

export type CartStoreType = CartStateType & CartActionsType;

export const initCartStore = (): CartStateType => {
  return {
    items: [],
    error: false,
    loading: false,
    totalAmount: 0,
  };
};

export const defaultInitState: CartStateType = {
  items: [],
  error: false,
  loading: false,
  totalAmount: 0,
};

export const createCartStore = (
  initState: CartStateType = defaultInitState,
) => {
  return createStore<CartStoreType>()((set) => ({
    ...initState,
    fetchCartItems: async () => {
      try {
        set({ loading: true, error: false });
        const data = await API.cart.getCart();
        console.log(data);
        
        set(getCartDetails(data));
      } catch (error) {
        console.error(error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },

    updateItemQuantity: async (id: number, quantity: number) => {
      try {
        set({ loading: true, error: false });
        const data = await API.cart.updateItemQuantity(id, quantity);
        set(getCartDetails(data));
      } catch (error) {
        console.error(error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },

    removeCartItem: async (id: number) => {
      try {
        set((state) => ({
          loading: true,
          error: false,
          items: state.items.map((item) =>
            item.id === id ? { ...item, disabled: true } : item,
          ),
        }));
        const data = await API.cart.removeCartItem(id);
        set(getCartDetails(data));
      } catch (error) {
        console.error(error);
        set({ error: true });
      } finally {
        set((state) => ({
          loading: false,
          items: state.items.map((item) => ({ ...item, disabled: false })),
        }));
      }
    },

    addCartItem: async (values: CreateCartItemValues) => {
      try {
        set({ loading: true, error: false });
        const data = await API.cart.addCartItem(values);
        set(getCartDetails(data));
      } catch (error) {
        console.error(error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },
  }));
};
