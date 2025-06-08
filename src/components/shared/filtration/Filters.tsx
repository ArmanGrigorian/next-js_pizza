"use client";

import { FiltersCheckboxGroup, Input, RangeSlider, Title } from "@/components";
import useFilters from "@/hooks/useFilters";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useDebounce } from "react-use";

interface FiltersProps {
  className?: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
  const router = useRouter();

  const {
    ingredients,
    selectedIngredients,
    selectedDoughs,
    selectedSizes,
    price,
    setSelectedIngredients,
    setSelectedDoughs,
    setSelectedSizes,
    setPrice,
    updatePrice,
    filters,
    isLoading,
  } = useFilters();

  // useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const query = qs.stringify(filters, {
    arrayFormat: "comma",
  });

  useDebounce(() => router.push(`?${query}`, { scroll: false }), 320, [
    filters,
  ]);

  return (
    <form className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <FiltersCheckboxGroup
        title="Type of dough"
        name="doughs"
        className="flex flex-col gap-4 border-b border-b-neutral-100 pb-7"
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
        className="mt-5 border-b border-b-neutral-100 pt-6 pb-7"
        onClickCheckbox={setSelectedSizes}
        selected={selectedSizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      />

      <fieldset className="mt-5 border-b border-b-neutral-100 pt-6 pb-7">
        <legend className="mb-3 block font-bold">Price from and to:</legend>
        <div className="mb-5 flex items-center gap-3">
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
          onValueChange={updatePrice}
        />
      </fieldset>

      <FiltersCheckboxGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5 border-b border-b-neutral-100 pt-6 pb-7"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        isLoading={isLoading}
        onClickCheckbox={setSelectedIngredients}
        selected={selectedIngredients}
      />
    </form>
  );
};

export default Filters;
