import { Search, Share2, Code, Megaphone, PenTool, BarChart, Smartphone, Globe, Layers } from 'lucide-react';
import { Service, PortfolioItem } from './types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'branding-web-design',
    title: "Branding & Web Design",
    shortDescription: "We build brands one story at a time.",
    fullDescription: "Your digital storefront is often the first interaction a customer has with your brand. We create immersive, responsive, and high-converting websites that are not just visually stunning but also technically robust. From logo design to full brand guidelines, we define your visual identity.",
    icon: Layers,
    features: ["Brand Identity Design", "UI/UX Design", "Responsive Web Development", "Design Systems"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '2',
    slug: 'social-media-marketing',
    title: "Social Media Management",
    shortDescription: "Build a loyal community around your brand.",
    fullDescription: "Social media is more than just posting images. It's about building a community. We create engaging content strategies, manage your community, and run targeted ad campaigns across Instagram, LinkedIn, Facebook, and Twitter to amplify your brand voice.",
    icon: Share2,
    features: ["Content Creation", "Community Management", "Influencer Marketing", "Paid Social Ads"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '3',
    slug: 'seo-optimization',
    title: "SEO Optimization",
    shortDescription: "Improve organic rankings and drive qualified traffic.",
    fullDescription: "Visibility is key. Our white-hat SEO techniques ensure your brand appears exactly where your customers are looking. We focus on technical SEO, on-page optimization, and high-quality link building to drive sustainable organic growth.",
    icon: Search,
    features: ["Keyword Strategy", "On-Page Optimization", "Technical Audits", "Local SEO"],
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '4',
    slug: 'digital-marketing',
    title: "Digital Marketing",
    shortDescription: "Data-driven campaigns that deliver ROI.",
    fullDescription: "We don't just spend budget; we invest it. Our performance marketing experts optimize every cent of your ad spend across Google, Meta, and LinkedIn to ensure maximum Return on Ad Spend (ROAS).",
    icon: Megaphone,
    features: ["PPC Management", "Conversion Rate Optimization", "Retargeting Strategies", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '5',
    slug: 'content-editorial',
    title: "Content & Editorial",
    shortDescription: "Tell your brand story with compelling narratives.",
    fullDescription: "Content is the bridge between your brand and your audience. We craft compelling narratives, press releases, and editorial content that establishes your brand as a thought leader in your industry.",
    icon: PenTool,
    features: ["Blog Writing", "Press Releases", "Copywriting", "Video Scripting"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '6',
    slug: 'public-relations',
    title: "Public Relations",
    shortDescription: "Strategic communications for reputation management.",
    fullDescription: "We help traditional businesses pivot to the digital age. From cloud integrations to custom software solutions, we provide the technical infrastructure needed to scale your operations efficiently.",
    icon: Globe,
    features: ["Media Relations", "Crisis Management", "Brand Launches", "Event PR"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const portfolio: PortfolioItem[] = [
  { id: 1, title: "Luxe Interiors", category: "Branding", imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", client: "Luxe Living", year: "2023" },
  { id: 2, title: "TechFlow App", category: "Web Design", imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", client: "TechFlow Inc", year: "2024" },
  { id: 3, title: "Green Earth", category: "Campaign", imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", client: "EcoNGO", year: "2023" },
  { id: 4, title: "Urban Fashion", category: "Social Media", imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", client: "UrbanStyle", year: "2023" },
  { id: 5, title: "FinSecure", category: "SEO", imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", client: "FinSecure Bank", year: "2022" },
  { id: 6, title: "Travel Dreams", category: "Content", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", client: "TravelCo", year: "2024" },
];

export const clientLogos = [
  "COLSTON", "smeg", "METALIA", "Featherlite", "HNI", "AXOR", "DURAVIT", "jaquar", "L&T"
];

export const industries = [
  { 
    title: "Architecture & Interior Design", 
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    desc: "Crafting digital spaces that reflect physical excellence."
  },
  { 
    title: "Hospitality", 
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    desc: "Experiences that begin long before the guest arrives."
  },
  { 
    title: "Lifestyle & Luxury", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    desc: "Connecting premium brands with discerning audiences."
  },
  { 
    title: "Real Estate", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    desc: "Turning properties into aspirational homes."
  }
];

export const successStories = [
  {
    id: 1,
    client: "smeg",
    title: "Smeg launches its flagship store in New Delhi",
    description: "We are excited to launch our first experience center in New Delhi, that will showcase our globally celebrated designs to bother designers and consumers.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200", 
    stats: "100+ Attendees",
    quote: "We are excited to launch our first experience center in new delhi, that will showcase our globally celebrated designs to bother designers and consumers",
    author: "Marketing Team"
  }
];

export const insights = [
  {
    id: 1,
    category: "BLOG",
    title: "Office & Residential Interior Design Trends in Bangalore (2026 Guide)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    link: "/blog/trends-2026",
    year: "2026"
  },
  {
    id: 2,
    category: "BLOG",
    title: "Interior Designers in Delhi NCR: Residential & Commercial Design Trends (2026)",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    link: "/blog/delhi-trends",
    year: "2026"
  }
];
