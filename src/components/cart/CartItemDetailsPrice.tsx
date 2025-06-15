import { cn } from "@/lib/utils";

interface CartItemDetailsPriceProps {
  value: number;
  className?: string;
}

const CartItemDetailsPrice: React.FC<CartItemDetailsPriceProps> = ({
  value,
  className,
}) => {
  return <h2 className={cn("font-bold", className)}>{value} $</h2>;
};

export default CartItemDetailsPrice;
