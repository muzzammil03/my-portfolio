import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6c4ced] text-white py-12 font-syne mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col gap-10">

        {/* First Row: Name + Links + Email */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
          
          <h1 className="text-2xl font-extrabold hover:scale-95 transition duration-300 cursor-default">
            Muzzammil
          </h1>

          <ul className="flex flex-wrap gap-6 justify-center md:justify-start font-medium items-center">
            {["About", "Projects", "Contact"].map((label, i) => (
              <li key={i} className="relative group">
                <a
                  href={`/${label.replace(" ", "")}`}
                  className="transition-colors duration-300"
                >
                  {label}
                </a>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:muzzammilahmad62435@gmail.com"
            className="text-sm hover:underline"
          >
            muzzammilahmad62435@gmail.com
          </a>
        </div>

        {/* Second Row: Phone + Icons */}
        <div className="flex flex-col md:items-end text-center md:text-right gap-3">
          <a href="tel:+918109418626" className="text-sm hover:underline">
            +91 81094 18626
          </a>

          <div className="flex justify-center md:justify-end gap-4 text-2xl mt-2">
            <a
              href="https://www.linkedin.com/in/muzzammilahmed03/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/muzzammil03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 hover:scale-110 transition duration-300"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.behance.net/muzzammilahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 hover:scale-110 transition duration-300"
            >
              <FaBehanceSquare />
            </a>
          </div>
        </div>

        {/* Footer End Line */}
        <div className="text-sm text-center mt-4 text-gray-200">
          © {currentYear} Muzzammil Ahmed. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
