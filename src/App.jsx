import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetails";
import ProjectSection from "./routes/Projects";
import NotFound from "./routes/NotFound";
import projects from "./Files/projectList";

const SITE_NAME = "Muzzammil Ahmed";

const pageMeta = {
  "/": {
    title: "Muzzammil Ahmed | AI/ML Engineer, Data Analyst & React Developer",
    description:
      "Portfolio of Muzzammil Ahmed, an AI/ML engineer, data analyst and React developer. Explore projects in machine learning, RAG chatbots, Power BI dashboards and web apps, and get in touch for freelance work.",
  },
  "/about": {
    title: `About Me | ${SITE_NAME}`,
    description:
      "Learn about Muzzammil Ahmed, his education, certificates and skills in AI/ML, data analytics and React web development.",
  },
  "/projects": {
    title: `Projects | ${SITE_NAME}`,
    description:
      "Browse projects by Muzzammil Ahmed: AI/ML apps, Power BI and Excel dashboards, data analysis case studies and React web apps.",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Need a developer or data analyst? Send a message to Muzzammil Ahmed to discuss your project.",
  },
};

const getMeta = (pathname) => {
  const path = pathname.replace(/\/+$/, "").toLowerCase() || "/";

  if (pageMeta[path]) return pageMeta[path];

  if (pathname.startsWith("/project/")) {
    const id = pathname.split("/")[2];
    const project = projects.find((p) => p.id === id);
    if (project) {
      return {
        title: `${project.title} | ${SITE_NAME}`,
        description: project.description.slice(0, 155),
      };
    }
  }

  return {
    title: `Page Not Found | ${SITE_NAME}`,
    description: "The page you are looking for does not exist.",
  };
};

function App() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return saved === "true";
    } else {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  // Listen to system theme changes if no user preference saved
  useEffect(() => {
    if (localStorage.getItem("darkMode") !== null) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Set a different title and description for every page
  useEffect(() => {
    const { title, description } = getMeta(location.pathname);
    document.title = title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute("content", description);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/About" element={<About isDarkMode={isDarkMode} />} />
        <Route
          path="/Projects"
          element={<ProjectSection isDarkMode={isDarkMode} />}
        />
        
        <Route
          path="/project/:id"
          element={<ProjectDetail isDarkMode={isDarkMode} />}
        />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        <Route path="*" element={<NotFound isDarkMode={isDarkMode} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
