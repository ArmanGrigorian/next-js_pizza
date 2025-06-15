import { cn } from "@/lib/utils";
import Image from "next/image";

interface CartItemDetailsImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CartItemDetailsImage: React.FC<CartItemDetailsImageProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <Image
      width={60}
      height={60}
      src={src}
      alt={alt}
      className={cn("size-[60px]", className)}
    />
  );
};

export default CartItemDetailsImage;
