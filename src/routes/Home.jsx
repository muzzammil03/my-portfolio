import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";
import ServicesSection from "../components/ServicesSection";
import BackToTopButton from "../components/BottomToTopBtn";
import ProjectSection from "./Projects";
const Home = ({ isDarkMode }) => {

  return (
    <div >
      <Hero isDarkMode={isDarkMode} />
      <ProjectSection isDarkMode={isDarkMode} />
      <ServicesSection isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <BackToTopButton />
    </div>
  );
};



export default Home;
