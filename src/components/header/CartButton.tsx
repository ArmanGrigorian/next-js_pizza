"use client";

import { Button, CartDrawer } from "@/components";
import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingCart } from "lucide-react";
import React from "react";
import { useCartStore } from "../providers/StoreProvider";

const CartButton: React.FC = () => {
  const { cartItems, totalPrice, loading } = useCartStore();
  const actualPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);

  return (
    <CartDrawer>
      <Button
        loading={loading}
        className={cn("group relative flex items-center", {
          "w-[105px]": loading,
        })}
      >
        <strong>{actualPrice}</strong>
        <div className="mx-2 h-full w-px bg-white/30" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart
            size={16}
            className="relative h-auto w-4"
            strokeWidth={2}
          />
          <strong>{cartItems.length}</strong>
        </div>
        <ArrowRight
          size={16}
          className="absolute right-5 h-auto w-4 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        />
      </Button>
    </CartDrawer>
  );
};

export default CartButton;
