import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaBehanceSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { playSound } from "../utils/playSound";
const Hero = ({ isDarkMode }) => {
  const fullName = "Muzzammil Ahmed";
  const [displayedText, setDisplayedText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [spin, setSpin] = React.useState(false); // 🔁 Spin state

  React.useEffect(() => {
  let timeout;

  if (index < fullName.length) {
    // Sound play with shorter duration (optional stop logic below)
    const audio = new Audio("/sounds/typing.mp3");
    audio.play();

    // Automatically stop sound early (200ms)
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 200); // stop before next character

    timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + fullName[index]);
      setIndex(index + 1);
    }, 300);
  }

  return () => clearTimeout(timeout);
}, [index]);


  const handleDownloadClick = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const handleImageClick = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 1200);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="...your hero classes"
      >
        <div
          className={`relative min-h-screen flex flex-col md:flex-col lg:flex-row items-center justify-center px-8 overflow-hidden ${
            isDarkMode ? "bg-[#101010] text-white" : "bg-white text-[#101010]"
          }`}
        >
          <div className="block lg:hidden w-full h-[230px] bg-[#6c4ced] absolute top-0 left-0 z-[1]" />
          <div className="hidden lg:block absolute top-0 left-0 w-1/3 h-full bg-[#6c4ced] z-[9]" />
          <div className="mt-12 lg:mt-0">
            <div
              className={`relative w-64 h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 flex items-center rounded-full justify-center z-10 ${
                isDarkMode ? "bg-[#2d2d2e]" : "bg-white"
              } mt-10 md:mt-10 lg:mt-0`}
            >
              <div className="absolute w-[110%] h-[110%]  md:w-[110%] md:h-[110%] lg:w-[120%] lg:h-[120%] rounded-full border-[16px]  border-[#6c4ced]">
                <div
                  className={`relative w-full h-full rounded-full p-8 overflow-hidden flex items-center justify-center ${
                    isDarkMode ? "bg-[#101010]" : "bg-white"
                  }`}
                >
                  <img
                    onClick={() => {
                      handleImageClick(); 
                      playSound("/sounds/coin.wav");
                    }}
                    className={`select-none w-[90%] h-[90%] object-cover rounded-full border-16 border-[#6c4ced] transition-transform duration-700 ${
                      spin ? "animate-spin-fast" : ""
                    }`}
                    src="/images/profile.jpg"
                    alt="Muzzammil Ahmed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-center lg:text-left ml-0 lg:ml-12 space-y-3 z-10 mb-0 mt-8 md:mt-8 lg:mt-0">
            <h1
              className="text-5xl font-bold inline-block"
              style={{ color: isDarkMode ? "white" : "black" }}
            >
              {displayedText}
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.2em",
                  backgroundColor: isDarkMode ? "white" : "black",
                  marginLeft: "5px",
                  animation: "blink 1s step-start infinite",
                  verticalAlign: "bottom",
                }}
              />
            </h1>

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

            <h2
              className={`text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Web Developer & Data Analyst
            </h2>

            <div>
              <a
                href="/Muzzammil_CV.pdf"
                download
                onClick={() => {handleDownloadClick; playSound("/sounds/popup.mp3")}} 
                className={`ml-auto transition-transform duration-300 px-4 py-3 mt-5 inline-block text-white ${
                  isDownloading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#6c4ced] hover:scale-105"
                }`}
              >
                {isDownloading ? "Downloading..." : "Download CV"}
              </a>

              <div className="flex justify-center md:justify-center lg:justify-start gap-6 text-3xl mt-12 md:mt-6 lg:mt-5 mb-12">
                <a
                  href="https://www.linkedin.com/in/muzzammilahmed03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/muzzammil03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://www.behance.net/muzzammilahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaBehanceSquare />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[6px] bg-[#6c4ced]" />
      </motion.div>
    </>
  );
};

export default Hero;
