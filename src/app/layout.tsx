import { Header } from "@/components";
import { CategoryStoreProvider } from "@/components/providers/CategoryStoreProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next Pizza | Home",
  description: "The best pizza in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={nunito.variable}>
        <CategoryStoreProvider>
          <Header />
          {children}
        </CategoryStoreProvider>
      </body>
    </html>
  );
}
