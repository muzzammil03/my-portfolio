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
    setTimeout(() => setIsSpinning(false), 600); // same as spin duration
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="...your hero classes"
    >
      <div className="dark:bg-gray-900 dark:text-white transition-colors duration-500">
        {/* Heading */}
        <div className="mt-28 mb-4 flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            My Personal <br /> Information
          </h2>
        </div>

        {/* About Section */}
        <section className="py-8 md:py-2 px-8 flex flex-col md:flex-row items-center justify-center">
          {/* Profile Image */}
          <div
            className="relative w-60 h-60 md:w-72 md:h-72 flex items-center justify-center"
            onClick={handleImageClick}
          >
            <div className="absolute w-[120%] h-[120%] rounded-full border-[14px] border-[#6c4ced]"></div>
            <div
              className={`absolute w-[80%] h-[80%] rounded-full border-[14px] border-[#6c4ced] flex items-center justify-center  overflow-hidden ${
                isSpinning ? "animate-spin-fast" : ""
              }`}
            >
              <img
                onClick={() => {
                  handleImageClick();
                  playSound("/sounds/coin.wav");
                }}
                src="/images/profile.jpg"
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            @keyframes spin-fast {
              0% {
                transform: rotateY(0deg);
              }
              100% {
                transform: rotateY(720deg);
              }
            }
            .animate-spin-fast {
              animation: spin-fast 1.2s ease-out;
            }
          `}</style>
          </div>

          {/* Text Section */}
          <div className="mt-10 md:mt-0 md:ml-16 text-center md:text-left">
            <h3 className="text-3xl font-semibold mt-12">Muzzammil Ahmed</h3>
            <p className="text-lg">Web Developer and Data Analyst</p>
            <p className="mt-4 max-w-md">
              I am a passionate Web Developer with a strong foundation in MERN
              Stack and Data Analytics. I love creating interactive and
              user-friendly web applications while constantly exploring new
              technologies. With experience in React.js, JavaScript, and Power
              BI, I strive to build efficient and visually appealing digital
              solutions. 🚀
            </p>

            {/* Personal Info Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-m max-w-sm mx-auto md:mx-0 text-left">
              <div>
                <strong>Role:</strong> Web Developer, Data Analyst
              </div>
              <div>
                <strong>Experience:</strong> Fresher
              </div>
              <div>
                <strong>Residence:</strong> Bhopal, Madhya Pradesh, India
              </div>
              <div>
                <strong>Freelance:</strong> None (Actively Seeking
                Opportunities)
              </div>
              <div>
                <strong>Languages:</strong> English, Hindi, Urdu
              </div>
              <div>
                <strong>Email:</strong> muzzammilahmad62435@gmail.com
              </div>
              <div>
                <strong>Mobile:</strong> +91 8109418626
              </div>
            </div>

            <button
              className="mt-6 px-6 py-3 bg-[#6c4ced] text-white font-semibold hover:scale-105 transition-transform duration-300"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <div className="px-4 mt-12 mb-14">
          <div className=" dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {skills.map((skill, index) => (
                <img
                  key={index}
                  src={skill.src}
                  alt={skill.alt}
                  className="w-12 hover:scale-125 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[92%] mx-auto h-[6px] bg-[#6c4ced]"></div>

        {/* Education & Certificates */}
        <Education />
        <Certificates />
      </div>
    </motion.div>
  );
};

export default About;
