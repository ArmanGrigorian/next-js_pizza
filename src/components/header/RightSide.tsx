import { CartButton, LoginButton } from "@/components";

const RightSide: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between gap-3 lg:w-fit">
      <LoginButton />
      <CartButton />
    </div>
  );
};

export default RightSide;
