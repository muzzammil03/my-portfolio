import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import projects from "../Files/projectList";

const ProjectDetail = ({ isDarkMode }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 py-24 ${isDarkMode ? "bg-[#101010]" : "bg-gray-100"}`}>
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#6c4ced] mb-4">404</h2>
          <p className={`text-xl sm:text-2xl font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            Project Not Found
          </p>
          <p className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            Oops! The project you're looking for doesn’t exist.
          </p>
        </div>
      </div>
    );

  return (
    <div className={`max-w-5xl mx-auto px-4 py-24 sm:py-32 relative ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-gray-800"}`}>
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 text-[#6c4ced] hover:gap-4 transition-all duration-300 group"
      >
        <span className="text-2xl transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
        <span className="text-base font-semibold">Back to Projects</span>
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
      <h2 className={`text-lg sm:text-xl mb-6 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
        {project.category}
      </h2>

      <div className="rounded-lg overflow-hidden shadow-lg mb-6">
        <video
          src={project.videoSrc}
          className="w-full h-64 sm:h-96 object-cover"
        controls
       />
      </div>

      <p className={`mb-6 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        {project.description}
      </p>

      {/* 🌐 Links */}
      <div className="flex gap-4 flex-wrap mb-10">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6c4ced] hover:bg-purple-200 text-white px-4 py-2 rounded-md text-sm transition-all duration-300"
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
      </div>

      <div className="mt-10">
        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
          Tools and Tech used in this project:
        </h3>
        <div className="flex flex-wrap gap-4">
          {project.techIcons.map((tech, index) => (
            <span
              key={index}
              className={`text-xl px-4 py-2 rounded-lg ${isDarkMode ? "bg-[#2a2a2a] text-gray-200" : "bg-gray-200 text-gray-700"}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
