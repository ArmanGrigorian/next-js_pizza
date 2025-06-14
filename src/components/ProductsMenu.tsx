import { Container, ProductsGroupList } from "@/components";
import { prisma } from "@/prisma/prisma-client";

const ProductsMenu: React.FC = async () => {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          productItems: true,
        },
      },
    },
  });

  return (
    <Container className="relative mt-10 flex w-full flex-col gap-8 pb-14 lg:gap-16">
      {categories.map(
        (category) =>
          category.products.length > 0 && (
            <ProductsGroupList
              key={category.id}
              category={category}
            />
          ),
      )}
    </Container>
  );
};

export default ProductsMenu;
