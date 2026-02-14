import React, { useState, useEffect } from 'react';
import { featuredProducts } from '../assets/productImages';

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="section-subtitle text-[#D4AF37]">EXCLUSIVE SELECTION</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cormorant_Garamond'] font-bold text-white mb-4">
            Featured Collection
          </h2>
          <div className="divider"></div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Item */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative h-[500px] md:h-[600px]">
              <img
                src={featuredProducts[currentIndex].image}
                alt={featuredProducts[currentIndex].name}
                className="w-full h-full object-cover transition-transform duration-700 transform scale-105 hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
                <span className="text-[#D4AF37] text-sm uppercase tracking-[6px] mb-4 block">
                  Featured Product
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-['Cormorant_Garamond'] font-bold text-white mb-4">
                  {featuredProducts[currentIndex].name}
                </h3>
                <p className="text-[#EADBC6] text-lg mb-6 max-w-2xl mx-auto">
                  {featuredProducts[currentIndex].description}
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <span className="text-3xl font-bold text-[#D4AF37]">
                    {featuredProducts[currentIndex].price}
                  </span>
                  <button className="luxury-button">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#D4AF37] text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#D4AF37] text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center mt-8 space-x-4">
            {featuredProducts.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#D4AF37] scale-110' 
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute -bottom-12 right-0 text-[#D4AF37] hover:text-white transition-colors"
          >
            <i className={`fas fa-${isAutoPlaying ? 'pause' : 'play'} mr-2`}></i>
            {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;