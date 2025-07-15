import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <h1 className="text-white mb-8 animate-fade-in-up">
            <div className="text-hero-mobile md:text-hero-desktop font-black uppercase tracking-tight-brand leading-none mb-2">
              Discover Your
            </div>
            <div className="text-hero-mobile-sub md:text-hero-desktop font-black uppercase tracking-tight-brand leading-none bg-gradient-to-r from-brand-primary to-brand-primary-dark bg-clip-text text-transparent">
              Dream Property
            </div>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in-up max-w-xl leading-relaxed font-light">
            Experience luxury living with our exclusive real estate offerings across London's most prestigious locations
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up">
            <button className="group bg-brand-primary text-white px-10 py-4 rounded-md font-bold hover:bg-brand-primary-dark transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="relative">Explore Properties</span>
            </button>
            
            <button className="group flex items-center justify-center space-x-3 border-2 border-white/30 text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-brand-neutral-dark transform hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;