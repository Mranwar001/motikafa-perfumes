import React, { useState, useEffect } from 'react';
import { featuredProducts } from '../assets/ProductImages';

const FeaturedCarousel = ({ onOrderClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageIndex, setImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
        setImageIndex(0); // Reset image index on slide change
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle touch swipe for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    setImageIndex(0);
    setIsAutoPlaying(false); // Pause autoplay on manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1
    );
    setImageIndex(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const currentProduct = featuredProducts[currentIndex];
  const images = currentProduct.images || [currentProduct.image];
  const hasMultipleImages = images.length > 1;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B0000] rounded-full blur-3xl"></div>
      </div>

      <div className="container-luxury px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 scroll-reveal">
          <span className="inline-block text-[#D4AF37] font-light tracking-[0.3em] text-sm uppercase mb-3">
            EXCLUSIVE SELECTION
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Collection
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div 
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Main Image with Multiple Images Support */}
              <div className="relative w-full h-full">
                <img
                  src={images[imageIndex]}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover transition-transform duration-700 transform scale-105 hover:scale-110"
                />
                
                {/* Multiple Images Indicator */}
                {hasMultipleImages && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm z-20">
                    <i className="fas fa-images mr-2 text-[#D4AF37]"></i>
                    <span className="text-white">{imageIndex + 1} / {images.length}</span>
                  </div>
                )}

                {/* Image Navigation Dots (for multiple images) */}
                {hasMultipleImages && (
                  <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setImageIndex(idx);
                        }}
                        className={`transition-all duration-300 ${
                          imageIndex === idx 
                            ? 'w-8 h-2 bg-[#D4AF37]' 
                            : 'w-2 h-2 bg-white/50 hover:bg-white'
                        } rounded-full`}
                        aria-label={`View image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 text-center">
                <span className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-[4px] sm:tracking-[6px] mb-2 sm:mb-4 block">
                  Featured Product
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-['Cormorant_Garamond'] font-bold text-white mb-2 sm:mb-4 px-4">
                  {currentProduct.name}
                </h3>
                <p className="text-[#EADBC6] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-4 line-clamp-2">
                  {currentProduct.description}
                </p>
                
                {/* Price and Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                      {currentProduct.price}
                    </span>
                    {currentProduct.originalPrice && (
                      <span className="text-sm sm:text-base text-gray-400 line-through">
                        {currentProduct.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Order Button */}
                  <button
                    onClick={() => onOrderClick(currentProduct)}
                    className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden font-medium transition-all bg-[#D4AF37] hover:bg-white text-[#1A1A1A] hover:text-[#1A1A1A] rounded-md"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                    <span className="relative text-sm font-bold uppercase tracking-wider flex items-center">
                      <i className="fas fa-shopping-bag mr-2"></i>
                      Order Now
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-[#D4AF37] text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-30"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-[#D4AF37] text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-30"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-4 mt-6 sm:mt-8">
            {featuredProducts.map((product, index) => {
              const productImages = product.images || [product.image];
              return (
                <button
                  key={product.id}
                  onClick={() => {
                    setCurrentIndex(index);
                    setImageIndex(0);
                  }}
                  className={`group relative rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-2 sm:ring-4 ring-[#D4AF37] scale-105' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-square">
                    <img
                      src={productImages[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Multiple Images Badge */}
                    {productImages.length > 1 && (
                      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-black/60 text-white text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                        <i className="fas fa-images mr-1 text-[#D4AF37]"></i>
                        {productImages.length}
                      </div>
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fas fa-eye text-white text-lg sm:text-xl"></i>
                    </div>
                  </div>
                  
                  {/* Product Name (mobile only) */}
                  <p className="text-xs text-center mt-1 truncate px-1 text-white/80 sm:hidden">
                    {product.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between mt-6 sm:mt-8">
            {/* Slide Counter */}
            <div className="text-sm text-white/60">
              <span className="text-[#D4AF37] font-bold">{currentIndex + 1}</span>
              <span className="mx-1">/</span>
              <span>{featuredProducts.length}</span>
            </div>

            {/* Auto-play Control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center space-x-2 text-white/60 hover:text-[#D4AF37] transition-colors text-sm"
            >
              <i className={`fas fa-${isAutoPlaying ? 'pause' : 'play'}`}></i>
              <span className="hidden sm:inline">
                {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
              </span>
            </button>

            {/* Quick Order All Button */}
            <button
              onClick={() => onOrderClick(currentProduct)}
              className="text-sm text-white/60 hover:text-[#D4AF37] transition-colors"
            >
              <i className="fas fa-shopping-cart mr-1"></i>
              <span className="hidden sm:inline">Quick Order</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
