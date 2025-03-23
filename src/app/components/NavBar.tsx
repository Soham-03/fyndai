// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold flex items-center">
          <span className="text-[#ff5c35]">Fynd</span>
          <span>AI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#products" className="text-sm hover:text-[#ff5c35] transition">Products</Link>
          <Link href="#about" className="text-sm hover:text-[#ff5c35] transition">About</Link>
          <Link href="#resources" className="text-sm hover:text-[#ff5c35] transition">Resources</Link>
          <Link href="#pricing" className="text-sm hover:text-[#ff5c35] transition">Pricing</Link>
          <Link href="#blog" className="text-sm hover:text-[#ff5c35] transition">Blog</Link>
          <Link href="/login" className="text-sm hover:text-[#ff5c35] transition">Log in</Link>
          <Link 
            href="/signup" 
            className="bg-white text-black px-4 py-1.5 rounded-full text-sm hover:bg-[#ff5c35] hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
        
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;