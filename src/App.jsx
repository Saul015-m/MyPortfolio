import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

// Composant pour les séparateurs entre sections
const SectionDivider = ({ light }) => {
  return (
    <div className="flex justify-center my-12 md:my-24 w-full overflow-hidden">
      <div className={`w-4/5 relative h-px ${light ? "bg-amber-300/20" : "bg-neutral-800"}`}>
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            light ? "bg-amber-400" : "bg-neutral-700"
          } h-2 w-2 rounded-full`}
        />
        <div 
          className={`absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2 ${
            light ? "bg-amber-400/50" : "bg-neutral-700/70"
          } h-1 w-1 rounded-full`}
        />
        <div 
          className={`absolute left-2/3 transform -translate-x-1/2 -translate-y-1/2 ${
            light ? "bg-amber-400/50" : "bg-neutral-700/70"
          } h-1 w-1 rounded-full`}
        />
      </div>
    </div>
  );
};

// Composant pour animer l'apparition des sections
const AnimatedSection = ({ children, id, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ajouter un délai avant de définir isVisible à true
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentElement = document.getElementById(id);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [id, delay]);

  return (
    <section 
      id={id} 
      className={`transform transition-all duration-1000 ease-out ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </section>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simuler un petit délai initial pour l'animation de chargement
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden text-neutral-300 antialiased selection:bg-amber-500/20 selection:text-amber-100 min-h-screen">
      {/* Background avec animation subtile */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="galaxy-stars absolute inset-0"></div>
        </div>
      </div>

      {/* Overlay de chargement initial */}
      <div 
        className={`fixed inset-0 bg-neutral-950 z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-amber-400 flex items-center">
          <span className="h-3 w-3 bg-amber-400 rounded-full animate-bounce"></span>
          <span className="h-3 w-3 bg-amber-400 rounded-full animate-bounce mx-2" style={{ animationDelay: "0.2s" }}></span>
          <span className="h-3 w-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
        </div>
      </div>

      {/* Contenu principal */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        
        <AnimatedSection id="hero-section" delay={200}>
          <Hero />
        </AnimatedSection>
        
        <SectionDivider light={true} />
        
        <AnimatedSection id="about-section" delay={300}>
          <About />
        </AnimatedSection>
        
        <SectionDivider />
        
        <AnimatedSection id="technologies-section" delay={400}>
          <Technologies />
        </AnimatedSection>
        
        <SectionDivider light={true} />
        
        <AnimatedSection id="experience-section" delay={500}>
          <Experience />
        </AnimatedSection>
        
        <SectionDivider />
        
        <AnimatedSection id="contact-section" delay={600}>
          <Contact />
        </AnimatedSection>
        
        {/* Footer simple */}
        <footer className="text-center py-8 text-sm text-neutral-500 mt-12">
          <p>© {new Date().getFullYear()} - Tous droits réservés</p>
        </footer>
      </div>
      
      {/* Styles CSS pour les animations d'arrière-plan */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .galaxy-stars {
          background-image: 
            radial-gradient(1px 1px at 25px 5px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1px 1px at 50px 25px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1px 1px at 125px 20px, white, rgba(255, 255, 255, 0)),
            radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2px 2px at 15px 125px, white, rgba(255, 255, 255, 0)),
            radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255, 255, 255, 0));
          background-repeat: repeat;
          background-size: 200px 200px;
          opacity: 0.3;
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}