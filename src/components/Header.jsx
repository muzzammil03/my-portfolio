import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import { playSound } from "../utils/playSound";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();
  const names = ["Portfolio", "Muzzammil", "मुज़म्मिल", "مزمل", "ムッザミル", "Муззаммил"];
const [nameIndex, setNameIndex] = useState(0);

const handleNameClick = () => {
  setNameIndex((prev) => (prev + 1) % names.length);
  playSound("/sounds/click.wav");
};
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const img = document.getElementById("hero-image");
      if (img && window.innerWidth < 768) {
        if (window.scrollY === 0) {
          img.style.zIndex = "0"; // bring image behind
        } else {
          img.style.zIndex = "-10"; // send image far behind
        }
      }
    };

    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);
    onScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isHome = location.pathname === "/";
  const isTop = !isScrolled;

  let headerBg = "bg-transparent text-[#101010] z-[10]";
  if (isScrolled || !isHome) {
  headerBg = isDarkMode
    ? "bg-[#101010] text-white shadow-[0_8px_20px_rgba(0,0,0,0.2)] z-[50]"
    : "bg-white text-[#101010] shadow-[0_8px_20px_rgba(0,0,0,0.2)] z-[50]";
} else {
  headerBg = isDarkMode
    ? "bg-[#10101080] text-white z-[50]"
    : "bg-transparent text-[#101010] z-[50]";
}


  const portfolioColor =
    isHome && isTop
      ? "text-white"
      : isDarkMode
      ? "text-white"
      : "text-[#101010]";
  const iconColor =
    isHome && isTop && screenWidth < 1024
      ? "text-white"
      : isDarkMode
      ? "text-white"
      : "text-[#101010]";

  return (
    <header
      className={`font-syne p-4 flex justify-between items-center md:px-8 md:py-4 fixed top-0 left-0 w-full transition-all duration-300 ${headerBg}`}
    >
     <h1
  onClick={handleNameClick}
  className={`select-none text-2xl font-bold ml-6 hover:scale-125 transition-transform duration-300 cursor-pointer ${portfolioColor}`}
>
  {names[nameIndex]}
</h1>

      <nav className="p-4 z-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full ml-auto ">
         <ul className="select-none hidden md:flex space-x-6 text-lg font-semibold mx-auto">
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ].map((link, index) => (
    <li key={index} className="relative group">
      <Link
        to={link.path}
        className={`transition-colors duration-300 ${
          location.pathname === link.path
            ? "text-[#6c4ced]"
            : isDarkMode
            ? "text-white"
            : "text-[#101010]"
        }`}
      >
        {link.name}
        {/* Animated underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
            location.pathname === link.path ? "scale-x-100 bg-[#6c4ced]" : "bg-[#6c4ced]"
          }`}
        />
      </Link>
    </li>
  ))}
  <li className="ml-auto hover:scale-105 transition-transform duration-300">
    <Link to="/contact" className="bg-[#6c4ced] text-white px-4 py-3">
      Contact Me
    </Link>
  </li>
</ul>
          <button
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              playSound("/sounds/click.wav");
            }}
            className={`text-2xl px-4 ${iconColor}`}
          >
            {isDarkMode ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${iconColor}`}
          >
            <RiAppsLine className="text-2xl cursor-pointer" />
          </button>

          {isOpen && (
            <ul
              className={`md:hidden flex flex-col items-center fixed top-0 left-0 w-full h-full font-syne z-[100] pt-10 transition-colors duration-300 ${
                isDarkMode
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#2d2d2e]"
              }`}
            >
              <button
                onClick={() => setIsOpen(false)}
                className={`absolute top-4 right-4 text-3xl ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <IoMdClose
                  className={`cursor-pointer ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                />
              </button>

              <li
                className={`w-full text-center py-3 border-b ${
                  isDarkMode ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <Link
                  to="/"
                  className="block hover:text-[#6c4ced]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li
                className={`w-full text-center py-3 border-b ${
                  isDarkMode ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <Link
                  to="/about"
                  className="block hover:text-[#6c4ced]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li
                className={`w-full text-center py-3 border-b ${
                  isDarkMode ? "border-gray-600" : "border-gray-200"
                }`}
              >
                <Link
                  to="/projects"
                  className="block hover:text-[#6c4ced]"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="w-full text-center pt-6 pb-12 border-b shadow-xl border-gray-200 dark:border-gray-600">
                <Link
                  to="/contact"
                  className="bg-[#6c4ced] text-white px-6 py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
