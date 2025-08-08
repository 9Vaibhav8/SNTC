import React from "react";

const Navbar = () => {
  return (
    <nav className="relative bg-black backdrop-blur-md  px-6 md:px-8 py-6 overflow-hidden">
      {/* Diagonal Light Streaks Background */}
     

      <div className="relative z-50 flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <div className="relative group cursor-pointer">
            <span className="text-xl font-light text-white tracking-wider hover:text-cyan-300 transition-colors duration-300">
              SNTC
            </span>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 text-xl font-light text-cyan-400 blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 tracking-wider">
              SNTC
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex  space-x-12  right-10">
          {[
            { name: 'HOME', href: '/' },
            { name: 'CLUBS', href: '/clubs' },
           
            { name: 'EVENTS', href: '/events' },
            { name: 'CONTACT', href: '/contact' }
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-300 hover:text-white text-sm font-light tracking-widest transition-all duration-300 group cursor-pointer"
            >
              <span className="relative z-10">{item.name}</span>
              {/* Hover underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-white group-hover:w-full transition-all duration-300"></div>
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 text-sm font-light text-cyan-400 blur-sm opacity-0 group-hover:opacity-10 transition-opacity duration-300 tracking-widest">
                {item.name}
              </div>
            </a>
          ))}
        </div>

      

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-300 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 w-full h-px  to-transparent"></div>

      <style jsx>{`
        @keyframes navSlide {
          0% { opacity: 0.05; transform: translateX(-10px) rotate(25deg); }
          50% { opacity: 0.1; transform: translateX(0px) rotate(25deg); }
          100% { opacity: 0.05; transform: translateX(10px) rotate(25deg); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;