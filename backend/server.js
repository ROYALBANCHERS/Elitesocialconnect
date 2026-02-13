import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration - Allow requests from GitHub Pages and local development
const corsOptions = {
  origin: [
    'https://royalbanchers.github.io',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'https://elitesocialconnect.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});

app.use('/api/', limiter);

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// ===== DATABASE (In-memory for demo - replace with actual database) =====
const database = {
  services: [
    {
      id: '1',
      slug: 'branding-web-design',
      title: "Branding & Web Design",
      shortDescription: "We build brands one story at a time.",
      fullDescription: "Your digital storefront is often the first interaction a customer has with your brand. We create immersive, responsive, and high-converting websites that are not just visually stunning but also technically robust. From logo design to full brand guidelines, we define your visual identity.",
      features: ["Brand Identity Design", "UI/UX Design", "Responsive Web Development", "Design Systems"],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      icon: "Layers"
    },
    {
      id: '2',
      slug: 'social-media-marketing',
      title: "Social Media Management",
      shortDescription: "Build a loyal community around your brand.",
      fullDescription: "Social media is more than just posting images. It's about building a community. We create engaging content strategies, manage your community, and run targeted ad campaigns across Instagram, LinkedIn, Facebook, and Twitter to amplify your brand voice.",
      features: ["Content Creation", "Community Management", "Influencer Marketing", "Paid Social Ads"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
      icon: "Share2"
    },
    {
      id: '3',
      slug: 'seo-optimization',
      title: "SEO Optimization",
      shortDescription: "Improve organic rankings and drive qualified traffic.",
      fullDescription: "Visibility is key. Our white-hat SEO techniques ensure your brand appears exactly where your customers are looking. We focus on technical SEO, on-page optimization, and high-quality link building to drive sustainable organic growth.",
      features: ["Keyword Strategy", "On-Page Optimization", "Technical Audits", "Local SEO"],
      image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=1200",
      icon: "Search"
    },
    {
      id: '4',
      slug: 'digital-marketing',
      title: "Digital Marketing",
      shortDescription: "Data-driven campaigns that deliver ROI.",
      fullDescription: "We don't just spend budget; we invest it. Our performance marketing experts optimize every cent of your ad spend across Google, Meta, and LinkedIn to ensure maximum Return on Ad Spend (ROAS).",
      features: ["PPC Management", "Conversion Rate Optimization", "Retargeting Strategies", "A/B Testing"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      icon: "Megaphone"
    },
    {
      id: '5',
      slug: 'content-editorial',
      title: "Content & Editorial",
      shortDescription: "Tell your brand story with compelling narratives.",
      fullDescription: "Content is the bridge between your brand and your audience. We craft compelling narratives, press releases, and editorial content that establishes your brand as a thought leader in your industry.",
      features: ["Blog Writing", "Press Releases", "Copywriting", "Video Scripting"],
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
      icon: "PenTool"
    },
    {
      id: '6',
      slug: 'public-relations',
      title: "Public Relations",
      shortDescription: "Strategic communications for reputation management.",
      fullDescription: "We help traditional businesses pivot to the digital age. From cloud integrations to custom software solutions, we provide the technical infrastructure needed to scale your operations efficiently.",
      features: ["Media Relations", "Crisis Management", "Brand Launches", "Event PR"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      icon: "Globe"
    },
    {
      id: '7',
      slug: 'event-management',
      title: "Event Management",
      shortDescription: "Experiential design that creates lasting memories.",
      fullDescription: "From product launches to press conferences, we handle every aspect of event management with precision and creativity. Our events are designed to generate buzz and meaningful connections.",
      features: ["Product Launches", "Press Conferences", "Corporate Events", "Experiential Design"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      icon: "Calendar"
    },
    {
      id: '8',
      slug: 'photography-videography',
      title: "Photography & Videography",
      shortDescription: "Visual storytelling that captures your brand essence.",
      fullDescription: "Our team of photographers and videographers specialize in capturing architecture, interiors, and products. We create visual assets that tell your brand story beautifully.",
      features: ["Product Photography", "Interior Photography", "Corporate Videos", "Aerial Footage"],
      image: "https://images.unsplash.com/photo-1542038784456-1ea8499efdfa?auto=format&fit=crop&q=80&w=1200",
      icon: "Camera"
    }
  ],

  portfolio: [
    { id: 1, title: "Luxe Interiors", category: "Branding", imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800", client: "Luxe Living", year: "2023", description: "Complete brand identity for luxury interior design firm.", projectUrl: "#" },
    { id: 2, title: "TechFlow App", category: "Web Design", imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", client: "TechFlow Inc", year: "2024", description: "Modern SaaS platform with intuitive UX design.", projectUrl: "#" },
    { id: 3, title: "Green Earth Campaign", category: "Campaign", imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", client: "EcoNGO", year: "2023", description: "Digital awareness campaign for environmental NGO.", projectUrl: "#" },
    { id: 4, title: "Urban Fashion", category: "Social Media", imageUrl: "https://images.unsplash.com/photo-1483985988355-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", client: "UrbanStyle", year: "2023", description: "Social media strategy for fashion brand.", projectUrl: "#" },
    { id: 5, title: "FinSecure", category: "SEO", imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", client: "FinSecure Bank", year: "2022", description: "SEO campaign achieving 300% organic growth.", projectUrl: "#" },
    { id: 6, title: "Travel Dreams", category: "Content", imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", client: "TravelCo", year: "2024", description: "Content marketing for travel agency.", projectUrl: "#" },
    { id: 7, title: "Smeg Launch", category: "Event Management", imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", client: "Smeg", year: "2024", description: "Flagship store launch event in New Delhi.", projectUrl: "#" },
    { id: 8, title: "HNI Luxury", category: "Branding", imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800", client: "HNI", year: "2024", description: "Luxury kitchen brand digital transformation.", projectUrl: "#" }
  ],

  industries: [
    { id: 1, title: "Architecture & Interior Design", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800", desc: "Crafting digital spaces that reflect physical excellence.", slug: "architecture-interior" },
    { id: 2, title: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", desc: "Experiences that begin long before guest arrives.", slug: "hospitality" },
    { id: 3, title: "Lifestyle & Luxury", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800", desc: "Connecting premium brands with discerning audiences.", slug: "luxury-lifestyle" },
    { id: 4, title: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", desc: "Turning properties into aspirational homes.", slug: "real-estate" },
    { id: 5, title: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800", desc: "Building trust in healthcare communications.", slug: "healthcare" },
    { id: 6, title: "Education", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", desc: "Educational institutions digital presence.", slug: "education" }
  ],

  blogs: [
    {
      id: 1,
      title: "Office & Residential Interior Design Trends in Bangalore (2026 Guide)",
      excerpt: "Discover the latest interior design trends shaping Bangalore's offices and homes in 2026. From sustainable materials to smart home integration.",
      content: "Full article content goes here...",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      category: "Interior Design",
      author: "EliteSocial Team",
      date: "2025-01-15",
      slug: "interior-design-trends-bangalore-2026"
    },
    {
      id: 2,
      title: "Interior Designers in Delhi NCR: Residential & Commercial Design Trends (2026)",
      excerpt: "A comprehensive guide to Delhi NCR's top interior designers and the trends defining the region's design landscape in 2026.",
      content: "Full article content goes here...",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
      category: "Interior Design",
      author: "EliteSocial Team",
      date: "2025-01-10",
      slug: "delhi-ncr-interior-designers-2026"
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for Luxury Brands in 2026",
      excerpt: "Learn how top luxury brands are leveraging digital marketing to connect with high-net-worth audiences.",
      content: "Full article content goes here...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      category: "Digital Marketing",
      author: "Nishit Gururani",
      date: "2025-01-05",
      slug: "digital-marketing-luxury-brands-2026"
    }
  ],

  stats: {
    clients: "200+",
    team: "70+",
    retention: "85%",
    offices: "5+",
    projects: "500+"
  },

  team: [
    { id: 1, name: "Nishit Gururani", role: "Founder & CEO", image: "https://i.pravatar.cc/300?img=12", bio: "Visionary leader with 15+ years in digital marketing." },
    { id: 2, name: "Priya Sharma", role: "Creative Director", image: "https://i.pravatar.cc/300?img=5", bio: "Award-winning designer with eye for luxury aesthetics." },
    { id: 3, name: "Rahul Verma", role: "Tech Lead", image: "https://i.pravatar.cc/300?img=33", bio: "Full-stack expert specializing in web development." },
    { id: 4, name: "Ananya Singh", role: "Content Strategist", image: "https://i.pravatar.cc/300?img=9", bio: "Storyteller who crafts compelling brand narratives." }
  ]
};

// Store contact submissions
const contactSubmissions = [];

// Store newsletter subscribers
const newsletterSubscribers = [];

// ===== ROUTES =====

// Health check
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'EliteSocialConnect API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// ===== SERVICES ROUTES =====
app.get('/api/services', (req, res) => {
  res.json({
    status: 'success',
    data: database.services
  });
});

app.get('/api/services/:slug', (req, res) => {
  const service = database.services.find(s => s.slug === req.params.slug);
  if (!service) {
    return res.status(404).json({ status: 'error', message: 'Service not found' });
  }
  res.json({ status: 'success', data: service });
});

// ===== PORTFOLIO ROUTES =====
app.get('/api/portfolio', (req, res) => {
  const { category, client, year } = req.query;
  let filtered = database.portfolio;

  if (category) filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
  if (client) filtered = filtered.filter(p => p.client?.toLowerCase().includes(client.toLowerCase()));
  if (year) filtered = filtered.filter(p => p.year === year);

  res.json({
    status: 'success',
    data: filtered,
    count: filtered.length
  });
});

app.get('/api/portfolio/:id', (req, res) => {
  const item = database.portfolio.find(p => p.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ status: 'error', message: 'Portfolio item not found' });
  }
  res.json({ status: 'success', data: item });
});

// ===== INDUSTRIES ROUTES =====
app.get('/api/industries', (req, res) => {
  res.json({
    status: 'success',
    data: database.industries
  });
});

// ===== BLOG ROUTES =====
app.get('/api/blogs', (req, res) => {
  const { category, search } = req.query;
  let filtered = database.blogs;

  if (category) filtered = filtered.filter(b => b.category.toLowerCase() === category.toLowerCase());
  if (search) filtered = filtered.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(search.toLowerCase())
  );

  res.json({
    status: 'success',
    data: filtered,
    count: filtered.length
  });
});

app.get('/api/blogs/:slug', (req, res) => {
  const blog = database.blogs.find(b => b.slug === req.params.slug);
  if (!blog) {
    return res.status(404).json({ status: 'error', message: 'Blog post not found' });
  }
  res.json({ status: 'success', data: blog });
});

// ===== STATS ROUTE =====
app.get('/api/stats', (req, res) => {
  res.json({
    status: 'success',
    data: database.stats
  });
});

// ===== TEAM ROUTES =====
app.get('/api/team', (req, res) => {
  res.json({
    status: 'success',
    data: database.team
  });
});

// ===== CONTACT FORM =====
app.post('/api/contact', (req, res) => {
  const { name, email, phone, company, message, service } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide name, email, and message'
    });
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide a valid email address'
    });
  }

  // Store submission
  const submission = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    company: company || '',
    message,
    service: service || '',
    createdAt: new Date().toISOString(),
    ip: req.ip
  };
  contactSubmissions.push(submission);

  // TODO: Send email notification
  // await sendContactEmail(submission);

  res.json({
    status: 'success',
    message: 'Thank you for contacting us! Our team will get back to you shortly.',
    data: { id: submission.id }
  });
});

// Get all contact submissions (protected - add auth in production)
app.get('/api/contact/submissions', (req, res) => {
  res.json({
    status: 'success',
    data: contactSubmissions,
    count: contactSubmissions.length
  });
});

// ===== NEWSLETTER =====
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide an email address'
    });
  }

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return res.status(400).json({
      status: 'error',
      message: 'Please provide a valid email address'
    });
  }

  // Check if already subscribed
  if (newsletterSubscribers.find(s => s.email === email)) {
    return res.json({
      status: 'success',
      message: 'You are already subscribed to our newsletter.'
    });
  }

  const subscriber = {
    email,
    subscribedAt: new Date().toISOString(),
    ip: req.ip
  };
  newsletterSubscribers.push(subscriber);

  res.json({
    status: 'success',
    message: 'Thank you for subscribing to our newsletter!'
  });
});

// ===== ADMIN ROUTES =====

// Admin login (simplified - add proper auth in production)
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  // Demo credentials - replace with proper auth
  if (username === 'admin' && password === 'elitesocial@2025') {
    res.json({
      status: 'success',
      message: 'Login successful',
      data: {
        token: 'demo-token-' + Date.now(),
        user: { username, role: 'admin' }
      }
    });
  } else {
    res.status(401).json({
      status: 'error',
      message: 'Invalid credentials'
    });
  }
});

// Get all data for admin dashboard
app.get('/api/admin/dashboard', (req, res) => {
  res.json({
    status: 'success',
    data: {
      stats: database.stats,
      recentContacts: contactSubmissions.slice(-10).reverse(),
      recentSubscribers: newsletterSubscribers.slice(-10).reverse(),
      totalContacts: contactSubmissions.length,
      totalSubscribers: newsletterSubscribers.length
    }
  });
});

// Update stats
app.put('/api/admin/stats', (req, res) => {
  const newStats = req.body;
  database.stats = { ...database.stats, ...newStats };

  res.json({
    status: 'success',
    message: 'Stats updated successfully',
    data: database.stats
  });
});

// Add new blog post
app.post('/api/admin/blogs', (req, res) => {
  const { title, excerpt, content, image, category, author } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      status: 'error',
      message: 'Title and content are required'
    });
  }

  const newBlog = {
    id: database.blogs.length + 1,
    title,
    excerpt: excerpt || '',
    content,
    image: image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    category: category || 'General',
    author: author || 'EliteSocial Team',
    date: new Date().toISOString().split('T')[0],
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  };

  database.blogs.unshift(newBlog);

  res.json({
    status: 'success',
    message: 'Blog post created successfully',
    data: newBlog
  });
});

// Add new portfolio item
app.post('/api/admin/portfolio', (req, res) => {
  const { title, category, imageUrl, client, year, description, projectUrl } = req.body;

  if (!title || !category || !imageUrl) {
    return res.status(400).json({
      status: 'error',
      message: 'Title, category, and image are required'
    });
  }

  const newItem = {
    id: database.portfolio.length + 1,
    title,
    category,
    imageUrl,
    client: client || '',
    year: year || new Date().getFullYear().toString(),
    description: description || '',
    projectUrl: projectUrl || '#'
  };

  database.portfolio.unshift(newItem);

  res.json({
    status: 'success',
    message: 'Portfolio item added successfully',
    data: newItem
  });
});

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found'
  });
});

// ===== ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════╗
  ║                                                           ║
  ║        EliteSocialConnect Backend API                       ║
  ║                                                           ║
  ║        Server running on port ${PORT}                        ║
  ║        Environment: ${process.env.NODE_ENV || 'development'}                   ║
  ║                                                           ║
  ║        API Endpoints:                                      ║
  ║        → GET  /api/services                                ║
  ║        → GET  /api/portfolio                               ║
  ║        → GET  /api/blogs                                   ║
  ║        → POST /api/contact                                  ║
  ║        → POST /api/newsletter                              ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════╝
  `);
});
