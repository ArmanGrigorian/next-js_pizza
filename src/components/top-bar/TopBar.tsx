import {
  Categories,
  Container,
  FiltersContainer,
  SortPopup,
} from "@/components";
import { prisma } from "@/prisma/prisma-client";

const TopBar: React.FC = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div className="sticky top-0 z-10 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xs">
      <Container className="flex flex-col items-end justify-between gap-2 py-5 lg:flex-row lg:items-center">
        <Categories items={categories} />
        <div className="flex w-full justify-between lg:w-fit">
          <SortPopup />
          <FiltersContainer />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
