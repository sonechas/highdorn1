import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties', hasDropdown: true },
    { id: 'people', label: 'People' },
    { id: 'pensions', label: 'Pensions' },
    { id: 'financials', label: 'Financials' },
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
    setIsPropertiesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-nav shadow-lg' 
        : 'bg-white/80 backdrop-blur-nav'
    }`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavigation('home')}
          >
            <img 
              src="/UKProjLogo.png" 
              alt="UK Project Logo" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-brand-neutral-dark' : 'text-white'
              }`}>
              </span>
              <div className={`text-xs font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-gray-200'
              }`}>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        currentPage === item.id
                          ? 'text-brand-primary'
                          : isScrolled 
                            ? 'text-brand-neutral-dark hover:text-brand-primary' 
                            : 'text-white hover:text-brand-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-3 w-3" />
                    </button>
                    {isPropertiesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        <button
                          onClick={() => handleNavigation('properties')}
                          className="block w-full text-left px-4 py-2 text-sm text-brand-neutral-dark hover:bg-brand-secondary-bg hover:text-brand-primary transition-colors duration-150"
                        >
                          All Properties
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === item.id
                        ? 'text-brand-primary'
                        : isScrolled 
                          ? 'text-brand-neutral-dark hover:text-brand-primary' 
                          : 'text-white hover:text-brand-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            
            {/* Contact Us Button */}
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-brand-primary text-white px-6 py-2 rounded-md font-medium hover:bg-brand-primary-dark transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-brand-neutral-dark hover:text-brand-primary' 
                  : 'text-white hover:text-brand-primary'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-brand-primary bg-brand-secondary-bg'
                    : 'text-brand-neutral-dark hover:text-brand-primary hover:bg-brand-secondary-bg'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('contact')}
              className="w-full bg-brand-primary text-white px-3 py-2 rounded-md font-medium hover:bg-brand-primary-dark transition-colors duration-200 mt-4"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;