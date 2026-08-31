import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CS - About",
  description: "A little more about Carolyn Santana.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
