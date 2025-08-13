import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { SiCodeforces } from "react-icons/si";

function DockIcon({ mouseX, href, children, label, download }) {
  const ref = useRef(null);
  const defaultMouseX = useMotionValue(Infinity);
  const iconSize = 40;
  const iconMagnification = 64;
  const iconDistance = 150;
  const distance = useTransform(mouseX ?? defaultMouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });
  const widthSync = useTransform(distance, [-iconDistance, 0, iconDistance], [iconSize, iconMagnification, iconSize]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      ref={ref}
      download={download}
      data-tooltip-id={`dock-tooltip-${label}`}
      data-tooltip-content={label}
      className="flex aspect-square items-center justify-center rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 group"
      style={{ width: width.get(), minWidth: 40, minHeight: 40, position: "relative" }}
    >
      <motion.div
        whileHover={{
          scale: 1.15,
          boxShadow: "0 0 24px 4px #38BDF8, 0 0 0 2px #38BDF8",
          background: "rgba(56,189,248,0.08)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full h-full flex items-center justify-center rounded-2xl"
      >
        {children}
      </motion.div>
      <Tooltip
        id={`dock-tooltip-${label}`}
        place="top"
        effect="solid"
        className="!bg-[#38BDF8]/20 !text-[#0F172A] !rounded-lg !px-4 !py-2 !font-semibold"
      />
    </a>
  );
}

export default function SocialMediaDock() {
  const mouseX = useMotionValue(Infinity);
  const icons = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/Rik.on07/",
      icon: <FaFacebook className="h-full w-full p-2.5 text-blue-600" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/rik.on__/",
      icon: <FaInstagram className="h-full w-full p-2.5 text-pink-500" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Rikon07",
      icon: <FaGithub className="h-full w-full p-2.5 text-gray-800 dark:text-gray-200" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rikon07/",
      icon: <FaLinkedin className="h-full w-full p-2.5 text-blue-700" />,
    },
    {
      name: "Codeforces",
      href: "https://codeforces.com/profile/Rik_on",
      icon: <SiCodeforces className="h-full w-full p-2.5 text-orange-500" />,
    },
    {
      name: "Resume",
      href: "/Rik_Shelby_Resume.pdf", // Place your resume in public folder
      icon: <FaDownload className="h-full w-full p-2.5 text-[#38BDF8]" />,
      download: true,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, type: "spring" }}
      className="flex flex-col mb-6 md:mb-8 lg:mb-10 items-center justify-end"
    >
      <div
        onMouseMove={e => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-[70px] items-center gap-3 rounded-3xl bg-white/70 dark:bg-black/40 px-4 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)"
        }}
      >
        {icons.map(icon => (
          <DockIcon
            key={icon.name}
            href={icon.href}
            mouseX={mouseX}
            label={icon.name}
            download={icon.download}
          >
            {icon.icon}
          </DockIcon>
        ))}
      </div>
    </motion.div>
  );
}