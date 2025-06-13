import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn("max-w-full-hd mx-auto w-full px-4 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
