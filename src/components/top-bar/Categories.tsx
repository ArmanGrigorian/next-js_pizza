"use client";

import { useCategoryStore } from "@/components/providers/StoreProvider";
import { cn } from "@/lib/utils";
import { Category } from "@prisma/client";

import Link from "next/link";

interface CategoriesProps {
  items: Category[];
  className?: string;
}

const Categories: React.FC<CategoriesProps> = ({ items, className }) => {
  const { activeCategory, setActiveCategory } = useCategoryStore();

  return (
    <ul
      className={cn(
        "flex w-full flex-wrap justify-around gap-1 rounded-2xl bg-gray-50 p-1 lg:w-fit",
        className,
      )}
    >
      {items.map((category) => {
        const isActive = category.name === activeCategory.name;

        return (
          <li
            onClick={() => setActiveCategory(category)}
            key={category.id}
            className={cn("flex flex-1")}
          >
            <Link
              href={`/#${category.name}`}
              className={cn(
                "flex h-10 w-full items-center justify-center rounded-2xl px-4 text-sm font-bold lg:h-11 lg:text-base",
                isActive
                  ? "text-primary bg-white shadow-md shadow-gray-200"
                  : "text-custom-black-200",
              )}
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
