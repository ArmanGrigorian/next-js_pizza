"use client";

import { useSearchStore } from "@/components/providers/ZustandStoreProvider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SearchList: React.FC = () => {
  const { isFocused, searchProducts } = useSearchStore();

  return (
    <ul
      className={cn(
        "invisible absolute top-16 z-30 w-full rounded-xl bg-white opacity-0 shadow-md transition-all duration-300",
        isFocused && "visible top-12 opacity-100",
      )}
    >
      {searchProducts.map((product) => {
        return (
          <li key={product.id} className="group">
            <Link
              href={`/product/${product.id}`}
              className="hover:bg-primary/10 flex cursor-pointer items-center gap-2.5 px-4 py-2 group-first:pt-3.5 group-last:pb-3.5"
            >
              <Image
                src={product.imageUrl}
                width={32}
                height={32}
                alt={product.name}
                className="size-8 rounded-full object-contain"
              />
              <span>{product.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
