import { useState, useEffect } from 'react';
import about1 from "../assets/projects/Questions.png";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add fade-in animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative border-b border-neutral-900 pb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left column: Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative mx-auto w-64 lg:w-80 aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-3xl opacity-70"></div>
              <div className="relative z-10 overflow-hidden rounded-2xl border border-neutral-800 shadow-xl shadow-amber-900/10">
                <img
                  src={about1}
                  alt="À propos de moi"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-400/30 hidden lg:block"></div>
            </div>
          </div>

          {/* Right column: Content */}
          <div className="w-full lg:w-3/5">
            <div className="relative mb-8">
              <h2 className="text-5xl font-thin tracking-tight">
                Qui suis-je?
              </h2>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-amber-400/30 hidden lg:block"></div>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-4"></div>
            </div>

            <div className="space-y-6 text-neutral-400">
              <p className="leading-relaxed">
                Étudiant en Master 1 en <span className="text-amber-400">Science des Données et de l'Intelligence Artificielle</span> à l'EMIT, je suis à la recherche d'un emploi.
              </p>
              
              <p className="leading-relaxed">
                Je propose mes compétences en <span className="text-amber-400">UI/UX design</span>, <span className="text-amber-400">React.js</span> et <span className="text-amber-400">Tailwindcss</span> pour créer des interfaces modernes et intuitives, tout en améliorant l'expérience utilisateur.
              </p>
              
              <p className="leading-relaxed">
                Mon expérience en communication au club <span className="text-neutral-300">EMIT'Orat</span> me permet de bien collaborer en équipe.
              </p>
            </div>
            
            <div className="mt-10">
              <button className="group relative overflow-hidden bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                <span>En savoir plus</span>
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;