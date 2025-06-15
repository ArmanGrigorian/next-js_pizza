import { cn } from "@/lib/utils";
import { getLowResSrc } from "@/lib/utils/getLowResSrc";
import Image from "next/image";

interface PizzaImageProps {
  src: string;
  size: 10 | 20 | 30 | 40;
  alt: string;
  className?: string;
}

const PizzaImage: React.FC<PizzaImageProps> = ({
  src,
  size,
  alt = "Logo",
  className,
}) => {
  const lowResSrc = getLowResSrc(src);

  return (
    <div
      className={cn(
        "t relative flex w-full flex-1 items-center justify-center max-lg:max-h-fit",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className={cn(
          "relative top-2.5 z-10 transition-all duration-300 max-lg:mt-1 lg:left-2.5",
          {
            "size-20": size === 10,
            "size-[240px]": size === 20,
            "size-[320px]": size === 30,
            "size-[400px]": size === 40,
          },
        )}
        loading="lazy"
        placeholder="blur"
        blurDataURL={lowResSrc}
      />

      <div className="absolute top-1/2 left-1/2 size-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-200 max-lg:hidden" />
      <div className="absolute top-1/2 left-1/2 size-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-300 max-lg:hidden" />
    </div>
  );
};

export default PizzaImage;
