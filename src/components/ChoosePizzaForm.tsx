"use client";

import { Button, PizzaImage } from "@/components";
import { ProductWithRelations } from "@/lib/types";
import { cn } from "@/lib/utils";

interface Props {
  product: ProductWithRelations;
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

const ChoosePizzaForm: React.FC<Props> = ({
  product,
  loading,
  // onSubmit,
  className,
}) => {
  // const {
  //   size,
  //   type,
  //   selectedIngredients,
  //   availableSizes,
  //   currentItemId,
  //   setSize,
  //   setType,
  //   addIngredient,
  // } = usePizzaOptions(items);

  // const { totalPrice, textDetails } = getPizzaDetails(
  //   type,
  //   size,
  //   items,
  //   ingredients,
  //   selectedIngredients,
  // );

  // const handleClickAdd = () => {
  //   if (currentItemId) {
  //     onSubmit(currentItemId, Array.from(selectedIngredients));
  //   }
  // };

  const textDetails =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const totalPrice = 340;

  return (
    <div className={cn(className, "flex flex-1 flex-col lg:flex-row")}>
      <PizzaImage
        src={product.imageUrl}
        size={20}
        alt={product.name}
        className="min-w-fit"
      />

      <div className="w-[490px] bg-[#f7f6f5] p-6">
        <h3 className="mb-0.5 font-extrabold">{product.name}</h3>

        <p className="text-gray-400">{textDetails}</p>

        <div className="mt-5 flex flex-col gap-4">
          {/* <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          /> */}
        </div>

        <div className="scrollbar mt-5 h-[420px] overflow-auto rounded-md bg-gray-50 p-5">
          <div className="grid grid-cols-3 gap-3">
            {/* {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))} */}
          </div>
        </div>

        <Button
          loading={loading}
          // onClick={handleClickAdd}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Add to cart {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
