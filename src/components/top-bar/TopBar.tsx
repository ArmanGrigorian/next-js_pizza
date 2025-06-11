"use client";

import {
  Categories,
  Container,
  FiltersContainer,
  SortPopup,
} from "@/components";
const TopBar: React.FC = () => {
  return (
    <>
      <Container className="flex items-center justify-between">
        <h2 className="mt-5 text-2xl text-custom-black-200 font-extrabold lg:text-3xl">All pizzas</h2>
      </Container>
      <Container className="sticky top-0 z-10 flex flex-col items-end justify-between gap-2 bg-white/80 py-5 shadow-lg shadow-black/5 backdrop-blur-xs lg:flex-row lg:items-center">
        <Categories />
        <div className="flex w-full justify-between lg:w-fit">
          <SortPopup />
          <FiltersContainer />
        </div>
      </Container>
    </>
  );
};

export default TopBar;
