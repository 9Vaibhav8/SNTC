import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const Events = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const animationFrame = () => {
      setTime(Date.now() * 0.001);
      requestAnimationFrame(animationFrame);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    animationFrame();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const eventList = [
    {
      name: "Xpecto",
      description: "Annual technical fest showcasing innovation and creativity with cutting-edge technology demonstrations and competitive programming challenges.",
      category: "Technical Fest",
      icon: "🪄",
      gradient: "from-purple-500 via-pink-500 to-violet-600",
      accent: "purple",
      features: ["INNOVATION SHOWCASE", "TECH DEMOS", "CODING COMPETITIONS", "NETWORKING HUB"],
      participants: "500+ Participants",
      duration: "3 Days"
    },
    {
      name: "Utkarsh", 
      description: "Premier cultural-technical hybrid event focusing on creative problem-solving and artistic expression through technology.",
      category: "Cultural Event",
      icon: "🎭",
      gradient: "from-blue-500 via-cyan-500 to-indigo-600",
      accent: "blue",
      features: ["CREATIVE SOLUTIONS", "ART & TECH FUSION", "CULTURAL PERFORMANCES", "SKILL SHOWCASE"],
      participants: "300+ Participants",
      duration: "2 Days"
    },
    {
      name: "TIP",
      description: "Technical Induction Programme - Comprehensive training bootcamp designed to transform beginners into tech-savvy innovators.",
      category: "Training Program",
      icon: "💡",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      accent: "orange",
      features: ["INTENSIVE TRAINING", "HANDS-ON PROJECTS", "MENTORSHIP PROGRAM", "CERTIFICATION PROVIDED"],
      participants: "200+ Trainees",
      duration: "4 Weeks"
    },
    {
      name: "Robotics Workshop",
      description: "Advanced robotics and automation workshop featuring AI integration, IoT connectivity, and real-world applications.",
      category: "Workshop",
      icon: "🤖",
      gradient: "from-emerald-500 via-teal-500 to-green-600",
      accent: "emerald",
      features: ["AI INTEGRATION", "IoT CONNECTIVITY", "REAL-WORLD PROJECTS", "INDUSTRY EXPOSURE"],
      participants: "150+ Engineers",
      duration: "1 Week"
    },
  ];

  const renderEventCard = (event, index) => (
    <div
      key={index}
      className="group relative"
      style={{
        transform: `perspective(1500px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Card Container with Glass Effect */}
      <div 
        className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:border-white/20 transition-all duration-700 group-hover:scale-[1.02] overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: `
            0 25px 50px -12px rgba(0, 0, 0, 0.9),
            0 0 0 1px rgba(255, 255, 255, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-[0.05] rounded-3xl group-hover:opacity-[0.08] transition-opacity duration-500`}></div>
        
        {/* Top Section */}
        <div className="relative z-10 flex items-start justify-between mb-10">
          {/* Enhanced Icon */}
          <div className="relative">
            <div 
              className={`relative w-20 h-20 bg-gradient-to-br ${event.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
              style={{
                boxShadow: `
                  0 20px 40px rgba(0,0,0,0.6), 
                  inset 0 1px 0 rgba(255,255,255,0.3),
                  0 0 30px ${event.gradient.includes('purple') ? '#8b5cf6' : event.gradient.includes('blue') ? '#06b6d4' : event.gradient.includes('amber') ? '#f59e0b' : '#10b981'}40
                `
              }}
            >
              {event.icon}
              <div className="absolute inset-0 bg-white/10 rounded-2xl" style={{ transform: 'translateZ(-2px) translateX(2px) translateY(2px)' }}></div>
            </div>
            <div className={`absolute -inset-4 bg-gradient-to-r ${event.gradient} opacity-30 blur-xl rounded-2xl -z-10`}></div>
          </div>

          {/* Enhanced Tech Illustration */}
          <div className="relative w-40 h-24 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
            <div className="absolute inset-0 border border-white/20 rounded-xl backdrop-blur-sm bg-white/5">
              {/* Enhanced browser interface */}
              <div className="flex gap-1.5 p-3 border-b border-white/10">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full shadow-sm"></div>
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-sm"></div>
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full shadow-sm"></div>
              </div>
              <div className="px-3 pb-3 pt-2 space-y-1.5">
                <div className={`h-1.5 bg-gradient-to-r ${event.gradient} rounded w-3/4 opacity-80`}></div>
                <div className="h-1 bg-white/30 rounded w-1/2"></div>
                <div className="h-1 bg-white/30 rounded w-2/3"></div>
                <div className="h-1 bg-white/30 rounded w-1/3"></div>
              </div>
            </div>
            {/* Enhanced chat indicator */}
            <div className={`absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-r ${event.gradient} rounded-full flex items-center justify-center shadow-xl`}>
              <div className="flex space-x-0.5">
                <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Info */}
        <div className="relative z-10">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${event.gradient} bg-opacity-10 text-white text-sm font-medium rounded-full border border-white/20 backdrop-blur-sm`}>
              <div className={`w-2 h-2 bg-gradient-to-r ${event.gradient} rounded-full mr-2 animate-pulse`}></div>
              {event.category}
            </span>
          </div>

          {/* Event Name */}
          <h3 className="text-4xl font-light text-white mb-6 tracking-wide leading-tight">
            {event.name}
          </h3>

          {/* Stats */}
          <div className="flex gap-6 mb-8">
            <div className="text-center">
              <div className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-1">Participants</div>
              <div className="text-white text-sm font-light">{event.participants}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs font-medium tracking-wider uppercase mb-1">Duration</div>
              <div className="text-white text-sm font-light">{event.duration}</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-200 text-lg font-light leading-relaxed mb-10 text-justify">
            {event.description}
          </p>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
            {event.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-gray-300 text-sm font-medium tracking-wider">
                <div className={`w-2 h-2 bg-gradient-to-r ${event.gradient} rounded-full mr-3 shadow-sm`}></div>
                {feature}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 px-8 py-4 bg-white/10 hover:bg-white/20 text-gray-200 font-medium rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 hover:border-white/30">
              Learn More
            </button>
            <button className={`flex-1 px-8 py-4 bg-gradient-to-r ${event.gradient} text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden`}>
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Subtle Light Effects */}
        <div className="absolute top-8 left-8 w-32 h-32 bg-white/[0.03] rounded-full blur-3xl"></div>
        <div className={`absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-r ${event.gradient} opacity-10 rounded-full blur-2xl`}></div>
        
        {/* Border Glow */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`}></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Content Overlay */}
      <div className="relative z-20">
        {/* Header Section */}
        <div className="pt-24 pb-16 text-center">
          <div 
            className="inline-block"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`
            }}
          >
            <p className="text-amber-400 text-xl font-light italic tracking-[0.2em] mb-8 opacity-90">
              Step Two
            </p>
            <h1 className="text-8xl md:text-9xl font-thin text-white tracking-[-0.02em] leading-none relative mb-8">
              <span className="block relative">
                Events
                <div className="absolute -inset-8 bg-gradient-to-r from-violet-600/10 via-purple-600/5 to-indigo-600/10 blur-3xl -z-10 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4">
              Connect with us through our innovative technical events to experience exactly what you need, anytime. 
              Where cutting-edge technology meets creative innovation.
            </p>
          </div>
        </div>

        {/* Events Layout with Spline in Between */}
        <div className="px-8 max-w-7xl mx-auto pb-24">
          {/* First two events */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {eventList.slice(0, 2).map((event, index) => renderEventCard(event, index))}
          </div>

          {/* Spline Element in the Middle */}
          <div className="relative h-[600px] mb-20 rounded-3xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
            <Spline
              scene="https://prod.spline.design/z9iTIJdJr6Jd4Mxc/scene.splinecode" 
              className="w-full h-full"
            />
            {/* Overlay for better integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
            
            {/* Optional decorative elements */}
            <div className="absolute top-8 left-8 text-white/60 text-sm font-light tracking-wider">
              Interactive Experience
            </div>
            <div className="absolute bottom-8 right-8 text-white/60 text-sm font-light tracking-wider">
              Powered by Spline
            </div>
          </div>

          {/* Last two events */}
          <div className="grid lg:grid-cols-2 gap-12">
            {eventList.slice(2, 4).map((event, index) => renderEventCard(event, index + 2))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pb-20 px-6">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm font-light tracking-wide">
            <span>Powered by</span>
            <span className="text-white font-medium italic text-lg">SNTC</span>
            <span>—</span>
            <span>Where Technology Transforms Ideas into Reality</span>
          </div>
        </div>
      </div>

      {/* Advanced Custom Styles */}
      <style jsx>{`
        @keyframes float3dComplex {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px) scale(1);
          }
          25% { 
            transform: translateY(-40px) rotateX(30deg) rotateY(15deg) rotateZ(8deg) translateZ(30px) scale(1.1);
          }
          50% { 
            transform: translateY(-25px) rotateX(-25deg) rotateY(-20deg) rotateZ(-12deg) translateZ(15px) scale(0.95);
          }
          75% { 
            transform: translateY(-35px) rotateX(20deg) rotateY(25deg) rotateZ(18deg) translateZ(35px) scale(1.05);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }

        @keyframes dashMove {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 100; }
        }

        .group:hover .animate-pulse {
          animation-duration: 0.6s;
        }

        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Events;