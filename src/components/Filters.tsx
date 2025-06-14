"use client";

import { FiltersCheckboxGroup, Input, RangeSlider } from "@/components";
import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

import { useDebounce } from "react-use";

interface FiltersProps {
  className?: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
  const {
    selectedIngredients,
    selectedDoughs,
    selectedSizes,
    price,
    setSelectedIngredients,
    setSelectedDoughs,
    setSelectedSizes,
    setPrice,
    params,
  } = useFilters();
  const { queryFilters } = useQueryFilters({ params });
  const { ingredientsList, isLoading } = useIngredients();

  useDebounce(queryFilters, 280, [params]);

  return (
    <form className={className}>
      <FiltersCheckboxGroup
        title="Type of dough"
        name="doughs"
        className="flex flex-col gap-4 border-b border-b-neutral-100 pt-2 pb-6"
        onClickCheckbox={setSelectedDoughs}
        selected={selectedDoughs}
        items={[
          { text: "Thin", value: "1" },
          { text: "Classic", value: "2" },
        ]}
      />

      <FiltersCheckboxGroup
        title="Sizes"
        name="sizes"
        className="mt-4 border-b border-b-neutral-100 pt-2 pb-6"
        onClickCheckbox={setSelectedSizes}
        selected={selectedSizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      />

      <fieldset className="mt-4 border-b border-b-neutral-100 pt-2 pb-6">
        <legend className="mb-3 block font-bold">Price from and to:</legend>
        <div className="mb-7 flex items-center gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={price.from}
            onChange={(e) =>
              setPrice({ ...price, from: Number(e.target.value) })
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={price.to}
            onChange={(e) => setPrice({ ...price, to: Number(e.target.value) })}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.from || 0, price.to || 1000]}
          onValueChange={(values) =>
            setPrice({ from: values[0], to: values[1] })
          }
        />
      </fieldset>

      <FiltersCheckboxGroup
        title="Ingredients"
        name="ingredients"
        className="mt-4 border-b border-b-neutral-100 pt-2 pb-6"
        limit={6}
        defaultItems={ingredientsList.slice(0, 6)}
        items={ingredientsList}
        isLoading={isLoading}
        onClickCheckbox={setSelectedIngredients}
        selected={selectedIngredients}
      />
    </form>
  );
};

export default Filters;
