import { motion } from "framer-motion";

// Skill data
const row1 = [
  { name: "C", color: "#00599C", icon: "https://icon.icepanel.io/Technology/svg/C.svg" },
  { name: "C++", color: "#00599C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
];
const row2 = [
  { name: "HTML5", color: "#e34c26", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", color: "#1572b6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", color: "#f7df1e", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", color: "#38bdf8", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "React", color: "#61dafb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  {name: "Motion", color: '#FFC0CB', icon: 'https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png'}
];

const row3 = [
  { name: "MongoDB", color: "#47A248", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Node.js", color: "#3c873a", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", color: "#000000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",  },
  { name: "JWT", color: "#4B0082", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
];

const row4 = [
  { name: "Git", color: "#f05032", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Studio", color: "#31A8FF", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" },
  { name: "CodeBlocks", color: "#F8DC3D", icon: "https://images.icon-icons.com/1508/PNG/512/codeblocks_104542.png" },
  { name: "Adobe Lightroom", color: "#31A8FF", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg/2101px-Adobe_Photoshop_Lightroom_CC_logo.svg.png" },
  { name: "Firebase", color: "#FFCA28", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Vercel", color: "#000000", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
};

function SkillIcon({ icon, name, color }) {
  return (
    <div className="group relative flex flex-col items-center">
      <motion.div
        className="rounded-xl bg-gray-200 dark:bg-white/10 shadow-lg p-1 md:p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-2xl"
        style={{
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
        //   filter: invert ? "invert(1)" : "none",
        }}
        whileHover={{
          boxShadow: `0 0 16px 2px ${color}55, 0 2px 8px 0 rgba(0,0,0,0.10)`,
          scale: 1.01,
        }}
      >
        <img
          src={icon}
          alt={name}
          className="w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 filter md:grayscale md:brightness-75 group-hover:filter-none transition-all duration-300"
          style={{
            // filter: invert
            //   ? "invert(1) grayscale(0) brightness(0.75)"
            //   : "grayscale(0) brightness(0.75)",
          }}
        />
      </motion.div>
      <motion.span
        className="mt-2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 text-white px-2 py-1 rounded-lg absolute top-7 md:top-13 lg:top-16 pointer-events-none shadow"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        {name}
      </motion.span>
    </div>
  );
}

export default function SkillsSection() {
  const renderRow = (skillsRow, idx) => (
    <motion.div
      key={idx}
      className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skillsRow.map((skill, i) => (
        <motion.div key={skill.name} variants={itemVariants}>
          <SkillIcon {...skill} />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.section
      id="skills"
      className="w-full max-w-7xl mx-auto jetmono py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 tracking-wide mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {/* Arrow function code block */}
      <div className=" rounded-xl p-4 md:p-6 mb-6 shadow-lg font-mono text-sm md:text-base text-left max-w-4xl mx-auto border border-gray-300 dark:border-gray-600">
        <span className="text-green-400">const</span>{" "}
        <span className="text-blue-400">mySkills</span>{" "}
        <span className="text-gray-800 dark:text-white">=</span>{" "}
        <span className="text-yellow-400">()</span>{" "}
        <span className="text-gray-800 dark:text-white">=&gt; {"{"}</span>
        <div className="pl-6 pt-2">
          {/* Skills rows */}
          <div className="flex flex-col gap-2">
            {renderRow(row1, 1)}
            {renderRow(row2, 2)}
            {renderRow(row3, 3)}
            {renderRow(row4, 4)}
          </div>
        </div>
        <span className="text-gray-800 dark:text-white">{"}"}</span>
      </div>
    </motion.section>
  );
}