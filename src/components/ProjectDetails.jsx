import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../Files/projectList";

// Converts any YouTube link (youtu.be, watch?v=, embed) into an embed URL.
// Returns null if the link is empty or not a valid YouTube link.
const getEmbedUrl = (url) => {
  if (!url) return null;
  try {
    const u = new URL(url);
    let videoId = null;

    if (u.hostname.includes("youtu.be")) {
      videoId = u.pathname.slice(1);
    } else if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) {
        videoId = u.pathname.split("/embed/")[1];
      } else {
        videoId = u.searchParams.get("v");
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
};

const ScreenshotSlider = ({ images, title, isDarkMode }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="mb-10">
      <h3
        className={`text-lg font-semibold mb-3 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Screenshots
      </h3>

      <div
        className={`relative rounded-lg overflow-hidden shadow-lg flex items-center justify-center ${
          isDarkMode ? "bg-[#1c1c1c]" : "bg-gray-100"
        }`}
      >
        <img
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          className="w-full max-h-[480px] object-contain"
        />

        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#6c4ced] hover:bg-[#4b32a8] text-white w-10 h-10 rounded-full text-xl transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#6c4ced] hover:bg-[#4b32a8] text-white w-10 h-10 rounded-full text-xl transition-all duration-300"
            >
              →
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to screenshot ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 bg-[#6c4ced]"
                  : `w-2.5 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
            Oops! The project you&apos;re looking for doesn’t exist.
          </p>
        </div>
      </div>
    );

  const embedUrl = getEmbedUrl(project.videoSrc);
  const screenshots = Array.isArray(project.screenshots)
    ? project.screenshots.filter(Boolean)
    : [];
  const techIcons = project.techIcons || [];
  const sections = [
    { label: "Problem", text: project.problem },
    { label: "Solution", text: project.solution },
    { label: "Result", text: project.result },
  ].filter((section) => section.text);

  return (
    <div className={`max-w-5xl mx-auto px-4 py-24 sm:py-32 relative ${isDarkMode ? "bg-[#101010] text-white" : "bg-white text-gray-800"}`}>

      {/*Back Button */}
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

      {/* Video (only if a valid link is given) */}
      {embedUrl && (
        <div className="rounded-lg overflow-hidden shadow-lg mb-6">
          <iframe
            src={embedUrl}
            title={project.title}
            className="w-full h-64 sm:h-96"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <p className={`mb-8 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        {project.description}
      </p>

      {/* Problem / Solution / Result (only if added) */}
      {sections.length > 0 && (
        <div className="space-y-4 mb-10">
          {sections.map((section) => (
            <div
              key={section.label}
              className={`border-l-4 border-[#6c4ced] rounded-r-lg px-5 py-4 ${
                isDarkMode ? "bg-[#1c1c1c]" : "bg-gray-100"
              }`}
            >
              <h3 className="text-lg font-semibold text-[#6c4ced] mb-1">
                {section.label}
              </h3>
              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {section.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Screenshots (only if added) */}
      {screenshots.length > 0 && (
        <ScreenshotSlider
          key={project.id}
          images={screenshots}
          title={project.title}
          isDarkMode={isDarkMode}
        />
      )}

      {/* Links */}
      <div className="flex gap-4 flex-wrap mb-10">
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
      </div>

      {techIcons.length > 0 && (
        <div className="mt-10">
          <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Tools and Tech used in this project:
          </h3>
          <div className="flex flex-wrap gap-4">
            {techIcons.map((tech, index) => (
              <span
                key={index}
                className={`text-xl px-4 py-2 rounded-lg ${isDarkMode ? "bg-[#2a2a2a] text-gray-200" : "bg-gray-200 text-gray-700"}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
