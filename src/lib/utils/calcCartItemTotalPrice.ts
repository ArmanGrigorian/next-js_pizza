import type { CartItemDTO } from "@/types";

/**
 * Calculates the total price of a single cart item.
 *
 * The total is computed by:
 * - Adding the base price of the product item
 * - Summing the prices of all selected ingredients
 * - Multiplying the sum by the item's quantity
 *
 * Example:
 *   (basePrice + sum(ingredients)) * quantity
 *
 * @param item - A cart item including base product info, selected ingredients, and quantity.
 * @returns The total price for the item.
 */
export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0,
  );

  return (ingredientsPrice + item.productItem.price) * item.quantity;
};
