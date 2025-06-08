import { Container, Filters, ProductsMenu, Title, TopBar } from "@/components";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <main className="min-h-dvh">
      <Container>
        <Title text="All pizzas" size="lg" className="mt-10 font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-20">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <ProductsMenu />
        </div>
      </Container>
    </main>
  );
}
