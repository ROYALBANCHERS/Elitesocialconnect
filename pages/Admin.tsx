import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Settings, MessageSquare, LogOut, Save } from 'lucide-react';

export const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'inquiries' | 'settings'>('inquiries');
  const [messages, setMessages] = useState<any[]>([]);
  
  // Stats State
  const [stats, setStats] = useState({
    clients: '200+',
    team: '70+',
    retention: '85%'
  });

  useEffect(() => {
    if (isLoggedIn) {
        const storedMessages = localStorage.getItem('messages');
        if (storedMessages) setMessages(JSON.parse(storedMessages));

        const storedStats = localStorage.getItem('companyStats');
        if (storedStats) setStats(JSON.parse(storedStats));
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleSaveStats = () => {
      localStorage.setItem('companyStats', JSON.stringify(stats));
      alert("Company stats updated successfully!");
  };

  if (!isLoggedIn) {
      return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
              <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md w-full border border-gray-100">
                  <h2 className="text-2xl font-bold mb-6 text-center">Elite Admin</h2>
                  <form onSubmit={handleLogin} className="space-y-4">
                      <input type="password" placeholder="Password" className="w-full p-4 border rounded-xl bg-gray-50 focus:bg-white transition-colors focus:border-black outline-none" />
                      <Button fullWidth type="submit" className="bg-black text-white">Login</Button>
                  </form>
              </div>
          </div>
      );
  }

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
       <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
               <div>
                   <h1 className="text-4xl font-bold">Admin Dashboard</h1>
                   <p className="text-gray-500">Manage your website content and inquiries.</p>
               </div>
               <div className="flex gap-4">
                    <button 
                        onClick={() => setActiveTab('inquiries')}
                        className={`px-6 py-2 rounded-full font-medium ${activeTab === 'inquiries' ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                    >
                        Inquiries
                    </button>
                    <button 
                        onClick={() => setActiveTab('settings')}
                        className={`px-6 py-2 rounded-full font-medium ${activeTab === 'settings' ? 'bg-black text-white' : 'bg-white text-gray-600'}`}
                    >
                        Site Settings
                    </button>
                   <Button onClick={() => setIsLoggedIn(false)} variant="outline" className="rounded-full px-4 border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300">
                       <LogOut className="w-4 h-4" />
                   </Button>
               </div>
           </div>

           {activeTab === 'inquiries' && (
               <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
                   {messages.length === 0 ? (
                       <div className="p-20 text-center text-gray-400 flex flex-col items-center">
                           <MessageSquare className="w-12 h-12 mb-4 opacity-20" />
                           <p>No inquiries received yet.</p>
                       </div>
                   ) : (
                       <div className="overflow-x-auto">
                           <table className="w-full">
                               <thead className="bg-gray-50 border-b border-gray-100">
                                   <tr>
                                       <th className="p-6 text-left font-bold text-xs uppercase tracking-widest text-gray-500">Date</th>
                                       <th className="p-6 text-left font-bold text-xs uppercase tracking-widest text-gray-500">Name</th>
                                       <th className="p-6 text-left font-bold text-xs uppercase tracking-widest text-gray-500">Email</th>
                                       <th className="p-6 text-left font-bold text-xs uppercase tracking-widest text-gray-500">Message</th>
                                   </tr>
                               </thead>
                               <tbody className="divide-y divide-gray-100">
                                   {messages.map((msg, i) => (
                                       <tr key={i} className="hover:bg-gray-50 transition-colors">
                                           <td className="p-6 whitespace-nowrap text-sm text-gray-500">{msg.date}</td>
                                           <td className="p-6 font-bold">{msg.name}</td>
                                           <td className="p-6 text-sm">{msg.email}</td>
                                           <td className="p-6 text-gray-600 max-w-md truncate">{msg.message}</td>
                                       </tr>
                                   ))}
                               </tbody>
                           </table>
                       </div>
                   )}
               </div>
           )}

           {activeTab === 'settings' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                       <div className="flex items-center gap-3 mb-8">
                           <Settings className="w-6 h-6" />
                           <h3 className="text-2xl font-bold">Company Stats</h3>
                       </div>
                       
                       <div className="space-y-6">
                           <div>
                               <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Satisfied Clients</label>
                               <input 
                                   type="text" 
                                   value={stats.clients}
                                   onChange={(e) => setStats({...stats, clients: e.target.value})}
                                   className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-black"
                               />
                           </div>
                           <div>
                               <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Team Size</label>
                               <input 
                                   type="text" 
                                   value={stats.team}
                                   onChange={(e) => setStats({...stats, team: e.target.value})}
                                   className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-black"
                               />
                           </div>
                           <div>
                               <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">Retention Rate</label>
                               <input 
                                   type="text" 
                                   value={stats.retention}
                                   onChange={(e) => setStats({...stats, retention: e.target.value})}
                                   className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:border-black"
                               />
                           </div>
                           
                           <Button onClick={handleSaveStats} fullWidth className="bg-black text-white mt-4">
                               <Save className="w-4 h-4" /> Save Changes
                           </Button>
                       </div>
                   </div>
                   
                   <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center text-center text-gray-400">
                       <div>
                           <p className="mb-2">More settings coming soon...</p>
                           <p className="text-xs uppercase tracking-widest">Logo Management • User Access • SEO</p>
                       </div>
                   </div>
               </div>
           )}
       </div>
    </div>
  );
};
