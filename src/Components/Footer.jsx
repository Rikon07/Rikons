import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/Rik.on07/",
    color: "hover:text-blue-600",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rik.on__/",
    color: "hover:text-pink-500",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/Rikon07",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/rikon07/",
    color: "hover:text-blue-700",
  },
];

export default function Footer() {
  return (
    <footer className="w-full  bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 py-6 mt-12">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="z-51 relative text-gray-700 dark:text-gray-100 text-center md:text-left">
          © {new Date().getFullYear()} Mahedi Rikon. All rights reserved.
        </div>
        <div className="flex gap-5 z-51 relative">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition ${social.color}`}
              aria-label="Social Link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}


