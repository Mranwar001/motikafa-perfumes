import React, { useState, useEffect } from 'react';
import { heroImages } from '../assets/ProductImages';

const Hero = ({ onOrderClick }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Hero content for each slide
  const heroContent = [
    {
      title: "Luxury Beyond",
      subtitle: "Scents",
      description: "Discover the essence of Arabian luxury. Handcrafted perfumes, premium fabrics, and exclusive accessories that define elegance.",
      stats: [
        { value: "50+", label: "Premium Scents" },
        { value: "100%", label: "Natural Oils" },
        { value: "24/7", label: "Concierge" }
      ]
    },
    {
      title: "Timeless",
      subtitle: "Elegance",
      description: "Experience the artistry of traditional Arabian craftsmanship. Each piece tells a story of heritage and sophistication.",
      stats: [
        { value: "1000+", label: "Happy Clients" },
        { value: "15+", label: "Countries" },
        { value: "5★", label: "Service" }
      ]
    }
  ];

  const handleWatchFilm = () => {
    setIsVideoPlaying(true);
    // You can integrate a video modal here
  };

  const currentContent = heroContent[currentImage % heroContent.length];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* Background Images with Fade Effect */}
      {heroImages.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
            index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          {/* Gradient Overlay - Softer for white/gold theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/70 to-[#1A1A1A]/30 z-10"></div>
          
          {/* Image */}
          <img
            src={item.image}
            alt={item.title || `MOTIKAFA Luxury ${index + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Subtle Gold Overlay */}
          <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay z-15"></div>
        </div>
      ))}

      {/* Decorative Arabic Pattern */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z' stroke='%23D4AF37' fill='none' stroke-width='0.5' /%3E%3C/svg%3E")`,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex items-center container-luxury px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl animate-fadeInUp">
          {/* Brand Title with Gold Accent */}
          <div className="mb-6 md:mb-8">
            <span className="inline-block text-[#D4AF37] text-xs md:text-sm uppercase tracking-[6px] md:tracking-[8px] font-light mb-3">
              MOTIKAFA
            </span>
            <div className="flex items-center space-x-4">
              <div className="w-12 md:w-20 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              <span className="text-[#EADBC6]/70 uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-xs">
                Est. 2020
              </span>
            </div>
          </div>

          {/* Main Title with Animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-['Cormorant_Garamond'] font-bold text-white mb-4 md:mb-6 leading-tight">
            {currentContent.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5E6B2]">
              {currentContent.subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#EADBC6] text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl font-light leading-relaxed">
            {currentContent.description}
          </p>

          {/* CTA Buttons - Enhanced Luxury Style */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <button 
              onClick={() => onOrderClick && onOrderClick({
                name: "Luxury Collection Inquiry",
                price: "Custom Quote",
                category: "General"
              })}
              className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 overflow-hidden font-medium transition-all bg-[#D4AF37] hover:bg-white text-[#1A1A1A] hover:text-[#1A1A1A] rounded-md"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
              <span className="relative flex items-center space-x-2 text-sm md:text-base font-bold uppercase tracking-wider">
                <span>ORDER NOW</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
              </span>
            </button>
            
            <button 
              onClick={handleWatchFilm}
              className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 overflow-hidden font-medium transition-all border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-md"
            >
              <span className="relative flex items-center space-x-2 text-sm md:text-base font-bold uppercase tracking-wider">
                <i className="fas fa-play-circle mr-2 group-hover:scale-110 transition-transform"></i>
                <span>WATCH FILM</span>
              </span>
            </button>
          </div>

          {/* Stats - Luxury Style */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-8 md:mt-16">
            {currentContent.stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="group">
                  <div className="text-xl md:text-2xl font-bold text-[#D4AF37] group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs text-[#EADBC6]/70 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
                {index < currentContent.stats.length - 1 && (
                  <div className="w-[1px] h-8 md:h-10 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Quick Order Tagline */}
          <div className="mt-6 md:mt-8 flex items-center space-x-2 text-[#EADBC6]/50 text-xs">
            <i className="fas fa-shield-alt text-[#D4AF37]"></i>
            <span>100% Authentic • Free Consultation • Global Shipping</span>
          </div>
        </div>

        {/* Floating Product Gallery */}
        <div className="hidden lg:block absolute right-8 xl:right-20 bottom-20">
          <div className="relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-20 rounded-full animate-pulse"></div>
            
            {/* Main floating image */}
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1616949989929-2fcd0e6d1f1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Premium Perfume"
                className="w-64 xl:w-80 h-64 xl:h-80 object-cover rounded-full border-4 border-[#D4AF37]/30 shadow-2xl"
              />
              
              {/* Gold ring overlay */}
              <div className="absolute inset-0 rounded-full border-8 border-[#D4AF37]/10"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white text-[#1A1A1A] px-4 py-2 rounded-full shadow-xl animate-pulse">
              <span className="text-xs font-bold uppercase tracking-wider">New</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-[#D4AF37] text-[#1A1A1A] px-4 py-2 rounded-full shadow-xl">
              <span className="text-xs font-bold flex items-center">
                <i className="fas fa-crown mr-1"></i>
                Limited
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center mt-6 space-x-3">
            {[1, 2, 3].map((item) => (
              <button
                key={item}
                className="w-12 h-12 rounded-lg overflow-hidden border-2 border-transparent hover:border-[#D4AF37] transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={`https://images.unsplash.com/photo-1616949989929-2fcd0e6d1f1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 ${
              index === currentImage 
                ? 'w-8 h-2 bg-[#D4AF37]' 
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <a 
          href="#perfumes" 
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#perfumes')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex flex-col items-center space-y-2 text-[#D4AF37] hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-wider opacity-70 group-hover:opacity-100">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full animate-scroll"></div>
          </div>
        </a>
      </div>

      {/* Video Modal Placeholder */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {/* Replace with your video embed */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#D4AF37]/20">
                <p className="text-white">Brand Film Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        .duration-1500 {
          transition-duration: 1500ms;
        }
      `}</style>
    </section>
  );
};

export default Hero;
