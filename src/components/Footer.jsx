import React, { useState } from 'react';

const Footer = ({ onOrderClick }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showQuickOrder, setShowQuickOrder] = useState(false);

  const quickLinks = [
    { name: 'Home', href: '#home', icon: 'fa-home' },
    { name: 'Perfumes', href: '#perfumes', icon: 'fa-spray-can' },
    { name: 'Fabrics', href: '#fabrics', icon: 'fa-tshirt' },
    { name: 'Accessories', href: '#accessories', icon: 'fa-gem' },
    { name: 'Home Goods', href: '#home-goods', icon: 'fa-home' },
    { name: 'Contact', href: '#contact', icon: 'fa-envelope' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: '#', color: 'hover:bg-[#1877F2]' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#', color: 'hover:bg-[#E4405F]' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', href: '#', color: 'hover:bg-[#25D366]' },
    { name: 'X Twitter', icon: 'fab fa-x-twitter', href: '#', color: 'hover:bg-[#1DA1F2]' },
    { name: 'TikTok', icon: 'fab fa-tiktok', href: '#', color: 'hover:bg-[#000000]' },
  ];

  const services = [
    { name: 'Wholesale Inquiry', icon: 'fa-truck', action: () => onOrderClick({ name: 'Wholesale Inquiry', category: 'B2B' }) },
    { name: 'Custom Orders', icon: 'fa-pen-ruler', action: () => onOrderClick({ name: 'Custom Order Request', category: 'Custom' }) },
    { name: 'Gift Cards', icon: 'fa-gift', action: () => onOrderClick({ name: 'Gift Card', category: 'Gift' }) },
    { name: 'Track Order', icon: 'fa-truck-fast', action: () => window.open('https://wa.me/234700000000', '_blank') },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#FDF9F2] to-white text-[#1A1A1A] pt-20 pb-8 border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8B0000] rounded-full blur-3xl"></div>
      </div>

      {/* Arabic Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-10"></div>

      <div className="container-luxury px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column - Larger */}
          <div className="lg:col-span-2 scroll-reveal">
            <div className="mb-6">
              <h3 className="text-3xl font-['Cormorant_Garamond'] font-bold text-[#1A1A1A] mb-2">
                MOTIKAFA
              </h3>
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <p className="text-[#4A4A4A] text-sm leading-relaxed mb-6 max-w-md">
              Luxury Arabian perfumes and premium lifestyle products. 
              Crafting timeless elegance since 2020, bringing the essence 
              of Arabian luxury to the world.
            </p>

            {/* Quick Order Button */}
            <button
              onClick={() => onOrderClick({ 
                name: "General Inquiry", 
                price: "Contact for price",
                category: "Customer Service"
              })}
              className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white rounded-md mb-6"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1A1A1A] rounded-full group-hover:w-full group-hover:h-full opacity-10"></span>
              <span className="relative flex items-center space-x-2 text-sm font-bold uppercase tracking-wider">
                <i className="fas fa-headset"></i>
                <span>CONCIERGE SERVICE</span>
              </span>
            </button>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] hover:text-white ${social.color} hover:border-transparent transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#D4AF37] mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]/30"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group flex items-center text-[#4A4A4A] hover:text-[#D4AF37] transition-all duration-300 text-sm"
                  >
                    <i className={`fas ${link.icon} text-xs mr-3 text-[#D4AF37] group-hover:translate-x-1 transition-transform`}></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#D4AF37] mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]/30"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={service.action}
                    className="group flex items-center text-[#4A4A4A] hover:text-[#D4AF37] transition-all duration-300 text-sm w-full text-left"
                  >
                    <i className={`fas ${service.icon} text-xs mr-3 text-[#D4AF37] group-hover:scale-110 transition-transform`}></i>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#D4AF37] mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]/30"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <i className="fas fa-map-marker-alt text-[#D4AF37] mt-1 mr-3 group-hover:scale-110 transition-transform"></i>
                <span className="text-[#4A4A4A] text-sm leading-relaxed">
                  Hausawa, Court Road, Tarauni,
                  <br />Kano 700233, Nigeria
                </span>
              </li>
              <li className="flex items-center group">
                <i className="fas fa-phone text-[#D4AF37] mr-3 group-hover:scale-110 transition-transform"></i>
                <a href="tel:+2348093939396" className="text-[#4A4A4A] hover:text-[#D4AF37] text-sm transition-colors">
                  +234 809 393 9396
                </a>
              </li>
              <li className="flex items-center group">
                <i className="far fa-envelope text-[#D4AF37] mr-3 group-hover:scale-110 transition-transform"></i>
                <a href="mailto:info@motikafa.com" className="text-[#4A4A4A] hover:text-[#D4AF37] text-sm transition-colors">
                  info@motikafa.com
                </a>
              </li>
              <li className="flex items-center group">
                <i className="far fa-clock text-[#D4AF37] mr-3 group-hover:scale-110 transition-transform"></i>
                <span className="text-[#4A4A4A] text-sm">
                  Mon - Sat: 9AM - 8PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative bg-gradient-to-r from-[#FFF8E7] to-white p-8 rounded-2xl border border-[#D4AF37]/20 mb-12 scroll-reveal">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-2xl font-['Cormorant_Garamond'] font-bold text-[#1A1A1A] mb-2">
                Join the Royal Circle
              </h4>
              <p className="text-[#4A4A4A] text-sm">
                Subscribe to receive exclusive offers, new collection previews, and VIP invitations.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex-1 w-full max-w-md">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-white border-2 border-[#D4AF37]/30 text-[#1A1A1A] px-6 py-4 pr-36 text-sm focus:outline-none focus:border-[#D4AF37] rounded-lg transition-all duration-300 group-hover:border-[#D4AF37]"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              
              {/* Success Message */}
              {isSubscribed && (
                <div className="absolute -bottom-8 left-0 text-green-600 text-sm animate-fadeIn">
                  <i className="fas fa-check-circle mr-1"></i>
                  Successfully subscribed!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-light my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Copyright */}
          <div className="text-[#4A4A4A] text-sm order-3 lg:order-1">
            © {new Date().getFullYear()} MOTIKAFA. All rights reserved.
          </div>
          
          {/* Brand Tagline */}
          <div className="flex items-center space-x-4 order-1 lg:order-2">
            <span className="text-[#D4AF37] text-sm font-['Cormorant_Garamond'] font-bold">
              Luxury Beyond Scents
            </span>
            <span className="text-[#D4AF37]/30 text-xs">✦</span>
            <span className="text-[#4A4A4A] text-xs flex items-center">
              <i className="fas fa-heart text-[#D4AF37] mr-1"></i>
              Made in Kano
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6 order-2 lg:order-3">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onOrderClick({ name: 'Privacy Policy Request', category: 'Legal' });
              }}
              className="text-[#4A4A4A] hover:text-[#D4AF37] text-xs transition-colors"
            >
              Privacy
            </a>
            <span className="text-[#D4AF37]/30">|</span>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onOrderClick({ name: 'Terms of Use Inquiry', category: 'Legal' });
              }}
              className="text-[#4A4A4A] hover:text-[#D4AF37] text-xs transition-colors"
            >
              Terms
            </a>
            <span className="text-[#D4AF37]/30">|</span>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                onOrderClick({ name: 'Returns & Refunds', category: 'Customer Service' });
              }}
              className="text-[#4A4A4A] hover:text-[#D4AF37] text-xs transition-colors"
            >
              Returns
            </a>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex justify-center items-center space-x-4 mt-8 pt-4 border-t border-[#D4AF37]/10">
          <span className="text-[#4A4A4A] text-xs">We Accept:</span>
          <i className="fab fa-cc-visa text-xl text-[#4A4A4A] hover:text-[#D4AF37] transition-colors"></i>
          <i className="fab fa-cc-mastercard text-xl text-[#4A4A4A] hover:text-[#D4AF37] transition-colors"></i>
          <i className="fab fa-cc-paypal text-xl text-[#4A4A4A] hover:text-[#D4AF37] transition-colors"></i>
          <i className="fab fa-cc-apple-pay text-xl text-[#4A4A4A] hover:text-[#D4AF37] transition-colors"></i>
          <span className="text-xs text-[#4A4A4A] ml-2">Bank Transfer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
