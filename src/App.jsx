import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetails";
import ProjectSection from "./routes/Projects";

function App() {
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
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route
          path="/projects"
          element={<ProjectSection isDarkMode={isDarkMode} />}
        />
        <Route
          path="/project/:id"
          element={<ProjectDetail isDarkMode={isDarkMode} />}
        />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
