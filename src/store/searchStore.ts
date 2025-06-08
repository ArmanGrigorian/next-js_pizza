import { Product } from "@prisma/client";
import { createStore } from "zustand";

export type SearchStoreStateType = {
  isFocused: boolean;
  searchText: string;
  searchProducts: Product[];
};

export type SearchStoreActionType = {
  setIsFocused: (isFocused: boolean) => void;
  setSearchText: (searchText: string) => void;
  setSearchProducts: (searchProducts: Product[]) => void;
};

export type SearchStoreType = SearchStoreStateType & SearchStoreActionType;

export const defaultInitState: SearchStoreStateType = {
  isFocused: false,
  searchText: "",
  searchProducts: [],
};

export const createSearchStore = (
  initState: SearchStoreStateType = defaultInitState,
) => {
  return createStore<SearchStoreType>()((set) => ({
    ...initState,
    setIsFocused: (isFocused: boolean) => set({ isFocused }),
    setSearchText: (searchText: string) => set({ searchText }),
    setSearchProducts: (searchProducts: Product[]) => set({ searchProducts }),
  }));
};
