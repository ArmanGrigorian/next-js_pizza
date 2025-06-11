"use client";

import { useCategoryStore } from "@/components/providers/ZustandStoreProvider";
import { categoriesList } from "@/lib/constants";
import { cn } from "@/lib/utils";

import Link from "next/link";

interface CategoriesProps {
  // items: Category[];
  className?: string;
}

const Categories: React.FC<CategoriesProps> = ({
  // items,
  className,
}) => {
  const { activeCategory, setActiveCategory } = useCategoryStore();

  return (
    <ul
      className={cn(
        "flex w-full flex-wrap justify-around gap-1 rounded-2xl bg-gray-50 p-1 lg:w-fit",
        className,
      )}
    >
      {categoriesList.map((category) => {
        const isActive =
          category.toLowerCase() === activeCategory.toLowerCase();

        return (
          <li
            onClick={() => setActiveCategory(category)}
            key={category}
            className={cn(
              "flex h-10 flex-1 cursor-pointer items-center rounded-2xl px-4 justify-center text-sm font-bold lg:h-11 lg:text-base",
              isActive
                ? "text-primary bg-white shadow-md shadow-gray-200"
                : "text-custom-black-200",
            )}
          >
            <Link href={`/#${category}`}>{category}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
