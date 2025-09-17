import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // reduced for mobile
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-[9999] bg-white text-[#6c4ced] p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
      >
        <FaArrowUp className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
    )
  );
};

export default BackToTopButton;
