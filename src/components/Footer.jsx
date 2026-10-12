import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaBehanceSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muzzammilahmed03/",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/muzzammil03",
    icon: <IoLogoGithub />,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/muzzammilahmad",
    icon: <FaBehanceSquare />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#6c4ced] text-white py-12 font-syne mt-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col gap-10">

        {/* First Row: Name + Links + Email */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">

          <p className="text-2xl font-extrabold hover:scale-95 transition duration-300 cursor-default">
            Muzzammil
          </p>

          <ul className="flex flex-wrap gap-6 justify-center md:justify-start font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group">
                <Link to={link.path} className="transition-colors duration-300">
                  {link.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:muzzammil.cse3@gmail.com"
            className="text-sm hover:underline"
          >
            muzzammil.cse3@gmail.com
          </a>
        </div>

        {/* Second Row: WhatsApp + Icons */}
        <div className="flex flex-col md:items-end text-center md:text-right gap-3">
          <a
            href="https://wa.me/918109418626?text=Hi%20Muzzammil%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center md:justify-end gap-2 text-sm hover:underline"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </a>

          <div className="flex justify-center md:justify-end gap-4 text-2xl mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:text-gray-200 hover:scale-110 transition duration-300"
              >
                {social.icon}
              </a>
            ))}
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
