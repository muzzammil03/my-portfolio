import Hero from "./Hero";
import Contact from "./Contact";
import ServicesSection from "../components/ServicesSection";
import BackToTopButton from "../components/BottomToTopBtn";
import ProjectSection from "./Projects";
import Testimonials from "../components/Testimonials";
const Home = ({ isDarkMode }) => {

  return (
    <div >
      <Hero isDarkMode={isDarkMode} />
      <ProjectSection isDarkMode={isDarkMode} embedded />
      <ServicesSection isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} embedded />
      <BackToTopButton />
    </div>
  );
};



export default Home;
