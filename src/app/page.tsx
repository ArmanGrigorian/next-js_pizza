import { Container, ProductsMenu, TopBar } from "@/components";

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <TopBar />

      <Container className="relative mt-10 flex gap-8 pb-14">
        <ProductsMenu />
      </Container>
    </main>
  );
}
