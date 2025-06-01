import { Button } from "@/components";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

const RightSide: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" className="flex items-center gap-1">
        <User size={16} />
        <span>Login</span>
      </Button>

      <Button className="group relative flex items-center">
        <strong>520 ₽</strong>
        <div className="mx-2 h-full w-px bg-white/30" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart
            size={16}
            className="relative h-auto w-4"
            strokeWidth={2}
          />
          <strong>3</strong>
        </div>
        <ArrowRight
          size={16}
          className="absolute right-5 h-auto w-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Button>
    </div>
  );
};

export default RightSide;
