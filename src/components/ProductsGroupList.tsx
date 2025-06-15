"use client";

import { ProductCard } from "@/components";
import type { CategoryWithRelations } from "@/lib/types";
import { RefObject, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useCategoryStore } from "./providers/StoreProvider";

interface ProductsGroupListProps {
  category: CategoryWithRelations;
}

const ProductsGroupList: React.FC<ProductsGroupListProps> = ({ category }) => {
  const { activeCategory, setActiveCategory } = useCategoryStore();
  const intersectionRef = useRef<HTMLDivElement>(
    null,
  ) as RefObject<HTMLDivElement>;

  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting && activeCategory?.id !== category.id) {
      setActiveCategory(category);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intersection?.isIntersecting]);

  return (
    <section id={category.name} ref={intersectionRef}>
      <h2 className="text-custom-black-200 mb-5 text-3xl font-bold lg:text-4xl">
        {category.name}
      </h2>

      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-5 lg:gap-10">
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGroupList;
