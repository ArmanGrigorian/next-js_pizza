import { FilterCheckbox, Title } from "@/components";

interface FiltersProps {
  className?: string;
}

const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div>
        <FilterCheckbox text="Pepperoni" value="pepperoni" name="pepperoni" />
      </div>
    </div>
  );
};

export default Filters;
