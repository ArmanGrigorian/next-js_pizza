import { mapPizzaDough, PizzaDough, PizzaSize } from "../constants";
import { CartStateItem } from "../types";

/**
 * Generates a descriptive string for a cart item, including:
 * - Pizza type and size (e.g., "Thin 30 см")
 * - List of selected ingredient names (e.g., "Cheese, Olives")
 *
 * @param ingredients - An array of ingredient objects for the cart item.
 * @param dough - (Optional) The type of pizza dough (e.g., Thin, Thick).
 * @param size - (Optional) The pizza size in centimeters.
 * @returns A string combining the pizza details and ingredient names.
 */
export const getCartItemDetails = (
  ingredients: CartStateItem["ingredients"],
  dough?: PizzaDough,
  size?: PizzaSize,
): string => {
  const details: string[] = [];

  if (size && dough) {
    const typeName = mapPizzaDough[dough];
    details.push(`${typeName} ${size} sm`);
  }

  if (ingredients?.length) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
