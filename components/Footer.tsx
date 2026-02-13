import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 rounded-t-[3rem] mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Column 1: Brand */}
            <div className="space-y-8">
                <NavLink to="/" className="block">
                    <span className="text-3xl font-bold tracking-tighter text-white">
                    Elite<span className="font-light">Social</span>Connect
                    </span>
                </NavLink>
                <div className="space-y-2 text-gray-400">
                    <p className="hover:text-white transition-colors cursor-pointer">hello@elitesocialconnect.com</p>
                    <p className="hover:text-white transition-colors cursor-pointer">+91 9899632733</p>
                </div>
                <NavLink to="/contact">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 mt-4">
                        Contact Us <ArrowUpRight className="w-4 h-4" />
                    </button>
                </NavLink>
            </div>

            {/* Column 2: Industries */}
            <div>
                <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-8">Industries</h4>
                <ul className="space-y-4">
                    {['Architecture & Interior Design', 'Hospitality', 'Lifestyle & Luxury', 'Real Estate', 'Healthcare', 'Education'].map((item, i) => (
                        <li key={i}>
                            <NavLink to="/portfolio" className="text-lg hover:text-gray-300 transition-colors block py-1">
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 3: Services */}
            <div>
                <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-8">Services</h4>
                <ul className="space-y-4">
                    {['Branding', 'Content & Editorial', 'Public Relations', 'Social Media Management', 'Digital Marketing', 'Web Design', 'Event Management', 'Photography & Videography'].map((item, i) => (
                        <li key={i}>
                            <NavLink to="/services" className="text-lg hover:text-gray-300 transition-colors block py-1">
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Column 4: Quick Links */}
            <div>
                <h4 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-8">Quick Links</h4>
                <ul className="space-y-4">
                    <li><NavLink to="/about" className="text-lg hover:text-gray-300 transition-colors block py-1">Who we are</NavLink></li>
                    <li><NavLink to="/about" className="text-lg hover:text-gray-300 transition-colors block py-1">Our philosophy</NavLink></li>
                    <li><NavLink to="/blog" className="text-lg hover:text-gray-300 transition-colors block py-1">Insights</NavLink></li>
                    <li><NavLink to="/contact" className="text-lg hover:text-gray-300 transition-colors block py-1">Careers</NavLink></li>
                    <li><NavLink to="/about" className="text-lg hover:text-gray-300 transition-colors block py-1">Our team</NavLink></li>
                    <li><NavLink to="/admin" className="text-lg hover:text-gray-300 transition-colors block py-1">Admin Panel</NavLink></li>
                </ul>
            </div>
        </div>

        {/* Locations */}
        <div className="text-center py-12 border-t border-white/10 mb-8">
            <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white/80">
                MUMBAI | DELHI | GURUGRAM | BANGALORE
            </h3>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()}. ALL RIGHTS RESERVED</p>
          
          <div className="flex gap-8">
            <NavLink to="/legal" className="hover:text-white transition-colors">TERMS</NavLink>
            <NavLink to="/legal" className="hover:text-white transition-colors">PRIVACY</NavLink>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
