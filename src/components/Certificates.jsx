import React from "react";
import certificatesData from "../Files/certificatesData";
import { motion } from "framer-motion";
function Certificates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="...your hero classes"
    >
      <div className="text-center mx-4 sm:mx-8 md:mx-12">
        <h2 className="text-3xl font-bold mb-12 pb-2">Certificates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificatesData, id) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-2 rounded-xl 
           shadow-[0_10px_25px_rgba(0,0,0,0.3)] 
           hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] 
           hover:scale-105 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="mb-4 flex justify-center">
                <img
                  src={certificatesData.image} // Certificate Image URL
                  alt={certificatesData.name}
                  className="w-full h-56 sm:h-64 p-1 pt-8 object-cover rounded-md"
                  // Adjust image size for small and medium screens
                />
              </div>

              {/* Certificate Name */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                🏅 {certificatesData.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {certificatesData.issuedBy}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {certificatesData.year}
              </p>

              {/* View More Button */}
              <button
                onClick={() =>
                  window.open(certificatesData.certificateLink, "_blank")
                }
                className="text-purple-600 hover:underline block mt-4"
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Certificates;
