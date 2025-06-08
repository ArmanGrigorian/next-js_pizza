import { Ingredient } from "@prisma/client";
import { API_ROUTES } from "./constants";
import { axiosInstance } from "./instance";

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(
    API_ROUTES.INGREDIENTS,
  );

  return data;
};
