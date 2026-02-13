import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data';

export const Services: React.FC = () => {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle 
            title="Our Expertise" 
            subtitle="Full-spectrum digital solutions tailored for growth." 
            center
        />

        <div className="grid grid-cols-1 gap-8 mt-20">
          {services.map((service, index) => (
            <Link key={service.id} to={`/services/${service.slug}`} className="group relative block">
               <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-12 items-center bg-gray-50 rounded-[3rem] p-8 md:p-12 transition-all hover:bg-gray-100`}>
                  <div className="w-full md:w-1/2">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                      </div>
                  </div>
                  <div className="w-full md:w-1/2 md:px-8">
                      <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8">
                         <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-bold mb-6">{service.title}</h3>
                      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {service.fullDescription}
                      </p>
                      <ul className="grid grid-cols-2 gap-4 mb-8">
                        {service.features.map((feature, i) => (
                           <li key={i} className="flex items-center text-gray-800 font-medium">
                              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                              {feature}
                           </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-2 text-black font-bold uppercase tracking-widest mt-4">
                        View Details <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                  </div>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};