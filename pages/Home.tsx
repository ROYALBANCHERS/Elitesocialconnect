import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle, Quote } from 'lucide-react';
import { Button } from '../components/Button';
import { SectionTitle } from '../components/SectionTitle';
import { services, clientLogos, industries, successStories, insights } from '../data';

export const Home: React.FC = () => {
  const [stats, setStats] = useState({
    clients: '200+',
    team: '70+',
    retention: '85%'
  });

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    const storedStats = localStorage.getItem('companyStats');
    if (storedStats) {
      setStats(JSON.parse(storedStats));
    }
  }, []);

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! Our team will contact you shortly.");
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-5xl animate-fade-in-up">
            <h1 className="text-6xl md:text-9xl font-medium tracking-tight text-black mb-6 leading-[1]">
              We create <span className="text-gray-400 italic font-serif">hype</span>, not ads.
            </h1>
            <p className="text-2xl md:text-3xl text-black font-medium mb-8">
               India's leading agency for design-centric brands.
            </p>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              We create sales-driven marketing strategies for luxury brands, architects, and designers through digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="black" withArrow className="rounded-full px-10 py-5 text-lg">
                  Connect with us
                </Button>
              </Link>
              <Link to="/portfolio">
                 <Button variant="outline" className="rounded-full px-10 py-5 text-lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract background decorative element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-5 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" className="object-cover w-full h-full grayscale" />
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Empowering Our Clients</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center px-4">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <span key={index} className="text-2xl md:text-3xl font-bold text-gray-300 uppercase tracking-widest hover:text-black transition-colors cursor-default select-none">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story / Featured Product Section */}
      {successStories.map((story) => (
        <section key={story.id} className="py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative rounded-[3rem] overflow-hidden aspect-square lg:aspect-[4/5] bg-gray-100 group">
                        <img 
                            src={story.image} 
                            alt={story.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-8 left-8">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Smeg_logo.svg/2560px-Smeg_logo.svg.png" className="h-8 md:h-12 w-auto object-contain brightness-0 invert" alt={story.client} />
                        </div>
                    </div>
                    <div>
                        <span className="inline-block px-4 py-1 rounded-full border border-black/10 text-xs font-bold uppercase tracking-widest mb-8">Success Story</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{story.title}</h2>
                        
                        <div className="bg-gray-50 p-8 rounded-3xl mb-8 relative">
                            <Quote className="w-10 h-10 text-gray-200 absolute top-6 left-6 -z-10" />
                            <p className="text-xl text-gray-600 italic mb-4 relative z-10">"{story.quote}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-black rounded-full text-white flex items-center justify-center font-bold text-xs">MT</div>
                                <p className="font-bold text-sm">{story.author}</p>
                            </div>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-4xl font-bold">{story.stats}</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-xs">Celebrating Global Designs</p>
                        </div>

                        <Link to="/portfolio">
                            <Button variant="black" className="rounded-full px-8 py-4">Read Full Story</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      ))}

      {/* Philosophy Section */}
      <section className="py-32 bg-black text-white rounded-[3rem] mx-4 md:mx-8 my-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
                <span className="inline-block px-4 py-1 rounded-full border border-white/20 mb-8 text-sm uppercase tracking-widest">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                  Creative strategies that transform companies to brands.
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-12">
                  We believe in a holistic approach where design, technology, and strategy converge. Our methodology is rooted in deep industry insights and consumer psychology.
                </p>
                <div className="flex gap-4">
                  <Link to="/about">
                    <Button className="bg-white text-black hover:bg-gray-200 border-none">
                      Read Our Story
                    </Button>
                  </Link>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                   <h3 className="text-2xl font-bold mb-4">AI First</h3>
                   <p className="text-gray-400 text-sm">Predictive analytics & content scale.</p>
                </div>
                <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm mt-12 hover:bg-white/20 transition-colors">
                   <h3 className="text-2xl font-bold mb-4">Design Centric</h3>
                   <p className="text-gray-400 text-sm">Premium aesthetics that build trust.</p>
                </div>
                <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                   <h3 className="text-2xl font-bold mb-4">Integrated</h3>
                   <p className="text-gray-400 text-sm">Single window solution for marketing.</p>
                </div>
                <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm mt-12 hover:bg-white/20 transition-colors">
                   <h3 className="text-2xl font-bold mb-4">Experiential</h3>
                   <p className="text-gray-400 text-sm">Concept to execution of luxury.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Cards Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <SectionTitle title="What We Do" subtitle="Comprehensive Solutions" />
             <Link to="/services" className="mb-16 hidden md:block">
                <Button variant="outline" className="rounded-full">View All Services</Button>
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <Link key={service.id} to={`/services/${service.slug}`} className="group block">
                <div className="bg-white p-8 rounded-3xl h-full border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-200 hover:-translate-y-2">
                  <div className="mb-8 overflow-hidden rounded-2xl h-64 bg-gray-100 relative">
                     <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                        <service.icon className="w-5 h-5 text-black" />
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                     <span className="text-sm font-semibold uppercase tracking-wider text-black">Learn More</span>
                     <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transform transition-transform group-hover:rotate-45">
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries / Expertise Section */}
      <section className="py-32 bg-gray-50 rounded-[3rem] mx-4 md:mx-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Industries" subtitle="Our Expertise Across Niches" center />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
                {industries.map((ind, i) => (
                    <div key={i} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                        <img src={ind.image} alt={ind.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-white text-xl font-bold mb-2">{ind.title}</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">
                                {ind.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <SectionTitle title="Our Latest Insights" subtitle="" center />
                <p className="text-gray-500 max-w-2xl mx-auto">Sharing ideas on design-centric marketing & content creation for luxury brands across interior, hospitality, architecture, lifestyle & real estate.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {insights.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-[2.5rem] mb-6 h-[400px]">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                {item.year}
                            </div>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">{item.category}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:underline decoration-1 underline-offset-4">{item.title}</h3>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                 <Link to="/blog">
                    <Button variant="outline" className="rounded-full px-10 py-4">View All Insights</Button>
                </Link>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="space-y-4 py-8 md:py-0">
              <span className="text-7xl font-bold block text-black">{stats.clients}</span>
              <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Satisfied Clients</span>
            </div>
            <div className="space-y-4 py-8 md:py-0">
               <span className="text-7xl font-bold block text-black">{stats.team}</span>
               <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Team Size</span>
            </div>
            <div className="space-y-4 py-8 md:py-0">
               <span className="text-7xl font-bold block text-black">{stats.retention}</span>
               <span className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Retention Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Connect Form Section */}
      <section className="py-32" id="connect">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 shadow-lg flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2 space-y-8">
                    <span className="inline-block px-4 py-1 rounded-full border border-black/10 text-xs font-bold uppercase tracking-widest">Schedule Consultation</span>
                    <h2 className="text-5xl font-bold leading-tight">Let's Connect</h2>
                    <p className="text-xl text-gray-600">Connect with our experts for a free consultation and tailored solutions.</p>
                    
                    <div className="space-y-4 pt-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                                <CheckCircle className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Expert Analysis</h4>
                                <p className="text-sm text-gray-500">Deep dive into your current digital presence.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                                <CheckCircle className="text-white w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold">Custom Strategy</h4>
                                <p className="text-sm text-gray-500">Tailored roadmap for your growth.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <form onSubmit={handleConnectSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Your Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors rounded-t-lg"
                                    placeholder="Nishit Gururani"
                                    value={form.name}
                                    onChange={e => setForm({...form, name: e.target.value})}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors rounded-t-lg"
                                    placeholder="nishit@elitesocial.co.in"
                                    value={form.email}
                                    onChange={e => setForm({...form, email: e.target.value})}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Phone Number</label>
                                <input 
                                    type="tel" 
                                    className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors rounded-t-lg"
                                    placeholder="+91 9899632733"
                                    value={form.phone}
                                    onChange={e => setForm({...form, phone: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Company Name</label>
                                <input 
                                    type="text" 
                                    className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors rounded-t-lg"
                                    placeholder="EliteDigital"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Your Message</label>
                            <textarea 
                                rows={3}
                                className="w-full bg-white border-b-2 border-gray-200 p-3 focus:outline-none focus:border-black transition-colors rounded-t-lg"
                                placeholder="I'm interested in..."
                                value={form.message}
                                onChange={e => setForm({...form, message: e.target.value})}
                            ></textarea>
                        </div>
                        <div className="pt-4">
                             <Button type="submit" variant="black" className="rounded-full px-12">Submit Request</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
