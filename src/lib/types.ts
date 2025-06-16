import type {
  Cart,
  CartItem,
  Category,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export type ProductWithRelations = Product & {
  productItems: ProductItem[];
  ingredients: Ingredient[];
};

export type CategoryWithRelations = Category & {
  products: ProductWithRelations[];
};

export type CartItemDTO = CartItem & {
  productItem: ProductItem & {
    product: Product;
  };
  ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
  cartItem: CartItemDTO[];
}

export interface CreateCartItemValues {
  productItemId: number;
  ingredients?: number[];
}

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  size?: number | null;
  dough?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

export interface GetCartDetailsReturnProps {
  cartItems: CartStateItem[];
  totalPrice: number;
}
