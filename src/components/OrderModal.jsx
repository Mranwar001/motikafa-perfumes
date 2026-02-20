// src/components/OrderModal.jsx
import React, { useEffect, useState } from 'react';

const OrderModal = ({ product, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
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
    const details = `🛍️ MOTIKAFA Order\n\nProduct: ${product.name}\nPrice: ${product.price}\nCategory: ${product.category}`;
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
      color: 'bg-green-500',
      action: () => {
        const message = encodeURIComponent(`I'm interested in: ${product.name} (${product.price})`);
        window.open(`https://wa.me/2348093939396?text=${message}`, '_blank');
        onClose();
      }
    },
    {
      id: 'email',
      name: 'Email',
      icon: 'far fa-envelope',
      color: 'bg-blue-500',
      action: () => {
        const subject = encodeURIComponent(`Order Inquiry: ${product.name}`);
        const body = encodeURIComponent(`I would like to order:\n\nProduct: ${product.name}\nPrice: ${product.price}`);
        window.location.href = `mailto:orders@motikafa.com?subject=${subject}&body=${body}`;
        onClose();
      }
    },
    {
      id: 'phone',
      name: 'Phone Call',
      icon: 'fas fa-phone-alt',
      color: 'bg-purple-500',
      action: () => {
        window.location.href = 'tel:+2348093939396';
        onClose();
      }
    },
    {
      id: 'copy',
      name: copied ? 'Copied!' : 'Copy Details',
      icon: copied ? 'fas fa-check' : 'far fa-copy',
      color: 'bg-gray-800',
      description: 'Copy product info',
      action: handleCopy
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl max-w-lg w-full shadow-2xl animate-slideUp">
        <div className="p-6 border-b">
          <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold">Complete Your Order</h3>
        </div>

        <div className="p-6 bg-gradient-to-r from-[#FFF8E7] to-white">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-[#8B0000]">{product.price}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={method.action}
              className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center space-x-4"
            >
              <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white`}>
                <i className={method.icon}></i>
              </div>
              <span className="font-semibold">{method.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
