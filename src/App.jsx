// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategory from './components/ProductCategory';
import FeaturedCarousel from './components/FeaturedCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import OrderModal from './components/OrderModal';

// Import product data
import {
  perfumeProducts,
  fabricProducts,
  accessoryProducts,
  homeGoodsProducts,
} from './assets/ProductImages';

function App() {
  const [orderProduct, setOrderProduct] = useState(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
    
    // Initialize scroll reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => el.classList.remove('revealed'));
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Handle order from any component
  const handleOrderClick = (product) => {
    console.log('Order clicked:', product); // Debug log
    setOrderProduct(product);
    setIsOrderModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
    setOrderProduct(null);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#FDF9F2] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#1A1A1A] font-['Cormorant_Garamond'] text-xl">MOTIKAFA</p>
          <p className="text-[#D4AF37] text-sm">Luxury Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ScrollReveal>
      <div className="relative min-h-screen bg-gradient-to-b from-[#FDF9F2] to-white">
        {/* Pass handleOrderClick to Navbar */}
        <Navbar onOrderClick={handleOrderClick} />
        
        {/* Pass handleOrderClick to Hero */}
        <Hero onOrderClick={handleOrderClick} />
        
        {/* Decorative divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center -top-6">
            <div className="w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        {/* Perfumes Section */}
        <ProductCategory
          id="perfumes"
          title="Arabian Perfumes"
          subtitle="SIGNATURE COLLECTION"
          products={perfumeProducts}
          bgColor="bg-white"
          onOrderClick={handleOrderClick}
        />
        
        {/* Fabrics Section */}
        <ProductCategory
          id="fabrics"
          title="Premium Fabrics"
          subtitle="LUXURY TEXTILES"
          products={fabricProducts}
          bgColor="bg-[#FDF9F2]"
          onOrderClick={handleOrderClick}
        />
        
        {/* Featured Carousel */}
        <FeaturedCarousel onOrderClick={handleOrderClick} />
        
        {/* Accessories Section */}
        <ProductCategory
          id="accessories"
          title="Luxury Accessories"
          subtitle="COMPLETE YOUR LOOK"
          products={accessoryProducts}
          bgColor="bg-white"
          onOrderClick={handleOrderClick}
        />
        
        {/* Home Goods Section */}
        <ProductCategory
          id="home-goods"
          title="Home Collection"
          subtitle="ELEVATE YOUR SPACE"
          products={homeGoodsProducts}
          bgColor="bg-[#FDF9F2]"
          onOrderClick={handleOrderClick}
        />
        
        {/* Contact Section */}
        <ContactSection onOrderClick={handleOrderClick} />
        
        {/* Footer */}
        <Footer onOrderClick={handleOrderClick} />

        {/* Order Modal */}
        {isOrderModalOpen && (
          <OrderModal
            product={orderProduct}
            onClose={handleCloseModal}
          />
        )}

        {/* Floating Action Button for mobile */}
        <div className="fixed bottom-6 right-6 z-40 lg:hidden">
          <button
            onClick={() => handleOrderClick({ 
              name: "Quick Assistance", 
              price: "Contact for price",
              category: "Customer Service"
            })}
            className="w-14 h-14 bg-[#D4AF37] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            aria-label="Quick order"
          >
            <i className="fas fa-headset text-xl"></i>
          </button>
        </div>

        {/* Back to top button */}
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white/80 backdrop-blur-sm hover:bg-[#D4AF37] text-[#1A1A1A] hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/20"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default App;
