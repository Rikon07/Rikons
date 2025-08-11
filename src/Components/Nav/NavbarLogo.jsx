import React from "react";

export default function NavbarLogo({ isScrolled }) {
  return (
    <div className="flex items-center gap-2 transition-all duration-300">
      <img
        src="../../assets/profile-picture (1).png"
        alt="Profile"
        className="w-10 h-10 rounded-full border-2 border-white shadow"
      />
      <span
        className={`font-bold text-lg jetmono transition-all duration-300
          ${isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
        `}
        style={{ transitionProperty: "opacity, width" }}
      >
        Your Name
      </span>
    </div>
  );
}