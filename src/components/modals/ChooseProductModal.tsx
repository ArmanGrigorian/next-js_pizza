"use client";

import { useMediaQuery } from "@/hooks";
import type { ProductWithRelations } from "@/lib/types";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
} from "@/components";
import { ProductForm } from "../ProductForm";

interface ChooseProductModalProps {
  product: ProductWithRelations;
}

const ChooseProductModal: React.FC<ChooseProductModalProps> = ({ product }) => {
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
          <DialogContent className="min-w-[960px] bg-white p-0">
            <DialogDescription hidden>Choose a product</DialogDescription>
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
          <DrawerContent className="bg-white p-0">
            <DrawerDescription hidden>Choose a product</DrawerDescription>
            <ProductForm product={product} onSubmit={() => router.back()} />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default ChooseProductModal;
