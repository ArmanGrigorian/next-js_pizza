import type { CartStateItem, CreateCartItemValues } from "@/lib/types";
import { getCartDetails } from "@/lib/utils/getCartDetails";
import { API } from "@/services/api-client";
import { createStore } from "zustand/vanilla";

export type CartStateType = {
  loading: boolean;
  error: boolean;
  totalPrice: number;
  cartItems: CartStateItem[];
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
    cartItems: [],
    error: false,
    loading: false,
    totalPrice: 0,
  };
};

export const defaultInitState: CartStateType = {
  cartItems: [],
  error: false,
  loading: false,
  totalPrice: 0,
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
        
        if (!data) {
          set({ error: true, cartItems: [], totalPrice: 0 });
          return;
        }

        set(getCartDetails(data));
      } catch (error) {
        console.error("[CART_FETCH] Error:", error);
        set({ error: true, cartItems: [], totalPrice: 0 });
      } finally {
        set({ loading: false });
      }
    },

    updateItemQuantity: async (id: number, quantity: number) => {
      try {
        set({ loading: true, error: false });
        const data = await API.cart.updateItemQuantity(id, quantity);
        
        if (!data) {
          set({ error: true });
          return;
        }

        set(getCartDetails(data));
      } catch (error) {
        console.error("[CART_UPDATE] Error:", error);
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
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, disabled: true } : item,
          ),
        }));
        const data = await API.cart.removeCartItem(id);
        
        if (!data) {
          set({ error: true });
          return;
        }

        set(getCartDetails(data));
      } catch (error) {
        console.error("[CART_REMOVE] Error:", error);
        set({ error: true });
      } finally {
        set((state) => ({
          loading: false,
          cartItems: state.cartItems.map((item) => ({ ...item, disabled: false })),
        }));
      }
    },

    addCartItem: async (values: CreateCartItemValues) => {
      try {
        set({ loading: true, error: false });
        const data = await API.cart.addCartItem(values);
        
        if (!data) {
          set({ error: true });
          return;
        }

        set(getCartDetails(data));
      } catch (error) {
        console.error("[CART_ADD] Error:", error);
        set({ error: true });
      } finally {
        set({ loading: false });
      }
    },
  }));
};
