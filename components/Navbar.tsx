"use client";

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

  return (
    <nav className="navbar">
      <button
        className="navbar-logo"
        onClick={() => navigate("/")}
        aria-label="Go to home"
      >
        CS
      </button>

      <div className="navbar-links">
        {navigation.map((item) => (
          <button
            key={item.href}
            className="navbar-link"
            onClick={() => navigate(item.href)}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}