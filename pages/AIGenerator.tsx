import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { generateMarketingIdeas } from '../services/geminiService';
import { Sparkles, Loader2, Lightbulb } from 'lucide-react';

export const AIGenerator: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [industry, setIndustry] = useState('');
  const [audience, setAudience] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const ideas = await generateMarketingIdeas(brand, industry, audience);
      setResult(ideas);
    } catch (err) {
      setError("Failed to generate ideas. Please check API key.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Powered by Gemini AI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">AI Strategy Generator</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Generate innovative marketing campaigns instantly.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Input Form */}
            <div className="bg-gray-50 p-10 rounded-[3rem] h-fit">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-yellow-500" />
                    Campaign Details
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-widest mb-2">Brand Name</label>
                        <input 
                            type="text" 
                            required
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-all"
                            placeholder="e.g. EcoWare"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-widest mb-2">Industry</label>
                        <input 
                            type="text" 
                            required
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-all"
                            placeholder="e.g. Sustainable Products"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-widest mb-2">Target Audience</label>
                        <input 
                            type="text" 
                            required
                            value={audience}
                            onChange={(e) => setAudience(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-all"
                            placeholder="e.g. Millennials"
                        />
                    </div>
                    <Button type="submit" fullWidth disabled={loading} className="bg-black text-white rounded-xl">
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin h-5 w-5" /> Generating...
                            </>
                        ) : (
                            <>
                                <Sparkles className="h-5 w-5" /> Generate Ideas
                            </>
                        )}
                    </Button>
                </form>
            </div>

            {/* Results Display */}
            <div className="relative">
                {!result && !loading && !error && (
                        <div className="h-full flex items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-[3rem] text-gray-400 text-center">
                        <div>
                            <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-20" />
                            <p>Results will appear here.</p>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="h-full flex items-center justify-center p-12">
                        <div className="text-center">
                            <Loader2 className="h-12 w-12 animate-spin text-black mx-auto mb-4" />
                            <p className="text-gray-500">Thinking...</p>
                        </div>
                    </div>
                )}

                {error && (
                        <div className="bg-red-50 border border-red-100 p-6 rounded-2xl text-red-500">
                        {error}
                        </div>
                )}

                {result && (
                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl animate-fade-in-up">
                        <h3 className="text-2xl font-bold text-black mb-6 border-b border-gray-100 pb-4">
                            Strategy Output
                        </h3>
                        <div 
                            className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-600"
                            dangerouslySetInnerHTML={{ __html: result }}
                        />
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};