import { motion } from "framer-motion";

const educationData = [
  {
    degree: "SSC",
    group: "Science",
    institution: "Tejgaon Govt. High School",
    year: "2008-2018",
  },
  {
    degree: "HSC",
    group: "Science",
    institution: "Mohammadpur Govt. College",
    year: "2018-2021",
  },
  {
    degree: "BSc.",
    group: "Computer Science & Engineering",
    institution: "National University of Bangladesh (Tejgaon College)",
    year: "2023-",
  },
];

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function Education() {
  return (
    <section id="education" className="jetmono w-full max-w-6xl mx-auto py-16 px-4">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-pink-500 to-sky-400 rounded-full z-0"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ minHeight: 120 }}
        />
        <div className="flex flex-col gap-2 w-full z-10">
          {educationData.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={edu.degree + edu.institution} className="relative flex w-full items-center">
                {/* Dot on the timeline */}
                <span className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 flex items-center justify-center z-10 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-blue-500 via-pink-500 to-sky-400" />
                </span>
                {/* Card */}
                <motion.div
                  className={`
                    w-full md:w-1/2 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-gray-900/80 transition-transform duration-300 group-hover:scale-105
                    ${isLeft ? "ml-0 md:mr-auto md:pl-2 md:pr-8" : "mr-0 md:ml-auto md:pl-8 md:pr-0"}
                    mt-2
                  `}
                  custom={isLeft ? "left" : "right"}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 ">
                    {edu.degree}
                  </h3>
                  {edu.group && (
                    <span className="text-sm md:text-base text-pink-500 font-semibold block">
                      {edu.group}
                    </span>
                  )}
                  {edu.year && (
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 block">
                      {edu.year}
                    </span>
                  )}
                  <span className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-100">
                    {edu.institution}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}