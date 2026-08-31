import type { Metadata } from "next";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { headingFont, bodyFont } from "./fonts";

export const metadata: Metadata = {
  title: "CS — iOS & Product Engineer",
  description:
    "Portfolio of Carolyn Santana, an iOS and Product Engineer focused on building thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SmoothScroll />

        <PageTransition>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
