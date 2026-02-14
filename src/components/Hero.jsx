import React, { useState, useEffect } from 'react';
import { heroImages } from '../assets/productImages';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Fade Effect */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-transparent z-10"></div>
          <img
            src={image}
            alt={`MOTIKAFA Luxury ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Arabic Pattern Overlay */}
      <div className="absolute inset-0 arabesque-pattern z-20"></div>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center container-luxury">
        <div className="max-w-3xl animate__animated animate__fadeInUp">
          {/* Brand Title */}
          <div className="mb-6">
            <span className="text-[#D4AF37] text-sm md:text-base uppercase tracking-[8px] font-light">
              MOTIKAFA
            </span>
            <div className="flex items-center space-x-4 mt-2">
              <div className="w-20 h-[2px] bg-[#D4AF37]"></div>
              <span className="text-[#EADBC6] uppercase tracking-[4px] text-xs">
                Established 2020
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Cormorant_Garamond'] font-bold text-white mb-6 leading-tight">
            Luxury Beyond
            <span className="block gold-text">Scents</span>
          </h1>

          {/* Description */}
          <p className="text-[#EADBC6] text-lg md:text-xl mb-8 max-w-2xl font-light leading-relaxed">
            Discover the essence of Arabian luxury. Handcrafted perfumes, 
            premium fabrics, and exclusive accessories that define elegance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="luxury-button group">
              <span className="relative z-10 flex items-center">
                EXPLORE COLLECTION
                <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
              </span>
            </button>
            <button className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-500 uppercase tracking-wider text-sm font-semibold">
              WATCH FILM
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-8 mt-16">
            <div>
              <div className="text-2xl font-bold text-[#D4AF37]">50+</div>
              <div className="text-xs text-[#EADBC6] uppercase tracking-wider">Premium Scents</div>
            </div>
            <div className="w-[1px] h-10 bg-[#D4AF37]/30"></div>
            <div>
              <div className="text-2xl font-bold text-[#D4AF37]">100%</div>
              <div className="text-xs text-[#EADBC6] uppercase tracking-wider">Natural Oils</div>
            </div>
            <div className="w-[1px] h-10 bg-[#D4AF37]/30"></div>
            <div>
              <div className="text-2xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-xs text-[#EADBC6] uppercase tracking-wider">Concierge</div>
            </div>
          </div>
        </div>

        {/* Floating Product Image */}
        <div className="hidden lg:block absolute right-20 bottom-20 animate-float">
          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-20 rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1616949989929-2fcd0e6d1f1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Premium Perfume"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-[#D4AF37]/30 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
        <a href="#perfumes" className="text-[#D4AF37] hover:text-[#EADBC6] transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;