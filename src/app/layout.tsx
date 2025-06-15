import { StoreProvider } from "@/components";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "Next Pizza | %s",
    default: "Next Pizza",
  },
  description: "The best pizza in the world",
  manifest: "/src/app/manifest.ts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-30 scroll-smooth">
      <body className={nunito.variable}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
