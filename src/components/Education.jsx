import React from 'react';
import educationData from '../Files/educationData';
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="transition-colors duration-500"
    >
      <div className="py-16 px-4 text-center mb-4 mx-4 sm:mx-8 md:mx-12">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Education
          </h2>

          <p className="opacity-70 mb-10">
            My academic journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-[#1a1a2e] p-6 rounded-2xl text-left
                           border-2 border-[#6c4ced]/40 dark:border-[#8b6cf5]/40
                           shadow-[0_8px_20px_rgba(108,76,237,0.08)]
                           dark:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                           hover:border-[#6c4ced] dark:hover:border-[#8b6cf5]
                           hover:shadow-[0_12px_30px_rgba(108,76,237,0.25)]
                           dark:hover:shadow-[0_12px_30px_rgba(108,76,237,0.35)]
                           hover:-translate-y-2
                           transition-all duration-300"
              >
                <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-[#6c4ced] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#6c4ced]/10 dark:bg-[#6c4ced]/20 mb-4 text-2xl">
                  🎓
                </div>

                <h3 className="text-xl font-bold text-[#101010] dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  {edu.institute}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {edu.duration}
                </p>

                {edu.grade && (
                  <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs font-bold
                                    bg-[#6c4ced]/10 text-[#6c4ced] dark:bg-[#6c4ced]/20 dark:text-[#a78cf7]">
                    Grade: {edu.grade}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[4px] rounded-full bg-[#6c4ced]" />
      </div>
    </motion.div>
  );
}

export default Education;
