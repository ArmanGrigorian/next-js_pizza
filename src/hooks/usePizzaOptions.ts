import { VariantType } from "@/components/GroupVariants";
import type { PizzaDough, PizzaSize } from "@/lib/constants";
import { getAvailablePizzaSizes } from "@/lib/utils";
import { ProductItem } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  size: PizzaSize;
  dough: PizzaDough;
  selectedIngredients: Set<number>;
  availableSizes: VariantType[];
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setDough: (size: PizzaDough) => void;
  addIngredient: (id: number) => void;
}

const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [dough, setDough] = useState<PizzaDough>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([]),
  );

  const availableSizes = getAvailablePizzaSizes(dough, items);

  const currentItemId = items.find(
    (item) => item.dough === dough && item.size === size,
  )?.id;

  useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled,
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [dough]);

  return {
    size,
    dough,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setDough,
    addIngredient,
  };
};

export default usePizzaOptions;
