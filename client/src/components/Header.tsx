<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 098209bc (Add a travel blog website)
import { Link, useLocation } from "wouter";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
=======
>>>>>>> 098209bc (Add a travel blog website)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-paper'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo with animated sun */}
        <Link href="/" className="group flex items-center">
          <div className="relative mr-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
            <div className="absolute w-full h-full">
              {/* Sun rays */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{ 
                    transformOrigin: 'center', 
                    transform: `rotate(${i * 45}deg) translateY(-6px)`,
                    opacity: '0.8',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
          <span className="text-2xl md:text-3xl font-display text-primary group-hover:text-accent transition-all duration-300 tracking-wide">
            Siddhant's Adventure diary
          </span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-primary hover:text-accent transition-colors focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { path: '/', label: 'home' },
            { path: '/blog', label: 'adventures' },
            { path: '/gallery', label: 'photo diary' },
            { path: '/about', label: 'about me' }
          ].map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`
                relative px-4 py-2 font-handwriting text-lg text-dark hover:text-primary
                transition-all duration-300 rounded-full
                ${isActive(item.path) ? 'text-white bg-primary bg-opacity-10' : ''}
              `}
            >
              {item.label}
              {isActive(item.path) && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-primary text-sm">
                  ✨
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`
          fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300
          ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        onClick={closeMobileMenu}
      />
      
      <nav 
        className={`
          fixed right-0 top-0 h-full w-64 bg-paper shadow-xl z-50 p-6
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end mb-8">
          <button 
            onClick={closeMobileMenu}
            className="text-dark hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col space-y-4">
          {[
            { path: '/', label: 'home', emoji: '🏠' },
            { path: '/blog', label: 'adventures', emoji: '✈️' },
            { path: '/gallery', label: 'photo diary', emoji: '📸' },
            { path: '/about', label: 'about me', emoji: '👋' }
          ].map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`
                font-handwriting text-xl p-2 rounded-lg flex items-center
                ${isActive(item.path) 
                  ? 'bg-primary bg-opacity-10 text-primary' 
                  : 'text-dark hover:text-primary hover:bg-primary hover:bg-opacity-5'}
                transition-all duration-200
              `}
              onClick={closeMobileMenu}
            >
              <span className="mr-3">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-0 w-full px-6">
          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-500 font-handwriting">thanks for visiting my little corner of the web! ♥</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
