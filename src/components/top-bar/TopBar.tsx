import { Categories, Container, SortPopup } from "@/components";
import { cn } from "@/lib/utils";

interface TopBarProps {
  className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 py-5 shadow-lg shadow-black/5 backdrop-blur-xs",
        className,
      )}
    >
      <Container className="flex items-center justify-between gap-2">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
