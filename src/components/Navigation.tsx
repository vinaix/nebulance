import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#landing' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'w-full max-w-6xl mx-4' : 'w-full max-w-7xl mx-8'
      }`}>
      <div
        className="backdrop-blur-[20px] bg-white/85 border border-gray-900/6 rounded-2xl shadow-[0_8px_32px_rgba(17,24,39,0.04),0_1px_2px_rgba(17,24,39,0.08)]"
        style={{
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8), 0 8px 32px rgba(17,24,39,0.04), 0 1px 2px rgba(17,24,39,0.08)'
        }}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-xl font-bold text-blue-600 tracking-[-1.2px]"
              style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
            >
              NEBULANCE
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 font-medium hover:text-blue-600 transition-all duration-200 hover:scale-[1.01] hover:-translate-y-0.5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl border border-blue-600/20 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(17,24,39,0.12)] transition-all duration-200 hover:-translate-y-1"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-900/4 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-900/8 px-8 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;