import { Skeleton } from "@/components";

interface IngredientsSkeletonProps {
  title: string;
  limit: number;
}

const IngredientsSkeleton: React.FC<IngredientsSkeletonProps> = ({
  title,
  limit,
}) => {
  return (
    <div>
      <p className="mb-3 font-bold">{title}</p>

      {...new Array(limit)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className="mb-4 h-6 rounded-[8px]" />
        ))}

      <Skeleton className="mb-4 h-6 w-28 rounded-[8px]" />
    </div>
  );
};

export default IngredientsSkeleton;
