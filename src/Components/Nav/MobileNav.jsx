import React from "react";
import { FaTimes, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

export default function MobileNav({ open, onClose, profilePic, name, navItems }) {
  return (
    <div className={`fixed inset-0 z-50 bg-black/30 flex flex-col md:hidden transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <div className="bg-white/70 dark:bg-[#18181b] rounded-2xl shadow-xl m-2 mt-4 p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="font-bold text-lg">{name}</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#232329]">
            <FaTimes size={22} />
          </button>
        </div>
        <hr className="border-gray-300 dark:border-gray-700" />
        <div className="bg-white dark:bg-[#18181b] rounded-2xl p-4 flex flex-col gap-4 shadow">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.link}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-200 text-lg px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232329]"
                onClick={e => {
                  e.preventDefault();
                  onClose();
                  document.getElementById(item.link.slice(1))?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Icon /> {item.name}
              </a>
            );
          })}
          <div className="flex gap-2 items-center mt-2">
            <ThemeToggle />
            <button
              className="flex-1 flex items-center justify-center bg-black text-white rounded-full py-2"
              onClick={() => {
                onClose();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <FaEnvelope size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}