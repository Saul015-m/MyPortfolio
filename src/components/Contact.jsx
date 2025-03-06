import { useState, useEffect } from 'react';
import { Github, Mail, Phone, Figma, Linkedin } from "lucide-react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add fade-in animation on component mount
    setIsVisible(true);
  }, []);

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mamyrabeson015@gmail.com",
      link: "mailto:mamyrabeson015@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "034 83 035 44",
      link: "tel:+261348303544"
    },
    {
      icon: <Figma className="w-6 h-6" />,
      label: "Figma",
      value: "Profile Figma",
      link: "#"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "Github",
      value: "github.com/mamyrabeson",
      link: "#"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/mamyrabeson",
      link: "#"
    }
  ];

  return (
    <div className={`relative border-b border-neutral-900 pb-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative text-center mb-16">
          <h2 className="text-5xl font-thin tracking-tight inline-block">
            Contact
          </h2>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 border-t-2 border-l-2 border-amber-400/30 -rotate-45 hidden lg:block"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactItems.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target={item.link.startsWith('mailto') || item.link.startsWith('tel') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800/60 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-800 text-amber-400 group-hover:bg-amber-400/10 transition-colors">
                  {item.icon}
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm text-neutral-400">{item.label}</span>
                  <span className="text-white group-hover:text-amber-400 transition-colors">{item.value}</span>
                </div>
                
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                    <path d="M7 17l10-10M7 7h10v10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block p-px bg-gradient-to-r from-transparent via-amber-400 to-transparent">
              <button className="group relative overflow-hidden bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 px-10 rounded-lg transition-all duration-300 flex items-center gap-2 mx-auto">
                <span className="relative z-10">Télécharger mon CV</span>
                <div className="absolute inset-0 w-full h-full bg-amber-400/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;