"use client";

import {
  type CategoryStoreType,
  createCategoryStore,
} from "@/store/categoryStore";
import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type CategoryStoreApi = ReturnType<typeof createCategoryStore>;

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(
  undefined,
);

export interface CategoryStoreProviderProps {
  children: ReactNode;
}

export const CategoryStoreProvider = ({
  children,
}: CategoryStoreProviderProps) => {
  const storeRef = useRef<CategoryStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createCategoryStore();
  }

  return (
    <CategoryStoreContext.Provider value={storeRef.current}>
      {children}
    </CategoryStoreContext.Provider>
  );
};

export const useCategoryStore = <T,>(
  selector: (store: CategoryStoreType) => T,
): T => {
  const categoryStoreContext = useContext(CategoryStoreContext);

  if (!categoryStoreContext) {
    throw new Error(
      `useCategoryStore must be used within a CategoryStoreProvider`,
    );
  }

  return useStore(categoryStoreContext, selector);
};
