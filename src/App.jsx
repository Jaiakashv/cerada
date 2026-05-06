import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Organizers from './components/Organizers';
import Themes from './components/Themes';
import Highlights from './components/Highlights';
import Tracks from './components/Tracks';
import ImportantDates from './components/ImportantDates';
import WhyJoinUs from './components/WhyJoinUs';
import Publications from './components/Publications';
import Footer from './components/Footer';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Welcome />
        <Organizers />
        <Themes />
        <Highlights />
        <Tracks />
        <ImportantDates />
        <WhyJoinUs />
        <Publications />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:bg-primary-700 transition-colors"
      >
        <ChevronUp size={24} />
      </motion.button>
    </div>
  );
}

export default App;
