import { cn, getLowResSrc } from "@/lib/utils";
import type { Ingredient } from "@prisma/client";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

interface IngredientItemProps {
  ingredient: Ingredient;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
  active,
  onClick,
  className,
}) => {
  const lowResSrc = getLowResSrc(ingredient.imageUrl);

  return (
    <li
      className={cn(
        "relative row-span-3 min-w-[96px] grid size-full gap-1 cursor-pointer grid-rows-subgrid justify-items-center rounded-md bg-white p-2 lg:p-3 text-center shadow-md",
        { "outline-primary outline": active },
        className,
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
        className="size-12 lg:size-16 object-contain"
        loading="lazy"
        placeholder="blur"
        blurDataURL={lowResSrc}
      />
      <span className="text-xs lg:text-sm">{ingredient.name}</span>
      <strong className="text-sm font-bold">{ingredient.price} $</strong>
    </li>
  );
};

export default IngredientItem;
