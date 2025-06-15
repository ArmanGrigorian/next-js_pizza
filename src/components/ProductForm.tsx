"use client";

import { ChoosePizzaForm, ChooseProductForm } from "@/components";
import type { ProductWithRelations } from "@/lib/types";
import { addCartItem } from "@/services/cart";
import toast from "react-hot-toast";
import { useCartStore } from "./providers/StoreProvider";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit }) => {
  const { loading } = useCartStore();

  const firstItem = product.productItems[0];
  const isPizzaForm = Boolean(firstItem.dough);

  const handleSubmit = async (
    productItemId?: number,
    ingredients?: number[],
  ) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + " Added to cart");
      onSubmit?.();
    } catch (err) {
      toast.error("Failed to add item to cart");
      console.error(err);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        product={product}
        onSubmit={handleSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      product={product}
      onSubmit={handleSubmit}
      loading={loading}
    />
  );
};
