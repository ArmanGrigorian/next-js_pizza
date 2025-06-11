import { categoriesList } from "@/lib/constants";
import type { Category } from "@/lib/types";
import { createStore } from "zustand";

export type CategoryStoreStateType = {
  activeCategory: string;
};

export type CategoryStoreActionType = {
  setActiveCategory: (activeCategory: Category) => void;
};

export type CategoryStoreType = CategoryStoreStateType &
  CategoryStoreActionType;

export const defaultInitState: CategoryStoreStateType = {
  activeCategory: categoriesList[0],
};

export const createCategoryStore = (
  initState: CategoryStoreStateType = defaultInitState,
) => {
  return createStore<CategoryStoreType>()((set) => ({
    ...initState,
    setActiveCategory: (activeCategory: Category) => set({ activeCategory }),
  }));
};
