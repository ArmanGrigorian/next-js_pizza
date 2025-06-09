import Link from "next/link";

import { Button, Title } from "@/components";
import { Plus } from "lucide-react";
import Image from "next/image";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  // ingredients: Ingredient[];
  className?: string;
}

const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  // ingredients,
  className,
}) => {
  return (
    <article>
      <Link href={`/product/${id}`} className={className}>
        <div className="bg-secondary flex h-[260px] justify-center rounded-lg p-6">
          <Image
            src={imageUrl}
            alt={name}
            width={215}
            height={215}
            className="h-[215px] w-[215px]"
          />
        </div>

        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />

        <p className="text-sm text-gray-400">
          {/* {ingredients.map((ingredient) => ingredient.name).join(', ')} */}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
