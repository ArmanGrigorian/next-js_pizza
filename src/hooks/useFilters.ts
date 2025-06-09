"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useSet } from "react-use";

const useFilters = () => {
  const searchParams = useSearchParams();

  const [price, setPrice] = useState({
    from: Number(searchParams.get("from")) || 0,
    to: Number(searchParams.get("to")) || 1000,
  });

  const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(
    new Set<string>(searchParams.get("ingredients")?.split(",") || []),
  );

  const [selectedDoughs, { toggle: setSelectedDoughs }] = useSet(
    new Set<string>(searchParams.get("doughs")?.split(",") || []),
  );
  const [selectedSizes, { toggle: setSelectedSizes }] = useSet(
    new Set<string>(searchParams.get("sizes")?.split(",") || []),
  );

  const params = useMemo(() => {
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

  return {
    selectedIngredients,
    selectedDoughs,
    selectedSizes,
    price,
    setSelectedIngredients,
    setSelectedDoughs,
    setSelectedSizes,
    setPrice,
    params,
  };
};

export default useFilters;
