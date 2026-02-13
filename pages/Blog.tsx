import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Insights" subtitle="Thoughts on design and marketing." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="bg-gray-100 rounded-3xl h-64 mb-6 overflow-hidden">
                             <img src={`https://picsum.photos/seed/${i + 100}/800/600`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Blog" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">Trends</span>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-600 transition-colors">The Future of Digital Luxury in 2025</h3>
                        <Link to="#" className="text-black font-semibold border-b border-black pb-0.5">Read Article</Link>
                    </div>
                ))}
            </div>
            
             <div className="mt-20 bg-gray-50 rounded-[3rem] p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Want more insights?</h3>
                <Link to="/ai-tools">
                    <Button variant="black">Try our AI Generator</Button>
                </Link>
            </div>
        </div>
    </div>
  );
};