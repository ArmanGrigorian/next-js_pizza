"use client";

import {
  Button,
  CartDrawerItem,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components";
import { useCart } from "@/hooks/useCart";
import type { PizzaDough, PizzaSize } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { getCartItemDetails } from "@/lib/utils/getCartItemDetails";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalPrice, updateItemQuantity, cartItems, removeCartItem } =
    useCart();
  const [redirecting, setRedirecting] = useState(false);
  const router = useRouter();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus",
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetHeader>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetTitle hidden>Cart</SheetTitle>
        <SheetDescription hidden>Cart</SheetDescription>
      </SheetHeader>

      <SheetContent className="flex flex-col justify-between bg-white pb-0">
        <div
          className={cn(
            "flex h-full flex-col",
            !totalPrice && "justify-center",
          )}
        >
          {totalPrice > 0 && (
            <SheetHeader>
              <SheetTitle>
                <span className="font-bold">
                  {cartItems.length} products in cart
                </span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalPrice && (
            <div className="mx-auto flex w-72 flex-col items-center justify-center">
              <Image
                src="/images/empty-box.png"
                alt="Empty cart"
                width={120}
                height={120}
              />
              <h2 className="my-2 text-center font-bold">Cart is empty</h2>
              <p className="mb-5 text-center text-neutral-500">
                Add at least one pizza to place an order
              </p>

              <SheetClose asChild>
                <Button className="h-12 w-56 text-base" size="lg">
                  <ArrowLeft className="mr-2 w-5" />
                  Go back
                </Button>
              </SheetClose>
            </div>
          )}

          {totalPrice > 0 && (
            <>
              <div className="mt-5 flex-1 overflow-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={getCartItemDetails(
                        item.ingredients,
                        item.dough as PizzaDough,
                        item.size as PizzaSize,
                      )}
                      disabled={item.disabled}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="bg-white p-8">
                <div className="w-full">
                  <div className="mb-4 flex">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Total
                      <div className="relative -top-1 mx-2 flex-1 border-b border-dashed border-b-neutral-200" />
                    </span>

                    <span className="text-lg font-bold">{totalPrice} ₽</span>
                  </div>

                  <Button
                    onClick={() => {
                      setRedirecting(true);
                      router.push("/checkout");
                    }}
                    loading={redirecting}
                    type="submit"
                    className="h-12 w-full text-base"
                  >
                    Place an order
                    <ArrowRight className="ml-2 w-5" />
                  </Button>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
