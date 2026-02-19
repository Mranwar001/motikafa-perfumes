import React, { useState, useEffect } from 'react';

const Navbar = ({ onOrderClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: 'fas fa-home' },
    { name: 'Perfumes', href: '#perfumes', icon: 'fas fa-spray-can' },
    { name: 'Fabrics', href: '#fabrics', icon: 'fas fa-tshirt' },
    { name: 'Accessories', href: '#accessories', icon: 'fas fa-gem' },
    { name: 'Home Goods', href: '#home-goods', icon: 'fas fa-home' },
    { name: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container-luxury px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo - Luxury Style */}
            <a 
              href="#home" 
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <span className="text-2xl md:text-3xl font-['Cormorant_Garamond'] font-bold text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors duration-300">
                  MOTIKAFA
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></div>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-[#D4AF37] to-transparent"></span>
                <span className="text-xs text-[#8B8B8B] uppercase tracking-[4px] font-light">
                  Arabian Luxury
                </span>
              </div>
            </a>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="px-4 py-2 text-[#4A4A4A] hover:text-[#D4AF37] transition-all duration-300 text-sm uppercase tracking-wider font-light relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Right Icons - Luxury Style */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#D4AF37] transition-all duration-300 relative group"
              >
                <i className={`fas fa-${showSearch ? 'times' : 'search'} text-lg`}></i>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Order Now Button */}
              <button
                onClick={() => onOrderClick && onOrderClick({ 
                  name: "Quick Order", 
                  price: "Contact for price",
                  category: "General Inquiry"
                })}
                className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium transition-all bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white rounded-md"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1A1A1A] rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
                <span className="relative flex items-center space-x-2 text-sm font-bold uppercase tracking-wider">
                  <i className="fas fa-shopping-bag"></i>
                  <span>Order Now</span>
                </span>
              </button>

              {/* Cart with Count */}
              <button className="relative group">
                <div className="w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#D4AF37] transition-colors">
                  <i className="fas fa-shopping-bag text-lg"></i>
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#8B0000] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#4A4A4A] hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle menu"
            >
              <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>

          {/* Search Bar (when expanded) */}
          {showSearch && (
            <div className="hidden lg:block absolute left-0 right-0 top-full bg-white shadow-lg p-4 animate-slideDown">
              <div className="container-luxury max-w-3xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for perfumes, fabrics, accessories..."
                    className="w-full px-6 py-4 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    autoFocus
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37] hover:text-[#8B0000] transition-colors">
                    <i className="fas fa-search text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu - Luxury Slide Down */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="container-luxury px-4 py-6">
            {/* Mobile Navigation */}
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="flex items-center space-x-3 px-4 py-3 text-[#4A4A4A] hover:text-[#D4AF37] hover:bg-[#FFF8E7] rounded-lg transition-all duration-300 group"
                >
                  <i className={`${item.icon} w-6 text-[#D4AF37] group-hover:scale-110 transition-transform`}></i>
                  <span className="text-sm uppercase tracking-wider">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => onOrderClick && onOrderClick({ 
                    name: "Quick Order", 
                    price: "Contact for price",
                    category: "General Inquiry"
                  })}
                  className="col-span-2 bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white py-3 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <i className="fas fa-shopping-bag"></i>
                  <span>Order Now</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                  <i className="fas fa-search text-[#4A4A4A]"></i>
                  <span className="text-sm">Search</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors relative">
                  <i className="fas fa-shopping-bag text-[#4A4A4A]"></i>
                  <span className="text-sm">Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#8B0000] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Luxury Brand Message */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400 font-light tracking-wider">
                <i className="fas fa-crown text-[#D4AF37] mr-1"></i>
                AUTHENTIC ARABIAN LUXURY SINCE 2020
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
