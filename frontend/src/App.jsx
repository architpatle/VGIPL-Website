import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import MobileMenu from './components/MobileMenu';
import HomeV1 from './pages/HomeV1';
import HomeV2 from './pages/HomeV2';
import About from './pages/About';
import Services from './pages/Services';
import ServiceSingle from './pages/ServiceSingle';
import Works from './pages/Works';
import WorkSingle from './pages/WorkSingle';
import BlogStandard from './pages/BlogStandard';
import BlogGrid2 from './pages/BlogGrid2';
import BlogGrid3 from './pages/BlogGrid3';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import ProductSingle from './pages/ProductSingle';
import ConversationalAI from './pages/ConversationalAI';
import TransactCore from './pages/TransactCore';
import AuditFlux from './pages/AuditFlux';
import FinFlow from './pages/FinFlow';
import Careers from './pages/Careers';
import WhyJoin from './pages/WhyJoin';
import MeetOurPeople from './pages/MeetOurPeople';
import CareerPath from './pages/CareerPath';
import CareerDetails from './pages/CareerDetails';
import JobSingle from './pages/JobSingle';
import IPO from './pages/IPO';
import InvestorSingle from './pages/InvestorSingle';
import ResourceSingle from './pages/ResourceSingle';
import BoardManagement from './pages/BoardManagement';
import AIPage from './pages/AIPage';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Policies from "./pages/Policies";
import NotFound from './pages/NotFound';
import FloatingSocial from './components/FloatingSocial/FloatingSocial';
import ECRM from './pages/ECRM';
import ELOS from './pages/ELOS';
import SecureViewAI from './pages/SecureViewAI';
import DigitalIdentityVerificationPlatform from './pages/DigitalIdentityVerificationPlatform';
import InfrastructureAndIntelligence from './pages/InfrastructureAndIntelligence';
import VConnect from './pages/VConnect';


function App() {
  const location = useLocation();

  useEffect(() => {
    // Basic route change handler to scroll to top
    window.scrollTo(0, 0);

    // Re-initialize external JS libraries/plugins on route change
    const timer = setTimeout(() => {
      // Re-initialize Swiper Carousels
      if (window.runCarouselJS) window.runCarouselJS();
      // Re-initialize GSAP & ScrollTriggers
      if (window.runGsapAnimations) window.runGsapAnimations();
      // Re-initialize main UI scripts
      if (window.runMainJS) window.runMainJS();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <ScrollTop />
      <main id="wrapper">
        <Navbar />
        <FloatingSocial />
        <div id="page-content">
          <Routes>
            <Route path="/" element={<HomeV1 />} />
            <Route path="/index-v2" element={<HomeV2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceSingle />} />
            <Route path="/products/conversational-ai-companion" element={<ConversationalAI />} />
            <Route path="/products/transact-core" element={<TransactCore />} />
            <Route path="/products/audit-flux" element={<AuditFlux />} />
            <Route path="/products/fin-flow" element={<FinFlow />} />
            <Route path="/products/e-crm" element={<ECRM />} />
            <Route path="/products/e-los" element={<ELOS />} />
            <Route path="/products/secure-view-ai" element={<SecureViewAI />} />
            <Route path="/products/digital-identity-verification-platform" element={<DigitalIdentityVerificationPlatform />} />
            <Route path="/products/infrastructure-and-intelligence" element={<InfrastructureAndIntelligence />} />
            <Route path="/products/v-connect" element={<VConnect />} />
            <Route path="/products/:slug" element={<ProductSingle />} />
            <Route path="/products" element={<Works />} />
            <Route path="/work-single" element={<WorkSingle />} />
            <Route path="/blog-standard" element={<BlogStandard />} />
            <Route path="/blog-two-columns" element={<BlogGrid2 />} />
            <Route path="/blog-three-columns" element={<BlogGrid3 />} />
            <Route path="/blog/:blogSlug" element={<BlogSingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/why-join" element={<WhyJoin />} />
            <Route path="/careers/meet-our-people" element={<MeetOurPeople />} />
            <Route path="/careers/career-path" element={<CareerPath />} />
            <Route path="/careers/:jobId" element={<CareerDetails />} />
            <Route path="/careers/:slug" element={<JobSingle />} />
            <Route path="/ipo" element={<IPO />} />
            <Route path="/investors/board-and-management" element={<BoardManagement />} />
            <Route path="/investors/board-and-management/:subpage" element={<BoardManagement />} />
            <Route path="/investors/:slug" element={<InvestorSingle />} />
            <Route path="/resource/:slug" element={<ResourceSingle />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />

      <MobileMenu />
    </>
  );
}

export default App;
