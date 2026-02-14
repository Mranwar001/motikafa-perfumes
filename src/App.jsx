// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategory from './components/ProductCategory';
import FeaturedCarousel from './components/FeaturedCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

// ✅ Corrected import (case-sensitive on Vercel)
import {
  perfumeProducts,
  fabricProducts,
  accessoryProducts,
  homeGoodsProducts,
} from './assets/ProductImages.jsx';

function App() {
  useEffect(() => {
    // Initialize scroll reveal
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => el.classList.remove('revealed'));
  }, []);

  return (
    <ScrollReveal>
      <div className="relative bg-[#FFF8E7]">
        <Navbar />
        <Hero />
        
        {/* Perfumes Section */}
        <ProductCategory
          id="perfumes"
          title="Arabian Perfumes"
          subtitle="SIGNATURE COLLECTION"
          products={perfumeProducts}
          bgColor="bg-white"
        />
        
        {/* Fabrics Section */}
        <ProductCategory
          id="fabrics"
          title="Premium Fabrics"
          subtitle="LUXURY TEXTILES"
          products={fabricProducts}
          bgColor="bg-[#FFF8E7]"
        />
        
        {/* Featured Carousel */}
        <FeaturedCarousel />
        
        {/* Accessories Section */}
        <ProductCategory
          id="accessories"
          title="Luxury Accessories"
          subtitle="COMPLETE YOUR LOOK"
          products={accessoryProducts}
          bgColor="bg-white"
        />
        
        {/* Home Goods Section */}
        <ProductCategory
          id="home-goods"
          title="Home Collection"
          subtitle="ELEVATE YOUR SPACE"
          products={homeGoodsProducts}
          bgColor="bg-[#FFF8E7]"
        />
        
        <ContactSection />
        <Footer />
      </div>
    </ScrollReveal>
  );
}

export default App;
