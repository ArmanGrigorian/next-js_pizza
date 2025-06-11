import { ProductsGroupList } from "@/components";
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
    <div className="flex-1">
      <div className="flex flex-col gap-16">
        {categories.map(
          (category) =>
            category.products.length > 0 && (
              <ProductsGroupList
                key={category.id}
                title={category.name}
                categoryId={category.id}
                items={category.products}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default ProductsMenu;
