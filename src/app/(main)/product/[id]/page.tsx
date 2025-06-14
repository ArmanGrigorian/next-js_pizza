import { GroupVariants, PizzaImage } from "@/components";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export type ProductPageProps = Readonly<{
  params: Promise<{ id: string }>;
}>;

export async function generateStaticParams() {
  const products = await prisma.product.findMany();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      productItems: true,
    },
  });

  if (!product) return notFound();

  return {
    title: product.name,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      productItems: true,
    },
  });

  if (!product) return notFound();

  return (
    <main className="max-w-full-hd mx-auto my-10 flex min-h-dvh w-full flex-col px-4 lg:px-8">
      <div className="flex flex-1 items-center">
        <PizzaImage src={product.imageUrl} size={20} alt={product.name} />

        <div className="w-[490px] bg-gray-50 p-7">
          <h1 className="text-custom-black-200 text-lg font-bold lg:text-xl">
            {product.name}
          </h1>
          <p className="text-custom-grey-300 text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            eos fuga odio.
          </p>
          <GroupVariants
            value="1"
            items={[
              {
                name: "Small",
                value: "1",
              },
              {
                name: "Medium",
                value: "2",
              },
              {
                name: "Large",
                value: "3",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
