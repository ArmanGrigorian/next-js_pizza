"use client";

import { SearchList } from "@/components";
import { useSearchStore } from "@/components/providers/ZustandStoreProvider";
import { cn } from "@/lib/utils";
import { API } from "@/services/api-client";
import { Search } from "lucide-react";
import { useDebounce } from "react-use";

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const {
    isFocused,
    searchText,
    searchProducts,
    setIsFocused,
    setSearchText,
    setSearchProducts,
  } = useSearchStore();

  function handleOnBlur() {
    setIsFocused(false);
    setSearchText("");
  }

  useDebounce(
    () => {
      API.products
        .search(searchText)
        .then(setSearchProducts)
        .catch(console.error);
    },
    320,
    [searchText],
  );

  return (
    <>
      {isFocused && (
        <div className="fixed top-0 right-0 left-0 z-20 size-full bg-black/50"></div>
      )}

      <search
        className={cn(
          "relative z-30 order-1 flex min-h-11 w-full flex-1 justify-between rounded-2xl lg:order-0",
          className,
        )}
      >
        <Search className="absolute top-1/2 left-3 h-5 -translate-y-1/2 text-gray-400" />
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={handleOnBlur}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          value={searchText}
          placeholder="Find pizza..."
          className="w-full rounded-2xl bg-gray-50 pr-4 pl-11 outline-hidden"
        />

        {searchProducts.length > 0 && <SearchList />}
      </search>
    </>
  );
};

export default SearchInput;
