import { useNavigate } from "react-router-dom";
import { useState } from "react";
import skills from "../Files/skills.js";
import Education from "../components/Education.jsx";
import Certificates from "../components/Certificates.jsx";
import { motion } from "framer-motion";
import { playSound } from "../utils/playSound";

const About = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleImageClick = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    playSound("/sounds/coin.wav");
    setTimeout(() => setIsSpinning(false), 1200);
  };

  const infoItems = [
    { label: "Role", value: "AI/ML Engineer, Data Analyst" },
    { label: "Experience", value: "AI/ML Training Experience" },
    { label: "Residence", value: "Bhopal, Madhya Pradesh, India" },
    { label: "Freelance", value: "None (Actively Seeking Opportunities)" },
    { label: "Languages", value: "English, Hindi, Urdu" },
    { label: "Mobile", value: "+91 8109418626" },
    { label: "Email", value: "muzzammil.cse3@gmail.com", full: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="transition-colors duration-500">
        {/* Heading */}
        <div className="mt-28 mb-4 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            My Personal <br /> Information
          </h2>
        </div>

        {/* About Section */}
        <section className="py-8 md:py-2 px-8 flex flex-col md:flex-row items-center justify-center">
          {/* Profile Image */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 flex items-center justify-center">
            <div className="absolute w-[120%] h-[120%] rounded-full border-[14px] border-[#6c4ced]" />
            <div
              className={`absolute w-[80%] h-[80%] rounded-full border-[14px] border-[#6c4ced] flex items-center justify-center overflow-hidden ${
                isSpinning ? "animate-spin-fast" : ""
              }`}
            >
              <img
                onClick={handleImageClick}
                src="/images/profile.png"
                alt="Muzzammil Ahmed"
                className="w-full h-full object-cover rounded-full cursor-pointer"
              />
            </div>
            <style>{`
              @keyframes spin-fast {
                0% { transform: rotateY(0deg); }
                100% { transform: rotateY(720deg); }
              }
              .animate-spin-fast {
                animation: spin-fast 1.2s ease-out;
              }
            `}</style>
          </div>

          {/* Text Section */}
          <div className="mt-10 md:mt-0 md:ml-16 text-center md:text-left max-w-lg">
            <h3 className="text-3xl font-semibold mt-12">
              Muzzammil Ahmed
            </h3>
            <p className="text-lg text-[#6c4ced] font-semibold mt-1">
              AI/ML Engineer and Data Analyst
            </p>
            <p className="mt-4 leading-relaxed opacity-80">
              I am a Computer Science postgraduate with a strong interest in
              Artificial Intelligence, Machine Learning, and Data Analytics. I
              have hands-on experience with Python, SQL, Machine Learning,
              Data Analysis, and Power BI, along with a background in web
              development. I enjoy solving real-world problems through
              data-driven and intelligent solutions while continuously
              learning and exploring new technologies. 🚀
            </p>

            {/* Personal Info Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white dark:bg-[#1a1a2e] p-4 rounded-xl text-left
                             border-2 border-[#6c4ced]/40 dark:border-[#8b6cf5]/40
                             shadow-[0_6px_16px_rgba(108,76,237,0.08)]
                             dark:shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                             hover:border-[#6c4ced] dark:hover:border-[#8b6cf5]
                             hover:-translate-y-1
                             transition-all duration-300
                             ${item.full ? "sm:col-span-2" : ""}`}
                >
                  <p className="text-xs uppercase tracking-wide text-[#6c4ced] font-bold mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[#101010] dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="mt-8 px-6 py-3 bg-[#6c4ced] text-white font-semibold rounded-lg hover:scale-105 hover:shadow-[0_8px_20px_rgba(108,76,237,0.35)] transition-all duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <div className="px-4 mt-16 mb-14">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-center">
              My Skills
            </h3>
            <p className="text-center opacity-70 mb-8">
              Technologies I work with
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl
                             bg-white dark:bg-[#1a1a2e]
                             border-2 border-[#6c4ced]/40 dark:border-[#8b6cf5]/40
                             shadow-[0_6px_16px_rgba(108,76,237,0.08)]
                             dark:shadow-[0_6px_16px_rgba(0,0,0,0.35)]
                             hover:border-[#6c4ced] dark:hover:border-[#8b6cf5]
                             hover:-translate-y-1
                             transition-all duration-300"
                >
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm md:text-base font-bold text-center text-[#101010] dark:text-white">
                    {skill.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[92%] mx-auto h-[6px] rounded-full bg-[#6c4ced]" />

        {/* Education & Certificates */}
        <Education />
        <Certificates />
      </div>
    </motion.div>
  );
};

export default About;
