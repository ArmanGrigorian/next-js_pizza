import { Product } from "@prisma/client";
import { API_ROUTES } from "./constants";
import { axiosInstance } from "./instance";

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    API_ROUTES.PRODUCTS_SEARCH,
    {
      params: {
        query,
      },
    },
  );

  return data;
};
