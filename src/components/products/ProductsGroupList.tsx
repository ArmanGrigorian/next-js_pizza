"use client";

import { cn } from "@/lib/utils";

import { ProductCard } from "@/components";
import { Ingredient, Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {
  items?: ProductItem[];
  ingredients: Ingredient[];
};
interface Props {
  title: string;
  categoryId: number;
  className?: string;
  listClassName?: string;
  items: ProductWithRelations[];
}

const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  className,
}) => {
  return (
    <section className={className} id={title}>
      <h3 className="mb-5 text-3xl text-custom-black-200 font-bold lg:text-4xl">{title}</h3>

      <div
        className={cn(
          "grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-5 lg:gap-10",
          listClassName,
        )}
      >
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            // price={product.items[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsGroupList;
