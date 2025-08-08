import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SnTCLandingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black  relative">
      {/* Spline Background positioned more to the right */}
      <div className="absolute inset-0   pointer-events-none">
         <Spline
        scene="https://prod.spline.design/YfsAeuPiA9x9zofh/scene.splinecode" 
        className='w-full h-full'
      />
      </div>

      {/* Navbar Space - Empty div to prevent content from hiding behind navbar */}
      <div className="h-16 md:h-20 relative z-30"></div>

      {/* Main Content - Left Side */}
      <main className="relative z-50 flex flex-col justify-center min-h-[calc(20vh-4rem)] md:min-h-[calc(100vh-5rem)] px-6 md:px-10 w-full md:w-1/2">
        <div className="max-w-4xl">
          {/* Main heading */}
          <div className="space-y-4 mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none tracking-tight">
              Science and
            </h1>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-none tracking-tight">
              Technology
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Council IIT Mandi
              </span>
            </h1>
            <h4 className="text-sm md:text-base lg:text-lg font-light text-white mt-7 max-w-xl leading-relaxed opacity-90">
              SnTC is IIT Mandi's Technical Society where innovation and excellence come to play. As the vibrant umbrella of our tech clubs, SnTC sparks transformative advancements across countless fields
            </h4>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="text-gray-500 text-xs space-y-1 mb-4 md:mb-0">
            <p>2025 © Copyright SNTC. All Rights Reserved</p>
            <div className="flex space-x-4">
              <span className="hover:text-white cursor-pointer transition-colors">This site uses technical cookies only</span>
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="text-gray-400 text-sm mb-4 tracking-wider">
              
            </div>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <a href="https://www.instagram.com/sntc_iitmandi/" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideIn {
          0% { opacity: 0.1; transform: translateX(-20px) rotate(25deg); }
          50% { opacity: 0.3; transform: translateX(0px) rotate(25deg); }
          100% { opacity: 0.1; transform: translateX(20px) rotate(25deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}