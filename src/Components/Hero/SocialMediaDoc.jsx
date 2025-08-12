import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

function DockIcon({ mouseX, href, children, label }) {
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
      className="flex aspect-square items-center justify-center rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
      style={{ width: width.get() }}
    >
      {children}
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
  ];

  return (
    <div className="flex flex-col items-center justify-end p-8">
      <div
        onMouseMove={e => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex h-[70px] items-center gap-3 rounded-3xl bg-white/70 dark:bg-black/40 px-4 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)"
        }}
      >
        {icons.map(icon => (
          <DockIcon key={icon.name} href={icon.href} mouseX={mouseX} label={icon.name}>
            {icon.icon}
          </DockIcon>
        ))}
      </div>
    </div>
  );
}