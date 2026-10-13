import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = ({ isDarkMode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`min-h-screen flex flex-col items-center justify-center px-4 text-center ${
          isDarkMode ? "bg-[#101010] text-white" : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-7xl sm:text-8xl font-bold text-[#6c4ced] mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          Page Not Found
        </h2>
        <p
          className={`mb-8 max-w-md ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Oops! The page you are looking for does not exist or may have been
          moved.
        </p>
        <Link
          to="/"
          className="bg-[#6c4ced] hover:bg-[#4b32a8] text-white px-6 py-3 rounded transition-all duration-300 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
