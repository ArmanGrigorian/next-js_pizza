import { Container, LeftSide, RightSide, SearchInput } from "@/components";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex flex-col items-center justify-between gap-5 py-6 lg:flex-row lg:gap-10 lg:py-9">
        <LeftSide />
        <SearchInput />
        <RightSide />
      </Container>
    </header>
  );
};

export default Header;
