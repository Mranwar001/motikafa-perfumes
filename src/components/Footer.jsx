import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Perfumes', href: '#perfumes' },
    { name: 'Fabrics', href: '#fabrics' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Home Goods', href: '#home-goods' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '\f09a', href: '#' },
    { name: 'Instagram', icon: '\f16d', href: '#' },
    { name: 'WhatsApp', icon: '\f232', href: '#' },
    { name: 'Twitter', icon: '\f099', href: '#' },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 border-t border-[#D4AF37]/20">
      <div className="container-luxury">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-['Cormorant_Garamond'] font-bold gold-text mb-6">
              MOTIKAFA
            </h3>
            <p className="text-[#EADBC6] text-sm leading-relaxed mb-6">
              Luxury Arabian perfumes and premium lifestyle products. 
              Crafting timeless elegance since 2020.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300"
                  dangerouslySetInnerHTML={{
                    __html: `<i class="fab fa-${social.name.toLowerCase()}"></i>`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#D4AF37] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#EADBC6] hover:text-[#D4AF37] transition-colors text-sm flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-[#D4AF37]"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#D4AF37] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#D4AF37] mt-1 mr-3"></i>
                <span className="text-[#EADBC6] text-sm">
                  Hausawa, Court Road, Tarauni,
                  <br />Kano 700233, Kano
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-[#D4AF37] mr-3"></i>
                <span className="text-[#EADBC6] text-sm">0809 393 9396</span>
              </li>
              <li className="flex items-center">
                <i className="far fa-envelope text-[#D4AF37] mr-3"></i>
                <span className="text-[#EADBC6] text-sm">info@motikafa.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-['Cormorant_Garamond'] font-bold text-[#D4AF37] mb-6">
              Royal Updates
            </h4>
            <p className="text-[#EADBC6] text-sm mb-4">
              Subscribe to receive exclusive offers and new collection previews.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 text-white px-4 py-3 pr-24 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button className="absolute right-0 top-0 h-full bg-[#D4AF37] px-4 text-[#0A0A0A] font-semibold text-sm hover:bg-[#8B0000] hover:text-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D4AF37]/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-[#EADBC6] text-sm">
            © {new Date().getFullYear()} MOTIKAFA Arabian Perfumes. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-[#D4AF37] text-sm">Luxury Beyond Scents</span>
            <span className="text-[#EADBC6] text-xs">|</span>
            <span className="text-[#EADBC6] text-xs">Made with ❤️ in Kano</span>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-[#EADBC6] hover:text-[#D4AF37] text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#EADBC6] hover:text-[#D4AF37] text-xs transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;