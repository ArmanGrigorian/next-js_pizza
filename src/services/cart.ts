import type { CartDTO, CreateCartItemValues } from "@/lib/types";
import { API_ROUTES } from "./constants";

import { axiosInstance } from "./instance";

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>(API_ROUTES.CART);

  return data;
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number,
): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>(
    `${API_ROUTES.CART}/${itemId}`,
    {
      quantity,
    },
  );

  return data;
};

export const removeCartItem = async (id: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.delete<CartDTO>(
    `${API_ROUTES.CART}/${id}`,
  );

  return data;
};

export const addCartItem = async (
  values: CreateCartItemValues,
): Promise<CartDTO> => {
  const { data } = await axiosInstance.post<CartDTO>(API_ROUTES.CART, values);

  return data;
};
