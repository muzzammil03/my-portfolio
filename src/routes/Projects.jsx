import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../Files/projectList";
import { motion } from "framer-motion";
const categories = ["All", "Python Project", "Data Analyst", "Web App"];

const ProjectSection = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const buttonClass = "bg-[#6c4ced] text-white px-4 py-2 rounded-md text-sm hover:scale-105 hover:bg-[#4b32a8] transition-all duration-300";

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setVisibleCount(6); // Reset visible count on filter change
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="...your hero classes"
>
    <section
      className={`py-16 px-4 sm:px-6 mt-8 ${
        isDarkMode ? "bg-[#101010] text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-4 py-2 text-sm border transition-all duration-300 rounded ${
              selectedCategory === category
                ? "bg-[#6c4ced] text-white"
                : isDarkMode
                ? "bg-[#1c1c1c] text-gray-300 hover:bg-[#2a2a2a] border-gray-500"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleProjects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <div className="overflow-hidden rounded-lg ">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="mt-4 flex-grow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-500 dark:text-gray-400">{project.category}</p>
            </div>
            <div className="mt-auto flex justify-center gap-4 flex-wrap">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6c4ced] hover:bg-[#4b32a8] text-white px-4 py-2 rounded-md text-sm transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#6c4ced] hover:bg-[#4b32a8] text-white px-4 py-2 rounded-md text-sm transition-all duration-300"
                >
                  GitHub
                </a>
              )}
              <Link
                to={`/project/${project.id}`}
                className="group relative flex items-center justify-center gap-1 px-4 py-2 hover:bg-[#4b32a8] bg-[#6c4ced] text-white rounded transition-all duration-300 overflow-hidden hover:pr-8"
              >
                <span className="text-sm">View More</span>
                <span className="absolute right-3 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300 text-lg">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 text-sm bg-[#6c4ced] text-white rounded hover:bg-[#4b32a8] transition-all duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </section></motion.div>
  );
};

export default ProjectSection;
