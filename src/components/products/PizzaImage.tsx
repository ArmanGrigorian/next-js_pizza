import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-1 items-center justify-center",
        className,
      )}
    >
      <Image
        src={imageUrl}
        alt="Logo"
        width={500}
        height={500}
        className={cn(
          "relative top-2 left-2 z-10 transition-all duration-300",
          {
            "h-[300px] w-[300px]": size === 20,
            "h-[400px] w-[400px]": size === 30,
            "h-[500px] w-[500px]": size === 40,
          },
        )}
      />

      <div className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200" />
      <div className="absolute top-1/2 left-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-100" />
    </div>
  );
};
