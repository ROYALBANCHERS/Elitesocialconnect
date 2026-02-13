// Seed script to initialize database data
// This can be expanded to seed actual databases like MongoDB/PostgreSQL

console.log('🌱 Seeding database...');

const services = [
  {
    id: '1',
    slug: 'branding-web-design',
    title: "Branding & Web Design",
    shortDescription: "We build brands one story at a time.",
    fullDescription: "Your digital storefront is often the first interaction a customer has with your brand. We create immersive, responsive, and high-converting websites.",
    features: ["Brand Identity Design", "UI/UX Design", "Responsive Web Development", "Design Systems"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    icon: "Layers"
  },
  {
    id: '2',
    slug: 'social-media-marketing',
    title: "Social Media Management",
    shortDescription: "Build a loyal community around your brand.",
    fullDescription: "Social media is more than just posting images. It's about building a community.",
    features: ["Content Creation", "Community Management", "Influencer Marketing", "Paid Social Ads"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    icon: "Share2"
  },
  {
    id: '3',
    slug: 'seo-optimization',
    title: "SEO Optimization",
    shortDescription: "Improve organic rankings and drive qualified traffic.",
    fullDescription: "Visibility is key. Our white-hat SEO techniques ensure your brand appears exactly where your customers are looking.",
    features: ["Keyword Strategy", "On-Page Optimization", "Technical Audits", "Local SEO"],
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200",
    icon: "Search"
  },
  {
    id: '4',
    slug: 'digital-marketing',
    title: "Digital Marketing",
    shortDescription: "Data-driven campaigns that deliver ROI.",
    fullDescription: "We don't just spend budget; we invest it. Our performance marketing experts optimize every cent of your ad spend.",
    features: ["PPC Management", "Conversion Rate Optimization", "Retargeting Strategies", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    icon: "Megaphone"
  },
  {
    id: '5',
    slug: 'content-editorial',
    title: "Content & Editorial",
    shortDescription: "Tell your brand story with compelling narratives.",
    fullDescription: "Content is the bridge between your brand and your audience. We craft compelling narratives.",
    features: ["Blog Writing", "Press Releases", "Copywriting", "Video Scripting"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
    icon: "PenTool"
  },
  {
    id: '6',
    slug: 'public-relations',
    title: "Public Relations",
    shortDescription: "Strategic communications for reputation management.",
    fullDescription: "We help traditional businesses pivot to the digital age with strategic PR communications.",
    features: ["Media Relations", "Crisis Management", "Brand Launches", "Event PR"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    icon: "Globe"
  }
];

const portfolio = [
  { id: 1, title: "Luxe Interiors", category: "Branding", imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6", client: "Luxe Living", year: "2023" },
  { id: 2, title: "TechFlow App", category: "Web Design", imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3", client: "TechFlow Inc", year: "2024" },
  { id: 3, title: "Green Earth Campaign", category: "Campaign", imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09", client: "EcoNGO", year: "2023" },
  { id: 4, title: "Urban Fashion", category: "Social Media", imageUrl: "https://images.unsplash.com/photo-1483985988355-07fb3b4ae5f1", client: "UrbanStyle", year: "2023" },
  { id: 5, title: "FinSecure", category: "SEO", imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3", client: "FinSecure Bank", year: "2022" }
];

console.log(`✅ Seeded ${services.length} services`);
console.log(`✅ Seeded ${portfolio.length} portfolio items`);
console.log('\n📊 Database seeded successfully!');
