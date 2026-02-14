import React from 'react';

const ProductCategory = ({ title, subtitle, products, id, bgColor = 'bg-white' }) => {
  return (
    <section id={id} className={`py-20 ${bgColor} pattern-overlay`}>
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="section-subtitle">{subtitle}</span>
          <h2 className="section-title">{title}</h2>
          <div className="divider"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="product-card group scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-4 py-2 text-xs font-bold uppercase tracking-wider ${
                      product.badge === 'Limited Edition' ? 'bg-[#8B0000] text-white' :
                      product.badge === 'Best Seller' ? 'bg-[#D4AF37] text-[#0A0A0A]' :
                      'bg-[#0A0A0A] text-[#D4AF37]'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="product-overlay">
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-[#D4AF37] hover:bg-[#8B0000] text-white rounded-full transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full transition-all duration-300 transform hover:scale-110">
                      <i className="far fa-heart"></i>
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full transition-all duration-300 transform hover:scale-110">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#0A0A0A] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#8B0000] font-light">
                      {product.category}
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star text-xs ${
                          i < product.rating ? 'text-[#D4AF37]' : 'text-gray-300'
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
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
                  <button className="text-[#D4AF37] hover:text-[#8B0000] transition-colors font-semibold text-sm uppercase tracking-wider">
                    Add to Cart
                    <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 scroll-reveal">
          <button className="luxury-button">
            VIEW ALL {title.toUpperCase()}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;