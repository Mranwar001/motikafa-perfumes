import React, { useState } from 'react';

const ProductCategory = ({ title, subtitle, products, id, bgColor = 'bg-white', onOrderClick }) => {
  const [imageIndex, setImageIndex] = useState({});
  const [showContactOptions, setShowContactOptions] = useState(null);

  // Handle image hover for multiple images
  const handleMouseEnter = (productId, imageIndex) => {
    setImageIndex(prev => ({ ...prev, [productId]: imageIndex }));
  };

  const handleMouseLeave = (productId) => {
    setImageIndex(prev => ({ ...prev, [productId]: 0 }));
  };

  // Handle order - use parent's onOrderClick if available, otherwise local dropdown
  const handleOrderClick = (product) => {
    if (onOrderClick) {
      // Use the global modal from App.jsx
      onOrderClick(product);
    } else {
      // Fallback to local dropdown
      setShowContactOptions(showContactOptions === product.id ? null : product.id);
    }
  };

  // Contact methods (keep as fallback)
  const contactMethods = [
    {
      type: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: 'bg-green-500 hover:bg-green-600',
      action: (product) => {
        const message = encodeURIComponent(`Hello! I'm interested in ordering: ${product.name} (${product.price})`);
        window.open(`https://wa.me/234700000000?text=${message}`, '_blank');
      }
    },
    {
      type: 'Email',
      icon: 'far fa-envelope',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: (product) => {
        const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
        const body = encodeURIComponent(`I would like to order:\n\nProduct: ${product.name}\nPrice: ${product.price}\n\nPlease provide payment and delivery details.`);
        window.location.href = `mailto:orders@motikafa.com?subject=${subject}&body=${body}`;
      }
    },
    {
      type: 'Phone',
      icon: 'fas fa-phone-alt',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => {
        window.location.href = 'tel:+234700000000';
      }
    }
  ];

  return (
    <section id={id} className={`py-16 lg:py-24 ${bgColor}`}>
      <div className="container-luxury px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header - White & Gold */}
        <div className="text-center mb-12 lg:mb-16 scroll-reveal">
          <span className="inline-block text-[#D4AF37] font-light tracking-[0.3em] text-sm uppercase mb-3">
            {subtitle}
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            {title}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const currentImageIndex = imageIndex[product.id] || 0;
            const images = product.images || [product.image]; // Support multiple images
            const hasMultipleImages = images.length > 1;

            return (
              <div
                key={product.id}
                className="group scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    {/* Main Image */}
                    <img
                      src={images[currentImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Secondary Images (on hover) */}
                    {hasMultipleImages && (
                      <>
                        {/* Thumbnail Navigation */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onMouseEnter={() => handleMouseEnter(product.id, idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                currentImageIndex === idx 
                                  ? 'w-6 bg-[#D4AF37]' 
                                  : 'bg-white/60 hover:bg-white'
                              }`}
                              aria-label={`View image ${idx + 1}`}
                            />
                          ))}
                        </div>

                        {/* Hover hint */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-light text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <i className="fas fa-images mr-1 text-[#D4AF37]"></i>
                          {images.length} images
                        </div>
                      </>
                    )}

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg ${
                          product.badge === 'Limited Edition' ? 'bg-[#8B0000] text-white' :
                          product.badge === 'Best Seller' ? 'bg-[#D4AF37] text-[#1A1A1A]' :
                          'bg-[#1A1A1A] text-[#D4AF37]'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Quick Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-4">
                        <button 
                          onClick={() => handleOrderClick(product)}
                          className="w-12 h-12 bg-[#D4AF37] hover:bg-[#8B0000] text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                          aria-label="Order now"
                        >
                          <i className="fas fa-shopping-bag"></i>
                        </button>
                        <button className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full transition-all duration-300 transform hover:scale-110">
                          <i className="far fa-heart"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A] mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[#8B0000] font-light tracking-wide">
                          {product.category}
                        </p>
                      </div>
                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star text-xs ${
                              i < product.rating ? 'text-[#D4AF37]' : 'text-gray-200'
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price & Order Section */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-[#8B0000]">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="ml-2 text-sm text-gray-400 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Order Button */}
                      <button
                        onClick={() => handleOrderClick(product)}
                        className="w-full bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] py-3 rounded-md transition-all duration-300 font-semibold text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
                      >
                        <i className="fas fa-shopping-cart"></i>
                        <span>Order Now</span>
                      </button>

                      {/* Contact Options Dropdown - Only show if no parent onOrderClick */}
                      {!onOrderClick && showContactOptions === product.id && (
                        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-30 animate-fadeIn">
                          <div className="p-2">
                            <p className="text-xs text-gray-500 px-3 py-2">Choose contact method:</p>
                            {contactMethods.map((method) => (
                              <button
                                key={method.type}
                                onClick={() => method.action(product)}
                                className={`w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md transition-colors flex items-center space-x-3 group`}
                              >
                                <div className={`w-8 h-8 ${method.color} rounded-full flex items-center justify-center text-white text-sm transition-transform group-hover:scale-110`}>
                                  <i className={method.icon}></i>
                                </div>
                                <span className="text-sm font-medium text-[#1A1A1A]">{method.type}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button - Luxury Style */}
        <div className="text-center mt-12 lg:mt-16 scroll-reveal">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white rounded-md">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1A1A1A] rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
            <span className="relative text-sm font-bold uppercase tracking-[0.2em]">
              VIEW ALL {title.toUpperCase()}
            </span>
          </button>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProductCategory;
