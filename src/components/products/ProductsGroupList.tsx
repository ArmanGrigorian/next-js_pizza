"use client";

import { cn } from "@/lib/utils";

import { ProductCard } from "@/components";
import type { ProductWithRelations } from "@/lib/types";
import type { Category } from "@prisma/client";
import { RefObject, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../providers/ZustandStoreProvider";

interface ProductsGroupListProps {
  name: string;
  category: Category;
  productItems: ProductWithRelations[];
  className?: string;
  listClassName?: string;
}

const ProductsGroupList: React.FC<ProductsGroupListProps> = ({
  name,
  category,
  productItems,
  className,
  listClassName,
}) => {
  const { setActiveCategory } = useCategoryStore();
  const intersectionRef = useRef<HTMLDivElement>(
    null,
  ) as RefObject<HTMLDivElement>;

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(category);
    }
  }, [category, intersection?.isIntersecting, name]);

  return (
    <section className={className} id={name} ref={intersectionRef}>
      <h3 className="text-custom-black-200 mb-5 text-3xl font-bold lg:text-4xl">
        {name}
      </h3>

      <div
        className={cn(
          "grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-5 lg:gap-10",
          listClassName,
        )}
      >
        {productItems.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.productItems[0].price}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsGroupList;
