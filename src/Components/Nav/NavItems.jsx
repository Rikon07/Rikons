import React from "react";
import { navItems } from "./navItems";

export default function NavItems({ isScrolled }) {
  return (
    <nav className="hidden md:flex gap-8 items-center">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.link}
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-black transition"
            onClick={e => {
              e.preventDefault();
              document.getElementById(item.link.slice(1))?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-lg"><Icon /></span>
            <span
              className={`transition-all duration-200
                ${isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
              `}
              style={{ transitionProperty: "opacity, width" }}
            >
              {item.name}
            </span>
          </a>
        );
      })}
    </nav>
  );
}