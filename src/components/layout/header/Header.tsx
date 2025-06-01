import { Container, LeftSide, RightSide, SearchInput } from "@/components";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between gap-11 py-8">
        <LeftSide />
        <SearchInput />
        <RightSide />
      </Container>
    </header>
  );
};

export default Header;
