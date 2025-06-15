import type {
  CartDTO,
  CartStateItem,
  GetCartDetailsReturnProps,
} from "@/types";
import { calcCartItemTotalPrice } from "./calcCartItemTotalPrice";

/**
 * Transforms a CartDTO into a structured format suitable for UI rendering or state storage.
 *
 * Each cart item includes:
 * - Product and ingredient information
 * - Calculated total price
 * - Dough and size details
 * - Disabled flag (defaults to false)
 *
 * @param data - Raw cart data object (CartDTO), typically from an API or server response.
 * @returns A structured object containing:
 *   - `items`: An array of cart items formatted for state/UI
 *   - `totalAmount`: The cart's total price
 */
export const getCartDetails = (data: CartDTO): GetCartDetailsReturnProps => {
  const items = data.cartItem.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    size: item.productItem.size,
    dough: item.productItem.dough,
    disabled: false,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as CartStateItem[];

  return {
    items,
    totalAmount: data.totalPrice,
  };
};
