"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

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
  className?: string;
}

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className={cn("flex gap-1 rounded-2xl bg-gray-50 p-1", className)}>
      {categoriesList.map((category, idx) => {
        const isActive = idx === activeIndex;

        return (
          <li
            key={category}
            className={cn(
              "flex h-11 cursor-pointer items-center rounded-2xl px-5 font-bold",
              isActive && "text-primary bg-white shadow-md shadow-gray-200",
            )}
            onClick={() => setActiveIndex(idx)}
          >
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
