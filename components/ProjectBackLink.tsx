"use client";

import Link from "next/link";
import { usePageTransition } from "@/components/PageTransition";

interface ProjectBackLinkProps {
  className?: string;
}

export default function ProjectBackLink({ className }: ProjectBackLinkProps) {
  const { navigate } = usePageTransition();

  return (
    <Link
      href="/projects"
      className={className}
      onClick={(event) => {
        event.preventDefault();

        navigate("/projects");
      }}
    >
      ← Back to projects
    </Link>
  );
}
