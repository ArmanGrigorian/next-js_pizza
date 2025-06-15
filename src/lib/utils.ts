import { VariantType } from "@/components/GroupVariants";
import { Ingredient, ProductItem } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { mapPizzaDough, PizzaSize, pizzaSizes, type PizzaDough } from "./constants";
import type {
  CartDTO,
  CartItemDTO,
  CartStateItem,
  GetCartDetailsReturnProps,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isBrowser() {
  return typeof window !== "undefined";
}

export function getLowResSrc(src: string): string {
  return src.split("/").toSpliced(2, 0, "low-res").join("/");
}

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (acc, ingredient) => acc + ingredient.price,
    0,
  );

  return (ingredientsPrice + item.productItem.price) * item.quantity;
};

export const getCartDetails = (data: CartDTO): GetCartDetailsReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.productItem.product.name,
    imageUrl: item.productItem.product.imageUrl,
    price: calcCartItemTotalPrice(item),
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.dough,
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

export const getAvailablePizzaSizes = (
  dough: PizzaDough,
  items: ProductItem[],
): VariantType[] => {
  const filteredPizzasByType = items.filter((item) => item.dough === dough);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value),
    ),
  }));
};

export const calcTotalPizzaPrice = (
  dough: PizzaDough,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice =
    items.find((item) => item.dough === dough && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};


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
