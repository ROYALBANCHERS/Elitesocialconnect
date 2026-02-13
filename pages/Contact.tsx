import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Send } from 'lucide-react';
import { api } from '../services/api';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const result = await api.submitContactForm(formData);

    if (result.status === 'success') {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }

    setIsSubmitting(false);
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
                   {submitStatus === 'success' && (
                       <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-xl">
                           ✓ Message sent successfully! We'll get back to you soon.
                       </div>
                   )}
                   {submitStatus === 'error' && (
                       <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-xl">
                           ✕ Failed to send message. Please try again.
                       </div>
                   )}
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
                           <label className="block text-sm font-bold uppercase tracking-widest mb-2">Phone (Optional)</label>
                           <input
                               type="tel"
                               className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-black transition-colors"
                               placeholder="+91 98765 43210"
                               value={formData.phone}
                               onChange={(e) => setFormData({...formData, phone: e.target.value})}
                           />
                       </div>
                       <div>
                           <label className="block text-sm font-bold uppercase tracking-widest mb-2">Company (Optional)</label>
                           <input
                               type="text"
                               className="w-full bg-white border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-black transition-colors"
                               placeholder="Your company"
                               value={formData.company}
                               onChange={(e) => setFormData({...formData, company: e.target.value})}
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
                       <Button type="submit" fullWidth disabled={isSubmitting} className="bg-black text-white rounded-xl">
                           {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
                       </Button>
                   </form>
               </div>
           </div>
       </div>
    </div>
  );
};
