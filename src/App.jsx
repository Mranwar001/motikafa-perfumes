// src/components/OrderModal.jsx
import React, { useEffect } from 'react';

const OrderModal = ({ product, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Close on escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!product) return null;

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => {
        const message = encodeURIComponent(
          `Hello! I'm interested in ordering:\n\n🛍️ *${product.name}*\n💰 ${product.price}\n📦 Category: ${product.category}\n\nPlease provide payment and delivery details.`
        );
        window.open(`https://wa.me/234700000000?text=${message}`, '_blank');
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: 'far fa-envelope',
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => {
        const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
        const body = encodeURIComponent(
          `I would like to order:\n\nProduct: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}\n\nPlease provide:\n- Payment options\n- Delivery fees\n- Available sizes/colors`
        );
        window.location.href = `mailto:orders@motikafa.com?subject=${subject}&body=${body}`;
      }
    },
    {
      id: 'phone',
      name: 'Phone Call',
      icon: 'fas fa-phone-alt',
      color: 'bg-purple-500 hover:bg-purple-600',
      action: () => {
        window.location.href = 'tel:+234700000000';
      }
    },
    {
      id: 'copy',
      name: 'Copy Details',
      icon: 'far fa-copy',
      color: 'bg-[#1A1A1A] hover:bg-[#333333]',
      action: () => {
        const details = `${product.name}\n${product.price}\n${product.category}\n\nOrder via: WhatsApp/Email/Phone`;
        navigator.clipboard.writeText(details);
        alert('Product details copied! 📋');
      }
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl animate-slideUp">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1A1A1A]">
                Complete Your Order
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Choose how you'd like to proceed
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <i className="fas fa-times text-gray-500"></i>
            </button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="p-6 bg-gradient-to-r from-[#FFF8E7] to-white">
          <div className="flex items-center space-x-4">
            {/* Product Image */}
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.images?.[0] || product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex-1">
              <h4 className="font-['Cormorant_Garamond'] text-lg font-bold text-[#1A1A1A]">
                {product.name}
              </h4>
              <p className="text-sm text-[#8B0000] mb-1">{product.category}</p>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-[#8B0000]">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="p-6 space-y-3">
          <p className="text-sm font-medium text-gray-700 mb-4">
            <i className="fas fa-phone-alt mr-2 text-[#D4AF37]"></i>
            Select contact method:
          </p>
          
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={method.action}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 flex items-center space-x-4 group"
            >
              <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white text-xl transition-transform group-hover:scale-110`}>
                <i className={method.icon}></i>
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#1A1A1A]">{method.name}</p>
                <p className="text-xs text-gray-500">
                  {method.id === 'whatsapp' && 'Quick response via WhatsApp'}
                  {method.id === 'email' && 'Send order inquiry by email'}
                  {method.id === 'phone' && 'Call us to place order'}
                  {method.id === 'copy' && 'Copy product details'}
                </p>
              </div>
              <i className="fas fa-chevron-right text-gray-400 group-hover:text-[#D4AF37] transition-colors"></i>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 rounded-b-2xl text-center">
          <p className="text-xs text-gray-500">
            <i className="far fa-clock mr-1"></i>
            Our team will respond within 24 hours
          </p>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default OrderModal;
