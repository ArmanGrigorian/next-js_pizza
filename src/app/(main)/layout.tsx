import { Header } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main",
  description: "The best pizza in the world",
};

export default function MainLayout({
  children,
  productModal,
}: Readonly<{
  children: React.ReactNode;
  productModal: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      {productModal}
    </>
  );
}
