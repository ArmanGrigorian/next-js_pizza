import { Container } from "@/components";

export type ProductPageProps = Readonly<{
  params: Promise<{ id: string }>;
}>;


export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-dvh">
      <Container>ProductPage {id}</Container>
    </main>
  );
}
