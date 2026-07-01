import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LocalBusinessSchema from './components/LocalBusinessSchema';
import PageTransitionLayout from './components/motion/PageTransitionLayout';
import CustomCursor from './components/motion/CustomCursor';
import TechAmbientBackground from './components/motion/TechAmbientBackground';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';
import Blog from './pages/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HelpCenter from './pages/HelpCenter';
import Testimonials from './pages/Testimonials';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import CloudSolutions from './pages/services/CloudSolutions';
import AiMl from './pages/services/AiMl';
import DevOps from './pages/services/DevOps';
import Cybersecurity from './pages/services/Cybersecurity';
import UiUxDesign from './pages/services/UiUxDesign';
import SeoBacklinks from './pages/services/SeoBacklinks';
import DigitalMarketing from './pages/services/DigitalMarketing';
import GraphicDesign from './pages/services/GraphicDesign';
import StaffAugmentation from './pages/services/StaffAugmentation';
import CustomSoftware from './pages/services/CustomSoftware';
import WordPressDevelopment from './pages/services/WordPressDevelopment';
import Internships from './pages/Internships';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import ProductDetailPage from './pages/ProductDetail';

function App() {
  return (
    <>
      <TechAmbientBackground />
      <CustomCursor />
      <ScrollToTop />
      <Navbar />

      <div className="relative min-h-screen flex flex-col section-surface-soft text-slate-200">
        <LocalBusinessSchema />
        <main className="flex-grow relative z-[1]">
          <Routes>
            <Route element={<PageTransitionLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
              <Route path="/services/ai-ml" element={<AiMl />} />
              <Route path="/services/devops" element={<DevOps />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
              <Route path="/services/seo-backlinks" element={<SeoBacklinks />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/graphic-design" element={<GraphicDesign />} />
              <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
              <Route path="/services/custom-software" element={<CustomSoftware />} />
              <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
