import { useState, useEffect } from 'react';
import profil from "../assets/projects/M-Saul-1.png";
import cv from "../assets/projects/CV-Mamy.pdf";
import { ArrowDownToLine, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add fade-in animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative border-b mt-40 border-neutral-900 pb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left column: Text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-col space-y-6">
              <div className="relative">
                <h1 className="text-6xl lg:text-8xl font-thin tracking-tight">
                  RABESON
                  <span className="block mt-2">Mamy</span>
                </h1>
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-400/30 hidden lg:block"></div>
              </div>

              <div className="relative">
                <span className="inline-block bg-gradient-to-r from-amber-50 via-amber-400 to-amber-50 bg-clip-text text-transparent text-3xl md:text-4xl tracking-tight font-light">
                  UI/UX Designer & Frontend Développeur
                </span>
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto lg:mx-0 mt-4"></div>
              </div>

              <p className="text-neutral-400 max-w-lg mx-auto lg:mx-0 mt-4">
                Créant des expériences numériques élégantes et fonctionnelles qui captivent et engagent les utilisateurs.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
                <a href={cv} download="CV-Mamy.pdf" className="group">
                  <button className="relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                    <ArrowDownToLine className="w-5 h-5" />
                    <span>Télécharger mon CV</span>
                    <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </a>

                <div className="flex gap-4 items-center ml-2">
                  <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-amber-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Profile image */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-80 lg:w-96 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl opacity-70"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl border border-neutral-800 shadow-xl shadow-amber-900/10">
                <img
                  src={profil}
                  alt="Rabeson Mamy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-amber-400/30 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;