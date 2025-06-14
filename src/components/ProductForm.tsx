"use client";

import { ChoosePizzaForm, ChooseProductForm } from "@/components";
import type { ProductWithRelations } from "@/lib/types";
import { useCartStore } from "./providers/ZustandStoreProvider";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  // onSubmit: _onSubmit,
}) => {
  const { loading } = useCartStore();

  const firstItem = product.productItems[0];
  const isPizzaForm = Boolean(firstItem.dough);

  const onSubmit = async (
    // productItemId?: number,
    // ingredients?: number[]
  ) => {
    // try {
    //   const itemId = productItemId ?? firstItem.id;
    //   await addCartItem({
    //     productItemId: itemId,
    //     ingredients,
    //   });
    //   toast.success(product.name + " добавлена в корзину");
    //   _onSubmit?.();
    // } catch (err) {
    //   toast.error("Не удалось добавить товар в корзину");
    //   console.error(err);
    // }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        product={product}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      product={product}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};
