"use client";

import "@/styles/navbar.css";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (href: string, isActive: boolean) => {
    setMenuOpen(false);

    if (!isActive) {
      navigate(href);
    }
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      {/* =========================
          HEADER
      ========================= */}

      <div className="navbar-header">
        {/* LOGO */}

        <button
          className="navbar-logo"
          onClick={() => {
            setMenuOpen(false);

            if (pathname !== "/") {
              navigate("/");
            }
          }}
          aria-label="Go to home"
        >
          CS
        </button>

        {/* MOBILE MENU BUTTON */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <X size={28} strokeWidth={1.5} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
                transition={{
                  duration: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Menu size={28} strokeWidth={1.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* =========================
          DESKTOP NAVIGATION
      ========================= */}

      <div className="navbar-links navbar-links-desktop">
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

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="navbar-mobile-links">
              {navigation.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.button
                    key={item.href}
                    type="button"
                    className={`navbar-mobile-link ${
                      isActive ? "is-active" : ""
                    }`}
                    initial={{
                      opacity: 0,
                      y: -18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                    }}
                    transition={{
                      delay: 0.08 + index * 0.07,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => handleNavigation(item.href, isActive)}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
