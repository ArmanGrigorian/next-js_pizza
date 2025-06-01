import Image from "next/image";

const LeftSide: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo.png"
        width={35}
        height={35}
        alt="Next Pizza Logo png"
        className="h-auto w-[35px]"
        priority
      />

      <hgroup>
        <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
        <p className="text-sm leading-3 text-gray-400">
          It couldn&apos;t be tastier
        </p>
      </hgroup>
    </div>
  );
};

export default LeftSide;
