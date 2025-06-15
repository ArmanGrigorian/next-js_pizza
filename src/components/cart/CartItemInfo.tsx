import { cn } from "@/lib/utils";

interface CartItemInfoProps {
  name: string;
  details: string;
  className?: string;
}

const CartItemInfo: React.FC<CartItemInfoProps> = ({
  name,
  details,
  className,
}) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between", className)}>
        <h2 className="flex-1 text-lg leading-6 font-bold">{name}</h2>
      </div>
      {details && <p className="w-[90%] text-xs text-gray-400">{details}</p>}
    </div>
  );
};

export default CartItemInfo;
