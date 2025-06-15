"use client";

import { cn } from "@/lib/utils";

export type VariantType = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface GroupVariantsProps {
  items: readonly VariantType[];
  onClick?: (value: VariantType["value"]) => void;
  value?: VariantType["value"];
  className?: string;
}

const GroupVariants: React.FC<GroupVariantsProps> = ({
  items,
  onClick,
  className,
  value,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between rounded-3xl bg-[#F3F3F7] p-1 select-none",
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          type="button"
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex h-7 flex-1 cursor-pointer items-center justify-center rounded-3xl px-4 text-sm transition-all duration-400",
            {
              "bg-white shadow": item.value === value,
              "pointer-events-none text-gray-500 opacity-50": item.disabled,
            },
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default GroupVariants;
