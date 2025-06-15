import Link from "next/link";

import { Button } from "@/components";
import type { ProductWithRelations } from "@/lib/types";

import { getLowResSrc } from "@/lib/utils/getLowResSrc";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: ProductWithRelations;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const actualPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.productItems[0].price);

  const lowResSrc = getLowResSrc(product.imageUrl);

  return (
    <article>
      <Link href={`/product/${product.id}`} scroll={false}>
        <div className="flex h-53 justify-center rounded-lg bg-gray-50 p-6 lg:h-64">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={215}
            height={215}
            className="size-44 lg:size-52"
            loading="lazy"
            placeholder="blur"
            blurDataURL={lowResSrc}
          />
        </div>

        <h3 className="text-custom-black-200 mt-3 mb-0.5 text-lg font-bold lg:text-xl">
          {product.name}
        </h3>

        <p className="text-custom-grey-400 text-sm lg:text-base">
          {product.ingredients.map((ingredient) => ingredient.name).join(", ")}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            from <b>{actualPrice}</b>
          </span>

          <Button
            variant="secondary"
            className="bg-gray-50 text-sm font-bold lg:text-base"
          >
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
