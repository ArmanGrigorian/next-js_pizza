import type { Ingredient, ProductItem } from "@prisma/client";
import type { PizzaDough, PizzaSize } from "../constants";

/**
 * Calculates the total price of a pizza based on:
 * - The selected dough and size (base pizza price).
 * - The selected additional ingredients (toppings).
 *
 * If a matching pizza variant is not found in the product items,
 * the base price defaults to 0.
 *
 * @param dough - The selected type of pizza dough.
 * @param size - The selected size of the pizza.
 * @param items - List of available pizza variants (products).
 * @param ingredients - All possible extra ingredients.
 * @param selectedIngredients - A Set of selected ingredient IDs.
 * @returns The total price as a number (base + selected ingredients).
 */
export const calcTotalPizzaPrice = (
  dough: PizzaDough,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
): number => {
  const pizzaPrice =
    items.find((item) => item.dough === dough && item.size === size)?.price ||
    0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((sum, ingredient) => sum + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
