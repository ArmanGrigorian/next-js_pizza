import { ChooseProductModal } from "@/components";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await prisma.product.findMany();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

type ProductPageProps = Readonly<{
  params: Promise<{ id: string }>;
}>;

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

export default async function ProductModalPage({ params }: ProductPageProps) {
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

  return <ChooseProductModal product={product} />;
}
