import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { AIGenerator } from './pages/AIGenerator';
import { Admin } from './pages/Admin';
import { Legal } from './pages/Legal';
import { Blog } from './pages/Blog';

// ScrollToTop component to ensure pages start at top on navigation
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => new URL(window.location.href), [window.location.href]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Simulating scroll restoration manually for HashRouter if needed, or just let default behavior work */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ai-tools" element={<AIGenerator />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
