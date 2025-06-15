import type { VariantType } from "@/components/GroupVariants";
import type { ProductItem } from "@prisma/client";
import { type PizzaDough, pizzaSizes } from "../constants";

/**
 * Returns a list of pizza size variants for the specified dough type,
 * marking sizes as disabled if they are not available in the product items.
 *
 * This function maps all known pizza sizes and marks each one as:
 * - `disabled: false` if a product with the matching dough and size exists.
 * - `disabled: true` otherwise.
 *
 * Example output:
 * [
 *   { name: 'Small', value: 26, disabled: false },
 *   { name: 'Medium', value: 30, disabled: true },
 *   ...
 * ]
 *
 * @param dough - The selected pizza dough type.
 * @param items - The list of available product items.
 * @returns An array of pizza size variants with availability flags.
 */
export const getAvailablePizzaSizes = (
  dough: PizzaDough,
  items: ProductItem[],
): VariantType[] => {
  const pizzasWithSelectedDough = items.filter((item) => item.dough === dough);

  return pizzaSizes.map((size) => ({
    name: size.name,
    value: size.value,
    disabled: !pizzasWithSelectedDough.some(
      (pizza) => Number(pizza.size) === Number(size.value),
    ),
  }));
};
