import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import BannerCTA from './components/BannerCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash === 'projects') {
        setCurrentPage('projects');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        // If there's a specific hash (like contact, services), scroll to it after a short delay to allow render
        if (hash !== 'home') {
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-orange-500 selection:text-white">
      <Header currentPage={currentPage} />
      <main>
        {currentPage === 'projects' ? (
          <ProjectsPage />
        ) : (
          <>
            <Hero />
            <SocialProof />
            <Services />
            <BannerCTA />
            <Testimonials />
            <FAQ />
            <Contact />
            <BottomCTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
