import { Container, Filters, Title, TopBar } from "@/components";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="min-h-dvh">
      <Container>
        <Title text="All pizzas" size="lg" className="mt-10 font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )} */}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
