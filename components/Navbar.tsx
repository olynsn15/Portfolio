"use client";

import "@/styles/navbar.css";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { usePageTransition } from "./PageTransition";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export default function Navbar() {
  const { navigate } = usePageTransition();
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* =========================
          LOGO
      ========================= */}

      <button
        className="navbar-logo"
        onClick={() => {
          if (pathname !== "/") {
            navigate("/");
          }
        }}
        aria-label="Go to home"
      >
        CS
      </button>

      {/* =========================
          NAVIGATION
      ========================= */}

      <div className="navbar-links">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <button
              key={item.href}
              type="button"
              className={`navbar-link ${isActive ? "is-active" : ""}`}
              onClick={() => {
                if (!isActive) {
                  navigate(item.href);
                }
              }}
            >
              <motion.span className="navbar-link-text">
                {item.label}
              </motion.span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
