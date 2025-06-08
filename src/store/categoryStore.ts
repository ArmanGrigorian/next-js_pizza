import { createStore } from "zustand";

export type CategoryStoreStateType = {
  activeCategory: number;
};

export type CategoryStoreActionType = {
  setActiveCategory: (activeCategory: number) => void;
};

export type CategoryStoreType = CategoryStoreStateType & CategoryStoreActionType;

export const defaultInitState: CategoryStoreStateType = {
  activeCategory: 0,
};

export const createCategoryStore = (
  initState: CategoryStoreStateType = defaultInitState,
) => {
  return createStore<CategoryStoreType>()((set) => ({
    ...initState,
    setActiveCategory: (activeCategory: number) => set({ activeCategory }),
  }));
};
