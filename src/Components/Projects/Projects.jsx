import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const techIcons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Tailwind: "https://www.svgrepo.com/show/374118/tailwind.svg",
  Javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Motion: "https://www.pngmart.com/files/23/Alight-Motion-Logo-PNG-HD.png",
  Mongo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Tanstack: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
  JWT: "https://cdn.simpleicons.org/jsonwebtokens/000000",
  Stripe: "https://cdn.iconscout.com/icon/free/png-256/free-stripe-2-498440.png?f=webp",
  Aos: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

const projects = [
  {
    name: "The DailyCommit",
    image: "https://i.ibb.co.com/bMBYqW82/The-Daily-Commit-Banner.png",
    live: "https://the-daily-commit-c5e84.web.app/",
    github: "https://github.com/Rikon07/The-DailyCommit",
    stack: ["React", "Tailwind", "Javascript", "Firebase", "Vercel", "Motion", "Mongo", "Express", "Nodejs", "Tanstack", "JWT", "Stripe"],
    description: "A modern, fullstack Computer Science news platform for developers, by developers.",
  },
  {
    name: "BooKitsu",
    image: "https://i.ibb.co.com/1Jp34ryC/Boo-Kitsu-Banner-Dark.png",
    live: "https://bookitsu-library-007.web.app/",
    github: "https://github.com/Rikon07/BooKitsu",
    stack: ["React", "Tailwind", "Javascript", "Firebase", "Vercel", "Mongo", "Express", "Nodejs", "JWT"],
    description: "BooKitsu is a beautifully crafted frontend for a modern school library management system.",
  },
  {
    name: "RykHub",
    image: "https://i.ibb.co.com/YTZpPB8y/Ryk-Hub-Banner-dark.png",
    live: "https://rykhub-007.web.app/",
    github: "https://github.com/Rikon07/RykHub",
    stack: ["React", "Tailwind", "Javascript", "Firebase", "Vercel", "Aos", "Mongo", "Express", "Nodejs"],
    description: "RykHub is a full-stack freelance task marketplace web app where users can post, bid on, and manage tasks.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, type: "spring", stiffness: 120, damping: 16 },
  }),
};

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="w-full jetmono max-w-6xl mx-auto py-6 px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100 jetmono"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Recent Projects
      </motion.h2>
      <div className="flex flex-col gap-4">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <motion.div
              key={project.name}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-12 bg-white/10 dark:bg-gray-900/60 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-4 md:p-6 transition-all duration-300 group hover:shadow-2xl ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image (tilted card, clickable) */}
              <motion.div
                className="relative w-full md:w-2/5 flex-shrink-0 flex items-center justify-center"
                whileHover={{ rotate: isEven ? 6 : -6, scale: 1.04, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.15)" }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 object-cover w-full h-48 md:h-56"
                    style={{ background: "#fff" }}
                  />
                  {/* Floating live link icon */}
                  <span className="absolute top-3 right-3 z-10">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 text-white shadow-lg hover:scale-110 transition"
                      title="Live Project"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </span>
                </a>
              </motion.div>

              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-200">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/80 dark:bg-gray-800/80 shadow border border-gray-200 dark:border-gray-700"
                      title={tech}
                    >
                      <img
                        src={techIcons[tech]}
                        alt={tech}
                        className={`w-6 h-6 ${tech === "Express" ? "invert dark:invert-0" : ""}`}
                      />
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => setSelected(project)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 text-white font-semibold hover:scale-105 transition text-sm md:text-base" 
                  >
                    Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:scale-105 transition"
                  >
                    <FaGithub /> 
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* You can add a modal for details here if you want */}
    </section>
  );
}