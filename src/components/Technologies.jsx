import { useState, useEffect, useRef } from 'react';
import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import FigmaIcon from "../assets/projects/Figma-logo.svg";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";

function Technologies() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);
  const sectionRef = useRef(null);

  // Animation d'entrée décalée pour chaque technologie
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimateIn(true);
          }, 400);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const technologies = [
    {
      name: "React",
      icon: <RiReactjsLine className="text-6xl transition-all duration-500 animate-spin-slow" />,
      color: "text-cyan-400",
      borderColor: "border-cyan-400/20",
      bgGlow: "group-hover:shadow-cyan-500/20",
      description: "Bibliothèque JavaScript"
    },
    {
      name: "Figma",
      icon: <img src={FigmaIcon} alt="Figma logo" className="w-12 h-12 transition-all duration-500" />,
      color: "text-purple-400",
      borderColor: "border-purple-400/20",
      bgGlow: "group-hover:shadow-purple-500/20",
      description: "Outil de design"
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssLine className="text-6xl transition-all duration-500" />,
      color: "text-cyan-300",
      borderColor: "border-cyan-300/20",
      bgGlow: "group-hover:shadow-cyan-300/20",
      description: "Framework CSS"
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-6xl transition-all duration-500" />,
      color: "text-cyan-600",
      borderColor: "border-cyan-600/20",
      bgGlow: "group-hover:shadow-cyan-600/20",
      description: "Base de données"
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 className="text-6xl transition-all duration-500" />,
      color: "text-amber-400",
      borderColor: "border-amber-400/20",
      bgGlow: "group-hover:shadow-amber-400/20",
      description: "Langage de programmation"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className={`relative border-b border-neutral-900 pb-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Background avec particules */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Titre avec animation */}
        <div className="relative text-center mb-20">
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <h2 className="text-5xl font-thin tracking-tight inline-block">
              <span className="inline-block relative">
                T
                <span className="absolute -top-6 -right-2 text-amber-400 text-xl opacity-70">*</span>
              </span>
              <span className="inline-block">echnologies</span>
            </h2>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
          </div>
          <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 border-t-2 border-l-2 border-amber-400/30 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 rotate-[-45deg]' : 'opacity-0 rotate-0'
          } hidden lg:block`}></div>
        </div>

        {/* Grille de technologies avec animations */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name}
              className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-neutral-800 ${tech.borderColor} transition-all duration-500 ${tech.bgGlow} hover:shadow-lg backdrop-blur-sm bg-neutral-900/40 hover:bg-neutral-800/60 overflow-hidden transform ${
                animateIn ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background glow animation */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,${tech.color.includes('cyan') ? '#22d3ee20' : tech.color.includes('purple') ? '#a78bfa20' : '#fbbf2420'} 0%,transparent 70%)]`}></div>
              
              {/* Background lines */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-1500"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-white via-white to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1500 delay-100"></div>
              </div>
              
              {/* Icon animation */}
              <div className={`relative z-10 ${tech.color} transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-8px]`}>
                {tech.icon}
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-gradient-to-t from-white/10 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              
              {/* Text animation */}
              <div className="flex flex-col items-center mt-4 transform transition-all duration-500">
                <span className={`font-medium transform ${tech.color} transition-all duration-300 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  {tech.name}
                </span>
                
                <span className={`text-xs mt-1 text-white/60 transition-all duration-300 delay-100 max-w-[80px] text-center ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {tech.description}
                </span>
              </div>
              
              {/* Hover overlay */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-2xl pointer-events-none"></div>
              )}
              
              {/* Particle effect on hover */}
              {hoveredIndex === index && (
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <span className="absolute top-[10%] left-[10%] w-1 h-1 rounded-full bg-white/70 animate-ping"></span>
                  <span className="absolute top-[30%] right-[20%] w-1 h-1 rounded-full bg-white/70 animate-ping" style={{ animationDelay: '0.3s' }}></span>
                  <span className="absolute bottom-[20%] left-[30%] w-1 h-1 rounded-full bg-white/70 animate-ping" style={{ animationDelay: '0.5s' }}></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS pour les animations avancées */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: rotate 8s linear infinite;
        }
        
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particles:before,
        .particles:after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          animation: pulse 4s infinite alternate;
        }
        
        .particles:before {
          top: 20%;
          left: 20%;
          animation-delay: 1s;
        }
        
        .particles:after {
          bottom: 30%;
          right: 30%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default Technologies;