import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving to admin panel (in a real app, this goes to backend)
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ ...formData, id: Date.now(), date: new Date().toLocaleDateString() });
    localStorage.setItem('messages', JSON.stringify(messages));
    
    alert("Message sent! Check the admin panel.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-white pt-32 pb-20">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
               <div>
                   <SectionTitle title="Contact Us" subtitle="Let's start a conversation." />
                   <p className="text-xl text-gray-600 mb-12">
                       We're ready to help you take your brand to the next level. Fill out the form or drop us a line directly.
                   </p>
                   <div className="space-y-6 text-lg">
                       <p><span className="font-bold block">Email:</span> hello@elitesocialconnect.com</p>
                       <p><span className="font-bold block">Phone:</span> +91 98765 43210</p>
                       <p><span className="font-bold block">Address:</span> Cyber City, Gurugram, India</p>
                   </div>
               </div>
               
               <div className="bg-gray-50 p-10 rounded-[3rem]">
                   <form onSubmit={handleSubmit} className="space-y-6">
                       <div>
                           <label className="block text-sm font-bold uppercase tracking-widest mb-2">Name</label>
                           <input 
                               type="text" 
                               required
                               className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-black transition-colors"
                               placeholder="Your name"
                               value={formData.name}
                               onChange={(e) => setFormData({...formData, name: e.target.value})}
                           />
                       </div>
                       <div>
                           <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email</label>
                           <input 
                               type="email" 
                               required
                               className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-black transition-colors"
                               placeholder="your@email.com"
                               value={formData.email}
                               onChange={(e) => setFormData({...formData, email: e.target.value})}
                           />
                       </div>
                       <div>
                           <label className="block text-sm font-bold uppercase tracking-widest mb-2">Message</label>
                           <textarea 
                               required
                               rows={4}
                               className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-black transition-colors"
                               placeholder="Tell us about your project"
                               value={formData.message}
                               onChange={(e) => setFormData({...formData, message: e.target.value})}
                           ></textarea>
                       </div>
                       <Button type="submit" fullWidth className="bg-black text-white rounded-xl">
                           Send Message <Send className="w-4 h-4" />
                       </Button>
                   </form>
               </div>
           </div>
       </div>
    </div>
  );
};