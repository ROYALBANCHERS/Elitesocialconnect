import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         <SectionTitle title="Who We Are" subtitle="A team of dreamers, doers, and creators." />
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
                 <p className="text-2xl text-black font-medium leading-relaxed mb-8">
                    EliteSocialConnect was founded on a simple premise: Digital marketing should be transparent, beautiful, and effective.
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    We are a collective of strategists, designers, and developers who are passionate about building brands. We don't just act as a service provider; we partner with our clients to understand their business goals and craft bespoke solutions.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                     {['Data-Driven', 'Transparent', 'Creative', 'Results-Oriented'].map((item, i) => (
                         <div key={i} className="flex items-center gap-2">
                             <CheckCircle className="w-5 h-5 text-black" />
                             <span className="font-medium">{item}</span>
                         </div>
                     ))}
                 </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden bg-gray-100 h-[600px]">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team" className="w-full h-full object-cover" />
            </div>
         </div>
         
         <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center">
            <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                To bridge the gap between aesthetics and performance, creating digital experiences that leave a lasting impact.
            </p>
         </div>
      </div>
    </div>
  );
};