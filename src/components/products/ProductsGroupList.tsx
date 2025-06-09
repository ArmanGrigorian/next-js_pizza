// "use client";

// import { cn } from "@/lib/utils";

// import { useEffect, useRef } from "react";
// import { useIntersection } from "react-use";
// import Title from "../Title";
// import ProductCard from "./ProductCard";
// import { useCategoryStore } from "@/components/providers/ZustandStoreProvider";

// interface Props {
//   title: string;
//   items: ProductWithRelations[];
//   categoryId: number;
//   className?: string;
//   listClassName?: string;
// }

// const ProductsGroupList: React.FC<Props> = ({
//   title,
//   items,
//   listClassName,
//   categoryId,
//   className,
// }) => {
//   const {activeId, setActiveId} = useCategoryStore();
//   const intersectionRef = useRef(null);
//   const intersection = useIntersection(intersectionRef, {
//     threshold: 0.4,
//   });

//   useEffect(() => {
//     if (intersection?.isIntersecting) {
//       setActiveId(categoryId);
//     }
//   }, [categoryId, intersection?.isIntersecting, title]);

//   return (
//     <section className={className} id={title} ref={intersectionRef}>
//       <Title text={title} size="lg" className="mb-5 font-extrabold" />

//       <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
//         {items.map((product) => (
//           <ProductCard
//             key={product.id}
//             id={product.id}
//             name={product.name}
//             imageUrl={product.imageUrl}
//             price={product.items[0].price}
//             ingredients={product.ingredients}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductsGroupList;
