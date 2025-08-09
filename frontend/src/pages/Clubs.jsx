import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const clubList = [
  { 
    name: "ROBOTRONICS", 
    tagline: "AI & Robotics Collective", 
    description: "Advanced robotics and AI development for innovative solutions that shape tomorrow's automated world.",
    category: "Innovation", 
    icon: "🤖",
    color: "from-gray-800 to-gray-600"
  },
  { 
    name: "STAC", 
    tagline: "Space Technology & Astronomy", 
    description: "Exploring the cosmos through cutting-edge space technology and astronomical research initiatives.",
    category: "Exploration", 
    icon: "🚀",
    color: "from-gray-700 to-gray-500"
  },
  { 
    name: "SAE", 
    tagline: "Automotive Engineering", 
    description: "Building next-generation automotive solutions that revolutionize transportation systems globally.",
    category: "Engineering", 
    icon: "🏎️",
    color: "from-gray-800 to-gray-600"
  },
  { 
    name: "NIRMAAN", 
    tagline: "Civil Engineering Guild", 
    description: "Constructing sustainable infrastructure for tomorrow's urban landscapes and smart cities.",
    category: "Infrastructure", 
    icon: "🏗️",
    color: "from-gray-700 to-gray-500"
  },
  { 
    name: "KAMAND PROMPT", 
    tagline: "Computing Society", 
    description: "Innovative software solutions and collaborative coding that powers the digital transformation.",
    category: "Technology", 
    icon: "💻",
    color: "from-gray-800 to-gray-600"
  },
  { 
    name: "BIOENGINEERING", 
    tagline: "Biotech Innovators", 
    description: "Advancing healthcare through biotechnology innovation and medical engineering breakthroughs.",
    category: "Healthcare", 
    icon: "🧬",
    color: "from-gray-700 to-gray-500"
  }

  { 
    name: "Yantrik", 
    tagline: "Mechanical Engineering Society", 
    description: "Designing mechanical systems that drive efficiency and innovation in various industries.",
    category: "Engineering", 
    icon: "⚙️",
    color: "from-gray-700 to-gray-500"
  }
];

const Clubs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Full Spline Background - Updated z-index to stay behind navbar */}
      <div className="fixed inset-0 z-[-1]">
        <Spline
          scene="https://prod.spline.design/T07NQAEcYrP7jNbw/scene.splinecode" 
          className="w-full h-full"
        />
     
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]"></div>
      </div>
      
      {/* Main content container - Updated z-index */}
      <div className="relative z-[1]">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-white"
              data-animate
              id="hero-title"
              style={{
                transform: isVisible['hero-title'] ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible['hero-title'] ? 1 : 0,
                transition: 'all 0.8s ease-out'
              }}
            >
              We <span className="italic relative">
                transform
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
              </span>
              <br />
              students in the world's
              <br />
              <span className="italic">most innovative</span> clubs.
            </h1>
            
            <p 
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
              data-animate
              id="hero-subtitle"
              style={{
                transform: isVisible['hero-subtitle'] ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible['hero-subtitle'] ? 1 : 0,
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              A technical ecosystem for the innovators. The academic 
              excellence. The groundbreaking projects that keep the world 
              progressing.
            </p>
          </div>
        </section>

        {/* Clubs Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className="text-center mb-20"
              data-animate
              id="clubs-header"
              style={{
                transform: isVisible['clubs-header'] ? 'translateY(0)' : 'translateY(40px)',
                opacity: isVisible['clubs-header'] ? 1 : 0,
                transition: 'all 0.8s ease-out'
              }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 italic text-white">
                Technical Excellence
              </h2>
              <div className="w-24 h-0.5 bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-24">
              {clubList.map((club, index) => (
                <div 
                  key={club.name}
                  className="group"
                  data-animate
                  id={`club-${index}`}
                  style={{
                    transform: isVisible[`club-${index}`] ? 'translateY(0)' : 'translateY(60px)',
                    opacity: isVisible[`club-${index}`] ? 1 : 0,
                    transition: `all 0.8s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="relative bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
                    {/* Floating Number */}
                    <div className="absolute -top-6 -left-4 text-6xl font-light text-white/20 group-hover:text-white/30 transition-colors duration-500 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-6 pt-4">
                      {club.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="mb-4">
                        <span className="text-sm uppercase tracking-wider text-gray-300 font-medium">
                          {club.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-light mb-4 group-hover:italic transition-all duration-300 text-white">
                        {club.name}
                      </h3>
                      
                      <p className="text-gray-200 mb-6 leading-relaxed text-lg">
                        {club.tagline}
                      </p>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-8">
                        {club.description}
                      </p>
                      
                      <button className="inline-flex items-center text-sm uppercase tracking-wider text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Explore Club
                        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </button>
                    </div>
                    
                    {/* Subtle hover line */}
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom rounded-full"></div>
                    
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-12 bg-black/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
              data-animate
              id="stats"
              style={{
                transform: isVisible['stats'] ? 'translateY(0)' : 'translateY(40px)',
                opacity: isVisible['stats'] ? 1 : 0,
                transition: 'all 0.8s ease-out'
              }}
            >
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  07
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-300">
                  Technical Clubs
                </div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  200+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-300">
                  Active Members
                </div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-300">
                  Projects Launched
                </div>
              </div>
              
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  10+
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-300">
                  Industry Partners
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div 
            className="max-w-4xl mx-auto text-center"
            data-animate
            id="cta"
            style={{
              transform: isVisible['cta'] ? 'translateY(0)' : 'translateY(40px)',
              opacity: isVisible['cta'] ? 1 : 0,
              transition: 'all 0.8s ease-out'
            }}
          >
            <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8 text-white">
              Ready to <span className="italic">shape</span>
              <br />
              the future?
            </h2>
            
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our community of innovators and become part of something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-8 py-4 bg-white text-black font-medium text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors duration-300 group rounded-lg">
                Apply Now
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              
              <button className="px-8 py-4 border border-white/30 text-white font-medium text-sm uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors duration-300 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="py-12 px-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-300 uppercase tracking-wider">
              IIT Mandi — Technical Clubs
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Clubs;