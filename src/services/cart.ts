import type { CartDTO, CreateCartItemValues } from "@/lib/types";
import { API_ROUTES } from "./constants";
import { axiosInstance } from "./instance";

const handleApiError = (error: unknown) => {
  console.error("[CART_API] Error:", error);
  if (error instanceof Error) {
    throw new Error(`Cart API Error: ${error.message}`);
  }
  throw new Error("An unexpected error occurred");
};

export const getCart = async (): Promise<CartDTO | undefined> => {
  try {
    const { data } = await axiosInstance.get<CartDTO>(API_ROUTES.CART);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};

export const updateItemQuantity = async (
  itemId: number,
  quantity: number,
): Promise<CartDTO | undefined> => {
  try {
    const { data } = await axiosInstance.patch<CartDTO>(
      `${API_ROUTES.CART}/${itemId}`,
      {
        quantity,
      },
    );
    return data;
  } catch (error) {
    handleApiError(error);
  }
};

export const removeCartItem = async (
  id: number,
): Promise<CartDTO | undefined> => {
  try {
    const { data } = await axiosInstance.delete<CartDTO>(
      `${API_ROUTES.CART}/${id}`,
    );
    return data;
  } catch (error) {
    handleApiError(error);
  }
};

export const addCartItem = async (
  values: CreateCartItemValues,
): Promise<CartDTO | undefined> => {
  try {
    const { data } = await axiosInstance.post<CartDTO>(API_ROUTES.CART, values);
    return data;
  } catch (error) {
    handleApiError(error);
  }
};
