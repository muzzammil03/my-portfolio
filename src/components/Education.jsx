import React from 'react';
import educationData from '../Files/educationData';
import { motion } from "framer-motion";
function Education() {
  return (<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="...your hero classes"
>
    <div className="py-16 px-4 text-center mb-4 mx-4 sm:mx-8 md:mx-12">
      {/* Education Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 pb-2">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
  key={index}
 className="bg-white dark:bg-[#2f2f2f] p-6 rounded-xl 
           shadow-[0_10px_25px_rgba(0,0,0,0.3)] 
           hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] 
           hover:scale-105 transition-all duration-300"
>
  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
    🎓 {edu.degree}
  </h3>
  <p className="text-gray-600 dark:text-gray-300">{edu.institute}</p>
  <p className="text-gray-500 dark:text-gray-400">{edu.duration}</p>
  {edu.grade && (
    <p className="text-gray-500 dark:text-gray-400 font-medium">
      Grade: {edu.grade}
    </p>
  )}
</div>

          ))}
        </div>
      </div>
      <div className="w-full h-[6px] bg-[#6c4ced] "></div>
    </div></motion.div>
  );
}

export default Education;
