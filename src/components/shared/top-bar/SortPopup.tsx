"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

const sortCategories = [
  {
    title: "Popular first",
    value: "popular",
  },
  {
    title: "First the cheap ones",
    value: "cheap",
  },
  {
    title: "First the expensive ones",
    value: "expensive",
  },
  {
    title: "With the best rating",
    value: "rating",
  },
];

interface SortPopupProps {
  className?: string;
}

const SortPopup: React.FC<SortPopupProps> = ({ className }) => {
  const [activeSort, setActiveSort] = useState(sortCategories[0].value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex h-[52px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5",
            className,
          )}
        >
          <ArrowUpDown className="h-4 w-4" />
          <b>Sorting:</b>

          <b className="text-primary">{activeSort}</b>
        </div>
      </PopoverTrigger>

      <PopoverContent className="min-w-max">
        <ul>
          {sortCategories.map(({ title, value }) => (
            <li
              key={value}
              onClick={() => setActiveSort(value)}
              className="hover:bg-secondary hover:text-primary cursor-pointer rounded-md p-2 px-4"
            >
              {title}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default SortPopup;
