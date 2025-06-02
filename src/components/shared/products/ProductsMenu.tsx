const ProductsMenu: React.FC = () => {
  return (
    <div className="flex-1 bg-green-500">
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
  );
};

export default ProductsMenu;
