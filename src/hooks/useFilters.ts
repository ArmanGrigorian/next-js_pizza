"use client";

import { API } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  selectedIngredients: Set<Ingredient["name"]>;
  selectedDoughs: Set<string>;
  selectedSizes: Set<string>;
  price: { from: number; to: number };
  isLoading: boolean;
  setIngredients: Dispatch<SetStateAction<Ingredient[]>>;
  setSelectedIngredients: (id: string) => void;
  setSelectedDoughs: (id: string) => void;
  setSelectedSizes: (id: string) => void;
  setPrice: Dispatch<SetStateAction<{ from: number; to: number }>>;
  updatePrice: (prices: [number, number]) => void;
  filters: Record<string, string | string[] | number>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const [price, setPrice] = useState({
    from: Number(searchParams.get("from")) || 0,
    to: Number(searchParams.get("to")) || 1000,
  });

  const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(
    new Set<Ingredient["name"]>(
      searchParams.get("ingredients")?.split(",") || [],
    ),
  );

  const [selectedDoughs, { toggle: setSelectedDoughs }] = useSet(
    new Set<string>(searchParams.get("doughs")?.split(",") || []),
  );
  const [selectedSizes, { toggle: setSelectedSizes }] = useSet(
    new Set<string>(searchParams.get("sizes")?.split(",") || []),
  );

  function updatePrice(prices: [number, number]) {
    setPrice({ from: prices[0], to: prices[1] });
  }

  const filters = useMemo(() => {
    const fields: Record<string, string | string[] | number> = {
      doughs: Array.from(selectedDoughs),
      sizes: Array.from(selectedSizes),
      ingredients: Array.from(selectedIngredients),
    };

    if (price.from > 0 || price.to < 1000) {
      fields.from = price.from;
      fields.to = price.to;
    }

    return fields;
  }, [
    selectedDoughs,
    selectedSizes,
    price.from,
    price.to,
    selectedIngredients,
  ]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await API.ingredients.getAll();
        setIngredients(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    ingredients,
    selectedIngredients,
    selectedDoughs,
    selectedSizes,
    price,
    setIngredients,
    setSelectedIngredients,
    setSelectedDoughs,
    setSelectedSizes,
    setIsLoading,
    setPrice,
    updatePrice,
    filters,
    isLoading,
  };
};

export default useFilters;
