import { cn } from "@/lib/utils";
import { getLowResSrc } from "@/lib/utils/getLowResSrc";
import type { Ingredient } from "@prisma/client";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

interface IngredientItemProps {
  ingredient: Ingredient;
  active?: boolean;
  onClick?: () => void;
}

const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
  active,
  onClick,
}) => {
  const lowResSrc = getLowResSrc(ingredient.imageUrl);
  const actualPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(ingredient.price);

  return (
    <li
      className={cn(
        "relative row-span-3 grid size-full min-w-[96px] cursor-pointer grid-rows-subgrid justify-items-center gap-1 rounded-md bg-white p-2 text-center shadow-md lg:p-3",
        { "outline-primary outline": active },
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="text-primary absolute top-2 right-2" />
      )}
      <Image
        width={64}
        height={64}
        alt={ingredient.name}
        src={ingredient.imageUrl}
        className="size-12 object-contain lg:size-16"
        loading="lazy"
        placeholder="blur"
        blurDataURL={lowResSrc}
      />
      <span className="text-xs lg:text-sm">{ingredient.name}</span>
      <strong className="text-sm font-bold">{actualPrice}</strong>
    </li>
  );
};

export default IngredientItem;
