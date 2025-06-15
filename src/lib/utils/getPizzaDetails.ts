import type { Ingredient, ProductItem } from "@prisma/client";
import { type PizzaDough, type PizzaSize, mapPizzaDough } from "../constants";
import { calcTotalPizzaPrice } from "./calcTotalPizzaPrice";

/**
 * Generates a summary of the selected pizza, including:
 * - The total calculated price (base + ingredients).
 * - A human-readable description (e.g., "30 sm, Thin pizza").
 *
 * @param type - The selected pizza dough type.
 * @param size - The selected pizza size (in cm).
 * @param items - List of available pizza product variants.
 * @param ingredients - All available ingredients.
 * @param selectedIngredients - Set of ingredient IDs selected by the user.
 * @returns An object containing the total price and a description string.
 */
export const getPizzaDetails = (
  type: PizzaDough,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients,
  );

  const textDetails = `${size} sm, ${mapPizzaDough[type]} pizza`;

  return { totalPrice, textDetails };
};
