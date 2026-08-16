import React from "react";
import certificatesData from "../Files/certificatesData";
import { motion } from "framer-motion";

function Certificates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4"
    >
      <div className="text-center mx-4 sm:mx-8 md:mx-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Certificates
        </h2>
        <p className="opacity-70 mb-10">
          Achievements & credentials
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert, id) => (
            <div
              key={id}
              className="group relative bg-white dark:bg-[#1a1a2e] p-4 rounded-2xl text-left
                         border-2 border-[#6c4ced]/40 dark:border-[#8b6cf5]/40
                         hover:border-[#6c4ced] dark:hover:border-[#8b6cf5]
                         shadow-[0_8px_20px_rgba(108,76,237,0.08)]
                         dark:shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                         hover:shadow-[0_12px_30px_rgba(108,76,237,0.25)]
                         dark:hover:shadow-[0_12px_30px_rgba(108,76,237,0.35)]
                         hover:-translate-y-2
                         transition-all duration-300"
            >
              <div className="absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-[#6c4ced] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Certificate Image — own purple frame inside the card */}
              <div
                onClick={() => window.open(cert.certificateLink, "_blank")}
                className="relative mb-4 rounded-xl overflow-hidden cursor-pointer
                           bg-gradient-to-br from-[#6c4ced]/10 to-[#6c4ced]/5
                           dark:from-[#6c4ced]/20 dark:to-[#6c4ced]/10
                           border-2 border-[#6c4ced]/40 dark:border-[#8b6cf5]/40
                           group-hover:border-[#6c4ced] dark:group-hover:border-[#8b6cf5]
                           transition-colors duration-300 p-3"
              >
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-3 rounded-lg bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    🔍 View Certificate
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <h3 className="text-xl font-bold text-[#101010] dark:text-white mb-1">
                🏅 {cert.name}
              </h3>
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                {cert.issuedBy}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Certificates;
