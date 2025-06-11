"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
  Filters,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components";
import { useMediaQuery } from "@/hooks";
import { SlidersHorizontal } from "lucide-react";

const FiltersContainer: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isDesktop ? (
        <Sheet>
          <SheetHeader>
            <SheetTrigger className="group">
              <SlidersHorizontal className="group-hover:text-primary ml-2 size-5 cursor-pointer lg:size-6 text-custom-black-200" />
            </SheetTrigger>
          </SheetHeader>
          <SheetContent side="left" className="p-8">
            <SheetTitle className="text-primary mb-5 text-2xl font-semibold">
              Filters
            </SheetTitle>
            <SheetDescription hidden>Filters</SheetDescription>
            <Filters />
          </SheetContent>
        </Sheet>
      ) : (
        <Drawer>
          <DrawerTrigger className="group">
            <SlidersHorizontal className="group-hover:text-primary ml-2 size-5 cursor-pointer lg:size-6 text-custom-black-200" />
          </DrawerTrigger>
          <DrawerContent className="mb-10 px-4">
            <DrawerTitle className="text-primary mb-5 text-2xl font-semibold">
              Filters
            </DrawerTitle>
            <DrawerDescription hidden>Filters</DrawerDescription>
            <Filters />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default FiltersContainer;
