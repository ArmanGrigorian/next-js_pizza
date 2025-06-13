import { Category } from "@prisma/client";
import { createStore } from "zustand";

export type CategoryStoreStateType = {
  activeCategory: Category;
};

export type CategoryStoreActionType = {
  setActiveCategory: (activeCategory: Category) => void;
};

export type CategoryStoreType = CategoryStoreStateType &
  CategoryStoreActionType;

export const defaultInitState: CategoryStoreStateType = {
  activeCategory: {
    id: 1,
    name: "Pizzas",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

export const createCategoryStore = (
  initState: CategoryStoreStateType = defaultInitState,
) => {
  return createStore<CategoryStoreType>()((set) => ({
    ...initState,
    setActiveCategory: (activeCategory: Category) => set({ activeCategory }),
  }));
};
