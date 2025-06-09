"use client";

import {
  type CategoryStoreType,
  createCategoryStore,
} from "@/store/categoryStore";
import { type SearchStoreType, createSearchStore } from "@/store/searchStore";
import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type CategoryStoreApi = ReturnType<typeof createCategoryStore>;
export type SearchStoreApi = ReturnType<typeof createSearchStore>;

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(
  undefined,
);
export const SearchStoreContext = createContext<SearchStoreApi | undefined>(
  undefined,
);

export interface StoreProviderProps {
  children: ReactNode;
}

export const ZustandStoreProvider: React.FC<StoreProviderProps> = ({
  children,
}: StoreProviderProps) => {
  const categoryStoreRef = useRef<CategoryStoreApi | null>(null);
  const searchStoreRef = useRef<SearchStoreApi | null>(null);

  if (categoryStoreRef.current === null) {
    categoryStoreRef.current = createCategoryStore();
  }

  if (searchStoreRef.current === null) {
    searchStoreRef.current = createSearchStore();
  }

  return (
    <CategoryStoreContext.Provider value={categoryStoreRef.current}>
      <SearchStoreContext.Provider value={searchStoreRef.current}>
        {children}
      </SearchStoreContext.Provider>
    </CategoryStoreContext.Provider>
  );
};

export const useCategoryStore = (
  selector = (store: CategoryStoreType) => store,
) => {
  const categoryStoreContext = useContext(CategoryStoreContext);

  if (!categoryStoreContext) {
    throw new Error(
      `useCategoryStore must be used within a CategoryStoreProvider`,
    );
  }

  return useStore(categoryStoreContext, selector);
};

export const useSearchStore = (
  selector = (store: SearchStoreType) => store,
) => {
  const searchStoreContext = useContext(SearchStoreContext);

  if (!searchStoreContext) {
    throw new Error(`useSearchStore must be used within a SearchStoreProvider`);
  }

  return useStore(searchStoreContext, selector);
};
