import logo from "../assets/projects/logo.png";
import { FaLinkedin, FaFigma, FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Détecte le scroll pour ajouter des effets visuels
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Détecte la page active au chargement et au changement de route
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("/about")) setActiveLink("about");
    else if (path.includes("/projects")) setActiveLink("projects");
    else if (path.includes("/contact")) setActiveLink("contact");
    else setActiveLink("home");
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gray-900 shadow-md py-2" 
          : "bg-gray-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec animation au survol et accent de couleur */}
        <a 
          href="/" 
          className="flex items-center transform hover:scale-105 transition-transform duration-300"
          onClick={() => setActiveLink("home")}
        >
          <div className="h-12 w-12 bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center shadow-md mr-2 border-2   ">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          <span className="font-bold text-gradient-to-r from-gray-500 to-gray-600 text-xl hidden sm:block">Portfolio</span>
        </a>

        {/* Liens de navigation - Desktop */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <a 
              href="/about" 
              className={`text-gray-300 font-medium hover:text-amber-300 relative px-3 py-2 transition-colors duration-300 rounded-md ${
                activeLink === "about" ? "text-amber-300 bg-gray-700 border-b-2 border-amber-400" : ""
              }`}
              onClick={() => setActiveLink("about")}
            >
              Qui suis-je?
            </a>
          </li>
          <li>
            <a 
              href="/projects" 
              className={`text-gray-300 font-medium hover:text-amber-300 relative px-3 py-2 transition-colors duration-300 rounded-md ${
                activeLink === "projects" ? "text-amber-300 bg-gray-700 border-b-2 border-amber-400" : ""
              }`}
              onClick={() => setActiveLink("projects")}
            >
              Projets
            </a>
          </li>
          <li>
            <a 
              href="/contact" 
              className={`text-gray-300 font-medium hover:text-amber-300 relative px-3 py-2 transition-colors duration-300 rounded-md ${
                activeLink === "contact" ? "text-amber-300 bg-gray-700 border-b-2 border-amber-400" : ""
              }`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Liens sociaux - Desktop avec accent de couleur */}
        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href="https://www.linkedin.com/in/votreprofil/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-blue-900 border border-gray-600 hover:border-blue-700"
          >
            <FaLinkedin size={20} className="text-blue-300" />
          </a>
          <a 
            href="https://www.figma.com/@votreprofil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-purple-900 border border-gray-600 hover:border-purple-700"
          >
            <FaFigma size={20} className="text-purple-300" />
          </a>
          <a 
            href="https://github.com/votreprofil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-700 p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 hover:bg-gray-800 border border-gray-600 hover:border-gray-500"
          >
            <FaGithub size={20} className="text-gray-300" />
          </a>
        </div>

        {/* Bouton contact - Desktop */}
        <div className="hidden lg:block ml-4">
          <a 
            href="/contact"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-gray-900 font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setActiveLink("contact")}
          >
            Me contacter
          </a>
        </div>

        {/* Menu burger pour mobile - Design amélioré */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full focus:outline-none shadow-md border border-gray-600"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className="relative w-5 h-4 mr-4">
            <span className={`absolute h-0.5 w-5 bg-amber-400 transform transition-all duration-300 ${isOpen ? 'rotate-45 top-1.5' : 'top-0'}`}></span>
            <span className={`absolute h-0.5 w-5 bg-amber-400 top-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-5 bg-amber-400 transform transition-all duration-300 ${isOpen ? '-rotate-45 top-1.5' : 'top-3'}`}></span>
          </div>
        </button>
      </div>

      {/* Menu déroulant pour mobile - Design amélioré */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-800 shadow-lg rounded-b-xl mx-4 mt-2 p-2 border border-gray-700">
          <ul className="flex flex-col items-center py-2 space-y-2">
            <li className="w-full">
              <a 
                href="/about" 
                className={`block py-2 px-4 text-gray-300 font-medium hover:bg-gray-700 transition-colors duration-300 rounded-lg ${
                  activeLink === "about" ? "bg-gray-700 text-amber-300 border-l-4 border-amber-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("about");
                  closeMenu();
                }}
              >
                Qui suis-je?
              </a>
            </li>
            <li className="w-full">
              <a 
                href="/projects" 
                className={`block py-2 px-4 text-gray-300 font-medium hover:bg-gray-700 transition-colors duration-300 rounded-lg ${
                  activeLink === "projects" ? "bg-gray-700 text-amber-300 border-l-4 border-amber-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("projects");
                  closeMenu();
                }}
              >
                Projets
              </a>
            </li>
            <li className="w-full">
              <a 
                href="/contact" 
                className={`block py-2 px-4 text-gray-300 font-medium hover:bg-gray-700 transition-colors duration-300 rounded-lg ${
                  activeLink === "contact" ? "bg-gray-700 text-amber-300 border-l-4 border-amber-400" : ""
                }`}
                onClick={() => {
                  setActiveLink("contact");
                  closeMenu();
                }}
              >
                Contact
              </a>
            </li>
            
            {/* Bouton CTA pour mobile */}
            <li className="w-full pt-2">
              <a 
                href="/contact"
                className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-medium py-2 px-4 rounded-lg text-center shadow-md"
                onClick={() => {
                  setActiveLink("contact");
                  closeMenu();
                }}
              >
                Me contacter
              </a>
            </li>
            
            <li className="w-full pt-2">
              <div className="flex justify-center space-x-6 border-t border-gray-700 pt-4">
                <a 
                  href="https://www.linkedin.com/in/votreprofil/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 border border-gray-600"
                >
                  <FaLinkedin size={18} className="text-blue-300" />
                </a>
                <a 
                  href="https://www.figma.com/@votreprofil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 border border-gray-600"
                >
                  <FaFigma size={18} className="text-purple-300" />
                </a>
                <a 
                  href="https://github.com/votreprofil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-2 rounded-full shadow-md transform hover:scale-110 transition-all duration-300 border border-gray-600"
                >
                  <FaGithub size={18} className="text-gray-300" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;