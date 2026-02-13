import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { portfolio } from '../data';

export const Portfolio: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-20">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle 
            title="Selected Work" 
            subtitle="Showcasing successful brand transformations." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {portfolio.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                    <div className="overflow-hidden rounded-3xl mb-6 aspect-[4/3] bg-gray-100">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                            <p className="text-gray-500">{item.category} — {item.year}</p>
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-widest border border-gray-200 rounded-full px-3 py-1">
                            {item.client}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};