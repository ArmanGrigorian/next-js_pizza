import Image from "next/image";
import Link from "next/link";

const LeftSide: React.FC = () => {
  return (
    <Link href="/" className="flex w-full items-center gap-4 lg:w-fit">
      <Image
        src="/favicon/favicon.svg"
        width={35}
        height={35}
        alt="Next Pizza Logo png"
        className="h-auto w-9"
        priority
      />

      <hgroup>
        <h1 className="text-custom-black-200 text-xl font-black uppercase lg:text-2xl">
          Next Pizza
        </h1>
        <p className="text-custom-grey-400 text-sm/2 lg:text-base/3">
          It couldn&apos;t be tastier
        </p>
      </hgroup>
    </Link>
  );
};

export default LeftSide;
