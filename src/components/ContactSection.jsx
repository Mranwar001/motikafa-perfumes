import React, { useState } from 'react';

const ContactSection = ({ onOrderClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const quickContactMethods = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: 'bg-green-500',
      action: () => {
        const message = encodeURIComponent("Hello! I'd like to inquire about your luxury products.");
        window.open(`https://wa.me/2348093939396?text=${message}`, '_blank');
      }
    },
    {
      name: 'Phone Call',
      icon: 'fas fa-phone-alt',
      color: 'bg-purple-500',
      action: () => {
        window.location.href = 'tel:+2348093939396';
      }
    },
    {
      name: 'Email',
      icon: 'far fa-envelope',
      color: 'bg-blue-500',
      action: () => {
        window.location.href = 'mailto:info@motikafa.com?subject=Luxury%20Inquiry';
      }
    },
    {
      name: 'Visit Store',
      icon: 'fas fa-map-marker-alt',
      color: 'bg-[#D4AF37]',
      action: () => {
        window.open('https://maps.google.com/?q=Hausawa+Court+Road+Tarauni+Kano', '_blank');
      }
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM', status: 'Open' },
    { day: 'Saturday', hours: '11:00 AM - 6:00 PM', status: 'Open' },
    { day: 'Sunday', hours: 'Closed', status: 'Closed' }
  ];

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-gradient-to-b from-[#FDF9F2] to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B0000] rounded-full blur-3xl"></div>
      </div>

      {/* Arabic Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-5"></div>

      <div className="container-luxury px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 scroll-reveal">
          <span className="inline-block text-[#D4AF37] font-light tracking-[0.3em] text-sm uppercase mb-3">
            ROYAL CONCIERGE
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-4">
            Experience Luxury Firsthand
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Info */}
          <div className="scroll-reveal space-y-8">
            {/* Welcome Message */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4AF37]/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-crown text-3xl text-[#D4AF37]"></i>
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1A1A1A]">
                    Zahra'u Inuwa Auwal
                  </h3>
                  <p className="text-[#D4AF37] text-sm">Founder & Creative Director</p>
                </div>
              </div>
              
              <p className="text-[#4A4A4A] leading-relaxed">
                "Experience the essence of Arabian luxury. Visit our boutique for a 
                personalized fragrance consultation and discover our exclusive collections."
              </p>

              {/* Signature */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='40' viewBox='0 0 150 40'%3E%3Cpath d='M20,20 Q35,5 50,20 T80,20 T110,20' stroke='%23D4AF37' fill='none' stroke-width='2'/%3E%3C/svg%3E" 
                  alt="Signature"
                  className="opacity-70"
                />
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {quickContactMethods.map((method) => (
                <button
                  key={method.name}
                  onClick={method.action}
                  className="group relative overflow-hidden bg-white hover:bg-[#D4AF37] p-6 rounded-xl shadow-sm border border-[#D4AF37]/10 hover:border-transparent transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white mb-3 transition-transform group-hover:scale-110 mx-auto`}>
                    <i className={`${method.icon} text-xl`}></i>
                  </div>
                  <p className="text-sm font-semibold text-[#1A1A1A] group-hover:text-white transition-colors">
                    {method.name}
                  </p>
                </button>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4AF37]/10">
              <h4 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A] mb-6 flex items-center">
                <i className="far fa-clock text-[#D4AF37] mr-3"></i>
                Boutique Hours
              </h4>
              
              <div className="space-y-4">
                {businessHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <span className="text-[#4A4A4A]">{schedule.day}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-[#1A1A1A]">{schedule.hours}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        schedule.status === 'Open' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {schedule.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Holiday Notice */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-[#D4AF37] flex items-center">
                  <i className="fas fa-star mr-2"></i>
                  Extended hours during Ramadan
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4AF37]/10">
              <h4 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A] mb-6 flex items-center">
                <i className="fas fa-map-pin text-[#D4AF37] mr-3"></i>
                Flagship Boutique
              </h4>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-store text-[#D4AF37] text-xl"></i>
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-medium mb-2">MOTIKAFA Arabian Perfumes</p>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed mb-3">
                    Hausawa, Court Road, Tarauni,<br />
                    Kano 700233, Nigeria
                  </p>
                  <button
                    onClick={() => window.open('https://maps.google.com/?q=Hausawa+Court+Road+Tarauni+Kano', '_blank')}
                    className="text-[#D4AF37] hover:text-[#8B0000] text-sm font-semibold transition-colors flex items-center"
                  >
                    <i className="fas fa-directions mr-2"></i>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map & Form */}
          <div className="scroll-reveal space-y-8">
            {/* Map Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="aspect-[16/9] bg-[#1A1A1A] relative">
                <img
                  src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="MOTIKAFA Boutique"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent"></div>
                
                {/* Map Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="font-['Cormorant_Garamond'] text-xl font-bold">Visit Our Boutique</p>
                      <p className="text-sm text-[#EADBC6]">Experience luxury in person</p>
                    </div>
                    <button
                      onClick={() => window.open('https://maps.google.com/?q=Hausawa+Court+Road+Tarauni+Kano', '_blank')}
                      className="bg-[#D4AF37] hover:bg-white text-[#1A1A1A] hover:text-[#1A1A1A] px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300"
                    >
                      Open Map
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Gold Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#D4AF37] rounded-full flex flex-col items-center justify-center animate-float shadow-xl">
                <span className="text-[#1A1A1A] text-xl font-bold">25+</span>
                <span className="text-[#1A1A1A] text-[10px] uppercase tracking-wider">Years</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-[#D4AF37]/10">
              <h4 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1A1A1A] mb-6">
                Send a Message
              </h4>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="">Select Subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="custom">Custom Order</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white py-4 rounded-lg transition-all duration-300 font-semibold text-sm uppercase tracking-wider flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="bg-green-50 text-green-600 px-4 py-3 rounded-lg text-sm flex items-center animate-fadeIn">
                    <i className="fas fa-check-circle mr-2"></i>
                    Message sent successfully! We'll respond within 24 hours.
                  </div>
                )}
              </form>

              {/* Quick Response Guarantee */}
              <p className="text-xs text-center text-gray-400 mt-4">
                <i className="fas fa-shield-alt text-[#D4AF37] mr-1"></i>
                We guarantee a response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
