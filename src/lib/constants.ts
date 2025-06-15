export const mapPizzaSize = {
  20: "Small",
  30: "Medium",
  40: "Large",
} as const;

export const mapPizzaDough = {
  1: "classic",
  2: "thin",
} as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([value, name]) => ({
  name,
  value,
}));


export const pizzaDoughs = Object.entries(mapPizzaDough).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSize = keyof typeof mapPizzaSize;
export type PizzaDough = keyof typeof mapPizzaDough;
