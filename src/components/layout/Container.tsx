import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("max-w-full-hd mx-auto px-4 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
