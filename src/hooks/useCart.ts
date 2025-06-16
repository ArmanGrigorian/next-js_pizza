import { useCartStore } from "@/components/providers/StoreProvider";
import type { CartStateItem, CreateCartItemValues } from "@/lib/types";
import { useEffect } from "react";

type UseCartReturnProps = {
  totalPrice: number;
  cartItems: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): UseCartReturnProps => {
  const {
    totalPrice,
    cartItems,
    loading,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
    fetchCartItems,
  } = useCartStore();

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return {
    totalPrice,
    cartItems,
    loading,
    updateItemQuantity,
    removeCartItem,
    addCartItem,
  };
};
