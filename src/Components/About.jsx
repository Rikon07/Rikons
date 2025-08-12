import React from "react";
import { motion } from "framer-motion";

const coderData = {
  name: 'Md. Mahedi Hasan <Rikon/>',
  role: 'Web Developer | Competitive Programmer',
  location: 'Dhaka, Bangladesh',
  about: `Hi! I’m a passionate developer who loves coding and solving problems. My journey began with curiosity about how websites work, leading me to explore HTML, CSS, JavaScript, and beyond. I’m currently focused on full-stack development, especially React, Node.js, and databases.
I enjoy building creative, user-friendly apps and tackling challenging projects—whether it’s front-end design or back-end logic. I believe in continuous learning and enjoy collaborating to push the boundaries of what’s possible in tech. Let’s build something amazing together!`,
  languages: ['English', 'Bangla'],
  quickLearner: true,
  problemSolver: true,
  contact: {
    Email: "mh13mahedi@gmail.com",
    Whatsapp: "01630431986"
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const CoderProfileCard = () => {
  return (
    <motion.div
    id = 'about'
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="w-full max-w-5xl mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-gray-900 dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg overflow-hidden hover:shadow-3xl transition-shadow duration-300"
    >
      {/* Animated gradient lines */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-sky-400 animate-pulse"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-sky-400 to-transparent animate-pulse"></div>
      </div>

      {/* Top bar */}
      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-gray-900">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">Profile.js</div>
      </div>

      {/* Code block */}
      <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
        {/* Blurred background blobs */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          {/* Line numbers */}
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs select-none opacity-70">
            {Array.from({ length: 18 }, (_, i) => (
              <div key={i} className="leading-relaxed">{i + 1}</div>
            ))}
          </div>

          {/* Code content */}
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500 dark:text-pink-400">const</span>
              <span className="mr-2 text-blue-500 dark:text-blue-400">Profile</span>
              <span className="mr-2 text-pink-500 dark:text-pink-400">=</span>
              <span className="text-zinc-600 dark:text-gray-400">{'{'}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">name:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.name}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">role:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.role}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">location:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.location}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">about:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-amber-700 dark:text-amber-400 whitespace-pre-line">{coderData.about}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">languages:</span>
              <span className="text-zinc-600 dark:text-gray-400">{'['}</span>
              {coderData.languages.map((lang, idx) => (
                <span key={lang} className="text-cyan-600 dark:text-cyan-400">
                  &#39;{lang}&#39;{idx < coderData.languages.length - 1 && <span className="text-zinc-600 dark:text-gray-400">, </span>}
                </span>
              ))}
              <span className="text-zinc-600 dark:text-gray-400">{'],'}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">quickLearner:</span>
              <span className={`ml-1 font-bold ${coderData.quickLearner ? "text-green-500" : "text-red-500"}`}>
                {coderData.quickLearner ? "true" : "false"}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">problemSolver:</span>
              <span className={`ml-1 font-bold ${coderData.problemSolver ? "text-green-500" : "text-red-500"}`}>
                {coderData.problemSolver ? "true" : "false"}
              </span>
              <span className="text-zinc-600 dark:text-gray-400">,</span>
            </div>
            {/* Contact */}
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">contact:</span>
              <span className="text-zinc-600 dark:text-gray-400">{'{'}</span>
              <div className="pl-6">
                <span className="text-zinc-800 dark:text-white">Email:</span>
                <span className="text-cyan-600 dark:text-cyan-400">"{coderData.contact.Email}"</span>
                <span className="text-zinc-600 dark:text-gray-400">,</span>
                <br />
                <span className="text-zinc-800 dark:text-white">Whatsapp:</span>
                <span className="text-cyan-600 dark:text-cyan-400">"{coderData.contact.Whatsapp}"</span>
              </div>
              <span className="text-zinc-600 dark:text-gray-400">{'}'}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-gray-400">{'};'}</span>
            </div>
          </code>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-xs text-zinc-600 dark:text-gray-500 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 18, Col 2</span>
      </div>
    </motion.div>
  );
};

export default CoderProfileCard;