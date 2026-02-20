// src/components/OrderModal.jsx
import React, { useEffect, useState } from 'react';

const OrderModal = ({ product, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

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

  const handleCopy = async () => {
    const details = `🛍️ *MOTIKAFA Order Details* 🛍️\n\n` +
      `Product: ${product.name}\n` +
      `Price: ${product.price}\n` +
      `Category: ${product.category}\n` +
      `${product.originalPrice ? `Original: ${product.originalPrice}\n` : ''}` +
      `${product.description ? `Description: ${product.description}\n` : ''}\n` +
      `📞 Contact: +234 809 393 9396\n` +
      `📧 Email: orders@motikafa.com`;
    
    try {
      await navigator.clipboard.writeText(details);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Quick response within minutes',
      action: () => {
        const message = encodeURIComponent(
          `🛍️ *New Order Inquiry - MOTIKAFA* 🛍️\n\n` +
          `*Product:* ${product.name}\n` +
          `*Price:* ${product.price}\n` +
          `*Category:* ${product.category}\n` +
          `${product.originalPrice ? `*Original:* ${product.originalPrice}\n` : ''}\n` +
          `Please provide payment options and delivery details.`
        );
        window.open(`https://wa.me/2348093939396?text=${message}`, '_blank');
        onClose(); // Close modal after action
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: 'far fa-envelope',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Send detailed inquiry',
      action: () => {
        const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
        const body = encodeURIComponent(
          `I would like to order:\n\n` +
          `Product: ${product.name}\n` +
          `Price: ${product.price}\n` +
          `Category: ${product.category}\n` +
          `${product.description ? `Description: ${product.description}\n` : ''}\n` +
          `Please provide:\n` +
          `- Payment options (Bank Transfer/Card)\n` +
          `- Delivery fees to my location\n` +
          `- Available sizes/colors/variations\n\n` +
          `Thank you!`
        );
        window.location.href = `mailto:orders@motikafa.com?subject=${subject}&body=${body}`;
        onClose();
      }
    },
    {
      id: 'phone',
      name: 'Phone Call',
      icon: 'fas fa-phone-alt',
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Speak with our concierge',
      action: () => {
        window.location.href = 'tel:+2348093939396';
        onClose();
      }
    },
    {
      id: 'copy',
      name: copied ? 'Copied!' : 'Copy Details',
      icon: copied ? 'fas fa-check' : 'far fa-copy',
      color: copied ? 'bg-green-500 hover:bg-green-600' : 'bg-[#1A1A1A] hover:bg-[#333333]',
      description: copied ? 'Details copied to clipboard' : 'Copy product info',
      action: handleCopy
    }
  ];

  // Additional quick actions
  const quickActions = [
    {
      name: 'Request Sample',
      icon: 'fas fa-flask',
      action: () => {
        const message = encodeURIComponent(
          `Hi! I'd like to request a sample of ${product.name} before ordering.`
        );
        window.open(`https://wa.me/2348093939396?text=${message}`, '_blank');
      }
    },
    {
      name: 'Check Availability',
      icon: 'fas fa-check-circle',
      action: () => {
        const message = encodeURIComponent(
          `Is ${product.name} currently in stock? I'm interested in purchasing.`
        );
        window.open(`https://wa.me/2348093939396?text=${message}`, '_blank');
      }
    },
    {
      name: 'Wholesale Price',
      icon: 'fas fa-tags',
      action: () => {
        const message = encodeURIComponent(
          `I'm interested in wholesale pricing for ${product.name}. Please share bulk rates.`
        );
        window.open(`https://wa.me/2348093939396?text=${message}`, '_blank');
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
      <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl animate-slideUp overflow-hidden">
        {/* Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F5E6B2] to-[#D4AF37]"></div>

        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1A1A1A] flex items-center">
                <i className="fas fa-crown text-[#D4AF37] mr-2 text-xl"></i>
                Complete Your Order
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Choose your preferred contact method
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-gray-500"></i>
            </button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="p-6 bg-gradient-to-r from-[#FFF8E7] to-white">
          <div className="flex items-center space-x-4">
            {/* Product Image with Badge */}
            <div className="relative">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 ring-2 ring-[#D4AF37]/20">
                <img 
                  src={product.images?.[0] || product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.badge && (
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#1A1A1A] text-[10px] font-bold px-2 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
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
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fas fa-star text-xs ${
                        i < product.rating ? 'text-[#D4AF37]' : 'text-gray-200'
                      }`}
                    ></i>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="p-6 space-y-3">
          <p className="text-sm font-medium text-gray-700 mb-4 flex items-center">
            <i className="fas fa-phone-alt mr-2 text-[#D4AF37]"></i>
            Select contact method:
          </p>
          
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={method.action}
              onMouseEnter={() => setSelectedMethod(method.id)}
              onMouseLeave={() => setSelectedMethod(null)}
              className={`w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 flex items-center space-x-4 group ${
                selectedMethod === method.id ? 'ring-2 ring-[#D4AF37]' : ''
              }`}
            >
              <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                <i className={method.icon}></i>
              </div>
              <div className="flex-1 text-left">
                <p className="font-semibold text-[#1A1A1A]">{method.name}</p>
                <p className="text-xs text-gray-500">{method.description}</p>
              </div>
              <div className="text-right">
                <i className="fas fa-chevron-right text-gray-400 group-hover:text-[#D4AF37] transition-colors"></i>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 mb-3">Quick actions:</p>
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action) => (
              <button
                key={action.name}
                onClick={action.action}
                className="px-4 py-2 bg-gray-50 hover:bg-[#D4AF37] text-[#4A4A4A] hover:text-[#1A1A1A] rounded-lg text-xs transition-all duration-300 flex items-center space-x-1 group"
              >
                <i className={`${action.icon} group-hover:scale-110 transition-transform`}></i>
                <span>{action.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer with Trust Badges */}
        <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <i className="fas fa-shield-alt text-[#D4AF37] text-xs"></i>
                <span className="text-xs text-gray-500">Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="fas fa-truck text-[#D4AF37] text-xs"></i>
                <span className="text-xs text-gray-500">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-1">
                <i className="fas fa-undo-alt text-[#D4AF37] text-xs"></i>
                <span className="text-xs text-gray-500">Easy Returns</span>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              <i className="far fa-clock mr-1 text-[#D4AF37]"></i>
              24h response
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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
