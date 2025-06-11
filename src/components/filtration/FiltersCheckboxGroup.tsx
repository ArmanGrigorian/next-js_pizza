"use client";

import { FilterCheckbox, IngredientsSkeleton, Input } from "@/components";
import { useState } from "react";
import type { FilterCheckboxProps } from "./FilterCheckbox";

type Item = FilterCheckboxProps;

interface FiltersCheckboxGroupProps {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  isLoading?: boolean;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

const FiltersCheckboxGroup: React.FC<FiltersCheckboxGroupProps> = ({
  title,
  items,
  defaultItems,
  limit = 6,
  searchInputPlaceholder = "Search...",
  className,
  isLoading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (isLoading) {
    return <IngredientsSkeleton title={title} limit={limit} />;
  }

  return (
    <fieldset className={className}>
      <legend className="mb-3 block font-bold">{title}</legend>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
          />
        </div>
      )}

      <div className="scrollbar flex max-h-40 lg:max-h-96 flex-col gap-4 overflow-y-auto px-2">
        {list.map((item, index) => (
          <FilterCheckbox
            key={item.value + index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "mt-4 border-t border-t-neutral-100" : ""}>
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Hide" : "+ Show all"}
          </button>
        </div>
      )}
    </fieldset>
  );
};

export default FiltersCheckboxGroup;
