import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import SocialMediaDock from "./SocialMediaDoc";
import pp2 from "/public/profile-picture (2).png"
import TrueFocus from "../../TextAnims/TrueFocus/TrueFocus";

const floatingTags = [
  { text: "() => {}", className: "text-blue-400", style: { top: "20%", left: "33%" }, delay: 0 },
  { text: "{}", className: "text-indigo-300", style: { top: "50%", left: "10%" }, delay: 0.2 },
  { text: "()", className: "text-cyan-400", style: { top: "35%", right: "10%" }, delay: 0.4 },
  { text: "</>", className: "text-sky-400", style: { bottom: "7%", left: "42%" }, delay: 0.6 },
  // { text: "</>", className: "text-blue-300", style: { bottom: "22%", right: "18%" }, delay: 0.8 },
];

export default function Menu() {
  // For tilt effect
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <section id='menu' className="relative jetmono min-h-[90vh] flex flex-col items-center justify-center px-4 pt-22 md:pt-24">
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 mx-auto">
        {/* Profile Card */}
        <motion.div
          ref={cardRef}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y:-4 ,scale: 1.03, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
          className="relative w-60 h-72 md:w-72 md:h-86 lg:w-80 lg:h-96 flex flex-col items-center justify-end cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Card with blueish gradient border and glassy effect */}
          <motion.div
            className="relative w-full h-full rounded-2xl bg-gradient-to-tr from-blue-500 via-sky-400 to-indigo-400 p-[1px] shadow-xl"
            whileHover={{ boxShadow: "0 8px 32px 0 rgba(59,130,246,0.25)" }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col items-center justify-end">
              {/* Blurry Profile Image with Blue Overlay */}
              <div className="absolute inset-0 w-full h-full z-0">
                <img
                  src={pp2}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl filter blur-[0px] brightness-75"
                  draggable={false}
                />
                {/* Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/40 via-sky-400/30 to-indigo-400/40 rounded-2xl" />
              </div>

              {/* Floating tags */}
              {floatingTags.map(({ text, className, style, delay }, i) => (
                <motion.div
                  key={i}
                  className={`absolute text-2xl font-extrabold opacity-80 pointer-events-none select-none ${className}`}
                  style={style}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay,
                    ease: "easeInOut",
                  }}
                >
                  {text}
                </motion.div>
              ))}

              {/* Name & Profession glassy overlay */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] mt-2 md:mt-4 px-4 py-2 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow text-center z-10">
                <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Rikon</h2>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Web Developer (MERN)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full flex flex-col items-center text-center"
        >
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 bg-clip-text text-transparent"
          >
            <span className="text-xl md:text-3xl lg:text-4xl">Hey, I’m</span><br/> Md. Mahedi Hasan
          </motion.h1>

          {/* <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A passionate Competitive Programmer & Web Developer; crafting modern, delightful, and scalable web experiences.
          </motion.p> */}
          <p className="mt-4 text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  A passionate{" "}
    <TrueFocus
sentence="WebDeveloper CompetitiveProgrammer;"
manualMode={false}
blurAmount={2}
borderColor="#29B8FF"
animationDuration={1}
pauseBetweenAnimations={1}
/>
<br/>
  {" "}crafting modern, delightful, and scalable web experiences.
</p>
        </motion.div>

        {/* Social Media Dock */}
        <SocialMediaDock />
      </div>
    </section>
  );
}
