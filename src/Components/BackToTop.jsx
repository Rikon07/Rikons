import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, y: 60, scale: 0.7 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.7 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-gradient-to-tr from-blue-500/70 to-sky-400/70 text-white shadow-lg hover:scale-110 hover:shadow-2xl transition-all"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-base lg:text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}