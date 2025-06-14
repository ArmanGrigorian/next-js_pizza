import { cn, getLowResSrc } from "@/lib/utils";
import Image from "next/image";

interface PizzaImageProps {
  src: string;
  size: 20 | 30 | 40;
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
        "relative flex w-full flex-1 items-center justify-center",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className={cn(
          "relative top-2 left-2 z-10 transition-all duration-300",
          {
            "h-[240px] w-[240px]": size === 20,
            "h-[320px] w-[320px]": size === 30,
            "h-[400px] w-[400px]": size === 40,
          },
        )}
        loading="lazy"
        placeholder="blur"
        blurDataURL={lowResSrc}
      />

      <div className="absolute top-1/2 left-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-100" />
      <div className="absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200" />
    </div>
  );
};

export default PizzaImage;
