"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex h-11 flex-1 justify-between rounded-2xl",
        className,
      )}
    >
      <Search className="absolute top-1/2 left-3 h-5 translate-y-[-50%] text-gray-400" />
      <input
        type="text"
        placeholder="Find pizza..."
        className="w-full rounded-2xl bg-gray-50 pl-11 outline-hidden"
      />
    </div>
  );
};

export default SearchInput;
