import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CS - Projects",
  description: "Selected work and things I’ve built.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
