"use client";

import {
  Button,
  GroupVariants,
  IngredientItem,
  PizzaImage,
} from "@/components";
import { useMediaQuery, usePizzaOptions } from "@/hooks";
import { type PizzaDough, pizzaDoughs, type PizzaSize } from "@/lib/constants";
import type { ProductWithRelations } from "@/lib/types";
import { cn, getPizzaDetails } from "@/lib/utils";

interface Props {
  product: ProductWithRelations;
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

const ChoosePizzaForm: React.FC<Props> = ({
  product,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    dough,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setDough,
    addIngredient,
  } = usePizzaOptions(product.productItems);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { totalPrice, textDetails } = getPizzaDetails(
    dough,
    size,
    product.productItems,
    product.ingredients,
    selectedIngredients,
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <article className={cn(className, "flex flex-1 flex-col lg:flex-row")}>
      <PizzaImage
        src={product.imageUrl}
        size={isDesktop ? size : 10}
        alt={product.name}
        className="xs:flex hidden min-w-fit"
      />

      <div className="flex w-full flex-col gap-3 p-3 lg:w-[490px] lg:gap-5 lg:p-5">
        <hgroup className="max-sm:flex max-sm:items-center max-sm:justify-between max-sm:gap-2">
          <h3 className="text-lg font-extrabold lg:text-2xl">{product.name}</h3>
          <p className="text-custom-grey-300 text-sm lg:text-base">
            {textDetails}
          </p>
        </hgroup>

        <div className="flex flex-col gap-2">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaDoughs}
            value={String(dough)}
            onClick={(value) => setDough(Number(value) as PizzaDough)}
          />
        </div>

        <ul className="scrollbar grid grid-flow-col gap-3 overflow-auto rounded-md bg-gray-50 p-4 shadow lg:grid-flow-row [grid-template-columns:repeat(auto-fill,_minmax(96px,1fr))]">
          {product.ingredients.map((ingredient) => (
            <IngredientItem
              key={ingredient.id}
              ingredient={ingredient}
              active={selectedIngredients.has(ingredient.id)}
              onClick={() => addIngredient(ingredient.id)}
            />
          ))}
        </ul>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-10 w-full rounded-md px-4 text-base lg:h-11"
        >
          Add to cart {totalPrice} $
        </Button>
      </div>
    </article>
  );
};

export default ChoosePizzaForm;
