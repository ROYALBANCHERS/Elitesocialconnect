import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Insights', path: '/blog' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center group relative z-50">
            <span className="text-2xl md:text-3xl font-bold tracking-tighter text-black">
              Elite<span className="font-light">Social</span>Connect
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-wide transition-colors hover:text-gray-500 ${
                      isActive ? 'text-black font-bold' : 'text-gray-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <NavLink to="/contact">
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
                Contact Us <ArrowUpRight className="w-4 h-4" />
              </button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-2xl font-bold uppercase tracking-widest ${
                  isActive ? 'text-black' : 'text-gray-400'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="mt-8">
            <button className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-bold">
              Contact Us
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};
