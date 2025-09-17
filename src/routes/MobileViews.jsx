import React from "react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const MobileCard = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center sm:hidden">
      <div className="w-80 bg-white rounded-3xl overflow-hidden shadow-xl text-center relative">
        {/* Purple Top Bar */}
        <div className="bg-purple-600 h-24 relative">
          <div className="absolute top-3 left-4 text-white font-medium">Muzz</div>
          <div className="absolute top-3 right-4 text-white space-x-3">
            <span>🌙</span>
            <span>⚙️</span>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="-mt-12 flex justify-center">
          <img
            src="/profile.jpg" // <-- change this path to your actual profile image
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>

        {/* Name + Role */}
        <h2 className="text-xl font-semibold mt-4">Muzzammil Ahmed</h2>
        <p className="text-gray-500">Web & Visual Designer</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-4 text-xl text-gray-700">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
            <FaDribbble />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="/resume.pdf" // <-- change this to your actual CV path
          className="inline-block mb-6 bg-purple-600 text-white py-2 px-6 rounded-full font-medium hover:bg-purple-700"
          download
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default MobileCard;
