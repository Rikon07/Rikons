// src/Pages/ProjectDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import  projects  from "../Components/Projects/projects";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);

  const [current, setCurrent] = useState(0);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-xl text-red-500">Project not found.</p>
      </div>
    );
  }

  const screenshots = project.screenshots || [project.image];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <section className="w-full max-w-3xl mx-auto py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-blue-500 hover:underline"
      >
        <FaChevronLeft /> Back
      </button>

      {/* Carousel */}
      <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={current}
            src={screenshots[current]}
            alt={`Screenshot ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        {screenshots.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full shadow hover:scale-110 transition"
            >
              <FaChevronRight />
            </button>
          </>
        )}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {screenshots.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${i === current ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"}`}
            />
          ))}
        </div>
      </div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400">{project.name}</h2>
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
        <div className="flex gap-4 mb-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 text-white font-semibold hover:scale-105 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:scale-105 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
        <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
      </motion.div>
    </section>
  );
}