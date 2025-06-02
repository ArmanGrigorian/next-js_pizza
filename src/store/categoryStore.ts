import { createStore } from "zustand";

export type StateType = {
  activeId: number;
};

export type ActionType = {
  setActiveId: (activeId: number) => void;
};

export type CategoryStoreType = StateType & ActionType;

export const defaultInitState: StateType = {
  activeId: 0,
};

export const createCategoryStore = (
  initState: StateType = defaultInitState,
) => {
  return createStore<CategoryStoreType>()((set) => ({
    ...initState,
    setActiveId: (activeId: number) => set({ activeId }),
  }));
};
