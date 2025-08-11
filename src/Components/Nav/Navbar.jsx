import React, { useState, useEffect } from "react";
import { FaEnvelope, FaBars, FaUser, FaCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const PROFILE_PIC = "/public/profile-picture (1).png";
const NAME = "Mahedi Rikon";

const navItems = [
  { name: "About", link: "/about", icon: FaUser },
  { name: "Skills", link: "/skills", icon: FaCode },
  { name: "Projects", link: "/projects", icon: FaProjectDiagram },
  { name: "Education", link: "/education", icon: FaGraduationCap },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Glassy styles for both modes
  const glassy =
    "backdrop-blur-2xl transition-all duration-300";

  return (
    <>
      <nav
        className={` jetmono
          fixed top-0 left-0 w-full z-50 flex flex-col items-center
          ${isScrolled ? "py-2 bg-transparent" : "pt-4"}
          ${glassy}
        `}
        // style={{
        //   borderBottom: isScrolled ? "none" : "1px solid #cbd5e1",
        // }}
      >
        <div
          className={`
             flex items-center justify-between
            ${isScrolled
              ? "rounded-full px-6  shadow-lg w-full max-w-3xl"
              : "rounded-none px-3 md:px-6 lg:px-2 py-0 w-full max-w-6xl"}
            transition-all duration-300
          `}
          style={{
            boxShadow: isScrolled
              ? "0 8px 32px 0 rgba(31, 38, 135, 0.07)"
              : "none",
          }}
        >
          {/* Left: Profile */}
          <div className="flex items-center gap-2">
            <img
              src={PROFILE_PIC}
              alt="Profile"
              className={`rounded-full object-cover border-2 dark:border-white border-[#18181b] shadow
                ${isScrolled ? "w-8 h-8" : "w-9 h-9"}
                transition-all duration-300
              `}
            />
            <span
              className={`font-bold text-base md:text-lg transition-all duration-300
                ${isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}
              `}
              style={{ transitionProperty: "opacity, width" }}
            >
              {NAME}
            </span>
          </div>

          {/* Middle: Nav Items */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium hover:text-black dark:hover:text-white transition"
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

          {/* Right: Theme & Contact */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className="hidden w-8 h-8 md:flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaEnvelope size={20} />
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-[#18181b]/80 hover:bg-gray-100 dark:hover:bg-[#232329] transition"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
        {/* Underline */}
        {!isScrolled && (
          <hr className="w-[95vw] border-t border-gray-300 dark:border-gray-700 mt-4" />
        )}
      </nav>
      {/* Mobile Nav */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        profilePic={PROFILE_PIC}
        name={NAME}
        navItems={navItems}
      />
      {/* Spacer */}
      {/* <div className={isScrolled ? "h-16" : "h-20"} /> */}
    </>
  );
}