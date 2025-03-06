import { useState, useEffect } from 'react';
import { projectData } from "../constants";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    // Add fade-in animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative border-b border-neutral-900 pb-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative text-center mb-16">
          <h2 className="text-5xl font-thin tracking-tight inline-block">
            Projets
          </h2>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 border-t-2 border-l-2 border-amber-400/30 -rotate-45 hidden lg:block"></div>
        </div>

        <div className="space-y-16">
          {projectData.map((projet, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row gap-8 p-6 rounded-2xl transition-all duration-500 ${
                activeProject === index ? 'bg-neutral-800/40 shadow-lg' : 'hover:bg-neutral-900/40'
              }`}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Left column: Image */}
              <div className="w-full lg:w-2/5">
                <div className="relative overflow-hidden rounded-xl border border-neutral-700 aspect-video">
                  {/* Project image */}
                  {projet.image ? (
                    <img 
                      src={projet.image} 
                      alt={projet.theme} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
                      <span className="text-neutral-500 text-lg">Image du projet</span>
                    </div>
                  )}
                  
                  {/* Year badge */}
                  <div className="absolute top-4 left-4 bg-amber-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {projet.year}
                  </div>
                </div>
              </div>
              
              {/* Right column: Content */}
              <div className="w-full lg:w-3/5">
                <h3 className="text-2xl font-medium mb-4 text-white tracking-wide">
                  {projet.theme}
                </h3>
                
                <p className="text-neutral-300 leading-relaxed mb-6">
                  {projet.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {projet.technologie.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-lg bg-neutral-800 text-amber-400 text-sm font-medium border border-amber-400/20 hover:bg-amber-400/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {projet.link && (
                  <div className="mt-6">
                    <a 
                      href={projet.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Voir le projet</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l10-10M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;