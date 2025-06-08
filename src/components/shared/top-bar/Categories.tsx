"use client";

import { useCategoryStore } from "@/components/providers/ZustandStoreProvider";
import { cn } from "@/lib/utils";

import Link from "next/link";

const categoriesList = [
  "Pizzas",
  "Combo",
  "Snacks",
  "Cocktails",
  "Coffee",
  "Drinks",
  "Desserts",
];

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
    <ul className={cn("flex gap-1 rounded-2xl bg-gray-50 p-1", className)}>
      {categoriesList.map((category, idx) => {
        const isActive = idx === activeCategory;

        return (
          <li
            onClick={() => setActiveCategory(idx)}
            key={category}
            className={cn(
              "flex h-11 cursor-pointer items-center rounded-2xl px-5 font-bold",
              isActive && "text-primary bg-white shadow-md shadow-gray-200",
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
