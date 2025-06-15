import { Button } from "@/components";
import type { ProductWithRelations } from "@/lib/types";
import Image from "next/image";

interface Props {
  product: ProductWithRelations;
  loading?: boolean;
  onSubmit?: VoidFunction;
}

const ChooseProductForm: React.FC<Props> = ({ product, onSubmit, loading }) => {
  const actualPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.productItems[0].price);

  return (
    <div className="flex flex-col items-center justify-between gap-1 p-3 lg:flex-row lg:items-stretch lg:p-5">
      <Image
        src={product.imageUrl}
        width={240}
        height={240}
        alt={product.name}
        className="relative size-20 flex-1 object-contain lg:size-[240px]"
      />

      <div className="flex w-full flex-col justify-between lg:w-[490px]">
        <h3 className="text-lg font-extrabold lg:text-2xl">{product.name}</h3>

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-10 w-full rounded-md px-4 text-base lg:h-11"
        >
          Add to cart {actualPrice}
        </Button>
      </div>
    </div>
  );
};

export default ChooseProductForm;
