"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
}

type NavigationContextType = {
  navigate: (href: string) => void;
};

type TransitionPhase =
  | "idle"
  | "cover"
  | "reveal";

const NavigationContext =
  createContext<NavigationContextType | null>(null);

export function usePageTransition() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used inside PageTransition."
    );
  }

  return context;
}

export default function PageTransition({
  children,
}: PageTransitionProps) {
  const router = useRouter();

  const [phase, setPhase] =
    useState<TransitionPhase>("idle");

  const navigate = (href: string) => {
    if (phase !== "idle") return;

    // 1. White wipe moves UP from the bottom.
    setPhase("cover");

    // 2. Wait until the screen is completely covered.
    setTimeout(() => {
      router.push(href);

      // 3. Give Next.js time to render the new page.
      setTimeout(() => {
        setPhase("reveal");
      }, 100);
    }, 650);
  };

  const getWipePosition = () => {
    switch (phase) {
      case "idle":
        return "100%";

      case "cover":
        return "0%";

      case "reveal":
        return "100%";
    }
  };

  return (
    <NavigationContext.Provider value={{ navigate }}>
      <div className="page-transition">
        {children}

        <motion.div
          className="page-wipe"
          initial={{
            top: "100%",
          }}
          animate={{
            top: getWipePosition(),
          }}
          transition={{
            duration: 0.65,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={() => {
            if (phase === "reveal") {
              setPhase("idle");
            }
          }}
        />
      </div>
    </NavigationContext.Provider>
  );
}