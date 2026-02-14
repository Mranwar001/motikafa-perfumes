import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#FFF8E7] pattern-overlay">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="scroll-reveal">
            <span className="section-subtitle">GET IN TOUCH</span>
            <h2 className="section-title">Visit Our Boutique</h2>
            <div className="divider w-20 ml-0"></div>
            
            <p className="text-gray-700 text-lg mb-12 leading-relaxed">
              Experience the luxury of MOTIKAFA in person. Visit our flagship store 
              in the heart of Kano for a personalized fragrance consultation.
            </p>

            {/* Business Info Cards */}
            <div className="space-y-8">
              {/* Owner */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-[#8B0000]/10 group-hover:bg-[#8B0000] rounded-lg flex items-center justify-center transition-all duration-500">
                  <i className="fas fa-crown text-2xl text-[#8B0000] group-hover:text-[#D4AF37] transition-colors"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-sm uppercase tracking-[4px] text-[#8B0000] mb-2">
                    Business Owner
                  </h3>
                  <p className="text-2xl font-['Cormorant_Garamond'] font-bold text-[#0A0A0A]">
                    Zahra'u Inuwa Auwal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-[#8B0000]/10 group-hover:bg-[#8B0000] rounded-lg flex items-center justify-center transition-all duration-500">
                  <i className="fas fa-phone-alt text-2xl text-[#8B0000] group-hover:text-[#D4AF37] transition-colors"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-sm uppercase tracking-[4px] text-[#8B0000] mb-2">
                    Direct Line
                  </h3>
                  <p className="text-2xl font-['Cormorant_Garamond'] font-bold text-[#0A0A0A]">
                    0809 393 9396
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    24/7 Concierge Service
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-[#8B0000]/10 group-hover:bg-[#8B0000] rounded-lg flex items-center justify-center transition-all duration-500">
                  <i className="fas fa-map-marker-alt text-2xl text-[#8B0000] group-hover:text-[#D4AF37] transition-colors"></i>
                </div>
                <div className="ml-6">
                  <h3 className="text-sm uppercase tracking-[4px] text-[#8B0000] mb-2">
                    Flagship Store
                  </h3>
                  <p className="text-xl font-['Cormorant_Garamond'] font-bold text-[#0A0A0A] leading-relaxed">
                    Hausawa, Court Road, Tarauni,
                    <br />
                    Kano 700233, Kano
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    <i className="far fa-clock mr-2"></i>
                    Mon - Sat: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Badge */}
            <div className="mt-12 inline-flex items-center space-x-4 bg-[#0A0A0A] text-white px-8 py-4">
              <i className="fas fa-certificate text-[#D4AF37] text-2xl"></i>
              <div>
                <p className="text-sm uppercase tracking-wider">Verified Luxury Partner</p>
                <p className="text-xs text-[#D4AF37]">Member of Arabian Perfumery Council</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map/Image */}
          <div className="relative scroll-reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MOTIKAFA Boutique"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent"></div>
              
              {/* Address Card */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0A0A0A] to-transparent">
                <div className="flex items-center text-white">
                  <i className="fas fa-location-dot text-[#D4AF37] text-xl mr-3"></i>
                  <div>
                    <p className="font-semibold">MOTIKAFA Arabian Perfumes</p>
                    <p className="text-sm text-[#EADBC6]">Court Road, Tarauni, Kano</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37] rounded-full flex flex-col items-center justify-center animate-float">
              <span className="text-[#0A0A0A] text-2xl font-bold">25+</span>
              <span className="text-[#0A0A0A] text-xs uppercase tracking-wider">Years</span>
              <span className="text-[#0A0A0A] text-xs">of Luxury</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;