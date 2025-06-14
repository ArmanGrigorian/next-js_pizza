"use client";

import { type CartStoreType, createCartStore } from "@/store/cartStore";
import {
  type CategoryStoreType,
  createCategoryStore,
} from "@/store/categoryStore";

import { type SearchStoreType, createSearchStore } from "@/store/searchStore";
import { type ReactNode, createContext, useContext, useRef } from "react";
import { useStore } from "zustand";

export type CategoryStoreApi = ReturnType<typeof createCategoryStore>;
export type SearchStoreApi = ReturnType<typeof createSearchStore>;
export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CategoryStoreContext = createContext<CategoryStoreApi | undefined>(
  undefined,
);

export const SearchStoreContext = createContext<SearchStoreApi | undefined>(
  undefined,
);

export const CartStoreContext = createContext<CartStoreApi | undefined>(
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
  const cartStoreRef = useRef<CartStoreApi | null>(null);

  if (categoryStoreRef.current === null) {
    categoryStoreRef.current = createCategoryStore();
  }

  if (searchStoreRef.current === null) {
    searchStoreRef.current = createSearchStore();
  }

  if (cartStoreRef.current === null) {
    cartStoreRef.current = createCartStore();
  }

  return (
    <CategoryStoreContext.Provider value={categoryStoreRef.current}>
      <SearchStoreContext.Provider value={searchStoreRef.current}>
        <CartStoreContext.Provider value={cartStoreRef.current}>
          {children}
        </CartStoreContext.Provider>
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

export const useCartStore = (selector = (store: CartStoreType) => store) => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within a CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
