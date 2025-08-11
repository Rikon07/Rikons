import React from "react";
import { motion } from "framer-motion";
import { User, Code2, BookOpen, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    icon: <User className="h-5 w-5" />,
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400"
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    label: "Skills",
    href: "/skills",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400"
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Projects",
    href: "/projects",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400"
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    label: "Education",
    href: "/education",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400"
  }
];

const MenuBar = ({ shrink }) => {
  const location = useLocation();

  return (
    <motion.nav
      className="p-1 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-lg border border-gray-200/80 dark:border-gray-800/80 shadow-lg dark:shadow-gray-900/20 relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <ul className="flex items-center gap-1 relative z-10">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <li key={item.label} className="relative">
              <Link
                to={item.href}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 group
                  ${isActive ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300" : "text-gray-600 dark:text-gray-300"}
                `}
                style={{
                  background: isActive ? item.gradient : "none",
                }}
              >
                <span className={`transition-colors duration-300 ${item.iconColor}`}>
                  {item.icon}
                </span>
                {/* Hide label if shrink */}
                <motion.span
                  className="font-medium origin-left"
                  animate={{
                    opacity: shrink ? 0 : 1,
                    width: shrink ? 0 : "auto",
                    marginLeft: shrink ? 0 : 8,
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default MenuBar;