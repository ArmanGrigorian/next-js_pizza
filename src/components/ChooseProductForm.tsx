import { Button } from "@/components";
import type { ProductWithRelations } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  product: ProductWithRelations;
  loading?: boolean;
  onSubmit?: VoidFunction;
  className?: string;
}

const ChooseProductForm: React.FC<Props> = ({
  product,
  onSubmit,
  className,
  loading,
}) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="relative flex w-full flex-1 items-center justify-center">
        <Image
          src={product.imageUrl}
          width={240}
          height={240}
          alt={product.name}
          className="relative top-2 left-2 z-10 size-[240px] transition-all duration-300"
        />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <h3 className="mb-1 font-extrabold">{product.name}</h3>

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="mt-10 h-[55px] w-full rounded-[18px] px-10 text-base"
        >
          Add to cart {product.productItems[0].price} $
        </Button>
      </div>
    </div>
  );
};

export default ChooseProductForm;
