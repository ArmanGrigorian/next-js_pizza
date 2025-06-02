import { Input, RangeSlider, Title } from "@/components";

interface FiltersProps {
  className?: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
  // const { ingredients, loading } = useIngredients();
  // const filters = useFilters();

  // useQueryFilters(filters);

  // const items = ingredients.map((item) => ({
  //   value: String(item.id),
  //   text: item.name,
  // }));

  // const updatePrices = (prices: number[]) => {
  //   console.log(prices, 999);
  //   filters.setPrices("priceFrom", prices[0]);
  //   filters.setPrices("priceTo", prices[1]);
  // };


  return (
    <form className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* <FiltersCheckboxGroup
        title="Type of dough"
        name="pizzaTypes"
        className="flex flex-col gap-4 border-b border-b-neutral-100 pb-7"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Classic", value: "2" },
        ]}
      /> */}

      {/* <FiltersCheckboxGroup
        title="Sizes"
        name="sizes"
        className="mt-5 border-b border-b-neutral-100 pt-6 pb-7"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      /> */}

      <fieldset className="mt-5 border-b border-b-neutral-100 pt-6 pb-7">
        <legend className="mb-3 block font-bold">Price from and to:</legend>
        <div className="mb-5 flex items-center gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          // value={[
          //   filters.prices.priceFrom || 0,
          //   filters.prices.priceTo || 1000,
          // ]}
          // onValueChange={updatePrices}
        />
      </fieldset>

      {/* <FiltersCheckboxGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5 border-b border-b-neutral-100 pt-6 pb-7"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      /> */}
    </form>
  );
};

export default Filters;
