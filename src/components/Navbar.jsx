import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Perfumes', href: '#perfumes' },
    { name: 'Fabrics', href: '#fabrics' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Home Goods', href: '#home-goods' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container-luxury">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl md:text-3xl font-['Cormorant_Garamond'] font-bold gold-text">
              MOTIKAFA
            </span>
            <span className="hidden md:inline-block w-8 h-[2px] bg-[#D4AF37]"></span>
            <span className="hidden md:block text-xs text-[#EADBC6] uppercase tracking-[4px]">
              Arabian Perfumes
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#EADBC6] hover:text-[#D4AF37] transition-colors duration-300 text-sm uppercase tracking-wider font-light"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-[#EADBC6] hover:text-[#D4AF37] transition-colors">
              <i className="fas fa-search text-lg"></i>
            </button>
            <button className="text-[#EADBC6] hover:text-[#D4AF37] transition-colors relative">
              <i className="fas fa-shopping-bag text-lg"></i>
              <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            <button className="text-[#EADBC6] hover:text-[#D4AF37] transition-colors">
              <i className="far fa-user text-lg"></i>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#EADBC6] hover:text-[#D4AF37] transition-colors"
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-md py-6 px-4 border-t border-[#D4AF37]/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#EADBC6] hover:text-[#D4AF37] transition-colors py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 pt-4 border-t border-[#D4AF37]/20">
                <button className="text-[#EADBC6] hover:text-[#D4AF37]">
                  <i className="fas fa-search"></i>
                </button>
                <button className="text-[#EADBC6] hover:text-[#D4AF37] relative">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    3
                  </span>
                </button>
                <button className="text-[#EADBC6] hover:text-[#D4AF37]">
                  <i className="far fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;