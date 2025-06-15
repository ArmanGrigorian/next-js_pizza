"use client";

import { useMediaQuery } from "@/hooks";
import type { ProductWithRelations } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerHeader,
} from "@/components";
import { ProductForm } from "../ProductForm";

interface ChooseProductModalProps {
  product: ProductWithRelations;
  className?: string;
}

const ChooseProductModal: React.FC<ChooseProductModalProps> = ({
  product,
  className,
}) => {
  const router = useRouter();
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isDesktop ? (
        <Dialog
          open={true}
          onOpenChange={() => {
            router.back();
          }}
        >
          <DialogHeader>
            <DialogTitle hidden>{product.name}</DialogTitle>
          </DialogHeader>
          <DialogContent className={cn("min-w-[960px] bg-white", className)}>
            <ProductForm product={product} onSubmit={() => router.back()} />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer
          open={true}
          onOpenChange={() => {
            router.back();
          }}
        >
          <DrawerHeader>
            <DialogTitle hidden>Choose a product</DialogTitle>
          </DrawerHeader>
          <DrawerContent className={cn("bg-white", className)}>
            <ProductForm product={product} onSubmit={() => router.back()} />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default ChooseProductModal;
