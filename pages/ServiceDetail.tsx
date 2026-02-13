import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col pt-20">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services">
                <Button>Back to Services</Button>
            </Link>
        </div>
    );
  }

  return (
    <div className="bg-white pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
         <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-black mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
         </Link>
         <h1 className="text-5xl md:text-7xl font-bold mb-8">{service.title}</h1>
         <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">{service.fullDescription}</p>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] overflow-hidden mb-20">
         <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <SectionTitle title="Key Features" subtitle="Why choose this service?" />
                <div className="grid grid-cols-1 gap-6">
                    {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                             <CheckCircle className="w-6 h-6 text-black mt-1 mr-4 shrink-0" />
                             <div>
                                 <h4 className="text-xl font-bold mb-2">{feature}</h4>
                                 <p className="text-gray-500">We implement industry best practices to ensure {feature.toLowerCase()} delivers tangible results for your business.</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-black text-white p-12 rounded-[3rem] h-fit sticky top-32">
                <h3 className="text-3xl font-bold mb-6">Ready to get started?</h3>
                <p className="text-gray-400 mb-8 text-lg">
                    Contact us today for a free consultation about your {service.title.toLowerCase()} needs.
                </p>
                <Link to="/contact">
                    <Button className="bg-white text-black hover:bg-gray-200 border-none w-full">
                        Request a Quote
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};